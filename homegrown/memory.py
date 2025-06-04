# agentkernel/memory.py
from typing import Any, Dict, List


class DictMemoryStore:
    """
    An in‑process working‑memory implementation with three helpers:
      • get(key, default)   – retrieve a value
      • set(key, value)     – overwrite a value
      • append(key, value)  – treat the value as a list and append
    We pre‑seed two common namespaces:
      • scratchpad : dict   – the agent’s in‑flight spec
      • history    : list   – recent observations
    """

    def __init__(self) -> None:
        self._store: Dict[str, Any] = {
            "scratchpad": {},
            "history": []
        }

    # ---------------- basic API ----------------
    def get(self, key: str, default: Any = None) -> Any:
        return self._store.get(key, default)

    def set(self, key: str, value: Any) -> None:
        self._store[key] = value

    def append(self, key: str, value: Any) -> None:
        """Ensure `key` is a list and append `value` to it."""
        if key not in self._store or not isinstance(self._store[key], list):
            self._store[key] = []
        self._store[key].append(value)

    # ---------------- helpers ------------------
    def clear(self) -> None:
        """Reset scratchpad and history."""
        self._store.clear()
        self._store.update({"scratchpad": {}, "history": []})

    # ---------------- demo ---------------------
    def __repr__(self) -> str:
        return f"DictMemoryStore({self._store})"


# ----------------------------------------------------------------------
# Simple usage demo
# ----------------------------------------------------------------------
if __name__ == "__main__":
    mem = DictMemoryStore()

    # 1) store some scratchpad data
    mem.set("scratchpad", {"step": 1, "total_budget": 100})
    print("Scratchpad:", mem.get("scratchpad"))

    # 2) append observations to history
    mem.append("history", {"origin": "user", "payload": {"text": "Boost my IG"}})
    mem.append("history", {"origin": "agent", "payload": {"text": "Great! What's your budget?"}})
    print("History:", mem.get("history"))

    # 3) update scratchpad incrementally
    scratch = mem.get("scratchpad")
    scratch["total_budget"] = 200
    mem.set("scratchpad", scratch)
    print("Updated scratchpad:", mem.get("scratchpad"))

    # 4) clear everything
    mem.clear()
    print("After clear:", mem)
