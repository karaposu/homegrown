# Structural Articulation (Simple) — Bundle

## User Input

```text
[Context: the user tested routelister with /aMVLwr in the crowboy project (4 inquiries read in full, incl. their _route.md files and archived routelister.md route-maps).]

i was testing routelister with AMVLwr in that project. routelister works well in terms of listing the routes. and i can easily (i am the meta loop still) tell what do run next.  But here is the caveat.  there is no tracking of what is ran and what is not from the routes....

some routes are like develop X and i ran them normally without any homegrown skill inside LLM session. 

lets think of this, what are  our options? because tracking what is already ran in routelister.md file would be really useful. 

i am thinking that we can create a new skill call rlu  (routelist updater) and when i am gonna run a route from routelister.md i can use this skill  

rlu parth_to_routelister.md lets develop X 

and it can kind of wrap that run, so that after the run, folder path and metadata is collected and it will go back to original routelister.md file and mark that route as RAN and add the information there. 

this way routelister.md files will reliable and up to date. 

what do you think?
```

**Substrate note (Edge — warm context).** Field-test feedback from a REAL deployment (crowboy: 4 completed inquiries, 3 with `/aMVLwr` exhausts). Verified ground truth from the read: (a) routelister's enumeration worked (15–18 typed routes per map; the user, acting as the Selector/"meta loop", picked next moves easily — several routes were in fact taken up by later inquiries); (b) **run-state tracking is ALREADY being practiced by hand** in the `_route.md` depth-signal column ("DEVELOPED via full /aMVLwr inquiry…", "IN PROGRESS — §1–§4 done, 119 tests green", "DONE", "RATIFICATION PENDING") — directly contradicting each file's own header ("no process/control-flow state"); (c) `routelister.md` route-maps are ARCHIVED to docarchive/ at CONCLUDE — the user's proposal to "go back to the original routelister.md and mark" would mutate archived snapshots; the living per-territory file is `_route.md`; (d) some routes were run informally (plain LLM-session work, no homegrown skill) — so any tracking mechanism must cover non-runner work. Native-project context the evaluation must connect to: routelister's spec boundaries (the NOT-list excludes process/control-flow state; LAYER 2 "Process-coupling" is an identity failure), and the just-committed **selections file** design (the decided-about ledger whose admit/close-out moments are exactly a run-wrapper's start/finish) + the SUSTRALL launch checklist (Turn 1 = the selections file).

---

## Statement-Level Fields

- **Itemize count:** 2
- **Per-item identifiers:** `item-1` (the tracking problem + the option-space), `item-2` (the rlu proposal evaluation)

**Itemize reasoning.** The user asks two separable things: "let's think — what are our options?" (enumerate the design space for route-run tracking) and "what do you think?" about a SPECIFIC candidate (the rlu wrapper skill marking routes RAN in routelister.md). The second is a candidate inside the first, but they carry different verdict-shapes (an option-map vs an evaluation-with-recommendation) and the user voiced both explicitly. Count = 2, with item-2 feeding back into item-1's map as one of its options.

---

## Item 1 — the tracking problem + the option-space

**Item text:** Routelister enumerates well and choosing is easy, but nothing tracks which routes have been RUN vs not — including routes run informally (plain LLM sessions, no skill). Enumerate our options for run-state tracking, given that "tracking what is already ran in routelister.md would be really useful."

### MQ1 — verdict-axis (what kind of ask)

**Answer — identified-ambiguities-list:**
- **enumerate-the-options:** lay out the design space for tracking route run-state (the explicit "what are our options?").
- **diagnose-the-gap:** name precisely WHERE the gap is (routelister deliberately doesn't track — its spec excludes run-state; nothing else picked it up; the hand-annotations in crowboy's `_route.md` are the symptom).
- **reconcile-with-committed-design:** the native project just committed the selections file (the decided-about ledger) — the option-map must place it (is the tracking gap exactly what the selections file exists for?).
- **fix-the-contradiction (implicit):** crowboy's `_route.md` files already carry hand-written run-state against their own stated boundary — the answer should resolve that tension (legalize a bounded form? move the state elsewhere?).

### MQ2 — context-need axis

**Answer — identified-ambiguities-list:**
- **verdict (which context):** the crowboy field data (read: the hand-annotated `_route.md` depth-signals; the archived route-maps; routes taken up by later inquiries; informal runs); the routelister spec (`cognitive_harness/routelister/references/routelister.md` — the NOT-list's control-flow exclusion, `_route.md`'s "no process/control-flow state" boundary, the allowed depth-pointer/depth-signal fields, LAYER 2 Process-coupling + Selection-creep); the Pipeline Architecture finding (the selections file: states parked/admitted/in-flight/done/removed + entry-triple; single-writer; the field-vs-selections distinction "could-do vs decided-about"); the SUSTRALL launch checklist (Turn 1 = the selections file; the two writing moments admit/close-out); the `/aMVLwr` runner (route-maps archived at CONCLUDE; `_route.md` stays in root).
- **kinds:** a gap diagnosis + an option-map with trade-offs + a spec-boundary adjudication + a recommendation.
- **stance:** design-evaluator honoring the field evidence (the hand practice is DATA — users need this badly enough to violate the spec by hand); prior-respecting (the selections file is committed design — connect, don't reinvent); honest about which file is living vs archived.

### MQ3 — intent-axis (WHAT; action-endpoint shape)

**Answer — identified-ambiguities-list:**
- **endpoint-the-option-map:** the enumerated options (likely: mark routelister.md directly / formalize marks in `_route.md` / the selections file as the run-state home / hybrids / runner-integration / post-hoc-command vs wrapper), each with what-it-buys/costs and what the spec says.
- **endpoint-the-placement-verdict:** WHERE run-state should live (the one-file-the-user-looks-at desire vs the spec's process-coupling boundary vs the committed selections-file design).
- **endpoint-the-contradiction-resolution:** what happens to the existing hand-annotations practice (bless a bounded form / migrate to the new home).
- **endpoint-cross-project:** the mechanism must work in ANY project using the skills (crowboy today), not just the native project.

### MQ4 — boundary-axis (exclusions)

**Answer — identified-ambiguities-list:**
- **Must cover informal runs:** "some routes… i ran them normally without any homegrown skill" — a tracking mechanism that only works when a runner is used misses the stated case.
- **Routelister's enumeration quality is NOT in question:** "routelister works well in terms of listing" — don't redesign the listing.
- **The user is still the chooser:** "i am the meta loop still" — no autonomy-jump is being requested; this is bookkeeping for the manual Selector.
- *(Implicit)* don't break routelister's identity (its spec's self-containment and enumerate-not-select character are committed canon — an option that quietly turns routelister into a process-tracker must be flagged as a spec change, not slipped in).

### MQA — alignment across MQ1–MQ4

**RECONCILE:** enumerate-the-options folds with reconcile-with-committed-design (the selections file is one of the options — likely the committed-design answer).
**SURFACE — irreducible opennesses (carried):** (a) the user's stated desire is marks IN routelister.md ("in routelister.md file would be really useful") — but the field shows routelister.md gets archived and `_route.md` is the living file; does the user want the marks in the MAP (per-run snapshot), the INDEX (`_route.md`), or simply "one reliable place I can look"? (b) per-inquiry maps vs one per-PROJECT ledger — the maps scatter across inquiry folders; "what has been run" is naturally a project-level question.
Remaining: ALIGNED (the option-map-with-recommendation shape governs).

### Deconstruct

**Tuple:** `(deliverable: a diagnosis of the tracking gap + an enumerated option-map for route run-state tracking (placement × mechanism × trigger), each option with trade-offs and the spec's verdict on it + a placement recommendation reconciled with the committed selections-file design + a resolution for the existing hand-annotation practice; kinds: gap diagnosis + option enumeration + spec adjudication + recommendation; bounds: must cover informal runs; don't redesign enumeration; the user stays the chooser; spec changes flagged as such, never slipped)`

**Late-split check:** the option-map and the rlu evaluation stay separate items (different verdict shapes). No further split.

### MultiDepth

**Literal-statement:** "I was testing routelister with /aMVLwr in crowboy. Routelister lists routes well, and I (still being the meta loop) can easily tell what to run next. The caveat: there is no tracking of what has been run and what hasn't from those routes — some routes (like 'develop X') I ran normally, in a plain LLM session without any homegrown skill. Let's think: what are our options? Tracking what has already been run in the routelister.md file would be really useful."

**Identified-purpose-motivation-ambiguities (WHY-axis):**
- **reliable-situational-awareness** — when looking at a route-map, instantly see what's done vs open ("reliable and up to date").
- **avoid-redundant-or-forgotten-work** — without run-state, routes get re-considered every time or silently forgotten (the moving-field problem at the human grain).
- **close-the-loop-on-the-exhaust** — routelister built the field; tracking is the missing half that makes the field USABLE across days.
- **(deeper, possibly unnoticed)** — this is the turn-recording need surfacing from practice: choice + run + outcome per route is exactly a recorded turn; the user may be re-inventing the selections file from field pain, which would VALIDATE that design.

### Considered Articulations (Rephrase)

1. *(option-map-first)* "Enumerate the placement options for run-state — mark routelister.md / formalize `_route.md` marks / a per-project selections file / hybrids — with mechanisms (wrapper skill / post-hoc command / runner integration) and triggers, each with trade-offs and the routelister spec's verdict."
2. *(diagnosis-first)* "Name the gap precisely: routelister EXCLUDES run-state by spec (enumerate-not-select; no process state in `_route.md`), nothing else owns it, and crowboy's hand-annotated DONE/IN-PROGRESS marks are the symptom — then derive the options from where the state can legally live."
3. *(committed-design-first)* "Recognize the gap as exactly what the selections file was designed for (the decided-about ledger; could-do vs decided-about) — evaluate whether deploying it per-project + a small updater mechanism solves tracking without touching routelister's identity."
4. *(field-evidence-first)* "Treat the crowboy hand-practice as the requirements spec: what the user actually wrote by hand (status + pointer + summary per identity) IS the needed record; design the mechanism that produces those entries without hand-editing."

---

## Item 2 — the rlu proposal evaluation

**Item text:** Proposal: a new skill `rlu` (routelist updater). Usage: `rlu path_to_routelister.md lets develop X` — it "wraps" the run; after the run it collects the produced folder path + metadata and writes back to the original routelister.md, marking that route as RAN with the information attached. Goal: routelister.md files stay reliable and up to date. "What do you think?"

### MQ1 — verdict-axis (what kind of ask)

**Answer — identified-ambiguities-list:**
- **evaluate-the-proposal:** a direct "what do you think?" — wants an honest verdict (adopt / refine / reject) with reasons.
- **design-the-skill (conditional):** if the idea survives, the evaluation should land at a buildable shape (invocation, write-target, the wrap mechanics).
- **stress-the-mechanics (implicit):** "kind of wrap that run" is hand-wavy — what does wrapping mean in LLM-session reality (a skill can act at invocation and must somehow act again at completion; sessions end unpredictably)?

### MQ2 — context-need axis

**Answer — identified-ambiguities-list:**
- **verdict (which context):** the same field data + spec + selections-file design as item-1, PLUS: the wrap-lifecycle question (a skill fires once at invocation; the "after the run" half needs either a closing protocol the session must remember, or a separate post-hoc invocation — the zero-for-109 lesson says un-mechanized closing steps rot); the archived-vs-living file fact (the proposed write-target gets archived at CONCLUDE); the selections file's two writing moments (admit at start; outcome at close-out) which map 1:1 onto a wrapper's start/finish.
- **kinds:** a proposal evaluation + a mechanics stress-test + (if surviving) a v1 shape.
- **stance:** honor the instinct (the proposal is the turn-recorder re-invented from practice — likely RIGHT in mechanism), challenge the write-target (routelister.md is a per-run archived snapshot) and the single-invocation wrap assumption.

### MQ3 — intent-axis (WHAT; action-endpoint shape)

**Answer — identified-ambiguities-list:**
- **endpoint-verdict:** adopt / adopt-with-changes / reject, argued.
- **endpoint-v1-shape:** if adopted: the invocation form (`rlu <map> <route>` at start? `rlu done` at end? both?), the write-target(s), what metadata is collected, what the mark looks like.
- **endpoint-spec-relationship:** whether rlu is a NEW skill beside routelister (clean) or a change to routelister (identity risk) — and what, if anything, `_route.md` may legally carry.
- **endpoint-the-informal-run-coverage:** how rlu serves the stated case (plain-session runs with no runner involved).

### MQ4 — boundary-axis (exclusions)

**Answer — identified-ambiguities-list:**
- **The user's explicit desired outcome:** "routelister.md files will be reliable and up to date" — whatever ships must deliver *a reliable, current view of run-state* (the underlying desire), even if the literal write-target shifts.
- **Don't build a heavyweight process-manager:** the sketch is a small updater skill ("kind of wrap"), not an orchestration platform.
- *(Implicit)* the proposal must not quietly violate routelister's committed identity (per item-1's bound) — if marks belong in routelister's files, that is a spec amendment to be made explicitly.

### MQA — alignment across MQ1–MQ4

**RECONCILE:** evaluate folds with design-the-skill (the honest evaluation lands at the refined shape).
**SURFACE — irreducible opennesses (carried):** (a) wrap-as-one-invocation vs two moments (start-mark + done-mark) vs post-hoc-only; (b) the write-target (routelister.md literal / `_route.md` bounded / the selections file / a projection onto several); (c) skill vs tiny script vs convention.
Remaining: ALIGNED (the user's deeper desire — a reliable current run-state view — governs over the literal file named).

### Deconstruct

**Tuple:** `(deliverable: an honest verdict on rlu + (if surviving) its v1 shape — invocation moments, write-target(s), collected metadata, the mark's content — reconciled with routelister's spec identity and the selections-file design, covering informal runs; kinds: evaluation + mechanics stress-test + v1 sketch; bounds: deliver the reliable-current-view desire; stay lightweight; spec changes explicit; no autonomy jump)`

**Late-split check:** one evaluation. No split.

### MultiDepth

**Literal-statement:** "I'm thinking we create a new skill called rlu (routelist updater). When I'm going to run a route from routelister.md I use: `rlu path_to_routelister.md lets develop X`. It kind of wraps that run, so that after the run, the produced folder path and metadata are collected, and it goes back to the original routelister.md file and marks that route as RAN, adding the information there. This way routelister.md files will be reliable and up to date. What do you think?"

**Identified-purpose-motivation-ambiguities (WHY-axis):**
- **make-the-mark-automatic** — the user doesn't want to remember to hand-edit files after runs (the mechanize-the-habit instinct, same as the aMVLwr exhaust precedent).
- **bind-run-artifacts-to-routes** — the mark should carry WHERE the work landed (folder path + metadata), so the map links to its consequences.
- **one-trustworthy-view** — open the route file and trust it ("reliable and up to date").
- **(possibly)** keep the ceremony tiny — one command at run-start, everything else automatic.

### Considered Articulations (Rephrase)

1. *(as-proposed)* "Build rlu exactly as sketched: invoked at run-start with the map path + route, wraps the session's work, and at the end writes RAN + folder/metadata back into that routelister.md."
2. *(two-moment form)* "Build rlu as the two writing moments the selections file already defines: `rlu start <map> <route>` records the pick (admission: route + why + in-flight), the work happens normally, `rlu done <pointer/outcome>` completes the row — robust to sessions ending, and identical to the turn-record's admit/close-out."
3. *(retarget the write)* "Keep rlu's mechanism but aim the write at the LIVING artifacts: the per-project selections file as the source of truth (could-do vs decided-about), plus a bounded manifestation-pointer in `_route.md` (the depth-pointer field the spec already allows) — routelister.md snapshots stay pure perception; optionally a projected status view."
4. *(post-hoc-only minimal)* "Skip wrapping entirely: `rlu mark <map-or-index> <route> <artifact-path>` run AFTER any work (runner or informal session) — the smallest thing that makes marks reliable; wrapping is sugar on top."
5. *(runner-integration complement)* "For runner-executed routes, the runner itself reports back at CONCLUDE (an optional `route:` argument aMVLwr accepts and writes back on completion); rlu covers only the informal-session case — two mechanisms, one record."

---

## Self-Check (LAYER 1 — single LIGHT pass)

| # | Mode | Fire? |
|---|---|---|
| 1 | Premature Itemize split | no (two verdict-shapes: an option-map and a proposal evaluation; the user voiced both) |
| 2 | Late-detected multi-item | no |
| 3 | MQ extension violates bounded-extensibility | no |
| 4 | Per-operation firing missed | no |
| 5 | MQ2 missing preparation content | no (field data + spec boundaries + the selections design + the wrap-lifecycle question all named) |
| 6 | MQ2 missing kinds-axis or stance-axis | no |
| 7 | 2-shape violation | no |
| 8 | AMBIGUITY-NATURE conflation | no (WHAT-opennesses [write-target; wrap-moments; skill-vs-script] separate from WHY-motives [automatic marks; artifact binding; one trustworthy view]) |
| 9 | Considered-articulations drift | no (all within the tracking/rlu bounds) |

Zero fires.

## Self-Assessment Verdict

**HIGH-PROCEED** — two clean items (the option-space; the rlu evaluation), the field evidence read and carried as substrate (including the hand-annotation contradiction and the archived-vs-living file fact), the user's deeper desire (a reliable current run-state view) distinguished from the literal write-target, and the genuine opennesses (write-target; wrap-moments; per-project vs per-map) preserved for the pipeline.
