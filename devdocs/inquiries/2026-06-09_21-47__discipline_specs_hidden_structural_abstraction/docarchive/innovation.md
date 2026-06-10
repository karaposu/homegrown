# Structural Innovation — discipline_specs_hidden_structural_abstraction

## User Input

devdocs/inquiries/2026-06-09_21-47__discipline_specs_hidden_structural_abstraction/_branch.md

---

## Phase 1 — Seed (+ Methodology-Mode Consideration)

**Seed (from sensemaking SV6 + decomposition Q-tree):** the corpus's latent abstraction stack — schema, trait library, runner common core, within-spec bundling, lifecycle layout, machine-readable sidecar — plus an open lane (P7), to be materialized content-preservingly per the 8-piece decomposition under the constraint envelope. Seed type: **Gap + Collision** (a half-born form colliding with measurable drift).

**Methodology-Mode Consideration:**
(a) **Inherited mode:** Production-task mode with **Standard default** distribution (the seed is a piece-list inherited from upstream; decomposition's text says "Innovation generates candidates per piece").
(b) **Alternative mode:** **Generator-weighted exploration** ("novelty-first" — maximize breadth of organization mechanisms).
(c) **What follows under the alternative:** a wider field of exotic mechanisms (compilers, generated views, graph indexes) at the cost of under-serving P1–P6's concrete design needs; most exotic candidates would die on the no-build-culture constraint anyway.
(d) **Decision: default (Standard, production-task) for P1–P6 + Generator-weighted treatment scoped INSIDE P7** (the piece whose question IS "what mechanisms haven't we thought of"). Recorded as default-with-scoped-exception.

**Meta-decision-piece classification (per the 4+1 criterion):**

| Piece | Classification | Firing property |
|---|---|---|
| P1 schema | **meta-decision** | (iv) evaluation-criterion (schema becomes the standard specs are matched against) + (v) intervention-shape (principal commits ADD-CONTENT) |
| P2 traits | **meta-decision** | (iii) lesson-vocabulary ("trait") + (v) intervention-shape (ADD-CONTENT registry) |
| P3 runner core | **meta-decision** | (v) intervention-shape (REPAIR/extraction commitment, load-bearing for runner behavior) |
| P4 bundling | content-production | elaborates within already-settled conventions (placement/lifting committed the shape) |
| P5 lifecycle | content-production | layout moves; no downstream piece operates under its frame (retrospective audit: confirmed — nothing below depends on it) |
| P6 sidecar | **meta-decision** | (iv) evaluation-criterion (manifest defines what's checkable) + (v) intervention-shape (ADD-TEST) |
| P7 novel lane | content-production | generation lane; outputs individually tested |
| P8 roadmap | **meta-decision** | (iv) evaluation-criterion (ordering + tiering rules) — property (v) does not fire (no single shape commitment; it classifies others') |

---

## Phase 2 — Generate (7 mechanisms × 3 variations)

### 1. Lens Shifting (Framer)

- **1G (generic) — "specs are programs" lens.** Evaluate the corpus as a codebase in a prompt-language: conventions = informal type system; the half-born schema = its type declaration; the ghost `structural_check.sh` = its missing compiler check. Under this lens the inquiry is not tidying but **adding a type layer to an untyped codebase** — which is exactly what "code is pregnant with a dataclass" means.
- **1F (focused) — dual-consumer render lens.** Judge any trait/shared-block design under BOTH the runtime lens (an executing LLM needs the text INLINE, in-context, self-contained) and the maintainer lens (a human needs ONE canonical home). Under the dual lens, *inline duplication is not a defect — it is the render output*; the defect is the absence of a declared source. This dissolves the "duplication vs single-source" fight: keep copies inline (runtime), declare the canonical source (maintenance), let conformance be checked (verification).
- **1C (contrarian) — growth-rings lens.** Treat accreted refinement notes as the system's visible calibration history ("growth rings"): under this lens reorganization destroys evidence and tidiness is anti-signal. *What survives scrutiny:* not the do-nothing conclusion (drift evidence is real harm), but the **overlay-only posture** — structure should be ADDED AROUND existing text (markers, indexes, declarations), never by rewriting history. Feeds the adoption posture in P8.

### 2. Combination (Generator)

- **2G (generic) — schema × ghost checker.** Combine P1's section taxonomy with the runners' existing-but-unserved call site (`bash tools/structural_check.sh <output> <discipline>`): a manifest-driven checker becomes DERIVABLE rather than designed from scratch — the call-site contract (file + discipline-name → per-discipline required structure) is already fixed by three runner specs. The missing tool's interface already exists; only its data was missing.
- **2F (focused) — cognitive_fixes shape × trait library.** Combine the proven registry mechanism (index + loose `_template` + staging gates + kill conditions + reversibility commitment) with the trait inventory → **`cognitive_harness/traits/` registry**: one file per trait (canonical wording + known instantiations + deviation log), `README` index with promotion/kill gates copied from cognitive_fixes precedent. Two existing project mechanisms, one new application.
- **2C (contrarian) — distillation doctrine × lifecycle.** Combine the dev-history/runtime split with the old_* convention → one unified per-discipline archive rule: `references/` holds ONLY the live runtime spec; `references/archive/` (or `non-active`-style sibling) holds `old_*`; dev-history docs get a devdocs naming rule (`devdocs/disciplines/<name>/how_*_should_be.md`). The combination replaces two implicit conventions with one declared one.

### 3. Inversion (Framer) — depth-checked

- **3G (generic).** Belief: "the spec corpus needs better internal organization." L1 invert: "the organization is adequate; the ACCESS is missing" (no index, no map, no entry point). L2 (system-level): **the corpus lacks a navigation/declaration LAYER, not a different arrangement** — a table-of-contents stratum (corpus index; per-spec conformance card) gives most of the tidiness value at zero runtime risk. Multi-axis check — existence-axis: could the needed NEW text be zero? Almost: most structure exists; only naming/indexing text is genuinely new. Identity-axis: what is a spec fundamentally? *source code* (1G) → it deserves declarations, not rewrites. Convergent with 1G and 5-bidirectional.
- **3F (focused; P3's piece-level inversion — intervention-shape axis).** See P3 entry under piece-level inversions below (single-source-with-conformance-diff).
- **3C (contrarian).** Belief: "the schema should be a document authors read." Invert: "authors never read standards documents; they copy the nearest exemplar." System-level: **template-as-exemplar** — designate ONE annotated golden exemplar (e.g., `routelister.md`, the cleanest newest-generation instance) as the copy-source; the schema doc exists only as the exemplar's annotation layer. What follows: zero new normative prose; conformance = "diff your shape against the exemplar"; risk: exemplars carry discipline-specific content that bleeds into copies.

### 4. Constraint Manipulation (Framer) — both directions mandatory

- **4-ADD (generic).** ADD: "every spec edit must update the spec's conformance/manifest entry in the same commit." What opens: manifests stay true; Type-5 regression checks (missing-section/removed-safeguard) become diffable per commit. Cost: friction on every edit; premature before manifests exist. → staged behind manifest adoption.
- **4-ADD (focused).** ADD: "the schema is versioned; each spec declares `schema: v1`." What opens: the schema can evolve without forcing migration (v1 = descriptive of today's newer generation; v2+ = future tightenings); conformance is meaningful per version — the loose-template stance gets a mechanism instead of a vibe.
- **4-REMOVE (generic).** REMOVE: "runtime spec = one file." What opens: modular sources compiled to a single runtime artifact (build step). Explored honestly: maximal maintainability; but requires build tooling the culture defers until calibration exists, multiplies snapshot/install complexity, and contradicts canon (`how_a_discipline_should_be.md`). → **DEFERRED** with revival trigger: "if/when any compile-or-check tooling ships and runs routinely (e.g., structural_check.sh in actual use for ≥1 month), revisit modular-source compilation."
- **4-REMOVE (contrarian).** Hypothetically REMOVE the no-compaction constraint: would cross-spec dedup-by-pointer then be right? Even unconstrained, dedup loses per-spec self-containedness (an executing LLM would need extra Reads) — i.e., **no-compaction is not the binding constraint; the single-context contract is.** Strengthens sensemaking A5: address-change suffices regardless.

### 5. Absence Recognition (Generator) — both levels + bidirectional

- **5-patch (gaps in current design).** The drift-repair worklist: verdict-vocabulary absent in `sensemaking.md` + `decompose.md` and divergent across 3 styles elsewhere; `NOW SOLID INSTRUCTIONS` divider absent in `innovate.md` + `td-critique.md`; override-record pattern exists only in innovate though td-critique/sense-making rules have analogous override needs; MVL lacks the timestamp policy MVLw/aMVLw carry; `editing_discpinlines.md` worklist itself stale (dead paths). Each is a bounded ADD/align edit.
- **5-redesign (what would exist if designed from scratch).** (a) **`cognitive_harness/SPEC_STANDARD.md`** — ONE entry point assembling the currently-scattered style guide (schema + traits + placement convention + step-refinement shape + edit tiers + content-type mapping) as an INDEX with pointers, not a rewrite; (b) per-discipline **manifest** from day one; (c) `tools/structural_check.sh` existing from day one (the call sites prove it was always intended).
- **5-bidirectional (already present in different form).** The project already HAS the template (the three newest specs ARE it, in exemplar form), already HAS the rule-type (Step Refinement doc), already HAS the registry mechanism (cognitive_fixes), already HAS load-by-path sharing (protocols). **The absence is not of mechanisms but of NAMING + INDEXING + DECLARATION.** This bounds the whole inquiry against over-building: most candidates should declare and connect what exists, not construct new machinery.

### 6. Domain Transfer (Generator) — native source included

- **6-native (software).** The JSON-Schema/OpenAPI pattern: human document + machine schema sidecar + validator in CI = spec + manifest + checker. Plus the linter-config pattern (ESLint/EditorConfig): conventions live in a small checkable config; the code (spec prose) stays free. Direct mapping; no adaptation needed.
- **6-different (law).** Legislative **codification**: statutes accrete amendments (= refinement notes) and are periodically codified — consolidated, renumbered, content-preserved — with amendment provenance moved to annexes. Transfer: a recurring **codification pass** per spec (bundle scattered rules to canonical homes; move provenance to a history annex; meaning untouched) — the project's distillation doctrine generalized into a maintenance ritual with a name and a trigger (e.g., notes-per-spec > 15).
- **6-different (publishing).** A magazine's **house style**: a style guide + house template govern defined SURFACES (title block, sections, citation format) while the body prose stays the author's. Transfer: the schema governs trait SLOTS and standard blocks; discipline-specific body is never templated — exactly the looseness the anatomy doc demands, now with a precise boundary (house surfaces vs body).

### 7. Extrapolation (Generator)

- **7G (generic).** Refinement notes: 31 today, growing with every spec-improvement inquiry (innovate alone 15). At the observed rate (~5-8/month recently), 12 months → 70-100 notes corpus-wide; innovate's prose cross-reference web becomes unmaintainable; phases drown. The 17-04 cluster-trigger and P4 bundling shift from optional to forced; **doing P4 + the trait canon now is cheaper than later** (every new note written against a declared home is one fewer future move).
- **7F (focused).** Verdict-vocabulary drift: 3 styles today + compound verdicts (articulate_simple) emerging; any future routing machinery (the explicit goal of the stalled standardization: RESUME reading `Overall:` lines) becomes impossible without canonicalization. P2's verdict trait is the highest-urgency trait.
- **7C (contrarian).** Extrapolate the AUTOMATION trajectory instead of the growth trajectory: when Baldwin-cycle machine editing arrives, the consumers of structure are machine editors needing stable anchors (section IDs, manifests) — and human-tidiness concerns become secondary. What follows: **prioritize machine-verifiability (P6) over cosmetic regularity**; a spec can stay shaggy as long as its manifest declares its shape truthfully.

---

## Piece-Level Inversions (meta-decision pieces; intervention-shape axis where property (v) fires)

**P1 (committed shape: ADD-CONTENT — a new canonical schema doc).** Reversed assumption: "the schema needs a NEW document." Alternative shapes: **REORGANIZE-WITHOUT-ADDING / exemplar-promotion** (annotate `routelister.md` as the golden instance; no new normative doc — 3C) and **DO-NOTHING** (schema stays implicit as convergent practice). What follows: exemplar-promotion avoids new-doc drift and reads as practice-not-law, but provides no home for the conformance matrix, mixes discipline content into the template signal, and leaves nothing for a manifest to reference; DO-NOTHING preserves status quo drift (refuted by 5-patch evidence). Both tested below; principal (ADD-CONTENT doc, thin + pointer-style) survives with exemplar-annotation absorbed as a complement (the doc POINTS at exemplars instead of restating them).

**P2 (committed shape: ADD-CONTENT — traits registry).** Reversed: "no registry; just REPAIR drift in place" (finish the worklist, fix the 5-patch absences, declare nothing). What follows: cheaper now; but the worklist itself already went stale once (editing_discpinlines.md's dead paths are the experiment having been run) — repair-without-source-of-truth demonstrably re-drifts. Tested; REPAIR-only KILLed as terminal strategy, absorbed as Phase-1 of the registry candidate (repair drift AS the traits are canonicalized).

**P3 (committed shape: REPAIR — extract duplicated runner blocks to a path-loaded shared file).** Reversed (3F): keep all runner text inline (runtime artifact unchanged — DO-NOTHING at runtime) and ADD-TEST instead: declare ONE canonical source for the shared blocks (`protocols/runner_core.md` as REFERENCE, not as runtime load) and check the three runners' inline copies against it (conformance-diff; drift becomes visible without changing what any runner loads). What follows: extraction (K3a) de-duplicates truly but is runtime-visible (every runner run now does one more path-load; install scripts + snapshot recipe gain a file; one more partial-load surface); conformance-diff (K3b) is runtime-invisible, catches drift, but keeps triple maintenance (edits must propagate, now with a checker nagging). Both tested; both survive → shape choice handed to Critique with the visibility-class envelope favoring K3b short-term, K3a behind a gate.

**P6 (committed shape: ADD-TEST — manifest sidecar + checker).** Reversed: "machine-readability needs no sidecar — make the spec itself the machine interface" (ADD-DIMENSION: stable canonical headings; the checker greps headings; zero sync-drift risk between spec and manifest). What follows: heading-as-interface is simpler and cannot desync, but couples prose freedom to machine needs (renaming a section breaks the contract), can't express per-discipline OUTPUT contracts (which the ghost checker's call site needs — it checks output files, not just specs), and offers no home for trait-instantiation status. Tested; hybrid survives: **manifest carries output-contract + trait status; headings stay free; the checker reads the manifest, not the prose.**

**P8 (committed criterion: runtime-invisible before runtime-visible).** Reversed (content-axis; property (v) not firing): "visible-first — take the riskiest move earliest, while the corpus is smallest and dependents fewest." What follows: genuine kernel (delay grows cost: more runners/specs later); but it contradicts the asymmetric-failure culture and skips the cheap-evidence step (invisible moves build the declaration layer that makes visible moves checkable). Tested → REFINE absorbed: invisible-first ordering stands, with an explicit **time-risk note** on P3/P8: the runner-core decision should not be deferred indefinitely; gate it on a date-or-event trigger, not "eventually."

---

## Inherited Frame Audit (between Generate and Test)

**Seed central assumption:** "reorganizing/declaring structure now is desirable." Explicit challenges present in the candidate set: 1C growth-rings ("reorganization is the wrong frame") and 3G ("organization is fine; access is missing") — both state the opposite/reject the frame. ✔ challenged.

**Piece-level load-bearing commitments and their challenges:** P1 ADD-CONTENT ↔ exemplar-promotion + DO-NOTHING (✔); P2 registry ↔ repair-in-place (✔); P3 extraction ↔ conformance-diff + runtime-DO-NOTHING (✔); P6 sidecar ↔ headings-as-interface (✔); P8 invisible-first ↔ visible-first (✔). Decomposition's slot/text seam (P1 owns slots / P2 owns text) is challenged structurally by 3C exemplar-promotion (in an exemplar world, slots and text co-live in the exemplar) — the seam survives because the surviving P1 candidate is pointer-style (slots) with P2 carrying text; recorded. ✔

**Upstream commitments scanned:** sensemaking A2 ("discipline references stay single-file this round") — challenged by 4-REMOVE (build-step world) and explored rather than inherited silently; the challenge LOST on structural grounds (no build culture; canon; snapshot machinery) and the deferral carries a revival trigger. A3 whole-harness scope — `Inherited-Frame-Audit-marked-inapplicable: structural reason — the runner-drift evidence (three-way block diff with real divergence) is itself the strongest exhibit of the inquiry's phenomenon and lies outside discipline specs, so any narrower frame would exclude primary evidence; contextual reason — sensemaking Phase 3 Ambiguity A3 adjudicated the scope against its strongest literal-reading counter at MED-HIGH after a Frame-exit enumeration of all "spec" referents.` 

**Firing condition:** no un-challenged assumption remains → audit does NOT fire; proceed to Test.

---

## Phase 3 — Test (5-test cycle) + dispositions

Candidates consolidated per piece (principal + surviving alternates):

| K | Candidate (piece) | Novelty | Scrutiny survival | Fertility | Actionability | Mech-independence | Disposition |
|---|---|---|---|---|---|---|---|
| K1 | **SPEC_SCHEMA doc** — thin canonical anatomy (sections + element-class slots + looseness/deviation rule + schema-version field) + conformance matrix; points at exemplars rather than restating them (P1) | Med (names existing practice) | Survives: strongest objection "another doc to drift" countered by thin/pointer design + manifest linkage | High (enables P2 slots, P6 fields, checker) | High (one doc + matrix) | YES — converged via 1G, 3G, 5-redesign, 6-native | **ACTIONABLE** |
| K1' | Exemplar-promotion (annotated golden spec) (P1-inv) | Med | Partial: content-bleed + no matrix home | Med | High | Single-mech (3C) | **ABSORBED into K1** (exemplar pointers) |
| K2 | **`traits/` registry** — cognitive_fixes shape; one file per trait (canonical wording, instantiation table, deviation log); Phase-1 = repair the 5-patch drift list (P2) | Med-High | Survives: "registry nobody maintains" countered by staging gates + kill conditions copied from proven precedent | High (drift repair, manifest fields, future routing) | High | YES — 2F + 5-patch + 7F | **ACTIONABLE** |
| K2' | Repair-in-place only (P2-inv) | Low | Fails: the stale worklist IS this strategy's prior failure | — | — | — | **KILL** → seed: "repair without source-of-truth re-drifts; canonical home is the fix" (absorbed as K2 Phase-1) |
| K3a | **Runner-core extraction** to path-loaded `protocols/runner_core.md` (P3) | Med | Survives with conditions: needs install-script + snapshot-recipe updates; runtime-visible gate | Med-High | Med (gated) | 2-mech (SP2 precedent + dedup logic) | **ACTIONABLE (gated: runtime-visible)** |
| K3b | **Single-source conformance-diff** — canonical source as reference; runners keep inline copies; checker diffs (P3-inv) | High (novel shape: declare+verify, don't move) | Survives: "triple maintenance remains" — true, but drift becomes mechanically visible | High (pattern generalizes to ALL trait copies) | High (runtime-invisible) | YES — 3F + 1F dual-render + 6-native linter pattern | **ACTIONABLE** |
| K4 | **Bundling playbook** — spread-map of innovate (15 notes / 9 overrides / prose web) + Form-2→Form-1 lifts from step_refinement's own catalog; move plans with verbatim-move statements (P4) | Low-Med (applies settled conventions) | Survives (conventions already committed; td-critique's per-phase edit TODAY is the live precedent that such moves work) | Med | High | YES — 7G urgency + placement convention | **ACTIONABLE** |
| K5 | **Lifecycle layout** — `references/` = live only; old_* → archive home; dev-history naming rule (P5) | Low | Survives (runtime-invisible; verified nothing loads old_*) | Low-Med | High | 2C combination | **ACTIONABLE** |
| K6 | **Per-spec manifest sidecar + checker sketch** — manifest = sections present + traits instantiated/deviations + OUTPUT-file contract (the runners' call-site need); checker reads manifest, prose stays free; useful manifest-only (conformance card) before any checker exists (P6) | High | Survives: desync risk countered by 4-ADD same-commit rule (staged) + checker-diffs; headings-only alternative absorbed for spec-side checks | **Highest** (unblocks ghost checker, Type-5 regression checks, future machine editing) | High (manifest now; checker later) | YES — 2G + 6-native + 7C | **ACTIONABLE** |
| K7a | **Corpus INDEX layer** — `cognitive_harness/INDEX.md`: map of specs, runners, protocols, registries, conventions (the "access not organization" answer) (P7) | Med | Survives trivially (pure addition) | Med | High | 3G + 5-redesign | **ACTIONABLE** |
| K7b | **SPEC_STANDARD.md** unified style-guide entry point (assembles scattered conventions BY POINTERS) (P7) | Med | Survives: "yet another doc" countered by pointer-only rule (no content moves from docs/canon) | High (single onboarding surface; the place K1 lives or links) | High | 5-redesign + 6-different(publishing) | **ACTIONABLE** (mergeable with K1/K7a) |
| K7c | **Codification pass ritual** — named, recurring, content-preserving consolidation (bundle rules to homes; provenance → history annex) with trigger notes>15/spec (P7) | High | Survives as DEFERRED (needs the declaration layer first; one live precedent exists: today's td-critique relocation) | Med | Med | 6-different(law) | **DEFERRED** — revival: any spec crosses 15 notes or a phase crosses the 17-04 cluster-trigger |
| K7d | Build-step compilation of modular sources (4-REMOVE) | High | Fails NOW (culture, canon, snapshot machinery) | High later | Low now | single-mech | **DEFERRED** — revival: checker tooling in routine use ≥1 month |
| K7e | Schema-version field (`schema: v1` per spec) (4-ADD-focused) | Med | Survives (3 lines per spec) | Med | High | 4-ADD | **ACTIONABLE** (sub-component of K1/K6) |
| K8 | **Invisible-first tiered roadmap** with per-step gates + time-risk note on the runner decision (P8) | Low | Survives incl. visible-first inversion (kernel absorbed as time-trigger) | High | High | P8-inv tested | **ACTIONABLE** |

**Artifact-grounding (6th test, fired — candidates make categorical claims about project state):** "3/7 specs instantiate the schema" — verified against the actual files (surfacing R2: surfacing/routelister/articulate_simple carry Identity/NOT-list/vocab/LAYER-1/2/Output anatomy; the four older ones don't). "Runners drift" — verified (MVL lacks timestamp policy present in MVLw/aMVLw; three-way block comparison in workspace). "Ghost checker" — verified (`tools/` absent; all three runners call it; every `_state.md` records manual fallback). "Load-by-path precedent" — verified (runners load `conclude.md`/`branch_inquiry.md` by path). "Worklist went stale" — verified (`editing_discpinlines.md` references `homegrown/` + `commands/` paths that no longer exist). No candidate's grounding claim failed → no RE-TEST-disposition rerouting needed for grounding. One **RE-TEST TRIGGER** recorded for a committed claim: K3b's survival recasts decomposition P3's framing (which presupposed extraction as THE move) — flagged for Critique to adjudicate the K3a/K3b shape choice explicitly rather than inheriting extraction silently.

**Axis coverage check:** relevant orthogonal axes of the candidate set — *abstraction layer* (content-structure K2/K4 · access K7a/K7b · declaration K1/K6/K7e · verification K6/K3b · timing-ritual K7c), *visibility class* (invisible: K1,K2,K4,K5,K6,K7a,K7b,K7e,K3b · visible-gated: K3a · deferred-visible: K7d), *adoption timing* (now / gated / deferred — all represented). Each axis has ≥1 variant; no single-axis collapse. **Per-piece mechanism trace:** every P1–P8 piece has ≥1 candidate with named mechanism lineage (table above) — no row inherited silently from upstream without mechanism work.

**Mechanism-independence shared-input check:** the strongest convergence — "declare + verify, don't rewrite" (K1/K6/K3b core) — is reached from FOUR different grounds: inversion on the seed (3G access-layer), absence-bidirectional (mechanisms exist, naming missing), native domain transfer (schema+validator), dual-render lens (1F). These do not share a single upstream commitment (3G challenges the seed itself) → convergence judged INDEPENDENT, not tautological.

---

## Assembly Check

The survivors assemble into one emergent architecture — working name **"Declared-Form Architecture"** (the corpus gets a type system without a compiler):

```
K7b SPEC_STANDARD.md (entry point; pointers to all conventions)
 └─ K1 SPEC_SCHEMA (the anatomy + schema-version + conformance matrix; points at exemplars)
     ├─ K2 traits/ registry (canonical wording; instantiation tables; drift repair as Phase 1)
     ├─ K6 per-spec manifest (sections + traits + OUTPUT contract) ──→ makes ghost structural_check.sh buildable
     │       └─ K3b conformance-diff generalizes: runner blocks = traits with 3 instantiations
     ├─ K7a INDEX (corpus map)
     └─ K4 bundling + K5 lifecycle (cleanup moves, per settled conventions)
K8 roadmap orders all of it invisible-first; K3a extraction + K7c codification + K7d build wait behind gates
```

**Emergent value beyond the parts:** (1) K3b reframes the runner problem as a SPECIAL CASE of K2's trait instantiation — one mechanism (declared source + conformance check) covers both runner blocks AND the 11 Loading notes AND verdict vocabulary, collapsing what looked like three different problems; (2) K1+K6 jointly convert the loose-template doctrine from a vibe into a mechanism (schema-version + declared deviation); (3) the assembly gives the regression-detection roadmap (Type-5 symptoms) its missing input — connecting this inquiry's structural work to the project's stated end-goal. The assembly is evaluated as a candidate itself in Critique alongside its parts.

---

## Mechanism Coverage (Telemetry)

- Generators applied: **4 / 4** (Combination, Absence Recognition, Domain Transfer, Extrapolation)
- Framers applied: **3 / 3** (Lens Shifting, Constraint Manipulation — both directions, Inversion — depth-checked + multi-axis)
- Variations: 21 mechanism-variations + 5 piece-level inversions
- Convergence: **YES — 4 mechanisms converge** on "declare + verify, don't rewrite" (independent grounds; shared-input check passed)
- Survivors tested: 13/13 via the 5-test cycle (+ artifact-grounding fired and passed on all state claims)
- Failure modes observed: none (premature evaluation — generation preceded testing; single-mechanism trap — full coverage; early frame lock — 5 piece-inversions + frame audit; innovation without grounding — artifact-grounding test run; mechanism exhaustion — n/a; survival bias — most uncomfortable candidate [1C do-nothing/growth-rings] given full test, its kernel absorbed)
- **Production-task telemetry:** per-piece mechanism log — P1 `[1G:content, 3C:intervention-shape, 5-redesign:content]`; P2 `[2F:content, 5-patch:content, inv:intervention-shape]`; P3 `[2G-adjacent, 3F:intervention-shape]`; P4 `[7G:content]` (content-production); P5 `[2C:content]` (content-production); P6 `[6-native:content, 2G:content, inv:intervention-shape]`; P7 `[3G, 5-redesign, 6-different×2, 4-REMOVE]` (content-production lane); P8 `[inv:content(ordering)]`. Meta-decision classification: P1/P2/P3/P6/P8 meta-decision, P4/P5/P7 content-production. **Piece-level Inversion compliance: satisfied × 5 / violated × 0 / overridden × 0**; property-(v) pieces (P1, P2, P3, P6) all have intervention-shape-axis inversions naming shape X, alternative Y, consequences, and 5-test results.
- **Overall: PROCEED** (full coverage + independent convergence + all survivors tested + per-piece compliance satisfied)

**Next discipline input:** Critique receives 11 ACTIONABLE candidates (K1, K2, K3a, K3b, K4, K5, K6, K7a, K7b, K7e, K8), 3 DEFERRED (K7c, K7d + visible-first kernel as time-trigger note), 1 KILL-with-seed (K2'), 1 absorbed (K1'), plus the Assembly as a composite candidate — with one explicit adjudication request: the K3a vs K3b shape choice (the RE-TEST trigger on decomposition's extraction framing).
