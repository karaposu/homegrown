# Structural Decomposition — lone_traversal_loop_operational_breakthrough

## User Input

devdocs/inquiries/2026-06-10_14-41__lone_traversal_loop_operational_breakthrough/_branch.md

**The whole being decomposed** (from sensemaking SV5/SV6): the Expedition's operational spec — the definition (with mode, mechanics, and name), the concrete 20-turn walkthrough, the honest inventory, the ordered build-list, and the importance argument — runnable-grade, consistent with the hours-old Turn Architecture and the standing MUSTs.

---

## 1. Coupling Map

**Elements:** the definition + mode + mechanics + naming (E1) · the turn-by-turn walkthrough with the leave-and-return beats and the checkpoint format (E2) · the inventory table (E3) · the ordered build-list incl. the pretest and first-territory options (E4) · the importance argument (E5).

| Pair | Coupling | Why |
|---|---|---|
| E1 → E2 | STRONG one-way | the walkthrough is the definition RUNNING; different reader-functions (precision vs the asked-for "sample") justify separate pieces |
| E3 → E4 | STRONG one-way | the build-list IS the inventory's partial/missing rows, ordered by dependency |
| E1 → E4 | MODERATE one-way | the mode and mechanics decide what the build-list must include (the pretest) |
| E1/E3 → E5 | MODERATE fan-in | importance = what the run unlocks (definition) against what it costs and lacks (inventory) |
| E2 ↔ E5 | sibling | the walkthrough shows what the argument claims; shared content, no flow |

**Clusters:** {E1} the spec core · {E2} the sample · {E3} the ground truth · {E4} the plan · {E5} the why. **Valleys:** between defining and demonstrating; between status and sequence; between content and its motivation.

## 2. Boundary Set (top-down)

Five pieces: **P1 The definition** (expedition(T,G,N) + supervised-autonomous mode + Mode B/A mechanics + the spine + the name with veto) · **P2 The walkthrough** (the concrete sample, checkpoint format shown live) · **P3 The inventory table** (have / partial / missing, honest) · **P4 The ordered build-list** (with the pretest and the first-territory recommendation) · **P5 The importance argument** (the keystone-event economics).

## 3. Bottom-Up Validation

Atoms → pieces: expedition(T,G,N≥20); the continuation rule; the validity condition per turn; supervised-autonomous (checkpoints, interruptibility, full recording); Mode B (spine + worker-subagent; ~350K/1M arithmetic) with Mode A fallback; the spine as the dial-made-durable; the naming recommendation (the Expedition; coinage recorded; veto) → **P1**. The 20-turn narrative: warm → T1–T3 establish → T4 discovers a new area → PARK (ledger entry) → T5–T9 elsewhere → T10's finding COMPLEMENTS parked area → REVISIT with topology → … → dry-spell/budget stop → the run-report (map + findings + frontier); the per-turn checkpoint block (choice, rationale, ledger delta) → **P2**. The have/partial/missing rows from surfacing, statuses preserved → **P3**. Ordered: (0) pre-registration file [MUST, window]; (1) the turn record w/ ledger section [v1 minimal, meaning-implied content]; (2) stop-v1 sentence; (3) Mode-B pretest [one worker-as-subagent loop]; (4) the expedition procedure note [the continuation rule + checkpoint format — a runner-level addendum, NOT a new architecture]; (5) first territory chosen [own-frontier vs fresh-external, trade-offs]; → run → **P4**. The five unlocks (explfine rehearsal; 2× gate fuel; telemetry birth; compositional-gain test; mass un-deferral) + the risk caveats (territory bet; event budget) → **P5**. No atom homeless; none split. **HIGH confidence.**

## 4. Question Tree

**P1 — The definition.** *"What exactly is an expedition, in committed vocabulary?"*
- [ ] expedition(T, G, N) stated formally; every term resolving to a committed name (turn, validity, Selector, revisit, explfine outputs)
- [ ] The continuation rule stated as THE single delta from today
- [ ] Supervised-autonomous defined (what the human does and doesn't do; what gets recorded; why the gates are fed)
- [ ] Mode B and Mode A specified with the spine's definition (the dial made durable — instance, not mandate) and the arithmetic
- [ ] The name proposed with the coinage recorded and the veto explicit

**P2 — The walkthrough.** *"What does turn 1 through turn ~20 actually look like?"*
- [ ] The user's narrative beats all present: establish → discover-and-PARK → explore-elsewhere → COMPLEMENT-detected → REVISIT-with-topology → continue → stop
- [ ] The per-turn checkpoint block shown (what the human sees scroll by)
- [ ] The ledger's growth visible across turns
- [ ] The end-state named (the run-report: map + per-concept findings + frontier — explfine's outputs)
- [ ] Concrete enough to execute; abstract enough to fit any territory

**P3 — The inventory.** *"What exists, partially exists, is missing — honestly?"*
- [ ] HAVE rows (runners; routelister + `_route.md`; the Turn Architecture incl. revisit; Relationships; warming; the 1M substrate; the autonomy precedent)
- [ ] PARTIAL rows with the gap named per row (turn record — 0 instances; frontier ledger — content unconsolidated; complement-detection — perception, needs the standing read; stop policy — placeholder; Selector L2/L3 — gated; worker-subagent separation — untested)
- [ ] MISSING rows (the expedition procedure note; the pre-registration file; the stop sentence; the ledger section; the pretest)
- [ ] No status inflation (designed ≠ built; the existence proof cited as proof of SHAPE, not of components)

**P4 — The ordered build-list.** *"What gets done, in what order, before the first run?"*
- [ ] Step 0: the pre-registration file (the MUST; the window closes at the run's first committed turn)
- [ ] Steps 1–4: ledger-bearing turn record v1 → stop-v1 sentence → Mode-B pretest → the expedition procedure note (a runner-level addendum)
- [ ] Step 5: the first-territory decision (own-frontier rehearsal vs fresh-external demo; trade-offs; recommendation)
- [ ] Effort grades honest (hours, not weeks); the run itself budgeted as an event (8–10 h, resumable)
- [ ] Total: the distance from today to the first expedition stated in sessions

**P5 — The importance argument.** *"Why is this the keystone?"*
- [ ] The five unlocks, each tied to a named waiting consumer (the explfine demo; the L2 gate; the telemetry framework; the thesis's compositional claim; the worklist's gated items)
- [ ] The "mined breakthroughs" sense made precise (mass un-deferral of turn-data-gated work)
- [ ] The honest caveats (territory bet; cost concentration; what a failed run still yields — records)

## 5. Interface Map

| From → To | What flows | Direction |
|---|---|---|
| P1 → P2 | the definition the walkthrough instantiates | one-way |
| P3 → P4 | partial/missing rows → ordered steps | one-way |
| P1 → P4 | the mode/mechanics → the pretest's place | one-way |
| P1/P3 → P5 | unlocks vs costs | fan-in |
| P1–P5 → finding | the package | fan-in |

*Assumptions-not-data check:* (a) the sequential bound (no multihead) — housed in P1; (b) the pre-registration MUST's ordering — housed in P4 step 0; (c) Mode B's feasibility rests on the pretest, not on assertion — housed in P4 step 3 and flagged in P1. All housed.

## 6. Dependency Order

```
Wave 1: P1 (the definition)
Wave 2 (parallel): P2 (the walkthrough) · P3 (the inventory)
Wave 3 (parallel): P4 (the build-list — consumes P3+P1) · P5 (the importance — consumes P1+P3)
```
No circular dependencies.

## 7. Self-Evaluation (full 7 dimensions)

| Dimension | Verdict | Note |
|---|---|---|
| Independence | **PASS** | one-way flows; the walkthrough/importance sibling pair shares content without flow |
| Completeness | **PASS** | the user's four asks map 1:1 (describe the sample→P2; why important→P5; needs defining/refining→P4 via P3; components have/partial→P3) + the naming side-ask→P1; all six considered articulations served (sample→P2; importance→P5; gap-list→P4; inventory→P3; naming→P1; consistency+feasibility→P1) |
| Reassembly | **PASS** | P1–P5 = the runnable spec + its motivation — the operational-breakthrough description asked for |
| Tractability | **PASS** | each piece bounded by sensemaking's collapses |
| Interface clarity | **PASS** | three assumptions housed |
| Balance | PASS-with-note | P5 is the lightest (an argument, not a design) — proportional |
| Confidence | **HIGH** | top-down and bottom-up agree; no merges needed |

*Determination-mechanism piece check:* the one runtime-determined concept — "the expedition stops now" — has its mechanism housed in P1/P4 (budget-primary N=20 + the three advisory signals, placeholder-marked; all file-observable at run time). PASS.

**Stopping decision:** no piece needs sub-decomposition.

**Next discipline input:** Innovation drafts the actual texts — the formal definition, the walkthrough with its beats and checkpoint blocks, the inventory table, the ordered steps with effort grades and the territory recommendation, the importance argument — honoring the ordering constraints, the pretest flag, and the naming veto.
