## User Input

`devdocs/inquiries/2026-05-29_17-32__mvlw_run_thoroughness_opus48/_branch.md` (territory: the MVLw run dataset 2026-05-25→2026-05-29 [4.7 vs 4.8] + the loop's own specs [runner + 5 disciplines]. Pre-pipeline evidence already gathered into the branch. Crux = is the volume/time drop a real thoroughness loss, where, and what enforces coverage.)

**Purpose echo:** surface items bearing on whether Opus 4.8 reasons less thoroughly in MVLw, where the thinning concentrates, and which levers could enforce coverage.

---

# Structural Surfacing — Thin Artifact

**Mode:** artifact. **Entry-point:** signal-first. **Territory:** explicit-bounded (the run dataset + the loop specs) → no Boundary-discovery. **Session note:** 11th inquiry. Evidence gathered via direct measurement (bash over the inquiries folder) — not recalled; measured this turn.

## Traversal Trace

| # | Region | Item (what it shows) | Relevance | Confidence | Step note | Recency |
|---|---|---|---|---|---|---|
| 1 | volume evidence | Batch word-counts: 4.7 ≈23k disc-words (12 runs); 4.8 ≈8.7k (9 runs) → ~2.6× | **core** | HIGH | Independent corroboration of the user's time observation: less *content* per run, not just faster typing. Measured this turn. | `{filesystem, 2026-05-29}` |
| 2 | matched-pair evidence | `2026-05-28_19-00` (4.7,21.9k) → `2026-05-29_14-58` (4.8,6.9k) ≈3.2×; `15-48`(4.7,23.2k)→`16-41`(4.8,9.1k) ≈2.5× | **core** | HIGH | Controls for task type: same question re-run still ~2.5-3.2× thinner → not ONLY task difference. Measured. | `{filesystem, 2026-05-29}` |
| 3 | per-discipline breakdown | Thinning ratios: Surf 3.9× / Sens **2.3× (least)** / Deco 3.4× / Inno **4.0× (most)** / Crit 3.4× | **core** | HIGH | Localizes it: core analysis (Sensemaking) held best; generative breadth (Innovation) thinned most. Measured. | `{filesystem, 2026-05-29}` |
| 4 | coverage-not-volume signal | Matched pair: same **5 ambiguities** resolved, all SVs, structural checks pass — but Innovation **mechanism-applications 47→9** | **core** | HIGH | THE key distinction: correctness coverage held; *exploration breadth* (mechanisms) genuinely dropped. Not pure efficiency. Measured. | `{filesystem, 2026-05-29}` |
| 5 | not-a-hard-floor | Within 4.8: `16-41`/`17-08` (read full refs, forced full coverage) ≈2.5× fuller than `14-58`/`12-44` (light re-walks) | **core** | HIGH | The thinning RESPONDS to execution discipline → it's a tendency, not a ceiling → remediable. Measured. | `{filesystem, 2026-05-29}` |
| 6 | the confound | Recent 4.8 runs were re-walks of priors already in context (less new ground); 4.7 runs include big from-scratch tasks | **core** | HIGH | Must not over-attribute the volume drop to the model; part is legitimate task difference. For Sensemaking to weigh. | `{session, 2026-05-29}` |
| 7 | existing lever — innovate | innovate spec: "aim for full coverage (all seven mechanisms)"; "3 variations each (generic/focused/contrarian)"; Mechanism-Coverage telemetry | **sub** | HIGH | A *soft aim*, not a checked floor → 4.8 satisfied structural checks while applying 1-2 mechanisms. The primary remedy target. In context (read this session). | `{filesystem, ~2026-05-29}` |
| 8 | existing lever — other disciplines | sensemaking saturation indicators + ambiguity-resolution ratio + 6 perspectives; td-critique dimension/adversarial coverage; surfacing coverage criteria | **sub** | HIGH | Each discipline already DEFINES coverage telemetry — the metric to monitor instead of wall-clock. In context. | `{filesystem, ~2026-05-29}` |
| 9 | existing lever — runner | MVLw Rule 8 ("okay if they consume context... supposed to be"); "Never execute a discipline from memory alone"; per-discipline structural check + checkpoint | **sub** | HIGH | The runner already pushes depth + fresh-reference-reading; the gap is ENFORCEMENT/measurement, not intent. In context. | `{filesystem, ~2026-05-29}` |
| 10 | tooling gap | `tools/structural_check.sh` ABSENT → checks are manual + section-presence-only (can't currently auto-count mechanism/perspective coverage) | **sub** | MEDIUM | Remedy-relevant: a coverage-COUNTING check would need this script to exist + count, not just check sections present. Known from prior runs. | `{none, null}` |
| 11 | the metric itself | Wall-clock elapsed time as the quality signal | **side** | HIGH | The thing to NOT anchor on — conflates model speed with depth; targeting it directly induces padding. For Sensemaking's reframe. | `{none, null}` |

## State Summary

### Coverage map
| Region | Coverage | Aggregate relevance |
|---|---|---|
| Evidence (volume / matched-pairs / per-discipline / mechanism-coverage / not-a-floor / confound) | confirmed (measured this turn) | core |
| Existing levers (innovate aims, discipline telemetry, runner rules, tooling gap) | confirmed (specs in context) | sub |
| The duration metric itself | confirmed (the anti-anchor) | side |

### Confirmed-absent regions
- Direct elapsed-time records inside artifacts — ABSENT (no per-run wall-clock is stored; the user's ~40/~15 min is observed, and is corroborated INDIRECTLY by artifact volume, not by a stored timer).
- A coverage-counting structural check — ABSENT (`tools/structural_check.sh` missing; checks are manual + section-presence).

### Concept-names list (provenance = trace #)
- `volume-as-independent-corroboration` {coined, #1/#2, gloss: artifact word-count independently corroborates the time observation — 4.8 generates ~2.6× less content, robust + matched-pair-controlled}
- `coverage-vs-volume distinction` {coined, #4, gloss: the load-bearing cut — correctness coverage (ambiguities/SVs) HELD; exploration breadth (mechanism coverage 47→9) DROPPED. Thoroughness ≠ word count, but mechanism-count IS a real coverage measure}
- `Sensemaking-held-Innovation-thinned` {structural-ref, #3, gloss: thinning is uneven — core analysis robust, generative breadth most affected}
- `tendency-not-floor` {coined, #5, gloss: deliberate 4.8 runs (full-reference-read + forced coverage) are ~2.5× fuller → remediable by execution discipline, not a model ceiling}
- `re-walk confound` {structural-ref, #6, gloss: recent 4.8 runs had priors in context → some volume drop is legitimate; don't over-attribute to the model}
- `soft-aim-vs-checked-floor` {coined, #7, gloss: innovate's "aim for all 7 mechanisms" is soft; the model met section-checks while under-covering → promote aims to enforced+counted floors}
- `measure-coverage-not-time` {coined, #8/#11, gloss: the disciplines already define coverage telemetry; monitor THAT, not wall-clock minutes}

### Recency distribution
| Region | newest | oldest | no-mtime | total |
|---|---|---|---|---|
| measured evidence (this turn) | 2026-05-29 | 2026-05-25 | 0 | 6 |
| loop specs (in context) | ~2026-05-29 | ~2026-05-27 | 0 | 3 |
| metric / tooling-gap | — | — | 2 | 2 |

### Frontier flags (for downstream)
- **F1 (the reframe, for Sensemaking)** — is duration a valid proxy for thoroughness? Resolve: duration is an *indirect* signal; the valid proxy is *coverage* (mechanism count, ambiguities, perspectives), which is directly measurable. Validate the concern without endorsing the metric.
- **F2 (localization, for Sensemaking/Decomposition)** — the real loss is concentrated in *exploration breadth* (Innovation mechanism coverage), with core analysis (Sensemaking) largely intact; and it's a tendency, not a floor.
- **F3 (the confound, for Sensemaking)** — weigh how much of the drop is re-walk-task vs model-tendency; the matched pairs + mechanism-count say "real residual exists beyond the confound."
- **F4 (remedy space, for Innovation)** — levers: (a) measure coverage not time; (b) promote soft coverage-aims to enforced+counted floors; (c) surface coverage telemetry in the checkpoint + flag under-par; (d) keep full-reference-reading mandatory; (e) the structural-check tooling gap.
- **F5 (self-reference, for Sensemaking/Critique)** — this inquiry is run BY 4.8 ON 4.8's own thoroughness; guard with external/measured evidence, not introspection.

### Workspace-populated status
`{populated: true, populated-at: 2026-05-29T17-32 (session-local), extent: run dataset measured + loop specs tagged for the thoroughness diagnosis + remedy}`

## Telemetry
- Mode: `artifact`; entry-point: `signal-first`; cycles: 1 (measured this turn via bash; specs in context)
- Items enumerated: 11; tagged — core 6, sub 4, side 1
- Boundary-discovery: no; `items_with_mtime`: 9; `items_without_mtime`: 2
- Failure modes checked: Missed-relevance (the confound #6 + the coverage-vs-volume distinction #4 + the tooling gap #10 surfaced, not just the headline volume drop); Over-coverage (held — duration-metric tagged side); Interpretive-overstep (avoided — the validity verdict + remedy FLAGGED for Sensemaking/Innovation, not pre-decided); Recency-Equates-Idleness (avoided — old 4.7 runs tagged core as evidence, not demoted for age)
- Self-assessment verdict: **PROCEED** — the measured evidence (volume, matched-pairs, per-discipline, mechanism-coverage, not-a-floor, confound), the existing coverage levers, and the metric-to-avoid are all in the workspace; the diagnosis + remedy territory is covered.
