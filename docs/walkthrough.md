# Routelister — A Walkthrough

*What it is, what it does, and how it behaves across real scenarios — including staged runs and running it after the MVL loop.*

> **Status.** This walkthrough describes routelister's **settled design** (its meaning, mechanism, route-type, input contract, output, cross-run behavior, and its boundary-use architecture), produced across the `2026-05-28`→`2026-05-30` inquiry chain in `devdocs/inquiries/`. The boundary-use layering (routelister = enumerator; the meta-loop = controller; loop-control moves are the meta-loop's *decisions*, not an enumerated menu) is settled in the `2026-05-30` findings — see §9. The structural **spec** (`cognitive_harness/routelister/`) has not been authored yet; this is the design it will be authored from. Where this walkthrough says "routelister does X," read it as "routelister is designed to do X."

---

## 1. The one-paragraph version

**Routelister is a thinking discipline that looks at any body of material — a project, a codebase, a document, a finished inquiry — and lists the *concepts* in it as *typed prescriptive routes*: directions you could take toward a goal.** It does not act, it does not choose — it *enumerates the field of directions*, each tagged with what kind of direction it is and how to engage it. Point it at a project with a goal and it answers: *"here are the concepts that live here, and here is each one framed as a move you could make toward your goal."*

It is the clean replacement for the older **routeman** discipline. routeman's identity was tangled up with the cognitive loop it ran inside; routelister is **standalone and intrinsic** — it runs on any territory, loop or no loop.

---

## 2. The mental model: a project is a territory of directions

Most tools answer "what is here?" (a list) or "how does this work?" (a model). Routelister answers a different question: **"what could I do next, across everything here, toward my goal?"**

It treats whatever you give it as a **territory** full of **concepts**, and it turns each relevant concept into a **route** — a direction framed prescriptively ("deepen the auth mechanism," "reconcile the README with the implementation," "develop the messaging adapter"). The output is a *map of directions*, not a description and not a decision.

Three things make this precise:
- A **concept** qualifies as a route if engaging it either **advances the goal** (a *teleological* direction) or **sharpens the understanding the goal rests on** (an *epistemic* direction) — and *abstractness is no bar*: an abstract-but-foundational concept counts.
- A **goal** is required, but it **may be fuzzy** — "I'm not sure what I want here, help me see the landscape" is a valid goal; routelister will surface goal-sharpening (epistemic) routes alongside goal-advancing ones.
- The goal is **received, not invented** — routelister doesn't set your goal; it lists directions relative to it.

---

## 3. Core concepts

### 3.1 Concept-identity vs manifestations (the unit)

A concept rarely exists as one clean thing. "Authentication" might appear as a README paragraph, an implementation, a deprecated v1, and an active v2 — four **manifestations** of one **identity**. Routelister's unit is the **concept-identity** (the invariant), generalized over its manifestations. This keeps the output compact: at the project level you get *one route per identity*, not one per artifact.

### 3.2 A route's type — a three-axis signature

Every route carries a **type-signature** with three axes:

| Axis | Values | What it tells you |
|---|---|---|
| **grain** | `project-space` / `concept-space` | the route's *scale* — a whole identity, or one manifestation of a single identity |
| **kind** | `teleological` / `epistemic` | the route's *value* — does engaging it advance the goal, or sharpen the understanding it rests on |
| **engagement-type** | a verb (below), nested under `kind` | *how* to engage the concept |

The **engagement-types** are a fixed nine-verb vocabulary, partitioned by kind:
- **teleological** (advance the goal): **DEEPEN · DEVELOP · PURSUE-SEED · INVESTIGATE-FRONTIER**
- **epistemic** (sharpen understanding): **REFINE · REFRAME · DIAGNOSE · TEST · CONSOLIDATE**

(These are the *concept-engagement* subset of routeman's old 16 move-types; the other seven — TERMINATE, RE-RUN, WIDEN, DIFFERENT-APPROACH, REVISIT, UNBLOCK, MERGE — were *loop-control* moves and don't transfer. They are not engagement-types, and they are **not a menu routelister — or anything else — enumerates**: they are the **meta-loop's control decisions** — a small fixed vocabulary the loop-controller evaluates against the loop-state. See §9 for the full layering.)

(note: it is intesresting but maybe these belong to meta loop or sth, whichi makes the decision. 
and one another thing is, why we dont have a engagement-types dont do anything? or low priorty delay , hihg priorty delay (e.g it is sth importnat, it is delayed till peripharals are more defined. and in this situtaion it differs from low priorty delay bc high priority delay is what our next moves should keep in mind while low priority one doesnt matter and can be neglected ) ? for example  if we have many routes and some are not importnat , these 3 engagement might useful.    )

Importantly, these are **fixed axes over an open set of routes**: the three axes are a small fixed vocabulary, but the routes themselves are open and drawn fresh from each territory. Routelister has no fixed "list of route-types" you pick from — it perceives the routes in the territory and types each as it goes.

### 3.3 The two run modes (the two axes of traversal)

Routelister runs *one* operation on *two* spaces:
- **Root / project-space (breadth) run** — *"what concept-identities live here?"* → one route per identity across the whole territory. The default discovery run; stays compact (identities, not manifestations).
- **Concept-targeted / concept-space (depth) run** — given one identity, *"what are its manifestations, and what do they imply?"* → that identity's manifestations as routes, with **divergences flagged as high-value epistemic routes** (e.g., "the README and the implementation disagree — reconcile or choose").

### 3.4 What you hand it (the input contract)

Routelister requires two things, supplied flexibly:
- a **scope / territory** — *something to enumerate from* (a project root, a codebase subtree, a documentation set, a finished inquiry's artifacts, or even a passage of raw text describing a space);
- a **goal** — the directional bias (may be fuzzy).

It is **folder-independent by construction**: it is *not* tied to any particular directory. "Routelister needs a scope to work" is true; "routelister needs a specific inquiry folder" is false.

---

## 4. What routelister is NOT (the boundaries)

These exclusions are what keep routelister a distinct, coherent discipline:
- **Not a selector** — it enumerates *all* the directions; it never picks the one to take. (It *can* tag each route with an attributive Priority/Confidence, which is description, not choice.)
- **Not an executor** — it lists "refine X" as a *route*; performing the refinement is a downstream discipline's job.
- **Not `/comprehend`** — it emits *prescriptive routes* (directions), not a *descriptive model* ("how the project works"). Complementary, not the same.
- **Not `/surfacing`** — `/surfacing` tags items by relevance; routelister *individuates items into concept-identities and prescribes each as a typed route*. (It shares a "sweep the territory" perception step with `/surfacing`, but its distinctive core is individuate-and-prescribe.)
- **Not the goal-setter** — the goal is exogenous.
- **Not loop-bound** — it does not require a completed cognitive cycle and is not defined by sitting between cycles.
- **Not an inter-concept dependency-graph builder** — it never records "concept A depends on concept B." Its only structure is *within-concept*: an identity contains its own manifestations. (More on this in §6.)

---

## 5. How it works (the mechanism): sweep → individuate → frame

A routelister run is three steps:

1. **Sweep** — perceive the goal-relevant territory, drawing candidate items into attention (a `/surfacing`-style traversal; it *perceives by enumerating*, it does not invent).
2. **Individuate** — group the swept items into concept-identities. This is the step that turns item-level perception into identity-level routes.
3. **Frame** — cast each identity as a typed route (grain × kind × engagement-type), with prescriptive guidance.

### 5.1 Individuation — the heart of it

Individuation is the judgment "are these two artifacts the *same* concept, or *different* ones?" It is:
- **Goal-relative** (and therefore decidable): there's no goal-free answer to "are hashing and tokens the same concept?", but *relative to a goal* there is ("audit the auth system" merges them into "authentication"; "fix the hashing bug" splits them). The goal fixes the resolution.
- **Signal-guided**: it uses *within-concept* signals — *shared referent* (about the same thing), *manifestation-of* (one describes/implements/versions the other), *shared goal-role* — and decides "same" or "new."
- **Lean-to-split**: when unsure, treat two things as *separate* identities, because over-merging *hides* a concept (you never see it again — unrecoverable), while over-splitting just lists a near-duplicate (visible, mergeable later).
- **Incremental**: a later depth run can reveal that one identity is really two, or two are really one, and re-individuate — converging over time.

This is structurally the same judgment library cataloging makes (is this a new *work*, or a new *edition* of an existing work?) and data systems make (entity resolution) — a tractable-but-soft judgment, not a crisp algorithm.

### 5.2 When a breadth run is "done"

It terminates when the territory has been swept at *identity resolution*, uncertain identities are included (lean-to-split), and a sweep cycle yields no new identities. Overload is held off by listing *identities not manifestations*, the *goal-bias*, and a *frontier-flag* for sub-territories when even the identities are too many.

---

## 6. What it produces (the output)

A run produces **two files, and routelister writes both itself — every run, standalone included** (routelister is cumulative *and* standalone, so it owns its own persistent state; nothing external is guaranteed to be present to write it). They mirror routeman's `routeman.md` + `_route.md`:

### 6.1 `routelister.md` — the Route-Map (the per-run output)

A **Map Header** (identity count + high-priority count), a **Route Index** (a scannable table), the **per-route records**, an **Excluded section** (notable candidate-concepts that were considered and rejected, *with reasons* — never silently dropped), and **Telemetry**.

Each **route record** carries:

| Group | Fields |
|---|---|
| **Route Identity** | Direction (the concept as a direction) · Goal · grain · kind · engagement-type |
| **Route Meaning** | Movement (what engaging it does) |
| **Route Reasoning** | WHY (territory-evidence) · why-this-might-be-important |
| **Route Attribution** | Priority · Confidence *(attributive — not a ranking-of-which-wins)* |
| **Route Guidance** | Guidance Mode (none/compact/full/expand-on-drill) · Pointers, each with its own WHY |
| **Route Depth-link** | a *within-concept* pointer to this identity's own depth run (if drilled) + a compact depth-signal |

Example record:

```
Direction:        the authentication mechanism
Goal:             a hardened, understood auth path
grain:            project-space
kind:             epistemic
engagement-type:  DIAGNOSE
Movement:         examine why auth has its current shape
WHY:              the goal (harden auth) rests on understanding the current mechanism
Priority:         HIGH    Confidence: MED
Guidance Mode:    compact
  · "start from the token-issuance path"  (bc that's where the goal's risk concentrates)
Depth-link:       none (not yet drilled)
```

### 6.2 `_route.md` — the identity-set / index (the persistent concept-map)

A registry: `{ identity → { own-depth pointer, depth-signal, individuation history, first-seen / last-touched } }` plus an invocation log. This is **the project's persistent concept-map** — the same object that the listing builds, the output persists, and the cross-run model reads (see §7).

**The boundary that keeps it within identity:** *no field's value is a different concept-identity.* The depth-link points to the *same* identity's own depth; the index never records edges *between* concepts. (That inter-concept dependency graph is explicitly out of routelister's identity.)

---

## 7. Cross-run behavior — the persistent concept-map

Routelister is **cumulative**: runs build on each other. The mechanism is simply that the running identity-set is **persistent** — a run **LOADs** the index, runs the ordinary listing on that pre-seeded set, and **PERSISTs** it back. (It is not a separate "cross-run phase"; it is the listing's working state made durable — a load-modify-save loop, exactly like an incremental build that loads a cache, recomputes what changed, and saves it.)

- **LOAD** the index (scoped: a root run loads the whole index; a concept-target run loads one entry).
- **INTEGRATE** — run the listing on the pre-seeded set: each swept item *matches* a loaded identity (re-confirm it, attach/refresh its depth-signal) or *starts a new one*; identities the sweep doesn't re-confirm are flagged **stale**; depth-revealed splits/merges re-individuate.
- **PERSIST** — save the updated index + an invocation log + the run's route-map.

Three guarantees:
- **Idempotency-at-fixpoint** — re-running on an unchanged territory + goal produces the same map (a no-op at the fixpoint). *Perception governs* (the current sweep re-confirms what's actually there); the loaded set only *assists* (matching + enrichment). It converges; it doesn't drift.
- **Enrich-not-dump** — a previously-drilled identity's route gets a compact *depth-signal* ("has an unresolved README-vs-impl divergence"), never a dump of its manifestations into the breadth map.
- **Stale-flag-not-delete** — the *route-map* shows only live, re-confirmed identities; stale entries live in the *index*, flagged and prunable, so the output stays compact while the memory accumulates.

---

## 8. Scenarios

### Scenario 1 — A single root run (point it at a project)

You have a project and a goal: *"harden the auth system."* You run routelister at the project root.

- It **sweeps** the project, **individuates** the concept-identities relevant to auth (authentication, session management, the token store, the login UI, the password-reset flow, …), and **frames** each as a typed route.
- You get a compact **route-map**: one route per identity, each typed — e.g. *DIAGNOSE the auth mechanism* (epistemic), *DEEPEN the token store* (teleological), *TEST the password-reset flow* (epistemic), *DEVELOP the missing rate-limiter* (teleological) — with WHY + guidance + an attributive priority.
- It **persists** the index (the project's concept-map for this goal) and writes `routelister.md`.

You now have *the field of directions*, not a single recommendation — you choose what to pursue.

### Scenario 2 — A staged run (root → drill A → drill B → root again)

This is routelister's **cumulative** behavior in action.

1. **root #1** — as Scenario 1: the breadth map, persisted; no concept drilled yet.
2. **drill concept A** (concept-target run on "authentication") — a *depth* run lists A's manifestations as routes and finds a **divergence**: the README describes one flow, the code implements another → it emits *RECONCILE/REFRAME the README-vs-implementation divergence* (a high-value epistemic route). It **persists** that depth result into A's index entry.
3. **drill concept B** (concept-target run on "the token store") — depth run; clean, no divergence. Persists B's entry.
4. **root #2** — re-runs the breadth sweep, but now **LOADs the index carrying A's and B's depth**. The breadth map is the *same identities as root #1*, but **A's and B's routes are now enriched** with depth-signals: *"authentication — drilled; unresolved README-vs-impl divergence → an epistemic route is available"*, *"token store — drilled; clean."*

The second root run is *smarter* than the first — same compactness, more knowledge — because earlier depth runs permanently enriched the shared concept-map. (And it's idempotent at the fixpoint: had A and B not been drilled, root #2 would equal root #1.)

### Scenario 3 — Running after the MVL loop (routelister as the "what next" step)

The MVL family (`/MVL`, `/MVL+`, `/MVLw`) runs a thinking cycle on a question and produces a finished inquiry (a finding + reasoning trail). The natural next question is *"what do we do next?"* — and that is routelister's slot.

A **completed cycle's artifacts are simply one kind of territory** (this is the key reason routelister is standalone: routeman's old "completed-cycle state" turned out to be a *special case* of routelister's general "territory"). So after an MVL/MVLw inquiry concludes:

- Run routelister with the **inquiry's artifacts (or the project) as the territory** and the **inquiry's goal / frontier as the goal**.
- It enumerates the **next-direction routes**: *DEEPEN the surviving idea*, *PURSUE-SEED the seed a killed candidate left*, *INVESTIGATE-FRONTIER the open question the finding flagged*, *DIAGNOSE why a candidate failed*, *CONSOLIDATE the related findings*.
- The output is the *concept-field* for where the cycle landed — the next-direction **concept-routes**, each typed and guided. routelister stops there: it perceives the concept-moves; it does **not** add the loop-control moves (terminate / widen / merge / …), and it does **not** choose. Those belong to the meta-loop (below).

This is routelister being **used** at the forward boundary — a *composition role*, not part of its identity (the same routelister, on the same territory-and-goal contract, simply applied to a just-finished inquiry). The caller is the **meta-loop** (the loop-aware controller): at the boundary it hands routelister the finished cycle as territory, takes back the concept-field, then makes the loop-control *decisions* (terminate / widen / merge / re-run / unblock / revisit) from its own fixed vocabulary and the loop-state, and selects what to pursue. There is no separate "boundary protocol" doing this — it is the meta-loop's boundary step. (Concretely: `/MVLw …` concludes → the meta-loop runs routelister on the inquiry folder + the project to get the concept-field → the meta-loop decides + selects. See §9 for the full layering.)

### Scenario 4 — A fuzzy goal at the project root

You point routelister at a project but your goal is half-formed: *"I think this codebase has drifted, but I'm not sure where."*

Because the goal may be fuzzy, routelister leans on its **epistemic axis**: alongside any goal-advancing routes, it surfaces **goal-sharpening** ones — *DIAGNOSE why the module structure is the way it is*, *RECONCILE the divergences between docs and code*, *REFRAME "drift" into the specific concepts that embody it*. Engaging these doesn't just advance a goal — it *clarifies the goal itself*. Routelister is at its most useful exactly when you don't yet know what you want.

### Scenario 5 — Depth-first via Shape-H (`/comprehend → routelister`)

Routelister enumerates concepts-as-routes *standalone* — it doesn't need to deeply model each concept first. But when you want a *tested understanding* of a concept before routing it, you can compose: run `/comprehend` to build a model of the concept, then routelister to turn that understood concept into typed routes. This (called **Shape-H**) is **optional enrichment for depth**, not a prerequisite — the breadth enumeration stands on its own.

---

## 9. Where routelister fits

- **vs routeman** — same cognitive operation (enumerate directions toward a goal), with the loop-relativity defect removed. routelister is intrinsic and standalone; routeman is superseded.
- **vs the loop (MVL family)** — the loop *answers a question*; routelister *says what concept-directions are available next* (Scenario 3), by composition role. It is **used** at the boundary; being-a-boundary-tool is not part of its identity.
- **The clean architecture — one enumerator, two controllers.** What navigates the project is three roles, kept distinct:
  - **routelister — the enumerator** (this discipline): perceives the open **concept-field** on any territory. Loop-blind, so it is reusable anywhere.
  - **the meta-loop — the cross-inquiry controller**: *decides* the loop-control moves (terminate / widen / merge / re-run / unblock / different-approach / revisit) from a fixed vocabulary + the loop-state, *selects* among routelister's concept-routes, and owns cross-cycle memory + autonomy. Its boundary step calls routelister.
  - **the runner (`/MVL`, `/MVLw`) — the per-cycle controller**: decides conclude-or-iterate within a single cycle.

  The load-bearing seam: routelister **enumerates** (discovers an open field — concepts you must look to find); the controllers **decide** (evaluate a small fixed action-vocabulary against state). So the loop-control moves are *decisions*, not an enumerated menu — and there is **no separate "boundary protocol"** (it is the meta-loop's boundary step). The dependency points one way only: the meta-loop uses routelister; routelister never knows the meta-loop exists.
- **vs `/comprehend` and `/surfacing`** — complementary, not competing: `/surfacing` says *what's relevant*, `/comprehend` says *how it works*, routelister says *what directions you could take*.
- **The endgoal** — because runs accumulate into one persistent concept-map, routelister grows, over a project's life, into a living index of the project's concept-identities and the directions available from each. That cumulative concept-map is the navigation substrate the project is aiming at.

---

## 10. The settled design at a glance

| Piece | What it settled |
|---|---|
| **Identity** | a standalone, domain-agnostic, intrinsic concept-as-route discipline; enumerate-not-select; prescriptive |
| **Concept gloss** | engage-able as a direction that advances the goal (teleological) or sharpens it (epistemic); abstractness no bar; goal may be fuzzy |
| **Unit + ontology** | concept-identity (over manifestations); two axes — project-space breadth / concept-space depth |
| **Route-type** | grain × kind × engagement-type (the 9-verb concept-engagement vocabulary) |
| **Input contract** | a territory + a (possibly fuzzy) goal; folder-independent by construction |
| **Listing mechanism** | sweep → individuate → frame; individuation = goal-relative online clustering, lean-to-split, incremental |
| **Output** | TWO files routelister writes itself every run (standalone included): `routelister.md` route-map + `_route.md` (the persistent concept-map index) |
| **Cross-run** | load-modify-save the persistent index; idempotency-at-fixpoint; enrich-not-dump; stale-flag-not-delete |
| **Boundary use** | a *composition*, not an identity: the meta-loop (controller) calls routelister (enumerator) at its boundary step; routelister produces the concept-field; the meta-loop *decides* the loop-control moves + selects. One enumerator, two controllers (§9). |

*The design is complete; the structural spec (`cognitive_harness/routelister/`) is the next thing to author from it.*
