# Exploration: Where Should The Placement Convention Live

## Mode and Entry Point

**Mode:** Hybrid. Artifact exploration of the existing files (the convention's external home, the discipline spec, the runner spec). Possibility exploration of placement options (embed-inside / external-only / hybrid).

**Entry point:** Signal-first. The user has already taken a position (favors discipline-spec purity) and named three concrete constraints. Exploration verifies the constraints and probes whether the user's position is structurally correct.

## Cycle 1 — Coarse Scan: Inventory the Artifacts and Audiences

**Three relevant artifacts:**

1. `/Users/ns/Desktop/projects/native/enes/discipline_rule_placement.md` — exists. Contains the full *Operation-or-Step-First with Scope-Of-Application* convention (verified). 5,777 bytes; ~80 lines. The text mirrors the previous finding's content.
2. `/Users/ns/Desktop/projects/native/homegrown/explore/references/explore.md` — the Structural Exploration discipline spec (loaded by the runner at runtime). Currently does NOT contain the convention.
3. `/Users/ns/Desktop/projects/native/homegrown/MVL+/SKILL.md` — the MVL+ runner spec; explicitly states "Load only the current discipline's spec and required references" (line 21). Confirms discipline specs are runtime-loaded.

**Two audiences:**

- **Runtime runner.** The agent (or human) executing an MVL+ inquiry. Loads the discipline spec into its working context to perform exploration / sensemaking / etc. Needs the discipline's runtime semantics; does NOT need meta-organizational rules about how the spec is structured.
- **Maintenance contributor.** The agent (or human) editing a discipline spec to add a new refinement rule. Needs to know the placement convention to avoid creating multi-surface duplication.

**Signals detected:**

- **[Density]** The convention exists in TWO contexts: in the previous finding's text AND in `enes/discipline_rule_placement.md`. The 22-54 finding additionally proposed embedding it INSIDE each discipline spec (which would create a third copy in 5 places — 5 more copies).
- **[Tension]** Runtime context purity vs maintenance discoverability. Runner doesn't need it; contributor does.
- **[Absence]** No existing pointer FROM the discipline spec TO `enes/discipline_rule_placement.md`. A contributor editing the spec without prior knowledge of the convention has no way to discover it.
- **[Structural cue]** The 22-54 finding's recommendation to embed was made WITHOUT considering the existing external home (`enes/discipline_rule_placement.md`). The 22-54 finding treated the convention as new content needing a home; in fact a home already existed.

**Resolution decision:** zoom in on the audience-separation analysis to validate the user's position.

## Cycle 2 — Probe: Audience Separation Analysis

**Runtime runner audience:**

When the MVL+ runner executes Exploration (or any discipline), it loads `homegrown/explore/references/explore.md` (or the analogous discipline spec) into context. The spec's content becomes part of the runner's working memory for that discipline's execution. Every paragraph in the spec consumes context-window space and demands the runner's attention.

The discipline's RUNTIME CONTENT (modes, components, process model, coverage strategy, failure modes, execute-process instructions) is directly used during execution: the runner consults these to decide what scan/probe/etc. to do, what failure modes to watch for, when to stop.

The placement convention is NOT runtime content. The runner does not consult it during execution. It would not change any decision the runner makes about how to scan, what to probe, when to converge. Its presence in the spec adds noise without adding signal — for the runtime audience.

**Maintenance contributor audience:**

When a contributor edits the discipline spec to add a new rule (e.g., from a future LOOP_DIAGNOSE finding), they need to know:
- What canonical home does this rule belong to (operation-level vs step-level vs failure-only-form)?
- What does the cross-reference shape look like at non-canonical surfaces?

These are MAINTENANCE-TIME questions, asked by the contributor BEFORE editing. The contributor reads the placement convention, decides the canonical home, makes the edit. The convention does not need to live IN the spec; it needs to be DISCOVERABLE by the contributor.

**Audience separation conclusion:** the two audiences have disjoint needs. Embedding the convention in the spec serves the maintenance audience only, at the cost of polluting the runtime audience's context. A separation-of-concerns argument supports keeping them apart.

## Cycle 3 — Probe: The Duplication Argument

If the convention is embedded in each of the 5 discipline specs (`homegrown/explore/`, `homegrown/sense-making/`, `homegrown/decompose/`, `homegrown/innovate/`, `homegrown/td-critique/`):

- The convention text appears 5 times.
- Updates to the convention (if it ever evolves) require 5 edits.
- Each spec carries ~50-80 lines of meta-organizational content unrelated to the spec's runtime semantics.

If the convention lives ONLY at `enes/discipline_rule_placement.md`:

- The convention text appears once.
- Updates require one edit.
- Each spec stays focused on its runtime semantics.

**Duplication conclusion:** keeping the convention external is the DRY (Don't Repeat Yourself) choice. The very same principle the convention itself applies to RULES within a spec (single canonical home + cross-references) applies to the CONVENTION itself across specs.

This is structurally consistent: the convention should obey its own placement principle. Its scope is "all five thinking-discipline specs" — that's higher than any single discipline's scope. Its canonical home should be at a higher-than-discipline location (i.e., outside any single spec).

## Cycle 4 — Probe: Discoverability For Contributors

The risk of NOT embedding: a contributor edits a discipline spec without knowing about `enes/discipline_rule_placement.md`. They might create multi-surface duplication that the convention is supposed to prevent.

Three discoverability mechanisms (mutually exclusive or stackable):

- **Mechanism A — No discoverability marker.** Contributors are expected to know about `enes/discipline_rule_placement.md` from project onboarding. Risk: new contributors miss the convention.
- **Mechanism B — One-line pointer at the top of each discipline spec.** Something like *"Spec organization: see `/Users/ns/Desktop/projects/native/enes/discipline_rule_placement.md` for the rule-placement convention."* Cost: one line per spec. Pollutes the runtime context minimally.
- **Mechanism C — Pointer in a separate "contributors' guide" or README.** No pollution of discipline specs at all. Discoverability depends on the contributor reading the guide first.

The user's stated preference is for discipline-spec purity. Mechanism B adds one line; Mechanism C adds zero lines to the spec. Both serve discoverability without embedding the full convention.

The cost of Mechanism B (one line per spec × 5 specs = 5 lines total) is much lower than embedding (~50-80 lines × 5 specs = 250-400 lines duplicated). Mechanism B is a reasonable compromise: trivial pollution, full discoverability.

## Cycle 5 — Probe: Generalize To A Principle

The trade-off here generalizes: WHEN should a maintenance-time concern live inside a runtime-loaded artifact?

Three options at the meta-level:
- (P1) **Always embed.** Spec is self-contained; everything lives inside.
- (P2) **Never embed.** Maintenance concerns live elsewhere; the spec is pure runtime.
- (P3) **Embed when audience overlap is high; externalize when audience separation is clean.**

The user's position is closest to P3 with a strong tilt toward P2 for this case. The audience separation is clean (runner vs contributor are clearly different roles, doing different things, on different timelines). The runtime artifact is loaded into context (which has cost). The maintenance concern doesn't change runtime behavior. P2 wins for this case.

The generalizable principle: **maintenance concerns about a runtime-loaded artifact's organization should live OUTSIDE the artifact when audiences are separable.** Cross-references handle discoverability without polluting runtime context.

## Cycle 6 — Jump Scan + Convergence

**Jump scan:** what if the user's position is wrong because there's some contributor-friction cost I'm missing? E.g., context-switching from the spec to `enes/` adds friction; embedded convention is more convenient.

**Probe:** the friction is real but small. A contributor about to edit a spec will spend 5-30 minutes on the edit; the additional ~30 seconds of context-switching to read the convention is negligible. Mechanism B (one-line pointer at the top of the spec) makes the switch a single click / open-file. Friction is bounded.

No new region from jump scan.

**Convergence check:**
- Frontier stable: yes; the audience separation, duplication argument, and discoverability mechanisms are mapped.
- Discovery rate declining: yes; cycles 4-5 each added structure; cycle 6 confirmed convergence.
- Bounded gaps: yes; Sensemaking will resolve the choice between Mechanism B and Mechanism C.

CONVERGED.

## Final Deliverable

### 1. Territory Overview

The territory has TWO audiences (runtime runner / maintenance contributor) with DISJOINT needs, ONE existing external home for the convention (`enes/discipline_rule_placement.md`), FIVE discipline specs that the previous finding proposed embedding into, and THREE discoverability mechanisms (no marker / pointer in spec / pointer in contributors' guide).

### 2. Inventory

**Audiences:**
- Runtime runner — loads spec at runtime; needs runtime content only.
- Maintenance contributor — edits spec at maintenance time; needs the convention discoverable.

**Placement options:**
- Option A — Embed full convention in each of 5 specs. Cost: 5× duplication (~250-400 lines total).
- Option B — Keep convention external only at `enes/discipline_rule_placement.md` + one-line pointer at top of each discipline spec. Cost: 5 lines total in specs.
- Option C — Keep convention external only; no pointer in specs. Discoverability via project onboarding / contributors' guide. Cost: 0 lines in specs.

**Trade-offs:**
- Option A: maximum discoverability; maximum pollution.
- Option B: full discoverability; trivial pollution.
- Option C: discoverability dependent on onboarding; zero pollution.

**The principle:** maintenance concerns about a runtime-loaded artifact should live OUTSIDE the artifact when audiences are separable. Cross-references handle discoverability without polluting runtime.

### 3. Signal Log

- **[Density]** Convention exists external; embedding adds 5× duplication → probed Cycle 1, 3.
- **[Tension]** Runtime purity vs maintenance discoverability → probed Cycle 2.
- **[Absence]** No existing pointer from spec to external home → addressed in Mechanism B.
- **[Structural cue]** Convention's own DRY principle applies to itself → resolved Cycle 3.
- **[Convergence]** Jump scan in Cycle 6 confirmed.

### 4. Confidence Map

| Region | Confidence |
|---|---|
| External home exists at `enes/discipline_rule_placement.md` | Confirmed |
| Two-audience separation | Confirmed |
| Embedding causes 5× duplication | Confirmed |
| Runtime context pollution cost | Confirmed |
| Mechanism B (one-line pointer) viability | Scanned |
| Mechanism C (no pointer) viability | Scanned |
| Generalizable principle (P2/P3) | Scanned |

### 5. Frontier State

STABLE. The user's position is structurally well-supported. The choice between Mechanism B and Mechanism C is the remaining decision.

### 6. Gaps and Recommendations

- **For Sensemaking:** finalize the choice between Mechanism B (one-line pointer in each spec) and Mechanism C (no pointer). Stabilize the generalizable principle.
- **For Decomposition:** partition the recommendation into pieces (decision + pointer-or-no-pointer + principle).
- **For Innovation:** generate concrete wording for the pointer (if Mechanism B chosen).
- **For Critique:** verify the recommendation against the user's three constraints (purity / duplication / runtime context).
