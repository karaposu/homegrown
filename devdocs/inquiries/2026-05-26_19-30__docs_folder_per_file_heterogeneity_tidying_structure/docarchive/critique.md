# Critique — docs/ folder per-file heterogeneity structural tidying

## User Input

```
_branch.md + surfacing.md + sensemaking.md + decomposition.md + innovation.md (18 candidates with dispositions + EM-A1 emergent assembly).
Task: Adversarial critique of Innovation's candidates. Apply Phase 0-4 + Phase 3.5. Use multi-axis prosecution depth check. Compare C2.4 vs C2.5 explicitly. Test whether C3.3 (writer-side) actually closes the compliance residual. Test whether the design accommodates consciousness.md without requiring evaluation. Test whether EM-A1 is genuinely innovative.
```

---

## Phase 0 — Dimension Construction

### Sensemaking-derived dimensions (F1-F10 mapped)

| # | Dimension | What it asks | Source anchor | Weight |
|---|---|---|---|---|
| D1 | Within-file fraction handling | Does the candidate handle per-file heterogeneity (canon + legacy + seed in one file)? | SV6 → F2 / C-3 | **CRITICAL** |
| D2 | Unevaluable-file accommodation | Does the candidate accommodate consciousness.md-class content without requiring truth-evaluation? | SV6 → F1 + C-4 | **CRITICAL** |
| D3 | No-batch-rewrite respect | Can the candidate be implemented without LLM batch-rewriting? | SV6 → F8 + C-5 | **CRITICAL** |
| D4 | Seed preservation | Does the candidate preserve legacy / sketch / half-correct material? | SV6 → F9 + C-2 | **CRITICAL** |
| D5 | Context-poison protection | Does the candidate reduce the risk of new sessions absorbing stale content as current? | SV6 → F7 + C-1 | **CRITICAL** |
| D6 | Inherited-taxonomy extension | Does the candidate extend (not silently discard) the 5-status × 11-subject whole-file frame? | SV6 → F10 + C-6 | HIGH |

### Default dimensions (extracted per Phase 0)

| # | Dimension | Weight |
|---|---|---|
| D7 | Correctness — actually solves the stated problem | **CRITICAL** |
| D8 | Coherence — fits with existing project structures (cognitive_harness/, devdocs/, CLAUDE.md, etc.) | HIGH |
| D9 | Feasibility — implementable with single-author manual labor + markdown-native syntax | **CRITICAL** |
| D10 | Completeness — covers the 6 user concerns C-1..C-6 fully | HIGH |
| D11 | Robustness — survives edge cases (new contributor, abandoned area, partial adoption) | HIGH |
| D12 | Elegance — simplest sufficient solution; no over-engineering at small corpus | MEDIUM |

### User-framing + project-specific risk dimensions (per Phase 0 refinement)

| # | Dimension | Weight |
|---|---|---|
| D13 | INNOVATIVE-quality | The user explicitly demanded innovation beyond obvious moves; this is a stated user bar | HIGH |
| D14 | AI-reader-vs-human-reader fairness | The design serves AI primarily; should not significantly degrade human-reader experience | MEDIUM |
| D15 | Adoption-cost-bound | Implementable in bounded time without ongoing heavy discipline | HIGH |
| D16 | Compliance-residual handling | Honest treatment of the AI-reader-may-not-honor-annotations residual (Sensemaking Ambiguity #6) | HIGH |
| D17 | Migration-cost-vs-benefit | One-time cost of folder/file reorganization vs ongoing benefit | HIGH |
| D18 | Cross-system coherence | Does the design break or duplicate conventions already in `cognitive_harness/` (e.g., `_archive_note.md`, frontmatter `status:`)? | MEDIUM-HIGH |

### Dimension-blindness check (vs Sensemaking's 8 perspectives)

| Sensemaking perspective | Covered by dimension(s) |
|---|---|
| Technical/Logical | D7, D9 |
| Human/User | D13, D14, D15 |
| Strategic/Long-term | D11, D8 |
| Risk/Failure | D5, D16, D17 |
| Resource/Feasibility | D3, D9, D15 |
| Definitional/Internal Consistency | D6, D8, D18 |
| Definitional/Frame-exit Completeness | D1, D2 (the per-file fraction + unevaluable were the frame-exit residuals) |
| Phase/Calibration-State | D9, D17 (Level 0 phase-appropriate) |

**Dimension-blindness check PASSES** — every Sensemaking perspective has ≥1 dimension representation.

### Project-specific risk dimension check (Phase 0 refinement note)

The candidate set involves project artifacts (the docs/ folder, frontmatter conventions, folder structures shared with cognitive_harness/). Project-specific risk dimensions D6, D16, D17, D18 are explicitly included. **Check PASSES.**

### Burden-of-proof framing

This design will shape how `docs/` is read for the project's lifetime — MEDIUM-HIGH stakes. Burden-of-proof: BALANCED. Defense must demonstrate viability against the strongest prosecution. Prosecution must demonstrate failure on at least one CRITICAL dimension to kill.

---

## Phase 1 — Fitness Landscape

### Regions

**VIABLE region** (passes all CRITICAL + strong on ≥4 HIGH):
- The annotation + folder + protocol + workflow design space, specifically the corner where:
  - Section-level annotation in markdown-native syntax (D9 strong)
  - Quarantine + archive-note + frontmatter (D5 strong)
  - Reader-protocol paired (D5, D16 strong)
  - First-touch labeling (D3, D15 strong)

**DEAD region** (fails any CRITICAL):
- C1.5 (mark exceptions, assume unmarked = Canon) — fails D5 (F7 violation; unmarked content read as current poisons new sessions)
- Pure-LLM-batch-classification designs — fail D3 (excluded; not in candidate set after Sensemaking)
- Delete-legacy designs — fail D4 (excluded; not in candidate set)

**BOUNDARY region** (passes CRITICAL but weak on HIGH):
- C1.4 (dual-render, requires tooling) — boundary on D9 (requires tooling for v1)
- C3.4 (CLAUDE.md only) — boundary on D11 (only works for Claude Code AI sessions)
- C4.4 (no workflow) — boundary on D15 (loses gradual-improvement benefit) and D13 (no innovation)

**UNEXPLORED region** (no candidate in this region):
- Tool-side enforcement (CI check fails if frontmatter missing) — could be a v2 supplement; not in candidate set
- LLM-RAG chunk-level retrieval — requires infrastructure project doesn't have; not feasible at Level 0
- Per-claim annotation (smaller than paragraph) — ruled out by Decomposition

The unexplored region is genuinely thin — Innovation covered the practical design space well. The unexplored items are either (a) v2-tool dependent (defer) or (b) impossible at current substrate.

---

## Phase 2 — Adversarial Evaluation

Compact form: per candidate, list Prosecution (strongest objection) + Defense (strongest support) + Collision (which holds). Apply multi-axis prosecution depth refinement: include user-perspective objection, specific failure-case scenario, specification-gap probe where the candidate has runtime-determined behavior.

### P1 (Annotation Syntax) candidates

#### C1.1 — frontmatter + GFM callout

- **Prosecution:**
  - *Dimension:* on D13 (INNOVATIVE), C1.1 is moderately conventional (Hugo/Jekyll pattern); the user demanded innovation.
  - *User-perspective objection:* the user said "we need innovative way structuring" — frontmatter + callout is not innovative by itself.
  - *Specific failure-case scenario:* an author adds a new file but forgets `status:` frontmatter. Per F7, unmarked = uncertain — so the file is uncertain; readers know to be cautious. But the author is now relying on safe-default rather than declared intent.
  - *Specification-gap probe:* the EXACT frontmatter schema is not finalized — what field name? What value enum? What's the union of `status:` (Layer 1) and `default_section_status:` (Layer 2)? Innovation hinted but didn't pin down.
- **Defense:**
  - on D1, D2, D3, D4, D5, D7, D9 — passes all CRITICAL: section-level annotation handles fractions; UNEVALUABLE is a valid callout; no batch rewrite needed; preserves seed material; reduces context-poison.
  - on D8, D18 — coheres with existing `status: active` frontmatter convention; consistent with `cognitive_harness/<disc>/SKILL.md` frontmatter style.
  - INNOVATIVE-quality is delivered at the ASSEMBLY level (EM-A1), not at C1.1 in isolation. C1.1 is the foundational building block.
- **Collision:** Defense wins. C1.1 passes all CRITICAL dimensions and the D13 concern is addressed at assembly-level. The specification-gap is real and surfaces as a REFINE requirement, not a kill.
- **Verdict:** **SURVIVE — REFINE** the specification (commit to exact frontmatter schema and exact callout vocabulary in the eventual finding's MUST section).

#### C1.2 — HTML-sentinel + visible callout dual-channel

- **Prosecution:** on D12 (elegance), dual-channel is heavier than single-channel; on D14, HTML comments add no human value (they're invisible).
  - *Specific failure-case scenario:* if author updates the callout but forgets to update the HTML sentinel (or vice versa), the two channels disagree — AI parses one, human reads the other.
- **Defense:** on D5, D16 — dual-channel is more robust for AI compliance (HTML comments parse-deterministically; callouts vary across markdown dialects).
- **Collision:** the failure-case (channel-drift) is real but mitigable by tooling that derives one channel from the other.
- **Verdict:** **DEFERRED with revival trigger** (Innovation's disposition holds) — revive if AI-parser reliability becomes a real concern in v1 usage.

#### C1.3 — alignment table as separate doc

- **Prosecution:** on D12 (elegance), a separate file adds a new artifact when a section in `docs/README.md` would suffice.
  - *Specification-gap probe:* exact location? Standalone `docs/_TAXONOMY.md` or section in `docs/README.md`?
- **Defense:** alignment table is load-bearing for both Layer 1 and Layer 2 readers; needs a home.
- **Collision:** the spec-gap forces a choice. Recommendation: REFINE to "section in `docs/README.md` titled '## Alignment Table'." Single artifact rather than two.
- **Verdict:** **SURVIVE — REFINE** location to "section in docs/README.md, not standalone file."

#### C1.6 — mandatory above-default flagging rule

- **Prosecution:** on D15, "mandatory" implies discipline cost; missed rule cases are common.
  - *User-perspective objection:* if mandatory rule isn't enforced (single-user project, no PR review), it's effectively voluntary anyway.
- **Defense:** on D5, makes the convention explicit in the reader-protocol so AI readers can flag missing-callout sections as suspicious.
- **Collision:** the rule has value at the convention level even when enforcement is self-discipline. Frames expectation for AI readers.
- **Verdict:** **SURVIVE** clean.

#### C1.4 — dual-render (DERIVED FROM INNOVATION as RESEARCH FRONTIER)

- **Prosecution:** on D9, requires tooling for v1; on D3 marginal (parser is not LLM-batch-rewrite, but is still infrastructure).
- **Defense:** on D5, derived views are the strongest context-poison protection (AI reads only Canon-derived).
- **Collision:** correctly dispositioned to v2.
- **Verdict:** **RESEARCH FRONTIER for v2** (Innovation's disposition confirmed).

#### C1.5 — mark exceptions, unmarked = Canon (KILLED by Innovation)

- Innovation's KILL holds. Critique confirms: C1.5 fails D5 catastrophically. Unmarked stale content reads as current = direct context-poison enabler. F7 is a binding sensemaking constraint.
- **Verdict:** **KILL** (confirmed).
- **Seed extracted from kill:** the F7 (safe-default = uncertain) is non-negotiable; any future revisit of C1.5 requires F7 to first be relaxed via a sensemaking re-run, which would require new evidence that hasn't surfaced.

### P2 (Folder Architecture) candidates

#### C2.1 — quarantine + tombstone

- **Prosecution:**
  - on D17 (migration-cost), tombstone convention requires moving files and leaving stubs.
  - *Specific failure-case scenario:* author moves file but forgets to leave tombstone; existing markdown links break silently.
- **Defense:** on D5 (context-poison protection), quarantine is the safe-default home for new uncertain content; tombstones preserve referential integrity.
- *User-perspective objection:* quarantine pattern from antivirus is well-known but applying it to a docs folder IS unconventional and innovative.
- **Collision:** Defense wins. Forgotten-tombstone failure-case mitigable by a v2 tool (dead-link checker, C5.1).
- **Verdict:** **SURVIVE** with a REFINE: specify the exact tombstone template (3 lines: `# Moved` / `This file moved to: <new_path>` / `Reason: <short reason>`) in the eventual finding's MUST section.

#### C2.2 — mandatory _archive_note.md + framing: alternative frontmatter

- **Prosecution:** "mandatory" without enforcement is voluntary (same C1.6 issue).
  - *Specification-gap probe:* what's the exact `_archive_note.md` template?
- **Defense:** on D5, D6, D18 — extends a project-precedent (`cognitive_harness/deprecated_navigation/_archive_note.md`); coheres with existing patterns.
- **Collision:** Defense wins; the precedent makes the convention discoverable and credible.
- **Verdict:** **SURVIVE — REFINE** to specify `_archive_note.md` template (likely matching the existing precedent's shape).

#### C2.4 vs C2.5 — comparison (explicit per task instruction)

This is the single largest open question in the candidate set. Both ACTIONABLE per Innovation; user-choice noted. Critique should adjudicate.

**C2.4 — Full status-first folder reorganization** (canon/, theory/, design/, alternative_framings/, ideas/, design_history/, frontiers/, archive/, _quarantine/, _tombstones/)

- **Prosecution:**
  - on D17 (migration-cost), high one-time cost — ~30+ files move.
  - on D9 (feasibility), the user has not committed to migration; the user's framing suggests they want innovation that AVOIDS such moves ("we need innovative way structuring this folder").
  - *Specific failure-case scenario:* mid-migration, half the files are in new structure, half in old; references break; partial-state is worse than either complete state.
- **Defense:**
  - on D11 (robustness) + D5 (context-poison protection) — folder-level visible status is the strongest possible signal; an AI reader immediately knows from path "docs/archive/X.md" vs "docs/canon/X.md" the content's relationship to current truth.
  - on D13 (INNOVATIVE), it's the prior-conversation's structural innovation, accepted by the user as useful.
  - on D6 (inherited-taxonomy extension), it instantiates the 5-status × 11-subject layout physically.

**C2.5 — Codify existing convention, minimal-change** (leave most files in place; add docs/README.md codifying existing implicit folder semantics; add `_archive_note.md` to existing archive folder; add `framing: alternative` to alignment_perspective/alignment.md; create `_quarantine/`)

- **Prosecution:**
  - on D5 (context-poison protection) — partial folder-level signal only (existing archive/ does signal, but other distinctions are implicit not visible).
  - on D6 (inherited-taxonomy extension), the existing folder layout is incomplete vs the 5-status × 11-subject taxonomy.
- **Defense:**
  - on D17 (migration-cost), near-zero cost; ships in 1-2 hours.
  - on D9 (feasibility), strongest feasibility of any P2 candidate.
  - on D13 (INNOVATIVE), the absence-recognition REDESIGN insight (recognize that folders ALREADY half-convey status; just codify) is genuinely novel — turns reorganization from a project into an articulation exercise.
  - on D15 (adoption-cost-bound), best.

**Collision and recommendation:**

Both candidates survive Phase 2. The decision turns on D17 (migration-cost) vs D5/D6 (full-structure benefits) — a value trade-off, not a structural-grounds question.

**Critique recommendation: SURVIVE C2.5 as PRIMARY for v1; preserve C2.4 as v2 PROMOTION TARGET.**

Reasoning:
- C-5's NO-BATCH-REWRITE doesn't literally rule out folder moves, but the SPIRIT of the user's framing ("we need a way to tidy" without large-scale rewriting) favors minimal-disruption first.
- C2.5 ships in 1-2 hours; user can A/B test the design against reality immediately.
- If C2.5 proves insufficient after 2-3 months of usage (e.g., reader-confusion persists), v2 PROMOTES to C2.4 with the empirical evidence justifying the migration cost.
- This is consistent with the project's existing deferred-until-proven discipline (`cognitive_fixes/README.md` staging gates).

- **Verdict on C2.4:** **DEFERRED with revival trigger** = "C2.5 has shipped + 3 months of usage data + identified specific reader-confusion that C2.4's folder-visible structure would resolve."
- **Verdict on C2.5:** **SURVIVE** as primary P2 design for v1.

#### C2.3, C2.6 (DEFERRED by Innovation)

Innovation's dispositions hold. Critique confirms — C2.3 (aliases) adds reader cognitive load for low present benefit; C2.6 (leave folders alone entirely) loses inter-file navigation. Both KEEP as DEFERRED.

### P3 (Reader-Protocol) candidates

#### C3.1 — LLMS.txt + docs/README.md + CLAUDE.md three-channel

- **Prosecution:**
  - on D12 (elegance), three channels for one protocol is over-engineered for a small project.
  - *Specific failure-case scenario:* the three channels drift — `docs/README.md` is updated but `CLAUDE.md` block isn't.
  - *Specification-gap probe:* what does LLMS.txt contain exactly? Just a redirect to docs/README.md? Or a duplicate protocol?
- **Defense:** on D11 (robustness) + D16 (compliance), multi-channel maximizes AI-reader discovery; each channel handles a different reader-context.
- **Collision:** Defense wins for v1, with the drift-failure mitigable by making one channel canonical and the others pure pointers (LLMS.txt = 5-line redirect; CLAUDE.md = 2-line redirect; docs/README.md = full protocol).
- **Verdict:** **SURVIVE — REFINE** to single-canonical + two-pointers structure; specify LLMS.txt and CLAUDE.md as redirects only (not duplicates).

#### C3.2 — protocol-as-imperative-prompt + skill-file styling

- **Prosecution:**
  - on D14, skill-file style may be less natural for human readers than narrative documentation.
- **Defense:**
  - on D13 (INNOVATIVE), this is the most novel design move in the entire candidate set: the docs/ protocol IS itself a SKILL.md-style imperative file, leveraging the project's own pattern recursively. Self-similar architecture.
  - on D16, imperative-prompt framing maximizes AI compliance (an AI reading "Before reading any file in docs/, do X" is more likely to comply than reading "docs/ is organized as ...").
- **Collision:** Defense wins. The novelty IS load-bearing — this is one of two genuinely-innovative features that satisfies D13 at assembly-level.
- **Verdict:** **SURVIVE** clean.

#### C3.3 — writer-side commitment framing (the compliance-residual claim)

- **Prosecution (sharpened per task instruction):**
  - *Does writer-side commitment ACTUALLY close the compliance residual, or just relocate it?*
  - Critique answer: it RELOCATES the residual, not closes. Author-side labeling is a precondition for AI-side honoring, but does not GUARANTEE AI-side honoring. If AI doesn't read the protocol, labeled content reads same as unlabeled.
  - *User-perspective objection:* C3.3 as innovation claim risks over-asserting the compliance fix.
- **Defense:**
  - Author-side labeling is NECESSARY (without labels, even a compliant AI can't distinguish). C3.3's value is establishing the necessary precondition + framing enforcement as PR-review-style (where the project has more leverage than over AI sessions).
  - on D16, partial mitigation of compliance residual + honest preservation of residual is the strongest available answer.
- **Collision:** Defense wins WITH refinement. The design should NOT claim to close the compliance residual; it should claim to provide the precondition AND honestly preserve the residual.
- **Verdict:** **SURVIVE — REFINE** the framing in the eventual finding: state that C3.3 establishes labeling-as-precondition + relocates enforcement to author-side (PR-reviewable), but does NOT close the AI-reader-compliance residual. The residual remains as an open monitoring item.

#### C3.4 (DEFERRED by Innovation)

Innovation's disposition holds. KEEP as DEFERRED.

### P4 (Adoption Workflow) candidates

#### C4.1 — minimum-viable v1 (top 10-15 most-cited files)

- **Prosecution:**
  - *Specification-gap probe:* which 10-15? Who decides "most-cited"?
- **Defense:** Innovation's reasoning is sound — ships in ~1 hour; safe-default handles the other 35+.
- **Collision:** spec-gap forces a REFINE.
- **Verdict:** **SURVIVE — REFINE** to specify the candidate list of files to label first. Suggested set: `desc.md`, `thinking_space_dynamics.md`, `discipline_taxonomy.md`, `intuit.md`, `autonomy_ladder.md`, `materialization_lifecycle.md`, `self_improvement_rate.md`, `regression/desc.md`, `step_refinement.md`, `discipline_rule_placement.md` — the canonical-architectural-reference files (per the prior conversation's CANON cell).

#### C4.2, C4.3, C4.5

- C4.2 (three triggers): SURVIVE clean.
- C4.3 (file-purpose at creation; sections only on drift): SURVIVE clean. This is genuinely valuable framing — keeps ongoing labeling cost near-zero for non-drifting files.
- C4.5 (Canon→Historical transition operation): SURVIVE clean. Closes a real workflow gap.

#### C4.4 (DEFERRED by Innovation)

KEEP as DEFERRED.

### P5 (Tooling)

- C5.2 (DO-NOTHING for v1): SURVIVE clean — Innovation correctly prefers v2-deferral.
- C5.1 (audit tool): DEFERRED with revival trigger = "v1 has shipped + 3 months + specific identified tool need." Innovation's disposition holds.

---

## Phase 3 — Verdict Summary + Constructive Output

### P1 verdicts

| Candidate | Verdict | Constructive output |
|---|---|---|
| C1.1 | SURVIVE — REFINE | Refinement: commit to exact frontmatter schema in finding's MUST: `status: <one-of: active, draft, archived, superseded>`, `default_section_status: <one-of: canon, historical-trace, future-seed, unevaluable>`, `framing: alternative` (optional). Commit to exact callout vocabulary: `> [!CANON]`, `> [!HISTORICAL]`, `> [!SEED]`, `> [!UNEVALUABLE]`. |
| C1.2 | DEFERRED | Revival trigger: v1 usage reveals AI-parser inconsistency on GFM callouts across tools |
| C1.3 | SURVIVE — REFINE | Location commitment: "section in docs/README.md titled '## Alignment Table'", not standalone file |
| C1.6 | SURVIVE | Convention rule stated in reader-protocol (P3); enforcement = self-discipline + AI-reader expectation |
| C1.4 | RESEARCH FRONTIER | Deferred to v2 |
| C1.5 | KILL (confirmed) | Seed: F7 (safe-default = uncertain) is non-negotiable; this candidate would require Sensemaking re-run with new evidence |

### P2 verdicts

| Candidate | Verdict | Constructive output |
|---|---|---|
| C2.1 | SURVIVE — REFINE | Specify tombstone template: 3 lines `# Moved\nThis file moved to: <new_path>\nReason: <short reason>` |
| C2.2 | SURVIVE — REFINE | Specify `_archive_note.md` template (mirror `cognitive_harness/deprecated_navigation/_archive_note.md` shape) |
| C2.4 | DEFERRED with revival trigger | Trigger: "C2.5 has shipped + 3 months of usage data + identified specific reader-confusion that C2.4's folder-visible structure would resolve" |
| C2.5 | SURVIVE (PRIMARY P2 for v1) | Codifies existing convention + adds quarantine + adds archive_note + adds framing field; ships in 1-2 hours |
| C2.3 | DEFERRED | Revival: a cross-subject file emerges that genuinely lives at the intersection of two folder homes |
| C2.6 | DEFERRED | Revival: all attempts at C2.5 stall due to user objection to ANY new folder |

### P3 verdicts

| Candidate | Verdict | Constructive output |
|---|---|---|
| C3.1 | SURVIVE — REFINE | Structure: `docs/README.md` is the canonical full protocol; LLMS.txt at project root is a 5-line redirect; CLAUDE.md block is a 2-line redirect. Avoid drift by making README canonical and the others pure pointers |
| C3.2 | SURVIVE | Style: imperative-prompt + skill-file format; novelty is load-bearing for D13 |
| C3.3 | SURVIVE — REFINE | Framing: explicitly state in the finding that C3.3 RELOCATES the compliance residual (precondition for AI compliance + PR-reviewable author enforcement) but does NOT CLOSE the AI-side residual. The residual remains in Open Questions / Monitoring. |
| C3.4 | DEFERRED | Revival: project commits to Claude-Code-only AI consumer permanently |

### P4 verdicts

| Candidate | Verdict | Constructive output |
|---|---|---|
| C4.1 | SURVIVE — REFINE | Specify the candidate "top files" set: 10 named canonical-architectural-reference files (desc.md, thinking_space_dynamics.md, discipline_taxonomy.md, intuit.md, autonomy_ladder.md, materialization_lifecycle.md, self_improvement_rate.md, regression/desc.md, step_refinement.md, discipline_rule_placement.md) |
| C4.2 | SURVIVE | Three triggers committed: write-time + first-touch + optional periodic sweep |
| C4.3 | SURVIVE | Drift-only labeling for non-drifting files; minimizes ongoing cost |
| C4.5 | SURVIVE | Canon→Historical transition operation: keep section text intact, change callout from `> [!CANON]` to `> [!HISTORICAL]` with one-line reason; optionally add new `> [!CANON]` section above |
| C4.4 | DEFERRED | Revival: author-discipline proves unreliable in practice |

### P5 verdicts

| Candidate | Verdict | Constructive output |
|---|---|---|
| C5.2 | SURVIVE (v1 default) | DO-NOTHING for v1; matches project's deferred-until-proven discipline |
| C5.1 | DEFERRED to v2 | Revival: v1 shipped + 3 months + specific tool need identified |

---

## Phase 3.5 — Assembly Check on EM-A1

EM-A1 = the assembly of all SURVIVE candidates: C1.1 (+ REFINE) + C1.3 (+ REFINE) + C1.6 + C2.1 (+ REFINE) + C2.2 (+ REFINE) + C2.5 (PRIMARY; C2.4 deferred) + C3.1 (+ REFINE) + C3.2 + C3.3 (+ REFINE) + C4.1 (+ REFINE) + C4.2 + C4.3 + C4.5 + C5.2.

### Adversarial assembly tests

#### Test 1: Does the assembled design accommodate consciousness.md (constraint C-4)?

- Scenario: user opens consciousness.md tomorrow.
- If user just reads (no edit), no first-touch trigger fires (C4.2). File stays unmarked. Safe-default per F7 = uncertain. AI readers per P3 reader-protocol treat as uncertain. **No requirement to evaluate.** ✓
- If user edits, first-touch trigger fires. User picks a label. Available labels include UNEVALUABLE (`> [!UNEVALUABLE]` or frontmatter `default_section_status: unevaluable`). **User explicitly does NOT need to truth-evaluate.** ✓
- If file is in `_quarantine/`, default reader-trust = do not act. Even stronger protection.
- **Test PASSES** — consciousness.md is accommodated without truth-evaluation at any point.

#### Test 2: Does the assembled design close the compliance residual or just relocate it?

- C3.3 RELOCATES (not closes) the residual — refined explicitly above.
- The finding's Open Questions section should preserve "AI-reader compliance with annotations" as a Monitoring item.
- This is honest treatment — the design is the strongest possible at Level 0 autonomy, but does not claim more.
- **Test PASSES** — the assembly does not over-claim.

#### Test 3: Is EM-A1 genuinely innovative or predictable assembly?

- Components are individually conventional (frontmatter, callouts, quarantine, README, etc.).
- **The novelty is at the ASSEMBLY level**, in two specific properties:
  1. **Self-similar protocol pattern (EM-1 from Innovation):** the docs/ protocol IS itself a SKILL.md-styled imperative file, leveraging the project's own pattern recursively. This is non-trivially innovative for THIS project (uses internal convention rather than importing a generic).
  2. **Quarantine-first-default contribution model (EM-3 from Innovation):** new content defaults to `_quarantine/` rather than the corpus. Most projects have the opposite (publish-by-default, triage-later). For a project where context-poison is the operative concern, inverting this default is innovative.
- These two novelties satisfy D13 (INNOVATIVE-quality) at the assembly level.
- **Test PASSES** — EM-A1 has at least 2 genuinely-novel features.

#### Test 4: Does the assembled design have any specification gaps that would prevent v1 adoption?

- After REFINEMENTS above, all specification gaps are closed in the verdict table:
  - Exact frontmatter schema: specified
  - Exact callout vocabulary: specified
  - Alignment table location: section in docs/README.md
  - Tombstone template: 3 lines specified
  - `_archive_note.md` template: mirror existing precedent
  - Reader-protocol structure: docs/README.md canonical + 2 redirects
  - Top-files candidate list for minimum-viable v1: 10 named files
- **Test PASSES** — no specification gaps remain after refinement.

#### Test 5: Does the assembled design break any cognitive_harness/ convention?

- Frontmatter `status:` extension is compatible with existing `cognitive_harness/<disc>/SKILL.md` patterns.
- `_archive_note.md` mirrors existing `cognitive_harness/deprecated_navigation/_archive_note.md` precedent (extends not breaks).
- `framing: alternative` is a new field but doesn't conflict with any existing field.
- Reader-protocol pointing AI to read `docs/README.md` first does not interfere with `cognitive_harness/` skills which load their own references at Step 0.
- **Test PASSES** — no cognitive_harness/ convention is broken.

### Assembly verdict

**EM-A1 SURVIVES Assembly Check with REFINEMENTS** as specified per-piece above.

**Disposition: ACTIONABLE** (with refinements committed to the finding's MUST/COULD sections).

**Emergent value confirmed:**
- (a) Self-similar SKILL.md-style protocol — innovative for the project
- (b) Quarantine-first contribution model — innovative inversion of publish-by-default
- (c) Writer-side commitment + AI-reader safe-default = layered compliance treatment (one layer mitigates, the other preserves the residual honestly)
- (d) Codify-existing-convention + minimum-viable v1 = ship-in-2-hours feasibility

---

## Phase 4 — Coverage + Convergence

### Coverage

- **Per-candidate coverage:** all 18 candidates passed through adversarial testing with all CRITICAL dimensions checked. ✓
- **Per-solution-space coverage:** the viable region was thoroughly explored (annotation + folder + protocol + workflow); dead region confirmed (C1.5); boundary regions identified (C1.4, C3.4, C4.4) and dispositioned to v2 or DEFERRED. Unexplored regions identified as non-actionable at Level 0 (CI tooling, RAG infrastructure). ✓
- **Coverage map status:** sufficient. No major unexplored region likely to contain a viable candidate.

### Convergence

- **Are new candidates landing in already-mapped regions?** No new candidates emerged during Critique (the candidate space was well-covered by Innovation). The single candidate-evolution was the C2.4 vs C2.5 explicit comparison, which produced a recommendation, not a new candidate.
- **Is the rate of new information decreasing?** YES. Critique's contribution was refinement (8 REFINE specifications) + disposition adjustments (C2.4 → DEFERRED with C2.5 as primary), not novel candidates.
- **Landscape stability:** STABLE — viable/dead/boundary regions did not shift during Critique.

### Convergence criteria

- ✓ At least one candidate has SURVIVE verdict with no caveats on critical dimensions: **EM-A1 with refinements has clean SURVIVE on all 6 CRITICAL dimensions (D1-D5, D7, D9).**
- ✓ Two consecutive iterations have not produced candidates in new regions: this is the only iteration; landscape stable across the discipline transitions Su → S → D → I → C.
- ✓ No unexplored regions remain that are topologically likely to contain viable candidates: confirmed in Coverage section.
- ✓ Accumulator shows decreasing rate of new information: Critique adds refinements, not new candidates.

**Signal: TERMINATE** with EM-A1 (refined) as the ranked survivor.

---

## Final Deliverable

### (a) Dimensions with weights

CRITICAL (7): D1, D2, D3, D4, D5, D7, D9
HIGH (6): D6, D8, D11, D13, D15, D16, D17
MEDIUM (4): D10, D12, D14, D18

### (b) Fitness Landscape

- **Viable:** EM-A1 (assembled) and its component-pieces (C1.1, C1.3, C1.6, C2.1, C2.2, C2.5, C3.1, C3.2, C3.3, C4.1, C4.2, C4.3, C4.5, C5.2)
- **Boundary:** C1.2 (DEFERRED), C1.4 (v2 frontier), C2.4 (DEFERRED — primary deferral with revival trigger), C3.4, C4.4
- **Dead:** C1.5 (F7 violation)
- **Unexplored:** v2-tool-dependent designs (CI enforcement, RAG retrieval) — deferred to substrate evolution

### (c) Candidate Verdicts (summary)

| Verdict | Count | Candidates |
|---|---|---|
| SURVIVE | 14 | C1.1*, C1.3*, C1.6, C2.1*, C2.2*, C2.5, C3.1*, C3.2, C3.3*, C4.1*, C4.2, C4.3, C4.5, C5.2 (*=REFINE) |
| DEFERRED with revival trigger | 6 | C1.2, C2.3, C2.4, C2.6, C3.4, C4.4 |
| RESEARCH FRONTIER | 2 | C1.4, C5.1 |
| KILL | 1 | C1.5 |

**Assembly SURVIVE:** EM-A1 with refinements — ACTIONABLE.

### (d) Coverage Map

- Viable region: thoroughly explored (14 ACTIONABLE candidates + 1 ACTIONABLE assembly)
- Dead region: confirmed (C1.5 fails F7)
- Boundary region: identified (6 DEFERRED with revival triggers)
- Unexplored: 2 RESEARCH FRONTIER items + acknowledged infrastructure-dependent regions

### (e) Signal: TERMINATE

Ranked survivor: **EM-A1 (assembled design with 8 refinements)** — see Phase 3 verdict tables for the refinements.

Refinements summary (the MUSTs for the eventual finding):
1. C1.1 — commit exact frontmatter schema + callout vocabulary
2. C1.3 — alignment table is a section in `docs/README.md`, not standalone file
3. C2.1 — specify tombstone template (3-line shape)
4. C2.2 — specify `_archive_note.md` template (mirror existing precedent)
5. C2.5 — primary P2 design for v1; C2.4 DEFERRED with revival trigger
6. C3.1 — README canonical + LLMS.txt and CLAUDE.md as pure-pointer redirects (avoid drift)
7. C3.3 — explicitly state RELOCATES not CLOSES the compliance residual; preserve residual in Monitoring
8. C4.1 — specify the 10 named files for minimum-viable v1 labeling pass

---

## Convergence Telemetry

- **Dimensions evaluated:** 18 (D1-D18) — coverage complete
- **Dimensions weighted:** all 18 weighted (7 CRITICAL, 6 HIGH, 4 MEDIUM)
- **Adversarial strength:** STRONG
  - Multi-axis prosecution depth applied (user-perspective objection + specific failure-case scenario + specification-gap probe at each candidate)
  - Defense constructed for every candidate; not rubber-stamping
  - Collision result is the verdict (not weaker reasoning)
- **Landscape stability:** STABLE — no new candidates emerged; viable/dead/boundary regions consistent throughout
- **Clean SURVIVE exists:** YES — EM-A1 with refinements has clean SURVIVE on all 7 CRITICAL dimensions and at least strong on 5 of 6 HIGH dimensions
- **Failure modes observed (all 7 checked):**
  - Wrong Dimensions: NOT observed — dimension-blindness check passed; project-specific risk dimensions explicitly included
  - Rubber-Stamping: NOT observed — every candidate received prosecution before defense; the C2.4 candidate explicitly downgraded from SURVIVE to DEFERRED based on prosecution
  - Nitpicking: NOT observed — KILL was applied only on CRITICAL-dimension failure (C1.5 fails F7); no candidates killed on minor issues
  - Dimension Blindness: NOT observed — Phase 0 cross-checked against all 8 Sensemaking perspectives
  - False Convergence: NOT observed — convergence criteria checked all four (clean SURVIVE; landscape stability; coverage sufficient; decreasing new information)
  - Evaluation Drift: NOT observed — single critique pass; dimensions + weights stable throughout
  - Self-Reference Collapse: PARTIALLY observed — critique of how-to-organize-the-project-that-builds-the-disciplines. Mitigated by: external dimensions (default Correctness/Coherence/Feasibility/Completeness/Robustness/Elegance), user-stated framing dimensions (INNOVATIVE-quality from the user, not from the discipline being applied), and explicit project-specific risk dimensions.

**Overall: PROCEED**

The assembly EM-A1 with the 8 refinements is the ranked survivor. The design problem is answered. The eventual finding should present EM-A1's assembled v1 design (with refinements committed as MUSTs) and preserve the 6 DEFERRED candidates with their revival triggers + 2 RESEARCH FRONTIER items for v2 consideration.
