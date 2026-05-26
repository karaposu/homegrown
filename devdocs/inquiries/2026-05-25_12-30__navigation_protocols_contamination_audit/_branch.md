# Branch: Navigation-protocols contamination audit on routeman design

## Question

- **Subject** — the routeman discipline's design (meaning + structural + process commitments) audited against potential context-contamination from two project protocols that were designed for the deprecated `/navigation` discipline: `cognitive_harness/protocols/multi_resolution_navigation.md` and `cognitive_harness/protocols/navigation_context_intake.md`.
- **Action** — diagnose (audit; investigate whether prior design was contaminated; if yes, identify what specifically was contaminated and what the corrective is).
- **Level** — discipline-level audit with meta-process implications (the audit may reveal a project-wide pattern about how legacy protocols contaminate new discipline designs).
- **Observation targets** — preserve each clause as a separate aspect (per LOOP_DIAGNOSE MC2):
  1. **multi_resolution_navigation.md contamination analysis** — what does this protocol commit that may not fit routeman's corrected identity? Specifically: the budget-framing (`coverage_mode: budgeted / exhaustive / sampled` + `batch_size` + `expansion_policy` + `scheduling_policy` + status values like `deferred_by_budget` + `out_of_policy` + `scheduled`) vs routeman's enumerate-all identity; the 13-base-field schema (how many fields are budget-framed vs structurally-grounded for routeman); the tree-expansion-with-pruning assumptions vs routeman's enumerate-all-without-pruning identity.
  2. **navigation_context_intake.md contamination analysis** — this protocol is structured around warmup-routing (5 routing decisions → 5 warmup files in `cognitive_harness/navigation/warmup/`). The warmup folder is deprecated per the corrected isolated-session + file-scanning architecture from 16-31. What did this protocol's structure contribute to routeman design (if anything)? Does any routeman commitment inherit from this protocol's framings (context-classification; freshness-anchor; cold-vs-warm session split)?
  3. **24-00 adoption re-test** — the 24-00 finding ADOPTED multi_resolution_navigation as routeman's persistence protocol. Did the adoption explicitly re-test the protocol's budget framing + tree-expansion assumptions + "Navigation" vocabulary against routeman's corrected (16-31) enumerate-all + isolated-session + file-scanning + multi-head-compatible identity? Or was the adoption surgical-naming-rename without semantic re-test?
  4. **Capital-N "Navigation" vocabulary** — both protocols use "Navigation" (capital N) as the active discipline name. The 24-00 adoption committed aliasing at the filename level (`_frontier.md` → `_navig.md`; `navigation.md` → `routeman.md`) but not at the vocabulary level. If routeman runtime loads these protocols as cross-references, the loading imports "Navigation" vocabulary into routeman's context. Is this a real contamination or acceptable cross-discipline naming?
  5. **Routeman's just-shipped artifact audit** — given the just-shipped `cognitive_harness/routeman/SKILL.md` + `cognitive_harness/routeman/references/routeman.md` are written as pure thinking discipline (zero references to project-coupled protocols), does the routeman pure thinking discipline ITSELF carry any implicit contamination from these protocols (e.g., budget-framing in the reachability values; tree-expansion semantics in the cross-cycle revisitation pattern)? Cold-read audit of the routeman files for budget-framing or warmup-routing-pattern residue.
  6. **The integration-layer document (route 8 from the readiness Route Map) audit** — when the integration-layer document is authored, it will materialize the project-integration concerns from the 11-00 structural-layer inquiry. The 11-00 inquiry's Persistence Model section adopted multi_resolution_navigation; the design committed RESTATE-WITH-CROSS-REFERENCE for hybrid content. Does the planned integration-layer document inherit budget-framing from this protocol, or does it filter the protocol's commitments through routeman's enumerate-all identity?
  7. **Corrective scope** — if contamination is found, what corrective action is needed? Three possible scopes: (a) corrective at the protocol level (rewrite multi_resolution_navigation.md + navigation_context_intake.md to align with corrected architecture); (b) corrective at the adoption level (re-do 24-00's adoption-spec sketch with explicit re-test); (c) corrective at the routeman-design level (revise routeman commitments that inherit the contamination). May be multiple scopes needed.
- **Deliverable shape** — diagnostic finding identifying specific contamination vectors (per protocol + per design layer) + corrective action recommendations (scoped at protocol level / adoption level / routeman-design level / multiple) + a re-test of the 24-00 adoption against routeman's corrected identity to determine which commitments survive vs need revision.

The audit operates on the question: did `cognitive_harness/protocols/multi_resolution_navigation.md` (which routeman ADOPTED via 24-00) and `cognitive_harness/protocols/navigation_context_intake.md` (whose warmup-routing assumptions are architecturally obsolete under 16-31) contaminate routeman's design process — and if so, what specifically was contaminated and what corrective is needed?

## Goal

- **Criterion** — diagnostic precision + corrective actionability. The audit must identify SPECIFIC contamination vectors (not vague concerns) and SPECIFIC corrective actions (not generic suggestions). For each identified contamination, the audit must trace its origin (protocol commitment → adoption commitment → design commitment) and recommend a corrective at the appropriate scope.
- **Use case** — the operator (user) decides whether to (a) accept the contamination as acceptable trade-off (and document the trade-off); (b) rewrite the contaminated protocols to align with corrected architecture; (c) revise the routeman design commitments that inherit contamination; (d) revise the 24-00 adoption-spec sketch. The audit's output gives the operator the evidence to choose.
- **Desired outcome** — clarity on whether the routeman ecosystem (routeman + adopted protocols + planned integration-layer document) carries hidden /navigation baggage that the corrected architecture (16-31) was supposed to remove; if yes, an actionable corrective plan; if no (contamination minimal or acceptable), explicit documentation of why the trade-off is acceptable.
- **What would fail** — (a) a vague "the protocols may have inherited stuff" without naming specific contaminations; (b) a corrective recommendation that requires re-doing all of 24-00 + 14-39 + structural-layer work (over-broad scope); (c) ignoring the just-shipped routeman.md + SKILL.md and assessing only the protocols (under-scope — the contamination question is about the routeman design, not just the protocols); (d) treating the audit as confirming pre-conclusion ("contamination is bad; fix it") rather than diagnostic ("did contamination happen + at what scope + with what acceptable-trade-off vs corrective-needed verdict per item").

## Source Input

```text
/MVLw
i am thinking maybe cognitive_harness/protocols/multi_resolution_navigation.md and cognitive_harness/protocols/navigation_context_intake.md context poisoned the routeman discipline generation process
bc these files might have good value but they were designed many days ago for deprecated navigaiton...

what do you string?
```

(User's "what do you think?" phrased in conversational form; the /MVLw command at the top is the invocation. The user identified two specific files as potential contamination sources and explicitly noted these files predate the routeman rename / the corrected architecture. The audit's scope is bounded to those two files + the routeman design artifacts that inherited from them.)

## Scope Check

Question covers goal. The 7 sub-aspects (multi_resolution contamination + navigation_context_intake contamination + 24-00 adoption re-test + Navigation vocabulary + routeman.md cold-read audit + integration-layer document audit + corrective scope decisions) map to the 4 goal criteria (diagnostic precision via per-protocol per-layer analysis; corrective actionability via scope-specific recommendations; trade-off clarity via accept-or-revise decisions; explicit documentation if contamination is acceptable). The corrective-scope sub-aspect (7) was added because diagnostic-without-corrective is incomplete deliverable per Goal criterion 1.

Specific-vs-pattern check: the question targets the SPECIFIC two protocols + the SPECIFIC routeman design, not a general "are old project protocols contaminating new disciplines" pattern. The pattern question is a Research Frontier (per the Open Questions section that the audit will produce); the specific instance is this audit's primary deliverable.

## Layer Commitment

**Primary layer: MEANING.**

The audit asks whether routeman's MEANING-LAYER commitments (identity, features, attributes, residuals, taxonomy) were contaminated by source protocols whose own meaning is /navigation-coupled. If the meaning is contaminated, structural and process layers inherit the contamination as symptoms. If meaning is clean, structural/process can be audited as derivative.

The audit may surface contamination at the structural layer (e.g., `_navig.md` schema fields that don't fit routeman's enumerate-all identity) or process layer (e.g., budget-framed traversal patterns that don't fit routeman's observe-only + enumerate-all identity). But those would be SYMPTOMS of meaning-layer contamination — specifically, contamination of routeman's identity statement, the residuals, or the cycle-consumer process layer.

**Other-layer alternatives considered + explicitly out of scope for THIS run:**

- **Structural** — the audit may surface structural contamination (schema fields; section organization; file naming) but those are evaluated as SYMPTOMS of meaning contamination, not as primary axis. A pure structural-layer audit ("are routeman's spec sections contaminated by Navigation's spec sections") is a different inquiry; this audit's structural findings are diagnostic of meaning-layer contamination.
- **Process** — the audit may surface process-layer contamination (the budget-traversal pattern; warmup-routing pattern) but those are evaluated as SYMPTOMS of meaning-layer contamination. A pure process-layer audit ("are routeman's runtime steps contaminated by Navigation's runtime steps") is a different inquiry.

**Sequential multi-layer plan:** if the audit confirms meaning-layer contamination, follow-up structural-layer + process-layer audits are appropriate per-scope. The dependency order is meaning-first because process + structural inherit from meaning (per the standard project layer-ordering).

## Synthesis Trigger

This inquiry consolidates commitments from 9 priors:

- `cognitive_harness/protocols/multi_resolution_navigation.md` — the protocol routeman adopted via 24-00; 566 lines of budget-framed tree-expansion design with "Navigation" vocabulary throughout.
- `cognitive_harness/protocols/navigation_context_intake.md` — the warmup-routing controller (259 lines) for the deprecated /navigation's warmup flow.
- `cognitive_harness/routeman/SKILL.md` — the just-shipped routeman runtime spec (40 lines, pure thinking discipline orchestrator).
- `cognitive_harness/routeman/references/routeman.md` — the just-shipped routeman reference (464 lines, pure thinking discipline; written as STANDALONE design content with zero project-coupling per the user's recent correction).
- `devdocs/inquiries/2026-05-23_14-39__routeman_discipline_design/finding.md` — the meaning-layer design memo; the 3-layer identity + 10 features + 16-attribute schema + 11-mode failure framework + 26 lineage decisions.
- `devdocs/inquiries/2026-05-23_15-20__routeman_implementation_frontier_questions/finding.md` — the frontier-questions finding with Q1-Q6 + Q10 resolutions.
- `devdocs/inquiries/2026-05-23_16-31__routeman_isolated_session_correction/finding.md` — the architecture correction (isolated-session + file-scanning; multi-head at WORKER level).
- `devdocs/inquiries/2026-05-24_00-20__routeman_persistence_and_invocation_modes/finding.md` — the 24-00 finding that ADOPTED multi_resolution_navigation; brought 13-base-field schema + hybrid placement + two-tier boundary.
- `devdocs/inquiries/2026-05-24_11-00__routeman_structural_layer/finding.md` — the structural-layer inquiry that the user corrected (routeman.md must be pure thinking discipline; project-integration concerns deferred to integration-layer document, route 8 of the readiness Route Map).

Each of these priors carries commitments that this inquiry will audit. CONCLUDE will require the finding to include an `## Inherited Commitments Re-test` section per CONCLUDE's Synthesis re-test enforcement. The Sensemaking discipline must do the re-testing during its workspace; Critique must adversarially test whether the audit's contamination claims survive scrutiny vs over-state the contamination.
