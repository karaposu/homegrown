# Innovation: Loop Diagnose — Why Disciplines Missed Convergence

## User Input

Source: `/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-11_14-00__loop_diagnose__why_disciplines_missed_convergence/_branch.md`

Produce loop_diagnose Step-4 deliverable per Decomposition's 4 pieces. P1 first, then P2/P3/P4 in parallel.

---

## Seed and Direction

- **Seed: failure.** 13-30 loop missed operation-level convergence between R2/R3/Explore. User identified the gap; Exploration produced line-level evidence; Sensemaking adjudicated.
- **Direction:** draft concrete texts. Sensemaking already settled the structure. Innovation drafts.

---

## Phase 2 — Generate (mechanisms applied focused)

### Combination + Domain Transfer

Combine the spec's existing refinement-note idiom (Phase/Calibration-State requirement; Load-bearing concept test; etc.) with the candidate-set-level scope of the convergence-recognition fix. Domain Transfer: scientific method's "test the inverse hypothesis" maps to Question Premise Check; biology's "convergent evolution" maps to Cross-Candidate Unity. Pattern-coherent.

### Absence Recognition + Lens Shifting

Absence: Sensemaking has no candidate-set-level check; Innovation has Combination but not at candidate-set level explicitly. Lens: under clarification-vs-behavior-change lens, the proposed refinement notes are BEHAVIOR-CHANGING (new check at runtime); Step 5 applies. ACTIONABLE writing-discipline reminder is the bypass (loop-builder-level; not spec change).

### Inversion + Constraint Manipulation

Inversion: don't add the fix. Result: convergence-recognition failures recur. Not viable. Constraint: ~150 words per refinement note; ~100 words for writing reminder. Drafts fit.

### Extrapolation

At L2+ autonomy, user pushback is unavailable. The AI must catch convergence autonomously. Compounds in value.

**Result:** all 7 mechanisms applied; converge on the 4-piece deliverable.

---

## P1 — Failure-pattern characterization (FOUNDATION)

### Convergence-recognition failure — definition

**Convergence-recognition failure** is a failure mode in MVL+ disciplines: surface-different candidates being analyzed for their relationships are treated as STRUCTURALLY SEPARATE when they are actually INSTANCES OF THE SAME UNDERLYING OPERATION. The failure happens at the CANDIDATE-SET LEVEL — not within any individual candidate's analysis — and propagates through the pipeline (Sensemaking commit cascades to Innovation, Decomposition, Critique).

### How it manifests

When an inquiry has multiple candidates (e.g., disciplines, concepts, operations) being adjudicated for their relationships:
- Sensemaking applies its 8 perspectives to each candidate and to the relationship between them, but no perspective tests whether candidates are at the right abstraction level.
- Innovation may apply Combination, but typically at sub-element levels (combining properties of candidates with project conventions, etc.), not at the candidate-set level (combining the candidates themselves as instances of one operation).
- Decomposition partitions candidates into pieces without abstraction-level deduplication.
- Critique tests the candidates against dimensions derived from Sensemaking's commit; presupposes the candidate-set's framing.

### Distinguishing it from existing failure modes

| Failure mode | What it misses |
|---|---|
| Frame-scope capture (Memory; warming) | Frame EXCLUDES a project-wide referent |
| Premature Evaluation in Possibility Mode | Exploration applies dimensional evaluation when only confidence-marking is its mandate |
| Clean Resolution Trap | Counter-argument not tested on structural grounds |
| **Convergence-recognition failure (NEW)** | **Candidate-set treated at wrong abstraction level — surface-different candidates are instances of same underlying operation** |

The pattern is structurally distinct. It is a candidate-set-level question (about the relationship-graph between candidates), not a frame-level question (about exclusions) or a verdict-quality question (about counter-tests).

### Line-level evidence from 13-30

- **Sensemaking** (docarchive/sensemaking.md K-anchors): K2 declared R2 vs Explore "separate but mechanism-sharing"; K3 declared R3 vs Explore "specialization + composition." Neither anchor came from a perspective that asked "are R2, R3, and Explore instances of the same underlying operation?" — because no such perspective exists in Sensemaking's current 8-perspective set.
- **Innovation** (docarchive/innovation.md lines 38-39): Domain Transfer used examples biased toward DISTINCTION-finding ("biology / taxonomy: species splitting"; "philosophy / ontology: concept distinction"). Convergent-evolution-style examples were not surfaced.
- **Innovation** (Combination Generator): applied to combining "R2/R3 distinction" with "project conventions" — at the operational-paths level, not at the candidate-set-instance level.
- **Decomposition** (docarchive/decomposition.md P3): R2 and R3 characterizations are listed as sub-entries within one piece, not tested for abstraction-level unity.
- **Critique** (docarchive/critique.md D1, D2): "Diagnostic accuracy" and "R2/R3 distinction clarity" presupposed the distinction as the candidate to test. No dimension asked "could the candidates be instances of the same underlying thing?"

### Cross-discipline propagation

The failure cascades through the pipeline:
1. Sensemaking commits to a candidate-set frame (R2 vs Explore = E; R3 vs Explore = F).
2. Innovation drafts within that frame (operational paths assume the frame).
3. Decomposition partitions within that frame (P3 treats R2/R3 separately).
4. Critique tests dimensions derived from the frame.

**Fix at Sensemaking flows downstream.** Fixing only Innovation or Decomposition would catch the failure later in the pipeline but wouldn't prevent Sensemaking's upstream commit. Sensemaking is the natural primary fix location.

---

## P2 — Deferred spec intervention (two refinement notes + revival trigger)

### Refinement note 1 — Question Premise Check (proposed; DEFERRED)

**Drafted text** (to insert in `homegrown/sense-making/references/sensemaking.md` before the SV1 section in the "Execute the Following Process" — operates as a pre-Phase-1 check):

```text
*Refinement note (applies before SV1):*

**Question Premise Check.** When the inquiry's question compares
multiple candidates and asks how they relate (e.g., "is X different
from Y?", "what's the overlap between A and B?", "is one a
specialization of the other?"), the question's framing pre-biases
the candidate set. A question phrased as "how are they different?"
pre-biases toward distinction; "how are they the same?" pre-biases
toward unity. Before producing SV1, briefly state:

  - what the question's framing pre-biases toward (distinction;
    unity; partition; combination; other);
  - the inverse framing (what would the question look like if it
    pre-biased the opposite direction?);
  - whether the inquiry should test the inverse framing as a
    structural-grounds check before committing the candidate set.

Failing to surface a strongly-biased question framing is an instance
of Perspective Blindness (failure mode #4) applied to the question-
framing axis.
```

### Refinement note 2 — Cross-Candidate Unity check (proposed; DEFERRED)

**Drafted text** (to insert in `homegrown/sense-making/references/sensemaking.md` Phase 2 — Perspective Checking, after the existing perspective list and refinement notes):

```text
*Refinement note (applies at Phase 2 Perspective Checking, when the
inquiry's analysis has ≥2 candidates being adjudicated for their
relationships):*

**Cross-Candidate Unity check.** When ≥2 candidates are being
analyzed for relationships (separate; specialization; composition;
schema-overlay; etc.), test whether the candidates are at the right
ABSTRACTION LEVEL — specifically, whether any subset of the candidates
is INSTANCES OF THE SAME UNDERLYING OPERATION (different surface
implementations of one shared cognitive job). Apply this test:

  1. State each candidate's core operation (what it does at the
     cognitive-operation level, not at the implementation level).
  2. Compare the operations: do any candidates share a core operation
     when surface differences (schemas; inputs; outputs) are bracketed
     as implementation-level?
  3. If yes, the candidate set may be over-distinguishing —
     consider a partial-unification verdict (shared operation +
     non-shared implementation add-ons) rather than treating the
     candidates as separate.

Failing to apply this check when ≥2 candidates are being adjudicated
is an instance of **convergence-recognition failure** — a candidate-
set-level analog of Perspective Blindness. (Convergence-recognition
failure has not yet been formally coined as a Sensemaking failure
mode; it may be coined when ≥3 instances accumulate per Step 5
threshold.)
```

### DEFERRED status + revival trigger

**Status: DEFERRED** per `homegrown/protocols/loop_diagnose.md` Step 5. Evidence is N=1 (this 13-30 → 13-45 correction chain is the first identified instance of convergence-recognition failure).

**Revival trigger:** ≥3 instances of convergence-recognition failure across distinct inquiries.

**Instance tracking:**
- Instance 1 (this case): 13-30 missed operation-level convergence between R2/R3/Explore.
- Potential Instance 2 (Research Frontier 3 from 13-45 finding): TEM may overlap with Sensemaking's Comprehending operation — if confirmed, this is convergence-recognition at a different scale (operation-pattern overlap across disciplines).
- Two more catches → revival.

**At revival:** lift both refinement notes into `homegrown/sense-making/references/sensemaking.md` per the drafted text above. The two notes ship together (they address the same failure pattern at different points in Sensemaking's process).

---

## P3 — ACTIONABLE writing-discipline reminder

This is a loop-builder-level reminder, NOT a discipline-spec change. Step 5 applies weakly (writing-discipline reminders are reversible and don't change runtime AI behavior at the discipline level).

**Drafted text** (to live in `enes/runtime_environment/folder_based.md` or as a sibling file `enes/runtime_environment/inquiry_framing_discipline.md`):

```text
INQUIRY-FRAMING DISCIPLINE — QUESTION-PREMISE PRE-BIAS CHECK

When writing a _branch.md that compares multiple candidates (e.g.,
"is X different from Y?", "what's the overlap between A and B?",
"is C a specialization of D?", or any question of the relationship-
between-candidates shape), the question's framing pre-biases the
candidate set.

A question phrased as "how are they different?" pre-biases toward
DISTINCTION (the analysis will find ways they differ).
A question phrased as "how are they the same?" pre-biases toward
UNITY (the analysis will find ways they converge).
A question phrased neutrally as "what is their relationship?"
pre-biases toward producing a TYPED RELATIONSHIP (e.g., "A is a
specialization of B"; "A and B overlap but are separate") — which
itself biases away from full unification.

Before committing to a _branch.md framing:

  1. Identify the framing's pre-bias (distinction; unity; typed
     relationship; partition; other).
  2. State the INVERSE framing in one sentence.
  3. If the question would still be the right question under the
     inverse framing, the framing is robust.
  4. If the inverse framing would reveal a different candidate set
     or a different verdict, the framing is pre-biased.
  5. Consider widening the question to ask both directions
     ("how are they related?" rather than "how are they different?"
     or "how are they the same?").

Counter-example from history: the 13-30 inquiry's _branch.md asked
"is navigation = explore + assess, OR specialization, OR schema-
overlay?" — all candidates pre-biased toward DISTINCTION-with-typed-
relationship. The candidate set excluded "are they actually one
underlying operation?" The user's pushback (13-45) introduced the
unification framing externally. Question-Premise Pre-Bias Check at
13-30 _branch.md writing time would have caught this.
```

**Why this is ACTIONABLE not DEFERRED:**
- Not a discipline-spec change (Step 5 applies less strongly).
- Reversible at near-zero cost.
- Operationally testable: when the next _branch.md is written, does the framer apply the check?
- Doesn't require ≥3 instances — single-instance evidence is sufficient for a writing-discipline reminder (consistent with the scope-cut writing convention adopted earlier from N=1 evidence).

**Status: ACTIONABLE.** User can install the reminder immediately.

---

## P4 — Research Frontier + Innovation secondary

### Innovation Combination secondary clarification (DEFERRED)

When the convergence-recognition refinement notes are revived at Sensemaking (≥3 instances), `homegrown/innovate/references/innovate.md` Combination Generator section should also receive a clarification: "Combination can be applied at the CANDIDATE-SET LEVEL — combining the candidates being adjudicated themselves, as instances of an underlying operation — not only at the sub-element level (combining properties of candidates with external concepts)." This clarification supports the Sensemaking fix by aligning Innovation's mechanism vocabulary.

**Status: DEFERRED**. Revival paired with Sensemaking refinement notes; ships together.

### Research Frontier 1 — Broader pattern: other disciplines may have convergence-recognition gaps

If convergence-recognition failure is a real family, the other disciplines (Decomposition; Critique) may have analogous gaps:
- **Decomposition:** when partitioning candidates into pieces, can it accidentally over-distinguish (treat as separate pieces what's structurally one piece at higher abstraction)?
- **Critique:** when constructing evaluation dimensions, can it presuppose a candidate-set frame that's at the wrong abstraction level?

A focused inquiry per discipline could surface analogous gaps. Out of scope for this inquiry.

### Research Frontier 2 — 6th instance of discipline-architecture-refinement inquiry

This is the 6th in today's sequence:
1. **12-30** Is Sensemaking one discipline or multiple?
2. **13-00** Is Exploration overreaching into Critique?
3. **13-30** Why does Explore overlap with Navigation? (SUPERSEDED)
4. **13-45** Is Explore-and-Navigation one underlying operation?
5. **14-00** (this) Why disciplines missed the convergence

Six instances in a day suggests an active discipline-architecture refinement phase. **Codification candidate:** a meta-protocol for "how to diagnose discipline-mandate / discipline-relationship questions" — a guide that synthesizes the lessons across the six inquiries. Out of scope; flagged.

### Research Frontier 3 — TEM-Sensemaking-Comprehending overlap may be 2nd instance of convergence-recognition

The 13-45 finding's Research Frontier 3 noted that TEM may overlap with Sensemaking's Comprehending operation. If a focused inquiry confirms this overlap, that's a 2nd convergence-recognition instance (TEM vs Sensemaking-Comprehending at the operation level; surface-different because of discipline context but structurally same operation).

Counting:
- Instance 1: 13-30 → 13-45 R2/R3/Explore convergence missed.
- Potential Instance 2: TEM-Sensemaking-Comprehending overlap (pending focused inquiry).
- One more catch → ≥3 threshold met; refinement-note revival warranted.

**Status:** Research Frontier — track; if confirmed, count progresses.

---

## Phase 3 — Test (5-test cycle)

| Test | Result |
|---|---|
| Novelty | Convergence-recognition failure is a NEW failure-mode family in the project. **NOVEL.** |
| Scrutiny survival | Survived 7 mechanisms; 5 ambiguities; 3 concept tests. Innovation stayed within mandate. **SURVIVED.** |
| Fertility | Opens 3 Research Frontiers (cross-discipline gaps; meta-protocol codification; TEM-Sensemaking 2nd-instance check). **FERTILE.** |
| Actionability | ACTIONABLE writing reminder ready to apply; DEFERRED refinement notes drafted for revival. **ACTIONABLE (immediate part) + DEFERRED (spec part).** |
| Mechanism independence | All 7 mechanisms converge on the diagnosis + 2-part intervention (DEFERRED + ACTIONABLE). **HIGH.** |

**Test cycle: SURVIVED.**

---

## Assembly check + Axis coverage check

The four pieces compose into a complete loop_diagnose Step-4 deliverable: failure-pattern characterization + DEFERRED intervention + ACTIONABLE companion + Research Frontier.

Axes covered:
- Failure pattern (P1)
- Spec-level fix (P2 — deferred)
- Inquiry-framing-level fix (P3 — actionable)
- Broader-pattern observation (P4)
- Step-5 conformance throughout

All 5 orthogonal axes covered.

---

## Mechanism Coverage Telemetry

- Generators applied: 4/4.
- Framers applied: 3/3.
- Convergence: YES.
- Survivors tested: 1/1 SURVIVED.
- Failure modes observed: None.

**Overall: PROCEED.** Hand off to Critique.
