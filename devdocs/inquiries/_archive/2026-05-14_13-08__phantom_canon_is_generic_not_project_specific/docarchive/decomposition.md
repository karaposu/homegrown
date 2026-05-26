# Decomposition — Phantom Canon is Generic (tight)

## Input recap

Produce CORRECTS-flavored LOOP_DIAGNOSE finding: corrected L1 spec; recursive demonstration as separate piece; standing meta-check; optional project-boundary; preserved hypotheses + verdict + family-positioning + self-reference structure. User-requested tight execution given 5-MVL+-in-succession.

---

## Step 1-3 — Coupling, boundaries, validation (compressed)

**Elements:** frontmatter (E1) + Question (E2) + Surrounding context (E3) + Finding Summary (E4) + Correction Chain (E5) + Failure Hypotheses preserved (E6-E8) + Attribution table (E9) + Corrected L1 with sub-pieces (E10a-d) + Recursive Demonstration (E11) + Diagnostic Verdict (E12) + Pattern-family (E13) + Self-reference (E14) + Reasoning (E15) + Next Actions/Open Questions (E16) + Source Input (E17).

**Coupling:**
- E10 (corrected L1) ↔ E11 (Recursive Demonstration): STRONG — the recursion is direct evidence for why L1 needed correction
- E11 ↔ E14 (self-reference): MEDIUM — different layers (spec vs artifact); structurally distinct
- E10 ↔ E12 (verdict): STRONG — verdict cites corrected L1
- E13 (family) ↔ E11 (recursion): MEDIUM — recursion is concrete instance of lesson-introduces-its-own-trap from family

**Answers to specific decomposition questions:**

(a) **"What's preserved from previous"** — DISTRIBUTED. Each preserved element (hypotheses, verdict, attribution table, family) appears in its natural LOOP_DIAGNOSE section with a brief "(preserved from 2026-05-14_12-45)" annotation. NOT its own top-level piece.

(b) **Recursive Demonstration** — OWN top-level piece. Placed AFTER Maintenance Candidates and BEFORE Diagnostic Verdict, so verdict can cite it. Structurally distinct from regular self-reference (different layer).

(c) **Standing meta-check** — embedded WITHIN the corrected L1 spec (P2.4) as a SUB-SECTION called "Standing meta-check on trigger criteria." It belongs IN the L1 spec because it's a rule the L1 spec embeds, not a separate component.

(d) **Project-boundary element** — sub-section within L1 spec ("Optional project-boundary declaration"), parallel to the standing meta-check.

---

## Step 4 — Question Tree (8 top-level pieces)

### P1. How does this finding introduce itself? (Identity + lead-in)

**Verification:**
- Frontmatter has `corrects:` for previous LOOP_DIAGNOSE finding
- Question preserved
- Surrounding context names the user's correction
- Finding Summary covers CORRECTS verdict + preserved elements + recursive-demonstration headline

**Sub-pieces:** P1.1 frontmatter; P1.2 Question; P1.3 Surrounding context; P1.4 Finding Summary

### P2. What is the LOOP_DIAGNOSE body (with corrected L1)?

**Verification:** all 5 Step 4 sections present; preserved elements clearly annotated; corrected L1 sub-pieces detailed.

**Sub-pieces:**
- **P2.1** Correction Chain Summary (preserved structure; updated to reflect this inquiry's correction chain to the previous LOOP_DIAGNOSE finding)
- **P2.2** Failure Hypotheses (PRESERVED from previous; brief reference + cross-citation, not full re-elaboration)
- **P2.3** Failure Attribution Summary table (PRESERVED)
- **P2.4** Corrected Maintenance Candidates — the LOAD-BEARING piece:
  - **P2.4a** Generic L1 trigger criterion (B1) + ambiguity threshold (B2) + diversified category examples (B3) + project-agnostic file-affected phrasing (B4)
  - **P2.4b** Standing meta-check on trigger criteria ("are these criteria project-agnostic?" applied recursively to the L1 spec itself)
  - **P2.4c** Optional project-boundary declaration
  - **P2.4d** L4 deferred (PRESERVED from previous)
- **P2.5** Diagnostic Verdict (PRESERVED ACTIONABLE with brief restatement)

### P3. The Recursive Demonstration

**Verification:**
- Names the recursion explicitly: previous LOOP_DIAGNOSE finding's L1 itself exhibited Phantom Canon
- Cites the over-specification location (L1's trigger criteria with this-project examples)
- Frames as concrete instance of lesson-introduces-its-own-trap at meta-meta-level
- Notes what this teaches: even careful diagnostics about a failure mode can exhibit the failure mode
- Single block; atomic

### P4. Pattern-family positioning (preserved + extended)

**Verification:** preserves the three-pattern family naming with calibration note; ADDS a brief note that this iteration's recursive demonstration provides concrete evidence for the family (lesson-introduces-its-own-trap firing at meta-meta-level).

### P5. Self-reference acknowledgment (preserved + extended)

**Verification:**
- Preserves original self-reference about /explore canonical-vs-installed (the diff-check)
- ADDS: this inquiry's _branch.md applied the proposed L1's check to its own referenced artifacts (canon-status declared for each)
- ADDS: the corrected L1's trigger criteria were themselves checked for project-agnosticism

### P6. Reasoning

**Verification:**
- Why CORRECTS over REFINES (strengthened diagnostic three NOs)
- What's preserved + why
- What's corrected + why
- Honest cost-naming for 5 MVL+ in succession; cumulative value is recursive-demonstration as concrete evidence

### P7. Next Actions + Open Questions (mostly preserved + extended)

**Verification:**
- COULD: apply corrected L1 to /MVL+ skill spec
- DEFERRED: L4 (preserved)
- Open Questions: monitoring L1 deployment; whether other pre-steps need similar genericization

### P8. Source Input

**Verification:** raw user input verbatim.

---

### Determination-mechanism piece check

Load-bearing concept: "Phantom Canon" + canon-status determination + project-agnostic trigger.

Use-time check: "is THIS artifact's canon-status checkable generically (project-agnostic)?"

**P2.4a (generic L1 trigger) + P2.4b (standing meta-check)** address this. The trigger criterion + meta-check together provide the use-time check.

**Check PASSES.**

---

## Step 5-6 — Interface + Dependency Order

### Interfaces

| Source | Target | Type |
|---|---|---|
| P1 frontmatter | P2 LOOP_DIAGNOSE body | declaration-elaboration |
| P2.1 Correction Chain | P2.2 Hypotheses (preserved cross-reference) | evidence |
| P2.4 Corrected L1 | P3 Recursive Demonstration | the corrected L1 is the response to the recursion |
| P3 Recursive Demonstration | P2.5 Diagnostic Verdict | evidence input |
| P4 Pattern-family | P3 Recursive Demonstration | family context for the recursion |
| P5 Self-reference | P2.4 (canon-status check applied to corrected L1) | demonstration of applied lesson |

### Dependency Order

Phase 1: P1.1-P1.3 + P8 foundation (parallel)
Phase 2: P2.1 Correction Chain → P2.2-P2.3 preserved (brief) → P2.4 Corrected L1 (sub-pieces sequential)
Phase 3: P3 Recursive Demonstration (depends on P2.4)
Phase 4: P2.5 Verdict + P4 Family + P5 Self-reference (depends on P3)
Phase 5: P1.4 Finding Summary + P6 Reasoning + P7 Closing

---

## Step 7 — Self-Evaluation

| Dimension | Verdict |
|---|---|
| Independence | PASS |
| Completeness | PASS |
| Reassembly | PASS (determination-mechanism check passes via P2.4a+P2.4b) |
| Tractability | PASS |
| Interface clarity | PASS |
| Balance | PASS (P2.4 is largest but content-proportional to the corrected L1's importance) |
| Confidence | HIGH |

Failure modes: none firing.

---

## Final Summary

8 top-level pieces; ~13 sub-pieces total. Tight. LOOP_DIAGNOSE Step 4 envelope preserved; CORRECTS-flavored framing; Recursive Demonstration as separate piece; standing meta-check embedded in L1 spec; project-boundary as sub-section.

**Output: PROCEED to Innovation.**
