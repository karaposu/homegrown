# Innovation: PastNavigationMemoryFile Index Feasibility

## User Input

Should Homegrown keep a record of all Navigation-related file creations so there is a `PastNavigationMemoryFile` index? Is this easier, and is it feasible?

## Seed

Seed type: gap + dissatisfaction.

The gap: Navigation needs to know whether any `PastNavigationMemoryFile` exists, but those files can live in multiple places and have multiple names.

The dissatisfaction: asking each runner to rediscover all old Navigation memory from scratch is clumsy, vague, and easy to under-do.

Valuation: the user values explicit durable artifacts, especially in early-stage Homegrown where robustness matters more than efficiency.

## Mechanism Outputs

### 1. Lens Shifting

Generic variation:

- View the index as a documentation artifact. It explains where Navigation memory lives.

Focused variation:

- View the index as a Navigation context-intake artifact. It exists specifically so intake can classify `past_navigation_memory_file: present | absent | unknown` without ad hoc scanning first.

Contrarian variation:

- View the index as a liability. If it creates false confidence, a stale index is worse than no index because Navigation may skip review when a file exists but is missing from the registry.

Surviving output:

The index should be framed as a cache/discovery registry with explicit confidence limits, not as a complete source of truth.

### 2. Combination

Generic variation:

- Combine a file index with Route Memory Review.

Focused variation:

- Combine Homegrown's branch index pattern with outcome-review's global index pattern:

```text
underlying record remains valid
index helps discovery
index update failure is reported
future refresh can repair the index
```

Contrarian variation:

- Combine the index with review decisions directly, making one table that says each route-memory file is current, stale, superseded, or ignored.

Surviving output:

The branch/outcome-review combination is strong. The route-decision table is rejected because it collapses the index into Route Memory Review.

### 3. Inversion

Generic variation:

- Instead of "find old Navigation memory before review," make every Navigation memory artifact declare itself.

Focused variation:

- Add required local metadata to route-memory files:

```yaml
record_type: past_navigation_memory_file
memory_kind: navigation_map | route_memory_review | frontier_ledger | sync_brief
route_memory_scope: project | inquiry | child_map | refresh | warmup
```

Then the index can be refreshed by scanning for `record_type`.

Contrarian variation:

- Do not create a global index at all. Only require local metadata and use scans every time.

Surviving output:

Local metadata is useful as a validation/backfill mechanism. It should not replace the global index during early-stage robust mode because repeated scans still recreate the original friction.

### 4. Constraint Manipulation

Generic variation:

- Add constraint: the index must be manually maintainable in Markdown.

Focused variation:

- Add constraint: the index must not contain current route dispositions.

Contrarian variation:

- Add constraint: every Navigation-related file creation must be indexed, even if it has no past route memory.

Surviving output:

The useful constraint is:

```text
register only durable artifacts that may contain past Navigation memory
```

The broad "every Navigation-related file" constraint is rejected because it creates noise and maintenance burden.

### 5. Absence Recognition

Generic variation:

- Missing artifact: a `PastNavigationMemoryFile Index`.

Focused variation:

- Missing contract: "when a durable route-memory artifact is created, register it."

Contrarian variation:

- Missing artifact: a negative record saying "no PastNavigationMemoryFile exists" for each Navigation run.

Surviving output:

The missing contract is more important than the file alone. A Markdown index without writer obligations will drift. Negative records belong in Navigation telemetry, not in the index.

### 6. Domain Transfer

Generic variation:

- Transfer from package registries: artifacts register metadata so consumers can discover them.

Focused variation:

- Transfer from migration ledgers / audit logs: creation events are recorded append-only, while current interpretation lives elsewhere.

Contrarian variation:

- Transfer from search indexes: generate everything from a scanner and never manually append.

Surviving output:

Use registry plus refresh. The index is human-readable and appendable, while a future scanner can rebuild or verify it. Pure generated search index is clean technically but premature without a runner.

### 7. Extrapolation

Generic variation:

- As Navigation artifacts grow, raw filesystem discovery gets more expensive.

Focused variation:

- After several Route Memory Reviews and multi-resolution runs exist, missing one old route-memory file could resurrect stale routes or lose blocked directions.

Contrarian variation:

- If artifacts stay sparse, the index may be overhead forever.

Surviving output:

Create a minimal index now while backfill is cheap, but defer tooling and complex status fields until the artifact population proves the need.

## Candidate Designs

### Candidate A - No Index, Scan Each Time

Shape:

```text
Navigation intake scans known active paths each time it needs route-memory status.
```

Strength:

- No stale manual index.
- No new file.

Weakness:

- Recreates the discovery friction.
- Requires each runner to remember all active patterns.
- Gets worse as artifact families grow.

Test:

- Novelty: low.
- Scrutiny survival: partial.
- Fertility: low.
- Actionability: high.
- Mechanism independence: weak.

Verdict: kill as default; preserve as validation fallback.

### Candidate B - Global PastNavigationMemoryFile Index

Shape:

```text
devdocs/navigation_context/past_navigation_memory_file_index.md
```

Minimum structure:

```markdown
# PastNavigationMemoryFile Index

## Role
This is a discovery registry for files that may contain past Navigation memory.
It is not current route truth. Route Memory Review decides current interpretation.

## Entry Criteria

## Index
| ID | Path | Kind | Created By | Created For | Memory Signal | Registered At | Review Refs | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
```

Strength:

- Easy for humans and Navigation intake to find.
- Matches Homegrown explicitness.
- Cheap to backfill now.

Weakness:

- Can go stale if writers forget to append.
- Needs scope discipline.

Test:

- Novelty: medium.
- Scrutiny survival: high if non-authoritative.
- Fertility: high.
- Actionability: high.
- Mechanism independence: high.

Verdict: survive with validation/backfill.

### Candidate C - Append-Only Creation Event Log

Shape:

```text
devdocs/navigation_context/past_navigation_memory_file_events.md
```

Every artifact creation appends an event. A current index is derived mentally or by future tooling.

Strength:

- Better audit trail.
- Less mutation than a table with review refs.

Weakness:

- Harder for humans to scan.
- Needs derivation to answer "what files exist?"
- More ceremony than current evidence requires.

Test:

- Novelty: medium.
- Scrutiny survival: medium.
- Fertility: medium.
- Actionability: medium.
- Mechanism independence: medium.

Verdict: defer. Reopen if the simple index mutates too much or audit needs become stronger.

### Candidate D - Per-File Metadata Only

Shape:

Each route-memory file declares:

```yaml
record_type: past_navigation_memory_file
memory_kind: navigation_map | route_memory_review | frontier_ledger | sync_brief
```

Strength:

- Source-local truth.
- Good for scan/backfill.

Weakness:

- Does not provide one easy discovery point.
- Existing files may lack metadata.
- Still requires broad scans.

Test:

- Novelty: medium.
- Scrutiny survival: medium.
- Fertility: high as future automation support.
- Actionability: medium.
- Mechanism independence: medium.

Verdict: refine into validation support, not standalone solution.

### Candidate E - Hybrid Registry Plus Scan Refresh

Shape:

- Maintain `past_navigation_memory_file_index.md`.
- Require creator protocols to append entries.
- Use active-tree scans as fallback or refresh when index confidence matters.
- Optionally add per-file metadata in future templates.

Strength:

- Best balance of explicitness and safety.
- Handles stale-index risk.
- Starts manually and can become tool-assisted later.

Weakness:

- Slightly more process than no index.
- Requires disciplined wording to prevent authority drift.

Test:

- Novelty: medium-high.
- Scrutiny survival: high.
- Fertility: high.
- Actionability: high.
- Mechanism independence: high.

Verdict: strongest survivor.

### Candidate F - Route Memory Review Consumed-Set Only

Shape:

Each `route_memory_review.md` lists sources read, and Navigation consumes the latest review.

Strength:

- Keeps review explicit.
- Avoids a separate index.

Weakness:

- Does not help discover sources before the first review.
- Only indexes files that were already reviewed.
- Cannot answer "what PastNavigationMemoryFile exists?" reliably.

Test:

- Novelty: low.
- Scrutiny survival: partial.
- Fertility: low-medium.
- Actionability: high.
- Mechanism independence: weak.

Verdict: preserve as review output requirement, not as index replacement.

## Assembly Check

The strongest assembly is:

```text
PastNavigationMemoryFile Index
  + creation-time registration contract
  + active-tree scan/backfill fallback
  + Route Memory Review consumption rule
  + anti-authority role note
```

Emergent value:

- The index makes file discovery cheap.
- The contract makes it maintainable.
- The scan fallback makes it safe.
- The review boundary keeps route truth in the right artifact.

This assembly is stronger than any single candidate.

## Proposed V1 Shape

### Path

```text
devdocs/navigation_context/past_navigation_memory_file_index.md
```

If `devdocs/navigation_context/` does not exist, create it when the first index or route-memory context artifact is materialized.

### Role

```text
This file is a discovery registry for PastNavigationMemoryFile entries.
It helps Navigation and Route Memory Review find candidate files.
It does not classify current route truth.
Route Memory Review owns current interpretation for a specific Navigation question.
If this index may be stale, validate with an active-tree scan.
```

### Entry Criteria

Register files that may contain earlier Navigation routes, route states, blockers, stale routes, superseded routes, or route decisions.

Register:

- durable `devdocs/navigation/*.md` maps;
- inquiry-local `navigation.md` maps;
- durable `route_memory_review.md` files;
- multi-resolution `_frontier.md` ledgers;
- durable sync briefs or warm-up outputs that mention route-state changes;
- child Navigation maps created during multi-resolution Navigation.

Do not register:

- ordinary materialization traces with no route-memory content;
- generic summaries that do not carry route states;
- archived files by default;
- no-op "none found" checks.

### Minimum Schema

```markdown
| ID | Path | Kind | Created By | Created For | Memory Signal | Registered At | Review Refs | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
```

Field meanings:

- `ID`: stable short id, such as `pnmf-0001`.
- `Path`: file path.
- `Kind`: `navigation_map`, `inquiry_navigation_map`, `route_memory_review`, `frontier_ledger`, `sync_brief`, `warmup_output`, `child_navigation_map`, or `other`.
- `Created By`: Navigation, Route Memory Review, multi-resolution Navigation, navigator-refresh, warm-up, or manual.
- `Created For`: target Navigation question, inquiry, route, or context.
- `Memory Signal`: short reason this file may contain past route memory.
- `Registered At`: timestamp or run id for registration, not route truth.
- `Review Refs`: optional links to reviews that consumed this file.
- `Notes`: confidence limits or index update notes.

Forbidden fields in v1:

- current route status;
- carry forward / retire / ignore decisions;
- latest truth;
- selected route.

### Update Timing

Append an entry when a durable route-memory artifact is created.

Update `Review Refs` only when Route Memory Review consumes the file and the update is cheap. If updating the index risks creating mutable-state drift, leave `Review Refs` blank and rely on the review's `Sources Read`.

### Failure Handling

If the artifact is created but index update fails:

```text
Do not delete or rewrite the artifact.
Report: artifact exists but is not indexed.
Record a repair note when possible.
```

### Validation / Backfill

When confidence matters, scan active docs excluding archive folders for:

- `devdocs/navigation/**/*.md`;
- `**/navigation.md`;
- `**/_frontier.md`;
- `**/route_memory_review.md`;
- durable sync/warm-up context files under `devdocs/navigation_context/` when that directory exists.

Compare scan results to the index and add missing entries with `Notes: backfilled`.

## Innovation Telemetry

Generators applied: 4 / 4.

Framers applied: 3 / 3.

Convergence: yes. Lens shifting, combination, inversion, constraint manipulation, absence recognition, domain transfer, and extrapolation all converge on a hybrid registry that is useful only as discovery support.

Survivors tested: 6 / 6 candidate designs.

Failure modes observed: none. Premature evaluation avoided by generating multiple shapes before selecting the hybrid. Single-mechanism trap avoided.

Overall: PROCEED.
