# Sensemaking — Name for Navigation Discipline

## User Input

```
/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-16_15-18__name_for_navigation_discipline/_branch.md
```

Branch carries the question: *what is a good name for `/navigation` — the discipline that enumerates typed next directions in thinking-space after an inquiry?* Goal: a named verdict (better name OR confirmation of current name) actionable to rename or close. Layer commitment is MEANING (what concept best fits the discipline's essence). Exploration produced ~20 candidates across 8 regions and surfaced the key finding: "good name" is a multi-dimensional decision (recognizability, precision-to-essence, project-vocab alignment, user-language fit, role-distinctiveness, sibling-naming consistency, switching cost).

---

## SV1 — Baseline Understanding

The discipline enumerates next directions; everyday-English "navigation" implies STEERING TOWARD a destination — but this discipline does NOT select, it only enumerates (Selector is a separate role in the autonomy ladder). Slight name-vs-essence mismatch. Initial leaning: rename to something more precise. But the user's framing implies they're unsure, not committed to a rename — the verdict has to either (a) name a better alternative with structural reasoning OR (b) defend `/navigation` against the apparent mismatch.

---

## Phase 1 — Cognitive Anchor Extraction

### Constraints
- **C1** — Layer is MEANING (per _branch.md).
- **C2** — Verdict must be a NAMED answer (better name OR keep current).
- **C3** — Verdict actionable enough to commit to rename or close.
- **C4** — The discipline does FOUR sub-operations: enumerate + reachability/gates check + DIAGNOSE (16th type) + REVISIT sub-actions.
- **C5** — No single English word captures all four sub-operations cleanly.
- **C6** — The user's `cognitive_harness/next_question_to_ask.md` uses "next" repeatedly — user-language signal.
- **C7** — Project-internal terminology drift exists: the autonomy ladder names the role "Navigator" (agent noun); the discipline folder is `navigation/` (action noun); the slash command is `/navigation` (action noun).
- **C8** — Other disciplines mix single-word names (`/innovate`, `/explore`, `/decompose`, `/comprehend`, `/reflect`) AND hyphenated names (`/sense-making`, `/td-critique`, `/meta-loop`). Both forms are sibling-consistent.

### Key Insights
- **KI1** — "Good name" is multi-dimensional. Dimensions: recognizability, precision-to-essence, project-vocab alignment, user-language fit, role-distinctiveness from other disciplines, sibling-naming consistency, switching cost vs improvement value.
- **KI2** — The discipline's DOMINANT operation is ENUMERATION. The other three (gates, diagnose, revisit) are sub-operations of enumeration (they're things you enumerate, or modes of what gets enumerated). Name should reflect the dominant operation.
- **KI3** — "Navigation" in everyday English implies STEERING toward a destination. The discipline ENUMERATES without selecting. Name-essence mismatch is real but mild.
- **KI4** — The discipline's UNIT is "route-card" with a "Direction" field (per `cognitive_harness/navigation/SKILL.md`). Project-vocab anchor: "direction."
- **KI5** — The user's note-to-self uses "next" repeatedly (`next_question_to_ask.md`). User-language anchor: "next."
- **KI6** — Renaming has SMALL switching cost (folder rename, one SKILL.md edit, grep+sed for cross-references in disciplines + protocols + auto-memory). Devdocs and archived snapshots stay as historical record per the established pattern.
- **KI7** — Status Quo Bias (Sensemaking failure mode #1) is the load-bearing risk: defending `/navigation` because it's already in use, not because it best fits the essence. The user's act of asking the question IS the anti-status-quo signal — they wouldn't ask if they were committed.
- **KI8** — `/navigator` (agent noun, matching the autonomy-ladder role) would CREATE a new inconsistency: the slash command would name an AGENT while siblings (`/innovate`, `/sense-making`) name an ACTION. Internal-consistency loss.

### Structural Points
- **SP1** — The 7 naming dimensions form an orthogonal set; no single candidate dominates on all dimensions.
- **SP2** — All sibling disciplines use action-noun form for the slash command. Convention is action-noun.
- **SP3** — The autonomy-ladder role-noun is "Navigator." Discipline name and role name don't need to be identical — they're at different abstraction layers (the role is what's PLAYED; the discipline is what's RUN).

### Foundational Principles
- **FP1** — A discipline name's primary job is fit-to-essence: evoke what the discipline DOES.
- **FP2** — Rename has switching cost; switching cost must be exceeded by name-improvement value.
- **FP3** — Project terminology consistency matters but is recoverable via grep+sed cleanup.

### Meaning-Nodes
- **MN1** — "Good name" = fit-to-essence + recognizability + project-coherence + worth-the-switching-cost. Multi-dimensional with fit-to-essence as primary (per FP1).
- **MN2** — The discipline's essence = enumerating typed possible next directions in thinking-space (where each direction is a typed concept; reachability/gates and diagnose/revisit are sub-modes). Dominant operation = enumeration.

### SV2 — Anchor-Informed Understanding

The question is multi-dimensional, not binary. "Good name" has 7 dimensions; "navigation" wins some, loses others. The user's act of asking signals doubt about the current name — defending `/navigation` requires explicit structural argument, not just inertia. The candidate space narrows to three Tier-A candidates: keep `/navigation` (pragmatic), rename to a precision-flavored name (structural), or rename to a user-language-flavored name. The verdict depends on which dimension the user prioritizes.

*Meta-Inspection cross-reference: applying the meta-question to H4 (concept names) — am I treating "good name" as one fixed concept? No, multi-dimensional per KI1. To H5 (motivating examples) — am I treating `/navigation` as THE WHOLE pattern of project disciplines, or as one specific instance? One instance; principles generalize but verdict is example-bounded.*

---

## Phase 2 — Perspective Checking

### Technical / Logical

The discipline ENUMERATES; "navigation" implies STEERS. Precision-wise, names that evoke enumeration are more accurate: `/directions`, `/next-moves`, `/enumerate-directions`. Logically, precision matters for a discipline name because the name is loaded into the LLM's context every time the discipline runs — a precision-mismatched name may bias the LLM toward selection behavior subtly.

**Verdict:** precision favors enumeration-flavored names. `/navigation` loses on this dimension; `/directions` and `/next-moves` win.

### Human / User

The user invokes `/navigation` today. From their mental model, the current name is familiar. A rename creates short-term friction (re-learning the command) for permanent fit improvement. The user's note-to-self uses "next" — relevance signal for `/next-moves`.

**New anchor — KI9:** The rename's switching cost has TWO sub-costs: (a) mechanical (file renames + cross-refs; small per KI6); (b) mental-model retraining (user re-learns the slash command). Mental cost is one-time and small.

**Verdict:** user-language favors `/next-moves`; user-comfort slightly favors keeping `/navigation`. Net: small advantage to `/next-moves`.

### Strategic / Long-term

Over the project's lifetime, the discipline name appears in many cross-references. Strategic preference: get the name right EARLY before the corpus grows. The corpus is ~30 findings; cross-reference debt is manageable today, harder in 6 months when the corpus doubles or triples.

**Verdict:** strategic argument favors renaming NOW if a better name exists; the switching-cost grows with time.

### Risk / Failure

- Keep `/navigation`: name-essence mismatch persists; future readers may expect selection behavior. Low-grade ongoing friction.
- Rename to precision-flavored: switching cost; possible name-vs-user-language mismatch.
- Rename to user-language (`/next-moves`): if it turns out too informal for spec style, the rename is regressive.

**Verdict:** all three options have recoverable risks; status quo's risk is ONGOING (every future use carries the mismatch), rename's risk is ONE-TIME (the rename event). Slight edge to rename.

**New anchor — KI10:** ongoing-risk asymmetrically dominates one-time-risk over time. The status quo's compounding friction may not be visible per-use but accumulates.

### Resource / Feasibility

Rename effort: folder rename + SKILL.md edit + grep+sed for cross-references in `cognitive_harness/`, `docs/`, `~/.claude/skills/` (the install), and auto-memory. Estimate: ~30 minutes. Devdocs and `archived_skills/` stay (historical record per established pattern). Trivial feasibility.

**Verdict:** feasibility doesn't decisively favor any verdict; rename is feasible if chosen.

### Definitional / Internal Consistency

- `/navigation`: implies steering (mild English mismatch); aligned with Navigator role-noun (cross-layer agreement); breaks fit-to-essence (mild).
- `/directions`: precision-aligned; project-vocab-aligned ("Direction" is the route-card field); internally consistent.
- `/next-moves`: precision-OK ("moves" introduces new vocab); user-language-aligned; sibling-naming style matches `/sense-making`-style hyphenation.
- `/navigator`: agent noun; introduces NEW inconsistency — siblings name actions, this would name an agent. Internal-consistency loss.
- `/enumerate-directions`: precision-aligned; project-vocab-aligned; long form; consistency-OK but bulky.

**Verdict:** `/directions` and `/next-moves` are internally consistent; `/navigator` introduces new inconsistency; status quo has mild consistency tension with everyday English but aligns with role-noun.

### Definitional / Frame-exit Completeness

Gating predicate fires — "good name" is multi-value within the inquiry's own committed structure.

**Existence Enumeration.** What does "good name for a discipline" refer to project-wide?
- Dimensions of naming: recognizability, precision-to-essence, project-vocab fit, user-language fit, role-distinctiveness, sibling-naming consistency, switching cost. (7 dimensions per KI1.)
- All in-frame; none excluded.

**Role Assessment.** All 7 dimensions are load-bearing for the verdict; none excluded.

**Verdict Rigor.** Counter to whichever candidate wins:
- If `/navigation` wins: counter = "this is Status Quo Bias; defends the name because it's there." Mitigated only if the structural defense is articulated (zero switching cost + recognizability + role-noun alignment are real defenses).
- If `/directions` wins: counter = "loses on user-language; introduces a project-vocab term over plain-English."
- If `/next-moves` wins: counter = "introduces 'moves' as a new vocab; possibly too informal."

Each counter is plausible. Verdict needs to commit by weighting.

**Residual / Coverage Justification.** Any concern not captured? Possibly: a rename via the workshop pattern (just demonstrated for `sensemaking_problem → sensemaking`) would be more careful than a direct rename. But name changes are mechanical; workshop is overkill. Flag as optional in Next Actions.

### Phase / Calibration-State

Does the verdict depend on calibration? Minor. The dominant-operation framing (enumeration) is project-current; if the discipline's role evolves (e.g., it eventually starts selecting too), the verdict may revisit. Currently stable.

### SV3 — Multi-Perspective Understanding

The 7 dimensions assemble into a candidate scorecard:

| Candidate | Recognizability | Precision-to-essence | Project-vocab fit | User-language fit | Role-distinctiveness | Sibling-naming consistency | Switching cost |
|---|---|---|---|---|---|---|---|
| `/navigation` (current) | **HIGH** | LOW | MEDIUM | LOW | MEDIUM (matches role-noun) | HIGH | **ZERO** |
| `/directions` | MEDIUM-HIGH | MEDIUM-HIGH | **HIGH** | LOW | HIGH | HIGH | small |
| `/next-moves` | **HIGH** | MEDIUM | MEDIUM | **HIGH** | HIGH | HIGH (hyphenated like siblings) | small |
| `/enumerate-directions` | LOW (bulky) | HIGH | HIGH | LOW | HIGH | MEDIUM | small |
| `/direction-map` | MEDIUM | HIGH | HIGH | LOW | HIGH | MEDIUM (hyphenated) | small |
| `/navigator` (agent noun) | HIGH | MEDIUM | MEDIUM | LOW | LOW | LOW (breaks action-noun pattern) | small |

The candidates that score well multi-dimensionally:
- `/navigation` wins on recognizability + zero switching cost + sibling consistency. Loses on precision-to-essence.
- `/directions` wins on project-vocab fit + precision + internal consistency. Loses on user-language fit.
- `/next-moves` wins on user-language fit + recognizability + sibling consistency. Loses on (small) introduction of new "moves" vocab.

Three Tier-A candidates emerge. `/navigator`, `/enumerate-directions`, `/direction-map` go to Tier B.

*Meta-Inspection cross-reference: applying meta-question to H1 (candidate set) — are the 6 candidates instances of one operation? Yes: each names the discipline via a different dimensional emphasis. The candidate set is coherent. To H2 (frame scope) — addressed via Frame-exit. To H3 (question framing) — does "good name" pre-bias toward subjective "good"-sounding names? Yes slightly; resolution is the explicit 7-dimension framework. To H7 (phase/calibration state) — minor; stable.*

---

## Phase 3 — Ambiguity Collapse

### Ambiguity 1: What does "good name" mean?

**Strongest counter-interpretation:** Maybe "good name" means just most-recognizable. Under this reading, `/navigation` wins by default — everyone knows what "navigation" means.

**Why the counter fails (structural grounds):** Recognizability is one of seven dimensions per the Frame-exit enumeration. The user wouldn't ask "what is a good name" if recognizability alone were enough — the question itself presupposes that recognizability isn't the whole answer. The user implicitly asks for a name that BETTER FITS THE ESSENCE while being recognizable. Strict recognizability-only reading is too narrow.

**Confidence:** HIGH.

**Resolution:** "Good name" = (recognizability + precision-to-essence + project-vocab fit + user-language fit + role-distinctiveness + sibling-naming consistency + switching cost), multi-dimensional, with fit-to-essence as primary per FP1.

### Ambiguity 2: Should the rename happen at all?

**Strongest counter-interpretation:** The branch goal explicitly accepts "confirmation that `/navigation` is already the right name" as a valid verdict. So keeping the current name is a structurally-valid verdict.

**Why the counter doesn't fail:** The counter holds. Keeping is valid. But: the verdict "keep" must survive the explicit anti-status-quo-bias test (failure mode #1). The defense for `/navigation` is "zero switching cost + recognizability + role-noun alignment" — all real, all structural, not just inertia. The defense survives the test.

**Confidence:** MEDIUM-HIGH (the status quo defense is real but the precision argument is also real).

**Resolution:** "Keep current" is valid IF the user weights recognizability and switching cost above precision-to-essence. Otherwise rename. The user's question shape (asking at all) suggests they don't decisively prefer the status quo; weighting is open.

### Ambiguity 3: Is "/navigation" actually wrong, or is the dictionary meaning broader than I'm treating it?

**Strongest counter-interpretation:** Dictionary definitions of "navigation" include "the action of plotting one's course" — which IS what the discipline does. Plotting a course = enumerating possible directions + assessing reachability. The English word fits BOTH selecting AND enumerating. So `/navigation` isn't a mismatch.

**Why the counter has merit:** The dictionary supports the broader reading. "To navigate" can mean "to plan a route" (enumeration) OR "to follow a route" (execution/selection). The discipline does the former; "navigation" covers it.

**Why the counter doesn't fully succeed:** The everyday-English DEFAULT reading of "navigation" is the executive one (the act of steering toward a destination). Even if the dictionary allows the broader reading, readers default to the executive reading. The discipline's actual operation (enumeration without selection) is the LESS COMMON meaning of the English word.

**Confidence:** MEDIUM.

**Resolution:** `/navigation` is NOT strictly wrong (the broad dictionary meaning allows it), but it's NOT-OBVIOUS (defaults to the executive reading, which doesn't match). This weakens the precision-to-essence argument but doesn't eliminate it.

### Load-bearing concept test

- **"Good name"** (multi-dimensional, SV2/SV3): test domain-property. Project-specific (the project values fit-to-essence per design-history). PASS.
- **"The discipline's essence"** (MN2: enumerating typed possible next directions): test domain-terminology. Aligns with the discipline's SKILL.md description. PASS.
- **"Switching cost"** (KI6, KI9): test discoverability. Observable via grep + sed scope; defined. PASS.

### Specific-vs-pattern recognition cue

The 6 candidates are specific examples. The dimension-weighting framework is pattern-general (applies to any future discipline-naming question). The verdict is example-bounded to `/navigation`.

### SV4 — Clarified Understanding

After disambiguation:
- "Good name" is multi-dimensional (7 dims)
- "Keep current" is a structurally-valid verdict if the user weights recognizability/zero-cost above precision
- `/navigation` is not strictly wrong but defaults readers to the wrong (executive) meaning of the English word
- Three Tier-A candidates: `/navigation` (status quo), `/directions` (precision + project-vocab), `/next-moves` (user-language)

---

## Phase 4 — Degrees-of-Freedom Reduction

### Fixed:
- 7-dimensional naming framework
- 3 Tier-A candidates: `/navigation`, `/directions`, `/next-moves`
- Switching costs are small
- Status quo defense is structural, not inertial
- `/navigation` defaults English readers to the wrong meaning but is not strictly wrong

### Eliminated:
- Strict recognizability-only reading of "good name" (Ambiguity 1)
- "Just keep it because it's there" defense (Ambiguity 2)
- Hyphenation as a decisive constraint
- `/navigator` (introduces new file-name vs role-name inconsistency)
- Tier B candidates (`/enumerate-directions`, `/direction-map`) — dominated by Tier A on multi-dim grounds

### Remaining viable verdicts:
- **W1: Keep `/navigation`** — pragmatic verdict (zero switching cost + recognizability + role-noun alignment outweigh precision improvement)
- **W2: Rename to `/directions`** — structural verdict (precision + project-vocab fit + internal consistency outweigh switching cost)
- **W3: Rename to `/next-moves`** — user-language verdict (recognizability + user-language fit + sibling consistency outweigh introducing "moves" as new vocab)

### SV5 — Constrained Understanding

Three viable verdicts with distinct profiles:

| Verdict | Fit-to-essence | Recognizability | Project-vocab fit | User-language fit | Switching cost |
|---|---|---|---|---|---|
| **W1** (keep /navigation) | low-medium | HIGH | medium | low | **zero** |
| **W2** (rename to /directions) | HIGH | medium-high | **HIGH** | low | small |
| **W3** (rename to /next-moves) | medium-high | HIGH | medium | **HIGH** | small |

User-decision factors:
- If recognizability + zero-cost is the priority: W1
- If structural fit + project-vocab consistency is the priority: W2
- If user-language alignment is the priority: W3

---

## Phase 5 — Conceptual Stabilization

*Meta-Inspection cross-reference: H6 (model fit) — does the 3-verdict model destabilize? No — anchors absorbed cleanly into the 7-dim matrix. No Accommodation trigger fired.*

### SV6 — Stabilized Model

The question has a three-tier verdict rather than a single answer:

- **W1 — Keep `/navigation`** is the pragmatic default. It wins on recognizability (HIGH), zero switching cost, and alignment with the autonomy-ladder Navigator role-noun. It loses on precision-to-essence — "navigation" defaults English readers to the steering-toward-a-destination meaning, but the discipline only enumerates without selecting. The structural defense is real: zero switching cost is a non-trivial advantage; recognizability matters; role-noun alignment matters. The defense survives the explicit anti-Status-Quo-Bias test.

- **W2 — Rename to `/directions`** is the structural-fit verdict. It wins on project-vocab fit (the route-card record has a "Direction" field; the discipline's own SKILL.md uses "directions" repeatedly), precision-to-essence (it names the discipline's object directly), and internal consistency. It loses on user-language fit (the user doesn't say "directions" in their note-to-self; they say "next").

- **W3 — Rename to `/next-moves`** is the user-language verdict. It wins on user-language fit (the user's framing in `next_question_to_ask.md` uses "next" repeatedly) and recognizability (plain English). It introduces "moves" as new project vocabulary, which is a mild cost.

The verdict shape: no single dominant answer. Innovation's job is to surface hybrids that combine dimensional wins; Critique's job is to test which verdict survives adversarial pressure given the user's actual priorities. The default ranking by structural argument alone (fit-to-essence as primary per FP1) is **W2 > W3 > W1**. The default ranking by user-language signal is **W3 > W1 > W2**. The default ranking by pragmatic-conservatism is **W1 > W3 > W2**.

**Difference from SV1:** SV1 leaned "rename to enumeration-flavored." SV6 says the question is multi-dimensional with three viable verdicts; the choice depends on the user's dimensional weighting. The default by structural argument is W2 (`/directions`); the question's framing-implied-doubt about `/navigation` is real but doesn't decisively kill the status quo.

---

## Saturation Indicators (Telemetry)

- **Perspective saturation:** 8/8 perspectives produced new anchors (KI9 from Human/User; KI10 from Risk; etc.). Reached.
- **Ambiguity resolution ratio:** 3/3 ambiguities resolved. 100%.
- **SV delta:** SV1 leaned rename to enumeration-flavored; SV6 = 3-tier verdict (W1/W2/W3) with no single dominant answer. Substantial structural shift.
- **Anchor diversity:** 8 Constraints + 10 Key Insights + 3 Structural Points + 3 Foundational Principles + 2 Meaning-Nodes, across 8 perspectives. Multi-typed and multi-perspective.

Saturation reached on all four indicators.

---

## Failure Mode Self-Check

- **Status Quo Bias:** Explicitly tested via Ambiguity 2. Defense for `/navigation` is structural (zero switching cost + recognizability + role-noun alignment) not inertial. Survives the test.
- **Premature Stabilization:** No — went through Phase 3 with 3 explicit counter-interpretations tested on structural grounds.
- **Anchor Dominance:** Risk flagged — KI3 (essence-mismatch with everyday English) is a strong anchor. Verified: if KI3 is removed (counter-interpretation that dictionary allows broader meaning), the verdict shape STILL holds 3 candidates. Not dominance.
- **Perspective Blindness:** No — Risk and Resource perspectives produced friction; Frame-exit Completeness applied.
- **Clean Resolution Trap:** No — none of the verdicts is "clean" in the sense of dominating on all dimensions; the verdict explicitly preserves the three-way trade-off.
- **Self-Reference Blindness:** **Flag** — using `/sense-making` to evaluate a sibling discipline's name. Sibling disciplines share conceptual framework. External grounding applied: (i) the linguistic argument (dictionary defaults) is external to the project's framework; (ii) the user's own note-to-self provides independent framing; (iii) the multi-dimensional matrix is external (UX / naming-theory); (iv) the candidate set comes from exploration's empirical scan. Verdict survives.
