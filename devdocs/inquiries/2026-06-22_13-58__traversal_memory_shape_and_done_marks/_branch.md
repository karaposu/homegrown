# Branch: Traversal-Memory Shape & Route Done-Marks (refining the prior finding)

## Source Input

The user's raw request, preserved verbatim (also in `articulate_simple.md`'s `## User Input`):

```text
u said

The clean way to picture it: the map is redrawn; the log is yours. routelister.md is a map, redrawn from the territory each survey. What you want is a travel log — where you went, what you chose, what you found. You never write your journey onto the map; you keep a log. (The ✓-column was always a journey-mark on the map — that's why it kept getting wiped.)

What to actually do: keep routelister a pure two-file enumerator; start a small, human-owned travel log (the first traversal-memory artifact) — a running table of route-id · why-selected · outcome — which can live right beside the map but is never touched by routelister. That single move scratches your ergonomic itch and takes the project's literal first step toward its era-goal.

i really like this example u gave. although there are nuances.

for example routelister.md is not a whole map , it is map piece. and there are dozens of active map pieces. and they are being worked on in asycn manner. So it makes sense to bond adding marks to the map for operational ease.  and also u said we need travel log instead, to save where you went, what you chose, what you found, i think this is wrong approach. This kind of approach because we don't know, for example, how much how much things we will get. We will see. And we don't know also regarding the, let's say, something is decided, but it's about the code, but how we will create a log for this code. We have to reduce the meaning of this code into the, like, natural language, which is bad. So the moment you are trying to track the code base using natural language, using logbook, then things kind of get messy. And we already have the code or we already have an MVL loop, which is running the kind of brainstorming ideas, which also produces the MD files. So it is a lot better than just creating a log because we already have these artifacts existing inside the project. They are all traceable. So the idea of just writing, like, what is done and where it is done doesn't make sense too because it already exists in the codebase.

I also agree with you regarding root lister shouldn't contain all the information regarding the selected roots and how they are implemented. I just suggested that it should only include some marks. Is it done or not? Like, some some generic, uh, readable understanding if this root is explored or not. Um, and what you said regarding the traversal memory, it is correct. We need something like this, but I think this is not something that's gonna be, uh, an MD file. Traversal memory is actually the session context of the let's say, maybe navigational session, and it knows what's what's what's happened, what's not happened, or maybe not navigational session, but, actually, the orchestrator session. Yeah. This makes more sense because navigational session doesn't choose. It just kind of navigates, but maybe it's to navigate everything, all the parallel kind of asynchron routes. Maybe it also needs to have some kind of memory. I don't know. This is something to discuss later.
```

## Articulation Reference

- **File:** `devdocs/inquiries/2026-06-22_13-58__traversal_memory_shape_and_done_marks/articulate_simple.md`
- **Itemize count:** 1
- **Per-item identifiers:** `I1` — the done-marking + traversal-memory architecture refinement
- **Verdict:** HIGH-PROCEED
- **Flagged conditions (if any):** none — but this is a **correction of a prior finding** (`devdocs/inquiries/2026-06-22_10-37__routelister_todo_md_third_output/finding.md`); the finding must `refines:` it and re-test its inherited commitments.

## Question

**(I1, literal restatement):** *"I like the map/log example, but there are nuances. (a) routelister.md is not a whole map — it's a map PIECE (dozens, async), so marking it for operational ease makes sense. (b) The travel-log shape (where you went / chose / found) is wrong: we don't know the volume; reducing code-meaning to natural language is lossy; and the outcomes already exist as traceable artifacts (code + MVL findings), so re-logging duplicates. (c) I agree routelister shouldn't hold full route-implementation detail — just minimal marks (is it done/explored). (d) Traversal memory is a real need but it's NOT an MD file — it's the orchestrator SESSION's context (not navigational, which doesn't choose; though navigational might need memory for parallel routes — discuss later)."*

**What kinds of asks this carries (MQ1 verdict-axis — preserved as open):**
- **correct/refine** the prior finding (this is a correction of `2026-06-22_10-37`);
- adjudicate — should routelister.md carry a minimal done/explored **mark** (the user now says yes — reversing the prior "drop the ✓")?;
- adjudicate — is the **travel-log shape** (route-id·why·outcome) wrong (the user says yes: duplicative + lossy)?;
- adjudicate — what **IS** traversal memory (the user: the orchestrator SESSION's context, not an MD file)?;
- produce the **corrected architecture** (minimal-mark + no-fat-log + traversal-memory-as-session-context);
- note the explicitly-**deferred** sub-questions (navigational-session memory; the full locus/schema).

**What action-endpoints are plausible (MQ3 intent-axis, WHAT — preserved as open):**
- correct the prior's two sub-recommendations (reject the fat log; reverse the drop-✓);
- establish the right shape/locus of cross-run memory (thin/pointer + session-context, not fat-NL);
- keep a minimal operational done/explored mark on route-pieces;
- avoid lossy duplication of what artifacts already hold;
- defer the unresolved parts (navigational memory; full schema).

## Goal

**Deliverable shape (Deconstruct):** a **corrected architecture** — a verdict on (keep a minimal route-mark; reject the fat travel-log; traversal memory = session-context + thin pointers, not a fat MD file) **+** a **re-test of the prior finding's commitments** (which survive, which are corrected). Kinds: a conceptual/architecture refinement + a prior-commitment re-test; possibly a small spec note (the minimal mark) — but explicitly NOT a fat-log schema. Bounds: corrects the prior finding; respects the canon ("one enumerator, two controllers"; artifact-first warming); the **don't-duplicate-artifacts** stance; defers the navigational-memory + full-locus/schema questions; lightweight + emergent.

**Motivations a good answer might serve (MultiDepth WHY-axis — preserved as open, not chosen):**
- **avoid-lossy-duplication** — don't reduce code/decisions to NL; don't re-record what artifacts already hold (the dominant motive);
- **operational-ease** — a quick done/explored mark across dozens of async pieces;
- **correct-architecture** — locate traversal memory correctly (session-context vs standing document);
- **emergent-not-premature** — "we'll see"; don't impose a rigid log schema before the shape is known.

**Context the answer needs that isn't in the raw input (MQ2 context-need — preserved as open):**
- **verdict:** the PRIOR finding's specific recommendations (the travel log = route-id·why·outcome; "drop the ✓") — both now under correction; the CANON (traversal memory = "visits, selections, rationales, outcomes" — does "outcomes" mean *re-described* or *pointed-at*?; "one enumerator, two controllers"; the cross-run-steering doc's ARTIFACT-FIRST navigation + WARMING; the cargo line "Remembering → traversal-memory ARTIFACTS" — artifact-leaning, in tension with "not an MD file"); the EXISTING traceable artifacts (code + MVL findings) that already record outcomes; routelog.
- **kinds:** what a "mark" is (done/explored, a small readable state); WHO adds it (human, on a static concluded piece?); map-PIECE vs whole-map (per-inquiry, dozens, async/parallel); "session context" as memory (ephemeral vs durable; reconstructed-by-warming vs persisted); the DUPLICATION boundary (record only what has no artifact home — the selection-rationale?); "we don't know the volume — we'll see."
- **stance:** operational-ease; **don't-duplicate-existing-artifacts** (load-bearing); lossy-NL-avoidance; emergent-not-premature; session-memory vs durable-artifact; the deferred parts.

**Negative spec / what would fail (MQ4 boundary-axis — in-statement + extrinsic):** the fat travel-log as a re-description of outcomes is EXCLUDED (lossy + duplicative); routelister must NOT carry full route-implementation detail (only minimal marks); traversal memory is NOT (just) a standing MD file; DON'T duplicate what already exists in code/findings; the "navigational session also needs memory" + the full locus/schema are explicitly DEFERRED ("discuss later"); extrinsic (canon) — still "one enumerator, two controllers" (the minimal mark must be human-added, never routelister-authored-as-tracking).

**The load-bearing joint axis (MQA reconcile):** the correct **SHAPE and LOCUS of cross-run memory, given that outcomes already exist as traceable artifacts** — a fat standing MD log (rejected: duplicative + lossy), vs a thin durable pointer-record + session-reconstruction-by-warming, vs purely the orchestrator session's ephemeral context. Paired: **the minimal operational route-MARK (on the piece) is separable from the rich MEMORY (relocated to session/thin-durable)** — the prior finding conflated these; the refinement pulls them apart. This is the central adjudication.

## Considered Articulations

**Item I1 — the done-marking + traversal-memory architecture refinement:**
1. **Minimal mark on the piece + thin pointer-memory.** routelister.md (a per-inquiry map-piece) carries a minimal human-added done/explored mark (operational); the cross-run memory is THIN — selection + rationale + POINTERS to existing artifacts — never a fat NL re-description of outcomes.
2. **Traversal memory = orchestrator session-context, reconstructed by warming.** The durable layer is thin (or absent); the rich "what happened / what didn't" is the orchestrator SESSION's context, rebuilt each session by reading the already-existing traceable artifacts (the canon's artifact-first warming) — not a standing logbook that rots against the real artifacts.
3. **Reject the fat log; lean on existing artifacts.** The prior route-id·why·outcome table is wrong because outcomes already live in code + MVL findings (traceable); record only the NON-duplicative sliver (the between-run selection-rationale, which has no artifact home) + pointers.
4. **Keep the mark (reverse the prior drop-✓).** The prior "drop the ✓" was wrong for the map-PIECE case: a concluded piece isn't regenerated, so a minimal human-added explored/done mark on it is durable and operationally useful across many async pieces.
5. **Defer the locus.** Whether traversal memory is purely session-context, a thin durable file, or both — and whether the navigational session needs its own memory for parallel routes — is explicitly "discuss later"; this round commits the PRINCIPLES and defers the full locus/schema.

## Scope Check

Question covers goal: the Question (correct the prior; adjudicate the mark + the log-shape + the memory-locus) and the Goal (a corrected architecture + a prior-commitment re-test, with the deferred parts bounded) align. The articulation honors the user's two corrections (keep a minimal mark; reject the fat log) and the relocation (traversal memory = session-context), and preserves the deferred sub-questions as scope boundaries.

**Specific-vs-pattern check:** the user argues from specific mechanisms (the ✓, the route-id·why·outcome table), but the ask is the **broader pattern** — the right shape/locus of cross-run memory and route-marking given that the project already produces traceable artifacts. Address the pattern, grounding in the prior finding + the canon + the real specs.

**Prior-finding correction:** this inquiry **refines** `devdocs/inquiries/2026-06-22_10-37__routelister_todo_md_third_output/finding.md`. The finding's frontmatter must declare `refines:` it, and (since ≥3 commitments are inherited) the finding MUST include an `## Inherited Commitments Re-test` section per CONCLUDE. Sensemaking and Critique must do the actual re-testing (which prior commitments survive, which are corrected — notably the travel-log shape and the drop-✓).

## Layer Commitment

**Primary layer: MEANING.** The correctness-determining adjudication is a meaning question — *what IS cross-run "traversal memory" (the orchestrator session's context, reconstructed by warming on existing artifacts — vs a standing MD logbook), and what IS the route "mark" (a minimal human-added operational done/explored signal on a static map-piece — vs routelister tracking-state)?* If the meaning is settled wrong (e.g., a fat NL log that duplicates artifacts, or routelister authoring tracking-state), the realization is incoherent.

**Other layers considered, out of scope for THIS run:**
- **Structural** (the exact mark form on the route record; the thin-pointer-memory shape if any durable part exists) — real, but **sequenced second**: designable only once Meaning fixes that the mark is minimal+human-added and the memory is session/thin-not-fat.
- **Process** (the orchestrator session's warming/reconstruction mechanism; the navigational-session-memory question) — the user explicitly **defers** this ("discuss later"); touched as the canon lens, not designed here.

**Order:** Meaning first (this inquiry — what the mark and the memory ARE) → Structural realization second (the minimal mark; any thin durable part) → Process (orchestrator/navigational session memory + warming) when the user re-opens it. Meaning-first mirrors the chain.

## Synthesis Trigger

*(Omitted as a multi-prior consolidation — this inquiry refines ONE prior finding, it does not roll up two or more. BUT note: because it `refines:` a prior finding from which ≥3 commitments are inherited, CONCLUDE's Inherited-Commitments-Re-test requirement fires via the refines-path; the finding will include that section. See the Scope Check "Prior-finding correction" note.)*
