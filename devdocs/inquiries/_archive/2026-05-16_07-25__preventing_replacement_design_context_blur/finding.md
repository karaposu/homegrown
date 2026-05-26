---
status: active
model: claude-opus-4-7[1m]
effort: high
---
# Finding: Preventing Replacement-Design Context Blur

## Question

The user is iterating on `cognitive_harness/` — the renamed project-internal folder that holds the canonical source-of-truth for cognitive disciplines (formerly called `homegrown/`). The folder currently contains 13 sub-folders: 7 the user identifies as cannon (the active set the project depends on) and 6 experimental (residue from prior iterations or active replacement work). Among the experimental, `navigation/` is being actively redesigned.

The user noticed that every time they try to design what should replace `navigation/`, the existing version's content reaches the design conversation and biases the agent's reasoning. They do not want to remove the experimental skills — they may be useful later, or get promoted back to cannon — but they want them isolated from the design flow.

The question: how should `cognitive_harness/` be organized or annotated so that designing a replacement for an experimental skill doesn't suffer this context-blur, without removing the existing skills?

The goal: a concrete organizational and/or annotational mechanism that
- lets replacement-design conversations stay clean of prior-version contamination,
- keeps experimental skills accessible for reference, comparison, or restoration,
- doesn't impose maintenance churn on cannon (active) skill workflows,
- composes with the existing folder layout.

## Finding Summary

- **Context blur is dual-vector, not single-vector.** Two mechanisms reach the design conversation: registry-list priming (every registered skill's frontmatter description is surfaced to the agent via Claude Code's available-skills system reminder) and reflexive Read (the agent reads `cognitive_harness/<skill>/SKILL.md` when the skill name is mentioned). Both must be mitigated.

- **The mitigation is a bi-folder action.** For each experimental SKILL, move `cognitive_harness/<skill>/` to `cognitive_harness/_archive/<skill>/` AND remove `~/.claude/skills/<skill>/` (the runtime registry copy). The folder move neutralizes the reflexive-Read vector (the canonical path no longer exists). The registry remove neutralizes the registry-list priming vector (the frontmatter description disappears from the available-skills list). Touching only one side leaves the other vector active.

- **"Experimental" partitions into three structural profiles that warrant differentiated handling.** Active SKILL-shaped (`navigation`, `meta-loop` — currently being redesigned; full exposure on both vectors) → move + unregister. Dormant SKILL-shaped (`comprehend`, `reflect` — registered but inactive; full registry-list exposure, low reflexive-Read exposure) → move + unregister. Non-SKILL artifact (`contracts/alignment_control.md`, `next_question_to_ask.md` — not registered as skills; no registry-list exposure) → leave in place by default; move only if the artifact goes stale.

- **`decompose` is functionally cannon-by-runtime and should NOT be archived without explicit user confirmation.** The user listed 7 cannon skills (`explore`, `innovate`, `MVL`, `MVL+`, `protocols`, `sense-making`, `td-critique`), omitting `decompose`. But `/MVL+`'s pipeline (Exploration → Sensemaking → **Decomposition** → Innovation → Critique) invokes the Decomposition discipline, which loads from `~/.claude/skills/decompose/`. The listing omission appears accidental. The finding flags this as an Open Question — the user must adjudicate before any action on `decompose`.

- **The convention is encoded in a top-level `_archive/` folder with a README.** The folder name extends an existing internal precedent (`cognitive_harness/protocols/_archive/` already exists, containing one archived protocol). The README explains what goes in `_archive/`, the two-step move procedure, the inverse promotion procedure, and an explicit agent-instruction not to auto-Read or auto-load anything under `_archive/` unless the user explicitly requests it. The convention is forward-looking — future experimental skills follow the same pattern without re-deliberation per skill.

- **Reversibility is one-step.** Promoting an archived skill back to cannon is `mv` from `_archive/` to top-level plus `cp -r` to `~/.claude/skills/`. Bash functions for verify + reverse handle idempotency, partial-failure detection, and slot-clobber safety.

- **Two non-critical caveats are carried as Open Questions.** Future Claude Code releases may add auto-sync between `cognitive_harness/` and `~/.claude/skills/` — if so, the registry unregister gets reverted and the convention needs adaptation. The agent-instruction in the README is honor-based (a second tier of enforcement) and not structurally guaranteed; the load-bearing enforcement is the bi-folder action itself.

## Finding

The user has been iterating on `cognitive_harness/`. The folder currently contains 13 sub-folders: cannon (`explore`, `innovate`, `MVL`, `MVL+`, `protocols`, `sense-making`, `td-critique`) plus six experimental (`navigation`, `meta-loop`, `comprehend`, `reflect`, `decompose`, `contracts`) plus a loose file (`next_question_to_ask.md`). One experimental skill — `navigation/` — is being actively redesigned, and the user observed that the existing version's content keeps reaching the design conversation, biasing the agent. The user wants to keep the experimental skills accessible but stop them from contaminating new design work.

### 1. What context blur actually is

Context blur is the prior version's content or behavioral cue reaching the design conversation. Two distinct mechanisms produce it.

**Registry-list priming.** Claude Code's available-skills system reminder surfaces the frontmatter `name` and `description` of every registered skill (i.e., every folder under `~/.claude/skills/`). The agent sees the description text whether it ever Reads the file or not. For `navigation/`, the description triggers on "what to do next" and "all the options" — exactly the kind of phrasing that comes up during replacement design. Even without a Read, the agent's reasoning carries the prior version's framing.

**Reflexive Read.** When the skill's name is mentioned in conversation, the agent reflexively reads `cognitive_harness/<skill>/SKILL.md` to understand the current spec. This is high-bandwidth contamination — the entire file content enters context, along with the prior version's specific design choices.

The two mechanisms operate at different layers. The first is a runtime-registry property; the second is a project-folder property. Mitigating one without the other leaves the design conversation exposed to the other.

### 2. The bi-folder action

Each experimental SKILL needs two operations, both required:

```bash
mv cognitive_harness/<skill> cognitive_harness/_archive/<skill>
rm -rf ~/.claude/skills/<skill>
```

The first removes the skill from the top-level project workspace. The second removes it from the runtime registry. Together they neutralize both vectors: the registered description disappears (the available-skills list no longer surfaces it), and the reflexive Read on the canonical path returns "no such file."

Non-SKILL artifacts — single markdown files not registered as skills — have no registry-list exposure and minimal reflexive-Read exposure. They can stay in place by default.

### 3. Three structural profiles, differentiated handling

The 6 experimental items partition into three structural profiles, each with different mechanism exposure:

**Active SKILL-shaped** — `navigation`, `meta-loop`. Currently being redesigned; recently edited (May 16). Full exposure on both vectors. Action: move + unregister. After the move, the slot `cognitive_harness/<skill>/` is empty — the user starts v2 design fresh there (or with a new name; both work).

**Dormant SKILL-shaped** — `comprehend`, `reflect`. Registered but not actively used or maintained (no edits since April 26). Full registry-list exposure, low reflexive-Read exposure. Action: move + unregister. Pure bookkeeping; no replacement design pending.

**Non-SKILL artifacts** — `contracts/alignment_control.md` (a single design markdown in a folder with no SKILL.md) and `next_question_to_ask.md` (a one-line personal scratchpad at the root). No SKILL.md → not registered → no registry-list exposure. Reflexive-Read risk is bounded (these are not cognitive disciplines that would be conflated with skills). Action: leave in place by default; move to `_archive/_misc/` later if they go stale.

A uniform treatment (archive everything) would over-treat the non-SKILL category, since the cost of moving exceeds the benefit when registry-list exposure isn't present. Differentiated handling matches the actual exposure.

### 4. The convention doc (`cognitive_harness/_archive/README.md`)

The mitigation needs a convention doc — not as the enforcement mechanism, but as the forward-applicable policy. The doc explains what goes in `_archive/`, the two-step move and inverse, and the agent-instruction. Future experimental skills follow the same pattern without re-deliberation per skill.

The folder name (`_archive/`) extends an existing internal precedent: `cognitive_harness/protocols/_archive/` already exists, containing one archived protocol file. Reusing the same word at top-level keeps one convention to remember rather than two.

The agent-instruction in the README is explicit: agents must not Read items under `_archive/` reflexively when the skill name is mentioned in conversation; must not invoke them via the Skill tool; must not use folder names under `_archive/` as inspiration for naming new artifacts. Agents MAY read items there when the user explicitly asks ("show me the archived navigation spec," "compare with the previous design"). When in doubt, ask.

The full README content (about 45 lines) is supplied verbatim in Next Actions below.

### 5. The `decompose` flag — why the inquiry can't decide for the user

While inventorying `cognitive_harness/`, the inquiry surfaced that the user-stated cannon set (7 skills) omits `decompose` — but `/MVL+`'s pipeline includes a Decomposition step that loads from `~/.claude/skills/decompose/`. So `decompose` is functionally cannon-by-runtime; archiving it would break `/MVL+`'s D step unless an alternate Decomposition spec is registered.

The inquiry's default recommendation: treat `cognitive_harness/decompose/` as cannon (the listing omission is most likely accidental). But the user might have a replacement Decomposition skill planned and intend to swap; the inquiry can't know without asking. This becomes the first Open Question below — the user adjudicates before any action on `decompose`.

The other 7 user-listed cannon skills were sanity-checked: each is either runtime-invoked by `/MVL` or `/MVL+`, or an active workflow component (the `protocols/` folder holds the procedures CONCLUDE / BRANCH_INQUIRY / etc.). No similar silent omission was detected elsewhere.

### 6. Two-tier enforcement

The convention has two enforcement tiers, both honest about their nature:

**Structural tier (load-bearing).** The bi-folder action itself. The registry-unregister removes the description from available-skills — the agent does not "see" unregistered skills in the system-reminder list. The folder move places the file at a path that's not the canonical top-level slot — reflexive Reads on the canonical name fail because the path doesn't exist.

**Behavioral tier (supplementary).** The agent-instruction in the README. This covers residual cases where the agent might proactively `Glob`, `Grep`, or `find` through `_archive/` on its own initiative — the structural tier doesn't address those. The behavioral tier is honor-based: it depends on the agent reading the README when it's conversation-relevant and following the instruction. Imperfect, but supplementary.

The load-bearing enforcement is the structural tier. The behavioral tier adds depth where the structural tier has gaps.

## Next Actions

### MUST

- **What:** Resolve the `decompose` cannon status before any archive actions. Use the wording in Open Question 1 below.
  - **Who:** the user (in the next conversation turn).
  - **Gate:** before executing any of the moves below.
  - **Why:** silently archiving `decompose` would break `/MVL+`'s Decomposition step; auto-deciding the other way could mask the user's actual intent.

- **What:** Move and unregister the four currently-confirmed experimental SKILLs, applying the bi-folder action.
  ```bash
  # Pre-move check (active SKILLs only): confirm no v2 work is mixed into
  # the folder. If unsure, run `git status` to see uncommitted changes;
  # stash or commit first to keep v2 work separate.

  # Active SKILLs:
  mv cognitive_harness/navigation cognitive_harness/_archive/navigation
  rm -rf ~/.claude/skills/navigation

  mv cognitive_harness/meta-loop cognitive_harness/_archive/meta-loop
  rm -rf ~/.claude/skills/meta-loop

  # Dormant SKILLs:
  mv cognitive_harness/comprehend cognitive_harness/_archive/comprehend
  rm -rf ~/.claude/skills/comprehend

  mv cognitive_harness/reflect cognitive_harness/_archive/reflect
  rm -rf ~/.claude/skills/reflect
  ```
  - **Who:** the user (or an agent the user authorizes).
  - **Gate:** after the `decompose` flag (above) is resolved.
  - **Why:** mitigates registry-list priming and reflexive Read for the four SKILLs; frees the active slots (`navigation/`, `meta-loop/`) for fresh replacement design.

- **What:** Create `cognitive_harness/_archive/README.md` with the convention content.
  - **Who:** the user (or an agent).
  - **Gate:** at the same time as the moves above (order doesn't matter once the `_archive/` folder exists).
  - **Why:** encodes the forward-looking convention; communicates the agent-instruction; explains promotion-back-to-cannon procedure.

  Paste verbatim into `cognitive_harness/_archive/README.md`:

  ```markdown
  # _archive/ — Non-cannon skills and artifacts

  This folder holds `cognitive_harness/` skills and single artifacts that
  are not currently part of the active cannon but are preserved for
  reference, comparison, or possible future restoration. The folder is
  named `_archive/` (not `_experimental/` or `_drafts/`) to compose with
  the existing `cognitive_harness/protocols/_archive/` convention.

  ## What goes here

  A skill or artifact lives here when one of the following holds:

  - The user has decided it is not currently cannon (the active set the
    project actively uses).
  - A replacement is being designed; the original is preserved here
    while the new version is authored fresh in the original top-level
    slot.
  - The skill or artifact is dormant — created earlier but no longer
    actively maintained.

  What does NOT go here: cannon skills, the convention itself (this
  file), project-level configuration, or actively-developed new skills.

  ## How to add a skill to _archive/

  Two-step move (both required for SKILL-shaped folders):

      mv cognitive_harness/<skill> cognitive_harness/_archive/<skill>
      rm -rf ~/.claude/skills/<skill>

  The first step removes the skill from the top-level project
  workspace; the second removes it from Claude Code's runtime skill
  registry so the agent does not surface its description in the
  available-skills list.

  For non-SKILL artifacts (single markdown files, etc.), the second
  step is skipped (they are not registered as skills). Place them under
  `_archive/_misc/<name>` or leave them where they are — judgment call.

  ## How to promote back to cannon

  Inverse of the above:

      mv cognitive_harness/_archive/<skill> cognitive_harness/<skill>
      cp -r cognitive_harness/<skill> ~/.claude/skills/<skill>

  ## Agent instruction

  When working inside this project, items under `_archive/` are dormant
  references. The agent must not:

  - Read `_archive/<skill>/SKILL.md` or its references reflexively when
    the skill name is mentioned in conversation.
  - Invoke any item under `_archive/` via the Skill tool, or treat them
    as available skills.
  - Use folder names under `_archive/` as inspiration for naming new
    artifacts — treat them as not-present unless explicitly requested.

  The agent MAY read items here when the user explicitly asks ("read
  the archived navigation spec," "show me the old version," "compare
  with the previous design"). When in doubt, ask.

  ## Forward-looking

  Future experimental skills follow this same pattern. When the user
  wants to preserve a prior version while designing the replacement,
  apply the two-step move above. The convention does not need to be
  re-deliberated per skill.
  ```

- **What:** Verify each archive operation succeeded.
  - **Who:** the user, via this bash function (one call per archived skill):
    ```bash
    verify_archive() {
      local skill="$1"
      local cog="cognitive_harness/_archive/$skill"
      local runtime="$HOME/.claude/skills/$skill"
      if [ -d "$cog" ] && [ ! -e "$runtime" ]; then
        echo "✓ $skill archived correctly"
        return 0
      else
        echo "✗ $skill archive incomplete:"
        [ ! -d "$cog" ] && echo "  - missing in _archive: $cog"
        [ -e "$runtime" ] && echo "  - still present in runtime: $runtime"
        return 1
      fi
    }

    # After running the moves:
    verify_archive navigation
    verify_archive meta-loop
    verify_archive comprehend
    verify_archive reflect
    ```
  - **Gate:** immediately after each archive operation.
  - **Why:** confirms both vectors mitigated; catches partial-move failures (folder moved but registry remove failed, or vice versa).

### COULD

- **What:** Save a `reverse_archive` function for future use (when an archived skill gets promoted back to cannon).
  ```bash
  reverse_archive() {
    local skill="$1"
    local archived="cognitive_harness/_archive/$skill"
    local cannon="cognitive_harness/$skill"
    local runtime="$HOME/.claude/skills/$skill"
    if [ ! -d "$archived" ]; then
      echo "✗ Not archived: $skill"
      return 1
    fi
    if [ -e "$cannon" ]; then
      echo "✗ Cannon slot occupied: $cannon (move or rename first)"
      return 1
    fi
    mv "$archived" "$cannon"
    cp -r "$cannon" "$runtime"
    echo "✓ $skill promoted from _archive/ back to cannon"
  }
  ```
  - **Who:** save to a project-local utility location (e.g., a `_utils.sh` in `_archive/`, or appended to the README's procedure section).
  - **Gate:** time-bound — within the next experimental→cannon promotion event.
  - **Why:** makes the promotion path explicit and testable; refuses to clobber an occupied cannon slot.

- **What:** If `contracts/alignment_control.md` or `next_question_to_ask.md` becomes stale (no edits for 30+ days; no references from active inquiries), move to `cognitive_harness/_archive/_misc/`.
  - **Who:** the user, opportunistically.
  - **Gate:** observable — when the artifact is no longer active.
  - **Why:** keeps `cognitive_harness/` root tidy without forcing premature archival.

### DEFERRED

- **What:** Decide whether to archive `contracts/alignment_control.md` and `next_question_to_ask.md` now.
  - **Gate:** condition-bound — revisit when either becomes stale, or when the user wants the `cognitive_harness/` root tidied.
  - **Why (if revived):** consistency with the convention; lower-priority since registry-list priming doesn't apply to non-SKILL items.

## Reasoning

### Why this approach over alternatives

The exploration phase enumerated 10 solution dimensions, ranging from in-place annotation (add `status: experimental` to frontmatter) to runtime unregistration to folder relocation to prefix renames. Each was evaluated against the dual-vector test: does it mitigate both registry-list priming and reflexive Read?

Single-mechanism solutions were killed:

- *In-place annotation alone* (frontmatter status field; top-of-file marker; sentinel file): the registry description is unchanged, so registry-list priming remains active. The honor-based marker doesn't disable the system-reminder mechanism.

- *Folder move alone*, without registry unregister: the file moves but the registered description persists; registry-list priming continues.

- *Registry unregister alone*, without folder move: the file is still readable at the original canonical path; reflexive Read continues.

- *Prefix-rename* (e.g., `_old_navigation/`): doesn't address the registry; high churn on every reference in memory entries and prior inquiries.

- *Sibling folder outside `cognitive_harness/`* (e.g., a top-level `archive/` directory): breaks the existing `cognitive_harness/protocols/_archive/` convention; introduces a second word to remember.

The compound (folder move + registry unregister + convention doc + per-profile differentiation + decompose-flag + verify/reverse procedure) was the only candidate that passed the dual-vector test while also respecting the existing precedent, preserving reversibility, and remaining substrate-honest. Substrate-honest here means the solution uses only mechanisms Claude Code actually has — no `.claudeignore`-style exclusion file (confirmed absent), no skill-discovery settings flag (none exposed by `~/.claude/settings.json`), no hooks-based exclusion.

### Why the active/dormant/non-SKILL split is necessary, not over-engineered

A uniform "archive everything" approach treats non-SKILL artifacts the same as SKILL-shaped folders. But non-SKILL artifacts have no `SKILL.md` → not registered → no registry-list priming. Moving these artifacts costs effort without mitigation benefit, since the load-bearing vector is absent. The dev-phase-appropriate response — low overhead, transition-friendly — is to leave them in place by default and move only if they go stale.

Differentiated treatment is the right amount of structure for the current project state. Fewer rules and the solution over-treats the non-SKILL category; more rules and the user pays a maintenance tax in the active dev phase.

### Why the decompose-flag is asked, not decided

The inquiry could have run `grep -r "decompose"` across cannon files and concluded "decompose is invoked → keep as cannon." Sensemaking actually did exactly that. But the question isn't only "is it used?" — it's also "do you have a replacement Decomposition skill planned?" The user might intend to swap the registered decompose for a new spec. Auto-deciding either way risks the wrong call. The asymmetric cost (asking takes 30 seconds; auto-archiving could break `/MVL+`; auto-keeping could mask a deliberate user intent) makes the user-flag the correct choice.

### Why the convention doc earns 45 lines

A bare procedure (just the bash commands) would suffice for one-shot cleanup of current state. But the user's pain is recurring — "every time i try to develop what should replace it" — so the convention needs to be forward-applicable to future experimental skills. Future-applicability requires policy (what goes in, what stays out), procedure (how to add/remove), and agent-instruction (what the agent should and shouldn't do). 45 lines is the shortest length that covers all three without elision; a shorter doc would leave gaps, a longer doc would add ceremony for no marginal benefit.

## Open Questions

### Blocked

**OQ-1 — `decompose` cannon status (please confirm before any archive action).**

You listed 7 cannon skills (`explore`, `innovate`, `MVL`, `MVL+`, `protocols`, `sense-making`, `td-critique`). `decompose` was not on the list. However, `/MVL+`'s pipeline (E → S → **D** → I → C) invokes the Decomposition discipline, which loads from `~/.claude/skills/decompose/`. So `decompose` is functionally cannon-by-runtime.

Default recommendation: treat `cognitive_harness/decompose/` as cannon (leave in place; do not archive). The listing omission was most likely accidental.

Override: if you want `decompose` to be truly experimental — e.g., you have a replacement Decomposition skill planned — confirm and we'll archive both `cognitive_harness/decompose/` AND `~/.claude/skills/decompose/`. Note that after archiving, `/MVL+`'s D step would break unless an alternate Decomposition spec is registered as `decompose` in the runtime registry.

Confirm one:
- keep `decompose` as cannon (default — no action needed)
- archive `decompose` (and accept the `/MVL+` consequence; please specify how you want the D step to continue working)
- other (please specify)

This is BLOCKED — no archive actions should run until you respond.

### Refinement Triggers

**OQ-2 — Convention re-evaluation if Claude Code adds auto-sync.**

The convention assumes the bi-folder split (`cognitive_harness/` source-of-truth + `~/.claude/skills/` runtime registry) requires manual sync. If a future Claude Code release adds automated sync that copies `cognitive_harness/<name>/` to `~/.claude/skills/<name>/`, the registry unregister gets reverted on the next sync — and the convention loses its registry-list priming mitigation.

Refinement trigger: condition-bound — re-open the convention if Claude Code introduces such auto-sync. Likely adaptations: add a sync-exclusion mechanism if Claude Code provides one; relocate `_archive/` to a path the sync wouldn't reach; or accept the residual exposure and rely on the behavioral-tier agent-instruction alone.

**OQ-3 — Behavioral-tier enforcement imperfection (acknowledged residual).**

The README's agent-instruction is honor-based. Agents are stochastic; compliance is high when the README is in conversation context but not structurally guaranteed. This is the known residual after the structural tier (the bi-folder action) carries the load-bearing enforcement.

No specific refinement trigger; this is the dev-phase-appropriate position. Tighter enforcement (e.g., a hook that blocks Reads into `_archive/`) would require tooling Claude Code doesn't currently expose. Re-open if such tooling becomes available.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
/MVL+

under /Users/ns/Desktop/projects/native/cognitive_harness (it is a renamed folder of homegrown)

we have

cannon skills

explore innovate MVL mvl+  Protocols sensemaking td-critique

others are just experiments, they might be useful or not,

but main thing is this

since we have /Users/ns/Desktop/projects/native/cognitive_harness/navigation and everytime i try to develop what should replace it, already existing one being read into context and it does context blur

how to prevent such things? i dont want to remove them , placing them another folder is possible too, or adding some note to the skill md files maybe. i am not sure
```

</details>
