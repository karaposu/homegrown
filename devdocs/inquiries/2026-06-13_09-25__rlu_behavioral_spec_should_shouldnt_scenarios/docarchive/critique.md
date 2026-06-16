## User Input

`devdocs/inquiries/2026-06-13_09-25__rlu_behavioral_spec_should_shouldnt_scenarios/_branch.md`

---

# Critique — rlu behavioral contract

## (a) Dimensions (Phase 0)

| # | Dimension | Weight | Success criterion | Extracted from |
|---|---|---|---|---|
| D1 | **Correctness** | CRITICAL | Does the contract actually let you track what's run AND reconcile with the adopted design? | meaning-nodes |
| D2 | **Coherence w/ canon** (external-anchor) | CRITICAL | Fits the routelister spec (`_route.md` process-state exclusion; route-maps archived/regenerated), the placement finding (`_route_engagements.md`, derived view, guard re-attach), the prior rlu finding (two moments, NOT-list) — without breaking any. | constraints; cited canon |
| D3 | **Scope-fence integrity** (project-specific risk) | CRITICAL | Does the contract keep rlu from creeping into deciding/launching/judging? | the single-decider pillar; the dangerous failure |
| D4 | **Scenario completeness** | CRITICAL | Do the 7 axes actually generate the situation space; is any real situation unhandled? | the coverage-driven motivation |
| D5 | **Feasibility / day-1 simplicity** | HIGH | Buildable small; day-1 surface tiny (≤4 commands)? | feasibility constraint |
| D6 | **Robustness** | HIGH | Survives crash, forgotten-start, map-regen, cross-inquiry, first-run? | edge-case constraints |
| D7 | **Elegance / not-over-engineered** | MEDIUM | Simplest sufficient — or does WAL/event-sourcing + close-unification bloat it? | minimum-complexity principle |
| D8 | **Frame-premise** (inherited-frame prosecution) | CRITICAL | Are the inherited load-bearing premises still right? | required when candidate-space rests on inherited commitments |

**D8 — Frame-premise prosecution (3 load-bearing premises of the inherited frame):**
1. **P1 "rlu must never decide."** *What-if-wrong:* if rlu should make trivial mechanical choices (set status from the verb, stamp a timestamp), a strict fence over-constrains and makes rlu annoying. *Evidence it'd surface:* users abandon rlu because it asks too much. *Verdict:* HOLDS — but "decide" must be **defined**: rlu may set mechanical defaults; it must never (i) choose which route runs next, (ii) rank/evaluate outcomes, (iii) read a finding to judge it. (Sharpening folded into C2.)
2. **"The adopted design (two-moment, append-only, per-inquiry) is right."** *What-if-wrong:* a newer constraint invalidates it. *Evidence:* none this inquiry; the placement + prior findings settled these with their own re-tests. *Verdict:* HOLDS (no new contrary evidence).
3. **"rlu-the-skill is needed at all"** (vs the runner auto-marking everything). *What-if-wrong:* if `/aMVLwr` auto-marks at CONCLUDE, rlu is redundant. *Evidence:* informal plain-session runs (S2, the user's original motivating case), `park`, and cross-inquiry runs have NO runner to auto-mark. *Verdict:* HOLDS — rlu earns its place for the non-loop cases; this sharpens the two-mode split (C6).

## (b) Fitness Landscape

- **Viable region:** a faceted contract — 3 pillars (each externally grounded) + lifecycle state-machine + 7-axis scenario table + a rooted scope-fence + a 4-command day-1 surface. High on D1/D2/D3/D4; the question is whether D7 (elegance) and a few D6 (robustness) details land cleanly.
- **Dead region:** anything that lets rlu decide/rank (kills D3); a central maintained truth-file (kills D2 — re-litigates the placement finding); mutating the route-map (kills D2 — routelister spec).
- **Boundary region:** the 4 innovation special-attention items (forgetful-human over-rotation; pointer-or-reason loophole; close-unification; two-writer risk) — strong cores with specific weaknesses → REFINE territory.
- **Unexplored:** the deferred frontier (object-B, project-level homing, parallel concurrency) — intentionally out of v1, not a gap.

## (c) Candidate Verdicts

**C1 — The core contract (3 pillars + lifecycle + 7 axes + scope fence).**
- *Prosecution:* over-engineered (D7) — WAL/event-sourcing language intimidates; the user wanted a simple tracker.
- *Defense:* the day-1 surface is still `start`/`done`/`park`/`list`; the framing is the "why," not the interface.
- *Collision → SURVIVE (caveat).* The model is right; presentation risk is real. **Caveat folded in: lead use-first (the 4 commands + what each writes); the WAL/event-sourcing/pre-registration groundings are the second-layer justification, not the surface.** (Same lesson the placement finding's critique applied.)

**C2 — Single-decider as system invariant (P1).**
- *Prosecution (frame-premise):* too rigid for ergonomics.
- *Defense:* Inv1 — splitting decision-authority across rlu + Selector = two minds = incoherent control; it's a system invariant.
- *Collision → SURVIVE (sharpened).* Hold, but **define "decide"**: mechanical defaults OK; never choose-next / rank-outcomes / judge-a-finding. The sharpened definition IS the active fence.

**C3 — Forgetful-human lens (elevate forgot-start/crash to first-class).** [special-attention a]
- *Prosecution:* over-rotation — if every behavior is designed for forgetting, the normal start→done happy path gets under-specified; the spec becomes an error-recovery doc.
- *Defense:* zero-for-109 says the failure case IS common; ignoring it is the bigger error.
- *Collision → REFINE.* Both are partly right. **Refine: the degraded path (degraded-done, sweep, retroactive row) is FIRST-CLASS, but it does NOT demote the normal path — both are first-class.** Frame as "rlu is forgiving," not "rlu assumes failure." Direction: spec the happy path fully, then the degraded path as equal-status, not as the center.

**C4 — `done` requires artifact-pointer-OR-reason.** [special-attention b]
- *Prosecution (concrete failure-case):* the free-text "or reason" is a loophole — close 10 routes with "or reason: did it" → the log has no pointers → the "what came of it" value evaporates (D1 degraded).
- *Defense:* forcing a pointer when informal work genuinely produced no folder would block legitimate closes.
- *Collision → REFINE.* **Require a pointer OR a structured reason-CODE from a small closed set {no-artifact-by-nature, abandoned, superseded} — not free text.** A coded reason is auditable and rare-by-design; free text is the loophole. Direction: replace "or reason" with "or reason-code."

**C5 — close-with-reason unification {done/parked/superseded}.** [special-attention c]
- *Prosecution:* collapsing done/parked/superseded into one verb blurs distinctions the user cares about (parked = might-revisit; superseded = invalidated; done = ran-it).
- *Defense:* it's ONE close-transition carrying a reason-CODE — the code preserves the distinction while simplifying the state-machine; nothing is blurred.
- *Collision → SURVIVE.* The unification is at the mechanism level (one transition); the distinction lives in the reason-code. No loss. (Composes cleanly with C4's reason-code.)

**C6 — Two-mode rlu (session-skill + formal-loop runner code-path).** [special-attention d]
- *Prosecution (concrete failure-case):* two writers of the same `_route_engagements.md` — the runner auto-marks at CONCLUDE AND the user runs `rlu done` for the same route → duplicate/conflicting rows.
- *Defense:* append-only makes duplicates non-corrupting (last-row-wins; the sweep reconciles).
- *Collision → REFINE.* Non-corrupting ≠ clean. **Refine to single-writer-per-route: the runner auto-marks a route ONLY IF no rlu row already exists for it (rlu's row is authoritative); rlu and the runner never both write the same route.** Direction: specify the precedence rule.

**C7 — WAL / event-sourcing / pre-registration external groundings.**
- *Prosecution (external-anchor):* decorative — do they change any behavior, or just dress up the design?
- *Defense:* each pins a behavior — WAL ⇒ `start` writes *before* the work (not after); event-sourcing ⇒ "last row is current state"; pre-registration ⇒ the irreversible window. Remove the grounding and the behavior loses its justification.
- *Collision → SURVIVE.* Load-bearing, not decoration. External anchors real (WAL/trials-registry are external; routelister-spec + placement-finding are project-canon, cited verbatim in D2).

**C8 — Name-keyed source-map ref (robust to map regeneration).**
- *Prosecution:* route names can be long or collide; name-keying is fragile too.
- *Defense:* name + inquiry-id is unique enough; ordinal-alone breaks on every map regen (the actual bug, since route-maps are archived/regenerated per the routelister spec).
- *Collision → SURVIVE.* Name+context beats ordinal; residual name-collisions handled by ask-on-ambiguity (already a pillar-P1 behavior).

## (c′) Phase 3.5 — Assembly Check

The survivors + the 3 folded REFINEs assemble into the build-ready contract. The REFINEs are **local, non-conflicting sharpenings**: C3 (both-paths-first-class), C4 (reason-CODE not free-text), C6 (single-writer-per-route precedence). C4 and C5 compose (the reason-code serves both the loophole-closure and the close-unification). The assembly SURVIVES as one coherent spec — no emergent contradiction.

## (d) Coverage Map

- **Dimensions:** all 8 evaluated; D8 frame-premise prosecuted on 3 premises (all HELD, 2 with sharpenings folded in).
- **Candidates:** 8 evaluated (C1–C8) + assembly. SURVIVE ×5 (C1 caveat, C2 sharpened, C5, C7, C8), REFINE ×3 (C3, C4, C6). 0 KILL.
- **External anchors:** cited — routelister spec (process-state exclusion, archiving), placement finding (`_route_engagements.md`, derived view), prior rlu finding (two moments, guard), crowboy artifacts (demand). Mechanism-independence: **VALIDATED** (external-anchor evidence present), not quarantined.
- **Unexplored:** the deferred frontier — intentionally bounded out, not a coverage gap.

## (e) Signal

**TERMINATE with ranked survivors** (one coherent contract; 3 sharpening REFINEs fold in, no KILLs):

1. **The core contract** — 3 pillars + lifecycle state-machine + 7-axis scenario table + rooted scope-fence + 4-command surface. (lead use-first per C1 caveat)
2. **Single-decider invariant** with the sharpened definition of "decide" (C2).
3. **close-with-reason-CODE** unification {done/parked/superseded} (C5 + C4).
4. **External groundings** (WAL / event-sourcing / pre-registration) as the load-bearing "why" (C7).
5. **Name-keyed source-map ref** (C8).
6. **Folded REFINEs:** both-paths-first-class (C3); reason-CODE-not-free-text (C4); single-writer-per-route precedence (C6).

## (f) Convergence Telemetry

- **Dimension coverage:** 8/8 incl. frame-premise (D8), project-specific risk (D3), external-anchor (D2/C7). No dimension non-discriminating.
- **Adversarial strength:** STRONG — 3 REFINEs from concrete failure-case prosecution (loophole, two-writer race, over-rotation); no rubber-stamping; the SURVIVEs held against real objections, not by default.
- **Landscape stability:** STABLE — candidates landed in predicted regions; the boundary region (the 4 special-attention items) resolved to REFINE as expected.
- **Clean SURVIVE exists:** YES (C5, C7, C8 clean; C1/C2 SURVIVE with folded caveats; the assembly survives).
- **Failure modes checked:** Rubber-stamping (no — 3 REFINEs), Nitpicking (no — 0 KILL, REFINEs are severity-real), Wrong-dimensions/Dimension-blindness (frame-premise + project-risk + external-anchor all added), Self-reference collapse (grounded in crowboy + external patterns, not circular), External-grounding absence (anchors cited → validated).
- **Verdict: PROCEED** → TERMINATE. The contract is build-ready with the 3 REFINEs folded in; ready for Routelister (exhaust) then CONCLUDE.
