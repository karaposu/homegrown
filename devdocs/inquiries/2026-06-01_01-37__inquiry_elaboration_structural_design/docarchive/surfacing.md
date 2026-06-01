## User Input

`devdocs/inquiries/2026-06-01_01-37__inquiry_elaboration_structural_design/_branch.md` (controlling prior: the 01-17 scope finding)

(Purpose: surface items bearing on IE's **structural** design — spec section set, output artifact schema, where the settled scope lands, and the branch.md migration mapping.)

---

# Surfacing Artifact — Inquiry Elaboration Structural Design

**Mode:** artifact case · **Entry point:** signal-first · **Territory:** explicit-bounded · **Stance:** inclusion-under-uncertainty.

## Traversal Trace

Identifiers only (no item content). Relevance ∈ {core/sub/side/umbrella}; recency = folder-date where derivable, else `no mtime captured`.

### Region A — The controlling scope + meaning priors (what the structure must carry)

| # | Item | Relevance | Conf | Note | Recency |
|---|---|---|---|---|---|
| 1 | `2026-06-01_01-17__inquiry_elaboration_scope_and_coverage/finding.md` | **core** | HIGH | The payload the structure must encode: ACHIEVE / 3-phase COVER / 7-border NOT-list / object-mode decision rule / upper bound / migration principle / R1–R4 | 2026-06-01 |
| 2 | `2026-05-31_22-30__inquiry_elaboration_discipline_or_not/finding.md` | **core** | HIGH | 4-phase arc; spawn=runner; **tailored-phases residual** = the structural make-or-break (Components must be tailored, not wrappers) | 2026-05-31 |
| 3 | `2026-05-31_20-08…` + `…13-31…/finding.md` | **side** | MED | job→operation mapping; position≠identity (context for naming Components without re-importing neighbors) | 2026-05-31 |

### Region B — The spec-shape template (the section convention)

| # | Item | Relevance | Conf | Note | Recency |
|---|---|---|---|---|---|
| 4 | `docs/canon/thinking_disciplines/anatomy_of_disciplines.md` | **core** | HIGH | **Spec anatomy** = Definition / Components / Process Model / Failure Modes / Coverage. **Output anatomy** = Transform / Progression / Telemetry / Frontier. The skeleton IE's spec instantiates | no mtime captured |
| 5 | `docs/canon/thinking_disciplines/anatomy/discipline_taxonomy.md` | **sub** | MED | IE category = Upstream/Core-adjacent; primitive-profile table location (Components should declare a primitive profile) | no mtime captured |

### Region C — Sibling specs as concrete structural exemplars (match this family)

| # | Item | Relevance | Conf | Note | Recency |
|---|---|---|---|---|---|
| 6 | `cognitive_harness/surfacing/references/surfacing.md` | **core** | HIGH | Reference shape: §1 Identity (verb-meaning + NOT-list + vocabulary + taxonomy) · §2 Components (+ primitive composition) · §3 Process Model · §4 Quality (LAYER1/LAYER2 failure modes + asymmetric-failure + coverage + self-assessment) · §5 Output (dual product) · Telemetry. **The closest template for IE.** | no mtime captured |
| 7 | `cognitive_harness/routelister/references/routelister.md` | **core** | HIGH | Same 5-section shape; **self-containment** as an explicit §1.4 property; NOT-list grounded "each exclusion in an intrinsic feature" — model for IE's NOT-list section | no mtime captured |
| 8 | `cognitive_harness/routeman/references/routeman.md` | **core** | HIGH | Same shape; per-route **schema table** (groups of fields) — model for IE's *output schema*; Read-Policy vocabulary — model for IE's input contract | no mtime captured |
| 9 | `cognitive_harness/sense-making/references/sensemaking.md` | **sub** | HIGH | IE's comprehend-phase is a tailored Comprehending; its SV-style progression + "understanding stays in expansion mode" line; substantive (not thin) output exemplar | no mtime captured |
| 10 | `cognitive_harness/decompose/references/decompose.md` | **sub** | MED | IE's perceive-structure is a tailored, shallower cousin; the border R2 must keep visible in Components | no mtime captured |

### Region D — The branch.md machinery (the migration target)

| # | Item | Relevance | Conf | Note | Recency |
|---|---|---|---|---|---|
| 11 | `cognitive_harness/MVLw/SKILL.md` Step 3 template (5 meta-aspects · Goal · Source Input · Scope Check · Layer Commitment · Synthesis Trigger) | **core** | HIGH | Each element gets a migration verdict: into IE (comprehension+fidelity) vs stays runner (orchestration). This IS observation-target 4. | no mtime captured |
| 12 | branch.md Step 3.5 (transcription audit) + Step 3.6 (reference-authority audit) | **core** | HIGH | → IE verify-phase axes 2 + 3 (R4: source-input lands in the faithfulness axis) | no mtime captured |
| 13 | `cognitive_harness/protocols/branch_inquiry.md` | **sub** | MED | the runner/spawn boundary — what the output FEEDS but IE does not do; structural "process hook" to name (not design) | no mtime captured |
| 14 | `cognitive_harness/protocols/conclude.md` | **side** | LOW | downstream consumer of inquiry artifacts; shows IE output is an input, not a finding | no mtime captured |

### Region E — Constraints on the shape

| # | Item | Relevance | Conf | Note | Recency |
|---|---|---|---|---|---|
| 15 | self-containment (project memory `feedback_disciplines_self_contained`) | **sub** | HIGH | IE spec MUST have no outbound pointers to design-history/theory; the structure must be standalone | no mtime captured |
| 16 | SKILL.md wrapper pattern (Step-0 mandatory pre-read → references/<name>.md) | **sub** | MED | IE ships as SKILL.md (operational wrapper) + references/<name>.md (the framework) — two-file structure | no mtime captured |

## State Summary

**Territory echo:** the scope/meaning priors (what to encode) + the anatomy template (the skeleton) + sibling specs (the concrete family shape) + the branch.md machinery (the migration target) + shape-constraints (self-containment, two-file packaging).

**Purpose echo:** surface what bears on IE's spec-shape + output-schema + scope-placement + migration.

**Coverage map:**
- Region A — confirmed (the payload is fully in hand from the prior finding). core.
- Region B — confirmed (the section skeleton). core.
- Region C — confirmed at section-resolution; surfacing.md (#6) is the closest exemplar, routeman (#8) the best output-schema exemplar, routelister (#7) the best NOT-list+self-containment exemplar. core.
- Region D — confirmed at element-resolution (each branch.md element enumerated for migration). core.
- Region E — scanned. sub.

**Confirmed-absent (out of territory for THIS structural run):**
- Process layer — pipeline placement, spawn mechanics, runtime gates, exact line-by-line runner rewrite (next layer).
- Meaning layer — discipline-hood / scope (settled; re-litigation out).

**Concept-names list** (name · type · provenance · gloss):
- *spec anatomy* · structural-reference · #4 · Definition/Components/Process/Failure-modes/Coverage — the 5 spec sections.
- *output anatomy* · structural-reference · #4 · Transform/Progression/Telemetry/Frontier — the output's 4 layers.
- *5-section sibling shape* · structural-reference · #6/#7/#8 · §1 Identity · §2 Components(+primitives) · §3 Process · §4 Quality(LAYER1/2) · §5 Output(+telemetry).
- *elaborated-inquiry schema* · coined-term · #1/#8 · IE's output = framing-content + request-structure verdict + fidelity verdict (needs a field-table like routeman's per-route schema).
- *substantive-vs-thin output* · coined-term · #6/#9 · open structural choice: is IE's output a thin artifact (like surfacing) or a substantive transform (like sensemaking's SV6)? Lean substantive (the framing IS the payload).
- *LAYER-2 identity failures for IE* · structural-reference · #6/#7 · the scope-creep modes become named failure modes: problem-modeling→sense-making; wrapper-fusion→mini-runner; acting→runner.
- *migration table* · coined-term · #11/#12 · per-branch.md-element verdict (into IE vs stays runner).
- *two-file packaging* · structural-reference · #16 · SKILL.md wrapper + references/<name>.md framework.
- *primitive profile* · structural-reference · #5 · Components should declare load-bearing primitives (comprehend: Intuition-similarity/Context-framing/Working-Memory; perceive-structure: Salience/Attention-pointer; verify: Evaluation/Inhibition).

**Recency distribution:** Region A = {newest 2026-06-01, oldest 2026-05-31}; rest = no mtime captured. Descriptive only.

**Frontier flags (handed downstream):**
- G1 — **Output shape choice:** thin artifact vs substantive transform vs both (workspace + thin handoff). Sensemaking decision.
- G2 — **Where do the 3 verify axes live** — one Component "verify (3 axes)" vs three sub-components? (relates R3 — keep it a single fixed-criteria gate, not a landscape.)
- G3 — **Migration table exactness** (F4): per-element verdict for all 6 branch.md Step-3 elements + 3.5 + 3.6.
- G4 — **How Components encode the upper bound** so the spec itself prevents wrapper-fusion (the tailored-phases residual made structural).
- G5 — **Does IE need a Progression** (like SV1→SV6)? i.e., versioned framing drafts, or single-pass? (output-anatomy "progression" layer.)

**Workspace-populated status:** `{populated: true, populated-at: 2026-06-01_01-37, extent: Regions A–D full, E scanned}`.

## Telemetry
- Cycles: 1. Items: 16 (core 8 · sub 6 · side 2). Boundary-discovery: not fired.
- items_with_mtime: 3 · items_without_mtime: 13.
- Failure modes checked: Missed-relevance (pulled the output-schema exemplar #8 + the self-containment exemplar #7); Over-coverage (Region E held at sub); Interpretive-overstep (avoided — relational structure deferred to sensemaking).
- Self-assessment: **PROCEED** — the section template (B), the family shape (C), the payload (A), and the migration target (D) are all in hand; sensemaking should resolve G1 (output shape) first.
