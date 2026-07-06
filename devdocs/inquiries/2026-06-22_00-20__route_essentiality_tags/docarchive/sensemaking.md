## User Input

`_branch.md` (this inquiry) + `surfacing.md` + `articulate_simple.md`. The 12 real crowboy route-maps are in session context. The "whole" to make sense of: the **verdict + categorization** for the user's route-essentiality-tag proposal (peripheral / essential-immediate / essential). Surfacing's load-bearing handoff: **Priority currently FUSES essentiality + immediacy + raw-salience into one HIGH/MED/LOW scalar** — measured (R4 essential-but-MED-because-light; R10 essential-but-MED-because-later). Adjudicate: is essentiality a distinct attributive axis or a re-slice of Priority; does "immediate" cross into Selection-creep; one axis or two; where does it live without bloat. Layer = MEANING (with a Structural realization sequenced after). Self-reference case (routelister's own schema) → ground in the real maps, not taste.

---

# Structural Sensemaking — Route Essentiality Tags

## SV1 — Baseline

The user can't tell, from a route-map's ~10 mid/high routes, which are core to the build and which are peripheral, or which are needed now. They propose tags: peripheral / essential-immediate / essential. Initial read: add an importance tag to routes. Seems reasonable but routelister already has Priority — need to check it's not a duplicate.

## Phase 1 — Cognitive Anchor Extraction

**Constraints:**
- C1 — Any tag must stay **attributive** (a property OF a route, like Priority/Confidence). It must not decide act/defer/drop — that is Selection-creep (LAYER-2) and is explicitly not routelisting's (§1.3, §2.2 line 124).
- C2 — Any "essential" claim must be **route↔goal**, never **route↔route** ("A needs B" is the forbidden inter-concept dependency graph, §1.3).
- C3 — **Lightweight + domain-agnostic + meta-decided + one-glance** (the user's own standing requirement, inherited from the vitality-rubric design). Not a checklist.
- C4 — **No bloat** — the lean-index redesign just dropped grain+kind; a realization must not re-inflate the index.

**Key Insights:**
- K1 (measured) — **Priority is an overloaded scalar.** It is assigned HIGH/MED for heterogeneous reasons: essentiality (R3 "biggest leverage point"), enabling-role (R2), but ALSO effort/risk (R4 "no money to settle without it" but MED because "Light build") and phase (R10 essential but MED because "becomes load-bearing the moment real money flows"). **R4 is the smoking gun: essential yet Priority MED** — so reading Priority as essentiality is wrong, and a user doing so concludes R4 isn't essential. This is precisely the user's pain.
- K2 (measured) — **Essentiality is already being judged, in unstructured WHY prose.** "load-bearing human-in-the-loop" (R6), "off the money-loop critical path" (R13), "biggest leverage point" (R3). The judgment exists; it just isn't a scannable attribute.
- K3 (measured) — **essential ≠ immediate, three real cells.** R3 (essential, now) · R10 (essential, later) · R13 (peripheral). The user's "essential immediate" label fuses two orthogonal properties into one word.
- K4 — **Confidence already proves an orthogonal attribute can coexist with Priority.** Confidence (formed-ness) sits beside Priority (salience) without conflict; an essentiality attribute can do the same IF genuinely orthogonal.

**Structural Points:**
- S1 — routelister's attributive fields today: **Priority** (perceived salience/importance) + **Confidence** (perceived formed-ness). Both route↔goal descriptors, neither a winner-ranking.
- S2 — The user's proposal is ONE axis with THREE values that **fuses two dimensions**: coreness (peripheral↔essential) and phase (now↔later). The "essential immediate" middle is the fusion point; note there is no "peripheral immediate" cell — the user intuitively dropped it because immediacy only matters for essential routes.
- S3 — Candidate homes for a realization: the existing `tags:` line in the record · the Route Attribution line (beside Priority/Confidence) · a Map Header "essential-count" · (rejected up front) a new index column.

**Foundational Principles:**
- P1 — routelister enumerates the field and *describes* each route; it never *selects*. Attributes are description; dispositions are decision (the C1/§2.2-line-124 line).
- P2 — Asymmetric-failure for identity: when a candidate field is disposition-adjacent, lean toward the framing that stays clearly attributive (eroding identity is the unrecoverable failure).

**Meaning-Nodes:** essentiality-as-goal-load-bearing · Priority-overload · attributive-vs-disposition · route↔goal-vs-route↔route · phase-as-qualifier-not-axis · lean-without-bloat.

### SV2 — Anchor-Informed

The proposal is not "add an importance tag" (SV1) — Priority already carries importance. It is: **decompose the coreness component that Priority currently fuses with effort and phase, and surface it on its own.** "Essentiality" is the goal-load-bearing sub-signal Priority compresses (proven by R4/R10). The user's three-label scheme is real but conflates coreness with phase.

*Meta-Inspection H4 (concept names):* "essentiality" / "core" / "peripheral" match the user's own words ("some routes are periphreals and some are core") — user-language aligned, not loop-coined. *H5 (motivating examples):* the motivating cells (R3/R10/R13/R4) are from ONE project (crowboy) — flagged for the specific-vs-pattern test in Phase 3 (is this crowboy-specific or general?).

## Phase 2 — Perspective Checking

- **Technical/Logical:** Priority = salience, Confidence = formed-ness, essentiality = goal-load-bearing. Three orthogonal route↔goal scalars. Logically clean IF essentiality is shown independent of Priority (K1 supplies the independence: R4 essential×MED, R3 essential×HIGH — essentiality varies within a Priority level and vice versa).
- **Human/User:** the user scans a map and wants "which 3 of these 10 must I not skip?" An essential-count + a core/supporting/peripheral tag answers that in one glance; Priority HIGH (5–6 per map) does not.
- **Strategic/Long-term:** a downstream meta-loop route-selector benefits from a machine-checkable coreness signal — but C1 forbids the *tag itself* from selecting. Clean split: the tag describes coreness; the selector (a different operation) consumes it.
- **Risk/Failure:** the live risk is **Selection-creep via the "immediate" half** — "do it now" is a disposition. Mitigation tested in Phase 3. Secondary risk: bloat (a third scalar + a phase-qualifier). Mitigation: ride an existing line, not a new column; qualifier optional.
- **Resource/Feasibility:** "is the goal load-bearing on this route?" is glance-decidable with no extra analysis (the framer already perceived it to write the WHY). Zero new pass — same by-product economics as the meaning-gaps/vitality rubric.
- **Definitional / Internal Consistency:** does an essentiality field contradict §2.2 line 124 ("perceived importance IS Priority")? **Tension found.** Line 124 says importance = Priority. If essentiality = importance, it duplicates Priority and the line forbids it. Resolution requires showing essentiality ≠ importance-in-general but specifically **goal-coreness**, a *component* of what line 124 lumped as "importance" — and that Priority is demonstrably broader (R4: high coreness, MED importance-as-rated). So essentiality SHARPENS line 124's "importance" rather than duplicating it. (Carried to Ambiguity #1.)
- **Phase / Calibration-State:** essentiality is **goal-phase-relative** (R10 "rises to HIGH at real money"; R13 "LOW under launch lens · HIGH under trust-first lens"). But the *rule to decide it* is NOT contingent on project-calibration maturity — it's glance-decidable today. Early-stage default: if the goal's phases aren't articulated, emit bare core/supporting/peripheral with no phase-qualifier. The phase-qualifier is opt-in, used only when the goal has explicit phases.
- **Self-Reference (H8):** this redesigns routelister's own schema using routelister's own concepts — circularity risk. External grounding = the 12 real maps (empirical: R4/R10/R13 are measured, not asserted). The verdict rests on data, not on the framework agreeing with itself.

### SV3 — Multi-Perspective

The model holds and sharpens: **essentiality is a third attributive axis (goal-coreness), orthogonal to Priority (salience/pressingness) and Confidence (formed-ness), that sharpens — does not duplicate — what §2.2 line 124 lumped as "importance."** The two live risks are Selection-creep (the "immediate" half) and bloat; both have candidate mitigations to lock in Phase 3. The phase dimension is goal-relative and should be a qualifier, not a standing axis.

## Phase 3 — Ambiguity Collapse

### Ambiguity 1 — Is essentiality distinct from Priority, or a re-slice of it?
**Strongest counter-interpretation:** essentiality IS Priority. §2.2 line 124 explicitly says "perceived importance is the attributive Priority field." Adding an essentiality scalar duplicates an existing field and violates the no-redundancy lean identity.
**Why the counter fails (structural grounds):** the real data shows Priority and coreness **dissociating**. R4 is rated **Priority MED** while being **goal-essential** ("no money to settle without it") — MED because it is "Light build" and parallel/low-risk. R10 is **Priority MED** while goal-essential — MED because it activates "the moment real money flows." In both, the *coreness* is high but the *Priority* is mid, because Priority is also absorbing effort/risk and phase. A single scalar that moves with effort and phase cannot be the coreness signal. Therefore coreness is a **separable component**, not the whole of Priority — and line 124's "importance" was an under-decomposed lump. This is structural (a measured dissociation), not precedent-citing.
**Confidence:** HIGH (the dissociation is measured in the corpus, R4/R10).
**Resolution:** essentiality (goal-coreness) is a **distinct attributive axis**. It sharpens line 124: "importance" splits into *coreness* (essentiality, new) + *pressingness/salience* (Priority, retained).
**Now fixed:** three orthogonal route↔goal attributes — essentiality (coreness) · Priority (pressingness/salience) · Confidence (formed-ness). **No longer allowed:** treating Priority as the essentiality signal. **Depends on this:** the categorization (Ambiguity 3) and the Priority-meaning reconciliation (Ambiguity 5). **Model change:** the field is a *decomposition*, not an *addition* — it surfaces a signal Priority was hiding.

### Ambiguity 2 — Does "immediate" cross into Selection-creep (disposition)?
**Strongest counter-interpretation:** "now vs later" is inherently a sequencing/disposition decision ("do this now, defer that"), which §1.3 + line 124 place outside routelisting. So any immediacy tag erodes identity.
**Why the counter fails — but only under a specific framing (structural grounds):** there are two distinct readings of "immediacy," and they fall on opposite sides of the attributive/disposition line:
- **Disposition reading (FORBIDDEN):** "do R3 now, defer R10." This is a route-ordering decision (route↔route + act/defer) — Selection-creep. Reject.
- **Attribution reading (ALLOWED):** "R10's coreness *activates* in the real-money goal-phase." This describes the route's relationship to the **goal's own phase structure** (the goal defines phases pilot → real-money; exogenous, given). It is a route↔goal-phase *fact*, exactly parallel to Priority being a route↔goal *salience* fact. R10's own WHY already states it attributively: "becomes load-bearing the moment real money flows" — a perception, not a command. A consumer remains free to tackle a later-phase route now; the tag never sequences.
So immediacy survives **only** as the attribution reading, and **only** as a qualifier on essential routes (peripheral-now is meaningless — which is why the user's scheme had no such cell).
**Confidence:** HIGH that standalone "do-it-now" immediacy is Selection-creep; HIGH that phase-attribution is attributive. The lean (P2): keep it a **qualifier**, not a standing axis, to stay clearly on the attributive side.
**Resolution:** immediacy is **not a separate axis**. It is an **optional phase-qualifier on core routes** (`core · @<goal-phase>`), used only when the goal has explicit phases and a route's coreness is phase-gated. **Now fixed:** no "immediate/now" standing tag. **No longer allowed:** a tag that reads as "act now." **Depends on this:** the categorization shape (Ambiguity 3).

### Ambiguity 3 — One axis or two? What are the values?
**Strongest counter-interpretation:** honor the user's literal three-label scheme (peripheral / essential-immediate / essential) as one axis — it's what they asked for and it's simplest.
**Why the counter fails (structural grounds):** the three labels are **not one axis** — "essential-immediate" vs "essential" differ on *phase*, while "peripheral" vs "essential" differ on *coreness*. Collapsing two orthogonal dimensions into one ordinal list breaks the moment a route is peripheral-but-phase-gated or core-now-vs-core-later needs both read at once; and it bakes the Selection-creep "immediate" into the value name. Decomposing per Ambiguity 1+2 is structurally cleaner and still lightweight.
**Confidence:** HIGH.
**Resolution:** **ONE new axis — `essentiality` ∈ {core, supporting, peripheral}** — "is the goal load-bearing on this route?" (core = the goal cannot land without it; supporting = helps, goal survives without it; peripheral = off the critical path / optional / exploratory). PLUS an **optional phase-qualifier** on core routes for the essential-but-later case. This maps the user's labels: "essential immediate" → **core** (default phase) · "essential" → **core · @later-phase** · "peripheral" → **peripheral** — and recovers the **supporting** middle the data shows (R5 "connective tissue") that the user's binary missed. The 3-value scale parallels the familiar low/mid/high (vitality) shape.

### Ambiguity 4 — Does this duplicate the meaning-gaps / vitality rating?
**Strongest counter-interpretation:** it's another low/mid/high-style rating on routes — redundant with the vitality the meaning-gaps sub-block already carries.
**Why the counter fails (structural grounds):** **different unit, different question.** Vitality is **per-gap** (how much closing one *understanding-gap* matters before building) on DEVELOP/CONSOLIDATE routes. Essentiality is **per-route** (how load-bearing the *whole route* is for the goal) on ALL routes. A route can be core (essentiality) while having no urgent meaning-gaps (low vitality), or peripheral while being under-understood. Orthogonal.
**Confidence:** HIGH.
**Resolution:** essentiality is per-route and independent of per-gap vitality; both coexist. **No longer allowed:** conflating route-coreness with gap-vitality.

### Ambiguity 5 — What does Priority MEAN once essentiality exists?
**Strongest counter-interpretation:** leave Priority untouched as "overall salience" — minimal change.
**Why the counter is partly right (structural grounds):** Priority need not be redefined for essentiality to work — they're orthogonal, and a route now reads as (essentiality × Priority). BUT leaving Priority as a fuzzy composite that *still* partly means coreness re-creates the confusion. The clean target is to let Priority **shed the coreness it was overloaded with** and mean *pressingness/salience* — then essentiality (is-it-core) and Priority (is-it-pressing) are crisply orthogonal: core+HIGH = critical-and-pressing (R3); core+MED = essential-but-not-urgent (R4, R10); peripheral+HIGH = pressing-but-optional; peripheral+LOW = R13.
**Confidence:** MED on *formally re-documenting* Priority's narrowed meaning (it's a heavier change the user didn't ask for) — this is a **structural-realization choice**, flagged, not forced. HIGH on the *conceptual* claim that they are orthogonal.
**Resolution:** commit the meaning (essentiality ⟂ Priority; essentiality carries the coreness Priority over-fused); leave the *degree* of Priority re-documentation to the structural realization inquiry.

### SV4 — Clarified

YES — the user's instinct is correct and measurably grounded, but the right form is **one attributive axis `essentiality` ∈ {core / supporting / peripheral}** ("is the goal load-bearing on this route?"), with an **optional phase-qualifier** for the essential-but-later case — NOT the user's fused three-label scheme. It is distinct from Priority (measured dissociation: R4/R10), identity-clean (route↔goal attribute, never selection, never a dependency graph), lightweight (one glance, by-product of framing), and non-duplicative of vitality (per-route vs per-gap). The "immediate" half survives only as an attributive phase-qualifier on core routes, never as a do-it-now disposition.

## Phase 4 — Degrees-of-Freedom Reduction

**Fixed:** (1) essentiality is a third attributive route↔goal axis, values core/supporting/peripheral; (2) decided by the meta question "can the goal land without this route?" — one glance, domain-agnostic; (3) immediacy = optional phase-qualifier on core routes, never a standing axis; (4) it never selects/sequences/decides (attributive only); (5) it is per-route, orthogonal to per-gap vitality and to Confidence.

**Eliminated:** the user's fused 3-label single axis; a standalone "immediate/now" tag (Selection-creep); treating Priority as the essentiality signal; a new index column (bloat); a route↔route "essential because it enables B" framing (dependency graph).

**Viable / left to the structural realization (sequenced next, not decided here):** the exact home — `tags:` line vs Route Attribution line vs a Header "essential-count"; whether to formally narrow Priority's documented meaning; the phase-qualifier's notation. These are Structural-layer, per the Layer Commitment.

### SV5 — Constrained

The solution space is reduced to **one attributive axis + one optional qualifier**, fully specified in meaning, with the structural placement deferred to the realization inquiry. Every identity guard (attributive, route↔goal, lightweight, non-duplicative) is satisfied by the meaning as fixed.

## Phase 5 — Conceptual Stabilization

No model-misfit (the anchors converged without patching; Accommodation trigger did not fire). The self-reference guard held — the verdict rests on measured dissociations (R4/R10/R13), not on the framework agreeing with itself.

### SV6 — Stabilized Model

**Verdict: YES — the user is right, and measurably so, but the categorization should be ONE attributive axis, not their fused three-label scheme.**

**The axis — `essentiality` ∈ {core / supporting / peripheral}:** a third per-route attributive descriptor answering one meta, domain-agnostic, glance-decidable question — **"can the goal land without this route?"** (core = no; supporting = yes-but-weaker; peripheral = yes / off the critical path). It sits beside Priority and Confidence as a route↔goal attribute.

**Why it's needed (not a duplicate of Priority):** Priority is an **overloaded scalar** — the real maps show it fusing coreness with effort/risk and phase (R4: goal-essential yet Priority MED because "light build"; R10: goal-essential yet MED because it activates later). So a user reading Priority cannot recover coreness — exactly the reported pain. Essentiality **decomposes** the coreness signal Priority was hiding; it *sharpens* §2.2 line 124's "importance" (= coreness + pressingness) rather than duplicating it.

**Immediacy = an optional phase-qualifier on core routes (`core · @<goal-phase>`), not a separate axis** — because a standalone "now/immediate" tag is a disposition (Selection-creep), while "this route's coreness activates in the goal's <phase>" is an attributive route↔goal-phase fact (R10's own WHY states it that way). It is opt-in, used only when the goal has explicit phases; default is bare core/supporting/peripheral. This recovers all three measured cells: core (R3) · core·@later (R10) · peripheral (R13), plus the supporting middle (R5) the user's binary omitted.

**Identity-clean:** attributive only (never selects/sequences/decides act-defer-drop → no Selection-creep); route↔**goal**, never route↔route (no dependency graph); lightweight, domain-agnostic, a by-product of the framing glance (same economics as the vitality rubric); per-route, orthogonal to per-gap vitality and to Confidence.

**Reconciliation with Priority:** essentiality (coreness) ⟂ Priority (pressingness/salience); adding essentiality lets Priority shed the coreness it over-fused. Whether to *formally re-document* Priority's narrowed meaning is a Structural-realization choice (flagged, not forced).

**Structural placement (deferred to the realization inquiry, per Layer Commitment):** NOT a new index column (the lean-index just shed two); candidate homes are the existing `tags:` line, the Route Attribution line beside Priority/Confidence, and an optional Map Header "essential-count" (the count that actually triages — "3 core" beats "6 HIGH").

**Difference from SV1:** SV1 = "add an importance tag." SV6 = "Priority is overloaded; *decompose* the goal-coreness it hides into one attributive `essentiality` axis (core/supporting/peripheral), with phase as an optional attributive qualifier — not a new importance scale, and not the user's two-axes-fused-into-one-label scheme."

---

## Telemetry
- **Perspective saturation:** reached — Definitional, Risk, and Phase perspectives each produced new anchors (the line-124 tension, the Selection-creep split, the phase-relativity); later perspectives confirmed.
- **Ambiguity resolution ratio:** 5/5 resolved; one (Ambiguity 5, Priority re-documentation degree) explicitly left as a flagged Structural choice — not silently dropped.
- **SV delta:** large (SV1 "add importance tag" → SV6 "decompose Priority's hidden coreness into one attributive axis + phase-qualifier").
- **Anchor diversity:** constraints + insights + structural points + principles + meaning-nodes, across 8 perspectives.
- **Failure-mode guards:** Status-Quo-Bias (didn't protect Priority — found its overload); Clean-Resolution-Trap (every ambiguity tested a counter on structural/measured grounds, not precedent); Self-Reference-Blindness (grounded in measured R4/R10/R13, external to the framework); Premature-Stabilization (load-bearing concepts "essentiality"/"phase-qualifier" each got a counter-tested pair).
- **Verdict: STABLE** (SV6).
