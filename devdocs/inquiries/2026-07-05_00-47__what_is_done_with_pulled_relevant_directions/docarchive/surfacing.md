# Surfacing — What Is Done With Pulled Relevant Directions

## User Input

Territory = the corpus grounding "what is done with a pulled direction" (ODI doc; the concluded ODI finding; the traversal-memory canon; the routelister route schema with done-marks; the candidate downstream operations). Possibility + artifact case. Generate the candidate operations, tag each honestly (real payoff vs thin/conditional), surface the load-bearing one and the unspecified gap. Mark FACT vs inference. Save to this path.

---

## Mode + Entry

- **Mode:** hybrid — `artifact` (read the ODI doc / finding / canon for what's specified) + `possibility` (generate the candidate downstream operations, which the corpus does NOT enumerate).
- **Entry point:** signal-first (purpose given: what is done with a surfaced direction, and how is that memory).
- **Territory:** explicit-bounded (the five sources named). No boundary-discovery sub-phase.

---

## The Grounding FACTs (from the actual files)

- **FACT-1 — the doc's walkthrough STOPS at "surfaces."** ODI doc §"A concrete walkthrough" ends: *"A direction A set aside surfaces in B, precisely when B needs it."* It never says what B *does* with it. The specified mechanism is File (append) + Look-Up (surface). The downstream operation is **absent from the spec.** → the user's confusion is well-founded, not a comprehension gap. [core]

- **FACT-2 — the doc EXPLICITLY punts the "what to do" to the steering layer.** ODI doc §"What It Deliberately Does NOT Do": *"It does not decide what to do next. The Index surfaces relevant open directions; the choice of which to act on remains the steering layer's. It enumerates and delivers; it does not select."* So "do what with them?" is by-design **out of the Index's scope** — which just relocates the question to: what does the session/steering do with them? [core]

- **FACT-3 — the doc's own benefit list is about the *surfacing*, not the *use*.** ODI doc §"Why It Helps" gives four benefits; three are about not-losing / right-timing / cross-session-bridging (properties of surfacing). The fourth — *"makes setting a direction aside safe, which improves the current session"* — is a **behavioral** benefit that doesn't even require the surfaced direction to be used: it's the confidence that it'll come back. [core]

- **FACT-4 — the doc's OWN "honest bound": pull pays on cross-context directions.** ODI doc §"Why It Helps" close: *"this pays most on the non-obvious, cross-context directions — the ones a future session would not re-notice on its own… For directions a later session would independently re-derive anyway, Look-Up saves little."* This is the corpus itself locating where the payoff is real vs thin. [core]

- **FACT-5 — canon defines traversal memory as a record of DECISIONS + STATE, not a pile of options.** Canon SUSTRALL §"One revolution": *"remember — traversal memory is updated (what was visited, selected, why, with what outcome)."* And the turn-invariant: *"A revolution counts as a SUSTRALL turn when its selection-rationale is recorded."* Memory = visited/selected/why/outcome. [core]

- **FACT-6 — canon splits the organ into two faces; the ODI is the "option" face.** Both the canon and the ODI doc §"What it is, and is not" name: **selection record** (roads taken + why + outcome — the travel-log) vs **option memory** (roads noticed-but-not-taken — the ODI). The ODI is explicitly only the second face. [core]

- **FACT-7 — the concluded finding already graded pull as "enrichment, not steering."** `devdocs/inquiries/2026-07-05_00-21__.../finding.md`: pull enriches an already-chosen heading; the mark-done write-back is mentioned there as the thing that makes the store *memory*, and is noted as **not specified in the doc.** [core]

---

## Candidate Downstream Operations (possibility items — what a warm traverse could DO with a surfaced direction)

### Op-1 — Absorb-now-while-warm  ·  relevance: **core** · confidence: HIGH
The current traverse, already in-context on the adjacent topic, **acts on the surfaced direction now** — folds it into its work / does it this pass. **This is the real operational payoff**, and FACT-4 says exactly when it's real: on a **cross-context** direction B would *not* have re-noticed on its own (e.g., B is designing the travel-log schema; it would never have thought of A's parked "consolidate the controller design," but pull surfaces it and B does it while warm). Honest bound (non-sycophantic): for a direction B would have re-derived anyway, this saves little — the value concentrates on the cross-context case. Not thin *there*; thin elsewhere. [inference grounded in FACT-4]

### Op-2 — Mark-done write-back  ·  relevance: **core** · confidence: HIGH
If the current traverse addresses a surfaced direction, it **marks that direction done in the index** (writes back a done-mark / who-took-it / when). **This is the load-bearing operation for the "how is it memory" question** — and it is the one the doc does NOT specify (FACT-1, FACT-2, FACT-7). Why it's load-bearing: without it, the index only grows — a monotonic to-do inbox. With it, the index reflects **state** (still-open vs taken, by whom, when), which is exactly canon's definition of traversal memory (FACT-5: visited/selected/outcome). The routelister route record already carries a `✓`/done column and Priority/Essentiality — so the field to write back **already exists in the schema**; what's missing is the *habit* of writing it. [inference grounded in FACT-5 + routelister schema]

### Op-3 — Inform-the-finding (don't act, just let it shape the pass)  ·  relevance: **sub** · confidence: MEDIUM
The surfaced direction becomes **context that shapes the current pass's reasoning or finding** — e.g., the finding notes "this area has an open thread X still parked." Doesn't do X; just makes the current output aware of it. Modest, real, low-cost. [inference]

### Op-4 — De-dup future set-asides  ·  relevance: **sub** · confidence: HIGH
Knowing X is already parked, the current pass **won't re-file the same direction**, and can **link** related ones. This is literally the doc's §"A secondary, optional use" (double-filing check). Real but housekeeping — keeps the pile from bloating with duplicates; not the main event. [FACT — doc names it]

### Op-5 — Do-nothing / just-awareness  ·  relevance: **side** · confidence: MEDIUM
The surfaced direction is shown; the session notes it and moves on. Operationally thin — but it delivers FACT-3's behavioral benefit (setting-aside feels *safe* because you trust it'll resurface), which sharpens the current session's focus even with zero action taken. Real as a behavioral effect; near-zero as an operation. [FACT-3]

---

## Clusters / The Emerging Honest Shape

- **Cluster A — the doc genuinely under-specifies this (the user is right).** FACT-1 + FACT-2: the spec stops at "surface" and punts the rest to the steering layer. The ambiguity the user feels is a real gap in the design, not a misunderstanding. [core]

- **Cluster B — two operations carry the real value, and they answer two DIFFERENT halves of the question.**
  - "What's the benefit *to the current session*?" → **Op-1 absorb-while-warm** (do a cross-context thread cheaply, because you're already in-context). This is the "enrichment" the finding named.
  - "How is it *memory*?" → **Op-2 mark-done write-back** (the write that turns a growing pile into a state-reflecting record — canon's visited/selected/outcome). And this is the unspecified gap. [core]

- **Cluster C — the pull/Look-Up by itself contributes little to traversal memory; the WRITE side does.** Non-sycophantic core point: Look-Up is a **read**. Reads help the *current session*; they don't constitute *memory*. What makes the index memory is the **writes** — File (accumulate the option-memory face, FACT-6) + Op-2 mark-done (record state). So "how does pull contribute to traversal memory" has an honest answer: **weakly, directly** — pull's contribution is making the accumulated record *useful* (a read nobody does = the write-only failure), but the memory-substance is on the write side. [core]

- **Cluster D — the fix is small and already-half-present.** The routelister route schema already has the done-column and priority fields (the write target exists); the missing piece is specifying Op-2 as a step (when a pass addresses a surfaced/related direction, mark it). Turns Look-Up from "a reminder you may ignore" into "a read-act-record loop." [inference]

---

## Frontier (for downstream)

- Is Op-1 (absorb-while-warm) a *net* good, or does pulling a cross-context direction risk **derailing** the current traverse's focus? (Sensemaking should weigh the focus-cost against the enrichment.)
- Does Op-2 (mark-done) belong to the ODI's Look-Up, to routelister, or to the steering layer? (The doc punts downstream ops to steering — but mark-done is a *write to the index*, which looks like it belongs with the index, not the selector.)
- Is "the read alone is thin, the memory is in the writes" the honest verdict, or does the read do more memory-work than credited (e.g., the read is what makes the writes *worth* keeping)?

---

## Self-Assessment

- **Coverage:** 5 candidate operations enumerated + 4 clusters + 7 grounding FACTs; the two load-bearing ops (absorb-while-warm; mark-done write-back) isolated; the honest gap (doc under-specifies) named.
- **Non-sycophancy both ways:** validated the user's confusion as a real spec gap (not dismissed); credited Op-1 as a genuine payoff on the cross-context case (not over-dismissed); stated plainly that pull-alone is thin for memory (not defended).
- **Failure modes checked:** no interpretive-overstep (tags are relevance, not verdicts — the adjudication is left to sensemaking); no purpose-loss (every item tagged to the "what-is-done + how-is-it-memory" purpose); FACT vs inference marked per item.

**Verdict: PROCEED** — grounded, decisive, ready for Sensemaking. Telemetry: mode=hybrid(artifact+possibility); items=5 ops + 7 facts; core=4 clusters; frontier=3 open questions.
