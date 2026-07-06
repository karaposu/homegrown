# Critique — The Between-Loops Fork-Recall Operation (Placement + Mechanism)

## User Input

Adversarially test the six finding pieces + the four emergents (consuming _branch / surfacing / sensemaking / decomposition / innovation). Sharpest tests: (a) is the two-halves shape real or over-elaboration?; (b) does the AMORTIZATION claim actually hold — is matching-against-the-past cheap just because the current traverse is warm?; (c) the SEED-2 resolution — answer or dodge?; (d) the CONNECT emergent — new function, or a rename of the existing refines/supersedes lineage links?; (e) non-sycophancy BOTH directions on structural grounds; (f) is "thin write-half" achievable, or does surfacing-similar-past inherently need judgment?; (g) scope-discipline (PROCESS not Structural; CONNECT ≠ spec-slot; actionable). Render SURVIVE/REFINE/KILL.

---

## Phase 0 — Dimensions (weighted)

| # | Dimension | Weight | Why |
|---|---|---|---|
| D1 | **Design soundness** — the mechanism actually works | HIGH | it's a design inquiry; the write/read/append machinery must hold |
| D2 | **Efficiency-claim validity** — amortization is real, not assumed | HIGH | the whole migration rests on warm-write < cold-recompute |
| D3 | **Non-sycophancy** — correct AND affirm on structural grounds | HIGH | the user floated several options; the verdicts must be earned |
| D4 | **Conceptual precision** — CONNECT vs lineage; thin vs judgment | HIGH | where the new claims could be loose |
| D5 | **SEED-2 faithfulness** — answers the seed, not redefines it away | MED | the seed set a decidability the finding must engage |
| D6 | **Inherited-faithfulness** — priors preserved | MED | Synthesis Trigger named 4 priors |
| D7 | **Scope-discipline** — PROCESS layer; CONNECT ≠ spec-slot; routed | MED | the Layer Commitment bounds this run |

---

## Phase 1 — Fitness Landscape

- **Viable:** the two centers (Q2 write-half, Q3 append-forward) and the SEED-2 resolution (Q4) — the design's spine.
- **Boundary (strong ideas needing a cut):** the amortization claim (Q2/E2 — its "warm" premise is looser than stated); the CONNECT emergent (Q6/E1 — risks colliding with existing lineage links); the "thin" refinement (Q2/E3 — "no judgment" overclaims).
- **Dead:** mutate-old (killed in innovation, not revived); the collapse reading (killed in sensemaking).
- **Unexplored (pre-critique):** whether "warm at traverse-end" actually covers the *past-match* cost, or only the *self-characterization* cost.

## Phase 2-3 — Adversarial Evaluation + Verdicts

### Q2 / E2 — the amortization claim — the sharpest — REFINE (R1)
**Prosecution (D2):** the write-half is sold as cheap because "context is warm at traverse-end." But the write-half must surface *which past traverses this one connects to* — a match against the past corpus/index, which is NOT warm just because the current traverse's own content is. The efficiency claim conflates two costs: characterizing THIS traverse (warm, cheap) and matching it against ALL past (a surfacing pass, not free).
**Defense + collision → REFINE:** the migration is still net-cheaper, but for a more precise reason than "it's warm." What's warm is the current traverse's **self-characterization** (what it's about) — cheap now, expensive to reconstruct cold later. The match against the past is a real surfacing pass, but it is **incremental and one-sided** (this one traverse against the index), whereas the navigation session recomputing the whole graph cold is **quadratic-ish** (all traverses against all). So the amortization is: *pay a warm, incremental one-vs-index cost per traverse, instead of a cold, all-vs-all recompute in navigation.* → **R1: tighten the amortization claim to this two-part form (warm self-characterization + incremental one-vs-index match), rather than implying the write-half is nearly free.** Fold into Q2.

### Q6 / E1 — the CONNECT emergent vs existing lineage links — REFINE (R2)
**Prosecution (D4):** the record ALREADY has relationship links (refines / supersedes / CONTINUES-FROM / RELATED, authored in `_state.md`). Isn't "connect" just those? Then CONNECT is a rename, not a third function.
**Defense + collision → REFINE:** the existing links are **lineage** — authored at inquiry creation, encoding parent/child (this refines that; this continues from that). The CONNECT function the write-half produces is **post-hoc relevance/similarity** — surfaced after a traverse finishes, linking to *unrelated* past traverses whose paths resemble this one's ("your direction here resembles what that other line explored," with no lineage relation). That is a genuinely different edge type: lineage is declared and genealogical; CONNECT is discovered and associative. → **R2: distinguish CONNECT (discovered, associative, post-hoc similarity edges) from the existing lineage edges (declared, genealogical, authored-at-creation) — else the third function reads as a rename.** Fold into Q6.

### Q2 / E3 — the "thin" write-half — REFINE (R3)
**Prosecution (D4):** deciding "which past traverses does this resemble" IS a judgment (similarity isn't mechanical). So "thin, no judgment" overclaims — the write-half uses judgment.
**Defense + collision → REFINE:** the load-bearing distinction is not judgment vs no-judgment; it's **local-relevance judgment** (is this past traverse relevant to mine? — a bounded surfacing pass) vs **global-steering judgment** (where should the whole system go next? — the navigation session's job). The write-half uses the former and must never do the latter. → **R3: recharacterize "thin" as "local-relevance judgment only, never global steering" — a bounded surfacing pass, not zero judgment.** This keeps the maintainability answer intact (the complex *steering* logic stays central) while being honest that the write-half judges local relevance. Fold into Q2/Q5.

### Q3 — append-forward, mutate-old killed — SURVIVE
**Prosecution (D1/D3):** is the four-grounds kill of mutate-old rubber-stamped hostility to the user's idea?
**Defense:** the four grounds are independent and structural (buys-nothing is a reachability argument; append-only is the record-layer's own commitment; multihead-corruption is a concurrency fact under the stated architecture; the engineering anti-pattern is external corroboration). None is aesthetic. The correction is earned. **SURVIVES** — and it is the model of the non-sycophancy the inquiry needed (D3): the user's "update old routelisters??" is engaged specifically and defeated on grounds, not dismissed.

### Q4 — the SEED-2 resolution — SURVIVE (with a wording note)
**Prosecution (D5):** does "the third shape is write/read" answer the seed's decidability, or change the question to dodge it?
**Defense:** it answers both horns — the read-half IS the topic-read (horn 1, confirmed) — while showing the seed's binary was ill-posed because the operation was two operations, and the genuinely-missing piece (the write-half) sat at neither horn (post-loop, not the pre-articulation protocol horn 2 imagined). That is a dissolution-plus-answer, legitimate. **SURVIVES** — wording note: state it as *reshaping* the seed's question (finding the write/read axis it lacked), not as having "solved" a puzzle the seed posed, so it reads as faithful engagement rather than a victory lap.

### Q1 — the two-halves shape — SURVIVE
**Prosecution (D1):** over-elaboration — one "surface past paths" op would do.
**Defense:** write (durable, persisted, consumed cold by others) and read (into attention, now, for this composition) differ in product and consumer; collapsing them is what left the operation homeless (the read had nothing explicit to read). **SURVIVES** — the distinction is the finding's spine and is made concrete (different product, different consumer).

### E2 (amortization principle) / E4 (write-target) / D6 / D7 — SURVIVE (bounded)
- **E2 as a general principle** — "migrate thin-mechanical work consumed cold" — SURVIVES, already bounded (licenses thin work, not everything).
- **E4 write-target sub-option** (per-file vs shared index) — SURVIVES as surfaced-not-decided; correctly a follow-on.
- **D6 inherited** — fork-recall-home (sharpened), anastomosis (operationalized), over-integration-wrinkle (load-bearing), two-functions (extended), ant-trail (adopted): all re-tested, none overturned. SURVIVES.
- **D7 scope** — PROCESS layer held; the Structural schema write is correctly routed as a follow-on; CONNECT scoped to the record-layer, not the spec-slot. SURVIVES — provided Next Actions routes the schema write (verify in CONCLUDE).

---

## Phase 3.5 — Assembly Check

After the three refines the design coheres. R1 makes the efficiency claim honest (warm self-characterization + incremental one-vs-index, not "free"). R2 makes CONNECT a real third edge-type (associative, not genealogical). R3 makes "thin" precise (local-relevance, not zero-judgment). None of the three weakens the spine: the write-half still belongs in the loop (net-cheaper, R1), append-forward still beats mutate-old (Q3 untouched), and the read-half still homes to the topic-read (Q4 untouched). The non-sycophancy ledger stands.

## Phase 4 — Coverage Map + Convergence Telemetry

**Coverage:** all six pieces + four emergents across seven dimensions. D2 caught the amortization looseness (R1, the strongest catch — it protects the inquiry's central efficiency claim from overreach). D4 caught two precision gaps (R2 CONNECT-vs-lineage, R3 thin-vs-judgment). D3 confirmed the non-sycophancy holds both ways.

**Verdicts:** 0 KILL · 3 REFINE (R1 amortization-tightening → Q2; R2 CONNECT-vs-lineage → Q6; R3 thin-as-local-judgment → Q2/Q5) · SURVIVE (Q1, Q3, Q4, E2, E4, inherited, scope).

**Adversarial strength:** STRONG — R1 is a genuine defect in the load-bearing efficiency argument (the "warm" premise didn't cover the past-match cost); R2 prevents a rename masquerading as a discovery; both change claims, not wording.

**Landscape stability:** STABLE — no verdict flipped a piece to dead; mutate-old stays dead; refines are precision-cuts.

**Failure modes checked:** no rubber-stamping (R1/R2 are real catches on the finding's own new claims); no nitpicking (each refine changes a claim); no false convergence (the amortization now rests on a defended two-part cost model, not an assumed premise); no self-reference collapse (external anchors: the multihead-concurrency fact; the append-only-log engineering pattern; the existing lineage-link schema).

**Signal: TERMINATE with ranked survivors.**
1. Q2 — the write-half loop-step (amortization tightened, R1; thin = local-judgment, R3).
2. Q3 — append-forward, mutate-old killed on four grounds (the non-sycophantic correction).
3. Q4 — the read-half home + the SEED-2 write/read-axis resolution.
4. Q1 — the two-halves shape.
5. Q6 — the CONNECT emergent, distinguished from lineage (R2).
6. Q5 — the thin-loop / thick-navigation work-split.
7. E2/E4 — the amortization principle (bounded) + the write-target sub-option (follow-on).

**Convergence: PROCEED** to Routelister, then CONCLUDE. The three refines (R1, R2, R3) must be folded into the finding's prose.
