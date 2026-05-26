# Decomposition: Maintenance work for the 5 fault dimensions

## User Input

`devdocs/inquiries/2026-05-15_00-34__loop_diagnose__explore_from_scratch_faults/_branch.md` plus upstream `exploration.md` (26 candidates / 6 regions) and `sensemaking.md` (SV1→SV6; 5 distinct fault dimensions; 3 attribution categories DIRECT/FRAMEWORK-ENABLED/NOT-ATTRIBUTABLE; iter-2 partial-correction status; maintenance scope locked to current spec/process; 5 maintenance-piece candidates handed for verification).

The whole to decompose: the diagnostic's maintenance work across 5 fault dimensions — the layer-test step (Dimension 1), the NOT-list restructure (Dimension 2), the deferral-binding mechanism (Dimension 3), the self-reference + COULD-vs-MUST gating (Dimension 4), and the anatomy-as-template amendment (Dimension 5).

---

## Step 1 — Coupling Map

### Atomic elements identified in the maintenance whole

| ID | Atom | Belongs to (sensemaking dimension) |
|---|---|---|
| a1 | Layer-test step (the actual cognitive operation: surface meaning-vs-structural layer ambiguity before structural commitment) | Dim 1 |
| a2 | Where the layer-test lives (sensemaking spec vs MVL+ spec) | Dim 1 |
| a3 | NOT-list restructure or removal text (the actual edit to `homegrown/explore/references/explore.md`) | Dim 2 |
| a4 | User-confirmation gate for NOT-list change (mirroring iter-1's failed MUST gate) | Dim 2 |
| a5 | Documenting the rationale for restructure in the spec itself | Dim 2 |
| a6 | Deferral-binding mechanism design (new meta-protocol vs CONCLUDE extension) | Dim 3 |
| a7 | Revival-trigger verification check (the actual binding check at spec-edit time) | Dim 3 |
| a8 | Where the deferral-binding lives (CONCLUDE.md or new `homegrown/protocols/deferred_governance.md`) | Dim 3 |
| a9 | Self-reference check (added to MVL+'s pre-pipeline) | Dim 4 |
| a10 | COULD-vs-MUST gating (CONCLUDE refuses to ship adoption-ready COULD until MUST resolved) | Dim 4 |
| a11 | Where the gating lives (CONCLUDE.md and/or MVL+ runner) | Dim 4 |
| a12 | Anatomy-as-template-not-mandate amendment to `thinking_disciplines/anatomy_of_disciplines.md` | Dim 5 |
| a13 | Discipline-specific anatomy divergence guidance (when allowed; how to declare) | Dim 5 |
| a14 | Per-piece evaluation gates (achievable counts: "next 3 spec rewrites" not "30 A/B runs") | cross-cutting |
| a15 | Per-piece risk class (low/medium/high) | cross-cutting |
| a16 | Per-piece verification criteria (what does "done" look like) | cross-cutting |

### Coupling assessment (pairwise change-propagation)

For each pair: "if I change A, does B need to change?"

**Strong coupling clusters:**

- **Cluster I — Dim 1 maintenance (a1, a2):** layer-test cognitive operation + its location. Tight cohesion — both shape the same intervention.
- **Cluster II — Dim 2 maintenance (a3, a4, a5):** NOT-list restructure + user-confirmation gate + spec-internal rationale. Tight cohesion — they form one /explore-spec edit operation.
- **Cluster III — Dim 3 maintenance (a6, a7, a8):** deferral-binding mechanism + revival-trigger verification + location. Tight cohesion — they form one governance-mechanism design.
- **Cluster IV — Dim 4 maintenance (a9, a10, a11):** self-reference check + COULD-vs-MUST gating + location. Tight cohesion — both are gating mechanisms in the runner/CONCLUDE pipeline.
- **Cluster V — Dim 5 maintenance (a12, a13):** anatomy-template amendment + divergence guidance. Tight cohesion — they form one universal-anatomy edit operation.
- **Cross-cutting (a14, a15, a16):** evaluation gates + risk class + verification criteria recur across all five pieces. Each piece needs its own; pattern is shared.

**Cross-cluster coupling assessment:**

| From → To | Coupling | Why |
|---|---|---|
| Cluster I (Dim 1) → Cluster IV (Dim 4) | Moderate | If Dim 1's layer-test surfaces a MUST, Dim 4's COULD-vs-MUST gating handles the propagation. Layer-test PRODUCES MUSTs; gating CONSUMES them. |
| Cluster I (Dim 1) → Cluster V (Dim 5) | Weak | Layer-test could surface "this discipline doesn't fit the universal anatomy" → an anatomy-divergence claim (which P5's amendment would frame). Indirect. |
| Cluster II (Dim 2) → Cluster IV (Dim 4) | Moderate | Dim 2's user-confirmation gate (a4) is an INSTANCE of Dim 4's COULD-vs-MUST gating mechanism (a10). Dim 2 USES; Dim 4 BUILDS. |
| Cluster II (Dim 2) → Cluster V (Dim 5) | Moderate | Dim 2's NOT-list restructure is a divergence from the universal-anatomy commitment to identity-by-negation; Dim 5's amendment would FRAME why the divergence is acceptable. Conceptual coupling, not implementation coupling. |
| Cluster II (Dim 2) → Cluster III (Dim 3) | Weak | Dim 2 is a one-shot spec edit; Dim 3 is a governance mechanism that would PREVENT future Dim-2-like situations. They don't directly interact; they cover overlapping surface from different sides. |
| Cluster III (Dim 3) → Cluster IV (Dim 4) | **STRONG** | Both extend CONCLUDE (or a sibling meta-protocol). Both are gating mechanisms. Both fire at CONCLUDE-time or spec-edit-time. They share implementation substrate. **Acknowledged coupling — not hidden.** |
| Cluster III (Dim 3) → Cluster V (Dim 5) | Weak | Both are meta-level cleanups, but at different levels (governance mechanism vs anatomy doc). |
| Cluster IV (Dim 4) → Cluster V (Dim 5) | Weak | Both are meta-level, different files. |
| Cross-cutting (a14–a16) → all clusters | Moderate (uniform) | Each piece needs evaluation gates / risk class / verification criteria. Pattern shared; each instance distinct. |

### Coupling topology summary

Five clusters with **one strong cross-cluster edge** (Cluster III ↔ Cluster IV — both extend CONCLUDE or a sibling meta-protocol with shared substrate) and **three moderate edges** (Cluster I ↔ Cluster IV — layer-test produces MUSTs; Cluster II ↔ Cluster IV — Dim 2's gate is an instance of Dim 4's mechanism; Cluster II ↔ Cluster V — Dim 2's restructure is conceptually framed by Dim 5's anatomy-flexibility). Cross-cutting concerns (a14–a16) apply uniformly.

**The strong III ↔ IV edge is acknowledged as an implementation-substrate share**, not a hidden coupling. The pieces remain independently designable (different change drivers) but their implementation might co-locate in CONCLUDE.md.

---

## Step 2 — Detect Boundaries (Top-Down)

From the coupling map, the natural cuts:

| Cut | Between | Coupling across cut | Boundary type |
|---|---|---|---|
| B1 | Cluster I (Dim 1) ↔ Cluster II (Dim 2) | weak | Clean (different files; different change drivers) |
| B2 | Cluster I (Dim 1) ↔ Cluster III (Dim 3) | weak | Clean |
| B3 | Cluster I (Dim 1) ↔ Cluster IV (Dim 4) | moderate (one-way: layer-test → gating mechanism, MUST flow) | Clean interface (Cluster I produces MUSTs; Cluster IV consumes) |
| B4 | Cluster I (Dim 1) ↔ Cluster V (Dim 5) | weak | Clean |
| B5 | Cluster II (Dim 2) ↔ Cluster III (Dim 3) | weak | Clean |
| B6 | Cluster II (Dim 2) ↔ Cluster IV (Dim 4) | moderate (one-way: Dim 2 gate is an instance of Dim 4 mechanism) | Clean interface (Cluster IV provides; Cluster II uses) |
| B7 | Cluster II (Dim 2) ↔ Cluster V (Dim 5) | moderate (one-way: Dim 5 frames Dim 2 divergence) | Clean interface (Cluster V frames; Cluster II benefits) |
| B8 | Cluster III (Dim 3) ↔ Cluster IV (Dim 4) | **strong** (shared substrate at CONCLUDE) | Acknowledged but not collapsing — change drivers differ |
| B9 | Cluster III (Dim 3) ↔ Cluster V (Dim 5) | weak | Clean |
| B10 | Cluster IV (Dim 4) ↔ Cluster V (Dim 5) | weak | Clean |

5 pieces, 10 boundaries. The strong B8 boundary (Dim 3 ↔ Dim 4 shared CONCLUDE substrate) is preserved as an explicit interface for co-design / shared-implementation; the pieces are NOT merged because their change drivers (deferral-binding vs COULD-vs-MUST gating) are independently load-bearing.

---

## Step 3 — Validate Boundaries (Bottom-Up)

Pick atomic elements and check whether they group naturally into the same clusters Step 2 identified:

- **a4 (user-confirmation gate for NOT-list change):** belongs with Dim 2 (the NOT-list edit needs the gate). Bottom-up agrees: Cluster II. ✓ But also: a4 is structurally an INSTANCE of a10 (Dim 4's COULD-vs-MUST mechanism). The element appears in Cluster II but DEPENDS on Cluster IV's machinery. Validates B6 as a clean one-way interface.
- **a7 (revival-trigger verification check):** belongs with Dim 3 (the binding check is the deferral mechanism's heart). Bottom-up agrees: Cluster III. ✓ Could share implementation substrate with a10 (B8 strong coupling) but operationally distinct.
- **a10 (COULD-vs-MUST gating):** belongs with Dim 4. Bottom-up agrees: Cluster IV. ✓ Validates B8 as shared-substrate-not-merge.
- **a13 (discipline-specific anatomy divergence guidance):** belongs with Dim 5. Bottom-up agrees: Cluster V. ✓ This is what Dim 2's NOT-list restructure would invoke (B7 interface).
- **a14–a16 cross-cutting:** these recur in every piece. Bottom-up agrees they're cross-cutting, not piece-specific. ✓

**Confidence scoring:** Top-down and bottom-up agree on all 10 boundaries. The strong B8 boundary is acknowledged with explicit interface (shared CONCLUDE substrate). **HIGH confidence.**

---

## Step 4 — Question Tree

Five pieces, each a question with verification criteria.

### Piece 1 — Dimension 1 maintenance: layer-test step

**Question:** What layer-test step should be added (and where) so that future inquiries surface meaning-vs-structural-layer ambiguity in their input BEFORE the pipeline commits to operating at one layer?

**Verification criteria:**

- [ ] Layer-test cognitive operation specified: when the inquiry's question can be read at multiple cognitive layers (meaning-layer / structural-layer / process-layer / etc.), the test surfaces this ambiguity as an explicit ambiguity-collapse pair (one of the candidates in sensemaking's Phase 3) rather than silently committing to one layer
- [ ] Insertion point specified: either `homegrown/sense-making/references/sensemaking.md` Phase 2 (perspective checking) as a new "Layer / Operating-Layer" perspective requirement, OR `homegrown/MVL+/SKILL.md` as a pre-Sensemaking step that flags layer-ambiguity in `_branch.md` before the pipeline starts
- [ ] Decision criterion documented: which insertion point is chosen and why (the choice affects which inquiries the test fires for)
- [ ] Failure-mode link: the layer-test addresses the meta-instance of Premature Stabilization (per `homegrown/sense-making/references/sensemaking.md` failure mode #2) at the layer-choice axis
- [ ] Determination mechanism: HOW the layer-test fires — automatic at every inquiry (cost: false-positives on simple inquiries) or gated by a question-form heuristic (cost: heuristic might miss layer-ambiguous questions). Choice documented with rationale.
- [ ] Evaluation gate: after the next 3 inquiries that begin from a "what should X be" or "redefine X" question, check whether the layer-test surfaced layer-ambiguity (if applicable). If 0 of 3 surface ambiguity when one was expected → revisit.
- [ ] Risk class: LOW (additive sensemaking-spec edit; no behavioral change to existing inquiries that don't have layer-ambiguity)

### Piece 2 — Dimension 2 maintenance: NOT-list restructure (the deepest fault per user's inline objection)

**Question:** Should the 5-entry NOT-list against neighbor disciplines in `homegrown/explore/references/explore.md` be restructured or removed, and if so what specifically replaces it?

**Verification criteria:**

- [ ] Decision rendered with explicit user confirmation: REMOVE entirely / RESTRUCTURE to identity-by-positive-definition only / KEEP-WITH-FRAMING-CHANGE (e.g., move to a "Project-Taxonomy Notes" section that's clearly project-specific not operation-essential). User-confirmation gate is required (mirroring what iter-1's MUST gate should have been).
- [ ] Restructured /explore identity statement: defines `/explore` by what it IS as a cognitive operation (per iter-2's verb-meaning grounding: "purposive open-mode surfacing of a territory") without requiring reference to neighbor disciplines. Test: a reader who has never seen the project's discipline taxonomy can understand what `/explore` does from the identity statement alone.
- [ ] Spec-internal rationale: documents WHY the restructure addresses the user's inline objection ("WHY explore should know about other disciplines at all????") and how the restructure preserves operationally-useful information (e.g., near-neighbor contrasts) without project-coupling
- [ ] If REMOVE chosen: the cross-discipline NOT-list awareness that was load-bearing for "what /explore deliberately excludes" is preserved in another form (e.g., positive-definition that implicitly defines what's outside the operation)
- [ ] Cross-reference handling: §6.2 (Neighbor disciplines table) and §1.5 (Specialization pattern) — already addressed by the May 14 finding's REPAIRs — should be coordinated with this restructure to avoid duplicate work
- [ ] Evaluation gate: after deployment, observe 3 future MVL+ inquiries where `/explore` is invoked. Check whether `/explore` outputs exhibit reduced project-anchoring (mirrors May 14 finding's evaluation gate).
- [ ] Risk class: MEDIUM (touches a structural commitment iter-2 preserved; high stakes per user's deepest objection but doc-only edit)

### Piece 3 — Dimension 3 maintenance: deferral-binding mechanism

**Question:** What mechanism should bind "deferred-with-revival-trigger" items so that future spec rewrites cannot activate deferred items without verifying the revival trigger has fired?

**Verification criteria:**

- [ ] Mechanism design specified: either (a) a new meta-protocol `homegrown/protocols/deferred_governance.md` that any spec edit must consult before changing deferred-vs-active state, or (b) an extension to `homegrown/protocols/conclude.md` that adds a "deferred-state audit" step before allowing finding's Next Actions to recommend activation
- [ ] Revival-trigger verification check specified: HOW the binding check operates at spec-edit time. Must distinguish "trigger has objectively fired" (e.g., "meta-loop has run sibling inquiries with overlapping territories") from "spec-author thinks trigger has fired" (subjective). Subjective triggers without external evidence fail the check.
- [ ] Insertion point specified: which file gains the new behavior, and what triggers the check (every spec edit? only at CONCLUDE? only at materialize?)
- [ ] Coordination with B8 (strong coupling to Dim 4): if Cluster IV's COULD-vs-MUST gating ships in CONCLUDE.md, this Dim 3 mechanism should co-locate with awareness of the shared substrate. Decision: design Dim 3 and Dim 4 mechanisms WITH AWARENESS of each other (possibly as two sub-sections of a single deferred-governance protocol) but verify each meets its own change-driver
- [ ] Backward compatibility: existing specs (including the current `homegrown/explore/references/explore.md` which has activated A4–A12 without trigger-firing) must be handled. Either (a) grandfather them as "pre-binding-mechanism state" with a one-time audit, or (b) require a re-audit during the next spec edit
- [ ] Evaluation gate: after the next 3 spec rewrites, verify whether deferred items were activated only when triggers verifiably fired. If 1+ of 3 violates → revisit binding mechanism.
- [ ] Risk class: MEDIUM (new governance mechanism; changes spec-edit behavior; doc-and-protocol edit)

### Piece 4 — Dimension 4 maintenance: self-reference check + COULD-vs-MUST gating

**Question:** What pre-pipeline self-reference check and CONCLUDE-time COULD-vs-MUST gating should be added so that future inquiries (a) explicitly flag self-reference risks before pipeline starts and (b) cannot ship adoption-ready COULDs until MUSTs are resolved?

**Verification criteria:**

- [ ] Self-reference check specified: when an inquiry's question targets a discipline or protocol that the inquiry itself is using, the check fires and adds "self-reference acknowledged" + mitigation (external grounding sources required) to `_branch.md` before the pipeline starts. Insertion point: `homegrown/MVL+/SKILL.md` (or a new pre-pipeline protocol)
- [ ] COULD-vs-MUST gating specified: CONCLUDE detects when finding's Next Actions has both MUST and COULD items, and the COULD depends on the MUST (e.g., "COULD: replace X" depends on "MUST: confirm Y"). When this dependency is detected, COULD is presented with "blocked pending MUST resolution" rather than as adoption-ready
- [ ] Insertion point specified: gating lives in `homegrown/protocols/conclude.md` (likely co-located with Dim 3 mechanism per B8)
- [ ] Determination mechanism for self-reference: HOW is "the inquiry targets a discipline the inquiry uses" detected? Heuristic candidates: (i) inquiry's question contains the name of a homegrown discipline + the runner uses that discipline; (ii) `_branch.md` Source Input mentions the discipline by name. Documented with rationale.
- [ ] Determination mechanism for MUST-COULD dependency: HOW is the dependency detected? Either (i) explicit declaration in the finding template ("COULD-X depends-on MUST-Y") or (ii) heuristic (COULD action references the MUST resolution). Choice documented.
- [ ] Coordination with B8 (strong coupling to Dim 3): co-design with Dim 3's deferral-binding mechanism per the strong-coupling acknowledgment
- [ ] Evaluation gate: after the next 3 inquiries with both MUST and COULD items, verify the dependency was correctly detected and the COULD was correctly gated. If 1+ misclassification → revisit detection mechanism.
- [ ] Risk class: MEDIUM (touches CONCLUDE; behavioral change for findings with MUST-COULD dependencies)

### Piece 5 — Dimension 5 maintenance: anatomy-as-template-not-mandate

**Question:** What amendment to `thinking_disciplines/anatomy_of_disciplines.md` makes explicit that the universal discipline-anatomy is a starting template (not a mandate), and provides guidance for when/how a discipline-specific anatomy may diverge?

**Verification criteria:**

- [ ] Amendment text specified: a new section (or extension of the existing introduction) that states the universal anatomy (Definition / Components / Process / Failure Modes / Coverage Strategy + Transform / Progression / Telemetry / Frontier) is the DEFAULT TEMPLATE; disciplines may diverge when the divergence is justified on cognitive-operation grounds
- [ ] Divergence guidance specified: WHEN divergence is acceptable (e.g., the discipline's cognitive operation has a structurally distinct shape that the universal anatomy doesn't fit) and HOW to declare divergence in the discipline's spec (e.g., a "Anatomy Divergence" subsection citing the universal anatomy and stating which sections diverge with rationale)
- [ ] Determination mechanism: HOW does a discipline author know if their discipline should diverge? Heuristic: if applying the universal anatomy forces awkward sections (a Components section that has only 1 component; a Failure Modes section that's actually about cognitive-mode-shifts not failures), divergence is candidate. Documented.
- [ ] Cross-reference: lists current homegrown disciplines + notes which (if any) currently follow the universal anatomy without divergence vs which already diverge implicitly. This frames the amendment in current state, not abstract guidance.
- [ ] Backward compatibility: existing disciplines following the universal anatomy don't need to change; the amendment is permissive, not prescriptive
- [ ] Evaluation gate: after the next discipline spec is written or rewritten, verify whether the author considered anatomy divergence per the amendment. If divergence considered and documented (or explicitly rejected with rationale) in 1 of next 1 → amendment validated.
- [ ] Risk class: LOW (universal-doc-only; no behavioral change to existing disciplines; permissive amendment)

---

## Step 5 — Interface Map

| # | Source piece | Target piece | What flows | Direction | Type |
|---|---|---|---|---|---|
| I1 | Piece 1 (Dim 1 layer-test) | Piece 4 (Dim 4 gating) | A MUST item produced when layer-ambiguity surfaces and is unresolved | One-way | Data (new MUST goes through P4's gating) |
| I2 | Piece 4 (Dim 4 gating) | Piece 2 (Dim 2 NOT-list change) | The COULD-vs-MUST gating mechanism (P2's user-confirmation gate is an INSTANCE of P4's mechanism) | One-way | Mechanism reuse (P4 builds; P2 uses) |
| I3 | Piece 5 (Dim 5 anatomy-flex) | Piece 2 (Dim 2 NOT-list change) | Conceptual framing: the NOT-list restructure is an instance of anatomy divergence; P5's amendment frames why P2 is acceptable | One-way | Conceptual framing (loose; not implementation) |
| I4 | Piece 3 (Dim 3 deferral-binding) | Piece 4 (Dim 4 gating) | Shared CONCLUDE substrate (B8 strong coupling); co-design recommended | Bidirectional (co-design) | Shared implementation substrate |
| I5 | Cross-cutting (a14–a16 evaluation gates / risk class / verification criteria) | All pieces | Per-piece instantiation of the evaluation-gate / risk-class / verification-criteria pattern | Distributed | Pattern reuse |

### Assumptions-not-data check (per Step 5 refinement)

For each interface, what assumptions does the target piece make about the source's output?

- **I1 (P1 → P4):** P4 assumes P1's layer-test produces a structured MUST item with the appropriate fields (per the finding template's MUST-action format). If P1's output is unstructured prose, P4's detection mechanism for MUST-COULD dependencies fails. Assumption: P1's layer-test output uses the project's MUST-item conventions. Documented in P1's verification criteria (the layer-test surfaces ambiguity as an "ambiguity-collapse pair").
- **I2 (P4 → P2):** P2 assumes P4's gating mechanism is in place when P2 ships. If P2 ships before P4, P2's user-confirmation gate is a one-off (not built on shared machinery). Assumption: dependency order makes P4 ship before P2, OR P2 builds its own one-off gate as a v1 placeholder.
- **I3 (P5 → P2):** P2 assumes P5's anatomy-flexibility amendment is in place (or at least conceptually accepted) when P2 ships. P2's restructure-rationale references the anatomy-flexibility frame. If P5 hasn't shipped, P2's rationale is weaker (relies only on the user's inline objection + structural argument). Assumption: P5 ships before P2, OR P2's rationale stands without P5 (the user's objection + structural argument are sufficient even without the universal-anatomy amendment).
- **I4 (P3 ↔ P4):** Co-design assumption — both pieces designed with awareness of the shared CONCLUDE substrate. If designed independently, they may produce overlapping or conflicting CONCLUDE additions. Acknowledged as the strongest coupling in the decomposition.
- **I5 (cross-cutting):** Each piece assumes the project's evaluation-gate vocabulary (achievable observable counts: "next 3 spec rewrites" not vague "eventually") per the calibration-state perspective from sensemaking.
- **Hidden coupling check:** Does any piece assume runtime behavior of another piece that isn't captured in the interfaces? Reviewed — no hidden couplings detected. The strongest implementation share (B8) is explicitly acknowledged in I4. No silent dependencies on each other's runtime behavior beyond the documented data/mechanism flows.

---

## Step 6 — Dependency Order

```
                  Piece 5 (Dim 5 anatomy-flex)
                        │ (frames)
                        ▼
  Piece 1 (Dim 1)  ┌─→  Piece 2 (Dim 2 NOT-list)
   layer-test      │
        │          │ (uses gate)
        │ (MUSTs)  │
        ▼          │
  Piece 4 (Dim 4 gating) ◄──── Piece 3 (Dim 3 deferral-binding)
                            (shared CONCLUDE substrate; co-design)
```

**Sequential order (recommended):**

1. **Piece 5** (Dim 5 anatomy-flex amendment) — first; LOW risk; permissive amendment that frames Piece 2's restructure rationale and gives subsequent disciplines explicit license to diverge from universal anatomy when justified.
2. **Pieces 3 + 4 co-designed** (Dim 3 deferral-binding + Dim 4 self-reference + COULD-vs-MUST gating) — second; MEDIUM risk; shared CONCLUDE substrate per B8; co-design recommended to avoid overlapping or conflicting CONCLUDE additions.
3. **Piece 2** (Dim 2 NOT-list restructure) — third; MEDIUM risk; uses Piece 4's gating mechanism (or builds a one-off gate if Piece 4 hasn't shipped); benefits from Piece 5's framing for the rationale; touches the deepest fault per user's inline objection.
4. **Piece 1** (Dim 1 layer-test) — fourth (or in parallel with 3); LOW risk; independent in terms of dependencies but informed by Piece 5's flexibility (a layer-test could surface anatomy-divergence claims).

**Parallelization:** Pieces 3 and 4 are co-designed (not parallel — same substrate). Piece 1 can be done in parallel with Piece 2 (different files, different change drivers). Piece 5 should ship first because it's permissive and enables Piece 2's framing.

**No circular dependencies.** Piece 5 → Piece 2 (framing); Piece 4 → Piece 2 (mechanism); Piece 1 → Piece 4 (data flow). All edges are one-way.

**Practical sequencing recommendation:**

- **Phase 1 (immediate):** Piece 5 + Piece 1 — both LOW risk, doc-only.
- **Phase 2 (after Phase 1):** Pieces 3 + 4 co-designed — MEDIUM risk, governance mechanism design.
- **Phase 3 (after Phase 2):** Piece 2 — MEDIUM risk, /explore-spec edit with user-confirmation gate using Phase-2 machinery.

---

## Step 7 — Self-Evaluation

### Minimum (3 dimensions)

| Dimension | Result | Notes |
|---|---|---|
| **Independence** | PASS | Each piece is answerable without reading siblings, given the interface specs. P2 needs P4's gating mechanism (interface I2) — addressable via one-off gate placeholder if P4 hasn't shipped. P3 and P4 share substrate (interface I4) but their change drivers are independently load-bearing. |
| **Completeness** | PASS | The 5 fault dimensions from sensemaking each have a piece. The cross-cutting concerns (a14–a16) are documented in each piece's verification criteria, not as a separate piece (correctly — they're per-piece instantiations of a shared pattern). |
| **Reassembly** | PASS | If all 5 pieces' verification criteria are met + interfaces honored, the resulting state is: (a) `homegrown/explore/references/explore.md` has restructured NOT-list per Piece 2; (b) `homegrown/protocols/conclude.md` has gating per Pieces 3+4 co-design; (c) `homegrown/sense-making/references/sensemaking.md` (or `homegrown/MVL+/SKILL.md`) has layer-test per Piece 1; (d) `thinking_disciplines/anatomy_of_disciplines.md` has anatomy-flexibility amendment per Piece 5. The five-dimension fault structure from sensemaking is addressed. |

**Determination-mechanism check (per Step 7 refinement):**

The Q-tree includes load-bearing concepts whose use depends on runtime determinations — verifying each has a piece addressing the determination mechanism:

- **"Layer ambiguity"** (Dim 1) — runtime determination at sensemaking time. P1's verification criteria explicitly include the determination mechanism (heuristic vs always-fire). ✓
- **"MUST resolved"** (Dim 4) — runtime determination at CONCLUDE time. P4's verification criteria explicitly include the detection mechanism for MUST-COULD dependency. ✓
- **"Revival trigger fired"** (Dim 3) — runtime determination at spec-edit time. P3's verification criteria explicitly include the trigger-verification check + distinguishing objective vs subjective trigger-firing. ✓
- **"Anatomy divergence justified"** (Dim 5) — runtime determination at spec-write time. P5's verification criteria explicitly include the heuristic for when divergence is acceptable. ✓
- **"Self-reference present"** (Dim 4) — runtime determination at pre-pipeline time. P4's verification criteria explicitly include the heuristic for self-reference detection. ✓

All load-bearing concepts have explicit determination mechanisms in their pieces. Reassembly check passes the determination-mechanism refinement.

### Full evaluation (7 dimensions; high-stakes decomposition since it shapes maintenance for load-bearing diagnostic findings)

| Dimension | Result | Notes |
|---|---|---|
| Independence | PASS | (above) |
| Completeness | PASS | (above) |
| Reassembly | PASS | (above) |
| **Tractability** | PASS | Each piece is sized for one focused pass. P2 is the most concrete (single spec edit + user gate); P3 and P4 are governance designs (medium scope, co-design recommended for efficiency); P1 and P5 are smaller. |
| **Interface clarity** | PASS | All cross-piece flows explicit (I1–I5). Strong coupling B8 (P3 ↔ P4) acknowledged as shared substrate, not hidden. Assumptions-not-data check captured in each interface. |
| **Balance** | ACCEPTABLE imbalance | P2 has the highest user-visible stakes (deepest fault per user's inline objection); P3 and P4 are larger by implementation scope (governance machinery); P1 and P5 are smaller. Not 80% in one piece; balanced enough not to require further sub-decomposition. |
| **Confidence** | HIGH | Top-down (Step 2) and bottom-up (Step 3) agreed on all 10 boundaries. Strong B8 coupling explicitly acknowledged with rationale for not merging. |

### Failure-mode self-check

| Failure mode | Observed? | Notes |
|---|---|---|
| Premature decomposition | No | Sensemaking SV1→SV6 stabilized 5 fault dimensions before this decomposition began. |
| Wrong boundaries | No | All cuts are at low-coupling regions, with the strong B8 acknowledged and preserved as interface (not hidden). |
| Hidden coupling | Caught and named | I4 (B8 strong coupling on CONCLUDE substrate) is documented; I1/I2/I3 assumptions-not-data check captured in each interface. No silent dependencies on runtime behavior of other pieces. |
| Missing pieces | No | Determination-mechanism check passed (5/5 load-bearing concepts with runtime determinations have explicit mechanisms in their pieces). |
| Over-decomposition | No | 5 pieces matches the 5 fault dimensions; further decomposition (e.g., splitting P3 into "design" + "implement") would produce sub-pieces that can't exist independently. |
| Ignoring dependencies | No | Dependency order explicit: P5 → (P3+P4 co-designed) → P2; P1 in parallel with P2 phase. |
| Imbalanced decomposition | No | P2 has highest stakes; P3+P4 largest implementation; not 80% in one piece. |

**Overall: PROCEED** — decomposition passes minimum 3 dimensions and full 7 dimensions; no failure modes triggered; all load-bearing concepts with runtime determinations have explicit mechanisms in their pieces; ready for innovation to generate concrete maintenance candidates within each piece.
