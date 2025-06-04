"""
homegrown/governor.py
─────────────────────
A "good-enough" single-threaded scheduler that executes Core.run_cycle()
in round-robin order.  Designed for local dev and small workloads; swap for
a distributed queue (Celery, Redis Streams, Ray) when you outgrow it.
"""

from __future__ import annotations
from collections import deque
from typing import Dict, Deque, Optional

# --------------------------------------------------------------------------- #
# SimpleGovernor
# --------------------------------------------------------------------------- #
class SimpleGovernor:
    """
    Very small-footprint governor:

    • Keeps a dict of core_id → Core instance
    • Keeps a FIFO queue of core_ids ready to run
    • Runs each Core once per pop; if Core asks for more work, it re-enqueues
    • Removes Core from registry when it finishes or times out
    """

    def __init__(self, max_live_cores: int = 32) -> None:
        self._cores: Dict[str, "Core"] = {}
        self._queue: Deque[str] = deque()
        self.max_live_cores = max_live_cores

        # metrics
        self.cycles_executed = 0
        self.completed = 0
        self.failed = 0

    # --------------- public API used by Core -------------------------------
    def enqueue(self, core_id: str) -> None:
        """Called by a Core after reflection to request another cycle."""
        if core_id not in self._cores:
            # this can happen if a finished core erroneously re-queues
            return
        self._queue.append(core_id)

    # --------------- helper for client code --------------------------------
    def register_core(self, core: "Core", run_immediately: bool = True) -> None:
        """Add a brand-new Core to this governor."""
        if len(self._cores) >= self.max_live_cores:
            raise RuntimeError("Governor live-core limit reached")
        self._cores[core.id] = core
        if run_immediately:
            self._queue.append(core.id)

    # --------------- scheduler loop ----------------------------------------
    def run(self, block: bool = True) -> None:
        """
        Execute queued Cores until queue is empty.
        If *block* is False and queue is empty, return immediately.
        """

        while self._queue:
            core_id = self._queue.popleft()
            core = self._cores.get(core_id)
            if core is None:
                continue  # may have been cleaned up

            result: Optional[dict] = core.run_cycle()
            self.cycles_executed += 1

            if result is None:               # Core asked to continue; re-enqueue done by Core itself
                continue

            status = result.get("status")
            if status == "finished":
                self.completed += 1
            else:                            # timeout / cycles_exceeded / other terminal
                self.failed += 1

            # cleanup
            self._cores.pop(core_id, None)

        if not block:
            return

    # --------------- simple diagnostics ------------------------------------
    def stats(self) -> dict:
        return {
            "live_cores": len(self._cores),
            "queue_len": len(self._queue),
            "cycles_executed": self.cycles_executed,
            "completed": self.completed,
            "failed": self.failed,
        }
