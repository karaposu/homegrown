---
status: active
model: claude-fable-5
effort: unknown
---
# Finding: paper 25 (distributed cognition) — five seeds; the one-seed invariant is broken

## Question

"Read `devdocs/paper_seed/25.md` fully and use `cognitive_harness/protocols/seed_harvester.md` with it" — harvest run n=5, and **the fix package's first live test** (the amended protocol's coverage table, granularity rule, second-harvest backstop, and coverage telemetry executed for the first time). Paper 25: **Hollan, Hutchins & Kirsh (ACM TOCHI 2000), "Distributed Cognition: Toward a New Foundation for Human-Computer Interaction Research."** The §11 identity-check ran first and came back clear (papers 11–14 cite Hutchins; none is this paper). Territory note: this returns to the cognitive-artifacts vein papers 11–14 mined pre-protocol — with an anchor-space that has since grown by everything the seed machinery built.

## Finding Summary

- **Seed-yield: FIVE records — 1 LIVE + 4 NASCENT — at unchanged gate rigor (58% of candidates killed).** The one-seed invariant (1/0/1/1 across the previous four runs) is broken; this is the variance the fix package was built to restore, delivered by its first run.
- **The live one — p25-S4, the invisible-supports check:** before any protocol/spec redesign, ask *"what undocumented functions might the current form serve?"* and check the run-artifacts. The paper's airspeed-tape case (useful features "inadvertently removed" by redesign not grounded in observation) pointed at ourselves: the one-seed diagnosis proved the harness carries undocumented execution-practice, and the fix package itself edited 13 lines without such a check. Adopt at the next spec-edit.
- **The nascent four:** **p25-S1** — seed-index entries record their *consultation history* (hot/cold seeds visible; p16-S1's future predictor needs exactly this data); **p25-S2** — memory files carry *recall-marks* (staleness made visible; the verify-canon memory's hand-kept count is the manual instance proving the need); **p25-S3** — record interaction *events*, not just outcomes (the diagnosis had to reconstruct events from artifacts; the p23-S1 audit needs this data layer); **p25-S5** — *model the user as a functional component* of the cognitive unit (error-signal, diversification, seed-picking — so autonomy-increasing changes know which human functions need mechanical replacements). Each carries a specific, checkable trigger.
- **The coverage table worked:** 13 of 99 cells attempted (each a falsifiable hypothesis), 86 skips all coded with reasons, no pre-selection, no "THE candidate." One survivor (p25-S5) came from an **unflagged** cell — the diagnosed lesson ("the interesting candidates are often in cells the first pass would have skipped") demonstrated on the first run.
- **The band was exceeded and NOT trimmed:** committed 0–3, landed 5 — stated as a calibration miss per the amended §9 #6 (every record gate-clean; the old bands were calibrated on capped runs). The no-quota guard is shown both ways in the gate: two borderline candidates died under variance-pressure re-prosecution; nothing was trimmed to fit.
- **Ladder (separate): CONFIRMING-PLUS + a large mirror-set; no import.** The plus: the paper's integrated loop (observe → theorize → design → observe) with its *"no method other than observation"* commitment converges on the improvement practice we independently built (improvement_observations → the diagnosis → the package → this test). The mirrors stayed mirrors — the harness is a textbook distributed-cognition instance, and vividness never entered the yield.

## Finding

### 1. What the paper claims (the claim-axis, compressed)

Distributed cognition draws the cognitive unit by **functional relationships**, not skin or skull (:66-84): a ship's bridge or a cockpit is a cognitive system. Cognition distributes three ways (:107-114): across group members, across internal/external structure, and **through time** — *"products of earlier events can transform the nature of later events."* Work materials **become elements of the cognitive system** (:186-192); culture accumulates partial solutions and also blinds (:211-221). Method: **event-centered cognitive ethnography** — only observation discovers unanticipated use (pilots displaying the radar test-pattern as a fuel-transfer reminder, :366-369), and automated interaction-histories are a rising data source (:259-261). The cost of skipping it: the airspeed-tape case — redesign not grounded in observation *"inadvertently removed"* the features pilots actually used (:283-312). The paper proposes an integrated loop (theory ↔ ethnography ↔ experiment ↔ design, :317-419) and exhibits mechanism-grade specifics: representational-stance shifting and **non-referent encoding** (files left near the trash, :553-574), **history-enriched digital objects** (use-histories support expertise and get *"actively, but mistakenly, designed out of 'clean'… environments"*, :603-683), and **intelligent use of space** (arrangements that simplify choice, perception, and computation, :757-839).

### 2. How the run worked (the live test)

Surfacing built both table axes from the full read (11 major claims × 9 anchors — 5 of the 9 anchors postdate the vein's original mining). Sensemaking stabilized the absorber map and flagged 8 hot cells **without closing the field**. Innovation executed the whole table: 13 attempts, 86 coded skips, 12 plural candidates. The gate killed 7 with quoted grounds (owned-pattern-new-site; obvious-at-need; no-decision; absorbed; speculation), passed 5, asked the second-harvest backstop (answer: nothing beyond the table), and applied the granularity rule (the use-history family: index and memory anchors = two separate cross-referenced records; the findings-anchor version failed alone and was not smuggled in). The deliberate-design disanalogy — "our system is engineered and documented, nothing hidden to discover" — was defeated where it mattered by the diagnosis's own finding: the harness's *execution* carries undocumented practice even when its specs are legible.

### 3. Why these five are news (compressed; full records below)

- **S1/S2 (use-history):** verified absence — every artifact carries creation-history; *nothing anywhere records use*. Our files are exactly the paper's "clean digital environments," with the supports never designed in. Both records have real waiting consumers (p16-S1's predictor; memory hygiene against silent staleness).
- **S3 (events vs outcomes):** the telemetry records what happened, never how — the one-seed diagnosis paid the reconstruction cost, and the p23-S1 audit needs precisely the counter-generation events this would capture.
- **S4 (the check):** no pre-change check exists anywhere in the protocol stack, and the target event is frequent (19 spec-edit lines this week). Cheap, concrete, warranted now — LIVE.
- **S5 (the user as component):** the unit-of-analysis principle applied at the one boundary our self-description stops at. The observations already exist scattered ("the user was the signal"; "the human IS the awareness probability") — the component-model would make autonomy transitions designable. From an unflagged cell.

### 4. The vein-return readout

Papers 11–14 mined this territory and their ladder verdicts stand — nothing here re-grades them. The yield came almost entirely through anchors that did not exist in that era (4 of 5 survivors sit on virgin columns). Same territory, new anchors, new yield: the crossing's anchor-dependence, now demonstrated at vein scale.

## Seeds

*(Per §7–8; full records in `docarchive/critique.md` §"The survivors' records" — reproduced compactly here; all five appended to `devdocs/seeds/_seed.md`.)*

```
p25-S1 | seed-index CONSULTATION-HISTORY (when read, by which dive, with what outcome — hot/cold
        seeds visible) | inspiration/mechanism | NASCENT — trigger: index ~15-20 entries OR
        p16-S1 development begins OR autonomous seed-picking | anchor: _seed.md (consumer:
        seed-picking + p16-S1's predictor) | :624-627, :631-641 | transfer | med

p25-S2 | memory RECALL-MARKS (consultation counts / last-consulted — staleness visible; the
        verify-canon hand-kept count = the manual instance) | inspiration/mechanism | NASCENT —
        trigger: a staleness incident OR memory-count doubles | anchor: the auto-memory system |
        same L10 lines; native staleness risk | transfer | low-med

p25-S3 | record interaction EVENTS not just outcomes (files read; cells attempted; counters
        generated) | inspiration/mechanism | NASCENT — trigger: the p23-S1 audit's run (its data
        layer) OR the next diagnosis-archaeology | anchor: the telemetry stream | :259-261,
        :366-371; native: the diagnosis's reconstruction cost | transfer | med

p25-S4 | THE INVISIBLE-SUPPORTS CHECK before spec-redesigns ("what undocumented functions might
        the current form serve? — check the run-artifacts") | inspiration/refine | LIVE — act:
        adopt at the next spec-edit session | anchor: the protocol/spec texts as designed
        work-materials | :283-312, :624-627; native: the diagnosis's undocumented-drift finding |
        transfer | med

p25-S5 | MODEL THE USER AS A FUNCTIONAL COMPONENT of the cognitive unit (error-signal,
        diversification, seed-picking, source-choice — the replacement-map for autonomy changes) |
        inspiration/frame | NASCENT — trigger: any autonomy-increasing proposal OR canon's next
        architecture pass | anchor: the usage architecture / system self-description | :66-84,
        :102-106 | transfer | med
```

**Gate telemetry (§10, the amended form):** candidates generated 12 + C0 · **coverage: 13/99 cells attempted, 86 skips coded** (M×9 / OA×1 / FE×9 / OD×15 / NS×36 / →Cn×16) · **second-harvest question asked → "nothing new"** · gated-in 5 / killed 7 (dominant reasons: no-decision, owned-pattern) · types: 5 inspiration (3 mechanism / 1 refine / 1 frame) · grades: 1 live + 4 nascent (all triggered) · doors: novelty ×5 · moves: transfer ×5 · strongest-failed: C1 (the every-dive relevance pass — owned-pattern-new-site: MEMORY.md and harvest-anchors already embody it). Self-assessment: **PROCEED**.

## Next Actions

### COULD
- **What:** Adopt p25-S4's check (one question + run-artifact glance before each spec-edit). **Who:** whoever edits next; the protocol keeper. **Gate:** the next spec-edit session.
- **What:** The p23-S1 audit (standing LIVE) — now with p25-S3 as its natural data layer. **Who:** the user / a dedicated dive.
- **What:** The next harvest — **paper 22 needs a shape-check first** (its head looks like a journal contents page, not a single paper) — or a fresh 26+; n=6; the variance-watch continues.
- **What:** After n=6–7, one look at the expectation-band (the old 1–4 was calibrated on capped runs).

## Reasoning

The dive carried a unique pressure: the live test "wanted" variance, which is exactly the yield-manufacturing shape with a new justification. It was answered structurally — the gate ran unchanged (the kill-rate and the two variance-pressure re-prosecutions show teeth), the band-miss was declared rather than absorbed, and the survivors each rest on a verified gap (checked against the actual files, not assumed), genuine source-support (line-cited), and a real consumer or trigger. The opposite failure (trimming to the band to look calibrated) was blocked by the amended §9 #6, applied here for the first time. The vein-return and unflagged-cell results are the two structural validations: yield tracked the NEW anchors, and the table found value where no flag pointed.

## Open Questions

### Monitoring
- **The nascent quartet's triggers** (registered above; re-scan at index passes).
- **The variance-watch:** 1/0/1/1/5 — the invariant is broken; whether 5 is an outlier or the new range emerges at n=6–7.
- **p23-S1's audit** (LIVE, standing) and **p21-S1 / p16-S1** (triggers unchanged).

### Refinement Triggers
- If n=6–7 under the package return to exactly-1 with honest full tables, the diagnosis re-opens at its remaining suspect (the gate's own calibration) — the blocking feature to watch is the coverage table's execution honesty (token attempts would be the tell).

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
read devdocs/paper_seed/25.md fully and use cognitive_harness/protocols/seed_harvester.md with it

(i added paper 25)
```

</details>
