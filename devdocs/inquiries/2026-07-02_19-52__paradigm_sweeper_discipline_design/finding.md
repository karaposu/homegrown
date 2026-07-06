---
status: active
model: claude-fable-5
effort: max
refines: devdocs/inquiries/2026-07-02_08-53__paradigm_detection_then_deep_dive_naming_case/finding.md
---
# Finding: The Paradigm-Sweeper Discipline — What It Should Be, What It Shouldn't Be, and How It Reaches First Use

## Changes from Prior

**Prior path:** `devdocs/inquiries/2026-07-02_08-53__paradigm_detection_then_deep_dive_naming_case/finding.md`
**Revision trigger:** User decision — "we should focus on building this helper" (the standalone paradigm-sweeper), pulling forward the prior's own instrument-extraction-on-reuse plan.
**What's preserved:** the sweep operation's beats (detect → per-family dive → cross-family selection); the anchoring guard; the S1/S2/S3 scale dial; the S1 innovate-hook as a distinct, still-pending route; "a coverage discipline, not a coverage proof."
**What's changed:** the prior's kill of "a new standalone paradigm-detection discipline" is **revised on evidence** (detailed in the Re-test section): its duplication BAN survives and is carried into this design's NOT-list; its "no new skill needed" conclusion is superseded — the instruments created after the kill need an invocable home at the S2 scale.
**What's new:** the discipline's meaning-layer design (identity, should-be, NOT-list, failure-mode catalog, seed contract, map artifact, naming), the build staging, and the converged first invocation.
**Migration:** none required — no existing artifact changes until the build (on go).

## Question

From `_branch.md`: *"I think we need a helper on our way forward, and we should focus on building this helper: a paradigm-sweeper discipline — even if it doesn't quite make sense as a discipline, I think it's a good one for making breakthroughs. Current case: I'm unhappy with how the current traversal-memory artifact logic works — it feels inelegant and suboptimal — and I'd like to force a more elegant solution to be found, but current innovate is not strong enough. So I'd like to run a paradigm sweep to generate a list of paradigms for this, then use them as seeds for traverse loops. We can use this pattern in the future too. Let's think about how to create the paradigm-sweeper discipline — how it should be and how it shouldn't be."*

**Goal:** the meaning-layer design (identity + should-be + NOT-list), grounded in the three committed paradigm findings; the reusable sweep→seed→loop pattern; the category and innovate-relationship questions answered; the build and first invocation staged honestly (including against today's roadmap). Layer Commitment: MEANING this inquiry; the spec text itself is authored at build time, on your go.

## Finding Summary

- **The category answer: it makes sense as a discipline — specifically, a perception-class skill.** The paradigm-sweeper joins surfacing and routelister in the enumerate-don't-decide family: an eighth runnable SKILL, invoked on demand UPSTREAM of loops — **not** a new stage in the traverse pipeline, not a selector, not an innovate mode.

- **The identity, in one sentence:** *the paradigm-sweeper makes chart acquisition runnable — given a stuck or unsatisfying topic, it recasts the topic as a practice ("whose practice, doing what?"), then maps that practice's paradigm-families (coherent, generative bundles of commitments, each passing the membership test) as a persistent map of 5–9 entries, each a loop-ready seed. It enumerates; it never selects.*

- **What innovate lacks, precisely** (the user's "not strong enough," diagnosed): innovate's generators transform a seed and its framers shift a frame — everything operates ON or NEAR one candidate within a chart it never acquires. The committed movement vocabulary says these moves power rungs 1–3 (in-place work, axis steps, family jumps) — but you cannot jump to a family you have never seen on a map. **The sweeper supplies the map; the loops make the jumps deep.**

- **The inherited kill is revised, not ignored:** the founding finding killed a standalone discipline ("a tenth discipline would duplicate it") — but that kill predates the instruments (the probe pipeline, the facet kit, the membership test were created hours AFTER it, and have lived homeless in findings since). The kill's duplication BAN survives into this design's NOT-list; its "no new skill needed" conclusion is superseded at the wrong-scale point (full Re-test below).

- **The should-be, sketched build-ready:** probes 0–5 as the process spine (probe 1 alone reproduces only the MODAL map — the tool exists for the regions it can't see); the 5+2 facet kit as probe 2's engine (heuristic prior, never checklist); the membership test as family-filter; frontier candidates flagged and KEPT; a **9-mode failure catalog** (drafted below); a **capped ~6-line seed-block** per entry (divergence-pinning, not description); the map artifact borrowing the house skeleton (index + records + excluded + telemetry) with family-typed columns, a consumer-filled dive-done **✓**, and **index-extending re-runs with stale-flag-not-delete** (the ✓'s safety pair).

- **The NOT-list (what it shouldn't be):** not a pipeline stage · not a selector · not a candidate-generator · not the Paradigm-Sweep MTTP (the catalog owns the multi-loop orchestration) · not an innovate replacement (the S1 hook stays innovate's own pending patch) · not a paradigm-SHIFT engine (acquisition, not replacement) · not generic enumeration (the carried ban) · not a finished theory (**v0-provisional** with a named Validation Debt section and a named checker).

- **The staging converges with today's roadmap instead of competing:** pre-registration file → the First Turn → **build the skill (on your go; sub-hour — the sketches are assembly-grade)** → **first invocation = the traversal-memory sweep run AS the Long Walk** — two active duties (the walk's structure; the redesign's content), two passive riders (the S2 named test; the MTTP promotion trigger), and one duty explicitly NOT claimed (blind-topic validation — the topic is same-mind; claiming it would be theater).

- **The build's honest class:** a **joy-exception** under the Allocation Rule — costed (one build session + this inquiry), logged (this finding), capped — and one that immediately serves roadmap item 3 (the Long Walk needs a territory and a structure; the sweep provides both).

- **The reusable pattern, stated once:** **Sweep → Seed → Loop** — when a topic is stuck or its solutions feel forced: sweep the practice (acquire the chart); take seeds from the map (consumer selects; anchoring guard applies); run one loop per seed; select across families only with dives in hand.

## Finding

### 1. Context: why a helper, and why this one

The project's last structural breakthrough (routelister + its integration as traverse's exhaust) was an organ-plus-integration invention. Today's roadmap finding diagnosed the current stuckness and prescribed a climb; the user, in parallel, identified a capability hunger the climb itself will feel: when a topic is STUCK — the live case being the traversal-memory artifact logic, which "feels inelegant" — the existing generation discipline (innovate) explores near the current frame rather than exposing the space of fundamentally different approaches. The paradigm chain built this session supplies the missing theory: paradigm-families as the units of approach-space, instruments to enumerate them, and the movement vocabulary that names what innovate can't do (acquire charts). This inquiry turns that theory into a discipline design.

### 2. The identity and the category

**Identity:** the paradigm-sweeper makes **chart acquisition** runnable — the cartographic act the committed Movement Frame defines ("no position changes; the map of the ways comes into existence"), operationalized: recast the topic as a practice (probe 0: *whose practice, doing what?*), then map the practice's paradigm-families — coherent, generative bundles of commitments, each passing the membership test — as 5–9 basic-level entries, each a loop-ready seed. **It enumerates; it never selects** — the identity wall, inherited from routelister's proven precedent (today's 20-map audit showed that wall holding in the wild).

**Category:** an eighth runnable SKILL in the perception/enumeration class, invoked on demand upstream of loops. The traverse pipeline (Articulate → Surfacing → Sensemaking → Decomposition → Innovation → Critique → Routelister) is unchanged. The user's worry ("even if it doesn't make sense as a discipline") resolves cleanly: it makes sense as a skill-class discipline; what it must never become is a pipeline stage or a selector.

**The precise innovate relationship:** innovate transforms seeds (Combination, Absence Recognition, Domain Transfer, Extrapolation) and shifts frames (Lens, Constraint Manipulation, Inversion) — moves on or near ONE candidate. The sweeper produces the family-map BEFORE any candidate exists. They compose: the sweeper feeds charts; innovate (or full traverse) dives families. The S1 seed-time hook — paradigm-detection INSIDE innovate, gated by the founding finding's three-conjunct test — remains innovate's own pending patch, untouched by this design; at build time it should CITE the sweeper's reference for the shared instruments rather than duplicate them (one source of truth — the duplication ban applied to ourselves).

### 3. The should-be

**Process spine (inherited verbatim from the committed findings, cited in the spec):**
- **Probe 0** — the scope recast: *whose practice, doing what?* (mandatory; recorded in the artifact header).
- **Probe 1** — the schools (the modal map — necessary, never sufficient: "probe 1 alone reproduces the MODAL map; probes 2–5 exist for the regions probe 1 cannot see").
- **Probe 2** — the facet-walk: SOURCE/MATERIAL · UNIT/GRAIN · OPERATION/MOVE · COORDINATION/RELATION · CRITERION/VALUE (+ SEQUENCE, RESPONSIBILITY-LOCUS) — a heuristic prior, never a checklist; stretch-fits reported.
- **Probe 3** — defaults and non-defaults per axis.
- **Probe 4** — coherent non-default combinations, split **{established family | frontier candidate}** — frontier entries flagged and KEPT, never dropped.
- **Probe 5** — fashion-loosening.
- The **membership test** filters every entry (bundle of ≥2 cohering choices + generative capacity; exemplar or explicit frontier grounds); failures demote to axis-values or drop, with reasons, into the Excluded section.
- **Depth is consumer-dialed in one line:** the full pipeline is the default for any persisted map; a quick in-session glance may stop early but may not call its output a sweep-map.

**The seed contract (per map entry — capped at ~6 lines; divergence-pinning, not description):**

```text
seed: explore the <FAMILY> approach to <practice + goal>
commitments: <the bundle — the 2–4 non-default choices, pinned>
exemplar: <established: name it | frontier: "none — coherent per <axes>">
axis-positions: <facet: value · facet: value · …>
goal-echo: <the shared goal, one line>
guard: generate within this family before judging across families
```

The cap matters in both directions: a bare family name would seed the loop with the MODAL reading (the dive regresses to default — the exact bias the tool breaks); more than ~6 lines starts doing the downstream articulation's job.

**The map artifact (borrow the house skeleton; own the columns):** header (practice recast · goal · dial · date) → index table (`# · Family · one-line bundle · {est|frontier} · exemplar · dived ✓`) → per-entry records (bundle · exemplar-or-frontier grounds · axis-positions · seed block) → Excluded-with-reasons (the demotion trail) → telemetry (probes run · families-beyond-probe-1 count · stretch-fits · demotions · bounds note · verdict). The **✓ is the dive-done consumer column** — authored empty by the sweeper, never read by it, filled (and legally annotated) by the consumer as dives complete: the anchoring guard's operational display. Its safety pair, added under critique: **evolution happens by index-extending re-runs with stale-flag-not-delete** — a dive that reveals mis-individuation triggers a re-run that enriches and stale-flags; per-run maps stay static as history, which is what makes the ✓ durable.

**The failure-mode catalog (drafted; the spec's LAYER 1/2 section at build):**

*LAYER 1 — operational:* **Modal-Map-Only** (stops at probe 1; corrective: probes 2–4 mandatory for persisted maps; telemetry counts families-beyond-probe-1) · **Checklist-Ossification** (facets as boxes; corrective: axes earn their place by discriminating real variants; stretch-fits reported) · **Family-Hallucination** (options/styles/moves/lenses dressed as paradigms; corrective: the membership test per entry; demote or drop, never pad) · **Anchoring-Dive** (judging or diving before the map completes / before each family has its batch; corrective: map first; batch-per-family before judging any) · **Scope-Miss** (probe 0 skipped; an object-domain swept; corrective: mandatory recast, recorded) · **Grain-Drift** (super-paradigm blobs or sub-variant shards; corrective: the basic-level check — each entry supports a distinct dive; merging any two loses a live distinction).

*LAYER 2 — identity-eroding:* **Selection-Creep** (the map crowns a winner; corrective: enumerate-don't-decide — selection belongs to the consumer, after dives) · **Generation-Creep** (worked solutions appear inside entries; corrective: entries carry commitments/exemplars/axes; the seed block points forward) · **Coverage-Theater** (the map presented as exhaustive; corrective: "a coverage discipline, not a coverage proof" — bounds note + probe-5 disclosure in telemetry).

**v0-provisional, with teeth:** the spec ships `status: v0-provisional` plus a **Validation Debt** section naming, at minimum: the blind-topic run (pending — NOT served by the first invocation); the design-space transfer (one validated precedent: the app-architecture map); the depth-dial (untested); the seed-block's divergence-pinning claim (untested). **The named checker:** the first invocation's own critique step is instructed, by that section, to test each debt item against the run's evidence and route contradictions into a spec-edit proposal.

### 4. What it shouldn't be (the NOT-list)

1. **Not a pipeline stage** — traverse stays as-is; the sweeper is on-demand, upstream.
2. **Not a selector** — it never ranks, recommends, or picks; cross-family selection belongs to the consumer, after dives.
3. **Not a candidate-generator** — it maps families; the dives generate. A worked solution inside the map is a failure mode.
4. **Not the Paradigm-Sweep MTTP** — the catalog owns the S3 multi-loop orchestration; this skill is the S2 organ that orchestration would invoke.
5. **Not an innovate replacement** — it feeds charts to whatever generates; the S1 hook stays innovate's pending patch.
6. **Not a paradigm-shift engine** — it acquires charts; it neither replaces the reigning chart nor argues anyone off it.
7. **Not generic enumeration** — it does not re-implement surfacing's possibility case or routelister's mechanics; it operationalizes the paradigm-instruments and nothing else (the carried ban).
8. **Not a finished theory** — v0-provisional; the instruments carry their validation ceiling openly.

### 5. The staging — and the convergence

**Order:** (1) the indicator pre-registration file and (2) the First Turn — the roadmap's first move, unchanged and still first (hours; the pre-registration window is timestamp-physics). (3) **The build, on your go:** one session, assembly-grade from this finding's sketches (transcribe, don't invent — the design was adversarially tested; build-time invention would bypass the pipeline). Skill name **`paradigm-sweeper`**; the catalog keeps **"Paradigm-Sweep"** for the S3 pattern; one spec sentence states the pair. (4) **The first invocation: the traversal-memory sweep, run as the Long Walk.** Probe 0 resolves the case cleanly — *the orchestrator's practice of remembering across runs* — and the critique's concrete test showed the membership machinery working there (append-only-log vs stigmergic-marks = clean families with exemplars [git; the ✓ column itself]; "ledger vs log" likely demotes to an axis-value — heavy demotion is correct behavior on architecture sweeps). The walk runs two-phase: coverage revolutions (one capped dive per family — the anchoring guard shaping the walk), then judgment revolutions (cross-family comparison with all batches in hand). Every dive is a recorded turn.

**The duty accounting (honest):** two ACTIVE duties — the walk's structure (roadmap item 3's first instance) and the redesign's content (the user's dissatisfaction resolved on a swept chart). Two PASSIVE riders — the S2 named test (any first run serves it) and the MTTP promotion trigger (fires on the run existing). One duty explicitly NOT claimed — blind-topic validation: the memory topic is maximally same-mind (this session built both the instruments and the memory theory); the honest blind test is a later run on a genuinely foreign topic.

**The build's class, named per the Allocation Rule:** a **joy-exception** — costed (one build session + this design inquiry), logged (this finding is the log), capped — that immediately serves the climb (the walk gets its territory and structure). The roadmap's ranking is not contradicted: the sweeper is not a critical-path capability; it is tooling the path's item 3 will use, and the path's first move still precedes it.

### 6. The reusable pattern

> **Sweep → Seed → Loop.** When a topic is stuck or its solutions feel forced: sweep the practice (acquire the chart of paradigm-families); take seeds from the map (the consumer selects; the anchoring guard applies — a batch per family before judging any); run one loop per seed (full traverse for deep dives, innovate for lighter ones); select across families only with dives in hand. The sweeper makes family-jumps cheap; the loops make them deep.

This is the pattern the user asked to keep for the future — and at full multi-loop scale it IS the catalog's Paradigm-Sweep, which is why the skill's first deliberate use fires that entry's promotion path.

## Inherited Commitments Re-test

The `_branch.md` declared a Synthesis Trigger over three priors. Each load-bearing commitment, re-tested:

- **Commitment:** the sweep operation (detect → per-family dive → cross-family selection) with the anchoring guard and the S1/S2/S3 consumer-dialed scale.
  - **Source:** `devdocs/inquiries/2026-07-02_08-53__paradigm_detection_then_deep_dive_naming_case/finding.md`, Finding §the operation + §the dial.
  - **Re-test status:** RE-TESTED — commitment confirmed. **Evidence:** the design preserves the beats verbatim (the map completes before any dive; batch-per-family; selection after, by the consumer); the S2 slot is exactly what the skill fills; S1 (the hook) and S3 (the MTTP) remain distinct claims with their own artifacts.

- **Commitment:** the kill — "a new standalone paradigm-detection discipline… a tenth discipline would duplicate it."
  - **Source:** the same finding, Reasoning §kills.
  - **Re-test status:** RE-TESTED — **commitment confirmed but frame revised.** **Evidence:** what the kill protects — no duplication of generic enumeration machinery — is confirmed and CARRIED (NOT-list item 7; the single-source-instruments build note). The frame it rested on shifted the same day it was written: the kill's "the machinery exists" referred to generic machinery (surfacing's possibility case, routelister's passage-territory, innovate's rule slot); hours later the 09-30 finding created the SPECIFIC instruments (probes, facets, membership test), which have lived in findings — invocation-invisible — since. The prosecution's strongest counter (the pending innovate-hook edit is a PLANNED home for those instruments) was absorbed at the letter: that home is real but in-run-scale (the hook fires at seed-time inside an innovate run; the S2 need takes a practice with no candidate in flight and emits a persistent artifact). Wrong-scale suffices by the house's own one-operation-one-skill grain — the same grain that justifies routelister beside surfacing. The kill's own finding had already planned instrument-extraction on reuse; the user's decision pulls that trigger forward.

- **Commitment:** the practice-headed paradigm definition, the membership test, the 5+2 meta-facet kit, probes 0–5 with {family | frontier}, and the kit's own bounds ("heuristic prior, never a checklist"; the single-mind validation ceiling; the blind-topic test pending).
  - **Source:** `devdocs/inquiries/2026-07-02_09-30__paradigm_definition_and_meta_axes_for_enumeration/finding.md`.
  - **Re-test status:** RE-TESTED — commitment confirmed. **Evidence:** the design inherits the instruments verbatim-with-citation (they become the spec's single source of truth), preserves every bound (the checklist warning becomes a failure mode; the validation ceiling becomes the Validation Debt section), and the design-space transfer was re-tested on a concrete case this inquiry (the memory-architecture probe: log vs stigmergic families discriminated; ledger demoted — the machinery behaving as specified, with the app-architecture map as the standing precedent).

- **Commitment:** the Movement Frame's placements — the sweep = chart ACQUISITION (positions unchanged; distinct from extension and replacement); "you cannot jump to a family you have never seen on a map"; innovate's mechanisms power rungs 1–3.
  - **Source:** `devdocs/inquiries/2026-07-02_10-09__paradigms_and_thinking_space_movements_relation/finding.md`.
  - **Re-test status:** RE-TESTED — commitment confirmed. **Evidence:** the identity sentence grounds in the acquisition definition inline; the NOT-list's shift-engine exclusion enforces acquisition≠replacement; the innovate-limit diagnosis is that finding's rung-placement applied — and the design adds nothing that would let the sweeper move anyone's position (enumerate-don't-decide preserves position-neutrality exactly as acquisition requires).

*(Pattern-note, per the protocol's soft signal: three confirmations and one confirmed-but-frame-revised — the frame-pressure landed on the inheritance where the evidence pointed, and the revised kill is the finding's central honest move, argued at the highest burden with its counter absorbed rather than dismissed.)*

## Next Actions

### MUST

*(None this inquiry — the design is the deliverable; every action below is gated on your go, per the standing convention for new-skill creation.)*

### COULD

- **What:** **The build** — author `cognitive_harness/paradigm_sweeper/` (SKILL.md + references/paradigm_sweeper.md, the instruments' single source of truth) + the `~/.claude/skills` sync, transcribing this finding's sketches (identity · probes · catalog · seed-block · map skeleton with ✓ + index-extending · NOT-list · v0 status + Validation Debt).
  **Who:** the AI, one session, sub-hour (assembly-grade).
  **Gate:** condition-bound — your explicit go.
  **Why:** the reach-for-ability you asked for is this artifact.

- **What:** **The first invocation** — `/paradigm-sweeper` on the orchestrator's remembering-practice, then the two-phase Long Walk over its map, every dive a recorded turn, the run's critique executing the Validation Debt check.
  **Who:** a future session (or chain of sessions — it IS the walk).
  **Gate:** condition-bound — after the pre-registration file + the First Turn (the roadmap's first move) + the build.
  **Why:** the user's dissatisfaction and roadmap item 3 resolved as one run; the S2 test and the MTTP promotion ride free.
  **Depends-on:** COULD item "The build". This COULD is GATED — do not act until the build resolves.

- **What:** Re-point the pending **innovate-hook edit** to CITE the sweeper's reference for the shared instruments.
  **Who:** the AI, inside the hook edit whenever it executes.
  **Gate:** condition-bound — with or after the build (the citation target must exist).
  **Why:** one instrument text, two consumers; the ban applied to ourselves.
  **Depends-on:** COULD item "The build". GATED.

### DEFERRED

- **What:** the **blind-topic validation run** (probes 0–5 on a genuinely foreign topic, facet-walk recorded before consulting sources).
  **Gate:** condition-bound — after the first invocation; topic foreign to this session's theory-work.
  **Why (if revived):** the only way the single-mind ceiling actually lifts.

- **What:** the **MTTP promotion recording** (Paradigm-Sweep: candidate → admitted-bootstrap; + the naming-pair sentence).
  **Gate:** observable — the first deliberate sweep completing.
  **Why (if revived):** the catalog's own written trigger, kept true.

## Reasoning

**Why a skill and not a recipe, protocol, or innovate paste-in.** Each alternative failed a structural test: pasting into innovate IS the S1 hook (real, pending, in-run scale — it takes a seed; the sweeper takes a practice); a protocols/ file is runner-called, not user-invoked-with-artifact (the usage pattern is invocation-shaped); the generic machinery was the kill's own route and was never once used for paradigm-type enumeration (while the skill-shaped things — routelister — got used daily). The SKILL form buys the instruments a Baldwin-updatable home, a failure-mode catalog the operation genuinely needs, telemetry, an artifact contract, and reach-for-ability; its real cost — formalizing a zero-live-run theory — is paid openly with v0-provisional status, a Validation Debt section, and a named checker.

**Significant kills and refinements (the field of what was considered):**
- **"Probe-1-only; the rest is ceremony"** — killed at the letter by the committed finding ("probe 1 alone reproduces the MODAL map"); the tool exists for the off-modal regions — the founding naming case failed precisely on the modal map. Residue kept: the one-line depth-dial.
- **"A bare family name seeds fine; the contract is bureaucracy"** — killed: a bare name seeds the modal reading of the family and the dive regresses to default; the block's fields are divergence-pins. Residue: the ~6-line cap.
- **"Emit routelister-style maps; don't multiply formats"** — absorbed: the skeleton is borrowed deliberately; the columns must be family-typed (routes and families are different units — filing one as the other is the wrong-grain failure both disciplines catalog).
- **"Build the skill NOW, in this inquiry"** — killed: the spec would be authored before this inquiry's own critique had tested the design (and critique DID force changes — the re-run semantics, the duty drop); the new-skill-on-go convention exists for exactly this. Residue: assembly-grade sketches so the build is sub-hour.
- **"The first invocation counts toward blind-topic validation"** — killed by the same-mind ceiling, enforced against the design's own convenience.
- **"Homeless instruments" and "never reached for" as originally worded** — both corrected under prosecution (the planned S1 home acknowledged at its true scale; the 11-hour zero-run window replaced by the structural fact + live testimony + the weeks-long non-use of the generic routes). The kill-revision stands on the corrected premises — stronger for having lost the letter-battles.
- **"Sweep first, then the roadmap's first move"** — killed on window-physics (turns during sweep-dives either go unrecorded or need the artifact anyway) and on the thin record's shape-independence (one-line choice-records survive any winning memory architecture).

**One design catch worth naming:** the ✓ column was initially inherited without its safety pair; critique caught that sweep-maps RESHAPE (dives reveal mis-individuation, frontier entries resolve) — so the map inherits BOTH conventions together: the consumer-✓ on static per-run maps, and index-extending re-runs with stale-flag-not-delete carrying evolution.

## Open Questions

### Monitoring
- Does the first invocation's demotion rate match the prediction (a 4–6-family map with a rich Excluded section on an architecture sweep)?
- Does the seed-block actually pin divergence (do dives stay in-family), or do dives regress to modal readings despite it?

### Blocked
- The MTTP promotion and the hook's citation re-point — blocked on the build and the first invocation, by design.

### Research Frontiers
- The S3 orchestration (the catalog's own maturation, behind first-instance evidence).
- Whether sweep-maps compose across practices (a map of maps) — untouched; no current consumer.

### Refinement Triggers
- If the first invocation's critique finds any Validation Debt item contradicted → the spec-edit proposal routes immediately (the named checker's job).
- If the walk's two-phase structure (coverage → judgment) fights the anchoring guard in practice → re-open the guard's wording in the spec, not the guard itself.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
i think we need a helper on our way forward, and we should focus on building this helper.

a paradigm sweeper discipline, even tho if it doesnt make any sense as discipline i think it is a good one to make some breakthroughs.
in current case for example i am unhappy with how current traversal-memory artifact logic works, it feels not elegant and suboptimal. And i would like to enforce a more elegant solution to be found but current innovate is not strong enough,

so i would like to run paradigm sweep to generate list of paradigms for this , and then use them as seed for traverse loop.

i think we can use similar pattern in future too. so lets think of how to create paradigm sweeper discipline , how it shouild be and it shouldnt be
```

</details>
