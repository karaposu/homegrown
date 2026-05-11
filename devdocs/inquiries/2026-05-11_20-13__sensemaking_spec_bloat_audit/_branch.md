# Branch: Sensemaking Spec Bloat Audit

## Question

The user observed that the recent proposed Meta-Inspection section contained a line — "When a new specific check is discovered (at ≥3-instance Step 5 threshold or via project iteration)" — that mixes PROJECT-SPECIFIC GOVERNANCE (the "≥3-instance Step 5 threshold" is a project-meta-protocol rule from `homegrown/protocols/loop_diagnose.md`) into what should be a PURE DISCIPLINE SPEC describing HOW sensemaking works universally. The user reverted that edit and is now asking: **which lines in the current `homegrown/sense-making/references/sensemaking.md` (the version BEFORE the Meta-Inspection edit, i.e., the current state on disk) contain similar project-specific bloat that doesn't belong in a pure discipline reference spec — and what should the clean version look like?**

## Goal

A complete inventory of bloat lines in the current `homegrown/sense-making/references/sensemaking.md` with reasoning for each. For each line/passage flagged as bloat, identify:

1. The literal text or location.
2. Why it's bloat (what project-specific or meta-governance element leaked in).
3. The structural content (if any) that should be preserved in cleaned form.
4. Where the project-specific governance content should live instead (e.g., `homegrown/protocols/loop_diagnose.md`, an inquiry's finding, project-meta docs).

Plus a final cleaned-discipline-spec proposal that removes the bloat without losing the universal mechanics of how sensemaking operates. Backward-compatible if possible (refinement notes can remain if they describe universal sensemaking behavior; their project-specific failure-mode-threshold references should be excised).

The user's explicit framing: *"this is really bad. are there more bloat lines in our current homegrown/sense-making/references/sensemaking.md ?"*

## Scope Check

Question covers goal: YES. The question asks which lines are bloat; the goal compiles the inventory + reasoning + cleaned proposal.

**Specific-vs-pattern check:** the user named a specific bloat example (the Step-5-threshold line). The broader pattern is "any project-specific governance reference in the discipline spec." Default reading: address the broader pattern — find ALL bloat, not just instances of "Step 5."

**Bloat categories to watch for:**
- References to project-meta-protocols (Step 5; ≥3-instance thresholds; revival triggers; loop_diagnose; etc.)
- References to specific inquiries by ID or date
- References to specific findings by path
- "Frontier flag" parenthetical project-governance notes
- Promotion-to-failure-mode procedures (project-specific governance, not universal mechanics)
- Anything else that's about THIS PROJECT'S OPERATIONS rather than HOW SENSEMAKING WORKS in general

**Self-reference acuity:** HIGH. This inquiry uses Sensemaking to clean up Sensemaking's own spec. The disciplines applied to the audit will themselves be running by the very spec being audited. Mitigations: external anchoring (the universal-discipline criterion — "would this still apply if I were using sensemaking on a completely different project?" — anchors the audit); explicit "would a generic practitioner outside this project find this text meaningful?" test.

## Relationships

- CONTINUES FROM: `devdocs/inquiries/2026-05-11_17-29__sensemaking_meta_level_check_generator/finding.md` — the user reverted the Meta-Inspection edit from that finding due to bloat; this inquiry surveys whether similar bloat exists elsewhere.
- POTENTIALLY AFFECTS: `homegrown/sense-making/references/sensemaking.md` (cleanup edits).
- RELATED: `homegrown/protocols/loop_diagnose.md` (where the Step-5 governance content actually belongs).
