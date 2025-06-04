"""
homegrown/tools/brightdata_amazon_scraper.py
────────────────────────────────────────────
Fetch structured product data from Amazon via Bright Data’s Ready-Scraper.

ENV:
    BRIGHTDATA_TOKEN   – Bright Data bearer token (required)
"""

from __future__ import annotations
import os, time
from typing import List, Dict, Any

from homegrown.tools.decorators import register_tool, record_metrics, ToolError


# ── lazy client initialisation ────────────────────────────────────────────
_CLIENT = None


def _get_client():
    """Create the Bright Data client on first use; raise ToolError if missing."""
    global _CLIENT
    if _CLIENT is not None:
        return _CLIENT

    try:
        from brightdata.ready_scrapers.amazon import AmazonScraper  # heavy import
    except ImportError as exc:
        raise ToolError(
            "dependency_missing",
            "brightdata.ready_scrapers is not installed",
            retryable=False,
        ) from exc

    token = os.getenv("BRIGHTDATA_TOKEN")
    if not token:
        raise ToolError("auth_error", "BRIGHTDATA_TOKEN env var not set", retryable=False)

    _CLIENT = AmazonScraper(bearer_token=token)
    return _CLIENT


# ── the actual tool callable ──────────────────────────────────────────────
@register_tool(
    name="brightdata_amazon_scrape",
    summary="Scrape Amazon product pages and return Bright Data JSON rows.",
    args_schema={
        "urls": {"type": "list[str]", "description": "Amazon product URLs"},
        "timeout": {"type": "int", "default": 120, "units": "s"},
    },
    returns_schema={"rows": "list[dict]"},
    side_effects=["network"],
    default_confidence=0.83,
    idempotent=True,
)
@record_metrics("brightdata_amazon_scrape")
def brightdata_amazon_scrape(*, urls: List[str], timeout: int = 120) -> Dict[str, Any]:
    """
    • Up to 50 URLs per call.
    • If a row has null price, the item is likely out of stock.
    • Large payload (~50 KB each); callers should store a pointer, not full HTML.
    """
    from brightdata.utils.poll import poll_until_ready  # light import

    client = _get_client()
    start = time.perf_counter()

    try:
        snapshot_id = client.collect_by_url(urls)
        result      = poll_until_ready(client, snapshot_id, timeout=timeout)  # blocking
    except TimeoutError as exc:
        raise ToolError(
            "timeout",
            f"Poll timed out after {timeout}s",
            retryable=True,
        ) from exc

    latency = round(time.perf_counter() - start, 2)
    return {"rows": result.data, "latency_s": latency}
