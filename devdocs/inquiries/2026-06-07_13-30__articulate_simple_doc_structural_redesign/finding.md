---
status: active
model: claude-opus-4-7[1m]
effort: max
refines: devdocs/inquiries/2026-06-07_12-22__section9_two_pass_deferral_cascade3_resolution/finding.md
---
# Finding: Articulate_simple Doc — Structural-Layer Redesign

## Changes from Prior

**Prior path**: `devdocs/inquiries/2026-06-07_12-22__section9_two_pass_deferral_cascade3_resolution/finding.md` (the 12-22 finding that resolved §9 to "complete as pre-context framing" and triggered the multi-section doc revisions which produced the current 911-line state of `devdocs/how_articulate_simple_should_be.md`). This inquiry takes the rewritten doc and asks the **structural-layer** question the meaning-layer cascades did not address: now that meaning is settled, what is the right organization for the doc's sections, schema, and information architecture?

**Revision trigger**: structural-layer review after four meaning-layer rewrites. The 21-52, 23-18, 11-40, and 12-22 findings substantively refined the doc's content (Meta-question to 2-shape; MultiDepth to literal + identified-purpose-motivation-ambiguities; Rephrase to multi-source composition + variant-set; §9 to "complete as pre-context framing"). Each rewrite was meaning-layer-focused; the doc's structural-layer organization (section ordering, section grouping, information architecture, schema shape, scattered "what changed" notes, §11 inheritance map's growing size, §13 worked examples placement) was not re-examined as a whole. The user requested this redesign: "okay lets now dive deep for devdocs/how_articulate_simple_should_be.md in strcutural layer (because of recent changes, i thik we should redo it )".

**What's preserved**:
- All settled meaning-layer commitments (no semantic change at any layer): the substrate-bounded chain; Meta-question's 2-shape; MultiDepth's literal + identified-purpose-motivation-ambiguities + AMBIGUITY-NATURE distinction; Rephrase's multi-source composition + variant-set + vary-across-plausible-readings principle; §9's pre-context phase identity; all earlier inherited commitments
- The 13 top-level section count
- The §2 operations cluster (all 5 operations grouped together; §2.2.7 at end as synthesis)
- The §11 inheritance map's location (toward the end as reference material)
- The §13 worked examples B/C/D at the end (comprehensive treatment)
- The distributed approach to "what changed" notes (each note at its locus where the changed concept is being discussed)
- The 18-21 finding's three-layer model (ANCHOR / ENVELOPE / CORE) for runtime output artifacts — NOT applied to spec docs (pattern-scope distinction preserved)

**What's changed** (10 specific structural changes):
- **Change 1 — Split the opening "What this document is" preamble into 2-3 paragraphs** (currently ~250 words in one paragraph that bundles 4 distinct concerns)
- **Change 2 — Add a Table of Contents (TOC)** after the opening preamble, listing the 13 top-level sections + named sub-sections for navigation
- **Change 3 — Add a "What's new in the post-cascade state" orientation paragraph in §1 Identity** (3-sentence high-level pointer to the four cascade resolutions of mid-2026; detailed notes stay distributed at loci)
- **Change 4 — Promote §6 Output shape to position 4** (right after §3 intra-discipline flow, before §4 NOT-list). Output specification immediately follows process explanation; consumers and builders find what they need without scanning through internal-discipline material
- **Change 5 — Promote Example A inline to position right after §2 operations** (with explicit cross-reference to §13 for comprehensive Examples B/C/D). Concrete grounding for fresh + builder readers without sacrificing comprehensive treatment at §13
- **Change 6 — Reorder §7 ↔ §8: failure modes (§8) before self-assessment (§7)**. §7's confidence rubric explicitly uses "how many LAYER 1 failure-mode boundaries were approached" — §7 depends on §8. Current ordering reverses the dependency; the reorder aligns reading flow with dependency direction
- **Change 7 — Add a sub-header to the §11 Inheritance map** dividing pre-cascade rows from post-cascade rows (lightweight scannability addition for the 22-row table; scales for future cascade additions)
- **Change 8 — Add a commitment-name index alongside §11** (dual-access navigation: existing source-finding table + new commitment-name → source-finding index for searches by "what it commits" rather than by date)
- **Change 9 — Refresh §9 title** from "What's explicitly out of scope for articulate_simple" to "**Pre-context phase boundary — and what's explicitly out of scope**". The refreshed title signals both the pre-context phase identity (per the 12-22 verdict) AND the out-of-scope content
- **Change 10 — Cross-reference audit pass**: verify (a) all "(see §X)" forward references resolve to correct sections under the new ordering; (b) all "per the YY-YY finding" references match the §11 inheritance map; (c) historical line-number references (e.g., "lines 133, 175, 244" appearing in 12-22's source finding) are clearly marked historical

**What's new**:
- A new structural insight: the doc's structure can serve **multiple reader types simultaneously** — fresh / returning / downstream-consumer / builder — via HYBRID techniques (sequential reading + TOC navigation + commitment-name index + early concrete example). The four reader types analysis is articulated explicitly in §5 of this finding.
- A NEW potential meta-pattern: **layered-IA-for-spec-docs** (an information-architecture pattern for discipline-explainer documents at Bootstrap stage). Pattern shape: TOC + identity + operations + early concrete example + intra-discipline flow + output shape + constraints (NOT-list + lightweight stance) + reliability (failure modes + self-assessment) + scope (pre-context boundary) + reference (calibration state + inheritance map with sub-headers + commitment-name index) + summary + comprehensive examples. **Precondition (load-bearing)**: applies to discipline-explainer docs at Bootstrap stage (calibration evidence not yet accumulated); transferability at post-Bootstrap stages is open. "Early concrete example" means immediately after the operations section (per Change 5 placement). **Status**: ACTIONABLE for this case; DEFERRED-revival for broader transferability across other discipline-explainer docs in the project.
- An **assembly emergent pattern**: **structural-layer-redesign-as-multi-reader-IA-optimization**. Components — HYBRID-of-10-targeted-changes + reader-type IA analysis + dependency-direction analysis + cascade-acknowledgment + layered-IA-for-spec-docs. The assembly extends the 12-22 identity-preservation-via-claim-recasting assembly to artifact-structural-layer optimization.

**Migration**:
- The 10 changes are applied via a single Write operation (doc rewrite). Cross-reference audit (Change 10) is integrated into the rewrite. The §11 inheritance map gets a row for this finding (13-30).
- 4 reader types are an analytical tool, not exhaustive; e.g., inquiry-arc navigators (someone reading the inquiry findings alongside the doc) may have additional needs surfaced as future-monitoring item.

## Question

Given that the discipline-explainer document `devdocs/how_articulate_simple_should_be.md` has absorbed four substantive meaning-layer refinements (21-52 + 23-18 + 11-40 + 12-22) in rapid succession and now stands at 911 lines without a holistic structural-layer review, what is the redesigned structural-layer organization of the doc — specifically: (a) new top-level section ordering; (b) section grouping/clustering; (c) information-architecture changes for reader's-path; (d) per-item bundle schema reorganization in §6; (e) treatment of scattered "what changed" notes; (f) §11 inheritance map organization; (g) §13 worked examples placement; (h) opening paragraph splitting; (i) §2.2.7 placement; (j) §5/§6/§7/§8 ordering; (k) cross-reference audit; (l) potential 18-21 three-layer model application — that preserves all settled meaning-layer commitments while optimizing reader's-path, section coherence, and consumer-utility?

**Goal**: a confident structural redesign with explicit before/after section-ordering comparison + rationale for each structural decision + named cascading implications. Must preserve all settled meaning-layer commitments + improve reader's-path for at least one of the four reader types + honestly engage what the cascades changed about the doc's information architecture.

## Finding Summary

- **The redesign is HYBRID-of-10-targeted-changes** — not a single dominant restructure. The 10 changes preserve the doc's overall shape (13 top-level sections, operations cluster, §11 placement, comprehensive examples at end, distributed notes) while making specific improvements that serve multiple reader types.

- **New top-level section ordering**:

  ```
  Pre-§1: What this document is (split into 2-3 paragraphs) + TOC
  §1: Identity (with "What's new in the post-cascade state" orientation paragraph)
  §2: The five cognitive operations
       [Example A inline (post-§2; cross-ref §13 for full examples)]
  §3: The intra-discipline flow
  §6: Output shape — the per-item bundle [promoted from position 6 to 4]
  §4: What articulate does NOT do (the NOT-list)
  §5: The lightweight stance
  §8: Failure modes (light) [promoted from position 8 to 6]
  §7: Self-assessment [demoted from position 7 to 7-after-§8]
  §9: Pre-context phase boundary — and what's explicitly out of scope [title refreshed]
  §10: Calibration state
  §11: Inheritance map [with sub-header divider + commitment-name index]
  §12: One-paragraph summary
  §13: Worked examples [B/C/D; A moved inline post-§2]
  ```

- **The redesign's structural justification** has two pillars:
  1. **Reader-type IA**: four reader types (fresh / returning / downstream-consumer / builder) all benefit. Fresh and builder readers benefit from concrete grounding via Example A inline; returning and downstream-consumer readers benefit from TOC + commitment-name index navigation; downstream-consumer readers in particular benefit from §6 output shape being promoted to position 4.
  2. **Dependency-direction analysis**: §7's confidence rubric uses §8's LAYER 1 failure-mode definitions. The current ordering (§7 before §8) reverses the dependency. The reorder aligns reading flow with structural dependency.

- **Six alternative candidates were rejected on structural grounds**:
  - **ALT-5 flatten operations** (promote §2.2 Meta-question to top-level): rejected — breaks the "5 operations together" grouping AND would orphan §2.2.7's explicit cross-MQ relations (which reference MultiDepth + Rephrase as MQ consumers)
  - **ALT-A consolidate all "what changed" notes up-front**: rejected — creates redundancy with the distributed notes; readers re-encounter the same content in two places
  - **ALT-D eliminate notes entirely**: rejected — loses the in-context change-rationale that helps deep readers understand why a particular section's framing differs from what they may have seen in prior versions
  - **18-21 three-layer model APPLY-YES to spec doc**: rejected — the pattern was for runtime output artifacts (the per-item bundle the LLM emits); spec docs and runtime artifacts have different structural needs; forcing the pattern on each section creates artificial uniformity
  - **ALT-6 TL;DR upfront**: rejected — creates redundancy with §1 (identity) and §12 (one-paragraph summary)
  - **Full §11 split into two tables**: rejected — over-engineered; sub-header divider achieves the same scannability at lower cost

- **The redesign respects all settled meaning-layer commitments**. No semantic change to any operation. The §6 schema description, §2.2 essence, §2.4 essence, §2.5 essence, §9 essence, and all worked examples' content stay as the post-cascade rewrite left them. Only the structural layer (placement, navigation, presentation) is refined.

- **Three structural items named honestly per the cascade-acknowledgment-without-pre-decision pattern**:
  - **Cascade A** (immediate): apply the 10 changes to the doc via a single Write operation. This finding's substantive deliverable; user-authorized when ready.
  - **Cascade B-equivalent** (preserved as already-flagged): the 12-22 finding's two-pass-as-discipline-identity design follow-up remains as already-flagged. This structural redesign does NOT pre-decide it. (No new cumulative structural pressure surfaces from this redesign; localized improvements only.)
  - **Preservation accounting**: §1 substrate-bounded principle preserved unchanged; 18-21 three-layer model preserved at runtime-artifacts scope (NOT applied to spec doc); 12-22 §9 verdict preserved at the title-refresh layer.

- **One new potential meta-pattern + one assembly emergent**:
  - **layered-IA-for-spec-docs** (new) — see "What's new" above
  - **structural-layer-redesign-as-multi-reader-IA-optimization** (assembly emergent) — extends the 12-22 identity-preservation-via-claim-recasting assembly to artifact-structural-layer optimization

## Finding

### Context the reader needs

This finding sits inside an ongoing chain of refinements to the **articulate_simple** discipline. The discipline-explainer document at `devdocs/how_articulate_simple_should_be.md` describes the discipline at the meaning layer (what each operation IS) + a small amount of structural-layer scaffolding (section organization, schema description) + worked examples. Process-layer concerns (HOW the operations run at runtime) are explicitly out of scope per §9 of the doc.

Four recent cascade resolutions substantively refined the doc's content. The **21-52 finding** (`devdocs/inquiries/2026-06-06_21-52__no_commitments_pre_surfacing_safety/finding.md`) narrowed Meta-question's permissive-answer range to 2-shape {identified-ambiguities / explicit-empty}. The **23-18 finding** (`devdocs/inquiries/2026-06-06_23-18__multidepth_purpose_wrapped_cascade_resolution/finding.md`) narrowed MultiDepth's purpose-wrapped to literal + identified-purpose-motivation-ambiguities + the AMBIGUITY-NATURE distinction with MQ3. The **11-40 finding** (`devdocs/inquiries/2026-06-07_11-40__rephrase_constraint_source_cascade2_resolution/finding.md`) refined Rephrase to ambiguity-spanning variants within multi-source composition. The **12-22 finding** (`devdocs/inquiries/2026-06-07_12-22__section9_two_pass_deferral_cascade3_resolution/finding.md`) refined §9 to "complete as pre-context framing."

Each cascade triggered a multi-section doc rewrite. The cumulative effect: the doc's meaning layer is settled and coherent across the cascade chain, but its structural layer (section ordering, navigation aids, schema description, scattered "what changed" notes, the §11 inheritance map's growing size from 17 → 22 rows, the §13 worked examples placement at the end) was not re-examined as a whole.

The user requested the structural review: *"okay lets now dive deep for devdocs/how_articulate_simple_should_be.md in strcutural layer (because of recent changes, i thik we should redo it )"*.

### What the doc currently looks like (background)

The doc has 13 top-level sections (§1 Identity → §13 Worked examples) plus an unlabeled "What this document is" preamble. The current total is 911 lines. Section sizes are uneven:
- §2 (the five cognitive operations) is ~430 lines (~47% of doc); largest by far. Within §2, §2.2 (Meta-question) is ~200 lines (~22% of doc); largest sub-section by far.
- §13 (worked examples) is ~191 lines (~21% of doc); second largest. Contains 4 examples (A clean / B multi-item / C ambiguity-overlap / D extrinsic-exclusion).
- §11 (inheritance map) has 22 rows; multiple rows are multi-line.
- Sections §3-§10 + §12 are short (< 40 lines each).

The unevenness is content-driven (5 operations under §2; 4 examples under §13) — not a structural defect. The structural questions concern placement, navigation, and balance, not raw section sizes.

### Why the redesign was HYBRID rather than a single dominant restructure

Three structurally distinct alternative-shape candidates emerged from Surfacing's enumeration. ALT-5 (flatten operations — promote §2.2 Meta-question to its own top-level section) addresses §2's top-heaviness by distributing weight, but it breaks the "5 operations together" grouping that gives readers a coherent operations chapter. Crucially, §2.2.7 (Substrate-MQ vs Intra-articulate-MQ — the orthogonal consumer axis sub-section) explicitly references Rephrase + MultiDepth + the runner; flattening §2.2 to top-level would orphan that cross-MQ-relation discussion. So ALT-5 was rejected.

ALT-A (consolidate all "what changed" notes into a single section near the top) addresses the scattered-notes concern but creates redundancy: readers would encounter the same content in two places (a consolidated change-log and the distributed notes-at-locus). ALT-D (eliminate notes entirely) is the lighter-weight alternative but loses the in-context change-rationale that helps deep readers. The mixed-treatment solution emerged: keep the distributed notes (best for in-context understanding) AND add a single high-level "What's new in the post-cascade state" orientation paragraph at §1 (3 sentences pointing to the four cascade resolutions + §11 inheritance map for source findings).

ALT-6 (TL;DR upfront — promote §12 one-paragraph summary to right after §1 Identity) is appealing but redundant: §1 Identity already gives a short orientation, and §12 already exists for impatient readers at the end. Adding a third short-summary at the top creates an over-summarization layer.

None of these structurally distinct alternative shapes warranted adopting alone. The verdict is HYBRID-of-10-targeted-changes — preserve what's working, change what's not, add navigation aids where they're missing.

### Why §6 was promoted (Change 4)

§6 (Output shape — the per-item bundle) currently sits at position 6, between §5 (lightweight stance) and §7 (self-assessment). For a downstream-consumer reader — someone who needs to know what articulate emits so they can write code that reads articulate's output — §6 is the highest-value section in the doc. Burying it at position 6 makes them scan through internal-discipline material (the lightweight stance) before they find the output specification.

The promotion moves §6 to position 4 (right after §3 intra-discipline flow, before §4 NOT-list). The logical flow becomes: §1 identity → §2 operations → §3 how the operations compose → §6 what the composition emits → §4 what articulate doesn't do → §5 the lightweight stance behind it. Output specification immediately follows process explanation — the natural ordering of "what it does → how → what comes out."

The promotion preserves §6's internal dependencies: §6 references §2 operations (forward references to "the Meta-question entries," "the MultiDepth output," etc.) and §3 stages; the new position (post-§3) preserves both forward-reference dependencies. The §4 NOT-list doesn't depend on §6 (in fact, §4 rule 3 "no adjudication" supports the variant-set form §6 describes, but that's a content-relation, not an ordering dependency).

### Why §8 was promoted before §7 (Change 6)

§7 (Self-assessment) currently sits before §8 (Failure modes) at positions 7 and 8 respectively. The dependency is reversed. §7's confidence rubric — the Primary discriminator — uses the language "how many LAYER 1 failure-mode boundaries were approached during the invocation, and how close any one came to firing." LAYER 1 modes are defined in §8. Reading §7 before §8 asks the reader to take "LAYER 1 failure-mode boundaries" on faith and skip ahead to §8 for the definitions.

The reorder (§8 at position 6, §7 at position 7) aligns reading flow with dependency direction. §8 establishes the failure-mode framework; §7 then describes how the discipline self-assesses against that framework.

### Why Example A was promoted inline (Change 5)

§13 (Worked examples) currently sits at the end of the doc, lines 718-909. Reading the doc sequentially means a reader has to absorb 717 lines of meaning-layer content before seeing a concrete example. For a fresh reader new to the discipline + a builder reader who wants to implement articulate, this is a long stretch of abstraction.

Example A is the CLEAN single-item case — "Refactor the authentication module" with all 5 operations running smoothly. It's the simplest illustration in §13; it doesn't introduce the multi-item case (B), the ambiguity-overlap case (C), or the extrinsic-exclusion case (D). Promoting Example A to inline position right after §2 (operations) gives fresh and builder readers concrete grounding immediately after they've absorbed the operation definitions.

Examples B/C/D remain at §13 for comprehensive treatment. Readers who want to see the multi-item case, the MQA-overlap-reconciliation case, and the MQ4-extrinsic-exclusion case can find them as a coherent set in §13. The cross-reference at the end of the inline Example A points readers there.

### Why the doc gets a TOC and a commitment-name index (Changes 2 + 8)

The doc has no Table of Contents. For a returning reader who knows what they want to look up (e.g., "the MQ4 commitment about explicit-empty being valid"), the doc requires either scanning through 911 lines or using the file's built-in section navigation (which may not be available depending on how the reader is consuming the file). A TOC at the top, listing the 13 top-level sections plus named sub-sections, is a low-cost navigation aid.

The §11 inheritance map has 22 rows ordered roughly by date. It supports lookup BY SOURCE FINDING (e.g., "what did the 21-52 finding commit?"). It does NOT support lookup BY COMMITMENT (e.g., "where is the 2-shape commitment named?"). A commitment-name index alongside §11 — a short table mapping commitment-names to source-findings — provides the second access dimension. Together, the TOC + the commitment-name index give returning + downstream-consumer readers dual-access navigation.

### Why the doc gets a sub-header in §11 (Change 7)

The §11 inheritance map grew from 17 → 22 rows during the four cascade rewrites. The rows now span two structurally distinct phases: pre-cascade (foundational findings from June 2026 establishing the discipline) and post-cascade (the four cascade refinements from late June to early July 2026: 21-52, 23-18, 11-40, 12-22, plus the 20-29 narrowing that preceded 21-52).

A single sub-header row inserted before the post-cascade rows (e.g., "**Cascade refinements (mid-2026):**") gives readers a visual anchor for the two phases. The lighter-weight ALT-D approach was preferred over the full split into two tables (ALT-A); sub-header divider achieves the same scannability at a fraction of the cost.

The §11 inheritance map will continue to grow. The 12-22 finding flagged a Cascade B follow-up (two-pass-as-discipline-identity design) that, when resolved, will add another row. The sub-header divide scales naturally; if a future structural redesign warrants a full split, the sub-header can be converted to a table header.

### Why §9's title was refreshed (Change 9)

The current §9 title is "What's explicitly out of scope for articulate_simple." The 12-22 finding refined §9's essence from "complete on its own" to "complete as pre-context framing" and named the pre-context phase identity explicitly. The current title captures only the "out of scope" content; it doesn't capture the pre-context phase identity that the 12-22 verdict surfaced.

The refreshed title — "**Pre-context phase boundary — and what's explicitly out of scope**" — signals both the pre-context phase identity (per the 12-22 verdict) AND the out-of-scope content. The title now matches §9's actual content.

### Why the 18-21 three-layer model was NOT applied to the spec doc (rejection)

The 18-21 finding (`devdocs/inquiries/2026-06-06_18-21__articulate_simple_output_md_meaning/finding.md`) established a three-layer model (ANCHOR / ENVELOPE / CORE) for the output md artifact — the per-item bundle the LLM emits at invocation time. The pattern's intended scope was runtime output artifacts.

The discipline-explainer document (the spec doc — `devdocs/how_articulate_simple_should_be.md`) is a different kind of artifact. It describes the discipline; it is not the discipline's runtime output. Spec docs and runtime artifacts have different structural needs: spec docs need to be readable as documentation (TOC + sequential reading + reference); runtime artifacts need to be parsable as data + visible to multiple downstream consumers per a stable contract.

Forcing the ANCHOR / ENVELOPE / CORE model on each section of the spec doc would create artificial uniformity that doesn't match each section's natural structure (operations have essence + commitments + sources; output shape has schema + bundle items; calibration state has trajectory + stages; etc.). The 18-21 pattern's scope is preserved at runtime artifacts.

### Why the 4 reader types are an analytical tool but not exhaustive

The redesign analysis uses four reader types: (a) fresh reader new to the discipline; (b) returning reader checking a specific commitment; (c) downstream-consumer reader checking what articulate emits; (d) builder reader wanting to implement articulate. These four types span the main audience for a discipline-explainer doc and adequately ground the IA decisions.

However, the four types are not strictly exhaustive. Other reader types exist — most notably, an **inquiry-arc navigator**: someone reading the inquiry findings (`devdocs/inquiries/.../finding.md`) alongside the doc, trying to understand the doc's commitments in relation to their sources. The §11 inheritance map serves this reader type partially. Future cascades may surface additional reader-type needs that prompt structural refinements; this is acknowledged as a future-monitoring item rather than a current-iteration concern.

### Three structural items named honestly per cascade-acknowledgment-without-pre-decision

Three items follow structurally from the verdict.

**Cascade A — immediate doc rewrite**: apply the 10 changes to `devdocs/how_articulate_simple_should_be.md` via a single Write operation. The cross-reference audit (Change 10) is integrated into the rewrite. The §11 inheritance map gets a row for this finding (13-30 structural redesign + layered-IA-for-spec-docs new meta-pattern). This is the finding's substantive deliverable; user-authorized when ready.

**Cascade B-equivalent — preserved as already-flagged**: the 12-22 finding's two-pass-as-discipline-identity design follow-up remains as already-flagged. This structural redesign does NOT pre-decide it. The 12-22 finding's cascade-acknowledgment-at-cumulative-pressure pattern applies if 3+ compoundings of structural pressure surface; current observations from this structural redesign are localized improvements (not cumulative pressure), so the pattern's threshold is not triggered.

**Preservation accounting** (not a cascade in the pressure-carrying sense): §1 substrate-bounded principle preserved unchanged; 18-21 three-layer model preserved at runtime-artifacts scope (NOT applied to spec doc); 12-22 §9 verdict preserved at the title-refresh layer (Change 9 applies the 12-22 verdict at the §9 title; the body content was already updated in the 12-22 multi-section rewrite).

### One new meta-pattern + one assembly emergent

This finding surfaces one new meta-pattern + one assembly emergent.

**NEW potential meta-pattern: layered-IA-for-spec-docs.** Discipline-explainer docs benefit from a layered information-architecture pattern: TOC + identity + operations + early concrete example + intra-discipline flow + output shape + constraints (NOT-list + lightweight stance) + reliability (failure modes + self-assessment) + scope (pre-context boundary) + reference (calibration state + inheritance map with sub-headers + commitment-name index) + summary + comprehensive examples. **Precondition (load-bearing)**: applies to discipline-explainer docs at Bootstrap stage (calibration evidence not yet accumulated); transferability at post-Bootstrap stages is open. "Early concrete example" means immediately after the operations section.

**Assembly emergent: structural-layer-redesign-as-multi-reader-IA-optimization.** Components — HYBRID-of-10-targeted-changes + reader-type IA analysis + dependency-direction analysis + cascade-acknowledgment-without-pre-decision + layered-IA-for-spec-docs. The assembly extends the 12-22 identity-preservation-via-claim-recasting assembly from operation/discipline-identity level to artifact-structural-layer level. Reusable across future cascade-driven doc rewrites and across other discipline-explainer docs in the project.

## Inherited Commitments Re-test

This inquiry's `_branch.md` declared a Synthesis Trigger listing 5 priors. Per the CONCLUDE protocol's synthesis re-test enforcement, each is re-tested at structural layer.

**Commitment 1**: 12-22 (§9 refinement to "complete as pre-context framing" + pre-context phase identity + scope-completeness-recasting-as-discipline-identity-preservation + cascade-acknowledgment-at-cumulative-pressure).
- **Source**: `devdocs/inquiries/2026-06-07_12-22__section9_two_pass_deferral_cascade3_resolution/finding.md`
- **Re-test status (structural layer)**: **RE-TESTED — STANDS**. The §9 title refresh (Change 9) applies the 12-22 verdict at the title layer; the §9 body content was already updated by the 12-22 multi-section rewrite. The cascade-acknowledgment-at-cumulative-pressure pattern is checked: no new cumulative structural pressure surfaces from this redesign; the pattern's 3+ threshold is not triggered.
- **Evidence**: Cascade B (two-pass-as-discipline-identity design) remains as already-flagged; this redesign does NOT pre-decide it.

**Commitment 2**: 11-40 (Rephrase multi-source composition + VARIANT-SET-AS-OPENNESS-PRESERVATION + constraint-source-disappearance-vs-operation-identity).
- **Source**: `devdocs/inquiries/2026-06-07_11-40__rephrase_constraint_source_cascade2_resolution/finding.md`
- **Re-test status (structural layer)**: **RE-TESTED — STANDS**. The §2.5 Rephrase section structure already reflects multi-source composition per the 11-40 rewrite; no structural change needed.
- **Evidence**: §2.5's numbered list of 4 constraint sources is preserved.

**Commitment 3**: 23-18 (MultiDepth literal + identified-purpose-motivation-ambiguities + AMBIGUITY-NATURE distinction + LITERAL-AS-NON-CONTAMINATING-OUTPUT).
- **Source**: `devdocs/inquiries/2026-06-06_23-18__multidepth_purpose_wrapped_cascade_resolution/finding.md`
- **Re-test status (structural layer)**: **RE-TESTED — STANDS**. The §2.4 MultiDepth section + the §2.2.3 MQ3 section both reference the AMBIGUITY-NATURE distinction; no structural change needed.
- **Evidence**: AMBIGUITY-NATURE distinction appears in both §2.2.3 and §2.4 as an explicit cross-reference; reader can see the distinction from either section.

**Commitment 4**: 21-52 (MQ 2-shape answer range + substrate-bounded chain + cascade-acknowledgment-without-pre-decision + substrate-contamination-vs-downstream-bias).
- **Source**: `devdocs/inquiries/2026-06-06_21-52__no_commitments_pre_surfacing_safety/finding.md`
- **Re-test status (structural layer)**: **RE-TESTED — STANDS**. The §2.2 Meta-question section already foregrounds 2-shape per the 21-52 rewrite; no structural change needed.
- **Evidence**: §2.2's "Each MQ entry's content shape — Q-mandatory + 2-shape ambiguity-form answer" sub-section explicitly names 2-shape early.

**Commitment 5**: 18-21 (three-layer model ANCHOR/ENVELOPE/CORE for runtime output artifacts + empty-as-content principle).
- **Source**: `devdocs/inquiries/2026-06-06_18-21__articulate_simple_output_md_meaning/finding.md`
- **Re-test status (structural layer)**: **RE-TESTED — STANDS with pattern-scope preserved**. The three-layer model was for runtime output artifacts; the spec doc has different structural needs. APPLY-NO to spec doc.
- **Evidence**: Sensemaking Ambiguity 8 + per-section structural analysis confirmed spec-doc and runtime-artifact distinction.

**Commitment 6**: `devdocs/how_articulate_simple_should_be.md` (current 911-line state after 12-22's multi-section rewrite).
- **Re-test status (structural layer)**: **CASCADE-FLAGGED for the 10 changes** per the COULDs below. No meaning-layer change.

## Next Actions

### MUST

(None proposed at this finding stage. The verdict's substantive content is the deliverable; specific doc revisions wait on user authorization per the cascade-acknowledgment-without-pre-decision pattern.)

### COULD

- **What:** Apply Cascade A — the 10 changes to `devdocs/how_articulate_simple_should_be.md`. Specific edits:
  1. Split the opening preamble (the paragraph between "## What this document is" and "## 1. Identity") from one ~250-word paragraph into 2-3 shorter paragraphs (e.g., paragraph 1 = "what this doc describes + identity"; paragraph 2 = "two-pass form + follow-up reference"; paragraph 3 = "reader's path / how to use this doc")
  2. Add a Table of Contents after the preamble, listing the 13 top-level sections + named sub-sections (e.g., §2.1 Itemize / §2.2 Meta-question / §2.3 Deconstruct / §2.4 MultiDepth / §2.5 Rephrase / §11 Inheritance map / §13 Worked examples)
  3. Add a "What's new in the post-cascade state" orientation paragraph in §1 Identity (3 sentences summarizing the four cascade resolutions of mid-2026: "Four cascade resolutions in mid-2026 (21-52, 23-18, 11-40, 12-22) refined articulate_simple's outputs to identification-only at the pre-context phase. Meta-question narrows to 2-shape; MultiDepth's purpose-wrapped narrows to identified-purpose-motivation-ambiguities; Rephrase refines to ambiguity-spanning variants within multi-source composition; §9 refines to 'complete as pre-context framing.' See §11 Inheritance map for source findings; detailed notes appear inline at each section.")
  4. Promote §6 (Output shape — the per-item bundle) to position 4 (right after §3 intra-discipline flow). Update any "(see §6)" forward references that may now be backward references
  5. Promote Example A (Clean single-item case from §13) to inline position right after §2 operations. Add a cross-reference at the end of the inline Example A: "See §13 for comprehensive Examples B (multi-item), C (ambiguity-overlap reconciliation), and D (extrinsic exclusion)." Remove Example A from §13's content (move, don't duplicate)
  6. Reorder §7 ↔ §8: §8 (Failure modes (light)) before §7 (Self-assessment). Update any forward references
  7. Add a sub-header row to the §11 Inheritance map, inserted before the post-cascade rows: "**Cascade refinements (mid-2026):**" — placed between the foundational rows and the cascade rows (21-52, 23-18, 11-40, 12-22; including 20-29 which preceded 21-52 as the F3 Hybrid Q-of-ambiguities)
  8. Add a small Commitment-name index near §11 (immediately after the inheritance map). Format: short two-column table mapping commitment-names to source-findings (e.g., "2-shape MQ answer range → 21-52"; "AMBIGUITY-NATURE distinction → 23-18 + 11-40 + 12-22"; "multi-source composition → 11-40"; "pre-context phase identity → 12-22"; etc.)
  9. Refresh §9 title from "What's explicitly out of scope for articulate_simple" to "Pre-context phase boundary — and what's explicitly out of scope"
  10. Cross-reference audit: verify (a) all "(see §X)" forward references resolve to correct sections under the new ordering; (b) all "per the YY-YY finding" references match the §11 inheritance map; (c) historical line-number references (e.g., "lines 133, 175, 244" from the 12-22 source finding) are clearly marked historical
  - **Who:** the user, when ready
  - **Gate:** observable trigger — user authorizes applying this finding's structural redesign to the doc
  - **Why:** improves the doc's reader's-path + section coherence + consumer-utility while preserving all settled meaning-layer commitments

### DEFERRED

- **What:** Test the **layered-IA-for-spec-docs** new meta-pattern's transferability across other discipline-explainer docs in the project.
  - **Gate:** condition-bound — when another discipline-explainer doc undergoes structural review (e.g., after its own meaning-layer cascades).
  - **Why (if revived):** the pattern is currently evidenced at sample-size 1 (this doc); cross-discipline transfers would strengthen the pattern; failed transfers would refine the precondition ("at Bootstrap stage" may need broadening or narrowing).

- **What:** Monitor whether the **inquiry-arc-navigator reader type** (a 5th reader type beyond the 4 used in this redesign) surfaces additional IA needs.
  - **Gate:** observable — if returning reviewers reading findings alongside the doc surface complaints about navigation between findings and doc sections.
  - **Why (if revived):** the 4 reader types covered in this redesign are not strictly exhaustive; surfaced needs may warrant additional structural refinements (e.g., per-section "source finding" markers).

- **What:** Re-evaluate the §11 Inheritance map's sub-header approach as the table grows further (Cascade B follow-up from 12-22 will add a row).
  - **Gate:** condition-bound — when §11 reaches ~30 rows or when ambiguity emerges about which finding is "foundational" vs "cascade refinement."
  - **Why (if revived):** the sub-header approach scales but may eventually warrant full table split (ALT-A from Sensemaking Ambiguity 5 — currently rejected as over-engineered).

## Reasoning

### Why HYBRID-of-10-targeted-changes over alternatives

A single dominant restructure (ALT-5 flatten operations OR ALT-A consolidate notes OR ALT-D eliminate notes OR 18-21 model apply OR full §11 split) was rejected on structural grounds. ALT-5 breaks the operations cluster and orphans §2.2.7. ALT-A creates redundancy with distributed notes. ALT-D loses in-context change-rationale. The 18-21 model was for runtime artifacts, not spec docs. Full §11 split is over-engineered relative to the sub-header approach.

The HYBRID approach preserves what's working (operations cluster, §11 placement, comprehensive examples at end, distributed notes) and changes what's not (output shape buried at position 6, dependency-direction reversed in §7↔§8, concrete grounding 717 lines from operations, opening paragraph too dense, no TOC, no commitment-name index, no orientation paragraph at §1). Each of the 10 changes has its own rationale (per the per-change traces in §3 of the Reasoning).

### Why the redesign serves multiple reader types

The 4-reader-type analysis is the core structural-justification tool. Fresh and builder readers benefit from concrete grounding (Example A inline). Returning and downstream-consumer readers benefit from navigation aids (TOC + commitment-name index). Downstream-consumer readers in particular benefit from §6 output shape being promoted to position 4 (consumer-utility-driven). Builder readers benefit from §6 promotion + early example + dependency-correct §8 before §7.

No reader type is harmed by the redesign. The fresh reader's sequential reading path is preserved (the new ordering is still a coherent forward-reading sequence). The returning reader's lookup is improved by TOC + commitment-name index. The downstream-consumer's first-section-search is improved by §6 promotion. The builder's grounding is improved by Example A inline.

### Why dependency-direction analysis is structurally load-bearing

The current §7 → §8 ordering reverses the dependency (§7 confidence rubric uses §8 LAYER 1 mode definitions). This isn't a cosmetic concern: a reader who reads §7 first encounters "LAYER 1 failure-mode boundaries" without having seen the definition. They must either take the term on faith or skip forward to §8. Either disrupts reading flow.

The reorder (§8 at position 6, §7 at position 7) aligns reading flow with dependency direction. §8 establishes the failure-mode framework; §7 then describes how the discipline self-assesses against that framework. The cost of the reorder is minimal (mechanical position change + cross-reference verification per Change 10).

### Why cascades are NAMED but not pre-decided

The cascade-acknowledgment-without-pre-decision pattern (21-52 FP4) and its cumulative-pressure extension (12-22) apply at the structural layer. The Cascade B-equivalent (12-22's two-pass-as-discipline-identity design follow-up) remains as already-flagged; this structural redesign does NOT pre-decide it. The pattern's discipline: name structural items that follow from the verdict; don't pre-decide them.

The 3 deferred items above (transferability of layered-IA-for-spec-docs; inquiry-arc-navigator reader type monitoring; §11 sub-header re-evaluation) are each condition-bound, not load-bearing for this finding's verdict.

### Why the 18-21 three-layer model was NOT applied to the spec doc

The 18-21 finding established the three-layer model (ANCHOR / ENVELOPE / CORE) for runtime output artifacts. Spec docs and runtime artifacts have different structural needs. Forcing the pattern on each section creates artificial uniformity that doesn't match each section's natural structure. The pattern's scope is preserved at runtime artifacts; this finding does NOT extend it to spec docs.

This is a pattern-scope preservation decision. Cross-artifact transfer (runtime artifact → spec doc) is structurally distinct from cross-instance transfer (operation A → operation B). The former requires evidence that the pattern's preconditions hold at the new artifact type; the latter requires evidence at the same artifact type. The 18-21 pattern's preconditions were for runtime artifacts; transfer to spec docs is open as a Research Frontier (see Open Questions).

### Why three REFINE-notes were folded into the finding

Critique surfaced three constructive refinements:
1. **Change 10 audit scope specification** — the audit pass needs explicit criteria (forward references / source-finding references / historical line-numbers). Folded into Change 10's text in the COULDs above.
2. **Reader-type exhaustiveness caveat** — the 4 reader types are not strictly exhaustive; inquiry-arc-navigator may surface additional needs. Folded into Reasoning and DEFERRED.
3. **layered-IA-for-spec-docs precondition specificity** — "applies at Bootstrap stage" needs the "calibration evidence not yet accumulated" sub-precondition + "early concrete example" needs the "immediately after the operations section" sub-precondition. Folded into the "What's new" section of Changes from Prior.

These refinements strengthen the finding without changing the verdict.

## Open Questions

### Monitoring

- **Inquiry-arc-navigator reader type needs**: the 4 reader types covered in this redesign are not strictly exhaustive. Observable: if returning reviewers reading findings alongside the doc surface complaints about navigation between findings and doc sections, structural refinements may be warranted (e.g., per-section "source finding" markers; inline marker for each commitment pointing to its §11 row).
- **TOC maintenance as sections evolve**: TOC requires updates when section names or sub-section structure change. Monitor: future doc revisions check TOC freshness as part of routine pass.
- **§11 inheritance map's continued growth**: the map will continue to grow (Cascade B follow-up from 12-22 will add a row). Observable: if §11 reaches ~30 rows or sub-header approach degrades, re-evaluate ALT-A full split.

### Blocked

- **Coherent definitional updates to articulate at the discipline level** await Cascade B (12-22's two-pass-as-discipline-identity design follow-up). Until Cascade B resolves, the doc's overall identity (whether it remains "articulate_simple's spec" or refactors to "articulate spec with pre-context + post-context phase sub-sections") is potentially-stale. This structural redesign does NOT pre-decide that follow-up; it works within the current "articulate_simple's spec" framing per the 12-22 verdict.

### Research Frontiers

- Whether the **layered-IA-for-spec-docs** new meta-pattern transfers across other discipline-explainer docs in the project. Currently evidenced at sample-size 1 (this doc); cross-discipline tests would confirm or refine.
- Whether **structural-layer-redesign-as-multi-reader-IA-optimization** assembly transfers as a reusable approach for future cascade-driven doc rewrites. Components — HYBRID-of-targeted-changes + reader-type IA + dependency-direction + cascade-acknowledgment + layered-IA-for-spec-docs.
- Whether the **18-21 three-layer model** has a spec-doc adaptation that would be structurally appropriate (currently APPLY-NO; future Research Frontier).

### Refinement Triggers

- If user accepts this verdict and authorizes Cascade A, the 10 changes land via single doc rewrite + §11 inheritance map row addition for this finding.
- If a future cascade triggers another meaning-layer rewrite that significantly grows the doc, re-evaluate the structural-layer organization (e.g., if doc reaches ~1500 lines, larger structural changes may be warranted).
- If the layered-IA-for-spec-docs pattern is tested at another discipline-explainer doc and the precondition needs refinement, this finding's pattern definition may need update.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
okay lets now dive deep for devdocs/how_articulate_simple_should_be.md in strcutural layer (because of recent changes, i thik we should redo it )
```

</details>
