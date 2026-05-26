# Branch: Surfacing — Structural Spec Text Production

## Question

Given the two settled MEANING-layer findings on the surfacing discipline — (a) the pure-design finding (`devdocs/inquiries/2026-05-22_01-25__meaning_surfacing_pure_discipline_clean_design/finding.md`) which committed identity + mechanism + 3-phase structural shape + 6 Traversal components + 8 load-bearing primitives + LAYER 1/2 failure framework + calibration trajectory + re-invocation + Core taxonomy placement + 8-item NOT-list, and (b) the output-correction finding (`devdocs/inquiries/2026-05-22_02-13__meaning_surfacing_output_correction_traverse_load_vs_inventory/finding.md`) which refined the output to the dual workspace + thin artifact (Traversal Trace + State Summary) with three relevance-tag granularities and 3 new LAYER 1 failure modes — what is the **actual runtime spec text** for the surfacing discipline, as a single self-contained markdown spec file consistent with the project's existing discipline-spec convention (e.g., `cognitive_harness/sense-making/references/sensemaking.md`, `cognitive_harness/decompose/references/decompose.md`)?

## Goal

A deployable surfacing spec text — the full markdown content for a file that can be saved at `cognitive_harness/surfacing/references/surfacing.md` (or wherever the user chooses to host it) and used as the discipline's runtime reference. The user should be able to:

1. **Read the produced spec** and recognize it as a complete, runnable discipline spec consistent with the project's convention: section organization matches the existing disciplines' patterns (Identity → Components → Process Model → Quality → Output → Execute section); cross-references use the project's format; the Execute section at the bottom is operationally complete.

2. **Apply the spec directly** by saving it at the chosen path (`cognitive_harness/surfacing/references/surfacing.md` or equivalent) and installing it as a callable skill via the existing skill-install machinery (`cognitive_harness/surfacing/SKILL.md` wrapper to be written separately as user-discretion).

3. **Confirm the spec faithfully expresses both MEANING-layer findings.** Every commitment from both findings (16 from the pure-design finding + the 12 RDs from the output-correction finding) appears in the spec at the appropriate section. The Inherited Commitments Re-test section of this finding lists each commitment + where in the spec it lives.

4. **Verify the spec respects the disciplines-self-contained principle.** No outbound references to CONCLUDE, /MVL+, other disciplines, or the autonomous-consciousness-goal trajectory. The spec stands on its own as a discipline's runtime reference.

5. **Recognize what PROCESS-level questions were surfaced during the STRUCTURAL inquiry** and which are committed inline (e.g., a default convergence-criterion for the Traversal phase that the spec needs in order to be runnable) vs deferred to a downstream PROCESS inquiry (e.g., the precise sampling parameter semantics).

The deliverable is the full spec markdown text, saved inside the inquiry folder as `surfacing_spec.md` during Innovation (drafted) and Critique (verified), and quoted in `finding.md` at CONCLUDE (final form). The user reads `finding.md`'s Finding section to get the spec text + the contextual reasoning; the spec text itself is also available as a separate file (`surfacing_spec.md`) ready to be copied to the production location.

## Scope Check

**Question covers goal.** The 5 goal sub-asks all derive from the question (produce the spec text consistent with convention + apply directly + faithfully express MEANING + respects principle + acknowledges PROCESS-level questions).

**Specific-vs-pattern check.** The question targets the SPECIFIC surfacing spec text. The broader pattern — how to structurally operationalize a MEANING-layer commitment into a runtime spec for ANY discipline — is interesting but is NOT the foreground. The broader pattern surfaces as Open Question if it emerges. The inquiry commits the specific surfacing spec text.

**Scope NOT widened to:**

- Writing the SKILL.md wrapper file (user-discretion downstream; not a STRUCTURAL spec concern).
- Deciding whether to rename current `/explore` to `/surfacing` (user-discretion; not affected by spec production).
- The precise PROCESS-level semantics (sampling parameter; precise component-ordering within Traversal; precise convergence criteria) — these get committed inline ONLY when the spec is non-runnable without them; otherwise deferred to a downstream PROCESS inquiry.
- The materialization plan (per `docs/materialization_lifecycle.md`) — separate operational concern; not in this STRUCTURAL inquiry's deliverable.
- A re-derivation of the MEANING-layer commitments — both prior findings are inherited.

## Layer Commitment

**Primary cognitive layer: STRUCTURAL.**

Justification: The MEANING has been settled by the two prior findings. This inquiry produces the artifact's SHAPE — section organization, the spec's typographic structure, the cross-reference format, the schema definitions for the artifact's output fields, and the Execute section's operational instructions. These are all STRUCTURAL concerns per the `/MVL+` Layer Commitment template ("what the thing's spec LOOKS LIKE. Adjudicates sections, organization, schema, artifact shape").

Out-of-scope alternatives explicitly considered OUT OF SCOPE for THIS run:

- **MEANING** — already settled at 2026-05-22_01-25 (Surfacing: Pure Discipline Clean Design) + 2026-05-22_02-13 (Surfacing: Output Correction). This inquiry does NOT re-derive what surfacing IS; it produces the runtime spec text.

- **PROCESS** — the precise operational steps (exact iteration counts; precise component-ordering within Traversal; precise sampling thresholds; precise convergence criteria) are downstream. This inquiry's spec will include OPERATIONALLY SUFFICIENT process content (the Execute section will name the steps + their default order) but will NOT pin down the precise procedural fine-grain. If the spec cannot be runnable without committing a PROCESS-level decision, the decision gets committed inline with a default + a refinement-trigger; if the spec can be runnable with the decision deferred, it is deferred.

Sequential plan: 2026-05-22_01-25 (MEANING pure design) + 2026-05-22_02-13 (MEANING output correction) → THIS inquiry (STRUCTURAL spec text) → IF the user chooses: downstream PROCESS inquiry on precise operational semantics → IF the user chooses: materialization + skill installation (SKILL.md wrapper; install script).

## Synthesis Trigger

**REQUIRED.** This inquiry consumes two prior inquiry outputs as inputs + an existing-disciplines corpus as reference:

- `devdocs/inquiries/2026-05-22_01-25__meaning_surfacing_pure_discipline_clean_design/finding.md` — Surfacing: Pure Discipline Clean Design. Committed: discipline identity (Section 1); relevance-attribution mechanism + 8 structural distinctions (Section 2); 4-level relevance vocabulary (Section 3); 3-phase structural shape + Boundary-discovery sub-phase + 6 Traversal components (Section 4); 8 load-bearing primitives + 3 deliberately absent (Section 5); asymmetric-failure principle + LAYER 1/LAYER 2 failure framework (Section 6); calibration trajectory + 5 primary + 2 secondary signals (Section 7); 8-item intrinsic NOT-list (Section 8); MEANING-layer compliance scope (Section 9). Also the discipline-taxonomy placement (Core) and the LBT verdicts.

- `devdocs/inquiries/2026-05-22_02-13__meaning_surfacing_output_correction_traverse_load_vs_inventory/finding.md` — Surfacing: Output Correction. Committed: dual output (workspace + thin artifact); artifact's two sub-sections (Traversal Trace + State Summary); three relevance-tag granularities; "thin" criterion (no item content); 3 new LAYER 1 failure modes; calibration signal split; re-invocation parameter rename (prior-artifact + optional prior-workspace); runner authority for session continuity; workspace-populated field dual ownership.

Plus the existing-disciplines reference corpus (held APART; not inputs in the synthesis sense; consulted for structural-convention orientation):
- `cognitive_harness/sense-making/references/sensemaking.md` — Structural Sensemaking discipline spec (most similar in structural complexity)
- `cognitive_harness/decompose/references/decompose.md` — Structural Decomposition discipline spec
- `cognitive_harness/innovate/references/innovate.md` — Structural Innovation discipline spec
- `cognitive_harness/td-critique/references/td-critique.md` — Structural Critique discipline spec
- `cognitive_harness/explore/references/explore.md` — Structural Exploration discipline spec (current /explore; consulted ONLY for spec-anatomy convention; CONTENT held APART per the prior findings' anti-coupling constraint)
- `thinking_disciplines/anatomy_of_disciplines.md` — the spec-anatomy template

Per CONCLUDE's enforcement: this inquiry's finding MUST include `## Inherited Commitments Re-test` section. The Sensemaking + Critique disciplines will do the actual re-testing (not just record inheritance) — the Sensemaking phase pre-classifies which commitments are RE-TESTED (the spec must express the commitment somewhere; verify it does) vs INHERITED-WITHOUT-RE-TEST (commitments structurally untouched by spec production — e.g., the disciplines-self-contained principle is a project-level commitment that the spec must respect but does not re-derive).

## Diagnostic Constraints

- **The existing-disciplines spec corpus is the primary structural-convention reference.** When the surfacing spec needs to decide e.g., "what section headers does the spec have? In what order? How are refinement notes formatted? How are cross-references styled?" — the answer is "match the existing discipline-spec convention as exemplified by sensemaking.md + decompose.md + innovate.md + td-critique.md." Deviation from convention is a defect unless explicitly justified.

- **Anti-coupling to current `/explore` content is preserved.** The existing-disciplines spec corpus IS consulted, but `cognitive_harness/explore/references/explore.md` (current /explore) is consulted ONLY for spec-anatomy convention (section headers, formatting), NOT for content (which the prior findings' anti-coupling constraint held APART). Specifically: do NOT copy current /explore's vocabulary (labels-vs-anchors, scan-signal-probe-cycle, confidence-tagged map, Form-(i)/(ii), Completeness-before-novelty rule, mode-determination, §1.5 declared identity, §4.4 labeling-vs-meaning heuristic) into the surfacing spec. The surfacing spec uses its own vocabulary from the two MEANING findings.

- **The disciplines-self-contained principle is mandatory.** Per the auto-memory `feedback_disciplines_self_contained.md`: discipline runtime spec files must not contain outbound pointers to design-history/theory folders or sibling disciplines. The surfacing spec MUST be self-contained: it can reference `docs/thinking_space_dynamics.md` (the typed primitive set; canonical vocabulary, not a sibling discipline) and `docs/discipline_taxonomy.md` (the taxonomy; project-level reference) but MUST NOT reference other disciplines' spec files, the autonomous-consciousness-goal frame, the materialization lifecycle, or CONCLUDE's protocol.

- **The "Loading note" header is required.** Every existing discipline spec begins with a `> **Loading note.**` block stating that the file is loaded at Step 0 by the discipline's SKILL.md. The surfacing spec MUST include this header.

- **The "Execute the Following Process" section at the bottom is required.** Every existing discipline spec ends with an "Execute the following process" or equivalently-named section containing the operational instructions for running the discipline. The surfacing spec MUST include this section.

- **Refinement notes follow the existing convention.** Per `docs/discipline_rule_placement.md` + `docs/step_refinement.md`: refinement notes are formatted as `*Refinement note (applies at [Step / Phase / Component]):*` with a bold-prefixed name. The surfacing spec MUST use this format if it includes refinement notes (currently no committed refinements at MEANING level; any that emerge during this STRUCTURAL inquiry get this format).

- **Cross-reference format follows the existing convention.** Per `docs/discipline_rule_placement.md`: cross-references use the form "For [brief role description], see [canonical home path]." First reference to another file uses the full path; subsequent uses the bare filename. In frontmatter, use full paths.

- **The spec MUST faithfully express both MEANING-layer findings without re-derivation.** The MEANING content (identity, mechanism, vocabulary, structural shape, primitives, failure framework, calibration, re-invocation, output spec, NOT-list) is committed; this inquiry's spec only OPERATIONALIZES it into runnable text. The spec does NOT add new MEANING-layer commitments.

- **PROCESS-level decisions get committed inline ONLY when the spec is non-runnable without them.** The threshold is operational sufficiency: can a runner (or an LLM following the spec) actually execute the discipline from this text? If yes (with reasonable defaults), the PROCESS detail is sufficient. If no (the runner would be stuck on "how do I do X"), the PROCESS detail needs to be committed inline with a default + a refinement-trigger flagging the deferred operationalization for a future PROCESS inquiry.

- **The spec's size budget is "complete but not bloated."** The existing discipline specs range from ~300 lines (e.g., sense-making) to ~500+ lines. The surfacing spec should fit in this range. Bloat is a defect (per `docs/discipline_design_history/for_explore.md` — the 2026-05-14 bloat-reframe). Completeness is required (per the existing disciplines' depth).

- **The spec output is double-saved.** During Innovation, the draft spec text is saved as `surfacing_spec.md` inside the inquiry folder. During Critique, the spec is adversarially tested + refined if needed. At CONCLUDE, the `surfacing_spec.md` file remains in the inquiry folder (archived to docarchive/ per CONCLUDE convention) AND the spec text is quoted in `finding.md`'s Finding section so the user can read both. The user will then COPY the spec text from `surfacing_spec.md` or `finding.md` to the production path of their choice (downstream user-discretion).

## Relationships

- **SYNTHESIZES:**
  - `devdocs/inquiries/2026-05-22_01-25__meaning_surfacing_pure_discipline_clean_design/finding.md` — pure-design MEANING.
  - `devdocs/inquiries/2026-05-22_02-13__meaning_surfacing_output_correction_traverse_load_vs_inventory/finding.md` — output-correction MEANING.

- **RELATED (orientation only; NOT synthesis inputs):**
  - `cognitive_harness/sense-making/references/sensemaking.md` — spec-anatomy reference.
  - `cognitive_harness/decompose/references/decompose.md` — spec-anatomy reference.
  - `cognitive_harness/innovate/references/innovate.md` — spec-anatomy reference.
  - `cognitive_harness/td-critique/references/td-critique.md` — spec-anatomy reference.
  - `cognitive_harness/explore/references/explore.md` — spec-anatomy reference (CONTENT held APART per anti-coupling constraint).
  - `thinking_disciplines/anatomy_of_disciplines.md` — spec-anatomy template.
  - `docs/discipline_rule_placement.md` — placement convention.
  - `docs/step_refinement.md` — refinement-note convention.

- **POTENTIAL DOWNSTREAM:**
  - Downstream PROCESS inquiry on precise operational semantics (sampling parameter; precise component-ordering; precise convergence criteria) — if surfaced during this inquiry.
  - User-discretion: skill installation (SKILL.md wrapper; install script; rename/coexist decision relative to current /explore).
  - Materialization lifecycle inquiry per `docs/materialization_lifecycle.md` (when the spec is being built into a callable artifact).
