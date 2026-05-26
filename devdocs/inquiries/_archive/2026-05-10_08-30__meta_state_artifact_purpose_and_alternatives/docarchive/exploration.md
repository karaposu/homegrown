# Exploration: Meta-state Artifact Purpose and Alternatives

## Mode + Entry Point

- **Mode:** Artifact (meta-loop spec is concrete) + Possibility (functions enumerated; alternatives generated).
- **Entry:** Signal-first (user named one function; asking for the rest + alternatives).

---

## Tag Legend

- **Strength:** CONFIRMED (direct citation) / SCANNED (interpreted from spec text) / DEFERRED (named but unspecified)
- **Coverage:** would an existing artifact (per-inquiry `_state.md`, `finding.md` frontmatter, `_branch.md` Relationships, etc.) cover this function?

---

## Category A — Functions named in the meta-loop spec (`enes/loop_desing_ideas/meta_loop.md`)

| # | Function | Source citation | Strength | Why it matters | Existing-artifact coverage? |
|---|---|---|---|---|---|
| A1 | **Memory of where the meta-loop has been** — "Navigation is the meta-loop's eyes, not its will. ... It does not remember the path." Implies meta-state IS the path-memory. | meta_loop.md §5 (L107, L111) | CONFIRMED | Without path-memory, meta-loop can't be stateful | PARTIAL — `finding.md` frontmatter `refines:`/`supersedes:` chains + `_branch.md` Relationships capture path edges; you can WALK them on demand |
| A2 | **Durable cross-run memory** — "The meta-loop cannot be stateful without durable cross-run memory." | meta_loop.md "MUST/COULD" §, design `_meta_state.md` v1 reasoning (L158) | CONFIRMED | Survives across sessions; meta-loop has continuity | PARTIAL — same as A1 |
| A3 | **Stateful traversal evidence** — meta-loop is "a stateful traversal engine"; the "stateful" property depends on this artifact | meta_loop.md §1 (L27, L45) | CONFIRMED | Distinguishes meta-loop from "runner that repeatedly calls MVL+" | INDIRECT — derivable from corpus walk |
| A4 | **Anti-spinning judgment substrate** — "Meta-state gives it memory. Meaningful traversal tells it whether it is thinking or just spinning" | meta_loop.md §1 poetic version (L53) | CONFIRMED | Spinning detection requires path record | NO — this is meta-state's distinct contribution; existing artifacts don't expose "did I just go in circles" |
| A5 | **Selection rationale recording** — visited-path list shape per L1 row: `(inquiry → selected direction → rationale)` | user's L1 row + meta_loop.md §6 ("update _meta_state.md") | CONFIRMED | The WHY of each move is captured for later calibration | NO — existing artifacts don't structurally record "I chose direction X because Y" at the meta-level |
| A6 | **Stop/continue decision support** — v1 flow ends with "stop or continue" | meta_loop.md §6 (L127) | CONFIRMED | The decision needs path-context to be informed | PARTIAL — derivable from finding.md statuses but ad-hoc |

---

## Category B — Functions implied but not stated in the spec

| # | Function | Source | Strength | Why it matters | Existing-artifact coverage? |
|---|---|---|---|---|---|
| B1 | **Anti-double-visitation** — the user's named function | user's question | SCANNED | Prevents re-running a probe already run | YES (lossy) — finding.md exists for completed inquiries; double-visit could be detected by checking if finding.md exists |
| B2 | **Branch/merge support** — meta-loop "can branch by launching multiple MVL+ heads" and "merge by comparing branch outputs"; needs cross-head state | meta_loop.md §3 (L79-81) | SCANNED | Multi-head requires shared state to know branches diverged from the same point | NO at multi-head level — finding.md frontmatter captures pairwise relationships but not branch-set membership |
| B3 | **Calibration data for future automation** — "later makes branch graphs, automated selection, and multi-head traversal less speculative" | meta_loop.md §6 (L132) | CONFIRMED | Recorded selections + outcomes train later automation | INDIRECT — derivable from corpus walk; expensive to reconstruct |
| B4 | **Branch-graph evolution path** — open question: "does `_meta_state.md` need branch graph from the beginning or is visited-path list enough?" | meta_loop.md Open Questions Monitoring (L203) | DEFERRED | The artifact is designed to grow into a graph if needed | N/A — this is an evolution decision, not a function |

---

## Category C — Overlap with existing artifacts

| # | Existing artifact | What it captures | Gap vs `_meta_state.md` |
|---|---|---|---|
| C1 | Per-inquiry `_state.md` | within-inquiry progress, iteration, history; relationships to OTHER inquiries | does NOT capture cross-inquiry meta-loop traversal state (which inquiry came after which from the meta-loop's POV vs from the inquiry author's POV) |
| C2 | Per-inquiry `_branch.md` Relationships | `BUILDS-ON`, `CONTINUES FROM`, `RELATED`, `SUPERSEDED BY`, `CORRECTS` | captures pairwise relationships; doesn't capture "which Navigation direction was selected" or "why" |
| C3 | `finding.md` frontmatter (`refines:`, `supersedes:`, `corrects:`) | inquiry-to-inquiry edges with type | same gap as C2 — captures relationship type but not selection rationale or meta-loop session-id |
| C4 | Navigator's potential `navigation_memory.md` (Level 2+) | per-Navigator persistent memory; recent movement concerns; pattern recognition across runs | DIFFERENT scope — Navigator's memory is about PERCEPTION (what to look for next); `_meta_state.md` is about TRAVERSAL (where the runner has gone). Could be confused. |
| C5 | Filesystem (folder names, datetime prefixes) | chronological order of inquiries; folder names | gives sequence; doesn't give meta-loop intent (was inquiry-X selected as a meta-loop probe, or independently created?) |

**Key gap:** the meta-loop's TRAVERSAL INTENT is the new information `_meta_state.md` would carry — not just "X happened after Y" but "the meta-loop chose X after Y because of Z." Existing artifacts capture the WHAT but not the meta-loop's WHY.

---

## Category D — Alternative artifacts/mechanisms

| # | Alternative | Pros | Cons | Function-coverage |
|---|---|---|---|---|
| D1 | **Walk finding.md frontmatter chains** (no separate artifact) | Zero new artifact; data already exists; truth-by-construction | O(N) read each meta-loop step; selection rationale not captured; multi-head merge not visible | Covers A1, A3 partially; misses A4, A5; partially covers A6, B2 |
| D2 | **Lightweight INDEX manifest** (`devdocs/inquiries/_index.md` or similar) — append-only list of (inquiry, parent, selection-direction, rationale) | One-line-per-inquiry; faster to read; explicit selection rationale | Maintenance overhead; divergence risk from per-inquiry truth | Covers A1-A6 if columns include rationale + meta-loop session-id |
| D3 | **Per-meta-loop-session journal** (one journal file per meta-loop session, not cross-session) | Bounded scope; clear ownership; multi-session noise avoided | Cross-session continuity lost (the user wants durable memory per A2) | Covers A1-A6 within a session; misses A2 |
| D4 | **Add Selection Rationale to next inquiry's `_branch.md`** — push rationale into per-inquiry artifact via "selected from X because Y" | No new artifact type; rationale near point-of-use | Distributed across N files; reading the meta-loop path requires walking those N files | Covers A1, A3, A5, B1; misses centralized A4 spin-detection |
| D5 | **Drop artifact entirely, derive at query time** — every meta-loop run reads filesystem at startup | Zero artifact; always-fresh; truth-by-construction | Each meta-loop step pays full O(N) read; spin-detection requires reconstructing path each time; calibration data lossy | Covers A1, A3 partially; misses A4, A5 |
| D6 | **Navigator absorbs path-memory into `navigation_memory.md`** | Reuses existing planned artifact (Level 2+) | Conflates perception (eyes) with traversal-state (memory) — explicitly killed by spec's "Navigation is eyes, not will" | Conceptually wrong; rejected by spec |
| D7 | **Hybrid: lightweight INDEX (D2) + selection rationale on next `_branch.md` (D4)** | Centralized scan + distributed rationale; INDEX is just pointer-list | Two places to update | Best function-coverage with minimal new structure |

---

## Category E — Costs of `_meta_state.md`

| # | Cost | Source | Strength | Severity |
|---|---|---|---|---|
| E1 | Maintenance overhead — every probe must update it | meta_loop.md §6 v1 flow (L121, L126) | CONFIRMED | LOW (one append per probe) |
| E2 | Divergence risk — `_meta_state.md` could go out of sync with per-inquiry `_state.md` and `finding.md` | inferred from C1-C3 | SCANNED | MEDIUM — needs sync discipline or single-source-of-truth rule |
| E3 | Premature-abstraction risk — at L0 nothing exists; at L1 only visited-path-list; the open question whether it should grow into branch-graph is explicit | meta_loop.md Open Questions Monitoring (L203) | CONFIRMED | MEDIUM — start simple, grow as needed; well-flagged |
| E4 | Scope-creep risk — could absorb other meta-level concerns (Navigator's memory, MVL+ telemetry, etc.) | inferred | SCANNED | LOW — bounded by clear "traversal-state only" scope |
| E5 | Synchronization complexity (mid-update crash) | inferred from durability requirement A2 | SCANNED | LOW for sequential L1; HIGHER at multi-head L4 |

---

## Cross-Category Synthesis

### What `_meta_state.md` actually serves (beyond double-visitation prevention)

The user's stated function (anti-double-visitation, B1) is the THINNEST function in the list. The spec implies six other distinct functions:

1. **Path memory** (A1) — where has the meta-loop been
2. **Durable cross-run memory** (A2) — survives across sessions
3. **Stateful traversal evidence** (A3) — what makes meta-loop "stateful" rather than "stateless runner"
4. **Anti-spinning substrate** (A4) — meaningful-traversal judgment requires path record
5. **Selection rationale recording** (A5) — captures the WHY of each move (not just the WHAT)
6. **Stop/continue decision support** (A6) — informed stop decisions need path context

Plus implied:
- **Branch/merge support** (B2) — multi-head needs shared cross-branch state
- **Calibration data** (B3) — future automated selectors need recorded examples

So: anti-double-visitation is a CONSEQUENCE of A1, not the primary purpose. The primary purpose is **traversal-state-as-memory**.

### Where existing artifacts cover the load

- A1 (path memory): walk finding.md frontmatter chains → COVERS A1 partially (gives the WHAT, not the WHY).
- A3 (stateful traversal): walking the corpus reconstructs it on demand.
- A6 (stop/continue): partially derivable from finding.md statuses.
- B1 (double-visit): finding.md existence check covers it cheaply.

### Where existing artifacts DON'T cover the load

- A4 (spin-detection): requires explicit path with timestamps and selection-rationale; corpus walk produces facts but not "was this productive."
- A5 (selection rationale): nowhere recorded structurally at the meta-level.
- B2 (branch/merge state): pairwise relationships exist; multi-head set membership doesn't.
- B3 (calibration): expensive to reconstruct from corpus.

### Strongest alternative to investigate

**D7 (Hybrid)** — lightweight INDEX manifest + selection rationale on next `_branch.md`:
- The INDEX is a flat append-only list of `(inquiry-id, parent-inquiry, meta-loop-session, selection-direction, brief-rationale)`. One line per probe. Cheap.
- The rationale is ALSO stored at point-of-use in the next inquiry's `_branch.md` (gives full context near the inquiry).
- This covers A1-A6 + B1-B3 with minimal new structure, leveraging existing per-inquiry artifacts.

The hybrid is essentially `_meta_state.md` reduced to a one-line-per-row INDEX, plus pushing the meaty content into already-existing files. The full state file becomes optional / can be a view materialized from these sources.

---

## Frontier Stability + Convergence Check

- **Frontier stability:** YES. Meta-loop spec fully scanned for `_meta_state.md` mentions; isolated-Navigator doc's Level 2-3 cross-run state checked; per-inquiry artifact set scanned.
- **Declining discovery rate:** YES. Additional searches would re-confirm the same functions.
- **Bounded gaps:** YES. Remaining unknowns are about which alternative is best (sensemaking + critique territory), not about more functions.
- **Jump scan:** Tested — checked whether per-inquiry artifacts already cover meta-loop traversal-state. Conclusion: PARTIAL (A1, A3, A6, B1 covered to varying degrees) but A4, A5, B2 not covered without a meta-level structure.

**Convergence: ACHIEVED.**

---

## Recommendations for next disciplines

- **Sensemaking:** stabilize the function list (~6 distinct functions named; B1 is consequence of A1); resolve which functions justify a separate artifact and which can be served by alternatives. The user's question collapses cleanly: "do A4 + A5 + B2 + B3 (the unique meta-state functions) justify a separate artifact, or can a hybrid (D7) deliver them?"
- **Decomposition:** small — the verdict is keep / replace / drop, with sub-questions about which functions get which mechanism.
- **Innovation:** generate the actual shape of D7 (or whichever alternative wins).
- **Critique:** test the chosen alternative against each function it claims to cover.
