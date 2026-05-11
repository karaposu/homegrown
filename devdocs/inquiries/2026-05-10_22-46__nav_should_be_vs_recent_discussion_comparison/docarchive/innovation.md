# Innovation: nav_should_be vs recent discussion — comparison

## User Input

Source: `/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-10_22-46__nav_should_be_vs_recent_discussion_comparison/_branch.md`

Comparison + use-case fit + verification of whether `homegrown/protocols/multi_resolution_navigation.md` already covers `nav_should_be.md` Discussion 1.

Per Decomposition: Innovation MUST execute P3 (verification step) by reading `multi_resolution_navigation.md` in full. **EXECUTED** — see Section P3 below.

---

## Seed and Direction

- **Seed: collision.** Two design documents at different abstraction levels (recent organization-spec vs the user's vision) appear to compete; Sensemaking found they target different operations.
- **Intuition direction:** clarify operations, not designs. Verify whether existing project infrastructure already covers nav_should_be Discussion 1. Recommend honestly.

---

## Phase 2 — Generate (focused mechanism work for validation)

Per Decomposition: minimum mechanism coverage suffices on validation. I apply 2 mechanisms.

### Mechanism 1 — Inversion (Framer): can existing protocols bootstrap concept-mapping?

**Inversion 1.1 — skip concept-mapping; use /navigation exhaustively on the codebase.** Counter: /navigation's input is a finished SIC cycle (per audit's CANONICAL framing M1 "after a SIC cycle (primary)"); there's no "codebase finished SIC cycle." `/navigation` can't be invoked without a completed inquiry. Reject.

**Inversion 1.2 — use multi_resolution_navigation directly on the codebase.** Counter: per `multi_resolution_navigation.md` Step 2: *"If `parent_map_path` exists, read it. If the parent map does not exist and the source authorizes creating it, **run Navigation first** and save the parent map."* — the protocol assumes Navigation can produce the bootstrap map. Without a SIC cycle to drive Navigation, the bootstrap can't happen. Reject.

**Inversion 1.3 — concept-mapping is unnecessary; the user can manually browse the codebase.** Counter: this IS what the user does today; the resulting work bloats and scatters (the 28-folder corpus). The user explicitly named bloat as the problem. Reject.

**Inversion result:** existing infrastructure CANNOT bootstrap concept-mapping from a codebase. Concept-mapping is a NEW primitive operation that the project doesn't have. Confirms Sensemaking's "different operation" verdict.

### Mechanism 2 — Domain Transfer (Generator): how do other systems do concept-mapping?

**Transfer 2.1 — code analysis / language server.** Tools like LSPs index symbols, build call graphs, extract docstrings. These produce a CONCEPT MAP automatically via static analysis. Transfer: concept-mapping could be partly **auto-derivable** from codebase scan (file structure, README extraction, function signatures, recent commit messages). Wouldn't replace LLM-powered concept enumeration but could provide structural anchors that the LLM elaborates on.

**Transfer 2.2 — onboarding handbooks.** Companies produce engineer-onboarding docs with topic categories ("how authentication works"; "how the API gateway routes"; "how deployments work"). Transfer: concept-mapping produces a similar artifact for the project — but generated dynamically via staged enumeration, not pre-written.

**Transfer 2.3 — knowledge graphs.** Nodes connected by edges with semantic types ("X is-a Y"; "X depends-on Y"). Transfer: concept-maps could have RELATIONSHIPS between concepts, not just flat lists. Adds richness for future UI / visualization. nav_should_be's "200 nodes" hints at this graph structure.

**Domain Transfer result:** concept-mapping is well-precedented in adjacent fields. Three transfers confirm the operation is real and the user's vision is structurally sound.

---

## Phase 3 — Test (5-test cycle on the recommendation framing)

| Test | Result |
|---|---|
| **Novelty** | Partial — separating operations isn't a new pattern (it's the project's anatomy-of-disciplines principle), but applying it here resolves a real ambiguity. |
| **Scrutiny survival** | Strong — survives 3 inversions (existing infrastructure can't cover Discussion 1) and 3 domain transfers (concept-mapping precedented in 3 fields). |
| **Fertility** | Strong — opens concept-mapping as a new project capability with concrete infrastructure-reuse ideas. |
| **Actionability** | Strong — recommendation has explicit branches based on verification. |
| **Mechanism independence** | Strong — Inversion eliminates "use existing" alternatives; Domain Transfer validates concept-mapping as a real operation. |

**Disposition:** ACTIONABLE for the comparison + recommendation. Concept-mapping spec itself is DEFERRED (Step 5; out of scope here).

---

## P1 — Operations distinction (committed)

The two designs target two different cognitive operations. Structural distinction:

| Property | Canonical /navigation (recent discussion organizes) | Concept-mapping (nav_should_be's vision) |
|---|---|---|
| **Input** | A finished SIC cycle in an inquiry folder (`_branch.md` + `_state.md` + `finding.md` + `docarchive/*`) | A territory: codebase root (Discussion 1) OR a local direction / source-files (Discussion 2) |
| **Unit of enumeration** | **Typed route** — an action-direction (DEEPEN, REFINE, REVISIT, MERGE, etc.) per the 16-type taxonomy | **Concept** — a topic/area of the thinking-space (e.g., "how to handle errors in loop outputs"; "how to find new disciplines") |
| **Output** | List of typed routes with 12 fields each (Direction, Goal, Type, Priority, Status, Blocked-by, Purpose, Movement, Unlocks, WHY, Guidance mode, Continuation note) | Hierarchical concept tree; nodes with topic-categories at progressive resolution |
| **Scaling** | Bounded — one inquiry's worth of next-directions | Potentially huge — 10 → ~50 → ~200 nodes via stages; LLM context limits force staging |
| **Taxonomy** | 16-type action-direction taxonomy (Content / Process / Context-directed) | Concept-categories TBD — would NOT be the 16-type taxonomy (different unit) |
| **Frequency / when** | After every SIC cycle if user wants next-directions | Episodically; codebase-wide bootstrap; local bootstrap when entering a new direction |
| **Charter** | CANONICAL per audit A1-A3: enumeration of typed next directions; one structural operation; complete-and-typed | NEW operation; not in current project capabilities |

**Verdict on the relationship:** **COMPLEMENT, not CONFLICT.** They are two different cognitive operations. Trying to fold concept-mapping into /navigation would break /navigation's single-operation invariant.

---

## P2 — Per-use-case matrix (committed)

For each of the 10 use cases:

| # | Use case | Best fit | Reasoning |
|---|---|---|---|
| 1 | **Codebase orientation** ("what does this codebase contain at a high level?") | **nav_should_be** (Discussion 1) | Designed for it: staged enumeration of big concepts; recent discussion has no codebase-wide capability |
| 2 | **Per-inquiry next-direction** ("I just finished an MVL+ run; what's next?") | **Recent discussion** | Canonical /navigation's exact charter; recent discussion provides the artifact organization |
| 3 | **Concept discovery** ("what concepts exist in/around X?") | **nav_should_be** (both Discussions) | Concept is the unit; Discussion 1 wide-scope, Discussion 2 local |
| 4 | **Resolution progression** (coarse → fine without committing early) | **nav_should_be** (Discussion 1) | Explicit staged for-loop progression; recent discussion has no resolution-progression mechanic |
| 5 | **Cross-inquiry traversal** ("how does navigation move across many inquiries?") | **TIE** | Recent defers to `_meta_state.md`; nav_should_be defers to "merging local maps." Both pre-operational; future infra |
| 6 | **Selection memory & decision history** ("what did I decide about each direction; why?") | **Recent discussion** | `_nav.md`'s Selections + History sections cover this canonically; nav_should_be doesn't address |
| 7 | **UI / visualization** ("click a node to dive in") | **nav_should_be** (Discussion 2) | Future UI vision explicitly described; recent discussion doesn't mention UI |
| 8 | **Merging / aggregating maps** | **nav_should_be** (named) | nav_should_be names "artifacts can be combined"; recent defers to `_meta_state.md`. Both pre-operational; nav_should_be has more conceptual content |
| 9 | **Bloat prevention** ("don't scatter navigation work across 28 inquiries") | **Recent discussion** | `_nav.md` is the structural fix; nav_should_be doesn't address (different concern at a different level) |
| 10 | **Onboarding / new contributor orientation** ("what's the project about?") | **nav_should_be** (Discussion 1) | Big-concept map IS this artifact; recent discussion has no onboarding capability |

**Tally:** nav_should_be wins 5 (1, 3, 4, 7, 10); Recent wins 3 (2, 6, 9); ties 2 (5, 8); Discussion 2 + 3 listed under nav_should_be cover concept-discovery use cases.

**Pattern:** the wins divide cleanly by operation. nav_should_be's wins are concept-mapping use cases. Recent's wins are post-cycle-navigation use cases. Ties are cross-inquiry / consolidation cases that neither design fully operationalizes.

---

## P3 — Verification step (EXECUTED)

**Read:** `homegrown/protocols/multi_resolution_navigation.md` (567 lines, full read).

### Summary of what multi_resolution_navigation does

- Operates ON an existing parent Navigation map (per Step 2: "If parent_map_path exists, read it. If the parent map does not exist and the source authorizes creating it, **run Navigation first**.").
- Expands routes from the parent map into child maps at multiple resolution levels.
- Maintains a `_frontier.md` ledger with coverage modes (exhaustive / budgeted / sampled), preventing budgeted runs from losing route candidates.
- Each child map is itself a Navigation map (Step 7: *"the child map should remain a Navigation map: it enumerates routes inside the child scope"*).
- Charter: **does not choose final routes**; preserves expansion-frontier visibility across levels.

### Does it cover nav_should_be Discussion 1's staged concept-enumeration?

**VERDICT: PARTIAL — structural patterns reusable; protocol itself doesn't apply as-is.**

Why partial:

| Aspect | nav_should_be Discussion 1 | multi_resolution_navigation | Match? |
|---|---|---|---|
| **Input** | Codebase (no prior map) | Parent Navigation map (must exist or be creatable via Navigation) | **NO** — multi-res requires a parent map; Navigation can't bootstrap one without a SIC cycle |
| **Output unit** | Concepts (topics in thinking space) | Typed routes (16-type taxonomy via canonical Navigation discipline) | **NO** — different units |
| **Staging mechanic** | Sequential for-loop: stage 1 = 10 concepts → stage 2 = 50 → stage 3 = 200 | Coverage modes (exhaustive/budgeted/sampled) + frontier ledger preserve coverage across resolution levels | **PARTIAL** — the *pattern* (staged expansion with preservation of unexpanded items) matches conceptually |
| **Frontier preservation** | User mentions "we ran a navigation in towards the direction... and we picked one of these subdomain concepts and we worked on that and then we ran another navigation toward that" | Explicit `_frontier.md` ledger with status fields (queued/scheduled/expanded/pending/etc.) | **MATCH** — same need for preserving unexpanded candidates |
| **Resume / continuation** | User envisions running each stage manually over time | Step 11 explicit: pending candidates + resume-from instruction | **MATCH** — both want manual / staged continuation |

So multi_resolution_navigation has TWO of nav_should_be Discussion 1's structural needs covered (staging + frontier preservation), but ONE critical capability missing: **the bootstrap from raw territory** (codebase) **to a first map**. The protocol assumes Navigation provides the bootstrap; Navigation requires a SIC cycle; there is no SIC cycle for "the whole codebase."

### Does it cover Discussion 2's local-directional concept-mapping?

Similar PARTIAL — the protocol's staging + frontier patterns apply, but the unit (typed routes vs concepts) differs. A local directional version of multi_resolution_navigation would still produce typed-route maps, not concept-maps.

### Implication

multi_resolution_navigation is **closer to the user's Discussion 1 vision than I initially expected**, but it operates on the wrong unit and assumes a different bootstrap. Three things follow:

1. multi_resolution_navigation's structural patterns (frontier ledger; coverage modes; child-map structure; resume contract) are **directly reusable** by a future concept-mapping protocol.
2. Concept-mapping needs its own **bootstrap operation** (raw codebase → first concept map) that doesn't exist in the project today. This is the load-bearing new capability.
3. After bootstrap, concept-mapping could **leverage multi_resolution_navigation's expansion patterns** by analogy — applying ledger + coverage modes to concept expansion across levels.

---

## P4 — Recommendation + vocabulary note + Step 5 caution (committed)

### Branch determination (from P3 verification)

The verification result is PARTIAL. Per Decomposition's branch logic:
- IF YES: leverage existing protocol (no new work).
- IF PARTIAL: extend the protocol with concept-mapping.
- IF NO: introduce new lightweight protocol/skill.

Strict reading: PARTIAL → "extend the protocol." But "extend" here would mean **fundamental rewrite**: changing the protocol's input contract (from "parent map exists" to "may bootstrap from territory"), changing the output unit (from typed routes to concepts), adding a new bootstrap operation. That's not extension; that's a new protocol that *borrows patterns*.

**Refined branch:** PARTIAL with bootstrap-gap → introduce a NEW concept-mapping protocol that **inherits multi_resolution_navigation's structural patterns** but provides its own bootstrap-from-territory operation. The new protocol cross-references multi_resolution_navigation and uses analogous ledger / coverage / resume mechanisms.

### Immediate recommendation

**Keep the recent discussion's design as-is.** It correctly organizes canonical /navigation's artifacts. No changes to it from this analysis.

### Deferred recommendation

**Introduce concept-mapping as a NEW lightweight protocol** (when the user wants the capability). Suggested file: `homegrown/protocols/concept_mapping.md`. Properties:

- **Bootstrap-from-territory operation** (the new primitive): given a codebase root OR a local direction, produce a first-stage concept map (~5-15 concepts).
- **Borrows multi_resolution_navigation's structural patterns:** frontier ledger (`_concepts_frontier.md`); coverage modes; child-map expansion at progressive resolution; resume contract.
- **Uses concept-categories taxonomy** (TBD; not the 16-type action-direction taxonomy). Initial sketch: structural / process / domain-specific / cross-cutting / open-frontier.
- **Output:** concept tree, with node records that include topic, parent-concept, child-concepts, status, last-touched-by-inquiry pointers.
- **Status:** DEFERRED per Step 5 — this proposal is N=1 evidence (one user note); defer full spec until at least one manual concept-mapping run produces evidence on what the protocol should look like.

### Vocabulary disambiguation

- The user's "navigation" stays as a broad-concept word. Don't ask the user to drop it.
- At the discipline level, disambiguate:
  - **`/navigation`** = canonical discipline (post-cycle typed-route enumeration).
  - **Concept-mapping** = new operation (label TBD — could be `/concept-map` or `/atlas` or something else; user picks).
  - **`/multi_resolution_navigation`** = existing protocol (frontier-preserving expansion of Navigation maps; could later inspire concept-mapping's expansion mechanism).
- The user can keep saying "navigation" in conversation; the project's spec files use the disambiguated names.

### Step 5 application (honest)

- **No spec changes shipped from this inquiry.** The recent discussion already has its 4 file edits awaiting user trigger; this analysis doesn't add to them.
- **Concept-mapping protocol** is DEFERRED. Revival trigger: the user wants the capability and is ready to invest in a manual run that produces evidence.
- **multi_resolution_navigation** stays as-is. No edits.

### What to do next (user-facing actionable)

1. **Read this finding.** Decide if the operation distinction (concept-mapping vs canonical /navigation) feels right.
2. **If YES:** confirm that recent discussion stays as-is for /navigation; defer concept-mapping protocol-writing.
3. **When ready for concept-mapping:** do a single MANUAL concept-mapping run on the codebase (no protocol; just LLM + you); use the resulting artifact as evidence to write the protocol.
4. **Eventually:** when concept-mapping protocol exists, consider whether multi_resolution_navigation's patterns can be borrowed for staged concept-expansion.

---

## Mechanism Coverage Telemetry

- **Generators applied:** 1/4 (Domain Transfer with 3 sub-variations: code analysis / onboarding handbooks / knowledge graphs).
- **Framers applied:** 1/3 (Inversion with 3 sub-variations: skip-concept-mapping / use-multi-res-directly / no-concept-mapping-needed — all rejected).
- **Convergence:** YES — both mechanisms confirm concept-mapping is a real, separate, new operation.
- **P3 executed:** verification result PARTIAL (structural patterns reusable; bootstrap missing).
- **Failure modes observed:** None.
  - Premature evaluation: avoided.
  - Single-mechanism trap: avoided.
  - Early frame lock: avoided (3 alternatives tested in Inversion).
  - Innovation without grounding: avoided (Domain Transfer + P3 verification).
  - Mechanism exhaustion: avoided.
  - Survival bias: checked — Inversion 1.3 (no-concept-mapping-needed) was uncomfortable but tested fairly; rejected on user-stated-bloat-evidence.

**Overall: PROCEED.** Minimum coverage met; verification executed; 4 pieces (P1-P4) committed; recommendation has clear immediate / deferred / vocab / Step 5 split.
