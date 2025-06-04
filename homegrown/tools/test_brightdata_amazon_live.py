"""
LIVE integration test for the Bright Data Amazon scraper tool.

• Requires an active network connection and a valid BRIGHTDATA_TOKEN.
• If either is missing, the test is skipped.
"""

import os
import pytest

from homegrown.tool_runner import LocalToolRunner
from dotenv import load_dotenv
load_dotenv()


# ---------- configurables -------------------------------------------------
TEST_URLS = [
    "https://www.amazon.com/dp/B0CRMZHDG8",
    "https://www.amazon.com/dp/B07PZF3QS3",
]
# Increase if your Bright Data snapshots take longer than 60 s
TIMEOUT_S = 120
# -------------------------------------------------------------------------


@pytest.mark.network
def test_brightdata_amazon_live():

    token = os.getenv("BRIGHTDATA_TOKEN")
    if not token:
        pytest.skip("BRIGHTDATA_TOKEN not set; skipping live Bright Data test")

    # Instantiate runner (auto-discovers brightdata_amazon_scrape)
    runner = LocalToolRunner()

    # Call the real tool
    result = runner.run_tool(
        "brightdata_amazon_scrape",
        urls=TEST_URLS,
        timeout=TIMEOUT_S,
    )

    # Basic assertions
    rows = result["rows"]
    assert len(rows) == len(TEST_URLS)
    for row in rows:
        assert "title" in row and row["title"], "Title missing"
        assert row.get("url") or row.get("asin"), "Row lacks identifier"

    # Ensure metrics were logged
    stats = runner.get_tool_stats("brightdata_amazon_scrape")
    assert stats["success"] >= 1
