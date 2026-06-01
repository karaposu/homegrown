## User Input

`devdocs/inquiries/2026-06-01_01-37__inquiry_elaboration_structural_design/_branch.md` (priors consumed: surfacing / sensemaking / decomposition / innovation)

---

# Critique — Inquiry Elaboration Structural Design

## Phase 0 — Dimensions (extracted; weighted)

| Dimension | Asks | Weight |
|---|---|---|
| **Correctness** | Does the skeleton faithfully encode the settled scope + place R1–R4? | critical |
| **Self-policing** *(project risk)* | Does the structure prevent wrapper-fusion / scope-bleed (the upper bound)? | critical |
| **Migration soundness** *(project risk)* | Does every migration verdict obey the object/mode decision rule? | critical |
| **Family-consistency** | Matches the anatomy 5-section shape + sibling specs? | high |
| **Self-containment** *(project risk)* | No outbound pointers; vocabulary self-defined? | high |
| **Completeness** | All 5 sections + 2 tables present? | high |
| **Authorability** | Could a spec author write the file from this? | medium |

## Phase 2 — Adversarial Evaluation (multi-axis prosecution)

**1. Migration RE-TEST — Layer-Commitment & Synthesis-Trigger STAY runner.**
- *Prosecution (spec-gap):* deciding the inquiry's layer is a comprehension-ish judgment about the request — isn't that IE's?
- *Defense:* the object/mode test — Layer-Commitment decides how the **runner routes** the inquiry (pipeline meta-routing), not a property of the request's framing content; Synthesis-Trigger drives CONCLUDE (orchestration). Both fail the object test → runner.
- *Collision:* SURVIVE — with a refinement: IE's comprehension naturally *notices* layer-relevant signals (e.g., "targets a discipline artifact"), so **IE may emit a layer-hint as perception; the runner commits the Layer-Commitment.** → **R5**.

**2. Output substantive + header — is the header redundant?**
- *Prosecution:* the request-structure + fidelity verdicts could live inside the framing; why a separate header?
- *Defense:* the header is the **runner-actionable summary** of the perceive→act handoff — the runner shouldn't parse the full framing to learn "spawn 3 sequential" or "fidelity FLAGged."
- *Collision:* SURVIVE — but the header must not diverge from the framing (the decomposition hidden-coupling). → **R6: verdict vocabulary is single-source-of-truth in §1, referenced by §2 and §5.**

**3. Self-policing — is "wrapper-fusion" actually prevented, or just named?**
- *Prosecution:* a LAYER-2 failure mode is descriptive; it doesn't stop an author from writing wrapper phases.
- *Defense:* combined with §2's per-Component phrasing ("tailored; does not invoke the neighbor"), the spec gives the author both the instruction and the named failure to self-check — which is as much as a spec (author-guidance, not a compiler) can do.
- *Collision:* SURVIVE — with the honest residual: **the upper-bound guard is convention-enforced (author + review), not mechanical.** → **R7 (note it explicitly in §4).**

**4. Family-consistency vs IE's real differences.**
- *Prosecution:* IE's output is substantive (unlike surfacing's thin) and it has no cross-run index (unlike routelister's `_route.md`); forcing the 5-section family adds empty sections.
- *Defense:* the 5 *sections* are universal (anatomy); the *content* legitimately differs (substantive vs thin) — anatomy explicitly expects unique form. No empty sections result; each carries IE-specific content.
- *Collision:* SURVIVE.

**5. Completeness — R1–R4 placement.**
- R1 depth-limit → §2 comprehend property + §3 stop-rule ✓; R2 request-signal → §2 perceive-structure ✓; R3 fixed gate → §2 verify ✓; R4 source-input → §2 verify axis (ii) + §5 header ✓. → SURVIVE.

**6. Authorability.**
- *Prosecution:* sections are sketched, not full prose; primitive atoms (G7) deferred.
- *Defense:* the skeleton + the two schemas + the migration table are concrete enough that what remains is **prose-authoring, not design**; G7 is a minor align-to-the-taxonomy-table task.
- *Collision:* SURVIVE — note: authoring the actual `references/<name>.md` + `SKILL.md` is the immediate next *action* (writing), not a new inquiry layer.

## Phase 3 — Verdicts

- **SURVIVE:** the 5-section instantiation (D1–D4); the output schema (substantive + verdict header, D5); the migration table (D6); the self-policing-via-tailored-Components+LAYER-2; R1–R4 placements.
- **REFINE (authoring-level):** R5 IE emits a *layer-hint* (perception); runner commits Layer-Commitment. R6 verdict vocabulary single-source in §1. R7 §4 states the wrapper-fusion guard is convention-enforced, not mechanical.
- **KILL:** none.

## Phase 3.5 — Assembly Check
The pieces compose into one coherent, **authorable** spec design, unified by the **gateway frame** (normalize=comprehend / route=perceive-structure / validate=verify / no-handlers=NOT-list+upper-bound / normalized-request-out=substantive output+header). The assembly SURVIVES and is ready to be written as the actual spec file.

## Phase 4 — Coverage + Convergence
All critical dimensions evaluated; one clean SURVIVE (the assembly) with no critical caveats; three REFINEs all authoring-level (not structural gaps). **Converged → TERMINATE.** The question (how should it be structurally) is answered.

---

## The Answer (IE structural design)

**Package:** `cognitive_harness/<inquiry-elaboration>/SKILL.md` (operational wrapper, Step-0 mandatory pre-read) + `references/<name>.md` (the framework). Self-contained.

**The framework's five sections:**
- **§1 Identity** — verb-meaning ("comprehend a raw request → loop-ready, fidelity-verified inquiry framing, perceiving not acting"); the **decision rule** (object: request-not-problem; mode: perceive-not-act); the **7-border NOT-list** (each grounded in object-or-mode); vocabulary (request / framing / elaborated-inquiry spec / request-structure verdict / fidelity verdict — the verdict terms defined **here**, once, per R6); Upstream taxonomy placement; self-containment statement.
- **§2 Components** — three **tailored** phases, each marked "does not invoke the neighbor discipline": (1) Comprehend-&-Articulate (depth-limited, R1; primitives Intuition-similarity/Context-framing/Working-Memory); (2) Perceive-Request-Structure (request-signal-based, R2; emits `single`/`parallel-set`/`sequential-chain`+order; primitives Salience/Attention-pointer/Intuition-similarity); (3) Verify-Framing-Fidelity (fixed-criteria gate, R3; 3 axes internal-consistency/user-faithfulness[incl. Source-Input, R4]/external-validity; primitives Evaluation/Inhibition/Metacognition).
- **§3 Process Model** — comprehend → perceive-structure → verify; the R1 stop-rule; one verify→comprehend bounce; internal phases only (no runner wiring).
- **§4 Quality** — LAYER-1 operational (missed-bundle / over-framing / under-framing / weak-fidelity); **LAYER-2 identity** (problem-modeling→sense-making · wrapper-fusion→mini-runner · acting→runner · position-coupling), **noting the wrapper-fusion guard is convention-enforced, not mechanical** (R7); asymmetric-failure (a passed misframing is the costly failure); self-assessment PROCEED/FLAG/RE-RUN.
- **§5 Output** — (a) substantive elaborated-inquiry spec `{Question{5 meta-aspects}, Goal, Scope}`; (b) thin verdict header `{request-structure-verdict, fidelity-verdict{status,per-axis-notes}, source-input-preserved, layer-hint(R5)}`; light Progression {intent→draft→verified}; Telemetry; Frontier (un-collapsed ambiguity for the runner/user).

**Migration table (branch.md → home):** Question/5-meta-aspects, Goal → IE comprehend; Source-Input, Scope-Check, Step 3.5, Step 3.6 → IE verify (3 axes); request-bundling → IE perceive-structure. **Stays runner:** Layer-Commitment (IE emits only a hint, R5), Synthesis-Trigger, the spawn. **Net:** branch.md thins to encoding IE's output + Layer-Commitment + Synthesis-Trigger + spawn.

**Immediate next action (not a new layer):** author the two files from this skeleton. **Next layer (process):** where IE runs in MVLw, how the runner spawns from the request-structure verdict, the exact branch.md rewrite, runtime gates.
