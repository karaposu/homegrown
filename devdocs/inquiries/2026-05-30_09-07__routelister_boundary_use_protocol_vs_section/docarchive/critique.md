## User Input

`devdocs/inquiries/2026-05-30_09-07__routelister_boundary_use_protocol_vs_section/_branch.md` (problem context: sensemaking.md; candidates: usage-not-identity + fusion-vs-composition + protocol-over-section + Gap-C refinement + the three-layer model, with foils F1–F4, in innovation.md; priors + workspace in context). Adjudicate: usage-not-identity (F1), fusion-diagnosis (F2), protocol-over-section (F3), Gap-C refinement (F4) — guard against self-reference (refining own prior finding). Render verdicts + complete the Inherited Commitments Re-test.

---

# Structural Critique — Routelister-as-Boundary: Composition, Failure, Protocol-vs-Section

## Phase 0 — Dimension Construction

Extracted from Sensemaking + the Goal's negative-spec. Candidate set involves project artifacts (routelister/routeman + the repo structure) + a refinement of a prior finding → a project-specific risk dimension (self-containment fidelity) is mandatory and load-bearing.

| # | Dimension | What it asks | Extracted from | Weight |
|---|---|---|---|---|
| **D1** | **Diagnostic correctness** | Is the fusion-vs-composition diagnosis sound + the usage-not-identity reframe right? | SV6 / K1–K3; Ambiguities 1–2 | **CRITICAL** |
| **D2** | **Self-containment fidelity** — *project-specific risk axis* | Does the verdict respect "disciplines are self-contained individuals" + the protocol→discipline dependency direction (no re-fusion)? | SV6 / C4, P1; the self-contained principle | **CRITICAL** |
| **D3** | **Clarity / confusion-resolution** | Does the answer actually resolve the user's stated confusion (the goal was clarity)? | `_branch` Goal "clarity"; OT0 | HIGH |
| **D4** | **Artifact-shape soundness** | Is protocol-over-section right; is the no-section result grounded in the real repo + principle? | SV6 / K4, K5; the layout | HIGH |
| **D5** | **Refinement-soundness (prior-finding fidelity)** | Is refining 08-14 Gap C justified, not self-reference drift? | SV6 / K6; Ambiguity 5 | HIGH |
| **D6** | **Parsimony / non-over-formalization** | Does the answer avoid leaving the user MORE confused by over-formalizing? | `_branch` "what would fail" (d) | MEDIUM |

**Dimension validation:** if a candidate passed all six — diagnostically correct (D1), self-containment-faithful (D2), clarity-producing (D3), artifact-grounded (D4), refinement-sound (D5), parsimonious (D6) — it would be the decisive, clarity-producing answer the goal wants. **D2 is the load-bearing project-specific axis** (the danger is re-coupling routelister to the loop — the exact routeman defect). All sensemaking perspectives map (technical→D1/D4, risk→D2, human/user→D3/D6, definitional→D5).

---

## Phase 1 — Fitness Landscape

- **Viable region:** the verdict that (a) correctly reframes boundary as usage (D1), (b) keeps routelister self-contained with a downward-only dependency (D2), (c) resolves the confusion via a graspable model (D3), (d) puts orchestration in a protocol per the real layout (D4), (e) refines Gap C on external grounds (D5), (f) stays plain (D6).
- **Dead region:** any verdict that makes boundary a 2nd identity (fails D1), or puts orchestration/an operational loop-role in the discipline (fails D2/D4), or over-formalizes into more confusion (fails D6).
- **Boundary region:** the self-contained descriptive note (legitimate but optional/DEFERRED); the which-protocol identity (deferred).
- **Unexplored:** the runtime procedure of a boundary run — out of scope (process layer).

---

## Phase 2 — Adversarial Evaluation

### C1 — Boundary = usage/composition, not identity
- **Prosecution (F1):** "if routelister is *the* thing you run at the boundary, being-a-boundary-tool IS part of what it is."
- **Defense:** identity = what holds across all uses; routelister runs on any territory (codebase, docs, raw text, a completed cycle); the boundary case is one territory-type. A property true in one application is a usage.
- **Collision:** F1 dies — if boundary-serving were identity, routelister couldn't run on a non-cycle territory, but it can. **Position: viable (D1✓).** → **SURVIVE.**

### C2 — Fusion vs composition (the diagnosis)
- **Prosecution (F2):** "you're repeating routeman — two roles in play again is the same mistake." *Specific failure-case:* could the protocol+discipline composition silently *re-fuse* over time (someone adds a loop reference to routelister 'for convenience')?
- **Defense:** the diagnosis (01-11) names the defect as loop-*relative identity* (the welding), not "two roles." Composition keeps the roles separable: routelister's identity is loop-free; the caller adds the boundary use.
- **Collision:** F2 dies on the diagnosis — the defect was the welding, not the duality; composition doesn't weld. BUT the failure-case *lands* as a refinement: composition is only safe *if the dependency stays one-way*. If routelister ever points at the loop/protocol, it re-fuses. **Position: viable core, one guard-refinement.** → **SURVIVE + REFINE.**
  - **Refinement brief:** name the **re-fusion guard** explicitly — routelister's spec must never contain an outbound pointer to the loop/meta-loop/boundary-protocol (enforced by the self-contained principle). Composition is safe *because* of, and only as long as, the protocol→discipline one-way dependency. This makes the "we're not repeating routeman" claim durable, not just true today.

### C3 — Protocol over section
- **Prosecution (F3):** "a thin co-located loop-role section inside routelister keeps the contract next to the discipline; a separate protocol scatters knowledge." *User-perspective:* co-location can aid a reader.
- **Defense:** the loop-boundary things are *orchestration*; orchestration-inside-discipline is routeman's §2.1/§5.8 error (half the defect), and the self-contained principle forbids the outbound pointer an operational section would require. The repo already separates `protocols/` from disciplines and uses the protocol→discipline call pattern (the runners).
- **Collision:** F3 dies — co-location is a presentation preference that can't override the structural requirement that orchestration not live in the individual; and the protocol home + pattern already exist. **Position: viable; D2/D4-critical.** → **SURVIVE.**

### C4 — No operational section + the Gap-C refinement
- **Prosecution (F4):** "08-14 explicitly said a loop-role *section* in routelister; overturning your own prior finding needs strong grounds." *Specification-gap probe:* where exactly does the loop-role contract go, and does that home exist?
- **Defense:** the consume-side is just "territory" (existing contract); the feed-selection side is the *caller's* knowledge → an operational section would be an outbound pointer. The contract goes in the protocol (the meta-loop, which 08-14 already gives selection + menu-composition + REVISIT). routelister carries at most a self-contained descriptive note.
- **Collision:** F4 dies — keeping the section (PRESERVES) is an outbound pointer (D2 violation); dropping the loop-role entirely (CORRECTS) overshoots (documenting it IS valuable, just in the protocol). REFINES is the right relationship: intent preserved, location moved. The spec-gap probe lands a *minor* flag: *which* protocol (the meta-loop vs a dedicated boundary protocol) is deferred — but the home (protocol-layer) is decided and exists. **Position: viable; the descriptive note DEFERRED to spec authoring; which-protocol flagged.** → **SURVIVE (refines 08-14 Gap C).**

### C5 — The three-layer clarity model
- **Prosecution (D3/D6 — user-perspective):** "the user is confused; does a three-layer model + new jargon ('fusion/composition,' 'orchestration') help, or add formalism?"
- **Defense:** the model maps onto things the user already grasps (the discipline routelister; the loop; the spec-vs-protocol distinction they raised themselves), and the one-line dissolver ("a discipline that IS a boundary → a discipline that CAN BE USED at a boundary") is plain language. The model answers all three questions at once.
- **Collision:** survives — the model is grounded in the user's own terms (they raised "protocol vs section"), and the dissolver is jargon-free. The risk (D6) is mitigated by leading with the plain one-liner and using the table as support, not as the explanation. **Position: viable (D3✓ D6✓).** → **SURVIVE.**

### Self-reference audit (D5 — refining own prior finding 08-14 Gap C)
Is the Gap-C refinement justified, or drift/rigor-signaling? **Justified:** it rests on grounds *external* to 08-14 and this chain's vocabulary — the project-wide self-contained principle (predates 08-14), the *observed* repo layout (`protocols/` vs disciplines), and routeman's *literal* spec (orchestration inside the discipline). The move is *adversarial* to the prior finding (it relocates Gap C), not protective, and it makes a falsifiable claim (an operational loop-role section is an outbound pointer). **D5: PASS.**

---

## Phase 3.5 — Assembly Check

The survivors assemble into the **three-layer model**: discipline (routelister, perception) / usage (boundary, a composition) / orchestration (protocol, the loop machinery), with a downward-only dependency. Evaluated as a candidate: passes D1 (correct diagnosis), D2 (one-way dependency + the re-fusion guard), D3 (resolves the confusion), D4 (matches the real layout), D5 (refinement externally grounded), D6 (plain dissolver leads). **The assembly SURVIVES and ranks top.** Emergent value: it answers OT1+OT2+OT3 simultaneously and gives the routeman failure a precise shape (collapse of three layers into one identity). The finding should lead with the model + the one-line dissolver, add the re-fusion guard, and note the Gap-C refinement.

---

## Inherited Commitments Re-test (Synthesis Trigger obligation)

| Prior | Commitment | Re-test verdict |
|---|---|---|
| `devdocs/inquiries/2026-05-30_08-14__routeman_loop_harmony_gaps_vs_routelister/finding.md` | perception/selection split ("Navigation sees, it does not choose"); **Gap C = "a loop-role *section* in routelister's spec"** | **RE-TESTED ✓ — split reinforced, Gap C REFINED.** The split is confirmed and extended to the artifact layer (orchestration→protocol, perception→discipline). Gap C's *intent* (document the loop-role) is preserved; its *location* moves discipline→protocol, because the consume-side is just "territory" and the feed-side is the caller's knowledge — an operational section would be an outbound pointer (self-containment violation). |
| `devdocs/inquiries/2026-05-29_01-11__routeman_current_problem_diagnosis/finding.md` | routeman's defect = loop-RELATIVE identity | **RE-TESTED ✓ — confirmed + sharpened.** The defect is the *fusion*: welding the boundary-position into the identity (§1.5) + placing orchestration inside the discipline (§2.1/§5.8). The new plan composes across layers, avoiding the welding. The "you're repeating routeman" reading was tested (F2) and killed. |
| `docs/walkthrough.md` §9 + Scenario 3 | routelister fills the boundary slot "by role … not part of its identity"; "by composition role" | **RE-TESTED ✓** — confirmed; boundary = a usage/composition, not a second identity (C1, F1 killed). |
| `cognitive_harness/routeman/references/routeman.md` §1.2/§1.5/§2.1/§5.8 | routeman defined as the boundary discipline (loop-position in identity); orchestration (cross-cycle revisitation, autonomy, `_route.md`) inside the discipline | **RE-TESTED ✓ (artifact-grounded)** — verified the loop-position is in routeman's identity and the orchestration lives inside the discipline spec. This is the concrete evidence of fusion. |
| Project principle (self-contained disciplines; `cognitive_harness/protocols/`) | discipline specs must not point outward; protocols live at `protocols/` | **RE-TESTED ✓ (artifact-grounded)** — verified: `cognitive_harness/protocols/` exists (branch_inquiry/conclude/loop_diagnose), disciplines are top-level dirs, runners call disciplines (protocol→discipline). This is the adjudicator that decides protocol-over-section. |

All five priors re-tested with cited evidence; none inherited-without-re-test.

---

## Coverage Map + Signal

| Region | Status |
|---|---|
| Usage-not-identity (D1) | covered — SURVIVE (C1); F1 KILLED |
| Fusion-vs-composition (D1/D2) | covered — SURVIVE+REFINE (C2; the re-fusion guard); F2 KILLED |
| Protocol-over-section (D2/D4) | covered — SURVIVE (C3); F3 KILLED |
| No-section + Gap-C refinement (D4/D5) | covered — SURVIVE (C4); F4 KILLED; which-protocol flagged; note DEFERRED |
| Clarity model (D3/D6) | covered — SURVIVE (C5) |
| Self-containment + refinement-soundness (D2/D5) | covered — PASS (external grounds; one-way dependency + re-fusion guard) |

**Signal: TERMINATE.** A clean SURVIVE exists (the three-layer assembly + C1/C3/C4/C5 with no critical-dimension caveats); the one REFINE (C2: name the re-fusion guard) is a strengthening clarification, not a viability blocker; the descriptive note + which-protocol are DEFERRED to spec authoring. Landscape stable; the question is answered.

---

## Convergence Telemetry

- **Dimension coverage:** 6/6; D2 (project-specific self-containment axis) present and load-bearing. Every dimension discriminated (D1 killed F1; D2/D4 killed F3; D5 audited the Gap-C refinement; D2 surfaced the C2 re-fusion-guard refinement; D3/D6 tested the model's clarity).
- **Adversarial strength:** STRONG — prosecution constructed the user's strongest counter-cases (F1–F4 + "you're repeating routeman" + "overturning your own finding"), multi-axis depth (user-perspective on C5/D3; the re-fusion failure-case on C2; spec-gap probe on C4).
- **Landscape stability:** STABLE — every candidate landed in a mapped region.
- **Clean SURVIVE exists:** YES — the three-layer assembly + the protocol verdict.
- **Failure modes checked:** Rubber-stamping (avoided — a real REFINE [the re-fusion guard] emerged); Nitpicking (avoided — the REFINE is critical-axis strengthening); **Self-Reference Collapse (failure mode #7) — guarded** (D5 audited the Gap-C refinement; grounded in external anchors — the self-contained principle + the observed layout + routeman's literal spec; adversarial to the prior finding, not protective); Wrong/Missing dimensions (D2 project-specific axis included); Evaluation Drift (dimensions fixed in Phase 0); False Convergence (a clean SURVIVE with the assembly exists).
- **Overall: PROCEED** — sufficient coverage, strong adversarial testing, stable landscape, clean survivor, self-reference audited. Ready to CONCLUDE.
