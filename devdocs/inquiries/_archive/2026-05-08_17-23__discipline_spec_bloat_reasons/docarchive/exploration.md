# Exploration — Discipline-spec apparent-bloat reasons

## User Input

```
For each of the three apparent-bloat patterns (reference-loading boilerplate triplication;
failure-mode triplication; bolted-on sub-rules inside numbered process steps), what's the
load-bearing reason behind it, and which (if any) are genuinely refactorable?
```

## Mode and Entry

- **Mode:** hybrid — artifact (the spec files exist; their structure is concrete) + possibility (the "candidate reasons" space is conceptual).
- **Entry point:** signal-first. Three named patterns; scan outward from each.

---

## 1. Territory Overview

The territory is the homegrown discipline-spec corpus — six pairs of `SKILL.md` + `references/X.md`, plus `enes/discipline_rule_placement.md` (the placement convention itself) and the runner files (`MVL/SKILL.md`, `MVL+/SKILL.md`) that govern how these specs are loaded and executed.

Three regions, one per pattern. Each region has two readings (pro-bloat: the pattern is load-bearing; anti-bloat: the pattern is refactorable). The exploration's job is to inventory the candidate reasons in each region and tag confidence per reading — sense-making will collapse the readings into stable understanding.

**One territorial discovery up front:** patterns 1 and 2 are *audience-separation* patterns (same content addressed at different audiences/timings). Pattern 3 is a *placement-convention* pattern (the convention itself produces the apparent bloat as a cost of following it). These are structurally different problems and probably need different verdicts.

---

## 2. Inventory

### Region A — Pattern 1: Reference-loading boilerplate triplication

The three placements:

| ID | Where | Audience | When |
|---|---|---|---|
| A1 | `SKILL.md` Step 0 "Mandatory pre-read" | Executing LLM (skill-tool invocation moment) | Before Step 1 of the protocol |
| A2 | `references/X.md` top-of-file "Loading note" | Maintainer / contributor reading the references file directly | Whenever someone opens the file |
| A3 | `SKILL.md` footer "Reference loading during execution" | Executing LLM mid-process | At failure-mode recognition |

**Candidate reasons each placement is load-bearing:**

- **A1:** when MVL+ runs `Skill(skill: "explore", ...)`, the SKILL.md is what loads first. Without Step 0, a fast LLM might skip to Step 1 and execute from memory of similar disciplines. The MVL+ rule "Never execute a discipline from memory alone" exists at the runner layer; A1 is the in-skill defense for the same invariant.
- **A2:** addresses a maintainer who opens `references/X.md` to edit it. Without the Loading note, a contributor might refactor the file (e.g., compress, split, reorder) without realizing every section is referenced by the protocol. The note prevents structural breakage by maintainers.
- **A3:** addresses LLM context decay. After ~100 steps, the LLM may have de-prioritized reference content; the footer re-anchors specific sections at recognition time.

**Candidate refactor angles:**

- A1 → **load-bearing**, hard to remove. Step 0 is the in-skill defense for a runner-layer invariant.
- A2 → **load-bearing**, but could compress to one-line frontmatter (`canonical: true; read-in-full: true`).
- A3 → **most refactorable** of the three. Could collapse to a one-line "see `references/X.md` § Failure Modes for recognition + correction" rather than the current multi-sentence paragraph.

**Cross-check:** the MVL/MVL+ skill files explicitly document a Skill-tool-then-Read-fallback chain ("Invoke Skill(...); if Skill fails → Read; if Read fails → HALT"). This means the loading layer itself is defended at runner level. That weakens A1's case slightly — but A1 still serves the moment after the load succeeds, when the LLM decides whether to actually consume the reference content.

### Region B — Pattern 2: Failure-mode triplication

The three placements:

| ID | Where | Audience | When |
|---|---|---|---|
| B1 | `references/X.md` body "## Failure Modes" | Reader doing deep dive | When studying the discipline |
| B2 | `references/X.md` summary table at the bottom | Reader skimming or verifying coverage | Quick scan / completeness check |
| B3 | `SKILL.md` footer parenthetical reminder | Executing LLM mid-process | At failure-mode recognition |

**Candidate reasons each placement is load-bearing:**

- **B1:** the canonical content. Each failure mode carries a `signal / recognition / prevention / corrective` quartet. This is the actual reference material.
- **B2:** scan-layer index. A reader who skimmed B1 can scan B2 to verify "did I see all of them?" Also: maintenance backstop — when adding a new failure mode, the count and the table force the author to update both, which catches drift.
- **B3:** mid-execution pointer. Different audience from B1 (skill-loader at exec time vs. reference reader at study time). Re-anchors the failure-mode list at the moment failure recognition fires.

**Candidate refactor angles:**

- B1 → **load-bearing**. Canonical.
- B2 → **most refactorable** of the three. The summary tables at the end of each `references/X.md` are mostly pure restatement. Drift risk is real (when B1 changes, B2 must be updated; when it isn't, B2 becomes stale). Could be: drop B2 entirely (B1 has clear headings) OR replace with a per-failure-mode anchor list (names + links to body, no descriptions).
- B3 → **load-bearing**, but the same compression note as A3 applies — could be one line, not a paragraph.

**Cross-check with `enes/regression/desc.md`:** the regression-detection model lists 23 failure-mode-style symptoms across 5 types. Their architecture is: each has a schema (name / signal / baseline / deviation / specificity / severity / context / combination). The discipline references files are simpler (signal + recognition + prevention) and don't carry severity/specificity. This suggests B1 is the canonical content and B2/B3 are convenience layers, not parallel data structures. Removing B2 doesn't lose information held nowhere else.

### Region C — Pattern 3: Bolted-on sub-rules inside numbered process steps

The bolted-on subsections in question:

| Discipline | Step | Subsection | Type |
|---|---|---|---|
| sensemaking | Phase 3 (Ambiguity Collapse) | "Load-bearing concept test" | Step-level |
| sensemaking | Phase 3 (Ambiguity Collapse) | "Specific-vs-pattern recognition cue" | Step-level |
| sensemaking | Phase 2 (Perspective Checking) | "Phase / Calibration-State" perspective addendum | Step-level |
| explore | Probe component | "Type-Aware Probing" | Component-level |
| explore | Resolution Progression | "Coarse Scan in Layered Territories" | Step-level |
| decompose | Step 7 (Self-Evaluate) | "Determination-mechanism piece check" | Step-level |
| td-critique | Phase 0 (Dimension Construction) | "Project-specific risk dimension check" | Step-level |
| td-critique | Phase 2 (Adversarial Evaluation) | "Multi-axis prosecution depth check" | Step-level |
| innovate | Phase 3 (Test) | "Output disposition categories" | Step-level |
| innovate | Phase 3 (Test) | "Axis coverage check" | Step-level |

**The placement convention says (per `enes/discipline_rule_placement.md`):**

> Each rule has ONE canonical home, determined by its scope of application:
> - **Operation-level scope** (rule applies to all instances of the operation): canonical home is the Component subsection.
> - **Step-level scope** (rule applies only to this step's invocation): canonical home is the Process Model step.
> - **Failure-only-form** (no positive form): canonical home is the Failure Mode prevention subsection.
>
> When in doubt, the more SPECIFIC scope wins.
>
> At non-canonical surfaces, use a one-line cross-reference, not duplicated content.

**Audit against the convention** (per-subsection scope check):

- "Load-bearing concept test" → applies only to Phase 3 ambiguity collapse. Step-level. **Canonical home IS Phase 3.** Convention satisfied.
- "Type-Aware Probing" → applies whenever the Probe component is invoked, in any phase. Component/Operation-level. **Canonical home IS the Probe component.** Convention satisfied.
- "Determination-mechanism piece check" → applies at Step 7 Reassembly check. Step-level. **Canonical home IS Step 7.** Convention satisfied.
- "Project-specific risk dimension check" → applies at Phase 0 dimension construction. Step-level. **Canonical home IS Phase 0.** Convention satisfied.
- "Multi-axis prosecution depth check" → applies at Phase 2 prosecution. Step-level. **Canonical home IS Phase 2.** Convention satisfied.
- "Output disposition categories" + "Axis coverage check" → both apply at Phase 3 Test of innovate. Step-level. Convention satisfied.

**Verdict on convention compliance:** every bolted-on subsection is *correctly placed* per the placement convention. The "appears bolted-on" sensation is the visual cost of the convention being followed strictly.

**But there are still two real issues even under the convention:**

1. **Visual weight.** The convention specifies *where* rules live, not *how they're formatted*. A 25-line "Load-bearing concept test" inside Phase 3 has the same heading level as Phase 3 itself. Readers can't visually distinguish spine from refinement.
2. **Hot spots.** Some steps accumulate refinements (sensemaking Phase 3 has 2; td-critique has 2; innovate Phase 3 has 2). Other steps have 0. When refinements pile up at one step, the convention's one-canonical-home rule produces subsection clusters at execution-hot points.

**Pro-bloat reading (strongest defense):**

- The bolted-on form is **execution-hugging**: the rule fires at the point in the process where its trigger condition exists. An LLM running the discipline encounters the rule exactly when it would otherwise miss it.
- Hoisting the rule to a sidebar or appendix (e.g., "Refinement notes") risks the LLM not consulting it during execution, which means the failure mode the rule prevents would re-surface.
- The placement convention itself is the load-bearing structure; following it strictly is the cost.

**Anti-bloat reading (strongest objection):**

- Visual reformatting alone — a typographic demotion (italic prefix "Refinement note:", smaller heading, indented block) — preserves canonical placement while restoring the spine's visual primacy.
- Hot-spot analysis: when one step accumulates 3+ refinements, a refactor up the abstraction (e.g., split Phase 3 into Phase 3a / 3b / 3c, each with one canonical refinement) might be warranted. But this is a bigger surgery than typographic.

---

## 3. Signal Log

| Signal | Region | Probed? | Strength |
|---|---|---|---|
| Three audiences in pattern 1 (skill-loader / contributor / mid-exec LLM) | A | YES | STRONG — distinct timings/audiences confirmed by file content |
| Pattern-2 summary tables drift over time | B | YES | MEDIUM — drift risk is real but unmeasured here; corpus-internal claim |
| Bolted-on subsections all comply with placement convention | C | YES | STRONG — direct audit against `enes/discipline_rule_placement.md` |
| Hot-spot pattern: refinements cluster at certain phases | C | PARTIALLY | MEDIUM — observed, but cause unclear (real complexity at those phases? or artifact-of-attention?) |
| Cross-discipline parallel: MVL/MVL+ duplication | (jump scan) | NO | Deferred — same audience-separation question at runner level; out of scope for this inquiry |
| `enes/regression/desc.md` symptom typology corroborates B2 redundancy | B | YES | STRONG — regression model treats failure-modes as schema-rich; current B2 doesn't add fields beyond names |

**Signals deferred (would expand the inquiry beyond scope):**

- Generative question: when does following the placement convention produce so much accretion at one step that the step itself should be refactored? (Frontier question; not this inquiry.)
- Why do some phases attract refinements and others don't? (Pattern question; flag for `/reflect`.)

---

## 4. Confidence Map

| Region | What's known | Confidence |
|---|---|---|
| A1 (Step 0 pre-read) is load-bearing | Defense documented; runner-layer invariant + in-skill enforcement | HIGH |
| A2 (Loading note) addresses maintainer audience | Different reader-state from A1; refactor protection | HIGH |
| A3 (mid-exec footer) is the most refactorable | Compressible to one-liner; defends a real audience but currently overweight | MEDIUM-HIGH |
| B1 (failure-mode body) is canonical | Single source of recognition+prevention content | HIGH |
| B2 (summary table) is the weakest of the three | Pure restatement with drift risk; backstop value low | HIGH (that it's weak) |
| B3 (SKILL.md parenthetical) addresses mid-exec LLM | Distinct audience from B1; same compressibility note as A3 | MEDIUM-HIGH |
| All pattern-3 subsections comply with placement convention | Direct audit | HIGH |
| Pattern-3 visual-weight critique survives | Convention covers placement, not formatting | HIGH |
| Pattern-3 execution-hugging argument is load-bearing | Rule must fire at point-of-use; sidebar risks under-firing | HIGH |
| Pattern-3 hot-spot refactor (Phase 3 split) is warranted | Unclear; needs more evidence than this inquiry has | LOW — flag as frontier |
| Removing B2 loses no information held nowhere else | B1 has clear headings + content; B2 names duplicate B1's headings | HIGH |
| Compressing A3/B3 to one-liner preserves the audience function | The audience needs a pointer; pointer length is independent of audience | HIGH |

**Confirmed absences (jump-scan):**

- No evidence that any of the three patterns is *purely* decorative. Every placement has at least one named audience or use-case under examination.
- No evidence that the placement convention itself is wrong; the audit confirms it.

---

## 5. Frontier State

**Stable:** the three regions are mapped at sufficient resolution for sense-making to anchor on. Each region has both readings articulated and load-bearing claims supported by file evidence.

**Discovery rate:** declining. Late cycles are confirming earlier signals (e.g., the maintainer-audience argument for A2 is corroborated by the parallel B1-canonical / B2-scan-layer structure in pattern 2). No new structural surprises in the last cycle.

**Bounded gaps:** remaining unknowns are about *whether to refactor*, not about *what's there*. The factual map is complete; the value-judgment work belongs to sense-making and critique.

---

## 6. Gaps and Recommendations

### Three primary handoff seeds for sense-making

1. **The audience-separation principle is doing real work in patterns 1 and 2.** Anchor sense-making around: "is audience-separation a sufficient justification, or does it need to come with a compression rule?" The current placements work but A3/B3 are unnecessarily long for the audience they address.
2. **The placement convention produces pattern 3 by design.** Sense-making should anchor around: "the convention is correct; the residual readability problem is typographic, not structural." This collapses the apparent bloat into a defended choice with a small refactor available (visual demotion, not relocation).
3. **B2 (summary tables) is the only placement without a strong audience defense.** It's a maintenance backstop that could be replaced by a heading-anchor list or removed. Sense-making should treat this as the one clean candidate for removal.

### Frontier (out of scope but flagged)

- Generative question about hot-spot accumulation: when does sensemaking Phase 3 / td-critique Phase 0 / innovate Phase 3 accumulate refinements at a rate that suggests the step itself should be split? Not answerable here; would need a separate inquiry on phase-level refactoring criteria.
- The `/MVL` vs `/MVL+` duplication noted in the prior conversation turn is a parallel audience-separation question at the runner layer. If the verdict on patterns 1–3 is "audience-separation justifies redundancy," that verdict generalizes upward to the runner duplication too. Worth a separate inquiry.

### Honest limits

- This exploration is corpus-internal: every claim about audience and load-bearing rests on the spec files' own framing. No external evidence (telemetry, real failure cases, user studies) is available. If the claims are wrong (e.g., contributors actually never read the Loading note), the verdicts in pattern 1 weaken.
- The "drift risk" claim for B2 is structural, not measured. No data here on how often B2 actually drifts out of sync with B1.
- Pattern 3's execution-hugging claim assumes LLM behavior — that hoisting reduces firing rate. This is plausible but unverified.

---

## Final Note

The exploration's most important finding is **the three patterns are structurally different problems**:

- **Patterns 1 and 2 are audience-separation patterns.** Verdict candidates: keep the canonical form; compress the convenience layers; consider removing B2 entirely.
- **Pattern 3 is a placement-convention pattern.** Verdict candidate: the convention is correct; the residual issue is typographic, not structural; the strongest defense is execution-hugging.

Sense-making should not collapse them into one verdict. Each pattern needs its own.
