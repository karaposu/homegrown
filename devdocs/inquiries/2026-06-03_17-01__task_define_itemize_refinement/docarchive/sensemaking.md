## User Input

`devdocs/inquiries/2026-06-03_17-01__task_define_itemize_refinement/_branch.md` (prior consumed: `surfacing.md` — 49 items across 9 regions; 7 frontier flags P1–P7; P1+P2+P4 flagged load-bearing-first)

---

# Sensemaking — Itemize Refinement (Default-Keep-Together)

## SV1 — Baseline understanding
"The current Itemize description 'split into distinct atomic items' is at risk of premature itemization when applied to single-task statements with multiple specifications. The user's reframe 'detect if completely different tasks are given' is more accurate. Asymmetric-failure applies with bias toward keep-together. The refinement is contained to Itemize."

---

## Phase 1 — Cognitive Anchor Extraction

**Constraints:**
- **C1 — Layer = MEANING (Itemize only).** Other operations / ordering / NOT-list (except category 4 disambiguation) / etc. out of scope.
- **C2 — Refines, not re-opens.** Only Itemize is touched; the rest of Task-Define is settled at the prior finding.
- **C3 — Self-containment preserved** (memory `feedback_disciplines_self_contained`). The refined Itemize description contains no neighbor-discipline / prior-arc references.
- **C4 — Asymmetric-failure principle applies** (per surfacing Region C). Direction is INVERTED from surfacing's lean-to-include — cost of premature-split > cost of late-split → bias toward keep-together.
- **C5 — Specifications-vs-tasks distinction is structural** — grounded in the project's existing 5-meta-aspects framing (subject + action + deliverable-shape — three of the five aspects from the `_branch.md` template).
- **C6 — Lightweight criterion (vi) satisfied** — refined Itemize's output (items list with default cardinality 1) is load-bearing (the count signals the runner).

**Key insights:**
- **K1 (empirical test verdict — resolves P1).** Applied current Itemize description to the prior 15-39 Source Input: the input has 11+ specification-clauses across 3 message iterations BUT ONE subject (the discipline being redefined), ONE action (redefine), ONE deliverable-shape (the meaning-layer definition of Task-Define). Default-split reading of "split into distinct atomic items" would produce 11+ items where the structural reality is **1 task + 11 specifications**. **HARM CONFIRMED.** The current wording is structurally over-inclusive at the splitting end.
- **K2 (user's reframe verdict — resolves P2).** "Detect if completely different tasks are given in one query or not" is structurally accurate. The "completely different" qualifier maps to distinct (subject, action, deliverable-shape) tuples. The "or not" framing is the asymmetric-failure direction. The hypothesis **SURVIVES** the empirical test and grounds in the project's existing pattern.
- **K3 (refined verb-meaning — resolves P4).** Itemize is the cognitive operation of **perceiving whether the task statement contains multiple completely-different tasks** — tasks distinguished by distinct (subject, action, deliverable-shape) tuples — versus a single task with multiple specifications. The default verdict is **one item** (the whole statement); split-fire only on clearly-distinct-tuple detection.
- **K4 (specifications-vs-tasks structural rule — resolves P3).** A SINGLE task has ONE (subject, action, deliverable-shape) tuple. Multiple SPECIFICATIONS of that task vary along: properties, constraints, operation details, illustrations, clauses, rationales, invitations. Specifications converge on ONE tuple. MULTIPLE tasks have N distinct tuples. Worked positive: "fix the auth bug AND build the billing feature" — distinct subjects + actions + deliverable-shapes. Worked negative: prior 15-39 Source Input — one tuple + 11 specification facets.
- **K5 (asymmetric-failure direction — resolves P5).** Cost of premature-split (separating coherence; downstream operations on fragments; meaning-lock in wrong space; effectively a different inquiry running) is **structurally irrecoverable**. Cost of late-split (multi-task treated as single; Meta-question MQ2 + the user catches and corrects) is **recoverable**. **Bias: toward keep-together.** Direction is INVERTED from surfacing's lean-to-include for relevance-tagged items because Itemize's items are TASKS — the cost structure is opposite.
- **K6 (ripple-effect resolution — resolves P6).** Minimal ripple:
  - Per-item operations (Meta-question, Deconstruct, MultiScope, Rephrase) operate per item regardless — just per-1-item by default. NO ripple to the operations themselves.
  - Verb-meaning sentence at P0: "itemization" still applies. UNCHANGED.
  - Intra-discipline ordering: Itemize still first. UNCHANGED.
  - Perception/action split: Itemize perceives count; runner acts on it. UNCHANGED.
  - NOT-list category 4 (cross-item interpretation excluded): **needs a one-line disambiguation appended** — multi-detection ≠ cross-item interpretation.
  - Lightweight criterion (vi): items list output is load-bearing (count is the signal). SATISFIED.
- **K7 (Itemize as load-bearing perception in single-item case — resolves P7).** When Itemize emits 1 item, the operation is **NOT a no-op**. The COUNT = 1 verdict is itself the signal to the runner: "process in place; do not spawn." Without Itemize's perception, the runner has no signal to determine spawn-or-not. Load-bearing in both single-item and multi-item cases.

**Structural points:**
- **SP1 (refined Itemize mechanism description, replaces prior §2 Itemize text):** "Itemize (statement-level) — input: the raw task statement. Mechanism: PERCEIVE whether the statement contains multiple completely-different tasks (tasks distinguished by distinct (subject, action, deliverable-shape) tuples) versus a single task with multiple specifications. The cost of premature-split (separating coherence in a single-task statement) is structurally greater than the cost of late-split (a multi-task statement treated as one); the operation biases toward keep-together. Default: emit ONE item (the whole statement). Emit N items only when clearly distinct (subject, action, deliverable-shape) tuples are established. Output: a list of items with cardinality = 1 by default."
- **SP2 (specifications-vs-tasks structural rule):**
  - Same task with multiple specifications → ONE item.
  - Multiple tasks → N items (one per task).
  - Ambiguous between the two → ONE item (asymmetric-failure bias).
- **SP3 (output shape — load-bearing per criterion vi):** the count is the signal for the runner; the items list is the substantive content. Single-item case: count = 1 signals "process in place." Multi-item case: count > 1 signals "spawn-set" to the runner-side spawn mechanism.
- **SP4 (NOT-list category 4 disambiguation):** appended to the prior finding's NOT-list category 4 — *"Itemize's perception of WHETHER multiple distinct tasks exist (count-perception) is INTRINSIC to itemization and is NOT the cross-item interpretation excluded here. Cross-item interpretation is the operation of claiming relational meaning across items once separated (e.g., 'item 1 enables item 2'); count-perception is the operation of perceiving cardinality. They are distinct cognitive operations; only the relational one is excluded."*

**Foundational principles:**
- **FP1 (asymmetric-failure for Itemize — inverted direction).** Cost of premature-split is irrecoverable; cost of late-split is recoverable. Bias toward keep-together. Direction INVERTS surfacing's lean-to-include because Itemize's items are TASKS, not relevance-tagged items.
- **FP2 (perception/action split holds).** Itemize perceives multi-task structure; the runner acts on the count (spawn-set or process-in-place). Unchanged from the prior finding.
- **FP3 (specifications and tasks are structurally distinct).** The (subject, action, deliverable-shape) tuple is the bound. Specifications vary along properties/constraints/facets; tasks differ along the tuple itself.
- **FP4 (refinement scope is contained to Itemize).** No broader re-opening of Task-Define; the rest of the prior finding's design holds.

**Meaning-nodes:** Itemize (refined: perceive whether multiple completely-different tasks exist; default one item) · Specifications-vs-tasks (the structural test via (subject, action, deliverable-shape) tuples) · Asymmetric-failure for Itemize (inverted direction; bias toward keep-together) · Multi-detection vs cross-item interpretation (NOT-list category 4 disambiguation) · Load-bearing single-item output (count = 1 IS the signal).

### SV2 — Anchor-informed understanding
The current Itemize wording's default-split reading is structurally over-inclusive when applied to single-task statements with multiple specifications; the empirical test against the prior 15-39 Source Input confirms harm (1 task + 11 specifications; current wording would produce 11+ items). The user's reframe ("detect if completely different tasks are given in one query or not") is structurally accurate, with "completely different" mapping to distinct (subject, action, deliverable-shape) tuples. Asymmetric-failure applies with bias toward keep-together (inverted direction from surfacing's lean-to-include because cost structure is opposite). Refined verb-meaning: perceive whether multiple completely-different tasks exist; emit a count + items list with default cardinality 1. The single-item case is load-bearing (count = 1 is the signal). Ripple-effects: minimal — only NOT-list category 4 gets a one-line disambiguation appended.

*Meta-inspection cross-reference (H4 + H5):* Concept names (Itemize / "completely different tasks" / asymmetric-failure) all user-language-aligned or project-domain-aligned. Motivating examples (B-Σ from surfacing + E6/E7 worked positive/negative cases) are not specific-only — they exemplify the structural pattern.

---

## Phase 2 — Perspective Checking

- **Technical/Logical.** The refined verb-meaning is implementable: the LLM perceives (subject, action, deliverable-shape) tuples in the task statement and counts them. The asymmetric-failure bias is a default value (count = 1) relaxed only on clear positive detection. No internal-mechanism inconsistency.
- **Human/User.** The user explicitly invited honest testing ("but maybe i am wrong") and named a specific test. The refinement honors the user's intent verbatim: the test was performed; the hypothesis was confirmed with structural grounding. The user's "completely different" qualifier is preserved verbatim in the refined verb-meaning. **New anchor:** the user's pattern of inviting tests (rather than directives) is itself a signal — the design should retain testability against future Source Inputs.
- **Risk/Failure.**
  - (R1) The refined Itemize might MISS real multi-task cases (too keep-together-biased). Mitigated by SP2's structural fire-rule (distinct tuples are clear positive signals) plus the user / Meta-question's MQ2 as the late-catch.
  - (R2) The "completely different" qualifier could be interpreted too liberally (treating "different aspects" as "different tasks"). Mitigated by SP2's tuple bound + the worked positive/negative examples that the structural-layer spec will carry.
- **Resource/Feasibility.** The refinement is small (one paragraph replacement + one line append). Bounded cost.
- **Definitional/Internal-consistency.** Does the refined Itemize contradict any commitment in the prior finding?
  - P0 verb-meaning sentence: "itemization" still applies. ✓
  - Intra-discipline ordering: Itemize first. ✓
  - Lightweight criterion (vi): output load-bearing (count is the signal). ✓
  - NOT-list category 4: needs disambiguation (SP4); resolved.
  - Perception/action split: Itemize perceives; runner acts. ✓
  - **No contradictions.**
- **Definitional/Frame-exit Completeness** *(gating fires — "task" is used at ≥2 distinct values):*
  - **Existence enumeration for "task":** (a) the INPUT task — the raw statement (one task by default); (b) the OUTPUT items — each potentially a sub-task in the multi-fire case; (c) the cognitive object "task" in Task-Define's name (the discipline operates on tasks).
  - **Role assessment** for (b) — load-bearing as the structural unit Meta-question / Deconstruct / MultiScope / Rephrase operate on per item.
  - **Verdict rigor** — boundary "input task ≠ output items in the multi-fire case." Strongest counter: "in single-fire, output item = input statement, so the distinction is artificial." Why counter fails: the input is the RAW STATEMENT; the output items are PERCEIVED UNITS (after Itemize). In single-fire, the substantive item content equals the input, BUT the PERCEPTION (count = 1 verdict) is the load-bearing additional content beyond just the statement. The distinction is real, not artificial.
  - **Residual coverage:** "specification" — used within the single-task case as facets of one task. Within-frame; no frame-exit concern. **Termination:** no further substantive concerns.
- **Phase/Calibration-State.** Not phase-dependent; the asymmetric-failure direction (bias toward keep-together) is a static structural commitment.

*Meta-inspection cross-reference (after SV3 — H1 / H2 / H3 / H7):* H1 candidate set: the candidates being adjudicated are (refined verb-meaning, default direction, structural test, NOT-list disambiguation, single-item-case load-bearing) — distinct, not convergence-collapsed. H2 frame scope: meaning-layer for Itemize only; rest of Task-Define explicitly out-of-frame. H3 question framing: user's verbatim framing preserved. H7 phase/calibration: phase-independent.

### SV3 — Multi-perspective understanding
Seven perspectives consulted; the model survives all. Frame-exit on "task" surfaces 3 referents — the input-vs-output-items distinction is real (the count = 1 verdict is load-bearing additional content beyond the statement). Two risks named with mitigations (tuple bound on "completely different"; structural fire-rule for missed multi-task cases). Resource-feasibility: small. Definitional consistency: holds with the one-line NOT-list category 4 disambiguation. Phase-independent.

---

## Phase 3 — Ambiguity Collapse

#### A1 — Default to one item or default to multi-item?

- **Strongest counter:** "default to multi-item is safer because it surfaces all asks."
- **Why counter fails (structural):** surfacing multi-item by default DESTROYS meaning coherence in single-task-with-specifications cases (the harm the user identified). The asymmetric-failure principle directly applies: cost of premature-split (separating coherence; downstream operations on fragments) is structurally irrecoverable; cost of late-split (Meta-question MQ2 + user catches and corrects) is recoverable. The cost asymmetry is structural, not preferential.
- **Confidence:** HIGH.
- **Resolution:** **default = ONE item.**
- **Fixed:** the default verdict.
- **No longer allowed:** default-multi-item Itemize.
- **Now depends on:** all downstream operations operating per-item; the runner's spawn-or-process-in-place decision logic.
- **Conceptual-model change:** Itemize biases toward preserving coherence by default; split is the exception requiring positive justification.

#### A2 — What makes two things "completely different tasks" structurally?

- **Strongest counter:** "completely different" is subjective; without structural grounding, every Itemize invocation re-decides the boundary.
- **Why counter fails (structural):** the project's existing 5-meta-aspects framing (from the `_branch.md` template) provides structural grounding. Three of the five — subject, action, deliverable-shape — define what a task IS structurally. Two distinct (subject, action, deliverable-shape) tuples ARE two completely-different tasks. The remaining two aspects (level, observation-targets) are within-task variations, not task-distinguishers.
- **Confidence:** HIGH.
- **Resolution:** **multiple tasks = N distinct (subject, action, deliverable-shape) tuples.** Worked positive: "fix the auth bug AND build the billing feature." Worked negative: prior 15-39 Source Input.
- **Fixed:** the structural test for split-fire.
- **No longer allowed:** Itemize firing on within-task variation (different facets, different specifications); Itemize firing on "different aspects of the same task."
- **Now depends on:** the LLM's perception of the (subject, action, deliverable-shape) tuple in the input statement.
- **Conceptual-model change:** "completely different" gets a project-grounded structural definition rather than remaining intuitive.

#### A3 — Is Itemize's multi-detection a NOT-list category 4 violation?

- **Strongest counter:** "perceiving 'there are 2 distinct tasks' IS cross-item perception, which the NOT-list category excludes."
- **Why counter fails (structural):** NOT-list category 4 excludes cross-item INTERPRETATION — relational meaning across items once separated ("item 1 enables item 2"). Multi-detection is COUNT-PERCEPTION — perceiving cardinality. They are different cognitive operations: count-perception is intrinsic to itemization (you cannot itemize without perceiving count); relational interpretation is a different verb (claiming relations across items). Conflating them collapses Itemize's load-bearing perception.
- **Confidence:** HIGH.
- **Resolution:** **multi-detection ≠ cross-item interpretation.** A one-line disambiguation appended to NOT-list category 4 (per SP4): *"Itemize's perception of WHETHER multiple distinct tasks exist (count-perception) is intrinsic to itemization and is NOT the cross-item interpretation excluded here."*
- **Fixed:** the disambiguation.
- **No longer allowed:** treating count-perception as cross-item interpretation; using NOT-list category 4 to exclude Itemize's multi-detection.
- **Now depends on:** the structural-layer spec author writing the NOT-list category 4 entry with this disambiguation line.
- **Conceptual-model change:** category 4 no longer collapses into Itemize's perception.

#### A4 — Is Itemize a no-op in the single-task case?

- **Strongest counter:** "if Itemize outputs 1 item which equals the input, the operation did nothing."
- **Why counter fails (structural):** the COUNT = 1 verdict IS load-bearing — it is the signal to the runner "process in place; do not spawn." Without Itemize's perception, the runner has NO signal to determine spawn-or-not. The operation's PERCEPTION is the load-bearing content; the substantive item content equaling the input is a coincidence of single-fire, not evidence that the operation did nothing.
- **Confidence:** HIGH.
- **Resolution:** **Itemize is load-bearing in the single-item case via the count verdict.**
- **Fixed:** the operation is load-bearing in both single and multi cases.
- **No longer allowed:** treating Itemize as a no-op; skipping Itemize in the single-task case for "efficiency."
- **Now depends on:** the runner reading the count to dispatch spawn-or-process-in-place.
- **Conceptual-model change:** Itemize's value is in the PERCEPTION (the count), not only in the SUBSTANTIVE OUTPUT (the items).

#### A5 — Should the count be an explicit output field, or implicit in items-list cardinality?

- **Strongest counter (a — explicit):** legibility; the runner doesn't have to derive count from list length.
- **Why (a) partially fails:** the count is trivially derivable. Adding an explicit count field is heaviness (lightweight criterion (iv)).
- **Strongest counter (b — implicit):** could the items-list have edge cases (empty list?) where count is ambiguous?
- **Why (b) holds:** Itemize's contract is count ≥ 1 (always at least 1 item — the statement itself); empty list is excluded. Implicit cardinality is unambiguous.
- **Confidence:** MED (partly structural-layer concern).
- **Resolution:** **implicit in items-list cardinality.** Meaning-layer commits to "items list with count derivable"; structural-layer can choose explicit field surfacing if needed.
- **Fixed:** the meaning-layer commitment is to load-bearing perception via cardinality.
- **Conceptual-model change:** count is not its own output field; cardinality is sufficient.

#### A6 — Does the refined Itemize affect the prior finding's other commitments?

- **Strongest counter:** "per-item operations might need special-case logic for single-item."
- **Why counter fails:** per-item operations operate per item regardless. With 1 item, they operate once. With N items, they operate N times. No special-case logic — the per-item qualifier handles both cases uniformly.
- **Confidence:** HIGH.
- **Resolution:** **minimal ripple.** Only NOT-list category 4 gets a one-line disambiguation appended; all other prior-finding sections unchanged.
- **Fixed:** the ripple-effect scope.
- **Conceptual-model change:** the refinement is genuinely contained to Itemize + a one-line NOT-list adjustment.

#### A7 — Is the user's reframe fully adopted, or with refinements?

- **User's verbatim reframe:** "detect if completely different tasks are given in one query or not."
- **Refined verb-meaning preserves:** "completely different tasks" (user verbatim); "or not" framing (asymmetric-failure direction).
- **Refined verb-meaning grounds:** "completely different" structurally via (subject, action, deliverable-shape) tuples; "or not" direction via asymmetric-failure cost structure.
- **Confidence:** HIGH.
- **Resolution:** **user's reframe ADOPTED with structural grounding added** (not contradicted, just sharpened).

#### A8 — Load-bearing concept test (per refinement note)

- **"Itemize"** — user-chosen at the prior finding; carries forward. PASS user-language alignment.
- **"Completely different tasks"** — user verbatim in this inquiry's Source Input. PASS.
- **"Perceive"** — refined version's chosen verb; matches the project-wide perception/action vocabulary from the prior finding. PASS project-domain alignment.
- **"(subject, action, deliverable-shape) tuple"** — sensemaking-introduced from the project's existing 5-meta-aspects framing in the `_branch.md` template. Project-domain-terminology aligned. PASS.
- **"Default = one item"** — sensemaking-coined; the structural articulation of the asymmetric-failure bias. PASS.
- **"Load-bearing perception"** — explains why single-item-case Itemize is not a no-op. PASS.
- **All load-bearing concepts PASS** user-language + project-domain-terminology alignment.

#### A9 — Specific-vs-pattern recognition cue (per refinement note)

- The empirical test (K1) was against ONE specific input (prior 15-39 Source Input). Does it generalize?
- The structural pattern identified (single-task-with-specs = ONE (subject, action, deliverable-shape) tuple) IS the generalizable claim; the test exemplifies the pattern.
- The pattern's generality is also supported by Region F (project-history examples — most inquiries are single-task-with-many-facets).
- **PASS — pattern-treatment, not specific-only.**

#### A10 — Self-reference (H8 hook + failure mode #6 corrective)

- This sensemaking uses sensemaking on a discipline-refinement. External grounding:
  - The user's verbatim reframe + named empirical test (external evidence).
  - The project's existing asymmetric-failure principle from `cognitive_harness/surfacing/references/surfacing.md` §4.4 (external structural pattern).
  - The project's existing 5-meta-aspects framing from the `_branch.md` template (external structural pattern).
  - LOOP_DIAGNOSE 11-46 MC2 trigger-then-verify pattern (external structural pattern).
- External grounding present in adequate quantity.

### SV4 — Clarified understanding
Ten ambiguities resolved (9 HIGH, 1 MED). Refined Itemize is concretely operational: default = ONE item; split-fire on distinct (subject, action, deliverable-shape) tuples; load-bearing perception in both single-fire and multi-fire cases (count is the signal); NOT-list category 4 disambiguated; minimal ripple-effects; user's reframe adopted with structural grounding. User-language + project-domain alignment verified for all concepts. Self-reference risk bounded.

---

## Phase 4 — Degrees-of-Freedom Reduction

**Fixed:**
- Refined verb-meaning: "perceive whether the statement contains multiple completely-different tasks; default emit ONE item; emit N items only when distinct (subject, action, deliverable-shape) tuples are established."
- Default verdict: ONE item.
- Split-fire condition: distinct (subject, action, deliverable-shape) tuples.
- Specifications-vs-tasks rule: specifications converge on ONE tuple; tasks have N distinct tuples; ambiguous → ONE item.
- Asymmetric-failure direction: bias toward keep-together.
- Load-bearing in single-item case: count = 1 IS the signal to the runner.
- NOT-list category 4 disambiguation: multi-detection ≠ cross-item interpretation; one-line append.
- Ripple-effects: minimal — only NOT-list category 4 + the §2 Itemize description text are touched.
- User's reframe: adopted with structural grounding added.

**Eliminated:**
- "Split into distinct atomic items" as the verb-meaning's default reading.
- Default-multi-item Itemize.
- Treating Itemize as a no-op in single-item cases.
- Treating multi-detection as a NOT-list category 4 violation.
- "Different aspects of the same task" firing Itemize positively.
- Re-opening any other commitment of the prior 15-39 finding.

**Remaining viable (handed to decomposition / structural-layer):**
- Exact one-paragraph spec wording for the refined §2 Itemize description (structural-layer).
- Whether the structural-layer spec surfaces count as an explicit field or as items-list cardinality (structural-layer choice).
- Worked positive/negative examples in the structural-layer spec.

### SV5 — Constrained understanding
Design space is closed to: refined §2 Itemize description (replacing the prior wording) + one-line NOT-list category 4 disambiguation appended. The rest of the prior finding is untouched. The structural-layer spec author can transcribe these two changes directly.

---

## Phase 5 — Conceptual Stabilization

**Accommodation trigger check:** are perspectives producing destabilizing anchors? **No.** Every perspective in Phase 2 reinforced the model. The model settled cleanly; no patching pattern. Accommodation trigger does NOT fire.

*Meta-inspection cross-reference (after SV5 + SV6):* H6 model fit — model did not require revision-by-patching across perspectives; settlement is genuine. H8 self-reference — externally grounded via user + project's existing principles. H9 user language alignment — preserved verbatim.

### SV6 — Stabilized Model

**Itemize — Refined Meaning-Layer Definition (Stabilized)**

1. **Refined verb-meaning** (replaces the prior 15-39 finding's §2 Itemize description):
   > **Itemize** (statement-level) — input: the raw task statement. Mechanism: PERCEIVE whether the statement contains multiple **completely-different tasks** — tasks distinguished by distinct (subject, action, deliverable-shape) tuples — versus a single task with multiple specifications (properties, constraints, operation details, illustrative clauses, rationales, invitations, or other facets that share the same subject + action + deliverable-shape). The cost of premature-split (separating coherence in a single-task statement) is structurally greater than the cost of late-split (a multi-task statement treated as one — downstream Meta-question and the user can catch and correct). The operation biases toward keep-together: default emit **one item** (the whole statement); emit N items only when clearly distinct (subject, action, deliverable-shape) tuples are established. The count is itself the signal — count = 1 means "process in place"; count > 1 means "spawn-set" to the runner. Output: an items list with cardinality ≥ 1.

2. **Specifications-vs-tasks structural rule:**
   - Single task = ONE (subject, action, deliverable-shape) tuple. Multiple specifications of that task vary along: properties (e.g., "lightweight," "from-scratch"); operation details; illustrations; clauses; rationales; invitations. Specifications converge on ONE tuple.
   - Multiple tasks = N distinct (subject, action, deliverable-shape) tuples. Worked positive: *"fix the auth bug AND build the billing feature"* — distinct subjects (auth vs billing), distinct actions (fix vs build), distinct deliverable-shapes (bug-fix vs feature). Worked negative: the prior 15-39 finding's Source Input — single subject (the discipline being redefined), single action (redefine), single deliverable-shape (the meaning-layer definition of Task-Define); the 11 specification-clauses are facets, not separate tasks.
   - Ambiguous between specifications-of-one-task and multiple-distinct-tasks → bias toward single-task (one item).

3. **Asymmetric-failure direction:** bias toward keep-together. The asymmetric-failure PRINCIPLE (asymmetric cost) is shared with surfacing's §4.4, but the DIRECTION is INVERTED here because Itemize's items are TASKS (not relevance-tagged items): mistakenly separating tasks destroys coherence (irrecoverable); mistakenly bundling tasks is recoverable (downstream catches and corrects).

4. **Load-bearing perception in single-item case:** when Itemize emits one item, the operation is **NOT a no-op**. The count = 1 verdict is itself the signal to the runner — "process in place; do not spawn." Without Itemize's perception, the runner has no signal to determine spawn-or-not. Itemize is load-bearing in both single-item and multi-item cases.

5. **Multi-detection vs cross-item interpretation (one-line disambiguation appended to NOT-list category 4 of the prior finding):**
   > *Note on Itemize: Itemize's perception of WHETHER multiple distinct tasks exist (count-perception) is INTRINSIC to itemization and is NOT the cross-item interpretation excluded by this category. Cross-item interpretation is the operation of claiming relational meaning across items once separated (e.g., "item 1 enables item 2"); count-perception is the operation of perceiving cardinality. Only the relational one is excluded.*

6. **Ripple-effects on the prior 15-39 finding:**
   - §2 Itemize description: REPLACED by the refined verb-meaning above (item 1).
   - §10 NOT-list category 4: APPENDED with the one-line disambiguation (item 5).
   - All other prior-finding sections: UNCHANGED. Specifically — §3 Intra-discipline ordering (Itemize still first); P0 verb-meaning sentence (itemization still applies); §6 lightweight criterion (vi) (satisfied); perception/action split (preserved); §9 lightweight stance's other criteria; §11 self-containment; §12 supersession structure.

7. **User's reframe verdict: ADOPTED with structural grounding added.** The user's hypothesis ("Itemize is about detecting if completely different tasks are given in one query or not") is structurally accurate; the refinement adds the (subject, action, deliverable-shape) tuple as the structural test and grounds the bias direction in the project's existing asymmetric-failure pattern. The user's verbatim "completely different" qualifier is preserved.

**How SV6 differs from SV1:** SV1 was correct in direction but unspecific. SV6 fixes:
- The empirical test verdict with structural reasoning (B-Σ confirmed; the current wording's default-split is harm).
- The refined verb-meaning sentence with explicit perception + default + fire-condition (item 1).
- The (subject, action, deliverable-shape) tuple as the structural test for "completely different" (item 2; grounded in the project's 5-meta-aspects framing).
- The asymmetric-failure direction with inversion explanation (item 3; cost structure differs from surfacing).
- The multi-detection vs cross-item interpretation disambiguation (item 5; one-line append to NOT-list category 4).
- The load-bearing single-item case argument (item 4; count = 1 IS the signal).
- The minimal ripple-effects assessment (item 6).
- The user's reframe explicitly adopted with grounding (item 7).

---

## Saturation Indicators

- **Perspective saturation:** 7 perspectives (Technical / Human / Risk / Resource / Definitional-consistency / Frame-exit / Phase-calibration); last 2 (Frame-exit + Phase) confirmed without new anchor types. Saturated.
- **Ambiguity resolution:** 10/10 resolved (9 HIGH, 1 MED). High ratio; none silently dropped.
- **SV delta:** SV1 (instinct-level read) → SV6 (full refined meaning-layer definition with structural grounding + disambiguation + ripple-effects assessment). Substantial delta.
- **Anchor diversity:** 6 constraints + 7 key insights + 4 structural points + 4 foundational principles + 5 meaning-nodes across 7 perspectives. Diverse.

---

## Frontier (to Decomposition / Innovation / Critique)

- **D1 — Decomposition.** Partition the refinement into authorable pieces. Expected: P0 anchor (shared verb-meaning + perception/action split — inherited from prior finding) + R1 refined Itemize one-paragraph text + R2 NOT-list category 4 disambiguation one-line append.
- **D2 — Innovation.** Produce concrete authorable content (mostly already in SV6 items 1 + 5; innovation step formalizes for transcription).
- **D3 — Critique pressure-test targets:**
  - (a) Does the (subject, action, deliverable-shape) tuple actually bound "completely different" in worked examples (E6 + E7 + others)?
  - (b) Is the multi-detection vs cross-item interpretation disambiguation airtight under prosecution?
  - (c) Does the asymmetric-failure direction-inversion explanation hold (the cost structure differs from surfacing's)?
  - (d) Does the load-bearing-in-single-item-case argument survive (count = 1 IS the signal)?
  - (e) Self-reference recursion: applied to THIS inquiry's Source Input, does refined Itemize fire 1 (correct) or N? This inquiry's Source Input is one task (refine Itemize) with multiple specifications (test the wording; check asymmetric-failure direction; ripple-effects; user's reframe). One subject + one action + one deliverable-shape → ONE item. Recursion fitness preserved.
  - (f) Does the prior finding's lightweight criterion (vi) really hold for the refined Itemize output (the items list with count = 1 by default)?
