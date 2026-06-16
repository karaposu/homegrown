# Branch: route_run_tracking_rlu_design

## Source Input

```text
[Context: the user tested routelister with /aMVLwr in the crowboy project; all 4 inquiries + docarchives read in full as instructed.]

i was testing routelister with AMVLwr in that project. routelister works well in terms of listing the routes. and i can easily (i am the meta loop still) tell what do run next.  But here is the caveat.  there is no tracking of what is ran and what is not from the routes....

some routes are like develop X and i ran them normally without any homegrown skill inside LLM session. 

lets think of this, what are  our options? because tracking what is already ran in routelister.md file would be really useful. 

i am thinking that we can create a new skill call rlu  (routelist updater) and when i am gonna run a route from routelister.md i can use this skill  

rlu parth_to_routelister.md lets develop X 

and it can kind of wrap that run, so that after the run, folder path and metadata is collected and it will go back to original routelister.md file and mark that route as RAN and add the information there. 

this way routelister.md files will reliable and up to date. 

what do you think?
```

## Articulation Reference

- **File:** `devdocs/inquiries/2026-06-12_20-48__route_run_tracking_rlu_design/articulate_simple.md`
- **Itemize count:** 2
- **Per-item identifiers:** `item-1` (the tracking problem + the option-space), `item-2` (the rlu proposal evaluation)
- **Verdict:** HIGH-PROCEED
- **Flagged conditions:** none

## Question

**Item 1 — the tracking problem + the option-space.** *(Literal):* "Routelister lists routes well and I (still the meta loop) can easily tell what to run next. The caveat: there is no tracking of what has been run and what hasn't — some routes ('develop X') I ran normally in a plain LLM session, no homegrown skill. What are our options? Tracking what's already run in the routelister.md file would be really useful."
- **MQ1 ambiguities:** enumerate-the-options · diagnose-the-gap (routelister excludes run-state by spec; nothing else owns it; crowboy's hand-annotated `_route.md` marks are the symptom) · reconcile-with-the-committed-selections-file design · fix-the-contradiction (hand-written DONE/IN-PROGRESS marks sit under a "no process state" header).
- **MQ3 ambiguities:** the option-map (placement × mechanism × trigger, each with trade-offs + the spec's verdict) · the placement verdict (where run-state lives) · the hand-practice resolution · cross-project workability.

**Item 2 — the rlu proposal evaluation.** *(Literal):* "New skill `rlu` (routelist updater): `rlu path_to_routelister.md lets develop X` — it wraps the run; after the run, folder path + metadata are collected and written back to the original routelister.md, marking the route RAN with the information. This way routelister.md files will be reliable and up to date. What do you think?"
- **MQ1 ambiguities:** evaluate-the-proposal (an honest adopt/refine/reject) · design-the-skill if surviving · stress-the-wrap-mechanics ("kind of wrap" — a skill fires at invocation; the after-the-run half needs a mechanism; sessions end unpredictably).
- **MQ3 ambiguities:** the verdict · the v1 shape (invocation moments; write-target(s); metadata; the mark) · the spec relationship (new skill beside routelister vs a routelister change) · informal-run coverage.

*(MQA SURFACED, carried open: (a) the user's literal target is routelister.md, but the field shows route-maps get ARCHIVED at CONCLUDE and `_route.md` is the living file — does the user want marks in the map, the index, or simply "one reliable place"? (b) per-inquiry maps vs one per-PROJECT ledger ("what has been run" is naturally project-level); (c) wrap-as-one-invocation vs two moments (start + done) vs post-hoc-only; (d) skill vs tiny script vs convention.)*

## Goal

**Deliverable shape (Deconstruct):**
- **Item 1:** a gap diagnosis + an enumerated option-map (placement × mechanism × trigger) with per-option trade-offs and the routelister spec's verdict on each + a placement recommendation reconciled with the selections-file design + a resolution for the existing hand-annotation practice. Bounds: must cover informal runs; don't redesign enumeration; the user stays the chooser; spec changes flagged explicitly, never slipped.
- **Item 2:** an honest verdict on rlu + (if surviving) its v1 shape — invocation moments, write-target(s), collected metadata, the mark's content — reconciled with routelister's identity and the selections design. Bounds: deliver the *reliable-current-view* desire (the deeper want behind the literal file named); stay lightweight; no autonomy jump.

**Motivations a good answer serves (WHY-axis, preserved open):** reliable-situational-awareness ("reliable and up to date") · avoid-redundant-or-forgotten-work · close-the-loop-on-the-exhaust (the field becomes usable across days) · make-the-mark-automatic (mechanize, don't exhort) · bind-run-artifacts-to-routes (folder path + metadata on the mark) · (deeper) this is the turn-recording need surfacing from real practice — choice + run + outcome per route IS a recorded turn; the user may be re-inventing the selections file from field pain.

**Context the work needs (MQ2):** the crowboy field data (READ: the hand-annotated `_route.md` depth-signals incl. "DEVELOPED via full /aMVLwr inquiry", "IN PROGRESS — §1–§4 done, 119 tests green", "DONE", "RATIFICATION PENDING"; archived route-maps; routes taken up by later inquiries; informal runs); the routelister spec (`cognitive_harness/routelister/references/routelister.md` — the NOT-list's control-flow exclusion; `_route.md`'s "no process/control-flow state" boundary; the ALLOWED depth-pointer/depth-signal/first-seen/last-touched fields; LAYER 2 Process-coupling + Selection-creep); the Pipeline Architecture finding (`devdocs/inquiries/2026-06-11_12-47__navigational_session_queue_dispatcher_possibilities/finding.md` — the selections file: five states + entry-triple + single-writer; field-vs-selections "could-do vs decided-about"; the two writing moments admit/close-out); the SUSTRALL launch checklist (`devdocs/inquiries/2026-06-11_16-45__sustrall_next_main_steps_and_alternatives/finding.md` — Turn 1 = the selections file; mechanisms-beat-exhortations / zero-for-109); the `/aMVLwr` runner spec (route-maps archived; `_route.md` stays).

**What would fail:** marks that only work when a runner is used (misses the stated informal case); a mechanism requiring the user to remember a closing step with no structural support (the zero-for-109 lesson); quietly turning routelister into a process-tracker (identity violation slipped instead of flagged); ignoring the archived-vs-living file fact; dismissing the user's proposal without extracting its correct core; a heavyweight orchestration platform where a small updater was asked for.

## Considered Articulations

**Item item-1 — the tracking problem + the option-space:**
1. *(option-map-first)* "Enumerate the placement options — mark routelister.md / formalize `_route.md` marks / a per-project selections file / hybrids — with mechanisms (wrapper skill / post-hoc command / runner integration) and triggers, each with trade-offs and the routelister spec's verdict."
2. *(diagnosis-first)* "Name the gap precisely: routelister EXCLUDES run-state by spec, nothing else owns it, and crowboy's hand-annotated marks are the symptom — then derive the options from where the state can legally live."
3. *(committed-design-first)* "Recognize the gap as exactly what the selections file was designed for — evaluate whether deploying it per-project + a small updater mechanism solves tracking without touching routelister's identity."
4. *(field-evidence-first)* "Treat the crowboy hand-practice as the requirements spec: what the user wrote by hand (status + pointer + summary per identity) IS the needed record; design the mechanism that produces those entries without hand-editing."

**Item item-2 — the rlu proposal evaluation:**
1. *(as-proposed)* "Build rlu exactly as sketched: invoked at run-start with the map path + route; wraps the work; at the end writes RAN + folder/metadata back into that routelister.md."
2. *(two-moment form)* "Build rlu as the two writing moments the selections file already defines: `rlu start` records the pick (admission; in-flight), the work happens normally, `rlu done` completes the row — robust to sessions ending; identical to the turn-record's admit/close-out."
3. *(retarget the write)* "Keep rlu's mechanism but aim the write at the LIVING artifacts: the per-project selections file as source of truth + a bounded manifestation-pointer in `_route.md` (the depth-pointer field the spec already allows); routelister.md snapshots stay pure perception; optionally a projected status view."
4. *(post-hoc-only minimal)* "Skip wrapping: `rlu mark <target> <route> <artifact-path>` run AFTER any work — the smallest reliable mechanism; wrapping is sugar."
5. *(runner-integration complement)* "Runner-executed routes report back at CONCLUDE (an optional `route:` argument the runner writes back on completion); rlu covers the informal-session case — two mechanisms, one record."

## Scope Check

**IN scope:** the gap diagnosis; the option-map with spec verdicts; the placement recommendation; the rlu verdict + v1 shape (invocation, write-targets, metadata, the mark); the hand-practice resolution; cross-project workability (crowboy as the live deployment); whether anything in routelister's spec needs an explicit, flagged amendment.

**OUT of scope:** building rlu in this inquiry (design first; the build is its own step on the user's go); redesigning routelister's enumeration; autonomy changes (the user remains the Selector); the L2+ gate machinery.

Question covers goal — the nine considered articulations span diagnosis, options, placement, the proposal's mechanics, and the complements.

**Specific-vs-pattern check:** the user names a specific mechanism (rlu) and a specific file (routelister.md); the ask ("what are our options") is the general pattern (route run-state tracking). Address the general space with rlu as a first-class candidate inside it — both layers explicitly in scope.

## Layer Commitment

**Primary layer: MEANING (with the process sketch as its consequence).** The load-bearing question is what KIND of information run-state is and WHERE it belongs — routelister's perception artifacts vs a decided-about ledger — i.e., the identity boundaries of routelister's files and the selections file. The rlu v1 shape (process: invocation moments, write mechanics) follows from that placement and is settled only to sketch level.

**Other layers, handled:**
- **Process** — rlu's exact wrap/closing mechanics: sketched (the moments + targets), not fully specified; the build step refines.
- **Structural** — the mark's exact schema / the selections file's column format: deliberately gated (schemas follow practice; the selections file's schema is already gated on ≥3 grooming passes in the Pipeline finding).

*Sequential note:* if the verdict requires amending routelister's spec (e.g., legalizing a bounded engagement-pointer in `_route.md`), that amendment is flagged as its own explicit edit with the user's go — not performed silently inside this inquiry.

## Synthesis Trigger

**Fired** — the inquiry consumes and must reconcile multiple prior commitments:

- `cognitive_harness/routelister/references/routelister.md` (the routelister spec) — commits: enumerate-not-select; the NOT-list excludes control-flow/process moves and dispositions; `_route.md` holds ONLY the within-concept concept-map ("no process or control-flow state"), while ALLOWING depth-pointers/depth-signals/timestamps; LAYER 2 failure modes Process-coupling and Selection-creep. The tracking design must either respect these boundaries or amend them explicitly.
- `devdocs/inquiries/2026-06-11_12-47__navigational_session_queue_dispatcher_possibilities/finding.md` (the Pipeline Architecture) — commits: the selections file as the decided-about ledger (five states; entry-triple; single-writer; field-vs-selections distinction); the two writing moments (admit / close-out); turn-validity by construction. The tracking gap looks like this design's exact use-case — re-test that it actually covers the field pain (including informal runs and cross-project use).
- `devdocs/inquiries/2026-06-11_16-45__sustrall_next_main_steps_and_alternatives/finding.md` (the launch checklist) — commits: Turn 1 = the selections file; mechanisms-beat-exhortations (zero-for-109); the two-moment observation mechanism. rlu's mechanics must align (a closing step with no structure rots).
- The crowboy field artifacts (4 inquiries + `_route.md` hand-annotations) — the empirical record this design must explain and serve.

CONCLUDE will require an `## Inherited Commitments Re-test`. Plan Sensemaking and Critique to re-test: (a) does run-state in routelister's files violate the spec's identity boundary, and is the depth-pointer field a legal home for a bounded manifestation-pointer? (b) does the selections file, deployed per-project, actually deliver the user's "one reliable up-to-date view" — or does the user's looking-at-the-map habit demand a projection onto the map files too? (c) do rlu's wrap mechanics survive the sessions-end-unpredictably reality (the two-moment form vs the single-wrap form)? (d) is the crowboy hand-practice fully absorbed (nothing it recorded becomes unrecordable)?
