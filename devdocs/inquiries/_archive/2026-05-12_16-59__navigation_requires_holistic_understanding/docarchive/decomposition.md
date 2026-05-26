# Decomposition: /navigation requires holistic understanding

## User Input

`devdocs/inquiries/2026-05-12_16-59__navigation_requires_holistic_understanding/_branch.md`

Operating on: `_branch.md` + `exploration.md` + `sensemaking.md`. Sensemaking stabilized a refinement of B-refined: add a Setup sub-phase to /navigation's spec; name the operation "context-comprehension at navigation depth"; specify its depth (between /explore's labeling and sense-making's anchor-extraction); provide an inter-rater-agreement heuristic; preserve the specialization framing. This decomposition partitions the adoption package — what concrete artifacts must be produced so Innovation has bounded targets to generate variations for and Critique has bounded targets to stress-test.

---

## The Whole

**The adoption package for landing the refinement into /navigation's canonical spec + producing this inquiry's finding artifact.**

Adoption requires concrete spec edits to `homegrown/navigation/references/navigation.md` and a finding document. The whole is not a runtime artifact — it is a documentation/spec change set with bounded scope.

---

## Step 1 — Coupling Topology

### Elements identified

E1. The Setup sub-phase's name, position in spec, content, inputs, output, depth specification.
E2. The depth heuristic (context-comprehension-vs-anchor-extraction; analog to labeling-vs-meaning).
E3. The Process Model section update (where the Setup sub-phase plugs in; how it relates to the existing Step 1 "Read the Cycle's Output").
E4. The Identity / "What Navigation Is" section update (mention context-comprehension; the depth specification; preserve specialization framing).
E5. The NOT-list refinement (anchor-extraction = sense-making depth; context-comprehension = navigation depth; clarification).
E6. New failure modes (drift from context-comprehension into anchor-extraction; drift into predictive modeling; "navigate wrong" mode the user originally named; under-named-comprehension as historical-recognition).
E7. Depth hierarchy cross-reference (labeling → context-comprehension → anchor-extraction → predictive-model; how this is represented in /navigation's spec or referenced as project-wide).
E8. Finding document structure (terminology section; change rationale; B-refined→B-refined-2 narrative; cross-references to spec edits).
E9. Vocabulary/translation note: user-language "holistic understanding" → spec-language "context-comprehension at navigation depth."
E10. Forward-compatibility note: at L3+ autonomy, the Setup output becomes the input an autonomous selector reads.

### Coupling pairs

| Pair | Coupling | Reason |
|---|---|---|
| E1 ↔ E2 | strong | E1's depth specification is operationalized by E2's heuristic. Cannot write one without the other |
| E1 ↔ E3 | strong | Setup sub-phase IS placed in Process Model; the two are one structural change in two sections |
| E1 ↔ E4 | moderate | Identity section mentions the operation; spec text in Setup defines it |
| E1 ↔ E5 | moderate | NOT-list refinement clarifies the boundary the Setup sub-phase operationalizes |
| E2 ↔ E6 | moderate | Failure modes describe drift detected via the heuristic |
| E1 ↔ E7 | moderate | Depth specification fits within the depth hierarchy; cross-reference grounds it |
| E1 ↔ E10 | weak | Forward-compatibility is a single note; doesn't drive Setup's content |
| E8 ↔ all | weak-to-moderate | Finding doc references all spec edits but doesn't determine their content |
| E9 ↔ E1, E4, E8 | weak | One-time vocabulary translation note; affects intro language only |

### Coupling clusters

- **Cluster A (Spec edit core):** E1 + E2 + E3 + E4 + E5 + E10. The Setup sub-phase's existence forces coordinated changes to Process Model, Identity, NOT-list, plus the heuristic and forward-compatibility note. High internal coupling.
- **Cluster B (Failure modes):** E6. Coupled to A (especially E2) but operationally separable — failure modes are an additive spec section, can be drafted independently after A is decided.
- **Cluster C (Cross-cutting):** E7. Couples to A (specifies where Setup sits in the depth hierarchy) but the form of the cross-reference (inline list vs separate sub-section vs project-wide doc reference) is a presentation choice partially independent of A's content.
- **Cluster D (Vocabulary):** E9. One-paragraph translation note appearing in 2-3 places. Low coupling to others.
- **Cluster E (Finding doc):** E8. References all clusters but doesn't determine their content.

### Boundaries (low-coupling valleys)

- Boundary 1: between Spec-edit core (A) and Failure-modes (B). After A is decided, B is additive.
- Boundary 2: between Spec-edit core (A) and Cross-cutting (C). C's form (inline vs separate) is independent of A's content.
- Boundary 3: between Spec content (A+B+C) and Finding doc (E). Finding doc is the inquiry's artifact; spec content is what changes in the project.
- Boundary 4: Vocabulary translation (D) is a fine-grained cross-cluster annotation; folds into the relevant pieces (Setup spec, Identity update, Finding intro).

---

## Step 2 — Boundaries (Top-Down)

From the coupling clusters, the natural pieces are:

- **P-α (Cluster A, core)** — the Setup sub-phase spec content, including the Process Model update, Identity section update, NOT-list refinement, and forward-compatibility note. THE LOAD-BEARING PIECE.
- **P-β (Cluster A, internal)** — the depth heuristic (context-comprehension-vs-anchor-extraction). Couples with P-α but is self-contained as a defined-once-and-referenced artifact.
- **P-γ (Cluster B)** — new failure modes for /navigation's spec.
- **P-δ (Cluster C)** — depth hierarchy cross-reference (form + content).
- **P-ε (Cluster E)** — finding document structure.

**Vocabulary translation (Cluster D)** is folded into P-α and P-ε as a one-paragraph callout in each. Not a separate piece.

---

## Step 3 — Bottom-up validation

### Atoms (irreducible elements)

- "Setup sub-phase name" — atom.
- "Setup sub-phase placement" (before Enumerate) — atom.
- "Setup sub-phase inputs/output" — atom.
- "Depth specification" (between labeling and anchor-extraction) — atom.
- "Heuristic statement" (inter-rater-agreement among naive scanners) — atom.
- "Heuristic edge cases" (domain jargon; contested terminology) — atom.
- "Failure mode statement" (per mode) — atom.
- "Depth hierarchy diagram or table" — atom.
- "Finding terminology section" — atom.
- "Finding change-rationale section" — atom.

### Atom-to-piece grouping check

- Setup atoms → P-α. ✓ Cohesive.
- Heuristic atoms → P-β. ✓ Cohesive.
- Failure-mode atoms → P-γ. ✓ Cohesive.
- Depth-hierarchy atom → P-δ. ✓ Cohesive.
- Finding atoms → P-ε. ✓ Cohesive.

**Split check (atoms grouped that should be apart):**
- Are Setup-spec atoms and heuristic atoms tight enough that P-α and P-β should merge? Tested: the heuristic is REFERENCED FROM Setup spec but is self-contained content (analogous to /explore's labeling-vs-meaning being a §4.4 sub-section, not inside §3.4 cycle). KEEP SEPARATE.

**Boundary-split check (atoms apart that should be together):**
- Is the NOT-list refinement (folded into P-α) really part of P-α and not its own piece? Tested: the NOT-list refinement is one bullet ("anchor-extraction at sense-making depth is excluded; context-comprehension at navigation depth is allowed"); too small for its own piece; fits in P-α's Identity-section update. CONFIRMED FOLD.

**Confidence:** HIGH — top-down and bottom-up agree.

---

## Step 4 — Question Tree

### P-α — Setup sub-phase spec content

**Q-α:** How should the Setup sub-phase be specified in /navigation's reference file — including its name, position in spec, inputs, output, depth specification, and the cascading edits to Identity / NOT-list / Process Model needed for consistency?

**Verification:**
- [ ] Sub-phase has a project-native name (default candidate: "Setup" — analogous to /explore's "boundary-discovery").
- [ ] Sub-phase position is specified: BEFORE Enumerate; AFTER `/navigation`-invocation reading of `_branch.md`.
- [ ] Inputs specified: `_branch.md` (Goal field) + SIC cycle output (C verdicts, frontier questions, telemetry, scope check) + current state.
- [ ] Output specified: internal context model (not a separate Transform); consumed by Enumerate / Label / Guide / Select.
- [ ] Depth specified: DESCRIPTIVE; between /explore's labeling and sense-making's anchor-extraction.
- [ ] Identity section ("What Navigation Is") mentions context-comprehension and the depth.
- [ ] NOT-list refined: meaning-extraction (anchor-extraction at sense-making depth) excluded; context-comprehension at navigation depth allowed.
- [ ] Process Model updated: existing "Step 1: Read the Cycle's Output" is either replaced by or follows from the Setup sub-phase.
- [ ] Forward-compatibility note: at L3+ autonomy, Setup's output is the autonomous selector's input.
- [ ] Vocabulary translation: spec text uses "context-comprehension at navigation depth"; intro paragraph acknowledges user-facing motivation ("holistic understanding").

### P-β — Depth heuristic

**Q-β:** How is the boundary between context-comprehension (navigation depth) and anchor-extraction (sense-making depth) operationally checked, including the heuristic statement, examples, and edge cases?

**Verification:**
- [ ] Heuristic stated: inter-rater-agreement among naive scanners on operative-state + goal description.
- [ ] Naive scanner defined: one who reads SIC outputs + `_branch.md` Goal field without having done sense-making's anchor-extraction.
- [ ] Pass criterion: multiple naive scanners produce roughly the same description → context-comprehension (acceptable at navigation depth).
- [ ] Fail criterion: scanners need a conceptual model to articulate the description → anchor-extraction (sense-making's territory).
- [ ] At least 2 concrete examples (one positive: state description that's at context-comprehension depth; one negative: state description that's at anchor-extraction depth).
- [ ] Edge cases addressed: domain jargon; contested terminology; high-confidence pattern (treat as context-comprehension at low confidence; deeper interpretation is sense-making's job).
- [ ] Self-reference acknowledgment: the heuristic is a meta-cognitive move (analogous to /explore's §4.4).

### P-γ — New failure modes

**Q-γ:** What new failure modes should /navigation's spec name to guard against drift related to context-comprehension, including the originally-named "navigate wrong" mode the user pointed at?

**Verification:**
- [ ] Failure mode named: "context-comprehension drift into anchor-extraction" (the Setup sub-phase starts extracting perspective-dependent anchors). Recognition signal + prevention specified.
- [ ] Failure mode named: "context-comprehension drift into predictive modeling" (the Setup sub-phase starts building cycle-dynamics predictive models). Recognition signal + prevention specified.
- [ ] Failure mode named: "implicit-comprehension" (the discipline runs Enumerate without first running Setup; comprehension is left to ad-hoc judgment; user's "navigate wrong" concern). Recognition signal + prevention specified.
- [ ] Failure mode named: "context-model staleness" (Setup's output is reused across iterations without re-running; the state/goal may have shifted). Recognition signal + prevention specified.
- [ ] All new modes cross-reference P-β heuristic.

### P-δ — Depth hierarchy cross-reference

**Q-δ:** How should /navigation's spec express the project depth hierarchy (labeling → context-comprehension → anchor-extraction → predictive-model), including form (inline list vs sub-section vs project-wide doc reference) and content?

**Verification:**
- [ ] Form chosen and justified: inline list within /navigation's spec; OR a sub-section in /navigation's spec; OR a project-wide doc with /navigation cross-referencing.
- [ ] Content stated: each depth named + monotonic-containment relation expressed.
- [ ] /navigation's depth (context-comprehension) is placed clearly between /explore's depth (labeling) and sense-making's depth (anchor-extraction).
- [ ] Each adjacent boundary references the appropriate heuristic (labeling-vs-meaning for /explore↔/navigation; P-β heuristic for /navigation↔sense-making).
- [ ] Out-of-scope note: a project-wide cross-discipline depth-hierarchy doc is identified as a research-frontier item (separate inquiry trigger).

### P-ε — Finding document structure

**Q-ε:** What does the finding.md for this inquiry look like — including sections, framing (B-refined-refined vs B-refined-replaced), terminology, change rationale, cross-references to spec edits, and the relationship-to-prior-findings narrative?

**Verification:**
- [ ] Finding framed as REFINEMENT of B-refined (not replacement).
- [ ] Question stated verbatim from `_branch.md`.
- [ ] Finding Summary section: 6-8 bullet points (matches prior /explore-thread findings).
- [ ] Terminology section: user-language ↔ project-native mapping ("holistic understanding" ↔ "context-comprehension at navigation depth").
- [ ] Change rationale: why refinement, not replacement (workspace invariant + transclusion pattern collapse the false binary).
- [ ] B-refined → B-refined-2 narrative: what changed, what survived.
- [ ] Next Actions section: MUST / COULD / DEFERRED structure (matches prior findings).
- [ ] Cross-references: to all 4 prior /explore-thread findings + the new spec edits in /navigation.
- [ ] Open Questions section: monitoring + refinement triggers + research frontiers (matches prior findings).
- [ ] Source Input section: raw user input quoted (per discipline convention).

---

## Step 5 — Interface Map

| From | To | What flows | Direction | Notes |
|---|---|---|---|---|
| P-α | P-β | depth specification → heuristic spec | one-way | P-α's "between labeling and anchor-extraction" determines what the heuristic must distinguish |
| P-β | P-α | heuristic statement → referenced in Setup spec | one-way | P-α references the heuristic by name; doesn't restate it |
| P-α | P-γ | Setup sub-phase existence → failure modes apply | one-way | failure modes presuppose the Setup operation |
| P-β | P-γ | heuristic → failure mode recognition signals | one-way | "drift detected via heuristic" |
| P-α | P-δ | depth specification → hierarchy entry | one-way | /navigation's depth is one slot in the hierarchy; P-α defines it; P-δ places it |
| P-δ | P-α | hierarchy structure → spec cross-reference | one-way | P-α points to P-δ's representation |
| P-α | P-ε | spec edits → finding cross-references | one-way | finding references but doesn't determine |
| P-β | P-ε | heuristic → finding terminology section | one-way | finding mentions the heuristic |
| P-γ | P-ε | failure modes → finding narrative | one-way | finding mentions new failure modes |
| P-δ | P-ε | depth hierarchy → finding cross-reference | one-way | finding cross-references the hierarchy |

### Assumptions-not-data check

What assumptions does each piece make about what others provide?

- **P-α assumes** P-β's heuristic exists and is referenceable (not inlined). VALID — heuristic is short and self-contained.
- **P-α assumes** P-δ has a representation form chosen (inline / sub-section / project-doc). VALID — P-α's text adapts to P-δ's form choice via a single cross-reference link.
- **P-γ assumes** P-α has placed the Setup sub-phase (Setup exists → failure modes can describe it). VALID — sequential dependency, addressed in Step 6.
- **P-γ assumes** P-β has stated the heuristic (drift detection uses heuristic terms). VALID — Step 6 orders this.
- **P-δ assumes** /navigation's specialization-from-/explore framing survives. VALID — sensemaking confirmed this; not in dispute.
- **P-ε assumes** all of P-α through P-δ have produced specific artifacts to cross-reference. VALID — sequential dependency, addressed in Step 6.

**Hidden coupling check:** all assumptions are explicit in the interface map. No hidden assumptions detected.

---

## Step 6 — Dependency Order

**Phase 1 (no dependencies; can start in parallel):**
- P-β — heuristic spec. Self-contained.
- P-δ — depth hierarchy form + content. Depends on existing depth boundaries (already specified in /explore and sense-making), not on P-α.

**Phase 2 (depends on Phase 1):**
- P-α — Setup sub-phase spec. Depends on P-β (cross-reference) and P-δ (placement in hierarchy).

**Phase 3 (depends on Phase 2):**
- P-γ — failure modes. Depends on P-α (Setup exists) and P-β (heuristic terms).

**Phase 4 (depends on Phase 3):**
- P-ε — finding doc. Depends on all prior pieces being specifiable (so cross-references resolve).

```
Phase 1: P-β  ║  P-δ      (parallel)
Phase 2: P-α                (after Phase 1)
Phase 3: P-γ                (after P-α + P-β)
Phase 4: P-ε                (after all)
```

**Circular check:** none. All flows are forward.

**Parallel opportunity:** P-β and P-δ can be drafted in the same Innovation pass.

---

## Step 7 — Self-Evaluate

### Minimum 3 dimensions (always)

**Independence:** Can each piece be worked on without the others existing?

- P-β heuristic — yes; it's a self-contained boundary rule. PASS.
- P-δ depth hierarchy — yes; the form choice and content can be drafted from existing depth boundaries. PASS.
- P-α Setup spec — partially; needs P-β heuristic name to reference and P-δ form to know where to point. Both can be drafted in parallel with P-α, with placeholder cross-references resolved at end of Phase 2. PASS (with placeholder pattern).
- P-γ failure modes — needs P-α Setup to exist (modes describe Setup drift). PASS (sequential).
- P-ε finding — needs all to be specifiable. PASS (Phase 4).

All pass. **Independence: PASS.**

**Completeness:** Do the pieces cover the whole (adoption package)?

- Spec edit content: P-α + P-β + P-γ + P-δ. ✓
- Finding artifact: P-ε. ✓
- Vocabulary translation: folded into P-α + P-ε. ✓
- Forward-compatibility note: folded into P-α. ✓

Anything missing?

- /meta-loop cascade? — Sensemaking determined this refinement does NOT cascade to /meta-loop (sub-phases are internal to disciplines; runners don't reach inside). No piece needed.
- /MVL+ cascade? — Same; no piece needed.
- Updates to prior findings (the B-refined finding)? — The prior finding stands; this inquiry's finding cross-references it as a refinement. No edit-to-prior needed.
- Updates to other discipline references (/explore, sense-making)? — None needed (their depths are unchanged; /navigation's depth is a new addition).

**Completeness: PASS.**

**Reassembly:** Pieces + interfaces = whole?

Given:
- P-α specifies the Setup sub-phase with all field commitments.
- P-β provides the operational heuristic for the new boundary.
- P-γ guards against drift via failure modes.
- P-δ places the new depth in the project hierarchy.
- P-ε produces the finding artifact.

Reconstructing the original problem: "land the refinement to B-refined that adds explicit context-comprehension to /navigation's spec." The 5 pieces + their interfaces produce: a coherent spec edit + a heuristic + failure modes + a hierarchy entry + a finding. Reassembly produces the adoption package.

**Reassembly: PASS.**

### Determination-mechanism check

Are there load-bearing concepts whose use depends on runtime determination? Yes — the context-comprehension-vs-anchor-extraction boundary is itself a runtime determination (the heuristic must be applied during /navigation execution). Is there a piece addressing HOW the determination is made? Yes — P-β specifies the heuristic. **PASS.**

### Full 7-dimension evaluation (this is a moderately high-stakes spec refinement; running full)

| Dimension | Status | Notes |
|---|---|---|
| Independence | PASS | each piece workable on its own (with placeholder cross-refs in Phase 2 if needed) |
| Completeness | PASS | adoption package fully covered |
| Reassembly | PASS | pieces + interfaces reconstruct the refinement |
| Tractability | PASS | each piece is a single focused spec-text-writing pass at Innovation's scope |
| Interface clarity | PASS | all cross-piece flows explicit in Step 5; assumptions-not-data check applied |
| Balance | PASS-with-note | P-α is the largest piece (it's the load-bearing one); P-β through P-ε are smaller. Imbalance is structural to the problem (P-α aggregates the spec text; others are sub-references), not a decomposition flaw |
| Confidence | PASS | top-down boundaries from coupling clusters and bottom-up atom check agreed in Step 3 |

**Self-evaluation overall: PASS.**

---

## Failure-mode checklist

- **Premature decomposition:** sensemaking stabilized the whole before this step. ✓
- **Wrong boundaries:** boundaries cut at low-coupling valleys (between Spec-edit core / Failure-modes / Cross-cutting / Vocabulary / Finding). ✓
- **Hidden coupling:** assumptions-not-data check applied in Step 5; no hidden coupling detected. ✓
- **Missing pieces:** completeness check applied in Step 7; nothing missed. ✓
- **Over-decomposition:** 5 pieces for a 5-cluster problem; vocabulary folded rather than split into a 6th. ✓
- **Ignoring dependencies:** Step 6 explicit ordering; circular check passed. ✓
- **Imbalanced decomposition:** P-α is largest by design (load-bearing aggregator); other pieces are smaller-but-coherent. Acceptable. ✓

---

## Final Deliverable

### Coupling Map

5 clusters: A (Spec-edit core) tightly coupled internally + 4 lower-coupling clusters (Failure-modes B; Cross-cutting C; Vocabulary D; Finding E). D folds into A and E; A+B+C+E remain as 4+1 = 5 pieces.

### Question Tree

```
Q-Whole: How is the refinement to B-refined (adding context-comprehension at navigation depth as a Setup sub-phase) landed into /navigation's canonical spec + a finding artifact?

├── P-α: Setup sub-phase spec content (Q-α)
├── P-β: Depth heuristic (Q-β)
├── P-γ: New failure modes (Q-γ)
├── P-δ: Depth hierarchy cross-reference (Q-δ)
└── P-ε: Finding document structure (Q-ε)
```

### Interface Map

10 directed flows; all one-way (no circular). Strongest pair: P-α ↔ P-β (depth spec ↔ heuristic). Phase-4 piece P-ε aggregates references to all others.

### Dependency Order

```
Phase 1 (parallel): P-β  ‖  P-δ
Phase 2:            P-α
Phase 3:            P-γ
Phase 4:            P-ε
```

### Self-Evaluation

7/7 dimensions PASS. Determination-mechanism check PASS. All failure modes guarded.

**Verdict: PROCEED to Innovation.**
