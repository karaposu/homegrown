# Decomposition — Loop Diagnose: Existing-Artifact-as-Canonical-Reference

## Input recap

Work surface: produce a diagnostic finding following LOOP_DIAGNOSE Step 4 format with verdict ACTIONABLE, 3 failure hypotheses, maintenance candidate L1 primary + L4 deferred, Phantom Canon name, pattern-family positioning, self-reference acknowledgment.

---

## Step 1 — Coupling Topology

### Elements

- **E1.** Frontmatter (with `corrects:` for the prior weak inquiry — wait, NOT corrects: this is a LOOP_DIAGNOSE finding which DIAGNOSES; use `diagnoses:` per protocol)
- **E2.** Question section (preserved from `_branch.md`)
- **E3.** Surrounding context (why this LOOP_DIAGNOSE)
- **E4.** Finding Summary (bullets covering verdict + hypotheses + maintenance + pattern + self-reference)
- **E5.** Correction Chain Summary (LOOP_DIAGNOSE Step 4 #1)
- **E6.** Failure Hypothesis H1 (HIGH — framing-time)
- **E7.** Failure Hypothesis H2 (MEDIUM — cascade)
- **E8.** Failure Hypothesis H3 (MEDIUM — pre-bias)
- **E9.** Failure Attribution Summary table
- **E10.** Maintenance Candidate L1 (primary)
- **E11.** Maintenance Candidate L4 (deferred)
- **E12.** Diagnostic Verdict block
- **E13.** Pattern-family positioning (third in meta-conditions family + calibration)
- **E14.** Self-reference acknowledgment
- **E15.** Reasoning (why this verdict; killed alternatives)
- **E16.** Next Actions (COULD only) + Open Questions
- **E17.** Source Input

### Coupling

- **E5 (Correction Chain Summary) ↔ E6-E8 (Failure Hypotheses):** STRONG. The chain frames the hypotheses; the hypotheses elaborate the chain's failure modes.
- **E6-E8 (3 hypotheses) ↔ each other:** MODERATE. They share the LOOP_DIAGNOSE Step 4 structured format but H1 is primary; H2 and H3 are supporting.
- **E6-E8 ↔ E9 (Attribution Summary):** STRONG. The table summarizes the 3 hypotheses.
- **E9 ↔ E10-E11 (Maintenance Candidates):** STRONG. Maintenance candidates address the attributed failures.
- **E10-E11 ↔ E12 (Verdict):** STRONG. Verdict cites maintenance candidates.
- **E12 ↔ E13 (Pattern-family):** MODERATE. Family positioning is broader scope than the verdict.
- **E14 (Self-reference) ↔ E10 (L1 maintenance):** STRONG. The self-reference acknowledgment DEMONSTRATES the value of the proposed L1 pre-step.

### Clusters

- **Cluster A — Identity + lead-in:** E1-E4
- **Cluster B — LOOP_DIAGNOSE Step 4 mandatory body:** E5, E6, E7, E8, E9, E10, E11, E12
- **Cluster C — Project-level contributions:** E13 (pattern-family), E14 (self-reference)
- **Cluster D — Closing:** E15, E16, E17

---

## Step 2 — Detect Boundaries (Top-Down)

### Specific decomposition questions resolved

**(a) LOOP_DIAGNOSE Step 4 sections as single pieces or sub-pieces?**
Each Step 4 section is a SUB-PIECE of one larger "Diagnostic Body" piece (P2). The 3 failure hypotheses are sub-sub-pieces of the Failure Hypotheses block. This keeps the protocol's structural integrity (Step 4 sections appear in order under one body) while allowing each section to have its own scope.

**(b) Pattern-family positioning?**
A SEPARATE top-level piece (P3). It's broader than the immediate diagnostic — it positions this finding within an emerging project pattern-family. Could be a sub-piece of the Verdict, but its scope exceeds the verdict's local case. Separate is cleaner.

**(c) Self-reference acknowledgment?**
A SEPARATE top-level piece (P4). It demonstrates the value of the proposed maintenance candidate by applying the lesson to this inquiry itself. Separating makes it visible; embedding would bury it.

**(d) LOOP_DIAGNOSE format vs standard finding template?**
LOOP_DIAGNOSE Step 4 sections are MANDATORY and structural priority. Standard sections (Question, Surrounding context, Reasoning, Next Actions, Open Questions, Source Input) WRAP the mandatory body. The result is hybrid: standard envelope + LOOP_DIAGNOSE body.

### Pieces (top-down)

- **P1.** Identity + lead-in (frontmatter + Question + Surrounding context + Finding Summary)
- **P2.** LOOP_DIAGNOSE Step 4 mandatory body (Correction Chain Summary + 3 Failure Hypotheses + Attribution Summary table + Maintenance Candidates + Diagnostic Verdict)
- **P3.** Pattern-family positioning (third in meta-conditions-on-verification family + calibration note)
- **P4.** Self-reference acknowledgment (demonstrates L1's value)
- **P5.** Reasoning (why this verdict; killed alternatives; cascading rationale)
- **P6.** Next Actions (COULD-only) + Open Questions
- **P7.** Source Input

This gives 7 top-level pieces. P2 is the largest (containing 5 sub-pieces matching LOOP_DIAGNOSE Step 4 sections, with sub-sub-pieces for H1/H2/H3 and L1/L4).

---

## Step 3 — Validate Boundaries (Bottom-Up)

### Atoms

- a1: frontmatter (with `diagnoses:` and `compares-with:` declarations per LOOP_DIAGNOSE)
- a2: Question section
- a3: Surrounding context
- a4: Finding Summary (bullets)
- a5: Correction Chain Summary (~1 paragraph)
- a6: H1 hypothesis (full Step 4 structure)
- a7: H2 hypothesis
- a8: H3 hypothesis
- a9: Attribution table
- a10: L1 maintenance candidate (full Step 4 structure)
- a11: L4 maintenance candidate (deferred form)
- a12: Diagnostic Verdict block
- a13: Pattern-family block
- a14: Self-reference block
- a15: Reasoning
- a16: Next Actions + Open Questions
- a17: Source Input

### Grouping

| Atoms | Piece |
|---|---|
| a1+a2+a3+a4 | P1 |
| a5+a6+a7+a8+a9+a10+a11+a12 | P2 (sub-pieces P2.1-P2.5) |
| a13 | P3 |
| a14 | P4 |
| a15 | P5 |
| a16 | P6 |
| a17 | P7 |

Matches top-down. **HIGH confidence.**

---

## Step 4 — Question Tree

### P1. How does this finding introduce itself?

**Verification:**
- [ ] Frontmatter has `diagnoses:` for prior path; `compares-with:` for corrected path; `related:` for upstream priors
- [ ] Question preserved from `_branch.md`
- [ ] Surrounding context explains LOOP_DIAGNOSE invocation
- [ ] Finding Summary covers verdict + hypotheses + maintenance + family + self-reference

**Sub-pieces:** P1.1 frontmatter; P1.2 Question; P1.3 Surrounding context; P1.4 Finding Summary

### P2. What is the diagnostic body (LOOP_DIAGNOSE Step 4 format)?

**Verification:**
- [ ] All 5 Step 4 sections present in order: Correction Chain Summary → Failure Hypotheses → Attribution Summary → Maintenance Candidates → Diagnostic Verdict
- [ ] Each hypothesis follows the Step 4 hypothesis structure (Affected stage + Shortcoming + Evidence + Confidence + Why-not-stronger + Maintenance candidate + Evaluation gate)
- [ ] Each maintenance candidate states (what changes + which file + risk class + benefit + eval gate + branch-experiment Y/N)
- [ ] Diagnostic Verdict has all required sub-elements (Overall + best-supported diagnosis + strongest maintenance + main uncertainty + recommended next step)

**Sub-pieces:**
- **P2.1** Correction Chain Summary
- **P2.2** Failure Hypotheses (with sub-sub P2.2a H1 HIGH, P2.2b H2 MEDIUM, P2.2c H3 MEDIUM)
- **P2.3** Failure Attribution Summary table
- **P2.4** Maintenance Candidates (with sub-sub P2.4a L1 primary, P2.4b L4 deferred)
- **P2.5** Diagnostic Verdict

### P3. How does this finding position itself within the project's emerging pattern-family?

**Verification:**
- [ ] Names "meta-conditions on verification" family
- [ ] Lists the three patterns: lesson-introduces-its-own-trap (2026-05-13_12-45), framing-load-bearing (2026-05-14_00-26), Phantom Canon (this finding)
- [ ] Explicit calibration note (emerging family; pattern-confirmation requires more cases; not project axiom)

**Sub-pieces:** atomic block.

### P4. How does this finding demonstrate the proposed maintenance candidate by self-application?

**Verification:**
- [ ] Acknowledges that this LOOP_DIAGNOSE inquiry is itself an MVL+ run
- [ ] Confirms it does NOT exhibit Phantom Canon on the prior inquiry (treats prior as evidence-being-diagnosed, not canon)
- [ ] Honestly notes that /explore spec was read from installed runtime version; canonical version at homegrown/ would be the strict reference
- [ ] Demonstrates that the proposed L1 pre-step's value extends to even careful diagnostic inquiries

**Sub-pieces:** atomic block.

### P5. Why this verdict?

**Verification:**
- [ ] Explains why H1 is primary vs H2/H3 supporting
- [ ] Explains why L1 single-layer over hybrid L1+L4
- [ ] Names killed alternatives
- [ ] Reconciles ambiguities (cascade-causal-vs-contributing; Phantom-Canon-name-choice; pattern-family-scope)

### P6. Next Actions + Open Questions

**Verification:**
- [ ] COULD: apply L1 to /MVL+ skill spec
- [ ] DEFERRED: L4 with revival trigger
- [ ] Open Questions: monitoring + research frontiers

### P7. Source Input

**Verification:** raw user input verbatim.

---

### Determination-mechanism piece check (Step 7 refinement)

Load-bearing concept: "Phantom Canon" failure mode + canon-status determination.

Use-time check: "is THIS artifact canon?" — runtime determination at MVL+ pre-step.

**P2.4a (L1 maintenance candidate) addresses this** by specifying the pre-step's prompt design (selective triggering on artifact references; per-artifact prompt for canon-status; unknown-acceptable). Future MVL+ runs can apply this check.

**Check PASSES.**

---

## Step 5 — Interface Map

| Source | Target | Type |
|---|---|---|
| P1 frontmatter | P2 LOOP_DIAGNOSE body | declaration-elaboration |
| P2.1 Correction Chain | P2.2 Failure Hypotheses | evidence basis |
| P2.2 Hypotheses | P2.3 Attribution table | summary aggregation |
| P2.3 Attribution | P2.4 Maintenance Candidates | failure → candidate mapping |
| P2.4 Maintenance | P2.5 Diagnostic Verdict | verdict cites candidate |
| P2.5 Verdict | P3 Pattern-family | broader-scope context |
| P2.4 L1 maintenance | P4 Self-reference | demonstration |
| All P2 + P3 + P4 | P5 Reasoning | aggregation |
| P2.4 + P3 | P6 Next Actions | implication |

### Hidden coupling

- **P2.2 H1 + P2.4 L1:** H1's maintenance-candidate field IS L1. They must reference each other consistently. **Mitigation:** explicit cross-reference.
- **P3 + P4:** pattern-family naming includes the calibration note; self-reference acknowledges the lesson being introduced. Both are about meta-conditions. **Mitigation:** P4 references P3.

No hidden coupling unmitigated.

---

## Step 6 — Dependency Order

### Phase 1 — Foundation
- P1.1 frontmatter, P1.2 Question, P1.3 Surrounding context, P7 Source Input

### Phase 2 — Diagnostic body (sequential within P2)
- P2.1 Correction Chain → P2.2 Failure Hypotheses (H1 → H2 → H3) → P2.3 Attribution table → P2.4 Maintenance (L1 → L4) → P2.5 Verdict

### Phase 3 — Project-level contributions
- P3 Pattern-family
- P4 Self-reference (depends on P2.4 L1 being clear)

### Phase 4 — Lead-in framing + Reasoning + Closing
- P1.4 Finding Summary
- P5 Reasoning
- P6 Next Actions + Open Questions

No circular dependencies.

---

## Step 7 — Self-Evaluation

| Dimension | Verdict | Notes |
|---|---|---|
| Independence | PASS | Pieces independently draftable; LOOP_DIAGNOSE Step 4 sub-pieces structured |
| Completeness | PASS | All LOOP_DIAGNOSE Step 4 mandatory sections covered + standard envelope |
| Reassembly | PASS | Determination-mechanism check passes (P2.4a L1 candidate addresses use-time check) |
| Tractability | PASS | Estimated ~60-80 min |
| Interface clarity | PASS | 9 interfaces; 2 hidden-coupling mitigated |
| Balance | PASS | P2 is largest (5 sub-pieces) but content-proportional to its Step 4 structural mandate |
| Confidence | HIGH | LOOP_DIAGNOSE format is structural reference; minimal interpretive ambiguity |

### Failure mode check

- Premature decomposition: NO (sensemaking + LOOP_DIAGNOSE protocol committed first)
- Wrong boundaries: NO
- Hidden coupling: addressed
- Missing pieces: addressed (P2.4a covers use-time check)
- Over-decomposition: NO (7 pieces appropriate; 5 mandatory sub-pieces in P2)
- Ignoring dependencies: addressed
- Imbalanced: NO

**No failure modes fire.**

---

## Final Deliverable Summary

7 top-level pieces with 13 sub-pieces. P2 (LOOP_DIAGNOSE Step 4 body) has 5 sub-pieces matching mandatory sections; P2.2 has 3 sub-sub-pieces (H1/H2/H3); P2.4 has 2 sub-sub-pieces (L1/L4). Structure preserves LOOP_DIAGNOSE protocol's mandatory format inside standard finding envelope.

**Output: PROCEED to Innovation.**
