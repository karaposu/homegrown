# Branch: explore — per-item content depth (the surfacing-mechanism question)

## Question

What level of description does each item surfaced by `/explore` carry — i.e., what is the **per-item content depth** of the surfacing mechanism — and where is the line between *identifying-labeling* (necessary for the surfaced item to be useful to downstream disciplines) and *meaning-extraction* (sense-making's territory that the iter-1+2 NOT-list explicitly excludes)?

## Goal

A spec-level addition to `/explore` that names the per-item content depth explicitly. A good answer:

- Distinguishes *labeling/identification* (what is this thing called; where is it; what's its surface-level "what") from *meaning-extraction* (what does this mean in the conceptual structure; how does it relate to other anchors).
- Provides examples across multiple domains (codebase, research field, problem domain) showing what acceptable labeling looks like vs what crosses into sense-making's territory.
- Names the line operationally — a heuristic users can apply when wondering "is this annotation labeling or meaning-extraction?"
- Confirms or revises the iter-1 NOT-list's claim that /explore "does not extract meaning." (Likely: refine — labeling at the identification level is OK; meaning-extraction at the conceptual-structure level remains excluded.)
- Either updates the standard skeleton (the iter-2 + just-finished inquiry's additions) with a "Per-item content" subsection in Components or Output, or argues that this is already implicit and explanation suffices.

A good answer lets the user (i) know what to expect from each /explore invocation's output per item; (ii) understand whether the iter-2 NOT-list survives intact or needs refinement; (iii) know whether sense-making has to re-discover what items mean (the user's stated concern).

## Scope Check

**Question covers goal:** YES — the question asks for the per-item content depth definition; the goal asks for that definition + examples + heuristic + NOT-list reconciliation.

**Specific-vs-pattern check:** The user's framing references the NOT-list directly (from `finding_iter1.md`). The underlying pattern is "what level of detail does the discipline's unit-of-output carry." Default applies: address the broader pattern; the NOT-list is the anchor case.

## Operative constraints

1. **Inheritances from prior inquiries are preserved.**
   - The iter-2 verb-meaning (*to explore = purposive open-mode surfacing*) is preserved.
   - The 5-section skeleton structure (Identity / Components / Process / Quality / Output) is preserved.
   - The NOT-list against 5 neighbor disciplines is preserved at the **meaning-extraction-as-conceptual-structure** level. This inquiry tests whether the NOT-list needs a clarification at the labeling-vs-meaning boundary.
   - The just-finished inquiry's 4 spec-level additions (resolution-level field; staging telemetry; staging-boundary regression failure mode; merge contract) are preserved.
   - The /staged-explore runner artifact (proposed by the just-finished inquiry) is preserved.

2. **The user's specific framing** must be honored:
   - The concern: "if explore only exposes/surfaces without their meaning or hows etc, then sensemaking would have to guess no?"
   - Implied requirement: sensemaking should NOT have to re-discover what each surfaced item IS at the identifying level. /explore must produce enough per-item content to make items operationally useful downstream.

3. **The /explore vs /navigation depth-of-output comparison** is informative. Navigation's routes carry rich per-route fields (Direction / Goal / Type / Priority / Status / Blocked-by / Purpose / Movement / Unlocks / Why-this-route-exists / Guidance-mode / Continuation-note). /explore's surfaced items currently lack equivalent rich labeling in the spec. This asymmetry is part of what the inquiry should reconcile.

## Working hypotheses (to be tested)

- **H1:** /explore must produce IDENTIFYING-LABEL content per surfaced item (name + brief identifying description + structural adjacency), but NOT meaning-extraction (anchor-extraction; conceptual-structure relations). The NOT-list's "no meaning" claim is correct at the conceptual-structure level but misleading at the identifying-label level; the spec needs a clarifying refinement.

- **H2:** The line between labeling and meaning-extraction is operationally distinguishable by a heuristic: *if the description answers "what is this called and where is it"*, it's labeling; *if the description answers "what does this mean in context of other concepts"*, it's meaning-extraction.

- **H3:** The just-finished inquiry's resolution-level field controls BREADTH (how many items surfaced per invocation). A separate dimension controls DEPTH-PER-ITEM (how much labeling per surfaced item). These two dimensions are orthogonal; the spec should name both.

- **H4:** /explore's per-item content depth should be RESOLUTION-DEPENDENT in a coordinated way — coarse-resolution invocations produce items with minimal labels (identifier + one-line); fine-resolution invocations produce items with richer labels (identifier + one-line + structural adjacency + optional content snippet). The mapping between resolution-level and per-item-depth should be named.

## Relationships

- CONTINUES FROM: `devdocs/inquiries/2026-05-12_00-40__explore_discipline_from_scratch/` (the original /explore from-scratch inquiry; iter-2 finding committed the verb-meaning and NOT-list)
- CONTINUES FROM: `devdocs/inquiries/2026-05-12_10-06__explore_project_end_goal_design/` (the project-end-goal-aware design; iter-1 finding added the 4 spec-level additions + /staged-explore runner doc)
- RELATED: this inquiry surfaces a gap in the per-item content depth that NEITHER of the prior two inquiries addressed; it is structurally a sibling refinement rather than a contradiction.
