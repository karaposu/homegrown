## User Input

`devdocs/inquiries/2026-06-01_11-46__loop_diagnose__inquiry_elaboration_self_containment_failure_chain/_branch.md` (priors consumed: `surfacing.md`, `sensemaking.md`)

---

# Decomposition — LOOP_DIAGNOSE deliverable structure

**Whole being decomposed:** the diagnostic finding's deliverable structure, per LOOP_DIAGNOSE Step 4 (Correction Chain Summary / Failure Hypotheses / Failure Attribution Summary / Maintenance Candidates / Diagnostic Verdict) + the candidate-failure-modes register output sensemaking produced.

## Step 1 — Coupling Map (perceive topology)

Elements to deliver:
{G1 Correction Chain Summary, G2 Failure Hypotheses (per-stage), G3 Failure Attribution Summary (table), G4 Maintenance Candidates MC-A/B/C/D, G5 Diagnostic Verdict, G6 Candidate Failure Modes for revival register, G7 Open Frontiers}.

Coupling perception:
- **G2 ↔ G3** — tightly coupled (the attribution table is a *compact summary* of the hypotheses; both must use the same affected-stage names + confidence levels). → one joint deliverable, two views.
- **G2 → G4** — directional: each maintenance candidate derives from a specific hypothesis (or set). Without G2, G4 has no grounding.
- **G4 → G5** — directional: the Diagnostic Verdict adjudicates the maintenance candidates' readiness (ACTIONABLE / PARTIAL / INCONCLUSIVE per LOOP_DIAGNOSE Step 4).
- **G1 → all** — context-setting; every later piece references the chain.
- **G6 is parallel-independent**: candidate failure modes for the revival register don't depend on G2–G5's specific verdict; they're a register-side product flagged for promotion at N≥2.
- **G7 captures the residual** — frontiers from sensemaking (N1–N5) that the diagnostic explicitly does not resolve at N=1.

Clusters → pieces: **G1 (context)** standalone; **G2 ↔ G3 (joint core)** the per-stage diagnosis; **G4 (derived from G2)** the candidates; **G5 (adjudicates G4)** the verdict; **G6 (register-side, parallel)**; **G7 (residual)**.

## Step 2 — Detect Boundaries (top-down)

The LOOP_DIAGNOSE Step 4 deliverable template already declares the natural boundaries (Correction Chain Summary / Failure Hypotheses / Attribution Summary / Maintenance Candidates / Diagnostic Verdict). The decomposition matches that boundary set; the only addition is G6 (revival register, sensemaking-surfaced) and G7 (explicit frontier section), both natural extensions.

## Step 3 — Validate Boundaries (bottom-up sanity check)

Atoms a diagnostic author needs to produce:
- the prior + corrected paths verbatim → G1 ✓
- per-stage hypothesis blocks (8 total = 4 stages × 2 pipelines) → G2 ✓
- a 5-column attribution table (Stage / Shortcoming / Evidence strength / Confidence / Candidate action) → G3 ✓
- four MC blocks (each: what / where / risk / benefit / evaluation gate / branch-experiment?) → G4 ✓
- four diagnostic verdict fields (Overall + best-supported / strongest candidate / main uncertainty / next step) → G5 ✓
- three candidate-failure-mode entries → G6 ✓
- a frontiers list (N1–N5 mapped) → G7 ✓

Top-down and bottom-up agree.

## Step 4 — Question Tree (pieces as questions + verification criteria)

**G1 — Correction Chain Summary.**
Question: *What is the correction chain, in concrete paths + verbatim user correction?*
Verification: [ ] prior path A (`01-17`); [ ] prior path B (`01-37`); [ ] corrected path (`09-54`); [ ] human correction quoted verbatim (the user's "wait what?" + the surfacing-side hypothesis from this run); [ ] one-paragraph "what changed from prior to corrected."

**G2 — Failure Hypotheses (per-stage, 8 blocks).**
Question: *For each (stage, pipeline) pair, what is the hypothesis, what evidence supports it, what confidence?*
Verification: each block contains the LOOP_DIAGNOSE-required fields — [ ] **Affected stage** (e.g., Surfacing-01-17); [ ] **Shortcoming type** (priming-by-gloss / wrong-priority / absent adjudicating principle / propagation / aimed-at-wrong-axis / self-defeating dimension / stated-then-violated / inherited-without-re-test); [ ] **Evidence from prior** (cite docarchive file:section); [ ] **Evidence from human correction** (the user-quoted phrase or the surfacing-side hypothesis); [ ] **Evidence from corrected inquiry** (09-54 contrast — what it did differently); [ ] **Confidence** (HIGH/MED/LOW); [ ] **Why not stronger** (what evidence is missing or ambiguous); [ ] **Maintenance candidate** (which of MC-A/B/C/D this hypothesis supports); [ ] **Evaluation gate** (observable signal for promotion).

**G3 — Failure Attribution Summary (compact table).**
Question: *What's the one-table summary across stages?*
Verification: [ ] columns = `Affected stage | Shortcoming type | Evidence strength | Confidence | Candidate action`; [ ] rows = the 8 (stage, pipeline) hypotheses + 1 cross-stage row for "primary-origin verdict"; [ ] uses non-discipline-bound stage names (surfacing-01-17, sensemaking-01-37, etc.) — not "discipline X failed"; [ ] strongest attributions visibly STRONG; weaker ones visibly MED/LOW; [ ] no row claims "exact root cause" without evidence isolating it.

**G4 — Maintenance Candidates (4 blocks per LOOP_DIAGNOSE).**
Question: *For each MC, what is the full block?*
Verification: each block contains — [ ] **What should change** (concrete edit, not "improve X"); [ ] **Which file/protocol/spec is affected** (path + section); [ ] **Risk class** (low/medium/high) with justification; [ ] **Expected benefit** (what failure does this prevent? cite the supporting hypothesis from G2); [ ] **Evaluation gate** (observable signal — what triggers promotion to ACTIONABLE); [ ] **Branch-experiment?** (YES/NO and why); [ ] **Source-edit-now? or wait-for-N≥2?** (per LOOP_DIAGNOSE Step 5 — at N=1, default WAIT unless specifically argued otherwise).

**G5 — Diagnostic Verdict.**
Question: *What is the overall verdict + four required fields?*
Verification: [ ] Overall: ACTIONABLE / PARTIAL / INCONCLUSIVE (per LOOP_DIAGNOSE Step 4 rubric); [ ] **Best-supported diagnosis** (one sentence + cite hypotheses); [ ] **Strongest maintenance candidate** (which MC + why); [ ] **Main uncertainty** (what could overturn the verdict); [ ] **Recommended next step** (specific, gated — not "improve surfacing").

**G6 — Candidate Failure Modes for Revival Register.**
Question: *What candidate-failure-modes are named (not promoted) for revival at N≥2?*
Verification: [ ] three entries (E1 priming-by-gloss; E4 self-defeating dimension; E5 stated-then-violated); [ ] each with — name · stage of origin · concise definition · recognition signal · why-novel (why doesn't it fold into existing modes) · promotion-trigger (N≥2 chains of the same pattern); [ ] explicit note: NOT PROMOTED at N=1.

**G7 — Open Frontiers.**
Question: *What does this diagnostic explicitly NOT resolve?*
Verification: [ ] N3 broader-pattern check (other discipline-design inquiries — do they show the same vulnerability?); [ ] N4 revival-register format (a register file vs in-finding only); [ ] N5 primary-origin survival under critique pressure (Critique stage will pressure-test); [ ] any newly-noticed open question from Critique.

## Step 5 — Interface Map

| From → To | What flows | Direction |
|---|---|---|
| G1 → G2, G3, G4, G5 | the chain (paths + user correction; context all later pieces cite) | one-way |
| G2 ↔ G3 | the 8 hypotheses ↔ their compact table; one source of truth for stage-names + confidence | bidirectional |
| G2 → G4 | each MC cites the hypotheses it derives from | one-way |
| G2 + G4 → G5 | the verdict adjudicates which MCs are ready and at what verdict-strength | one-way |
| sensemaking-K7 → G6 | the failure-mode classification (which are novel) flows directly into the register entries | one-way |
| sensemaking-N1–N5 → G7 | the open frontiers from sensemaking become the explicit frontier section | one-way |

**Hidden-coupling check (assumptions, not just data):** G2 and G3 must use the same stage-name vocabulary (`surfacing-01-17` etc.) — drift between them would let a reader find one hypothesis in G2 and a different attribution in G3. Make explicit: stage names defined once in G1 (the chain), referenced by G2/G3 verbatim.

## Step 6 — Dependency Order

1. **G1** (Correction Chain Summary — the context).
2. **G2 ↔ G3** (joint: per-stage hypotheses + attribution table).
3. **G4** (Maintenance Candidates — derived from G2).
4. **G5** (Diagnostic Verdict — adjudicates G4).
5. **G6** (Candidate Failure Modes — parallel to G4; doesn't depend on the verdict).
6. **G7** (Open Frontiers — residual; comes last).

Parallelizable: G6 can be authored alongside G4–G5 since it doesn't depend on the verdict (it depends on sensemaking-K7's classification, already settled).

## Step 7 — Self-Evaluation

| Dimension | Check | Verdict |
|---|---|---|
| **Independence** | Each piece authorable given its declared inputs? | PASS — G2↔G3 handled as one joint node; G4 cites G2; G5 cites G2+G4; G6 is independent; G7 is residual. |
| **Completeness** | Pieces cover the LOOP_DIAGNOSE Step 4 deliverable + sensemaking's surfaced extras? | PASS — G1–G5 cover the protocol's required output; G6 captures candidate-failure-modes; G7 captures the residual frontiers. |
| **Reassembly** | Pieces + interfaces = the diagnostic finding? | PASS — G1 context · G2/G3 per-stage diagnosis + summary · G4 candidates · G5 verdict · G6 register · G7 frontiers = the full LOOP_DIAGNOSE-shape finding. |

**Determination-mechanism check:** the verdict (G5) requires runtime determination — "is this maintenance candidate ready for source edit, or wait for N≥2?" — and the Q-tree provides the mechanism: each MC in G4 carries an *evaluation gate* field; the verdict (G5) reads those gates to adjudicate. The runtime determination has its mechanism in the tree. ✓

**Balance:** G2 (the per-stage hypotheses — 8 blocks) carries the most weight; G4 (4 MC blocks) medium; G3/G5/G6/G7 lighter. Acceptable — the LOOP_DIAGNOSE-required hypotheses ARE the substantive cognitive work.

## Failure-mode self-check (per `references/decompose.md` §7)

- **Premature decomposition?** No — sensemaking SV6 settled the attribution and the MC names before decomposition began. ✓
- **Wrong boundaries?** Followed the LOOP_DIAGNOSE Step 4 template's natural boundaries + minimal additions (G6/G7). ✓
- **Hidden coupling?** Surfaced: G2/G3 stage-name vocabulary drift risk. ✓
- **Missing pieces?** Cross-checked the LOOP_DIAGNOSE Step 4 rubric: Correction Chain Summary (G1) ✓, Failure Hypotheses (G2) ✓, Attribution Summary (G3) ✓, Maintenance Candidates (G4) ✓, Diagnostic Verdict (G5) ✓. Plus sensemaking-surfaced extras: G6 candidate-failure-modes ✓, G7 frontiers ✓. None missing.
- **Over-decomposition?** No — seven pieces match seven distinct deliverable elements (5 required + 2 sensemaking-surfaced).
- **Ignoring dependencies?** Explicit Step-6 order; G2↔G3 handled as joint node; G6 parallel-independent.
- **Imbalanced decomposition?** G2 heaviest by design (the per-stage hypotheses are the substance); others appropriately lighter.

**Frontier for Innovation/Critique:** Innovation writes the actual concrete content for G1–G7 (the 8 hypothesis blocks; the attribution table; the 4 MC blocks with their evaluation gates; the verdict text with all 4 required fields; the 3 candidate-failure-mode register entries). Critique pressure-tests: (a) does the primary-origin verdict survive the "any single downstream stage could have caught it" prosecution; (b) does each MC have a *specific* (not vague) evaluation gate; (c) is the verdict-strength (PARTIAL) calibrated correctly at N=1; (d) does any hypothesis claim "exact root cause" without evidence isolating it (LOOP_DIAGNOSE Step 5 guardrail).
