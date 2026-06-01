## User Input

`devdocs/inquiries/2026-06-01_01-17__inquiry_elaboration_scope_and_coverage/_branch.md` (priors consumed: `surfacing.md`, `sensemaking.md`)

---

# Decomposition — Inquiry Elaboration Scope & Coverage

**Whole being decomposed:** "Specify IE's meaning-layer remit" = achieve + cover + not-cover, given SV6's request-vs-problem / perceive-vs-act boundary.

## Step 1 — Coupling Map (perceive topology)

Elements: {achieve(output), cover(in-scope phases), not-cover(borders), the request-vs-problem boundary, perceive-vs-act split, compose-don't-fuse upper bound, branch.md migration}.

Coupling perception (change-propagation):
- The **boundary criterion** (request-vs-problem + perceive-vs-act) is the *highest-coupling node* — change it and achieve, cover, AND not-cover all move. → it is **not a sibling piece; it is the shared contract/interface** all pieces consume (and the runtime determination mechanism for "in or out").
- **cover ↔ achieve** — strongly coupled (the output IS the product of the in-scope phases; defining one constrains the other). → adjacent pieces with a bidirectional interface, not separable into unrelated work.
- **not-cover** depends on **cover** (each border = "this is a neighbor's verb on the problem, not IE's verb on the request"). → directional dependency cover → not-cover.
- **compose-don't-fuse upper bound** constrains **cover** only (caps how big the phase-set can get before IE becomes a mini-runner). → a constraint attached to cover.
- **migration (from branch.md)** is *derived* from cover+not-cover and is mostly **structural-layer (deferred)**. → a downstream, low-coupling boundary piece.

Clusters → pieces: one **contract** (C*), two tightly-coupled core pieces (**Q1 achieve ↔ Q2 cover**), one dependent piece (**Q3 not-cover**), one constraint on Q2 (**Q2a**), one deferred derived piece (**Q5 migration**).

## Step 2–4 — Question Tree (pieces as questions + verification criteria)

**C* — The boundary contract (shared interface + the in/out determination mechanism).**
Question: *By what test is any candidate sub-job ruled in or out of IE?*
Answer it fixes: **(i) object test** — does the sub-job operate on the **request/inquiry-framing** (in) or on the **problem/solution content** (out)? **(ii) mode test** — does it **perceive/emit** (in) or **act on the output** — spawn/encode/gate (out, = runner)?
Verification: [ ] both tests stated as yes/no; [ ] applying them to a worked candidate (e.g., "split bundled requests" → request-object + perceive → IN; "partition the problem" → problem-object → OUT) gives the SV6 verdict; [ ] the test is what every other piece cites.

**Q1 — ACHIEVE (characteristic output + success condition).**
Question: *What does IE produce, and when has it succeeded?*
Verification: [ ] output named = elaborated-inquiry spec + request-structure verdict (single / N-parallel / N-sequential + order); [ ] success condition stated = framing faithfully matches comprehended intent AND bundling resolved; [ ] output is distinct from every neighbor's transform (not a problem model, not a question-tree-of-the-problem, not candidates/verdicts).

**Q2 — COVER (in-scope phases; object = the request).**
Question: *What are IE's in-scope phases?*
Verification: [ ] three phases named with request-object + I/O — (1) comprehend-the-request multilayer, (2) perceive-request-structure, (3) verify-framing-fidelity (3 axes: internal-consistency / user-faithfulness / external-validity); [ ] phases are **coupled toward Q1's output** (each later phase consumes the comprehension); [ ] each phase carries a depth-limit (esp. phase 1 = "enough to frame faithfully," not a problem model).

**Q2a — UPPER BOUND (the compose-don't-fuse constraint on Q2).**
Question: *What keeps the cover-set from making IE a mini-runner?*
Verification: [ ] stated as a test — each in-scope phase is a *tailored, coupled* phase, NOT a thin wrapper that re-invokes `/decompose` or `/td-critique` wholesale; [ ] if a phase can only be realized by full re-invocation of a neighbor discipline, it is flagged as tipping IE toward orchestration (revisit).

**Q3 — NOT-COVER (borders; each attributed).**
Question: *What is out, and to whom does it belong?*
Verification: [ ] one border per neighbor — sense-making (understand/stabilize the problem), decompose (partition the problem into pieces+interfaces), surfacing (draw items), innovate (generate candidates), td-critique (judge candidates); [ ] plus the runner/`branch_inquiry` border (spawn / create folders / gate / encode into `_branch.md`); [ ] plus meta-routing (Layer Commitment, Synthesis-Trigger→CONCLUDE); [ ] each border justified by C*'s object-or-mode test (not by assertion).

**Q5 — MIGRATION (derived; mostly deferred to structural).**
Question: *Which of branch.md's current sections move into IE vs stay with the runner?*
Verification: [ ] meaning-layer **principle** stated (comprehension+fidelity → IN: 5-meta-aspects, Source-Input, Scope-Check, Step 3.5, Step 3.6; orchestration → STAYS: spawn, Synthesis-Trigger, Layer-Commitment); [ ] exact section-by-section list explicitly DEFERRED to structural design (not resolved here).

## Step 5 — Interface Map

| From → To | What flows | Direction |
|---|---|---|
| C* → Q1, Q2, Q3, Q5 | the in/out determination test (object + mode) | one-way (all cite C*) |
| Q2 ↔ Q1 | phases produce the output; output defines what phases must deliver | bidirectional |
| Q2 → Q3 | each in-scope phase's complement names a border | one-way |
| Q2a → Q2 | upper-bound constraint caps the phase-set | one-way (constraint) |
| Q2 + Q3 → Q5 | migration = in-scope items currently in branch.md, minus orchestration that stays | one-way (derived) |

Hidden-coupling check (assumptions, not just data): Q2 and Q3 share the unstated assumption that "comprehend the request" has a *depth limit* — without it, phase 1 silently slides into problem-modeling (sense-making's territory), collapsing the Q2/Q3 border. → made explicit as Q2's depth-limit criterion and F5.

## Step 6 — Dependency Order

1. **C*** (contract) — first; everything cites it.
2. **Q1 ↔ Q2** (achieve ↔ cover) — the coupled core; answer together.
3. **Q2a** — alongside Q2 (constrains it).
4. **Q3** (not-cover) — after Q2 (borders are complements of cover).
5. **Q5** (migration) — last; derived; meaning-layer principle only, rest deferred.

Parallelizable: none cleanly — the chain C* → (Q1,Q2,Q2a) → Q3 → Q5 is mostly sequential because each consumes the prior. (Q1 and Q2 are the one genuinely-joint node.)

## Step 7 — Self-Evaluation

| Dimension | Check | Verdict |
|---|---|---|
| **Independence** | Each piece answerable given C* + its declared inputs? | PASS — the only tight coupling (Q1↔Q2) is handled by treating them as one joint node, not two pretend-independent pieces. |
| **Completeness** | Pieces cover the user's 3 questions + the two load-bearing residuals? | PASS — achieve(Q1) / cover(Q2) / not-cover(Q3) = the 3 asks; Q2a = compose-don't-fuse residual; Q5 = migration residual; C* = the spine. |
| **Reassembly** | Pieces + interfaces reconstruct "IE's remit"? | PASS — C* (how to decide) + Q1 (output) + Q2/Q2a (in, bounded) + Q3 (out, attributed) + Q5 (what moves) = the full remit. |

**Determination-mechanism piece check (refinement):** the remit's use depends on a runtime determination ("is candidate X in-scope?"). The Q-tree includes a piece for HOW that determination is made — **C*** (the object + mode test). Reassembly does not presuppose the determination without providing it. ✓

**Balance:** Q2/Q3 carry most of the weight (expected — they ARE cover/not-cover); Q5 is deliberately light (deferred). Acceptable; not the imbalanced-decomposition failure (the heavy pieces are the point, not an un-partitioned lump).

**Frontier carried for Innovation/Critique:** C* must be made *operational* (a crisp 2-question test), because Innovation will pressure-test borderline candidates (e.g., "comprehend enough to frame" vs problem-modeling — F5; "perceive request-structure" vs `/decompose` — F3; "verify fidelity" vs `/td-critique` — F2) against exactly that test.
