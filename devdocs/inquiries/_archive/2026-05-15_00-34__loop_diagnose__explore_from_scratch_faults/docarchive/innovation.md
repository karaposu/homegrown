# Innovation: Concrete maintenance candidates per fault-dimension piece

## User Input

`devdocs/inquiries/2026-05-15_00-34__loop_diagnose__explore_from_scratch_faults/_branch.md` plus upstream `exploration.md` (26 candidates / 6 regions), `sensemaking.md` (5 fault dimensions; 3 attribution categories; iter-2 partial-correction status), `decomposition.md` (5-piece question tree P1–P5; 5 interfaces; B8 strong coupling P3↔P4 shared CONCLUDE substrate; 3-phase sequencing).

Seed: generate concrete maintenance candidates (specific spec-edit text, mechanism designs, evaluation gates) for each of the 5 decomposed pieces. Architecture and scope are locked; within-piece design choices are open.

---

## Direction

### Context
The diagnostic produced 5 fault dimensions with per-dimension iter-1 attribution. Maintenance applies to current spec and process artifacts: `homegrown/explore/references/explore.md` (P2 NOT-list restructure); `homegrown/protocols/conclude.md` or new meta-protocol (P3 deferral-binding + P4 COULD-vs-MUST gating, sharing substrate per B8); `homegrown/sense-making/references/sensemaking.md` or `homegrown/MVL+/SKILL.md` (P1 layer-test); `thinking_disciplines/anatomy_of_disciplines.md` (P5 anatomy-flex amendment).

### Valuation (what feels load-bearing)
- The user's deepest objection (Dim 2) is about identity-by-negation. The most user-visible payoff is P2 — the NOT-list restructure or removal.
- The strong B8 coupling (P3↔P4 share CONCLUDE substrate) means designing them together with one substrate is high-leverage.
- P5 is the long-term cleanup that frames future discipline rewrites and gives P2's restructure a principled home.
- P1 is the meta-process improvement that prevents future Dimension-1-class faults from recurring.

### Motivation
The user's recurring concern across multiple loop_diagnoses is that homegrown's discipline rewrites have produced quality regressions. The maintenance candidates here aim to make the same fault patterns harder to repeat — both by fixing what's there (P2) and by adding governance that catches future violations (P3+P4).

---

## Phase 2 — Generation (7 mechanisms × 3 variations = 21 candidates)

Each candidate notes which piece(s) it bears on.

### 1. Lens Shifting (Framer)

**LS-G (generic) — "Fix the meta-processes more than the specs."**
Frame: under this lens, the highest-leverage maintenance is P3 + P4 (governance that prevents recurrence) rather than P2 (one-off spec edit). P2 still ships, but P3 + P4 take priority because they prevent the next iter-1-class problem. Bears on: overall sequencing.

**LS-F (focused) — "User-confirmation gate as a STANDARD CONCLUDE feature, not a per-piece add-on."**
Frame: every COULD that depends on a MUST gets gated by default in CONCLUDE. P2's user-confirmation gate is not a special case; it's an instance of CONCLUDE's standard behavior. Bears on: P4 design, P2 implementation.

**LS-C (contrarian) — "Halt all discipline-spec rewrites until meta-protocol governance ships."**
Frame: until P3 + P4 are in place, every spec rewrite risks re-introducing the same fault patterns. Pause discipline-spec work; ship governance first. Bears on: workflow.

### 2. Combination (Generator)

**CB-G (generic) — "P3 + P4 in one file: `homegrown/protocols/deferred_governance.md`."**
Honor the B8 coupling with maximum cohesion. Both gating mechanisms (deferred-vs-active activation + COULD-vs-MUST) live in one new meta-protocol file with two sub-sections, sharing vocabulary and check-firing infrastructure. CONCLUDE.md cross-references it; doesn't absorb it. Bears on: P3 + P4 substrate decision.

**CB-F (focused) — "P5 + P1 combined into one umbrella concept ('default-divergence-justification')."**
Frame: P5 (anatomy-flexibility) and P1 (layer-test) are both about "when an inquiry diverges from defaults, document the divergence." Could merge into a single anatomy-amendment section. Bears on: P5 + P1.

**CB-C (contrarian) — "P2 as the worked example chapter of P5."**
Frame: P5 ships first as the anatomy-flexibility amendment with `/explore`'s NOT-list restructure cited as the first concrete instance. P2 isn't a separate edit; it's a section in P5's worked-example documentation that references the actual spec edit. Bears on: P2 + P5 framing.

### 3. Inversion (Framer)

**IN-G (generic, level-1 component) — "Don't gate; delete."**
Invert "add gating mechanisms" → "remove the things gating would prevent." Instead of P3, DELETE all deferred items in current `/explore` that don't have evidence of trigger-firing. Instead of P4, make COULDs not present in finding template until MUST resolved (write-time prevention). Bears on: P3 + P4 alternative direction.

**IN-F (focused, level-2 system — depth-check inversion of IN-G) — "Drift is natural; gates require justification."**
Frame: each spec item must include a "load-bearing for what" justification at write-time. Items without load-bearing-for-what get pruned during routine spec maintenance. The burden of proof flips: additions are presumed ungated unless explicitly justified. This is the system-level inversion of "spec accumulates additions and trusts deferral-with-revival." Bears on: P3 design philosophy.

**IN-C (contrarian) — "Preserve the rewrite as is; add failure-mode tracking."**
Frame: don't restructure `/explore` at all. Treat the rewrite as an experiment that gathered data. Add observation hooks (logging which sections of /explore actually fire downstream bias). Wait for evidence before editing. Bears on: P2 alternative — wait-and-observe.

### 4. Constraint Manipulation (Framer)

**CM-G (generic) — "No spec edit can introduce new failure modes / annotation layers / structural commitments without 3+ documented instances of the failure-mode firing OR 3+ uses of the layer in real inquiries."**
Add this constraint to spec-edit governance. Forces evidence-based addition. Bears on: P3 design + spec-edit checklist.

**CM-F (focused) — "Remove the constraint 'every discipline must follow the universal anatomy.'"**
Frame: P5's amendment is just this constraint removal — explicitly. The amendment text states the universal anatomy is a starting template; divergence permitted. Bears on: P5 wording (minimal, permissive).

**CM-C (contrarian) — "Discipline specs MAX 5KB."**
Add a hard size limit. Current `/explore` is 43KB. Forces tradeoffs about what matters. Bears on: P2 + P5 + general spec maintenance.

### 5. Absence Recognition (Generator)

**AR-G (generic — gap in current design) — "There is no audit operation against iter-1's deferred-with-revival list."**
What's missing: a one-shot operation that reads current `/explore` spec, lists all elaborations, cross-references against iter-1's deferred list, flags any without revival-trigger evidence. Could be a script or a one-time MVL+ inquiry. Bears on: phase-0 immediate action.

**AR-F (focused — gap in design-from-scratch process) — "There is no pre-inquiry layer-commitment declaration for from-scratch / redefinition inquiries."**
What's missing: when an inquiry's question is a from-scratch redefinition of a discipline or protocol, the inquiry should declare its layer commitment (meaning-layer / structural-layer / process-layer) before the pipeline starts. `_branch.md` gains a "Layer Commitment" subsection. Bears on: P1 design.

**AR-C (contrarian — designed-from-scratch absence) — "There is no second-order discipline that operates on disciplines."**
What's missing: a `/discipline-design` second-order skill that uses different mechanisms than the first-order /explore + /sense-making + /decompose + /innovate + /td-critique pipeline. Architecturally invasive. Bears on: research frontier.

### 6. Domain Transfer (Generator)

**DT-G (generic — schema migrations) — "Deferred-with-revival items as schema migrations."**
Database schema migrations (e.g., Alembic) require explicit "up" and "down" migrations; deferred features are pending migrations that require explicit application. Apply: deferred-with-revival items in spec have explicit "activation migration" entries that reference revival evidence. Activating a deferred item requires writing the migration entry with evidence cited. Bears on: P3 mechanism design.

**DT-F (focused — code review checklists) — "Spec-edit checklist."**
GitHub PR templates have checkboxes ("tests added; docs updated; changelog entry"). Apply: a SPEC-EDIT CHECKLIST in CONCLUDE.md or a sibling protocol that requires checking off "anatomy divergence justified or N/A; deferred items consulted; failure modes added have 3+ instances or N/A." Lightweight. Bears on: P3 + P4 + P5 implementation pattern.

**DT-C (contrarian — biology / niche-defined identity) — "Define disciplines by what they DO (positive identity), neighbor relationships are archival."**
Biological organisms are defined by their niche (what they do in the ecosystem), not by phylogenetic exclusion. Apply: define `/explore` by its cognitive operation as positive identity ("purposive open-mode surfacing of a territory"); separate the project's discipline-taxonomy notes (NOT-list against neighbors) into an ARCHIVAL document, not embedded in the runtime spec. Directly addresses the user's inline objection. Bears on: P2 wording direction.

### 7. Extrapolation (Generator)

**EX-G (generic — trend extension) — "Discipline-redefinition checklist (bundle of P1+P3+P4+P5 guidance for redefinition inquiries)."**
If the project keeps doing from-scratch redefinitions, the same fault patterns recur. Bundle the layer-test (P1), anatomy-flexibility check (P5), deferral-binding (P3), and self-reference acknowledgment (P4) into a single pre-inquiry checklist for redefinition-class inquiries. Bears on: cross-cutting maintenance artifact.

**EX-F (focused — autonomy ladder) — "v1 manual COULD-vs-MUST gating; v2 auto-gating at autonomy Level 3+."**
Per `enes/desc.md`'s autonomy-ladder concept, current autonomy Level 0–1 has the human in the loop on every decision. v1 of P4 (manual gating with user confirmation) is calibrated for current state. v2 (auto-gating without human) activates at Level 3+. Match P4's revival trigger to autonomy ladder progression. Bears on: P4 deferred-extension revival trigger.

**EX-C (contrarian — fault-cascade extrapolation) — "Default policy: no from-scratch redefinitions of stable disciplines."**
If iter-1's faults produced this much downstream cost, future iter-1-class faults will produce more. Replace from-scratch operations with delta-only operations as default; require explicit external pressure (specific failure mode firing 3+ times) before allowing from-scratch. Bears on: workflow research frontier.

---

## Phase 3 — Testing (5-test cycle on each candidate)

### Per-candidate verdicts

| ID | Novelty | Scrutiny survival | Fertility | Actionability | Mech. independence | Verdict | Bears on |
|---|---|---|---|---|---|---|---|
| **LS-G** meta-process priority | Low | Survives — implicit in P3+P4 priority | Medium | High | Convergent (CB-G priority) | SURVIVE → REFINE | sequencing |
| **LS-F** standard CONCLUDE feature | Medium | Survives — extends P4 to permanent | High | High | Convergent (DT-F) | SURVIVE → ACTIONABLE | P4 |
| **LS-C** halt rewrites | High contrarian | Fails — overkill; governance ships in days not months | Low | Low | Single-mechanism | KILL (seed: prioritize P3+P4 ahead of next rewrite) | — |
| **CB-G** single deferred_governance.md file | Low (decomposition flagged option) | Survives strongly — honors B8 cohesion | High | High | Convergent (DT-G adjacent) | SURVIVE → ACTIONABLE | P3 + P4 substrate |
| **CB-F** P5+P1 umbrella | Medium | Forced merge — P5 universal-anatomy and P1 per-inquiry layer-test have different scopes | Low | Medium | Single-mechanism | KILL (seed: cross-reference each other in their respective documents) | — |
| **CB-C** P2 as P5 worked example | Medium | Survives — frames P2 elegantly | High | High | Convergent (LS-G priority) | SURVIVE → REFINE | P2 + P5 framing |
| **IN-G** delete don't gate | Medium contrarian | Fails — destroys optionality information; deferred items document possible future | Low | Low | Single-mechanism | KILL (seed: AR-G audit identifies what to delete vs preserve) | — |
| **IN-F** drift is natural; gates need justification | High system-level | Survives — flips burden of proof to additions | High | Medium-High | Convergent (CM-G) | SURVIVE → REFINE | P3 design philosophy |
| **IN-C** preserve rewrite + observe | High contrarian | Fails — punts the work; doesn't address user's explicit fault claim | Medium | Low | Single-mechanism | KILL (seed: post-deployment observation belongs in evaluation gates) | — |
| **CM-G** 3+ instances rule | Medium | Survives — addresses activation-without-trigger root cause. Strongest objection: blocks legitimate refinement → answered by "applies only to new failure modes / layers / structural commitments, not to bug fixes / clarifications" | High | High | Convergent (IN-F) | SURVIVE → ACTIONABLE | P3 + spec-edit guidance |
| **CM-F** remove "must follow universal anatomy" | Low | Survives — IS what P5 wants (minimal permissive amendment) | Medium | High | Single-mechanism | SURVIVE → ACTIONABLE | P5 wording |
| **CM-C** 5KB max spec | High contrarian | Fails — arbitrary; specs are as long as their cognitive operations require | Low | Low | Single-mechanism | KILL (seed: parsimony principle is real but explicit max isn't right tool) | — |
| **AR-G** audit operation against iter-1 deferred list | Medium-High | Survives — concrete one-shot operation; produces evidence for further maintenance | Medium | High | Single-mechanism | SURVIVE → ACTIONABLE | phase-0 immediate action |
| **AR-F** pre-inquiry layer-commitment declaration | Medium | Survives — concrete addition to MVL+ pre-pipeline or `_branch.md` template | High | High | Convergent (EX-G, DT-F) | SURVIVE → ACTIONABLE | P1 |
| **AR-C** second-order /discipline-design skill | High | Massive scope; multi-phase | High far-future | Low | Single-mechanism | RESEARCH FRONTIER | — |
| **DT-G** deferred items as schema migrations | Medium | Survives — concrete mechanism with proven analog | High | Medium-High (requires migration format design) | Convergent (CM-G) | SURVIVE → REFINE | P3 mechanism |
| **DT-F** spec-edit checklist | Low-Medium | Survives — lightweight; complementary | High | High | Convergent (EX-G, AR-F) | SURVIVE → ACTIONABLE | P3 + P4 + P5 implementation pattern |
| **DT-C** positive identity; archival neighbors | Medium-High | Survives — directly addresses C1 user objection | High | High | Closely matches user's inline reasoning | SURVIVE → ACTIONABLE | P2 wording |
| **EX-G** redefinition checklist bundle | Medium | Survives — packages multiple pieces into one usable artifact | High | High | Convergent (AR-F, DT-F) | SURVIVE → ACTIONABLE | cross-cutting artifact |
| **EX-F** autonomy ladder revival trigger | Low | Survives — well-aligned with project trajectory | Medium | High (just adds revival trigger language) | Single-mechanism | SURVIVE → ACTIONABLE | P4 deferred extension |
| **EX-C** no from-scratch as default | High contrarian | Fails — from-scratch is sometimes the right move; over-restrictive | Medium | Low | Single-mechanism | KILL (seed: workflow guidance, not policy) | — |

### Disposition tally

| Disposition | Count | Candidates |
|---|---|---|
| **ACTIONABLE** (multi-source convergent or unique-mechanism with strong evidence) | 9 | LS-F, CB-G, CM-F, AR-G, AR-F, DT-F, DT-C, EX-G, EX-F |
| **SURVIVE → REFINE** (need within-design refinement before actionable) | 5 | LS-G, CB-C, IN-F, CM-G, DT-G |
| **RESEARCH FRONTIER** | 1 | AR-C |
| **KILL** | 6 | LS-C, CB-F, IN-G, IN-C, CM-C, EX-C |

---

## Assembly Check

Combining the ACTIONABLE survivors per piece produces a coherent maintenance design:

### The assembled per-piece designs

| Piece | Concrete design choice | Source mechanism(s) |
|---|---|---|
| **P1** (Dim 1 layer-test) | Pre-inquiry layer-commitment declaration: when an inquiry's question is a from-scratch / redefinition / meta-question on a discipline or protocol, `_branch.md` gains a "Layer Commitment" subsection that declares meaning-layer / structural-layer / process-layer choice and lists candidate other-layer alternatives that were considered. Bundled into a redefinition-checklist (EX-G) for the broader from-scratch case. Insertion point: `homegrown/MVL+/SKILL.md` (pre-pipeline check) plus `_branch.md` template note. | AR-F + EX-G + DT-F |
| **P2** (Dim 2 NOT-list restructure) | Define `/explore` by positive identity (cognitive operation per iter-2's verb-meaning grounding): "purposive open-mode surfacing of a territory." Move the existing 5-entry NOT-list out of the runtime spec into a separate "Project Discipline-Taxonomy Notes" section flagged as project-specific (not cognitive-operation-essential), OR move it to a sibling document `homegrown/explore/project_taxonomy_notes.md`. The runtime spec defines what `/explore` IS; project-taxonomy facts about neighbors live in archival/reference scope only. Frame as worked example of P5's anatomy-flexibility (per CB-C). User-confirmation gate required (mirrors iter-1's failed MUST gate; uses P4's standard CONCLUDE gating per LS-F). | DT-C + CB-C + LS-F |
| **P3** (Dim 3 deferral-binding) | New meta-protocol `homegrown/protocols/deferred_governance.md` (per CB-G; honors B8 strong coupling — same file as P4). Two sub-sections: (a) deferred-item-activation governance with explicit "activation migration" entries per DT-G — activating any deferred item requires writing a migration entry that cites the revival trigger's evidence; (b) the 3+-instances-rule from CM-G constrains adding new failure modes / annotation layers / structural commitments. Spec-edit checklist (DT-F) cross-references this protocol. | CB-G + DT-G + IN-F + CM-G |
| **P4** (Dim 4 self-reference + COULD-vs-MUST gating) | In the same `deferred_governance.md` (per CB-G): COULD-vs-MUST gating section makes it CONCLUDE's standard behavior (LS-F) — every COULD that depends on a MUST in the same finding's Next Actions is gated until MUST is resolved. Self-reference check is a pre-pipeline addition to MVL+: when the inquiry's question targets a discipline/protocol the inquiry uses, `_branch.md` gains a "Self-Reference Acknowledgment" subsection with required external grounding sources. v2 deferred extension: auto-gating at autonomy Level 3+ (per EX-F). | LS-F + CB-G + EX-F |
| **P5** (Dim 5 anatomy-flex) | Minimal permissive amendment to `thinking_disciplines/anatomy_of_disciplines.md`: remove the implicit "every discipline must follow" framing (per CM-F); add one section stating the universal anatomy is a starting template, divergence permitted with rationale. Spec-edit checklist (DT-F) gains "anatomy divergence justified or N/A" item. | CM-F + DT-F |
| **Phase 0 (immediate, cross-cutting)** | One-shot audit operation (AR-G): read current `homegrown/explore/references/explore.md`, enumerate elaborations beyond the bf4ae1f baseline, cross-reference against iter-1's deferred-with-revival list; flag any elaboration without trigger-firing evidence. Output: an audit report consumed by P3 design (as evidence for binding mechanism strength) and by P2 (as evidence for what the restructure should preserve vs prune). | AR-G |

### Emergent value of the assembly

- **The redefinition-checklist (P1's bundle of AR-F + EX-G + DT-F)** prevents 3 of 5 fault dimensions (Dim 1 layer-mismatch, Dim 4 self-reference, Dim 5 inherited status-quo bias) at the inquiry-start gate. One artifact addresses three dimensions because they share the upstream root: from-scratch-redefinition inquiries lack pre-pipeline structural commitment-checking. The checklist is the missing structural commitment-checking.
- **The single-file `deferred_governance.md` (CB-G)** realizes B8 coupling productively: P3's deferral-binding and P4's COULD-vs-MUST gating share substrate, vocabulary, and check-firing infrastructure. CONCLUDE.md cross-references rather than absorbing — keeps CONCLUDE focused on its current job (compile findings) while delegating governance to a sibling protocol.
- **AR-G's one-shot audit + P2's restructure** together produce evidence-grounded restructure rather than guesswork-driven restructure. The audit identifies which current `/explore` elaborations have trigger-firing evidence (preserve) vs not (candidates for restructure or prune). P2's restructure thus operates on evidence.
- **DT-F's spec-edit checklist** is a thin layer that ties P3 + P4 + P5 into a single touchpoint at every spec edit. Even if a spec author skips reading the underlying protocols, the checklist surfaces what to consider.

---

## Axis Coverage Check

| Axis | Variants in candidate set | Coverage |
|---|---|---|
| Time-locus (immediate vs medium vs long-term) | Phase 0 (AR-G audit), Phase 1 (P5 + P1 LOW risk), Phase 2 (P3 + P4 MEDIUM), Phase 3 (P2 MEDIUM with gate) | ✓ |
| Locus (per-spec vs meta-protocol) | Per-spec: P2 NOT-list edit. Meta-protocol: P1, P3, P4, P5 all touch project-wide protocols/specs. | ✓ |
| Mechanism direction (additive vs subtractive) | Additive: P1 layer-test, P3 + P4 governance, P5 amendment. Subtractive: P2 NOT-list restructure (move out of runtime spec). KILL'd: IN-G outright deletion. | ✓ |
| Stakes / risk class (low / medium / high) | LOW: P5, P1, AR-G audit. MEDIUM: P2, P3, P4. HIGH: AR-C second-order discipline (RESEARCH FRONTIER). | ✓ |
| User-confirmation-gate strategy (per-piece vs standard) | Per-piece: P2 v1 with one-off gate. Standard: LS-F → P4 makes gating CONCLUDE's default. Both variants present. | ✓ |
| Evidence-burden direction (additive vs deletional) | Additive: CM-G 3+-instances-rule for new additions. Deletional: KILL'd IN-G delete-without-evidence. The surviving direction is additive-with-evidence. | ✓ |
| Scope (this-diagnostic-only vs project-wide) | This-diagnostic: P2 specific edit. Project-wide: P1, P3, P4, P5. | ✓ |
| Substrate (single-file consolidation vs cross-file references) | Consolidation: CB-G (P3+P4 in one file). Cross-file references: P1 references MVL+ + sensemaking; P5 references discipline specs that diverge. | ✓ |

8 axes; each has at least one variant in the candidate set. No single-axis bias detected.

---

## Mechanism Coverage Telemetry

- **Generators applied:** 4 / 4 (Combination, Absence Recognition, Domain Transfer, Extrapolation)
- **Framers applied:** 3 / 3 (Lens Shifting, Constraint Manipulation, Inversion — including IN-F system-level inversion)
- **Total candidates generated:** 21 (7 mechanisms × 3 variations)
- **Convergence signal:** YES — multiple mechanisms (CB-G, DT-G, IN-F, CM-G) converge on the deferred_governance protocol design with explicit migration entries + 3+-instances rule. AR-F + EX-G + DT-F converge on the pre-inquiry redefinition checklist. DT-C + CB-C converge on P2's positive-identity restructure framing.
- **Survivors tested:** 21 / 21 (all candidates received the 5-test cycle)
- **Failure modes observed:** None
  - **Premature evaluation:** No — all candidates generated before testing began
  - **Single-mechanism trap:** No — all 7 mechanisms applied
  - **Early frame lock:** No — the user's framing was probed via LS, inverted via IN, expanded via CB, before settling on the convergent assembly per piece
  - **Innovation without grounding:** No — every survivor was tested; failures (6 KILL) were extracted as seeds where applicable
  - **Mechanism exhaustion:** No — viable outputs in every mechanism
  - **Survival bias:** Tested — the most uncomfortable candidates (IN-F system-level inversion of "drift is natural"; DT-C reframe of identity-by-positive-definition that touches the user's deepest objection) were SURVIVE'd because the structural argument supports them, not KILL'd for being threatening; conversely, contrarian KILL'd candidates (LS-C halt, CM-C 5KB max, EX-C no-from-scratch-default) were KILL'd because they failed scrutiny on structural grounds, not because they were uncomfortable.

**Overall: PROCEED** — full mechanism coverage; convergence signal strong (3 sub-assemblies emerged); 21/21 survivors tested with explicit dispositions; no failure modes triggered; axis coverage complete across 8 design axes.
