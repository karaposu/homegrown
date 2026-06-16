# What This Project Is — A Plain-Language Summary

*Based on actually reading the files: both install scripts, all seven "thinking
discipline" specifications in full, a loop-runner, the protocol files, the
cognitive-fixes folder, and real output the system has produced. The summary
describes what the files DO, not what the marketing docs claim.*

## The one-line version

This is a **toolkit that teaches an AI assistant how to think in a disciplined,
repeatable way** — a set of very detailed "thinking recipes" that install into an
AI coding tool (Claude Code, with an older variant for OpenAI's Codex) and then
run like typed commands. There is essentially no conventional program here. The
"software" is written in careful English as instructions the AI reads and obeys.

## What's actually in the box

Strip away the documentation and the project has only two kinds of working parts:

1. **Two installer scripts** (`install_for_claude.sh`, `install_for_codex.sh`).
   These are short, ordinary shell scripts. All they do is copy or download a set
   of text files from a public GitHub repository (named "homegrown") into the AI
   tool's settings folder so the AI can use them as commands. That is the entire
   "installation" — no compiling, no service, no dependencies.

2. **A set of instruction files** (every one named `SKILL.md`, each backed by a
   long `references/*.md` file). These are the real product. Each one is an
   exhaustive, step-by-step procedure telling the AI how to perform one specific
   kind of structured thinking.

There is no app to open, no website, no database. The thousands of Python files
you might notice are not part of the project at all — they are third-party
libraries sitting in a virtual-environment folder (`.venv`) and have nothing to
do with what this project does.

## What it does when you use it

The toolkit gives the AI seven named "thinking disciplines," each invoked by
typing a slash command:

- **Articulate** — takes a vague request and spells out every reasonable way it
  could be understood, *without* picking one. It surfaces the ambiguities instead
  of guessing.
- **Surfacing** — sweeps a body of material (a codebase, a document set) and pulls
  the relevant pieces into view, tagging how relevant each one is.
- **Sense-making** — turns something messy or ambiguous into a clear, stable
  understanding, deliberately testing its own conclusion from many angles.
- **Decompose** — finds the natural seams in a problem too big to handle at once
  and splits it into independent pieces with defined connections.
- **Innovate** — generates genuinely new ideas using seven named techniques, then
  stress-tests each one for survival.
- **Critique** — pits competing ideas against each other ("prosecution" vs.
  "defense") and renders a verdict: keep, refine, or kill.
- **Routelister** — surveys a finished body of work and lists every direction you
  *could* take next, as typed "routes," without choosing among them.

On top of these sit **"loop runners"** (commands like `/MVL`, `/MVLw`, `/aMVLwr`).
A loop runner is a conductor: it runs the disciplines one after another, in a
fixed order, to drive a single question from raw form to a finished answer. For
example `/MVLw` runs Surfacing → Sense-making → Decompose → Innovate → Critique,
in strict sequence, each step feeding the next.

The mechanism that ties it together is **files on disk**. When you pose a
question, the runner creates a timestamped folder for that "inquiry." As each
thinking step finishes, it writes its output to a file in that folder and updates
a running status file (`_state.md`) that records what's done and what's next.
Because all progress lives in files, the work can be **paused and resumed later** —
even in a brand-new session, or by a different AI — just by pointing the command
back at the folder. When the loop completes, a wrap-up step ("CONCLUDE") compiles
everything into a single polished answer file (`finding.md`) and tidies the
working notes into an archive sub-folder. There are also support procedures for
spinning off a sub-question as a child "branch" inquiry, and for diagnosing why an
earlier run produced a weak answer.

## How serious the "recipes" actually are

This is the part that's only obvious once you read the files. These are not casual
prompts. Each discipline's specification runs to many hundreds of lines and reads
like an engineering standard for a single mental operation. They define their own
vocabulary, a multi-step process, explicit "failure modes" split into two tiers
(mistakes you can catch in one run vs. slow drifts you only catch over time),
self-check routines, and a final self-assessment verdict the discipline must emit
("proceed / flag / re-run"). They even contain rules about their own rules — when
a new check is allowed to be added, and what evidence is required first.

Most strikingly, the specifications are **annotated with their own history**.
Individual rules cite the specific past investigation that produced them, carry
notes like "deferred pending three more examples," and reference measured lessons
from real runs (one rule is justified by an observed "zero out of 109" failure
count). In other words, the system has been used, over and over, to study and
sharpen its own thinking instructions — and the edits left a paper trail baked
into the specs.

## It is mostly pointed at itself

The project contains **roughly 128 completed inquiry folders** (the docs claim
350+ findings overall). Reading them, the overwhelming majority are the system
investigating and improving *itself* — designing new sub-tools, refining the
disciplines, settling its own terminology. The finished answers are genuinely
substantial: structured, multi-section documents that weigh alternatives, record
what was rejected and why, and lay out build-ready specifications. So the project
is simultaneously the tool, the tool's main user, and the tool's main subject.

## What it's reaching for (the aspirational part)

A large body of writing in the `docs/` folder describes an ambition far beyond
what the working parts deliver today. The stated long-term goal is a
**self-improving, increasingly autonomous "thinking system"** — one that would
eventually notice its own gaps, propose its own improvements, judge its own work,
and need less and less human steering over time. There's a named target for the
current era (nicknamed "SUSTRALL," a loop that keeps several thinking loops running
and coordinated), and a planned future tool that would track which suggested
"routes" have actually been carried out.

The documents are unusually honest about the gap between vision and reality. By
their own admission, almost none of the autonomous machinery exists yet: today a
**human still does all the steering** — deciding what to work on, judging whether
answers are good, and choosing what to do next. The automation currently stops at
the boundary of a single question; everything *between* questions is still manual.
Several centerpiece ideas (a quality-judging component, a memory that spans across
inquiries, an autonomous orchestrator) are explicitly marked "designed, not built"
or "idea only."

## The general shape

It's best described as a **prompt-engineering / cognitive framework** — or more
vividly, an "operating system for AI reasoning" — shipped as plain-text files. The
delivery mechanism is a CLI-style install script; the runtime is whatever AI tool
you've installed it into; the "memory" is a growing tree of Markdown files on disk.

## Honest assessment of state

- **Working and heavily used:** the seven disciplines, the loop runners, the
  folder-based inquiry/resume system, and the wrap-up/archiving flow. These are
  mature and have been exercised hundreds of times, on real (if self-directed)
  problems.
- **Stale around the edges:** the two installers have already drifted apart — the
  Codex one still tries to install a "navigation" skill and a "resume" protocol
  that have since been retired (they now live only in a `non-active/` folder). So
  the Codex install path looks out of date relative to the Claude one.
- **Cluttered from fast iteration:** there's a lot of sediment — folders named
  `non-active`, `deprecated`, `archived_skills`, plus many "old" copies of files
  (`README_old.md`, `_old`, `_old2`, "copy" files). This is the normal residue of
  a fast-moving solo research project, not a sign of abandonment; the active set
  is clearly distinguished from the retired set.
- **Mostly aspirational at the top:** the grand vision of an autonomous,
  self-improving mind. The foundation (rigorous, pausable, resumable structured
  thinking) is real and impressive; the autonomy layer built on top of it is, for
  now, a detailed plan rather than running code.

## Who would use this and why

The audience is essentially **the author and like-minded power-users of AI coding
assistants** — someone who wants their AI to attack hard, fuzzy problems with a
disciplined, auditable process instead of an off-the-cuff answer, and who wants the
AI's reasoning saved, reviewable, and resumable rather than evaporating when the
chat window closes. It would also interest researchers studying how to make AI
reasoning more rigorous and, eventually, more self-directed. It is a
research-and-personal-tooling project, not a consumer product.
