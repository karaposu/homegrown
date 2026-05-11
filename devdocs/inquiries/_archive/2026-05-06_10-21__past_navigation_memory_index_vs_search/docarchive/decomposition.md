# Decomposition: PastNavigationMemoryFile Index Versus Search

## Coupling Map

### Major Elements

- Search scope: where to search and what directories to exclude.
- Filename/path pattern set: which names and roots identify candidates.
- Candidate filtering: how to separate route-memory artifacts from protocol/spec false positives.
- Output mode: inline status, Route Memory Review `Sources Read`, or durable candidate report.
- Route Memory Review interface: how review consumes search results.
- Index revival triggers: when a maintained or generated global index becomes worth adding.
- Protocol patch locations: where the search contract should be documented.

### Coupling Topology

High coupling:

- Search scope <-> false-positive control. Broad scope causes spec-file matches.
- Filename patterns <-> candidate filtering. Patterns find candidates; filtering controls relevance.
- Output mode <-> durable handoff. Saving a report is only needed when search results must survive beyond the current context.
- Route Memory Review interface <-> interpretation boundary. Review must read candidates and classify route memory; search must not interpret.

Moderate coupling:

- Index revival triggers <-> monitoring. The system needs observable evidence before reviving an index.
- Protocol patch locations <-> update burden. If the contract is spread across too many files, it can drift.

Low coupling:

- Search command syntax <-> final finding wording. Exact shell syntax can be refined during implementation.
- Candidate report filename <-> search logic. The report name can change without altering discovery semantics.

## Boundary Validation

### Top-Down Boundary Check

The search mechanism is distinct from Route Memory Review because it only finds files.

Candidate filtering is distinct from search because a found file can still be irrelevant or a false positive.

Output mode is distinct from discovery because the same search can be used inline or saved.

Index revival is distinct from v1 design because the current answer can defer the index without killing it forever.

### Bottom-Up Atom Check

Irreducible atoms:

- active-doc roots;
- archive exclusions;
- path/name pattern list;
- false-positive exclusions;
- candidate table or inline list;
- `Sources Read`;
- Route Memory Review classifications;
- monitoring thresholds for index revival.

These atoms group naturally into the boundaries above. No current-route interpretation atom is inside search; it stays in Route Memory Review.

Boundary confidence: high.

## Question Tree

### Question 1 - What Exactly Should Search Cover?

Verification criteria:

- [ ] Active `devdocs/` route-memory artifact paths are included.
- [ ] `docarchive/`, `archive/`, and `_archive/` are excluded by default.
- [ ] `homegrown/` protocol/spec files are excluded from route-memory candidate search by default.
- [ ] The pattern set includes Navigation maps, inquiry-local maps, `_frontier.md`, `route_memory_review.md`, `prior_map_overlay.md`, and `sync_brief.md`.

### Question 2 - How Are False Positives Controlled?

Verification criteria:

- [ ] Search is scoped by path root, not just filename.
- [ ] Protocol/spec files are not returned as route-memory candidates.
- [ ] Candidate status can be `candidate`, `excluded`, or `needs_read`.
- [ ] Search result is not treated as current route truth.

### Question 3 - What Gets Recorded After Search?

Verification criteria:

- [ ] Small same-session runs can record route-memory status inline.
- [ ] Route Memory Review records `Sources Read`.
- [ ] A durable `past_navigation_memory_candidates.md` is saved only when candidate discovery itself needs handoff or audit.
- [ ] The report records search patterns and exclusions so the result is reproducible.

### Question 4 - How Does Route Memory Review Consume Search Results?

Verification criteria:

- [ ] Review reads relevant candidates before classifying.
- [ ] Review can ignore or exclude found candidates with reasons.
- [ ] Review writes current interpretation in `route_memory_review.md`.
- [ ] Navigation consumes review output, not raw search output.

### Question 5 - When Would A Maintained Index Become Justified?

Verification criteria:

- [ ] Revival triggers are observable.
- [ ] Search pain, naming drift, non-derivable metadata need, or external-reader need are named.
- [ ] The index is not revived merely because explicitness is valued.
- [ ] Any future index is generated from search when possible.

### Question 6 - Where Should The Protocol Change Land?

Verification criteria:

- [ ] `homegrown/protocols/navigation_context_intake.md` receives the discovery contract or pointer.
- [ ] Route Memory Review routine receives the consumption and output-mode rule.
- [ ] `homegrown/navigation/SKILL.md` records route-memory discovery status in telemetry.
- [ ] Prior index finding is corrected by this finding.

## Interface Map

| Source Piece | Target Piece | What Flows | Direction |
| --- | --- | --- | --- |
| Search scope | Filename/path pattern set | Allowed roots and exclusions | one-way |
| Filename/path pattern set | Candidate filtering | Raw candidate paths | one-way |
| Candidate filtering | Output mode | Included/excluded/needs-read candidates | one-way |
| Output mode | Route Memory Review interface | Inline list, `Sources Read`, or candidate report path | one-way |
| Route Memory Review interface | Navigation | Current route-memory interpretation | one-way |
| Monitoring | Index revival triggers | Evidence that search is no longer enough | one-way |
| Protocol patch locations | Search scope and output mode | Durable rule placement | one-way |

Hidden-coupling check:

- Search does not decide relevance to the current Navigation question.
- Candidate report does not classify route states.
- Absence from a saved candidate report is not global proof that no memory files exist later.
- Future index must not become route truth.

## Dependency Order

1. Define search scope and exclusions.
2. Define filename/path pattern set.
3. Define candidate filtering statuses.
4. Define output modes.
5. Define Route Memory Review consumption.
6. Define maintained-index revival triggers.
7. Patch Navigation/context docs.

Parallelizable after step 2:

- output mode and Route Memory Review consumption can be drafted together;
- revival triggers can be drafted independently.

Must wait:

- protocol patching should wait until exact search contract and output-mode rule are stable.

## Self-Evaluation

### Independence

Pass.

Each piece can be worked independently after the basic search scope is fixed.

### Completeness

Pass.

The decomposition covers search mechanics, false positives, recording, review consumption, and future index conditions.

### Reassembly

Pass.

If all pieces are answered, Homegrown gets a complete replacement for the maintained-index recommendation: explicit search, optional report, review interpretation, and index revival gates.

### Tractability

Pass.

Each question is small enough for a single implementation or documentation patch.

### Interface Clarity

Pass.

The most important interface is clean: search produces candidates; review produces meaning.

### Balance

Pass.

Search pattern design and Route Memory Review interface are the heaviest pieces, but neither dominates the whole.

### Confidence

Pass.

Top-down and bottom-up boundaries agree. The decomposition avoids splitting route interpretation into the search/report layer.
