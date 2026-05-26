# Innovation — compare surfacing metadata runs (MVL+ vs MVL2+)

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-22_22-10__compare_surfacing_metadata_runs_mvl_plus_vs_mvl2_plus/_branch.md`

Prior outputs: exploration.md, sensemaking.md (SV6 locked: V2=B-better + V4 supporting; primary criterion = user-question-fidelity), decomposition.md (3 pieces P1/P2/P3; DAG P2→P1→P3; HC1+HC2 resolved).

---

## Seed / Preamble (Phase 1)

### Methodology-Mode Consideration (Phase 1 refinement note)

**Inherited mode:** **Standard default** — balanced 4G+3F coverage; elaborate the committed direction inherited from sensemaking SV6 + decomposition's piece-list; produce ship-ready content. Text signals: "produce concrete content for each piece," "innovate concrete content."

**Alternative mode considered:** **Contrarian-rethink (Framer-weighted).** Under this mode, Innovation would challenge whether the verdict (V2 B-better) is correct — Framer-heavy: deliberately invert sensemaking's commitments (e.g., re-read user's question as "completeness as primary criterion").

**Decision: USE INHERITED MODE.** Override of Contrarian-rethink alternative.

`Methodology-mode-alternative-marked-inapplicable: sensemaking SV6 explicitly adjudicated Ambiguity 1 (the verdict criterion is user-question-fidelity, anchored to "for given query") and Ambiguity 4 (the verdict is V2 B-better with V4 supporting) with HIGH confidence and structural grounds; re-running the Contrarian-rethink at innovation time would duplicate that adjudication and risk re-destabilizing the verdict. Piece-level Inversion at meta-decision pieces will still fire per the Phase 2 Generate refinement note — defense-in-depth on piece-specific commitments distinct from re-litigating the seed verdict.`

---

## Phase 2 — Generate (per piece)

### P1 — Verdict + Primary Reasoning + V4 Supporting

**Mechanisms applied:** Combination (synthesizing priors' commitments into one verdict statement), Constraint Manipulation (the user's singular "what kind of thing" phrasing as the binding constraint), Lens Shifting (the "for given query" anchor lens), Inversion (intervention-shape — property v fires).

**Properties firing:** (iv) evaluation-criterion (the verdict commits a criterion); (v) intervention-shape commitment (ADD-CONTENT — a verdict statement with prose reasoning).

**Principal candidate text:**

---

> **Verdict: Inquiry B (`devdocs/inquiries/2026-05-22_20-35__surfacing_file_metadata_awareness_design/`, run via `/MVL+`) did a better job for the user's given query than Inquiry A (`devdocs/inquiries/2026-05-22_16-00__surfacing_metadata_recency_signal/`, run via `/MVL2+`).**
>
> **Why (primary reasoning).** The user's verbatim query was *"what kind of thing we can add to surfacing discipline to enable this power without limiting it or regressing it?"* — singular phrasing requesting an addition, with two explicit guards (the recency-signal need; the "old ≠ idle" non-regression promise). In the comparison request, the user wrote *"compare them and tell me which one did a btter job **for given query**, and why?"* — the phrase "for given query" anchors the verdict to this stated need, not to abstract output-volume or process-rigor.
>
> Inquiry B's 3-surface spec edit (§1.3 NOT-list note + §2.1 paragraph with named-category framing + §5.4 schema row) matches the user's singular "what kind of thing" phrasing directly. Inquiry A's 7-surface spec edit (§1.3 NOT-list addition + §1.4 vocabulary row + §2.1 Step Refinement + §4.2 FM #8 + §4.2 FM #9 + §5.4 schema row + §5.5 State Summary derivation + §5.6 telemetry bullet) goes beyond the user's stated scope — adding vocabulary maintenance, telemetry, State Summary derivation, and explicit failure-mode catalog rows. The additional surfaces are real value but represent "more spec engineering done" rather than "better job at the user's actual question."
>
> Both inquiries address both user-stated failure modes (the recency-signal need and the "old ≠ idle" guard) with comparable structural rigor — a TIE on the user's primary safety criteria. The divergence point is the addition's SCOPE, where B's parsimony fits the user's singular phrasing.
>
> Additionally, B's naming (`last-edit-time`) aligns with the user's vocabulary ("last datetime of edit") more closely than A's signal-level coinage `recency annotation`.
>
> **V4 supporting characterization (different-strengths-different-jobs).** A and B did different jobs well. A produced more comprehensive spec engineering (vocabulary maintenance + telemetry + State Summary derivation + explicit failure-mode catalog entries); B produced a tighter, user-language-aligned, named-category-extensible addition. If the user's question had been *"give me a complete spec-engineering package for adding metadata to surfacing,"* A would have won. But the user's question is *"what kind of thing we can add"* — singular, modest — and B's parsimony fits that more directly. The verdict above is on user-question-fidelity FOR THE USER'S ACTUAL QUERY; A's strengths on dimensions A wins on (completeness, structural rigor across more surfaces, adversarial-test rigor, inquiry-template compliance) are real but secondary to the primary criterion.

---

**Inversion-candidate (Intervention-Shape-Axis Inversion at property-v piece):**

P1's intervention shape: **ADD-CONTENT** (verdict statement with prose reasoning).

*Alternative shape: REFRAME-AS-BUG.* What if the comparison itself is the wrong framing — should we say "neither inquiry is a regression; the user's question allows multiple right answers; verdict-rendering is the wrong intervention"?

*What follows under REFRAME-AS-BUG:* the deliverable shifts from "B is better" to "both are right answers to slightly different readings of the question — A reads it as 'give me the comprehensive spec edit'; B reads it as 'give me the minimal addition.' Both readings are defensible."

*5-test:*
- **Novelty:** YES, but reframes the user's question instead of answering it.
- **Scrutiny survival:** WEAK — the user explicitly asked *"tell me which one did a better job."* REFRAME-AS-BUG refuses to answer.
- **Fertility:** weak — no follow-up direction; just declares both valid.
- **Actionability:** NO — the user wanted a verdict, not a meta-comment on their question.
- **Mechanism independence:** only Inversion produces this; no convergent support.

**Verdict: Inversion REJECTED.** Principal ADD-CONTENT (verdict + reasoning) survives strongly.

---

### P2 — Per-Dimension Comparison Table

**Mechanisms applied:** Combination (12 dimensions × 2 inquiries × weights × citations), Domain Transfer (A/B precedent verdict-shape from `devdocs/inquiries/2026-05-14_16-41__ab_test_inquiry_protocol/`), Absence Recognition (what's missing per dimension in each prior), Inversion (intervention-shape).

**Property firing:** (iv) evaluation-criterion (the weighted dimensions ARE the evaluation framework).

**Principal candidate text** (the 12-row table with weights, per-inquiry positioning, citations, and reasoning):

---

| # | Dimension | Weight | Inquiry A (16-00 via `/MVL2+`) | Inquiry B (20-35 via `/MVL+`) | Verdict | Reasoning |
|---|---|---|---|---|---|---|
| **D1** | User-question-fidelity ("what kind of thing we can add") | **CRITICAL-PRIMARY** | 7-surface edit — goes beyond singular "what kind of thing" phrasing | 3-surface edit — matches singular phrasing directly | **B** | The user's verbatim "what kind of thing" is singular; B's parsimony matches; A's 7 surfaces deliver more than the user asked for (cite: `_branch.md` Source Input verbatim) |
| **D2** | Completeness of spec edit | MEDIUM | Covers §1.3 NOT-list + §1.4 vocab + §2.1 Step Refinement + §4.2 FM #8 + §4.2 FM #9 + §5.4 + §5.5 + §5.6 | Covers §1.3 + §2.1 + §5.4 | **A** | A touches 7 spec surfaces vs B's 3 (cite: 16-00 finding §4 "The exact spec text"; 20-35 finding §2) |
| **D3** | Parsimony / minimal-MVP | HIGH | 7 surfaces — generous | 3 surfaces — minimum sufficient | **B** | B explicitly selected M1 (minimal) over M2/M3 with documented reasoning (cite: 20-35 finding §5 "Why M1 (minimal) and not M2 / M3") |
| **D4** | Anti-regression strength | **CRITICAL** | New §4.2 failure-mode rows FM #8 (Recency-Equates-Idleness) + FM #9 (Recency-Bias-Filter); both anchored to §4.4 asymmetric-failure principle | Explicit non-filtering reaffirmation at §2.1; cross-referenced to §4.4 asymmetric-failure principle | **TIE** | Different valid philosophies; both project-consistent; both anchored to the same upstream §4.4 principle (cite: 16-00 finding §4 Addition 4; 20-35 finding §3 "Failure mode B... two layers") |
| **D5** | User-language alignment | HIGH | `recency annotation` (coined signal-level term, not in user vocabulary) | `last-edit-time` (matches user's "last datetime of edit") | **B** | B's sensemaking Ambiguity 1 explicitly tested user-language alignment and committed observable-fact naming over judgment-adjacent alternatives (cite: 20-35 finding §4 "Why the naming matters"; 16-00 sensemaking Ambiguity #1) |
| **D6** | Structural rigor (placement convention; primitive set; NOT-list discipline) | MEDIUM | Multi-surface placement applied to 7 elements; explicit Layer Commitment declaration; explicit primitive-set self-check (untouched §2.4 primitive composition) | Multi-surface placement applied to 3 elements; Layer Commitment omitted (defensible per template trigger — the question is "what to add," not from-scratch redefinition) | **A** | A's coverage of structural rigor across more spec elements demonstrates more rigorous convention-application (cite: 16-00 finding §5 "The non-regression argument") |
| **D7** | Ship-readiness | MEDIUM | Each of 7 surfaces has exact spec text ready to paste | Each of 3 surfaces has exact spec text ready to paste | **TIE** | Both findings produce concrete spec-edit text (cite: both findings' Next Actions MUST item #1) |
| **D8** | Future-extension framing | HIGH | "Layered metadata-signal pattern" preserved as Research Frontier — not committed at spec time | Named category "observable-fact metadata annotations" committed at spec time, in §2.1 body | **B** | B's named category is forward-extension-ready WITHOUT requiring structural change to the spec when new kinds (file-size, line-count, etc.) are added; A's research frontier preserves the question but doesn't establish the extension pattern (cite: 16-00 finding §3.2/COULD #2; 20-35 finding §6 "The named category") |
| **D9** | Confound-acknowledgment | MEDIUM | Did not name `/MVL2+`-as-runner as a confound (the inquiry didn't compare itself to anything) | Did not name `/MVL+`-as-runner as a confound (same reason) | **TIE** | Neither prior is responsible for confound-acknowledgment; that responsibility belongs to THIS comparison inquiry |
| **D10** | Frame preservation (user's "old ≠ idle" guard explicit) | HIGH | FM #9 Recency-Bias-Filter row explicitly handles the user's "old ≠ idle" guard | §2.1 non-filtering reaffirmation paragraph explicitly handles the user's "but" guard | **TIE** | Both preserve the user's explicit guard with comparable structural force (cite: 16-00 finding §4 Addition 4 FM #9 Corrective text; 20-35 finding §3 "Failure mode B... Layer 2") |
| **D11** | Adversarial-test rigor in critique | MEDIUM | 7 explicit KILLs documented with structural grounds (numeric bands; `mtime annotation` name; combining FMs; REPAIR of §2.3; ADD-DIMENSION on tags; REORGANIZE inline; outbound design-history pointers) | 0 KILLs; 14 SURVIVEs with 2 REFINEs (Q3 schema-row restructure; Q6 RESEARCH FRONTIER trigger refinement) | **A** | A's critique passed more KILLed alternatives — uncomfortable alternatives were tested and rejected with structural grounds; B's critique converged faster with fewer rejected alternatives (cite: 16-00 finding §Reasoning "Why every KILL was killed"; 20-35 critique.md per-candidate verdicts) |
| **D12** | Inquiry-template compliance | MEDIUM | Layer Commitment declared explicitly as "process" with out-of-scope reasoning for meaning + structural | Layer Commitment omitted (defensible — the question is an addition, not from-scratch redefinition) | **A** (slight) | A's Layer Commitment declaration is more rigorous template-application; B's omission is defensible per the MVL+ template trigger ("REQUIRED when from-scratch redefinition, meta-question on discipline/protocol/framework artifact, or fundamental restructure") — the question IS a meta-question on a discipline artifact, so A's interpretation is arguably more compliant |

**Roll-up (weighted by dimension importance):**

- **B wins** at the **CRITICAL-PRIMARY** level: D1 (the verdict's anchor).
- **B wins** at HIGH-weighted dimensions: D3 (parsimony), D5 (user-language alignment), D8 (future-extension framing).
- **A wins** at MEDIUM-weighted dimensions: D2 (completeness), D6 (structural rigor across more surfaces), D11 (adversarial-test rigor), D12 (template compliance).
- **TIE** on CRITICAL D4 (anti-regression — different valid philosophies), MEDIUM D7 (ship-readiness), MEDIUM D9 (confound — neither prior's responsibility), HIGH D10 (frame preservation — both preserve "old ≠ idle" with comparable force).

The weighted roll-up: **B wins on the primary criterion (CRITICAL-PRIMARY D1) and on three of four HIGH dimensions (D3, D5, D8). A wins on four MEDIUM dimensions. The weighting favors B; this rolls up to the V2 verdict in P1.**

---

**Inversion-candidate (Intervention-Shape-Axis Inversion at property-iv piece):**

P2's intervention shape: **ADD-CONTENT** (a populated weighted dimensional table).

*Alternative shape: REORGANIZE-WITHOUT-ADDING.* What if the comparison should be organized BY SPEC-SECTION (§1.3 / §1.4 / §2.1 / §4.2 / §5.4 / §5.5 / §5.6) rather than by abstract dimensions — showing what each inquiry did at each section?

*What follows under REORGANIZE:* the table reorganizes around the 7 spec sections; each row shows A's edit + B's edit at that section. This is more CONCRETE (the user can see the exact edit pattern) but LOSES the dimension-weighting structure that lets the verdict roll up.

*5-test:*
- **Novelty:** YES — different framing.
- **Scrutiny survival:** WEAKER — without explicit weights, the table doesn't justify the verdict directly. A reader could count cells (A touches 7 sections; B touches 3) and conclude "A wins on coverage" — contradicting the verdict. The dimension-weighted table makes the roll-up logic explicit; the spec-section table doesn't.
- **Fertility:** limited.
- **Actionability:** weaker — the user has to construct the dimension-weighting themselves.
- **Mechanism independence:** weaker — only Inversion produces this; decomposition's HC1 (verdict-table alignment via explicit weights) is unsatisfied by section-organized table.

**Verdict: Inversion REJECTED on HC1 grounds.** Principal ADD-CONTENT (dimension-weighted table) survives.

---

### P3 — Honest Limits

**Mechanisms applied:** Combination (confound + scope + variance bound together), Lens Shifting (Option γ framing — confound shapes explanation, not blocks verdict), Extrapolation (future LLM-run randomness unknown; deferred protocol referenced), Inversion (framing-semantic).

**Property firing:** (ii) framing-semantic (the framing that "verdict has confounds and scope limits" structures how the verdict is read).

**Principal candidate text:**

---

> **Confound: the runner difference is a different cognitive operation, not a different quality.**
>
> Inquiry A ran through `/MVL2+`, which uses `/surfacing` as its upstream discipline. Inquiry B ran through `/MVL+`, which uses `/explore`. For a question that asks how to modify the surfacing discipline ITSELF, `/MVL2+`'s use of `/surfacing` upstream creates a **self-reference dynamic** — the upstream operation engages the same discipline being modified. This naturally activates surfacing's own structural elements (the NOT-list at §1.3, the vocabulary table at §1.4, the failure-mode catalog at §4.2, the primitive composition at §2.4) in the downstream stages' working context, producing richer engagement with those elements than `/MVL+`'s `/explore` upstream would.
>
> Part of A's depth on dimensions D2 (completeness) and D6 (structural rigor across more surfaces) is structurally attributable to this self-reference dynamic, not to A being a "smarter inquiry." The verdict above accounts for this: A's process-rigor and completeness on those dimensions are real values, but they don't change the user-question-fidelity primary criterion that the verdict turns on. The confound shapes the explanation; it does not flip the verdict.
>
> **Scope limitation: this is an N=1 comparison.**
>
> The verdict applies to THIS specific pair of inquiries on THIS specific user query. It does NOT generalize:
>
> - It does NOT claim *"/MVL+ is always better than /MVL2+ for surfacing-discipline questions."*
> - It does NOT claim *"/MVL2+ over-engineers"* or *"/MVL+ under-engineers."*
> - It does NOT claim that future runs with the same input would produce the same outputs.
>
> A different user with a different query (e.g., *"give me a complete spec-engineering package for adding metadata to surfacing — vocabulary, telemetry, failure modes, derivations, the whole thing"*) would likely find A's output better-fitting. The current user's singular "what kind of thing we can add" phrasing is what makes B's parsimony win HERE. Other phrasings produce different verdicts.
>
> **LLM run-to-run randomness: unobserved.**
>
> Both inquiries ran on the same model (Opus 4.7 1M context) at the same effort level (max), but LLM outputs have non-determinism across runs. The project's deferred `ab_stability_test` protocol (referenced in `devdocs/inquiries/2026-05-14_16-41__ab_test_inquiry_protocol/finding.md` as a deferred sibling protocol for measuring LLM-stochasticity-driven output variance) would be needed to bound how much of A's and B's divergence is attributable to run-to-run variance versus to the runner difference (the deterministic structural difference between Surfacing-upstream and Explore-upstream). Without that data, the per-run-variance contribution is unknown; both the verdict and the confound paragraph above are best read as describing the OBSERVED outputs of THIS pair of runs, not as claims about the steady-state behavior of either runner.
>
> **What the verdict DOES claim:** for THIS pair, with THIS user query, on user-question-fidelity as the primary criterion, B did a better job than A.
>
> **What the verdict DOES NOT claim:** runner-level superiority; cross-question generalization; cross-run stability; nor that A's output is "wrong" — A's output goes beyond the user's question, which is excess-of-fit rather than failure-of-fit.

---

**Inversion-candidate (Inversion at framing-semantic piece, property ii):**

*Alternative framing: confound + scope are verdict-disqualifiers, not honest limits.* What if the runner-difference confound is structurally too strong to render a verdict — we should refuse to declare a winner?

*What follows under refusal-framing:* P3 would say *"the comparison conflates runner difference with output quality; until `ab_stability_test` runs across multiple matched pairs, the verdict is structurally premature; no declaration of better/worse is warranted."*

*5-test:*
- **Novelty:** YES.
- **Scrutiny survival:** WEAK — this directly contradicts sensemaking's Ambiguity 2 resolution (Option γ over Option α), which was committed with HIGH confidence on structural grounds (refusal violates user's explicit request for a verdict).
- **Fertility:** zero — produces no actionable verdict.
- **Actionability:** NO — user explicitly asked for verdict.
- **Mechanism independence:** sensemaking's Ambiguity 2 already adjudicated this and rejected Option α; no convergent support.

**Verdict: Inversion REJECTED.** Principal Option-γ framing survives.

---

## Inherited Frame Audit (between Phase 2 and Phase 3)

### Step (i) — Seed-level central assumption

**Central assumption:** "B did a better job for the user's given query than A; the verdict is grounded in user-question-fidelity per the user's 'for given query' phrase."

**Challenge scan:** has any candidate explicitly challenged this assumption?

YES — sensemaking's Ambiguity 4 explicitly tested V1 (A better), V3 (TIED), V4 (different-strengths), V5 (verdict-impossible). All four alternatives were rejected on structural grounds; V2 (B better) survived. The seed-level assumption IS explicitly challenged in the prior discipline outputs.

**Step (i) result:** Audit does NOT fire on seed level.

### Step (ii) — Piece-level commitments

| Piece | Property | Load-bearing commitment | Challenged in candidate set? |
|---|---|---|---|
| P1 | (iv) + (v) | "Verdict-with-reasoning intervention shape; user-question-fidelity primary criterion" | YES — Inversion tested REFRAME-AS-BUG alternative; rejected on structural grounds |
| P2 | (iv) | "12 weighted dimensions; weights make verdict-roll-up explicit" | YES — Inversion tested REORGANIZE-BY-SECTION alternative; rejected on HC1 (weighting alignment) grounds |
| P3 | (ii) | "Confound shapes explanation; scope is N=1; verdict declared not blocked" | YES — Inversion tested refusal-framing (verdict-disqualifier); rejected on sensemaking's Ambiguity 2 grounds |

All meta-decision pieces' commitments have been explicitly challenged via piece-level Inversion candidates and tested with 5-test. Compliance satisfied.

**Step (ii)-(iv) — Audit does NOT fire.** Proceed directly to Phase 3 Test.

---

## Phase 3 — Test

### 5-test cycle (applied to the assembled candidate set)

| Test | Result |
|---|---|
| **Novelty** | All three principal candidates novel — this is the project's first runner-vs-runner verdict (per exploration R3 confirming A/B precedent is current-vs-snapshot, not runner-vs-runner). **PASS.** |
| **Scrutiny survival** | Each piece-level Inversion tested and rejected on structural grounds: REFRAME-AS-BUG at P1 (user explicit request); REORGANIZE-BY-SECTION at P2 (HC1 weighting); refusal-framing at P3 (sensemaking Ambiguity 2 already rejected). **PASS.** |
| **Fertility** | The verdict opens future-inquiry frontiers: project-level runner calibration (would require `ab_stability_test` data); pedagogical-value comparison (different criterion); pattern-codification for future runner-vs-runner comparisons. **PASS.** |
| **Actionability** | Directly addresses user's question with verdict + reasoning + honest limits — ready for finding compilation. **PASS.** |
| **Mechanism independence** | Multiple mechanisms converge: Combination (synthesizing priors), Domain Transfer (A/B precedent verdict-shape vocabulary), Constraint Manipulation (user's singular-phrasing constraint), Absence Recognition (what's missing per dimension), Lens Shifting ("for given query" anchor), Extrapolation (LLM run-to-run variance unknown), Inversion (piece-level at meta-decision pieces — all rejected). **STRONG — 4+ mechanisms converge.** |

### Shared-input detection (Mechanism Independence refinement)

Are mechanisms converging because they all operate on sensemaking's SV6?

- Combination operates on the priors' content (independent of SV6 — the priors are objective artifacts).
- Domain Transfer's A/B precedent vocabulary is from `devdocs/inquiries/2026-05-14_16-41__ab_test_inquiry_protocol/` — EXTERNAL project artifact, INDEPENDENT.
- Constraint Manipulation operates on the user's verbatim query (EXTRINSIC — preserved in `_branch.md` Source Input).
- The other mechanisms operate partly within sensemaking's frame.

At least three mechanisms (Combination operating on objective priors, Domain Transfer from external precedent, Constraint Manipulation from extrinsic user query) provide INDEPENDENT grounds. Convergence is **NOT spurious**.

### Artifact-grounding test (6th, conditionally applied)

The verdict and table make categorical claims about project state:
- "A's spec edit touches §1.3 + §1.4 + §2.1 + §4.2 (twice) + §5.4 + §5.5 + §5.6" — verified by reading 16-00 finding §4 "The exact spec text."
- "B's spec edit touches §1.3 + §2.1 + §5.4" — verified by reading 20-35 finding §2 "Where in the spec the addition lives."
- "A has 7 KILLs documented; B has 0 KILLs + 2 REFINEs" — verified by reading 16-00 finding §Reasoning "Why every KILL was killed" + 20-35 critique.md.
- "Both inquiries received identical verbatim user input" — verified by reading both `_branch.md` Source Input sections.

All categorical claims artifact-verified. **PASS.**

### Assembly check

Combining P1 + P2 + P3, do emergent properties surface?

**TWO new emergent properties:**

**Emergent property 1 — Defense-in-depth on verdict honesty.** P1 declares the verdict; P3 names what the verdict doesn't claim; P2's weighted table makes the roll-up auditable. Together they form a three-surface honesty mechanism: a future reader can audit (a) the weighted-table reasoning (P2 — does the per-dimension positioning support the verdict?), (b) the verdict's primary-criterion grounding (P1 — is "for given query" the right anchor?), and (c) what the verdict excludes (P3 — does the confound block the verdict structurally?). All three surfaces protect against verdict-over-claim. This is structurally emergent — no individual piece provides honesty defense; the combination does.

**Emergent property 2 — Pattern for future runner-vs-runner comparisons.** This inquiry establishes a comparison-shape template: (a) 12 (or N) dimensions weighted explicitly with one designated CRITICAL-PRIMARY; (b) verdict anchored to user's stated query; (c) Option γ confound treatment (declared verdict; confound shapes explanation); (d) N=1 scope limitation explicit. Future inquiries comparing different runners (or different discipline-spec versions) on the same input can follow this template. **Disposition: RESEARCH FRONTIER.** The pattern would benefit from codification as a project-level inquiry-protocol (analogous to the A/B test protocol at `devdocs/inquiries/2026-05-14_16-41__ab_test_inquiry_protocol/`), but that's a separate inquiry — not THIS verdict's job.

### Axis coverage check

Orthogonal axes of the candidate space and variants tested:

| Axis | Variants tested | Choice |
|---|---|---|
| Verdict direction | A better / B better / TIED / different-strengths / refusal | **V2 (B better) primary + V4 supporting** (other 3 rejected in sensemaking Ambiguity 4) |
| Dimension weighting | unweighted / weighted-by-importance / weighted-by-criticality | **weighted-by-criticality** (D1 CRITICAL-PRIMARY) |
| Confound treatment | block / side-note / shape-explanation | **shape-explanation (Option γ)** (sensemaking Ambiguity 2) |
| Evidence shape | per-dimension / per-spec-section / holistic | **per-dimension with weights** (decomposition HC1) |
| Scope claim | N=1-only / generalize-cautiously / claim-runner-superiority | **N=1-only, explicit non-generalization** |

All five orthogonal axes have variants tested; choices made with explicit reasoning. **Axis coverage PASS.**

### Per-piece mechanism-trace

| Piece | Mechanisms applied | Property | Classification |
|---|---|---|---|
| P1 | Combination:content, Constraint Manipulation:ADD (user's singular-phrasing constraint binding the verdict), Lens Shifting:content ("for given query" anchor), Inversion:intervention-shape | (iv) + (v) | meta-decision (property v) |
| P2 | Combination:content, Domain Transfer:content (A/B precedent), Absence Recognition:content, Inversion:intervention-shape | (iv) | meta-decision |
| P3 | Combination:content, Lens Shifting:content (Option γ framing), Extrapolation:content (unobserved variance), Inversion:framing-semantic | (ii) | meta-decision |

Piece-level Inversion compliance: **3/3 SATISFIED.** For property-(v) piece (P1), Inversion targets intervention-shape axis: **1/1 SATISFIED.**

### Failure mode check

| Mode | Observed? | Reason |
|---|---|---|
| Premature evaluation | NO | 5-test applied after candidates were generated |
| Single-mechanism trap | NO | 7 mechanisms applied (full coverage) |
| Early frame lock | NO | Inversion fired at each meta-decision piece |
| Innovation without grounding | NO | Each principal candidate tested + artifact-grounding test on categorical claims |
| Mechanism exhaustion | NO | Strong convergence (4+ mechanisms); 2 INDEPENDENT grounds |
| Survival bias | NO | Uncomfortable Inversion candidates (REFRAME-AS-BUG; REORGANIZE; refusal-framing) tested with structural rigor, not dismissed for comfort |

**0/6 failure modes observed.**

---

## Output Dispositions

| Candidate | Disposition | Rationale |
|---|---|---|
| P1 (verdict + primary reasoning + V4 supporting) | **ACTIONABLE** | Multi-mechanism convergent; passes 5-test + artifact-grounding; ready for finding compilation |
| P2 (12-row dimension table with weights + citations + reasoning) | **ACTIONABLE** | Multi-mechanism convergent; weighted roll-up justifies P1; ready for compilation |
| P3 (honest-limits prose: confound + scope + run-variance) | **ACTIONABLE** | Multi-mechanism convergent; Option γ framing applied; ready for compilation |
| Emergent property 1 (defense-in-depth on verdict honesty) | **ACTIONABLE** (implicit in assembled deliverable) | No standalone action; emerges from P1+P2+P3 assembly |
| Emergent property 2 (pattern for future runner-vs-runner comparisons) | **RESEARCH FRONTIER** | Pattern-codification is a separate inquiry; preserved as observation in finding's Open Questions → Research Frontiers |

---

## Mechanism Coverage Telemetry

- **Generators applied:** 4/4 (Combination, Absence Recognition, Domain Transfer, Extrapolation). Full.
- **Framers applied:** 3/3 (Lens Shifting, Constraint Manipulation, Inversion at piece-level on every meta-decision piece). Full.
- **Total:** 7/7 — full coverage.
- **Convergence:** YES — 4 mechanisms converge on the core verdict; 3 INDEPENDENT grounds (Combination on objective priors; Domain Transfer from external A/B precedent; Constraint Manipulation from extrinsic user query) prevent spurious-from-shared-input.
- **Survivors tested:** 3/3 principals tested via 5-test; artifact-grounding test on categorical project-state claims (all verified).
- **Failure modes observed:** NONE (0/6).

### Production-task additional telemetry

- **Per-piece mechanism log:** see Per-piece mechanism-trace table above.
- **Per-piece axis-distribution log (for property-v pieces):** P1 has Inversion at intervention-shape axis (1/1 satisfied).
- **Meta-decision-piece classification:** P1 (meta-decision property v), P2 (meta-decision property iv), P3 (meta-decision property ii). 3/3 meta-decision.
- **Piece-level Inversion compliance:** 3/3 SATISFIED. Each meta-decision piece has Inversion-candidate generated, tested via 5-test, and explicitly rejected with structural grounds.

---

## Overall Verdict

**PROCEED.**

- Full 7/7 mechanism coverage.
- Strong convergence (4+ mechanisms; 3 INDEPENDENT grounds).
- All 3 principals tested (5-test + 6th artifact-grounding test where applicable).
- All meta-decision pieces satisfy Piece-Level Inversion Rule (3/3); property-(v) piece satisfies Intervention-Shape-Axis Inversion (1/1).
- 0/6 failure modes observed.
- Inherited Frame Audit does not fire (all seed + piece commitments explicitly challenged).
- Assembly produces 2 emergent properties (defense-in-depth on verdict honesty; pattern for future runner-vs-runner comparisons — preserved as Research Frontier).

**Hand to critique.** Critique will adversarially test the verdict + the per-dimension positioning + the confound treatment, with multi-axis prosecution (user-perspective: would the user accept this verdict; specific failure-case scenarios; specification-gap probes on the weighted dimensions).
