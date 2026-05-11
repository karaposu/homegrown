---
status: active
refines: devdocs/inquiries/synthesize_protocol_check/sensemaking.md
---
# Finding: synthesize_vs_finding_split

## Changes from Prior

**What's preserved:** the prior `synthesize_protocol_check` sensemaking's framing of SYNTHESIZE-vs-`finding.md` as worth investigating; the recognition that the two artifacts have different audience/format/location.

**What's changed:** the prior sensemaking concluded "narrowed not superseded" — that SYNTHESIZE-as-currently-specified handles the non-routine case while `finding.md` absorbs the routine case. This finding refines that to "two structurally distinct protocols, currently conflated under one name in `inquiry.md`." The previous "narrowed" framing defended the protocol's intent rather than its actual current shape; the user pushed back that SYNTHESIZE-as-written doesn't actually do anything extra than summarizing, which exposed the conflation.

**What's new:** the formal split. Two named protocols: **FINDING-COMPILE** (filled / alive-absorbed in `/MVL` and `/MVL+`) and **SYNTHESIZE** (named slot / alive-but-procedurally-underspecified). Three structural asymmetries justify the split: input asymmetry, output relationship asymmetry, and construction work asymmetry.

**Migration:** rewrite `commands/inquiry.md`'s SYNTHESIZE section to scope it explicitly to artifact construction; split the SYNTHESIZE entry in `thinking_disciplines/protocols/desc.md` into two protocol entries; add light cross-references in `commands/MVL.md` and `commands/MVL+.md` at the iteration-complete-yes branch. Coordinate with the pending Configuration β work from the prior `protocols_relevance_check` finding.

## Question

Are SYNTHESIZE (as defined in `commands/inquiry.md` lines 252-285) and `finding.md` (as produced by `/MVL` and `/MVL+` at iteration completion) two distinct protocols currently conflated under one name, OR are they the same protocol with different implementations? Specifically: should the project recognize a separate "summary-taking" protocol (compile inquiry artifacts into a coherent verdict for inquiry-tree-traversers) and a separate "SYNTHESIZE" protocol (produce a project-level artifact in the project's audience-specific format), or is this distinction not load-bearing?

**Goal.** A clear architectural verdict the user can act on, with concrete next-step list — not vague middle ground.

## Finding Summary

- **Verdict: TWO distinct protocols, currently conflated.** The current `inquiry.md` SYNTHESIZE section uses the language of one operation (compile-inquiry-artifacts) but lists the deliverables of another (project-level artifacts in spec / plan / report / RCA / decision-document formats). That mismatch IS the conflation.

- **The two operations are structurally distinct on three asymmetries.** (1) **Input asymmetry:** FINDING-COMPILE inputs are SIC artifacts (the inquiry's reasoning trail); SYNTHESIZE input is a finding (already-compiled answer) plus the target artifact's format requirements. (2) **Output relationship asymmetry:** FINDING-COMPILE's output IS the verdict; SYNTHESIZE's output IS the artifact the verdict specified — a different artifact than the verdict itself. (3) **Construction work asymmetry:** FINDING-COMPILE applies a known template to known input; SYNTHESIZE constructs new content (spec frontmatter, invocation patterns, examples) that doesn't exist in the input — derived from the finding's design decisions but not contained in them.

- **Recommended naming: FINDING-COMPILE + SYNTHESIZE.** Verb-explicit (FINDING-COMPILE makes the operation obvious); preserves SYNTHESIZE in the protocols vocabulary already established in `protocols/desc.md` and the prior `protocols_relevance_check` finding (zero coordination cost). Five alternative naming schemes (FINDING + SYNTHESIZE, COMPILE-FINDING + COMPILE-ARTIFACT, FINDING-WRITE + SYNTHESIZE, VERDICT-COMPILE + ARTIFACT-CONSTRUCT, SYNTHESIZE-finding/SYNTHESIZE-artifact) were evaluated and rejected for naming-clarity, coordination-cost, or structural-correctness failures.

- **FINDING-COMPILE is filled / alive-absorbed.** The operation is implemented inline by `/MVL` and `/MVL+` at the iteration-complete-yes branch. It uses a fixed template (frontmatter + Question + Finding Summary + Finding + Next Actions + Reasoning + Open Questions), saved inside the inquiry folder. Audience: inquiry-tree-traversers. No new code/spec is needed; just naming the operation that's already happening.

- **SYNTHESIZE is named slot / alive-but-procedurally-underspecified.** The operation is currently performed manually by humans (read finding → write the project artifact). The formal procedure (HOW to construct each artifact type from a finding) is not specified — it's a named slot for autonomy-ladder Level 2-3+ implementation, when the system needs to autonomously produce project artifacts from completed inquiries.

- **The split is architectural prep, not just doc reorganization.** The protocols dimension's stated purpose (per `protocols/what_is_protocol.md`) is to provide named-but-deferred slots for capabilities the autonomy ladder will need. SYNTHESIZE-as-named-slot fits this pattern. At Level 2-3+, the system needs to autonomously construct project artifacts; having the slot named now means the eventual implementation has a clear architectural home.

- **The split is cheap to apply.** Configuration β = ~56 lines of edits across 4 files (`commands/inquiry.md`, `thinking_disciplines/protocols/desc.md`, `commands/MVL.md`, `commands/MVL+.md`). Coordinates cleanly with the pending Configuration β from the prior `protocols_relevance_check` finding (no conflicts; can be applied together).

## Finding

### 1. The conflation, observed concretely

`commands/inquiry.md` (lines 252-285) defines SYNTHESIZE with 4 generic steps (read inquiry tree → compile top-down → resolve inconsistencies → save to project location) and lists deliverable types (specification document / implementation plan / decision document / report / root-cause analysis). The procedure described is "compile into a single, top-down document" — which is the same procedure that `/MVL` and `/MVL+` perform inline when writing `finding.md`. But the deliverable types listed are project-level artifacts in formats that `finding.md`'s template doesn't match (a `commands/scope.md` spec has YAML frontmatter, invocation patterns, and runnable examples that `finding.md`'s sections don't contain).

This is the conflation: the procedure described matches FINDING-COMPILE's operation; the deliverables listed match SYNTHESIZE's output catalog; the gap between them is unfilled. When the user reads `inquiry.md`'s SYNTHESIZE section and compares it to what `/MVL` does, the procedural description looks redundant — because the procedural description IS finding-compile, not artifact-construction. The role-name (SYNTHESIZE = artifact construction) and the procedure-description don't match.

### 2. The three asymmetries

The two operations differ structurally, not just in template/location/audience cosmetics. Three asymmetries make the distinction load-bearing:

**Asymmetry 1 — Input.** FINDING-COMPILE's inputs are the inquiry's SIC artifacts (`_branch.md`, `sensemaking.md`, `innovation.md`, `critique.md`). It reads the reasoning trail. SYNTHESIZE's inputs are a finding (an already-compiled verdict, the OUTPUT of FINDING-COMPILE) plus the target artifact's format requirements (e.g., "this needs to be a `/MVL`-format command spec; it needs YAML frontmatter, an Activation section, an Instructions section, etc."). The inputs differ in what they ARE.

**Asymmetry 2 — Output relationship.** FINDING-COMPILE produces the verdict-as-output: the inquiry's answer, captured in standardized form. The output IS the answer. SYNTHESIZE produces the artifact-the-verdict-was-about-as-output: the thing the answer specified. A finding ABOUT how to build `/scope` is not the same as `/scope`'s actual `commands/scope.md` spec. The finding describes WHAT to build; the spec IS the thing built. SYNTHESIZE's output is the THING; FINDING-COMPILE's output is the DESCRIPTION of what to build.

**Asymmetry 3 — Construction work.** FINDING-COMPILE applies a known template to known input — read the SIC outputs, populate the finding template's sections, save. The construction is mechanical (no new content is invented; the finding's content comes from the SIC outputs). SYNTHESIZE constructs CONTENT THE INPUT DOESN'T HAVE: a `commands/scope.md` spec needs YAML frontmatter (name, description with trigger phrases), invocation patterns, runnable examples — none of which exist in the finding. They have to be DERIVED from the finding's design decisions (and from the project's other specs as references). This derivation is non-trivial work; it's the construction step that distinguishes SYNTHESIZE from finding-compile.

These three asymmetries together make the operations structurally distinct, not template variations of one operation.

### 3. Naming

**FINDING-COMPILE + SYNTHESIZE** is the recommended pair.

FINDING-COMPILE: verb-explicit. The operation (compile a finding) is obvious from the name. The hyphenated compound matches the project's pattern of compound protocol names (analogous to other protocols' verb-noun structure).

SYNTHESIZE: preserved from the existing vocabulary in `protocols/desc.md` and the prior `protocols_relevance_check` finding. Synthesis literally means "combining elements into a new whole" — which captures the artifact-construction operation accurately (combining a finding + project context + format requirements into a new project artifact). Renaming to alternatives like ARTIFACT-CONSTRUCT or COMPILE-ARTIFACT would force coordinated updates to `protocols/desc.md`, the prior finding, and any other docs that reference SYNTHESIZE for marginal aesthetic gain.

Alternatives evaluated and rejected:
- **FINDING + SYNTHESIZE** killed on naming-clarity (FINDING is also the artifact name; protocol/artifact disambiguation friction).
- **COMPILE-FINDING + COMPILE-ARTIFACT** killed on coordination-cost (drops SYNTHESIZE; breaks established vocabulary) and semantic accuracy (compile is narrower than synthesize for the artifact-construction role).
- **FINDING-WRITE + SYNTHESIZE** acceptable but slightly weaker than FINDING-COMPILE on naming-clarity (WRITE undersells the compilation work).
- **VERDICT-COMPILE + ARTIFACT-CONSTRUCT** semantically cleanest if naming were greenfield, but coordination-cost is high (drops SYNTHESIZE; introduces 2 new names).
- **SYNTHESIZE-finding + SYNTHESIZE-artifact** killed on structural-correctness (treats them as variations of one operation; undermines the split).

### 4. The autonomy-ladder connection

`enes/desc.md`'s autonomy ladder requires autonomous artifact-construction at Level 2-3+:
- **Level 2** (system handles uncertain reviews): when the system reviews and proposes spec changes, those proposals need to be artifact-constructed — the proposed spec must exist as a coherent artifact, not just a description of a proposed spec.
- **Level 3** (system proposes own architectural improvements): the system identifies gaps, runs inquiries, and produces new specs/protocols. Artifact construction is the closing step; without it, the system's "proposals" are findings that a human still has to translate into installable artifacts.
- **Level 3+** (parallel MVL loops with cross-comparison): combining findings from parallel loops into higher-order artifacts (synthesis specs, ADRs) is artifact construction at scale.

Naming SYNTHESIZE as the architectural slot for these capabilities is the kind of "named-but-deferred" preparation the protocols dimension is designed to provide. The slot stays empty in current practice (humans manually translate findings to artifacts at Level 0-1), but at Level 2-3+ the system needs the slot filled. Naming it now means the eventual implementation has a clear conceptual home; not naming it forces every Level 2-3 capability to invent the role from scratch.

### 5. Configuration β as the recommended action

Configuration β = A.1 (FINDING-COMPILE + SYNTHESIZE) + B.1 (targeted rewrite of `inquiry.md` SYNTHESIZE section) + C.1 (split SYNTHESIZE entry in `protocols/desc.md`) + D.2 (light cross-reference in `/MVL` and `/MVL+`) + E (coordinate with pending Configuration β from the prior `protocols_relevance_check` finding).

Each component is independently a clean SURVIVE on its individual dimensions. The compound configuration scores HIGH on every weighted dimension (structural-correctness, naming-clarity, doc-coherence, future-readiness, edit-cost MEDIUM, discoverability, coordination-cost LOW).

Two configurations were considered and killed:
- **Configuration α** (D.1 = no /MVL cross-references): killed on discoverability — the FINDING-COMPILE name only lives in `protocols/desc.md` and isn't visible at the implementation site. The marginal cost of D.2 (~6 lines across 2 files) is too small to justify.
- **Configuration γ** (D.3 = rename /MVL section header): killed on doc-coherence — the renamed header (e.g., "FINDING-COMPILE: write `finding.md`") would violate /MVL's existing section-header pattern, where headers are lifecycle-states (If NEW / If RESUME / If ITERATION COMPLETE), not protocol names.

A defensible variant — **Configuration β'** = β with B.2 instead of B.1 — adds an explicit autonomy-ladder discussion to inquiry.md's SYNTHESIZE section (~10 extra lines). This strengthens future-readiness emphasis but introduces mild duplication with `enes/desc.md`. Acceptable as a user judgment call.

## Next Actions

### MUST

- **What:** Apply Step 1 of the punch list (in `critique.md`) — replace the SYNTHESIZE section in `commands/inquiry.md` with the proposed wording. Names FINDING-COMPILE explicitly; cross-references `thinking_disciplines/protocols/desc.md`; gives concrete examples; preserves the Quality test pattern.
  - **Who:** User. Proposed wording is in `critique.md` Step 1 (~30 lines replacing ~33).
  - **Gate:** Whenever the user accepts the two-protocol split.
  - **Why:** Eliminates the conflation in `inquiry.md`. Without this, the spec continues describing finding-compile's procedure while listing artifact-construction's deliverables — the friction that prompted this inquiry.

- **What:** Apply Step 2 — split the SYNTHESIZE entry in `thinking_disciplines/protocols/desc.md` into two entries (FINDING-COMPILE + SYNTHESIZE). Update the Current State count table.
  - **Who:** User. Proposed wording in `critique.md` Step 2.
  - **Gate:** Apply alongside Step 1, ideally in the same editing session.
  - **Why:** The architectural map (`protocols/desc.md`) needs both protocols named to reflect the structural split. Cross-references between the entries (sibling links) preserve navigability.

- **What:** Apply Steps 3 and 4 — add light cross-references in `commands/MVL.md` and `commands/MVL+.md` at the iteration-complete-yes branch (one parenthetical mention per file).
  - **Who:** User. Proposed wording in `critique.md` Steps 3 and 4 (~3 lines × 2 files = ~6 lines).
  - **Gate:** Apply alongside Steps 1-2.
  - **Why:** Names the FINDING-COMPILE protocol at the implementation site, not just in `protocols/desc.md`. Aids discoverability for users and external agents reading /MVL spec.

- **What:** Coordinate with the pending Configuration β from the prior `protocols_relevance_check` finding (Step 5).
  - **Who:** User.
  - **Gate:** When applying either inquiry's recommendations to `protocols/desc.md`. The two work-streams compose; they should be applied together OR in either order without conflict.
  - **Why:** Both inquiries recommend updates to `protocols/desc.md`. Applying them in coordination produces a unified result; applying them piecemeal risks inconsistencies in the count table.

### COULD

- **What:** Use B.2's wording instead of B.1 in Step 1 — adds an explicit autonomy-ladder connection paragraph (~10 extra lines) to the inquiry.md SYNTHESIZE section.
  - **Who:** User judgment call.
  - **Gate:** If user wants stronger future-readiness framing in inquiry.md and accepts mild duplication with `enes/desc.md`.
  - **Why (if applied):** Surfaces the autonomy-ladder rationale at the point where a reader encounters SYNTHESIZE; doesn't force the reader to navigate to `enes/desc.md` for the strategic context.

### DEFERRED

- **What:** Build the formal SYNTHESIZE procedure — the actual artifact-construction protocol with steps for spec / plan / report / ADR / RCA construction.
  - **Gate:** When autonomy-ladder Level 2 maturity is observable (system handles uncertain reviews; needs to autonomously produce proposed spec changes), OR when manual artifact-construction friction becomes high enough to motivate formalization (e.g., ≥10 inquiries where the user manually translated findings to specs and noticed pattern repetition).
  - **Why (if revived):** The named slot becomes a real capability; the system can autonomously close the inquiry → artifact loop. This is the Level 2-3+ vision in `enes/desc.md`.

- **What:** Migrate the SYNTHESIZE protocol to its own canonical home (e.g., `commands/synthesize.md` or `protocols/synthesize.md`) once it has a real procedure.
  - **Gate:** Same as the previous deferred item — once SYNTHESIZE has a real procedure, the canonical-home decision becomes pertinent.
  - **Why (if revived):** Aligns with the unix-tools pattern of separately addressable utilities. Currently SYNTHESIZE lives as a sub-section of `inquiry.md`; once it's a real protocol with a real procedure, it deserves its own file.

- **What:** Build a `/synthesize` command that takes a finding.md and a target artifact type and produces the project artifact.
  - **Gate:** When the formal SYNTHESIZE procedure (above) has been specified AND the project has 2+ artifact types whose construction would be repetitive enough to automate.
  - **Why (if revived):** Removes the manual translation step entirely; system produces project artifacts from inquiry findings without human in the loop.

## Reasoning

### Why two protocols, not one

The previous `synthesize_protocol_check` sensemaking concluded "narrowed not superseded" — that SYNTHESIZE handles a non-routine case while `finding.md` absorbs the routine case. The user pushed back: "does SYNTHESIZE do something extra than summarizing?" That pushback exposed the defect in the prior framing — SYNTHESIZE-as-currently-specified DOESN'T do anything extra than summarizing; the prior sensemaking was defending the protocol's intended role rather than its actual current shape.

This inquiry's sensemaking re-examined the question with that exposure as the seed. The conclusion: the prior framing was wrong because it conflated two structurally distinct operations under one name. The correct framing is two protocols: one filled (FINDING-COMPILE), one named-but-procedurally-underspecified (SYNTHESIZE).

The three asymmetries (input / output relationship / construction work) make the distinction structural, not cosmetic. Single-operation framings (one protocol with two implementations; one protocol with two output templates) all fail on the construction-work asymmetry: producing a `commands/scope.md` spec requires inventing content (frontmatter, invocation patterns, examples) that doesn't exist in any input the operation receives. That's not "applying a different template"; that's "deriving new content."

### What was killed and why

**A.2 (FINDING + SYNTHESIZE)** — killed on naming-clarity. The protocol/artifact name overlap creates real disambiguation friction in a project already managing multiple overlapping vocabularies (protocols vs disciplines, etc.).

**A.3 (COMPILE-FINDING + COMPILE-ARTIFACT)** — killed on coordination-cost (drops SYNTHESIZE; breaks continuity with `protocols/desc.md` and the prior `protocols_relevance_check` finding) and semantic accuracy (compile is narrower than synthesize for artifact-construction).

**A.6 (VERDICT-COMPILE + ARTIFACT-CONSTRUCT)** — killed on coordination-cost. Semantically cleanest if naming were greenfield, but the project's not greenfield — SYNTHESIZE is established. Renaming forces cascading updates for marginal aesthetic gain.

**B.3 (delete SYNTHESIZE section from inquiry.md, reference protocols/desc.md only)** — killed on doc-coherence. Procedure-level "when do I run this?" guidance belongs in the command file (inquiry.md, where users invoke); protocol-definition content belongs in the architectural map (protocols/desc.md). B.3 conflates these scopes.

**D.1 (no /MVL cross-references)** — killed on discoverability. The FINDING-COMPILE name only living in protocols/desc.md misses the implementation site; agents and users reading /MVL spec don't see the protocol name. The cost of D.2 (~6 lines) is trivial.

**D.3 (rename /MVL section header to "FINDING-COMPILE: write finding.md")** — killed on doc-coherence. /MVL's existing section headers are lifecycle-states (If NEW / If RESUME / If ITERATION COMPLETE / EXECUTE PIPELINE); adding a protocol-named header to a sub-step inside the iteration-complete-yes branch breaks the pattern.

**Configuration α (with D.1)** — killed by inheritance from D.1's discoverability failure.

**Configuration γ (with D.3 and B.2)** — killed by inheritance from D.3's doc-coherence failure.

### What survived and why

**A.1, B.1, C.1, D.2** — each independently passes all weighted dimensions. The split is structurally justified; the names preserve continuity with existing vocabulary; the doc edits put procedure content in command files and protocol-definition content in the architectural map; the cross-references aid discoverability without violating section-header patterns.

**Configuration β** — survives as the recommended default. Every weighted dimension scores HIGH. The compound benefit (clear split + named slots + discoverability + coordination with prior audit work) for ~56 lines of edits across 4 files is the highest value-per-effort.

**Configuration β'** — survives as a defensible variant for users who want stronger autonomy-ladder framing in inquiry.md and accept mild duplication with `enes/desc.md`.

## Open Questions

### Refinement Triggers

- **Configuration γ revival (P1.C-style restructure / D.3 header rename):** revisit if the project's overall section-header pattern shifts to protocol-named headers (no current signal; would require a separate inquiry).
- **A.6 revival (VERDICT-COMPILE + ARTIFACT-CONSTRUCT):** revisit during a comprehensive vocabulary refactor across the protocols dimension (out of scope; no current trigger).
- **B.3 revival (delete inquiry.md SYNTHESIZE section):** revisit if `protocols/desc.md` evolves to include procedure-level guidance — currently it's architectural only.

### Monitoring

- After Configuration β is applied, observe whether future readers of `commands/inquiry.md` continue to ask "is SYNTHESIZE redundant?" (the friction that prompted this inquiry). If yes, the rewrite needs further refinement; if no, the split successfully resolved the conflation.
- Watch whether the FINDING-COMPILE name gets adopted in conversation and downstream docs. If the name doesn't take hold (people keep saying "the finding-writing step" instead), the verb-explicit naming may not be the right shape.

### Blocked

- A definitive call on whether SYNTHESIZE will ever be formalized (with a real procedure for spec/plan/report/RCA construction) blocks on autonomy-ladder Level 2-3+ maturity — specifically, whether the system reaches a state where it needs to autonomously produce project artifacts from inquiry findings. Cannot be resolved from inside the project.

### Research Frontiers

- Whether artifact-construction is genuinely automatable for project-specific formats (each project has its own conventions; a generic /synthesize command would need to learn project conventions or take a template-spec as input). Open question for when SYNTHESIZE formalization begins.
- Whether the `/synthesize` command should be triggered automatically by `/MVL` when the inquiry's question signals "design X" or "produce a Y artifact," vs requiring explicit user invocation. Design choice for future implementation.
