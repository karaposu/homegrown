## User Input

```
devdocs/inquiries/2026-05-10_08-30__meta_state_artifact_purpose_and_alternatives/_branch.md

[Stabilize: which functions are LOAD-BEARING vs nice-to-have; is the artifact necessary at L1; level-aware verdict; answer-shape for downstream. Anti-bloat: focused.]
```

---

# Sensemaking: Meta-state Artifact Purpose and Alternatives

## SV1 — Baseline Understanding

The user is questioning whether `_meta_state.md` is necessary at all. Exploration produced a function list (A1-A6 + B1-B3). The user's intuition was right that anti-double-visitation alone doesn't justify a separate artifact — but the function list reveals the real question: do A4 (spin-detection), A5 (selection rationale), and B2/B3 (branch + calibration) justify a separate cross-run state file? And if the answer is "yes for some functions, no for others," is there a per-function cleanest home rather than one consolidating artifact?

---

## Phase 1 — Cognitive Anchor Extraction

### Constraints

- **C-Anti-bloat:** small design question. Stay tight. The verdict is keep/replace/drop with reasoning; not a feature roadmap for the artifact.
- **C-Trust-exploration:** trust the function list (A1-A6, B1-B3) as enumerated; don't re-derive.
- **C-Level-realism:** the project is at L0. L1 is the next buildable level. Decisions about L4 multi-head are speculative until L1 ships. The verdict should be primarily about L1 with a note about how it scales.
- **C-Drop-or-keep-decision:** the verdict has to be ACTIONABLE — keep the artifact (build it), replace it (build the alternative), or drop it (don't build any artifact).

### Key Insights

- **KI1: Functions split into two groups.** Path-memory-and-edges (A1, A2, A3, A6, B1) are derivable from existing per-inquiry artifacts; selection-rationale-and-quality (A4, A5, B2, B3) are NOT derivable. The first group has an alternative; the second group requires NEW recording somewhere.

- **KI2: The user's instinct — "maybe not necessary" — has structural support, but only for the first group.** Anti-double-visitation (B1), path memory (A1), durable cross-run memory (A2), stateful traversal evidence (A3), and stop/continue support (A6) can all be served by walking finding.md frontmatter chains + per-inquiry `_state.md`. No separate file needed for these.

- **KI3: Selection rationale (A5) is the load-bearing addition.** Without it, the meta-loop's WHY of each move is lost. Calibration data (B3) for future automated selection is just a special use of A5. Anti-spinning (A4) needs the rationale + the path together. Branch/merge (B2) needs cross-head awareness which is also rationale-adjacent.

- **KI4: A5 has a natural home — the next inquiry's `_branch.md`.** When the meta-loop selects a Navigation direction and creates inquiry-X, inquiry-X's `_branch.md` already has a "Source Input" section and Relationships. Adding "Selected from [parent inquiry] direction [X] because [rationale]" is a tiny addition to existing structure. Per-use, near point-of-decision.

- **KI5: A flat append-only INDEX is cheap if it's a derived view, not a primary artifact.** If the `_branch.md` carries the rationale, the INDEX is a generated cache (e.g., `find devdocs/inquiries/ -exec grep "Selected from"`). Calling it `_meta_state.md` and treating it as primary creates the divergence-risk; treating it as a derived view eliminates that risk.

- **KI6: Level-aware verdict matters.** At L0 (current), nothing is needed — human holds context. At L1 (sequential, human Selector), `_branch.md` rationale + finding.md chains is enough; no separate artifact. At L2-L3 (persistent / graph-aware), an INDEX-as-cache becomes valuable. At L4 (multi-head autonomous), a real cross-head state structure may be necessary (branch sets, merge points). The artifact's value scales with level.

- **KI7: The "memory" framing is misleading at L1.** The meta-loop spec calls `_meta_state.md` "memory." But at L1, memory IS the artifact corpus itself — finding.md chains, `_branch.md` Relationships. Adding a separate "memory" file at L1 duplicates the corpus. The right framing at L1 is "view over the corpus that surfaces meta-loop intent," not "memory."

### Structural Points

- **SP1: Path-memory-and-edges (group 1) are corpus-derivable.** Walk finding.md frontmatter to reconstruct. No new artifact.
- **SP2: Selection rationale (A5) needs a recording site.** Best site: the next inquiry's `_branch.md`. Already exists; just adds a field.
- **SP3: The proposed "INDEX" alternative collapses to a derived view, not a primary artifact, at L1.** This is the cleanest shape.
- **SP4: At L4 (multi-head autonomous), branch/merge state may need its own structure.** Defer until L4 is being built. Today's decision is L1.

### Foundational Principles

- **FP1: Don't introduce primary artifacts when derived views suffice.** A primary artifact has maintenance cost + divergence risk. A derived view has neither (it's regenerated on demand).
- **FP2: Push recording to point-of-use.** Selection rationale belongs in the inquiry it produced (next `_branch.md`), not in a centralized state file.
- **FP3: Build for the next level, not the speculative level.** L1's needs are the design target; L4's needs flag deferred questions, not current architecture.

### Meaning-Nodes

- **Path memory** — group 1; corpus-derivable.
- **Selection rationale** — group 2; needs recording site.
- **Derived view** — the INDEX as a cache, not a primary file.
- **Level-aware verdict** — the answer differs by L1 vs L4.

### SV2 — Anchor-Informed Understanding

The functions split: group 1 (path/edges) is corpus-derivable and needs no new artifact; group 2 (rationale + quality) needs a recording site, and the natural site is the next inquiry's `_branch.md`. At L1 (the buildable level), no separate primary artifact is needed — the corpus + a tiny `_branch.md` addition + an optional generated INDEX view suffice. The artifact named `_meta_state.md` in the meta-loop spec is overkill at L1; its value scales up at higher levels but those decisions are deferred. The user's instinct ("maybe not necessary") is structurally correct for L1.

---

## Phase 2 — Perspective Checking

### Technical / Logical

The function-split into corpus-derivable vs requires-recording is structurally clean. Group 1 needs no new file; group 2 needs a recording site, and the existing `_branch.md` can carry the field with minimal addition. → No new anchors; KI1-KI4 confirmed.

### Human / User

The user is at the edge of building L1. They want to know if `_meta_state.md` is mandatory before building. The verdict that "the corpus is the memory; selection rationale belongs in next `_branch.md`" gives them a way to build L1 without a separate artifact. → Reinforces KI6's level-aware framing.

### Strategic / Long-term

If L1 is built without `_meta_state.md` and proves the corpus suffices for those functions, the project saves the maintenance cost permanently. If L4 later needs a real state file, it can be built then with concrete L4 requirements (multi-head set membership, merge points) rather than speculative L1 design. → New anchor: **build-when-needed beats build-when-anticipated** (KI8). The artifact's deferral is consistent with the project's "DEFERRED with revival trigger" disposition pattern.

### Risk / Failure

Risk #1: corpus-walk costs scale O(N) per meta-loop step. Mitigation: at L1 sequential, N is small; at L2+ a cached INDEX view becomes worth it. Risk #2: `_branch.md` becomes overloaded with cross-cutting fields. Mitigation: the field is one short line ("Selected from [X] because [Y]"); minimal load. Risk #3: spin-detection (A4) is harder without explicit path. Mitigation: at L1 with human Selector, the human is the spin-detector; A4 is not needed as system function until L4. → Confirms level-aware verdict (KI6).

### Resource / Feasibility

Building `_branch.md` with one new line is trivial. Building `_meta_state.md` as a primary artifact requires schema, write-discipline, sync rules. Cost differential: ~10x. → No new anchors.

### Definitional / Consistency

Does the meta-loop spec's "Meta-state gives it memory" claim contradict "the corpus is the memory"? The spec's phrasing is interpretable: "memory" can mean "a discrete file" OR "any structure capturing the path." The user's question opens the second reading. The spec doesn't preclude corpus-as-memory; it just doesn't articulate it. → New anchor: the spec's language is **compatible with corpus-as-memory** if "memory" is read structurally rather than as a specific filename (KI9).

### Phase / Calibration-State

The project is at L0; L1 is the buildable next step. Designing `_meta_state.md` v1 is a NAMED COULD action in the meta-loop spec ("Design `_meta_state.md` v1" — but tagged as COULD, not MUST). The COULD tag itself signals the spec author wasn't certain it was necessary at L1. → Reinforces the user's instinct.

### Self-reference check

The inquiry runs inside MVL+. It questions a meta-loop design choice. Diagnosis grounds in (a) the meta-loop spec text — external to MVL+'s own framework, (b) the existing per-inquiry artifact set — empirically present, (c) the user's observation. Self-reference is structurally absent. → Confirmed not collapsing.

### SV3 — Multi-Perspective Understanding

The model is now: **Functions split into corpus-derivable (group 1) and recording-required (group 2). At L1, group 1 needs nothing new; group 2's natural home is the next inquiry's `_branch.md` with a small "selected from X because Y" addition. No separate primary artifact is needed at L1. An optional INDEX-as-derived-view can be added when corpus-walk costs become noticeable (L2+). At L4 multi-head autonomous, a real cross-head state structure may be needed, but that's a separate L4 design decision — not a reason to build it at L1.**

The meta-loop spec's "memory" language is compatible with this reading. The COULD-tag on the artifact's design action is itself signal that its necessity at L1 was uncertain. The user's instinct is structurally supported.

---

## Phase 3 — Ambiguity Collapse

### Ambiguity 1: Is `_meta_state.md` necessary at L1?

**Strongest counter-interpretation:** Yes, because A4 (anti-spinning) and A5 (selection rationale) require explicit recording. Without a centralized place to record path + rationale, the meta-loop has no spin-detection signal and no calibration data accumulator. Trying to reconstruct from corpus walk loses the rationale.

**Why the counter fails (structural grounds):** The counter assumes A5 (rationale) needs a CENTRALIZED file. It doesn't. Recording per-use in the next inquiry's `_branch.md` covers A5 with point-of-use specificity. Walking finding.md frontmatter chains gives the path; reading each `_branch.md` along the path gives the rationales. A4 (spin-detection) AT L1 is the human Selector's job — no system function needed; the human notices "we did this same thing yesterday." A4 as a SYSTEM function doesn't activate until L4 autonomous selection. B3 (calibration data) is collected automatically as the corpus accumulates `_branch.md` rationales — a future automated selector can read them when needed.

**Confidence:** HIGH (structural; no system-level need at L1; per-use site is cleaner).

**Resolution:** No, `_meta_state.md` is NOT necessary at L1. The functions it would serve are either (a) corpus-derivable, (b) better recorded per-use in `_branch.md`, or (c) human-handled at L1.

**What is now fixed?** L1 doesn't need a new primary artifact for meta-state. The build target reduces to: `_branch.md` carries selection rationale; corpus is otherwise unchanged.

**What is no longer allowed?** Treating `_meta_state.md` as a prerequisite for L1.

**What now depends on this?** The L1 implementation can ship without designing/building a new state file.

**What changed in the conceptual model?** The meta-loop's "memory" is structurally the corpus + per-use rationale, not a centralized file.

---

### Ambiguity 2: Is the D7 hybrid simpler than `_meta_state.md`?

**Strongest counter-interpretation:** D7 is two-place storage (INDEX + `_branch.md` rationale); maintaining two places is harder than maintaining one (`_meta_state.md` alone).

**Why the counter fails (structural grounds):** The "INDEX" in D7 is a DERIVED view, not a primary artifact. It's regenerated on demand from existing files. The only primary write is the one-line addition to next `_branch.md` — which already exists and is being created anyway. So D7 is actually ONE write site (`_branch.md`, which is already being written), not two. `_meta_state.md` as a primary artifact is ALSO one write site, but it's a NEW file requiring schema, sync rules, and divergence management.

D7's primary write count is 1 (existing site, one new field). `_meta_state.md`'s primary write count is 1 (new file, full schema). D7 wins on simplicity.

**Confidence:** HIGH.

**Resolution:** D7 is structurally simpler. The INDEX is derived; the rationale field is a tiny addition to an existing artifact.

**What is fixed:** "D7 hybrid" reduces to "next `_branch.md` carries selection rationale; INDEX is generated when needed."

**What is no longer allowed:** Treating D7 as two-primary-artifact maintenance.

**What depends on this:** Innovation generates the concrete shape of the `_branch.md` field; the INDEX generator is a future tooling concern.

---

### Ambiguity 3: Level-by-level distinction — when does an artifact become necessary?

**Strongest counter-interpretation:** Build the `_meta_state.md` artifact NOW so it's ready when L4 needs it; refactoring later is more expensive than building right.

**Why the counter fails (structural grounds):** The L4 requirements are unknown until L1-L3 produce evidence. Building `_meta_state.md` v1 today commits to a schema (visited-path-list per the L1 row) that may not match L4's branch-graph needs (per the meta-loop spec's own Open Questions: "does it need a branch graph from the beginning or is visited-path enough?"). Premature commitment locks in a shape that may need to be redesigned. Better: build at L1 with minimal artifact (the `_branch.md` field), produce evidence about what cross-head state is actually needed at L4, and design the L4 artifact then.

This matches the project's own DEFERRED-with-revival-trigger pattern.

**Confidence:** HIGH.

**Resolution:** Level-aware verdict. L0: nothing needed (human holds it). L1: `_branch.md` rationale field; no separate artifact. L2-L3: optional INDEX-as-derived-view if corpus-walk costs become noticeable; still no primary artifact. L4: design a real cross-head state structure THEN, informed by L1-L3 evidence; defer that decision until L4 is being built.

**What's fixed:** the verdict is level-aware; today's decision is L1.

**What's no longer allowed:** designing for L4 inside the L1 decision.

**What depends on this:** the build sequence (L1 first, no `_meta_state.md`).

---

### Ambiguity 4 (load-bearing concept test — anti-bloat)

**Concept:** anti-bloat applies to this design question.

**Counter:** small design question; anti-bloat is over-applied.

**Why counter fails:** the prior two inquiries explicitly enforced anti-bloat; consistency-preserving applies here. Extra paragraphs would replicate the exact pattern the user has named as failure mode.

**Confidence:** HIGH.

**Resolution:** Anti-bloat applies. Verdict is short.

---

### Ambiguity 5 (load-bearing concept test — terminology: "derived view")

**Concept:** "Derived view" as the framing for the INDEX.

**Counter:** "derived view" is loop-coined; user may prefer different language.

**Why counter fails:** the term is descriptive (derived from corpus, view of current state); not smuggling extra structure. Alternative ("generated cache," "materialized scan") works equivalently. Term doesn't change the recommendation.

**Confidence:** MEDIUM.

**Resolution:** Use "derived view" with brief expansion ("generated on demand from existing files; not maintained as a primary artifact").

---

### SV4 — Clarified Understanding

The verdict is **drop `_meta_state.md` at L1**. Replace with:
- Selection rationale field added to next inquiry's `_branch.md` (one new line: "Selected from [parent inquiry] direction [X] because [rationale]").
- Path memory + double-visit prevention + stop/continue support derive from corpus walk (existing finding.md frontmatter + `_branch.md` Relationships chains).
- Spin-detection at L1 is the human Selector's responsibility, not a system function.

At L2-L3: optionally add a generated INDEX view (e.g., `tools/meta_loop_index.sh` that scans the corpus and outputs a flat list of `(inquiry-id, parent, rationale, status)`). Still no primary `_meta_state.md` artifact.

At L4 (multi-head autonomous): design a real cross-head state structure THEN, informed by L1-L3 evidence about what branch/merge state is actually needed. This deferral is consistent with the meta-loop spec's own Open Question ("does it need a branch graph from the beginning or is visited-path enough?").

The meta-loop spec's "memory" language is compatible with this reading: memory IS the corpus + per-use rationale, not a discrete file.

---

## Phase 4 — Degrees-of-Freedom Reduction

### Fixed

- **L1 verdict:** drop `_meta_state.md`; use `_branch.md` rationale field + corpus walk.
- **Function-split:** group 1 (path/edges) corpus-derivable; group 2 (rationale + spin) recording-required at point-of-use OR human-handled.
- **L2-L3 path:** optional generated INDEX view; no primary artifact.
- **L4 path:** deferred; design then with concrete requirements.
- **Spec compatibility:** the meta-loop spec's language doesn't prohibit corpus-as-memory.

### Eliminated

- ~~Build `_meta_state.md` v1 at L1~~ (overkill; functions covered elsewhere).
- ~~D7 as two-primary-artifact~~ (INDEX is derived, not primary).
- ~~Speculative L4 design today~~ (premature commitment to a shape).
- ~~Anti-double-visitation as primary purpose~~ (consequence of A1, not driver).

### Remaining viable paths

- Innovation generates concrete shape of the `_branch.md` rationale field (1-2 phrasings).
- Innovation generates the INDEX-generator command shape (for L2+ optional use).
- Critique tests whether the verdict's L1-only scope holds up against the user's planned trajectory.

---

### SV5 — Constrained Understanding

The solution space has collapsed: at L1, no new primary artifact; the rationale field on next `_branch.md` covers selection-rationale; corpus walk covers path-memory; human Selector covers spin-detection. The verdict is keep nothing new; the user's instinct that the artifact may not be necessary is structurally supported for L1. L4 design is deferred.

---

## Phase 5 — Conceptual Stabilization

### SV6 — Stabilized Model

**The user's instinct is correct: `_meta_state.md` is not necessary at L1.**

The artifact would serve six+ functions (path memory, durable cross-run, stateful traversal evidence, anti-spinning, selection rationale, stop/continue, plus branch/merge and calibration data). But these split into two groups with different homes:

**Group 1 — Corpus-derivable (no new artifact needed):**
- Path memory (where has the meta-loop been): walk `finding.md` frontmatter + `_branch.md` Relationships chains.
- Durable cross-run memory: the corpus is durable; each finding.md persists.
- Stateful traversal evidence: derivable from the chain.
- Stop/continue support: derivable from finding.md statuses.
- Anti-double-visitation: check if `finding.md` exists for the candidate inquiry.

**Group 2 — Recording-required (per-use, in existing artifact):**
- Selection rationale: add a one-line field to next inquiry's `_branch.md` — "Selected from [parent inquiry path] direction [Navigation type or specific direction] because [brief rationale]." Already near point-of-decision; no new file.
- Calibration data for future automation: accumulates automatically as the rationale fields populate across the corpus.

**Group 3 — Human-handled at L1:**
- Anti-spinning: at L1 with human Selector, the human notices "we did this yesterday." Not a system function until L4.
- Branch/merge state: not relevant at L1 sequential; relevant at L4 multi-head.

**Recommended verdict for L1:** drop `_meta_state.md`. Build L1 with the `_branch.md` rationale field; no separate state file.

**Optional for L2-L3:** if corpus-walk costs become noticeable, add a generated INDEX view (e.g., `tools/meta_loop_index.sh`). Still derived, not primary.

**Deferred for L4:** when multi-head autonomous selection is being designed, evaluate then whether a cross-head state structure (branch sets, merge points) is needed. The meta-loop spec's own Open Question — "does it need a branch graph from the beginning or is visited-path enough?" — is exactly this deferral. Don't pre-commit to a v1 shape.

**The meta-loop spec's "memory" language is preserved.** Memory IS the corpus + per-use rationale; it's just not a discrete file. The spec author's COULD-tag on "Design `_meta_state.md` v1" already signaled this uncertainty.

### How SV6 differs from SV1

- SV1 had a fuzzy function list and unclear verdict; SV6 has the function-split and a clear "drop at L1" recommendation.
- SV1 considered D7 as the alternative; SV6 reduces D7 to "rationale on `_branch.md`; INDEX is derived" — simpler than D7 as written.
- SV1 didn't explicitly distinguish L1 from L4; SV6 has level-aware verdict.
- SV1 was uncertain whether the user's instinct had structural support; SV6 confirms it does, with reasoning.

---

## Saturation Telemetry

- **Perspective saturation:** Definitional/Consistency surfaced spec-language compatibility (KI9); Phase/Calibration-State reinforced level-awareness; other perspectives confirmed without new anchors. Saturation reached after 7 perspectives.
- **Ambiguity resolution ratio:** 5 ambiguities raised; 5 resolved (4 HIGH + 1 MEDIUM). Ratio = 5/5.
- **SV delta:** SV1 had a fuzzy verdict; SV6 has level-aware "drop at L1" with structural reasoning. Substantial shift.
- **Anchor diversity:** 4 Constraints + 9 Key Insights + 4 Structural Points + 3 Foundational Principles + 4 Meaning-Nodes from 7 perspectives.

### Failure mode check

- **Status Quo Bias:** Watched. The meta-loop spec is NOT being protected; the verdict explicitly recommends NOT building the artifact it names. Status quo (build `_meta_state.md`) was challenged. Not detected.
- **Premature Stabilization:** Watched. Three load-bearing concept tests applied (anti-bloat, terminology, level-aware). Not detected.
- **Anchor Dominance:** Watched. The "corpus-derivable" insight is strong but doesn't carry the whole model — group 2 needs recording, level-aware verdict matters, spec-compatibility check is separate. Not detected.
- **Perspective Blindness:** Watched. Definitional/Consistency was uncomfortable (had to argue spec-compatibility for a non-canonical reading); applied it. Not detected.
- **Clean Resolution Trap:** Watched. Each ambiguity stated counter and structural reason. The "drop the artifact" resolution is clean but tested against the strongest counter (spec says memory is needed → counter: memory is structurally the corpus). Not detected.
- **Self-Reference Blindness:** Watched. Diagnosis grounds in spec text + corpus structure; not in MVL+'s own framework. Not collapsing.

**No failure modes detected.**

---

## Honest Value Tag

**MEDIUM-HIGH.** Sensemaking added real structure beyond exploration's enumeration:

- The function-split (corpus-derivable vs recording-required) is a genuine refinement that the verdict turns on.
- The level-aware verdict (L1 vs L2-3 vs L4) prevents speculative L4-driven design at L1.
- The reduction of D7 (INDEX as primary) to D7-simplified (INDEX as derived view + rationale on `_branch.md`) is a real simplification.
- The spec-compatibility argument (meta-loop's "memory" language doesn't require a discrete file) preserves the spec while enabling the simpler implementation.

What sensemaking did NOT need to do:
- Re-derive the function list (exploration did).
- Pick the field shape for `_branch.md` (innovation's job).

This MEDIUM-HIGH is honest. The "drop at L1" verdict has structural backing; the user's instinct is validated with reasoning rather than just deferred-to.
