# Critique: Navigation Organization Structure

## User Input

Source: `/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-10_11-22__navigation_organization_structure/_branch.md`

Innovation committed P1 (core artifact specs hub), P2 (NOT-include list), P3 (branch_inquiry coordination), P4 (implementation + commitment ACTIONABLE).

---

## Phase 0 — Dimension Construction

### Evaluation Dimensions

| # | Dimension | Source | Weight |
|---|---|---|---|
| D1 | **Correctness** — does the proposal solve the user's bloat concern + structural organization need? | User stated requirement | HIGH |
| D2 | **Source-document fidelity** — citations to existing project conventions accurate? | Sensemaking C1, C-D1 | HIGH |
| D3 | **Maintenance-overreach avoidance** — does ACTIONABLE commitment hold up against Step 5? | loop_diagnose Step 5 | HIGH |
| D4 | **Substantive-vs-cosmetic** — is `_nav.md` real consolidation or just renaming? | Sensemaking M5 | HIGH |
| D5 | **Specification operability** — runtime determinations specified? | Decomposition determination-mechanism check | HIGH |
| D6 | **Self-reference resistance** — design uses disciplines that include /navigation; collapse risk | Critique failure mode #7 | HIGH |
| D7 | **Bloat-prevention claim** — does the proposal actually consolidate or add files? | User MUST condition (implicit) | HIGH |
| D8 | **Forward-compatibility** — L0/L1 immediate + L2+ compatible? | Sensemaking C-S1 | MEDIUM-HIGH |
| D9 | **Coherence with existing conventions** — fits `enes/runtime_environment/folder_based.md` pattern? | Sensemaking M3 | MEDIUM-HIGH |
| D10 | **Cost vs benefit** — 4 spec edits proportionate to organization gain? | Default | MEDIUM |
| D11 | **Elegance / non-bloat** — proposal itself isn't bloated? | Default + reflexive (user worried about bloat) | MEDIUM |

### Project-specific risk dimension check

The proposal involves project artifacts (4 spec files: navigation/SKILL.md, navigation/references/navigation.md, runtime_environment/folder_based.md, protocols/branch_inquiry.md) and a new convention (`_nav.md`). Project-specific risks covered:
- D2 source-fidelity.
- D3 maintenance-overreach.
- D4 substantive-vs-cosmetic.
- D5 specification operability.
- D6 self-reference resistance.
- D7 bloat-prevention (the project's own anti-bloat principle reflexively applied).

Coverage: present.

### Burden of proof

**HIGH STAKES** — proposes spec edits to 4 load-bearing project files + a new project convention.

---

## Phase 1 — Landscape Construction

### Viable region

A candidate is viable when:
- Passes D1 — proposal addresses bloat concern + organization.
- Passes D2 — citations match real spec text.
- Passes D3 — N>1 evidence justifies ACTIONABLE OR DEFERRED is honest fallback.
- Passes D4 — substantive (not just renaming).
- Passes D5 — runtime determinations specified.
- Passes D7 — actually consolidates (doesn't just add file count).
- Passes D9 — fits existing project conventions.

### Dead region

- Fails D2 (fabricated citations).
- Fails D4 (refactor is just renaming).
- Fails D7 (proposal adds files without consolidating).
- Fails D9 (violates folder-based convention rules).

### Boundary region

- D5 partial — runtime determinations specified but spec text could be tighter.
- D11 partial — proposal has many sections; could be pruned if user prefers minimal.

---

## Phase 2 — Adversarial Evaluation

### P1 — Core artifact specs (hub)

**Prosecution.**
- *D11 elegance:* the action-type vocabulary has 8 entries (6 actions + 2 non-action states). Is each STRUCTURALLY distinct? `OTHER` is a catch-all (anti-pattern); `DEFERRED` and `REJECTED` are both "not chosen now" with different reasons. Could be reduced.
- *D11 elegance:* `_nav.md` has 5 sections. `Open Directions` could be derived from Runs ∩ ¬Selections; `History` overlaps with Selections (every selection IS an event). Could be reduced to 3 sections.
- *D5 specification operability:* the `warming_summary` field in per-run frontmatter — what's its operational use? If just a one-liner pointing to other files, redundant.
- *D5 specification operability:* the action-type `OTHER` lacks defined semantics; opens drift.

**Defense.**
- *D5 operability defense:* each action-type has distinct downstream behavior — SPAWN-CHILD triggers branch_inquiry; REVISIT re-opens prior inquiry; MERGE produces unified finding; CONSOLIDATE produces project-level summary; TEST verifies; OTHER is an explicit catch-all (better than forcing into a wrong type when none fits). DEFERRED and REJECTED differ on revival conditions (DEFERRED has revival trigger; REJECTED has falsifiable kill condition). Reducing loses discriminability.
- *D7 bloat-prevention defense:* History as a separate section provides CHRONOLOGICAL scan ("what happened in this folder over time?"); Selections is PER-DIRECTION ("what was decided about each direction?"). Cross-cutting views; not redundant.
- *D5 warming_summary defense:* enables Cold-Navigation failure-mode detection (per the audit's Category J7) — was this run properly warmed? Forward-compat for automated quality checks.

**Collision.**
- Prosecution's "reduce sections / action-types" arguments have merit on elegance grounds, but defense holds on discriminability. The proposal is maximalist by design — each entry has distinct downstream use. User can prune if they prefer minimal, but maximalist isn't structurally wrong.
- The `OTHER` catch-all concern is real but addressed: spec text encourages named types when applicable; OTHER is safety valve for unforeseen action types.

**Verdict: SURVIVE with caveat.** Note in the finding that user can prune (e.g., merge DEFERRED/REJECTED; remove History; remove Open Directions stored field) if minimal-shape preferred — but the current maximalist shape is structurally justified for forward-compatibility.

**Constructive output:**
- Add to P1 a "minimal vs maximalist" note: minimal-shape (3 sections; 4 action-types) is acceptable if user prefers; maximalist (5 sections; 8 action-types as drafted) is forward-compat default.

---

### P2 — NOT-include list

**Prosecution.**
- *D11 elegance:* the explicit 6-item list overlaps with `/navigation`'s charter ("enumerates; doesn't choose"). Is the list REDUNDANT?
- *D5 operability:* "Bulk content from inquiry's discipline outputs" — how is "bulk" measured? Could lead to under-citing or over-citing.

**Defense.**
- *D5 operability defense:* charter is one sentence; the explicit list operationalizes by naming 6 specific things to NOT include + naming where each belongs. This is the "clarification not addition" pattern from the prior Sensemaking refactor proposal. Operational guidance is needed because charter is interpretable.
- *D5 "bulk" definition:* "Reference, don't duplicate" is a clear principle. Spec example: "DON'T re-paste a 200-line `finding.md` summary into navigation_observer; DO write `Source: <path>:<section>`." One-line pointers good; paragraphs of re-quoted content bad.

**Collision.**
- Prosecution's redundancy concern is partially right (charter implies the list) but the explicit operationalization is the value-add.
- "Bulk" definition needs example in spec text; without example, ambiguous.

**Verdict: SURVIVE with caveat.** Add an example clarifying "bulk" to the spec-text addition.

**Constructive output:**
- In P2's drafted spec-text addition, after item 6, add: *"Example: a one-line pointer like `Source: <inquiry-path>:<section>` is correct; re-quoting paragraphs of the source's content is bulk and a charter violation."*

---

### P3 — branch_inquiry coordination

**Prosecution.**
- *D5 operability:* the `from_nav_direction:` flag is OPT-IN. Will users (or future automated runners) actually use it? Could be silently unused.
- *D5 operability:* HALT on duplicate spawn is aggressive. Could be a WARNING instead, allowing user to confirm and proceed.

**Defense.**
- *D5 opt-in defense:* opt-in is correct because not every spawn is navigation-triggered (e.g., user creates a branch directly from a question). Default behavior must be preserved. Future automated runners (Selector at L2+) will populate the flag automatically when their selection IS navigation-triggered. Forward-compat.
- *D5 HALT defense:* HALT prevents data corruption — silent overwrite of an existing Spawned-Children entry could lose information. Aligns with project's "Information loss = deleting; never delete dead branches" principle. User can investigate the conflict, then explicitly proceed (e.g., by removing the stale entry first or using a different direction-id).

**Collision.**
- Defense holds on both points. Opt-in is the correct shape; HALT is the safe default.

**Verdict: SURVIVE.** Clean.

---

### P4 — Implementation + commitment + recommendation

**Prosecution.**
- *D3 maintenance-overreach:* ACTIONABLE commitment claims N>1 evidence (28-folder corpus). Is the corpus REALLY N>1, or are 28 inquiries all touching one underlying issue (= effectively N=1 phenomenon)?
- *D3 maintenance-overreach:* per `homegrown/protocols/loop_diagnose.md` Step 5, even if this isn't a "broad fundamentals rewrite," it's a 4-file spec change. The user might prefer DEFERRED-and-test-in-one-inquiry-first.
- *D11 cost-benefit:* 4 file edits is non-trivial. Could be pared down to 2 (folder_based.md + branch_inquiry.md) deferring the Navigation discipline edits.

**Defense.**
- *D3 N>1 defense:* the 28 inquiries cover MULTIPLE distinct navigation concerns: warmup variants (3 inquiries), route fields (1 inquiry), recursive coverage (1 inquiry), multi-resolution (3 inquiries), output usefulness (1 inquiry), correction-chains (multiple), etc. These are NOT one phenomenon — they're a corpus of distinct navigation-design concerns that all suffered from lack of organization. The "lack of consolidation" IS the cross-cutting failure mode the proposal addresses.
- *D3 organization-layer defense:* the proposal is ADDITIVE — no spec rewrites. LOW risk class. Reversible (folder convention can be amended; flag is opt-in). User explicitly requested structure ("Navigation Should be organized. How we will ensure?"). Step 5 spirit accommodates additive convention proposals when user-requested.
- *D11 cost-benefit defense:* 4 file edits are small (each is ~10-30 lines); the 4-file shape preserves locality (each file's concern stays in its own file). Pruning to 2 files would force navigation-output-spec changes into folder_based.md, blurring concerns.

**Collision.**
- Prosecution's "is this really N>1?" lands partially but defense's distinct-concerns argument is stronger. The 28 folders cover diverse concerns that all share the same organization-layer gap.
- Prosecution's "user might prefer DEFERRED" is procedurally polite but the user's explicit request for structure makes ACTIONABLE the right default. User can still defer if they choose; the proposal's recommendation is "ship + monitor," not "ship right now no matter what."

**Verdict: SURVIVE.** ACTIONABLE commitment justified.

---

### Self-reference collapse check (failure mode #7)

This critique evaluates a proposal that designs Navigation organization using disciplines (Sensemaking, Decomposition, Innovation, Critique) that include `/navigation` as a sibling discipline.

**Mitigation evidence:**
1. **External anchoring at every claim.** Project's `enes/runtime_environment/folder_based.md` cited for convention rules; `homegrown/navigation/references/navigation.md` cited for charter; ADRs / git ref-logs / build caches cited from OUTSIDE the project for hub-and-spoke pattern.
2. **Frame-exit perspective applied** (per the recently-proposed Sensemaking refactor candidate; meta-applied here). Inquiry's bounded scope confirmed as intentional, not blindly narrow.
3. **Refused trivial clean SURVIVE on P1 + P2.** Caveats applied to both (minimal-vs-maximalist note; "bulk" example).
4. **Step 5 honestly considered** — defense argued for ACTIONABLE on N>1 grounds, not by waiving Step 5.

Self-reference collapse: **NOT observed.**

---

## Phase 3.5 — Assembly Check

The 4 pieces compose into the proposal:
- P1 specifies the artifacts.
- P2 bounds what `/navigation` writes.
- P3 specifies cross-protocol coordination.
- P4 ships it (4 file edits + ACTIONABLE commitment + frame-exit note + Research Frontier).

**Assembly emergent property:** the user gets a complete, ready-to-apply proposal — design + boundary + coordination + implementation guidance. Anyone landing on the inquiry's finding gets:
- The structural answer (3-layer architecture with `_nav.md` filling the per-folder gap).
- The exclusion list (operationalizes /navigation's charter).
- The cross-protocol mechanism (branch_inquiry coordination).
- The 4 file edits to make.
- The commitment + monitoring path.

**Assembly's adversarial test.**
- *Coverage gap:* does the assembly address the user's actual question? User asked: what /navigation creates / NOT-include / do we need _nav.md / organization structure. Assembly directly addresses each. No gap.
- *Bloat-prevention reflexive test:* does the proposal ITSELF avoid bloat? The 4 spec edits are small; `_nav.md` is OPTIONAL (only when nav runs); _nav.md per-folder consolidates the previously-scattered activity. Net effect: file count goes UP slightly (each nav-active inquiry gets +1 `_nav.md` and N `navigation_observer_<N>.md`), but PER-INQUIRY scannability goes UP a lot (one consolidated file vs scattered cross-inquiry references). Bloat-prevention claim holds: organization is structural, not procedural.

**Assembly verdict: SURVIVE with caveats applied** (P1 minimal-vs-maximalist note; P2 "bulk" example).

---

## Phase 4 — Coverage + Convergence Assessment

### Coverage map

- All 4 pieces evaluated against 11 dimensions.
- 7 critical-weight dimensions all checked.
- Multi-axis prosecution depth applied: user-perspective (P4 — "user might prefer DEFERRED"); specific failure-case (P1 — `OTHER` action-type drift); specification-gap probe (P1 — warming_summary use; P2 — "bulk" definition).

### Convergence assessment

- At least one SURVIVE without critical caveat? **YES** — P3 SURVIVE clean; P4 SURVIVE clean.
- Landscape stable? **YES** — refinement direction is small (2 spec-text additions).
- Decreasing rate of new information? **YES.**

### Failure-mode self-check

| Failure mode | Observed? | Notes |
|---|---|---|
| Wrong dimensions | NO | Phase 0 validated against project-specific risks. |
| Rubber-stamping | NO | P1 + P2 received caveats; not all clean. |
| Nitpicking | NO | No KILLs; severity-weighted. |
| Dimension blindness | Mitigated | D2 + D3 + D4 + D5 + D6 + D7 explicit. |
| False convergence | NO | Convergence criteria met. |
| Evaluation drift | N/A | First iteration. |
| Self-reference collapse | **Acknowledged + mitigated.** External anchoring + meta-application of Frame-exit + refused trivial SURVIVE + Step 5 honest consideration. |

---

## Final Deliverable

### (a) Dimensions with weights

| # | Dimension | Weight |
|---|---|---|
| D1 | Correctness | HIGH |
| D2 | Source-document fidelity | HIGH |
| D3 | Maintenance-overreach avoidance | HIGH |
| D4 | Substantive-vs-cosmetic | HIGH |
| D5 | Specification operability | HIGH |
| D6 | Self-reference resistance | HIGH |
| D7 | Bloat-prevention claim | HIGH |
| D8 | Forward-compatibility | MEDIUM-HIGH |
| D9 | Coherence with existing conventions | MEDIUM-HIGH |
| D10 | Cost vs benefit | MEDIUM |
| D11 | Elegance / non-bloat | MEDIUM |

### (b) Fitness Landscape

- **Viable (clean):** P3 (branch_inquiry coordination), P4 (implementation + commitment).
- **Boundary (caveat applied):** P1 (core artifact specs — minimal-vs-maximalist note needed); P2 (NOT-include — "bulk" example needed).
- **Dead:** empty.
- **Unexplored:** operational protocols for non-spawn moves (REVISIT, MERGE, CONSOLIDATE, TEST) — explicitly flagged as Research Frontier in P4 (out of scope per `_branch.md`).

### (c) Candidate Verdicts

| ID | Verdict | Constructive output |
|---|---|---|
| P1 (core artifact specs) | SURVIVE w/ caveat | Add "minimal vs maximalist shape" note: user can prune (3 sections; 4 action-types) if minimal preferred; current shape is forward-compat default. |
| P2 (NOT-include list) | SURVIVE w/ caveat | Add "bulk" example to spec-text addition: one-line pointer correct; paragraph re-quoting incorrect. |
| P3 (branch_inquiry coord) | SURVIVE | Clean — opt-in flag + HALT-on-duplicate are correct shapes. |
| P4 (impl + commitment) | SURVIVE | ACTIONABLE justified by N>1 + organization-layer + user request + forward-compat. |
| **Assembly** | SURVIVE w/ 2 caveats applied | Apply caveats during finding compilation; no structural changes. |

### (d) Coverage map

- 4 pieces × 11 dimensions evaluated.
- Self-reference resistance: external anchoring + meta-application + refused trivial SURVIVE.
- Multi-axis prosecution depth applied per piece.

### (e) Signal: TERMINATE with caveats applied

**TERMINATE.** Convergence reached. Apply 2 spec-text caveats during finding compilation.

**Ranked survivors:**
1. P3 (branch_inquiry coord) — clean SURVIVE.
2. P4 (impl + commitment) — clean SURVIVE.
3. P1 (core artifact specs) — SURVIVE with minimal-vs-maximalist note.
4. P2 (NOT-include list) — SURVIVE with "bulk" example added.

---

## Convergence Telemetry

- **Dimension coverage:** 11/11 dimensions; 7 HIGH critical-weight.
- **Adversarial strength:** STRONG. P1 + P2 received caveats from concrete prosecution.
- **Landscape stability:** STABLE.
- **Clean SURVIVE exists:** YES (P3, P4).
- **Failure modes observed:** NONE blocking. Self-reference collapse risk explicitly mitigated.
- **Overall: PROCEED.** Apply 2 caveats during finding compilation.
