# Surfacing — Unflagged routine-command generation tendencies

## User Input

`devdocs/inquiries/2026-05-29_17-39__unflagged_command_generation_tendencies/_branch.md`

Purpose (bias source): surface what bears on *what tendency an LLM should have, at command-creation time, so routine shell commands (`mkdir`/`cd`/`ls`/…) come out auto-approvable rather than escalating to human approval* — framed at the meta/principle level, generalizing beyond the already-observed offenders.

## Mode + Entry point

- **Mode:** hybrid — `artifact` (observed flagged commands; harness Bash-tool guidance; project permission allowlist) + `possibility` (candidate tendencies/principles, generated for the conceptual territory).
- **Entry point:** signal-first (explicit purpose).
- **Territory:** explicit-bounded — the knowledge + artifacts that determine *why* an agent's routine shell commands get flagged, and the candidate-principle space for avoiding it. No boundary-discovery sub-phase fired.

---

## Traversal Trace

| # | Region | Item (identifier) | Relevance | Conf | Recency |
|---|---|---|---|---|---|
| 1 | R1 Approval mechanism | `permission-check = allowlist-prefix-match` | core | HIGH | none |
| 2 | R1 Approval mechanism | `compound-command-approval = AND-over-parts` (one unmatched part ⇒ whole prompts) | core | HIGH | none |
| 3 | R1 Approval mechanism | `command-substitution-$()-is-statically-unprovable ⇒ always prompts` | core | HIGH | none |
| 4 | R1 Approval mechanism | `Turing-complete-tools (awk/sed/perl) = not-statically-safe ⇒ prompt` | core | HIGH | none |
| 5 | R1 Approval mechanism | `cd-in-compound-command ⇒ may prompt` (harness-documented) | core | HIGH | none |
| 6 | R1 Approval mechanism | `safety-of-whole = MIN over parts, not average` | core | HIGH | none |
| 7 | R2 Observed offenders | `ex-A: echo "===" && date && mkdir -p "$(date …)" && echo "created…"` (folder-creation) | sub | HIGH | filesystem (this-session) |
| 8 | R2 Observed offenders | `ex-B: echo … && ls … && echo "" && echo … && ls …` (spontaneous inspection) | sub | HIGH | filesystem (this-session) |
| 9 | R2 Observed offenders | `ex-C: cd …/inquiries; echo "…"; ls -1d … | sort | awk '$0>=…'` (survey+filter) | sub | HIGH | filesystem (this-session) |
| 10 | R3 Harness guidance | `Bash-tool-desc: "Avoid cat/head/tail/sed/awk/echo … use the appropriate dedicated tool"` | core | HIGH | none |
| 11 | R3 Harness guidance | `Bash-tool-desc: "prefer absolute paths — cd in a compound command can trigger a permission prompt"` | core | HIGH | none |
| 12 | R3 Harness guidance | `Write-tool creates parent dirs automatically` (⇒ mkdir often unneeded) | core | HIGH | none |
| 13 | R3 Harness guidance | `dedicated tools exist: Read / Glob / Grep` (replace cat/find-name/grep-pipelines) | core | HIGH | none |
| 14 | R4 Allowlist reality | `settings.local.json: ~50 hyper-specific one-off allow entries` (echo/awk/sed/$()) | core | HIGH | filesystem |
| 15 | R4 Allowlist reality | `"don't ask again" ⇒ exact-string rule that rarely re-matches` (e.g. `awk '$0 >= "2026-05-28_20-35"'`) | core | HIGH | filesystem |
| 16 | R4 Allowlist reality | `generalizing entries are plain verbs: git * / bash * / mkdir -p … / mv …` | core | HIGH | filesystem |
| 17 | R5 Misuse categories | `MISUSE-1: shell-as-presentation (echo labels/status)` | core | HIGH | none |
| 18 | R5 Misuse categories | `MISUSE-2: shell-as-sequencer (&& / ; chaining, cd-then-act)` | core | HIGH | none |
| 19 | R5 Misuse categories | `MISUSE-3: shell-as-compute (awk/sort/grep-filter/$() on small data the model could read+reason)` | core | HIGH | none |
| 20 | R6 Correct substitutes | `SUB-1: presentation → assistant reply text` | core | HIGH | none |
| 21 | R6 Correct substitutes | `SUB-2: sequencing → separate tool calls; absolute paths (no cd)` | core | HIGH | none |
| 22 | R6 Correct substitutes | `SUB-3: compute/filter → run plain read (ls/glob), reason over result in-context` | core | HIGH | none |
| 23 | R6 Correct substitutes | `SUB-4: dynamic value (timestamp) → standalone command, reuse literal value` | core | HIGH | none |
| 24 | R7 Candidate principles | `P-root: shell mutates/inspects the filesystem; thinking/presentation/compute stay in the agent` | core | HIGH | none |
| 25 | R7 Candidate principles | `P: one call = one plain verb on literal args` | core | HIGH | none |
| 26 | R7 Candidate principles | `P: prefer the dedicated tool over a shell equivalent` | core | HIGH | none |
| 27 | R7 Candidate principles | `P: no command can name a value that doesn't exist yet (kills $())` | sub | MEDIUM | none |
| 28 | R7 Candidate principles | `P: read→reason→act as separate steps, not one incantation (the "low-duration-reasoning" antidote)` | core | HIGH | none |
| 29 | R7 Candidate principles | `P: large-data exception — shell filtering legitimate when in-head infeasible; then allowlist the tool` | sub | MEDIUM | none |
| 30 | R8 Root cause | `tendency-source: "agentic efficiency" / batch-and-narrate compresses read→reason→act into one shell line` | side | MEDIUM | none |
| 31 | R8 Root cause | `model-version shift: 4.8 favors compound one-liners more than predecessors (user observation)` | side | LOW | none |

---

## State Summary

**Territory echo:** the approval mechanism + observed offenders + harness guidance + project allowlist + the misuse/substitute/principle conceptual space, bearing on unflagged routine-command generation.

**Purpose echo:** produce a strict, meta-level, generalizing list of command-creation tendencies that yield auto-approvable commands.

**Coverage map:**
- R1 Approval mechanism — **confirmed** (core; the "why it flags" facts). Aggregate: core.
- R2 Observed offenders — **confirmed** (the three real flagged commands). Aggregate: sub.
- R3 Harness guidance — **confirmed** (the harness already states the principle). Aggregate: core.
- R4 Allowlist reality — **confirmed** (settings.local.json read directly). Aggregate: core.
- R5 Misuse categories — **confirmed** (three-way partition of why the shell is reached for). Aggregate: core.
- R6 Correct substitutes — **confirmed** (one substitute per misuse + dynamic-value case). Aggregate: core.
- R7 Candidate principles — **confirmed-but-open** (raw material for innovation; not yet contracted into a final list). Aggregate: core.
- R8 Root cause — **scanned-but-shallow** (the *why the model does it* layer; relevant context, lower priority than the prescriptive answer). Aggregate: side.

**Confirmed-absent regions:** none. (No region traversed and found empty; one region — R8 — is shallow by intent, not absent.)

**Concept-names list (provenance = trace #):**
- `allowlist-prefix-match` (vocabulary, #1) — the matcher unit is a command prefix/pattern.
- `AND-over-parts` (coined, #2) — compound approval requires every sub-command allowed.
- `MIN-not-average` (coined, #6) — a compound's safety equals its riskiest part.
- `statically-unprovable` (vocabulary, #3/#4) — `$()` and Turing-complete tools can't be proven safe ⇒ prompt.
- `MISUSE-1/2/3` (coined, #17–19) — presentation / sequencing / compute: the three ways the shell gets misused.
- `SUB-1..4` (coined, #20–23) — the matching correct substitutes.
- `P-root` (coined, #24) — the single root principle: shell = filesystem actions; cognition stays in the agent.
- `read→reason→act` (coined, #28) — separate the steps rather than fusing them into one command.
- `large-data-exception` (coined, #29) — the boundary where shell compute is legitimate.
- `allowlist-bloat` (coined, #14/#15) — "don't ask again" yields non-generalizing one-off rules; allowlisting is a symptom-trail, not a fix for the tendency.

**Recency distribution:** R2 + R4 items are filesystem-backed (R4 = `settings.local.json`, read this session; R2 = commands quoted from this session's transcript). All R1/R3/R5/R6/R7/R8 items are conceptual/in-context knowledge → `source: none`. Per-item mtimes were not separately `stat`-captured (most items are non-file concepts); recency is non-load-bearing for this purpose and is not used to weight any tag.

**Frontier flags:**
- The candidate principles (R7) are surfaced but **not yet de-duplicated or ordered** — that contraction is downstream (sensemaking → decompose → innovate → critique).
- Open: the *placement* dimension (MVLw step-2 vs global CLAUDE.md vs permission/hook) is gestured at (R4/R8) but is a separate sub-question the loop may need to address.
- Open: where exactly the `large-data-exception` (#29) boundary sits — "small enough to read+reason" is fuzzy.

**Workspace-populated status:** `{populated: true, populated-at: 2026-05-29_17-39, extent: R1–R8 traversed; R1/R3/R5/R6 at core resolution, R7 open for downstream contraction, R8 shallow-by-intent}`

---

## Telemetry

- Mode: hybrid (artifact + possibility); entry point: signal-first
- Cycles run: 1 sweep across 8 regions; items enumerated: 31; tagged — core: 22, sub: 6, side: 3, umbrella: 0
- Boundary-discovery sub-phase fired: no (territory explicit-bounded)
- Convergence: territory traversed at current resolution; no item filtered at uncertain-relevance level; no HIGH-confidence rejections applied (inclusion-biased)
- Workspace-overload trigger: not fired
- Failure modes checked: Missed-relevance (R8 shallow — flagged, not dropped); Surfaced-irrelevance (none forced out); Over-coverage (held — 0 umbrella); Recency-Equates-Idleness / Recency-Bias-Filter (avoided — recency non-load-bearing, not used to weight tags)
- `items_with_mtime`: ~5 (R2/R4, file/transcript-backed) / `items_without_mtime`: ~26 (conceptual)

## Self-Assessment Verdict

**PROCEED** — convergence criteria met; the territory's core regions (mechanism, offenders, harness guidance, allowlist reality, misuse/substitute partition, candidate principles) are surfaced at usable resolution. One intentional shallow region (R8 root-cause) is flagged for the frontier, not silently dropped. Output is ready for Sensemaking.
