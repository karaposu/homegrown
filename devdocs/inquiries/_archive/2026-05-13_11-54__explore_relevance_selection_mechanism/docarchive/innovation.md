# Innovation — /explore Relevance-Selection Mechanism

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-13_11-54__explore_relevance_selection_mechanism/_branch.md`

Input: `_branch.md` + `exploration.md` + `sensemaking.md` + `decomposition.md`. Generate concrete spec-edit text per piece. Apply 4-axis coverage check + project-specific risk dimensions.

---

## Seed

Each of the 3 decomposition pieces (P1 criteria production + P2 filter application + P4 CORRECTS declaration) needs concrete shippable text. The seed is a Question + Failure type: prior finding fixated on one mechanism; this finding must materialize the cross-layer composition with the SCORING MECHANISM (P2.1 determination) clearly specified.

---

## Phase 2 — Generation (concrete spec-edit text per piece)

### P1.1 — MUST-sentence for criteria-derivation at Step 0

Mechanisms: Constraint Manipulation (minimum-words mandate).

**Final text:**

> *"**Relevance criteria derivation (Step 0).** Before the first scan-signal-probe cycle, `/explore` MUST derive an explicit **relevance criteria** statement from the inquiry's Question and Goal (read from `_branch.md`). The statement is recorded in the output and is the basis for the active relevance filter at Signal Detection (§2.1). If `_branch.md` includes author-declared relevance criteria, the runner MUST merge them into the derived statement (author-declared criteria take precedence on conflicts). This mandate fires in both artifact mode and possibility mode."*

Wording stringency: **MUST**.

---

### P1.2 — The Q/G-derived criteria prompt + output shape

Mechanism: Combination (Q/G-extraction + existing /explore output patterns).

**Output format (what the LLM produces):**

```markdown
**Relevance Criteria (derived from Question + Goal):**
For this inquiry, an item is RELEVANT if it bears on one or more of the following:
- C1: [first criterion — concrete; references named subjects from Question/Goal]
- C2: [second criterion — concrete]
- C3: [third criterion — concrete]
[2-5 criteria total; concrete enough that a reader can apply them to inventory items]

Items that bear on these criteria get scored at MEDIUM or HIGH and get probed. Items that don't bear on these criteria get scored LOW and remain in the inventory listed-but-unread at this resolution.
```

**Derivation procedure (the LLM's task):**
1. Read `_branch.md`'s Question + Goal.
2. Extract named subjects, named operations, named constraints, named "must-do" or "must-cover" items.
3. Produce 2-5 criterion bullets, each concrete enough to apply to inventory items by inspection.
4. If `_branch.md` includes author-declared relevance criteria, merge them in (author-declared takes precedence).

---

### P2.1 — Scoring mechanism (the determination — load-bearing per Phase 7 check)

Mechanism: Domain Transfer (LLM-as-judge pattern; retrieval-ranking pattern).

**Final text:**

> *"**Scoring mechanism.** For each item surfaced during Scan (at the declared depth-level), the runner computes a relevance score against the relevance criteria statement on a 3-level scale:*
> 
> *— **HIGH** — the item's labeling content clearly matches at least one criterion. Specifically: the item explicitly names a concept the criteria call out, OR the item's structural position makes it the obvious source for a criterion, OR the item's labeling content substantively addresses a criterion.*
> 
> *— **MEDIUM** — the item's labeling content plausibly matches a criterion but the match is inferential. The item COULD be relevant but verification requires reading.*
> 
> *— **LOW** — the item's labeling content shows no clear match to any criterion. Likely surfaced for completeness rather than purpose-bias.*
> 
> *The score is the LLM's judgment per item, recorded explicitly with a brief reason.*
> 
> ***Scoring quality scales with labeling depth.*** *At depth-level D2 (default minimum per §2.3) scoring is reliable for direct matches; MEDIUM is the appropriate default when content is ambiguous. At D1 (coarse-resolution scans) the LLM has less to score against; the filter SHOULD default to a more permissive threshold (e.g., treat LOW as the cutoff rather than MEDIUM) to avoid excluding items that couldn't be properly scored."*

Score granularity: **3-level** (HIGH/MEDIUM/LOW). Binary is too crude (no middle case); continuous (0-1) is over-precise for LLM-as-judge.

---

### P2.2 — Threshold default

> *"**Threshold default: MEDIUM.** Items at MEDIUM or HIGH get probed (read at depth per the Probe component). Items at LOW get recorded in the inventory but not probed at this resolution. The user can configure via the `relevance-threshold` field in `_branch.md` Step 0 declarations (values: `LOW` = read more aggressively; `MEDIUM` = default; `HIGH` = read only the strongest matches). When depth-level is D1, the threshold SHOULD default to LOW per the scoring-quality note above."*

Filter aggressiveness: **MEDIUM default**. Conservative (more reads than skips); configurable to LOW for aggressive coverage or HIGH for strict selection.

---

### P2.3 — §2.1 active-filter strengthening paragraph

Mechanism: Lens Shifting (re-read existing §2.1 wording under active-filter frame).

**Final text:**

> *"**Active relevance filter (strengthening of §2.1's relevance signal).** Of the five signal types named in this section (density, novelty, relevance, tension, absence), **relevance** drives the probe-or-not decision. After Scan surfaces items, the runner MUST compute a relevance score (per the scoring mechanism below) for each item against the relevance criteria derived at Step 0. Items at or above the threshold (default MEDIUM) get passed to Probe. Items below threshold remain in the inventory listed-but-unread at this resolution.*
> 
> *This is an **active filter**: the score is computed and acts as a gate. The other four signal types (density, novelty, tension, absence) remain as in the existing text — they inform PRIORITY among items that pass the relevance filter, not whether items get read at all."*

---

### P2.4 — Filter-vs-annotation hygiene note

Mechanism: Inversion (what does a confused reader produce without this note?).

A confused reader without the hygiene note would:
- Conflate filter (§2.1) with annotation (§2.2) — same word, different operations
- Try to use annotation as the gating mechanism (the prior finding's failure mode)
- Apply scores inconsistently across the two roles

**Final text:**

> *"**Hygiene note: Filter vs Annotation.** The word "relevance" appears in two distinct roles in this spec:*
> 
> *| Role | Where | What it does |*
> *|---|---|---|*
> *| **Active filter** | §2.1 Signal Detection | Gates which items get probed (read at depth). Required (MUST). |*
> *| **Annotation layer** | §2.2 (optional, low-commitment) | Labels items in the output for downstream consumers. Optional. |*
> 
> *These are different operations. The filter serves /explore's own probe decisions; the annotation serves downstream consumers (other disciplines, human readers). Both may carry the same per-item relevance score, but they serve different purposes. Do not conflate them.*
> 
> *(Historical context: the prior cheap-coverage-boost finding at `devdocs/inquiries/2026-05-13_07-39__cheap_coverage_boost_for_explore_now/finding.md` did not surface this distinction. The fix here is to make the active filter explicit and to make the distinction permanent in the spec.)"*

---

### P2.5 — Telemetry fields

> *"**Telemetry (added to §5.3 base metrics):**
> *— `relevance_criteria` — the criteria statement (markdown text) derived at Step 0.*
> *— `per_item_relevance_scores` — an array of `{item_id, score: HIGH | MEDIUM | LOW, brief_reason}` records, one per surfaced inventory item.*
> *— `relevance_threshold` — the threshold used for the run (default MEDIUM; configurable).*
> 
> *Together these make the filter operation fully auditable: a reader of `exploration.md` can verify what criteria the run used, how each item scored, and which items were filtered out vs probed."*

---

### P2.6 — Worked example

> *"**Worked example.** An inquiry asks: 'How does `/explore` handle the relevance-judgment step?' with Goal: 'Identify the mechanism, where it lives in the spec, and concrete shippable text.'*
> 
> *At Step 0, the runner derives:*
> 
> *Relevance Criteria (derived from Question + Goal):*
> *— C1: Item names or describes the relevance-judgment mechanism in `/explore`*
> *— C2: Item names or describes where in the `/explore` spec the mechanism lives*
> *— C3: Item provides concrete spec-edit text or pseudocode for the mechanism*
> 
> *Scan surfaces 12 items. Scoring:*
> *— `homegrown/explore/references/explore.md` — HIGH (matches C1 + C2 directly)*
> *— `homegrown/explore/SKILL.md` — MEDIUM (matches C2 partially)*
> *— `enes/intuit.md` — MEDIUM (matches C1 inferentially — intuition is one form of relevance-judgment)*
> *— `devdocs/inquiries/2026-05-13_06-30__.../finding.md` — MEDIUM (related context; matches C1 partially)*
> *— `homegrown/sense-making/references/sensemaking.md` — LOW (different discipline)*
> *— (7 other items) — LOW (no match)*
> 
> *With threshold MEDIUM, the runner probes 4 items (HIGH + MEDIUM). The 8 LOW items are recorded in the inventory but unread. Telemetry: `relevance_criteria` (the 3-bullet statement); `per_item_relevance_scores` (all 12 items with scores + reasons); `relevance_threshold: MEDIUM`."*

---

### P4.1 — Frontmatter `corrects:` field

```yaml
status: active
corrects: devdocs/inquiries/2026-05-13_07-39__cheap_coverage_boost_for_explore_now/finding.md
related:
  - devdocs/inquiries/2026-05-13_06-30__explore_canonical_coverage_via_staged_iteration/finding.md
  - devdocs/inquiries/2026-05-13_07-16__is_mapping_required_core_of_explore/finding.md
```

---

### P4.2 — "Changes from Prior" body section

Mechanism: Combination (corrected + preserved + repositioned + new + migration).

**Final text:**

> *"**Prior path:** `devdocs/inquiries/2026-05-13_07-39__cheap_coverage_boost_for_explore_now/finding.md`*
> 
> *"**Revision trigger:** User correction. The prior finding's load-bearing claim — that "mandatory filesystem listing IS the answer to more coverage for sure" — was incomplete. The user pointed out: 'listing file names doesnt mean content will be consumed. the correct answer shuold be sth different, sth how explore handles choosing relevant content.' The prior finding addressed how items get LISTED into the inventory; it did not address how items get CHOSEN to be read from the inventory. That choice is the actual bottleneck.*
> 
> *"**What's corrected:** The load-bearing claim. Filesystem-listing alone does not guarantee that relevant content is consumed. Listing produces an inventory; without an explicit relevance-judgment step, `/explore` still has to choose what to read at depth, and the absence of an explicit choice mechanism was the gap the prior finding missed.*
> 
> *"**What's preserved:** The filesystem-listing mechanism itself (the prior finding's Pre-Scan Mandate v1 — its 5-entry tool-fallback chain, the `skip-listing: true` opt-out, the boundary_listing telemetry fields). The mechanism remains useful, but its ROLE is repositioned: it is the source that produces the inventory items, which this finding's relevance-filter then scores. The two mechanisms compose; neither replaces the other.*
> 
> *"**What's new:** A cross-layer relevance-selection composition added to `homegrown/explore/references/explore.md` in three small spec changes:*
> *1. **Step 0 (§3.1) criteria-derivation sub-step** — produces an explicit relevance-criteria statement from Question + Goal (plus author-declared criteria when present).*
> *2. **§2.1 active relevance filter** — scores each inventory item against the criteria on a HIGH/MEDIUM/LOW scale; items at/above threshold (default MEDIUM) get probed; items below remain listed but unread.*
> *3. **§2.1/§2.2 spec hygiene** — explicit distinction between Filter (gating reads) and Annotation (labeling output).*
> *Plus three new telemetry fields in §5.3 to make the filter operation auditable.*
> 
> *"**Migration:** None required. If the prior finding's Pre-Scan Mandate v1 has shipped, it continues to work — its filesystem-listing produces inventory items that this finding's filter then scores. If the prior finding hasn't shipped yet, the user can ship these two findings together as a single update (the listing produces inventory; the filter scores it). They compose either way; there is no ordering dependency at runtime, only at design-time (this finding's filter logically depends on having an inventory, which the prior listing produces).*
> 
> *"**Lesson preserved (the meta-correction):** The prior finding made a single-family fixation error — it picked one mechanism (filesystem listing) from the user's specific example and treated it as the answer. This finding's exploration deliberately used frontier-first entry (no signal-first anchoring) and enumerated 17 candidates across 10 mechanism-families before adjudicating. The adjudication committed to cross-layer composition, not single-family selection. Future inquiries on `/explore` enhancements should reuse this anti-fixation discipline."*

---

## Phase 3 — Test (5-test cycle on front-runners)

### P1.1 (MUST-sentence)

| Test | Verdict |
|---|---|
| Novelty | Materializing-novel (the sentence is new; encodes sensemaking's cross-layer decision) |
| Scrutiny survival | PASS — strongest objection: "MUST in possibility mode? Possibility mode has no filesystem." Response: relevance criteria still apply to possibility-mode candidates (which candidates bear on Question/Goal). MUST holds across modes. |
| Fertility | HIGH — enables P2.1 + P2.3 to compose cleanly |
| Actionability | HIGH (~5 min to drop in) |
| Mechanism independence | YES (Constraint Manipulation + Lens Shifting) |

**Disposition:** ACTIONABLE.

### P2.1 (scoring mechanism — the determination)

| Test | Verdict |
|---|---|
| Novelty | HIGH for `/explore`; standard LLM-as-judge elsewhere |
| Scrutiny survival | PASS — strongest objection: "LLM judgment is unreliable." Response: 3-level scoring (HIGH/MEDIUM/LOW) is robust enough for filter decisions; quality scales with labeling depth (addressed in the wording). Plus telemetry makes scores auditable. |
| Fertility | HIGH — every other piece depends on this mechanism |
| Actionability | HIGH (~10 min to draft) |
| Mechanism independence | YES (Domain Transfer + Combination) |

**Disposition:** ACTIONABLE.

### P2.3 (§2.1 strengthening)

| Test | Verdict |
|---|---|
| Scrutiny survival | PASS — strongest objection: "the existing §2.1 doesn't separate filter from annotation cleanly; strengthening it could break readers of the old version." Response: the strengthening REPLACES the implicit pattern with an explicit one; the hygiene note (P2.4) bridges old and new readers. |

**Disposition:** ACTIONABLE.

### P2.4 (hygiene note via Inversion)

**Disposition:** ACTIONABLE. The note explicitly prevents the conflation that caused the prior finding's failure.

### P4.2 (Changes from Prior)

| Test | Verdict |
|---|---|
| Novelty | LOW (standard CONCLUDE-template structure) |
| Scrutiny survival | PASS — includes the meta-correction (lesson about single-family fixation) which is itself a real insight |
| Fertility | MEDIUM (helps future readers understand the correction; the meta-correction lesson is fertile for future inquiries) |
| Actionability | HIGH |

**Disposition:** ACTIONABLE.

### KILLs

None new in this innovation phase. The sensemaking already killed force-read-primary (E1 in exploration) and single-family fixation (the prior finding's failure mode).

---

## Phase 3.5 — Assembly Check

### Assembly: "Active Relevance Filter v1"

The 7 pieces (P1.1 + P1.2 + P2.1 + P2.2 + P2.3 + P2.4 + P2.5 + P2.6 + P4.1 + P4.2) compose into a single coherent spec update with 3 small spec sections affected (§3.1 Step 0 + §2.1 Signal Detection + §5.3 telemetry) plus this finding's frontmatter and body.

### Assembly emergent properties

- **E1: The composition addresses consumption-of-relevant directly.** Unlike the prior finding (which addressed listing), this composition's load-bearing operation is the filter at §2.1. The user's correction is met head-on.
- **E2: The filter operation is structurally observable via telemetry.** The criteria statement + per-item scores + threshold are recorded; post-hoc audit can verify the filter worked.
- **E3: The prior finding's mechanism is repositioned, not discarded.** Pre-Scan Mandate v1 stays as input source. Work preserved; failure-mode corrected.
- **E4: Forward-compatible with prior findings.** The canonical-source registry from the prior canonical-coverage finding composes as author-declared criteria (registry items get HIGH-relevance by default). The kinds-of-mapping typology from the prior identity-refresh finding can inform inquiry-type-keyed criteria.
- **E5: Meta-correction preserved as a lesson.** The "Changes from Prior" section names the single-family-fixation failure mode and how this finding avoided it. Future inquiries can reuse the lesson.

### Axis coverage check

- **(a) Wording stringency:** MUST for criteria-derivation (P1.1), MUST for filter computation (P2.3), MAY for annotation (per existing §2.2), SHOULD for D1 threshold adjustment (per P2.1 note). All three values present.
- **(b) Score granularity:** 3-level (HIGH/MEDIUM/LOW). Considered binary (rejected — no middle case) and continuous (rejected — over-precise for LLM-as-judge). 3-level is structurally justified.
- **(c) Criteria source:** Q/G-derived (primary, P1.2) + author-declared (optional, A3 from exploration; merged in P1.1). Composed when both present.
- **(d) Filter aggressiveness:** MEDIUM default, configurable to LOW (more reads) or HIGH (stricter); D1 runs default to LOW per scoring-quality note. All three values exposed.

All four axes covered.

### Project-specific risk dimensions

- **Duplicate-derivable-state:** LOW — criteria statement is new; scores are new; threshold is new. No duplication with existing /explore state.
- **Operation-parsimony:** STRONG — 3 small spec changes; no new disciplines, no new runners, no new files. Adds capability via composition with existing /explore structure.
- **Phase-fit:** PASS — L0-L1 appropriate; the human can verify the criteria-statement and override scores if needed.
- **Explicit-culture-fit:** PASS — MUST/SHOULD/MAY consistent with project conventions; respects disciplines/runners separation (no orchestration changes); aligns with /intuit-as-Cross-cutting taxonomy entry (this finding's mechanism could later invoke /intuit when /intuit matures).

---

## Final Recommendation — Output Dispositions

### ACTIONABLE (ship as "Active Relevance Filter v1" assembly)

- P1.1 — MUST-sentence for criteria-derivation at Step 0
- P1.2 — Criteria output format + derivation procedure
- P2.1 — Scoring mechanism (HIGH/MEDIUM/LOW + scoring-quality-vs-depth note)
- P2.2 — Threshold default (MEDIUM) + configurability
- P2.3 — §2.1 active-filter strengthening
- P2.4 — Filter-vs-annotation hygiene note
- P2.5 — Three telemetry fields
- P2.6 — Worked example
- P4.1 — `corrects:` frontmatter
- P4.2 — "Changes from Prior" body section (includes the meta-correction lesson)

### DEFERRED with revival trigger

- A3 (author-declared criteria as primary source) — present as optional merge in P1.1; revival as a stronger primary if future inquiries show that Q/G-derivation reliably misses author intent.
- C1 (multi-pass refinement) — revival when single-pass scoring proves insufficient in ≥3 inquiries.
- D1 (/intuit embedded) — revival when /intuit Phase B+ ships and the corpus is rich enough.
- E1 (force-read alternative) — revival if criteria-driven filtering proves too brittle (e.g., criteria-quality is consistently poor and filter excludes too much).
- J1 (mid-flight user steering) — revival as a higher-autonomy escape hatch.
- H1 (separate cycle step "Relevance Selection") — revival if §2.1's strengthening proves insufficient and a separate step adds clarity.

### KILLED

None new in innovation. The sensemaking already killed the single-family fixations.

---

## Mechanism Coverage (Telemetry)

- **Generators applied:** 3/4 (Combination — across pieces; Domain Transfer — for the LLM-as-judge scoring mechanism; Absence Recognition — for the hygiene note that names what's currently absent in the spec). Extrapolation not applicable.
- **Framers applied:** 3/3 (Lens Shifting — re-reading §2.1; Constraint Manipulation — minimum-words mandate; Inversion — confused-reader prevention in hygiene note).
- **Convergence:** YES — three independent mechanisms (Combination, Domain Transfer, Lens Shifting) converged on the cross-layer composition.
- **Survivors tested:** all ACTIONABLE candidates passed the 5-test cycle.
- **Failure modes:** None firing.

---

## **Overall: PROCEED**

Downstream (`/td-critique`) should treat "Active Relevance Filter v1" as the primary candidate. The 6 DEFERRED items have explicit revival triggers. No new KILLs surfaced in this phase.
