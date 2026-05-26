# Critique — compare surfacing metadata runs (MVL+ vs MVL2+)

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-22_22-10__compare_surfacing_metadata_runs_mvl_plus_vs_mvl2_plus/_branch.md` + all prior outputs.

Stake level: **MEDIUM** (comparative verdict for user's information; not a spec edit that ships and propagates). Burden of proof: innocent until prosecution demonstrates clear problem.

---

## Phase 0 — Dimension Construction

### Dimensions extracted from sensemaking SV6 + Goal-criterion + project context

| Dim | Name | Source | Weight | Pass criterion |
|---|---|---|---|---|
| **D1** | Verdict-user-question-fit (Correctness) | User's verbatim query + sensemaking primary criterion | CRITICAL | Verdict correctly answers user's stated question per "for given query" anchor |
| **D2** | Evidence-substantiation (Coherence) | Goal-criterion "evidence-driven" | CRITICAL | Claims trace to specific finding sections via citations |
| **D3** | Reasoning-explicitness (Completeness) | Goal-criterion "explicit dimensions used" | HIGH | Reasoning visible; per-dimension table not opaque; verdict not bare |
| **D4** | Confound-honesty (Robustness) | Goal-criterion "honest about confounds" | HIGH | Confounds honestly named; not used as escape hatches |
| **D5** | Scope-honesty (Robustness) | Sensemaking N=1 commitment | HIGH | No over-claiming generalization |
| **D6** | Internal consistency | Decomposition HC1, HC2 | CRITICAL | P1's verdict matches P2's roll-up; P3 doesn't contradict P1 |
| **D7** | Readability for the user | Sensemaking H9 user-language alignment | MEDIUM | Candidate readable at user's casual tone level |

### Project-specific risk dimensions (Phase 0 refinement note)

The candidate set involves project artifacts (two prior inquiry findings). Project-specific risk dimensions:

| Dim | Name | Source | Weight | Pass criterion |
|---|---|---|---|---|
| **D8** | Frame preservation | Project memory on inquiry-framing discipline | HIGH | User's stated framing ("for given query," "what kind of thing") preserved |
| **D9** | Anti-rubber-stamp | Project-level concern when critique evaluates content produced by upstream disciplines | HIGH | Alternatives genuinely tested, not just confirmed |

### Dimension validation (cross-reference to sensemaking perspectives)

| Sensemaking perspective | Covered by dimension(s) |
|---|---|
| Technical/Logical | D6 |
| Human/User | D1 + D7 + D8 |
| Risk/Failure | D4 + D5 + D9 |
| Definitional/Internal Consistency | D6 |
| Phase/Calibration-State | N/A (no phase dependence) |

**Coverage complete.** No dimension blindness.

---

## Phase 1 — Fitness Landscape

### Viable region

Candidate that:
- Correctly identifies B as better (D1) anchored on user's "for given query" + "what kind of thing" (D8).
- Cites specific sections of each finding (D2).
- Has visible reasoning in per-dimension form (D3).
- Names confounds honestly (D4) and scope honestly (D5).
- P1/P2/P3 internally consistent (D6).
- Readable (D7).
- Tests alternatives, not rubber-stamps (D9).

### Dead regions

| Position | Killed on dimension |
|---|---|
| Refuses to render a verdict | D1 (violates user's explicit request) |
| Declares A better (without re-running sensemaking) | D6 (contradicts sensemaking SV6 without grounds) |
| Cites no specific finding sections | D2 |
| Hides reasoning in a single opaque paragraph | D3 |
| Uses confound as escape hatch | D4 |
| Generalizes beyond N=1 | D5 |
| P1's verdict contradicts P2's table | D6 |
| Confirms sensemaking without testing alternatives | D9 |

### Boundary regions

- Minor caveats on dimension naming, citation specificity, table compactness — possible refinements without overturning verdicts.

### Unexplored regions

- Whether the verdict ages well as the surfacing spec evolves (out of scope for this inquiry).
- Whether the pedagogical-value secondary reading is genuinely out-of-scope (acknowledged in P3 explicitly).
- Whether the user's casual phrasing signals something beyond just casualness (no evidence for this; default to "casual phrasing is casual").

---

## Phase 2 — Adversarial Evaluation

### Candidate: P1 — Verdict text + primary reasoning + V4 supporting

**Prosecution (multi-axis):**

- *User-perspective objection:* The user might read this verdict and feel B's "win" trivializes A's substantial spec engineering work. The verdict says A "goes beyond the user's stated scope" — but a user who VALUES going-beyond would disagree. The verdict's framing of A's surfaces as "more spec engineering done" rather than "better answer" could read as dismissive.
- *Specific failure-case scenario:* If the user re-reads their query and decides they actually WANTED the comprehensive package (e.g., interpreting "what kind of thing we can add" generously to mean "give me the full picture"), the verdict's primary criterion has misread them. The verdict's reliance on the user's exact words assumes the words are precise; the user wrote casually ("btter," "and i was wondering this").
- *Specification-gap probe:* The verdict anchors on the phrase "for given query" from the comparison request. But how much structural weight should one phrase carry? The user did not write a careful inquiry framing; they wrote a brief comment.

**Defense:**

- The verdict explicitly honors A via V4 ("different jobs well; A produced more comprehensive spec engineering"). It does not call A wrong, only "more than asked." The framing is fairness, not trivialization.
- The user's exact phrasing IS the anchor sensemaking committed to (Ambiguity 1 at HIGH confidence on structural grounds). Re-reading the query as "give me the full picture" is a counter-framing that sensemaking explicitly tested and rejected — not via shallow dismissal, but with structural reasoning (the user's "what kind of thing" is singular; "this can prevent" + "the active task" are positive value signals; the negative space "without limiting it or regressing it" is the guard, not an expansion).
- "For given query" carries the load-bearing weight because the user EXPLICITLY put it in the comparison request. The verdict didn't fabricate the anchor; the user provided it. The "btter" typo signals casualness in TONE, not casualness in meaning.

**Collision:**

The user-perspective objection has partial merit — a user could be over-pleased by A's comprehensiveness and feel the verdict trivializes that. But the verdict's V4 supporting characterization explicitly anticipates this reaction: "A and B did different jobs well. If the user's question had been 'give me a complete spec-engineering package,' A would have won." The verdict's structure pre-empts the dismissiveness reading.

The specification-gap on "how much weight does one phrase carry" is bounded: the phrase IS the user's, the verdict cites it, the alternative (ignore the user's framing language) would be worse.

**Position:** D1 PASS · D2 PASS · D3 PASS · D6 PASS (matches P2 roll-up) · D7 PASS · D8 PASS · D9 PASS.

**Verdict: SURVIVE with minor refinement.**

**Refinement target:** consider adding ONE sentence to P1 strengthening the assumption-disclosure — e.g., "This verdict assumes the user's casual phrasing carries the structural weight sensemaking committed to; a user who, on re-reading, decides they wanted the comprehensive package would find A better." V4 supporting characterization already conveys this; the explicit single-sentence statement would harden the honesty.

---

### Candidate: P2 — 12-row per-dimension table

**Prosecution (multi-axis):**

- *User-perspective objection:* 12 dimensions is a lot for a casual-tone user. They might want a 3-4 dimension comparison; the dense table may not be read.
- *Specific failure-case scenario:* If a dimension's weight is contested (e.g., a reader who values comprehensiveness might claim D3 parsimony HIGH is wrong), the whole roll-up wobbles. The dimension weights are themselves judgment calls that the user can't audit without reading sensemaking SV6.
- *Specification-gap probe:* D9 (confound-acknowledgment) is marked TIE because neither prior is responsible for confound-acknowledgment (that's THIS inquiry's job). But D9 is included in the table — does that mislead a reader into thinking the priors should have considered confounds?

**Defense:**

- 12 dimensions are necessary for evidence-rich reasoning the user explicitly requested ("and why?"). A 3-dimension table would compress reasoning at the cost of defensibility.
- Weights are derived from sensemaking SV6's adjudications (Ambiguities 1, 2, 3, 4) — not arbitrary. The structural grounds for each weight are visible in the prior outputs. A reader who contests a weight has the upstream reasoning available.
- D9 being marked TIE WITH EXPLANATION ("neither prior is responsible") is honesty, not misdirection. The cell explicitly states it's not a verdict-driving dimension.

**Collision:**

The "12 is a lot" objection is real. P2 could be tightened: D9 in particular is informational (TIE for non-load-bearing reasons) and could be a one-line note before the table rather than a row, reducing visual weight without losing substance.

The weight-contestation concern is bounded — the upstream reasoning is in sensemaking SV6, which is in the inquiry folder.

**Position:** D1 PASS · D2 PASS · D3 PASS · D6 PASS · D7 PARTIAL (table density is high) · D8 PASS · D9 PASS.

**Verdict: REFINE.**

**Refinement target:** consider collapsing D9 into a one-line note before the table ("D9 confound-acknowledgment is the THIS inquiry's responsibility, not the priors'; TIE applied below by convention.") and reducing the table from 12 rows to 11 with explicit weights. This tightens the table without losing substance. Not blocking the verdict.

---

### Candidate: P3 — Honest-limits prose (confound + scope + run-variance)

**Prosecution (multi-axis):**

- *User-perspective objection:* The user might read P3 and feel the verdict is hedged into uselessness — "B better, but actually we can't say anything." Does the honest-limits section undermine the verdict's actionable value?
- *Specific failure-case scenario:* If the user re-runs both inquiries tomorrow and gets different outputs, will they conclude that today's verdict was meaningless? P3's mention of LLM run-to-run variance might invite this reading.
- *Specification-gap probe:* The confound paragraph claims `/MVL2+`'s self-reference dynamic explains "part of" A's depth on D2 and D6. How much of A's depth is attributable to the confound vs. to A being a genuinely deeper inquiry? Without a quantitative bound, "part of" is unfalsifiable.

**Defense:**

- P3 distinguishes "what verdict claims" from "what verdict doesn't claim." This is honesty, not hedging-into-uselessness. The verdict is preserved; only its overreach is bounded. P3 explicitly says "what the verdict DOES claim: for THIS pair, with THIS user query, on user-question-fidelity as the primary criterion, B did a better job than A."
- Re-running might produce different outputs (LLM non-determinism is real); P3 names this as a known limitation, not a defect of the verdict. The user is better off knowing.
- "Part of" is qualitative because LLM run-to-run variance isn't measured. Quantitative attribution would require the deferred `ab_stability_test` protocol (which doesn't yet exist as an executable protocol — it's a deferred candidate per the A/B precedent finding). The qualitative claim is appropriate to the evidence available.

**Collision:**

The "hedged into uselessness" concern is answered by P3's explicit "what verdict DOES claim" sentence. The "part of" specification-gap is a real limitation but not a defect — the alternative (silent on attribution) would be worse.

**Position:** D1 PASS · D2 PASS (cites `ab_test_inquiry_protocol` precedent) · D3 PASS · D4 PASS · D5 PASS · D6 PASS · D7 PASS · D8 PASS.

**Verdict: SURVIVE.**

---

### Candidate: The Assembly (P1 + P2 + P3 combined)

**Prosecution:**

- *Killer objection:* The assembly is long. End-to-end reading requires effort the user might not invest in. Partial reading defeats the defense-in-depth on verdict honesty.
- *Specific failure-case scenario:* User reads only P1; skips P2 (the dimension table) and P3 (honest limits). User gets the verdict but neither the reasoning nor the limits.
- *Specification-gap probe:* The defense-in-depth emergent property (P1+P2+P3) is text-level; partial reading is a user-side risk the writer can mitigate via structure but not fully eliminate.

**Defense:**

- Length is the cost of evidence-rich reasoning the user explicitly requested ("and why?"). A shorter assembly would compress reasoning.
- The finding template's structure (Finding Summary → Finding body → Reasoning → Open Questions) lets the user read at multiple depths. Finding Summary gives the verdict; Finding body gives per-dimension table + honest limits; Reasoning gives the comparison rigor.
- P1 itself includes V4 supporting characterization that pre-empts the trivialization-of-A reading even if read in isolation.

**Collision:**

The length objection is bounded — the alternative (shorter assembly) loses evidence richness. The structure mitigates partial-reading risk; full mitigation is impossible without the user's cooperation.

**Position:** D1 PASS · D2-D9 PASS or TIE.

**Verdict: SURVIVE.**

---

### Candidate: Emergent property 1 — Defense-in-depth on verdict honesty

**Prosecution:**

- *Killer objection:* "Defense-in-depth" by combining P1+P2+P3 is text-level; a reader could still over-claim by quoting only P1 out of context.

**Defense:**

- P1 explicitly references V4 (different-strengths) and the secondary dimensions A wins on — quoting only P1 still includes the honesty signals.
- Text-level defense is the appropriate mechanism for a text-level deliverable. The alternative (executable enforcement) is structurally impossible for a verdict.

**Collision:** the text-level vs executable concern is bounded; the property is real.

**Position:** SURVIVE.

---

### Candidate: Emergent property 2 — Pattern for future runner-vs-runner comparisons

**Prosecution:**

- *Killer objection:* The pattern is real but untested. Codifying it as a template would require multiple uses to validate.

**Defense:**

- Innovation correctly marked this as RESEARCH FRONTIER, not ACTIONABLE — the candidate IS the observation, not the template. The disposition prevents premature codification.

**Verdict:** SURVIVE (as RESEARCH FRONTIER disposition).

---

## Phase 3.5 — Assembly Check

Combining the SURVIVE + REFINE candidates: the assembled deliverable IS the comparative verdict the user requested. The two emergent properties (defense-in-depth on verdict honesty; pattern as research frontier) hold.

No NEW emergent properties surface at Phase 3.5 — the innovation phase already identified the two relevant emergent properties; critique confirms them rather than producing new ones.

---

## Phase 4 — Coverage + Convergence

### Coverage

- 6 candidates evaluated (P1, P2, P3, Assembly, Emergent 1, Emergent 2).
- 9 dimensions applied (D1-D9; D1-D7 default + D8-D9 project-specific per Phase 0 refinement).
- Multi-axis prosecution applied at each candidate (user-perspective objection + failure-case scenario + specification-gap probe).
- Per-candidate full adversarial testing.

### Convergence

- Clean SURVIVEs: P1 (with minor caveat), P3, Assembly, Emergent 1, Emergent 2.
- Minor REFINEs: P1 (assumption-disclosure sentence), P2 (collapse D9 row to inline note; reduce to 11 rows).
- No KILLs.

### Convergence criteria check

- At least one SURVIVE with no caveats: P3, Assembly, Emergent 1, Emergent 2 — YES.
- Landscape stability: single-iteration comparison inquiry; stability appropriate given upstream work.
- Decreasing rate of new information: yes; Phase 3.5 produced no new properties.

### Failure mode check

| Mode | Observed? | Reason |
|---|---|---|
| Wrong dimensions | NO | Dimensions extracted from sensemaking SV6 + Goal-criterion + project-specific risk; cross-referenced against sensemaking perspectives |
| Rubber-stamping | NO | Prosecution constructed killer objections at each candidate (trivialization-of-A at P1; density-of-table at P2; hedged-into-uselessness at P3; partial-reading at Assembly); each tested |
| Nitpicking | NO | 4 clean SURVIVEs + 2 minor REFINEs (P1, P2) + 0 KILLs — proportionate critique |
| Dimension blindness | NO | Sensemaking perspectives cross-referenced; D8/D9 project-specific dimensions added per Phase 0 refinement |
| False convergence | NO | Convergence reached with explicit grounds; no premature claims |
| Evaluation drift | NO | Dimensions fixed at Phase 0; applied consistently |
| Self-reference collapse | NO | Critique evaluates the comparison-inquiry's deliverable; external grounding via the user's verbatim query + the prior findings as objective artifacts + structural facts (the priors' flow-type fields) |

**0/7 failure modes observed.**

---

## Final Deliverable

### (a) Dimensions with weights

| Dim | Name | Weight |
|---|---|---|
| D1 | Verdict-user-question-fit | CRITICAL |
| D2 | Evidence-substantiation | CRITICAL |
| D3 | Reasoning-explicitness | HIGH |
| D4 | Confound-honesty | HIGH |
| D5 | Scope-honesty | HIGH |
| D6 | Internal consistency | CRITICAL |
| D7 | Readability for the user | MEDIUM |
| D8 | Frame preservation | HIGH |
| D9 | Anti-rubber-stamp | HIGH |

### (b) Fitness Landscape

- Viable region mapped.
- Dead regions: 8 identified.
- Boundary regions: 2 candidates with minor refinements (P1, P2).
- Unexplored regions: out-of-scope for this inquiry (verdict aging; pedagogical reading).

### (c) Candidate Verdicts

| Candidate | Verdict | Notes |
|---|---|---|
| **P1** verdict text + primary reasoning + V4 supporting | **SURVIVE with caveat** | Consider strengthening assumption-disclosure with one sentence (V4 already conveys this; explicit single-sentence statement would harden) |
| **P2** 12-row per-dimension table | **REFINE** | Collapse D9 into a one-line note before the table; reduce to 11 rows |
| **P3** honest-limits prose | **SURVIVE** | Confound + scope + run-variance honestly named without escape-hatch use |
| **Assembly** (P1 + P2 + P3) | **SURVIVE** | Structure supports multi-depth reading |
| **Emergent 1** defense-in-depth on verdict honesty | **SURVIVE** | Text-level defense appropriate to text-level deliverable |
| **Emergent 2** pattern for future runner-vs-runner comparisons | **SURVIVE** as **RESEARCH FRONTIER** | Disposition prevents premature codification |

**0 KILLs · 1 REFINE (P2) · 5 SURVIVEs (with one minor caveat at P1).**

### (d) Coverage Map

- 9/9 dimensions applied.
- 6/6 candidates evaluated with multi-axis prosecution.
- 0 unexplored regions that would change the verdict.

### (e) Signal

**TERMINATE.**

The verdict and supporting structure are ready for finding compilation. The two minor refinements (P1 assumption-disclosure; P2 collapse-D9) are within-scope improvements that can be applied during compilation without re-running the SIC loop.

**Ranked survivors:**

1. The assembly (P1 + P2 + P3 + emergent properties) — the full comparative deliverable.
2. P1 (the verdict statement + reasoning).
3. P2 (with the REFINE applied — 11-row table).
4. P3 (honest limits).
5. Emergent properties 1 and 2 (defense-in-depth on verdict honesty; pattern as research frontier).

---

## Convergence Telemetry

| Telemetry field | Value |
|---|---|
| **Dimension coverage** | 9/9 (D1-D7 default + D8/D9 project-specific). Full coverage. |
| **Adversarial strength** | STRONG — each candidate received multi-axis prosecution (user-perspective + failure-case + specification-gap) per Phase 2 refinement note |
| **Landscape stability** | STABLE — single iteration; upstream work stabilized the candidate space |
| **Clean SURVIVE exists?** | YES — P3, Assembly, Emergent 1, Emergent 2 all SURVIVE without critical-dimension caveats |
| **Failure modes observed** | 0/7 |

**Overall verdict: PROCEED.**

The comparative deliverable is ready for CONCLUDE. The two minor refinements (P1 assumption-disclosure sentence; P2 collapse-D9 to inline note + 11-row table) can be applied during finding compilation. No SIC re-loop needed.
