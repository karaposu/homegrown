# Decomposition: Loop Diagnose - Past Navigation Memory Index Before Search

## Coupling Map

### Major Clusters

#### Cluster A - Correction Chain Evidence

Elements:

- prior inquiry artifacts;
- corrected inquiry artifacts;
- human correction;
- reproduced active-tree search signal.

Coupling:

- Strong coupling between prior recommendation and corrected rejection.
- Strong coupling between human correction and corrected inquiry frame.
- Moderate coupling between reproduced search and corrected inquiry evidence.

Boundary:

Evidence must be separated from diagnosis. Evidence says what happened; diagnosis infers why it likely happened.

#### Cluster B - Failure Hypotheses

Elements:

- Exploration under-probed search-as-primary;
- Sensemaking over-weighted explicit maintained artifact;
- Innovation failed to generate the strongest protocolized-search candidate;
- Critique missed fallback-as-primary prosecution;
- Decomposition inherited an index-centered frame.

Coupling:

- Strong coupling between Sensemaking, Innovation, and Critique hypotheses.
- Moderate coupling between Exploration and later-stage hypotheses.
- Low coupling between exact stage attribution and final maintenance candidate, because the candidate can target the cross-stage weakness.

Boundary:

Hypotheses should remain separate from maintenance actions. A hypothesis needs evidence and confidence before it can drive a source change.

#### Cluster C - Mechanism Boundary

Elements:

- maintained global index;
- deterministic active-tree search;
- protocolized discovery search;
- optional run-local candidate report;
- Route Memory Review interpretation;
- future index revival triggers.

Coupling:

- Strong coupling between search contract and candidate report output mode.
- Strong coupling between discovery and Route Memory Review interface.
- Low coupling between current v1 search and future global index, if revival triggers are explicit.

Boundary:

Candidate discovery must stay separate from route-memory interpretation.

#### Cluster D - Maintenance Candidate Space

Elements:

- critique check for maintained registries with fallback scans;
- innovation prompt to generate protocolized-search alternatives;
- sensemaking distinction between explicit artifact and explicit mechanism;
- evaluation gates and risk class;
- deferral criteria for broad protocol changes.

Coupling:

- Strong coupling between maintenance candidates and evidence confidence.
- Moderate coupling between candidate wording and affected file location.
- Low coupling between this one diagnostic and broad fundamentals changes.

Boundary:

Maintenance candidates must be narrow and gateable. Broad MVL+ rewrites are outside the evidence strength.

### Coupling Topology

High-coupling region:

```text
prior fallback scan
  -> corrected Discovery Search
  -> failure hypothesis about fallback-as-primary
  -> critique/innovation maintenance candidates
```

Moderate-coupling region:

```text
Homegrown explicitness
  -> maintained artifact bias
  -> sensemaking maintenance candidate
```

Low-coupling region:

```text
future generated/global index
  -> revival triggers
  -> monitoring only
```

## Boundary Validation

### Top-Down Boundary Check

The natural boundaries are:

1. Evidence coverage.
2. Failure attribution.
3. Mechanism analysis.
4. Maintenance candidate generation.
5. Evaluation gate design.
6. Diagnostic verdict.

These boundaries follow LOOP_DIAGNOSE's output contract: correction chain summary, failure hypotheses, attribution table, maintenance candidates, verdict.

### Bottom-Up Atom Check

Irreducible atoms:

- prior had scan/backfill fallback;
- corrected promoted search to named protocol;
- current active candidate is searchable;
- false positives require scoped search;
- index duplicates derivable state unless it stores extra metadata;
- extra metadata can create authority drift;
- optional candidate report handles durable handoff;
- exact stage attribution is mixed.

The atoms group cleanly into the top-down boundaries. No atom forces a new major piece.

Boundary confidence: high.

## Question Tree

### Question 1 - What Changed From Prior To Corrected Inquiry?

Verification criteria:

- [ ] Prior recommendation is stated accurately.
- [ ] Human correction is included.
- [ ] Corrected recommendation is stated accurately.
- [ ] Preserved elements are separated from changed elements.

### Question 2 - Which Failure Hypotheses Are Evidence-Backed?

Verification criteria:

- [ ] Each hypothesis names an affected stage or mixed stage.
- [ ] Each hypothesis has prior evidence.
- [ ] Each hypothesis has correction evidence.
- [ ] Each hypothesis has confidence and "why not stronger."
- [ ] Hypotheses do not claim exact root cause without isolation.

### Question 3 - What Was The Mechanism-Selection Failure?

Verification criteria:

- [ ] Maintained index is distinguished from explicit mechanism.
- [ ] Search fallback is distinguished from protocolized search.
- [ ] Run-local candidate report is distinguished from global index.
- [ ] Route Memory Review interpretation boundary is preserved.

### Question 4 - What Maintenance Candidates Follow?

Verification criteria:

- [ ] Candidate is specific enough to patch or test.
- [ ] Candidate names likely affected protocol/spec area.
- [ ] Candidate has risk class.
- [ ] Candidate has expected benefit.
- [ ] Candidate has evaluation gate.
- [ ] Candidate avoids broad fundamentals rewrite from one chain.

### Question 5 - What Diagnostic Verdict Is Justified?

Verification criteria:

- [ ] Verdict uses ACTIONABLE / PARTIAL / INCONCLUSIVE.
- [ ] Best-supported diagnosis is named.
- [ ] Strongest maintenance candidate is named.
- [ ] Main uncertainty is named.
- [ ] Recommended next step is concrete.

## Interface Map

| Source Piece | Target Piece | What Flows | Direction |
| --- | --- | --- | --- |
| Evidence coverage | Failure hypotheses | artifact facts, correction deltas, search observations | one-way |
| Human correction | Failure hypotheses | explicit objection to maintained index | one-way |
| Corrected inquiry | Mechanism analysis | Discovery Search, optional report, revival triggers | one-way |
| Mechanism analysis | Failure hypotheses | distinction between fallback scan and primary search contract | one-way |
| Failure hypotheses | Maintenance candidates | shortcoming type, affected stage, confidence | one-way |
| Maintenance candidates | Evaluation gates | measurable test for source-change value | one-way |
| Failure hypotheses + maintenance candidates | Diagnostic verdict | strongest diagnosis and actionability | one-way |

Hidden-coupling checks:

- Do not let corrected inquiry become ground truth.
- Do not let maintenance candidates depend on a single-stage blame claim.
- Do not let "explicitness" collapse back into "always write maintained file."
- Do not let search output become current route truth.

## Dependency Order

1. Correction chain summary.
2. Mechanism boundary clarification.
3. Failure hypotheses.
4. Failure attribution summary.
5. Maintenance candidates.
6. Diagnostic verdict.

Parallelizable after step 2:

- failure hypotheses by stage;
- maintenance candidate sketching;
- uncertainty/why-not-stronger notes.

Must wait:

- final verdict must wait until critique evaluates confidence and actionability.
- source edit recommendations must wait until maintenance candidates are critiqued.

## Self-Evaluation

### Independence

Pass.

Each piece can be answered separately:

- evidence summary;
- failure hypotheses;
- mechanism boundary;
- maintenance candidates;
- verdict.

The interfaces are explicit.

### Completeness

Pass.

The decomposition covers LOOP_DIAGNOSE's required output: correction chain summary, hypotheses, attribution summary, maintenance candidates, and diagnostic verdict.

### Reassembly

Pass.

If each question is answered, the final finding will diagnose what the prior loop likely missed and what maintenance candidates follow.

### Tractability

Pass.

Each piece is small enough for Innovation/Critique to evaluate in one pass.

### Interface Clarity

Pass.

The key interface is clean:

```text
evidence -> hypotheses -> maintenance candidates -> verdict
```

### Balance

Pass with note.

Failure hypotheses are the heaviest piece, but that is appropriate for LOOP_DIAGNOSE. Maintenance candidates should stay narrower than hypotheses.

### Confidence

Pass.

Top-down boundaries and bottom-up atoms agree. The main risk is over-attribution, which is controlled by explicit confidence levels and mixed attribution.
