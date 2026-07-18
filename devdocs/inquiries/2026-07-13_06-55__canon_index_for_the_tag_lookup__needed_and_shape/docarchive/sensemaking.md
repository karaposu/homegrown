# Sensemaking — stabilizing the canon-index answer

## User Input

devdocs/inquiries/2026-07-13_06-55__canon_index_for_the_tag_lookup__needed_and_shape/_branch.md — with surfacing.md + articulate_warm.md read fully; warm settled round 0, conflict resolvable/low. Stabilize A1 the cost/instinct split / A2 the three needs / A3 maintenance facts / A4 candidate shapes / A5 vocabulary-edge policy; collapse the 4 musts. LEAN SV1–SV6.

---

## SV1 — Baseline

"Does the tag design need canon indexing?" arrives as a cost question. With the census in hand it is an accuracy question wearing a cost costume — and the user's instinct caught a real defect (the prior finding's wrong vocabulary count) that the cheap lookup would have inherited.

## Phase 1 — Anchors

**Constraints:** removal from canon excluded (the user's explicit constraint); no hand-maintained index (the dying writer tier); assessment-first; no canon reorganization; gates on spec/build changes.

**Key insights:**
1. **The cost/instinct split.** The committed lookup was names-only ("one glance… never research") — the per-CONCLUDE cost was always trivial. But the instinct vindicates on VOCABULARY grounds: a raw `ls` offers 3 superseded docs as pickable values (the two old north-stars even share a first heading), bare names under-inform (`reasoning.md`), and ★the prior finding's "~38 docs" was WRONG as a vocabulary count — the honest set is 22 current top-level (+ edges). The user caught a defect; the correction gets recorded against the 23-26 finding.
2. **The need decomposes into three:** VALIDITY (which files are pickable), INFORMATIVENESS (a gloss per name — 23/25 first headings work verbatim), CURRENCY (the vocabulary must track the folder as canon grows).
3. **No owner exists for a maintained index.** No canonize protocol; no canon README; hand-files die here (the routelog). The surviving shape is GENERATE-ON-DEMAND — the adapter precedent.
4. **The status mechanism already exists as the user's own practice:** superseded canon gets RENAMED (`old_*` — 3 live instances). "Cleaning without removing" is his rename convention; formalizing it costs one policy line.
5. **The C2 share is small (~3%)** — the same filter serves the inference lens at parse time.

**Structural points:** shapes α (one-command view) and β (generated sidecar) COMPOSE — same filter rule, different consumers (the CONCLUDE picker vs machine consumers); γ (inline list) and δ (hand index) fail currency/ownership by construction.

**Foundational principles:** measurement over assumption (the census adjudicates); the writer-scale; generated-never-maintained where no owner exists.

**Meaning-nodes:** the cost costume (an accuracy problem stated as a cost problem) · the valid vocabulary · gloss-by-first-heading · generate-on-demand · the rename convention.

### SV2 — Anchor-informed

The question restructures: not "index or not" but "which GENERATED shape satisfies validity + informativeness + currency, with the one policy line (what counts as pickable) blessed by the user once."

## Phase 2 — Perspectives

- **Technical/Logical:** shape α is literally one command (`grep -m1 '^#' docs/canon/*.md` with an old-filter) — zero artifact, automatic currency, and it drops verbatim into the still-unwritten CONCLUDE paragraph (the tag step is an ungated offer; the fix's marginal delivery cost ≈ zero). Shape β is a ~20-line sibling of the adapter emitting `canon_vocab` (names + glosses + status) for machine consumers (C2's parse; the lens's group labels; schema validation of `canon_areas` values!). New anchor: ★**β enables VALIDATION** — with a sidecar, the second parse can flag a `canon_areas:` value that names no current canon doc (an honesty counter: `unknownCanonAreas`) — α alone cannot give the machine side that.
- **Human/User:** the user's felt worry dissolves into a one-line reassurance (names not contents) PLUS a earned credit (he caught the wrong count); his rename practice becomes the rule — nothing new to learn.
- **Strategic/Long-term:** canon grows by canonization; both α and β track it automatically; the policy line ("pickable = current top-level + load-bearing findings; old-marked and infrastructure excluded") survives growth. If a canonize protocol ever EXISTS later, β's regeneration can hook there — not needed now.
- **Risk/Failure:** (a) γ/δ fail by construction (drift; death); (b) α's risk: the two heading-less stragglers gloss as "(no heading)" — shrug-able, or a 2-line user-gated fix; (c) β's risk: a stale sidecar if regeneration is forgotten — mitigated by regenerating at consumption time (the adapter already regenerates data.json on `npm run data`; β can ride the same command!); (d) over-formalizing the subdir policy — keep it one line with a default, user-adjustable.
- **Resource/Feasibility:** α = a wording tweak inside an existing offer; β = ~20 lines riding the adapter's run; the straggler fix = 2 one-liners; the policy = 1 blessed line. Total new standing maintenance: ZERO.
- **Definitional/Internal consistency:** does α violate "never research"? No — reading 25 first HEADINGS via one grep is the listing, enriched; the never-research rule guards against opening DOCS to decide, which stays excluded. Does β violate the atlas-domain rule? It READS canon for names+headings (the clarified read-verb: names and counts — a first-heading is a title, i.e., a name-grade string; consistent) and renders no content.
- **Phase/Calibration:** all shapes are phase-honest (nothing renders before consumers exist; β ships only with its consumers).

### SV3 — Multi-perspective

New anchors: β's validation payoff (the `unknownCanonAreas` honesty counter — machine-checkable tag validity); β riding `npm run data` (no separate regeneration habit); the never-research rule's boundary clarified (headings = listing-grade, docs = research).

## Phase 3 — Ambiguity Collapse

#### C1: Is indexing NEEDED?
**Counter-interpretation:** no — the names-only listing was already fine; the user's worry was just the heavier misreading.
**Why the counter fails (structural):** the census shows the raw listing is an INVALID vocabulary (3 superseded picks offered; the confusable old north-stars) and an under-informative one (bare `reasoning.md`); and the prior's own "~38" number was wrong — defects independent of the cost misreading. The need is real; only the ARTIFACT-SHAPE assumption ("an index file to maintain") was the trap.
**Confidence:** HIGH. **Resolution:** indexing-as-maintained-artifact NO; filter+gloss-as-generated-rule YES. **Depends on this:** the whole design.

#### C2: Is the per-CONCLUDE lookup too expensive?
**Counter-interpretation:** yes — even a listing is friction at every dive.
**Why the counter fails (structural):** the listing is one command whose output is ~25 short lines; the committed step already budgets "one glance… skip when unclear; never research"; and the enriched form (α: names + first-heading glosses) is the SAME one command. The genuine transfer: the worry's substance moves from cost to ACCURACY — picking wrong from a wrong list — which the filter + glosses fix.
**Confidence:** HIGH. **Resolution:** cost claim corrected; accuracy claim adopted as the real problem.

#### C3: Can a static answer (inline list / hand index) serve?
**Counter-interpretation:** paste today's 22 names into the CONCLUDE paragraph — simplest possible.
**Why the counter fails (structural):** canon grows by canonization (the user's ongoing act) — a static list drifts by construction, and a drifted vocabulary re-creates the invalid-pick problem the fix exists for; the hand index additionally has no owner (no canonize protocol) and dies per the writer-scale's own mortality data. Currency is a NEED, not a nicety.
**Confidence:** HIGH. **Resolution:** only generated shapes (α, β) are viable; γ and δ eliminated.

#### C4: Does the filter rule need the user?
**Counter-interpretation:** the old-filter is mechanical (`grep -v old`) — no user involvement needed.
**Why the counter fails AS STATED:** the mechanical filter keys on a CONVENTION the user owns (renaming superseded canon `old_*`), and the vocabulary's EDGES (subdirs: one area vs nine values; infrastructure classes) are policy, not fact. He blesses ONE policy line once; everything downstream is mechanical. Skipping the blessing would silently canonize an assistant-made curation rule over HIS artifact.
**Confidence:** HIGH. **Resolution:** one user-blessed policy line (default drafted for him: "pickable = current top-level + load_bearing_findings; old-marked and infrastructure subdirs excluded; thinking_disciplines = one area"), then zero recurring involvement.

### SV4 — Clarified

Fixed: the cost/instinct split; the three needs; generated-only shapes; the one policy line as the user's single act; the correction to the prior finding. Open for I/C: the α+β composition (which ships when); β's validation counter; the subdir default's exact wording; the straggler fix; C2's merge-vs-exclude.

## Phase 4 — Degrees-of-Freedom Reduction

**Fixed:** the answer's spine (cost falls; instinct vindicated; the wrong "~38" corrected); validity/informativeness/currency as the test; generate-on-demand as the only owned shape; the rename convention as the status mechanism; the one-blessing policy pattern.
**Eliminated:** maintained/hand indexes; inline static lists; any canon deletion or reorganization; content-reads at CONCLUDE.
**Open for I/C:** the composed design (α now-ish inside the tag offer; β with the parse); the `unknownCanonAreas` counter; the subdir default; the 2 stragglers; C2 merge-vs-exclude; the correction wording.

### SV5 — Constrained

One answer spine, four collapses, two composable generated shapes, one user-blessed line — the development field is a handful of wording and default choices.

## Phase 5 — Conceptual Stabilization (SV6)

**The stabilized model:** The user's worry, taken at its word, dissolves — the committed lookup was a filename listing, one glance, never content reads. But the instinct underneath it is vindicated twice: the raw listing is an INVALID vocabulary (it offers three superseded `old_*` docs as pickable values, two of them sharing a heading with each other) and an under-informative one (bare names like `reasoning.md`); and the prior finding's "~38 docs" was simply the wrong count — the honest vocabulary is ~22 current top-level docs plus policy edges. What the fix needs is not a maintained index (which has no owner — no canonize protocol exists — and would die at the hand-run tier like the routelog) but a FILTER + GLOSS rule applied by GENERATED shapes: (α) the one-command view — the CONCLUDE step's lookup becomes `list names + first headings, old-filtered` (23/25 headings work verbatim as glosses; currency automatic; zero artifact); and (β) a ~20-line generated sidecar riding the adapter's existing run, giving machine consumers the same vocabulary — including a new honesty counter (`unknownCanonAreas`) that validates tag values, and C2's old-doc handling (~3% of references). The status mechanism costs nothing new: the user already curates removal-free by RENAMING superseded canon (`old_*`), and the only act asked of him is blessing one policy line (what counts as pickable — default drafted) plus, optionally, two one-line headings for the straggler docs.

**Delta from SV1:** SV1 saw a cost question; SV6 has an accuracy problem in a cost costume, a corrected prior, three named needs, a two-shape generated design with one user blessing, and zero standing maintenance.

---

## Saturation telemetry

Perspective saturation: reached (the last perspectives confirmed; one added β's validation payoff). Ambiguity resolution: 4/4 collapsed structurally. SV delta: substantial (cost question → accuracy diagnosis + generated design). Anchor diversity: all five types. Failure modes checked: status-quo (the prior finding was NOT defended — its count was corrected against ourselves); premature stabilization (the counter-per-collapse ran, incl. the simplest-static case); anchor dominance (removing the census leaves the ownership + currency pillars); clean-resolution (the strongest static counter tested structurally); self-reference (external grounding = live census + heading extraction + citation counts). **PROCEED.**
