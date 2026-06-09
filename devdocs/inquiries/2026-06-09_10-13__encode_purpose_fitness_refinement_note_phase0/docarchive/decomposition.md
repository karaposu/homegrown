# Decomposition — encode_purpose_fitness_refinement_note_phase0

## User Input

```text
17 pieces pre-articulated from the sensemaking SV6 structural specification. Decomposition validates the piece-set, names natural boundaries, articulates verification + counter-questions, maps interfaces, orders dependencies, and self-evaluates.
```

---

## Step 1 — Coupling Topology

Five clusters:

**Cluster A — Refinement-note assembly** (high-internal coupling on the text-output, low-cross on the per-block content):
P-INSERT-POINT, P-HEADER, P-CHECK-NAME, P-BLOCK-1-SEMANTICS, P-BLOCK-2-TEST, P-BLOCK-3-BOUNDARY, P-BLOCK-4-UNIFICATION, P-BLOCK-5-FALLBACK, P-CLOSING-CROSS-REFS. Nine pieces that compose into the refinement note. Each block answers a different content question; they're peer-independent at the content axis but assemble at the artifact axis.

**Cluster B — Required ancillary edits** (sibling-independent):
P-ANCILLARY-A (back-reference at #2); P-ANCILLARY-B (back-reference at #3). Two pieces; symmetric, independent of each other and of Cluster A's internals (depends only on Cluster A's existence).

**Cluster C — Confirmatory negatives** (independent):
P-ANCILLARY-E-NEGATIVE (Summary table); P-ANCILLARY-F-NEGATIVE (SKILL.md). Two pieces; each verifies that NO edit is needed elsewhere.

**Cluster D — Optional ancillaries (COULD)** (independent of each other and from required):
P-ANCILLARY-C-COULD (Adversarial structure final sentence); P-ANCILLARY-D-COULD (Phase 3 constructive-output back-reference). Two pieces.

**Cluster E — Meta-checks on assembly** (depends on Cluster A's completion):
P-LENGTH-VERIFY; P-DISCIPLINE-INDIVIDUAL-AUDIT. Two pieces.

Total: 17 pieces.

**Coupling map:**

```
[Cluster A — Refinement-note assembly]
  P-INSERT-POINT ─┐
  P-HEADER ───────┤
  P-CHECK-NAME ───┤
  P-BLOCK-1 ──────┤      → assembled refinement-note text
  P-BLOCK-2 ──────┤
  P-BLOCK-3 ──────┤
  P-BLOCK-4 ──────┤
  P-BLOCK-5 ──────┤
  P-CLOSING ──────┘

[Cluster B — Required ancillaries]      [Cluster D — Optional]
  P-ANCILLARY-A                            P-ANCILLARY-C-COULD
  P-ANCILLARY-B                            P-ANCILLARY-D-COULD

[Cluster C — Confirmatory negatives]    [Cluster E — Meta-checks]
  P-ANCILLARY-E-NEGATIVE                   P-LENGTH-VERIFY
  P-ANCILLARY-F-NEGATIVE                   P-DISCIPLINE-INDIVIDUAL-AUDIT
                                           (depend on Cluster A assembled)
```

---

## Step 2 — Boundaries (Top-Down)

Natural cuts:

- Within Cluster A: cut on the body-block axis. Each block is one content commitment. Cuts pass the "low crossing traffic" test — each block can be drafted, tested, and refined independently.
- Between Clusters A and B: weak coupling. Cluster B depends on Cluster A's existence (a refinement note to back-reference TO) but not on its internals.
- Between Clusters B and C: weak coupling. C verifies non-existence of edits elsewhere; independent from B.
- Between Clusters A-D and Cluster E: meta-check coupling. E inspects the assembled output but doesn't modify it.

All boundaries pass low-traffic test.

---

## Step 3 — Validate Boundaries (Bottom-Up)

Atomic content commitments (irreducible):

- Location (insertion point) — atomic, lives in P-INSERT-POINT.
- Header trigger text — atomic, P-HEADER.
- Check name — atomic, P-CHECK-NAME.
- Semantics articulation (purpose-fitness as critical-weight semantics) — atomic, P-BLOCK-1.
- 1-question test text — atomic, P-BLOCK-2.
- Boundary clause (REFINE/KILL) — atomic, P-BLOCK-3.
- Unification paragraph — atomic, P-BLOCK-4.
- Fallback clause — atomic, P-BLOCK-5.
- Closing cross-references — atomic, P-CLOSING-CROSS-REFS.
- Back-reference at #2 — atomic, P-ANCILLARY-A.
- Back-reference at #3 — atomic, P-ANCILLARY-B.
- Summary-no-update verification — atomic, P-ANCILLARY-E-NEGATIVE.
- SKILL.md-no-update verification — atomic, P-ANCILLARY-F-NEGATIVE.
- Adversarial-structure cross-reference (optional) — atomic, P-ANCILLARY-C-COULD.
- Constructive-output back-reference (optional) — atomic, P-ANCILLARY-D-COULD.
- Length verification — atomic, P-LENGTH-VERIFY.
- Discipline-individual audit — atomic, P-DISCIPLINE-INDIVIDUAL-AUDIT.

17 atoms map 1:1 to 17 pieces. **Confidence:** HIGH on all boundaries.

---

## Step 4 — Question Tree

Each piece expressed as question + verification + counter-question (piece-level inversion).

### P-INSERT-POINT — Where exactly does the refinement note attach?

**Q:** What are the exact byte-precision insertion coordinates in `td-critique.md`?
**Verification:**
- [ ] Insertion is between line 190 (end of Frame-premise test refinement note's closing paragraph) and line 192 ("Phase 0 is the meta-critique component...").
- [ ] Adjacent text is unchanged.
- [ ] Edit is purely additive.

**Counter:** What if the insertion point should be INSIDE step 4's bullet rather than after the Frame-premise test? (Alternative B from surfacing.) → Rejected by sensemaking; would under-articulate the note.

### P-HEADER — Italicized header text

**Q:** What is the exact header text?
**Verification:**
- [ ] Matches pattern of existing Phase 0 refinement notes (italicized, "*Refinement note (applies at...)*" form).
- [ ] Trigger-locus is specific to step 4 — Weight dimensions (not just "Phase 0 Dimension Construction" as IFP 4a uses).
- [ ] Reads naturally in the codebase context.

**Counter:** What if "step 4 — Weight dimensions" specificity is over-narrow and the note should apply broader at Phase 0? → No; sensemaking K8 committed the narrower trigger-locus.

### P-CHECK-NAME — Bold check name

**Q:** What is the bold check name?
**Verification:**
- [ ] Short, descriptive.
- [ ] Parallel to peer notes: "Project-specific risk dimension check"; "Frame-premise test." A 2-3 word name in the same style.
- [ ] Captures the meta-principle's essence.

**Counter:** What if a different name better captures the principle? Candidates: "Purpose-fitness test"; "Severity-calibration test"; "Critical-weight semantics check." Innovation should generate and test alternatives.

### P-BLOCK-1-SEMANTICS — Purpose-fitness as critical-weight semantics

**Q:** What does the semantics block say about purpose-fitness as the structural meaning of dimension-weighting?
**Verification:**
- [ ] Encodes commitment #1 (purpose-fitness as meta-principle) + #2 (composite calibration; per-task layer).
- [ ] Connects to existing spec's "weights come from the problem context" language (line 88).
- [ ] Concise (~2-4 sentences).

**Counter:** What if encoding two commitments (semantics + composite calibration) makes the block too dense? Could split into two blocks (1a + 1b). → Risk: over-decomposition of the refinement note's body.

### P-BLOCK-2-TEST — 1-question practitioner test

**Q:** What is the 1-question test text?
**Verification:**
- [ ] Encodes commitment #4 — *"If this defect were left in place, would the candidate still do what it's supposed to do — sufficiently, not just degraded?"* or equivalent.
- [ ] Operational instruction (practitioner can apply at speed).
- [ ] Distinguishes YES → not kill-worthy vs NO → kill-worthy (REFINE if in-frame; KILL if frame-replacement).

**Counter:** What if the test should be split into multiple operational questions? → Rejected by sensemaking Ambiguity 2 in prior inquiry; 1-question form preserved.

### P-BLOCK-3-BOUNDARY — REFINE/KILL fixability-within-frame

**Q:** What does the boundary block say about REFINE vs KILL?
**Verification:**
- [ ] Encodes commitment #5 (fixability-within-frame).
- [ ] Brief (1-2 sentences); doesn't restate Phase 3 verdict descriptions.
- [ ] May cross-reference Phase 3 Verdict + Constructive Output for full verdict details.

**Counter:** What if the boundary block is omitted? → The block's content COULD be folded into Block 2 (the 1-question test's branching on YES/NO already encodes the REFINE/KILL distinction). Innovation should consider folding vs separate-block.

### P-BLOCK-4-UNIFICATION — #2/#3 as opposite-direction violations

**Q:** What does the unification block say?
**Verification:**
- [ ] Encodes commitment #8: #2 Rubber-Stamping = severe defect under-killed; #3 Nitpicking = non-severe defect over-killed; both = mismatches between defect-severity (under purpose-fitness) and verdict rendered.
- [ ] References §4 #2 + #3 by name.
- [ ] ~3-4 sentences.

**Counter:** What if the unification belongs only in §4 ancillary back-references and NOT inside the refinement note body? → Rejected by sensemaking Ambiguity 3; resolved to BOTH (inline + ancillary).

### P-BLOCK-5-FALLBACK — Defer-with-direction for ambiguous purpose

**Q:** What does the fallback clause say?
**Verification:**
- [ ] Encodes commitment #9: when candidate's purpose is ambiguous, render a defer-with-direction verdict naming the ambiguity + pointing to `/sense-making` (or equivalent upstream purpose-stabilization discipline).
- [ ] Short (1-2 sentences).

**Counter:** What if `/sense-making` shouldn't be named (discipline-individual concern)? → Discussed and resolved: discipline names are acceptable per `docs/discipline_edit_tiers.md`; only internal artifacts are off-limits. Critique will adversarially re-test.

### P-CLOSING-CROSS-REFS — Cross-reference paragraph

**Q:** What does the closing cross-reference paragraph say?
**Verification:**
- [ ] Cross-references §4 #2 + #3 (firm).
- [ ] Cross-references Phase 3 constructive-output refinement note (lines 140-142, inside Verdicts section).
- [ ] Frames constructive-output as structural test (commitment #6).

**Counter:** What if the closing paragraph is omitted and cross-references are inlined within each block? → Risk: less navigability; harder for practitioners to see the full structural integration at a glance.

### P-ANCILLARY-A — Back-reference at §4 #2 Rubber-Stamping

**Q:** What text gets added to #2's "How to prevent"?
**Verification:**
- [ ] Symmetric to existing #2 cross-reference style (line 330: "For multi-axis prosecution depth..., see Phase 2 / Adversarial Evaluation → Prosecution → Multi-axis prosecution depth check.")
- [ ] Points to the new Phase 0 refinement note.
- [ ] Frames purpose-fitness as the structural prevention.

**Counter:** What if back-references at #2/#3 are unnecessary because the new refinement note's body already mentions them? → No; the back-references make the structural connection bidirectional and visible from both directions (practitioner reading #2 sees the prevention path).

### P-ANCILLARY-B — Back-reference at §4 #3 Nitpicking

**Q:** Same as P-ANCILLARY-A but for #3.
**Verification:** Same as A. **Counter:** Same.

### P-ANCILLARY-E-NEGATIVE — Summary table verification

**Q:** Confirm §6 Summary table needs no update.
**Verification:**
- [ ] No new failure mode added (count stays at 8).
- [ ] No new verdict type added (stays at SURVIVE/REFINE/KILL).
- [ ] No new phase added (stays at Phase 0-4).
- [ ] No vocabulary change at Summary granularity.

**Counter:** What if the Summary's "Process" row should mention the new refinement note? → Summary granularity doesn't list refinement notes; consistent with not mentioning Project-specific risk or Frame-premise test.

### P-ANCILLARY-F-NEGATIVE — SKILL.md verification

**Q:** Confirm SKILL.md needs no update.
**Verification:**
- [ ] Description line (line 3) unchanged.
- [ ] Failure-mode count line (line 10) unchanged (stays at 8).
- [ ] Failure-mode enumeration line (line 42) unchanged.

**Counter:** What if SKILL.md description should mention "severity calibration via purpose-fitness"? → SKILL.md granularity doesn't include refinement-note vocabulary; consistent with prior pattern.

### P-ANCILLARY-C-COULD — Adversarial structure cross-reference

**Q:** Should the Adversarial structure final sentence (line 128) cross-reference the new refinement note?
**Verification:**
- [ ] If yes: a parenthetical cross-reference doesn't bloat the sentence.
- [ ] If no: omitted as COULD with rationale.

**Counter:** What if this cross-reference is more valuable than the structural decision suggested? → Critique adjudicates.

### P-ANCILLARY-D-COULD — Phase 3 constructive-output back-reference

**Q:** Should the Phase 3 constructive-output refinement note add a back-reference to the new Phase 0 refinement note?
**Verification:**
- [ ] If yes: short parenthetical at the end of lines 140-142.
- [ ] If no: omitted as COULD with rationale.

**Counter:** Same as P-ANCILLARY-C-COULD.

### P-LENGTH-VERIFY — Length-bound check

**Q:** Is the assembled refinement note ~15-20 lines?
**Verification:**
- [ ] If within range: PASS.
- [ ] If over: identify which block can be tightened.
- [ ] If under (< 12 lines): identify if any commitment is under-articulated.

**Counter:** What if the length target is wrong? Maybe 25-30 is acceptable. → Sensemaking K10 committed ~15-20; over-elongation risks practitioner-usability (per K10).

### P-DISCIPLINE-INDIVIDUAL-AUDIT — Language audit

**Q:** Does the assembled draft comply with discipline-individual language?
**Verification:**
- [ ] No runner artifacts named (`_branch.md`, `## Synthesis Trigger`, `_state.md`, etc.).
- [ ] No protocol-template fields (`refines:`, `corrects:`, `supersedes:`, `INHERITED-WITHOUT-RE-TEST`, etc.).
- [ ] No sister-discipline-internal section/perspective names (`Frame-exit Completeness perspective`, `ambiguity collapse`, etc.).
- [ ] Only acceptable cross-discipline naming is `/sense-making` (a discipline name, not an internal artifact) in the fallback clause.

**Counter:** What if `/sense-making` shouldn't be named explicitly? Use generic phrasing like "upstream purpose-stabilization." → Defensible per `docs/discipline_edit_tiers.md` but loses operational concreteness; critique will adjudicate.

---

## Step 5 — Interface Map

| From | To | What flows | Direction | Assumption check |
|---|---|---|---|---|
| All Block pieces (1-5) + Header + Check-name + Cross-refs | Assembled refinement-note text | Per-block content text | All-to-one (assembly) | Assumes blocks compose into a single readable note; if any block's tone is incompatible, requires harmonization. |
| Assembled refinement-note text | P-LENGTH-VERIFY | The full text | One-way | Assumes length-counting is automated/inspectable. |
| Assembled refinement-note text | P-DISCIPLINE-INDIVIDUAL-AUDIT | The full text | One-way | Assumes audit can read every clause for coupling violations. |
| Assembled refinement-note text | P-INSERT-POINT (validation) | The full text + insertion line numbers | One-way | Assumes the insertion line numbers are stable across the draft cycle. |
| P-CLOSING-CROSS-REFS | P-ANCILLARY-A + P-ANCILLARY-B | The new refinement note's title/reference handle | One-way (closing → ancillaries) | Assumes the new note's reference handle is stable enough to be referenced from #2/#3. |
| Existence of new refinement note | P-ANCILLARY-E-NEGATIVE + F-NEGATIVE | Confirmation context | One-way | Assumes Summary/SKILL.md granularity is consistent with prior conventions. |

**Assumptions-not-data check:** the load-bearing hidden assumption is "block tone is harmonized." If Innovation generates blocks with mismatched voice (one terse, one verbose; one technical, one casual), assembly produces a stylistically inconsistent note. Mitigation: P-LENGTH-VERIFY and P-DISCIPLINE-INDIVIDUAL-AUDIT serve as tone-coherence backstops.

---

## Step 6 — Dependency Order

**Tier 1 (parallel; no incoming dependencies):**
- P-INSERT-POINT (just verifies location; can be done early).
- P-CHECK-NAME (independent of body content).
- P-BLOCK-1 through P-BLOCK-5 (each block independently draftable from prior-finding commitments).
- P-ANCILLARY-E-NEGATIVE + F-NEGATIVE (independent verifications).

**Tier 2 (depends on Tier 1):**
- P-HEADER (depends on P-CHECK-NAME for the bold check name).
- P-CLOSING-CROSS-REFS (depends on Blocks 4 + 5 for which targets to reference).
- P-ANCILLARY-A (depends on the new refinement note's reference handle existing).
- P-ANCILLARY-B (same as A).

**Tier 3 (depends on Tier 2):**
- Assembled refinement-note text (depends on all Tier 1 + Tier 2 pieces from Cluster A).

**Tier 4 (depends on Tier 3):**
- P-LENGTH-VERIFY (meta-check on assembled text).
- P-DISCIPLINE-INDIVIDUAL-AUDIT (meta-check on assembled text).

**Tier 5 (depends on Tier 4):**
- Final draft (if meta-checks pass) OR revision cycle.

**Optional (independent of all tiers):**
- P-ANCILLARY-C-COULD + P-ANCILLARY-D-COULD (COULDs; decoupled).

No circular dependencies. Tier-parallel work is possible; the assembly is the bottleneck.

---

## Step 7 — Self-Evaluation

### Minimum 3 dimensions

**Independence.** Can each piece be worked on without the others?
- Blocks 1-5 are independent in CONTENT (each encodes a distinct commitment).
- P-INSERT-POINT, P-HEADER, P-CHECK-NAME are independent.
- Ancillaries A-F are independent of each other.
- P-LENGTH-VERIFY and P-DISCIPLINE-INDIVIDUAL-AUDIT depend on the assembled text (meta-checks).

PASS. The dependencies are honest (no hidden coupling); meta-checks are properly tagged.

**Completeness.** Do the pieces cover the spec edit?
- All 5 body blocks + header + check-name + insertion-point + closing cross-refs = full refinement-note.
- Ancillaries A + B (mandatory) + E + F (negative confirms) + C + D (optional) = full ancillary surface.
- Length + discipline-individual audit = full meta-checks.

All 9 prior commitments mapped: #1 → Block 1; #2 → Block 1 (composite reference); #3 (Phase 0 step 4 locus) → P-INSERT-POINT; #4 → Block 2; #5 → Block 3; #6 → Closing cross-ref + Block 3; #7 (confidence orthogonal; INTERIM deferred) → NOT encoded (out of scope; flagged); #8 → Block 4 + Ancillaries A+B; #9 → Block 5.

**Note:** commitment #7 (confidence orthogonal / INTERIM verdict) is explicitly out-of-scope for this refinement note. It belongs to a future structural-layer inquiry on verdict-shape (see prior finding's DEFERRED item).

PASS.

**Reassembly.** Pieces + interfaces = the whole?
- All pieces answered + all interfaces satisfied (block tones harmonized; cross-refs resolve; ancillaries land; meta-checks pass) → the spec edit is fully drafted and ready to apply.

PASS.

### Full 7-dimension evaluation

- **Tractability.** Each piece is small (text fragment or confirmatory verification). PASS.
- **Interface clarity.** All cross-piece flows are explicit; assumptions-not-data check found one load-bearing assumption (block-tone harmonization), backstopped by P-LENGTH-VERIFY + P-DISCIPLINE-INDIVIDUAL-AUDIT. PASS.
- **Balance.** Per-piece complexity is roughly proportional. Block 4 (unification) and Block 1 (semantics) are slightly heavier; meta-checks (Length, Audit) are lighter. Acceptable gradient. PASS.
- **Confidence.** Top-down clusters and bottom-up atoms agree 1:1. HIGH confidence.

ALL 7/7 PASS.

### Failure-mode check

- Premature decomposition: NO (sensemaking SV6 fully stabilized).
- Wrong boundaries: NO (boundaries align with atomic commitments).
- Hidden coupling: NO (assumptions-not-data check identified the block-tone assumption; backstopped).
- Missing pieces: NO (all 9 commitments mapped; #7 explicitly flagged as out-of-scope).
- Over-decomposition: BORDERLINE (17 pieces is high). Each piece is justified by a distinct text fragment OR confirmatory verification; tractability not compromised. Acceptable.
- Ignoring dependencies: NO.
- Imbalanced decomposition: NO (complexity reasonably proportional).

---

## Final Deliverable

### Question Tree (summary)

```
Tier 1 (parallel; no dependencies):
  P-INSERT-POINT
  P-CHECK-NAME
  P-BLOCK-1-SEMANTICS
  P-BLOCK-2-TEST
  P-BLOCK-3-BOUNDARY
  P-BLOCK-4-UNIFICATION
  P-BLOCK-5-FALLBACK
  P-ANCILLARY-E-NEGATIVE
  P-ANCILLARY-F-NEGATIVE
  P-ANCILLARY-C-COULD
  P-ANCILLARY-D-COULD

Tier 2 (depends on Tier 1):
  P-HEADER (after P-CHECK-NAME)
  P-CLOSING-CROSS-REFS (after Blocks 4 + 5)
  P-ANCILLARY-A (after new note has reference handle)
  P-ANCILLARY-B (same as A)

Tier 3 (depends on Tier 2):
  Assembled refinement-note text

Tier 4 (depends on Tier 3):
  P-LENGTH-VERIFY
  P-DISCIPLINE-INDIVIDUAL-AUDIT
```

### Interface Map (summary)

Cluster A pieces flow to the assembled refinement-note text. Cluster B (A+B) and Cluster E (Length, Audit) consume the assembled text. Cluster C (E+F) verifies external non-edits. Cluster D (C+D-COULD) decoupled.

### Dependency Order

Tier 1 → Tier 2 → Tier 3 (assembly) → Tier 4 (meta-checks) → Final draft.

### Self-Evaluation Verdict

7/7 dimensions PASS. 0 active failure modes. 1 borderline (over-decomposition; acceptable given tractability). Verdict: **PROCEED.**

### Open Questions for Innovation

- Per piece: generate at least one candidate text + one Inversion-candidate (the piece-level counter-question is the seed).
- Tone-harmonization across blocks: Innovation should generate blocks with consistent voice/tone aligned with IFP 4a precedent (the most-recent peer note).
- Decisions to make during innovation: (a) whether Block 3 (boundary) folds into Block 2 (test) or stays separate; (b) whether `/sense-making` is named explicitly in Block 5 or generic phrasing is used; (c) which optional ancillaries (C, D) to include as COULDs in the finding.

Innovation produces text candidates per piece; critique adjudicates.
