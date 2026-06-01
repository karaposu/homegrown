## User Input

`devdocs/inquiries/2026-06-01_09-54__inquiry_elaboration_structure_user_design_compare/_branch.md` (priors consumed: `surfacing.md`, `sensemaking.md`)

---

# Decomposition — IE Structure: Compare & Reconcile

**Whole being decomposed:** two deliverables — (i) the decided **comparison** (user's design vs 01-37) and (ii) the **reconciled, self-contained, output-organized spec** — per SV6.

## Step 1 — Coupling Map

- **The intrinsic-boundary contract** (self-containment: name no neighbor; boundaries stated by IE's own character) is the **highest-coupling node** — it governs every spec section. → the contract + §1.
- **§2 Components (output) ↔ §5 Output schema** — tightly coupled (Components *are* the output elements; the schema *serializes* them). → one joint node (define then serialize).
- **§3 Process** produces the components → directional from §2.
- **§4 Quality** = the intrinsic failure modes relative to producing the components within the boundary → derived from the contract + §2.
- **the comparison verdict** is the meta-deliverable → depends on the reconciled design being settled (states what changed from 01-37).
- **reference-authority disposition** is a focused sub-question feeding the contract + §4 (is it a border or not).

## Step 2–4 — Question Tree (pieces + verification criteria)

**E2 — §1 Identity / the intrinsic-boundary contract (the spine).**
Question: *What is IE's verb-meaning and its NOT-list, stated so that no other discipline is named?*
Verification: [ ] verb = "elaborate an inquiry — rephrase + frame a raw query, in light of the project goal, into multilayered aligned understanding"; [ ] **NOT-list grounded intrinsically** — "produces re-statements and framings; does NOT produce the inquiry's answer / a problem model / a work-piece partition / a solution judgment" — **zero neighbor names**; [ ] self-containment statement; [ ] the in/out test is "does it re-state/frame the inquiry (in) vs produce the inquiry's work-product (out)" — no ecosystem reference.

**E3 — §2 Components (output-organized) + inputs.**
Question: *What does IE take in and produce?*
Verification: [ ] inputs = {project_goal, original_query}; [ ] (a) why-this-inquiry-makes-sense (query↔goal); [ ] (b) small-scope + big-scope versions; [ ] (c) three rephrasings simple / scope-highlighted / importance-highlighted; [ ] (d) multi-request list, each with `how_connected_with_other_part` (+ optional seq/parallel attribute); [ ] no component named by a neighbor operation.

**E6 — §5 Output field schema (joint with E3).**
Question: *What is the exact serialized artifact?*
Verification: [ ] a field list covering all of E3's outputs with concrete names; [ ] the multi-request sub-schema (`requests:[{request, how_connected_with_other_part, seq_or_parallel?}]`); [ ] echoes the two inputs; [ ] one canonical name per field (no drift between §2 and §5).

**E4 — §3 Process Model (internal, neighbor-free verbs).**
Question: *What internal steps produce the output?*
Verification: [ ] read goal+query → grasp intent multilayered → produce why + scope-versions + 3 rephrasings → detect-and-connect multiple requests; [ ] verbs are IE's own (no "comprehend(=X)/perceive(=Y)/verify(=Z)" neighbor-mirroring); [ ] internal only (no pipeline/spawn).

**E5 — §4 Quality (intrinsic failure modes).**
Question: *How does the spec police itself without naming neighbors?*
Verification: [ ] failure modes stated intrinsically — **drift** (rephrasing changes meaning) · **flattening** (only one framing; loses multilayer) · **goal-detachment** (why-makes-sense not grounded in the goal) · **missed-split** (distinct requests bundled) · **over-reach** (IE answers/solves the inquiry instead of framing it — the upper bound, named WITHOUT any neighbor); [ ] faithfulness/no-drift as the headline quality; [ ] self-assessment.

**E7 — reference-authority disposition (the focused open question, H2).**
Question: *Is "check cited references are current/on-subject" IE's job?*
Verification: [ ] decided DROP-from-IE (re-introduces ecosystem awareness; not in the user's model; not "elaborate the inquiry") OR defer-to-a-different-home, with reason; [ ] confirm faithfulness-to-original+goal (no-drift) is the only fidelity IE keeps.

**E1 — The comparison verdict (meta-deliverable; the user's explicit ask).**
Question: *Where do the two designs agree, where does the user correct mine, what of mine survives, what is dropped?*
Verification: [ ] agree (elaborate query; multi-request); [ ] user-corrects-mine (self-containment — broader than flagged; project-goal input; richer output shape); [ ] mine-survives-demoted (no-drift faithfulness; seq/parallel attribute); [ ] dropped (neighbor NOT-list, "does not invoke," reference-authority, verdict-header-as-spawn); [ ] a DECIDED verdict (user's spine adopted), not "both good."

## Step 5 — Interface Map

| From → To | What flows | Direction |
|---|---|---|
| E2 → E3,E4,E5,E6 | the intrinsic-boundary contract (name no neighbor) | one-way |
| E3 ↔ E6 | the output elements ↔ their serialization | bidirectional |
| E3 → E4 | the components (to be produced by the steps) | one-way |
| E2 + E3 → E5 | boundary + components → the intrinsic failure modes | one-way |
| E7 → E2,E5 | reference-authority verdict → a border (or not) + a failure mode (or not) | one-way |
| (E2…E6) → E1 | the settled reconciled design → the comparison verdict | one-way |

Hidden-coupling check: E3 and E6 must use ONE name per field (the §2/§5 drift the prior run flagged as R6) — enforce single-source naming in E2's vocabulary.

## Step 6 — Dependency Order
1. **E2** (intrinsic contract).
2. **E3 ↔ E6** (Components + schema).
3. **E4** (process).
4. **E5** + **E7** (quality + reference-authority disposition).
5. **E1** (comparison verdict; needs the reconciled design settled).

## Step 7 — Self-Evaluation

| Dimension | Check | Verdict |
|---|---|---|
| **Independence** | Each piece answerable given E2 + inputs? | PASS — E3↔E6 handled as a joint node. |
| **Completeness** | Covers both deliverables (comparison + reconciled spec)? | PASS — E1 = comparison; E2–E6 = the spec; E7 = the one open disposition. |
| **Reassembly** | Pieces + interfaces = the answer the user asked for? | PASS — "compare yours with this" = E1, grounded in the reconciled E2–E6. |

**Determination-mechanism check:** runtime determinations — "does a spec sentence name a neighbor?" (→ E2's self-containment test) and "is reference-authority IE's?" (→ E7). Both mechanisms are in the tree. ✓

**Balance:** E2 + E3/E6 carry the substance; E1 is the user-facing payload; E4/E5/E7 lighter. Acceptable.

**Frontier for Innovation/Critique:** Innovation writes the intrinsic NOT-list + the field schema + the comparison table; Critique must (a) verify ZERO neighbor-names survive anywhere (the self-containment gate), and (b) settle E7 (reference-authority), and (c) check the comparison is decided, not mush.
