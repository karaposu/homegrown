# Critique — Come-Back-When: A Routelister Subfield, or a Wrong Assumption?

## User Input

Adversarially test the correction. Sharpest tests: (a) are the TWO GROUNDS for "don't add the field" both solid, or is one (esp. the 10-37 appeal) overstated?; (b) is E2 "adding the field rebuilds the predecessor" a real argument or a slippery-slope fallacy?; (c) does the correction SERVE the user or just say "no"?; (d) is "match by Direction relevance" actually workable, not hand-wavy?; (e) non-sycophancy both ways (own finding corrected AND not over-corrected); (f) did I miss the reasonable core of Objection 1 (structure-at-source)? Render SURVIVE/REFINE/KILL.

---

## Phase 0 — Dimensions (weighted)

| # | Dimension | Weight | Why |
|---|---|---|---|
| D1 | **Grounding-soundness** — the two grounds hold | HIGH | the whole "no" rests on them |
| D2 | **Argument-validity** — E2 is a reversal-argument, not a slope-fallacy | MED-HIGH | slippery-slopes can be fallacious |
| D3 | **Constructiveness** — serves the user, not just refutes | HIGH | the user asked "wouldn't it be easier" — a bare "no" underserves |
| D4 | **Workability** — Direction-matching is feasible | MED | the corrected mechanism must actually run |
| D5 | **Non-sycophancy** — both ways; own finding corrected, not over-corrected | HIGH | correcting my own 18-12 |
| D6 | **Inherited-faithfulness** — priors preserved | MED | 18-12 object, 17-45, 10-37, routelister §1.3 |
| D7 | **Scope** — correct the finding, not routelister; not the spec-slot | MED | the standing bounds |

---

## Phase 1 — Fitness Landscape

- **Viable:** Q1 (premise-correction), Q2 (don't-add), Q4 (match-by-Direction), E1 (category-error) — the spine, grounded.
- **Boundary (needs a framing-cut):** the strength of the 10-37 appeal (ground 2); E2's slope-vs-reversal framing; the constructive-forward ordering; the workability of Direction-matching; the reasonable core of Objection 1.
- **Dead:** the comeback-when subfield; condition-firing as primary (both killed in innovation).
- **Unexplored (pre-critique):** whether Objection 1 had a sound kernel worth crediting.

## Phase 2-3 — Adversarial Evaluation + Verdicts

### Q2 ground 2 (the 10-37 appeal) — REFINE (R1)
**Prosecution (D1):** 10-37 was about a *mutable done-tracking todo.md*, not a come-back-when condition-field. Citing it as having "already decided" this overstates it.
**Defense + collision → REFINE:** 10-37 establishes a PRINCIPLE (the enumerator stays pure; controller-state — tracking/gating — off the map), and a come-back-when IS controller-state (a gate). So it applies *by principle*, not by having literally ruled on this field. And ground 1 (routelister §1.3 directly excludes dependency+disposition) is the *direct* exclusion and carries the weight alone. **R1: frame 10-37 as the supporting PRINCIPLE and §1.3 as the direct, load-bearing ground — don't claim 10-37 "already decided" comeback-when specifically.** The "no" stands on §1.3 even if 10-37 is read narrowly.

### E2 (rebuilds the predecessor) — REFINE (R2)
**Prosecution (D2):** "add one field and you'll rebuild routeman" is a slippery-slope — a known fallacy shape.
**Defense + collision → REFINE:** it's not a hypothetical slide; it's grounded in fact — routeman *actually had* Status + Blocked By + Unlocks and was *actually replaced* by the leaner route-lister. So the honest form is "a come-back-when field re-adds the first plank of the *specific schema that was deliberately removed*" — a **reversal-of-a-made-decision** argument, not an inevitability. **R2: frame E2 as "reversing a specific past removal" (concrete), not "an inevitable slide" (fallacy-shaped).** With that framing it's a legitimate, strong point.

### D3 constructiveness + Objection 1's kernel — REFINE (R3 + R5)
**Prosecution (D3):** the user asked "wouldn't it be easier?" A finding that leads with "no, here are two grounds" underserves — and it ignores that Objection 1 had a *reasonable core*: structure-at-source beats post-hoc extraction.
**Defense + collision → REFINE (two):**
- **R3:** lead with the CONSTRUCTIVE answer — "match by Direction; the real missing piece is an index" — and present the "no field" as *why the easier-looking move isn't needed*, not as the headline. Refutation-forward underserves; design-forward serves.
- **R5:** credit Objection 1's kernel. Structure-at-source *is* a sound instinct — and it's **already honored** where genuine gates actually live: the finding's Next-Actions "Gate:" line records the condition, structured, at the point it's known. So the user's instinct is right; it's just satisfied in the controller/disposition layer, not on the route-lister. **Credit this explicitly** — it turns a "no" into "yes, and it already works, here."

### Q4 (match-by-Direction) workability — REFINE (R4)
**Prosecution (D4):** "match by Direction relevance" is hand-wavy — how, exactly, and does it hold at scale (hundreds of parked directions)?
**Defense + collision → REFINE:** the match is an LLM relevance-judgment over the Direction noun-phrases in the index — which is feasible now (it's what a warm runner already does informally). But at scale the index needs help (grouping/tags). **R4: state that matching is an LLM-relevance-judgment over the index, feasible today, and flag scale (many parked directions) as a watch-item** (parallel to 18-12's own frontier), not silently assume it scales.

### Q1, E1, non-sycophancy, scope — SURVIVE
- **Q1 (premise-correction)** — grounded twice (`none`-default + no-condition-field). SURVIVES.
- **E1 (category-error)** — treating a topic as a trigger is a real, clarifying diagnosis; the whole "note+fire" machinery dissolves. SURVIVES (the finding's sharpest single idea).
- **D5 non-sycophancy** — Obj-2 confirmed; Obj-1 corrected (with its kernel now credited, R5); the fact corrected; 18-12's object kept, only the mechanism corrected (not over-corrected — Direction-match is over 18-12's object, not a corpus re-computation). SURVIVES.
- **D6 inherited** — 18-12 object confirmed; 17-45 partly rehabilitated (relevance primary); 10-37 (as principle, R1); routelister §1.3 load-bearing. SURVIVES.
- **D7 scope** — corrects the finding, not routelister; leaves the spec-slot alone. SURVIVES.

## Phase 3.5 — Assembly Check

After the refines the correction is both solid and constructive. R1 puts the weight on the direct ground (§1.3) and demotes 10-37 to supporting-principle. R2 makes E2 a reversal-argument, not a fallacy. R3+R5 turn the finding design-forward and credit the user's sound instinct. R4 makes the matching concrete and honest about scale. The spine (premise wrong → don't add → match by Direction → gate lives in the controller) stands; nothing over-corrects 18-12.

## Phase 4 — Coverage Map + Convergence Telemetry

**Coverage:** all 6 pieces + 3 emergents across 7 dimensions. D1 tightened the grounds (R1). D2 rescued E2 from the fallacy read (R2). D3 forced the constructive turn + surfaced Objection 1's kernel (R3, R5). D4 made the mechanism concrete (R4).

**Verdicts:** 0 KILL · 5 REFINE (R1 10-37-as-principle-not-ruling / R2 E2-as-reversal-not-slope / R3 lead-constructive / R4 matching-is-LLM-judgment-flag-scale / R5 credit-structure-at-source-kernel) · SURVIVE (Q1, E1, non-sycophancy, inherited, scope).

**Adversarial strength:** MODERATE-STRONG — the refines are framing/honesty cuts (no substantive reversal), which is appropriate: the correction is grounded in verified facts, so the exposure is in *how it's argued* (don't overclaim 10-37; don't fallacy-shape E2; don't just say "no"), not *whether it's right*.

**Landscape stability:** STABLE — no piece flipped; the kills stay dead; refines sharpen framing and credit the user's kernel.

**Failure modes checked:** no rubber-stamping (R1 pulls back an over-claim; R5 concedes the user had a point); no nitpicking (each refine changes framing materially); no false convergence (the two grounds re-examined, one demoted); no self-reference collapse (external anchors: routelister §1.3; the routeman schema; the 10-37 finding).

**Signal: TERMINATE with ranked survivors.**
1. E1 — the come-back-when was a category error (topic ≠ trigger) [the clarifying core].
2. Q4 — match by Direction relevance over an index [the constructive answer].
3. Q2 — don't add the field (§1.3 direct; 10-37 principle) [R1, R2].
4. Q1 — the premise-correction (conditions are the exception).
5. Q5 — the homes; loop-side ≠ on-routelister; structure-at-source already honored in Next-Actions [R5].
6. Q3/Q6 — the blocked-by fact; correct the finding not routelister.

**Convergence: PROCEED** to Routelister, then CONCLUDE. The five refines (esp. R1, R3, R5) fold into the finding's prose.
