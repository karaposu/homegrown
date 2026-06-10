# Structural Decomposition — discipline_specs_hidden_structural_abstraction

## User Input

devdocs/inquiries/2026-06-09_21-47__discipline_specs_hidden_structural_abstraction/_branch.md

**The whole being decomposed** (from sensemaking SV6): design the materialization of the latent abstraction stack — Discipline Spec Schema, trait library, runner common core, within-spec bundling, registry generalization, lifecycle layout, machine-readable sidecar, plus an open lane for unnamed mechanisms — for the whole `cognitive_harness/` corpus, under the constraint envelope (content preservation; runtime-visibility typing; looseness; organic adoption; tier classification; compatibility with the five settled convention layers).

---

## 1. Coupling Map

**Elements:** V1 schema · V2 traits · V3 runner core · V4 within-spec bundling · V5 registry mechanism · V6 lifecycle layout · V7 sidecar/manifest · V8 open lane · cross-cutting: constraint envelope, adoption strategy, checker linkage.

**Pairwise propagation ("change A — must B change?"):**

| Pair | Coupling | Why |
|---|---|---|
| V1 schema ↔ V2 traits | **STRONG** | Traits occupy schema slots (Quality section hosts LAYER 1/2 + asymmetric-failure; Output hosts verdict block; the preamble hosts the Loading note). Changing the section anatomy moves trait slots; changing canonical trait text does NOT change the anatomy. Asymmetric: slots→text one-way |
| V1 → V7 sidecar | STRONG one-way | Manifest fields ARE the schema's section/field taxonomy; V7 is derivative |
| V2 → V7 | MODERATE one-way | Manifest records per-spec trait instantiation/deviation status |
| V1 → V4 bundling | MODERATE one-way | Bundling moves need target homes; the schema names the canonical homes |
| V2 ↔ V5 registry | MODERATE | The trait library needs a HOME; the proven registry shape (cognitive_fixes) is the leading candidate home — V5 is a mechanism choice inside V2, not a separate deliverable |
| V3 runner core ↔ everything else | **WEAK** | Runner blocks are runner-specific; no discipline-spec dependency. One real hidden coupling: install scripts must ship any new shared file (external interface) |
| V6 lifecycle ↔ others | WEAK | Pure non-runtime file placement; optional version-pointer feeds V7 |
| V8 open lane ↔ others | WEAK | Novel mechanisms by definition outside the named stack; constrained only by the envelope |
| Adoption/tiering ↔ ALL | cross-cutting | Every design needs a tier + visibility class + gate; this is fan-in, not pairwise entanglement |

**Clusters (high cohesion):** {V1, V2, V7} — the *canonical-form cluster* (schema defines, traits fill, manifest declares). {V3} alone. {V4} alone (governed by already-settled conventions). {V5→inside V2}, {V6} alone, {V8} alone. {adoption} as the closing synthesizer.

**Valleys (low coupling = cut lines):** between runner-core work and discipline-spec work; between physical file-placement (V6) and content structure (V1/V2/V4); between design pieces and the adoption roadmap.

## 2. Boundary Set (top-down)

Eight pieces: P1 Schema · P2 Trait library (absorbs the V5 home-mechanism choice) · P3 Runner common core · P4 Within-spec bundling · P5 Lifecycle layout · P6 Sidecar + checker bridge · P7 Novel-mechanism search · P8 Adoption roadmap. The V1↔V2 strong coupling is NOT merged into one piece — it is split along the **slot/text seam**: P1 owns WHERE standard blocks sit (sections, positions); P2 owns WHAT their canonical text is. Merging them would produce one piece carrying half the inquiry (imbalance); the seam is clean because slots and text change for different reasons.

## 3. Bottom-Up Validation

Atoms and their natural piece: Loading-note wording, Step-0 contract, verdict vocabularies (3 styles), override-record pattern, asymmetric-failure principle, NOT-list, vocabulary table, LAYER 1/2 preamble → **P2** (canonical text) with their positions in **P1** (slots) — the one deliberate cross-assignment, governed by the slot/text interface. Runner blocks (Workspace Invariant, Transition Protocol, ITERATION COMPLETE, Resume, Rules, timestamp policy) → **P3**. innovate's 15-note cross-reference web; sensemaking's Form-2 orphans (per step_refinement's own catalog) → **P4**. `old_*` files, dev-history docs → **P5**. Manifest fields, ghost `structural_check.sh`, Type-5 spec symptoms → **P6**. Tier vocabulary, visibility classes, staging gates → **P8**. No atom is split across pieces beyond the declared seam; no atom is homeless. Top-down and bottom-up agree → **HIGH confidence** boundaries.

## 4. Question Tree

**P1 — Schema.** *"What is the canonical Discipline Spec Schema — the section anatomy + per-section element-classes that the newer-generation specs already instantiate — and how does a spec declare conformance or deviation?"*
- [ ] Section anatomy enumerated (preamble/Identity/Components/Process/Quality/Output/Execution) with per-section element-classes
- [ ] Looseness mechanism specified (suggested-not-required; licensed-deviation note shape — cognitive_fixes `_template.md` precedent)
- [ ] Conformance-declaration design (where a spec says "instantiates schema vN; deviates at X because Y")
- [ ] Conformance matrix: all 7 active specs mapped against the schema (which sections present/absent/renamed)
- [ ] Compatibility shown with the 17-04 content-type mapping (schema = file level; 17-04 = within-section level) and the anatomy doc's uniqueness disclaimer

**P2 — Trait library.** *"What are the canonical traits (recurring standard blocks), their canonical wording, their home, and the per-spec instantiation rule?"*
- [ ] Trait inventory ≥ the 8 observed element-classes (Loading note, Step-0 contract, NOW SOLID divider, verdict vocabulary, override-record, asymmetric-failure, LAYER 1/2 preamble, NOT-list/vocab-table pair)
- [ ] Canonical text drafted or pointed-to per trait (drawn from the best existing instance — no new semantics)
- [ ] Home decided with mechanism reuse: registry folder (cognitive_fixes shape: index + loose template + staging gates + kill conditions) vs convention doc; choice justified
- [ ] Instantiation rule: copy-into-spec with declared deviation (runtime-invisible) — explicitly NOT pointer-dedup (runtime-visible, out of this piece)
- [ ] Drift-repair worklist regenerated (supersedes the stale `editing_discpinlines.md`): which spec lacks/varies which trait

**P3 — Runner common core.** *"Which blocks are duplicated across MVL/MVLw/aMVLw, and what is the content-preserving extraction into a shared, path-loaded protocol file?"*
- [ ] Block-by-block three-way diff table (identical / drifted / runner-specific)
- [ ] Shared-file design: name (e.g., `protocols/runner_core.md`), load instruction in each runner, what stays inline per runner
- [ ] Drift adjudication per drifted block (e.g., MVL lacking the timestamp policy: adopt-shared vs declared-variant)
- [ ] Runtime-visibility gate: explicit verify plan (this IS runtime-visible; uses the existing protocol load-by-path mechanism; snapshot-recipe + install-script compatibility steps listed)
- [ ] Rollback: single-commit revert restores inline blocks

**P4 — Within-spec bundling.** *"For the worst spread cases inside individual specs, what bundling moves — per the placement convention + Form-2→Form-1 lifting recipes — consolidate spread logic without content change?"*
- [ ] Spread-map of the worst case (innovate: 15 notes, 9 override-records, prose cross-reference web), plus known Form-2 instances from step_refinement's catalog (sensemaking's inline-bullet/orphan/embedded cases)
- [ ] Move plan per top case: canonical home + one-line stubs at old surfaces
- [ ] Each move tagged with its recipe (FM-buried / inline-bullet / orphan / embedded lift, or relocation)
- [ ] Per-move content-preservation statement (text moved verbatim; only addresses change)

**P5 — Lifecycle layout.** *"What defined physical homes should dev-history docs, runtime specs, and old_* versions have, and what non-runtime moves get there?"*
- [ ] Target layout (e.g., `references/<name>.md` stays; `references/archive/old_*.md` or `non-active`-style versions dir; dev-history under devdocs with naming rule)
- [ ] Mapping table: each currently-misplaced file → home
- [ ] Runtime-invisibility verification (grep: nothing loads old_* at runtime)
- [ ] Snapshot + install-script compatibility note

**P6 — Sidecar + checker bridge.** *"What per-spec machine-readable manifest would declare sections, traits, and output contract — and how does it make the ghost structural_check.sh and the Type-5 regression symptoms finally buildable?"*
- [ ] Manifest field list derived from P1 taxonomy + P2 inventory (+ output-file contract per discipline)
- [ ] Placement: non-runtime sidecar (not loaded by Step 0); format choice (YAML/MD table) justified for greppability
- [ ] Checker sketch: what it verifies on (a) discipline OUTPUT files (the runners' existing call site) and (b) SPEC files themselves (Type-5 symptoms: missing sections / removed safeguards)
- [ ] Degradation path: manifest is useful with NO checker (human-scannable conformance card)

**P7 — Novel-mechanism search.** *"Beyond the named stack, what organization mechanisms could the corpus support, and which survive the constraint envelope?"*
- [ ] ≥3 genuinely-new candidates (beyond file-spread/template/bundling) generated
- [ ] Each tested against the envelope (content-preservation; visibility class; no-build-step culture; looseness)
- [ ] Survivors handed to P8 with class labels

**P8 — Adoption roadmap.** *"What tier/risk-classified, regression-safe ordering adopts the surviving designs?"*
- [ ] Visibility-class determination mechanism stated operationally: *does the change alter any byte an executing LLM loads at runtime? → runtime-visible; else invisible* (the load-bearing runtime determination — explicit per the determination-mechanism check)
- [ ] Every surviving design carries: edit tier (1/2/3 + sub-axes) + visibility class + reversibility statement + gate (manual check / snapshot A-B / branch experiment / staging threshold)
- [ ] Ordering principle: runtime-invisible before runtime-visible; per-step independence preserved
- [ ] Non-goals restated: no compaction; no forced retroactive migration; organic on-touch conformance

## 5. Interface Map

| From → To | What flows | Direction |
|---|---|---|
| P1 → P2 | slot taxonomy (which sections exist; where standard blocks sit) | one-way |
| P1 → P4 | canonical homes (bundling targets) | one-way |
| P1 → P6 | section/field taxonomy (manifest fields) | one-way |
| P2 → P6 | trait inventory + per-spec instantiation status | one-way |
| P2 → P3 (optional) | canonical Loading-note/Step-0 text if the shared runner file instantiates traits | one-way, optional |
| P5 → P6 (optional) | version-file locations (manifest version pointer) | one-way, optional |
| P1–P7 → P8 | each design + its risk surface | fan-in |
| P3 → external: install scripts | new shared file must be added to the installer's protocol list; snapshot recipe's rewrite list grows by one path | one-way (hidden coupling surfaced) |
| P5 → external: install scripts/snapshots | only if files the installer copies are moved (old_* are NOT installed — verified: installer ships only SKILL.md + named reference + protocols) | conditional |

*Assumptions-not-data check:* (a) P3 assumes the protocol load-by-path mechanism behaves identically for a new file — same mechanism, but BOTH install scripts and the snapshot recipe enumerate protocol files explicitly; flow recorded as the external interface above, not assumed away. (b) P5 assumes no runtime path references `old_*` — confirmed by surfacing (no Step-0 or runner references) and recorded as a verification step inside P5 rather than an assumption. (c) P1/P2 assume future authors will declare deviations honestly — a process-layer assumption outside this structural inquiry; flagged for the finding's open questions, not silently relied on (the manifest/checker in P6 is the eventual structural backstop).

## 6. Dependency Order

```
Wave 1 (parallel): P1 schema · P3 runner core · P5 lifecycle · P7 novel search
Wave 2 (parallel, after P1): P2 traits · P4 bundling
Wave 3 (after P1+P2): P6 sidecar
Wave 4 (after all): P8 roadmap
```
No circular dependencies. P3/P5/P7 are genuinely independent of the canonical-form cluster.

## 7. Self-Evaluation (full 7 dimensions)

| Dimension | Verdict | Note |
|---|---|---|
| Independence | **PASS** | Each piece's question is answerable through its interfaces only; the one strong coupling (P1/P2) is governed by the slot/text seam |
| Completeness | **PASS** | User's three named directions map: file-spread → P3/P5 (+P7 for deferred runtime splits); common template → P1/P2; bundling → P4; "ways I can't think of" → P7; envelope + ordering → P8. Verdict question already settled upstream (sensemaking A1) |
| Reassembly | **PASS** | P1–P7 designs + P8 ordering = catalog + designs + tiered roadmap = the Goal's deliverable tuple; nothing in SV6 falls between pieces |
| Tractability | **PASS** | Heaviest piece (P4 spread-map) explicitly bounded to top cases |
| Interface clarity | **PASS** | All flows named; two hidden couplings surfaced (install scripts; snapshot rewrite list) |
| Balance | PASS-with-note | P5 is much lighter than P1–P3; reflects the territory's real shape, not arbitrary cutting — acceptable |
| Confidence | **HIGH** | Top-down and bottom-up agree; single disagreement zone resolved by explicit seam, not by merge |

*Determination-mechanism piece check:* the Q-tree's load-bearing runtime determination — "is this candidate runtime-visible?" — has its determination mechanism explicitly housed in P8's first verification criterion (byte-loaded-at-runtime test). No presupposed-but-unhoused determinations remain. PASS.

**Stopping decision:** no piece needs sub-decomposition (each is tractable, atomic at its working grain, or directly verifiable).

**Next discipline input:** Innovation generates candidates per piece (P1–P7), honoring the interfaces and the envelope; P8's synthesis material accumulates from each piece's risk classification.
