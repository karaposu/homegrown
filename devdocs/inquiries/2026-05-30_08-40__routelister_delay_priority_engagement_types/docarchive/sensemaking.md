## User Input

`devdocs/inquiries/2026-05-30_08-40__routelister_delay_priority_engagement_types/_branch.md` (prior output: surfacing.md; workspace — the engagement-type axis + the existing attributive Priority/Confidence + the perception/selection boundary [08-14] + the dropped Blocked-By/excluded-dependency + the 3 proposals + the "many routes" kernel). Should routelister's engagement-type axis gain do-nothing / low-priority-delay / high-priority-delay — or is that bloat?

---

# Structural Sensemaking — Should Routelister Gain Delay/Priority/Do-Nothing Engagement-Types?

## SV1 — Baseline Understanding

Initial read: the three proposals are *not* engagement-types — they're a different category. An engagement-type is a verb for *how to engage a concept* (deepen, refine, diagnose…); do-nothing, low-priority-delay, and high-priority-delay are about *whether / when / how-much-to-prioritize* a route — that's disposition/timing/priority, which is *selection*, not engagement. routelister already has an attributive Priority/Confidence field, and the project's settled boundary is "Navigation sees; it does not choose" — selection belongs to the meta-loop. So the likely verdict is: don't add them as engagement-types (bloat + category error + re-coupling the perception layer to selection, which re-imports the very defect the routelister redesign removed). But the user's underlying need — triaging when there are many routes, some unimportant — is real, so the work is to confirm the category mismatch *and* show exactly where that real need is already served, rather than flatly rejecting it.

---

## Phase 1 — Cognitive Anchor Extraction

**Constraints:**
- C1 — An **engagement-type is a verb for *how to engage a concept*** (walkthrough §3.2; the 9 verbs are all active operations *on* a concept). Any candidate engagement-type must answer "how do I engage this concept?" — not "should I?", "when?", or "how much does it matter?"
- C2 — routelister is **"Not a selector"** and already **"can tag each route with an attributive Priority/Confidence, which is description, not choice"** (walkthrough §4, §6.1). Priority already exists as a perception-side attribute.
- C3 — routelister is **"Not an inter-concept dependency-graph builder"** (walkthrough §4); it never records "concept A depends on concept B."
- C4 — The settled boundary: **"Navigation sees; it does not choose"** — selection / priority-decisions / scheduling = the meta-loop (08-14 finding). Re-coupling routelister to selection re-imports the `01-11` loop-relativity defect.

**Key Insights:**
- K1 — **Category mismatch.** The three proposals don't describe *how to engage* a concept; they describe a *disposition toward a route* (act / defer-and-watch / neglect / drop). Disposition ≠ engagement. Putting them on the engagement-type axis is a category error: the axis would then mean two incompatible things ("how to engage" *and* "whether/when to engage").
- K2 — **"do-nothing" is the negation of route-hood, not a route-type.** A concept *is a route* only if engaging it advances or sharpens the goal (walkthrough §2). A concept where engaging does nothing toward the goal is, by definition, **not a route** — it's an *Excluded candidate* (walkthrough §6.1 already has an "Excluded section: notable candidate-concepts considered and rejected, with reasons"). So "do-nothing" is already handled — as exclusion, not as a route carrying a do-nothing type. (And for a concept that *is* a route but the human chooses not to act on it now, "do-nothing" = the meta-loop simply not selecting it — already implicit in enumerate-not-select.)
- K3 — **"low-priority" is already the attributive Priority field.** "This route is not important / can be neglected" = Priority = LOW. routelister already perceives and tags this (C2). Adding a "low-priority-delay" engagement-type would *duplicate* an existing field — pure bloat.
- K4 — **"high-priority-delay until peripherals are more defined" decomposes into three parts, none of which is an engagement-type:** (a) "high-priority" = Priority = HIGH (already the attributive field); (b) "delay until peripherals are more defined" = a *readiness/dependency* judgment ("can't engage X until concept Y is defined") = the **excluded inter-concept dependency graph** (C3) + the **dropped Blocked-By state** (08-14); (c) "what our next moves should keep in mind" = literally a statement about *selection* (next moves = the meta-loop's choices) = the meta-loop's job (C4).
- K5 — **The high-vs-low distinction the user draws is itself defined in selection terms.** The user separates high-delay from low-delay by "high is what our next moves should keep in mind; low doesn't matter and can be neglected." Both halves of that distinction are about *what the selector does* — which routes to keep on the radar vs. drop. That is the meta-loop's triage, not routelister's perception.
- K6 — **The real need (triage among many routes) is already fully served** — without any new type: routelister perceives **Priority/Confidence** (salience + how-well-formed), surfaces **high-priority count in the Map Header** (walkthrough §6.1), and routes non-routes to the **Excluded section**; the meta-loop then **triages** (defer / neglect / drop / keep-in-mind) using that perception. The triage *decision* is the chooser's; the triage *input* (salience) is already routelister's.
- K7 — **This reinforces the prior finding's keystone, it doesn't contradict it.** 08-14 said the meta-loop composes the next-move menu by reading routelister's perception. The attributive Priority/Confidence is *exactly* the perception-side signal the meta-loop's triage reads. So "where do priority/delay/do-nothing live?" has the same answer as the loop-harmony gap: perception (Priority tag) → routelister; triage-decision → meta-loop.

**Structural Points:**
- S1 — Three layers are in play: **routelister-perception** (enumerate + attributively tag Priority/Confidence + Exclude non-routes); **the meta-loop-selection** (triage: defer/neglect/drop/keep-in-mind); **the excluded inter-concept dependency** (readiness "until Y defined" — not routelister's at all).
- S2 — The three proposals map onto these layers, *not* onto the engagement-type axis: do-nothing → exclusion/non-selection; low-priority → Priority tag (perception) + neglect-decision (meta-loop); high-priority-delay → Priority tag (perception) + dependency (excluded) + defer-and-watch decision (meta-loop).

**Foundational Principles:**
- P1 — A discipline's axis must carry one coherent kind of value; mixing "how to engage" with "whether/when/priority" dilutes the axis and the discipline. [walkthrough §3.2 small-fixed-vocabulary]
- P2 — Perception annotates; the loop-aware layer decides. Priority is description (perception); defer/neglect/drop is choice (selection). ["Navigation sees, it does not choose"]

**Meaning-Nodes:**
- M1 — *engagement-type = how-to-engage verb (the category test)*; M2 — *disposition/priority/timing ≠ engagement*; M3 — *already-covered (Priority + Excluded + Map-Header)*; M4 — *owning-layer = meta-loop for the decisions, the excluded-dependency for "until defined"*; M5 — *bloat + re-coupling verdict*.

### SV2 — Anchor-Informed Understanding

The three proposals are not engagement-types — they are dispositions/priorities/timing, a different category from "how to engage a concept." Each decomposes into parts that are *already covered* by routelister's existing perception (the attributive Priority/Confidence field + the Excluded section + the Map Header's high-priority count) or that belong to *other layers* (the meta-loop's triage decisions; the explicitly-excluded inter-concept dependency graph). The genuine need behind the proposal — triaging when routes are many — is real and already met: routelister perceives salience, the meta-loop decides. Adding the three as engagement-types would duplicate existing fields, miscategorize the axis, and re-couple perception to selection.

*Meta-Inspection (H4 concept names): "engagement-type," "Priority," "disposition" — are these real structural distinctions? Yes: engagement-type is verified as how-to-engage (9 active verbs); Priority is verified as an existing attributive field (§6.1); disposition is the act/defer/drop decision = selection. The distinction is structural, not nominal. (H5 motivating examples): the user's "many routes, some unimportant" example — tested below in Phase 3 against "is this the whole need or a case of a wider one?")*

---

## Phase 2 — Perspective Checking

**Technical / Logical:** the engagement-type axis is partitioned by *kind* (teleological/epistemic) and each value is a verb that names an operation on a concept. "do-nothing" names the *absence* of an operation; "low/high-priority-delay" name *scheduling/weighting* of an operation. Neither is an operation-on-a-concept, so neither is type-compatible with the axis. New anchor → **K8: the axis is closed under "operations on a concept"; the proposals are not operations on a concept, so they're not axis-members — they'd be a foreign category bolted onto the axis.**

**Human / User:** the user's real pain is *overload* ("many routes, some not important"). That pain is genuine and must be answered, not dismissed. The answer: routelister already tags Priority (so unimportant routes are visibly LOW) and headlines high-priority count; the human/meta-loop then ignores the LOW ones. The user gets triage *without* new types. New anchor → **K9: the need is valid; the solution is "use the Priority tag + Excluded section + Map Header," not "add engagement-types." Rejecting the *types* is not rejecting the *need*.**

**Strategic / Long-term:** routelister's endgoal is a clean perception layer feeding a meta-loop that steers (08-14). If routelister starts encoding defer/neglect/keep-in-mind, it becomes a soft selector — exactly the loop-relativity that was just removed. Long-term, the clean perception/selection split is what lets the meta-loop scale; muddying it for short-term triage convenience costs the architecture.

**Risk / Failure (the bloat + re-coupling risk):** two concrete failures if added — (1) **axis dilution**: "engagement-type" stops meaning "how to engage" and starts meaning "how to engage OR whether/when" — every downstream consumer must now disambiguate; (2) **re-coupling**: "delay until peripherals defined" forces routelister to reason about inter-concept readiness (the excluded dependency graph) and about what "next moves should keep in mind" (selection) — re-importing the `01-11` defect. Both are the user's feared bloat, made precise.

**Resource / Feasibility:** the no-add path costs nothing (the fields exist). The add path costs a permanent axis-meaning change + spec complexity + the re-coupling debt. Feasibility strongly favors no-add.

**Definitional / Internal Consistency:** does "don't add" contradict any settled routelister commitment? Check the strongest: the walkthrough §4 *itself* says routelister "can tag each route with an attributive Priority/Confidence" — so the design *already anticipated* priority as an attribute, deliberately kept it *attributive (description) not selective (choice)*. Adding priority/delay as engagement-types would contradict that settled "attributive-not-selective" stance. So "don't add" is *consistent* with the design; "add" would be the contradiction. ✓

**Definitional / Frame-exit Completeness (light — gating borderline):** the inquiry inherits multi-value terms ("engagement-type," "Priority") but doesn't build its own multi-row committed structure, so the full perspective doesn't strongly gate. The relevant frame-exit move *does* apply, though: **Existence Enumeration of what "priority/disposition" refers to project-wide** — (i) routelister's attributive Priority field (perception); (ii) the meta-loop's selection/triage (decision); (iii) the autonomy ladder's auto-vs-flag disposition (parked); (iv) the excluded inter-concept dependency (readiness). The proposals' content is distributed across (i)–(iv); none of (i)–(iv) is the engagement-type axis. Role Assessment: each referent is load-bearing in its own layer, but *none belongs in routelister's engagement-type axis*. Verdict Rigor applied to the "don't add" boundary → tested in Phase 3 Ambiguity 5. New anchor → **K10: "priority/disposition" is a project-wide multi-layer concept; the proposals scatter across perception/selection/dependency/autonomy — confirming they don't belong to a single new routelister type.**

**Phase / Calibration-State:** does the verdict depend on a project phase? The meta-loop's triage layer is early/parked (the autonomy ladder is half-baked, per 08-14). So *today* there's no mature meta-loop to receive the triage. Could that justify temporarily putting triage in routelister? No — the early-stage default is the human triaging from routelister's Priority tag (the Map Header already supports this). Putting it in routelister "because the meta-loop isn't ready" would bake a temporary gap into the discipline's permanent identity. New anchor → **K11: the meta-loop's immaturity is not a reason to relocate triage into routelister; the early-stage default is human-triage-from-Priority, and the permanent home stays the meta-loop.**

**Self-Reference (failure mode #6 / H8):** I'm evaluating routelister (my own chain's design) and *rejecting a user's proposed addition* — risk of **Status Quo Bias** (protecting the settled 9-verb vocabulary) dressed as analysis. Guard: the rejection rests on *external/structural* grounds — the category definition of "engagement-type" (a verb on a concept), the *existing* Priority field (§4/§6.1, predating this inquiry), the perception/selection boundary (08-14), and the explicit exclusion of the dependency graph (§4) — not on "the spec already says nine." And I *steelman the need*: the triage requirement is real, and I trace exactly how it's already served + flag the one genuine adjacent improvement (documenting the Priority→meta-loop-triage handoff). So it's not a flat protective rejection. Check passed.

### SV3 — Multi-Perspective Understanding

The proposals fail the category test (the engagement-type axis is closed under "operations on a concept"; they're disposition/priority/timing) and, decomposed, scatter across four project-wide layers — routelister's existing Priority attribution (perception), the meta-loop's triage (selection), the autonomy ladder (parked disposition), and the excluded inter-concept dependency (readiness) — none of which is the engagement-type axis. The real need (triage among many routes) is valid and already served by the Priority/Confidence tag + the Excluded section + the Map Header's high-priority count, with the meta-loop deciding. Adding the three would dilute the axis and re-couple perception to selection (the feared bloat). The meta-loop's current immaturity doesn't justify relocating triage into routelister.

---

## Phase 3 — Ambiguity Collapse

### Ambiguity 1 — Are the three engagement-types, or a different category? (OT1)

**Strongest counter-interpretation:** "An engagement-type is just 'what the route tells you to do,' and 'do nothing / defer / treat-as-low' ARE things to do with a route — so they fit the axis."

**Why the counter fails (structural grounds):** the axis is not "what to do *with* a route" — it's "how to *engage the concept*" (walkthrough §3.2: the verb is nested under *kind* = teleological/epistemic = *advance-the-goal* / *sharpen-understanding*; every one of the nine names an operation that *acts on the concept's content*). "do nothing / defer / low" name no operation on the concept's content — they name a *stance toward the route as a unit*. Structurally, you cannot place them under teleological-or-epistemic *kind*: deferring a route neither advances the goal nor sharpens understanding — it's orthogonal to *kind*. A value that can't be partitioned by the axis's own partition (kind) is not a member of the axis. **Confidence:** HIGH. **Resolution:** the three are a *different category* (disposition/priority/timing), not engagement-types.

### Ambiguity 2 — Is "low-priority" a new type, or already the Priority field? (OT2)

**Counter-interpretation:** "A buried attribute isn't enough; the user wants low-importance to be *first-class and visible*, which a type would make it."

**Why the counter fails (structural grounds):** routelister's output *already* surfaces priority first-class — the **Map Header carries the high-priority count** (walkthrough §6.1), and every route record carries **Priority** in its Attribution group. The visibility need is a *presentation* property of an existing field, already met; it is not evidence for a new *type*. Making it a type would *duplicate* the Priority field while miscategorizing it (Ambiguity 1). **Confidence:** HIGH. **Resolution:** "low-priority" is already the attributive Priority field (Priority = LOW); no new type. The "delay/neglect" half is a meta-loop decision.

### Ambiguity 3 — Is "do-nothing" a route-type, or the negation of route-hood / a non-selection? (OT2)

**Counter-interpretation:** "Sometimes you want to *record* 'this concept exists but don't engage it' — that's information a plain exclusion loses."

**Why the counter fails (structural grounds):** routelister's **Excluded section already records exactly this** — "notable candidate-concepts considered and rejected, *with reasons* — never silently dropped" (walkthrough §6.1). A concept where engaging does nothing toward the goal is *not a route* (route-hood requires advancing or sharpening the goal, §2); it belongs in Excluded *with its reason*, which preserves the information the counter worries about. And for a concept that *is* a route but isn't worth acting on now, "do-nothing" is the meta-loop *not selecting* it (already implicit in enumerate-not-select). Either way, no engagement-type is needed. **Confidence:** HIGH. **Resolution:** "do-nothing" = Excluded-non-route (with reason) OR meta-loop non-selection; not a type.

### Ambiguity 4 — Is "high-priority-delay until peripherals defined" a perception routelister can make, or excluded-dependency + selection? (OT2)

**Strongest counter-interpretation:** "routelister perceives the territory, so it can perceive 'this route is important but not yet ripe' — that's perception, so it belongs to routelister."

**Why the counter fails (structural grounds):** decompose "not yet ripe / until peripherals are more defined." Ripeness here is *relative to other concepts* ("can't engage X until Y is defined") — that is an **inter-concept dependency**, which routelister explicitly does NOT build (walkthrough §4: "Not an inter-concept dependency-graph builder") and which 08-14 classified as the dropped Blocked-By state. The only *within-concept* maturity routelister can perceive is already carried by **Confidence** (how well-formed the route is) and the **depth-signal** (drilled / unresolved divergence) — so the legitimate perception kernel is *already covered* by existing fields. What's left — "*delay* it, and *keep it in mind* for next moves" — is a *scheduling/selection* decision (the meta-loop). So the proposal splits cleanly: importance → Priority (covered); within-concept maturity → Confidence/depth-signal (covered); cross-concept readiness → excluded dependency (not routelister's); defer-and-watch → meta-loop. None is a new engagement-type. **Confidence:** HIGH. **Resolution:** "high-priority-delay" is Priority + Confidence/depth-signal (already covered) + excluded-dependency + meta-loop-decision; not a type.

### Ambiguity 5 — Should there be a new *disposition* axis (not an engagement-type, but a 4th route-type axis)? (OT3 — the steelman of "add it somewhere")

**Strongest counter-interpretation:** "Fine, they're not engagement-types — but make them a 4th axis: each route gets a *disposition* (act / defer-watch / neglect / drop). That keeps the engagement axis clean AND captures the user's triage."

**Why the counter fails (structural grounds):** a disposition is a *recommendation about what to do with the route* — i.e., a (soft) *selection*. routelister is **"Not a selector"** (walkthrough §4) and the architecture rule is **"Navigation sees, it does not choose"** (08-14). A disposition axis would make routelister emit choices, re-coupling perception to selection — the exact `01-11` defect the redesign removed. The *input* to disposition (perceived salience) is legitimately routelister's and already exists (Priority/Confidence); the disposition *itself* is the meta-loop's. So the steelman relocates, it doesn't rescue: the right home for act/defer/neglect/drop is the meta-loop's triage, fed by routelister's Priority. **Confidence:** HIGH. **Resolution:** no new disposition axis in routelister; disposition is the meta-loop's, fed by routelister's existing Priority/Confidence.

### Ambiguity 6 — Specific-vs-pattern: is "many routes, some unimportant" the whole need, or a case of a wider one? (load-bearing concept test / H5)

**Counter-interpretation:** "The user's one scenario (overload) might be a narrow case; maybe there's a wider need the verdict misses."

**Resolution:** the wider pattern is "routelister produces more routes than a human can act on, and needs *triage*." That wider need is fully addressed by the same answer: perception tags salience (Priority/Confidence), the meta-loop triages. No wider variant of the need requires an engagement-type — every triage need is a selection need. **Confidence:** HIGH. **Resolution:** the verdict covers the wider pattern, not just the one example.

### SV4 — Disambiguated Understanding

All six ambiguities resolve HIGH. The three proposals are a different category from engagement-types (they can't be partitioned by *kind*, the axis's own partition). "low-priority" is already the attributive Priority field (and already surfaced in the Map Header); "do-nothing" is the Excluded-non-route or a meta-loop non-selection; "high-priority-delay" splits into Priority + Confidence/depth-signal (covered) + excluded inter-concept dependency + meta-loop defer-decision. A 4th "disposition" axis is also rejected — disposition is selection, the meta-loop's job, fed by routelister's existing Priority. The real triage need is valid and already served. None of the three should be added to routelister.

---

## Phase 4 — Degrees-of-Freedom Reduction

**Fixed:**
- Engagement-type = a verb for *how to engage a concept*, partitioned by *kind*; the three proposals fail this (can't be partitioned by kind) → not engagement-types.
- "low-priority" = the existing attributive Priority field (Priority=LOW), already surfaced in the Map Header.
- "do-nothing" = Excluded-non-route (with reason) or meta-loop non-selection.
- "high-priority-delay" = Priority + Confidence/depth-signal (covered) + excluded inter-concept dependency + meta-loop defer-decision.
- Disposition (act/defer/neglect/drop) = the meta-loop's triage, fed by routelister's Priority/Confidence — NOT a routelister axis.
- The triage need is real and already served (Priority/Confidence + Excluded + Map Header → meta-loop triage).

**Eliminated:**
- "Add the three as engagement-types" — KILLED (category error + duplication + axis dilution + re-coupling).
- "Add a 4th disposition axis to routelister" — KILLED (disposition = selection = meta-loop).
- "Relocate triage into routelister because the meta-loop is immature" — KILLED (early-stage default is human-triage-from-Priority; don't bake a temporary gap into the identity).

**Remaining viable (the constructive residue, for Innovation):**
- Document the **Priority/Confidence → meta-loop-triage handoff** (routelister perceives salience; the meta-loop decides defer/neglect/drop/keep-in-mind) — this is the perception-side input to 08-14's menu-composer; a clarification of *existing* fields, not a new type.
- (Borderline) consider whether the **Map Header** should also surface a low-priority/excluded count for triage visibility — a presentation tweak to an existing field, possibly itself unnecessary.

### SV5 — Constrained Understanding

The solution space collapses to: **don't add any of the three to routelister** (not as engagement-types — category error/duplication/dilution/re-coupling; not as a disposition axis — that's selection). The three decompose into already-covered perception (Priority/Confidence/depth-signal + the Excluded section + the Map Header) and other-layer concerns (the meta-loop's triage decisions; the excluded inter-concept dependency). The only constructive residue is documentation: make explicit that routelister's attributive Priority/Confidence is the *perception-side input* the meta-loop's triage reads — reinforcing, not extending, the discipline.

---

## Phase 5 — Conceptual Stabilization

*Accommodation check: the perspectives converged (category test + already-covered + owning-layer + bloat all point one way); no perspective forced repeated model revision. The one steelman that could have destabilized — "make it a 4th axis" — resolved cleanly to "that's selection." Stable; no model-misfit.*

### SV6 — Stabilized Model — No: These Three Are Not Engagement-Types, and routelister Should Not Gain Them

**The verdict is NO — and the user's bloat instinct is correct — but the underlying need is real and already met.** Here is the careful reasoning.

**Why they're not engagement-types (the category test).** An engagement-type is a *verb for how to engage a concept*, and the nine are partitioned by *kind* — each either advances the goal (teleological) or sharpens understanding (epistemic). The three proposals can't be placed under *kind*: deferring, neglecting, or doing-nothing with a route neither advances the goal nor sharpens understanding — they're *orthogonal* to the axis's own partition. They describe a **disposition toward a route** (act / defer-and-watch / neglect / drop), which is a different category from *how to engage the concept inside the route*. Bolting them onto the engagement-type axis would make "engagement-type" mean two incompatible things at once.

**What each one actually is (the per-item decomposition):**

- **"do-nothing / don't-engage"** — not a route-type. If engaging a concept does *nothing* toward the goal, it isn't a route at all (route-hood requires advancing or sharpening the goal) — it belongs in routelister's existing **Excluded section** (which records rejected candidates *with reasons*, so no information is lost). If the concept *is* a valid route but not worth acting on now, "do-nothing" is just the meta-loop *not selecting* it — already implicit in routelister's enumerate-don't-select stance.

- **"low-priority delay"** — already covered. "Not important / can be neglected" is **Priority = LOW**, and routelister already tags every route with an attributive **Priority/Confidence** (described as "description, not choice"). It even surfaces the high-priority count in the route-map's **Map Header**. The "delay/neglect" half is a *decision* (the meta-loop's). So the only new thing a "low-priority-delay" type would add is a *duplicate* of the Priority field — pure bloat.

- **"high-priority delay (until peripherals are more defined)"** — splits into four parts, none a new type: the **importance** is Priority = HIGH (already a field); the **within-concept maturity** ("how ripe is this route itself") is already carried by **Confidence** and the **depth-signal**; the **cross-concept readiness** ("can't engage X until Y is defined") is an **inter-concept dependency**, which routelister *explicitly does not build* (and which the prior loop-harmony finding classified as the dropped Blocked-By state); and the **"defer it and keep it in mind for next moves"** is a *scheduling/selection* decision — the meta-loop's, by the founding rule "Navigation sees; it does not choose."

**Why not even a new 4th "disposition" axis (the steelman).** One could say "fine, not engagement-types — make them a separate *disposition* axis (act/defer/neglect/drop)." But a disposition is a recommendation about *what to do* with a route — a soft *selection*. routelister is "not a selector," and a disposition axis would re-couple the perception layer to selection, re-importing the exact loop-relativity defect the routelister redesign removed. The *input* to disposition — perceived salience — is legitimately routelister's and *already exists* as Priority/Confidence; the disposition *itself* belongs to the meta-loop.

**The real need is valid — and already served.** The user's motivating case ("many routes, some not important") is a genuine *triage* need. It is already met without any new type: routelister **perceives** each route's salience (Priority) and how-well-formed it is (Confidence/depth-signal), routes non-routes to **Excluded**, and headlines the **high-priority count**; the **meta-loop then triages** (defer the high-but-not-ripe, neglect the low, drop the irrelevant, keep the important ones in mind for next moves). This is the same perception→selection handoff the prior finding established: the attributive Priority/Confidence is precisely the perception-side signal the meta-loop's menu-composer reads. So "where do priority/delay/do-nothing live?" has the same answer as the loop-harmony gaps — **perception annotates (routelister); the loop-aware layer decides (meta-loop)** — and the user's own hint ("maybe these belong to the meta-loop, which makes the decision") is exactly right.

**The one constructive residue.** Nothing should be *added* to routelister's types. The only worthwhile follow-up is *documentation*: make explicit (in the routelister spec's loop-role section, the prior finding's Gap C) that the attributive Priority/Confidence is the perception-side input the meta-loop's triage consumes — a clarification of existing fields, not an extension.

**How SV6 differs from SV1:** SV1 suspected "not engagement-types; probably bloat." SV6 *proves* the category mismatch (they can't be partitioned by *kind*), decomposes each proposal into already-covered fields (Priority/Confidence/depth-signal + Excluded + Map Header) vs other-layer concerns (meta-loop triage; excluded dependency), kills even the steelman 4th-axis (disposition = selection), shows the real triage need is already served by the perception→meta-loop handoff, and identifies the single constructive residue (document the handoff) — all with the explicit guard that this is not Status-Quo protection (the need is affirmed and located, not dismissed).

---

## Saturation / Telemetry

- **Perspective saturation:** saturating — the category test + already-covered + owning-layer + bloat-risk all converged; the steelman (4th axis) was the only destabilizer and it resolved cleanly.
- **Ambiguity resolution ratio:** 6/6 HIGH; 0 OPEN.
- **SV delta:** large (SV1 "not types, probably bloat" → SV6 the proven category mismatch + per-item decomposition + steelman-kill + the already-served triage handoff + the documentation residue).
- **Anchor diversity:** multi-type (Constraints C1–C4, Insights K1–K11, Structural S1–S2, Principles P1–P2, Meaning-nodes M1–M5) from multiple perspectives.
- **Failure modes checked:** **Status Quo Bias — guarded** (rejection rests on the category definition + the *pre-existing* Priority field + the perception/selection boundary, not on "the spec says nine"; and the need is affirmed + located, not dismissed); Clean Resolution Trap (the "already covered" resolution's strongest counters — visibility-needs-a-type, record-the-do-nothing, perceive-the-ripeness, make-it-a-4th-axis — were each tested on structural grounds and failed); Premature Stabilization (the load-bearing concepts — engagement-type, Priority, disposition — were each ambiguity-tested; the steelman was generated, not skipped); Perspective Blindness (the uncomfortable "the user wants this; am I just protecting the design?" was checked via Self-Reference); Self-Reference Blindness — guarded (external/structural anchors); Phase/Calibration (the meta-loop's immaturity was checked and rejected as a reason to relocate).

**Handoff to Decomposition:** structure to partition — (1) the category test (engagement-type = how-to-engage verb; the proposals fail it); (2) the per-item decomposition (do-nothing / low-delay / high-delay → already-covered vs other-layer); (3) the steelman 4th-axis kill (disposition = selection); (4) the already-served triage handoff (Priority/Confidence → meta-loop); (5) the bloat/re-coupling verdict; (6) the documentation residue; + the Inherited Commitments re-test. Candidate sub-questions for /decompose.
