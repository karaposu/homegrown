# Innovation — Cheap Coverage Boost for /explore (Ship-Now)

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-13_07-39__cheap_coverage_boost_for_explore_now/_branch.md`

Input: `_branch.md` + `exploration.md` + `sensemaking.md` + `decomposition.md`. Generate concrete spec-edit text for each piece (P1-P5). Apply project-specific risk dimensions and axis coverage check (4 axes: wording stringency, placement, tool-fallback breadth, telemetry detail).

---

## Seed

Each of the 5 decomposition pieces needs concrete shippable text. The seed is a Question type ("what wording, exactly?") with a strong Constraint (user said "simple AND for-sure AND extra-context-OK"). The mandate language must be MUST, not SHOULD; the fallback chain must be deterministic; the opt-out must be honest about when to use it. No new design; concrete materialization of the sensemaking + decomposition decisions.

---

## Phase 2 — Generation (concrete spec-edit text per piece)

### P1.1 — The MUST-sentence for A1

Mechanisms: Constraint Manipulation (minimum-words still-mandate), Lens Shifting (existing spec's MUST-language style).

**P1.1-A (generic — full hard-mandate text):**

> *"**Filesystem-listing pre-scan (artifact mode).** In artifact mode, `/explore` MUST run a deterministic filesystem-listing call before the first scan-signal-probe cycle. The listing's output becomes boundary input for that cycle. The mandate fires unconditionally except when `skip-listing: true` is declared at Step 0 (see below). This is a hard mandate, not a default: the bash call is part of the run, not an inference the LLM can skip."*

- Wording stringency: MUST
- Placement: as a new sub-section in §3.3 boundary-discovery
- ~50 words

**P1.1-B (focused — minimum-words version):**

> *"In artifact mode, `/explore` MUST run a filesystem listing before the first scan (see fallback chain below). The listing is boundary input for the cycle. The mandate is bypassed only when `skip-listing: true` is declared at Step 0."*

- Same wording stringency (MUST)
- Same placement
- ~35 words; tighter

**P1.1-C (contrarian — soft default, KILLed):**

> *"In artifact mode, `/explore` SHOULD run a filesystem listing before the first scan, recording the chosen invocation in telemetry."*

- Wording stringency: SHOULD (soft default)
- Disposition: KILL — fails the sensemaking's "for sure" requirement. Seed: the structural argument is that "for sure" maps to MUST, not SHOULD.

---

### P1.2 — Tool-fallback chain

Mechanism: Combination of bash invocations + existing project tool patterns.

**Final text:**

> *"**Tool-fallback chain.** Try in order; first successful invocation wins. The runner records which invocation ran in telemetry.*
> 
> *1. `tree -L 3 .` — depth-limited; concise; preferred when available.*
> *2. `git ls-files | head -200` — project-tracked files only; clean boundary for repos.*
> *3. `find . -type f -not -path '*/\.*' -not -path '*/node_modules/*' -not -path '*/.venv/*' | head -200` — catch-all when no git.*
> *4. `ls -R` — last resort; least readable but always present.*
> 
> *If the inquiry's `_branch.md` provides an explicit listing path (e.g., a specific subfolder to scan), prepend that path's listing."*

- Tool-fallback breadth: 4 entries (axis coverage: 4 is the recommended)
- Explicit ordering + winning criterion
- Edge-case: explicit listing path

---

### P1.3 — Trigger condition

Brief; settled in decomposition.

**Final text:**

> *"**Trigger.** The mandate fires when `territory-type-mode: artifact` (per §3.1 Step 0 declarations). Possibility-mode runs do not invoke the listing — the mandate has no meaningful target in a conceptual territory."*

---

### P1.4 — `skip-listing: true` opt-out

Mechanism: Inversion — what failure modes need to be prevented?

**Inversion analysis:**
- Flag missing: mandate fires; default behavior. OK.
- Flag set to `false`: same as missing. OK.
- Flag set to `true` for a real filesystem territory: user opts out of coverage they need. **Bad outcome**, but legitimate user choice.
- Flag set to `true` for a non-filesystem artifact territory (log archive, document corpus, etc.): correct use. OK.
- Flag set to `true` without justification: silent coverage degradation.

**Final text (addresses each failure mode):**

> *"**Opt-out (`skip-listing: true`).** In rare cases the territory is artifact-mode but doesn't map to a filesystem tree (log archives, document corpora with non-path identifiers, raw data dumps without directory structure, etc.). For such cases, declare `skip-listing: true` in the inquiry's `_branch.md` Step 0 declarations together with a one-line `skip-listing-reason` field explaining why the listing wouldn't help.*
> 
> *The mandate is bypassed; telemetry records `boundary_listing_invocation: skipped` and `skip_listing_reason: <reason>`.*
> 
> *If `skip-listing: true` is set without a `skip-listing-reason`, or set for a territory whose Question explicitly names a filesystem path, the runner SHOULD print a warning but proceed."*

- Explicit use case (non-filesystem artifact)
- Required justification field
- Telemetry impact preserved
- Light enforcement against silent misuse

---

### P1.5 — Tool-call telemetry (D1 bundled)

**Final text:**

> *"**Telemetry.** Two new fields in §5.3 base metrics:*
> *— `boundary_listing_invocation` ∈ {`tree-L3`, `git-ls-files`, `find`, `ls-R`, `skipped`} — which invocation ran (or `skipped` if opt-out applied).*
> *— `boundary_listing_items_count` — integer count of files in the listing output (0 if skipped).*
> *— `skip_listing_reason` (only when `boundary_listing_invocation: skipped`) — the one-line reason from the opt-out flag.*
> 
> *Together these make the mandate auditable: a reader of the inquiry's exploration output can verify the listing happened and roughly how broad the territory was."*

- Telemetry detail: 3 fields total (axis coverage)
- Audit-friendly

---

### P1.6 — Worked example

Mechanism: Domain Transfer from existing `/explore` spec examples.

**Final text:**

> *"**Worked example.** A codebase-reading run in artifact mode declares Step 0 as: `territory-type-mode: artifact`; `entry-point: frontier-first`; `expected: ~15 items`; `depth-level: D2`.*
> 
> *The runner first executes `tree -L 3 .` and succeeds (87 entries). Telemetry: `boundary_listing_invocation: tree-L3`; `boundary_listing_items_count: 87`. The 87 entries become boundary input for the first scan. The scan surfaces ~12 items at D2 (filtering out non-relevant entries; clustering related ones).*
> 
> *Coverage is now auditable post-hoc: a reader can answer 'which of the 87 entries didn't make it onto the 12-item inventory, and why?' Without the pre-scan, that question is unanswerable — the inventory floats free of any ground truth."*

- Concrete numbers (87 → 12)
- Names the audit benefit explicitly

---

### P2 — B1 (optional adjunct)

Mechanism: Combination (extends Scan component with read-mandate).

**Final text:**

> *"**Minimum-N file reads (optional, artifact mode).** When `/explore` runs in artifact mode AND the inquiry needs depth-coverage in addition to breadth-coverage (per the filesystem-listing pre-scan in §3.3), the Scan component MAY be configured to read ≥N actual files during the coarse pass (not just list them). N scales with the declared `expected`:*
> 
> *| `expected` | Recommended N |*
> *|---|---|*
> *| ~10 items (coarse) | 5 |*
> *| ~50 items (medium) | 10 |*
> *| ~200 items (fine) | 20+ |*
> 
> *Read-selection rule:*
> *1. If signal detection has flagged high-relevance items, read those first (up to N).*
> *2. Otherwise, read the first N items from the filesystem listing (per §3.3 pre-scan above).*
> 
> *Telemetry (added to §5.3): `read_set` (list of file paths read); `read_set_count` (integer).*
> 
> *This adjunct primarily improves CONCEPT mapping coverage (per the kinds-of-mapping typology in §1.7), complementing the filesystem-listing pre-scan's LAYOUT mapping coverage. Enable when the inquiry's question requires understanding file CONTENTS, not just their existence."*

- Wording stringency: MAY (optional adjunct)
- Tabular N-scaling
- Selection rule explicit
- Cross-references the kinds-of-mapping typology from the prior identity-refresh finding

---

### P3 — Section placement decisions

**Final placement table:**

| Piece | Recommended placement | Reason |
|---|---|---|
| A1 (mandate + chain + trigger + opt-out + telemetry + example) | Extension to §3.3 boundary-discovery sub-phase | A1 IS a form of boundary-discovery for filesystem territories; natural placement. Resolves the hidden coupling from decomposition (two trigger paths now explicit). |
| B1 (optional adjunct) | New refinement note at §2.1 Scan component | B1 is a property of how Scan operates; refinement-note pattern matches existing project conventions. |
| Telemetry fields | Extension to §5.3 base metrics | Standard place for telemetry; existing section just gets new fields appended. |

---

### P4 — Deferred items list (finding-level)

**Final text (for finding's DEFERRED section):**

> *- **C1 — Default boundary-discovery in artifact mode.** Revival trigger: A1 ships and proves insufficient for non-filesystem-mappable artifact territories.*
> *- **C5 — Mandatory surround-layer scan with checkable evidence.** Revival trigger: post-A1 telemetry shows surround-layer rule (§3.7) still being skipped in 2+ inquiries.*
> *- **C6 — Post-convergence negative-space audit.** Revival trigger: category-level miss patterns observed in 2+ inquiries after A1 ships.*
> *- **E1-from-exploration — D0-prohibition structural check.** Revival trigger: D0-level items observed in 2+ recent `/explore` outputs.*
> *- **F1 — Read past `/explore` outputs for similar inquiries.** Revival trigger: corpus reaches 5+ similar inquiries available.*
> *- **B1 — Minimum-N file reads** (if not shipped together with A1). Revival trigger: A1 ships and the user reports needing concept-coverage in addition to layout-coverage.*

---

### P5 — Relationship declarations (finding-level)

**Frontmatter:**

```yaml
status: active
related:
  - devdocs/inquiries/2026-05-13_06-30__explore_canonical_coverage_via_staged_iteration/finding.md
  - devdocs/inquiries/2026-05-13_07-16__is_mapping_required_core_of_explore/finding.md
```

**Body section ("Relationship to prior findings"):**

> *"This finding is RELATED to two prior findings — not REFINES, SUPERSEDES, or CORRECTS.*
> 
> *Relative to the canonical-coverage finding (`devdocs/inquiries/2026-05-13_06-30__explore_canonical_coverage_via_staged_iteration/finding.md`): the mandatory filesystem-listing pre-scan helps canonical-source surfacing as a SIDE EFFECT (the LLM is forced to see the territory more thoroughly), but does NOT replace that finding's canonical-source registry mechanism. The registry is the upstream layer (inquiry-framing time); this finding's pre-scan is downstream `/explore` mechanism. Compatible: when the prior finding's `/staged-explore` runner ships, each staged `/explore` call invokes the pre-scan independently — they compound rather than conflict.*
> 
> *Relative to the identity-refresh finding (`devdocs/inquiries/2026-05-13_07-16__is_mapping_required_core_of_explore/finding.md`): the pre-scan is operational mechanism; the identity-refresh was spec-language. No conflict. Using that finding's vocabulary, the pre-scan primarily improves **layout mapping** coverage (per the seven-kinds typology); the optional B1 adjunct primarily improves **concept mapping** coverage."*

---

## Phase 3 — Test (5-test cycle on front-runners)

### P1.1-B (focused minimum-words mandate)

| Test | Verdict | Reasoning |
|---|---|---|
| Novelty | Materializing-novel | The exact sentence is new; encodes sensemaking's "for sure → MUST" resolution |
| Scrutiny survival | PASS | Strongest objection: "MUST is too strong; SHOULD is enough." Response: sensemaking explicitly ruled SHOULD insufficient on the "for sure" axis. |
| Fertility | HIGH | The mandate enables P1.2 (chain), P1.4 (opt-out), P1.5 (telemetry) to compose cleanly |
| Actionability | HIGH | ~3 minutes to drop into the spec |
| Mechanism independence | YES | Reached via Constraint Manipulation (minimum words) AND Lens Shifting (existing spec MUST-language style) |

**Disposition:** ACTIONABLE.

### P1.1-A (generic full-form mandate)

**Disposition:** DEFERRED with revival trigger ("if P1.1-B feels too compressed for new readers of the spec, use P1.1-A's fuller form").

### P1.1-C (soft-default SHOULD version)

**Disposition:** KILL. Fails the "for sure" structural requirement.

### P1.2 (tool-fallback chain)

| Test | Verdict | Reasoning |
|---|---|---|
| Novelty | MEDIUM | Standard bash invocations; the chain ordering + winning criterion is novel for `/explore` |
| Scrutiny survival | PASS | Strongest objection: "what if NONE of the four succeed?" Response: in any environment Claude Code runs, at least `ls -R` is available. The chain is exhaustive for practical environments. |
| Fertility | HIGH | Enables environment-portability without spec-rewrites |
| Actionability | HIGH | ~5 minutes to drop in |
| Mechanism independence | YES | Combination + Lens Shifting (clean environment-adaptive pattern) |

**Disposition:** ACTIONABLE.

### P1.4 (opt-out specification)

| Test | Verdict | Reasoning |
|---|---|---|
| Novelty | MEDIUM-HIGH | The required-justification + warning pattern is new |
| Scrutiny survival | PASS | Strongest objection: "the warning isn't strong enough — users will set the flag without reason and not see the warning." Response: the warning is observable in the run output; the telemetry records the (absent) reason; combining both makes silent misuse rare. |
| Fertility | MEDIUM | Standard opt-out pattern; doesn't open new territory |
| Actionability | HIGH | ~3 minutes to drop in |
| Mechanism independence | YES | Inversion (failure-mode prevention) AND Constraint Manipulation (required reason) |

**Disposition:** ACTIONABLE.

### P1.5 (telemetry fields)

**Disposition:** ACTIONABLE (3 fields; small, well-defined).

### P1.6 (worked example)

| Test | Verdict | Reasoning |
|---|---|---|
| Novelty | LOW | Standard example pattern from existing spec |
| Scrutiny survival | PASS | Concrete numbers (87 → 12); names the audit benefit |
| Fertility | MEDIUM | Helps future spec readers understand the mandate |
| Actionability | HIGH | ~5 minutes to draft |

**Disposition:** ACTIONABLE.

### P2 (B1 optional adjunct)

| Test | Verdict | Reasoning |
|---|---|---|
| Novelty | MEDIUM | Read-mandate at the Scan component is novel; the N-scaling table is novel |
| Scrutiny survival | PASS | Strongest objection: "MAY is too soft; users will just skip it." Response: B1 IS optional by design; the user explicitly accepted A1 as primary with B1 as adjunct. MAY-language correctly signals "use when you need it." |
| Fertility | HIGH | Cross-references the prior identity-refresh finding's typology; opens path to concept-coverage improvement |
| Actionability | HIGH | ~10 minutes to drop in (slightly larger than A1 sub-pieces) |
| Mechanism independence | YES | Combination AND Lens Shifting (under "concept mapping" frame from prior finding) |

**Disposition:** ACTIONABLE (as optional adjunct).

---

## Phase 3.5 — Assembly Check

After 5-test cycle, surviving candidates:

- P1.1-B (mandate text, minimum-words)
- P1.2 (tool-fallback chain)
- P1.3 (trigger condition)
- P1.4 (opt-out with required reason)
- P1.5 (telemetry fields, 3 of them)
- P1.6 (worked example)
- P2 (B1 optional adjunct)
- P3 (placement decisions; see table)
- P4 (deferred items list)
- P5 (relationship declarations)

### Assembly: "Filesystem Pre-Scan Mandate v1"

The 10 survivors compose into a single coherent enhancement:

```
homegrown/explore/references/explore.md (existing)
   ↓ updated
homegrown/explore/references/explore.md (v-after)
   §2.1  → B1 refinement note (optional MAY-clause for concept-coverage)
   §3.3  → extended with A1 mandate (P1.1-B + P1.2 + P1.3 + P1.4 + P1.6)
   §5.3  → telemetry fields added (P1.5)
   
And in this inquiry's eventual finding:
   frontmatter → P5 related: entries
   ## DEFERRED → P4 list with 6 entries
   ## Relationship to prior findings → P5 body text
```

### Assembly Emergent Properties

**E1: Compound coverage benefit.** A1 (P1) covers layout mapping (the LLM can't miss what's in the listing). B1 (P2) covers concept mapping (the LLM is forced to read actual files). Together they address both major coverage axes from the prior identity-refresh finding's typology.

**E2: Uniform telemetry section.** A1 adds 3 fields; B1 adds 2 more if shipped. All in §5.3 base metrics. One section grows; no scattered additions.

**E3: Coherent narrative for the spec reader.** A new spec reader encounters: §1.7 (kinds of mapping — from prior finding) → §2.1 (Scan component with optional read-mandate refinement) → §3.3 (boundary-discovery with mandatory pre-scan) → §5.3 (telemetry making both auditable). The spec tells a coherent story.

**E4: A1 alone is the minimum-sufficient ship.** Per the user's "simple" constraint. B1 is optional; the user can ship A1 today (≈30 min) and add B1 later if needed (≈15 min more).

### Project-specific risk dimensions check

| Risk dimension | Assembly exposure | Notes |
|---|---|---|
| **Duplicate-derivable-state** | LOW | All new fields are new; no duplication with existing spec state. |
| **Operation-parsimony** | STRONG | A1 alone is the minimum sufficient (~30 min spec edit). B1 is opt-in. |
| **Phase-fit** | PASS | L0-L1 appropriate; matches `nav_north_star.md` manual-v1 doctrine. |
| **Explicit-culture-fit** | PASS | Uses MUST/SHOULD/MAY consistently with project conventions. Aligns with disciplines/runners separation (no new runner needed). |

---

## Phase 3.5 — Axis Coverage Check

The four axes specified:

| Axis | Values present in assembly |
|---|---|
| **(a) Wording stringency** | MUST (A1 mandate); SHOULD (warning on flag-without-reason); MAY (B1 optional). All three values. |
| **(b) Placement** | §3.3 (A1 mandate); §2.1 (B1 refinement note); §5.3 (telemetry). Three placements. |
| **(c) Tool-fallback breadth** | 4 entries (tree → git ls-files → find → ls -R). |
| **(d) Telemetry detail** | 3 fields for A1; 2 more for B1 (if shipped). Total 2-5 fields depending on assembly scope. |

All four axes have variance. PASS.

---

## Final Recommendation — Output Dispositions

### ACTIONABLE survivors (ship as "Filesystem Pre-Scan Mandate v1")

**Primary (required for the finding's value):**
- P1.1-B mandate sentence
- P1.2 tool-fallback chain
- P1.3 trigger condition
- P1.4 opt-out specification (with required reason + warning)
- P1.5 telemetry fields (3 fields in §5.3)
- P1.6 worked example
- P3 section placement (§3.3 + §5.3)
- P4 deferred items list (in finding)
- P5 relationship declarations (in finding frontmatter + body)

**Optional adjunct (recommended for compound coverage):**
- P2 (B1 minimum-N file reads) — added to §2.1 + telemetry to §5.3

### DEFERRED with revival trigger

- P1.1-A (fuller-form mandate text) — Revival: if P1.1-B feels too compressed.
- C1, C5, C6, E1-from-exploration, F1, B1-if-not-shipped — per the prior decomposition + sensemaking.

### KILLED with seed

- P1.1-C (soft-default SHOULD version) — KILL. Fails "for sure" structural requirement. Seed: there is no soft-default path that satisfies the user's stated demand.

---

## Mechanism Coverage (Telemetry)

- **Generators applied:** 3/4 (Combination — across pieces; Domain Transfer — for the worked example pattern; Absence Recognition — for what the spec currently lacks). Extrapolation not applicable at this materialization level.
- **Framers applied:** 3/3 (Lens Shifting — re-evaluating MUST under "for sure" frame; Constraint Manipulation — minimum-words mandate; Inversion — opt-out failure-mode prevention).
- **Convergence signal:** YES — three independent mechanisms (Constraint Manipulation, Inversion, Combination) converged on the same architecture: hard MUST + explicit fallback + bounded opt-out + auditable telemetry.
- **Survivors tested:** 10 ACTIONABLE candidates tested with the 5-test cycle.
- **Failure modes observed:** None firing.
  - Premature evaluation: NO (mechanisms run before testing)
  - Single-mechanism trap: NO (4-6 mechanisms applied)
  - Early frame lock: NO (P1.1-C contrarian KILLed for structural reason)
  - Innovation without grounding: NO (all candidates tested)
  - Mechanism exhaustion: NO (rich survivor set)
  - Survival bias: LOW (contrarian explored on structural grounds)

---

## **Overall: PROCEED** (sufficient coverage + convergence + tested survivors + all four axes covered + project-specific risk dimensions PASS + assembly-emergent properties identified + minimum-sufficient honored).

Downstream consumer (`/td-critique`) should treat the "Filesystem Pre-Scan Mandate v1" assembly as the primary candidate, with P2 (B1) as the optional adjunct. The 6 DEFERRED items have explicit revival triggers. The KILLed P1.1-C has its seed extracted.
