---
status: active
model: claude-opus-4-8[1m]
effort: max
---
# Finding: Unflagged routine-command generation tendencies

## Question

**From the inquiry's framing (`_branch.md`):** When an AI agent (here, Claude Code) is doing a task and reaches for the shell, it keeps producing *compound* commands — things like `echo "===" && date && mkdir -p "$(date …)__slug" && echo "created…"` or `ls … | sort | awk '$0 >= "…"'` — that trip a human-approval prompt instead of running automatically. The user asked, at the meta level: **what tendency should the agent have *while it is composing* a routine command (the `mkdir`/`cd`/`ls` family) so the command comes out auto-approvable rather than flagged?** The answer had to be a strict, generalizing *list* — not a patch for the two or three specific offenders already seen, because the user explicitly wanted "an even more robust solution."

**Goal:** an installable disposition that shifts the agent's *default reach* for the shell toward simple, auto-approvable commands — phrased generally enough to catch future offenders, applicable at the moment of composing, and without forbidding legitimate uses.

## Finding Summary

- **The flagged commands are a symptom, not the disease.** The disease is a single generative habit: the agent fuses *saying*, *sequencing*, and *computing* into one shell line and asks the shell to do work that is not a filesystem action. The user named this exactly — a "low-duration reasoning tendency" (the agent skips intermediate reasoning by packing everything into one clever incantation).

- **Why fusing is fatal to auto-approval:** the permission system approves a compound command only if *every* part is independently safe — so a command's safety equals its **riskiest** part, not its average. Bolting a harmless `echo` label or a `$(date …)` onto an otherwise-trivial `mkdir` drags the whole line into a human-approval prompt. Fewer things per command is therefore *monotonically* safer.

- **`echo`, `$()`, `awk`, `cd`-chaining are not "dangerous" — they are the three ways the shell gets misused:** for *presentation* (`echo`), for *sequencing* (`&&`/`;`/`cd`), and for *computation* (`awk`/`sort`/`$()`). Each has a proper home that is not the shell.

- **The robust fix is one root principle, not a blocklist:** *the shell is the agent's hands for touching the filesystem; everything it wants to say, decide, sequence, or compute stays in the agent — in its reply, its reasoning, or a dedicated tool.* This **closes the offender set by construction** — any future idiom (`python -c`, `find -exec`, process substitution) is caught by the single question "is this a filesystem action?", so the rule never needs to enumerate idioms.

- **The "strict list" the user wanted is a routing table** (intent → where it goes instead), derived from that principle — not a list of banned tokens.

- **A critical correction surfaced:** "default to no shell / avoid the shell" is the *wrong* framing — it would discourage the plain `mkdir`/`ls`/`mv` the user explicitly said they want used. Those commands auto-approve and are good. The tendency targets only the *non-filesystem* fragments, and the *fusing* of them.

- **Allowlisting-as-you-go is not the cure.** The project's own permission file is littered with ~50 one-off "don't ask again" entries (e.g. `echo "exit code: $?"`, `awk '$0 >= "2026-05-28_20-35"'`) that essentially never match again; only the plain-verb entries (`git *`, `mkdir -p …`, `mv …`) generalize. Command *shape*, not allowlist growth, is the lever.

## Finding

### Why this inquiry exists

The user noticed that this model (Opus 4.8) reaches for compound shell one-liners more than its predecessors, and those one-liners get flagged for human approval — breaking flow during otherwise-routine work (creating an inquiry folder, surveying a directory). An earlier conversational attempt produced a narrow fix ("don't use `echo` or `$()`"). The user judged that too narrow and asked for the underlying *tendency* — the disposition the agent should hold while composing any routine command, stated at a level general enough to last.

### The core insight

The specific bad commands all share one root: the agent is using the shell as a general-purpose do-everything tool, when the shell's proper job is narrow — **mutate or inspect the filesystem**. Everything else the agent is tempted to fold into the command (a status label, a sequence of steps, a data filter, a freshly-computed value) is really *cognition* or *presentation*, and the agent has better homes for those: its own reply text, its own reasoning, and its dedicated tools (Read, Glob, Grep, Write).

This matters because of how approval works. The permission system can only auto-approve a command it can *prove* safe by matching it against simple allowed patterns. A single plain verb on literal arguments (`mkdir -p some/path`, `ls some/dir`) is provable and passes silently. But three things break that proof:
1. **Command substitution** `$(…)` — the value isn't known until it runs, so it can't be proven safe in advance.
2. **Turing-complete tools** like `awk`/`sed`/`perl` — they can do anything, so they can't be proven safe.
3. **Compound chains** `a && b ; c` — approved only if *every* link is independently allowed; one weak link forces the prompt.

So the agent's habit of writing one rich line that labels-then-acts-then-filters is precisely the thing that defeats auto-approval. The line's safety is dragged down to its single riskiest fragment.

### The answer — a generative disposition for command creation

**1. The root principle (hold this while composing):**

> **The shell is your hands for touching the filesystem. Everything you want to *say*, *decide*, *sequence*, or *compute* stays in you — in your reply, your reasoning, or a dedicated tool.**

This one sentence closes the problem by construction: before any fragment goes into a shell command, it faces the question *"is this a filesystem action?"* If no, it has a home elsewhere — and that catches not just `echo`/`$()`/`awk` but any future idiom, because the test is about the *category of work*, not the specific command.

**2. The compose-time reflex (the runtime check):**

Before composing a shell command, route the intent to its home:
- *Saying / labeling / status* → put it in your **reply text**, not `echo`.
- *Deciding / filtering / computing* → run a plain read and **reason over the result yourself**, or use a **dedicated tool**.
- *Reading / searching / editing files* → use **Read / Glob / Grep / Write** (note: Write creates parent directories on its own, so you often need no `mkdir` at all).
- *A genuine filesystem mutation* → this, and only this, goes to the shell — as **one plain verb on literal arguments**.

Self-check (a felt signal, no settings file needed): *"Is this one plain verb on literal args — no `$()`, no pipe into `awk`/`sort`, no `&&`/`;` chain, no `cd`-then-act? Would it pass without me having to click 'don't ask again'?"* If not, reshape it.

**3. The strict list (a routing table, not a blocklist):**

| Don't put this in the shell | Because it's… | Put it here instead |
|---|---|---|
| `echo` / status lines / section labels | presentation | your reply text |
| `&&` / `;` chains; `cd` then act | sequencing | separate tool calls; use absolute paths |
| `awk` / `sort` / `grep`-to-filter; `$(…)` | computation | a plain `ls`/read, then reason; or a dedicated tool |
| `$(date …)` inside a path | a value that doesn't exist yet | run `date` alone, then reuse the literal value |

The left column is *illustrative* — the principle (row-by-row, "is this a filesystem action?") is what makes the list complete, not the specific entries.

**4. The anti-batching clause (this cancels the root cause):**

Prefer **many small auto-approving commands over one compound line.** A flagged command interrupts the human and breaks flow; that costs far more than the round-trip you'd save by batching. This deliberately overrides the usual "batch to be efficient" instinct *in this context*, because the trade-off is reversed here. (Scope: "don't *fuse* separate jobs or non-filesystem work into one command" — not "never use `&&`." A single genuine filesystem job like `mkdir -p a/b/c` is one command and is fine.)

**5. The exception (so the rule doesn't over-reach):**

When you face *genuinely large* data you cannot reasonably read and reason over in-context, shell filtering (`awk`/`sort`/pipes) is legitimate — then allowlist that specific tool so it stops prompting. The default for *small* surveys (a few dozen items) is still: list plainly, reason in your reply.

### What this explicitly does NOT say

It does **not** say "avoid the shell" or "the shell is a last resort." Plain `mkdir`, `ls`, `mv`, `date` are good, auto-approving, and exactly what the shell is for — the user explicitly wants them used. The tendency targets only the *non-filesystem fragments* and the *fusing of multiple jobs into one line*.

## Next Actions

### MUST

- **What:** If the disposition is installed anywhere, phrase it to *bless* plain shell verbs (`mkdir`/`ls`/`mv`/`date`) and target only the non-filesystem reach + the fusing — never as "avoid/last-resort the shell."
  **Who:** whoever writes the rule (user or agent).
  **Gate:** observable — at the moment any version of this rule is written into a file.
  **Why:** prevents the over-correction that critique identified as the one fatal flaw; keeps the rule aligned with the user's explicit "i want mkdir ls to be used."

### COULD

- **What:** Install the disposition as a global rule in `CLAUDE.md` (project-level instructions the agent always sees).
  **Who:** user.
  **Gate:** condition-bound — when the user wants the broadest coverage.
  **Why:** the habit appears in *spontaneous* repo inspection too, not only in prescribed MVLw steps; a global rule is the only placement that reaches those cases.

- **What:** Install it as a rule in the MVLw runner spec (`cognitive_harness/MVLw/SKILL.md`), and/or a point-of-use note at its ROOT-NEW folder-creation step.
  **Who:** user.
  **Gate:** condition-bound — when the user wants the MVLw folder-creation command specifically cleaned.
  **Why:** the folder-creation step is the one *prescribed* site where the flagged command reliably appears; a point-of-use note is maximally effective there. (Narrower than the global option.)

- **What:** Add a complementary enforcement hook that blocks/reshapes compound commands at execution time.
  **Who:** user.
  **Gate:** condition-bound — only if the prompt-side tendency proves insufficient in practice.
  **Why:** a prose tendency *discourages*; a hook *enforces*. Different lever (execution-time, not generation-time).
  **Depends-on:** none — but see DEFERRED; this is a separate mechanism from the tendency this finding delivers.

### DEFERRED

- **What:** Decide the single canonical placement (global vs MVLw vs both).
  **Gate:** the user's own choice — this finding deliberately leaves it open (it is a deployment decision, not a viability question).
  **Why (if revived):** consolidates where the disposition lives so it isn't duplicated or drifting across files.

## Reasoning

**What survived and why.** Five candidate ideas from the innovation step converged, from at least five independent angles (inversion, domain transfer, lens-shifting, constraint manipulation, combination), onto one core: *the shell is a minimal filesystem effector; cognition routes elsewhere.* Because multiple independent mechanisms reached the same place, the core is robust rather than an artifact of one line of reasoning. The assembled whole — root principle + compose-time reflex + routing-table list + anti-batching clause + large-data exception — was ranked the terminating answer.

**The one real prosecution hit (a REFINE, not a SURVIVE).** The candidate phrased as "default to no-shell / the shell is a last resort" was sent back for refinement. Its intent was right (many bad commands would never form if Write were reached for first), but its *wording* collided head-on with the user's explicit statement that they want `mkdir`/`ls` used — and those commands were never the problem (they auto-approve). The refinement: bless plain shell verbs, target only the non-filesystem reach. This correction is folded into the final answer and elevated to a MUST.

**What was killed.**
- *Token blocklist ("just ban `echo` and `$()`")* — killed because it doesn't generalize. The agent routes around it with the next idiom (`python -c`, `find -exec`). The user had already rejected this as not robust enough; the inquiry confirmed it structurally — only a principle that closes the set by construction survives.
- *Allowlisting-as-the-cure ("click 'don't ask again'")* — killed as the primary fix. Evidence: the project's permission file already holds ~50 one-off entries that never re-match. It treats the symptom (the prompt) while leaving the habit intact, and it defeats the safety purpose of prompts. Retained only as the tail of the large-data exception.
- *Mechanical enforcement via a hook* — not killed, but ruled **out of scope** for this question. It is a different lever (it changes what *executes*, not what the agent *generates*), and the user asked specifically for a *tendency*. Preserved as a COULD/research-frontier.

**A note on method.** This inquiry's subject is the agent's own behavior, which risks circular self-evaluation. Every load-bearing claim was therefore grounded in *external* evidence rather than introspection: the harness's own Bash-tool guidance (which already says "avoid `cat`/`sed`/`awk`/`echo` — use the appropriate dedicated tool" and "prefer absolute paths — `cd` in a compound command can trigger a prompt"), the observed flagged commands, and the empirical allowlist contents. The fix amplifies a directive the harness already states; it does not invent one.

## Open Questions

### Monitoring
- Whether the disposition, once installed, actually reduces flagged commands in practice — observable over the next several sessions by watching for compound-command approval prompts. If they persist, the prose tendency is insufficient and the enforcement-hook COULD becomes more attractive.

### Refinement Triggers
- If the agent, following this rule, ever *under-uses* the shell (hesitates on a plain `ls`/`mkdir`), the wording has over-corrected — re-open and strengthen the "plain shell verbs are good" framing.
- If a new offender idiom appears that the principle does *not* obviously catch, re-open to confirm the "is this a filesystem action?" test still closes the set.

### Research Frontiers
- The execution-time enforcement hook (reshaping or blocking compound commands mechanically) is a separate, unspecified mechanism — it would need its own design inquiry.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
i think we need an even more robust solution,

let me rephrase it better

to LLM generate unflagged  commands,  what kind of tendency it should have? as a list?

1, 2,  strict rules abut main fix is about tendency during command creation...

for example it asked me

 Bash(cd /Users/ns/Desktop/projects/native/devdocs/inquiries
      echo "MODEL + TOTAL ARTIFACT SIZE (discipline docarchive + finding) per inquiry:"…)
  ⎿  MODEL + TOTAL ARTIFACT SIZE (discipline docarchive + finding) per inquiry:

which was silly..

we need to explain LLM in a meta way,what is the corect way to approach routine command creation  like mkdir cd ls etc
```

</details>
