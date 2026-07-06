# Innovation — Generate-Concept-View Protocol

## User Input

```text
/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-07-03_09-13__generate_concept_view_protocol/_branch.md

(Production-task mode: the 8-piece plan → finding-ready content: (a) the protocol file's sketch; (b) the view's sample skeleton; (c) project-mode's default; (d) the amendment wordings; (e) the selection sentence; (f) the staging list. Mandated inversions: blind-execution; size-balloon; N=15-arbitrary; first-concept-incestuous. Audit on SV6. Respect: meaning-layer scope; no traces; assembly-ceiling honesty. Save to innovation.md.)
```

## Seed & Mode (Phase 1)

**Seed:** the 8 pieces. **Methodology-Mode Consideration:** inherited = **Standard default**; alternative = Contrarian-rethink; decision: **default** — four mandated inversions + critique downstream. *(Named/named/what-follows/decision.)*

**Meta-decision pieces:** the sketch's execution-model, the view's size policy, project-mode's default, the first invocations.

---

## Phase 2 — Generate (principal content + mandated inversions)

### (a) The protocol file's sketch (transcription-grade) + inversion

```text
# GENERATE_CONCEPT_VIEW — protocol (protocols/generate_concept_view.md)

INPUTS: concept (optional — absent → project-mode) · out-path? · N? (project-mode depth,
default 15) · k? (deep-read count, default 5; both placeholders, revisable on use)

1 DISCOVER
  concept-mode: grep -rl "<concept>" (+ obvious variants) devdocs/inquiries
  --include="finding.md" (exclude docarchive); rank hits by density + recency.
  project-mode: ls -d devdocs/inquiries/*/ | sort -r | head -N.
2 GATHER
  per hit: extract the Finding Summary —
    sed -n '/^## Finding Summary/,/^## Finding$/p'
  (the stop-pattern is EXACT and tested; '^## [^F]' MIS-FIRES on '## Finding' —
  the first live run caught this). Graceful absence (16 early findings lack the
  section): title + date + pointer only. Top-k hits: also gather targeted
  Finding-body excerpts.
3 SUPERSESSION-WALK
  grep '^refines:\|^supersedes:\|^corrects:' across the hit-set's frontmatter;
  intersect with the hit-set; tag affected excerpts `[superseded by <path>]`.
  Display of RECORDED judgment only — the walk renders past verdicts, never new ones.
4 CURATE — mandatory reading
  READ the gathered material; an uncurated dump is not a view. Order: concept-mode
  first-seen → decisions → outcomes → open-ends; project-mode by date. Apply the
  size policy (≤300 lines): top-k keep full summaries; the tail compresses to one
  line each (title · date · first summary-bullet · pointer); superseded findings
  drop to the one-line tier automatically (their content lives in their supersessors).
5 EMIT
  the view: header (ASSEMBLY-GRADE self-label · snapshot-date · mode · hit-count ·
  coverage bound · the regenerate-note) → tagged excerpts (per-excerpt: source path
  + finding date) → the concept's route-map rows + ✓ states where maps exist →
  open ends → footer (the exact generation command, for regeneration).

CONSTITUTION (the view's four conditions): dated · pointing · regenerable
(regenerate = a NEW file; views are never edited) · subordinate (the findings
remain the truth; the header says "snapshot of <date> — regenerate for current").
CEILING: assembly-grade, self-labeled. For a synthesis-grade view (contradiction
resolution, current-state claims), run a traverse on this view as its territory —
the assembly IS the territory prep.
HOME: devdocs/views/<concept-slug>/view_<date>.md (project-mode: devdocs/views/project/).
BOUNDARY: views derive from findings/maps (territory content); they never
synthesize choice-records — traversal-memory traces are a different artifact.
```

**Inversion (mandated: "a command block invites blind execution — extraction without reading"):** the steelman names a real model-failure-shape, and the design absorbs it structurally: step 4 exists as its own MANDATORY step with the rule stated ("an uncurated dump is not a view") — the commands GATHER; the generator READS and CURATES; the view's value is the curation. *(Kept; the residue is step 4's explicitness and the dump-not-view failure-note.)*

### (b) The view's sample skeleton (exhibit, not normative)

```markdown
# Concept View — <concept> (ASSEMBLY-GRADE snapshot of 2026-07-03 — regenerate for current)
**Mode:** concept · **Hits:** 15 findings (5 deep-read) · **Coverage:** finding.md corpus only; maps where present
**Constitution:** dated · pointing · regenerable · subordinate

## First seen
- <excerpt…> — devdocs/inquiries/<a>/finding.md (2026-06-12)

## Decisions
- <excerpt…> — …/finding.md (2026-06-22)
- <excerpt…> [superseded by devdocs/inquiries/<b>/finding.md] — …/finding.md (2026-06-14)

## Outcomes · Open ends
- <one-liner> · <one-liner> — pointers…

## Route-map rows
| map | route | essentiality | ✓ |

---
*Regenerate: `<the generation command>` — this file is never edited.*
```

### (c) Project-mode's default + inversion

**Principal:** stateless **last-N, default N=15** (measured: ≈204 lines — one comfortable read).
**Inversion (mandated: "N=15 is arbitrary — the right semantic is since-last-digest/session"):** since-last-X needs a marker, and a MAINTAINED marker is a write (the design's own law forbids it). But the marker is DERIVABLE: when a prior project-view exists, its filename date IS the marker — "since the last digest" = folders newer than `views/project/view_<latest-date>.md`, still stateless. *(Resolution: default last-15 when no prior view exists; since-the-latest-view when one does — both stateless; N stays a placeholder value.)*

### (d) The amendment statements (final wording)

- **F6, amended:** *epoch-lines are retired UNBUILT. All three of the assessment's claimed gains survive with zero writes: the read-surface = the protocol's project-mode digest; warm-up = the same read, first; the counting surface = the inquiry-folder listing itself (no artifact at all). The optional trajectory-compression, if ever wanted, is a digest-of-digests — also generated, never maintained.*
- **F4, amended:** *views upgrade from a reading pattern to a REPEATABLE GENERATOR with optional dated snapshots — shareable across sessions as warming-material. The store stays dead, on the user's own stronger grounds ("huge burden… not feasible at all; history should stay as history"); its scale-trigger from the assessment is unchanged.*

### (e) The selection-precision sentence (final)

> *With these two amendments, the READ half of the traversal-memory design is selected by construction — views everywhere, generated on demand, no maintained read-artifacts. The WRITE half — the record itself: the act-line (`chose · because → destination`), the warm-time meant-line, the append-only constitution — remains the open choice from the four-assessments map's R1, untouched by these reactions.*

### (f) The staging list + inversion

**Build (on go, ≤30 min):** author `protocols/generate_concept_view.md` from sketch (a) + `mkdir devdocs/views/`. **Then three first runs with three different jobs:**
1. **Smoke test** — project-mode digest (mechanical; ≈204 lines; proves the pipeline).
2. **Stress test** — concept-mode on **"routelister"** (67 hits — exercises ranking, tiering, the size cap, and the supersession walk on the corpus's densest concept).
3. **First real use** — concept-mode on **"traversal memory"** (15 hits; the write-half decision's warming-material), **labeled same-mind** (the view assembles findings this same mind wrote — fine for use, weak as a protocol test; the stress test carries the test-burden).

**Inversion (mandated: "traversal-memory-first is incestuous — a neutral concept tests better"):** correct as a TEST objection, wrong as a USE objection — resolved by splitting the jobs: the stress test (routelister, dense and older) carries the protocol-testing burden; the traversal-memory view is a USE, valuable regardless, honestly labeled. *(Kept as the three-run staging.)*

**Inversion (mandated: "the size cap — where is it and what gets cut"):** absorbed into sketch (a) step 4: **≤300 lines**; the cut order is principled — superseded findings drop to one-liners first, then the tail by rank; top-k keeps full summaries. At routelister's 67 hits: ~5 full summaries (~100 lines) + ~62 one-liners (~62 lines) + rows/ends ≈ under the cap by construction. *(The balloon is arithmetic-proofed, not hoped away.)*

---

## Inherited Frame Audit

**Seed central assumption:** SV6 is right. **Challenges present:** four mandated inversions ran; none overturned; every one left structure (the mandatory CURATE step; the size policy with cut-order; the derivable-marker refinement; the three-jobs staging). **Audit: does not fire.**

## Phase 3 — Test, dispositions, assembly

**Dispositions:** ACTIONABLE (into the finding): all six exhibits at transcription grade. Nothing instantiates (no file, no dir, no view exists until the go).

**Assembly check:** the exhibits compose into a build-ready design; one emergent worth keeping: **the derivable-marker move generalizes** — "state" that can be read off existing artifacts' names/dates is not state (the views folder is its own history; the latest view is its own marker) — the same views-over-writes law applied to the protocol's OWN bookkeeping. **Axis coverage:** execution-model (blind↔curated), size (unbounded↔capped w/ cut-order), default-semantics (fixed-N↔derived-since), first-run purpose (test↔use, split) — multi-axis ✓. **Shared-input check:** exhibits ground in the measured numbers + the guards' residues — convergence genuine.

## Telemetry

- Generators: 4/4 (Combination — the three-jobs staging; Absence — the missing CURATE step made mandatory; Domain Transfer — none forced; Extrapolation — the derivable-marker generalization) | Framers: 3/3 (Lens — test-vs-use split; Constraint Manipulation — the cap + cut-order; Inversion — at all four meta-decision pieces)
- Convergence: YES
- Survivors: all six exhibits (each inversion's residue integrated)
- Per-piece log: a [Inv:blind-execution → CURATE mandatory] · b [content] · c [Inv:arbitrary-N → derivable marker] · d/e [content] · f [Inv:incestuous → three-jobs split; Inv:balloon → arithmetic-proofed cap]
- Failure modes observed: none (Survival Bias guarded — every steelman shaped the design)
- **Overall: PROCEED**
