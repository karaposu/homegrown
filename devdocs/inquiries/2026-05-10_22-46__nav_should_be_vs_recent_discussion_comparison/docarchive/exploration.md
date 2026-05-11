# Exploration: nav_should_be vs recent discussion — comparison

## 1. Mode and Entry Point

- **Mode:** Artifact exploration. Two concrete design documents to inspect:
  - `devdocs/nav_should_be.md` (the user's two-mode navigation vision, written 2026-05-10).
  - `devdocs/inquiries/2026-05-10_11-22__navigation_organization_structure/finding.md` (the recent discussion's per-inquiry-centered design).
- **Entry point:** Signal-first. The user named the comparison + use-case fit they want.

---

## 2. Territory Overview

8 regions:

- **R-A:** `nav_should_be.md` Discussion 1 — codebase-wide / un-directed navigation, staged enumeration, progressive resolution.
- **R-B:** `nav_should_be.md` Discussion 2 — local / directional navigation; produces local artifacts that may contribute to the big map.
- **R-C:** Recent discussion's per-run `navigation_observer_<N>.md` (typed-route enumeration via the canonical 16-type taxonomy + 12 route fields).
- **R-D:** Recent discussion's per-folder `_nav.md` (selection state, history, spawned children, open directions).
- **R-E:** Recent discussion's per-meta-session `_meta_state.md` (deferred; cross-inquiry traversal).
- **R-F:** Use cases (the ten enumerated below).
- **R-G:** The **unit-of-enumeration distinction** — `nav_should_be.md` enumerates **concepts/nodes** (topics in the thinking space); recent discussion enumerates **typed routes** (action-directions like DEEPEN, REFINE, REVISIT applied to a finished cycle).
- **R-H:** The **operation distinction** — `nav_should_be.md` is doing **concept mapping** (what exists; what's around; progressive resolution); recent discussion is doing **post-cycle next-move enumeration** (given a finished cycle, what should happen next).

---

## 3. Inventory (per region)

### R-A: `nav_should_be.md` Discussion 1 — codebase-wide concept map

The user's words, distilled:
- Run navigation on the WHOLE codebase with **no particular direction**.
- **Stage 1:** produces ~10 big concepts (e.g., "how to run loops"; "how to handle errors in loop outputs"; "how to find new disciplines"; "how to improve current discipline"; "how to diagnose a problem within a discipline").
- **Stage 2:** for each of stage 1's 10 concepts, enumerate ~5-10 sub-concepts AROUND it. Result: ~50-100 nodes.
- **Stage 3:** for each of stage 2's, enumerate again. Result: ~200 nodes.
- The progression is "for-loop-like" — sequential, depth-then-breadth.
- The result is a **hierarchical concept tree at progressive resolution**.
- LLMs are bad at huge-output enumeration; staging makes it tractable.
- At first version, **the user manually triggers each stage** (acceptable).
- Future: automation possible.

Output character: nodes/concepts, NOT typed routes. The unit is "an area of the thinking space" not "an action-direction."

### R-B: `nav_should_be.md` Discussion 2 — local directional navigation

The user's words, distilled:
- Pointed at **source files / a direction** (not the whole codebase).
- Produces a **local artifact** (md file) — same kind of work as Discussion 1 but local.
- Finds concepts AROUND the pointed-at thing.
- Categorizes them; produces status info per concept ("how much they were considered, how much they've been worked on, are they blocked").
- References "the 12 or 16 categories" — connects to the canonical Navigation discipline's taxonomy.
- **Local artifacts do NOT directly edit the big-map file**. They're separate.
- They **CAN later be merged** into the big map (separate process; not automatic).
- Iterative invocation: pick a sub-concept → run navigation toward it → another local artifact → "creating resolution / killing ambiguity / enlightening a map."
- **Future UI vision:** click a node, system runs MVL+ underneath, user navigates the thinking space.

Output character: still concepts but local; partially aligns with the canonical discipline's typed-route output via the "12 or 16 categories" reference.

### R-C: Recent discussion's per-run `navigation_observer_<N>.md`

Per `devdocs/inquiries/2026-05-10_11-22__navigation_organization_structure/finding.md`:
- Per-run artifact in source-inquiry folder.
- Sequential N (1, 2, 3, …); never overwritten.
- Contents: navigation map (16-type taxonomy + 12 route fields per the canonical Navigation discipline) + warming-summary + timestamp.
- Output unit: **typed routes** (DEEPEN / REFINE / PURSUE SEED / REVISIT / etc.) applied to ONE inquiry's just-completed cycle.
- Operation: **post-cycle next-move enumeration** — the canonical Navigation discipline's charter is to enumerate next-directions after a SIC cycle completes.

### R-D: Recent discussion's `_nav.md`

- Per-folder index for one inquiry's navigation activity.
- 5 sections: Runs / Selections / Spawned Children / Open Directions / History.
- Action-type vocabulary for Selections (SPAWN-CHILD / REVISIT / MERGE / CONSOLIDATE / TEST / OTHER + DEFERRED / REJECTED).
- Owner-split across writers (Navigation discipline / Selector / branch_inquiry / all-via-History).
- Captures **selection memory + decision history** — what was decided about each direction, why, with what kill-conditions or deferral gates.
- Optional (created when navigation runs at least once in this folder).

### R-E: Recent discussion's deferred `_meta_state.md`

- Cross-inquiry traversal layer.
- Out of scope for the recent discussion; future meta-loop runner concern.
- Would aggregate across many `_nav.md` files.

### R-F: Use cases

The 10 use cases I'll evaluate per design:

1. **Codebase orientation** — "what does this codebase contain at a high level?"
2. **Per-inquiry next-direction** — "I just finished an MVL+ run; what should I do next?"
3. **Concept discovery** — "what concepts exist in/around X?"
4. **Resolution progression** — "zoom from coarse to fine without committing early."
5. **Cross-inquiry traversal** — "how does navigation move across many inquiries?"
6. **Selection memory & decision history** — "what did I decide about each direction; why?"
7. **UI / visualization** — "click a node to dive in."
8. **Merging / aggregating navigation results** — "combine multiple local maps into one big map."
9. **Bloat prevention** — "don't scatter navigation work across 28 inquiries."
10. **Onboarding / new contributor orientation** — "what's the project about?"

### R-G: Unit-of-enumeration distinction

This is the load-bearing distinction.

- **`nav_should_be.md` enumerates CONCEPTS** — areas of the thinking space (e.g., "how to handle errors in loop outputs," "how to find new disciplines"). These are TOPICS, not actions. They're discovered by looking around the codebase / current direction and naming what's there.

- **Recent discussion enumerates TYPED ROUTES** — action-directions per the 16-type taxonomy (DEEPEN, REFINE, PURSUE SEED, REVISIT, etc.) applied to a specific cycle's output. These are MOVES you can make from a current state.

A typed route is "act on this finding by deepening it"; a concept is "this area exists in the thinking space." Different units. A typed route's `Goal` field might reference a concept ("DEEPEN the 'session resumability' concept"), but the route is the action; the concept is the target.

### R-H: Operation distinction

- **Concept mapping** (`nav_should_be.md`): given a territory (codebase or local direction), discover and categorize what concepts exist. Output = a map of concepts. Iterative: deeper resolution as you progress.
- **Post-cycle next-move enumeration** (recent discussion / canonical Navigation discipline): given a just-finished SIC cycle's output, enumerate the typed routes you could take next. Output = a list of action-directions with type tags + 12 route fields each.

These are **different cognitive operations**:
- Concept mapping is bottom-up discovery: "what's here?"
- Next-move enumeration is top-down decision-prep: "given where I just landed, where can I go?"

---

## 4. Signal Log

| ID | Signal | Source / type | Action |
|---|---|---|---|
| S1 | The user's note describes TWO modes; the recent discussion covers ~one mode (mostly Discussion 2 territory) | R-A, R-B vs R-C, R-D | **Probed** — non-overlap is real |
| S2 | nav_should_be enumerates CONCEPTS; recent enumerates TYPED ROUTES — different units | R-G | **Probed** — operation distinction follows |
| S3 | nav_should_be Discussion 2 references "12 or 16 categories" — partial overlap with recent's taxonomy | R-B | **Probed** — overlap exists at the local-directional layer |
| S4 | nav_should_be has explicit codebase-wide tier; recent has none | R-A vs all | **Probed** — gap is real |
| S5 | Recent has explicit selection-memory / decision-history; nav_should_be does not | R-D | **Probed** — recent does this better |
| S6 | nav_should_be envisions UI / visualization; recent does not | R-B | **Probed** — nav_should_be does this better |
| S7 | nav_should_be Discussion 1's staged for-loop progression maps to "resolution progression" | R-A | **Probed** — recent has no analog |
| S8 | Both designs talk about "merging local maps into a big one" but at different levels | R-B vs R-E | **Probed** — recent defers; nav_should_be names but doesn't operationalize |
| S9 | "Bloat prevention" was the user's stated motivation in the recent discussion; not in nav_should_be | R-D | **Probed** — recent does this; nav_should_be doesn't address |
| S10 | nav_should_be Discussion 2's iterative "creating resolution" matches recent's "iterative inquiry chains" pattern | R-B vs project-wide | **Probed** — convergent at the chain-progression level |
| S11 | nav_should_be is operational-vague (no exact file shapes); recent is operational-precise (templates + ownership tables) | R-A, R-B vs R-C, R-D | **Probed** — recent is more shippable; nav_should_be is more visionary |
| S12 | The two might COMPLEMENT (different operations) rather than CONFLICT (same operation, different shape) | R-G + R-H | **Probed** — likely complementary |

---

## 5. Confidence Map

| Region | Status | Notes |
|---|---|---|
| R-A nav_should_be Discussion 1 | **Confirmed** | Direct read of nav_should_be.md |
| R-B nav_should_be Discussion 2 | **Confirmed** | Same |
| R-C recent's per-run | **Confirmed** | Direct read of recent finding |
| R-D recent's `_nav.md` | **Confirmed** | Same |
| R-E recent's deferred meta_state | **Confirmed** | Acknowledged as deferred in recent finding |
| R-F use cases (10 enumerated) | **Confirmed** | Standard navigation-related use cases |
| R-G unit-of-enumeration | **Confirmed** | Concepts vs typed routes; load-bearing distinction |
| R-H operation distinction | **Scanned** | Concept-mapping vs post-cycle next-move; consistent with R-G |
| Whether designs CONFLICT or COMPLEMENT | **Scanned** | Strong evidence for COMPLEMENT (different operations) |
| Whether nav_should_be Discussion 1 is a NEW capability or extends /navigation | **Scanned** | Sensemaking will resolve |
| Whether the local directional layer in nav_should_be Discussion 2 is the same as recent's per-inquiry navigation, or different | **Scanned** | Partial overlap; needs careful disambiguation |

No unknown adjacent to confirmed — gaps are at design-decision level for next disciplines.

---

## 6. Frontier State

**Stable.** Three exploration cycles converged:
- Cycle 1: surveyed both designs; identified 8 regions.
- Cycle 2: enumerated 10 use cases (R-F); started mapping each to designs.
- Cycle 3: surfaced the unit-of-enumeration distinction (R-G) and operation distinction (R-H) — these are the load-bearing differences.

Discovery rate: declining. Cycle 3 produced 2 new structural insights (R-G, R-H); no new regions.

Bounded gaps: the conflict-vs-complement question and the new-capability-vs-extension question are next-discipline (Sensemaking) work.

Convergence: **achieved**.

---

## 7. Gaps and Recommendations

### Use-case-fit preliminary inventory (to be sharpened by Sensemaking)

For each use case, an initial fit-call:

| # | Use case | nav_should_be.md fit | Recent discussion fit | Preliminary winner |
|---|---|---|---|---|
| 1 | Codebase orientation | Discussion 1 directly addresses (staged big-concept enumeration) | Not addressed | **nav_should_be** |
| 2 | Per-inquiry next-direction | Discussion 2 partial (local directional navigation) | Direct + canonical (navigation_observer per inquiry) | **Recent** |
| 3 | Concept discovery | Both (Discussion 1 wide; Discussion 2 local) — ENUMERATES CONCEPTS | Enumerates ROUTES (concept-via-route-Goal-field, indirectly) | **nav_should_be** for concept-as-unit; **Recent** for typed-route-as-unit |
| 4 | Resolution progression (coarse → fine) | Discussion 1 explicit staged for-loop | Not addressed | **nav_should_be** |
| 5 | Cross-inquiry traversal | Implicit via merging local maps | Deferred to `_meta_state.md` | **Tie** (both deferred to similar future infra) |
| 6 | Selection memory & decision history | Not addressed | `_nav.md` covers this canonically | **Recent** |
| 7 | UI / visualization | Future UI explicitly described | Not mentioned | **nav_should_be** |
| 8 | Merging / aggregating maps | Named ("artifacts can be combined") but not operationalized | Deferred to `_meta_state.md` | **nav_should_be** (named) vs **Recent** (deferred); both pre-operational |
| 9 | Bloat prevention | Not a stated concern | `_nav.md` is the structural fix | **Recent** |
| 10 | Onboarding / new contributor | Discussion 1's big map is exactly this | Not addressed | **nav_should_be** |

### The structural picture

- **Recent discussion** = organization layer for the **canonical /navigation discipline** (post-cycle typed-route enumeration). It does NOT do codebase-wide concept mapping. Its strength is per-inquiry navigation organization (selection memory; bloat prevention; decision history) and forward-compat with the meta-loop runner.

- **nav_should_be.md** = a BROADER VISION that includes:
  - **Discussion 1** = a NEW capability (codebase-wide staged concept mapping) that is NOT what the canonical /navigation does today.
  - **Discussion 2** = a related capability (local concept mapping in a direction) that PARTIALLY overlaps with /navigation but uses concepts-as-units instead of typed-routes-as-units.

### Likely conclusion (Sensemaking will refine)

The two designs **complement** each other; they're addressing different operations. The recent discussion's recommended structure is correct for post-cycle next-move enumeration; nav_should_be's vision adds a CONCEPT MAPPING capability that the project doesn't currently have.

The right answer is probably:
- **Keep recent discussion as-is** for canonical Navigation organization.
- **Treat nav_should_be Discussion 1 as a NEW capability** — needs a new skill/discipline (call it something like `/concept-map` or `/atlas`) that's distinct from `/navigation`.
- **Treat nav_should_be Discussion 2 as either** (a) a different invocation of `/navigation` that produces concept-output instead of route-output, or (b) a new local-concept-mapping skill that complements `/navigation`. Sensemaking will resolve.

### Recommendations to next disciplines

- **Sensemaking should:**
  1. Resolve whether nav_should_be Discussion 1 is a NEW capability (new skill) or an EXTENSION of /navigation.
  2. Resolve the local-concept-mapping vs canonical-navigation overlap (Discussion 2 vs recent discussion).
  3. Apply load-bearing concept tests on "concept" vs "typed route" — these are the load-bearing terms.
  4. Apply frame-exit perspective per the recently-proposed Sensemaking refactor candidate.

- **Decomposition should:**
  1. Partition the answer into: per-use-case verdicts; alignment/complement/conflict matrix; merge-or-keep-separate recommendation; identification of new-capability needs.

- **Innovation should:**
  1. Generate the per-use-case matrix in concrete form.
  2. Propose how to handle the gap (codebase concept mapping not currently a project capability).

- **Critique should:**
  1. Test whether the unit-of-enumeration distinction (concepts vs typed routes) is real or a forced framing.
  2. Test whether the recommended split (keep recent + add new capability) is over-engineering vs under-engineering.
  3. Apply self-reference resistance (this critique uses /navigation's discipline output for comparison).

### What was NOT explored (deliberate scope cuts)

- The exact spec for a new concept-mapping skill (out of scope; would be a follow-on inquiry).
- Whether nav_should_be's "200-node per stage 3" claim is realistic given LLM context limits (out of scope; operational concern).
- The UI vision (out of scope; far future).
