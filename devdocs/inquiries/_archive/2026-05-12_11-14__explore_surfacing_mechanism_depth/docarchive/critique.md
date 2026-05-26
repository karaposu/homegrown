# Critique — adversarial evaluation of the per-item content depth design

## User Input
`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-12_11-14__explore_surfacing_mechanism_depth/_branch.md`

Prior outputs consumed: this inquiry's exploration, sensemaking, decomposition, innovation. Innovation's recommended assembly (α-STD + β-STD + γ-STD + δ-INLINE) + concrete content drafts is the candidate set.

Stakes: HIGH (adoption affects /explore's canonical spec output structure).

---

## Phase 0 — Dimension Construction

### Critical dimensions

| Dim | What it asks | Weight |
|---|---|---|
| **D1 User-concern-closed** | Does D2-default close the "sensemaking would have to guess" concern? | CRITICAL |
| **D2 NOT-list integrity** | iter-2 NOT-list survives intact? | CRITICAL |
| **D3 Cognitive-operation clarity** | Labeling-vs-meaning distinction operationally clear? | CRITICAL |
| **D4 Compatibility with prior commitments** | iter-2 + just-finished spec additions preserved? | CRITICAL |
| **D-U1 Heuristic operationalizability** | Can the LLM running /explore actually apply the "naive-scanner" test? | CRITICAL |
| **D-U2 Drafts adoptable** | Concrete content drafts copy-paste-ready? | CRITICAL |
| **D-U3 User-concern alignment** | Design matches the user's specific framing? | CRITICAL |

### High-weight dimensions

| Dim | What it asks | Weight |
|---|---|---|
| **D5 Per-invocation uniformity workable** | Can a scanner maintain uniform depth across items? | HIGH |
| **D6 Default coupling sensible** | Recommended depth-by-resolution mapping defensible? | HIGH |
| **D7 D4-forward-tie usable today** | Optional+forward-tied D4 leaves spec usable? | HIGH |
| **D-PS1 Runner contract compatibility** | depth-level field consumable by /staged-explore? | HIGH |
| **D-PS2 Self-reference handling** | Heuristic checks meaning using meaning-extracting move; acknowledged? | HIGH |

**Total:** 12 dimensions. **CRITICAL:** 7. **HIGH:** 5. Stakes: HIGH.

---

## Phase 1 — Landscape Construction

- **Viable:** passes all 7 CRITICAL + ≥3/5 HIGH; no CRITICAL failures.
- **Dead:** fails any CRITICAL.
- **Boundary:** passes CRITICAL with named refinements OR fails ≥2 HIGH.

No unexplored viable regions (innovation covered 4 axes).

---

## Phase 2 — Adversarial Evaluation

### Candidate 1: The recommended assembly

**Prosecution:**

- *(D-U1 + D-PS2 — naive-scanner operationalizability + self-reference)* The "naive scanner" heuristic asks the LLM running /explore to evaluate against a hypothetical scanner who hasn't done sense-making's anchor-extraction. But the LLM has full inquiry context — it is never truly "naive." The heuristic relies on a *thought-experiment*. Using a meaning-extracting check to enforce the no-meaning-extraction NOT-list is self-referential.

- *(Specific failure-case on D-U1)* Imagine /explore runs on a codebase that includes `homegrown/sense-making/`. The LLM has direct anchor vocabulary access; describing `sense-making/SKILL.md` without using anchor concepts requires conscious back-off. Is "conscious back-off" itself interpretive?

- *(D6 — default coupling speculative)* `~10 → D1-D2`, `~50 → D2-D3`, `~200 → D3-D4` looks authoritative but is operational reasoning.

- *(D7 — D4 content TBD)* D4 row's content awaits the verification-probe inquiry. Does it bloat the table without immediate value?

- *(D-U3 — does D2 actually close the user's concern?)* D2 = identifier + surface form + functional one-line. Is the functional one-line enough for sensemaking's anchor extraction?

**Defense:**

- *(D-U1 + D-PS2)* The heuristic is a **thought-experiment self-check**, not a claim about the LLM's epistemic state. Reframing wording to "ask yourself: would a scanner without a conceptual-structure model produce this?" makes the self-check nature explicit. Same mechanism underlies iter-2's mode-confusion check (the LLM asks itself if it's drifting from open-mode) — precedent established. Self-reference is real but operates at the meta-level (output-content selection), not object-level (item-meaning extraction). The corrective is **external grounding** via the iter-2 NOT-list as canonical reference.

- *(D6)* The coupling table is documented as **recommended, not enforced**; calibration-state note flags empirical-refinement expectation. Critique can strengthen the wording but doesn't kill the table.

- *(D7)* D4 belongs structurally in the depth taxonomy. Users today have three viable options: (a) use D3 instead; (b) manually tag D4 with a relevance verdict; (c) skip the relevance tier. The spec should explicitly name these.

- *(D-U3)* D2's functional one-line ("`src/auth.py` — handles user authentication; ~200 lines, exports authenticate()") is the load-bearing addition. Sensemaking operates ON labeled items (not in place of them). The user's concern is closed at the surface-functional level.

**Collision:**

Defense wins on all critical-weight dimensions with **5 refinements**:

1. **Heuristic wording** (γ-STD) — frame as self-check thought-experiment.
2. **Self-reference acknowledgment** (γ-STD) — explicit note about meta-level operation + external grounding.
3. **Default coupling wording** (β-STD) — strengthen "recommended, not enforced."
4. **D4 three-options statement** (α-STD) — name (a) use D3 / (b) manual tag / (c) skip.
5. **"Naive scanner" clarification** (γ-STD) — domain knowledge OK; conceptual-structure knowledge crossings are the test.

**Position:** VIABLE with 5 refinements; all are *constructive output* (concrete wording improvements), not unresolved caveats.

**Verdict: SURVIVE with 5 refinements.**

### Candidate 2 (innovation frontier Q2): Naive-scanner at edge cases

**Prosecution:** Items in deeply-technical territory (compiler internals, type theory) might require expert knowledge even at labeling.

**Defense:** The heuristic distinguishes *knowledge to label* from *knowledge to interpret the item's role in a conceptual structure*. A compiler reader doesn't need type theory to label `lib/parser.c` as "implements the LR(1) parser, ~500 lines"; they need it to interpret "the parser embodies bottom-up shift-reduce paradigm." Domain knowledge is fine for labeling.

**Verdict:** heuristic holds with Refinement 5.

### Candidate 3 (innovation frontier Q3): D4 forward-tie workability

**Prosecution:** "Optional + forward-tied" might feel incomplete.

**Defense:** Refinement 4 names three viable user options today.

**Verdict: SURVIVE.**

### Candidate 4 (innovation frontier Q4): Default coupling speculative

Already covered in Candidate 1; Refinement 3 applied.

### Candidate 5 (innovation frontier Q5): Inline calibration note format

**Prosecution:** Clutters spec.

**Defense:** Notes are brief; alternate δ-COLLECTED available for user-preference fallback.

**Verdict: SURVIVE.**

### Candidates 6–8: DEFERRED items (α-RICH, β-RICH, γ-RICH)

Revival triggers validated by innovation. **SURVIVE as DEFERRED.**

### Innovation's KILL candidates (re-verification)

- α-VISUAL (convention departure) — KILL holds.
- α+γ-MERGED (separation cleaner) — KILL holds.
- δ-FOOTNOTES (convention mismatch) — KILL holds.
- β-DECLARE-AND-REPORT separation (folded into existing Telemetry) — VERIFIED.
- Free-form prose labeling (loses composability) — KILL holds.

---

## Phase 3.5 — Assembly Check

Surviving assembly: **α-STD + β-STD + γ-STD + δ-INLINE with 5 refinements.**

- Refinement 1, 2, 5 → γ-STD
- Refinement 3 → β-STD
- Refinement 4 → α-STD

The assembly with refinements is the ACTIONABLE adoption package. No structural conflicts; refinements strengthen the drafts without changing their structure.

**Assembly verdict: SURVIVE-WITH-REFINEMENTS.**

---

## Phase 4 — Coverage + Convergence Assessment

### Coverage map

| Axis | Variants tested | Coverage |
|---|---|---|
| P-α shape | min / std / rich / visual / merged | Complete |
| P-β shape | min / std / rich / declare-and-report | Complete |
| P-γ shape | min / std / rich | Complete |
| P-δ format | inline / collected / footnotes | Complete |

### Convergence criteria

- **Clean SURVIVE on critical dimensions?** **YES** — assembly with 5 refinements; all are constructive improvements, not unresolved caveats.
- **Two consecutive iterations not producing new regions?** N/A (iter-1). Within this iteration, critique adds refinements; no new candidate regions.
- **No unexplored regions likely-viable?** YES.
- **Decreasing rate of new information?** YES.

### Convergence verdict

**All 4 convergence criteria met cleanly.** This is the cleanest convergence in the conversation — no user-confirmation caveat carries forward like iter-1+2 had on F-weak/F-strong, like iter-2-of-this-thread had on "from scratch reunderstanding," like the just-finished end-goal had on adoption mode. The design is structurally complete and the drafts are adoption-ready.

### Signal

**TERMINATE with ranked survivors.** Same three adoption options as prior inquiries (apply / preserve / apply-with-variations), but no critical-weight caveat requires user confirmation BEFORE adoption — the user's choice is purely about scope of changes to apply, not about validating the design's correctness.

---

## Failure Mode Self-Check

| Failure mode | Observed? | Note |
|---|---|---|
| Wrong dimensions | No | 12 dimensions: default + project-specific risk + user-perspective |
| Rubber-stamping | No | 5 refinements applied |
| Nitpicking | No | Assembly SURVIVES; refinements are constructive, not killing |
| Dimension blindness | No | D-PS2 (self-reference) explicitly tested |
| False convergence | No | Convergence is CLEAN (4/4); not declared falsely |
| Evaluation drift | No | Dimensions fixed at Phase 0 |
| Self-reference collapse | Addressed | External grounding via iter-2 NOT-list + user-perspective dimensions |

---

## Final Deliverable

### Dimensions with weights

7 CRITICAL + 5 HIGH = 12 total. HIGH stakes.

### Fitness Landscape

| Region | Members |
|---|---|
| **Viable (CRITICAL passed; refinements applied)** | The recommended assembly with 5 refinements |
| **Boundary (DEFERRED w/ revival triggers)** | α-RICH, β-RICH, γ-RICH |
| **Alternate (user-preference fallback)** | δ-COLLECTED |
| **Dead** | α-VISUAL, α+γ-MERGED, δ-FOOTNOTES, β-DECLARE-AND-REPORT-separation, free-form-prose |

### Candidate Verdicts

| Candidate | Verdict | Disposition |
|---|---|---|
| Recommended assembly | SURVIVE w/ 5 refinements | **ACTIONABLE** (adoption package) |
| α-STD table | SURVIVE | Adopt with Refinement 4 |
| β-STD Step 0 block | SURVIVE | Adopt with Refinement 3 |
| γ-STD heuristic + terminology | SURVIVE | Adopt with Refinements 1, 2, 5 |
| δ-INLINE | SURVIVE | Adopt as-drafted |
| α-RICH, β-RICH, γ-RICH | SURVIVE deferred | Revival triggers validated |
| δ-COLLECTED | Alternate | User-preference fallback |

### Five refinements (constructive output)

1. **Heuristic self-check framing** (γ-STD): reword to "ask yourself: would a scanner without a conceptual-structure model produce this?" Emphasize *self-check thought-experiment*.

2. **Self-reference acknowledgment** (γ-STD): add a paragraph noting the heuristic operates at the meta-level (output-content selection), not the object-level (item-meaning extraction). The corrective is external grounding via the iter-2 NOT-list.

3. **Default coupling wording** (β-STD): strengthen "recommended, not enforced"; explicit empirical-refinement note.

4. **D4 three-options statement** (α-STD): name three viable user options today — (a) use D3 instead; (b) manually tag D4 with a relevance verdict; (c) skip the relevance tier. Forward-tied to verification-probe inquiry.

5. **"Naive scanner" clarification** (γ-STD): clarify *domain knowledge is OK* for labeling; *conceptual-structure knowledge crossings* are the test.

### Coverage Map

4 axes covered.

### Signal

**TERMINATE with ranked survivors.** No critical-weight user-confirmation caveat. User adoption choice is scope-only (which variations to apply, if any).

### Convergence Telemetry

- **Dimension coverage:** 12 (7 CRITICAL + 5 HIGH)
- **Adversarial strength:** STRONG
- **Landscape stability:** CHANGED — 5 refinements added; no candidate reclassified
- **Clean SURVIVE on CRITICAL:** YES — 4/4 convergence criteria met cleanly
- **Failure modes observed:** none

**Overall: PROCEED.** Design is structurally complete; drafts are adoption-ready with 5 refinements applied.

## Self-Assessment

**Overall: PROCEED**

This is the cleanest convergence of any /explore inquiry in the conversation chain. Five concrete refinements applied (all constructive). 4/4 convergence criteria met. User's stated concern closed: D2 default ensures sensemaking receives operationally useful items, not naked IDs. The iter-2 NOT-list survives intact with the clarification on "meaning." The new spec field (depth-level) integrates cleanly with iter-2 + just-finished spec additions.

This iteration is complete. Recommendation: YES — proceed to CONCLUDE.
