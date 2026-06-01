## User Input

`devdocs/inquiries/2026-06-01_01-37__inquiry_elaboration_structural_design/_branch.md` (priors consumed: `surfacing.md`, `sensemaking.md`)

---

# Decomposition — Inquiry Elaboration Structural Design

**Whole being decomposed:** IE's structural design = the spec file (5 sections) + the output schema + the migration table, per SV6.

## Step 1 — Coupling Map

Elements: {§1 Identity, §2 Components, §3 Process Model, §4 Quality, §5 Output schema, migration table}.

Coupling perception:
- **§1 Identity** (verb-meaning + decision rule + NOT-list + vocabulary) is the **highest-coupling node** — every other section cites the decision rule and/or the NOT-list. → it is both the **first deliverable section AND the shared contract** the rest consume.
- **§2 Components ↔ §3 Process** — tightly coupled (Components *names* the three phases; Process *orders* them + the bounce). → adjacent pieces, strong interface; kept separate only because the anatomy template separates them.
- **§2 → §5 Output** — the phases *produce* the output; the output schema is their product. → directional.
- **§4 Quality** depends on §1 (NOT-list → LAYER-2 border-crossing failures) + §2 (phases → LAYER-1 operational failures). → derived from both.
- **migration table** depends on §2 (cover-phases = what migrates IN) + §1 NOT-list (runner border = what STAYS). → derived.

Clusters → pieces: **D1 Identity (contract)**, the coupled core **D2 Components + D3 Process**, the product **D5 Output schema**, the derived **D4 Quality** and **D6 Migration table**.

## Step 2–4 — Question Tree (pieces + verification criteria)

**D1 — §1 Identity (the contract + first section).**
Question: *What is IE's verb-meaning, decision rule, NOT-list, vocabulary, taxonomy placement, self-containment statement?*
Verification: [ ] verb-meaning one sentence (comprehend a raw request → loop-ready fidelity-verified inquiry); [ ] decision rule stated (object: request-not-problem; mode: perceive-not-act); [ ] 7-border NOT-list, each grounded in object-or-mode (not by assertion); [ ] vocabulary defined (request / framing / elaborated-inquiry spec / request-structure verdict / fidelity verdict); [ ] taxonomy placement (Upstream/front-of-loop); [ ] self-containment property stated; [ ] no outbound pointers to design-history.

**D2 — §2 Components (+ primitive profile).**
Question: *What are IE's named internal parts?*
Verification: [ ] three phases as components, each labelled **tailored + "does not invoke the neighbor discipline"** (comprehend-&-articulate / perceive-request-structure / verify-framing-fidelity[3 axes]); [ ] the **request-structure verdict** typed vocabulary (single / parallel-set / sequential-chain + order); [ ] the **depth-limit** (R1) as a property of phase 1; [ ] perceive-structure marked **request-signal-based** (R2); [ ] verify marked **fixed-criteria gate, not a landscape** (R3); [ ] a **primitive profile** per phase (G7), consistent with the taxonomy primitive table.

**D3 — §3 Process Model (internal only).**
Question: *In what order do the phases run, and what are the stop-rule and the bounce?*
Verification: [ ] order = comprehend → perceive-structure → verify; [ ] the **depth-limit stop-rule** (R1) specified operationally (stop when the 5 meta-aspects are fixed + fidelity-checkable); [ ] at most one **verify→comprehend bounce** (G5); [ ] explicitly NOT runner pipeline/spawn (internal phases only).

**D4 — §4 Quality (failure modes + coverage + self-assessment).**
Question: *How does the spec police itself?*
Verification: [ ] LAYER-1 operational failures (e.g., missed-bundle / over-or-under-framing / weak-fidelity) with recognition+corrective; [ ] **LAYER-2 identity failures** = problem-modeling (→sense-making) · **wrapper-fusion (→mini-runner; the upper-bound guard)** · acting (→runner); [ ] asymmetric-failure stance (misframing-reaching-the-loop > over-careful-framing); [ ] coverage criteria + self-assessment verdict (PROCEED/FLAG/RE-RUN).

**D5 — §5 Output schema (G6).**
Question: *What exactly does IE emit?*
Verification: [ ] **(a) substantive** elaborated-inquiry spec — field list (the 5 meta-aspects + goal + scope); [ ] **(b) thin verdict header** — request-structure verdict + fidelity verdict (the runner-actionable part), with R4 (source-input preserved inside the fidelity/faithfulness field, not a lost section); [ ] light **Progression** {intent → draft → verified} (G5); [ ] Telemetry + Frontier layers (per output anatomy).

**D6 — Migration table (G3).**
Question: *Which `branch.md` elements become IE elements vs stay runner-side?*
Verification: [ ] every Step-3 element verdicted — Question/5-meta-aspects, Goal, Source Input, Scope Check, Layer Commitment, Synthesis Trigger — plus Step 3.5 (transcription) + Step 3.6 (reference-authority); [ ] each verdict = {into IE: which Component/output-field | stays runner: why} justified by D1's decision rule; [ ] the net "branch.md thins to encoding+orchestration" stated.

## Step 5 — Interface Map

| From → To | What flows | Direction |
|---|---|---|
| D1 → D2,D3,D4,D5,D6 | the decision rule + NOT-list (the contract) | one-way |
| D2 → D3 | the three phases (to be ordered) | one-way |
| D2 → D5 | the phases (whose product is the output) | one-way |
| D2 → D4 | the phases (whose mis-operation = LAYER-1 failures) | one-way |
| D1.NOT-list → D4 | the borders (whose crossing = LAYER-2 failures) | one-way |
| D2 + D1.NOT-list → D6 | cover→migrate-in; runner-border→stays | one-way (derived) |

Hidden-coupling check: D2 and D5 share the unstated assumption that the **request-structure verdict** is *both* a Component output (D2) *and* a header field (D5) — if named differently in the two sections the spec contradicts itself. → make it one named vocabulary item defined in D1, referenced by both.

## Step 6 — Dependency Order
1. **D1** (Identity/contract).
2. **D2 → D3** (Components then Process; the coupled core).
3. **D5** (Output schema; product of D2).
4. **D4** (Quality; from D1 NOT-list + D2 phases).
5. **D6** (Migration table; derived from D2 + D1).

## Step 7 — Self-Evaluation

| Dimension | Check | Verdict |
|---|---|---|
| **Independence** | Each section authorable given D1 + its declared inputs? | PASS — only D2↔D3 is tight; handled by ordering D2 then D3 with the phase-list as the interface. |
| **Completeness** | Pieces cover the structural deliverable? | PASS — 5 spec sections (D1–D5) + the 2 tables (output schema in D5; migration in D6) = the whole "how should it be structurally." |
| **Reassembly** | Pieces + interfaces = the structural design? | PASS — D1 contract + D2/D3 phases-and-order + D5 output + D4 self-policing + D6 migration = a spec an author could write. |

**Determination-mechanism check:** two runtime determinations exist — "is this branch.md element migrated in?" (D6) and "is a proposed phase tailored or a wrapper?" (D4). The Q-tree provides their mechanisms: D1's decision rule (for D6) and D4's LAYER-2 wrapper-fusion test (for the phase check). Reassembly does not presuppose either determination without providing it. ✓

**Balance:** D2 + D5 carry the most content (the phases + the output schema — the substance); D1 medium; D3/D4/D6 lighter/derived. Acceptable.

**Frontier for Innovation/Critique:** the two tables (D5 output schema; D6 migration) are where Innovation must produce concrete content and Critique must pressure-test (does any migration verdict or output field violate D1's decision rule or the upper bound?).
