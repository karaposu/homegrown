## User Input

`devdocs/inquiries/2026-06-01_11-27__inquiry_elaboration_structure_with_recent_context/_branch.md` (priors consumed: surfacing / sensemaking / decomposition / innovation)

---

# Critique — IE Structure with Recent Context

## Phase 0 — Dimensions (extracted; weighted)

| Dimension | Asks | Weight |
|---|---|---|
| **Self-containment (project risk; the gate)** | Does the refined design name ANY other discipline / specific external component, anywhere across F1–F6? | critical |
| **User-fidelity** | Are all the user's elements (project_goal, original_query, recent_context, three peer rephrasings) present in the user's language? | critical |
| **Intrinsic recent-context (project risk)** | Is recent_context defined source-agnostically (no naming of suppliers / external systems)? | critical |
| **Backwards-compatibility** | Does the rename + addition migrate cleanly from 09-54? | high |
| **Temporal-layering principle** | Is the three-anchor / three-scale layering principled (not ad-hoc) and extensible? | high |
| **Anchor-imbalance bite** | Does the new failure mode actually catch something distinct from anchor-detachment? | high |
| **Completeness** | Both deliverables (refinement + migration note) present; all 09-54 commitments preserved? | high |
| **Authorability** | Could a spec author write the refined file from F1–F6? | medium |

## Phase 1 — Landscape (brief)

- **Viable region:** anchor-grounded family with three members + emphasis variants + multi-request handling + intrinsic recent-context definition + intrinsic failure modes.
- **Dead region:** anything that names a discipline / specific external supplier (self-containment violation); anything that re-introduces neighbor-mirroring.
- **Boundary region:** the recent-context vocabulary entry (currency + role + source-agnostic — borderline if the wording leaks a supplier); the anchor-imbalance failure mode (must distinguish from anchor-detachment).

## Phase 2 — Adversarial Evaluation (multi-axis prosecution)

**1. Self-containment gate — does F1–F6 name any discipline or specific external component?**
- *Prosecution (spec-gap):* scan every produced sentence. F2's vocabulary entry ends "*its source is supplied by the runner*" — **"runner" is a specific category of project artifact**, not an intrinsic concept. This is the same self-containment smell 09-54 caught my prior design with, applied here at a sub-component level.
- *Defense:* "runner" is a category, not a specific runner; comparable to routelister §1.2's "downstream cognition" (also a category). It's borderline.
- *Collision:* SURVIVE with **R-x** — replace "runner" with a more neutral phrase to stay clearly on the intrinsic side of the line. The routelister-§1.2 model uses *"the surrounding loop-aware layer"* / *"downstream cognition"* — generic role-descriptions, not project-specific component names. Adopt the same pattern: **"the surrounding orchestration layer"** or simply **"external to this discipline."**
- Elsewhere in F1–F6: F3 schema names only fields (intrinsic); F4 process uses IE's own verbs; F5 failure modes describe kinds-of-work (over-reach is "begins answering/solving" — generic, no neighbor named); F6 migration references 09-54 (IE's own prior, allowed by Changes-from-Prior convention). → only F2 needs the wording fix.
- **Verdict:** SURVIVE + REFINE (R-x).

**2. User-fidelity — are the user's elements present in their language?**
- *Prosecution:* the user named three rephrasings (project_goal / simple / recent_context); did we honor that grouping?
- *Defense:* yes — the anchor-grounded family has exactly three members in the user's order (simple / project_goal / recent_context); each named with the user's word for the anchor. The rename of 09-54's `why_makes_sense` → `rephrase_in_project_goal` was *driven by* the user's framing ("project goal rephrasing"). `recent_context` appears verbatim as both input and rephrasing label.
- *Collision:* SURVIVE.

**3. Intrinsic recent-context — source-agnostic?**
- *Prosecution:* F2 defines recent_context by *currency* (what's in active focus) and *role* (the inquiry's immediate surround). Could a reader infer a specific supplier?
- *Defense:* currency is a property of content, not of source; role is structural (around the inquiry); the cartography analog (as-of stamp) confirms the intrinsic definition. The phrase "what has just been discussed, decided, or produced" describes *kinds of things* (discussion, decision, production), not specific sources.
- *Collision:* SURVIVE — coupled with R-x (replace "runner"), the entire F2 entry is source-agnostic.

**4. Backwards-compatibility — clean migration from 09-54?**
- *Prosecution:* a reader of 09-54 hits `rephrase_in_project_goal` where they expected `why_makes_sense` — confusion.
- *Defense:* F6 migration note explicitly maps the rename 1:1 with "semantic content preserved" + rationale (user's parallel framing of three peer rephrasings). CONCLUDE template requires the Changes-from-Prior section for refined findings, and a reader who consults it gets the mapping immediately.
- *Collision:* SURVIVE.

**5. Temporal-layering principle — principled and extensible?**
- *Prosecution:* are three scales the right number? What about future-pointed (intent → outcome), or session-bounded?
- *Defense:* the three scales (long-term / short-term / inquiry-itself) ARE the user's request, and they map cleanly to natural language ("the goal" / "what's in the air" / "the question itself"). Innovation flagged the family as **open to extension** — adding a future-pointed or other anchor doesn't require restructuring; it adds a member to the anchor-grounded family. Domain-Transfer (cartography legend + as-of stamp; contract recitals) showed the temporal layering is a natural structural pattern, not an ad-hoc invention.
- *Collision:* SURVIVE.

**6. Anchor-imbalance bite — distinct from anchor-detachment?**
- *Prosecution:* read F5's text: anchor-detachment = "a rephrasing-in-X doesn't actually reference X"; anchor-imbalance = "one anchor smothers the others; the multilayered grounding collapses to a single view." These overlap — if anchor B's rephrasing echoes anchor A's content (smothering), isn't that ALSO B-detachment (B's content absent from B's rephrasing)?
- *Defense:* they describe the same surface symptom from two angles, but the *failure-shape* differs:
  - **anchor-detachment** is per-anchor and *content-empty*: rephrasing-in-X is generic, doesn't reference X (X-shaped hole).
  - **anchor-imbalance** is cross-anchor and *content-leakage*: rephrasing-in-X is populated, but with Y's content (X's anchor is silently *replaced* by Y's).
  Different correctives: detachment → re-ground rephrasing in X's content; imbalance → re-do the rephrasings with the recessive anchors as primary, breaking the dominant anchor's content-spillover.
- *Collision:* SURVIVE with **R-y** — sharpen F5's wording to make the content-empty (detachment) vs content-leakage (imbalance) distinction explicit, including the differential corrective. Without this sharpening the two modes blur in practice.

**7. Completeness — both deliverables + all 09-54 commitments preserved?**
- *Prosecution:* did anything get dropped?
- *Defense:* check against 09-54 commitments — self-containment ✓ (with R-x), output-organized ✓, intrinsic NOT-list ✓ (unchanged), editor-brief image ✓ (extended), two-family rephrasing structure ✓ (now explicit), scope versions ✓, multi-request handling ✓, intrinsic failure modes ✓ (generalized), perception/action split ✓, over-reach upper bound ✓, dropped+re-homed reference-authority ✓ (unchanged). Refinement deliverables: F1 temporal-layering paragraph ✓, F2 vocabulary entry ✓ (with R-x), F3 schema ✓, F4 process ✓, F5 failure-mode delta ✓ (with R-y), F6 migration note ✓.
- *Collision:* SURVIVE — no commitment lost; refinements (R-x, R-y) are wording-level.

**8. Authorability.**
- *Prosecution:* is the content concrete enough?
- *Defense:* F1–F6 contain actual paragraphs/schema/wording, not abstract pointers. A spec author assembles them into the refined `references/<name>.md`. The only step remaining is integration into the existing 09-54-style spec (or a fresh re-author).
- *Collision:* SURVIVE.

## Phase 3 — Verdicts

- **SURVIVE:** the temporal-layering frame (F1); the three-member anchor-grounded family + the two-family §2/§5 schema (F3); the §3 process update (F4); the anchor-detachment generalization (F5 part 1); the migration note (F6); the editor-brief image; the user-fidelity of all named elements; backwards-compatibility via the rename mapping.
- **REFINE (authoring-level, not structural gaps):**
  - **R-x — Self-containment wording.** Replace "*its source is supplied by the runner*" in F2 with "*its source lies outside this discipline; the surrounding orchestration layer supplies it.*" (Generic role-description, no project-specific component named — matches routelister §1.2 pattern.) Scan F1–F6 once more for any other "runner" mentions; replace with the same neutral phrasing if found.
  - **R-y — Anchor-imbalance vs anchor-detachment sharpening.** In F5, distinguish the two modes explicitly: anchor-detachment is *content-empty* (rephrasing-in-X has no X-content — X-shaped hole); anchor-imbalance is *content-leakage* (rephrasing-in-X is populated, but with Y's content — X silently replaced by Y). Different correctives per the wording given in Phase-2 #6.
  - **R-z — Graceful-degradation marker explicit.** Keep the innovation-proposed "anchor not supplied" marker for empty anchor inputs; state it once in §5 alongside the conditional-fields convention so it's not lost.
- **KILL:** none. (No candidate models/solves the inquiry, names a neighbor in a load-bearing way, or breaks 09-54.)

## Phase 3.5 — Assembly Check

The six pieces, with R-x / R-y / R-z applied, compose into one coherent **temporal-layered three-anchor refinement** of the 09-54 spec — self-contained, user-faithful, principled, extensible. The unifying image holds: the commissioning editor reads three sources (publication mission = project goal; what's in the air = recent context; the pitch itself = original query) before writing the brief. The assembly SURVIVES; emergent value over individual pieces = the schema is now organized by *temporal scale*, which makes new anchors addable without restructure.

## Phase 4 — Coverage + Convergence

- All 8 dimensions evaluated.
- One clean SURVIVE (the assembly) with three authoring-level REFINEs (R-x, R-y, R-z) — no structural gaps.
- Zero KILLs (the dead region — naming neighbors / re-introducing wrapper-fusion / collapsing the temporal layering — is empty of survivors, as intended by the refinement's frame).
- **Converged → TERMINATE.** The question (refined IE structure with recent-context as a third anchor) is answered.

## Coverage Map

| Dimension | Coverage | Notes |
|---|---|---|
| Self-containment | **viable** | R-x closes the one residual leak in F2 |
| User-fidelity | **viable** | three rephrasings in user's language |
| Intrinsic recent-context | **viable** | currency + role + source-agnostic (with R-x) |
| Backwards-compatibility | **viable** | F6 migration note maps the rename |
| Temporal-layering principle | **viable** | three scales + extensible family |
| Anchor-imbalance bite | **boundary → viable with R-y** | distinct from detachment when wording is sharpened |
| Completeness | **viable** | every 09-54 commitment preserved + refinement deliverables present |
| Authorability | **viable** | concrete content per F1–F6 |

## Signal

**TERMINATE — clean SURVIVE on the assembly, ranked above any single piece. Three authoring-level REFINEs (R-x / R-y / R-z) carried forward for spec authoring.**

## Convergence Telemetry

- **Dimension coverage:** 8/8 evaluated.
- **Adversarial strength:** **STRONG** — R-x found a real residual self-containment leak (the "runner" word in F2); R-y sharpened the anchor-imbalance failure mode against a genuine prosecution. Neither was rubber-stamped.
- **Landscape stability:** **STABLE** — the structural verdict (refinement adopted) does not change between iterations; the three REFINEs are wording-level, not structural.
- **Clean SURVIVE exists:** **YES** — the assembly survives with no critical-dimension caveats.
- **Failure modes observed (per `references/td-critique.md` §7):** **none.** Not wrong-dimensions (project-specific risk dimensions surfaced — self-containment, intrinsic-recent-context — beyond defaults). Not rubber-stamping (R-x + R-y are real prosecution wins). Not nitpicking (no candidate KILLed on minor issues; REFINEs target authoring details, not load-bearing claims). Not dimension-blindness (cross-referenced 09-54's perspective set — self-containment + user-fidelity + backwards-compat + intrinsic-recent-context + completeness all covered). Not false convergence (clean SURVIVE on critical dimensions). Not evaluation drift (dimensions and weights fixed in Phase 0). Not self-reference collapse (independent reasoning via routelister §1.2 model + cartography Domain-Transfer external anchor).
- **Verdict:** **PROCEED** (with R-x / R-y / R-z applied during authoring).

---

## The Answer (refined IE structure with recent context)

The 09-54 reconciled design is **refined** (not corrected) by adding **recent context** as a third anchor at a third temporal scale. The refinement is small, principled, and self-contained:

- **Three inputs at three temporal scales:** `project_goal` (long-term; ambient, persists) · `recent_context` (short-term; in active focus, decays) · `original_query` (the inquiry itself).
- **Two output families** (no flat list):
  - *Anchor-grounded rephrasings* (one per grounding, three members): `rephrase_simple` (no-anchor base) · `rephrase_in_project_goal` (renamed from 09-54's `why_makes_sense`, content preserved) · `rephrase_in_recent_context` (NEW).
  - *Emphasis variants* (unchanged from 09-54): `rephrase_scope_highlighted` · `rephrase_importance_highlighted`.
  - Plus the unchanged `scope_small` / `scope_big` and conditional `requests:[]` list.
- **Intrinsic definition of recent context** (with R-x): defined by *currency* (what's in active focus) and *role* (the inquiry's immediate surround); source-agnostic; the surrounding orchestration layer supplies it.
- **Refined §4 failure modes** (with R-y): preserved (drift, flattening, missed-split, over-reach) + generalized (`anchor-detachment` — content-empty; fires per anchor) + new (`anchor-imbalance` — content-leakage; one anchor's content fills another's rephrasing).
- **Migration note** (F6) maps the rename `why_makes_sense` → `rephrase_in_project_goal` cleanly; no 09-54 commitment is corrected.
- **Editor-brief image extended:** the editor reads the mission (project goal) AND what's in the air lately (recent context) AND the pitch (the inquiry) before writing the brief.

The verdict is **clean SURVIVE**; the spec is ready to author from F1–F6 with the three minor REFINEs (R-x, R-y, R-z) applied.
