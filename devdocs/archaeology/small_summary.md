# What This Project Is — A Plain-Language Summary

*Written by reading the actual files in `cognitive_harness/`, the three canon documents in `docs/canon/`, and the install scripts — not by trusting what existing summaries claim. Overwrites any prior version.*

---

## The one-sentence version

This project is a hand-built **"thinking kit" for AI assistants** — a collection of written instruction documents that teach an AI (Claude Code or OpenAI's Codex) how to perform specific kinds of careful, structured thinking on demand, and a long-running research program for figuring out how an AI could eventually do that thinking *and improve itself* with very little supervision.

## The most important thing to know first

If you peek inside the repo you'll see a `.venv` folder full of Python files. **That is not the project.** It's a box of pre-built helpers the project deliberately ignores.

The **real project is written almost entirely in Markdown** — well over five hundred instruction documents and only two short shell scripts. There is essentially **no traditional executable code here**. The "source code" of this project is *prose meant to be read by an AI assistant.*

Think of it less like an app and more like **a library of detailed playbooks** that get copied into the AI assistant's "skills" folder so the assistant knows how to perform specific careful operations on demand, plus a working archive of every time those playbooks have been used.

---

## What it actually is, in two layers

### Layer 1 — the "thinking disciplines" (the working kit)

The kit is built around the idea of **disciplines**: each one a single, well-defined *kind of thinking* the AI can be told to perform. You invoke them by typing a slash-command (like `/sense-making` or `/innovate`) into the assistant. Each discipline has a short `SKILL.md` (the recipe) and a longer `references/` reference file (the deep background the assistant must read before executing).

The disciplines that are currently shipped by the installer:

| Discipline (command) | What it does, in plain terms |
|---|---|
| **Surfacing** (`/surfacing`) | Sweeps a big pile of material (a codebase, a doc set, a set of options) and pulls out the parts that bear on the question, labeling each piece by how relevant it is (core / sub / side / umbrella). It draws things into the AI's attention; it does not interpret them. |
| **Sense-making** (`/sense-making`) | Takes a vague, ambiguous situation and pins it down. Pulls out the "anchors" (constraints, key insights, principles), checks it from six different perspectives, collapses ambiguities one by one, and arrives at a stable conceptual model — keeping track of six characteristic failure modes (status-quo bias, premature stabilization, etc.). |
| **Decomposition** (`/decompose`) | Breaks a tangled whole into smaller pieces. Crucially it's framed as **perceiving where the natural seams are**, not just chopping arbitrarily — it produces a coupling map, a question tree with verification criteria, an interface map between pieces, and a dependency order. |
| **Innovation** (`/innovate`) | Generates fresh ideas on purpose using seven explicit mechanisms — four "generators" (combination, absence recognition, domain transfer, extrapolation) and three "framers" (lens shifting, constraint manipulation, inversion). Tests each idea with a five-point survival check before declaring it useful. |
| **Critique** (`/td-critique`) | Stress-tests competing ideas like a courtroom — prosecution + defense + collision — across weighted evaluation dimensions, building a "fitness landscape" map of the solution space and rendering each candidate as **SURVIVE / REFINE / KILL** with required constructive output. |
| **Routelister** (`/routelister`) | Takes a body of work and a goal, and enumerates every direction you *could* move from it. Each direction gets a three-axis type tag (grain × kind × engagement-type, over a fixed nine-verb vocabulary). It writes two files itself: a per-run route map and a persistent concept-map index. It enumerates the field; it never picks the move. |

A consistent rule runs through the whole kit: **separate generating from choosing.** That's why innovation (generate ideas) and critique (judge ideas) are different commands, and why routelister explicitly never selects.

Each discipline has the same shape: a Step-0 mandatory pre-read of its reference file, then a procedure, then a self-assessment verdict (`PROCEED` / `FLAG` / `RE-RUN`). The reference files are heavy — sense-making is ~470 lines, innovate is ~750 — and they contain not just the procedure but a taxonomy of failure modes (six to ten per discipline, split between "operational" Layer 1 failures and "identity-eroding" Layer 2 failures) so the AI can recognize when it's failing in a known way.

### Layer 2 — the "loops" and the protocol layer (the orchestration)

The disciplines **chain together into loops** that the user invokes as one big slash-command:

- **`/MVL`** — runs Sense-making → Innovation → Critique on one question. If the answer isn't good enough, it loops again with a tighter focus.
- **`/MVLw`** — the extended loop: Surfacing → Sense-making → Decomposition → Innovation → Critique. For questions where the AI first needs to draw the right material into view and break it into pieces.

Each loop run creates a timestamped folder under `devdocs/inquiries/` (there are already 95+ such folders, going back months — see "the recursive twist" below). That folder holds, as separate Markdown files, every artifact the loop produced: the question as understood (`_branch.md`), a live state tracker (`_state.md`), the output of each discipline, and eventually a clean compiled `finding.md`. Old discipline outputs get archived to a `docarchive/` subfolder once the loop concludes.

Both loops insist — in capital letters — that the disciplines run **one at a time, sequentially, no subagents, no parallelism**: each one must finish, write its file, and hand off via the state file before the next begins.

The loops are supported by **operational protocols** (in `cognitive_harness/protocols/`):

- **`branch_inquiry.md`** — for spawning a child inquiry from a finished one. Has its own input contract, validation rules, depth policy, and path-length safety check.
- **`conclude.md`** — for compiling a finished loop into a clean `finding.md` using a strict template. Enforces things like "every borrowed commitment from a prior finding must be either re-tested with evidence or explicitly flagged as inherited-without-re-test."
- **`loop_diagnose.md`** — for when an earlier loop produced a bad answer and a later loop fixed it. Frames the "what went wrong in the earlier run?" question as its own diagnostic loop, while resisting premature root-cause claims.

### Layer 2.5 — the "spec governance" layer

There's a small folder called **`cognitive_fixes/`** that's the kit's way of fixing itself. When a recurring AI failure pattern is identified (typically by `/loop_diagnose` finding the same gap in multiple runs), the fix is captured here using a 7-step methodology: identify → decompose → coverage-check → structural-fail-safe → meta-recursion-residual → branch-experiment → evidence-gate. There's currently one such documented fix (about how the AI tends to drop clauses joined by "and" when transcribing a user request), and the folder is explicitly self-limiting — it will be retired or promoted to a real protocol based on staged evidence gates.

---

## What's in `non-active/` — the research bench

About half of the `cognitive_harness/` folder is a separate subfolder called `non-active/`. **These pieces exist but are not shipped by the installer.** It's the project's working laboratory. Reading it gives the real picture of where the project is going.

Highlights:

- **`/comprehend`** — a fully-spec'd discipline for building tested working models of opaque artifacts (codebases, systems, contracts). Has a five-level depth hierarchy (Descriptive → Structural → Causal → Predictive → Generative), each level with a concrete test you must pass. Uses perturbation testing — actually changing something and watching what changes — to discover causality, and has an explicit "accommodation trigger" for noticing when the model needs to be rebuilt rather than patched.
- **`/reflect`** — examines how a *completed loop* performed (not the problem it solved): where the human had to intervene, where information leaked backward in the pipeline, what surprised the system. Produces per-step observations and proposed "memory cells" for the human to confirm before they get persisted.
- **`/routeman`** — a more sophisticated, richer cousin of routelister: enumerates possible next moves from a current state toward a goal, classified across a 16-type taxonomy organized in three Families (Progression / Re-orientation / Coordination), with per-route reachability evaluation and adaptive guidance allocation.
- **`/MVL+`** — an alternative extended loop (Exploration → Sensemaking → Decomposition → Innovation → Critique). The `/MVLw` that shipped is its sibling, swapping Exploration for Surfacing.
- **`/meta-loop`** — a stateful traversal engine that runs many `/MVL+` inquiries threaded together, using `/navigation` as the eyes, recording cross-run memory in a `_meta_state.md` file. Explicitly sequential and human-selected in v1.
- A pile of **operational protocols** that are designed but not yet wired in:
  - **`artifact_materialization.md`** — a controlled "decision-to-files" protocol (compact / standard / full lifecycle modes, depending on risk).
  - **`outcome_review.md`** — an after-use review protocol (did the artifact actually do what we thought it would after we used it?).
  - **`alignment_control.md`** — a shared contract defining seven "alignment layers" (workspace / task / scope / action-space / action-set / coherence / outcome) and a vocabulary for recording where things went wrong.
  - **`spec_governance.md`** — cross-cutting rules that fire at "content-decision points" to prevent silent absorption of decisions (layer commitment, synthesis re-test enforcement, user-words-as-constraint, COULD-vs-MUST dependency gating).
  - **`multi_resolution_navigation.md`** — a protocol for zooming a navigation map into selected regions while preserving the full expansion frontier.
- A **`deprecated_navigation/`** folder retained for explicit historical reasons — the discipline that used to live here as `/navigation` has been renamed and rebuilt as `/routeman`, but the old spec is preserved with an archive note explaining why the rename was "structural, not cosmetic."

There's also an empty `articulate_simple/references/` folder — a placeholder for a discipline that hasn't been written yet, named in some of the design docs.

---

## What this project is *really* trying to do (per the canon docs)

Reading the three canon files in `docs/canon/` makes the broader ambition explicit. The current kit (six disciplines + two loops + a handful of protocols) is the **MVP for a much larger goal:** a self-improving cognitive system. Three pieces of vocabulary capture it.

### "Thinking-space dynamics" — the cognitive model the AI is trying to approximate

The canon doc `thinking_space_dynamics.md` works out what the AI's *internal* cognition should be modeled as: a set of eleven small **cognitive primitives** drawn from cognitive science (attention-pointer, working memory, salience, intuition-similarity, context-framing, inhibition, simulation, metacognition, motivation, evaluation, focus-deep), each with an operational definition. Each discipline in the kit is then built out of a deliberate composition of these primitives — `/surfacing` lists which primitives it uses and which are deliberately absent. The eventual goal is a discipline called `/intuit` that gives the AI real-time "intuitive hunches" about its own work, instead of waiting to find out retrospectively whether it was good. Most of `/intuit` is described in the doc but not yet built.

### "Meaningful traversal" — the orchestration concept

The canon doc `what_is_meaningful_traversal.md` admits openly that it doesn't yet know how to formally define this concept, but the *intuition* is the load-bearing one for the whole project: once you have many loops running in parallel, you need a way to tell **thinking from spinning** — to recognize when the system is genuinely making progress vs. just consuming compute. The doc lists five candidate signals (coverage, convergence, productivity, directedness, depth) but explicitly refuses to commit to a formula yet. "The failure modes are clearer than the success metric," it says.

### "How a discipline should be" — the engineering discipline

The third canon doc, `how_a_discipline_should_be.md`, is a short style guide that explains a real engineering constraint: there's a difference between **dev-history docs** (which describe how a discipline came to be the way it is, with inquiry citations and cascade-refinement labels) and the **runtime canonical spec** (which the AI loads at execution time and which must be free of project-internal scaffolding). The "distillation" step between them is what makes the runtime specs read cleanly — that step has to be deliberate.

### Putting it together

The picture that emerges:

- The author is building a kit where **each unit of AI thinking is its own well-defined cognitive operation**, with a published failure-mode taxonomy.
- These units **chain into loops** so the AI can attack one question structurally rather than off the cuff.
- Multiple loops can eventually run in parallel and be **compared against each other** to ratchet quality up over time.
- A **self-improvement loop** (the "Baldwin cycle" mentioned in the docs) is the long-term goal: the system makes real-time predictions about its own work, those predictions are compared against retrospective ground-truth, and the gap teaches the system to predict better next time.
- A library of **protocols** handles the governance — when work becomes files, when files become decisions, when decisions need to be re-examined — so that the system can be trusted to act without sliding into chaos.

The autonomy ladder (Level 0 = human picks every move; Level 3+ = system is mostly running itself) is the explicit framing of how far along the system is at any given moment. The shipping kit is roughly Level 0–1.

---

## The recursive twist

The `devdocs/inquiries/` folder has 95+ inquiries dating back to early 2026. Skimming them, the punchline is: **the author has been using the kit to develop itself.** Many of the inquiries are about how to improve a specific discipline, what the right shape for a new protocol should be, whether a recurring AI failure pattern justifies a permanent spec edit. The kit is its own primary user.

This produces a recognizable rhythm in the repo:

1. An AI run reveals a recurring failure mode.
2. `/loop_diagnose` runs on the failure chain and writes a `finding.md`.
3. That finding either (a) proposes a "cognitive fix" (small staged correction), (b) proposes a new protocol or a spec edit, or (c) gets deferred behind an explicit revival trigger ("revisit after 3 more matching cases").
4. Repeat.

There's a strong preference throughout the kit for **staged evidence gates** over speculative protocol-building: things are added to `non-active/` first and only promoted to the shipping kit when there's empirical evidence of recurring need. (For example: "Do not promote LOOP_DIAGNOSE into a standalone skill until 5 to 10 diagnostic findings show a stable internal method.")

---

## Who would use this, and why

The shipping kit is for **someone who works with AI assistants on hard, fuzzy, open-ended problems** — design questions, research questions, deep system-understanding tasks — and who is dissatisfied with the off-the-cuff way assistants normally handle them. Instead of "think about X," the user types `/MVL "X"` and gets a structured pass — clarify the question, generate ideas, adversarially test them, conclude or iterate — with every step left as a re-readable file.

The deeper layer (the canon docs, the non-active research, the inquiry archive) is for **someone building AI tooling and methodology itself**, treating "how the AI thinks" as a first-class engineering surface with its own specs, version history, failure-mode catalogue, and deprecation cycle. It's not a finished product so much as **an ongoing research program in how to make an AI think well, written out in real time as the author makes progress.**

---

## Shape of the project

- **Form:** A library of Markdown instruction documents plus two install scripts. Not an app, not a service, not a code library you import.
- **Surface to the user:** Slash-commands inside an AI assistant (`/MVL`, `/MVLw`, `/sense-making`, `/innovate`, `/td-critique`, `/surfacing`, `/decompose`, `/routelister`).
- **Working artifacts:** A constantly-growing archive of timestamped inquiry folders under `devdocs/inquiries/`, each capturing the full record of one structured thinking session.
- **State:** Shipping kit is **stable and consistent** — six disciplines all built on the same template, two loops, three loop-supporting protocols. Behind it, an actively-developed research lab in `non-active/` containing a comprehension discipline, a reflect discipline, a richer route-enumeration discipline, an extended loop, a meta-loop traversal engine, and roughly half a dozen designed-but-not-yet-shipped governance protocols. Plus canon docs spelling out a long-range goal (a self-improving cognitive system with real-time intuition) that the current kit is only the first installment toward.

---

## Honest read

The shipping core looks careful and consistent. The reference files are dense but follow the same pattern: identity → components → process → quality / failure modes → output. Their internal vocabulary is closed (e.g., routelister's nine-verb engagement-type list, td-critique's three verdicts) and their failure-mode catalogues are split into "operational" (recoverable) and "identity-eroding" (drift over time) layers in a way that's coherent across disciplines.

The non-active folder is messier and is **clearly an active research zone** — multiple competing versions of the same idea coexist (e.g., `routeman` vs. `routelister` solved the same problem two different ways; the deprecated_navigation archive note explains why one was rebuilt rather than edited). There are also half-finished design notes (multi-resolution navigation, alignment control, spec governance) sitting alongside fully-spec'd disciplines (comprehend, routeman).

The honest characterization is: **the project is alive and self-aware about it.** There's significant churn in the research bench, deliberate guardrails on premature promotion of ideas into the shipping kit, and an explicit norm of "fix the spec to prevent the next failure, then file the fix with an evidence gate." Nothing here looks abandoned, but a non-trivial share of the codebase is **work in progress that hasn't been pulled into the shipped kit yet, and may not be for some time.**
