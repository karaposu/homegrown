---
status: active
related:
  - devdocs/inquiries/2026-05-13_06-30__explore_canonical_coverage_via_staged_iteration/finding.md
  - devdocs/inquiries/2026-05-13_07-16__is_mapping_required_core_of_explore/finding.md
---
# Finding: Cheap Coverage Boost for /explore (Ship-Now)

## Question

The user asked, after the prior two `/explore`-related findings: *"What can we do for now so that our current `/explore` skill will have more coverage for sure, even though it can waste some context? Something that is for sure to make `/explore` explore better even at the cost of extra context, but not something overly complicated... maybe something like asking it to use `tree` command, or just making it more allowed to travel the codebase?"*

The inquiry's goal was a **concrete, immediately-shippable enhancement** to `homegrown/explore/references/explore.md` (and possibly `homegrown/explore/SKILL.md`) — at most a small section addition or two refinement notes — that the user can apply today. The enhancement should be observable in the next `/explore` run (the user can see the coverage improvement) and structurally guaranteed (not dependent on the LLM's discretion). The constraints: simple AND for-sure-better-coverage AND extra context is acceptable. Excludes: shipping `/staged-explore` (that's a separate runner from the prior canonical-coverage finding), shipping the canonical-source registry (that's an inquiry-framing change), waiting for autonomy graduation.

(Project context the reader may need: `/explore` is the project's "Structural Exploration" thinking discipline defined in `homegrown/explore/references/explore.md`. The prior two findings — at the inquiry folders listed in this finding's `related:` frontmatter — addressed the larger architecture (a `/staged-explore` runner + a canonical-source registry) and the discipline's identity (mapping is the core at coarse user-language grain). This inquiry sits below those — a small, tactical, in-`/explore` enhancement that ships today.)

---

## Finding Summary

- **Ship one thing: a mandatory filesystem-listing pre-scan at Step 0 of every artifact-mode `/explore` run.** Before the first scan-signal-probe cycle, the runner MUST execute one of `tree -L 3 .` / `git ls-files | head -200` / `find . -type f ... | head -200` / `ls -R` / Claude Code's Read on the directory (try in order; first success wins). The listing becomes boundary input for the cycle.

- **Why this works:** the LLM cannot miss what it was forced to see in the listing. Coverage becomes auditable post-hoc — a reader can verify the listing happened and compare it to the surfaced inventory. The mandate is a hard MUST (matches the user's "for sure"); the spec change is small (~30-45 minutes of work in one spec section); the context cost is intentional (the user accepted it).

- **The five-entry fallback chain handles environment variance** (tree available vs git repo vs neither vs fully restricted sandbox). Claude Code's Read tool on the directory is the universal fifth fallback — always available when `/explore` runs.

- **Three new telemetry fields make the mandate auditable:** `boundary_listing_invocation` (which fallback ran or `skipped`/`failed`); `boundary_listing_items_count` (integer); plus one reason field (`skip_listing_reason` for explicit opt-out or `boundary_listing_failure_reason` for the rare all-fail case). A structural check (extending `tools/structural_check.sh` for the `exploration` discipline) verifies the telemetry field is populated — this is what converts MUST from honor-system into actually-enforced.

- **There's a narrow opt-out:** `skip-listing: true` in `_branch.md` with a required one-line `skip-listing-reason`. Use only when the territory is artifact-mode but doesn't map to a filesystem tree (log archives, document corpora, raw data dumps). Otherwise the mandate fires.

- **Optional adjunct (ship together OR follow-on):** a minimum-N file-reads refinement at the Scan component (§2.1). N scales with the declared `expected` (5 for ~10 items; 10 for ~50; 20+ for finer). Improves CONCEPT mapping coverage (per the prior identity-refresh finding's typology); the filesystem listing alone primarily improves LAYOUT mapping. Both can ship together if the user wants compound coverage.

- **Compatible with both prior findings, not replacing either.** RELATED, not REFINES or SUPERSEDES. The prior canonical-coverage finding's `/staged-explore` runner + registry remain unchanged; if/when they ship, every staged `/explore` call benefits from the pre-scan. The prior identity-refresh finding's spec-language clarifications are unaffected — this finding adds operational mechanism, not vocabulary.

---

## Finding

The user's question is tactical: what's the smallest spec change to today's `/explore` that observably improves coverage in a way the user can verify? The answer is a mandatory filesystem-listing pre-scan with an explicit fallback chain, audit-enforced telemetry, and a narrow opt-out. This is the load-bearing change. Everything else in this finding is either the specification details that make the mandate enforceable, the optional adjunct for compound coverage, or the relationships to prior findings that keep this finding compatible.

### 1. The single mandate

Add a new subsection to `homegrown/explore/references/explore.md` §3.3 (the boundary-discovery sub-phase). The subsection's text (this is the shippable wording, modulo final-pass polish):

> **Filesystem-listing pre-scan (artifact mode).**
> 
> In artifact mode, `/explore` MUST run a deterministic filesystem-listing call before the first scan-signal-probe cycle (see fallback chain below). The listing's output becomes boundary input for that cycle. The mandate is bypassed only when `skip-listing: true` is declared at Step 0 with a required `skip-listing-reason` (see opt-out below).
> 
> **Tool-fallback chain.** Try in order; first successful invocation wins. The runner records which invocation ran in telemetry.
> 
> 1. `tree -L 3 .` — depth-limited; concise; preferred when available.
> 2. `git ls-files | head -200` — project-tracked files only; clean boundary for repos.
> 3. `find . -type f -not -path '*/\.*' -not -path '*/node_modules/*' -not -path '*/.venv/*' | head -200` — catch-all when no git.
> 4. `ls -R | head -200` — last resort shell command; least readable but usually present.
> 5. Claude Code's Read tool on the directory path — universal fallback when shell access is restricted; always available when `/explore` runs inside Claude Code.
> 
> If the inquiry's `_branch.md` provides an explicit listing path (a specific subfolder to scan), prepend that path's listing.
> 
> **Success criteria per chain entry.** Exit code 0 AND non-empty stdout = success; use this invocation's output. Exit code != 0 = failure; try the next entry. Exit code 0 + empty stdout = empty territory; record `boundary_listing_items_count: 0`, log the successful entry, and stop the chain (the territory IS empty; later entries can't recover content that doesn't exist).
> 
> **All-fail behavior.** If all five entries fail (rare; sandbox-restricted environments), log `boundary_listing_invocation: failed` and `boundary_listing_failure_reason: <one-line reason>`. Proceed with the run but downgrade the self-assessment (§4.5) from PROCEED to FLAG. The output explicitly notes that coverage cannot be guaranteed.
> 
> **Trigger.** The mandate fires when `territory-type-mode: artifact` (per §3.1 Step 0 declarations). Possibility-mode runs do not invoke the listing — the mandate has no meaningful target in a conceptual territory.
> 
> **Opt-out (`skip-listing: true`).** In rare cases the territory is artifact-mode but doesn't map to a filesystem tree (log archives, document corpora with non-path identifiers, raw data dumps). For such cases, declare `skip-listing: true` in `_branch.md` Step 0 declarations together with a one-line `skip-listing-reason` explaining why the listing wouldn't help. Telemetry records `boundary_listing_invocation: skipped` and `skip_listing_reason: <reason>`. If `skip-listing: true` is set without a reason, or set for a territory whose Question explicitly names a filesystem path, the runner SHOULD print a warning but proceed.

### 2. Telemetry (added to §5.3)

Three new fields:

- `boundary_listing_invocation` ∈ { `tree-L3`, `git-ls-files`, `find`, `ls-R`, `read-tool`, `skipped`, `failed` } — which invocation ran (or the opt-out/failure state).
- `boundary_listing_items_count` — integer count of files in the listing output (0 if skipped or failed).
- `skip_listing_reason` (only when invocation = `skipped`) OR `boundary_listing_failure_reason` (only when invocation = `failed`) — the one-line reason.

These fields make the mandate auditable: a reader of the inquiry's `exploration.md` can verify the listing happened (or see explicitly why it didn't) and roughly how broad the territory was.

### 3. Audit / structural check

Extend `tools/structural_check.sh` for the `exploration` discipline (or define an equivalent check in `/MVL+`'s spec) to verify these conditions in any `exploration.md` produced in artifact mode:

- `boundary_listing_invocation` field is present AND is one of the seven valid values
- If invocation is `skipped`, `skip_listing_reason` is non-empty
- If invocation is `failed`, `boundary_listing_failure_reason` is non-empty

If any condition fails, the structural check FAILS. The `/MVL+` runner currently re-runs `/explore` when structural checks fail; this is the mechanism that converts MUST from honor-system into actually-enforced.

### 4. Optional adjunct — minimum-N file reads

Add a refinement note at §2.1 (Scan component) — this is OPTIONAL and uses MAY-language, not MUST:

> **Minimum-N file reads (optional, artifact mode).** When the inquiry needs DEPTH-coverage in addition to BREADTH-coverage (per the filesystem-listing pre-scan in §3.3), the Scan component MAY be configured to read ≥N actual files during the coarse pass (not just list them). N scales with the declared `expected`:
> 
> | `expected` | Recommended N |
> |---|---|
> | ~10 items (coarse) | 5 |
> | ~50 items (medium) | 10 |
> | ~200 items (fine) | 20+ |
> 
> Read-selection rule: if signal detection has flagged high-relevance items, read those first (up to N); otherwise read the first N items from the filesystem listing.
> 
> Telemetry (added to §5.3): `read_set` (list of file paths read); `read_set_count` (integer).
> 
> This adjunct primarily improves CONCEPT mapping coverage (per the kinds-of-mapping typology in §1.7, contributed by the prior identity-refresh finding); the filesystem-listing pre-scan's coverage is primarily LAYOUT-flavored. Enable when the inquiry's question requires understanding file CONTENTS, not just their existence.

### 5. Worked example (added to §3.3 alongside the mandate)

> **Worked example.** A codebase-reading run in artifact mode declares Step 0 as: `territory-type-mode: artifact`; `entry-point: frontier-first`; `expected: ~15 items`; `depth-level: D2`.
> 
> The runner first executes `tree -L 3 .` and succeeds (87 entries). Telemetry: `boundary_listing_invocation: tree-L3`; `boundary_listing_items_count: 87`. The 87 entries become boundary input for the first scan. The scan surfaces ~12 items at D2 (filtering out non-relevant entries; clustering related ones).
> 
> Coverage is now auditable post-hoc: a reader can answer "which of the 87 entries didn't make it onto the 12-item inventory, and why?" Without the pre-scan, that question is unanswerable — the inventory floats free of any ground truth.
> 
> *All-fail variant:* in a sandbox-restricted environment where none of the five fallback entries succeed, telemetry records `boundary_listing_invocation: failed`; `boundary_listing_failure_reason: shell access disabled in this environment`. The self-assessment downgrades to FLAG; the output notes "coverage cannot be guaranteed without filesystem access" so downstream consumers see the limitation explicitly.

### 6. Why this is the right answer to "simple AND for-sure"

The user demanded both simplicity and structural guarantee. Strong-default-plus-check (a SHOULD-clause with telemetry) would have been simpler but fails "for sure" — the first run could still miss; the check catches it; the run re-runs. Hard mandate plus telemetry plus structural-check audit is structurally guaranteed from the first run AND specified in ~50 lines of spec change. The compounding mechanisms make the mandate genuinely enforced rather than honor-system.

The optional adjunct (B1, minimum-N file reads) is named explicitly because the prior identity-refresh finding's mapping-typology made the coverage-axis question visible: filesystem listing alone covers LAYOUT; reading files covers CONCEPT. If the user wants both axes, ship B1 together with A1. If the user wants minimum-sufficient, ship A1 alone and revisit B1 later.

### 7. Relationship to prior findings

**Relative to the canonical-coverage finding** (`devdocs/inquiries/2026-05-13_06-30__explore_canonical_coverage_via_staged_iteration/finding.md`): RELATED, not REFINES. The pre-scan helps canonical-source surfacing as a side effect (the LLM is forced to see the territory more thoroughly), but does NOT replace that finding's canonical-source registry mechanism. The registry is the upstream layer (inquiry-framing time); this finding's pre-scan is downstream `/explore` mechanism. They compound when both ship: each `/staged-explore` pass (from the prior finding) invokes `/explore`, which invokes the pre-scan.

**Relative to the identity-refresh finding** (`devdocs/inquiries/2026-05-13_07-16__is_mapping_required_core_of_explore/finding.md`): RELATED, compatible extension. That finding added spec-language clarifications (the user-language opening, the granularity note, the kinds-of-mapping typology, the colloquial-vs-disciplinary section). This finding adds operational mechanism (a mandatory pre-scan and optional read-mandate). No conflict. The kinds-of-mapping typology from that finding helps frame this finding: A1 covers layout mapping; B1 covers concept mapping. Both work below the typology section.

---

## Next Actions

### MUST

- **What:** Add the filesystem-listing pre-scan subsection to `homegrown/explore/references/explore.md` §3.3 (boundary-discovery sub-phase). Include the mandate sentence (MUST), the five-entry tool-fallback chain with explicit success criteria and all-fail behavior, the artifact-mode-only trigger, the `skip-listing: true` opt-out with required reason and warning, and the worked example (both the success case with the 87-entries codebase scenario and the all-fail variant).
  **Who:** A future author with write access to the spec file; one focused session.
  **Gate:** Observable — the §3.3 section in the spec contains the new subsection; a test `/explore` run in artifact mode produces `boundary_listing_invocation` in its telemetry.
  **Why:** Closes the most-impactful coverage gap in today's `/explore` with the smallest possible spec change.

- **What:** Add three telemetry fields (`boundary_listing_invocation`, `boundary_listing_items_count`, and one of `skip_listing_reason` / `boundary_listing_failure_reason` depending on the run's outcome) to §5.3 base metrics in the same spec file.
  **Who:** Same author handling the first MUST; included in the same session.
  **Gate:** Observable — §5.3 lists the new fields with their value enums and definitions.
  **Why:** Without telemetry the mandate is honor-system; with telemetry the mandate becomes auditable post-hoc.

- **What:** Extend `tools/structural_check.sh` (or define an equivalent check in `/MVL+`'s spec) for the `exploration` discipline to verify that artifact-mode `exploration.md` outputs contain a `boundary_listing_invocation` field with a valid value, with required reason fields populated for `skipped`/`failed` cases. If the check fails, the run is structurally INVALID and the `/MVL+` runner re-runs `/explore`.
  **Who:** Same author handling the first two MUSTs; included in the same session.
  **Gate:** Observable — `bash tools/structural_check.sh <exploration.md> exploration` runs cleanly on a complete artifact-mode output and fails on one with a missing/invalid `boundary_listing_invocation`.
  **Why:** Without this audit, MUST is honor-system. This is the mechanism that converts "for sure in the spec" into "for sure at runtime."

### COULD

- **What:** Ship the optional adjunct — minimum-N file reads as a §2.1 Scan-component refinement note plus two more telemetry fields (`read_set`, `read_set_count`).
  **Who:** Same author; ~10-15 minutes additional during the same session.
  **Gate:** Observable — §2.1 contains the new refinement note with the N-scaling table and read-selection rule; telemetry fields appear in §5.3.
  **Why:** Compounds the layout-mapping coverage from the filesystem listing with concept-mapping coverage from forced file reads. Use when the inquiry's question requires understanding file contents, not just their existence. Optional because A1 alone is the minimum-sufficient ship per the user's "simple" constraint.

### DEFERRED

- **What:** Lift `/explore`'s §3.3 boundary-discovery sub-phase to fire by default in artifact mode (not just conditional on `boundary: unknown`).
  **Gate:** Observable — after the filesystem-listing mandate ships and runs for ≥5 inquiries, examine whether any inquiry in artifact mode without explicit `boundary: unknown` declaration would have benefited from the default-fire behavior.
  **Why if revived:** A subset of the filesystem-listing's value. Currently subsumed by A1 for filesystem territories; could matter for non-filesystem-mappable artifact territories.

- **What:** Mandatory project-surround-layer scan with checkable evidence — strengthen §3.7's existing "must include items from the surround layer" wording with an observable evidence requirement (e.g., the inventory MUST contain at least one item from `homegrown/protocols/`, `homegrown/contracts/`, or `enes/` when those are in the territory).
  **Gate:** Observable — after the filesystem-listing mandate ships, audit whether the §3.7 surround-layer rule is still being skipped in practice across 2+ inquiries.
  **Why if revived:** Closes a different coverage gap (project-wide context vs filesystem territory).

- **What:** Post-convergence negative-space audit — a new pass that checks "what KINDS of items have zero hits in this inventory?" against a category taxonomy.
  **Gate:** Condition-bound — category-level miss patterns observed in 2+ inquiries after the filesystem-listing mandate ships.
  **Why if revived:** Complements item-level coverage (which the filesystem listing addresses) with category-level coverage. Was deferred in the prior canonical-coverage finding under similar conditions.

- **What:** Structural check enforcing the D0-prohibition rule (the existing §2.3 rule "D0 is NOT acceptable as final output" doesn't have a structural check).
  **Gate:** Observable — D0-level items observed in 2+ recent `/explore` outputs.
  **Why if revived:** Closes a known structural-enforcement gap. Independent of the filesystem-listing mandate.

- **What:** Pre-read past `/explore` outputs for similar inquiries before starting a new run (corpus reuse).
  **Gate:** Condition-bound — corpus of prior `/explore` runs reaches 5+ similar inquiries.
  **Why if revived:** Leverages accumulated exploration knowledge. Modest leverage today; valuable as the corpus grows.

- **What:** Ship B1 (minimum-N file reads) if it wasn't shipped together with A1.
  **Gate:** Observable — after A1 ships and runs for ≥5 inquiries, the user reports needing concept-coverage in addition to layout-coverage.
  **Why if revived:** Compounded coverage axis. The COULD entry above is the same item with different framing; if B1 is bundled with A1, this entry collapses.

---

## Reasoning

### Why a hard mandate over a soft default

The strongest alternative was a SHOULD-language version of the same mandate plus a structural check that catches violations post-hoc. This was tested in sensemaking and killed on the structural grounds that "for sure" (the user's literal phrasing) maps to MUST, not SHOULD. Even with a structural check, SHOULD-plus-check is a soft guarantee — the first run may still miss; the check catches it; the run re-runs. The cumulative effect is "for sure" but the first attempt isn't guaranteed. The user's word demands first-attempt guarantee. MUST + telemetry + audit gives that.

Additionally, MUST plus a structural check is operationally simpler than SHOULD plus a probabilistic check — the structural check on MUST has a clear pass/fail criterion (was the bash call invoked? was telemetry populated?). The structural check on SHOULD would have to encode some discretion ("the LLM thought the listing wasn't needed; is that reasonable?"), which is harder to specify.

### Why a five-entry fallback chain

Innovation produced a four-entry chain (tree → git ls-files → find → ls -R). Critique surfaced the all-fail case — what happens in environments where none of those four work? Adding Claude Code's Read tool on the directory as a fifth entry resolves it: Read is always available when `/explore` runs inside Claude Code, so the fifth entry is the universal fallback. Without it, the assembly had a known failure case in restricted-sandbox environments.

The chain ordering is by preference (most concise first; most universally available last). The first-success-wins rule keeps the spec simple and the telemetry honest about which mechanism was actually used.

### Why the optional adjunct is optional

The prior identity-refresh finding's seven-kinds-of-mapping typology made the coverage-axis question visible: a filesystem listing addresses layout mapping; reading files addresses concept mapping. The two are different coverage axes, both real, both legitimate.

The user's "simple AND for-sure" framing weighted toward minimum-sufficient. Mandating BOTH at once would be a bigger spec change AND a bigger context cost. A1 alone is minimum-sufficient if the user wants the smallest shippable enhancement. B1 is named explicitly as an optional adjunct so the user can opt in for compound coverage IF they want it — same session, +10-15 min — without making the minimum-sufficient case more complex.

### Why three findings on `/explore` is the right count

This finding is the third on `/explore` in rapid succession (after canonical-coverage and identity-refresh). The three address different layers of the same discipline:

- **Canonical-coverage:** how `/explore` ensures canonical sources aren't missed (registry + runner + audit, three pieces, multi-session work).
- **Identity-refresh:** what `/explore` fundamentally IS (spec-language, kinds-of-mapping typology, colloquial-vs-disciplinary).
- **This finding:** a small operational mechanism that ships TODAY for immediate coverage improvement (the pre-scan mandate).

The three are compatible and incrementally adoptable. The user can ship this finding today (45-60 min); the prior two are larger and ship across multiple sessions. No single finding dominates; each addresses a question the user asked at a different level of depth.

### Significant kills

P1.1-C (soft-default SHOULD-version of the mandate) was killed for failing the "for sure" structural requirement. Seed: there is no soft-default path that satisfies the user's stated demand. The KILL is structural, not preference; SHOULD plus check is a fundamentally different commitment than MUST plus check.

---

## Open Questions

### Monitoring

- After the pre-scan mandate ships, observe whether the structural check actually catches violations. If zero violations occur in 5+ runs, that's evidence either the mandate is universally followed (good) or the check is somehow being satisfied trivially (worth examining).

- After the pre-scan mandate ships, observe whether the `boundary_listing_invocation` distribution makes sense — e.g., if `tree-L3` consistently wins in this environment, the fallback chain is doing its job; if `read-tool` (the universal fallback) dominates, that signals shell access is degraded across runs and the chain needs review.

- After the pre-scan ships, observe whether canonical-source-miss reports persist for inquiries that haven't yet adopted the canonical-source registry from the prior canonical-coverage finding. If misses persist despite the pre-scan, the registry shipping becomes more urgent.

### Blocked

- The optional B1 adjunct's empirical value (does it actually improve concept-mapping coverage in practice?) is blocked on the pre-scan mandate shipping first. Without A1 in place, isolating B1's contribution is hard.

### Research Frontiers

- A more general **tool-mandate framework** for `/explore` — beyond just filesystem listing, are there other deterministic tool calls that should be MUST in specific modes? E.g., a mandatory `grep` for inquiry-keywords in artifact mode. Not pursued here; would require its own inquiry once the filesystem-listing mandate has run for a while and produced telemetry.

### Refinement Triggers

- The **five-entry fallback chain** re-opens if a future environment surfaces where none of the five entries work. The most likely scenario: Claude Code adds a new restricted-mode where even the Read tool on directories is disabled.

- The **success criteria** (exit code 0 + non-empty stdout = success; empty stdout = empty territory) re-opens if a real run encounters a case the criteria mis-handle. Most likely: an invocation that legitimately returns content via stderr rather than stdout (unusual but possible for some tool versions).

- The **decision to keep B1 optional** (rather than mandatory) re-opens if 3+ inquiries after A1 ships report that concept-coverage misses are persistent and the read-mandate would have caught them.

---

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
what we can do for now so that our current explore skill will have more coverage for sure, even tho it cna waste some context? sth that is for sure to make explore skill explore better even with sake of extra context , but not sth overly complicated... maybe sth like asking it to use tree command? or just making it more allowed to travel the codebase ?
```

</details>
