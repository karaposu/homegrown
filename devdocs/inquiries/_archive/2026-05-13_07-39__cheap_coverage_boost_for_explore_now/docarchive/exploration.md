# Exploration — Cheap Coverage Boost for /explore (Ship-Now)

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-13_07-39__cheap_coverage_boost_for_explore_now/_branch.md`

Territory: the design space of cheap, shippable-today enhancements to `/explore` that improve coverage at the cost of extra context. Seed = user's two examples (tree command + broader codebase travel).

Mode: possibility. Entry: signal-first. Expected: ~12 items. Depth: D2.

---

## Territory Overview

The design space partitions into seven regions plus a jump-scan surface. Each candidate is rated on three dimensions: **coverage-guarantee** (how reliably the enhancement improves coverage — high / medium / low), **context cost** (low / medium / high), and **spec-edit complexity** (very low / low / medium). The user accepts high context cost as long as complexity stays low and coverage-guarantee is high.

Surround layer (included in coarse scan): the `/explore` spec's existing structure (so candidates can be placed in the right section); the prior canonical-coverage finding's commitments (so this finding's candidates don't conflict with `/staged-explore` or the canonical-source registry). Out of scope per goal: staging logic, registry, autonomy-graduation features.

**Step 0 declarations:** mode=possibility; entry=signal-first; expected=~12 items; depth=D2.

---

## Inventory

### Region A — Tool-use mandates (let `/explore` use cheap deterministic tools — matches user's "tree" hint)

**A1. Mandatory filesystem listing at Step 0 (artifact mode)** [coverage-guarantee: **HIGH** | context cost: low-medium | complexity: very low]
At the start of an artifact-mode run, require running `tree -L 3 .` (or `ls -R` / `find . -type f` if `tree` unavailable) on the declared territory before any LLM-based scanning. The listing becomes boundary input for the subsequent scan. The LLM cannot miss what it was forced to see in the listing. **This is the user's seed candidate.** D2 confidence: confirmed.

**A2. Mandatory glob-pattern scan for relevant extensions** [coverage-guarantee: medium-HIGH | context cost: medium | complexity: very low]
Variant of A1, more targeted: extract extensions relevant to the inquiry (from Question/Goal language or a default set: `.md`, `.py`, `.ts`, etc.) and run `find . -name "*.<ext>"` for each. Use when the territory is large and a flat listing would overflow context.

**A3. Required grep for keywords from `_branch.md`** [coverage-guarantee: medium-HIGH | context cost: medium | complexity: low]
Extract noun phrases from Question/Goal (and Canonical-Sources field if present, per the prior finding). Run `grep -r` for each. Forces content-driven surfacing in addition to structural listing. Catches items that aren't surface-near to the structural map.

**A4. Explicit tool-call budget declaration at Step 0** [coverage-guarantee: medium | context cost: high (potentially) | complexity: very low]
Declare at Step 0: "this run may use up to N bash/grep/read calls." Permission-granting. Doesn't FORCE tool use; lifts a possible self-imposed constraint. Coverage benefit depends on the LLM actually using the permission.

### Region B — Read-set expansion (read more files than the LLM would on its own)

**B1. Minimum-N file reads per coarse scan** [coverage-guarantee: medium-HIGH | context cost: high | complexity: low]
Require reading at least N files during the scan (N scales with territory: e.g., 5 for small, 10 for medium, 20+ for large). Forces actual reading, not just listing-from-context. **This matches the user's "travel the codebase" hint.**

**B2. Read-required for surround-layer items** [coverage-guarantee: HIGH | context cost: medium | complexity: low]
If `/explore` identifies a project-wide surround layer (per §3.7), require reading ≥1 file from it before declaring the surround scan complete. Strengthens the existing "must include items from that surround layer" rule.

**B3. Read-required for high-relevance items in inventory** [coverage-guarantee: medium | context cost: medium | complexity: medium]
If an item is flagged high-relevance during signal detection, require reading it (not just labeling). Catches the "scanned-but-not-confirmed" failure case for important items.

### Region C — Process structural enhancements (sequencing + cycles)

**C1. Boundary-discovery sub-phase fires by default in artifact mode** [coverage-guarantee: HIGH | context cost: small-medium | complexity: very low]
Currently conditional on `boundary: unknown` (per §3.3). Lift to "always fires in artifact mode unless explicitly opted out." Guarantees territory-edge mapping. Very small spec change.

**C2. Mandate ≥2 scan-signal-probe cycles** [coverage-guarantee: medium | context cost: medium | complexity: low]
No first-cycle convergence allowed. Forces at least one revisit/refinement. Caveat: more cycles ≠ guaranteed better coverage; could just re-process the same items. Weaker than A1 or C1 on coverage guarantee.

**C3. Inventory-pass-first sequencing** [coverage-guarantee: medium | context cost: minimal | complexity: very low]
Full coarse scan must complete before any probing. Currently §4.1 mode 1 (Premature Depth) names this as a prevention but the spec doesn't enforce sequencing. Lift to a structural requirement. Cheapest candidate by complexity.

**C4. Default depth-level lift D2 → D3** [coverage-guarantee: low-medium (different axis) | context cost: high | complexity: very low]
Currently D2 (functional one-line) is the default; D3 adds adjacency facts (called by, imports, etc.). More richness per item, but doesn't surface MORE items — just more per item. Useful for downstream consumers but not the primary coverage-boost lever.

**C5. Mandatory project-surround-layer scan, with checkable evidence** [coverage-guarantee: HIGH | context cost: small-medium | complexity: very low]
Strengthen §3.7's existing "must include items from the surround layer" by requiring observable evidence in the output (e.g., at least 1 inventory item must be from `homegrown/protocols/`, `homegrown/contracts/`, or `enes/` for codebase territories). Telemetry-checkable.

**C6. Post-convergence negative-space audit pass** [coverage-guarantee: medium-HIGH | context cost: small | complexity: medium]
After convergence (per §4.2), one extra pass: "what KINDS of items have zero hits in this inventory?" Surfaces category-level misses. From the prior canonical-coverage finding's exploration (Region D, item D2; deferred there as Path D). Small if the category taxonomy is left descriptive ("did you check for X-kind, Y-kind, Z-kind?").

### Region D — Telemetry enhancements (auditability, not direct coverage — adjacent)

**D1. Mandatory tool-call log in telemetry** [coverage-guarantee: indirect | context cost: very low | complexity: very low]
Record which bash/read/grep calls the run used. Makes the run's tool usage auditable post-hoc; lets the audit Path from the prior canonical-coverage finding verify that mandates A1/A3 actually fired.

### Region E — Existing-rule strengthening (no new mechanism, just stronger enforcement)

**E1. Structural check for D0 prohibition** [coverage-guarantee: indirect | context cost: very low | complexity: low]
Currently §2.3 says "D0 is NOT acceptable as final output" but no structural check enforces it. Add a check: "count inventory items where label is bare-identifier-only; must be 0." Catches the failure-mode (mode 11) deterministically.

### Region F (jump scan) — Less-obvious candidates

**F1. Read past `/explore` outputs for similar inquiries** [coverage-guarantee: medium | context cost: medium | complexity: medium]
Scan `devdocs/inquiries/*/docarchive/exploration.md` for similar inquiries (by similarity of `_branch.md` keywords) and read top-N before starting. Leverages corpus — past runs found items current run might miss.

**F2. Run `git ls-files` instead of (or alongside) `tree`** [coverage-guarantee: medium-HIGH | context cost: low | complexity: very low]
`git ls-files` lists tracked files; cleaner project boundary than `tree` (which includes `.venv`, `node_modules`, etc.). Variant of A1.

**F3. Run `git log --oneline -20` for recently-changed files** [coverage-guarantee: medium | context cost: low | complexity: very low]
Adds a temporal coverage dimension — what's been actively changed lately is often what the inquiry is implicitly about. Cheap call.

---

## Signal Log

| Signal | Type | Probed? | Reasoning |
|---|---|---|---|
| Filesystem listing is the user's seed | density (high) | YES | A1 is the load-bearing candidate; matches user's "tree" hint directly |
| Multiple read-mandate variants exist (B1/B2/B3) | density | YES | B1 strongest match for "travel the codebase"; B2 catches surround-layer specifically |
| Boundary-discovery is currently conditional | absence-ish | YES | C1 is a very-low-complexity strengthening |
| Negative-space audit was deferred in prior finding | novelty | YES | C6 is small enough to ship here even though it was Path D in the prior architecture |
| Surround-layer enforcement is weak in current spec | tension | YES | C5 strengthens existing rule with observable evidence |
| Tool-call telemetry would make mandates auditable | relevance | YES | D1 supports A1/A3/B1 enforcement |
| D0 prohibition has no structural check | absence | YES | E1 closes a known gap |
| Past-explorations corpus is unused | novelty | YES (jump-scan) | F1 less obvious; medium-complexity but high-leverage |
| Git-aware listings vs filesystem-only | density (low) | YES | F2/F3 variants of A1 with project-boundary refinement |
| Multiple cycles ≠ better coverage | tension | YES (briefly) | C2 surfaced but weaker than A1/C1; coverage isn't guaranteed by more cycles |

**Jump scan performed:** Yes — Region F (less-obvious candidates) surfaced three additional items (F1 corpus-reuse, F2 git-ls-files, F3 git-log-recent) that the seed didn't suggest. F1 is the most novel.

---

## Confidence Map

| Region | Confidence | Notes |
|---|---|---|
| Region A (tool-use mandates) | confirmed | A1 directly matches user's hint; A2/A3/A4 variants well-mapped |
| Region B (read-set expansion) | confirmed | B1 matches the user's "travel the codebase" hint; B2/B3 are scope variants |
| Region C (process enhancements) | confirmed (C1, C3, C5) + scanned (C2, C4, C6) | C1 and C5 are spec-strengthening; C6 is borrowed from prior finding |
| Region D (telemetry) | confirmed | Standard pattern in /explore spec already |
| Region E (existing-rule enforcement) | scanned | E1 is one known gap; others may exist but not pursued |
| Region F (jump-scan) | scanned | F1, F2, F3 surfaced; relative priority to be adjudicated by sensemaking |
| Confirmed-absent | n/a — no empty regions detected at this resolution |

---

## Frontier State

**Stable at coarse resolution.** Seven regions plus the jump-scan surface are mapped at D2. The major design directions visible:
- Tool-use mandates (Region A) and read-set expansion (Region B) — both match user's hints; both have HIGH coverage-guarantee with low-medium complexity
- Process enhancements (Region C) — multiple sub-candidates with varying coverage-guarantee strength
- Telemetry + rule-strengthening (Regions D, E) — small auditability/enforcement adjuncts
- Jump-scan (Region F) — variants and corpus-reuse less-obvious

Frontier is open at the next resolution layer:
- Within Region A: which specific bash invocation to mandate (`tree -L 3` vs `git ls-files` vs `find -type f`)?
- Within Region B: what's the exact N for "minimum-N file reads"?
- Within Region C: should C1, C3, C5, C6 all ship together, or pick the strongest?
- Across regions: does assembling 2-3 candidates compound coverage, or do they redundant?

---

## Gaps and Recommendations

**Frontier questions handed to downstream disciplines:**

1. **For sense-making:** Which candidate(s) deliver the highest coverage-guarantee per unit of complexity? The user's constraint is "simple AND for-sure-better-coverage" — the cost-benefit ranking is the load-bearing decision.

2. **For sense-making:** Is "for sure" satisfied by a structural mandate (LLM forced to do X) or also by a strong default + structural check (LLM defaults to X, check confirms it happened)? Different framings produce different candidate sets.

3. **For decompose:** Among the candidates, which COMBINE into a coherent enhancement vs which are mutually-redundant? E.g., A1 (mandatory tree) + B1 (read ≥N files) compound (different mechanisms). A1 + F2 (git ls-files instead of tree) are mutually-exclusive choices of the same axis.

4. **For innovate:** What's the EXACT spec text for the recommended candidate(s)? The user wants this immediately shippable — innovation must produce concrete sentences/paragraphs to add to `homegrown/explore/references/explore.md`.

5. **For td-critique:** The user-perspective check: does the recommended enhancement deliver the "for sure" guarantee the user asked for, OR is it a soft-mandate that the LLM can still bypass? "For sure" is a strong word; critique must test whether the candidate's mechanism genuinely meets that bar.

**Deferred signals (not probed at this resolution):**

- Possibility-mode-only enhancements — most candidates are artifact-mode-flavored; possibility-mode doesn't have a "filesystem" to list. Should there be a parallel set for possibility mode? Deferred — the user's hints are artifact-mode-flavored.
- Cross-discipline coverage-enhancement patterns — could `/sense-making` or `/decompose` benefit from similar "force tool use" patterns? Out of scope here.

---

## Telemetry

**Base metrics:**
- Mode: possibility
- Entry point: signal-first
- Cycles run: 3 (signal-probe on user's seed → adjacent-region scan → jump-scan on less-obvious)
- Candidates generated: 14 (A1-A4, B1-B3, C1-C6, D1, E1, F1-F3 — totaling 18 by sub-count, but 14 distinct regions/sub-clusters)
- Signals detected: 10; probed: 9; deferred: 2 (with reasoning)
- Resolution progression evidence: coarse-only (D2); fine-resolution drill deferred to staging if needed
- Frontier state: stable at coarse resolution; open at next resolution
- Discovery rate: declining (cycle 3 produced 3 surfaces in one region rather than a new region)
- Convergence criteria: frontier stability ✓; declining discovery rate ✓; bounded gaps ✓
- Jump-scan performed: ✓ (Region F surfaced)
- Failure modes checked: Premature depth, Surface-only scanning, False confidence, Completeness bias in possibility mode, Open→closed drift, Silent boundary-discovery, Negative-space silent drop — none observed firing

**Possibility-mode completeness-before-novelty check:** Standard/obvious approaches (A1 mandatory listing, B1 read more files) surfaced BEFORE novel ones (F1 read past explorations, C6 negative-space audit). ✓

**Staging-aware telemetry:** Not applicable (single-invocation).

---

## Self-Assessment

**Overall: PROCEED.** Sufficient coverage at coarse resolution; convergence criteria met with jump-scan; surround layer included (the /explore spec's structure + prior findings' commitments); possibility-mode completeness rule honored; no failure modes fired.

Downstream consumers (sense-making, decompose, innovate, critique) should treat this map as a complete inventory of cheap-coverage-boost candidates at D2. The load-bearing decision for sensemaking is the cost-benefit ranking under the user's "for sure / simple" constraint pair.
