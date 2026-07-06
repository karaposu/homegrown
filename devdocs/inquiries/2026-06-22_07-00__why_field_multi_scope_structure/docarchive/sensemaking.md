## User Input

`_branch.md` + `surfacing.md` + `articulate_simple.md` (this inquiry). The real crowboy WHY fields are in context. The "whole" to make sense of: the verdict + structure for a multi-scope WHY field. Surfacing's load-bearing handoffs: (a) big-scope-WHY appears to be the *reasoning behind the essentiality rating* (rating↔reasoning, like Priority↔WHY), not a duplicate; (b) the big/goal-contribution band is the one that systematically drops out; (c) the narrow band borders on Move/Lands (already in the record); (d) "scope" may be a zoom-ladder. Layer = MEANING (the right axis + the essentiality boundary). Self-reference case → ground in the real maps.

---

# Structural Sensemaking — WHY Field Multi-Scope Structure

## SV1 — Baseline

The route WHY field feels too narrow — it explains the local reason but not what the end goal gains. The user wants narrow/mid/big scope all present, maybe as sub-fields, maybe via domain-agnostic meta-questions. Initial read: add scope sub-fields to WHY. But routelister just gained an essentiality axis that also concerns the goal — need to check overlap.

## Phase 1 — Cognitive Anchor Extraction

**Constraints:**
- C1 — Must stay **attributive + lightweight**; the lean/ceiling-not-floor rule (from the Move/Lands redesign) applies — don't force three lines on every route.
- C2 — Must NOT **duplicate the essentiality axis** (the just-added "can the goal land without this route?").
- C3 — Must stay **route↔GOAL**, never **route↔route** — a "consequence chain to the goal" must not become a dependency graph (§1.3).
- C4 — The user explicitly wants **domain-agnostic meta-questions** (the vitality/essentiality-rubric stance).

**Key Insights:**
- K1 (measured) — WHY is **already a 2-part field** in the spec ("territory-evidence · why-this-might-be-important"); the proposal *scopes the importance half*, it doesn't invent structure.
- K2 (measured) — WHY's scope coverage is **inconsistent and implicit**, and the **big/goal-contribution band is the one that systematically drops out** (most WHYs give the local causal role; few state what the goal gains). The user's "only narrow" overshoots, but the gap is real and specifically at the goal band.
- K3 (the reconciliation) — **big-scope-WHY = the *reasoning* behind the essentiality *rating*.** Essentiality is a one-token verdict (core/supporting/peripheral); the big-scope WHY is the prose that justifies it ("what the goal gains"). This mirrors the spec's existing **rating↔reasoning** pattern twice over: **Priority↔WHY** and **Confidence↔meaning-gaps** (the gaps are authored "as a by-product of Confidence"). So big-scope-WHY is not a duplicate — it completes the pattern.
- K4 (the redundancy) — the **narrow band ≈ Move/Lands.** Move = what the route does; Lands = the resulting state. "Why-narrow" (the local purpose) sits right on top of them. So WHY's *distinctive* job is the **mid + big** bands.

**Structural Points:**
- S1 — the route record's zoom-ladder is **already partially built**: the local rung is Move/Lands; the goal rung is essentiality (the rating) — what's missing/inconsistent is the *prose* that climbs from the neighbourhood to the goal.
- S2 — the real bands in the data: **local-purpose** (≈ Move/Lands) / **neighbourhood-effect** ("ships independently of the gate cutover"; "the spine of the Inbox") / **goal-contribution** ("the design's whole purpose is to de-risk the build").

**Foundational Principles:**
- P1 — each attributive **rating has its reasoning** (Priority↔WHY, Confidence↔meaning-gaps, Essentiality↔big-scope-WHY); the reasoning is never redundant with the rating — it is what lets a reader trust and act on the glance.
- P2 — asymmetric-failure for the lean ethos: structure must **reflow** the multi-scope content already latent in good WHYs, not **inflate** every route to three lines.

**Meaning-Nodes:** WHY-as-reasoning · the zoom-ladder (route→neighbourhood→goal) · rating↔reasoning · the goal-rung-drops-out · narrow≈Move/Lands · domain-agnostic meta-questions.

### SV2 — Anchor-Informed

The proposal is not "add three scope sub-fields" (SV1). It is: **make WHY climb to the goal.** WHY already is the reasoning field; its job is the goal-ward reasoning, and the band that drops out (the goal-contribution) is exactly the *reasoning behind the just-added essentiality rating*. The narrow band is already Move/Lands. So the real change is small and targeted: guarantee the goal rung.

*Meta-Inspection H4 (concept names):* "scope" / "narrow/mid/big" / "zoom-ladder" — the user said "narrow + mid + big scope" and "benefit towards end goal"; the zoom-ladder (route → neighbourhood → goal) is their words made concrete. User-language aligned. *H5 (motivating examples):* the WHY samples are from one project (crowboy) — flagged for the specific-vs-pattern test (is the goal-band-drop crowboy-specific or general?).

## Phase 2 — Perspective Checking

- **Technical/Logical:** the record already spans the ladder — Move/Lands (local), essentiality (goal-rating). WHY's distinctive job is the *prose climb* to the goal. Logically the change is "guarantee WHY reaches the goal band," not "add three fields."
- **Human/User:** a reader wants, per route, "what does this DO (Move/Lands), and what does the GOAL get?" The goal band is the one currently left to chance — making it mandatory directly serves the user's "I want benefit-toward-end-goal listed."
- **Risk/Failure:** two risks — (a) **bloat** (three forced sub-fields), mitigated by reflow + ceiling-not-floor + delegating narrow to Move/Lands; (b) **dependency-graph creep** (a "consequence chain" big-scope), mitigated by framing big-scope as route↔GOAL ("what the goal gains"), never route↔route.
- **Resource/Feasibility:** "what does the end goal gain?" is a one-glance question the author already half-answers; making it explicit is no new analysis — same economics as the essentiality/vitality rubrics.
- **Definitional / Internal Consistency:** does a mandatory goal-rung contradict the WHY def or essentiality? **No tension found, and a positive fit:** the spec already says WHY = "territory-evidence · why-this-might-be-important" — the goal-rung is the *most important* form of "why-this-might-be-important." And essentiality's spec already pairs a rating with reasoning by precedent (Confidence↔meaning-gaps). The goal-rung *completes* essentiality's reasoning rather than competing with it.
- **Phase / Calibration-State:** the goal-rung depends on the inquiry having an articulated end goal — which routelister always has (the goal is a required input, §2.3). So no calibration dependency; the meta-question is always answerable.
- **Self-Reference (H8):** redesigning routelister's own field — external grounding = the measured WHY fields (the goal-band-drop and the multi-scope-cram are observed, not asserted).

### SV3 — Multi-Perspective

The model holds and sharpens: **WHY's job is the goal-ward reasoning; the change is to guarantee the goal rung (the band that drops out), which doubles as the essentiality rating's justification.** The narrow rung is Move/Lands; the mid rung is optional; "scope" is best read as a zoom-ladder from the route to the goal, generated by domain-agnostic meta-questions. Two risks (bloat, dependency-graph) have mitigations to lock in Phase 3.

## Phase 3 — Ambiguity Collapse

### Ambiguity 1 — Does big-scope-WHY duplicate the essentiality axis?
**Strongest counter-interpretation:** essentiality already tells you core/supporting/peripheral — that IS the goal-relation, so a "big-scope WHY" restating the goal-relation is redundant; drop it.
**Why the counter fails (structural grounds):** the same argument would delete WHY entirely (Priority already says HIGH — why explain?). A **rating** is a glance; its **reasoning** is what lets a reader trust and act on the glance and understand *why* the verdict holds. Essentiality (core/supporting/peripheral) is the rating; the big-scope WHY ("what the goal gains / what's lost without it") is the reasoning that justifies it. The spec already institutionalizes this twice — Priority has WHY, Confidence has meaning-gaps ("authored as a by-product of Confidence"). Big-scope-WHY is the **third instance of the rating↔reasoning pattern**, not a duplicate of the rating.
**Confidence:** HIGH (the pattern is in the spec twice; the rating-vs-reasoning distinction is structural).
**Resolution:** big-scope-WHY is essentiality's **reasoning**; it complements, not duplicates. **Now fixed:** WHY carries the goal-contribution prose; essentiality carries the goal-relation token; they pair like Priority↔WHY. **No longer allowed:** treating the essentiality token as a substitute for stating what the goal gains.

### Ambiguity 2 — Is "scope" the right axis?
**Strongest counter-interpretation:** keep the user's literal narrow/mid/big "scope" as three equal bands.
**Why the counter fails (structural grounds):** "scope" is underspecified (scope of what — blast radius? abstraction? audience?), and the three bands are NOT equal: the **narrow band ≈ Move/Lands** (already in the record — measured: Move="add a unique settlement key", and "why-narrow"="for exactly-once" is the same local content), and the **big band is the one that drops out** (measured). Treating them as three equal new sub-fields both duplicates Move/Lands and bloats. The cleaner axis is a **zoom-ladder**: the route → its neighbourhood/subsystem → the end goal — concrete, domain-agnostic, and it maps onto the record's existing structure (local=Move/Lands, goal=essentiality+its reasoning).
**Why NOT a consequence-chain:** a "what it enables → what that enables → … → goal" framing would chain route↔route — the forbidden dependency graph (§1.3). The zoom-ladder stays route↔goal (what the *goal* gains), not route↔route.
**Confidence:** HIGH.
**Resolution:** the axis is a **zoom-ladder from the route to the goal**, not abstract "scope" and not a consequence-chain. Three rungs — **local** (delegated to Move/Lands), **neighbourhood** (optional), **goal** (mandatory).

### Ambiguity 3 — Does the narrow band collapse into Move/Lands?
**Strongest counter-interpretation:** "why-narrow" (the local *purpose*) is distinct from Move (the local *action*) and Lands (the local *outcome*), so it deserves its own line.
**Why the counter mostly fails (structural grounds):** in the measured data the local purpose is almost always already carried by Move+Lands or trivially implied by them ("add a unique settlement key" + "a duplicate settle is rejected" already conveys the exactly-once purpose). A separate why-narrow line would restate them. The marginal cases where local purpose adds something can be folded into Move/Lands or the goal-ward WHY.
**Confidence:** MED-HIGH (mostly collapses; rare genuine local-purpose nuance can ride in Move/Lands).
**Resolution:** the **narrow rung is delegated to Move/Lands**; WHY does not restate it. WHY's distinctive content is the **neighbourhood + goal** rungs. **Now fixed:** WHY climbs *from* the local (Move/Lands) outward; it does not re-describe the local.

### Ambiguity 4 — Sub-fields vs meta-questions vs reflow?
**Strongest counter-interpretation:** three literal labeled sub-fields (why-narrow / why-mid / why-big) are simplest and match the user's sketch.
**Why the counter fails (structural grounds):** three forced sub-fields violate the lean/ceiling-not-floor rule (the same lesson Move/Lands settled — labels are a ceiling for dense routes, not a floor for all) and duplicate Move/Lands at the narrow rung. The lighter, sufficient form: WHY is **one field that must climb to the goal**, generated by two **domain-agnostic meta-questions** (the user's explicit ask) — optionally labeled rungs only when dense.
**Confidence:** HIGH.
**Resolution:** **not three sub-fields.** WHY is generated by two meta-questions — **(neighbourhood, optional)** "what does this unblock or protect around it?" and **(goal, mandatory)** "what does the end goal gain — what benefit toward the goal?" A short route answers both in one clause; only a dense route gets labeled rungs. The **goal rung is mandatory** (it's the band that drops out); the neighbourhood rung is optional; the local rung is Move/Lands.

### SV4 — Clarified

YES — WHY should be structured to climb scopes, but the right form is **a short zoom-ladder to the goal, not three literal sub-fields**: the local rung is already Move/Lands; WHY carries the **neighbourhood rung (optional)** and the **goal rung (mandatory)**. The goal rung — "what does the end goal gain?" — is the band that systematically drops out, and it is simultaneously the **reasoning behind the just-added essentiality rating** (completing the spec's rating↔reasoning pattern: Priority↔WHY, Confidence↔meaning-gaps, Essentiality↔big-scope-WHY). Two domain-agnostic meta-questions generate it; the lean/ceiling-not-floor rule keeps it from bloating; it stays route↔goal (never a route↔route consequence chain).

## Phase 4 — Degrees-of-Freedom Reduction

**Fixed:** (1) WHY's job is the goal-ward reasoning; (2) the axis is a zoom-ladder (route → neighbourhood → goal), not abstract "scope" and not a consequence-chain; (3) the **goal rung is mandatory**, the neighbourhood rung optional, the local rung delegated to Move/Lands; (4) two domain-agnostic meta-questions generate it; (5) the goal rung doubles as essentiality's reasoning (rating↔reasoning); (6) reflow not inflate (ceiling-not-floor); (7) route↔goal only.

**Eliminated:** three literal equal sub-fields (bloat + narrow-duplication); abstract "scope" as the axis; a consequence-chain (dependency graph); a separate essentiality-reasoning block (WHY already is the reasoning field — don't fragment); restating the local action in WHY.

**Viable / left to the structural realization (sequenced next):** the exact rendering (one climbing sentence vs labeled rungs), the precise meta-question wording, whether to note the WHY↔essentiality pairing explicitly in the spec. Structural-layer, per the Layer Commitment.

### SV5 — Constrained

The solution space reduces to: **WHY = a short, goal-reaching reasoning field generated by two meta-questions (neighbourhood-optional, goal-mandatory), with the local rung delegated to Move/Lands and the goal rung doubling as essentiality's justification.** Every guard (lean, route↔goal, no-essentiality-duplication, domain-agnostic) is satisfied by the meaning as fixed.

## Phase 5 — Conceptual Stabilization

No model-misfit (anchors converged without patching; Accommodation trigger did not fire). The self-reference guard held — the verdict rests on the measured goal-band-drop and the multi-scope-cram, plus the spec's own twice-instantiated rating↔reasoning pattern.

### SV6 — Stabilized Model

**Verdict: YES — the user is right that WHY should reach beyond the local, and measurably so (the goal/benefit band is the one that systematically drops out). But the best form is NOT three literal scope sub-fields — it is a short "zoom-ladder to the goal."**

**The structure — WHY as a climb from the route to the goal:**
- **local rung** (what the route does) — **delegated to Move/Lands**; WHY does not restate it.
- **neighbourhood rung** (what it unblocks/protects around it) — **optional**; named when there's a real subsystem effect.
- **goal rung** (what the end goal gains — "benefit toward the goal") — **mandatory**; this is the band that drops out, and the reason to guarantee it.

**Generated by two domain-agnostic meta-questions** (the user's explicit ask):
1. *(neighbourhood, optional)* "What does engaging this unblock or protect around it?"
2. *(goal, mandatory)* "What does the end goal gain from this — what is the benefit toward the goal?"

**Why it doesn't duplicate essentiality (the load-bearing reconciliation):** essentiality is the goal-relation **rating** (core/supporting/peripheral); the WHY's goal rung is the goal-relation **reasoning** ("what the goal gains"). Rating and reasoning are different jobs — the spec already pairs them twice (**Priority↔WHY**, **Confidence↔meaning-gaps**, where the gaps are authored "as a by-product of Confidence"). The WHY's goal rung is the **third instance of that pattern** — it is precisely the prose that *justifies* the essentiality token. So the two complement: essentiality says *whether* the goal needs the route; WHY's goal rung says *what the goal gains*.

**Lean (reflow, not inflate):** a short route answers both meta-questions in one clause ("the keystone — ships independently AND de-risks the whole build"); only a dense route gets labeled rungs. Ceiling-not-floor — the same rule Move/Lands settled.

**Identity-clean:** route↔**goal** ("what the goal gains"), never route↔route ("enables route B") — the consequence-chain framing is rejected precisely to avoid the forbidden dependency graph; lightweight + domain-agnostic (two glance questions, like the vitality/essentiality rubrics).

**Difference from SV1:** SV1 = "add three scope sub-fields to WHY." SV6 = "the local rung is already Move/Lands; WHY's job is to *climb to the goal*; guarantee the goal rung (the band that drops out), which doubles as the essentiality rating's reasoning — generated by two domain-agnostic meta-questions, reflowed not inflated, route↔goal only."

---

## Telemetry
- **Perspective saturation:** reached — Definitional, Risk, and Technical perspectives each produced new anchors (the rating↔reasoning fit, the dependency-graph risk, the narrow≈Move/Lands collapse); later perspectives confirmed.
- **Ambiguity resolution ratio:** 4/4 resolved; the structural rendering left as a flagged Structural-layer choice (not dropped).
- **SV delta:** large (SV1 "add three scope sub-fields" → SV6 "climb to the goal; narrow is Move/Lands; goal-rung mandatory and doubles as essentiality's reasoning").
- **Anchor diversity:** constraints + insights + structural points + principles + meaning-nodes, across 7 perspectives.
- **Failure-mode guards:** Status-Quo-Bias (didn't protect the current flat WHY — found its goal-band-drop); Clean-Resolution-Trap (every ambiguity tested a counter on measured/structural grounds — esp. the "essentiality makes WHY redundant" counter, refuted by the rating-vs-reasoning structural distinction); Self-Reference-Blindness (grounded in measured WHY fields + the spec's existing rating↔reasoning pattern); Premature-Stabilization (the load-bearing concepts "zoom-ladder" and "goal-rung = essentiality's reasoning" each got a counter-tested pair).
- **Verdict: STABLE** (SV6).
