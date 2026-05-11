## User Input

```
devdocs/inquiries/2026-05-10_08-30__meta_state_artifact_purpose_and_alternatives/_branch.md

[Generate concrete content per piece. Anti-bloat HARD. Self-application: finding uses descriptive names, NOT workspace IDs.]
```

---

# Innovation: Meta-state Artifact Purpose and Alternatives

## Intuition + Direction

**Context:** the user is at the edge of building L1 and asking whether to bother with `_meta_state.md`.

**Valuation:** the recommendation should be drop-in usable today — they read it, decide, build L1 without designing/maintaining a separate artifact.

**Direction:** every piece optimizes for **decision clarity** — the user knows exactly what to add to `_branch.md` and what NOT to build.

---

## Verdict-and-Function-Split Piece (variants)

### Variant — Compact paragraph + 3-row table (combination + lens shifting)

```
**Verdict at L1: drop `_meta_state.md`.** The artifact's named functions
split into three groups. The first is corpus-derivable — walking existing
finding.md frontmatter and `_branch.md` Relationships chains gives
path memory, durable cross-run memory, stateful traversal evidence,
stop/continue support, and double-visit prevention. No new file needed.
The second is recording-required at point-of-use — selection rationale
("why did the meta-loop pick this direction?") is a one-line addition
to the next inquiry's `_branch.md`. The third is human-handled at L1 —
spin-detection and branch/merge state are the human Selector's job
until L4 makes them system functions.

| Function group | Where it lives at L1 |
|---|---|
| Path memory, durable cross-run, stateful traversal evidence, stop/continue, double-visit | Walk existing artifacts (no new file) |
| Selection rationale, calibration data accumulation | One-line field on next inquiry's `_branch.md` |
| Spin-detection, branch/merge cross-head state | Human Selector at L1; reconsider at L4 |
```

**Test:** Novelty MEDIUM (the three-group split is a real refinement); Survival YES; Fertility HIGH (each group's home is named); Actionability HIGH (verdict + table is decision-ready); Mech.indep. YES.

**Recommended.**

---

## L1 Implementation Piece (variants)

### Variant A — Inline within Relationships (combination)

Add to next inquiry's `_branch.md` Relationships section:

```
## Relationships

- SELECTED-FROM: devdocs/inquiries/<parent_id>/finding.md (direction:
  <Navigation type or specific direction text>) — <one-line rationale>
- BUILDS-ON: ...
- RELATED: ...
```

Pros: fits an existing section; consistent with existing relationship-label style.
Cons: SELECTED-FROM is structurally different from BUILDS-ON / RELATED — those are static relationships between findings; SELECTED-FROM is a meta-loop traversal record.

### Variant B — Separate "Selection" subsection (constraint manipulation: introduce dedicated boundary)

Add a small block to next inquiry's `_branch.md`, immediately before Relationships:

```
## Selection (when produced by meta-loop traversal)

- **Parent:** devdocs/inquiries/<parent_id>/finding.md
- **Direction:** <Navigation type or specific direction text>
- **Rationale:** <one-line: why this direction over others>

## Relationships
- BUILDS-ON: ...
```

Pros: keeps meta-loop traversal info structurally separate from inquiry-author relationships; the section is omitted entirely for inquiries NOT created by meta-loop traversal (the user-seeded ones); explicit.
Cons: adds a small section that may be empty for many inquiries.

### Test cycle for L1 Implementation variants

| Variant | Novelty | Survival | Fertility | Actionability | Mech.indep. |
|---|---|---|---|---|---|
| Variant A (Inline Relationships) | LOW | YES | MEDIUM | HIGH | YES |
| Variant B (Separate Selection section) | MEDIUM | YES | HIGH | HIGH | YES |

**Recommended: Variant B** — Separate "Selection" subsection. The meta-loop traversal record is structurally distinct from inquiry-author relationships (the latter describes the inquiry's content position; the former describes how the meta-loop reached this inquiry). Conflating them in Relationships invites confusion. The section is omitted for non-meta-loop inquiries, so it doesn't bloat user-seeded ones.

### Concrete example

When a meta-loop runner spawns inquiry-Y from inquiry-X by selecting Navigation direction "DEEPEN on the 12-fields claim":

```markdown
# Branch: <inquiry-Y title>

## Question
...

## Goal
...

## Selection (when produced by meta-loop traversal)

- **Parent:** devdocs/inquiries/2026-05-10_03-50__navigation_established_audit/finding.md
- **Direction:** DEEPEN — challenge the 12-required-fields-per-route rule
- **Rationale:** Tier-1 challenge candidate from the navigation audit; user flagged this as the heaviest per-route overhead.

## Relationships
- BUILDS-ON: devdocs/inquiries/2026-05-10_03-50__navigation_established_audit/finding.md (the audit identifying the 12-fields claim as a heuristic)
```

---

## Level-aware Roadmap Piece (single phrasing)

```
| Level | What changes | Verdict |
|---|---|---|
| L0 (current) | No meta-loop runner; human holds traversal context in head | No artifact needed |
| L1 (sequential, human Selector) | Meta-loop runner exists; human picks direction | Add `Selection` subsection to next `_branch.md`; no separate state file |
| L2-L3 (persistent / graph-aware Navigator) | Cross-run patterns become noticeable; corpus-walk costs grow | Optionally add a generated INDEX view (`tools/meta_loop_index.sh` scanning the corpus); INDEX is derived, not primary |
| L4 (multi-head autonomous selection) | Multiple parallel heads; selection happens without human | Design a real cross-head state structure THEN, informed by L1-L3 evidence; defer until L4 is being built |
```

The L4 deferral matches the meta-loop spec's own Open Question — "does it need a branch graph from the beginning or is visited-path enough?" — answered: defer the decision; build evidence first.

**Test:** Novelty MEDIUM; Survival YES; Fertility HIGH; Actionability HIGH; Mech.indep. YES.

---

## L2-L3 INDEX View Sketch (optional, brief)

If at L2-L3 corpus-walk costs become noticeable, an INDEX view can be generated on demand:

```bash
# tools/meta_loop_index.sh — generated view, not primary state
grep -lE 'Selection \(when produced by meta-loop' devdocs/inquiries/*/_branch.md \
  | while read f; do
      inquiry=$(dirname "$f")
      echo "## $inquiry"
      sed -n '/## Selection/,/## /p' "$f" | head -10
    done > devdocs/_meta_loop_index.md
```

This is a SCRIPT, not an artifact. It runs when needed and writes to a generated file the user reads. The truth lives in each `_branch.md`.

---

## Reasoning Piece (single phrasing)

```
The meta-loop spec names `_meta_state.md` as a COULD action ("Design
`_meta_state.md` v1") — itself signaling the spec author wasn't sure
it was necessary at the buildable level. Examining the functions the
artifact would serve (path memory, durable cross-run memory, stateful
traversal evidence, anti-spinning, selection rationale, stop/continue,
plus branch/merge and calibration), the user's instinct is structurally
correct: anti-double-visitation alone doesn't justify a separate file,
and most other functions split between corpus-derivable and
recording-required-but-not-here.

**Why drop the artifact.** Path memory, durable cross-run memory,
stateful traversal evidence, stop/continue support, and double-visit
prevention all derive from walking existing artifacts (`finding.md`
frontmatter chains and `_branch.md` Relationships). Adding a parallel
file duplicates the corpus and creates divergence risk.

**Why record selection rationale per-use.** The selection rationale is
the one piece of new information the meta-loop produces. Its natural
home is the next inquiry's `_branch.md` — already being created at the
moment of selection, near point-of-decision. Recording it once in a
small "Selection" subsection covers the function with no new file
type and no synchronization burden.

**Why defer L4 cross-head state.** At L4 multi-head autonomous, branch-set
membership and merge points may need a real state structure. But the
exact shape depends on how multi-head actually behaves, which the project
doesn't know yet. Building `_meta_state.md` v1 now commits to a visited-path
shape that may not match L4's branch-graph needs (the meta-loop spec's
own Open Question flags this uncertainty). Better: build L1 with the
minimal `_branch.md` addition, accumulate evidence through L2-L3, then
design the L4 state structure with concrete requirements.

**Spec compatibility.** The meta-loop spec calls `_meta_state.md` "memory."
This is compatible with the corpus + per-inquiry rationale being the
memory; "memory" doesn't require a discrete file. The COULD-tag on the
artifact's design action already signaled this reading was open.

**Alternatives rejected.**
- *Build `_meta_state.md` v1 now:* premature commitment to a shape that may
  not survive L4 requirements; duplicates corpus.
- *Add SELECTED-FROM to existing Relationships section:* conflates meta-loop
  traversal records with inquiry-author content relationships; less clean.
- *Hidden cross-run journal per session:* loses durability across sessions;
  contradicts the spec's "durable cross-run memory" language.
```

**Test:** all 5 tests PASS.

---

## 7-Mechanism Application Trace

| Mechanism | Used in | What it produced |
|---|---|---|
| **Combination** | Verdict + Implementation pieces | Combining function-split with point-of-use recording |
| **Constraint Manipulation** | Implementation Variant B | "Add the constraint: keep meta-loop records structurally separate" → dedicated Selection subsection |
| **Inversion** | Reasoning ("why drop") | Flip from "build the artifact" to "the corpus IS the artifact" |
| **Lens Shifting** | Verdict piece | Re-evaluate the artifact under "what does L1 actually need?" lens |
| **Domain Transfer** | INDEX view sketch | Generated-cache pattern from build systems / search-index design |
| **Absence Recognition** | Roadmap piece | Recognize what L0/L1 currently lacks vs L4 — different needs |
| **Extrapolation** | Roadmap piece | Extend the L1 decision forward to L2-L3 (when does INDEX become valuable) and L4 (when does state become primary) |

**Coverage: 4G + 3F = 7/7. Full.**

---

## Convergence Check

Three-or-more mechanisms converging? **YES** — the convergence signal is **defer-build-until-evidence**:
- Inversion (corpus IS the artifact)
- Lens Shifting (what does L1 actually need?)
- Extrapolation (build L4's state when L4 requirements are concrete)

All three converge on: **don't pre-commit; the L1 decision is "drop", L4 is "design then."** High confidence.

---

## Assembly Check

**Recommended assembly:** Verdict piece + Implementation Variant B + Roadmap piece + Reasoning piece.

**Emergent value:** the assembly produces a verdict where:
- Verdict + 3-group split tells the user the answer.
- Implementation tells them exactly what to add to `_branch.md`.
- Roadmap tells them when to revisit (L2-3, L4 triggers).
- Reasoning gives them the structural argument to defend the choice.

**Emergent property:** the user can build L1 today with one small `_branch.md` addition; no design work for `_meta_state.md` needed. The deferral of L4 state design is principled (spec's own Open Question), not avoidant.

### Axis coverage check

Orthogonal axes:
1. **Build-now vs build-later:** roadmap covers both (L1 build now; L4 build later).
2. **Per-use vs centralized recording:** Implementation chose per-use; reasoning explains why.
3. **Inline vs separate section in `_branch.md`:** both variants generated; B chosen.
4. **Required vs optional artifacts:** L1 required (Selection subsection); L2-3 INDEX optional (script).

All axes covered.

---

## Self-application: did innovation produce the right surface for the user?

The user said "i would like to dive deeper on meta state thing. i am not sure it is necessary, maybe it is ... but lets see what is it for, what's the use case, and maybe something better alternative exists?"

The verdict + roadmap directly answer the three asks:
- **What is it for:** function-split (3 groups).
- **Use cases:** roadmap by level.
- **Better alternative:** Selection subsection on `_branch.md`; INDEX view at L2-3; defer L4 state.

User's instinct ("maybe not necessary") is validated with structural reasoning, not just deferred-to.

---

## Mechanism Coverage Telemetry

- Generators applied: **4 / 4** (Combination, Absence Recognition, Domain Transfer, Extrapolation)
- Framers applied: **3 / 3** (Lens Shifting, Constraint Manipulation, Inversion)
- Convergence: **YES** (3 mechanisms converge on defer-build-until-evidence)
- Survivors tested: **4 recommended pieces** all tested; all pass
- Failure modes observed: NONE

**Overall: PROCEED**

---

## Anti-Bloat Self-Check

The OUTPUT (assembly recommendation) for the finding's body:
- Verdict + 3-group table: ~12 lines.
- Implementation Variant B + example: ~25 lines.
- Roadmap table: ~7 lines.
- INDEX view sketch (optional brief): ~10 lines.
- Reasoning: ~30 lines.

**Total verdict size estimate:** ~85-100 lines for the finding's content body. Well within anti-bloat.

---

## Honest Value Tag

**MEDIUM.** Innovation generated concrete drop-in content for all 4 pieces, with the Implementation piece (Variant B) as the load-bearing deliverable. The choice between Variant A (inline) and Variant B (separate section) is structurally meaningful — meta-loop traversal records ARE different from inquiry-author content relationships, and the verdict acknowledges that.

What innovation did NOT need to do:
- Re-derive the verdict (sensemaking did).
- Re-derive the function-split (sensemaking did).
- Build the INDEX tool (out of scope; sketch suffices).

Innovation's load-bearing contribution: the **`_branch.md` Selection subsection shape** + the **L4 state-design deferral with the spec's-own-Open-Question backing**. Critique should test whether Variant B is actually necessary or if Variant A would suffice, and whether the L4 deferral has any near-term cost.
