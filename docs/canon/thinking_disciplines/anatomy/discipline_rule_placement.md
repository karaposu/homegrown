1. Why this matters — the spec-organization contract
A thinking-discipline spec like cognitive_harness/explore/references/explore.md (the Structural Exploration discipline spec, which defines the discipline's modes, components, process, coverage strategy, and failure modes) is a long-lived artifact. As the project's understanding of the discipline matures, the spec accumulates refinement rules — small additions that catch newly-observed failure patterns. The previous inquiry produced two such rules; future inquiries will produce more.

If each rule is placed at multiple surfaces (the operation that produces it + the failure mode it prevents + maybe the process step where it fires), the rule's text gets duplicated. With N rules and ~K surfaces per rule, content grows multiplicatively. Updates to a rule must propagate to every duplicate copy. The spec becomes harder to read and harder to maintain.

The user's concern is structural: as a methodology library matures, multi-surface duplication is unsustainable. The right fix is not a one-off rearrangement of the previous finding's two rules; it is a placement convention that future rules also follow. The convention must be principled (so a future contributor can apply it without guessing) and generic (so it applies to all five thinking-discipline specs in cognitive_harness/, not just explore.md).

2. The placement principle
Operation-or-Step-First with Scope-Of-Application.

A rule's canonical home is determined by the rule's scope of application. There are three placement categories:

Category 1 — Operation-level scope. The rule applies to ALL instances of an operation, regardless of which step invokes that operation. The rule refines or extends what makes the operation "good." The canonical home is the Component sub-section describing that operation, under the spec's Key Components section. Reader expectation: a reader looking up "how does X work?" finds the rule at X's component description.

Category 2 — Step-level scope. The rule applies only to a specific step's invocation of an operation (or to a specific phase, cycle, or process step). The rule refines what happens AT that step, not what the operation looks like in general. The canonical home is the Process Model step at which the rule fires. Reader expectation: a reader following the process arc finds the rule at the relevant step.

Category 3 — Failure-only-form. The rule has no positive form — it can only be expressed as preventing a failure, with no meaningful operation-level or step-level statement. The canonical home is the Failure Mode prevention sub-section. This category is rare; most rules have a positive form.

The scope test (mechanical): "Does this rule apply to ALL instances of operation X, or only to specific step Y?" The yes/no answer determines placement. When both seem to apply, the more SPECIFIC scope wins (step-level beats operation-level) because over-generalizing creates wrong-application problems for readers and contributors.

3. The cross-reference shape
At surfaces where the rule connects but is not canonically homed, add a one-line cross-reference:

"For [brief role description], see [canonical home path]."

Three properties of the cross-reference:

Length: one line. Not a paragraph; not a summary.
Role: navigation, not summary. The reader follows the cross-reference to reach the canonical home; the cross-reference does not contain rule content.
Brief role description: enough for the reader to know what they will find at the canonical home, without duplicating the rule's text.
Examples of the cross-reference shape:

"For type-aware probing of candidates carrying load-bearing quantifiable claims, see Probe → Type-Aware Probing."
"For coarse scans of territories with an identifiable contextual surround layer, see Resolution Progression → Coarse scan."
The cross-reference's role description names what the rule is ABOUT (the brief topic) without containing the rule itself. The reader who wants the rule's full content follows the path.





"### Conventions: How Rules Are Organized in This Spec

Refinement rules added to this spec follow the Operation-or-Step-First with Scope-Of-Application convention. Each rule has ONE canonical home, determined by the rule's scope:

If the rule applies to ALL instances of an operation (regardless of which step invokes it), the canonical home is the operation's Component sub-section under Key Components.
If the rule applies only to a SPECIFIC step's invocation of an operation (or to a specific phase / cycle / process step), the canonical home is the Process Model step at which the rule fires.
If the rule has no positive form (it can only be expressed as failure prevention), the canonical home is the Failure Mode prevention sub-section.
To pick a canonical home, ask: 'Does this rule apply to ALL instances of operation X, or only to specific step Y?' The answer determines placement. When in doubt, the more specific scope wins (step-level beats operation-level when both seem to apply).

At non-canonical surfaces, use a one-line cross-reference: 'For [brief role description], see [canonical home path].' Cross-references navigate readers to the canonical home; they do not summarize or duplicate the rule's content.

This convention applies to all five thinking-discipline specs in the methodology library at cognitive_harness/: Structural Exploration (explore.md), Structural Sensemaking (sense-making/references/sensemaking.md), Structural Decomposition (decompose/references/decompose.md), Structural Innovation (innovate/references/innovate.md), Structural Critique (td-critique/references/td-critique.md). Each spec has the same Components / Process Model / Failure Modes structure; each adopts its own 'Conventions' sub-section."