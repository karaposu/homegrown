# Critique — Structural Check Tool Path Evaluation

## User Input

```
/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-16_06-12__structural_check_tool_remove_or_keep/_branch.md

Input: innovation.md (7 actual candidates: 4 path elaborations P1-P4 + 3 emergent hybrids B+C, A+D, A+B-light) + decomposition.md + sensemaking.md (4 commitments + 4 paths) + exploration.md.

Phase 0 → 4 of td-critique. Multi-axis prosecution (dimension + user-perspective + specific-failure-case + spec-gap probe). The user's REMOVE prior is opinionated — Critique should not rubber-stamp it, should not reflexively kill it; test on structural grounds.
```

---

## Phase 0 — Dimension Construction

Extracted from sensemaking's 4 commitments + project-specific risk axes per Phase 0 refinement.

| # | Dimension | What it asks | Source | Weight |
|---|---|---|---|---|
| **D1** | **Traceability** | Does the path actually verify discipline-output structural compliance (the primary anchor)? | sensemaking SV6 primary anchor | **CRITICAL** |
| **D2** | **Gate preservation** | Does the path preserve fix-and-re-save on FAIL (the runtime spec's existing gating commitment)? | sensemaking commitment C1 | **HIGH** |
| **D3** | **Mechanism honesty / substrate-honesty** *(project-specific)* | Does the path accurately name what mechanism is canonical (probabilistic LLM vs deterministic script)? | sensemaking commitment C2 + substrate-honest principle | **HIGH** |
| **D4** | **Reliability acknowledgment** *(project-specific)* | Does the path account for the empirical-record ambiguity (zero-FAIL signal interpretation)? | sensemaking commitment C3 | **HIGH** |
| **D5** | **Autonomy-trajectory awareness** | Does the path's appropriate form scale across L0 / L2-3 / L4+ autonomy levels? | sensemaking commitment C4 | **HIGH** |
| **D6** | **Cost profile** | What's the upfront + ongoing cost, and is it proportional to the reliability gain? | Innovation handoff | MEDIUM-HIGH |
| **D7** | **User-prior alignment** *(project-specific)* | Does the path honor the user's REMOVE preference, surpass it, or contradict it? | user stated prior | MEDIUM |
| **D8** | **Optionality preservation** | Does the path preserve future build options if the current decision proves wrong? | Innovation handoff | MEDIUM |

### Dimension validation

Project-specific risk axes per Phase 0 refinement: D3 (mechanism honesty), D4 (reliability acknowledgment), D7 (user-prior alignment). Three explicit project-specific risk dimensions — dimension blindness on the project-specific axes is mitigated.

Cross-check against sensemaking's 9 perspectives:
- Technical / Logical → D2 (gate), D3 (mechanism), D6 (cost): covered.
- Human / User → D7 (user-prior): covered.
- Strategic → D5 (autonomy-trajectory), D8 (optionality): covered.
- Risk → D4 (reliability), D6 (cost): covered.
- Internal Consistency → D1 (traceability): covered.
- Frame-exit Completeness → D3 (mechanism honesty distinguishes LAYER vs IMPLEMENTATION): covered.
- Phase / Calibration-State → D5 (autonomy-trajectory): covered.
- Resource / Feasibility → D6 (cost): covered.
- Strategic / Optionality → D8: covered.

All 9 sensemaking perspectives have at least one dimension. No dimension blindness on the sensemaking axis.

### Critical dimension

**D1 traceability** — failing D1 means the path doesn't actually verify structural compliance. Auto-KILL if D1 fails. All 7 candidates pass D1 (each elaborates a viable verification mechanism); D1 is not the differentiator.

---

## Phase 1 — Fitness Landscape

**Viable region:** PASS D1 (CRITICAL) AND ≥3 of 4 HIGH dimensions (D2 D3 D4 D5) AND reasonable on MEDIUM (D6 D7 D8).

**Dead region:** fail D1.

**Boundary region:** PASS D1 but mixed on HIGH/MEDIUM.

**Topology observations:**
- Viable region is the intersection of D2 ∧ D3 ∧ D4 ∧ D5 (all four commitments PASS) gated on D1.
- A candidate that fails D4 (reliability) but PASSes the others sits in the boundary — fixable by adding a reliability commitment.
- A candidate that fails D7 (user-prior) but PASSes the structural-rigor dimensions sits in the boundary — fixable by adding user-alignment framing.
- Two candidates (Path C standalone and Hybrid A + B-light) are pareto-dominated by other candidates — they sit at the boundary toward DEAD.

---

## Phase 2 — Adversarial Evaluation

Each candidate run through multi-axis prosecution + defense + collision.

### Candidate 1: Path A — REMOVE+gate

**Prosecution.**
- *Dimension-level:* D4 reliability PARTIAL (caveat only); D5 autonomy PARTIAL (no L4+ plan).
- *User-perspective:* ALIGNS with user's REMOVE prior (this IS the user's option made operationally explicit).
- *Specific failure-case (from Innovation handoff):* a fresh reader six months from now sees the new spec text "LLM-performed structural verification" and the mechanism note. Will they treat it as Primitive RC despite the caveat? The mechanism note is INLINE within the procedure description — easy to skim past. The naming "structural verification" could still read as automated.
- *Spec-gap probe:* the spec text doesn't say WHEN the reliability validation should happen. The caveat is open-ended; no concrete revival trigger.

**Defense.**
- Cheapest and most honest in the moment. Aligns with "descriptive maintenance over heavy machinery."
- Preserves gate semantics explicitly via fix-and-re-save.
- Adopts substrate-honest naming.
- Direct user-prior alignment.

**Collision.**
- The prosecution's fresh-reader risk is real but mitigable by sharpening the caveat (callout box; explicit reliability-question section in the spec).
- The reliability gap is real and not addressed beyond caveat language.
- The user-prior alignment is the strongest defense; structural rigor is the strongest prosecution.

**Verdict: REFINE.**

*Constructive output:*
1. Move the "Mechanism note" from inline-within-procedure to a dedicated callout / boxed paragraph. Make it visible to skim-readers.
2. Add an explicit revival trigger: *"If any structural_check `[PASS]` is later revealed as missed-failure via downstream consequence (a discipline output that passed check but caused regression downstream), the canary-test or adversarial-test must run before the next spec refinement."*
3. With these refinements, Path A enters the viable region with C3 strengthened to PARTIAL-WITH-TRIGGER.

### Candidate 2: Path B — BUILD MINIMAL

**Prosecution.**
- *Dimension-level:* PASSes all 4 commitments cleanly. D6 cost is MEDIUM (build effort ~30-60 min; script needs occasional edits).
- *User-perspective:* DOES NOT align with user's REMOVE prior. User explicitly wants removal; Path B builds the script.
- *Specific failure-case (from Innovation handoff):* does the script's universal-sentinel set have enough coverage to catch real regressions, or does it create FALSE CONFIDENCE by passing trivially? The script checks file size > 1KB + "Overall: verdict line" present + "## User Input" present + 2 per-discipline section sentinels. This is COARSE — an output with all these but semantically broken (wrong content in right sections) would PASS.
- *Spec-gap probe:* per-discipline grep patterns are fragile to section renames. Maintenance burden is real but smaller than user's "ever-changing" claim suggested.

**Defense.**
- Cleanest PASS on all 4 commitments.
- Deterministic mechanism eliminates rubber-stamping for the script's scope.
- Doesn't violate substrate-honest principle.
- Scales to L4+.
- Failure modes visible (script breaks loud, not silent).
- The "coarse, not semantic" scope is BY DESIGN — Primitive RC catches obvious omissions, not semantic flaws.

**Collision.**
- The prosecution's false-confidence risk is real for SEMANTIC compliance. But the defense's scope-clarity wins: Path B doesn't claim semantic check; it claims structural omission catch.
- The user-prior misalignment is real and is the main reason Path B isn't an automatic winner.

**Verdict: SURVIVE (with user-prior trade-off explicit).**

### Candidate 3: Path C — FORMALIZE protocol (standalone)

**Prosecution.**
- *Dimension-level:* PASSes C1+C2; PARTIAL on C3+C4 (same as Path A).
- *User-perspective:* Neither aligned nor anti-aligned. Adds a file rather than removing one — might feel like more maintenance than Path A.
- *Specific failure-case (from Innovation handoff):* does the protocol's Failure Modes section actually prevent rubber-stamping operationally, or is it document-window-dressing? The section says "watch out for rubber-stamping" but doesn't operationally prevent it. An LLM session running the protocol can still rubber-stamp without violating the protocol's letter.
- *Spec-gap probe:* the protocol adds runtime complexity (Skill load); fallback behavior on load failure is unspecified.

**Defense.**
- More structural than Path A (procedure in protocol, not buried in runner spec).
- Reusable: protocol pattern portable to other LLM-performed operations.
- Substrate-honest section more visible than Path A's inline note.

**Collision.**
- The rubber-stamping prosecution applies to A AND C similarly. C's structural-formalism is mostly window-dressing on the same underlying probabilistic mechanism.
- The cost is higher than A (extra file to maintain) without commensurate reliability gain.
- C is dominated by:
  - Path A on cost (Path A is cheaper for the same commitment-satisfaction profile).
  - Path B on commitment-satisfaction (Path B PASSes C3).
  - Hybrid B+C on protocol value (the protocol's value emerges when paired with a deterministic script for universal checks).

**Verdict: KILL (standalone).**

*Constructive output:*
- The protocol pattern itself is VALUABLE — extract the protocol design and re-use it as part of Hybrid B+C. Standalone, Path C is structurally redundant with Path A's inline caveat at higher cost.
- Seed extracted: "the protocol pattern is valuable as the deep-structure component of a script+protocol hybrid, not as a standalone replacement for the script."

### Candidate 4: Path D — HYBRID with adversarial-test maturity gate

**Prosecution.**
- *Dimension-level:* PARTIAL on C2 (interim dual-mode commits to unbuilt script). Otherwise PASS.
- *User-perspective:* DOES NOT immediately align with user's REMOVE prior — defers the decision. User might feel "I asked for REMOVE, you gave me a test design."
- *Specific failure-case (from Innovation handoff):* would the user actually commit to running the test? If committed-but-never-run, Path D collapses into Status Quo (script reference retained but unbuilt). The path's value DEPENDS on test execution.
- *Spec-gap probe:* the catch-rate thresholds (≥0.85 etc.) are placeholders — arbitrary numbers without empirical anchor.

**Defense.**
- Most epistemically rigorous path. Addresses the empirical-ambiguity head-on.
- Adversarial-test pattern reusable for OTHER unvalidated mechanisms (Predictive RC, meaningful-traversal substrate, Retrospective RC).
- Preserves optionality completely.
- Aligns with evidence-gated graduation principle.

**Collision.**
- The user-might-not-run-test risk is the dominant concern. Without a concrete trigger, Path D is theater.
- The threshold placeholders are addressable via REFINE.

**Verdict: SURVIVE-WITH-REFINE.**

*Constructive output:*
1. Pair Path D with a concrete revival trigger (specific event that causes the test to fire): *"Test fires when (a) any structural_check `[PASS]` is later revealed as missed-failure, OR (b) at next spec refinement of any discipline, OR (c) before the next `/MVL+` run on a discipline whose required-section list is being changed."*
2. Reframe the catch-rate threshold as a PARAMETER to be re-calibrated post-test, not a presupposed threshold.

### Candidate 5: Hybrid B+C — Script + Protocol

**Prosecution.**
- *Dimension-level:* PASSes all 4 commitments more stringently than any single path.
- *User-perspective:* doesn't align with user's REMOVE prior.
- *Specific failure-case:* cost is higher than B alone or C alone. Maintenance burden is the sum of script + protocol. Is the marginal reliability worth the marginal cost?
- *Spec-gap probe:* how does the script-protocol composition work in the runner? The runner runs script first; on PASS, also loads + runs protocol. The composition adds runner-spec complexity.

**Defense.**
- Strongest commitment satisfaction.
- Script handles deterministic universal checks (rubber-stamping-immune for that scope).
- Protocol handles per-discipline deep structure with explicit substrate-honesty.
- Composition is naturally split: script = coarse-but-deterministic; protocol = fine-but-probabilistic.
- The protocol's failure-modes section + the script's deterministic universal check together address rubber-stamping more thoroughly than either alone.

**Collision.**
- The prosecution's cost-worth-it question is real but the cost is modest (script ~50 lines + protocol ~60 lines). The reliability gain is substantial.
- User-prior misalignment is real but, like Path B, structural rigor wins the structural-grounds test.

**Verdict: SURVIVE-PRIMARY-RIGOR-RECOMMENDATION.**

### Candidate 6: Hybrid A+D — REMOVE + adversarial-test revival

**Prosecution.**
- *Dimension-level:* PASS in interim same as Path A (PARTIAL on C3+C4); PASS-WHEN-TESTED on C3 when adversarial-test fires.
- *User-perspective:* ALIGNS with user's REMOVE prior in the interim, AND commits to the rigor question for later. Strongest user-prior alignment among rigorous options.
- *Specific failure-case:* same as Path D — does the test ever fire? Inherits Path D's risk.
- *Spec-gap probe:* revival trigger needs to be concrete.

**Defense.**
- Honors user's REMOVE prior immediately.
- Defers but commits to the reliability question.
- Low immediate cost; adversarial-test cost deferred.
- Combines Path A's cost-elegance with Path D's epistemic rigor.

**Collision.**
- The test-might-not-fire risk applies but is mitigable by tying the revival trigger to a concrete event.
- The composition is naturally clean: A is the interim state; D is the future-state condition.

**Verdict: SURVIVE-PRIMARY-USER-ALIGNED-RECOMMENDATION.**

*Constructive output:*
- Specify the revival trigger concretely (same triggers as Path D's REFINE).
- Add the decision-tree that maps test outcome to subsequent state: *"If test catch-rate ≥0.85: lock in Path A. If 0.65-0.85: build Path B (or Hybrid B+C). If <0.65: build Hybrid B+C with explicit substrate-honesty caveat."*

### Candidate 7: Hybrid A + B-light — REMOVE + 5-line bash helper

**Prosecution.**
- *Dimension-level:* PARTIAL-upgraded on C3 (verdict-line check is deterministic but tiny scope). PARTIAL on C4.
- *User-perspective:* mostly aligns with user's REMOVE prior, slightly diluted by the small bash addition.
- *Specific failure-case:* 5-line helper only checks "Overall: verdict line present." Catches almost no real regressions; cosmetic Primitive RC.
- *Spec-gap probe:* if the helper exists, the spec needs to invoke it. Adds infrastructure step for minimal reliability gain.

**Defense.**
- Cheap (5 lines).
- Adds tiny deterministic Primitive RC for the most-universal check.

**Collision.**
- The "catches almost nothing" point is decisive. The reliability gain over pure Path A is marginal.
- Path A+B-light is dominated by Path B (50 lines vs 5 lines is small absolute difference, big coverage gain) and by Hybrid A+D (commits to validation rather than tiny helper).

**Verdict: KILL.**

*Constructive output:*
- If minimal-deterministic-check is desired, do full Path B (modest extra effort, much more coverage).
- If user-prior is the priority, do Path A or Hybrid A+D (don't half-build).
- Seed extracted: "marginal deterministic checks don't satisfy reliability acknowledgment; the choice is honest LLM-self-check (Path A) or substantive deterministic check (Path B), not the cosmetic middle."

---

## Phase 3.5 — Assembly Check across Survivors

Survivors: Path A REFINEd, Path B SURVIVE, Path D SURVIVE-WITH-REFINE, Hybrid B+C SURVIVE-PRIMARY-RIGOR, Hybrid A+D SURVIVE-PRIMARY-USER-ALIGNED.

Can any combine into stronger emergent?

**Emergent candidate: Hybrid A+D with explicit decision-tree.**

Innovation surfaced Hybrid A+D as "REMOVE now + adversarial-test as future revival." Critique adds the decision-tree explicitly:

```
State 0 (now): Path A is implemented (spec edits applied; LLM-self-check canonical with caveat).
                Test commitment: adversarial-test will fire when [trigger].

State 1 (after test): based on catch-rate:
  - ≥0.85: lock in Path A. Status COMPLETE.
  - 0.65–0.85: build Path B (deterministic script for universal checks);
              Path A's LLM-self-check remains for deep structure.
              → Implements Hybrid B+C-like outcome.
  - <0.65: build full Hybrid B+C (script + protocol).
          Path A's spec text reverts/updates to reflect protocol-driven check.
```

This decision-tree formulation:
- Honors user-prior immediately (interim is Path A).
- Commits to rigor (test fires on trigger).
- Maps each test outcome to a defined subsequent state.
- Optionality preserved at every state.
- Cost profile graduates with evidence (low cost now; higher cost only if evidence demands).

This emerges from combining Hybrid A+D's deferred-rigor with explicit branch logic that the standalone hybrids didn't carry.

**Verdict on emergent:** SURVIVE-STRONGEST-OVERALL. The decision-tree formulation dominates standalone Hybrid A+D on actionability (Critique has a concrete next-state map) without losing any of its other strengths.

---

## Phase 4 — Coverage + Convergence Assessment

### Coverage
- 7 candidates evaluated with multi-axis adversarial testing.
- 2 KILLs (Path C standalone, Hybrid A+B-light) — both dominated by other candidates.
- 1 REFINE-then-SURVIVE (Path A).
- 1 SURVIVE-WITH-REFINE (Path D).
- 3 direct SURVIVE (Path B, Hybrid B+C, Hybrid A+D).
- 1 emergent SURVIVE (Hybrid A+D with decision-tree).
- All 8 dimensions had at least one candidate that PASSed and one that PARTIAL/FAILed — no unexplored regions.

### Convergence
- Clean SURVIVE exists (multiple).
- Landscape stable — no candidate moved between viable / boundary / dead across critique passes.
- New iterations would not produce structurally-distinct candidates beyond the 7 + 1 emergent.
- Convergence criteria: ✓ SURVIVE exists; ✓ landscape stable; ✓ no unexplored regions topologically likely to contain new viable candidates; ✓ decreasing rate of new information.

### Signal: **TERMINATE with ranked survivors.**

---

## Final Deliverable

### (a) Dimensions with weights

- D1 traceability — **CRITICAL** (all candidates pass; not differentiator)
- D2 gate preservation — HIGH
- D3 mechanism honesty *(project-specific)* — HIGH
- D4 reliability acknowledgment *(project-specific)* — HIGH
- D5 autonomy-trajectory awareness — HIGH
- D6 cost profile — MEDIUM-HIGH
- D7 user-prior alignment *(project-specific)* — MEDIUM
- D8 optionality preservation — MEDIUM

### (b) Fitness Landscape

**Viable region:** D1 ∧ ≥3-of-4 HIGH ∧ reasonable MEDIUM. After verdicts, 6 candidates land here (5 survivors + 1 emergent).

**Dead region:** 2 candidates (Path C standalone, Hybrid A+B-light) — pareto-dominated by other candidates.

**Boundary region:** none post-refinement (all REFINEs become viable when applied).

**Topology observation:** the viable region's structure reveals a meta-trade-off — **user-prior alignment vs immediate rigor commitment**:
- Path B + Hybrid B+C: rigor primary, user-prior secondary.
- Path A + Hybrid A+D: user-prior primary, rigor deferred-but-committed.
- Hybrid A+D with decision-tree: both primary via temporal structuring.

### (c) Candidate Verdicts

| Candidate | Verdict | Constructive output |
|---|---|---|
| Path A REMOVE+gate | **REFINE** | Move mechanism note to dedicated callout; add concrete revival trigger for reliability validation. |
| Path B BUILD MINIMAL | **SURVIVE** | User-prior misalignment is the known trade-off; structural rigor wins. Script as elaborated is ACTIONABLE. |
| Path C FORMALIZE standalone | **KILL** | Dominated by A on cost; B on commitment-satisfaction; B+C on protocol value. Extract: protocol pattern valuable AS PART OF Hybrid B+C, not standalone. |
| Path D HYBRID with test gate | **SURVIVE-WITH-REFINE** | Add concrete revival trigger (specific event causing test to fire); reframe threshold as post-test parameter, not presupposed. |
| Hybrid B+C | **SURVIVE-PRIMARY-RIGOR-RECOMMENDATION** | Strongest commitment-satisfaction. Cost is modest; reliability gain substantial. |
| Hybrid A+D | **SURVIVE-PRIMARY-USER-ALIGNED-RECOMMENDATION** | Combines Path A's elegance with Path D's rigor. Specify revival trigger. |
| Hybrid A + B-light | **KILL** | Marginal deterministic check; reliability gain minimal vs Path A. Dominated by Path B (more coverage at slightly higher cost) and Hybrid A+D (commits to validation). |
| **EMERGENT: Hybrid A+D with decision-tree** | **SURVIVE-STRONGEST-OVERALL** | Honors user-prior immediately + commits to rigor + maps test outcomes to defined subsequent states. Decision-tree formulation makes the path immediately actionable while preserving optionality. |

### (d) Coverage Map

- 7 candidates evaluated; 8 dimensions; 9 sensemaking perspectives covered.
- 2 KILLs are justified (dominance shown).
- 6 viable candidates remain (5 individuals + 1 emergent).
- The viable region's meta-trade-off (user-prior vs immediate-rigor) is explicit; the emergent candidate resolves it temporally.

### (e) Signal: **TERMINATE with ranked survivors.**

**Ranked survivors (Critique's recommendation):**

1. **EMERGENT — Hybrid A+D with decision-tree** *(STRONGEST OVERALL — recommended primary)*
   - Implements Path A immediately (4 spec edits; LLM-self-check canonical with caveat).
   - Commits to the adversarial-test on a concrete trigger.
   - Decision-tree maps test outcomes to subsequent states (Path A stays / Path B builds / Hybrid B+C builds).
   - PASSes all 4 commitments — D2/D3 in interim; D4 PASS-WHEN-TESTED; D5 PASS-via-deferred-evidence.
   - Cost: low immediate + deferred per test outcome.
   - Honors user-prior fully; commits to rigor concretely.

2. **Hybrid B+C** *(IF user prefers immediate rigor over user-prior alignment)*
   - Build the minimal script AND formalize the LLM-self-check protocol.
   - PASSes all 4 commitments most stringently.
   - Cost: ~50-line script + ~60-line protocol + 4 spec edits (modest).
   - Doesn't honor user's REMOVE prior; structural rigor primary.

3. **Path A REFINEd** *(IF user prefers minimal change + accepts the reliability question stays open)*
   - 4 spec edits with sharpened caveat callout.
   - Cost: lowest.
   - PARTIAL on C3/C4 but the gap is explicitly acknowledged.

4. **Path B** *(IF user prefers single mechanism over hybrid composition)*
   - The script alone; no protocol.
   - PASSes all 4 commitments but reliability-PASS is scope-limited to script's checks.

5. **Path D** *(IF user prefers maximum rigor and is willing to defer the decision indefinitely)*
   - The adversarial-test as standalone Next Action; interim spec unchanged.
   - Most epistemically rigorous; least immediately actionable.

6. **Hybrid A+D** *(IF user prefers Path A but wants the rigor question committed)*
   - Same as the emergent #1 but without the explicit decision-tree.

**Critique's recommended primary:** the EMERGENT Hybrid A+D with decision-tree. It is the only candidate that PASSes all 4 commitments while honoring the user's stated REMOVE preference.

---

## Convergence Telemetry

- **Dimension coverage:** 8 dimensions defined (1 CRITICAL + 4 HIGH + 1 MEDIUM-HIGH + 2 MEDIUM); 3 project-specific risk axes explicit (D3 D4 D7); 9 sensemaking perspectives mapped.
- **Adversarial strength:** **STRONG.** Multi-axis prosecution applied per candidate (dimension + user-perspective + specific-failure-case from Innovation handoff + spec-gap probe).
- **Landscape stability:** **STABLE.** No candidate moved between viable / boundary / dead across critique passes.
- **Clean SURVIVE exists:** YES — multiple (emergent Hybrid A+D-with-decision-tree as primary; Hybrid B+C as rigor-primary alternative; Path B as single-mechanism alternative).
- **Failure modes observed:**
  - *Wrong dimensions:* NO — dimensions traced to sensemaking commitments + project-specific risks per Phase 0 refinement.
  - *Rubber-stamping:* NO — 2 KILLs + 1 REFINE + survivors with caveats; not all-PASS.
  - *Nitpicking:* NO — KILLs are dominance-based (pareto-dominated), not minor-issue-based.
  - *Dimension blindness:* NO — project-specific risk axes D3/D4/D7 explicit.
  - *False convergence:* NO — clean SURVIVE exists + landscape stable.
  - *Evaluation drift:* NO — same 8 dimensions applied across all 7 candidates.
  - *Self-reference collapse:* PARTIALLY-MITIGATED — Critique uses LLM-driven evaluation to evaluate paths-about-LLM-self-check. External grounding via sensemaking's external anchors (Primitive RC definition; gate framing; empirical-record data; substrate-honest principle). The recommended emergent candidate explicitly addresses the self-reference question by committing to adversarial-test validation.

**Overall: PROCEED** (sufficient coverage + clean SURVIVE + stable landscape + no critical failure modes; self-reference partial-mitigation noted but not blocking — the emergent candidate's adversarial-test commitment is itself the corrective).
