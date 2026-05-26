# Sensemaking — surfacing file-metadata awareness design

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-22_20-35__surfacing_file_metadata_awareness_design/_branch.md`

Plus exploration handoff at `exploration.md`, with three anchor-extraction questions:

1. Fix the load-bearing vocabulary for "freshness" vs "relevance" vs "currency" vs "active-vs-idle."
2. Locate the boundary between "freshness as labeling" and "staleness as judgment."
3. Decide whether the user's "but" guard (old ≠ idle) requires explicit text in the spec or is sufficiently protected upstream by §4.4 (asymmetric-failure principle).

---

## Initial Sense Version (SV1 — Baseline Understanding)

The user wants to add file-metadata (last-edit-datetime) to the surfacing discipline so the discipline knows which items are recently edited. The catch: that metadata must not become a filter that drops old-but-still-relevant items. The question is multi-part: *should* we add it, *where in the spec* does it go, and *what mechanism* enables the signal without regressing the discipline.

---

## Phase 1 — Cognitive Anchor Extraction

### Constraints

| # | Anchor |
|---|---|
| C1 | Asymmetric-failure principle (§4.4 of surfacing) is non-negotiable — bias toward inclusion under uncertainty. |
| C2 | Relevance is purpose-conditioned, not content-conditioned (§1.1). |
| C3 | NOT-list entry 5 (§1.3) — surfacing does not evaluate items for correctness or quality. |
| C4 | NOT-list entry 6 (§1.3) — surfacing does not produce interpretive meaning of items. |
| C5 | The user's "but" clause: *"just bc a file is old it doesnt mean it is idle as well."* A user-level constraint inherited into the design. |
| C6 | Surfacing operates in both artifact case and possibility case (§3.1). The addition must say something about both. |
| C7 | The artifact is "thin" — no item content. Per-item metadata (a timestamp string) is small and stays within the thin criterion (§5.3). |
| C8 | Per-invocation idempotency (§3.7). Reading mtime at invocation time is idempotent within a single invocation. |

### Key Insights

| # | Anchor |
|---|---|
| KI1 | Freshness is **content-conditioned** (an observable property of the item itself — its mtime), not purpose-conditioned. Therefore it is a DIFFERENT AXIS from relevance. |
| KI2 | Two different axes can coexist as per-item annotations without conflict. Surfacing already has relevance + relevance-confidence as separate per-item fields; adding a third (metadata) is structurally precedented. |
| KI3 | The user's Failure modes A and B are **asymmetric**. A is an information-quality failure (downstream doesn't see staleness). B is an inclusion-gate failure (item dropped). The asymmetric-failure principle (§4.4) ALREADY structurally protects B. The new mechanism's primary job is to provide the A-avoiding signal. |
| KI4 | The user's value framing is *positive* ("recently edited files and what is the active task") — about **activity**, not staleness. Reframing: the signal value of file-mtime is "where activity is happening," not "what should be discounted." This affects naming. |
| KI5 | No project precedent for file-mtime use in a discipline (per exploration R4 confirmed-absent). The design must justify from first principles; no precedent-by-citation is available. |

### Structural Points

| # | Anchor |
|---|---|
| SP1 | Traversal Trace per-entry schema (§5.4) is extensible — adding a new per-entry field is a non-breaking schema change. |
| SP2 | State Summary's Concept-names list (§5.5) already carries provenance metadata; the State Summary accepts metadata-shaped fields. |
| SP3 | Item-enumeration component (§2.1 component 2) is where files get listed in artifact case; mtime is naturally observable at the same time. |
| SP4 | Surfacing's 6-component Traversal phase + 5-step Relevance-attribution mechanism (§2.3) separate concerns: enumeration (lists items) vs relevance-attribution (purpose-conditioned single-axis tag). A metadata mechanism belongs at enumeration, NOT at relevance-attribution. |

### Foundational Principles

| # | Anchor |
|---|---|
| FP1 | Multiple per-item axes are acceptable in surfacing (relevance + confidence already coexist). |
| FP2 | Surfacing's annotations are LABELING-level — observable facts. mtime is observable; meaning of mtime is interpretation (which is downstream). |
| FP3 | Downstream disciplines consume surfacing's output; downstream is allowed to interpret what surfacing labeled. The "mtime → stale" judgment is downstream's call, not surfacing's. |

### Meaning-Nodes

| # | Candidate concept (testable in Phase 3) |
|---|---|
| MN1 | "Freshness" — judgment-adjacent; risks crossing §1.3 NOT-list entry 5. |
| MN2 | "Currency" — also judgment-adjacent; emphasizes recency-of-relevance. |
| MN3 | "Activity" — positive-signal-of-being-worked-on framing. |
| MN4 | "Idleness / staleness" — explicitly judgment-level; downstream's interpretation territory. |
| MN5 | "Last-edit-time" / "edit-time" / "mtime" — observable-fact-level; matches user's own vocabulary ("last datetime of edit"). |

### Meta-Inspection hooks for Phase 1 (H4 and H5)

- **H4 (concept names) fires.** Concept-name candidates MN1–MN5 are load-bearing; the chosen name will appear in the spec and shape future readers' framing. The Load-bearing concept test will fire in Phase 3.
- **H5 (motivating examples) fires.** User's examples ("idle artifacts in the codebase," "active task") are illustrative of a broader pattern (metadata-aware surfacing with last-edit-time as one specific instance). The Specific-vs-pattern recognition cue will fire in Phase 3 to keep the broader pattern in view.

---

### Sense Version 2 (SV2 — Anchor-Informed Understanding)

The question is **not** "should we add file-metadata as a relevance signal" — that would conflate two different axes. The question is "should we add file-metadata as a **separate labeling axis** orthogonal to relevance, captured at enumeration time, in artifact case only?"

The two failure modes split cleanly: **Failure mode B is already protected** by the asymmetric-failure principle (§4.4) — any addition that respects that principle structurally cannot reintroduce B. **Failure mode A** is the remaining gap — downstream cannot see recency unless surfacing emits it.

The mechanism's design challenge is therefore narrower than SV1 suggested: provide the A-avoiding signal in a non-filtering, non-judgment-emitting form, framed so future readers do not misread it as quality evaluation.

---

## Phase 2 — Perspective Checking

### Lateral perspectives

**Technical / Logical.** File-mtime capture at enumeration time is a single fstat call per item. Storage in artifact: one timestamp string per item; tiny overhead. Within-invocation idempotency holds (mtime is deterministic at read time). Across invocations, mtime changes — but that's expected discipline behavior (re-invocation parameter). **No new objection.**

**Human / User.** The user named the value (positive signal of activity) and the guard (no inclusion regression). The design as anchored matches the user's intent. **Confirms anchors KI3, KI4.**

**Strategic / Long-term.** This is the first discipline-level use of file-metadata in the project. The framing precedent matters: if surfacing frames it as "observable-fact annotation" (FP2), future disciplines can apply the same pattern (e.g., `/explore` annotating discovered items with mtime, `/comprehend` weighting models by code recency). If surfacing frames it as "quality / freshness," the precedent invites future drift into evaluation. **New anchor:** the spec edit's framing is project-level-load-bearing, not surfacing-only.

**Risk / Failure.**
- **Risk R1:** Future readers misread the annotation as quality assessment, drifting into §1.3 NOT-list entry 5 territory. *Mitigation:* explicit text that it is observable fact, not judgment.
- **Risk R2:** Downstream over-trusts the annotation and uses mtime as a hard filter, despite the asymmetric-failure principle being upstream. *Mitigation:* the annotation specifies its non-filtering character at its spec location; downstream-consumer rules (e.g., sensemaking refinement notes about how to interpret the annotation) are a separate question, possibly out of scope here.
- **Risk R3:** Stable libraries / well-tested code get old mtime; downstream wrongly de-prioritizes them. **This is Failure mode B** as it shows up downstream. *Mitigation:* surfacing's gate stays inclusion-biased; the annotation is metadata only; the spec edit's framing protects this.
- **Risk R4:** Mechanism becomes complex (e.g., needs "recency tier" with thresholds). *Mitigation:* emit raw timestamp; let downstream interpret. This also avoids /explore §3.5's load-bearing-quantifiable-claim trap.

**Resource / Feasibility.** Spec edit is structural; no tooling needed. Trivial.

**Ethical / Systemic.** Not applicable.

**Definitional / Internal Consistency.** Does adding a metadata annotation conflict with surfacing's established definitions?
- §1.1 ("tagged with relevance to inquiry's purpose"): the new annotation is NOT a relevance tag — it's a parallel annotation. No conflict.
- §1.3 NOT-list entry 5 ("evaluation for correctness or quality"): conflict possible IF framed as judgment ("this is stale"). No conflict IF framed as observable fact ("this is the mtime"). **Framing matters.**
- §1.3 NOT-list entry 6 ("interpretive meaning of items"): conflict possible IF surfacing adds "this is idle" interpretation. No conflict IF surfacing stops at the timestamp. **Framing matters.**
- §4.4 (asymmetric-failure principle): any addition that filters fails this. The addition is non-filtering by construction.

**Definitional verdict:** the addition is consistent with surfacing's identity IFF framed as observable-fact annotation captured at Item-enumeration, NOT used in Relevance-attribution, NOT used as a filter. The framing constraint is structurally load-bearing — not aesthetic.

**Definitional / Frame-exit Completeness perspective (Phase 2 refinement note).** Gating predicate: does the inquiry's commitments include terms inherited from prior findings used across ≥2 distinct values/levels within the inquiry's own committed structures? Checking: the inquiry inherits "surfacing," "relevance," "asymmetric-failure" from the surfacing spec. Each is used in ONE consistent sense across `_branch.md` and `exploration.md`. **Gating does NOT fire.** Perspective skipped.

**Phase / Calibration-State perspective (Phase 2 refinement note).** Does this rule depend on calibration the project has?
- The proposed addition is structural (spec edit); not calibration-dependent at either capture-side or downstream-consumer-side.
- Phase: the project is at L0–L1 of the autonomy ladder. Addition is structural; phase-independent.
- **Verdict:** no phase/calibration-state dependence; perspective applies but produces no new anchor.

### Meta-Inspection hooks (H1, H2, H3, H7, H8, H9)

**H1 (candidate set) fires.** Exploration's 4 survivor positions were P1, P5, P6, P7. Applying the convergence-recognition meta-question: are P1, P5, P6 doing the same thing?
- P1 (per-item annotation layer): annotation captured at enumeration; per-item field in Traversal Trace.
- P5 (enrichment sub-step): a process step that reads metadata.
- P6 (downstream-consumable artifact field only): same data + emphasis on non-use by surfacing itself.
- P7 (separate confidence-like map): same data + a parallel confidence-tier.

**Verdict:** P1, P5, P6 are EFFECTIVELY THE SAME MECHANISM described from different angles (annotation type vs process step vs downstream-consumer framing). P7 is a meaningful structural difference (adds freshness-confidence dimension). The real candidate set after convergence-recognition is **{M1 = P1+P5+P6 combined, M2 = M1 + freshness-confidence tier (P7)}** — and a frontier extension M3 (per-region edit-time-distribution in State Summary, from exploration's P2). This collapse is a 14-00-deferred-Layer-2 check (Cross-Candidate Unity) firing informally per the meta-inspection scaffolding.

**H2 (frame scope).** Frame: "additions to surfacing's spec." Out-of-scope: cross-discipline metadata-awareness (other disciplines' specs); implementation details (git vs fs mtime); specific threshold values. Frame is COMPLETE for the user's question; downstream-consumer rules in adjacent disciplines are a separate inquiry frontier.

**H3 (question framing).** Does the question's wording pre-bias? Initial wording was *"should surfacing discipline also explicitly use metadata."* "Use" is ambiguous — USE-as-input-to-Relevance-attribution vs USE-as-emit-as-annotation. Anchors KI1, KI2, SP4 have separated these. **The framing is no longer ambiguous post-anchor-extraction.**

**H7 (phase / calibration state).** Addressed in the lateral Phase/Calibration-State perspective above. No phase dependence.

**H8 (self-reference, throughout).** I'm evaluating a discipline's spec design using a sensemaking framework that shares project vocabulary with the spec. **External grounding** is required:
- The user's "but" clause is extrinsic to the framework (a user-level constraint).
- Exploration R4 confirmed-absent uses empirical artifact-state evidence (no precedent), not framework reasoning.
- The asymmetric-failure principle's protection of failure mode B is derivable from the principle alone (doesn't require evaluating the framework).
- File-system mtime is extrinsic empirical reality.

These external anchors prevent circularity. Sensemaking's verdict will be grounded in evidence outside the framework.

**H9 (user language alignment).** The user used "metadata (last datetime of edit) of files," "idle artifacts," "active task." Candidate concept names that align with user vocabulary: `last-edit-time`, `edit-time`, `last-modified-time` (all observable-fact level). The user did NOT use "freshness" or "staleness." User-language alignment favors the observable-fact names. **This will influence Phase 3 Ambiguity 1.**

---

### Sense Version 3 (SV3 — Multi-Perspective Understanding)

Lateral perspectives confirmed the SV2 anchor set with one strategic-level addition: the spec edit's framing precedent is project-level-load-bearing, not surfacing-only.

Definitional perspective produced a **load-bearing constraint**: the addition is identity-consistent IFF framed as observable-fact annotation, captured at Item-enumeration, NOT used in Relevance-attribution, NOT used as a filter. The framing constraint is structural, not aesthetic.

Meta-Inspection hooks tightened the candidate set: P1+P5+P6 collapse to one mechanism (M1); P7 is a meaningful variant (M2); a per-region aggregation is a deferred extension (M3). The candidate set for innovation is **{M1, M2}** with M3 as deferred frontier.

User-language alignment (H9) and §1.3 NOT-list entry 5 (C3) jointly favor observable-fact-level naming (`last-edit-time`) over judgment-adjacent names (`freshness`, `staleness`).

---

## Phase 3 — Ambiguity Collapse

### Ambiguity 1 — Load-bearing concept name (H4 Load-bearing concept test + H9 user language alignment)

**Candidates:** `freshness` / `currency` / `activity` / `staleness` / `idleness` / `last-edit-time` / `edit-recency`.

**Strongest counter-interpretation:** "Freshness" is the most natural label in casual English and is used elsewhere in the project (e.g., `docs/regression/desc.md` uses "is everything still fresh?" in maintenance-mode framing). Adopting "freshness" maintains cross-doc vocabulary consistency.

**Why the counter fails (structural grounds):** "Freshness" is **judgment-adjacent** — it implies fresh-vs-stale, which IS a quality dimension. §1.3 NOT-list entry 5 specifically excludes "evaluation for correctness or quality." Using "freshness" risks future readers misreading the annotation as a quality assessment, opening the door to Risk R1 (drift into evaluation). The user's own vocabulary ("metadata (last datetime of edit)") points at the observable fact, not the judgment. The counter is precedent-only ("regression catalog uses freshness"); precedent doesn't override structural grounds.

**Confidence:** HIGH — structural grounds (NOT-list entry 5 + user language alignment) outweigh precedent ("freshness" appearing in adjacent docs).

**Resolution:** Use **`last-edit-time`** as the primary concept name. Optionally the spec may later introduce a derived label like `edit-recency-tier` (RECENT / MID / OLD as ranges) — BUT THIS IS DEFERRED. A recency-tier commits a load-bearing quantifiable claim (the threshold) and requires empirical probing per /explore §3.5. MVP emits raw timestamp only.

**What is now fixed:** concept name is `last-edit-time`; the annotation's semantic is observable fact.

**What is no longer allowed:** framing the annotation as freshness / staleness / idleness in the canonical spec text. Judgment-level interpretations belong to downstream consumers, not to surfacing's labeling.

**What now depends on this choice:** all spec text referring to the annotation; the §1.3 NOT-list clarification.

**What changed in the conceptual model:** the new annotation is unambiguously labeling-level, not judgment-level. The "freshness drift into quality" failure mode is structurally prevented at the naming level (a defense-in-depth move on top of the existing asymmetric-failure protection).

---

### Ambiguity 2 — Capture step (where in the Traversal cycle does mtime get read?)

**Candidates:** capture at **Item-enumeration** (§2.1 component 2) vs **compute at Output-shaping** (§2.1 component 6).

**Strongest counter-interpretation:** Capture at Output-shaping centralizes "metadata emission" in one component; the architecture is cleaner if all per-item annotation emission lives at Output-shaping.

**Why the counter fails (structural grounds):** Between enumeration and output-shaping, a file may be modified (within a long invocation). The mtime read should happen at the moment the item is added to the workspace — at enumeration. This matches surfacing's "capture-at-moment-of-tagging" principle (§2.1 component 6 itself states this principle for tagging; the same principle applies to mtime capture by analogy). Reading at Item-enumeration also pairs naturally with the file-system access already required by enumeration in artifact case (single fstat alongside the file-listing operation).

**Confidence:** HIGH — capture-at-moment principle + colocation with existing file-system access at enumeration.

**Resolution:** **Capture at Item-enumeration (§2.1 component 2).** The mtime read is part of the file's identifier-and-metadata read at enumeration.

**What is now fixed:** capture step = Item-enumeration component.

**What is no longer allowed:** deferring capture to later Traversal phases.

**What now depends on this choice:** §2.1 component 2's spec text; the per-item record schema's field semantics.

**What changed in the conceptual model:** the mechanism is anchored at the natural file-system-touching step; capture-at-moment-of-tagging principle generalizes from "tag" to "tag + observable metadata."

---

### Ambiguity 3 — Scope: artifact case only, or both cases?

**Candidates:** Q1 artifact-case-only / Q2 possibility-case analog / Q3 silent absence (from exploration R6).

**Strongest counter-interpretation:** Q2 (possibility-case analog) — defining "candidate's last-revisit timestamp" or "candidate's last-mention-in-corpus date" preserves uniformity across modes. Without an analog, surfacing's behavior diverges by mode, which is a maintenance burden.

**Why the counter fails (structural grounds):** In possibility case, candidates are generated, not enumerated from a pre-existing territory. There is no canonical "last-edit-time" for a candidate that was just generated. The proposed analog requires:
1. A notion of session-history that surfacing does NOT have (§1.3 NOT-list entry 7 excludes cross-inquiry memory).
2. Additional bookkeeping with no clear downstream consumer at MVP.

Q2 adds complexity for marginal value. Q3 (silent absence) is doc-quality regression — future readers may try to apply the artifact-case mechanism in possibility case by mistake.

**Confidence:** HIGH — NOT-list entry 7 + minimal-MVP principle.

**Resolution:** **Artifact-case-only (Q1).** The spec explicitly declares the annotation applies in artifact case; in possibility case, the field is absent from per-item records (or marked N/A).

**What is now fixed:** scope = artifact case.

**What is no longer allowed:** emitting `last-edit-time` for candidate-generated items; silently applying the mechanism without a scope declaration.

**What now depends on this choice:** spec text scoping language; downstream consumers' handling of missing-field case.

**What changed in the conceptual model:** scope is clean; possibility case is unaffected by the addition.

---

### Ambiguity 4 — Non-filtering reaffirmation: required text, or §4.4 sufficient?

**Candidates:** add explicit non-filtering text at the new annotation's spec location / rely on §4.4 alone.

**Strongest counter-interpretation:** §4.4 (asymmetric-failure principle) is upstream of any annotation; it already commits surfacing to inclusion-under-uncertainty. An explicit reaffirmation is redundant — the discipline's reader is expected to know §4.4.

**Why the counter fails (structural grounds):** The user's "but" guard is load-bearing in the user's framing — preserving it across the spec edit's lifecycle requires that the spec text at the addition's location reflect it. Future readers may not connect the new annotation back to §4.4 — particularly if the annotation later acquires a tier structure (RECENT / MID / OLD) or other discriminating affordances, at which point misuse risk grows. The cost of an explicit one-line reaffirmation is minimal; the robustness benefit is non-trivial.

**Confidence:** HIGH — future-reader robustness; cost-benefit favors explicitness.

**Resolution:** **Add an explicit non-filtering reaffirmation** at the §2.1 Item-enumeration extension. The sentence states that the annotation is non-filtering, downstream-consumable, and does not participate in surfacing's inclusion decision.

**What is now fixed:** spec edit includes the non-filtering reaffirmation text.

**What is no longer allowed:** relying solely on §4.4 to communicate the non-regression promise to spec readers.

**What now depends on this choice:** the spec text's structure at the addition's canonical location.

**What changed in the conceptual model:** the user's "but" guard is preserved in spec text, not only in the upstream principle. Defense-in-depth on Failure mode B.

---

### Ambiguity 5 — Spec placement: where does the addition LIVE?

**Candidates:** (a) §1.3 NOT-list clarification / (b) §2.1 Item-enumeration component / (c) §5.4 Traversal Trace schema / (d) §5.5 State Summary schema / (e) new dedicated section.

**Strongest counter-interpretation:** A new dedicated section (e.g., §2.5 "Metadata Annotations") gives the addition prominence and a single location; cleaner for readers who want to find "the metadata stuff."

**Why the counter fails (structural grounds):** Per `docs/discipline_rule_placement.md` (Operation-or-Step-First with Scope-Of-Application), placement is determined by the rule's SCOPE. The new mechanism is **step-level** (Item-enumeration). Its canonical home is §2.1 Item-enumeration component. Other surfaces get cross-references (one-line pointers), not duplicated content. Adding a top-level new section duplicates surface area; the placement convention forbids this without strong justification.

**Confidence:** HIGH — the project's placement convention is explicit and authoritative.

**Resolution:** **Multi-surface placement following the placement convention.**

- **Canonical home:** §2.1 Item-enumeration component — extend with sub-text describing observable-fact metadata capture in artifact case, including the non-filtering reaffirmation.
- **Schema extensions** (cross-references, one-line content):
  - §5.4 Traversal Trace per-entry: add field `last-edit-time` (artifact-case only; absent / N/A in possibility case).
  - §5.5 State Summary: (deferred) optional per-region edit-time-distribution; doc-only.
- **NOT-list clarification:** add a one-line note at §1.3 (or alongside the NOT-list table) — observable-fact metadata annotations like `last-edit-time` are NOT instances of quality / correctness evaluation (entry 5) nor interpretive meaning (entry 6); they are factual labeling content.
- **No new dedicated section.**

**What is now fixed:** placement follows the project's placement convention; multi-surface but canonical home is §2.1.

**What is no longer allowed:** scattering the addition without a canonical home; introducing a new top-level section.

**What now depends on this choice:** spec text structure across §1.3, §2.1, §5.4 (and optionally §5.5).

**What changed in the conceptual model:** placement is convention-conforming and maintainable.

---

### Ambiguity 6 — Annotation terminology (Load-bearing concept test for SV2+ terminology)

**Candidates:** "annotation field" / "annotation axis" / "annotation layer" / "per-item field."

**Strongest counter-interpretation:** `/explore`'s spec uses "annotation layers" (§2.2 of `/explore`). Surfacing should reuse the same vocabulary for cross-discipline consistency.

**Why the counter fails (structural grounds):** Surfacing's own vocabulary (§1.4) uses "relevance tag" + "relevance confidence" as field names. Surfacing does NOT use "annotation layer" elsewhere. Importing /explore's vocabulary creates inconsistency within surfacing's own spec. Internal consistency within a single discipline outweighs cross-discipline vocabulary alignment.

**Confidence:** MEDIUM — both options are defensible; internal-to-surfacing wins on lighter grounds.

**Resolution:** Use **"per-item annotation"** or simply describe it as an additional per-item field, matching surfacing's existing patterns. Avoid importing "annotation layer" without surfacing-internal precedent.

**What is now fixed:** terminology aligns with surfacing's internal vocabulary.

**What is no longer allowed:** importing `/explore`'s "annotation layer" terminology into surfacing's spec without surfacing-internal precedent.

**What changed:** minor terminology consistency.

---

### Specific-vs-pattern recognition cue (H5)

The user's specific examples: "errors caused by idle artifacts in the codebase" and "active task." Are these THE WHOLE PROBLEM, or examples of a wider pattern?

**The wider pattern is: metadata-aware surfacing.** The user's examples are instances of the wider pattern — today it's last-edit-time, tomorrow it might be other observable metadata (file size, line count, presence in git index, last-commit-author, test-coverage-status). The MVP focuses on last-edit-time per the user's explicit ask; the wider pattern is a frontier extension.

**Resolution:** The addition addresses the BROADER PATTERN by introducing a **named category** ("observable-fact metadata annotations") + a **specific instance** (`last-edit-time`). Future additions in the category extend the spec without requiring structural change. The spec's §2.1 extension says: "in artifact case, the component captures observable file metadata at enumeration; `last-edit-time` is the first such annotation; additional metadata fields may be added under the same category." This satisfies both the specific case (the user's stated need) AND opens forward-compatibility.

---

### Sense Version 4 (SV4 — Clarified Understanding)

After ambiguity collapse, the design is sharp:

- **Concept name:** `last-edit-time` (observable-fact level).
- **Capture location:** §2.1 Item-enumeration component (when files are listed in artifact case).
- **Schema extension:** §5.4 Traversal Trace per-entry adds `last-edit-time` field.
- **NOT-list clarification:** one-line note at §1.3 that observable-fact metadata annotations are NOT quality / correctness evaluations and NOT interpretive meaning.
- **Non-filtering reaffirmation:** explicit text at §2.1 stating the annotation is non-filtering.
- **Scope:** artifact-case only; possibility case is unaffected.
- **Pattern generalization:** named category ("observable-fact metadata annotations") with `last-edit-time` as the first instance; future metadata kinds extend the category without structural change.

The mechanism is **downstream-consumable**: sensemaking, decomposition, innovation, critique can read `last-edit-time`. Downstream is NOT required to use it; if downstream wants to interpret it as "stale," that's downstream's interpretation territory.

The two failure modes are addressed:
- **Failure mode A (idle-as-refined):** the annotation provides the recency signal downstream needs. Downstream can distinguish recently-active vs not-recently-edited items. Signal value of A-avoidance captured.
- **Failure mode B (relevant-but-idle dropped):** annotation is non-filtering. Surfacing's gate (asymmetric-failure principle §4.4) is unchanged. Non-filtering reaffirmation at §2.1 makes this explicit at the spec edit's location (defense-in-depth).

---

## Phase 4 — Degrees-of-Freedom Reduction

### What is now fixed

| Field | Value |
|---|---|
| Concept name | `last-edit-time` (observable-fact) |
| Capture step | §2.1 Item-enumeration component |
| Schema location | §5.4 Traversal Trace per-entry |
| NOT-list anchor | clarification at §1.3 |
| Non-filtering reaffirmation | at §2.1 |
| Scope | artifact-case only |
| Pattern | named category ("observable-fact metadata annotations") for future extension |
| Threshold / tier | deferred (no commitment at MVP) |

### What is eliminated

- "Freshness" / "staleness" / "idleness" as primary concept names in the spec.
- Capture at Output-shaping or later steps.
- Use of mtime as input to Relevance-attribution.
- Use of mtime as a filter / gate.
- Possibility-case analog.
- A new top-level dedicated section.
- Commitment to a specific recency threshold at MVP.

### What paths remain viable (handed to innovation for selection)

| Path | Description | Status |
|---|---|---|
| **M1** | Minimal MVP: raw `last-edit-time` per-item annotation + spec edits as described | **Default path** |
| **M2** | M1 + freshness-confidence tier (per-item dual-confidence: relevance-confidence + freshness-confidence; from P7) | Possible extension; adds bookkeeping complexity; benefit is downstream's ability to assess metadata reliability |
| **M3** | M1 + per-region edit-time-distribution in §5.5 State Summary (from P2) | Deferred frontier; derivable from Trace; doc-only |

Innovation will adjudicate among M1, M2, M3 (and possibly combinations).

### Sense Version 5 (SV5 — Constrained Understanding)

The solution space is now constrained:
- **Mechanism shape:** observable-fact per-item annotation captured at Item-enumeration.
- **Spec surfaces:** §1.3 (NOT-list clarification), §2.1 (canonical home + reaffirmation), §5.4 (schema), optionally §5.5 (deferred).
- **Scope:** artifact-case only.
- **Naming:** `last-edit-time`.
- **Three candidate paths (M1, M2, M3) remain.** M1 is the default; M2 and M3 are extensions to be adjudicated by innovation.

---

## Phase 5 — Conceptual Stabilization

### Core claim

The surfacing discipline can add an **observable-fact per-item metadata annotation** named `last-edit-time` at the §2.1 Item-enumeration component without violating its identity. The annotation is artifact-case-only, non-filtering, and downstream-consumable. It prevents **Failure mode A** (idle-treated-as-refined) by making the recency signal available; it does not introduce **Failure mode B** (relevant-but-idle dropped) because it does not participate in surfacing's inclusion decision — the asymmetric-failure principle (§4.4) remains the structural inclusion gate, unchanged.

### Why this fits surfacing's identity

| Identity constraint | How the addition satisfies it |
|---|---|
| §1.1 (relevance is purpose-conditioned) | Annotation is content-conditioned (observable property of the item); orthogonal axis to relevance, not in conflict |
| §1.3 NOT-list entry 5 (no quality evaluation) | `last-edit-time` is observable fact, not judgment. Spec text + naming + NOT-list clarification reinforce this |
| §1.3 NOT-list entry 6 (no interpretive meaning) | Surfacing emits the raw timestamp only; "this is stale" is downstream's interpretation, not surfacing's |
| §1.3 NOT-list entry 7 (no cross-inquiry memory) | Annotation is captured per-invocation from file system; no memory carry-over |
| §4.4 (asymmetric-failure principle) | Annotation is non-filtering; the gate stays inclusion-biased; explicit reaffirmation at §2.1 |
| §3.7 (idempotency within invocation) | mtime read at invocation time is deterministic |
| §5.3 (thin artifact criterion) | Per-item timestamp string is small; stays within criterion |

### Accommodation trigger check (H6)

Did multiple perspectives destabilize the model? Let me check.

- Technical / Logical: no destabilization.
- Human / User: confirmed model.
- Strategic / Long-term: added one anchor (framing precedent matters project-wide); model accommodated.
- Risk / Failure: identified 4 risks; all mitigated by model's existing constraints.
- Resource / Feasibility: confirmed.
- Definitional / Internal Consistency: required naming constraint (observable-fact); model adopted constraint.

The model accommodated one new anchor (strategic framing precedent) but did not require fundamental rework. **Accommodation trigger does NOT fire.** This is normal anchor refinement, not model misfit.

### Self-reference check (H8)

External anchors that ground the verdict outside the framework:
- The user's "but" clause is extrinsic.
- Exploration R4 confirmed-absent uses empirical evidence (no precedent), not framework reasoning.
- File-system mtime is extrinsic empirical reality.
- The asymmetric-failure principle's protection of B is derivable from the principle alone, not from evaluating the framework.

Self-reference circularity is structurally avoided.

---

### Final Sense Version (SV6 — Stabilized Model)

**The stabilized model:** Add to surfacing's spec a new per-item annotation named `last-edit-time`, captured at the §2.1 Item-enumeration component in artifact case, persisted in the §5.4 Traversal Trace, with an explicit non-filtering reaffirmation at §2.1 and a NOT-list clarification at §1.3. Scope: artifact-case only. Pattern: named category ("observable-fact metadata annotations") with `last-edit-time` as the first specific instance; future metadata kinds extend the category without structural change.

The addition addresses Failure mode A (idle-as-refined) by making the recency signal available downstream. It does NOT introduce Failure mode B (relevant-but-idle dropped) because the annotation is non-filtering — the asymmetric-failure principle (§4.4) remains the structural inclusion gate, and the §2.1 non-filtering reaffirmation provides defense-in-depth at the spec edit's location.

### Answers to exploration's three handoff questions

**1. Vocabulary fixed.** Use **`last-edit-time`** as the primary concept name. Judgment-adjacent alternatives (`freshness`, `staleness`, `idleness`, `currency`, `activity`) are rejected — they risk crossing §1.3 NOT-list entry 5 (quality evaluation). The user's own language ("last datetime of edit") supports the observable-fact-level naming. Downstream consumers MAY interpret the timestamp as "stale" or "active" — that is downstream's interpretation territory, not surfacing's.

**2. Boundary between labeling and judgment located.** Labeling = surfacing emits raw observable fact (timestamp string). Judgment = "this is stale / this is idle / this is active / this is canonical" — these are downstream interpretations of the timestamp. **Surfacing STOPS at labeling.** Downstream interprets if and how it wants to. The boundary is operationalized by the rule: surfacing emits the value; surfacing does not categorize the value into recency tiers, idle/active labels, or quality verdicts.

**3. Yes, the "but" guard requires explicit spec text.** §4.4 (asymmetric-failure principle) is upstream protection, but future readers may not connect the new annotation back to §4.4 — particularly if the annotation later acquires a tier structure or discriminating affordances. An explicit one-line non-filtering reaffirmation at §2.1 (the new annotation's spec location) preserves the user's "but" guard in the discipline's text. The cost is minimal; the robustness benefit is meaningful. This is the defense-in-depth choice.

### SV1 → SV6 comparison

| Dimension | SV1 | SV6 |
|---|---|---|
| Frame | "Add file-metadata to surfacing somehow." | "Add observable-fact per-item annotation `last-edit-time` at §2.1 Item-enumeration in artifact case." |
| Axis | Implied to be merged with relevance | Separate orthogonal axis from relevance |
| Naming | Open / "metadata" generic | Specifically `last-edit-time` — observable-fact-level |
| Failure mode handling | Both failure modes treated as symmetric concerns | A and B split: B already protected by §4.4; A is the gap the addition fills |
| Scope | Unclear (artifact + possibility?) | Artifact-case only |
| Where in spec | Open | Canonical home §2.1; cross-references at §1.3 + §5.4 |
| Future-extension | Open | Named category for future metadata kinds |
| User's "but" guard | Open | Explicit text required at §2.1; not solely §4.4 |

The structural shift is substantial. Multiple perspectives shaped multiple commitments. SV6 differs meaningfully from SV1 — this is healthy sensemaking, not superficial relabeling.

---

## Saturation Indicators (Telemetry)

| Indicator | Status |
|---|---|
| Perspective saturation | Multiple lateral perspectives applied; the last few (Resource, Ethical/Systemic, Definitional/Frame-exit) produced no new anchor TYPES. Saturation approached. |
| Ambiguity resolution ratio | 6 ambiguities identified; 6 resolved (5 with HIGH confidence; 1 with MEDIUM — Ambiguity 6, terminology). 0 OPEN. |
| SV delta | SV1 → SV6 shows clear structural shifts on 8 dimensions (axis, naming, failure-mode split, scope, placement, future-extension, "but" guard, capture step). Substantial. |
| Anchor diversity | All 5 anchor types represented: Constraints (C1-C8), Key Insights (KI1-KI5), Structural Points (SP1-SP4), Foundational Principles (FP1-FP3), Meaning-Nodes (MN1-MN5). Multi-dimensional. |

## Self-Assessment Verdict

**PROCEED.**

- All convergence indicators approaching saturation; no ambiguity left OPEN.
- No failure modes raised: Status Quo Bias (no — challenged "freshness" precedent); Premature Stabilization (no — model accommodated strategic anchor; multiple perspectives produced novel anchors); Anchor Dominance (no — multiple anchor types interact); Perspective Blindness (no — risks identified including uncomfortable ones); Clean Resolution Trap (no — counter-interpretations stated and tested on structural grounds for each ambiguity); Self-Reference Blindness (no — external grounding established via exploration R4 + user's extrinsic "but" clause + file-system reality).
- Three exploration-handoff questions answered with HIGH confidence (1 of 6 ambiguities at MEDIUM is a terminology call, not core).
- **Hand to decomposition.** The remaining work is to partition the design into independently coherent pieces: (i) the §2.1 spec edit text, (ii) the §5.4 schema extension text, (iii) the §1.3 NOT-list clarification, (iv) optional downstream-consumer rules (probably out of scope here), (v) the future-extension pattern statement. Each piece has its own interface and dependency order.
