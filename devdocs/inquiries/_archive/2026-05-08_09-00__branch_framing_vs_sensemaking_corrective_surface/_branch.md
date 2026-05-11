# Branch: Branch-Framing vs Sensemaking Corrective Surface

## Question

The prior `devdocs/inquiries/2026-05-08_08-15__loop_diagnose__narrow_scope_in_disambiguation_finding/finding.md` (the LOOP_DIAGNOSE on the prior `2026-05-08_06-30` narrow-scope cascade) proposed W1 — a Sensemaking-level corrective at `homegrown/sense-making/references/sensemaking.md` extending M6's recognition cue with sample-vs-population testing. The user's pushback: the strongest counter to a stabilized frame is a frame-level challenge, which counter-interpretation generation is structurally bad at because of frame-momentum (consensus from upstream Exploration + solve-mode momentum from goal). The user proposes: instead of fighting frame-momentum mid-cascade at Sensemaking, prevent the wrong frame from forming at the source — improve `_branch.md` phrasing/structure so semantics are transferred correctly to downstream disciplines, eliminating the cascade root.

This inquiry evaluates whether the cleanest corrective surface is at the branch.md framing layer (frame-formation-time intervention), at the Sensemaking M6 application layer (frame-checking-time intervention; W1's surface), or composed across both. It produces a concrete proposal for the chosen surface, with explicit comparison of leverage, side-effects, and aggregate cost vs the prior W1 candidate.

## Goal

A good answer should: (a) compare the three surfaces (branch.md framing; Sensemaking M6 application via W1; composed) on structural leverage, side-effect risk, aggregate cost, and effectiveness against the prior 06-30 cascade; (b) propose a concrete shape for the recommended surface — specific file edit, wording, evaluation gate; (c) honor LOOP_DIAGNOSE Step 5 + 6 guardrails (no broad rewrites; per-chain narrow with monitoring); (d) preserve the existing structure of `homegrown/MVL+/SKILL.md` (which contains the branch.md template) and `homegrown/sense-making/references/sensemaking.md`; (e) explicitly address the over-firing risk for branch.md interventions (legitimate user-narrow-scope requests would over-fire if the branch.md template forces every problem statement to test sample-vs-population); (f) decide whether W1 (Sensemaking-level) should be replaced, kept, augmented, or deferred.

## Scope Check

Question covers goal. The question asks for a comparative evaluation + concrete proposal; the goal asks for the comparison + the proposal + side-effect analysis + composition with W1. Both addressable from the prior LOOP_DIAGNOSE finding + the MVL+/SKILL.md template + the `sensemaking.md` discipline reference spec.

**Sample-vs-population check (per the very pattern this inquiry is investigating):** the available evidence is one prior loop (`2026-05-08_06-30`) with a narrow-scope cascade. Is "branch-framing-fixes-the-cascade" generalizable from one observed instance? The strongest counter-interpretation: the 06-30 cascade is an N=1 instance; future cascades may have different upstream sources. This inquiry must NOT lock the proposal to the specific shape of the 06-30 cascade; it must produce a framing-level rule that targets the GENERIC pattern (sample-vs-population framing failures), not the specific 06-30 instance. The inquiry's proposal must work even when the future cascade's specific shape differs.

## Required Reads

- `devdocs/inquiries/2026-05-08_08-15__loop_diagnose__narrow_scope_in_disambiguation_finding/finding.md` — the prior LOOP_DIAGNOSE finding; W1 is the candidate this inquiry compares against.
- `devdocs/inquiries/2026-05-08_06-30__lightweight_discipline_level_disambiguation/_branch.md` — the prior loop's branch where the narrow scope was first encoded (Diagnostic Constraints line 31).
- `devdocs/inquiries/2026-05-08_07-15__generic_discipline_level_nonambiguity_convention/_branch.md` — the corrected loop's branch; comparing how it framed the same problem broadly.
- `homegrown/MVL+/SKILL.md` — the runner spec containing the `_branch.md` template (Question / Goal / Scope Check sections).
- `homegrown/sense-making/references/sensemaking.md` — the Sensemaking discipline reference spec containing the M6 application paragraph (W1's target surface).

## Diagnostic Constraints

- **Lightweight non-negotiable.** Same constraint as the prior 22-10 + 06-30 + 07-15 chain: no per-output checks; no scans; minimum cognitive load on disciplines / runner.
- **Honor LOOP_DIAGNOSE Step 5 + 6 guardrails.** Per-chain narrow candidates with monitoring; no broad rewrites from one chain (the 06-30 cascade is the one chain).
- **Address over-firing risk explicitly** for branch.md interventions. Branch.md content is partly user-prompt; the runner translates. Patching branch-creation risks blocking legitimate narrow-scope user requests.
- **Generic / meta-discipline framing.** Any rule must apply to the generic pattern (sample-vs-population framing failures), not the specific 06-30 cascade.
- **Don't embed the placement convention** in spec content.
- **Reject heavy alternatives:** template-mandated questionnaires; multi-section additions to branch.md; new discipline phases.
- **Compose rather than replace** when both surfaces have non-overlapping value. W1 may stay even if branch.md intervention is added.

## Relationships

- REFINES: 2026-05-08_08-15 (the LOOP_DIAGNOSE finding; this inquiry evaluates W1's surface choice and proposes alternative or composition)
- ANALYZES: 2026-05-08_06-30 (prior cascade origin); 2026-05-08_07-15 (corrected loop comparator)
- ANALYZES: homegrown/MVL+/SKILL.md (branch.md template surface); homegrown/sense-making/references/sensemaking.md (W1 target surface)
- RELATED: 2026-05-07_22-54 (placement convention), 2026-05-07_23-27 (don't-embed decision)
