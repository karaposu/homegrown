# What This Project Is — A Plain-Language Summary

*Rewritten 2026-09-17 after reading every file in `cognitive_harness/` (72 files, including the retired material and the backup copies) and every file in `docs/canon/` (39 files) in full, plus the installer scripts, the CI workflow, the Python converter and schema, the React/three.js atlas app, and the two standalone HTML animations. Existing summaries were not consulted. Where this document reports what the project INTENDS, that comes from the canon; where it reports what EXISTS, that comes from the working files. The two are kept apart.*

## The one-line version

This is a **set of very detailed "thinking recipes", written in English, that an AI coding assistant reads and follows as slash-commands**, plus a small side project that draws a 3D map of everything those recipes have produced. There is almost no conventional program. The "software" is prose instructions for a language model. The only ordinary code is two Python scripts and a browser app that visualise the output.

The project calls itself **Homegrown** and describes itself, in its own words, as a "cognitive harness": a layer installed on top of an AI assistant that changes how the model thinks by forcing it through named, ordered cognitive steps.

## What is actually in the box

Stripped of documentation, there are six kinds of working parts:

1. **Ten "disciplines."** Each is a folder with a short entry file (`SKILL.md`) and a long specification (`references/*.md`, 200 to 750 lines). The entry file tells the AI to read the specification in full, run the described procedure on whatever input it was given, save a markdown file, and end with a self-grade (PROCEED / FLAG / RE-RUN). The ten are:
   - `articulate_simple` — spell out every way a request could be read, without picking one.
   - `articulate_warm` — redo that after project material is in view; commit to an anchor; flag if the request conflicts with reality.
   - `surfacing` — pull the relevant items out of a body of material and tag how relevant each is.
   - `sense-making` — turn a vague input into a stable understanding, in six successive versions.
   - `decompose` — cut a big problem into pieces along its natural seams, with a dependency order.
   - `innovate` — generate candidate ideas by firing seven fixed "mechanisms" (combination, inversion, domain transfer, and so on) and test each.
   - `td-critique` — put candidates through prosecution, defense and collision; verdict SURVIVE / REFINE / KILL.
   - `routelister` — list every direction the work could go next, typed with one of nine verbs; never choose.
   - `routelog` — a small append-only log of which of those directions were actually taken. The canon records it as never used.
   - `paradigm_sweeper` — map the "schools of thought" around a stuck topic as seeds for later runs. Marked v0-provisional and never run on an unfamiliar topic.

2. **One runner: `traverse`.** This is the heart of the project. Given a question, it creates a timestamped folder under `devdocs/inquiries/`, then runs the disciplines one after another (articulate, surfacing, sense-making, decompose, innovate, critique, routelister), saving one file per step and tracking progress in a `_state.md` file so the run can be resumed in a later session. When the critique says the question is answered, a **CONCLUDE** protocol compiles everything into a `finding.md` written for someone who never saw the intermediate files. If not answered, it narrows the question and loops.

3. **Four protocols** (procedures the runner or a human loads when needed): `branch_inquiry` (make a child question folder under a parent), `conclude` (write the finding and archive the working files), `loop_diagnose` (compare a bad run, the human's correction, and a good run to guess what went wrong), and `seed_harvester` (read a source such as a paper and extract "seeds": gated, deferred ideas for the project, recorded in a global index).

4. **A "cognitive fixes" folder** meant to accumulate evidence-gated corrections to the recipes. It holds one fix whose planned validation experiment never ran, and the fix targets two runners that have since been retired.

5. **Three installer scripts** that copy the recipes into the AI tool's skills folder so they become `/commands`. One targets Claude Code, one targets OpenAI Codex, and one installs a frozen older snapshot side-by-side so two versions can be compared.

6. **The Venture Atlas** (`docs/visualisation/`). A Python script reads every inquiry folder, extracts dates, status, relationships and open next-steps, validates the result against a strict schema (with "honesty counters" recording everything it could not parse), and writes one JSON file. A React + three.js browser app then renders the inquiries as a 3D "time road": position is time, terrain height is weekly effort, chains of related inquiries sit as settlements, quiet stretches fold into marked pleats, and a NOW beacon marks the present. It has search, a "last 10 worked" list, an open-routes queue, a replay scrub bar, and a reader that renders any finding and offers a copy-paste command to resume it. Two standalone HTML pages animate a glowing line moving through a cube of dots; they are labelled illustrative and use generated points, not project data.

## What the project says it is for (from the canon)

The `docs/canon/` folder is the project's statement of intent. Read in full, it says:

- **The long-term aim** is a self-improving thinking system that gradually takes over jobs the human does today: noticing what to work on, valuing it, steering mid-run, remembering across sessions, and deciding when to stop. The canon calls this a "consciousness gradient" with six observable indicators, and is explicit that "the test is capability, not phenomenology." The human's role is meant to shrink level by level, each step earned by recorded evidence.
- **The bet** is that model intelligence is converging, so the structure of thinking is where advantage lies: give a present-day model the right cognitive structure and a self-improving loop becomes reachable earlier than by waiting for smarter models.
- **The current era's goal** is called SUSTRALL, "the sustained traversal loop of loops": the runner (the hands), a separate warmed-up session that lists next directions (the eyes), and an orchestrator that selects, dispatches, remembers and assesses (the will). Its acceptance test, "explfine", is to point the system at any bounded readable territory and get back a concept map, per-concept findings, and an honest list of what was left unexplored, with the human contributing only the seed and reviews.
- **The vocabulary settled in July 2026:** one runner execution is a "traverse"; a purposeful, bounded chain of many traverses is a "venture"; the next milestone is to "reach venture" with the system, not the human, carrying more of the between-run work. A worked example of one venture exists: roughly sixty runs between July 2 and July 10, steered entirely by the human.
- **A standing rule of suspicion:** anything built to support chaining runs together (memory designs, selection records, dispatch machinery) is not to be trusted or built on until a real venture has exercised it. The canon states this rule applies to itself.
- **Honest status statements the canon makes about itself:** the human "IS all three layers" of quality awareness today; cross-run "traversal memory" has "zero instances ever"; the real-time hunch layer (`/intuit`) is "an idea: nothing of it is implemented"; the structural checker is "designed, not built"; the loop's own feedback channel was never written to across 109 runs. The canon's own allocation rule therefore says: stop polishing the runner by default, and climb toward the loop-of-loops instead, doing runner work only when a concrete failure fires.

The canon also contains substantial theory: an argument that the project is writing an "executable theory of cognitive regulation" and testing it by running it; an argument that the runner's true lever is selection across runs rather than steering within one; a classification of the whole enterprise as evolutionary search rather than gradient descent; a movement vocabulary relating "paradigms" to steps, chart-changes, steering decisions and itineraries; and a careful clarification of why "when has the system thought enough?" is harder than the classic halting problem. Every one of these is written as a bet with named tests, and the tests have not been run.

## What it currently does (working)

- The disciplines and the runner have been used heavily: **254 dated inquiry folders** holding roughly **4,600 markdown files**, the latest dated 2026-07-20. Each folder follows the runner's layout. The system works as a pipeline that manufactures written analyses, and it has been used on itself repeatedly to revise its own recipes.
- The recipes are internally rigorous in their own terms. Each names its inputs and outputs, its failure modes, and a self-assessment. Several enforce a shared design rule, "enumerate, never select", so that listing options and choosing among them are always separate steps.
- The Python converter and schema work as a matched pair; the schema refuses to write a file whose counts do not match reality. The atlas app loads that file, handles its own errors, and renders correctly against the committed snapshot.
- The seed-harvesting protocol has a live global index and a finding-template section it feeds.
- The git-snapshot practice for A/B-comparing old and new versions of a recipe is documented and has been exercised once.

## What it is trying to do and has not done (in progress)

The canon's own status ledger, checked against the files, holds up. Between-run machinery is designed but unbuilt:

- The `articulate_warm` step exists as a discipline, and the **installed** copy of the runner (in the user's skills folder) wires it into the pipeline as a "Warm" stage. The **repository's** copy of the runner never mentions it. The live runner is ahead of the repo, and the edit was never committed.
- The Claude installer does not install `articulate_warm`, `paradigm_sweeper`, or the seed-harvester protocol, though all exist and two are installed on this machine. Installation has been happening by hand.
- The runner calls a structural checker script (`tools/structural_check.sh`) that does not exist anywhere in the repo. The runner tolerates its absence by asking the AI to check manually.
- The observation-feedback file the runner prompts for at the end of every run has never been created. The formal specification of "meaningful traversal" that several canon docs defer to (`devdocs/spec/meaningful_traversal.md`) does not exist either.
- The reference specifications show layered growth: notes stacked onto older text, phrases like "forthcoming" pointing at sections that already exist, mismatched counts ("seven modes" where nine are listed; "five operations" where six are numbered), two competing phase numberings inside sense-making, and a critique spec that points at failure modes it never adopted. None of this breaks the recipes, but they are working drafts.
- The atlas snapshot is from 2026-07-12 and covers 231 inquiries; there are now 254. Regenerating it is a one-command step that has not been run.

## What looks stale or abandoned

- **The Codex installer is broken.** It references skills and a protocol that now live only in the retired folder.
- **The GitHub Actions workflow publishes a Python package to PyPI on release**, but there is no package definition anywhere. It is a template leftover.
- **A retired-material folder** (`cognitive_harness/non-active/`) holds a whole previous generation of the design, about twenty files: four earlier runners that were strict subsets of `traverse`; an `explore` discipline replaced by `surfacing`; `comprehend` and `reflect`; `navigation` and its successor `routeman` (both replaced by `routelister`); a first attempt at the cross-run layer (`meta-loop`, human-selected, never revived); and a family of protocols (artifact materialization, outcome review, an "alignment control" contract, multi-resolution navigation, resume, spec governance). Archive notes say they are kept only so old findings that cite them stay readable. Notably, the retired navigation "warm-up" files are project-summary and architecture-trace prompts of the same kind as the one that produced this document, and one of them explicitly says not to use this skill.
- **The canon has drifted from the files.** Several live canon pages still describe the retired state: the worker-loop page says two runners are shipped, the naming page says the old runners "coexist", the folder-convention page names old runners as inquiry-creators, and the discipline taxonomy and discipline list still present `routeman` as the boundary discipline. The protocols page refers to an `/inquiry` command, a `/wayfinding` discipline, a `commands/` folder, and a metadata hook, none of which exist. The canon itself flags four of these spots as stale and lists the cleanup as a pending user-approved edit. Three versions of the north-star document sit side by side (old, old2, current), as do two versions of the thinking-space model. Several canon files are verbatim copies of inquiry findings, complete with model-name frontmatter, rather than curated concept pages.
- Three skill files carry small uncommitted path edits with `.bak` backups dated 2026-09-11, the most recent activity in the project. A stray folder named `traverse copy` and three "copy" files inside the harness are pre-edit backups that duplicate their originals except for one paragraph each.
- The browser app's `node_modules` (about 2,350 files) is committed to git, and the Python side depends on `pydantic` with no requirements file declaring it.
- Six loose files in the repo root (`a.md` through `h.md`) are transcribed thinking-aloud notes, not code or docs.

## Who would use this and why

Practically, **one person**: the author, who uses an AI coding assistant as a research partner and wants its reasoning to follow a fixed, auditable procedure rather than free-form chat. The inquiry corpus is that person's working notebook, and the canon is their evolving theory of what the notebook is for. The atlas exists so they can see, at a glance, what they have been working on, what went quiet, and which threads have open next-steps. A second audience, other people installing the recipes into their own AI tool, is what the installers are for, but the stale Codex installer and the hand-installed extras suggest that path is not currently maintained.

## The general shape

- **Not** a web service, library, or API. There is no server, no database, no tests, no runtime code in the core.
- The core is a **prompt-engineering toolkit**: markdown files executed by a language model inside Claude Code, invoked as slash-commands, producing markdown files in a fixed folder structure.
- The side project is a **static browser app** (Vite + React + three.js) fed by a **one-shot Python converter**. It runs locally from a generated JSON file; nothing is deployed.
- The repository is mostly output: of roughly 7,300 tracked files, about 5,000 are markdown and the majority of those are generated inquiry records.

## Where things stand (dates)

| Event | Date |
|---|---|
| First commit | 2025-05-10 |
| Runner consolidated to `traverse` alone | 2026-06-14 |
| "Venture" vocabulary settled in canon | 2026-07-10 to 07-19 |
| Most recent inquiry folder | 2026-07-20 |
| Atlas data snapshot | 2026-07-12 |
| Last commit | 2026-08-27 |
| Uncommitted edits (with backups) | 2026-09-11 |

The project is alive but slowing: heavy use through mid-July 2026, a single commit in late August, and a few uncommitted line edits in September. Nothing indicates it is finished. The runner and disciplines are usable now. The self-steering layer they are built to feed remains unbuilt, and by the canon's own account, building it is the next thing to do.
