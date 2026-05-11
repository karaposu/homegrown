# Decomposition: Finding Internal-Reference Ambiguity Failure

## Step 1 — Perceive Coupling Topology

Elements of the diagnostic + fix territory:

1. Diagnosis (cascade): H1 + H2 are the two HIGH-confidence root causes; H3, H4, H5 contribute.
2. Fix-1 (regex scan + checklist) + Fix-3 (example expansion) are the adopted patches.
3. Placement: new sub-section in conclude.md Step 2 + Quality-test reminder + example-list expansion.
4. Verification: the fix must catch the 10+ observed failure instances.
5. Verdict synthesizes diagnosis + fix.

### Coupling pairs

- Fix-1 ↔ Fix-3: MODERATE. Examples teach pattern recognition; mechanical check enforces. Compatible.
- Fix-1 ↔ Placement: STRONG. Where the check sits determines when it runs.
- Fix-3 ↔ Placement: STRONG. Examples sit in the existing principle paragraph.
- Verification ↔ Fix-1, Fix-3: STRONG. The fix must be tested against observed failures.
- Diagnosis ↔ Fix: STRONG. The fix targets the diagnosis's root causes.
- Verdict ↔ everything: STRONG (synthesis).

### Clusters

- D (diagnosis): cascade + 5 hypotheses + evidence.
- F (fix): Fix-1 + Fix-3 + Placement.
- V (verification + verdict).

## Step 2 — Detect Boundaries

5 pieces:

- **D-1: Diagnosis cascade** — the 4-step cascade (discipline→inherit→principle-not-check→test-subjective→fail) plus the 5 hypotheses.
- **F-1: Fix-1 (regex scan + checklist)** — pattern list, checklist application, remediation guidance.
- **F-2: Fix-3 (example expansion)** — 3-5 concrete failure-shape examples to add to the existing principle.
- **F-3: Placement + Quality-test reminder** — where Fix-1 + Fix-3 sit in conclude.md.
- **V: Verification + Verdict** — verify the fix catches observed failures; produce verdict.

## Step 3 — Validate Boundaries (Bottom-Up)

Atoms:

1. The cascade (4 steps) → D-1.
2. H1 (principle not check) → D-1.
3. H2 (upstream cascade) → D-1.
4. H3, H4, H5 → D-1.
5. Pattern list (3 regex patterns) → F-1.
6. Checklist (verify parenthetical context on first use) → F-1.
7. Remediation guidance (rewrite the first appearance) → F-1.
8. 3-5 concrete failure-shape examples → F-2.
9. New sub-section placement (Step 2, after principle, before template) → F-3.
10. Quality-test reminder (one line) → F-3.
11. Verification against 10+ observed failures → V.
12. Verdict (ACTIONABLE) → V.

All atoms map to the 5 pieces cleanly. **HIGH confidence** on the structure.

## Step 4 — Question Tree

### Piece D-1 — Diagnosis Cascade

**Question:** What is the failure cascade and which hypotheses are the load-bearing root causes?

**Verification:**
- [ ] Cascade explicitly stated (4 steps).
- [ ] H1 (principle-not-check) cited at HIGH confidence.
- [ ] H2 (upstream cascade) cited at HIGH confidence.
- [ ] H3, H4, H5 cited at lower confidence as contributing factors.
- [ ] Evidence per hypothesis cited (lines/instances in finding.md, conclude.md, docarchive/).

### Piece F-1 — Fix-1 (Regex Scan + Checklist)

**Question:** What is the mechanical check sub-section's content?

**Verification:**
- [ ] 3 regex patterns specified (definite-article references, bare filenames, title-case noun phrases).
- [ ] First-use checklist specified.
- [ ] Remediation guidance specified (what to do when a match fails).
- [ ] Sub-section title chosen (e.g., "Non-ambiguity check (mechanical)").

### Piece F-2 — Fix-3 (Example Expansion)

**Question:** Which 3-5 concrete failure-shape examples should be added?

**Verification:**
- [ ] Examples drawn from observed failures in finding.md.
- [ ] Each example shows ❌ wrong → ✅ right with parenthetical context.
- [ ] Example shapes diverse: section reference, named concept, bare filename.

### Piece F-3 — Placement + Quality-Test Reminder

**Question:** Where do F-1 and F-2 sit in conclude.md, and what reminder is added to the Quality test?

**Verification:**
- [ ] F-1 placement: Step 2, after principle, before template.
- [ ] F-2 placement: in the existing principle paragraph's example list.
- [ ] Quality-test reminder wording specified.

### Piece V — Verification + Verdict

**Question:** Does the fix catch the 10+ observed failures, and what is the diagnostic verdict?

**Verification:**
- [ ] Test the fix against each observed failure instance ("the current Probe section", etc.).
- [ ] Verify each instance triggers a regex match.
- [ ] Verify the checklist catches the missing parenthetical.
- [ ] Verdict: ACTIONABLE / PARTIAL / INCONCLUSIVE.

## Step 5 — Interfaces

| Source | Target | What flows |
|---|---|---|
| D-1 | F-1, F-2, F-3 | Hypotheses identify what the fix must address |
| F-1 | F-3 | Fix-1's content is placed per F-3 |
| F-2 | F-3 | Fix-3's examples are placed per F-3 |
| F-1, F-2, F-3 | V | The fix's content is tested against observed failures |
| V | (none) | Verdict synthesizes |

All one-way. No circularity.

## Step 6 — Dependency Order

```
Layer 0: D-1 (diagnosis)
Layer 1: F-1, F-2 (parallel; both depend on D-1)
Layer 2: F-3 (placement; depends on F-1 + F-2)
Layer 3: V (verification; depends on all)
```

## Step 7 — Self-Evaluate

| Dimension | Score |
|---|---|
| Independence | PASS |
| Completeness | PASS |
| Reassembly | PASS |
| Tractability | PASS |
| Interface clarity | PASS |
| Balance | PASS |
| Confidence | PASS (HIGH top-down + bottom-up agreement) |

All 7 PASS. Ready for Innovation.
