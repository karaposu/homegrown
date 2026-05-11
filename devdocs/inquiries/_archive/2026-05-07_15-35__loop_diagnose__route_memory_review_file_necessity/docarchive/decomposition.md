# Decomposition: Loop Diagnose - Route Memory Review File Necessity

## Coupling Map

### Major Elements

The diagnostic finding's content has nine distinct elements:

- E1. Correction Chain Summary — paths, raw correction, what changed prior → corrected.
- E2. Hypothesis A package — Exploration corpus scan gap. HIGH confidence.
- E3. Hypothesis B package — Sensemaking foundational principle wrong. HIGH confidence.
- E4. Hypothesis C package — Innovation candidate-set on one axis. HIGH confidence.
- E5. Hypothesis D package — Critique dimension weighting (missing explicit-culture-fit). HIGH confidence.
- E6. Framing observation D-prime — Loop framing / Question phrasing. MEDIUM-HIGH confidence.
- E7. Propagation hypotheses — Decomposition Q-tree presupposition + Innovation mechanism execution gap. MEDIUM confidence.
- E8. Cross-chain pattern observations P1, P2 — at 2 of 3+ chains, Monitoring tier.
- E9. Maintenance Candidates section — composed of new (N1-Nx), strengthened previous (M1-M9 references), content cleanup, monitoring extensions.
- E10. Failure Attribution Summary table — derived view across E2-E7.
- E11. Diagnostic Verdict — ACTIONABLE-PARTIAL with best-supported diagnosis, strongest candidate, main uncertainty, recommended next step.

### Coupling Topology

Strong coupling:

- E2 (A) ↔ N1 (corpus-scan rule): the candidate's recognition cue and the hypothesis's evidence share the same artifact pattern (Coarse Scan list inspection).
- E3 (B) ↔ M1-strengthening (anchor-interrogation extended to Foundational Principles): the new chain's evidence extends the previous candidate's surface area without replacing the candidate identity.
- E4 (C) ↔ N3 (candidate-axis-decoupling rule): the candidate generation requires the hypothesis's specific recognition cue (operation-trigger vs storage-trigger axis).
- E5 (D) ↔ N4 (explicit-culture-fit dimension): missing-dimension hypothesis directly produces the dimension recommendation.
- E6 (D-prime) ↔ M4 (Goal-clause balance check, deferred): D-prime is the second instance of M4's revival evidence; promotion still below threshold.
- E8 (cross-chain P1, P2) ↔ M6 (cross-cutting "name-and-test" pattern, deferred): P1 and P2 are M6's revival evidence; 2 of 3+ chains, threshold not yet met.
- E11 (verdict) ↔ E9 (candidates): verdict's actionability depends on at least one new candidate having strong evidence and a concrete gate.

Moderate coupling:

- E2-E5 ↔ E10 (attribution table): summary derives from per-hypothesis stage label + shortcoming type + evidence strength + confidence.
- E1 ↔ E11 (verdict): verdict references chain identity but does not depend on it for content.
- E7 (propagation) ↔ E3 (B): propagation hypotheses are downstream of B and reference its evidence.

Low coupling:

- E1 ↔ E2-E10: once chain is summarized, per-hypothesis packages and the attribution table are self-contained.
- E2 ↔ E5 across hypotheses: each hypothesis's evidence comes from a different artifact region (Exploration Coarse Scan list vs. Critique Dimensions With Weights). They share no structural dependency.
- E8 ↔ E2-E5: cross-chain observations cite per-chain evidence but live in their own tier; their content does not depend on any single hypothesis's full package.

### Natural Boundaries

The problem separates into seven coherent pieces:

1. Correction chain summary (E1).
2. Per-primary-hypothesis packages (E2-E5; four pieces with shared internal structure).
3. Framing observation (E6; one piece at MEDIUM-HIGH).
4. Propagation hypotheses (E7; one piece capturing both Decomposition and Innovation propagation effects).
5. Cross-chain pattern observations (E8; one piece capturing both P1 and P2 at Monitoring tier).
6. Maintenance Candidates + Attribution Summary (E9 + E10; aggregated piece).
7. Diagnostic verdict (E11).

The strong-coupling pairs are between hypothesis packages and their derived candidates. Decomposing so that each hypothesis stays adjacent to its candidate keeps strong bonds within pieces (same as the previous LOOP_DIAGNOSE decomposition pattern).

The wrong decomposition to avoid: splitting cross-chain observations into individual per-pattern pieces (P1, P2 separately) — that would force the reader to cross-reference monitoring entries that share the same promotion threshold. Keeping them grouped at the Monitoring tier preserves their shared semantic identity.

## Boundary Validation

### Top-Down Boundary Check

- E1 (Correction Chain Summary): separable; changing path strings or raw correction text does not change any other element.
- E2-E5 (per-hypothesis packages): separable; each hypothesis's evidence comes from disjoint artifact regions.
- E6 (D-prime framing): separable from primary hypotheses; content references the prior `_branch.md` Question and Goal but does not duplicate primary-hypothesis evidence.
- E7 (propagation): separable as a single short observation pair; references B's evidence by pointer rather than duplication.
- E8 (cross-chain patterns): separable; references previous LOOP_DIAGNOSE finding by stable identifier (M1, M3, M6) and current finding by hypothesis name.
- E9 + E10 (candidates + attribution table): aggregation of upstream pieces; cleanly separable as one combined section because the attribution table is the index over candidates.
- E11 (verdict): separable as a top-level summary that references but does not duplicate prior elements.

### Bottom-Up Atom Check

Irreducible atoms:

- prior_path string;
- corrected_path string;
- raw human correction text;
- one Exploration excerpt (prior Coarse Scan list, five navigation-specific files);
- one Exploration excerpt (corrected Cycle 1, includes cultural-norm corpus);
- one Sensemaking excerpt (prior Phase 1 / Foundational Principles "Do not materialize…");
- one Sensemaking excerpt (corrected Phase 1 / Foundational Principles "Protocols route; artifacts preserve…");
- one Innovation excerpt (prior six-candidate set);
- one Innovation excerpt (corrected Candidate A "Mandatory Artifact On Operation");
- one Critique excerpt (prior dimension list with Artifact proportionality);
- one Critique excerpt (corrected dimension list with Explicitness fit at weight 5);
- one `_branch.md` Question excerpt (prior "lighter/adaptive way" phrasing);
- one Decomposition Q-tree excerpt (prior Q2 "What output modes…" presupposition);
- previous LOOP_DIAGNOSE candidate identifiers (M1, M3, M4, M6, M7, M8) referenced;
- new candidate identifiers (N1, N2, N3, N4, etc.) introduced;
- per-hypothesis confidence labels;
- per-hypothesis "Why not stronger" rationale;
- per-candidate gate definition;
- per-candidate risk class label;
- diagnostic verdict label.

Atoms group cleanly into the seven pieces. The "scan/cultural-norm corpus" observation appears in both E2's evidence (prior Coarse Scan listed five navigation files, omitted three cultural files) and E3's evidence (B's principle was sourced from the wrong corpus); it is not split because in each location it serves a different role (E2: corpus scan completeness; E3: principle-source verification).

Boundary confidence: high.

## Question Tree

### Question 1 - What Is The Correction Chain Summary?

Verification criteria:

- [ ] Names prior_path with the full inquiry folder path.
- [ ] Names corrected_path with the full inquiry folder path.
- [ ] Quotes or faithfully excerpts the human correction.
- [ ] States what changed from prior result to corrected result in 1-2 sentences (mechanism prioritization shift, not content overturn).
- [ ] Notes that this is the second LOOP_DIAGNOSE run with reference to the previous finding.

### Question 2 - What Is The Hypothesis A Package (Exploration Corpus Scan Gap)?

Verification criteria:

- [ ] Affected stage = Exploration.
- [ ] Shortcoming type names "Coarse Scan list omitted cultural-norm corpus" or equivalent (Premature Depth failure mode in possibility/artifact mode).
- [ ] Evidence from prior inquiry cites prior `exploration.md` Coarse Scan list (five navigation-specific files).
- [ ] Evidence from corrected inquiry cites corrected `exploration.md` Cycle 1 explicitly listing `artifact_materialization.md`, `outcome_review.md`, `alignment_control.md`.
- [ ] Evidence from human correction cites "this is not how this codebase work" as cultural-norm signal.
- [ ] Confidence = HIGH.
- [ ] "Why not stronger" notes that even with the corpus loaded, B's principle-interrogation step had independent responsibility.
- [ ] Maintenance candidate (N1) identified.
- [ ] Evaluation gate identified (observable in next 1-3 codebase-context Exploration runs).

### Question 3 - What Is The Hypothesis B Package (Sensemaking Foundational Principle Wrong)?

Verification criteria:

- [ ] Affected stage = Sensemaking.
- [ ] Shortcoming type names "Phase 1 / Foundational Principles adopted inverse axiom" or equivalent (Premature Stabilization on principle layer).
- [ ] Evidence from prior inquiry cites prior `sensemaking.md` Phase 1 / Foundational Principles ("Do not materialize artifacts unless they carry durable value") plus Phase 3 ambiguity set (none of which interrogated the principle).
- [ ] Evidence from corrected inquiry cites corrected Phase 1 / Foundational Principles ("Protocols route; artifacts preserve operational state") and corrected SV2 ("issue is not 'file or no file' in the abstract").
- [ ] Evidence from human correction cites "We are enforcing explicitness and putting md files all the time."
- [ ] Confidence = HIGH.
- [ ] "Why not stronger" notes that A (corpus omission) is upstream of B causally, but B has independent culpability via Phase 3 / Ambiguity Collapse.
- [ ] Maintenance candidate identified — extends previous LOOP_DIAGNOSE M1 to cover Foundational Principles in addition to Constraints (M1+N2 unified rule).
- [ ] Evaluation gate identified.

### Question 4 - What Is The Hypothesis C Package (Innovation Candidate-Set On One Axis)?

Verification criteria:

- [ ] Affected stage = Innovation.
- [ ] Shortcoming type names "Candidate space split on storage axis only; missing operation-trigger axis" or equivalent.
- [ ] Evidence from prior inquiry cites prior `innovation.md` Candidate Set (A: Always Save / B: Inline Only / C: Adaptive / D: Merge / E: Registry / F: Edit Old Maps) — all storage-axis variants except E and F which are out of scope.
- [ ] Evidence from corrected inquiry cites corrected Candidate A "Mandatory Artifact On Operation" verbatim.
- [ ] Evidence from human correction cites the user's distinct framing of necessity vs storage.
- [ ] Confidence = HIGH.
- [ ] "Why not stronger" notes mixed attribution (largely inherited from B's anchor; mechanism execution itself was bounded).
- [ ] Maintenance candidate (N3) identified.
- [ ] Evaluation gate identified.

### Question 5 - What Is The Hypothesis D Package (Critique Dimension Weighting / Missing Explicit-Culture-Fit)?

Verification criteria:

- [ ] Affected stage = Critique.
- [ ] Shortcoming type names "Wrong Dimensions failure mode; dimension list missing project-specific cultural-fit axis."
- [ ] Evidence from prior inquiry cites prior `critique.md` Dimensions (Source authority, Route-memory usefulness, Artifact proportionality, Cross-session durability, Boundary clarity, Implementation risk) — no Explicitness fit.
- [ ] Evidence from corrected inquiry cites corrected Dimensions With Weights (Explicitness fit weight 5, Anti-staleness 5, Historical integrity 5, Anti-bloat 4) — Explicitness fit added at top weight.
- [ ] Evidence from human correction cites "this is not how this codebase work" as direct cultural-fit signal.
- [ ] Confidence = HIGH.
- [ ] "Why not stronger" notes mixed attribution between independent dimension articulation and inherited candidate set.
- [ ] Maintenance candidate (N4) identified.
- [ ] Evaluation gate identified.

### Question 6 - What Is The Framing Observation (D-prime, Loop Framing)?

Verification criteria:

- [ ] Stage label = "loop framing" per LOOP_DIAGNOSE taxonomy.
- [ ] Shortcoming type names "Question phrasing pre-encoded directional bias 'lighter/adaptive way'."
- [ ] Evidence from prior inquiry cites prior `_branch.md` Question phrasing.
- [ ] Evidence from human correction is partly the user's "think harder" prompt without comparator surfacing — same family as previous chain's D-prime observation.
- [ ] Evidence from corrected inquiry cites corrected `_branch.md` Question (no directional bias; structured re-ask of design questions).
- [ ] Confidence = MEDIUM-HIGH.
- [ ] "Why not stronger" notes one inferential step (downstream stages had independent opportunity to recognize and correct).
- [ ] Maintenance candidate references previous LOOP_DIAGNOSE M4 (deferred); this run's evidence accumulates M4's revival case.

### Question 7 - What Are The Propagation Hypotheses (Decomposition + Innovation Mechanism)?

Verification criteria:

- [ ] Both stages identified by name (Decomposition, Innovation mechanism execution).
- [ ] Decomposition shortcoming names Q-tree Q2 presupposition that storage axis is separable.
- [ ] Innovation mechanism shortcoming names Inversion mechanism's bounded output (going only as far as "save = escalation, inline = default").
- [ ] Each labeled MEDIUM confidence with explicit "largely inherited from B."
- [ ] Each tied to a propagation observation rather than an independent maintenance candidate.

### Question 8 - What Are The Cross-Chain Pattern Observations (P1, P2)?

Verification criteria:

- [ ] Names P1 (Sensemaking Phase 1 axiom items adopted without testing) and P2 (Critique dimension list missing project-specific risk axis).
- [ ] Names the chain count for each pattern (2 of 3+ for both).
- [ ] References the previous LOOP_DIAGNOSE finding's Hypothesis B and Hypothesis C as the first chain instance.
- [ ] Names the LOOP_DIAGNOSE Step 6 threshold ("5-10 stable findings" before protocol-level changes) as the gate.
- [ ] Tier label = Monitoring (NOT ACTIONABLE).
- [ ] Notes that P1 and P2 strengthen but do not promote previous LOOP_DIAGNOSE M1, M3, M6.

### Question 9 - What Are The Maintenance Candidates And Failure Attribution Summary?

Verification criteria:

- [ ] At least one new candidate (N) per primary hypothesis A, C, D; at least one strengthened previous candidate (M extension) for B; framing references previous M4.
- [ ] Each candidate names: what should change; which file/protocol; risk class (low/medium/high); expected benefit; evaluation gate; whether it should become a branch experiment.
- [ ] Candidates avoid broad fundamentals rewrites.
- [ ] Compositional identifier scheme: new candidates use N1-Nx; previous candidates retain M1-M9; cross-chain patterns use P1, P2.
- [ ] Failure Attribution Summary table covers: Exploration, Sensemaking, Innovation, Critique, Loop framing, Decomposition propagation, Innovation mechanism propagation, CONCLUDE (ruled out).
- [ ] Cross-chain row appears in the table at Monitoring tier or in a separate note below the table.

### Question 10 - What Is The Diagnostic Verdict?

Verification criteria:

- [ ] Verdict label = ACTIONABLE-PARTIAL.
- [ ] Best-supported diagnosis names the three-source upstream cascade structure.
- [ ] Strongest maintenance candidate identified by name.
- [ ] Main uncertainty named (independence partition between A and B; cross-chain promotion threshold).
- [ ] Recommended next step is concrete: implement N1, N2/M1+, N3, N4, N7-mirror; continue M8 monitoring; do not promote LOOP_DIAGNOSE to discipline; the third LOOP_DIAGNOSE run may resolve P1/P2 promotion.
- [ ] Verdict is consistent with LOOP_DIAGNOSE Step 4 verdict definitions and Step 5 guardrails.

## Interface Map

| Source Piece | Target Piece | What Flows | Direction |
| --- | --- | --- | --- |
| Q1 (Correction Chain Summary) | Q2-Q10 | path identifiers, raw correction text | one-way |
| Q2 (Hypothesis A) | Q9 (Candidates + Attribution) | Exploration shortcoming → corpus-scan candidate (N1) | one-way |
| Q3 (Hypothesis B) | Q9 | Sensemaking shortcoming → strengthened M1 (anchor-interrogation extended to Foundational Principles) | one-way |
| Q4 (Hypothesis C) | Q9 | Innovation shortcoming → candidate-axis-decoupling candidate (N3) | one-way |
| Q5 (Hypothesis D) | Q9 | Critique shortcoming → explicit-culture-fit dimension candidate (N4) | one-way |
| Q6 (Framing D-prime) | Q9 | Loop framing → previous M4 revival evidence | one-way |
| Q7 (Propagation) | Q9 | propagation observation → "may not need separate candidate if upstream candidate succeeds" | one-way |
| Q8 (Cross-Chain P1, P2) | Q9 | pattern observation → previous M6 revival evidence (still below threshold) | one-way |
| Q2-Q8 | Q9 (Failure Attribution Summary cells) | stage label, shortcoming type, evidence strength, confidence | one-way |
| Q2-Q9 | Q10 (Verdict) | strongest hypothesis name, strongest candidate name, primary uncertainty | one-way |

Hidden-coupling check:

- The verdict (Q10) does not invent new content; it summarizes what Q2-Q9 state.
- Maintenance candidates (Q9) cannot generate new evidence; they reference hypothesis packages.
- The Failure Attribution Summary table reads from each hypothesis's stage label, shortcoming type, evidence strength, and confidence; it does not introduce new attributions.
- Cross-chain observations (Q8) reference previous LOOP_DIAGNOSE candidates by identifier (M1, M3, M6) and current hypotheses by name; they do not introduce protocol-level claims unsupported by chain count.

## Dependency Order

1. Q1 (Correction Chain Summary) — no dependencies; identifies the chain and its place in the LOOP_DIAGNOSE corpus (second run).
2. Q2 (Hypothesis A), Q3 (Hypothesis B), Q4 (Hypothesis C), Q5 (Hypothesis D) — all depend on Q1; can be answered in parallel after Q1.
3. Q6 (Framing D-prime) — depends on Q1; can be answered in parallel with Q2-Q5.
4. Q7 (Propagation) — depends on Q3 (and faintly on Q6); can be drafted after Q3.
5. Q8 (Cross-Chain Patterns) — depends on Q3 and Q5 plus reference to the previous LOOP_DIAGNOSE finding; can be drafted in parallel with Q7 once Q3 and Q5 are stable.
6. Q9 (Candidates + Attribution Summary) — depends on Q2-Q8.
7. Q10 (Diagnostic Verdict) — depends on Q9.

Parallelizable after Q1: Q2, Q3, Q4, Q5, Q6 (mutually independent).

Must wait:

- Q7 should follow Q3.
- Q8 should follow Q3 and Q5.
- Q9 should follow Q2-Q8.
- Q10 should follow Q9.

## Self-Evaluation

### Independence

Pass.

Each question can be answered using disjoint evidence regions. Q2 reads Exploration Coarse Scan; Q3 reads Sensemaking Phase 1 / Phase 3; Q4 reads Innovation candidate set; Q5 reads Critique dimensions; Q6 reads `_branch.md` Question; Q7 reads Decomposition Q-tree and Innovation mechanism outputs; Q8 reads previous LOOP_DIAGNOSE finding plus current hypotheses Q3 and Q5.

### Completeness

Pass.

The ten questions cover what LOOP_DIAGNOSE Step 4 prescribes plus the cross-chain extension required by this being the second LOOP_DIAGNOSE run: Correction Chain Summary, four primary Failure Hypotheses, framing observation, propagation, cross-chain patterns, attribution summary, candidates, verdict.

### Reassembly

Pass.

If all ten questions are answered with verification criteria met, the resulting `finding.md` will satisfy LOOP_DIAGNOSE Step 4's full output contract and add the cross-chain section. The diagnostic verdict will be derivable from per-hypothesis confidence levels, candidate evaluation gates, and cross-chain promotion threshold status.

### Tractability

Pass.

Each question is small enough for a single focused pass. Q2-Q5 are roughly equal in size. Q6 is shorter (one observation). Q7 and Q8 are shorter (paired observations). Q9 is the largest piece due to candidate aggregation; still tractable as one pass.

### Interface Clarity

Pass.

Interfaces are mostly one-way. Hidden-coupling check above lists explicit guards against unsupported downstream claims. Cross-chain references use stable identifiers (M1, M3, M4, M6 from previous LOOP_DIAGNOSE; N1-Nx new in this run; P1, P2 patterns) to prevent identifier drift across runs.

### Balance

Pass with note.

Q9 (candidates + attribution table) carries roughly 1.5x the load of Q2-Q5 because it aggregates across all hypotheses plus cross-chain observations. The imbalance is mild and matches LOOP_DIAGNOSE Step 4's schema. Acceptable.

### Confidence

Pass.

Top-down boundaries (LOOP_DIAGNOSE Step 4 schema + cross-chain extension) and bottom-up atoms (irreducible evidence excerpts from prior + corrected + previous LOOP_DIAGNOSE) agree on the partition. The most coupled pair (each hypothesis package + its derived candidate) is preserved adjacent in the question tree by routing both through Q9's aggregation step.
