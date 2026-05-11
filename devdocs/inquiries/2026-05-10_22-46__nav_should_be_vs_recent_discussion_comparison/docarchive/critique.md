# Critique: nav_should_be vs recent discussion — comparison

## User Input

Source: `/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-10_22-46__nav_should_be_vs_recent_discussion_comparison/_branch.md`

Innovation committed P1 (operations distinction with structural table), P2 (per-use-case matrix with 10 cases × verdicts), P3 (verification result PARTIAL on `multi_resolution_navigation.md`), P4 (recommendation: keep Recent as-is; introduce concept-mapping as new protocol DEFERRED).

---

## Phase 0 — Dimension Construction

### Evaluation Dimensions

| # | Dimension | Source | Weight |
|---|---|---|---|
| D1 | **Correctness** — does the comparison actually answer the user's question? | User stated requirement | HIGH |
| D2 | **Source-document fidelity** — citations to nav_should_be / recent / multi_resolution_navigation accurate? | Sensemaking C1, C-D1 | HIGH |
| D3 | **Maintenance-overreach avoidance** — Step 5 honored on the deferred concept-mapping protocol? | loop_diagnose Step 5 | HIGH |
| D4 | **Self-reference resistance** — using /navigation discipline framework to evaluate /navigation-related designs | Critique failure mode #7 | HIGH |
| D5 | **Specification operability** — verification result clearly explained + branch logic operational? | Decomposition determination-mechanism check | HIGH |
| D6 | **Operation-distinction strength** — is the load-bearing claim (concepts vs typed routes → different operations) really supported, or forced? | Sensemaking Ambiguity #1 | HIGH |
| D7 | **Per-use-case fit honesty** — are the 10 verdicts justified or stretched? | Sensemaking M3 | MEDIUM-HIGH |
| D8 | **Coherence with prior project audits** | Sensemaking C1 | MEDIUM-HIGH |
| D9 | **Vocabulary resolution clarity** — does the disambiguation actually work, or does it leave hazards? | Sensemaking M5 | MEDIUM |
| D10 | **Cost vs benefit** — is N=2 designs enough evidence for the operation distinction? | Default | MEDIUM |

### Project-specific risk dimension check

The proposal involves project artifacts (`homegrown/protocols/multi_resolution_navigation.md`; the recent discussion's spec edits; potential new concept-mapping protocol). Project-specific risks covered: D2 source-fidelity, D3 overreach, D4 self-reference, D5 operability, D6 operation-distinction, D8 audit coherence. Coverage: present.

### Burden of proof

**HIGH STAKES** — the comparison shapes whether the project introduces a new capability. Defense must demonstrate clear viability for each piece.

---

## Phase 1 — Landscape Construction

### Viable region

A candidate is viable when:
- Passes D1 — addresses user's question.
- Passes D2 — citations match real spec / protocol text.
- Passes D3 — Step 5 honored.
- Passes D4 — self-reference mitigated via external anchoring.
- Passes D5 — verification result + branch logic clear.
- Passes D6 — operation distinction structurally supported (not just on the unit-of-enumeration argument).

### Dead region

- Fails D2 (fabricated citations).
- Fails D3 (commits a new protocol without the user's confirmation or evidence).
- Fails D6 (operation distinction collapses on inspection).

### Boundary region

- D9 partial — vocabulary disambiguation may leave residual hazards in `nav_should_be.md` itself (which uses "navigation" for both operations).
- D10 partial — N=2 designs is small evidence base for asserting two structurally separate operations.

---

## Phase 2 — Adversarial Evaluation

### P1 — Operations distinction

**Prosecution.**
- *D6 operation-distinction strength:* the unit distinction (typed route vs concept) might be a false binary. /navigation's `Goal` field IS a concept reference (e.g., "DEEPEN the X concept"). So a /navigation route is "an action against a concept" — concept is INSIDE the route. The distinction is presentation-level, not structural.
- *D2 source-fidelity:* the claim "/navigation requires a SIC cycle" — is that strictly canonical, or interpretive? Need to verify against the audit's CANONICAL items.

**Defense.**
- *D6 defense:* P1's table lists FIVE structural differences (input, unit, output, scaling, taxonomy) — not just "the unit." Even if the unit distinction were collapsible, the input difference is hard: /navigation reads a finished SIC cycle's artifacts (small, bounded); concept-mapping reads a codebase or local territory (potentially huge, unstaged). The scaling difference forces structural separation regardless of unit framing.
- *D2 defense:* the audit at `devdocs/inquiries/2026-05-10_03-50__navigation_established_audit/finding.md` lists item M1 as CANONICAL: *"after a SIC cycle (primary)"* — directly anchors the input claim. Plus the recent discussion's per-run artifact spec explicitly takes "source-inquiry folder" as input. Source-anchored.

**Collision.**
- Prosecution's D6 collapse-attempt fails because the table has 5 structural differences, not 1. Even if "concepts vs routes" were collapsible (which Sensemaking Ambiguity #1 also tested and rejected), input + scaling + taxonomy differences hold independently.
- D2 anchoring is solid.

**Verdict: SURVIVE.** Operation distinction holds.

---

### P2 — Per-use-case matrix

**Prosecution.**
- *D7 fit honesty:* the matrix has 10 cases but the user only explicitly named a few (codebase orientation, per-inquiry next-direction). Some cases (UI, onboarding) are derived from the source documents but feel pre-baked toward "nav_should_be wins more" outcomes.
- *D7 honesty:* the verdicts assigning wins to nav_should_be on UI / onboarding / resolution may be giving credit for UNDELIVERED features (nav_should_be VISIONS but doesn't operationalize UI; recent discussion is operational but doesn't address UI). Comparing operational-spec to vision-document on operational use cases is asymmetric.

**Defense.**
- *D7 defense:* the 10 cases are derived from BOTH source documents — nav_should_be names UI vision and onboarding metaphor; recent discussion names per-inquiry next-direction and bloat-prevention. Each case has at least one source-document anchor. Sensemaking M3 explicitly listed these as the natural use-case set for navigation-related operations.
- *D7 vision-vs-spec asymmetry:* acknowledged. The matrix verdicts say "designed for it" or "addresses it" — they don't claim operational delivery. nav_should_be wins on "designed for it" for UI / onboarding / resolution because that's the literal claim. Recent wins on "operationally delivers" for selection memory / bloat / per-inquiry. Both claims are honest about scope.

**Collision.**
- Prosecution's pre-bakedness concern is real but addressable by acknowledging the asymmetry in the matrix presentation. The verdicts themselves stand.

**Verdict: SURVIVE with caveat.** Add a note to the matrix that some verdicts compare "designed for" (nav_should_be vision) against "operationally delivers" (recent discussion); the comparison is honest but the asymmetry is worth flagging.

**Constructive output:** in P2's matrix, add a header-row note: *"Verdicts compare 'design intent' for vision items (nav_should_be) and 'operational delivery' for spec items (recent discussion). The two source documents are at different abstraction levels — comparing apples to apples per-use-case requires this hybrid framing."*

---

### P3 — Verification result PARTIAL

**Prosecution.**
- *D5 operability:* the verification reading is critical. Did Innovation read multi_resolution_navigation.md accurately? The PARTIAL verdict hangs on the claim "Navigation requires a SIC cycle for bootstrap; codebase has none."
- *D2 source-fidelity:* multi_resolution_navigation.md Step 2 says *"run Navigation first"* — could "Navigation" here be interpreted to include a NEW bootstrap-from-territory primitive (i.e., extend Navigation's charter)?

**Defense.**
- *D5 defense:* Innovation directly quoted Step 2 of multi_resolution_navigation. The reading is grounded. The "PARTIAL" verdict explicitly distinguishes structural patterns (reusable) from input/output (incompatible).
- *D2 defense:* "Navigation" in multi_resolution_navigation refers to the canonical /navigation discipline (the protocol's name "MULTI_RESOLUTION_NAVIGATION" is built on Navigation). Re-interpreting Navigation to include a new bootstrap primitive would be charter expansion that the audit explicitly forbids (A2 CANONICAL: ONE structural operation). The reading honors the audit.

**Collision.**
- Defense holds. The PARTIAL verdict is structurally correct. Innovation's reading is anchored in spec + audit text.

**Verdict: SURVIVE.** Clean.

---

### P4 — Recommendation + vocabulary + Step 5

**Prosecution.**
- *D3 overreach:* "introduce concept-mapping as new lightweight protocol DEFERRED" — even DEFERRED, is this a backdoor commitment that pre-shapes future work? The user might prefer NO recommendation about new protocols.
- *D9 vocabulary clarity:* the disambiguation says "user keeps saying 'navigation'; project files use disambiguated names." But `nav_should_be.md` (a project file authored by the user) uses "navigation" for BOTH operations. Future readers of nav_should_be will face the same ambiguity that motivated this comparison.

**Defense.**
- *D3 defense:* the deferral has an explicit revival trigger (*"when user is ready and produces a manual concept-mapping run as evidence"*). The recommendation doesn't ship a protocol; it names the option and gates it on user-trigger + evidence. This is the same pattern the prior loop_diagnose findings used for DEFERRED candidates (M2, M3, M7). Consistent with project's deferral discipline.
- *D9 defense:* the vocabulary disambiguation applies forward; nav_should_be.md is historical (already written; preserved as user's vision document). Future spec files use disambiguated names. Past documents stay as-is unless user wants to revise. Reasonable.

**Collision.**
- Prosecution's D3 concern: the recommendation EXISTS even if it's deferred. Defense's "named option, gated on trigger" framing is the right shape for honest deferral.
- Prosecution's D9 concern: the historical-document hazard is real but bounded. Acknowledge it.

**Verdict: SURVIVE with caveat.** Add to P4 a note that nav_should_be.md remains the user's vision document; future readers should interpret its "navigation" as covering both operations, knowing that the disambiguation applies forward.

**Constructive output:** in P4's vocabulary section, add: *"Note: `nav_should_be.md` is the user's historical vision document and uses 'navigation' for both operations. It is not retroactively edited. Future readers should interpret nav_should_be.md's 'navigation' as covering both /navigation (canonical) AND concept-mapping (new), per this finding's disambiguation."*

---

### Self-reference collapse check (failure mode #7)

This critique evaluates an Innovation that compares two navigation-related designs using /navigation discipline framework. Three meta-levels deep (the comparison uses Sensemaking + Decomposition + Innovation + Critique disciplines, all of which are sibling disciplines to /navigation).

**Mitigation evidence:**
1. **External anchoring** — spec/protocol text quoted directly: audit's CANONICAL items M1; multi_resolution_navigation Step 2; recent discussion's per-run schema. External, not loop-derived.
2. **Refused trivial SURVIVE** on P2 + P4 — caveats applied requiring spec-text additions.
3. **Operation distinction stress-tested** in Sensemaking Ambiguity #1 + Critique D6 prosecution — survived 2 independent challenges.

Self-reference collapse: **NOT observed.**

---

## Phase 3.5 — Assembly Check

The 4 pieces compose into the comparison answer:
- P1 establishes the structural distinction (operations).
- P2 maps use cases × verdicts.
- P3 verifies whether existing infrastructure covers nav_should_be Discussion 1.
- P4 synthesizes recommendation with deferral + vocabulary handling.

**Assembly emergent property:** the user gets a complete, evidence-anchored answer to their question — operation distinction, per-use-case fit, verification of an existing-protocol option, and a clean recommendation that respects Step 5.

**Assembly's adversarial test.**
- *Coverage gap:* does the assembly address the user's actual question? User asked "which one does better for what." Assembly delivers per-use-case verdicts + complement framing + recommendation. No gap.
- *Vision-spec asymmetry:* the comparison handles two source documents at different abstraction levels honestly (per P2 caveat). Acknowledged.

**Assembly verdict: SURVIVE with 2 caveats applied** (P2 abstraction-asymmetry note; P4 historical-document vocabulary note).

---

## Phase 4 — Coverage + Convergence Assessment

### Coverage map

- All 4 pieces evaluated against 10 dimensions.
- 6 critical-weight dimensions all checked.
- Multi-axis prosecution depth applied: user-perspective (P4 — historical document hazard); specific failure-case (P1 — Goal-field-as-concept-pointer collapse-attempt); specification-gap probe (P3 — multi_resolution_navigation re-interpretation).

### Convergence assessment

- At least one SURVIVE without critical caveat? **YES** — P1, P3 SURVIVE clean.
- Landscape stable? **YES.**
- Decreasing rate of new information? **YES.**

### Failure-mode self-check

| Failure mode | Observed? | Notes |
|---|---|---|
| Wrong dimensions | NO | Phase 0 validated against project-specific risks. |
| Rubber-stamping | NO | P2 + P4 received caveats. |
| Nitpicking | NO | No KILLs; severity-weighted. |
| Dimension blindness | Mitigated | D2 + D3 + D4 + D5 + D6 + D7 explicit. |
| False convergence | NO | Convergence criteria met. |
| Evaluation drift | N/A | First iteration. |
| Self-reference collapse | **Acknowledged + mitigated.** External anchoring + stress-tested distinction + refused trivial SURVIVE. |

---

## Final Deliverable

### (a) Dimensions with weights

| # | Dimension | Weight |
|---|---|---|
| D1 | Correctness | HIGH |
| D2 | Source-document fidelity | HIGH |
| D3 | Maintenance-overreach avoidance | HIGH |
| D4 | Self-reference resistance | HIGH |
| D5 | Specification operability | HIGH |
| D6 | Operation-distinction strength | HIGH |
| D7 | Per-use-case fit honesty | MEDIUM-HIGH |
| D8 | Coherence with prior audits | MEDIUM-HIGH |
| D9 | Vocabulary resolution clarity | MEDIUM |
| D10 | Cost vs benefit | MEDIUM |

### (b) Fitness Landscape

- **Viable (clean):** P1 (operations distinction), P3 (verification result).
- **Boundary (caveat applied):** P2 (per-use-case matrix — abstraction-asymmetry note), P4 (recommendation — historical-document vocabulary note).
- **Dead:** empty.
- **Unexplored:** whether `multi_resolution_navigation`'s structural patterns can be FORMALLY specified for reuse by future concept-mapping protocol — flagged in P4 as research-frontier; not blocking.

### (c) Candidate Verdicts

| ID | Verdict | Constructive output |
|---|---|---|
| P1 (operations distinction) | SURVIVE | Clean — 5 structural differences, not just the unit |
| P2 (per-use-case matrix) | SURVIVE w/ caveat | Add header-row note acknowledging vision-vs-spec abstraction asymmetry in some cases |
| P3 (verification result) | SURVIVE | Clean — direct spec quote anchors the PARTIAL verdict |
| P4 (recommendation + vocab + Step 5) | SURVIVE w/ caveat | Add note that nav_should_be.md remains the user's vision document; disambiguation applies forward only |
| **Assembly** | SURVIVE w/ 2 caveats applied | Apply both caveats during finding compilation |

### (d) Coverage map

- 4 pieces × 10 dimensions evaluated.
- Self-reference: external anchoring + stress-tested distinction + refused trivial SURVIVE.
- Multi-axis prosecution: user-perspective + specific failure-case + specification-gap probe.

### (e) Signal: TERMINATE with caveats applied

**TERMINATE.** Convergence reached. Apply 2 caveats during finding compilation.

**Ranked survivors:**
1. P1 (operations distinction) — clean SURVIVE.
2. P3 (verification result) — clean SURVIVE.
3. P2 (per-use-case matrix) — SURVIVE with abstraction-asymmetry note.
4. P4 (recommendation) — SURVIVE with historical-document vocabulary note.

---

## Convergence Telemetry

- **Dimension coverage:** 10/10 dimensions; 6 HIGH critical-weight.
- **Adversarial strength:** STRONG. P2 + P4 received caveats; P1's structural distinction stress-tested; P3's verification reading challenged on re-interpretation possibility.
- **Landscape stability:** STABLE.
- **Clean SURVIVE exists:** YES (P1, P3).
- **Failure modes observed:** NONE blocking. Self-reference collapse risk explicitly mitigated.
- **Overall: PROCEED.** Apply 2 caveats during finding compilation.
