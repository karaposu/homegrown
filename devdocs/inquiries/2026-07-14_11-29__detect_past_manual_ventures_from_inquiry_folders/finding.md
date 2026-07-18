---
status: active
model: claude-fable-5
effort: unknown
---
# Finding: detect past manual ventures from inquiry folders — yes; repair + lift + one interview, into a provenance-graded venture registry

## Question

The user (reading the just-designed Expedition Log lens's render line, "inquiries as entries… ventures as clusters"): *"So far we had many different ventures, but I was the glue between traverses, so we don't have an official venture record of these things. I'm thinking maybe we can read past inquiry folders and detect all past manual ventures — this way when we visualize we will have data for ventures, and second, just like devdocs/traversal_sample.md is a perfect example for understanding ventures, such past digging would allow us to get more samples for ventures. What do you think?"*

(Context: "venture" is a canon term — `docs/canon/load_bearing_findings/traverse_SUSTRALL_venture_rephrase.md` defines it as one bounded, specific-purpose run of the system over a particular thinking space, with identity carried by *thread-continuity*. The record is 244 inquiry folders; the atlas (`docs/visualisation/`) renders it from a generated `data.json`.)

## Finding Summary

- **The answer, in one breath: yes — do it, and it is a better idea than its own framing assumes,** because the dig is not archaeology from nothing. It is three cheaper things: REPAIR what the record already wrote, LIFT it to venture grain, and ASK the one witness (you) for the joins that only lived in your head.
- **The two-layer truth:** at the venture layer you are exactly right — no artifact anywhere records a venture (no registry, no ventures field, nothing; confirmed absent). But at the link layer the record is rich: 233 of 241 `_state.md` files carry Relationships sections, with 193 `CONTINUES FROM` lines — the trace exists; what's missing is the venture SEMANTICS on top of it (names, purposes, end-statuses, episode membership).
- **The measured motivation:** today's clusters are just recorded chain-links (34 auto-labeled groups). Against the one hand-verified venture — the `traversal_sample.md` arc, 2026-07-02→07-10 — today's derivation shows **10 separate clusters plus 23 standalones**, with the nine paper-reading dives entirely chain-less. Your verbal glue sat exactly at those transitions; that under-count is now a number, not a feeling.
- **The design landed:** a three-stage detection pipeline (mechanical repair → judged lift with typed evidence → your batch validation), piloted answer-key-blind on the sample window where ground truth exists; a venture REGISTRY (`devdocs/ventures/_ventures.md`) as the official record — provenance-graded, dual-era (retro-detected and future-native entries share one home); a small adapter extension so the atlas renders real venture clusters.
- **Both payoffs route to consumers:** the registry feeds "ventures as clusters" mechanically; validated ventures feed traversal_sample-style venture-compiles (the standing venture-compile seed's trigger formally fired on this ask — the acts stay yours).
- **Three honest limits ride the yes:** the venture list can never claim completeness (a venture that left no trace is unknowable); your validation is constitutive, not courtesy (canon's second continuity-carrier — "the navigator's returning intention" — is not on disk); and nothing backfilled is ever the "recorded-selection venture" canon names as the next breakthrough — that requires selections recorded *when made*, which is the forward practice this design also offers.
- **Everything is gated:** the pilot dig is immediately runnable at your word; nothing writes to the record without it.

## Finding

### 1. What you asked, and what the record actually holds

The gap you named is real, and it has a precise shape. There is genuinely no *official venture record*: no registry file, no ventures field in the atlas schema, no per-venture artifact — the concept exists in canon, and its instances exist only as your memory plus one hand-compiled account (`devdocs/traversal_sample.md`). At the same time, the folders are not dark. Almost every inquiry's `_state.md` carries a Relationships section (233 of 241), the record holds 193 `CONTINUES FROM` lines, 31 dated route-tick receipts (a route in one inquiry's route-map ticked by a later inquiry — a practice only four days old but exactly the right kind of evidence), and only 4 of 231 nodes are fully isolated. So the task decomposes into three sub-problems of different difficulty:

1. **Resolution repair (mechanical):** 274 of 751 recorded relationship targets don't resolve — mostly because our own reference style (`…2026-07-13_22-16…`, with ellipses) doesn't match the adapter's full-folder-id matcher. A script recovers many of these; the count of what it fixed and what stayed unresolved is reported, never hidden.
2. **Semantic lift (judged):** chains → venture candidates. Purpose is QUOTED from the root inquiry's own Question/Goal (or marked `purpose-unrecovered` — never invented); span is mechanical; end-status is proposed in canon's own vocabulary (satisfied / handed-off / abandoned-by-judgment / dormant-open — a faded arc is *dormant*, never auto-abandoned).
3. **Glue-transition recovery (judged + attested):** joining the fragments and standalones where you were the glue. This is where the value concentrates — the measured ground truth (one venture appearing as 10 clusters + 23 standalones) lives here — and it is exactly the part that cannot finish without you.

### 2. Why this is falsifiable, not hopeful

The sample gives detection an acceptance test. The pipeline runs first on the 2026-07-02→07-10 window and must reassemble the hand-verified venture — with `traversal_sample.md` itself EXCLUDED from the evidence (it is the answer key; using it would make the test trivial). Memory-file narrations stay legal evidence because they are part of what the sweep will use everywhere else. Two probes ride the pilot: the tagging thread (four inquiries that should merge into one venture — today a 2-chain plus two `RELATED` satellites) and one May-era arc (the old-record regime, where receipts didn't exist as a practice; the detector's expectations are era-aware so old folders aren't punished for missing evidence kinds that postdate them). Only after the pilot passes does the corpus sweep run.

### 3. The pipeline (runnable at your word)

- **Stage 1 — mechanical repair & prep** (deterministic script; writes nothing to the record): resolve the unresolvable references; recompute chain components on repaired edges; assemble a per-component dossier (members, stamps, receipts, supersedes lines, same-day-burst neighbors). This stage ships value alone — better resolution improves today's clusters before any venture exists.
- **Stage 2 — judged lift & joins** (an offline assistant pass; output is a candidates document, still not the record): for each component and standalone, quote the purpose, propose the venture joins — every join citing typed evidence from a fixed ladder (chain-links → tick receipts → `RELATED` lines with thread-notes → refines-mentions in prose → memory narrations → same-day bursts and name-kinship as candidate-*generators* only). Topic similarity alone joins nothing — same subject twice is not the same venture; thread-continuity is receipts or your word. Standalone inquiries are not made into one-member ventures (canon: a venture chains many traverses); a component whose evidence suggests two braided threads gets an explicit split proposal.
- **Stage 3 — your batch validation** (the constitutive step): the candidates document is the validation surface — venture cards sorted by confidence, each carrying the proposed name, the quoted purpose, ordered members, span, the evidence, and any braid/split flags. Per card you confirm / edit / reject / mark unsure. No UI is needed and no completeness is forced; "unsure" is a first-class landing.

### 4. The registry — where the official record lives

`devdocs/ventures/_ventures.md`: one hand-editable entry block per venture (about eight lines each — the same proven pattern as the seeds index), with a `compiles/` subfolder for per-venture write-ups later. The registry is born only at your gated write, from validated cards — and at that write you may deliberately include not-yet-sure entries recorded AS `proposed` (the gate is your word on the write; the validation field records the entry's epistemic state). Each entry carries: id · label (quote-derived) · purpose (quoted + attributed) · members (ordered) · span · end-status · **provenance** (native / retro-chain / retro-attested / retro-inferred) · evidence pointers · **validation** (validated / proposed / unsure). The two graded fields are the honesty spine: a retro-detected venture never masquerades as a natively-recorded one, and a proposal never masquerades as your confirmation.

The atlas consumes it mechanically: the adapter's schema bumps to venture-atlas/2 with a `ventures[]` array, a ventures count, and a membership-mismatch entry in the existing anomalies ledger. Today's edge-derived groups are RETAINED as the mechanical layer — the render prefers validated ventures and falls back to groups where no venture covers. Counts render as "ventures recorded: N" — never N-of-M, because the denominator is unknowable. No LLM runs at render; the dig is an offline record-side act whose *output* is data.

### 5. The second payoff — venture samples, and a fast path

More `traversal_sample.md`-like accounts become possible exactly when ventures are identified: per-venture compiles written under the sample's own honesty bar ("compiled by re-checking the actual inquiry folders… nothing reconstructed from conversation memory alone", with cause-attribution tags). The standing venture-compile seed (rx-S7 in `devdocs/seeds/_seed.md`) names precisely this artifact, and its trigger — "a second venture-compile need arises" — formally fired with your ask; the compile acts stay yours. Good first picks (your call): one clean recent thread (the games arc — small, receipt-rich) and one May/June arc for era contrast. **And a fast path exists:** any obvious thread can be hand-validated and compiled ad hoc, without the corpus dig — validation by you is validation, however it arrives.

### 6. Forward, and back to canon

- **The forward hook (offer, not mandate):** the registry only stays alive if new ventures enter it natively — smallest practice: you add or edit one registry line when you open or close a thread (provenance: native). Optionally, newly created inquiries' `_state.md` gains a `## Venture` line — that half is a runner-template change and carries a standing check at adoption (what undocumented functions does the current `_state.md` form serve?). This is also the honest road to canon's named next breakthrough (the recorded-selection venture) — which no backfill can reach, because its selections must be recorded when made.
- **The canon report:** the detector operationalizes, retroactively, exactly the mechanism the venture canon deferred as "structural-layer work" — determining thread-continuity from records. The canon doc's own Refinement Trigger formally watches *the first venture-run's* record; this dig is an EARLY empirical test of the same blocking feature (the record-chain's expressiveness). If Stage 2's joins repeatedly fail for want of evidence, that confirms the expressiveness concern and gets reported at that trigger — the report is drafted by the dig's outcome; any canon edit is yours.

### 7. The offers, in order (all gated)

① **The pilot dig** (Stages 1–3 on the sample window + the two probes; answer-key-blind; immediately runnable at your word) → ② **the corpus sweep** (only after the pilot's acceptance; validation in era-sliced sittings) → ③ **the registry write + adapter venture-atlas/2** (once validated ventures exist) → ④ **the first venture-compiles** (your picks; the single-venture fast path available anytime, independent of the dig) → ⑤ **optional trace repair** (adding clearly-missing relationship lines to old `_state.md` files with an inline `(retro-added …)` note — annotate-not-rewrite, its own gate, never silent). These are record-side acts — a different lane from the UI queue; the 10-03 foundation build and the Expedition Log lens keep their standing order and simply gain venture data when both exist.

## Inherited Commitments Re-test

- **The venture canon (three marks; thread-continuity identity; two carriers):** RE-TESTED — commitment confirmed: the definition is applied UNMODIFIED as the detection criterion; the canon itself reads a past arc as "one venture example" (the sample), anchoring retro-applicability; the detector is the deferred pivot-boundary *determination mechanism*, meaning-layer untouched. The Refinement Trigger's formal scope ("the first venture-run") is respected — this dig reports early evidence at it, it does not fire it.
- **The sample's compile method ("nothing reconstructed from conversation memory alone"; cause-tags):** RE-TESTED — commitment confirmed and extended: the bar governs Stage 2/3 and all future compiles; the answer-key-blind pilot clause strengthens it (the sample is excluded as evidence where it is the reference).
- **The 10-26 lens design (ventures as clusters; marker-provenance clause):** RE-TESTED — commitment confirmed: this work is data-side only (lens jurisdiction untouched); the marker-provenance idea (work-authored, fallible, declared) extends naturally into the venture provenance grades.
- **The atlas honesty rails (no-fabrication; the map never writes the record; counts-never-scores; no-LLM-at-render):** RE-TESTED — commitment confirmed: quote-or-mark purposes; the dig is a record-side offline act; "recorded: N" never N-of-M; render stays mechanical.
- **The seeds-index obligations (consult/fire at gates, never re-mint):** RE-TESTED — commitment confirmed: rx-S7 fired via its second trigger arm (consumer: the compile plan; acts gated); rx-S5 (breeding-package) consulted and NOT fired (this dive is the record-side piece of the venture structural layer, not the full structural dive); p29-S9 (record repair) rides Stage 1 and the optional trace-repair offer; gh-S4 (venture splits) and p25-S3 (event recording) reserved as optional future registry fields.

## Next Actions

### COULD
- **What:** run the pilot dig (Stages 1–3, sample window + tagging/May probes, answer-key-blind). **Who:** the assistant digs; the user validates. **Gate:** the user's word — runnable immediately. **Why:** proves the detector where ground truth exists; Stage 1's repair ships value alone.
- **What:** the registry write + adapter venture-atlas/2. **Who:** assistant builds; user gates. **Gate:** validated ventures existing. **Why:** the official record is born and the atlas gains real venture clusters. **Depends-on:** COULD item "the pilot dig" (and its sweep continuation). This COULD is GATED — do not act until validated ventures exist.
- **What:** the first venture-compiles (or the single-venture fast path anytime). **Who:** assistant compiles; user picks and validates. **Gate:** a validated venture + the user's pick. **Why:** the "more samples for understanding ventures" payoff; the venture-compile seed's registered consumer.
- **What:** the forward hook (registry line at thread open/close; optional `_state.md` template line with the invisible-supports check at adoption). **Who:** the user's practice; assistant assists. **Gate:** the user's adoption. **Why:** the registry stays alive; the honest road toward the recorded-selection venture.

### DEFERRED
- **What:** the corpus sweep. **Gate:** the pilot's acceptance verdict. **Why (if revived):** "all detectable ventures" lands, graded, at an unchanged gate.
- **What:** the optional `_state.md` trace repair (retro-noted missing links). **Gate:** its own user gate, after the dig surfaces the list. **Why (if revived):** the mechanical layer improves for every future regeneration without falsifying history.
- **What:** the canon report at the venture definition's Refinement Trigger. **Gate:** dig evidence existing (pilot or sweep). **Why (if revived):** the identity-clause meets its first measured ground.

## Reasoning

Kills and their grounds: **components-as-ventures** (the measured ground truth kills it — one real venture is 10 components + 23 standalones; components are candidate-input, never venture-output) · **a purely mechanical detector** (cannot quote purposes, judge statuses, or join across no-link gaps — the very glue class the user named; its true half survives as Stage-1-ships-alone) · **"wait for native recording, never backfill"** (the YAGNI challenge — fails against two live consumers and the user's ask; its true half survives as pilot-first scaling, no blind sweep) · **piloting on the worst era** (nothing to accept against where no ground truth exists; its true half = the May probe riding the pilot) · **link-rewriting as the venture home** (links carry no purpose/status/provenance, and retro links would become indistinguishable from native ones — provenance destroyed at the trace layer; the git-archaeology lesson: annotate after, never rewrite history; survives only as the separate, retro-noted repair act) · **completeness claims** (the remainder is unknowable; any N-of-M fabricates a denominator) · **three incidental seed candidates** (a dual-era-registry "seed" = a design element of this very deliverable; receipts-as-native-recording folds entirely into the forward-hook offer; era-aware expectations = method nuance — all killed at the gate; no Seeds section, honestly). Two of this dive's own phrasings were also corrected at the gate: "your observation IS canon's trigger arriving" was resized (the trigger formally watches the first venture-run; this is early evidence on the same blocking feature), and "the registry is a first venture-grain memory artifact" was resized to *first structured* one (the sample and the memory narrations are its narrative predecessors). Survivals under prosecution: the registry design survived the write-timing prosecution by separating the gate (your word on the write) from the epistemic axis (`proposed` as a recordable state you may choose); the pilot survived the circularity prosecution via the answer-key-blind clause; the fast path survived because hand-validation IS constitutive validation.

## Open Questions

### Monitoring
- Stage 1's actual recovery rate on the 274 unresolved targets (measured by its own counts when the pilot runs).
- May-era join quality (the probe measures whether old arcs can be joined at all beyond chains).
- Validation fatigue: does the card-sitting stay one honest sitting at corpus scale, or need more era-slices?

### Blocked
- The canon report waits on dig evidence; venture clusters rendering waits on the registry existing and the atlas/lens builds in their own queue.

### Refinement Triggers
- **The registry's one-file form re-opens** if entries exceed roughly 80 or hand-editing stops being one-sitting comfortable — the named alternative is per-venture files under `devdocs/ventures/`.
- **The detector redesigns before any sweep** if the pilot fails its acceptance test (cannot reassemble the sample venture) — the blocking feature would be the evidence ladder's reach, which is exactly what gets reported at the canon trigger.
- **The standalone-protection rule re-opens** only if the user validates a genuine one-inquiry venture (canon's "many turns chaining many traverses" reading would then need his adjudication).

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
Renders, all from today's data.json: inquiries as entries (solid when concluded, pulsing when active), ventures as clusters, 


hmm, so far we had many different ventures but i was the glue between traverses so we dont have official venture record of these things. 

i am thinking maybe we can read past inquiry folders and detect all past manual ventures?  this way when we will visualize we will have data for ventures and second help is that just like we have 
devdocs/traversal_sample.md which is perfect example for understanding ventures, such past digging would allow us getting more samples for ventures 

what do you think?
```

</details>
