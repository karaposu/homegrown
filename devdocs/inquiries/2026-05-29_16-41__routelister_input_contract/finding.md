---
status: active
model: claude-opus-4-8[1m]
effort: max
refines: devdocs/inquiries/2026-05-28_15-48__routeman_input_dependency_question/finding.md
---
# Finding: Routelister's Input Contract

## Changes from Prior

**Prior path:** devdocs/inquiries/2026-05-28_15-48__routeman_input_dependency_question/finding.md

This finding re-runs an earlier inquiry's question for a different (and newer) discipline. Some background, since both names matter throughout:

- **routeman** was an earlier "navigation" discipline — a thinking tool meant to lay out the possible next moves after a cycle of work finishes. It had a design defect (its identity was tangled up with the loop it ran inside), and the project is replacing it.
- **routelister** is the from-scratch replacement: a standalone, domain-agnostic discipline that looks at some body of material and lists the "concepts" in it as typed routes (directions you could take toward a goal). It is meant to run *anywhere*, not only after a loop cycle.
- The **prior inquiry** being re-run here (dated 2026-05-28 15:48, on "routeman's input dependency") asked: does the discipline strictly *require* explicit input, and is it tied to one specific folder? It answered with a **two-axis input contract** for routeman. This finding re-asks that same question for routelister.

**Revision trigger:** stronger framing — the project has since settled what routelister *is* (an intrinsic, any-territory discipline with a two-movement traversal), and that settled identity sharpens the input-contract answer.

**What's preserved:** the prior's two-axis contract — that the discipline genuinely *requires* input as a cognitive matter (an "axis-1" necessity), but is *flexible* about where that input comes from and is **not** bound to any one folder (an "axis-2" source-flexibility). Both survive intact.

**What's changed:** the *content* of the necessity axis. The prior spoke of a "state" (the structured output of a just-finished loop cycle) as the thing the discipline consumes. routelister consumes a "**territory**" instead — any body of concept-bearing material. This is a widening, not a reversal (explained in the Finding).

**What's new:** a third contract clause — the **input grain** depends on which of routelister's two movements is running. And the folder-independence, which the prior established by reading routeman's spec, is now true *by construction* of what routelister is.

**Migration:** routeman's original use case (running on a finished cycle's artifacts) is not lost — it becomes one special case of "running on a territory." Anywhere the prior finding governs routeman's own behavior, it still stands; this finding governs routelister.

## Question

From the inquiry's framing (`_branch.md`): re-run the 2026-05-28 15:48 input-dependency inquiry, but **for routelister and with the project's current understanding** of it. Concretely, three things had to be answered and kept separate:

1. **Does routelister require input at all?** Specifically, does it need a *scope* (something to enumerate concepts from) and a *goal* (a sense of what the concepts are routes *toward*)?
2. **Is routelister tied to one specific folder** — the project's `devdocs/inquiries/` directory where investigations are filed — or can its input come from anywhere?
3. **Does the prior finding's two-axis contract still hold, and how should it be refined?** In particular: does the prior's "state" become "territory"; does routelister's two-movement design add a new input clause; and does the allowance for a *fuzzy* goal change the "goal required" wording?

**Goal:** a clearly stated input contract for routelister — what it needs, how that need can be supplied, and how the need shifts between its two movements — grounded in routelister's settled identity and an honest re-test of the prior finding (not a parroting of it). The contract feeds the eventual routelister specification and is meant to stop the old "doesn't it need the inquiries folder?" confusion from re-attaching to routelister.

## Finding Summary

- **routelister's input contract confirms, refines, and extends the prior finding — it does not overturn it.** The prior's two-axis contract was sound; this finding generalizes one axis, strengthens the other, and adds a third clause. (Contrast a *different* re-run in this series — on routeman's "project-root operation" question — which genuinely flipped its prior. This one does not.)

- **Clause 1 — Necessity: routelister requires a scope and a goal, supplied as concepts.** Without a scope there is nothing to enumerate; without a goal there is no bias for which concepts count as routes (rather than an undifferentiated dump). The goal is required but **may be fuzzy** — routelister can take "help me sharpen this vague aim" as itself a kind of direction.

- **The prior's "state" widens to "territory" — a generalization that loses nothing.** The prior had routeman consuming the *state* left by a finished loop cycle. routelister draws from a *territory*: any body of concept-bearing material (a project folder, a codebase, documentation, even raw text describing a space). A finished cycle's artifacts are simply *one* such territory, so routeman's old input survives as a special case.

- **Clause 2 — Source-flexibility: the input can come from anywhere, and routelister is folder-independent by construction.** It is not tied to `devdocs/inquiries/` (that folder is just a convention of the project's loop-runner, never part of what the discipline needs). For routelister this independence is structural — being "any-territory" is part of its very identity — which is stronger than the prior's reading, where folder-independence was something routeman's spec merely *allowed*.

- **Clause 3 (new) — Mode-grain: the kind of input depends on which movement is running.** routelister has two movements: a breadth movement that sweeps a whole space listing its concepts, and a depth movement that takes one concept and lists *its* variations as routes. The breadth movement takes a **territory**; the depth movement takes a single **concept-identity** (plus the territory it lives in). This is a genuine third clause, but a *dependent* one — it refines clause 1 rather than standing fully on its own.

- **One honest caution carried throughout:** "routelister needs *a scope* to work" is true; "routelister needs *the inquiries folder*" is false. The first must never be allowed to quietly become the second — that slide is exactly the confusion the prior finding existed to prevent, and it applies to routelister too.

## Finding

### Why this question came up

The project is rebuilding its "navigation" capability. The old discipline, routeman, had its identity entangled with the loop it ran inside, and the fix was to build a clean replacement, routelister, defined by what it intrinsically *is* rather than by where it sits in a loop. Before writing routelister's specification, the author is re-walking the earlier routeman inquiries one at a time and re-deciding each one for routelister with the better understanding now in hand. This inquiry is that re-walk applied to one specific earlier question: the **input contract** — what the discipline needs in order to run, and whether it is tied to a particular folder.

The earlier finding (on routeman, dated 2026-05-28 15:48) had answered with a clean **two-axis contract**, and it had also flagged a subtle trap: an assistant had once claimed routeman "can't do anything without input," which is *literally true but misleading* — true that it needs *something* to work on, misleading if read as "it needs the inquiries folder specifically." The question for this inquiry was whether that whole picture survives for routelister, and how it sharpens.

### The headline: this is a refinement, not a reversal

The single most important result is that re-running the question for routelister **confirms** the prior finding and then **refines and extends** it. Nothing in the prior is overturned.

This matters because the author has been re-running these inquiries precisely to catch cases where the old answer was *wrong* for routelister — and one of them (a sibling re-run, on whether the discipline operates at a "project root," dated 2026-05-28 19:00) really did flip its prior verdict. So "confirm-and-refine" here is an earned conclusion, not a reflex to leave the prior alone. The test applied was concrete: a re-run *flips* a prior only when it **negates** one of the prior's claims; it *refines* a prior when it **generalizes** a claim while still **containing** the original case. Every part of the prior's two-axis contract is generalized-and-contained here, so none is negated.

### Clause 1 — Necessity: a scope and a goal, as concepts

routelister genuinely requires input, in two parts.

It requires a **scope** — some bounded body of material to draw concepts from. This is not a folder or a file format; it is the cognitive fact that enumeration needs *something to enumerate*. routelister "perceives and lists" what is already in front of it; it is explicitly *not* a discipline that invents concepts out of nothing. So with no scope there is simply nothing for it to perceive.

It also requires a **goal** — a sense of what the listed concepts are routes *toward*. The goal is what makes the output a set of *routes* (directions worth taking) rather than an undifferentiated dump of everything in the scope. A quick test confirms the goal is load-bearing: if you remove the goal and keep only the scope, routelister would have to list *every* concept with no basis for ordering or relevance — which is not the discipline's job.

The goal is required, but it **may be fuzzy**. An earlier inquiry in this series (on refining the definition of "concept," dated 2026-05-29 09:53) established that routelister tolerates a half-formed goal by treating "sharpen this fuzzy aim" as a legitimate direction in its own right — concepts that clarify the goal are themselves routes. So the precise wording is "a goal is required as a concept, but it may be fuzzy," not "a crisp goal is a precondition." Adding the tighter constraint "the goal must be crisp" was tested and rejected: it would forbid perfectly valid runs where the whole point is to firm up a vague objective.

### The prior's "state" becomes "territory" — and nothing is lost

The prior finding described routeman as consuming a **state**: the structured result of a just-completed loop cycle. That made sense for routeman, which lived inside the loop. routelister does not live inside the loop, so its clause-1 scope is generalized to a **territory** — any concept-bearing body of material at all.

The crucial point is that this widening *loses nothing*. A finished loop cycle's artifacts are themselves a bounded, concept-bearing body of material — that is, *a territory*. So routeman's old "state" is a **special case** of routelister's "territory," fully contained by it. routelister can still be pointed at a concluded investigation's files (the old use case) — that is now just one option alongside being pointed at a whole project, a codebase, a documentation set, or a passage of raw text. Because the new category contains the old one, this is a textbook generalization, not a contradiction.

### Clause 2 — Source-flexibility, now structural

The prior's second axis was that routeman did not care *where* its input came from — a folder of any kind, raw text, or an objective surfaced mid-run all worked — and in particular it was **not** bound to the project's `devdocs/inquiries/` directory. That directory is a convention of the loop-runner (it is where investigations happen to be filed); it was never part of what the discipline needs.

All of this holds for routelister, and it holds *more strongly*. For routeman, folder-independence was something the spec *permitted*. For routelister it is true **by construction**: being able to run on any territory is part of routelister's settled identity (it was deliberately defined as standalone and domain-agnostic). So you cannot make routelister folder-dependent without contradicting what it *is*. In fact, the attempt to imagine routelister as folder-bound lands you straight back on routeman's original defect — letting a loop-role leak into the discipline's identity — which is exactly the mistake routelister was built to avoid.

A stress test confirms this: imagine handing routelister nothing but a paragraph of raw text describing some space, with no files or folders anywhere. It still runs — the paragraph *is* the territory, and it still states a goal. The most folder-hostile input possible still satisfies the contract, which is the strongest possible evidence that no folder is required.

### Clause 3 (new) — Mode-grain: the input kind follows the movement

routelister has two movements (established in the inquiry on its concept ontology and traversal, dated 2026-05-29 11:43):

- a **breadth movement** that sweeps across a whole space and lists the distinct concepts in it;
- a **depth movement** that takes a single concept and lists *its* variations and divergences as routes.

The new contract clause is that the **kind** of input differs between these two. The breadth movement takes a **territory** (and enumerates the concepts within it). The depth movement takes a single **concept-identity** — one concept, considered as a stable thing across its various appearances — together with the territory that concept lives in. The prior finding had only routeman's single "state" input; routelister has two input grains, one per movement. (This mirrors a staged pattern routeman itself had, where a later stage took a more specific target than the first.)

This third clause is genuine but **dependent**. It does not stand fully on its own the way clauses 1 and 2 do; it refines clause 1 by saying *which kind* of scope is required in each movement. The contract is therefore best stated as "three clauses, the third dependent on the first" — not as three fully independent axes. The temptation to collapse it back into clause 1 entirely was considered and rejected: a two-clause statement literally cannot express "a territory for breadth, a single concept for depth," so the distinction earns its place.

One boundary is worth drawing precisely, because it is where this clause could go wrong. *Which kind* of input each movement needs is part of the meaning-level contract (it is a statement about what the operation requires). But *how routelister decides which movement is running* — the selection mechanism — is a separate, mechanical question that belongs to a later, process-level design pass and is deliberately out of scope here. Stating the required input-kind without yet specifying how the movement is chosen is not a gap; it is the same separation a function signature makes when it says "this version takes a value of type T" without describing how the caller is dispatched to that version.

### The contract, stated whole

Putting the three clauses together, routelister's input contract reads as a single typed requirement:

> routelister requires a **scope** and a **goal** (the goal may be fuzzy), supplied from **any source** (it is folder-independent by construction), where the **kind** of scope is set by the movement in play — a **territory** for the breadth movement, a single **concept-identity** plus its territory for the depth movement — and where the prior finding's "state plus goal" is recovered as the special case in which the territory happens to be a finished loop cycle's artifacts.

### The caution that travels with the contract

Finally, the prior finding's trap transfers directly and must be kept in the spec. The sentence "without a territory, routelister has nothing to enumerate" is *true* — that is clause 1. But it must never be allowed to slide into "routelister needs an inquiry folder," which is *false*. The first is a statement about cognitive necessity; the second smuggles in a folder dependency that routelister's identity explicitly rules out. Keeping these apart is the whole reason the prior inquiry existed, and the same discipline of language is required for routelister.

## Inherited Commitments Re-test

This inquiry rolled up several prior outputs (it declared a Synthesis Trigger), so each inherited commitment is re-tested below rather than absorbed silently.

- **Commitment:** the two-axis input contract — axis-1 necessity (input genuinely required, as concepts) + axis-2 source-flexibility (any source, not folder-bound).
  - **Source:** devdocs/inquiries/2026-05-28_15-48__routeman_input_dependency_question/finding.md
  - **Re-test status:** RE-TESTED
  - **Evidence:** both axes hold for routelister. Necessity holds because routelister perceives-and-lists and so needs something to perceive (a scope) plus a bias for relevance (a goal). Source-flexibility holds and strengthens to "by construction" because any-territory operation is part of routelister's settled identity. The raw-text-only stress test (no files anywhere) passes.

- **Commitment:** the discipline is **not** dependent on the `devdocs/inquiries/` folder; that folder is a loop-runner convention.
  - **Source:** devdocs/inquiries/2026-05-28_15-48__routeman_input_dependency_question/finding.md
  - **Re-test status:** RE-TESTED
  - **Evidence:** confirmed and strengthened. Making routelister folder-bound would re-import routeman's original "loop-role in the identity" defect, which routelister was explicitly built to shed.

- **Commitment:** the "no input → can't operate" claim is literally-true-but-misleading.
  - **Source:** devdocs/inquiries/2026-05-28_15-48__routeman_input_dependency_question/finding.md
  - **Re-test status:** RE-TESTED
  - **Evidence:** the same caution applies verbatim to routelister — "needs a scope" is true, "needs the inquiry folder" is false. Carried into the contract as a standing language caution.

- **Commitment:** routelister's settled identity — a standalone, domain-agnostic discipline whose unit is the "concept-identity" and whose operation has two movements (breadth across a space, depth into one concept).
  - **Source:** devdocs/inquiries/2026-05-29_12-44__routelister_definition_consolidated_rerun/finding.md
  - **Re-test status:** RE-TESTED
  - **Evidence:** the input contract is consistent with this identity — clause-1 necessity does not re-introduce loop-binding, and the clause-3 grain is exactly the two movements expressed as input kinds.

- **Commitment:** the two movements and the concept ontology (a concept has one identity across many manifestations; breadth lists identities, depth lists one identity's manifestations-as-routes).
  - **Source:** devdocs/inquiries/2026-05-29_11-43__routelister_concept_ontology_traversal/finding.md
  - **Re-test status:** RE-TESTED
  - **Evidence:** this is precisely what clause 3 (mode-grain) encodes — a territory for the breadth movement, a single concept-identity for the depth movement.

- **Commitment:** the goal may be fuzzy (a fuzzy goal is handled by treating goal-sharpening concepts as routes).
  - **Source:** devdocs/inquiries/2026-05-29_09-53__routeman_concept_definition_refinement/finding.md
  - **Re-test status:** RE-TESTED
  - **Evidence:** folded into clause 1. Tightening the contract to "crisp goal required" was tested and rejected because it would forbid valid goal-sharpening runs.

## Next Actions

### MUST

- **What:** when routelister's specification is authored, write its input-contract section as the three clauses above — necessity (scope + possibly-fuzzy goal), source-flexibility (folder-independent by construction), and mode-grain (territory for breadth / concept-identity for depth, the third clause dependent on the first) — and include the standing language caution ("needs a scope" ≠ "needs the inquiry folder").
  - **Who:** the routelister specification-authoring pass (the deferred structural step this re-walk is preparing for).
  - **Gate:** condition-bound — when the routelister spec is written (after the prior-inquiry re-walk completes).
  - **Why:** it gives the spec a settled, re-tested input contract and pre-empts the recurring "doesn't it need the inquiries folder?" confusion.

### COULD

- **What:** state explicitly in the spec that routeman's old "completed-cycle state" input is recovered as the special case "territory = a finished cycle's artifacts," so the continuity is visible to anyone migrating from routeman.
  - **Who:** the routelister specification-authoring pass.
  - **Gate:** condition-bound — when the spec's input-contract section is drafted.
  - **Why:** makes the no-loss generalization legible and reassures that nothing routeman did is being dropped.
  - **Depends-on:** MUST item "write the input-contract section." This COULD is GATED — do not act until the MUST resolves.

### DEFERRED

- **What:** design the *selection mechanism* — how routelister determines which movement (breadth or depth) is running, which in turn determines which input-kind it expects.
  - **Gate:** condition-bound — taken up in the process-level routelister design pass (after the meaning-level re-walk and the structural spec).
  - **Why (if revived):** it completes the operational picture; the mode-grain clause names *what* each movement needs but intentionally leaves *how the movement is chosen* to this later pass.

## Reasoning

The verdict (the three-clause contract) was reached by stating it as a candidate, generating sharp counter-arguments ("foils") against each clause, and then testing whether each counter-argument survived. The full field considered:

- **"routelister needs no input — it generates concepts itself."** KILLED. This collides head-on with routelister's identity as a perceive-and-list discipline; a discipline that needed nothing to work on would be indistinguishable from one that invents (hallucinates) content. The kill is useful, though: it marks the necessity clause as the very boundary separating routelister from invention.

- **"routelister is bound to the `devdocs/inquiries/` folder."** KILLED. Folder-binding would re-introduce exactly the loop-role-in-identity defect that routeman had and routelister was built to avoid. The kill re-confirms folder-independence from the opposite direction.

- **"this is actually a flip — routelister's contract overturns the prior finding, because a 'territory' is not a 'state'."** KILLED, and this was the load-bearing kill. It fails because a finished cycle's state is *contained* within "territory" (a cycle's artifacts are one kind of territory), so the prior's input survives as a special case. A generalization that contains the prior case does not negate it. This is what licenses calling the finding a *refinement* of the prior rather than a replacement — and it is the precise point on which the sibling re-run (the 2026-05-28 19:00 "project-root" inquiry) went the other way and genuinely flipped.

- **"the mode-grain is pure mechanism, not part of the contract."** REFINED rather than killed. It is partly right: *how the movement is selected* is indeed mechanism (and is deferred). But *which input-kind each movement requires* is a statement about what the operation needs, which is contract. The refinement sharpened the boundary between the two and is folded into clause 3.

- **"there are really only two clauses — the third is just the first restated."** REFINED rather than killed. The third clause does depend on the first, but it carries content the first cannot express on its own ("territory for breadth, concept for depth"). The refinement was to state it as "three clauses, the third dependent" instead of either three independent axes or only two.

- **The surviving candidate (the three-clause contract) held** under adversarial testing on every critical axis: it is a sound refinement (not a flip), it loses none of the prior's content, and it is coherent with routelister's settled identity. Because the stakes are high (the contract will be inherited by the spec and by later re-runs), the test deliberately put the burden on the contract to prove itself rather than presuming it innocent — and it cleared that bar.

A note on method, since this inquiry evaluated the project's own work: the judgment "refinement, not flip" was checked against *external* reference points rather than the inquiry's own vocabulary — the set-membership fact that a cycle's state is one kind of territory, the existing routeman definition that rules out inter-concept dependency-graph building, and the contrasting sibling re-run that genuinely flipped. This guards against the trap of a self-evaluation that simply ratifies itself.

## Open Questions

### Blocked

- The exact wording of routelister's input-contract specification section cannot be finalized until the specification itself is being authored. This finding fixes the *content* of the contract; the *spec text* is a downstream structural task (see the MUST item).

### Refinement Triggers

- If, when the routelister spec is authored, the two movements (breadth and depth) turn out to need a third input-kind not anticipated here — for example, an input that is neither a whole territory nor a single concept-identity — clause 3 (mode-grain) re-opens. Observable trigger: a movement appears in the spec whose required input matches neither grain.
- If a future re-run or implementation shows a territory that is *not* reducible to "concept-bearing material" yet routelister must still run on it, clause 1 (necessity) re-opens for re-scoping. Observable trigger: a real input case that routelister must accept but that carries no enumerable concepts.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
now lets do it for this one devdocs/inquiries/2026-05-28_15-48__routeman_input_dependency_question

and do it for routelister and our current understanding
```

</details>
