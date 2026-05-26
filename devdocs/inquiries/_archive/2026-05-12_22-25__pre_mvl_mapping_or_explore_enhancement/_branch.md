# Branch: Pre-MVL+ mapping vs /explore enhancement — where does canonical-anchor surfacing belong?

## Question

The LOOP_DIAGNOSE finding identified that iteration 1 of the 19-43 inquiry failed because `/navigate`'s canonical spec identity-defining content (`homegrown/navigation/references/navigation.md` lines 16-29) was never loaded into the working context — grep returned 0 matches for the spec's exact identity phrases across all 5 iter-1 outputs. The user's deep observation: **this canonical content was not random; it was the most highly-relevant and most obvious file for the inquiry.** /explore should have surfaced it as a high-priority item, but didn't.

The user's two-part question:
1. **Is this a /explore failure?** /explore is supposed to perform purposive open-mode surfacing of a territory. If it can miss the most highly-relevant and obvious canonical content for the inquiry, then either /explore has a structural gap or the territory framing is wrong.
2. **Even with worker sessions where MVL+ loops run, do we still need some kind of MAPPING step (made by /explore or by some other mechanism) BEFORE MVL loops can run safely?** The user is probing whether there's an architectural need for a pre-MVL+ context-mapping operation distinct from /explore-inside-the-loop.

## Goal

A structurally-grounded answer that:

1. **Locates the responsibility** for canonical-anchor surfacing: in /explore (enhance its surfacing); in a NEW pre-MVL+ context-mapping step (architectural addition); in protocol-level Candidate A (already recommended by LOOP_DIAGNOSE); or some combination.

2. **Specifies the mechanism** for whichever option(s) chosen — e.g., for /explore enhancement, what's the new check or signal-detection rule? For pre-MVL+ mapping, what's the runner-level protocol?

3. **Decides actionability** with evaluation gates.

4. **Resolves the relationship to Candidate A** — is Candidate A sufficient, or is more needed?

5. **Considers the broader pattern** — does this pattern repeat across many failure cases (suggesting an architectural fix is warranted) or is it isolated (suggesting Candidate A alone suffices)?

## Scope Check

Question covers goal. The question asks where canonical-anchor responsibility belongs; the goal asks for structural location + mechanism + actionability + Candidate A relationship + broader pattern.

**Specific-vs-pattern check:** the specific instance is iter-1's failure to surface /navigate's canonical content. The broader pattern is: are there many similar cases where /explore misses canonical anchors, or was iter-1 a one-off? The default is to address the broader pattern; iter-1 is the grounding evidence.

## Required canonical-spec loads (per Candidate A from LOOP_DIAGNOSE)

This inquiry analyzes `/explore` and the `/MVL+` runner protocol; possibly affects them. Both canonical specs MUST be loaded:

- `/Users/ns/Desktop/projects/native/homegrown/explore/references/explore.md` — `/explore` canonical (especially §2.1 signal-detection types: density, novelty, relevance, tension, absence; §2.2 annotation layers; §3.1 Step 0 declarations; §3.3 boundary-discovery sub-phase as a precedent for preliminary scaffolding; §4.1 failure modes).
- `/Users/ns/.claude/skills/MVL+/SKILL.md` — `/MVL+` runner (Discipline Workspace Invariant; pipeline structure; protocol-level steps).
- `/Users/ns/Desktop/projects/native/homegrown/runners/staged_explore.md` (if it exists) OR the staged-explore documentation — /staged-explore as runner precedent.
- The LOOP_DIAGNOSE finding (`devdocs/inquiries/2026-05-12_20-31__loop_diagnose__navigate_4_operations_error/finding.md`) — Candidate A recommendation.

## Operative constraints

1. **The iter-1 failure was systemic, not random.** The canonical content was highly-relevant and obvious; /explore missing it suggests a structural gap, not a fluke.

2. **/explore is the canonical surfacing operation.** Per its spec, /explore performs purposive open-mode surfacing. If canonical-anchor surfacing isn't its job, whose is?

3. **Candidate A is a protocol-level fix.** It mandates canonical-spec loading at the runner level (in /MVL+'s Discipline Workspace Invariant). This sidesteps /explore's job.

4. **The user is questioning whether protocol-level fix is enough OR whether /explore needs to be enhanced as well.** This is the structural question.

5. **The user has been right multiple times this session.** Their intuitions about discipline structure carry weight.

## Working hypotheses (to be tested)

- **H1 — /explore enhancement.** /explore should have a structural commitment to surfacing canonical anchors. Add a "canonical-anchor seeking" signal-detection rule or sub-phase to /explore's spec, alongside existing signals (density, novelty, relevance, tension, absence). When the territory involves a discipline analysis, /explore explicitly seeks the canonical spec's content.

- **H2 — Pre-MVL+ context-mapping step.** Add a runner-level operation (or a new protocol step) that maps highly-relevant entities BEFORE MVL+ disciplines run. This step is analogous to /staged-explore (a runner) but produces a context-anchor map instead of a territory-scan map. /MVL+ adopts this step as a mandatory pre-phase.

- **H3 — Candidate A is sufficient.** The protocol-level canonical-spec-loading step (recommended by LOOP_DIAGNOSE) handles this case. No additional /explore enhancement or pre-mapping step needed.

- **H4 — Combination of H1 + H3.** /explore is enhanced AND Candidate A is adopted. Defense-in-depth.

- **H5 — Inquiry-author level fix.** The fix belongs in _branch.md authoring discipline — the inquiry author should explicitly load canonical sources in _branch.md. Protocol-level + /explore stays as-is.

- **H6 — Categorical insight: maybe MVL+ does need a separate "context mapping" phase.** This isn't just about canonical specs; it's about systematically establishing the inquiry's CONTEXT before disciplines run. The user's intuition that "even with worker sessions, we need some kind of mapping" is structurally important.

## Relationships

- CONTINUES FROM: `devdocs/inquiries/2026-05-12_20-31__loop_diagnose__navigate_4_operations_error/finding.md` (LOOP_DIAGNOSE Candidate A; this inquiry asks whether Candidate A is enough or whether /explore enhancement / pre-mapping is also needed)
- CONTINUES FROM: `devdocs/inquiries/2026-05-12_22-05__context_as_absolute_category_errors_deep_dive/finding.md` (Family A pattern; the iter-1 failure is one instance)
- RELATED: all prior /explore-thread + /navigate inquiries (background)
