> **Loading note.** This file is loaded by `articulate_simple/SKILL.md` at Step 0 and is intended to be read in full before the discipline executes. Every section below — what articulation is, the five operations, the answer-shape principle, the AMBIGUITY-NATURE distinction, the multi-source composition bounds, the lightweight stance, the NOT-list, the process model, the LLM-judgment edges, the failure modes, the verdict assignment, the output contract, and the worked examples — is referenced by the protocol. Do not summarize or partial-load; the protocol's instructions assume all sections are in context.

---

# Structural Articulation (Simple) — A Thinking Discipline

A thinking discipline for taking a task statement and producing an explicit framing of what it asks — its work items, the ambiguities present at each item, the shape of the deliverable, the boundary of what's excluded, and a set of considered articulations — **without committing to a single interpretation**. Articulation is not interpretation; it's identification.

Rather than guessing what the user means, Structural Articulation (Simple) treats framing as a practiced methodology based on item-perception, meta-questioning, decomposition, multi-depth perception, and bounded re-expression.

> **Structural Articulation (Simple) is the process of perceiving a task statement's items, identifying the ambiguities at each item across multiple typed axes, surfacing the deliverable shape and the exclusion boundaries, and producing a bounded variant-set that preserves openness — without adjudicating which option is correct.**

---

## What Articulation Is

**Articulation is the cognitive operation of taking a statement that asks for something and making explicit what it asks — the work items, the ambiguities, the deliverable shape, the exclusions, and the alternative readings — while preserving the openness the statement carries.**

Articulation is not:
- **Interpretation** (interpretation commits to a reading; articulation identifies the readings without committing)
- **Clarification** (clarification asks the user to disambiguate; articulation makes the ambiguity perceivable downstream without forcing user contact)
- **Planning** (planning produces a procedure; articulation produces a framing)
- **Ambiguity reduction** (reducing ambiguity to a stable model commits to interpretations; articulation surfaces ambiguities for downstream consumers without commitment — they are distinct operations)

Articulation has two structural operations:

1. **Itemizing** — perceiving how many distinct work items the statement carries, and emitting a count plus per-item identifiers. A statement that says "set up auth and also write the migration doc" carries two items; a statement that says "set up auth" carries one. Itemizing happens once per invocation at the statement level.

2. **Articulating each item** — per item, identifying the meta-questions and their answers, the deliverable shape, the literal statement and motivation-ambiguities, and a bounded set of considered articulations. Articulating per-item happens N times per invocation where N is the Itemize count.

Itemizing without articulating per-item = a count with no framing.
Articulating per-item without itemizing = framing that conflates multiple distinct work items.
Both together = the full articulation process.

| | Itemizing | Articulating per-item |
|---|---|---|
| **Primary role** | Perceive the statement's item structure | Identify what each item asks |
| **Operates on** | The full statement | One item at a time |
| **Fires** | Once per invocation | N times per invocation |
| **Produces** | Count + per-item identifiers | Per-item bundle (MQs, Deconstruct, MultiDepth, Considered Articulations) |

The two operations chain. Itemize emits items; each item goes through the per-item articulation operations.

---

## Key Components

### The Five Operations

Articulation uses five named operations. Each has a defined input, a runtime procedure, and a defined output.

**1. Itemize** — perceives whether the statement expresses one work item or multiple, and emits a count plus per-item identifiers. Asymmetric-failure bias: when uncertain whether two clauses are one item or two, prefer **keep-together** (one item). Over-splitting introduces spurious independent items; keep-together preserves the user's framing and is downstream-recoverable.

**2. Meta-question (MQ)** — per item, fires four typed meta-questions:
- **MQ1 (verdict-axis):** what is the user asking for?
- **MQ2 (context-need axis):** what context does the response need that isn't in the statement?
- **MQ3 (intent-axis):** what is the user trying to accomplish? (WHAT-axis — action-endpoint shape)
- **MQ4 (boundary-axis):** what is the user explicitly excluding?

Each MQ emits a **Q-mandatory** question text plus a **2-shape answer** (see "Answer Shape Principle" below).

**3. MQA (Meta-question alignment)** — examines the four MQ identification-sets for overlaps where two or more MQs' identified ambiguities span the same underlying axis. When the joint axis is identifiable with confidence, MQA **reconciles** — emits content naming the joint axis and folding the overlapping identifications. When the joint axis is unclear, MQA **surfaces** — emits "irreducible overlap" content naming the overlap without forcing a joint identification. When no overlap exists, MQA emits **ALIGNED** and the raw MQ identifications flow through unchanged.

**4. Deconstruct** — per item, identifies the deliverable's tuple structure (what the deliverable IS, what shape it has, what kinds of artifacts the task produces, what bounds it). Deconstruct also cross-checks against the Itemize count: when its tuple structure suggests the item was actually multiple items, this is a late-split signal.

**5. MultiDepth** — per item, emits two outputs:
- **Literal-statement** — restates the item verbatim or near-verbatim **without contamination from interpretation**. The literal-statement does NOT expand, reframe, or interpret.
- **Identified-purpose-motivation-ambiguities** — names ambiguities along the WHY-axis (motivation-chain shape — why does the user want the task done?). Distinct from MQ3's WHAT-axis ambiguities.

**6. Rephrase** — per item, generates a **set of considered articulations** (plausible variant readings of the item) spanning the identified ambiguity dimensions. The output is named "considered articulations" deliberately: each entry is a reading the discipline considered as plausible, not committed to. Reads four sources at generation time:
- Deconstruct's deliverable-shape (what kind of artifact is being asked for).
- The aggregated identified-ambiguities-list from MQ2 + MQ3 + MultiDepth post-MQA reconciliation.
- MQ4's NOT-list (explicit exclusions).
- Substrate (warm session context if present; cold otherwise).

Each variant must satisfy all four composition bounds: preserve deliverable shape; span an identified ambiguity dimension; exclude vocab from MQ4's NOT-list; stay within substrate. Typical count is 2–6 variants per item. Floor is 2.

### The Answer Shape Principle (2-shape)

Every MQ answer and every MultiDepth output emits one of exactly two shapes:

- **Identified-ambiguities-list** — names the ambiguities perceived at this axis.
- **Explicit-empty** — an explicit signal that openness is NOT perceivable at this axis. Distinct from absence (which would be a missing field, not a 2-shape answer).

The discipline never emits a commitment (an interpretation, a hedged guess, a partial decision) at these positions. Commitments belong to downstream consumers; the discipline's role is to identify, not adjudicate.

**Asymmetric-failure direction:** prefer identified-ambiguities. Over-emission of ambiguities is downstream-recoverable (consumers can ignore noise); under-emission silently drops information (consumers see apparent commitment-by-absence).

### The AMBIGUITY-NATURE Distinction

MQ3 covers **WHAT-axis** ambiguities — questions of the form "what is the user trying to accomplish?" with action-endpoint shape.

MultiDepth covers **WHY-axis** ambiguities — questions of the form "why does the user want the task done?" with motivation-chain shape.

The distinction is structural. Conflating the axes (WHY content at MQ3 or WHAT content at MultiDepth) produces redundant variants downstream that span the same dimension. When an ambiguity could be read as either axis, prefer emitting at BOTH locations and let MQA reconcile any genuine overlap.

### Multi-Source Composition (Rephrase)

Rephrase is **bounded** at generation time by four constraint sources composed together: deliverable-shape (from Deconstruct), identified-ambiguities-list (from MQs + MultiDepth post-MQA), NOT-list (from MQ4), substrate. The composition prevents variants from drifting into unrelated deliverable types, missing identified ambiguity dimensions, including excluded vocab, or invoking terms not in session context.

**Variants are exemplars, not commitments.** The variant-set captures the openness identified upstream. Each variant is a plausible reading; the set as a whole preserves what's still ambiguous. A reader of the variant-set sees the space of plausible interpretations, not "the right answer."

**Asymmetric-failure direction:** prefer over-bounding (exclude a variant under uncertainty rather than include one that drifts) and prefer the floor+ side of the 2–6 range (more variants preserve openness; fewer risk under-emission).

### Asymmetric-Failure as Meta-Rule at LLM-Judgment Edges

When the LLM-judgment fires at a binary or graded choice under uncertainty, the discipline biases toward the **less-recoverable failure direction**. Over-emission is recoverable; under-emission silently drops information. The principle fires at every LLM-judgment edge in the discipline, with the direction articulated per edge in the "LLM-Judgment Edges" section below.

---

## The Lightweight Stance

The discipline obeys six lightweight-stance criteria:

1. **No separate verify-phase.** Articulation does not run a post-articulation verifier; the framing is complete when the per-item bundles are assembled.
2. **No external-anchor inputs.** The discipline's input contract is the task statement plus session context. It does not consult external sources.
3. **No halt-gate output.** The discipline always emits something a consumer can read; it does not refuse.
4. **No sub-machinery beyond a paragraph per operation.** Each operation runs in a single attention; there are no internal multi-phase pipelines per operation.
5. **No ecosystem-knowledge reach.** The discipline does not invoke project-specific terms beyond what's in session context.
6. **Every output element is load-bearing.** No audit-theater fields; every bundle entry has a defined role in the output.

The stance has a runtime implication: **runtime carries no enforcement code.** The end-of-invocation LAYER 1 self-check (see "Failure Modes" below) is a single LIGHT pass — one LLM-judgment scanning all modes in one attention — not a multi-pass checker.

The stance also has an LLM-judgment implication: **cross-LLM determinism on judgment-call edges is intentionally not committed.** The LLM-judgment edges authorize divergence by design — different LLMs may produce different judgments at the same edge, and that is acceptable.

---

## The NOT-List

The discipline does NOT:

1. **Adjudicate.** It identifies that options exist; it does not decide which option is correct.
2. **Clarify with the user mid-invocation.** It produces a bundle that surfaces ambiguities; it does not pause to ask.
3. **Plan execution.** It frames what the user asks; it does not produce steps to satisfy the ask.
4. **Cross-interpret items.** Per-item bundles are independent; no cross-item interpretation is performed.
5. **Make commitments at 2-shape positions.** Every MQ answer and every MultiDepth output is either identified-ambiguities-list or explicit-empty; never a commitment.

---

## Process Model

The discipline runs in four stages, acyclically. There is no in-invocation iteration.

### Stage 1 — Itemize (once per invocation)

Read the statement. Decide how many work items it expresses. Emit count and per-item identifiers. Asymmetric-failure bias toward keep-together.

### Stage 2 — Meta-question + MQA (per item)

For each item, fire MQ1 through MQ4 in sequence. Each MQ emits a Q-mandatory question text plus a 2-shape answer. Then fire MQA: examine the four MQ identification-sets for overlaps; reconcile, surface, or emit ALIGNED.

### Stage 3 — Deconstruct + MultiDepth (per item, independent)

For each item, fire Deconstruct (emit tuple structure; check for late-split) and MultiDepth (emit literal-statement + identified-purpose-motivation-ambiguities). The two operations are independent within this stage; either order is permitted.

### Stage 4 — Rephrase (per item, last)

For each item, read the four composition sources (Deconstruct deliverable-shape; identified-ambiguities-list aggregated from MQs + MultiDepth post-MQA; MQ4 NOT-list; substrate). Generate a variant-set spanning the identified ambiguity dimensions, bounded by the four composition sources.

### End of Invocation

After every item has completed Stage 4: assemble the bundle (see "Output Contract" below), run the LAYER 1 mode self-check (see "Failure Modes" below), assign the verdict (see "Verdict Assignment" below).

### Deterministic Gates

- **Stage 1 entry:** invocation starts; statement received.
- **Stage 1 exit:** Itemize emits count + per-item identifiers; per-item iteration begins.
- **Stage 2 entry:** per-item; item text received.
- **Stage 2 exit:** MQ entries + MQA reconciliation-content emitted.
- **Stage 3 entry:** post-Stage 2; same item.
- **Stage 3 exit:** Deconstruct tuple + MultiDepth two outputs both emitted.
- **Stage 4 entry:** post-Stage 3; same item.
- **Stage 4 exit:** considered-articulations set emitted; per-item bundle complete.
- **End-of-invocation:** all items processed; bundle assembly + self-check + verdict assignment fire.

---

## LLM-Judgment Edges

Seven points where the LLM exercises judgment under authorized latitude. Each edge has an asymmetric-failure direction.

| # | Edge | What the LLM does | Asymmetric-failure direction |
|---|---|---|---|
| 1 | **Cold-vs-warm-context detection** | Examines loaded context for relevance signals to this task's domain. Relevance present → warm; absence → cold. | Prefer **cold-context treatment** under uncertainty. |
| 2 | **Intrinsic-vs-extrinsic exclusion routing** | Per exclusion signal, determines source. In-statement (intrinsic) → MQ3 + MQA. In session context (extrinsic) → MQ4. | Prefer routing to **both MQ3 and MQ4** when source is unclear. |
| 3 | **MQA reconcile-vs-surface threshold** | Examines MQ overlaps. Joint axis identifiable with confidence → reconcile. Joint axis unclear → surface "irreducible overlap." | Prefer **surface** over forced reconcile when overlap clarity is in doubt. |
| 4 | **2-shape determination** | Per typed axis, perceives whether openness is plausible. Yes → identified-ambiguities-list. No → explicit-empty. | Prefer **identified-ambiguities** under uncertainty. |
| 5 | **AMBIGUITY-NATURE operationalization** | Per ambiguity, determines WHAT-axis (action-endpoint) vs WHY-axis (motivation-chain). | Prefer emitting at **both MQ3 and MultiDepth** when axis is unclear. |
| 6 | **Multi-source composition (Rephrase)** | Per variant, judges against four composition bounds at generation time. | Prefer **over-bounding** (exclude variant under uncertainty). |
| 7 | **Variant count determination** | Variant count emerges from perceived ambiguity dimensions; typical 2–6; floor 2. | Prefer the **floor+ side** of the range. |

---

## Failure Modes

Failure modes group into two layers.

### LAYER 1 — Operational (detectable per invocation)

The end-of-invocation self-check scans the bundle for nine failure signatures in a single LIGHT pass. Each mode produces a binary fire / not-fire that feeds verdict assignment.

**Mode 1 — Premature Itemize split.** Itemize emitted count > 1 when the items are actually tightly coupled. Signal: per-item bundles can't be emitted cleanly without cross-item interpretation.

**Mode 2 — Late-detected multi-item case.** Itemize emitted count = 1 when the item's internal structure (revealed at Deconstruct or MQ2) indicates multiple items. Signal: Deconstruct tuple shows multi-tuple internal structure, or MQ2 identifies multi-axis splits internal to the item.

**Mode 3 — MQ extension violates bounded-extensibility.** An MQ was extended (a fifth axis added at runtime, or an existing axis broadened) in a way the four canonical axes don't authorize. Signal: emergent fifth-axis content.

**Mode 4 — Per-operation firing missed.** A required operation's output is absent from the bundle. Signal: missing field where one is required.

**Mode 5 — MQ2 answer missing preparation content.** MQ2's identified-context-need-ambiguities list is missing one or more of the three required element-axes (verdict / kinds / stance). Signal: absence of any axis.

**Mode 6 — MQ2 identified-ambiguities-list missing kinds-axis or stance-axis.** Distinct from Mode 5 — even when MQ2 emits identified-ambiguities, the kinds-axis or stance-axis may be missing. Signal: ambiguities present but specific axis absent.

**Mode 7 — 2-shape violation.** A commitment (interpretation, hedged guess, partial decision) was emitted at any MQ or at MultiDepth instead of an identified-ambiguities-list or explicit-empty. Signal: commitment-shaped content at a 2-shape position.

**Mode 8 — AMBIGUITY-NATURE conflation.** A WHY-axis ambiguity was identified at MQ3, OR a WHAT-axis ambiguity was identified at MultiDepth. Signal: motivation-chain content at MQ3 or action-endpoint content at MultiDepth.

**Mode 9 — Considered-articulations set drifts outside multi-source composition bounds.** A considered articulation violates one or more of the four composition bounds (deliverable-shape change; ambiguity-dimension span miss; NOT-list inclusion; substrate boundary violation). Signal: a considered articulation's content fails a composition check.

### LAYER 2 — Behavioral (detectable over time)

Some failure signatures are not per-invocation detectable — they reveal themselves only across multiple invocations as drift patterns. They are NOT scanned by the LAYER 1 self-check; they are observable only via audit-over-time.

Examples of LAYER 2 modes: a tendency over many invocations to systematically under-emit identified-ambiguities; a drift toward emitting commitments at 2-shape positions; a creeping expansion of variant counts beyond the typical 2–6 range. The discipline's runtime does not detect these; they belong to audit, not self-check.

---

## Verdict Assignment

At end-of-invocation, after the LAYER 1 self-check, the LLM assigns ONE verdict from a fixed set of five compound pairings. The verdict is the discipline's self-assessment output; there is no separate confidence field — the verdict's first half (HIGH / MED / LOW) IS the confidence axis, and the second half (PROCEED / FLAG / RE-RUN) IS the action axis. The compound is single-emission.

Two discriminators drive the assignment:

- **Primary (objective):** count of LAYER 1 mode boundary approaches from the self-check. Zero fires → clean. One fire → boundary approached. Multiple fires → structural concern.
- **Secondary (subjective):** the per-operation friction the LLM perceived during execution.

The five verdicts:

| Verdict | Condition |
|---|---|
| **HIGH-PROCEED** | Clean self-check + low friction. |
| **MED-FLAG** | One boundary approached + at least one fire, OR clean self-check + high friction. |
| **LOW-RE-RUN** | Structural failure (multiple fires; Mode 4 fire; Mode 1 or Mode 2 fire). |
| **LOW-PROCEED** | Process succeeded with compound friction but no structural failure. |
| **HIGH-FLAG** | Very confident the flagged condition exists (e.g., self-check confidently fires Mode 7 for 2-shape violation). |

The confidence axis (HIGH / MED / LOW) is readable from the verdict's prefix; a consumer that wants only the confidence reads the prefix. The action axis (PROCEED / FLAG / RE-RUN) is readable from the suffix. Neither axis is emitted independently — the discipline emits the compound.

**The `content-conflict` flag-type (warm pass only).** The five pairings above are keyed to the LAYER 1 self-check — *operational* conditions (a mode fired, friction was felt). The **warm** second pass (`articulate_warm`, which inherits this verdict system unchanged) can additionally attach a **`content-conflict` flag-type** to a FLAG verdict: a *content* condition — the warm pass detected an incompatibility between the request's premise and the surfaced project reality (see `docs/how_articulate_warm_should_be.md` §4). The discriminator lets a consumer (the runner) tell a **content-conflict** flag from an **operational** flag and act differently — e.g. surface a clarifying question, or block a severe conflict before spending the downstream pipeline, rather than merely noting friction. It is **defined here but emitted only by the warm pass**: the cold pass has no surfaced reality to conflict against, so a cold invocation never emits `content-conflict`. The five verdict pairings are unchanged; the flag-type is an optional discriminator carried alongside a FLAG.

---

## Output Contract

The discipline emits a per-item bundle plus statement-level fields, serialized to a markdown file. The canonical filename is `articulate_simple.md`. The file explains what happened during the invocation — which items were perceived, what each item's framing identified, which variants were generated, and what the self-assessment found.

### Per-item bundle contents

- **Item text** — the per-item statement from Itemize.
- **MQ entries** — four per item (MQ1 verdict, MQ2 context-need, MQ3 intent, MQ4 boundary), each with question text + 2-shape answer.
- **MQA reconciliation-content** — reconcile / surface / ALIGNED.
- **Deconstruct tuple** — deliverable shape + kinds + bounds.
- **MultiDepth outputs** — literal-statement + identified-purpose-motivation-ambiguities (2-shape).
- **Considered articulations** — the set of plausible-articulation variants emitted by Rephrase at Stage 4 (each one is a reading the discipline considered as plausible; the set as a whole preserves the openness identified upstream; no entry is committed to).

### Statement-level fields

- **Itemize count** — integer ≥ 1.
- **Per-item identifiers** — one per item.
- **Self-assessment verdict** — one of HIGH-PROCEED / MED-FLAG / LOW-RE-RUN / LOW-PROCEED / HIGH-FLAG. (The verdict's prefix HIGH / MED / LOW is the confidence axis; the suffix PROCEED / FLAG / RE-RUN is the action axis. Both read off the compound; no separate fields.)

### Assembly

As each operation emits, its output integrates into the bundle for the current item. After every item has completed Stage 4, the bundle is serialized into the output file. The end-of-invocation self-check includes the bundle integrity test: any missing required field fires Mode 4.

---

## Worked Examples

### Example A — Clean single-item case

**Statement:** *"Set up authentication for the new admin panel."*

**Itemize:** count = 1; one item: *"Set up authentication for the new admin panel."* Keep-together is unambiguous — no clause-boundary signals.

**Per-item articulation:**

- **MQ1 (verdict-axis):** *"What is the user asking for?"* — identified-ambiguities-list: `[scope-of-auth (basic password / OAuth / SSO / multi-factor); admin-panel-readiness (new build or existing panel needing auth added)]`.
- **MQ2 (context-need axis):** *"What context does the response need?"* — identified-ambiguities-list: `[verdict: existing auth library available; kinds: which user roles; stance: production vs prototype]`.
- **MQ3 (intent-axis, WHAT):** *"What is the user trying to accomplish?"* — identified-ambiguities-list: `[gate-admin-access (restrict who can use the panel) vs identify-admin-actions (log who did what)]`.
- **MQ4 (boundary-axis):** *"What is the user explicitly excluding?"* — explicit-empty.

- **MQA:** examines MQ1's "scope-of-auth" and MQ3's "gate-admin-access vs identify-admin-actions" — overlap is unclear (gate-vs-identify is a sub-decision of scope but not strictly a joint axis). MQA emits **surface**: "irreducible overlap between scope-of-auth options and intent endpoint; the choice of auth scope partially determines whether gating or identification is the dominant intent."

- **Deconstruct:** tuple = (deliverable: implementation; kinds: code + config; bounds: admin-panel module only).
- **MultiDepth literal-statement:** *"Set up authentication for the new admin panel."*
- **MultiDepth identified-purpose-motivation-ambiguities (WHY-axis):** identified-ambiguities-list: `[compliance-driven (regulatory requirement) vs security-driven (threat-model response) vs operational-driven (need user attribution for support workflows)]`.

- **Considered articulations** (output of Rephrase; bounded by Deconstruct deliverable-shape + identified-ambiguities + MQ4 explicit-empty + cold substrate):
  1. *"Implement basic password authentication on the admin panel module to gate access by role."*
  2. *"Add OAuth-based authentication to the admin panel for both gating and audit logging."*
  3. *"Set up SSO integration for the admin panel as the central admin entry point."*
  4. *"Build multi-factor authentication on the admin panel scoped to production-deployment readiness."*

**Self-check (LAYER 1):** zero fires. **Verdict:** HIGH-PROCEED.

### Example B — Multi-item statement

**Statement:** *"Set up auth and also write the migration doc."*

**Itemize:** count = 2; items: `[1: "Set up auth"; 2: "write the migration doc"]`. The conjunction "and also" plus the deliverable-type difference (implementation vs documentation) signals two distinct items; keep-together does not hold.

Each item then independently completes Stages 2–4 (per-item articulation). The end-of-invocation bundle contains two per-item bundles plus the statement-level fields.

### Example C — 2-shape with explicit-empty

**Statement (item):** *"Refactor the date utility class."*

**MQ4 (boundary-axis):** the statement contains no exclusion language; no session-context declarations of deprecations or out-of-scope areas are loaded. The LLM perceives no plausible boundary ambiguity. **Emits explicit-empty.**

The explicit-empty is an emission, not an absence. A consumer of the bundle sees "MQ4 perceived no boundary ambiguity" — distinct from "MQ4 didn't fire" (which would fire Mode 4 in the self-check).

### Example D — 2-shape violation (Mode 7 fires)

**Anti-example.** MQ3 emits: *"The user is trying to improve performance."*

This is a **commitment**, not an identified-ambiguities-list and not an explicit-empty. The 2-shape principle requires one of the two shapes; "the user is trying to improve performance" is an interpretation — the discipline has adjudicated an intent. The LAYER 1 self-check at end-of-invocation fires **Mode 7 (2-shape violation)**. The verdict drops to MED-FLAG or LOW-RE-RUN depending on whether other modes also fire.

The corrective: MQ3 should emit either an identified-ambiguities-list naming the possible intents (e.g., `[performance-improvement vs code-clarity vs maintainability vs deprecation-prep]`) or explicit-empty if no intent ambiguity is perceivable.

---

## Saturation Indicators (Telemetry)

The discipline does not have rigid convergence criteria — articulation completeness is bounded by what's perceivable at the LLM-judgment edges. But four indicators signal whether an invocation is healthy:

- **2-shape compliance** — every MQ answer and every MultiDepth output is identified-ambiguities-list or explicit-empty (never a commitment). Mode 7 fire = non-compliance.
- **Composition fidelity** — every considered articulation satisfies the four composition bounds. Mode 9 fire = drift.
- **Axis discipline** — MQ3 contains only WHAT-axis content; MultiDepth contains only WHY-axis content. Mode 8 fire = conflation.
- **Bundle completeness** — every required field is present. Mode 4 fire = incompleteness.

These are indicators, not gates. They signal whether the invocation produced a clean bundle, not whether the bundle is "right" — the latter is not the discipline's question.

---

## Standard Analysis Protocol

When applying Structural Articulation (Simple) to a task statement:

1. Read the statement and load relevant session context.
2. Run Itemize. Emit count and per-item identifiers.
3. For each item, run Stage 2 (Meta-question + MQA), then Stage 3 (Deconstruct + MultiDepth), then Stage 4 (Rephrase).
4. Assemble the per-item bundles plus statement-level fields.
5. Run the LAYER 1 self-check (single LIGHT pass; binary fire / not-fire per mode).
6. Assign the verdict (one of the five compound pairings).
7. Serialize the bundle to the output file.

---

---- NOW SOLID INSTRUCTIONS START ----

## Execute the Following Process

### Step 1 — Itemize

Read the task statement. Decide how many work items it expresses. Asymmetric-failure bias: prefer keep-together under uncertainty.

Emit:
- `count` — integer ≥ 1.
- `items` — list of per-item identifiers and per-item statements.

### Step 2 — For each item, articulate

For each item, perform Stages 2–4 in order.

#### Stage 2 — Meta-question + MQA

Fire MQ1 (verdict-axis), MQ2 (context-need axis), MQ3 (intent-axis, WHAT), MQ4 (boundary-axis) in sequence. Each MQ emits:
- `question` — the Q-mandatory question text for this MQ axis.
- `answer` — one of: `identified-ambiguities-list` (a list naming the ambiguities) or `explicit-empty` (a signal that no openness is perceivable at this axis).

Then fire MQA. MQA examines the four MQ identification-sets for overlaps and emits:
- `mqa` — one of: `reconcile` (with joint-axis content), `surface` (with irreducible-overlap content), or `ALIGNED`.

Watch the LLM-judgment edges: intrinsic-vs-extrinsic exclusion routing (Edge 2); MQA reconcile-vs-surface threshold (Edge 3); 2-shape determination per axis (Edge 4).

#### Stage 3 — Deconstruct + MultiDepth (independent; either order)

Fire Deconstruct: emit the tuple `(deliverable, kinds, bounds)`. Cross-check against the Itemize count; if Deconstruct's tuple structure suggests multi-item, emit a late-split signal.

Fire MultiDepth: emit two outputs:
- `literal-statement` — verbatim or near-verbatim restatement of the item, non-contaminating.
- `purpose-motivation-ambiguities` — 2-shape (identified-ambiguities-list of WHY-axis ambiguities, or explicit-empty).

Watch the LLM-judgment edges: AMBIGUITY-NATURE operationalization (Edge 5; WHY content goes to MultiDepth, WHAT content goes to MQ3).

#### Stage 4 — Rephrase

Read four composition sources:
- Deconstruct's deliverable-shape (from Stage 3).
- Identified-ambiguities-list aggregated from MQ2 + MQ3 + MultiDepth's WHY-axis post-MQA reconciliation.
- MQ4's NOT-list.
- Substrate (warm session context if present; cold otherwise).

Generate a set of 2–6 considered articulations (plausible variant readings of the item) spanning the identified ambiguity dimensions. Each considered articulation must pass the four composition bounds at generation time.

Emit:
- `considered_articulations` — the set of considered-articulation entries.

Watch the LLM-judgment edges: multi-source composition (Edge 6; over-bounding bias); variant count (Edge 7; floor+ bias).

### Step 3 — Assemble bundle and self-check

After every item has completed Stage 4, assemble the statement-level bundle:

```
{
  count: <integer>,
  items: [
    {
      id: <identifier>,
      text: <item text>,
      mqs: { mq1: {...}, mq2: {...}, mq3: {...}, mq4: {...} },
      mqa: {...},
      deconstruct: {...},
      multidepth: { literal-statement: ..., purpose-motivation-ambiguities: ... },
      considered_articulations: [...]
    },
    ...
  ],
  self-assessment: { verdict: ... }
}
```

Run the LAYER 1 self-check in a single LIGHT pass: for each of the 9 modes, scan the bundle for the failure signature; emit binary fire / not-fire per mode.

Assign the verdict using Primary (LAYER 1 boundary approach count) + Secondary (perceived per-operation friction). Pick one of the five compound pairings: HIGH-PROCEED / MED-FLAG / LOW-RE-RUN / LOW-PROCEED / HIGH-FLAG. The pairing's prefix encodes the confidence axis; the suffix encodes the action axis. Emit the compound; do not emit a separate confidence field.

### Step 4 — Emit output

Serialize the bundle to a markdown file. The canonical filename is `articulate_simple.md`. The file is the discipline's output artifact — it explains what happened during the invocation: which items were perceived, what each item's framing identified at each MQ + MQA + Deconstruct + MultiDepth, which variants were generated, and what the self-assessment verdict is.

The output file is the discipline's complete record of the invocation. A consumer reads it; no other discipline state is required.

---

## Summary

| Component | What it is | How many |
|---|---|---|
| **Core operations** | Itemizing + Articulating per-item | 2 |
| **Per-item operations** | Meta-question + MQA + Deconstruct + MultiDepth + Rephrase | 5 (+ MQA) |
| **Runtime stages** | Itemize → MQ + MQA → Deconstruct + MultiDepth → Rephrase | 4 |
| **LLM-judgment edges** | Cold-context / intrinsic-extrinsic routing / MQA threshold / 2-shape / AMBIGUITY-NATURE / multi-source / variant count | 7 |
| **LAYER 1 modes** | Operational failure signatures detectable per invocation | 9 |
| **LAYER 2 modes** | Behavioral failure signatures detectable over time | open-ended |
| **Verdict pairings (compound; emitted as one field)** | HIGH-PROCEED / MED-FLAG / LOW-RE-RUN / LOW-PROCEED / HIGH-FLAG | 5 |
| **Output artifact** | `articulate_simple.md` | 1 per invocation |
| **Lightweight stance criteria** | No verify-phase / no external-anchor / no halt-gate / no sub-machinery / no ecosystem-knowledge / load-bearing-only | 6 |
| **NOT-list rules** | No adjudication / no mid-invocation clarification / no planning / no cross-item interpretation / no commitments at 2-shape positions | 5 |

This thinking discipline is domain-agnostic. It works for any task statement that asks for something — software work, writing, research, design, planning — wherever the framing needs to be made explicit without committing to a single interpretation. It does not prescribe WHAT to produce — it provides the structural tools for HOW to articulate what's being asked.
