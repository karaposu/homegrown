# Branch: What Routeman Could Do That Routelister Can't — Loop-Harmony Design Gaps

## Question

Identify the design gaps created by routelister's intrinsic redesign — specifically, **what routeman could do that routelister can't**, given that routelister was built to cover the *individual-discipline* aspect (standalone, intrinsic, any-territory) while routeman was focused on *running in harmony with the MVL loops* (its identity was loop-bound). (Subject: the capability delta routeman→routelister; action: **diagnose** the dropped capabilities + **map** where each now belongs; level: **discipline + loop/system composition**, **cross-cutting**; deliverable: a gap inventory with an ownership map [routelister / meta-loop / runner / homeless] and a verdict on which are genuine gaps vs correctly-relocated.) Observation targets, preserved separately:

- **(OT1 — the capability delta)** What, concretely, could routeman do that routelister cannot? (Enumerate: the 7 loop-control movement-types it dropped; the loop-relative route-state it dropped; the cross-cycle REVISIT machinery; the autonomy classification; the forward-Boundary-in-identity / loop-position.)
- **(OT2 — the ownership map)** For each dropped capability, where does it now belong in the architecture (routelister=perception / meta-loop=selection+cross-cycle-memory / MVL-runner=per-cycle-control / homeless)? Grounded in the canonical separation "Navigation sees; it does not choose" + the meta-loop's `_meta_state.md`.
- **(OT3 — gap vs correct-relocation)** Which dropped capabilities are **genuine design gaps** (homeless or unspecified at their new owner) vs **correctly relocated** (already owned by the meta-loop/runner) vs **correctly dropped** (loop-relativity artifacts the system never needed)?
- **(OT0 — the meta-finding)** Is the gap **IN routelister** (a discipline-level deficiency) or at the **system/composition level** (the loop-harmony functions need explicit owners; routelister's redesign dropped them without fully relocating them)? Re-test the `01-11` diagnosis (loop-relativity is the defect) under this lens.

**Deliverable shape:** a gap inventory (OT1) + an ownership map (OT2) + a gap/relocation/dropped classification (OT3) + the meta-verdict (OT0: discipline-level vs system-level), grounded in routeman's spec, the routelister chain, the meta-loop's architecture, and the diagnosis; with a per-commitment re-test.

## Goal

- **Criterion** — an honest, complete capability delta (not "routelister is strictly better"), with each gap assigned an owner and classified gap/relocated/dropped — so the user can see exactly what loop-harmony work remains and where it must be done.
- **Use case** — closes the loop-integration side of routelister before the spec is authored; tells the user which gaps to fill (and in which layer — routelister's spec, the meta-loop's spec, or the runner) so routelister actually works *in harmony with the MVL loops*, not just as a standalone discipline.
- **Desired outcome** — clarity on (a) what was lost; (b) where each lost thing belongs now; (c) which losses are real gaps vs benign relocations; (d) whether routelister's design is deficient or whether the gap is the (under-specified) loop-integration layer.
- **What would fail** — (a) concluding "routelister covers everything routeman did" (it deliberately doesn't — the loop-harmony half was shed); (b) treating a correctly-relocated function as a routelister gap (or vice versa); (c) proposing to re-admit loop-control moves into routelister's identity (re-importing the loop-relativity defect `01-11`/`18-17` removed); (d) missing that the meta-loop already owns selection + cross-cycle memory ("Navigation sees, it does not choose"), so most loop-harmony belongs there, not in a new component.

## Source Input

```text
and now lets dive deep into what  routeman could do that routelister cant. i am trying to identify design gaps because with routelister we tried to cover individual discipline aspect of it, with routeman we were focused on running in harmony with MVL loops
```

## Scope Check

Question covers goal: **YES** — the capability delta (OT1) + ownership map (OT2) + gap/relocation classification (OT3) + the meta-verdict (OT0) cover the goal of a complete, owner-assigned gap inventory.

Specific-vs-pattern: the user frames it as a specific comparison (routeman vs routelister) motivated by a pattern ("routelister = individual-discipline; routeman = loop-harmony"). Both in scope: the concrete capability delta AND the broader pattern (the loop-integration layer's ownership). The user's framing is the load-bearing frame.

Transcription-audit note: the input's load-bearing clauses — "what routeman could do that routelister can't" (the delta), "identify design gaps" (the action), "routelister = individual discipline aspect" + "routeman = running in harmony with MVL loops" (the framing that explains WHY the delta exists) — all preserved in Question + OTs. The two framing clauses (individual-discipline vs loop-harmony) are the key interpretive lens, kept explicit.

## Layer Commitment

Primary layer: **PROCESS** (the loop↔routelister↔meta-loop **composition** — how routelister runs in harmony with the loop, and who owns the loop-harmony functions). The question is fundamentally about *how the pieces run together* across the loop, and where the dropped behaviors execute now.

Other-layer alternatives considered and explicitly OUT OF SCOPE:
- **Meaning** — routelister's identity (intrinsic, concept-as-route) — SETTLED (`12-44`); this run does NOT re-open it (and explicitly does NOT propose re-admitting loop-roles into it). The `01-11` diagnosis (loop-relativity is the defect) is re-tested, not reversed.
- **Structural** — authoring the fills (meta-loop spec additions; routelister's loop-role documentation) — deferred; this run *diagnoses + assigns owners*, it doesn't author the specs.

Sequential plan: **Process/composition now** (the gap inventory + ownership map) → the fills land in **Structural** (the meta-loop spec + routelister's spec role-section) when those are authored. This order because you must know *what's missing and who owns it* before writing the fills.

The primary layer is **not ambiguous** (the question is about loop-composition/who-owns-what = process), so the pipeline proceeds without a user gate.

## Synthesis Trigger

This inquiry rolls up routeman's spec + the routelister chain + the meta-loop architecture + the diagnosis into the gap inventory; per CONCLUDE the finding MUST include an `## Inherited Commitments Re-test`.

Priors being synthesized / re-tested:

- `cognitive_harness/routeman/references/routeman.md` — the 16-type taxonomy (incl. the 7 loop-control types routelister dropped); §1.5 boundary-placement (routeman = a between-cycles boundary discipline); §2.1 cross-cycle-revisitation + autonomy-classification components; §5.8 `_route.md`. **CRITICAL re-test: each loop-harmony capability routeman had — does it have a home post-routelister?**
- `devdocs/inquiries/2026-05-29_01-11__routeman_current_problem_diagnosis/finding.md` — the diagnosis: routeman's defect is loop-RELATIVE identity (machinery mature, identity immature). **CRITICAL re-test: does relocating loop-harmony to the meta-loop/runner vindicate the diagnosis (the loop-role was never the discipline's identity)?**
- `devdocs/inquiries/2026-05-29_18-17__routelister_route_type_schema_reconciliation/finding.md` — the 9 concept-engagement types transfer; the 7 loop-control types DON'T (the dropped half = the capability delta's core). + the per-component loop-bound test.
- `devdocs/inquiries/2026-05-30_06-38__routelister_cross_run_model/finding.md` — routelister's cross-target memory (the index) is NOT cross-cycle (REVISIT stripped) → REVISIT's home is elsewhere. **Re-test: routelister index (within-discipline concept-map) vs meta-loop `_meta_state.md` (cross-inquiry traversal memory) — the boundary.**
- `/Users/ns/.claude/skills/meta-loop/SKILL.md` — the architecture: meta-loop SELECTS + owns cross-run `_meta_state.md`; **"Navigation sees; it does not choose"**; MVL+ probes but doesn't own cross-run memory. **CRITICAL re-test: the meta-loop is the home for selection + cross-cycle memory; does it cover the dropped loop-control enumeration + REVISIT, or are those homeless?**
- `docs/future-seed/half-baked/autonomy_ladder.md` — the graduated-autonomy concept (auto/judgment partition) routeman's autonomy-classification fed; **note: parked/half-baked** → the autonomy-classification capability's home is immature.
