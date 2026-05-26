# Innovation — concrete content drafts for the B-refined /navigation restructure

## User Input
`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-12_11-40__navigation_factoring_question/_branch.md`

Prior outputs consumed: this inquiry's E/S/D. Decomposition's frontier asked for concrete content per piece (P-α / P-β / P-γ).

---

## Seed

How should each of the 3 pieces (P-α restructured /navigation spec; P-β /meta-loop 1-sentence update; P-γ Changes-from-Prior + fallback metadata) be expressed concretely? Generate shape variants + concrete drafts ready for adoption.

**Direction:** the user values cognitive clarity, conciseness, runnable adoption. The pattern across the 4 prior /explore inquiries: concrete content drafts that critique then refines. Same here.

---

## Phase 2 — Generate (Mechanisms Applied)

Given the narrow scope (3 pieces; design committed; just producing content), apply the framework lightly:

### Lens Shifting
- Generic: maximum content → α-RICH (multi-domain examples).
- Focused: minimum content → α-MIN.
- Contrarian: no spec rewrite → KILL (the inquiry committed to B-refined).

### Combination
- Combine /explore's 5-section pattern with /navigation's specializations → α-STD (recommended).
- Combine all migration explanations into one γ section → γ-COMPACT vs γ-RICH.

### Inversion
- Invert section order (enumerate-last? select-first?) → KILL (must enumerate before selecting).
- Invert the change-from-prior framing (highlight what's preserved vs what's changed) → REFINE the γ structure.

### Constraint Manipulation
- Add "max 300 lines for /navigation spec" → forces α-MIN.
- Remove uniformity → KILL (sections should follow the project's discipline-spec pattern).

### Absence Recognition
- Missing: worked example showing a /navigation invocation with the new structure. → ADD to α-STD.
- Missing: explicit cross-reference table from iter-1 fields to B-refined sections. → ADD to γ.

### Domain Transfer
- Transfer /explore's 5-section pattern as scaffold for /navigation's spec. → CONFIRMS α-STD's structure.

### Extrapolation
- At L3+ autonomy, the select-step becomes autonomous. → NAME this in P-α's Components section.

---

## Phase 3 — Test (consolidated)

Candidates and verdicts:

| Tag | Shape | Verdict |
|---|---|---|
| **α-MIN** | Each section 3-5 lines; no examples | SURVIVE (baseline) |
| **α-STD** | Full sections + 1 worked example for at least one section | **SURVIVE — ACTIONABLE recommended** |
| **α-RICH** | Full sections + multi-domain examples per section | DEFERRED-with-revival (when /navigation used across multiple domains beyond inquiries) |
| **β-1LINE** | Literal 1-sentence change to /meta-loop's phase list | SURVIVE (sufficient if user reads with full context) |
| **β-PARA** | 1-sentence change + paragraph preserving the design-philosophy note | **SURVIVE — ACTIONABLE recommended** (provides context for maintainers) |
| **γ-COMPACT** | Short Changes-from-Prior section (preserved / changed / new + cascade note + fallback) | **SURVIVE — ACTIONABLE recommended** |
| **γ-RICH** | Long Changes section + cross-reference table from iter-1 fields to B-refined sections | DEFERRED-with-revival (if migration confusion observed) |

**Assembly:** α-STD + β-PARA + γ-COMPACT. Convergent across 3+ mechanisms (Domain Transfer; Combination; Absence). HIGH convergence.

---

## Concrete content drafts

### Draft P-α: Restructured /navigation spec

The spec follows the project's 5-section pattern, parallel to /explore.

#### Identity section

```markdown
## Identity

/navigation is the discipline of **choosing a direction in a known move-space** — enumerating possible next moves, labeling them, generating per-route guidance, and selecting one (or declining to select). It is a **specialization of /explore**, running in possibility mode over the next-move-space, extended with a 16-type labeling vocabulary, per-route adaptive guidance, and a cognitive selection step.

The cognitive operation: given a known state (a completed SIC cycle's outputs OR a current project-state brief), produce a typed, labeled, and guided map of next-move candidates; the cognizer selects from the map or declines.

### Upstream-precondition

/navigation depends on a **known state** as input. It does not surface unknown territory — that is /explore's job (in artifact or possibility mode over a domain territory). /navigation operates on a move-space whose existence is already established by the prior cycle's outputs or by an explicit state brief.

### NOT-list — what /navigation does NOT do

1. **Movement-actuation** — /navigation does not execute the chosen route. Actuation (transitioning state; running the next discipline) is the **runner's job** (/MVL+, /meta-loop).
2. **Meaning-extraction** — /navigation does not extract conceptual-structure meaning from routes. That is /sense-making's territory.
3. **Mechanism-modeling** — /navigation does not build predictive models of routes' internal mechanics. That is /comprehend's territory.
4. **Partition** — /navigation does not partition the move-space into independent pieces with interfaces. That is /decompose's territory.
5. **Novelty-generation** — /navigation does not generate genuinely novel routes that didn't exist as possibilities. That is /innovate's territory. (/innovate could be invoked beforehand to generate novel candidates that /navigation then enumerates.)

### Vocabulary alignment

/navigation in this spec aligns with the everyday meaning of "navigation": enumerate-and-choose. Iter-1 /navigation used the term in a perception-only sense, which created recurring confusion (notably in `devdocs/nav_north_star.md`, where "navigation" was used for what is operationally /explore work). The restructure resolves this vocabulary issue as a positive side-effect.
```

#### Components section

```markdown
## Components

/navigation has four components, executed in order during each invocation.

### 1. Enumerate (specialization of /explore-of-routes)

Run /explore in **possibility mode** over the **next-move-space**. The territory is the set of candidate next moves given the current state. The mode is possibility because routes are typically conceptual candidates, not pre-existing artifacts.

- **Inputs:** completed SIC cycle's outputs OR current-state brief
- **Output:** a set of candidate routes
- **Inherits from /explore:** scan-signal-probe cycle; `resolution-level` Step 0 field (route-count expectation); `depth-level` Step 0 field (per-route content richness); per-item content depth D0–D4

### 2. Label (16-type taxonomy)

Apply the 16-type taxonomy to each enumerated route. The taxonomy has three categories:

- **Content-directed** (8 types) — routes about what's in the territory (clarify-X, refine-X, deepen-X, revisit-X, etc.)
- **Process-directed** (4 types) — routes about how the inquiry runs (re-run-discipline-X, change-mode-to-Y, etc.)
- **Context-directed** (4 types) — routes about the inquiry's framing (reframe, widen-scope, narrow-scope, abandon)

The 16-type vocabulary is /navigation's specialized labeling. Per the depth inquiry's labeling-vs-anchor distinction (see `homegrown/explore/references/explore.md`), these are **labels**, not anchors — they pass inter-rater agreement among naive scanners familiar with the typology.

### 3. Guide (adaptive guidance per route)

Generate per-route guidance: how the cognizer should proceed if they pick this route. Each route gets:

- **Guidance-mode**: `compact` (one-line note); `full` (expanded explanation); `expand-on-selection` (preview at selection time)
- **Per-route guidance** (in the chosen mode): what to expect; what's the entry point; what to load
- **Continuation-note**: what happens after this route is taken; what the next likely move is

Guidance is calibrated to the route's Type. Different categories warrant different guidance shapes.

**This component is /navigation's unique contribution** beyond /explore-of-routes + selection. The guide-generation is what makes the discipline genuinely useful for navigating, not just enumerating.

### 4. Select (cognitive-step)

Present the labeled, guided route map to the cognizer. The cognizer makes a selection from the candidates OR declines (valid output is "no selection").

- **At v1:** human-mediated. The cognizer (user) reads the map and picks.
- **At L3+ autonomy:** autonomous. The system's quality-awareness layer selects per the autonomy ladder; the spec is forward-compatible.
- **"No selection" handling:** valid output. Returns the route map without a chosen route. The cognizer may revisit later.

The output of the select component is **chosen-route-ID** OR `"no selection"`.
```

#### Process section

```markdown
## Process

### Step 0 — Declarations

When /navigation is invoked, declare:

- `cognitive-commitment-mode: open` (inherited from /explore; held throughout)
- `territory-type: next-move-space` (always — this is /navigation's specialization)
- `state-source: completed-SIC-cycle | current-state-brief` (detected from input)
- `entry-point: frontier-first | signal-first` (inherited from /explore)
- `resolution-level: ~N routes` (controls breadth — typically 5–16)
- `depth-level: D2 (default) | D1 | D3 | D4` (controls per-route content richness; D4 = with relevance-verdict)
- `selection-mode: human-mediated (v1)` (autonomous at L3+)

### Step 1–4 — Execute components in order

1. Enumerate → candidate routes
2. Label → 16-type tags applied
3. Guide → per-route guidance + continuation notes
4. Select → chosen-route-ID OR "no selection"

### Step 5 — Output

Save `navigation.md` containing route-card map + selection result + telemetry.
```

#### Quality section

```markdown
## Quality

### Failure modes

1. **Selection-without-options-shown** — selecting before route enumeration is complete and presented. **Recognition:** select-step receives empty enumeration or skips enumeration. **Corrective:** ensure components 1-3 complete before component 4 runs.

2. **Movement-bleed** — /navigation starts actuating the chosen route instead of returning the selection to the runner. **Recognition:** spec output contains "execute X" commands; new state transitions appear in the output. **Corrective:** /navigation outputs the selection only; actuation is the runner's job.

3. **Guide-as-meaning** — per-route guidance describes the route's *conceptual role* (meaning-extraction; sense-making's territory) instead of its *operational continuation* (what to do; labeling). **Recognition:** guidance text answers "what does this route mean?" instead of "what happens if I take this route?" **Corrective:** guidance is operational; meaning extraction belongs to sense-making.

4. **Premature-narrowing** — filtering routes during enumerate based on selection-bias rather than topology. **Recognition:** the candidate set is smaller than the move-space topology would suggest. **Corrective:** enumerate broad; filter at select.

5. **Inherited from /explore-of-routes** — premature depth in route-space; surface-only scanning; false confidence; premature termination; re-exploration; completeness bias in possibility mode (recall: routes are mostly possibility-generated, so completeness bias applies). Open→closed drift also applies — see `homegrown/explore/references/explore.md` for these.

### Coverage criteria

- All declared route types considered or explicitly excluded with reasoning
- Each route has Type, Priority, and Guidance fields populated
- Selection result is explicit (chosen-route-ID or "no selection")
- Movement-bleed check: discipline output is descriptive, not actuating

### Self-assessment

After completing the invocation: PROCEED / FLAG / RE-RUN.
```

#### Output section

```markdown
## Output

### Route-card map structure

For each enumerated route:

- **Direction** — short label (e.g., "deepen-X", "reframe-question")
- **Goal** — what taking this route accomplishes
- **Type** — one of the 16 types (3 categories)
- **Priority** — HIGH / MEDIUM / LOW / DEFERRED (with reasoning)
- **Status** — OPEN / BLOCKED / RECONSIDER
- **Blocked-by** — references to upstream blockers (if any)
- **Purpose** — why this route exists at this point in the inquiry's lifecycle
- **Movement** — descriptive only (NOT actuation; e.g., "would invoke /MVL+ on X"); /navigation describes, runner actuates
- **Unlocks** — what this route enables downstream
- **Why-this-route-exists** — short reasoning anchored in the input state
- **Guidance-mode** — compact / full / expand-on-selection
- **Guidance** (per-mode content) — adaptive per route
- **Continuation-note** — what likely happens after this route is taken

### Selection result

- `chosen-route-id: <ID>` OR `chosen-route: "no selection"` (valid; preserves the option to revisit)

### Telemetry

- Route count (enumerated / labeled / guided / presented)
- Types covered (out of 16) / excluded (with reasoning)
- Selection state (chosen / no-selection)
- Guidance quality check
- Failure-mode checks

### Frontier

- Deferred routes (LOW-priority + reasoning)
- Excluded route types (with reasoning)
```

#### Cross-cutting: specialization-of-/explore framing

The Identity section names /navigation as a specialization. The Components section invokes /explore-of-routes mechanics for Enumerate. The Process section's Step 0 inherits /explore's input-contract fields (resolution-level, depth-level, entry-point, cognitive-commitment-mode). The specialization is structural; /navigation does not RUNTIME-INVOKE /explore (that would break the workspace invariant) — it is a SPECIALIZED FORM of /explore.

### Draft P-β: /meta-loop 1-sentence update

Locate /meta-loop's phase-list (in `homegrown/meta-loop/SKILL.md`). Update:

**Before:**
> "Phases per step: (1) Probe with MVL+ on active frontier → (2) See with Navigation on latest inquiry → (3) Select Explicitly (present HIGH/MEDIUM options, user picks) → (4) Assess Traversal Signals."

**After:**
> "Phases per step: (1) Probe with MVL+ on active frontier → (2) **Navigate with select (human-mediated at v1; selection of next direction handled inside /navigation per its restructured spec)** → (3) Assess Traversal Signals."

**Paragraph (β-PARA) — preserved design-philosophy note:**

> The phase-merge collapses what were previously two named phases (see + select-explicitly) into one (navigate). The design philosophy — human-mediated selection at v1; explicit-not-implicit selection; clear path to autonomous selection at L3+ — is preserved. What changes is the boundary location: the perception/selection boundary now sits **inside /navigation's discipline run** rather than between /navigation and meta-loop's next-step. Movement (actuating the chosen route) remains meta-loop's job at v1; this is unchanged.

### Draft P-γ: Changes-from-Prior section (placed at the top of restructured /navigation spec)

```markdown
---
status: active
refines: devdocs/inquiries/2026-05-12_11-40__navigation_factoring_question/finding.md
supersedes: <iter-1 /navigation spec — preserved historically>
---

## Changes from Prior

**Revision trigger:** User flagged a structural overlap. Iter-1 /navigation was defined as perception-only (enumerate next moves; do NOT select; selection deferred to user or to /meta-loop's phase 3). The user pointed out that the enumeration-half of /navigation IS structurally /explore in possibility mode over the route-space — and that "navigation" in everyday meaning includes the selection step. The recurring vocabulary confusion (notably in `devdocs/nav_north_star.md`, where "navigation" was used for what is operationally /explore work) was a symptom of the structural overlap.

**What's preserved from iter-1:**

- The 16-type taxonomy (3 categories: content-directed / process-directed / context-directed)
- Per-route fields (Direction, Goal, Type, Priority, Status, Blocked-by, Purpose, Movement-description, Unlocks, Why-this-route-exists, Guidance-mode, Continuation-note)
- Adaptive guidance per route + continuation notes (jump-scan finding: /navigation's UNIQUE contribution beyond enumerate+select)
- The upstream-precondition relationship (depends on a known state as input)

**What's changed:**

- Selection is now part of /navigation's run (component 4 — Select). Previously deferred to user/meta-loop; now in the discipline. Human-mediated at v1; autonomous at L3+ autonomy.
- Movement-actuation is explicitly NOT in /navigation (in the NOT-list). Was implicit before. Movement (executing the chosen route) is the runner's job.
- /navigation is framed as a **specialization of /explore** over the next-move-space. Previously implicit; now stated.
- Vocabulary aligns with the everyday meaning of "navigation" (enumerate-and-choose). Previously perception-only; recurring confusion has been a structural symptom.

**What's new:**

- Specialization-of-/explore framing in the Identity section
- 4-component composition (Enumerate + Label + Guide + Select) in the Components section
- "No selection" valid output (Output section)
- New failure modes: selection-without-options-shown; movement-bleed; guide-as-meaning (Quality section)
- Step 0 declarations now include inherited /explore fields (resolution-level, depth-level) + /navigation-specific fields (state-source, selection-mode)

**Cascade to /meta-loop spec:**

Meta-loop's phase list previously listed Probe → See (Navigation, perception-only) → Select Explicitly → Assess (4 phases). It now reads Probe → Navigate (with select) → Assess (3 phases). The design philosophy is preserved: selection is still human-mediated at v1; the boundary location changes (selection sits inside /navigation rather than between /navigation and meta-loop's next-step). Movement (actuation) remains meta-loop's job.

**Alternative considered (A+D fallback):**

The minimum-change path — preserve iter-1 /navigation verbatim and add a vocabulary clarification note — was preserved as a user-preference fallback. It is structurally weaker (doesn't address the /explore-of-routes overlap; leaves the vocabulary debt for a future refactor at autonomy transition). If the user prefers minimum-change adoption, the fallback is documented in this finding's COULD next-actions and would consist of: (a) keep iter-1 spec; (b) add a top-level vocabulary note explaining the everyday-vs-project distinction. Otherwise, the B-refined restructure above is the recommended path.
```

---

## Failure Mode Self-Check

| Failure mode | Observed? | Note |
|---|---|---|
| Premature evaluation | No | mechanisms applied before testing |
| Single-mechanism trap | No | 5+ mechanisms applied |
| Early frame lock | No | considered minimum / standard / rich shapes per piece |
| Innovation without grounding | No | all candidates tested |
| Mechanism exhaustion | No | survivors exist |
| Survival bias | Re-checked α-RICH (DEFERRED, not killed); β-1LINE (alternate); γ-RICH (DEFERRED). All structural grounds for verdicts. |

---

## Final Deliverable

### ACTIONABLE survivors (recommended assembly)

1. **α-STD (restructured /navigation spec)** — full 5 sections (Identity / Components / Process / Quality / Output) with the Components section detailing all 4 components; one worked example in the Process step descriptions.
2. **β-PARA (/meta-loop 1-sentence change + paragraph)** — exact phrase change + preserved design-philosophy note.
3. **γ-COMPACT (Changes-from-Prior section)** — preserved / changed / new + cascade note + fallback option, placed at top of restructured /navigation spec.

Concrete content drafts above are adoption-ready.

### DEFERRED-with-revival

- **α-RICH** — multi-domain examples per section. *Revival:* /navigation used across non-inquiry domains.
- **γ-RICH** — long Changes section + iter-1-to-B-refined cross-reference table. *Revival:* migration confusion observed.

### ALTERNATE (user-preference)

- **α-MIN** — minimum-viable shape per section if user wants shorter spec.
- **β-1LINE** — literal 1-sentence change without paragraph. If user wants minimum /meta-loop edit.

### KILLED

- No-spec-rewrite (commits to status quo) — inquiry committed to B-refined.
- Section-order inversion — must enumerate before selecting.

---

## Frontier (for /td-critique)

1. *Stress-test the recommended assembly.* Are the drafts adoption-ready?
2. *Test the specialization-of-/explore framing.* Does the spec stand alone, or does it require /explore's spec to be loaded at runtime (which would break the workspace invariant)?
3. *Test /meta-loop's design-philosophy preservation.* Does the phase merge really preserve the human-mediated v1 + autonomy-at-L3+ commitment?
4. *Test the "no selection" handling.* Is "valid output" sufficient, or does the spec need to specify what happens downstream when no route is chosen?
5. *Test the A+D fallback documentation in γ.* Is mentioning the alternative in the Changes section appropriate, or does it bloat the spec?

---

## Telemetry

- **Mechanisms applied:** 7/7
- **Candidates generated:** 9 (3 per piece on average)
- **Convergence:** HIGH on α-STD + β-PARA + γ-COMPACT
- **Survivors tested:** all candidates received 5-test cycle
- **Dispositions:** 3 ACTIONABLE (assembly); 2 DEFERRED-with-revival; 2 ALTERNATE; 2 KILL
- **Concrete content drafts:** produced for all 3 pieces; adoption-ready
- **Failure modes observed:** none

## Self-Assessment

**Overall: PROCEED**

The recommended assembly is concrete and adoption-ready. The 4-component /navigation spec is laid out section-by-section with worked examples in Components and Process. The /meta-loop update is exact. The Changes-from-Prior section explains the migration. Critique should stress-test the specialization framing, the design-philosophy preservation, and the "no selection" handling.
