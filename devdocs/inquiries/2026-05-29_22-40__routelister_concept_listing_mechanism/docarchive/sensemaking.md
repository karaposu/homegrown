## User Input

`devdocs/inquiries/2026-05-29_22-40__routelister_concept_listing_mechanism/_branch.md` (prior output: surfacing.md; workspace — chain + surfacing §2.1/§4.4 + routeman §2.1/§4.4/§4.5). Define routelister's concept-listing HOW: OT1 enumeration, OT2 scoping, OT3 (esp.) identity-individuation.

---

# Structural Sensemaking — Routelister's Concept-Listing Mechanism

## SV1 — Baseline Understanding

Initial read: the three pieces compose into one procedure (sweep → individuate → frame), and the hard one — individuation — looks tractable once you see it's **goal-relative** (not a universal partition) and the **relational sibling** of the already-defined concept-admission judgment. The trap to avoid: answering individuation with "it's an LLM judgment" (a non-answer). The work: give concrete signals + a bias direction (lean-to-split, from the asymmetric-failure principle) + the decidability resolution, and keep routelister distinct from `/surfacing`.

---

## Phase 1 — Cognitive Anchor Extraction

**Constraints:**
- C1 — Process-layer (the HOW). Meaning settled (inherited); structural schema (recording the identity set / individuation decisions) deferred.
- C2 — Individuation must get a *concrete* mechanism (signals + bias + decidability), not "it's a judgment"; but must not be over-formalized into a crisp algorithm it cannot be.
- C3 — Synthesis: re-test the chain's individuation-frontier + the "undecidable in general" trigger + the asymmetric-failure principle, with evidence.

**Key Insights:**
- K1 — **The enumeration mechanism = sweep → individuate → frame.** (1) **Sweep:** perceive the territory by drawing candidate items into attention, goal-biased — structurally the `/surfacing` traversal (`perceive-by-enumerate`, `12-44`). (2) **Individuate:** group the swept items into concept-identities (the same/different judgment). (3) **Frame:** cast each identity as a typed prescriptive route (grain × kind × engagement-type, `18-17`). The substantive product is the route-list (routeman §2.1: enumerate the full set, no selection).
- K2 — **This stays distinct from `/surfacing` precisely at steps 2–3.** `/surfacing` emits items at item-granularity, relevance-*tagged* (descriptive). routelister *individuates* items into identities and *frames* each as a typed prescriptive route. The sweep substrate is shared (both perceive a bounded territory); the **individuate-and-prescribe** operation is routelister's distinctive core. So routelister is not "/surfacing-plus" — it has a distinct output operation built on a shared perception substrate.
- K3 — **Individuation is GOAL-RELATIVE, and that dissolves "undecidable in general."** `11-43` worried individuation might be undecidable. The worry assumed a *universal*, goal-independent partition of the world into concepts — which IS undecidable (there is no canonical concept-granularity for the world). But routelister never needs a universal partition; it needs a **goal-relative** one. Relative to "audit the auth system," "password hashing" and "session tokens" may be two manifestations of one identity (authentication); relative to "fix the hashing bug," they are distinct. The goal fixes the resolution, and **relative to a fixed goal+grain, individuation is a tractable judgment.** The undecidability was an artifact of asking for a goal-free answer.
- K4 — **Individuation is the relational (binary) SIBLING of concept-admission (unary).** Admission (`09-53`): "is X a concept worth listing, relative to the goal?" Individuation: "is X the same concept as Y, relative to the goal?" Same KIND of judgment — goal-relative, soft (a judgment not a gate), signal-guided, lean-biased, calibration-dependent — differing in arity (membership vs equivalence). So individuation is NOT a brand-new mechanism; it inherits admission's properties. (Precisely: shares the *form*, not the operation — equivalence ≠ membership.)
- K5 — **The concrete individuation signals (the anti-non-answer).** SAME-identity signals (within-concept only, per the NOT-list): **shared referent** (X and Y are about the same thing — the README's feature X and the code implementing X); **manifestation-of** (one is a description/version/instance of the other's underlying thing — README *describes*, code *implements*, v1/v2 are *versions*); **shared goal-role** (both play the same role toward the goal). DIFFERENT signals: **distinct referents**; **distinct goal-roles**; **separately-routable** (relative to the goal, you'd want to route to X and Y via different engagement-types/directions → distinct identities). The judgment weighs these; it is soft + calibration-dependent (like all routelister judgments), not a crisp gate — and that softness is acceptable because the discipline is judgment-based.
- K6 — **Lean-to-SPLIT (the failure-asymmetry).** Two failure modes: **over-merge** (treat different concepts as one → a concept disappears from the breadth list, hidden inside the merge → *information-loss-in-the-dark*, unrecoverable downstream); **over-split** (treat one identity's manifestations as separate identities → near-duplicate identities → mild, *visible + mergeable* overload). By the asymmetric-failure principle (routeman §4.4: missing a possible item > including a marginal one), **lean to split under uncertainty** — a visible near-duplicate is cheap to recover; a hidden merged-away concept is the information-loss-in-the-dark failure.
- K7 — **Lean-to-split does NOT reopen `11-43`'s overload.** `11-43`'s forbidden overload is listing MANIFESTATIONS at the project level (N concepts × M manifestations). Over-split produces a few near-duplicate *identities* (still identity-resolution, just slightly over-partitioned), NOT N×M manifestations. Different magnitude; the breadth run stays at identity-resolution. Reconciled.
- K8 — **Individuation is INCREMENTAL — and that reinforces lean-to-split.** A breadth run individuates coarsely (at the goal's grain); a depth run on an identity can REVEAL one identity is really two (manifestations diverge fundamentally) or two are really one (shared referent). So depth runs feed back RE-individuation, converging at a fixpoint (`21-01` idempotency). This makes lean-to-split *safer*: over-split → a later depth run can merge (both were listed, both visible/drillable); over-merge → the hidden concept is never listed, never drilled, never discovered (permanent loss). The incremental nature confirms the bias direction.
- K9 — **Breadth-scoping = identity-resolution + goal-bias + convergence + overload-flag.** Re-derive routeman §4.5 for routelister: the breadth run terminates when the territory is swept at IDENTITY resolution (all goal-relevant identities surfaced + individuated), uncertain individuations included (lean-to-split), and a sweep cycle yields no new identities (the coverage-trigger). Overload-avoidance: identity-resolution (the primary guard, `11-43`) + goal-bias admission (`09-53`) + a workspace-overload **frontier-flag** (if too many identities even at identity-resolution, signal sub-territories rather than dump — `surfacing` §4.5 / `14-58`).

**Structural Points:**
- S1 — The three pieces are one procedure (sweep→individuate→frame) with individuation the pivot (it turns item-granularity into identity-granularity).
- S2 — Individuation's four properties (goal-relative, admission-sibling, lean-to-split, incremental) together constitute its mechanism; none alone is the answer.

**Foundational Principles:**
- P1 — Goal-relativity makes otherwise-undecidable semantic judgments tractable (admission, and now individuation). [09-53, extended]
- P2 — Under uncertainty, err toward the recoverable failure (split, not merge). [routeman §4.4, applied]

**Meaning-Nodes:**
- M1 — *sweep→individuate→frame*; M2 — *goal-relative individuation (decidability)*; M3 — *individuation = admission's relational sibling*; M4 — *lean-to-split*; M5 — *incremental/fixpoint individuation*; M6 — *concrete signals (referent/manifestation-of/goal-role)*.

### SV2 — Anchor-Informed Understanding

routelister's concept-listing is a three-step procedure — sweep (perceive the territory, surfacing-style, goal-biased) → individuate (group items into concept-identities) → frame (each identity as a typed route, `18-17`) — distinct from `/surfacing` at the individuate-and-prescribe steps. Individuation, the hard pivot, is tractable because it's **goal-relative** (dissolving the "undecidable in general" worry), is the **relational sibling of concept-admission** (same soft goal-relative judgment, binary not unary), uses **concrete within-concept signals** (shared referent / manifestation-of / shared goal-role), errs by **splitting** (asymmetric-failure: over-merge hides a concept), and is **incremental** (depth runs re-individuate, converging at a fixpoint). Scoping = identity-resolution + goal-bias + convergence + overload-flag.

*Meta-Inspection (H8 self-reference): defining routelister via the project's own concepts; anchored on `09-53`'s admission gloss + routeman §4.4/§4.5 + the NOT-list. (H4: "goal-relative individuation" = 09-53's goal-relativity applied to same/different, not coined.)*

---

## Phase 2 — Perspective Checking

**Technical / Logical:** the decidability argument is a quantifier move — "undecidable for all goals" (true, vacuous for routelister) vs "decidable given a goal" (what routelister needs). Goal-relativity collapses the universal quantifier the undecidability worry quietly assumed. New anchor → **K10: the "undecidable in general" worry is a scope error (universal vs goal-conditioned); routelister is always goal-conditioned.**

**Human / User:** the user emphasized individuation ("esp.") and wants depth on the *hardest* piece. The honest deliverable is a concrete mechanism (signals + bias + decidability + incrementality), explicitly NOT "it's a judgment," while admitting the irreducible softness (it's calibration-dependent, like the rest of routelister). Pretending it's a crisp algorithm would be the opposite failure.

**Strategic / Long-term:** individuation defined this way unlocks the whole handle-next DAG (it gates the enumeration HOW and the cross-run matching) and is *forward-compatible* with the cross-run model (incremental individuation IS what the cross-run index refines). So resolving it here is the high-leverage move the prior finding predicted.

**Risk / Failure (the non-answer trap):** the dangerous output is "individuation is an LLM judgment, calibrate over time" — true but empty. Guard: the four properties + the concrete signals + the lean-to-split bias are the *mechanism*; calibration is how it sharpens, not what it is. The answer must lead with the mechanism, not the calibration.

**Resource / Feasibility:** the mechanism reuses existing machinery (admission's judgment form, the asymmetric-failure principle, the surfacing traversal) — cheap; the only genuinely new thing is recognizing individuation as admission's relational sibling.

**Definitional / Internal Consistency:** does "borrow surfacing's traversal" contradict the IS-NOT "routelister is NOT /surfacing"? No — sharing a *perception substrate* (perceive a bounded territory) is not being the same discipline; the individuate+prescribe operation is the distinguishing core. New anchor → **K11: shared substrate ≠ same discipline; the IS-NOT holds at the operation level (individuate+prescribe vs relevance-tag).** Does lean-to-split contradict `11-43` compactness? No (K7: near-dup identities ≠ N×M manifestations).

**Definitional / Frame-exit Completeness** (gating: inherited multi-value term in the inquiry's own structure?): the term **"concept-identity"** is used at ≥2 grains — coarse (goal "map the project") vs fine (goal "fix bug X"). *Existence enumeration:* "the identity of concept X" has no value *independent of goal-grain*; it's goal-relative. *Role assessment:* this is not a defect — it IS the K3 resolution (individuation is goal-relative). *Verdict:* the multi-grain-ness of "identity" is the mechanism, not a gap. → **K12: "concept-identity" is inherently goal-grain-relative; that's the answer, not an ambiguity to eliminate.**

**Phase / Calibration-State:** individuation IS calibration-dependent (it sharpens with use, like routeman's calibration trajectory). Required perspective: the early-stage default is the signal-guided + lean-to-split judgment; calibration data (which individuations downstream confirmed) refines it over inquiries. So the mechanism is defined now; its *accuracy* improves with calibration — and that's the honest status, not a gap. → **K13: defined-now, calibration-sharpened (the discipline's standing posture).**

**Self-Reference (failure mode #6):** defining routelister with the project's own concepts. External anchors: `09-53`'s admission gloss (the sibling source); routeman §4.4 (the asymmetric-failure principle, the lean-direction source); the NOT-list (bounds the signals to within-concept); surfacing §2.1 (the sweep substrate). The decidability claim rests on a logical quantifier argument (K10), not on routelister's vocabulary. Check passed.

### SV3 — Multi-Perspective Understanding

The concept-listing HOW is a sweep→individuate→frame procedure, distinct from `/surfacing` at individuate+prescribe. Individuation is tractable because it is goal-conditioned (the undecidability was a universal-quantifier scope error), is concept-admission's relational sibling, uses concrete within-concept signals, leans-to-split (recoverable-failure bias, reinforced by incrementality), and is calibration-sharpened. Scoping re-derives routeman's convergence at identity-resolution with a goal-bias + overload-flag. The mechanism reuses existing machinery; the one new recognition is individuation-as-admission's-sibling.

---

## Phase 3 — Ambiguity Collapse

### Ambiguity 1 — Is identity-individuation decidable, or is `11-43`'s "undecidable in general" worry fatal? (OT3 crux)

**Strongest counter-interpretation:** "Individuation is genuinely undecidable — whether two artifacts are 'the same concept' has no determinate answer; the chain was right to fear it, and routelister's whole unit (concept-identity) rests on an undecidable judgment."

**Why the counter fails (structural grounds):** the undecidability holds only for a *universal, goal-free* partition — 'is X the same concept as Y, full stop?' has no determinate answer because concept-granularity is goal-dependent. But routelister never asks that; it asks 'same concept *relative to this goal+grain*?', and the goal fixes the resolution (relative to "audit auth," hashing and tokens merge; relative to "fix hashing," they split). This is exactly how concept-*admission* (`09-53`) is tractable despite "anything can be a concept" being true in the abstract — the goal bounds it. The counter commits a scope error: it generalizes "undecidable for all goals" to "undecidable given a goal." **Confidence:** HIGH. **Resolution:** individuation is **decidable relative to a goal+grain** (undecidable only as a universal partition, which routelister never needs); the `11-43` worry dissolves. The operator-declared-identity fallback `11-43` floated becomes the LOW-confidence escape hatch for genuinely ambiguous cases, not the primary mechanism.

### Ambiguity 2 — Is individuation a new mechanism, or concept-admission's sibling? (over-unification risk, OT3)

**Strongest counter-interpretation:** "Calling individuation 'admission's sibling' over-unifies — admission asks *membership* ('does X qualify?'), individuation asks *equivalence* ('are X and Y the same?'). Equivalence judgments (transitivity, clustering) are a different and harder beast than membership; treating them as the same hides real complexity."

**Why the counter partially holds and resolves:** it correctly identifies that equivalence ≠ membership (and that equivalence brings transitivity concerns — if X~Y and Y~Z then X~Z, which a naive pairwise judgment can violate). So the claim is NOT "same operation." The claim is **shared FORM**: both are goal-relative, soft, signal-guided, lean-biased, calibration-dependent judgments — so individuation inherits admission's *properties and machinery* rather than needing a new framework. The equivalence-specific concern (transitivity) is real and is handled by the incremental/fixpoint nature (K8): individuation isn't a frozen pairwise partition but an accumulating one that depth runs reconcile, so transitivity violations surface and resolve over runs rather than needing a one-shot consistent partition. **Confidence:** HIGH. **Resolution:** **relational sibling (shared form, inherited properties), not the same operation**; the equivalence-specific transitivity concern is absorbed by incremental individuation, not ignored.

### Ambiguity 3 — Which way does individuation err, and does lean-to-split break compactness? (OT3 + F4)

**Strongest counter-interpretation:** "Lean-to-split re-creates the manifestation-overload `11-43` exists to avoid — splitting fills the breadth map with near-duplicates, exactly the overload the identity-unit was meant to prevent."

**Why the counter fails (structural grounds):** the asymmetric-failure principle decides the direction: over-merge HIDES a concept (it never appears in the breadth list → information-loss-in-the-dark, unrecoverable), while over-split lists a near-duplicate *identity* (visible, and mergeable by a later depth run or the operator). The recoverable failure is split; lean to it. And it does NOT break compactness: `11-43`'s overload is N concepts × M *manifestations* (manifestations listed at the project level); over-split adds a few near-duplicate *identities* — still identity-resolution, a bounded mild over-partition, not the N×M explosion. Different magnitude; the breadth run stays at identity-resolution. Incrementality (K8) makes split even safer (later merges are cheap; missed concepts are gone forever). **Confidence:** HIGH. **Resolution:** **lean-to-split** (the recoverable-failure bias); it does not reopen the manifestation-overload (near-dup identities ≠ N×M manifestations).

### Ambiguity 4 — Is "a soft signal-guided judgment" a real mechanism or a non-answer? (the deliverable-quality crux)

**Counter-interpretation:** "'Use signals, lean to split, calibrate over time' is just 'use your judgment' dressed up — not a definition."

**Why it fails:** a mechanism is defined when it specifies *what inputs the decision uses, how it's biased, and when it's tractable* — which this does: concrete within-concept signals (shared referent / manifestation-of / shared goal-role for same; distinct referent-or-role + separately-routable for different), a bias direction (lean-to-split), a decidability condition (goal-relative), and a refinement path (incremental/fixpoint). What it does NOT do — and should not — is reduce to a crisp algorithm, because the underlying judgment (do these express the same concept relative to this goal?) is irreducibly semantic and calibration-dependent, exactly like concept-admission. "Soft but specified" is the correct shape for a judgment-based discipline; "crisp algorithm" would be the over-formalization failure. **Confidence:** HIGH. **Resolution:** the mechanism is real (signals + bias + decidability + refinement); its irreducible softness is a property of the judgment, not a gap — and it is calibration-sharpened (defined-now, accuracy-improves-with-use).

### Ambiguity 5 — Does the sweep collapse routelister into `/surfacing`? (OT1)

**Counter-interpretation:** "If step 1 IS surfacing's traversal, routelister is just /surfacing with extra steps — violating its IS-NOT."

**Why it fails:** sharing a *perception substrate* (perceive a bounded territory by drawing items into attention) is not being the same discipline. `/surfacing` *terminates* at relevance-tagged items (descriptive); routelister's core is steps 2–3 (individuate items into identities + frame each as a typed prescriptive route). The distinguishing operation — individuate-and-prescribe — is exactly what `/surfacing` does not do. So the IS-NOT holds at the operation level. **Confidence:** HIGH. **Resolution:** shared sweep substrate, distinct individuate+prescribe operation; routelister is not `/surfacing`-plus.

---

### SV4 — Disambiguated Understanding

All five ambiguities resolve at HIGH confidence. Individuation is decidable (goal-relative; the "undecidable" worry was a universal-quantifier scope error); it is concept-admission's relational sibling (shared soft goal-relative form, with the equivalence-specific transitivity concern absorbed by incrementality); it errs by splitting (recoverable-failure bias, not reopening the manifestation-overload); it is a real mechanism (concrete signals + bias + decidability + refinement), irreducibly soft and calibration-sharpened; and the sweep shares `/surfacing`'s substrate without collapsing into it (individuate+prescribe is the distinct core). The concept-listing HOW is thereby defined as a mechanism.

---

## Phase 4 — Degrees-of-Freedom Reduction

**Fixed:**
- Enumeration = **sweep → individuate → frame** (distinct from `/surfacing` at individuate+prescribe).
- Individuation: goal-relative (decidable; dissolves "undecidable in general"); admission's relational sibling (shared form); concrete within-concept signals (referent / manifestation-of / goal-role); **lean-to-split**; incremental/fixpoint; soft + calibration-sharpened.
- Scoping = identity-resolution + goal-bias + convergence-trigger + overload frontier-flag.
- OT0: the concept-listing HOW is now DEFINED as a mechanism (the linchpin resolved); residue = structural schema + inherent softness/calibration (acceptable).

**Eliminated:**
- "Individuation is undecidable" — KILLED (decidable goal-relative; universal-quantifier scope error).
- "Individuation is a new mechanism" — KILLED (admission's relational sibling).
- "Lean-to-merge / merge-when-uncertain" — KILLED (over-merge hides concepts; lean-to-split).
- "Lean-to-split breaks compactness" — KILLED (near-dup identities ≠ N×M manifestations).
- "It's just a judgment" — KILLED (signals + bias + decidability + refinement = a real mechanism).
- "Enumeration = /surfacing" — KILLED (distinct individuate+prescribe operation).

**Remaining viable (downstream; out of scope):**
- The structural schema for recording the identity set + individuation decisions (the cross-run index from `21-01`) — structural.
- The exact calibration trajectory (how individuation accuracy is tracked over inquiries) — process-telemetry, downstream.
- Whether the operator-declared-identity fallback needs a defined interface — minor, structural.

### SV5 — Constrained Understanding

routelister's concept-listing is **sweep → individuate → frame**. The pivot, identity-individuation, is a **goal-relative, soft, signal-guided judgment** — concept-admission's relational sibling — that **leans to split** under uncertainty (the recoverable failure), uses within-concept signals (shared referent / manifestation-of / shared goal-role), is **incremental** (depth runs re-individuate, converging at a fixpoint), and is **decidable relative to a goal+grain** (the "undecidable in general" worry was a universal-quantifier scope error). Scoping re-derives routeman's convergence at identity-resolution with a goal-bias and an overload frontier-flag. The HOW is defined as a mechanism; what remains is the structural schema and the inherent calibration-dependence.

---

## Phase 5 — Conceptual Stabilization

*Accommodation check: the perspectives converged (each sharpened the individuation mechanism — the quantifier resolution, the sibling-form, the lean-to-split asymmetry, the incrementality); none destabilized. Stable.*

### SV6 — Stabilized Model — Routelister's Concept-Listing Mechanism

**routelister's concept-listing is one procedure in three steps, and its hard pivot — identity-individuation — is a concrete, tractable, goal-relative judgment, not an open mystery.**

**The procedure (OT1): sweep → individuate → frame.**
1. **Sweep** — perceive the territory by drawing candidate items into attention, biased by the goal (the concept-admission gloss, `09-53`, decides what counts as a candidate). This is structurally the `/surfacing` traversal (routelister *perceives-by-enumerating*, `12-44`).
2. **Individuate** — group the swept items into **concept-identities** (the same/different judgment, below). This is the step that lifts item-granularity (where `/surfacing` stops) to identity-granularity (routelister's unit).
3. **Frame** — cast each identity as a typed prescriptive route (grain × kind × engagement-type, `18-17`).
routelister stays distinct from `/surfacing` at steps 2–3: `/surfacing` relevance-*tags items*; routelister *individuates-and-prescribes*. The sweep substrate is shared; the individuate-and-prescribe operation is routelister's core.

**Identity-individuation (OT3, the emphasized pivot) — four properties that together are its mechanism:**
- **Goal-relative (this is what makes it decidable).** "Is X the same concept as Y?" has no goal-free answer — concept-granularity depends on why you're asking. But relative to a *fixed goal+grain* it is a tractable judgment (relative to "audit auth," hashing and tokens merge into "authentication"; relative to "fix the hashing bug," they split). `11-43`'s fear that individuation is "undecidable in general" was a scope error: undecidable *for all goals at once* (true, and irrelevant), decidable *given a goal* (what routelister always has). This is the same move that makes concept-*admission* tractable (`09-53`).
- **The relational sibling of concept-admission.** Admission asks the unary "is X a concept (relative to the goal)?"; individuation asks the binary "is X the same as Y (relative to the goal)?" Same kind of judgment — soft, goal-relative, signal-guided, lean-biased, calibration-dependent — so individuation inherits admission's machinery rather than needing a new framework. (It is a sibling in *form*, not the same operation: equivalence is not membership, and the equivalence-specific transitivity concern is handled by the incremental nature below, not ignored.)
- **Signal-guided, with concrete signals (so this is a mechanism, not "use your judgment").** SAME-identity signals — *shared referent* (X and Y are about the same thing: the README's feature and the code implementing it), *manifestation-of* (one describes/implements/versions the other's underlying thing), *shared goal-role*. DIFFERENT signals — *distinct referents*, *distinct goal-roles*, *separately-routable* (you'd route to them via different engagement-types). Only within-concept evidence is used (the NOT-list forbids building inter-concept relations). The judgment weighs these signals; it is irreducibly soft (calibration-dependent, like all of routelister's judgments) — which is the correct shape for a judgment-based discipline, not a defect.
- **Lean-to-split, and incremental.** Under uncertainty, **err toward splitting**, because the two failure modes are asymmetric: over-merge *hides* a concept (it never reaches the breadth list — information-loss-in-the-dark, unrecoverable), while over-split lists a near-duplicate identity (visible, and mergeable later). And individuation is **incremental**: a depth run can reveal that one listed identity is really two, or that two are really one, feeding back a re-individuation that converges at a fixpoint (the `21-01` cross-run model). Incrementality reinforces lean-to-split — a later depth run can merge an over-split, but can never recover an over-merged (un-listed) concept.

**Breadth-scoping / completeness (OT2).** Re-deriving routeman's convergence (§4.5) at routelister's identity-resolution: a root run is **done** when the territory has been swept at *identity* resolution (every goal-relevant identity surfaced and individuated), uncertain individuations included (lean-to-split), and a sweep cycle yields no new identities. Overload is avoided by three guards: *identity-resolution* (list identities, not manifestations — `11-43`, the primary guard); *goal-bias* (only goal-relevant identities — `09-53`); and a *workspace-overload frontier-flag* (if a territory has too many identities even at identity-resolution, signal sub-territories rather than dump — `surfacing` §4.5 / `14-58`). Lean-to-split does not breach this: it adds a few near-duplicate *identities*, not the N×M *manifestation* overload `11-43` forbids.

**OT0 — is the concept-listing HOW now defined?** YES, as a mechanism — the linchpin is resolved. Enumeration is sweep→individuate→frame; scoping is identity-resolution + goal-bias + convergence + overload-flag; individuation is the goal-relative, admission-sibling, signal-guided, lean-to-split, incremental judgment above. What remains is *structural* (the schema for recording the identity set + individuation decisions — the cross-run index) and *inherent* (individuation is soft and calibration-sharpened — defined now, accuracy improving with use). Resolving individuation here unblocks the rest of routelister's handle-next DAG, exactly as the prior finding predicted.

**How SV6 differs from SV1:** SV1 expected sweep→individuate→frame and "individuation is tractable because goal-relative." SV6 establishes *why* (the universal-quantifier scope error), *what individuation concretely is* (admission's relational sibling + concrete within-concept signals + lean-to-split + incremental), *why it errs by splitting* (the recoverable-failure asymmetry, reinforced by incrementality), *why it's a mechanism not a non-answer* (signals + bias + decidability + refinement, with softness as a property not a gap), and *why the sweep doesn't collapse routelister into `/surfacing`* (individuate+prescribe is the distinct core) — and resolves the chain's standing open frontier.

---

## Saturation / Telemetry

- **Perspective saturation:** saturating (later perspectives sharpened the individuation mechanism; none destabilized).
- **Ambiguity resolution ratio:** 5/5 HIGH; 0 OPEN.
- **SV delta:** large (SV1 "sweep→individuate→frame; individuation tractable" → SV6 the full individuation mechanism + the decidability resolution + lean-to-split + incrementality + the /surfacing-distinction + the scoping criteria).
- **Anchor diversity:** multi-pillar (the quantifier-scope decidability argument, the admission-sibling form, the concrete signals, the asymmetric-failure lean-to-split, the incremental/fixpoint reinforcement, the surfacing-substrate distinction).
- **Failure modes checked:** Status Quo Bias (didn't leave individuation "open"; defined it); **Self-Reference — guarded (decidability rests on a logical quantifier argument + external anchors: 09-53 gloss, routeman §4.4, the NOT-list, surfacing §2.1)**; Clean Resolution Trap (the "it's a judgment" easy non-answer + the "undecidable, fear was right" easy resolution both tested + rejected on structural grounds); Premature Stabilization (the over-unification counter [equivalence≠membership] + the lean-to-split-breaks-compactness counter genuinely tested); Perspective Blindness (the uncomfortable "it's undecidable" / "it's a non-answer" / "it's just /surfacing" readings all checked); Frame-exit ("concept-identity" enumerated as goal-grain-relative — the answer, not a gap).

**Handoff to Decomposition:** structure to partition — (1) the enumeration procedure (sweep→individuate→frame; the /surfacing-distinction); (2) the individuation mechanism (goal-relative decidability + admission-sibling + concrete signals + lean-to-split + incremental); (3) the breadth-scoping/completeness criteria; (4) the failure-asymmetry + the 11-43 reconciliation; (5) OT0 (HOW now defined; residue = schema + calibration); (6) synthesis + the chain/spec re-test. Candidate sub-questions for /decompose.
