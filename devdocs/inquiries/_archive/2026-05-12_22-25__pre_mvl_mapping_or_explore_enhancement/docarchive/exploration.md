# Exploration (Iteration 2): Pre-MVL+ mapping vs /explore enhancement — generic version

## User Input

`devdocs/inquiries/2026-05-12_22-25__pre_mvl_mapping_or_explore_enhancement/_branch.md`

**Iteration 2 trigger:** user correction. Iter-1's spec drafts were discipline-specific ("the inquiry analyzes a discipline X"; paths like `homegrown/<discipline>/references/<discipline>.md`). User pointed out: "the problem is GENERIC (canonical anchors missed for ANY project entity), not discipline-specific. The discussion happened during discipline-analysis but the pattern is wider. Your suggested edit is bloat because it's use-case-specific."

The user is correct. Iter-1 committed a specific-vs-pattern recognition failure WITHIN an inquiry meant to address that exact kind of failure.

---

## Step 0 — Declarations

| Field | Value |
|---|---|
| `cognitive-commitment-mode` | open |
| `territory-type-mode` | possibility |
| `entry-point` | signal-first (genericize) |
| `expected` | ~12 items |
| `depth-level` | D2-D3 |

---

## Cycle log

### Cycle 1 — Confirm the user's correction is structurally right

**Signal:** is the problem really generic, not discipline-specific?

**Probe:** what kinds of project entities have canonical authoritative sources whose absence-from-context could cause the same iter-1-style failure?

- **Disciplines** — `homegrown/<discipline>/references/<discipline>.md`. The iter-1 instance.
- **Protocols** — `homegrown/protocols/<protocol>.md` (e.g., `conclude.md`, `loop_diagnose.md`, `navigation_context_intake.md`).
- **Runners** — `homegrown/<runner>/SKILL.md` or `~/.claude/skills/<runner>/SKILL.md` (e.g., `MVL+/SKILL.md`).
- **Configurations** — `enes/desc.md`; `README.md`; project end-goal docs.
- **Code modules** — source files with their own canonical structure.
- **Inquiry findings** — `finding.md` files (the canonical for that inquiry's verdict).
- **Reference docs** — any md file authoritatively defining a structure.

ALL of these could be the entity whose canonical authoritative source is missed by an inquiry analyzing them. The iter-1 instance happened to be a discipline; the pattern doesn't depend on disciplineness.

**Confidence:** CONFIRMED. The pattern is generic; "discipline" is just the entity-type of the observed instance.

### Cycle 2 — Diagnose why iter-1 of THIS finding's loop committed the specific-vs-pattern failure

**Signal:** iter-1 of this inquiry was meant to address canonical-anchor-loading failures. But iter-1's own fix was specific (disciplines only). The loop committed the SAME pattern this inquiry's fix is supposed to prevent. Why?

**Probe — examine /sense-making's existing rules:**

`/sense-making`'s spec Phase 3 has a refinement note: "Specific-vs-pattern recognition cue. When Sensemaking commits to a key concept describing 'what the problem IS' — particularly when that concept appears as a Phase 1 / Key Insight built from a small set of specific examples — the ambiguity-collapse pair MUST explicitly ask: are these specific examples THE WHOLE PROBLEM, or just a few cases of a wider pattern?"

THIS RULE EXISTS. Iter-1's sense-making should have applied it. Iter-1 should have asked: "is canonical-spec-loading for disciplines THE WHOLE PROBLEM, or just one case of canonical-loading for any analyzed entity?"

Iter-1's sense-making didn't apply this rule. The recommended fix stayed at the discipline-specific level.

**Confidence:** CONFIRMED. Iter-1's failure is an instance of "rule exists; loop didn't apply." The rule's existence in /sense-making spec is independent of whether iter-1 applied it.

### Cycle 3 — Genericize Layer 1 (_branch.md template)

**Generic principle:** _branch.md should list canonical sources for any project entity the inquiry analyzes.

**Generic text (~10 lines):**

> *3a. After writing `_branch.md`, the inquiry-author MUST list canonical sources for any project entity the inquiry analyzes (a discipline, protocol, runner, configuration, code module, prior finding, or any other artifact with a canonical authoritative source). Format: add a "## Required canonical loads" section to `_branch.md` listing the absolute paths of canonical source files. Common locations include `homegrown/<discipline>/references/<discipline>.md` for disciplines, `homegrown/protocols/<protocol>.md` for protocols, `~/.claude/skills/<runner>/SKILL.md` for runners, plus configurations like `enes/desc.md`. The runner will load these into the working context before the first discipline runs. This is the inquiry-author layer of the 3-layer defense-in-depth for canonical-source surfacing.*

The genericization: "any project entity" replaces "discipline." Examples are listed but not restrictive.

**Confidence:** generic version is structurally cleaner.

### Cycle 4 — Genericize Layer 2 (Workspace Invariant)

**Generic principle:** load canonical authoritative sources for any analyzed entity, not just disciplines.

**Generic text (~12 lines):**

> *6. **Canonical-source-loading for analyzed entities.** When the inquiry's `_branch.md` mentions or analyzes the structure of any project entity — a discipline, protocol, runner, configuration, code module, prior finding, or other artifact with a canonical authoritative source — the canonical source MUST be loaded in full into the working context before the first discipline runs. Common canonical-source locations: `homegrown/<discipline>/references/<discipline>.md` for disciplines; `homegrown/protocols/<protocol>.md` for protocols; `~/.claude/skills/<runner>/SKILL.md` for runners; `enes/desc.md`, `README.md`, and similar for configurations. When multiple entities are analyzed, load each. If unclear whether something is being "analyzed," default to load. Loading is necessary but not sufficient for consideration; downstream disciplines should reference the loaded canonical content explicitly in their outputs.*

The genericization: "any project entity" + example paths. Default-to-load rule preserved.

**Confidence:** generic version covers all observed and plausible cases.

### Cycle 5 — Genericize Layer 3 (/explore §1.1 note)

**Generic principle:** /explore's purposive surfacing seeks canonical anchors for any analyzed entity's structure.

**Generic text (~8 lines):**

> *Refinement note (applies at §1.1 Verb-meaning):*
>
> ***Canonical-anchor seeking sub-aspect.** Purposive open-mode surfacing INCLUDES canonical-anchor seeking when the territory involves analyzing the structure of any project entity (a discipline, protocol, runner, configuration, code module, prior finding, or other artifact with a canonical authoritative source). The canonical authoritative source of the analyzed entity STANDS OUT as worth bringing into view via the relevance signal (§2.1). `/explore` should explicitly probe the canonical source's identity-defining content (typically the first ~30 lines) as a high-priority surfacing target. This sub-aspect is part of `/explore`'s discipline-level layer in the 3-layer defense-in-depth for canonical-source surfacing.*

**Confidence:** generic version preserves the structural commitment without entity-type restriction.

### Cycle 6 — Note about iter-1's meta-failure

**Observation:** iter-1 of this inquiry's loop committed the specific-vs-pattern recognition cue failure. /sense-making's spec ALREADY has the rule. The rule existed; the loop didn't apply it.

**Implication:** the fix for THIS failure isn't a new sense-making rule; it's better application of the existing rule. Naming the failure (in this iter-2 finding's Reasoning) helps future loops catch themselves at the same point.

**Confidence:** the meta-failure is real but the fix is application discipline, not a new rule.

### Cycle 7 — Should the deferred broader protocol's sketch also be genericized?

**Probe:** iter-1's broader protocol sketch had 4 routing categories: discipline-analysis / cross-finding-inheritance / standalone / continuation.

"Discipline-analysis" is discipline-specific. Genericize to "entity-analysis" (or similar).

**Revised category list:**
- **entity-analysis** (generalization of discipline-analysis; covers analyzing structure of any project entity).
- **cross-finding-inheritance** (cross-artifact-inheritance — broader than just findings).
- **standalone** (no specific entity analyzed).
- **continuation** (predecessor inquiry exists).

**Confidence:** broader protocol's sketch should also be genericized.

### Cycle 8 — Convergence

**Three criteria:**
- Frontier stability ✓
- Declining discovery (cycles 6-7 surfaced refinements, not new structural axes) ✓
- Bounded gaps (only implementation details left) ✓

**Jump-scan:** is there an entity type not yet considered?

- Sub-protocols? (e.g., conclude.md has the multi-iteration handling section). Covered by "protocol" category.
- Inquiries themselves? (each inquiry has _branch.md as its canonical for its own question). Covered.
- External libraries? (the project doesn't currently have external lib references but if it did, they'd be entities too). Future-compatible.

No surprises.

---

## Inventory

### Generic 3-layer recommendation (iter-2 corrected text)

| Layer | Text | What's changed from iter-1 |
|---|---|---|
| Layer 1 (author) | _branch.md MUST list canonical sources for any project entity analyzed | "any project entity" replaces "discipline(s)" |
| Layer 2 (protocol) | Workspace Invariant mandates loading canonical source for any analyzed entity | "any project entity" replaces "discipline X"; common paths listed as examples |
| Layer 3 (/explore note) | Purposive surfacing INCLUDES canonical-anchor seeking when territory involves analyzing structure of any entity | "any project entity" replaces "discipline" |

### Iter-1's meta-failure noted

Iter-1 of this inquiry's loop committed the specific-vs-pattern recognition cue failure (a rule in /sense-making's Phase 3 spec). The rule exists; the loop didn't apply. Fix is application discipline, not new spec rule.

### Broader protocol sketch (iter-2 corrected)

Category 1 renamed: "entity-analysis" instead of "discipline-analysis." Other categories unchanged.

---

## Signal log

| Signal | Source | Priority | Probed |
|---|---|---|---|
| Pattern is generic; iter-1's discipline-specific framing is bloat | user correction | CRITICAL | yes |
| /sense-making's spec already has specific-vs-pattern rule; iter-1 didn't apply | cycle 2 | HIGH | yes |
| Generic Layer 1/2/3 texts produced | cycles 3-5 | HIGH | yes |
| Broader protocol category rename | cycle 7 | MEDIUM | yes |
| Iter-1 meta-failure is application discipline, not new rule | cycle 6 | MEDIUM | yes |

---

## Confidence map

| Region | Confidence |
|---|---|
| Pattern is generic, not discipline-specific | **confirmed HIGH** |
| Generic 3-layer texts cover all entity types | **confirmed HIGH** |
| Iter-1's meta-failure is application of existing rule | **confirmed HIGH** |
| Broader protocol category rename is bounded | **confirmed MEDIUM-HIGH** |

---

## Frontier state

Closed within scope. Iter-2 has produced genericized spec drafts + diagnosis of iter-1's meta-failure.

---

## Gaps and Recommendations

### Gaps for downstream

**FQ1 (sensemaking):** confirm the genericization is the cleanest framing; resolve whether "any project entity" is the right phrase or alternatives (artifact, subject, etc.).

**FQ2 (innovation):** finalize the wording of each layer's generic text.

**FQ3 (critique):** adversarially test the generic framing. Does "any project entity" cover too broad a scope and lose specificity?

### Recommendations for downstream

- **Sensemaking:** stabilize the generic framing; commit to phrasing; note iter-1's meta-failure.
- **Decomposition:** partition the iter-2 corrective (same 4 pieces as iter-1 but with corrected content).
- **Innovation:** produce final spec text per layer.
- **Critique:** test "any project entity" for over-generalization.

---

## Telemetry

- Mode: possibility
- Cycles: 8
- Failure modes checked; user correction acknowledged.
- Iter-1 meta-failure noted in Cycle 2.

**PROCEED to Sensemaking.**
