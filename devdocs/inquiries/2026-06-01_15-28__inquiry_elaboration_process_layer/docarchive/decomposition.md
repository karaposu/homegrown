## User Input

`devdocs/inquiries/2026-06-01_15-28__inquiry_elaboration_process_layer/_branch.md` (priors consumed: `surfacing.md`, `sensemaking.md`)

---

# Decomposition — IE Process Layer

**Whole being decomposed:** the IE process-layer design deliverable per SV6 — small surgical runner-side edits + two new small protocols, with IE's spec untouched. The deliverable is FOUR concrete text-artifacts that an author could write directly + one shared anchor (the IE-contract) that all four cite.

## Step 1 — Coupling Map (perceive topology)

Elements to deliver:
- **D0** — the IE contract (what IE consumes + what IE produces; the anchor every piece cites) ← **highest-coupling node**, not itself a piece but a shared interface
- **DE1** — MVLw template edits (Step 0 + thinned step 3 + new `_branch.md` sections)
- **DE2** — MVLw runtime behavior (post-IE fidelity gate + spawn_set wrapper)
- **DE3** — `reference_authority_check.md` protocol content (new file)
- **DE4** — `inquiry_elaboration_adoption.md` protocol content (new file; cross-runner contract + MVL-classic instantiation note)

Coupling perception:
- **D0 → all** — every piece cites D0 (IE consumes 3 inputs; emits elaborated_inquiry + 2 verdicts). One source of truth; pieces drift if D0 isn't shared.
- **DE1 ↔ DE2** — same file (`cognitive_harness/MVLw/SKILL.md`); same post-IE workflow; different sections (DE1 = template wording near step 3; DE2 = runtime behavior near EXECUTE PIPELINE). Tightly coupled by file; separable by content focus.
- **DE2 → DE3** — the gate-or-separate-tier decision (sensemaking's D5 frontier) lives inside DE2's gate design and influences how DE3 integrates (shared bounce-budget vs independent FLAG).
- **DE3, DE4** — independent of each other; both depend on D0; DE3 has the DE2-edge above.
- **MVL-classic parity** — collapses into DE4: the adoption-contract IS the mechanism by which a new runner adopts IE; applying it to MVL classic is a "follow the contract" downstream authoring step, not a separate decomposition piece.

Clusters → pieces: D0 anchor (shared contract); DE1+DE2 (joint pair — both edit MVLw/SKILL.md); DE3 (new file); DE4 (new file).

## Step 2 — Detect Boundaries (top-down)

The natural cut points:
1. **The IE-contract anchor (D0)** — one-paragraph reference all pieces cite; not a piece itself
2. **DE1 — template content** (where IE invocation goes; what `_branch.md` looks like post-migration)
3. **DE2 — runtime behavior** (the gate + spawn semantics; algorithmic, not template)
4. **DE3 — reference-authority's new home** (a separable protocol file with its own internal structure)
5. **DE4 — cross-runner contract** (a separable protocol file capturing 3 interfaces + instantiation pattern)

Each piece is one authorable text-artifact; the cuts are at file-boundaries (DE1+DE2 share a file) or section-boundaries (DE1 vs DE2 within MVLw/SKILL.md).

## Step 3 — Validate Boundaries (bottom-up sanity check)

Atoms an author needs to write:
- One paragraph stating IE's I/O contract (D0)
- Step 0 wording + thinned step 3 template + `## Elaborated Inquiry` + `## IE Verdicts` section specs (DE1)
- Gate algorithm (PASS/FLAG handling + bounce) + spawn algorithm (single/parallel-set/sequential-chain) (DE2)
- A protocol file (DE3): trigger + sub-checks + output + integration
- A protocol file (DE4): 3 interfaces + instantiation pattern + MVLw worked example + MVL-classic instantiation note

Top-down (clusters) and bottom-up (atoms) agree. **Confidence: HIGH.**

## Step 4 — Question Tree (pieces as questions + verification criteria)

### D0 — The IE contract (shared anchor; cited by every piece)

Question: *What does IE consume and produce at runtime?*
Verification: [ ] **Consumes** three inputs `{project_goal, original_query, recent_context}` per the read-policy (original_query MANDATORY; project_goal MANDATORY-WHEN-AVAILABLE; recent_context SHOULD). [ ] **Produces** three outputs: (a) the **elaborated_inquiry** (substantive framing — the 5 meta-aspects + Goal + Scope + the rephrasings + the `requests:[]` list if any); (b) the **request-structure verdict** ∈ `{single | parallel-set{children} | sequential-chain[children, order]}`; (c) the **fidelity verdict** ∈ `{PASS | FLAG{axis, note}}`. [ ] Stated as a one-paragraph anchor referenced by DE1/DE2/DE3/DE4. [ ] No runner-specific details (this is the abstract contract; it works for MVLw, MVL classic, any future runner).

### DE1 — MVLw template edits (Step 0 + thinned step 3 + new branch.md sections)

Question: *What exact text changes does `cognitive_harness/MVLw/SKILL.md` need in its `_branch.md` template + the new pre-pipeline stage?*
Verification:
- [ ] **New Step 0 — "Elaborate the inquiry"** added before existing step 3, with: (i) read-policy preamble per D0's input contract; (ii) `Skill(skill: "inquiry-elaboration", args: <inputs>)` invocation; (iii) consumes IE's three outputs.
- [ ] **Step 3 thinned** per the migration table from SV6:
  - **GONE:** Question (5 meta-aspects) · Goal · Source Input · Scope Check · Step 3.5 transcription-audit · Step 3.6 reference-authority-audit
  - **STAYS:** Layer Commitment · Synthesis Trigger · Relationships · History
  - **NEW (added):** `## Elaborated Inquiry` section (encoded from IE's framing-content) · `## IE Verdicts` section (encoded from IE's two verdicts, for traceability)
- [ ] **`## Elaborated Inquiry` section spec** — exact field list: Question{subject, action, level, observation-targets[], deliverable-shape} · Goal · Scope · rephrase_simple · rephrase_in_project_goal · rephrase_in_recent_context · scope_small · scope_big · rephrase_scope_highlighted · rephrase_importance_highlighted · requests:[]?
- [ ] **`## IE Verdicts` section spec** — exact field list: request-structure-verdict · fidelity-verdict{status, per-axis-notes[]} · source-input-preserved · layer-hint?
- [ ] **No reference to other discipline names inside Step 0's prose** (self-containment of THIS edit — runner-spec legitimately names IE, but the text shouldn't gratuitously name other disciplines)
- [ ] **Cross-references D0** (cites the contract anchor for input/output shapes rather than re-stating them).

### DE2 — MVLw runtime behavior (gate + spawn wrapper)

Question: *What exact text changes does `cognitive_harness/MVLw/SKILL.md` need in its EXECUTE PIPELINE / orchestration sections for the post-IE behavior?*
Verification:
- [ ] **Fidelity gate algorithm** (after Step 0 returns):
  - `verdict.fidelity == PASS` → proceed to step 3 (encode) + spawn wrapper + loop
  - `verdict.fidelity == FLAG && bounce_count == 0` → re-invoke Step 0 with `flagged-gap` surfaced as additional context; increment bounce_count to 1
  - `verdict.fidelity == FLAG && bounce_count >= 1` → **halt-before-loop**; surface `## Elaborated Inquiry` + `## IE Verdicts` to user; do NOT auto-spawn or auto-run the loop
  - User override path: explicit user approval to proceed despite FLAG (escape hatch)
- [ ] **Spawn_set wrapper algorithm** (after gate passes):
  - `verdict.structure == single` → no spawn; runner encodes elaborated_inquiry into current `_branch.md` (per DE1's new sections); proceed to loop
  - `verdict.structure == parallel-set{children}` → for each child, call `branch_inquiry` with `branch_mode: set-member` + shared `branch_set_id`; each child gets its own `_branch.md` populated from IE's per-child framing; proceed to spawn each in parallel
  - `verdict.structure == sequential-chain[children, order]` → call `branch_inquiry` for first child immediately; subsequent children queued with `depends-on` pointers (**concrete sequential-chain mechanics deferred — see D4 in sensemaking frontiers; ship `single` + `parallel-set` first**)
- [ ] **Reference-authority check trigger** — between gate-pass and spawn (or between spawn and loop): invoke `reference_authority_check.md` protocol per DE3
- [ ] **References D0** for output shapes; **references DE3** for the reference-authority protocol; **references DE4** for the cross-runner contract context

### DE3 — `cognitive_harness/protocols/reference_authority_check.md` content (new file)

Question: *What exact content does the new reference-authority pre-flight protocol contain?*
Verification:
- [ ] **Trigger** — invoked by the surrounding orchestration layer AFTER IE emits the elaborated_inquiry and BEFORE the loop runs (matches DE2's pipeline position)
- [ ] **Input** — the elaborated_inquiry (specifically: any cited spec / path / protocol references in its text)
- [ ] **Sub-checks** (the 3 sub-checks from the 04-00 audit, preserved verbatim in spirit):
  - **(a) Status** — for each cited reference: is it `active` / `in-development` / `deprecated` / `archived` / `unknown-to-verify`?
  - **(b) Subject-alignment** — does the cited reference's subject align with this inquiry's subject?
  - **(c) Disambiguation** — for overloaded terms (e.g., "canonical", "the protocol"), is the intended referent disambiguated?
- [ ] **Output** — `PASS` if all references clear, OR `FLAG{reference, sub-check, reason}` for each failure
- [ ] **Integration with IE's bounce (D5 resolution)** — **SEPARATE HALT-TIER**: reference-authority's FLAG does NOT count toward IE's one-bounce budget. Rationale: the audit checks an *ecosystem-level* property (cited reference currency); IE's bounce is for *framing-fidelity*. Different failure surfaces; different gates. On reference-authority FLAG: halt-before-loop + surface to user (no automatic bounce — the resolution is to update the framing's references, which is a user-level decision, not an IE-re-run decision).
- [ ] **Self-contained** — the protocol's prose names *generic roles* ("the surrounding orchestration layer", "the inquiry's framing") rather than specific disciplines; matches routelister §1.2 pattern. *Note: this protocol legitimately names IE because it's a runner-side protocol whose job is to operate on IE's output — analogous to how CONCLUDE legitimately names the disciplines it compiles.*
- [ ] **Trigger-then-verify pattern** — structural trigger (scan for cited-reference patterns) + semantic verification (per-reference 3-sub-check). Matches the 04-00 audit's design.

### DE4 — `cognitive_harness/protocols/inquiry_elaboration_adoption.md` content (new file; cross-runner contract)

Question: *What exact content does the cross-runner adoption-contract protocol contain?*
Verification:
- [ ] **Verb-meaning** — *"This protocol specifies how any runner adopts Inquiry Elaboration: the three interfaces a runner must instantiate (Input, Output, Spawn), the runtime ordering, and the migration the runner's framing artifact undergoes."*
- [ ] **§1 Input interface** — the read-policy per IE input (original_query MANDATORY; project_goal MANDATORY-WHEN-AVAILABLE; recent_context SHOULD; the supplier-role is the runner's responsibility — the protocol does NOT specify where each input physically comes from in any particular runner)
- [ ] **§2 Output interface** — the runner receives IE's three outputs (elaborated_inquiry + request-structure verdict + fidelity verdict); the runner is responsible for encoding the framing-content into its own framing artifact (whatever the runner's equivalent of `_branch.md` is)
- [ ] **§3 Spawn interface** — the runner consumes the request-structure verdict and calls `branch_inquiry` per child (single → no spawn; parallel-set → per-child with shared branch_set_id; sequential-chain → first immediately + queued)
- [ ] **§4 Runtime ordering** — the gate-with-one-bounce; the post-IE-pre-loop reference-authority check; what halts vs proceeds
- [ ] **§5 Migration pattern** — what the runner's framing template loses (comprehension+fidelity migrate INTO IE) and what stays runner-side (orchestration-meta)
- [ ] **§6 Worked example: MVLw instantiation** — a paragraph showing how MVLw concretely instantiates each interface (cites DE1 + DE2; doesn't duplicate them)
- [ ] **§7 Adoption note for other runners (incl. MVL classic)** — the mechanical "for any new runner adopting IE: apply §1-§5 by editing your own SKILL.md to add the Step-0 invocation + thinned framing template + post-IE behavior; the changes are analogous to MVLw's"
- [ ] **Self-contained** at IE-spec border — this protocol legitimately names IE (it's the adoption contract); IE's own spec does NOT name this protocol (the wiring is one-way; preserves K8 invariant)

## Step 5 — Interface Map

| From → To | What flows | Direction |
|---|---|---|
| D0 → DE1, DE2, DE3, DE4 | the IE I/O contract (3 inputs + 3 outputs; vocabulary) | one-way (anchor) |
| DE1 ↔ DE2 | shared file (`MVLw/SKILL.md`); shared post-IE workflow; DE1 = template, DE2 = runtime — both reference the other | bidirectional within one file |
| DE2 → DE3 | the gate's integration with reference-authority (separate halt-tier per D5 resolution above) | one-way |
| DE2 → DE4 | the MVLw instantiation example block in DE4 cites DE2's gate algorithm + spawn wrapper | one-way |
| DE1 → DE4 | DE4's §6 worked example cites DE1's template structure | one-way |
| DE3, DE4 → (no further pieces) | both are leaf deliverables (new files) | terminal |

**Hidden-coupling check (assumptions, not just data):**
- DE1 and DE2 must use the **same field names** for IE's outputs that DE4's §6 worked example uses; D0 anchor enforces this single source of truth.
- DE3 and DE4 are independent of each other but both lean on D0 — drift between them would manifest as them describing IE's contract differently. Mitigation: both explicitly cite D0 rather than restating.
- The `branch_inquiry` primitive (which DE2's spawn wrapper depends on) has its own existing spec at `cognitive_harness/protocols/branch_inquiry.md` — DE2 cites it; does NOT modify it. If branch_inquiry needs changes (it shouldn't), that's a separate spec edit, not part of this design.

## Step 6 — Dependency Order

1. **D0** (IE-contract anchor — stated once, cited by all)
2. **DE1 + DE2** (joint pair — both edit MVLw/SKILL.md; author together)
3. **DE3** (reference-authority protocol — depends on D0 + the DE2 gate-tier decision)
4. **DE4** (adoption-contract protocol — depends on D0 + worked-example-cites DE1 + DE2)

Parallelizable: DE3 and DE4 can be authored in parallel after DE1+DE2 are settled. DE1 and DE2 are joint (one file).

## Step 7 — Self-Evaluation

| Dimension | Check | Verdict |
|---|---|---|
| **Independence** | Can each piece be authored independently given D0 + declared inputs? | **PASS** — DE1↔DE2 are joint (one file) and treated as one joint deliverable; DE3 and DE4 are independent of each other; all 4 pieces depend on D0 as a shared anchor. |
| **Completeness** | Do the pieces cover SV6's deliverable in full? | **PASS** — every concrete authoring action SV6 names (Step 0 wording, thinned step 3, new branch.md sections, runtime gate, spawn wrapper, reference-authority protocol, adoption-contract protocol) lands in exactly one of the 4 pieces. The MVL-classic-parity item folds into DE4 §7 (adoption note) rather than being its own piece. |
| **Reassembly** | Pieces + interfaces + D0 = the SV6 process design ready for authoring? | **PASS** — assembling D0 + DE1 + DE2 + DE3 + DE4 gives an author everything needed: the contract, the MVLw edits, the reference-authority protocol, the adoption-contract protocol. No gaps; the SV6 invariant (ALL edits runner-side; IE-spec untouched) holds. |

**Determination-mechanism check:** runtime determinations the design creates:
- (i) Is fidelity-verdict PASS or FLAG? Determined by IE inside IE; consumed by DE2's gate.
- (ii) Is this the first FLAG or after-bounce? Determined by DE2's bounce_count state.
- (iii) Did reference-authority's check FLAG? Determined by DE3's protocol; consumed by DE2's reference-authority-integration logic.
- (iv) Is this `single`, `parallel-set`, or `sequential-chain`? Determined by IE; consumed by DE2's spawn wrapper.
All four determination mechanisms are in the tree (DE2 + DE3 carry them). ✓

**Balance:** DE1 and DE2 are the heaviest pieces (the bulk of the MVLw/SKILL.md edits); DE3 is medium (a small new protocol); DE4 is medium (a small new protocol with the worked example + cross-runner note). Acceptable — the heavy pieces are where the substance is; smaller pieces are appropriately smaller.

## Failure-mode self-check (per `references/decompose.md` §7)

- **Premature decomposition?** No — sensemaking SV6 settled the design before decomposition began. The 4 pieces are concrete deliverables, not exploratory cuts.
- **Wrong boundaries?** DE1↔DE2 considered as one merged piece (same file); kept separate by content-focus (template vs runtime) because they're authored together but verified separately. Reasonable.
- **Hidden coupling?** Surfaced: (a) DE1/DE2/DE4 field-name consistency for IE outputs (mitigated by D0 single-source); (b) DE3/DE4 independent but both cite D0 (same mitigation).
- **Missing pieces?** Cross-checked against SV6's deliverables list: every action named has a piece-home. None missing. The deferred-detail (D4 sequential-chain semantics) is appropriately flagged as deferred within DE2, not as a missing piece.
- **Over-decomposition?** No — 4 pieces match 4 distinct text-artifacts to author. Could collapse DE3+DE4 into "new protocols" but they have different topics; separation is principled.
- **Ignoring dependencies?** Explicit Step-6 order; D0 → joint DE1+DE2 → DE3 + DE4 (parallel).
- **Imbalanced decomposition?** DE1+DE2 are the heaviest; expected — that's where the runner-spec edits land. Others lighter; acceptable.

**Frontier for Innovation/Critique:** Innovation writes the actual concrete content of D0 + DE1 + DE2 + DE3 + DE4 (this is a production-mode innovation invocation). Critique pressure-tests: (a) does the design preserve K8 (ALL edits runner-side; IE-spec untouched)? (b) is the gate-tier separation (D5 resolution) operationally clean? (c) does DE4's adoption-contract actually generalize, or does it accidentally bake-in MVLw specifics? (d) does the spawn_set wrapper specification cover the simple cases (single + parallel-set) clearly enough that an author can implement without re-deciding?
