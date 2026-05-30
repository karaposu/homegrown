# Critique — routeman_mvlw_integration_pattern

## User Input

/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-27_18-09__routeman_mvlw_integration_pattern/_branch.md

Read in this order:
1. _branch.md (4 observation targets; ordinary problem-solving)
2. surfacing.md (33 items; 7 candidate shapes; 5 heaviness sub-axes; zero empirical precedent)
3. sensemaking.md (SV6 stabilized: 3 primary shapes + F negative anchor; no heavy-mode spec needed; staged-rerunnability validated)
4. decomposition.md (8 pieces; 7/7 self-eval PASS)
5. innovation.md (P1-P8 with concrete content; 3G + 3F mechanism coverage; 8/8 PASS ACTIONABLE)

Critique purpose: adversarially test the integration-pattern recommendation as one confirmation-shape deliverable.

Apply: project-specific risk dimensions (empirical-precedent-gap honesty, heaviness-claim soundness, inherited-commitment-honoring) + multi-axis prosecution (user-perspective + specific-failure-case + spec-gap probe + architectural-soundness probe).

---

## Phase 0 — Dimension Construction

### Default + project-specific dimensions, with weights

| # | Dimension | Question | Weight | Source |
|---|---|---|---|---|
| **D1** | **Correctness** | Does the recommendation correctly address the 4 observation targets? | CRITICAL | Sensemaking C6 (4 OTs distinct adjudications) + user-stated framing |
| **D2** | **Coherence** | Is the recommendation internally consistent across Shape A / B / C + heaviness verdict + staged-rerunnability + architectural framing? | CRITICAL | Sensemaking FP4 (asymmetric-failure principle) + the integration shape's internal logic |
| **D3** | **Feasibility / Actionability** | Can a user follow Shape A / B / C concretely in practice? Are the worked examples actionable? | CRITICAL | User Goal "use case" — workflow pattern for high-stakes work |
| **D4** | **Completeness** | Do the 4 observation targets all receive distinct adjudications, with the inquiry's job-boundary respected (no out-of-scope drift)? | CRITICAL | Sensemaking C6 + C5 (bounded follow-ups out of scope) |
| **D5** | **Robustness** | Does the recommendation survive the zero-empirical-precedent gap? Is the design-grounded honesty calibrated correctly? | HIGH | Sensemaking C7 (empirical-precedent gap honesty required) |
| **D6** | **Elegance / Parsimony** | Is the 3-shape (A + B + C) + F-anchor inventory the minimum-sufficient inventory, or over-engineered? | MEDIUM | Sensemaking E5 (Shape G correctly merged into A's continuation) |
| **D7** | **Project-specific risk: Inherited-commitment-honoring** | Does the recommendation honor the routeman priors (16-45 consolidation + 4 priors) without re-litigating them? | HIGH | Sensemaking C1 (no re-litigation) |
| **D8** | **Project-specific risk: Architectural-soundness** | Is the Boundary-discipline framing LOAD-BEARING for the recommendation, or post-hoc justification? Could the recommendation stand without it? | HIGH | Innovation P1's claim that the architecture prescribes the slot |
| **D9** | **Project-specific risk: Heaviness-claim soundness** | Is the "no new heavy-mode spec needed" verdict structurally defensible against the user's reasonable lightweight-concern intuition? | HIGH | Sensemaking K5 + Innovation P5's per-axis adjudication |
| **D10** | **User-perspective: Does this answer the user's question to their satisfaction?** | The user expressed a SPECIFIC concern; the recommendation responds with a structural verdict that says "your concern is rational but the answer is composition not spec-expansion." Will this satisfy the user, or will it feel dismissive? | CRITICAL | Sensemaking HA1 + HA3 + the relational risk |
| **D11** | **Specific-failure-case: Concrete scenario where the recommendation produces a bad outcome** | What is the strongest specific failure case? Test the recommendation against it. | HIGH | Multi-axis prosecution depth requirement |
| **D12** | **Spec-gap probe: Where is the recommendation under-specified or relies on user-judgment without determination criteria?** | Identify gaps where the recommendation assumes a determination the user must make but doesn't specify how. | HIGH | Innovation's determination-mechanism piece check |

### Dimension validation

- **Dimension blindness check.** Sensemaking applied 6 lateral perspectives + Definitional/Internal Consistency + Definitional/Frame-exit Completeness (gating did not fire). Critique dimensions D1-D12 cover: technical/logical (D1-D6), human/user (D10-D11), strategic (D7), risk/failure (D5, D8-D11), elegance (D6). No sensemaking perspective is uncovered. PASS.
- **Project-specific risk check.** D7 (inherited-commitment-honoring), D8 (architectural-soundness), D9 (heaviness-claim soundness) are project-specific. The recommendation guides workflow on a live discipline; project-specific risk dimensions are present. PASS.
- **Discrimination check.** D6 (Elegance) is MEDIUM; all others CRITICAL or HIGH. Most dimensions will produce meaningful discrimination. D6 may produce only weak signal — acceptable for the size of this inquiry.

### Stake level

**MEDIUM-HIGH.** The recommendation guides workflow but does NOT modify specs. Reversibility is HIGH (the user can deviate from the recommendation; no durable artifact is changed). BUT this is the first integration-pattern recommendation for /routeman (zero precedent); operational precedent will calcify around this guidance. Burden of proof: **balanced** — neither strict guilty-until-innocent nor relaxed innocent-until-guilty. Prosecution must construct genuine objections; defense must show the recommendation works.

---

## Phase 1 — Fitness Landscape

### Landscape topology

ONE deliverable (confirmation-shape inquiry). Landscape is a single-point evaluation across 12 dimensions.

### Viable region success criteria

- **D1 Correctness:** all 4 observation targets answered with distinct adjudications.
- **D2 Coherence:** Shape A continuation + heaviness verdict + staged-rerunnability mechanism interlock without internal contradiction.
- **D3 Actionability:** each shape has a concrete worked example + cost + use-case + when-to-apply guidance.
- **D4 Completeness:** all 4 observation targets explicitly addressed; bounded follow-ups flagged as out of scope.
- **D5 Robustness:** zero-empirical-precedent gap explicitly flagged via design-grounded honesty section; confidence reservation propagates.
- **D6 Elegance:** 3 shapes + 1 negative anchor is parsimonious for the inquiry's scope (not 7; not 1).
- **D7 Inherited-commitment-honoring:** priors named as context; no commitments adjudicated; no Inherited Commitments Re-test (correctly absent given no Synthesis Trigger).
- **D8 Architectural-soundness:** Boundary-discipline framing tied to concrete spec content (the taxonomy doc + routeman.md §1.5 boundary placement); not just rhetoric.
- **D9 Heaviness-claim soundness:** the per-axis adjudication is structurally grounded; the "no new heavy-mode" verdict is defended via specific evidence per axis.
- **D10 User-perspective:** the recommendation engages the user's concern as RATIONAL (the lightweight intuition is correct in spirit; the answer is composition, not spec-expansion) — relational positive.
- **D11 Specific-failure-case:** identified + tested.
- **D12 Spec-gap probe:** identified gaps named.

---

## Phase 2 — Adversarial Evaluation

### Candidate: The integration-pattern recommendation deliverable (P1+P2+P3+P4+P5+P6+P7+P8)

#### PROSECUTION — strongest case against

**P-Dimension D1 (Correctness) — strongest objection:**
> *Does the recommendation answer the 4 observation targets distinctly, or do they blur together?*

Re-examination:
- **OT 1 (integration pattern):** addressed by P1 + P2 + P3 + P4 (architectural slot + 3 shape recommendations).
- **OT 2 (job-boundary reframe):** addressed by P1 (per-route vs cross-route reasoning two-tier; reasoning is /MVLw's job + enumeration is /routeman's job).
- **OT 3 (heaviness concern):** addressed by P5 (5 sub-axes adjudication + no-heavy-mode-spec verdict).
- **OT 4 (staged-rerunnability hypothesis):** addressed by P5 (structurally validated; meaningful vs naive re-run distinction).

All 4 OTs receive distinct adjudications. **PROSECUTION on D1: SUBSTANTIATED-PASS.**

**P-Dimension D2 (Coherence) — strongest objection:**
> *Does Shape A's continuation pattern (directional-mode re-run) actually achieve what staged-rerunnability promises, or is the connection loose?*

Re-examination: Shape A's continuation pattern (P2) names: "When the continuation fires, re-invoke /routeman with refined parameters: Directional mode with parent-route-id..." P5's staged-rerunnability mechanism explanation names: "The 18-58 staged-mapping mechanism IS staged rerun in concrete form: stage-1 generic run produces a parent Route Map; user selects an important parent route; stage-2 directional run produces refined sub-routes under that parent." Both describe the same mechanism — directional-mode re-invocation as the depth substrate. Coherent.

**PROSECUTION on D2: PASS.**

**P-Dimension D3 (Actionability) — strongest objection:**
> *The worked examples in P2/P3/P4 are HYPOTHETICAL. Can a user actually translate them into commands they'd type?*

Re-examination of P2's worked example: "Invoke `/routeman` pointed at the 16-45 inquiry folder." Specific enough — the user knows how to invoke `/routeman` with a folder path (the SKILL.md spec accepts folder input). Concrete enough.

Re-examination of P3's worked example: "/routeman pointed at the project root (or a state-summary file)" — slightly ambiguous (what state-summary file?). The example IS concrete enough to apply but the "or" clause introduces a determination the user must make (which state file?). MINOR GAP.

Re-examination of P4's worked example: a hypothetical inquiry walked through 3 steps. The example is concrete in narrative but doesn't say exactly which inquiry folder / which question. MINOR GAP for actionability — the user has to translate the hypothetical to their actual context.

**PROSECUTION on D3: MOSTLY PASS with 2 minor gaps in the worked examples' specificity.** Severity: REFINE-level (worked examples could be tighter; not KILL-level).

**P-Dimension D4 (Completeness) — strongest objection:**
> *Are there observation targets the user implicitly raised that the deliverable missed?*

Re-examination of the user's verbatim text. The user said:
1. "I want you to inspect and analyse how routeman can be used with MVLw skill" — OT 1 (integration pattern).
2. "Or this is not a valid question? Maybe hard reasoning tasks in order to find next steps are not job of routeman" — OT 2 (job-boundary reframe).
3. "But also i am worried about routeman being too light weight and it doesnt have heavy version where we can run and it can run in more serious way" — OT 3 (heaviness concern).
4. "But maybe staged runnability of routeman gives us this already" — OT 4 (staged-rerunnability hypothesis).

Did the user implicitly raise OT 5 or beyond? Re-reading... the user's text ends with "Lets dice deep into this" — open invitation to explore. The user did NOT explicitly raise:
- "How does /routeman compose with OTHER skills (e.g., /sense-making invoked directly)?" The user said "MVLw skill" specifically.
- "What if I want to run /routeman without /MVLw at all?" The user implied composition is the question, not standalone routeman.
- "How does the answer change for multi-head?" Bounded follow-up, out of scope per C5.

No implicit OT 5 surfaced. **PROSECUTION on D4: PASS.**

**P-Dimension D5 (Robustness — design-grounded honesty) — strongest objection:**
> *Is the design-grounded honesty section calibrated correctly? Does it under-emphasize or over-emphasize the uncertainty?*

Re-examination of P6: states zero empirical precedent + analogues 14-03's design-vs-runtime distinction + caveats throughout that recommendations are "structurally well-supported by both specs and the architectural taxonomy; operational validation pending."

Is this calibration correct? Counter-test: would a different calibration (e.g., "this recommendation is unreliable until validated; treat as hypothesis") be more honest? That over-emphasizes — the recommendation IS structurally well-supported, not hypothetical. The current calibration ("structurally well-supported + operational validation pending") is balanced.

**PROSECUTION on D5: PASS.**

**P-Dimension D6 (Elegance) — strongest objection:**
> *Are 3 shapes + 1 negative anchor too many? Could the answer be just Shape A?*

Re-examination: Shape A is the primary recommendation. Shape B addresses a structurally distinct use case (already-stabilized state; enumerate before reasoning). Shape C addresses the highest-stakes case (both ends complex). Shape F is the negative anchor (verification that A is doing work).

Could the answer omit Shape B and Shape C? Arguably YES — Shape A with continuation pattern + F covers most cases. Shape B is a corner case; Shape C is rare. The user's question was about composition in general; if 95% of compositions follow Shape A, perhaps Shape B + C are over-specified.

But: omitting them would mean the user encountering a Shape-B-shaped situation has no guidance. The presence of Shape B explicitly says "when the state is already stabilized, the inverse order works — here are the caveats." That's useful even if rare. Shape C similarly provides guidance for the rare maximal case.

**PROSECUTION on D6: WEAK.** The 3-shape inventory survives. PASS.

**P-Dimension D7 (Inherited-commitment-honoring) — strongest objection:**
> *Does the recommendation re-litigate any prior commitment?*

Re-examination: P5 names the 16-45 consolidation + the priors (18-58, 24-00, 13-23, 14-03, 14-49) as the source of routeman's depth mechanisms. The recommendation USES the prior commitments to ground the heaviness verdict + staged-rerunnability mechanism. No re-litigation; priors are inputs.

No Inherited Commitments Re-test section in the finding (correctly absent given no Synthesis Trigger declaration).

**PROSECUTION on D7: PASS.**

**P-Dimension D8 (Architectural-soundness) — strongest objection:**
> *Is the Boundary-discipline framing actually load-bearing for the recommendation, or could the recommendation stand without it?*

Re-test: remove the Boundary-discipline framing from the recommendation. Does the recommendation still work?

Without the framing, Shape A's WHY becomes weaker — "use /MVLw then /routeman because routeman accepts folder input from /MVLw's CONCLUDE output" is a contract-level explanation, not an architectural one. The contract-level explanation works for "how" but not for "why this is the natural order." Without the architectural framing, the user has to take the order on faith (or empirical evidence, which doesn't exist).

The Boundary-discipline framing supplies the structural reason for the order: routeman is by-design a between-cycles operation; /MVLw is the cycle. The composition order is the architecture functioning as designed.

So the framing IS load-bearing — it gives the recommendation its structural justification rather than relying on contract semantics alone.

**PROSECUTION on D8: SUBSTANTIATED-PASS** (the framing is load-bearing; the prosecution actually CONFIRMS the framing's value rather than undermining it).

**P-Dimension D9 (Heaviness-claim soundness) — strongest objection:**
> *The "no new heavy-mode spec needed" verdict rests on the claim that 4 of 5 heaviness sub-axes are already covered. Is each sub-axis verdict structurally defensible?*

Per-axis re-test:
- **(a) Internal iteration:** Routeman §4.5 stop-rule explicitly says "The Enumeration cycle terminates when... next-move space exhaustively traversed at current resolution." Internal iteration exists. VERIFIED.
- **(b) Adversarial-on-routes:** Routeman discipline has no Critique-style prosecution/defense on routes. Genuine gap. Filled by /MVLw composing — specifically, /MVLw's Critique discipline performs adversarial prosecution + defense on whatever it's pointed at, including a Route Map. The composition IS the fill. STRUCTURALLY DEFENSIBLE.
- **(c) Guidance depth:** Routeman §2.4 commits to 4 guidance modes (none / compact / full / expand-on-selection); high-priority routes get `full` mode (3-5 pointers). VERIFIED.
- **(d) Multi-discipline ops:** What multi-discipline cognitive operations IS the /MVLw pipeline. The verdict reframes — not a heavy-mode addition to routeman but the composition pattern. STRUCTURALLY DEFENSIBLE.
- **(e) Staged-rerunnability:** Re-invocation as parameterized variation (§3.5) + directional mode (§3.3 + 18-58 + 14-49 read-policy) implement this. VERIFIED.

Each sub-axis verdict is grounded in specific spec content. The "no new heavy-mode" conclusion follows.

**PROSECUTION on D9: PASS.**

**P-Dimension D10 (User-perspective) — strongest objection:**
> *The user worried "routeman is too lightweight." The recommendation responds: "actually, composition supplies the heaviness; no new spec needed." Will the user find this satisfying, or feel that their concern was dismissed?*

Re-examination: Innovation P5's framing explicitly states "the user's intuition that 'the reasoning part is usually handled by MVLw' is structurally correct." And P5 also says: "The user's hypothesis IS the existing architecture; the user may not have recognized that the 18-58 directional-mode mechanism already implements their idea."

This framing engages the user's concern as RATIONAL and CORRECT IN SPIRIT — the user is right that heaviness is needed; the answer is that the heaviness mechanism is composition (which exists) plus existing depth (which exists), rather than a new spec. The framing validates the user's intuition rather than dismissing it.

Stronger user-perspective concern: does the recommendation actually engage the user's invitation to "dive deep"? The user said "Lets dice deep into this." A surface-level answer would say "just compose them, see Shape A." A deep answer would explore the architectural reasoning, the heaviness sub-axes, the staged-rerunnability mechanism — which IS what the recommendation does across P1 + P5 + P2 + P6.

**PROSECUTION on D10: PASS** with positive relational framing.

**P-Dimension D11 (Specific failure case) — strongest objection:**
> *Construct a concrete scenario where the recommendation produces a bad workflow outcome.*

**Scenario:** User has a moderately-complex question — not high-stakes, but not trivially answerable. They invoke /MVLw (per Shape A guidance). /MVLw runs 1 iteration; the finding settles the question. User then invokes /routeman per Shape A's second step. But /routeman, reading the finding, finds the state's next-move space is sparse — only 2-3 obvious routes. Shape A "succeeded" but produced low value (the second step added little).

Is this a BAD outcome? Or is it the F-anchor (no composition needed) firing correctly?

Re-examination: P2 explicitly says: "When NOT to use Shape A. When the inquiry's output doesn't need next-move enumeration (e.g., a synthesis inquiry that consolidates priors into a decision — no enumeration needed beyond the decision itself), Shape A's second step adds no value. Stop after /MVLw."

The recommendation HANDLES this scenario explicitly. The user is told to stop after /MVLw if enumeration adds no value.

**Stronger failure case:** User has a question where enumeration WOULD add value but routeman has been invoked WITHOUT prior /MVLw — Shape B with unstable state. Per P3's caveat, this risks Premature Filtering and Action Bias.

Does the recommendation handle this? P3 says: "Recommend Shape B only when the state IS stabilized (not when the question is open-ended)." So the recommendation guides the user away from Shape B-with-unstable-state.

But does the user know whether their state is stable? Determination criterion needed.

**PROSECUTION on D11: PARTIAL DEFECT.** The recommendation guides Shape B's appropriateness ("when the state IS stabilized") but doesn't give a concrete determination criterion. **Severity: REFINE-level** — add a determination criterion for "is state stabilized?"

**P-Dimension D12 (Spec-gap probe) — strongest objection:**
> *Where does the recommendation rely on user-judgment without giving determination criteria?*

Re-examination of judgment-dependent claims:
- **Shape A continuation pattern firing:** "when /routeman's output is structurally suspect." Concrete triggers given (LOW confidence on type-assignment; §4.7 RE-RUN self-signal; specific routes need depth). PASS — determination criteria provided.
- **Shape B's "state is stabilized" criterion:** No concrete criterion. **GAP.** (Same as D11.)
- **Shape C's "highest-stakes" criterion:** No concrete criterion. The recommendation says "reserved for genuinely high-stakes inquiries where the chosen route is itself complex enough to warrant a second cycle." User must judge "high-stakes" and "complex enough." **GAP** — could specify (e.g., "high-stakes = the chosen route's failure would block ≥2 downstream routes; complex enough = the route requires Sensemaking on its own to settle").
- **"Meaningful re-run requires CHANGE between runs"** in P5. The change-types are listed (state evolution via /MVLw; parameter refinement; cross-invocation status update). Concrete. PASS.

**PROSECUTION on D12: PARTIAL DEFECT.** Shape B's stabilization criterion + Shape C's high-stakes/complex criterion are under-specified. **Severity: REFINE-level.**

#### DEFENSE — strongest case for

- **D-Strength 1:** The recommendation operates on the architectural taxonomy + the actual spec contracts. It is not speculation; it is the design as-designed.
- **D-Strength 2:** All 4 observation targets receive distinct adjudications. The user gets answers, not deflections.
- **D-Strength 3:** The heaviness verdict is structurally defensible per-axis. The "no new spec" conclusion follows.
- **D-Strength 4:** The staged-rerunnability hypothesis is validated against existing commitments — the user's intuition is RIGHT.
- **D-Strength 5:** The design-grounded honesty calibrates confidence appropriately given zero empirical precedent.
- **D-Strength 6:** The relational framing engages the user's lightweight-concern as rational.

#### COLLISION

| Dimension | Prosecution | Defense | Resolution |
|---|---|---|---|
| **D1 Correctness** | 4 OTs distinctly answered? | YES, per-piece evidence cited. | PASS. |
| **D2 Coherence** | Continuation + staged-rerunnability link? | YES, same mechanism described from two angles. | PASS. |
| **D3 Actionability** | Worked examples concrete enough? | Mostly yes; 2 minor gaps (P3's "or" clause; P4's hypothetical specificity). | REFINE on worked examples. |
| **D4 Completeness** | Implicit OTs missed? | NO. | PASS. |
| **D5 Robustness** | Honesty calibration? | Balanced. | PASS. |
| **D6 Elegance** | Too many shapes? | 3 shapes + F-anchor is parsimonious for the question's scope. | PASS. |
| **D7 Inherited-commitment** | Re-litigation? | NO. | PASS. |
| **D8 Architectural-soundness** | Framing post-hoc? | Framing IS load-bearing; removing it weakens the WHY. | PASS. |
| **D9 Heaviness-claim** | Per-axis defensible? | YES, per axis, with spec citations. | PASS. |
| **D10 User-perspective** | Dismissive? | NO — framing validates user's intuition. | PASS. |
| **D11 Specific failure case** | Shape B with unstable state? | Recommendation guides away but no concrete stabilization criterion. | REFINE on Shape B criterion. |
| **D12 Spec-gap probe** | Under-specified judgment calls? | Shape B stabilization + Shape C complexity criteria are vague. | REFINE on both. |

#### Position on landscape

- **CRITICAL dimensions (D1, D2, D3, D4, D10):** D1, D2, D4, D10 PASS clean. D3 has minor REFINE-level gaps on worked-example specificity.
- **HIGH dimensions (D5, D7, D8, D9, D11, D12):** D5, D7, D8, D9 PASS clean. D11 + D12 have REFINE-level gaps on Shape B and Shape C determination criteria.
- **MEDIUM dimensions (D6):** PASS clean.

**Position: BOUNDARY region** — passes all CRITICAL cleanly except D3 with minor REFINE; passes most HIGH cleanly with D11 + D12 REFINE-level gaps; passes MEDIUM cleanly.

### Multi-axis prosecution depth check

- **User-perspective (D10):** addressed — framing validates user's intuition.
- **Specific failure-case (D11):** addressed — Shape B with unstable state surfaced; partial gap identified.
- **Spec-gap probe (D12):** addressed — under-specified judgment criteria identified.
- **Architectural-soundness probe (D8):** addressed — framing is load-bearing, not post-hoc.

All multi-axis depth-axes applied genuinely. Prosecution is not rubber-stamping.

---

## Phase 3 — Verdict + Constructive Output

### Verdict: **REFINE** — passes all CRITICAL cleanly with minor REFINE-level caveats on D3 (worked-example specificity) and on D11 + D12 (Shape B + Shape C determination criteria).

The deliverable lands in the BOUNDARY region — strong core (architectural framing + 4-OT coverage + heaviness verdict + staged-rerunnability validation + design-grounded honesty), specific weaknesses (3 REFINE-level gaps).

### Constructive output (refinement directions)

The deliverable SURVIVES the critique with the following resolvable caveats. Each is REFINE-level resolvable in CONCLUDE without re-running Innovation:

1. **REFINE direction #1 (D3 — Actionability):** Tighten P3's worked example. Specifically, the line "/routeman pointed at the project root (or a state-summary file)" should specify ONE concrete input mechanism. Recommended replacement: "/routeman pointed at the inquiry folder OR a state-summary file (e.g., `_branch.md` and `finding.md` from a recent settled inquiry)." Same for P4 — explicitly name the kind of inquiry that warrants Shape C (e.g., "an architecture-design question that produces multiple implementation routes, each requiring deep design itself").

2. **REFINE direction #2 (D11 + D12 — Shape B stabilization criterion):** Add a concrete criterion for "is the state stabilized?" Recommended addition to P3:

   > **Stabilization criterion.** Use Shape B (or directly invoke /routeman without a prior /MVLw cycle) only when ALL of the following hold:
   > - The current state can be described in one clear paragraph that names what's understood + what's open + what's pending.
   > - The user can articulate the goal/sub-goal that biases enumeration.
   > - There is no significant disagreement or open meaning-question that would change the route enumeration if resolved.
   >
   > If any of these fail, the state is NOT stabilized; use Shape A instead.

3. **REFINE direction #3 (D12 — Shape C high-stakes/complex criterion):** Add a concrete criterion for "when Shape C's cost is justified." Recommended addition to P4:

   > **Cost-justification criterion.** Shape C's 2x /MVLw cost is justified when BOTH of the following hold:
   > - The upstream question requires the full 5-discipline /MVLw cycle to settle (not a simple synthesis or recall).
   > - The chosen route from the routeman output IS ITSELF complex enough to require its own full cycle (e.g., it would warrant its own MUST in another inquiry's Next Actions; it requires Sensemaking + Critique on its own substance).
   >
   > If either fails, Shape C is over-specified; Shape A with continuation pattern (cheaper) or simply Shape A (cheapest) suffices.

All 3 refinements are concrete + minor + land in CONCLUDE without re-running upstream disciplines.

---

## Phase 3.5 — Assembly Check

The 8 pieces' outputs combine into one integration-pattern recommendation deliverable. Assembly check:

- **Emergent value:** the whole IS more than the sum of parts — the architectural framing (P1) + the depth mechanisms (P5) + the 3 shapes (P2/P3/P4) together produce the workflow guidance no individual piece supplies. The user's question — "how compose?" — is answered by the assembly, not by any single shape's description.

- **Per-dimension assembly:** the 12 dimensions all PASS the deliverable's combined evidence (some with REFINE caveats). No dimension fails on the whole.

- **Axis-coverage:** composition order (A/B/C) + cost (low/medium/high) + heaviness sub-axes (5 axes) + confidence framing (design-grounded). Multi-axis coverage holds. PASS.

- **Novelty of the assembly:** Naming the Boundary-discipline + cognitive-cycle composition as the architectural slot IS novel for the project (first explicit framing). This is the OQ9 research-frontier observation in P7.

**Assembly verdict: SURVIVES** with 3 REFINE-level caveats from Phase 3.

---

## Phase 4 — Coverage + Convergence Assessment

### Coverage

- **Per-candidate coverage:** Full adversarial test against all 12 dimensions. PASS.
- **Per-solution-space coverage:** ONE deliverable (confirmation-shape). Coverage complete by construction.

### Convergence

Convergence criteria (for confirmation-shape inquiry, per-iteration):

- **SURVIVE verdict with no critical-dimension caveats** — D3 (CRITICAL) has minor REFINE; D1/D2/D4/D10 (CRITICAL) PASS clean. The minor D3 caveat is RESOLVABLE at CONCLUDE (worked-example tightening). Effectively clean SURVIVE on critical dimensions. PASS.
- Other convergence criteria N/A (single iteration).

### Signal: **TERMINATE** with the deliverable ranked as SURVIVE-with-3-caveats. The 3 REFINE directions route to CONCLUDE for inclusion in the finding (not back to Innovation).

---

## Convergence Telemetry

- **Dimension coverage:** 12 dimensions constructed; all 12 tested with prosecution + defense + collision. **Full coverage.**
- **Adversarial strength:** STRONG. Prosecution found 3 minor defects (D3 worked-example specificity; D11/D12 Shape B + Shape C determination criteria). Multi-axis prosecution depth applied (user-perspective + specific-failure-case + spec-gap probe + architectural-soundness probe).
- **Landscape stability:** STABLE. The deliverable's BOUNDARY position is unchanged after prosecution — the minor REFINEs don't shift the landscape position.
- **Clean SURVIVE exists:** ALMOST — passes all CRITICAL dimensions cleanly except D3 which has a minor REFINE; the REFINE is resolvable at CONCLUDE without iteration. Effectively SURVIVE.
- **Failure modes observed:**
  - Wrong Dimensions: NO (12 dimensions validated against sensemaking perspectives + project-specific risks).
  - Rubber-Stamping: NO (prosecution found 3 substantive defects).
  - Nitpicking: NO (all defects severity-weighted; all REFINE-level not KILL).
  - Dimension Blindness: NO (sensemaking perspectives all covered; project-specific risks present).
  - False Convergence: NO (convergence per-iteration shape).
  - Evaluation Drift: N/A (single iteration).
  - Self-Reference Collapse: LOW RISK — Critique uses external grounding (the live specs + the priors' commitments + the architectural taxonomy doc); the verdict is not Sensemaking-internal.

**Overall verdict: PROCEED to CONCLUDE.** The deliverable SURVIVES with 3 REFINE-level caveats routing to CONCLUDE for incorporation into the finding.

---

## Final Deliverable Summary

### (a) Dimensions with weights

12 dimensions: 5 CRITICAL (D1 Correctness, D2 Coherence, D3 Actionability, D4 Completeness, D10 User-perspective); 6 HIGH (D5 Robustness, D7 Inherited-commitment, D8 Architectural-soundness, D9 Heaviness-claim, D11 Specific-failure-case, D12 Spec-gap probe); 1 MEDIUM (D6 Elegance).

### (b) Fitness Landscape

- **Viable region:** PASS on all CRITICAL + HIGH dimensions cleanly + acceptable on MEDIUM.
- **Dead region:** FAIL on any CRITICAL.
- **Boundary region:** PASS on CRITICAL with minor REFINE-resolvable caveats OR pass on HIGH with at most a few REFINE-resolvable caveats.
- **Position of the deliverable:** **BOUNDARY** — 4/5 CRITICAL clean PASS + D3 minor REFINE; 4/6 HIGH clean PASS + D11/D12 REFINE; MEDIUM clean PASS.

### (c) Candidate Verdicts

**Verdict: REFINE → effectively SURVIVE-with-3-caveats** (the 3 caveats are CONCLUDE-resolvable; do not require Innovation re-run).

### (d) Coverage Map

| Region | Coverage status |
|---|---|
| 4 observation targets | FULLY COVERED (each addressed by specific pieces) |
| 3 composition shapes | FULLY COVERED (A/B/C with worked examples + caveats) |
| Heaviness adjudication | FULLY COVERED (5 sub-axes with per-axis verdicts) |
| Staged-rerunnability | FULLY COVERED (mechanism explained + hypothesis validated) |
| Architectural framing | FULLY COVERED (Boundary discipline + cognitive cycle slot) |
| Design-grounded honesty | FULLY COVERED |
| Open Questions | FULLY COVERED (14 items across 4 categories) |
| Finding shape spec | FULLY COVERED |
| Shape B stabilization criterion | COVERED-WITH-REFINE (concrete criterion to add at CONCLUDE) |
| Shape C cost-justification criterion | COVERED-WITH-REFINE (concrete criterion to add at CONCLUDE) |
| P3/P4 worked-example specificity | COVERED-WITH-REFINE (minor tightening at CONCLUDE) |

### (e) Signal

**TERMINATE.** The deliverable SURVIVES with 3 REFINE-level caveats routing to CONCLUDE.

CONCLUDE must:
1. Incorporate the 3 REFINE directions:
   - Tighten P3 worked example + P4 worked example specificity.
   - Add Shape B stabilization criterion to P3 content in the finding.
   - Add Shape C cost-justification criterion to P4 content in the finding.
2. Produce the finding per the P8 deliverable shape spec (CONCLUDE template).
3. Archive the 5 discipline outputs to `docarchive/`.

No additional iteration required.

---

## Failure-mode self-check

- **Wrong Dimensions:** D1-D12 validated. NO FAILURE.
- **Rubber-Stamping:** Prosecution found 3 substantive defects. NO FAILURE.
- **Nitpicking:** All defects REFINE-level (no KILLs on minor issues). NO FAILURE.
- **Dimension Blindness:** Project-specific risk dimensions present (D7-D9). NO FAILURE.
- **False Convergence:** Per-iteration convergence; not declared prematurely. NO FAILURE.
- **Evaluation Drift:** N/A. NO FAILURE.
- **Self-Reference Collapse:** External grounding (live specs + canon docs + priors) present. NO FAILURE.

7/7 failure modes absent. PROCEED to CONCLUDE.
