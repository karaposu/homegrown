# Critique — Metadata-Recency Addition to /surfacing

## User Input

(from `_branch.md`) What addition to surfacing.md — at what exact location — would let surfacing use mtime as a signal during traversal, while protecting against (a) old-as-idle AND (b) silent down-weighting, such that existing behavior is enriched not regressed?

## Phase 0 — Dimension Construction

### Extracted from sensemaking + decomposition

**Anchors that become dimensions:**

- Constraints C1–C7 (no filter; no monotonic demotion; no recency-only mode; existing behavior reachable; asymmetric-failure preservation; self-contained spec; taxonomy preserved).
- Foundational Principles FP1–FP3 (metadata-as-signal-not-verdict; mtime-missingness first-class; recency-as-descriptive-not-judgment).
- Decomposition self-eval dimensions (Independence, Completeness, Reassembly, Tractability, Interface clarity, Balance, Confidence).

### Default dimensions (per spec)

| Dimension | What it asks | Weight | Source |
|---|---|---|---|
| Correctness | Does this actually solve the inquiry's question (let surfacing use mtime as signal while protecting against regression)? | HIGH | meaning-node |
| Coherence | Does this fit with surfacing.md's existing structure / conventions / vocabulary without breaking? | HIGH | structural points |
| Feasibility | Can this actually be implemented as a spec edit? | LOW–MEDIUM | constraint (the edit is mechanical) |
| Completeness | Does this address the full question (signal capture + anti-regression + reportability) or only part? | HIGH | meaning-node |
| Robustness | Does this survive edge cases (no-mtime items; re-invocation; possibility-mode items)? | HIGH | constraints + asymmetric-failure |
| Elegance | Is this the simplest sufficient solution, or is it over-engineered? | MEDIUM | foundational principle (minimum complexity) |

### Project-specific risk dimensions (per refinement note)

The candidates involve project artifacts (surfacing.md spec). Project-specific risk dimensions required:

| Dimension | What it asks | Weight |
|---|---|---|
| **Anti-regression preservation** | Does the candidate preserve the existing recency-blind behavior as still-reachable? | HIGH |
| **Self-containedness** | Does the candidate avoid outbound pointers from surfacing.md to docs/discipline_design_history? | HIGH |
| **Schema additivity** | Does the candidate add fields rather than mutating existing semantics? | HIGH |
| **Asymmetric-failure inheritance** | Do the failure modes anchor correctly to §4.4? | HIGH |
| **Convention conformance** | Does the addition use the Step Refinement primitive (italic prefix, 4-element shape, failure-anchored subtype) per `docs/step_refinement.md`? | HIGH |
| **Placement-convention conformance** | Does each addition land at the location the placement convention determines (operation-scope → Component; failure-only-form → Failure Mode; etc.)? | HIGH |

### Dimension validation

All 12 dimensions are relevant to the candidate set. No irrelevant dimension applied. The project-specific risk axes (the bottom 6) carry most of the load because the inquiry IS a spec edit; the default dimensions (top 6) frame the question's conceptual fit.

---

## Phase 1 — Landscape Construction

### Viable region

The intersection of:
- Anti-regression preservation = PASS (recency-blind reachable)
- Self-containedness = PASS (no outbound pointers)
- Schema additivity = PASS (additions, not mutations)
- Asymmetric-failure inheritance = PASS (failure modes cite §4.4)
- Convention conformance = PASS (italic-prefix Step Refinement + standard failure-mode columns)
- Placement-convention conformance = PASS (each addition at its operation/step/failure-only-form home)
- Correctness ≥ MEDIUM, Coherence ≥ HIGH

### Dead region

Any candidate that:
- Filters items by mtime (violates C1 + Anti-regression).
- Demotes relevance tag by mtime (violates C2 + asymmetric-failure).
- Creates a recency-only mode (violates C3).
- Adds outbound pointers (violates Self-containedness).
- Commits numeric bands at spec time (violates Phase/Calibration-State perspective from sensemaking).
- Introduces a new primitive (violates KI4 / taxonomy preservation).

### Boundary region

- Candidates with MEDIUM Elegance because they touch multiple sections (could be perceived as over-spread).
- Candidates that succeed structurally but where wording could be tightened.

### Unexplored region

- Per-source policies (e.g., different annotation handling for filesystem vs none): explored at W1 (W1a covers both with `{source, value}`); no remaining variant.
- Numeric band thresholds: KILLED at sensemaking (deferred); revival trigger preserved.
- Layered metadata pattern as template for OTHER channels (file size, git-blame): RESEARCH FRONTIER; not within current candidate space.

---

## Phase 2 — Adversarial Evaluation

### Candidate 1: P1 / W1a (signal-source-aware annotation `{source, value}`)

**Prosecution:**
- *Dimension-level:* The `{source, value}` shape is more verbose than a flat field (`mtime` only). Elegance: MEDIUM.
- *User-perspective:* The user said "last datetime of edit" — they may have expected a simple datetime, not a structured record. The `source: none` value adds cognitive overhead.
- *Specific failure-case:* If a file's mtime is "0" (epoch — possible on some filesystems for never-modified files), what does the annotation report? The principal candidate emits the literal epoch datetime; downstream consumers might misinterpret. Specification-gap probe: how is epoch handled?
- *Specification-gap probe:* The principal does not specify timezone handling. ISO8601 includes timezone, but if the filesystem returns a naive local time, what's emitted?

**Defense:**
- *Foundation:* The `{source, value}` shape is forced by Ambiguity #4 (mandatory per-item + `no-mtime-available` first-class). Without the `source` declaration, missingness can't be reported without ambiguity (a `null` value alone could mean "no mtime" OR "mtime not yet read").
- *Coherence:* The shape mirrors the existing State Summary `populated-at: <timestamp>` pattern and the Workspace-populated-status structure (`{populated, populated-at, extent}`) — surfacing.md already uses small-typed-record-style values.
- *Robustness:* The `source: none` case is exactly what the asymmetric-failure principle demands at the recency axis — missingness is information, reported as a first-class value.
- *Mechanism independence:* Three independent mechanisms (Combination, Absence Recognition, Domain Transfer) converged on this shape.

**Collision:** The prosecution's verbosity objection is genuine but minor; the verbosity is the cost of correct missingness handling. The epoch and timezone specification-gaps are real but downstream-implementation-level — the spec should add a one-line note ("emit ISO8601 datetime in UTC; epoch is a literal value, never sentinel") to close them. With the note, defense survives.

**Position:** Viable. Tag: SURVIVE.

**Verdict:** **SURVIVE with REFINE on specification-gap.** Add one line to the §2.1 Step Refinement note: "emit ISO8601 datetime in UTC when source = filesystem; the value is the filesystem's reported mtime verbatim — sentinel values (e.g., epoch) are not interpreted."

### Candidate 2: P1 / W2c (per-region State Summary derivation)

**Prosecution:**
- *Dimension-level:* Per-region aggregation may not be the right granularity if the consumer wants per-item details (which they get from Trace — but redundancy?). Elegance: MEDIUM.
- *User-perspective:* The user did not ask for per-region; they asked for the signal. Are we over-engineering the State Summary?
- *Specific failure-case:* What if a region has only one item? The "newest" and "oldest" mtimes are identical. The aggregate adds noise.

**Defense:**
- *Foundation:* The State Summary §5.5 already has the `Coverage map` field reporting per-region status. Per-region recency is structurally analogous — region is the unit at this layer.
- *Coherence:* Matches the existing per-region patterns at §5.5 (coverage map; confirmed-absent regions).
- *Robustness:* For single-item regions, the redundancy is benign (newest = oldest = the one item's mtime); no incorrectness.

**Collision:** The user-perspective objection has weight but is dominated by the coherence-with-existing-pattern argument. The single-item-region noise is acceptable (the aggregate still reports usefully on multi-item regions).

**Position:** Viable. Tag: SURVIVE.

**Verdict:** SURVIVE as-is.

### Candidate 3: P1 / W3a (raw Telemetry counts)

**Prosecution:**
- *Dimension-level:* Low novelty (Innovation tagged this LOW). Could the telemetry omit these and let consumers derive from the State Summary?
- *Specification-gap probe:* What's the EXACT counting rule? Counts of items where `source: filesystem` vs `source: none`?

**Defense:**
- *Foundation:* Telemetry §5.6 already reports counts of items at each relevance level — adding recency-aware counts is a natural extension at the same surface.
- *Elegance:* Two integers is the minimum-sufficient form.

**Collision:** Specification-gap is fillable in one line. The "could omit" objection is overcome by Telemetry's purpose (fast pulse-check; consumers don't always read the State Summary).

**Position:** Viable. Tag: SURVIVE.

**Verdict:** **SURVIVE with REFINE.** Specify counting rule: "items_with_mtime = count of items where `recency annotation.source = filesystem`; items_without_mtime = count of items where `recency annotation.source = none`."

### Candidate 4: P2 / Step Refinement note text + W4a (principle at §2.1)

**Prosecution:**
- *Dimension-level:* The note is long (~15 lines). Could be tighter.
- *User-perspective:* The user explicitly wanted a SECTION ("and maybe surfacing discipline should have some section regarding this?"). The Step Refinement note IS a sub-section within §2.1, but is it visible as "a section about this"? A reader scanning the table of contents wouldn't see a top-level entry.
- *Specific failure-case:* If a future contributor reads §2.1 quickly and skips the refinement note, they might add code that violates the principle (mtime-as-filter). The italic-prefix is visually distinguishable, but the rule isn't gated.
- *Specification-gap probe:* The rule says "capture mtime alongside identifier." For possibility-mode items, what's the source mechanism for the "no-mtime-available" determination? The rule should specify: "an item is `source: none` when it has no filesystem path — i.e., a candidate-generated item in possibility mode or an externally-referenced item without local file."

**Defense:**
- *Foundation:* The Step Refinement format is the project's standard primitive for this kind of rule (per `docs/step_refinement.md`). Using it puts the rule in the right form.
- *Convention conformance:* italic prefix + bold name + body + anchor-link — all four elements present.
- *Placement-convention conformance:* the rule applies to ALL instances of Item-enumeration → operation-level scope → Component sub-section. Correct placement.
- *Anti-regression preservation:* The "annotation is a signal, not a verdict" sentence directly addresses both regression risks.

**Collision:** The user's "section" framing was loose; a sub-section within §2.1 IS the canonical home per the placement convention; promoting it to a top-level section would violate convention. The skim-reader risk is mitigated by the anchor-link bridge from §4.2 (FM#8 + FM#9 link back). The specification-gap on "source: none" determination is real and should be filled.

**Position:** Viable. Tag: REFINE.

**Verdict:** **REFINE.** Add a one-line determination-mechanism sentence to the rule: "An item has `source: none` when it has no filesystem path — i.e., a candidate-generated item in possibility mode (per §3.1) or an externally-referenced item without local file."

### Candidate 5: P2 / W4c (one-line NOT-list addition at §1.3)

**Prosecution:**
- *Dimension-level:* Adding a 9th NOT-list entry could be perceived as scope-creep on the discipline's identity statement (§1.3 is about IDENTITY).
- *Elegance:* Is this duplicate with the §2.1 principle?

**Defense:**
- *Foundation:* §1.3 NOT-list entries are about what surfacing DOES NOT PRODUCE. "Verdict-shaped use of metadata" is exactly such an exclusion: surfacing produces the annotation as a signal; it never produces a verdict from it. The exclusion is structurally analogous to existing NOT-list entries (e.g., "Adjudication of which item to act on next").
- *Coherence:* The shape (one row with "Excluded" + "Intrinsic ground" columns) is the existing §1.3 table shape. Additive, not disruptive.
- *Not duplicate:* The §2.1 rule says HOW to capture and the principle behind it; the §1.3 NOT-list entry says what surfacing structurally does not do with the annotation. Different surfaces, different roles. Cross-referenced via the principle name.

**Collision:** The duplication objection is the strongest. The defense is that the NOT-list is project-facing identity, while the §2.1 rule is operation-facing process — different audiences, different angles on the same principle.

**Position:** Viable. Tag: SURVIVE.

**Verdict:** SURVIVE.

### Candidate 6: P3 / FM#8 Recency-Equates-Idleness

**Prosecution:**
- *Dimension-level:* The Recognition column requires a downstream consumer or surfacing itself to do something detectable. Surfacing itself doesn't reduce relevance by mtime (the addition forbids it); so the failure mode primarily detects DOWNSTREAM misuse. Is that within surfacing.md's scope?
- *User-perspective:* The user named "idle artifacts in the codebase" — the failure mode name "Recency-Equates-Idleness" might read as "treating recency as IDLENESS" which is the symmetric inverse. Is the name clear?
- *Specific failure-case:* Consider an inquiry where a sensemaking output (downstream) judges relevance using mtime alone, ignoring the surfacing-emitted tag. Does FM#8 catch this? The Recognition column says "A consumer of surfacing's output (or surfacing itself in a hypothetical lapse) treats `recency annotation` values as a proxy for relevance" — YES, this Recognition catches the downstream case.

**Defense:**
- *Foundation:* The LAYER 1 failure modes per surfacing.md §4.2 include modes where "downstream filters" the symptom (FM#2 Surfaced-irrelevance has "Downstream filtering" in its Corrective). FM#8 is structurally analogous: downstream MIS-filtering by mtime is a real recoverable surface.
- *Asymmetric-failure inheritance:* The Corrective cites §4.4 explicitly and re-applies the asymmetric-failure principle. Robust.
- *Convention conformance:* The Mode/Recognition/Corrective shape matches existing §4.2 entries.

**Collision:** The user-perspective objection on naming has merit. Test: would a developer scanning the failure-mode list parse "Recency-Equates-Idleness" correctly? The name's structure is `<recency>` + `<equates>` + `<idleness>` — read as "treating recency-as-equivalent-to-idleness." The X-Equates-Y pattern matches the existing failure-mode naming convention (e.g., "Workspace-artifact desync" reads X-Y-desync). Defense survives but barely.

**Position:** Viable. Tag: SURVIVE.

**Verdict:** SURVIVE.

### Candidate 7: P3 / FM#9 Recency-Bias-Filter

**Prosecution:**
- *Dimension-level:* The mode is symmetric with FM#8 but addresses a different mechanism (filter/gate rather than relevance-conflation). Is the distinction load-bearing?
- *Specific failure-case:* If a consumer applies BOTH (i.e., treats mtime as relevance AND filters by it), do they fire FM#8 or FM#9? The Recognition columns must let the diagnostic distinguish.

**Defense:**
- *Foundation:* The two mechanisms ARE different — Innovation's "Inversion to one mode" candidate was rejected on structural grounds because Correctives differ. FM#8's Corrective is "restore content-driven relevance separation"; FM#9's Corrective is "re-traverse with mtime-blindness restored." These are not the same recovery operation.
- *Asymmetric-failure inheritance:* Both anchor to §4.4; FM#9 specifically calls out the false-negative pathway that §4.4 classifies as the worse failure.

**Collision:** The combined-misuse case (both fire) is handled by the failure-mode list's existing semantics — multiple modes can fire concurrently; each Corrective applies in parallel. No structural conflict.

**Position:** Viable. Tag: SURVIVE.

**Verdict:** SURVIVE.

---

## Phase 3 — Verdict + Constructive Output

| # | Candidate | Verdict | Constructive output |
|---|---|---|---|
| 1 | W1a annotation shape | SURVIVE with refinement | Add ISO8601/UTC + epoch handling note |
| 2 | W2c State Summary derivation | SURVIVE | — |
| 3 | W3a Telemetry counts | SURVIVE with refinement | Specify counting rule |
| 4 | P2 Step Refinement + W4a | REFINE | Add `source: none` determination-mechanism sentence |
| 5 | W4c NOT-list addition | SURVIVE | — |
| 6 | FM#8 Recency-Equates-Idleness | SURVIVE | — |
| 7 | FM#9 Recency-Bias-Filter | SURVIVE | — |

**No KILLs.** All 7 candidates survived adversarial testing (one as REFINE-now, two as SURVIVE-with-minor-refinement, four as SURVIVE-as-is).

---

## Phase 3.5 — Assembly Check

**The assembled architecture (post-refinements):**

1. **§1.3 NOT-list** — one new exclusion row anchoring the orthogonality framing.
2. **§1.4 Vocabulary** — one new row defining `recency annotation`.
3. **§2.1 Item-enumeration** — one Step Refinement note ("Recency annotation capture") with:
   - capture rule (alongside identifier; during Item-enumeration)
   - emission rule (at Output-shaping; mandatory per item; `source: none, value: null` for items without filesystem backing)
   - determination-mechanism sentence (per Critique candidate 4 refinement)
   - format note (ISO8601 UTC; epoch literal — per Critique candidate 1 refinement)
   - the principle "metadata-as-signal-not-verdict" stated in the body
   - failure-anchored anchor-link sentence citing FM#8 and FM#9 by full name
4. **§4.2 LAYER 1 failure modes** — two new entries (FM#8 + FM#9), both anchored to §4.4 in their Correctives.
5. **§5.4 Traversal Trace** — one new column with field name + value description.
6. **§5.5 State Summary** — one new row with per-region recency distribution.
7. **§5.6 Telemetry** — one new bullet pair with counting rule (per Critique candidate 3 refinement).

**Emergent value:** the seven surfaces form a defense-in-depth pattern: the principle stated once at §2.1 is enforced via failure modes (§4.2), exposed via schema (§5.4 + §5.5 + §5.6), and framed via identity (§1.3 NOT-list). Removing any one weakens the others; together they protect the metadata-as-signal-not-verdict principle from drift across all spec surfaces.

---

## Phase 4 — Coverage + Convergence

### Coverage map

| Region | Coverage |
|---|---|
| Annotation shape (W1) | Fully evaluated; 1 survivor (W1a) of 4 candidates |
| State Summary derivation (W2) | Fully evaluated; 1 survivor (W2c) of 4 candidates |
| Telemetry form (W3) | Fully evaluated; 1 survivor (W3a) of 3 candidates |
| Principle placement (W4) | Fully evaluated; 2 complementary survivors (W4a + W4c) of 3 candidates |
| Step Refinement entry | 1 survivor (with REFINE) |
| Failure mode entries | 2 survivors (FM#8 + FM#9 both SURVIVE) |
| Intervention shape (per-piece Inversion) | Fully evaluated; ADD-CONTENT survives for all 3 pieces |
| Failure-mode count (1 vs 2 vs 3) | Evaluated; 2-mode survives |

### Convergence

- Dimensions are stable (Phase 0 not re-run during evaluation).
- Adversarial strength: STRONG (every candidate received prosecution + defense + collision; user-perspective, specific-failure-case, and specification-gap depth-axes applied where relevant).
- Landscape stability: STABLE (no candidate moved between regions during evaluation; no dimension produced only noise).
- Clean SURVIVE exists: YES — the assembled set is a clean SURVIVE-with-minor-refinements; no top-level KILL or REFINE on the assembled architecture.
- Failure modes observed: none of the seven critique-internal failure modes (Wrong dimensions, Rubber-stamping, Nitpicking, Dimension blindness, False convergence, Evaluation drift, Self-reference collapse) fired.

### Signal

**TERMINATE** with ranked survivors. The ranking:

1. **P2 Step Refinement + W4a (principle host)** — load-bearing for the entire addition; without it, the other surfaces have no anchor.
2. **FM#8 + FM#9** — load-bearing for the anti-regression guarantee.
3. **W1a + W2c + W3a + §1.4 vocab + §1.3 NOT-list** — schema and framing layers; mutually-reinforcing but secondary to the principle and failure modes.

All seven survivors are part of the answer; no single one is the answer alone.

---

## Convergence Telemetry

- **Dimension coverage:** 12 dimensions (6 default + 6 project-specific risk); all applied to each candidate.
- **Adversarial strength:** STRONG.
- **Landscape stability:** STABLE.
- **Clean SURVIVE:** YES (assembled architecture).
- **Failure modes observed:** none.
- **Output:** PROCEED.

## Self-Assessment

PROCEED to CONCLUDE. The 7 survivors form a coherent, multi-surface, mutually-reinforcing spec edit. Three of them carry minor refinements (Candidates 1, 3, 4) that should be incorporated into the finding's MUST list. The KILLED alternatives are explicit with structural grounds. The DEFERRED items (numeric bands) and RESEARCH FRONTIER (layered metadata-signal template for other channels) are preserved with revival triggers.
