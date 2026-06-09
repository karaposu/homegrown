# Decomposition: Tidy Loop Failure Attribution

## User Input

`devdocs/inquiries/2026-04-27_tidy_loop_failure_attribution/_branch.md`

## 1. Coupling Map

### Cluster A: Premise Formation

Elements:

- Exploration's "Folder Identity Is Load-Bearing" signal.
- Exploration's incomplete scan of architecture and archive docs.
- Sensemaking's "path stability is a hard constraint" anchor.
- Sensemaking's "canonical flat store" stabilization.

Coupling is strong. Exploration gave Sensemaking a signal; Sensemaking made it decisive.

### Cluster B: Structural Encoding

Elements:

- Decomposition's "Canonical Folder Identity" cluster.
- Decomposition's storage/view boundary.
- Decomposition's dependency order: stable storage -> no date prefixes -> README.

Coupling is strong with Cluster A. Once Sensemaking stabilized the wrong model, Decomposition made it look structurally necessary.

### Cluster C: Candidate Suppression

Elements:

- Innovation's seed constraint: do not break canonical inquiry paths.
- Date-prefix candidates downgraded.
- Physical archive candidates downgraded.
- Manual README promoted.

Coupling is moderate-high with Cluster B. Innovation still generated better candidates, but the inherited frame suppressed them.

### Cluster D: Evaluation Lock-In

Elements:

- Critique's Path stability = Critical.
- Migration cost = High.
- No dimension for canonical/provenance correctness.
- No dimension for AI-visible recency.
- No dimension for manual index upkeep.

Coupling is strong with all previous clusters. Critique turned a premise into verdict machinery.

### Cluster E: Finalization And Action

Elements:

- CONCLUDE final finding.
- Manual README implementation.
- Later supersession by storage-policy correction.

Coupling is downstream. It finalized the result but did not create the root premise.

## 2. Boundary Detection

Natural failure boundaries:

1. **Bad input signal boundary:** Exploration should have found more evidence before labeling path stability confirmed.
2. **Bad model boundary:** Sensemaking should have tested "canonical vs provenance."
3. **Bad topology boundary:** Decomposition should have separated active/cold and canonical/provenance.
4. **Bad candidate-frame boundary:** Innovation should have challenged the inherited constraint.
5. **Bad evaluation boundary:** Critique should have validated dimensions before verdicts.
6. **Bad finalization boundary:** CONCLUDE should have preserved uncertainty if the core premise was fragile.

The strongest boundary is between premise formation and downstream propagation. Sensemaking sits at that boundary.

## 3. Bottom-Up Validation

Atomic evidence:

- The old Exploration says path stability is confirmed, but the corrected finding cites architecture evidence that inquiries are persistence/provenance.
- The old Sensemaking explicitly says `devdocs/inquiries/` is a canonical flat store.
- The old Decomposition names "Canonical Folder Identity."
- The old Innovation names the stabilized constraint: do not break canonical inquiry paths.
- The old Critique makes Path stability Critical and kills physical archive/date-prefix options.

The bottom-up evidence validates the top-down chain:

```text
Exploration signal -> Sensemaking model -> Decomposition topology -> Innovation constraint -> Critique dimensions -> CONCLUDE finding
```

## 4. Question Tree

### Q1: Where did the bad premise enter?

Verification criteria:

- [ ] Identify earliest artifact containing the premise.
- [ ] Distinguish signal introduction from model stabilization.

Answer: Exploration introduced it; Sensemaking stabilized it.

### Q2: Which discipline is root cause?

Verification criteria:

- [ ] Identify which discipline should have tested the premise.
- [ ] Show evidence from that discipline's output.

Answer: Sensemaking is root cause because it should have tested the canonical/provenance ambiguity and instead resolved it incorrectly with high confidence.

### Q3: Which discipline should have caught the failure?

Verification criteria:

- [ ] Identify which discipline validates candidates and dimensions.
- [ ] Show wrong-dimension evidence.

Answer: Critique should have caught it. It built the wrong evaluation landscape.

### Q4: Which disciplines propagated rather than caused?

Verification criteria:

- [ ] Identify downstream outputs that follow the wrong premise.
- [ ] Avoid over-blaming local coherence.

Answer: Decomposition and Innovation propagated the model. Decomposition encoded it as topology; Innovation generated inside it.

### Q5: What exact mistakes should be recorded?

Verification criteria:

- [ ] List concrete mistakes, not vague "bad reasoning."
- [ ] Tie each mistake to a discipline and evidence.

Answer:

- Exploration: incomplete artifact scan and false confidence.
- Sensemaking: wrong anchor, anchor dominance, premature ambiguity collapse.
- Decomposition: wrong coupling map and missing active/cold boundary.
- Innovation: early frame lock and underdevelopment of better candidates.
- Critique: wrong dimensions and weak adversarial test of README survivor.
- CONCLUDE: amplified wrong result.

## 5. Interface Map

| Source Piece | Target Piece | Flow |
|---|---|---|
| Exploration signal | Sensemaking anchors | "Folder identity is load-bearing" becomes a constraint. |
| Sensemaking model | Decomposition topology | "Canonical flat store" becomes "Canonical Folder Identity." |
| Decomposition topology | Innovation seed | Stable storage becomes the constraint for generated candidates. |
| Innovation candidates | Critique landscape | Date/archive candidates arrive already weakened. |
| Critique verdict | CONCLUDE finding | README + status hygiene becomes the final policy. |
| Corrected finding | Failure attribution | Reveals which assumptions were wrong. |

## 6. Dependency Order

For understanding the failure:

1. Compare corrected finding to prior final finding.
2. Find the first appearance of corrected-away premise.
3. Trace the premise through each discipline output.
4. Separate root cause from propagation.
5. Identify missed catch.
6. Derive improvement targets.

For improving the system:

1. Improve Exploration artifact coverage.
2. Improve Sensemaking definitional checks.
3. Improve Decomposition boundary checks for lifecycle/canonicality.
4. Improve Innovation inherited-constraint challenge.
5. Improve Critique dimension validation.
6. Improve CONCLUDE uncertainty preservation.

## 7. Self-Evaluation

| Dimension | Result | Reason |
|---|---|---|
| Independence | PASS | Each discipline's failure can be described separately. |
| Completeness | PASS | Covers all MVL+ stages and CONCLUDE. |
| Reassembly | PASS | Pieces reconstruct the correction chain. |
| Tractability | PASS | Each failure is concrete and tied to evidence. |
| Interface clarity | PASS | Propagation flow is explicit. |
| Balance | PASS | Root cause and missed catch are distinguished from propagation. |
| Confidence | HIGH | The old artifacts directly show the premise moving through the loop. |

## Decomposition Output

The failure has six pieces:

1. **Exploration introduced the bad signal.**
2. **Sensemaking made it the root model.**
3. **Decomposition encoded it as structure.**
4. **Innovation accepted it as a generation/evaluation constraint.**
5. **Critique made it a critical dimension and failed to catch it.**
6. **CONCLUDE finalized and operationalized it.**
