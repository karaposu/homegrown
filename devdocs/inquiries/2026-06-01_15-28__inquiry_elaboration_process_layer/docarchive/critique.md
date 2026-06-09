## User Input

`devdocs/inquiries/2026-06-01_15-28__inquiry_elaboration_process_layer/_branch.md` (priors consumed: surfacing / sensemaking / decomposition / innovation)

---

# Critique — IE Process Layer

## Phase 0 — Dimensions (extracted; weighted)

| Dimension | Asks | Weight |
|---|---|---|
| **K8 self-containment invariant** *(project risk)* | Does any piece's text, if transcribed, end up in IE's spec? Would IE's spec gain runner-knowledge under this design? | **critical** |
| **Perception/action split fidelity** *(project risk)* | Does the design keep IE perceiving and the runner acting — or does it blur the line anywhere? | **critical** |
| **Gate-tier separation (D5 resolution)** *(project risk)* | Is the reference-authority FLAG separate from IE's fidelity FLAG bounce budget in the design's actual text, not just intent? | **critical** |
| **Cross-runner generalization** | Does DE4's contract genuinely generalize, or bake-in MVLw specifics? | critical |
| **Asymmetric-failure honored** | Does the gate behavior reflect halt-by-default? | high |
| **Migration completeness** | Template-thinning leaves no dangling content; no duplicated content; no orphan sections? | high |
| **Consistency with prior commitments** | Honors 11-27 schema (anchor names, echo fields), 22-30 spawn=runner, 09-54 self-containment? | high |
| **Authorability** | Can a spec author transcribe the content into actual files without re-deciding? | medium |
| **Sequential-chain deferral honesty** | Is the D4 deferral explicit, not hidden? | medium |
| **Failure-mode coverage** | Do the new protocols list failure modes for future authors? | medium |

## Phase 1 — Landscape (brief)

- **Viable region:** runner-side process design that preserves K8 + perception/action split + gate-tier separation + cross-runner generality.
- **Dead region:** any sentence that, if transcribed, would land in IE's spec; any wiring that names a specific runner inside IE; conflated gate budgets; broken migration (duplicated or orphaned content).
- **Boundary region:** DE4's §6 MVLw worked example (MVLw-specific step numbering); DE1.b's migration narrative (the "What's gone" list); the `source_input_preserved` field placement.

## Phase 2 — Adversarial Evaluation

### 1. K8 self-containment invariant (the critical gate)

- *Prosecution (spec-gap scan):* read every sentence of D0/DE1/DE2/DE3/DE4. Any sentence that, if pasted into IE's spec verbatim, would carry runner-knowledge into IE?
- *Defense (per piece):*
  - **D0** names "the runner" generically (the actor that consumes outputs). Doesn't name MVLw specifically. Doesn't reference downstream protocols. Survives transcription test — but only if the reader understands D0 is a runner-side anchor, not an IE-spec section.
  - **DE1** is the MVLw runner-spec edit — it LEGITIMATELY names IE (calls `Skill(skill: "inquiry-elaboration", ...)`). This is the correct wiring direction (runner-spec → IE; not IE-spec → runner). ✓
  - **DE2** is also runner-spec. Names IE, names `branch_inquiry`, names `reference_authority_check.md`. All runner-spec-legitimate. ✓
  - **DE3** is a runner-side protocol. Names `/inquiry-elaboration` in its loading note ("invoked by a runner after /inquiry-elaboration emits..."). That's fine — DE3 operates on IE's output; naming what it operates on is its job (analogous to how CONCLUDE legitimately names the disciplines it compiles).
  - **DE4** is the adoption-contract protocol. Names IE throughout (correct — it IS the adoption contract for IE). Uses "MVLw" only in §6 (the worked example) and §7 (adoption note), both appropriately marked.
- *Collision:* SURVIVE — with **R-1**: add a sentence to D0 explicitly stating *"this contract is referenced by runner-specs and runner-side protocols only; IE's own spec does not reference this contract."* The K8 invariant should be visible at the anchor where downstream pieces read it.
- **Verdict:** SURVIVE + REFINE (R-1).

### 2. Perception/action split fidelity

- *Prosecution:* anywhere in the design where IE acts on its own output (encodes, spawns, gates)?
- *Defense:* DE1.a says IE is INVOKED by the runner; doesn't say IE encodes. DE1.b shows the runner encoding. DE2 shows the runner running the gate + spawn wrapper. DE3 is invoked by the runner, not by IE. Clean split throughout.
- *Collision:* SURVIVE.
- **Verdict:** SURVIVE.

### 3. Gate-tier separation (D5 resolution check)

- *Prosecution:* does the design's TEXT actually maintain separation, or could a reader conflate the two FLAGs?
- *Defense:* three pieces independently state the separation:
  - DE2 Step 6: *"The reference-authority FLAG is a **separate halt-tier** from IE's fidelity FLAG — it does NOT count toward IE's one-bounce budget."*
  - DE3 Step 4: *"The reference-authority FLAG is a separate halt-tier from any framing-fidelity FLAG produced upstream — a reference-authority FLAG does NOT count toward any bounce-budget held by the framing-producer."*
  - DE4 §4 + §9: §4 says "(separate halt-tier; does NOT count toward IE's bounce budget)"; §9 includes "Gate-tier-conflation" as a named failure mode.
- *Collision:* SURVIVE — three independent statements + a named failure-mode = robust against future drift.
- **Verdict:** SURVIVE.

### 4. Cross-runner generalization (DE4 worked-example bake-in check)

- *Prosecution:* does §6 (MVLw worked example) accidentally bake-in MVLw specifics that another runner can't peel off?
- *Defense:* §6 is explicitly labeled "Worked Example: MVLw Instantiation"; §1-§5 are runner-agnostic; §7 says "the specifics of each runner's existing pipeline determine where the new code lives."
- *Counter-prosecution (subtler):* §6's text reads *"Runtime ordering: Step 0 (IE invoke) → Step 5 fidelity gate → Step 6 reference-authority pre-flight → Step 7 encode → Step 8 spawn_set wrapper → Step 9 begin loop"* — uses MVLw's renumbered steps. A reader who doesn't know that the numbers are MVLw-specific might think the steps are part of the contract.
- *Collision:* SURVIVE — with **R-2**: in DE4 §6, clarify that the step-numbers are MVLw's renumbering; the contract is the **ordering** (IE invoke → fidelity gate → reference-authority pre-flight → encode → spawn → loop), not the specific numerical labels. Add: *"another runner with a different existing pipeline would integrate at different step-numbers but preserve the ordering."*
- **Verdict:** SURVIVE + REFINE (R-2).

### 5. Asymmetric-failure honored

- *Prosecution:* does the gate ever auto-proceed on FLAG?
- *Defense:* DE2 gate algorithm halts on FLAG after the one bounce; DE3 separate-tier halts on FLAG immediately. User override is the explicit escape hatch (named in both pieces). Halt-by-default.
- *Collision:* SURVIVE.
- **Verdict:** SURVIVE.

### 6. Migration completeness check

- *Prosecution:* template-thinning narrative in DE1.b — does it leave anything dangling or conflated?
- *Defense (then close inspection):* DE1.b's "What's gone (migrated INTO /inquiry-elaboration)" list reads: *"the previous Question (5 meta-aspects), Goal, Source Input, Scope Check, Step 3.5 transcription-audit, Step 3.6 reference-authority-audit."* This conflates two destinations:
  - **Migrated INTO IE** (5 items): Question (5 meta-aspects), Goal, Source Input, Scope Check, Step 3.5 transcription-audit
  - **Moved to its own runner-side protocol** (1 item): Step 3.6 reference-authority-audit → `reference_authority_check.md`
- *Collision:* SURVIVE — with **R-3**: in DE1.b, split the "What's gone" list into two sub-bullets:
  - "Migrated INTO /inquiry-elaboration (now done inside IE): Question (5 meta-aspects), Goal, Source Input, Scope Check, Step 3.5 transcription-audit."
  - "Moved to a separate runner-side protocol: Step 3.6 reference-authority-audit → `cognitive_harness/protocols/reference_authority_check.md`."
- **Verdict:** SURVIVE + REFINE (R-3).

### 7. Consistency with the 11-27 schema — input echoes

- *Prosecution:* does DE1.b's `## Elaborated Inquiry` section template match 11-27's §5 schema?
- *Defense:* checking — 11-27's schema has `project_goal: (echo)` + `original_query: (echo)` + `recent_context: (echo)` at the top of `elaborated_inquiry`. DE1.b's `## Elaborated Inquiry` section template has Question / Goal / Scope / Rephrasings / Requests but does **NOT** include the three input echoes. **Missing fields.**
- *Why it matters:* downstream consumers (the loop disciplines) read `_branch.md` for the framing including the inputs. The echoes serve as the canonical record. Dropping them creates a regression vs the 11-27 schema.
- *Collision:* SURVIVE — with **R-4**: in DE1.b, add a sub-section `### Inputs (echo)` at the top of `## Elaborated Inquiry` containing `project_goal`, `original_query`, `recent_context` (each either echoed or `(anchor not supplied)`). Match 11-27's schema exactly.
- **Verdict:** SURVIVE + REFINE (R-4).

### 8. Source-input preservation — placement subtlety

- *Prosecution:* DE1.b's `## IE Verdicts` section has a `source_input_preserved` field. But if R-4 is applied, `original_query` is already echoed in `## Elaborated Inquiry`. Duplicated.
- *Defense:* the `source_input_preserved` field as I wrote it was meant to surface IE's verify-axis-(ii) result — but in the actual 11-27 schema, the original_query echo IS the preservation; the verify-axis is the check (faithfulness-of-framing-vs-input), not a separate preservation.
- *Collision:* SURVIVE — with **R-5**: in DE1.b, **drop the `source_input_preserved` field from `## IE Verdicts`**. The original_query echo in `## Elaborated Inquiry` (added by R-4) is the canonical preservation. `## IE Verdicts` keeps only `request_structure_verdict`, `fidelity_verdict{status, per-axis-notes}`, and `layer_hint?`.
- **Verdict:** SURVIVE + REFINE (R-5).

### 9. Authorability

- *Prosecution:* the design has 5 pieces with concrete text — can an author transcribe without re-deciding?
- *Defense:* yes. D0 is one paragraph; DE1 is a concrete diff against an existing file; DE2 is two new sections + pseudo-code algorithms; DE3 and DE4 are two complete protocol-file contents. Some pseudo-code in DE2 needs minor translation to MVLw's natural-language style; minor friction, not a re-decision.
- *Collision:* SURVIVE.

### 10. Sequential-chain deferral honesty + failure-mode coverage

- *Defense:* DE2 Step 8 and DE4 §3 both explicitly mark sequential-chain as deferred. DE3 §5 lists 3 failure modes; DE4 §9 lists 4 failure modes. DE1+DE2 are runner-spec edits (no own failure-modes section — they slot into MVLw/SKILL.md's existing structure).
- *Collision:* SURVIVE.

## Phase 3 — Verdicts

- **SURVIVE (the assembly + each individual piece):**
  - D0 contract anchor (with R-1 applied — explicit wiring-direction sentence)
  - DE1 MVLw template edits (with R-3 + R-4 + R-5 applied — split migration list; add input echoes; drop redundant source_input_preserved)
  - DE2 MVLw runtime behavior (clean as-is)
  - DE3 reference_authority_check.md protocol (clean as-is)
  - DE4 inquiry_elaboration_adoption.md protocol (with R-2 applied — clarify step-numbers are MVLw-specific)
- **REFINE (5 authoring-level refinements; apply at CONCLUDE-time):**
  - **R-1** — D0: add wiring-direction sentence ("this contract is referenced by runner-specs and runner-side protocols only; IE's own spec does not reference it"). Makes K8 invariant visible at the anchor.
  - **R-2** — DE4 §6: clarify that the step-numbers are MVLw's renumbering; the cross-runner contract is the **ordering** (IE invoke → fidelity gate → reference-authority pre-flight → encode → spawn → loop), not the specific numerical labels.
  - **R-3** — DE1.b: split the "What's gone (migrated)" list into two sub-bullets — "Migrated INTO IE" (5 items) and "Moved to a separate runner-side protocol" (1 item: Step 3.6 → reference_authority_check.md).
  - **R-4** — DE1.b: add an `### Inputs (echo)` sub-section at the top of `## Elaborated Inquiry` containing `project_goal`, `original_query`, `recent_context` (each echoed or `(anchor not supplied)`). Match 11-27's §5 schema exactly.
  - **R-5** — DE1.b: drop the `source_input_preserved` field from `## IE Verdicts` (the original_query echo added by R-4 is the canonical preservation; the verify-axis-(ii) checks faithfulness rather than preserving).
- **KILL:** none. The design's core (K8 invariant, perception/action split, gate-tier separation, cross-runner generalization, asymmetric-failure stance) all survived.

## Phase 3.5 — Assembly Check

The five pieces, with R-1 through R-5 applied at CONCLUDE-time authoring, compose into a coherent process-layer design that:
- preserves K8 (the wiring is one-way; runner-spec → IE; IE-spec doesn't name the runner);
- maintains perception/action split (IE perceives + emits verdicts; runner gates + spawns + encodes);
- enforces gate-tier separation (reference-authority FLAG ≠ IE-fidelity FLAG bounce budget; three independent statements + named failure-mode);
- generalizes cross-runner (DE4's §1-§5 are runner-agnostic; §6 worked example clearly marked; §7 adoption-note shows the mechanical path);
- honors asymmetric-failure (halt-by-default; one bounce; user override as escape hatch);
- migrates the runner's framing template cleanly (5 elements into IE; 1 element to the new pre-flight protocol; 4 elements stay; 2 new sections added);
- consistent with the 11-27 schema (with R-4 applied) and with 22-30's perception/action commitment;
- authorable (5 concrete text-artifacts ready for transcription).

Emergent value over individual pieces: the **API-gateway-middleware** unifying frame from innovation's Domain Transfer makes the design memorable and makes each NOT-list entry of IE non-arbitrary — every "out" is "business logic the gateway doesn't run." The assembly SURVIVES.

## Phase 4 — Coverage + Convergence Assessment

- All 10 dimensions evaluated (4 critical, 3 high, 3 medium).
- One clean SURVIVE on the assembly with 5 authoring-level REFINEs and 0 KILLs.
- The dead region (any sentence that ends up in IE's spec; any blurred perception/action; any gate-tier conflation; any MVLw-specific bake-in in the contract) is empty of survivors, as intended.
- **Convergence: TERMINATE.** The question (process-layer design for IE wiring into MVLw + cross-runner generalization) is answered.

## Coverage Map

| Dimension | Coverage | Notes |
|---|---|---|
| K8 self-containment invariant | **viable** | All pieces respect direction; R-1 strengthens visibility |
| Perception/action split | **viable** | Clean throughout |
| Gate-tier separation | **viable** | Three independent statements + named failure mode |
| Cross-runner generalization | **viable** | R-2 sharpens step-number clarity |
| Asymmetric-failure | **viable** | Halt-by-default; one bounce; user override |
| Migration completeness | **viable** | R-3 fixes the conflated list |
| 11-27 schema consistency | **viable** | R-4 adds the missing input echoes |
| Source-input placement | **viable** | R-5 removes the duplication |
| Authorability | **viable** | Concrete text per piece |
| Sequential-chain deferral + failure modes | **viable** | Explicit deferral; failure modes listed in DE3/DE4 |

## Signal

**TERMINATE — clean SURVIVE on the assembly. Five authoring REFINEs (R-1 through R-5) to apply at CONCLUDE-time.** The IE process-layer design is ready to be compiled into the finding.

## Convergence Telemetry

- **Dimension coverage:** 10/10 evaluated, including 4 critical project-risk dimensions (K8, perception/action split, gate-tier separation, cross-runner generalization).
- **Adversarial strength:** **STRONG** — R-3 caught a real textual bug (the migration list conflating two destinations); R-4 caught a missing schema-field set (input echoes); R-5 caught a real duplication (source_input_preserved redundant with the echoed original_query). These are not nitpicks — they affect what an author would transcribe.
- **Landscape stability:** **STABLE** — the structural verdict (5 pieces SURVIVE; 0 KILL) doesn't change; the REFINEs are all wording-level / field-level.
- **Clean SURVIVE exists:** **YES** — the assembly survives all 10 dimensions with no critical-dimension caveats.
- **Failure modes observed (per `references/td-critique.md` §7):** **none.**
  - Not wrong-dimensions (project-specific risk dimensions surfaced — K8, perception/action split, gate-tier separation, cross-runner generality).
  - Not rubber-stamping (R-3/R-4/R-5 are real findings from genuine prosecution).
  - Not nitpicking (no piece KILLed on minor issues; REFINEs target real authoring vulnerabilities).
  - Not dimension-blindness (cross-referenced with 11-27 schema, K8 invariant, 22-30 spawn commitment).
  - Not false convergence (clean SURVIVE on critical dimensions).
  - Not evaluation drift (dimensions + weights fixed in Phase 0).
  - Not self-reference collapse (this critique tested IE-process-design designed-by-same-paradigm; bias bound via artifact-grounded checks against the schema + K8 invariant).
- **Verdict:** **PROCEED** (apply R-1 through R-5 at CONCLUDE-time during finding compilation).
