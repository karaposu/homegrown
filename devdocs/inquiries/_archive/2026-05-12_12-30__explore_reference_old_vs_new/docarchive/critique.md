# Critique — adversarial evaluation of the Option C adoption package

## User Input
`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-12_12-30__explore_reference_old_vs_new/_branch.md`

Stakes: MEDIUM-HIGH (recommendation affects canonical /explore reference + future invocations).

---

## Phase 0 — Dimension Construction

### Critical dimensions

| Dim | What it asks | Weight |
|---|---|---|
| **D1 Recommendation fidelity to SV6** | Does the recommended assembly embody sensemaking's commitments? | CRITICAL |
| **D2 User-decision-authority** | Is Option B fallback intact and documented? | CRITICAL |
| **D3 Drafts adoption-ready** | Concrete drafts copy-paste-ready with placement + exact text? | CRITICAL |
| **D4 MUST/RECOMMENDED tiering correctly assigned** | Is G1 really MUST? Are G2/G3 really RECOMMENDED? | CRITICAL |
| **D5 11 end-goal additions preserved** | Refinements don't regress on what the 4 findings committed | CRITICAL |
| **D-U1 Original question answered** | Gap inventory + end-goal fit + recommendation produced? | CRITICAL |

### High dimensions

| Dim | What it asks | Weight |
|---|---|---|
| **D6 Source-content fidelity** | Adapted content from old file accurately preserved? | HIGH |
| **D7 Cross-references in α-STD** | All §-references in the terminal block draft accurate? | HIGH |
| **D8 Project-convention alignment** | Terminal SOLID-INSTRUCTIONS marker is project-convention? | HIGH |
| **D9 Preservation note accuracy** | Old file kept intact, clearly documented? | HIGH |
| **D-PS1 SKILL.md cascade text** | Exact before/after specified? | HIGH |

**Total:** 11 dimensions. CRITICAL: 6. HIGH: 5. Stakes: MEDIUM-HIGH.

---

## Phase 1 — Landscape Construction

- **Viable:** passes all 6 CRITICAL + ≥3/5 HIGH; no CRITICAL failures.
- **Dead:** fails any CRITICAL.
- **Boundary:** passes CRITICAL with named refinements OR fails ≥2 HIGH.

---

## Phase 2 — Adversarial Evaluation

### Candidate 1: The recommended assembly (α-STD + β-STD + γ-STD + P-δ + P-ε)

**Prosecution:**

- *(D4 MUST/RECOMMENDED tiering)* G1 is assigned MUST based on two rationales: (a) project-convention divergence (terminal SOLID-INSTRUCTIONS block is the pattern in other discipline references); (b) LLM-runtime-variance risk (without the terminal imperative, LLM cognition under load may execute the imperative less reliably). The first rationale is verifiable (you can read sense-making/decompose/innovate references and observe the convention). The second rationale is **plausible but unmeasured** — we haven't observed runtime variance empirically. Should an unmeasured argument count toward MUST?

- *(D7 cross-references in α-STD)* The α-STD draft references many sections of the new file: §1.3, §2.1, §2.2, §2.3, §3.1, §3.3, §3.4, §3.6, §3.8, §4.1, §4.2, §4.4, §4.5, §5.3, §5.4, §5.5, §6.1. Are all 17 references correct and present in the new file? If any are off-by-one or pointing at the wrong subsection, the draft creates broken internal references at runtime.

- *(D-PS1 SKILL.md cascade text)* The draft specifies "Before reading anything else in this file, read `references/explore.md` in full" as the line to locate and replace. Is this the EXACT current wording in `homegrown/explore/SKILL.md`? If the actual file has a slightly different phrasing, the edit instruction fails.

- *(D6 source-content fidelity)* The drafts adapt old file's content to new file's vocabulary. Specifically:
  - α-STD: old's "Structural Exploration" → `/explore`; old's section references → new section references
  - β-STD: old's 4-item NOT list adapted to plain-language paragraph with §1.3 cross-link
  - γ-STD: old's per-mode examples preserved with depth-level references inserted

  Does the adaptation lose any operational content from old? Specifically: old's "Two Exploration Modes" section has a "Key difference from innovation" subsection (old's line 54). γ-STD preserves this. Old's "What Exploration Is" section has the upstream-discipline claim (old's line 26). β-STD doesn't preserve this directly — but new file's §1.2 already has the upstream-precondition claim in stronger form, so no loss.

- *(Specific failure-case on D2 user-decision-authority)* If the user reads the finding and decides Option B (no refinements), do the drafts properly stay un-applied? P-ε's COULD section explicitly names Option B as an acceptable fallback with risk note. User can choose. **No issue.**

**Defense:**

- *(D4 MUST tiering)* The convention argument is solid and verifiable. The runtime-variance argument is plausible (LLM cognitive load is real; terminal imperatives are a documented pattern in LLM prompt engineering) but admittedly unmeasured. **Refinement: explicitly flag the runtime-variance argument as speculative in P-ε's rationale.** Tier stays MUST because convention argument alone is sufficient (the project has a pattern; new file should follow it).

- *(D7 cross-references)* Verified against the new file's structure:
  - §1.3 NOT-list ✓
  - §2.1 components table ✓
  - §2.2 annotation layers ✓
  - §2.3 per-item content depth (D0–D4) ✓
  - §3.1 Step 0 declarations ✓
  - §3.3 boundary-discovery sub-phase ✓
  - §3.4 canonical cycle ✓
  - §3.6 staged execution ✓
  - §3.8 type-aware probing ✓
  - §4.1 failure modes ✓
  - §4.2 convergence criteria ✓
  - §4.4 labeling-vs-meaning heuristic ✓
  - §4.5 self-assessment output ✓
  - §5.3 telemetry ✓
  - §5.4 frontier ✓
  - §5.5 Merge Contract ✓
  - §6.1 runner taxonomy ✓
  All 17 references confirmed. No broken refs.

- *(D-PS1 SKILL.md text)* The exact line in the current SKILL.md (verified through repeated loading at Step 0 across all /explore invocations in this conversation) is: "**Before reading anything else in this file, read `references/explore.md` in full.**" The cascade specifies: change `references/explore.md` to `references/explore_accurate.md`. **Refinement: add explicit instruction to grep/locate the line first to confirm match before editing.** Belt-and-suspenders verification.

- *(D8 project convention)* The terminal `---- NOW SOLID INSTRUCTIONS START ----` marker appears in `homegrown/sense-making/references/sensemaking.md`, `homegrown/innovate/references/innovate.md`, `homegrown/decompose/references/decompose.md`, `homegrown/td-critique/references/td-critique.md`, and the OLD `homegrown/explore/references/explore.md`. **All 5 discipline references use this terminal marker.** New file (without G1) diverges from a 5-out-of-5 project convention. The convention argument is empirically grounded.

- *(D5 end-goal additions preserved)* G1/G2/G3 are additive edits — they don't modify any of the 11 end-goal additions. Verified by inspection: the new file's §1.1 verb-meaning, §2.3 D0–D4, §3.1 Step 0 fields, §3.6 staged execution, §5.5 Merge Contract, §7 calibration/deferred, etc., are all preserved unchanged. **No regression.**

- *(D6 source fidelity)* Vocabulary adaptation done thoughtfully; operational content preserved; "Key difference from innovation" retained in γ-STD; new file's stronger upstream-precondition claim in §1.2 makes β-STD's omission of that point appropriate (not redundant).

**Collision:**

Defense wins on all 6 CRITICAL dimensions with **2 minor refinements**:

1. **Flag the LLM-runtime-variance argument as speculative** in P-ε's rationale for G1=MUST. Convention argument is verifiable + sufficient; runtime-variance argument is plausible but unmeasured. The rationale should reflect this honesty.

2. **Add belt-and-suspenders verification** to P-δ: explicit instruction to grep/locate the Step 0 pre-read line in SKILL.md to confirm it matches the expected text before applying the edit.

**Position:** VIABLE with 2 minor refinements. No CRITICAL caveats; refinements are constructive improvements to the documentation, not structural changes.

**Verdict: SURVIVE with 2 refinements.**

### Candidate 2 (innovation frontier Q1): α-STD cross-references correctness

Covered in Candidate 1's defense. All 17 references verified correct against new file's structure. **Verdict: PASS.**

### Candidate 3 (innovation frontier Q2): β-STD pedagogical clarity

The β-STD draft has 4 framed contrasts (vs sensemaking, vs innovation, vs research, vs browsing) + intro + §1.3 cross-link. Does it duplicate content already in §1 of the new file?

- §1.1 (verb-meaning) — defines exploration positively; β-STD adds negative contrasts.
- §1.3 (NOT-list) — operational discipline-NOT-list; β-STD is pedagogical comparator.
- §1.5 (/navigation specialization) — operational boundary against /navigation; β-STD adds vs-research, vs-browsing, vs-innovation, vs-sensemaking pedagogically.

No duplication. β-STD adds value at the pedagogical layer that §1.3 and §1.5 don't cover (they're operational, not pedagogical).

**Verdict: PASS.**

### Candidate 4 (innovation frontier Q3): γ-STD concrete examples

The γ-STD draft has artifact-mode examples (codebases, literature, competitor products, market data, historical records) + scan/probe behavior + possibility-mode examples (solution spaces, design options, strategic directions, research frontiers) + scan/probe behavior + key-difference-from-innovation. Concrete and grounded.

Does it feel like filler? No — the examples directly support LLM operationalization of scan/probe. Without them, the new file's §3.2 is abstract; with them, it's actionable.

**Verdict: PASS.**

### Candidate 5 (innovation frontier Q4): MUST/RECOMMENDED tiering re-check

Covered in Candidate 1's prosecution + defense. With refinement 1 applied (flag speculation), tiering is structurally sound: G1=MUST justified by 5/5 convention; G2/G3=RECOMMENDED justified by pedagogical-but-not-load-bearing.

**Verdict: PASS with refinement 1.**

### Candidate 6 (innovation frontier Q5): preservation decision

The preservation note explicitly says "do not delete; do not modify" for old `explore.md`. Maintainers tracking the conversation chain benefit from historical context. Does keeping it cause confusion?

- Argument for confusion: two files in `references/` with similar names; new contributors might load the wrong one.
- Argument against: SKILL.md's Step 0 path uniquely determines which is canonical; the file naming (`explore.md` vs `explore_accurate.md`) signals which is current; the preservation note makes the historical role explicit.

**Verdict: PASS.** Preservation decision is structurally sound.

### Other candidates

- α-RICH / β-RICH / γ-RICH (DEFERRED) — revival triggers valid. SURVIVE deferred.
- α-MIN / β-MIN / γ-MIN (ALTERNATE) — user-preference fallbacks. SURVIVE.
- Killed candidates (top-placement of G1; bundle-all-3-into-single-edit) — verified structural. KILLS hold.

---

## Phase 3.5 — Assembly Check

Surviving assembly with 2 refinements applied:

1. α-STD + β-STD + γ-STD + P-δ + P-ε with:
   - **Refinement 1**: P-ε's rationale for G1=MUST explicitly notes that the LLM-runtime-variance argument is speculative; the convention argument (5/5 project references use terminal SOLID-INSTRUCTIONS block) is sufficient.
   - **Refinement 2**: P-δ adds explicit instruction to verify the Step 0 pre-read line in SKILL.md matches the expected text before applying the 1-line edit.

**Emergent assembly observation:** the recommendation package is now structurally complete, conventionally aligned, and verifiable. All ambiguities resolved; the user's adoption choice is purely scope-only (Option C with optional G2/G3 vs Option B fallback).

**Assembly verdict: SURVIVE-WITH-REFINEMENTS.**

---

## Phase 4 — Coverage + Convergence Assessment

### Coverage map

5 pieces × multiple variants per piece. All covered.

### Convergence criteria

- **Clean SURVIVE on critical dimensions?** YES — 6/6 CRITICAL pass with 2 minor refinements (both constructive, neither blocking).
- **Two consecutive iterations not producing new regions?** N/A (iter-1).
- **No unexplored regions likely viable?** YES.
- **Decreasing rate of new information?** YES.

### Convergence verdict

4/4 criteria met cleanly. Same convergence quality as the depth + nav-factoring inquiries (clean convergence; no critical-weight user-confirmation caveat).

### Signal

**TERMINATE with ranked survivors.** User adoption choice: Option C (recommended) vs Option B (fallback) vs Option A (rejected). All three documented in P-ε with explicit rationale.

---

## Failure Mode Self-Check

| Failure mode | Observed? | Note |
|---|---|---|
| Wrong dimensions | No | 11 dimensions (default + user-perspective + project-specific) |
| Rubber-stamping | No | 2 refinements applied; prosecution probed multiple axes |
| Nitpicking | No | Assembly SURVIVES; refinements are constructive |
| Dimension blindness | No | Convention + runtime + fidelity + decision-authority all tested |
| False convergence | No | 4/4 criteria genuinely met |
| Evaluation drift | No | Dimensions fixed at Phase 0 |
| Self-reference collapse | Addressed | This inquiry is meta (about a discipline reference file). Corrective: external grounding via 5/5 project-convention evidence + 4 prior findings + user's stated comparison question |

---

## Final Deliverable

### Dimensions

6 CRITICAL + 5 HIGH = 11 total. MEDIUM-HIGH stakes.

### Fitness Landscape

| Region | Members |
|---|---|
| **Viable (CRITICAL passed; 2 refinements)** | The recommended assembly (α-STD + β-STD + γ-STD + P-δ + P-ε) with 2 critique refinements |
| **Alternate (user-preference)** | α-MIN, β-MIN, γ-MIN |
| **Boundary (DEFERRED w/ revival)** | α-RICH, β-RICH, γ-RICH |
| **Dead** | top-placement of G1; bundle-all-3-into-single-edit |

### Two refinements (constructive output)

1. **Flag LLM-runtime-variance argument as speculative** in P-ε's rationale for G1=MUST. The convention argument (5/5 discipline references in the project use terminal SOLID-INSTRUCTIONS marker) is the structurally sound justification; the runtime-variance argument is plausible but unmeasured. The honesty preserves the recommendation's credibility.

2. **Add belt-and-suspenders verification** to P-δ: instruct the user/maintainer to grep/locate the Step 0 pre-read line in `homegrown/explore/SKILL.md` to confirm it matches the expected text ("Before reading anything else in this file, read `references/explore.md` in full.") before applying the edit. If the actual file has different phrasing, adapt the edit accordingly. This is a 2-second verification that prevents a subtle wrong-edit failure mode.

### Coverage Map

5 axes × multiple variants. All covered. No unexplored viable regions.

### Signal

**TERMINATE with ranked survivors.** Adoption choice is user's; no critical-weight gate.

### Convergence Telemetry

- **Dimension coverage:** 11 (6 CRITICAL + 5 HIGH)
- **Adversarial strength:** STRONG — every CRITICAL dimension received prosecution at multiple axes
- **Landscape stability:** CHANGED — 2 refinements added to constructive output
- **Clean SURVIVE on CRITICAL:** YES — 4/4 convergence criteria met
- **Failure modes observed:** none

**Overall: PROCEED.** Design is structurally complete; drafts adoption-ready with 2 refinements.

## Self-Assessment

**Overall: PROCEED**

The Option C adoption package survives critique with 2 minor refinements (both constructive). The recommended assembly (α-STD + β-STD + γ-STD + P-δ + P-ε) is concrete and copy-paste-ready. All 17 cross-references in α-STD verified correct. Project-convention alignment empirically grounded (5/5 discipline references). User-decision-authority preserved via Option B fallback. CONCLUDE should now compile the finding with the 2 refinements incorporated into P-ε's content.
