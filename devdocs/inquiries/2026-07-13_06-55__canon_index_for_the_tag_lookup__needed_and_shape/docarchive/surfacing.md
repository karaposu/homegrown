# Surfacing — the canon census, gloss extractability, and the maintenance facts

## User Input

PURPOSE: what the canon-index assessment needs — (A) the committed lookup's exact wording; (B) ★the canon census (valid vs superseded vs subdirs); (C) ★gloss extractability (first headings as one-liners); (D) index precedents; (E) maintenance facts (canonize protocol? index file?); (F) the C2 old-doc citation share. Tag; don't adjudicate. Save to this inquiry's surfacing.md.

- **Mode:** artifact (A–F) · **Entry:** signal-first · **Territory:** explicit-bounded

---

## Traversal Trace

| # | Region | Item identifier(s) | Relevance | Conf | Note | Recency |
|---|---|---|---|---|---|---|
| 1 | A | the committed lookup verbatim (23-26 finding §2, authored this session): "list `docs/canon/*.md`; choose the 1–3 canon docs this finding's content ACTUALLY ENGAGES (one glance at the listing; skip when unclear; never research; if no canon doc honestly fits, write none)" — NAMES only; no content reads anywhere in the step | core | HIGH | the cost worry's heavier reading (content-reads) was never the design; the listing-doubt reading remains live | `{source: filesystem, value: 2026-07-13 (this session)}` |
| 2 | B | ★THE CENSUS: docs/canon = **25 top-level .md** + subdirs: `load_bearing_findings/` 1 (the venture-rephrase canon!) · `thinking_disciplines/` 9 · `runtime_environment/` 2 · `regression/` 1 — total 38. Of the 25 top-level, **3 are superseded variants** (`old_project_north_star`, `old2_project_north_star`, `thinking_space_dynamics_old`) → **22 current top-level docs** | core | HIGH | ★the 23-26 finding's "~38 docs" was WRONG as a vocabulary count — the honest valid set ≈ 22 top-level (+ the load-bearing finding; subdir policy open) | `{source: filesystem, value: 2026-07-13 (live)}` |
| 3 | B | the raw-`ls` vocabulary problem CONFIRMED: a bare listing includes the 3 superseded docs as pickable tag values — and the old duplicates are maximally confusable (`old_project_north_star` + `old2_…` head "# Finding: Autonomous Consciousness Goal" while the current heads "# Project North Star — Autonomous, Self-Improving Cognition") | core | HIGH | the user's instinct BITES here — not on cost, on vocabulary VALIDITY | same |
| 4 | C | ★GLOSS EXTRACTABILITY: **23/25 top-level docs carry an informative first heading** usable verbatim as a one-line gloss (e.g. "Grasp Management — the reach/grasp constraint and the four levers"); 2 lack any heading (`methodogy_development_pitfalls`, `reasoning`) | core | HIGH | glosses are mechanically extractable TODAY — one `grep -m1 '^#'` per doc; no authoring needed except 2 stragglers | same |
| 5 | E | ★NO CANONIZE PROTOCOL EXISTS (grep over skills: zero hits) — canonization is the user's bare manual act — and NO index/README exists in docs/canon | core | HIGH | a "canonization-time index-update line" has NO home to live in; a hand-maintained index = the dying writer tier → generated-on-demand is the only surviving shape | same |
| 6 | E/B | the de-facto status convention: the user ALREADY marks superseded canon by RENAMING (`old_*` / `*_old`) — a removal-free curation practice in live use (3 instances) | core | HIGH | "cleaning without removing" already exists as the rename convention; a status rule could formalize what's practiced | same |
| 7 | F | ★C2 SUBSET CHECK: of ~308 folder-side canon references, only **9 hit old_* docs (~3%)**; top-cited current docs: north_star 45 · sustained_loop 37 · thinking_space_dynamics 36 · meaningful_traversal 25 | core | HIGH | the subset problem is REAL but SMALL for C2 — mergeable (old→current) or excludable at parse time | same |
| 8 | D | index precedents: the atlas adapter (GENERATED snapshot; probe→parse→validate; regenerate-don't-maintain) · MEMORY.md (an index-with-hooks, maintained as the assistant's memory DUTY — a protocol-tier writer with a standing owner) · `_seed.md` (append-only with schema) · docs/canon itself: index-less | core | HIGH | the surviving precedent for THIS case = the adapter's generate-on-demand pattern (no standing owner exists for a canon index) | `{source: none, value: null}` |
| 9 | B | the subdir policy question (open, for sensemaking): `thinking_disciplines/` = 9 per-discipline docs (one area or nine values?); `load_bearing_findings/` holds the venture-rephrase canon (highly engage-able); `runtime_environment/`+`regression/` = infrastructure-class | core | MED | the valid vocabulary's EDGE is a policy choice, not a fact — flag, don't decide here | same |
| 10 | A/E | the CONCLUDE-edit context: the tag step is still an UNGATED OFFER (the 23-26 R1); any lookup refinement lands as a wording change INSIDE that same offer — no second spec surface exists | core | HIGH | the fix's delivery cost ≈ zero marginal (the paragraph isn't written into the spec yet) | same |

## State Summary

- **Territory echo:** A the committed wording · B the census · C the glosses · D precedents · E maintenance · F the C2 share.
- **Purpose echo:** fix the facts the index assessment stands on; adjudication downstream.
- **Coverage map:** A confirmed (verbatim) · B confirmed (counted + classified) · C confirmed (23/25 extractable; 2 named stragglers) · D confirmed · E confirmed (two absences verified) · F confirmed (~3%).
- **Confirmed-absent:** any canonize protocol; any canon index/README; any content-read in the committed lookup.
- **Concept-names:** the valid vocabulary (~22 current top-level + edges) · the rename convention (old_* = the practiced, removal-free status mark) · gloss-by-first-heading · generate-on-demand (the adapter pattern) · the no-owner fact (no canonize protocol → no index-update home) · the ~3% C2 share.
- **Frontier flags:** none blocking — the subdir policy (item 9) is sensemaking's to stabilize as a policy field, not a fact gap.
- **Workspace-populated:** `{populated: true, populated-at: 2026-07-13_07-00, extent: A–F probed; census + glosses live}`.

## Telemetry

Mode artifact · signal-first · cycles: 2 (census+maintenance → glosses+shares) · items: 10 traced (9 core / 1 core-MED) · sub-phase: not fired · convergence: territory exhausted at this resolution · failure modes checked: territory-mis-binding (no), interpretive-overstep (the "~38 was wrong" is a COUNT correction, cited; the design implications stay downstream), recency-as-verdict (no) · **Self-assessment: PROCEED.**
