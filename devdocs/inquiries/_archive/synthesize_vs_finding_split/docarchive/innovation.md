# Innovation: synthesize_vs_finding_split

## User Input

`devdocs/inquiries/synthesize_vs_finding_split/_branch.md`

The decomposition specified five pieces (A: naming, B: inquiry.md rewrite, C: protocols/desc.md update, D: /MVL cross-references, E: connection to ongoing work). Apply 7 mechanisms × 3 variations to the overall seed and develop concrete designs for each piece. Apply assembly check.

---

## Seed

The sensemaking concluded TWO distinct protocols (FINDING-COMPILE filled + SYNTHESIZE named-but-underspecified). Now design the concrete realization of the split: names, doc rewrites, cross-references, coordination with other pending work. The goal is actionable — proposed wording the user can copy-paste, not just abstract discussion.

---

## Phase 2 — Generate (7 mechanisms × 3 variations)

### 1. Lens Shifting (framer)

| Variation | Lens | Output |
|---|---|---|
| **Generic** | "User reads docs cold in 6 months" | Names must be self-evident; cross-refs explicit; no reliance on this conversation. → A.1 (FINDING-COMPILE + SYNTHESIZE) is self-evident; A.4 (SYNTHESIZE-finding/SYNTHESIZE-artifact) requires conversation context to disambiguate. |
| **Focused** | "External agent (Codex / Claude.ai) parses the protocol structure" | Forces explicit invocation paths. The protocol vocabulary must be discoverable. → If FINDING-COMPILE only lives in `protocols/desc.md`, the agent has to navigate there. If it's named at the implementation site (`/MVL`'s spec), the agent finds it where activation happens. → Supports D.2 (light cross-reference in /MVL). |
| **Controversial** | "Project never reaches Level 2-3 autonomy; SYNTHESIZE-slot stays empty forever" | Was the naming work wasted? → Mitigation: keep the documentation cost small. ~30-50 lines across 4 files = recoverable cost. Even a permanent-empty SYNTHESIZE slot preserves the named-vocabulary infrastructure for architectural conversations. → Validates "named-but-deferred" pattern as acceptable bet. |

### 2. Combination (generator)

| Variation | Combine | Output |
|---|---|---|
| **Generic** | FINDING-COMPILE naming + protocols-dimension's "named-but-deferred" pattern | Both protocols become entries in `protocols/desc.md`; FINDING-COMPILE in alive-absorbed group; SYNTHESIZE in alive-but-underspecified group. Aligns with prior `protocols_relevance_check` framework. → C.1 (split entry into two) is the concrete form. |
| **Focused** | SYNTHESIZE-rewrite + Configuration β from `protocols_relevance_check` | The user has Configuration β pending (status table updates + cross-references + autonomy-ladder mapping in `protocols/desc.md`). The current C work ADDS to that — splitting SYNTHESIZE into two entries shifts the count table (alive-embedded 5→6, with SYNTHESIZE moving to a new alive-but-underspecified row). The two work-streams should be coordinated. → Surfaces piece E.1 explicitly. |
| **Controversial** | The split + a hypothetical /synthesize command | If SYNTHESIZE becomes a real command someday, it would take a `finding.md` + a target type and produce the project artifact. Building this is hours-to-days; out of scope for current audit. But naming the slot NOW means the eventual `/synthesize` builder knows what role to fill. → Validates the split as architectural prep, not just doc reorganization. |

### 3. Inversion (framer)

| Variation | Invert | Output |
|---|---|---|
| **Generic (component)** | "FINDING-COMPILE is implicit in /MVL" → "FINDING-COMPILE is explicit in /MVL with cross-reference" | The protocol name should be visible at the implementation site, not just in `protocols/desc.md`. → Supports D.2 over D.1. |
| **Focused (system)** | "SYNTHESIZE lives as subsection of inquiry.md" → "SYNTHESIZE moves to its own canonical location" | If SYNTHESIZE is its own protocol now (no longer just an /inquiry sub-step), maybe its canonical home should be `protocols/desc.md` or a dedicated `protocols/synthesize.md`, not buried in inquiry.md. → Surfaces a more aggressive option than B.3 (delete from inquiry.md): move it to a protocol-specific file. |
| **Controversial (root)** | "Both protocols live in command files" → "Both protocols live in `protocols/desc.md` as canonical home; command files cite them" | This would be a larger architectural shift — making `protocols/desc.md` the source of truth for protocol specs, with command files implementing-but-not-defining them. Out of scope but worth noting as a long-term direction. |

### 4. Constraint Manipulation (framer)

| Variation | Modify constraint | Output |
|---|---|---|
| **Generic (add)** | "Every protocol entry in `protocols/desc.md` must name its concrete implementation location" | Both FINDING-COMPILE (implementation: `/MVL` and `/MVL+` iteration-complete-yes branch) and SYNTHESIZE (implementation: human-manual currently; future `/synthesize` command) must specify where the procedure lives. Forces honesty about the underspecified status. |
| **Focused (add)** | "Every protocol that has been split from a previous one must include a cross-reference to its sibling" | FINDING-COMPILE entry says "see SYNTHESIZE for the artifact-construction sibling"; SYNTHESIZE entry says "see FINDING-COMPILE for the inquiry-verdict sibling." Maintains the navigability lost when one entry becomes two. |
| **Controversial (remove)** | Drop: "protocols must be named in command files" | Just put them in `protocols/desc.md`; commands implement them but don't claim ownership. Larger refactor; aligns with the Inversion-controversial direction. Out of scope for current work but the principled long-term direction. |

### 5. Absence Recognition (generator)

| Variation | What's missing | Output |
|---|---|---|
| **Generic (current-design gap)** | The project has no `/synthesize` command | If SYNTHESIZE is a real protocol with actual artifact-construction work, eventually it should have a command. → Future opportunity (Open Question), not current action. |
| **Focused (small gap)** | The recently-rewritten SKILL.md files in `homegrown/` don't reference protocols at all | Should `homegrown/` have a place for protocols? → No. `homegrown/` is for skills/disciplines (cognitive operations); protocols are operational machinery (a different layer). They don't belong in the same directory structure. The split decision applies only to `commands/` and `thinking_disciplines/protocols/`, not to `homegrown/`. → E.2 = no change to homegrown/. |
| **Controversial (designed-from-scratch)** | If the project were redesigned today, would FINDING-COMPILE and SYNTHESIZE be embedded in `/inquiry` and `/MVL`, or would they be standalone `/finding-compile` and `/synthesize` commands? | Probably standalone. Current placement is incremental accumulation. → Long-term direction; out of scope for current decision. |

### 6. Domain Transfer (generator)

| Variation | Source domain | Output |
|---|---|---|
| **Generic (open-source unix tools)** | Separate utilities for each operation (grep + sed + awk are distinct, not subcommands of one tool) | Apply: FINDING-COMPILE and SYNTHESIZE should be separately addressable, even if currently colocated. Naming them separately is the architectural prep for future separability. |
| **Focused (compiler pipeline phases)** | Distinct phases (parse → AST → IR → codegen) each with named operations | Apply: the inquiry pipeline has phases (sensemaking → innovation → critique → finding-compile → [optional] synthesize). Naming all phases including the post-iteration ones makes the pipeline auditable. → Cross-domain validation that the split is the right shape. |
| **Controversial (database normalization)** | Denormalized table conflating two entities → normalized into two tables with explicit relationship | The current SYNTHESIZE entry conflates two operations; the split IS architectural normalization. The current state is denormalized. → Strongest cross-domain analogy: this isn't "renaming" or "vocabulary-bloat"; it's normalization, which is recognized as a structural improvement. |

### 7. Extrapolation (generator)

| Variation | Extrapolate | Output |
|---|---|---|
| **Generic (project growth)** | In 1 year: more disciplines, more inquiries, more findings | FINDING-COMPILE will be invoked more (every /MVL/MVL+ run); SYNTHESIZE will be invoked more (more design inquiries → more spec construction). Clear names early reduce friction later. |
| **Focused (autonomy ladder Level 2)** | When the system handles uncertain reviews autonomously, it needs to invoke artifact-construction without human in the loop | SYNTHESIZE-as-named-slot becomes the entry point for that capability. FINDING-COMPILE doesn't need to change — `/MVL`/`/MVL+` already do it. → SYNTHESIZE is the future-readiness investment; FINDING-COMPILE is current state recognition. |
| **Controversial (5-year future)** | If `/synthesize` becomes a real command, it would take a finding.md + target type as args, produce project artifact | Today: slot is empty. Naming the slot now means when someone (or the system itself at Level 3) builds `/synthesize`, they know what role to fill. → Long-term validation of the named-but-deferred bet. |

---

## Concrete Designs Per Piece

### PIECE A — Naming choice

#### A.1 — FINDING-COMPILE + SYNTHESIZE (RECOMMENDED)

- **Pros:** verb-explicit (FINDING-COMPILE makes the operation obvious); preserves SYNTHESIZE's existing name in `protocols/desc.md`; minimum-disruption to existing vocabulary.
- **Cons:** "FINDING-COMPILE" is slightly verbose.
- **Mechanism support:** Combination-generic (alignment with named-but-deferred pattern), Inversion-generic (component-level: name what's currently implicit), Domain-focused (compiler-phase analogy).

#### A.2 — FINDING + SYNTHESIZE

- **Pros:** shorter; matches the artifact name (`finding.md`).
- **Cons:** "FINDING" is also the artifact name; protocol-vs-artifact disambiguation issue (e.g., "the FINDING protocol produces the FINDING artifact").
- **Verdict:** acceptable but ambiguous.

#### A.3 — COMPILE-FINDING + COMPILE-ARTIFACT

- **Pros:** verb-first symmetry; no naming continuity issue.
- **Cons:** drops SYNTHESIZE entirely (breaks continuity with `protocols/desc.md` and prior `protocols_relevance_check` finding); COMPILE-ARTIFACT is new vocabulary that doesn't exist in the project; loses the "synthesis = combining elements into a new whole" semantic that fits artifact-construction well.
- **Verdict:** symmetric but disruptive.

#### A.4 — SYNTHESIZE-finding + SYNTHESIZE-artifact (CONTRARIAN)

- **Pros:** keeps SYNTHESIZE umbrella; subtype variations.
- **Cons:** treats them as variations of one thing rather than structurally distinct operations; doesn't actually formalize the split (the sensemaking established they're DIFFERENT operations, not modes of one); sub-type naming is awkward.
- **Verdict:** undermines the split. Reject.

#### A.5 — FINDING-WRITE + SYNTHESIZE (NEW)

- **Pros:** shorter than COMPILE; matches `/MVL`'s wording ("Write finding.md").
- **Cons:** WRITE is generic; the operation does more than write (it COMPILES from sources).
- **Verdict:** acceptable alternative to A.1; slightly weaker semantically.

#### A.6 — VERDICT-COMPILE + ARTIFACT-CONSTRUCT (NEW)

- **Pros:** semantically cleanest; emphasizes the role distinction (verdict vs artifact).
- **Cons:** drops SYNTHESIZE entirely; introduces lots of new vocabulary; harder migration.
- **Verdict:** semantically best but practically disruptive.

**Recommendation: A.1 (FINDING-COMPILE + SYNTHESIZE).** Convergence across Combination, Inversion, and Domain mechanisms.

---

### PIECE B — `commands/inquiry.md` SYNTHESIZE rewrite

#### B.1 — Targeted rewrite (RECOMMENDED)

Replace the existing SYNTHESIZE section (lines 252-285) with:

```markdown
## SYNTHESIZE — Artifact Construction (after FINDING-COMPILE)

When `/MVL` or `/MVL+` writes `finding.md` at iteration completion (the **FINDING-COMPILE** protocol — see `thinking_disciplines/protocols/desc.md`), the inquiry's verdict is recorded inside the inquiry folder. SYNTHESIZE is the next step — but only when the project needs a project-level artifact distinct from the finding.

**SYNTHESIZE constructs a project-level artifact** (specification document, implementation plan, decision document, report, root-cause analysis, etc.) from a completed finding, in the format the project's audience requires. The artifact is saved to its project location (NOT the inquiry folder).

**When you need SYNTHESIZE:**
- The inquiry was "design `/scope`" — `finding.md` describes the design; SYNTHESIZE produces the actual `commands/scope.md` spec (with frontmatter, invocation patterns, examples).
- The inquiry was "write a project report on X" — `finding.md` captures the verdict; SYNTHESIZE produces the report in the project's report format.
- The inquiry was "decide on architecture for Y" — `finding.md` captures the decision; SYNTHESIZE produces an ADR in the project's ADR format.

**When you DON'T need SYNTHESIZE:**
- The inquiry was an audit, evaluation, or design question whose deliverable IS the verdict. `finding.md` IS the deliverable; you read it and act on Next Actions. No separate SYNTHESIZE step.

**Status: named-but-procedurally-underspecified.** The HOW of constructing each artifact type from a finding is currently performed manually by the human reading `finding.md` and writing the project artifact. The formal procedure is a named slot for autonomy-ladder Level 2-3+ implementation (per `enes/desc.md`) — when the system needs to autonomously produce project artifacts from completed inquiries.

**Quality test:** "Can a project consumer (not an inquiry-traverser) act on this artifact directly, without reading the finding it was constructed from?"

**Boundary with FINDING-COMPILE:** FINDING-COMPILE produces the verdict-as-output (the inquiry's answer, in standardized form, inside the inquiry folder). SYNTHESIZE produces the artifact-the-verdict-was-about-as-output (a project artifact in the project's format, outside the inquiry folder). They are structurally distinct operations, currently both alive in the project but with different implementation maturity.
```

**Net edits:** ~30 lines replacing the existing ~33 lines. Same scale.
**Pro:** Explicit about role; cross-references FINDING-COMPILE; acknowledges underspecification; gives concrete examples; preserves the "Quality test" pattern.
**Con:** None significant.

#### B.2 — B.1 + extended autonomy-ladder discussion

Add one more subsection after the "Quality test" line:

```markdown
**Why this slot exists today (named-but-empty):** at autonomy-ladder Level 0-1 (current), the user reads `finding.md` and manually writes the project artifact. The translation step lives in human cognition. At Level 2 (system handles uncertain reviews) and Level 3 (system proposes own architectural improvements), the system needs to autonomously produce project artifacts from inquiry findings. SYNTHESIZE is the named slot for that capability. Formalizing the procedure (HOW to construct each artifact type) is future work.
```

**Pro:** Stronger autonomy-ladder connection; future-readiness explicit.
**Con:** Extra ~10 lines; arguably duplicates what's in `enes/desc.md` and `protocols/what_is_protocol.md`.

#### B.3 — Delete from inquiry.md; reference protocols/desc.md (CONTRARIAN)

Delete the SYNTHESIZE section entirely. Replace with one paragraph:

```markdown
## After Iteration: FINDING-COMPILE + SYNTHESIZE

After the SIC pipeline produces a verdict, two protocols apply:

1. **FINDING-COMPILE** — `/MVL` and `/MVL+` write `finding.md` inside the inquiry folder. This is automatic at iteration completion.

2. **SYNTHESIZE** — when the project needs a project-level artifact (spec / plan / report / ADR / RCA) distinct from the finding, SYNTHESIZE constructs that artifact from the finding. Currently performed manually; formal procedure is named-but-underspecified.

For full protocol definitions, see `thinking_disciplines/protocols/desc.md`.
```

**Pro:** Cleanest. Single source of truth (protocols/desc.md). Inquiry.md gets shorter.
**Con:** Loses the "When you need / When you don't need" guidance that's user-facing-actionable. Forces inquiry.md readers to navigate to protocols/desc.md for the full picture.

**Recommendation: B.1.** Best balance of clarity (explicit cross-reference, examples) and conciseness (~30 lines, similar to what's there).

---

### PIECE C — `thinking_disciplines/protocols/desc.md` update

#### C.1 — Split the existing SYNTHESIZE entry (RECOMMENDED)

In `protocols/desc.md`, find the existing SYNTHESIZE entry under "Transfer Protocols":

OLD:
```markdown
**SYNTHESIZE** — Take scattered discipline outputs and produce a coherent deliverable for someone who wasn't in the thinking process. Decomposes into: sensemaking (resolve stale/inconsistent outputs) + critique (select what matters) + audience-aware restructuring. Quality test: "Can someone who wasn't in the loop act on this?" Named but underspecified — **needs full formalization.**
```

NEW (replace with two entries):
```markdown
**FINDING-COMPILE** — Read a completed inquiry's SIC artifacts (`_branch.md`, `sensemaking.md`, `innovation.md`, `critique.md`) and compile them into the standardized `finding.md` artifact (frontmatter + Question + Finding Summary + Finding + Next Actions + Reasoning + Open Questions), saved inside the inquiry folder. Audience: inquiry-tree-traversers. Implemented inline by `/MVL` and `/MVL+` at the iteration-complete-yes branch. Quality test: "Can someone read ONLY `finding.md` and understand the complete decision?" **Sibling protocol:** SYNTHESIZE (when a project-level artifact is needed in addition to the finding).

**SYNTHESIZE** — Take a completed finding (and possibly other inquiry artifacts) and construct a project-level artifact (specification / plan / report / ADR / RCA / decision document) in the format the project's audience requires. Output saved outside the inquiry folder, in its project location. Decomposes into: sensemaking (resolve stale/inconsistent outputs) + critique (select what matters) + format-specific construction (deriving artifact-specific content like spec frontmatter, invocation patterns, runnable examples). Audience: project consumers (install scripts, spec-reading agents, project documentation readers). Currently performed manually by the human; the formal procedure is named slot for autonomy-ladder Level 2-3+ — **needs full formalization.** Quality test: "Can a project consumer act on this artifact directly, without reading the finding it was constructed from?" **Sibling protocol:** FINDING-COMPILE (the inquiry-verdict artifact that SYNTHESIZE consumes).
```

Also update the Current State count table — Configuration β from `protocols_relevance_check` recommended:
```
| Alive — embedded in commands | 5 | CONFIGURE, STEER, TERMINATE, RESUME, SYNTHESIZE |
```

After this split:
```
| Alive — embedded in commands | 5 | CONFIGURE, STEER, TERMINATE, RESUME, FINDING-COMPILE |
| Alive — named slot, procedurally underspecified | 1 | SYNTHESIZE |
```

(SYNTHESIZE moves out of "embedded in commands" because its procedure is currently manual, not embedded.)

#### C.2 — Keep SYNTHESIZE entry as-is, add new FINDING-COMPILE entry

Less recommended because the existing SYNTHESIZE entry IS the conflation. Keeping it preserves the conflation while adding redundancy.

**Recommendation: C.1.** Replace one entry with two; update the count table.

---

### PIECE D — `/MVL` and `/MVL+` cross-references

#### D.1 — None (do nothing)

- Pro: minimum churn.
- Con: FINDING-COMPILE name lives only in `protocols/desc.md`; not visible at the implementation site.

#### D.2 — Light: one-liner mention (RECOMMENDED)

In `commands/MVL.md`, in the "ITERATION COMPLETE → YES" branch, find the line:
> Write `finding.md` in the inquiry folder. Read all four files...

Replace with:
> Write `finding.md` in the inquiry folder. (This step IS the **FINDING-COMPILE** protocol — see `thinking_disciplines/protocols/desc.md`.) Read all four files...

Same edit in `commands/MVL+.md` (which has the same iteration-complete-yes structure).

**Net edits:** ~3 lines × 2 files = ~6 lines.
**Pro:** Names the protocol where it activates; aids discovery for agents/users reading the spec.
**Con:** Tiny addition; could be seen as noise.

#### D.3 — Fuller: rename section header

Rename the section header from "Write `finding.md`" to "FINDING-COMPILE: write `finding.md`."

**Pro:** Most visible.
**Con:** Adds visual weight to a section that doesn't need it; the implementation is one paragraph; section-header naming for a sub-step feels heavy.

**Recommendation: D.2.** Targeted, minimal, cross-references properly.

---

### PIECE E — Connection to other ongoing work

#### E.1 — Coordination with `protocols_relevance_check` Configuration β

The user has not yet applied Configuration β (the prior audit's recommendation: status table updates + cross-references + autonomy-ladder mapping in `protocols/desc.md`).

The current PIECE C work (split SYNTHESIZE entry into two) **adds to** Configuration β, not replaces it. They should be applied together OR Configuration β can be applied first and then the split applied as a follow-up edit.

**Coordination:**
- If applying Configuration β first: apply Configuration β's status-table updates (4 stale entries fixed) + cross-references + autonomy-ladder mapping. THEN apply C.1's split (SYNTHESIZE entry → FINDING-COMPILE + SYNTHESIZE).
- If applying together: do all updates in one editing pass. The Current State count table reflects both.

**Updated count table (β + C.1 combined):**
```markdown
| Status | Count | Protocols |
|--------|-------|-----------|
| **Alive — embedded in commands** | 5 | CONFIGURE, STEER, TERMINATE, RESUME, FINDING-COMPILE |
| **Alive — partial / generalized** | 3 | BRANCH (rationale only), folder convention, archival (runner-embedded) |
| **Alive — discipline component** | 1 | CV persistence (in `/comprehend`) |
| **Alive — named slot, procedurally underspecified** | 1 | SYNTHESIZE |
| **Removed** | 2 | metadata injection, freshness checks (CLAUDE.md doesn't exist) |
| **Missing — needed for stated goals** | 6 | SCOPE, BRANCH (formal step), MERGE, HANDOFF, BRIEF, VERSION |
```

The autonomy-ladder mapping section that Configuration β recommended adding should also list SYNTHESIZE alongside the 6 missing protocols (since SYNTHESIZE is similarly a Level 2-3+ slot, just named differently — it's "alive but unfilled" rather than "missing").

#### E.2 — Connection to `homegrown/<discipline>/SKILL.md` reorganization

No change needed. The recently-rewritten SKILL.md files in `homegrown/` are for thinking disciplines (cognitive operations), which are a different layer from protocols (operational machinery). Protocols live in `commands/` (where they're embedded in commands) and `thinking_disciplines/protocols/desc.md` (where they're named in the protocols dimension). The split decision applies only to those two files (plus the prior protocols_relevance_check Configuration β).

The `homegrown/` reorganization is independent and continues per its own pattern.

---

## Phase 3 — Test Survivors

| Design | Novelty | Scrutiny survival | Fertility | Actionability | Mechanism independence |
|---|---|---|---|---|---|
| **A.1** (FINDING-COMPILE + SYNTHESIZE) | LOW | STRONG — preserves SYNTHESIZE; explicit verb | LOW | HIGH | Combination-generic + Inversion-generic + Domain-focused |
| **A.2** (FINDING + SYNTHESIZE) | LOW | MEDIUM — protocol/artifact name overlap | LOW | HIGH | Lens-generic |
| **A.3** (COMPILE-FINDING + COMPILE-ARTIFACT) | MEDIUM | MEDIUM — symmetric but drops SYNTHESIZE | LOW | MEDIUM | Domain-focused (rejected on continuity) |
| **A.4** (SYNTHESIZE-finding/artifact) | MEDIUM | WEAK — undermines the split | LOW | MEDIUM | (none — rejected) |
| **A.5** (FINDING-WRITE + SYNTHESIZE) | LOW | MEDIUM — WRITE is generic | LOW | HIGH | (alternate to A.1) |
| **A.6** (VERDICT-COMPILE + ARTIFACT-CONSTRUCT) | HIGH | MEDIUM — semantically clean but disruptive | LOW | MEDIUM | (alternate to A.1) |
| **B.1** (targeted rewrite) | LOW | STRONG | MEDIUM (the explicit when-needed/when-not guidance helps users) | HIGH (~30 line edit) | Lens-generic + Constraint-focused |
| **B.2** (B.1 + autonomy extension) | MEDIUM | STRONG | MEDIUM | MEDIUM (~40 line edit) | (alternate to B.1) |
| **B.3** (delete + reference) | MEDIUM | MEDIUM — loses user-facing examples | LOW | HIGHEST (~5 line edit) | Inversion-focused (system-level) |
| **C.1** (split entry) | LOW | STRONG | HIGH (provides correct vocabulary) | HIGH (~20 line edit) | Combination-focused + Constraint-focused |
| **C.2** (add new, keep) | LOW | WEAK — preserves the conflation | LOW | MEDIUM | (rejected) |
| **D.1** (none) | LOW | MEDIUM — names live only in protocols/desc.md | LOW | HIGHEST (no edit) | Lens-focused (rejected on discoverability) |
| **D.2** (light cross-ref) | LOW | STRONG | MEDIUM (aids discovery) | HIGH (~6 lines × 2 files) | Inversion-generic |
| **D.3** (rename header) | LOW | MEDIUM | LOW | MEDIUM | (alternate to D.2; heavier than needed) |

### Path eliminations

- **A.4 (SYNTHESIZE umbrella)** — undermines the split.
- **C.2 (add new, keep)** — preserves the conflation we're trying to fix.
- **D.1 (no cross-references)** — leaves the protocol name invisible at the implementation site.

### Survivors

- **For naming (A):** A.1 (FINDING-COMPILE + SYNTHESIZE) — recommended. A.5 acceptable alternative.
- **For inquiry.md rewrite (B):** B.1 (targeted rewrite) — recommended. B.2 acceptable enhancement.
- **For protocols/desc.md (C):** C.1 (split entry) — recommended.
- **For /MVL cross-refs (D):** D.2 (light cross-ref) — recommended.
- **For ongoing work (E):** E.1 coordination with Configuration β; E.2 = no change to homegrown.

---

## Phase 3.5 — Assembly Check

The five pieces compose into one coherent edit pass.

### Configuration α — MINIMUM (A.1 + B.1 + C.1 + D.1 + E)

- A.1 names: FINDING-COMPILE + SYNTHESIZE.
- B.1: targeted rewrite of inquiry.md SYNTHESIZE section (~30 lines).
- C.1: split protocols/desc.md SYNTHESIZE entry into two (~20 lines).
- D.1: no /MVL cross-references.
- E: coordinate with Configuration β when user applies it.

**Net effort:** ~50 lines edits across 2 files.
**Net change:** Conflation removed in inquiry.md and protocols/desc.md. /MVL/MVL+ specs unchanged (FINDING-COMPILE name only visible in protocols/desc.md).
**Trade-off:** Lower discoverability for the FINDING-COMPILE name; users reading /MVL spec don't see the protocol name explicitly.

### Configuration β — RECOMMENDED (A.1 + B.1 + C.1 + D.2 + E)

All of α PLUS:
- D.2: one-liner mention in /MVL and /MVL+ specs at the iteration-complete-yes branch.

**Net effort:** ~56 lines edits across 4 files (~6 extra lines for D.2).
**Net change:** Same as α plus FINDING-COMPILE name visible at implementation site.
**Use case:** User wants the protocol vocabulary discoverable from both directions (concept-first via protocols/desc.md AND implementation-first via /MVL/MVL+).

### Configuration γ — MAXIMAL (A.1 + B.2 + C.1 + D.3 + E)

All of β PLUS:
- B.2: extended autonomy-ladder discussion in inquiry.md (~10 extra lines).
- D.3: rename section header in /MVL/MVL+ to "FINDING-COMPILE: write finding.md" (heavier visibility).

**Net effort:** ~70 lines.
**Net change:** Same as β plus more emphasis on autonomy-ladder connection and section-header visibility.
**Trade-off:** Slightly heavier; some additions are arguably noise.

### Recommended default: **Configuration β** (A.1 + B.1 + C.1 + D.2 + E)

Reasoning:
- A.1 preserves continuity (SYNTHESIZE name retained) and is verb-explicit.
- B.1 is the right scope for inquiry.md — replaces the existing section with a same-size cleaner version; includes user-facing when-needed/when-not guidance.
- C.1 cleanly splits the conflated entry with sibling cross-references.
- D.2 puts the protocol name at the implementation site without overdoing visual weight.
- E ensures coordination with Configuration β from the prior audit (which the user has not yet applied).

Configuration α is acceptable if the user wants minimum-effort intervention. Configuration γ is over-engineered for the current decision; defer until the autonomy ladder progression actually warrants more emphasis.

---

## Phase 4 — Survivors for Critique

### Configuration choices to evaluate

- **α** — A.1 + B.1 + C.1 + D.1 + E (minimum)
- **β** — A.1 + B.1 + C.1 + D.2 + E (recommended)
- **γ** — A.1 + B.2 + C.1 + D.3 + E (maximal)

### Per-piece options to evaluate

- A: A.1 vs A.5 (alternate naming)
- B: B.1 vs B.2 (with/without autonomy extension)
- C: C.1 (split) — only survivor
- D: D.1 vs D.2 vs D.3
- E: coordination plan vs apply-Configuration-β-first

### Recommended default for critique to challenge

**Configuration β** = A.1 + B.1 + C.1 + D.2 + E

---

## Mechanism Coverage (Telemetry)

- **Generators applied:** 4 / 4 (Combination, Absence Recognition, Domain Transfer, Extrapolation)
- **Framers applied:** 3 / 3 (Lens Shifting, Constraint Manipulation, Inversion)
- **Convergence:** YES — multiple mechanisms converge:
  - On A.1 (FINDING-COMPILE + SYNTHESIZE): Combination-generic + Inversion-generic + Domain-focused
  - On C.1 (split entry): Combination-generic + Constraint-focused (sibling cross-references)
  - On D.2 (light cross-ref): Inversion-generic + Lens-focused (discoverability)
  - On the overall split's validity: Domain-controversial (database normalization analogy) + Combination-controversial (future /synthesize command)
- **Survivors tested:** All viable paths tested for novelty, scrutiny survival, fertility, actionability, mechanism independence.
- **Failure modes observed:**
  - Premature evaluation? No.
  - Single-mechanism trap? No.
  - Early frame lock? No — explored α, β, γ configurations; landed on β with reasoning.
  - Innovation without grounding? No — every design has concrete proposed wording.
  - Mechanism exhaustion? No.
  - Survival bias? Tested the most uncomfortable paths (A.4 SYNTHESIZE-umbrella, B.3 delete entirely, A.6 VERDICT-COMPILE) — assessed and rejected with explicit reasoning.
- **Overall: PROCEED.** Coverage strong, convergence on Configuration β, all survivors tested. Critique can adversarially evaluate.
