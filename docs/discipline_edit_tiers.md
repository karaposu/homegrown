# Discipline Edit Tiers — Vocabulary for Proposing Spec Changes

A practical reference for proposing changes to discipline specs (`/td-critique`, `/sense-making`, `/innovate`, `/surfacing`, `/decompose`, or any protocol/runner spec under `cognitive_harness/`). When a problem with a discipline is identified and a fix is wanted, this document defines three structurally-distinct edit shapes the proposal can take. Asking for "Tier 1, Tier 2, Tier 3" proposals produces three honestly-different alternatives the user can pick from.

The vocabulary emerged from the seven-inquiry deep-dive series on `/td-critique` failure modes (`devdocs/inquiries/2026-06-08*` and `2026-06-09*`); it carries forward unchanged.

---

## The three tiers

Each tier is a STRUCTURAL EDIT SHAPE — *how invasive the edit is*, not *which is better*.

### Tier 1 — Surgical = refinement-note pattern

An italicized refinement-note added inside an existing section of the spec. The note has a trigger condition (*when this check fires*) and a body (*what the practitioner does*). The spec's organizing pattern is unchanged.

**Form.**
```
*Refinement note (applies at [phase or section]):*

**[Check name].** When [trigger condition], [the practitioner must do X]. The check is operationalized as:

1. [Step 1]
2. [Step 2]
3. [Fallback if can't perform the check]

Failing to [perform the check] when [trigger fires] is an instance of [the failure mode this prevents].
```

**Properties.**
- Smallest edit; lowest blast radius
- Backward compatible by construction (trigger condition gates the new behavior)
- Trivially reversible (delete the note)
- Active prevention — the note forces the practitioner to do the check
- Often: partial sub-mechanism coverage (catches the failure on some sub-cases but not all)

### Tier 2 — Additional = new top-level structure following existing organizing pattern

A new entry that joins an existing list or section, following the spec's existing organizing pattern. For `/td-critique` this is typically a new numbered failure-mode entry in §4. For CONCLUDE it would be a new sub-section in the finding template. For `/sense-making` it could be a new hook in the Meta-Inspection table.

The organizing pattern is preserved; one new row or sub-section is added.

**Form.**
```
### [N+1]. [New entry name]

[Description — what the entry is and where it fires]

**Sub-recognitions (if applicable):** [bullet list]

**How to recognize.** [post-hoc identification]

**How to prevent.** [pointer to Tier 1 refinement-note if also adopted]

**Relationship to other modes.** [distinctness from adjacent entries]
```

**Properties.**
- Adds diagnostic vocabulary — corpus pairs can be retroactively labeled with the new name
- Doesn't actively prevent on its own (refers practitioners to the Tier 1 refinement-note for prevention)
- Bounded growth — adds ~30 lines + a small `SKILL.md` description bump
- Backward compatible; trivially reversible
- Often: STRONG sub-mechanism coverage via per-sub-mechanism "Sub-recognitions"

### Tier 3 — Significant = restructure the organizing principle

Replace the spec's organizing principle with a new one, OR re-frame a default stance. For a list-of-failure-modes spec this means replacing the linear list with a hook-table organized under a generative meta-question. For a protocol spec it could mean re-framing default behavior (e.g., preservation-verification-by-default → commitment-testing-by-default).

The organizing principle itself changes.

**Form.**
```
[Replace existing organizing structure with new structure]

Meta-question: "[generative principle that organizes the new structure]"

[New structure — e.g., a hook-table with N entries each carrying a calibration column for past/future failure modes]
```

**Properties.**
- Highest future-extensibility — future failure modes add as sub-aspects or new hooks (~5–10 lines each) instead of ~30-line top-level entries
- Highest cost; biggest blast radius
- Often premature at current scale (the sub-linear-growth benefit only manifests at ~12+ modes/entries)
- May couple to other Tier 3 commitments (e.g., this Tier 3 only makes sense if a prior Tier 3 hook-table is already adopted)
- Harder to reverse once downstream references absorb the restructure
- May involve unilateral revision of a recently-stabilized prior commitment (e.g., broadening an existing meta-question)

---

## "Tier" is not a value hierarchy

Higher tier ≠ better. Higher tier = *more invasive*, *higher future-extensibility return*, *higher risk*, *often coupled to prior commitments*.

The picker is **dimensional navigation, not ranking**:

- Want active prevention cheaply? → Tier 1
- Want diagnostic vocabulary for retroactive corpus labeling? → Tier 2
- Want long-term organizing-pattern shift to amortize future failure-mode growth? → Tier 3

For most edits, **adopting Tier 1 alone** is the responsible starting point. Tier 2 adds vocabulary on top. Tier 3 is for cumulative-deep commitments.

---

## Sub-axes within each tier

The seven-inquiry series surfaced sub-axes that may apply within any tier. They are *dimensional refinements*, not extra tiers:

- **Single-spec (SS) vs cross-spec (CS).** Does the failure surface span one spec or multiple? SS edits one spec only; CS coordinates edits across two or more. CS variants are higher blast radius and require coordination; SS variants are lighter but may catch only one half of a multi-spec failure.

- **ADD vs REPAIR within Tier 2.** Tier 2 can either ADD a new entry or REPAIR (semantically broaden) an existing one. ADD preserves vocabulary distinctness; REPAIR makes structural relationships to existing entries explicit but loses standalone vocabulary.

- **Both sub-axes can apply together.** Tier 2 can have 2×2 = 4 sub-sub-variants (ADD-SS / ADD-CS / REPAIR-SS / REPAIR-CS) when the failure surface spans within-spec AND cross-spec.

- **Construct shape.** Tier 1 refinement-notes can be prose-bodied OR table-per-instance (e.g., a Defense Scope | Concern Scope table filled in per defense invocation). Table-per-instance forces per-iteration structural commitment that prose lacks; choose based on whether the check operates at per-instance granularity.

- **Construct persistence.** A substrate piece introduced by a tier proposal can be single-inquiry (lives in the spec being edited) OR cross-inquiry (a separate registry/catalog file referenced from multiple specs). Cross-inquiry catalog is structurally novel; choose only when cross-discipline reuse is expected.

- **Single-locus vs multi-locus Tier 1.** A Tier 1 surgical proposal can attach at one phase/section, OR span multiple structurally-distinct loci within the same spec. Multi-locus Tier 1 is necessary when the failure surface requires probes at distinct points in the spec's flow.

Most edits will use *no* sub-axes (single-spec, prose, single-locus, etc. is the default). Sub-axes apply when the failure has a structural feature that demands them — *not by default*.

---

## Discipline-individual language principle

When drafting any tier proposal that lives in a discipline's spec, the proposal text should stay **discipline-individual** — it should not name other disciplines' internal artifacts.

**Concretely:** a refinement note added to `/td-critique` should not name `_branch.md` (a runner artifact), `## Synthesis Trigger` (a runner-template feature), `refines:` / `corrects:` / `supersedes:` (CONCLUDE-template frontmatter), or `Frame-exit Completeness perspective` (a `/sense-making` spec-internal name). Express the trigger condition generically (*"when the candidate-space rests on commitments inherited from prior evaluation work"*) and let the runner / protocol / sister-discipline machinery handle the surfacing of that condition.

Why: if another spec is later renamed or restructured, a discipline-individual proposal stays valid in shape. A coupled proposal breaks.

**Where coupling IS appropriate:** in cross-spec (CS) variants. If a Tier 1 CS variant explicitly edits both `/td-critique` AND CONCLUDE, the two edits cross-reference each other by design — that coupling is the proposal. Coupling is a defect only when it appears in a single-spec proposal that didn't need it.

When in doubt: would the proposal text still be correct if the other discipline's spec were renamed or restructured? If yes, the coupling is fine. If no, abstract it.

---

## How to use this when proposing discipline edits

When a problem with a discipline spec is identified and a fix is wanted, ask:

1. **Generate three tier-distinct proposals** per this document — one surgical (refinement-note), one additional (new entry following existing organizing pattern), one significant (restructure organizing principle).

2. **For each proposal, list:** the spec location of the edit; what the edit adds/changes; sub-mechanism coverage; plus/minus per the trade-off axes (blast radius, future-extensibility, sub-mechanism coverage, cross-spec edit complexity if applicable, dependencies on prior commitments if any).

3. **Apply the discipline-individual language principle** to every proposal that lives in a single spec. Apply the cross-spec coupling only to CS variants when intentional.

4. **Use sub-axes only when the failure structure demands them.** Default to single-spec, prose, single-locus, ADD (not REPAIR). Add sub-axes when there's a structural reason.

5. **Present the three proposals as dimensional navigation, not ranking.** The user picks based on appetite for blast radius vs. desire for future-extensibility, not on which tier number is highest.

A safe default starting point — pick Tier 1 alone — gives active prevention at the lowest blast radius. Add Tier 2 for diagnostic vocabulary. Defer Tier 3 unless the cumulative-deep commitment is intended.
