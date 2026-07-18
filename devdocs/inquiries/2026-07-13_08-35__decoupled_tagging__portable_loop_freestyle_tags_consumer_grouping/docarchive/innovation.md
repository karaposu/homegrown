# Innovation — the decoupled architecture: content per piece, slots for the gate

## User Input

devdocs/inquiries/2026-07-13_08-35__decoupled_tagging__portable_loop_freestyle_tags_consumer_grouping/decomposition.md — read with sensemaking.md fully. Production-task over P1–P4, LEAN. Required inversions (P1 the edge; P2 the (c) both-write case; P3 skip-LLM; + the mandated "pause the tag enterprise" challenger). CM both ways (day-one empty project; no-atlas). DT native (library/host extension points) + different (field-botany capture-then-curate). Absence both levels. Extrapolation (3 projects). Save with logs + audit + telemetry.

---

## Seed + methodology mode (Phase 1)

**Seed:** the piece-list P1–P4 over the verified law + the birth-stage evidence. **Inherited mode:** Standard default, lean production-task. **Alternative considered:** Contrarian-rethink — rejected as run mode (the correction is the user's own and verified; challengers embedded per piece). **Decision: default, lean.**

---

## P1 — The law (principal + the required inversion)

**P1-A (principal).** **The portability law:** the traverse loop runs beyond this project (verified: `diagnostics_from_other_projects/` holds routed runs; the protocols are user-scoped). Therefore: **the loop's specs may depend only on the loop's OWN conventions and outputs** (the inquiry-folder layout it defines, its canonical files, frontmatter it writes) — **never on artifacts another system owns** (docs/canon, the seeds index, the atlas). Existing debts named: conclude.md's `devdocs/seeds` reference (conditional — the graceful-absence shape any project-flavored clause must use) and its `cognitive_harness` pointers — prior art of the disease, not license. **The generalization (a standing rule candidate):** *"Portable specs reference only the loop's own conventions and outputs; project features enter only via conditional graceful-absence clauses."* The library/host transfer names the architecture: the loop DEFINES the interface (the tag field); each host project PROVIDES the implementation (its grouping).
*Tests:* survives (fact-anchored). **Principal.**

**P1-inv — "self-dependency is ALSO coupling — true portability = zero assumptions."** *Tests:* a loop with zero conventions writes nothing anywhere — the conventions ARE the loop; what travels with the loop cannot be coupling TO something else. The true half absorbed: the loop's conventions should stay MINIMAL and self-contained (no new layout assumptions ride in with the tag step — and none do: frontmatter already exists). Killed as stated; minimality kept.

## P2 — The portable write core (principal + the required inversion)

**P2-A (principal) — the replacement tag step (verbatim; supersedes the canon-anchored paragraph in the still-unshipped tag offer):**

> **Tags (at CONCLUDE, after compiling the finding body):** write up to **7 freestyle `tags:`** (lowercase-kebab) into the finding's frontmatter — the concepts this finding ACTUALLY ENGAGES, in the dive's own words. Before writing, two glances, both inside the loop's own record: **(1) the warm pass's anchor vocabulary** — `articulate_warm.md` is already among the outputs being compiled; its committed context-need names the dive's territory; **(2) the record's existing tags** — e.g. `grep -h '^tags:' devdocs/inquiries/*/finding.md | tr -d '[]' | tr ',' '\n' | sort -u` — **reuse an existing form when it honestly fits** (recall-then-verify, with the record itself as the verify-target); when nothing fits, coin freely. Empty record → skip the glance, coin freely (day one is freestyle by design). Tags locate; they never grade. Unclear → fewer or none. *This step references nothing outside the loop's own outputs.*

**Portability check run on the wording:** every referenced artifact (the finding, articulate_warm.md, the record's own findings) is loop-owned ✓; the path is the loop's own convention ✓; no canon, no seeds, no atlas ✓. The honesty rules carry over intact; the 06-55 recall-then-verify survives retargeted at the record.
*Tests:* novelty (the self-vocabulary = a lookup that installs itself everywhere the loop goes); scrutiny — the drift answer is layered (glance + consumers), not denied; actionability — drops into the existing unshipped offer.

**P2-inv — "(c) both-write is right: ACTIVE dives deserve tags; warm should write territory tags into its own artifact."** *Best case developed for the gate:* warm writes `territory_tags:` into articulate_warm.md (its OWN artifact — portable, self-owned; no new file); the adapter MAY read them for ACTIVE nodes only (no finding exists yet); they expire the moment the finding's tags exist. Cost: a warm-spec edit + a second tag surface + a staleness rule. Sized against the gap: ACTIVE dives ≈ 0–1 at a time, already visible by status and title; the 23-26 design had the same absence unpriced. *To the gate as a DEFER-shaped candidate with its best case stated — the rider the user's warm intuition genuinely earns if ACTIVE-dive visibility ever matters.*

### The day-one walkthrough (CM-ADD — the portability acceptance test)

A brand-new project adopts the loop tomorrow: first dive runs; at CONCLUDE the glance greps an empty record → skip → freestyle tags written from the dive's own words. Second dive: the glance shows dive one's tags → soft reuse begins. No canon, no atlas, no setup — nothing references a missing file; the vocabulary grows with the record by construction. **PASSES end-to-end.** (This walkthrough belongs in the finding as the acceptance narrative.)

## P3 — The project-side convergence layer (principal + the required inversion)

**P3-A (principal).** THIS project's stack, all behind existing gates:
1. **Normalization** (rides the second parse): lowercase; spaces→kebab; conservative trailing-s fold. Collapses case/spacing/plural variants mechanically.
2. **The relocated canon-JOIN:** a small project-side mapping (tag → canon area) consulted by the adapter, with an `unmappedTags` honesty counter. **Production options enumerated:** (i) mechanical name-match (tag stems vs canon doc names) — honest expectation: SPARSE (freestyle words rarely equal filenames); (ii) ★**hand-TUNED additive mapping lines** (a small `tag_map` file: `time-road -> visualisation`, appended occasionally as unmapped tags accumulate — hand-tuned-but-machine-consulted; bounded because OPTIONAL enrichment of a generated view, not a required record; the writer-scale concern is real and priced) — **recommended start**; (iii) LLM-assisted completion — folded into the gated pass below, last.
3. **The gated LLM grouping pass (DEMOTED to last resort):** runs only when the normalization+join residue is demonstrably synonym-shaped and large; generate-time batch; its ENTIRE output is a reviewable tag→group mapping artifact (never silent, never at render). Gate conditions: enough tags accrued; the residue measured; the user's go.
4. **Lens notes:** the overlay lens groups by mapped-area where the join covers, else by raw normalized tag; the ≥15-tagged-folders condition survives, now counting freestyle tags.

**P3-inv — "skip LLM grouping entirely — normalization + the join + occasional hand-merges cover it."** *Tests:* plausibly TRUE — with ≤7 tags per dive and the self-vocabulary glance encouraging reuse, the synonym residue may stay small; the hand-tuned map absorbs it a line at a time. **Absorbed as the ordering:** the LLM pass is LAST RESORT behind measured residue — the user's own "or we will find even better solution" honored; the better solution is likely "mostly not needing it."

## P4 — The amendments + implications roll-up (principal)

**The supersede/relocate split:**
- **23-26 (consumer mark):** the WRITE-side canon anchor (canon_areas as a loop field; the canon lookup) is SUPERSEDED by the portability law — the loop runs beyond this project, which that dive never had in view. Its freestyle core replaces it. SURVIVING: the carrier verdict (re-confirmed on canon-free grounds), the children policy's spirit (all tags are now "children" — the kebab/count rules carry), the nursery (RE-HOMED project-side: recurring tags → canonization candidates — now a watch in THIS project's adapter, not the loop), the overlay lens, the kills (hand-tagging; maintained trees).
- **06-55 (consumer mark):** the vocabulary glance, the policy line, and the pending policy blessing DISSOLVE (they were write-side canon vocabulary). SURVIVING: the census + the count correction (standing record); the two live bug-fixes (they become the project-side JOIN's canon-area filter); recall-then-verify (retargeted at the record); β's shape (canonVocab → the join's generated table; unknownCanonAreas → `unmappedTags`).
- **21-48:** untouched (C2 never touched the loop; the second parse gains `tags[]` instead of `canon_areas[]` — a field rename in an unbuilt offer).
**The user's remaining acts:** ONE core act — the reworded tag-step go (the policy blessing is no longer needed; freestyle needs no vocabulary decision). Project-side gates unchanged (the parse; the lens; the join/LLM pass much later).
**Routes-vs-finding split** as usual.

### Mechanism evidence

- **DT-native (library/host):** a library must not read the host's config; it defines extension points, the host implements. Adopted as the architecture's name: the tag field = the loop's interface; grouping = host implementation. The law's wording strengthened by it.
- **DT-different (field botany):** collectors write freestyle locality labels at collection; herbaria standardize at accession — capture-then-curate, a century of success for exactly this two-stage shape. Strong support; theorems-never.
- **CM-ADD:** the day-one walkthrough (above) — the portability acceptance test, passed by construction.
- **CM-REMOVE (no atlas):** the tag step still yields explicit self-location for search and future consumers, cheaper than the canon version (no lookup infrastructure at all) — a supporting row, not the justification (the 23-26 sizing carries over).
- **Absence, patch:** no portable lookup existed — the self-vocabulary is the patch. **Redesign:** a from-scratch portable loop would ALWAYS have had tags as its own output; canon-anchoring was this project's gravity distorting a portable design — the correction restores the design the loop should have had (a frame-note for the finding).
- **Extrapolation (3 projects):** three records, three self-grown vocabularies, three independent consumer stacks; the atlas maps only this one. Scales by construction; nothing to unbuild.

## Inherited Frame Audit

Challengers, all generated-and-tested: the edge (P1-inv — killed; minimality kept) · (c) both-write (P2-inv — best case developed, sized, to the gate as DEFER-shaped) · skip-LLM (P3-inv — absorbed as the last-resort ordering) · ★the mandated deepest one: **"pause the tag enterprise — three tag dives in two days while the road/parse/acceptance offers sit; fold this correction in and STOP designing until something ships."** *Run fairly:* FOR — design-stacking without shipping is a real failure pattern; the offer pile grows. AGAINST — each dive was the user's own arriving question (the loop answers what arrives); the road + route layer DID ship yesterday (two builds); the re-acceptance pass waits on the USER's felt channel, not on more design. **The true half is ADOPTED as the finding's closing recommendation:** with this correction the tag thread is DESIGN-COMPLETE — the next tag-related act is the (single, reworded) go or nothing; no further tag design is warranted without new evidence, and the standing non-tag offers (the re-acceptance pass above all) remain the larger picks. The audit does not fire unanswered. **RE-TEST TRIGGER check:** the 06-55 policy-blessing route is voided by this dive (its object dissolved) — flagged for the consumer mark, not silently dropped.

## Assembly check

The pieces compose into ONE corrected architecture: the law (P1) fixes the seam; the portable core (P2) writes freestyle tags with two loop-internal glances; the project layer (P3) converges them by escalating-cost mechanisms (normalize → join → hand-lines → gated LLM last); the amendments (P4) kill the write-side canon work, relocate the read-side yield, and reduce the user's pending acts to ONE. **Emergent:** the self-vocabulary makes the loop's tagging SELF-BOOTSTRAPPING everywhere it's installed — day-one freestyle, month-three convergence aid, no setup — the portability constraint didn't weaken the design; it forced the version that works anywhere.

## Telemetry

Generators 4/4 (Combination = the architecture · Absence patch+redesign · DT native+different · Extrapolation) · Framers 3/3 (Lens = the no-atlas record-value re-test · CM ADD+REMOVE · Inversion ×3 + the mandated pause challenger). Convergence: YES — freestyle-at-write/converge-at-read from three grounds (the portability law · the botany transfer · the drift-layers analysis). Survivors tested 13/13 light. Per-piece log: P1 [Comb, DT, Inv] meta-decision, satisfied · P2 [Comb, CM, Inv] meta-decision, satisfied · P3 [Comb, Inv] meta-decision, satisfied · P4 [Comb] content-production. Failure modes: none observed (the pause challenger's true half adopted rather than deflected; (c) developed at its best rather than strawmanned). **Overall: PROCEED.** To the gate: confirm the law + its edge · the step's verbatim (portability-check it independently) · the (c) rider's verdict (DEFER-shaped — confirm/refute) · the P3 ordering (LLM last) + the hand-tuned map's writer-scale honesty · the amendment wordings · the pause recommendation's inclusion.
