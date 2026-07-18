---
status: active
model: claude-fable-5
effort: unknown
---
# Finding: hierarchical concept tags in the traverse loop — good in one form, and here is its shape

## Question

The user proposed: *"maybe creating a hierarchical tag system inside the traverse loop so each finding.md or branch.md (maybe this is better?) has some concept tags and they are mentioning parent concept tags as well? do you think this is a good approach? if we have this maybe visualisation can be much better grouped? do you think it is worth it?"* — three asks: is the approach good, which file should carry the tags, and is it worth it for grouping the Venture Atlas (the project's 3D map of the inquiry record). The proposal had to be judged against two of the user's own standing positions from earlier the same day: concept EXTRACTION over old folders is gated (fabrication risk; unsolved cross-folder identity matching), and fresh taxonomy-building was declined as "whole work… I don't want to go through that."

## Finding Summary

- **The instinct is good; the raw form is not; one form survives.** Prospective in-loop tagging is genuinely new territory the old extraction gate never covered — but the project has ALREADY been running an in-loop concept-naming layer for weeks (the route-map indexes' 581 hand-written identities), and it measurably does not converge: essentially zero name reuse across folders, the same rule appearing under two names in one day. Free-vocabulary tags would repeat that, by measurement not doctrine.
- **The exam any tag design must pass (two clauses):** it must add a **lookup-at-write** (a vocabulary the writer actually consults — the existing naming has none) AND a **consumer** (something that reads the tags, creating pressure to converge — the existing identities have zero readers).
- **The surviving form: canon-anchored tags written at CONCLUDE.** Each finding's frontmatter gets `canon_areas:` — 1 to 3 picks from the ~38 canon docs (a controlled vocabulary the user ALREADY governs by canonizing) — plus up to 5 optional free child `tags:` (children never parents). The canon listing is the lookup; the grouping lens is the consumer. Hierarchy comes for free as ONE governed parent level — no maintained tree, which would re-enter exactly the "whole work" the user declined.
- **The carrier: finding.md, not _branch.md.** Probed directly: in 2 of 2 sampled dives, the finding's centerpiece concept ("the second parse"; "the road") appears NOWHERE in that dive's `_branch.md` — core concepts are born mid-dive. A branch-carried tag would tag the question, not the dive. The CONCLUDE-written finding knows what the dive became.
- **★The nursery mechanism (the gate's enrichment):** a free child tag recurring in ≥3 findings is surfaced to the user as a CANONIZATION CANDIDATE. The user's deepest want — his own concepts growing into the structure — is served THROUGH the existing canonization act, so the hierarchy grows bottom-up with zero new governance.
- **Worth it? Yes, honestly sized.** A third of the grouping win needs no tags at all: the already-offered canon-area table (C2 from the generation-layer finding) infers groups from the canon citations 74 of 231 findings already contain — retroactively, zero new writing. The tag layer's real margin: the **68% of findings that cite no canon doc** (inference has nothing to read there), finer grain, explicit labels for every future consumer, and one free calibration signal — for one protocol paragraph and ~a minute per dive, behind three gates the user controls.
- **Killed, with their data:** free hierarchical tags (the measured drift + the folksonomy record); a global identity index to repair the existing naming (an ungoverned growing list = the same drift one level up; revives only if the identities index ever ships); hand-tagging as informal habit (the project's own mortality data: the habit-run routelog died with zero uses in a month — small-start is right, but small means one protocol paragraph, not a manual habit).

## Finding

### 1. What the evidence settled before any design

The traverse loop already writes concept names: every inquiry's route-map index (`_route.md`) records the concepts its routes engage — warm, in-loop, human-language names, 581 of them across 111 files. Probing them settled the argument empirically: the names are **folder-local** (essentially none is reused in another folder), and the same concept takes multiple forms ("the atlas-domain rule" and "the atlas-domain rule (clarified)" within one day; the seed-family's names range from quoted sentences to "seed-β"). The cause is structural: nothing is consulted at naming time, and nothing reads the names afterward. This is the century-old controlled-vocabulary-versus-folksonomy result arriving in the project's own data: free tagging drifts; vocabularies converge when an **authority list is consulted at write time** and a **consumer** creates pressure to match. Any tag system is therefore examined on those two clauses. (The old extraction gate splits cleanly here: its fabrication ground does NOT transfer to prospective tags — the concluding dive authors its own labels warmly; its identity-resolution ground DOES transfer — it is this drift, live.)

### 2. The surviving design — canon-anchored tags at CONCLUDE

**The write step (a one-paragraph addition to the CONCLUDE protocol, user-gated):**

> After compiling the finding body: list `docs/canon/*.md`; choose the 1–3 canon docs this finding's content ACTUALLY ENGAGES (one glance at the listing; skip when unclear; never research; if no canon doc honestly fits, write none). Record them as `canon_areas:` in the finding's frontmatter. Optionally add ≤5 free child `tags:` (lowercase-kebab) for concepts the finding centers that canon doesn't yet name — children, never parents. Tags locate; they never grade.

- **The lookup** is the canon listing — ~38 names today, still one glance at a projected 60. The vocabulary's governance already exists: it grows only when the user canonizes.
- **The consumer** is the grouping lens (below) — satisfying the exam's second clause.
- **The hierarchy** is one fixed parent level: child tag → canon area. No maintained tree, ever; "hierarchical" turned out to be incidental to the user's want — grouping consumes exactly one parent level.
- **★The nursery:** a mechanical watch over the free children — any child recurring in ≥3 findings is surfaced as a canonization candidate. If the user canonizes it, it becomes a parent through the act he already performs. Bottom-up growth, zero new governance.
- **Data path:** the two frontmatter fields ride the already-offered finding-section parse (the generation-layer finding's centerpiece offer) — no new parse infrastructure; until that parse ships, tags sit harmlessly in frontmatter.
- **The lens (its own gate):** groups by canon area as **OVERLAYS on the Time-Road** — hulls/tints plus a grouped flyout — never a repositioning. Settled on three grounds: a node with two parents belongs honestly to two hulls (impossible in a repositioned clustering); position = time is the map's settled primary channel (the earlier layout lesson: a primary dimension keeps the primary channel); the chains lens already owns regroup-style viewing. Phase-honest first condition: render only when ≥15 folders carry tags (~2–4 weeks at recent pace — no empty-lens theater). **Provenance rendered:** authored membership (frontmatter, shown ✎) vs inferred membership (a canon citation found by the C2 table, shown ≈) — old folders join by inference, new by authorship, and the overlap between the two is a free calibration signal for how good the inference actually is.
- **Retroactivity:** start-empty going forward; the past is served by C2 on the same axis. No backfill — a batch LLM pass re-reading 230 folders is the extraction gate's exact object. (If a marked, attributed retro-identification is ever gated open, it follows the herbarium rule: appended with attribution, never silently written.)

### 3. What was killed, and by what

- **Free hierarchical tags (the raw form):** killed by the project's own measurement (the drift above) seconded by the domain's history (folksonomies fork into synonym/plural/compound variants needing merge infrastructure after the fact), and its parent TREE re-enters the angle-choice + merge governance the user declined. What was right in it survives as the children.
- **Repairing the existing naming instead (a global identity index so route-maps reuse names):** killed as proposed — real new infrastructure, and an ungoverned growing list is a folksonomy one level up. Named revival: if the identities index (the appetite-gated browse offer) ever ships, it doubles as a lookup surface, and reuse re-opens then.
- **Hand-tagging as informal habit ("just start adding a tags: line tomorrow"):** run fairly — zero spec cost, reversible, discovery-by-use — and killed on the project's own mortality data: the writer-scale ranks habit-run records last, and the one habit-run record attempted (the routelog) recorded zero uses in a month including its own migration. The true half kept: start small — and the one-paragraph protocol step IS the small start.

### 4. The three asks, answered directly

1. **"Is this a good approach?"** Yes — in the canon-anchored form. The instinct (the loop should write concept location into the record at the moment it knows it) is right and is genuinely new territory; the free-vocabulary form the words suggested fails on measurements the project already owns.
2. **"finding.md or branch.md?"** finding.md, frontmatter, written at CONCLUDE. Concepts are born mid-dive (2/2 probe); the branch would tag the question. (The other carriers were checked: `_state.md` is process-state; the route-map is the onward field; the finding is the semantic artifact — and its frontmatter already sits behind an offered parse.)
3. **"Worth it for grouping?"** Yes, at its honest size: C2 delivers a third of the win with zero new writing regardless; the tag layer's margin is the uncited 68% going forward, grain, explicitness, and the calibration signal — for one paragraph, a minute per dive, and three gates.

## Inherited Commitments Re-test

- **Commitment:** aggregation-not-taxonomy (the user's own bound) + the C2/C1 offers.
  **Source:** `devdocs/inquiries/2026-07-12_21-48__atlas_content_generation_for_the_five_operations/finding.md`
  **Re-test status:** RE-TESTED — commitment confirmed; one relation upgraded.
  **Evidence:** the surviving design makes no new angle-choice (the angle IS the project's canon structure) and does no batch work — the bound kills the free tree and does not touch canon-anchored one-level. C2 is upgraded from a standalone rollup offer to the tag layer's retroactive same-axis PARTNER (one lens, two provenances); C1 untouched, and its shipping becomes the repair-idea's revival condition.
- **Commitment:** the extraction gate and its grounds.
  **Source:** `devdocs/inquiries/2026-07-11_10-46__visualizer_node_choice__concepts_vs_inquiry_folders/finding.md`
  **Re-test status:** RE-TESTED — commitment confirmed with sharpened scope.
  **Evidence:** the grounds were applied as a split, not a blanket: fabrication does not transfer to warm prospective authorship; identity-resolution transfers and was found ACTIVE (measured drift) — so the gate's core concern now has a demonstrated prospective instance, answered by anchoring rather than by prohibition.
- **Commitment:** the writer-scale (runner-mechanical > protocol-LLM > habit-run) + the ordering-problem (cold framing lacks context).
  **Source:** the standing memory-mirrored findings.
  **Re-test status:** RE-TESTED — commitment confirmed by application.
  **Evidence:** the scale adjudicated twice (hand-tagging killed at the dying tier on the routelog's mortality; the CONCLUDE-written field placed at the surviving middle), and the ordering-problem's cold-blindness predicted exactly what the carrier probe found.

## Next Actions

### MUST
- **What:** place the C2-partner consumer mark on the generation-layer inquiry's route-map (its canon-area row) and mirror this landing into persistent memory.
  **Who:** this session (family bookkeeping + memory duty). **Gate:** at this inquiry's close (now). **Why:** the upgraded relation and the adjudication must outlive the session.

### COULD
- **What:** the CONCLUDE tag step — the one-paragraph spec edit (§2's draft), with the invisible-supports check run at edit time.
  **Who:** the user gates (the spec is his); this assistant edits. **Gate:** the user says go. **Why:** the whole yield concentrates here; nothing downstream exists without the write.
- **What:** annotate the offered finding-section parse so `canonAreas[]`/`tags[]` join it when built.
  **Who:** this assistant, as a dependency note on the standing offer. **Gate:** rides that offer's own gate. **Why:** zero-cost data path for the tags.
- **What:** the canon-area overlay lens (hulls/tints + grouped flyout; provenance ✎/≈).
  **Who:** the user's go; then this assistant. **Gate:** ≥15 tagged folders (its phase-honest first condition). **Why:** the stated payoff — the map grouped by meaning without surrendering time.
  **Depends-on:** COULD "the CONCLUDE tag step". This COULD is GATED — the lens has nothing to render until tags accrue (C2's inferred half can render earlier under C2's own gate).
- **What:** the nursery watch (≥3-recurrence report surfacing canonization candidates).
  **Who:** the user's go; then this assistant (shape: panel row vs CONCLUDE note — decide at first recurrence). **Gate:** tags accruing. **Why:** the bottom-up growth path — the user's concepts becoming parents through his own act.

### DEFERRED
- **What:** routelister-identity reuse (the repair idea). **Gate:** the identities index ships through its appetite gate (its browse surface doubles as the lookup). **Why (if revived):** the original naming layer converges too.
- **What:** any retro-tagging of the 230 existing folders. **Gate:** the standing batch-extraction gate, unchanged; if ever opened, marked-and-attributed per the herbarium rule. **Why (if revived):** uniform coverage — at the known fabrication risk the gate exists for.

## Reasoning

The adjudication standard itself was prosecuted (could the lookup-at-write framing be wrong — maybe concepts simply don't recur across dives?) and held: the drift specimens show the same concept under different names, which is non-convergence, not locality. The surviving form was prosecuted from BOTH sides: as the user's advocate ("canon-anchoring is a bait-and-switch — the free children ARE what he asked for") — which yielded the nursery mechanism rather than a kill (the children's second-class status is evidence-driven, and they have a growth path into parenthood through canonization); and as the skeptic ("not worth a permanent step given C2") — which yielded the cost-bounded wording and the honest order note (C2 can ship first). Every kill carries its data: the drift measurement (free tags), the routelog's mortality (hand-tagging), the one-level-up drift argument (the repair index). Every kill carries a seed or revival. The worth ledger was priced against the zero-writing baseline stated FIRST, gained one cost row under prosecution (tag-quality variance — mitigated by locate-never-grade plus frontmatter's visibility), and had one value row resized down (the calibration signal: real, minor).

## Open Questions

### Monitoring
- Once tags accrue: does the concluding runner's 1–3-area pick match what a reader would choose? (Spot-checkable in passing — frontmatter is visible in every detail view.)
- Does the first nursery candidate actually recur within ~2 months? (If children never recur, the nursery is dormant, not broken.)

### Blocked
- The overlay lens waits on ≥15 tagged folders; the tag fields' map arrival waits on the finding-section parse shipping.

### Refinement Triggers
- **The count policy (1–3) re-opens** if dives regularly and honestly engage 4+ canon areas (the specific blocking feature: the cap).
- **The children cap (≤5) re-opens** on the same evidence-shape in the other direction (children routinely truncated).
- **The lens threshold (≥15) is a knob** — it re-opens on felt evidence at first render, not before.
- **The kill of free-form tagging re-opens** only if a lookup-and-consumer mechanism arrives that isn't canon-anchoring (the named revival: the identities index shipping).

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
maybe creating a hierarchical tag system inside traverse loop so each finding.md or branch.md (maybe this is better?) has some concept tags and they are mentioning parent concept tags as well? do you think this is a good appraoch? 

if we have this maybe visualisation can be much better grouped? do you think it is worth it ?
```

</details>
