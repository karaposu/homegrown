---
status: active
model: claude-opus-4-7[1m]
effort: high
---
# Finding: Rename td-critique

## Question

The user asked: what should we rename the `td-critique` discipline to? `td-critique` is one of the cognitive disciplines in `cognitive_harness/` — the project's source-of-truth folder for the cognitive harness. It performs the C (Critique) step of the cognitive loops `/MVL` (classic Sensemaking → Innovation → Critique) and `/MVL+` (extended Exploration → Sensemaking → Decomposition → Innovation → Critique). Two unsatisfactory features of the current name surfaced during exploration:

- The `td-` prefix has no documented rationale. A grep across `cognitive_harness/` and `docs/` returns only literal usages; the design-history folder (`docs/discipline_design_history/`) does not contain a file for this discipline. The prefix appears to be an undocumented residue from an earlier point in the project's history.
- The word "critique" itself carries baggage. The discipline's canonical reference (`cognitive_harness/td-critique/references/td-critique.md`) spends explicit prose distancing itself from five common readings of the word: *nitpicking, judgment, validation, reviewing, pessimism*. The spec has to do this work because the everyday meaning of "critique" pulls toward those readings, while the discipline performs something more specific (adversarial evaluation with verdict rendering).

The goal: a new name (or a short ranked list of finalists with reasoning) that the user can adjudicate, leading to a project-wide rename across the discipline folder, the runtime registry copy, the runtime spec references in cannon discipline files, and theory documentation. The framework was set at the meaning layer (the question is about what the discipline IS as a cognitive operation; structural and process layers — the spec's sections and procedural steps — are out of scope for this rename).

## Finding Summary

- **Recommended primary: `adjudicate`.** Its legal etymology (judge weighing arguments, prosecution presenting case, defense responding, verdict rendered) matches the discipline's mechanism verbatim. The Structural Critique spec is literally legal-procedure-shaped — it has Prosecution (strongest case against), Defense (strongest case for), Collision (verdict from the confrontation), and three verdict types (SURVIVE / REFINE / KILL). Calling the operation "adjudication" is honest description, not stylistic choice.

- **Two conditional alternatives are surfaced for user adjudication.** `vet` is the daily-language pick — short, common in evaluation contexts, less formal than adjudicate — but loses some operation-fit precision at the name level (a reader of "vet" may not infer "produces verdicts with adversarial reasoning"). `critique` (drop only the `td-` prefix) is the minimum-migration pick — preserves the existing 266 textual references that already use "critique" — but the spec's 5-item NOT-list of rejected readings remains in force, so the word's baggage persists. The user picks based on which criterion they weight highest: operation-fit (adjudicate), daily-language (vet), or migration-cost (critique-no-prefix).

- **`weigh` is an honorable mention** that emerged via Domain-Transfer during Innovation. It captures the multi-dimensional weighing aspect of the fitness landscape (scales-of-justice imagery) but lacks the verdict-rendering precision of adjudicate. Useful as a third alternative for users who find adjudicate too formal but vet too narrow.

- **`assess` and `sift` are dominated** and not recommended. Both score PARTIAL on operation-fit at the name level, like vet and weigh, but with weaker compensating strengths. `assess` is too generic (every discipline assesses something); `sift` captures only the contraction aspect with no verdict-rendering hook.

- **The bare-verb form is the modal sibling pattern.** Of the cognitive disciplines in `cognitive_harness/` (explore, innovate, decompose, sense-making), three use bare verbs and one (sense-making) is a hyphenated compound — justified by being a known cognitive-science term. The new name should be a bare verb unless a candidate has equivalent justification to deviate. All four of adjudicate, vet, critique-no-prefix, and weigh satisfy this.

- **Several candidates were disqualified before the finalists were ranked.** `evaluate` collides with the spec's "Evaluation" secondary-operation name (the discipline already has two named operations: Extraction and Evaluation). `validate`, `verify`, `review`, and `judge` are explicitly rejected by the spec's NOT-list. Any `td-X` prefix form lacks documented rationale.

- **The migration is bounded.** Approximately 20 active files need updates: the discipline's folder (in both `cognitive_harness/` and the runtime registry `~/.claude/skills/`), 5 cannon-loop spec files that reference `/td-critique` in their pipeline (`MVL`, `MVL+`, `sense-making`, `innovate`, `decompose`), about 10-15 theory files under `docs/`, and the project's two root README files (`README.md`, `README2.md`). Approximately 230 prior inquiry artifacts under `devdocs/inquiries/` are historical record and should NOT be retroactively edited — preserving the audit trail.

## Finding

The user has been iterating on `cognitive_harness/` — formerly named `homegrown/`. The folder is the source-of-truth for cognitive disciplines, the runtime registry at `~/.claude/skills/` is what Claude Code actually loads. One discipline in the cannon is named `td-critique`, performing the Critique step in the cognitive loops. The user asked what to rename it to.

### 1. Why the current name is unsatisfactory

The current name has two problems, each independently load-bearing.

The `td-` prefix is undocumented. A direct grep across the project for any rationale returns only literal usages. The folder `docs/discipline_design_history/` exists and holds institutional-memory files for cognitive disciplines (currently only `for_explore.md`), but no `for_td-critique.md` exists. Speculative interpretations of "td" are possible — "Thinking Discipline," "Top-Down," "Thought Discipline" — but none is recorded anywhere. The prefix is residue.

The word "critique" itself does negative semantic work in the spec. The canonical reference spends five explicit distancing-statements:

- *Not nitpicking* — "nitpicking finds surface flaws without assessing whether they matter; critique evaluates across weighted dimensions with severity awareness"
- *Not judgment* — "judgment is a single verdict from a single perspective; critique is structured adversarial testing across multiple dimensions"
- *Not validation* — "validation confirms something works; critique determines whether something is the *right* thing, not just a *working* thing"
- *Not reviewing* — "reviewing checks for errors; critique constructs the fitness landscape that reveals viability"
- *Not pessimism* — "critique includes defense, not just prosecution — it finds what's strong, not only what's weak"

This is structural evidence that the everyday-English meaning of "critique" pulls toward readings the discipline rejects. A name that aligned directly with the discipline's mechanism (adversarial evaluation + verdict rendering) would let the spec spend that prose on what the discipline IS rather than on what it isn't.

### 2. Why `adjudicate` is the recommended primary

`Adjudicate` is the legal-etymology verb. A judge presides over a proceeding in which prosecution presents the strongest case against, defense presents the strongest case for, the arguments collide, and a verdict is rendered. The verdict carries reasoning: which dimensions the candidate passes, which it fails, why the defense survives or the prosecution wins.

This is what the Structural Critique discipline does, structurally. The discipline's canonical reference defines its adversarial structure as "Prosecution + Defense + Collision" with explicit verdicts (SURVIVE / REFINE / KILL). The reference even uses legal language explicitly — "burden of proof shifts based on stakes." The legal etymology of `adjudicate` isn't poetic license; it's structural alignment.

The bare-verb form matches the modal sibling pattern (the disciplines `explore`, `innovate`, `decompose` all use bare verbs; `sense-making` is hyphenated but justified by being a known cognitive-science compound). It avoids the NOT-list baggage. It doesn't collide with any spec-internal term (the spec doesn't use "adjudicate" or its variants).

One tension is real: `adjudicate` carries a formal/legal connotation that may feel heavier than the daily-discipline tone of `explore` or `innovate`. The defense, on adversarial testing, holds: the discipline IS formal — it produces structured verdicts with explicit prosecution and defense — and the name being formal reflects that honestly. But the user may prefer a name that feels more conversational, which is why two alternatives are surfaced.

### 3. Why `vet` is the daily-language alternative

`Vet` is short, active, common in evaluation contexts. "Vet the candidates" reads naturally; new users guess what the discipline does from the name alone faster than from `adjudicate`.

The trade-off is operation-fit precision at the name level. "Vet" carries an associative pull toward background-checks, hiring qualifications, and security clearance — fitness-testing more than verdict-rendering. A reader of "vet the candidates" may not infer that the discipline produces a verdict spread (SURVIVE / REFINE / KILL) with reasoning attached, nor that it has an adversarial prosecution-defense structure. The spec body has to do that work; the name doesn't help.

`Vet` is the right pick when the user weights daily-language and intelligibility-for-new-users higher than operation-fit precision at the name level — and is comfortable letting the spec body carry the verdict-rendering nuance.

### 4. Why `critique` (drop only the prefix) is the minimum-migration alternative

This option preserves the word "critique" but removes the undocumented `td-` prefix. The rename touches the fewest files. About 230 prior inquiry artifacts under `devdocs/inquiries/` already use the string "critique" in their content; only the `td-` prefix bearing references would need updating, plus the folder name and runtime registry directory.

The trade-off is the persistent baggage. The spec's five distancing-statements remain in force regardless of the prefix; the word still does negative work. The marginal cost of "critique" going forward is zero (the spec is already written with the distancing) but the opportunity cost — vs `adjudicate`'s operation-fit improvement — is real.

This is the right pick when the user weights migration cost above operation-fit gains and accepts the spec's existing distancing work as a permanent tax. It's also the safest pick if the user wants to defer the broader naming question and just remove the prefix without taking a stronger position.

### 5. Why other candidates were not recommended

Several candidates dropped out before or during the finalist ranking:

- `evaluate` collides with the spec's "Evaluation" secondary-operation name. The discipline has two named operations: Extraction (build evaluation framework from sensemaking) and Evaluation (apply framework to innovation candidates). Using "evaluate" as the discipline name conflates the whole with one of its parts. Structural-level collision.
- `validate` and `verify` are explicitly rejected by the spec's NOT-list ("Critique is NOT validation").
- `review` is explicitly rejected by the spec's NOT-list ("Critique is NOT reviewing").
- `judge` carries personal-judgment baggage; the spec's NOT-list rejects "judgment" as a reading.
- Hyphenated compound forms (`adversarial-evaluation`, `fitness-mapping`) lack the sense-making-level justification needed to deviate from bare-verb form.
- Pure-noun forms (`verdict`, `evaluation`) are wrong shape for the cannon discipline pattern.
- `weigh` is the honorable mention — emerged during Innovation via Domain-Transfer from the scales-of-justice imagery. It captures multi-dimensional weighing on the fitness landscape (a real spec property). But it loses to `adjudicate` on operation-fit (weighing is a sub-step of adjudication) and to `vet` on daily-language commonality. Worth considering if the user wants something more evocative than `vet` but less formal than `adjudicate`.
- `assess` and `sift` are tertiary candidates that scored PARTIAL on operation-fit with weaker compensating strengths than `vet` and `weigh`. `assess` is too generic — every discipline assesses something — and carries no discipline-specific identity-information. `sift` captures contraction (one aspect of the discipline) but misses the verdict-rendering and adversarial structure aspects.

### 6. The migration plan

After the user picks a name (let it be `<new>`), the rename is bounded and reversible. The migration is tiered by criticality:

**Tier 1 — folder and registry (must update):**
- `cognitive_harness/td-critique/` renamed to `cognitive_harness/<new>/`
- Internal reference file: `cognitive_harness/<new>/references/td-critique.md` renamed to `cognitive_harness/<new>/references/<new>.md`
- Runtime registry: `~/.claude/skills/td-critique/` renamed to `~/.claude/skills/<new>/`
- Same reference rename inside the runtime registry if present

**Tier 2 — cannon-loop spec references (must update for the discipline pipeline to work):**
- `cognitive_harness/MVL/SKILL.md`
- `cognitive_harness/MVL+/SKILL.md`
- `cognitive_harness/sense-making/SKILL.md`
- `cognitive_harness/innovate/SKILL.md`
- `cognitive_harness/decompose/SKILL.md`
- Plus internal cross-references inside `cognitive_harness/<new>/SKILL.md` and `cognitive_harness/<new>/references/<new>.md`

**Tier 3 — theory documentation and project READMEs (should update for coherence):**
- 11 files under `docs/`: `stability_preservation_via_git.md`, `thinking_space_dynamics.md`, `intuit.md`, `discipline_taxonomy.md`, `discipline_rule_placement.md`, `self_improvement_rate.md`, `step_refinement.md`, `loop_desing_ideas/loop_design_1.md` and `loop_design_3.md`, `runtime_environment/folder_based.md`, `what_is_meaningful_traversal.md`
- Project root READMEs: `README.md` and `README2.md` (each contains one reference to `td-critique`; this was flagged during the critique phase as a spec-gap that the migration plan must include)

**Tier 4 — frozen inquiry artifacts (do NOT update):**
- All files under `devdocs/inquiries/` (~230 files). These are historical record. Renaming them retroactively would blur the audit trail showing `td-critique` was the discipline's name at the time those inquiries ran. The historical references stay as-is; future inquiries will use the new name from then onward.

The procedure is parameterized on the user's choice — the migration commands below assume `NEW=adjudicate`; substitute as needed.

## Next Actions

### MUST

- **What:** Confirm the chosen name. Pick one of: `adjudicate` (recommended primary), `vet` (daily-language pick), `critique` (drop-prefix-only / minimum-migration pick), `weigh` (honorable mention), or specify another candidate. (See Open Questions below for the explicit decision question.)
  - **Who:** the user (in the next conversation turn).
  - **Gate:** before any rename action.
  - **Why:** the entire migration plan parameterizes on this choice; running commands before the decision risks producing files with placeholder names.

- **What:** Execute the rename across Tier 1 and Tier 2 file sets, using the chosen name as the value of `NEW`.
  ```bash
  NEW=adjudicate     # substitute per user choice

  # Pre-rename safety commit (so the rename is git-revertable)
  git add -A && git commit -m "pre-rename: td-critique"

  # Tier 1: folder + registry
  mv cognitive_harness/td-critique cognitive_harness/$NEW
  mv cognitive_harness/$NEW/references/td-critique.md cognitive_harness/$NEW/references/$NEW.md
  mv ~/.claude/skills/td-critique ~/.claude/skills/$NEW
  if [ -f ~/.claude/skills/$NEW/references/td-critique.md ]; then
    mv ~/.claude/skills/$NEW/references/td-critique.md ~/.claude/skills/$NEW/references/$NEW.md
  fi

  # Tier 2: cannon-loop spec references
  find cognitive_harness/MVL cognitive_harness/MVL+ cognitive_harness/sense-making \
       cognitive_harness/innovate cognitive_harness/decompose cognitive_harness/$NEW \
       -type f -name "*.md" \
       -exec sed -i '' "s|td-critique|$NEW|g" {} \;
  ```
  - **Who:** the user (or an agent the user authorizes).
  - **Gate:** after the user confirms the chosen name.
  - **Why:** updates the cannon-loop integrity (Tier 1) and the spec references that invoke `/td-critique` (Tier 2). Until this completes, /MVL+'s C step would still call the old name.

- **What:** Execute Tier 3 updates (theory documentation + project READMEs).
  ```bash
  NEW=adjudicate    # same as above

  find docs -type f -name "*.md" \
       -exec sed -i '' "s|td-critique|$NEW|g" {} \;

  sed -i '' "s|td-critique|$NEW|g" README.md README2.md

  # Verify frontmatter `name:` field updates picked up
  grep -r "^name:" cognitive_harness/$NEW ~/.claude/skills/$NEW

  # Commit
  git add -A && git commit -m "rename: td-critique -> $NEW"
  ```
  - **Who:** the user.
  - **Gate:** after Tier 1 + Tier 2.
  - **Why:** keeps the project's theory documentation and surface-facing READMEs coherent with the cannon. Optional in the sense that the cannon works without these updates, but inconsistency between cannon and docs accumulates confusion.

### COULD

- **What:** Verify the rename across the runtime registry by invoking `/<new>` in a fresh session.
  - **Who:** the user.
  - **Gate:** after the migration commits.
  - **Why:** confirms Claude Code's skill discovery picks up the new name; if the invocation fails, the registry rename was incomplete.

### DEFERRED

- **What:** Update prior inquiry artifacts under `devdocs/inquiries/` (Tier 4).
  - **Gate:** observable — only revisit if a future agent gets confused by the historical references; default is leave alone.
  - **Why (if revived):** consistency. But the default is to preserve the audit trail. The historical references show the discipline's name at the time of each inquiry; that's an honest record.

## Reasoning

### Why this approach over alternatives

The exploration phase enumerated about 20 candidate names across six dimensions (bare-verb, compound, noun-form, prefixed, per-domain analogue, operation-named). Each was tested against six criteria: operation-fit (CRITICAL), bare-verb form (HIGH), baggage-avoidance (HIGH), intelligibility (MEDIUM), no-collision with spec-internal terms (HIGH), migration cost (LOW). Critique added three project-specific risk dimensions: user-language alignment, cross-discipline coherence, decidability of the recommendation.

Several candidates were killed before reaching the finalist set:

- **`evaluate`** failed on no-collision: the spec's secondary-operation is named "Evaluation" (the discipline performs Extraction + Evaluation). Using `evaluate` as the discipline name conflates the whole with one of its parts.
- **`validate`, `verify`** failed on baggage-avoidance: the spec's NOT-list explicitly rejects "validation" as a reading ("Critique is NOT validation").
- **`review`** failed on baggage-avoidance: same NOT-list ("Critique is NOT reviewing").
- **`judge`** failed on baggage-avoidance: the NOT-list rejects "judgment" as a single-perspective reading.
- **Any `td-X` prefix form** failed on cross-discipline coherence: the prefix has no documented rationale and is the only prefixed form among cannon disciplines (an outlier).
- **Hyphenated compounds** (e.g., `adversarial-evaluation`, `fitness-mapping`) failed on bare-verb form: the modal sibling pattern is bare verb; `sense-making` is the single justified exception, but its justification (being a known cognitive-science compound term) doesn't transfer to coined compounds.

Among finalists, the four that survived adversarial testing each occupy a different region of the criterion space:

- `adjudicate` passes operation-fit cleanly because the discipline IS legal-procedure-shaped. The one PARTIAL (intelligibility, due to formal connotation) is preference-territory, not structural failure.
- `vet` and `weigh` score PARTIAL on operation-fit at the name level but compensate on intelligibility and user-language. They're conditional survivors: right pick under specific user-priority weightings.
- `critique` (drop-prefix-only) is the status-quo with persistent baggage. It survives only because the migration-cost trade-off is real. The Status-Quo-Bias check in Sensemaking was rigorous: replacing the word is justified on structural grounds (the NOT-list is permanent evidence), but the user is allowed to weight migration cost higher if they choose.

### Why a ranked list rather than a single recommendation

The user's question — "what should we rename it to?" — admits either a single answer or a ranked-list answer. A single answer would impose the inquiry's weighting on the user; a ranked list respects the user's judgment about which criterion they weight most.

That said, the recommendation packet clearly designates `adjudicate` as the primary. A user who wants single-pick can pick the primary without further deliberation. A user who wants to weigh trade-offs gets the alternatives plus the "right pick when..." condition for each.

### Sources of confidence

The recommendation rests on four converging mechanisms during Innovation:

- **Domain-Transfer** from legal vocabulary points to `adjudicate` because the spec's adversarial structure (prosecution + defense + collision + verdict) is legal-procedure-shaped.
- **Combination** of operation-fit + bare-verb form + baggage-avoidance + no-collision constraints points to `adjudicate` as the unique candidate that satisfies all four cleanly.
- **Lens-Shifting** asks: under what conditions does each finalist become the obvious right pick? Adjudicate becomes right when operation-fit is dominant — which is the Sensemaking-committed weighting.
- **Inversion** asks: what would be the OPPOSITE of the right name? Answer: a name that affirms (approve, accept, praise, endorse) — which clarifies that the right name must evoke adversarial structure, which `adjudicate` does directly and `critique` only partially.

These four mechanisms converging on the same primary candidate is the convergence signal Innovation watches for.

## Open Questions

### Blocked

**OQ-1 — Which name do you commit to? (please confirm before migration)**

The inquiry recommends:

- **Primary: `adjudicate`** — best operation-fit; accepts formal/legal connotation as identity alignment.
- **Alt-1: `vet`** — daily-language pick; accepts partial operation-fit at name level.
- **Alt-2: `critique`** (drop prefix only) — minimum-migration pick; accepts the spec's NOT-list baggage as permanent tax.
- **Honorable mention: `weigh`** — multi-dimensional weighing imagery; less formal than adjudicate but less daily than vet.

Confirm one:
- [ ] `adjudicate` (primary recommendation)
- [ ] `vet`
- [ ] `critique` (drop prefix only)
- [ ] `weigh`
- [ ] Other (please specify; we can evaluate the new candidate against the same six criteria if needed)

This is BLOCKED — no migration actions should run until you respond.

### Refinement Triggers

**OQ-2 — Convention re-evaluation if Claude Code adds discipline-naming structure.**

If a future Claude Code release introduces a project-wide discipline-naming convention (e.g., a settings field declaring which folder is the cognitive-discipline root, or a registry-side tag for discipline kind), the rename may need re-evaluation in light of the new mechanism. Refinement trigger: condition-bound — re-open when such a mechanism is introduced.

### Research Frontiers

**OQ-3 — Cannon discipline name consistency audit (out of scope for this inquiry).**

This inquiry was specific-scope: rename `td-critique` only. The adjacent question — should the cannon discipline names be audited for consistency project-wide? — was deferred. If the user wants this addressed, it would be a separate inquiry. Relevant findings from this inquiry that may inform such an audit:

- The bare-verb form is the modal pattern (3 of 5 disciplines: explore, innovate, decompose).
- `sense-making` is the one justified exception (hyphenated cognitive-science compound term).
- No other discipline has an undocumented prefix problem.

### Side observation (not blocking)

The auto-memory entry "Discipline design-history location" still references `enes/discipline_design_history/`, but the folder has been renamed to `docs/discipline_design_history/`. Stale reference; will mislead future agents looking for design-history files. Suggested update when convenient:

```
- [Discipline design-history location](project_discipline_design_history_location.md) — discipline institutional memory lives at `docs/discipline_design_history/for_<discipline>.md`, not co-located with the runtime spec.
```

This is independent of the rename inquiry — surfaced here because it was observed during exploration.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
/MVL+


what should we rename td-critique to ?
```

</details>
