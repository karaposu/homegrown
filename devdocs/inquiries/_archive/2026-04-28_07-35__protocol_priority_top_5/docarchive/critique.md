# Critique: Protocol Priority Top 5

## User Input

`devdocs/inquiries/2026-04-28_07-35__protocol_priority_top_5/_branch.md`

## Phase 0 - Dimensions With Weights

| Dimension | Weight | Success Criteria |
|---|---:|---|
| Current leverage | Critical | Protocol directly helps Homegrown improve fundamentals now. |
| Dependency correctness | Critical | Protocol is not ranked before the prerequisites it depends on. |
| Evidence generation | Critical | Protocol creates evidence usable by future improvement decisions. |
| Anti-overbuild | High | Protocol can start lightweight and does not pretend autonomy is ready. |
| Future leverage | High | Protocol unlocks or prepares multiple downstream capabilities. |
| Coherence with MVL/MVL+ atomicity | High | Protocol does not create a new cognitive primitive unless justified. |
| Practical actionability | High | User can implement or dogfood it without a large runner rewrite. |

## Phase 1 - Fitness Landscape

### Viable Region

Protocols that:

- formalize active user/system patterns;
- produce durable evidence;
- make source changes reversible and testable;
- enforce artifact/telemetry contracts;
- close the improvement loop with later outcomes;
- prepare Navigation/meta-loop using recorded traces, not hidden autonomy.

### Dead Region

Protocols that:

- add conceptual vocabulary without evidence;
- depend on missing telemetry or missing outcome data;
- turn MVL+ into a new open-ended core pipeline;
- let git history replace semantic evaluation;
- automate selection before selection traces exist.

### Boundary Region

Protocols that are important but not top-five now:

- meaningful traversal assessment;
- Resume check;
- autonomous selector;
- protocol inventory hygiene;
- reflect-to-memory.

These are not wrong; they are lower-priority or dependency-blocked.

## Phase 2 - Candidate Verdicts

### Candidate 1 - `loop_diagnose`

**Prosecution:** This may become bureaucracy around what MVL+ can already do. The project might waste time creating a protocol instead of just running diagnostic inquiries.

**Defense:** The protocol does not replace MVL+. It defines the correction-chain input contract and diagnostic output contract. That is exactly the missing piece identified by recent findings.

**Collision:** Defense wins. The current system already generates correction chains; failing to capture them wastes the best available maintenance evidence.

**Verdict:** SURVIVE as rank 1.

**Constructive output:** Keep it lightweight: a protocol/template, not a new `homegrown/loop-diagnose/SKILL.md` discipline.

### Candidate 2 - `maintenance_branch_experiment`

**Prosecution:** Branch experiments may be premature before there are several diagnostics. They could make the process heavier than needed.

**Defense:** The protocol does not require immediate branching. It defines what must be true before a fundamentals branch is created and how baseline/candidate comparison should work. This prevents arbitrary edits once source changes begin.

**Collision:** Defense wins with a gate: use it when a diagnostic finding motivates an actual `homegrown/` change.

**Verdict:** SURVIVE as rank 2.

**Constructive output:** The protocol should include branch name, diagnostic source, changed files, evaluation cases, baseline/candidate comparison, and outcome.

### Candidate 3 - `structural_integrity_and_telemetry_contract`

**Prosecution:** This combines two things: deterministic structural checks and semantic-ish verdict telemetry. Combining them may blur responsibilities.

**Defense:** Both are immediate enforcement substrate. The missing `tools/structural_check.sh` is a concrete defect. Telemetry verdicts are the prerequisite for Resume, routing, and quality awareness.

**Collision:** Defense wins, but with a refinement: rank it as one priority cluster and implement as two linked protocols or sections.

**Verdict:** SURVIVE / REFINE as rank 3.

**Constructive output:** Split implementation into:

```text
3a. Structural Integrity Contract
3b. Telemetry Verdict Contract
```

### Candidate 4 - `retrospective_outcome_review`

**Prosecution:** It cannot produce immediate value until there are later outcomes. It might be less urgent than fixing structural checks.

**Defense:** It is the closure mechanism for self-maintenance. Without it, source changes and branch experiments never become retained/reverted/refined with evidence. It is also the Retrospective RC substrate.

**Collision:** Defense wins. It ranks fourth because it depends on earlier actions, but it must be designed before those actions are considered complete.

**Verdict:** SURVIVE as rank 4.

**Constructive output:** Use explicit gates: after 5 later inquiries, after a branch comparison, or after a finding is superseded/corrected.

### Candidate 5 - `navigation_selection_record`

**Prosecution:** The fifth slot might be better used by meaningful traversal because meaningful traversal is the real meta-loop stop/continue signal.

**Defense:** Meaningful traversal needs data: maps shown, selections made, reasons, resulting inquiries, and later outcomes. `navigation_selection_record` creates that data without pretending to solve traversal scoring.

**Collision:** Defense wins for current state. Meaningful traversal is strategically important, but it should follow trace collection.

**Verdict:** SURVIVE as rank 5.

**Constructive output:** Keep this as a record protocol, not an autonomous selector.

### Candidate 6 - `meaningful_traversal_assessment`

**Prosecution:** It is the anti-spinning signal for meta-loop. Without it, orchestration runs forever or stops arbitrarily.

**Defense:** The current meta-loop v1 already has qualitative traversal signals. A formal assessment protocol now would be under-calibrated because there are not enough traversal traces.

**Collision:** Defense wins for immediate ranking, but prosecution wins on strategic importance.

**Verdict:** REFINE / DEFER to rank 6.

**Constructive output:** Build after several Navigation selection records and meta-loop traces exist.

### Candidate 7 - `resume_check`

**Prosecution:** Resume was just clarified and has unique trust-gated continuation logic.

**Defense:** Resume's unique logic needs standardized telemetry. Basic resume already exists inline. The telemetry contract outranks Resume.

**Collision:** Defense wins.

**Verdict:** DEFER.

**Constructive output:** Revisit after telemetry verdicts exist across disciplines.

### Candidate 8 - `protocol_inventory_hygiene`

**Prosecution:** The protocol folder has ambiguous files (`resume.md`, `unknown.md`). A hygiene protocol could prevent future confusion.

**Defense:** Cleanup matters, but it does not create the learning loop that current goals require. It can be handled as part of structural integrity or a small cleanup pass.

**Collision:** Defense wins for top-five ranking.

**Verdict:** REFINE downward.

**Constructive output:** Include protocol status fields as a requirement inside structural integrity work or a later cleanup.

### Candidate 9 - New full cognitive discipline

**Prosecution:** Maybe failure diagnosis or outcome review is complex enough to deserve its own skill.

**Defense:** Recent findings explicitly preserve MVL/MVL+ as the atomic cognitive method. The current need is protocol framing, not a new primitive.

**Collision:** Defense wins.

**Verdict:** KILL for current stage.

**Seed from failure:** Promote only after 5-10 diagnostic MVL+ findings reveal a stable cognitive operation not captured by normal MVL+.

## Phase 3.5 - Assembly Check

### Assembly A - Evidence-First Self-Maintenance Stack

```text
loop_diagnose
-> maintenance_branch_experiment
-> structural_integrity_and_telemetry_contract
-> retrospective_outcome_review
-> navigation_selection_record
```

**Defense:** Covers diagnosis, controlled change, enforcement, closure, and traversal trace collection.

**Prosecution:** Structural integrity may need to happen before branch experiments in implementation.

**Collision:** Ranking survives, but implementation ordering should allow structural/telemetry work in parallel or before the first branch experiment.

**Verdict:** SURVIVE.

### Assembly B - Meta-Loop First Stack

```text
navigation_boundary_trigger
-> navigation_selection_record
-> meaningful_traversal_assessment
-> meta_loop_trace_review
-> autonomous_selector
```

**Defense:** Aligns with the user's meta-loop/whirl idea and long-term autonomy.

**Prosecution:** It builds motion before quality. The system still would not know which fundamentals are weak or whether changes improve future runs.

**Collision:** Prosecution wins for current goals.

**Verdict:** KILL as current top-five, keep as later roadmap.

### Assembly C - Enforcement First Stack

```text
structural_integrity_check
-> telemetry_verdict_contract
-> resume_check
-> primitive_rc_report
-> protocol_inventory_hygiene
```

**Defense:** Fixes the missing enforcement layer and makes routing possible.

**Prosecution:** It catches shape and telemetry defects, but not the higher-leverage correction-chain learning already happening through user feedback.

**Collision:** Partial. Enforcement is top-three but not the whole top-five.

**Verdict:** REFINE into rank 3.

## Phase 4 - Coverage Map

| Requirement | Covered? | Result |
|---|---:|---|
| Top five list | Yes | Five protocols ranked. |
| Priority reasoning | Yes | Ranked by current leverage, dependency correctness, and evidence generation. |
| Based on current goals | Yes | Uses rapid fundamentals improvement, quality awareness, git-backed self-maintenance, and meta-loop goals. |
| Based on current state | Yes | Accounts for existing CONCLUDE, dormant Resume, missing structural check, existing Navigation/meta-loop specs. |
| Immediate vs future distinction | Yes | Meaningful traversal, Resume check, autonomous selector deferred. |
| Honest opinion | Yes | Emphasizes evidence-first self-maintenance over more glamorous autonomy protocols. |

## Signal

TERMINATE with ranked survivors:

1. **`loop_diagnose`** - diagnostic MVL+ protocol/template for correction chains.
2. **`maintenance_branch_experiment`** - git-backed fundamentals variant protocol.
3. **`structural_integrity_and_telemetry_contract`** - structural check + standardized verdict substrate.
4. **`retrospective_outcome_review`** - retain/revert/refine closure protocol.
5. **`navigation_selection_record`** - human/meta-loop selection trace protocol.

Deferred but important:

6. **`meaningful_traversal_assessment`**
7. **`resume_check`**
8. **`protocol_inventory_hygiene`**
9. **autonomous selector**

## Convergence Telemetry

- Dimension coverage: all critical dimensions covered.
- Adversarial strength: STRONG. The ranking faced challenges from Resume, meaningful traversal, enforcement-first, and meta-loop-first alternatives.
- Landscape stability: STABLE. Exploration, sensemaking, decomposition, and innovation converged on evidence-first self-maintenance.
- Clean survivor exists: YES.
- Failure modes observed: none visible. The critique avoided rubber-stamping by killing or deferring several attractive candidates.
- **Overall: PROCEED** (critical dimensions covered + strong adversarial tests + stable ranked survivors)
