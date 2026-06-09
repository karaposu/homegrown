# Exploration: Diagnostics Fix Prioritization

## Mode And Entry Point

Mode: artifact exploration.

Entry point: frontier-first with the user's ranking questions as the purpose signal.

Question being mapped:

```text
Across all diagnostic `finding.md` files under `devdocs/inquiries/diagnostics/`,
which fixes are most urgent, most reliability-improving, easiest with good effect,
and broadest in system impact?
```

## Exploration Cycle 1 - Source Set Scan

### Scan

Scanned the diagnostics folder and found nine existing diagnostic findings:

1. `2026-04-27_tidy_loop_failure_attribution/finding.md`
2. `2026-04-28_09-24__loop_diagnose__discipline_verdict_source/finding.md`
3. `2026-05-06_13-36__loop_diagnose__past_navigation_memory_index_before_search/finding.md`
4. `2026-05-06_13-51__loop_diagnose__route_memory_review_file_necessity/finding.md`
5. `2026-05-06_14-04__loop_diagnose__route_memory_preflight_boundary/finding.md`
6. `2026-05-06_14-23__loop_diagnose__early_stage_route_memory_default/finding.md`
7. `2026-05-06_14-48__loop_diagnose__project_level_proxy_route_memory/finding.md`
8. `2026-05-06_15-04__loop_diagnose__past_navigation_memory_discovery_pressure/finding.md`
9. `2026-05-06_16-49__loop_diagnose__navigation_naming_boundary_drift/finding.md`

All nine `finding.md` files were read fully.

### Signals Detected

Four high-density failure families appear:

1. **Load-bearing interface gaps**
   - Triggers depend on a source, artifact, status, or file existing, but discovery or confidence behavior is not fully defined.

2. **Boundary/type drift**
   - Names or workflow pieces blur status, review, artifact, discovery, operation, or authority.

3. **Critique dimension gaps**
   - Critique sometimes evaluates candidates on plausible dimensions while missing the dimension that would catch the actual failure.

4. **Premature policy stabilization**
   - Mature or optimized rules are promoted as current defaults before phase, calibration, discovery, or evidence conditions are stable.

### Resolution Decision

Zoom in on candidate fixes rather than the historical corrections themselves. The user asked for ranked fixes, not another full diagnosis of each chain.

### Probe

Initial high-signal candidate fixes:

- Discovery Interface Invariant.
- Durable Term Boundary Check.
- Status Classification vs Review Gate.
- Operation Output Contract Gate.
- Registry-vs-Derivation Challenge.
- Phase-Calibration Gate.
- Source-Dependency Trigger Taxonomy.
- Critique Dimension Addendum for real failure axes.
- CONCLUDE secondary interface / durable-term backstops.

### Frontier State

Advancing. Source set is fully identified, but candidate clustering needs a second pass.

### Confidence Map Update

- Confirmed: all diagnostic `finding.md` files in scope were located and read.
- Confirmed: route-memory/Navigation diagnostics dominate the set.
- Scanned: older general loop diagnostics around canonical/provenance and archive-first `LOOP_DIAGNOSE`.
- Unknown: final ranking by urgency and effect until candidates are clustered.

## Exploration Cycle 2 - Candidate Fix Inventory

### Scan

Scanned each finding for `MUST`, maintenance candidates, diagnostic verdicts, and recurring gate names.

### Inventory By Finding

| Finding | Main Failure Signal | Main Fix Signals |
| --- | --- | --- |
| `tidy_loop_failure_attribution` | Canonical/provenance confusion; wrong critique dimensions | Canonical-vs-provenance check; premise/dimension validation; inherited-constraint challenge |
| `discipline_verdict_source` | Proposed embedded Critique marks before archive-first diagnosis | Explicit `LOOP_DIAGNOSE`; archive-use check; user-mechanism expansion; base-loop burden/artifact-reuse critique dimensions |
| `past_navigation_memory_index_before_search` | Maintained registry selected before search was strongest | Registry-vs-derivation challenge; strongest search alternative; fallback-promotion check; explicitness-shape note |
| `route_memory_review_file_necessity` | Operation output treated as optional storage | Operation Output Contract Gate; Bloat Control Layer Gate; Operational Memory Critique Guard |
| `route_memory_preflight_boundary` | Status classification named like routine | Status Classification vs Review Gate; Operation Boundary Naming Gate; Operation-Proliferation Critique Guard |
| `early_stage_route_memory_default` | Mature optimized trigger applied too early | Phase-Calibration Gate; Navigation route-memory phase patch; phase/calibration/breakthrough critique dimensions; temporary-mode guard |
| `project_level_proxy_route_memory` | Scale proxy used near route-memory trigger | Source-Dependency Trigger Taxonomy; Universal Route-Memory Status Record; bounded/project-level matrix; proxy-trigger critique |
| `past_navigation_memory_discovery_pressure` | `PastNavigationMemoryFile exists` made load-bearing without discovery interface | Discovery Interface Invariant; discovery status vocabulary; deterministic active-tree search; discovery/review authority boundary |
| `navigation_naming_boundary_drift` | Durable names hardened before user-implied behavior was checked | Durable Term Boundary Check; name-implied behavior critique; Durable Terms block; legacy quarantine; explicitness form matrix |

### Signals Detected

The most repeated cross-finding shape is:

```text
The system creates a durable rule that depends on a hidden boundary.
```

Examples:

- Does a `PastNavigationMemoryFile` exist?
- Is a thing a status field or review operation?
- Is a file a canonical operation output or optional storage?
- Is a maintained index needed, or can search derive candidates?
- Is this name canonical, provisional, legacy, or misleading?
- Is the project in early-stage robust mode or stable optimized mode?

### Resolution Decision

Cluster candidates by the boundary they protect:

1. Discovery/source boundary.
2. Operation/artifact/status boundary.
3. Naming/user-inference boundary.
4. Phase/calibration boundary.
5. Critique/evaluation boundary.
6. Archive/evidence boundary.

### Probe

The top candidates are not independent; several can be combined:

- Discovery Interface Invariant includes deterministic search, unknown status, and discovery/review authority boundary.
- Durable Term Boundary Check includes naming type, plain gloss, user inference, explicitness form, and legacy status.
- Operational Boundary Package includes status-vs-review, operation-output contract, and bloat-control layer.
- Critique Dimension Addendum includes proxy-trigger, base-loop burden, artifact reuse, fallback-as-primary, phase/calibration, and name-implied behavior.

### Frontier State

Stable at candidate level. Need one jump scan against older non-route-memory diagnostics before convergence.

### Confidence Map Update

- Confirmed: discovery/source interface is the most concrete Navigation reliability gap.
- Confirmed: durable naming/type boundary has repeated evidence across multiple route-memory diagnostics.
- Confirmed: critique dimensions recur as missed-catch surfaces.
- Scanned: phase/calibration is high impact but narrower to Navigation route-memory policy.
- Inferred: broadest impact fix will likely be a critique/conclude boundary package rather than a Navigation-only patch.

## Exploration Cycle 3 - Jump Scan Against Non-Navigation Diagnostics

### Scan

Jump-scanned the older diagnostics that are less tied to Navigation route memory:

- `tidy_loop_failure_attribution`
- `discipline_verdict_source`

### Signals Detected

These older diagnostics do not mention `PastNavigationMemoryFile`, Route Memory Review, or Navigation route status. They still show the same meta-pattern:

- Wrong artifact layer was protected as canonical.
- Existing archived evidence was underused.
- A proposed mechanism was accepted before alternatives were expanded.
- Critique evaluated on plausible but wrong dimensions.
- CONCLUDE amplified a survivor into durable policy.

### Resolution Decision

This confirms that some fixes should not be Navigation-only:

- critique dimension validation;
- archive/evidence reuse for diagnosis;
- canonical/provenance distinction;
- user-proposed mechanism expansion;
- conclude backstops for overstatement or undefined side interfaces.

But the most urgent operational bug remains Navigation route-memory intake, because many recent diagnostics converge there and the system is currently building on those policies.

### Probe

Candidate impact surfaces:

- **Navigation runtime reliability:** Discovery Interface Invariant, Source-Dependency Trigger Taxonomy, Universal Route-Memory Status, phase patch.
- **Loop reasoning reliability:** Durable Term Boundary Check, Critique Dimension Addendum, Operation Boundary Gates, registry-vs-derivation challenge.
- **Diagnostic reuse reliability:** explicit `LOOP_DIAGNOSE`, archive-use check.
- **Conclusion durability reliability:** CONCLUDE side-interface and durable-term blocks.

### Frontier State

Stable. No new high-level fix family appeared in the jump scan.

### Confidence Map Update

- Confirmed: not all important fixes are Navigation-specific.
- Confirmed: route-memory policies are currently the highest-density active problem area.
- Confirmed: critique/conclude safeguards have the broadest cross-domain reach.

## Convergence Check

Frontier stability: yes. All in-scope findings were read, and the candidate families are stable.

Declining discovery rate: yes. Later scans repeated already discovered families rather than adding new ones.

Bounded gaps: yes. The main remaining uncertainty is ranking, which belongs to Sensemaking/Critique rather than more source discovery.

Jump scan: completed against non-Navigation diagnostics; it confirmed the broader loop-level candidate families.

## Territory Overview

The diagnostics territory has three layers:

1. **Navigation route-memory operational layer**
   - Current system behavior around Route Memory Review, `PastNavigationMemoryFile`, route-memory status, discovery search, and early-stage robust mode.

2. **Loop reasoning layer**
   - How MVL+ frames questions, generates alternatives, evaluates candidates, and avoids premature stabilization.

3. **Conclusion/durable-policy layer**
   - How findings harden terms, examples, side claims, and operational interfaces into future instructions.

## Inventory

### Candidate Fix Families

| Family | Includes | Evidence Strength | Scope |
| --- | --- | --- | --- |
| Discovery Interface Invariant | discovery method, status, confidence, fallback, active-tree search, authority boundary | high | Navigation first; trigger policies later |
| Operational Boundary Package | status-vs-review, operation-output contract, bloat layer, operation proliferation | high | Navigation and artifact-policy loops |
| Durable Term Boundary Check | type, plain meaning, user inference, not-this, term status, explicitness form | high | all durable protocol terms |
| Critique Dimension Addendum | proxy trigger, base-loop burden, artifact reuse, fallback-as-primary, phase/calibration, name-implied behavior | high | broad, but must be scoped per problem |
| Phase-Calibration Gate | early-stage vs stable optimized, calibration telemetry, breakthrough preservation | medium-high | Navigation route-memory first |
| Source-Dependency Trigger Taxonomy | dependency over project/bounded scale, bounded matrix, universal status | high | Navigation route-memory |
| Registry-vs-Derivation Challenge | can search derive indexed state; strongest search alternative; fallback promotion | high | registries/indexes/search |
| Archive-Use / LOOP_DIAGNOSE Discipline | use docarchive before adding marks; correction-chain framing | medium-high | loop diagnostics |
| CONCLUDE Backstops | secondary interface guard, overstatement check, Durable Terms block | medium-high | finding durability |
| Canonical-vs-Provenance Check | identify artifact layer before storage/lifecycle decisions | medium-high | storage/org policy |

## Signal Log

| Signal | Where Found | Status | Notes |
| --- | --- | --- | --- |
| Undefined discovery/source interface | discovery pressure, project proxy, index before search | confirmed | Most concrete current operational gap. |
| Status/review/artifact confusion | file necessity, preflight boundary, naming drift | confirmed | Repeated boundary failure. |
| Critique missing real axes | tidy attribution, verdict source, index before search, preflight boundary, early-stage default | confirmed | Broad missed-catch surface. |
| Phase-insensitive optimization | early-stage default | confirmed but narrower | High impact for route-memory current policy. |
| Scale/proxy trigger leakage | project-level proxy | confirmed | Solved by source dependency plus universal status. |
| Maintained-object bias | index before search, discovery pressure, naming drift | confirmed | Solved by registry-vs-derivation and explicitness-form choice. |
| Archive evidence underuse | discipline verdict source | confirmed | Diagnostic-specific but easy. |
| CONCLUDE hardening weak terms/side claims | multiple | scanned/confirmed | Broad but downstream; useful as backstop. |

## Confidence Map

| Region | Confidence | Reason |
| --- | --- | --- |
| Discovery Interface Invariant is a high-priority candidate | high | Multiple findings identify source existence/discovery/unknown/fallback as load-bearing. |
| Durable Term Boundary Check is broadly useful | high | Naming drift finding plus preflight/file/index cases show durable names shape behavior. |
| Critique Dimension Addendum is broadest loop-level fix | high | Many findings identify missing dimensions as the safety-net failure. |
| Navigation route-memory phase patch is urgent | medium-high | Strong recent signal, but narrower than loop-level fixes. |
| Archive-use check is easy and useful | medium-high | Strong in one older diagnostic; less frequent across all findings. |
| Canonical-vs-provenance check is important but domain-specific | medium | High in one storage-policy chain, less repeated in route-memory diagnostics. |
| CONCLUDE backstops alone are sufficient | low | Downstream checks can catch hardening but not replace upstream reasoning. |

## Frontier State

The artifact territory is mapped enough for Sensemaking. The next discipline should turn this into ranking logic:

- urgency = current operational risk and correction density;
- reliability = prevents wrong runs, stale memory, false absence, hidden load-bearing state;
- ease = small rule or field addition with low blast radius;
- broad effect = applies across multiple diagnostic families and future loops.

## Gaps And Recommendations

Sensemaking should avoid treating "most findings mention X" as the only ranking criterion. Some fixes are high-frequency but low urgency; some are lower-frequency but directly block Navigation reliability.

Sensemaking should also separate:

- a concrete Navigation implementation fix;
- a loop-reasoning guardrail;
- a CONCLUDE/documentation backstop.

The preliminary exploration answer is:

```text
The most urgent operational fixes are likely PastNavigationMemoryFile Discovery Interface and the Navigation route-memory status/source-dependency patch. The broadest loop-level fix is likely a scoped Critique Dimension Addendum plus Durable Term Boundary Check. The easiest high-effect fixes are likely archive-use in LOOP_DIAGNOSE and registry-vs-derivation/fallback-promotion checks.
```
