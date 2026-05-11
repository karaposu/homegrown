# Sensemaking: Navigation Context Intake Replacement Or Warm-Up Folder

## User Input

Should `homegrown/protocols/navigation_context_intake.md` be removed, rewritten to use `navigation-project-warmup_v1.md`, `navigation-project-warmup_v2.md`, and `navigation-project-warmup_v3.md`, or should the warm-up files be moved under `homegrown/protocols/navigation/`?

## SV1 - Baseline Understanding

The old protocol and the new warm-up routine now overlap. The likely answer is not simple deletion; it is to make one artifact authoritative for execution and another artifact, if kept, only a tiny wrapper.

## Phase 1 - Cognitive Anchor Extraction

### Constraints

- Warm-up should run once per Navigation-capable session, not per Navigation question.
- The v1/v2/v3 warm-up routine is now the preferred operational shape.
- `v3` is not cleaned yet, so the replacement is not fully complete.
- `homegrown/navigation/` already exists as the Navigation discipline folder.
- `homegrown/protocols/` currently holds shared protocol files, not grouped command families.
- The system should avoid duplicate authority.

### Key Insights

- `navigation_context_intake.md` is no longer good as the primary user-facing procedure because it is too parameter-heavy.
- The old protocol still contains valuable invariants: session boundary, staleness/rerun rules, handoff to Navigation, missing-context warnings, and outcome review.
- Moving v1/v2/v3 under `homegrown/protocols/navigation/` would make the path look neat, but it risks confusing discipline ownership with protocol grouping.
- `homegrown/navigation/warmup/` fits the operational relationship better: Navigation consumes warm-up outputs.

### Structural Points

- Navigation is a discipline.
- Warm-up is a Navigation support routine.
- Protocols are shared operational contracts.
- A wrapper can preserve invariants without owning the detailed execution.

### Foundational Principles

- Do not keep two active sources of truth for the same operation.
- Do not delete safety invariants before the replacement path has one real use.
- Put artifacts near their owner unless they are truly cross-cutting.
- Prefer command-shaped routines for currently evolving workflows.

### Meaning-Nodes

- Active authority.
- Wrapper versus procedure.
- Discipline-owned support routine.
- Protocol-layer invariant.
- File placement as cognitive load.

## SV2 - Anchor-Informed Understanding

The decision should separate three questions: what is the active procedure, where should the warm-up files live, and what should happen to the old protocol. The active procedure should be v1/v2/v3. The warm-up files should likely live under Navigation ownership. The old protocol should be shrunk or replaced by a tiny wrapper, not deleted immediately and not preserved as-is.

## Phase 2 - Perspective Checking

### Technical / Logical Perspective

If both `navigation_context_intake.md` and v1/v2/v3 remain detailed procedures, future agents can choose the wrong one. This creates routing ambiguity.

New anchor: one detailed procedure should be authoritative.

### Human / User Perspective

The user prefers the simpler command routine because it is honest, clean, and forgiving. Keeping a large protocol as the visible entrypoint works against that.

New anchor: the main interface must match the user's mental model, not just preserve prior rigor.

### Strategic / Long-Term Perspective

The system needs a scalable structure for Navigation support artifacts. If every Navigation-adjacent thing goes under `homegrown/protocols/navigation/`, protocol folders may grow into mini-discipline folders and blur taxonomy.

New anchor: Navigation-owned support routines should live with Navigation unless they are cross-cutting protocols.

### Risk / Failure Perspective

Immediate deletion risks losing useful constraints and breaking references. Moving files into a poorly named folder risks future confusion. Keeping the old protocol unchanged risks overcomplication.

New anchor: the safest transition is shrink/deprecate, then move after v3 cleanup.

### Resource / Feasibility Perspective

Moving files and updating references is easy. The higher-cost work is conceptual: making sure the new location does not imply the wrong authority.

New anchor: placement should reduce future reasoning cost.

### Definitional / Consistency Perspective

`homegrown/protocols/navigation/` would imply a Navigation protocol family. But Navigation already exists as a discipline at `homegrown/navigation/`. The support routine belongs closer to the discipline unless it is explicitly a shared protocol.

New anchor: avoid same-name hierarchy collisions.

## SV3 - Multi-Perspective Understanding

The problem stabilizes as a taxonomy problem: the old protocol is a cross-cutting invariant wrapper, while v1/v2/v3 are executable Navigation warm-up routines. Therefore the detailed routine should not live as `navigation_context_intake.md`, and a `homegrown/protocols/navigation/` folder is not the cleanest destination.

## Phase 3 - Ambiguity Collapse

### Ambiguity: Should `navigation_context_intake.md` be removed?

**Strongest counter-interpretation:** Yes. It is confusing and duplicates the new warm-up routine.

**Why the counter-interpretation fails (structural grounds):** The file still contains invariants that v1/v2/v3 do not yet fully encode: session boundary, rerun/staleness rules, handoff, trace/read-set expectations, and outcome review. Deleting it before the replacement has one real use loses safety structure.

**Confidence:** HIGH.

**Resolution:** Do not remove it immediately. Shrink it into a wrapper or mark it as superseded-by the warm-up routine after v3 is cleaned.

**What is now fixed?** Immediate deletion is excluded.

**What is no longer allowed?** Keeping the old detailed procedure as the active warm-up authority.

**What now depends on this choice?** Whether edits target replacement/shrinkage rather than deletion.

**What changed in the conceptual model?** The old file becomes a transitional wrapper candidate, not the main procedure.

### Ambiguity: Should v1/v2/v3 live under `homegrown/protocols/navigation/`?

**Strongest counter-interpretation:** Yes. They are Navigation-related protocols, and grouping them under protocols makes them easy to find.

**Why the counter-interpretation fails (structural grounds):** `homegrown/navigation/` already names the Navigation discipline. A separate `homegrown/protocols/navigation/` folder creates two Navigation namespaces with different meanings. Also, v1/v2/v3 are command routines, not shared cross-cutting protocols.

**Confidence:** HIGH.

**Resolution:** Avoid `homegrown/protocols/navigation/` for now. Prefer `homegrown/navigation/warmup/` for v1/v2/v3.

**What is now fixed?** Navigation warm-up is Navigation-owned support material.

**What is no longer allowed?** Treating all Navigation-related artifacts as protocol-layer artifacts.

**What now depends on this choice?** Future file moves and references.

**What changed in the conceptual model?** Placement follows ownership, not just topic.

### Ambiguity: Should `navigation_context_intake.md` use v1/v2/v3?

**Strongest counter-interpretation:** No. If v1/v2/v3 are primary, keeping a wrapper is unnecessary.

**Why the counter-interpretation fails (structural grounds):** Existing references and safety invariants need a transition path. A tiny wrapper can point to v1/v2/v3 and preserve when-to-run/when-to-rerun rules without duplicating execution steps.

**Confidence:** MEDIUM-HIGH.

**Resolution:** Yes, if it remains tiny. It should delegate execution to v1/v2/v3 and hold only invariants.

**What is now fixed?** Any retained version must reference v1/v2/v3 as the execution routine.

**What is no longer allowed?** Maintaining a parallel staged procedure inside `navigation_context_intake.md`.

**What now depends on this choice?** Whether to rewrite the file or create a new wrapper name.

**What changed in the conceptual model?** The wrapper is a routing/invariant artifact, not a warm-up implementation.

## SV4 - Clarified Understanding

The active warm-up should be v1/v2/v3. The old protocol should not be deleted yet and should not remain detailed. The cleanest organization is to move v1/v2/v3 under `homegrown/navigation/warmup/` after v3 cleanup, while shrinking `navigation_context_intake.md` into a short transitional wrapper or replacing it later with a better-named `navigation_warmup.md`.

## Phase 4 - Degrees-of-Freedom Reduction

### Fixed

- v1/v2/v3 become the detailed execution routine.
- `navigation_context_intake.md` stops being the detailed execution routine.
- Do not create `homegrown/protocols/navigation/` now.
- Prefer `homegrown/navigation/warmup/` for the command family.
- Keep a tiny wrapper until one real use proves the new routine.

### Eliminated

- Delete `navigation_context_intake.md` immediately.
- Keep `navigation_context_intake.md` unchanged.
- Move v1/v2/v3 into `homegrown/protocols/navigation/` as the first choice.

### Viable Paths

1. Finish v3 cleanup.
2. Move v1/v2/v3 to `homegrown/navigation/warmup/`.
3. Replace `navigation_context_intake.md` content with a short wrapper.
4. After one real use, optionally rename the wrapper to `homegrown/protocols/navigation_warmup.md` or remove the old filename if references are updated.

## SV5 - Constrained Understanding

The best shape is:

```text
homegrown/navigation/
  SKILL.md
  references/navigation.md
  warmup/
    navigator-warmup1.md
    navigator-warmup2.md
    navigator-warmup3.md

homegrown/protocols/
  navigation_context_intake.md   # tiny transitional wrapper, not the procedure
```

Long-term, the wrapper can be renamed or removed if references migrate and the warm-up routine proves itself.

## Phase 5 - Conceptual Stabilization

The decision is about authority and ownership. v1/v2/v3 should own the detailed warm-up behavior. Navigation should own those files because Navigation consumes their outputs. The protocol layer should only preserve cross-cutting invariants such as session boundary, staleness, handoff, and outcome review.

## SV6 - Stabilized Model

Do not delete `homegrown/protocols/navigation_context_intake.md` yet. Do not keep it as-is.

Rewrite it into a tiny wrapper that says:

```text
Navigator warm-up runs once per session.
The execution routine is v1 -> v2 -> v3.
Navigation consumes the outputs as session context.
Rerun only when source boundary changes, outputs become stale, or Navigation fails due to missing context.
After first real use, review whether the warm-up reduced user context steering.
```

Do not create `homegrown/protocols/navigation/` now. It is a bad first move because it collides with the existing `homegrown/navigation/` discipline namespace and blurs discipline-owned support routines with shared protocols.

After `v3` is cleaned, move the warm-up files under:

```text
homegrown/navigation/warmup/
```

That path says the right thing: these files are not generic protocols; they are the warm-up routine that prepares context for the Navigation discipline.

## Saturation Telemetry

- **Perspective saturation:** high. Technical, human, strategic, risk, and definitional perspectives converged on the same ownership boundary.
- **Ambiguity resolution ratio:** 3/3 major ambiguities resolved.
- **SV delta:** high. SV1 was a deletion/move question; SV6 defines a two-layer ownership model.
- **Anchor diversity:** good. Anchors came from artifact layout, user preference, protocol responsibility, namespace collision, and safety invariants.
