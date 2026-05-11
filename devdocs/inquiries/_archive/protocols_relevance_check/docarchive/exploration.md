# Exploration: protocols_relevance_check

## User Input
devdocs/inquiries/protocols_relevance_check/_branch.md

Map the territory needed to evaluate whether protocols (as described in `thinking_disciplines/protocols/desc.md`) are still relevant, superseded, or identifying still-missing pieces.

---

## Mode & Entry

- **Mode:** Artifact exploration — concrete files, hooks, commands exist (or don't) in the codebase
- **Entry:** Signal-first — `protocols/desc.md` provides a specific list of ~16 named protocols to find or confirm absent

---

## Territory Overview

The territory has 5 major regions, each scanned in this exploration:

1. **The protocols document itself** (`thinking_disciplines/protocols/desc.md`) — the document under audit
2. **Loop runners** (`commands/MVL.md`, `commands/MVL+.md`, `commands/inquiry.md`) — where many protocols-by-name are now embedded
3. **Other commands** (`commands/*.md`) — to find protocol implementations outside the loop runners
4. **Filesystem artifacts referenced by the protocols doc** (`hooks/`, `CLAUDE.md`, `folder_based.md`, `/devdocs-archivist`) — to verify whether claimed implementations still exist
5. **Project goal documents** (`enes/desc.md`, `enes/discipline_taxonomy.md`, `loop_design_1.md`, prior exploration `devdocs/exploration/protocols_as_second_dimension.md`) — to ground "still relevant for stated goals?" against actual goals

---

## Inventory — Per-Protocol Status

The protocols doc names 16 protocols across 3 categories. Here is the status of each, grounded in actual codebase reality (not the protocols doc's own claims, which are partially stale).

### Pipeline Protocols (7)

| Protocol | Where it lives now | Actual status |
|---|---|---|
| **CONFIGURE** | `commands/inquiry.md` (classifies problem → selects pipeline at NEW lifecycle) | ALIVE — embedded in /inquiry. Specifically: lines that read "Classify problem", "Select pipeline", and the per-problem-type pipeline table. Not absorbed into /MVL (which has fixed pipeline = no classification needed) or /MVL+ (same). |
| **STEER** | `commands/inquiry.md` (wayfinding checkpoint between iterations, currently inlined) | ALIVE — embedded in /inquiry as the wayfinding move taxonomy (BROADEN/NARROW/SHIFT/DIAGNOSE/TERMINATE/RECONSIDER). NOT in /MVL or /MVL+ (those use only implicit narrowing). The protocols doc explicitly notes "currently lives inside `/inquiry`, invoking wayfinding" — accurate. |
| **TERMINATE** | Three places: /inquiry's wayfinding TERMINATE move; /MVL & /MVL+'s "is the question answered?" check at ITERATION-COMPLETE | ALIVE — implicit in all three loop runners. The /MVL family's terminate is one-bit ("answered? yes/no"); /inquiry's is richer (wayfinding produces the move). Same protocol, different implementations. |
| **SCOPE** | Nothing | MISSING — confirmed: no `/scope` command, no SCOPE step in any loop runner, no spec file. The protocols doc claims "Currently ad-hoc — not yet formalized." Confirmed accurate. |
| **BRANCH** | Partially: `enes/runtime_environment/folder_based.md` describes subfolders-as-decomposition (the structural mechanism). /MVL+ runs the Decompose discipline but applies same pipeline to whole; /inquiry's CONFIGURE table mentions per-branch pipelines but the spec doesn't include a formalized BRANCH step that creates parallel branches. | PARTIAL — design rationale exists (folder_based.md), no operational protocol step in any runner that creates and tracks parallel branches. The protocols doc's claim "not yet formalized" is accurate. |
| **MERGE** | Nothing | MISSING — confirmed: no command, no spec, no step in any runner. The protocols doc's claim "not yet formalized" is accurate. |
| **Freshness checks** | Was supposed to live in `CLAUDE.md` per protocols doc | GONE — `CLAUDE.md` does not exist anywhere in the project repository (`find` returned nothing). The protocols doc claim "Currently lives in CLAUDE.md project instructions" is STALE. |

### Transfer Protocols (4)

| Protocol | Where it lives now | Actual status |
|---|---|---|
| **SYNTHESIZE** | Two places: `commands/inquiry.md` has an explicit SYNTHESIZE section ("SYNTHESIZE — After TERMINATE") that compiles inquiry artifacts into a deliverable. /MVL & /MVL+ embed synthesis as the finding-writing template (fixed structure: Question → Summary → Finding → Reasoning → Open Questions). | ALIVE — different implementations in /inquiry vs /MVL family. /inquiry's version is project-deliverable producer; /MVL family's version is folder-local finding template. Both qualify as SYNTHESIZE. The protocols doc's "named but underspecified — needs full formalization" reflects /inquiry's version; /MVL family's template-driven version is more specified than the protocols doc acknowledges. |
| **RESUME** | All three loop runners have explicit RESUME lifecycle branches (`commands/MVL.md`, `commands/MVL+.md`, `commands/inquiry.md` all have "If RESUME (input is a folder path):" sections) | ALIVE — implemented identically across all three runners (read `_state.md`, check progress via file existence, continue from first incomplete discipline). The protocols doc's "Currently lives inside `/inquiry`" is STALE — RESUME is in all three now, not just /inquiry. |
| **HANDOFF** | Nothing | MISSING — confirmed: no command, no spec. The protocols doc's "does not exist — not yet formalized" is accurate. |
| **BRIEF** | Nothing | MISSING — confirmed. The protocols doc's "does not exist — not yet formalized" is accurate. |

### Persistence Protocols (5)

| Protocol | Where it lives now | Actual status |
|---|---|---|
| **Folder convention** | `enes/runtime_environment/folder_based.md` (full spec, ~420 lines) | ALIVE — spec exists, battle-tested in active use (every inquiry under `devdocs/inquiries/` follows it; the inquiry containing this very exploration is using it now). The protocols doc claims "Documented in `devdocs/folder_based.md` — exists as specification but has not been battle-tested." STALE on both counts: (a) path is wrong (now at `enes/runtime_environment/folder_based.md`); (b) is battle-tested. |
| **CV persistence** | `commands/comprehend.md` describes Comprehension Versions extensively (CV1–CV5, persistent across sessions) | ALIVE — embedded in /comprehend's discipline spec. The protocols doc's "Described in Comprehend's discipline spec" is accurate. |
| **VERSION** | Nothing | MISSING — confirmed: no protocol that saves iteration N's outputs as a separate snapshot before iteration N+1 overwrites. /MVL & /MVL+ archive only the final iteration's files to `docarchive/` on termination; iteration history is lost during the run. The protocols doc's "not yet formalized" is accurate. (This was independently flagged as a gap in `loop_design_2.md`'s "What's not yet in /MVL" section written this session.) |
| **Metadata injection** | Was implemented as `hooks/devdocs_metadata_appender.sh` per protocols doc | GONE — `hooks/` directory does not exist in the project. Was removed earlier in this session per user direction. The protocols doc's "Implemented as the `devdocs_metadata_appender.sh` hook" is STALE. |
| **Archival** | Per protocols doc, "Exists as the `/devdocs-archivist` command." | PARTIAL — `/devdocs-archivist` does not exist in `commands/`. /MVL & /MVL+ DO archive (move discipline outputs to `docarchive/`) but only on inquiry termination, only within the loop runner, not as a separate command for stale-detection across the broader project. The protocols doc's claim is STALE on the standalone-command part; archival as a runner-embedded operation is alive. |

### Quality Protocols (DISSOLVED — for completeness)

The protocols doc's earlier draft included a "Quality Protocols" category (GATE, depth tests, convergence checks, freshness checks). The current protocols doc explicitly dissolved this category, moving freshness checks into Pipeline and acknowledging that depth/convergence/saturation are discipline components, not protocols. This dissolution is internally consistent and matches actual implementation: depth tests live in `comprehend.md`, telemetry lives in each discipline's spec, convergence lives in exploration and critique. GATE was eliminated because quality evaluation is cognitive work.

---

## Signal Log

Signals detected during the scan (regions that stood out and were probed):

### S1 — Two protocols' claimed implementations are GONE, not just stale
**Probed.** Metadata injection (hooks/devdocs_metadata_appender.sh) and `/devdocs-archivist` (the archival command) — neither exists in the current codebase. The protocols doc still describes both as "Exists and functional." This is genuine drift between the doc and reality, not just a phrasing issue.

**Implication:** The protocols doc's "Current State" table ("7 Exists and functional, 3 underspecified, 6 missing") is incorrect. Actual current state is closer to: 5 alive and absorbed into commands; 2 alive but partial; 2 gone (metadata injection, freshness checks via CLAUDE.md); 1 partial (archival — embedded in runner, no standalone command); 6 missing.

### S2 — RESUME is in all three runners, not just /inquiry
**Probed.** The protocols doc says RESUME "Currently lives inside `/inquiry`." Reality: all three loop runners have RESUME lifecycle branches (`commands/MVL.md` line 72, `commands/MVL+.md` line 76, `commands/inquiry.md` line 100). The protocol has been generalized across all three runners — same procedure, three implementations.

**Implication:** Protocols-as-second-dimension is *increasingly true* — RESUME is becoming generic operational machinery that any runner can implement. This validates the protocols frame more than the doc's stale phrasing suggests.

### S3 — folder_based.md moved
**Probed.** Protocols doc says folder convention is in `devdocs/folder_based.md`. Reality: it's at `enes/runtime_environment/folder_based.md` (and is a 420-line full spec, not just a "convention"). The doc's claim it has "not been battle-tested" is also stale — the inquiry folder system is in active daily use.

**Implication:** Persistence protocols region is more developed than the protocols doc acknowledges.

### S4 — Prior exploration document on the same topic exists
**Probed.** `devdocs/exploration/protocols_as_second_dimension.md` exists and was the predecessor to `protocols/desc.md`. The earlier doc included a "Quality Protocols" category that was later dissolved. The current `protocols/desc.md` is therefore not a first draft of the concept; it's a v2 that has already been refined once.

**Implication:** The protocols frame has survived one round of refinement (Quality category dissolution). It's not raw speculation; it's been examined and partially-validated already.

### S5 — Six missing protocols map directly to project's stated long-term goals
**Probed.** Reading `enes/desc.md` carefully:
- The end-goal involves "year-long autonomous tasks, parallel MVL loops with cross-comparison, full autonomy."
- Open Question #4: "Parallel MVL loops + cross-comparison — future capability (run multiple loops, compare, reconsider). Needs dedicated design near Level 3."
- Autonomy Level 3+ requires the system to propose its own architectural improvements.

The 6 missing protocols (SCOPE, BRANCH, MERGE, HANDOFF, BRIEF, VERSION) map to specific autonomy-ladder enablers:
- **BRANCH + MERGE** → required for parallel MVL loops with cross-comparison (Open Question #4)
- **HANDOFF + BRIEF** → required for autonomous cross-agent or cross-session work at Level 3+
- **VERSION** → required for the Baldwin cycle (compare iteration N predictions to iteration N+1 outcomes; without versioning, the historical trace needed for calibration is lost)
- **SCOPE** → required for autonomy-level-aware effort calibration (a Level 0 task and a Level 3 task may need very different depth/budget)

**Implication:** The 6 missing protocols are not arbitrary gaps — they correspond to capabilities the project's stated end-goal requires. This is the strongest evidence that the protocols dimension is "still relevant" rather than "superseded."

### S6 — The protocols doc's own framing is internally consistent and load-bearing
**Probed.** The doc draws a sharp boundary: "Disciplines judge. Protocols route." This boundary is operationally meaningful — it explains why GATE was dissolved (judgment belongs to disciplines, not to a routing layer). The two-dimensions frame (content × procedural) survives cross-domain check (Agile, Science, Law all have both).

**Implication:** The doc's conceptual core is sound. What's stale is the per-protocol status table, not the framing.

---

## Confidence Map

| Region | Confidence | Notes |
|---|---|---|
| Pipeline protocols inventory | **Confirmed** | Read all 3 loop runners + checked for separate command files; status of each protocol verified against actual code |
| Transfer protocols inventory | **Confirmed** | RESUME verified in all 3 runners; SYNTHESIZE verified in /inquiry + finding template; HANDOFF & BRIEF confirmed absent |
| Persistence protocols inventory | **Confirmed** | folder_based.md found at new location; CV persistence in comprehend.md; metadata hook + archivist command both confirmed gone |
| Quality protocols (dissolved category) | **Confirmed absent** | Protocols doc explicitly dissolves; GATE confirmed never built; depth tests live as discipline components in comprehend.md (verified) |
| Project-goal alignment of missing protocols | **Confirmed** | Mapped each of the 6 missing protocols to specific project goals in enes/desc.md (Level 3+ autonomy capabilities, parallel MVL loops, Baldwin cycle requirements) |
| Whether HANDOFF/BRIEF would be built first vs other priorities | **Inferred** | enes/desc.md treats /intuit Phase A as immediate next step; protocol-building is implicitly deferred. But this is a sequencing decision, not a fact about the territory. |
| Whether the protocols doc should be updated, archived, or kept | **Unknown — decision question, not territory question** | This is what later disciplines (S, D, I, C) will resolve |

### Confirmed absences (knowledge, not gaps)

- No `/devdocs-archivist` command
- No `hooks/` directory (and therefore no metadata-injection hook)
- No project-level `CLAUDE.md`
- No `/scope`, `/handoff`, `/brief`, `/branch`, `/merge`, `/version` commands
- No GATE protocol (correctly dissolved)

These are confirmed-absent regions — the territory has been checked and is empty. Don't re-explore.

---

## Frontier State

**Stable.** New scans are not finding new regions. The protocols doc + the codebase reality + the prior exploration + the project goals form a closed information loop.

### Jump scan check
Performed: looked for any protocol-named files outside the obvious places (`find -name handoff*`, `find -name brief*`, etc. — all empty). Looked for additional protocol mentions in commands beyond the obvious ones — none surfaced. Checked discipline_taxonomy.md for orchestration/protocol mentions — only one phrase (line 198: "meta-orchestration is real work; disciplines coordinating themselves creates distributed complexity") which validates the protocol frame from a different angle (rejection of "self-orchestration" leaves room for explicit orchestration via protocols).

No surprises in the jump scan. Frontier confirmed stable.

---

## Gaps and Recommendations for Next Disciplines

### Bounded gaps (interpolatable, not blocking)

- **What the user wants to do with the doc** — keep / update / archive — depends on weighing the evidence found in this exploration. Sensemaking can collapse this ambiguity.
- **Priority among the 6 missing protocols** — which to build first depends on autonomy-ladder progression. Decomposition can partition this.
- **Whether protocols should be a "dimension" (a parallel concept) or just a label for existing operational concerns inside commands** — this is the architectural question. Innovation can surface alternatives.

### What sensemaking should anchor on

- The protocols doc is internally consistent and conceptually sound.
- The doc's per-protocol *status table* is partially stale (2 protocols' claimed implementations are gone; RESUME is more generalized than claimed; folder_based.md location is wrong; battle-tested-ness of folder convention is wrong).
- 6 protocols are still missing AND map directly to enes/desc.md's stated autonomy-ladder goals.
- The two-dimensions frame (disciplines × protocols) is supported by cross-domain analogy and by an internal logic test (GATE dissolution proves the frame can self-correct).

### What innovation should consider

- Three high-level paths:
  - (A) **Update + keep** the protocols doc as living spec. Refresh stale status entries; treat as architectural map of operational gaps.
  - (B) **Refactor** — extract per-protocol rationale into per-protocol files (one file per named protocol with status, spec sketch, and links to existing implementations); turn `desc.md` into an index.
  - (C) **Dissolve the dimension framing** — accept that protocols are "operational concerns absorbed into commands" rather than a parallel dimension; deprecate the doc as a separate concept; keep the named-protocol vocabulary informally.
- Sub-paths within "build missing protocols" — which subset to formalize first (e.g., VERSION first because Baldwin cycle depends on it; HANDOFF/BRIEF first because autonomy depends on them; etc.).

### What critique should evaluate

- Whether the "still relevant" verdict survives the strongest case for "superseded" (i.e., that all the alive protocols are now adequately embedded in commands and the dimension frame adds no value beyond labeling).
- Whether the "missing piece" verdict survives the strongest case for "deferred" (i.e., that /intuit Phase A is the immediate next step per enes/desc.md and protocol-building should wait until that ladder rung is climbed).
- Whether path A / B / C are genuinely distinct or whether two of them collapse into the same actions.
