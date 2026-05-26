# /intuit — Future Capabilities

Capabilities that come from `/intuit` maturing — calibration data accumulating, corpus growing past context-window headroom, the project reaching Level 3+ autonomy. Each seed names what becomes possible and the gating condition that activates it.

---

## Level 3 — Custom intuition-space generation per problem

`/intuit`'s current operation is brute-force structural transfer (Level 2): forward-transform the source into a relational abstraction, scan the corpus for matches, project transferable consequences back. The transform space is the same for every source.

A Level 3 capability would generate a **custom-tailored transform space per problem** — a Z-space specifically constructed so this source's hard operation becomes easy in the transformed domain. Beyond brute-force transfer; the system constructs the right vocabulary for each problem instead of forcing every problem through a single fixed predicate scheme.

**Gating condition:** `/intuit` Phase D+ maturity (`N ≥ 30 calibrated hunches per discipline`) AND operational evidence that brute-force transfer hits a ceiling on a recurring class of problems — i.e., specific cases where Phase B divergent-mode produces shallow matches because the source's structure doesn't compress well into the existing predicate vocabulary.

**What unlocks downstream:** the autonomy-ladder's Level 3+ ("tactical self-improvement" — system proposes its own architectural changes) depends on the system being able to construct novel framings on demand. Level 3 intuition is the substrate for Level 3 autonomy.

---

## Live calibration weight updates

Each `/intuit` invocation produces a hunch with a stated reliability. Each downstream outcome confirms or contradicts that hunch. The delta is calibration data.

The MVP records this delta. A live-update capability would **modify the hunch mechanism in response to accumulated calibration** — adjusting reliability priors, surfacing systematically-miscalibrated predicate categories for refinement, and (at the Baldwin cycle's mature stage) generating spec-refinement proposals when miscalibration patterns persist across many cycles.

**Gating condition:** per-discipline `N ≥ 50` for "miscalibration claims" (per the `/intuit` spec's gates) AND a closed-loop mechanism for proposing spec-changes from observed miscalibration without bypassing the SIC loop.

**What unlocks downstream:** the Baldwin cycle's actual self-improvement arm. Today the human inspects calibration logs and decides what to change; live updates remove the human-in-the-loop step for routine calibration patterns.

---

## Chunk-level embedding granularity

`/intuit`'s scan operates at finding-level (whole-document abstractions). When the corpus is small, the LLM reads all abstractions directly in context.

When the corpus exceeds the context-window headroom (~100–200 findings, depending on substrate context size), **chunk-level embeddings become the scaling layer** — pre-computed structural abstractions per section/claim, retrievable by similarity to the source's abstraction, narrowing the candidate set before the LLM reads the full content.

**Gating condition:** corpus size exceeds context-window headroom, AND empirical evidence that finding-level granularity misses sub-document matches that would have surfaced under chunk-level.

**What unlocks downstream:** the system can hold a much larger corpus than the LLM context can read in one pass, while still operating on relevance-tagged structural matches. Required for any project state where the corpus grows beyond the substrate's effective context.

---

## Cross-discipline pipeline-early default-on

`/intuit` runs pipeline-early (auto-invoked before `/surfacing` at inquiry creation) in Phase C as opt-in; Phase D makes it default-on. When default-on, every inquiry begins with `/intuit` producing baseline intuition on the new `_branch.md` before any other discipline runs.

**What this unlocks:** every downstream discipline sees pre-seeded hunches from the start, biasing attention toward corpus-matching patterns that prior work has surfaced. The corpus becomes a structural prior on every new inquiry — `/sense-making` knows which anchors prior similar inquiries leaned on; `/innovate` knows which mechanisms produced novel survivors in similar territory.

**Gating condition:** Phase D calibration maturity (N ≥ 30 per discipline) AND demonstrated value: pipeline-early invocations in Phase C opt-in produce hunches that downstream disciplines find useful (not just noise) in ≥60% of inquiries.

---

## Persistent thinking_space.md artifact (cross-call Working Memory)

`/intuit`'s Working Memory primitive operates at the Predictive RC layer ephemerally (the in-call LLM context). A persistent `thinking_space.md` artifact would let Working Memory operate at the Retrospective RC system-level: cross-call continuity that survives session ends.

Useful when an inquiry's `/intuit` invocations need to reference earlier hunches from the same conversation, OR when the meta-loop needs the cumulative state of the corpus's structural abstractions in a single readable place.

**Gating condition:** the Baldwin cycle requires cross-call continuity that exceeds what `_state.md` provides. Specifically: when the same predicate vocabulary needs to be shared across inquiries (so abstractions in inquiry N are recognizable from abstractions in inquiry N+1 without re-derivation).
