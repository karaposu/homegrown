# Exploration: Structural Fix Design — Comparison-Axis-Enumeration Gap

## User Input

STRUCTURAL inquiry. /MVL+ per user request. Investigate the 3 insertion locations (Exploration §3.1 / Critique Phase 0 / Sensemaking Phase 3) where MC1/MC2/MC3 from the 21-00-30 LOOP_DIAGNOSE finding would land. Verify auto-memory compliance + cross-discipline coherence + branch-experiment necessity for MC1.

---

## Territory Overview

**Mode:** Artifact. Concrete spec files at known paths.

**Entry point:** Signal-first. The 3 insertion locations are pre-specified.

**Boundary:** Bounded to the 3 discipline specs + auto-memory + the 21-00-30 + 02-15 priors.

**Resolution:** D3 at the insertion points (need verbatim spec wording for adjacent text); D2 elsewhere.

**Major regions:**

| Region | Resolution | Confidence |
|---|---|---|
| R1 — Explore spec §3.1 possibility-mode + existing inline rules | D3 | confirmed |
| R2 — Explore spec refinement-note pattern (vs sensemaking + td-critique) | D3 | confirmed |
| R3 — Critique Phase 0 project-specific risk dimension check refinement note (verbatim) | D3 | confirmed |
| R4 — Sensemaking Phase 3 load-bearing concept test refinement note (verbatim) | D3 | confirmed |
| R5 — Auto-memory compliance constraint | D2 | confirmed |
| R6 — Cross-discipline coherence map | D2 | inferred |
| R7 — MC1 branch-experiment necessity adjudication | D2 | inferred |
| R8 — Worked-example choice (use 02-15 case OR abstract reference) | D2 | inferred |

---

## Inventory

### R1 — Explore spec §3.1 possibility-mode procedure (verbatim)

From `cognitive_harness/explore/references/explore.md` lines 120-129:

> ### 3.1 Two operational modes
>
> Modes are determined by the territory's type, not by the discipline's commitment.
>
> - **Artifact mode** — the territory has concrete pre-existing objects (codebases, literature, existing systems). Scan = traverse and index. Probe = read deeper into a specific artifact.
> - **Possibility mode** — the territory is conceptual; candidates must be generated to be placed on the map (solution spaces, design options, research directions). Scan = generate candidates at surface level. Probe = examine a candidate more closely.
>
> **Completeness before novelty** (possibility mode). When scanning in possibility mode, explicitly scan for the standard/obvious approaches BEFORE scanning for novel ones. Generating only "creative" candidates and missing the obvious ones is a failure mode (see §4.1).
>
> **Key difference from /innovate.** Possibility-mode exploration generates candidates for *completeness*; /innovate generates ideas for *novelty*. /explore must include the obvious approach on the map; /innovate would skip it. Different success criteria → different outputs.

**Insertion point for MC1:** AFTER the "Key difference from /innovate" paragraph + BEFORE §3.2. The new rule integrates as a third inline rule alongside "Completeness before novelty" + "Key difference from /innovate."

### R2 — Explore spec inline-rule pattern (different from sensemaking + td-critique)

**Critical observation:** the explore spec does NOT use the `*Refinement note (applies at Phase X):*` italic-prefix pattern that sensemaking + td-critique use. Instead, explore.md embeds rules inline as **Bold-Label.** paragraphs within sections.

Examples of explore.md's inline pattern:
- §3.1: "**Completeness before novelty** (possibility mode). When scanning..." (line 127)
- §3.1: "**Key difference from /innovate.** Possibility-mode exploration..." (line 129)
- §3.3: "**Surround-layer inclusion at first scan.** When the territory..." (line 155)
- §3.4: "**Cross-invocation re-exploration** — re-running /explore..." (line 161)
- §3.5: "**Type-aware probing.** When a scan inventories a candidate carrying a **load-bearing quantifiable claim**..." (line 165)
- §4.2: "**Jump-scan rule.** Before declaring convergence..." (line 205)

The §3.5 "Type-aware probing" rule is a strong structural precedent: it names a SPECIFIC probing requirement triggered by a recognizable condition + references the failure mode #2 (Surface-only scanning) at §4.1. **MC1's wording can follow this exact pattern.**

**Compare:** sensemaking + td-critique use:
```
*Refinement note (applies at Phase X):*

**Bold Title.** Body.
```

MC1 should match explore.md's INLINE pattern (without the italic prefix), not the sensemaking/td-critique pattern.

### R3 — Critique spec Phase 0 refinement note (verbatim)

From `cognitive_harness/td-critique/references/td-critique.md` lines 176-180:

> *Refinement note (applies at Phase 0 Dimension Construction):*
>
> **Project-specific risk dimension check.** When the candidate set being evaluated involves project artifacts, operations, or state, the dimension list must include at least one project-specific risk dimension that captures the project's documented risk axes. The default dimensions (Correctness, Coherence, Feasibility, Completeness, Robustness, Elegance) are content-oriented; project-specific risk dimensions are mechanism-oriented (e.g., across recent inquiries: duplicate-derivable-state, explicit-culture-fit, operation-parsimony, phase-fit have each been the load-bearing axis for specific candidate types). A dimension list that omits project-specific risk axes when the candidate set involves project artifacts/operations/state is incomplete; the validate-dimensions sub-step must explicitly check this and flag any missing axes for inclusion.

**Insertion point for MC2:** EXTEND the existing exemplar list "(e.g., across recent inquiries: duplicate-derivable-state, explicit-culture-fit, operation-parsimony, phase-fit)" with one additional exemplar OR add a clarifying sentence after the existing paragraph.

**Wording-fit observation:** the existing list reads "across recent inquiries..." — past concrete examples. Adding "project-architecture invariants" as a forward-looking exemplar in the same list mixes past + future. Cleaner option: add a separate sentence after the existing paragraph.

### R4 — Sensemaking spec Phase 3 load-bearing concept test refinement note (verbatim)

From `cognitive_harness/sense-making/references/sensemaking.md` lines 418-426:

> *Refinement note (applies at Phase 3 Ambiguity Collapse):*
>
> **Load-bearing concept test.** In addition to vague terms, conflicts, unclear goals, and hidden assumptions identified above, generate at least one ambiguity-collapse pair testing each load-bearing concept that has been stabilized in any earlier Sensemaking output. A load-bearing concept is one whose presence materially affects downstream stages — i.e., removing it would change the loop's verdict. The test predicate is appropriate to the concept's location:
>
> - Phase 1 / Cognitive Anchor Extraction items phrased as fixed properties of the domain (Constraints) or as project axioms (Foundational Principles) → test domain-property-vs-external-default. Counter-interpretation: "Is this the project's actual property/principle, or an external default the loop adopted without testing?"
> - SV2+ Terminology — newly-coined noun phrases or operation names treated as stable in subsequent Sense Versions → test domain-terminology-vs-external-default plus user-language alignment. Counter-interpretation: "Does this term match the project's actual vocabulary and the user's language, or is it a loop-coined neologism that hasn't been validated?"
> - Phase 5 / Conceptual Stabilization output — final committed concepts (especially trigger-classifier rules and concepts whose use depends on a runtime determination) → test multiple sub-aspects: proxy-vs-structural ("does this categorical label represent a real structural distinction, or is it an incidental input property used as a proxy?"), discoverability ("if the concept's use depends on a runtime determination, has the determination mechanism been specified, or left implicit?"), and user-language alignment ("does the concept's name match the user's language, or has the loop coined a name without validation?"). The illustrative list is not exhaustive — future sub-aspects may emerge as evidence accumulates.
>
> Failing to generate at least one ambiguity-collapse pair per load-bearing concept is an instance of Premature Stabilization (failure mode #2).

**Insertion point for MC3:** EXTEND the Phase 5 / Conceptual Stabilization output bullet's sub-aspect list with one additional sub-aspect (parallel to proxy-vs-structural / discoverability / user-language-alignment). The "illustrative list is not exhaustive" framing EXPLICITLY invites this kind of extension.

### R5 — Auto-memory compliance constraint (verbatim)

From `~/.claude/projects/-Users-ns-Desktop-projects-native/memory/feedback_disciplines_self_contained.md`:

> "Discipline runtime reference files (`cognitive_harness/<discipline>/references/<discipline>.md`) must not contain outbound pointers to design-history, theory, or other folders — for example, 'design history preserved at `<docs|enes>/discipline_design_history/...`' or 'see also `<docs|enes>/...`'."

**Compliance test for each proposed edit:**
- MC1 (Explore): must NOT introduce outbound paths to `docs/`, `devdocs/`, or other repo-level folders.
- MC2 (Critique): same.
- MC3 (Sensemaking): same.

**The 21-00-30 finding's draft MC2 wording was:** "project-architecture invariants (e.g., when the candidate set affects placement of project artifacts, check whether placement respects the cognitive_harness installability boundary — discipline runtime files should not point at repo-level docs/)." — this NAMES the principle without using outbound paths. The string `repo-level docs/` is descriptive prose, not a path reference. ✓ COMPLIANT.

The proposed wordings for MC1 + MC3 follow the same pattern: NAME the architectural-invariant concept without path references.

### R6 — Cross-discipline coherence map

If a future inquiry surfaces an option-comparison structure containing a placement / coupling / installability question (like 02-15's R10):

1. **MC1 fires at Exploration's R10 step** — enumerates comparison axes BEFORE populating per-option cells. Project-architecture invariants are a named axis category. The installability axis surfaces here as a column in the pros/cons table.

2. **MC3 fires at Sensemaking's load-bearing concept test** on the option-recommendation. The project-architecture-invariant sub-aspect probes whether the chosen interpretation respects architectural invariants.

3. **MC2 fires at Critique's Phase 0 dimension list** — ensures project-architecture-axis is in the dimension set for adversarial testing of the recommendation.

**Cross-discipline coherence verdict:** the 3 edits compose into defense-in-depth at three pipeline stages (surface → stabilize → adversarial-test). **No gaps identified between the layers.**

**Single-edit sufficiency check:**
- MC1 ALONE: catches the miss at surface time. Sufficient for cases where the runner enumerates axes correctly. Brittle if runner forgets.
- MC2 + MC3 alone (without MC1): catches the miss at downstream defense layers. But Sensemaking's load-bearing concept test only fires when the concept is identified as load-bearing — if Exploration's option table doesn't flag the axis, Sensemaking may not test it. Critique's dimension list catches at the prosecution stage but only if the dimension is included.
- MC1 + MC2 + MC3 together: defense-in-depth. Strongest.

### R7 — MC1 branch-experiment necessity adjudication

The 21-00-30 finding said "PROBABLY YES branch experiment" for MC1 with reasoning: "structurally significant; branch experiment would test the spec-edit design before commit."

**Re-adjudication:**

Arguments for branch experiment:
- MC1 affects all future possibility-mode runs across the project. Wrong wording could over-constrain (forcing runners to enumerate axes for trivial option tables) or under-constrain (still allowing axis omission).
- The 21-00-30 framing was MEDIUM-RISK + structurally significant.

Arguments against branch experiment:
- The proposed wording is short (1 paragraph; follows §3.5 "Type-aware probing" pattern).
- The trigger condition is well-bounded ("when a possibility-mode scan produces a per-option comparison structure"). Trivial option tables (1-2 options; informal pros/cons) don't trigger; only proper comparison structures do.
- The 3-category axis enumeration ((a) inquiry-question criteria; (b) project-architecture invariants; (c) Synthesis Trigger constraints) is concrete and bounded.
- Adversarial testing in THIS inquiry's Critique phase can verify the wording.

**Verdict:** MC1 can be designed cleanly in this inquiry WITHOUT a separate branch experiment IF Critique adversarially tests the proposed wording at full discipline depth. The branch experiment was a CAUTION recommendation from 21-00-30, not a hard requirement. Direct commit becomes viable IF this inquiry's Critique survives a strong prosecution.

### R8 — Worked-example choice

The proposed spec edits could reference the 02-15 case EXPLICITLY as a worked example, OR keep the wording abstract.

**Trade-offs:**

EXPLICIT reference to 02-15:
- Pro: future readers see a concrete case → easier pattern-matching.
- Con: spec text references inquiry-specific case; couples the spec to inquiry history; violates the "disciplines are individuals" principle from auto-memory (the spec spec shouldn't reference specific inquiries).

ABSTRACT wording:
- Pro: discipline spec stays self-contained; no outbound references.
- Con: future readers may not pattern-match to the relevant case-shape without an example.

**Verdict:** ABSTRACT wording is correct per auto-memory compliance. The example pattern can be conveyed structurally ("when comparing placement options for a project artifact, the architectural-invariant axis is relevant") without naming the 02-15 inquiry.

---

## Signal Log

| # | Signal | Type | Probed → outcome |
|---|---|---|---|
| S1 | Explore.md uses inline-bold-rule pattern, NOT italic-refinement-note prefix | Density | Probed: MC1 wording must match explore.md's pattern; CANNOT use `*Refinement note (applies at...)*` prefix. |
| S2 | §3.5 "Type-aware probing" is a strong precedent for MC1 wording | Relevance | Probed: §3.5 names a specific probing requirement + references failure mode #2 (Surface-only scanning). MC1 can follow this exact pattern, naming axis-enumeration as the requirement and referencing Surface-only scanning. |
| S3 | Critique Phase 0 refinement's "across recent inquiries" framing | Tension | Probed: extending the existing list with a forward-looking exemplar mixes past + future. Cleaner to add a separate clarifying sentence. |
| S4 | Sensemaking Phase 3 sub-aspect list explicitly invites extension | Relevance | Probed: "The illustrative list is not exhaustive — future sub-aspects may emerge as evidence accumulates." MC3 is exactly this kind of extension. The framing is permissive. |
| S5 | Auto-memory compliance applies to wording not just structure | Tension | Probed: the proposed wordings name the principle without path references. "Cognitive_harness installability" and "folder-independence" are concepts, not paths. ✓ COMPLIANT. |
| S6 | Cross-discipline coherence: 3-stage defense-in-depth | Density | Probed: MC1 surfaces axis at Exploration; MC3 stabilizes axis at Sensemaking; MC2 scores axis at Critique. No gaps. |
| S7 | MC1 branch-experiment necessity | Tension | Probed: 21-00-30 said PROBABLY YES; re-adjudicating with the §3.5 precedent in hand, the proposed wording is bounded enough for direct commit IF Critique survives strong prosecution. |
| S8 | Worked-example: abstract vs explicit | Tension | Probed: ABSTRACT wins per auto-memory's disciplines-self-contained principle. Spec text should not reference inquiry-specific cases. |
| S9 (jump-scan) | Are there other discipline specs that might need analogous edits? | Absence | Probed: Innovation spec has mechanism applicability matrices that are conceptually similar but the project's evidence-base from 02-15 + 21-00-30 doesn't establish the gap in Innovation. Deferred to monitoring observable per 21-00-30's MC4 framing. |
| S10 (jump-scan) | Sequencing risk — what if MC2 + MC3 commit first but MC1 design changes after observation? | Tension | Probed: MC2 + MC3 are additive to existing exemplar/sub-aspect lists; they don't constrain MC1's eventual wording. Safe to commit MC2 + MC3 first. MC1's specific wording can iterate without invalidating MC2 + MC3. |

---

## Confidence Map

| Region | Confidence | Notes |
|---|---|---|
| R1 — Explore §3.1 possibility-mode verbatim | **confirmed** | Direct read |
| R2 — Explore inline-rule pattern | **confirmed** | 6 examples cited |
| R3 — Critique Phase 0 verbatim | **confirmed** | Direct read |
| R4 — Sensemaking Phase 3 verbatim | **confirmed** | Direct read |
| R5 — Auto-memory constraint | **confirmed** | Memory text quoted |
| R6 — Cross-discipline coherence | **inferred** | Mapping based on spec roles |
| R7 — MC1 branch-experiment necessity | **inferred** | Re-adjudication; pending Critique stress-test |
| R8 — Worked-example choice | **inferred** | Reasoned from auto-memory principle |
| Confirmed-absent: Innovation spec edit candidate | **confirmed-absent** | No evidence in scope; deferred per 21-00-30 MC4 monitoring |

---

## Frontier State

**STABLE.** Convergence criteria:
- Frontier stability: ✓
- Declining discovery rate: ✓ (jump-scan S9 + S10 yielded refinements, not new regions)
- Bounded gaps: ✓ (remaining unknowns are downstream-discipline questions, not exploration gaps)

**Jump-scan performed:** S9 + S10. No surprises.

---

## Gaps and Frontier Questions for Downstream

### For Sensemaking (SV1→SV6)

(FQ1) **Final MC1 wording.** The proposed draft for the §3.1 insertion needs SV3-SV4 stabilization on: (a) the trigger phrase that bounds when the rule fires; (b) the 3 axis categories' completeness; (c) whether to name "Surface-Only Scanning" as the violation classification explicitly.

(FQ2) **MC2 wording form.** Choose: extend existing exemplar list (mixed past+future) OR add separate clarifying sentence (cleaner). Adjudicate.

(FQ3) **MC3 wording form.** Add new sub-aspect as a bullet at the end of the Phase 5 sub-aspect list. Final phrasing of the sub-aspect.

(FQ4) **MC1 branch-experiment necessity final adjudication.** Re-adjudicate per Critique's adversarial testing in this inquiry. If wording survives → direct commit viable. If wording produces edge-case concerns → branch experiment justified.

(FQ5) **Cross-discipline coherence load-bearing concept test.** The defense-in-depth claim (MC1 + MC2 + MC3 compose) is a load-bearing concept that should be tested via ambiguity-collapse pair.

### For Decomposition

The diagnostic naturally decomposes into:
- MC1 piece (Exploration spec edit design)
- MC2 piece (Critique exemplar extension)
- MC3 piece (Sensemaking sub-aspect extension)
- Cross-discipline coherence piece (defense-in-depth verification)
- Auto-memory compliance piece
- Sequencing recommendation piece
- Branch-experiment-necessity adjudication piece
- Inherited Commitments Re-test piece

### For Innovation

Per-piece articulation. NO Property (v) firing for documentation seed. The deliverable carries SPEC-EDIT TEXT (not innovate spec edits, but other-discipline spec edits) — Property (v)'s "intervention-shape commitment for downstream behavior" question may or may not fire depending on how the spec-edit text is presented. Sensemaking should adjudicate this.

### For Critique

Multi-axis prosecution: (i) wording precision per spec edit; (ii) cross-discipline coherence claim; (iii) auto-memory compliance verification; (iv) branch-experiment-necessity verdict; (v) worked-example abstract-vs-explicit decision; (vi) sequencing recommendation defensibility.

---

## Self-Assessment

**Mode:** artifact.
**Entry point:** signal-first.
**Cycles run:** 3.
**Signals detected:** 10 (8 focal + 2 jump-scan).
**Probed:** 10. **Deferred:** 0.
**Resolution progression:** D2 default → D3 on R1-R5 → D2 on R6-R8. Per-invocation uniformity respected.
**Frontier state:** STABLE.
**Discovery rate:** declining.
**Convergence criteria status:** ✓ ✓ ✓.
**Jump-scan performed:** YES.
**Failure modes checked:** 10 named; 0 observed.

**Verdict: PROCEED to Sensemaking with reduced inquiry-scope (the structural design is straightforward; Sensemaking can focus on final wording precision + cross-discipline coherence load-bearing concept test).**

---

## Telemetry

- Mode: artifact
- Entry point: signal-first
- Cycles run: 3
- Signals detected: 10
- Probed: 10
- Deferred: 0
- Frontier state: STABLE
- Convergence criteria: ✓ ✓ ✓
- Jump-scan performed: YES
- Failure modes checked: 10 named; 0 observed

**Verdict: PROCEED to Sensemaking.**
