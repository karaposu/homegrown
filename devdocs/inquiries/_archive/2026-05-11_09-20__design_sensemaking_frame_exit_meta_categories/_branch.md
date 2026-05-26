# Branch: Design Sensemaking — Frame-exit Perspective Meta-Categories

## Question

Given that the Sensemaking discipline's Frame-exit Completeness perspective has been shown to fail in two distinct ways — **Instance 1 (Memory): the perspective NEVER FIRED** (recognition failure); **Instance 2 (warming): the perspective FIRED but reasoned SHALLOWLY** via Clean Resolution Trap (reasoning-quality failure) — **how should `homegrown/sense-making/references/sensemaking.md` be edited so that the Frame-exit Completeness perspective is sub-divided into meta-categories that (a) force the AI to think about each sub-axis separately, (b) collectively cover the full intent of the perspective without narrowing it, and (c) address both not-fired and fired-but-shallow failure mechanisms simultaneously — and where the proposed structure produces a high-confidence improvement (not a might-improve / might-degrade trade-off)?**

## Goal

A spec-edit design for `homegrown/sense-making/references/sensemaking.md` that:

1. Lists explicit meta-categories under Frame-exit Completeness, each with its own gating predicate and operational test.
2. Demonstrates collective coverage: the categories together cover the perspective's full intent (no aspect of frame-exit reasoning is left outside any category) AND the categories don't narrow the perspective by excluding cases it currently catches.
3. Addresses both failure mechanisms: each meta-category structurally prevents either not-fired (by forcing enumeration) or fired-but-shallow (by forcing counter-test), or both.
4. Demonstrates the design produces a **%100 improvement** rather than a maybe-improvement. The design must derive from first principles about what the perspective is fundamentally trying to catch, so that confidence comes from structural coverage rather than from instance-count.
5. Is concrete enough that the user can apply it (or evaluate it before applying) without further design work — drafted spec text + integration notes for where in the Sensemaking spec file the edit lives.

The output should also explicitly check the narrowing-risk that the user flagged: any case the current Frame-exit Completeness perspective catches should still be caught by the new structure.

## Scope Check

Question covers goal: YES. The question asks for a meta-category structure that meets specific design constraints (separation, coverage, two-mechanism handling, %100 improvement). The goal compiles these into concrete spec-edit text plus a coverage proof.

**Specific-vs-pattern check:** the question is structural (how should the perspective be sub-divided) — pattern-level, not instance-specific. The two named instances (Memory, warming) are evidence and test cases for the design, not the scope. Default reading is structural design; this is what the user is asking.

**Step-5 caution:** This inquiry produces a DESIGN, not an immediate adoption. The user has explicitly asked for a high-confidence design; whether/when to ship it remains governed by Step 5 (≥3-instance audit threshold from the prior loop_diagnose findings). The design's output is "what the edit should look like when it ships," not "ship this now."

## Required Reads

- `devdocs/inquiries/2026-05-11_01-36__loop_diagnose__nav_org_structure_warming_scope_cut/finding.md` (Instance 2 diagnostic; identifies the two-mechanism distinction).
- `devdocs/inquiries/diagnostics/rare_cases/2026-05-10_03-07__refactor_sensemaking_perspective_for_frame_exit/finding.md` (original Part A proposal; the baseline refactor candidate the meta-categories will refine).
- `homegrown/sense-making/references/sensemaking.md` (the target spec; to ground edits in the current structure).
- `devdocs/inquiries/2026-05-09_21-15__loop_diagnose__memory_ambiguity_in_metaloop_ladder/finding.md` (Instance 1 diagnostic).
- `devdocs/inquiries/2026-05-10_01-21__why_sensemaking_missed_memory_disambiguation/finding.md` (Instance 1 drill-down — mechanism analysis).

## Design Constraints

- **High-confidence-only:** the user explicitly stated "we want sth that is %100 improvement and not interested so much in might be improvement might be degradation." Critique must hold the design to this — any candidate with a non-trivial degradation surface should be rejected, not refined.
- **Coverage-first:** any meta-category set must demonstrably cover the perspective's existing intent. The narrowing-risk the user flagged is a critical-weight rejection criterion.
- **Two-mechanism reach:** the structure must address both not-fired (Instance 1) and fired-but-shallow (Instance 2) failure mechanisms. A structure that only handles one mechanism doesn't satisfy the user's request.
- **Reuse over coinage:** prefer existing Sensemaking vocabulary (e.g., Clean Resolution Trap from failure mode #5) over newly-coined terms unless coinage is structurally load-bearing.
- **Operational specificity:** each meta-category should have a gating predicate (when does this category fire?) and an operational test (what does the AI actually do in this category?). Vague gates and vague tests fail Critique's gate-specificity rule.
- **Step-5 deferral on adoption:** the design output is a draft; the audit-revival trigger for adoption remains as-is from prior findings. This inquiry adds a design; it does not lower the adoption bar.

## Relationships

- CONTINUES FROM: `devdocs/inquiries/diagnostics/rare_cases/2026-05-10_03-07__refactor_sensemaking_perspective_for_frame_exit/finding.md` (designs the meta-category structure for the refactor proposed there).
- RELATED: `devdocs/inquiries/2026-05-11_01-36__loop_diagnose__nav_org_structure_warming_scope_cut/finding.md` (Instance 2 diagnostic that surfaced the two-mechanism distinction).
- RELATED: `devdocs/inquiries/2026-05-09_21-15__loop_diagnose__memory_ambiguity_in_metaloop_ladder/finding.md` (Instance 1 diagnostic).
- RELATED: `devdocs/inquiries/2026-05-10_01-21__why_sensemaking_missed_memory_disambiguation/finding.md` (Instance 1 mechanism drill-down).
- AFFECTS SPEC: `homegrown/sense-making/references/sensemaking.md` (the file the proposed edit targets).
