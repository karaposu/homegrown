---
status: active
compares: devdocs/nav_should_be.md
compares_with: devdocs/inquiries/2026-05-10_11-22__navigation_organization_structure/finding.md
related: devdocs/inquiries/2026-05-10_03-50__navigation_established_audit/finding.md
---
# Finding: nav_should_be vs recent discussion — comparison

## Question

Compare `devdocs/nav_should_be.md` (the user's two-mode navigation vision: codebase-wide staged concept map + local directional artifacts) with the recent discussion at `devdocs/inquiries/2026-05-10_11-22__navigation_organization_structure/finding.md` (the per-inquiry-centered design with `navigation_observer_<N>.md` + `_nav.md` + deferred `_meta_state.md`). For each navigation-related use case, which design does it better? Are they competing alternatives, or do they target different things?

## Goal

A use-case-by-use-case comparison the user can read in one pass to decide: do the two designs **complement** (each handles different use cases), **conflict** (same use case, different shapes — pick one), or is one a **subset** of the other? Plus: a recommendation for what to do next.

## Finding Summary

- **They COMPLEMENT, not CONFLICT.** The two source documents target two **different cognitive operations**, not two designs of the same thing.
  - **Recent discussion** organizes the canonical `/navigation` discipline's artifacts. Operation: **post-cycle next-move enumeration**. Unit: **typed routes** (DEEPEN / REFINE / REVISIT / etc. per the 16-type taxonomy). Input: a finished SIC cycle in an inquiry folder. Output: list of typed routes with 12 fields each. Scaling: bounded.
  - **nav_should_be** describes a NEW capability (currently absent from the project). Operation: **concept-mapping** (territory discovery + categorization at progressive resolution). Unit: **concepts** (topics in the thinking-space). Input: codebase OR a local direction (raw territory). Output: hierarchical concept tree at progressive resolution. Scaling: potentially huge → staged execution required.

- **The load-bearing distinction is the unit of enumeration.** Concepts (topics like "how to handle errors in loop outputs") and typed routes (action-directions like "DEEPEN the X concept") are different units. /navigation's 16-type taxonomy is for action-directions, not topic-categories. Concept-mapping needs its own concept-categories taxonomy (TBD).

- **Per-use-case fit (10 cases):**

  | # | Use case | Best fit | Why |
  |---|---|---|---|
  | 1 | Codebase orientation | **nav_should_be** (Discussion 1) | Designed for it: staged big-concept enumeration |
  | 2 | Per-inquiry next-direction | **Recent** | Canonical /navigation's exact charter |
  | 3 | Concept discovery | **nav_should_be** (both Discussions) | Concept is the unit |
  | 4 | Resolution progression (coarse → fine) | **nav_should_be** (Discussion 1) | Explicit staged for-loop |
  | 5 | Cross-inquiry traversal | **Tie** | Both deferred to similar future infra |
  | 6 | Selection memory & decision history | **Recent** | `_nav.md` covers this canonically |
  | 7 | UI / visualization | **nav_should_be** (Discussion 2) | Future UI vision explicitly described |
  | 8 | Merging / aggregating maps | **Tie** | Both pre-operational; nav_should_be has more conceptual content |
  | 9 | Bloat prevention | **Recent** | `_nav.md` is the structural fix |
  | 10 | Onboarding / new contributor orientation | **nav_should_be** (Discussion 1) | Big-concept map IS this artifact |

  **Tally:** nav_should_be wins 5; Recent wins 3; ties 2. The wins divide cleanly by operation — nav_should_be wins concept-mapping use cases; Recent wins post-cycle-navigation use cases.

  *(Note on the matrix: some verdicts compare "design intent" — what nav_should_be envisions but doesn't yet operationalize — against "operational delivery" — what the recent discussion ships ready-to-apply. The two source documents are at different abstraction levels. The hybrid framing is the honest way to compare apples-to-apples per use case; it isn't pre-baked toward either side.)*

- **Verification of existing infrastructure: PARTIAL.** I read `homegrown/protocols/multi_resolution_navigation.md` in full to check whether it already covers nav_should_be Discussion 1. Result: **its structural patterns (frontier ledger; coverage modes; staged expansion; resume contract) are reusable BUT the protocol cannot bootstrap concept-mapping from a codebase.** It assumes a parent Navigation map exists (per Step 2: *"If the parent map does not exist and the source authorizes creating it, run Navigation first"*) — and `/navigation` requires a finished SIC cycle as input, which doesn't exist for "the whole codebase." The bootstrap-from-territory operation is missing — that's the new capability nav_should_be Discussion 1 actually proposes.

- **Recommendation: keep Recent as-is; introduce concept-mapping as a new lightweight protocol when ready.** The recent discussion's design is correct for canonical `/navigation` organization — no changes from this analysis. Concept-mapping is a NEW capability the project doesn't have today; introduce it as a new lightweight protocol (suggested file: `homegrown/protocols/concept_mapping.md`) **when the user is ready and has a manual concept-mapping run that produces evidence.** Per `homegrown/protocols/loop_diagnose.md` Step 5, defer the full protocol-spec until N>1 evidence accumulates; one manual run is the bridge.

- **Vocabulary resolution.** The user can keep saying "navigation" in conversation. At the discipline level, three names disambiguate:
  - `/navigation` (existing canonical) — post-cycle typed-route enumeration.
  - **Concept-mapping** (new operation; label TBD — could be `/concept-map`, `/atlas`, or other; user picks).
  - `/multi_resolution_navigation` (existing protocol) — frontier-preserving expansion of Navigation maps; structural patterns may inspire a future concept-mapping expansion mechanism.

  *Note: `nav_should_be.md` is the user's historical vision document. It uses "navigation" for both operations. It is not retroactively edited. Future readers should interpret its "navigation" as covering both `/navigation` (canonical) and concept-mapping (new), per this finding's disambiguation.*

---

## Finding

### Surrounding context

This inquiry sits inside the homegrown thinking-engine project. Two prior findings inform it:
- `devdocs/inquiries/2026-05-10_03-50__navigation_established_audit/finding.md` — establishes that `/navigation` is CANONICAL by charter (single-operation enumeration of typed next-directions; runs after a SIC cycle).
- `devdocs/inquiries/2026-05-10_11-22__navigation_organization_structure/finding.md` — organizes the artifacts for the canonical operation (per-run `navigation_observer_<N>.md` + per-folder `_nav.md` + deferred `_meta_state.md`).

The user's `devdocs/nav_should_be.md` describes a vision they want for navigation. The vision spans two modes (codebase-wide concept enumeration in stages; local directional concept-mapping). The vision feels like it might compete with the recent discussion's per-inquiry organization. This inquiry investigates whether they actually compete, or do something different.

### 1. Two operations, not two designs

The structural distinction:

| Property | Canonical `/navigation` (recent discussion organizes) | Concept-mapping (nav_should_be's vision) |
|---|---|---|
| **Input** | A finished SIC cycle in an inquiry folder | A territory: codebase root (Discussion 1) or local direction / source-files (Discussion 2) |
| **Unit of enumeration** | **Typed route** — an action-direction (DEEPEN, REFINE, REVISIT, MERGE, etc.) per the 16-type taxonomy | **Concept** — a topic / area of the thinking-space (e.g., "how to handle errors in loop outputs") |
| **Output** | List of typed routes with 12 fields each | Hierarchical concept tree at progressive resolution |
| **Scaling** | Bounded (one inquiry's worth) | Potentially huge — staged execution required |
| **Taxonomy** | 16-type action-direction (Content / Process / Context-directed) | Concept-categories (TBD; not 16-type) |
| **When invoked** | After every SIC cycle (when user wants next-directions) | Episodically: codebase-wide bootstrap; local bootstrap when entering a new direction |
| **Charter** | CANONICAL: enumeration of typed next-directions; one operation; complete-and-typed | NEW operation; not in current project capabilities |

Five structural differences (input, unit, output, scaling, taxonomy). Even if you collapsed the unit distinction (arguing /navigation's `Goal` field already references concepts), the input and scaling differences alone force structural separation.

**Verdict: COMPLEMENT, not CONFLICT.** They are two different cognitive operations. Trying to fold concept-mapping into `/navigation` would break `/navigation`'s single-operation invariant (per audit's CANONICAL framing A2).

### 2. Per-use-case fit

For each of 10 navigation-related use cases:

| # | Use case | Best fit | Reasoning |
|---|---|---|---|
| 1 | **Codebase orientation** ("what does this codebase contain at a high level?") | **nav_should_be** (Discussion 1) | Designed for it: staged enumeration of big concepts. The recent discussion has no codebase-wide capability. |
| 2 | **Per-inquiry next-direction** ("I just finished an MVL+ run; what's next?") | **Recent** | Canonical `/navigation`'s exact charter; recent discussion provides the artifact organization (`navigation_observer_<N>.md` + `_nav.md`). |
| 3 | **Concept discovery** ("what concepts exist in / around X?") | **nav_should_be** (both Discussions) | Concept is the unit; Discussion 1 wide-scope, Discussion 2 local. |
| 4 | **Resolution progression** (coarse → fine without committing early) | **nav_should_be** (Discussion 1) | Explicit staged for-loop progression; recent discussion has no resolution-progression mechanic. |
| 5 | **Cross-inquiry traversal** ("how does navigation move across many inquiries?") | **Tie** | Recent defers to `_meta_state.md`; nav_should_be defers to "merging local maps." Both pre-operational; future infra. |
| 6 | **Selection memory & decision history** ("what did I decide about each direction; why?") | **Recent** | `_nav.md`'s Selections + History sections cover this canonically; nav_should_be doesn't address. |
| 7 | **UI / visualization** ("click a node to dive in") | **nav_should_be** (Discussion 2) | Future UI vision explicitly described; recent discussion doesn't mention UI. |
| 8 | **Merging / aggregating maps** | **Tie** | nav_should_be names "artifacts can be combined"; recent defers to `_meta_state.md`. Both pre-operational; nav_should_be has slightly more conceptual content. |
| 9 | **Bloat prevention** ("don't scatter navigation work across 28 inquiries") | **Recent** | `_nav.md` is the structural fix; nav_should_be doesn't address (different concern at a different level). |
| 10 | **Onboarding / new contributor orientation** ("what's the project about?") | **nav_should_be** (Discussion 1) | Big-concept map IS this artifact; recent discussion has no onboarding capability. |

The wins divide cleanly by operation:
- **nav_should_be wins** the concept-mapping use cases (orientation / discovery / resolution / UI / onboarding) — 5 wins.
- **Recent wins** the post-cycle-navigation use cases (per-inquiry next-direction / selection memory / bloat prevention) — 3 wins.
- **Ties** are the cross-inquiry / consolidation use cases (#5, #8) — neither design fully operationalizes them.

**Note on abstraction asymmetry.** Some verdicts compare "design intent" (nav_should_be envisions UI / onboarding but doesn't yet operationalize) against "operational delivery" (recent discussion ships ready-to-apply specs for selection memory / bloat prevention). The two source documents are at different abstraction levels — nav_should_be is vision/strategy; recent discussion is operational organization. The hybrid framing is honest; verdicts say "designed for it" or "operationally delivers" depending on what each source actually claims.

### 3. Verification — does `multi_resolution_navigation` already cover Discussion 1?

I read `homegrown/protocols/multi_resolution_navigation.md` in full (567 lines).

**What it does:** expands routes from a parent Navigation map into child Navigation maps at multiple resolution levels, preserving the full expansion frontier via `_frontier.md`. Coverage modes: `exhaustive` / `budgeted` / `sampled`. Each child map is itself a Navigation map (typed-route enumeration).

**What it requires:** a parent Navigation map that already exists OR is creatable via `/navigation`. Per Step 2: *"If the parent map does not exist and the source authorizes creating it, run Navigation first."* And `/navigation` requires a finished SIC cycle as input.

**Does it cover nav_should_be Discussion 1?** **PARTIAL.**

| Aspect | nav_should_be Discussion 1 | multi_resolution_navigation | Match? |
|---|---|---|---|
| Input | Codebase (no prior map) | Parent Navigation map (must exist or be creatable via Navigation) | **NO** — multi-res requires a parent map; Navigation can't bootstrap one without a SIC cycle |
| Output unit | Concepts (topics) | Typed routes (16-type taxonomy via canonical Navigation discipline) | **NO** — different units |
| Staging mechanic | Sequential for-loop (10 → 50 → 200 nodes) | Coverage modes + frontier ledger preserve coverage across resolution levels | **PARTIAL** — the *pattern* (staged expansion with preservation of unexpanded items) matches conceptually |
| Frontier preservation | "We pick a sub-concept and run navigation toward it" | Explicit `_frontier.md` ledger with status fields | **MATCH** — same need; `multi_resolution_navigation` makes it operational |
| Resume / continuation | User envisions running each stage manually | Step 11 explicit: pending candidates + resume-from instruction | **MATCH** — both want manual / staged continuation |

**Conclusion:** `multi_resolution_navigation`'s structural patterns (frontier ledger; coverage modes; staged expansion; resume contract) are **directly reusable** by a future concept-mapping protocol. But the protocol itself **cannot be invoked as-is** for concept-mapping because it assumes typed-route Navigation as the unit and requires a parent Navigation map for bootstrap. The bootstrap-from-territory operation is missing.

So `multi_resolution_navigation` is "closer to nav_should_be Discussion 1 than I expected, but operates on the wrong unit and assumes a different bootstrap." Three implications:

1. The structural patterns in `multi_resolution_navigation` are inspiration / template for a future concept-mapping protocol.
2. Concept-mapping needs its own **bootstrap operation** (raw codebase → first concept map) — this is the new primitive.
3. After bootstrap, concept-mapping can borrow `multi_resolution_navigation`'s expansion patterns by analogy.

### 4. Recommendation

#### Immediate

**Keep the recent discussion's design as-is.** It correctly organizes canonical `/navigation`'s artifacts. No changes from this analysis. The 4 spec edits the recent discussion proposes (navigation/SKILL.md, navigation/references/navigation.md, runtime_environment/folder_based.md, protocols/branch_inquiry.md) remain ACTIONABLE on user trigger.

#### Deferred (when user is ready)

**Introduce concept-mapping as a new lightweight protocol** when the user wants the capability. Suggested:
- File: `homegrown/protocols/concept_mapping.md`.
- **Bootstrap-from-territory operation** as the new primitive: given a codebase root OR a local direction, produce a first-stage concept map (~5-15 concepts).
- **Borrows `multi_resolution_navigation`'s structural patterns:** frontier ledger (call it `_concepts_frontier.md` or fold into a single `_concept_map.md`); coverage modes; child-map expansion at progressive resolution; resume contract.
- **Uses concept-categories taxonomy** (TBD; not the 16-type action-direction taxonomy). Initial sketch: structural / process / domain-specific / cross-cutting / open-frontier — to be refined when the protocol is written.
- **Output:** concept tree, with node records that include topic, parent-concept, child-concepts, status, last-touched-by-inquiry pointers.

**Status: DEFERRED per Step 5.** This proposal is N=1 evidence (one user vision document); defer full spec until at least one MANUAL concept-mapping run produces evidence on what the protocol should look like.

**Revival trigger:** the user wants the capability AND is ready to invest in a manual run. Procedure:
1. Manually run a concept-mapping pass on the codebase (no protocol; just LLM + you reading + structuring).
2. The resulting artifact (an md file with ~10 big concepts and their ~5-10 sub-concepts each) becomes the evidence.
3. Use that artifact to write the protocol spec, with informed choices about taxonomy / fields / structure.

#### Vocabulary

The user's "navigation" stays as a broad-concept word in conversation. At the discipline / spec-file level:

| Name | Meaning |
|---|---|
| `/navigation` | The canonical discipline (post-cycle typed-route enumeration). |
| Concept-mapping | The new operation (label TBD by user). |
| `/multi_resolution_navigation` | The existing protocol (frontier-preserving expansion of Navigation maps). |

`nav_should_be.md` remains the user's historical vision document. It uses "navigation" for both operations and is not retroactively edited. Future readers should interpret its "navigation" as covering both `/navigation` (canonical) AND concept-mapping (new), per this finding's disambiguation.

#### What to do next

1. **Read this finding.** Decide if the operation distinction (concept-mapping vs canonical `/navigation`) feels right.
2. **If yes:** confirm that recent discussion stays as-is for `/navigation`; defer concept-mapping protocol-writing.
3. **When ready for concept-mapping:** do a single MANUAL concept-mapping run on the codebase (no protocol; just LLM + you reading + structuring); use the resulting artifact as evidence to write the protocol.
4. **Eventually:** when concept-mapping protocol exists, consider whether `multi_resolution_navigation`'s patterns can be borrowed for staged concept-expansion.

---

## Next Actions

### MUST

- **What:** Confirm or correct the operation distinction (concept-mapping vs canonical `/navigation`).
  **Who:** user (judgment call).
  **Gate:** observable — when the user reads this finding and accepts / corrects the framing.
  **Why:** the rest of the recommendation depends on the operation distinction holding.

### COULD

- **What:** Do a single MANUAL concept-mapping run on the codebase to produce evidence for the future protocol.
  **Who:** user.
  **Gate:** condition-bound — when the user is ready to invest in concept-mapping.
  **Why:** this is the bridge from N=1 (one vision document) to N≥2 (one vision + one empirical artifact). Per Step 5 spirit, evidence is the unblocker for the protocol-writing.

### DEFERRED

- **What:** Write `homegrown/protocols/concept_mapping.md` (lightweight protocol).
  **Gate:** condition-bound — after at least one manual concept-mapping run produces an artifact, AND the user wants the capability codified.
  **Why if revived:** introduces a NEW project capability (concept-mapping at codebase + local scope); leverages `multi_resolution_navigation`'s structural patterns for staged expansion.

### Research Frontier

- **What:** Whether `multi_resolution_navigation`'s patterns can be formally specified as REUSABLE primitives (so concept-mapping doesn't duplicate the frontier-ledger / coverage-mode mechanics).
  **Why surface:** if the patterns are extractable, the project gains a generic "staged-expansion-with-coverage-preservation" capability that any future map-producing skill could adopt.
  **Next step if pursued:** separate inquiry on extracting reusable primitives from `multi_resolution_navigation`.

---

## Reasoning

### Why operations, not designs

Sensemaking surfaced the unit-of-enumeration distinction (concepts vs typed routes) as load-bearing. Critique stress-tested it (Ambiguity #1 in Sensemaking + D6 prosecution in Critique). The distinction holds because:
- Five structural differences exist (input, unit, output, scaling, taxonomy), not just one.
- Even if the unit difference were collapsed, the input difference (finished SIC cycle vs raw codebase) and scaling difference (bounded vs huge) hold independently.
- The audit's CANONICAL framing of `/navigation` (A1-A3: enumeration of typed next-directions; one operation; complete-and-typed) explicitly bounds `/navigation` away from concept-mapping.

The "complement, not conflict" verdict follows from the operations being distinct — comparing the two designs as alternatives at the same level is a category error.

### Why "introduce concept-mapping" rather than "fold into /navigation"

Folding concept-mapping into `/navigation` would break the single-operation invariant the audit established. Plus: `/navigation`'s 16-type taxonomy is action-directions (verbs) — it doesn't fit topic-categories (nouns). A concept-mapping mode would need a different taxonomy, different input, different scaling treatment. These structural differences are too large to share a discipline.

### Why DEFERRED rather than ACTIONABLE on the new protocol

Per `homegrown/protocols/loop_diagnose.md` Step 5: don't propose broad fundamentals rewrites from one weak correction chain. Here the evidence is N=1 (the user's vision document). A new lightweight protocol is not a "broad fundamentals rewrite," but introducing a new capability still benefits from N>1 evidence. The bridge is: one manual run → evidence → write the protocol. This honors Step 5 spirit while not blocking the user's stated desire to have the capability.

### Why the matrix's vision-vs-spec asymmetry is honest

Some verdicts assign wins to nav_should_be on use cases (UI, onboarding) where nav_should_be VISIONS but doesn't operationalize. This was challenged in Critique (D7 prosecution: pre-bakedness?) and defended by acknowledging the asymmetry openly. The verdicts say "designed for it" or "operationally delivers" depending on what each source actually claims. The hybrid framing is the only honest way to compare apples-to-apples per use case across two source documents at different abstraction levels.

### Why `multi_resolution_navigation` verification result is PARTIAL not YES

`multi_resolution_navigation` has structural patterns nav_should_be Discussion 1 needs (staged expansion + frontier preservation), but the protocol explicitly assumes a parent Navigation map (Step 2). Navigation requires a SIC cycle as input. There is no SIC cycle for "the whole codebase." So the bootstrap is missing. The patterns are reusable; the protocol is not invocable for concept-mapping bootstrap.

### Self-reference handling

This analysis uses Sensemaking + Decomposition + Innovation + Critique disciplines (siblings to `/navigation`) to compare two `/navigation`-related designs. Mitigations:
1. **External anchoring** — quoted directly from spec / protocol / audit text (multi_resolution_navigation Step 2; audit M1; recent finding's per-run schema).
2. **Operation distinction stress-tested** in two independent challenges (Sensemaking Ambiguity #1; Critique D6 prosecution) — held both times.
3. **Refused trivial SURVIVE** on P2 + P4 — abstraction-asymmetry note + historical-document note added.
4. **Step 5 honestly applied** — concept-mapping protocol is DEFERRED with evidence-gated revival, not committed.

---

## Open Questions

### Monitoring

- **Will the operation distinction (concept-mapping vs `/navigation`) feel right to the user as they engage with concept-mapping in practice?** Observable when the user does their first manual concept-mapping run. If the distinction holds in practice, the protocol-writing path is justified. If the distinction blurs (e.g., the user finds themselves wanting to use `/navigation`'s 16-type taxonomy for concepts), reconsider.

- **Will a single manual concept-mapping run produce enough evidence to write the protocol?** Observable when the run is done. If the artifact is rich enough to specify the protocol, proceed. If too thin, do another.

### Blocked

- **Writing `homegrown/protocols/concept_mapping.md`.** Cannot ship until at least one manual concept-mapping run produces an evidence artifact.

### Research Frontiers

- **Extracting `multi_resolution_navigation`'s patterns as reusable primitives** (frontier ledger; coverage modes; staged expansion; resume contract) — could become a generic "staged-map-expansion" primitive any map-producing skill borrows. Out of scope here.

- **The unit-of-enumeration distinction at the project level.** Other discipline outputs may have similar concept-vs-action distinctions worth surfacing (e.g., does Reflect produce concepts or actions? Does Explore?). Cross-discipline question; out of scope.

### Refinement Triggers

- **The "complement, not conflict" verdict** re-opens if a future concept-mapping run reveals genuine overlap with `/navigation` that wasn't visible from the source documents. The unit distinction is supportable from N=2 designs; an empirical run could either confirm or challenge it.

- **The "introduce concept-mapping as new protocol" recommendation** re-opens if the user prefers an alternative path (e.g., extending `/navigation`'s charter; adding a mode to `multi_resolution_navigation`; etc.). Currently the recommended path is the cleanest by structural argument; user preference may differ.

- **The vocabulary disambiguation** re-opens if `nav_should_be.md`'s ambiguity becomes a recurring source of confusion. Currently bounded; if the user wants to revise nav_should_be.md to use disambiguated names, that's a small edit.

---

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
devdocs/nav_should_be.md

read this fully. 

this is how nagivation shouild work 

Compare this with recent discussion, and tell me which one does better for what
```

</details>
