## User Input

devdocs/inquiries/2026-07-08_23-46__fetch_loop_as_reusable_discipline_extract_and_generalize/_branch.md — (DESIGN dive, Sensemaking = stabilize the evaluation: is extracting fetch_loop beneficial, in what form, and when. Central move = decompose the proposal into RIGHT-parts (affirm) and MIS-FORMED-parts (correct); guard both ways; Phase/Calibration-State + Self-reference + Status-quo-bias perspectives required. Full spec in the instruction.)

---

# Sensemaking — stabilizing the fetch_loop decision model

## SV1 — Baseline
The user thinks articulate+surfacing+articulate_warm was a "fetch loop" and proposes extracting a reusable `fetch_loop` skill (like traverse), integrating it into traverse, and letting other disciplines trigger it — but isn't sure it's beneficial. Initial read: probably a real pattern, but the "skill + big refactor now" framing needs testing.

## Phase 1 — Cognitive anchors

**Constraints**
- **The project's own rule:** *"two instances justify a protocol; one is an observation"* (MVLFamily §4 + DEFERRED). A hard, self-imposed extraction gate.
- **Anti-speculation + resist-proliferation:** *"until the need is observed, building it would be speculative"*; *"maintain exactly one worker-loop runner."* Canon.
- **Traverse's composition is LINEAR** (each discipline once, strictly nested) — a fixed fact about the analogized artifact.

**Key insights**
- ★ **A-REAL-BUT-N1 (the survey result).** The generalization is REAL — the three-part structure (need-emit → re-invocable fetch → convergence) genuinely recurs at sensemaking↔surfacing (latent) — but only **N=1 is WIRED** (articulate↔surfacing). Genuine-structure-recurrence and wired-instance-count are *different* measures.
- ★ **A-CAPABILITY-NOT-SKILL.** The loop is a CONVERGENCE loop, runner-owned (surfacing §3.7); traverse is a LINEAR pipeline. "A fetch_loop skill like traverse" is a **category mismatch**. The natural form is a **runner-owned capability** (a callable re-invoke-until-need-stabilizes primitive), not a skill, not a discipline.
- ★ **A-BIG-REFACTOR-DISSOLVES.** "Big refactor" is an artifact of the skill/engine framing. As a capability, it's small.
- **A-CAPABILITY-UNLOCK-LATENT.** The strongest pro-motive is real (sensemaking-that-lacks-material currently *can't* re-surface) but latent, not pressing → confirms *seed*, not *build*.

**Structural points**
- The proposal decomposes into **RIGHT-parts** (recognition + real generalization) and **MIS-FORMED-parts** (form: skill→capability; timing: now→at-N2). The decomposition is the spine.
- The fetch-loop mechanics are **already fully specified** (the articulate_warm finding) — so extraction, when earned, is low-*discovery*-risk (but not low-*interface-fit*-risk; that needs the 2nd real caller).

**Foundational principle**
- Extract-when-earned (validate an abstraction against a real 2nd caller before committing to it) over extract-when-imagined. The project's operative axiom.

**Meaning-node**
- **fetch_loop = a real but not-yet-earned abstraction; today it is the `fixpt-S1` seed, not a build.**

## SV2 — Anchor-informed
The proposal is *substantively right and structurally mis-formed*. The pattern is real (affirm) and even has a genuine second site in latent form — but the project's own extraction discipline (N=2, validate against a real 2nd caller) says it's an **observation** at N=1-wired, and its natural **form** is a runner capability, not a traverse-like skill. The "big refactor" fear is a symptom of the mis-form; it dissolves under the right form.

*(Meta-inspection H4: "runner-owned capability" and "fetch_loop" are load-bearing concept names — tested at Phase 3(b). H5: the motivating examples (sensemaking, memory) are a small set — tested at Phase 3(a) for wired-vs-latent.)*

## Phase 2 — Perspective checking

- **Technical/Logical:** the survey is the ground truth — 1 wired, 1 latent (sensemaking), 1 unbuilt-future (memory), rest absent. The traverse-composition is linear (quoted). The mechanics are runner-owned. All check out against the specs.
- **Human/User:** the user's *instinct* is correct and valuable (they saw a real pattern); the *packaging* (skill, integrate-now, big refactor) is where it needs steering. Meeting them means affirming the insight while re-forming the action.
- **Risk/Failure:** the live risk is **premature abstraction** — extracting a capability fitted to ONE caller, then finding the 2nd caller (sensemaking) needs a different need-signal shape or termination, forcing a rework of a "shared" primitive that only ever had one real user. The N=2 rule exists precisely to avoid this.
- **★ Phase / Calibration-State (REQUIRED — the verdict IS phase-dependent):** the answer is a function of the wired-instance count. **At N=1 (now) → seed; at N=2 (when the 2nd site is wired) → extract.** The correctness of "don't extract now" is *contingent on the current phase* (early; one wired site). It is not a permanent "no" — it is a "not yet, and here is the exact trigger." Stating the phase-dependence explicitly is what makes the verdict honest rather than dismissive. (Failing to note the phase-dependence would be Perspective Blindness on the calibration-state axis.)
- **★ Self-reference (harness-on-harness) — external grounding:** every load-bearing claim rests on a checkable artifact — the traverse composition quoted from MVLFamily §1; the N=2 rule quoted from §4; sensemaking's Accommodation trigger from its own spec; surfacing §3.6/§3.7. Not framework-agreement. Cleared.
- **★ Status-Quo-Bias (run honestly):** *Am I saying "don't extract" because evidence supports it, or because leaving things as-is is easier?* Check: the verdict rests on the empirical survey (N=1-wired) + the project's OWN documented rule — not my preference. Crucially, the **default bias for an exciting idea is to over-build**; the anti-status-quo move here would be "extract now," and *that* is the one being resisted **on evidence**. So this is not status-quo protection — if anything it resists the more seductive (build-it) direction. Cleared, but the resolution's elegance is flagged for Phase 5.

## SV3 — Multi-perspective
The model holds and sharpens: it is a **phase-dependent verdict** (seed now → extract at N=2), grounded externally (not self-referential hand-waving), and it survives the status-quo-bias check (it resists the *build* pull, not the *don't-touch* pull). The user's substance is affirmed; the form and timing are corrected; the big-refactor dissolves.

## Phase 3 — Ambiguity collapse

### (a) ★ THE SHARPEST — does the N=2 rule count WIRED instances or GENUINE-STRUCTURE instances?
**Counter-interpretation (strongest):** genuine structure at sensemaking means N=2 is *already effectively met* — the abstraction demonstrably recurs, so extraction is justified now. **Additional counter:** "we already KNOW the mechanics from the articulate_warm finding, so we don't need a 2nd instance to discover the abstraction."
**Why the counter fails (structural):** the N=2 rule's *purpose* is not to **discover** the abstraction — it is to **validate interface-fit against a real second caller** before committing to a shared primitive. A latent site raises confidence the abstraction is *real* (defeats false-family) but supplies **no second caller to test the interface** — you cannot know whether sensemaking's re-surface needs the *same* need-signal shape / termination as articulate's until you actually wire it. Knowing the mechanics lowers *discovery*-risk; it does **not** lower *interface-fit*-risk, which is exactly what a 2nd wired instance retires. So **WIRED instances are what the rule counts.**
**Confidence:** HIGH (rests on the rule's structural purpose, not on precedent). **Resolution:** N=1-wired → premature; genuine structure at sensemaking → the abstraction is real and the 2nd instance is *cheap and near* (one wiring-change away), which is what makes the seed high-value. **Fixes:** the timing anchor. **Excludes:** "latent structure counts toward N=2."

### (b) Skill, pattern, or capability?
**Counter:** it's a skill like traverse (the user's framing) — traverse is the precedent for "a thing that composes disciplines."
**Why it fails (structural):** traverse composes disciplines **linearly, each once** (MVLFamily §1, strictly nested); a fetch loop **re-invokes one pair until convergence**. Different composition category. And the loop is already **runner-owned** (§3.7). A skill would be a new *runner* (violates resist-proliferation); the mechanics are a *sub-routine*, not a pipeline.
**Confidence:** HIGH. **Resolution:** **runner-owned capability** (parameterized by U, D, need-signal, material-change test). **Excludes:** "fetch_loop is a skill / a discipline."

### (c) Is the recognition true — was it a fetch loop all along?
**Counter:** maybe articulate_warm was *sui generis*, not an instance of a general "fetch loop."
**Why it fails:** the three-part structure (need-emit MQ2 / re-invocable surfacing / convergence verdict) is exactly present and is exactly what recurs (latently) at sensemaking. It generalizes by construction.
**Confidence:** HIGH. **Resolution:** the recognition is TRUE (real structure, narrow scope). **Affirm — do not deflate.**

### (d) Is "premature" a status-quo-bias artifact or an evidence verdict?
**Counter:** "don't extract" is just inertia / protecting the current architecture.
**Why it fails:** the verdict rests on the survey (empirical N=1-wired) + the project's own rule (external), and it resists the *more seductive* build-it direction — inertia would look like *not even considering* the extraction, whereas here the extraction is fully worked out and gated on a named trigger.
**Confidence:** HIGH. **Resolution:** evidence, not inertia. **Excludes:** "the no is status-quo protection."

### (e) SIZING / non-sycophancy
**Counter (caving):** the user is clearly excited and it's a cool idea — just endorse building the skill. **Counter (deflating):** it's premature, so downplay it as "not worth it."
**Why both fail:** caving ignores the category-mismatch + the N=2 rule (real structural objections); deflating ignores that the generalization is genuinely REAL and the 2nd site is one wiring-change away (a real, near opportunity). The honest move is to **re-size**: affirm the substance, correct the form + timing.
**Confidence:** HIGH. **Resolution:** RIGHT in substance (real loop + real generalization — affirm); MIS-FORMED in action (form: capability-not-skill; timing: seed-now-extract-at-N2); the big-refactor dissolves. **Excludes:** both "build the skill now" and "it's not worth it."

## SV4 — Clarified
`fetch_loop` is a **real, validated-as-genuine abstraction** that is **not yet earned for extraction**: N=1 wired, the 2nd genuine site (sensemaking's Accommodation made re-surface-capable) is latent and one wiring-change away. Its natural form is a **runner-owned capability**, not a traverse-like skill (category mismatch) and not a discipline. Today it is the **`fixpt-S1` seed**; the extraction trigger is **"the 2nd site is actually wired."** The "big refactor" is an artifact of the mis-form and dissolves. The user's instinct is affirmed; the action is re-formed.

## Phase 4 — Degrees-of-freedom reduction
- **Fixed:** the recognition is true (c); the generalization is real but N=1-wired (a); the form is a runner-owned capability (b); the timing is seed-now-extract-at-N2 (a, phase-dependent); the verdict is evidence not inertia (d); the sizing is affirm-substance-correct-action (e).
- **Eliminated:** "build a fetch_loop skill now"; "it's a big refactor"; "latent structure = N=2"; "fetch_loop is a discipline/skill"; "it's not worth it / premature-means-dismiss."
- **Viable path:** keep the `fixpt-S1` seed, **sharpen its maturation trigger** to the precise 2nd-site condition; when sensemaking (or memory) genuinely needs re-surface, wire it (that IS the 2nd instance); then extract the shared runner-owned capability. Optionally, record the known mechanics now so the eventual extraction is cheap.

## Phase 5 — Conceptual stabilization

**No accommodation trigger** — the model settled without repeated patching; each perspective either confirmed the spine or sharpened one anchor (the phase-dependence, the wired-vs-latent distinction). **Clean-Resolution-Trap check (flagged at SV2):** the resolution *is* elegant ("real but premature; capability not skill"), so the strongest counter was tested on structural grounds — collapse (a) faced the "we already know the mechanics, skip N=2" counter head-on and defeated it on the *interface-fit-vs-discovery* distinction, not by citing the rule as precedent. The elegance survived a real structural challenge; it is not merely satisfying. Self-reference and status-quo-bias both cleared with external grounding.

### SV6 — Stabilized model

> **The user is right that it was a fetch loop all along and right that the pattern generalizes — and both should be affirmed, not deflated. But the proposal is mis-formed in two ways, correctable without caving. FORM: a fetch loop is a convergence loop (one discipline-pair re-invoked until a need-signal stabilizes), which is categorically different from traverse (a linear pipeline that runs each discipline once); the loop is runner-owned, so its natural form is a small runner-owned CAPABILITY — a callable "re-invoke-upstream-until-need-stabilizes" primitive — not a `fetch_loop` skill and not a discipline. TIMING: by the project's own rule ("two instances justify a protocol; one is an observation"), extraction is premature at the current phase, because only ONE site is WIRED (articulate↔surfacing). The generalization is genuinely real (the same three-part structure recurs, latent, at sensemaking↔surfacing — a bona-fide need-signal + convergence missing only the re-surface wiring), which defeats the false-family worry and makes the second instance cheap and near — but latent structure is not a wired second caller, and the N=2 rule counts wired callers because its purpose is to validate interface-fit, not to discover the abstraction (which the articulate_warm finding already did). So today `fetch_loop` is exactly the `fixpt-S1` seed (an observation), its maturation trigger sharpened to "the second site is actually wired — e.g. sensemaking's Accommodation trigger made able to re-surface, or traversal-memory built with a recall loop." When that second site is wired, N=2 is met and the shared runner-owned capability is extracted — a small, earned move, not the big speculative refactor the proposal feared. The "big refactor" dissolves under the correct form.**

**Delta from SV1:** SV1 saw "probably a real pattern, but the skill/refactor framing needs testing." SV6 sees a **precise decomposition**: substance RIGHT (real loop + real generalization — affirmed), action MIS-FORMED in exactly two correctable ways (form = capability-not-skill via a category mismatch; timing = seed-now-extract-at-N2 via the project's own rule), with the big-refactor fear dissolved and a named, near, cheap extraction trigger. Next: Decomposition.
