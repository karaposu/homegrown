# Decomposition: Navigation Output Contract, Route Map, And Resume Memory

## Coupling Map

### Cluster A - Existing Navigation Contract

Elements:

- `homegrown/navigation/SKILL.md`
- `homegrown/navigation/references/navigation.md`
- Navigation map format
- 16-type taxonomy
- Excluded section
- telemetry checks

Coupling:

- Strong internal coupling. Format, taxonomy, telemetry, and failure modes all define what Navigation means.

Boundary:

- This cluster can be patched without changing warm-up.

### Cluster B - Route-Map Enrichment

Elements:

- route purpose;
- movement;
- route status;
- blocked-by/unlocks;
- continuation note.

Coupling:

- Strong coupling to output format.
- Moderate coupling to warm-up, because warm-up later consumes these fields.

Boundary:

- This is an output contract refinement, not a new discipline.

### Cluster C - Blocked Path Semantics

Elements:

- `UNBLOCK`;
- reachability check;
- gates;
- blocked routes;
- excluded section.

Coupling:

- Strong coupling between blocked routes and `UNBLOCK`.
- Risk of wrong boundary: putting blocked routes in Excluded hides them.

Boundary:

- Blocked route belongs in the main map; `UNBLOCK` is the route/check that opens it.

### Cluster D - Continuation Memory

Elements:

- saved `navigation.md` files;
- `devdocs/navigation/*.md`;
- route status over time;
- selected/pursued route evidence;
- warm-up source reads.

Coupling:

- Strong coupling to warm-up v1/v2/v3.
- Moderate coupling to Navigation output format.

Boundary:

- Warm-up should read prior maps; Navigation should write maps with fields that warm-up can interpret.

### Cluster E - Taxonomy Consistency

Elements:

- `homegrown/navigation/SKILL.md` says 15 types;
- `homegrown/navigation/references/navigation.md` defines 16 types;
- `DIAGNOSE` as added process type.

Coupling:

- Low implementation cost, high clarity impact.

Boundary:

- Patch the skill text to 16 types.

## Question Tree

### Q1. Does current Navigation support structured direction lists?

Verification:

- [x] Navigation map format exists.
- [x] Direction + WHY + guidelines exist.
- [x] Content/Process/Context grouping exists.

### Q2. Does current Navigation support comprehensive route enumeration?

Verification:

- [x] Full enumeration principle exists.
- [x] Excluded section exists.
- [x] Failure modes warn against premature filtering.
- [ ] Dependency-graph completeness is not yet explicit.

### Q3. Does current Navigation support blocked routes?

Verification:

- [x] Reachability check exists.
- [x] `UNBLOCK` exists.
- [ ] Blocked routes are not required as first-class main-map items.
- [ ] `Blocked by` and `Unlocks` fields are not required.

### Q4. Does current Navigation support route purpose?

Verification:

- [x] WHY exists.
- [ ] Purpose is not explicit.
- [ ] WHY and Purpose are not distinguished.

### Q5. Does current Navigation support movement information?

Verification:

- [x] Direction and guidelines imply movement.
- [ ] `Current state -> target state` is not required.
- [ ] Route status is not required.

### Q6. Can saved Navigation maps become continuation memory?

Verification:

- [x] Navigation writes Markdown files.
- [ ] Warm-up does not explicitly read prior Navigation maps.
- [ ] Maps do not carry enough state fields to be reliable continuation memory.

## Interface Map

| Source Piece | Target Piece | What Flows | Direction |
| --- | --- | --- | --- |
| Navigation output contract | Navigation map | required route fields | one-way |
| Reachability check | Route status | open/blocked/gated state | one-way |
| `UNBLOCK` item | blocked routes | gate/check that opens routes | bidirectional reference |
| Navigation map | warm-up v1 | recent/current frontier evidence | one-way |
| Navigation map | warm-up v2 | movement history and strategic route context | one-way |
| Navigation map | warm-up v3 | trace seeds for route movement | one-way |
| Warm-up | Navigation | remembered route state | one-way |

## Dependency Order

1. Fix 15/16 taxonomy mismatch in `homegrown/navigation/SKILL.md`.
2. Patch `homegrown/navigation/references/navigation.md` output format to add route fields.
3. Patch blocked-route rules so blocked routes remain in the main map.
4. Patch Navigation telemetry to check route field completeness.
5. Patch warm-up v1/v2/v3 to read previous Navigation maps.
6. Later, add a route status update convention only if saved maps start accumulating.

## Self-Evaluation

### Independence

Pass. Taxonomy cleanup, route fields, blocked semantics, and warm-up reads can be patched separately.

### Completeness

Pass. The decomposition covers all user requirements: structured routes, movement, blocked paths, route purpose, comprehensive enumeration, and continuation memory.

### Reassembly

Pass. If all pieces are patched, Navigation becomes a durable route-map discipline without becoming a selector or planner.

### Tractability

Pass. The core refinement is a Markdown contract patch, not new infrastructure.

### Interface Clarity

Pass. Navigation writes route maps; warm-up reads route maps.

### Balance

Pass. Route-map enrichment is the largest piece but still bounded.

### Confidence

High for the conceptual direction, medium for exact field names until patched and tried in practice.
