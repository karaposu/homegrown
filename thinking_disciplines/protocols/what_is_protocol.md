# What Is a Protocol?

> An informal companion to `desc.md`. This file is honest about what's still fuzzy. `desc.md` is the formal map; this file explains what protocols seem to be, what gap they're trying to fill, and how that gap connects to where the project wants to go — while flagging the parts where we don't actually know yet.

---

## The short version (with caveats)

A **protocol** is an operational procedure — something that runs *between* the cognitive work, not *as* cognitive work. Disciplines transform understanding (ambiguity → clarity, problem → ideas, ideas → verdicts). Protocols don't transform understanding. They *handle* the outputs of disciplines: they route them, sequence them, save them, transfer them, hand them off.

The cleanest one-liner so far: **disciplines judge; protocols route.** Disciplines decide whether something is good or right or novel; protocols decide what comes next, where it gets stored, who sees it, how it resumes.

That distinction is *roughly* right and *not yet sharp*. SYNTHESIZE is a working example of the fuzziness: it has to *pick* what matters from a large pile of discipline outputs (judging) AND restructure for a reader (routing). Is it a protocol that contains a discipline-shaped step inside it? Is it a discipline that does protocol-shaped work? The current answer is "we call it a protocol because the routing is its dominant job," but that's a judgment call, not a derivation.

So treat the protocol/discipline distinction as a useful working frame that's earned its keep so far, not as a settled architectural fact.

**Note on level.** When asking "what protocols ARE most fundamentally," there are two answers at two levels. The cognitive-role-level answer is biology's autonomic between-operations machinery (sleep / consolidation / DMN / executive scheduling). The implementation-level answer is external scaffolding (notebooks-style, instantiated as the filesystem on this project). Both are accurate at their level. Earlier framings of "external cognition is the cleanest analog" were implementation-honest but functionally misleading — the cleanest functional analog is internal autonomic machinery; external is just how it's implemented when the substrate forces it. The "Function vs implementation" section below develops this in detail.

---

## The gap protocols are trying to fill

You can run a single discipline by hand. Type `/sense-making "some question"` and it produces `sensemaking.md`. No protocol needed. The discipline does the cognitive work; nothing else is required.

The gap appears the moment you chain disciplines, work across sessions, or coordinate between agents. Suddenly a bunch of operational questions show up that no discipline answers:

- **Before** running a discipline: which one? at what depth? for how long? against what input?
- **Between** disciplines: how does the next one receive the previous one's output? what files? what folder? what state to update?
- **After** a chain finishes: how do you turn the scattered outputs into something a person who wasn't there can act on? how do you hand off context to a different agent?
- **Across sessions**: how do you resume? how do you avoid overwriting last session's iteration? how do you tell, from a folder you didn't create, what's been done and what's next?

These aren't cognitive questions. No discipline produces a meaningful answer to them. They're *operational* questions — about flow, sequence, persistence, transfer.

That's the gap. The current loop runners (`/MVL`, `/MVL+`, `/inquiry`) fill some of it, embedded inside themselves: CONFIGURE inside `/inquiry`, RESUME inside all three, SYNTHESIZE templated inside `/MVL`'s finding writer. Embedded protocols work fine when there's only one runner doing the chaining and only one human in the loop.

The bet protocols-as-a-named-dimension is making is that this won't keep working. As the system reaches Level 2+ autonomy in `enes/desc.md`'s ladder — parallel runs, cross-agent handoffs, year-long inquiries — embedded operational machinery starts getting in its own way. Two runners with embedded RESUME implementations are an accident waiting to drift; embedded HANDOFF doesn't scale to three agents needing to pass an inquiry between them.

So the protocols dimension is, at its honest core, **architectural prep for a future where embedded operational machinery stops scaling**. It's named-vocabulary now so there's something to argue against later when the operational machinery starts demanding to be lifted out of the runners.

---

## The mission, in terms of the end goal

`enes/desc.md` describes the project's end-goal: a system that progressively develops its own consciousness layer — spontaneous attention, intrinsic valuation, real-time steering, etc. — through Baldwin cycles of self-directed evolution. The human starts as bootstrap (Level 0) and the human's role monotonically decreases.

Roughly, protocols connect to that goal in three ways:

### 1. Protocols are the operational substrate that Baldwin cycles run on top of

A Baldwin cycle is, mechanically: run a problem → observe → detect a pattern → propose a spec change → evaluate → encode. That cycle has to *physically happen* somewhere. The "encode" step has to write into a spec file. The "evaluate" step has to read prior cycles' outputs and compare. The "propose" step has to be triggered when a pattern threshold is crossed.

All of those are operational concerns. The Baldwin cycle is the cognitive shape; the protocols are how the cognitive shape *moves* from cycle N to cycle N+1.

The most concrete example here is **VERSION**. Right now, `/MVL` and `/MVL+` overwrite iteration N's outputs with iteration N+1's. For routine inquiries that's fine — only the final iteration matters. For the Baldwin cycle, iteration N's *prediction* and iteration N+1's *outcome* are exactly the comparison the cycle depends on. If iteration N is destroyed before iteration N+1 produces its outcome, there's nothing to calibrate against. VERSION is the protocol that would prevent this.

We don't *know* yet whether VERSION is strictly required for Baldwin — `/intuit`'s invocation traces might carry enough version-history on their own. That's an open question. But the *kind* of need VERSION addresses is exactly the kind of operational substrate that Baldwin cycles need to ride on.

### 2. Protocols are the architectural slots for autonomy-ladder transitions

Each rung of `enes/desc.md`'s autonomy ladder requires capabilities that don't yet exist:

| Autonomy rung | Capability needed | Protocol that would unblock it |
|---|---|---|
| Level 2 — system handles uncertain reviews | Distinguish routine from uncertain at inquiry-startup | SCOPE |
| Level 2-3 — parallel MVL loops with cross-comparison | Create parallel branches; combine results | BRANCH, MERGE |
| Level 3+ — system handles tactical self-improvement | Cross-session / cross-agent context transfer | HANDOFF, BRIEF |

These are mappings of *what would be needed*, not proofs that the named protocol is the right shape. SCOPE may turn out to be three protocols. BRANCH may turn out to be redundant with something `/intuit` produces directly. The list is provisional.

What's *not* provisional is that something must fill these slots before the autonomy ladder can be climbed. Calling them by name now lets future architectural conversations be specific instead of vague.

### 3. Protocols are the named-vocabulary infrastructure for the conversation that comes later

This is the most boring of the three reasons and the most defensible.

When the system reaches Level 2-3 and someone (probably the AI itself, partly) needs to argue for adding cross-agent handoff capability, "we need a HANDOFF protocol" is a *specific* request. "We need some way to transfer context to another agent" is a wish. The named-vocabulary turns wishes into things you can debate, design, accept, or reject.

The cost of carrying named-but-unimplemented protocols today is low — one document, occasional updates. The cost of *not* having the named vocabulary when the autonomy ladder needs it is higher: every architectural conversation has to invent its terms from scratch.

This is bet-hedging in favor of the project's stated trajectory. If the trajectory ships, the vocabulary becomes load-bearing. If the trajectory plateaus at Level 0-1, the vocabulary was light overhead.

---

## Function vs implementation: a two-level distinction

When asking "what protocols ARE most fundamentally," it helps to separate two levels:

- **The functional level** — what cognitive role do protocols play? What do they accomplish in the system?
- **The implementation level** — how are they realized on the available substrate? What machinery actually delivers the function?

These admit different answers on the same evidence.

### At the functional level: autonomic between-operations machinery

The cleanest analog is biology's autonomic between-operations machinery — **sleep / memory consolidation / default mode network / executive scheduling combined**. All of these are biology's way of handling routing, sequencing, persistence, and integration BETWEEN cognitive operations rather than within them. Sleep replays the day and consolidates traces. The default mode network does maintenance work when focused cognition is off. Executive function sequences operations and inhibits distractors. Hippocampal indexing binds disparate memories so they can be retrieved together later.

This is what protocols accomplish, cognitively. They are NOT what disciplines do (transform understanding within an operation); they're what handles the between-operations work that lets a sequence of operations cohere.

### At the implementation level: external scaffolding

On the current LLM substrate, protocols are IMPLEMENTED as external scaffolding — `_state.md` files, folder-as-thinking-structure, command sequencing, the filesystem itself. The reason is a hard architectural fact about the substrate: **"each inference is clean-slate"** (`enes/thinking_space_dynamics.md`). The LLM substrate has no continuous internal state between calls. There is no native between-operations existence; each inference starts fresh. To handle the between-operations function, the system must externalize.

The internal/external distinction on this substrate is also a time-scale distinction: internal cognition happens *within* an inference (the LLM's context window IS internal cognitive space); external scaffolding handles anything *between* inferences. Protocols handle the between-inference scale, which the substrate cannot handle natively.

### Why both are accurate

This is structurally similar to **Marr's three levels of cognitive analysis** (computational / algorithmic / implementation): the same cognitive function can be realized through different implementations on different substrates. Protocols-as-function (between-operations integration) is stable across substrates; protocols-as-implementation (filesystem) is contingent on the LLM substrate's clean-slate-per-inference property.

The user-facing implication: when philosophical worry shows up about whether externalization compromises the consciousness goal, the answer is that the project's stated consciousness criterion is **functional capability, not biological-architecture-replication** (`enes/desc.md`: "Whether this constitutes 'consciousness' in any philosophical sense remains undefined — the test is capability, not phenomenology"). Functional consciousness can be reached through externalized + cognitive-layer-voluntary combinations even though it doesn't replicate biology's autonomic internal mechanisms. This is also defended philosophically by the **Distributed Cognition / Extended Mind** position (Hutchins, Clark & Chalmers), which holds that environment-side scaffolding is genuine cognition when reliably coupled, not deficit.

### What this DOESN'T settle

If the underlying substrate evolves to support continuous internal state — a model with persistent activation between calls, or a different architecture closer to active inference — some protocols may migrate from external implementation to substrate-native. The function (between-operations integration) remains; the implementation may shift. This is not predicted; it's acknowledged as conditional on substrate evolution that the project doesn't control.

---

## What's still fuzzy

The honest list of things we don't know:

- **The discipline-vs-protocol boundary has at least one ambiguous case (SYNTHESIZE).** We've called it a protocol because routing seems to be its dominant job, but it does cognitive work too. There may be more cases like this once more protocols are implemented.

- **The categorization (Pipeline / Transfer / Persistence) is preliminary.** An earlier draft had a fourth category (Quality) which got dissolved when GATE was recognized as cognitive work, not routing. The current three may also evolve. We don't have a principled reason to be confident in exactly three.

- **The list of 16 named protocols is not exhaustive.** The current `protocols/desc.md` itself says: "Some protocols listed here may turn out to be unnecessary (GATE was proposed and then eliminated...). Others not yet imagined may prove essential." The list is what's been thought about so far, not a complete enumeration.

- **The mapping of missing protocols → autonomy-ladder rungs is reasoning, not evidence.** We argued that VERSION unblocks Baldwin, that HANDOFF unblocks Level 3+ autonomy, etc. The arguments hold up structurally, but they're predictions. Until autonomy-ladder rungs are actually reached, we don't know if the predictions land.

- **We don't know whether protocols-as-a-separate-dimension will survive contact with implementation.** Right now the dimension is mostly *deferred infrastructure*. When the missing protocols start being built, we'll find out whether they really do want to live in a separate cross-cutting dimension or whether they end up absorbed back into specific commands. Either outcome is currently consistent with what we've observed.

- **We don't know how protocols relate to the 11 typed primitives in `/intuit`.** The primitives are cognitive (they describe what kinds of mental operations exist); protocols are operational (they describe what kinds of routing/sequencing/persistence exist). Whether there's a deeper relationship — e.g., are protocols compositions of primitives at a coarser scale? — is an open question we haven't pursued.

- **We don't know which missing protocol to build first.** The audit recommended VERSION as the borderline candidate (because Baldwin), but even that's deferred until `/intuit` Phase A produces concrete iteration-comparable data. The other five are deferred to autonomy-ladder rungs not yet reached. Sequencing is a guess based on which capability seems most likely to fail-without-the-protocol first.

---

## Why we keep the concept anyway

Given the fuzziness, why not drop the protocols framing and just describe the operational machinery in whatever runner-specific terms each command uses?

Three reasons hold up:

1. **The named vocabulary is cheap to carry and expensive to recreate.** Once the autonomy ladder needs cross-agent handoff and someone has to design it, having "HANDOFF" already named — even if its specification is empty — saves the cost of inventing the term and the conceptual slot at the same time.

2. **The frame self-corrects.** GATE was proposed and dissolved. That's evidence the framing isn't a closed system that protects bad ideas; it can lose protocols when they turn out to be in the wrong category. A frame that can self-correct is more trustworthy than one that just accumulates.

3. **The frame survives cross-domain check.** Agile (user stories × ceremonies), Science (experiments × peer review), Law (substantive law × procedure) all have the content-vs-procedural split. The pattern is structurally common enough that it's likely to be a real distinction rather than a local artifact.

None of this proves the protocols dimension will hold up. It just says: the bet on keeping it is well-calibrated for now. If implementation reveals it doesn't survive contact, we drop it then, not pre-emptively now.

---

## Bottom line (with the fuzziness preserved)

**Protocols are most fundamentally analogous to biology's autonomic between-operations machinery — sleep / consolidation / DMN / executive scheduling. That's the FUNCTIONAL analog: what protocols accomplish in cognition.** On the current LLM substrate, they're IMPLEMENTED as external scaffolding (filesystem, files, `_state.md`) because the substrate has "each inference is clean-slate" as a hard architectural property — there's no native between-operations existence to use. Both analogs are accurate at different levels.

Whether all 16 named protocols are real, whether the three categories are final, whether some won't turn out to be disciplines after all, whether the missing six are exactly the right missing six — these are open. The frame is provisional. The named-vocabulary is the part that earns its keep regardless.

The mission, in one line: **provide the operational vocabulary and slots that make the autonomy-ladder climb possible to talk about — and eventually build — without re-deriving the architecture from scratch each time.**
