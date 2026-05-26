# Decomposition: Structural Redesign of explore.md §3.1 — Design-Defect Repair via Per-Dimension Completeness

## User Input

See `_branch.md` (STRUCTURAL inquiry; Layer Commitment STRUCTURAL; Synthesis Trigger fires with 6 priors).

Sensemaking SV6 committed 15 structural decisions (C1-C15) + proposed 8-piece Q-tree skeleton. Decomposition applies 7-step process to validate / refine the Q-tree, map coupling topology, define interfaces, order by dependency, self-evaluate.

---

## Step 1 — Perceive Coupling Topology

### Elements in the whole

The redesigned §3.1 text is the whole. Its elements are the 15 committed structural decisions from Sensemaking + 3 verification operations:

| Element | Type | Sensemaking source |
|---|---|---|
| C1 — Section header preserved | Preservation | A8 + P2 |
| C2 — Modes-determined-by-territory preserved | Preservation | (anchor FP1) |
| C3 — Artifact mode bullet preserved | Preservation | (anchor SP1) |
| C4 — Possibility mode bullet extension (form preamble + nested sub-bullets) | Extension | A8 verdict + SP2 |
| C5 — Form (i) name "Candidates-only" | Naming | (anchor MN3) |
| C6 — Form (ii) name "Comparison structure" | Naming | A4 verdict |
| C7 — Form (ii) trigger ("deliverable requires per-candidate assessment on shared criteria") | Trigger spec | A1 verdict |
| C8 — Candidates canonical vocabulary | Cross-cutting | A3 verdict |
| C9 — "Completeness before novelty" rule name preserved | Preservation | LBT2 + A8 |
| C10 — "Apply completeness per dimension of the output:" preamble | Extension | A2 verdict |
| C11 — Candidates dimension sub-bullet | Extension | SP3 |
| C12 — Comparison-axes dimension sub-bullet (3 minima + artifact-observable + cross-ref) | Extension | A5+A6 verdicts |
| C13 — "Key difference from /innovate" callout preserved | Preservation | A7 verdict |
| C14 — §4.1 #6 + #2 no text updates needed | Negative commitment | Exploration R12+R13 |
| C15 — Form sub-bullets nested (not separate sub-section) | Placement | A8 verdict |
| V1 — Final-text cross-ref verification | Verification meta | C14 audit |
| V2 — Final-text auto-memory compliance audit | Verification meta | C-AUTO-MEMORY |
| V3 — Integration verification (T1-T5) | Verification meta | Exploration R9 |
| V4 — Self-vigilance verification (4 signals) | Verification meta | 21-04-00 MN8 |

### Coupling perception — propagation pairs

For each pair: "If I change A, does B need to change?"

**Strong coupling clusters:**

- **C4 + C5 + C6 + C7 + C15** — all touch the SAME structural element (Possibility mode bullet body). C15's nesting decision determines where C5+C6 sub-bullets sit; C4's extension preamble + C5+C6+C7 form definitions form one operational unit. **Strong coupling (STRONG).**

- **C9 + C10 + C11 + C12** — all touch the SAME structural element ("Completeness before novelty" rule body). C9 preserves the name; C10 extends with per-dimension preamble; C11+C12 are the dimension sub-bullets. Changing C10's preamble affects C11+C12 placement; C9's name preservation gates the rule's identity. **Strong coupling (STRONG).**

**Cross-cutting:**

- **C8** (vocabulary canonicalization) — touches C4+C5+C6+C7 (form definitions use "candidates") + C11+C12 (dimension sub-bullets reference "per-candidate cells" / "candidate rows"). Changing C8 (e.g., switching to "options") would require updating every other piece's wording. **Cross-cutting (CROSS).**

- **V2** (auto-memory compliance audit) — applies to all wording in C4+C5+C6+C7+C10+C11+C12. Audit operation gates final wording. **Cross-cutting (CROSS).**

**Moderate coupling:**

- **C4-C7 cluster ↔ C9-C12 cluster** — the per-dimension rule (C10) REFERENCES the forms (C5+C6) explicitly: "Candidates dimension (forms i + ii)" + "Comparison-axes dimension (form ii only, when present)." The references couple the rule body to the form labels. **Moderate coupling (MOD).**

**Weak coupling:**

- **C1 + C2 + C3 + C13** — preserved structural elements. They bracket the modified content but don't depend on its details. Internal coupling: LOOSE (all preserved unchanged; they share section context only). External coupling to other clusters: WEAK. **Weak coupling (WEAK).**

- **C14 (negative commitment)** — verifies §4.1 doesn't need updates. Loose coupling to wording-generation pieces; cross-references must be ACCURATE but their TEXT isn't changed. **Weak coupling (WEAK).**

**Verification meta:**

- **V1+V2+V3+V4** — consume the final wording. Source pieces (Q2-Q5) flow INTO verification pieces. No flow back. **One-way (DOWNSTREAM).**

### Coupling Map (coarse)

```
┌─────────────────────────────────────────────────────────────────────┐
│                       Redesigned §3.1 (whole)                        │
│                                                                      │
│  ┌──────────────┐     ┌──────────────┐     ┌────────────────────┐  │
│  │  CLUSTER A   │     │  CLUSTER B   │     │  CLUSTER C         │  │
│  │  PRESERVED   │ ←→  │  Possibility │ ←→  │  Rule body         │  │
│  │              │     │  mode bullet │     │  extension         │  │
│  │ C1, C2, C3,  │ wk  │  extension   │ mod │                    │  │
│  │ C13          │     │              │     │ C9, C10, C11, C12  │  │
│  │              │     │ C4, C5, C6,  │     │                    │  │
│  │ (LOOSE)      │     │ C7, C15      │     │ (STRONG internal)  │  │
│  │              │     │              │     │                    │  │
│  │              │     │ (STRONG)     │     │                    │  │
│  └──────────────┘     └──────────────┘     └────────────────────┘  │
│         ▲                    ▲                       ▲              │
│         │                    │                       │              │
│         └────────────────────┼───────────────────────┘              │
│                              │                                       │
│                       CROSS-CUTTING                                  │
│                       C8 (vocabulary)                                │
│                       V2 (auto-memory compliance)                    │
│                                                                      │
│  ┌────────────────────────────────────────────────────────────┐    │
│  │                    VERIFICATION META                         │    │
│  │  V1: cross-ref accuracy (touches C9-C12 cross-refs)         │    │
│  │  V3: integration tests T1-T5 (consumes Q1-Q5 final)         │    │
│  │  V4: self-vigilance 4 signals (consumes Q2-Q5 final)        │    │
│  │  V2: auto-memory audit (consumes Q2-Q5 final)               │    │
│  │  + C14: §4.1 #6 + #2 unchanged verification                 │    │
│  └────────────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────────────┘
```

Major clusters identified: A (preserved), B (Possibility mode extension), C (rule body extension). Cross-cutting: C8 vocabulary + V2 auto-memory. Verification meta: V1, V3, V4 + C14.

---

## Step 2 — Detect Boundaries (Top-Down)

Natural cut points from the coupling map:

**Cut 1 — Between Cluster A and Cluster B.** The boundary is the line between Artifact mode bullet's end and Possibility mode bullet's start. Coupling across: WEAK (preserved Artifact mode doesn't constrain Possibility mode's extension). Cut is clean.

**Cut 2 — Between Cluster B and Cluster C.** The boundary is the line between the Possibility mode bullet's end and the "Completeness before novelty" rule's start. Coupling across: MODERATE (Cluster C references Cluster B's form labels). Cut has a defined interface (form-label-reference).

**Cut 3 — Between Cluster C and Cluster A part 2 (/innovate callout).** The boundary is the line between rule body's end and the /innovate callout's start. Coupling across: WEAK (callout is preserved verbatim; doesn't depend on rule body details). Cut is clean.

**Cut 4 — Cross-cutting C8 separation.** C8 (vocabulary canonicalization) is its own piece because it constrains multiple wording-pieces (Cluster B + Cluster C). Treating C8 as a separate piece (not absorbed into B/C) makes the commitment explicit and auditable.

**Cut 5 — Verification meta separation.** V1+V2+V3+V4 + C14 each test a DIFFERENT property:
- C14 + V1 (cross-ref accuracy + §4.1 unchanged): structural verification.
- V2 (auto-memory compliance): cross-cutting wording audit.
- V3 (integration T1-T5): cohesion verification.
- V4 (self-vigilance): named-bias verification.

Each is independent. V1 + V2 could merge (both audit final wording for compliance) — TEST in Step 3.

### Initial Boundary Set (8 pieces)

- P1: Cluster A (preserved) — C1 + C2 + C3 + C13
- P2: Cluster B (Possibility mode bullet extension) — C4 + C5 + C6 + C7 + C15
- P3: Cross-cutting vocabulary — C8
- P4: Cluster C part 1 (rule preserved name + preamble + candidates dim) — C9 + C10 + C11
- P5: Cluster C part 2 (comparison-axes dim) — C12
- P6: Final-text verification (cross-refs + auto-memory) — C14 + V1 + V2
- P7: Integration verification (T1-T5) — V3
- P8: Self-vigilance verification (4 signals) — V4

---

## Step 3 — Validate Boundaries (Bottom-Up Check)

### Atoms (irreducible elements)

| Atom | Content |
|---|---|
| α1 | Section header text "### 3.1 Two operational modes" |
| α2 | The sentence "Modes are determined by the territory's type, not by the discipline's commitment." |
| α3 | The Artifact mode bullet's full text (one bullet) |
| α4 | The Possibility mode definition phrase ("the territory is conceptual; candidates must be generated to be placed on the map") |
| α5 | The "The output takes one of two forms:" preamble |
| α6 | Form (i) sub-bullet text |
| α7 | Form (ii) sub-bullet text (including trigger phrase) |
| α8 | The form sub-bullets' nesting structure (indented under Possibility bullet) |
| α9 | The "Completeness before novelty" rule name + scope tag "(possibility mode)" |
| α10 | Per-dimension preamble sentence |
| α11 | Candidates dimension sub-bullet (one bullet) |
| α12 | Comparison-axes dimension sub-bullet (multi-sentence: enumerate; minima; artifact-observable; negative form + cross-ref) |
| α13 | /innovate callout (entire paragraph) |
| α14 | Cross-references to §4.1 #6 (in α11) + §4.1 #2 (in α12) — verify accuracy |
| α15 | Auto-memory compliance: no outbound paths in α4-α13 wording |
| α16 | Integration tests T1-T5 results on final text |
| α17 | Self-vigilance 4 signals applied to α4-α12 wording |

### Bottom-up grouping

- α1+α2+α3 → Preserved-pre-extension (group P1a)
- α13 → Preserved-post-extension (group P1b)
- α4+α5+α6+α7+α8 → Possibility mode bullet extension (group P2)
- α9+α10+α11 → Rule preserved-name + preamble + candidates-dim (group P4)
- α12 → Comparison-axes dim (group P5)
- α14 → Cross-ref accuracy (sub of P6)
- α15 → Auto-memory compliance (sub of P6)
- α16 → Integration verification (group P7)
- α17 → Self-vigilance verification (group P8)

Cross-cutting: vocabulary "candidates" appears in α4+α6+α7+α11+α12 — atom-spanning constraint that is treated as its own piece P3 because it's a commitment that gates the wording across atoms.

### Validation: does top-down agree with bottom-up?

| Top-down boundary | Bottom-up atom grouping | Agree? |
|---|---|---|
| P1 = Cluster A | α1+α2+α3+α13 | ✓ AGREE (P1 = P1a + P1b) |
| P2 = Cluster B | α4+α5+α6+α7+α8 | ✓ AGREE |
| P3 = Cross-cutting vocabulary | atom-spanning constraint | ✓ AGREE (treated as separate piece) |
| P4 = Cluster C part 1 | α9+α10+α11 | ✓ AGREE |
| P5 = Cluster C part 2 | α12 | ✓ AGREE |
| P6 = Final-text verification | α14+α15 | ✓ AGREE |
| P7 = Integration verification | α16 | ✓ AGREE |
| P8 = Self-vigilance verification | α17 | ✓ AGREE |

**All boundaries: HIGH confidence (top-down + bottom-up agree).**

### Merge/Split tests

**Test (a) — P1 vs P4+P5 merge?** Different operations (preserved vs extended). The /innovate callout (P1 part) is FOLLOWED by the rule body (P4+P5); merging would conflate preservation with extension operations. **KEEP SEPARATE.**

**Test (b) — P3 merge with P2+P4+P5?** P3 (vocabulary canonicalization C8) is CROSS-CUTTING. Could be absorbed into each piece's verification criteria OR remain its own piece. **Verdict: KEEP P3 SEPARATE.** Rationale (HCR1): vocabulary commitment is upstream of multiple wording-pieces; making it its own piece ensures explicit commitment + auditable verification + avoids redundant repetition in P2+P4+P5 verification criteria. Critique can verify P3's coverage independently.

**Test (c) — P4 + P5 merge?** Both are rule body extension. **Verdict: KEEP SEPARATE.** Rationale (HCR2): the comparison-axes-dimension sub-bullet (C12) has substantially different content (3 minima with refinements + artifact-observable + cross-ref + negative form) vs candidates-dimension sub-bullet (preserves existing prescription). Asymmetry warrants separate generate-test cycles at Innovation.

**Test (d) — P7 + P8 merge?** Both are META-checks. **Verdict: KEEP SEPARATE.** Rationale (HCR4): T1-T5 (P7) test structural integration; 4 recognition signals (P8) test against named bias. The named bias is a SEPARATE concept from integration — even if integration passes T1-T5, the wording could still surface the named bias (or vice versa). Different operations.

**Test (e) — P1 split into P1a (pre) + P1b (post)?** Operation is the same (preserve unchanged) across α1+α2+α3+α13. **Verdict: KEEP P1 AS ONE PIECE.** Rationale (HCR3): one operation, applied to 4 commitments at the same risk level (none — they're preserved verbatim).

**Test (f) — V1 (cross-ref accuracy) + V2 (auto-memory) merge in P6?** Both are final-text audits on different properties. They could be separate pieces, but the audit-operation pattern is the same (read final text + verify property). **Verdict: MERGE within P6.** P6 has 2 sub-tasks (cross-ref + auto-memory); they share the audit-operation pattern + share input (final text). Single piece is tractable.

### Boundary verdict

8 pieces validated. Top-down + bottom-up agree on all 8.

---

## Step 4 — Express as Question Tree

### Q-Tree (8 pieces)

#### Q1 — Section structure preservation

**Question:** Which structural elements of the existing §3.1 must be preserved verbatim in the redesigned §3.1?

**Verification criteria:**
- [ ] Section header "### 3.1 Two operational modes" preserved verbatim.
- [ ] Sentence "Modes are determined by the territory's type, not by the discipline's commitment." preserved verbatim.
- [ ] Artifact mode bullet preserved verbatim (no internal modification).
- [ ] "Key difference from /innovate" callout preserved verbatim.
- [ ] Section structure: header → mode-determination → mode bullets → completeness rule → /innovate callout (5-block sequence preserved).

**Property (v) check (provisional):** NOT FIRING. Preservation operation; no new intervention shape for downstream behavior.

#### Q2 — Possibility mode bullet extension

**Question:** What is the exact text + structural form of the redesigned Possibility mode bullet, including the output-form recognition?

**Verification criteria:**
- [ ] Possibility mode bullet's opening preserved: "the territory is conceptual; candidates must be generated to be placed on the map" — leading into "The output takes one of two forms:" preamble.
- [ ] Form (i) sub-bullet present with name "Candidates-only" + definition "a set of candidates without per-candidate comparative scoring on shared criteria."
- [ ] Form (ii) sub-bullet present with name "Comparison structure" + definition "candidates × axes (pros/cons table; multi-attribute scoring grid; ranked list with stated criteria), produced when the inquiry's deliverable requires per-candidate assessment on shared criteria."
- [ ] Form sub-bullets nested inside Possibility mode bullet (not at co-equal section level).
- [ ] "candidates" vocabulary used consistently throughout Possibility mode bullet (per P3 constraint).
- [ ] No outbound paths in the bullet's wording (per P6 audit).

**Property (v) check (provisional):** **FIRES.** The bullet's text commits intervention-shape (REPAIR + EXTEND) for downstream-discipline behavior — future /explore invocations operate under the resulting form recognition.

#### Q3 — Cross-cutting vocabulary canonicalization

**Question:** What is the canonical noun-vocabulary across the redesigned §3.1's wording, and where does it apply?

**Verification criteria:**
- [ ] "candidates" (and "candidate" singular) is the canonical noun across all redesigned wording.
- [ ] "options" / "per-option" / "scored options" do NOT appear in the redesigned text.
- [ ] References to form-(ii) entries use "candidates × axes" / "per-candidate cells" / "candidate rows" (NOT "options × axes" / "option rows").
- [ ] Application checked across P2 (Possibility mode bullet) + P4 (candidates dim sub-bullet) + P5 (comparison-axes dim sub-bullet).
- [ ] Vocabulary consistency does NOT modify P1 (preserved §3.1's existing "candidates" usage is already canonical).

**Property (v) check (provisional):** **FIRES.** The vocabulary commitment shapes how future runners reference possibility-mode entries; downstream-discipline behavior affected.

#### Q4 — Rule body — preserved name + per-dimension preamble + candidates dimension sub-bullet

**Question:** What is the exact text of the "Completeness before novelty" rule's preserved name, the per-dimension preamble, and the candidates-dimension sub-bullet?

**Verification criteria:**
- [ ] Rule name "**Completeness before novelty**" preserved verbatim (with scope tag "(possibility mode)").
- [ ] Per-dimension preamble: "Apply completeness per dimension of the output:" (uses "per dimension" vocabulary per A2; uses "the output" referring to possibility-mode output).
- [ ] Candidates dimension sub-bullet labeled "Candidates dimension (forms i + ii)" — explicitly references P2's form labels.
- [ ] Sub-bullet content preserves existing prescription: "Scan for the standard/obvious approaches BEFORE scanning for novel ones."
- [ ] Sub-bullet negative form references §4.1 #6: "Generating only 'creative' candidates and missing the obvious ones is a failure mode (see §4.1 #6)."
- [ ] §4.1 #6 cross-reference verified accurate (per Exploration R2 verification).
- [ ] "candidates" vocabulary used (per P3 constraint).
- [ ] No outbound paths in wording (per P6 audit).

**Property (v) check (provisional):** **FIRES.** The rule body extension commits intervention-shape for downstream-discipline behavior.

#### Q5 — Comparison-axes dimension sub-bullet

**Question:** What is the exact text of the comparison-axes-dimension sub-bullet, including the form-(ii)-only qualifier, the 3 axis minimum types, the artifact-observable requirement, and the §4.1 #2 cross-reference?

**Verification criteria:**
- [ ] Sub-bullet labeled "Comparison-axes dimension (form ii only, when present)" — explicitly references P2's form-(ii) label.
- [ ] Opening: "Enumerate the comparison axes explicitly BEFORE populating per-candidate cells."
- [ ] 3 axis minimum types present per A6 refinements:
  - (a) "the inquiry-question's criteria — both stated and implicit in the question's framing"
  - (b) "project-architecture invariants relevant to the candidate's domain (placement, coupling, installability boundaries; folder-independence commitments inherited from project structure)"
  - (c) "constraints inherited via the inquiry's Synthesis Trigger (when applicable)"
- [ ] Permissive extension: "The runner may add additional axes as substance warrants."
- [ ] Artifact-observable sentence (per A5 operationally-specific form): "The axis list is an artifact-observable output — a labeled row above the candidate rows or a named axis-list above the table."
- [ ] Negative form referencing §4.1 #2: "Skipping enumeration and populating per-candidate cells under implicit axes is a Surface-Only Scanning instance applied to the comparison axes (the visible cells are populated but the invisible axis-choice is unscanned; see §4.1 #2)."
- [ ] §4.1 #2 cross-reference verified accurate.
- [ ] "candidates" vocabulary used (per P3 constraint).
- [ ] No outbound paths in wording (per P6 audit).

**Property (v) check (provisional):** **FIRES.** The new sub-bullet commits intervention-shape for downstream-discipline behavior.

#### Q6 — Final-text verification (cross-refs + auto-memory)

**Question:** Does the final redesigned §3.1 text satisfy cross-reference accuracy + auto-memory compliance?

**Verification criteria:**
- [ ] §4.1 #6 cross-reference in Q4's candidates dim sub-bullet points to the current "Completeness bias in possibility mode" failure mode (verified by reading current §4.1 #6).
- [ ] §4.1 #2 cross-reference in Q5's comparison-axes dim sub-bullet points to the current "Surface-only scanning" failure mode (verified by reading current §4.1 #2).
- [ ] §4.1 #6 + #2 prevention text NOT updated (per C14; no cascading §4.1 edit needed).
- [ ] Auto-memory compliance audit: no outbound paths to `docs/...` / `enes/...` / `cognitive_harness/...` / `devdocs/...` in the redesigned §3.1 text.
- [ ] Auto-memory compliance: concept-form prose throughout (project-architecture invariants; installability boundaries; folder-independence; Synthesis Trigger — all concept-form, not path-form).
- [ ] No accidental introduction of path-like strings via wording drift.

**Property (v) check (provisional):** NOT FIRING. Verification meta; doesn't commit intervention shape.

#### Q7 — Integration verification (T1-T5)

**Question:** Does the final redesigned §3.1 text pass the 5 integration tests from Exploration R9?

**Verification criteria:**
- [ ] **T1 — Form-definition placement:** forms (i) and (ii) nested INSIDE the Possibility mode bullet as sub-bullets; not at section-level visibility. Verified by reading the final text's bullet hierarchy.
- [ ] **T2 — Rule extension placement:** per-dimension language INSIDE the "Completeness before novelty" rule body; no new bold-prefix rule alongside. Verified by reading the final rule body.
- [ ] **T3 — Rule name preservation:** rule retains the name "Completeness before novelty" (no rename to "Per-dimension completeness" or similar). Verified by direct text inspection.
- [ ] **T4 — Single-conceptual-arc reading:** the redesigned §3.1 reads as ONE arc (modes → forms within possibility mode → per-dimension completeness for those forms → /innovate distinction). No disjointed segues. Verified by reading top-to-bottom.
- [ ] **T5 — Pre-redesign-history-invisible reading:** a reader without knowledge of the 21-03-00 additive proposal or 21-04-00 redesign perceives the §3.1 as designed-this-way-from-the-start. No "additionally..." / "in cases where..." / "also..." phrasings that suggest appended content. Verified by adversarial Critique prosecution.

**Property (v) check (provisional):** NOT FIRING. Verification meta.

#### Q8 — Self-vigilance verification

**Question:** Does the final redesigned §3.1 text pass the 4 recognition-signal checks for "Additive-fix anchoring bias" (per 21-04-00 named meaning-node)?

**Verification criteria:**
- [ ] **Signal #1 (gap framed as "X is missing"):** the redesigned text does NOT frame the form-(ii) recognition as "X was missing, so we added X." The framing is "the output takes one of two forms," presented as the spec's framing.
- [ ] **Signal #2 (proposed fix begins with "add"/"append"/"extend"):** the redesigned text's structure is REPAIR + EXTEND at the structural-fix-shape level, but the PROSE does NOT use additive language like "also include..." / "we additionally..." / "moreover, axes are enumerated." The prose extends the rule body INSIDE.
- [ ] **Signal #3 (Inversion considers same-category-shapes only):** Innovation's per-piece Inversion check (at Q2-Q5) considered CONTRARIAN-RETHINK at least once per the 21-04-00 corrective.
- [ ] **Signal #4 (spec design treated as HOST for new addition):** the redesigned text reads as a coherent reframing of §3.1's output structure (not as the existing §3.1 + appended content). Verified jointly with T1-T5 from Q7.

**Property (v) check (provisional):** NOT FIRING. Verification meta.

---

## Step 5 — Map Interfaces

### Interface Table

| # | Source | Target | What flows | Direction | Type |
|---|---|---|---|---|---|
| I1 | Q1 (Cluster A) | Q2 (Cluster B) | Spatial container (Artifact mode bullet sits BEFORE Possibility mode bullet) | One-way | Container |
| I2 | Q1 (Cluster A) | Q4 (Cluster C) | Spatial container (section header + mode-determination bracket the rule) | One-way | Container |
| I3 | Q1 (Cluster A) | (end) | /innovate callout sits AFTER rule body | One-way | Container |
| I4 | Q3 | Q2 | Vocabulary constraint ("candidates" canonical) | One-way | Constraint |
| I5 | Q3 | Q4 | Vocabulary constraint ("candidates" in candidates dim sub-bullet) | One-way | Constraint |
| I6 | Q3 | Q5 | Vocabulary constraint ("per-candidate cells"; "candidate rows") | One-way | Constraint |
| I7 | Q2 | Q4 | Form labels referenced ("Candidates dimension (forms i + ii)") | One-way | Reference |
| I8 | Q2 | Q5 | Form-(ii) label referenced ("Comparison-axes dimension (form ii only, when present)") | One-way | Reference |
| I9 | Q4 | Q5 | Per-dimension preamble's structure provides Q5's nesting position | One-way | Structure |
| I10 | Q1-Q5 final text | Q6 | Final wording for verification | One-way | Data |
| I11 | Q1-Q5 final text | Q7 | Final wording for integration tests | One-way | Data |
| I12 | Q2-Q5 final text | Q8 | Final wording for self-vigilance check | One-way | Data |

### Assumptions-not-data check (per Step 5 refinement note)

For each interface, what assumptions does the target make about the source?

- **I1+I2+I3 (spatial containers):** Q1's preserved content sits in fixed positions. Q2+Q4 ASSUME their content fits within the section structure Q1 preserves. If Q2's extended Possibility mode bullet exceeds the section's typographic conventions (e.g., overly nested), Q1's preserved-section-shape is violated.
  - **Mitigation:** Q2 + Q4 + Q5 commit to bullet/sub-bullet structure consistent with §3.2-§3.5's existing typography (verified at Exploration).

- **I4+I5+I6 (vocabulary):** Q2+Q4+Q5 ASSUME Q3's vocabulary commitment is applied during their wording generation. If Innovation generates wording that drifts (e.g., switches to "option" mid-sentence), Q3's constraint is violated.
  - **Mitigation:** Innovation discipline-runtime applies Q3 as a wording-gate at each piece's generation; Q6 audits final text for vocabulary consistency.

- **I7+I8 (form-label references):** Q4+Q5 ASSUME Q2's form-(i)/(ii) labels are "Candidates-only" / "Comparison structure" exactly. If Q2's labels drift (e.g., to "Candidates list" / "Comparison form"), Q4+Q5's sub-bullet labels become non-referential.
  - **Mitigation:** P2's verification criteria fix the labels explicitly; P4+P5's labels mirror.

- **I9 (per-dim preamble structure):** Q5 ASSUMES Q4's per-dimension preamble structures the rule body to permit Q5's sub-bullet placement. If Q4's preamble uses different framing (e.g., "Apply completeness to each dimension..." vs "Apply completeness per dimension of the output:"), Q5's sub-bullet may not slot in cleanly.
  - **Mitigation:** Q4 commits to A2's exact preamble wording; Q5 nests as the second sub-bullet.

- **I10+I11+I12 (final wording flow):** verification pieces ASSUME the final wording is the OUTPUT of Innovation's piece-generation, not a draft. If Innovation iterates after Q6+Q7+Q8 begin, verification operates on a stale snapshot.
  - **Mitigation:** Innovation completes all 5 wording-pieces before Q6+Q7+Q8 begin. CONCLUDE protocol's sequencing ensures finding.md compilation occurs after all discipline outputs settle.

### Hidden coupling risks (3 flagged + mitigated)

1. **Vocabulary drift across Q2+Q4+Q5 (I4+I5+I6):** mitigated by explicit P3 verification criteria + Q6 audit.
2. **Form-label drift between Q2's labels and Q4+Q5's references (I7+I8):** mitigated by Q2's verification criteria fixing labels + Q4+Q5 mirroring.
3. **§4.1 cross-reference accuracy (I10):** mitigated by Q6's explicit cross-reference verification (already verified at Exploration R2).

---

## Step 6 — Order by Dependency

### Dependency graph

```
                  Q3 (vocabulary canonicalization)
                  │   constraint applies to Q2+Q4+Q5
                  ▼
   ┌──────┐    ┌──────┐    ┌──────┐    ┌──────┐
   │  Q1  │    │  Q2  │ ──▶│  Q4  │ ──▶│  Q5  │
   │      │    │      │    │      │    │      │
   │ pre- │    │ Poss │    │ rule │    │ cmp- │
   │ serv │    │ mode │    │ pre+ │    │ axes │
   │      │    │ ext  │    │ cand │    │ dim  │
   └──────┘    └──────┘    └──────┘    └──────┘
                  │           │           │
                  └───────────┴───────────┘
                              │
                              ▼ final wording
                       ┌──────────────┐
                       │  Q6  Q7  Q8  │
                       │              │
                       │  verification│
                       │  meta        │
                       └──────────────┘
```

### Order

**Phase A — Foundation (parallel):**
- Q1 (preservation verification — no wording generation needed)
- Q3 (vocabulary constraint commitment — already established at Sensemaking)

**Phase B — Wording generation (sequential):**
- Q2 first (establishes form labels for downstream Q4+Q5)
- Q4 next (uses Q2's form labels; establishes per-dimension preamble for Q5)
- Q5 next (uses Q2's form-(ii) label + Q4's per-dimension structure)

Q3 applies as constraint during Phase B's wording generation.

**Phase C — Verification (parallel):**
- Q6 (cross-ref + auto-memory verification on final wording)
- Q7 (integration tests T1-T5 on final text)
- Q8 (self-vigilance 4 signals on final wording)

Q6+Q7+Q8 are independent of each other; all consume the final wording from Phase B.

### Critical path

Q3 (commitment) → Q2 (form labels) → Q4 (rule body + form references) → Q5 (axes dim + form-(ii) reference + per-dim structure) → Q6+Q7+Q8 (verification, parallel)

No circular dependencies. No parallel-but-actually-dependent pieces.

### What can be parallel

- Phase A: Q1 + Q3 (no inter-dependency)
- Phase C: Q6 + Q7 + Q8 (independent verification on same input)

### What must wait

- Q2 must wait for Q3 commitment (already settled at Sensemaking; ready)
- Q4 must wait for Q2 (form labels)
- Q5 must wait for Q2 + Q4 (form-(ii) label + per-dim structure)
- Q6+Q7+Q8 must wait for Q2+Q4+Q5 final wording

---

## Step 7 — Self-Evaluate

### Minimum 3 Dimensions

**1. Independence.** Can each piece be worked on without others existing (except through defined interfaces)?

- Q1: Yes (preservation verification operates on existing text).
- Q2: Yes given Q3 commitment (interface I4).
- Q3: Yes (commitment is self-contained).
- Q4: Yes given Q2's form labels + Q3 commitment (interfaces I5+I7).
- Q5: Yes given Q2's form-(ii) label + Q3 + Q4's per-dim preamble (interfaces I6+I8+I9).
- Q6+Q7+Q8: Yes given Q1-Q5 final wording (interfaces I10+I11+I12).

**Independence: PASS.** All pieces workable with defined interfaces.

**2. Completeness.** Do the pieces cover the whole?

- Whole = redesigned §3.1 text replacing lines 120-129 of explore.md.
- Q1 covers: header + mode-determination + Artifact mode bullet + /innovate callout (4 commitments preserved).
- Q2 covers: Possibility mode bullet extension (5 commitments: extension preamble + form names + trigger + nesting).
- Q3 covers: vocabulary canonicalization (1 commitment, cross-cutting).
- Q4 covers: rule preserved name + per-dim preamble + candidates dim sub-bullet (3 commitments).
- Q5 covers: comparison-axes dim sub-bullet (1 commitment with multiple sub-aspects).
- Q6 covers: cross-ref accuracy + auto-memory + §4.1 unchanged (1 commitment + 2 verification ops).
- Q7 covers: T1-T5 integration tests (5 sub-tests).
- Q8 covers: 4 recognition signals (4 sub-checks).

15 commitments + 4 verification operations all mapped. No commitment uncovered.

**Completeness: PASS.**

**3. Reassembly.** Pieces + interfaces = whole?

- Given Q1's preserved content (in fixed section positions) + Q2's extended Possibility mode bullet (with form labels) + Q3's vocabulary applied during Q2+Q4+Q5 + Q4's rule body extension + Q5's comparison-axes dim + Q6+Q7+Q8 verification passes:
- The resulting text is the redesigned §3.1, deployable as direct edit to lines 120-129.

**Reassembly: PASS.**

### Full 7 Dimensions (this is a structural inquiry with high stakes; run full eval)

**4. Tractability.** Each piece small enough for single focused pass?

- Q1: 4 atoms to verify preservation — trivial.
- Q2: 5 commitments + nested structure — moderate.
- Q3: 1 commitment — atomic.
- Q4: 3 commitments (rule name + preamble + candidates dim) — small.
- Q5: 1 commitment (C12) with 5 sub-aspects (axes-enumeration sentence + 3 minima + artifact-observable + cross-ref/negative form) — moderate-large but coherent.
- Q6: 2 sub-audits (cross-ref + auto-memory) — small.
- Q7: 5 sub-tests — small.
- Q8: 4 sub-checks — small.

**Tractability: PASS.** Q5 is the largest piece but remains single-focused-pass-able.

**5. Interface clarity.** All cross-piece flows explicit?

- 12 interfaces mapped above with source / target / what flows / direction / type.
- Assumptions-not-data check applied; 3 hidden-coupling risks identified + mitigated.
- No hidden dependencies remaining.

**Interface clarity: PASS.**

**6. Balance.** Complexity proportional across pieces?

- Q5 is largest (1 sub-bullet with ~5 sub-aspects of operational content).
- Q3 is smallest (1 commitment).
- Ratio: ~5x between largest and smallest. Acceptable.
- Q5 could be split into Q5a (axes enumeration sentence) + Q5b (3 minima list) + Q5c (artifact-observable + negative form) — but this would over-decompose. They're parts of one coherent sub-bullet at Innovation's single-pass scope.

**Balance: PASS.**

**7. Confidence.** Top-down + bottom-up agree on boundaries?

- All 8 pieces' boundaries agreed by both directions (Step 3 validation).
- Merge/split tests (a)-(f) confirmed final 8-piece partition.

**Confidence: PASS.**

### Refinement note check — Determination-mechanism piece check

The Q-tree includes load-bearing concepts whose use depends on runtime determination:

- **Form (ii) applicability:** depends on runtime check "does the inquiry's deliverable require per-candidate assessment on shared criteria?"
- **Per-dimension application:** depends on which form is selected (runtime).

Does the Q-tree include a piece addressing HOW the determination is made?

- **YES.** Q2's verification criteria fix the form-(ii) trigger phrase: "produced when the inquiry's deliverable requires per-candidate assessment on shared criteria." This IS the determination mechanism. Runners read C7 + apply to their inquiry's deliverable.
- Q4's per-dimension preamble + Q5's "form ii only, when present" qualifier together specify the application's per-form gating.

**Determination-mechanism piece check: PASS.** Q2 (via C7) + Q4 + Q5 together provide the determination + per-form application.

### Failure-mode checks (all 7 from §"Failure Modes")

1. **Premature Decomposition** — sensemaking completed first (SV1→SV6 with 15 committed decisions). ✓ Avoided.
2. **Wrong Boundaries** — coupling perception applied (Step 1); bottom-up validation (Step 3) agreed. ✓ Avoided.
3. **Hidden Coupling** — assumptions-not-data check applied; 3 hidden-coupling risks flagged + mitigated. ✓ Avoided.
4. **Missing Pieces** — completeness check (Step 7 minimum eval) PASSED; determination-mechanism piece check PASSED. ✓ Avoided.
5. **Over-Decomposition** — Q5 considered for split into Q5a-c; rejected. 8 pieces is balanced for the problem's complexity. ✓ Avoided.
6. **Ignoring Dependencies** — Step 6 produced explicit dependency graph; no circular deps. ✓ Avoided.
7. **Imbalanced Decomposition** — balance check (Step 7 full eval) PASSED; Q5 not dominantly larger. ✓ Avoided.

**All 7 failure modes: AVOIDED.**

---

## High-Confidence Rationales (HCRs)

Per the user's prompt: 8-15 HCRs (high-confidence-rationales — specific structural rationales committed at the discipline level).

| # | HCR | Rationale |
|---|---|---|
| HCR1 | Q3 (vocabulary canonicalization) is a separate piece, not absorbed into Q2+Q4+Q5 | Cross-cutting commitment upstream of multiple wording-pieces. Separate piece makes the commitment explicit + auditable + avoids redundant repetition + permits independent Critique verification |
| HCR2 | Q4 + Q5 are separate pieces, not merged | Asymmetric content (candidates dim preserves existing prescription; comparison-axes dim adds substantial new content). Separate pieces warrant separate generate-test cycles at Innovation |
| HCR3 | Q1 is one piece (not split pre/post) | Operation is "preserve unchanged" applied to all 4 commitments at the same risk level (no risk; verbatim preservation) |
| HCR4 | Q6 + Q7 + Q8 are separate pieces, not merged | They test DIFFERENT properties: cross-ref + auto-memory (compliance) / integration (cohesion) / named-bias (anti-pattern). Even if one passes, others may fail. Separate verification permits granular failure-mode diagnosis |
| HCR5 | Property (v) fires at Q2-Q5 (4 pieces); NOT firing at Q1 + Q6 + Q7 + Q8 (4 pieces) | Pieces Q2-Q5 commit intervention-shape (REPAIR + EXTEND) for downstream-discipline behavior (future /explore invocations operate under the resulting spec). Pieces Q1 + Q6-Q8 are preservation / verification meta-content. Innovation discipline-runtime confirms |
| HCR6 | Q2 must come before Q4+Q5 in Innovation's wording generation | Q4 + Q5 reference Q2's form labels ("Candidates dimension (forms i + ii)"; "Comparison-axes dimension (form ii only, when present)"). Establishing form labels first prevents drift |
| HCR7 | Q3 commitment applied during Q2+Q4+Q5 generation (not as a prior step) | The vocabulary commitment is settled at Sensemaking; Innovation applies it as a wording-gate during piece-generation. Q6 audits final compliance |
| HCR8 | Q6's cross-ref verification confirms §4.1 #6 + #2 numbering accuracy + no §4.1 text updates needed | Per Sensemaking C14 + Exploration R2 verification. Cross-references work as conceptual analogies + literal numbering matches |
| HCR9 | Q7's integration verification applies T1-T5 from Exploration R9 | 5 mechanical tests on the final text: form-definition placement; rule extension placement; rule name preservation; single-conceptual-arc reading; pre-redesign-history-invisible reading |
| HCR10 | Q8's self-vigilance verification applies 4 recognition signals from 21-04-00 MN8 | 4 signals against named "Additive-fix anchoring bias": gap-framed-as-missing-X; fix-begins-with-add/append/extend; same-category-Inversion; spec-as-HOST. Applied to final wording |
| HCR11 | 12 interfaces mapped with assumptions-not-data check; 3 hidden-coupling risks identified + mitigated | Vocabulary drift (Q3 → Q2+Q4+Q5); form-label drift (Q2 → Q4+Q5); §4.1 cross-reference accuracy (Q6 audits) |
| HCR12 | Determination-mechanism piece check PASSES — Q2 (C7) provides the form-(ii) determination mechanism | Runtime check "does the deliverable require per-candidate assessment?" — Q2's trigger phrase IS the determination mechanism. Q4+Q5's per-form gating completes the application |
| HCR13 | Balance check PASSES — Q5 is largest but coherent single-pass piece | ~5x ratio between largest (Q5) and smallest (Q3). Q5 is one sub-bullet with 5 sub-aspects of operational content. Splitting Q5 would over-decompose |
| HCR14 | No DV2 trigger fires at this Decomposition pass | All boundaries validated; no execution-time-discovered coupling. Decomposition is DV1; future DV2 only if Innovation/Critique surfaces wrong boundary |
| HCR15 | Layer-3 §9 Property (v) firing forecast: 4 pieces (Q2-Q5) fire; 4 pieces (Q1, Q6-Q8) don't | Provisional per Decomposition's analysis of intervention-shape commitment. Innovation discipline-runtime confirms or overrides per its own Phase 2 Generate check |

**Total: 15 HCRs.**

---

## Verdict

**PROCEED to Innovation with 8-piece Q-tree + 15 HCRs.**

Innovation should:

1. Apply Seed → Generate → Test cycle PER PIECE.
2. Per-piece Property (v) check at Phase 2 Generate; confirm/override Decomposition's HCR15 forecast.
3. For Property (v)-firing pieces (Q2-Q5): apply Intervention-Shape-Axis Inversion at Property-(v) Pieces — consider an alternative shape from the Vocabulary. Per 21-04-00 corrective, CONTRARIAN-RETHINK must be among the alternatives considered (the named bias's recognition signal #3).
4. For Property (v)-NOT-firing pieces (Q1, Q6, Q7, Q8): standard generate-test; no Inversion required.
5. Self-vigilance at each piece: "is this piece's wording additively accreting concepts, or integrating them?" Per 21-04-00 MN8 recognition signal #4.
6. Order: Q1 + Q3 commitment first (Phase A) → Q2 then Q4 then Q5 (Phase B sequential) → Q6 + Q7 + Q8 (Phase C parallel).
7. Innovation's pieces produce the FINAL EXACT SPEC TEXT for the redesigned §3.1.

Critique will then prosecute the final text against all 15 HCRs + integration tests + self-vigilance signals + accreted-in-disguise risk dimension.
