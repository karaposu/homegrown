# Innovation (iter 2) — skeleton expressions for the iter-2 meaning-definition

## User Input
`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-12_00-40__explore_discipline_from_scratch/_branch.md`

Prior outputs consumed: iter-2 `exploration.md`, `sensemaking.md`, `decomposition.md`. Iter-1 finding (`finding_iter1.md`) and iter-1 disciplines (`docarchive/iter1/`) preserved as historical context, treated as one prior attempt.

---

## Seed

Iter-2 sensemaking committed: *to explore = purposive open-mode surfacing*. Iter-2 decomposition produced 5 meaning-level pieces (Setup / Commitment / Action / Accumulator / Exit) and named 3 refinement points on iter-1's structural skeleton (Identity / Components / Quality). The seed is: **how should the iter-2 meaning-definition be EXPRESSED as a SKILL.md skeleton, and what are the candidate variants?**

**Seed type:** Question + Constraint. The user named two example operations (innovation's redefinition as the analog; the existing `/explore` as one prior attempt) and constrained the answer to be a "skeleton."

**Direction (intuition):** the user values cognitive clarity. The user explicitly compared to how innovation was redefined (verb-led, cognitively grounded). The user wants the SKILL.md (or its companion reference file) to lead with what `/explore` MEANS, not what `/explore` DOES procedurally. The project's existing SKILL.md files follow a two-file pattern: SKILL.md (operational) + references/<discipline>.md (conceptual), so iter-2 expressions should consider both files, not just one.

**Important framing correction:** the project's discipline pattern places conceptual structure in `references/<discipline>.md` (where the 5-section spec anatomy lives), not in SKILL.md (which holds operational instructions + Step 0 pre-read). Iter-2 expression candidates therefore work on the two-file pair.

---

## Phase 2 — Generate (Seven Mechanisms × 3 Variations Each)

### 1. Lens Shifting (Framer)

- **Generic:** Under what conditions is iter-1's structural skeleton more useful than a meaning-led structure? When the audience is implementing the SKILL.md and needs to know what to write. → Argues for SK-A (preserve iter-1 structure).
- **Focused:** Under what conditions is a meaning-led structure more useful? When the audience is reasoning about `/explore` vs other disciplines as cognitive operations. → Argues for SK-B (restructure to meaning-pieces).
- **Contrarian:** Under what conditions are BOTH unnecessary? When the audience knows the existing `/explore` and only wants the diffs. → Argues for SK-E (delta-only).

### 2. Combination (Generator)

- **Generic:** Combine iter-1 structure + iter-2 meaning-pieces → present the references file as iter-1's structural sections with a meaning-table at top showing which meaning-piece each section instantiates. → SK-AB hybrid.
- **Focused:** Combine "open-mode commitment" + "process structure" → no separate Commitment section needed; the cycle's design IS the commitment. Open-mode is named once in Identity, then instantiated by the cycle. → SK-A with implicit-commitment refinement.
- **Contrarian:** Combine `/explore` + `/comprehend` as paired-defined disciplines → each spec names the other as its closed-mode/open-mode counterpart. Mutual definition. → SK-D (paired-discipline).

### 3. Inversion (Framer)

- **Level 1 (component-level):** Assumption: the spec defines `/explore` in isolation. Invert: define `/explore` *by contrast* — lead with "exploring vs researching" scenarios, derive `/explore`'s positive properties from the contrast. → SK-VS (contrast-led).
- **Level 2 (system-level):** Assumption: definitions name what the discipline DOES. Invert: definitions name what the discipline COMMITS TO. The verb names the commitment; operations derive from it. → SK-COMMIT-LED.
- **Level 3 (root-cause-level):** Assumption: each discipline stands alone in its spec. Invert: disciplines are *pair-defined* against their nearest comparator. → SK-D again (pair-defined system-wide).

### 4. Constraint Manipulation (Framer)

- **Generic (add "the SKILL.md must be short"):** Forces the operational file to compress. Iter-1's pattern already is short; iter-2 adds Step 0 mode declarations (commitment-mode + territory-type-mode + entry-point). → Refinement to any candidate.
- **Focused (remove "single-file"):** Spec lives across SKILL.md (operational) + references/explore.md (conceptual). This IS the existing pattern. No change needed; the meaning-definition lives in the reference file. → Confirms two-file decomposition.
- **Contrarian (add "must be machine-readable enforcement"):** Then the spec must specify detection mechanisms for failure modes. Iter-2's mode-confusion is downstream-observable (not real-time inside `/explore`); the spec must specify downstream consumers, not internal classifier. → Refinement to Quality section.

### 5. Absence Recognition (Generator)

- **Generic gap:** What's missing from iter-1 that iter-2 needs? An EXPLICIT verb-meaning statement at the top of the conceptual reference file. Iter-1's Identity said what `/explore` IS as a discipline; iter-2 needs a Verb-Meaning section that says what "to explore" MEANS. → **SK-VERB-LED variant**: add a leading section.
- **Focused gap:** Iter-1's spec has no explicit comparator. Iter-2's exploration named `/research` (verb-level) and `/comprehend` (discipline-level) as the closed-mode neighbors. A Comparator section in the reference file would close this gap. → **SK-COMPARATOR variant**: add a Comparator section.
- **Redesign-level gap:** Iter-1's spec doesn't show example SCENARIOS where /explore is the right move vs /comprehend. The user's iter-2 framing was explicitly scenario-driven ("in what example scenarios does the distinction become load-bearing"). → **SK-SCENARIOS variant**: add Scenarios subsection within Comparator.

### 6. Domain Transfer (Generator)

- **Generic (Cognitive psychology):** Open vs closed cognition is a documented dichotomy (exploration vs exploitation in RL; divergent vs convergent thinking; default-mode network vs task-positive network). Importing the dichotomy grounds the spec in established vocabulary. → Refinement: Verb-Meaning section can cite established framings.
- **Focused (API design):** Paired-defined APIs ("read"/"write", "open"/"close") work because each gives meaning to the other. → Reinforces SK-D (paired-discipline).
- **Contrarian (Reconnaissance):** Military distinction: recce (cheap forward observation) vs intelligence-gathering (targeted answers to defined questions). Same open/closed distinction, different vocabulary. Confirms cross-domain validity.

### 7. Extrapolation (Generator)

- **Generic (1-year horizon):** The project might gain a `/research` discipline (separate from `/comprehend`) for queries that aren't artifacts. The skeleton should be future-compatible — name "closed-mode disciplines" plurally. → Refinement to Comparator section.
- **Focused (Level 3+ autonomy):** Autonomous mode-selection could choose between /explore and /comprehend based on the inquiry's question shape. The spec should declare which discipline is open-mode vs closed-mode so the selector can choose. → **SK-MODE-DECLARED variant**: front-matter `mode: open` declaration in each discipline's SKILL.md.
- **Contrarian (long-term merger):** /explore and /comprehend might merge into one discipline with a mode parameter. Iter-2's single-mode commitment might prevent this. → Note as research-frontier risk; not actionable now.

---

## Phase 3 — Test

### Candidate consolidation

| Tag | Shape (two-file pair) | Source mechanisms |
|---|---|---|
| **SK-A** | references/explore.md preserves iter-1's 5-section structure (Identity / Components / Process / Quality / Output) with iter-2 refinements absorbed within sections; SKILL.md adds Step 0 declaration `cognitive-commitment: open` | Lens (generic) + Constraint (focused) |
| **SK-B** | references/explore.md restructures to iter-2's 5 meaning-pieces (Setup / Commitment / Action / Accumulator / Exit); SKILL.md updated to point at new structure | Lens (focused) + Inversion (L1+L2) |
| **SK-AB** | references/explore.md = iter-1 structure with a meaning-table at top mapping iter-2 pieces to iter-1 sections | Combination (generic) |
| **SK-VERB-LED** | references/explore.md starts with a "Verb Meaning" section (the verb-meaning statement + comparator + scenarios), then iter-1's 5 structural sections; SKILL.md unchanged | Absence (generic + redesign-level) |
| **SK-COMPARATOR** | references/explore.md adds a "Comparator" section showing /explore vs /research (verb) and /explore vs /comprehend (discipline) | Absence (focused) |
| **SK-SCENARIOS** | references/explore.md's Comparator section includes 3-4 concrete scenarios where each is the right move | Absence (redesign-level) |
| **SK-D** | references/explore.md + references/comprehend.md cross-reference each other as open/closed-mode pair; bilateral edit | Combination (contrarian) + Inversion (L3) + Domain Transfer (focused) |
| **SK-MODE-DECLARED** | Both SKILL.md files get `cognitive-commitment: open` (or `closed`) frontmatter declarations | Extrapolation (focused) |
| **SK-VS** | references/explore.md leads with "exploring vs researching" contrast scenarios, then derives /explore properties from the contrast | Inversion (L1) |
| **SK-E** | Delta-only document listing iter-2 refinements; no skeleton rewrite | Lens (contrarian) |

### Five-test cycle on each candidate

| Candidate | Novelty | Scrutiny | Fertility | Actionability | Mech Indep | Disposition |
|---|---|---|---|---|---|---|
| **SK-A** | LOW | HIGH (compatible with project pattern; all SV6 elements absorbed) | MEDIUM | HIGH (minimal disruption) | HIGH | **SURVIVE — ACTIONABLE** (default refinement of iter-1) |
| **SK-B** | HIGH | MEDIUM (departs from project pattern; sense-making / comprehend / etc. follow iter-1-style 5-section reference; consistency breaks) | MEDIUM | MEDIUM (rewrite required; need other disciplines updated for consistency) | LOW (only inversion supports) | **DEFERRED — research-frontier** revival trigger: project decides to restructure all reference files around cognitive operations |
| **SK-AB** | MEDIUM | HIGH (both views in one file) | MEDIUM | HIGH | MEDIUM | **REFINE → fold into SK-A as an optional "Meaning-mapping" addendum**; doesn't need to be a separate variant |
| **SK-VERB-LED** | MEDIUM-HIGH (new section type) | HIGH (matches the user's "redefine like innovation" framing; leads with verb-meaning) | HIGH (gives downstream consumers the meaning context they need) | HIGH | HIGH (3 mechanisms converge: absence + inversion-L2 + extrapolation-focused) | **SURVIVE — ACTIONABLE addition to SK-A** |
| **SK-COMPARATOR** | MEDIUM (comparator section is new) | HIGH (honors the user's explicit comparator framing) | HIGH (helps users choose between /explore and /comprehend) | HIGH | HIGH (absence + lens-focused + domain-transfer converge) | **SURVIVE — ACTIONABLE addition to SK-A** |
| **SK-SCENARIOS** | MEDIUM | HIGH (user explicitly asked for scenarios) | HIGH (concrete scenarios are pedagogically valuable) | HIGH | HIGH | **SURVIVE — ACTIONABLE addition to SK-COMPARATOR** |
| **SK-D** | HIGH | MEDIUM (requires editing /comprehend; out of scope for this inquiry) | HIGH (helps autonomous mode-selection at higher autonomy levels; explicit pairing aids reasoning) | LOW (cross-discipline coordination required; not a single-inquiry edit) | MEDIUM | **DEFERRED with revival trigger:** /comprehend is being rewritten OR autonomous mode-selection is being designed (Level 3+ autonomy) |
| **SK-MODE-DECLARED** | MEDIUM (new frontmatter field) | HIGH (lightweight; future-compat) | HIGH (enables autonomous selection; helps inquiry classification) | MEDIUM (requires alignment with other disciplines on the frontmatter convention) | MEDIUM | **DEFERRED with revival trigger:** project introduces a frontmatter-mode convention OR autonomous mode-selection ships |
| **SK-VS** | HIGH | MEDIUM (contrast-led can feel definitional-by-negation; some users prefer positive definition) | MEDIUM | MEDIUM | LOW (only inversion supports) | **REFINE → fold the contrast framing into SK-COMPARATOR**; doesn't need to be the leading structure |
| **SK-E** | LOW | LOW (doesn't honor the user's "from scratch reunderstanding" request; patches accumulate) | LOW | HIGH | LOW | **KILL** — user explicitly asked for skeleton, not delta |

### Assembly check

Surviving + refined candidates: SK-A (ACTIONABLE), SK-VERB-LED (ACTIONABLE addition), SK-COMPARATOR (ACTIONABLE addition), SK-SCENARIOS (ACTIONABLE addition to SK-COMPARATOR), SK-MODE-DECLARED (DEFERRED), SK-D (DEFERRED), SK-B (research frontier). SK-AB and SK-VS folded into SK-A and SK-COMPARATOR respectively.

What emerges from the assembly?

**Emergent assembly — "The iter-2 skeleton expression":**

The recommended SKILL.md / references/explore.md pair is:

- **references/explore.md** (the conceptual file):
  - **Section 0 — Verb Meaning** (NEW): one-paragraph statement of "to explore = purposive open-mode surfacing"; structural commitment named (open-mode); contrasted with research (closed-mode interrogation).
  - **Section 0.1 — Comparator** (NEW): brief comparison of /explore vs /comprehend at the discipline level, vs research at the verb level, with 3 concrete scenarios where each is the right move.
  - **Section 1 — Identity** (REFINED from iter-1): incorporates the verb meaning + NOT-list + upstream-precondition. F-weak/F-strong dispute removed.
  - **Section 2 — Components** (REFINED): 6 components; relevance is now a *scan-driver* (signal type that biases attention during scan), not a post-scan annotation. Annotation layers reduced to existence, confidence, adjacency, confirmed-absent.
  - **Section 3 — Process** (PRESERVED with minor refinement): cycle structure as iter-1; explicit Step 0 declaration of cognitive-commitment-mode (open) + territory-type-mode (artifact/possibility) + entry-point.
  - **Section 4 — Quality** (REFINED): adds *mode confusion* failure mode (recognition: downstream sense-making finds redundant anchor work; or in-discipline, the explorer starts pursuing specific answers rather than mapping). Iter-1's "F-strong drift" rephrased as a sub-case of mode confusion.
  - **Section 5 — Output** (PRESERVED): Transform / Progression / Telemetry / Frontier as iter-1.

- **SKILL.md** (the operational file):
  - **Step 0 pre-read** of references/explore.md (as iter-1).
  - **Additional Step 0 declaration:** when the discipline starts, name explicitly: cognitive-commitment-mode (always "open" for /explore), territory-type-mode (artifact or possibility, detected from input), entry-point (frontier-first default, signal-first if hunch).
  - **Rest of operational instructions:** as iter-1.

This assembly addresses every iter-2 refinement and honors the user's "redefine like we did with innovation" framing without restructuring the project's discipline-spec pattern.

### Axis coverage check

| Axis | Variants generated | Status |
|---|---|---|
| **A1: Spec structure** | iter-1 structure (SK-A), meaning-piece structure (SK-B), hybrid (SK-AB) | Covered |
| **A2: Verb-meaning expression** | None (SK-A baseline), explicit Verb Meaning section (SK-VERB-LED), contrast-led (SK-VS) | Covered |
| **A3: Comparator handling** | None (SK-A baseline), Comparator section (SK-COMPARATOR), scenarios within comparator (SK-SCENARIOS), paired-discipline (SK-D) | Covered |
| **A4: Open-mode declaration locus** | Implicit-in-cycle (focused-combination), Step 0 declaration (SK-A + extrapolation), frontmatter (SK-MODE-DECLARED), failure-mode-only (no candidate produced) | 3/4 covered; "failure-mode-only" not generated — gap noted |
| **A5: Mode-confusion failure mode** | Named within Quality section (all candidates default); separate "Drift signals" section (no candidate produced) | 1/2 covered; "separate drift section" not generated — gap noted; minor gap, the Quality section placement is sufficient |
| **A6: Skeleton expression layer** | SKILL.md only (SK-MODE-DECLARED), references only (SK-VERB-LED + SK-COMPARATOR + SK-SCENARIOS), both files (SK-A + assembly) | Covered |

Two minor axis gaps noted (A4 failure-mode-only declaration; A5 separate drift section). Neither is load-bearing; assembly's placements (Step 0 declaration + Quality section mode-confusion entry) are sufficient.

### Convergence signal

- **SK-A** is convergent (multiple mechanisms support): lens-shifting (generic), constraint-manipulation (focused), implicit from project pattern.
- **SK-VERB-LED**: 3 mechanisms converge (absence-generic, inversion-L2, extrapolation-focused) → HIGH convergence.
- **SK-COMPARATOR**: 3 mechanisms converge (absence-focused, lens-shifting-focused/contrast use, domain-transfer-focused) → HIGH convergence.
- **SK-SCENARIOS**: 1 strong mechanism (absence-redesign-level) + direct user request → MEDIUM-HIGH convergence.

The assembly itself (SK-A + SK-VERB-LED + SK-COMPARATOR + SK-SCENARIOS as additions) has **3+ mechanisms converging on multiple of its parts**, which is HIGH overall convergence.

---

## Failure Mode Self-Check

| Failure mode | Observed? | Note |
|---|---|---|
| Premature evaluation | No | All 7 mechanisms applied before testing |
| Single-mechanism trap | No | 4 Generators + 3 Framers applied |
| Early frame lock | No | After SK-A emerged plausible, continued through 9 more candidates |
| Innovation without grounding | No | Every candidate tested with 5-test cycle |
| Mechanism exhaustion | No | Survivors exist |
| Survival bias | Re-checked SK-B (high-novelty kill candidate) — verified the kill is on project-pattern-consistency grounds, not discomfort grounds. SK-D's kill is also on scope grounds (out-of-inquiry edit), not discomfort. |

---

## Final Deliverable

### ACTIONABLE survivors

- **SK-A** (base) — references/explore.md preserves iter-1's 5-section structure with iter-2 refinements absorbed; SKILL.md adds Step 0 cognitive-commitment-mode declaration.
- **SK-VERB-LED** (addition) — references/explore.md gains a leading "Verb Meaning" section stating "to explore = purposive open-mode surfacing" + structural commitment + contrast with research.
- **SK-COMPARATOR** (addition) — references/explore.md gains a "Comparator" section comparing /explore vs /comprehend (discipline level) and vs research (verb level).
- **SK-SCENARIOS** (addition to SK-COMPARATOR) — Comparator section includes 3-4 concrete scenarios where each is the right move.

These four together constitute the recommended iter-2 skeleton expression — "iter-1 structure with three new leading sections" — which is structurally a moderate-scope edit to the existing two-file pair.

### DEFERRED-with-revival survivors

- **SK-MODE-DECLARED** — `cognitive-commitment: open` frontmatter declaration on SKILL.md. **Revival trigger:** project introduces a frontmatter-mode convention across disciplines, OR autonomous mode-selection ships at Level 3+ autonomy.
- **SK-D** (paired-discipline) — /explore and /comprehend cross-reference each other. **Revival trigger:** /comprehend is being rewritten OR a coordinated discipline-pair effort is undertaken (e.g., for autonomous mode-selection).

### RESEARCH FRONTIER

- **SK-B** — full restructure of references/explore.md (and other reference files) around cognitive operations rather than spec anatomy. Preserved as long-term direction if the project decides to make this systemic change.

### KILLED

- **SK-E** (delta-only) — doesn't honor the user's "from scratch reunderstanding" request.

### REFINED-and-folded

- **SK-AB** (meaning-table at top) — folded into SK-A as optional addendum if needed.
- **SK-VS** (contrast-led structure) — contrast framing folded into SK-COMPARATOR.

---

## Specific content recommendations (for the surviving SK-VERB-LED + SK-COMPARATOR + SK-SCENARIOS additions)

### Verb Meaning section (proposed phrasing for references/explore.md)

> **To explore is to perform purposive open-mode surfacing of a territory** — entering material whose contents are not pre-known, attending via purpose-biased relevance to what stands out, and accumulating a confidence-tagged map of what was encountered. The defining cognitive commitment is open-mode (success = the cognizer's map is changed by encountering what's there). The closest comparator is closed-mode interrogation (success = a defined question is answered, which research formalizes at the verb level and /comprehend formalizes at the discipline level for named artifacts). `/explore` formalizes the open-mode commitment and produces the surfaced-item map other disciplines presuppose.

### Comparator section (proposed structure)

- One-paragraph statement of explore vs research at the verb level (open-mode vs closed-mode; map-changing-success vs question-answering-success).
- One-paragraph statement of /explore vs /comprehend at the discipline level (upstream open-mode surfacing vs targeted-artifact modeling).
- Then 3-4 scenarios.

### Scenarios (proposed examples — from iter-2 exploration's Cycle 1)

- *New to a codebase, want to understand it.* Exploring: open `src/`, list directories, read README, get a feel for the shape. Researching: search for "where does authentication happen" — defined question, hunting an answer.
- *New problem domain (e.g., compiler design).* Exploring: browse Wikipedia, read 3 random papers, watch a YouTube intro, get a sense of the landscape. Researching: "How does an LR(1) parser handle conflicts?" — defined question, look up the answer.
- *Data analysis.* Exploring: plot distributions, scatter plots, see what catches your eye (exploratory data analysis). Researching: "Does the treatment group have higher response rates?" — run a t-test, get a p-value.
- *Personal: career change.* Exploring: try different jobs informally, talk to people in various fields, see what energizes. Researching: "What's the average salary for X role?" — look up.

### Mode confusion failure mode (proposed entry)

> **Mode confusion.** The discipline drifts from open-mode surfacing into closed-mode interrogation. **How to recognize:** the explorer starts pursuing answers to specific questions that emerged during scanning rather than mapping the territory; OR downstream sense-making finds redundant anchor work because /explore already extracted relational meaning. **How to prevent:** open-mode commitment is declared at Step 0 and held throughout the invocation; mid-invocation questions worth pursuing become frontier-output handoffs to closed-mode disciplines (/comprehend), not internal pursuits.

### Relevance reframe (proposed Components-section edit)

Iter-1's relevance-as-annotation language is removed. Relevance becomes a **signal type** that biases scanning attention. In the Signal Detection component:

> **Relevance** — among the 5 signal types (density, novelty, relevance, tension, absence), *relevance* is the purpose-biased attention bias. The inquiry's stated purpose (from `_branch.md`) defines what counts as relevant; the explorer's attention preferentially probes items that score high on relevance to the purpose. Relevance is NOT a post-scan tag; it shapes WHAT GETS SURFACED and at what depth during the scan-signal-probe cycle.

Annotation layer reduces to: existence (must), confidence (must), adjacency (optional, low-commitment co-location), confirmed-absent (must — productive output).

---

## Frontier (for /td-critique)

1. *Stress-test the assembly.* Does the SK-A base + SK-VERB-LED + SK-COMPARATOR + SK-SCENARIOS combination honor the user's "from scratch reunderstanding" framing? Or is it still too close to iter-1 to count as a "reunderstanding"?
2. *Test the SUPERSEDES vs REFINES question.* Does iter-2's finding supersede `finding_iter1.md`, or refine it? The skeleton-mapping evidence (decomposition.md) shows iter-1's 5-section structure preserved; that argues REFINES. But the cognitive grounding has changed substantively (relevance is now a scan-driver, mode confusion is a new failure mode, surfaced-item replaces existence-claim user-facing); that argues SUPERSEDES.
3. *Test the verb-meaning phrasing.* Is the proposed Verb Meaning section's phrasing accurate to the user's "mapping relevant content together with relevance understanding"? Or does it drift?
4. *Test the relevance-reframe operational impact.* If relevance moves from annotation to scan-driver, does the discipline still produce the iter-1 output's "relevance-tagged items" section? Or is that section now obsolete?
5. *Test the deferred candidates' revival triggers.* Are the revival triggers for SK-MODE-DECLARED and SK-D coherent (specific enough to be observable)?

---

## Telemetry

- **Generators applied:** 4 / 4 (Combination, Absence Recognition, Domain Transfer, Extrapolation)
- **Framers applied:** 3 / 3 (Lens Shifting, Constraint Manipulation, Inversion)
- **Mechanism coverage:** 7 / 7 (full)
- **Variations per mechanism:** 3 (generic / focused / contrarian)
- **Candidates generated:** 10 (SK-A, SK-B, SK-AB, SK-VERB-LED, SK-COMPARATOR, SK-SCENARIOS, SK-D, SK-MODE-DECLARED, SK-VS, SK-E)
- **Convergence:** YES — 3+ mechanisms converge on SK-A + the three SK-VERB-LED / SK-COMPARATOR / SK-SCENARIOS additions
- **Survivors tested:** 10 / 10
- **Dispositions:** 4 ACTIONABLE (SK-A + 3 additions), 2 DEFERRED-with-revival (SK-MODE-DECLARED, SK-D), 1 RESEARCH FRONTIER (SK-B), 1 KILL (SK-E), 2 REFINED-and-folded (SK-AB, SK-VS)
- **Assembly check:** YES — "iter-1 structure + three new leading sections" assembly survives all 5 tests
- **Axis coverage check:** YES — 6 axes identified; 2 minor gaps noted (failure-mode-only declaration, separate-drift-section) but mitigated by existing placements
- **Failure modes observed:** none

## Self-Assessment

**Overall: PROCEED**

The skeleton-expression candidates have a clear default (SK-A as base + 3 additions). Five candidates are DEFERRED or RESEARCH FRONTIER with explicit revival triggers. One candidate (SK-E) was killed for user-fit. Survival-bias re-check applied to SK-B and SK-D kills. The recommended assembly (SK-A + SK-VERB-LED + SK-COMPARATOR + SK-SCENARIOS) is structurally a moderate-scope edit to the existing two-file pair and honors the user's "redefine like we did with innovation" framing.

Critique should now decide SUPERSEDES vs REFINES for the iter-1 finding, stress-test the assembly, and validate the proposed content recommendations.
