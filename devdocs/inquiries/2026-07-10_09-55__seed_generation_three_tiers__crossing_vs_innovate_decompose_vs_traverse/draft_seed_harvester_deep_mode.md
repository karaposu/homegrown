# Draft — an optional framers "deep-mode" for seed_harvester.md §2 (SKETCH, not applied)

**Status:** DRAFT / SKETCH — user-gated. Nothing below is applied to `cognitive_harness/protocols/seed_harvester.md`. This is the COULD from the 09-55 finding, worked out to a concrete proposed edit for review.

**What it is:** the genuine content of the user's "middle tier" (`innovate + decompose`), expressed the way the 09-55 finding requires — as an **optional depth-setting on the existing §2 crossing**, NOT a new tier, phase, or pipeline stage.

**★Read the caveat first (§E) — this is a candidate whose value is UNPROVEN.** The sketch shows what the setting *would* be if adopted; it is not a recommendation to ship. Adopting it is a bet that the framers add enough over a thoroughly-run base crossing to be worth the operator cost — and the 09-55 finding could not prove that bet (no off-diagonal instance exists yet).

---

## A. Where it attaches, and why a *setting* not a *tier*

It attaches to **§2 (the crossing)** — specifically as an optional width-setting on the move-set named in §2 rule 3. It is deliberately **not** a new section, not a new pipeline stage, and not "tier 2."

The reason is the finding's core result: whether the framers are a *distinct tier* or just *the base crossing run more thoroughly* is **unproven** (the source-enrichment and crossing-inspection levers usually co-vary; the case that would prove them independent has never occurred). Shipping it as a distinct "tier 2" would encode operational independence the evidence does not support. Shipping it as an **optional setting** encodes only what is proven: the framers are real move-types the base lacks (`§2 rule 3: "No mechanism sweep"`), and you *can* turn them on.

## B. What the setting changes — the move-set, and nothing else

- **Default (unchanged):** per coverage-table cell, run the three micro-moves — **transfer / extrapolate / combine** (§2's current move list).
- **Deep-mode (the setting, opt-in):** additionally run the innovate **framers** on the cell — **inversion** ("what if this source-claim's *opposite* held — does *that* cross the project?"), **constraint-manipulation** ("add/remove a constraint on the claim — what crosses now?"), **lens-shifting** ("under what different project-condition does this claim become a live match?"). These produce candidate crossings the three micro-moves structurally cannot generate.

Everything else about §2 is unchanged: still **one-to-many**, still **generate-first-gate-after** (§2 rule 2), still fed to the same §3 gate. The setting widens *how many kinds of move* you make per cell; it changes nothing downstream.

## C. The precise carve against §2 rule 3 (the deferred-payoff line stays absolute)

§2 rule 3 currently bans three things together: *"No mechanism sweep, no development, no testing-toward-solutions at harvest time."* The deep-mode relaxes **only the first**, and only under the opt-in:

| §2 rule 3 clause | Under deep-mode |
|---|---|
| "No mechanism sweep" (only the 3 micro-moves) | **Relaxable** — deep-mode adds the framers (a wider move-set) |
| "No development" | **Stays absolute** — never develop a candidate |
| "No testing-toward-solutions" | **Stays absolute** — never run innovate's 5-test / develop cycle on a candidate |

This is the load-bearing distinction: deep-mode imports innovate's **generation apparatus** (the framers, which *make more candidates*), and does **not** import innovate's **development/test cycle** (which *grows a chosen candidate* — that is exactly what §1's "never develop a seed at harvest time" forbids). A deep-mode that ran inversion to *make* a candidate is fine; one that ran innovate's test-loop *on* a candidate would violate §1. Keeping the ban's other two clauses absolute is what keeps deep-mode a *generation-width* setting rather than a smuggled development stage.

## D. The trigger — dimensions named, thresholds deferred

Per the finding's calibration-state guard, the project has no measured history of "source of thinness X / candidate-stakes Y warranted the framers," so the sketch does **not** fabricate thresholds.

- **Default:** **off.** The base crossing runs unless an explicit signal escalates.
- **Trigger dimensions (named, not thresholded):** *source-thinness* (few claims to cross) and/or *candidate-stakes* (the anchors in scope are high-leverage enough to warrant more angles). Either can motivate turning it on.
- **Thresholds:** **deferred** — a maturation item. Set them from telemetry once there is any (see §F), not now.
- **Cost bound:** because the coverage table is already every-major-claim × every-hot-anchor, multiplying every cell by the framers is expensive; the setting should scope the framers to the **hot cells** (or an explicitly-chosen subset), not the whole table, and the operator states which.

## E. ★The honest caveats (do not drop these if the setting ships)

1. **Tier-2-distinctness is unproven.** Deep-mode might turn out to be indistinguishable from "run the base coverage table more thoroughly." The finding leaned that way (operational independence unobserved) but did not settle it. Ship the setting *knowing* this, or don't ship it until §F fires.
2. **The two levers usually co-vary.** In practice you rarely deepen the crossing without also enriching the source, so deep-mode may almost always be used *together* with a source-enrichment pass rather than alone. That is fine — it just means "deep-mode" and the existing depth-directive are companions, not a grid.
3. **Part of "inspection" is already present.** Deep-mode is *only* the framers (and the decompose companion, §G). It is **not** "more anchors" (already the coverage table) and **not** "tell real from mirror" (already the §3 gate). Do not let the setting's description re-import those as if new.
4. **This is a candidate, not a recommendation.** The finding's verdict was "the middle is real but narrow and unproven-as-a-tier." A conservative reading is to *not* ship the setting and instead just note in §2 that the framers are an available depth the base omits — leaving the actual capability for when there's evidence it pays.

## F. Maturation trigger (when to revisit / prove it)

Adopt or promote deep-mode from "sketch" to "shipped setting" **if** either fires:
- **Observed value:** a real dive turns the framers on for a thin/high-stakes source and the framers surface a **gate-passing seed the three micro-moves demonstrably missed** — that is the first evidence the setting adds yield the base cannot.
- **The off-diagonal case** (the finding's own refinement trigger): a dense, claim-rich source whose candidate crossings still need the framers to surface real matches — which would also mature the model from "co-varying levers" toward a real two-by-two and make deep-mode a genuine independent capability.

Until one fires, the honest status is: available-to-sketch, unproven-to-ship.

## G. Companion: the decompose half (already partly designed)

The user's middle tier was "innovate **and decompose**." The decompose half — partition the source into aspects, then cross each aspect — is the **aspect-walk already designed in the 16-41 finding** (`devdocs/inquiries/2026-07-09_16-41__advanced_seed_gen_source_expansion_enrichment/finding.md`, its aspect-kit). It is not new content from this dive. If deep-mode ships, the aspect-walk is its natural companion (partition first, then run the widened move-set per aspect), and the two should be described together — but the *new* thing this sketch proposes is the framers; the decompose half is a re-use of existing 16-41 material.

---

## H. The concrete proposed edit to §2 (least-invasive / additive)

Keep §2's three rules exactly as they are (they remain the default). Add **one** clearly-marked optional-setting note immediately after rule 3, before the "Foreignness gradient" paragraph:

**INSERT after §2 rule 3:**
```markdown
**Optional — deep-mode (a setting on the move-set, off by default; UNPROVEN).** By default the crossing runs the three micro-moves (rule 3). For a thin or high-stakes source, an optional *deep-mode* additionally runs the innovate **framers** on the hot cells — **inversion** (what if the claim's opposite held?), **constraint-manipulation** (add/remove a constraint on the claim), **lens-shifting** (under what project-condition does the claim become a live match?) — move-types the three micro-moves cannot produce. Deep-mode relaxes ONLY rule 3's "no mechanism sweep"; its "no development, no testing-toward-solutions" stay absolute (deep-mode imports innovate's *generation* apparatus, never its develop/test cycle — running the test cycle on a candidate would violate §1's deferred-payoff line). It is a *setting*, not a tier: whether the framers are a distinct tier or merely the base crossing run more thoroughly is unproven, so this encodes only that the framers are an available depth the base omits. Trigger dimensions: source-thinness and/or candidate-stakes; thresholds are deferred (a maturation item — set them from telemetry, not a priori). Companion: the 16-41 aspect-walk (partition the source into aspects, then cross each) is deep-mode's decompose half.
```

**No other change to `seed_harvester.md`** — rule 3 stays verbatim as the default; the foreignness gradient and everything else are untouched.

---

## Apply?

This is a sketch of a candidate. Options:
1. **Ship the setting** — apply the §H insert to `seed_harvester.md` §2.
2. **Ship a weaker note only** — instead of the full setting, add one sentence to §2 noting "the innovate framers are an available depth the base crossing omits," and leave the actual capability for when §F fires (the conservative reading, §E.4).
3. **Hold** — keep this as a sketch; do not touch `seed_harvester.md` until the §F maturation trigger fires.

My read: given the finding's "unproven-as-a-tier" verdict, **option 2 or 3** is the honest default — ship the *fact* that the framers are an omitted depth without shipping a capability whose value isn't yet demonstrated. But it's your call. Tell me which and I'll apply (or leave it staged).
