# agentkernel/models.py
from enum import Enum
from dataclasses import dataclass, field
from typing import Dict, Any


class ActionType(str, Enum):
    ASK_USER = "ask_user"
    CALL_TOOL = "call_tool"
    FINISH   = "finish"


@dataclass
class Action:
    type: ActionType
    content: Dict[str, Any] = field(default_factory=dict)


@dataclass
class Observation:
    """
    origin ∈ {"user", "tool", "validator", ...}
    payload is arbitrary JSON‑serialisable data.
    """
    origin: str
    payload: Dict[str, Any] = field(default_factory=dict)
