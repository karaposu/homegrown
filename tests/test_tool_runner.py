from homegrown.tools.decorators import register_tool, record_metrics
from homegrown.tool_runner      import LocalToolRunner

@register_tool(
    name="reverse_string",
    summary="Return the reversed text.",
    args_schema={"text": {"type": "str"}},
    returns_schema={"text": "str"},
    side_effects=[],
    idempotent=True,
)
@record_metrics("reverse_string")           # ← metrics bucket now created
def reverse_string(*, text):
    return {"text": text[::-1]}

def test_tool_registration_and_execution():
    runner = LocalToolRunner()
    assert runner.run_tool("reverse_string", text="abcd") == {"text": "dcba"}

    names = [m["name"] for m in runner.tool_manifest()]
    assert "reverse_string" in names

    stats = runner.get_tool_stats("reverse_string")
    assert stats["calls"] >= 1
    assert stats["success"] >= 1
