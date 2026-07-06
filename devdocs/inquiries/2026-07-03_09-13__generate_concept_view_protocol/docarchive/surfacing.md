# Surfacing — Generate-Concept-View Protocol

## User Input

```text
/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-07-03_09-13__generate_concept_view_protocol/_branch.md

(Territory = (1) extraction mechanics AT THE LETTER (verify uniformity, sizes, digest cost); (2) the amended F6/F4 baselines; (3) grep-discovery viability tested on real concepts; (4) the house homes at the letter; (5) the saved-view honesty conditions; (6) warming + consumers. Purpose = verified viability + cost envelopes + the class/depth constraint-sets + honesty conditions + the F6/F4 gain-mapping. Artifact case — RUN THE VERIFICATION COMMANDS. Save to surfacing.md.)
```

**Mode:** artifact. **Entry:** signal-first. **Territory:** explicit-bounded, bash-measured this run (403 findings; extraction, discovery, and cost tests executed live).

---

## Traversal Trace

| # | Region | Item(s) — measured where possible | Relevance | Conf | Note |
|---|---|---|---|---|---|
| T1 | Extraction uniformity | **403** finding.md files; **387 (96%)** carry `## Finding Summary` — 16 early findings predate the template. Extraction is corpus-viable with one graceful-absence rule (skip-with-note when the section is missing). | **core** | HIGH | Measured, not assumed. |
| T2 | **The extraction pitfall (live catch)** | The naive stop-pattern `^## [^F]` MIS-FIRES: "## Finding" follows "## Finding Summary" and also starts with F — the first test run captured summary + entire Finding body (192 and 111 lines). The correct tested pattern: `sed -n '/^## Finding Summary/,/^## Finding$/p'` (stop at the exact next heading). | **core** | HIGH | The user's "just a regex" is right — but the regex must be the TESTED one; the instruction must ship the exact pattern, not a description. |
| T3 | Summary sizes + digest cost | True summary sizes (6 samples): 13–36 lines typical, one 94-line early outlier. **The last-15 digest = 204 lines total** — comfortably readable at warm-up. Full-corpus (387 summaries) ≈ 6–10k lines — NOT readable; the instruction needs a recency bound (last-N) or a topic filter. | **core** | HIGH | The cost envelope: last-10-to-20 is the practical always-on digest; full-corpus reads are concept-filtered only. |
| T4 | The count surface | **151 inquiry folders** — `ls devdocs/inquiries \| wc -l` IS the count. The F6 assessment's third gain (the counting surface) needs no file and no digest: the folder listing serves the Allocation Rule's cadence directly. | **core** | HIGH | The user's simplification goes one step further than they claimed — even the digest isn't needed for counting. |
| T5 | Grep-discovery viability | Tested on real concepts: `routelister` → **67** findings (too many for full reads — needs ranking + tiered reading); `traversal memory` → **15** (tractable); `paradigm` → **36**. Discovery = grep-hits, then TIER: summaries-only for all hits; full findings for the top-k (by hit-density/recency). | **core** | HIGH | Viable at the letter, with the tiering requirement measured, not guessed. |
| T6 | The house homes | `~/.claude/skills/protocols/` = 4 files (conclude, branch_inquiry, loop_diagnose, resume) — all RUNNER-loaded procedures, none user-invocable-with-artifact. The user-invocable-generator class is the SKILL (the sweeper precedent, hours old); generated analysis-artifacts live under dated dirs (`devdocs/sweeps/<slug>/` precedent). | **core** | HIGH | The class constraint-set: protocols/ fits if the generator is invoked BY warming/runners; a skill fits if the user invokes it directly. Both real; the invocation shape decides. |
| T7 | The depth constraint-set | What a light assemble CAN do: discover, extract, order, emit (minutes; deterministic-ish). What it CANNOT do: resolve contradictions between findings (which finding superseded which), synthesize a current-state claim, or adversarially test the view's own story — those are loop-work (sensemaking/critique grade). The user's own words anticipate this: "this view would also be a traverse loop output." | **core** | HIGH | The dial's two ends are structurally different products: an ASSEMBLY (excerpts, ordered) vs a SYNTHESIS (a finding about the concept). |
| T8 | Saved-view honesty conditions | A saved view COPIES content — the June-22 anti-pattern bites UNLESS: (i) **dated** (a snapshot-of-date, never claiming currency); (ii) **pointing** (every excerpt carries its source path); (iii) **regenerable** (staleness handled by regenerating, never editing — the F8 constitution extended to views); (iv) **subordinate** (the findings stay the truth; the view is a lens). The sweep-map already lives by these rules — the precedent exists. | **core** | HIGH | The honest saved view = a dated, pointing, regenerable snapshot; anything else rots. |
| T9 | The F6 gain-mapping (amendment check) | F6's three claimed gains re-mapped: read-surface → the DIGEST INSTRUCTION (read-derived; no writes) ✓; warm-up → same instruction as warming's first read ✓; counting → the FOLDER COUNT (no file at all) ✓. **All three gains survive with zero writes.** What the amendment loses vs epoch-lines: nothing functional; the trajectory-compression (the cadence's 1–2-line rollups) becomes optional — IF ever wanted, it's a generated digest-of-digests, still not a maintained file. | **core** | HIGH | The user's F6 amendment verified complete: writes→reads with no gain lost. |
| T10 | The F4 gain-mapping (amendment check) | F4's views-not-stores verdict EXTENDS: the ephemeral read becomes a REPEATABLE GENERATOR with an optional saved artifact. What changes vs the assessment: the view can now be SHARED across sessions (a saved snapshot is warming-material), and generation-depth becomes a real choice (T7). The store stays dead (the user's confirmation is stronger than the assessment's: "huge burden… not feasible at all"). | **core** | HIGH | The amendment upgrades, not contradicts, the F4 verdict. |
| T11 | The pre-registration boundary | A concept-view derives from FINDINGS (territory artifacts) — it records no selections/rationales; it is NOT a traversal-memory trace. One smuggle-risk: if a view starts including "what was chosen and why" lines synthesized from state files, it edges toward trace-writing — the design should scope views to territory-content (findings, maps) and leave choice-records to the memory design. | **core** | HIGH | Boundary named; easy to hold. |
| T12 | Consumers | The digest: warming (first read), the human (catch-up), the cadence (context, though counting is folder-based). Concept-views: concept-targeted sessions (warming-material before touching X), the user (orientation), future Selector (a route's context) — and the four-assessments finding's own F4 route ("assemble the thread before touching X") is exactly a concept-view invocation. | **core** | HIGH | Both products have named consumers with existing moments. |

## State Summary

- **Territory echo:** the corpus measured; the baselines in session; the homes listed; the constraints named.
- **Purpose echo:** viability verified (extraction + discovery), cost envelopes measured, class/depth constraint-sets surfaced, honesty conditions named, gain-mappings checked.

**Coverage map:** extraction (measured, pitfall caught) · digest cost (measured) · count (measured) · discovery (measured, 3 concepts) · homes (listed) · depth (analyzed) · honesty (conditions named) · amendments (both verified) · boundary (named) · consumers (named). All core.

**Confirmed-absent:** any existing catch-up/digest instruction anywhere (the read-recipe genuinely doesn't exist); any concept-view precedent beyond the sweep-map's adjacent form; any Finding Summary in 16 early findings (the graceful-absence rule is needed, not hypothetical).

**Concept-names list:**
- `the tested pattern` (T2) — `sed -n '/^## Finding Summary/,/^## Finding$/p'`; the instruction ships the exact regex, with the mis-fire as its cautionary tale.
- `the last-N digest` (T3) — 204 lines for 15 inquiries; the practical always-on read.
- `folder-count-as-count` (T4) — the counting surface needs no artifact at all.
- `tiered discovery` (T5) — grep → rank → summaries-for-all, full-reads-for-top-k.
- `assembly vs synthesis` (T7) — the dial's two ends are different products.
- `the four honesty conditions` (T8) — dated · pointing · regenerable · subordinate.
- `views-scope-to-territory` (T11) — no choice-record synthesis inside views.

**Frontier flags:** none material — the measurable claims were measured; the unmeasured (depth-product quality difference) is a design judgment, marked as such.

**Workspace-populated:** `{populated: true, populated-at: 2026-07-03 (this run), extent: corpus-wide counts + 6 size samples + 3 discovery tests + homes}`

## Telemetry

- Mode: artifact | entry: signal-first | Cycles: 4 (verify-extraction [with the pitfall re-run] → measure costs → test discovery → map constraints) | items: 12 trace entries | tags: core 12
- Convergence: every purpose region populated with measured or named content; second pass added nothing
- Failure modes checked: Missed-relevance (the 16 template-less findings hunted, found), Territory-mis-binding (none — all claims from live commands), Surfaced-irrelevance (none kept)
- **Self-assessment: PROCEED**
