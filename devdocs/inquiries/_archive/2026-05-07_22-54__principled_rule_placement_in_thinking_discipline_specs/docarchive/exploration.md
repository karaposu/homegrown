# Exploration: Principled Rule Placement In Thinking-Discipline Specs

## Mode and Entry Point

**Mode:** Hybrid. Artifact exploration of `homegrown/explore/references/explore.md` (the Structural Exploration discipline spec; the file whose structure we're analyzing) for its existing organizational topology; possibility exploration of placement strategies that avoid bloat.

**Entry point:** Signal-first. The user has named a specific issue (multi-surface duplication causes bloat) and asked for proper placement. The exploration probes the spec's existing structure to find where each rule's canonical home lies.

## Cycle 1 — Coarse Scan: Inventory `explore.md`'s Organizational Topology

Scanning the Structural Exploration discipline spec at `homegrown/explore/references/explore.md` for its top-level structural anatomy:

**Top-level sections (in order):**

1. **What Exploration Is** — definitional preamble; what the discipline IS and IS NOT.
2. **Two Exploration Modes** — Artifact / Possibility (mode-level categorization).
3. **Key Components** — 6 components: Scan, Signal Detection, Probe, Resolution Management, Frontier Tracking, Confidence Mapping. Each component has its own sub-section describing what it is, what makes a "good" instance, and (for some) when to apply it.
4. **Process Model** — Entry Point (Frontier-first / Signal-first), the 7-step Exploration Cycle, Resolution Progression (the typical resolution arc: Coarse Scan → Signal Detection → Targeted Probes → Fine Scan → Repeat).
5. **Coverage Strategy** — surprise-based; 3 convergence criteria; per-cycle coverage; when to stop.
6. **Failure Modes** — 6 failure modes, each with 3 sub-parts: description, "How to recognize", "How to prevent."
7. **Summary** — table of components.
8. **Execute the Exploration Process** — runner-facing instructions: state mode/entry; run cycles; assess convergence; final deliverable.

**Section roles (what each section's content does):**

- **Components** — describe operations (what scan IS, what probe IS).
- **Process Model** — describe sequencing (when scan happens, when probe happens, in what order).
- **Coverage Strategy** — describe stopping (when to stop scanning / probing / exploring).
- **Failure Modes** — describe failures and how to prevent them (what goes wrong, how to recognize, how to prevent).
- **Execute Process** — runner-facing procedural instructions.

**Signals detected:**

- **[Density]** Components describe operations; Failure Modes describe failures. Same operation may show up in both (e.g., probing is described in Probe component AND mentioned in Surface-Only Scanning failure mode prevention).
- **[Tension]** A new rule like "Type-Aware Probe" has TWO natural connection points: (a) it refines the Probe component (it's a type-awareness property of probing); (b) it prevents Surface-Only Scanning (it's a specific instance of that failure mode's prevention). Without a placement principle, the rule duplicates.
- **[Absence]** No existing convention in `explore.md` says "rules go HERE; references go THERE." The spec has no explicit placement principle.
- **[Existing pattern]** Failure modes' "How to prevent" sub-sections are SHORT (one to two sentences). Component descriptions are also SHORT (bulleted property lists). Adding a multi-sentence rule fits neither naturally.

**Resolution decision:** zoom in on the existing structure to test placement options for each rule.

## Cycle 2 — Probe: What Are The Candidate Homes For Rule 1 (Type-Aware Probe)?

Rule 1 (Type-Aware Probe Rule, from the previous inquiry's finding) says: *"When the coarse scan inventories a candidate that carries a load-bearing quantifiable claim ... at least one empirical probe of the quantifiable claim is required before the candidate can pass into the stabilized candidate set."*

Candidate homes:

- **Home A: Probe component sub-section** (under Key Components → Probe). Rule 1 is a TYPE-AWARENESS property of probing. It refines what "a good probe" means.
- **Home B: Surface-Only Scanning failure-mode prevention** (under Failure Modes → Surface-Only Scanning → How to prevent). Rule 1 is a SPECIFIC INSTANCE of preventing Surface-Only Scanning.
- **Home C: Resolution Progression's Targeted Probes step** (under Process Model → Resolution Progression). Rule 1 fires during the targeted-probes step.
- **Home D: A new dedicated "Refinement Rules" section** (would be a new top-level section).

**Probe per home — does the rule belong primarily here?**

- Home A (Probe component): YES. The rule is fundamentally about WHAT MAKES A PROBE GOOD when the candidate carries a quantifiable claim. It's an extension of "A good probe: ..." with a type-awareness property. Reader of Probe section expects to see this.

- Home B (Surface-Only Scanning failure-mode): SECONDARY. The rule's violation IS Surface-Only Scanning, but the rule itself is positive-form ("when you have a quantifiable claim, do this"). Failure modes' prevention sub-sections are typically one-liners. A multi-sentence rule fits awkwardly.

- Home C (Resolution Progression's Targeted Probes step): TERTIARY. Resolution Progression describes the typical arc; it's process-level. Adding a multi-sentence rule here disrupts the narrative.

- Home D (new dedicated section): POSSIBLE but BLOATS the spec by adding a new top-level section. Future rules would each have their own sub-section; the section grows quadratically.

**Cycle 2 conclusion:** Home A (Probe component) is Rule 1's primary canonical home. The Probe component's "A good probe:" bullets is the natural place to add a new bullet about type-awareness. The full rule paragraph can sit as a sub-section ("Type-Aware Probing") within the Probe component, or as an extended bullet.

## Cycle 3 — Probe: What Are The Candidate Homes For Rule 2 (Contextual Surround Pre-Scan)?

Rule 2 (Contextual Surround Pre-Scan Rule, from the previous inquiry's finding) says: *"When the territory has an identifiable contextual / structural surround layer ... the Coarse Scan must include items from that surround layer before going deep on inquiry-specific objects."*

Candidate homes:

- **Home A: Scan component sub-section** (under Key Components → Scan). Rule 2 refines what "a good scan" means.
- **Home B: Premature Depth failure-mode prevention** (under Failure Modes → Premature Depth → How to prevent). Rule 2 prevents a layer-of-scan instance of Premature Depth.
- **Home C: Resolution Progression's Coarse Scan step** (under Process Model → Resolution Progression → Coarse Scan). Rule 2 specifically applies to Coarse Scan, not all scanning.

**Probe per home:**

- Home A (Scan component): PARTIAL. The rule applies specifically to COARSE scans, not all scans. Putting it in the general Scan section over-generalizes.

- Home B (Premature Depth failure-mode): SECONDARY. Same issue as Rule 1's Home B — the failure-mode prevention sub-sections are one-liners; multi-sentence rule fits awkwardly.

- Home C (Resolution Progression's Coarse Scan step): YES. The rule is specifically about coarse scans of layered territories. Resolution Progression's Coarse Scan step is the natural canonical home — the rule fires AT this step.

**Cycle 3 conclusion:** Home C (Resolution Progression's Coarse Scan step) is Rule 2's primary canonical home — more natural than Home A (which would over-generalize) or Home B (which is shape-mismatch). However, Home C is buried inside Resolution Progression. The Scan component might still want a brief mention pointing readers to Resolution Progression's Coarse Scan step.

Reconsidering: maybe Home A (Scan component) IS the right home if we're explicit about scope. The Scan component could have a sub-section "Layered Territories" that contains the rule. The Resolution Progression's Coarse Scan step would then have a brief reference to the Scan component's Layered-Territories sub-section.

Trade-off: Home A makes the rule discoverable for any reader of the Scan component; Home C makes the rule discoverable for runners executing the process. Both are valid.

**Resolution to defer:** Sensemaking will resolve which home is canonical (Home A vs Home C) based on the placement principle.

## Cycle 4 — Probe: Generic Placement Principle Candidates

Looking at the structural shape: Components describe operations; Failure Modes describe failures; Process Model describes sequencing.

Placement candidates for refinement rules:

- **PC-1 (Operation-First):** Rules go in the Component whose operation they refine. Cross-references in Failure Modes / Process Model point back to the component.
- **PC-2 (Failure-First):** Rules go in the Failure Mode whose prevention they specify. Cross-references in Components point to the failure mode.
- **PC-3 (Process-First):** Rules go at the Process Model step where they fire. Cross-references in Components / Failure Modes point to the process step.
- **PC-4 (Dedicated-Section):** Rules go in a new dedicated section. Cross-references from Components / Failure Modes / Process Model.

Which placement candidate is right depends on what makes a rule "belong" to a section:

- PC-1 (Operation-First) treats the rule as a refinement of an OPERATION. Reader-of-component sees the rule directly. Reader of failure mode follows a cross-reference. Reader of process step also follows a cross-reference.
- PC-2 (Failure-First) treats the rule as PREVENTION of a failure. Reader-of-failure-mode sees directly. Reader of component follows cross-reference. But: failure-mode prevention sub-sections are short one-liners by existing convention; multi-sentence rules don't fit.
- PC-3 (Process-First) treats the rule as a STEP-LEVEL constraint. Reader of process step sees directly. Reader of component follows cross-reference. But: process steps are typically described briefly; multi-sentence rules disrupt the narrative.
- PC-4 (Dedicated-Section) treats rules as first-class entities. Reader follows cross-reference from anywhere. But: introduces new structural element to the spec.

**Cycle 4 conclusion (preliminary):** PC-1 (Operation-First) is the most natural fit for `explore.md`. Components are the most explanatory part of the spec; rules that refine operations belong in their operation's component. Failure Modes and Process Model are SECONDARY surfaces that cross-reference.

But Rule 2 partially contradicts this — it's specifically about coarse scans (a process step), not all scans (the operation). For Rule 2, Home C (Process-First) might be more accurate than Home A (Operation-First).

The placement principle may need to distinguish: rules that apply to ALL instances of an operation → Component. Rules that apply only to a SPECIFIC step's invocation of the operation → Process step.

This is the SCOPE-OF-APPLICATION principle:
- All-instances scope → Component.
- Specific-step scope → Process step.
- Specific-failure scope → Failure mode prevention (rare, since most rules are positive-form).

## Cycle 5 — Probe: The Cross-Reference Shape

If a rule's canonical home is Component X, the cross-reference at non-canonical surfaces should be MINIMAL: a one-line pointer, not a duplication.

Examples of one-line cross-reference shapes:

- **In Failure Mode prevention:** *"For type-aware probing of quantifiable claims, see Probe → Type-Aware Probing."*
- **In Process Model step:** *"This step is subject to the Type-Aware Probing rule (see Probe component)."*
- **In another component:** *"See related rule in Probe → Type-Aware Probing."*

The cross-reference contains:
- Pointer to canonical home (section path).
- Brief role description (one phrase naming what the rule is about).
- No rule duplication.

This pattern is standard in technical documentation: single source of truth + cross-references.

## Cycle 6 — Probe: Verification — Apply Strategy To Rule 1 + Rule 2

Applying PC-1 (Operation-First) with the Scope-Of-Application principle:

**Rule 1 (Type-Aware Probe):**
- Scope: applies to ALL probes of candidates carrying quantifiable claims. Operation-level scope.
- Canonical home: Probe component (`Key Components → Probe`).
- Cross-reference at Surface-Only Scanning failure-mode prevention: one line pointing to Probe component.

**Rule 2 (Contextual Surround Pre-Scan):**
- Scope: applies to COARSE SCANS ONLY (not fine scans, not signal-detection-pass scans). Step-level scope.
- Canonical home: Process Model → Resolution Progression → Coarse Scan step. (PC-3, Process-First, because the rule is step-specific.)
- Cross-reference at Premature Depth failure-mode prevention: one line pointing to Coarse Scan step.
- Cross-reference at Scan component: one line noting "for layered territories, the Coarse Scan step has additional requirements (see Resolution Progression → Coarse Scan)."

**Cycle 6 conclusion:** the placement strategy is not single-rule-uniform — different rules have different scopes (operation-level vs step-level), and the canonical home is determined by scope. The cross-references are uniformly minimal.

## Cycle 7 — Probe: Bloat Analysis

Does this strategy avoid the user's bloat concern over time?

Scenario: 5 future rules accumulate, each at the same operation/step structure as Rule 1 + Rule 2.

- With multi-surface duplication (the previous finding's recommendation): each rule's full text appears at ~2-3 surfaces. 5 rules × 3 surfaces × ~1 paragraph = ~15 paragraphs of new content. Plus 5 paragraphs of duplication overhead.

- With single-canonical-home + cross-references (this strategy): each rule's full text appears at ONE surface. 5 rules × 1 paragraph = 5 paragraphs of new content. Plus ~10 one-line cross-references.

Bloat ratio: multi-surface = ~15 paragraphs; canonical-home = ~5 paragraphs + 10 lines. **3× reduction.**

Maintenance ratio: updating a rule under multi-surface requires updating 2-3 places; under canonical-home requires updating ONE place. **2-3× reduction in maintenance burden.**

The strategy demonstrably scales better. **Cycle 7 conclusion:** the bloat concern is mitigated.

## Cycle 8 — Jump Scan + Convergence

**Jump scan:** what if the right answer is NOT a placement principle but a structural restructuring of `explore.md`? E.g., consolidating Components + Failure Modes + Process Model into a different structure where rules have natural homes?

**Probe:** restructuring the entire spec is over-reach. The user said "we need proper places to add this" — they want placement guidance, not restructuring. The existing structure is fine; the gap is the placement convention.

**No new region from jump scan.** Convergence confirmed.

**Convergence check:**
- Frontier stable: yes; the canonical homes are identified, the cross-reference shape is specified, the bloat is analyzed.
- Discovery rate declining: yes; cycles 4-7 each refined the placement strategy; cycle 8 produced no new region.
- Bounded gaps: yes; remaining unknowns (which canonical home for Rule 2 specifically) are for downstream Sensemaking.

CONVERGED.

## Final Deliverable

### 1. Territory Overview

The spec at `homegrown/explore/references/explore.md` has 8 top-level sections with 5 distinct content roles:
- Definitional (What Exploration Is, Modes).
- Operational (Key Components — 6 components describing operations).
- Sequencing (Process Model — Entry Point, Cycle, Resolution Progression).
- Stopping (Coverage Strategy).
- Failure-related (Failure Modes — 6 failures with prevention guidance).
- Procedural (Execute the Exploration Process — runner instructions).

The territory has a natural placement structure: rules belong where their SCOPE OF APPLICATION matches.

### 2. Inventory

**Placement principle (Operation-or-Step-First with Scope-Of-Application):**

- A rule that applies to ALL instances of an operation → Component (under Key Components).
- A rule that applies only to a SPECIFIC step's invocation of an operation → Process step (under Process Model).
- A rule that ONLY makes sense as failure prevention (no positive-form expression) → Failure-mode prevention sub-section.
- Cross-references from non-canonical surfaces are ONE LINE pointing to canonical home.

**Rule 1 (Type-Aware Probe) placement:**
- Canonical home: **Probe component** (under Key Components → Probe). Reason: applies to all probes of quantifiable-claim candidates, not just one process step.
- Cross-reference at Surface-Only Scanning failure-mode prevention: *"Type-aware probing applies — see Probe → Type-Aware Probing."*

**Rule 2 (Contextual Surround Pre-Scan) placement:**
- Canonical home: **Resolution Progression's Coarse Scan step** (under Process Model → Resolution Progression). Reason: applies specifically to coarse scans, not all scans.
- Cross-reference at Premature Depth failure-mode prevention: *"For layered territories, the Coarse Scan step has additional breadth requirements — see Resolution Progression → Coarse Scan."*
- Cross-reference at Scan component (optional, light): *"For layered territories, see Resolution Progression → Coarse Scan."*

### 3. Signal Log

- **[Density]** Components vs Failure Modes both touch operations → probed in Cycle 1.
- **[Tension]** Multi-surface duplication risk → probed in Cycle 4 (placement principle).
- **[Absence]** No existing placement convention in `explore.md` → addressed by the new principle.
- **[Scope mismatch]** Rule 2 applies to coarse scans specifically, not all scans → resolved in Cycle 3 + Cycle 6.
- **[Convergence]** Jump scan in Cycle 8 produced no new region.

### 4. Confidence Map

| Region | Confidence |
|---|---|
| `explore.md` topology | Confirmed |
| Rule 1 canonical home (Probe component) | Confirmed |
| Rule 2 canonical home (Coarse Scan step) | Scanned (Sensemaking will finalize) |
| Cross-reference shape (one-line pointer) | Confirmed |
| Generic placement principle (Operation-or-Step-First with Scope-Of-Application) | Confirmed |
| Bloat reduction (3× content; 2-3× maintenance) | Confirmed |
| No restructuring needed | Confirmed |

### 5. Frontier State

STABLE. The strategy is identified; canonical homes are named; cross-reference shape is specified.

### 6. Gaps and Recommendations

- **For Sensemaking:** finalize Rule 2's canonical home (Coarse Scan step vs Scan component) and stabilize the generic placement principle wording.
- **For Decomposition:** partition the strategy into pieces (placement principle / canonical homes / cross-reference shape / verification).
- **For Innovation:** generate concrete wording for the placement principle and the canonical-home cross-references.
- **For Critique:** verify the strategy against the four properties named in the goal (single canonical home / cross-references / scales / cold-readability).
