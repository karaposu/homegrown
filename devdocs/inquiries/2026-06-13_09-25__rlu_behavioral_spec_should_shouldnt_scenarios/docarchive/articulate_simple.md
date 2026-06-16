## User Input

```text
lets dive deep into how rlu should be and shouldnt be, what it must do in what scenarios
```

(SAVE OUTPUT TO: devdocs/inquiries/2026-06-13_09-25__rlu_behavioral_spec_should_shouldnt_scenarios/articulate_simple.md)

---

# Structural Articulation (Simple) — rlu behavioral spec dive

**Substrate: WARM.** This session carries rich rlu context — the prior rlu finding (`devdocs/inquiries/2026-06-12_20-48__route_run_tracking_rlu_design/finding.md`: ADOPT-retargeted; mechanism = two writing moments `start`/`done`, the degraded `done`-without-`start` mode, `park`/`list` extras, the stale-in-flight sweep, the NOT-list scope fence, the graded pre-registration window guard) and the placement finding (`devdocs/inquiries/2026-06-13_07-24__route_tracking_placement_per_inquiry_vs_project/finding.md`: write-target = per-inquiry `_route_engagements.md`; the project overview is a DERIVED `rlu list` view; the guard re-attaches to "the first `_route_engagements.md` anywhere"; object-B Selector-queue deferred). Articulation reads this as context, not as commitment.

---

## Step 1 — Itemize

**count = 1.**

The statement carries three grammatical clauses — "how rlu **should be**," "and **shouldn't be**," "what it **must do in what scenarios**." Asymmetric-failure bias is keep-together, and it holds strongly here: the three are not independent work items but **three faces of one deliverable** — a behavioral specification of rlu (positive spec + negative spec + conditional/scenario-triggered spec). The "shouldn't be" is the NOT-list face; the "must do in what scenarios" is the conditional-obligations face; "should be" is the positive-obligations face. Splitting them would fracture one spec into three partial specs that only make sense assembled. One item.

- **Item 1:** *"how rlu should be and shouldn't be, what it must do in what scenarios"* — produce rlu's behavioral contract across its positive, negative, and scenario-conditional faces.

---

## Step 2 — Per-item articulation (Item 1)

### Stage 2 — Meta-questions + MQA

**MQ1 (verdict-axis) — "What is the user asking for?"**
identified-ambiguities-list:
- `[depth-target]` — a **build-ready behavioral contract** (so rlu can be implemented next) vs a **stress-test / gap-find** (enumerate scenarios to expose holes in the already-adopted design) vs a **boundary-draw** (sharpen what rlu is vs isn't).
- `[spec-layer]` — the **behavioral** layer (what rlu does/doesn't do, when) only, vs also the **structural** layer (commands, the `_route_engagements.md` row format) vs the **meaning** layer (what rlu fundamentally IS). The phrase "how it should be / must do" leans behavioral, but "should be / shouldn't be" can reach into identity.
- `[tripartition]` — confirmed three-faced: positive obligations (`should be` / `must do`), negative exclusions (`shouldn't be` — the NOT-list), conditional triggers (`in what scenarios` — situation→required-behavior).

**MQ2 (context-need axis) — "What context does the response need that isn't in the statement?"**
identified-ambiguities-list:
- **verdict sub-axis** (what specific prior outputs are needed): the prior rlu finding (`2026-06-12_20-48` — the adopted mechanism + NOT-list + guard); the placement finding (`2026-06-13_07-24` — the `_route_engagements.md` write-target + derived view + guard re-attachment); the routelister spec (`_route.md` excludes process/control-flow state; route-maps are archived); the Pipeline/selections design (`2026-06-11_12-47` — object-B, the Selector's working-queue, deferred); the SUSTRALL launch checklist (`2026-06-11_16-45` — the pre-registration window the guard enforces).
- **kinds sub-axis** (what kinds of context): the **already-settled decisions** (write-target, name, two moments — must be honored, not re-opened); the **field evidence** (crowboy's hand-written run-state under "no process state" headers — the demand proof); the **scenario inventory** (the situations rlu actually faces — see MQ3/MultiDepth).
- **stance sub-axis**: this is a **reconciliation-bound, production-aimed** spec (it must align with the adopted design and would become rlu's real build contract), not a greenfield invention.

**MQ3 (intent-axis, WHAT) — "What is the user trying to accomplish?"**
identified-ambiguities-list (action-endpoints):
- `[finalize-contract]` — pin rlu's behavior precisely enough that implementing it is unambiguous.
- `[expose-gaps]` — run rlu through every scenario to find where the current design is silent or wrong, BEFORE building.
- `[fence-scope]` — make rlu's responsibility boundary sharp (recorder/pointer, never chooser/launcher) so it can't scope-creep.
- `[resolve-deferred]` — turn the design's open/deferred bits (guard re-attachment mechanics, cross-inquiry row placement, degraded modes, route disambiguation) into definite behaviors.

**MQ4 (boundary-axis) — "What is the user explicitly excluding?"**
identified-ambiguities-list (warm-context extrinsic exclusions; routed here per Edge-2 because they come from session-settled decisions, not the bare sentence):
- Likely-excludes **re-deciding the write-target / file name** — settled this session (`_route_engagements.md`); a spec that re-opens it would miss the goal.
- Likely-excludes **specifying the Selector / Dispatcher / human-meta-loop behavior** — rlu is not them; the NOT-list fences this.
- Likely-excludes **object-B (the project working-queue) behavior** — deferred behind the Dispatcher gate.
- UNCERTAIN-exclusion: **actually implementing rlu now** — "dive deep into how it should be" reads as spec-not-build, but the user may want the spec build-ready. Preserved as open, not assumed.

**MQA:** **reconcile + surface.**
- *Reconcile:* MQ1's `[tripartition]` and MQ4's "shouldn't be" share one joint axis — **the spec is three-faced (positive / negative / scenario-conditional)**, and "shouldn't be" IS the negative face, not a task-level exclusion. Fold them: the deliverable is one behavioral contract with three faces; the NOT-list is a section of it, plus MQ4 carries the *separate* task-level exclusions (don't re-decide placement, don't spec the Selector).
- *Surface (irreducible overlap):* MQ1's `[depth-target]` and MQ3's `[finalize-contract]` vs `[expose-gaps]` overlap but don't cleanly reduce — a good scenario-spec does both at once (enumerating scenarios IS how you both finalize and gap-find). Named, not forced into one.

### Stage 3 — Deconstruct + MultiDepth

**Deconstruct tuple:**
- **deliverable:** a specification / design document — rlu's behavioral contract.
- **kinds:** prose spec + a **scenario→required-behavior table** + an explicit **NOT-list** + **decision-rules** (e.g., which object a tracking-need belongs to; how to disambiguate a route); optionally a state-machine / lifecycle sketch and a thin command-interface surface.
- **bounds:** rlu's own behavior only (not the Selector/Dispatcher/human); reconciled with the settled `_route_engagements.md` write-target and the deferred object-B; honors `_route.md`'s process-state exclusion and the route-map's archived/never-mutated status.
- **late-split check:** no fire. The three faces are sections of one spec; the Deconstruct tuple is a single deliverable. (Considered: "scenarios" as a separate deliverable from "should/shouldn't" — rejected; the scenarios are *where* the should/shouldn'ts apply, so they interlock.)

**MultiDepth:**
- **literal-statement:** *"Let's dive deep into how rlu should be and shouldn't be, what it must do in what scenarios."*
- **purpose-motivation-ambiguities (WHY-axis):** identified-ambiguities-list:
  - `[readiness-driven]` — get rlu to a build-ready contract so the eventual implementation has no open judgment calls.
  - `[correctness-driven]` — make sure rlu's behavior is RIGHT before committing, especially since the design just shifted (placement + name changed this session).
  - `[coverage-driven]` — the "in what scenarios" signals worry about **unhandled cases** (forgotten start, crash mid-run, cross-inquiry route, first-run-in-project guard, parked route) — ensure none is silently undefined.
  - `[boundary-driven]` — keep rlu from creeping into a decider/launcher; the user has repeatedly fenced this ("I am the meta loop still").

### Stage 4 — Rephrase (considered articulations)

Bounded by deliverable-shape (a spec doc), the aggregated identified-ambiguities, MQ4's NOT-list, and warm substrate:

1. **Build-ready contract.** "Produce rlu's build-ready behavioral contract: its positive obligations (what it must do at `start` / `done` / `park` / `list`), its NOT-list (what it must never do), and a scenario→behavior table covering normal and edge cases — reconciled with the settled `_route_engagements.md` write-target."
2. **Scenario stress-test.** "Enumerate every scenario rlu could face (formal `/aMVLwr` run, informal plain-session run, forgotten `start`, crash/resume mid-run, cross-inquiry route, first-run-in-project, parked/decided-against route, multi-route inquiry, ambiguous route reference) and specify the required behavior in each — surfacing gaps the prior findings left open."
3. **Responsibility boundary.** "Draw rlu's scope fence sharply: what rlu **should be** (engagement recorder + manifestation pointer) vs **shouldn't be** (route-chooser, run-launcher, route-map editor, status-writer-into-`_route.md`, the Selector/Dispatcher) — so the boundary is unambiguous before build."
4. **Resolve the deferred.** "Turn rlu's still-open design questions into definite scenario-triggered behaviors: the window-guard re-attachment (glob for the first `_route_engagements.md`), cross-inquiry row placement (where-it-ran + source-map back-ref), the degraded `done`-without-`start` mode, and multi-route disambiguation (ask-never-guess)."
5. **Lifecycle state-machine.** "Specify rlu as a state-machine over the route-engagement lifecycle (none → in-flight → done, plus parked) with the per-scenario transitions and the invariants it must preserve (append-only, never mutate the route-map, single-writer, the ↗ manifestation pointer into `_route.md`)."

---

## Self-Assessment

**LAYER 1 self-check (single LIGHT pass):**
- Mode 1 (premature split): not-fire (count=1; keep-together holds).
- Mode 2 (late-detected multi-item): not-fire (one deliverable; three faces are sections; scenarios interlock with should/shouldn't).
- Mode 3 (MQ extension): not-fire (four canonical axes only).
- Mode 4 (per-operation firing missed): not-fire (all fields present).
- Mode 5 (MQ2 missing verdict/kinds/stance): not-fire (all three sub-axes emitted).
- Mode 6 (MQ2 missing kinds/stance specifically): not-fire.
- Mode 7 (2-shape violation): not-fire (every MQ + MultiDepth output is identified-ambiguities-list or routed exclusion; no commitments).
- Mode 8 (AMBIGUITY-NATURE conflation): not-fire (MQ3 = WHAT/action-endpoints; MultiDepth = WHY/motivations; kept separate).
- Mode 9 (variant drift): not-fire (all five variants preserve the spec-doc deliverable, span identified ambiguities, respect the NOT-list, stay in warm substrate).

**Friction:** low. Warm context is rich and the should/shouldn't/scenario tripartition is structurally clean; the only genuine openness is depth-target (build-ready vs stress-test) and whether build is in scope — both preserved.

**Verdict: HIGH-PROCEED.**
