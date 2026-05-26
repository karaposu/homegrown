# Innovation: Explore vs Navigation — Why the Overlap?

## User Input

Source: `/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-11_13-30__explore_vs_navigation_overlap/_branch.md`

Produce the concrete deliverables per Decomposition's 4-piece partition: P3 R2/R3 characterization (FOUNDATION); P1 dual diagnosis (built on P3); P2 operational paths + recommendation; P4 Research Frontier observations. Per Decomposition's dependency order: P3 first, then P1, then P2 and P4 in parallel.

---

## Seed and Direction

- **Seed: collision + dissatisfaction.** Two disciplines (Explore, Navigation) appear to overlap; the user feels the discomfort and wants to identify why.
- **Intuition direction:** the dual diagnosis (R2 vs Explore = E; R3 vs Explore = F) is structurally derived from direct artifact comparison; the umbrella (G) explains the user's puzzlement; the operational paths are the user's call. Innovation's job is mostly drafting concrete text for each piece.

---

## Phase 2 — Generate (full 7-mechanism coverage)

Most mechanisms confirm rather than reshape since Sensemaking SV6 settled the diagnosis. Each mechanism produces a focused output validating or refining specific design choices.

### Generator 1 — Combination

Connect the two-navigations distinction with the project's discipline-design conventions.

**Generic:** describe both navigations independently. Acceptable but not differentiating.

**Focused:** combine the R2/R3 distinction with the project convention "each discipline has one clear mandate" to derive the operational paths. Path (a) preserves the convention; (b) violates it; (c) preserves it but expands disciplines count.

**Contrarian:** dispense with the project convention and treat overlap as healthy. Lens not adopted (Candidate I from Exploration; rejected by user-discomfort evidence).

**Result:** focused combination supports paths (a) + (c) on convention grounds.

### Generator 2 — Domain Transfer

Where else are category boundaries diagnosed?

- **Biology / taxonomy:** species splitting (when one species is recognized as two distinct populations). Pattern: when structural difference exceeds intra-category variation, split. Maps to: R2 and R3 are different operations; split (Candidate G).
- **Philosophy / ontology:** concept distinction (when one term covers two referents, name them separately). Maps to: name R2 and R3 separately while keeping the umbrella term.
- **Software refactoring / separation of concerns:** when one module has two distinct responsibilities, extract one. Maps to: extract R3 (codebase mapping) from `/navigation` (post-SIC routes) into its own home.

**Result:** three independent fields support the structural-distinction-with-explicit-naming pattern.

### Generator 3 — Absence Recognition

What's missing?

- R3 (whole-codebase mapping) doesn't currently exist as an implementation — it's a vision in `nav_north_star.md`. The user noticed the absence-of-implementation and looked at /navigation expecting to find it; what they found was R2 (different operation). The overlap concern surfaces because R3 is aspirational without a clear technical home.

**Result:** the absence is R3's implementation home; the operational paths (P2) address it.

### Generator 4 — Extrapolation

At L2+ autonomy, the AI invokes disciplines automatically. Clear discipline boundaries compound in value:
- At L0/L1: human notices when the AI invokes wrong discipline.
- At L2+: no human in the loop; clear mandates are the AI's self-check.

If R3 is folded into Explore (path a), the AI clearly invokes /explore for codebase mapping. If R3 is folded into /navigation (path b), the AI must distinguish R2-mode from R3-mode at invocation — added complexity. Path (a) is autonomy-friendlier.

**Result:** path (a) advantage compounds with autonomy.

### Framer 1 — Lens Shifting

Under different lenses, different paths look best:

- **Coherence lens** (project convention; one mandate per discipline) → path (a) or (c)
- **User-vision lens** (preserve "navigation" terminology) → path (b) or hybrid
- **Minimum-edit-cost lens** → path (a) — small spec addition to /explore
- **Long-term-autonomy lens** → path (a) — clearest at L2+

**Result:** path (a) is most-favored across lenses; hybrid handles user-vision preservation.

### Framer 2 — Constraint Manipulation

Soft word-count constraint for the dual diagnosis statement: ~200 words. Forces concise specification. The drafted P1 below meets this.

### Framer 3 — Inversion

Invert: don't address the overlap; keep R2 and R3 as-is with the user's puzzlement unresolved. Result: user re-asks the same question later; same diagnosis emerges; cost wasted. Inversion fails.

---

## P3 — R2 and R3 characterization (FOUNDATION; drafted first per dependency order)

This piece establishes what R2 (existing /navigation) and R3 (north-star navigation vision) actually are. The dual diagnosis (P1) is built on this foundation.

### R2 — Existing `/navigation` discipline

**Source:** `homegrown/navigation/SKILL.md` and `homegrown/navigation/references/navigation.md`.

**Input:** a completed SIC cycle output (or current project state). Operates AFTER an inquiry completes.

**Output:** a navigation map of route-cards. Each route-card has 12 fields: Direction, Goal, Type, Priority, Status, Blocked by, Purpose, Movement, Unlocks, Why this route exists, Guidance mode, adaptive Guidance, Continuation note.

**Schema:** 16-type taxonomy organized in 3 categories — content-directed, process-directed, context-directed. Audit-canonical per `devdocs/inquiries/2026-05-10_03-50__navigation_established_audit/finding.md`.

**Process:** 6-step — Read → Assign Types → Allocate Guidance → Assess Priority/Confidence → Check Excluded → Format the Map. Preceded by a Freshness Preflight (Step 0).

**Purpose:** decide what to do next given a completed inquiry or current project state. Enumerate all possible directions; tag them with type, priority, and status; produce a decision-supporting map.

**Implementation status:** mature; in active use post-SIC.

### R3 — North-star navigation vision

**Source:** `devdocs/nav_north_star.md` (just rephrased from the original `nav_should_be.md`).

**Two ways R3 runs:**

1. **Whole-codebase mapping:** the user runs navigation on the entire codebase without specifying a direction. The output is a map of directions of work that exist in the codebase — what is being discovered, what is being explored, what is being chased. Nodes represent directions, not bounded concepts. The work is heavy (must enumerate the codebase) and uses an iterative staged for-loop structure: first run produces ~10 big concepts; second run expands each to 5-10 sub-concepts (50-100 total); third run goes one level deeper (~200 nodes). Manual user-triggered chaining is acceptable for v1.

2. **Directional local mapping:** the user points navigation at specific source files and runs a directional query. The output is a local artifact (markdown) containing concepts around the area, categorized, with status info per concept (how much considered; how much worked on; blocking other stuff; the 12-16 categories from R2's schema may be referenced).

**Schema:** R3 may inherit some of R2's schema (R3 references "the 12 or 16 categories") but the inheritance isn't fully specified; the vision focuses on the iterative structure and the work-direction framing.

**Process:** iterative staged work; multiple runs at progressively finer resolution; user-triggered chaining at v1.

**Purpose:** survey the codebase's work-direction structure; produce a navigable map of where work is happening or could happen.

**Implementation status:** vision document, not implemented. The functions described in `nav_north_star.md` are aspirational.

### Why the R2/R3 distinction is load-bearing

R2 and R3 are structurally different operations:
- **Different inputs:** R2 takes a completed SIC cycle output; R3 takes the codebase as territory.
- **Different outputs:** R2 produces route-cards (12 fields each, 16-type schema); R3 produces concept-nodes representing work directions.
- **Different purposes:** R2 decides what to do next given a completed inquiry; R3 surveys the work-direction structure of a codebase.

The user's `_branch.md` quoted text from `nav_north_star.md` (R3) — the iterative for-loop structure — not from `navigation.md` (R2). The user's overlap concern with Explore concentrates in R3, not R2.

**Verification criteria (Decomposition P3):**
- [x] R2 described: input, output, schema, process, purpose, implementation status
- [x] R3 described: two ways it runs; schema; process; purpose; implementation status
- [x] Structural difference between R2 and R3 stated explicitly (different inputs, outputs, purposes)
- [x] Why the conflation matters (user's overlap concern is about R3)
- [x] Cross-references to navigation.md and nav_north_star.md

---

## P1 — Dual diagnosis statement (built on P3)

### The verdict

**The Explore-vs-Navigation overlap concern resolves into a DUAL DIAGNOSIS plus an UMBRELLA EXPLANATION.**

**R2 (existing /navigation) vs Explore = Candidate E — separate but mechanism-sharing.** Both disciplines use iterative work, but on different territories (R2 on completed SIC output; Explore on territory-to-map) for different purposes (R2: decide-what-next; Explore: map-what-exists) producing different outputs (R2: route-cards; Explore: confidence-tagged structural map). The shared iterative-staging mechanism is incidental to their distinct purposes. **R2 and Explore are genuinely separate disciplines.**

**R3 (north-star navigation vision) vs Explore = Candidate F — specialization + composition.** R3 specializes Explore to the codebase-as-work-direction-territory (the specialization sub-claim: Explore's spec lists codebases as territory; R3 narrows to codebases viewed through a work-direction lens). R3 also adds an assess overlay — work-status fields like "how much considered," "how much worked on," "blocking other stuff" — that Explore doesn't formally produce (the composition sub-claim). Together = F. **R3 vs Explore = Explore's codebase use case with a work-status overlay.**

**Umbrella explanation: Candidate G — two-navigations conflation.** The term "Navigation" in the project covers TWO structurally different operations (R2 + R3) that have been read together under one name. The user's overlap concern with Explore concentrates in R3 vs Explore (high overlap; Candidate F); R2 vs Explore is genuinely separate (Candidate E). Once the conflation is named, the overlap becomes legible: the user was looking at R3 (the vision in `nav_north_star.md`) and recognizing Explore's territory-mapping work in it.

### Why this diagnosis holds on structural grounds

- **Direct artifact comparison** of the three texts (`explore.md`, `navigation.md`, `nav_north_star.md`) shows the operational differences between R2 and Explore (different inputs, outputs, purposes) and the operational similarities between R3 and Explore (both iterate; both map territory; both produce concept-style outputs).
- **Domain transfer validation** from three independent fields (biology/taxonomy; philosophy/ontology; software refactoring/separation-of-concerns) supports the pattern of naming structurally different things separately even under one umbrella term.
- **The user's question was structurally derived, not template-applied.** The candidate diagnoses A-J emerged from territory observation; the dual verdict emerged from collision-of-evidence on Sensemaking's perspectives; the FEC meta-application tested Verdict Rigor counters (Candidates A, D, H, I tested with structural-grounds counter-arguments — none subsumed the dual verdict).

### What the diagnosis does NOT depend on

The diagnosis is **implementation-path-independent**. Whether R3 is folded into Explore, folded into /navigation, or built as a third discipline, the structural verdict stays the same — R3's operations have the shape of Explore-specialized + assess-overlay, regardless of where the implementation lives.

**Verification criteria (Decomposition P1):**
- [x] R2 vs Explore = Candidate E (separate but mechanism-sharing) stated explicitly
- [x] R3 vs Explore = Candidate F (specialization + composition) stated explicitly
- [x] Specialization sub-claim (R3 = Explore for codebase territory) made explicit
- [x] Composition sub-claim (R3 adds assess overlay for work-status) made explicit
- [x] Umbrella explanation (Candidate G: two-navigations conflation) stated
- [x] Structural grounds for verdict (artifact comparison + domain transfer + FEC meta-application)
- [x] Self-reference mitigation acknowledged (external anchoring via spec citations)
- [x] Implementation-path independence noted

---

## P2 — Operational paths + recommendation (drafted after P1; parallel with P4)

### Four operational paths for R3

R3 (the north-star navigation vision) is not yet implemented. Once the dual diagnosis is settled, the user must choose where R3's implementation lives. Three primary paths + one hybrid.

#### Path (a) — Fold R3 into Explore (RECOMMENDED)

**What:** add a "codebase work-direction mode" to `homegrown/explore/references/explore.md`, alongside the existing artifact + possibility modes. The new mode applies Explore's scan-signal-probe cycles to codebases viewed through a work-direction lens, with an optional **assess sub-mode** that adds work-status overlay fields (consideration level; blockage; work-status) when the user wants the R3 directional case.

**Cost:** ~300-500 words of spec addition to explore.md (a new mode section + optional sub-mode section). Spec edit. Reversal: revert the spec edit (one Edit operation; near-zero reversal cost).

**Coherence:** matches project convention (each discipline has one clear mandate). Explore's mandate is "map unknown territory"; codebase work-direction mode is a specialization of that mandate. `/navigation` stays scoped to its existing R2 role (post-SIC route enumeration). Two clean disciplines.

**User-facing terminology:** "navigation" as a colloquial term can still be used in documentation (see Hybrid Option below); technical home of the operation is Explore.

**Why recommended:** preserves project convention; smallest spec change; cleanest at L2+ autonomy (the AI invokes /explore for codebase mapping; no two-mode-distinction needed for /navigation).

#### Path (b) — Fold R3 into `/navigation`

**What:** extend `homegrown/navigation/references/navigation.md` with whole-codebase mapping + directional local mapping sections. `/navigation` becomes a TWO-MODE discipline: existing R2 (post-SIC route enumeration; mode 1) and new R3 (codebase work-direction mapping; mode 2).

**Cost:** ~500-800 words of spec addition to navigation.md (mode 2 section with both whole-codebase and directional sub-cases). Larger spec edit than path (a) because R3's operations are substantial. Reversal: revert the spec edit.

**Coherence:** preserves the user's conceptual framing of "navigation" as the term for codebase mapping. **Violates project convention** of one-mandate-per-discipline — `/navigation` would have two unrelated mandates (post-SIC route enumeration AND codebase mapping). The two modes share no operations; they share only the discipline name.

**User-facing terminology:** "navigation" technically and colloquially.

**Why might be chosen:** if the user's conceptual identity for "navigation" is non-negotiable and convention violation is acceptable.

#### Path (c) — Build R3 as a third discipline

**What:** create `homegrown/<new-name>/` with its own SKILL.md, references file, pipeline position. Names like `/survey`, `/map`, `/territory-map`, or `/codebase-navigation` could fit.

**Cost:** new folder + new SKILL + new references + new pipeline position considerations. Largest infrastructure cost of the three paths. Reversal: delete the new folder; revert any pipeline-position changes.

**Coherence:** cleanest scope at the discipline-design level. Each discipline has a narrow, well-bounded mandate. No convention violation.

**User-facing terminology:** depends on the chosen name. The term "navigation" stays with R2 (existing /navigation).

**Why might be chosen:** if the user wants R3 to grow into something that's neither Explore-specialized nor merged with `/navigation` — e.g., if R3 will eventually develop operations Explore doesn't have (beyond just the assess overlay).

#### Hybrid Option — Path (a) + naming preservation

**What:** technical home of R3 is Explore (path a). In user-facing documentation and conversational reference, the operation can be called "navigation" colloquially even though it technically invokes `/explore` with the codebase work-direction mode. The technical name in protocols and CLI is `/explore`; the conceptual name in vision documents and conversation can stay "navigation."

**Cost:** same as path (a) for spec; small additional documentation note clarifying the colloquial-vs-technical naming distinction.

**Coherence:** preserves project convention (technical home is Explore) AND preserves user-vision naming (colloquial use of "navigation" stays).

**Why might be chosen:** best of both worlds for users who care about both convention and naming. **Default recommendation if path (a) is chosen.**

### Path comparison

| Dimension | Path (a) | Path (b) | Path (c) | Hybrid |
|---|---|---|---|---|
| Project convention preservation | YES | NO (one-mandate violated) | YES | YES |
| User-vision naming preservation | NO (technical) | YES | NO | YES (colloquial) |
| Spec-edit cost | Low | Medium-High | High (new folder) | Low |
| L2+ autonomy clarity | High | Medium (two modes to distinguish) | High | High |
| Reversal cost | Near-zero | Near-zero | Low | Near-zero |
| Discipline count | 5 (unchanged) | 5 (unchanged) | 6 | 5 (unchanged) |

### Recommendation

**Soft recommendation: Hybrid Option (technical home Explore + naming preservation).** It pairs the strongest path (a) on convention/cost/autonomy with naming preservation that addresses the user's conceptual framing. If the user prefers strict technical-naming, path (a) alone works. If the user's identity-of-navigation is non-negotiable, path (b) is defensible despite the convention violation. Path (c) is defensible if R3 will grow operations beyond Explore-with-assess.

User decides. The diagnosis (P1) is independent of this choice.

### Path-independence meta-observation

Candidate J from Exploration suggested the right diagnosis depends on the implementation path. Sensemaking resolved this: the structural diagnosis commits independently. The path choice is an operational consequence, not a diagnostic blocker. This is why all four paths are presented — the user can act on any of them without changing the diagnosis.

**Verification criteria (Decomposition P2):**
- [x] Path (a) — design, cost, benefit stated
- [x] Path (b) — design, cost, benefit stated
- [x] Path (c) — design, cost, benefit stated
- [x] Hybrid option — design stated
- [x] Comparison table across the four
- [x] Soft recommendation indicated (Hybrid; path a fallback)
- [x] Recommendation reasoning explicit (convention preservation + naming preservation)
- [x] Path-independence meta-observation included
- [x] User-actionable: clear options

---

## P4 — Research Frontier observations (parallel with P2)

### Research Frontier 1 — Broader pattern of discipline-pair mandate-overlap

This inquiry diagnosed the Explore-vs-Navigation overlap. The pattern may exist in other discipline pairs:
- **Sensemaking vs Reflect:** both involve stabilization and synthesis; do their mandates overlap?
- **Innovate vs Critique:** Critique extracts criteria from Sensemaking; Innovate generates from seeds; both interact with the same upstream Sensemaking output — is there hidden overlap in their preparation phases?
- **Decompose vs Sensemaking:** both stabilize understanding of complexity; Decompose adds boundary perception; is there an analogous specialization+composition pattern?

A focused inquiry on each pair could surface similar diagnoses. Out of scope for this inquiry.

### Research Frontier 2 — Pattern-emergence note (3rd instance of discipline-mandate-boundary inquiry)

This is now the **third instance** of a discipline-mandate-boundary inquiry in recent project work:
- **12-30 inquiry:** is Sensemaking one discipline or multiple? (Answer: one umbrella with two named operations — Comprehending + Stabilizing.)
- **13-00 inquiry:** is Exploration overreaching into Critique? (Answer: yes in 3 of 5 cases; spec-gap + execution-drift; fix is a 7th failure mode.)
- **13-30 inquiry (this one):** is Explore overlapping with Navigation? (Answer: dual diagnosis E + F; umbrella G; four operational paths for R3.)

Three instances within hours of each other suggests the project is going through a discipline-architecture refinement phase. The pattern may merit project-level codification — perhaps a meta-document or protocol for "how to diagnose discipline-mandate questions" — once a fourth instance arrives.

**Verification criteria (Decomposition P4):**
- [x] Broader pattern: other discipline pairs flagged for separate inquiries
- [x] Pattern-emergence note: 3rd instance of discipline-mandate-boundary inquiry
- [x] Both observations out-of-scope for THIS inquiry's diagnosis
- [x] Candidate inquiries suggested

---

## Phase 3 — Test (5-test cycle on the design)

| Test | Result |
|---|---|
| **Novelty** | The dual diagnosis (E + F + G) is structurally novel for this discipline pair. The two-navigations distinction is a new explicit framing in the project. The hybrid option is a new combination of technical-home + naming-preservation. **NOVEL within project.** |
| **Scrutiny survival** | Survived: 11 candidates considered in Exploration (rejection moves avoided per Premature Evaluation guardrail); 5 Sensemaking ambiguities resolved with structural-grounds testing; FEC meta-application with Verdict Rigor counters tested; 3 load-bearing concept tests; 3 Inversion levels; 3 Lens conditions. **SURVIVED.** |
| **Fertility** | Opens follow-on territory: (a) Research Frontier 1 — other discipline-pair audits; (b) Research Frontier 2 — pattern-emergence codification; (c) potential R3 implementation work depending on user's path choice. **FERTILE.** |
| **Actionability** | Dual diagnosis stated; four operational paths drafted with comparison; user can immediately act on path choice. Each path has concrete spec-edit specifications. **ACTIONABLE.** |
| **Mechanism independence** | Four Generators (Combination; Domain Transfer with 3 sub-transfers; Absence Recognition; Extrapolation) and three Framers (Lens Shifting across 4 lenses; Constraint Manipulation; Inversion) all converge on the dual diagnosis + path (a)/hybrid recommendation. Convergence across 7 mechanisms. **HIGH mechanism independence.** |

**Test cycle result: SURVIVED across all five tests.**

**Output disposition:** the design is **ACTIONABLE**. The diagnosis is implementation-independent; the path choice is the user's call; both can proceed once the user decides.

---

## Assembly check + Axis coverage check

### Assembly check

After testing, examine {P3 R2/R3 characterization + P1 dual diagnosis + P2 operational paths + P4 Research Frontier} together.

**Emergent property:** the four pieces form a complete discipline-boundary-diagnosis package — foundation + verdict + operational consequences + meta-context. At adoption, the user can:
- Accept the diagnosis (P1 + P3 + umbrella explanation) as the answer to their question.
- Choose an operational path (P2) to implement R3.
- Acknowledge the Research Frontier observations (P4) for future work.

**Continuation of project-pattern observation:** this is the 4th instance of the 4-piece spec-change/diagnosis deliverable shape (after 11-22 Part B, 09-20 design, 12-30 design, 13-00 failure-mode addition). Plus this is the 3rd instance of discipline-mandate-boundary inquiry specifically. Both patterns are accumulating.

### Axis coverage check

Orthogonal axes of the underlying problem:
- **Axis 1 — Structural diagnosis** (what the relationship is): covered by P1.
- **Axis 2 — Operational consequence** (what to do about it): covered by P2.
- **Axis 3 — Foundation** (what R2 and R3 actually are): covered by P3.
- **Axis 4 — Broader context** (other discipline pairs; pattern emergence): covered by P4.
- **Axis 5 — User-vision preservation** (the "navigation" terminology question): covered by the Hybrid Option in P2.
- **Axis 6 — Convention preservation** (one-mandate-per-discipline): covered by P2 in the path comparison.

All six axes covered. **Axis coverage passes.**

---

## Mechanism Coverage Telemetry

- **Generators applied:** 4/4 (Combination; Domain Transfer with 3 sub-transfers; Absence Recognition; Extrapolation).
- **Framers applied:** 3/3 (Lens Shifting across 4 lenses; Constraint Manipulation with word-count; Inversion at level 1).
- **Total mechanisms applied:** 7/7. **Full coverage.**
- **Convergence:** YES — all 7 mechanisms converge on the dual diagnosis + path (a)/hybrid recommendation.
- **Survivors tested:** 1/1 — the design tested across all 5 tests; SURVIVED.
- **Failure modes observed:** None.
  - Premature evaluation: prevented by Generate → Test phases.
  - Single-mechanism trap: full 7-mechanism coverage.
  - Early frame lock: multiple mechanisms confirmed.
  - Innovation without grounding: 5-test cycle applied.
  - Mechanism exhaustion: not present.
  - Survival bias: tested (the Inversion at level 1 explicitly considered no-fix and found it insufficient).

**Overall: PROCEED.** Full mechanism coverage; high convergence; survivor tested across all 5 tests; no failure modes. Innovation stayed within its own mandate (Generation + Framing); no rejection-with-verdict-reasoning of candidates. Hand off to Critique for adversarial testing.
