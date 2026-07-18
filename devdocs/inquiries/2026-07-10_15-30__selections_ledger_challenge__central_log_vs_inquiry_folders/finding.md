---
status: active
model: claude-fable-5
effort: unknown
corrects: devdocs/inquiries/2026-07-10_13-23__traversal_dynamics_mechanisms_extraction_from_sample/finding.md
---
# Finding: the selections-ledger challenge — the choice-record re-homed to the inquiry folders

## Changes from Prior

**Prior path:** `devdocs/inquiries/2026-07-10_13-23__traversal_dynamics_mechanisms_extraction_from_sample/finding.md` (the mechanism-catalog finding — this dive challenges its first-ranked entry, E1).

**Revision trigger:** User correction. The user challenged E1 ("adopt the selections-ledger") on three grounds: `devdocs/selections.md` is not canon; maintaining one log file is infeasible and unreliable; the inquiry-based folders are already persistent.

**What's preserved:** Everything except E1 and the offered order's head — the dynamics model, the other seven catalog entries (E2, E3′, E5, E6, E7, E9, E11), the assembly architecture (a record-substrate with readers), and E1's two surviving arguments (the turns are strictly unrecorded; choices are un-backfillable — both now carried with a nuance).

**What's changed (the correction — `corrects:`, bounded):** E1's grounding sentence was **factually false**: "canon's own turn-invariant… Tier-1 names this exact artifact" fused canon's content-requirement with one non-canon design's file — a grep of all of `docs/canon` finds neither `selections.md` nor `routelog` anywhere. E1's remedy (adopt the routelog tool) is **withdrawn**: the tool sat installed for ~a month with zero uses in any project — the strongest available evidence that habit-dependent recording does not get adopted. E1's "strictly-first by zero-gate adoptability" self-ranking dies with its mechanism.

**What's new:** The verified re-homing — the choice-record's home is the inquiry folders, which (verified at three instances) already record the selection-rationales for inquiry-spawning selections mechanically; a small completion design (a runner-written Selection block + a derived view); and the **writer-scale** (runner-mechanical > protocol-mandated-LLM > habit-run) as the variable that actually predicts whether a record survives.

**Migration:** the prior finding's E1 becomes E1′ (below) and its offered order's head becomes the E1′+E2 bundle; corrections drafted here, user-gated, not self-applied. MUST/COULD drift: the prior's COULD "start E1 today — run routelog" is withdrawn entirely (rationale: the remedy's mechanism class is the one the evidence indicts); its MUST ("review the offered order and pick") carries over with the corrected order.

## Question

My mechanism-catalog finding (13-23) ranked "adopt the selections-ledger" first: run the `routelog` tool, create `devdocs/selections.md`, start recording turns — framed as satisfying "canon's own turn-invariant." The user pushed back: *"I think devdocs/selections.md is not canon — it was talked about but never made canon — and it should be challenged: the effort of maintaining one log file is usually not feasible, it's hard to maintain and easy to miss things so it won't be reliable; but our already-existing inquiry-based folders are definitely persistent."*

The question: verify the canon-status claim (in both directions), re-adjudicate where the choice-record should live and what should write it, and correct the catalog finding as the evidence lands.

## Finding Summary

- **The user is right, on all three grounds — verified, not conceded.** (1) The canon grep is empty: no canon document names `selections.md` or `routelog`; canon asks only that a selection-rationale be "recorded into traversal memory… one written line of why" — in *some* artifact, form unconstrained. (2) The feasibility claim has hard evidence: the tool was installed and available for about a month and was **never used once, in any project** (the planned crowboy migration also never happened). (3) The folders are not merely persistent — they already *record*: every inquiry-spawning selection's rationale is preserved verbatim in the new inquiry's `_branch.md` Source Input, written mechanically by the runner (verified at three instances, and systematic by construction).

- **My E1 fused two different things, and the fusion is the correction.** "Zero recorded turns" is true strictly (no selection-record-as-such exists anywhere) — but tying it to "canon's own turn-invariant… names this exact artifact" welded a true canon-level fact to one non-canon devdocs design, as if adopting that design followed from canon. It doesn't. The correction is mandatory and bounded: the sentence, the remedy, and the ranking — not the diagnosis, and not the catalog around it.

- **One qualifier protects the true generalization (the anti-caving line):** the user's "one log file is not feasible" holds for *habit-written* files — but the project's central `_seed.md` works flawlessly **because a protocol step writes it**. The failure is the WRITER, not the location. Hence **the writer-scale**: runner-mechanical (Source Input; ~zero miss) > protocol-mandated-LLM (`_seed.md`; zero-miss within protocol runs) > habit-run (routelog; never used). In this project's observed record, that variable — not central-vs-distributed — predicts whether a record lives.

- **The re-homed design (C-B, the adjudicated recommendation, offered):** complete the folder-native record. One small runner-written block at inquiry-creation, in `_state.md`'s Relationships section (systematizing the CONTINUES-FROM lines already there): `chosen-route / chosen-over / because`. Non-spawning selections route to existing protocol-written surfaces (parks → the park/wake convention; abandoned routes → the route-map's marks), with a small named residual honestly unrecorded. The cross-inquiry "what's open / what was chosen" view is **generated on demand** from the folders — never hand-maintained (a derived view is fresh by construction; a maintained file is only as fresh as its last remembered write, which is the failure this all started from).

- **The minimal alternative stays sound:** correcting E1 and doing nothing else (C-A) is genuinely viable — the folders as-is already beat the dead ledger; the cost is future read-work and a small permanently-lost residual. A third option (a thin central note for the residual, protocol-written) was **killed**: its own miss-profile is silent exactly where its target lives; it revives only if a lost non-spawning choice is ever observed to hurt.

- **The build-offer consolidates:** under C-B, the corrected catalog's first move becomes **one gated runner edit** — the Selection-block write plus the fork-recall link-write (the prior E2) bundled into a single design→approve→apply cycle, since they are the same kind of act at nearly the same site. Offered; the user picks (and may split it).

- **The prior designs land honorably:** the June-22 memory-shape finding is *vindicated* (its "leanest form" — a rationale line in the spawned child's own files — was the user's position, half-designed three weeks ago); the RLU finding's central file dies but its real contribution survives re-homed (it correctly named the project-level view-NEED; the mechanism was mis-homed).

## Finding

Why this matters beyond one entry: the choice-record is the turn-ledger of the whole SUSTRALL climb — canon's Tier-1 begins "create the first traversal-memory artifact ever." Recommending a dead mechanism for it wastes the climb's first step; grounding the recommendation in a false canon-claim poisons the record about the record. This dive fixes both, and lands a design that starts from what is already working.

### 1. The verdict, precisely

**Not canon (the user's first ground, verified).** `grep -rn "selections\.md\|routelog" docs/canon/*.md` returns nothing. What canon actually commits: traversal memory is *"the cross-inquiry record of visits, selections, rationales, and outcomes"* (`sustained_traversal_loop_of_loops.md:38`); a turn counts when its selection-rationale is *"recorded into traversal memory… plus one written line of why"* (`:83`); Tier-1 asks for *"the first traversal-memory artifact ever"* (`:129`). Content required; file unnamed; form free. `devdocs/selections.md` was the route-tracking finding's design (June 12, a devdocs ADOPT verdict) — talked, designed, tooled, never canonized, and never used.

**Infeasible-as-designed (the second ground, verified).** The routelog skill has existed for ~a month. Uses anywhere: zero. The RLU design even anticipated missed entries (an immediate `start` write, a retroactive `done`, a stale-entry sweep) — good engineering that never mattered, because all of it rides a human remembering to invoke a tool at choice-moments. The zero-turns fact, which my E1 read as "adopt the tool," reads more strongly the other way: the tool-habit approach was available the whole time and never happened once.

**The folders already record (the third ground, verified and strengthened).** Three checks: the three-tiers dive's `_branch.md` carries the user's rationale verbatim ("bc a seed must be inspected…"); the RICH re-harvest's carries the corrections-and-directive; this very dive's carries the challenge. Structural reason: the traverse runner preserves `raw_input` into Source Input at every inquiry-creation — a runner-mechanical write that has never missed. The roads not taken are also on disk (each `routelister.md` preserves the full enumerated route-field, with a consumer-filled ✓ for taken-up). What the folders do NOT have: the explicit link ("this inquiry took up route X over Y, because Z" — the alternatives exist; the *link* is unwritten), coverage for selections that spawn nothing, and a cheap aggregate view ("what's open?" is answerable only at archaeology cost — the traversal-sample compile measured exactly that).

**The zero-turns nuance (both halves stated).** Strictly true: no selection-record-as-such exists — nothing labels a choice, names alternatives, or links route to inquiry. Also true: the *raw material* of most turns is already recorded (the rationales, verbatim; the alternatives, in the route-maps). The record is unlabeled and unlinked — not absent. My E1's diagnosis survives in the strict half; the user's "persistent definitely" is the other half.

### 2. The writer-scale — the variable that predicts survival

Every record in this project that works is written by machinery or by mandate: Source Input and `_state` History (**runner-mechanical** — written whenever the runner runs; observed miss ~0) · `_seed.md`, the `## Seeds` sections, the `refines:` chains (**protocol-mandated-LLM** — an LLM performs a step a protocol requires; zero-miss within protocol runs, silent only for work outside any protocol) · and the one record that never got a single entry is the one requiring a remembered, un-mandated act (**habit-run** — routelog). Scoped honestly: this is this project's observed record, not a law of nature. But within this project it is decisive, and it explains both sides at once — the user's challenge is right about habit-written files, and the `_seed.md` counter-instance is no counter-example, because its writer is a protocol. **The failure is the writer, not the location.**

### 3. The re-homed design (C-B — adjudicated, offered)

**The Selection block.** At inquiry-creation, the runner writes three lines into `_state.md`'s `## Relationships` section (systematizing the CONTINUES-FROM convention already living there):

```
chosen-route: <route-ref from the source route-map, or "user-direct">
chosen-over:  <the sibling route-refs, or "—">
because:      <one line — often quotable from raw_input>
```

Writer-level: runner-mechanical (Source Input's class). What it buys now: every inquiry-creation becomes a recorded turn — the turn-invariant satisfied mechanically, at the climb-tier the project is actually on; the link-graph gets its seed (which route each dive took up — what the fork-recall read-half will read); re-run checks get route-takeup data. Home rationale: `_state.md` is the state/lineage artifact and its Relationships section is the existing precedent; `_branch.md` stays the articulation-derived framing artifact (the alternative home — a `## Selection` section there, which the June-22 finding's leanest-form leaned toward — remains defensible if the user prefers co-locating choice with rationale).

**Non-spawning selections** route to the protocol-written surfaces that exist or are already designed: parks → the park/wake convention's records (the catalog's E3′); abandonments/deferrals of enumerated routes → the route-map's ✓/parked marks and `_route.md` staleness. The honest residual: human-direct acts that spawn nothing and touch no route ("let's drop X," said in passing) stay unrecorded — small at observed rates, named rather than papered over.

**The aggregate view is derived, never maintained.** On demand (a user ask, or a navigational session's warming), a narrow scan over `_route.md` marks + the Selection blocks + `_state.md` statuses yields "open / taken-up / parked / done, with whys." Fresh by construction; zero standing surface. This is the RLU finding's real contribution — the project-level question — answered without the mechanism that failed. (A push-style always-current dashboard is NOT provided; canon's architecture assigns that moment to the navigational session's episodic reads anyway.)

**The alternatives, honestly:** C-A (correct E1, build nothing) is sound — its cost is read-time reconstruction later plus the residual; a user declining the runner edit should take it without guilt. C-C (adding a thin central CONCLUDE-note for the residual) was killed: it is silent exactly for the acts it targets (choices outside protocol runs), and it re-introduces a standing surface for the most speculative slice of coverage — it revives only on evidence (a lost non-spawning choice that demonstrably hurt).

### 4. What happens to the catalog (the correction, drafted)

**E1 → E1′ — "complete the folder-native choice-record."** Content: the Selection block + the derived view, as above. Rung: **wire-designed** (one gated runner edit — the old "use-built, zero-gate, strictly-first" is dead with its mechanism). Grounding sentence replaced by the verified text (§1), including the qualifier: *the failure is the writer, not the location — the project's central `_seed.md` works because a protocol step writes it.*

**The offered order's head consolidates.** E1′ and E2 (the fork-recall write-half) are the same kind of act — small traverse-runner edits feeding the same memory substrate — so the natural first move is **one bundled design→approve→apply cycle** covering both (the user may split them). The rest of the order stands: → E3′ → {E5→E9} → E6 → at-autonomy {E7, E11's candidate-half}.

**The neighboring artifacts:** the memory entry mirroring E1 carries the same correction; the RLU finding (20-48) gets an offered superseded-in-part note + frontmatter pointer (the live convention — the 23-49 finding received exactly this when refined), carrying the survival clause: *its view-NEED and its reliability thinking survive, re-homed*; the June-22 finding needs no edit — this finding records its vindication.

## Seeds

No seeds passed a gate this dive. The candidate-watch ran: the writer-scale is this dive's verdict-structure and functions as a reasoning-guard for grading record-designs — the honesty-guard family (memory), not a deferred project-germ. Honest empty.

## Inherited Commitments Re-test

**Commitment 1 — the 13-23 finding's E1 ("adopt the selections-ledger; use-built; strictly-first; canon's own turn-invariant/Tier-1 names this artifact").**
- **Source:** `devdocs/inquiries/2026-07-10_13-23__traversal_dynamics_mechanisms_extraction_from_sample/finding.md`, the catalog §2 + the offered order §4.
- **Re-test status:** RE-TESTED — **commitment found INVALID in part.** The canon-tie is grep-false; the remedy's mechanism class has a zero-adoption record; the self-ranking dies. What survives: the strict zero-turns diagnosis (with the Source-Input nuance) and the un-backfillable argument (scoped: fully for the residual, as read-cost for spawning selections). This finding's content reflects the corrected version.
- **Evidence:** the empty canon grep; `:38`/`:83`/`:129` verbatim; the filesystem-wide zero-uses check; the three Source-Input instances.

**Commitment 2 — the RLU finding's ADOPT verdict (routelog → a central per-project `selections.md`).**
- **Source:** `devdocs/inquiries/2026-06-12_20-48__route_run_tracking_rlu_design/finding.md`.
- **Re-test status:** RE-TESTED — **commitment confirmed-but-frame-revised.** Its NEED (the project-level "what has been run / what's open" view) and its reliability thinking (write-immediately; sweep stale entries) were correct; its artifact and writer-class (a maintained central file fed by a habit-run tool) are superseded by the observed adoption record and the writer-scale. The view re-homes as derived-on-demand.
- **Evidence:** zero uses anywhere incl. the never-happened crowboy migration; the derive-don't-maintain pattern (the views finding).

**Commitment 3 — the June-22 memory-shape finding (log choices, not territory; the leanest form; the deferred hybrid).**
- **Source:** `devdocs/inquiries/2026-06-22_13-58__traversal_memory_shape_and_done_marks/finding.md`.
- **Re-test status:** RE-TESTED — **commitment confirmed (vindicated).** The decomposition holds exactly (record the homeless slivers, point at the rest); its leanest-form paragraph — a rationale line in the spawned child's own files — was the user's position, already half-designed; its residual (non-spawning selections) is precisely where this dive's honest gap sits; its deferred hybrid's central-note half is the piece the gate killed pending evidence.
- **Evidence:** the paragraph quoted at surfacing; the C-B design's one-to-one landing on the decomposition.

**Commitment 4 — canon's traversal-memory commitments (`:38`, `:83`, `:129`).**
- **Source:** `docs/canon/sustained_traversal_loop_of_loops.md`.
- **Re-test status:** RE-TESTED — **commitment confirmed, with its specificity established:** content required (selections + rationales, "one written line of why"), artifact required, form and file UNNAMED. Both mis-readings corrected: the user's "not canon" is true of the artifact; my finding's fusion falsely specific.
- **Evidence:** the three lines verbatim + the empty grep.

## Next Actions

### MUST
- **What:** Review and decide on the drafted correction to the 13-23 finding (E1 → E1′, the fusion-replacement with the qualifier, the order's-head consolidation) — apply, amend, or decline.
  - **Who:** the user (drafted, user-gated).
  - **Gate:** at will.
  - **Why:** the catalog's first entry currently rests on a false sentence and a withdrawn remedy; the record about the record should be true — and per this project's conventions, prior-artifact edits are the user's call.

### COULD
- **What:** Take the E1′+E2 bundle — one design→approve→apply cycle on the traverse runner (the Selection block into `_state.md` Relationships + the post-Routelister link-write per the settled fork-recall design).
  - **Who:** a small gated runner-edit cycle. **Gate:** user approval. **Why:** the memory substrate's entire near-term build in one pass; every inquiry-creation becomes a recorded turn.
- **What:** Add the superseded-in-part note + pointer to the RLU finding.
  - **Who:** a two-line user-gated edit. **Gate:** user approval. **Why:** warmed navigation sessions read findings — a future reader could re-adopt the dead design.
- **What:** Generate the derived view once, at the next natural ask.
  - **Who:** an on-demand scan. **Gate:** none. **Why:** proves the derive-don't-maintain half with a real read.

### DEFERRED
- **What:** The thin central note for non-spawning selections (the killed C-C increment).
  - **Gate:** observable — a lost non-spawning choice demonstrated to hurt.
  - **Why (if revived):** the residual would then have evidence its coverage is worth a standing surface.

## Reasoning

**Why the challenge verified rather than merely accommodated.** Every ground was checked against files: the canon grep (empty — decisive on ground 1); the filesystem-wide search for any `selections.md` plus the crowboy migration check (zero — decisive on ground 2); three Source-Input reads plus the by-construction argument (decisive on ground 3). The fourth-consecutive-correction context demanded the both-ways guard, and it bit both ways: **against caving** — the qualifier (the `_seed.md` counter-instance) was forced into the correction drafts so "central files never work" cannot be taken away; the RLU's view-need was re-homed, not erased; the kill-only option was kept genuinely viable; and the maximal option (C-C) was killed rather than adopted for coverage-theater. **Against defending** — E1's grounding was ruled false, its remedy withdrawn on its own adoption record, its ranking dead, and the correction landed at the heavier `corrects:` (a grep-false factual sentence + a dead remedy is correction proper, unlike the 09-55 precedent's axis-blind-but-mostly-right `refines:`).

**What was killed and why:** C-C's thin note (self-weakening miss-profile: silent exactly where its target lives; the sizing pressure's first casualty; revival trigger named). E1-as-written (above). The wholesale "central files fail" generalization (the `_seed.md` evidence).

**What survived and why:** C-B (every element has a present-or-near consumer — the turn-invariant is the current tier, not a far-future reader; the view is on-demand at zero standing cost); C-A (a genuine minimal pole whose true loss was sharpened at the gate: for spawning selections the data already gets recorded, so the loss is read-cost and the residual, not data catastrophe); the E1′+E2 bundle (verified to change only the gating cycle, not the designs); the June-22 decomposition (this dive is its completion).

**The recording-for-absent-readers inversion** (the strongest objection to any completion): developed honestly, it half-failed — un-backfillability is reader-independent, and this dive's own evidence-base was paid archaeology — and half-survived as the sizing pressure that killed C-C and keeps the view derive-only.

**The method note.** Two disciplines did the deciding: opening files in both directions (the user's claim AND my finding's claim were both checkable — one true, one false), and demanding more instances for the load-bearing "folders already record" claim (one spot-check → three + a structural argument) before the design rested on it.

## Open Questions

### Monitoring
- **The Selection block's home** — `_state.md` Relationships was picked on precedent/class/readers; if in use the co-location argument (choice beside its rationale) proves stronger, home-1 (`_branch ## Selection`) re-opens. Watch at the bundle's design review.
- **The human-direct residual's size** — currently believed small; the C-C revival trigger is its measurement.

### Refinement Triggers
- **The writer-scale's scope** re-opens beyond this project if a habit-run record is ever observed to be adopted and sustained here — name the feature: a remembered, un-mandated recording act with a non-zero sustained use-record.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
u said 

The sharpest single fact: the choice-recorder exists and the record doesn't. The routelog tool (designed in the June route-tracking finding) is installed as a skill, but devdocs/selections.md was never created — so the richest traversal the project ever ran produced zero recorded turns under canon's own turn-invariant

but i think devdocs/selections.md is not cannon, it was talked but never made canon, and i feel like it shold be challanged, because the effor of maintaining one log file etc is usually not feasible. also hard to maintain and easy to miss things so it wont be reliable , but our already existing inquiry based folders are persistant definitely.
```

</details>
