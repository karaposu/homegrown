# Branch: Semantic indexing — discipline, runner, artifact, or unnecessary?

## Question

Should "semantic indexing of the codebase" — staged, concept-driven, project-wide, persistent — be added to the project's architecture, and if so in what form (a new discipline, a new runner, a project-wide artifact, or some combination)? Would having such an index solve the canonical-anchor / context-elicitation problems observed across recent inquiries, or is the architectural commitment heavier than the immediate fix (3-layer canonical-source-surfacing from the 22-25 finding) warrants?

The user's specific framing: *"whatever we do we need some sort of semantic indexing of the codebase, we need it for navigation or for explore to be effective... indexing can be staged, where running it to uncover concepts and for each concept running indexing again... and this result will be something commonly usable by navigation like logic or explore... maybe indexing should be a separate discipline, and structured indexing... so meta indexing can be a separate discipline, and this will solve all our confusions?"*

## Goal

A structurally-grounded answer addressing:

1. **What "semantic indexing" actually means** in this project's context — what would the artifact LOOK like; how would it differ from existing artifacts (canonical specs; READMEs; finding.md files; etc.).
2. **Where indexing-responsibility should sit** — new discipline, new runner, new project-wide artifact, or distributed across existing mechanisms.
3. **Cost vs benefit** — maintenance overhead of a persistent index vs the benefit of on-demand semantic lookup; staleness risk; etc.
4. **Relationship to the 22-25 finding's 3-layer fix** — would the index supersede or complement Layer 2's canonical-source-loading?
5. **Test the user's "would solve our confusions" claim** — would it actually, or is this overreach?
6. **Actionability decision** — adopt now, sketch as research-frontier, or reject.

## Scope Check

Question covers goal. The question asks the structural status of semantic indexing; the goal asks for the kind + cost-benefit + relationship + claim-test + actionability.

**Specific-vs-pattern check (applying iter-2's lesson):** the proposal is generic — "semantic indexing of the codebase." It is not tied to a specific use case. The inquiry should evaluate the generic proposal AND ensure the recommended fix (if any) is generic, not bloated to a specific use case.

## Required canonical-source loads (per the 22-25 finding's 3-layer rule, applied generically)

This inquiry analyzes the architecture of `/explore`, `/staged-explore` (runner pattern), `/MVL+` runner, and the broader project structure. Load:

- `/Users/ns/Desktop/projects/native/homegrown/explore/references/explore.md` — `/explore` canonical (especially §3.6 staged execution; §6.1 runner taxonomy).
- `/Users/ns/.claude/skills/MVL+/SKILL.md` — `/MVL+` runner.
- `/Users/ns/Desktop/projects/native/homegrown/protocols/navigation_context_intake.md` — existing precedent for context-intake.
- The 22-25 finding (3-layer canonical-source-surfacing fix).
- The /staged-explore documentation if it exists, OR `/explore` spec's §3.6 about staged execution.
- `/Users/ns/Desktop/projects/native/enes/desc.md` and `/Users/ns/Desktop/projects/native/README.md` (project end-goals; the structure that a semantic index would help navigate).

## Operative constraints

1. **Pattern-not-specific framing applies.** Generic proposal; recommended fix must be generic.

2. **The 22-25 finding's 3-layer fix is the current state.** Any new indexing mechanism must relate to this fix (supersede, complement, or be orthogonal).

3. **The user's pattern of preferring leaner structures** still applies. Adding a discipline is a heavy commitment; needs strong justification.

4. **Project precedent for "indexing-like" artifacts:**
   - Existing canonical specs (per-discipline, per-protocol, per-runner).
   - Inquiry findings (per-inquiry; cumulative archive).
   - `enes/desc.md`, `README.md` — project-wide narrative docs.
   - No formal "semantic index" yet exists.

5. **The user's claim ("solve all our confusions") needs adversarial testing.** Could be overreach.

## Working hypotheses (to be tested)

- **H1 — /index as a new discipline.** Adds an 8th discipline that produces a semantic index of the codebase as its Transform. Staged execution analogous to /staged-explore (run /index to uncover concepts; run /index per concept at finer resolution).

- **H2 — /staged-index as a new runner** analogous to /staged-explore. Runs /explore iteratively across the entire codebase to produce a persistent semantic index. Not a discipline; a runner over /explore.

- **H3 — Project-wide artifact** (e.g., `homegrown/semantic_index.md` or a directory structure) maintained by the loop. Not a new discipline or runner; a persistent file artifact updated by some maintenance mechanism.

- **H4 — Existing mechanisms suffice.** Canonical specs + the 22-25 finding's 3-layer fix + occasional /staged-explore runs cover the use cases. No new mechanism needed; the user's intuition is identifying a real concern but the existing tools handle it.

- **H5 — Hybrid:** lightweight semantic index as a project artifact (H3) + leverage existing /explore + /staged-explore patterns for generation, without a new discipline (avoid H1).

- **H6 — TEST the "solve all our confusions" claim.** Would a semantic index actually prevent the iter-1 type failure (canonical anchor missed)? OR would the index itself have the same staleness/coverage issues?

## Relationships

- CONTINUES FROM: `devdocs/inquiries/2026-05-12_22-25__pre_mvl_mapping_or_explore_enhancement/finding.md` (3-layer fix; user proposes semantic indexing as a different/complementary mechanism)
- RELATED: `devdocs/inquiries/2026-05-12_20-31__loop_diagnose__navigate_4_operations_error/finding.md` (LOOP_DIAGNOSE Candidate A — protocol-level fix; semantic index might supersede or complement)
- RELATED: all prior /explore-thread + /navigate inquiries (background)
