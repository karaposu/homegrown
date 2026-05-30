## User Input

`devdocs/inquiries/2026-05-29_21-01__routelister_output_and_cross_run_behavior/_branch.md` (prior output: surfacing.md; workspace — chain + routeman §3.5/§3.6/§5.8). Answer: what to define next + the 5 sub-Qs, esp. whether the cross-run-enrichment (root reads prior concept-target runs) is defined.

---

# Structural Sensemaking — Routelister Output + Cross-Run Behavior

## SV1 — Baseline Understanding

Initial read: the 5 questions look heterogeneous but mostly resolve to one thing — routelister's **cross-run state model is undefined**, and the rest is "meaning settled / process-and-schema open." OT3 (per-mode difference) is the exception — it's defined (the grain axis). OT4 (self-re-run) and OT5 (cross-target enrichment) look like two scopes of the same missing model. The user's OT5 behavior is sound but probably blocked on identity-individuation (the chain's standing open frontier). The hard work: give honest per-question verdicts, NOT conflate routeman's same-map re-invocation with the user's cross-target aggregation, and order the remaining work by dependency.

---

## Phase 1 — Cognitive Anchor Extraction

**Constraints:**
- C1 — Process-layer primary (cross-run runtime behavior). Meaning is inherited-settled; output-artifact schema is structural-downstream.
- C2 — Synthesis: re-test routeman's re-invocation machinery through the `18-17` loop-bound lens — don't claim "defined" by pointing at loop-built machinery that doesn't transfer.
- C3 — Five distinct sub-questions; each gets its own verdict (defined / partial / undefined). Don't average them.

**Key Insights:**
- K1 — **OT3 is DEFINED: output differs by GRAIN.** A root (project-space breadth) run emits one route per concept-IDENTITY across the territory (compact — identities, not manifestations); a concept-targeted (concept-space depth) run emits ONE identity's manifestations as routes, plus divergences as epistemic routes (`11-43`). This IS the grain axis from `18-17`. Best-defined of the five.
- K2 — **OT1 is PARTIAL: the WHAT of concept-listing is defined; the HOW is not.** Defined: identify concept-identities engageable as routes toward a (possibly fuzzy) goal, list each as a typed route (grain×kind×engagement-type). NOT defined: (a) the enumeration *mechanism* (how it actually traverses a territory and surfaces identities); (b) **identity-individuation** (how it decides two artifacts are the same identity vs different concepts — the chain's one open component); (c) breadth-scoping/completeness (when is a root run "done"; overload-avoidance beyond "goal-bias"). The linchpin gap is **individuation**.
- K3 — **OT2 is PARTIAL: the output's KIND is clear; its FORM is not.** Clear (`14-58`): a root run returns the project's concept-identities, each as a typed prescriptive route (project-space grain). NOT authored: the route-record *schema* (the `18-17` signature rendered as fields), the map wrapper, the persisted `routelister.md` *file format* — structural, deferred (and routeman's §5.4/§5.5 are loop-contaminated, un-re-derived).
- K4 — **OT4 (self-re-run) and OT5 (cross-target) are the SAME underlying question at two scopes:** does a run READ prior runs' outputs? OT4 = read its OWN prior output (root→root, same target); OT5 = read OTHER runs' outputs (root reads concept-A/B, different targets). Both are facets of routelister's **cross-run memory model**, which is undefined.
- K5 — **routeman does NOT define the user's OT5 behavior.** routeman's §3.5/§5.8 is **same-map re-invocation** — extend ONE inquiry's map across re-invocations, via a per-folder `_route.md`, using REVISIT. The user's OT5 is **cross-target aggregation** — a breadth run reading SEPARATE concept-target runs. Different shape. AND routeman's mechanism is built on REVISIT (a loop-control type that DOESN'T transfer per `18-17`) + per-Route Status (loop-relative reachability). So routeman is at best a *partial template that must be re-derived*, not a definition that already covers OT5.
- K6 — **OT5 is SOUND and SHOULD be defined, but it is the CAPSTONE — it depends on three things, two of them upstream:** (a) **identity-individuation** (to match concept-A across the root run and the concept-A run — open frontier, BLOCKS OT5); (b) the **output-artifact + cross-run-state schema** (you can't read prior runs without a defined persisted form — structural, downstream); (c) the **enrich-not-dump guard** (definable now): a root run reading depth runs must enrich identity-level routes with depth *signals* (e.g., "concept A: drilled; unresolved README-vs-impl divergence → high-value epistemic route"), NOT dump A's manifestations into the breadth map (which would re-create the overload `11-43` exists to avoid).
- K7 — **The principled OT4 answer: idempotent at a fixpoint.** A routelister run on unchanged territory+goal converges to the same map; re-running reproduces it (routeman §3.6 idempotency, extended across invocations). Reading prior runs as prior-art *accelerates convergence / refines individuation* but does not move the fixpoint — so the cross-run memory model **refines, it does not drift.** Idempotency is the guarantee that makes the cross-run model safe.
- K8 — **The handle-next work is dependency-ordered, with individuation as the linchpin** (it blocks OT1's HOW and OT5's matching).

**Structural Points:**
- S1 — The 5 questions map to a dependency chain: **individuation → enumeration/scoping → output-schema → cross-run memory model (OT4 idempotency + OT5 cross-target enrichment)**.
- S2 — Recurring shape: *meaning-settled / process-and-schema-open*. The chain settled what routelister IS; what's left is HOW it runs and what its artifact looks like.

**Foundational Principles:**
- P1 — A cross-run memory model must be idempotent-at-fixpoint (refine, not drift). [K7]
- P2 — Enrichment must respect the breadth-compactness invariant (enrich identity-routes with depth-signals, don't dump manifestations). [11-43]
- P3 — Carried routeman machinery (re-invocation/state) is loop-bound-tested per component before transfer. [18-17, carried]

**Meaning-Nodes:**
- M1 — *cross-run memory model (unifies OT4+OT5)*; M2 — *individuation = the linchpin*; M3 — *same-map ≠ cross-target*; M4 — *enrich-not-dump*; M5 — *idempotent-at-fixpoint*; M6 — *meaning-settled/process-open*.

### SV2 — Anchor-Informed Understanding

The 5 questions resolve into a dependency-ordered map of routelister's remaining work, sharing a linchpin (**identity-individuation**). OT3 is DEFINED (grain). OT1/OT2 are PARTIAL (meaning settled; enumeration/individuation + artifact-schema open). OT4 and OT5 are the SAME missing thing — the cross-run memory model — at two scopes (self-re-run / cross-target). The user's OT5 is sound and should be defined, but is the CAPSTONE: blocked on individuation + the output-schema, governed by enrich-not-dump + idempotency-at-fixpoint. routeman's re-invocation machinery is a different shape (same-map, loop-built) — a partial template, not a definition of OT5.

*Meta-Inspection (H8 self-reference): designing routelister using the project's own concepts; anchored on routeman's actual §3.5/§5.8 + the 18-17 loop-bound test. (H4: "cross-run memory model" = routeman's re-invocation/`_route.md` re-derived, not coined.)*

---

## Phase 2 — Perspective Checking

**Technical / Logical:** the dependency chain is a real DAG — individuation feeds both the enumeration HOW and the cross-run matching; the output-schema must exist before runs can read each other. So OT5 (the user's headline) is provably the most downstream. New anchor → **K9: OT5 cannot be the next thing built; its prerequisites (individuation, output-schema) are upstream.**

**Human / User:** the user already *told us what should happen* in OT5 (root reads prior concept-target runs to enrich itself) — they're not asking permission, they're asking "is it defined?" The honest, respectful answer: "No, it's not defined; your behavior is sound and worth defining; here's exactly what it depends on and why it's the capstone, not the next step." Confirming their design intent while sequencing it correctly is the precise move.

**Strategic / Long-term:** defining the cross-run memory model is what makes routelister's two axes *compose into a growing knowledge base* (depth runs feed breadth runs) — the navigation endgoal. So OT5 is high-value; it's just gated. The sequencing (individuation first) is what makes it buildable.

**Risk / Failure (the conflation trap):** the dangerous answer is "OT5 is basically defined — routeman has re-invocation + `_route.md`." That conflates same-map re-invocation with cross-target aggregation and ignores that the machinery is REVISIT-built (doesn't transfer). Guard: state the shape-difference explicitly and re-test routeman's machinery through the loop-bound lens.

**Resource / Feasibility:** the enrich-not-dump guard and the idempotency-at-fixpoint principle are definable NOW (meaning/process, cheap); individuation and the schema are heavier. So part of OT4/OT5 (the governing principles) can be settled immediately; the mechanism waits on the prerequisites.

**Definitional / Internal Consistency:** does "a root run reads prior depth runs" contradict "routelister is standalone / not loop-bound"? No — reading prior *routelister* runs is using its own persisted prior-art (a re-invocation parameter), not depending on a cognitive cycle; standalone means "needs no loop," not "stateless." New anchor → **K10: cross-run memory ≠ loop-binding; standalone permits persisted prior-art (routeman's re-invocation is itself standalone-compatible).**

**Definitional / Frame-exit Completeness** (gating: inherited multi-value term across ≥2 distinct values in the inquiry's own structure?): the term **"run"** is used at ≥2 referents — a root (breadth) run vs a concept-targeted (depth) run, and a first run vs a re-run. *Existence enumeration:* "run" project-wide = {root/breadth run; concept-target/depth run; self-re-run; cross-target-reading run}. *Role assessment:* OT4 is about self-re-run; OT5 about cross-target-reading; conflating them (as "re-run") would hide that they need the SAME model but at different scopes. *Verdict rigor:* K4 (same-model-two-scopes) is the resolution. → **K11: "run" is multi-referent; OT4/OT5 are distinct scopes of one cross-run model.**

**Phase / Calibration-State:** N/A (the answer doesn't depend on a project phase).

**Self-Reference (failure mode #6):** designing routelister with the project's own concepts. External anchors: routeman's *actual* §3.5/§3.6/§5.8 text (the same-map model + REVISIT dependency, read this turn); the `18-17` loop-bound test (an external prior); the `11-43` compactness commitment. The verdict's willingness to say "routeman does NOT define OT5" (rather than claiming the machinery covers it) is the guard against a self-confirming "it's basically handled." Check passed.

### SV3 — Multi-Perspective Understanding

The 5 questions form a dependency DAG with individuation as the linchpin. OT3 defined (grain); OT1/OT2 partial (meaning settled, HOW/schema open); OT4/OT5 = the undefined cross-run memory model at two scopes. The user's OT5 is sound but the capstone — gated on individuation + the output-schema, governed by enrich-not-dump + idempotency-at-fixpoint; routeman's machinery is a different (same-map, loop-built) shape, a partial template not a definition. Cross-run memory ≠ loop-binding (standalone permits persisted prior-art).

---

## Phase 3 — Ambiguity Collapse

### Ambiguity 1 — Is the cross-run-enrichment (OT5) "defined" via routeman's re-invocation machinery? (the headline)

**Strongest counter-interpretation:** "It IS effectively defined — routeman has §3.5 re-invocation + the `_route.md` state file + cross-cycle reading. routelister carries routeman's machinery (per `10-25`), so the behavior is inherited."

**Why the counter fails (structural grounds):** two independent reasons. (1) **Different shape:** routeman's re-invocation is *same-map extension* — re-invoke ONE inquiry's map, reading that same folder's `_route.md` to resurrect/revise its OWN prior routes. The user's OT5 is *cross-target aggregation* — a breadth run discovering and reading SEPARATE concept-target runs' outputs. routeman has no mechanism for one run to find-and-absorb other independent runs' maps; its `_route.md` is per-inquiry-folder continuity, not a cross-run index. (2) **Loop-built:** routeman's cross-run extension uses REVISIT (resurrect/invalidate/revert prior-cycle verdicts) + per-Route Status (loop-relative reachability) — and `18-17` ruled REVISIT one of the 7 loop-control types that DON'T transfer. So even the same-map model can't be carried wholesale; it must be re-derived. Therefore routeman is a *partial template*, not a definition that covers OT5. **Confidence:** HIGH. **Resolution:** OT5 is **NOT defined** — neither by the routelister chain nor (in the user's shape) by routeman's machinery.

### Ambiguity 2 — Are OT4 (self-re-run) and OT5 (cross-target) the same question or two?

**Counter-interpretation:** "They're different — OT4 is about idempotency, OT5 is about aggregation; separate answers."

**Why it partially holds and ultimately resolves to 'same model':** they have different *surface* answers (OT4: idempotent-at-fixpoint; OT5: enrich from other targets), but both reduce to one design decision — **does a run read prior runs' persisted outputs, and how does it integrate them?** OT4 reads its own prior (same target); OT5 reads others' (different targets). The same persisted-state + read-prior + integrate mechanism serves both; only the *scope of what's read* differs (own-folder vs cross-target index). So they are two scopes of **one cross-run memory model**, and defining that model answers both. **Confidence:** HIGH. **Resolution:** distinct surface answers, ONE underlying model (the cross-run memory model); design it once, parameterized by scope.

### Ambiguity 3 — Does OT5's enrichment violate the breadth-run compactness (11-43)?

**Strongest counter-interpretation:** "If a root run reads concept-A's depth run and folds in its content, the breadth map fills with A's manifestations — exactly the overload `11-43` forbids. So the user's behavior contradicts a settled commitment."

**Why the counter fails (structural grounds):** only if enrichment = *dumping manifestations*. The correct form is **enrich-not-dump**: the root run reads the depth run to (a) confirm/refine individuation of A, and (b) attach to A's identity-level route a compact depth-*signal* — "A has been drilled; it carries an unresolved README-vs-implementation divergence (a high-value epistemic route is available on drill-down)." That keeps the breadth map at one-route-per-identity (compact) while making it *smarter* about which identities have depth and what that depth found. So enrichment and compactness coexist under the guard. **Confidence:** HIGH. **Resolution:** no violation — the enrich-not-dump guard preserves compactness; enrichment adds depth-signals to identity-routes, not manifestations to the map.

### Ambiguity 4 — Is concept-listing logic (OT1) "defined well enough"?

**Counter-interpretation:** "The chain defined routelister thoroughly — listing is defined."

**Why it fails:** "defined" must be relative to a layer. The *meaning* of listing (identify identities as typed routes) is well-defined; the *mechanism* is not — specifically the enumeration procedure, the breadth-scoping/stopping, and above all **identity-individuation** (12-44's explicitly-open component). "Well enough" for a meaning-layer definition: yes. For a process spec you could implement: no — individuation is load-bearing and undefined. **Confidence:** HIGH. **Resolution:** PARTIAL — meaning-defined, process-undefined; the linchpin missing piece is individuation (which also gates OT5).

### Ambiguity 5 — Load-bearing concept + self-reference: is "cross-run memory model" the project's real frame or coined to make the answer land?

**Counter:** "it's a neologism."

**Why it fails:** it is routeman's own re-invocation + `_route.md` state concept (§3.5/§5.8), re-derived for routelister's two-axis ontology; the *concept* (persisted cross-invocation state + read-prior + integrate) pre-exists. This inquiry only (a) recognizes routelister's version is undefined, (b) notes the shape-difference (same-map → +cross-target), and (c) applies the loop-bound test. Grounded, not coined. **Confidence:** HIGH. **Resolution:** grounded in routeman §3.5/§5.8, re-derived.

---

### SV4 — Disambiguated Understanding

All five ambiguities resolve at HIGH confidence. OT5 is NOT defined (routeman's machinery is a different shape — same-map vs cross-target — and loop-built); OT4 and OT5 are two scopes of ONE undefined cross-run memory model; the user's enrichment is sound and compatible with breadth-compactness *under the enrich-not-dump guard*; OT1 is meaning-defined / process-undefined with **individuation** the linchpin; the cross-run-memory frame is routeman's own concept re-derived. The remaining work is a dependency DAG: individuation → enumeration/scoping → output-schema → cross-run memory model.

---

## Phase 4 — Degrees-of-Freedom Reduction

**Fixed:**
- OT3 = DEFINED (output differs by grain: identities vs manifestations).
- OT1 = PARTIAL (meaning yes; enumeration + individuation + scoping no).
- OT2 = PARTIAL (output KIND clear; artifact FORM/schema not authored).
- OT4 = UNDEFINED → principled answer: idempotent-at-fixpoint (re-run converges; reading prior refines, doesn't drift).
- OT5 = UNDEFINED; SOUND + SHOULD be defined; the CAPSTONE — gated on individuation + output-schema; governed by enrich-not-dump + idempotency.
- OT4 + OT5 = one cross-run memory model at two scopes.
- routeman's re-invocation machinery = partial template (same-map, loop-built), re-derive per loop-bound test; does not define OT5.
- Handle-next DAG: **individuation → enumeration/scoping → output-schema → cross-run memory model (OT4+OT5)**; individuation is the linchpin.

**Eliminated:**
- "OT5 is already defined via routeman" — KILLED (different shape + loop-built).
- "OT4 and OT5 are unrelated" — KILLED (one model, two scopes).
- "OT5 violates compactness" — KILLED (enrich-not-dump).
- "concept-listing is fully defined" — KILLED (process/individuation open).
- "OT5 can be built next" — KILLED (gated on individuation + schema).

**Remaining viable (downstream; out of scope):**
- Authoring the output-artifact schema + the persisted cross-run state file (structural).
- The exact individuation mechanism (its own process inquiry).
- The discovery/storage/registry for cross-target runs (runner-composition + structural).

### SV5 — Constrained Understanding

routelister's remaining definitional work is a dependency DAG with **identity-individuation as the linchpin**: individuation → enumeration/breadth-scoping → output-artifact schema → cross-run memory model. Per question: OT3 defined (grain); OT1/OT2 partial (meaning settled, mechanism/schema open); OT4/OT5 undefined and unified as the cross-run memory model at two scopes. The user's OT5 (root reads prior concept-target runs) is sound and should be defined, but is the capstone — gated on individuation + the output-schema, governed by the enrich-not-dump guard and idempotency-at-fixpoint; routeman's same-map, REVISIT-built re-invocation is a partial template to re-derive, not a definition of it.

---

## Phase 5 — Conceptual Stabilization

*Accommodation check: the perspectives converged (each sharpened the DAG / the enrich-not-dump guard / the same-model-two-scopes); none destabilized. Stable.*

### SV6 — Stabilized Model — What To Define Next, and the Five Answers

**The five questions resolve into one dependency-ordered map of routelister's remaining work, sharing a single linchpin — identity-individuation — and the user's headline behavior (OT5) is a sound capstone that sits at the end of that chain, not the next step.**

**Per-question verdicts:**

| # | Question | Verdict | Why |
|---|---|---|---|
| **OT3** | Does output differ per root vs concept-target run? | **DEFINED** | The grain axis (`18-17`/`11-43`): root → concept-*identities* (breadth, compact); concept-target → one identity's *manifestations* + divergences (depth). The clearest of the five. |
| **OT1** | Is concept-listing logic defined well enough? | **PARTIAL** | The WHAT is defined (identify identities as typed routes). The HOW is not: the enumeration mechanism, breadth-scoping/stopping, and **identity-individuation** (the chain's one open component) are undefined. |
| **OT2** | Is the root-run output clear? | **PARTIAL** | The output's KIND is clear (a compact list of the project's concept-identities, each a typed prescriptive route). The output's FORM — the route-record schema + the persisted `routelister.md` format — is not authored (structural; routeman's §5.4/§5.8 need loop-bound re-derivation). |
| **OT4** | Two sequential root runs? | **UNDEFINED → principled answer: idempotent-at-fixpoint** | Same territory+goal → the re-run converges to the same map (routeman §3.6 idempotency, extended across invocations). Reading the prior run as prior-art refines/accelerates but doesn't move the fixpoint — the cross-run model *refines, doesn't drift*. Needs to be decided/encoded. |
| **OT5** | root → A → B → root: does the root run read the prior concept-target runs to enrich itself? Is it defined? | **NOT DEFINED — but sound and should be; it is the capstone** | Neither the chain nor routeman defines it. routeman's re-invocation is *same-map* (extend one inquiry's map via per-folder `_route.md`), not *cross-target aggregation*, and is built on REVISIT (a loop-control type that doesn't transfer). The user's behavior is the right design — but it depends on **(1) identity-individuation** (to match concept A across runs — open), **(2) the output-artifact + cross-run-state schema** (to have something to read/write — structural, downstream), and **(3) the enrich-not-dump guard** (read depth runs to attach compact depth-*signals* to identity-routes — "A is drilled; has an unresolved divergence → epistemic route available" — NOT to dump A's manifestations into the breadth map). |

**OT0 — what to handle next (the dependency-ordered enumeration):**

1. **Identity-individuation** (process; the linchpin). How routelister decides two artifacts are the same concept-identity vs different concepts. **Blocks OT1's HOW and OT5's cross-run matching.** Define first.
2. **The enumeration + breadth-scoping mechanism** (process). How routelister traverses a territory to surface identities, and when a breadth run is "done" (overload-avoidance beyond goal-bias). Builds on individuation.
3. **The output-artifact contract** (structural). The route-record schema (the `18-17` grain×kind×engagement-type signature as fields) + the map wrapper + the persisted `routelister.md` format — re-deriving routeman's §5.4/§5.5 per the loop-bound test. Answers OT2's FORM.
4. **The cross-run memory model** (process + structural; the capstone — OT4 + OT5). A re-derived analog of routeman's re-invocation + `_route.md`, covering BOTH self-re-run idempotency (OT4) AND cross-target enrichment (OT5), with the discovery/storage/registry for finding prior runs and the enrich-not-dump + idempotency-at-fixpoint guards. Depends on (1) and (3).

**The two governing principles (definable now, ahead of the mechanisms):**
- **Idempotency-at-fixpoint** — runs on unchanged input converge to the same map; reading prior runs refines, never drifts. (Makes the cross-run model safe.)
- **Enrich-not-dump** — a run reading other runs attaches compact depth-*signals* to identity-routes; it never dumps manifestations into a breadth map (preserves `11-43` compactness).

**One reusable correction carried in:** routeman's re-invocation machinery (§3.5/§5.8) is NOT a ready definition for routelister's cross-run behavior — it is *same-map* (one inquiry's evolving map), whereas the user wants *cross-target aggregation*; and it is REVISIT-built (loop-control, doesn't transfer per `18-17`). So it is a partial template to re-derive under the loop-bound test, exactly as that finding warned for every carried machinery component.

**How SV6 differs from SV1:** SV1 guessed "cross-run model undefined; OT5 blocked on individuation." SV6 gives per-question verdicts (OT3 defined; OT1/OT2 partial; OT4 idempotent-at-fixpoint; OT5 not-defined-but-sound-capstone), unifies OT4+OT5 as one model at two scopes, proves OT5 is gated (the dependency DAG with individuation as linchpin), supplies the two governing principles (idempotency-at-fixpoint, enrich-not-dump), and shows precisely why routeman's machinery doesn't already cover it (same-map vs cross-target + loop-built).

---

## Saturation / Telemetry

- **Perspective saturation:** saturating (later perspectives sharpened the DAG/guards; none destabilized).
- **Ambiguity resolution ratio:** 5/5 HIGH; 0 OPEN.
- **SV delta:** large (SV1 "cross-run undefined, OT5 blocked" → SV6 full per-question verdicts + the dependency DAG + the two governing principles + the routeman shape-difference).
- **Anchor diversity:** multi-pillar (the grain answer, the meaning/process split, the same-map-vs-cross-target distinction, the one-model-two-scopes unification, the enrich-not-dump guard, idempotency-at-fixpoint, the individuation linchpin).
- **Failure modes checked:** Status Quo Bias (didn't claim "routeman already defines it"); **Self-Reference (designing routelister via project concepts) — guarded by anchoring on routeman's actual §3.5/§5.8 + the 18-17 test + the willingness to say "routeman does NOT define OT5"**; Clean Resolution Trap (the "routeman covers it" tempting resolution tested + rejected in Amb.1); Premature Stabilization (the "OT4≠OT5" and "enrichment violates compactness" counters genuinely tested); Perspective Blindness (the uncomfortable "it's already defined" + "the user's behavior breaks compactness" readings checked); Frame-exit ("run" enumerated as multi-referent — root/depth/self-re-run/cross-target).

**Handoff to Decomposition:** structure to partition — (1) the per-question verdicts (OT1–OT5); (2) the cross-run memory model (OT4 idempotency + OT5 cross-target) as one model at two scopes; (3) the enrich-not-dump + idempotency-at-fixpoint guards; (4) the routeman shape-difference + loop-bound re-derivation; (5) the dependency-ordered handle-next DAG (individuation → enumeration/scoping → output-schema → cross-run model); (6) synthesis + the routeman/chain re-test. Candidate sub-questions for /decompose.
