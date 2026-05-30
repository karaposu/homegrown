# Surfacing — routeman_directional_input_read_policy

## User Input

```text
Purpose: surface territory for deciding routeman's input-read policy in directional mode — for routeman.md (sub-question 1) and _route.md (sub-question 2) separately. PROCESS-LAYER focus. Bias toward cross-invocation continuity + WHEN routeman reads its own prior writes. Save to surfacing.md.
```

---

## Reception echo

- **Mode**: artifact case
- **Entry**: signal-first (purpose narrowly: input-read policy in directional mode)
- **Territory**: explicit-bounded
- **Prior workspace**: 5 prior inquiry findings already read in context
- **Prior artifact**: none

---

## Traversal Trace

### Region A — THE central prior (re-invocation behavior commitment)

| # | Region | Item identifier | Relevance | Conf | Recency annotation | Step note |
|---|---|---|---|---|---|---|
| 1 | A | `2026-05-24_00-20__routeman_persistence_and_invocation_modes/finding.md` — Q3 verbatim resolution | **core** | HIGH | (recent) | The user's question for THAT inquiry asked: "On re-invocation in generic mode, should routeman read prior persistent-memory files to recalibrate existing directions and optionally decompose or create new ones?" Verdict was SETTLED — yes, the protocol's resume mechanism handles it. **This is the direct precedent for the current inquiry's question, but the current inquiry asks specifically about DIRECTIONAL mode (not generic) and asks the policy-strength (tendency vs mandatory).** |
| 2 | A | `24-00` finding — Q4 verbatim resolution | **core** | HIGH | (recent) | Q4 was about DIRECTIONAL mode: "On re-invocation in directional mode, should routeman scan a parent-route's child sub-folders for prior persistent-memory and apply the same recalibration steps?" Verdict was SETTLED — same protocol mechanism scoped to parent-route's child-map. **This directly addresses the user's sub-question 1 + 2, but does NOT name policy-strength explicitly. The user's question is about hardening that commitment.** |
| 3 | A | `24-00` Adoption Spec Sketch §2.4 Lifecycle | **core** | HIGH | (recent) | "Persistent across invocations + in-place status evolution + append for new candidates discovered on re-invocation." Implies REQUIRED read of prior state to enable in-place evolution. **Strong evidence for mandatory-ish policy.** |
| 4 | A | `24-00` user's original framing (verbatim) | **core** | HIGH | (recent) | Verbatim from user: *"if we have a second generic run of routeman, it should 0. read all nagiv.md files and use them to 1. recalibrate already existsant generic directions ... 2. maybe decompose or create new directions ... this makes sense."* The user explicitly said "should" — language between tendency and mandatory. **The 24-00 inquiry's resolution treats it as the protocol's resume mechanism (effectively mandatory at the protocol level), but doesn't disambiguate user's "should" between strength-levels.** |

### Region B — Directional-mode definition (what we're scoping)

| # | Region | Item identifier | Relevance | Conf | Recency annotation | Step note |
|---|---|---|---|---|---|---|
| 5 | B | `2026-05-23_18-58__routeman_staged_mapping_and_reasoning_field/finding.md` — Stage 2 definition | **core** | HIGH | (recent) | Stage 2 = "an available follow-up invocation mode. Given (a) a parent-route identifier from the stage-1 Route Map, (b) the file paths in scope (which inquiry folders the parent route was derived from), and optionally (c) a refined sub-purpose narrowing the scope, routeman produces a sub-route set of 10-20 sub-routes scoped to the parent." **Inputs are explicit: parent-route-id + file-paths-in-scope + optional refined-purpose.** Notably this does NOT include "prior routeman.md" as an input. |
| 6 | B | `18-58` Stage 2 trigger = selective-runtime | **sub** | HIGH | (recent) | The user/runner decides per-cycle whether stage 2 is invoked and on which parent route. Routeman does NOT auto-invoke stage 2. **The TRIGGER is selective; the inputs once triggered are the question.** |

### Region C — Committed file structure + content (what would be read)

| # | Region | Item identifier | Relevance | Conf | Recency annotation | Step note |
|---|---|---|---|---|---|---|
| 7 | C | `27_00-51` Finding — `routeman.md` schema | **core** | HIGH | (recent) | routeman.md carries: User Input + Reception echo + Route Map (per-Route entries × N + Excluded + Index) + Frontier + Telemetry + Self-assessment verdict. **The PER-ROUTE entries are the operational content of routeman.md.** |
| 8 | C | `27_00-51` Finding — `_route.md` schema (3 sections) | **core** | HIGH | (recent) | `_route.md` carries: Last Invocation (timestamp + inquiry path + mode) + Prior Invocations (chronological list with brief summary) + History (append-only event log). **The 3 sections are explicitly invocation-state, not route content.** |
| 9 | C | `27_13-23` per-Route schema (post-amendment) | **core** | HIGH | (recent) | 10 content fields + 1 contingent (Direction, Goal, Movement Type, Movement, Unlocks, Priority, Status, Blocked By, WHY, Guidance, why_this_might_be_important). **Per-Route Status is the field that would be UPDATED IN PLACE across invocations — central to "keep it up to date."** |

### Region D — Integration context

| # | Region | Item identifier | Relevance | Conf | Recency annotation | Step note |
|---|---|---|---|---|---|---|
| 10 | D | `27_14-03__simplification_endgoal_compatibility/finding.md` — Baldwin substrate mapping | **sub** | HIGH | (recent) | Per-Route Reasoning + Priority at enumeration time (T0 signals) + Status updates over time + `_route.md` History (T2+ signals) feed Baldwin cycle's delta computation. **Means: cross-invocation continuity is a load-bearing project commitment.** If routeman doesn't READ prior state on re-invocation, the substrate is broken. |
| 11 | D | `27_14-03` 3-way state-flow trace | **sub** | HIGH | (recent) | Worker outputs persist on disk; downstream consumers (nav-session, meta-loop) read them. **The persistence model is "produce + persist + downstream reads"; the question is whether routeman READS ITS OWN prior writes when re-invoked is a SEPARATE concern from downstream reads.** |

### Region E — Live spec

| # | Region | Item identifier | Relevance | Conf | Recency annotation | Step note |
|---|---|---|---|---|---|---|
| 12 | E | `cognitive_harness/routeman/references/routeman.md` §3.2 Reception | **core** | HIGH | (recent) | Reception receives: required = `current state` + `goal`; optional = `prior route map` + `refined-sub-goal`. **Optional. Today, prior route map read is OPTIONAL by spec.** |
| 13 | E | `cognitive_harness/routeman/references/routeman.md` §3.5 Re-invocation as parameterized variation | **core** | HIGH | (recent) | "Re-invocation is the same three-phase operation with optional input parameters. Two parameters extend the initial invocation: `prior route map` — when available across invocations, the prior map is incorporated at Reception. Enumeration may resurrect / invalidate / revert prior routes via the REVISIT sub-actions; routes whose state-condition hasn't changed may be carried forward unchanged." **Existing language: "when available" — not mandatory.** |
| 14 | E | `routeman.md` §3.6 Idempotency within invocation | **sub** | HIGH | (recent) | Idempotency = same input + same goal → same Route Map. **The mechanism guarantees same-input-same-output, but doesn't address whether the input MUST INCLUDE prior state.** |

### Region F — Canon-doc framing

| # | Region | Item identifier | Relevance | Conf | Recency annotation | Step note |
|---|---|---|---|---|---|---|
| 15 | F | `docs/canon/runtime_environment/folder_based.md` — file-system-IS-thinking-structure | **core** | HIGH | (recent) | The file-system IS the thinking. Persistent artifacts are the project's memory. **Reading prior artifacts on re-invocation is consistent with this canon — the artifacts exist to BE READ.** |
| 16 | F | `docs/canon/evolving_quality_assetment_component.md` — Baldwin cycle reads across-time signals | **sub** | HIGH | (recent) | Predictive RC predicts at T0; Retrospective RC confirms at T2+; delta = calibration. **Cross-invocation reads are the substrate of the Baldwin cycle.** If routeman doesn't read its own prior state, the Baldwin substrate for routeman is broken. |
| 17 | F | `docs/canon/towards_cross_run_cognitive_steering_with_isolated_navigation_session.md` — nav-session reads worker artifacts | **sub** | MEDIUM | (recent) | Nav-session reads N worker routeman.md + _route.md. **Routeman ITSELF reading its own prior outputs is a SEPARATE question from nav-session reads.** The user's question is the former. |

### Region G — Adjacent items

| # | Region | Item identifier | Relevance | Conf | Recency annotation | Step note |
|---|---|---|---|---|---|---|
| 18 | G | `cognitive_harness/non-active/multi_resolution_navigation.md` — the protocol routeman dropped | **side** | MEDIUM | (recent) | The protocol's resume mechanism was the basis for 24-00's claim. Routeman dropped the protocol's heavy machinery but kept the resume idea (now in `_route.md`). **Useful for understanding the original mechanism but routeman uses a simpler form.** |

---

## State Summary

### Territory specification echo

- Type: artifact case, explicit-bounded
- Regions covered (7): A re-invocation precedent; B directional-mode definition; C committed file structure + content; D integration context; E live spec; F canon-doc framing; G adjacent
- Items traversed: 18

### Purpose specification echo

Surface territory for adjudicating routeman's input-read policy in directional mode — separately for routeman.md (sub-question 1) and _route.md (sub-question 2). Bias toward cross-invocation continuity + the difference between reading routeman.md content (route enumeration) vs reading _route.md content (invocation state).

### Coverage map

| Region | Items | Coverage | Aggregate relevance |
|---|---|---|---|
| **A** — central prior | 4 | confirmed | core |
| **B** — directional-mode definition | 2 | confirmed | core/sub |
| **C** — committed file structure + content | 3 | confirmed | core |
| **D** — integration context | 2 | confirmed | sub |
| **E** — live spec | 3 | confirmed | core/sub |
| **F** — canon-doc framing | 3 | confirmed | core/sub |
| **G** — adjacent | 1 | scanned | side |

### Confirmed-absent regions

- **No prior inquiry has explicitly adjudicated POLICY STRENGTH** (tendency vs mandatory vs optional) for the re-invocation read. 24-00 implicitly assumes the read happens by referencing the protocol's resume mechanism, but doesn't grade the policy. **This inquiry's job is to add that explicit grading.**
- **No live spec section reads "routeman SHALL/SHOULD/MAY read prior X" with explicit policy language.** §3.2 and §3.5 use "optional" but don't distinguish per-file-type or per-invocation-mode.
- **No precedent for distinguishing routeman.md read policy from _route.md read policy** — the two files have different content axes (route content vs invocation state) but prior inquiries treated them together.

### Concept-names list

| Name | Type | Provenance | Gloss |
|---|---|---|---|
| **directional mode** | structural-reference | #5 | Stage 2 of the staged-mapping mechanism per 18-58. Given a parent-route-id + file-paths-in-scope (+ optional refined-purpose), routeman produces 10-20 sub-routes scoped to the parent. |
| **generic mode** | structural-reference | #1 | Stage 1 (parent Route Map; whole-territory enumeration). Distinguished from directional mode in 24-00's Q1. |
| **tendency / mandatory / optional** | vocabulary | user's input | The 3 policy-strength values the user proposes for the read commitment. (Currently informal; this inquiry will define them.) |
| **prior route map** | structural-reference | #13 | The §3.5 input parameter — when available across invocations. Maps to prior routeman.md content. |
| **`_route.md` 3-section schema** | structural-reference | #8 | Last Invocation + Prior Invocations + History. Invocation-state, not route content. |
| **per-Route Status (updated in place)** | structural-reference | #9 | Status field is the per-route state that gets updated across invocations (open → active → done). **Updating in-place REQUIRES reading the prior state.** |
| **resume mechanism** | vocabulary | #1, #3 | The protocol's lifecycle pattern — persistent + in-place evolution + append. Implies read-prior is the load-bearing first step. |
| **REVISIT sub-actions (RESURRECT / INVALIDATE / REVERT)** | structural-reference | #13 | Per §3.5 — depends on reading prior route map to know what to revisit. |
| **Baldwin substrate** | structural-reference | #16 | Cross-invocation reads enable Predictive→Retrospective delta computation. Routeman's cross-invocation continuity feeds this. |
| **file-system-IS-thinking-structure** | structural-reference | #15 | Canon principle: artifacts exist to be read; persistent state is project memory. |
| **selective-runtime trigger** | vocabulary | #6 | The user/runner decides when stage-2 fires — distinct from the read-policy question of what stage-2 reads ONCE it fires. |

### Recency distribution

All territory items are recent (within last 4 days). No mtime-based filtering needed (and not applied per surfacing's recency-as-signal-not-verdict commitment).

### Workspace-populated status

```yaml
populated: true
populated-at: 2026-05-27T14:50Z
extent: 18 items across 7 regions; all 5 prior findings deep-read earlier in conversation; live spec relevant sections (§3.2, §3.5, §3.6) explicit; canon docs scanned for framing.
```

### Frontier flags

These are open questions surfaced by surfacing for downstream Sensemaking:

- **FF-Su1 — Operationally define tendency / mandatory / optional.** The user proposed these labels informally; Sensemaking must define each operationally (what does it mean for routeman's runtime behavior in each case?).

- **FF-Su2 — Are routeman.md and _route.md actually one read-question or two?** They have different content axes (route content vs invocation state). The 24-00 inquiry treated them together (under "prior persistent-memory files"). User's framing splits them — should they have different policies?

- **FF-Su3 — How does READING prior routeman.md interact with the directional-mode INPUT contract per 18-58?** The 18-58 spec lists inputs as parent-route-id + file-paths-in-scope + optional refined-purpose. Reading prior routeman.md is NOT in that list. Either 18-58's input contract needs extension, OR the read happens at the Reception phase before the per-stage-2-invocation inputs apply. Sensemaking should disambiguate.

- **FF-Su4 — The user's "keep it up to date" framing — keep WHAT up to date?** Two readings: (a) keep the ROUTE STATUS up to date (per-Route Status field reflects current state across invocations); (b) keep the ROUTE MAP up to date (the whole map reflects latest enumeration). These have different read requirements. (a) needs reading prior Status; (b) needs reading prior full Route Map. Sensemaking should disambiguate.

- **FF-Su5 — "Tendency" as a policy-strength is project-novel.** The project's existing policy language is REQUIRED / OPTIONAL / DEFAULT (per spec patterns). "Tendency" suggests something softer-than-required-but-stronger-than-optional. Does the project have grounds for a third tier, or should the verdict land on REQUIRED vs OPTIONAL with a default value?

- **FF-Su6 — The read could fail.** If routeman reads a malformed prior routeman.md or _route.md, what happens? This is a process-layer concern that the policy needs to address (gracefully-degrade vs HALT vs proceed-without). Sensemaking should flag.

- **FF-Su7 — Generic-mode read policy is implicitly committed at 24-00 but not explicitly graded.** Per Scope Check the current inquiry's scope is directional-mode-only, but Sensemaking should flag whether the verdict for directional mode SHOULD also apply to generic mode (consistency principle) or whether they should differ.

- **FF-Su8 — `Parent Route` field (per 18-58) ties directional sub-routes back to their parent.** Reading parent routeman.md is implicit in stage-2 invocation (you need the parent-route info). The question is whether reading FURTHER content (e.g., the parent map's other routes' Status updates that aren't in the parent route entry itself) is required.

---

## Telemetry

- **Mode:** artifact case + signal-first entry
- **Cycles run:** 1
- **Items enumerated:** 18
- **Relevance distribution:** 9 core / 6 sub / 1 side / 0 umbrella (umbrella items deferred since inquiry scope is tight)
- **Items with mtime:** 18/18 (all recent; mtime not used as relevance proxy)
- **Boundary-discovery sub-phase fired:** no
- **Workspace-overload trigger fired:** no
- **Convergence criteria status:** territory exhaustively traversed; no items filtered at uncertain-relevance level
- **Frontier flags emitted:** 8 (FF-Su1 through FF-Su8)
- **Failure modes checked:** none triggered (no Missed-relevance; no Over-coverage; no Recency-Bias-Filter)

---

## Self-assessment verdict: **PROCEED**

All convergence criteria met. 8 frontier flags emitted with specific Sensemaking tasks — particularly FF-Su1 (operational definitions of tendency/mandatory/optional), FF-Su2 (one-question-or-two), FF-Su4 (what "keep up to date" means), and FF-Su5 (whether "tendency" is project-novel).

Key asymmetry: the prior 24-00 inquiry implicitly mandated the cross-invocation read by adopting the protocol's resume mechanism, but never explicitly graded the policy strength. The user's question is asking the project to make that explicit grading. **The grading is the structural gap this inquiry closes.**

Output ready for Sensemaking consumption.
