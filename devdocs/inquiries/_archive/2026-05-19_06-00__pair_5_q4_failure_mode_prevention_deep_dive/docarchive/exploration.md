# Exploration — Pair 5 Q4 Deep Dive (Iteration 2, full discipline depth)

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-19_06-00__pair_5_q4_failure_mode_prevention_deep_dive/_branch.md`

7 focal points, 7 source priors. Artifact mode; bounded. Default D2; D3 on focal points (1)-(5).

This is iteration 2 — iteration 1 used framework-inheritance shortcut (~9 min total pipeline; thin discipline outputs). Iteration 2 re-runs each discipline with full reference pre-read + canonical process. Iteration-1 outputs preserved at `docarchive_v1_shortcut/` and `finding_v1_shortcut.md`. No conclusions inherited from iteration 1.

---

## 1. State Mode and Entry Point

- **Mode:** artifact. The territory has concrete pre-existing objects: Pair 5 finding's Q4 text; current /innovate spec; Sub-Inquiry A/B/C/05-00 findings; 01-00 audit. Scan = traverse-and-index across those objects; Probe = read deeper into specific sections.
- **Entry point:** signal-first. The _branch.md pre-specifies 7 focal points and 2 sub-pieces (Q4a + Q4b). The hunch already exists: each sub-piece is asked to be tested for "operationally novel substance vs redundant-with-live-rule."
- **Boundary:** bounded. _branch.md explicitly scopes Q4 only; no boundary-discovery sub-phase fires.

---

## 2. Territory Overview

The territory is a 5-region map:

| Region | Object | What's in it | Resolution explored |
|---|---|---|---|
| **R1 — Q4 origin** | Pair 5 finding's Q4 section (lines 169-177) | Two proposed refinement notes (Q4a + Q4b) — full text + reasoning | D3 |
| **R2 — Current Failure Modes** | /innovate spec Failure Modes section (lines 648-700) | 6 failure modes; Q4 targets #3 (Early Frame Lock) + #6 (Survival Bias); identifies insertion points | D3 |
| **R3 — Live piece-level machinery** | /innovate spec Phase 2 Generate refinement notes (lines 367-414) | Meta-Decision-Piece Criterion (5 properties incl. property v); Piece-Level Inversion Rule; Intervention-Shape-Axis Inversion | D3 |
| **R4 — Adjudication framework** | 05-00 Q1 deep dive finding | 4-alternative-analysis framework (Alt D full / Alt A mid / Alt B see-also / Alt C status quo); minimum-sufficient calibration discipline | D3 |
| **R5 — Sub-Inquiry B deferral** | 03-00 finding (Pair 5 Q1 + Q4 DEFERRED rationale) | Reasoning: out-of-B's-scope per 02-00 staging; Q3 + Q4 in B operationally suffice without Pair 5 Q4 | D3 |
| **R6 — Inherited Frame Audit** | /innovate spec lines 416-549 (post-A1) | Audit's Predicate Step (ii) operates at piece-level; checks load-bearing commitments per 4+1 properties | D2 |
| **R7 — Conventions** | 01-00 audit findings | §-marker drop; descriptive cross-references; refinement-note italics + bold paragraph titles | D2 |

---

## 3. Inventory per Region

### R1 — Pair 5 Q4 origin (D3)

**Pair 5 finding line 169-173 (Q4a — Early Frame Lock refinement):**

> Add a refinement note to `/innovate`'s §"Failure Modes" §3 Early Frame Lock:
>
> **Mechanism-TYPE-aware prevention.** The base prevention rule (apply at least one more mechanism after the first successful output) is mechanism-count-aware. When the decision at the locked piece is at meta-level (relationship label, framing semantic, lesson vocabulary, evaluation criterion per the meta-decision-piece criterion in §"Phase 2 Generate"), the additional mechanism MUST include Inversion specifically — applying any-mechanism-that-isn't-Inversion does not satisfy the prevention rule for meta-decision pieces. Recognition signal: a meta-decision piece's mechanism log shows two or more mechanisms applied (count satisfies the base rule) but none is Inversion (TYPE fails the refined rule).

**Pair 5 finding line 175-177 (Q4b — Survival Bias refinement):**

> Add a parallel refinement to §"Failure Modes" §6 Survival Bias:
>
> **Prior-step never-generate prevention.** The base prevention rule (deliberately test the most uncomfortable output) presupposes the uncomfortable output exists in the candidate set. When the candidate set at a meta-decision piece contains only one direction (e.g., the "preserve / accept / continue" direction without the "reject / invert / discard" direction), the prior-step variant of Survival Bias is operating: the uncomfortable alternative was never generated, so there is nothing to test with extra care. Recognition signal: at a meta-decision piece, the candidate set contains only directions that preserve the prior, extend the current frame, or continue the inherited direction, with no candidate that rejects, inverts, or discards. Apply the piece-level Inversion rule from §"Phase 2 Generate" to generate the missing direction.

**Original intent (per Pair 5 finding's defense-in-depth framing, lines 193-199):** Q4 is the "recognition-signal layer" in the 5-piece architecture. Q1 sets reading; Q2 sets determination; Q3 sets the positive rule; **Q4 sets failure-mode recognition signals**; Q5 sets observability. Q4's value-add at origin was failure-mode-side recognition — readers landing on Failure Modes section see the meta-decision-piece-aware variant of the failure mode and its recognition signal.

**Cross-references in Q4 original text:** Q4a references "meta-decision-piece criterion in §'Phase 2 Generate'" (now: descriptive cross-ref needed per 01-00). Q4b references "piece-level Inversion rule from §'Phase 2 Generate'" (now: descriptive cross-ref).

### R2 — Current Failure Modes section (D3)

**Failure Mode 3 — Early Frame Lock (lines 668-674):**

> ### 3. Early Frame Lock
>
> The first successful reframe is adopted permanently. No further mechanisms are applied. The innovation is real but suboptimal — a better version exists in an unexplored region.
>
> **How to recognize:** An idea was accepted on the first successful mechanism application. The feeling is "good enough, let's move on."
>
> **How to prevent:** After the first successful output, apply at least one more mechanism to check if there's something better.

**Failure Mode 6 — Survival Bias (lines 692-698):**

> ### 6. Survival Bias
>
> Only the most comfortable or familiar novel outputs survive testing. Truly disruptive innovations are killed because they're uncomfortable, not because they're wrong.
>
> **How to recognize:** Everything that survives testing is incremental. Nothing challenges fundamental assumptions. The "innovation" is really just optimization.
>
> **How to prevent:** Deliberately test the most uncomfortable output with extra care. Ask: "Am I rejecting this because it's wrong, or because it's threatening?"

**Insertion points:** After each Failure Mode's `**How to prevent:**` paragraph; before the next `### N. ...` heading (Mode 4 for FM3; closing `---` for FM6). Style precedent: existing failure modes have NO inline refinement notes. Q4 would introduce the FIRST refinement notes inside Failure Modes section. The Phase 2 Generate section already hosts `*Refinement note (applies at Phase 2 Generate):*` italics + bold paragraph title pattern — applicable here with location-specific applicability marker.

**Adjacency observation:** The current Failure Mode entries are uniformly short — Description / How to recognize / How to prevent. They contain NO cross-references to Phase 2 Generate's refinement notes. **A reader at Failure Modes section has zero forward navigation to the piece-level machinery that already exists for the exact case Q4 targets.**

### R3 — Live piece-level machinery (D3)

**Meta-Decision-Piece Criterion (lines 367-381):** 5 properties (relationship-label / framing-semantic / lesson-vocabulary / evaluation-criterion / intervention-shape-commitment). Edge-cases + retrospective audit. Worked positive + negative example. **Critically:** this rule's compliance is observable at piece-output time. It does NOT operate at Failure Modes section's vantage.

**Piece-Level Inversion at Meta-Decision Pieces (lines 385-395):**

> When Innovation operates in Production-task mode … For each piece that meets the Meta-Decision-Piece Criterion (above), Innovation MUST additionally apply Inversion at piece-level, generating an Inversion-candidate that asks "what is the assumption this piece commits, and what if it's reversed?"

> **Compliance criterion (observable at the saved Innovation output):** the piece's output contains both (a) the principal candidate text for the piece's committed direction, AND (b) an explicit Inversion-candidate paragraph naming the assumption being reversed and stating what follows from the reversal. **Both candidates must be tested via the 5-test cycle.**

**Operational analysis of what the live rule enforces:**

- It MUST generate an Inversion-candidate at every meta-decision piece (compliance criterion (b)).
- The Inversion-candidate IS the "uncomfortable" candidate Survival Bias would have failed to generate.
- The rule's "MUST additionally apply Inversion" already enforces TYPE (Inversion specifically), not just COUNT (any additional mechanism).

**Key operational finding for Q4a:** the live Piece-Level Inversion Rule is **MORE STRINGENT** than Q4a's proposed refinement. Q4a says "additional mechanism MUST include Inversion at meta-decision pieces." The live rule says "Inversion-candidate MUST be generated AND tested at meta-decision pieces." Q4a is a weaker form of an already-live stronger rule. **Q4a's operational substance is fully encoded in the live Q3.**

**Key operational finding for Q4b:** the live rule's compliance criterion (b) — "Inversion-candidate paragraph naming the assumption being reversed" — operationally **prevents the never-generate case**: if compliance criterion (b) is satisfied, the inversion direction WAS generated. So the live rule prevents Q4b's never-generate state by construction. **Q4b's operational substance is also encoded in the live Q3** — though the framing-side (the failure-mode recognition signal) is not.

**Override path:** the live rule has `Inversion-marked-inapplicable: <specific reason>` (line 391). This is the only way the live rule fails to fire. Q4a + Q4b would operate parallel to overrides, not preempt them.

### R4 — 4-alternative-analysis framework (05-00) (D3)

From 05-00 finding's Sensemaking SV6 + finding rationale:

| Alt | Definition | When chosen |
|---|---|---|
| **Alt D — Full original** | Commit Pair 5's verbatim text as a primary spec section | When the substance is operationally novel + load-bearing + not encoded elsewhere |
| **Alt A — Mid refinement** | Commit a 1-sentence forward-reference + brief expansion | When substance is partially novel; some duplication acceptable |
| **Alt B — See-also pointer** | Commit a single-sentence forward-reference paragraph, no expansion | When substance is fully encoded elsewhere; only navigation gap remains |
| **Alt C — Status quo** | No commit | When all of (i) substance encoded elsewhere AND (ii) no navigation gap AND (iii) cost > benefit |

**Minimum-sufficient calibration discipline.** Choose the LIGHTEST alternative that closes the actual gap. 05-00 chose Alt B for Q1 because: Q3 encodes substance (Alt D would duplicate); navigation gap exists (Alt C inadequate); brief expansion would duplicate Q3 substance (Alt A heavier than needed); pure pointer suffices (Alt B minimum-sufficient).

**Per-sub-piece application (the framework allows asymmetric calibration).** Each sub-piece gets independent 4-alternative analysis. Symmetric calibration is NOT required by the framework — substance-driven choice is. If Q4a and Q4b have different substance profiles, they may land at different alternatives.

### R5 — Sub-Inquiry B deferral reasoning (D3)

**Sub-Inquiry B finding line 35:**

> **Pair 5 Q1 + Pair 5 Q4 DEFERRED.** Pair 5's Q1 (definitional clarification at Inversion's "How to apply") and Q4 (failure-mode prevention refinements at Early Frame Lock + Survival Bias) are NOT in sub-inquiry B's scope per 02-00. Future polish inquiry candidates.

**Reason given (line 256):** "Q3 + Q4 (in B) operationally suffice without Q1's preamble modification; Q4's failure-mode refinements add recognition signals but aren't load-bearing."

**Critical: B's reasoning was scope-bounded.** B deferred Q4 because (a) it was out-of-scope per 02-00 staging AND (b) "not load-bearing" — the live machinery in B operationally suffices. B's reasoning does NOT speak to whether Q4 adds non-load-bearing-but-navigation value at Failure Modes section's vantage. That question is what 06-00 must adjudicate.

**Post-A+B+C state's effect on the deferral:** at the time of B's deferral, the live Piece-Level Inversion Rule + Meta-Decision-Piece Criterion + Inherited Frame Audit didn't yet exist. Now they do. **The live machinery has expanded → Q4's operational substance is MORE redundant now than when deferred.** Q4's remaining value is recognition-signal-only at Failure Modes section.

### R6 — Inherited Frame Audit's coverage (D2)

The Audit's Predicate Step (ii) (line 426) operates at piece-level: "For each piece in the inquiry's piece-list, classify the piece by the 4+1 meta-decision-piece criterion." Step (iii) Challenge Scan checks "does any candidate in the set explicitly challenge the assumption/commitment?" If no, the audit fires.

**Operational coverage of Q4a's case:** the Audit catches the case where a meta-decision piece's load-bearing commitment is un-challenged. This is structurally similar to Q4a's case (additional mechanism applied but not Inversion → assumption may still be un-challenged → Audit fires). **The Audit catches Q4a's case at a different vantage** (post-Phase-2, examining candidate set) but with similar effect (forces Inversion via Orchestration Procedure's Inversion dispatch for Belief-type assumptions).

**Operational coverage of Q4b's case:** the Audit's Step (iii) also catches the never-generate case — if the candidate set contains no challenge, Audit fires regardless of why (whether the Inversion-candidate was generated-but-killed or never-generated). The orchestration then dispatches to the appropriate frame-escape feature. **Q4b's case is also caught by the Audit.**

**Audit + Piece-Level Inversion Rule together form a two-layer net:** Piece-Level Inversion Rule forces generation at piece time; Audit catches missed cases post-Phase-2. Q4 would be a THIRD layer at Failure Modes section's vantage.

### R7 — Conventions (D2)

From 01-00 audit (lines 39-46, 108, 138, 179):

- **DROP §-numbering** in spec body. No §-numbered sections exist anywhere.
- **Use descriptive heading names** for sub-sections.
- **Refinement-note style:** `*Refinement note (applies at <location>):*` italics opener + **bold paragraph title.** + body.
- **Cross-references:** use descriptive names ("the Inversion mechanism (above)") not §-numbers.

Q4 text in Pair 5's original uses `§"Failure Modes" §3 Early Frame Lock` + `§"Phase 2 Generate"` — both need descriptive rewrites for any commit.

---

## 4. Signal Log

Signals detected per scan + probe outcomes:

| # | Signal type | Detected at | Probed → outcome |
|---|---|---|---|
| S1 | **Density** | R1 + R3 textual overlap | Probed: Q4a's "additional mechanism MUST include Inversion" overlaps Q3's "Inversion-candidate MUST be generated"; Q4a's substance is fully encoded in Q3 (stronger form). **Q4a operationally redundant.** |
| S2 | **Relevance** | R1 (Q4b) vs R3 (Q3 compliance criterion (b)) | Probed: Q3's compliance criterion (b) forces generation at piece time; this prevents never-generate state by construction. **Q4b operationally redundant — at the piece-time vantage.** |
| S3 | **Absence** | R2 (Failure Modes section's vantage) | Probed: Failure Modes section has zero forward navigation to Phase 2 Generate's piece-level machinery. **A reader entering at Failure Modes 3 / 6 has no pointer to Q3 / Meta-Decision-Piece Criterion.** Navigation gap is real, asymmetric (FM → Phase 2 missing; Phase 2 → FM unnecessary). |
| S4 | **Tension** | R5 (B's "not load-bearing") vs R1 (Pair 5's "defense-in-depth recognition signal") | Probed: tension is real but resolves cleanly — Q4 was always a recognition-signal layer in Pair 5's architecture (not a positive rule). Post-A+B+C, the recognition signal is the only remaining value-add. |
| S5 | **Novelty** | R1 (Q4b's "prior-step never-generate" framing) | Probed: the prior-step never-generate FRAMING is operationally novel as a *recognition signal at Failure Modes section's vantage*. The PREVENTION (apply piece-level Inversion to generate the missing direction) is encoded in Q3. So Q4b's value-add splits: framing/recognition = novel; prevention = redundant. |
| S6 | **Density** | R6 (Inherited Frame Audit) catches both Q4a + Q4b cases at post-Phase-2 vantage | Probed: Audit is a THIRD layer that catches what Piece-Level Inversion Rule might miss. With Q4, total layers = 4 (Q3 piece-time + Audit post-Phase-2 + Q4 failure-mode-side recognition + Q5 telemetry). Defense-in-depth at higher cost. |
| S7 | **Absence** | R4 framework allows ASYMMETRIC calibration per sub-piece | Probed: Q4a and Q4b have different substance profiles. Q4a = recognition-signal-only (Q3 enforces TYPE more stringently). Q4b = recognition-signal PLUS one operationally novel sub-distinction (never-generate vs generated-but-killed-unfairly). **Asymmetric calibration is structurally clean.** |
| S8 | **Tension** | Pair 5's defense-in-depth claim vs minimum-sufficient calibration discipline | Probed: defense-in-depth was Pair 5's framing (5-layer architecture); minimum-sufficient calibration is the framework's commit-time discipline. They're not opposed — defense-in-depth governs WHAT layers to maintain; calibration governs WHAT FORM each layer takes. Q4 can be MAINTAINED at minimum-sufficient form (see-also pointer for redundant cases; lighter refinement for partially-novel cases). |

### Deferred signals

| # | Why deferred |
|---|---|
| D1 | Does the live Piece-Level Inversion Rule + Audit suffice WITHOUT Q4 entirely? Would Q4-status-quo (Alt C) be defensible? Deferred to Sensemaking adjudication. |
| D2 | If Q4 commits, should sub-pieces be unified (one note covering both Failure Modes) or separate (one note at each FM)? Style-precedent question. Deferred to Sensemaking. |
| D3 | Does asymmetric calibration violate consistency-discipline that the Q1 deep dive's framework implicitly carries? Adjudicated in S7 (no), but Sensemaking should re-test. |

---

## 5. Jump Scan — different direction

Before declaring convergence: scan in a previously-unscanned direction. Direction: the OTHER existing rules at Phase 3 Test + Telemetry sections, to verify no other live mechanism already catches Q4's case.

**Re-test trigger disposition (Phase 3 Test, line 577):** post-Phase-3 mechanism; operates on survivors. Does NOT catch the never-generate case (needs a survivor to operate on). **Q4b's never-generate vantage is structurally absent from this mechanism.**

**Artifact-grounding 6th test (Phase 3 Test, line 585):** operates on categorical claims about project state. Does NOT catch the Q4 cases (Q4 is about mechanism log + candidate set composition, not artifact claims).

**Per-piece axis-distribution telemetry (line 740):** reports `axis` annotation per mechanism. Could surface a violation post-hoc but doesn't prevent. Q5 territory.

**Coverage Strategy (lines 617+):** per-seed minimum (1 Generator + 1 Framer). Operates at seed-level, not piece-level. Does NOT catch Q4 cases.

**Methodology-Mode Consideration (Phase 1 Seed, lines 296+):** operates at seed-time. Does NOT catch piece-level Q4 cases.

**Jump-scan result: no surprises.** Phase 2 Generate's piece-level rules + Inherited Frame Audit are the only live mechanisms operating at the right vantage for Q4's cases. The "Q4 is operationally redundant" finding holds under jump-scan. The "navigation gap at Failure Modes section" finding also holds — no other section provides forward navigation either.

---

## 6. Confidence Map

| Region | Confidence | Notes |
|---|---|---|
| R1 — Q4 origin | **confirmed** | Pair 5 finding read verbatim; both sub-pieces' text extracted; reasoning captured |
| R2 — Failure Modes section | **confirmed** | Current text read verbatim; insertion points identified; style-precedent observed (no existing inline refinement notes) |
| R3 — Live piece-level machinery | **confirmed** | Meta-Decision-Piece Criterion + Piece-Level Inversion Rule + Intervention-Shape-Axis Inversion read verbatim; compliance criterion analyzed |
| R4 — 4-alternative framework | **confirmed** | 05-00 finding read; framework + minimum-sufficient discipline + asymmetric-per-sub-piece allowance verified |
| R5 — B's deferral reasoning | **confirmed** | B finding read; rationale extracted; post-A+B+C state effect analyzed |
| R6 — Inherited Frame Audit | **scanned** | Predicate Step (ii) + (iii) verified; orchestration dispatch verified; depth-iterate handling not deeply probed (deferred — not load-bearing for Q4 adjudication) |
| R7 — Conventions | **scanned** | 01-00's key conventions extracted (§-marker drop, descriptive cross-refs, refinement-note style); sufficient for Q4 commit text |
| Coverage Strategy / Phase 3 Test / Telemetry (jump-scan) | **confirmed-absent** | Verified these do NOT provide alternative coverage of Q4's cases |

No `unknown` regions remain. No `inferred-only` regions. Two regions at `scanned` rather than `confirmed`, but at sufficient depth for the adjudication question.

---

## 7. Frontier State

**Stable.** Three convergence criteria:

- **Frontier stability:** YES. Two scan cycles produced no new structural features; all 7 focal points + jump-scan reached confirmed/scanned coverage.
- **Declining discovery rate:** YES. Cycle 1 surfaced the 8 signals (S1-S8) + 3 deferrals (D1-D3); cycle 2 (jump-scan + R6/R7 secondary scans) added only confirmation-by-falsification (no other live mechanism catches Q4's vantage).
- **Bounded gaps:** YES. All gaps (D1, D2, D3) are between explored areas — adjudication questions for downstream disciplines, not unscanned territory.

---

## 8. Gaps and Recommendations — Frontier Questions for Downstream

| # | Question | For discipline |
|---|---|---|
| FQ1 | Per-sub-piece adjudication: Q4a Alt? Q4b Alt? Symmetric or asymmetric? | Sensemaking SV6 commit |
| FQ2 | If asymmetric: justify substance-driven calibration; verify it doesn't violate 05-00's framework | Sensemaking SV6 + Critique adversarial test |
| FQ3 | Style: unified note (one covering both FMs) vs separate notes (one at each FM)? | Sensemaking SV4-SV5 + Decomposition coupling check |
| FQ4 | Cross-reference target wording: "the Piece-Level Inversion at Meta-Decision Pieces refinement note at Phase 2 Generate" vs shorter form? | Innovation drafting |
| FQ5 | Layer-3 §9 outcome: does drafting Q4 spec edits trigger any methodology-mode-alternative consideration? Aim for no-override. | Innovation drafting + Critique verify |
| FQ6 | Reassembly: does the finding give the user what they need to authorize patches? Each EDIT verbatim ready to apply? | CONCLUDE assembly check |

### Recommended downstream entry

**For Sensemaking:** focus on FQ1-FQ3. The territory is mapped; the adjudication question is per-sub-piece calibration + asymmetric vs symmetric. The framework allows asymmetric; substance profile supports it (Q4a recognition-signal-only; Q4b recognition + one operationally novel sub-distinction at framing-side).

**Pre-stabilized hypothesis to test:** Q4a → Alt B (see-also; pure navigation closure) because the Piece-Level Inversion Rule is STRICTLY STRONGER than Q4a (live rule MUSTs Inversion at piece time, not just "additional mechanism includes Inversion"). Q4b → Alt A (mid refinement) because the never-generate FRAMING at Failure Modes section's vantage is operationally novel as a recognition signal (the prevention is encoded but the recognition cue at FM6 is not). Sensemaking should re-test this hypothesis, not inherit it.

**Pre-stabilized hypothesis on style:** separate notes (one at each FM). Reason: the two FMs are at different spec locations (lines ~674 + ~698); a unified note would require choosing one location and creating a forward reference from the other; that's structurally worse than two co-located notes. Sensemaking should re-test.

---

## 9. Telemetry

- **Mode:** artifact
- **Entry point:** signal-first
- **Cycles run:** 2 (initial scan + probe-deepen + jump-scan)
- **Candidates generated:** N/A (artifact mode)
- **Signals detected:** 8 (S1-S8); probed: 8; deferred: 3 (D1-D3 → downstream disciplines)
- **Resolution progression:** D3 on focal points (1)-(5) [R1-R5]; D2 on (6)-(7) [R6-R7]; uniform within each region; per-invocation depth respected.
- **Frontier state:** stable
- **Discovery rate:** declining (cycle 2 added no new structural features)
- **Convergence criteria:** frontier-stability=TRUE; declining-rate=TRUE; bounded-gaps=TRUE
- **Jump-scan performed:** YES (§5)
- **Failure modes checked:** premature depth (NO — cycle 1 was breadth-first scan across 7 regions); surface-only scanning (NO — every signal probed); false confidence (NO — jump-scan performed; no surprises); premature termination (NO — three criteria checked); re-exploration (NO — regions tracked); completeness bias (N/A artifact mode); open→closed drift (NO — annotations stayed at labeling level; no relational meaning claims); silent boundary-discovery (NO — boundary was pre-specified); negative-space silent drop (NO — confirmed-absent regions in R-jump explicit); inadequate D (NO — D2/D3 throughout)

---

## 10. Self-Assessment Verdict

**PROCEED.**

All convergence criteria met; jump-scan performed; no failure modes recognized; per-item depth at D2/D3 throughout. Eight signals probed to operational findings; three deferrals are well-formed downstream questions (not unscanned territory).

**Headline operational finding (for Sensemaking):** Q4's operational substance is fully encoded in the live Piece-Level Inversion Rule + Meta-Decision-Piece Criterion (post-B) + Inherited Frame Audit (post-A). The remaining value-add splits per-sub-piece:

- **Q4a:** recognition-signal at Failure Modes section's vantage only. Live rule is STRICTLY STRONGER. Calibration candidate: **Alt B (see-also)** — minimum-sufficient.
- **Q4b:** recognition-signal at Failure Modes section's vantage PLUS operationally novel framing (prior-step never-generate vs base rule's "test the uncomfortable one"). The framing surfaces a sub-distinction the base rule doesn't carry. Calibration candidate: **Alt A (mid refinement note)** — preserves the operationally novel framing while pointing to encoded prevention.

**Pre-stabilized hypothesis (asymmetric calibration) is structurally clean** per S7 + framework's substance-driven allowance. Sensemaking should re-test, not inherit.

**Iteration-1 comparison (informational):** iteration 1 also reached Q4a Alt B / Q4b Alt A asymmetric calibration. Iteration 2's full-depth exploration produced the same operational findings — but with explicit verification of the strictly-stronger relationship between live Q3 and Q4a (not asserted in iteration 1's thin output), explicit Inherited Frame Audit coverage analysis (skipped in iteration 1), explicit jump-scan (skipped in iteration 1), and explicit per-region confidence mapping (skipped in iteration 1). The verdict stands; the defensibility is now grounded.
