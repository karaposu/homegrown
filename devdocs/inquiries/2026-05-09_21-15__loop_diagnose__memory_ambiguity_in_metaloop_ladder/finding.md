---
status: active
diagnoses: devdocs/inquiries/2026-05-09_18-23__metaloop_autonomy_ladder_and_open_design_questions/finding.md
---
# Finding: Loop Diagnose — Memory ambiguity in metaloop ladder

## Correction Chain Summary

- **Prior inquiry:** `devdocs/inquiries/2026-05-09_18-23__metaloop_autonomy_ladder_and_open_design_questions/`. The prior run produced a 6-level autonomy ladder for the meta-loop (the project's stateful traversal engine over inquiry artifacts, see the project's MVL+ runner spec at `homegrown/MVL+/SKILL.md`). The role-allocation table's L0 row claimed `Memory: human (mental)`.

- **Corrected inquiry:** same path. The correction was applied **in-place** to `finding.md` after the user's signal. The corrected L0 cell now reads *"none — cross-inquiry traversal lives in the user's head; per-inquiry md files are still system-managed (independent of the meta-loop)."* A column-header rename and a clarifying note above the table accompanied the cell change.

- **Human correction (raw):** *"why u say memory is human? we have md files no?"* Followed by the user's framing: *"this is a simple mistake but also important one. Such mistake is intolarable and shouldnt have happened... which discipline is at fault? or protocol? inspect it in detail."*

- **What changed prior → corrected:** the L0 Memory cell changed category (from "human" to a layered statement that distinguishes per-inquiry memory — md files like `_branch.md`, `_state.md`, `finding.md` which `/MVL` and `/MVL+` runners write at every level — from cross-inquiry/meta-loop memory which is the actual axis the ladder tracks).

## Question

> Given the prior inquiry's L0 Memory misclassification, the human correction, and the in-place corrected finding, **which discipline / protocol / stage in the prior MVL+ run was responsible**, why did it slip through, and **what maintenance candidate prevents the broader class of mistake**?

## Goal

Evidence-backed failure hypotheses with confidence levels, the affected discipline / runner stage(s), shortcoming type(s), maintenance candidates with concrete evaluation gates, and a final diagnostic verdict (ACTIONABLE / PARTIAL / INCONCLUSIVE) per `homegrown/protocols/loop_diagnose.md`'s Step 4 deliverable shape.

The user's framing — *"simple but intolerable"* — signals two requirements: address the specific instance AND propose maintenance against the broader class of mistake (term used loosely without disambiguation in a load-bearing context).

---

## Finding Summary

- **Diagnostic Verdict: ACTIONABLE.** At least one maintenance candidate has strong evidence and a concrete evaluation gate. The portfolio is risk-stratified (immediate cheap catches + audit-gated spec changes).

- **Best-supported diagnosis: cascading application-level failure across three disciplines + one runner gap.** The MVL+ specs contain the relevant tests; the application missed. Specifically: Sensemaking applied its load-bearing concept test to one axis of Memory's ambiguity (scope: axis-vs-Navigator-only) but not the other (type: per-inquiry md files vs cross-inquiry meta-loop state vs Navigator-memory). Innovation inherited the L0 cell value with light rephrase. Critique applied its specification-gap probe to commitments rather than to terms.

- **Primary fault: Sensemaking** (HIGH confidence). Anchored in spec-charter — the Sensemaking discipline (defined at `homegrown/sense-making/references/sensemaking.md`) names *"AMBIGUITY COLLAPSE"* as the discipline's primary task; the failure was a missed disambiguation. Secondary: Innovation (baseline-blindness — L0 row received less mechanism work than higher rows). Tertiary: Critique (specification-gap probe applied to commitments not terms — discovered gap in existing tooling). Contributing: MVL+ runner (no inter-discipline term safety check).

- **Two orthogonal failure classes interacted.** *Term-ambiguity* (proximate cause: Memory had three meanings) and *baseline-blindness* (distal cause: the L0/default row received less scrutiny than higher rows because design attention concentrates on transitions). Either class alone would likely have been caught; together they shipped. **"Baseline-blindness" is loop-coined for this diagnosis and flagged provisional** — adopt it as a stable term only if recurrence audit confirms it appears across multiple inquiries.

- **Strongest maintenance candidate: M1 — Pre-CONCLUDE term-ambiguity checklist.** A brief 30-second scan added to `homegrown/protocols/conclude.md` Step 2 with operational trigger criteria. Catches both failure classes at the runner-level — the cheapest possible catch point. Multi-mechanism convergence: 8+ of the 21 innovation variations point to it.

- **Three more ACTIONABLE candidates supplement M1.** M4 — recurrence audit (confirms or rejects the broader pattern; gates spec changes). M5 — Innovation baseline-row scrutiny rule (catches baseline-blindness specifically at Innovation). M6 — small-scope project glossary (3-5 initial terms; CONCLUDE-step adds new load-bearing terms).

- **Two candidates DEFERRED with revival.** M2 (Sensemaking spec clarification) and M3 (Critique spec extension) — proposed but not committed now because `homegrown/protocols/loop_diagnose.md` Step 5 explicitly forbids broad fundamentals rewrites from one weak correction chain (N=1). Revival trigger: M4 audit produces ≥3 instances of the pattern across distinct inquiries.

- **Main uncertainty: recurrence.** The "term-ambiguity in load-bearing context" failure class is supported by N=1 firmly (Memory) plus N=0.5 weakly (Reflect-channel was flagged in the prior inquiry's Critique with "operational details deferred to runner spec" — same shape, milder form). The M4 audit converts the uncertainty into evidence.

---

## Finding

### Surrounding context

This inquiry was created via `homegrown/protocols/loop_diagnose.md`, the project's correction-chain diagnostic protocol. Loop_diagnose frames a special MVL+ run whose purpose is to compare a weak prior inquiry, the human correction, and the corrected result, then infer what the earlier loop missed. The reasoning engine remains the standard MVL+ pipeline (Exploration → Sensemaking → Decomposition → Innovation → Critique → CONCLUDE) — loop_diagnose only defines the input contract, required artifact reads, and expected diagnostic output shape.

The diagnostic is performed inside the homegrown thinking-engine project at `/Users/ns/Desktop/projects/native/`. The project defines the thinking disciplines (Sensemaking, Innovation, Critique, Exploration, Decomposition, Reflect, Navigation) under `homegrown/<discipline>/`, the loop runners (`/MVL`, `/MVL+`, `/meta-loop`) under `homegrown/<runner>/`, and the protocols (`branch_inquiry`, `conclude`, `loop_diagnose`, `artifact_materialization`, etc.) under `homegrown/protocols/`. Each discipline has a `SKILL.md` (the executable protocol) and a `references/<name>.md` (the framework loaded at Step 0 by the protocol).

### 1. Failure trail (what happened)

The L0 row of the role-allocation table in the prior inquiry's `finding.md` claimed `Memory: human (mental)` — overlooking that md files (`_branch.md`/`_state.md`/`finding.md` per inquiry; written by `/MVL` and `/MVL+` runners at every level) constitute system-managed memory at L0 already. The cell value passed through five disciplines without correction:

- **Framing** introduced "Memory" as the 8th axis of the meta-loop ladder, inheriting the term loosely from the prior 2026-05-10 finding without disambiguation.
- **Exploration** (`docarchive/exploration.md`) mentioned Memory in 8 places; treated `_meta_state.md` and `navigation_memory.md` as canonical Memory artifacts; did not inventory per-inquiry md files as memory.
- **Sensemaking** (`docarchive/sensemaking.md`) named Memory as a hidden axis (anchor K7); ran one Ambiguity-Collapse pair on Memory (Ambiguity #6 — *"is Memory a separate axis or implicit in Navigator?"*) which resolved scope but did not run the proxy-vs-structural sub-test of the Phase 3 load-bearing concept test on Memory specifically; the SV5 stabilized table at this point already showed `L0 Memory = "n/a"` — **first wrong value**.
- **Decomposition** (`docarchive/decomposition.md`) inherited the un-disambiguated term and partitioned correctly within scope.
- **Innovation** (`docarchive/innovation.md`) inherited the SV5 "n/a" cell and lightly rephrased to "human (mental)" — **second wrong value, visible in the published table**.
- **Critique** (`docarchive/critique.md`) tested 12 candidates; the multi-axis prosecution depth's specification-gap probe was applied to commitments (gates, heuristics, MERGE protocol) rather than to terms; the C1 defense even articulated *"Memory is read/write of artifacts"* — the lead was there, not pulled — **last chance to catch, missed**.
- **CONCLUDE** compiled the L0 row from Innovation's table without a pre-publish check.
- **finding.md v1** shipped with the wrong cell.
- **Human correction** caught it: *"why u say memory is human? we have md files no?"*
- **finding.md v2** disambiguated correctly via in-place edit.

The error had three would-be catch points: (1) Sensemaking's load-bearing concept test (designed exactly for this), (2) Innovation's per-row scrutiny, (3) Critique's specification-gap probe applied to terms. All three failed. Plus, the MVL+ runner has no inter-discipline term safety check that would catch what the disciplines miss.

### 2. Failure Hypotheses

Each hypothesis follows the loop_diagnose Step 4 template. Confidence reflects how decisively the evidence isolates the cause.

#### Hypothesis H1 — Sensemaking (PRIMARY)

**Affected stage:** Sensemaking.

**Shortcoming type:** Load-bearing concept test applied incompletely. The Sensemaking spec's Phase 3 explicitly says *"final committed concepts (especially trigger-classifier rules and concepts whose use depends on a runtime determination) → test multiple sub-aspects: proxy-vs-structural ('does this categorical label represent a real structural distinction, or is it an incidental input property used as a proxy?'), discoverability, user-language alignment"* (per `homegrown/sense-making/references/sensemaking.md`). Memory is exactly such a concept (its system-vs-human position varies per level → runtime determination). The prior run's Ambiguity #6 tested Memory's *scope* axis (axis-vs-Navigator-only) but not its *type* axis. The proxy-vs-structural sub-test, which would have asked *"does 'Memory' represent ONE structural distinction or is it lumping multiple things under one label?"*, was not applied to Memory specifically.

**Evidence from prior inquiry:** `docarchive/sensemaking.md` lines 266-282 (Ambiguity #6 tests scope only). Lines 287-293 (load-bearing concept tests applied to "5 cognitive roles" and "autonomy ladder" but not to "Memory"). SV5 table at lines 385-390 contains the wrong `L0 Memory = "n/a"` cell.

**Evidence from human correction:** *"why u say memory is human? we have md files no?"* — the user did the disambiguation in one sentence. The exact disambiguation Sensemaking's charter is to perform.

**Evidence from corrected inquiry:** the corrected `finding.md` distinguishes per-inquiry memory from cross-inquiry/meta-loop memory — the disambiguation Sensemaking missed.

**Confidence:** HIGH. Multiple artifacts converge; spec text exists and is explicit about the test; the corrected finding implements what should have been done.

**Why not stronger:** N=1 — only one correction chain. The "Sensemaking applies its tests shallowly to terms-not-named-in-explicit-Ambiguity-numbering" claim is plausible but only weakly evidenced from one example. M4 (recurrence audit) is the path to strengthening.

**Maintenance candidate:** M2 (Sensemaking spec clarification) — DEFERRED pending M4 audit.

**Evaluation gate:** if M4 audit produces ≥3 instances of the same pattern across distinct inquiries, M2 escalates from DEFERRED to ACTIONABLE.

#### Hypothesis H2 — Innovation (SECONDARY)

**Affected stage:** Innovation.

**Shortcoming type:** Baseline-blindness — the L0 row of the role-allocation table inherited Sensemaking's SV5 "n/a" Memory cell and was lightly rephrased to "human (mental)." Innovation's mechanism work (21 variations) focused on the new axes (Reflect-channel) and on L4/L5 commitments (multi-head, goal-formation), not on the L0 baseline row. *Note: "baseline-blindness" is provisional terminology coined for this diagnosis; retire if M4 audit doesn't surface the pattern.*

**Evidence from prior inquiry:** `docarchive/innovation.md` Final Commitments section (around line 217) inherits the L0 row from Sensemaking SV5 with minimal mechanism work. Compare to L4 row (line 222) which has detailed multi-head + Evaluator + multi-axis variations.

**Evidence from human correction:** the user pointed at the L0 row specifically — the row that received the least mechanism work.

**Evidence from corrected inquiry:** corrected `finding.md` rewrites the L0 row substantively — what Innovation should have done.

**Confidence:** MEDIUM. The baseline-blindness pattern is plausible from this example but only confirmed by one observation. Some Innovation variations did touch L0 (variation 5.3 — "L0.5 visibility-only") so the pattern is partially refuted at the variation level even though the FINAL TABLE's L0 row received less per-cell mechanism work.

**Why not stronger:** Innovation's spec doesn't currently REQUIRE per-row scrutiny in multi-row tables. The shortcoming is partly a missing rule and partly application focus.

**Maintenance candidate:** M5 (Innovation baseline-row scrutiny rule) — ACTIONABLE with refinement applied per Critique.

**Evaluation gate:** monitor next 5 Innovation outputs that produce multi-row tables — does baseline-row scrutiny show in the variations or testing log?

#### Hypothesis H3 — Critique (TERTIARY — discovered gap)

**Affected stage:** Critique.

**Shortcoming type:** Specification-gap probe applied to commitments not terms. Critique's spec (`homegrown/td-critique/references/td-critique.md`) describes multi-axis prosecution depth's specification-gap probe abstractly: *"for candidates whose runtime behavior depends on load-bearing concepts (e.g., 'skip if X exists'), probe whether the candidate specifies HOW the load-bearing concept's runtime state is determined."* In the prior run, this probe was applied to gates, heuristics, and the MERGE protocol — but not to the term Memory itself, which is also a load-bearing concept whose use varies per cell. Note: this is framed as a **discovered gap in existing tooling**, not a clear violation of the spec text (the spec doesn't explicitly say "probe terms," nor does it forbid it).

**Evidence from prior inquiry:** `docarchive/critique.md` line 101 (C1 defense articulating Memory as "read/write of artifacts" without follow-up question "WHICH artifacts?"). Lines 215-227 (C2 verdict on "Memory advances alongside" — prosecution focused on coordination, not term-disambiguation).

**Evidence from human correction:** the term-ambiguity slipped through despite Critique having relevant tooling (D5 specification operability + multi-axis depth).

**Evidence from corrected inquiry:** the correction is a term-disambiguation that Critique's spec-gap probe could have surfaced if extended to terms.

**Confidence:** MEDIUM. The probe was applied; it just didn't extend to TERMS as candidates. Whether this is a spec-text gap or a discovered application gap is debatable.

**Why not stronger:** N=1 + the spec text doesn't explicitly say "probe terms"; the claim could be argued either way.

**Maintenance candidate:** M3 (Critique spec extension) — DEFERRED pending M4 audit.

**Evaluation gate:** if M4 audit produces ≥3 instances of the same pattern across distinct inquiries, M3 escalates.

#### Hypothesis H4 — MVL+ runner (CONTRIBUTING)

**Affected stage:** MVL+ runner / orchestration / loop framing.

**Shortcoming type:** No inter-discipline term safety check. Concepts stabilized in Sensemaking flow downstream as truth; if a term has unresolved ambiguity, no orchestration-level catch detects it. This is a runner-design gap, not a per-discipline failure.

**Evidence from prior inquiry:** `homegrown/MVL+/SKILL.md`'s execution-pipeline rules don't include a term-safety step. `homegrown/protocols/conclude.md` Step 2 doesn't include a term-ambiguity scan.

**Evidence from human correction:** the user IS the only catch point that worked. That's evidence the runner has no automated catch.

**Evidence from corrected inquiry:** the correction was applied via in-place edits AFTER publication — confirming the catch happened post-publication, not pre-publication.

**Confidence:** HIGH. The absence of a runner-level term safety check is verifiable from spec text.

**Why not stronger:** the runner could argue "term-safety is a discipline concern, not an orchestration concern." But the cascading failure across 3 disciplines suggests discipline-level catches alone are insufficient.

**Maintenance candidate:** M1 (pre-CONCLUDE term-ambiguity checklist) — ACTIONABLE.

**Evaluation gate:** observable over next 5 CONCLUDE invocations — does the checklist fire usefully? If 0/5 fire, the trigger criteria are too narrow. If 5/5 fire on noise, too broad.

### 3. Failure Attribution Summary

| Affected stage | Shortcoming type | Evidence strength | Confidence | Candidate action |
|---|---|---|---|---|
| Sensemaking | Load-bearing concept test applied to one ambiguity-axis (scope) but not the other (type); proxy-vs-structural sub-test not run on Memory | strong (spec-text + docarchive lines + corrected finding converge) | HIGH | M2 — DEFERRED with revival pending M4 audit |
| Innovation | Baseline-blindness (provisional term): L0 row inherited and lightly rephrased; less mechanism work than higher rows | medium (partially refuted by some L0-touching variations; final table's L0 cell still under-scrutinized) | MEDIUM | M5 — ACTIONABLE with refinement |
| Critique | Specification-gap probe applied to commitments not terms (discovered gap) | medium (spec-text doesn't explicitly cover or forbid term-probes) | MEDIUM | M3 — DEFERRED with revival pending M4 audit |
| MVL+ runner | No inter-discipline term safety check; no pre-publish term-ambiguity scan in CONCLUDE | strong (verifiable from spec text) | HIGH | M1 — ACTIONABLE |

### 4. Failure class context

Two orthogonal failure classes interacted:

1. **Term-ambiguity (proximate cause).** The term "Memory" had three meanings in the project context: per-inquiry md files (already system-managed at every level by `/MVL` and `/MVL+`), cross-inquiry meta-loop traversal state (the `_meta_state.md` artifact, which is what the meta-loop ladder's Memory axis tracks), and Navigator-memory (the `navigation_memory.md` artifact at L2+). The prior loop conflated these.

2. **Baseline-blindness (distal cause; provisional terminology).** The L0 row of the role-allocation table received less scrutiny than higher rows because design attention concentrates on transitions / changes, not on the unchanged baseline. The L0 Memory cell inherited from Sensemaking SV5 ("n/a") and was lightly rephrased ("human (mental)") without being actively tested against the project's existing memory artifacts.

Without baseline-blindness, the term-ambiguity might have been caught at the L0 cell (because the wrong default would be more easily questioned). Without term-ambiguity, baseline-blindness alone might have shipped a different but uncategorizable error rather than a wrong category. Together, they shipped the categorical error the user caught.

Per-class fixes:
- Term-ambiguity → catch points: load-bearing concept test in Sensemaking + spec-gap probe in Critique + pre-CONCLUDE checklist in runner.
- Baseline-blindness → catch points: baseline-row scrutiny rule in Innovation + the runner-level pre-CONCLUDE checklist's baseline-row item.

M1 addresses both classes (its checklist items cover both); M5 addresses baseline specifically; M2/M3/M6 address term specifically. The portfolio is intentionally layered — each catch point catches what slipped through prior layers.

### 5. Maintenance Candidates

#### M1 — Pre-CONCLUDE term-ambiguity checklist (ACTIONABLE; HIGHEST PRIORITY)

**What changes:** Add a brief checklist step in `homegrown/protocols/conclude.md` Step 2 (compile finding) that runs a 30-second pre-publish scan with these operational items:

1. *For each multi-row table in the finding, scan each column's cell values. If a cell references actors (human / system / none) or artifact types (per-inquiry / cross-inquiry / external) that differ from sibling cells without an explicit narrative explanation, flag for review.*
2. *For each multi-row table with a baseline / L0 / default row, verify the baseline cell value was actively constructed (cited in Innovation's variations or discussed in finding's Reasoning) — not silently inherited from an upstream stage.*
3. *Scan the finding body for terms that appear ≥3 times. For each, check that the first occurrence has a one-line operational definition (or a glossary reference per M6 if available).*

Trigger criteria are operational: artifact-type or actor-type inconsistency is detectable by string-comparison; mechanism-trace presence is detectable by cross-referencing Innovation's variations against the final table; term-frequency + first-occurrence-definition presence is detectable by simple text scan.

**Which file/protocol affected:** `homegrown/protocols/conclude.md` (Step 2 addition; new sub-step within "compile the finding").

**Risk class:** LOW. Additive checklist; no behavior change beyond the check; CONCLUDE remains the only writer of `finding.md`.

**Expected benefit:** catches both term-ambiguity AND baseline-blindness errors before publication. Restores trust by visibly closing the catch-point that failed in the Memory case.

**Evaluation gate:** observable — over the next 5 CONCLUDE invocations, does the checklist fire on real cases? Calibration:
- 0 out of 5 fire → trigger criteria too narrow; expand items.
- 1-3 out of 5 fire on real ambiguity → working as intended.
- 5 out of 5 fire on noise (false positives) → trigger criteria too broad; tighten.

**Branch experiment:** NO — small enough for direct edit to `homegrown/protocols/conclude.md`.

**Addresses:** H1 (Sensemaking primary), H2 (Innovation secondary), H3 (Critique tertiary), H4 (runner contributing) — runner-level cheap catch absorbs work that no single discipline reliably did.

**Both classes addressed:** term-ambiguity (items 1, 3) + baseline-blindness (item 2).

#### M4 — Recurrence audit (ACTIONABLE; LOW-RISK READ-ONLY)

**What changes:** Run a one-shot audit of `enes/` and recent inquiries' findings, counting load-bearing terms used loosely without disambiguation. The audit is itself one MVL+ inquiry of its own, with this question: *"Across the project's recent findings + concept docs, how many load-bearing terms used across multiple values/levels lack operational disambiguation? Examples to check: Memory, Reflect-channel, session, context, state, ladder, level."*

**Which file/protocol affected:** none directly. Produces an audit document at `devdocs/inquiries/<future>/finding.md`.

**Risk class:** LOW (read-only audit).

**Expected benefit:** confirms or rejects the broader-pattern hypothesis. If ≥3 instances found across distinct inquiries, M2 + M3 (the deferred Sensemaking + Critique spec edits) escalate from DEFERRED to ACTIONABLE-with-stronger-evidence. If 0-2 instances, the broader pattern is not robust enough to justify spec changes; M2/M3 stay deferred.

**Evaluation gate:** observable — audit completes and produces a count. Decision-trigger: count ≥3 → escalate M2/M3 (≥3 PLACEHOLDER threshold pending audit-result calibration; if audit finds many candidates, the threshold may need to be relative rate, not absolute count).

**Branch experiment:** YES — the audit is naturally a branch inquiry of this loop_diagnose finding.

**Addresses:** the recurrence claim, not the specific Memory failure. Class addressed: term-ambiguity (broader pattern).

#### M5 — Innovation baseline-row scrutiny rule (ACTIONABLE)

**What changes:** Add a rule to `homegrown/innovate/references/innovate.md`'s Axis Coverage Check (in Phase 3): *"For proposals with multi-row tables, verify each row received active scrutiny — specifically, ≥1 of the 21 mechanism variations should reference or construct the row's cell values, and that variation must appear in the testing log. Rows that appear only in the final committed table without any mechanism trace are flagged for re-scrutiny. This applies particularly to baseline / L0 / default rows, which tend to inherit silently from upstream stabilization."*

The operational predicate is "mechanism-trace presence" — a per-row check that the row's cell values appear in the variation log or testing log of the Innovation output. Rows without traces are flagged.

Note: the Critique stage of this diagnostic recommended dropping the original "Survival Bias applied to baselines" framing because Survival Bias in `homegrown/innovate/references/innovate.md` line 391-397 covers a different pattern (uncomfortable outputs killed for wrong reason, not inherited values shipping without scrutiny). The refined wording avoids forcing the new rule into an existing failure-mode reference that doesn't fit cleanly.

**Which file/protocol affected:** `homegrown/innovate/references/innovate.md`.

**Risk class:** LOW (additive rule; no new structure).

**Expected benefit:** catches baseline-blindness specifically at Innovation stage (when concrete cell values are constructed).

**Evaluation gate:** observable — monitor next 5 Innovation outputs that produce multi-row tables. Does baseline-row scrutiny show in the variations or testing log? Refine if needed after that monitoring window.

**Branch experiment:** NO.

**Addresses:** H2 (Innovation secondary). Class addressed: baseline-blindness.

#### M6 — Project glossary, small initial scope (ACTIONABLE; LIGHT)

**What changes:** Create `homegrown/glossary.md` with a small initial scope of 3-5 terms identified as ambiguous in this diagnostic + the recurrence audit's most-relevant candidates: **Memory** (per-inquiry / cross-inquiry / Navigator-memory — three meanings; the meta-loop ladder's axis tracks the cross-inquiry one), **Reflect-channel** (suspected milder version of Memory's pattern; awaits audit), and 1-3 more from the audit if any surface clearly. Each term gets a one-line operational definition, the contexts in which it's used, and an explicit type-distinction list.

Plus: add a CONCLUDE-step that updates the glossary if the just-completed inquiry committed a new load-bearing term in Sensemaking SV6.

**Which file/protocol affected:** new file `homegrown/glossary.md`; small addition to `homegrown/protocols/conclude.md` Step 2 (the same place M1 lives).

**Risk class:** LOW (additive, read-only effect on existing flows).

**Expected benefit:** future inquiries inherit pre-disambiguated terms; the glossary grows over time, increasing leverage; Sensemaking can reference the glossary at SV6 commitment time.

**Evaluation gate:** observable — 6 months from now, does the glossary contain ≥10 terms AND have ≥3 inquiries cited it?

**Branch experiment:** NO.

**Addresses:** H1 (Sensemaking) by giving load-bearing concept tests a reference point; preventatively addresses future H1.

#### M2 — Sensemaking spec clarification (DEFERRED with revival)

**What would change (if revived):** sharpen the `homegrown/sense-making/references/sensemaking.md` Phase 3 load-bearing concept test wording to make EACH applicable sub-aspect (proxy-vs-structural, discoverability, user-language alignment) a per-test obligation, not a "test multiple sub-aspects" suggestion.

**Note from Critique:** when M2 is revived post-audit, the proposed wording's reference to "Premature Stabilization (failure mode #2)" must be reconsidered — that failure mode in the spec is about *"the model clicked into place quickly... two or three perspectives checked"* (line 124), not about "load-bearing concept test sub-aspects not all run." Either pick a correct existing reference or propose introducing a new failure mode (which itself requires more evidence per loop_diagnose Step 5).

**Risk class:** LOW-MEDIUM (clarifications of existing test; risk is bloat / noise).

**Why DEFERRED:** per `homegrown/protocols/loop_diagnose.md` Step 5: *"Do not propose broad fundamentals rewrites from one weak correction chain."* N=1 is too weak to justify even small spec clarifications without audit confirmation.

**Revival trigger:** condition-bound — if M4 audit produces ≥3 instances across distinct inquiries.

#### M3 — Critique spec extension (DEFERRED with revival)

**What would change (if revived):** extend `homegrown/td-critique/references/td-critique.md` multi-axis prosecution depth's specification-gap probe to include: *"For any term used across multiple values/levels in the candidate, probe whether the term has multiple meanings the candidate doesn't disambiguate."*

The extension fits the existing structure cleanly (no failure-mode-reference stretch like M2's). Conceptually ready.

**Risk class:** LOW (extension of existing probe).

**Why DEFERRED:** same N=1 reason as M2.

**Revival trigger:** condition-bound — if M4 audit produces ≥3 instances across distinct inquiries.

---

## Next Actions

### MUST

- **What:** Apply M1 to `homegrown/protocols/conclude.md` Step 2 with the operational trigger criteria specified above.
  **Who:** future small inquiry or direct edit (this finding's user can apply).
  **Gate:** observable — applied before next CONCLUDE run.
  **Why:** closes the runner-level cheap catch-point; addresses all 4 hypotheses' failure modes; restores trust.

- **What:** Apply M5 (Innovation baseline-row scrutiny rule) to `homegrown/innovate/references/innovate.md`'s Axis Coverage Check with the refined wording (drop the Survival Bias reference).
  **Who:** future small inquiry or direct edit.
  **Gate:** observable — applied before next Innovation run on a multi-row-table proposal.
  **Why:** addresses H2's baseline-blindness directly at the Innovation stage.

- **What:** Launch the M4 recurrence audit as a branch inquiry of this finding.
  **Who:** branch via `homegrown/protocols/branch_inquiry.md`.
  **Gate:** condition-bound — when the user is ready to invest one MVL+ inquiry in evidence-gathering for the broader pattern.
  **Why:** unblocks the deferral status on M2 + M3; calibrates the term-ambiguity-in-load-bearing-context class.

### COULD

- **What:** Create `homegrown/glossary.md` with the small initial scope (3-5 terms) and integrate the CONCLUDE-step glossary-update.
  **Who:** future small inquiry or direct edit.
  **Gate:** condition-bound — after M4 audit completes (audit may surface additional initial-scope terms).
  **Why:** long-term value; gives Sensemaking's load-bearing concept test a reference point.

### DEFERRED

- **What:** M2 — Sensemaking spec clarification of Phase 3 load-bearing concept test wording.
  **Gate:** revival — M4 audit produces ≥3 instances of un-disambiguated load-bearing terms across distinct inquiries (PLACEHOLDER threshold; calibrate after audit).
  **Why if revived:** application reliability improvement; reduces future term-ambiguity slippage in Sensemaking.
  **Note:** when revived, the proposed wording's failure-mode reference must be reconsidered (don't force "Premature Stabilization" if it doesn't fit).

- **What:** M3 — Critique spec extension to probe terms in addition to commitments.
  **Gate:** revival — same as M2.
  **Why if revived:** application reliability improvement; extends Critique's existing tooling cleanly.

---

## Diagnostic Verdict

**Overall: ACTIONABLE.**

- **Best-supported diagnosis:** cascading application-level failure across 3 disciplines + 1 runner gap. Sensemaking is primary by spec-charter (its mission is ambiguity collapse; the failure was a missed disambiguation). Innovation is secondary via baseline-blindness (provisional term). Critique is tertiary via discovered-gap (specification-gap probe applied to commitments not terms). MVL+ runner contributes via the absence of an inter-discipline term safety check. Two orthogonal failure classes interacted — term-ambiguity (proximate) + baseline-blindness (distal).

- **Strongest maintenance candidate:** M1 (pre-CONCLUDE term-ambiguity checklist with operational trigger criteria). Multi-mechanism convergence (8+ of 21 innovation variations); LOW risk class; concrete evaluation gate (observable over next 5 CONCLUDE invocations). Addresses all 4 hypotheses' failure modes at the cheapest catch-point.

- **Main uncertainty:** whether the broader pattern (term-ambiguity in load-bearing context) recurs beyond Memory + suspected Reflect-channel. Resolved by M4 audit. The recurrence question is what gates the deferred M2 + M3 spec edits; the audit converts N=1.5 evidence into either confirming N=≥3 or rejecting the broader-pattern hypothesis.

- **Recommended next step:** apply M1 + M5 immediately; create M6 small-scope glossary; launch M4 audit as a branch inquiry; leave M2 + M3 deferred until audit completes.

---

## Reasoning

### Why ranked-multi-fault rather than single-discipline blame

The strongest counter-argument to the chosen attribution model was: *"three disciplines failed; calling Sensemaking 'primary' is overclaiming. Distributing fault equally is more honest."*

This counter has merit but fails on structural grounds. The disciplines are not designed to be equally responsible. The Sensemaking discipline's spec text says: *"Structural Sensemaking is the process of constructing stable meaning by organizing cognitive anchors into constrained conceptual structures through perspective integration, AMBIGUITY COLLAPSE, and degrees-of-freedom reduction"* (per `homegrown/sense-making/references/sensemaking.md`). Innovation's charter is generating novelty; Critique's is testing candidates. Term-ambiguity catches are SECONDARY tooling for Innovation/Critique, but PRIMARY mission for Sensemaking. Treating all three as equally responsible would flatten the design's intentional asymmetry.

The chosen "ranked-multi-fault" model honors both the asymmetry (Sensemaking primary by charter) and the multi-fault reality (three disciplines plus runner all had a chance and missed). H1 is "primary," not "exclusive"; H2/H3/H4 each get their own confidence levels.

### Why APPLICATION-level not SPEC-level failure

The strongest counter-argument: *"if the test exists in the spec but didn't fire on Memory, the SPEC is the gap — the trigger condition for 'when to apply the test' is missing or weak. The spec needs to specify: 'ALWAYS apply proxy-vs-structural to every multi-value concept' rather than saying 'test load-bearing concepts' (which is interpretable)."*

This counter fails on structural grounds. The Sensemaking spec text already says *"final committed concepts (especially trigger-classifier rules and concepts whose use depends on a runtime determination)"* — Memory is exactly such a concept. The spec's trigger language IS sufficient. The failure was that the prior loop didn't recognize "Memory" as fitting the trigger description because the loop's framing focused on Memory-as-axis (a structural object) rather than Memory-as-runtime-determined-concept.

This is an APPLICATION-level failure of recognition, not a spec-text failure. The fix is to make the spec's trigger MORE OBVIOUS at application time (M1 runner-level catch + M5 Innovation rule), not to change the spec's logic. M2 + M3 are deferred precisely because spec changes from N=1 evidence would be overreach.

### Why M1 ranks highest among maintenance candidates

Multi-mechanism convergence in Innovation: 8+ of the 21 variations (Lens Shifting 1.1, 1.2 / Combination 2.3 / Inversion 3.2, 3.3 / Absence Recognition 5.1 / Domain Transfer 6.2, 6.3) point to a runner-level cheap catch placed at CONCLUDE pre-publish. This level of convergence across mechanisms is the project's mark of structural insight, not coincidence.

Cost-benefit favors M1: 30-second checklist; no spec rewrites; LOW risk class; observable evaluation gate; addresses both failure classes simultaneously. Even at partial coverage, M1 catches errors that today escape entirely — a positive marginal value with low marginal cost.

Critique refused to clean-SURVIVE M1 because the original trigger criteria were qualitative ("potentially different meanings"). The REFINE direction tightened them to operational predicates (artifact-type/actor-type inconsistency; mechanism-trace presence; first-occurrence-definition presence). M1 ships with these refinements applied.

### Why M2 + M3 are DEFERRED, not committed

`homegrown/protocols/loop_diagnose.md` Step 5 explicitly says: *"Do not propose broad fundamentals rewrites from one weak correction chain."* M2 and M3 are spec edits to two discipline reference files. Even though both are LOW-RISK additive clarifications, committing them from N=1 evidence would violate the protocol's guardrail against premature spec changes.

The compromise: M2 and M3 are committed as DEFERRED with concrete revival triggers (M4 audit produces ≥3 instances). This preserves the option to ship them when evidence supports, without overreaching now.

### Why "baseline-blindness" is provisional

The term was coined in this diagnosis because the Memory failure had a clear baseline-row pattern (L0 row inherited; less mechanism work than higher rows). But the user-language-alignment test in Sensemaking says: a loop-coined term that doesn't match the user's vocabulary is a risk. The user said *"why memory is human?"* not *"why is the baseline cell un-scrutinized?"* — the user named the proximate cause (term-ambiguity), not the distal cause (baseline-blindness).

The provisional flag tells the next inquiry: if M4 audit confirms baseline-row patterns recur, "baseline-blindness" stabilizes as a project term. Otherwise, retire it.

### Significant SURVIVE (with caveat)

- **H1, H4** survived as clean — anchored in spec-text + observable absences.
- **H2, H3** survived with caveats — H2's baseline-blindness label is provisional; H3's "Critique failed" is a discovered-gap claim, not a clear spec-violation.
- **M1** survived with REFINE — operational trigger criteria added.
- **M4** survived with caveat — placeholder threshold flagged for audit-driven calibration.
- **M5, M6** survived with REFINE — framing fixes applied (drop Survival Bias reference; start glossary small with CONCLUDE-step integration).

### No KILL verdicts

No candidate was killed. This is consistent with the diagnostic posture: the prior MVL+ run failed at application, not at fundamentals. The maintenance candidates are about closing application-level catch-points, not removing or rewriting framework structure.

---

## Open Questions

### Monitoring

- **Will M1's checklist fire usefully over the next 5 CONCLUDE invocations?** Observable. If 0/5 fire, trigger criteria too narrow; expand. If 5/5 fire on noise, too broad; tighten. The right calibration is 1-3/5 fire on real ambiguity.

- **Will M5's mechanism-trace requirement be too aggressive for short Innovation passes?** Observable over next 5 multi-row-table Innovation outputs. If the requirement is consistently violated even when scrutiny IS present (e.g., variations don't always cite L0 explicitly), the predicate needs softening.

- **Will the M6 glossary be referenced by future inquiries?** Observable at the 6-month mark. If ≥3 inquiries reference it AND it contains ≥10 terms, the artifact has compounded value. If neither holds, it's likely dead and can be retired.

### Blocked

- **The DEFERRED M2 + M3 spec edits.** Cannot ship until M4 audit produces ≥3 instances of the broader pattern across distinct inquiries.

- **Whether "baseline-blindness" stabilizes as a project term.** Cannot decide until M4 audit confirms or rejects baseline-row patterns recurring beyond Memory.

### Research Frontiers

- **Other un-disambiguated load-bearing terms in the project.** Suspected candidates: "session," "context," "state," "ladder," "level." M4 audit is the first investigation; deeper structural concept-mapping would be a follow-on if many terms surface.

- **Variation 7.3 from Innovation (discontinuity: discipline-spec approach gives way to runtime-checking).** Long-horizon question: does the project eventually need a runtime-enforcement layer (vs. discipline opt-in)? Frontier; not actionable now.

### Refinement Triggers

- **The PLACEHOLDER threshold "≥3 instances" in M4** re-opens after the audit completes. If the audit reads many inquiries and the rate is informative (e.g., 15% rate across 20 inquiries vs. 60% across 5), the threshold may shift to a relative-rate basis instead of absolute count.

- **The M1 checklist's trigger criteria** re-open after the next 5 CONCLUDE invocations. The first calibration informs version 2.

- **The "baseline-blindness" label** re-opens at audit completion. Confirmed → stabilize. Rejected → retire.

- **The "primary fault: Sensemaking" attribution** re-opens if a future loop_diagnose run on a different correction chain produces a different fault distribution that suggests the per-discipline attribution model itself is wrong.

---

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
use homegrown/protocols/loop_diagnose.md
in devdocs/inquiries/2026-05-09_18-23__metaloop_autonomy_ladder_and_open_design_questions/finding.md

memory section for level 1 was written as human only but this was wrong and i make AI fix it like this 

[showed the L0 row of the corrected table]

why u say memory is human? we have md files no?

i want you to understand what went wrong? this is a simple mistake but also important one. Such mistake is intolarable and shouldnt have happened... which discipline is at fault? or protocol? inspect it in detail
```

</details>
