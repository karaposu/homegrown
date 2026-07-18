# Innovation — the canon-index answer: content per piece, slots for the gate

## User Input

devdocs/inquiries/2026-07-13_06-55__canon_index_for_the_tag_lookup__needed_and_shape/decomposition.md — read with sensemaking.md fully. Production-task over P1/P3/P2/P4, LEAN. Required inversions (P1 attention-cost/no-lookup; P3 no-blessing; P2 sidecar-over-build; + the mandated "premature optimization — the tag offer isn't even gated" challenger). CM both ways (zero-commands; no-CONCLUDE-context). DT native (build systems) + different (museum accession). Absence both levels (frontmatter-status-in-canon enumerated honestly). Extrapolation (60 docs; L3). Save with logs + audit + telemetry.

---

## Seed + methodology mode (Phase 1)

**Seed:** the piece-list P1/P3/P2/P4 over the census + the three-needs test. **Inherited mode:** Standard default, lean production-task. **Alternative considered:** Minimum-mechanism — rejected barely (the P1 inversion deserves a real run; otherwise this run IS near-minimum). **Decision: default, lean.**

---

## P1 — The answer (principal + the required inversion)

**P1-A (principal).** **The split:** the stated cost worry falls — the committed lookup was names-only ("one glance at the listing; skip when unclear; never research"), never content reads; a ~25-line listing is trivial. The instinct vindicates on ACCURACY: the raw listing is an invalid vocabulary (3 superseded `old_*` docs offered as pickable; the two old north-stars share a first heading) and an under-informative one (`reasoning.md` names nothing). **★The correction (recorded per the corrects-discipline):** the 23-26 finding's "1 to 3 picks from the ~38 canon docs" was WRONG as a vocabulary count — 38 counts subdirs and superseded variants; the honest pickable set is **~22 current top-level docs + the load-bearing-findings entries (+ policy edges)**. The user's follow-up caught this; credited. **The three-needs test:** any lookup shape must deliver VALIDITY (only pickable docs offered), INFORMATIVENESS (a gloss per name), CURRENCY (tracks the folder as canon grows).
*Tests:* survives (census-anchored throughout). **Principal.**

**P1-inv — "the user meant exactly what he said: ATTENTION cost — even 25 lines competes at CONCLUDE's fullest moment; the real fix is NO lookup (the runner knows canon warm)."** *Tests:* the true half is real — CONCLUDE is context-heavy, and a warm runner often DOES know canon. But bare recall is exactly what the project's own standing guard distrusts (the verify-canon-terms discipline exists because warm claims about canon mis-state — 12 recorded applications); and a COLD session's CONCLUDE knows little. **Resolution — absorbed as the α wording's shape: RECALL-THEN-VERIFY** — pick from working knowledge, confirm against the one-command glance. Cheapest honest attention path; the guard's own pattern become protocol. Refined, not killed.

## P3 — The policy line (principal + the required inversion)

**P3-A (principal) — the blessed line, drafted verbatim:**

> **CANON-VOCABULARY POLICY (blessed once):** pickable canon areas = **current top-level docs + `load_bearing_findings/` entries**. Excluded: docs marked superseded by the rename convention (`old_*` / `*_old`); `runtime_environment/` and `regression/` (infrastructure); `thinking_disciplines/` counts as **one** area. **Superseded canon is marked by RENAME** — the practiced convention (3 live instances), now the standing status rule — or, at the user's preference, by a `status: superseded` frontmatter line inside the doc; the filter keys on either.

**Per-edge alternatives (enumerated, not chosen):** `thinking_disciplines/` as nine individual values (if per-discipline effort tracking is ever wanted); infrastructure included (if runtime docs become engage-able); frontmatter-status instead of rename (see the absence-redesign note — cleaner long-term, but it edits canon docs, the user's artifact; the rename achieves the same signal at zero touch — his call, both supported).
*Tests:* survives; the one-blessing pattern keeps governance where it already lives.

**P3-inv — "no blessing needed; it's all mechanical convention."** *Tests:* the filter IS mechanical, but it keys on a convention the USER owns, the edges (one-area-vs-nine) are judgments over HIS artifact, and formalizing makes the convention LOAD-BEARING (its named failure mode: a future superseded doc left unrenamed silently re-enters the vocabulary — he must know the rename now carries weight). Killed; the blessing stays — one line, once.

## P2 — The composed design (principal + the required inversion)

**P2-A(α) — the rewritten CONCLUDE lookup (verbatim, amending the still-unshipped tag paragraph):**

> After compiling the finding body: run the **vocabulary glance** — one command listing pickable canon docs with their first-heading glosses (policy-filtered: superseded and infrastructure excluded), e.g. `grep -m1 '^#' docs/canon/*.md docs/canon/load_bearing_findings/*.md | grep -viE '/old_|_old\.'`. **Pick from working knowledge and CONFIRM against the glance** (recall-then-verify); choose the 1–3 areas this finding ACTUALLY ENGAGES — skip when unclear; never open docs to decide (headings are listing-grade; documents are research); if no area honestly fits, write none. Record as `canon_areas:`; optionally ≤5 free child `tags:` (lowercase-kebab, never parents). Tags locate; they never grade.

Currency automatic (the command reads the live folder); zero artifact; the never-research boundary restated with its clarified edge.

**P2-A(β) — the generated sidecar (mini-spec; builds ONLY with its consumers):**
- Emitted by the adapter's existing run (`npm run data` — no new habit): `canonVocab[]` in the envelope (or a sibling file): `{name, gloss (first heading), status: current|superseded, class: top|load-bearing|discipline|infra}`.
- **Consumers (all already-offered, all ungated-into by β):** the second parse validates each finding's `canon_areas` against current names → a new honesty counter **`unknownCanonAreas`** (machine-checked tag validity — the thing α alone cannot give); the canon-area lens takes labels/glosses from it; **C2's old-doc handling — recommendation: MERGE old→current** where the successor is name-evident (`old_project_north_star`→`project_north_star`; `thinking_space_dynamics_old`→`thinking_space_dynamics`) rather than exclude — merging preserves the ~3% signal; the successor map is derivable from name stems, and unmappable old refs count as `superseded-cited`.
- ~20 lines; regenerated never maintained (the build-system rule).
**The composition timing:** α lands NOW-ish as wording inside the 23-26 R1 offer (still unshipped — zero marginal delivery); β is SPEC'd now and BUILDS the day its consumers build (the parse) — no speculative infrastructure.
**The stragglers (2 heading-less docs):** the fix is user-gated and its TEXT is not drafted here — a gloss for an unread doc would be fabrication; the rule ships instead: *at fix time, open each doc once and write its own first heading from its content.*
*Tests:* novelty (recall-then-verify as protocol; the validation counter); scrutiny (each shape passes the three-needs test; β's over-build risk answered by consumer-bound timing); actionability (verbatim wording ready).

**P2-inv — "β is speculative over-build; α alone suffices."** *Tests:* the true half bound the timing (β builds only with the parse — adopted above). The kill fails as a whole: without β, tag VALUES are never machine-validated (typos and stale names accumulate silently — the exact no-silent-drops violation), and C2 + the lens re-derive the same filter separately (three copies of one rule). Refined into the consumer-bound composition.

### Mechanism evidence

- **DT-native (build systems):** generated artifacts regenerate at build time, never hand-maintained — β rides the existing data build exactly as codegen rides make. Adopted structurally.
- **DT-different (museum accession):** the registrar assigns at intake, one glance against the collection's own catalog — the α pattern's kinship (intake-time, catalog-anchored, never re-cataloging). Teaching-grade.
- **CM-ADD ("zero commands at CONCLUDE"):** what survives = pure warm recall, validated LATER by β's counter — viable as the DEGRADED mode (a runner that can't shell out still tags; the counter catches drift) — noted as the fallback, superseded as default by recall-then-verify.
- **CM-REMOVE ("no CONCLUDE context — a separate cold tag pass"):** breaks warmth — the cold pass re-reads each finding to tag it = mini-batch-extraction per finding, and the carrier probe's whole point (the dive knows what it became) is lost. Re-confirms the carrier commitment.
- **Absence, patch:** no old-filter exists anywhere — the policy line is the patch. **Redesign both-directions:** (from-scratch) canon docs would carry `status:` frontmatter — self-describing, rename-proof; honestly enumerated as the user's OPTION (it edits his artifact; the rename gives the same signal at zero touch; the filter supports both). (Already-present) the rename convention IS the status system, practiced.
- **Extrapolation (canon at 60; L3):** the glance = 60 lines (still one screen); the policy survives growth; the L3 supervisor tags through the same mechanical glance; β's classes absorb new subdirs by extension.

## Inherited Frame Audit

Challengers, all generated-and-tested: attention-cost/no-lookup (P1-inv — absorbed as recall-then-verify) · no-blessing (P3-inv — killed; the convention becomes load-bearing) · sidecar-over-build (P2-inv — refined to consumer-bound timing) · ★the mandated deepest one: **"premature optimization — the tag offer isn't even gated; this designs the second floor of an unapproved house."** *Run fairly:* FOR — the offer IS ungated; internals-design before a go can presume the go. AGAINST — the user HIMSELF raised this question AS his gate-consideration ("otherwise each conclude… will be too expensive" is a reason to say no); answering it SERVES the gate decision rather than presuming it; and the yield is mostly gate-independent information (the "~38"→22 correction stands regardless; C2's filter need exists independently since C2 is separately offered; the census is now project knowledge). The true half absorbed: **nothing here builds** — α is wording inside an unshipped offer, β is consumer-bound spec, the only near-term acts are the user's (the blessing; optionally the stragglers). The audit does not fire unanswered. **RE-TEST TRIGGER check:** one, honest — the 23-26 finding's count claim is corrected (already handled as P1's correction + P4's consumer mark; no other committed claim touched).

## Assembly check

The pieces compose into ONE amendment package to the standing tag offer: the answer (P1) corrects the count and locates the real problem; the policy (P3) is the user's single line; the design (P2) applies it in two generated shapes with bound timing; the landings (P4 below, in the roll-up) deliver everything into EXISTING offers — no new gate is created. **Emergent:** recall-then-verify makes the project's own verify-canon-terms guard (a practiced honesty discipline) into protocol wording — the lookup IS the guard, mechanized at its cheapest point.

## P4 — The landings (principal)

(1) **α** → an amendment to the 23-26 R1 offer's paragraph (unshipped — zero marginal delivery; consumer mark on that map). (2) **β** → a rider spec on the 21-48 second-parse/adapter offers (`canonVocab` + `unknownCanonAreas` + C2's merge rule) — builds with them. (3) **The correction** → recorded in this finding + a consumer mark on the 23-26 record. (4) **The blessing + stragglers** → the user's two small acts, enumerated as routes. (5) Routes-vs-finding: the answer + correction + policy + design → the finding; the amendment/rider/blessing acts → routes. Standing offers otherwise unchanged.

## Telemetry

Generators 4/4 (Combination = the package · Absence patch+redesign-both · DT native+different · Extrapolation) · Framers 3/3 (Lens = the degraded-mode read; CM ADD+REMOVE; Inversion ×3 + the mandated challenger). Convergence: YES — recall-then-verify from three grounds (the attention inversion · the verify-canon-terms guard's precedent · the accession-register transfer). Survivors tested 12/12 light. Per-piece log: P1 [Comb, Inv] meta-decision, satisfied · P3 [Comb, Inv] meta-decision, satisfied · P2 [Comb, DT, CM, Inv] meta-decision, satisfied · P4 [Comb] content-production. Failure modes: none observed (the premature-optimization challenger ran on its merits; the straggler-gloss fabrication temptation caught and refused). **Overall: PROCEED.** To the gate: confirm the split + correction wording · bless-ability of the policy line (is the default right?) · α's verbatim (recall-then-verify; the grep's exact filter) · β's consumer-bound timing + the C2 MERGE recommendation · the landings.
