# Draft — the MUST correction to the 23-49 finding (STAGED, not applied)

**Status:** APPLIED (2026-07-10, user-approved). Both edits below were applied to the 23-49 finding with the frontmatter `refined_by:` field (Edit 1) and the blockquote refinement note (Edit 2). This file is retained as the audit record of the change.

**Target:** `devdocs/inquiries/2026-07-09_23-49__enrichment_mechanism_similarity_crossing_and_traverse_loop_as_enricher/finding.md` (the "enrichment mechanism" finding).

**Character:** REPAIR-LITE — the fold was *axis-blind, not wrong*, so this **adds a short note** and a back-pointer; it does **not** rewrite the fold sentence or any design. Two edits.

---

## Edit 1 — frontmatter back-pointer (`refined_by:`)

**Why:** so a reader of the 23-49 finding is pointed to the refinement (machine-findable, mirrors the existing `refines:` field).

**Location:** the frontmatter block (lines 1–6).

**BEFORE:**
```yaml
---
status: active
model: claude-opus-4-8
effort: unknown
refines: devdocs/inquiries/2026-07-09_16-41__advanced_seed_gen_source_expansion_enrichment/finding.md
---
```

**AFTER:**
```yaml
---
status: active
model: claude-opus-4-8
effort: unknown
refines: devdocs/inquiries/2026-07-09_16-41__advanced_seed_gen_source_expansion_enrichment/finding.md
refined_by: devdocs/inquiries/2026-07-10_09-55__seed_generation_three_tiers__crossing_vs_innovate_decompose_vs_traverse/finding.md
---
```

*(Alternative, if you prefer a body pointer over a frontmatter field — as was done on the 16-41 finding — I can instead add a "**Refined by:**" line to the 23-49 finding's "Changes from Prior" section. Say which you prefer; default is the frontmatter field above.)*

---

## Edit 2 — the refinement note on the fold sentence (section 4, line 105)

**Why:** record the sized correction at the exact sentence the 09-55 dive re-opened, without overturning it.

**Location:** section 4 ("The architecture: thinness-graded"), the final paragraph beginning "**The grade is the trigger.**" — the fold sentence is its last sentence.

**BEFORE:**
```markdown
**The grade is the trigger.** Raw-yield below a few distinct claims *and* a bare-pointer source-type → escalate to the dedicated traverse. Otherwise → the depth-directive on the existing steps. A middle "lightweight hybrid" option folds into "the depth-directive with a heavier sensemaking step" — it is not a distinct third thing.
```

**AFTER** (the paragraph is unchanged; a blockquote note is appended immediately after it):
```markdown
**The grade is the trigger.** Raw-yield below a few distinct claims *and* a bare-pointer source-type → escalate to the dedicated traverse. Otherwise → the depth-directive on the existing steps. A middle "lightweight hybrid" option folds into "the depth-directive with a heavier sensemaking step" — it is not a distinct third thing.

> **Refinement note (added by the 09-55 dive — `devdocs/inquiries/2026-07-10_09-55__seed_generation_three_tiers__crossing_vs_innovate_decompose_vs_traverse/finding.md`).** This fold was **axis-blind, not wrong.** It folds the middle on the **source-enrichment** axis (a "heavier sensemaking step" = richer source-claims), and on that axis it is correct. But it is blind to a distinct **crossing-side** lever the user was pointing at: running the full innovate *framers* (inversion, constraint-manipulation, lens-shifting) over the crossing — move-types the base harvest's three micro-moves lack (`cognitive_harness/protocols/seed_harvester.md` §2 rule 3: *"NOT a nested innovate run. No mechanism sweep"*). That lever is real, so the middle tier ("innovate + decompose") has genuine content this fold missed. Two bounds keep the correction precise: (a) the middle is **narrower than "a full inspection tier"** — of the three things "inspect from diff angles" can mean, two (crossing against more anchors; telling a real match from a mirror) are already the base harvest's coverage table and its gate; only the framers are a genuine addition; (b) the two levers (source-enrichment and crossing-inspection) are conceptually distinct but **usually co-vary** — the off-diagonal case (deep crossing-inspection on a rich source with shallow enrichment) has not been observed in any project dive, so this is **not** a clean two-by-two grid. Net: this fold's practical guidance stands, with the framers-lever added as a named, deferred degree of freedom. See the 09-55 finding for the full treatment.
```

---

## What is deliberately NOT changed

- The fold sentence itself — kept verbatim (REPAIR-LITE; the fold was operationally-mostly-right).
- Section 4's thinness-grading, the two kept tiers (depth-directive / dedicated traverse), and every design decision — all intact.
- No change to `seed_harvester.md` (that is the separate COULD — an optional framers "deep-mode" — not this MUST).

## Apply?

On approval I will:
1. Apply Edit 1 (frontmatter `refined_by:`) and Edit 2 (the blockquote note) to the 23-49 finding.
2. Leave everything else in the 23-49 finding untouched.

The 09-55 finding already carries the matching `refines:` pointer, so the chain (16-41 ← 23-49 ← 09-55) will be complete once applied.
