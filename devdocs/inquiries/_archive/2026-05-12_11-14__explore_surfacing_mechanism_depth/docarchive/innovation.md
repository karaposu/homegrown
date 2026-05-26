# Innovation — shape variants and concrete content drafts for the per-item content depth additions

## User Input
`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-12_11-14__explore_surfacing_mechanism_depth/_branch.md`

Prior outputs consumed: this inquiry's exploration / sensemaking / decomposition. Decomposition's frontier asked for shape variants per piece (α / β / γ / δ) + concrete phrasings.

---

## Seed

How should each of the 4 pieces (P-α table; P-β Step 0 field; P-γ heuristic + terminology; P-δ calibration notes) be expressed concretely? Generate shape variants for each + concrete content drafts ready for adoption.

**Direction:** the user values cognitive clarity, conciseness, runnable adoption. The just-finished inquiry produced concrete content drafts; same pattern here.

---

## Phase 2 — Generate (Seven Mechanisms × 3 Variations Each)

### 1. Lens Shifting (Framer)

- **Generic:** Under what conditions is MAXIMAL per-piece shape right? When the spec serves an audience unfamiliar with the project (new contributors).
- **Focused:** Under what conditions is MINIMAL right? When the audience is project-familiar.
- **Contrarian:** Under what conditions is NO addition right? If iter-2's "surfaced item" framing already implicitly carries labeling. → **KILL** — this is what the current inquiry rejected; the labeling is NOT implicit (the user's stated concern was exactly that it's missing).

### 2. Combination (Generator)

- **Generic:** Combine the 5-row D0–D4 table with concrete examples drawn from multiple domains (codebase, research, problem-domain). → Yields **α-RICH variant**.
- **Focused:** Combine the new Step 0 field with the existing iter-2 + just-finished fields. Show the FULL Step 0 block. → Yields **β-STD variant** (full block, not just the new line).
- **Contrarian:** Combine P-α's table with P-γ's heuristic — fold the heuristic INTO the table as a footer. Single-section absorption. → Yields a possible **α+γ-MERGED** variant; saves cross-references but tightens both pieces.

### 3. Inversion (Framer)

- **Level 1 (component-level):** Assumption: the table is structured as rows (one per level). Invert: structured as a progression diagram. → Yields **α-VISUAL variant**.
- **Level 2 (system-level):** Assumption: depth-level is declarative (user sets at Step 0). Invert: derived from observed output (the discipline reports its actual depth-level post-hoc). → Trade-off: declarative is predictable; derived is honest about reality. Hybrid — declare-with-override-on-report. → Yields **β-DECLARE-AND-REPORT variant**.
- **Level 3 (root-cause-level):** Assumption: labeling content is structured. Invert: labeling is free-form prose. → Loses predictability for /intuit composability. **KILL.**

### 4. Constraint Manipulation (Framer)

- **Generic (add "max 100 lines for the additions"):** Forces minimum shapes. → Reinforces α-MIN / β-MIN baselines.
- **Focused (remove "uniform per-invocation"):** Allows per-item-variable depth. → Already rejected in sensemaking.
- **Contrarian (add "must be skill-readable now"):** Forces typed records immediately. → Conflicts with iter-2 deferred SK-STD+ Schema (which already covers typed); **fold under that deferred item**.

### 5. Absence Recognition (Generator)

- **Generic gap:** A worked example showing how a single /explore invocation would look with the new depth-level field. → **Add a worked example** to α-STD or β-STD.
- **Focused gap:** Guidance on when to OVERRIDE the default coupling. → Adds an "Override guidance" subsection to β-RICH.
- **Redesign-level gap:** If /explore were designed today with end-goal in mind, what would the output structure look like? Probably MORE structured per item (each item has typed fields). The depth-level field is a first step toward this. → Reinforces extrapolation framing.

### 6. Domain Transfer (Generator)

- **Generic (Library / cataloging):** Library catalogs have multiple Levels of bibliographic description (minimal, standard, full). Mirror this pattern in /explore's depth levels. → Reinforces D0–D4 structure (library science uses similar tiering).
- **Focused (Cartography):** Map keys at different scales — country-level legends differ from city-level. Depth-by-resolution coupling matches this. → Reinforces the default coupling.
- **Contrarian (Software API versioning):** Typed API responses have schema versions. /explore's depth-level is similar — picks the "schema version" the invocation operates under. → Useful framing for SK-STD+ Schema future.

### 7. Extrapolation (Generator)

- **Generic (6-month horizon):** /intuit composes /explore output. Per-item content needs to be parseable. → Argues for structured (table; typed records).
- **Focused (Level 3+ autonomy):** Depth-level might be chosen autonomously. Spec should anticipate this. → Refinement: depth-level field's default is what an autonomous selector would pick.
- **Contrarian (long-term):** At long-term autonomous orchestration, depth-level might disappear (replaced by /intuit's quality-awareness). The current depth-level is a Level-0-bootstrap field. → Don't block this future; current declarative design is compatible with future autonomous derivation.

---

## Phase 3 — Test

### Candidate consolidation

| Tag | Shape | Source mechanisms |
|---|---|---|
| **α-MIN** | 5-row table with one-liner per row + 3 rules (D2 default; D0 unacceptable; D5+ excluded) | Lens-shifting (focused) + Constraint (generic) |
| **α-STD** | 5-row table + 1 example per row (codebase) + 3 rules + uniformity + D4 forward-tie + form note | Combination (generic) + Domain-transfer (generic library) + Absence (generic worked example) |
| **α-RICH** | 5-row table + 3 examples per row (codebase/research/problem) + edge-case note | Combination (generic) + Domain-transfer (full) |
| **α-VISUAL** | Progression diagram instead of table | Inversion (level 1) |
| **α+γ-MERGED** | α-STD's table absorbs γ's heuristic as a footer | Combination (contrarian) |
| **β-MIN** | One-line addition to existing Step 0 block | Constraint (generic) |
| **β-STD** | Full Step 0 block + orthogonality note + default coupling table | Combination (focused) + Domain-transfer (focused cartography) |
| **β-RICH** | β-STD + override guidance subsection | Absence (focused) |
| **β-DECLARE-AND-REPORT** | Declarative at Step 0 + observed-depth at output Telemetry | Inversion (level 2) |
| **γ-MIN** | Heuristic + naive-scanner def in 2-3 sentences; NOT-list clarification one-line | Lens-shifting (focused) |
| **γ-STD** | Heuristic + naive-scanner def + edge-case note + labeling-vs-anchor distinction (1 paragraph each) | Absence + Domain-transfer |
| **γ-RICH** | γ-STD + multi-domain edge-case examples | Absence (focused) |
| **δ-INLINE** | Notes placed inline next to flagged elements | (no specific mechanism; pragmatic) |
| **δ-COLLECTED** | Notes collected at bottom of /explore spec | Inversion (level 1 of doc structure) |
| **δ-FOOTNOTES** | Notes as numbered footnotes | Domain-transfer (academic convention) |

### 5-test cycle

| Candidate | Novelty | Scrutiny | Fertility | Actionability | Mech Indep | Disposition |
|---|---|---|---|---|---|---|
| **α-MIN** | LOW | MEDIUM (table without examples is harder to use) | LOW | HIGH | MEDIUM | SURVIVE (baseline) |
| **α-STD** | MEDIUM | HIGH (balanced) | HIGH | HIGH | HIGH (3 mechanisms converge) | **SURVIVE — ACTIONABLE** |
| **α-RICH** | MEDIUM-HIGH | HIGH | HIGH | MEDIUM (more text) | HIGH | **DEFERRED-with-revival** (when project has diverse explore uses) |
| **α-VISUAL** | HIGH | MEDIUM (departs from project's table convention) | LOW | LOW | LOW (only one mechanism) | **KILL** — convention departure not justified |
| **α+γ-MERGED** | MEDIUM | MEDIUM (saves cross-reference but tightens both pieces awkwardly) | LOW | MEDIUM | LOW | KILL — keeping separate is cleaner |
| **β-MIN** | LOW | LOW (one-line without context is confusing) | LOW | HIGH | LOW | **REFINE** → use β-STD instead |
| **β-STD** | MEDIUM | HIGH (full block + orthogonality + coupling table) | HIGH | HIGH | HIGH | **SURVIVE — ACTIONABLE** |
| **β-RICH** | MEDIUM | HIGH (override guidance is useful) | MEDIUM | MEDIUM | MEDIUM | DEFERRED-with-revival (when override cases observed empirically) |
| **β-DECLARE-AND-REPORT** | MEDIUM-HIGH (declare-and-report pattern is novel) | MEDIUM (adds telemetry duplication — depth declared AND reported) | MEDIUM | MEDIUM | LOW | **REFINE** → fold the "report observed depth" piece into existing Telemetry section (don't separate) |
| **γ-MIN** | LOW | MEDIUM (heuristic alone is too thin without naive-scanner definition) | LOW | HIGH | LOW | REFINE → use γ-STD baseline |
| **γ-STD** | MEDIUM | HIGH (heuristic + naive-scanner + edge + labeling/anchor) | HIGH | HIGH | HIGH | **SURVIVE — ACTIONABLE** |
| **γ-RICH** | MEDIUM | HIGH (multi-domain examples) | MEDIUM-HIGH | MEDIUM | MEDIUM | DEFERRED-with-revival (when edge cases observed) |
| **δ-INLINE** | LOW | HIGH (notes near elements they annotate; readable) | MEDIUM | HIGH | HIGH | **SURVIVE — ACTIONABLE** |
| **δ-COLLECTED** | LOW | MEDIUM (notes far from elements; user has to jump) | LOW | MEDIUM | LOW | ALTERNATE (user-preference fallback if inline feels noisy) |
| **δ-FOOTNOTES** | LOW | MEDIUM (footnote rendering varies across markdown viewers; project doesn't use them) | LOW | MEDIUM | LOW | **KILL** — convention-mismatch |

### Assembly check

Surviving + ACTIONABLE: α-STD + β-STD + γ-STD + δ-INLINE.

**Emergent assembly:** *the recommended adoption package* — a coordinated set of edits to /explore's two-file pair:
- `homegrown/explore/SKILL.md` — Step 0 declaration block updated (β-STD)
- `homegrown/explore/references/explore.md` — Components section gains per-item content table (α-STD); Quality section gains heuristic + terminology + NOT-list clarification (γ-STD); calibration notes inline (δ-INLINE)

The assembly survives the 5-test cycle as a coherent unit. No structural conflicts between α / β / γ / δ.

### Axis coverage check

| Axis | Variants generated | Coverage |
|---|---|---|
| P-α shape | min / std / rich / visual / merged | All tested |
| P-β shape | min / std / rich / declare-and-report | All tested |
| P-γ shape | min / std / rich | All tested |
| P-δ format | inline / collected / footnotes | All tested |

Axis coverage complete.

### Convergence signal

- **α-STD** convergence: combination + domain-transfer + absence — 3 mechanisms converge.
- **β-STD** convergence: combination + domain-transfer + lens-shifting — 3 mechanisms converge.
- **γ-STD** convergence: absence + domain-transfer + extrapolation — 3 mechanisms converge.
- **δ-INLINE** convergence: pragmatic (not mechanism-driven) but well-supported.

Overall HIGH convergence on the recommended assembly.

---

## Failure Mode Self-Check

| Failure mode | Observed? | Note |
|---|---|---|
| Premature evaluation | No | All 7 mechanisms applied before testing |
| Single-mechanism trap | No | 4 Generators + 3 Framers |
| Early frame lock | No | After α-STD plausible, continued through all variants |
| Innovation without grounding | No | Every candidate tested |
| Mechanism exhaustion | No | Survivors exist |
| Survival bias | Re-checked α-VISUAL kill (convention departure verified structural); α+γ-MERGED kill (separation cleaner verified); δ-FOOTNOTES kill (convention mismatch verified). All structural grounds. |

---

## Final Deliverable

### ACTIONABLE survivors (recommended adoption package)

1. **α-STD** — Per-item content table with 5 rows (D0–D4), one codebase example per row, 3 rules (D2 default, D0 unacceptable, D5+ excluded), per-invocation uniformity, D4 forward-tie note, form note (prose default; typed when SK-STD+ Schema activates).
2. **β-STD** — Full Step 0 declaration block showing all fields (iter-2 + just-finished + this iteration's depth-level), orthogonality statement, default coupling table.
3. **γ-STD** — Boundary heuristic (inter-rater agreement among naive scanners) + naive-scanner definition + edge-case handling + labeling-vs-anchor distinction + NOT-list clarification.
4. **δ-INLINE** — Three calibration notes inline next to flagged elements.

### DEFERRED-with-revival

- **α-RICH** — multi-domain examples. *Revival:* when project has diverse /explore use cases across domains.
- **β-RICH** — override guidance. *Revival:* override cases observed empirically.
- **γ-RICH** — multi-domain edge-case examples. *Revival:* edge cases observed empirically.

### ALTERNATE (user-preference fallback)

- **δ-COLLECTED** — notes at bottom instead of inline. Use if inline feels noisy.

### KILLED

- **α-VISUAL** — convention departure not justified.
- **α+γ-MERGED** — separation cleaner.
- **δ-FOOTNOTES** — convention mismatch.
- **β-DECLARE-AND-REPORT** as a separate field — folded into existing Telemetry section instead (no new artifact).
- **Free-form prose labeling** (level 3 inversion) — loses /intuit composability.

---

## Concrete content drafts (ready for adoption)

### Draft: Per-item content table (α-STD) — for `references/explore.md` Components section

````markdown
## Per-item content depth

Each surfaced item /explore emits carries content at one of five labeling levels. The level is declared at Step 0 (see the `depth-level` field in the Process section).

| Level | What's included | Codebase example |
|---|---|---|
| **D0** | bare identifier only | `src/auth.py` |
| **D1** | + surface form (observable facts: size, signature, exports) | `src/auth.py, ~200 lines, exports authenticate()` |
| **D2** | + functional one-line **(default minimum)** | `src/auth.py — handles user authentication; ~200 lines, exports authenticate()` |
| **D3** | + structural adjacency (co-location facts) | `src/auth.py — handles user authentication; called by src/views/login.py, imports bcrypt` |
| **D4** | + relevance verdict **(optional; forward-tied)** | `src/auth.py — ... ; relevance: confirmed-relevant-to-inquiry-purpose` |

**Default minimum: D2.** D1 is permitted at coarse-resolution scans if explicitly declared at Step 0. **D0 is NOT acceptable as final output** — items at this level force downstream disciplines (especially sense-making) to re-discover what each item is, defeating /explore's upstream-precondition relationship.

**Excluded: D5+.** Conceptual-role gloss ("this is the access-control entry point") or relational meaning claims ("this grounds all downstream authorization") are sense-making's territory, not /explore's. See the labeling-vs-meaning boundary heuristic in the Quality section.

**Per-invocation uniformity.** Depth-level is declared once per /explore invocation; all surfaced items in that invocation aim for the declared level. Items with low confidence may have partial content (some fields empty) but the level commitment is per-call.

**Form.** Content may be expressed as prose (default; markdown) or as typed records (when the deferred Existence-Claim Schema from iter-2's tiered evolution path activates).

*(calibration-state note: D4 (relevance verdict) is forward-tied to the planned /verification-probe inquiry which will detail the active-verification behavior that produces D4 verdicts. D4 is OPTIONAL until that finding lands; meanwhile, items may be surfaced at D3 with relevance handled via the scan-driver bias from iter-2.)*
````

### Draft: Step 0 declaration block (β-STD) — for `SKILL.md`

````markdown
## Step 0 declarations

When /explore is invoked, declare:

- `cognitive-commitment-mode: open` (from iter-2 — held throughout invocation)
- `territory-type-mode: artifact | possibility` (from iter-2 — detected from input)
- `entry-point: frontier-first | signal-first` (from iter-2)
- `expected: ~N items` or `~N items per parent` (from end-goal-aware inquiry — resolution-level; controls **breadth**)
- `depth-level: D1 | D2 (default) | D3 | D4` (new — controls **per-item content richness**; see Components section)

### Orthogonality

`depth-level` and `expected` (resolution-level) are orthogonal dimensions of the input contract. Breadth and per-item richness are conceptually independent.

### Default coupling (recommended, not enforced)

| Resolution (`expected`) | Recommended `depth-level` |
|---|---|
| ~10 items (coarse) | D1–D2 |
| ~50 items (medium) | D2–D3 |
| ~200 items (fine) | D3–D4 |

Users can override (e.g., coarse-breadth with rich-depth, or fine-breadth with shallow-depth) when context budget allows. The coupling captures the typical case, not the rule.

*(calibration-state note: the default coupling is operational reasoning based on LLM context budgets, not empirically validated. Refinement trigger: context-budget observations across staged-explore runs.)*
````

### Draft: Boundary heuristic + terminology (γ-STD) — for `references/explore.md` Quality section

````markdown
## The labeling-vs-meaning boundary

/explore produces labeling content (D0–D4); sense-making produces conceptual-structure content (anchors, perspectives, ambiguity collapse). The boundary between them is operationalized by this heuristic:

**Inter-rater agreement among naive scanners.** When deciding whether a piece of content is acceptable labeling (D0–D4) or crosses into meaning-extraction (D5+), ask:

> *"Would a scanner who reads the item but has NOT yet built a conceptual-structure model of the territory produce roughly the same description?"*

- **High agreement** (multiple naive scanners produce similar descriptions) → **labeling**. OK for /explore output.
- **Low agreement** (multiple defensible framings depending on the conceptual model assumed) → **meaning-extraction**. Belongs to sense-making.

A "naive scanner" is one who has not done sense-making's anchor-extraction work on this territory. They can read individual items and report observable facts; they do not yet have a frame for what items MEAN in relation to each other.

### Edge cases

Domain jargon and contested terminology often produce high agreement AMONG EXPERTS but require conceptual-structure knowledge to assess. These are NOT labeling at the discipline level — treat them as **labeling at low confidence**: the surfaced item's functional one-line should be conservative; deeper interpretation is sense-making's job.

### Examples (codebase domain)

- "`src/auth.py` — handles user authentication" → **LABELING** (naive scanners agree)
- "`src/auth.py` is the access-control entry point of the system" → **MEANING** (multiple defensible framings: gatekeeper? entry point? identity-anchor?)
- "`src/auth.py` grounds downstream authorization decisions" → **MEANING** (interpretive claim about role)

*(calibration-state note: the heuristic's edge cases are calibration-state-dependent. Refinement trigger: 3+ observed runs report ambiguity; refine via empirical edge-case examples.)*

## Terminology: labeling vs anchor

**Labeling** is /explore's per-item descriptive content at surface granularity — what each surfaced item IS at the inter-rater-agreement level. Labels are operationally useful for sense-making to anchor on, but they are NOT anchors themselves.

**Anchor** is sense-making's conceptual-structure unit — extracted via sense-making's Phase 1 (see `homegrown/sense-making/references/sensemaking.md`). Anchors carry conceptual-structure meaning that labels do not.

The distinction: **labels are observed; anchors are extracted.**

## NOT-list clarification (refining iter-2's commitments)

The iter-2 NOT-list states /explore "does not extract meaning." This is preserved — but "meaning" requires clarification.

**"Meaning" here means conceptual-structure meaning:** anchor extraction, relational claims among anchors, interpretive role assignment within a conceptual model. This is what sense-making produces.

**"Meaning" does NOT mean identifying-labeling content:** functional one-lines, surface forms, structural adjacency facts. These pass the inter-rater-agreement heuristic and ARE acceptable in /explore output (D0–D4).

The five NOT-list entries (no meaning, no mechanism, no partition, no novelty, no route selection) all hold — each refers to the conceptual-structure-level operation of the named neighbor discipline. /explore can attach identifying labels without crossing any of these lines.
````

---

## Frontier (for /td-critique)

1. *Stress-test the recommended assembly* (α-STD + β-STD + γ-STD + δ-INLINE). Are the concrete drafts ready for adoption, or do they have hidden flaws?
2. *Test the naive-scanner heuristic at edge cases.* What about items in a deeply-technical territory (compiler internals, type theory) where "naive" is hard to define?
3. *Test the D4 forward-tie.* Is "D4 optional + forward-tied" workable in v1, or does it leave the spec incomplete?
4. *Test the default coupling table.* Are the recommended depth-by-resolution mappings (D1-D2 / D2-D3 / D3-D4) actually right, or are they speculative?
5. *Test the inline calibration-note format (δ-INLINE).* Does it clutter the spec, or does it sit naturally next to its annotation target?

---

## Telemetry

- **Generators applied:** 4 / 4 (Combination, Absence Recognition, Domain Transfer, Extrapolation)
- **Framers applied:** 3 / 3 (Lens Shifting, Constraint Manipulation, Inversion)
- **Mechanism coverage:** 7 / 7 (full)
- **Variations per mechanism:** 3 (generic / focused / contrarian)
- **Candidates generated:** ~15 (variations + assembly)
- **Convergence:** HIGH on the recommended assembly (α-STD + β-STD + γ-STD + δ-INLINE); 3+ mechanisms converge on each surviving piece
- **Survivors tested:** all candidates received 5-test cycle
- **Dispositions:** 4 ACTIONABLE (assembly); 3 DEFERRED-with-revival (α-RICH, β-RICH, γ-RICH); 1 ALTERNATE (δ-COLLECTED); 5 KILL (α-VISUAL, α+γ-MERGED, δ-FOOTNOTES, β-DECLARE-AND-REPORT separation, free-form-prose)
- **Assembly check:** YES — recommended assembly is coherent as a unit
- **Axis coverage check:** YES — 4 axes covered
- **Failure modes observed:** none

## Self-Assessment

**Overall: PROCEED**

The recommended assembly (α-STD + β-STD + γ-STD + δ-INLINE) honors the user's framing (cognitive clarity + runnability) and produces concrete content drafts ready for adoption. Three DEFERRED-with-revival options provide a clear evolution path. Critique should stress-test the drafts + the naive-scanner heuristic's edge cases + the D4 forward-tie + the default coupling table.
