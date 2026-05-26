# Innovation: Pre-MVL+ mapping vs /explore enhancement

## User Input

`devdocs/inquiries/2026-05-12_22-25__pre_mvl_mapping_or_explore_enhancement/_branch.md`

Operating on: prior pipeline. Generates concrete spec text for each of 3 layers + sketches the deferred broader protocol.

---

## Seed

**Seed:** Concrete spec text drafts for 3 layers + broader protocol sketch.

---

## Phase 2 — Generate (compact, 7 mechanisms)

### M1 — Lens Shifting

**Generic — Defense-in-depth lens.** Each layer's text emphasizes its complementary role.
→ "Each layer's text includes a cross-reference + 'this layer catches X case while layers Y/Z catch other cases.'"

### M2 — Combination

**Generic — Combine with navigation_context_intake.md format.** The deferred protocol borrows its routing structure.
→ "Deferred protocol sketch uses navigation_context_intake's `Input Classification` + `Routing Table` structure as scaffold."

### M3 — Inversion

**Generic — "Each layer adopted alone is insufficient" → invert:** "Each layer alone IS sufficient for SOME cases." Refined: each layer has independent coverage; together they're defense-in-depth.

### M4 — Constraint Manipulation

**Generic — Minimum-edit constraint.** Each layer's text ≤15 lines.
→ "Bounded edits. Total ~25-35 lines across /MVL+ SKILL + /explore spec."

**Focused — Backward-compat constraint.** Edits don't break existing inquiry behavior.
→ "All 3 layer edits are ADDITIVE; no existing behavior changes."

### M5 — Absence Recognition

**Generic — Gap inventory.** What's missing from a typical "spec edit" finding?
→ "Per-layer adoption sequencing (which layer first if not all bundled); per-layer evaluation gate; rollback note if needed."

### M6 — Domain Transfer

**Focused — Linter-rule pattern.** Each layer is like a different linter rule that catches at different stages (lint-on-edit / lint-on-commit / lint-on-build).
→ "Frame 3 layers as parallel-failure-catches at different lifecycle stages."

### M7 — Extrapolation

**Generic — Pattern accumulation.** When 2+ more context-intake-failure cases beyond canonicals are observed, activate the broader protocol.
→ "Open Questions / Refinement Trigger: activate broader protocol after 2+ additional cases."

---

## Concrete drafts

### Draft for Layer 1 — _branch.md template update (~10 lines added to /MVL+ SKILL's "If NEW" section)

```markdown
3a. After writing `_branch.md`, the inquiry-author MUST list canonical-spec sources for any discipline(s) the inquiry analyzes. Format: add a "## Required canonical-spec loads" section to `_branch.md` listing the absolute paths of canonical spec files (e.g., `/Users/ns/Desktop/projects/native/homegrown/<discipline>/references/<discipline>.md`). The discipline at the runner level will load these into the working context before the first discipline runs. This is the inquiry-author level of the 3-layer defense-in-depth for canonical-anchor surfacing; complementary to the protocol-level enforcement (item 6 below in Discipline Workspace Invariant) and the discipline-level commitment in /explore's purposive-surfacing framing (cross-reference: `homegrown/explore/references/explore.md` §1.1).
```

### Draft for Layer 2 — Candidate A protocol text (~12 lines added to /MVL+ SKILL's Discipline Workspace Invariant section)

```markdown
6. **Canonical-spec-loading for analyzed disciplines.** When the inquiry's `_branch.md` mentions a discipline X by name (e.g., `/X` or "X discipline") OR otherwise analyzes X's structure / operations / components / canonical-spec content, the canonical spec at `homegrown/X/references/X.md` MUST be loaded in full into the working context before the first discipline runs. When the inquiry mentions multiple disciplines, load each named discipline's canonical spec. If unclear whether the inquiry "analyzes X's structure," default to load (cost is low; benefit is catching context-elicitation gaps). Loading is necessary but not sufficient for consideration; downstream disciplines should reference the loaded canonical content explicitly in their outputs. Cross-reference: Layer 1 (inquiry-author level in "If NEW" section) suggests canonical sources at inquiry-creation; this layer (protocol level) enforces loading at workspace setup. Layer 3 (`/explore`'s §1.1) clarifies that purposive surfacing includes canonical-anchor seeking at the discipline-execution stage.
```

### Draft for Layer 3 — /explore §1.1 refinement note (~8 lines added)

```markdown
*Refinement note (applies at §1.1 Verb-meaning):*

**Canonical-anchor seeking sub-aspect.** Purposive open-mode surfacing INCLUDES canonical-anchor seeking when the territory involves analyzing a discipline (or other artifact with a canonical authoritative spec). The canonical specs of disciplines referenced in the inquiry STAND OUT as worth bringing into view via the relevance signal (§2.1). When an inquiry mentions discipline X, `/explore` should explicitly probe `homegrown/X/references/X.md`'s identity-defining content (typically the first ~30 lines containing the discipline's verb-meaning, NOT-list, and core operations) as a high-priority surfacing target. This sub-aspect is part of `/explore`'s discipline-level layer in the 3-layer defense-in-depth for canonical-anchor surfacing (cross-reference: `/MVL+` SKILL Discipline Workspace Invariant item 6; `_branch.md` template's "Required canonical-spec loads" section).
```

### Sketch for the deferred broader protocol (`homegrown/protocols/mvl_context_intake.md`)

```markdown
# MVL_CONTEXT_INTAKE — Context-intake protocol for MVL+ inquiries

Routes pre-discipline context-intake per inquiry-type, analogous to navigation_context_intake.md.

## Input Classification

```yaml
inquiry_type: discipline-analysis | cross-finding-inheritance | standalone | continuation
analyzed_disciplines: [/X, /Y, ...]
inherited_findings: [path1, path2, ...]
project_context_needed: yes | no | unknown
prior_inquiry_thread: present | absent
```

## Routing Table

### discipline-analysis
Load: canonical spec of each analyzed discipline at `homegrown/<X>/references/<X>.md`.
Handoff: Run /MVL+ pipeline with canonical specs in working context.

### cross-finding-inheritance
Load: each inherited finding + canonical specs of disciplines it commits structure for.
Check: do inherited claims contradict canonicals? Flag if yes.
Handoff: Run /MVL+ pipeline with both finding + canonical in context.

### standalone
Load: minimal — _branch.md only.
Handoff: Run /MVL+ pipeline.

### continuation
Load: predecessor inquiry's finding.md + this inquiry's _branch.md.
Handoff: Run /MVL+ pipeline with thread context.

## Adoption status
DEFERRED — research-frontier. Activate when 2+ context-intake-failure cases beyond canonical-spec-loading are observed.
```

This is a sketch, not a final spec. Refined when activated.

---

## Mechanism telemetry

7/7 mechanisms; CONVERGENCE on bounded layer texts + deferred broader protocol sketch.

---

## Disposition

### ACTIONABLE (MUST)
- Layer 1 text (above).
- Layer 2 text (above).
- Layer 3 text (above).

### DEFERRED with revival trigger
- Broader protocol sketch (above) — activate when 2+ additional context-intake-failure cases beyond canonical-spec-loading.

### KILLED
- Single-layer-only fix (insufficient).
- All-layers-in-one-spec (over-coupled).

---

## Telemetry

- 7/7 mechanisms.
- Convergence on bounded layer texts.
- Deferred sketch produced (skeleton).
- No failure modes.

**PROCEED to Critique.**
