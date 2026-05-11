# Decomposition: Loop Diagnose - Past Navigation Memory Index Vs Search

## Coupling Map

### Major Elements

The diagnostic finding's content has eight distinct elements:

- **E1. Correction Chain Summary** — paths, raw correction, what changed prior → corrected.
- **E2. Hypothesis A package** — Exploration probe gap. HIGH confidence.
- **E3. Hypothesis B package** — Sensemaking explicitness anchor. HIGH confidence.
- **E4. Hypothesis C package** — Critique dimension blindness. HIGH confidence.
- **E5. Hypothesis D package** — Loop framing / Goal-clause imbalance. MEDIUM-HIGH confidence.
- **E6. Propagation hypotheses** — Decomposition Q-tree presupposition + Innovation candidate-set blindness. MEDIUM confidence each.
- **E7. Maintenance Candidates** — narrow protocol/spec changes derived from primary hypotheses with evaluation gates.
- **E8. Diagnostic Verdict** — ACTIONABLE / PARTIAL / INCONCLUSIVE plus best-supported diagnosis, strongest maintenance candidate, main uncertainty, recommended next step.

### Coupling Topology

Strong coupling:

- E2 ↔ each candidate in E7 that targets Exploration. The Exploration evidence and the "probe-required-before-stabilization" rule depend on the same artifact pattern.
- E3 ↔ each candidate in E7 that targets Sensemaking. The anchor-not-interrogated evidence and the "anchor-interrogation prompt" candidate share the same anchor concept.
- E4 ↔ each candidate in E7 that targets Critique. The dimension-list-omission evidence and the "dimension-audit prompt" candidate share the same dimension concept.
- E5 ↔ each candidate in E7 that targets the runner / Goal-clause balance.
- E8 ↔ E7 (verdict's actionability depends on at least one candidate having strong evidence and a concrete gate).

Moderate coupling:

- E2 / E3 / E4 / E5 ↔ E6. Propagation hypotheses are partly downstream of B; mentioning them coherently requires referencing B's evidence.
- E2 ↔ E3. Both are upstream causes; Sensemaking on the diagnosis identified them as parallel-but-reinforcing rather than competing.
- E1 ↔ E8. The verdict references the chain but does not depend on it for content.

Low coupling:

- E1 ↔ E2-E7. Once the chain is summarized, the per-hypothesis packages are self-contained.
- E2 ↔ E4 (across hypotheses). Each hypothesis's evidence comes from a different artifact (exploration.md vs critique.md) and from a different shortcoming type (probe gap vs dimension blindness). They share no structural dependency.

### Natural Boundaries

The problem separates into six coherent pieces:

1. Correction chain summary (E1).
2. Per-hypothesis evidence packages (E2-E5, four pieces with shared internal structure but different evidence).
3. Propagation hypotheses (E6, one piece capturing both Decomposition and Innovation amplifications).
4. Failure attribution summary table (derived view across E2-E6).
5. Maintenance candidates (E7) with evaluation gates.
6. Diagnostic verdict (E8).

The strong-coupling pairs are between hypothesis packages and their corresponding maintenance candidates. Decomposing the finding so that each hypothesis stays adjacent to its candidate keeps strong bonds within pieces.

The wrong decomposition to avoid: putting all four hypotheses in one piece and all candidates in another, which would force the reader to cross-reference each hypothesis-candidate pair across sections. The right decomposition keeps each hypothesis's evidence and its derived candidate associatable, with the attribution summary as a derived compact view.

## Boundary Validation

### Top-Down Boundary Check

- E1 (Correction Chain Summary) is separable because changing its content (path strings, raw correction text) does not change any other element.
- E2-E5 (per-hypothesis packages) are separable because each hypothesis's evidence comes from disjoint artifact regions (Exploration's Cycle 5 for A, Sensemaking's Phase 1 for B, Critique's dimensions for C, _branch.md Goal for D).
- E6 (propagation hypotheses) is separable from primary hypotheses because its evidence is downstream-derived but its content reads as a single short observation pair.
- E7 (maintenance candidates) is separable because each candidate has its own gate and risk class, even though candidates derive from primary hypotheses.
- E8 (verdict) is separable because it is a top-level summary that references but does not duplicate prior elements.

### Bottom-Up Atom Check

Irreducible atoms:

- prior_path string;
- corrected_path string;
- raw human correction text;
- one Exploration cycle excerpt (prior Cycle 5 named-but-not-probed);
- one Exploration cycle excerpt (corrected Cycle 2 ran the probe);
- one Sensemaking anchor excerpt (prior Phase 1 / Constraints "explicit durable Markdown");
- one Sensemaking SV excerpt (corrected SV1 reframe);
- one Critique dimension excerpt (prior dimension list);
- one Critique dimension excerpt (corrected dimension list);
- one _branch.md Goal excerpt (clause distribution);
- one Decomposition question-tree excerpt (Q1 presupposition);
- one Innovation candidate-set excerpt (six candidates without documented-search);
- per-hypothesis confidence labels;
- per-hypothesis "Why not stronger" rationale;
- per-candidate gate definition;
- per-candidate risk class label;
- diagnostic verdict label.

These atoms group into the six pieces above without any atom being split across pieces. The "scan/backfill required" observation appears in both E4's evidence and E3's foundational principles; it is not split because in each location it serves a different role (E3 uses it as a foundational principle; E4 uses it as evidence of dimension blindness).

Boundary confidence: high.

## Question Tree

### Question 1 - What Is The Correction Chain Summary?

Verification criteria:

- [ ] Names prior_path with the full inquiry folder path.
- [ ] Names corrected_path with the full inquiry folder path.
- [ ] Quotes or faithfully excerpts the human correction.
- [ ] States what changed from prior result to corrected result in 1-2 sentences (mechanism prioritization shift, not content overturn).

### Question 2 - What Is The Hypothesis A Package (Exploration Probe Gap)?

Verification criteria:

- [ ] Affected stage = Exploration.
- [ ] Shortcoming type names "candidate listed at scan resolution but not probed empirically" (or equivalent).
- [ ] Evidence from prior inquiry cites exploration.md Cycle 5 (named generated-on-demand candidate) AND Cycle 4 (had the active-count data).
- [ ] Evidence from human correction cites the file-name comparator phrasing.
- [ ] Evidence from corrected inquiry cites corrected exploration.md Cycle 2 (ran the probe with concrete patterns).
- [ ] Confidence = HIGH.
- [ ] "Why not stronger" notes that even with the probe, the Sensemaking anchor would have routed cheap-cost into "fallback" rather than "primary."
- [ ] Maintenance candidate identified.
- [ ] Evaluation gate identified (observable in next 1-3 MVL+ runs).

### Question 3 - What Is The Hypothesis B Package (Sensemaking Explicitness Anchor)?

Verification criteria:

- [ ] Affected stage = Sensemaking.
- [ ] Shortcoming type names "anchor stated as constraint without interrogation" or "anchor dominance failure" or "premature stabilization on form-of-answer."
- [ ] Evidence from prior inquiry cites sensemaking.md Phase 1 / Constraints ("Homegrown values explicit durable Markdown artifacts") plus the Phase 3 ambiguity set (none of which interrogated form-of-answer).
- [ ] Evidence from human correction cites the user's "we know the file names" phrasing as a structural challenge to the form anchor.
- [ ] Evidence from corrected inquiry cites corrected sensemaking.md SV1 (explicit reframe to "explicitness should live in a maintained list or in a documented search contract").
- [ ] Confidence = HIGH.
- [ ] "Why not stronger" notes that propagation effects are partly inherited; isolating B without D is not fully clean.
- [ ] Maintenance candidate identified.
- [ ] Evaluation gate identified.

### Question 4 - What Is The Hypothesis C Package (Critique Dimension Blindness)?

Verification criteria:

- [ ] Affected stage = Critique.
- [ ] Shortcoming type names "wrong dimensions" or "dimension list lacks duplicate-derivable-state risk axis."
- [ ] Evidence from prior inquiry cites critique.md Dimensions With Weights (Authority Separation as content-only; Robustness Against Staleness as repair-only).
- [ ] Evidence from human correction cites the "we can simply search" phrasing as a mechanism-level redundancy challenge.
- [ ] Evidence from corrected inquiry cites corrected critique.md Stale-State Resistance dimension ("does not create a second mutable truth source that can silently drift").
- [ ] Confidence = HIGH.
- [ ] "Why not stronger" notes mixed attribution between dimension articulation (independent) and inherited candidate set (downstream of B/Innovation).
- [ ] Maintenance candidate identified.
- [ ] Evaluation gate identified.

### Question 5 - What Is The Hypothesis D Package (Loop Framing / Goal Clause Distribution)?

Verification criteria:

- [ ] Affected stage = "loop framing" per LOOP_DIAGNOSE taxonomy (with corrective surface noted as MVL+ Goal-construction step plus context elicitation).
- [ ] Shortcoming type names "Goal pre-encoded design questions" and "no comparator surfacing for 'easier' phrasing."
- [ ] Evidence from prior inquiry cites _branch.md Goal (six design clauses for one need clause) AND finding.md Reasoning section (explicit "easier than ad hoc rediscovery" resolution that was never tested).
- [ ] Evidence from human correction cites the user's later-supplied comparator phrasing.
- [ ] Evidence from corrected inquiry cites corrected _branch.md (question-form reframe to "If Homegrown can find PastNavigationMemoryFile candidates by searching known filenames and patterns, does it still need a maintained PastNavigationMemoryFile index?").
- [ ] Confidence = MEDIUM-HIGH.
- [ ] "Why not stronger" notes that the causal claim "framing biased Sensemaking" is one inferential step (Sensemaking could have re-interrogated the Goal).
- [ ] Maintenance candidate identified at runner level.
- [ ] Evaluation gate identified.

### Question 6 - What Are The Propagation Hypotheses (Decomposition + Innovation)?

Verification criteria:

- [ ] Both stages identified by name (Decomposition, Innovation).
- [ ] Decomposition shortcoming names Q-tree presupposition (Q1 "What counts as an entry?" assumed the artifact exists).
- [ ] Innovation shortcoming names candidate-set blindness (six candidates without documented-search synthesis; Inversion mechanism stopped at front-matter rather than reaching search-as-contract).
- [ ] Each labeled MEDIUM confidence with explicit "largely inherited from B."
- [ ] Each tied to a propagation observation rather than an independent maintenance candidate.

### Question 7 - What Are The Maintenance Candidates?

Verification criteria:

- [ ] At least one candidate per primary hypothesis, sized as the smallest patch that would prevent recurrence.
- [ ] Each candidate names: what should change; which file/protocol; risk class (low/medium/high); expected benefit; evaluation gate; whether it should become a branch experiment.
- [ ] Candidates avoid broad fundamentals rewrites.
- [ ] Candidates targeting propagation effects are flagged as "may not be needed if upstream candidate succeeds."
- [ ] At least one candidate is concrete enough to be implemented as a one-paragraph protocol-text addition; at least one is a monitoring question rather than a source edit when evidence is borderline.

### Question 8 - What Is The Diagnostic Verdict?

Verification criteria:

- [ ] Verdict label = ACTIONABLE / PARTIAL / INCONCLUSIVE.
- [ ] Best-supported diagnosis names the cascade structure (upstream B + parallel A + downstream-partly-independent C, with D as upstream framing).
- [ ] Strongest maintenance candidate identified by name.
- [ ] Main uncertainty named (e.g., independence partition between B and D, or generalizability from one correction chain).
- [ ] Recommended next step is concrete (e.g., monitor next N MVL+ runs for recurrence; do not promote LOOP_DIAGNOSE to discipline yet).
- [ ] Verdict is consistent with LOOP_DIAGNOSE Step 4 verdict definitions and Step 5 guardrails.

## Interface Map

| Source Piece | Target Piece | What Flows | Direction |
| --- | --- | --- | --- |
| Q1 (Correction Chain Summary) | Q2-Q8 | path identifiers, raw correction text | one-way |
| Q2 (Hypothesis A) | Q7 (Maintenance Candidates) | Exploration shortcoming → probe-required candidate | one-way |
| Q3 (Hypothesis B) | Q7 | Sensemaking shortcoming → anchor-interrogation candidate | one-way |
| Q4 (Hypothesis C) | Q7 | Critique shortcoming → dimension-audit candidate | one-way |
| Q5 (Hypothesis D) | Q7 | framing shortcoming → Goal-clause balance candidate | one-way |
| Q6 (Propagation) | Q7 | propagation observation → "may not need separate candidate if upstream candidate succeeds" | one-way |
| Q2-Q6 (all hypotheses) | Q7 (Failure Attribution Summary cells) | stage label, shortcoming type, evidence strength, confidence | one-way |
| Q2-Q7 | Q8 (Verdict) | strongest hypothesis name, strongest candidate name, primary uncertainty | one-way |

Hidden-coupling check:

- The verdict (Q8) does not invent new content; it summarizes what Q2-Q7 already state. If Q8 introduces a claim not supported by an upstream piece, the boundary is wrong.
- Maintenance candidates (Q7) cannot generate new evidence; they reference the hypothesis packages. A candidate that requires evidence not in Q2-Q5 is a hidden-coupling failure.
- The Failure Attribution Summary table in Q7 reads from each hypothesis's stage label, shortcoming type, evidence strength, and confidence. It does not introduce new attributions.

## Dependency Order

1. Q1 (Correction Chain Summary) — no dependencies.
2. Q2 (Hypothesis A), Q3 (Hypothesis B), Q4 (Hypothesis C), Q5 (Hypothesis D) — all depend on Q1; can be answered in parallel after Q1. Each is independent of the others' content.
3. Q6 (Propagation Hypotheses) — depends on Q3 (and faintly on Q5) because propagation effects are described as downstream of B (and partly D). Can run in parallel with Q4 once Q3 is drafted.
4. Q7 (Maintenance Candidates + Attribution Summary) — depends on Q2-Q6.
5. Q8 (Diagnostic Verdict) — depends on Q2-Q7.

Parallelizable after Q1: Q2, Q3, Q4, Q5 (four hypotheses are mutually independent).

Must wait:

- Q6 should follow Q3.
- Q7 should follow Q2-Q6.
- Q8 should follow Q7.

## Self-Evaluation

### Independence

Pass.

Each question can be answered using disjoint evidence regions in the prior + corrected artifacts. Q2 reads Exploration cycles; Q3 reads Sensemaking phases; Q4 reads Critique dimensions; Q5 reads `_branch.md` Goal and finding.md Reasoning; Q6 reads Decomposition and Innovation. The only shared dependency is Q1 (path identifiers) and Q7's aggregation step.

### Completeness

Pass.

The eight questions cover what LOOP_DIAGNOSE Step 4 prescribes: Correction Chain Summary, per-hypothesis Failure Hypotheses (×4 primary + propagation), Failure Attribution Summary, Maintenance Candidates, Diagnostic Verdict. No prescribed output element falls between pieces.

### Reassembly

Pass.

If all eight questions are answered with their verification criteria met, the resulting `finding.md` will satisfy LOOP_DIAGNOSE Step 4's full output contract. The diagnostic verdict will be derivable from the per-hypothesis confidence levels and the maintenance-candidate evaluation gates.

### Tractability

Pass.

Each question is small enough for a single focused pass. Q2-Q5 are roughly equal in size (one hypothesis package each). Q6 is shorter (paired observation). Q7 is the largest piece because it consolidates candidates plus the attribution table; it is still tractable as one pass.

### Interface Clarity

Pass.

Interfaces are mostly one-way. The hidden-coupling check above lists the explicit checks against introducing new claims downstream that are not supported by upstream pieces.

### Balance

Pass with note.

Q7 (candidates + attribution table) carries roughly 1.5x the load of Q2-Q5 because it aggregates across all hypotheses. Q1, Q6, Q8 are small. The imbalance is mild and inherent to the LOOP_DIAGNOSE Step 4 schema, not a decomposition error.

### Confidence

Pass.

Top-down boundaries (the LOOP_DIAGNOSE Step 4 schema's section structure) and bottom-up atoms (the irreducible evidence excerpts) agree on the partition. The most coupled pair (each hypothesis package + its derived maintenance candidate) is preserved adjacent in the question tree by routing both through Q7's aggregation step rather than splitting them into separate pieces.
