# Branch: encode_purpose_fitness_refinement_note_phase0

## Question

- **Subject** — encoding the PURPOSE-FITNESS severity meta-principle (articulated in the prior meaning-layer inquiry at `devdocs/inquiries/2026-06-09_08-14__critique_kill_severity_meta_principle/finding.md`) into `cognitive_harness/td-critique/references/td-critique.md` as a refinement note at Phase 0 step 4 (Weight dimensions).
- **Action** — design: produce a ready-to-apply spec edit.
- **Level** — discipline-spec artifact (`td-critique.md`); specifically Phase 0 Dimension Construction.
- **Observation targets**:
  1. **Where exactly** the refinement note attaches — Phase 0 step 4 (Weight dimensions) per the prior finding; verify precise insertion point relative to existing Phase 0 refinement notes (Project-specific risk dimension check; Frame-premise test).
  2. **What structural shape** the refinement note takes — trigger condition, body (the meta-principle articulation), sub-checks if applicable, cross-references.
  3. **What wording** the note uses — must encode: purpose-fitness as the structural meaning of dimension-weighting; the 1-question practitioner test; the REFINE/KILL fixability-within-frame distinction; the #2 Rubber-Stamping + #3 Nitpicking unification as opposite-direction violations; the constructive-output requirement as integral structural test; defer-with-direction handling for ambiguous-purpose candidates.
  4. **Cross-references** the note should make — to existing failure-mode entries (#2, #3); to Phase 3 Verdict + Constructive Output's existing constructive-output refinement note; to existing Phase 0 refinement notes for compositional clarity.
  5. **Ancillary edits** required — whether §4 entries #2 / #3 should be updated to cross-reference back to the new refinement note; whether the Summary table needs update; whether SKILL.md description needs update.
- **Deliverable shape** — concrete spec-edit drafts (refinement note text + any ancillary edit drafts) + plus/minus per draft alternative + tier classification per `docs/discipline_edit_tiers.md` (Tier 1 Surgical = refinement-note pattern is the inherited default).

**The question.** What is the precise structural shape — insertion point, body wording, sub-check structure, cross-references, and ancillary edits — for encoding the PURPOSE-FITNESS severity meta-principle as a refinement note at Phase 0 step 4 of `td-critique.md`, given the meaning is already settled by the prior inquiry?

## Goal

- **Criterion** — structurally clean: discipline-individual per `docs/discipline_edit_tiers.md` (no coupling to runner/protocol/sister-discipline internals); composes peer-to-peer with existing Phase 0 refinement notes (Project-specific risk dimension check; Frame-premise test) without scope-overlap; cross-references existing failure modes (#2, #3) and Phase 3 constructive-output refinement note correctly.
- **Use case** — apply the spec edit to `cognitive_harness/td-critique/references/td-critique.md`, after user review/confirmation. The deliverable is the EXACT TEXT to insert + any other files that need changes (Summary table, SKILL.md).
- **Desired outcome** — a ready-to-apply refinement-note draft, classified as Tier 1 Surgical per `docs/discipline_edit_tiers.md`; cross-references identified; ancillary edits identified; backward compatibility verified.
- **What would fail** — a draft that (a) overlaps existing Phase 0 refinement notes (Project-specific risk dimension check; Frame-premise test); (b) introduces coupling to runner-template features or sister-discipline-internal artifacts (violates `docs/discipline_edit_tiers.md` discipline-individual principle); (c) requires structural changes beyond Phase 0 step 4 (e.g., new sub-phase, new top-level section, restructured §4) — those would be Tier 2 or Tier 3 edits and out of scope for this inquiry; (d) doesn't address all 6 commitments from the prior finding's Section 9 Option A (purpose-fitness as weighting semantics; 1-question test; REFINE/KILL distinction; #2/#3 unification; constructive-output integrality; defer-with-direction for ambiguous purpose).

## Source Input

```text
a separate MVLw inquiry to encode the principle as a
  refinement note at Phase 0 step 4 of td-critique.md;

lets do this
```

## Scope Check

Question covers goal. The question explicitly targets the spec-edit's structural shape; the goal is a ready-to-apply draft + ancillary edits + tier classification. Scope is bounded to the structural layer at Phase 0 step 4 of `td-critique.md`.

**Specific-vs-pattern check.** The question is bounded to ONE specific edit at ONE specific locus. The "broader pattern" framing would be "how to encode meaning-layer findings as spec refinement notes in general" — that's a meta-question out of scope. This inquiry addresses the specific encoding only.

## Layer Commitment

**Primary layer: STRUCTURAL.**

The meaning was settled in the prior inquiry (`devdocs/inquiries/2026-06-09_08-14__critique_kill_severity_meta_principle/finding.md`). This inquiry addresses what the spec ARTIFACT LOOKS LIKE — the refinement note's text, its insertion point, its cross-references, and any ancillary edits to other parts of `td-critique.md` or `SKILL.md`.

Other layers considered and out of scope for THIS run:

- **Meaning** — purpose-fitness as the structural concept of severity. Already settled by the prior inquiry; carried forward as inherited commitment, not re-articulated here.
- **Process** — how the new check fires at runtime during a real `/td-critique` invocation (when is the 1-question test asked? Is it gated, advisory, mandatory? How does the practitioner enumerate candidate purposes?). Deferred to a sequential follow-up after this structural inquiry produces a spec edit; runtime behavior depends on what the spec ends up saying.

**Sequential plan.** Structural first (this inquiry). If process-layer questions surface during practitioner use after encoding, a Process inquiry follows. Meaning is already settled.

## Synthesis Trigger

OMITTED. The inquiry consumes the prior meaning-layer finding as inherited context, but this is ONE prior, not TWO OR MORE — the strict Synthesis Trigger threshold isn't met. However, the discipline work (especially Sensemaking and Critique) will explicitly RE-TEST the inherited commitments from the prior finding, per the spirit of the Synthesis re-test enforcement, since the entire structural design rests on those commitments. Key inherited commitments:

1. Purpose-fitness IS the meta-principle of severity (single-axis at meta-level).
2. Per-task calibration is composite (reversibility × blast-radius × scope × fixability × evidence-strength).
3. Severity-calibration locus is Phase 0 step 4 (Weight dimensions).
4. The 1-question test ("would the candidate still do what it's supposed to do — sufficiently, not just degraded?") is the practitioner-applicable form.
5. REFINE/KILL distinction is fixability-within-frame.
6. Constructive-output requirement is integral structural test (inability to extract seed = unsupported KILL).
7. Confidence is orthogonal to severity (INTERIM verdict is deferred; not adopted in this structural edit).
8. #2 Rubber-Stamping and #3 Nitpicking are opposite-direction violations of the same principle.
9. Defer-with-direction is the operational response for ambiguous-purpose candidates.

These commitments are LOAD-BEARING for this inquiry's structural design. Each must survive any structural-layer prosecution by Critique; if any falls, the spec-edit shape needs redesign.
