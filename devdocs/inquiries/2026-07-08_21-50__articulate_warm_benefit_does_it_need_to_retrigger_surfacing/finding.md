---
status: active
model: claude-opus-4-8
effort: unknown
refines: devdocs/inquiries/2026-07-08_20-39__why_existing_surfacing_didnt_refetch_canon__upstream_articulate_or_enrichment/finding.md
---
# Finding: articulate_warm — does it earn its place, and should it re-trigger surfacing?

## Changes from Prior

**Prior path:** devdocs/inquiries/2026-07-08_20-39__why_existing_surfacing_didnt_refetch_canon__upstream_articulate_or_enrichment/finding.md (the "ordering-problem" finding — it diagnosed that the framing step of the thinking loop runs before any project material is fetched, and proposed a two-pass articulation as the fix)

**Revision trigger:** Stronger framing — a design critique from the user pressing one specific piece of that fix.

**What's preserved:** The two-pass articulation design itself (a first "cold" framing pass on the raw question, then material is fetched, then a second "warm" framing pass) and the ordering-problem diagnosis are unchanged.

**What's changed:** The prior finding's three-part fix included, as its part [c], an *optional* "staged re-surface" — the idea that the warm pass *could* trigger a second round of material-fetching. This finding upgrades that from **optional to conditional-but-core** (it belongs in the design, and fires whenever it is needed).

**What's new:** A concrete termination rule for the resulting loop; a newly-identified judgment step the loop needs (detecting whether the framing actually moved); and an honest sizing of the warm pass's value when it does *not* re-fetch.

**Migration:** One edit to the canon design doc `docs/how_articulate_warm_should_be.md` (details in Next Actions). Not applied during the dive itself (user-gated); **subsequently applied on 2026-07-08** — the design edits and the pass rename (`articulate_cold` / `articulate_warm`) landed, and the doc file was renamed from `how_articulate_via_context_should_be.md`. The built-spec rename (`cognitive_harness/articulate_simple/` → `articulate_cold`) remains deferred.

## Question

This is a design inquiry about a two-pass "articulation" the project is building. Some vocabulary first, so the rest reads cleanly:

- **Articulation** = the step that restates a user's raw question into a clearer, better-framed version before the real work begins. The project runs it in two passes.
- **articulate_cold** (currently named `articulate_simple`) = the FIRST pass. It runs on the bare question, before any project material has been pulled into view.
- **surfacing** = the step that pulls relevant project material (docs, specs, prior findings) into the model's attention.
- **articulate_warm** (currently named `articulate_via_context`) = the SECOND pass. It runs *after* surfacing, so it can re-frame the question now that the material is visible.
- **MQ2** = one specific sub-check inside a pass called the "context-need" question: *what material does this task need that isn't in front of us yet?* Its answer is what tells the surfacing step what to go fetch.

The user's verbatim question:

> when articulate_cold (pre-context / first pass) finishes we have some rephrasings (considered articulations), and then surfacing happens. By then, in the LLM's context, the previous rephrasing is already effectively updated — not SAVED as an artifact, but the improved understanding is already present in the LLM's in-context understanding. So what is the benefit of adding articulate_warm (post-context / second pass), which basically just does a better rephrasing again? Unless it can trigger ANOTHER surfacing, it is not much of a help. So maybe articulate_warm should be able to RE-TRIGGER surfacing. Let's dive deep into this.

**The goal:** decide whether the warm pass earns its place, and whether "re-trigger surfacing" should be a core part of what it does (rather than the optional extra the current design doc calls it) — and if so, specify what that actually requires.

## Finding Summary

- **The user's core instinct is right, and it is now the design.** A warm pass that only re-phrases the question is genuinely marginal, because by the time it runs the model already holds the surfaced material and has already absorbed a better understanding implicitly. The warm pass earns its keep by being able to **re-fetch material**, not by re-phrasing.

- **The load-bearing reason is a decoupling.** The warm pass has two separable products: (1) a **better rephrasing**, and (2) a **re-anchor** — a corrected answer to "what material does this task actually need?" These have different dependencies. The rephrasing rides on material already in view (so it is marginal). The re-anchor matters precisely when the first pass fetched the *wrong* material — but then the model is holding the wrong material, so naming the right target is **inert until a re-fetch actually brings the right material in.**

- **So the warm pass's real job is to control a fetch loop, not to re-phrase.** Its structural role is: re-anchor → if the target moved, re-fetch → re-anchor again → stop when the target stops moving. The better rephrasing is the *by-product* emitted once things settle, not the point.

- **"Re-trigger surfacing" is not new machinery — it is reuse.** The surfacing spec already supports being re-invoked with a refined target, and already assigns that re-invocation to the runner (the orchestration layer). Both passes already end by emitting the same "context-need" signal. So a warm re-fetch is the exact same path the cold pass already uses, run a second time. The *only* genuinely new thing the design adds is a rule for **when the loop stops.**

- **The stop rule is a fixpoint plus a hard cap.** Stop when the warm pass's "context-need" comes back unchanged (or says "no further material needed" — an answer the step already produces). A **round cap** (default 2 re-fetches) is the actual termination *guarantee*, since we cannot prove the target always settles on its own. In practice the loop runs 0 or 1 re-fetches.

- **One new judgment step is required:** deciding whether the target "materially changed" between rounds (a different area of material, not just reworded). Without it, "unchanged" is undefined and the stop rule has nothing to test.

- **The user's stronger claim — "the warm pass is not much help without re-surface" — overshoots, and is resized down.** Even with no re-fetch, writing the improved framing down as an explicit artifact has real value *across sessions and under autonomy*: the in-view understanding is lost when a session ends, and later or automated consumers get only the written artifact. So: promote re-fetch to core, **and** keep the written commit — it is weak within one live session but real once work spans sessions.

## Finding

### Why this came up

The project is redesigning how a thinking-loop frames a question before working on it. The prior "ordering-problem" finding (the inquiry this one refines) identified a specific bug: the framing step runs *cold* — before any project material is fetched — so the framing can't take the project's own docs into account. Its fix was a two-pass shape: frame cold, fetch material, then frame again "warm." That second warm pass is the subject here. The just-authored design doc for the warm pass (`docs/how_articulate_warm_should_be.md`) treats a *second* round of fetching as an optional "fuller form." The user's question presses exactly that: if the warm pass mostly re-phrases, and the model already understood the material implicitly, what is it even for — unless it can fetch again?

### 1. The decoupling — the causal core

The warm pass, as designed, does two things, and the key move of this whole finding is to **pull them apart** because they behave completely differently:

- **Product A — a better rephrasing.** Restate the question in sharper words now that the material is visible. But the material is already in the model's working memory (its "context"), and reading the cold rephrasing *through* that material already updates the understanding implicitly. So writing a sharper rephrasing adds only an explicit pin on something already grasped. **This is marginal** — and this is the half the user's critique correctly targets.

- **Product B — a re-anchor.** Re-answer "what material does this task actually need?" This matters in exactly one situation: the cold pass aimed at the *wrong* material. Say the cold pass guessed the task was about area T1 and fetched T1, but with T1 now in view it becomes clear the task was really about area T2. The warm pass can now *name* T2 correctly. **But naming T2 is useless on its own** — the model is holding T1's material, not T2's. The corrected aim can't be acted on until something actually goes and fetches T2.

That second point is the load-bearing mechanism: **the re-anchor is inert without a re-fetch.** The valuable half of the warm pass (correcting the aim) is precisely the half that *requires* re-fetching to pay off. The half that needs no re-fetch (re-phrasing) is the weak one. (One precision the critique step added: "inert" is slightly too strong — the re-anchor does produce one thing without a re-fetch, namely the *trigger*, the corrected target. What it can't produce without a re-fetch is the *payoff*: a framing actually grounded in T2's material. So "produces the trigger, not the payoff" is the exact claim.)

### 2. What the warm pass's real job actually is

Once the two products are decoupled, the warm pass's real structural job falls out: it is not "produce a better rephrasing," it is **control a fetch loop.**

The shape:

```
  cold framing → fetch material →  [ warm framing: re-check the target ]
                                          │
                        target moved? ────┤──── no  → done → emit the settled framing → downstream
                                          │
                                         yes → re-fetch the new target → back to warm framing
```

The warm pass re-checks the aim; if the aim moved, the runner re-fetches; the warm pass re-checks again; and so on until the aim stops moving. The "better rephrasing" the user doubted is simply what gets emitted once the aim settles — a terminal by-product, not the purpose.

### 3. "Re-trigger surfacing" is reuse, not new machinery

It would be easy to read "make the warm pass able to re-fetch" as a big new capability. It is not — and keeping this honest matters, because it sizes the whole change. Checking the actual built specs:

- The surfacing spec already says it is **re-invocable** with a refined target, and can fetch *just the newly-relevant* material rather than redoing everything.
- The surfacing spec already assigns cross-invocation re-invocation to **the runner** (the orchestration layer that sequences the steps).
- Both the cold and warm passes already end by emitting the same "context-need" signal, which is what the runner turns into a fetch.

So a warm re-fetch is literally the cold pass's own path — *emit context-need → runner fetches* — run a second time with the corrected target. No new fetching capability, no new discipline. The change is **mostly recognition** (naming what the warm pass already structurally is) **plus one small addition.**

### 4. The one genuinely-new piece: when the loop stops

The single thing the specs do *not* already provide is a rule for terminating the loop. That is this finding's real design contribution, and it has three parts:

- **The fixpoint (the fast path).** Stop when the warm pass's context-need comes back *unchanged* from the previous round, or when it answers "no further material needed." That "no further material needed" answer is not something new — it is a value the context-need check already produces. The loop iterates until the thing that drives fetching stops changing.

- **The round cap (the actual guarantee).** We cannot *prove* the aim always settles — it could, in a pathological case, drift or oscillate. So the real termination *guarantee* is a hard **round cap: default 2 re-fetches** (at most 3 warm passes), tunable. The fixpoint is what makes the loop stop *quickly* in normal cases; the cap is what makes it stop *for certain*. (The critique step promoted the cap from "backstop" to "the guarantee" for exactly this reason.)

- **The oscillation guard.** If the aim flip-flops (T1 → T2 → T1), stop and flag it rather than spin — hand the unstable framing downstream with a note.

In practice the loop is short by construction: **0 re-fetches** when the cold aim was already right (the warm check immediately says "nothing new needed"), or **1** when the aim moved once and then settled. The cap is rarely reached, and each re-fetch is incremental (fetch only the newly-relevant material), so a round is cheap.

**The new judgment step this requires.** The stop rule leans on "context-need *unchanged* from the prior round." But comparing two context-needs for a *material* change is itself a judgment the design must name — otherwise "unchanged" is undefined. So the loop needs one added decision point: *did the target materially change? — i.e., does it point at a genuinely different area of material, versus the same target merely reworded?* This is analogous to a judgment the cold pass already makes, and most likely lands as a single rule inside the termination section (only if it turns out subtle does it deserve its own design pass).

### 5. Sizing the warm pass honestly when it does NOT re-fetch

The user's *core* instinct is right and is now the design: re-fetch is the load-bearing half, and should be core. But the user's *stronger* claim — that the warm pass is "not much help" without re-fetch — overshoots, and honesty runs both ways here, so it is resized rather than rubber-stamped.

Even when no re-fetch happens, the warm pass still writes down the improved framing as an explicit artifact. How much is that worth?

- **Within one continuous session: weak.** The model already holds the material and the implicit understanding, so an explicit re-statement adds only a pin. The user's premise has real force here.
- **Across sessions / under autonomy: real.** The model's in-view working memory is **lost when a session ends.** Later sessions, or automated downstream steps, get *only* the written artifact — not the implicit understanding. Then the explicit committed framing is the *only* durable carrier of the warm frame.

So the standalone commit is **weak-in-session but real-across-sessions** — its value scales with how fragmented and autonomous the work is. This echoes the prior ordering-problem finding's theme that these effects get more severe as the system runs with less human hand-holding. The verdict: promote re-fetch to core **and** keep the written commit; reject "useless without re-fetch" as an overshoot.

### 6. A note on the loop's front (the assembly picture)

Putting the pieces together upgrades how we picture the front of the whole thinking loop. The prior finding framed it as a **straight two-step bootstrap**: aim cold → fetch → frame warm. With re-fetch as core, the front becomes a **loop that settles**: aim cold → fetch → frame warm → *re-fetch if the aim moved* → … → settled. The warm pass is the loop's controller, surfacing is the fetch it drives, and the context-need check is the signal that says when to stop. This is an elegant re-picturing and it rests on the same evidence as everything above — it is a lens on the front, not a separate new claim, and it does not change what ships (the runner rule + the stop rule).

### A note on how this dive was run (kept visible for honesty)

This inquiry is the harness examining its own machinery, which carries a self-flattery risk, so the grounding was kept external: every load-bearing claim rests on the actual built spec text, not on the framework agreeing with itself. There is also a live datum worth recording: this dive's *own* cold framing pass ran on the bare question while the operator (the model driving the pipeline) already held warm design-context from authoring the design doc earlier in the session. That warm context did the real re-aiming the cold pass structurally could not — a small live instance of exactly the effect under study, and evidence that the re-anchor value is real and that it is masked when the operator is already primed.

## Seeds

One seed passed the gate this dive.

- **Hypothesis:** maybe our *loop-composition* could be a **fixpoint** — iterate a *pair* of thinking steps until the signal that couples them stops changing, not just run them once in sequence. Other step-pairs in the harness may hold a latent re-fetch fixpoint of the same shape (e.g., a later sense-making step could reveal a new material-need that warrants a re-fetch).
- **Type:** inspiration (a reusable structural frame).
- **Anchor (project concept):** the harness's discipline-composition — how the thinking steps chain.
- **Source + source-support:** this dive's own result — the articulate_warm ↔ surfacing pair was shown to compose as a fixpoint (settle-when-the-context-need-stabilizes), grounded in the surfacing spec's re-invocation mechanism and the context-need check's existing "no further material needed" verdict.
- **Door:** novelty — "compose a step-pair as a fixpoint" is not stated harness-wide; the current design names only a *linear* front.
- **Grade:** nascent (one instance so far — this pair).
- **Maturation-trigger:** another discipline-pair is examined for a re-fetch loop, OR the loop architecture is next revised. Distinct from the prior `diag-S2` seed (which is about a *single* step doing double duty across timing); this is about a *pair's* iterative composition — cross-referenced, not merged.

## Inherited Commitments Re-test

The inquiry's framing declared a light re-test of one commitment inherited from the just-authored design doc.

- **Commitment:** a second round of surfacing is an *optional* "fuller form" of the warm pass (the design doc `docs/how_articulate_warm_should_be.md` calls staged re-surface "[c] optional" in its §4, while its §7 separately calls the staged form "the general case").
- **Source:** `docs/how_articulate_warm_should_be.md`, §4 and §7.
- **Re-test status: RE-TESTED — commitment found INVALID (revised).** The "optional" framing does not survive. The decoupling shows re-fetch is what makes the load-bearing half of the warm pass (the re-anchor) actionable; without it the warm pass keeps only its marginal half. Re-fetch is therefore **conditional-but-core** — it belongs in the design and fires whenever the aim moves (0–1 times typically), rather than being an optional add-on. The doc was already internally split (its own §7 called the staged form "the general case"), so this resolves the contradiction toward §7 rather than overturning a settled position.
- **Evidence:** the surfacing spec's draw-from-a-given-territory constraint and its session-local working memory (which make the re-anchor inert without a re-fetch); the context-need check's existing verdict axis (which supplies the stop signal); and the live self-reference datum above.

The re-test *changed* an inherited commitment on structural grounds — the design content here reflects "conditional-but-core," not the inherited "optional."

## Next Actions

### MUST

- **What:** Apply the design edits to `docs/how_articulate_warm_should_be.md` — (a) reframe §4 so the warm pass is described as a fetch-loop controller (re-check the aim; when the aim moves, the runner re-fetches; the rephrasing is the terminal by-product); (b) resolve the §4-"optional" vs §7-"general case" contradiction toward re-fetch being conditional-but-core; (c) add a new "Termination / convergence" section (the fixpoint stop rule + the round cap as the guarantee + the oscillation guard + the material-change judgment step); (d) reframe §7's "surface broadly first" point as *reducing loop length* rather than as the only safeguard; (e) keep an honest sizing note (the written commit is weak-in-session, real-across-sessions).
  - **Who:** the user, or a follow-up editing pass once released.
  - **Gate:** user go-ahead (the user said "dont make changes yet" this session).
  - **Why:** this is where the finding's value lands in canon; unapplied, the design stays inert in an inquiry folder and the doc keeps contradicting itself.
  - **Status: APPLIED 2026-07-08.** All five edits (a)–(e) landed, the pass rename was applied in-doc, and the file was renamed to `docs/how_articulate_warm_should_be.md`. The built-spec rename remains deferred (a separate 439-file sweep).

### COULD

- **What:** Land the runner's "if the aim moved, re-fetch" rule + the termination rule in the *built* specs under `cognitive_harness/` (the surfacing spec already assigns cross-invocation re-invocation to the runner, so that is the natural home for the stop rule).
  - **Who:** a follow-up spec-edit pass.
  - **Gate:** condition-bound — after the canon-doc wording is settled.
  - **Why:** puts the one genuinely-new piece of control-logic where it will actually run.
  - **Depends-on:** MUST item "apply the canon-doc edits." This COULD is GATED — do not act until the MUST resolves (the built-spec wording should follow the settled canon wording).

- **What:** Add a forward-pointer from the prior ordering-problem finding's part [c] to this finding (its "optional staged re-surface" is now conditional-but-core; its two-step-bootstrap picture is now a settling loop).
  - **Who:** a light cross-link edit.
  - **Gate:** observable — whenever the prior finding is next touched.
  - **Why:** keeps the finding-chain coherent so the earlier "optional" is not read as still-current.

### DEFERRED

- **What:** Apply the `articulate_simple → articulate_cold` / `articulate_via_context → articulate_warm` rename across the doc (and, if in scope, the built specs).
  - **Gate:** user release — the name is chosen (`articulate_cold / articulate_warm`) but the user said "dont make changes yet"; sequence it with or before the canon-doc edit so the doc isn't edited for names twice.
  - **Why (if revived):** consistent vocabulary.

- **What:** Pursue the fixpoint-composition seed (check whether other step-pairs hold a latent re-fetch fixpoint).
  - **Gate:** condition-bound — another discipline-pair is examined for a re-fetch loop, or the loop architecture is next revised.
  - **Why (if revived):** a possible architectural generalization of the loop's front.

- **What:** Design the "material-change" comparison rule as its own scoped pass.
  - **Gate:** condition-bound — only if the one-line form (folded into the Termination section) proves subtle in practice.
  - **Why (if revived):** the stop rule's "unchanged" test rests on it.

## Reasoning

The gate (the critique step) prosecuted five load-bearing claims and all five survived, four of them sharpened rather than merely passed — the sharpenings are where the real work happened:

- **"The re-anchor is inert without a re-fetch"** — survived, refined to "produces the *trigger*, not the *payoff*." The strongest objection was that the model might re-aim usefully on cues of T2 already present in T1's material. It can *name* T2 from cues, but it cannot ground the framing in T2's actual material without fetching it — so the objection sharpens the claim rather than breaking it, and actually strengthens the case for re-fetch being core.

- **"Re-fetch is reuse, not new machinery"** — survived clean. The objection (the runner rule + stop rule *are* new orchestration) is granted and already scoped honestly: the fetching *capability* is reuse; the *control logic* is new-but-small.

- **"The loop terminates"** — survived, refined so the round cap (not the fixpoint) is named as the actual guarantee, because we cannot prove the aim always settles.

- **"Promote re-fetch from optional to core"** — survived, refined on the precise word: re-fetch is **conditional-but-core** (core role, fires 0–1 times), not "optional" and not "always-on." The objection (it fires rarely, so is "core" overclaiming?) is answered by distinguishing structural role from firing frequency.

- **"The standalone written commit is weak-but-real, not zero"** — survived. The objection (the model always holds the material, so the commit is worthless) fails because working memory is lost at session end; across sessions the written artifact is the only carrier.

The backstop hunt ("what does the design miss?") found the one genuine gap the disciplines hadn't named: the **material-change judgment step**, now folded in. Two other candidate gaps were checked and dismissed — a premature "no further material needed" is already guarded by an existing bias in the cold/warm framing step toward pulling in *more* context under uncertainty, and re-fetching does not lose the earlier material (the fetch step accumulates, adding the new area while keeping the old).

No full alternatives were killed outright; the earlier design steps instead *collapsed* five ambiguities (chiefly: are the two products really separable? — yes, different dependencies) and the generative step's self-check killed its own inflated framing ("a big new build") down to "mostly recognition plus one small rule." Throughout, the honesty guard ran both ways: the user's correct core insight was not deflated, and the user's overstated claim was not caved to.

## Open Questions

### Monitoring
- The fixpoint-composition seed: watch whether a second step-pair turns out to hold the same re-fetch fixpoint. One instance so far.

### Blocked
- Where the control-logic should live (canon doc only vs also the built `cognitive_harness/` specs) is blocked on the canon-doc wording being settled first.

### Research Frontiers
- The "material-change" comparison rule, *if* it proves subtle — no known difficulty yet, but it has not been designed beyond "a genuinely different area of material, not just reworded."

### Refinement Triggers
- The **conditional-but-core** verdict re-opens if the round cap turns out to *bind often* — i.e., if real runs routinely need 2+ re-fetches. That would mean the loop is not "short by construction," which is a premise this finding rests on; re-open on that specific observation, not on generic change.
- The **whole decoupling** re-opens if a warm session is ever shown to reliably re-aim *and act* without a re-fetch — i.e., if the model can ground a T2 framing from T1 material alone. That specific capability is the load-bearing thing the "inert without re-fetch" claim denies; its neutralization is the trigger.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
i have a question, when articulate cold finishes we have some rephrase, and then surfacing happens and inthe context of LLM already the previous rephrasing is changed but not saved, it is in the context understanding. so what is the benefit of adding articulate warm which basically does again better rephrasing, but unless it can trigger another surfacing it is not much of a help dont you think ? so maybe articulate warm should be able to retrigger surfacing ? lets dive deep into this
```

</details>
