# Decomposition: Forward Design of /explore §3.1 — Meaning-Layer

## User Input

See `_branch.md`. Sensemaking SV6 committed 10 decisions (C1-C10).

---

## Step 1 — Perceive Coupling Topology

### Elements

The 10 committed decisions cluster:

| Element | Description |
|---|---|
| C1 | AFTER text = current + form-(i)/(ii) inside Possibility mode bullet ONLY |
| C2 | "The output takes one of two forms:" preamble KEPT |
| C3 | Form-(i) definition |
| C4 | Form-(ii) definition + trigger |
| C5 | Form-(ii) trigger interpreted DESCRIPTIVE |
| C6 | "Completeness before novelty" rule UNCHANGED |
| C7 | §4.1 reference NOT sharpened |
| C8 | All other content verbatim unchanged |
| C9 | Auto-memory compliance preserved |
| C10 | No cascading edits to other sections |

### Clusters

- **Cluster A — Preserved content** (C6 + C8 + C10): the existing §3.1 elements that remain verbatim + no cascading edits.
- **Cluster B — Possibility mode bullet extension** (C1 + C2 + C3 + C4): the only changes; tightly coupled (preamble + form-(i) + form-(ii) cohere as one body extension).
- **Cluster C — Interpretation commitment** (C5): the trigger phrase's interpretive frame.
- **Cluster D — Compliance/audit** (C7 + C9): §4.1 reference + auto-memory + boundary respect.

### Coupling Map

```
Cluster A (preserved)  ←→  Cluster B (extension)  ←→  Cluster C (interpretation)
                                   │
                                   ▼
                          Cluster D (audit)
```

Tight coupling within Cluster B; moderate coupling B↔C (interpretation governs trigger wording); weak coupling A↔B (preserved content bracket the extension); audit D depends on A+B+C outputs.

---

## Step 2 — Detect Boundaries Top-Down

Natural cut points:

- **Cut 1:** Cluster A (preserved) vs Cluster B (extension). Clean boundary; different operations (preserve vs add).
- **Cut 2:** Cluster B (text generation) vs Cluster C (interpretation commitment). Clean boundary.
- **Cut 3:** Cluster A+B+C vs Cluster D (verification meta). Clean boundary.

### Initial Boundary Set (5 pieces)

- **Q1** — Preserved content (C6 + C8 + C10).
- **Q2** — Possibility mode bullet extension (C1 + C2 + C3 + C4).
- **Q3** — Form-(ii) trigger descriptive-interpretation commitment (C5).
- **Q4** — Compliance audit (C7 + C9 — §4.1 reference unchanged + auto-memory compliance verification).
- **Q5** — §4.4 boundary + cognitive-investment-preservation chain + self-vigilance verification meta.

---

## Step 3 — Validate Boundaries Bottom-Up

### Atoms

| Atom | Content |
|---|---|
| α1 | Section header preserved |
| α2 | Mode-determination preserved |
| α3 | Artifact mode bullet preserved |
| α4 | "Completeness before novelty" rule single-prescription preserved |
| α5 | "/innovate" callout preserved |
| α6 | "The output takes one of two forms:" preamble (new) |
| α7 | Form-(i) sub-bullet (new) |
| α8 | Form-(ii) sub-bullet with trigger (new) |
| α9 | Form-(ii) trigger interpreted DESCRIPTIVE |
| α10 | §4.1 reference NOT sharpened |
| α11 | Auto-memory compliance verification |
| α12 | No cascading edits |
| α13 | §4.4 boundary verification |
| α14 | Cognitive-investment-preservation chain verification |
| α15 | Self-vigilance MN8 (forward signals applied) verification |

### Bottom-up grouping

- α1+α2+α3+α4+α5 → Q1 (preserved content; 5 atoms)
- α6+α7+α8 → Q2 (extension; 3 atoms)
- α9 → Q3 (interpretation)
- α10+α11+α12 → Q4 (compliance audit)
- α13+α14+α15 → Q5 (verification meta)

Top-down + bottom-up agree. HIGH confidence.

### Merge/Split tests

- **Q1 + Q4 merge?** Both involve preservation (preserved content + preserved cross-ref + preserved other sections). But Q1 is positive-preservation (existing text stays); Q4 is negative-preservation (no sharpening; no cascading; auto-memory respected). Different operations. **KEEP SEPARATE.**

- **Q3 + Q5 merge?** Both are meta-commitments. But Q3 is interpretation-of-text (load-bearing for §4.4 PASS); Q5 is multi-axis verification (boundary + chain + bias). Different scopes. **KEEP SEPARATE.**

- **Q2 split into preamble + form-(i) + form-(ii)?** Three atoms cohere as one body extension. Splitting creates 3 trivial pieces. **KEEP AS ONE.**

---

## Step 4 — Express as Question Tree

### Q-Tree (5 pieces)

**Q1 — What §3.1 content is preserved verbatim?**

Verification criteria:
- [ ] Section header `### 3.1 Two operational modes` preserved.
- [ ] Mode-determination sentence preserved.
- [ ] Artifact mode bullet preserved verbatim.
- [ ] "Completeness before novelty" rule preserved as single prescription (no per-dimension wrapping).
- [ ] "Key difference from /innovate" callout preserved verbatim.

Property (v): NOT firing (preservation operation).

**Q2 — What is the Possibility mode bullet extension?**

Verification criteria:
- [ ] Possibility mode bullet's existing opening preserved (territory definition + scan/probe semantics).
- [ ] " The output takes one of two forms:" preamble appended to bullet body.
- [ ] Form-(i) sub-bullet nested: `**(i) Candidates-only** — a set of candidates without per-candidate comparative scoring on shared criteria.`
- [ ] Form-(ii) sub-bullet nested: `**(ii) Comparison structure** — candidates × axes (pros/cons table; multi-attribute scoring grid; ranked list with stated criteria), produced when the inquiry's deliverable requires per-candidate assessment on shared criteria.`
- [ ] Nesting structure: 2-space indent + dash markers for sub-bullets under Possibility mode bullet.
- [ ] "candidates" vocabulary canonical throughout (no "options" / "per-option" drift).

Property (v): NOT firing (labeling-compatible content at /explore per §4.4 + §1.5; not an intervention shape commitment for downstream-discipline behavior).

**Q3 — How is the form-(ii) trigger phrase interpreted?**

Verification criteria:
- [ ] Trigger interpretation explicitly committed as DESCRIPTIVE (shape-characterization of form-(ii) outputs).
- [ ] NOT prescriptive (runner-judgment of when to produce form-(ii)).
- [ ] Aligns with /explore §1.1 "purposive open-mode surfacing" identity.
- [ ] §4.4 heuristic PASSES under descriptive interpretation (naive scanners can characterize a form-(ii) output by its assessment-requiring purpose).

Property (v): NOT firing (interpretation meta-commitment).

**Q4 — Compliance audit (cross-reference + auto-memory + no-cascading-edits)?**

Verification criteria:
- [ ] §4.1 reference stays as "(see §4.1)" — not sharpened to "§4.1 #6" (out of scope per Sensemaking A2).
- [ ] AFTER text contains zero outbound paths (`docs/...`, `enes/...`, `cognitive_harness/...`, `devdocs/...`).
- [ ] AFTER text uses concept-form prose throughout.
- [ ] No edits proposed to §3.2 / §3.3 / §3.4 / §3.5 / §4.1 / §4.2 / §5.
- [ ] /sense-making + /td-critique receiving disciplines confirmed for the (downstream) re-located content; not addressed in this inquiry's deliverable.

Property (v): NOT firing (compliance audit meta).

**Q5 — Verification meta: §4.4 boundary + cognitive-investment-preservation chain + self-vigilance (MN8 forward signals)?**

Verification criteria:
- [ ] §4.4 boundary verification: all 3 added elements (preamble + form-(i) + form-(ii)) pass naive-scanner-agreement test.
- [ ] Cognitive-investment-preservation chain operational: form-(i)/(ii) preserved at /explore; axis-minimum content moves to /sense-making + /td-critique downstream (not lost; not at /explore).
- [ ] Self-vigilance per MN8 (forward signals):
  - Signal #1 (gap framed as missing X): mitigated — 21-07-00 endorses adding labeling-compatible content; not arbitrary.
  - Signal #2 (proposed fix begins with add/append/extend): mitigated — addition is BOUNDED to labeling-compatible content per §4.4; no anchor-extraction.
  - Signal #3 (Inversion considers same-category only): at Innovation downstream, CONTRARIAN-RETHINK considers "should form recognition NOT be at /explore even?"
  - Signal #4 (existing spec design as HOST): mitigated — explicit identification of existing content (Q1) + bounded change (Q2).
- [ ] 02-15 R10 retrospective test PASSES with forward-designed §3.1.

Property (v): NOT firing (verification meta).

---

## Step 5 — Map Interfaces

| # | Source | Target | What flows | Direction |
|---|---|---|---|---|
| I1 | Q1 (preserved) | Q2 (extension) | Spatial structure (preserved content brackets extension) | One-way |
| I2 | Q3 (interpretation) | Q2 (form-(ii) trigger wording) | Interpretation governs how the trigger reads | One-way |
| I3 | Q1 + Q2 final text | Q4 (compliance audit) | Final wording for §4.1 reference + auto-memory + no-cascading verification | One-way |
| I4 | Q1 + Q2 + Q3 + Q4 outputs | Q5 (verification meta) | Full analysis for §4.4 + chain + MN8 verification | One-way |

### Assumptions-not-data check

- I1: Q2's extension assumes Q1's preserved content positions are stable (Possibility mode bullet is bullet #2; rule is below mode bullets; callout is after rule). Verified.
- I2: Q2's form-(ii) text assumes Q3's descriptive interpretation. Both committed in tandem.
- I3+I4: downstream verification operates on final text. Standard.

No hidden coupling.

---

## Step 6 — Order by Dependency

**Phase A (parallel):** Q1 + Q3 (preserved content identification + interpretation commitment; independent).

**Phase B:** Q2 (extension wording; depends on Q3 for trigger interpretation).

**Phase C:** Q4 (compliance audit; depends on Q1+Q2 final text).

**Phase D:** Q5 (verification meta; depends on Q1+Q2+Q3+Q4 outputs).

---

## Step 7 — Self-Evaluate

### Minimum 3 Dimensions

**1. Independence.** Each piece workable with defined interfaces? YES. PASS.

**2. Completeness.** Pieces cover the whole? 10 committed decisions C1-C10 + 5 verification atoms = 15 elements mapped to 5 pieces. All covered. PASS.

**3. Reassembly.** Pieces + interfaces = whole? Q1 (preserved) + Q2 (extension) + Q3 (interpretation governs Q2's trigger) + Q4 (audit) + Q5 (verification) = complete MEANING-layer-operationalization finding. PASS.

### Full 7 Dimensions

**4. Tractability.** Each piece single-pass? Q1 = 5 verification atoms (small); Q2 = 6 criteria (moderate); Q3 = 4 criteria (small); Q4 = 5 criteria (small); Q5 = 4 criteria (small). PASS.

**5. Interface clarity.** All flows explicit? 4 interfaces mapped + assumptions-not-data check. PASS.

**6. Balance.** Proportional complexity? All pieces small-moderate. PASS.

**7. Confidence.** Top-down + bottom-up agree? YES. PASS.

### Failure modes (7 checks)

1. Premature Decomposition: NO (Sensemaking completed).
2. Wrong Boundaries: NO (validated).
3. Hidden Coupling: NO (assumptions-not-data check).
4. Missing Pieces: NO (15 atoms covered).
5. Over-Decomposition: NO (5 is appropriate).
6. Ignoring Dependencies: NO (explicit order).
7. Imbalanced Decomposition: NO (proportional).

**All 7 failure modes: AVOIDED.**

---

## HCRs

| # | HCR | Rationale |
|---|---|---|
| HCR1 | 5-piece Q-tree | 10 committed decisions + verification meta map to 5 coherent pieces |
| HCR2 | Q1 (preservation) + Q4 (negative-preservation audit) separate | Different operations (positive vs negative preservation) |
| HCR3 | Q2 as single piece (preamble + form-(i) + form-(ii)) | Three atoms cohere as one body extension |
| HCR4 | Q3 (interpretation) separate from Q2 | Interpretation is meta-commitment; Q2 is text-generation |
| HCR5 | Q5 (verification meta) covers 3 distinct verifications | §4.4 + chain + MN8 — all verification at the final-text level |
| HCR6 | Property (v) NOT firing at all 5 pieces | Documentation/meta-content operational follow-up; no intervention-shape commitments for downstream-discipline behavior at piece level |
| HCR7 | 4 interfaces; one-way; no circular | Clean dependency graph |
| HCR8 | Phase A → B → C → D dependency order | Linear+branching |

8 HCRs.

---

## Verdict

**PROCEED to Innovation with 5-piece Q-tree + 8 HCRs.**

Innovation should:
1. Generate exact AFTER text per Q1 + Q2 (with Q3 interpretation governing Q2's trigger).
2. Verify per-piece compliance via Q4.
3. Apply Q5 verification meta on the final assembled text.
4. Property (v) check at each piece (expect NOT firing).
