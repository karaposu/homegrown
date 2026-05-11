# Branch: telemetry_routing_protocol_classification

## Question

Is the telemetry-routing logic currently in `commands/inquiry.md` lines 100-149 (the PROCEED/FLAG/RE-RUN per-discipline threshold check) structurally a **protocol** that should be extracted to `homegrown/protocols/` following CONCLUDE's pattern — or is it correctly classified as a discipline component (already in each discipline's self-assessment telemetry section), with only the routing portion being a protocol (specifically RESUME, already named in `protocols/desc.md`)?

## Goal

A defensible architectural verdict the user can act on:

1. **Is telemetry-routing a protocol?** Resolve the doctrine: protocols route, disciplines judge. What's currently in `commands/inquiry.md` lines 100-149 — does it route, judge, or both? If both, where does each half belong?

2. **Which named protocol(s) does the routing portion correspond to?** Per `thinking_disciplines/protocols/desc.md`: RESUME is named as a Transfer protocol that "Read[s] `_state.md`, determine[s] what's been done, figure[s] out the next step. Currently lives inside `/inquiry`." Is RESUME-protocol the right home for the routing logic? Are there other named protocols (STEER? CONFIGURE?) that also apply?

3. **Where should it live post `/inquiry` deletion?** The just-completed sensemaking (`devdocs/sensemaking/inquiry_md_post_navigation_update_value_check.md`) recommended `/inquiry` deletion with telemetry-routing migrated into `/MVL` and `/MVL+`'s RESUME branches inline. The user's challenge: should it instead be EXTRACTED to `homegrown/protocols/resume.md` (CONCLUDE's pattern) and invoked by both runners via load+execute?

4. **Migration plan if extracted:** what does `homegrown/protocols/resume.md` contain? How do `/MVL` and `/MVL+` invoke it? What changes in `protocols/desc.md`?

## Scope Check

Question covers goal. Answering "is telemetry-routing a protocol" requires resolving the judging-vs-routing split (per protocols/desc.md doctrine), mapping to named protocols (RESUME), and producing a migration plan if extraction is the right move.

## Context

- **Just-completed sensemaking** (`devdocs/sensemaking/inquiry_md_post_navigation_update_value_check.md`): concluded `/inquiry` should be DELETED, with telemetry-routing migrated into `/MVL` and `/MVL+` RESUME branches. The user's challenge here is that "migrate inline" may be the wrong pattern — extraction (CONCLUDE pattern) may be structurally correct.

- **Protocols doctrine** (`thinking_disciplines/protocols/desc.md`):
  - Line 9: protocols "do not evaluate the quality of discipline outputs."
  - Line 36: "boundary between disciplines and protocols is the boundary between JUDGING and ROUTING."
  - Line 49: quality evaluation belongs to disciplines (self-assessment) or to Critique (adversarial). Protocols route based on those judgments.
  - Line 78: "Quality evaluation is NOT a protocol category."
  - Line 104: "RESUME — Pick up a saved inquiry across sessions. Read `_state.md`, determine what's been done, figure out the next step. Currently lives inside `/inquiry`."
  - Line 115: "Discipline telemetry, depth tests, and convergence checks are discipline components — they live INSIDE each discipline's spec and command, not between disciplines."
  - Line 118: "The lesson: protocols route. Disciplines judge."
  - Line 140: RESUME is in the "Exists and functional" group (7 protocols), labeled "Currently lives inside `/inquiry`."

- **CONCLUDE precedent**: extracted from `/MVL` and `/MVL+` (where it was inlined ~107 lines duplicated across two runners) into `homegrown/protocols/conclude.md`. Both runners now load+execute. This was applied because (a) duplication, (b) future runners would need it too, (c) protocol pattern matches.

- **Current `/inquiry` lines 100-149** (the telemetry-routing logic):
  - Reads `_state.md`
  - For each expected discipline output file: does it exist? If yes, find the telemetry section, read its self-assessment.
  - Per-discipline thresholds defined in a table (Sensemaking: perspectives ≥3, ambiguity-resolution ≥70%, SV delta; Innovation: generators ≥1, framers ≥1, survivor tested; Critique: critical dimensions, adversarial strength; etc.).
  - Route based on telemetry: PROCEED / FLAG / RE-RUN.
  - "No telemetry section found → treat as PROCEED. (Backward-compatible with older outputs or standalone discipline runs that don't include telemetry.)"

- **Current `/MVL.md` and `/MVL+.md` RESUME branches** (per my earlier reads of both files):
  - `/MVL` line 72-77: RESUME logic that reads `_state.md` and `_branch.md`, determines where pipeline left off by checking which files exist, proceeds to EXECUTE PIPELINE from first incomplete discipline.
  - `/MVL+` line 76-82: same pattern, with extended-flow-type verification.
  - Neither runner does telemetry-routing. They check file existence, not telemetry-section thresholds.

- **The question to test**: telemetry-routing in `/inquiry` mixes two operations: (1) reading discipline self-assessment (which is fine — disciplines judge) and (2) routing based on that assessment (which is RESUME's job). Is the current `/inquiry` implementation actually RESUME-as-named-but-richer? Or is it something else?

- **Naming candidates** if extracted as a new protocol:
  - RESUME (existing name; needs to absorb the telemetry-aware routing)
  - VERIFY (verb-explicit; sounds quality-evaluative which is wrong per doctrine)
  - ROUTE (too generic)
  - The cleanest answer per existing doctrine: extend RESUME to include the telemetry-aware routing logic.

## Relationships

- CONTINUES FROM: `inquiry_md_post_navigation_update_value_check` (in `devdocs/sensemaking/`) — the sensemaking that recommended migrating telemetry-routing inline into /MVL/MVL+ RESUME. This inquiry tests whether the migration target should be inline (sensemaking's recommendation) or extracted (user's challenge).
- RELATED: `extract_conclude_to_homegrown` — the precedent for protocol extraction.
- RELATED: `synthesize_vs_finding_split` — the precedent for splitting an operation into two protocols.
- RELATED: `protocols_relevance_check` — the audit of the protocols dimension.
- RELATED: `wayfinding_navigation_unification_check` — the just-completed extended-pipeline inquiry; established the pattern of checking shipped doctrine before applying changes.
