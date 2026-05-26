# Sensemaking — Explore Canonical Coverage via Staged Iteration

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-13_06-30__explore_canonical_coverage_via_staged_iteration/_branch.md`

Input: the inquiry's `_branch.md` plus the just-produced `exploration.md` (14 candidates across regions A–H). Two ambiguities flagged for direct attention: (1) is canonical-source-miss a coverage-mechanism question (inside /explore) or an inquiry-framing question (upstream)? (2) Where does staging logically belong — A1 (inside /explore) or A2 (in /staged-explore runner)? Meta-Inspection hooks H1, H3, H5, H7 to apply. Load-bearing concept test at Phase 3.

---

## SV1 — Baseline Understanding

The user is asking whether `/explore` should be made to guarantee thorough surfacing of relevant content (including canonical-source files the inquiry depends on), and proposes a staged for-loop pattern — coarse concept map first, then drill each concept's surrounding context one by one. They reference `devdocs/nav_north_star.md` as the model for the staged-iteration pattern. The exploration revealed that this staged pattern is already specified (§3.6 + §5.5) but as a `/staged-explore` runner that has not been shipped. There is also a reframing on the table: canonical-source coverage may not be fully solvable inside /explore at all — it may belong upstream in inquiry-framing.

---

## Phase 1 — Cognitive Anchor Extraction

### Constraints

- **C1.** `/explore`'s idempotency invariant (§3.5): one invocation = one Transform (one confidence-tagged map). Multi-pass output is not the discipline's contract.
- **C2.** Project surround layer: disciplines stay atomic; orchestration lives in runners. Universal across `/MVL+` (orchestrates 5 disciplines), `/meta-loop` (orchestrates `/MVL+` runs), `/multi-resolution-navigation` (orchestrates `/navigation` expansion).
- **C3.** nav_north_star.md commits to "manual-trigger v1 is acceptable" — the user explicitly accepts inefficiency while building capability. Materialization can be staged.
- **C4.** Observed: canonical-source-miss is a real user concern. Not theoretical.
- **C5.** `/explore`'s spec already commits to A2 (§3.6: "/staged-explore orchestrates a for-loop of /explore invocations"; §7.2: "Skill-ification of /staged-explore" is the named deferred item).

### Key Insights

- **K1.** The user's proposed pattern IS in the spec. They are asking about a gap between the spec and the invokable surface — not about a missing design.
- **K2.** "Canonical-source not missed" decomposes into two distinct phenomena: (a) **territory surfacing** — what exists in the declared boundary (/explore's job); (b) **required-touch satisfaction** — the inquiry depends on specific sources being seen (someone has to know which sources are required — that's inquiry-framing's job, not /explore's). Coverage rules C1-C4 in the /explore spec address (a) only.
- **K3.** Staging alone does NOT guarantee canonical-source coverage. Staging gives progressive resolution; coverage rules (boundary-discovery, surround-layer-first, confirmed-absent, jump-scan) are what prevent silent miss.
- **K4.** `/staged-explore` being doc-only is a material gap — the spec's claim "staging is runner-orchestrated" is only operationally true if the runner is invokable.
- **K5.** The user's word "canonical" implies a pre-known set of must-touch sources. `/explore` cannot determine which sources are "canonical" for an inquiry unless told. The term, in the user's language, maps to inquiry-framing's required-touch list, not to `/explore`'s relevance-tag.

### Structural Points

- **S1.** Architecture: Disciplines + Runners. `/explore` = atomic discipline; `/staged-explore` = runner over `/explore` calls; `/MVL+` = larger runner that includes `/explore` as one step.
- **S2.** Per-call output: confidence-tagged map (the Transform). Cross-call accumulation: Merge Contract (§5.5).
- **S3.** /explore coverage rules: 4 named mechanisms (boundary-discovery §3.3; coarse-scan-includes-surround §3.7; confirmed-absent §2.2; jump-scan §4.2). Plus type-aware probing (§3.8) for quantifiable claims.
- **S4.** Inquiry-framing layer exists as a documented but lightly-developed surface (`enes/runtime_environment/inquiry_framing_discipline.md` — currently scopes question-pre-bias; could host a canonical-source registry).
- **S5.** `/multi-resolution-navigation.md` is the closest existing precedent for `/staged-explore` — frontier-ledger pattern, expansion policy, scheduling policy, no-final-selection boundary. Structurally analogous.

### Foundational Principles

- **P1.** Idempotency invariant (per §3.5): one invocation → one Transform. Project-axiomatic for disciplines.
- **P2.** Separation of concerns: discipline vs runner. Project surround layer.
- **P3.** Failure-as-data: when coverage fails, the failure tells us what to fix (not "the discipline is broken; rewrite").
- **P4.** Progressive refinement: capability ships when validated, not pre-emptively.

### Meaning-Nodes

- **M1.** "Canonical-source content" — the user's term. Meaning: files/concepts the inquiry depends on, which must not be missed. Maps to inquiry-framing's required-touch, not to /explore's relevance.
- **M2.** "Staged iteration" — for-loop over progressively finer resolutions. Project-wide term; appears in multiple runners.
- **M3.** "Coverage guarantee" — the property that no canonical content is silently dropped. Two-layer phenomenon.
- **M4.** "Inquiry-framing" — the upstream act of writing `_branch.md` that sets territory + must-touch + scope. Distinct discipline from /explore.
- **M5.** "Runner" vs "discipline" — runner orchestrates; discipline performs one Transform. Project's organizing principle.

---

## SV2 — Anchor-Informed Understanding

The question decomposes into TWO distinct sub-problems that the user's framing bundles:

1. **Architectural sub-problem:** WHERE does staging orchestration live? (Answer is largely already specified — `/staged-explore` as runner — but the runner isn't shipped, creating a doc-vs-skill gap.)

2. **Coverage sub-problem:** WHAT guarantees canonical-source non-miss? (Staging is NOT the answer; existing coverage rules C1-C4 + a possibly-new canonical-source pre-registry mechanism are.)

The user's literal phrasing — "explore should work in such way that it shouldn't miss [canonical-source content]" — pre-biases toward putting the fix INSIDE /explore. This pre-bias collides with C1 (idempotency invariant), C2 (surround layer), and C5 (the spec's existing A2 commitment).

---

## Phase 2 — Perspective Checking

### Technical / Logical

A1 (staging inside /explore) collapses two structurally distinct roles (Transform-producing discipline + multi-pass orchestrator) into one skill. Technically possible but breaks the per-call output contract — what does a multi-pass /explore output even look like? It would either return a stream of maps (no longer "one Transform") or return a pre-merged combined map (in which case /explore has absorbed the Merge Contract, growing its scope significantly). A2 (staging in /staged-explore) matches /MVL+'s pattern: small runner over composable disciplines. The technical question is mostly about contract preservation, not capability. **New anchor: A1 requires spec revision; A2 requires only spec materialization.**

### Human / User

A1 is simpler to invoke at first glance: `/explore <thing>` produces a complete map. Lower cognitive overhead per call. **BUT:** the user already invokes /explore through /MVL+ today; /MVL+ is itself a runner. The user doesn't actually type `/explore` directly very often — they invoke /MVL+ (or /meta-loop). The same pattern would apply: invoke /staged-explore (when it exists) or have /MVL+ optionally choose between /explore and /staged-explore. The "lower UX overhead" advantage of A1 is mostly illusory in actual usage. **New anchor: the UX comparison should be runner-to-runner (/staged-explore vs A1's bigger /explore), not skill-to-skill.**

### Strategic / Long-term

End-goal trajectory (per `enes/desc.md`, `enes/autonomy_ladder.md`): increasing autonomy. At L2-L3, the system autonomously selects mode/runner per inquiry. Runners are the natural locus of mode selection — keeping staging in a runner makes future automation easier. If staging is inside /explore, "how much staging" is buried in discipline-internal logic, harder to expose to autonomous selectors. **New anchor: A2 wins on long-term trajectory; A1 makes future autonomy harder.**

### Risk / Failure

A1 risks: (i) complex discipline output requires consumers (sense-making, /MVL+) to handle multi-pass input; (ii) resume mid-staging is harder if state lives inside the discipline; (iii) surprises for /MVL+ which currently expects single-pass /explore. A2 risks: (i) /staged-explore is one more artifact to maintain; (ii) manual orchestration in the meantime is tedious — the user keeps complaining; (iii) Merge Contract has to work for the runner to be useful. **New anchor: A1 has higher consumer-side risk; A2 has higher near-term ergonomic risk.** Canonical-source-miss is orthogonal to both — staging does not address it directly.

### Resource / Feasibility

A1 cost: rewrite /explore to handle multi-pass internally; substantial — the discipline grows in scope; spec must be revised; downstream consumers must adapt. A2 cost: write a thin /staged-explore skill (~size of /MVL+ or smaller) that wraps /explore + uses the Merge Contract; spec is already written. **New anchor: A2 is cheaper to ship by a substantial margin.**

### Definitional / Internal Consistency

`/explore`'s spec (§3.5) explicitly says "the discipline does NOT loop over multiple invocations within itself; cross-invocation re-exploration is the runner's responsibility." A1 violates this directly. §3.6 explicitly names /staged-explore as the runner. §7.2 deferred-item list explicitly names "Skill-ification of /staged-explore." The spec is internally consistent toward A2 and would have to be revised in three places to support A1. **The spec contradicts A1.** The Definitional perspective applied — does the spec contradict itself? No — the spec's claims are coherent; A1 simply conflicts with them.

### Definitional / Frame-exit Completeness

**Gating predicate check:** Does the inquiry's commitments include terms inherited from prior findings used across ≥2 distinct values within the inquiry's own committed structures?

Yes — the inquiry's `exploration.md` has a table of regions A–H with distinct propositions per row. The inherited term "**staging**" appears across A1/A2/A3 (architectural variants) and B1/B2 (for-loop shapes) — these are distinct propositions, not repetitions. **Gating fires.**

- **Existence Enumeration.** "Staging" project-wide refers to multiple things:
  - Pipeline-staging (`/MVL+` orchestrates 5 disciplines in sequence)
  - Inquiry-staging (`/meta-loop` orchestrates `/MVL+` runs across inquiries)
  - Resolution-staging (`/staged-explore` orchestrates `/explore` calls at progressive resolutions)
  - Expansion-staging (`/multi-resolution-navigation` orchestrates `/navigation` map expansion)
  
  This inquiry's frame focuses on resolution-staging only. The other three are EXCLUDED.

- **Role Assessment.** Among the excluded referents, is any one load-bearing for the inquiry's answer? YES — **expansion-staging** (`/multi-resolution-navigation`) is structurally analogous to `/staged-explore`. Its protocol already specs the frontier-ledger pattern, coverage modes (exhaustive/budgeted/sampled), scheduling policies, and no-final-selection boundary. The corrective is NOT to force expansion-staging into the current frame, but to **re-locate the reference**: `/staged-explore`'s design should transclude `/multi-resolution-navigation`'s frontier-preservation pattern. **New anchor: /staged-explore is a sister-runner to /multi-resolution-navigation; the materialization spec should reuse that protocol's structure.**

- **Verdict Rigor.** Did this perspective (or any) produce a "clean boundary / out of scope" verdict on /explore alone solving the problem? Yes — the exploration's H1 region named inquiry-framing as upstream. Strongest counter: maybe /explore can do it all if its boundary input is rich enough? Test on structural grounds: /explore reads `_branch.md` as input; `_branch.md` is produced by inquiry-framing; the canonical-source registry would have to live in `_branch.md` to be visible to /explore. Even if /explore "does it all" at run-time, the registry's authoring site is inquiry-framing-time. The verdict survives.

- **Residual / Coverage Justification.** Is there a frame-exit concern about "staging" or "coverage" that the above three categories did not capture? One: the **/MVL+ runner** currently invokes /explore as a single discipline-step in its E→S→D→I→C pipeline. If /staged-explore exists, does /MVL+ ever invoke it instead? This is a future-design question; the inquiry's frame doesn't have to resolve it now. Noted as a frontier question.

### Phase / Calibration-State

**Required check:** does the answer depend on the project's calibration state?

- **Architectural decision (A1 vs A2):** Does NOT depend on calibration. A2 is structurally over-determined regardless of project phase.
- **Materialization path:** DOES depend on calibration. Today, /staged-explore is doc-only (per §7.2). The user's experience is "manual orchestration is the only option." Ship /staged-explore → the experience changes. The right NEXT action is calibration-dependent: if staging is the dominant pain, ship /staged-explore first; if canonical-source-miss is the dominant pain, build the canonical-source registry first.
- **Coverage-rule firing (C1-C4):** firing-in-practice is unknown and audit-required. This is a calibration-state-dependent question — current data is needed before deciding whether to harden the rules.

**New anchor: the architectural decision is calibration-independent; the materialization sequence is calibration-dependent.**

---

## SV3 — Multi-Perspective Understanding

The question decomposes into a 2×2 matrix:

| | Architectural decision (calibration-independent) | Materialization path (calibration-dependent) |
|---|---|---|
| **Staging** | A2 wins (in /staged-explore runner). Idempotency-preserving; surround-layer-aligned; long-term-trajectory-favorable. | Ship `/staged-explore` as thin skill (revival of §7.2). Implement Merge Contract (§5.5). Optional: enhance /MVL+ to invoke /staged-explore for large territories. |
| **Coverage** | Two-layer model: inquiry-framing (upstream, defines must-touch) + /explore mechanics (downstream, C1-C4). NEITHER alone is sufficient. | (a) Audit recent /explore runs to verify C1-C4 fire. (b) Add canonical-source registry to `_branch.md` template / inquiry-framing discipline. (c) Optionally add negative-space audit (D2 from exploration) as post-convergence pass in /explore. |

Three major shifts from SV2:
- The Frame-exit Completeness analysis produced the load-bearing claim that /multi-resolution-navigation is /staged-explore's structural sibling — the materialization spec should transclude its pattern.
- The Human-perspective check dissolved A1's apparent "simpler UX" advantage — the comparison should be runner-to-runner.
- The Phase/Calibration-State check separated architecture (resolved) from materialization (sequence-dependent on observed pain).

---

## Phase 3 — Ambiguity Collapse

### Ambiguity 1: "Should /explore itself adopt a staged for-loop?"

**Strongest counter-interpretation:** YES — fold staging into /explore so the user gets a one-shot complete map (A1). Appealing because (a) lower cognitive cost per call; (b) for-loop pattern is essential to coverage; (c) keeping it external requires the user to remember to invoke a runner.

**Why the counter fails (structural grounds):**

1. **Idempotency violation (§3.5).** /explore's per-invocation contract is one Transform = one confidence-tagged map. Multi-pass output is structurally a different shape (multiple maps + merge state + frontier ledger). A1 would change the discipline's output contract, which downstream consumers (`/sense-making`, `/MVL+`'s pipeline) rely on. This is not precedent-citation; it is mechanism: the consumers actually read /explore's output and expect the single-map shape.

2. **Surround-layer violation.** The project's universal pattern is "disciplines stay atomic; orchestration in runners." /MVL+ orchestrates 5 disciplines; /meta-loop orchestrates /MVL+ runs; /multi-resolution-navigation orchestrates /navigation expansion. A1 would be the ONE place that breaks the pattern. The special-case justification required is not present.

3. **Long-term autonomy.** Future autonomous mode-selection (per `enes/autonomy_ladder.md` L2-L3) operates at the runner level. A1 buries the staging choice inside discipline-internal logic, harder to expose to selectors.

**Confidence:** HIGH (three independent structural grounds, none reducible to precedent).

**Resolution:** A2 — staging lives in a `/staged-explore` runner; `/explore` stays single-pass and idempotent.

**What is now fixed:** /explore's per-invocation contract; the project's discipline/runner separation; /staged-explore as the orchestrator name.

**What is no longer allowed:** baking staging into /explore; /explore producing multi-pass output; /explore managing the frontier ledger.

**What now depends on this choice:** /staged-explore must be materialized as a thin skill (revival of §7.2); Merge Contract (§5.5) must support staged execution; /MVL+ may optionally route to /staged-explore for large territories (separate downstream design).

**What changed in the conceptual model:** The architectural decision is settled. Remaining work is materialization, not redesign.

### Ambiguity 2: "Is canonical-source-miss primarily a /explore-mechanics problem or an inquiry-framing problem?"

**Strongest counter-interpretation:** It's purely a /explore-mechanics problem — the existing coverage rules (C1-C4) are sufficient if /explore actually fires them. The user's concern reflects an audit failure (rules exist but aren't enforced), not a design gap. Fix: harden firing; do not add new mechanisms.

**Why the counter fails (structural grounds):**

The term "canonical-source" decomposes into two distinct phenomena:

(a) **Territory surfacing** — what exists in the declared boundary. /explore's job. Rules C1-C4 address this.

(b) **Required-touch satisfaction** — the inquiry depends on specific sources being seen. Someone must know WHICH sources are required for THIS inquiry; /explore does not have that information unless told. The "canonical" label is the inquiry's property, not the territory's. The inquiry-author knows what's canonical to their question; /explore does not.

Mechanism: a /explore run can dutifully fire boundary-discovery + jump-scan + confirmed-absent and still miss the user's intended "canonical source X" because /explore had no way to know X was canonical. Coverage rules guarantee surfaces-within-boundary; they do not guarantee surfaces-the-must-touch-set. The two phenomena are structurally distinct.

**Confidence:** HIGH (the structural-grounds argument depends on the term "canonical" decomposing into two phenomena, which is observable in the project's existing discipline boundary — inquiry-framing writes `_branch.md`; /explore reads it).

**Resolution:** BOTH layers are involved. Layer 1 (inquiry-framing, upstream): add a canonical-source pre-registry — a must-touch list authored in `_branch.md`. Layer 2 (/explore mechanics, downstream): the existing coverage rules C1-C4 are correct as designed; firing-in-practice should be audited.

**What is now fixed:** canonical-source-coverage is a two-layer concern.

**What is no longer allowed:** claiming /explore alone can guarantee canonical-source non-miss without inquiry-framing support; treating "canonical" as a property /explore can discover unaided.

**What now depends on this choice:** A new canonical-source-registry field in the `_branch.md` template (or inquiry-framing discipline spec); /explore reads it and reports per-entry whether each was surfaced; the registry becomes part of the inquiry's auditable contract.

**What changed in the conceptual model:** Region H from exploration is upgraded from "alternative perspective" to "load-bearing structural distinction in the answer."

### Load-bearing concept tests (Phase 3 refinement)

#### Test: "canonical-source coverage" (the user's term)

- **Counter:** "canonical-source" is just LLM-confident-relevance — a placeholder for "things that matter," no specific external referent.
- **Why counter fails:** The user's word "canonical" carries a specific meaning — pre-known, externally-determined relevance. The project distinguishes user-stated relevance (anchored in `_branch.md`) from LLM-self-reported relevance (an annotation layer in /explore output). The user-language sense maps onto the required-touch list, not the relevance tag.
- **Confidence:** HIGH. The term aligns with the user's language; mapping it to inquiry-framing is faithful to user intent.
- **User-language alignment:** ✓ The term comes from the user directly.

#### Test: "/staged-explore runner"

- **Proxy-vs-structural:** Is /staged-explore a real distinct discipline or just /explore-with-a-loop? Structurally distinct — it has frontier-ledger state, merge logic, branching-factor diagnostics, atomic-at-resolution detection. None of these exist in /explore.
- **Discoverability:** How does the system know when to use /staged-explore vs /explore? Today: human judgment (large territory → staged). Future: autonomous selector at L2+. The mechanism is deferred but the trigger is observable (territory size, expected items).
- **User-language alignment:** The user said "staged run like nav_north_star.md" — aligned with project name.
- **Confidence:** HIGH.

#### Test: "Inquiry-framing layer" (newly elevated to load-bearing)

- **Proxy-vs-structural:** Is inquiry-framing distinct from /explore? Yes — operates at framing-time (writing `_branch.md`), distinct from /explore's run-time. The discipline already exists (`enes/runtime_environment/inquiry_framing_discipline.md`), currently scoped to question-pre-bias check.
- **Discoverability:** When does it apply? Whenever a `_branch.md` is written. The canonical-source-registry would be a new field in the template.
- **User-language alignment:** The user did NOT name this layer. Risk: terminology drift. **Mitigation:** anchor the registry to existing `_branch.md` fields (extend Goal/Scope or add a new field), call it "canonical-source registry" or "required-touch list" rather than coining "inquiry-framing layer" as a noun.
- **Confidence:** MEDIUM-HIGH — the structural distinction is real, but the naming should follow user language; defer the "inquiry-framing layer" terminology to internal documentation, not user-facing.

### Specific-vs-pattern check

User's specific examples: `nav_north_star.md` (the staging model) + "canonical-source content can be missed" (the failure case).

- `nav_north_star.md` is pattern-level — it describes the staging mechanism for /navigation, but the same pattern applies project-wide.
- "Canonical-source-miss" is one expression of a wider coverage-failure class (also: silent boundary mis-scope, category-level absence, frontier mis-estimation). The user's framing is at the right pattern level.

**Verdict:** Pattern-level, not over-specific. The sensemaking can commit to a model that generalizes beyond canonical-source-miss without losing the user's case.

---

## SV4 — Clarified Understanding

The question now resolves into FOUR distinct decisions, each independently shippable:

- **D1: Architectural — should /explore adopt internal staging?** NO. A2 wins (staging in /staged-explore runner). HIGH confidence, three independent structural grounds.
- **D2: Materialization — should /staged-explore be shipped as a skill now?** YES, as a thin runner. Transclude /multi-resolution-navigation's frontier-ledger pattern. Implement Merge Contract (§5.5) at least manually.
- **D3: Coverage — does staging guarantee canonical-source coverage?** NO. Staging is orthogonal — it gives progressive resolution. Coverage rules C1-C4 + canonical-source registry are what guarantee non-miss.
- **D4: Coverage locus — where does the canonical-source registry live?** In inquiry-framing (upstream, in `_branch.md`), NOT inside /explore. The user's "canonical" implies must-touch; /explore can't determine must-touch unaided.

---

## Phase 4 — Degrees-of-Freedom Reduction

### Fixed (locked by sensemaking)

- /explore stays single-pass and idempotent (per invocation = one Transform)
- Staging logic lives in /staged-explore runner
- /staged-explore's design transcludes /multi-resolution-navigation's frontier-ledger pattern
- Canonical-source coverage is a two-layer concern: inquiry-framing (upstream) + /explore (downstream)
- Existing coverage rules C1-C4 are correct designs; firing-in-practice is an audit question, not a design question

### Eliminated

- A1 (staging inside /explore) — three independent structural grounds against
- "/explore alone solves canonical-source coverage" — structurally insufficient
- "Canonical-source is just LLM-relevance" — fails user-language alignment
- New /explore-internal mechanisms beyond what's specced (the gap is upstream and in firing, not in /explore mechanics)

### Viable paths (independent, sequence-dependent on calibration)

- **Path A.** Ship /staged-explore as a thin invokable skill (revival of §7.2 deferred).
- **Path B.** Add canonical-source pre-registry to `_branch.md` template / inquiry-framing discipline.
- **Path C.** Audit recent /explore runs to verify C1-C4 (boundary-discovery, surround-layer, jump-scan, confirmed-absent) fire as designed.
- **Path D.** Optional: add negative-space audit (D2 from exploration) as a post-convergence pass inside /explore — small spec addition, low risk.

---

## SV5 — Constrained Understanding

The solution space contracts to four independent action paths (A, B, C, D), each shippable independently. Priority structure depends on which user-pain is dominant:

- If canonical-source-miss is the dominant pain → priority order: B (add registry), C (audit firing), A (ship runner), D (optional).
- If staging UX is the dominant pain → priority order: A (ship runner), B (add registry), C (audit), D (optional).

The user's framing in this inquiry bundles both concerns, so the actual priority is "both B and A are high; C is the empirical check that informs how much harder coverage work is needed; D is bonus."

---

## Phase 5 — Conceptual Stabilization

**Accommodation trigger check:** Did multiple perspectives keep destabilizing the model? No. Perspectives converged on a clear two-layer + two-decision model. The Definitional and Strategic perspectives reinforced each other (both favor A2); the Human perspective initially favored A1 but its apparent advantage dissolved on examination; the Frame-exit Completeness perspective added new structure (transclude /multi-resolution-navigation) without contradicting existing anchors. Model is settling, not patching. No need to drop back to Phase 2.

**Self-reference blindness check:** We are sensemaking about /explore using the project's own thinking-disciplines framework. Risk is real. **External grounding:** the user's actual experience ("canonical-source can be missed") is the external anchor — observed reality, not internal consistency. The two-layer model is testable against future runs: did the user's canonical-source concern reproduce in a way the model predicts? If yes, the model holds; if no, revisit.

---

## SV6 — Stabilized Model

The user's question — "should /explore adopt staged iteration to guarantee canonical-source coverage?" — bundles two distinct decisions. Sensemaking separates them and resolves each.

### Decision 1 (architectural): WHERE does staging logic live?

**Answer:** In a `/staged-explore` runner, NOT inside `/explore`. The decision is over-determined by three independent structural grounds: idempotency invariant (§3.5); surround-layer pattern (disciplines stay atomic; runners orchestrate); long-term autonomy trajectory (runner-level mode selection). The /explore spec already commits to A2 (§3.6 + §7.2). /staged-explore should be designed by transcluding /multi-resolution-navigation.md's frontier-preservation pattern (its sister runner). The materialization is: ship /staged-explore as a thin invokable skill plus the Merge Contract (manual first; automated later).

### Decision 2 (coverage): WHAT guarantees canonical-source non-miss?

**Answer:** A two-layer mechanism — NOT /explore alone, NOT staging alone.

- **Layer 1 (inquiry-framing, upstream):** the inquiry's `_branch.md` declares a **canonical-source pre-registry** — sources the inquiry author knows are must-touch. /explore reads this and reports per-entry surfaced-or-confirmed-absent.
- **Layer 2 (/explore mechanics, downstream):** the existing coverage rules — boundary-discovery (§3.3), coarse-scan-includes-surround (§3.7), confirmed-absent (§2.2), jump-scan (§4.2) — ensure /explore surfaces thoroughly WITHIN the declared boundary. These rules already exist; the open question is whether they fire in practice (audit).

Staging is orthogonal. Staging gives progressive resolution (good for large territories, deeper detail per pass); it does not guarantee canonical-source coverage. Conflating "staged" with "thorough" is the structural mistake the user's framing nudges toward.

### Action paths (four independent, prioritized for the user's mixed concern)

- **Path A.** Ship `/staged-explore` as a thin runner skill (resolves the staging UX concern). Transclude `/multi-resolution-navigation.md`'s pattern.
- **Path B.** Add a canonical-source pre-registry field to the `_branch.md` template / inquiry-framing discipline (resolves the coverage concern's upstream half).
- **Path C.** Audit recent /explore runs to verify C1-C4 fire as designed (resolves the coverage concern's downstream half empirically).
- **Path D.** (Optional) Add a negative-space audit pass to /explore — post-convergence, ask "what kinds of items have zero representation?" — as a small spec extension.

### How SV6 differs from SV1

- **SV1:** treated the question as a single architectural choice ("should /explore stage internally?") with canonical-source as the motivating example. Implicitly accepted the user's framing.
- **SV6:** splits the question into two independent decisions, identifies and removes the user's pre-bias toward staging-inside-/explore, names a previously-implicit layer (inquiry-framing) as the upstream site of canonical-source coverage, transcludes /multi-resolution-navigation as /staged-explore's structural sibling, and produces four independent action paths — three of which are high-priority and shippable independently. The conceptual delta is substantial: from "one decision with two unknowns" to "two decisions with four paths."

---

## Saturation Indicators

- **Perspective saturation:** 8 perspectives ran (Technical, Human, Strategic, Risk, Resource, Definitional-Internal, Definitional-Frame-exit, Phase/Calibration). The last two produced new anchors (transclude /multi-resolution-navigation; calibration-independent architecture vs calibration-dependent sequence). Approaching saturation.
- **Ambiguity resolution ratio:** 2/2 named ambiguities resolved at HIGH confidence, plus 3 load-bearing concept tests all resolved. Ratio: high (100% of identified ambiguities resolved with explicit counters).
- **SV delta:** SV1 → SV6 went from "single architectural choice + one motivating example" → "two-decision model + two-layer coverage + four action paths + transclusion-sibling identification." Substantial structural shift.
- **Anchor diversity:** Constraints (C1-C5), Key Insights (K1-K5), Structural Points (S1-S5), Foundational Principles (P1-P4), Meaning-Nodes (M1-M5) — all 5 anchor types represented with multiple instances each, drawn from multiple perspectives. Diverse.

---

## Failure-Mode Check

- **Status Quo Bias:** Did I defend A2 because the spec already names it? No — A2 was tested on structural grounds (idempotency, surround layer, autonomy trajectory). A1 was constructed as the strongest counter and failed on independent mechanism arguments. The spec's commitment is reinforcement, not the basis.
- **Premature Stabilization:** Did clarity arrive too early? D1 was clear by SV3, but SV4-SV6 added substantial new structure (two-layer model, transclusion sibling, action paths). The early clarity was about D1 only; D2-D4 needed the full process. OK.
- **Anchor Dominance:** Did one anchor do all the work? Idempotency carried D1 substantially, but D2 was carried by a different anchor (canonical decomposes into two phenomena). The Frame-exit Completeness analysis surfaced the transclusion claim. No single anchor dominates.
- **Perspective Blindness:** Did all perspectives agree? No — Human initially favored A1; Definitional perspectives strongly favored A2. The tension was adjudicated (Human's advantage was illusory in actual usage). Tension was real and resolved on structural grounds.
- **Clean Resolution Trap:** Did D2 resolve too cleanly? The two-layer claim is well-grounded but rests on the load-bearing move "canonical decomposes into two phenomena." That move is structural (different artifacts, different times, different authoring sites) — but it is the load-bearing claim of the entire reframing. Flagged as MEDIUM-HIGH confidence: structurally sound, with a known load-bearing dependency.
- **Self-Reference Blindness:** Sensemaking about /explore using project frameworks. External grounding: user's observed canonical-source-miss concern. Mitigation in place.

---

## Self-Assessment

**Overall: PROCEED.** Eight perspectives ran with the required Definitional/Frame-exit and Phase/Calibration-State checks both firing and producing new anchors. Two ambiguities resolved with HIGH confidence (D1) and HIGH confidence with one flagged dependency (D2). Three load-bearing concept tests applied. Meta-Inspection hooks H1 (candidate set collapse — A1/A2/A3 properly resolved), H3 (question framing pre-bias — identified and corrected), H5 (motivating examples — canonical-source verified pattern-level), and H7 (phase/calibration-state — explicitly addressed) all applied as requested. SV delta substantial. Failure modes checked. Downstream consumers (decompose, innovate, critique) should treat D1-D4 as committed decisions and the four action paths as the candidate field for partitioning and adversarial evaluation.
