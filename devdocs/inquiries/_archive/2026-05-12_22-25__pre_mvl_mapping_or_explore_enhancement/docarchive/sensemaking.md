# Sensemaking (Iteration 2): Pre-MVL+ mapping — generic version

## User Input

`devdocs/inquiries/2026-05-12_22-25__pre_mvl_mapping_or_explore_enhancement/_branch.md`

Operating on: `_branch.md` + iter-2's `exploration.md`. Exploration confirmed generic framing; produced generic text drafts; diagnosed iter-1's meta-failure (specific-vs-pattern rule exists in /sense-making but wasn't applied).

---

## SV1 — Baseline

User correction: iter-1's drafts are discipline-specific bloat. Pattern is generic (canonical anchors for any project entity). Iter-2 must genericize the 3-layer fix + note the iter-1 meta-failure.

---

## Phase 1 — Anchors

### Constraints

- **C1 — Pattern is generic.** Confirmed by exploration; any project entity with canonical authoritative source has this problem.
- **C2 — /sense-making's specific-vs-pattern rule exists** (Phase 3 refinement). Iter-1 didn't apply it.
- **C3 — Genericization replaces "discipline" with broader term.** Common paths listed as examples not restrictions.
- **C4 — Project precedent (navigation_context_intake) still applies** — pattern is per-runner context-intake; not discipline-specific.

### Key Insights

- **K1 — "Any project entity" is the right phrase.** Covers disciplines + protocols + runners + configs + code + findings + future-types. Alternatives ("artifact"; "subject") are less project-native; "entity" is generic and clean.
- **K2 — Common paths as examples, not restrictions.** Spec text lists `homegrown/<discipline>/references/<discipline>.md` etc. as examples; the rule itself is "load the canonical source of any analyzed entity."
- **K3 — Iter-1's meta-failure is application discipline, not new rule.** /sense-making's specific-vs-pattern rule exists in Phase 3. Iter-1 didn't apply. Naming this in iter-2's finding helps future loops catch themselves at the same point.
- **K4 — Broader protocol category renames cleanly.** "discipline-analysis" → "entity-analysis." Other categories unchanged.

### Structural Points

- **S1 — Generic Layer 1, 2, 3 text** (from exploration, lightly polished here for finalization).
- **S2 — The iter-1 meta-failure reference: /sense-making Phase 3 Specific-vs-pattern recognition cue.**
- **S3 — Broader protocol's first category renamed.**

### Foundational Principles

- **F1 — Generic phrasing covers more cases without adding spec length.**
- **F2 — Examples in spec text are illustrative; the rule generalizes.**
- **F3 — Naming an application failure (not a new rule) is the right corrective when the rule already exists.**

### Meaning-Nodes

- **M1 — "Any project entity"** — generic catch-all for the entity-type.
- **M2 — "Canonical authoritative source"** — the entity's canonical doc; varies by entity-type but always exists for analyzable entities.
- **M3 — "Specific-vs-pattern recognition cue"** — /sense-making Phase 3 rule that iter-1 didn't apply.

---

## SV2 — Anchor-informed

The generic framing ("any project entity") is structurally cleanest. Iter-1's discipline-specific framing was bloat AND was the kind of failure /sense-making's spec already has a rule against. Iter-2 fixes the bloat by genericizing + names the meta-failure for future reference.

---

## Phase 2 — Perspectives

### Technical / Logical
Generic phrasing covers all observed and plausible entity types. Common-path examples don't restrict; they illustrate. /sense-making Phase 3 rule exists; application failure is the right framing.

### Human/User
User explicitly said: "it is a generic problem... your suggested edit is a bloat bc it is usecase specific." The correction is direct; the response is direct.

### Strategic
Generic framing is forward-compatible — covers future entity-types (e.g., new runners, new protocols) without spec edits.

### Risk
- Risk: "any project entity" is so broad it loses specificity. Mitigation: examples list common types.
- Risk: future readers might still need to figure out paths. Mitigation: examples + "default to load when unclear."

### Resource
Same bounded total cost (~25-35 lines additive across 2 files); just genericized.

### Definitional / Internal Consistency
Generic phrasing is consistent with /MVL+ runner being entity-agnostic in its other operations.

### Definitional / Frame-exit Completeness
Gating fires; the inquiry's commitments include "canonical," "source," "entity," "analysis."

Existence Enumeration:
- TYPE axis: entities include disciplines / protocols / runners / configs / code / findings / etc. All covered by "any project entity."
- LAYER axis: 3 layers unchanged.

### Phase / Calibration-State
Forward-compatible across L0–L4+.

---

## SV3 — Multi-perspective

All perspectives support genericization. No surprises.

---

## Phase 3 — Ambiguity Collapse

### Ambiguity 1: phrasing choice

**Counter:** "any project entity" might be too abstract; what about "any analyzed artifact" or "any project subject"?

**Resolution:** "any project entity" is generic + project-natively grounded. Examples in the spec text illustrate types. Alternatives don't add clarity.

**Confidence:** HIGH.

### Ambiguity 2: should we modify /sense-making's Phase 3 rule to make iter-1's failure type more catchable?

**Counter:** the rule exists; iter-1 didn't apply. Maybe the rule needs to be stronger or more visible.

**Why the counter PARTIALLY HOLDS:** the rule's TEXT might need a small refinement to specifically address "recommended-fix-too-specific" cases (not just "concept-too-specific").

**Resolution:** iter-2's finding NOTES the iter-1 meta-failure + suggests a small refinement to /sense-making's Phase 3 rule wording. This is an additional MUST item beyond the 3-layer fix.

**Confidence:** MEDIUM. Adding the suggestion is bounded; whether to commit it as MUST or COULD is a judgment call.

### Ambiguity 3: should the broader protocol skeleton be re-sketched here?

**Counter:** broader protocol is research-frontier; resketching it slightly is fine.

**Resolution:** rename first category from "discipline-analysis" to "entity-analysis"; otherwise unchanged. Small edit.

**Confidence:** HIGH.

---

## SV4 — Clarified

Iter-2 corrected finding:
- Generic Layer 1/2/3 spec drafts (replacing iter-1's discipline-specific drafts).
- Note about iter-1's meta-failure (specific-vs-pattern rule application).
- Optional small refinement to /sense-making Phase 3 (research-frontier-or-COULD).
- Broader protocol category rename.

---

## Phase 4 — DoF reduction

**Fixed:**
- F1: generic phrasing = "any project entity."
- F2: examples in spec text are illustrative, not restrictive.
- F3: iter-1 meta-failure noted in Reasoning section.
- F4: /sense-making Phase 3 refinement is COULD (not MUST) — adds wording strengthening but the rule exists.
- F5: broader protocol category renamed.

**Eliminated:**
- E1: discipline-specific framing.
- E2: alternative phrasings (artifact, subject) — less natural.

---

## SV5 — Constrained

The finding will:
1. Replace iter-1's discipline-specific spec drafts with generic versions.
2. Note iter-1's meta-failure (specific-vs-pattern rule application).
3. Suggest a small /sense-making Phase 3 wording refinement as COULD.
4. Rename broader protocol's first category.
5. Acknowledge iter-1's meta-failure as instance of the loop's recurring specific-vs-pattern pattern.

---

## Phase 5 — Stabilization

Accommodation: not needed. Self-reference: external grounding via user correction + existing /sense-making rule.

---

## SV6 — Stabilized

**The iter-2 verdict:** the 3-layer recommendation stays at 3 layers; what changes is the GENERIC framing of each layer's text. Plus an iter-1 meta-failure observation.

### Generic Layer 1 text (~10 lines added to /MVL+ SKILL "If NEW")

> *3a. After writing `_branch.md`, the inquiry-author MUST list canonical sources for any project entity the inquiry analyzes (a discipline, protocol, runner, configuration, code module, prior finding, or any other artifact with a canonical authoritative source). Format: add a "## Required canonical loads" section to `_branch.md` listing the absolute paths of canonical source files. Common locations include `homegrown/<discipline>/references/<discipline>.md` for disciplines, `homegrown/protocols/<protocol>.md` for protocols, `~/.claude/skills/<runner>/SKILL.md` for runners, plus configurations like `enes/desc.md`. The runner will load these into the working context before the first discipline runs. This is the inquiry-author layer of the 3-layer defense-in-depth for canonical-source surfacing.*

### Generic Layer 2 text (~12 lines added to /MVL+ SKILL Workspace Invariant)

> *6. **Canonical-source-loading for analyzed entities.** When the inquiry's `_branch.md` mentions or analyzes the structure of any project entity — a discipline, protocol, runner, configuration, code module, prior finding, or other artifact with a canonical authoritative source — the canonical source MUST be loaded in full into the working context before the first discipline runs. Common canonical-source locations: `homegrown/<discipline>/references/<discipline>.md` for disciplines; `homegrown/protocols/<protocol>.md` for protocols; `~/.claude/skills/<runner>/SKILL.md` for runners; `enes/desc.md`, `README.md`, and similar for configurations. When multiple entities are analyzed, load each. If unclear whether something is being "analyzed," default to load. Loading is necessary but not sufficient for consideration; downstream disciplines should reference the loaded canonical content explicitly.*

### Generic Layer 3 text (~8 lines added to /explore §1.1)

> *Refinement note (applies at §1.1 Verb-meaning):*
>
> ***Canonical-anchor seeking sub-aspect.** Purposive open-mode surfacing INCLUDES canonical-anchor seeking when the territory involves analyzing the structure of any project entity (a discipline, protocol, runner, configuration, code module, prior finding, or other artifact with a canonical authoritative source). The canonical authoritative source of the analyzed entity STANDS OUT as worth bringing into view via the relevance signal (§2.1). `/explore` should explicitly probe the canonical source's identity-defining content (typically the first ~30 lines) as a high-priority surfacing target.*

### Iter-1 meta-failure observation

Iter-1 of this inquiry's loop committed the specific-vs-pattern recognition cue failure that /sense-making's spec Phase 3 explicitly addresses. The rule exists; iter-1 didn't apply it to the recommended fix. The fix is application discipline (apply the rule to recommended fixes, not just to problem concepts). This observation supports the project's accumulating pattern catalog (cf. 22-05 inquiry's Family A "Operation-Status Drift" + meta-family "context-as-absolute category errors").

### COULD: small refinement to /sense-making Phase 3 wording

Optionally strengthen /sense-making Phase 3's specific-vs-pattern recognition cue to explicitly cover "recommended fix being too specific to observed cases" (not just "problem concept being too specific"). Bounded edit; deferred to user-decision tier.

### Broader protocol category rename

In the deferred mvl_context_intake.md sketch: first category renamed from "discipline-analysis" to "entity-analysis."

### How SV6 differs from iter-1 SV6

| | Iter-1 SV6 | Iter-2 SV6 |
|---|---|---|
| Layer 1 phrasing | "discipline(s) the inquiry analyzes" | "any project entity the inquiry analyzes" |
| Layer 2 phrasing | "When the inquiry's `_branch.md` mentions a discipline X" | "When the inquiry's `_branch.md` mentions or analyzes the structure of any project entity" |
| Layer 3 phrasing | "when the territory involves analyzing a discipline" | "when the territory involves analyzing the structure of any project entity" |
| Iter-1 meta-failure | Not noted | Explicitly noted in Reasoning |
| /sense-making Phase 3 refinement | Not considered | Surfaced as COULD |
| Broader protocol category | "discipline-analysis" | "entity-analysis" |

---

## Saturation

- Perspective saturation: yes.
- Ambiguity resolution: 3/3.
- SV delta: clear (generic framing replaces discipline-specific).
- Anchor diversity: diverse.

**PROCEED to Decomposition.**
