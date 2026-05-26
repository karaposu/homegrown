# Decomposition — Self-Improvement Rate Measurable-Question Structure

## User Input

```
/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-16_00-07__self_improvement_rate_measurable_questions/_branch.md

Whole to decompose: the measurable-question-list problem — producing the structure that holds the ~15 measurable questions such that Innovation can generate question wordings per piece and Critique can evaluate them against the dimensions sensemaking committed.

Sensemaking flagged 4 candidate organizing axes:
- Path A: by four-phase structure (trigger/speed/magnitude/retention as primary sections)
- Path B: by measurement scope (discipline/corpus/harness as primary sections)
- Path C: by direct vs absence-of-failure measurement (two families)
- Path D: by calibration-state (answerable-today vs answerable-when-mature)

These are not mutually exclusive; one is primary, others nest as transverse tags. Decomposition perceives which seam cuts at lowest coupling.
```

---

## Whole to decompose

The deliverable's content half is **a list of ~15 measurable questions** that operationalize sensemaking's committed conceptual model. The decomposition partitions THIS LIST into pieces with verification criteria, so Innovation can generate question wordings per piece and Critique can evaluate them.

Constraints inherited from Sensemaking (SV6):
- Primary anchor: rate of change of task-completion-ability attributed to self-modification.
- Four cross-cycle phases: trigger / speed / magnitude / retention.
- Three nested measurement scopes: discipline ⊂ corpus ⊂ harness.
- Transverse discipline-type modality: mechanistic (numeric) vs meaning-producing (judgment).
- Absence-of-failure as PRIMARY measurement family (not fallback).
- Calibration-state stratification: answerable-today vs answerable-when-mature.
- Each question must be proximately + consistently measurable.

---

## Step 1 — Coupling Topology

### Element inventory (atoms)

The atoms are the 15 candidate dimensions from exploration + the conceptual structure from sensemaking:

| Atom | Source | Conceptual home |
|---|---|---|
| D-1 cycle count | exploration | magnitude phase |
| D-2 per-cycle quality | exploration | magnitude phase (with transverse modality) |
| D-3 detection-to-correction latency *(user seed)* | exploration | speed phase |
| D-4 convergence efficiency *(user seed)* | exploration | speed phase |
| D-5 regression-rate offset | exploration | retention phase |
| D-6 calibration maturity coverage | exploration | magnitude phase (per-discipline scope) |
| D-7 discipline-type coverage | exploration | magnitude phase (transverse on modality) |
| D-8 retention / durability | exploration | retention phase |
| D-9 self-detected vs human-flagged | exploration | trigger phase |
| D-10 severity-triage capability | exploration | trigger phase |
| D-11 meaningful-vs-spinning ratio | exploration | **substrate** (separate; gates all phases) |
| D-12 cross-discipline transfer | exploration | magnitude phase (corpus-level scope) |
| D-13 cost-per-improvement | exploration | speed phase |
| D-14 recursive improvement | exploration | **harness-level scope** (separate; meta-level) |
| D-15 absence-of-failure signals | exploration | **transverse** (distributed across phase pieces) |

Transverse properties (apply to questions within pieces, not as separate atoms):
- *Scope* (discipline / corpus / harness)
- *Modality* (mechanistic / meaning-producing)
- *Calibration-state* (today / when-mature)
- *Direct vs absence-of-failure* (per Path C)

### Coupling-propagation test

For each candidate pairing, I asked *"if I change A, does B need to change?"*

**Strong coupling within phases:**
- D-9, D-10 (both trigger): change one's framing → must update the other (they share the "trigger event" measurement event). **Cluster A: trigger.**
- D-3, D-4, D-13 (all speed): all observe duration/efficiency/cost of the same cycle event. Tightly coupled. **Cluster B: speed.**
- D-1, D-2, D-6, D-7, D-12 (all magnitude): all observe the size/extent/quality of the improvement event. Tightly coupled. **Cluster C: magnitude.**
- D-5, D-8 (both retention): both observe whether the improvement persists. Tightly coupled. **Cluster D: retention.**

**Substrate cluster:**
- D-11 (meaningful-vs-spinning): stands alone. It is upstream substrate (per sensemaking SV6) — gates the validity of A through D's cycle counting but is itself a separate measurement target. **Cluster E: substrate.**

**Harness-scope cluster:**
- D-14 (recursive improvement): stands alone. Meta-level scope; observes the rate-of-change of object-level measurements over time. **Cluster F: harness-scope.**

**Transverse family (not a cluster, but a distribution):**
- D-15 (absence-of-failure): distributes across A (absence-of-need-to-improve as trigger negative signal), C (absence-of-mode-collapse as magnitude negative signal), D (absence-of-regression / drift as retention negative signal). Inside each phase cluster, the absence-of-failure questions co-observe with direct questions; the symptom catalog from `enes/regression/desc.md` is the shared substrate.

**Between-cluster coupling (LOW — these are the cut points):**
- Trigger ↔ speed: the trigger event PRECEDES the speed measurement but the measurements are observed independently (trigger asks "did the system notice?"; speed asks "how fast did the cycle run after noticing?"). Same cycle, different observations. Low coupling.
- Speed ↔ magnitude: the cycle has both speed and magnitude properties, observed at different scales. Low coupling.
- Magnitude ↔ retention: the improvement has both size (when it happens) and persistence (does it stay). Observed at different times. Low coupling.
- Phases ↔ substrate (E): substrate gates the validity of phase measurements. Low coupling in measurement-event terms; tight in validity-gating terms.
- Phases ↔ harness-scope (F): harness-scope observes the rate-of-change of object-level. Low coupling; F's measurements come from observing A-E's results over time.

### Coupling map (visual)

```
                              ┌──────────────────────┐
                              │  E. SUBSTRATE        │
                              │   D-11 meaningful-   │
                              │   vs-spinning ratio  │
                              └──────────┬───────────┘
                                         │ gates validity of cycle-counting
                                         ▼
   ┌─────────────┐   ┌─────────────┐   ┌─────────────┐   ┌─────────────┐
   │ A. TRIGGER  │   │ B. SPEED    │   │ C. MAGNITUDE│   │ D. RETENTION│
   │  D-9, D-10  │   │  D-3, D-4   │   │  D-1, D-2,  │   │  D-5, D-8   │
   │             │   │  D-13       │   │  D-6, D-7,  │   │             │
   │             │   │             │   │  D-12       │   │             │
   │             │   │  [user      │   │             │   │             │
   │             │   │   seeds]    │   │             │   │             │
   └──────┬──────┘   └──────┬──────┘   └──────┬──────┘   └──────┬──────┘
          │                  │                  │                  │
          │  ▲▲▲ D-15 absence-of-failure distributed across all phases ▲▲▲
          │  (catalog from regression/desc.md is shared substrate)      │
          │                  │                  │                  │
          └──────────────────┼──────────────────┼──────────────────┘
                             │                  │
                             ▼                  ▼
                  ┌────────────────────────────────────┐
                  │  F. HARNESS-SCOPE / RECURSIVE      │
                  │   D-14 recursive improvement       │
                  │   (observes rate-of-change of      │
                  │    A-E's answers over time)        │
                  └────────────────────────────────────┘

Transverse properties (apply to questions within every cluster):
- Scope: discipline / corpus / harness
- Modality: mechanistic / meaning-producing
- Calibration-state: today / when-mature
- Direct vs absence-of-failure (where applicable)
```

### Major clusters and boundaries

**Clusters (high coupling within):**
- A. Trigger (D-9, D-10, + trigger-side absence-of-need)
- B. Speed (D-3, D-4, D-13)
- C. Magnitude (D-1, D-2, D-6, D-7, D-12)
- D. Retention (D-5, D-8, + retention-side absence-of-regression / drift)
- E. Substrate (D-11)
- F. Harness-scope (D-14)

**Boundaries (low coupling between):**
1. Phase boundary: trigger / speed / magnitude / retention are different cross-cycle moments.
2. Substrate boundary: meaningful-traversal is upstream; gates but is itself observed separately.
3. Harness-scope boundary: meta-level is orthogonal to object-level phase measurements.

---

## Step 2 — Detect Boundaries (Top-Down)

Path A (organize by four-phase structure) emerges as the primary organizing axis because it cuts at the lowest coupling between groups while preserving tight coupling within. The natural pieces are:

- **P1. Trigger phase** (Cluster A)
- **P2. Speed phase** (Cluster B)
- **P3. Magnitude phase** (Cluster C)
- **P4. Retention phase** (Cluster D)
- **P5. Substrate** (Cluster E)
- **P6. Harness-scope** (Cluster F)

Paths B (scope), C (direct-vs-absence), D (calibration-state) are *transverse tags* applied to questions WITHIN pieces, not primary cuts. Reasoning: each path's clusters are LESS coupled internally than Path A's phase clusters. Cutting by scope, for instance, would split D-9 (trigger; discipline-level) and D-10 (trigger; corpus-level severity-triage) into different pieces despite their tight coupling on the trigger phase.

---

## Step 3 — Validate Boundaries (Bottom-Up)

Bottom-up: do the 15 candidate dimensions cluster naturally into the 6 pieces?

| Dimension | Maps to piece |
|---|---|
| D-1 cycle count | P3 magnitude |
| D-2 per-cycle quality | P3 magnitude (with modality tag) |
| D-3 latency *(user seed)* | P2 speed |
| D-4 convergence efficiency *(user seed)* | P2 speed |
| D-5 regression offset | P4 retention |
| D-6 calibration maturity coverage | P3 magnitude (per-discipline scope tag) |
| D-7 discipline-type coverage | P3 magnitude (modality tag) |
| D-8 durability | P4 retention |
| D-9 self vs human-flagged | P1 trigger |
| D-10 severity-triage | P1 trigger |
| D-11 meaningful-vs-spinning | P5 substrate |
| D-12 cross-discipline transfer | P3 magnitude (corpus-level scope tag) |
| D-13 cost-per-improvement | P2 speed |
| D-14 recursive improvement | P6 harness-scope |
| D-15 absence-of-failure | transverse across P1, P3, P4 (sub-questions inside each) |

Bottom-up sanity check passed. All 15 dimensions land in a piece. Transverse tags (scope, modality, calibration-state) apply within each piece's questions.

**Determination-mechanism piece check** (Step 7 refinement applied at validation time): the conceptual model includes the load-bearing concept "absence-of-failure as primary" whose USE depends on runtime determination (which symptoms to watch for, when). Does any piece address HOW the absence-of-failure determination is performed?

YES — each phase piece's verification criteria includes "specifies the absence-of-failure sub-question for this phase + names the regression-symptom-catalog reference (`enes/regression/desc.md`) as the source of which failures to watch for." The determination mechanism is distributed across pieces rather than centralized. No missing-piece risk.

**Confidence:** HIGH. Top-down (4 phases + 2 cross-cutting) and bottom-up (15 dimensions → 6 piece-groups) agree.

---

## Step 4 — Question Tree

Each piece expressed as a question with verification criteria.

### P1 — Trigger phase

**Question:** What are the proximately-and-consistently measurable indicators that the system has detected (or failed to detect) a NEED for self-improvement?

**Verification criteria:**
- [ ] Commits ~3 measurable questions covering: (a) **what fraction of cycles were triggered by system-detection vs human-flagging?** (D-9; tracks the autonomy-graduation arc); (b) **does the system prioritize HIGH-severity needs over LOW-severity ones?** (D-10; severity-triage capability); (c) **absence-of-need check** — when the system reports "no improvement needed," is that supported by symptom-absence evidence from the regression symptom catalog (`enes/regression/desc.md`), or is it untested confidence?
- [ ] Each question is proximately measurable today at coarse precision (observable in `_state.md` history sections + inquiry-folder structure).
- [ ] Each question is consistently measurable — same question yields comparable answers across measurement events.
- [ ] Each question tagged with: scope (discipline-level for D-9/D-10; corpus-level for severity-triage when comparing across disciplines); modality (transverse — applies regardless of discipline-type); calibration-state (answerable-today for all three).
- [ ] Where absence-of-failure measurement applies, the verification names the specific symptom-catalog reference and the failure mode being watched for absence of.

### P2 — Speed phase

**Question:** What are the proximately-and-consistently measurable indicators of how FAST and EFFICIENTLY self-improvement happens once triggered?

**Verification criteria:**
- [ ] Commits ~3 measurable questions covering: (a) **detection-to-correction latency** (user seed 1) — observable as time between an issue's first surfacing in `_state.md` history and the encoded spec change; sub-segments by Baldwin-cycle phase (detection → diagnosis → proposal → evaluation → encoding latencies); (b) **convergence efficiency** (user seed 2) — observable as attempts-per-successful-improvement; correction chains (per `homegrown/protocols/loop_diagnose.md`) are the unit; how many chains terminate in successful improvement vs in giving up; (c) **cost-per-improvement** — observable proxies: context budget consumed, calendar duration, human effort hours.
- [ ] The user's two seed dimensions explicitly anchored as questions in this piece.
- [ ] Each question proximately and consistently measurable; scope tag (mostly discipline-level for latency/efficiency; harness-level for cost-per-improvement); modality transverse; calibration-state mostly answerable-today.

### P3 — Magnitude phase

**Question:** What are the proximately-and-consistently measurable indicators of how BIG each self-improvement event is — its scope, depth, and cascade reach?

**Verification criteria:**
- [ ] Commits ~4 measurable questions covering: (a) **Baldwin cycle count per period** (D-1) — calendar-rate of completed Baldwin cycles (run → observe → detect pattern → propose → evaluate → encode); (b) **per-cycle quality** (D-2) — discipline-type transverse measurement: numeric quality measure for mechanistic disciplines (Comprehend, Exploration, Decomposition), judgment-derived quality measure for meaning-producing disciplines (Sensemaking, Innovation); (c) **calibration-maturity coverage** (D-6) — what fraction of disciplines have reached the N≥30 inquiry threshold required for calibrated improvement claims?; (d) **cross-discipline transfer cascading** (D-12) — when discipline X is improved, do downstream consumers (disciplines that read X's output) show observable improvement on subsequent runs?
- [ ] Question (b) explicitly handles the discipline-type asymmetry as transverse modality (one question, two answer modes).
- [ ] Scope tags: D-1 harness-level; D-2 discipline-level; D-6 discipline-level (aggregated to corpus-level reporting); D-12 corpus-level.
- [ ] Calibration-state: D-1, D-2 answerable-today; D-6 answerable-today (just counting); D-12 answerable-when-mature (requires calibration data to observe cascades).

### P4 — Retention phase

**Question:** What are the proximately-and-consistently measurable indicators of whether self-improvements STAY (do not regress or drift away)?

**Verification criteria:**
- [ ] Commits ~3 measurable questions covering: (a) **regression-rate offset** (D-5) — what fraction of improvements get reverted by subsequent cycles? Observable via canary reference runs (per `enes/regression/desc.md` + `enes/stability_preservation_via_git.md` snapshot mechanism) or by tracking spec edits that revert prior spec edits; (b) **durability across N inquiries** (D-8) — how many cycles before an improvement is reverted or replaced? Median half-life of improvements; (c) **absence-of-drift** — are slow-drift symptoms (from `enes/regression/desc.md`'s Type 5 spec-symptoms) NOT firing? Slow-drift catches cumulative-edit degradation that no single run reveals.
- [ ] Absence-of-failure measurements (regression-absence, drift-absence) given equal status to direct measurements per sensemaking SV6's first-class commitment.
- [ ] Scope tags: D-5 discipline-level; D-8 corpus-level (durability across the corpus); drift-absence corpus-level.
- [ ] Calibration-state: D-5 answerable-today via canary infrastructure (which is partially built; the snapshot mechanism is operational, the symptom-catalog wired comparison is not yet automated); D-8 requires multi-inquiry time horizon (partial-today, fuller-when-mature).

### P5 — Substrate (meaningful-traversal)

**Question:** What are the proximately-and-consistently measurable indicators that the system's cycles are MEANINGFUL (traverse thinking space productively) — the upstream substrate that gates whether cycle counts are inflated?

**Verification criteria:**
- [ ] Commits ~1 (possibly 2) measurable questions covering: **meaningful-vs-spinning ratio across cycles** — observable via placeholder signals from `enes/what_is_meaningful_traversal.md`: coverage (does each iteration explore territory the previous didn't?); convergence (does the open-question count shrink?); productivity (does each iteration produce new structural material?); directedness (do new questions connect to the original?); depth (does the loop probe specific anchors deeply?). The placeholder signals are explicitly acknowledged as approximate, not the final substrate.
- [ ] Explicit acknowledgment that the meaningful-traversal substrate is fuzzy (per `enes/what_is_meaningful_traversal.md`); the question uses placeholder signals until the substrate matures.
- [ ] Scope: harness-level (substrate property, not per-discipline).
- [ ] Calibration-state: partial-answerable-today via placeholder signals; precision improves when `devdocs/spec/meaningful_traversal.md` ships.

### P6 — Harness-scope (recursive improvement)

**Question:** What are the proximately-and-consistently measurable indicators that the IMPROVEMENT MECHANISM ITSELF is improving (meta-level self-improvement)?

**Verification criteria:**
- [ ] Commits ~1 (possibly 2) measurable questions covering: **meta-level Baldwin cycle events** — when has the improvement mechanism's own spec been changed? Observable via git history on the spec files (`homegrown/protocols/loop_diagnose.md`, `homegrown/intuit/SKILL.md` once it ships, the materialization-lifecycle spec, etc.); how often does the improvement mechanism's quality awareness improve over time (do D-1 through D-5 measurements themselves trend upward)?
- [ ] Explicit acknowledgment that meta-level is structurally harder to measure than object-level; the question accepts low-precision answers and explicitly distinguishes "meta-spec edit happened" (proximate, observable) from "meta-spec edit improved the improvement mechanism" (requires N≥30 data accumulation post-edit to confirm).
- [ ] Scope: harness-level (by definition).
- [ ] Calibration-state: partial-answerable-today (count meta-spec edits); fuller-answerable-when-mature (assess whether they improved the mechanism).

---

## Step 5 — Interface Map

| # | Source | Target | What flows | Direction | Notes |
|---|---|---|---|---|---|
| I1 | P5 (substrate) | P1, P2, P3, P4 (phase pieces) | **Validity gate**: meaningful-traversal is upstream substrate; phase measurements are only valid for *meaningful* cycles. If P5's signal indicates spinning, P1-P4's cycle counts overstate the rate. | one-way (gating) | **Assumption check:** P1-P4 assume cycles being counted are meaningful. If P5 reports degraded meaningful-traversal, the phase answers need a caveat. |
| I2 | P1 (trigger) | P2 (speed) | **Temporal precedence**: a cycle cannot have a speed measurement until it has been triggered. The trigger event precedes the speed measurement in any single cycle's timeline. | one-way | Not a data flow; a temporal-ordering relationship within a single cycle. The pieces observe different events of the same cycle. |
| I3 | P2 (speed) | P3 (magnitude) | **Cycle-event continuity**: the same cycle has both speed and magnitude properties. The cycle that took X seconds (P2 data) produced Y units of improvement (P3 data). | bidirectional, observational | Both pieces observe the same cycle event but at different scales (time-scale vs outcome-scale). |
| I4 | P3 (magnitude) | P4 (retention) | **Cycle-event continuation**: the same improvement event observed at T0 (magnitude) and T2+ (retention). | one-way, temporal | **Assumption check:** P4 assumes the improvement events from P3 are durable enough to be re-observable. If P3 measurements are sparse, P4 is sparse too. |
| I5 | P1-P5 | P6 (harness-scope) | **Rate-of-change observation**: P6 observes whether P1-P5's measurements themselves improve over time. Meta-level Baldwin cycle is when the improvement mechanism's own spec gets refined. | one-way, longitudinal | **Assumption check:** P6 requires that P1-P5 have produced enough data over time for trends to be observable. Early on, P6 is sparse. |
| I6 | regression-symptom catalog (`enes/regression/desc.md`) | P1, P3, P4 | **Shared substrate**: the catalog of 23 symptoms across 5 types is the source of "what failures to watch for absence of." Each phase piece's absence-of-failure questions reference specific symptoms from the catalog. | one-way, reference | **Assumption check:** all three pieces assume the symptom catalog is available + applicable. The catalog exists at the spec level; canary infrastructure for automatic check is partial. |

**Hidden coupling check (assumptions-not-data per Step 5 refinement):**

- *P1 assumes* the inquiry-folder structure + `_state.md` history sections preserve trigger-event records (system-detected vs human-flagged + severity tags). Today these are recorded informally. Captured: P1's verification flags this as observation-quality dependency.
- *P2 assumes* correction-chain timestamps are observable from `_state.md` history + git history. Mostly yes; some inquiries may not log this precisely. Captured.
- *P3 assumes* the discipline corpus is partitionable by discipline-type (mechanistic vs meaning-producing) — the partition is given in `enes/regression/desc.md`. Captured.
- *P4 assumes* the inquiry corpus is durable (old findings remain accessible) and that the `archived_skills/` snapshot mechanism is operational. Both are present today. Captured.
- *P5 assumes* the meaningful-traversal placeholder signals are usable. Sensemaking SV3 committed acceptance. Captured.
- *P6 assumes* meta-level spec edits are observable via git history. Yes. Captured.

All assumptions made explicit.

---

## Step 6 — Dependency Order

```
Tier 1 (parallel; no internal dependencies):
  ● P1. Trigger phase
  ● P2. Speed phase
  ● P3. Magnitude phase
  ● P4. Retention phase
  ● P5. Substrate (meaningful-traversal)
      ↓ provides validity-gate caveat to P1-P4
      ↓ but doesn't BLOCK them (they can be answered with the gating caveat in place)

Tier 2 (depends on Tier 1):
  ● P6. Harness-scope (recursive improvement)
      — observes rate-of-change of P1-P5's measurements over time;
      — requires P1-P5 to have defined questions before P6 can specify what it's tracking
```

**Reasoning per tier:**

- **Tier 1 (P1, P2, P3, P4, P5 parallel):** Each piece observes a distinct cross-cycle property (trigger event / speed property / magnitude property / retention property / substrate property). The phases are temporally ordered within a single cycle (trigger → speed → magnitude → retention) but the QUESTIONS that observe each phase are independently formulable. Innovation can generate questions for all five in parallel.
- **Tier 2 (P6):** P6 is meta-level — it observes whether P1-P5's measurements improve over time. P6 requires P1-P5 to have committed questions first (otherwise there's nothing to observe the improvement of). Strict dependency.

**No circular dependencies.**

**Parallel work opportunities for Innovation:** P1, P2, P3, P4, P5 in parallel.

**Forced serial transition:** Tier 1 → Tier 2 (P1-P5 must commit questions before P6 can commit what it measures).

---

## Step 7 — Self-Evaluation

### Minimum 3 dimensions

| Dimension | Check | Verdict |
|---|---|---|
| **Independence** | Can each piece be worked on without the others existing? | **PASS.** P1, P2, P3, P4, P5 are independently answerable (each observes a different cross-cycle property). P6 depends on P1-P5 via defined interface I5. |
| **Completeness** | Do the pieces cover the whole? | **PASS.** All 15 candidate dimensions from exploration map into one of the 6 pieces. All four cross-cycle phases covered. Substrate covered (P5). Harness-scope covered (P6). Absence-of-failure family distributed across P1, P3, P4 per sensemaking's first-class commitment. Transverse properties (scope / modality / calibration-state) handled within each piece's verification criteria. |
| **Reassembly** | Pieces + interfaces = whole? | **PASS.** Given each piece's questions answered + interfaces satisfied (I1 substrate-gating, I2-I4 cycle-event continuity, I5 longitudinal observation, I6 symptom-catalog reference) → the ~15 measurable questions span sensemaking's committed conceptual model fully. |

### Full 7 dimensions (this is a complex decomposition; full evaluation warranted)

| Dimension | Check | Verdict |
|---|---|---|
| **Independence** | (see above) | PASS |
| **Completeness** | (see above) | PASS |
| **Reassembly** | (see above) | PASS |
| **Tractability** | Each piece small enough for a single focused pass? | **PASS.** Each piece's verification target is 1-4 questions; Innovation can generate them in a single focused pass per piece. |
| **Interface clarity** | All cross-piece flows explicit? Hidden dependencies surfaced? | **PASS.** 6 interfaces enumerated with direction + flow type. Assumptions-not-data check explicitly applied; 6 hidden assumptions surfaced and captured in verification criteria. |
| **Balance** | Complexity proportional across pieces? | **PASS-WITH-NOTE.** Question targets: P1 ~3, P2 ~3, P3 ~4, P4 ~3, P5 ~1, P6 ~1. Total ~15 (matches user's target). Slight imbalance — P3 magnitude is heaviest (5 dimensions cluster there); P5 and P6 are lightest (single-dimension each). The imbalance is proportional to underlying conceptual density, not a defect. |
| **Confidence** | Top-down + bottom-up agree? | **PASS (HIGH).** Top-down (Path A: 4 phases + substrate + scope) and bottom-up (15 dimensions → 6 piece-groups) produce the same 6 pieces with the same clustering. Determination-mechanism check (absence-of-failure family) resolved by distribution within pieces rather than as a separate piece. |

### Failure mode check

- **Premature Decomposition:** NO — sensemaking clarified the conceptual model first (SV1→SV6 with 7 ambiguities resolved). Decomposition runs on stable understanding.
- **Wrong Boundaries:** NO — coupling map shows cuts at LOW-coupling regions (between phases; between substrate and phases; between object-level and meta-level). HIGH coupling within pieces (the dimensions in each cluster co-observe the same cross-cycle property).
- **Hidden Coupling:** NO — assumptions-not-data check applied; 6 hidden assumptions surfaced and captured. The substrate-gating relationship (I1) made explicit so P1-P4 don't pretend independence from P5's validity check.
- **Missing Pieces:** NO — determination-mechanism check fired and was resolved (absence-of-failure family distributed across phase pieces with explicit symptom-catalog reference; no separate piece needed). All 15 dimensions accounted for.
- **Over-Decomposition:** NO — 6 pieces is right-sized for ~15 questions across the conceptual model's 4 phases + 2 cross-cutting concerns. Going finer (e.g., separating direct-vs-absence into separate pieces per phase) would split tightly-coupled co-observed measurements.
- **Ignoring Dependencies:** NO — 2-tier dependency order explicit; no circular dependencies; parallel-safe block (P1-P5) and forced-serial dependency (P6) identified.
- **Imbalanced Decomposition:** NO — balance is proportional to underlying conceptual density. P3 is heaviest because magnitude is where the highest-density cluster lives (5 dimensions); P5/P6 are lightest because each addresses a single-dimension concern. No piece is dominated.

---

## Self-Assessment

**Overall: PROCEED** (all 7 dimensions pass; all 7 failure modes checked clean; coupling map produced; question tree with verification criteria committed for 6 pieces; interface map with direction + flow type + 6 assumption-checks; dependency order 2-tier with parallel + serial sub-blocks; reassembly test passes).

**Handoff to Innovation:**

The 6 pieces are the sub-problems Innovation generates question wordings for. Total target: ~15 questions across all pieces, distributed roughly as:
- P1 trigger: ~3 questions
- P2 speed: ~3 questions (user's two seed dimensions explicitly anchored)
- P3 magnitude: ~4 questions (heaviest cluster)
- P4 retention: ~3 questions
- P5 substrate: ~1 question
- P6 harness-scope: ~1 question

Innovation should:
- Per piece, generate candidate question wordings using the 7 mechanisms (4 Generators + 3 Framers).
- For each candidate, apply the proximately-measurable + consistently-measurable test from sensemaking SV5.
- Tag each candidate with: scope (discipline / corpus / harness as applicable); modality (mechanistic / meaning-producing / both); calibration-state (today / when-mature).
- Where absence-of-failure measurement applies, reference the specific symptom from `enes/regression/desc.md`.
- Run the assembly check after individual question generation: do the ~15 questions collectively span sensemaking's conceptual model coverage requirements? Are any phase / scope / modality / calibration-state combinations under-covered?

**Handoff to Critique:**

The 6-piece structure + the 6 verification criteria per piece + the proximately-and-consistently-measurable bar provides the evaluation scaffolding. Critique evaluates each candidate question against:
- The piece's verification criteria (does this question belong in this piece and answer the piece's question?).
- The proximately-measurable + consistently-measurable bar.
- The traceability to the primary anchor (rate of change of task-completion-ability).
- The frame-regression risk (does this question accidentally measure task-completion rate or capability growth or another neighbor concept instead of self-improvement rate?).
- The frame-coverage check (across all ~15 questions, do all 4 phases + 3 scopes + 2 modalities + 2 calibration-states receive coverage where load-bearing?).
