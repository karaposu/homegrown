# Innovation: protocol_human_analog_accuracy

## User Input
devdocs/inquiries/protocol_human_analog_accuracy/_branch.md

Apply 7 mechanisms × 3 variations each. Develop concrete designs for the 4 pieces (P2 what_is_protocol.md revision, P3 substrate-evolution open question disposition, P4 design implications, P5 cross-doc updates). Skip P1 (binary user decision). Apply assembly check.

---

## Seed

Four partly-specified work pieces from decomposition. Goal: produce concrete design candidates per piece — actual proposed wording for revisions, actual disposition options, specific cross-doc edits — so critique can evaluate fitness.

The work is mostly doc-maintenance with one conceptual decision (P4 design implications). Mechanisms will mostly produce design-options, not wild novelty.

---

## Phase 2 — Generate (7 mechanisms × 3 variations)

### 1. Lens Shifting (framer)

| Variation | Lens | Output |
|---|---|---|
| **Generic** | "User reads the doc cold in 6 months" | Forces revision wording to be self-contained, not relying on conversation history. → P2 wording must explain the two-level distinction in-place, not assume the reader has been through this inquiry. |
| **Focused** | "Reader is evaluating the project's substrate-honest stance philosophically" | The two-level structure should be visible to a philosophy-of-mind reader, not just a project-internal reader. → P2's revision should ground the function/implementation split with a recognized intellectual anchor (Marr's three levels, or computational vs procedural). |
| **Controversial** | "The verdict gets reversed in 18 months because substrate evolves" | Doc should age gracefully — not lock in claims future substrate would falsify. → P3 must keep the substrate-evolution question alive (Open Question) rather than closing it; P4 should not commit to "no design changes ever" — only "no design changes for current substrate." |

### 2. Combination (generator)

| Variation | Combine | Output |
|---|---|---|
| **Generic** | Two-level verdict + what_is_protocol.md's existing structure | The current doc already has a "fuzzy parts" section that admits uncertainty. New section can fit naturally as a sibling: "Function vs Implementation: A Two-Level Distinction." Doesn't require restructure. → Supports P2.B (section addition) over P2.C (full rewrite). |
| **Focused** | Two-level verdict + Distributed Cognition / Extended Mind | Frame the implementation level as "distributed cognition deliberately implemented" — externalization isn't apologetic ("we're forced to externalize"); it's legitimate cognition under philosophical positions that defend the cognitive status of external scaffolding. → Tone shift in revision: from "external because substrate forces it" to "external as a cognitively legitimate implementation, made necessary by the substrate." |
| **Controversial** | what_is_protocol.md + loop_design_1.md design dimensions | Revise BOTH together to surface the function/implementation split as a recurring lens across architecture docs. The 8 design dimensions in loop_design_1 each have a function-level and implementation-level reading. Larger scope; potentially valuable; out of scope for current decomposition. → Surfaces P5 contrarian: update loop_design_1 too. |

### 3. Inversion (framer)

| Variation | Invert | Output |
|---|---|---|
| **Generic (component)** | "External is the cleanest analog" → "External is the cleanest IMPLEMENTATION analog" | Just qualify the prior claim. → P2.A (targeted line edit) — minimum-effort path. |
| **Focused (system)** | "Protocols are external" → "Protocols are between-operations machinery; implementation happens to be external on this substrate" | The thing IS the function; implementation is contingent. This is the heart of the two-level frame. → P2.B's new section should lead with this inversion. |
| **Controversial (root)** | "LLM substrate forces externalization" → "LLM substrate forces externalization FOR CROSS-CALL CONTINUITY; in-call internal cognition exists and protocols can have in-call analogs too" | Surfaces that metacognitive inner speech (Category 2) IS partially substrate-native. The doc should acknowledge this nuance — not all protocol-relevant cognition is forced external; only cross-call continuity is. |

### 4. Constraint Manipulation (framer)

| Variation | Modify | Output |
|---|---|---|
| **Generic (add)** | Add: "every doc edit must preserve the existing prose's fuzzy/honest tone" | The current what_is_protocol.md is deliberately fuzzy about uncertainty. Revisions must match — no over-confident claims about the verdict being settled. The new section should also flag what's still uncertain. |
| **Focused (add)** | Add: "every revision must include the substrate-honest reasoning, not just the verdict" | Readers should see WHY the implementation is external (substrate constraint), not just THAT it is. → P2.B's new section needs the "each inference is clean-slate" explanation as part of the implementation-level description. |
| **Controversial (remove)** | Drop: "the doc must be a single document" | Could split into `what_is_protocol_function.md` + `what_is_protocol_implementation.md` with index. Probably overkill; surfaces the option for the contrarian configuration. |

### 5. Absence Recognition (generator)

| Variation | What's missing | Output |
|---|---|---|
| **Generic (current-design gap)** | The current doc doesn't explicitly distinguish functional vs implementation analogs | That's the audit's central finding; the gap must be filled. → P2's revision is the obvious response. |
| **Focused (small gap)** | The "Bottom line" section at the end of the current what_is_protocol.md restates the misleading claim | Section needs explicit revision, not just earlier-section additions. → P2.A and P2.B both need to touch this section. |
| **Controversial (designed-from-scratch)** | If the doc were rewritten today with the two-level frame, structure would be: Function \| Implementation \| The Bridge \| Open Questions | Suggests P2.C (full rewrite) is structurally cleaner than incremental edit. Trade-off: rewrite costs more; incremental preserves prior work. Surfaces P2.C as defensible if user values architectural cleanliness. |

### 6. Domain Transfer (generator)

| Variation | Source domain | Output |
|---|---|---|
| **Generic (computer architecture)** | ISA (instruction set architecture, abstract interface) vs microarchitecture (physical implementation) | Strong analogy: protocols-as-function = ISA-level (stable across substrates); protocols-as-implementation = microarchitecture-level (varies with substrate). This terminology is useful in P2's revision wording. |
| **Focused (Marr's three levels of cognitive analysis)** | David Marr (1982): computational level (what task) / algorithmic level (how, abstract) / implementation level (physical realization) | Direct map: protocols-as-computational-level (between-operations integration); protocols-as-implementation-level (filesystem). Solid intellectual anchor for the doc revision. → P2.B should reference Marr explicitly; one sentence is enough. |
| **Controversial (legal: substantive vs procedural law)** | Substantive law (what's right) vs procedural law (how proceedings happen) parallels disciplines vs protocols. But also: same substantive law, different procedural implementations across jurisdictions | Suggests the function/implementation split is RECURRING in well-developed practice systems — not a project-local artifact. Strengthens the two-level frame's general validity. |

### 7. Extrapolation (generator)

| Variation | Extrapolate | Output |
|---|---|---|
| **Generic (project growth)** | In 1 year: more disciplines and protocols built | The two-level frame either becomes load-bearing (substrate stays same) or gets revisited (substrate evolves). Either way, the frame is robust today. → Supports keeping the two-level frame as durable doc content, not just a one-time fix. |
| **Focused (substrate evolution timing)** | If a model with persistent state ships, what does the doc say? | Today's revision should anticipate this without committing. → P3.A (Open Question with revival trigger) handles this naturally; spawns no follow-up inquiry until the trigger fires. |
| **Controversial (5-year future)** | If biology-style continuous-state substrates ship, externalized protocols become legacy machinery to migrate from | The doc should acknowledge migration as theoretical possibility but not commit. → Reinforces P3.A; cautions against P4.C (which would commit to migration sketches now). |

---

## Concrete Designs Per Piece

### P2 — Revise `thinking_disciplines/protocols/what_is_protocol.md`

#### P2.A — Targeted line edit (MINIMUM)

**Edits:**

1. In the "Bottom line (with the fuzziness preserved)" section at the end of the doc, replace the current bottom-line summary with:

   > **Protocols are most fundamentally analogous to biology's autonomic between-operations machinery — sleep / consolidation / DMN / executive scheduling. That's the FUNCTIONAL analog: what protocols accomplish in cognition.** On the current LLM substrate, they're IMPLEMENTED as external scaffolding (filesystem, files, `_state.md`) because the substrate has "each inference is clean-slate" as a hard architectural property — there's no native between-operations existence to use. Both analogs are accurate at different levels: the functional level (what cognitive role the protocols play) and the implementation level (how they're realized given the substrate).

2. In the "The short version (with caveats)" section near the top, append one paragraph:

   > **Note on level.** When asking "what protocols ARE most fundamentally," there are two answers at two levels. The cognitive-role-level answer is biology's autonomic between-operations machinery (sleep / consolidation / DMN / executive scheduling). The implementation-level answer is external scaffolding (notebooks-style, instantiated as the filesystem on this project). Both are accurate at their level. Earlier framings of "external cognition is the cleanest analog" were implementation-honest but functionally misleading — the cleanest functional analog is internal autonomic machinery; external is just how it's implemented when the substrate forces it.

**Net edits:** ~10-15 lines changed.
**Pro:** Minimum effort. Corrects the misleading claim. Preserves the rest of the doc.
**Con:** The two-level frame appears twice (top and bottom) but isn't given its own explanatory section. Reader has to assemble the picture from scattered mentions.

#### P2.B — Section addition (RECOMMENDED)

**Edits:** All of P2.A's edits PLUS a new section inserted between "The mission, in terms of the end goal" and "What's still fuzzy":

```markdown
## Function vs implementation: a two-level distinction

When asking "what protocols ARE most fundamentally," it helps to separate two levels:

- **The functional level** — what cognitive role do protocols play? What do they accomplish in the system?
- **The implementation level** — how are they realized on the available substrate? What machinery actually delivers the function?

These admit different answers on the same evidence.

### At the functional level: autonomic between-operations machinery

The cleanest analog is biology's autonomic between-operations machinery — **sleep / memory consolidation / default mode network / executive scheduling combined**. All of these are biology's way of handling routing, sequencing, persistence, and integration BETWEEN cognitive operations rather than within them. Sleep replays the day and consolidates traces. The default mode network does maintenance work when focused cognition is off. Executive function sequences operations and inhibits distractors. Hippocampal indexing binds disparate memories so they can be retrieved together later.

This is what protocols accomplish, cognitively. They are NOT what disciplines do (transform understanding within an operation); they're what handles the between-operations work that lets a sequence of operations cohere.

### At the implementation level: external scaffolding

On the current LLM substrate, protocols are IMPLEMENTED as external scaffolding — `_state.md` files, folder-as-thinking-structure, command sequencing, the filesystem itself. The reason is a hard architectural fact about the substrate: **"each inference is clean-slate"** (`enes/thinking_space_dynamics.md`). The LLM substrate has no continuous internal state between calls. There is no native between-operations existence; each inference starts fresh. To handle the between-operations function, the system must externalize.

The internal/external distinction on this substrate is also a time-scale distinction: internal cognition happens *within* an inference (the LLM's context window IS internal cognitive space); external scaffolding handles anything *between* inferences. Protocols handle the between-inference scale, which the substrate cannot handle natively.

### Why both are accurate

This is structurally similar to **Marr's three levels of cognitive analysis** (computational / algorithmic / implementation): the same cognitive function can be realized through different implementations on different substrates. Protocols-as-function (between-operations integration) is stable across substrates; protocols-as-implementation (filesystem) is contingent on the LLM substrate's clean-slate-per-inference property.

The user-facing implication: when philosophical worry shows up about whether externalization compromises the consciousness goal, the answer is that the project's stated consciousness criterion is **functional capability, not biological-architecture-replication** (`enes/desc.md`: "Whether this constitutes 'consciousness' in any philosophical sense remains undefined — the test is capability, not phenomenology"). Functional consciousness can be reached through externalized + cognitive-layer-voluntary combinations even though it doesn't replicate biology's autonomic internal mechanisms. This is also defended philosophically by the **Distributed Cognition / Extended Mind** position (Hutchins, Clark & Chalmers), which holds that environment-side scaffolding is genuine cognition when reliably coupled, not deficit.

### What this DOESN'T settle

If the underlying substrate evolves to support continuous internal state — a model with persistent activation between calls, or a different architecture closer to active inference — some protocols may migrate from external implementation to substrate-native. The function (between-operations integration) remains; the implementation may shift. This is not predicted; it's acknowledged as conditional on substrate evolution that the project doesn't control.
```

**Net edits:** ~50 lines added (the new section) + ~15 lines from P2.A.
**Pro:** Surfaces the two-level frame as a coherent conceptual unit, in its own section. Grounds it with Marr's three levels and Distributed Cognition. Naturally hosts the substrate-evolution caveat. Tone matches the existing doc (fuzziness preserved).
**Con:** Doc grows by ~50 lines; reader must absorb a longer doc.

#### P2.C — Full rewrite (CONTRARIAN)

Restructure the doc from scratch with the two-level frame as the spine. New top-level sections:
1. What protocols are (function) — the cognitive role
2. What protocols are (implementation) — the substrate realization
3. The bridge between levels — why both are accurate; Marr's three levels
4. The mission, in terms of the end-goal
5. What's still fuzzy
6. Bottom line (two-level)

**Net edits:** Rewrite of ~150 lines.
**Pro:** Architecturally cleanest. The two-level frame becomes the doc's organizing principle, not an addition.
**Con:** Throws away the existing doc structure (which the user just approved this conversation by writing it); high cost; the existing doc is only days old.

---

### P3 — Substrate-evolution open question disposition

#### P3.A — Open Question in finding's Research Frontiers (RECOMMENDED)

**Decision:** Add to this finding's "Open Questions / Research Frontiers" subsection:

```markdown
**Substrate-evolution and protocol migration.** If the underlying substrate evolves to support continuous internal state — for example, a model with persistent activation between calls, or an architecture closer to active inference (Friston) — some protocols may migrate from external implementation (filesystem-as-state) to substrate-native (continuous internal state). The function each protocol performs (between-operations integration) remains; the implementation may shift. This is not predicted, only acknowledged as conditional. **Revival trigger:** if a substrate with persistent internal state ships AND is adopted by the project. Until either condition is observed, no design action is required.
```

**Pro:** Honest about conditional uncertainty; doesn't overcommit; doesn't spawn speculative work.
**Con:** None significant.

#### P3.B — Spawn separate follow-up inquiry (FOCUSED)

**Decision:** Create a new inquiry `substrate_evolution_protocol_migration` — what would migration look like if substrate supports continuous state? When should the project consider switching? This is its own ESDIC pass.

**Pro:** Thorough.
**Con:** Speculative work on unpredictable substrate evolution. The inquiry would mostly produce hypothetical migration sketches that may not match actual future substrate.

#### P3.C — De-prioritize without tracking (CONTRARIAN)

**Decision:** Don't track the open question. Substrate evolution is unpredictable; tracking adds noise; revisit if/when actually relevant.

**Pro:** Cleanest finding.
**Con:** Loses the named possibility; future readers don't know it was considered.

---

### P4 — Design implications for protocols

#### P4.A — No design changes; verdict is conceptual-only (RECOMMENDED)

**Decision:** The two-level frame doesn't change the prior `protocols_relevance_check` Configuration β recommendation. Status table updates, cross-references, autonomy-ladder mapping, VERSION-deferral all stand. Build sequencing for the 6 missing protocols stands.

**Reasoning:** The verdict adds CONCEPTUAL clarity to WHY externalization is durable on the current substrate. It doesn't change WHAT to do. Configuration β was substrate-agnostic in its recommendations (status corrections, doc enrichment, cross-references); it works equally well under either single-level framing or two-level framing.

**Pro:** Truthful. Doesn't manufacture design changes that aren't there.
**Con:** None. (The lack of design changes IS the answer to P4.)

#### P4.B — Light addition: substrate-honest one-liner in autonomy-ladder section (FOCUSED)

**Decision:** The autonomy-ladder mapping section that `protocols_relevance_check` Configuration β recommended adding to `protocols/desc.md` should include a one-liner about substrate-forced externalization. Specifically, after the introduction sentence of that section:

> "The 6 missing protocols are not arbitrary gaps. Each maps to a specific capability that the project's stated long-term goal commits to. **They are externalized on the current LLM substrate because the substrate has no native between-operations machinery (`/intuit` Phase A in-call cognition aside); the function each protocol accomplishes corresponds to what biology does autonomically internally.** A future where..."

Add ~3 lines to one section of one Configuration β edit; doesn't change anything else.

**Pro:** Tight integration; surfaces the two-level point at the place where readers will be considering protocol mappings.
**Con:** Slightly increases the size of the Configuration β edit (which the user may not have applied yet). Coordination needed.

#### P4.C — Conditional design changes (CONTRARIAN)

**Decision:** Each missing protocol gets an additional field: "Migration sketch: if substrate supports X, this protocol could move from external file to in-substrate state by Y."

**Pro:** Future-proofs the design. Forces explicit thinking about migration.
**Con:** Speculative; commits to unknowable substrate properties. Premature. Better to defer migration sketches until substrate evolution is concrete.

---

### P5 — Cross-doc updates

Per-doc options:

#### P5.proto — `protocols/desc.md`

- **P5.proto.A (RECOMMENDED):** Add a small footer pointing to `what_is_protocol.md` as "see for the two-level functional/implementation analog discussion." ~2 lines.
- **P5.proto.B:** Add the substrate-honest one-liner directly in `protocols/desc.md`'s existing categorization section. Couples P5.proto to P4.B; only do if P4.B is also chosen.
- **P5.proto.C:** Do nothing — `what_is_protocol.md` is the conceptual companion; `protocols/desc.md` is the formal spec; cross-reference unnecessary.

**Recommendation: P5.proto.A.** Cheap; preserves navigation; keeps formal spec clean.

#### P5.loop — `loop_design_1.md`

- **P5.loop.A:** Add a one-line note that the design dimensions all manifest as substrate-foreign external state on current LLM substrate. ~2 lines.
- **P5.loop.B (RECOMMENDED):** Do nothing. `loop_design_1.md` is runner-first; substrate considerations are a separate concern. The function/implementation distinction lives properly in `what_is_protocol.md`, not in the runner taxonomy.

**Recommendation: P5.loop.B.** No update needed.

#### P5.enes — `enes/desc.md`

- **P5.enes.A (RECOMMENDED):** Do not touch. Project-goal doc has been carefully stabilized through 5 prior inquiries; reference is unnecessary; destabilization risk is non-zero.
- **P5.enes.B:** Add a small reference in the substrate-honest discussion section pointing to `protocols/what_is_protocol.md`.

**Recommendation: P5.enes.A.** No update needed.

---

## Phase 3 — Test Survivors

| Design | Novelty | Scrutiny survival | Fertility | Actionability | Mechanism independence |
|---|---|---|---|---|---|
| **P2.A (line edit)** | LOW | STRONG — directly fixes misleading claim | LOW | HIGH (~10-15 lines) | Inversion-generic + Lens-generic |
| **P2.B (section addition)** | MEDIUM | STRONG — explicit two-level frame; grounded in Marr | HIGH (the new section becomes referencable) | MEDIUM (~50 lines) | Combination-generic + Inversion-focused + Domain-focused (Marr) + Constraint-focused |
| **P2.C (full rewrite)** | HIGH | MEDIUM — throws away just-written doc | MEDIUM | LOW (~150 lines, full restructure) | Absence-controversial |
| **P3.A (Open Question with trigger)** | LOW | STRONG | LOW | HIGH (~5 lines in finding) | Lens-controversial + Extrapolation-focused |
| **P3.B (separate inquiry)** | MEDIUM | WEAK — speculative work on unpredictable substrate | LOW | LOW (full ESDIC pass) | Extrapolation-controversial (rejected) |
| **P3.C (de-prioritize)** | LOW | WEAK — loses named possibility | LOW | HIGHEST (no work) | Constraint-controversial (rejected) |
| **P4.A (no design changes)** | LOW | STRONGEST — truthful; verdict is conceptual | LOW | HIGHEST (no work) | All mechanisms align — verdict adds clarity, not action |
| **P4.B (one-liner addition)** | LOW | STRONG | LOW | HIGH (~3 lines tagged onto Configuration β) | Combination-focused (substrate + autonomy-ladder section) |
| **P4.C (migration sketches)** | MEDIUM | WEAK — speculative; commits to unknowable | LOW | LOW (extensive design work) | Extrapolation-generic (rejected) |
| **P5.proto.A (footer pointer)** | LOW | STRONG | LOW | HIGH (~2 lines) | Default cross-reference |
| **P5.loop.B (do nothing)** | LOW | STRONG — runner-first scope intact | LOW | HIGHEST | Constraint-generic (preserve scope) |
| **P5.enes.A (do nothing)** | LOW | STRONG — protect stable doc | LOW | HIGHEST | Constraint-generic (protect stability) |

### Path eliminations

- **P2.C (full rewrite)** — discards just-written doc; high cost; the existing structure can absorb the addition cleanly via P2.B.
- **P3.B (separate inquiry)** — speculative work on unpredictable substrate evolution; unlikely to produce stable output.
- **P3.C (de-prioritize)** — loses the named possibility; future readers benefit from knowing the question was considered.
- **P4.C (migration sketches)** — commits to unknowable substrate properties; premature.
- **P5.proto.B** — only viable if paired with P4.B; if P4.A is chosen (no design changes), P5.proto.B isn't needed.
- **P5.loop.A** — adds substrate concern to a doc that's properly runner-first; coupling concerns into wrong abstraction.
- **P5.enes.B** — touches stable project-goal doc for marginal benefit.

### Survivors

- For P2: **P2.A (minimum) and P2.B (recommended fuller)**.
- For P3: **P3.A (Open Question with revival trigger)**.
- For P4: **P4.A (no design changes — recommended) and P4.B (one-liner addition — fallback if user wants to integrate with Configuration β)**.
- For P5: **P5.proto.A (footer pointer in protocols/desc.md); P5.loop.B (do nothing); P5.enes.A (do nothing)**.

---

## Phase 3.5 — Assembly Check

Survivors form natural configurations:

### Configuration α — MINIMUM (P2.A + P3.A + P4.A + P5 all-do-nothing)

- Targeted line edit to `what_is_protocol.md`.
- Open Question in finding with revival trigger.
- No design changes.
- No cross-doc updates.

**Net effort:** ~15 minutes.
**Net change:** Doc no longer misleading; substrate-evolution acknowledged as open; no architectural ripples.
**Use case:** User wants minimum-time intervention; trusts that the two-level frame doesn't need broader propagation.

### Configuration β — RECOMMENDED (P2.B + P3.A + P4.A + P5.proto.A only)

- Section addition to `what_is_protocol.md` (the new "Function vs implementation: a two-level distinction" section + bottom-line update + short-version note).
- Open Question in finding with revival trigger.
- No design changes (verdict is conceptual-only).
- Footer pointer in `protocols/desc.md`. No updates to loop_design_1 or enes/desc.md.

**Net effort:** ~30-45 minutes.
**Net change:** Two-level frame becomes a coherent doc section, grounded in Marr; substrate-evolution acknowledged; navigation between protocols/desc.md and what_is_protocol.md established. Configuration β from `protocols_relevance_check` is unchanged.
**Use case:** User wants the two-level frame to land properly without overcommitting to design changes or cross-doc rewrites.

### Configuration γ — INTEGRATED (P2.B + P3.A + P4.B + P5.proto.A + P5.proto.B coordination)

- All of β PLUS the substrate-honest one-liner in `protocols/desc.md`'s autonomy-ladder mapping section (which means coordinating with the pending Configuration β edit from `protocols_relevance_check`).

**Net effort:** ~45-60 minutes (more if Configuration β from `protocols_relevance_check` hasn't been applied yet — that adds the prior work).
**Net change:** Tighter integration between the two-level frame and the protocols-relevance work.
**Use case:** User wants tight integration; willing to coordinate with the still-pending Configuration β work.

### Configuration δ — CONTRARIAN (rejected)

P2.C (full rewrite) + P3.B (separate inquiry) + P4.C (migration sketches) + P5 all-actions. Rejected — multiple anchors are killed individually (full rewrite is wasteful; speculative inquiry is premature; migration sketches commit to unknowable).

### Recommended default: **Configuration β**

Reasoning:
- Highest value-per-effort. P2.B's section addition surfaces the two-level frame as a coherent doc section; this is the audit's distilled value.
- P3.A honors the substrate-evolution uncertainty without overcommitting.
- P4.A is the truthful answer (no design changes) — manufacturing changes that aren't there is a defect.
- P5.proto.A is the minimum cross-doc update that preserves navigation.

Configuration α is the acceptable fallback if user wants minimum effort. Configuration γ is the option for integration-minded users who want substrate-honesty visible in `protocols/desc.md` directly.

---

## Phase 4 — Survivors for Critique

### Configuration choices to evaluate

- **A.** α (minimum) — P2.A + P3.A + P4.A + P5 all-do-nothing
- **B.** β (recommended) — P2.B + P3.A + P4.A + P5.proto.A
- **C.** γ (integrated) — P2.B + P3.A + P4.B + P5.proto.A + P5.proto.B

### Per-piece options to evaluate

- P2: A (line edit) vs B (section addition)
- P3: A (Open Question with trigger) — only survivor
- P4: A (no design changes) vs B (one-liner addition)
- P5: proto.A (footer pointer) vs proto.B (substrate one-liner if P4.B); loop.B and enes.A both "do nothing" recommended

### Recommended default for critique to challenge

**Configuration β** = P2.B + P3.A + P4.A + P5.proto.A.

---

## Mechanism Coverage (Telemetry)

- **Generators applied:** 4 / 4 (Combination, Absence Recognition, Domain Transfer, Extrapolation)
- **Framers applied:** 3 / 3 (Lens Shifting, Constraint Manipulation, Inversion)
- **Convergence:** YES — multiple mechanisms converge on:
  - Two-level frame as the right shape (Combination-generic + Inversion-focused + Domain-focused Marr + Domain-controversial law)
  - Section addition (P2.B) as the right scope (Combination-generic supports + Absence-focused supports)
  - Open Question with revival trigger (P3.A) as the right disposition (Lens-controversial + Extrapolation-focused)
- **Survivors tested:** All viable paths tested for novelty, scrutiny survival, fertility, actionability, mechanism independence.
- **Failure modes observed:**
  - Premature evaluation? No.
  - Single-mechanism trap? No.
  - Early frame lock? No — explored α, β, γ, δ; landed on β with reasoning.
  - Innovation without grounding? No — every design has concrete proposed wording.
  - Mechanism exhaustion? No.
  - Survival bias? Tested most uncomfortable paths (P2.C full rewrite, P3.B separate inquiry, P4.C migration sketches). All assessed; rejected for present moment with explicit reasoning.
- **Overall:** PROCEED — coverage strong, convergence on β, all survivors tested. Critique can adversarially evaluate.
