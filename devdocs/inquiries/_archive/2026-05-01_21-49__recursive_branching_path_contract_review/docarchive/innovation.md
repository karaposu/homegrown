# Innovation: Recursive Branching Path Contract Review

## Candidate A: Unlimited Physical Nesting

Allow branches to nest indefinitely:

```text
root/branches/a/branches/b/branches/c/...
```

Verdict: REFINE.

This is simple and matches the recursive model, but it ignores path length and human navigation costs.

## Candidate B: Hard Depth Cap

Reject any branch deeper than a fixed threshold, such as depth 3.

Verdict: KILL.

This is too rigid. Some investigations legitimately need deeper lineage. Also, the need for a cap depends on slug length, filesystem path length, and the importance of preserving physical lineage.

## Candidate C: Soft Depth Policy

Allow recursion but add warnings:

```text
depth 1-3: normal
depth 4-5: warn
depth 6+: require explicit confirmation or recommend new root inquiry
```

Verdict: SURVIVE.

This preserves flexibility and catches likely readability problems before they become painful.

## Candidate D: Path Length Preflight

Before creating a branch, estimate final path length and shorten slug or ask for a shorter slug if close to the filesystem limit.

Verdict: SURVIVE.

The local workspace reports `PATH_MAX = 1024`, so path length is a real operational boundary.

## Candidate E: Flatten Deep Branches Automatically

After a threshold, create a new root inquiry and add `RELATED` / `CONTINUES FROM` metadata instead of physical nesting.

Verdict: REFINE.

This is useful as a recommendation, but should not happen automatically. The user may explicitly want physical lineage.

## Candidate F: Replace `[folder_name]` With Slash-Bearing `[folder_name]`

Let `[folder_name]` contain `root/branches/child`.

Verdict: KILL.

This hides the difference between id and path. It also makes examples misleading. Use `inquiry_path`.

## Candidate G: Opaque Inquiry Path Rule

Once an inquiry exists, every runner/protocol receives and uses the full `inquiry_path` as an opaque path. It never reconstructs that path from `inquiry_id`.

Verdict: SURVIVE.

This is the core rule needed for many-layer branching.

## Assembly

The best answer combines:

- recursive branch support remains;
- `inquiry_path` is the sole file-operation path;
- `inquiry_id` is display-only;
- parent/root/depth come from metadata;
- branch protocol gets depth warning and path length preflight;
- deep branches can be physically nested when explicitly useful;
- beyond depth 6, recommend a new root inquiry unless the user explicitly needs physical lineage.

## Structural Check

`tools/structural_check.sh` is not present in this repo, so no structural check was run.

**Overall: PROCEED** (the surviving design supports many-layer branching while avoiding path and readability traps)
