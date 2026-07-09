# Branch: articulate_warm — does it earn its place, and should it re-trigger surfacing?

## Source Input

The user's raw request, preserved verbatim (also in `articulate_simple.md`'s `## User Input`):

```text
i have a question:

when articulate_cold (pre-context / first pass) finishes we have some rephrasings (considered articulations), and then surfacing happens. By then, in the LLM's context, the previous rephrasing is already effectively updated — not SAVED as an artifact, but the improved understanding is already present in the LLM's in-context understanding.

So what is the benefit of adding articulate_warm (post-context / second pass), which basically just does a better rephrasing again? Unless it can trigger ANOTHER surfacing, it is not much of a help. So maybe articulate_warm should be able to RE-TRIGGER surfacing.

Let's dive deep into this.
```

## Articulation Reference

- **File:** `articulate_simple.md`
- **Itemize count:** 1
- **Per-item identifiers:** `[A]`
- **Verdict:** HIGH-PROCEED
- **Flagged conditions:** none (one Mode-2 close call, resolved keep-together)
- **Substrate note:** warm (the operator's session context carries the two-pass design directly — itself a datum for the inquiry).

## Question

**Item A (literal-statement, uncontaminated):** *"When articulate_cold finishes we have rephrasings, then surfacing happens — and by then the rephrasing is already implicitly updated in the LLM's in-context understanding (not saved). So what is the benefit of articulate_warm, which just re-does the rephrasing, unless it can re-trigger surfacing? Maybe it should be able to re-trigger surfacing."*

The ask carries these **identified ambiguities** (preserved as ambiguities, not resolved):

- **What kind of deliverable (MQ1 verdict-axis):** an **evaluation** (does articulate_warm earn its place?) · a **redesign** (make it re-trigger surfacing) · an **understanding** (why the mechanism does/doesn't add value) — and: settle-in-principle vs commit-to-a-spec-edit.
- **What endpoint the user is after (MQ3 intent-axis, WHAT):** decide-keep-or-cut the warm pass · strengthen it with re-surface power · understand-the-mechanism (separate what it adds from what is already implicit).

## Goal

- **Deliverable shape (Deconstruct):** an analysis that lands a **design judgment**, and — if warranted — a **design recommendation** (conceptual argument + architectural design + a candidate spec-doc edit). Not code; not a plan.
- **What a good answer might serve (MultiDepth WHY-axis, preserved as ambiguities):** **parsimony** (don't add a step that carries no load) · **power** (make the warm pass genuinely effective, not cosmetic) · **coherence** (the two-pass design should be structurally justified, not adopted on faith).
- **Context the answer needs (MQ2 context-need):** the **surfacing spec** (does it already re-run / expand territory? its invocation contract) · the **articulate_simple spec** (what MQ2 emits; how the runner reads it to bound surfacing) · the **warm-pass canon doc** (its currently-*optional* re-surface) · the **runner mechanism** that turns an MQ2 context-need into a surfacing invocation · any prior **iterative-surfacing / pass-3** design note. Stance: continuation-and-refinement of the in-flight two-pass design.
- **Boundary (MQ4):** explicit-empty — nothing the user excludes outright.

## Considered Articulations

**Item A — the articulate_warm ↔ surfacing question:**
1. **Evaluation:** evaluate whether articulate_warm earns its place given that surfacing already updates the LLM's understanding implicitly — and whether its justification depends on being able to re-trigger surfacing.
2. **Redesign (the user's proposal):** redesign articulate_warm so its core job is to re-anchor and re-trigger surfacing — iterating articulate→surface until the context-need stabilizes — with the better rephrasing as the byproduct.
3. **Decoupling:** separate the warm pass's two products — re-rephrasing (marginal once the right material is in context) and re-anchoring (valuable exactly when the cold pass fetched the wrong territory, but inert without a re-surface) — and identify which is load-bearing.
4. **Implicit-vs-explicit:** decide whether "the LLM already holds the surfaced material implicitly" dissolves the value of an explicit committed warm articulation, or whether the commit-for-downstream value survives — and how large it is.
5. **Spec-edit:** decide whether re-triggering surfacing should be promoted from the canon doc's optional "fuller form" to the **core loop** of articulate_warm, and specify the **convergence criterion** that terminates the iteration.

## Scope Check

- **IN scope (Deconstruct bounds):** the articulate_warm ↔ surfacing relationship at the front of the loop — the warm pass's benefit, its two products, whether/how it re-triggers surfacing, and the termination of any resulting loop.
- **OUT of scope (MQ4):** explicit-empty — no user-stated exclusions. (Implicit: this is not a whole-loop redesign; the downstream disciplines are not in scope except as consumers of the warm frame.)
- **Question covers goal:** YES — the question (evaluate + possibly redesign articulate_warm's relation to surfacing) covers the goal (a justified design judgment + recommendation on that relation).
- **Specific-vs-pattern:** the inquiry addresses the **general design principle** (what the warm pass is *for*, and whether re-surface is core), grounded in the specific two-pass articulation this project is building. Address the pattern; use the specific design as the instance.

## Layer Commitment

**Required** — the question targets a discipline artifact (`articulate_warm`) for a design change ("should it re-trigger surfacing"), which MQ1's `redesign` ambiguity surfaces directly.

- **PRIMARY layer — Process.** The crux is what **steps** the warm pass runs: does it merely re-run operations (re-anchor + re-rephrase), or does its loop include *re-triggering surfacing and iterating until the context-need stabilizes*? That is a procedure/mechanism/loop question — Process.
- **Second (sequenced) — Meaning.** If re-surface becomes core, it changes what articulate_warm **IS** (a surfacing-loop controller, not a re-phraser). Adjudicate the Process question first; let it inform whether the discipline's identity needs restating.
- **Adjacent — Structural.** The outcome may edit the warm-pass canon doc's §7 (promote optional→core) + add a convergence-criterion section. Structural is downstream of the Process verdict, not the primary target.

## Synthesis Trigger

**Required (light)** — the inquiry consumes and **re-tests one committing prior artifact**: the just-authored warm-pass canon doc (`docs/how_articulate_warm_should_be.md`), whose §7 commits the second surfacing round as the **optional "fuller form."** This inquiry presses exactly that commitment.

- `docs/how_articulate_warm_should_be.md` — commits: articulate_warm re-runs MQ2 (re-anchor) + Rephrase; receives-not-fetches; and treats a **second surfacing round as OPTIONAL (§7)**. This inquiry inherits and re-tests the "optional" status; CONCLUDE must carry an `## Inherited Commitments Re-test` naming that commitment and re-testing it with evidence (from the surfacing + articulate_simple specs).
