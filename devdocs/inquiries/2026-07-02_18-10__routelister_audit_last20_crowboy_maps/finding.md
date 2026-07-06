---
status: active
model: claude-fable-5
effort: max
---
# Finding: The Routelister Field Audit — 20 Post-Change Maps Measured; the Verdict Is GOOD, With One Real Need

## Question

From `_branch.md`: *"Can you check the last 20 inquiries' routelister.md files in /Users/ns/Desktop/projects/crowboy/devdocs/inquiries and tell me what would make routelister better, or what it needs — or is it good as it is?"* — an empirical audit with a three-way verdict frame, the null verdict explicitly allowed. The corpus (2026-06-24 → 2026-07-02; 20 maps; 175 routes) entirely postdates the June-22 spec changes (the Essentiality field and column; the line-of-sight WHY; the lean index), making this their field test.

**Goal:** measured observations (counted, not vibes — the standard the June-21 audit set), the adoption state of the June-22 changes, per-aspect three-way verdicts, and proposals only where the data warrants — no spec edits this run.

## Finding Summary

- **The verdict, in one line: routelister is in its best measured state — the June-22 changes landed and are earning their keep in this corpus; it needs exactly ONE thing (a designed home for "this route also appears on that map"), plus two one-line spec alignments; everything else is healthy dialect or an earned null.**

- **The June-22 changes are validated in the wild of this corpus** — on usefulness-shaped evidence, not mere presence: the lean index is uniform in 20/20 maps (the old grain/kind columns are gone from every index); **Essentiality genuinely varies** (54% core / 38% supporting / 7% peripheral — an all-core column would have been compliant and useless; variance is the information); the **@-qualifier grew a living project dialect** (`@later`, `@pilot`, `@build`, `@scale`, `@next-inquiry` — words tracking crowboy's real phases, which mandated fields don't grow); **WHYs reach the goal rung in 80% of lines** (150/187); the old dense Movement field (median 224 chars, max 483) became **Move averaging 182 + Lands on its own line**; Directions average **54.7 self-explanatory characters** (the old "too short and opaque" complaint is gone).

- **The ✓ done-column is alive and has evolved exactly along its design axis.** On the one engaged map it carries consumer ticks WITH inline outcome notes ("✓ (schema + fill script + DB)") and an improvised half-state ("◑ … pending user call") — the consumer-filled cell working as the operational glance it was kept for, and independently reproducing the log-your-choices doctrine (disposition + outcome pointer) in miniature.

- **The one real need: cross-map route identity.** The wild invented it twice, independently: crowboy's maps mark shared routes `[∥ 11-30]` (with an explanatory preamble: "shared routes… are not re-derived"), and this project's own maps handle the same situation with Excluded-with-pointer entries. The legal home exists: a **within-identity "Appears-also-on" pointer** — the route-record schema's boundary bans fields valued as a *different* concept-identity, and this pointer names a LOCATION of the *same* identity's other appearance (the Depth-link row is the existing precedent). Three clauses make it implementable: the value is a location; it is authored backward by nature (a static map can't point forward — consumers may backfill older maps' cells, exactly as they tick ✓); sameness is judged by the authoring run's ordinary individuation, recognition opt-in.

- **Two small betters, both one-liners:** records still redisplay `grain:`/kind while the indexes obey the lean rule (the newest map already self-healed — one emphasis clause aligns the rest), and one WHY was caught naming five sibling route-ids as dependents — the rule stands (no route↔route edges); the fix is a worked area-property example ("every build-direction in this field is unsellable until the loop runs" — same truth, zero ids).

- **Earned nulls and practice-anchored monitors:** Guidance-label variance (8 "Guidance Mode:" / 13 plain), one bold-header outlier, and compound priorities (MED-HIGH) are information-preserving dialect — no action. Meaning-gaps under-adoption (9/20 files vs ~60% eligible routes) is a MONITOR (the rule permits silent degradation, so skip-vs-degrade is undecidable from outside). The unused verb tail (DIAGNOSE 0/175) is territory-natural in a build-heavy corpus — this project's own maps use the epistemic verbs. The fresh-only `_route.md` pattern (cumulative machinery never re-invoked) is grain-appropriate: per-inquiry exhausts conclude and don't re-run; the cross-run value honestly remains unexercised everywhere.

- **The epistemic ceiling, named:** the corpus was authored by the same model family that audited it. The verdict rests on population-scale counts plus referent-checks (qualifier words naming real project phases; tick notes naming real artifacts; improvisations solving real coordination problems) — but the cheapest fully-external check is the one only you can run: **does the daily-reader experience match?** (The closing question below.)

- **One proposal rides out of this audit** (on your go, itemized so any part can be struck): a single 4-part spec touch-up — the Appears-also-on pointer + the ✓-cell consumer-content sentence + the records-lean clause + the WHY area-property example. Compatibility verified: four disjoint sentences in one file.

## Finding

### 1. Why this audit ran, and against what baseline

The June-21 audit measured 12 crowboy maps and produced concrete complaints — a dead grain column (153/153 "project"), a derivable kind column, dense single-line Movement fields (median 224 characters), short opaque Directions — which became the June-22 spec changes (the lean index; the Essentiality field with its column; the line-of-sight WHY; Move/Lands/Touches). Eleven days later, twenty new maps exist, all written under the new spec. This audit counts them — the changes' field test, and the audit→refine loop's second full cycle.

### 2. Before and after, measured

| Aspect | June-21 baseline (12 maps) | This corpus (20 maps; 175 routes) |
|---|---|---|
| grain column | 153/153 "project" — dead weight | gone from 20/20 indexes (lingers on record lines — §5 below) |
| kind column | present, derivable | 0/20 |
| Movement | one dense line; median 224, max 483 | Move avg 182 (max 397) + Lands separate (132 lines) |
| Direction | short, opaque, restated | 54.7-char self-explanatory noun-phrases |
| done-state | nothing | ✓ in 20/20, authored empty; ticked with outcome notes where engaged |
| Essentiality | didn't exist | 54/38/7 core/supporting/peripheral + a living qualifier dialect |
| WHY | local-only complaint | 150/187 lines (80%) reach the goal rung |
| Excluded / Telemetry | present | 20/20, reasons + failure-mode lines throughout |

Maps stayed compact (91–187 lines for 4–13 routes). Structural compliance is essentially total; the one outlier is a record-header style (bold lines instead of `###` headings, 1/20).

### 3. Why "GOOD" is earned, not assumed — and its ceiling

Presence proves compliance, not value. Three signals are usefulness-shaped: **variance** (Essentiality distributes 54/38/7 — the column discriminates; an all-core column would be compliant noise), **dialect growth** (authors reached for the phase-qualifier 40+ times with their own project words — `@pilot`, `@launcher-build` are real crowboy phases, external referents a stylistic habit wouldn't produce), and **use under need** (the ✓ cell got ticked with outcome notes on the map whose routes actually got built; the `[∥]` marker was invented to solve a real overlap between two location-design inquiries and came with its own explanatory preamble). The WHY-climb (80%) is the weakest signal alone (a pattern-count), grounded by the read specimens' content-bearing goal rungs.

**The ceiling:** one author-model wrote the corpus and one audited it. Named, not laundered — and it points at the two genuinely external checks: a different author-model producing maps someday, and — today — your own daily-reader verdict, which this finding closes by requesting.

### 4. The ✓ mark in the wild — working, and evolving

On `2026-06-27_15-04` (subdivision columns), four routes carry ✓ with inline outcomes and one carries **◑** — a half-state with "pending user call." Nothing in this violates the mark's design: the enumerator authored the cell empty and never reads it; the fill is the consumer's. What the wild added is that the fill is *informative* — state plus a one-line outcome pointer — which is the log-your-choices doctrine appearing spontaneously in a table cell. The only action this earns is protective: one spec sentence so a future editor (human or AI, tidying a map) never "normalizes" consumer annotations away.

### 5. The one need — cross-map route identity — and its legal shape

The same route sometimes lives on two maps: crowboy's location-design work produced overlapping fields across `2026-06-27_11-30` and `2026-06-27_15-04`, and the author marked the shared routes `[∥ 11-30]` rather than re-deriving them; this project's own maps hit the identical situation three times today and improvised differently (Excluded entries pointing at the other map). Two projects, two independent inventions, one need — and no designed home.

The home is legal and small. The route-record schema's own boundary says no field's value may be a *different* concept-identity — but a pointer to where the *same* identity also appears is a location value, and the schema already contains exactly that value-type (the Depth-link row points to the same identity's own depth run). Hence the sketch:

> **Appears-also-on:** `<inquiry/map-ref>` *(same route)* — an optional, within-identity pointer row beside Depth-link. Semantics: SAMENESS only — never before/after, never requires (the dependency side-door stays shut). Value-type: a location of the same identity's other appearance. Authored backward by nature (a static map cannot know future maps); consumers may backfill an older map's qualifier cell (`core · [∥ …]`), exactly as they tick ✓. Sameness is judged by the authoring run's ordinary goal-relative individuation when it happens to know the other map — recognition is opt-in (no obligation to search), and the index-cell `[∥ …]` form the wild already writes is the pointer's compact display.

The mature scale of this need — a project-level route-identity registry (what a between-inquiry Selector would read) — is real and deliberately deferred: two improvisations justify a pointer, not an institution, and pointers are precisely what a future registry would harvest.

### 6. The two small betters

**Records-lean alignment.** The spec's lean rule (grain/kind "not re-displayed when constant or derivable") is obeyed by every index and lagged by most records (`grain: project-space` still rides most record type-signature lines; kind-parens broadly). No information is lost — it is ~one redundant segment per route against the lean identity — and the newest map already dropped grain unprompted. One emphasis clause finishes what the wild started.

**The WHY area-property example.** One specimen (R11 of the newest map — the money-loop gate) expressed honest prerequisite-ness by naming five sibling route-ids as dependents, brushing the rule that the WHY's neighbourhood rung is an area-property, never a route↔route edge. The rule is right (edges are the seed of sequencing graphs); the need is real; the fix is a worked example in the WHY note: *"every build-direction in this field is unsellable until the loop runs"* — the same truth with zero route-ids.

### 7. Earned nulls and monitors

- **Dialect (null):** the Guidance label split (8 `Guidance Mode:` / 13 plain `Guidance:` — the shape, a mode word plus reasoned `(bc …)` pointers, survives in both); the one bold-header map; compound priorities (`MED-HIGH`). Nothing lost; nothing to do.
- **Meaning-gaps (monitor):** blocks appear in 9/20 files against ~60% of routes being the eligible verbs. The rule permits legal silence (bare markers; nothing when unassessable), so skip cannot be distinguished from degrade by observation. **Trigger:** at the next routelister audit (your demonstrated recurring practice — two audits in 11 days), re-check whether the Confidence→gaps by-product fires on MED-Confidence DEVELOP routes; if still under-firing, one SKILL-layer reminder line — nothing structural.
- **The verb tail (null, territory-relative):** DIAGNOSE 0/175, DEEPEN 2, REFRAME 1 — a build-heavy project's exhaust; this project's own maps use the epistemic tail routinely. **Trigger:** re-open only if DIAGNOSE stays unused across structurally diagnostic territories too.
- **Fresh-only `_route.md` (null, grain-appropriate):** every sampled index is single-invocation — the design's own prediction for per-inquiry exhausts that conclude and never re-run. Carried honestly: the cross-run cumulative value remains unexercised anywhere; its test awaits a living territory.
- **Also queued for the next audit:** the un-ticked question (whether quiet ✓ columns mean un-engaged routes or un-recorded engagements — the engagement-record layer was outside this audit's sweep), and pointer adoption if the touch-up ships.

### 8. What this audit deliberately did not conclude

No vocabulary trimming on single-territory evidence; no Meaning-gaps redesign on undecidable evidence; no registry on two improvisations; no relitigation of the June-21 adjudications (this corpus validated them); and no unscoped "validated everywhere" — the GOOD is a full-population count of THIS corpus, with format verdicts generalizing by construction and content distributions staying territory-relative.

## Next Actions

### MUST

*(None — the ask was an assessment, and the null verdict was a permitted outcome. The value concentrates in the first two COULDs.)*

### COULD

- **What:** Execute the **4-part spec touch-up** (one coordinated edit to `cognitive_harness/routelister/references/routelister.md` + the skills sync copy), itemized for strike-ability: (1) the Appears-also-on pointer (schema row + one §5.3 sentence + optional §5.1 qualifier-cell mention); (2) the ✓-cell consumer-content sentence; (3) the records-lean clause; (4) the WHY area-property example.
  **Who:** the AI, on your go — the one-coordinated-edit pattern you've previously chosen.
  **Gate:** condition-bound — your explicit go.
  **Why:** the audit's entire actionable yield in one reviewed pass; compatibility verified (four disjoint sentences, one file).

- **What:** Answer the **daily-reader question** (below) — the external check the confound analysis says only you can supply.
  **Who:** you.
  **Gate:** observable — this finding's delivery.
  **Why:** it either lifts the single-author-model ceiling or hands the next audit its sharpest lead.

### DEFERRED

- **What:** The **project-level route registry** (cross-map identity at institutional scale; the Selector's future read-surface).
  **Gate:** condition-bound — cross-map pointer-chasing becomes a felt cost, or the between-inquiry Selector materializes.
  **Why (if revived):** the pointers are its future rows; harvest, don't re-invent.

- **What:** The **next-audit checklist** (Meaning-gaps by-product; verb tail across territory-types; the un-ticked question; pointer adoption).
  **Gate:** observable — the next routelister audit in your recurring practice.
  **Why (if revived):** resolves this audit's three monitors on evidence.

## Reasoning

**Why GOOD survived its hardest prosecution (the self-reference confound).** The counts are population-scale, not sampled; the usefulness signals carry external referents (real phase-words; real artifacts in the tick notes; a real coordination problem behind `[∥]`); and the complaint-history delta corroborates weakly (the June audit was born from concrete complaints; the interval since produced none). What the defense cannot do is dissolve the confound — so the finding names it and delegates the deciding check to the one external judge available (you, the daily reader).

**Why the pointer beat both its rivals.** "Don't bless dialect" fails against convergent improvisation (two projects, two forms, one need) — and the anti-museum design blesses the SEMANTICS while leaving the glyph free. "Build the registry instead" fails on scale discipline (N=2 improvisations; the cumulative index machinery itself is still unexercised — don't stack floors on unused floors) and survives as the deferral the pointer feeds.

**Significant kills:** verb-trimming (single-territory evidence); a Meaning-gaps nudge NOW (undecidable skip-vs-degrade); treating `[∥]` as a dependency edge (it asserts sameness, not order — and the edge ban is what keeps enumeration from becoming sequencing); "promising" instead of GOOD (would misreport a full-population count as a sample); shipping only the pointer (three known one-liners would queue a second edit of the same file — the churn the coordinated-edit pattern exists to prevent).

## Open Questions

### Monitoring
- The three practice-anchored monitors of §7 (Meaning-gaps; verb tail; un-ticked maps) — all fire at your next routelister audit.
- Pointer adoption, if the touch-up ships: do future maps use Appears-also-on where `[∥]` was improvised?

### Research Frontiers
- The registry's design space (deferred; fed by the pointers).
- A different-author-model corpus — the only full escape from the confound.

### Refinement Triggers
- If your daily-reader verdict contradicts the counts → the mismatch is the next audit's first question (the counts say what's THERE; you say what READS).
- If the cumulative `_route.md` machinery stays unexercised as living territories appear → re-open whether per-inquiry indexes are its right home.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
can u check /Users/ns/Desktop/projects/crowboy/devdocs/inquiries last 20 inquiry's routelister.md and tell me whta make routelister bettter, or what it  needs, or as it is good?
```

</details>
