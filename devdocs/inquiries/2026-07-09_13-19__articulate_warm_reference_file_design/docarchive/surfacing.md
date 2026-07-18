## User Input

devdocs/inquiries/2026-07-09_13-19__articulate_warm_reference_file_design/_branch.md — (Structural-layer dive: design `references/articulate_warm.md`. MIXED case: read the shape-TEMPLATE [existing discipline references] + the warm content to house. Band RICH. Guard both ways: don't bloat into a shared-ops duplicate; don't under-build into a pointer-stub. Full framing in the instruction.)

---

# Surfacing — the reference-file design: template, concepts, tensions

**Territory (MIXED):** the discipline-reference shape-template (existing references) + warm's own content (from the priors) + the inter-file landscape. **Purpose:** what sections the reference has, what each holds vs points-to, and its division of labor. Signal-first.

## ★ Verified facts (read this turn — the shape-template)

**F1 — the discipline-reference template is consistent (both existing references share it).** Section skeleton (articulate_simple.md `:15-447`, surfacing.md `:15-404`):
1. **Identity** — verb-meaning / what-it-is · NOT-list · vocabulary · taxonomy placement
2. **Components** — the operations / mechanisms / key concepts
3. **Process Model** — the stages/steps
4. **Quality** — failure modes (LAYER 1 operational / LAYER 2 behavioral) · calibration · self-assessment
5. **Output (Contract)** — the bundle/artifact schema
6. **Execute the Process** — the runnable step-by-step
Both are **~440-460 lines**. → the warm reference should **match this skeleton** (consistency across disciplines) but scope each section to warm's DELTA.

**F2 — the SKILL is thin; the reference carries the process (the pattern to match).** `articulate_simple`'s SKILL defers to its reference ("execute the process described in the reference"); the reference has the full "Execute the Following Process" (`:362-447`). But **warm's SKILL is currently *thick*** (9 detailed instruction steps, 58 lines) precisely *because* it had no reference. → creating the reference means the 9 steps **move/canonicalize into the reference's Execute section**, and the SKILL **slims** to match the pattern. (A real consequence of the ask — MQ1 "define-inter-file-relationships.")

**F3 — the design doc is the rationale tier (provisional).** `docs/how_articulate_warm_should_be.md` (231 lines) is the WHY: §2 the ordering problem, §4's "why MQ2 not Rephrase alone," the decoupling argument, §13 "provisional until exercised." It is **not** a built reference — it's the design/rationale doc, the peer of `devdocs/how_articulate_simple_should_be.md`. → the reference is the **canonical operational** tier; the design doc **stays the rationale**; the reference points to it for the WHY.

**F4 — the content-conflict flag-type already lives in the shared reference (R2c).** We just added it to `articulate_simple.md`'s Verdict Assignment (defined-shared/used-warm-only). → warm's reference **points there** for it, doesn't re-define it.

## ★ The concepts → where each lands (IN / POINTED-TO / OUT) — the core inventory

| Concept | Placement | Why |
|---|---|---|
| Warm's **identity** (re-invocation + one application; loop-controller + conflict-gate; the context-symmetry) | **IN** | warm-own; the Meaning, recorded not re-opened |
| The **inheritance declaration** (what's inherited-by-pointer vs owned-here) | **IN** ★ | the *signature* warm-only section — no other reference needs it |
| The **3-operation-class taxonomy** + the **operational cheat-sheet** (carry / re-run / trigger, one line per op) | **IN** | the runtime-runnable shape; imperative, no canonical authority |
| The five operation **definitions** (Itemize, MQ1–4, Deconstruct, MultiDepth, Rephrase) | **POINTED** | shared; inherit-not-duplicate (drift) → `articulate_simple.md` §Five Operations |
| The **trigger-gated re-run principle** (did-it-move; MQ2/Rephrase always, MQ4 usually…) | **IN** | warm-own (Item A) |
| **Conflict-detection** (full spec: identify-move, 2-shape, don't-adjudicate, severity, the ladder, emit/runner-asks, autonomy-degrade) | **IN** ★ | warm-own (Item B) — the one operation with no cold home; must be canonical here |
| The **2-shape principle** | **POINTED** (+ one-line operational restatement) | shared definition → cold; but conflict-detection USES it, so restate the one-liner |
| The **re-anchor→re-surface loop + termination** (fixpoint / cap=2 / oscillation) | **IN** (the rule) / **POINTED** (the why → design doc §8) | operational rule = warm-own; rationale = design doc |
| **Substrate** (receives-never-fetches) | **IN** | warm-own process rule |
| The **verdict system** (five compound verdicts) | **POINTED** | shared → cold |
| The **content-conflict flag-type** | **POINTED** | shared per R2c → `articulate_simple.md` Verdict Assignment |
| The **output contract** (warm bundle schema: re-anchored MQ2 + on-trigger re-runs + conflict-flag+payload + Rephrase + carried ops + verdict) | **IN** | warm-own schema |
| Cold's **LAYER 1/2 failure modes** | **POINTED** | shared |
| **Warm-specific failure modes** (conflict false-positive · over-flag · adjudicate-not-identify · ignore-the-trigger/re-run-everything) | **IN? — OPEN** ★ | design tension (below) |
| The **WHY / rationale** (ordering problem, decoupling argument, why cap=2) | **OUT** → design doc | the reference is the spec, not the justification |
| The five operation **definitions restated in full** | **OUT** (never) | the inherit-not-duplicate hard line |

## ★ The candidate blueprint (hold for sensemaking) — 6 sections, template-matched

1. **Identity** — warm = re-invocation + one context-enabled application; loop-controller + conflict-gate; the context-symmetry; NOT-list (inherited stance: never-ask/no-halt/don't-adjudicate → point; + warm-specifics: never-fetch, emit-not-ask); vocabulary. **★ + an explicit "Inheritance" subsection** — the INHERITED-by-pointer vs OWNED-here manifest.
2. **Components** — the 3-operation-class taxonomy + the **operational cheat-sheet** (carry/re-run/trigger, one line per op, pointing to cold for definitions) + the trigger-gated re-run principle + **conflict-detection (full warm-own spec)**.
3. **Process Model** — the re-anchor→re-surface loop + termination (rule) + the per-item warm sequence + substrate.
4. **Quality** — point to cold's failure modes + [OPEN] a warm-specific failure-mode subsection.
5. **Output Contract** — the warm bundle schema + verdict (point) + content-conflict flag-type (point).
6. **Execute the Warm Process** — the runnable steps (canonicalized from the SKILL's 9 steps).

## ★ The load-bearing structural move (surface, hold): the operational/canonical split

The reference must be **operationally self-contained** (a model runs warm from it without opening cold) YET **not duplicate** cold's definitions. The resolution — the design move the whole file turns on:
- **Inline the operational shape** — imperative one-liners ("MQ2: re-anchor, always; MQ4: re-run if context moved the boundary; Itemize: carry"). Runtime-runnable, carries **no canonical authority** (if it ever drifts, it's obviously the non-authoritative copy).
- **Point for the canonical definition** — the deep "what MQ2 *is*, its failure modes" → cold's reference. Not reasoned-from each run.
This split appears **twice**: operations (cheat-sheet IN / definitions POINTED) and the loop (rule IN / rationale POINTED). It is the file's organizing principle.

## Disconfirming / guard-both-ways (surface hard)

- **(anti-bloat) Don't let the reference become a second copy of cold.** The pull: "make it fully self-contained, inline everything." That reintroduces the drift the whole thread rejected. The cheat-sheet is imperative shape, NOT the definition — keep that line sharp, or the file rots. The five-operation-definitions are the hard OUT.
- **(anti-stub) Don't under-build into a pure pointer-file.** The opposite pull: "just point at cold + the design doc." Then conflict-detection (which has no other canonical home) is homeless, and the file fails its main job. Conflict-detection must be **fully, canonically IN**.
- **★ The warm-failure-modes tension (genuine OPEN question for sensemaking).** Design doc §13 lists "no new failure modes beyond cold's" as a *stabilization criterion*. But conflict-detection is a new operation with plausible new pathologies (false-positive conflict, crying-wolf over-flagging, adjudicating instead of identifying, ignoring the trigger and re-running everything → breaking §9). Two readings: (i) name them (a real new operation has real new failure modes; the §13 line predates conflict-detection); (ii) don't (honor §13; treat them as instances of cold's existing modes). Surface, don't resolve.
- **★ The SKILL-slimming consequence (in or out of scope?).** Creating the reference *forces* the SKILL to slim (the 9 steps move). This is arguably beyond "design the reference" — but MQ1's `define-inter-file-relationships` + the consolidate-not-scatter guardrail put it IN scope as a *named consequence* (the finding must say what the SKILL becomes), even if executing the slim is a separate build step.
- **(scope) Design vs write.** The user built R2a-c last turn on a go-ahead; they may want to write this file immediately. Default = design (blueprint), write = gated follow-on; surface at CONCLUDE.

## Relevance-tagged summary (for sensemaking)

- **DIRECT:** F1 (the 6-section template) · the IN/POINTED/OUT manifest · the operational/canonical split (the organizing move) · conflict-detection fully-IN · the inheritance-declaration section (warm's signature).
- **DIRECT:** F2 (SKILL slims, 9 steps move) · F3 (design doc = rationale, pointed for WHY) · F4 (flag-type pointed).
- **DIRECT-OPEN:** the warm-failure-modes question (name them or not).
- **SUPPORTING:** the loop rule-IN/why-POINTED split · the design-vs-write seam.
- **PERIPHERAL:** the churn-vs-stabilization snapshot note (revisit full self-containment when stable).

Signal: the reference = a **template-matched 6-section file**, organized by the **operational/canonical split**, with **conflict-detection + the inheritance-declaration** as its warm-own core, everything shared **pointed**, the rationale left to the design doc, and the SKILL slimming as a named consequence — with the **warm-failure-modes question** the one genuinely open design call for sensemaking. PROCEED to Sensemaking.
