# Exploration: Context-as-absolute category errors — deep dive

## User Input

`devdocs/inquiries/2026-05-12_22-05__context_as_absolute_category_errors_deep_dive/_branch.md`

Territory: the meta-failure-pattern observed across three sibling instances. Probe the pattern's structure, detection mechanism, corrective, and relation to existing failure modes. Decide on actionability for project-wide naming.

**Canonical specs loaded (per LOOP_DIAGNOSE Candidate A):**
- `homegrown/explore/references/explore.md` — particularly §1.3 NOT-list; §2.2 annotation layers; §4.1 failure modes (especially #7 open→closed drift); §4.4 labeling-vs-meaning heuristic.
- `homegrown/sense-making/references/sensemaking.md` — particularly Phase 2 Definitional / Internal Consistency perspective; failure modes (Status Quo Bias #1; Clean Resolution Trap #5; Self-Reference Blindness #6).
- `homegrown/td-critique/references/td-critique.md` — particularly Phase 0 Dimension Construction; failure modes (Wrong Dimensions #1; Dimension Blindness #4).
- Three prior findings cited in `_branch.md` (the sibling instances).

---

## Step 0 — Declarations

| Field | Value | Why |
|---|---|---|
| `cognitive-commitment-mode` | open | testing the pattern's structure across multiple hypotheses |
| `territory-type-mode` | possibility | conceptual meta-analysis |
| `entry-point` | signal-first | 6 specific hypotheses from `_branch.md` |
| `expected` | ~15 items | family-structure analyses + cross-discipline-failure-mode mappings + detection/corrective mechanisms |
| `depth-level` | D3 | per-item with structural-adjacency citations (specific spec sections + finding lines) |

**Boundary-discovery:** does NOT fire. Territory bounded by the 3 instances + 3 discipline specs + existing failure modes.

---

## Cycle log

### Cycle 1 — Probe the common structure across all three instances

**Signal:** the three instances share a working-name ("context-as-absolute"). What's the precise common structure?

**Probe — examine each instance's WHAT-elevated-to-WHAT:**

**Instance 1 (Territory-as-operation, from 16-59 finding):**
- WHAT was elevated: a specific application of /explore over a different territory (reading SIC output as a "context-comprehension" step).
- TO WHAT: a new operation in /navigate (the Setup sub-phase).
- Why wrong: /explore is territory-agnostic; territory specialization is a Step 0 PARAMETER (`territory-type-mode`), not a new operation.

**Instance 2 (Annotation-as-operation, from iter-1 of 19-43):**
- WHAT was elevated: per-route content fields in /navigate's route-card (Movement, Guide pointers with WHY, Continuation note).
- TO WHAT: additive operations beyond /explore-specialization.
- Why wrong: per-item content is OUTPUT of an operation (annotation), not a separate cognitive step.

**Instance 3 (Prior-finding-as-canonical, from LOOP_DIAGNOSE):**
- WHAT was elevated: a prior finding's specific commitment (the 11-40 finding's Select component).
- TO WHAT: canonical-spec authority (treated as definitive).
- Why wrong: prior findings can carry wrong commitments; they're contextual artifacts, not canonical truth.

**Common pattern surfaced:** all three elevate something at a LOWER abstraction level to a HIGHER abstraction level it doesn't belong at.

But the LEVELS are different:
- Instances 1 + 2: SUB-OPERATION (parameter / output content) elevated to OPERATION.
- Instance 3: CONTEXTUAL ARTIFACT elevated to CANONICAL AUTHORITY.

**Confidence:** CONFIRMED — common meta-structure is "level-confusion / elevating-lower-to-higher." But the levels themselves are categorically different across instances 1+2 vs instance 3.

### Cycle 2 — Test H1 (one family, single level)

**Signal:** are all three instances at the same structural level?

**Probe:**
- Instance 1: within-discipline-analysis level. The error happened when analyzing /navigate's structure; territory-as-operation is an internal discipline-level confusion.
- Instance 2: within-discipline-analysis level. The error happened when analyzing /navigate's components; annotation-as-operation is an internal discipline-level confusion.
- Instance 3: cross-finding-inheritance level. The error happened when an inquiry inherited a claim from a prior finding; prior-finding-vs-canonical is a cross-artifact-level confusion.

Instances 1 + 2 are at the same level (within-discipline-analysis). Instance 3 is at a different level (cross-finding-inheritance).

**Distinction surfaced:** H1 (one family, single level) does NOT hold structurally. The instances span two distinct structural levels.

**Confidence:** REJECTED. H1 is structurally incorrect.

### Cycle 3 — Test H2 (three distinct patterns at different levels)

**Signal:** are the three instances completely distinct, or are instances 1 + 2 the same?

**Probe — examine instances 1 vs 2:**
- Both are within-discipline-analysis errors.
- Both elevate sub-discipline entities (parameter; output content) to operation-level.
- Both have the same detection test: "is the proposed operation actually /explore-on-different-territory (instance 1) OR per-item content of an existing operation (instance 2)?" — different specific tests but same predicate type.
- Both have the same corrective: retract the elevation; re-classify at the correct level.

Instances 1 and 2 ARE structurally the same pattern. They differ in WHICH sub-discipline entity was elevated (parameter vs annotation) but they belong to one family.

**Distinction surfaced:** H2 (three distinct patterns) is incorrect at the structural level. Instances 1 + 2 are one pattern; instance 3 is a different pattern.

**Confidence:** REJECTED. H2 is structurally over-decomposed.

### Cycle 4 — Test H3 (two families)

**Signal:** based on cycles 2 and 3, do the instances cluster into two families?

**Probe:**
- **Family A — Within-discipline-analysis level confusion:** elevating something at sub-discipline-level (parameter / output content / sub-step) to discipline-operation level.
  - Instances: 1 (territory-as-operation), 2 (annotation-as-operation).
  - 2 observed instances.
- **Family B — Cross-finding-inheritance authority confusion:** elevating something contextual (a prior finding's claim) to canonical-authority status.
  - Instances: 3 (prior-finding-authority-as-canonical).
  - 1 observed instance.

Both families share the meta-pattern "level-confusion" but operate at different layers (within-artifact vs across-artifacts).

**Distinction surfaced:** H3 (two families) is structurally correct. Each family has its own detection mechanism + corrective; they should be named separately.

**Confidence:** CONFIRMED. H3 is the right structural decomposition.

### Cycle 5 — Probe H4 (meta-pattern over existing failure modes)

**Signal:** do existing project failure modes already cover the pattern? Is new naming redundant?

**Probe — map each family to existing failure modes:**

**Family A → existing failure modes:**
- `/explore` failure mode #7 (open→closed drift): "The relevance or adjacency annotations begin to claim relational meaning, drifting from open-mode surfacing into closed-mode interpretive operations." DIRECTLY COVERS instance 2 (annotation elevated to interpretive operation). PARTIALLY covers instance 1 (territory-as-operation isn't about annotation drift specifically, but the meta-pattern of treating a labeling-level commitment as an interpretive-level commitment is related).
- `/sense-making` failure mode #5 (Clean Resolution Trap): "An ambiguity resolves with an elegant explanation. The resolution feels right — clean, logical, complete. But the strongest counter-argument was never tested on structural grounds." PARTIALLY covers both instances 1 + 2 — the Setup sub-phase felt elegant; the 4 additive operations felt elegant.
- `/sense-making` Phase 2 Definitional / Internal Consistency: checks if "weak anchor (observation, single data point) contradicts a strong anchor (definition, tested principle)." This is the CORRECTIVE for Family A's failure mode, but it requires the strong anchor (canonical spec) to be in the inquiry's frame.

So Family A is COVERED by existing failure modes + correctives, but the coverage is FRAGMENTED across /explore + /sense-making. Naming Family A explicitly as a meta-pattern would consolidate the coverage.

**Family B → existing failure modes:**
- `/sense-making` failure mode #1 (Status Quo Bias): "Defending an established structure, definition, or framework because it's documented and familiar — not because the evidence supports it." DIRECTLY COVERS instance 3 — the 11-40 finding was treated as authoritative because it existed.
- `/td-critique` failure mode #4 (Dimension Blindness): "A critical dimension is missing entirely. The critique evaluates thoroughly on the dimensions it has, but a category of risk is completely invisible." PARTIALLY covers — iter-1's critique didn't include canonical-spec-contradiction as a dimension.

So Family B is partially covered by Status Quo Bias + Dimension Blindness but neither captures the specific "prior-finding-vs-canonical" structure.

**Distinction surfaced:** H4 is PARTIALLY CORRECT. Existing failure modes partially cover both families, but the coverage is fragmented. Explicit naming consolidates the pattern without contradicting existing modes — adds a new meta-level lens, doesn't replace existing modes.

**Confidence:** CONFIRMED — both families are partially covered by existing modes; new naming adds consolidation value without redundancy.

### Cycle 6 — Detection mechanism for Family A

**Signal:** how does a loop detect Family A errors at runtime?

**Probe:**

**D1 (Family A detection predicate):** when a discipline-analysis claim adds a new operation/component/depth/sub-phase to a discipline, run a 3-step check:
1. **Is the proposed item /explore-applied-to-a-different-territory?** Test: does it produce a confidence-tagged map of surfaced items? If yes, it's /explore over a different territory, not a new operation. (Catches instance 1.)
2. **Is the proposed item a per-item content field in an existing operation's output?** Test: is it a route-card field, an annotation, a per-item descriptor? If yes, it's annotation, not a separate operation. (Catches instance 2.)
3. **Is the proposed item a sub-step of an existing operation?** Test: does it occur as part of producing the existing operation's Transform? If yes, it's a sub-step, not a separate operation. (Future-cases.)

If ANY of (1), (2), or (3) returns YES, the proposed item is NOT a new operation — retract the elevation.

**Confidence:** D1 is operationalizable and would have caught instances 1 + 2.

### Cycle 7 — Detection mechanism for Family B

**Signal:** how does a loop detect Family B errors at runtime?

**Probe:**

**D2 (Family B detection predicate):** when an inquiry inherits a structural claim from a prior finding (especially a claim that adds operations/components/depth to a discipline), run a 2-step check:
1. **Is the relevant discipline's canonical spec loaded into the working context?** If no, LOAD it (per LOOP_DIAGNOSE Candidate A).
2. **Does the inherited claim contradict the canonical spec?** Specifically check: does the canonical spec's NOT-list or identity-defining content explicitly exclude the inherited claim's substance? If yes, the inherited claim is presumptively wrong; investigate before propagating.

If both steps fire and a contradiction is found, the inherited claim is RETRACTED (or flagged for explicit user resolution).

**Confidence:** D2 is operationalizable and would have caught instance 3.

### Cycle 8 — Corrective mechanism for both families

**Signal:** what does the loop DO when it detects each family's pattern?

**Probe:**

**C1 (Family A corrective):** when D1 detects, retract the operation-elevation. Re-classify the entity at its correct level:
- If /explore-on-different-territory: name it as parameterized /explore (or transclude /explore with specific Step 0 declarations).
- If per-item annotation: name it as an annotation field in an existing operation's output.
- If sub-step: name it as a sub-operation within an existing operation.

**C2 (Family B corrective):** when D2 detects, the corrective is:
- If the inherited claim contradicts canonical AND canonical's structural argument is stronger: retract the inherited claim; the canonical wins.
- If the inherited claim contradicts canonical BUT the canonical might be wrong (structural argument for revising canonical exists): flag for explicit user attention; do NOT silently propagate.

**Confidence:** C1 and C2 are operationalizable.

### Cycle 9 — Test the project-wide-naming actionability

**Signal:** are both families ready for project-wide naming, or only one?

**Probe:**

**Family A (within-discipline-analysis level):**
- 2 observed instances (within ~6 inquiries this session).
- Detection mechanism D1 is operationalizable.
- Corrective C1 is operationalizable.
- Existing failure modes (open→closed drift, Clean Resolution Trap) partially cover; explicit naming consolidates.
- **Verdict: READY for project-wide naming.** Sufficient evidence; clear detection + corrective.

**Family B (cross-finding-inheritance level):**
- 1 observed instance.
- Detection mechanism D2 is operationalizable.
- Corrective C2 is operationalizable.
- Existing failure modes (Status Quo Bias, Dimension Blindness) partially cover; explicit naming would add value.
- **Verdict: research-frontier still — pending more observations.** One instance is thin; the pattern is real but the project should observe 1-2 more instances at the same level before committing to project-wide naming.

**Distinction surfaced:** Family A is ready NOW; Family B remains research-frontier (revival trigger: 1+ additional instances at the cross-finding-inheritance level).

**Confidence:** CONFIRMED — split-actionability is the right verdict.

### Cycle 10 — Probe naming options for Family A

**Signal:** what should Family A be named?

**Probe:**

Candidate names:
- **"Context-as-absolute category errors"** (the working name from LOOP_DIAGNOSE). Captures the meta-pattern but is abstract.
- **"Level-elevation errors"** (new candidate). Captures the operational structure.
- **"Sub-operation-as-operation conflation"** (new candidate). Specific to Family A's instances.
- **"Operation-status inflation"** (new candidate). Catchy but vague.
- **"Open→closed drift family"** (extending /explore's existing failure mode #7). Aligns with existing naming.

The best name balances:
- Project-native vocabulary (uses existing terms where possible).
- Specificity to Family A (not over-general).
- Operational clarity (suggests detection mechanism).

**Selected:** "Sub-operation-as-operation conflation" OR "Operation-status inflation" — both are more specific than the LOOP_DIAGNOSE's working name. The decision is sensemaking's job; exploration surfaces options.

**Confidence:** MEDIUM on naming. Sensemaking will commit.

### Cycle 11 — Jump scan: are there potential Family-C instances?

**Jump-scan:** is there a third family at yet another level?

**Probe:**
- Runner-vs-discipline confusion: e.g., treating /staged-explore output as if it were a discipline output. Not observed.
- Autonomy-level confusion: e.g., treating L0 behavior as L4 universal. Not observed.
- Iteration-spanning confusion: e.g., treating an iter-1 claim as inquiry-final. Not observed (iter-2 of 19-43 explicitly retracted iter-1).

These are POSSIBLE families but not OBSERVED. Stay research-frontier.

**Confidence:** CONFIRMED — current evidence supports two families; potential additional families exist but lack instances.

### Cycle 12 — Convergence + final jump-scan

**Three criteria:**
1. Frontier stability: cycles 9-11 surfaced no new structural axes. STABLE.
2. Declining discovery rate: cycles 1-7 surfaced ~12 items; cycles 8-9 surfaced ~3; cycles 10-11 surfaced ~2. DECLINING.
3. Bounded gaps: remaining unknowns are about naming choice, not structural reality. BOUNDED.

**Final jump-scan:** is there a categorical-distinct THIRD viable framing I haven't tested?

- *Could Families A and B be sub-cases of a single deeper pattern?* They share "level-confusion" but operate at categorically different layers. The meta-level "level-confusion" framing is real but too abstract for direct project-wide actioning. Naming both families separately with cross-reference to "level-confusion" as a meta-category is the cleanest.

**No surprises.** Convergence holds.

---

## Inventory

### Axis 1 — Family structure (verdict on H1/H2/H3/H4)

| Hypothesis | Verdict | Notes |
|---|---|---|
| H1 (one family, single level) | **REJECTED** | Instances span two distinct levels |
| H2 (three distinct patterns) | **REJECTED** | Instances 1+2 are structurally the same |
| H3 (two families) | **CONFIRMED** | Family A (within-discipline-analysis) + Family B (cross-finding-inheritance) |
| H4 (meta-pattern over existing) | **PARTIALLY CONFIRMED** | Existing failure modes partially cover; explicit naming consolidates |

### Axis 2 — Family A: Sub-operation-as-operation conflation

| Aspect | Specification |
|---|---|
| **What's elevated** | A sub-discipline entity (parameter, output content, sub-step) |
| **To what** | Operation-level / component-level / new-cognitive-step status |
| **Why wrong** | The entity belongs at a lower abstraction level than what it's claimed to be |
| **Observed instances** | 2 (territory-as-operation in 16-59; annotation-as-operation in iter-1 of 19-43) |
| **Detection mechanism (D1)** | 3-step check: is it /explore-on-different-territory? / per-item content? / sub-step of existing operation? |
| **Corrective (C1)** | Retract elevation; re-classify at correct level (parameter / annotation / sub-step) |
| **Existing failure mode coverage** | /explore #7 (open→closed drift) — directly covers annotation-as-operation; /sense-making #5 (Clean Resolution Trap) — partially covers both |
| **Project-wide naming actionability** | **READY** — 2 instances + operational detection + clear corrective |
| **Candidate names** | "Sub-operation-as-operation conflation"; "Operation-status inflation"; "Within-discipline level-elevation" |

### Axis 3 — Family B: Prior-finding-authority-as-canonical conflation

| Aspect | Specification |
|---|---|
| **What's elevated** | A prior finding's claim (a contextual artifact's commitment) |
| **To what** | Canonical-spec authority (treated as definitive) |
| **Why wrong** | Prior findings can carry wrong commitments; they are not canonical truth |
| **Observed instances** | 1 (prior-finding-authority-as-canonical in LOOP_DIAGNOSE's diagnosis of iter-1 of 19-43) |
| **Detection mechanism (D2)** | 2-step check: is canonical spec loaded? does inherited claim contradict canonical? |
| **Corrective (C2)** | Load canonical; if contradicted, retract inherited claim OR flag for user resolution |
| **Existing failure mode coverage** | /sense-making #1 (Status Quo Bias) — directly covers; /td-critique #4 (Dimension Blindness) — partially covers |
| **Project-wide naming actionability** | **RESEARCH-FRONTIER** — 1 instance is thin; revival at 1+ additional instances |
| **Candidate names** | "Prior-finding-authority-as-canonical conflation"; "Cross-finding-inheritance authority confusion"; "Inherited-claim-as-canonical" |

### Axis 4 — Meta-category (over both families)

| Aspect | Specification |
|---|---|
| **Common meta-pattern** | Level-confusion: elevating something at a lower abstraction level to a higher level it doesn't belong at |
| **Why meta-naming is useful** | Provides cross-family lens; supports future-family detection |
| **Why meta-naming is INSUFFICIENT alone** | Detection and corrective mechanisms differ across families; meta-name doesn't specify HOW to detect |
| **Recommended approach** | Name Family A explicitly NOW; name Family B at research-frontier; reference both as instances of "level-confusion meta-pattern" for future-family detection |

### Axis 5 — Relation to existing failure modes (cross-reference table)

| Existing failure mode | Coverage of Family A | Coverage of Family B |
|---|---|---|
| /explore #7 open→closed drift | Direct (instance 2: annotation-as-operation) | None |
| /sense-making #1 Status Quo Bias | None | Direct (instance 3: trusting 11-40 because it exists) |
| /sense-making #5 Clean Resolution Trap | Partial (both instances felt elegant) | None |
| /sense-making #6 Self-Reference Blindness | None | Partial (loop's self-evaluation didn't catch) |
| /td-critique #1 Wrong Dimensions | None | Partial (canonical-spec-contradiction missing as dimension) |
| /td-critique #4 Dimension Blindness | None | Partial (critique missed the dimension) |
| /sense-making Phase 2 Definitional / Internal Consistency | This is the corrective tool, not a failure mode | This is the corrective tool, not a failure mode |

### Axis 6 — Potential additional families (research-frontier)

- Runner-vs-discipline confusion.
- Autonomy-level-confusion.
- Iteration-spanning-confusion.

None observed; placeholders for future tracking.

---

## Signal log

| Signal | Source | Priority | Probed | Notes |
|---|---|---|---|---|
| Two-level structure: within-discipline-analysis vs cross-finding-inheritance | cycles 1-4 | CRITICAL | yes | Defines H3 as the correct family decomposition |
| Family A is READY for project-wide naming (2 instances + D1 + C1) | cycle 9 | HIGH | yes | Verdict on actionability |
| Family B remains research-frontier (1 instance) | cycle 9 | HIGH | yes | Verdict on actionability |
| Existing failure modes partially cover; explicit naming consolidates | cycle 5 | HIGH | yes | H4 partially confirmed |
| Detection mechanism D1 (3-step) | cycle 6 | HIGH | yes | Operationalizable for Family A |
| Detection mechanism D2 (2-step) | cycle 7 | HIGH | yes | Operationalizable for Family B |
| Corrective C1 / C2 | cycle 8 | HIGH | yes | Operationalizable for each family |
| Naming candidates for Family A | cycle 10 | MEDIUM | yes | Sensemaking will commit |

---

## Confidence map

| Region | Confidence |
|---|---|
| Two-family structure (Family A + Family B) | **confirmed HIGH** |
| Family A actionability NOW (project-wide naming) | **confirmed HIGH** |
| Family B research-frontier (pending more observations) | **confirmed HIGH** |
| Existing failure modes partially cover | **confirmed HIGH** |
| Detection + corrective mechanisms operationalizable | **confirmed HIGH** |
| Specific name choice for Family A | **inferred MEDIUM** (sensemaking commits) |
| Meta-pattern naming useful but insufficient alone | **inferred HIGH** |

---

## Frontier state

**Closed within scope.** Pattern structure decomposed into 2 families with detection + corrective mechanisms specified. Family A actionable now; Family B research-frontier. Existing failure mode mappings cross-referenced.

Open at the implementation level: which name for Family A; how to fold Family A's naming into /explore + /sense-making + /td-critique specs (if anywhere); how to track Family B's revival trigger observability. That is sensemaking + decomposition + innovation + critique work.

---

## Gaps and Recommendations

### Gaps remaining (for downstream)

**FQ1 — Name commitment for Family A (sensemaking).** 3+ candidate names exist; sensemaking must commit.

**FQ2 — Where to embed Family A's detection mechanism in existing specs (decomposition + innovation).** Options: (a) add D1 as a sub-aspect to /explore's existing failure mode #7 (open→closed drift); (b) add D1 to /sense-making's Definitional / Internal Consistency perspective; (c) add D1 to /td-critique's Phase 0 Dimension Construction; (d) all of the above (defense-in-depth); (e) a new project-wide failure-mode catalog entry.

**FQ3 — How to operationalize the Family B revival trigger (innovation).** What observable signals "1+ additional cross-finding-inheritance-authority-confusion instance has occurred"?

**FQ4 — Cross-reference table integration (innovation + critique).** Should the existing-failure-mode cross-reference table (Axis 5) be a project-wide doc, or live inside the new pattern's spec, or both?

**FQ5 — Adversarial test (critique).** Is the two-family decomposition actually correct, or have I introduced over-decomposition? Could there be one family with two sub-detection-mechanisms?

### Recommendations for downstream

- **Sensemaking** should: commit to a name for Family A; stabilize the two-family decomposition; resolve whether the meta-pattern "level-confusion" deserves its own naming layer.

- **Decomposition** should partition: the adoption package for Family A naming (where it goes in specs; how it's cross-referenced).

- **Innovation** should generate variations: Family A's name + its placement (D1 sub-aspect in which spec); Family B's revival-trigger observable.

- **Critique** should adversarially test: the two-family decomposition; potential over-decomposition; whether Family A's adoption is justified vs deferring along with Family B.

---

## Telemetry

- Mode: possibility
- Entry-point: signal-first (6 hypotheses)
- Cycles run: 12
- Candidates: ~25 evidence points + 6 hypothesis verdicts
- Signals: 8; probed: 8
- Resolution: hypothesis probes (cycles 1-5) → mechanism specifications (cycles 6-8) → actionability decision (cycle 9) → naming exploration (cycle 10) → research-frontier additional families (cycle 11) → convergence (cycle 12)
- Frontier: closed within scope
- Discovery rate: high cycles 1-5; medium cycles 6-9; low cycles 10-11; zero cycle 12. DECLINING.
- Convergence: 3/3 criteria met
- Jump-scan performed: cycles 11, 12

**Canonical-spec-loading check (per LOOP_DIAGNOSE Candidate A):**
- `/explore` canonical: §1.3 NOT-list referenced; §2.2 annotation layers referenced; §4.1 failure modes (especially #7 open→closed drift) referenced; §4.4 labeling-vs-meaning heuristic referenced. ✓
- `/sense-making` canonical: Phase 2 Definitional / Internal Consistency referenced; failure modes #1 Status Quo Bias and #5 Clean Resolution Trap referenced. ✓
- `/td-critique` canonical: Phase 0 Dimension Construction referenced; failure modes #1 Wrong Dimensions and #4 Dimension Blindness referenced. ✓

---

## Self-assessment

**Verdict: PROCEED.**

The exploration decomposed the pattern into 2 structurally distinct families (Family A within-discipline-analysis level; Family B cross-finding-inheritance level) with operationalized detection + corrective mechanisms per family. Family A is actionable for project-wide naming NOW (2 instances + clear detection + clear corrective); Family B remains research-frontier (1 instance is thin). The existing-failure-mode cross-reference table (Axis 5) shows partial coverage; new naming consolidates without redundancy.

Sensemaking has well-formed input: the two-family decomposition; naming candidates; cross-references to existing modes; actionability verdicts per family.

No failure modes fired.
