---
status: active
type: spec_organization_principle
refines: devdocs/inquiries/2026-05-07_20-35__explore_discipline_definite_gaps_from_corpus_evidence/finding.md
impacts:
  - homegrown/explore/references/explore.md
  - homegrown/sense-making/references/sensemaking.md
  - homegrown/decompose/references/decompose.md
  - homegrown/innovate/references/innovate.md
  - homegrown/td-critique/references/td-critique.md
---
# Finding: Principled Rule Placement In Thinking-Discipline Specs

## Changes from Prior

**Prior path:** `devdocs/inquiries/2026-05-07_20-35__explore_discipline_definite_gaps_from_corpus_evidence/finding.md` (the previous inquiry that produced two for-sure-missing rules — Rule 1 *Type-Aware Probe* and Rule 2 *Contextual Surround Pre-Scan* — for the Structural Exploration discipline spec at `homegrown/explore/references/explore.md`).

**Revision trigger:** the user observed that the prior finding recommended placing Rule 1 at TWO surfaces (the Probe component sub-section + the Surface-Only Scanning failure-mode prevention sub-section) and Rule 2 at THREE surfaces (the Scan component sub-section + the Premature Depth failure-mode prevention sub-section + the Coarse Scan step within Resolution Progression). The user pointed out that adding the SAME rule paragraph at multiple surfaces causes bloat, and as more rules accumulate over time, this multi-surface duplication will create maintenance burden (every rule update must be applied at every surface).

**What's preserved:** the two rules themselves (Rule 1 Type-Aware Probe + Rule 2 Contextual Surround Pre-Scan) and their content — both rules are still adopted as for-sure-missing pieces in `homegrown/explore/references/explore.md`. Only the PLACEMENT recommendation is revised.

**What's changed:** the placement recommendation. Rule 1 now has ONE canonical home (the Probe component sub-section) instead of two surfaces. Rule 2 now has ONE canonical home (the Coarse Scan step within Resolution Progression) instead of three surfaces. Non-canonical surfaces get one-line cross-references, not duplicated rule paragraphs.

**What's new:** a generic placement principle — **Operation-or-Step-First with Scope-Of-Application** — that lives in a new "Conventions" sub-section between Key Components and Process Model. The principle applies to all five thinking-discipline specs in the methodology library at `homegrown/`.

**Migration:** when implementing the previous inquiry's recommendation, follow this finding's placement strategy instead. The two rules' content is unchanged; only their location and the cross-reference shape differ.

## Question

You noticed that the previous finding said to add Rule 1 (Type-Aware Probe) at TWO surfaces and Rule 2 (Contextual Surround Pre-Scan) at THREE surfaces in `homegrown/explore/references/explore.md` (the Structural Exploration discipline spec). Putting the same rule paragraph at multiple places duplicates content. As more rules accumulate, the spec bloats, and every rule update must be applied at every surface. You said: *"we need proper places to add this."*

Your question: what is the principled placement strategy for refinement rules in a thinking-discipline spec — one that gives each rule a single canonical home, uses cross-references rather than text duplication, scales as more rules are added, and preserves cold-readability for a reader who arrives at the spec from any natural reading path?

## Finding Summary

- **The placement principle: Operation-or-Step-First with Scope-Of-Application.** Each refinement rule has ONE canonical home in the spec, determined by the rule's scope of application:
  - If the rule applies to ALL instances of an operation (regardless of which step invokes it) — its canonical home is the **Component sub-section** describing that operation (under the spec's Key Components section).
  - If the rule applies only to a SPECIFIC step's invocation of an operation (e.g., a particular phase, cycle, or process step) — its canonical home is the **Process Model step** at which the rule fires.
  - If the rule has no positive form (it can only be expressed as failure prevention; the operation-level or step-level statement does not make sense) — its canonical home is the **Failure Mode prevention** sub-section.

- **The scope test is binary and mechanical.** A future contributor adds a new rule by asking: *"Does this rule apply to ALL instances of operation X, or only to specific step Y?"* The yes/no answer determines placement without subjective judgment. When in doubt, the more SPECIFIC scope wins (step-level beats operation-level when both seem to apply).

- **Cross-references at non-canonical surfaces are one-line pointers, not duplications.** Form: *"For [brief role description], see [canonical home path]."* Cross-references navigate readers to the canonical home; they do not summarize or duplicate the rule's content. Single source of truth is preserved.

- **Applied to the two rules from the previous inquiry's finding:**
  - **Rule 1 (Type-Aware Probe)** has operation-level scope (it applies to all probes of candidates carrying load-bearing quantifiable claims, not just one step). **Canonical home: Probe component sub-section "Type-Aware Probing"** (under Key Components → Probe). One-line cross-reference at the Surface-Only Scanning failure-mode prevention sub-section.
  - **Rule 2 (Contextual Surround Pre-Scan)** has step-level scope (it applies specifically to coarse scans, not all scans). **Canonical home: Resolution Progression's Coarse Scan step** (under Process Model → Resolution Progression → step 1: Coarse Scan). One-line cross-reference at the Premature Depth failure-mode prevention sub-section. Optional one-line cross-reference at the Scan component (recommended for discoverability).

- **The placement principle itself is a meta-rule with its own canonical home.** The principle lives in a new sub-section titled *"Conventions: How Rules Are Organized in This Spec"* placed between Key Components and Process Model in `explore.md`. Generic content; applies to all five thinking-discipline specs.

- **Generic applicability across all five thinking-discipline specs in `homegrown/`** — Structural Exploration (`homegrown/explore/references/explore.md`), Structural Sensemaking (`homegrown/sense-making/references/sensemaking.md`), Structural Decomposition (`homegrown/decompose/references/decompose.md`), Structural Innovation (`homegrown/innovate/references/innovate.md`), Structural Critique (`homegrown/td-critique/references/td-critique.md`). Each spec adopts its own "Conventions" sub-section.

- **Bloat reduction verified.** The previous finding's multi-surface recommendation would have placed 5 rule paragraphs across `explore.md` (2 for Rule 1 + 3 for Rule 2). This finding's single-canonical strategy places 2 rule paragraphs (1 per rule) plus ~3 one-line cross-references. **~2.5× content reduction; 2-3× maintenance reduction** (rule updates touch only the canonical home).

- **Verdict: ACTIONABLE.** The strategy is mechanical (binary scope test), proportional (~30-40 lines added to `explore.md`), preserves the spec's existing 8-section structure, satisfies the user's four properties (single canonical home / cross-references / scales / cold-readability), and applies generically across all five thinking-discipline specs.

## Finding

### 1. Why this matters — the spec-organization contract

A thinking-discipline spec like `homegrown/explore/references/explore.md` (the Structural Exploration discipline spec, which defines the discipline's modes, components, process, coverage strategy, and failure modes) is a long-lived artifact. As the project's understanding of the discipline matures, the spec accumulates refinement rules — small additions that catch newly-observed failure patterns. The previous inquiry produced two such rules; future inquiries will produce more.

If each rule is placed at multiple surfaces (the operation that produces it + the failure mode it prevents + maybe the process step where it fires), the rule's text gets duplicated. With N rules and ~K surfaces per rule, content grows multiplicatively. Updates to a rule must propagate to every duplicate copy. The spec becomes harder to read and harder to maintain.

The user's concern is structural: as a methodology library matures, multi-surface duplication is unsustainable. The right fix is not a one-off rearrangement of the previous finding's two rules; it is a placement convention that future rules also follow. The convention must be principled (so a future contributor can apply it without guessing) and generic (so it applies to all five thinking-discipline specs in `homegrown/`, not just `explore.md`).

### 2. The placement principle

**Operation-or-Step-First with Scope-Of-Application.**

A rule's canonical home is determined by the rule's scope of application. There are three placement categories:

**Category 1 — Operation-level scope.** The rule applies to ALL instances of an operation, regardless of which step invokes that operation. The rule refines or extends what makes the operation "good." The canonical home is the **Component sub-section** describing that operation, under the spec's Key Components section. Reader expectation: a reader looking up "how does X work?" finds the rule at X's component description.

**Category 2 — Step-level scope.** The rule applies only to a specific step's invocation of an operation (or to a specific phase, cycle, or process step). The rule refines what happens AT that step, not what the operation looks like in general. The canonical home is the **Process Model step** at which the rule fires. Reader expectation: a reader following the process arc finds the rule at the relevant step.

**Category 3 — Failure-only-form.** The rule has no positive form — it can only be expressed as preventing a failure, with no meaningful operation-level or step-level statement. The canonical home is the **Failure Mode prevention** sub-section. This category is rare; most rules have a positive form.

**The scope test (mechanical):** *"Does this rule apply to ALL instances of operation X, or only to specific step Y?"* The yes/no answer determines placement. When both seem to apply, the more SPECIFIC scope wins (step-level beats operation-level) because over-generalizing creates wrong-application problems for readers and contributors.

### 3. The cross-reference shape

At surfaces where the rule connects but is not canonically homed, add a **one-line cross-reference**:

> *"For [brief role description], see [canonical home path]."*

Three properties of the cross-reference:
- **Length: one line.** Not a paragraph; not a summary.
- **Role: navigation, not summary.** The reader follows the cross-reference to reach the canonical home; the cross-reference does not contain rule content.
- **Brief role description:** enough for the reader to know what they will find at the canonical home, without duplicating the rule's text.

Examples of the cross-reference shape:

- *"For type-aware probing of candidates carrying load-bearing quantifiable claims, see Probe → Type-Aware Probing."*
- *"For coarse scans of territories with an identifiable contextual surround layer, see Resolution Progression → Coarse scan."*

The cross-reference's role description names what the rule is ABOUT (the brief topic) without containing the rule itself. The reader who wants the rule's full content follows the path.

### 4. Application to Rule 1 (Type-Aware Probe)

Rule 1 was named in the previous inquiry's finding (the prior finding at `devdocs/inquiries/2026-05-07_20-35__explore_discipline_definite_gaps_from_corpus_evidence/finding.md`) and says: *"When the coarse scan inventories a candidate that carries a load-bearing quantifiable claim ... at least one empirical probe of the quantifiable claim is required before the candidate can pass into the stabilized candidate set."*

**Scope analysis:** Rule 1 applies to ALL probes of candidates carrying load-bearing quantifiable claims. It does not fire only at a specific step — it applies wherever a probe is invoked on such a candidate. **Operation-level scope.**

**Canonical home:** the **Probe component sub-section** in `homegrown/explore/references/explore.md`, specifically a new sub-section under Key Components → Probe titled *"Type-Aware Probing."* The full rule paragraph lives here (and only here).

**Cross-reference at the Surface-Only Scanning failure-mode prevention sub-section** (under Failure Modes → 2. Surface-Only Scanning → How to prevent), appended to the existing prevention sentence:

> *"For type-aware probing of candidates carrying load-bearing quantifiable claims, see Probe → Type-Aware Probing."*

**Result:** Rule 1's content lives at one place (Probe component). Reader of the Probe component sees the rule directly. Reader of the Surface-Only Scanning failure mode follows the cross-reference. No duplication.

### 5. Application to Rule 2 (Contextual Surround Pre-Scan)

Rule 2 was named in the previous inquiry's finding and says: *"When the territory has an identifiable contextual / structural surround layer ... the Coarse Scan must include items from that surround layer before going deep on inquiry-specific objects."*

**Scope analysis:** Rule 2 applies SPECIFICALLY to coarse scans — the first-pass breadth scan in Resolution Progression. It does not apply to fine scans, signal-detection passes, or other scan invocations. **Step-level scope.**

**Canonical home:** the **Coarse Scan step** in Resolution Progression, under Process Model → Resolution Progression → step 1: Coarse scan. The full rule paragraph lives here (and only here).

**Cross-reference at the Premature Depth failure-mode prevention sub-section** (under Failure Modes → 1. Premature Depth → How to prevent), appended to the existing prevention sentence:

> *"For coarse scans of territories with an identifiable contextual / structural surround layer, see Resolution Progression → Coarse scan."*

**Optional cross-reference at the Scan component** (under Key Components → Scan → "A good scan:"), appended to the existing bullet list:

> *"For coarse scans of layered territories, additional breadth requirements apply — see Resolution Progression → Coarse scan."*

This cross-reference is optional but recommended for discoverability — a reader who arrives at the Scan component looking for "what makes a good scan?" gets a pointer to the step-level rule. Without it, the Scan component reader might miss Rule 2 entirely.

**Result:** Rule 2's content lives at one place (Coarse Scan step). Multiple natural reading paths converge on the canonical home via cross-references.

### 6. Where the placement principle itself lives

The placement principle is a meta-rule — a rule about how rules are organized in the spec. It has its own canonical home.

**Canonical home:** a new sub-section titled *"Conventions: How Rules Are Organized in This Spec"* placed **between Key Components and Process Model** in `explore.md` (and analogously in the other four thinking-discipline specs).

**Why this placement:** the convention applies AFTER the reader knows what Components are (so it must come after Key Components) but BEFORE the reader sees the Process Model (so it can frame how rules within Process Model are organized). The location is structurally salient — its own sub-section — without disrupting the spec's main flow.

**Sub-section content (the principle's full text):**

> *"### Conventions: How Rules Are Organized in This Spec*
> 
> *Refinement rules added to this spec follow the **Operation-or-Step-First with Scope-Of-Application** convention. Each rule has ONE canonical home, determined by the rule's scope:*
> 
> - *If the rule applies to ALL instances of an operation (regardless of which step invokes it), the canonical home is the operation's Component sub-section under Key Components.*
> - *If the rule applies only to a SPECIFIC step's invocation of an operation (or to a specific phase / cycle / process step), the canonical home is the Process Model step at which the rule fires.*
> - *If the rule has no positive form (it can only be expressed as failure prevention), the canonical home is the Failure Mode prevention sub-section.*
> 
> *To pick a canonical home, ask: 'Does this rule apply to ALL instances of operation X, or only to specific step Y?' The answer determines placement. When in doubt, the more specific scope wins (step-level beats operation-level when both seem to apply).*
> 
> *At non-canonical surfaces, use a one-line cross-reference: 'For [brief role description], see [canonical home path].' Cross-references navigate readers to the canonical home; they do not summarize or duplicate the rule's content.*
> 
> *This convention applies to all five thinking-discipline specs in the methodology library at `homegrown/`: Structural Exploration (`explore.md`), Structural Sensemaking (`sense-making/references/sensemaking.md`), Structural Decomposition (`decompose/references/decompose.md`), Structural Innovation (`innovate/references/innovate.md`), Structural Critique (`td-critique/references/td-critique.md`). Each spec has the same Components / Process Model / Failure Modes structure; each adopts its own 'Conventions' sub-section."*

### 7. Why this strategy avoids the bloat the user named

**Multi-surface duplication (the previous finding's recommendation):** Rule 1 at 2 surfaces × 1 paragraph + Rule 2 at 3 surfaces × 1 paragraph = **5 rule paragraphs** total in `explore.md`. Each paragraph is ~6-8 sentences. Rule updates require touching 2 places for Rule 1 and 3 places for Rule 2.

**Single-canonical-home (this strategy):** Rule 1 at 1 surface + Rule 2 at 1 surface = **2 rule paragraphs** in `explore.md`. Plus ~3 one-line cross-references. Plus the Conventions sub-section (~10 lines). Rule updates touch 1 place each.

**Bloat reduction:** 5 paragraphs → 2 paragraphs + 3 lines + 1 sub-section = **~2.5× content reduction.**

**Maintenance reduction:** 2-3 places per rule → 1 place per rule = **2-3× reduction in update locations.**

**Linear scaling for future rules:** with N rules, the spec adds N rule paragraphs (at canonical homes) + ~2N cross-reference lines. Linear. The multi-surface alternative would add N×K rule paragraphs (where K is the average number of surfaces); multiplicative.

The strategy demonstrably scales as more rules accumulate.

### 8. Why cold-readability is preserved

A natural reading path is the sequence of sections a reader would visit when arriving at `explore.md` with a specific question. Three relevant reading paths for the two existing rules:

- **Reader looking at the Probe component:** sees Rule 1 directly at its canonical home (Type-Aware Probing sub-section).
- **Reader looking at the Surface-Only Scanning failure mode:** sees the one-line cross-reference; follows it to Probe → Type-Aware Probing.
- **Reader following the Process Model's Resolution Progression:** sees Rule 2 directly at the Coarse Scan step.
- **Reader looking at the Premature Depth failure mode:** sees the one-line cross-reference; follows it to Resolution Progression → Coarse scan.
- **Reader looking at the Scan component:** sees the optional one-line cross-reference; follows it to Resolution Progression → Coarse scan.

Every natural reading path either leads directly to the rule (at its canonical home) or to a one-line cross-reference that navigates to the canonical home. The reader is never stranded.

### 9. Verdict

**ACTIONABLE.** The placement strategy:
- Gives each rule ONE canonical home (single source of truth).
- Uses one-line cross-references at non-canonical surfaces (no rule duplication).
- Scales linearly as more rules are added (~2.5× bloat reduction; 2-3× maintenance reduction).
- Preserves cold-readability for readers on any natural reading path.
- Is mechanical (binary scope test; tiebreaker is "more specific wins").
- Is generic across all five thinking-discipline specs in `homegrown/`.
- Preserves `explore.md`'s existing structure (8 top-level sections; ~30-40 lines added).

## Next Actions

### MUST

- **What:** Add the new sub-section *"Conventions: How Rules Are Organized in This Spec"* to `homegrown/explore/references/explore.md` between Key Components and Process Model. Content: the placement principle (Operation-or-Step-First with Scope-Of-Application), the three placement categories, the scope test, the cross-reference shape, and the generic-applicability note covering all five thinking-discipline specs in `homegrown/`.
  - **Who:** Maintainer of `homegrown/explore/references/explore.md`.
  - **Gate:** verifiable by single read after the edit lands.
  - **Why:** Establishes the placement convention as part of the spec. Future contributors adding rules see the convention and follow it.

- **What:** Place Rule 1 (Type-Aware Probe) at its canonical home — the new sub-section *"Type-Aware Probing"* under Key Components → Probe in `homegrown/explore/references/explore.md`. Add a one-line cross-reference at the Surface-Only Scanning failure-mode prevention sub-section.
  - **Who:** Maintainer of `homegrown/explore/references/explore.md`.
  - **Gate:** in next 3 finding.md compilations or spec edits, confirm Rule 1's full text appears only at its canonical home (no duplication at the Surface-Only Scanning prevention sub-section).
  - **Why:** Implements the strategy for Rule 1. Replaces the previous finding's two-surface placement.

- **What:** Place Rule 2 (Contextual Surround Pre-Scan) at its canonical home — extending the description of Coarse Scan in Process Model → Resolution Progression in `homegrown/explore/references/explore.md`. Add one-line cross-references at the Premature Depth failure-mode prevention sub-section and (optional, recommended) at the Scan component's "A good scan:" bullets.
  - **Who:** Maintainer of `homegrown/explore/references/explore.md`.
  - **Gate:** in next 3 finding.md compilations or spec edits, confirm Rule 2's full text appears only at its canonical home (no duplication at the Premature Depth prevention or Scan component).
  - **Why:** Implements the strategy for Rule 2. Replaces the previous finding's three-surface placement.

### COULD

- **What:** Adopt the placement principle in the other four thinking-discipline specs in `homegrown/` — Structural Sensemaking, Structural Decomposition, Structural Innovation, Structural Critique. Each spec adds its own *"Conventions"* sub-section adapted to its specific section names.
  - **Who:** Maintainers of the four other discipline specs.
  - **Gate:** when each of those specs has a refinement rule added (or proactively, in advance).
  - **Why:** Generic applicability — the principle works the same way across all five specs. Adopting in advance prevents future multi-surface duplication.

### DEFERRED

- **What:** Automated tooling that validates cross-reference targets in `explore.md` (e.g., a script that checks every cross-reference points to a real section).
  - **Gate:** revive only if the spec accumulates enough cross-references that manual validation becomes burdensome (~20+ cross-references across all five specs).
  - **Why (if revived):** prevents broken cross-references after spec edits; mechanical safety net.

- **What:** A unified "Rule Index" section listing all refinement rules with pointers to their canonical homes.
  - **Gate:** revive only if the spec accumulates 10+ rules and readers report difficulty finding rules through the existing structure.
  - **Why (if revived):** provides a flat browse surface alongside the structural placement; trade-off is the index becomes another duplication risk.

## Reasoning

### Why Rule 2's canonical home is the Coarse Scan step, not the Scan component

The Scan component describes scanning in general — both coarse scans (broad first-pass) and fine scans (deeper second-pass within probed regions). Rule 2 specifically applies to COARSE SCANS only, not all scans. Putting Rule 2 in the Scan component would over-generalize: a reader applying Rule 2 to fine scans would be wrong.

The "more specific scope wins" tiebreaker handles this case mechanically. Step-level scope (coarse scan) beats operation-level scope (all scans). The reader who arrives at the Scan component looking for general scan rules sees the optional cross-reference pointing to the more-specific step rule.

### Why the failure-mode prevention sub-sections are NOT canonical homes for these rules

`explore.md`'s Failure Modes section (e.g., the Surface-Only Scanning sub-section, the Premature Depth sub-section) has a consistent structure: name, description, "How to recognize," "How to prevent." The "How to prevent" sub-sections are SHORT one-to-two-sentence prevention guidance. The convention in `explore.md` is that failure-mode prevention is brief.

Adding a multi-sentence rule paragraph to a failure-mode prevention sub-section would break this convention — the prevention sub-section would balloon. The rule's home is structurally elsewhere (where its operation or step is described); the failure-mode prevention sub-section gets a one-line cross-reference pointing to the canonical home.

This is why Category 3 (Failure-only-form) is rare: most rules have a positive form that fits at a Component or Process Model step. The Failure Mode prevention is the canonical home only when the rule cannot be expressed positively.

### Why the meta-rule sits between Key Components and Process Model

The meta-rule (the placement principle itself) is a CONVENTION about how rules within the spec are organized. It applies AFTER the reader knows what Components are and what the Process Model is.

Three candidate placements were considered:
- (A) At the very start of the spec, before "What Exploration Is": rejected because the reader doesn't yet know what "Component" or "Process Model step" means, so the principle is premature.
- (B) Between Key Components and Process Model: chosen because the reader has just learned what Components are (so the principle's reference to "Component sub-section" is meaningful) and is about to read Process Model (so the principle's reference to "Process Model step" frames what they're about to see).
- (C) At the end of the spec (after Failure Modes): rejected because by that point the reader has finished reading; the convention is more useful upstream.

Placement B is the right balance of structural salience and reader context.

### Why the strategy is generic across all five thinking-discipline specs

The five specs in `homegrown/` have analogous structures:
- `homegrown/explore/references/explore.md` — Structural Exploration: Modes / Components / Process Model / Coverage / Failure Modes.
- `homegrown/sense-making/references/sensemaking.md` — Structural Sensemaking: Components (Cognitive Anchors / Boundary Construction / Conceptual Structure) / Process Model (5 phases) / Saturation Indicators / Failure Modes.
- `homegrown/decompose/references/decompose.md` — Structural Decomposition: Components / Process Model (7 steps) / Coverage / Failure Modes.
- `homegrown/innovate/references/innovate.md` — Structural Innovation: Components (Mechanisms / Seed) / Process Model (3 phases) / Coverage / Failure Modes.
- `homegrown/td-critique/references/td-critique.md` — Structural Critique: Components / Process Model (5 phases) / Coverage / Failure Modes.

All five specs have the Components / Process-Model / Failure-Modes triplet. The placement principle's three categories map to these three structural elements identically. Each spec gets its own "Conventions" sub-section with the same principle, adapted to its specific section names.

Generic applicability is structural, not coincidental.

### Significant alternatives considered and rejected

- **"Add Rule 1 at the Probe component AND keep a copy at the Surface-Only Scanning failure-mode prevention."** Rejected because it duplicates content (the user's named bloat concern). The cross-reference replaces the duplicate.

- **"Make a new top-level 'Refinement Rules' section listing all rules."** Rejected because it introduces a new structural element to the spec and creates a third surface where rules might live (risking duplication with existing Components and Process Model). The Conventions sub-section + canonical-home placement is more disciplined.

- **"Restructure `explore.md` into a different organizational shape."** Rejected per the user's implicit "no restructuring" constraint and per the proportional-scope criterion. The existing structure is fine; only the placement convention is missing.

- **"Apply the principle only to `explore.md` and address the other four specs separately."** Rejected because the principle is structurally generic. Adopting it as a one-spec convention now and re-deriving it later for the other four specs would be redundant work.

- **"Use summary-style cross-references that briefly describe the rule's content."** Rejected because summary-style cross-references still duplicate content (just shorter). The whole point is single source of truth. The cross-reference's role is navigation only.

## Open Questions

### Monitoring

- After the principle and the two rule placements land in `homegrown/explore/references/explore.md`, observe the next 3 spec edits or finding.md compilations that touch `explore.md`. Verify the convention is followed (no rule duplicated; cross-references are one-line).
- If a future rule has a scope that fits BOTH operation-level and step-level, observe whether the "more specific scope wins" tiebreaker resolves it cleanly. If contributors find the tiebreaker ambiguous, refine the wording.

### Blocked

- Adoption of the principle in the other four thinking-discipline specs is blocked until each spec has a refinement rule needing placement. Adopting proactively (without a triggering rule) is COULD-tier, not MUST-tier.

### Research Frontiers

- Whether the placement principle should be promoted from a per-spec convention to a project-wide methodology document at `homegrown/protocols/` (as a new protocol about spec organization). Current evidence is one inquiry's recurrence; promotion would need 3+ specs with adopted conventions.

### Refinement Triggers

- Re-open the placement principle if a future rule has a scope that fits NONE of the three categories (operation-level, step-level, failure-only-form). Add a new category or refine the existing categories.
- Re-open the cross-reference shape if readers consistently misread one-line cross-references as the full rule. Add a marker (e.g., "→ See ...") or change the format.
- Re-open the meta-rule's sub-section placement (between Key Components and Process Model) if reader navigation testing shows the convention is missed. Consider moving to the start of the spec or adding a TOC reference.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
/MVL+

in 
devdocs/inquiries/2026-05-07_20-35__explore_discipline_definite_gaps_from_corpus_evidence/finding.md
u said 

The fix (one-paragraph extension):

"Type-Aware Probe (extension of Surface-Only Scanning prevention). When the coarse scan inventories a candidate that carries a load-bearing quantifiable claim — a claim whose answer is a number or measurable property (cost, benefit, frequency, magnitude, count, etc.) AND whose answer determines whether the candidate stabilizes or is dismissed — at least one empirical probe of the quantifiable claim is required before the candidate can pass into the stabilized candidate set. The general 'probe at least one signal' rule of Surface-Only Scanning prevention does not satisfy this requirement: the probe must address the quantifiable claim specifically. This rule applies in BOTH artifact and possibility modes — in artifact mode the quantifiable claim is about how many objects exist or what their cost is; in possibility mode the quantifiable claim is about how often a candidate would fire or how cheap it would be. Dispatching a load-bearing quantifiable claim with qualitative reasoning ('this is probably expensive', 'this likely happens often') without an empirical probe is an instance of Surface-Only Scanning."

Where it sits: Add this paragraph at TWO surfaces in homegrown/explore/references/explore.md:



but adding it to 2 places will bloat, and in long run such act will cause issues. we need proper places to add this.
```

</details>
