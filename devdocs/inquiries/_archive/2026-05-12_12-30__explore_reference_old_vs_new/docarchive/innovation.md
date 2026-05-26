# Innovation — concrete content drafts for the Option C adoption package

## User Input
`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-12_12-30__explore_reference_old_vs_new/_branch.md`

Prior outputs: this inquiry's E/S/D. The 5 pieces (P-α / P-β / P-γ / P-δ / P-ε) need concrete content drafts ready for user adoption.

---

## Seed

How should each of the 5 pieces be expressed concretely so the user can adopt with copy-paste-and-tweak?

**Direction:** the user values cognitive clarity, conciseness, runnable adoption. The pattern across prior inquiries: concrete drafts that critique then refines. Same here. Drafts should match new file's vocabulary (`/explore`, verb-meaning, depth-level, etc.) while adapting old file's content.

---

## Phase 2 — Generate (Mechanisms Applied Lightly)

Given narrow scope (content migration from old to new with vocabulary adaptation), mechanisms apply lightly:

### 1. Lens Shifting
- Generic: maximum-content per piece (RICH variants with extended examples)
- Focused: minimum-content per piece (MIN variants with bare bones)
- Contrarian: skip refinements entirely (Option B fallback)

### 2. Combination
- Combine old's content with new's vocabulary (`/explore` rather than "Structural Exploration"; verb-meaning + depth-level references)
- Combine all 3 refinements into one bundled edit vs keep separate

### 3. Inversion
- Place G1 at TOP of file instead of bottom? → KILL (project convention is terminal placement)

### 4. Constraint Manipulation
- Max-line budget for each refinement (forces MIN variants)

### 5. Absence Recognition
- Anything missing from the 5-piece decomposition? Possibly: a smoke-test that the refinements integrate cleanly. → Add a verification check to P-ε's documentation.

### 6. Domain Transfer
- Pattern from sense-making/decompose reference files: where do they put SOLID-INSTRUCTIONS blocks? Confirm terminal-placement convention.

### 7. Extrapolation
- If the project grows more discipline reference files, this migration pattern (preserve historical; add accurate; update SKILL.md) becomes a precedent. The drafts should be exemplary so future migrations can follow.

---

## Phase 3 — Test (consolidated)

Per piece, MIN / STD / RICH variants:

| Piece | Variant | Verdict |
|---|---|---|
| **P-α** (terminal block) | α-MIN (bare 4 steps) | SURVIVE (acceptable fallback if user wants minimum) |
| **P-α** | **α-STD** (4 steps + Step 0 references + section cross-refs) | **SURVIVE — ACTIONABLE** |
| **P-α** | α-RICH (+ per-step examples) | DEFERRED — overkill for runtime imperative |
| **P-β** (comparator paragraph) | β-MIN (4 short bullets) | SURVIVE (alternate) |
| **P-β** | **β-STD** (intro + 4 framed contrasts + §1.3 cross-link) | **SURVIVE — ACTIONABLE** |
| **P-β** | β-RICH (+ worked example per contrast) | DEFERRED — pedagogically richer; not load-bearing |
| **P-γ** (per-mode examples) | γ-MIN (just examples without explanation) | SURVIVE (alternate) |
| **P-γ** | **γ-STD** (per-mode examples + scan/probe behavior + "key difference") | **SURVIVE — ACTIONABLE** |
| **P-γ** | γ-RICH (+ cross-domain examples) | DEFERRED |
| **P-δ** (SKILL.md cascade) | exact 1-line edit | **SURVIVE — ACTIONABLE** (no variants needed) |
| **P-ε** (finding metadata) | MUST/RECOMMENDED/COULD/DEFERRED/REJECTED/PRESERVATION sections | **SURVIVE — ACTIONABLE** |

**Recommended assembly:** α-STD + β-STD + γ-STD + P-δ (exact edit) + P-ε (full metadata).

---

## Concrete content drafts

### Draft P-α: Terminal SOLID-INSTRUCTIONS block (MUST refinement to add at end of `explore_accurate.md`, after §8 Summary)

````markdown
---- NOW SOLID INSTRUCTIONS START ----

## Execute the Exploration Process

### 1. State Mode and Entry Point

At the start of the invocation, declare the Step 0 fields (per §3.1):

- `cognitive-commitment-mode: open` (always; held throughout the invocation)
- `territory-type-mode: artifact | possibility` (detected from input)
- `entry-point: frontier-first | signal-first` (default frontier-first; signal-first if a specific hunch or question exists)
- `expected: ~N items` or `~N items per parent` (resolution-level; controls breadth)
- `depth-level: D1 | D2 (default) | D3 | D4` (controls per-item content richness)

If the inquiry's `_branch.md` does not pre-specify the territory boundary, fire the **boundary-discovery sub-phase** (per §3.3) before normal scanning. The discovered boundary becomes input to the subsequent scan-signal-probe cycle.

### 2. Run Exploration Cycles

Execute the 7-step canonical cycle (per §3.4). For each cycle, produce:

- What was scanned and what was surfaced (with annotation layers per §2.2)
- What signals were detected (per the 5 signal types: density, novelty, relevance, tension, absence)
- Resolution decision (zoom in or out) and why
- What was probed, if zooming in (with type-aware probing per §3.8 when load-bearing quantifiable claims appear)
- Frontier state after this cycle (advancing / stable / closed)
- Confidence-map update (with the 5 confidence levels: confirmed / scanned / inferred / unknown / confirmed-absent)

Maintain the declared `depth-level` uniformly across all surfaced items in the cycle (per §2.3). Each surfaced item must reach at least D2 (identifier + surface form + functional one-line) unless D1 was explicitly declared at coarse resolution. D0 (bare identifier) is NOT acceptable as final output. D5+ (conceptual-role gloss; relational meaning claims) is excluded — that is sense-making's territory; see the labeling-vs-meaning boundary heuristic in §4.4.

### 3. Assess Convergence

After each cycle, check the three convergence criteria (per §4.2):

- **Frontier stability** — new scans stop pushing the frontier outward; the territory's rough boundaries are known at the current resolution
- **Declining discovery rate** — each new scan produces fewer new structural features; diminishing returns signal that the major structure has been captured
- **Bounded gaps** — remaining unknowns are between explored areas (interpolatable from neighbors), not beyond them (uncharted voids with no surrounding context)

**Jump-scan rule.** Before declaring convergence (when all three criteria appear met), perform one deliberate scan in a completely different direction than previous scans. If the jump scan produces surprises, the frontier is not actually stable — return to step 1. If no surprises, convergence holds. Failing to perform a jump scan before declaring convergence is an instance of False Confidence (failure mode in §4.1).

If not converged, run another cycle (back to step 2). If converged, proceed to step 4.

### 4. Final Deliverable — The Structural Map

Present the complete /explore output as a markdown file (`exploration.md` by convention when invoked inside an inquiry) containing:

1. **Territory Overview** — what major regions exist; at what resolution they were explored; the Step 0 declarations recorded
2. **Inventory** — what was surfaced in each region, with each item's content at the declared depth-level (per §2.3 D0–D4 table); annotation layers (existence, confidence, optional relevance/adjacency/confirmed-absent) attached per §2.2
3. **Signal Log** — signals detected (which type), signals probed, signals deferred (with reasoning)
4. **Confidence Map** — each region tagged with one of the 5 confidence levels (confirmed / scanned / inferred / unknown / confirmed-absent); confirmed-absent regions appear EXPLICITLY (per §2.2; confirmed-absences are productive output, not gaps)
5. **Frontier State** — where the boundary between known and unknown stands at convergence (advancing / stable / closed)
6. **Gaps and Recommendations** — what remains unknown; what should be explored next if further exploration is warranted; frontier questions handed off to downstream disciplines (per §5.4 Frontier)

Also report the Telemetry section per §5.3 (base + staging-aware fields if applicable) and the self-assessment verdict (PROCEED / FLAG / RE-RUN per §4.5).

If the invocation is part of a staged execution (orchestrated by `/staged-explore` per §3.6), include the staging-aware telemetry fields (`items_surfaced_count`, optional `parent_pass_anchor`, optional `branching_factor`, `resolution_evidence`, `stage_index`).

If cross-invocation merging is required, the discipline's output follows the Merge Contract specified in §5.5 (sequential ID format `N1`, `N1.3`, `N1.3.2`; LLM-generated descriptive label per item; manual merging is supported in v1).
````

### Draft P-β: "Exploration is NOT" comparator paragraph (RECOMMENDED refinement to add in §1.1 of `explore_accurate.md`, after the verb-meaning paragraph)

```markdown
**Exploration is NOT (pedagogical contrast).** To ground what `/explore` IS, here is what it is NOT — four near-neighbor cognitive activities that share territory with exploration but commit the cognizer to different operations:

- **Sensemaking.** Sensemaking converts *ambiguity* → *stable understanding* through anchor extraction, perspective integration, and ambiguity collapse. Exploration converts *unknown* → *map of what exists*. Exploration discovers WHAT and WHERE; sensemaking discovers WHY and HOW. You explore first, then sense-make on what you found.

- **Innovation.** Innovation creates what doesn't exist (novel ideas via 7 mechanisms — see `homegrown/innovate/`). Exploration maps what does exist (artifact mode) or generates candidates for *completeness* (possibility mode). Innovation's success criterion = novelty; exploration's success criterion = completeness. /explore must include the boring obvious approach on the map because completeness matters; /innovate would skip it because it's not novel.

- **Research.** Research is closed-mode targeted interrogation — the cognizer has a defined question and seeks its answer. Exploration is open-mode surfacing — the cognizer accepts they don't know what they'll find. Research succeeds when the question is answered; exploration succeeds when the map is changed. In the project's runner taxonomy (§6.1), `/comprehend` is the closed-mode discipline-level analogue to research for named artifacts.

- **Browsing.** Browsing is undirected — the cognizer moves through territory without purpose or coverage commitment. Exploration is **purposive** (has a why, even when the destination is open; the inquiry's stated purpose biases attention via the relevance signal in §2.1) and **coverage-aware** (tracks the frontier; stops when surprises are unlikely per §4.2's convergence criteria, not when "it feels like enough").

This pedagogical contrast complements the operational NOT-list in §1.3 — which names the specific neighbor disciplines whose territory `/explore` does not cross. Where §1.3 is enforced through failure modes in §4.1, this section is for readers building the conceptual model of what /explore IS at the cognitive-operation level.
```

### Draft P-γ: Per-mode worked examples (RECOMMENDED refinement to expand §3.2 in `explore_accurate.md`)

Insert the following AFTER the existing §3.2 two-mode brief definitions and the Completeness-before-novelty refinement note, as expanded subsections:

```markdown
#### Artifact mode — worked examples

The territory has concrete objects that exist independently of the explorer. You find them.

**Examples of artifact territories:** codebases (files, functions, modules, patterns); existing literature (papers, books, articles); competitor products; market data; historical records; document collections.

- **How scan works:** read, list, index. The objects are there — you traverse and catalog them at the declared `depth-level`. At D2 (default minimum), each item gets identifier + surface form + functional one-line. Example for a codebase: `src/auth.py — handles user authentication; ~200 lines, exports authenticate()`.
- **How probe works:** read deeper into a specific artifact. Examine its internals; trace its connections. At D3, the probe adds structural adjacency (called-by, imports). Probe stays at the existence-claim level — does NOT build a mechanism model (that crosses into /comprehend's territory; see §1.3 NOT-list).

#### Possibility mode — worked examples

The territory is conceptual. The objects don't exist yet — they must be generated to be placed on the map. You enumerate what COULD exist.

**Examples of possibility territories:** solution spaces ("what approaches could solve this?"); design options ("what architectures are possible?"); strategic directions ("what paths could we take?"); research frontiers ("what questions could be asked?"); option spaces in any decision context.

- **How scan works:** generate candidates at surface level using diverse generation techniques. Each candidate is a 1–2 sentence description, not a developed idea. The goal is a complete landscape of directions, including obvious AND non-obvious ones (per Completeness-before-novelty above).
- **How probe works:** take a candidate from the scan and examine it more closely. What would this approach look like in practice? What does it enable? What does it block? Still mapping, not developing — probe produces a more detailed description, not a solution.

#### Key difference from /innovate

Possibility-mode exploration generates candidates for **completeness**. /innovate generates ideas for **novelty**. /explore must include the boring obvious approach on the map because completeness matters; /innovate would skip the obvious because it's not novel. Different success criteria, different outputs.

**Operational consequence:** if your possibility-mode scan is producing only "creative" or "non-obvious" candidates and missing the standard/obvious approaches, the failure mode is **Completeness Bias in Possibility Mode** (per §4.1, failure mode #6). Re-scan for standard candidates before novel ones.
```

### Draft P-δ: SKILL.md Step 0 cascade (1-line edit in `homegrown/explore/SKILL.md`)

**Locate** in `homegrown/explore/SKILL.md`:

```markdown
**Before reading anything else in this file, read `references/explore.md` in full.**
```

**Change to:**

```markdown
**Before reading anything else in this file, read `references/explore_accurate.md` in full.**
```

That is the entire change for P-δ. No other SKILL.md edits.

**Conditionality:** apply this edit only when at least one of P-α / P-β / P-γ has been applied (otherwise the SKILL.md continues pointing at the old `explore.md`).

### Draft P-ε: Finding-level metadata (Next Actions section + preservation note)

Content for the finding's Next Actions section when CONCLUDE runs:

```markdown
### MUST (if Option C adopted)

- **What:** Restore the terminal "Execute the Exploration Process" SOLID-INSTRUCTIONS block in `homegrown/explore/references/explore_accurate.md` (append after §8 Summary; content draft in this inquiry's `innovation.md` under "Draft P-α").
  - **Who:** user (or maintainer authorized to edit `homegrown/`).
  - **Gate:** if proceeding with Option C (recommended path).
  - **Why:** restores project-convention pattern (terminal SOLID-INSTRUCTIONS block visible in other discipline references); reduces LLM-runtime cognitive load by placing the imperative at the end of the reference file; bounded ~60-line addition.

- **What:** Update `homegrown/explore/SKILL.md` Step 0 path from `references/explore.md` to `references/explore_accurate.md` (1-line edit; see "Draft P-δ").
  - **Who:** user or maintainer.
  - **Gate:** after at least one of G1/G2/G3 has been applied (so the new file is the meaningfully-different canonical).
  - **Why:** points the runtime loader at the refined canonical reference.

### COULD (if Option C adopted)

- **What:** Apply RECOMMENDED refinement G2 — add "Exploration is NOT" pedagogical comparator paragraph in §1.1 of `explore_accurate.md` (content draft under "Draft P-β").
  - **Who:** user or maintainer.
  - **Gate:** none beyond Option C choice.
  - **Why:** restores pedagogical contrast (vs research, sensemaking, innovation, browsing) that helped readers grasp what /explore IS by what it isn't; the "vs research" comparator was load-bearing in iter-2 of the original /explore inquiry; ~15-line addition.

- **What:** Apply RECOMMENDED refinement G3 — expand §3.2 in `explore_accurate.md` with per-mode worked examples (content draft under "Draft P-γ").
  - **Who:** user or maintainer.
  - **Gate:** none beyond Option C choice.
  - **Why:** restores concrete artifact + possibility mode examples; helps LLMs ground scan/probe behavior in concrete cases; ~25-line addition.

- **What:** Option B fallback — adopt `explore_accurate.md` as-is without G1/G2/G3 refinements.
  - **Who:** user (chooses Option B over Option C).
  - **Gate:** user prefers minimum-change adoption over project-convention alignment.
  - **Why:** the new file's operational content is sufficient for runtime correctness even without the refinements. **Risk:** absence of terminal SOLID-INSTRUCTIONS block (G1 gap) carries LLM-runtime-variance risk under load; project-convention divergence may slow human-reader onboarding.

### DEFERRED

- **What:** Expand the component table in §2.1 of `explore_accurate.md` into per-component subsections (matching old file's pedagogical depth).
  - **Gate:** maintainers report the compressed table loses too much rationale OR new contributors struggle to onboard from the table format.
  - **Why (if revived):** stylistic refinement; refinement notes are already preserved in §3 (Process) so compression is acceptable for now.

- **What:** Compress the loading-note source-attribution at the top of `explore_accurate.md` (currently references 4 findings + universal anatomy).
  - **Gate:** maintainers don't use the source-attribution; loading-note overhead becomes burdensome.
  - **Why (if revived):** smaller load each invocation; provenance can move to a separate Changelog if needed.

### REJECTED (with reasoning)

- **Option A — adopt old `homegrown/explore/references/explore.md` as canonical.** Structurally rejected because it loses 11 end-goal-required additions from the 4 /explore-thread findings (verb-meaning grounding; per-item content depth D0–D4; Step 0 declarations including resolution-level and depth-level; 5 new failure modes; boundary-discovery sub-phase; idempotency commitment; staged execution + Merge Contract; labeling-vs-anchor terminology; /navigation specialization clarity; runner taxonomy; calibration-state items). The project has already committed to these via published findings; adopting old unwinds that work.

- **Hybrid — combine sections from both files into a third canonical file.** Rejected on maintenance grounds — two-source maintenance burden and reader confusion. The new file plus G1/G2/G3 refinements achieves the same outcome with single-source clarity.

### PRESERVATION

- Old `homegrown/explore/references/explore.md` remains on disk as historical reference. **Do not delete; do not modify.** Maintainers tracking the conversation chain (the four /explore-thread inquiries and this old-vs-new inquiry) can read it as the pre-refactor baseline. The file's existence does NOT affect runtime behavior once SKILL.md's Step 0 path is updated (per P-δ).
```

---

## Phase 3.5 — Assembly check

The recommended assembly: α-STD + β-STD + γ-STD + P-δ (exact edit) + P-ε (full metadata).

**Emergent observation:** the 5 pieces together form a complete adoption package that is:
- **Bounded** — total edit ~100 lines of additions to `explore_accurate.md` + 1-line SKILL.md change.
- **Modular** — G1 alone is sufficient if user wants minimum-change-plus-must; adding G2 and G3 is incremental.
- **Reversible** — old `explore.md` is preserved; SKILL.md path can be reverted by changing 1 line back.
- **Documented** — finding's Next Actions captures all options with explicit MUST/RECOMMENDED/COULD/DEFERRED/REJECTED tiering.

The adoption package is structurally clean.

---

## Failure Mode Self-Check

| Failure mode | Observed? | Note |
|---|---|---|
| Premature evaluation | No | Mechanisms applied before generating drafts |
| Single-mechanism trap | No | Multiple mechanisms drove variant generation |
| Early frame lock | No | Considered MIN / STD / RICH per piece |
| Innovation without grounding | No | All drafts grounded in source content from old file with new-vocabulary adaptation |
| Mechanism exhaustion | No | Survivors exist |
| Survival bias | Re-checked: α-RICH and β-RICH deferred (not killed) — could still be useful if pedagogical maximum is wanted. Verified DEFERRED disposition is on cost-vs-value grounds, not discomfort. |

---

## Final Deliverable

### ACTIONABLE drafts (recommended assembly)

1. **α-STD** — full terminal SOLID-INSTRUCTIONS block (4 steps with section cross-references)
2. **β-STD** — comparator paragraph (intro + 4 framed contrasts + §1.3 cross-link)
3. **γ-STD** — per-mode worked examples (artifact + possibility + key-difference-from-innovation)
4. **P-δ exact edit** — 1-line SKILL.md path update
5. **P-ε full metadata** — MUST/COULD/DEFERRED/REJECTED/PRESERVATION sections

### DEFERRED-with-revival

- α-RICH (with per-step examples) — revival: user wants pedagogical maximum
- β-RICH (with worked example per contrast) — revival: pedagogical maximum
- γ-RICH (with cross-domain examples) — revival: /explore used across more domains

### ALTERNATE (user-preference fallback)

- α-MIN / β-MIN / γ-MIN — bare-bones variants if user wants tighter file

### KILLED

- Place G1 at top of file (project convention is terminal placement)
- Bundle all 3 refinements into single edit (separation enables incremental adoption per MUST/RECOMMENDED tiering)

---

## Frontier (for /td-critique)

1. *Stress-test the α-STD draft.* Are the cross-references (§3.1, §3.4, §4.2, §5.1, etc.) all correct and complete? Does the block read as truly imperative or does it feel descriptive?
2. *Test the β-STD draft.* Does the "Exploration is NOT" framing feel pedagogically clear, or does it duplicate content already in §1 of the new file?
3. *Test the γ-STD draft.* Are the per-mode examples concrete enough to ground scan/probe behavior, or do they feel like filler?
4. *Test the MUST/RECOMMENDED tiering in P-ε.* Is G1 really MUST, or is Option B (without G1) acceptable for the project's current state?
5. *Test the preservation decision.* Does keeping old `explore.md` on disk cause confusion, or is the value of historical reference proportionate?

---

## Telemetry

- **Mechanisms applied:** 7/7 (lightly given narrow scope)
- **Variants generated:** 3 per piece × 3 pieces (MIN/STD/RICH for α, β, γ) + 1 for P-δ + 1 for P-ε = 11 total drafts/variant-considerations
- **Convergence:** HIGH on STD-level assembly (α-STD + β-STD + γ-STD + P-δ + P-ε)
- **Dispositions:** 5 ACTIONABLE; 3 DEFERRED-with-revival; 3 ALTERNATE; 2 KILL
- **Concrete content drafts:** produced for all 5 pieces; copy-paste-ready
- **Assembly check:** PASSED — bounded, modular, reversible, documented
- **Failure modes observed:** none

## Self-Assessment

**Overall: PROCEED**

Concrete drafts are produced for all 5 pieces. The recommended assembly (α-STD + β-STD + γ-STD + P-δ + P-ε) is copy-paste-ready. Total edit footprint ~100 lines of additions to `explore_accurate.md` + 1-line SKILL.md change. User retains decision authority via Option B fallback documented in P-ε. Critique should stress-test the MUST/RECOMMENDED tiering and the cross-reference correctness in α-STD.
