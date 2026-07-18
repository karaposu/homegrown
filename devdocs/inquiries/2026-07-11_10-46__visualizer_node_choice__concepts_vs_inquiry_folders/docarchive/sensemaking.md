# Sensemaking — visualizer node-choice: stabilizing the decision field

## User Input

devdocs/inquiries/2026-07-11_10-46__visualizer_node_choice__concepts_vs_inquiry_folders/_branch.md — with surfacing.md + articulate_warm.md read fully; warm anchor settled round 0; one MED resolvable content-conflict absorbed (the posed binary mis-sizes both poles). Stabilize A1 candidate-substrate fact-sets · A2 module-tier fact-set (chain shape = the one measurable unknown; resolve if cheap) · A3 doctrine fact-set · A4 purpose→unit fit matrix; collapse the 2 musts (tree-constraint; the binary's recast); leave open the recommendation, module pick, purpose priority. Proportionate SV1–SV6.

---

## SV1 — Baseline

The user wants to point a beautiful, working 3D nodemap at their project and can't pick the node-unit: generated concepts (semantically rich, machinery-heavy) or inquiry folders (native, machinery-free). First impression: folders look like the obvious low-cost pick, concepts like the ambitious one, and the honest answer probably involves "both, staged."

## Phase 1 — Anchors

**Constraints:** the node contract (`id/kind/title/parent/children/createdAt/lastWorkedAt/md`) — every node must supply a REAL markdown body; the interaction model (fly-to, effLast roll-up, module chips) presupposes a hierarchy spine; the module middle tier must be filled by SOMETHING; `pos` is always generated (layout), never data.

**Key insights:**
1. **The generation-cost line runs THROUGH "concepts," not between concepts and folders** (warm's absorbed conflict): canon (38), seeds (38), `_route` identities (490) are concept-grade and already written; only FREE-FLOATING extracted concepts need new machinery.
2. **The node-unit choice is a maintenance-mode choice** (A3): parse-only sources have zero marginal upkeep and grow with the project; generated bodies decay unless re-run (the writer-scale's dying end — the project's own routelog evidence).
3. **The corpus is already a graph** — ~650 typed relationship lines, and (measured this phase) CONTINUES-FROM chains organize **170/227 folders (75%) into 33 components** (sizes 23, 15, 10, 10, 10, 9, 9, 7, 7, 6, 5, 5, 5, 4, 4, …; 57 standalone). The "weird logic" the folder option needs is a regex + union-find, not intelligence — this dive's own Bash lines are the adapter's working prototype.
4. **Free-floating concepts have NO native md body anywhere** (surfacing's confirmed-absent) — the detail view would render synthesized text, a standing fabrication + staleness surface.
5. **The cross-layer edges already exist**: 202 RELATED lines point from folders at canon/seed files — the corpus natively prefigures a mixed-kind graph (folders + concept-artifacts), nobody has to invent it.

**Structural points:** four candidate node-substrates (folders / canon / seeds / `_route` identities) + one non-substrate (extracted concepts); two views (map, detail) with distinct data demands; the chain-components as the only SEMANTIC native grouping.

**Foundational principles (project-owned, verified in the 15-30 adjudication):** derived-on-demand views over runner-written records; the writer-scale predicts record survival; the suspicion-principle — a standing between-loop support is designed-or-dead until exercised.

**Meaning-nodes:** "native" = runner-written and parse-reachable (not "requires no code" — it requires a parse rule someone writes ONCE); "concept" has FOUR senses here (canon-curated / seed-individuated / route-individuated / LLM-extracted) — the question's word "concepts" silently meant only the fourth; "venture-shaped chain" = the canon vocabulary for what CONTINUES-FROM components are (one folder = one traverse's record — canon-verbatim; a chain = thread-continuity, the venture's identity mark).

### SV2 — Anchor-informed

The question transforms: not "concepts vs folders" but "which ALREADY-WRITTEN layer(s) feed the map, what fills the module tier, and does anything justify generated-and-maintained content?" The folder path is cheaper than the user thinks (chains measured, parse rules trivial) AND the concept path is cheaper than the user fears (three concept layers pre-exist) — while the specific concept path they imagined (extraction) is exactly as costly as they suspected.

## Phase 2 — Perspectives

- **Technical/Logical:** every folder-node contract field maps to a parse rule — id/createdAt ← folder name; title ← slug (needs a prettify + truncate rule; slugs run long); lastWorkedAt ← last History stamp; status ← Status field; md ← finding.md, with the ACTIVE-folder fallback ← _branch.md Question; parent ← chain-component (union-find over CONTINUES-FROM); pos ← force layout or golden-angle rings (as the demo does). New anchor: **the adapter is a ~100-line script emitting one JSON**; the demo's `NODES` object is exactly its output shape. Side-note: three.js ≥r152 needs `outputColorSpace` in place of the removed `sRGBEncoding`.
- **Human/User:** the detail view rendering finding.md means the map SHOWS THE REAL RECORD — reading a node = reading the project's actual distilled findings (high trust, high value). Rendering generated concept-summaries = reading text nobody wrote or adjudicated. Also: clicking a chain-module and seeing "last worked on … via subnode X" is literally "what did this venture do lately?" — the demo's roll-up becomes meaningful, not decorative.
- **Strategic/Long-term:** parse-only scales silently — every future inquiry adds itself to the map (the record is runner-written; the map is a view). A concept OVERLAY can arrive later on the stable substrate (canon/seed nodes + their 202 native cross-edges) without rework. Prospect, not claim: a working map is a candidate EYE for the unbuilt navigational-session organ — noted as kinship, no promotion here.
- **Risk/Failure:** (a) generated bodies → fabrication/staleness (anchor 4); (b) 33 modules renders busier than the demo's 8 — an ergonomics rule is needed (e.g., top-N chains as modules + "standalone" bucket, or chains-above-size-3 only), this is a RENDERING decision, not a data problem; (c) long slugs → chip truncation rule (cosmetic); (d) 8 SUPERSEDED/duplicate folders → mild noise, filterable by Status; (e) the tool itself may go unused (suspicion-principle) — the zero-upkeep design is precisely the hedge: a dead derived view costs nothing and lies about nothing.
- **Resource/Feasibility:** folder path = one afternoon (script + JSON + the demo's loader swapped). Existing-concept overlay = a second parse (canon H1s + `_seed.md` entries + the RELATED cross-edges). Extraction path = a standing LLM protocol + cross-inquiry identity resolution (genuinely unsolved) + re-run scheduling — a different order of commitment.
- **Definitional/Internal consistency:** canon already says one folder = one traverse-record and venture = thread-continuity chain — so folder-nodes + chain-modules is not merely convenient; it RENDERS THE CANON MODEL (the map would be a venture map: modules = ventures, subnodes = traverses). No canon contradiction found; the mixed-graph reading is prefigured by the native cross-layer edges. Frame-exit check (the term "concept" is multi-valued in our own structure): the four senses were enumerated at Phase 1 — no excluded referent found beyond them; recursion terminates.
- **Phase/Calibration:** no phase-dependent rule involved beyond the suspicion-principle's standing status — applies to the build regardless of node choice. Not further engaged.

### SV3 — Multi-perspective

Three perspectives produced NEW anchors (adapter-shape; real-record trust; render-the-canon-model), not just confirmations. The model now has a shape: **substrate vs overlay vs machinery** — a parse-only substrate (folders + chains) that IS the canon model rendered; existing concept layers as an optional overlay the corpus already links to; extraction as the only genuinely expensive path, needed by none of the near-term purposes.

## Phase 3 — Ambiguity Collapse

#### Ambiguity C1: Is the demo's strict 3-level tree a hard constraint?
**Strongest counter-interpretation:** the relationship data is a graph, so drop the hierarchy entirely — render a pure force-directed graph; any tree is a distortion.
**Why the counter fails (structural):** the component's value-carrying interactions — fly-to-focus, effLast roll-up, module chips, the detail view's parent/subnode panels — are DEFINED on a spine; a pure graph deletes the features the user's chosen demo centers. And the corpus HAS a natural spine (chains). The graph-ness is additive (extra edge lines), not substitutional.
**Confidence:** HIGH. **Resolution:** keep a tree spine (root → grouping → folder), render cross-links as additive edge types (RELATED thin lines; SUPERSEDED dashed). **Now fixed:** hierarchy stays. **No longer allowed:** pure-graph rewrites; also "the demo can't show cross-links" as an objection (it can — `edgeLines()` is generic). **Depends on this:** the module-tier question stays live (C3); Innovation may vary WHAT the spine is, not WHETHER.

#### Ambiguity C2: What is the question actually deciding? (the posed binary)
**Strongest counter-interpretation:** the user asked A-or-B; recasting to other axes dodges their question.
**Why the counter fails (structural):** the recast CONTAINS the binary and answers it more precisely — "folders" = a substrate choice (axis i) with parse-only maintenance (axis iii); "concepts" conflates four senses whose costs differ by an order of magnitude; answering on the axes answers the original WITHOUT the conflation. Warm's conflict-detection already showed both poles mis-sized; proceeding on the raw binary would decide against a strawman.
**Confidence:** HIGH. **Resolution:** the decision = (i) which existing layer(s) become nodes, (ii) what fills the module tier, (iii) parse-only vs generated-and-maintained. **Now fixed:** all downstream options are expressed on these axes. **No longer allowed:** treating "concepts" as one option with one cost. **Changed in the model:** the user's stated aversion lands on axis iii, where it is CORRECT — vindicating their instinct for the pole they named.

#### Ambiguity C3 (new, measured): Can chains fill the module tier natively?
**Strongest counter-interpretation:** 33 modules is too many and chain membership is incidental — use time-buckets (trivially native, predictable sizes).
**Why the counter fails (structural):** the counter's real content is ergonomic, not semantic — and ergonomics has in-component fixes (group chains below size N into a "standalone/misc" module; or top-12 chains + rest). Time-buckets carry no meaning: a month is not a unit of work, while a chain IS one (thread-continuity = venture identity, canon-defined) — the roll-up and "last worked on via X" displays only make sense over semantic groups. 75% native coverage measured; the 57 standalones need SOME residual rule under ANY grouping.
**Confidence:** HIGH on viability, MED on ergonomics (rendering rule needed). **Resolution:** chains = the primary native module candidate; residual rule required; time-buckets demoted to fallback/secondary lens. **Depends on this:** the recommendation's shape; the adapter's union-find step.

#### Ambiguity C4 (load-bearing test on the doctrine anchor): Is "parse-only survives, generated decays" the project's property or an imported default?
**Counter-interpretation:** it's a fashionable engineering heuristic imported without evidence.
**Why the counter fails (structural):** it is the project's own MEASURED history — routelog (habit-written): zero uses in a month, dead; `_seed.md` (protocol-written): alive and growing; spawning rationales (runner-written): captured verbatim. The 15-30 adjudication established exactly this scale on exactly this corpus.
**Confidence:** HIGH — with one honest bound: the scale predicts the DATA's survival, not the TOOL's use; the suspicion-principle still governs whether the visualizer earns trust (only exercise decides).

#### Ambiguity C5: Is free-floating extraction excluded?
**Counter-interpretation:** LLM extraction is cheap now; just run it — the knowledge-view purpose wants real concepts, not artifacts.
**Why the counter fails (structural, as a DEFAULT):** capability isn't the binding constraint — maintenance is: extracted concepts need generated md bodies (fabrication surface; confirmed-absent natively) + cross-inquiry identity resolution (unsolved) + re-runs to stay current (habit-end decay). But the counter has real merit CONDITIONALLY.
**Confidence:** MED-HIGH. **Resolution:** excluded-as-default, NOT excluded-forever — revival trigger: knowledge-view becomes the primary purpose AND the canon/seed overlay proves insufficient for it. **No longer allowed:** extraction as the FIRST build.

### SV4 — Clarified

What's clear: the substrate question has a measured, doctrine-backed answer-shape (folders + chains, parse-only); "concepts" split into an available overlay (canon/seeds/route — already written, already linked-to) and a gated machinery path (extraction). What's no longer viable: the raw binary; pure-graph rewrites; extraction-first; habit-maintained bodies. What stays open (deliberately): the ranked recommendation, the module rendering rule, purpose priority, overlay staging.

## Phase 4 — Degrees-of-Freedom Reduction

**Fixed:** the contract is satisfiable parse-only for folder-nodes (all fields mapped, incl. the ACTIVE-body fallback and parent-via-chains); chains measured (33 components / 75% / 57 standalone); the three decision axes; the doctrine's applicability; hierarchy spine retained with additive cross-links.
**Eliminated:** extraction-first; generated-and-maintained node bodies as the default; time-buckets as the primary semantic grouping; pure-graph rewrite.
**Viable paths remaining (for Innovation to develop, Critique to rank):** folder-substrate variants (chain-modules; time-fallbacks; status/flow lenses) · existing-concept overlays (canon+seed nodes with native cross-edges; `_route`-identity lens) · staged combinations · purpose-led variants (health-map emphasis vs venture-map emphasis vs knowledge-view emphasis).

### SV5 — Constrained

The solution space is now a SMALL family: one substrate (folder-nodes on a chain spine, parse-only) × optional overlays (existing concept layers) × a gated far-pole (extraction, trigger-defined) × rendering/purpose parameters. Nothing outside this family survived.

## Phase 5 — Conceptual Stabilization (SV6)

**The stabilized model:** This is a **three-axis staging decision disguised as a binary.** The corpus is already a machine-readable graph of work-records (227 nodes, ~650 typed edge-lines, 75% chain-organized) whose every contract field is a parse rule away; rendering it = rendering the canon model itself (modules = ventures, subnodes = traverses, detail body = the real finding). "Concepts" splits four ways: three layers already exist as written artifacts (canon, seeds, route-identities) and can join the map as an overlay the corpus already points at (202 cross-edges); the fourth (extraction) is the only pole that needs "weird logic," has no native md bodies, an unsolved identity problem, and decay-by-default — the user's aversion is vindicated exactly there and only there. The governing doctrine (derived-on-demand views; writer-scale; suspicion-principle) makes parse-only the survival-shaped default and keeps the tool honest even if it goes unused.

**Delta from SV1:** SV1 saw two options and guessed "both, staged." SV6 knows the field is one substrate + overlays + a gated pole; that the middle tier (invisible in SV1) is the real design gap and has a MEASURED native filler; that the binary's poles were both mis-sized; and that the project's own doctrine — not taste — does the ranking work. The recommendation itself is deliberately left for the gate.

---

## Saturation telemetry

Perspective saturation: reached (last two perspectives confirmed, no new types). Ambiguity resolution: 5/5 collapsed (C5 with an explicit revival trigger; none dropped). SV delta: substantial (binary → three-axis family; unknown → measured chains). Anchor diversity: all five types, multiple perspectives. Failure modes checked: status-quo bias (the doctrine anchor was TESTED, C4, not assumed); premature stabilization (three perspectives produced new anchors before collapse); anchor dominance (removing the writer-scale anchor leaves the contract-mapping + measurement anchors standing — multi-pillar); clean-resolution trap (counters stated structurally at C1–C5); self-reference (the map renders the project's own model — external grounding = the measured counts + the demo's actual code, both outside the vocabulary). **PROCEED.**
