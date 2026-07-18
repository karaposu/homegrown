---
status: active
model: claude-fable-5
effort: unknown
corrected_by: devdocs/inquiries/2026-07-10_15-30__selections_ledger_challenge__central_log_vs_inquiry_folders/finding.md
---
# Finding: traversal dynamics — the mechanisms we can build, extracted from the sample

> **⚠ Stability note (user-directed, 2026-07-10).** Much of what this finding builds on is **not stabilized yet**. Anything discussed here — including the readiness-states, the design commitments, and the **references to past inquiries** (the June route-tracking design, the June-22 memory-shape, the fork-recall design, the seed cross-refs, even the canon readings) — **can be challenged and may be revised**. Treat every claim as challengeable rather than settled; the E1 correction below is the first demonstrated instance (a first-ranked entry overturned within hours of writing). A future reader should verify load-bearing claims against the current files before building on them.

> **Correction applied (2026-07-10, user-approved — `corrects:` bounded to E1 + the offered order's head; see the 15-30 finding).** The original E1 ("adopt the selections-ledger") rested on a grep-false canon-tie and a remedy with a zero-adoption record; it is replaced below by **E1′ ("complete the folder-native choice-record")**. Everything else in this finding stands as gated.

## Question

`devdocs/traversal_sample.md` is the verified record of a nine-day, ~60-run traversal (2026-07-02 → 07-10) in which the user acted as navigator and traversal memory while the `/traverse` loop did the moving. Its §6 made first-pass observations about the dynamics; its §7 declared the next step: analyze those dynamics toward buildable mechanisms. The user then asked exactly that: *"now let's analyze the dynamics deeper and extract mechanisms we can build, using devdocs/traversal_sample.md."*

The goal: a deeper model of how the traversal actually worked, and a catalog of mechanisms the project could build — each grounded in dated sample events, checked against existing designs and seeds (no silent duplication), with what building it concretely means. Extraction and sketching only; building anything is downstream and the user's choice.

## Finding Summary

- **The honest headline: most of the mechanism space is already half-built.** File-checks showed the extraction is a *consolidation-and-wiring* job, not an invention job: one tool is built and unused, one design is finished and unwired, one convention already runs (for seeds only), and only a few pieces are genuinely absent. "Buildable" therefore comes in five readiness rungs — use-built / wire-designed / generalize-running / build-new-small / SUSTRALL-era — and the catalog tells the truth about each entry's rung.

- **The sharpest single fact, as corrected: no selection-record-as-such exists — but the folders already carry most of the raw material.** Strictly, the sample's ~60 turns left **zero recorded turns** (nothing labels a choice, names its alternatives, or links it to the route taken) — canon's turn-invariant asks for a selection-rationale "recorded into traversal memory… one written line of why," in *some* artifact (`:83`/`:129` name **no file**; the original claim that "Tier-1 names this exact artifact" was false — `devdocs/selections.md` was the RLU finding's non-canon design, and its `routelog` tool sat installed for ~a month with zero uses anywhere). The nuance that bounds the diagnosis: every inquiry-spawning selection's rationale IS already preserved verbatim in `_branch.md`'s Source Input, written mechanically by the runner — the record is unlabeled and unlinked, not absent. Choices still cannot be backfilled where nothing writes them: the true losses are the chose-over *links* (reconstructable only at read-cost) and non-spawning selections. *(The failure is the writer, not the location: the project's central `_seed.md` works because a protocol step writes it.)*

- **The deepened dynamics model (the analysis half):** (1) a **two-layer rhythm** — the user intervened only *between* loop-runs, never mid-loop — which empirically confirms canon's worker/navigation/orchestrator division and yields a siting rule for every mechanism; (2) **four trigger-types** behind the navigator's acts (accumulated-pattern · single-decisive-datum · structural-diagnosis · condition-flips-true), each naming a distinct mechanical need; (3) a general **probe shape** (plant a known input → run → supply ground truth → read the differential — the 1-vs-7 measurement's anatomy); (4) the **park-time data-requirements** (a parked branch needs a stated reactivation-condition and a structural signature — the articulate2 park had neither, and its 32-day recall succeeded on human memory alone); (5) the **correction-generator gap** — the correction-chain's mechanics are built, but the correction *candidates* were always human.

- **The gate-adjudicated catalog: eight entries.** Ranked: **E1′** complete the folder-native choice-record (wire-designed — *corrected*: the runner-written Selection block + the derived view; replaces the withdrawn "adopt the selections-ledger") · **E2** wire the fork-recall write-half + read-line (one gated runner edit) · **E3′** the park/wake convention (condition + signature + scannable surface + re-scan pass — three candidate rows folded into one honest entry) · **E5→E9** the test pair (expectation-anchors artifact + probe-harness protocol) · **E6** mechanized re-run detection (smallest; follows E1′) · **E7** the streak-watcher (flags-only; pays at autonomy) · **E11** the correction-generator (split: candidate-generation is SUSTRALL-era; correction-*selection* is research). Plus two absorbed expressions: the seven-move `move:` field on E1′'s Selection records, and a small future amendment to the canon warming doctrine.

- **The gate bit on file-evidence, both ways.** Anti-padding: three park-flavored rows (E3/E4/E8) folded into one convention (the seeds' own index carries all the same facets in one artifact); a twelfth candidate (an "orientation/warming protocol") was **killed** when a fresh file-check found canon already owns the warming doctrine — the claim "specified nowhere" was false. Anti-trimming: the three verified-absent inventions (expectation-anchors, streak-watcher, probe-harness) all survived prosecution.

- **The assembly is the point:** the record-side entries form **one data-substrate** (ledger + link-graph + park-records + expectations) and the detector-side entries are **reads over it** — and the substrate's consumer already exists in canon (the navigational session's warming doctrine). Building the records completes a circuit canon designed.

- **An order is OFFERED, never chosen (head corrected):** the **E1′+E2 bundle** leads (one gated runner-edit cycle covering the Selection-block write and the fork-recall link-write — same act-kind, near-same site; splittable at will) → E3′ → {E5→E9} → E6 → at-autonomy {E7, E11-half}. The old "E1 strictly first by zero-gate adoptability" died with its mechanism. An alternative probe-first ordering is listed; declining the runner edit entirely (correct-and-build-nothing) is also sound. The user picks.

## Finding

Why this exists: the traversal sample's compilation ended with "analyze the §6 dynamics toward buildable mechanisms — with this document as the shared ground." This dive is that analysis. Its first discovery reshaped the task: before inventing anything, opening the project's own files showed most candidate mechanisms already exist in some state — so the honest deliverable is a state-truthful catalog plus the model that organizes it, not a sheet of new designs.

### 1. The deepened dynamics model

**The two-layer rhythm.** Checking the record: every navigator intervention in the nine-day sample landed at a boundary between loop-runs — after a finding concluded, never mid-pipeline. The redirect ("the scorecard is wrong") came after the twentieth paper's finding; the articulate2 recall came after the ordering-problem finding; every correction and authorization sat between dives. Within a run, the loop executed its eight disciplines autonomously. This is canon's worker/navigation/orchestrator division (probe → see → decide → remember) observed live rather than merely designed — and it yields a **siting rule** every mechanism below obeys: things that act mid-run belong to the runner; things that act between runs belong to navigation/orchestration artifacts. One exclusion is constructed from canon's own line ("Navigation sees; it does not choose"): nothing below the orchestrator may *choose*.

**Four trigger-types.** What actually caused the navigator's acts: **T1 accumulated-pattern** (the ~19-dive fuzzy streak — needs a trajectory record and a watcher that flags); **T2 single-decisive-datum** (the 1-vs-7 differential — needs a probe harness, because the datum was *manufactured* by a designed comparison); **T3 structural-diagnosis** (the ordering problem — already mechanized: a DIAGNOSE dive is a traverse run over a prior run's artifacts); **T4 condition-flips-true** (the articulate2 moment — needs stored park-conditions and a surface that gets re-scanned).

**The probe shape.** Plant a known-content input → run the system → supply the ground-truth variant → read the differential. Three recorded instances (the paper-29 probe; the deliberate 29 re-pass; the warm design's graduation-criteria variant), all hand-orchestrated. It is a general test pattern, not a July anecdote.

**The park-time data-requirements.** From the sample's centerpiece memory event: a mechanical park/recall would have needed, at park-time, a content-pointer (existed), a **reactivation condition** (did not exist — it lived in the user's head for 32 days), a **structural signature** for resemblance-matching (did not exist — the recall fired on shape-match in human memory), and a re-scan surface (exists today only for seeds, as the seed index's maturation-trigger convention).

**The correction-generator gap.** The correction-chain's machinery is built (the refines-chains, verbatim-quote provenance, the both-ways gate) — but in all three recorded chain-turns, the correction *candidate* came from the user, and it carried a positive proposal, not just doubt. Generating counters is nearly in reach (the mechanized-counter-generation seed is LIVE); *selecting the right correction* is not.

### 2. The catalog

Each entry: what it is · readiness rung · payoff timing · what building it means. (Full field-sets — family, layer, form, depends-on, grounding, cross-refs — in the archived innovation/critique outputs; this is the adjudicated set.)

**E1′ — Complete the folder-native choice-record.** *wire-designed · pays now.* **(Corrected entry — replaces "E1: adopt the selections-ledger"; see `devdocs/inquiries/2026-07-10_15-30__selections_ledger_challenge__central_log_vs_inquiry_folders/finding.md`.)** The corrected grounding: canon requires selections and rationales recorded into traversal memory ("one written line of why," `:83`) in *some* artifact (`:129`) — **it names no file**; `devdocs/selections.md` was the RLU finding's non-canon design, and its habit-run `routelog` tool sat installed ~a month with zero uses anywhere. Meanwhile the folders already record: every spawning selection's rationale sits verbatim in `_branch.md`'s Source Input (runner-written, verified at three instances), and the roads-not-taken sit in each `routelister.md`. *(The failure is the writer, not the location: the central `_seed.md` works because a protocol step writes it — the writer-scale: runner-mechanical > protocol-mandated-LLM > habit-run.)* Building = **one small runner edit**: at inquiry-creation the traverse NEW step writes a Selection block into `_state.md`'s Relationships — `chosen-route / chosen-over / because` — systematizing the CONTINUES-FROM convention already there; the cross-inquiry "what's open / what was chosen" view is **generated on demand**, never maintained. The `move:` field (the folded E10) rides the Selection block. The surviving argument, nuanced: **choices are un-backfillable where nothing writes them** — the chose-over links and non-spawning selections are the true loss surface (this dive reconstructed nine days of links only at archaeology cost); the spawning rationales are already safe.

**E2 — Wire the fork-recall write-half (+ the read doctrine line).** *wire-designed · pays now.* The July-4 fork-recall finding settled the design: a small post-Routelister runner step where the finishing traverse appends backward links to the past work it connects to (append-forward, never mutate-old, local-relevance only), plus one doctrine line telling the next traverse's topic-read to consult those links. It is verifiably unwired — the pipeline has no such step — which is why the 32-day recall had no explicit link-graph to read. Building = one gated runner-spec edit.

**E3′ — The park/wake convention.** *generalize-running · pays now.* The seeds already run this: every parked seed carries a specific, checkable maturation-trigger, and the index gets re-scanned. Generalize it to **all** deliberate parks (deferred designs, parked directions, "later" fixes): park-records gain a reactivation-condition and a structural signature; parked items live on a scannable surface; a re-scan pass visits it. (The gate folded three candidate rows — condition, signature, scan-surface — into this one entry: the seeds' precedent keeps all facets in one artifact, and different *reads* don't make different *buildable acts*.)

**E5 — The expectation-anchors artifact.** *build-new-small · pays now (small).* The one memory requirement verified absent as an artifact anywhere: a place to write "X should yield/behave Y, because Z" at plant/park/plan time. In the sample, "source 29 is rich" existed only as the user's private expectation — the probe worked because a human held the anchor. Three consumers: probes (E9), expected-vs-actual quality checks, validation runs.

**E9 — The probe-harness protocol.** *build-new-small · pays mostly at autonomy.* The probe shape operationalized as a small protocol; consumes E5 (degradable: ground truth can be hand-supplied). The sample's decision points form its first fixture set — including "given the July-8 record, does a candidate navigator surface the June two-pass design?"

**E6 — Mechanized re-run detection.** *generalize-running · pays now (small); follows E1′.* The harvest's identity-check practice (which caught the paper-24 duplicate by alertness) consults the Selection records and route-marks instead of relying on an attentive operator. The smallest entry.

**E7 — The streak-watcher.** *build-new-small · pays at autonomy.* A periodic pass over the accumulated records that FLAGS trajectory patterns ("six consecutive NO-verdicts on this vein"; "target wording unstable across five dives") to the orchestrator — flags only, never chooses (canon's sees-vs-chooses line, quoted at the gate). Generalizes the one built instance of this class (the seed index's zero-variance flag). Thresholds: dimensions named, values deferred, conservative default — the project lacks the calibration to set them, and E1′'s records are what will eventually provide it.

**E11 — The correction-generator.** *split rung.* Candidate-generation is **SUSTRALL-era** (a concrete composition: a fresh navigational session re-prosecutes a committed finding using the LIVE mechanized-counter-generation seed's machinery); correction-**selection** is **research** (no design supplies the judgment the sample's corrections actually carried).

**Two absorbed expressions.** The seven-move recording = a field on E1′'s Selection records (corrected home). And the killed twelfth candidate's residue: once E1′/E2/E3′ exist, the **canon warming doctrine's read-list gains the memory artifacts** (the Selection records · open parks · the link-graph) — a small, user-gated amendment to an owned doc, sequenced after there is something to read.

### 3. The assembly — why this is one build, seen honestly

The record-side entries (E1′ Selection records, E2 links, E3′ park-records, E5 expectations) form **one data-substrate** — exactly the June-22 finding's architecture completed: record only the homeless slivers (choices, conditions, signatures, expectations); point at everything else. The detector-side entries (E6 check, E7 watcher, the re-scan pass, E9 probes) are **reads over that substrate**, which is why every dependency edge points records→readers, and why the record side pays immediately while the detector side pays at autonomy. And the substrate's *consumer* already exists: canon's warming doctrine — the navigational session's specified read-sequence — is waiting to read artifacts that don't exist yet. Building the records completes a circuit canon already designed.

### 4. The offered order (the user chooses)

**(Head corrected per the 15-30 finding.)** Derived from rungs × payoff-timing × dependencies: **the E1′+E2 bundle first** — one gated runner-edit cycle covering the Selection-block write (E1′) and the fork-recall link-write (E2), the same kind of act at nearly the same site; splittable at the user's will — → **E3′** (one convention) → **E5 then E9** → **E6** → at autonomy: **E7** and E11's candidate-half → the warming-doctrine amendment once the substrate exists. The original "E1 strictly first (zero construction, zero approval-gates)" died with its mechanism: the corrected first move is a small gated edit, honestly. *Alternatives:* a probe-first order (E5+E9 early) if validating the seed pipeline matters more; or correct-and-build-nothing (the folders' record as-is already beats the dead ledger). This is an offer — nothing here selects.

### 5. What stays human, on the evidence

The ten navigator acts triage as: **human-by-design** — direction-setting, unit-of-output redefinition, build/apply authorizations (the will; canon keeps them human deliberately); **support-only** — dead-end detection and the timing call (E7/E3′ flag; the human calls); **mechanizable** — probing, the memory acts, validation, and the *checking* halves of quality-valuation and correction (the built gates), with valuation-judgment and correction-selection as the honest human residuals. This is the user-as-component seed's replacement-map made concrete — the checklist any future autonomy change must answer.

## Seeds

No seeds passed a gate this dive — a design/analysis dive, and the candidate-watch ran honestly: the dive's germs are catalog entries (offers with present or near-term payoff, not deferred-payoff hypothesis-germs), and the one transferable principle that surfaced ("choices are un-backfillable — outcomes re-derive, rationales don't") is the June-22 finding's core restated with this sample's evidence, not a new germ.

## Inherited Commitments Re-test

**Commitment 1 — the traversal sample's §6 analysis layers (the move-vocabulary, the ten navigator acts, the six memory requirements, the §7 uses).**
- **Source:** `devdocs/traversal_sample.md` §6–§7.
- **Re-test status:** RE-TESTED — commitment confirmed and deepened. The six requirements survived contact with the artifact record (each mapped to real states: built/designed/running/absent); the ten acts triaged cleanly with a clean coverage-check; §7's "mechanism source" use is delivered by this finding. One §6.5 emphasis sharpened: requirement 3 (expectation-anchors) is the *only* one absent as an artifact — the others are partial embodiments, which §6.5 did not distinguish.
- **Evidence:** the surfacing overlap map (registry check, absent `selections.md`, the seed index's trigger convention read in full) + the gate's canon quotes.

**Commitment 2 — the June-22 traversal-memory shape ("log your choices, not the territory"; the thin-record/rich-state split).**
- **Source:** `devdocs/inquiries/2026-06-22_13-58__traversal_memory_shape_and_done_marks/finding.md`.
- **Re-test status:** RE-TESTED — commitment confirmed; this finding's assembly IS its completion. The catalog records only the homeless slivers (choices via E1, conditions/signatures via E3′, expectations via E5) and points at everything else; the "rich state reconstructed by warming" half turned out to be canon-owned (the warming doctrine), which strengthens rather than revises the commitment.
- **Evidence:** the E12 kill at the gate (`towards_cross_run_cognitive_steering_with_isolated_navigation_session.md:149-158` opened and quoted).

**Commitment 3 — the seed index's mechanism-shaped seeds (the don't-duplicate list).**
- **Source:** `devdocs/seeds/_seed.md` (~14 entries).
- **Re-test status:** RE-TESTED — commitment honored, not just inherited: every overlapping catalog entry cites its seed as a maturation rather than re-minting (E7 cites the variance-flag precedent + the consultation-history and event-recording seeds as its data; E2 enables the structure-propagation seed's read-side; E11 cites the LIVE prosecution-audit seed; E1's schema is where the consultation-history data would land). No seed was double-recorded.
- **Evidence:** the per-entry cross-ref fields (innovation.md, archived) + the gate's redundancy prosecutions.

## Next Actions

### MUST
- **What:** Review the offered order (§4) and pick — adopt, reorder, or decline; the catalog's value is realized the moment the choice is the user's rather than unmade.
  - **Who:** the user.
  - **Gate:** at will. *(Corrected: the head option is now the E1′+E2 bundle — a small gated runner edit, not a zero-construction adoption.)*
  - **Why:** enumerate-never-select was this dive's binding constraint; the one act it cannot perform is the choice itself.

### COULD
- ~~**What:** Start E1 today — run `routelog start/done` at the next real choice-moment.~~ **WITHDRAWN (the 15-30 correction):** the routelog/selections.md remedy is dead (non-canon; zero adoption in ~a month; habit-run writer-class). Its replacement is the E1′+E2 bundle below.
- **What:** Take the E1′+E2 bundle — one design→approve→apply cycle on the traverse runner: the Selection block (`chosen-route / chosen-over / because`) written into `_state.md` Relationships at inquiry-creation + the post-Routelister link-write per the settled fork-recall design.
  - **Who:** a small gated runner-edit cycle. **Gate:** user approval. **Why:** every inquiry-creation becomes a recorded turn (runner-mechanical — the writer-class that actually survives here); the link-graph starts accumulating.
- **What:** Draft the E2 runner edit (the post-Routelister write-half step + the topic-read doctrine line) for approval.
  - **Who:** a small design→approve→apply cycle. **Gate:** user approval. **Why:** the link-graph compounds with every traverse that runs after it.
- **What:** Draft the E3′ convention text; then the E5 artifact shape and the E9 protocol.
  - **Who:** short follow-on drafts. **Gate:** user approval per draft. **Why:** completes the record-side substrate; enables the test family.
  - **Depends-on:** MUST item "review the offered order". OVERRIDE: drafting is adoption-ready independent of the ordering choice — drafts are inspectable offers themselves. Reason: drafting costs little and sharpens the user's choice; adoption stays gated regardless.

### DEFERRED
- **What:** E7 (streak-watcher) + E11's candidate-generation half.
  - **Gate:** observable — E7 when the Selection/event records reach watchable volume (weeks of E1′ use); E11-half when the navigational session exists.
  - **Why (if revived):** the detectors are reads over records that must first exist; at autonomy they replace the watching human.
- **What:** The warming-doctrine amendment (the read-list gains the memory artifacts).
  - **Gate:** condition-bound — after E1′/E2/E3′ produce something to read; a small user-gated canon edit.
  - **Why (if revived):** completes the canon-designed circuit (the eyes read the memory).

## Reasoning

**Why consolidation-first (and not an invention catalog).** The frame was challenged three ways at Innovation — a single integrated build-plan (absorbed as the assembly note: coherence kept, per-unit adoptability preserved), entries-recorded-as-seeds (failed: offers aren't deferred-payoff germs, and several candidates already ARE seeds — re-recording would double-record), and build-nothing-now (half-failed: records are un-backfillable and Tier-1 is the current climb step; half-survived: the detectors genuinely can wait — encoded as the payoff-timing field). The gate then independently reinforced the frame: file-checking *shrank* the invention tier further.

**What the gate killed or folded, and why.** E4 (structural-signature) and E8 (re-scan surface) folded into E3′ — the running seeds precedent keeps condition, trigger-re-scan, and record in one artifact; different reads don't make different buildable acts. E10 (seven-move recording) folded to a ledger field — a row's rationale line carries the move. **E12 (the "orientation/warming protocol") was killed as an entry by a fresh file-check:** the claim "specified nowhere" was false — canon names the warming sequence (`sustained_traversal_loop_of_loops.md:36`) and a dedicated doctrine doc specifies the 3-stage read-list; E12's true residue is the small future amendment (§2). The redesign-level *question* was still the right move — it found the integration point the assembly now names.

**What survived prosecution, and why.** E1 (the "a habit isn't a mechanism" objection mistakes form for value — the entry is the adoption act plus the argument, and canon's Tier-1 names the artifact) *[historical record of this dive's gate — SUPERSEDED: the 15-30 dive found the "Tier-1 names the artifact" claim grep-false and the habit-run remedy dead; E1 → E1′ above]*; E2 (cites the settled design, adds only the wiring; verifiably unwired); E5 (three consumers, absence rigor-tested); E7 (flags-only survives the sees-vs-chooses line, quoted); E9 (three recorded instances — generalizes); E11's split (candidate-generation has a concrete composition path; selection doesn't). The joint-{E1,E2} first-move tie was **legally sharpened** at the gate by a missed derivation input — adoptability-gating (E1 has no approval gate; E2 does) — which orders the derivation without choosing for the user.

**The method note.** The dive's one factual error (E12's absence-claim) sat in exactly the one corner of the overlap map surfacing hadn't opened a file for. Same lesson as the prior gates: an absence-claim is only as good as the files opened against it.

## Open Questions

### Monitoring
- **Does E3′'s one-convention fold hold in practice?** If, once drafted, the signature's format needs machinery the condition doesn't (e.g., computed fingerprints), the fold re-opens toward a separate signature mechanism. Watch at the E3′ draft.
- **R10's merge** (E7 + E11's half as one at-autonomy frontier): re-split if their triggers diverge (E7 fires on data volume; E11 on the eyes existing).

### Blocked
- **The benchmark's real use** (running a navigator-candidate against fixtures F1–F3) — blocked until any navigator-candidate exists to test.

### Research Frontiers
- **Correction-selection** (E11's second half): what supplies the judgment that picks the *right* correction, not just candidates — no known path; the sample shows the human doing it with positive proposals each time.

### Refinement Triggers
- **The catalog's completeness claim is deliberately not made** — one sample shows the mechanisms this journey exercised. The catalog re-opens when a future traversal exhibits a navigator act or memory event the ten-acts triage and six requirements don't cover; name the feature: **an intervention type or recall shape with no mapped entry.**

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
now lets analyze the dynamics deeper and extract mechanisms we can build using devdocs/traversal_sample.md
```

</details>
