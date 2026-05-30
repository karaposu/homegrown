## User Input

`devdocs/inquiries/2026-05-30_09-49__loop_control_moves_metaloop_decisions_not_enumerated/_branch.md` (problem context: sensemaking.md; candidates: enumerate-vs-decide + per-move + owner + phantom-collapse + clean model, with foils F1–F4, in innovation.md; priors + workspace in context). Adjudicate: nature (F1), owner (F2), phantom-collapse-not-over-collapse (F3), refines-not-corrects/preserves (F4) — guard against over-collapse + self-reference (refining own findings under user pressure). Render verdicts + complete the Inherited Commitments Re-test.

---

# Structural Critique — Loop-Control = Meta-Loop Decisions?

## Phase 0 — Dimension Construction

Extracted from Sensemaking + the Goal's negative-spec. Candidate set involves project architecture + refining TWO prior findings under user pressure → a project-specific risk dimension (non-over-decomposition / non-over-collapse) is mandatory and load-bearing.

| # | Dimension | What it asks | Extracted from | Weight |
|---|---|---|---|---|
| **D1** | **Nature correctness** | Is enumerate-vs-decide sound; are loop-control moves decisions, not enumerated options? | SV6 / K1–K2, K10; Ambiguity 1 | **CRITICAL** |
| **D2** | **Cleanliness (no phantom AND no over-collapse)** — *project-specific risk axis* | Does the result remove the phantom layer WITHOUT deleting real work (the user's "I might be wrong")? | SV6 / K8, K12; Ambiguity 4 | **CRITICAL** |
| **D3** | **Owner soundness** | Is the owner the meta-loop (+runner), not a separate boundary-controller or an enumerator? | SV6 / K6; Ambiguity 2 | HIGH |
| **D4** | **Refinement-soundness (prior-finding fidelity)** | Is refining Gap A + 09-07 justified — cores preserved, not capitulation/drift? | SV6 / K7, K13; Ambiguity 6 | HIGH |
| **D5** | **Clarity / confusion-resolution** | Does it resolve the recurring "isn't the boundary protocol doing what routelister does?" | SV6 / K9; the Goal | HIGH |
| **D6** | **Parsimony** | Simplest sufficient architecture? | foundational | MEDIUM |

**Dimension validation:** if a candidate passed all six — nature-correct (D1), clean-without-over-collapse (D2), owner-sound (D3), refinement-sound (D4), clarity-producing (D5), parsimonious (D6) — it would be the decisive, clean answer the goal wants. **D2 is the load-bearing project-specific axis** (the danger is over-collapsing a layer that does real work — the user explicitly flagged "I might be wrong"). All sensemaking perspectives map (technical→D1/D3, risk→D2, human/user→D5, definitional→D4).

---

## Phase 1 — Fitness Landscape

- **Viable region:** the verdict that (a) correctly classifies loop-control as decisions (D1), (b) removes the phantom layer while keeping the boundary work in the meta-loop (D2), (c) owns it at the meta-loop+runner (D3), (d) refines (not breaks) the priors (D4), (e) resolves the confusion (D5), (f) yields the simplest sufficient layering (D6).
- **Dead region:** any verdict that enumerates loop-control as a menu (fails D1), or deletes the boundary work entirely (fails D2 — over-collapse), or houses loop-control in an enumerator (fails D1/D3).
- **Boundary region:** the cycle→territory translation's exact home (the meta-loop's step vs a thin shared helper — probed below); the meta-loop's decision-spec (deferred).
- **Unexplored:** the runtime decision-spec for each loop-control move — out of scope (process layer).

---

## Phase 2 — Adversarial Evaluation

### C1 — The enumerate-vs-decide seam
- **Prosecution (F1):** "to choose a loop-control move you must list the options — listing is enumeration; so loop-control is enumerated, just from loop-state."
- **Defense:** enumeration's defining feature is *discovery of an unknown open field* (you sweep because you don't know what's there). The loop-control set is *known, closed, territory-independent*. Recalling 7 known items is not discovery; it's deliberation preceding a decision. The runner already decides without composing a menu.
- **Collision:** F1 dies — "listing a fixed known set" ≠ "discovering an open territory-field"; the runner is the existing proof. The seam is sound and reusable (it classifies any future move). **Position: viable (D1✓).** → **SURVIVE.**

### C2 — Per-move table
- **Prosecution:** "MERGE needs concept-perception — so isn't part of it routelister's, making the clean split leaky?"
- **Defense:** yes, MERGE's *perception* (concept-sameness) is routelister's individuation — but that's routelister doing its *normal* job, feeding the meta-loop's merge *decision*. The split isn't leaky; it's exactly the seam (perception→routelister; decision→meta-loop).
- **Collision:** survives — every *decision* is the meta-loop's; the only external perceptual input is routelister's existing individuation. No new enumerator. **Position: viable.** → **SURVIVE.**

### C3 — Owner = meta-loop + runner
- **Prosecution (F2):** "a dedicated boundary-controller could own loop-control, separate from the meta-loop." *Spec-gap probe:* does the meta-loop spec specify how it decides each move?
- **Defense:** loop-control decisions need the loop-state; the meta-loop (cross-inquiry) + the runner (per-cycle) hold it. A separate boundary-controller would need the same state → it duplicates or *is* the meta-loop.
- **Collision:** F2 dies — no state a separate controller would hold that the meta-loop doesn't. The spec-gap probe lands a *minor* flag (the meta-loop's per-move decision-spec is unwritten — but that's downstream, not a blocker). **Position: viable (D3✓).** → **SURVIVE.**

### C4 — Phantom-collapse + over-collapse guard
- **Prosecution (F3):** "dissolving the boundary protocol is over-collapse — the cycle→territory translation + the call-sequencing are real work." *Specific failure-case:* what if routelister is called at boundaries by *multiple* controllers (the meta-loop, a human, another tool) — wouldn't a shared boundary-adapter be useful, i.e., a real separate thing?
- **Defense:** the boundary *work* survives inside the meta-loop as its boundary step; only the phantom *enumeration* job is removed. The separate "boundary protocol that produces the complete field incl. loop-control" had no unique responsibility.
- **Collision:** F3 mostly dies (the work survives; the phantom job was never real), BUT the multi-caller failure-case *lands* as a minor refinement: if several controllers do loop-boundary calls, the **cycle→territory translation** could be a *thin reusable helper/adapter* — but note it's a **helper used by the controller, not a control layer and not an enumerator**. So even multi-caller doesn't resurrect the phantom *control* layer; at most a small shared adapter. **Position: viable core, one boundary refinement.** → **SURVIVE + REFINE.**
  - **Refinement brief:** the cycle→territory translation lives in the meta-loop's boundary step by default; *if* multiple controllers need loop-boundary calls, factor it into a thin reusable adapter (a helper, not a control protocol). This is not the phantom "boundary protocol" — it has no control or enumeration responsibility.

### C5 — Clean model + the refinements
- **Prosecution (F4):** "either the priors (Gap A, 09-07) were just wrong (CORRECTS), or they were fine (PRESERVES) — REFINES is a fudge."
- **Defense:** Gap A's core ("the loop-control moves need an owner; routelister isn't it") is *correct and survives* — so not CORRECTS. But its "enumerate a menu / homeless" frame *must change* — so not PRESERVES. 09-07's "protocol-not-section" *holds*; its "boundary protocol enumerates loop-control" *must change*. That's precisely REFINES: keep the correct core, correct the inherited frame.
- **Collision:** F4 dies — the priors are neither wholly wrong nor unchanged; REFINES is the accurate relationship (cores preserved, routeman-inflected framing corrected). **Position: viable (D4✓).** → **SURVIVE.**

### Over-collapse + self-reference audit (D2 + D4 — the load-bearing checks)
- **Over-collapse (D2):** does any *real work* vanish? No — the boundary work (call routelister at cycle-end, cycle→territory, apply control logic) survives inside the meta-loop; the C4 refinement even names a thin-adapter option for multi-caller. Only the phantom enumeration job is removed. **D2: PASS** (phantom-removal, not over-collapse).
- **Self-reference (D4):** is refining my own Gap A + 09-07 under user pressure capitulation/drift? **No** — grounded on external/observable anchors (the runner decides, predates this; routeman §2.2 all-as-routes; the sensor/controller pattern), and it *preserves the priors' valid cores* while correcting only the routeman-inflected framing. A capitulation would discard the priors; this keeps their substance. **D4: PASS.**

---

## Phase 3.5 — Assembly Check

The survivors assemble into **one enumerator + two controllers**: routelister (enumerates the concept-field, loop-blind) + the meta-loop (cross-inquiry controller: decides loop-control + selects + memory + autonomy; its boundary step calls routelister) + the runner (per-cycle conclude/iterate). Evaluated as a candidate: passes D1 (decisions not enumeration), D2 (phantom removed, work survives), D3 (meta-loop+runner own it), D4 (priors refined, cores kept), D5 (resolves the recurring confusion — the phantom layer is gone), D6 (simplest sufficient — fewer layers). **The assembly SURVIVES and ranks top.** Emergent value: removing the phantom layer *is* the cleanliness the user asked for, and it explains why the confusion kept recurring.

---

## Inherited Commitments Re-test (Synthesis Trigger obligation)

| Prior | Commitment | Re-test verdict |
|---|---|---|
| `devdocs/inquiries/2026-05-30_08-14__routeman_loop_harmony_gaps_vs_routelister/finding.md` | **Gap A** — "loop-control move ENUMERATION is homeless; the meta-loop composes the menu by reading its loop-state + routelister's index" | **RE-TESTED ✓ — REFINED.** Core preserved + confirmed: the loop-control moves need an owner, and routelister isn't it; the owner is the meta-loop. Frame corrected: they are the meta-loop's *control decisions*, not an *enumerated menu*. The "homelessness" was a frame artifact (inherited from routeman's all-as-routes model); seen as the controller's decisions, they were never homeless. |
| `devdocs/inquiries/2026-05-30_09-07__routelister_boundary_use_protocol_vs_section/finding.md` | the three-layer model; "the boundary protocol produces the complete next-move field (incl. loop-control moves)"; "protocol, not section" | **RE-TESTED ✓ — REFINED.** "Protocol-not-section" PRESERVED (loop-boundary orchestration is protocol-layer = the meta-loop, not inside the discipline). Corrected: "the boundary protocol *enumerates* loop-control moves into the field" → "routelister enumerates the concept-field; the meta-loop *decides* loop-control." The separate "boundary protocol" was a phantom that dissolves into the meta-loop's boundary step (work survives). |
| `cognitive_harness/routeman/references/routeman.md` §2.2 | the 16-type taxonomy enumerated ALL moves (concept + loop-control) as routes | **RE-TESTED ✓ (artifact-grounded)** — confirmed as the SOURCE of the enumeration frame: routeman's all-as-routes model forced control-flow into route-shape; the "enumerate a loop-control menu" assumption inherited this. |
| `/Users/ns/.claude/skills/meta-loop/SKILL.md` | meta-loop SELECTS + owns cross-run state; "Navigation sees, it does not choose" | **RE-TESTED ✓** — confirmed: the meta-loop is the loop-aware controller; the loop-control *decisions* are naturally its (the runner owns the per-cycle grain). |

All four priors re-tested with cited evidence; none inherited-without-re-test.

---

## Coverage Map + Signal

| Region | Status |
|---|---|
| Nature: enumerate-vs-decide (D1) | covered — SURVIVE (C1); F1 KILLED |
| Per-move (D1/D3) | covered — SURVIVE (C2) |
| Owner = meta-loop + runner (D3) | covered — SURVIVE (C3); F2 KILLED |
| Phantom-collapse + over-collapse guard (D2) | covered — SURVIVE+REFINE (C4; thin-adapter for multi-caller); F3 partially landed, resolved |
| Clean model + refinements (D4/D5/D6) | covered — SURVIVE (C5); F4 KILLED (REFINES) |
| Over-collapse + self-reference (D2/D4) | covered — PASS (work survives; external grounds, cores preserved) |

**Signal: TERMINATE.** A clean SURVIVE exists (the one-enumerator/two-controllers assembly + C1/C2/C3/C5 with no critical caveats); the one REFINE (C4: the thin-adapter option for multi-caller) is a strengthening boundary-note, not a blocker; the meta-loop decision-spec is deferred. Landscape stable; the question is answered.

---

## Convergence Telemetry

- **Dimension coverage:** 6/6; D2 (project-specific non-over-collapse axis) present and load-bearing. Every dimension discriminated (D1 killed F1; D3 killed F2; D2 surfaced the C4 thin-adapter refinement + passed the over-collapse audit; D4 killed F4 + passed the self-reference audit; D5/D6 confirmed by the assembly).
- **Adversarial strength:** STRONG — prosecution built the user's strongest counters (F1–F4 + the multi-caller failure-case + "REFINES is a fudge"), multi-axis depth (user-perspective on D2/D5 — "I might be wrong"; the multi-caller failure-case on C4; spec-gap probe on C3).
- **Landscape stability:** STABLE.
- **Clean SURVIVE exists:** YES — the one-enumerator/two-controllers assembly.
- **Failure modes checked:** Rubber-stamping (avoided — a real REFINE + a partially-landed prosecution); Nitpicking (avoided — the REFINE is a genuine boundary-case); **Self-Reference Collapse (failure mode #7) — guarded** (D4 audited refining own findings; external anchors — the runner, routeman §2.2, sensor/controller; cores preserved, not capitulation); Wrong/Missing dimensions (D2 project-specific axis included); Evaluation Drift (dimensions fixed Phase 0); False Convergence (clean SURVIVE exists).
- **Overall: PROCEED** — sufficient coverage, strong adversarial testing, stable landscape, clean survivor, over-collapse + self-reference audited. Ready to CONCLUDE.
