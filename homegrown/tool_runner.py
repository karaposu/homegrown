"""
homegrown/tool_runner.py
~~~~~~~~~~~~~~~~~~~~~~~~
Discovers all @register_tool functions and provides run_tool / tool_manifest.
"""

from importlib import import_module
from types import ModuleType
from typing import Any, Dict, List

from homegrown.tools.decorators import get_registry, get_stats, ToolError

_DEFAULT_PKG = "homegrown.tools"


class LocalToolRunner:
    def __init__(self, registry_pkg: str = _DEFAULT_PKG) -> None:
        # Import the package; every module import triggers decorator registration
        module: ModuleType = import_module(registry_pkg, package=None)
        # For a namespace pkg, walk sub-modules (optional)
        if hasattr(module, "__path__"):
            import pkgutil, importlib
            for info in pkgutil.walk_packages(module.__path__, prefix=registry_pkg + "."):
                importlib.import_module(info.name)

        self._registry: Dict[str, Dict[str, Any]] = get_registry()

    # ------------------------------------------------------------------ exec
    def run_tool(self, name: str, **kwargs) -> Any:
        if name not in self._registry:
            raise KeyError(f"Tool '{name}' not registered")
        meta = self._registry[name]
        func = meta["callable"]
        try:
            return func(**kwargs)
        except ToolError:
            raise                                # re-raise predictable domain errors
        except Exception as exc:
            raise ToolError("runtime_error", str(exc), retryable=False) from exc

    # ------------------------------------------------------------------ manifest
    def tool_manifest(self) -> List[Dict[str, Any]]:
        return [
            {k: v for k, v in meta.items() if k not in ("callable", "doc")}
            for meta in self._registry.values()
        ]

    # ------------------------------------------------------------------ metrics
    def get_tool_stats(self, name: str) -> Dict[str, Any]:
        return get_stats(name)
