## User Input

`devdocs/inquiries/2026-06-01_01-17__inquiry_elaboration_scope_and_coverage/_branch.md` (priors consumed: `surfacing.md`, `sensemaking.md`, `decomposition.md`)

---

# Innovation — Inquiry Elaboration Scope & Coverage

## Seed
The decomposition piece-list (C* contract + Q1 achieve + Q2 cover + Q2a upper-bound + Q3 not-cover + Q5 migration). Goal: generate the concrete scope proposal and stress its borders.

**Methodology-mode consideration.** Inherited mode = **Standard default** (elaborate the committed arc into a scope spec). Alternative = **Contrarian-rethink** (re-open whether IE should hold this scope at all). What follows under the alternative: it would re-litigate the arc that 22-30 + sensemaking already committed — out of this run's remit — *except* at the meta-decision pieces, where contrarian pressure IS warranted. **Decision:** Standard default + piece-level **Inversion** on the C* commitments (object-test, mode-test). `Methodology-mode-alternative` partially absorbed via piece-level Inversion; full contrarian-rethink marked inapplicable (the arc is settled upstream).

## Generate (mechanisms)

**Absence Recognition (Generator) — both levels + bidirectional.**
- *Patch-level:* Is a phase missing? The comprehend phase must output the **articulated framing content** (not just internal understanding) — otherwise nothing is produced for the runner to encode. → sharpen Q2-phase-1 to "comprehend **and articulate** the framing (5 meta-aspects)."
- *Redesign-level (what's missing if built from scratch):* a clean **handoff bundle** between IE and the runner — `{framing-content, request-structure-verdict, fidelity-verdict}` — doesn't exist today (it's smeared across branch.md). Its *existence* is meaning-relevant: it's what makes "perceive (IE) vs act (runner)" a clean seam. (Exact schema = structural, deferred.)
- *Already-present-in-different-form:* IE is **not new capability** — branch.md Steps 3 / 3.5 / 3.6 already do this work implicitly and scattered. IE = **relocate + couple** existing work, not invent. (Confirms the rule-placement insight; lowers risk.)

**Inversion (Framer) — piece-level, on the meta-decision commitments, depth to system-level.**
- Invert *"object = request, not problem."* L1: "IE does a little problem understanding." L2 (system): two problem-modelers (IE + sense-making) ⇒ duplicate work + identity collapse of sense-making. → **inversion fails; request-only confirmed at system level.**
- Invert *"perceive, not act."* L1: "IE spawns the sub-inquiries." L2 (system): a thing that spawns/encodes/gates **is a runner** — the exact routeman role/operation fusion 22-30 warned against. → **fails; perceive-vs-act confirmed.**
- Invert *"verify is in-scope."* L1: "drop verify, let downstream catch misframing." L2: the user's headline pain is misframing **reaching the loop**; dropping verify reinstates that failure. → **fails; verify confirmed in-scope.** (Refined survivor: keep verify as ONE phase with 3 axes; don't over-split at the meaning layer.)
- Invert *"comprehend has a depth-limit."* L1: "comprehend as deeply as possible." L2: unbounded comprehension = problem-modeling = sense-making duplication. → **fails; depth-limit confirmed** (operational form: comprehend until the 5 meta-aspects are fixed + fidelity-checkable; stop before a problem model).

**Constraint Manipulation (Framer) — both directions (mandatory).**
- *ADD "IE must be runnable standalone (not only inside MVLw)":* then cover can't depend on loop state → cover = a pure **request→framing** function. Strengthens self-containment; confirms object = request with no loop-state dependency.
- *REMOVE "IE must split bundled requests":* IE shrinks to comprehend+verify (a fidelity front-door). Rejected — the user explicitly named bundled-requests as a pain; removing the split drops a user-anchored job. (REMOVE-direction exercised; candidate rejected with reason.)

**Domain Transfer (Generator) — native + far.**
- *Native (software): API gateway / request validator.* Validates, normalizes, and routes an incoming request before the service runs; never executes business logic. Maps 1:1: IE = the gateway (verify fidelity, articulate framing, route the bundle); the S/D/I/C loop = the service. Border: a gateway never runs business logic ⇒ IE never models/partitions/solves.
- *Far (clinical): intake/triage* (the 22-30 analogue): history (comprehend) + triage to departments (perceive-structure) + chart-matches-complaint (verify) → intake record; scheduling = front desk (runner). Converges with the gateway transfer.

**Lens Shifting (Framer).** Under the **multi-head future** lens, perceive-structure's "parallel" verdict becomes high value (feeds parallel spawn); under **single-head now** it still orders sequential sub-inquiries. → scope is stable across the phase transition; only the payoff weighting shifts.

## Inherited Frame Audit
Seed's central assumption = "IE operates on the request and perceives-not-acts." Was it explicitly challenged in the candidate set? **YES** — Inversion drove both object-test and mode-test to system-level and they survived. **Audit does NOT fire.** (No un-challenged inherited frame.)

## Test (5-test survival per assembled candidate)

| Candidate | Novelty | Scrutiny-survival | Fertility | Actionability | Mechanism-independence | Disposition |
|---|---|---|---|---|---|---|
| **C\*** = 2-question in/out test (object: request vs problem; mode: perceive vs act) | repackages SV6 sharply | survived both inversions | yes — decides every borderline case | yes — applicable to a concrete sub-job | Inversion + Domain-Transfer + Decomposition converge | **ACTIONABLE** |
| **ACHIEVE** = elaborated-inquiry spec + request-structure verdict + fidelity verdict, emitted as a perception bundle | low (names existing implicit output) | survives ("not a problem model / not candidates") | yes — gives the runner a clean handoff | yes | Absence-Recognition + Gateway converge | **ACTIONABLE** |
| **COVER** = 3 coupled tailored phases (comprehend+articulate / perceive-structure / verify-fidelity) | moderate | survives upper-bound (Q2a) + depth-limit | yes | yes | Inversion + Constraint + Gateway converge | **ACTIONABLE** |
| **NOT-COVER** = 7 borders, each a C\* failure | low | survives (each border attributed) | yes | yes | Domain-Transfer + Decomposition converge | **ACTIONABLE** |
| **Verify = one phase, 3 axes** (don't split) | — | survives over-split inversion | medium | yes | Inversion (refined survivor) | **ACTIONABLE** |
| **Exact branch.md migration list** | — | thin (structural) | yes | not yet | single-source | **DEFERRED** → trigger: structural design |
| **Does verify need a genuinely-new check (F2)?** | — | unresolved | yes | not yet | single-source | **DEFERRED** → trigger: structural verify-step design |
| **Comprehend depth-limit needs an explicit stop-rule (F5)** | — | survives | yes | partial | Inversion | **RE-TEST TRIGGER** → critique must check the Q2/Q3 border holds operationally |

## Assembly Check — the IE Scope Spec (emergent whole)

Combining the survivors yields one model that none of the pieces give alone: **IE is the request-gateway in front of the reasoning service.** That single image makes C\* memorable and the NOT-list non-arbitrary — every "out" is "business logic the gateway doesn't run."

- **C\* (determination):** in iff (object = the request/framing) AND (mode = perceive/emit). Out if it touches the problem's content, or if it acts on the output (spawn/encode/gate).
- **ACHIEVE:** an elaborated-inquiry spec (articulated framing: the 5 meta-aspects + goal + scope) + a request-structure verdict (single / N-parallel / N-sequential + order) + a fidelity verdict — emitted as a perception bundle for the runner.
- **COVER (3 coupled tailored phases, object = request):** (1) comprehend-and-articulate the framing, depth-limited to "enough to frame faithfully"; (2) perceive request-structure; (3) verify framing-fidelity across 3 axes (internal-consistency / user-faithfulness incl. transcription / external-validity of cited references).
- **UPPER BOUND:** phases are tailored + coupled, never thin wrappers over `/decompose` or `/td-critique` (else IE = mini-runner).
- **NOT-COVER (7 borders):** problem-understanding→sense-making · problem-partition→decompose · item-draw→surfacing · candidate-generation→innovate · candidate-judgement→td-critique · spawn/encode/gate→runner+branch_inquiry · meta-routing(Layer-Commitment, Synthesis-Trigger→CONCLUDE)→runner.
- **MIGRATION principle:** comprehension+fidelity move IN (5-meta-aspects, Source-Input, Scope-Check, Step 3.5, Step 3.6); orchestration STAYS (spawn, Synthesis-Trigger, Layer-Commitment); exact list deferred to structural.

## Frontier
- F2 (verify: new check vs generic fidelity) — DEFERRED to structural.
- F3 (perceive-structure tailored-phase vs `/decompose`-wrapper) — Critique to pressure-test against C\*.
- F4 (exact migration list) — DEFERRED to structural.
- F5 (comprehend depth-limit stop-rule) — RE-TEST TRIGGER for Critique: confirm the Q2/Q3 border is operational, not just asserted.
