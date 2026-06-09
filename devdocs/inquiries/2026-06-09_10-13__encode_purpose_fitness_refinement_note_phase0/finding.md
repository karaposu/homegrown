---
status: active
model: claude-opus-4-7[1m]
effort: max
---

# Finding: Spec-Edit Design for the Purpose-Fitness Refinement Note at Phase 0 Step 4 of `td-critique.md` — Ready-to-Apply Text + Mandatory + Optional Ancillary Edits

## Question

From `_branch.md` (`devdocs/inquiries/2026-06-09_10-13__encode_purpose_fitness_refinement_note_phase0/_branch.md`):

This inquiry is the **structural-layer follow-up** to the meaning-layer inquiry at `devdocs/inquiries/2026-06-09_08-14__critique_kill_severity_meta_principle/finding.md`, which articulated PURPOSE-FITNESS as the meta-principle of severity in `/td-critique` (the Structural Critique discipline whose spec lives at `cognitive_harness/td-critique/references/td-critique.md`). The user chose Option A from that finding's §9 — encode the principle in the spec — and triggered this inquiry to design the exact spec edit.

**The question.** What is the precise structural shape of the spec edit — insertion point, refinement-note text body, sub-clauses, cross-references to existing entries, and any ancillary edits to other parts of `td-critique.md` or `SKILL.md` — for encoding the PURPOSE-FITNESS meta-principle as a refinement note at Phase 0 step 4 (Weight dimensions) of `td-critique.md`, given the meaning is already settled by the prior inquiry?

**Goal.** A ready-to-apply Tier 1 Surgical SS (single-spec) refinement note, classified per `docs/discipline_edit_tiers.md`; structurally clean (discipline-individual language; no coupling to runner / protocol / sister-discipline internal artifacts); peer-compositional with the two existing Phase 0 refinement notes (Project-specific risk dimension check; Frame-premise test from the just-applied IFP work); cross-references resolving to existing failure-mode entries (#2 Rubber-Stamping; #3 Nitpicking) and existing constructive-output refinement note (lines 140-142). Plus identified ancillary edits.

**Layer commitment.** STRUCTURAL primary. Meaning settled by prior inquiry; this inquiry produces the spec edit's shape. Process layer (runtime behavior of how the test fires during real critique invocations) is sequential follow-up after spec adoption.

## Finding Summary

- **The deliverable is a refinement-note text + three mandatory ancillary edits + one optional ancillary edit.** All edits are surgical (Tier 1 per `docs/discipline_edit_tiers.md`); backward compatible; trivially reversible.

- **The refinement-note text is ~24 lines** comprising: an italicized header naming the locus (Phase 0 step 4 — Weight dimensions); a bold check name (**Purpose-fitness test.**); four content paragraphs covering (a) purpose-fitness as the structural meaning of dimension-weighting; (b) the 1-question practitioner test plus the REFINE/KILL fixability-within-frame distinction; (c) the #2/#3 unification as opposite-direction violations plus the constructive-output cross-reference; (d) the defer-with-direction fallback for ambiguous-purpose candidates.

- **Three structural decisions made during innovation, all preserved by critique.** Block 3 (REFINE/KILL boundary) is FOLDED into the end of Block 2 (the 1-question test paragraph) — the boundary is preserved as the final sentence of the operational test. The closing cross-references are FOLDED into the end of Block 4 (the unification paragraph) — the cross-refs to #2, #3, and Verdicts → Constructive requirement are inlined. `/sense-making` is named explicitly in Block 5 — this is allowed because the discipline-individual principle in `docs/discipline_edit_tiers.md` forbids naming *internal artifacts* of sister disciplines, not their *names*.

- **One critique-driven refinement: promote Ancillary D from COULD to RECOMMENDED.** Critique's frame-premise prosecution found that single-locus encoding at Phase 0 is structurally sufficient ONLY if a back-reference is also added at Phase 3 (the existing constructive-output refinement note at `td-critique.md` lines 140-142). Without that back-reference, practitioners reading Phase 3 cold see the seed-extraction as an isolated requirement rather than as the structural test of severity. Promoting D from optional COULD to RECOMMENDED closes the integration gap.

- **Mandatory ancillary edits: A + B + D.** Ancillary A adds a back-reference at §4 #2 Rubber-Stamping's "How to prevent" pointing to the new Phase 0 refinement note and naming #2 as the opposite-direction violation of #3 under purpose-fitness. Ancillary B does the symmetric edit at §4 #3 Nitpicking, naming #3 as the opposite-direction violation of #2 (with the specific phrase *"nitpicking-creep at construction time"* surfacing the practical concern that motivated the whole work). Ancillary D adds a back-reference at the Phase 3 constructive-output refinement note pointing to the new Phase 0 refinement note as the source of the structural-test framing.

- **Optional ancillary edit (COULD): C.** Adding a cross-reference to the Adversarial structure final sentence (line 128 of `td-critique.md`) surfacing the #2/#3 structural unity at that location. Optional because the unification is already encoded inline in the new Block 4 and back-referenced from #2 and #3 entries; C is soft coherence.

- **Two verified-no-edit ancillaries (E + F).** The §6 Summary table needs no update (no new failure mode added; no new verdict type; no new phase). `td-critique/SKILL.md` needs no update (description granularity doesn't include refinement notes).

- **All 9 prior-finding commitments verified.** Eight of nine are encoded faithfully in the spec edit. Commitment #7 (confidence orthogonal; INTERIM verdict deferred) is explicitly OUT OF SCOPE for this spec edit per the prior finding's DEFERRED item; the encoded text correctly makes no claims about confidence that would conflict with future INTERIM verdict adoption.

- **The user's choice: apply the edit as designed.** The final design is a single coherent spec change consisting of the new refinement note + Ancillaries A + B + D (mandatory) + optionally C (user discretion). If applied, this completes the structural follow-up named in the prior meaning-layer finding's §9 Option A.

## Finding

### Context

This inquiry continues from the meaning-layer inquiry on critique severity at `devdocs/inquiries/2026-06-09_08-14__critique_kill_severity_meta_principle/finding.md` (referred to as "the prior finding" below). The prior finding articulated the PURPOSE-FITNESS meta-principle: **a defect in a candidate is kill-worthy iff, left in place, it fatally prevents the candidate from doing what the candidate is supposed to do.** That meaning was settled in 10 sections + a self-test; the user chose Option A from §9 — encode the principle in the spec — triggering this inquiry to design the spec edit's exact shape.

This inquiry committed STRUCTURAL primary in its `_branch.md`. The meaning is treated as inherited commitment, not re-articulated. Process layer (runtime behavior of how practitioners run the new check during real invocations) is sequential follow-up after spec adoption.

The codebase context includes two recently-applied edits that serve as PRECEDENTS for this inquiry's spec edit:

- The **IFP 4a Frame-premise test refinement note** at `td-critique.md` lines 180-190 (added during the Inherited-Frame Preservation inquiry's adoption). Same Phase 0 attachment point; same italicized-header + bold-check-name + multi-paragraph-body + closing-cross-reference structure.
- The **Axis Absence Tier 2 §4 entry #8** at `td-critique.md` lines 372-386 (added during the Axis Absence inquiry's adoption). Provides cross-reference precedent for §4 entries.

The user also has `docs/discipline_edit_tiers.md` — an inquiry-agnostic vocabulary doc for tier-classified spec edits. The new refinement note is **Tier 1 Surgical SS** (single-spec; refinement-note pattern) per that vocabulary.

### 1. The refinement-note text — ready to apply

The exact text to insert into `td-critique.md` between line 190 (the end of the IFP 4a Frame-premise test refinement note's closing paragraph) and line 192 (the beginning of *"Phase 0 is the meta-critique component..."*), with one blank line above and below to match the spacing of the existing Phase 0 refinement notes:

```markdown
*Refinement note (applies at Phase 0 Dimension Construction's step 4 — Weight dimensions):*

**Purpose-fitness test.** A dimension's weight is critical when its failure would prevent the candidate from doing what the candidate is supposed to do; weight is non-critical when its failure would not. This makes the spec's existing *"weights come from the problem context"* structurally concrete: weighting is calibrated by purpose-fitness. Per-task richness — what counts as fulfilling purpose for this specific candidate (reversibility, blast-radius, scope, fixability, evidence-strength, and any domain-specific axes) — lives within the weighting decision, not above it.

When evaluating a candidate's defect, the practitioner-applicable form is one question: **"If this defect were left in place, would the candidate still do what it's supposed to do — sufficiently, not just degraded?"** YES → not kill-worthy (note as a caveat on SURVIVE, or REFINE if a known better in-frame variant exists). NO → kill-worthy. Within kill-worthy, REFINE when the candidate's existing frame can absorb the fix; KILL when the fix requires replacing the candidate's frame entirely.

This single test prevents both Failure Mode #2 Rubber-Stamping (severe defect under-killed) and Failure Mode #3 Nitpicking (non-severe defect over-killed) — opposite-direction violations of the same purpose-fitness principle. The constructive-output requirement on KILL (see Verdicts → Constructive requirement) is the structural test of whether a KILL is supported: a kill-worthy defect can be articulated as the specific reason the candidate's frame prevents purpose-fulfillment, and that articulation IS the seed. Inability to extract a seed signals the KILL is unsupported — re-examine before rendering.

When a candidate's purpose is ambiguous (exploratory ideation; research-frontier candidates), the test cannot be applied. Render a defer-with-direction verdict naming the ambiguity and pointing back to upstream purpose-stabilization (e.g., `/sense-making` in the runner being used) rather than silently refusing or applying a modified test.
```

### 2. Ancillary edits (mandatory)

#### Ancillary A — back-reference at §4 #2 Rubber-Stamping

Append to the end of `td-critique.md` line 330 (the closing sentence of #2's "How to prevent" field):

> For the underlying severity-calibration that makes prosecution-strength meaningful, see Phase 0 / Dimension Construction → Purpose-fitness test refinement note (Rubber-Stamping is the opposite-direction violation of #3 Nitpicking under the same principle).

This makes the structural connection visible from the #2 entry. Parallel in style to the existing cross-reference at line 330 pointing to the Multi-axis prosecution depth check.

#### Ancillary B — back-reference at §4 #3 Nitpicking

Append to the end of `td-critique.md` line 338 (the closing sentence of #3's "How to prevent" field):

> For the underlying severity-calibration that makes critical-weight meaningful (and prevents nitpicking-creep at construction time), see Phase 0 / Dimension Construction → Purpose-fitness test refinement note (Nitpicking is the opposite-direction violation of #2 Rubber-Stamping under the same principle).

Symmetric to Ancillary A. The phrase *"nitpicking-creep at construction time"* preserves the practical concern that motivated this entire work (it surfaces in the prior conversation that triggered the meaning-layer inquiry).

#### Ancillary D — back-reference at the Phase 3 constructive-output refinement note

Append to the end of `td-critique.md` lines 140-142 (the constructive-output refinement note inside the Verdicts subsection):

> The constructive-output requirement is also the structural test of severity at Phase 0 (see Phase 0 / Dimension Construction → Purpose-fitness test refinement note); inability to extract a seed signals the KILL is unsupported.

This was originally generated as a soft COULD by Innovation but was **promoted to RECOMMENDED-mandatory by Critique** after the frame-premise prosecution showed that without it, practitioners reading Phase 3 cold see seed-extraction as an isolated operational requirement, missing the structural-test framing the prior finding's §5 established. Adopting D closes the only PARTIAL on the inquiry's frame-premise robustness check.

### 3. Ancillary edit (optional, COULD)

#### Ancillary C — Adversarial structure cross-reference

Optional update to `td-critique.md` line 128's final sentence. Current: *"The adversarial structure prevents two of critique's worst failure modes: rubber-stamping (prosecution too weak — everything passes) and nitpicking (defense absent — everything fails on minor issues)."*

Updated:

> The adversarial structure prevents two of critique's worst failure modes: rubber-stamping (prosecution too weak — everything passes) and nitpicking (defense absent — everything fails on minor issues). Both are opposite-direction violations of the purpose-fitness test at Phase 0 (see Phase 0 / Dimension Construction → Purpose-fitness test refinement note).

**Why optional.** The unification is already encoded inline in the new Block 4 and back-referenced from #2 and #3 entries. Adding C surfaces unity at the Adversarial structure paragraph — soft coherence. The user can adopt at discretion; the structural design is operationally complete without it.

### 4. Verified-no-edit ancillaries

- **Ancillary E — §6 Summary table.** Verified: no new failure mode added (count stays at 8); no new verdict type added (stays at SURVIVE/REFINE/KILL); no new phase added (stays at Phase 0-4). No edit needed.
- **Ancillary F — `td-critique/SKILL.md`.** Verified: description line, pre-read line (line 10), reference-loading line (line 42) all unchanged. Refinement notes are not enumerated at SKILL.md granularity. No edit needed.

### 5. The folding decisions, made and preserved

During innovation, two structural foldings emerged from piece-level inversion-candidates:

- **Block 3 (REFINE/KILL boundary) folded into Block 2 (1-question test).** The boundary is now the final sentence of the 1-question-test paragraph: *"Within kill-worthy, REFINE when the candidate's existing frame can absorb the fix; KILL when the fix requires replacing the candidate's frame entirely."* This is structurally cleaner than a separate Block 3; the boundary is preserved at the moment it's operationally needed (right after the practitioner concludes "kill-worthy"). Critique verified content fidelity: PASS.
- **Closing cross-references folded into Block 4 (#2/#3 unification).** The cross-references to #2, #3, and Verdicts → Constructive requirement are inlined in the unification paragraph. Critique noted mild concern about paragraph density but verified content cohesion (the three contents are mutually reinforcing): SURVIVE with mild caveat — monitor practitioner reception post-adoption; split if operationally unreadable.

### 6. Discipline-individual language compliance

Critique re-tested innovation's discipline-individual audit, with attention to whether `/sense-making` may be named in Block 5's defer-with-direction clause.

`docs/discipline_edit_tiers.md` lists forbidden coupling examples — `_branch.md` (runner artifact); `## Synthesis Trigger` (runner-template feature); `refines:` / `corrects:` / `supersedes:` (CONCLUDE-template frontmatter fields); `Frame-exit Completeness perspective` (a `/sense-making` spec-INTERNAL name). All are internal artifacts, not discipline names. Naming `/sense-making` (the discipline itself, not its internal sections) is allowed.

The defer-with-direction operationally NEEDS to point at a discipline; the generic alternative ("upstream purpose-stabilization") was tested by Innovation as the inversion-candidate and lost on operational concreteness. The example phrasing in the draft (`e.g., /sense-making in the runner being used`) is honest about runner-variability — different runners may use different upstream disciplines for purpose-stabilization.

**Audit verdict:** PASS. The text complies with the discipline-individual principle.

### 7. The 9 prior-finding commitments — verification

Per the prior finding's §1-§9, this inquiry inherited 9 commitments. Each was mapped to a location in the spec edit during decomposition; critique verified each one's encoding:

| # | Commitment | Encoding location | Verification |
|---|---|---|---|
| 1 | Purpose-fitness as meta-principle | Block 1 (semantics paragraph) | PASS — "A dimension's weight is critical when its failure would prevent the candidate from doing what the candidate is supposed to do..." |
| 2 | Composite calibration per-task | Block 1 (axes list) | PASS — "(reversibility, blast-radius, scope, fixability, evidence-strength, and any domain-specific axes)" |
| 3 | Phase 0 step 4 locus | Header trigger | PASS — "applies at Phase 0 Dimension Construction's step 4 — Weight dimensions" |
| 4 | 1-question test | Block 2 (test paragraph) | PASS — verbatim |
| 5 | REFINE/KILL fixability-within-frame | Block 2 final sentence (folded from Block 3) | PASS — "Within kill-worthy, REFINE when... KILL when..." |
| 6 | Constructive-output as structural test | Block 4 + Ancillary D | PASS — "The constructive-output requirement on KILL (see Verdicts → Constructive requirement) is the structural test..." |
| 7 | Confidence orthogonal; INTERIM verdict deferred | Out of scope per decomposition | PASS — text correctly makes no claims about confidence; INTERIM verdict remains deferred per prior finding's DEFERRED item |
| 8 | #2/#3 unification | Block 4 + Ancillaries A + B + (optional C) | PASS — "opposite-direction violations of the same purpose-fitness principle"; back-references at #2 + #3 |
| 9 | Defer-with-direction for ambiguous purpose | Block 5 | PASS — "When a candidate's purpose is ambiguous... Render a defer-with-direction verdict..." |

Eight of nine commitments encoded; one (commitment #7) correctly excluded as out-of-scope per the prior finding's own DEFERRED item.

### 8. Frame-premise prosecution outcome

Per the IFP 4a Frame-premise test refinement note (which now applies at Phase 0 of `td-critique.md`), this inquiry's critique ran what-if-wrong prosecutions on three load-bearing inherited frame premises:

- **Premise (a):** The 9 prior commitments are correctly encodable as text. **PASS** — per-commitment verification confirms encoding fidelity.
- **Premise (b):** IFP 4a is the right template precedent. **PASS** — the purpose-fitness content has 4 distinct aspects requiring multi-paragraph structure; IFP 4a's multi-paragraph style fits, Project-specific risk's single-sentence style doesn't.
- **Premise (c):** Single-locus encoding at Phase 0 is sufficient. **PARTIAL** — without Ancillary D, practitioners reading Phase 3 cold don't see structural connection back to purpose-fitness. **Resolution: promote Ancillary D from COULD to RECOMMENDED** — this closes the only PARTIAL.

After the resolution, the frame-premise prosecution PASSES 3/3.

### 9. The user's adoption path

To apply the spec edit:

1. **Insert the refinement-note text** into `td-critique.md` at the location specified in §1 (after line 190, before line 192).
2. **Apply Ancillary A** at line 330 of `td-critique.md`.
3. **Apply Ancillary B** at line 338 of `td-critique.md`.
4. **Apply Ancillary D** at lines 140-142 of `td-critique.md`.
5. **Optionally apply Ancillary C** at line 128 of `td-critique.md` (user discretion).
6. **No edit** to `td-critique.md` §6 Summary table.
7. **No edit** to `cognitive_harness/td-critique/SKILL.md`.

All edits are additive; backward compatibility is preserved; reversal is trivial (delete the additions).

After application, the spec encodes the purpose-fitness meta-principle at its structural locus (Phase 0 step 4), surfaces the unification of #2 and #3 inline + at both failure-mode entries, and integrates the constructive-output requirement at Phase 3 as the structural test of severity. Practitioner-facing: a new check at Phase 0 fires when weighting dimensions, providing the 1-question test as the operational form of severity calibration.

### 10. Self-application — does this inquiry's spec edit pass the just-articulated purpose-fitness test?

This inquiry's purpose: produce a ready-to-apply spec edit encoding the PURPOSE-FITNESS principle.

Self-test: does the edit do what this inquiry is supposed to do?
- Encodes 8 of 9 inherited commitments (#7 correctly excluded) — yes.
- Composes peer-to-peer with existing Phase 0 refinement notes — yes.
- Cross-references resolve to existing entries — yes.
- Discipline-individual language compliant — yes.
- Frame-premise robustness 3/3 PASS after Ancillary D promotion — yes.
- Tier 1 Surgical SS per `docs/discipline_edit_tiers.md` — yes.

No defect blocks the edit from doing what this inquiry is supposed to do. The edit SURVIVES its own application of the purpose-fitness principle. **Self-test verdict: SURVIVES.**

Caveat: per the prior finding's §10 acknowledgment, self-application of articulation-producing inquiries has tautology risk. The real validation is the practitioner-experience after adoption — does the spec edit actually improve `/td-critique` invocations in practice? That belongs to the prior finding's COULD #2 (empirical validation inquiry).

## Inherited Commitments Re-test

This inquiry's `_branch.md` did not declare a formal Synthesis Trigger (only ONE prior, not TWO OR MORE; threshold not met). However, the inquiry inherits 9 commitments from the prior meaning-layer finding; per the spirit of CONCLUDE's Synthesis re-test enforcement, the re-test is recorded here.

### From `devdocs/inquiries/2026-06-09_08-14__critique_kill_severity_meta_principle/finding.md`

- **Commitment #1:** Purpose-fitness as meta-principle of severity (single-axis at meta-level).
  - **Re-test status:** RE-TESTED.
  - **Evidence:** Encoded in Block 1's semantics paragraph; structural framing preserved.

- **Commitment #2:** Per-task calibration is composite (reversibility × blast-radius × scope × fixability × evidence-strength).
  - **Re-test status:** RE-TESTED.
  - **Evidence:** Encoded as the parenthetical axes-list in Block 1; explicitly framed as "lives within the weighting decision, not above it" preserving the meta-level/calibration-layer distinction.

- **Commitment #3:** Severity-calibration locus is Phase 0 step 4 (Weight dimensions).
  - **Re-test status:** RE-TESTED.
  - **Evidence:** Encoded in the refinement note's italicized header trigger; verified against `td-critique.md` line 173.

- **Commitment #4:** The 1-question practitioner test.
  - **Re-test status:** RE-TESTED.
  - **Evidence:** Encoded verbatim in Block 2: *"If this defect were left in place, would the candidate still do what it's supposed to do — sufficiently, not just degraded?"*

- **Commitment #5:** REFINE/KILL distinction is fixability-within-frame.
  - **Re-test status:** RE-TESTED.
  - **Evidence:** Encoded in Block 2's final sentence (folded from a separate Block 3 during innovation): *"Within kill-worthy, REFINE when the candidate's existing frame can absorb the fix; KILL when the fix requires replacing the candidate's frame entirely."*

- **Commitment #6:** Constructive-output requirement is integral structural test (inability to extract seed = unsupported KILL).
  - **Re-test status:** RE-TESTED.
  - **Evidence:** Encoded in Block 4 + Ancillary D. Block 4 says *"The constructive-output requirement on KILL (see Verdicts → Constructive requirement) is the structural test of whether a KILL is supported... Inability to extract a seed signals the KILL is unsupported — re-examine before rendering."* Ancillary D (promoted from COULD to RECOMMENDED by critique) adds a back-reference at Phase 3 closing the integration gap.

- **Commitment #7:** Confidence is orthogonal to severity (INTERIM verdict deferred to future inquiry).
  - **Re-test status:** RE-TESTED with OUT-OF-SCOPE flag.
  - **Evidence:** The encoded text makes no claims about confidence; INTERIM verdict not introduced. This is consistent with the prior finding's DEFERRED item ("Add an INTERIM verdict to `/td-critique`'s verdict triplet"). The spec edit is forward-compatible with future INTERIM verdict adoption.

- **Commitment #8:** #2 Rubber-Stamping and #3 Nitpicking are opposite-direction violations of the same principle.
  - **Re-test status:** RE-TESTED.
  - **Evidence:** Encoded in Block 4 + Ancillary A + Ancillary B + (optional) Ancillary C. The unification is surfaced inline at Phase 0, at both §4 entries, and optionally at the Adversarial structure paragraph.

- **Commitment #9:** Defer-with-direction is the operational response for ambiguous-purpose candidates.
  - **Re-test status:** RE-TESTED.
  - **Evidence:** Encoded in Block 5: *"When a candidate's purpose is ambiguous (exploratory ideation; research-frontier candidates), the test cannot be applied. Render a defer-with-direction verdict naming the ambiguity and pointing back to upstream purpose-stabilization (e.g., `/sense-making` in the runner being used)..."*

### Aggregate re-test summary

- RE-TESTED commitments: 9 (all). Specifically: 8 encoded in spec edit text; 1 (#7) correctly out-of-scope with forward-compatibility verified.
- INHERITED-WITHOUT-RE-TEST commitments: 0.
- Refinements during inheritance: 1 (Ancillary D promoted from COULD to RECOMMENDED by critique to close the integration gap on commitment #6).
- Silent absorption: NONE.

## Next Actions

### MUST

- **What:** Apply the refinement-note text (§1 of this finding) to `cognitive_harness/td-critique/references/td-critique.md` at the insertion point (between line 190 and line 192, with one blank line above and below to match peer-note spacing).
- **Who:** The user or a future spec-editor agent acting on user authorization.
- **Gate:** Condition-bound — when the user confirms readiness to apply the edit. The text has been adversarially critiqued; no blocking concerns remain.
- **Why:** Encodes the PURPOSE-FITNESS meta-principle from the prior meaning-layer finding into the canonical spec, making the principle accessible to all future practitioners directly from `td-critique.md` rather than requiring them to read this finding chain.

- **What:** Apply Ancillary A (§2 of this finding) at `td-critique.md` line 330 — back-reference at §4 #2 Rubber-Stamping's "How to prevent."
- **Who:** Same as above.
- **Gate:** Same gate as the MUST above (these edits are a single coherent change to be applied together).
- **Why:** Makes the structural connection between #2 and the new refinement note visible from the #2 entry. Closes the bidirectional cross-reference.

- **What:** Apply Ancillary B (§2 of this finding) at `td-critique.md` line 338 — back-reference at §4 #3 Nitpicking's "How to prevent."
- **Who:** Same as above.
- **Gate:** Same gate as MUST above.
- **Why:** Symmetric to Ancillary A; closes the bidirectional cross-reference for #3 and preserves the "nitpicking-creep at construction time" framing that surfaces the practical concern motivating the work.

- **What:** Apply Ancillary D (§2 of this finding) at `td-critique.md` lines 140-142 — back-reference at the Phase 3 constructive-output refinement note pointing to the new Phase 0 refinement note.
- **Who:** Same as above.
- **Gate:** Same gate as MUST above. **CRITIQUE PROMOTED THIS FROM COULD TO MUST** — the frame-premise prosecution found single-locus encoding insufficient without this back-reference.
- **Why:** Closes the integration gap. Practitioners reading Phase 3 cold see the constructive-output as the structural test of severity at Phase 0, not as an isolated operational requirement.

### COULD

- **What:** Apply Ancillary C (§3 of this finding) at `td-critique.md` line 128 — cross-reference at the Adversarial structure final sentence surfacing the #2/#3 structural unity.
- **Who:** The user (discretion-based).
- **Gate:** Condition-bound — when the user wants the unification surfaced at the Adversarial structure overview as well as inline in Block 4 + back-references at #2/#3 entries.
- **Why:** Soft structural coherence. The unification is already encoded in three places; adding C makes a fourth surface for it.

- **What:** After spec adoption, optionally run a process-layer follow-up inquiry on the runtime behavior of the new refinement note. Specifically: when in a real `/td-critique` invocation does the 1-question test fire (per defect? once per candidate? both)? How does the defer-with-direction verdict integrate operationally with the existing SURVIVE/REFINE/KILL triplet — is it a 4th verdict at runtime, or a SURVIVE-with-direction caveat?
- **Who:** Future MVLw inquiry author.
- **Gate:** Condition-bound — after spec adoption AND after the prior finding's DEFERRED INTERIM verdict question is also resolved (the two questions interact at the verdict-shape layer).
- **Depends-on:** MUST item "Apply the refinement-note text" (this COULD presupposes the spec edit is in effect). GATED.
- **Why:** The structural-layer encoding is complete; runtime-behavior design is the natural next layer. Practitioner-experience data from real adoption informs the runtime design.

- **What:** After spec adoption, optionally run the prior finding's COULD #2 (empirical validation inquiry): pick 5-10 closed inquiries from `devdocs/inquiries/`, re-critique them with the new refinement note applied, and compare to the original critique verdicts.
- **Who:** Future MVLw inquiry author.
- **Gate:** Condition-bound — after spec adoption + sufficient time for at least a few real `/td-critique` invocations to use the new note.
- **Depends-on:** MUST item "Apply the refinement-note text." GATED.
- **Why:** Independent empirical grounding for the meta-principle and its encoding. Closes the residual on the self-applicability test (per the prior finding §10's known caveat).

### DEFERRED

- **What:** Resolve the INTERIM verdict question (whether `/td-critique` should add a 4th verdict for insufficient-evidence cases).
- **Gate:** Revival trigger from the prior finding's DEFERRED item — observable: after the structural-layer encoding ships, if practitioners report (over ~10 invocations) that SURVIVE-with-caveats is being over-applied to insufficient-evidence cases, OR if Phase 2 re-runs are under-triggered, revive.
- **Why (if revived):** Provides explicit structural handling for evidence-insufficient cases, analogous to `/innovate`'s DEFERRED disposition. The spec edit produced by this inquiry is forward-compatible with INTERIM verdict adoption (no commitments made that would conflict).

## Reasoning

### Why the IFP 4a template was the right precedent

Sensemaking adjudicated this in Phase 2's codebase-precedent perspective. IFP 4a's structure (italicized header + bold check name + multi-paragraph body + closing cross-reference paragraph) fits content with multiple distinct aspects. The alternative — Project-specific risk's terser single-sentence style — works for single-check content but would force purpose-fitness's 4-aspect content into a run-on. Critique's frame-premise prosecution premise (b) re-confirmed the choice: PASS.

### Why Block 3 was folded into Block 2

Innovation's piece-level inversion for P-BLOCK-3-BOUNDARY surfaced the folding question. The folded form ("Within kill-worthy, REFINE when... KILL when...") places the boundary at the moment the practitioner operationally needs it — right after concluding "kill-worthy" from the 1-question test. A separate Block 3 paragraph would have added a paragraph break without adding structural clarity. Critique verified content fidelity: the boundary is preserved.

### Why closing cross-refs were folded into Block 4

Same pattern as Block 3 → Block 2. The unification and the constructive-output cross-reference are mutually reinforcing structural content (both #2 and #3 are prevented by the same purpose-fitness test, AND the constructive-output IS the structural test of whether the verdict is real). Folding produces one structurally cohesive paragraph rather than two separate paragraphs. Critique noted mild density concern but verified content cohesion.

### Why `/sense-making` was named explicitly in Block 5

`docs/discipline_edit_tiers.md`'s discipline-individual principle forbids naming sister-discipline INTERNAL ARTIFACTS, not discipline NAMES. The examples in the principle (`_branch.md`, `## Synthesis Trigger`, `refines:`/`corrects:`/`supersedes:`, `Frame-exit Completeness perspective`) are all internal artifacts. The defer-with-direction operationally NEEDS to point at a discipline; the generic alternative ("upstream purpose-stabilization") loses concreteness. The example phrasing `e.g., /sense-making in the runner being used` is honest about runner-variability (not all runners may use `/sense-making`; some may use a different upstream discipline for purpose-stabilization).

### Why Ancillary D was promoted from COULD to MUST

Critique's frame-premise prosecution premise (c) ("single-locus encoding at Phase 0 is sufficient") found PARTIAL. Without D, a practitioner reading Phase 3 cold sees the constructive-output as an isolated operational requirement, not as the structural test of severity. The prior finding's §5 established constructive-output AS test; if the spec edit doesn't make that visible at Phase 3, the integration is incomplete.

Promoting D from COULD to MUST closes the PARTIAL. The cost is small (~1 sentence at Phase 3); the structural payoff is significant (closes the integration loop). Critique's REFINE verdict on the assembled refinement-note text was contingent on D being promoted; with the promotion, the assembled deliverable SURVIVES on all critical dimensions.

### Why Ancillary C stayed as COULD

The #2/#3 unification is already encoded inline in Block 4 + back-referenced from #2 and #3 entries. Adding C surfaces unity at a 4th location (Adversarial structure paragraph). This is soft coherence — the structural integration is complete without it. User discretion.

### Self-reference mitigation

This inquiry IS spec-design for the same discipline that produces the meta-principle being encoded. Self-reference risk is real. Mitigation:

- External precedents (IFP 4a; Project-specific risk dimension check; `docs/discipline_edit_tiers.md`) anchor structural decisions outside critique's own logic.
- Innovation's discipline-individual audit was adversarially re-tested by Critique.
- The frame-premise test (also from outside this inquiry — from the just-applied IFP work) ran what-if-wrong prosecutions on 3 inherited premises.
- Self-applicability check (§10 of this finding) explicitly acknowledges tautology risk and recommends empirical validation as the proper resolution.

Self-reference present; externally grounded. Acceptable residual.

## Open Questions

### Monitoring

- **Adoption decision.** Whether the user applies the MUST items A + Ancillary A + B + D as a single coherent edit, and whether they additionally apply Ancillary C. The choice is information about the user's preference for structural-coherence-coverage.
- **Block 4 paragraph density post-adoption.** Critique flagged mild concern about Block 4 doing triple duty (unification + constructive-output cross-ref + 3 cross-references inlined). Monitor practitioner reception over the first ~5 real invocations using the new note; if the paragraph is reported as operationally unreadable, split Block 4 into two paragraphs (one for unification + #2/#3 cross-refs; one for constructive-output framing + cross-ref).
- **Length acceptability post-adoption.** ~24 lines is at the upper-end of the target range. If practitioners report Phase 0 feels overloaded (three refinement notes accumulating), reconsider whether the three notes need consolidation OR if one of the existing notes can be tightened.

### Blocked

- **Process-layer design.** The runtime behavior of the new refinement note (per-defect vs per-candidate firing; integration with verdict triplet at runtime) cannot be designed at the meaning + structural layer alone — it depends on real practitioner experience. Blocked until adoption + ~5-10 real invocations produce experiential data.

### Research Frontiers

- **Negative-purpose candidates.** Per the prior finding's DEFERRED items: candidates whose purpose is to NOT do something. Currently flagged as frontier; not addressed by this spec edit. The spec edit doesn't preclude future articulation of this case.
- **Purpose-evolution candidates.** Same status. Not addressed; not precluded.

### Refinement Triggers

- **If empirical validation (prior finding's COULD #2) reveals the principle's adoption produces > 20% verdict reversal on closed inquiries**, investigate whether the divergences are (a) original-critique errors corrected by the principle, (b) principle over-application (false-positive killings), or (c) a structurally novel axis the principle doesn't cover. The spec edit may need refinement based on the outcome.
- **If a fourth axis-absence sub-mechanism is observed in real applications** of the purpose-fitness test (i.e., a case where the test misses a real failure), the meta-principle's structural completeness needs re-examination. The spec edit may need an additional sub-check.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
a separate MVLw inquiry to encode the principle as a
  refinement note at Phase 0 step 4 of td-critique.md;

lets do this
```

</details>
