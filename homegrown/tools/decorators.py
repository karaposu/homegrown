"""
homegrown/tools/decorators.py
─────────────────────────────
Utility decorators + registry backing store used by LocalToolRunner.
"""

from __future__ import annotations
import functools, time
from typing import Any, Callable, Dict, List, Optional

# --------------------------------------------------------------------------- #
# Global stores (simple dicts; swap for Redis or Sqlite if you need persistence)
# --------------------------------------------------------------------------- #
_TOOL_REGISTRY: Dict[str, Dict[str, Any]] = {}
_TOOL_STATS: Dict[str, Dict[str, Any]] = {}

# --------------------------------------------------------------------------- #
# Public getters (used by LocalToolRunner)
# --------------------------------------------------------------------------- #
def get_registry() -> Dict[str, Dict[str, Any]]:
    return _TOOL_REGISTRY


def get_stats(tool_name: str) -> Dict[str, Any]:
    return _TOOL_STATS.get(tool_name, {})


# --------------------------------------------------------------------------- #
# Custom exception type for predictable error handling
# --------------------------------------------------------------------------- #
class ToolError(Exception):
    """Exception raised by a tool to signal domain-specific failures."""

    def __init__(self, type_: str, msg: str, *, retryable: bool = False):
        super().__init__(msg)
        self.type = type_
        self.retryable = retryable


# --------------------------------------------------------------------------- #
# Metrics decorator
# --------------------------------------------------------------------------- #
def record_metrics(tool_name: Optional[str] = None) -> Callable:
    """
    Wrap a tool callable to record call count, latency, successes, and failures.
    If *tool_name* is None, the wrapped function’s __name__ is used.
    """

    def decorator(func: Callable) -> Callable:
        name = tool_name or func.__name__
        _TOOL_STATS.setdefault(
            name,
            {
                "calls": 0,
                "success": 0,
                "failure": 0,
                "latency_sum_s": 0.0,
            },
        )

        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            start = time.perf_counter()
            _TOOL_STATS[name]["calls"] += 1
            try:
                result = func(*args, **kwargs)
                _TOOL_STATS[name]["success"] += 1
                return result
            except Exception:
                _TOOL_STATS[name]["failure"] += 1
                raise
            finally:
                _TOOL_STATS[name]["latency_sum_s"] += time.perf_counter() - start

        return wrapper

    return decorator


# --------------------------------------------------------------------------- #
# Registration decorator
# --------------------------------------------------------------------------- #
def register_tool(
    *,
    name: str,
    summary: str,
    args_schema: Dict[str, Any],
    returns_schema: Dict[str, Any],
    side_effects: Optional[List[str]] = None,
    default_confidence: float = 0.7,
    idempotent: bool = False,
) -> Callable:
    """
    Attach metadata and place the callable into the global _TOOL_REGISTRY.
    """

    def decorator(func: Callable) -> Callable:
        if name in _TOOL_REGISTRY:
            raise ValueError(f"Tool name '{name}' already registered")

        meta = {
            "name": name,
            "summary": summary,
            "args_schema": args_schema,
            "returns_schema": returns_schema,
            "side_effects": side_effects or [],
            "default_confidence": default_confidence,
            "idempotent": idempotent,
            "callable": func,
            "doc": (func.__doc__ or "").strip(),
        }
        _TOOL_REGISTRY[name] = meta
        # Also store meta on the function for introspection
        func._tool_meta = meta  # type: ignore[attr-defined]
        return func

    return decorator
