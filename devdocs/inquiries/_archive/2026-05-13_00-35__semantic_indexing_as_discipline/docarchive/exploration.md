# Exploration: Semantic indexing — discipline, runner, artifact, or unnecessary?

## User Input

`devdocs/inquiries/2026-05-13_00-35__semantic_indexing_as_discipline/_branch.md`

Territory: architectural placement of "semantic indexing" — staged, concept-driven, codebase-wide, persistent. Tests 6 hypotheses (H1 discipline; H2 runner; H3 artifact; H4 existing-suffices; H5 hybrid; H6 test the "solve all confusions" claim).

**Canonical sources to be loaded (per the 22-25 finding's generic Layer 2):**
- `/explore` canonical spec at `homegrown/explore/references/explore.md` — especially §3.6 staged execution; §6.1 runner taxonomy.
- `/MVL+` SKILL at `~/.claude/skills/MVL+/SKILL.md` — pipeline structure.
- `homegrown/protocols/navigation_context_intake.md` — pre-discipline context-intake precedent.
- `devdocs/nav_north_star.md` — pre-existing vision for whole-codebase navigation (referenced in earlier inquiries; relevant for forward-compatibility analysis).

---

## Step 0 — Declarations

| Field | Value |
|---|---|
| `cognitive-commitment-mode` | open |
| `territory-type-mode` | possibility |
| `entry-point` | signal-first (6 hypotheses) |
| `expected` | ~15 items |
| `depth-level` | D2-D3 |

---

## Cycle log

### Cycle 1 — Probe what "semantic indexing" structurally IS

**Signal:** the user proposes "semantic indexing of the codebase, staged, concept-driven."

**Probe:**

Define semantic indexing operationally: an organized CONCEPT → LOCATION mapping over the codebase. E.g.:
- "purposive open-mode surfacing" → `homegrown/explore/references/explore.md` §1.1.
- "/navigate's enumeration operation" → `homegrown/navigation/references/navigation.md` lines 27-29.
- "context-elicitation gap" → `devdocs/inquiries/2026-05-12_20-31__.../finding.md`.

The index is QUERY-OPTIMIZED reverse lookup: given a concept, return where it's discussed.

This is different from /explore's typical output (which is a FORWARD-SURVEY scan over a territory, producing a confidence-tagged map of surfaced items). The semantic index is what you GET AFTER running /staged-explore over the whole project + post-processing to extract concepts and locations.

**Distinction surfaced:** the semantic index is an OUTPUT ARTIFACT (a derived dataset), not a new cognitive operation. Could be produced by existing mechanisms applied at project-wide scope.

**Confidence:** HIGH on operational definition.

### Cycle 2 — Compare to existing project artifacts

**Probe:** what artifacts already exist that resemble (parts of) a semantic index?

- **Canonical discipline specs** at `homegrown/<X>/references/<X>.md` — concept-rich per-discipline.
- **Protocol specs** at `homegrown/protocols/<P>.md`.
- **Runner SKILLs** at `homegrown/<R>/SKILL.md` or `~/.claude/skills/<R>/SKILL.md`.
- **Project end-goal docs** — `enes/desc.md`, `README.md`, `devdocs/nav_north_star.md`.
- **Inquiry findings** — `devdocs/inquiries/*/finding.md` (cumulative).
- **Auto-memory** — `~/.claude/projects/.../memory/MEMORY.md` (user-cumulative).

These collectively form an IMPLICIT semantic index. A reader knows roughly where to find content by file path + content knowledge.

What an EXPLICIT semantic index would add:
- Structured concept → location table (queryable).
- Cross-reference relationships (concept A relates to concept B in file X).
- Multi-resolution (high-level concept → sub-concepts).

**Distinction surfaced:** existing artifacts are implicit + scattered; an explicit index would be structured + central. The benefit is query-time speed; the cost is maintenance overhead.

**Confidence:** HIGH.

### Cycle 3 — Probe H1 (/index as a new discipline)

**Probe:** what would /index-as-discipline look like operationally?

If /index were a discipline:
- It runs within an inquiry's workspace.
- Its Transform: a concept → location mapping over some territory.
- Step 0 declarations: territory; concept-resolution; etc.
- Annotation layers: concept-name, location, confidence, cross-references.

**Wait** — this is largely what /explore in possibility mode over the conceptual territory does. The "concept → location" mapping is /explore-output where the items are CONCEPTS (not raw artifacts).

So /index as a new discipline would OVERLAP with /explore. The justification for /index = /explore is... what? Specialization of /explore over the concept-territory? Per /navigate's precedent (specialization of /explore over the next-move-space), /index would be /explore over the concept-territory.

But: 
- /navigate has 4 additive operations beyond /explore-specialization (per iter-2 of 19-43): Select, Movement-articulation, Guide, Continuation memory.
- What additive operations would /index have beyond /explore-over-concept-territory? Maybe: cross-reference linking. But that's a richer annotation layer, not a new operation.

If /index has no genuinely-additive operations beyond /explore-specialization, /index is /explore at deeper application, not a new discipline.

**Distinction surfaced:** H1 (/index as a discipline) overlaps with /explore over the concept-territory. No structurally-distinct additive operations. Adding /index as a discipline would create the same Operation-Status Drift error pattern named in the 22-05 finding.

**Confidence:** HIGH — H1 is REJECTED on structural grounds. Adding /index would be /explore-on-concept-territory wrongly elevated to a new operation.

### Cycle 4 — Probe H2 (/staged-index as a new runner)

**Probe:** could /staged-index be a runner (analogous to /staged-explore) that produces the semantic index?

/staged-explore: orchestrates multiple /explore invocations at progressively finer resolutions over a territory.
/staged-index would: orchestrate multiple /explore invocations to produce a CONCEPT → LOCATION mapping over the project.

This is more structurally clean than H1: a runner pattern over /explore (no new discipline; no Operation-Status Drift).

The runner's value: it orchestrates the staged process. Output: a persistent index artifact.

**Cost:** new runner doc; maintenance of the index it produces.

**Distinction surfaced:** H2 (/staged-index as a runner) is structurally cleaner than H1. It's an application of /explore in a project-wide pattern, with persistent output.

**Confidence:** HIGH — H2 is a viable architectural option.

### Cycle 5 — Probe H3 (project-wide artifact maintained by ad hoc loop runs)

**Probe:** could the semantic index be a project artifact maintained by occasional loop runs (no dedicated runner)?

If the index is a file like `homegrown/semantic_index.md` (or a directory), updates happen when:
- User runs a special /MVL+ inquiry to refresh it.
- Or: a maintenance protocol triggers refresh at intervals.

Without a dedicated runner, the maintenance is manual. This is similar to the project's current state — canonical specs are updated manually when disciplines evolve.

**Cost:** no new mechanism added; relies on inquiry-author discipline to refresh.

**Benefit:** index exists when needed; staleness is acknowledged.

**Distinction surfaced:** H3 (project-wide artifact, manual maintenance) is the lightest-weight option. Could be a starting point for the index, with H2 (dedicated runner) added later if maintenance becomes a bottleneck.

**Confidence:** HIGH — H3 is viable as a starting point.

### Cycle 6 — Probe H4 (existing mechanisms suffice)

**Probe:** do the 22-25 finding's 3-layer fix + /staged-explore (existing runner pattern) + canonical specs cover the needs?

For the OBSERVED USE CASE (canonical-anchor-loading for analyzed entities):
- Layer 2 (Workspace Invariant canonical-source-loading) handles this directly.
- Doesn't require a persistent semantic index.

For PROJECT-WIDE NAVIGATION (the user's labyrinth analogy from earlier inquiries):
- /staged-explore can produce on-demand maps.
- /navigate can use them.
- A persistent index would speed lookups but isn't strictly required.

For AUTONOMOUS SELECTION at L3+ (future state):
- Autonomous loops will need systematic context.
- A persistent index would help an autonomous selector.
- Without an index, the autonomous selector would need to /staged-explore each time — slower but viable.

So existing mechanisms COVER the use cases but with PERFORMANCE COST (always re-deriving context vs reading a persistent index).

**Distinction surfaced:** H4 (existing suffices) holds for L0–L1 (current). At L3+, persistent index becomes valuable for speed.

**Confidence:** HIGH — H4 covers current state; H2 or H3 valuable at L3+.

### Cycle 7 — Probe H5 (hybrid: artifact now, dedicated runner later)

**Probe:** could we start with H3 (lightweight artifact) and add H2 (runner) when needed?

Yes — this is the natural progression. Start with a project-wide artifact maintained by ad-hoc loop runs. If maintenance becomes a bottleneck or autonomy needs increase, promote to a dedicated runner.

**Distinction surfaced:** H5 (hybrid path: H3 → H2) is forward-compatible.

**Confidence:** HIGH — H5 is the cleanest evolutionary path.

### Cycle 8 — Probe H6 (test "solve all our confusions" claim)

**Probe:** what failures has the project observed that semantic indexing would NOT solve?

- **Annotation-as-operation conflation** (Family A from 22-05): a reasoning error about the structural status of route-card fields. Semantic index doesn't catch reasoning errors.
- **Inherited-claim-as-canonical** (Family B from 22-05): treating a prior finding's claim as canonical. Index could help by surfacing the contradicting canonical, BUT the loop must apply structural reasoning to detect contradiction.
- **Specific-vs-pattern recognition cue failure** (iter-1 of 22-25): the loop committed a discipline-specific fix when the pattern was generic. Reasoning error; index doesn't help.
- **Open→closed drift in /explore** (failure mode #7 in /explore): claims drift from labeling to interpretive. Reasoning error.
- **Clean resolution trap** (/sense-making failure mode #5): elegant explanation feels right; counter not tested. Reasoning error.

Semantic indexing helps LOOKUP problems. It doesn't help REASONING problems. The user's "solve all our confusions" is overreach.

**Distinction surfaced:** semantic indexing is a LOOKUP MECHANISM, not a REASONING MECHANISM. It would help SOME failure cases (canonical-anchor-loading; project-wide navigation) but not ALL (reasoning errors).

**Confidence:** HIGH — H6 confirms the claim is overreach. Useful framing: index is forward-load-bearing but not a panacea.

### Cycle 9 — Probe relationship to nav_north_star.md

**Probe:** the project has `devdocs/nav_north_star.md` describing a vision for whole-codebase navigation. How does the semantic index relate?

`nav_north_star.md` describes: whole-codebase navigation as staged for-loop iterations (run /navigate to surface big concepts; then run /navigate per concept to surface sub-concepts). Manual trigger at v1; automation later.

This IS already a semantic-index-like pattern. The user is rediscovering this pre-existing vision.

The semantic index would be the OUTPUT of repeated whole-codebase /navigate runs per `nav_north_star`. It's forward-compatible with that vision.

**Distinction surfaced:** the user's proposal aligns with `nav_north_star.md`. Semantic indexing is the artifact form of whole-codebase navigation.

**Confidence:** HIGH — alignment with existing vision strengthens the H5 hybrid path.

### Cycle 10 — Probe staleness + maintenance trade-off

**Probe:** if the index is persistent, how is staleness managed?

Project changes that affect the index:
- Discipline spec edits.
- New disciplines / protocols / runners.
- New inquiry findings.
- Canonical structural commitments evolving.

Staleness mitigations:
- **Manual refresh:** user runs a /MVL+ inquiry tagged "refresh index" when needed.
- **Trigger-based refresh:** when N inquiries conclude, refresh.
- **Incremental update:** new findings add entries; deleted/superseded items get marked stale.
- **Accept staleness:** index is best-effort; users verify against canonical at use-time.

For a project at the current activity level (multiple inquiries/day), full refresh after every change is impractical. Incremental update + accept-staleness is more realistic.

**Distinction surfaced:** maintenance is non-trivial. Lightweight artifact (H3) with accept-staleness is the realistic v1.

**Confidence:** HIGH — staleness management is a real concern but tractable with accept-staleness.

### Cycle 11 — Convergence

**Three criteria:**
- Frontier stability: cycles 7-10 surfaced no new structural axes.
- Declining discovery: declining.
- Bounded gaps: implementation-level only.

**Jump-scan:** is there a hypothesis not yet considered?

- Could the index be a DERIVED ARTIFACT (auto-generated from canonical specs + findings)? Possible — adds tooling complexity but reduces manual maintenance. Future research-frontier; not actionable now.

No new structural surprises.

---

## Inventory

### Axis 1 — Hypothesis verdicts

| Hypothesis | Verdict | Reasoning |
|---|---|---|
| H1 (/index as new discipline) | **REJECTED** | /index would be /explore-on-concept-territory; no structurally-distinct additive operations. Adding it would commit Operation-Status Drift (Family A failure from 22-05). |
| H2 (/staged-index as new runner) | **VIABLE for FUTURE** | Structurally clean; analogous to /staged-explore. Adds runner; produces persistent index. Activation when maintenance bottleneck appears. |
| H3 (project artifact, manual maintenance) | **VIABLE for FUTURE STARTING POINT** | Lightest weight; relies on ad-hoc loop runs. v1-friendly. |
| H4 (existing mechanisms suffice) | **CONFIRMED for CURRENT STATE** | For L0–L1, the 22-25 finding's 3-layer fix + /staged-explore on-demand covers the use cases. |
| H5 (hybrid: H3 → H2 evolutionary path) | **CONFIRMED as long-term recommendation** | Start lightweight; evolve as needs grow. |
| H6 (test "solve all confusions" claim) | **OVERREACH — semantic index helps lookup, not reasoning** | The catalog of project failures includes many reasoning errors that an index cannot prevent. The claim is structurally false for the broad version; partial for the lookup-cases version. |

### Axis 2 — What failures semantic indexing WOULD help vs WOULD NOT

| Failure type | Index helps? |
|---|---|
| Canonical-anchor-loading (iter-1 of 19-43 style) | YES — index returns canonical location on lookup |
| Project-wide-navigation (user's labyrinth analogy) | YES — index is the artifact form of navigation maps |
| Autonomous selection at L3+ | YES — selector reads index for context |
| Annotation-as-operation conflation (Family A) | NO — reasoning error, not lookup |
| Inherited-claim-as-canonical (Family B) | PARTIAL — index surfaces canonical; reasoning catches contradiction |
| Specific-vs-pattern recognition cue failure (iter-1 of 22-25) | NO — reasoning error |
| Open→closed drift in /explore | NO — reasoning error |
| Clean resolution trap | NO — reasoning error |

Index addresses lookup-class problems. Doesn't address reasoning-class problems.

### Axis 3 — Recommended structural placement

| Phase | Recommendation |
|---|---|
| **Now (L0–L1)** | H4 — existing mechanisms suffice. 22-25's 3-layer fix handles canonical-anchor-loading. No new mechanism needed. |
| **Mid-term (autonomy ramp; observed pattern of N+ inquiries needing whole-codebase lookups)** | H3 — lightweight project artifact, manual maintenance via dedicated /MVL+ inquiries. |
| **Long-term (L3+ autonomy; index maintenance becomes systematic)** | H2 — dedicated /staged-index runner that auto-refreshes. |

This is an evolutionary path (H5 hybrid), with activation triggers at each phase.

### Axis 4 — Relationship to nav_north_star.md

The user's proposal aligns with the existing `devdocs/nav_north_star.md` vision (whole-codebase navigation, staged, manual v1, automated later). Semantic indexing is the artifact form of /navigate applied project-wide.

This alignment strengthens the H5 path: existing vision + this finding's recommendation converge.

### Axis 5 — Failure-mode considerations

If /index were adopted as a discipline (H1), it would commit Operation-Status Drift (Family A failure mode from 22-05 finding's recommendation). The /sense-making Phase 3 specific-vs-pattern recognition cue says: is this proposed operation actually /explore over a different territory? YES — /index = /explore over the concept-territory. So /index as discipline is rejected by the existing rule.

---

## Signal log

| Signal | Source | Priority | Probed |
|---|---|---|---|
| Semantic index is a LOOKUP MECHANISM, not a REASONING MECHANISM | cycle 8 | CRITICAL | yes |
| H1 (/index as discipline) commits Operation-Status Drift | cycle 3 | HIGH | yes |
| H5 hybrid evolutionary path | cycles 4-7 | HIGH | yes |
| Alignment with nav_north_star.md | cycle 9 | HIGH | yes |
| Staleness manageable with accept-staleness + manual refresh | cycle 10 | MEDIUM | yes |
| User's "solve all confusions" claim is overreach | cycle 8 | HIGH | yes |

---

## Confidence map

| Region | Confidence |
|---|---|
| H1 rejected (Operation-Status Drift) | HIGH |
| H4 confirmed for L0-L1 | HIGH |
| H5 evolutionary path (H3 → H2) | HIGH |
| Semantic index helps lookup, not reasoning | HIGH |
| "Solve all confusions" claim is overreach | HIGH |
| Activation triggers per phase | MEDIUM-HIGH |
| Long-term value at L3+ | MEDIUM |

---

## Frontier state

Closed within scope.

---

## Gaps and Recommendations

### Gaps for downstream

**FQ1 (sensemaking):** commit to the evolutionary path framing (H5: H4 now → H3 mid → H2 long).

**FQ2 (decomposition):** partition the finding's adoption package (which is small: research-frontier flag + activation triggers).

**FQ3 (innovation):** what concrete activation triggers signal phase transitions (H4 → H3 → H2)?

**FQ4 (critique):** adversarially test the verdict that semantic index doesn't solve reasoning errors.

### Recommendations for downstream

- **Sensemaking:** stabilize the evolutionary path; commit to "current state needs no new mechanism" while preserving the long-term vision.
- **Decomposition:** small partition; the finding is primarily a research-frontier flag with activation triggers.
- **Innovation:** generate trigger candidates.
- **Critique:** test the lookup-vs-reasoning distinction.

---

## Telemetry

- Mode: possibility; entry-point: signal-first; cycles: 11.
- Convergence: 3/3.
- Jump-scan performed.
- No failure modes fired.

**Canonical-source-loading verification (per 22-25 finding's generic Layer 2):**
- /explore canonical §3.6 + §6.1 referenced. ✓
- /MVL+ SKILL referenced. ✓
- navigation_context_intake referenced. ✓
- nav_north_star noted (existing vision; aligns). ✓

**PROCEED to Sensemaking.**
