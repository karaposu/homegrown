# Branch: Routeman structural layer — spec organization + parts

## Question

- **Subject** — routeman's structural-layer artifact (the SKILL.md spec file + its loaded references file), specifically its organization and parts.
- **Action** — design (a from-scratch structural design problem; meaning layer is settled, structural artifact is open).
- **Level** — discipline-level (routeman SKILL.md authoring concern) with cross-discipline + protocol references (the structural artifact must integrate the 6 resolved Tier-1 question outcomes + 7 satellite findings + 1 design memo into one coherent spec).
- **Observation targets** — preserve each clause as a separate aspect (per LOOP_DIAGNOSE MC2):
  1. **Top-level section structure** — what sections does the SKILL.md file have? In what order? What sectional vocabulary should it use (matching project conventions like `## Identity`, `## Components`, `## Process Model`, `## Failure Modes`, `## Output`, or routeman-specific sections like `## Aggregation Protocol`, `## Layer-2 Audit Hooks`)?
  2. **Reference file split** — what content lives in `cognitive_harness/routeman/SKILL.md` (the loaded-at-invocation file) vs `cognitive_harness/routeman/references/routeman.md` (the loaded-at-Step-0 reference file)? What is the load-order discipline (per the established `> Loading note` pattern at the top of reference files)?
  3. **Embedded vs cross-referenced content** — which parts of the spec embed inherited content (e.g., the 16-type taxonomy from canonical /navigation; the 17/18-attribute schema from 18-58) versus cross-reference external authority files (e.g., Q5 protocol file; Q6 contracts; LAYER-2 audit protocol from 06-00; `docs/autonomy_level.md` register)? When does inheritance get re-stated vs pointed-to?
  4. **Self-contained vs inbound-pointers** — the project feedback memory says "disciplines self-contained" (discipline runtime spec files must not contain outbound pointers to design-history/theory folders; disciplines are individuals). How does routeman SKILL.md preserve self-containment while still inheriting from 12 cross-discipline + protocol commitments? Which inbound-pointers ARE legitimate (protocol references, autonomy register reads) vs forbidden (design-history pointers)?
  5. **Where the 8 Q2-aggregation sections + the Q6-validation layer + the Q3-adaptive-guidance mechanism + the Q4-audit hooks live within the SKILL.md structure** — each of these is committed-content from a resolved frontier question; where in the spec do they sit? Does each get its own top-level section? A grouped section? Embedded into existing canonical sections?
  6. **What the resulting file count + folder structure looks like** — does routeman have `SKILL.md` + `references/routeman.md` only (matching /surfacing, /sense-making, /decompose, /innovate, /td-critique convention)? Or additional reference files (e.g., `references/route_taxonomy.md` for the 16-type table; `references/aggregation_rules.md` for the per-Movement-Family typology)?
  7. **Migration artifact strategy** — when routeman ships, canonical `/navigation` is archived per the 14-39 design memo's COULD action. What structural-layer artifacts coordinate the migration (e.g., a `cognitive_harness/non-active/navigation/_archive_note.md` pointing to routeman; runner-spec updates in `/MVL` + `/MVLw` SKILL.md files; install-script updates)? These are STRUCTURAL artifacts (not just runtime behavior).

Under the corrected isolated-session + file-scanning architecture (16-31) and inheriting all 6 resolved Tier-1 question outcomes (Q1 autonomy register; Q2 multi-head aggregation; Q3 adaptive-guidance generation; Q4 LAYER-2 audit; Q5 file-system protocol; Q6 file-shape contracts) + Q10 emission policy + 14-39 meaning-layer design memo + satellite findings from 16-31 + 18-58 + 24-00 + 24-01 + 24-01-30 + 24-40: design the STRUCTURAL artifact for routeman — the SKILL.md + references file organization, section structure, embedded-vs-cross-referenced content split, self-containment compliance, location of resolved-question content within the spec, folder structure, and migration artifact strategy.

## Goal

- **Criterion** — actionability + project-convention-fit + self-containment-compliance + cross-discipline-coherence. The design must be implementable directly by the SKILL.md author (no further design rounds for the structural artifact); must match the existing 5-Core-discipline convention (/surfacing, /sense-making, /decompose, /innovate, /td-critique each have `SKILL.md` + `references/<discipline>.md` with a `> Loading note` at the top of references); must comply with the "disciplines self-contained" feedback memory; must cohere with neighbor specs (Q5 protocol file; Q6 contracts; 06-00 audit protocol; multi_resolution_navigation; branch_inquiry).
- **Use case** — the routeman SKILL.md author can create the file structure + populate each section by reading this finding directly; no further structural design needed. The author knows which content embeds vs cross-references, where each resolved-question commitment lives, what reference files exist, and what migration artifacts to coordinate.
- **Desired outcome** — the SKILL.md spec ships at L0 as a single-file (or single-folder) artifact whose organization parallels existing Core disciplines, whose content honors the 13 inherited priors without violating self-containment, and whose migration footprint (runner-spec edits; install-script edits; non-active archive note) is enumerated.
- **What would fail** — (a) a vague "organize like other disciplines" without specifying which sections + content split + migration artifacts; (b) a design that violates self-containment by embedding design-history pointers in the runtime spec; (c) a design that duplicates protocol content (Q5 file-system protocol; Q6 contracts; 06-00 audit) verbatim into routeman SKILL.md (defeats the single-canonical-location principle from Q5/Q6 R1 drift-coordination); (d) a design that ignores resolved-question commitments (e.g., omits where Q2 aggregation rules live, where Q3 mechanism lives, where Q4 audit hooks live); (e) a design that conflates structural-layer (what the spec LOOKS LIKE) with process-layer (what STEPS the spec runs).

## Source Input

```text
/MVLw
based on both devdocs/inquiries/2026-05-23_15-20__routeman_implementation_frontier_questions/finding.md 

devdocs/inquiries/2026-05-23_14-39__routeman_discipline_design/finding.md
(reread them both fully now)

mean layer of routeman is solved in high degree, 

lets focus how it should be structured, consists of what parts etc.
```

The user invoked /MVLw with explicit reference to two priors (the 14-39 meaning-layer design memo + the 15-20 frontier-questions finding with Q1-Q6 + Q10 resolutions). The user stated explicitly that meaning layer is "solved in high degree" and the inquiry should focus on STRUCTURE — "how it should be structured, consists of what parts etc." This is a STRUCTURAL Layer Commitment per the MVLw template's trigger conditions (the question targets a discipline artifact for structural rewrite; the user has explicitly identified the structural layer).

## Scope Check

Question covers goal. The 7 sub-aspects (top-level section structure; reference file split; embedded vs cross-referenced; self-containment compliance; resolved-question content location; folder structure; migration artifact strategy) map to all 4 goal criteria (actionability via specific structural commitments; project-convention-fit via section-vocabulary alignment with existing disciplines; self-containment-compliance via explicit pointer-policy; cross-discipline-coherence via the where-each-resolved-question-lives sub-aspect). The migration artifact sub-aspect (7) was added because the 14-39 design memo's COULD actions include runner-spec updates + install-script updates + canonical /navigation archival — these are STRUCTURAL artifacts that the spec author must coordinate, not just runtime behaviors.

Specific-vs-pattern check: the question targets the SPECIFIC ROUTEMAN STRUCTURAL ARTIFACT (not a general pattern for discipline-spec structuring). Within that specific scope, the design must accommodate the routeman-specific commitments (12 inherited priors; specific resolved-question outcomes). The reading is unambiguous.

## Layer Commitment

**Primary layer: STRUCTURAL.**

The user explicitly stated "mean layer of routeman is solved in high degree, lets focus how it should be structured, consists of what parts etc." This is the canonical STRUCTURAL trigger: the user accepts what routeman IS (meaning), and the artifact's SHAPE is the problem to settle.

**Other-layer alternatives considered + explicitly out of scope for THIS run:**

- **Meaning** — out of scope. The meaning layer is already settled by the 14-39 design memo (3-layer identity + 10 features + 16-attribute schema + 9-mode failure framework + 26 lineage decisions + 3 endgame functions + forward-Boundary slot) and refined by 6 resolved Tier-1 frontier questions (Q1-Q6) + Q10 + satellite findings (16-31, 18-58, 24-00, 24-01, 24-01-30, 24-40). The user explicitly named this layer as "solved in high degree."
- **Process** — out of scope for THIS run. The user named "structure / parts," not "steps / sequencing / runtime mechanism." The process layer (HOW routeman's 10 features fire in what order; HOW the runtime loop iterates; HOW the dispatch table consumes input) is a separate inquiry that follows structural commitments. The 14-39 design memo's COULD action #4 ("Specify the runtime sequencing of the ten features in routeman's SKILL.md") is the process-layer follow-up that depends on this structural inquiry's output.

**Sequential multi-layer plan:** the structural-layer inquiry (THIS one) feeds the process-layer inquiry (a future one) — settle the artifact's organization first, then specify the runtime sequencing within the organization. The dependency order is structural-before-process because process must operate within structural boundaries.

## Synthesis Trigger

This inquiry consolidates commitments from 13 priors:

- `devdocs/inquiries/2026-05-23_14-39__routeman_discipline_design/finding.md` — meaning-layer design memo: 3-layer identity statement; 10 features; 16-attribute schema (later 17/18 per 18-58); 9-mode failure framework (later 11-mode); 26 lineage decisions; 3 endgame functions; forward-Boundary slot in 4-category discipline taxonomy.
- `devdocs/inquiries/2026-05-23_15-20__routeman_implementation_frontier_questions/finding.md` — frontier-questions list (Q1-Q15) with current post-resolution state: Q1+Q2+Q3+Q4+Q5+Q6+Q10 RESOLVED; Q7 PARTIALLY-RESOLVED; Q8 demoted; Q9 REMOVED; Q11+Q12+Q13+Q14+Q15 from 24-00 still open.
- `devdocs/inquiries/2026-05-23_16-31__routeman_isolated_session_correction/finding.md` — isolated-session + file-scanning architecture; multi-head realized at WORKER level; routeman as singleton scanning across all worker folders.
- `devdocs/inquiries/2026-05-23_18-58__routeman_staged_mapping_and_reasoning_field/finding.md` — Point 1 hybrid two-stage staged route mapping with selective-runtime trigger; Point 2 length-bounded `why_this_might_be_important` meta-reasoning field; 17-attribute top-level / 18-attribute sub-route schema; LLM-operational-characteristics-as-design-input principle named for routeman; 2 LAYER-2 mode additions (false depth + filler meta-reasoning).
- `devdocs/inquiries/2026-05-24_00-20__routeman_persistence_and_invocation_modes/finding.md` — multi_resolution_navigation protocol adoption; `_navig.md` + `routeman.md` schemas (hybrid placement per invocation scope); persistent + in-place evolution + append lifecycle; 13-base-field frontier-candidate-record schema; two-tier boundary with `branch_inquiry.md`.
- `devdocs/inquiries/2026-05-24_00-40__autonomy_register_and_discipline_read_protocol/finding.md` — `docs/autonomy_level.md` register file; 3-tier failure handling read protocol (INFO / ERROR / ERROR); human-only write at first ship with system-warning hook + L2+ system-set deferred; transition_history audit trace.
- `devdocs/inquiries/2026-05-24_01-00__adaptive_guidance_generation_mechanism/finding.md` — two-stage anchor-then-refine mechanism (Stage 1 deterministic per-movement-type chain; Stage 2 LLM-judgment-within-constraints); A1+A3 audit substrate; MS1+MS5 mode-selection; LAYER-2 substrate for 3 modes.
- `devdocs/inquiries/2026-05-24_01-30__route_taxonomy_categorization/finding.md` — Movement Family primary axis (Progression Moves 6 / Re-orientation Moves 5 / Coordination Moves 5) + 6 secondary attributes per type (direction, intent, autonomy_readiness_tier, auto_class, scope, has_sub_actions); per-type coordinate table preserving all 16 types.
- `devdocs/inquiries/2026-05-24_02-00__investigate_frontier_revisit_emission_policy/finding.md` — Option 13 (Hybrid) confidence-graduated emission + per-route-type-split; D1 confidence labels (LOW/MED/HIGH at per-discipline-N 20/30); first-ship LOW fallback; downstream-decides-via-metadata pattern; two-epoch framing.
- `devdocs/inquiries/2026-05-24_06-00__layer2_audit_mechanism_design/finding.md` — `cognitive_harness/protocols/layer2_audit.md` protocol; runner-invoked at routeman invocation-end (L1+); two-layer cadence (fixed-interval + per-mode event-triggered); per-mode dispatch table + substrate consumption; 5-tier verdict format; spec-coherence check against routeman SKILL.md.
- `devdocs/inquiries/2026-05-24_07-30__file_system_protocol_workers_routeman_runners/finding.md` — `cognitive_harness/protocols/inquiry_filesystem_protocol.md` protocol; folder topology (canonical inquiry-folder paths + branch nesting); atomic-write convention (POSIX rename); per-discipline write-completeness as two-part check (filename + verdict-line); scan detection (L0 full + L2+ mtime-filtered); routeman's completion-emission shape (`_navig.md` + `routeman.md` + `routeman_status` field); 3-tier partial-failure handling.
- `devdocs/inquiries/2026-05-24_09-00__file_shape_contracts_upstream_artifacts/finding.md` — 5 per-discipline contracts + 2 inquiry-level contracts as 8 new sections in the Q5 protocol file; section-level minimum-shape granularity; validation layer in routeman SKILL.md (parser + per-discipline dispatch + 3-tier emitter); validation-without-enforcement at L0; R1 drift-coordination meta-process.
- `devdocs/inquiries/2026-05-24_10-00__multi_head_aggregation_routeman/finding.md` — 8 new sections in routeman SKILL.md for Q2 multi-head aggregation (P1-P8); dedup-surface 3-tuple; per-Movement-Family rule typology; aggregation_scope hook for Q14 bridge; disagreement-detection INFO meta-signal; L0/L1+/L2+ activation table with explicit triggers.

Each of these priors carries commitments that this inquiry will inherit. CONCLUDE will require the finding to include an `## Inherited Commitments Re-test` section per `cognitive_harness/protocols/conclude.md` Synthesis re-test enforcement. The Sensemaking discipline must do the re-testing during its workspace, not just record the inheritance; Critique must adversarially test whether the structural design coheres with each prior's commitments (especially the self-containment commitment from the project feedback memory + the single-canonical-location commitment from Q5/Q6 R1 drift-coordination).
