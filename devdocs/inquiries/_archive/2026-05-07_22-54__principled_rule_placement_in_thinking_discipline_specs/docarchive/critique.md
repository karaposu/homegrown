# Critique: Principled Rule Placement In Thinking-Discipline Specs

## Phase 0 — Dimensions With Weights

### 1. Single Canonical Home Per Rule - 25%

**Critical.** The user's primary requirement: each rule has ONE place where its full text lives. Source-of-truth.

### 2. Cross-References Not Duplications - 20%

**Critical.** Cross-references must be one-line pointers, not paragraph-level summaries or duplications.

### 3. Linear Scaling - 20%

**Critical.** As N rules accumulate, content grows linearly (one paragraph per rule + ~2 cross-reference lines per rule), not multiplicatively.

### 4. Cold-Readability Preserved - 15%

**Critical.** A reader on any natural reading path (operating from Probe component / from Surface-Only Scanning failure mode / from Resolution Progression's Coarse Scan step) can find the rule via the canonical home + cross-references.

### 5. Mechanical Application - 10%

The principle's scope test ("Does the rule apply to all instances of an operation or only to a specific step?") must be a yes/no question a future contributor can apply without subjective judgment.

### 6. Implementation Cost - 5%

Total `explore.md` modification ≤ ~40 lines added; preserves existing structure.

### 7. Generic Applicability - 5%

The principle applies to all five thinking-discipline specs in `homegrown/`, not just `explore.md`.

**Critical dimensions:** Single Canonical Home, Cross-References Not Duplications, Linear Scaling, Cold-Readability Preserved.

## Phase 1 — Fitness Landscape

### Viable Region

Strategies that:
- Give each rule ONE canonical home.
- Use one-line cross-references (not duplications).
- Scale linearly (1 paragraph + ~2 lines per rule).
- Preserve cold-readability via cross-references at non-canonical surfaces.
- Pick canonical home via mechanical scope test.
- Are generic across all five thinking-discipline specs.
- Add ~40 lines or fewer to `explore.md`.

### Dead Region

Strategies that:
- Duplicate rule text across multiple surfaces (the user's named bloat concern).
- Use summary-style cross-references (still duplicates content).
- Scale multiplicatively (N rules × K surfaces).
- Require subjective judgment to pick canonical home.
- Restructure existing sections.
- Are spec-specific (don't generalize).

### Boundary Region

Strategies with:
- Optional / hedged cross-references (e.g., "optional at Scan component" for Rule 2). Mitigated by treating as discoverability aid, not strict rule.
- Scope-test ambiguity for rules that fit BOTH operation-level and step-level scopes. Mitigated by "more specific scope wins" tiebreaker.

### Unexplored Region

- Automated tooling (a script that validates cross-reference targets). Out of scope; protocol-level convention only.
- Restructuring `explore.md` into a different organizational shape. Out of scope per user's "no restructuring" implicit constraint.

## Phase 2 — Candidate Evaluation

### Candidate: Combined Fix (A + B + C + D + E + F from Innovation)

**Prosecution:**

The "optional cross-reference at Scan component" for Rule 2 is hedged — strict conventions should not have hedges. A future contributor might omit the optional cross-reference, leaving Scan component readers without a way to discover Rule 2.

The scope test ("operation-level or step-level?") is binary, but some rules might fit both naturally. Sensemaking proposed a "more specific scope wins" tiebreaker, but the tiebreaker itself adds complexity to the test.

The Conventions sub-section is added between Key Components and Process Model — it's salient, but a future reader who doesn't read it sequentially might miss it. The convention's discoverability depends on readers reading the spec in order.

The placement principle is GENERIC across all five thinking-discipline specs but the wording references `Key Components`, `Process Model`, `Failure Modes` — sections that exist in `explore.md` but might have different names in the other four specs. Need to verify section-name compatibility.

**Defense:**

The optional cross-reference at Scan component is correctly framed as a discoverability aid. The convention's STRICT requirement is the canonical home + the failure-mode prevention cross-reference. The Scan component cross-reference is helpful but not load-bearing. Strict + soft together gives a complete navigation surface without over-specifying.

The "more specific scope wins" tiebreaker is the right resolution: when in doubt, place at the more-specific scope (step-level) because over-generalizing creates wrong-application problems. The tiebreaker is mechanical (more-specific is observable).

The Conventions sub-section is structurally salient (it's its own sub-section between Key Components and Process Model). A reader who skips it can still find rules at canonical homes — the convention is for ORGANIZATION, not for the rules' content. Missing the convention doesn't break understanding of any individual rule.

Section-name compatibility across five specs: `homegrown/sense-making/references/sensemaking.md` (Structural Sensemaking) has Phases (1-5) instead of Components, but the structural shape is the same — Phases are the operational units; Phase 1 / Phase 2 / etc. are analogous to Components in `explore.md`. The principle's wording uses generic terms ("Component", "Process Model step", "Failure Mode prevention") that map to each spec's specific section names. Each spec's "Conventions" sub-section adapts the wording to its specific structure.

**Verification against the four critical dimensions:**

- Single Canonical Home: Rule 1 → Probe component (one place); Rule 2 → Coarse Scan step (one place). YES.
- Cross-References Not Duplications: cross-references are one-line pointers ("For X, see Y") with brief role description, not rule text. YES.
- Linear Scaling: Rule 1 = 1 paragraph + 1 cross-reference line. Rule 2 = 1 paragraph + 1-2 cross-reference lines. N rules = N paragraphs + ~2N lines. Linear. YES.
- Cold-Readability Preserved: a reader at Probe component sees Rule 1 directly; reader at Surface-Only Scanning prevention follows cross-reference to Probe → Type-Aware Probing; same pattern for Rule 2. Cold readers on any path find the rule. YES.

**Verification against bloat reduction:**

Multi-surface (previous finding): Rule 1 at 2 surfaces × 1 paragraph + Rule 2 at 3 surfaces × 1 paragraph = 5 paragraphs total.
Single-canonical (this strategy): 2 paragraphs (1 per rule) + ~3 one-line cross-references = ~2 paragraphs + 3 lines.
Reduction: 5 → 2 paragraphs (~2.5×; close to the 3× target). Maintenance reduction: 2 places to update for Rule 1 / 3 places for Rule 2 → 1 place each. 2-3× reduction.

**Dimensions:**

- Single Canonical Home: HIGH.
- Cross-References Not Duplications: HIGH.
- Linear Scaling: HIGH (verified per-rule cost).
- Cold-Readability Preserved: HIGH (verified for all natural reading paths).
- Mechanical Application: HIGH (scope test is binary; tiebreaker is mechanical).
- Implementation Cost: LOW (~30-40 lines).
- Generic Applicability: HIGH (applies to all five specs with section-name adaptation).

**Verdict: SURVIVE.**

Constructive output:

Adopt the strategy as the placement convention for `homegrown/explore/references/explore.md` (and analogously for the other four thinking-discipline specs). Apply Component A as the new "Conventions: How Rules Are Organized in This Spec" sub-section between Key Components and Process Model. Apply Components B + D as the canonical-home rule placements (Probe component for Rule 1; Resolution Progression's Coarse Scan step for Rule 2). Apply Components C + E as the one-line cross-references at non-canonical surfaces. Risk class: low. Evaluation gate: in next 3 finding.md compilations or spec edits, confirm the convention is followed (no rule duplicated across surfaces; cross-references are one-line; canonical homes match scope).

## Phase 3.5 — Assembly Check

The combined fix's components reinforce each other:
- Component A defines the convention.
- Components B + D apply it to two existing rules.
- Components C + E demonstrate the cross-reference shape.
- Component F establishes generic applicability.

The convention is self-applying: the principle determines where the principle itself lives (in a Conventions sub-section as a meta-rule). The rule about rule placement obeys its own placement convention.

Assembly verdict: SURVIVE.

## Phase 3 — Ranked Verdicts

1. **SURVIVE: Combined fix** (placement principle + two rule applications + cross-references + generic applicability note). Catches all bloat-concern issues. Mechanical. Linear scaling. Cold-readable.

## Coverage Map

Evaluated:
- The combined strategy as a unit (4 critical dimensions + 7 dimensions overall).
- Verification against the user's four properties (canonical home / cross-references / scales / cold-readable).
- Verification against bloat reduction (~2.5×, close to target 3×).
- Risk mitigation (optional cross-references; scope-test tiebreaker; section-name compatibility).

Unexplored but not blocking:
- Automated cross-reference validation tooling (out of scope).
- Restructuring of `explore.md` (out of scope; user wants placement, not restructure).
- Application to the other four thinking-discipline specs in detail (covered generically; per-spec adaptation deferred to future inquiries).

Coverage judgment: sufficient.

## Signal

TERMINATE with ranked survivor: the Combined Fix.

## Convergence Telemetry

- Dimension coverage: complete.
- Adversarial strength: STRONG.
- Landscape stability: STABLE.
- Clean SURVIVE: yes.
- Failure modes observed: NONE.
- **Overall: PROCEED.**
