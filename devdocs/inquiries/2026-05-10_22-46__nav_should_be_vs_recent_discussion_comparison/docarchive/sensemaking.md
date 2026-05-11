# Sensemaking: nav_should_be vs recent discussion — comparison

## User Input

Source: `/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-10_22-46__nav_should_be_vs_recent_discussion_comparison/_branch.md`

Compare `devdocs/nav_should_be.md` (two-tier vision: codebase-wide staged concept map + local directional artifacts) with the recent discussion (`devdocs/inquiries/2026-05-10_11-22__navigation_organization_structure/finding.md`) — per-use-case verdicts, alignment/complement/conflict analysis, merge-or-keep-separate recommendation.

Exploration converged on a load-bearing distinction: **unit of enumeration** (concepts vs typed routes) → different cognitive operations (concept-mapping vs post-cycle next-move enumeration).

---

## SV1 — Baseline Understanding

The two designs look like alternatives but are likely doing different jobs. The recent discussion organizes a known operation (canonical /navigation = post-cycle typed-route enumeration). nav_should_be describes a vision that includes an operation the project doesn't currently have (concept-mapping at codebase + local scope). They likely complement; the question is whether to fold concept-mapping into /navigation as a new mode or introduce a new skill.

---

## Phase 1 — Cognitive Anchor Extraction

### Constraints (limits, requirements, boundaries)

- **C1: Canonical /navigation charter** (per `homegrown/navigation/SKILL.md` + audit at `devdocs/inquiries/2026-05-10_03-50__navigation_established_audit/finding.md`) is enumeration of **typed next directions** after a SIC cycle. CANONICAL: enumerates, doesn't choose; produces 16-type-taxonomy routes with 12 fields each.
- **C2: 16-type taxonomy is action-directions, not concept categories.** DEEPEN, REFINE, REVISIT, MERGE, etc. are MOVES (verbs), not topic-categories (nouns).
- **C3: Recent discussion** organizes the artifact layer for the canonical operation (per-run navigation_observer + per-folder _nav.md + deferred meta_state). Does NOT change the discipline's cognitive content.
- **C4: nav_should_be Discussion 1** describes codebase-wide concept enumeration (10 big concepts → 50 sub-concepts → 200 nodes via staged for-loop). The **unit is concepts**, not typed routes. The output is a hierarchical concept tree at progressive resolution.
- **C5: nav_should_be Discussion 2** describes local directional concept-mapping. Same unit (concepts), local scope. References "the 12 or 16 categories" — the user reaches for the existing taxonomy, but the operation is concept-finding, not route-enumeration.
- **C6: Frame-exit applicability** — applying the recently-proposed Sensemaking refactor candidate's Frame-exit Completeness perspective: terms inherited (navigation, concept, route, taxonomy) are used across a multi-value organizing structure (the use-case matrix); predicate fires.

### Key Insights (non-obvious implications)

- **K1: The two designs are at DIFFERENT abstraction levels.** Recent discussion = operational organization (file layout, ownership, coordination protocol). nav_should_be = vision + strategy (with some operational hints — staging, local artifacts, future UI). Comparing as alternatives at the same level is a category error.
- **K2: Unit of enumeration is the load-bearing distinction.** Concepts (topics in thinking space) vs typed routes (action-directions). These are structurally different. A concept "how to handle errors in loop outputs" is a topic; a typed route "DEEPEN the survivor X" is a move. Different units → different operations → likely different skills.
- **K3: nav_should_be Discussion 1 describes a NEW capability the project doesn't currently have.** The canonical /navigation discipline is post-cycle next-move enumeration; it doesn't do codebase concept-mapping. The user is proposing a new operation, framing it as "navigation" because that's the closest existing word.
- **K4: nav_should_be Discussion 2 is concept-mapping at local scope, NOT canonical /navigation.** The unit is concepts, the operation is discovery-around-a-direction. The user's reference to "12 or 16 categories" is them reaching for the existing taxonomy because it's the only categorization in the project — but if the unit is concepts, the right taxonomy is concept-categories (which the project doesn't have yet), not action-direction-categories.
- **K5: The user's note may be using "navigation" loosely.** The user wrote "navigation has 2 approaches" but the two approaches differ in unit and operation. This is a vocabulary collision; what the user calls "navigation" in nav_should_be includes BOTH the canonical operation AND the new concept-mapping operation.
- **K6: The recent discussion is correct as ORGANIZATION for the canonical operation.** It doesn't need to change. What's needed is to ADD a new skill (or new mode) for concept-mapping, with its own organization — separate artifacts, separate taxonomy, separate scope rules.
- **K7: Concept-mapping has its own scaling concern** that the canonical /navigation doesn't share. nav_should_be explicitly notes: "LLMs are not really good with creating such huge outputs" — staging is the answer. The canonical /navigation is bounded by the inquiry it's reading (small input, bounded output). Concept-mapping is potentially unbounded (codebase = lots of concepts) and needs explicit staging. Different operational profiles.
- **K8: Both designs talk about merging local maps into a bigger map.** This is a CONSOLIDATION operation, distinct from both concept-mapping and post-cycle navigation. It's a third operation the project will eventually need — neither design fully operationalizes it. nav_should_be names it ("artifacts can be combined"); recent discussion defers it (`_meta_state.md` placeholder).

### Structural Points (core components, relationships)

- **SP1: Two operations, not two designs.** Concept-mapping (vision in nav_should_be) and post-cycle next-move enumeration (canonical /navigation, organized by recent discussion). Different units, different scaling profiles, different output shapes.
- **SP2: Three skills implied by combining both views:**
  - `/navigation` (existing, canonical) — post-cycle typed-route enumeration. Recent discussion organizes its artifacts.
  - `/concept-map` or equivalent (NEW) — concept-mapping. Modes: codebase-wide (Discussion 1) and local-directional (Discussion 2).
  - Some consolidation operation (future) — merging multiple maps into a bigger map. Both designs flag this; neither operationalizes it.
- **SP3: Use-case fit follows from operations.** Each use case maps to one or both operations:
  - Codebase orientation → concept-mapping (codebase mode).
  - Per-inquiry next-direction → /navigation (canonical).
  - Concept discovery → concept-mapping (either mode).
  - Resolution progression → concept-mapping (staged).
  - Cross-inquiry traversal → consolidation (future).
  - Selection memory → /navigation (recent's _nav.md).
  - UI / visualization → concept-mapping (future).
  - Merging maps → consolidation (future).
  - Bloat prevention → /navigation (recent's _nav.md fixes the per-inquiry navigation bloat).
  - Onboarding → concept-mapping (codebase mode).
- **SP4: The unit-of-enumeration distinction creates a clean separation.** Concepts go in concept-mapping artifacts; typed routes go in /navigation artifacts. No overlap at the unit level.

### Foundational Principles (assumptions, rules, axioms)

- **P1: One discipline = one cognitive operation.** Per the project's "anatomy of disciplines" pattern (`thinking_disciplines/anatomy_of_disciplines.md`), each discipline has ONE structural operation. Concept-mapping and post-cycle next-move enumeration are different operations → different disciplines.
- **P2: Don't expand /navigation's charter beyond canonical.** The recent audit established /navigation as canonical-by-charter at A1-A3 (single-operation, complete-and-typed enumeration of next directions). Adding concept-mapping mode would break the single-operation invariant.
- **P3: Honor the user's stated vision while resolving vocabulary.** The user wrote "navigation has 2 approaches"; the right reading is "navigation-the-broad-concept includes 2 operations" not "the /navigation discipline must do 2 things." Resolve the vocabulary without losing the user's intent.
- **P4: Step 5 caution applies to spec-charter changes.** Even if concept-mapping COULD be folded into /navigation, doing so would be a discipline-charter rewrite from N=1 evidence (the user's note). Defer charter changes; introduce concept-mapping as a separate operation if the user wants the capability.

### Meaning-Nodes (central concepts and themes)

- **M1: Operations, not designs.** The comparison is between two operations (concept-mapping; post-cycle next-move enumeration), not between two designs of the same thing.
- **M2: Unit-of-enumeration determines the operation.** Concept = thinking-space topic; typed route = action-direction. Different units, different operations.
- **M3: The recent discussion is correct for what it covers.** It organizes canonical /navigation's artifacts. It doesn't and shouldn't address concept-mapping.
- **M4: nav_should_be is a vision spanning two operations + a future UI.** Discussion 1 = new capability (codebase concept-mapping). Discussion 2 = same operation at local scope. UI = far-future.
- **M5: Complement, not conflict.** Both can coexist. The right structure: /navigation stays as canonical; introduce a new concept-mapping skill (or initially a less-formal protocol/note convention) for Discussion 1 + 2.

### SV2 — Anchor-Informed Understanding

The two designs are NOT competing alternatives. They're addressing **two different operations**:

- **Recent discussion** organizes the canonical `/navigation` discipline's artifacts (per-run + per-folder + deferred meta-state). The unit is typed routes; the operation is post-cycle next-move enumeration. **Use this for: per-inquiry next-direction; selection memory; bloat prevention.**

- **nav_should_be** describes a NEW capability — concept-mapping — at two scopes (codebase-wide staged; local directional). The unit is concepts; the operation is discovery + categorization at progressive resolution. The project doesn't have this skill today. **Use this for: codebase orientation; concept discovery; resolution progression; UI/visualization; onboarding.**

The right answer is to **keep both** — recent discussion stays as-is; nav_should_be's vision becomes a SEPARATE capability (a new skill) that the project doesn't yet have.

The user's "navigation has 2 approaches" framing is loose — it conflates the broad-concept word "navigation" with the specific /navigation discipline. Resolving vocabulary: /navigation is one specific operation; "navigation in the broad sense" includes both /navigation AND concept-mapping AND consolidation.

---

## Phase 2 — Perspective Checking

### Technical / Logical

- New anchor: **C-T1: Concept-mapping has structurally different scaling than /navigation.** /navigation reads ONE inquiry's artifacts (bounded, small); concept-mapping at codebase scope reads the WHOLE codebase (potentially huge). Different LLM-context profiles. Staging is mandatory for concept-mapping; not needed for /navigation. **Operational difference confirms operation distinction.**

- New anchor: **C-T2: Concept-mapping needs its own taxonomy.** /navigation uses 16 action-direction types. Concept-mapping would use concept-categories (structural / process / domain-specific / cross-cutting / etc.) — different taxonomy. **Taxonomic difference confirms operation distinction.**

### Human / User

- New anchor: **C-H1: User's mental model treats both as "navigation."** Honor by naming both clearly: "post-cycle navigation" (canonical) vs "concept-mapping navigation" (new). User can keep their broad-concept word; we just disambiguate the discipline.

- New anchor: **C-H2: User's primary need right now is concept-mapping at codebase scope.** They wrote "navigate the codebase, get a map" with no specific direction. This is Discussion 1; not an existing capability. The recent discussion doesn't address this need. **Acknowledging the gap is part of the answer.**

### Strategic / Long-term

- New anchor: **C-S1: Future UI vision unifies the two operations at the visualization layer.** The user envisions clicking nodes on a concept map and triggering MVL+ in that direction. This requires (a) concept-mapping to produce nodes; (b) /navigation to enumerate routes from a node; (c) consolidation to keep maps coherent. Long-term, all three operations are needed.

- New anchor: **C-S2: Concept-mapping is a precondition for some autonomy levels.** Per the meta-loop ladder finding, L4+ multi-head meta-loop requires the runner to know which directions are worth pursuing. Without a concept-map, the runner has no broad picture of the thinking-space; it can only follow per-inquiry next-moves. Concept-mapping enables broader-direction selection.

### Risk / Failure

- New anchor: **C-R1: Forcing concept-mapping into /navigation would break the single-operation invariant.** The audit confirmed /navigation as A2-CANONICAL: ONE structural operation. Adding a second mode breaks this. Don't.

- New anchor: **C-R2: Introducing a new skill from N=1 evidence (the user's note) risks Step 5 overreach.** Mitigation: introduce as a DEFERRED capability or as a lightweight protocol initially; don't ship a full new discipline spec until N>1 evidence accumulates.

### Resource / Feasibility

- New anchor: **C-F1: A new concept-mapping skill is non-trivial.** Spec text + taxonomy + staging protocol + artifact convention. Not a small lift.

- New anchor: **C-F2: The user's stated framing — "at first I'll trigger each stage manually" — accommodates a lightweight initial implementation.** Don't need full automation. A protocol document + manual invocation = enough for v1.

### Definitional / Internal Consistency

- Tested: does "concept-mapping is a different operation from /navigation" contradict the audit's CANONICAL framing of /navigation? **No** — the audit defined /navigation's charter narrowly; concept-mapping is OUTSIDE that charter, not against it.
- Tested: does the "complement, not conflict" verdict contradict the user's "navigation has 2 approaches" framing? **No** if we accept "navigation" as a broad-concept word covering both operations. Yes if "/navigation" is the only valid name for both — which would force charter expansion. The reading that resolves: vocabulary disambiguation, not charter expansion.

### Definitional / Frame-exit Completeness *(applying the recently-proposed Sensemaking refactor candidate)*

The gating predicate fires: this inquiry has inherited multi-value terms (`navigation`, `concept`, `route`, `taxonomy`) used across multiple values in committed structures (the 8-region exploration map; the 10 use cases; the operations distinction).

Frame-exit check: does the project have artifacts/usages of "navigation" that the inquiry's frame's scope excludes?

- The /navigation **discipline** (`homegrown/navigation/`) — IN SCOPE.
- nav_should_be's **vision** (concept-mapping + UI) — IN SCOPE (this is what we're comparing).
- "Navigation" as a **broad cognitive concept** (any wayfinding through unknown territory) — broader; the inquiry uses this implicitly when distinguishing operations.
- "Navigation" as a **UI metaphor** (clicking through visualizations) — referenced but bounded out (future concern).
- `homegrown/protocols/multi_resolution_navigation.md` — a protocol. Built ON the discipline; the protocol itself talks about resolution progression — **this might overlap with nav_should_be Discussion 1's staged enumeration!** Need to check.
- `homegrown/navigation/warmup/` — pre-discipline preparation. Out of scope (feeds into the discipline).

The frame-exit check surfaces an item to investigate: **`multi_resolution_navigation.md` may already partly do what nav_should_be Discussion 1 describes.** Worth probing — but Exploration didn't, so this becomes a frontier question.

### Phase / Calibration-State

- New anchor: **C-P1: At L0/L1 of the meta-loop ladder, the user manually invokes navigation.** They're OK manually triggering each stage of concept-mapping (per nav_should_be). Calibration-stage-appropriate.

### SV3 — Multi-Perspective Understanding

The two designs target two different operations. The recent discussion is correct for canonical /navigation. nav_should_be describes a NEW capability (concept-mapping) the project doesn't have. They COMPLEMENT.

But: the frame-exit check surfaced that `homegrown/protocols/multi_resolution_navigation.md` MAY already partly do concept-mapping (the name suggests resolution progression). This needs investigation — if multi-resolution-navigation already covers Discussion 1, the answer changes from "introduce new skill" to "leverage existing protocol."

The user's mental model treats both as "navigation"; the right resolution is vocabulary disambiguation, not charter expansion of /navigation.

---

## Phase 3 — Ambiguity Collapse

### Ambiguity #1: Are the two designs really doing different operations, or is the unit-of-enumeration distinction forced?

**Strongest counter-interpretation:** The unit distinction is forced. /navigation already has a `Goal` field per route that names a concept ("DEEPEN the X concept"). So /navigation IS enumerating concepts (via Goal fields) wrapped in action-direction labels. nav_should_be's "concepts" could be just /navigation's Goals without the action-labels. So the unit difference is presentation, not structure.

**Why the counter has merit AND fails:**
- MERIT: a route's Goal IS a reference to a concept. /navigation does brush against concepts.
- FAILURE: the unit of /navigation's enumeration is the ROUTE, not the concept. A route has a type (DEEPEN/etc.), a goal (concept reference), a priority, 9 other fields. Stripping it down to just the goal loses the action-direction information that's the discipline's point. Plus: codebase concept-mapping doesn't START from a finished cycle (you have no concept Goals to dereference); it starts from raw codebase scan. Different INPUT requirements confirm different operations.

**Confidence:** HIGH.

**Resolution:** the unit-of-enumeration distinction is real. Concepts and typed routes are different units; concept-mapping and post-cycle next-move enumeration are different operations.

---

### Ambiguity #2: Is `homegrown/protocols/multi_resolution_navigation.md` already doing concept-mapping at progressive resolution?

**Strongest counter-interpretation:** The protocol's name — "multi-resolution navigation" — exactly matches nav_should_be Discussion 1's staged-resolution framing. If the protocol already does codebase concept-mapping at progressive resolution, then nav_should_be Discussion 1 is REQUESTING AN EXISTING CAPABILITY, not a new one.

**Why the counter requires verification:** I haven't read `multi_resolution_navigation.md` in this session's loaded context. The frame-exit check surfaced this; verification is needed before claiming the protocol does or doesn't cover it.

**Resolution:** mark as **MEDIUM confidence + flag for verification.** The hypothesis is: multi_resolution_navigation may partly cover Discussion 1. Innovation should read the protocol and verify. If it does cover Discussion 1, the answer simplifies (use existing protocol; don't introduce new skill). If it doesn't, the new-skill answer holds.

**What is now fixed?** The verification step is required before final commitment.

**What is no longer allowed?** Recommending "introduce new skill" without first checking whether multi-resolution-navigation already does the job.

---

### Ambiguity #3: Should concept-mapping be a NEW skill or an EXTENSION of /navigation?

**Strongest counter-interpretation:** Adding a mode to /navigation is cheaper than introducing a new skill. The user's vocabulary suggests they think of both as navigation. Honor that.

**Why the counter fails (structural grounds):** The audit confirmed /navigation as A2-CANONICAL: ONE structural operation, complete-and-typed enumeration of next directions. Adding a "concept-mapping mode" breaks the single-operation invariant. Plus: concept-mapping has different inputs (codebase / direction vs finished SIC cycle), different outputs (concepts vs typed routes), different scaling (potentially huge vs bounded), different taxonomy (concept categories vs action-directions). These structural differences are too big to share a discipline.

**Confidence:** HIGH.

**Resolution:** concept-mapping should be a SEPARATE capability — a new skill, OR an existing protocol if `multi_resolution_navigation.md` covers it (per Ambiguity #2).

**What is now fixed?** Concept-mapping is structurally separate from /navigation. Either a new skill or an existing-protocol mapping.

**What is no longer allowed?** Folding concept-mapping into /navigation as a mode.

---

### Ambiguity #4: Is "complement, not conflict" the right framing — or is it premature stabilization on a comfortable answer?

**Strongest counter-interpretation:** Calling them "complementary" is a too-easy resolution. Maybe one design is genuinely better and should supersede the other. By saying "complement," I might be avoiding the harder choice.

**Why the counter fails (structural grounds):** "Better" requires same operation. The two designs target different operations; "better" doesn't apply. The recent discussion is the BEST design for organizing canonical /navigation's artifacts (validated in its own inquiry). nav_should_be is the user's vision for a different operation (concept-mapping). Saying "X is better than Y" when they do different jobs is a category error.

**Confidence:** HIGH.

**Resolution:** complement is structurally correct, not premature stabilization.

---

### Ambiguity #5: How should the user's "12 or 16 categories" reference in Discussion 2 be interpreted?

**Strongest counter-interpretation:** The user explicitly references the existing /navigation taxonomy. So Discussion 2 IS using the canonical taxonomy. Maybe Discussion 2 is /navigation, just at local scope.

**Why the counter has merit AND fails:**
- MERIT: yes, the user reaches for the existing taxonomy. They might intend Discussion 2 to use 16 action-direction types.
- FAILURE: but the operation Discussion 2 describes is finding CONCEPTS around a direction, not enumerating action-directions on a finished cycle. The user's reference to "12 or 16 categories" is them looking for a categorization vocabulary for concepts, and reaching for the only one that exists in the project (the /navigation taxonomy). The operation is concept-mapping; the categorization should be concept-categories, not action-direction-categories.

**Confidence:** MEDIUM-HIGH (the user's intent is interpretive; the structural reading favors concept-mapping).

**Resolution:** Discussion 2 is concept-mapping at local scope. The user's "12 or 16 categories" reference is an artifact of having no concept-taxonomy yet; the new concept-mapping skill should produce its own concept-taxonomy (separate from /navigation's action-direction taxonomy).

---

### Load-bearing concept tests (mandatory per Phase 3 protocol)

#### Concept: "concept-mapping" (newly load-bearing in this analysis)

- **Test:** proxy-vs-structural + user-language-alignment.
- **Counter:** "concept-mapping" is loop-coined as a label for what nav_should_be describes. The user said "navigation," not "concept-mapping."
- **Why the counter has merit:** YES, the term is loop-coined. Risk of fitting a label that doesn't match user vocabulary.
- **Resolution:** USE "concept-mapping" with explicit caveat — it's the loop's term for what the user calls "navigation Discussion 1 + 2." If the user prefers a different name (like "atlas" or "concept-map" or "thinking-space-discovery"), they can rename. The structural distinction (concepts vs typed routes) holds regardless of the label.

#### Concept: "operation distinction" (load-bearing for the verdict)

- **Test:** proxy-vs-structural.
- **Counter:** maybe both designs are at the same OPERATION (broadly: "figure out what to do or look at next") and just differ in granularity.
- **Why the counter has merit AND fails:**
  - MERIT: at a broad level both are "thinking-space wayfinding."
  - FAILURE: at the actionable level, they're different. /navigation requires a finished SIC cycle as input; concept-mapping requires raw territory. /navigation outputs typed routes; concept-mapping outputs concepts. /navigation produces bounded output (one inquiry's worth); concept-mapping produces potentially huge output requiring staging. The differences are structural, not granular.
- **Resolution:** operation distinction holds. Don't collapse them.

#### Concept: "complement vs conflict"

- **Test:** discoverability.
- **Counter:** the determination "complement vs conflict" depends on whether they target the same operation. I've claimed different operations → complement. But this hangs on the operation distinction holding.
- **Why the counter is satisfied:** the operation distinction was tested in Ambiguity #1 (HIGH confidence) and again in load-bearing test above (held). So the determination ("complement") follows.
- **Resolution:** complement, contingent on operation distinction.

#### Specific-vs-pattern recognition cue

The user pointed at TWO specific designs (nav_should_be and recent discussion). The conclusion (complement; different operations) is a pattern claim about the broader space of navigation-related operations.

Counter applied: maybe these two specific instances complement, but the broader pattern is different (other navigation-related operations might overlap differently).

Resolution: the pattern claim is bounded — it applies to THESE two designs. Other navigation-related operations (e.g., Wayfinding which was absorbed into Navigation per the audit) may have different relationships. Address THIS instance with high confidence; the broader pattern holds for the operations explicitly named, not universally.

---

### SV4 — Clarified Understanding

The comparison resolves as:

1. **Different operations.** /navigation = post-cycle typed-route enumeration. Concept-mapping (nav_should_be's vision) = territory discovery + categorization. Different units, inputs, outputs, scaling, taxonomies.

2. **Recent discussion is correct as ORGANIZATION for canonical /navigation.** Don't change it. It does what it does well.

3. **nav_should_be describes a NEW capability** the project either doesn't have OR partly has via `homegrown/protocols/multi_resolution_navigation.md` — **needs verification** (Innovation step). If multi-resolution-navigation already covers Discussion 1's staged enumeration, leverage that protocol. If not, propose a new skill.

4. **Discussion 2 is local-scope concept-mapping**, NOT a variant of canonical /navigation. The user's "12 or 16 categories" reference is them reaching for the existing taxonomy; concept-mapping should have its own concept-categories.

5. **Per-use-case verdicts:** as in the exploration's preliminary inventory, with one refinement — Discussion 2's per-inquiry next-direction overlap with /navigation is at the WRONG OPERATION level; /navigation does it correctly; concept-mapping (Discussion 2 local) does something different (finds concepts, not next-moves).

6. **Vocabulary resolution:** the user's "navigation" is a broad concept covering both operations. Disambiguate at the discipline level (/navigation is canonical; concept-mapping is new) without forcing the user to drop their natural-language usage.

7. **Recommendation:** keep recent discussion as-is. After verifying multi-resolution-navigation, EITHER point user to that protocol (if it covers Discussion 1+2) OR introduce concept-mapping as a new lightweight protocol/skill (if it doesn't). DEFER full new-discipline-spec writing until N>1 evidence (Step 5 caution).

---

## Phase 4 — Degrees-of-Freedom Reduction

### Variables now FIXED

- **F1:** Two designs target two different operations (concept-mapping vs post-cycle next-move enumeration).
- **F2:** Recent discussion is correct for canonical /navigation organization. Unchanged.
- **F3:** nav_should_be describes a NEW capability (or one partly covered by multi-resolution-navigation; verification needed).
- **F4:** Concept-mapping is structurally separate from /navigation (different unit, input, output, scaling, taxonomy).
- **F5:** Verdict is COMPLEMENT, not CONFLICT. They coexist.
- **F6:** Vocabulary disambiguation is the right resolution path (don't force user to drop "navigation" as broad-concept word).
- **F7:** Step 5 caution — defer full new-discipline-spec until N>1 evidence.

### Variables ELIMINATED

- E1: Folding concept-mapping into /navigation as a mode (breaks single-operation invariant).
- E2: Calling one design "better" than the other (category error; different operations).
- E3: Treating Discussion 2 as a variant of canonical /navigation (different operation).
- E4: Premature stabilization on "complement" without testing alternatives (Ambiguity #4 verified).

### Variables that remain OPEN

- **O1:** Whether `multi_resolution_navigation.md` already covers nav_should_be Discussion 1's staged concept-mapping. **Innovation must verify by reading the protocol.**
- **O2:** Whether to introduce a new skill (e.g., `/concept-map`) OR a lightweight protocol (e.g., `homegrown/protocols/concept_mapping.md`) OR just defer until more evidence. Innovation will recommend.
- **O3:** What concept-categories taxonomy to use (if a new skill is introduced). Innovation will sketch.
- **O4:** Whether the consolidation operation (merging local maps into bigger maps) needs immediate addressing or stays deferred to `_meta_state.md` future work. Innovation will recommend.

### SV5 — Constrained Understanding

The comparison reduces to: complement, not conflict. Different operations. Recent stays as-is for /navigation. nav_should_be describes a separate capability. Verification needed on multi-resolution-navigation. Step 5 caution → defer broad spec changes.

---

## Phase 5 — Conceptual Stabilization

### SV6 — Stabilized Model

**The two designs are NOT alternatives — they target two different cognitive operations. The recent discussion (`devdocs/inquiries/2026-05-10_11-22__navigation_organization_structure/finding.md`) organizes the artifacts for canonical `/navigation` discipline (post-cycle typed-route enumeration; unit = typed route; input = finished SIC cycle; output = 16-type-taxonomy routes with 12 fields each; bounded scaling). It does this correctly and should not be changed. The user's `devdocs/nav_should_be.md` describes a SEPARATE capability — concept-mapping (territory discovery + categorization at progressive resolution; unit = concept; input = codebase OR local direction; output = hierarchical concept tree; potentially-huge scaling requires staging). Discussion 1 = codebase-wide; Discussion 2 = local-directional. The project may already partly have this capability via `homegrown/protocols/multi_resolution_navigation.md` — VERIFICATION required (Innovation step). If multi-resolution-navigation covers it, leverage that protocol. If not, introduce concept-mapping as a new lightweight protocol/skill (per Step 5 caution, defer full discipline-spec writing until N>1 evidence). The user's "navigation has 2 approaches" framing is loose-vocabulary; the right resolution is discipline-level disambiguation (`/navigation` for canonical; new skill or protocol for concept-mapping) without forcing the user to drop "navigation" as a broad-concept word. Per-use-case verdicts: concept-mapping wins on codebase orientation / concept discovery / resolution progression / UI-vis / onboarding; canonical /navigation wins on per-inquiry next-direction / selection memory / bloat prevention; tie on cross-inquiry traversal + map merging (both deferred to similar future infrastructure).**

### Difference from SV1

| Dimension | SV1 | SV6 |
|---|---|---|
| Operation count | "Likely different jobs" | TWO operations explicitly distinguished by unit-of-enumeration + input + output + scaling + taxonomy |
| Verdict | "Likely complement" | COMPLEMENT confirmed via Ambiguity #1 + #4 + load-bearing tests |
| Verification needs | Implicit | EXPLICIT — multi-resolution-navigation must be checked |
| Discipline structure | "Maybe one with two modes" | Two structurally-separate operations; don't fold concept-mapping into /navigation |
| User vocabulary handling | Open | Honor user's broad "navigation" word; disambiguate at discipline level only |
| Step 5 application | Implicit | Explicit — defer full new-discipline-spec until N>1 |

The SV1→SV6 delta is meaningful: from "likely complement" to a fully-grounded operation distinction with verification requirement, structural argument against folding, and Step 5 caution.

---

## Saturation indicators

- **Perspective saturation:** moderate-high. Definitional / Frame-exit Completeness perspective surfaced multi-resolution-navigation as something to check (concrete frontier). Phase / Calibration-State confirmed L0/L1 applicability. Risk produced 2 anchors.
- **Ambiguity resolution ratio:** 5/5 explicit ambiguities resolved (4 HIGH, 1 MEDIUM-HIGH); 3 load-bearing concept tests + specific-vs-pattern check passed.
- **SV delta:** large.
- **Anchor diversity:** 9 anchor types across 8 perspectives.

---

## Open items handed to next disciplines

- **Decomposition:** partition into use-case matrix + alignment/complement/conflict analysis + verification step + recommendation tiers (immediate / deferred).
- **Innovation:** READ `homegrown/protocols/multi_resolution_navigation.md` to verify whether it already covers nav_should_be Discussion 1; based on that, propose either (a) "leverage existing protocol" path or (b) "introduce new lightweight protocol/skill" path. Apply minimum mechanism coverage to validate the recommendation.
- **Critique:** test whether the operation distinction is over-fit (Ambiguity #1 was HIGH but N=2 designs is small evidence base); test whether Step 5 caution is correctly applied; verify self-reference resistance (this analysis uses /navigation discipline frame to compare /navigation to a related vision).
