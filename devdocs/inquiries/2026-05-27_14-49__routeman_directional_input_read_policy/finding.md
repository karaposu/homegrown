---
status: active
model: claude-opus-4-7[1m]
effort: max
---
# Finding: Routeman's directional-mode input-read policy — `routeman.md` MANDATORY-WHEN-AVAILABLE; `_route.md` SHOULD; graceful-degrade default

## Question

(from `_branch.md`)

When `/routeman` is invoked toward a direction (stage-2 sub-route expansion per the 2026-05-23_18-58 staging-mapping mechanism), what is the input-read policy for prior `routeman.md` and `_route.md` files? Should it be tendency, mandatory, or optional? Should the policy be the same for both files or different?

**Goal:** a process-layer policy memo with per-file verdict + operational definition of policy strengths + concrete spec-edit-ready statement.

## Finding Summary

- **Two separate verdicts, one per file:**
  - **`routeman.md` in directional mode: MANDATORY-WHEN-AVAILABLE.** When the parent inquiry's `routeman.md` exists, routeman MUST read it to acquire the parent-route entry that's the seed for sub-route enumeration. When absent (first-time directional invocation on a route not yet enumerated elsewhere — edge case), FLAG telemetry and either proceed with caller-supplied parent-route info inline or HALT if no parent info is available. When present-but-malformed-AND-needed, HALT with `MalformedRequiredInput`.
  - **`_route.md` in directional mode: SHOULD.** Routeman should read the parent inquiry's `_route.md` when it exists, for orchestration awareness (which prior directional invocations have happened on the same parent) + staleness detection + Baldwin-substrate feed. The read is value-adding but not operationally required for sub-route enumeration to succeed. On any failure (absent / malformed / inaccessible): FLAG and proceed without prior invocation state.

- **The verdicts are different because the files have different urgency profiles in directional mode.** Reading `routeman.md` is the operational mechanic by which the 18-58 stage-2 input contract's `parent-route-id` becomes available. You literally cannot perform sub-route enumeration on a parent route without reading the file that contains the parent route's entry. By contrast, reading `_route.md` adds value (orchestration awareness + Baldwin substrate) but the enumeration itself can complete without it. The policy strengths reflect this structural asymmetry.

- **A four-tier runtime-policy vocabulary is introduced for the spec:**
  - **MANDATORY** — input MUST be read; HALT on any failure.
  - **MANDATORY-WHEN-AVAILABLE** — input MUST be read when file exists; HALT if present-but-malformed-AND-needed; FLAG and proceed when file is absent.
  - **SHOULD** — input is read by default; any read failure FLAGs and proceeds without.
  - **MAY** — input is caller-supplied; routeman does not autonomously seek; FLAG and proceed without if supplied input fails.

  This vocabulary is project-coined for runtime-behavior policies (distinct from the existing finding-section MUST/COULD/DEFERRED gating vocabulary). It is RFC 2119-adjacent — close to MUST/SHOULD/MAY — with one project-coined refinement (MANDATORY-WHEN-AVAILABLE) that captures the structural reality of routeman.md's near-mandatory read in directional mode.

- **The read-failure default is graceful-degrade.** For all tiers above MANDATORY, the default failure mode is FLAG + proceed-without. HALT fires only when the strictly-required input is structurally needed for the current invocation (MANDATORY at any state; MANDATORY-WHEN-AVAILABLE when present-but-malformed-AND-needed). This default preserves discipline operability across (a) fresh inquiries where prior files don't exist yet, (b) schema-version drift where older files may not parse, (c) inaccessible files (e.g., permission errors that aren't routeman's concern to resolve).

- **The 18-58 stage-2 input contract is unchanged.** The contract still names parent-route-id, file-paths-in-scope, and optional refined-sub-purpose as the stage-2 invocation inputs. This finding's read-policy is the explicit naming of the operational mechanic by which parent-route-id becomes available at Reception — the caller indicates which route in which parent inquiry; routeman reads the parent's `routeman.md` to extract the route's full entry. The contract is preserved; the operational mechanic is made explicit.

- **"Keep it up to date" disambiguated.** The user's motivating phrase resolves to BOTH route-content currency (per-Route Status updates across invocations require reading the prior entry; this happens via the MANDATORY-WHEN-AVAILABLE read of `routeman.md`) AND invocation-record currency (History appends across invocations require reading the prior History before writing the next; this happens via the SHOULD read of `_route.md`). Both currencies are enabled by this finding's verdicts.

- **The policy lands in §3.2 Reception of the live spec.** §3.5 Re-invocation as parameterized variation gets a one-line cross-reference. §3.3 (where stage-2 invocation contract lives) gets the 18-58-clarification note. Six concrete spec-edit delta rows are listed in the Next Actions section, all ADD-CONTENT or REPAIR (cross-reference) — no field removals or schema changes; this finding is additive to the prior 2026-05-27 inquiries' commitments.

- **Generic mode is out of scope for this inquiry but flagged for a consistency follow-up.** When generic mode (whole-codebase / fresh-state invocation per 24-00 Q1) is being designed or exercised, the same four-tier vocabulary applies; the verdicts likely differ because file-existence presumptions differ (in generic mode, the prior routeman.md is the same-file-being-written; the read-then-write becomes update-in-place rather than parent-vs-child).

- **The prior 24-00 commitment is honored.** The 24-00 finding implicitly mandated cross-invocation reads via adopting the protocol's resume mechanism but never explicitly graded the policy strength. This finding closes that grading gap by making the implicit explicit at directional-mode scope. No re-litigation of 24-00's broader commitments.

## Finding

### Surrounding context

The user posed a process-layer policy question about routeman's behavior in directional mode (the stage-2 sub-route expansion mechanism committed by `devdocs/inquiries/2026-05-23_18-58__routeman_staged_mapping_and_reasoning_field/finding.md`). Specifically: must / should / may routeman READ existing `routeman.md` files (and `_route.md` files) when invoked toward a direction?

The user's framing acknowledged two distinct sub-questions (one per file) and proposed three policy-strength options (tendency, mandatory, optional). The user's stated motivation — "this makes sense to keep it up to date" — frames the policy as serving cross-invocation continuity.

This finding produces operational definitions of the three policy strengths (plus a fourth project-coined refinement), per-file verdicts based on structural asymmetry, and a concrete spec-edit delta against `cognitive_harness/routeman/references/routeman.md`.

### Why routeman.md read is MANDATORY-WHEN-AVAILABLE

The 18-58 stage-2 input contract names parent-route-id, file-paths-in-scope, and optional refined-sub-purpose as the directional-mode invocation inputs. To acquire the parent-route-id, the invocation must know WHICH route in WHICH parent inquiry is being expanded. Operationally, this means reading the parent inquiry's `routeman.md` to extract the parent route's entry.

The parent-route entry carries the seed for sub-route enumeration: the parent route's Direction (the action being expanded), Goal (the target-state under which sub-routes operate), Movement Type (the 16-taxonomy classifier the sub-routes inherit context from), Movement (the current-state-to-target transition the sub-routes refine), Unlocks (what the parent unblocks, which sub-routes can refine into specific unlock-mechanics), Purpose-cut-by-13-23 (no longer carried), WHY (cycle-evidence justifying), Adaptive Guidance (pointer hints the sub-routes' guidance can build on), and why_this_might_be_important (the LLM's reasoning that contextualizes sub-route enumeration).

Without these content fields, the sub-route enumeration has no parent context to work from. The read is operationally required when the file exists.

**Failure handling per state:**

- **Absent** (first directional invocation on a parent route that hasn't been enumerated elsewhere; rare but possible — e.g., when the directional invocation IS the first observation of the parent route): FLAG `MissingParentRouteFile` in telemetry. If the caller supplies the parent route info inline (Direction + Goal + Movement Type at minimum), proceed with the caller's input. Otherwise HALT with `MissingRequiredInput`. The HALT preserves the contract's load-bearing-ness (parent-route-id must be acquirable somehow).

- **Present-but-malformed AND structurally needed** (the file parses but the parent route entry is missing, corrupt, or refers to a field the current spec version doesn't support): HALT with `MalformedRequiredInput`. The sub-route enumeration cannot infer the parent route entry from elsewhere; silent corruption would yield sub-routes with incoherent parent-context.

- **Present-but-malformed but content NOT structurally needed** (e.g., the file parses fine, has the parent route entry, but other route entries in the file are malformed; the directional invocation only cares about the parent route entry): FLAG + proceed. The malformation is in content not load-bearing for this invocation.

- **Present-and-stale** (the parent route was enumerated some time ago and the parent inquiry has progressed since): proceed with FLAG noting staleness. The directional invocation snapshots the parent at Reception and proceeds; future re-invocations can re-read.

### Why `_route.md` read is SHOULD

The `_route.md` schema per the 2026-05-27_00-51 finding carries three sections: Last Invocation (timestamp + inquiry path + mode), Prior Invocations (chronological list with brief summary per run), History (append-only event log). The file is invocation state, distinct from route content.

In directional mode, reading the parent inquiry's `_route.md` provides three value-additions:

1. **Orchestration awareness** — which prior directional-mode invocations have expanded sub-routes under the same parent route. Without this, the current invocation may produce sub-routes already enumerated; reading prevents redundant work.

2. **Staleness detection** — how recently the parent route was enumerated or recalibrated. If the parent route was added to the parent's `routeman.md` weeks ago and the parent inquiry has progressed substantially since, the parent route's Status may need recalibration before sub-route enumeration uses it as seed.

3. **Baldwin-substrate feed** — per `docs/canon/evolving_quality_assetment_component.md`, the Baldwin cycle reads Predictive-RC predictions at T0 (per-Route Priority + Reasoning + why_this_might_be_important at enumeration time) against Retrospective-RC outcomes at T2+ (per-Route Status updates over time, captured in the History section of `_route.md`). The directional invocation reading `_route.md` participates in this loop by carrying forward retrospective signals from prior invocations.

All three are value-adding. None is operationally required — sub-route enumeration can complete using only the parent route's entry from `routeman.md`.

**Failure handling per state:**

- **Absent** (first directional invocation in the parent inquiry's lifetime; common at L0/L1 where routeman invocations have been few): FLAG informationally. Proceed without prior invocation state. This is an expected case, not an error.

- **Present-but-malformed**: FLAG. Proceed without the malformed file's content. The directional sub-route enumeration completes from `routeman.md` content alone.

- **Present-and-stale**: read normally. Staleness is itself a Baldwin signal (long-stale Status values suggest the parent route's pursuit has paused; the meta-reasoning field's prior value vs the parent's current state offers calibration data).

### The 4-tier runtime-policy vocabulary

The spec gains a four-tier vocabulary for grading input-read commitments at Reception. The vocabulary is RFC 2119-adjacent with one project-coined refinement:

- **MANDATORY** — the input MUST be successfully read. If absent or unreadable, HALT with `MissingRequiredInput`. Equivalent to RFC 2119 MUST.

- **MANDATORY-WHEN-AVAILABLE** *(project-coined)* — the input MUST be read when the file exists. FLAG and proceed when absent (first-time invocation, expected case). HALT when present-but-malformed-AND-needed; FLAG and proceed when present-but-malformed-but-not-needed. This captures the structural reality of routeman.md's directional-mode read: required when available, but the absence case is a valid first-invocation state, not an error.

- **SHOULD** — routeman attempts to read by default. Any read failure FLAGs telemetry and proceeds without. Equivalent to RFC 2119 SHOULD.

- **MAY** — the caller supplies the input as an explicit parameter (or not). Routeman does not autonomously seek the input. Equivalent to RFC 2119 MAY.

The vocabulary is distinct from the project's existing finding-section gating vocabulary (MUST / COULD / DEFERRED, which governs whether a section is required in a finding artifact). Runtime-behavior policy and finding-section gating are different concerns; using different vocabularies prevents conflation.

A future cross-project consistency inquiry may unify spec-runtime-behavior vocabulary across all discipline specs. Flagged as Open Question.

### The graceful-degrade default

Across all tiers above MANDATORY, the default failure mode is FLAG + proceed-without. HALT fires only when strictly-required structural content is missing. The asymmetric-failure rationale (per `references/surfacing.md`-style framing): missing context produces FLAGs that downstream consumers can interpret; HALTing on every absence prevents the discipline from running on fresh inquiries, schema-drifted older files, or transient permission issues. Operability preservation > strict-input-presence enforcement at L0/L1.

### Why this preserves the 18-58 stage-2 input contract

The 18-58 stage-2 input contract is unchanged. The contract names:

- `parent-route-id` (required)
- `file-paths-in-scope` (required)
- `refined-sub-purpose` (optional)

The current finding's read-policy makes explicit how `parent-route-id` becomes available at Reception: routeman reads the parent inquiry's `routeman.md` to extract the parent route's full entry. The caller indicates which route in which parent inquiry; routeman acquires the route's content from the parent's file via the MANDATORY-WHEN-AVAILABLE read.

This is implicit-made-explicit. The contract's inputs are preserved; the operational mechanic for acquiring one of them is documented.

### Multi-head concurrency: out of scope

When multiple worker sessions concurrently invoke directional mode on the same parent route, race conditions become possible (e.g., two workers reading the parent's routeman.md at the same time, then writing their own sub-route expansions back without coordination). This finding does not address multi-head concurrency. The committed verdicts assume single-worker directional invocation.

Multi-head concurrency on directional mode is flagged as an Open Question. When multi-head capability is being operationally exercised (per `docs/canon/towards_cross_run_cognitive_steering_with_isolated_navigation_session.md`), this concern may surface as a refinement trigger.

## Inherited Commitments Re-test

The `_branch.md` declared a Synthesis Trigger consuming 5 prior outputs.

### From `devdocs/inquiries/2026-05-24_00-20__routeman_persistence_and_invocation_modes/finding.md`

| Commitment | Re-test status | Evidence / reason |
|---|---|---|
| The 2 invocation modes (generic + directional) | RE-TESTED — STANDS | Directional mode is the focal scope; generic mode is flagged for follow-up. Both modes preserved. |
| Cross-invocation read via resume mechanism | RE-TESTED — MADE EXPLICIT | This finding takes 24-00's implicit "read prior persistent-memory files" and grades it per-file-type and per-mode. The implicit commitment is preserved; the grading is the new contribution. |
| `_route.md` persistence pattern (originally `_navig.md`; renamed by 27_00-51) | INHERITED-WITHOUT-RE-TEST | The persistence pattern's continuity is preserved; this finding only adjudicates the READ-policy for that file, not the persistence pattern itself. |

### From `devdocs/inquiries/2026-05-23_18-58__routeman_staged_mapping_and_reasoning_field/finding.md`

| Commitment | Re-test status | Evidence / reason |
|---|---|---|
| Hybrid two-stage route mapping (stage-1 generic + stage-2 directional) | RE-TESTED — STANDS | This finding adjudicates a read-policy for stage-2 specifically. Stage-1 read-policy is the generic-mode follow-up scope. |
| Stage-2 input contract (parent-route-id + file-paths-in-scope + optional refined-purpose) | RE-TESTED — STANDS, IMPLICIT-MADE-EXPLICIT | Contract unchanged. This finding documents the operational mechanic for parent-route-id acquisition (via reading parent's routeman.md). |
| Selective-runtime trigger for stage-2 | INHERITED-WITHOUT-RE-TEST | The trigger remains the user's/runner's selective decision; this finding doesn't change trigger semantics. |
| Parent Route reference field on sub-routes | INHERITED-WITHOUT-RE-TEST | Schema commitment, not read-policy commitment. |

### From `devdocs/inquiries/2026-05-27_00-51__routeman_output_simplification/finding.md`

| Commitment | Re-test status | Evidence / reason |
|---|---|---|
| `routeman.md` + `_route.md` two-file structure | INHERITED-WITHOUT-RE-TEST | The file structure is the input to this finding's read-policy adjudication; not re-litigated. |
| `_route.md` 3-section schema (Last Invocation + Prior Invocations + History) | RE-TESTED — STANDS | The schema's content is what `_route.md` SHOULD reads access. Schema commitment preserved. |
| Multi-head Navigator-layer compatibility | INHERITED-WITHOUT-RE-TEST | Out of scope (single-worker assumption); flagged as Open Question. |
| Empirical-evidence-gated revival paths | INHERITED-WITHOUT-RE-TEST | Independent of read-policy. |

### From `devdocs/inquiries/2026-05-27_13-23__routeman_per_route_schema_refinement/finding.md`

| Commitment | Re-test status | Evidence / reason |
|---|---|---|
| Per-Route 10 content fields + 1 contingent meta-reasoning | RE-TESTED — STANDS | The fields are the content that gets READ from prior routeman.md. Schema commitment preserved; this finding's read-policy enables update-in-place across invocations (Status, etc.). |
| Movement + Unlocks RESTORED | INHERITED-WITHOUT-RE-TEST | Schema commitment, not read-policy. |
| Purpose + Continuation Note CUT | INHERITED-WITHOUT-RE-TEST | Schema commitment. |

### From `devdocs/inquiries/2026-05-27_14-03__routeman_simplification_endgoal_compatibility/finding.md`

| Commitment | Re-test status | Evidence / reason |
|---|---|---|
| 6-cell compatibility verdict | INHERITED-WITHOUT-RE-TEST | Higher-level finding; not directly affected by read-policy. |
| 2 follow-up inquiry scopes (nav-session output design; meta-loop runtime design) | INHERITED-WITHOUT-RE-TEST | Read-policy is finer-grained than those follow-ups; doesn't supersede or restart them. |
| Baldwin substrate is in place | RE-TESTED — STRENGTHENED | The SHOULD read of `_route.md` is explicitly justified by Baldwin-substrate feed. Reinforces the compatibility verdict by making the substrate-feeding mechanic explicit. |

## Next Actions

### MUST

- **What:** Apply the following amendment-delta to `cognitive_harness/routeman/references/routeman.md`.

  | Delta | Where | Action |
  |---|---|---|
  | Add Read-Policy Vocabulary sub-section defining MANDATORY / MANDATORY-WHEN-AVAILABLE / SHOULD / MAY operationally | §3 prologue OR §3.2 prologue | ADD-CONTENT |
  | Add Read-Failure Default sub-section specifying graceful-degrade default + HALT edge cases | Adjacent to Read-Policy Vocabulary | ADD-CONTENT |
  | Add "Reading prior `routeman.md` in directional mode" sub-section with MANDATORY-WHEN-AVAILABLE policy + failure handling per state | §3.2 Reception | ADD-CONTENT |
  | Add "Reading prior `_route.md` in directional mode" sub-section with SHOULD policy + failure handling per state | §3.2 Reception | ADD-CONTENT |
  | Add "Note on stage-2 input acquisition" sub-section clarifying that parent-route-id is acquired via reading parent's `routeman.md` (operational mechanic) | §3.3 (or wherever stage-2 invocation contract currently lives) | ADD-CONTENT |
  | Add one-line cross-reference from §3.5 Re-invocation to §3.2 read-policy | §3.5 | REPAIR (one-line pointer) |

  - **Who:** the user (or a follow-up materialization inquiry).
  - **Gate:** condition-bound — when the user decides to materialize.
  - **Why:** without the spec edits, the policy is documented in this finding but not embodied in the runtime spec.

### COULD

- **What:** Open a follow-up inquiry on generic-mode read policy.
  - **Who:** the inquiry chain's continuation runner.
  - **Gate:** condition-bound — when generic-mode operation is being designed for L2+ readiness OR when ambiguity surfaces in an operational generic-mode invocation.
  - **Why:** consistency. The four-tier vocabulary is project-canonical after this inquiry; applying it to generic mode closes the cross-mode story.

- **What:** When operational evidence accumulates from directional-mode invocations, observe whether the HALT edge cases (MissingRequiredInput, MalformedRequiredInput) fire in practice.
  - **Who:** the user / operator.
  - **Gate:** observable.
  - **Why:** validates the policy's failure-mode definitions; surfaces calibration data for adjusting graceful-degrade thresholds if needed.

### DEFERRED

- **What:** Open a follow-up inquiry on multi-head concurrent directional invocation handling.
  - **Gate:** observable — when multi-head workers are concurrently invoking directional mode on the same parent route and race conditions surface.
  - **Why:** this finding assumes single-worker directional invocation; multi-head concurrency is a real but currently-unexercised concern.

- **What:** Open a project-level inquiry on unifying spec-runtime-behavior vocabulary across all discipline specs (so MANDATORY / MANDATORY-WHEN-AVAILABLE / SHOULD / MAY becomes a project-canonical pattern, not a routeman-only one).
  - **Gate:** observable — when another discipline spec (e.g., `/reflect` when revived) is being authored or amended and would benefit from the same vocabulary.
  - **Why:** consistency across the project's discipline specs reduces cognitive load on authors and readers.

## Reasoning

**Why two verdicts, not one.** The two files have different content axes (route enumeration vs invocation state) and different urgency profiles in directional mode. Routeman.md's read is operationally required because directional mode's stage-2 input contract presumes the parent route entry exists and is readable; sub-route enumeration cannot proceed without it. _route.md's read is value-adding (orchestration awareness + staleness detection + Baldwin substrate) but enumeration completes without it. Treating them as one decision would force a single verdict that misses the structural asymmetry.

**Why MANDATORY-WHEN-AVAILABLE instead of MANDATORY for routeman.md.** A pure MANDATORY policy would HALT every time the parent routeman.md is absent. But there are valid first-invocation cases where directional mode fires on a parent route that hasn't been formally enumerated yet (or the parent inquiry hasn't yet produced its own routeman.md). MANDATORY-WHEN-AVAILABLE captures the precise structural reality: required when available, gracefully degraded when absent, HALTed only when malformed-and-needed. The project-coined refinement is justified by structural precision.

**Why SHOULD instead of MANDATORY-WHEN-AVAILABLE for `_route.md`.** _route.md's content is value-adding but not load-bearing for sub-route enumeration. A MANDATORY-WHEN-AVAILABLE policy would HALT on malformed _route.md even when the directional enumeration could complete fine without it. SHOULD captures the right behavior: read by default, FLAG + proceed-without on any failure. The discipline's operability is preserved.

**Why graceful-degrade is the default.** At L0/L1, fresh inquiries are common; schema-version drift is real; permission errors happen. HALT-by-default would prevent operation in too many valid cases. Graceful-degrade preserves operability while flagging degraded runs for operator visibility. HALT is reserved for the structurally-required-AND-malformed case where silent execution would yield incoherent output.

**Why the 4-tier vocabulary instead of just 3.** RFC 2119's 3-tier MUST/SHOULD/MAY captures most cases. The 4th tier (MANDATORY-WHEN-AVAILABLE) captures a project-specific reality: directional mode's parent file is required-when-it-exists but optional-when-it-doesn't (first-invocation case). Forcing this into either MUST (which would HALT on absence) or SHOULD (which would treat the read as merely advisory) would either over-strict or under-grade. The refinement is structural precision.

**Why the policy lands in §3.2 (Reception), not §3.5 (Re-invocation).** §3.5 deals with parameter-variation across invocations (refined-sub-goal, etc.); §3.2 deals with input acquisition at invocation time. The read-policy is about input acquisition. §3.5 gets a one-line cross-reference to §3.2.

**What could be wrong — the strongest prosecution.**

The strongest counter: the 4-tier vocabulary's MANDATORY-WHEN-AVAILABLE is project-coined and adds cognitive overhead for spec readers compared to RFC 2119's familiar 3-tier. An alternative shape would be sticking with MUST/SHOULD/MAY and using natural language to qualify ("MUST when available; otherwise FLAG and proceed").

Defense: the qualifier-in-prose approach buries the structural reality in narrative; the 4-tier vocabulary surfaces it as a first-class concept. The latter is more spec-rigorous. Project-coined precision is justified.

## Open Questions

### Monitoring

- **Multi-head concurrent directional invocation handling.** Out of scope for this inquiry; flagged for surfacing if operationally encountered. Monitor: when multi-head workers are concurrently invoking directional mode on the same parent route, do race conditions surface?

- **Project-wide spec-runtime-behavior vocabulary consistency.** This finding introduces the 4-tier vocabulary for routeman only. When another discipline spec (e.g., `/reflect` when revived) is being authored or amended, observe whether the same vocabulary fits or needs adjustment.

- **HALT edge case operational frequency.** Observe whether the HALT edge cases (MissingRequiredInput for absent-AND-no-caller-info; MalformedRequiredInput for parent-route-entry-corrupt-AND-needed) fire in practice. Frequency informs whether the graceful-degrade thresholds should be adjusted.

### Blocked

- **Generic-mode read policy.** Blocked on generic-mode operation being designed or operationally exercised at scale.

### Research Frontiers

- **Project-wide spec-runtime vocabulary unification.** Whether to lift the 4-tier vocabulary from routeman-only to project-canonical. N=1 currently; promotion candidate at N=2 (when a second discipline spec uses the same pattern).

### Refinement Triggers

- **If multi-head concurrency on directional invocation surfaces race conditions in practice**, this finding's single-worker assumption re-opens. Promote a follow-up inquiry on cross-worker coordination for directional mode.

- **If the MANDATORY-WHEN-AVAILABLE tier proves operationally confusing** (spec readers misinterpreting the absence case), simplify by collapsing back to 3-tier with prose qualification.

- **If generic-mode read policy proves to require a different vocabulary**, this finding's 4-tier vocabulary's universality is contested. Likely refinement: keep the 4-tier vocabulary; just have different per-tier verdicts for generic vs directional modes.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
(Run this skill) 

I am thinking, 

Routeman discipline towards a direction should  have tedency or maybe mandatory to read routeman.md files? This makes sense to keep it up to date? 

And route md files maybe too?

I am not sure.  But we should define this i think


Lets discuss
```

</details>
