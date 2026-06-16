> **Loading note.** This file is loaded by `routelister/SKILL.md` at Step 0 and is intended to be read in full before the discipline executes. Every section below — identity, the route-type system, the listing mechanism, quality, output — is referenced by the protocol. Do not summarize or partial-load; the protocol's instructions assume all sections are in context.

---

# Structural Routelister — A Thinking Discipline

A thinking discipline for enumerating the concepts present in a body of material as typed, prescriptive routes — directions one could take toward a goal. Routelisting is not deciding and not describing — it is *perceiving the field of directions* a territory offers, and casting each as a typed move.

Rather than relying on intuition to decide "what could I do here," Structural Routelisting treats the production of the direction-field as a practiced methodology based on concept-individuation, three-axis route-typing, and a cumulative concept-map.

> **Structural Routelisting is the process of sweeping a bounded territory, individuating its goal-relevant concepts into concept-identities, and framing each identity as a typed prescriptive route (grain × kind × engagement-type) toward a received goal — enumerating the full field of directions without selecting, executing, or describing.**

---

## What Routelisting Is

**Routelisting is the cognitive operation of turning a territory into a map of directions: it perceives the concepts a body of material contains and prescribes each, relative to a goal, as a typed route one could take.** It answers a question neither a description nor a decision answers: *"what could I do next, across everything here, toward my goal?"*

Routelisting is not:
- **Selecting** (selecting picks the one move to take; routelisting enumerates *all* the directions and picks none).
- **Executing** (executing performs the move; routelisting lists "refine X" as a route — performing the refinement is a different operation).
- **Describing** (describing produces a model of how a thing works; routelisting produces *prescriptive directions*, not an explanatory model).
- **Surfacing** (surfacing tags items by relevance; routelisting *individuates items into concept-identities and prescribes each as a typed route* — it shares a sweep step with surfacing but its distinctive core is individuate-and-prescribe).
- **Goal-setting** (the goal is received, not invented).

Routelisting is the **direction operator** for a body of work: with it, any territory + goal becomes a compact, typed field of moves.

### The core operation: perceive-by-enumerating

Routelisting perceives a territory's directions by *enumerating* them — drawing out the concepts that are there and casting each as a route. It does not invent directions that the territory does not contain, and it does not rank the directions to pick a winner. The output is a *field*, produced by perception, not a *choice*, produced by judgment.

This is the load-bearing distinction the discipline is built on: routelisting **enumerates an open field** (the concepts in a territory are unknown until swept, unbounded, and specific to that territory). It does not *decide* — deciding evaluates a known repertoire against a state and commits, which is a different operation belonging to whatever consumes the field.

---

## 1. Identity

### 1.1 Verb-meaning (the cognitive operation)

**To routelist is to sweep a bounded territory, individuate its goal-relevant concepts, and cast each concept-identity as a typed prescriptive route toward a received goal — producing the full field of directions, typed and guided, without choosing among them.**

A cognizer is given a **territory** (something to enumerate from) and a **goal** (the directional bias, which may be fuzzy). Attention sweeps the territory; the swept items are grouped into **concept-identities**; each identity is framed as a **route** carrying a three-axis type-signature and prescriptive guidance. The output is a map of directions plus a persistent concept-map.

The operation is **purposive** (the goal biases which concepts count as routes), **intrinsic** (defined by what it does to a territory, not by where in any larger process it is called), and **cumulative** (runs build on a persistent concept-map). It is **domain-agnostic**: the territory may be a codebase, a document set, a corpus, a finished inquiry's artifacts, or a passage of text describing a space.

### 1.2 The unit — concept-identity over manifestations

A concept rarely exists as one clean artifact. "Authentication" may appear as a README paragraph, an implementation, a deprecated v1, and an active v2 — four **manifestations** of one **identity**. Routelisting's unit is the **concept-identity** (the invariant), generalized over its manifestations. At project scale the output is *one route per identity*, not one per artifact — this is what keeps the map compact.

### 1.3 NOT-list (what routelisting does not produce)

Each exclusion grounds in an intrinsic feature of the operation. Holding these is what keeps the discipline a distinct, coherent individual.

| Excluded | Intrinsic ground |
|---|---|
| **A selection / a chosen move** | Routelisting enumerates the full field; choosing among the field is single-move-decisive, a different operation. It may attach an *attributive* Priority/Confidence to a route (description), but never a ranking that picks a winner. |
| **An executed move** | The verb is "list, typed"; performing a listed route (doing the refinement, running the test) is a different operation. |
| **A descriptive model** | Routelisting emits *prescriptive routes* (directions framed as moves); explaining how the territory works is a different operation. |
| **Relevance-only tags** | Routelisting individuates items into concept-identities and prescribes each; tagging items by bare relevance, without individuation or prescription, is a different operation. |
| **The goal** | Routelisting is purposive but the goal is exogenous; it is received, never invented. |
| **Control-flow / process-control moves** | Routelisting lists *concept*-directions (engage *this concept* this way). Moves that act on a process rather than a concept — conclude the line, broaden the scope, redo a cycle, combine branches, clear a process gate, re-open a prior verdict — are control-flow decisions, not concept-directions; routelisting does not produce them. (These presuppose a running process; routelisting presupposes only a territory + goal.) |
| **A priority / disposition decision** | "Do this, defer that, drop the other" is a decision about *what to do with* routes; routelisting perceives each route's salience as an *attribute* (Priority/Confidence) but does not decide the disposition. |
| **An inter-concept dependency graph** | Routelisting never records "concept A depends on concept B." Its only structure is *within-concept*: an identity contains its own manifestations (see §5.3). |
| **A loop position / a between-process role** | Routelisting is not defined by sitting at any point in any larger process. It runs on a territory, full stop. *(How a caller uses its output is the caller's concern, not part of this discipline.)* |

### 1.4 Self-containment (an intrinsic property, not a relationship)

Routelisting is a **self-contained individual**. Its definition references only its own inputs (territory, goal), its own unit (concept-identity), its own output (the route-map + the index), and its own mechanism (sweep → individuate → frame). It does **not** reference, depend on, or point at any other discipline, protocol, runner, or larger process. A territory of any kind is valid input — including, as one ordinary case, the artifacts a finished piece of work left behind. What consumes the route-map, and what that consumer does with it, is outside this discipline and is not described here. Preserving this self-containment is a load-bearing identity property (see the LAYER 2 failure mode **Process-coupling**, §4.3).

### 1.5 Vocabulary

| Term | Definition |
|---|---|
| **territory** | The bounded scope routelisting enumerates from (a project root, a subtree, a document set, a corpus, a finished work's artifacts, or a passage describing a space). Required input. |
| **goal** | The directional bias relative to which concepts count as routes. Required, but may be fuzzy ("help me see the landscape" is valid). Exogenous. |
| **concept** | A teleological-or-epistemic unit in the territory: engaging it either *advances the goal* or *sharpens the understanding the goal rests on*. Abstractness is no bar. |
| **manifestation** | One artifact-level appearance of a concept (a file, a paragraph, an implementation, a version). |
| **concept-identity** | The invariant a set of manifestations share; routelisting's unit. |
| **route** | A concept-identity cast as a prescriptive direction toward the goal, carrying a type-signature + guidance. |
| **route-type** | The three-axis signature `grain × kind × engagement-type` (§2.1). |
| **grain** | `project-space` (a whole identity) / `concept-space` (one manifestation of a single identity). |
| **kind** | `teleological` (engaging advances the goal) / `epistemic` (engaging sharpens the understanding the goal rests on). |
| **engagement-type** | A verb naming *how* to engage the concept, nested under `kind` (§2.2). |
| **individuation** | The judgment "are these manifestations the same concept-identity, or different ones?" (§3.2). |
| **the index** (identity-set) | The persistent concept-map a run loads, updates, and saves as the **`_route.md`** state file (§5.3). |
| **attributive Priority / Confidence** | A per-route descriptive tag of perceived salience / formed-ness. Description, never a winner-ranking. |

### 1.6 Two run modes (the two axes of traversal)

Routelisting runs *one* operation over *two* spaces:

- **Root / project-space (breadth) run** — *"what concept-identities live here?"* → one route per identity across the whole territory. The default discovery run; stays compact (identities, not manifestations).
- **Concept-targeted / concept-space (depth) run** — given one identity, *"what are its manifestations, and what do they imply?"* → that identity's manifestations as routes, with **divergences flagged as high-value epistemic routes** (e.g., "the README and the implementation disagree — reconcile").

The two modes are the same sweep → individuate → frame mechanism applied at two scales (grain = `project-space` vs `concept-space`).

---

## 2. The Route-Type System

### 2.1 The three-axis signature

Every route carries a type-signature with three axes:

| Axis | Values | What it tells you |
|---|---|---|
| **grain** | `project-space` / `concept-space` | the route's *scale* — a whole identity, or one manifestation of a single identity |
| **kind** | `teleological` / `epistemic` | the route's *value* — advance the goal, or sharpen the understanding it rests on |
| **engagement-type** | a verb (§2.2), nested under `kind` | *how* to engage the concept |

The three axes are a **small fixed vocabulary over an open set of routes**: the axes are fixed, but the routes themselves are open and drawn fresh from each territory. Routelisting has no fixed "list of routes" to pick from — it perceives the routes in the territory and types each as it goes.

### 2.2 The engagement-type vocabulary

The engagement-types are a **fixed nine-verb vocabulary**, partitioned by `kind`:

- **teleological** (advance the goal): **DEEPEN · DEVELOP · PURSUE-SEED · INVESTIGATE-FRONTIER**
  - *DEEPEN* — go further into an established concept. *DEVELOP* — build a sketched concept toward an instance. *PURSUE-SEED* — develop a concept that was surfaced but not yet taken up. *INVESTIGATE-FRONTIER* — open an identified-but-unentered concept.
- **epistemic** (sharpen the understanding the goal rests on): **REFINE · REFRAME · DIAGNOSE · TEST · CONSOLIDATE**
  - *REFINE* — improve the precision of an existing concept. *REFRAME* — adopt a different framing of a concept. *DIAGNOSE* — investigate why a concept has its current shape. *TEST* — validate a concept against evidence. *CONSOLIDATE* — aggregate related concepts into a coherent whole.

An engagement-type is, definitionally, **a verb for how to engage a concept** — and every one is partitionable by `kind` (it either advances the goal or sharpens understanding). This is the membership test for the axis: a candidate is an engagement-type only if it can be placed under `teleological` or `epistemic`.

**Not engagement-types.** "Do nothing / don't engage," "low-priority / defer," "high-priority but defer until later" and the like are *not* engagement-types — they cannot be placed under either `kind` (deferring or neglecting a route neither advances the goal nor sharpens understanding). They are *dispositions toward a route*, a different category from *how to engage the concept inside it*. Their legitimate kernel is already carried elsewhere: perceived importance is the attributive **Priority** field; perceived formed-ness is **Confidence**; a concept that engaging does nothing toward the goal is not a route at all and belongs in the **Excluded** section (§5.1). The *decision* to act / defer / drop is not routelisting's (NOT-list, §1.3).

### 2.3 The input contract

Routelisting requires two things, supplied flexibly:

- a **territory** — something to enumerate from (a project root, a subtree, a document set, a finished work's artifacts, or a passage describing a space);
- a **goal** — the directional bias (may be fuzzy).

It is **folder-independent by construction**: it is not tied to any particular directory. "Routelisting needs a scope to work" is true; "routelisting needs a specific folder" is false. A fuzzy goal is honored by leaning on the epistemic axis (surfacing goal-sharpening routes alongside goal-advancing ones).

---

## 3. Process Model — sweep → individuate → frame

A run is three steps.

### 3.1 Sweep

Perceive the goal-relevant territory, drawing candidate items into attention (a relevance-biased traversal). Routelisting *perceives by enumerating* — it draws from what is present (or candidate-present) in the territory; it does not invent items the territory does not contain. The sweep is biased by the goal: items that bear on advancing or sharpening the goal are drawn in; items that bear on neither are candidates for the Excluded section.

### 3.2 Individuate — the heart of the discipline

Individuation is the judgment **"are these manifestations the same concept, or different ones?"** It is:

- **Goal-relative** (and therefore decidable): there is no goal-free answer to "are hashing and tokens the same concept?", but *relative to a goal* there is ("audit the auth system" merges them into "authentication"; "fix the hashing bug" splits them). The goal fixes the resolution.
- **Signal-guided**: it uses *within-concept* signals — *shared referent* (about the same thing), *manifestation-of* (one describes / implements / versions another), *shared goal-role* — and decides "same identity" or "new identity."
- **Lean-to-split**: when unsure, treat two things as *separate* identities. Over-merging *hides* a concept (it disappears into another and is never seen again — unrecoverable); over-splitting merely lists a near-duplicate (visible, mergeable later). The asymmetry favors splitting (§4.4).
- **Incremental (online clustering)**: a later depth run can reveal that one identity is really two, or two are really one, and re-individuate — converging over time.

Individuation is structurally the same judgment library cataloging makes (is this a new *work*, or a new *edition*?) and data systems make (entity resolution): a tractable-but-soft judgment, not a crisp algorithm.

### 3.3 Frame

Cast each individuated identity as a typed route: assign `grain × kind × engagement-type`, write the prescriptive guidance, and attach the attributive Priority/Confidence. Framing is where item-level perception becomes identity-level prescription.

*Refinement note (applies at §3.3 Frame — meaning-gaps authoring, on DEVELOP / CONSOLIDATE routes):*

**Emit meaning-gaps as a by-product of Confidence.** On a `DEVELOP` or `CONSOLIDATE` route (the meaning-*consuming* engagement-types), framing additionally emits a **meaning-gaps** list — the target concept's under-understood facets, each rated for *vitality* (low/mid/high) — into the route's Guidance (the `Meaning-gaps:` sub-block, §5.2.1). This is **not a separate pass.** Framing already assigns the route's **Confidence** (perceived formed-ness of the target), and to rate Confidence below "full" the framer has already perceived *why* the target is not fully understood. **Those reasons are the meaning-gaps.** So the framer itemizes the facets that account for the Confidence shortfall and rates each in the *same glance* it perceives it (the vitality rubric, §5.2.1, is glance-decidable by design).

Three bounds keep it first-pass and lightweight: (i) **first-pass depth** — name the facets a framing perception surfaces; do NOT run a full, systematic decomposition of the target (the first-pass list defers to and is *refinable by* that deeper analysis); (ii) **lean-to-list** — under uncertainty, include a facet at low confidence rather than omit it (§4.4); (iii) **per-route degradation** — if the framer cannot confidently name even one facet (the target is too opaque), emit just a bare `meaning-unready` marker instead of a list; if it cannot assess the target at all, emit nothing. The list is a *soft* readiness signal that informs a consumer's develop-vs-deepen choice — it never gates, sequences, or decides (per §1.3). Across re-runs, perception governs (§3.5): the list refreshes and resolved gaps drop as the target is deepened.

### 3.4 When a breadth run is "done" (convergence)

A breadth run terminates when:
- the territory has been swept at *identity resolution*;
- uncertain identities are included (lean-to-split — no goal-relevant candidate filtered at uncertain-identity level);
- a sweep cycle yields no new identities.

Overload is held off by listing *identities not manifestations*, by the *goal-bias*, and by a *frontier-flag* for sub-territories when even the identities are too many (the run lists the frontier and signals "drill here" rather than dumping).

### 3.5 Cross-run behavior — the persistent concept-map

Routelisting is **cumulative**: runs build on each other. The mechanism is that the running identity-set (the **index**, §5.3) is **persistent** — a run loads it, runs the ordinary listing on that pre-seeded set, and saves it back. It is not a separate "cross-run phase"; it is the listing's working state made durable — a load-modify-save loop, exactly like an incremental build that loads a cache, recomputes what changed, and saves it.

- **LOAD** the index (scoped: a root run loads the whole index; a concept-target run loads one entry).
- **INTEGRATE** — run the ordinary listing on the pre-seeded set: each swept item *matches* a loaded identity (re-confirm it; attach/refresh its depth-signal) or *starts a new one*; identities the sweep does not re-confirm are flagged **stale**; depth-revealed splits/merges re-individuate.
- **PERSIST** — routelisting writes both its files itself: save the updated index + invocation log to **`_route.md`**, and write the run's route-map to **`routelister.md`** (every run, standalone included — §5).

Three guarantees:
- **Idempotency-at-fixpoint** — re-running on an unchanged territory + goal produces the same map (a no-op at the fixpoint). *Perception governs* (the current sweep re-confirms what is actually there); the loaded set only *assists* (matching + enrichment). It converges; it does not drift.
- **Enrich-not-dump** — a previously-drilled identity's breadth route gets a compact *depth-signal* ("has an unresolved README-vs-impl divergence"), never a dump of its manifestations into the breadth map.
- **Stale-flag-not-delete** — the *route-map* shows only live, re-confirmed identities; stale entries live in the *index*, flagged and prunable, so the output stays compact while the memory accumulates.

---

## 4. Quality

### 4.1 The failure-mode framework — LAYER 1 vs LAYER 2

- **LAYER 1 — Operational failures.** Detectable via output observation; recoverable via re-invocation.
- **LAYER 2 — Identity failures.** Detectable via behavioral audit over time; erode the discipline's intrinsic character; not simply recoverable.

### 4.2 LAYER 1 — Operational failure modes

| # | Mode | Recognition | Corrective |
|---|---|---|---|
| 1 | **Over-merge** | Two distinct goal-relevant concepts collapsed into one identity → one disappears | Re-individuate leaning-to-split; the hidden concept is unrecoverable until re-split, so prefer the split (per §4.4). |
| 2 | **Under-coverage** | A goal-relevant concept in the territory was never swept | Re-run with a refined sub-goal / sub-territory targeting the gap. |
| 3 | **Wrong-grain** | A breadth run lists manifestations instead of identities (map bloats) | Re-frame at identity grain; push manifestation detail into a depth run + a depth-signal. |
| 4 | **Goal-loss** | The run enumerates without a goal-bias → an undirected concept dump | Restore the goal; re-bias the sweep + the engagement-typing. |
| 5 | **Type-misassignment** | A route's `kind` or engagement-type does not fit (e.g., a goal-sharpening move typed teleological) | Re-type against the membership test (§2.2): is the value partitionable by `kind`, and does the verb match the move? |
| 6 | **Index-drift** | The cross-run index diverges from the territory (stale entries treated as live; missed re-confirmation) | Let perception govern (§3.5): re-confirm against the current sweep; flag non-re-confirmed entries stale, do not delete. |

### 4.3 LAYER 2 — Identity failure modes

| # | Mode | Recognition | Why it erodes identity |
|---|---|---|---|
| 1 | **Selection-creep** | The run starts ranking routes to pick a winner, or emits "the move to take" | Violates the NOT-list (a selection). The discipline stops enumerating the full field and starts choosing — a different operation. |
| 2 | **Process-coupling** | The spec or output starts referencing a larger process, producing control-flow moves (terminate / widen / merge / re-run / revisit), or defining routelisting by a position in a loop | Violates self-containment (§1.4) and the control-flow exclusion (§1.3). The discipline re-acquires a process-relative identity — the defect that made it not-an-individual. |
| 3 | **Description-collapse** | Routes become explanations of how the territory works rather than prescriptive directions | Violates the prescriptive character; the discipline drifts into describing, a different operation. |
| 4 | **Manifestation-dump** | The unit slips from concept-identity to artifact; breadth runs list every manifestation | Violates the unit (§1.2). The compactness that makes the map usable is lost. |

### 4.4 Asymmetric-failure principle

**Over-merging a concept is structurally worse than over-splitting one.**
- Over-split (false-separate): the cost is a visible near-duplicate route; recovery is cheap (merge later). 
- Over-merge (false-same): a real concept disappears into another and is never surfaced — the system does not know what it does not know. This is the information-loss-in-the-dark failure.

**Operational form:** under individuation uncertainty, lean toward **split** (treat as separate identities). The stop-rule is territory-bounded sweeping + uncertain-identity-includes.

### 4.5 Self-assessment

At the end of a run, routelisting reports one of:
- **PROCEED** — territory swept at identity resolution; no LAYER 1 flags; output ready.
- **FLAG** — output produced but a flag was raised (a frontier-signal for an uncovered sub-territory; an over-coverage concern; an uncertain individuation worth review); the consumer should review.
- **RE-RUN** — output incomplete or structurally suspect (goal was lost mid-run; the territory binding was wrong); re-run with adjusted parameters.

---

## 5. Output

**A run always produces TWO files, and routelisting writes both itself — on every run, standalone included:** the per-run **`routelister.md`** Route-Map (§5.1) and the persistent **`_route.md`** state file (§5.3). Both are core output, not optional. Because routelisting is *cumulative* (each run reads the prior state to enrich its map) **and** *standalone* (it runs on any territory, frequently with nothing else around it), it is the only component guaranteed present on every run — so it owns and writes its own persistent state. Nothing external (no runner, no surrounding process) can be relied on to write `_route.md`, because routelisting often runs without one.

### 5.1 `routelister.md` — the Route-Map (per-run output)

Contains:
- a **Map Header** — identity count + high-priority count (an at-a-glance triage signal);
- a **Route Index** — a scannable table summarizing each route by ordinal + Direction + grain + kind + engagement-type + Priority (included when the route count exceeds the index-threshold, default 10);
- the **per-route records** (§5.2);
- an **Excluded section** — notable candidate-concepts considered and rejected, *with reasons* — never silently dropped (this is where "engaging it does nothing toward the goal" non-routes go);
- **Telemetry** (§5.4).

### 5.2 The route record schema

Each route record carries:

| Group | Fields |
|---|---|
| **Route Identity** | Direction (the concept as a direction) · Goal · grain · kind · engagement-type |
| **Route Meaning** | Movement (what engaging it does) |
| **Route Reasoning** | WHY (territory-evidence) · why-this-might-be-important |
| **Route Attribution** | Priority · Confidence *(attributive — perceived salience / formed-ness; not a winner-ranking)* |
| **Route Guidance** | Guidance Mode (none / compact / full / expand-on-drill) · Pointers, each with its own WHY · *(on DEVELOP/CONSOLIDATE routes) an optional `Meaning-gaps:` sub-block (§5.2.1)* |
| **Route Depth-link** | a *within-concept* pointer to this identity's own depth run (if drilled) + a compact depth-signal |

Worked example:

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

### 5.2.1 The Meaning-gaps sub-block (DEVELOP / CONSOLIDATE routes)

On routes whose engagement-type is `DEVELOP` or `CONSOLIDATE`, the **Route Guidance** field may carry an optional, labeled **`Meaning-gaps:`** sub-block — a structured, multi-item form of the depth-signal (§5.2 Route Depth-link). It records the target concept's under-understood **facets** (descriptive gaps, *not* sub-concept-identities — §5.3's no-other-identity boundary holds), each with a **vitality** rating telling a consumer how much closing the gap matters before building. It is authored as a by-product of framing (§3.3 refinement note) and is a *soft* signal — a prompt to the consumer's develop-vs-deepen choice, never a gate. Vitality is *per-gap* and distinct from the route's *per-route* Priority.

**Container.** The sub-block lives **inside Guidance as structured text**, not as a dedicated typed field — one line per gap:

```
Guidance Mode:    compact
  · "<existing pointer>"  (bc ...)
  Meaning-gaps:
    - <under-understood facet> — [low|mid|high] — <why it matters>
    - ...
```

The inline `[low|mid|high]` tag is human-readable and trivially machine-parseable. *Promotion rule:* keep it as this text convention until a consumer needs **reliable structured or cross-route-aggregate extraction** (a deterministic / non-LLM parser, or an aggregator across many routes) — only then promote it to a dedicated typed field. An LLM consumer reading one route's prose does not trip this, so text may be permanent.

**Vitality = the risk of building on a wrong/unresolved understanding of the gap = impact × likelihood.** Decide each gap's tag with three glance yes/no questions:

1. **Impact** — if this gap is left unresolved or guessed wrong, would the build come out structurally wrong or need significant rework? *(Weigh — don't separately compute — the sub-signals: how much resolving it constrains other parts, and how costly a wrong build is to undo.)*
2. **Likelihood** — are there multiple genuinely-different plausible readings of this gap (not one obvious one)?
3. **Deferability** — can you safely stub/placeholder it and resolve it after building? *(a low-cap, not a third axis; "safely" is load-bearing.)*

**Mapping** — impact gates, likelihood escalates, deferability caps: **LOW** = Impact NO *or* Deferability YES · **MID** = Impact YES + Likelihood NO + not deferable · **HIGH** = Impact YES + Likelihood YES + not deferable. (All eight yes/no combinations are covered.)

**Usage-note (keeps it lightweight — carry it, do not drop it).** The frame is *risk of building wrong*, not abstract importance (this is why likelihood belongs); impact's sub-signals are *weighed, not computed* (answer from the first-pass perception — no dependency-graph trace); a *first-pass, low-confidence, possibly-wrong* rating is acceptable (it nudges the consumer, never gates). Keep to these **three** questions — promoting impact's sub-signals into their own questions turns a glance into a checklist and defeats the field.

### 5.3 `_route.md` — the identity-set / index (the persistent concept-map)

The persistent state file routelisting writes (and the next run loads). A registry: `{ identity → { own-depth pointer, depth-signal, individuation history, first-seen / last-touched } }` plus an invocation log. This is the project's persistent concept-map — the same object the listing builds, the output persists, and the cross-run model reads (§3.5). Routelisting writes `_route.md` itself on every run (standalone included; see §5 intro).

**The boundary that keeps it within identity:** *no field's value is a different concept-identity.* The depth-link points to the *same* identity's own depth; the index never records edges *between* concepts. (The inter-concept dependency graph is excluded — §1.3.)

**The content boundary that keeps it within the discipline:** `_route.md` records **only this discipline's own concept-map** — identities and their *within-concept* depth/individuation/timestamps. It records **no process or control-flow state** of any kind (no notion of cycles, verdicts-over-time, terminate/widen/merge/revisit, or any "what was done across a larger process"). Routelisting writes and reads only its own `_route.md`; it does not read or write any other component's state file. (This is what keeps the discipline self-contained per §1.4 — `_route.md` is the discipline's own memory, not a process's memory.)

### 5.4 Telemetry

Reported with the output:
- mode (`root / project-space` | `concept-target / concept-space`) + entry point (`fresh` | `index-extending`);
- identities enumerated; routes at each `kind`; high-priority count;
- individuations made; uncertain-individuations flagged; stale entries flagged;
- convergence status; frontier flags emitted;
- LAYER 1 / LAYER 2 failure modes checked;
- self-assessment verdict (PROCEED / FLAG / RE-RUN).

---

---- NOW SOLID INSTRUCTIONS START ----

## Execute the Routelisting Process

### 1. Receive Input + Determine Mode

Consume the input. It supplies a **territory** (a path, a file set, a finished work's artifacts, or a passage describing a space) and a **goal** (the directional bias; may be fuzzy — if implicit, surface it explicitly before proceeding). If the input is a path, read the relevant material to populate the territory.

Determine the **run mode**:
- **root / project-space (breadth)** — no target identity given: enumerate the concept-identities across the whole territory (one route per identity).
- **concept-target / concept-space (depth)** — a target identity given: enumerate that identity's manifestations as routes, flagging divergences as high-value epistemic routes.

Determine the **entry point**: `fresh` (no prior index for this territory + goal) or `index-extending` (a prior index exists and should be loaded per §3.5).

### 2. LOAD (cross-run)

If a `_route.md` index exists for this territory + goal, LOAD it (scoped to the run mode). The loaded set pre-seeds the listing; perception still governs (§3.5).

### 3. Sweep → Individuate → Frame

- **Sweep** the goal-relevant territory (perceive by enumerating; do not invent).
- **Individuate** the swept items into concept-identities — goal-relative, signal-guided, lean-to-split, incremental (§3.2). Re-confirm loaded identities or start new ones; flag non-re-confirmed loaded identities **stale**.
- **Frame** each identity as a typed route (`grain × kind × engagement-type`), with Movement, WHY, attributive Priority/Confidence, and guidance (§5.2). Route candidate-concepts that advance/sharpen nothing into the **Excluded** section with reasons.

Loop the sweep until convergence (§3.4).

### 4. PERSIST (cross-run) + Emit Output

PERSIST — routelisting writes **both** files itself, every run (standalone included): save the updated index + invocation log to **`_route.md`**, and write the **route-map** to **`routelister.md`** (Map Header → Route Index → per-route records → Excluded → Telemetry). Enrich-not-dump (depth-signals, not manifestation dumps); stale-flag-not-delete (live routes in the map; stale entries in `_route.md`). `_route.md` holds only the within-concept concept-map — never process/control-flow state (§5.3).

Save the route-map as a markdown file (unless differently stated in additional instructions):
- **If the input was a path** — save in the same folder as the input.
- **Otherwise** — save under `devdocs/routelister/<suitable-name>.md` (create the directory if needed).

Record the user's input at the top of the artifact: `## User Input` followed by the arguments passed to this command.

### 5. Self-Assessment Verdict

Report **PROCEED** / **FLAG** / **RE-RUN** with the telemetry from §5.4.

---

**Reference loading during execution.** When recognizing failure modes — LAYER 1 (Over-merge, Under-coverage, Wrong-grain, Goal-loss, Type-misassignment, Index-drift) and LAYER 2 (Selection-creep, Process-coupling, Description-collapse, Manifestation-dump) — consult §4 for full descriptions and correctives. The vocabulary (territory / goal / concept / manifestation / concept-identity / route / route-type / grain / kind / engagement-type / individuation / index / attributive Priority-Confidence; the three axes; the nine engagement-types under two kinds; the two run modes) is canonically defined above.
