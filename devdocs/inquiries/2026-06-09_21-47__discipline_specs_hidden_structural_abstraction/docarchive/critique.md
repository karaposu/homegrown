# Structural Critique — discipline_specs_hidden_structural_abstraction

## User Input

devdocs/inquiries/2026-06-09_21-47__discipline_specs_hidden_structural_abstraction/_branch.md

**Inputs consumed:** sensemaking.md (problem context: SV6 + constraint envelope), decomposition.md (piece structure), innovation.md (candidate set: 11 ACTIONABLE + assembly + 1 explicit adjudication request: K3a vs K3b).

---

## Phase 0 — Dimension Construction

Extracted from sensemaking's anchors (C1–C6, FP1–FP4) + the user's stated bars + project-specific risk axes:

| # | Dimension | Weight | Source |
|---|---|---|---|
| D1 | **Content preservation** — zero semantic loss; mechanism named per candidate | CRITICAL | C1 (user: no compaction) |
| D2 | **Runtime-contract safety** — visibility class correctly determined (byte-loaded test, incl. ORDER changes); visible moves gated | CRITICAL | C3 + A2 |
| D3 | **Regression safety / reversibility** — single-commit revertible; snapshot-recipe + install-script compatible; tier-classifiable | CRITICAL | project risk axis (user: "regression risk too high") |
| D4 | **Drift-reduction efficacy** — demonstrably catches/fixes an OBSERVED drift instance (substance criterion: walk one real instance through the mechanism) | HIGH | WHY-axis robustness motivation |
| D5 | **Looseness fit** — anatomy doctrine respected (suggested-not-required; uniqueness protected); anti-Procrustean | HIGH | FP2 + 17-04 avoid-list |
| D6 | **Mechanism parsimony / culture fit** — reuses proven mechanisms; no build-step dependency; honest maintenance burden (zombie-infrastructure risk) | MED-HIGH | project risk axis (operation-parsimony; FP4) |
| D7 | **Prior-conventions compatibility** — composes with the five settled layers + canon single-file commitment (external-anchor criterion: cite/quote the actual canon text when adjudicating) | HIGH | sensemaking Definitional perspective |
| D8 | **Strategic leverage** — serves the ghost-checker / Type-5 regression / autonomy roadmap | MED | Strategic perspective |

**Frame-premise test (candidate-space rests on inherited commitments — fired):**
- **Premise 1: "the newer-generation shape is the good shape."** What-if-wrong: the newest specs could be over-engineered boilerplate. Independent prosecution: nothing in the candidate set FORCES older specs to migrate — K1 is descriptive-v1 + organic adoption, so even if the premise is wrong, damage is bounded to a mislabeled "canonical" tag. Premise survives bounded; the schema doc must say "v1 describes current best practice" not "v1 is correct."
- **Premise 2: "drift is harm."** What-if-wrong: some divergence is deliberate design. **Evidence found that partially reverses the premise:** `devdocs/editing_discpinlines.md` records, verbatim, for sense-making: *"OPEN — user reverted; 'indicators, not gates' framing is deliberate."* A previous canonicalization attempt hit a DELIBERATE deviation and the user reverted it. The premise is refined, not killed: *undeclared* drift is harm; *declared deliberate deviation* is design. This refinement propagates into K2's verdict below.
- **Premise 3: "the single-context contract is binding."** Already adversarially tested upstream (sensemaking A2) with an explicit revival trigger; not re-litigated (carried with citation).

**Substance-vs-Label criteria** attached to D4 (walk a real drift instance) and D1 (name the mechanism, not the adjective). **External-anchor criteria** attached to D7 (quote canon text) and to any claim about project state (file evidence required). **Purpose-fitness calibration:** a defect is kill-worthy only if it prevents the candidate from doing its job (drift-reduction / declaration / safety) — cosmetic objections may caveat, not kill.

## Phase 1 — Fitness Landscape

- **Viable region:** runtime-invisible + content-preserving + proven-mechanism-reusing + loose + reversible declarations (the "declare + verify" family).
- **Dead region:** compaction-mechanism candidates (D1 fail); ungated runtime restructures (D2 fail); forced corpus-wide migration (D5 fail); build-step-dependent designs NOW (D6 fail); canonicalization that overrides declared-deliberate deviations (D4-refined fail).
- **Boundary region:** runtime-visible moves with proven carriers (K3a extraction; K4 order-changing bundling); enforcement tooling (checker) under the canon deferral; rituals needing cadence (K7c).
- **Unexplored:** process-layer adoption behavior (out of scope by Layer Commitment); empirical LLM-consumption validation (known inherited gap, carried from 17-04).

## Phase 2 + 3 — Adversarial Evaluation + Verdicts

**Burden of proof:** low-stakes (additive, reversible) candidates = innocent-until-proven; runtime-visible candidates (K3a, K4) = guilty-until-proven.

---

### K1 — SPEC_SCHEMA doc (thin canonical anatomy + conformance matrix + schema-version + exemplar pointers)

**Prosecution (strongest):** The corpus's disease is scattered convention docs — five already exist (placement, step_refinement, anatomy, taxonomy, edit-tiers) — and K1 adds a SIXTH. Doc proliferation is the failure mode dressed as its cure. User-perspective objection: "one more place to keep in sync when I change a spec."
**Defense:** K1's design is pointer-style: it BINDS the five (it is the missing index, not a new peer); the conformance matrix exists nowhere today and answers a question nothing else answers ("which spec instantiates what"); schema-version gives looseness a mechanism.
**Collision:** the prosecution wins against K1-as-standalone-sixth-doc; it loses against K1-merged-into-a-single-entry-point. The defect is real but absorbable in-frame.
**Verdict: REFINE** → merge K1 with K7a/K7b into ONE artifact (see Phase 3.5). Refinement target: one entry-point doc; schema content stated once; everything else pointered. (Purpose-fitness: the defect would not stop the schema doing its job, but a known better in-frame variant exists → REFINE, not SURVIVE.)

### K2 — `traits/` registry (canonical wording + instantiation tables + drift-repair Phase 1)

**Prosecution:** (a) Zombie-infrastructure: the precedent registry itself — `cognitive_fixes/` — has sat at N=1 since 2026-05-23 (external anchor: its index lists exactly one fix; untouched mtimes). A second registry could stall the same way. (b) **Canonicalization once steamrolled a deliberate choice:** the user reverted the sense-making verdict-vocab edit (anchor quoted in Phase 0). K2's "repair the drift list" would re-commit that exact mistake. (c) Specification-gap: who decides canonical wording when 3 styles exist?
**Defense:** (a) cognitive_fixes "stalling" is its staging gates working as designed (nothing qualified; the kill-conditions exist precisely for honest retirement); K2 copies those gates, so the zombie risk is bounded by design. (b/c) The deviation-log is the mechanism for deliberate opt-outs, and the drift evidence elsewhere is real (stale worklist, 3 styles, absences in decompose).
**Collision:** defense holds ONLY if the registry distinguishes deviation-status explicitly and Phase-1 repair excludes recorded deliberate deviations.
**Verdict: REFINE** → (i) per-trait instantiation table gains a status column: `instantiated / drifted-unintended / deviation-declared-deliberate / not-applicable`; (ii) sense-making's verdict-vocab entry is pre-marked `deviation-declared-deliberate` per the recorded user revert — repairing it requires a user decision, not a worklist tick; (iii) canonical-wording selection rule: take the most-recently-user-approved instance (td-critique's Convergence Telemetry block and articulate_simple's compound verdict are both user-shipped — the registry records BOTH as recognized variants rather than force-unifying verdict styles in round 1). Substance check (D4): walked instance — decompose lacks any verdict block (unintended absence per worklist) → registry Phase-1 flags it as `drifted-unintended` with the canonical text ready to copy → caught. PASS.

### K3a — Runner-core extraction (shared path-loaded `protocols/runner_core.md`) — *guilty-until-proven*

**Prosecution:** Runtime-visible: changes what every runner run loads; adds one path-load = one new partial-load surface in the most load-bearing artifacts (the runners); requires lockstep edits to BOTH install scripts and the snapshot recipe's rewrite list (two external surfaces innovation surfaced as hidden couplings); benefit (single edit point) is achievable runtime-invisibly via K3b. Failure-case scenario: a cold session resumes an inquiry, Skill-loads MVLw, misses the shared-file load (new instruction not yet internalized), executes the transition protocol from memory — exactly the "never execute from memory" failure the runners guard against, now with one more file to miss.
**Defense:** the protocol load-by-path mechanism is proven (conclude/branch_inquiry load reliably); true dedup is the only permanent end to three-way divergence; the blocks ARE protocol-like (operational procedure, not discipline content) so canon supports protocol placement.
**Collision:** under the high-stakes burden, defense does not clear NOW: every claimed benefit except true-dedup is delivered by K3b at zero runtime risk, and true-dedup's marginal value over checked-conformance is small while its failure surface is the system's most critical path.
**Verdict: REFINE-AND-GATE (boundary region):** keep as the designated end-state behind an explicit gate — adopt only after (a) the K6 manifest/advisory checker has run ≥1 month catching runner drift via K3b, AND (b) one snapshot cycle has included the new file in its rewrite list dry-run, OR (event-trigger per the time-risk note) when a 4th runner is added or shared blocks change twice in one month — whichever first. Constructive: the extraction design is fully specified in innovation (name, load line, residuals); nothing is wasted by waiting.

### K3b — Single-source conformance-diff (canonical reference source; runners keep inline copies; drift checked)

**Prosecution:** triple maintenance persists (the actual typing burden is unchanged); "canonical source" that nothing loads can itself go stale (the editing_discpinlines failure shape — a reference document diverging from reality); specification-gap: needs stable block delimiters in runner files for diffing.
**Defense:** the staleness objection inverts — the diff CHECK is precisely what makes staleness visible on either side (worklist had no check; this has the check as its essence); maintenance burden was never the kill-criterion, silent drift was; delimiters cost ~6 heading lines across 3 files.
**Collision:** defense survives; the staleness prosecution actually demonstrates the candidate's value (symmetric drift detection).
**Verdict: SURVIVE** (caveats: add stable block headings to the three runners — runtime-visible-trivial, ~6 lines, content-preserving; document the manual diff command in the canonical source header so the check works with zero tooling). Substance check (D4): walked instance — MVL's missing timestamp policy → block-diff of `## History append` section vs canonical → reported as divergence on first run. PASS.

### K4 — Within-spec bundling playbook (innovate spread-map; Form-2→Form-1 lifts)

**Prosecution:** honest reclassification — relocation inside a runtime-loaded file changes the byte ORDER the LLM reads: bundling is runtime-visible-lite, and order-sensitivity of LLM attention is exactly what 17-04 says matters. The user's regression fear concentrates here (innovate = 752 lines, 15 notes, densest cross-reference web). A botched move breaks the note-web's prose pointers.
**Defense:** the project performed precisely this move TODAY at td-critique (8 failure modes relocated per-phase, "substance preserved 100%", +12 lines) under a committed finding (18-30) — the live precedent both proves feasibility and supplies the gate template; the lifting recipes (step_refinement) exist for exactly these moves; 17-04/18-30 commit that locality IMPROVES LLM consumption — order-change here is the point, not the risk.
**Collision:** prosecution's reclassification stands (visibility class corrected); its conclusion (don't do it) falls to the precedent + conventions.
**Verdict: SURVIVE-REFINED:** bundling moves are classified **runtime-visible (order) / content-preserving**, adopted per-spec with the 18-30 edit as the procedural template (per-move verbatim statement + cross-reference resolution check + single-commit revert), innovate first target, one spec at a time — never a corpus-wide sweep.

### K5 — Lifecycle layout (live-only `references/`; archive home for `old_*`; dev-history naming)

**Prosecution:** the maintainer touched `old_td-critique.md` TODAY — old_* files are in active comparative use where they sit; moving them breaks the working habit and the diff-adjacency. Putting `archive/` INSIDE `references/` risks future glob-readers.
**Defense:** Step-0 loads name a specific file (no glob) — verified; comparative use survives a one-level move; the convention is currently implicit and triple-inconsistent (old_ prefix / non-active/ / archived_skills/ all express "not live").
**Collision:** defense holds with placement correction.
**Verdict: SURVIVE** (caveat: archive lives at `cognitive_harness/<discipline>/archive/`, NOT inside `references/`; pure `git mv`; single-commit revert).

### K6 — Per-spec manifest sidecar + advisory checker sketch

**Prosecution:** (a) sync-drift: a manifest that lies is worse than no manifest. (b) **Canon-conflict probe (external anchor required):** `step_refinement.md` commits, verbatim, "**No mechanical enforcement.** No linters, no validators…" — does K6 violate committed canon? (c) ADD-TEST that nobody runs = zombie.
**Defense:** (a) the 4-ADD same-commit rule is staged behind adoption, and the checker's first job is precisely manifest-vs-spec diffing (self-correcting pair). (b) Quoting the same canon: the deferral targets *enforcement* ("schema validation that REJECTS non-conforming content") at *corpus-machinery scope*; the same doc embraces "routine human-driven tidying," and sibling canon (`docs/canon/regression/desc.md` "What needs to happen: add Change Log sections… structural checks"; three runner specs literally CALL `structural_check.sh` with a manual-fallback clause) anticipates exactly an advisory checker. An ADVISORY, never-blocking checker that the runners already have a fallback slot for is the staged path canon itself describes. (c) the manifest is useful checker-less as a human-scannable conformance card (degradation path specified).
**Collision:** defense survives on all three; the canon tension dissolves under the advisory/enforcement distinction with both texts quoted.
**Verdict: SURVIVE** (caveats: manifest fields start minimal — sections list, trait-status row, output-file contract; checker is explicitly ADVISORY — report-only; both adoptable per-spec). Substance check (D4 + Type-5): walked instance — an edit deletes innovate's "Survival Bias" section → manifest section-list vs spec headings grep mismatch → reported. PASS. Strategic (D8): highest of the set — fills the ghost call-site and the Type-5 input gap.

### K7a INDEX + K7b SPEC_STANDARD entry point

**Prosecution:** three meta-docs (K1+K7a+K7b) for a corpus whose problem is scattered meta-docs — self-parody risk (same objection as K1, compounded).
**Defense:** none as separate artifacts.
**Verdict: KILL as separate candidates → constructive seed: their union survives as ONE artifact (Phase 3.5 assembly).** (The kill is severity-supported: as separates they actively worsen D6 parsimony — the dimension their purpose serves.)

### K7e — schema-version field

**Verdict: SURVIVE** (trivial rider on K1/K6; 1–3 lines per adopting spec; gives looseness its mechanism). Prosecution ("version theater at N=1 version") acknowledged: v1 is still load-bearing as the descriptive/normative boundary marker.

### K8 — Invisible-first tiered roadmap (+ time-trigger on gated items)

**Prosecution:** ordering theater — the real risk decisions (K3a, K4) were already made per-candidate; a roadmap doc adds process weight. Also "invisible-first" might sequence cosmetics before the user's actual pain (drift).
**Defense:** the highest-value item (K2 drift repair) IS invisible-class so it leads anyway; the roadmap's real content is the gates + visibility classification mechanism (the byte-test incl. order), which no single candidate carries.
**Verdict: SURVIVE** (folded into the finding's Next Actions rather than a separate artifact — parsimony).

### Deferred candidates (carried, not re-litigated): K7c codification ritual (trigger: any spec >15 notes or a phase crosses the 17-04 cluster-trigger), K7d build-step compilation (trigger: checker tooling in routine use ≥1 month). Both retain innovation's revival triggers. K2' repair-only: KILL upheld (its failure is empirically recorded in the stale worklist); seed retained (repair must ride a source-of-truth).

---

## Phase 3.5 — Assembly Check

**Emergent candidate A1 — "one entry point":** merge K1 + K7a + K7b into a single `cognitive_harness/SPEC_STANDARD.md` = corpus index + schema v1 (stated once, thin) + conformance matrix + pointers to the five convention docs + pointer to `traits/`. Evaluated against the same dimensions: cures the doc-proliferation prosecution that hit all three parts (D6 ↑), preserves each part's value, single file = single revert (D3). **Verdict: SURVIVE — ranked above its parts.**

**Emergent candidate A2 — "Declared-Form Architecture" (the full innovation assembly):** prosecution — big-bang adoption would contradict organic-adoption canon (FP4) and risk over-build (5-bidirectional's own warning). Defense — the assembly is a MAP whose parts are independently adoptable/reversible; nothing requires the whole. **Verdict: SURVIVE as the finding's organizing picture + piecewise adoption, KILL as a single-shot migration.** Generalization noted: K3b's conformance-diff is the same mechanism as K2's instantiation checking — one concept ("declared source + checked copies") covers runner blocks AND traits; record as the architecture's unifying principle.

## Phase 4 — Coverage + Convergence

**Accumulator:**
- Evaluation log: 12 candidates + 2 assemblies evaluated across D1–D8; all critical-weight dimensions tested per candidate.
- Kill record: K7a/K7b-as-separates (parsimony, severity-supported; seed → A1); K2'-repair-only (empirical re-drift evidence; seed retained); big-bang adoption of A2 (canon conflict; piecewise survives).
- Refinement record: K1 → merged into A1; K2 → deviation-status mechanism + user-revert respect; K3a → gated end-state with event triggers; K4 → visibility reclassification + 18-30 procedural template.
- Coverage map: viable region fully populated; boundary region adjudicated (K3a, K4, checker); dead region confirmed empty of survivors; unexplored regions named and out-of-scope by commitment (process-layer adoption; empirical LLM validation — carried as the same open question 17-04 logged).
- Convergence trend: no new regions opened by the last evaluations (A1/A2 landed in mapped territory); landscape STABLE after K4's class correction.
- Mechanism-independence status: **validated** — verdicts cite external anchors throughout (verbatim canon quotes: step_refinement enforcement-deferral, editing_discpinlines user-revert line; empirical artifacts: cognitive_fixes N=1 index, stale worklist paths, runner three-way drift, td-critique's same-day relocation, absent tools/ dir; downstream-consumer behavior: runners' checker call-sites with manual fallback).

**Signal: TERMINATE — ranked survivors:**

1. **K2-refined** — traits registry with deviation-status + drift-repair Phase 1 (the user's robustness pain, fixed at source; invisible)
2. **A1** — single `SPEC_STANDARD.md` entry point (index + schema v1 + conformance matrix + pointers; invisible)
3. **K6** — per-spec manifest + advisory checker sketch (the strategic unlock; invisible now, advisory later)
4. **K3b** — runner single-source conformance-diff (+6 delimiter lines; near-invisible; kills silent runner drift)
5. **K7e** — schema-version field (rider)
6. **K5** — lifecycle/archive layout (invisible housekeeping)
7. **K4-refined** — bundling per the 18-30 template, innovate first (visible-order class, precedented, one-spec-at-a-time)
8. **K8** — the ordering + gates themselves (folded into the finding)
- **Gated end-state:** K3a extraction (event/maturity triggers). **Deferred:** K7c, K7d (triggers retained).

## Convergence Telemetry

- Dimension coverage: 8/8 dimensions constructed from problem context; all critical-weight dimensions evaluated for every candidate
- Adversarial strength: **STRONG** — three innovation-stage framings reversed or reclassified under prosecution (K3a demoted from peer-ACTIONABLE to gated; K7a/K7b killed as separates; K4 visibility class corrected); user-perspective objections + specification-gap probes + substance-axis + external-anchor sub-axes all fired where their Phase-0 criteria demanded
- Landscape stability: STABLE (post-K4-reclassification; assembly candidates landed in mapped regions)
- Clean SURVIVE exists: YES (K6, K3b, K5, K7e, A1 — no critical-dimension caveats)
- Failure modes observed: none firing — checked: Wrong Dimensions (dimensions traced to sensemaking anchors + user bars); Rubber-Stamping (kills + demotions present); Nitpicking (purpose-fitness applied — cosmetic objections caveated, never killed); Dimension Blindness (project-specific axes D3/D6 included; frame-premise test run); False Convergence (unexplored regions named, not claimed); Evaluation Drift (single-pass; dimensions fixed at Phase 0); Self-Reference Collapse (critique evaluating spec-organization including its own spec — grounded in external anchors: file evidence, verbatim quotes, same-day edit precedent, cross-domain patterns); Axis Absence (the K4 order-visibility axis was MISSING from innovation's classification and was constructed here — the validate-dimensions interrogation caught it); External-Grounding Absence (quotes + artifacts cited per the external-anchor criteria)

**Overall: PROCEED**

**Next step input (for ITERATION COMPLETE):** the question is answered affirmatively with a ranked, gated design set; the K3a/K3b adjudication request is resolved (K3b now, K3a gated); the RE-TEST trigger on decomposition's P3 extraction framing is discharged (framing corrected, recorded here).
