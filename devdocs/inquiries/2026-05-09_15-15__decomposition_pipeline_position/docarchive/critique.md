# Critique: Decomposition Pipeline Position

## User Input

devdocs/inquiries/2026-05-09_15-15__decomposition_pipeline_position/_branch.md

```
Maybe decomposition shouldnt the after sensemaking? maybe decomposition should be done at the very beginnign in order to decompose the input query into pieces? so each piece can have their own loop?

Or maybe it shuld run after critique to produce subpaths of what can be run next with MVL ?

My point is this , we included decomposition to mvl+ but maybe that was wrong decision? and it belongs to somewhere else or different kind of logic?

Or this is wrong? and actually decomposition helped a lot of inquiries samples to be better?
```

---

## Phase 0 — Dimension Construction

### Dimensions extracted from sensemaking SV6

| Dimension | What it asks | Weight | Source |
|---|---|---|---|
| **Multi-head deferral respect** | Does the candidate respect the deferral of multi-head meta-loop? D-FIRST as immediate action = AUTO-KILL. | **VETO** | Sensemaking Ambiguity 3 |
| **Phase-fit** | `desc-machinery` (low) / `desc-protocol` (low) / `active-maintenance` (preferred for active rules) / `active-machinery` (high risk) / `structural` (high risk) | **HIGH** | `enes/step_refinement.md`; sensemaking constraint |
| **Discipline taxonomy stability** | Does D-CONDITIONAL break Core admission rule (pipeline-sequential)? Flexible reading: must run sequentially WHEN it runs. | **HIGH** | Sensemaking Ambiguity 5; `enes/discipline_taxonomy.md` |
| **Audit-evidence weighting** | 0-NEGATIVE → don't propose moves that create NEGATIVE; 0-HIGH → graded options preferred. | **HIGH** | Sensemaking Ambiguity 4 |
| **"Brushing teeth" disposition** | Low-cost edits favored over redesigns. | **HIGH** | User disposition (carryover from prior audit) |
| **Sample-bias scope** | Verdict scope = meta-design pattern; don't generalize beyond. | **MEDIUM-HIGH** | Sensemaking Ambiguity 6 |
| **Self-reference scope** | Corpus-internal only; this inquiry's D scoring well/poorly is one data point. | **MEDIUM-HIGH** | Sensemaking Ambiguity 7 |
| **Workspace Invariant respect** | Each discipline produces its canonical output file (per `/Users/ns/.claude/skills/MVL+/SKILL.md`). | **MEDIUM** | MVL+ skill spec |
| **Phase-tag preservation** | Verdict calibrated for current phase; revisit-when-phase-changes. | **MEDIUM** | Phase/Calibration-State perspective |
| **Default dimensions** (Correctness, Coherence, Feasibility, Completeness, Robustness, Elegance) | Defaults | varies | Default |

### Project-specific risk dimension check

✓ Phase-fit (load-bearing per Step Refinement primitive)
✓ Discipline taxonomy stability (project-specific, load-bearing)
✓ Audit-evidence weighting (project-specific from prior audit)
✓ Self-reference scope (project-specific; this is the audit's audit)

Default dimensions alone would have missed all four. Dimension list complete per Phase 0 refinement note.

### Burden of proof

| Stake level | Candidates | Default |
|---|---|---|
| **LOW** (reversible spec edits, descriptive only) | Q1.1-a/b/c/d; Q1.2-F1; Q1.2-M2; Q2 (a/b both tones); Q4-a/b | Innocent until proven guilty |
| **MEDIUM** (separate inquiry creation; runner-level changes) | Q1.2-F3; Q3-a/b/c | Balanced |
| **HIGH** (structural; precedent-setting; architectural inversion) | Q1.2-INV (default-conditional); Q1.2-F2 (Pre-flight Step 0) | Guilty until proven innocent |

---

## Phase 1 — Fitness Landscape

```
                   (corpus-grounded, low-cost, descriptive, taxonomy-preserving, invariant-respecting)
                                            ↑
                                          VIABLE
                  ┌──────────────────────────────────────────────────────────────┐
                  │  Q1.1-a (status quo); Q1.1-b (+Assembly A); Q1.1-c (+Q1.1-f) │
                  │  Q1.2-T2-mitigated; Q1.2-T6 (multi-signal hybrid)            │
                  │  Q1.2-F1; Q1.2-F3                                             │
                  │  Q1.2-M2                                                      │
                  │  Q2a-1/2; Q2b-1/2 (both tones)                                │
                  │  Q3-INV; Q3-c (signal-based)                                  │
                  │  Q4-a (with lead+table)                                       │
                  │                                                              │
                  │  Assemblies B, C, D live here                                 │
                  └──────────────────────────────────────────────────────────────┘
                                          BOUNDARY
                  ┌──────────────────────────────────────────────────────────────┐
                  │  Q1.1-d (fold candidate)                                      │
                  │  Q1.2-T1 (needs operationalization)                          │
                  │  Q1.2-T4 (refine specification — load-bearing)               │
                  │  Q1.2-T5 (complement only)                                   │
                  │  Q1.2-M1 (Workspace Invariant tension)                       │
                  │  Q1.2-M3 (redundant with M2)                                 │
                  │  Q4-c/d (fold into Q4-a)                                     │
                  │  Q3-a (deferred)                                             │
                  │  Assembly A (deferred — chained dependency)                   │
                  └──────────────────────────────────────────────────────────────┘
                                          DEAD
                  ┌──────────────────────────────────────────────────────────────┐
                  │  Q1.2-T3 (signal infrastructure doesn't exist) — DEFERRED    │
                  │  Q1.2-INV (HIGH stakes; sample-bias)                         │
                  │  Q1.2-F2 (precedent-setting; HIGH stakes)                    │
                  │  Q1.2-F4 (Form 2 anti-pattern)                               │
                  │  Q2-INV (loses framing acknowledgment)                       │
                  │  Q3-b (over-scope)                                           │
                  │  Q4-INV (loses required properties)                          │
                  └──────────────────────────────────────────────────────────────┘
```

**Unexplored region:** A "memory-mechanism rather than spec-edit" alternative — recording the verdict in `MEMORY.md` rather than refining /decompose's spec or /MVL+'s. Not pursued because spec-edit is the more durable path; memory is for recall.

---

## Phase 2 — Adversarial Evaluation

For each candidate: **P** (prosecution; multi-axis where relevant), **D** (defense), **→** verdict.

### Q1.1 — KEEP-CURRENT variants

#### Q1.1-a (Pure status quo)

- **P:** Doesn't address audit's 0-HIGH finding; perfunctory machinery in 8/10 inquiries persists. User-perspective: defaults to "no action" which forfeits the actionable gradient.
- **D:** Zero cost; zero risk; respects 0-NEGATIVE; "brushing teeth"-aligned; preserves taxonomy unchanged.
- **→ SURVIVE-as-baseline.** Audit's MEDIUM-typical (not NEGATIVE) doesn't force action; do-nothing is legitimate.

#### Q1.1-b (KEEP-CURRENT + full Assembly A from prior audit)

- **P:** Couples to prior audit's Assembly A; sequencing dependency.
- **D:** Already-considered audit recommendation; phase-fit `desc-machinery`; corpus-grounded. Independent of THIS inquiry's verdict (Assembly A's edits help D wherever D sits).
- **→ SURVIVE.** Recommended companion to KEEP-CURRENT path.

#### Q1.1-c (KEEP-CURRENT + only honest value tag Q1.1-f)

- **P:** Half-measure; suboptimal between Q1.1-a and Q1.1-b.
- **D:** Lowest-cost edit that creates the signal source future D-CONDITIONAL triggers can use; minimum-viable refinement.
- **→ SURVIVE.** Useful as "go a bit further than status quo, no further than the signal source."

#### Q1.1-d (KEEP-CURRENT + phase-tag note in /decompose spec)

- **P:** Documentation-only; could be folded into the finding instead of /decompose's spec.
- **D:** Phase-dependence acknowledged in the discipline spec itself; future-revisit signal embedded.
- **→ REFINE — fold into Q1.1-b or Q1.1-c (or place in finding).** Standalone, redundant if any shipping refinement also carries phase-context.

### Q1.2 — D-CONDITIONAL design — Trigger sub-axis

#### Q1.2-T1 (Coupling-density signal at S handoff)

- **P:** Specification-gap probe — "observable internal structure" needs precise definition; hypothesis without empirical baseline.
- **D:** Conceptually clean; signal is observable.
- **→ REFINE — needs operationalization.** Seed: T2 (Layer-0-only) is a more concrete operationalization of the same intuition.

#### Q1.2-T2 (Layer-0-only signal)

- **P:** Threshold definition: what counts as "no cross-piece coupling"? Specification-gap probe.
- **D:** Corpus-grounded (8/10 audit pattern); concrete observable property; pairs with prior audit's Q1.2-a-mitigated which already addressed this threshold.
- **→ SURVIVE-with-mitigation.** Inherit Q1.2-a-mitigated's "explicit declaration when skipped" rule. Best-in-class for trigger axis.

#### Q1.2-T3 (Honest-value-tag-history signal)

- **P:** Triple chained dependency — Q1.1-f must ship + inquiry-shape vocabulary must exist + N inquiries must accumulate. None of these exist yet.
- **D:** Synergizes with prior audit's Assembly A; phase-fit `active-maintenance` (preferred); event-driven (low ceremony when signal absent).
- **→ DEFERRED-with-revival-trigger.** Revival: Q1.1-f ships AND ≥3 similar-shape inquiries accumulate value tags. Until then, no signal source exists.

#### Q1.2-T4 (S's-already-named-partition signal) — LOAD-BEARING SELF-APPLICATION CASE

**Multi-axis prosecution:**

- *User-perspective objection:* The user's question explicitly asks "does decomposition help with anything substantial?" — they want to understand D's value. T4 would systematically skip cases where S has named the partition; if those are the cases where D's sub-axis split could produce HIGH (architectural inquiries like THIS one), T4 prevents D from ever earning HIGH on the very inquiries where it could.
- *Specific failure-case scenario:* THIS D's Q1.2 sub-axis split (trigger / spec form / maintenance) is genuine partitioning. Under T4, this inquiry's D would have been skipped retroactively, and the Q1.2 sub-axis split would not exist. The Q1.2 sub-axis split is exactly what makes this inquiry's verdict actionable for innovation/critique.
- *Specification-gap probe:* "S's-already-named-partition" — what counts as "named"? S's SV6 in this inquiry named "three options" but the actionable space's sub-pieces (trigger / spec form / maintenance) were NOT named at SV6 — those came from D's Q1.2 partitioning. T4's specification depends on whether "named" means "named at SV6 top-level" or "fully partitioned at the level downstream pieces operate on."

**Defense:** Corpus-grounded — audit observation that S's SV6 typically names what D reformats. T4 captures the audit's strongest pattern.

**Collision:** P's three-axis attack is concrete and grounded in this inquiry's own behavior. T4 in its first-pass specification over-skips: it would have skipped THIS inquiry's D, but THIS D produced genuine sub-axis partitioning that wasn't in S's SV6.

**Resolution:** T4 has a specification problem, not a structural problem. Refined T4 = "skip D when S's SV6 has fully partitioned the actionable space INCLUDING the sub-piece level downstream pieces will operate on; D's only contribution would be reformatting + verification criteria." Under refined T4, this inquiry's D would NOT have been skipped (S didn't name the trigger / spec-form / maintenance sub-axes; D surfaced them).

The self-application case both VALIDATES the corpus pattern (S surfaces what D reformats — when applicable) AND FALSIFIES T4's first-pass specification. Both are true. T4 needs refinement, not killing.

- **→ REFINE — narrow trigger to "S has named partition AT THE LEVEL D would operate, INCLUDING sub-pieces."**

#### Q1.2-T5 (User-override flag)

- **P:** Doesn't solve auto-detection; user judgment doesn't scale.
- **D:** Simple; complements auto-trigger (manual override).
- **→ REFINE — present as complement (always-available manual flag), not as primary trigger.**

#### Q1.2-T6 (Hybrid OR multiple signals)

- **P:** Multi-signal increases combined-trigger debugging difficulty.
- **D:** Reduces false-skips; conservative in the right direction (more triggers fire = D runs more often = lower skip risk).
- **→ SURVIVE-as-best-trigger-pattern.** Constituent triggers should be T2-mitigated + refined-T4 (T1 absorbed into T2; T3 deferred; T5 complement).

#### Q1.2-INV (Default-conditional with explicit invocation only)

- **P:** HIGH stakes (architectural inversion of always-rule); sample-bias scope (corpus is meta-design only; can't generalize default-conditional from this evidence base). Burden-of-proof: defense must demonstrate viability.
- **D:** Inverts formalization-not-discovery pattern fundamentally.
- **→ KILL on stakes + sample-bias.** Seed: default-conditional is the long-horizon direction if multi-head meta-loop matures and per-shape D-value-shape data accumulates; not a current move.

### Q1.2 — Spec form sub-axis

#### Q1.2-F1 (Form 1 standalone refinement note at /decompose Step 1)

- **P:** One more rule in /decompose's spec; spec-bloat risk if combined with prior audit's Assembly A edits.
- **D:** Phase-fit `desc-machinery`; matches Step Refinement primitive's canonical form; matches recent prior tidying's visual marker convention.
- **→ SURVIVE.** Best-in-class for in-discipline location.

#### Q1.2-F2 (Form 3 absorbed into new Pre-flight Step 0)

- **P:** **Stakes: HIGH** — precedent-setting (no other discipline has Step 0); cross-discipline cascade risk. Burden-of-proof: defense must demonstrate viability. Defense doesn't address why /decompose specifically should set the precedent.
- **D:** Cleanly absorbs the conditional into canonical step sequence.
- **→ DEFERRED-with-revival-trigger.** Revival: if 2+ Cores need Pre-flight Step 0 patterns, revisit cross-discipline. Seed: absorbed-into-step intuition is right; unilateral precedent is wrong.

#### Q1.2-F3 (Runner-level rule in /MVL+)

- **P:** /MVL+ runner gets more responsibility; Workspace Invariant tension ("load only the current discipline's spec" must accommodate runner-level skip logic).
- **D:** Aligns with `enes/loop_desing_ideas/loop_design_1.md`'s separation principle ("disciplines do the thinking; runner does the plumbing"); doesn't touch /decompose's spec; phase-fit `desc-protocol`.
- **→ SURVIVE.** Best-in-class for runner-level location. Workspace Invariant tension is manageable: the runner reads S's output to decide; that's plumbing, not thinking.

#### Q1.2-F4 (Form 2 scattered)

- **P:** Maintenance burden (three places to keep in sync); per Step Refinement primitive's Form 2 framing, scattered guidance is the anti-pattern to LIFT FROM, not embrace.
- **D:** Multiple touchpoints reinforce the conditional pattern.
- **→ KILL.** Seed: if F1 doesn't have enough places to communicate the conditional pattern, the Step Refinement primitive's anchor-link cross-references from Step 1 to Steps 2 and 7 is the correct mechanism, not scattered Form 2.

### Q1.2 — Maintenance-side sub-axis

#### Q1.2-M1 (Runner-level skip; no decomposition.md file)

- **P:** Workspace Invariant says "Write only the current discipline's canonical output file" — skipping the file write is a tension. Downstream Innovation may expect the file present.
- **D:** Couples cleanly to F3; least ceremony; _state.md captures the skip.
- **→ REFINE — pair with M2 hybrid (write a minimal "skipped" file for invariant compliance, but trigger fires at runner level).** Balances separation-of-concerns with invariant respect.

#### Q1.2-M2 (Step-1-level skip with minimal output file)

- **P:** Small ceremony of writing a "skipped" file.
- **D:** Workspace Invariant respected; clean Innovation handoff (Innovation reads decomposition.md, finds "skipped: reason," consumes S directly).
- **→ SURVIVE.** Best-in-class for maintenance side.

#### Q1.2-M3 (Hybrid — both runner notes + minimal file)

- **P:** Redundancy; two records for the same fact.
- **D:** Belt-and-suspenders.
- **→ KILL — dominated by M2 alone.** Seed: M2 is sufficient; if F3 is the spec form, the runner-level note already exists in _state.md naturally without M3's explicit duplication.

### Q2 — Architectural-acknowledgment

#### Q2a-1 (pure D-FIRST acknowledgment) / Q2a-2 (corrective)

- **P (a-1):** Doesn't explicitly correct the user's framing miss.
- **D (a-1):** Neutral; lets the architecture documents speak.
- **P (a-2):** "We earlier framed..." admits a framing miss explicitly; might feel out of place.
- **D (a-2):** Explicitly corrects the framing; user reads the framing update directly.
- **→ Both SURVIVE-as-tone-options.** User picks.

#### Q2b-1 / Q2b-2

Same critique pattern as Q2a. **Both SURVIVE.**

#### Q2-INV (no acknowledgment language)

- **P:** Framing miss persists; user may re-ask. The acknowledgment IS the inquiry's core deliverable for the framing-correction piece.
- **D:** Architecture-documented-elsewhere.
- **→ KILL.** Seed: if the user reads `enes/discipline_taxonomy.md` + `enes/loop_desing_ideas/meta_loop.md` directly, they don't need this finding — but they didn't, hence the inquiry. The acknowledgment must be in the finding.

### Q3 — Meta-action

#### Q3-a (narrow scope; open after this inquiry's verdict ships)

- **P:** Medium cost; potentially premature (this inquiry's verdict + empirical evidence from D-CONDITIONAL shipping might be enough).
- **D:** Validates D-CONDITIONAL against taxonomy formally; concrete seed and trigger.
- **→ DEFERRED-with-revival-trigger.** Revival: only if user explicitly wants the taxonomy validation step beyond empirical evidence.

#### Q3-b (broad scope; full taxonomy review)

- **P:** Over-scoped given current evidence; sample-bias persists; cost-benefit poor.
- **→ KILL on over-scope.** Seed: full taxonomy review is appropriate when 2+ Cores show conditional pattern, not now.

#### Q3-c (signal-based trigger; ≥2 Cores show conditional pattern)

- **P:** Defers indefinitely; might never fire.
- **D:** Clean trigger condition; observable; matches `active-maintenance` phase-fit preference.
- **→ SURVIVE-as-signal-based-future-action.**

#### Q3-INV (don't open it)

- **P:** Forfeits taxonomy formal-validation step.
- **D:** Conservative; "brushing teeth"; relies on empirical evidence from D-CONDITIONAL run; if D-CONDITIONAL ships and works, that's evidence the taxonomy supports flexible reading.
- **→ SURVIVE.** Position: viable; default if D-CONDITIONAL is chosen.

### Q4 — Verdict communication

#### Q4-a (finding.md with subsections)

- **P:** Generic; might not visualize options + baseline cleanly.
- **D:** Default protocol path; preserves three-sub-question structure; phase-fit `desc-protocol`.
- **→ SURVIVE.** Default-recommended.

#### Q4-b (finding.md + comparison table)

- **P:** Bigger artifact than Q4-a alone.
- **D:** Table makes options scannable; rows = options; columns = pros/cons.
- **→ SURVIVE-as-Q4-a-extension.** Integrate as small table within Q4-a.

#### Q4-c (two-tier; full record + 1-paragraph decision card)

- **P:** Dominated by Q4-a-with-lead-paragraph (combination achieves the same).
- **→ REFINE — fold into Q4-a-with-lead-paragraph.**

#### Q4-d (lead-paragraph-only)

- **P:** Loses graded-verdict precision and three-sub-question structure if compressed too much.
- **D:** Lightest weight.
- **→ REFINE — fold into Q4-a as lead paragraph (not standalone).**

#### Q4-INV (no separate verdict artifact)

- **P:** Loses the four required properties (3-sub-question + graded verdict + phase-tag + do-nothing baseline). finding.md IS the artifact; "no separate artifact" means losing finding.md's structure.
- **D:** Conservative.
- **→ KILL.** Seed: if the user reads finding.md alone (Q4-a default), the four properties survive; "no separate artifact" interpretation is structural-no-finding which violates CONCLUDE protocol.

---

## Phase 3 — Verdicts Summary (Constructive)

### KILLs with seeds

| Candidate | Killer dimension | Seed extracted |
|---|---|---|
| Q1.2-INV | Stakes + Sample-bias | Default-conditional is long-horizon direction after multi-head ships and shape-diversity data accumulates |
| Q1.2-F4 | Form 2 anti-pattern | Use Step Refinement's anchor-link cross-references from F1, not scattered guidance |
| Q1.2-M3 | Dominated by M2 | M2 alone is sufficient; F3+M2 hybrid handles runner-level concerns naturally |
| Q2-INV | Loses framing acknowledgment | User reading `enes/` docs directly didn't happen — hence the inquiry; acknowledgment must be in finding |
| Q3-b | Over-scope | Open only when 2+ Cores show conditional pattern |
| Q4-INV | Loses four required properties | finding.md IS the artifact per CONCLUDE; "no artifact" interpretation violates protocol |

### REFINEs (with merge target or mitigation)

| Candidate | Refinement direction |
|---|---|
| Q1.1-d | Fold into Q1.1-b/c or place in finding |
| Q1.2-T1 | Operationalize — T2 is the more concrete version |
| Q1.2-T4 | Narrow specification: "S has named partition AT THE LEVEL D would operate, INCLUDING sub-pieces" |
| Q1.2-T5 | Present as complement (manual override flag), not primary |
| Q1.2-M1 | Pair with M2 hybrid (runner-level trigger + minimal file) |
| Q4-c | Fold into Q4-a-with-lead-paragraph |
| Q4-d | Fold into Q4-a as lead paragraph |

### SURVIVEs

| Candidate | Position |
|---|---|
| Q1.1-a (pure status quo) | Baseline option |
| Q1.1-b (+ full Assembly A) | Recommended companion if KEEP-CURRENT chosen |
| Q1.1-c (+ honest value tag only) | Minimum-viable refinement |
| Q1.2-T2-mitigated (Layer-0-only with explicit-declaration) | Best-in-class trigger |
| Q1.2-T6 (multi-signal hybrid) | Robust trigger pattern |
| Q1.2-F1 (Form 1 in /decompose) | Best-in-class for in-discipline |
| Q1.2-F3 (runner-level) | Best-in-class for runner-level |
| Q1.2-M2 (Step-1-level skip + file) | Best-in-class for maintenance |
| Q2a-1, Q2a-2, Q2b-1, Q2b-2 | Tone options; both viable |
| Q3-c (signal-based trigger) | Future-action |
| Q3-INV (don't open meta-action) | Default if D-CONDITIONAL chosen |
| Q4-a (with lead + table) | Default-recommended artifact |
| Q4-b (folded into Q4-a) | Table integration |

### DEFERRED with revival trigger

| Candidate | Revival trigger |
|---|---|
| Q1.2-T3 (value-tag-history) | Q1.1-f ships AND ≥3 similar-shape inquiries accumulate value tags |
| Q1.2-T4-refined | After Q1.2-T2-with-explicit-declaration ships and accumulates data showing whether the corpus pattern (S surfaces; D reformats) holds |
| Q1.2-F2 (Pre-flight Step 0) | If 2+ Cores need Pre-flight pattern (cross-discipline review) |
| Q3-a (open meta-action narrow) | If user explicitly wants taxonomy formal-validation step |
| Assembly A (Honest-conditional) | Q1.2-T3 revival trigger fires; signal infrastructure exists |

---

## Phase 3.5 — Assembly Check

### Assembly A — "Honest-conditional"

**Components:** Q1.1-c + Q1.2-T3 + Q1.2-F3 + Q1.2-M1+M2-hybrid + Q2a-2 + Q2b-2 + Q4-b

- **P:** Triple chained dependency — Q1.1-f ships + signal accumulates + inquiry-shape vocabulary exists. Future-state assembly, not immediate.
- **D:** Multi-mechanism convergence (3+ mechanisms point to honest-signal-source); evidence-respecting; phase-fit OK.
- **→ DEFERRED-with-revival-trigger.** Revival: Q1.1-f ships and signal accumulates. Then Assembly A becomes ACTIONABLE.

### Assembly B — "Layer-0-only conditional"

**Components:** Q1.1-a (or Q1.1-c minimal) + Q1.2-T2-mitigated + Q1.2-F1 + Q1.2-M2 + Q2a + Q2b (either tone) + Q3-INV + Q4-a-with-table

- **P:** T2 has specification-gap (threshold; mitigated by explicit-declaration). F1 in /decompose's spec adds a rule.
- **D:** Independent of prior audit's Assembly A (not chained); corpus-grounded (8/10 audit pattern); phase-fit `desc-machinery`; Workspace Invariant compliant; matches Step Refinement primitive's canonical form.
- **→ SURVIVE.** Position: viable, **primary D-CONDITIONAL recommendation.**

### Assembly C — "Conservative status quo"

**Components:** Q1.1-a (or Q1.1-c minimal) + Q2a + Q2b (acknowledgments) + Q3-INV + Q4-a

- **P:** Forfeits actionable gradient; perfunctory machinery in Layer-0-only inquiries persists.
- **D:** Zero cost; respects 0-NEGATIVE; aligned with always-pipeline rule (taxonomy strict reading); audit-verdict-stands; "brushing teeth" disposition.
- **→ SURVIVE-as-baseline.** Audit's MEDIUM-typical doesn't force action.

### Assembly D — "Runner-level conditional + phase-tag"

**Components:** Q1.1-d + Q1.2-T6 + Q1.2-F3 + Q1.2-M1+M2-hybrid + Q2a-2 + Q2b-2 + Q3-INV + Q4-b

- **P:** Multiple coordinated edits (phase-tag note + F3 spec + Q1.1-d) increase spec-drift risk; runner-level rule expands /MVL+'s responsibility.
- **D:** Coherent edit; multi-signal trigger reduces false-skip risk; phase-fit `desc-protocol`; doesn't touch /decompose's spec (cleaner separation).
- **→ SURVIVE.** Position: viable alternative to Assembly B; trades off (a) /decompose spec stays cleaner vs (b) /MVL+ runner gets more responsibility.

---

## Inquiry-Level Verdict

### Form 1 — Graded answer to user's question

The user asked: should D be elsewhere or removed, or stay where it is?

Per Sensemaking SV6, the question dissolves into THREE sub-questions because "decomposition" names three distinct cognitive operations. Each has its own answer:

| Sub-question | Verdict | Confidence |
|---|---|---|
| Should /decompose's intra-MVL+ position change? | **Two viable paths:** KEEP-CURRENT (Assembly C — zero cost, baseline) or D-CONDITIONAL (Assembly B — corpus-grounded, low cost). Both defensible; user picks. D-REMOVE killed by 0-NEGATIVE; D-CONDITIONAL with default-conditional inversion killed by stakes. | HIGH on the option-set; **MEDIUM on which is best (graded evidence supports D-CONDITIONAL slightly; conservative disposition supports KEEP-CURRENT)** |
| Should multi-head meta-loop (the D-FIRST direction) be brought forward? | **NO — structurally deferred.** Sequential meta-loop maturity is the prerequisite. Affirm the direction in finding without forcing the action. | HIGH |
| Is the D-AFTER-C framing already covered by /navigation? | **YES — verbatim operation overlap.** No new discipline. Acknowledge in finding. | HIGH |

### Form 2 — User-facing decision-prompt

The user has FOUR primary paths + one deferred:

#### Path 1 — RECOMMENDED — Assembly B (Layer-0-only D-CONDITIONAL)

- Add a Form 1 standalone refinement note at /decompose Step 1: "Skip-trigger check — if all candidate pieces will be Layer-0 with no cross-piece interfaces, write minimal decomposition.md (`Skipped: Layer-0-only inquiry; Innovation should consume S's SV6 directly`) and exit; else proceed to Step 2." (Q1.2-F1 + Q1.2-T2-mitigated)
- Inherit "explicit declaration when skipped" mitigation from prior audit's Q1.2-a-mitigated.
- Maintenance: write the minimal "skipped" file (Workspace Invariant respected).
- Optionally pair with Q1.1-c (add honest value tag from prior audit) to enable future T3/Assembly-A migration.
- Finding includes Q2 acknowledgments + Q3-INV + Q4-a with comparison table.

Rationale: corpus-grounded (Layer-0-only is the audit's strongest pattern at 8/10); independent of prior audit's Assembly A (not chained); phase-fit `desc-machinery` (low risk); preserves discipline taxonomy (D runs sequentially when it runs; Core admission rule preserved).

#### Path 2 — ALTERNATIVE — Assembly D (runner-level D-CONDITIONAL)

- Place skip rule in /MVL+ runner spec, not in /decompose's spec.
- Multi-signal trigger (T2 + refined-T4 + T5 as complement).
- /decompose's spec stays unchanged.
- Phase-tag note + acknowledgments + Q3-INV + Q4-b.

Rationale: aligns with `enes/loop_desing_ideas/loop_design_1.md`'s separation principle; /decompose stays clean; trades runner-spec growth for discipline-spec stability.

#### Path 3 — BASELINE — Assembly C (conservative status quo)

- No spec changes to /decompose or /MVL+.
- Finding includes only Q2 acknowledgments + Q3-INV + Q4-a.
- Audit's verdict + this inquiry's verdict together give the user the architectural map; no spec-level action.

Rationale: zero cost; respects 0-NEGATIVE counter-evidence; "brushing teeth" disposition; the audit's MEDIUM-typical doesn't force action. **This is a real choice, not a strawman.**

#### Path 4 — DEFERRED — Assembly A (honest-conditional)

- Future-state path requiring prior audit's Assembly A to ship first.
- Revival trigger: Q1.1-f from prior audit ships AND ≥3 similar-shape inquiries accumulate value tags.

Rationale: most evidence-respecting long-term path but currently lacks signal infrastructure.

#### Critique's recommendation

**Ship Path 1 (Assembly B) + adopt Path 4 (Assembly A) as the future-state direction.**

Specifically:
- Now: Add Q1.2-F1 + Q1.2-T2-mitigated + Q1.2-M2 (one Form 1 refinement note in /decompose Step 1, with the corpus-grounded Layer-0-only trigger and Workspace-Invariant-compliant maintenance).
- Now: Optionally pair with Q1.1-c (lightweight; adds the honest value tag from prior audit's Assembly A — creates signal infrastructure for future T3 migration).
- Now: Q2 acknowledgments in finding (corrective tone preferred — Q2a-2 + Q2b-2 — explicitly correct the framing).
- Now: Q3-INV (don't open meta-action; D-CONDITIONAL's empirical run is the validation).
- Now: Q4-a with comparison table.
- Future: when Q1.1-f matures and value-tag history exists, migrate to T3 trigger (Assembly A).

If user prefers Path 2 (runner-level), the swap is F1→F3 + M2→M1+M2-hybrid; everything else same.

If user prefers Path 3 (do-nothing), critique acknowledges this is legitimate; the audit's MEDIUM-typical verdict doesn't force action.

---

## Project-Specific Risks

1. **Discipline taxonomy destabilization risk.** D-CONDITIONAL changes how a Core discipline relates to the always-pipeline rule. *Mitigation:* sensemaking already resolved that "pipeline-sequential" can be read flexibly (D runs sequentially WHEN it runs); D-CONDITIONAL doesn't break Core admission. Critique confirms this resolution holds.

2. **Signal-infrastructure-not-yet-built risk.** Assembly A depends on Q1.1-f shipping and accumulating data; that infrastructure doesn't exist yet. *Mitigation:* defer Assembly A; ship Assembly B which uses corpus-grounded triggers (Layer-0-only) that don't need new infrastructure.

3. **Phase-mismatch risk.** Verdict calibrated for current project phase (sequential MVL+ exists; meta-loop deferred). After multi-head ships, the right answer may shift. *Mitigation:* phase-tag preserved in verdict; explicit revisit-when-phase-changes annotation.

4. **Framing-collapse-recurrence risk.** The user's "decomposition can sit anywhere" framing might recur in future inquiries. *Mitigation:* Q2 acknowledgments make the framing structure visible; future framing collapses can be referred back to this inquiry's verdict by the disambiguation it produced (three operations, three architectural layers).

5. **Self-application validation gap (Q1.2-T4 specifically).** T4's first-pass specification would have skipped THIS D; refined T4 mitigates but hasn't been tested. *Mitigation:* T4 is in DEFERRED-with-revival-trigger; its refinement comes after Q1.2-T2-with-explicit-declaration ships and accumulates data on whether the corpus pattern (S surfaces; D reformats) holds for non-meta-design inquiries.

6. **Spec-drift risk** (carryover from prior audit). Multiple coordinated edits across /decompose's spec from this inquiry + prior audit's Assembly A. *Mitigation:* edits are bounded; ship as a single coordinated diff referencing both inquiries; Step Refinement primitive's Three Forms framework absorbs them cleanly.

---

## Convergence Telemetry

- **Dimension coverage:** 10 dimensions (6 default + 4 project-specific); validated against sensemaking SV6 perspectives (technical / human / strategic / risk / feasibility / definitional / phase-calibration).
- **Adversarial strength:** STRONG. Multi-axis prosecution depth applied especially for Q1.2-T4 (user-perspective + failure-case scenario + specification-gap probe). Concrete failure-case (this inquiry's own D would have been skipped) constructed.
- **Landscape stability:** STABLE. Assemblies tested; no new regions emerged.
- **Clean SURVIVE:** YES. Assembly B is a clean SURVIVE; Q1.1-a, Q1.1-b, Q1.1-c, Q1.2-T2-mitigated, Q1.2-F1, Q1.2-F3, Q1.2-M2, Q4-a individually clean SURVIVE.
- **Verdicts:** 6 KILLs (with seeds), 7 REFINEs (with merge targets), 13 SURVIVEs, 5 DEFERREDs (with revival triggers) — mixed distribution; not rubber-stamped.
- **Failure modes observed:** NONE.
  - Wrong dimensions: project-specific axes added per refinement note.
  - Rubber-stamping: 6 KILLs; not stamping.
  - Nitpicking: each KILL has stake-justified reasoning.
  - Dimension blindness: cross-checked against sensemaking 7 perspectives.
  - False convergence: 4 convergences, each ≥3 mechanisms; assemblies have explicit defense.
  - Evaluation drift: dimensions held constant across all candidates.
  - Self-reference collapse: external grounding via this inquiry's empirical Q1.2-T4 self-application case (concrete failure-case construction).
- **Overall: PROCEED.** Critique can hand off to CONCLUDE.
