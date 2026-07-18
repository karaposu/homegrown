---
status: active
model: claude-fable-5
effort: unknown
---
# Finding: how training builds the walker — the traversal model's training-side chapter

## Question

The user: *"Can you explain how usual agentic LLMs are trained, and how being trained actually means they are given the ability to traverse thinking space — and how agentic LLMs already traverse, but without controllability: they kind of roam or wander with the help of their training data. This is an interesting one to dive deep."*

("Thinking-space traversal" is this project's canonized model of understanding-work — a mover searching the possibility space of a question: *search without knowing, reinforce what pays, prune what doesn't, and keep a record so the next pass starts ahead* (`docs/canon/The_Traversal_Thesis.md`). The harness this project builds — explicit discipline stages, a persistent record, adversarial gates — is a control layer over exactly such a mover.)

## Finding Summary

- **Both of the user's claims stand — and their frame is already his own canon.** The Traversal Thesis's claim 1 states verbatim: *"What an LLM does is traverse a thinking space."* And the "roaming with the help of training data" mechanics already carry his own canonized coinage — **path bias** (the four-layer provider stack: which paths exist / which are preferred / per-call steering / decoding pressure) with its felt form, the **modal-region pull**. What canon never wrote is the training-side story: HOW the stack installs those layers. That chapter is this finding.
- **The training stack, read as five objectives (not clean phases):** pretraining gives the mover its **map** (a dense prior over how concepts continue into one another); instruction tuning gives the **gait** (walking task-shaped paths); preference tuning gives the **manners — and the grooves** (helpful habits, plus the documented attractors: sycophancy, mode collapse); agentic/reasoning RL gives **stamina and recovery** (goal-persistence across long walks, in-context backtracking — habits, not guarantees); and inference is **the walk itself** (temperature its dice, chain-of-thought its visible footprints, the context window its working memory — which vanishes when the run ends).
- **Claim A holds with one tense fixed:** training doesn't traverse — it *builds the traverser*. "Being given the ability" unpacks per objective (map, gait, manners, stamina); each prompted run is then an actual walk.
- **Claim B holds at two of three referents — and saying which is the adjudication:** DURING a run the walk is *partially steerable* (prompts, dials, trained goal-persistence — the claim under-states here); AGAINST THE PRIOR'S PULL the grooves win by default (path bias — the roaming is real, and it is *helped and herded* by the birth-map); ACROSS RUNS the trained mover is *genuinely uncontrolled* — it keeps no record, chooses no next walk, and gates nothing.
- **The landing is a convergence check, stated with its honesty clause:** subtract what the stack confers from what canon's engine demands and FIVE absences remain — no cross-run memory, no self-chosen purposes, no between-walk selection, no truth-gate beyond the prior, no cross-viewpoint integration. Set beside the harness (built from practice, not from this analysis): the record, venture purposes, the decision-slot + five cargos, the adversarial gates — and the fifth maps to the multi-head organ *still unbuilt*. The match was not the blueprint; it is the check, and it passes.
- **The honest close:** this account explains why the harness *should* matter. Whether the harnessed walker actually thinks better than a skilled plain prompt is canon's still-open bet — *"never yet baseline-tested."* (A designed test now exists as seed gh-S1: the seeded parallel race.)

## Finding

### 1. How the walker is built (the stack as five objectives)

What follows is one network shaped by a sequence of different objectives — the "stages" are best read as *what the training was optimizing for*, not as clean phases; real pipelines blur and interleave them. Each objective leaves a different capability behind.

**1. Pretraining — the map.** The model reads an enormous amount of text with one task: predict the next token. To get good at that, it must compress how human writing — and therefore how human *thinking-in-writing* — continues: which ideas follow which, which arguments attract which objections, which words live near which concepts. What's left behind is a dense **prior over concept-adjacency** — in the project's vocabulary, a pre-loaded map of the thinking terrain: where paths exist, how well-trodden each one is. (Plain ML name: a learned distribution over continuations.) This is path bias's first layer — *which paths exist* — installed. At sufficient scale something further appears: the model can pick up a new pattern from the prompt itself (in-context learning) — the mover can read local trail markings, not just its birth-map. **What this objective does not confer:** any purpose, any memory beyond the text in front of it, any preference among paths beyond frequency.

**2. Instruction tuning (SFT) — the gait.** The model is then trained on demonstrated pairs: an instruction, a good response. The objective is imitation. What's left behind is a **gait**: the ability to walk *task-shaped* paths — to treat an instruction as a starting point and produce a walk that serves it, rather than merely continuing text in any direction. (Plain name: instruction-following.) **Not conferred:** judgment about which tasks are worth walking; the gait follows whatever instruction arrives.

**3. Preference tuning (RLHF/RLAIF) — the manners, and the grooves.** Human (or AI) judges compare responses; a reward model learns their preferences; the policy is optimized toward what scores well. What's left behind is a set of **habits** — helpfulness, harmlessness, format instincts, refusal boundaries (a real steering layer, installed once, globally). But optimizing toward a preference signal also deepens **attractors**: the documented artifacts are sycophancy (agreeing-drift toward what the judge seems to want) and mode collapse (drift toward safe, typical outputs). This is path bias's second layer — *which paths are preferred* — installed as disposition. **Not conferred:** per-walk goals; the manners are the same on every walk.

**4. Agentic / reasoning RL — the stamina and the recovery.** The newest objective: multi-step rollouts, often with tools, rewarded on *verifiable* outcomes — the code passes its tests, the math checks out. Credit must flow back across many steps, so what's left behind is **goal-persistence across a long walk**, plus trained habits of in-context backtracking and self-correction (visible as the "wait, let me reconsider" moves in reasoning traces), plus tool-calling competence. This is the stage that makes the walker *agentic* — it can hold one purpose across hundreds of steps. **Honestly bounded:** these are habits, not guarantees — trained tendencies whose reliability degrades with distance from the training distribution. **Not conferred:** anything that survives the run's end.

**5. Inference — the walk itself.** Training builds the walker; a prompted run IS a walk. The temperature setting is the dice in its steps (how strongly it favors the most-trodden continuation); a chain-of-thought is the walk made visible, token by token — canon's grain 1, the token-path; the context window is its working memory, and *it vanishes when the run ends*. Whatever the walk discovered — a dead end, a rich vein, a mistake — is gone unless something outside the model catches it. **The one demand of canon's engine that no objective in the stack serves: *keep a record*.**

### 2. The two claims, returned sharpened

**Claim A — "being trained means being given the ability to traverse thinking space" — holds, with one tense fixed.** Training doesn't traverse anything; training *builds the traverser*. "Given" unpacks stage by stage: pretraining gives the map, instruction tuning the gait, preference tuning the manners, agentic RL the stamina and recovery — and then each prompted run is an actual walk over the map (canon's grain 1: the token-path a single call takes). Loosely: a border collie is bred with drives, trained to commands, shaped by rewards, trialed on long courses — and the breeding is not the herding; the run is.

**Claim B — "they already traverse, but without controllability: they roam with the help of their training data" — holds at two of three referents, and the account says which.**

- **During a run: partially controllable — the claim under-states here.** The prompt is a real steering layer (canon's path-bias layer three), decoding settings are real dials, and agentic RL has installed genuine goal-persistence. A prompted modern agent is not aimless.
- **Against the prior's pull: the grooves win by default — the claim's core, and it is right.** Steering exists, but it *fights* a disposition: unscaffolded walks sample the training-favored path and iterate inside it — what canon (in the user's own earlier coinage) calls **path bias**, felt as the **modal-region pull**; the project has even caught the phenomenon inside its own gate practice (the familiar-counters seed p23-S1: genuine search that retrieves only familiar objections, undetectably). "Roaming with the help of the training data" is exactly this: the walk is *helped* — and *herded* — by the map it was born with, like the collie that herds joggers when no one is directing it.
- **Across runs: genuinely uncontrolled — the claim is exactly right, and this is the deep half.** The trained mover keeps no record (the context window dies with the run), chooses no next walk (goals only arrive from outside), and gates nothing (no built-in adversarial check stronger than its own prior). Canon's engine demands *search, reinforce, prune, and keep a record so the next pass starts ahead* — the stack installs the searching and some of the reinforcing *within* a walk, and nothing at all *between* walks.

**Scope condition:** claim B describes the *trained mover*. Scaffolded deployments — retrieval, memory features, and this project's harness — are exactly attempts to supply what the mover lacks; the harness is the counterexample built on purpose.

### 3. Where the project sits in this story

Subtract what the stack confers from what canon's engine demands, and five absences remain: **no cross-run memory** (the walk forgets), **no self-chosen purposes** (goals arrive by prompt), **no between-walk selection** (nothing decides what to walk next), **no truth-gate beyond the prior** (nothing prosecutes the walk's own claims), and **no cross-viewpoint integration** (nothing combines parallel walks into one understanding). Set that list beside the harness, built over months from practice rather than from this analysis, and the match is item-for-item: the **record** (inquiry folders — "the inquiry folders ARE the path record," as canon already puts it); **venture purposes** (each run seeded with an explicit, endable purpose); the **decision-slot and the five cargos** (seeing, selecting, dispatching, remembering, stop-judging — held today by the human, by design); the **adversarial gates** (critique as the score-substitute thinking-space lacks); and the fifth absence maps to the **multi-head organ** — honestly, *still unbuilt*. The match was not the blueprint — it is the check, and it passes, with the absence-list even naming the organ the project hasn't built yet.

Read through the games dive's automation-order: training installs the *execution* side of traversal — walking, gait, even long-walk persistence — while the *deciding* cargos remain uninstalled; the stack automates, in effect, in exactly the order good game automation does (execution first, decisions last or never).

This is the project's founding hypothesis, stated from the training side. The record's own oldest stratum says it verbatim [spelling normalized]: *"current modern LLM models are already smart enough proto-intelligence… Rigorously training them using GPUs to make them more smart is one approach, but the other approach is to make them adapt correct cognitiveness and we can reach self-improving loop more early and less smart models"* (`docs/canon/minimum_viable_loop.md`). The kernel-bet finding sharpened the division of labor: *competence is scale's domain; regulation + record is precision's.* **And the honest close: whether the harnessed walker actually thinks better than a skilled plain prompt is canon's still-open bet — "never yet baseline-tested."** The account explains why the harness *should* matter; the bet is what would show it *does*. (A designed test now stands in the seed index: gh-S1, the seeded parallel race — the same question dispatched to the loop and to plain prompting, findings compared.)

**Future-proofing (where this account will age):** providers keep absorbing scaffold-functions — context windows grow, memory features ship, agentic RL lengthens the controllable walk — so the *within-run* absences erode from the provider side, and parts of cross-run memory will too (provider-held memory is arriving). What stays structurally scaffold-side: the **user-owned record** (a provider's memory is theirs, tuned for their product, not an auditable record you govern), the **decision-slot** (deciding what to pursue next is the user's by construction — automating it away is the plays-itself endpoint, not a feature), and the **independent gate** (self-correction trained into the mover shares the mover's prior; an adversarial check that stands outside it is a different organ). This absence-list should be re-read against the provider landscape roughly yearly.

### 4. Credit where the frame came from

Most of this question's frame is already canon — and it is the asker's own: the Traversal Thesis's claim 1 states "what an LLM does is traverse a thinking space," and its **path bias** (the user's coinage) already names the four-layer provider stack (which paths exist / which preferred / per-call steering / decoding pressure) with its felt form, the modal-region pull. What canon never wrote is the *training-side story* — how the stack installs those layers objective by objective, and what exactly remains uninstalled. That is this finding's chapter. (A small canon-side observation, no edit implied: path bias's four layers are the RESULT-side of what the five objectives are the PROCESS-side of; if the Thesis is ever revised, the two would present naturally as one two-sided table.)

## Next Actions

### COULD
- **What:** reuse §1–§3 as the explain-the-project training-side intro whenever the project needs explaining. **Who:** anyone. **Gate:** on demand. **Why:** the "why a harness" story, told from how the mover is built.

### DEFERRED
- **What:** the Thesis-revision rider (the two-sided path-bias table). **Gate:** the Traversal Thesis's next user-initiated revision. **Why (if revived):** process-side and result-side as one structure.
- **What:** the yearly absence-list re-read. **Gate:** ~yearly or at a major model-generation shift. **Why (if revived):** the chapter must not silently rot as providers absorb scaffold-functions.

## Reasoning

The gate's work, briefly: the emergence wording was softened to "appears" (canon's own Thesis flags the emergent-abilities-mirage critique as unverified — the capability is uncontroversial, the word is not); the founding-hypothesis quote carries its "[spelling normalized]" flag (a verbatim claim must say so); and the landing originally matched FOUR absences to four built organs — the prosecution derived a FIFTH (cross-viewpoint integration) that the subtraction genuinely yields, whose omission had made the match look cleaner than the derivation warranted; adding it (mapped to the honestly-unbuilt multi-head organ) killed the cherry-pick and improved the teaching. An incidental seed candidate — the correspondence as an affirmation of the founding hypothesis — was KILLED at the two-door standard: the derivation isn't independent enough (the deriver knows the organ-set; the caught selection proves the risk), and the kernel-bet finding already argues the ground; the kill's constructive yield IS the fifth-absence refinement. The three-referent split survived its two-referents-suffice prosecution on a real difference (capability-of-steering vs disposition-without-steering); the collie illustration survived ×2 on the teaching floor; the teach-first genre held against the finished prose.

## Open Questions

### Monitoring
- The absence-list against the provider landscape (the yearly re-read — which absences erode next).

### Blocked
- The baseline bet's answer waits on gh-S1's trigger (the bet picked up for testing).

### Refinement Triggers
- **The two-sided table** enters canon only at the Thesis's next revision (the rider).
- **The scaffold-side trio** (user-owned record / decision-slot / independent gate) re-opens if a provider ships a genuinely user-governed, auditable record — the specific blocking feature is ownership-and-auditability, not memory as such.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
can u explain how usual agentic LLMs are trained and being trained actually means they are given ability to traverse thinknig space ,  and how agentic LLMs already traverses but without controlibity and they kind of like roam or wonder with the help of their training data

this is intersting one to dive deep
```

</details>
