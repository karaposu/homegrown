# Exploration — per-item content depth of /explore's surfacing mechanism

## User Input
`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-12_11-14__explore_surfacing_mechanism_depth/_branch.md`

Prior context: the iter-2 finding committed `/explore = purposive open-mode surfacing` with a 5-entry NOT-list including "no meaning extraction." The user's concern: if /explore strips meaning, sense-making has to re-discover what each surfaced item IS, defeating the upstream-precondition relationship.

---

## Mode and Entry Point

- **Mode: possibility.** Per-item depth options must be generated.
- **Entry: signal-first.** The user named a specific concern; the inquiry probes whether the NOT-list's "no meaning" claim creates an operational gap that the spec must close.
- **Surround layer:** the discipline asymmetry with `/navigation` (whose routes carry rich per-route fields) is the immediate frame; the NOT-list from iter-2's finding is the load-bearing prior commitment.

---

## Cycles

### Cycle 0 — Surround layer: /navigation's per-route content as comparator

Per-route fields in /navigation's iter-1 spec: **Direction, Goal, Type, Priority, Status, Blocked-by, Purpose, Movement, Unlocks, Why-this-route-exists, Guidance-mode, Continuation-note.**

Most of these are *labeling* (Direction, Goal, Type, Status, Movement) or *operational* (Priority, Blocked-by, Guidance-mode, Continuation-note). One — "Why this route exists" — drifts toward meaning-extraction-style reasoning but stays at the level of *why this option is on the map*, not *what this option means in the conceptual structure*.

Navigation's per-route content is **rich-but-not-meaning-extracting**. The asymmetry the user senses (/navigation richer than /explore's surfaced items) is real at the iter-2 spec level — iter-2's surfaced items have existence + confidence + optional annotations (relevance + adjacency + confirmed-absent), but the spec doesn't name what *labeling content* a surfaced item carries.

### Cycle 1 — Candidate per-item depth levels

Each surfaced item could carry, increasingly:

- **D0 — Bare identifier.** Just a name/path/ID. (`src/auth.py`)
- **D1 — Identifier + surface form.** Identifier + observable facts (size, signature, exports). No interpretation. (`src/auth.py, ~200 lines, exports authenticate()`)
- **D2 — Identifier + surface form + functional one-line.** Adds a brief "what does this do" line at the level where any reader would produce roughly the same description. (`src/auth.py — handles user authentication, ~200 lines, exports authenticate(), imports bcrypt`)
- **D3 — D2 + structural adjacency.** Adds co-location facts (called-by, imports, lives-near). (`src/auth.py — handles user authentication, called by src/views/login.py`)
- **D4 — D3 + relevance verdict.** Adds the item's relevance tag (relevant / partially-relevant / confirmed-not-relevant). (Adds "relevance: confirmed-relevant to inquiry purpose")
- **D5 — D4 + conceptual-role gloss.** Adds a phrase like "this is the access-control entry point." → CROSSES INTO MEANING-EXTRACTION.
- **D6 — D5 + relational claims.** Adds "this relates to session-management as gatekeeper does to mediator." → DEEP IN MEANING-EXTRACTION.

The boundary lies between D4 and D5. D0–D4 are labeling/identifying. D5+ is meaning-extraction (sense-making's territory).

### Cycle 2 — Probe the labeling-vs-meaning heuristic

What distinguishes labeling (D0–D4) from meaning (D5+)?

**Strongest candidate heuristic: inter-rater agreement.**

- "Would another competent scanner of the same item produce roughly the same description?"
- If yes (high inter-rater agreement, low interpretive freedom) → **labeling**.
- If no (multiple defensible framings, high interpretive freedom) → **meaning-extraction**.

Applied:
- "src/auth.py exports `authenticate()`" — high agreement. **Labeling.**
- "src/auth.py handles user authentication" — high agreement at the functional level. **Labeling.**
- "src/auth.py is the access-control entry point of the system" — multiple defensible framings (gatekeeper? entry point? identity-anchor?); lower agreement. **Meaning.**
- "src/auth.py grounds all downstream authorization decisions" — interpretive claim about role in conceptual structure. **Meaning.**

Secondary heuristic (cross-check): **"Does this description close interpretive freedom or open it?"**
- If it states facts (closed) → labeling.
- If it imposes a frame (opens to other framings) → meaning.

Tertiary heuristic: **"Could the description be wrong in a sensemaking-style way?"**
- If wrong-ness is empirical (factual error) → labeling.
- If wrong-ness is interpretive (different frame more apt) → meaning.

All three heuristics converge on the same boundary between D4 and D5.

### Cycle 3 — Probe resolution-coupling

The just-finished inquiry's resolution-level field controls BREADTH (how many items per invocation: ~10, ~50, ~200). Does it also control DEPTH-PER-ITEM?

**Observation:** at coarse resolutions, per-item depth is naturally lower (you can't sustain D3 detail across ~10 items if scanning broadly). At fine resolutions, per-item depth naturally rises (you have fewer items, can afford more per-item content).

But the two are CONCEPTUALLY ORTHOGONAL:
- A coarse scan (broad/shallow) could in principle produce D3 detail per item (just slower; might exceed budget).
- A fine scan (narrow/deep) could in principle produce just D1 detail per item (just leaves capacity unused).

Typical coupling:
- Resolution-level "coarse / ~10 items" → per-item depth D1–D2
- Resolution-level "medium / ~50 items" → per-item depth D2–D3
- Resolution-level "fine / ~200 items" → per-item depth D3–D4

This coupling is operational (LLM context budget), not structural. The spec should name BOTH dimensions; the coupling can be a recommended default.

**New anchor (S3):** the spec should add a **depth-level** field alongside the resolution-level field. Or: name depth-level as DERIVED from resolution-level with a default mapping; users can override.

### Cycle 4 — Jump scan: missed framings

Before declaring convergence, scan in a direction not yet considered.

**Direction not considered:** the item's CONTENT FORM. So far, I've assumed labels are MARKDOWN PROSE strings. But items could be records with typed fields:

```
{
  id: "N1",
  identifier: "src/auth.py",
  surface_form: { size: 200, exports: ["authenticate"], imports: ["bcrypt"] },
  functional_summary: "handles user authentication",
  adjacency: { called_by: ["src/views/login.py"], same_region: ["src/sessions.py"] },
  relevance: "confirmed-relevant",
  confidence: "confirmed"
}
```

vs free prose:

```
src/auth.py — handles user authentication. ~200 lines; exports `authenticate()`;
imports bcrypt. Called by src/views/login.py. Confidence: confirmed. Relevance:
confirmed-relevant.
```

These are equivalent at the labeling level but differ in machine-readability. The iter-2 deferred items include "typed existence-claim schema" (SK-STD+ Schema). This jump-scan finding reinforces that the per-item depth spec should be expressible in EITHER form — typed records (when schema is activated) or prose (default markdown).

**Direction not considered (second):** TEMPORAL CONTENT. Is the per-item content a snapshot at scan time, or does it have temporal currency? E.g., a file's size at scan-time vs its "current" size. The spec should clarify: per-item content is a **snapshot at scan time**, not a live reference. This is implicit in iter-2's idempotency-within-invocation commitment.

No major lurch from jump scan. Convergence holds.

### Cycle 5 — Convergence

All three criteria met:
- **Frontier stability:** Cycle 1–4 covered the depth-level options and the heuristic. No new structural surprises.
- **Declining discovery rate:** Cycle 1 surfaced 7 depth options (D0–D6); Cycle 2 condensed to one boundary (D4↔D5); Cycle 3 surfaced 1 new dimension (depth-level orthogonal to resolution-level); Cycle 4 surfaced 1 form-detail (typed-vs-prose) and 1 implicit clarification (snapshot semantics).
- **Bounded gaps:** remaining frontier questions (heuristic operationalization at edge cases; exact default depth-by-resolution mapping) connect to known iter-2 commitments.

---

## Inventory (final candidate set)

### Primary candidates (advance to sensemaking)

- **The per-item content depth has 5 acceptable levels (D0–D4):** identifier; +surface form; +functional one-line; +structural adjacency; +relevance verdict. D5+ crosses into meaning-extraction (sense-making's territory).
- **The labeling-vs-meaning boundary heuristic:** "Would another competent scanner produce roughly the same description?" (inter-rater agreement). Secondary: "Does this close or open interpretive freedom?"
- **A new spec field — depth-level — orthogonal to resolution-level.** Resolution controls breadth (item count); depth controls per-item richness. Default coupling: coarse-breadth pairs with shallow-depth; fine-breadth pairs with rich-depth. Users can override.
- **Per-item content is a snapshot at scan time** (already implicit in idempotency-within-invocation).
- **Form is dual-track:** prose (default markdown) and typed records (when SK-STD+ Schema activates — deferred from iter-2's tiered evolution path).

### NOT-list reconciliation

The iter-2 NOT-list's "no meaning extraction" claim **survives intact**, with a clarification:

- "Meaning" excluded means **conceptual-structure meaning** — anchor extraction, relational claims, interpretive role assignment. (D5+)
- "Meaning" NOT excluded means **labeling for identification** at the inter-rater-agreement level — functional one-liners, surface forms, structural adjacency. (D0–D4)

The NOT-list refinement is at the *clarification level*, not the structural level. The five neighbor exclusions still hold; the labeling-vs-meaning distinction sharpens what "meaning" means in this context.

### Dropped / killed

- **D0 (bare identifier only) — too thin.** Sense-making would have to re-discover everything; the user's concern is valid. /explore should produce at least D2 default.
- **D5+ (conceptual-role gloss) — crosses into sense-making.** Killed by NOT-list.
- **Single-track form (prose only) — premature exclusion of typed.** Iter-2 deferred items keep the typed track available; spec should accommodate both.
- **"Resolution-level alone determines depth" — kill.** Conflates orthogonal dimensions.

---

## Signal Log

| # | Signal | Status |
|---|---|---|
| S1 | /navigation has rich per-route content; iter-2 /explore lacks equivalent labeling specification | NOTED → motivates this inquiry; asymmetry confirmed |
| S2 | Labeling-vs-meaning boundary lies between D4 and D5; heuristic is inter-rater agreement | PROBED → 3 heuristics converge |
| S3 | Per-item depth is a NEW dimension orthogonal to resolution-level | PROBED → spec needs depth-level field with default-coupling-to-resolution |
| S4 | Per-item content is a snapshot at scan time | NOTED — already implicit; spec should make explicit |
| S5 | Form is dual-track (prose / typed); iter-2 deferred schema covers typed | NOTED → no spec change needed beyond inheriting the deferred item |
| S6 | The NOT-list survives intact with a clarification (meaning = conceptual-structure-meaning, not labeling) | PROBED → reconciliation produced |

---

## Confidence Map

| Region | Confidence | Note |
|---|---|---|
| 5 acceptable per-item depth levels (D0–D4) | **Confirmed** | Triangulated across codebase / research / problem-domain examples |
| Labeling-vs-meaning boundary at D4↔D5 | **Confirmed** | Three converging heuristics |
| Inter-rater agreement is the load-bearing heuristic | **Scanned** | Plausible; sense-making should harden the operational test |
| Depth-level as new spec field orthogonal to resolution-level | **Scanned** | Plausible; sense-making should commit |
| Default coupling (coarse↔shallow; fine↔rich) | **Inferred** | Operational reasoning (context budget); empirical validation pending |
| NOT-list survives with clarification | **Confirmed** | Reconciliation produced; no structural NOT-list change |
| Per-item content is scan-time snapshot | **Confirmed** | Already implicit |
| Form is dual-track (prose / typed) | **Confirmed** | Inherits iter-2 deferred item |

**Confirmed absent:**

- D0 (bare identifier) as the default — too thin for downstream use.
- D5+ (conceptual-role gloss) — crosses into sense-making.

---

## Frontier State

**STABLE.** All three convergence criteria met. Discovery rate dropped from Cycle 1 (7 depth options) to Cycle 4 (0 new structural). Jump scan held.

---

## Gaps and Recommendations (handoff)

**For sensemaking:**

1. Stabilize the per-item depth spec: D0–D4 as acceptable; D5+ excluded; D2 as default minimum.
2. Stabilize the labeling-vs-meaning heuristic as inter-rater agreement; operationalize the test (when in doubt, ask: "could a different scanner produce a different description?").
3. Commit to depth-level as a new spec field orthogonal to resolution-level. Default-coupling to be named.
4. Confirm the NOT-list survives intact with the clarification that "meaning" = conceptual-structure meaning, not labeling.
5. Resolve whether depth-level appears in Step 0 declarations alongside resolution-level OR as a derived parameter with override option.

**For decompose:**

6. Partition the spec additions into pieces: per-item content specification (Components section); depth-level field (Step 0 / Process section); NOT-list clarification (Identity / Quality section).

**For innovate:**

7. Generate candidate phrasings for the per-item content spec entry: minimal (one sentence); standard (a table with D0–D4 levels + heuristic); maximal (table + examples + heuristic + default-coupling table).

**For critique:**

8. Stress-test the inter-rater-agreement heuristic at edge cases (e.g., domain-specific jargon: in some research fields, "the dominant paradigm for X" might be a high-agreement claim — does that make it labeling rather than meaning?).
9. Test whether D4 (relevance verdict) actually belongs to /explore or to a follow-up sense-making pass; the iter-2 framing puts relevance as a scan-driver (attention bias), not as a post-hoc verdict.

---

## Telemetry

- **Mode:** possibility
- **Entry point:** signal-first
- **Cycles run:** 6 (surround + 4 cycles + convergence)
- **Surfaced items:** 7 depth options (D0–D6); 3 heuristics; 1 orthogonal dimension; 2 form options; 6 signals
- **Convergence:** 3/3 criteria met
- **Jump scan performed:** YES; no lurch
- **Failure modes checked:** Premature Depth (no — broad scan first); Surface-Only Scanning (no — all signals probed); False Confidence (jump scan); Premature Termination (3/3 explicit); Re-Exploration (no — new layer than iter-1/2/end-goal inquiries); Completeness Bias (standard depth options before novel framings)
- **Output:** COMPLETE

## Self-Assessment

**Overall: PROCEED**

The per-item depth question is well-bounded: 5 levels of acceptable labeling (D0–D4), 1 boundary at D4↔D5, 3 converging heuristics, 1 new orthogonal spec field (depth-level), and a NOT-list clarification (no structural change; just refining what "meaning" means). The user's concern is real and addressed: sense-making does NOT have to re-discover what items are at the identifying level, because /explore now produces D2-default labeling (functional one-line + surface form). Sensemaking should stabilize the spec commitments and operationalize the heuristic.
