# Branch: why exactly one seed per dive, every time? — diagnosis (protocol vs execution)

## Source Input

```text
when i check devdocs/inquiries/2026-07-07_20-39__SEED_HARVEST__paper_21_crow_search_algorithm till devdocs/inquiries/2026-07-08_05-55__SEED_HARVEST__paper_24_lvoc_duplicate_of_16_repass

i noticed that there all each have only one seed, this shows we have an issue definitely because those runs were all used highly relevant academic source papers and they should have multiple seeds at least. find the reason why we are stuck at one seed in all, is it protocols fault? 

capability of listing multiple seeds is very important, otherwise we are dumping useful seeds and this whole process doesnt mean much.
```

## Articulation Reference

- **File:** `devdocs/inquiries/2026-07-08_07-20__one_seed_per_dive_diagnosis_protocol_or_execution/articulate_simple.md`
- **Itemize count:** 1 · **Verdict:** HIGH-PROCEED · **Flagged:** none (two stance-corrections owed the user, carried in Goal)

## Question

**Literal statement:** "All the harvest runs from paper 21 through paper 24 each have only one seed; this shows an issue because these were highly relevant academic papers that should yield multiple seeds at least. Find the reason we are stuck at one seed — is it the protocol's fault? The capability of listing multiple seeds is very important; otherwise we are dumping useful seeds and the whole process doesn't mean much."

**Readings kept open (MQ1):** diagnose-the-cap · attribute-fault (protocol text vs execution vs legitimate) · fix-it · retrospective-recovery (were specific seeds dumped?).

**Intent endpoints (MQ3):** mechanism-diagnosis · fault-attribution · fix-routes · dumped-seed-recovery.

## Goal

**Deliverable (Deconstruct):** a **file-verified diagnosis** — (1) the per-dive generation/gate/record numbers table (candidates generated / killed / folded / recorded + the innovation MODE each dive chose), read from the archived `innovation.md` + `critique.md` of all four dives, not from memory; (2) the mechanism(s) named; (3) fault attribution with quoted evidence (the protocol's own text vs the dives' execution choices); (4) retrospective adjudication of the kills/folds — dumped-seed candidates NAMED; (5) fix routes (protocol edits and/or execution rules).

**Why (WHY-axis, open):** protect-the-harvest's-value · trust-in-the-tool · fix-before-scaling (catch it at n=4).

**Stance corrections owed the user (stated early and honestly):**
- Of the four runs, **two were re-passes** of already-harvested sources (n=2 re-read paper 21; n=4 was a duplicate of paper 16) — low yield is partly expected there; "4 highly relevant fresh papers" over-counts.
- BUT the pattern is **wider and worse** than the user's sample: the retro-imports (p17/p19/p20) are also one-per-source → **every index entry is exactly 1; zero variance across 5 fresh sources + 2 re-passes.** A natural process would vary. The user's conclusion may be right on a stronger base than their premise.

**Guards (both directions):** rubber-stamp risk (the user's own critique — don't cave to "the protocol is broken") AND self-serving-defense risk (I built the protocol this session — don't protect it). Arbiter = the file-verified counts.

**Boundaries (MQ4):** NOT a re-run of the four harvests (recovery-candidates are named, not re-gated into records here unless decisive) · NOT lowering the gate to manufacture yield (quality stays; the question is WHERE the narrowing happens) · NOT condemning every 1 (delta-passes may be legitimate) and NOT validating every 1 (zero variance is the tell).

## Considered Articulations

1. **Full diagnosis:** verify numbers → name mechanisms → attribute with quotes → re-examine kills/folds → route fixes.
2. **Protocol-audit-first:** audit seed_harvester.md's text for cap-inducing language; widen only if clean.
3. **Execution-audit-first:** the dives' innovation modes ("minimum-mechanism", "minimal") as prime suspect — pre-narrowing before the gate despite generate-first-gate-after.
4. **Legitimacy-check (contrarian, run alongside):** 1-per-dive may be partly CORRECT (strong absorbers; two re-passes; a working gate); the fix might be partly expectation-calibration.

## Scope Check

Question covers goal. **Specific-vs-pattern:** the user points at 4 specific dives; the diagnosis addresses the BROADER PATTERN (all 7 index entries) with the 4 dives as the file-verifiable core evidence — the broader read is explicitly the right one here (the user's own stake sentence is pattern-level).

## Layer Commitment

**Process** (primary): the diagnosis targets what the harvest RUNS — the generation/gate/record steps' actual behavior and the protocol's process rules. Alternatives out of scope this run: Meaning (the seed definition itself is not in question — the user affirms seeds matter); Structural (the record schema/index format are fine; only if the diagnosis lands on "the schema caps records" would a structural follow-on open). If fixes touch protocol text, they are process-rule edits within the existing §-structure.

## Synthesis Trigger

OMITTED in the roll-up sense — but the inquiry CONSUMES the four dives' artifacts as evidence (read at Surfacing, cited by path+line). The commitments re-tested implicitly: each dive's own kill/fold reasoning is RE-EXAMINED (that is the retrospective-recovery deliverable), which is this dive's core work, not an inherited-commitments formality.
