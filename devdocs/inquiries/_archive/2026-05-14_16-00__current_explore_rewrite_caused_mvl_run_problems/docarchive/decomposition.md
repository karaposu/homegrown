# Decomposition — Did the `/explore` Rewrite Cause Recent Problematic MVL+ Runs (tight)

## Input recap

Produce SUPPLEMENTARY LOOP_DIAGNOSE-style finding identifying `/explore`'s contributing role (NOT primary cause) in the recent problematic MVL+ chain. E2 selective revert REPAIR with per-element decisions (A1 REMOVE; A2 REPAIR; A3 REPAIR; A4-A12 KEEP/flagged). SIBLING positioning to 2026-05-14_15-00. User-requested parsimony at iteration #8.

---

## Step 1 — Coupling Topology (compressed)

**Elements:** E1 frontmatter (`related:` to 2026-05-14_15-00, not `corrects:`) + E2 Question + E3 Surrounding context + E4 Finding Summary + E5 Investigation Summary (diff catalogue) + E6-E8 Failure Hypotheses + E9 Attribution Summary + E10 Maintenance Candidates with per-element REPAIR sub-pieces + E11 Diagnostic Verdict + E12 Self-reference (single layer) + E13 Reasoning + E14 Next Actions + Open Questions + E15 Source Input.

**Coupling:**
- E5 (diff catalogue) ↔ E6 (Hypotheses): STRONG — diff IS the evidence for hypotheses
- E6 H1 (/explore A1+A2+A3) ↔ E10 (REPAIR E2): STRONG — REPAIR addresses identified cause
- E10 (per-element REPAIR) ↔ E12 (Self-reference): STRONG — REPAIR text passes scope-fidelity at bug-level
- E13 Reasoning ↔ all P2 + P3: STRONG — aggregation
- "covering for" reframe + SIBLING positioning + honest cost: ALL live within E13 Reasoning

---

## Step 2 — Detect Boundaries (Top-Down)

**Answers to specific decomposition questions:**

(a) **Diff catalogue placement:** SUB-PIECE within P2.1 "Investigation Summary" (renamed from "Correction Chain Summary" since this is SUPPLEMENTARY not CORRECTS). The diff catalogue is the load-bearing evidence; placing it inside the first Step 4 section is natural.

(b) **Per-element REPAIR decisions:** ONE piece (P2.4 Maintenance Candidates) with THREE sub-pieces (P2.4a A1 REMOVE; P2.4b A2 REPAIR; P2.4c A3 REPAIR). Per operation-parsimony principle, three decisions within the same /explore mechanism location are ONE logical edit, with sub-pieces showing the per-element actions.

(c) **"Covering for" hypothesis reframing:** LIVES IN P4 Reasoning. Single paragraph. NOT its own top-level piece. The reframe is brief: "old wasn't actively protective; was simpler."

(d) **SIBLING positioning to 2026-05-14_15-00:** DISTRIBUTED across (i) frontmatter `related:` field; (ii) P1.3 Surrounding context (one sentence); (iii) P4 Reasoning "Relationship to chain" subsection (brief acknowledgment of complementarity). NOT its own top-level piece.

**Pieces (top-down):**

- **P1.** Identity + lead-in (frontmatter + Question + Surrounding context + Finding Summary). NO "Changes from Prior" block (not CORRECTS).
- **P2.** LOOP_DIAGNOSE Step 4 body inside SUPPLEMENTARY framing:
  - **P2.1** Investigation Summary (with diff catalogue sub-piece)
  - **P2.2** Failure Hypotheses (H1 HIGH A1+A2+A3; H2 MEDIUM A4-A12 flagged; H3 brief acknowledgment of /innovate B3 as primary)
  - **P2.3** Attribution Summary
  - **P2.4** Maintenance Candidates (E2 selective revert) with sub-pieces P2.4a/b/c per-element
  - **P2.5** Diagnostic Verdict (ACTIONABLE; SUPPLEMENTARY framing)
- **P3.** Self-reference (single layer, bug-level)
- **P4.** Reasoning (SUPPLEMENTARY-over-CORRECTS framing + per-element REPAIR justification + "covering for" reframe + SIBLING relationship + honest 8-MVL+ cost + what was killed)
- **P5.** Next Actions + Open Questions (including A4-A12 as research frontier)
- **P6.** Source Input

**6 top-level pieces.** Matches prior chain's 2026-05-14_15-00 parsimony level. No new top-level pieces beyond the LOOP_DIAGNOSE Step 4 envelope + self-reference + closing.

---

## Step 3 — Validate Boundaries (Bottom-Up)

**Atoms:**

- a1: frontmatter (`related:` to 2026-05-14_15-00; `depends-on-protocol`; other related-to-chain)
- a2: Question (preserved from _branch.md)
- a3: Surrounding context (user's question + diff finding headline + SIBLING positioning to 2026-05-14_15-00)
- a4: Finding Summary
- a5: Investigation Summary with diff catalogue (12 categories)
- a6: H1 HIGH — A1+A2+A3 spec-embedded project-coupling contribution
- a7: H2 MEDIUM — A4-A12 spec structural overhead (flagged research-frontier; not committed)
- a8: H3 brief — /innovate B3 as primary cause (cross-reference to 2026-05-14_15-00)
- a9: Attribution Summary
- a10: P2.4a A1 Sources subsection: REMOVE (concrete edit text)
- a11: P2.4b A2 Neighbor disciplines cross-references: REPAIR (concrete edit text)
- a12: P2.4c A3 Specialization pattern + /navigation boundary: REPAIR (concrete edit text)
- a13: Diagnostic Verdict
- a14: Self-reference (single layer; bug-level)
- a15: Reasoning (SUPPLEMENTARY framing + per-element justification + "covering for" reframe + SIBLING positioning + honest cost + what was killed)
- a16: Next Actions + Open Questions
- a17: Source Input

**Grouping:**

| Atoms | Piece |
|---|---|
| a1+a2+a3+a4 | P1 |
| a5+a6+a7+a8+a9+a10+a11+a12+a13 | P2 (with sub-pieces P2.1-P2.5; sub-sub-pieces P2.4a-c) |
| a14 | P3 |
| a15 | P4 |
| a16 | P5 |
| a17 | P6 |

Matches top-down. **HIGH confidence.**

---

## Step 4 — Question Tree (6 top-level pieces)

### P1. How does this finding introduce itself?

**Verification:**
- [ ] Frontmatter: `status: active`; `related: devdocs/inquiries/2026-05-14_15-00__.../finding.md` (sibling); `related: 2026-05-14_14-00__...`; `related: 2026-05-14_13-08__...`; `related: 2026-05-14_12-45__...`; `related: 2026-05-13_12-45__...`; `depends-on-protocol: homegrown/protocols/loop_diagnose.md`. **NOT `corrects:`** (this is SUPPLEMENTARY).
- [ ] Question preserved verbatim from _branch.md
- [ ] Surrounding context names user's question + the surprising diff finding (802-line wholesale rewrite) + SIBLING positioning to 2026-05-14_15-00
- [ ] Finding Summary covers: SUPPLEMENTARY verdict + diff finding + 3 project-coupling additions (A1+A2+A3) + REPAIR scope (E2 selective) + cross-reference to /innovate B3 as primary cause + 8-MVL+ honest cost

**Sub-pieces:** P1.1 frontmatter; P1.2 Question; P1.3 Surrounding context; P1.4 Finding Summary. **NO P1.5 Changes from Prior** (not CORRECTS).

### P2. What is the LOOP_DIAGNOSE Step 4 body in SUPPLEMENTARY framing?

**Verification:** Step 4 sections present; SUPPLEMENTARY framing maintained throughout.

**Sub-pieces:**

- **P2.1** Investigation Summary (renamed from "Correction Chain Summary" to fit SUPPLEMENTARY framing). Includes diff catalogue (12 categories A1-A12) as sub-table.
- **P2.2** Failure Hypotheses (three):
  - **P2.2a** H1 HIGH — spec-embedded project-coupling (A1 Sources + A2 cross-references + A3 Specialization pattern). Contributing factor; mechanism: indirect priming of LLM working memory with project-specific paths.
  - **P2.2b** H2 MEDIUM — spec structural overhead (A4-A12). Possibly contributing; cross-evidence inconclusive; FLAGGED research-frontier with revival trigger.
  - **P2.2c** H3 brief — /innovate B3 is the primary cause (cross-reference to 2026-05-14_15-00). NOT this inquiry's hypothesis; acknowledged for full causal picture.
- **P2.3** Attribution Summary
- **P2.4** Maintenance Candidates (E2 selective revert):
  - **P2.4a** A1 Sources subsection: REMOVE. Concrete spec-edit text.
  - **P2.4b** A2 Neighbor disciplines cross-references: REPAIR. Concrete spec-edit text (remove project-paths; keep abstract cross-discipline awareness for NOT-list).
  - **P2.4c** A3 Specialization pattern + /navigation boundary: REPAIR. Concrete spec-edit text (decouple from /navigation specifically; describe specialization concept abstractly).
- **P2.5** Diagnostic Verdict (ACTIONABLE; SUPPLEMENTARY framing on the chain)

### P3. Self-reference acknowledgment (single layer)

**Verification:**
- [ ] This inquiry uses current /explore for its own exploration
- [ ] The exploration's outputs (and this finding's outputs) use current-/explore-template structure
- [ ] Substantive cognition was preserved (bias-vectors present but didn't crowd out finding-quality)
- [ ] Single-layer (bug-level scope-fidelity); NOT multi-layer (no need for mechanism-level or evidence-calibration layers in a SUPPLEMENTARY framing)

### P4. Reasoning

**Verification:**
- [ ] Why SUPPLEMENTARY (not CORRECTS): the prior chain finding (2026-05-14_15-00) identified /innovate B3 as the PRIMARY cause; this finding identifies an ADDITIONAL contributing factor (/explore A1+A2+A3); both stand without correction
- [ ] Per-element REPAIR justification: why A1 REMOVE (provenance not load-bearing); why A2 REPAIR (cross-discipline awareness useful; project-paths not); why A3 REPAIR (specialization concept useful; coupling-to-/navigation-specifically not); why A4-A12 KEEP (structural additions are genuinely useful)
- [ ] "Covering for" hypothesis reframe: brief; "old wasn't actively protective; was simpler"
- [ ] SIBLING relationship to 2026-05-14_15-00: brief acknowledgment; complementary contributing factors
- [ ] Honest 8-MVL+ cost: real; iteration #9+ elevated threshold; this iteration's unique value is the contributing-factor-not-primary framing
- [ ] What was killed (alternatives considered and rejected)

### P5. Next Actions + Open Questions

**Verification:**
- [ ] MUST: none (diagnostic finding)
- [ ] COULD: apply E2 REPAIR to /explore at canonical + installed
- [ ] DEFERRED: A4-A12 protocol-overhead repair (revival trigger: REPAIR of A1+A2+A3 calibrates poorly OR observable evidence of /explore-induced bias persists in 3 future inquiries)
- [ ] Open Questions: monitoring REPAIR effectiveness; A4-A12 protocol-overhead as research frontier; iteration #9+ threshold

### P6. Source Input

**Verification:** user's correction quote verbatim.

---

### Determination-mechanism piece check

Load-bearing concept: per-element REPAIR text for A1+A2+A3.

Use-time check: at spec-revision time, has the REPAIR been applied to /explore?

**P2.4a, P2.4b, P2.4c** provide concrete spec-edit text. Use-time check is covered. **Check PASSES.**

---

## Step 5 — Interface Map

| Source | Target | Type |
|---|---|---|
| P1 frontmatter | P2 body | declaration-elaboration |
| P2.1 Investigation Summary (with diff) | P2.2 Hypotheses | evidence basis |
| P2.2 H1 (A1+A2+A3) | P2.4 REPAIR | failure → candidate |
| P2.4 (per-element REPAIR) | P2.5 Verdict | candidate → verdict |
| P2.5 Verdict | P3 Self-reference | demonstration target |
| All P2 + P3 | P4 Reasoning | aggregation |
| P4 + P2 | P5 Next Actions | implication |
| P2.2 H2 (A4-A12 flagged) | P5 Research Frontiers | research-frontier flag |
| P1.1 frontmatter `related:` | P4 Reasoning Relationship subsection | cross-reference |

### Hidden coupling check

- **P2.4 REPAIR text ↔ P3 Self-reference.** The REPAIR text must itself pass scope-fidelity at bug-level. Mitigation: P3 verifies P2.4's REPAIR text.
- **P1.3 Surrounding context + P4 Reasoning Relationship subsection.** Both reference SIBLING positioning to 2026-05-14_15-00. Mitigation: P1.3 is brief naming; P4 is justification.

No hidden coupling unmitigated.

---

## Step 6 — Dependency Order

**Phase 1:** P1.1 frontmatter + P1.2 Question + P1.3 Surrounding context + P6 Source Input (foundation; parallel)

**Phase 2 (sequential within P2):** P2.1 Investigation Summary (with diff catalogue) → P2.2 Hypotheses (H1 → H2 → H3 brief) → P2.3 Attribution → P2.4 Maintenance (a → b → c) → P2.5 Verdict

**Phase 3:** P3 Self-reference (depends on P2.4 REPAIR text)

**Phase 4:** P1.4 Finding Summary + P4 Reasoning + P5 Next Actions/Open Questions (depend on body being clear)

No circular dependencies.

---

## Step 7 — Self-Evaluation

| Dimension | Verdict |
|---|---|
| Independence | PASS |
| Completeness | PASS |
| Reassembly | PASS (P2.4a-c REPAIR text provides use-time check) |
| Tractability | PASS |
| Interface clarity | PASS |
| Balance | PASS (P2 largest; content-proportional) |
| Confidence | HIGH |

### Failure mode check

- Premature decomposition: NO
- Wrong boundaries: NO
- Hidden coupling: addressed (2 mitigations)
- Missing pieces: addressed (P3 self-reference; A4-A12 as research frontier in P5)
- Over-decomposition: NO (6 pieces — parsimonious)
- Ignoring dependencies: addressed via 4-phase order
- Imbalanced: NO

**No failure modes fire.**

---

## Project-specific risk dimensions check

| Dimension | Verdict |
|---|---|
| **duplicate-derivable-state** | PASS — H1 (/explore A1+A2+A3) is NEW; H2 (A4-A12 flagged) is NEW; H3 brief is cross-reference not duplication |
| **operation-parsimony** | PASS — 3 per-element REPAIR decisions are ONE logical edit (same /explore mechanism location) |
| **phase-fit** | PASS — REPAIR at /explore spec at the project-coupling elements (the cause-location) |
| **explicit-culture-fit** | PASS — REMOVE/REPAIR over ADD-CHECK; descriptive-phrase naming over committed new pattern names |

---

## Final Summary

**6 top-level pieces; ~13 sub-pieces.** Tight parsimony matching prior chain's 2026-05-14_15-00. SUPPLEMENTARY framing throughout. LOOP_DIAGNOSE Step 4 envelope preserved (with "Investigation Summary" rename from "Correction Chain Summary" to fit SUPPLEMENTARY).

**Decision summary for the user's 4 specific decomposition questions:**

| Question | Decision |
|---|---|
| (a) Diff catalogue placement | SUB-PIECE within P2.1 Investigation Summary |
| (b) Per-element REPAIR decisions | ONE piece (P2.4) with THREE sub-pieces (P2.4a/b/c) |
| (c) "Covering for" hypothesis reframing | LIVES IN P4 Reasoning (single paragraph; not own piece) |
| (d) SIBLING positioning to 2026-05-14_15-00 | DISTRIBUTED across frontmatter + P1.3 Surrounding context + P4 Reasoning Relationship subsection (not own piece) |

**Output: PROCEED to Innovation.**
