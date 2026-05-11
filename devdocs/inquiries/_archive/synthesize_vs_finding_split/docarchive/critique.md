# Critique: synthesize_vs_finding_split

## User Input

`devdocs/inquiries/synthesize_vs_finding_split/`

Read all files. Construct evaluation dimensions from sensemaking + decomposition. Run prosecution + defense + collision on each surviving option. Confirm or refine the innovation's recommended Configuration β (A.1 + B.1 + C.1 + D.2 + E). Apply assembly check. Produce a concrete final punch list.

Save output as `devdocs/inquiries/synthesize_vs_finding_split/critique.md`.

---

## Phase 0 — Dimension Construction

Extracted from sensemaking's verdict (TWO distinct protocols, currently conflated) and the user's stated dimensions:

| Dimension | What it asks | Weight | Source |
|---|---|---|---|
| **Structural-correctness** | Does this option honor the sensemaking's two-protocol verdict (two structurally distinct operations: input/output asymmetry, output relationship asymmetry, construction work asymmetry)? | HIGH | Sensemaking SV6 — verdict (b), three asymmetries justify the split. |
| **Naming-clarity** | Are the names self-evident, distinct from artifact names, free of disambiguation friction? | HIGH | The names will live in docs for a long time; ambiguity is a recurring maintenance cost. |
| **Doc-coherence** | Do the proposed edits leave the docs internally consistent (procedure-level content in command files; protocol-definition content in `protocols/desc.md`)? | HIGH | Sensemaking flagged the existing conflation in inquiry.md and protocols/desc.md; the fix must not introduce new incoherence. |
| **Future-readiness** | Does the option preserve SYNTHESIZE as a named slot for autonomy-ladder Level 2-3+ artifact-construction capability? | HIGH | Sensemaking's strategic justification — the split's main long-term value. |
| **Edit-cost** | Immediate effort to apply? | MEDIUM | All options are within ≤2 hours; tiebreaker dimension. |
| **Discoverability** | Where do users / agents encounter the protocol names — only in `protocols/desc.md`, or also at implementation sites in `/MVL`/`/MVL+`/inquiry? | MEDIUM | Aids agents parsing the protocol structure; matters for cross-platform skill use. |
| **Coordination-cost** | How does this interact with the pending `protocols_relevance_check` Configuration β work that the user has not yet applied? | MEDIUM | The user has open work elsewhere; the audit's recommendations must compose with it. |

### Dimension validation

Cross-check against sensemaking perspectives:
- Technical/Logical → structural-correctness, naming-clarity ✓
- Human/User → naming-clarity, discoverability ✓
- Strategic/Long-term → future-readiness ✓
- Risk/Failure → doc-coherence (drift risk), coordination-cost ✓
- Resource/Feasibility → edit-cost ✓
- Definitional/Consistency → doc-coherence, structural-correctness ✓

All sensemaking perspectives covered. No critical-weight dimension blindness.

---

## Phase 1 — Fitness Landscape

### Viable region

High structural-correctness + naming-clarity HIGH + doc-coherence HIGH + future-readiness HIGH + edit-cost LOW-MEDIUM + discoverability MEDIUM-HIGH + coordination-cost LOW. Configuration β (A.1 + B.1 + C.1 + D.2 + E) sits squarely here.

### Boundary region

Options that score HIGH on most dimensions but have one weak axis:
- A.5 (FINDING-WRITE + SYNTHESIZE): naming-clarity slightly weaker (WRITE undersells the operation).
- B.2 (B.1 + autonomy extension): doc-coherence slightly weaker (mild duplication with `enes/desc.md`).
- D.1 (no cross-references): discoverability LOW.

### Dead region

Options that fail a critical dimension:
- A.2 (FINDING + SYNTHESIZE): naming-clarity fails — protocol/artifact name overlap.
- A.3 (COMPILE-FINDING + COMPILE-ARTIFACT): coordination-cost HIGH (drops SYNTHESIZE; breaks continuity with prior audit).
- A.4 (SYNTHESIZE-finding/SYNTHESIZE-artifact): structural-correctness FAILS — undermines the split (already killed in innovation).
- A.6 (VERDICT-COMPILE + ARTIFACT-CONSTRUCT): coordination-cost HIGH; introduces 2 new names that require updating multiple docs.
- B.3 (delete + reference): doc-coherence FAILS — puts procedure-level content (when-needed guidance) in the wrong place.
- D.3 (rename header): doc-coherence FAILS — visual-weight inconsistency with other section headers in /MVL/MVL+.

---

## Phase 2 — Adversarial Evaluation

### A.1 — FINDING-COMPILE + SYNTHESIZE

**Landscape position preview:** Viable region. All weighted dimensions positive.

**Prosecution.** "FINDING-COMPILE" is verbose. Six syllables, hyphenated, awkward to type in conversation. SYNTHESIZE retains a name that, in the prior `inquiry.md` spec, described summarization rather than artifact-construction; using the same word for what's now a different (more specific) role might confuse users who remember the old framing. Also: the hyphenated form is a stylistic choice the project hasn't fully adopted (most existing protocols are single-word: CONFIGURE, STEER, TERMINATE, RESUME).

**Defense.** Verb-explicit: the operation is obvious from the name (compile a finding). Preserves SYNTHESIZE in `protocols/desc.md` and the prior `protocols_relevance_check` finding — zero coordination cost on existing references. The hyphenated compound name (FINDING-COMPILE) follows the same pattern as VERDICT-COMPILE / COMPILE-FINDING alternatives but reads more naturally as a verb-noun phrase. Three independent mechanisms in innovation converged on this naming (Combination-generic + Inversion-generic + Domain-focused via compiler-pipeline analogy) — convergence indicates structural fit.

**Collision.** Prosecution's verbosity concern is mild and aesthetic, not structural. The hyphenation pattern is a small departure from existing protocol names but matches industry convention for compound operations. The "old SYNTHESIZE = summarization" association will fade as the new spec ships; transient confusion is acceptable cost. Defense's continuity argument is decisive: keeping SYNTHESIZE in protocols/desc.md and the prior audit avoids cascading rename work.

**Verdict: SURVIVE — clean.** All HIGH-weight dimensions pass. Edit-cost LOW (just adopt the names). Discoverability HIGH (when paired with D.2). Coordination-cost LOW.

---

### A.2 — FINDING + SYNTHESIZE

**Landscape position preview:** Boundary → Dead — naming-clarity fails on protocol/artifact overlap.

**Prosecution.** "FINDING" is also the name of the artifact (`finding.md`). Sentences like "the FINDING protocol produces the FINDING artifact" or "after FINDING, see the finding for next actions" introduce a real disambiguation friction. The project already manages a protocols-vs-disciplines distinction (per `what_is_protocol.md`); adding a third overlap (FINDING-protocol vs `finding.md`-artifact) compounds the cognitive load.

**Defense.** Shorter than FINDING-COMPILE. Some projects deliberately couple protocol names to artifact names for memorability (e.g., "the BUILD step produces the build artifact").

**Collision.** Prosecution wins on naming-clarity. The artifact-protocol coupling is a legitimate naming pattern in some domains, but it requires consistent disambiguation in prose ("the FINDING step" vs "the finding"). In a project that's already managing multiple overlapping vocabularies, adding another overlap is a real maintenance cost. Naming-clarity is HIGH-weighted; this fails the critical dimension.

**Verdict: KILL on naming-clarity grounds.** Seed: keep the verb-explicit form (FINDING-COMPILE) to preserve the operation/artifact distinction.

---

### A.3 — COMPILE-FINDING + COMPILE-ARTIFACT

**Landscape position preview:** Dead — coordination-cost + semantic-accuracy.

**Prosecution.** Drops SYNTHESIZE entirely. The prior `protocols_relevance_check` finding and `protocols/desc.md` use SYNTHESIZE as the established name; renaming to COMPILE-ARTIFACT requires updating those (and any future docs that reference SYNTHESIZE) for marginal aesthetic gain. Also: "compile" is technically narrower than "synthesize" — synthesis implies combining heterogeneous elements into a new whole (which is exactly what artifact-construction does: combine a finding + project context + format requirements + new artifact-specific content). "Compile" suggests a more mechanical translation, which understates the construction work.

**Defense.** Symmetric verb-first naming. Consistent COMPILE-X pattern.

**Collision.** Prosecution wins on two dimensions: coordination-cost (renaming SYNTHESIZE breaks continuity) and semantic-accuracy (synthesize is the correct verb for artifact-construction). Symmetry is aesthetic, not load-bearing.

**Verdict: KILL on coordination-cost + semantic-accuracy grounds.**

---

### A.5 — FINDING-WRITE + SYNTHESIZE

**Landscape position preview:** Boundary — viable but slightly weaker than A.1 on naming-clarity.

**Prosecution.** "WRITE" is generic. The operation does substantially more than write — it COMPILES from multiple sources (4 SIC files), applies a structured template (Question + Finding Summary + Finding + Next Actions + Reasoning + Open Questions), resolves cross-iteration consistency, applies three style rules, and writes the result. Calling this "WRITE" undersells the compilation work and fails to distinguish it from any plain file-write operation.

**Defense.** Shorter than FINDING-COMPILE (10 chars vs 14). Matches `/MVL` spec's literal wording ("Write `finding.md`"). Lower learning curve for users skimming /MVL.

**Collision.** Prosecution's "WRITE undersells" is right — the protocol name should describe the operation, not just the action verb at the implementation site. /MVL's "Write finding.md" is a description of the action; the protocol name should describe what's being done conceptually. FINDING-COMPILE is more accurate.

**Verdict: SURVIVE-with-caveat.** Viable as an alternative to A.1 if user prioritizes brevity over operation-accuracy. A.1 dominates on naming-clarity (HIGH-weighted).

---

### A.6 — VERDICT-COMPILE + ARTIFACT-CONSTRUCT

**Landscape position preview:** Dead — coordination-cost.

**Prosecution.** Drops SYNTHESIZE; introduces TWO new names. Every reference to SYNTHESIZE in `protocols/desc.md`, `protocols_relevance_check` finding, `what_is_protocol.md`, etc. requires updating. ARTIFACT-CONSTRUCT is also slightly awkward as a compound (CONSTRUCT-ARTIFACT would be more natural). Coordination cost is the highest of any A option.

**Defense.** Semantically cleanest — VERDICT and ARTIFACT capture the distinct roles precisely. If naming were greenfield, this would be the strongest choice.

**Collision.** Prosecution wins on coordination-cost (HIGH). The semantic improvement (~10% gain in name precision) doesn't justify the migration churn (~5+ docs to update). The greenfield framing fails because the project ISN'T greenfield — SYNTHESIZE is established.

**Verdict: KILL on coordination-cost grounds.** Seed: if SYNTHESIZE were never established in `protocols/desc.md`, A.6 would be the cleaner choice; given existing usage, preserving SYNTHESIZE wins.

---

### B.1 — Targeted rewrite of inquiry.md SYNTHESIZE section

**Landscape position preview:** Viable — clean.

**Prosecution.** ~30 lines of rewrite. The new section replaces the prior "It transforms PRESENTATION" framing with "Artifact Construction" framing — some users familiar with the prior phrasing may need to re-orient. The when-needed/when-not bullet structure is more procedural than the prior prose; some users prefer prose for explanation, bullets for instruction.

**Defense.** Explicit role definition (artifact construction, distinct from finding-compile); cross-references FINDING-COMPILE protocol; gives concrete examples (designing /scope → spec.md construction); preserves the "Quality test" pattern from the original; same rough size as original (~30 lines replacing ~33 lines = roughly net-zero edit-cost). The when-needed/when-not bullets directly address the user's friction point (the prior "is this redundant?" question came from ambiguity about when SYNTHESIZE actually applies).

**Collision.** Defense wins decisively. Prosecution's "lost original framing" complaint identifies exactly what the audit recommends — the original framing was the conflation; replacing it is the fix. The bullet/prose preference is a stylistic micro-issue, not a structural concern.

**Verdict: SURVIVE — clean.** All HIGH-weight dimensions pass.

---

### B.2 — B.1 + autonomy extension

**Landscape position preview:** Boundary — viable but slightly weaker on doc-coherence.

**Prosecution.** Adds ~10 lines of autonomy-ladder discussion that duplicates content in `enes/desc.md` and `protocols/what_is_protocol.md`. The autonomy-ladder context may not be load-bearing for users reading inquiry.md (they're trying to understand SYNTHESIZE-as-protocol, not the project's autonomy roadmap). Mild redundancy across project docs.

**Defense.** Strengthens the future-readiness dimension explicit in inquiry.md; surfaces why the slot is worth carrying when empty. New readers don't have to navigate to `enes/desc.md` to understand the rationale.

**Collision.** Prosecution's "duplication" point is moderate. B.1 already references the autonomy-ladder briefly ("named slot for autonomy-ladder Level 2-3+"); B.2's expansion adds explicit context but at the cost of doc-coherence (slight duplication). User judgment call: if they want strong autonomy framing in inquiry.md, B.2; if they want lean spec, B.1.

**Verdict: SURVIVE-with-caveat.** Defensible variant. B.1 is the leaner default.

---

### B.3 — Delete + reference

**Landscape position preview:** Dead — doc-coherence fails.

**Prosecution.** Loses the user-facing when-needed/when-not guidance that's actually-actionable for users running `/inquiry`. Forces inquiry.md readers to navigate to `protocols/desc.md` for the full picture. The "for full protocol definitions, see..." pattern works for canonical specs but not for procedure-level guidance. Doc-coherence specifically: procedure-level "when do I run this?" content belongs in the command file (inquiry.md) where the user invokes the command; protocol-definition content (what is this operation conceptually?) belongs in the architectural map (protocols/desc.md). B.3 puts procedure content in the wrong place (or eliminates it).

**Defense.** Cleanest. Single source of truth (protocols/desc.md). Inquiry.md gets shorter (~25 lines reduced).

**Collision.** Prosecution wins on doc-coherence. Single-source-of-truth is a sound principle, but it applies at the right scope: the protocol DEFINITION lives in protocols/desc.md (single source); the procedure-level USAGE GUIDANCE lives in inquiry.md (where users invoke). B.3 conflates these scopes.

**Verdict: KILL on doc-coherence grounds.** Seed: B.1 puts procedure-level content in inquiry.md and protocol-definition content in protocols/desc.md — each in the right place.

---

### C.1 — Split protocols/desc.md SYNTHESIZE entry

**Landscape position preview:** Viable — clean (only survivor in piece C).

**Prosecution.** ~20-line edit. Sibling cross-references add maintenance burden (each entry mentions the other; if either evolves, both may need updating). If Configuration β from `protocols_relevance_check` hasn't been applied yet, the user has to coordinate two pending changes to the same file.

**Defense.** Cleanly resolves the conflation in protocols/desc.md. Sibling cross-references aid navigation. Both protocols are properly named in the architectural map. Updates the count table to reflect actual current state. Aligns with the prior `protocols_relevance_check` finding's recognition that SYNTHESIZE was alive in two places with different shapes — formalizes that recognition.

**Collision.** Prosecution's coordination cost is real but small. The user can apply both edits in one pass; there's no conflict between Configuration β's status-table updates (4 stale entries fixed) and C.1's split (one entry → two). Sibling-reference maintenance is light (~1 sentence each direction).

**Verdict: SURVIVE — clean.**

---

### D.1 — No /MVL cross-references

**Landscape position preview:** Boundary → Dead — discoverability.

**Prosecution.** FINDING-COMPILE name lives only in `protocols/desc.md`. Users reading `/MVL` spec don't see the protocol name. External agents (Codex, Claude.ai consumers, third-party skill runtimes) parsing the protocol structure don't find FINDING-COMPILE at the implementation site. Discoverability LOW. The cost of D.2 (~6 lines across 2 files) is trivial; skipping it for "minimum churn" is austerity for its own sake.

**Defense.** Minimum churn. /MVL/MVL+ specs unchanged.

**Collision.** Prosecution wins on discoverability (MEDIUM-weighted). The marginal edit cost of D.2 (~6 lines) is much smaller than the discoverability gain.

**Verdict: KILL on discoverability grounds.** Seed: D.2 is the right minimum.

---

### D.2 — Light cross-reference

**Landscape position preview:** Viable — clean.

**Prosecution.** Adds a parenthetical mention in /MVL and /MVL+ specs. Some readers may find inline parentheticals slightly distracting in procedure-style specs (parentheticals interrupt the imperative flow).

**Defense.** Names the protocol where it activates; aids discovery for agents and users reading the spec; preserves the spec's linear structure (no new headers; just a parenthetical). The parenthetical pattern is established elsewhere in /MVL (cross-references to discipline files use similar inline markup).

**Collision.** Defense wins. The parenthetical's mild distraction is much smaller than the discoverability gain. /MVL's existing style accommodates parentheticals.

**Verdict: SURVIVE — clean.**

---

### D.3 — Rename section header

**Landscape position preview:** Dead — doc-coherence fails (visual-weight inconsistency).

**Prosecution.** Adds visual weight to a section that doesn't need it. The "FINDING-COMPILE" prefix to "Write `finding.md`" creates a heavy header for what's actually a sub-step within /MVL's iteration-complete-yes branch. /MVL's other section headers are functional and lifecycle-oriented ("If NEW", "If RESUME", "EXECUTE PIPELINE", "If ITERATION COMPLETE") — adding a protocol-named header to one sub-step inside the YES branch breaks that pattern. Headers should reflect lifecycle states, not protocol names.

**Defense.** Most visible cross-reference.

**Collision.** Prosecution wins on doc-coherence. D.2 achieves discoverability without the visual-weight cost or the header-pattern violation.

**Verdict: KILL — D.2 dominates D.3 on doc-coherence.**

---

### E — Coordination with Configuration β

Not a candidate for adversarial evaluation; procedural concern.

**Status:** Configuration β from `protocols_relevance_check` is pending (status table updates, cross-references, autonomy-ladder mapping). C.1's split (one SYNTHESIZE entry → FINDING-COMPILE + SYNTHESIZE) ADDS to Configuration β; doesn't conflict.

**Recommendation:** apply both in one editing pass. The combined update produces a unified protocols/desc.md with: 4 stale entries fixed (Configuration β), cross-references added (Configuration β), autonomy-ladder mapping section added (Configuration β), AND the SYNTHESIZE entry split into FINDING-COMPILE + SYNTHESIZE (C.1), with the count table reflecting the combined state.

If user wants to stage: Configuration β first, then C.1 as follow-up. Either order works.

---

## Phase 3 — Verdicts (consolidated)

| Candidate | Verdict | Critical caveat |
|---|---|---|
| **A.1** (FINDING-COMPILE + SYNTHESIZE) | SURVIVE — clean | None |
| **A.2** (FINDING + SYNTHESIZE) | KILL | Naming-clarity — protocol/artifact name overlap |
| **A.3** (COMPILE-FINDING + COMPILE-ARTIFACT) | KILL | Coordination-cost + semantic-accuracy |
| **A.5** (FINDING-WRITE + SYNTHESIZE) | SURVIVE-with-caveat | WRITE undersells operation; A.1 dominates on naming-clarity |
| **A.6** (VERDICT-COMPILE + ARTIFACT-CONSTRUCT) | KILL | Coordination-cost (drops established SYNTHESIZE) |
| **B.1** (targeted rewrite) | SURVIVE — clean | None |
| **B.2** (B.1 + autonomy extension) | SURVIVE-with-caveat | Mild duplication with `enes/desc.md`; defensible variant |
| **B.3** (delete + reference) | KILL | Doc-coherence — wrong content in wrong place |
| **C.1** (split entry) | SURVIVE — clean | Coordinate with Configuration β |
| **D.1** (no cross-refs) | KILL | Discoverability — D.2 dominates at trivial cost |
| **D.2** (light cross-ref) | SURVIVE — clean | None |
| **D.3** (rename header) | KILL | Doc-coherence — visual-weight inconsistency with other section headers |

---

## Phase 3.5 — Assembly Check

### Survivors entering assembly

- **A:** A.1 (clean), A.5 (caveat alternative)
- **B:** B.1 (clean), B.2 (caveat — defensible variant)
- **C:** C.1 (clean — single survivor)
- **D:** D.2 (clean — single survivor)

### Configuration evaluation

#### Configuration α (A.1 + B.1 + C.1 + D.1 + E)

| Dimension | Score |
|---|---|
| Structural-correctness | HIGH |
| Naming-clarity | HIGH |
| Doc-coherence | HIGH |
| Future-readiness | HIGH |
| Edit-cost | LOW |
| **Discoverability** | **LOW** (D.1 = no cross-refs) |
| Coordination-cost | LOW |

**Verdict: KILL.** Anchor (D.1) was killed individually; α inherits the discoverability failure. If user wants minimum effort, replace D.1 with D.2 → that's β.

#### Configuration β (A.1 + B.1 + C.1 + D.2 + E)

| Dimension | Score |
|---|---|
| Structural-correctness | HIGH |
| Naming-clarity | HIGH |
| Doc-coherence | HIGH |
| Future-readiness | HIGH |
| Edit-cost | MEDIUM |
| Discoverability | HIGH |
| Coordination-cost | LOW |

**Adversarial test on β.**

**Prosecution.** β edits 4 files (`commands/inquiry.md`, `thinking_disciplines/protocols/desc.md`, `commands/MVL.md`, `commands/MVL+.md`). Total ~56 lines of edits. The split adds vocabulary (FINDING-COMPILE) that the user has to maintain alongside SYNTHESIZE. Risk: if SYNTHESIZE-as-artifact-construction never gets formalized (Level 2-3+ never ships), the named slot stays empty forever — vocabulary bloat for a capability that doesn't materialize.

**Defense.** Every weighted dimension scores HIGH. The split is structurally justified (sensemaking's three asymmetries). Each component is independently a clean SURVIVE. Edit-cost is moderate. The "named-but-deferred" pattern is established in the project (per `what_is_protocol.md`); SYNTHESIZE-as-empty-slot is consistent with that pattern. If autonomy-ladder Level 2-3+ ships, the slot is ready; if it doesn't, the carrying cost is small (one doc entry).

**Collision.** Defense wins. Prosecution's "vocabulary bloat" concern is the same trajectory-bet question that the protocols dimension itself rests on — accepted in `protocols_relevance_check` and `what_is_protocol.md`. Consistency requires applying it here.

**Verdict: SURVIVE — recommended default.**

#### Configuration β' (A.1 + B.2 + C.1 + D.2 + E) — with autonomy extension

| Dimension | Score |
|---|---|
| Structural-correctness | HIGH |
| Naming-clarity | HIGH |
| Doc-coherence | MEDIUM-HIGH (mild duplication with enes/desc.md) |
| Future-readiness | HIGH (stronger framing) |
| Edit-cost | MEDIUM (slightly higher than β) |
| Discoverability | HIGH |
| Coordination-cost | LOW |

**Verdict: SURVIVE-with-caveat — defensible variant.** Choose if user wants stronger autonomy-ladder framing in inquiry.md and accepts mild duplication. β is the leaner default.

#### Configuration γ (A.1 + B.2 + C.1 + D.3 + E)

| Dimension | Score |
|---|---|
| Doc-coherence | LOW (D.3 violates header-pattern) |
| (other dimensions) | HIGH |

**Verdict: KILL.** Anchor (D.3) is killed; γ inherits the doc-coherence failure.

### Convergence check

Configuration β survives as the recommended default. β' is a defensible variant. α and γ are killed (anchors fail individual dimensions).

The landscape is stable: critique confirmed innovation's β recommendation with explicit kills on α (D.1 fails discoverability), γ (D.3 fails doc-coherence), and the dominated piece-level options (A.2, A.3, A.6, B.3, D.1, D.3).

---

## Phase 4 — Coverage + Convergence

### Accumulator update

| Candidate | Verdict | Dimension that dominated |
|---|---|---|
| A.1 | SURVIVE | All HIGH-weight pass |
| A.2 | KILL | Naming-clarity |
| A.3 | KILL | Coordination-cost + semantic-accuracy |
| A.5 | SURVIVE-with-caveat | Operation-accuracy (A.1 dominates) |
| A.6 | KILL | Coordination-cost |
| B.1 | SURVIVE | All HIGH-weight pass |
| B.2 | SURVIVE-with-caveat | Doc-coherence (mild duplication) |
| B.3 | KILL | Doc-coherence (wrong content placement) |
| C.1 | SURVIVE | All HIGH-weight pass |
| D.1 | KILL | Discoverability |
| D.2 | SURVIVE | All HIGH-weight pass |
| D.3 | KILL | Doc-coherence (header-pattern violation) |
| Config α | KILL | Inherited from D.1 |
| Config β | SURVIVE — recommended | All HIGH-weight pass |
| Config β' | SURVIVE-with-caveat | Defensible variant |
| Config γ | KILL | Inherited from D.3 |

### Coverage assessment

- All A naming options evaluated (5 candidates).
- All B inquiry.md rewrite options evaluated (3 candidates).
- C single survivor evaluated.
- All D /MVL cross-reference options evaluated (3 candidates).
- E procedural — coordination plan stated.
- 4 candidate configurations (α, β, β', γ) considered.
- No unexplored region likely to contain better candidates.

### Convergence signal: **TERMINATE**

- Clean SURVIVE exists: A.1, B.1, C.1, D.2 individually; Configuration β as compound.
- Coverage comprehensive.
- Landscape stable; critique confirmed innovation's β recommendation with explicit kills on alternatives.

---

## Final Punch List

### Recommended: Configuration β (A.1 + B.1 + C.1 + D.2 + E)

#### Step 1 — Edit `commands/inquiry.md` (B.1)

Replace the existing SYNTHESIZE section (lines 252-285) with the following:

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

**Net edits:** ~30 lines replacing ~33 lines (rough net-zero).

#### Step 2 — Edit `thinking_disciplines/protocols/desc.md` (C.1)

In the Transfer Protocols section, replace the existing SYNTHESIZE entry with two entries:

```markdown
**FINDING-COMPILE** — Read a completed inquiry's SIC artifacts (`_branch.md`, `sensemaking.md`, `innovation.md`, `critique.md`) and compile them into the standardized `finding.md` artifact (frontmatter + Question + Finding Summary + Finding + Next Actions + Reasoning + Open Questions), saved inside the inquiry folder. Audience: inquiry-tree-traversers. Implemented inline by `/MVL` and `/MVL+` at the iteration-complete-yes branch. Quality test: "Can someone read ONLY `finding.md` and understand the complete decision?" **Sibling protocol:** SYNTHESIZE (when a project-level artifact is needed in addition to the finding).

**SYNTHESIZE** — Take a completed finding (and possibly other inquiry artifacts) and construct a project-level artifact (specification / plan / report / ADR / RCA / decision document) in the format the project's audience requires. Output saved outside the inquiry folder, in its project location. Decomposes into: sensemaking (resolve stale/inconsistent outputs) + critique (select what matters) + format-specific construction (deriving artifact-specific content like spec frontmatter, invocation patterns, runnable examples). Audience: project consumers (install scripts, spec-reading agents, project documentation readers). Currently performed manually by the human; the formal procedure is named slot for autonomy-ladder Level 2-3+ — **needs full formalization.** Quality test: "Can a project consumer act on this artifact directly, without reading the finding it was constructed from?" **Sibling protocol:** FINDING-COMPILE (the inquiry-verdict artifact that SYNTHESIZE consumes).
```

Update the Current State count table to reflect both this split AND Configuration β's pending updates. If applying together with Configuration β:

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

If Configuration β isn't applied: keep the existing count structure, just split SYNTHESIZE row into the two new rows (FINDING-COMPILE in alive-embedded; SYNTHESIZE in a new alive-named-slot row).

#### Step 3 — Edit `commands/MVL.md` (D.2)

In the "If ITERATION COMPLETE → YES" branch, find the line:

> Write `finding.md` in the inquiry folder. Read all four files...

Replace with:

> Write `finding.md` in the inquiry folder. (This step IS the **FINDING-COMPILE** protocol — see `thinking_disciplines/protocols/desc.md`.) Read all four files...

#### Step 4 — Edit `commands/MVL+.md` (D.2)

Same edit as Step 3, applied to `commands/MVL+.md`'s "If ITERATION COMPLETE → YES" branch:

> Write `finding.md` in the inquiry folder. (This step IS the **FINDING-COMPILE** protocol — see `thinking_disciplines/protocols/desc.md`.) Read all six files...

(Note: /MVL+ reads six files instead of four because of the additional E and D outputs.)

#### Step 5 — Coordinate with `protocols_relevance_check` Configuration β (E)

If Configuration β from the prior `protocols_relevance_check` finding has not yet been applied:
- Apply the C.1 split (Step 2 above) alongside Configuration β's existing recommendations (status table updates: 4 stale entries fixed; cross-references; autonomy-ladder mapping section).
- The combined update produces one unified `protocols/desc.md` with all changes integrated.
- The autonomy-ladder mapping section that Configuration β recommends adding should also reference SYNTHESIZE alongside the 6 missing protocols (since SYNTHESIZE is similarly a Level 2-3+ slot, just classified as "alive-but-underspecified" rather than "missing").

If Configuration β has already been applied:
- Apply C.1's split as a follow-up edit. The protocols/desc.md count table will need adjustment; everything else from Configuration β is unaffected.

---

### Fallback: Configuration α (no /MVL cross-references)

If user wants minimum-effort intervention and accepts lower discoverability for the FINDING-COMPILE name:
- Apply Steps 1, 2, 5 only. Skip Steps 3 and 4 (no /MVL/MVL+ cross-references).
- Net effort: ~50 lines across 2 files (vs ~56 across 4 in β).
- Trade-off: FINDING-COMPILE only discoverable via `protocols/desc.md`; not visible at the `/MVL` activation site.

**Recommendation:** prefer β over α. The marginal cost (~6 lines across 2 files) is too small to justify the discoverability loss.

---

### Variant: Configuration β' (with autonomy extension in inquiry.md)

If user wants stronger autonomy-ladder framing in inquiry.md:
- Apply Steps 1-5 of β, but use B.2's wording for the inquiry.md SYNTHESIZE section (B.1's content + an additional paragraph on Level 2-3+ autonomy connection).
- Net effort: ~66 lines across 4 files.
- Trade-off: stronger future-readiness emphasis; mild duplication with `enes/desc.md`.

**Recommendation:** β is the leaner default; β' is a defensible variant. User judgment call.

---

### Killed configurations (with revival triggers)

- **A.2 (FINDING + SYNTHESIZE):** revisit only if the project's overall vocabulary shifts to favor coupling protocol names with artifact names (no current signal).
- **A.3 (COMPILE-FINDING + COMPILE-ARTIFACT):** revisit if SYNTHESIZE is dropped from `protocols/desc.md` for unrelated reasons (no current signal).
- **A.6 (VERDICT-COMPILE + ARTIFACT-CONSTRUCT):** revisit during a comprehensive vocabulary refactor across the protocols dimension (out of scope).
- **B.3 (delete from inquiry.md):** revisit if `protocols/desc.md` evolves to include procedure-level guidance (currently it's architectural only).
- **D.1 (no cross-references):** unlikely revival; D.2's cost is trivial.
- **D.3 (rename section header):** revisit only if /MVL/MVL+'s overall section-header pattern shifts to protocol-named headers (no current signal).

---

## Convergence Telemetry

- **Dimensions evaluated:** 7 dimensions, all critical-weight covered for every candidate. YES.
- **Adversarial strength:** STRONG. Prosecution challenged each candidate's strongest dimension (e.g., A.1's verbosity; B.1's tone-shift from prior framing; β's vocabulary bloat). Defense had to genuinely answer.
- **Landscape stability:** STABLE — critique confirmed innovation's β recommendation with explicit kills on α (anchor failed discoverability) and γ (anchor failed doc-coherence) at the configuration level, and on dominated piece-level options.
- **Clean SURVIVE:** YES — A.1, B.1, C.1, D.2 individually clean; Configuration β as compound clean.
- **Failure modes observed:** none. No rubber-stamping (6 KILLs reasoned). No nitpicking (verdicts severity-weighted; minor concerns become caveats, not kills). No wrong dimensions (validated against sensemaking perspectives in Phase 0). No false convergence (assembly check considered β' variant explicitly). No evaluation drift.
- **Overall: PROCEED.** Configuration β confirmed as recommended default with α as fallback and β' as defensible variant. Punch list is actionable with proposed wording.
