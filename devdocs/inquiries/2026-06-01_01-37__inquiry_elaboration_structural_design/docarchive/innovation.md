## User Input

`devdocs/inquiries/2026-06-01_01-37__inquiry_elaboration_structural_design/_branch.md` (priors consumed: surfacing / sensemaking / decomposition)

---

# Innovation — Inquiry Elaboration Structural Design

## Seed
The decomposition piece-list (D1 Identity / D2 Components / D3 Process / D4 Quality / D5 Output-schema / D6 Migration-table). Goal: produce the concrete structural content per piece + stress it.

**Methodology-mode:** Standard default (instantiate the committed template) + piece-level Inversion on the meta-decision pieces (D1 decision rule, D2/D5 the output-and-verify shape). Full contrarian-rethink marked inapplicable (the template + scope are settled upstream).

## Generate (mechanisms)

**Domain Transfer (Generator) — native: the API gateway spec.** A gateway spec has: request **normalization** (= D2 comprehend), a **routing table** (= D2 perceive-structure verdict), **auth/validation rules** (= D2 verify), an explicit **"no business-logic handlers"** clause (= D1 NOT-list / D4 wrapper-fusion guard), and a **normalized-request output** passed to the service (= D5 substantive output + verdict header). The transfer confirms the section set and supplies the "no handlers" framing for the upper bound.

**Combination (Generator).** routeman's **per-field schema table** + sensemaking's **substantive transform** → IE's output = a field-table *over a substantive framing* + a thin verdict header. Neither sibling alone gives this; the combination does.

**Absence Recognition (Generator) — patch + redesign.** *Patch:* add a **Frontier** field to IE's output for genuine ambiguity IE *could not* collapse — so the runner/user can intervene *before* the loop spends a pass (currently nothing carries "I wasn't sure"). *Redesign:* the IE→runner **handoff bundle** is the contract that doesn't exist today; its *shape* (verdict header) is named here, its *wiring* deferred to process.

**Inversion (Framer) — piece-level, to system depth.**
- Invert *"output is substantive"* → thin-only. System: thin-only carries no framing → the loop has nothing to consume → **fails**; substantive confirmed.
- Invert *"verify is one fixed-criteria gate"* → a full fitness landscape. System: that IS `/td-critique` → wrapper-fusion → **fails**; fixed gate confirmed.
- Invert *"§3 Process Model is internal-only"* → include pipeline wiring. System: that's the process layer → scope-bleed → **fails**; internal-only confirmed.

**Constraint Manipulation (Framer) — both directions.** ADD "self-contained" → vocabulary defined in §1, zero outbound pointers (obeys the memory constraint). REMOVE "match the sibling shape" → a bespoke spec shape; **rejected** (reader + maintenance cost; breaks family consistency).

**Lens Shifting (Framer).** Under the **spec-author** lens, the deliverable must be copy-writable → produce a concrete skeleton, not abstract advice (done below).

## Inherited Frame Audit
Central assumption = "instantiate the sibling template." Challenged? YES — Constraint-REMOVE tried the bespoke-shape alternative and it was rejected on structural grounds. **Audit does not fire.**

## Test + Assembly — the concrete IE spec skeleton (the deliverable)

All survivors composed. This is the structural design an author could write from.

### D1 — §1 Identity
- **Verb-meaning:** *To elaborate an inquiry is to comprehend a raw request and shape it into a loop-ready, fidelity-verified inquiry framing — perceiving the request's intent, its structure, and its framing-fidelity — without acting on the result.*
- **Decision rule (membership test):** a job is IN iff it operates on the **request/framing** (object) AND it **perceives/emits** (mode). Out otherwise.
- **NOT-list (7, each grounded in object-or-mode):** problem-understanding→`/sense-making` · problem-partition→`/decompose` · item-draw→`/surfacing` · candidate-generation→`/innovate` · candidate-judgement→`/td-critique` · spawn/encode/gate→runner+`branch_inquiry` · meta-routing (Layer-Commitment; Synthesis-Trigger)→runner.
- **Vocabulary:** request · framing · elaborated-inquiry spec · request-structure verdict · fidelity verdict.
- **Taxonomy placement:** Upstream / front-of-loop (logically before surfacing; produces the framing whose purpose surfacing consumes).
- **Self-containment:** the spec references only its own inputs/unit/output/mechanism; no pointers to design-history.

### D2 — §2 Components (each tailored; **does not invoke the neighbor discipline**)
1. **Comprehend-&-Articulate** — read past imperfect phrasing to intent; emit the framing content (the 5 meta-aspects: subject/action/level/observation-targets/deliverable-shape + goal + scope). **Depth-limited** (R1). *Primitives:* Intuition-similarity + Context-framing + Working-Memory.
2. **Perceive-Request-Structure** — **request-signal-based** (R2): detect distinct asks + parallel/sequential + order; emit the **request-structure verdict** ∈ {`single` · `parallel-set{…}` · `sequential-chain[…]`}. *Primitives:* Salience + Attention-pointer + Intuition-similarity.
3. **Verify-Framing-Fidelity** — a **fixed-criteria gate** (R3), three axes: (i) internal-consistency (incl. Scope-Check: framing covers goal), (ii) user-faithfulness (transcription + **Source-Input preserved**, R4), (iii) external-validity of cited references; emit the **fidelity verdict** ∈ {`PASS` · `FLAG{axis,note}`}. *Primitives:* Evaluation + Inhibition + Metacognition.

### D3 — §3 Process Model (internal only)
- Order: **comprehend → perceive-structure → verify.**
- **Depth-limit stop-rule (R1):** stop comprehension when all 5 meta-aspects are fixed AND each is fidelity-checkable; never build a problem model.
- **One bounce (G5):** if verify FLAGs, return to comprehend ONCE with the flagged gap; if it still FLAGs, emit self-assessment FLAG/RE-RUN rather than loop.
- Explicitly excludes runner pipeline-placement and spawn (process layer).

### D4 — §4 Quality
- **LAYER-1 (operational):** *Missed-bundle* (distinct requests not detected) · *Over-framing* (built a problem model — depth-limit breach) · *Under-framing* (framing too thin to be loop-ready) · *Weak-fidelity* (verify passed a misframing). Each: recognition + corrective (re-run the relevant phase).
- **LAYER-2 (identity-eroding):** *Problem-modeling* → becomes sense-making · **_Wrapper-fusion_** → becomes a mini-runner (the upper-bound guard) · *Acting* → becomes the runner · *Position-coupling* → defining IE by pipeline position instead of object (the routelister Process-coupling analogue).
- **Asymmetric-failure:** a misframing that PASSES verify and reaches the loop is worse than an over-careful framing — bias verify toward FLAG under doubt.
- **Self-assessment:** PROCEED / FLAG / RE-RUN.

### D5 — §5 Output schema (G6)
- **(a) Substantive — the elaborated-inquiry spec:** `{ Question{subject,action,level,observation-targets[],deliverable-shape}, Goal, Scope }`.
- **(b) Thin verdict header (runner-actionable):** `{ request-structure-verdict, fidelity-verdict{status, per-axis-notes[]}, source-input-preserved }`.
- **Progression (light):** `comprehended-intent → drafted-framing → verified-framing` (+ the one bounce if it fired).
- **Telemetry:** meta-aspects fixed (5/5?); bundle count; fidelity axes checked/flagged; bounce fired?.
- **Frontier:** genuine ambiguity IE could not collapse (handed up for runner/user intervention before the loop runs).

### D6 — Migration table (G3 — the deferred-from-scope F4)
| `branch.md` element | Verdict | Home |
|---|---|---|
| Question / 5 meta-aspects | **INTO IE** | Component 1 (comprehend) → output (a) |
| Goal | **INTO IE** | Component 1 → output (a) |
| Source Input | **INTO IE** | Component 3 verify axis (ii); preserved in header (R4) |
| Scope Check | **INTO IE** | Component 3 verify axis (i) internal-consistency |
| Step 3.5 transcription audit | **INTO IE** | Component 3 verify axis (ii) |
| Step 3.6 reference-authority audit | **INTO IE** | Component 3 verify axis (iii) |
| request bundling (detect distinct asks) | **INTO IE (perceive)** | Component 2 → request-structure verdict |
| Layer Commitment | **STAYS runner** | meta-routing (which cognitive layer the inquiry targets) |
| Synthesis Trigger | **STAYS runner** | orchestration (drives CONCLUDE's inherited-commitments enforcement) |
| spawn of sub-inquiries | **STAYS runner** | act-mode (IE only perceives the split) |

**Net:** `branch.md` thins to *encode IE's framing output into `_branch.md`* + hold *Layer-Commitment* + *Synthesis-Trigger* + perform the *spawn*. Comprehension + all three fidelity audits leave it.

## Dispositions
- **ACTIONABLE:** the full skeleton above (D1–D6) — directly writable into `references/<name>.md`.
- **DEFERRED → structural-authoring step:** the finished prose of each section; exact primitive-profile atoms (G7, MED — align to the taxonomy table when written).
- **RE-TEST TRIGGER (for Critique):** the two **STAYS-runner** verdicts (Layer-Commitment, Synthesis-Trigger) — confirm they fail the object/mode test and aren't accidentally IE's; and confirm no output field re-imports a neighbor's transform.

## Frontier
- G7 — primitive-profile atoms per phase (align to the taxonomy primitive table at authoring).
- The §4 LAYER-1 list may grow as IE runs (operational failures are discovered empirically) — expected, not a gap.
