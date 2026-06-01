## User Input

`devdocs/inquiries/2026-06-01_11-27__inquiry_elaboration_structure_with_recent_context/_branch.md` (priors consumed: `surfacing.md`, `sensemaking.md`)

---

# Decomposition — IE Structure with Recent Context

**Whole being decomposed:** the refined IE structural design (the 09-54 spine + recent-context-as-third-anchor + the rename + the §4 generalization), per SV6 — broken into pieces a spec author can write.

## Step 1 — Coupling Map (perceive topology)

Elements to deliver: {§1 temporal-layering sub-section, intrinsic recent-context definition, §2 Components updates, §5 Output schema updates, §3 Process Model update, §4 Failure-mode generalization + new mode, Changes-from-Prior migration note}.

Coupling perception:
- The **temporal-layering frame** (three anchors at three scales) is the **highest-coupling node** — it governs the schema (every input + every anchor-grounded rephrasing references it), the process (each step grounds against an anchor), and the failure modes (anchor-detachment / anchor-imbalance both presuppose the layering). → it's both a deliverable section AND a shared contract.
- The **intrinsic definition of "recent context"** is a sub-contract under the temporal-layering frame — every §2/§5/§3/§4 mention of recent context cites it.
- **§2 Components ↔ §5 Output schema** — tightly coupled (the two output families AND their field names must match exactly; the inputs list is shared). One joint deliverable.
- **§3 Process Model** is derived from §2 (the steps produce the components).
- **§4 Failure modes** are derived from §1's frame + §2's components (anchor-detachment generalizes 09-54's goal-detachment; anchor-imbalance presupposes multiple anchors).
- **Changes-from-Prior migration note** is fully derived (it documents the rename `why_makes_sense` → `rephrase_in_project_goal` for 09-54 readers).

## Step 2 — Detect Boundaries (top-down)

Clusters → pieces: one **contract pair** (F1 temporal layering + F2 intrinsic recent-context), one tightly-coupled core (F3 §2/§5 schema), two derived (F4 process update, F5 failure-mode update), one boundary doc (F6 migration note).

## Step 3 — Validate Boundaries (bottom-up sanity check)

Atoms a spec author needs to write:
- the temporal-layering paragraph (atom → F1 ✓)
- the recent-context vocab entry (atom → F2 ✓)
- three input fields + two output families + multi-request handling (atoms → F3 ✓)
- the process-order narrative naming the 3 inputs (atom → F4 ✓)
- two failure-mode entries (atoms → F5 ✓)
- the rename-mapping table (atom → F6 ✓)

Top-down and bottom-up agree. Confidence: HIGH.

## Step 4 — Question Tree (pieces as questions + verification criteria)

**F1 — §1 temporal-layering sub-section (the contract + a §1 sub-section).**
Question: *How are the three anchors named, what scale does each sit at, and what role does each play in elaboration?*
Verification: [ ] all three anchors named (project goal / recent context / original query); [ ] each tagged with its temporal scale (long-term / short-term / inquiry-itself); [ ] each given a one-line role; [ ] self-containment preserved (no external systems named); [ ] cited by every later piece.

**F2 — Intrinsic definition of "recent context" (a §1 vocabulary entry).**
Question: *What is recent context, intrinsically — without naming any supplier?*
Verification: [ ] defined by **currency** (what is in active focus, distinct from the long-term ambient goal); [ ] defined by **role** (the inquiry's immediate surround — what just-happened around the query, not the query itself); [ ] source-agnostic (no naming of session / conversation / runner / discipline); [ ] distinguishable from project_goal (by currency) and from original_query (by scope); [ ] consistent with the 09-54 self-containment principle.

**F3 — §2 Components + §5 Output schema (joint deliverable; one shared vocabulary).**
Question: *What are the refined inputs, output families, and exact field list?*
Verification: [ ] inputs `{project_goal, original_query, recent_context}`; [ ] **anchor-grounded family** named with three flavors — `rephrase_simple`, `rephrase_in_project_goal`, `rephrase_in_recent_context`; [ ] **emphasis-variants family** preserved — `rephrase_scope_highlighted`, `rephrase_importance_highlighted`; [ ] scope versions preserved — `scope_small`, `scope_big`; [ ] multi-request handling preserved — `requests:[{request, how_connected_with_other_part, seq_or_parallel?}]` (conditional); [ ] one canonical name per field shared between §2 and §5 (no drift); [ ] always-on vs conditional optionality preserved from 09-54.

**F4 — §3 Process Model update (internal, neighbor-free verbs).**
Question: *What internal steps produce the refined output?*
Verification: [ ] read **all three inputs** explicitly; [ ] grasp intent multilayered → produce anchor-grounded rephrasings (one per anchor) → produce scope versions → produce emphasis variants → detect & connect multiple asks; [ ] verbs in IE's own language (no neighbor-mirroring); [ ] internal phases only (no runner / pipeline / spawn talk).

**F5 — §4 Failure-mode update.**
Question: *Which intrinsic failure modes survive, generalize, or get added?*
Verification: [ ] preserved: `drift`, `flattening`, `missed-split`, `over-reach`; [ ] **generalized**: `goal-detachment` → `anchor-detachment` (a rephrasing-in-X doesn't actually reference X — fires per anchor); [ ] **new**: `anchor-imbalance` (one anchor smothers the others; the multilayered grounding is lost); [ ] each failure mode stated intrinsically (no neighbor names, no external-system names); [ ] each has a one-line recognition signal + corrective.

**F6 — Changes-from-Prior migration note (derived).**
Question: *How does a 09-54 reader map the renamed field + the additions?*
Verification: [ ] explicit rename mapping `why_makes_sense` → `rephrase_in_project_goal` with "content preserved, label updated to honor anchor-grounded family naming"; [ ] new fields enumerated (input: `recent_context`; output: `rephrase_in_recent_context`); [ ] §4 generalization documented (`goal-detachment` → `anchor-detachment`); [ ] new §4 mode documented (`anchor-imbalance`); [ ] explicit statement that no 09-54 commitment is corrected — only refined and extended.

## Step 5 — Interface Map

| From → To | What flows | Direction |
|---|---|---|
| F1 → F2,F3,F4,F5,F6 | the three-anchor temporal-layering contract | one-way |
| F2 → F3,F4,F5 | the intrinsic definition of recent context (cited wherever recent_context appears) | one-way |
| F3 ↔ F3 | §2 Components ↔ §5 Output schema — shared vocabulary, must be one source-of-truth | bidirectional (internal to F3) |
| F3 → F4 | the components (to be produced by the steps) | one-way |
| F1 + F3 → F5 | the layering frame + the component list → the failure modes | one-way |
| F3 + F5 → F6 | the rename + the new fields + the failure-mode delta → the migration note | one-way |

**Hidden-coupling check (assumptions, not just data):** F3 carries an unstated assumption that `rephrase_simple` belongs *inside* the anchor-grounded family as the "no-anchor case" — if the spec author treats it as separate, the family count becomes 2 (project-goal / recent-context) + 1 (simple, orphaned), losing the user's parallel-three framing. → make explicit in F3: the anchor-grounded family has three members, the simple one being the no-anchor case.

## Step 6 — Dependency Order

1. **F1** (temporal-layering contract).
2. **F2** (intrinsic recent-context definition).
3. **F3** (the joint §2/§5 schema).
4. **F4** (process update; consumes F3).
5. **F5** (failure-mode update; consumes F1+F3).
6. **F6** (migration note; consumes F3+F5).

Parallelizable: none cleanly — each piece consumes a prior.

## Step 7 — Self-Evaluation

| Dimension | Check | Verdict |
|---|---|---|
| **Independence** | Each piece authorable given its declared inputs (F1, F2)? | PASS — F3 is the only joint node (§2↔§5), and it is one authored deliverable. |
| **Completeness** | Pieces cover the refinement deliverable (the temporal layering + the schema delta + the process update + the §4 delta + the migration note)? | PASS — F1+F2 carry the contract; F3 carries the schema; F4+F5 carry the derivations; F6 carries the prior-reader mapping. |
| **Reassembly** | Pieces + interfaces = the refined structural design? | PASS — F1 explains the frame · F2 defines the new term · F3 schema delta · F4 process delta · F5 failure-mode delta · F6 migration note = a writable refined spec. |

**Determination-mechanism check (refinement):** the runtime determinations the refined spec creates are: (i) "is this content recent context or project goal?" (→ F2's currency-vs-stays-standing distinction); (ii) "is a given rephrasing anchor-grounded or emphasis-variant?" (→ F3's two-family structure); (iii) "did a rephrasing actually use its anchor?" (→ F5's anchor-detachment failure mode). All three determination mechanisms are present in the tree. ✓

**Balance:** F1+F2+F3 carry most of the substance (expected — they're the new design); F4/F5/F6 are lighter derived deliverables (appropriate). No imbalanced-decomposition failure.

## Failure-mode self-check (per `references/decompose.md` §7)

- **Premature decomposition?** No — sensemaking SV6 settled the temporal-layering frame and the rename + merge before this run; decomposition built on stable understanding. ✓
- **Wrong boundaries?** F3 keeps §2 + §5 as one joint piece (their hidden coupling on shared vocabulary made splitting them a wrong-boundary candidate). ✓
- **Hidden coupling?** Surfaced: F3's "rephrase_simple is *inside* the anchor-grounded family as the no-anchor case" (the assumption check). ✓
- **Missing pieces?** Cross-checked F1–F6 against SV6: temporal layering ✓, recent-context definition ✓, schema delta ✓, process update ✓, failure-mode delta ✓, migration note ✓. None missing.
- **Over-decomposition?** No — six pieces match six distinct deliverables. (Could have collapsed F1+F2 into one §1-update piece, but separating them keeps the temporal frame and the vocabulary entry independently revisable.)
- **Ignoring dependencies?** Explicit dependency order in Step 6.
- **Imbalanced decomposition?** F3 is the heaviest by design (it's the schema); others appropriately lighter.

**Frontier for Innovation/Critique:** Innovation writes the actual paragraphs/wording for F1, F2, F4, F5, F6 and the actual schema for F3 in concrete text. Critique pressure-tests: (a) does F2's recent-context definition stay source-agnostic (no leak of "session" / "conversation history" / etc.)?; (b) does F5's anchor-imbalance bite intrinsically without naming neighbor disciplines?; (c) does F6's rename migrate cleanly without breaking 09-54 references?
