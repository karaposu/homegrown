# Branch: articulate_warm reference-file design (should / shouldn't / what concepts)

## Source Input

```text
lets dive deep into  references/articulate_warm.md how it should be and it shouldnt be , it should include what concepts etc
```

(Warm-session context: the subject is `cognitive_harness/articulate_warm/references/articulate_warm.md` — a reference file that does NOT yet exist. Agreed this session: the reference now makes sense [conflict-detection = warm-only own-content]; guardrails = inherit-not-duplicate · consolidate-not-scatter · operationally-self-contained · runtime-vs-maintenance · time-dependent. Priors: 09-05, 09-48, 11-32.)

## Articulation Reference

- **File:** `devdocs/inquiries/2026-07-09_13-19__articulate_warm_reference_file_design/articulate_simple.md`
- **Itemize count:** 1
- **Per-item identifiers:** I1 (the reference-file design)
- **Verdict:** HIGH-PROCEED
- **Flagged conditions:** none (signals: Synthesis Trigger required; Layer Commitment = Structural)

## Question

**I1 (literal):** "dive deep into `references/articulate_warm.md` — how it should be and it shouldn't be, what concepts it should include."

**What KIND (MQ1 — preserved):** `design-a-spec-artifact` (operative) · `draw-an-inclusion/exclusion-boundary` (should/shouldn't = boundary-drawing) · `define-inter-file-relationships` (a reference's identity is largely what it delegates) · `[latent] author-the-file-now` (routed to design; write = gated follow-on).

**What ENDPOINT (MQ3 — preserved):** `a-section-by-section-blueprint` (dominant) · `an-inclusion/exclusion-manifest` (the concepts inventory) · `an-inter-file-division-of-labor` (SKILL / reference / design-doc / shared-reference) · `[open] design-only vs also-write`.

## Goal

**Deliverable (Deconstruct):** a structural blueprint for `references/articulate_warm.md` — its sections, the concepts it canonically holds vs points-to vs excludes, and its relation to the SKILL + design doc + shared reference.

**Kinds:** a design/spec artifact (structural-layer) — a blueprint + an IN/POINTED-TO/OUT manifest + a division-of-labor. NOT the written file (by default), NOT rationale, NOT a shared-ops copy.

**Bounds:** IN = the reference's own structure + what warm-specific content it canonically holds + what it points-to + its inter-file role. OUT = duplicating shared definitions · re-deciding Meaning/Process · the WHY-rationale (→ design doc) · writing the file (gated) · restructuring the SKILL/design-doc beyond naming the division.

**WHY (MultiDepth WHY-axis — preserved):** `standard-shape/completeness` (give warm the SKILL+references shape now that it has own-content) · `de-scatter/single-source-of-truth` (a canonical operational home) · `runtime-executability` (a file a model can RUN warm from without chasing articulate_simple) · `build-readiness` (a clean Step-0 pre-read target before the R2d wiring) · `[possible] drift-avoidance` (get the inherit-vs-inline boundary right).

**Context downstream needs (MQ2):** the priors (Synthesis Trigger below) + the current built artifacts (SKILL.md, the design doc, articulate_simple's reference) + other discipline references as the shape-template. Stance: design WITHIN the agreed guardrails, don't re-litigate them.

## Considered Articulations

**Item I1 — the reference-file design:**
1. **(dominant)** A section-by-section blueprint: which sections, and for each, what warm-specific content it canonically holds (identity · the 3 operation-classes · the trigger-gated re-run principle · conflict-detection · the loop/termination · substrate · output contract) vs what it points to (the shared operation definitions · 2-shape · verdicts · failure modes) — operationally self-contained, inherit-not-duplicate.
2. The IN / POINTED-TO / OUT concept manifest: the explicit inventory of what's inside, what's inherited-by-pointer, what's excluded (rationale → design doc; shared defs → articulate_simple).
3. The inter-file division of labor: SKILL (thin invocation wrapper) vs reference (canonical operational spec) vs design-doc (rationale/provisional) vs articulate_simple-reference (shared ops) — so the reference consolidates rather than scatters; + what the SKILL slims to once the reference exists.
4. The reference as the operationally-self-contained runtime target: everything a model needs to EXECUTE warm inline (operational cheat-sheet + conflict-detection spec + the loop), pointers only for deep definitions not reasoned-from each run + the churn-vs-stabilization snapshot note.

## Scope Check

**Question covers goal.** The blueprint reading (variant 1) subsumes the manifest (2), the division-of-labor (3), and the runtime-target framing (4) as facets of one reference-file design.

**Specific-vs-pattern:** targets a SPECIFIC artifact (`references/articulate_warm.md`) — correctly scoped to it, not the general "how should any discipline reference be" pattern (though the answer will lean on the shared discipline-reference template).

**The one open seam — design vs write:** default is **design** (a blueprint + manifest + division-of-labor), with **writing the file as a user-gated follow-on** — consistent with the R2a-c pattern (design, then build on the go-ahead). The build the user did last turn (R2a-c) suggests they may want to write it right after; surfaced here, the pipeline proceeds on the design reading and CONCLUDE offers the write.

## Layer Commitment

**PRIMARY LAYER: Structural** — what the reference file's spec LOOKS LIKE: its sections, what content lives inside vs is pointed-to vs excluded, and its relation to the SKILL / design-doc / shared-reference. The ask is explicitly about the file's shape and contents.

**Other layers considered, OUT of scope:**
- **Meaning** — what warm IS (loop-controller + conflict-gate) — SETTLED (21-50 + 09-48); the reference *records* it, doesn't re-open.
- **Process** — what steps warm runs (trigger-gated re-run; conflict-detect→escalate) — SETTLED (09-48); the reference *specifies* it canonically, doesn't re-derive it.

The dive is purely the STRUCTURAL question of the reference artifact. If a content decision turns out to need a Process re-decision, that's a flag-to-user, not an in-dive re-open.

## Synthesis Trigger

This inquiry consolidates prior outputs into the reference's design; CONCLUDE will require an `## Inherited Commitments Re-test`.

- **`devdocs/inquiries/2026-07-09_11-32__articulate_warm_holistic_structure_integration/finding.md`** — commits: the holistic structure (3 operation-classes: carried / re-run / warm-only-new · the identity refinement "no new operation-type + one application" · the shared `content-conflict` flag-type · the §4/§11 doc deltas). The reference must house this holistic structure canonically.
- **`devdocs/inquiries/2026-07-09_09-48__articulate_warm_operation_set_and_warm_only_mechanisms/finding.md`** — commits: Item A (trigger-gated re-run) + Item B (conflict-detection → gated escalation; emit/runner-asks; autonomy-degrade). The reference is the canonical home for conflict-detection specifically.
- **`devdocs/inquiries/2026-07-09_09-05__articulate_warm_structure_layer/finding.md`** — commits: the thin-wrapper structure (SKILL, no own references/, inherits operations). The reference *completes/updates* this — the thin-wrapper premise ("no own operations") is what changed, so the reference is the sanctioned exception, and the SKILL→reference relation must be re-specified.

**The synthesis question:** given the holistic structure + conflict-detection + the (now-superseded-in-premise) thin-wrapper, what is the reference file's canonical content, what does it point-to, and how does it divide labor with the SKILL and the design doc — so it consolidates the scatter rather than adding to it?
