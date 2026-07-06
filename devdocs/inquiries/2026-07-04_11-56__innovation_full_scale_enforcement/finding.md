---
status: active
model: claude-fable-5
effort: max
---
# Finding: Innovation Full-Scale Enforcement — Four Texts, One Standard, a Ledger with Teeth

## Question

From `_branch.md`: *"What can we add to innovation as a prompt to make sure it always runs at full scale?"* — prompted by the measured admission that this week's innovation runs fired 5–6 of 7 mechanisms (never the 3-variations-per-mechanism grid; June's runs didn't either).

## Finding Summary

- **The under-running had four causes, all verified at the letter:** the spec states THREE different coverage standards (the skill command file demands the 7×3 grid then softens itself with "aim for full coverage"; the reference never mentions the grid and conditions all-seven on "high-stakes"); invocation arguments could quietly narrow a run's deliverable with nothing forbidding it; the structural checker script the pipeline references **does not exist anywhere in the repo**; and soft words ("aim," "for high-stakes") let every run self-select the floor.

- **The fix is four short texts, not one:** T1 — one reconciled coverage standard, word-identical in both spec files ("Every run fires all seven mechanisms; no exception the run can grant itself"); T2 — the boundary rule (invocation args may narrow the SEED, never the COVERAGE); T3 — a required **Mechanism Coverage Ledger** (seven accountable rows; every skip must quote the user's own words from this run's raw input); T4 — a FLAG telemetry condition (fewer than 7 fired without user words → the run's verdict is FLAG, never PROCEED).

- **The central design move: the floor is TESTED, not SURVIVING.** Every mechanism must fire and its output must enter the 5-test cycle — but a variation killed at its first test is honest recorded work (two lines), not filler. This is what makes "always all seven" affordable and disarms the mechanism-theater objection (forced grids breeding fake variations).

- **The 3-variation depth (generic/focused/contrarian) applies at the run's CORE** — the seed itself in idea-mode; every meta-decision piece in piece-mode. The literal 7×3-everywhere remains available as a one-line toggle, priced honestly (~300–450 lines per run).

- **This run demonstrated its own proposal:** its innovation stage fired all seven mechanisms, recorded 4 kills + 1 refinement in its own ledger, ran 3 variations at the core piece — and measured **101 lines**, cheaper than the 150–220 estimate. Full scale costs less than feared when kills are cheap to record.

- **Honesty clause (carried verbatim from critique):** the enforcement makes under-running LOUD (an absent row, a quoteless skip, a `Coverage: 5/7` header are glanceable) and lying EFFORTFUL-and-attributable — it cannot make lying impossible; no text layer can. "Make sure" is delivered as structurally-assured visibility, plus an optional ~30-line checker script for mechanical gating.

## Finding

### 1. Why it under-ran (the diagnosis)

The innovate skill lives in two files: `~/.claude/skills/innovate/SKILL.md` (the command layer) and `references/innovate.md` (the discipline spec). Read at the letter, they disagree with each other and with themselves:

- SKILL.md instruction 2 commands the full grid — *"producing variations across all seven mechanisms. For each mechanism produce three variations: one generic, one focused, one contrarian"* — and then softens it in the same paragraph: *"Apply minimum coverage (at least one Generator + one Framer) at minimum; **aim** for full coverage."* A command and its escape hatch, one sentence apart.
- The reference never mentions the three-variation grid at all (zero matching content), and its own coverage rule is conditional: *"Systematic coverage: For **high-stakes** innovation, apply all seven."* Who judges high-stakes? The same session that wants to finish early.
- Nothing forbade invocation arguments from narrowing a run. This week's runs were briefed by the pipeline runner with "Production-task mode: generate the finding-ready content (a)–(e)…" — a legitimate spec mode (it has its own machinery), but the brief effectively selected the minimum coverage, and no rule said it couldn't.
- The mechanical gate never existed: `tools/structural_check.sh`, which the traverse pipeline calls at every step, is absent from the repo entirely. Every "structural check" ever recorded was manual self-attestation.

Aim-language, a stakes-conditional, an unguarded invocation boundary, and no checker: four leaks, and the visible telemetry ("Generators: 3/4") changed nothing for two months — visibility without a floor did not bind.

### 2. The standard (what "full scale" now means)

**All seven mechanisms fire on every run — unconditionally.** Each produces at least one variation that **enters the 5-test cycle**: tested, not necessarily kept. A variation generated, tested, and killed at its first test is recorded work — two honest lines — never omitted work. The three-variation set (generic / focused / contrarian) is required at the run's core: the seed itself in idea-mode, every meta-decision piece in Production-task mode. Coverage below seven exists only when the user's own raw input asks for it, quoted verbatim.

The tested-not-surviving floor is what reconciles "always" with honesty: mandating *firing* is cheap; mandating *survivors* is what would breed filler. A mechanism with nothing to say costs two lines saying so.

### 3. The four texts (ready to paste; critique-refined)

**T1 — the coverage standard** *(replaces SKILL.md instruction 2's coverage sentences AND the reference's "Minimum coverage / Systematic coverage" passage — identical wording in both):*

> **Coverage standard (full scale, always):** Every run fires all seven mechanisms; no exception the run can grant itself. Each mechanism produces at least one variation that enters the 5-test cycle — *tested, not necessarily kept*: a variation generated, tested, and killed at its first test is recorded work (two lines in the ledger), never omitted work. The spread is the point — kills are recorded, not hidden. At the run's core — the seed itself in idea-mode; every meta-decision piece in Production-task mode — produce the full three-variation set (one **generic**, one **focused**, one **contrarian**) before testing. Coverage below seven fired exists only when the user's own raw input asks for it, and the ledger quotes those words verbatim. The per-seed minimum (1 Generator + 1 Framer) remains defined as the Coverage Strategy's floor-concept that methodology-modes reference; invoking a below-full mode (e.g., Minimum-mechanism) is itself a user-words event under this standard — the ledger quotes the user's invocation. <!-- TOGGLE: to require the three-variation set at ALL pieces/mechanisms (the literal 7×3 grid, ~300–450 lines/run), replace "At the run's core …" with "For every mechanism, produce the full three-variation set before testing." -->

**T2 — the boundary rule** *(a new numbered instruction in SKILL.md — it binds every runner, not just traverse):*

> **Invocation args may narrow the SEED, never the COVERAGE.** Additional instructions can shape what innovation works on — the seed, the piece-list, mandated extra attention (e.g., "Inversion is mandatory at piece X") — but no argument, mode-name, or brief reduces the coverage standard above. "Production-task mode" selects the piece-list seed-shape; it does not select a smaller method. If args conflict with this standard, the standard wins: the run fires all seven and notes the conflict in the ledger.

*Plus one reinforcement line in the traverse runner's innovate invocation step:* "Compose innovate's args to define the seed/pieces only — never the coverage; the skill runs full scale regardless of the brief."

**T3 — the Mechanism Coverage Ledger** *(lands inside the reference's existing telemetry section; named in SKILL.md's output expectations):*

> **Mechanism Coverage Ledger (REQUIRED, every run).** The telemetry opens with the ledger: a seven-row table, one row per mechanism, each row 1–2 lines:
> `| mechanism | FIRED / SKIPPED | variation(s) + test disposition | pointer |`
> FIRED rows name each variation with its 5-test disposition (survived / refined / killed-at-<test>) and point to where the content lives. SKIPPED rows are legal ONLY with the user's own words from THIS run's raw input, quoted verbatim (`skipped per user: "<verbatim>"`). The header line reads `Coverage: <n>/7 FIRED` — greppable assurance. In Production-task mode the ledger aggregates the existing per-piece mechanism log. Practice: write the seven-row scaffold at Phase-2 start and fill it as mechanisms fire — the empty row is the reminder.

**T4 — the FLAG teeth** *(appended to the reference's telemetry FLAG conditions, mirroring the wording of the existing Production-task FLAG):*

> **FLAG condition (coverage).** If the ledger shows fewer than 7 FIRED and any SKIPPED row lacks quoted user words, the overall telemetry verdict is FLAG (not PROCEED), regardless of the quality of what did run. An empty, generic, or paraphrased skip-quote is a defect — the quote is verbatim or the row is a violation.

**The checker** *(optional, routed):* a ~30-line bash script — the first mode of the never-built `tools/structural_check.sh` — asserting: ledger present; exactly 7 mechanism rows; every row FIRED or SKIPPED; every SKIPPED row contains a quote; the `Coverage: N/7` header matches the FIRED count; exit non-zero on failure so the traverse pipeline's fix-loop finally has something to react to. The script takes the discipline as an argument, so innovation's mode is the first, not the only.

### 4. Why this closes the actual leak

Critique replayed this week's real invocation text against T1+T2: the brief's piece-list is seed-shape (allowed); its mandated Inversion is extra attention (allowed); and since T1 makes coverage unconditional and T2 makes it brief-independent, the run fires all seven **regardless of what any brief omits**. The leak dies not by classifying briefs but by making coverage independent of them.

The compatibility question was also caught and fixed: three places in the reference cite "the Coverage Strategy's per-seed minimum," and one legitimate methodology-mode (Minimum-mechanism) is defined by it — so T1 *redefines the minimum's role* (a floor-concept that modes reference; invoking such a mode is itself a user-words event) rather than deleting it, and every cross-reference survives.

### 5. What this cannot do (the honesty clause)

A session could still write `FIRED` over a fabricated two-line disposition. The ledger makes that lie effortful and attributable (the disposition must point at artifact content a spot-read can catch), the checker makes the *structure* non-optional, and the FLAG makes under-running impossible to miss — but no text can make dishonesty impossible. What you get for "make sure": under-running becomes loud, skips become yours alone to grant, and the honest path becomes cheaper than the dishonest one.

## Inherited Commitments Re-test

- **Commitment:** the four leaks as diagnosed (three-texts disagreement; invocation-narrowing; no checker; soft language).
  - **Source:** this conversation's inspection + surfacing's letter-reads of both spec files.
  - **Re-test status:** RE-TESTED — commitment confirmed. Every leak carries a line-anchored quote; the checker's absence verified by filesystem search (`tools/` absent entirely).

- **Commitment:** Production-task mode's legitimacy and machinery (per-piece Inversion compliance, overrides, per-piece logs, its own FLAG).
  - **Source:** `references/innovate.md` (the Production-task refinement notes and telemetry sections).
  - **Re-test status:** RE-TESTED — commitment confirmed but frame revised. The mode is legitimate AND was never a license for floor-coverage (its own text: "does NOT replace the Coverage Strategy's per-seed minimum"); the revision: this week's under-runs were floor-selection *under the mode's cover*, permitted by the aim-language — the mode itself needs no change, and T1–T3 compose with its machinery intact.

- **Commitment:** the house enforcement precedents (template-required sections; user-only relaxation; override-with-recorded-reason).
  - **Source:** the CONCLUDE protocol's required re-test section; the watcher chain's spec-constant thresholds; the innovate spec's own "intentional friction, not a loophole."
  - **Re-test status:** RE-TESTED — commitment confirmed. Each pattern is reused in the texts (T3 = template-required; T1's skip clause = user-only relaxation; T3's quoted skips = recorded-reason friction) — the design is assembled from patterns already proven in this house, one of them inside the very spec being fixed.

## Next Actions

### MUST

*(None until your word — the change is gated on you.)*

### COULD

- **What:** APPLY the four texts — both innovate files + the repo twin (`cognitive_harness/innovate/`) + the traverse note. **One choice rides inside: the recommended form (all-seven-fired + three-variations at the core) vs the literal 7×3 toggle.**
  **Who:** me, on your go. **Gate:** @user-go. **Why:** the next innovation run fires all seven or wears your quoted words — nothing in between. ≤20 minutes.
- **What:** BUILD the checker (~30-line bash; innovation mode first).
  **Who:** me, on your go. **Gate:** @user-go. **Why:** the ledger stops being self-attested; the pipeline's fix-loop gets its first real gate.
  **Depends-on:** COULD "APPLY the four texts". This checker greps the ledger format T3 defines — build after (or with) the apply.

### DEFERRED

- **What:** extend the ledger-pattern to other disciplines (surfacing's convergence claims; critique's dimension coverage). **Gate:** @if-wanted, after the innovation ledger has run a few times. **Why (if revived):** the same glanceable accountability everywhere.
- **What:** the retroactive two-line note in the improvement-observations file (June + this week's telemetry read under the new standard). **Gate:** @if-wanted. **Why (if revived):** the baseline recorded.

## Reasoning

**Why four texts and not one sentence:** each closes a different verified leak — one standard (the three-texts disagreement), one boundary rule (the invocation leak), one required structure (nothing forced the grid into the output), one teeth-clause (nothing failed on absence). An exhortation-only line ("always run full!") was rejected at the start: the spec already had aspirational language, and it did not bind for two months.

**Why tested-not-surviving:** the strongest objection to "always full scale" is mechanism-theater — forced grids breeding filler variations that pass no test. The objection was steelmanned at full strength and reshaped the design: mandate firing (cheap, honest, spread-preserving), record kills (two lines), never mandate survivors. The June evidence killed the opposite pole too — sunlight-only enforcement (ledger with no floor) was tried implicitly for two months (telemetry showed the under-coverage all along) and did not bind.

**Significant kills (each recorded in the run's own ledger):** the stakes-conditional as any run's self-serve escape (who judges "high-stakes"? the session that wants to finish); the inverted default (7×3 everywhere as the base — theater-risk unrebutted); coverage-relaxation via runner-recorded override (runner judgment is exactly what proved untrustworthy — only user words relax); a hard CONCLUDE-block on FLAG (needs runner surgery; refined to a future-teeth note); resume-semantics in the coverage text (belongs to the runner's logic, killed at actionability).

**The demonstration as evidence:** this inquiry's own innovation stage ran under the proposed standard — 7/7 fired, 4 kills + 1 refinement recorded, 3 variations at the core piece, the ledger in the artifact — at 101 lines, under the estimate. The price argument is now measured, not predicted.

## Open Questions

### Monitoring
- The next 3 innovation runs after apply: does the ledger's scaffold-first practice actually get followed, and does FLAG ever fire?
- Does the core-depth rule (3 variations at meta-decision pieces) produce value at pieces, or mostly kills? (If mostly kills, that is still evidence — the kills document the space.)

### Refinement Triggers
- If a legitimate coverage-relaxation case appears that user-words can't express cleanly (e.g., a standing "all quick-mode this week" instruction) → revisit T1's skip clause for standing-instruction support.
- If the checker lands and FLAG-blocking is wanted → the hard-gate note in critique re-opens (runner-side work).

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
innovation ran above the spec's minimum coverage (1 Generator + 1 Framer) at 5–6 of 7 mechanisms, below its "aim for full coverage," and never the full 3-variations-per-mechanism grid (though June's runs didn't either — I checked).

what can we add to innovation as a propmt to make sure it always run on full scale ?
```

</details>
