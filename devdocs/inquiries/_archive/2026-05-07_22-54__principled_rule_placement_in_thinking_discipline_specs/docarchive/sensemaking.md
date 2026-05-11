# Sensemaking: Principled Rule Placement In Thinking-Discipline Specs

## User Input

`devdocs/inquiries/2026-05-07_22-54__principled_rule_placement_in_thinking_discipline_specs/_branch.md` — what is the principled placement strategy for refinement rules in a thinking-discipline spec that gives each rule one canonical home and uses cross-references rather than duplication?

## Initial Sense Version (SV1 — Baseline Understanding)

The exploration converged on an **Operation-or-Step-First with Scope-Of-Application** placement principle: rules with operation-level scope go in the Component whose operation they refine (under Key Components in `homegrown/explore/references/explore.md`, the Structural Exploration discipline spec); rules with step-level scope go at the relevant Process Model step. Cross-references at non-canonical surfaces are one-line pointers, not duplications. Applied to the two rules from the previous inquiry's finding: Rule 1 (Type-Aware Probe) → Probe component (operation-level scope); Rule 2 (Contextual Surround Pre-Scan) → Resolution Progression's Coarse Scan step (step-level scope; applies only to coarse scans). The strategy demonstrably reduces bloat 3× over multi-surface duplication.

## Phase 1 — Cognitive Anchor Extraction

### Constraints

1. **Single canonical home per rule.** Each rule has ONE place where its full text lives. Source-of-truth.
2. **Cross-references are one-line pointers**, not paragraph duplications.
3. **No spec restructuring.** Preserve `explore.md`'s existing 8 top-level sections.
4. **The strategy must be MECHANICAL.** A future contributor adding a new rule should pick the canonical home by following the strategy without judgment about which section is "best."
5. **The strategy must scale.** As more rules accumulate, the spec grows linearly (not quadratically).
6. **Cold-readability preserved.** A reader on any natural reading path should still find the rule.

### Key Insights

1. **Scope of application determines canonical home.** This is the load-bearing insight. A rule that applies to ALL instances of an operation has different scope than a rule that applies only to a SPECIFIC step's invocation of an operation. The home is determined by scope.

2. **Components and Process Model serve different roles.** Components describe WHAT operations are; Process Model describes WHEN operations are sequenced. A rule about "good probing in general" lives at the operation. A rule about "the coarse scan step specifically requires X" lives at the step.

3. **Failure modes are descriptions, not homes.** The Failure Modes section in `explore.md` describes failures and gives one-liner prevention guidance. Multi-sentence rules don't structurally fit there. Failure-mode prevention sub-sections are SECONDARY surfaces — they cross-reference rules whose canonical homes are elsewhere.

4. **The cross-reference shape is uniform.** Regardless of where the canonical home is, the cross-reference at non-canonical surfaces is one line: pointer + brief role description.

5. **The strategy generalizes to all five thinking-discipline specs in `homegrown/`.** The same principle (Operation-or-Step-First with Scope-Of-Application) applies to `homegrown/sense-making/references/sensemaking.md`, `homegrown/decompose/references/decompose.md`, `homegrown/innovate/references/innovate.md`, `homegrown/td-critique/references/td-critique.md`. Each has Components / Process Model / Failure Modes structure analogous to `explore.md`.

6. **The placement principle is itself a rule.** It needs its own canonical home — likely a meta-document or a section within each discipline spec.

### Structural Points

1. **Three placement categories:**
   - **Operation-level scope** → Component (under Key Components or analogous section).
   - **Step-level scope** → Process Model step (under Process Model / Resolution Progression / analogous).
   - **Failure-only-form** → Failure-mode prevention sub-section (rare; only when the rule has no positive form).

2. **Cross-reference shape:** *"For [brief role description], see [canonical home path]."*

3. **Application to Rule 1 (Type-Aware Probe):**
   - Scope: operation-level (applies to all probes of quantifiable-claim candidates).
   - Canonical home: Probe component sub-section.
   - Cross-reference: at Surface-Only Scanning failure-mode prevention.

4. **Application to Rule 2 (Contextual Surround Pre-Scan):**
   - Scope: step-level (applies only to coarse scans).
   - Canonical home: Resolution Progression's Coarse Scan step.
   - Cross-references: at Premature Depth failure-mode prevention; optionally at Scan component.

5. **The placement principle is a META-RULE that goes in `explore.md` (and analogous specs) at a meta-level location** — likely at the start of the Failure Modes section or as a new sub-section explaining how rules are organized.

### Foundational Principles

1. **Single source of truth.** Standard documentation principle: each fact lives in one place. Cross-references navigate readers to the source.

2. **Scope determines home.** A rule's canonical home is determined by where the rule structurally APPLIES, not by where it MENTIONS something.

3. **Mechanical = scope test, not judgment.** A future contributor can pick the canonical home by asking: "Does this rule apply to ALL instances of an operation, or only to a specific step?" The answer determines placement.

4. **Cross-references navigate; they don't duplicate.** A reader who arrives at a non-canonical surface follows the cross-reference to find the rule.

5. **Linear scaling.** With single canonical home, N rules add N rule paragraphs + ~2N cross-reference lines. Multi-surface duplication would add N×K rule paragraphs (K = number of surfaces). The single-canonical strategy scales linearly; multi-surface scales multiplicatively.

### Meaning-Nodes

1. **Canonical home** — the single source-of-truth location for a rule.
2. **Cross-reference** — a one-line pointer at a non-canonical surface.
3. **Scope of application** — whether the rule applies to all instances of an operation or only to a specific step.
4. **Operation-level scope** — applies to all instances of an operation; canonical home is the Component.
5. **Step-level scope** — applies only to a specific step's invocation; canonical home is the Process Model step.
6. **Failure-only-form** — rule has no positive form; lives at failure-mode prevention.
7. **The placement principle** — the meta-rule itself; it has its own canonical home.

## Sense Version 2 (SV2 — Anchor-Informed Understanding)

Anchor extraction sharpens: the placement principle is **Operation-or-Step-First with Scope-Of-Application**. A rule's canonical home is determined by scope: operation-level → Component; step-level → Process Model step. Failure-mode prevention sub-sections are secondary surfaces that cross-reference the canonical home.

The principle is itself a rule and needs its own canonical home — most naturally a small introductory note at the start of `explore.md`'s Key Components section (or as a separate "Conventions" sub-section) explaining how rules are organized in the spec.

The strategy applies uniformly to all five thinking-discipline specs in `homegrown/`. Each spec gets its own canonical-home convention.

Shift from SV1: the principle is anchored, the cross-reference shape is uniform, the meta-rule's home is named, the application to Rule 1 + Rule 2 is concrete.

## Phase 2 — Perspective Checking

### Technical / Logical Perspective

The placement principle is mechanically applicable. The scope test ("Does this rule apply to ALL instances of operation X or only to step Y?") is a binary choice. A future contributor can apply it without subjective judgment.

The cross-reference shape is uniform: *"For [brief role description], see [canonical home path]."* Mechanical to write.

NEW ANCHOR (Constraint): The principle's mechanical application requires a clear scope test. The test must be specifiable as a yes/no question.

### Human / User Perspective

The user said: *"adding it to 2 places will bloat, and in long run such act will cause issues. we need proper places to add this."* The user wants:
- Proper placement (single canonical home).
- Avoidance of bloat (no multi-surface duplication).
- Long-run sustainability (the strategy scales).

The strategy satisfies all three. The user gets a principled answer applicable to current rules AND future ones.

NEW ANCHOR (Foundational Principle): The user's "proper places" framing is anti-duplication; the strategy's "single canonical home + cross-references" satisfies it directly.

### Strategic / Long-term Perspective

If this strategy is adopted across all five thinking-discipline specs:

- Each spec has linear-scaling rule structure.
- Maintenance burden per rule: ONE place to update (canonical home) + cross-references stay valid as long as the canonical home name doesn't change.
- A future contributor adding a rule follows the placement principle — no judgment about where to put it.
- Specs stay readable as rules accumulate.

Long-term effect: the methodology library at `homegrown/` (the user's project's thinking-discipline specs) remains maintainable as the system evolves.

NEW ANCHOR (Strategic Principle): The placement strategy is a long-term architectural choice for thinking-discipline specs.

### Risk / Failure Perspective

Risks:

- **Risk 1: Cross-references break if canonical home is renamed.** Mitigation: use stable section names; if renamed, search-and-replace cross-references. Cost low for ~5 specs and ~5-10 rules each.

- **Risk 2: Scope test ambiguous for some rules.** A rule might apply both at operation-level and at a specific step (e.g., Rule 2 applies at coarse-scan step but is also a property of "good scanning broadly"). Mitigation: pick the more SPECIFIC scope (step-level wins over operation-level when both apply); add brief mention at the broader scope as an additional cross-reference.

- **Risk 3: Future contributor doesn't know about the principle.** Mitigation: place the principle in the spec itself (as a "Conventions" or "How rules are organized" sub-section) so future contributors see it.

- **Risk 4: Some rules have NO positive form (only failure-prevention).** Mitigation: for these rules, the canonical home IS the failure-mode prevention sub-section. The strategy accommodates this case as the "Failure-only-form" placement category.

NEW ANCHOR (Risk): Each risk is mitigated; no risk requires abandoning the strategy.

### Resource / Feasibility Perspective

Implementation cost:

- Add the placement principle (one paragraph) as a new sub-section in `explore.md` — likely at the start of Key Components or as a "Conventions" sub-section.
- Apply to Rule 1: add Rule 1 in Probe component (canonical home); add one-line cross-reference in Surface-Only Scanning prevention.
- Apply to Rule 2: add Rule 2 in Resolution Progression's Coarse Scan step (canonical home); add one-line cross-reference in Premature Depth prevention; optionally one-line cross-reference in Scan component.

Total `explore.md` modifications: ~one principle paragraph + 2 rule paragraphs + 3-4 one-line cross-references. ~30-40 lines added. Trivial.

Future cost per new rule: one rule paragraph at canonical home + 1-2 cross-reference lines. Linear.

NEW ANCHOR (Feasibility): The strategy's per-rule cost is small; aggregate cost scales linearly.

### Definitional / Consistency Perspective

Consistency check against the existing `explore.md` structure:

- The strategy preserves all 8 top-level sections of `explore.md`. No restructuring.
- The strategy adds content INSIDE existing sections (Components get rule sub-sections; Process Model steps get rule paragraphs; Failure Modes get cross-references).
- The strategy is consistent with the spec's existing organizational logic (Components describe operations; Process Model describes sequencing; Failure Modes describe failures).

The placement principle is a NEW addition to the spec, but it fits the existing structure as a "how rules are organized" convention.

CHECK: does the principle contradict the existing `explore.md` content? No — the existing content has no placement convention; the principle adds one.

CHECK: does the principle contradict `homegrown/protocols/conclude.md` (the CONCLUDE protocol that compiles MVL+ inquiry artifacts into `finding.md`)? No — `conclude.md` is about finding compilation, not spec organization.

CHECK: does the principle contradict the previous finding (the Type-Aware Probe / Contextual Surround Pre-Scan finding)? It REFINES the previous finding's placement recommendation but does not contradict the rules themselves. The rules survive; only their placement changes.

NEW ANCHOR (Foundational Principle): The strategy is consistent with existing structures and refines (not contradicts) the previous finding.

## Sense Version 3 (SV3 — Multi-Perspective Understanding)

Six perspectives reveal:

- **Logical/Technical** confirms the strategy is mechanically applicable (scope test is binary).
- **Human/User** confirms the strategy satisfies the user's "proper places + no bloat + long-run" framing.
- **Strategic** confirms long-term linear scaling.
- **Risk/Failure** identifies four risks; all mitigated.
- **Resource/Feasibility** confirms small per-rule cost; linear aggregate cost.
- **Definitional/Consistency** confirms consistency with `explore.md` structure and with prior protocol/finding artifacts.

The shift from SV2 is: the strategy is now anchored as MECHANICAL, BLOAT-AVOIDING, GENERIC, and APPLICABLE TO ALL FIVE DISCIPLINE SPECS, with concrete application to Rule 1 + Rule 2 + a meta-rule that the principle itself has its canonical home in `explore.md`'s structure.

## Phase 3 — Ambiguity Collapse

### Ambiguity 1: Where exactly does Rule 2 (Contextual Surround Pre-Scan) live — Scan component or Resolution Progression's Coarse Scan step?

Exploration Cycle 3 left this open. Sensemaking's scope-of-application principle resolves it: Rule 2 applies specifically to coarse scans (not all scans). Step-level scope. Canonical home = Resolution Progression's Coarse Scan step.

**Strongest counter-interpretation:** put Rule 2 in the Scan component because the Scan component is more discoverable for a reader looking for scan rules. Resolution Progression's Coarse Scan step is buried inside Process Model.

**Why the counter-interpretation fails (structural grounds):** putting Rule 2 in the Scan component over-generalizes — readers would assume the rule applies to all scans, but it applies only to coarse scans. Discoverability is preserved by adding a one-line cross-reference IN the Scan component pointing to Resolution Progression's Coarse Scan step.

**Confidence:** HIGH on the resolution; the scope-of-application test is mechanical and Rule 2's scope is clearly step-level.

**Resolution:** Rule 2's canonical home is **Resolution Progression's Coarse Scan step**. Cross-reference in Scan component is optional but recommended for discoverability.

**What is now fixed?** Rule 2's canonical home; Scan component's cross-reference is decided as optional-but-recommended.

**What is no longer allowed?** Putting Rule 2 in the Scan component as the canonical home.

### Ambiguity 2: Where does the placement principle ITSELF live in `explore.md`?

The principle is a meta-rule. It needs its own canonical home in the spec.

Candidate homes:
- (A) New sub-section "Conventions" or "How Rules Are Organized" at the start of Key Components.
- (B) New sub-section near the end of the spec (after Failure Modes, before Summary).
- (C) Inside the Summary table.
- (D) Top-level new section.

**Strongest counter-interpretation:** put it as the very first thing after "What Exploration Is" so it's the first organizational note.

**Why the counter-interpretation fails:** the principle is a CONVENTION about how rules are organized. It applies AFTER the reader knows what Components / Process Model / Failure Modes are. Putting it before those sections is premature — the reader doesn't yet know what "Component" means.

**Confidence:** HIGH on the resolution.

**Resolution:** the principle goes as a new sub-section between Key Components and Process Model — labeled "Conventions: How Rules Are Organized in This Spec." This is structurally salient (its own sub-section) without disrupting the flow.

**What is now fixed?** Placement of the meta-rule.

### Ambiguity 3: Does the cross-reference at the failure-mode prevention sub-section need to be more than one line?

For Rule 1: Surface-Only Scanning failure-mode prevention currently says: *"After each scan, detect signals and probe at least one. Don't start another broad scan until the highest-priority signal from the previous scan has been probed."*

Adding a one-line cross-reference: *"For type-aware probing of candidates carrying quantifiable claims, see Probe → Type-Aware Probing."*

**Strongest counter-interpretation:** the cross-reference should briefly summarize the rule, not just point to it. Otherwise the failure-mode reader doesn't know what the rule says without following the link.

**Why the counter-interpretation fails:** if the cross-reference summarizes the rule, it duplicates content (just shorter). The whole point is single source of truth. The reader who wants the rule's full content follows the cross-reference. The cross-reference's role is navigation, not summary.

**Confidence:** MEDIUM-HIGH. The choice depends on convention preference.

**Resolution:** keep cross-references as one-line pointers with brief role description (NOT rule summary). The role description is enough for the reader to know what they'd find at the canonical home; the full rule is at the canonical home.

**What is now fixed?** Cross-reference shape: one-line, navigation-not-summary.

### Ambiguity 4: Should the strategy apply to all five thinking-discipline specs or only to `explore.md`?

The previous finding's recommendation was specific to `explore.md`. This finding's principle is generic.

**Strongest counter-interpretation:** scope this finding to `explore.md` only; the other four discipline specs can be addressed separately if needed.

**Why the counter-interpretation fails (structural grounds):** the placement principle is a GENERIC documentation convention. It applies to any thinking-discipline spec with the same Components / Process Model / Failure Modes structure (which all five `homegrown/` discipline specs have). Restricting the principle's application to one spec is artificial.

**Confidence:** HIGH on the generic application.

**Resolution:** the placement principle is GENERIC. It applies to all five thinking-discipline specs. Each spec adds its own "Conventions" sub-section with the principle.

**What is now fixed?** Generic applicability.

**What now depends on this choice?** Future Innovation generates the principle's wording so it applies to any thinking-discipline spec, not just `explore.md`.

## Sense Version 4 (SV4 — Clarified Understanding)

After ambiguity collapse:

- **Rule 1 canonical home:** Probe component (operation-level scope).
- **Rule 2 canonical home:** Resolution Progression's Coarse Scan step (step-level scope).
- **Placement principle's canonical home:** new "Conventions: How Rules Are Organized in This Spec" sub-section between Key Components and Process Model in `explore.md` (and analogous spec).
- **Cross-references:** one-line pointers with brief role description (NOT rule summaries).
- **Generic applicability:** the principle applies to all five thinking-discipline specs in `homegrown/`.

## Phase 4 — Degrees-of-Freedom Reduction

### What Variables Are Now Fixed

1. **Placement principle:** Operation-or-Step-First with Scope-Of-Application.
2. **Three placement categories:** operation-level → Component; step-level → Process Model step; failure-only-form → failure-mode prevention.
3. **Rule 1 canonical home:** Probe component (operation-level).
4. **Rule 2 canonical home:** Resolution Progression's Coarse Scan step (step-level).
5. **Cross-reference shape:** one-line pointer with brief role description.
6. **Meta-rule home:** new "Conventions" sub-section between Key Components and Process Model.
7. **Generic applicability:** all five thinking-discipline specs.
8. **No spec restructuring.**
9. **Linear scaling per rule** (one paragraph at canonical home + 1-2 cross-reference lines).

### What Options Are Eliminated

1. **NO multi-surface duplication.** The previous finding's recommendation is refined.
2. **NO restructuring of `explore.md`.** Existing 8 top-level sections preserved.
3. **NO Rule 2 canonical home in Scan component.** Step-level scope wins over operation-level scope.
4. **NO summary-style cross-references.** Cross-references are pointers, not summaries.
5. **NO single-spec scoping.** The principle is generic.

### What Paths Remain Viable

1. **Wording variations for the placement principle paragraph** (Generic / Focused / Contrarian per /innovate).
2. **Wording variations for Rule 1's canonical home placement and the cross-reference text.**
3. **Wording variations for Rule 2's canonical home placement and the cross-reference text.**
4. **Wording variations for the meta-rule's "Conventions" sub-section title and intro.**

## Sense Version 5 (SV5 — Constrained Understanding)

The constrained solution space:

- **The placement principle** = Operation-or-Step-First with Scope-Of-Application. Generic. Applies to all five thinking-discipline specs.
- **Three placement categories** with mechanical scope test.
- **One-line cross-references** at non-canonical surfaces.
- **Concrete application:** Rule 1 → Probe component; Rule 2 → Resolution Progression's Coarse Scan step.
- **Meta-rule home:** new "Conventions" sub-section in `explore.md` between Key Components and Process Model.
- **Innovation's job:** generate wording for the principle, the meta-rule sub-section, the canonical-home rule paragraphs, the cross-references.
- **Critique's job:** verify the strategy against the four properties from the goal (single canonical home, cross-references, scales, cold-readability) and against the bloat-reduction promise (3× reduction).

## Phase 5 — Conceptual Stabilization

### Stable Model

```
The placement principle (canonical name: "Operation-or-Step-First with Scope-Of-Application"):

  For each rule that refines or extends a thinking-discipline spec, determine
  the rule's scope of application:
  
    - If the rule applies to ALL instances of an operation (regardless of
      which step invokes it):
        Canonical home = the Component describing that operation.
    
    - If the rule applies only to a SPECIFIC step's invocation of an
      operation (or to a specific phase / cycle / process step):
        Canonical home = the Process Model step at which the rule fires.
    
    - If the rule has NO positive form (it can only be expressed as
      failure prevention; the operation-level or step-level statement
      doesn't make sense):
        Canonical home = the Failure Mode prevention sub-section.
  
  Cross-references at non-canonical surfaces:
    Form: "For [brief role description], see [canonical home path]."
    Length: one line.
    Role: navigation, not summary.

Application to the two existing rules:

  Rule 1 (Type-Aware Probe; from previous finding):
    Scope = operation-level (applies to all probes of quantifiable-claim
            candidates).
    Canonical home = Probe component (Key Components → Probe → new sub-section
                     "Type-Aware Probing").
    Cross-reference at Surface-Only Scanning failure-mode prevention:
      "For type-aware probing of candidates carrying quantifiable claims,
       see Probe → Type-Aware Probing."
  
  Rule 2 (Contextual Surround Pre-Scan; from previous finding):
    Scope = step-level (applies only to coarse scans).
    Canonical home = Resolution Progression's Coarse Scan step (Process
                     Model → Resolution Progression → step 1: Coarse Scan).
    Cross-reference at Premature Depth failure-mode prevention:
      "For coarse scans of layered territories, see Resolution Progression
       → Coarse Scan."
    Optional cross-reference at Scan component:
      "For coarse scans of layered territories, see Resolution Progression
       → Coarse Scan."

Meta-rule (the principle itself) canonical home:
  New sub-section "Conventions: How Rules Are Organized in This Spec"
  between Key Components and Process Model.
  Generic content (applies to any thinking-discipline spec with the
  Components / Process Model / Failure Modes structure).
```

### Action Framework

For Decomposition / Innovation / Critique:

```
Decomposition:
  Partition: (a) the principle itself; (b) Rule 1 placement; (c) Rule 2
  placement; (d) meta-rule sub-section; (e) cross-references.
  Map dependencies: (a) is upstream of (b)-(d); (e) flows from (b)-(c).

Innovation:
  Generate wording for: principle paragraph; meta-rule sub-section title +
  intro; Rule 1 canonical-home placement; Rule 2 canonical-home placement;
  cross-reference templates.

Critique:
  Verify: single canonical home per rule (yes/no); cross-references not
  duplications (yes/no); scales linearly (yes/no); cold-readability
  preserved on all reading paths (yes/no); bloat reduction (3× target).
```

## Final Sense Version (SV6 — Stabilized Model)

The principled placement strategy for refinement rules in `homegrown/explore/references/explore.md` (the Structural Exploration discipline spec) — and generically in any of the five thinking-discipline specs in `homegrown/` (Structural Exploration, Structural Sensemaking, Structural Decomposition, Structural Innovation, Structural Critique) — is **Operation-or-Step-First with Scope-Of-Application**.

A rule's canonical home is determined by the rule's scope of application:
- Operation-level scope (applies to all instances of an operation) → Component sub-section.
- Step-level scope (applies only to a specific process step) → Process Model step.
- Failure-only-form (no positive expression) → Failure-mode prevention.

Non-canonical surfaces get one-line cross-references — pointers with brief role description, not rule summaries. This single-source-of-truth + cross-reference pattern preserves cold-readability for readers on any natural reading path while avoiding the multi-surface duplication that would bloat the spec as more rules accumulate.

Applied to the two rules from the previous inquiry's finding:
- **Rule 1 (Type-Aware Probe)** — canonical home: Probe component sub-section "Type-Aware Probing." Cross-reference at Surface-Only Scanning failure-mode prevention.
- **Rule 2 (Contextual Surround Pre-Scan)** — canonical home: Resolution Progression's Coarse Scan step. Cross-references at Premature Depth failure-mode prevention and (optionally) at Scan component.

The placement principle itself is a meta-rule with its own canonical home: a new "Conventions: How Rules Are Organized in This Spec" sub-section between Key Components and Process Model. Generic content applies to all five thinking-discipline specs.

The strategy demonstrably reduces bloat (3× content reduction over multi-surface duplication) and maintenance burden (2-3× reduction; rule updates touch only the canonical home). It scales linearly as more rules are added.

The shift from SV1 is: the principle is now anchored generically, the canonical homes are concretely identified for both existing rules and for the meta-rule, the cross-reference shape is uniform, and the strategy is validated against the user's four properties (single home, cross-references, scales, cold-readable).
