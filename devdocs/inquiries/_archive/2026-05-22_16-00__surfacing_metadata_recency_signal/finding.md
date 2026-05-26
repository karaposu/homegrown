---
status: active
model: claude-opus-4-7[1m]
effort: max
---
# Finding: Metadata-Recency Addition to the /surfacing Discipline

## Question

(from `_branch.md`)

> What addition to the surfacing runtime spec (`cognitive_harness/surfacing/references/surfacing.md`) — at what exact location (section / item schema field / process step / failure mode / reference-data input / new primitive / combination thereof) — would let surfacing use file last-edit-datetime (mtime) metadata as a signal during territory traversal, while explicitly protecting against the failure modes of treating "old" as "idle" AND of silently down-weighting older-but-still-relevant items, such that the existing recency-blind behavior is enriched rather than regressed?

The goal: a concrete, ship-ready spec edit with (i) a stated location for each addition, (ii) exact rule/content text appropriate for a runtime spec edit, (iii) a named anti-regression mechanism covering both regression risks, and (iv) an explicit non-regression argument (why existing behavior is preserved, not narrowed).

## Finding Summary

- **The addition is a seven-surface edit to `surfacing.md`** — not a single new section. The seven surfaces are forced by the project's placement convention at `docs/discipline_rule_placement.md` plus the Step Refinement primitive at `docs/step_refinement.md`, not invented. The shape is: one vocabulary row, one item-schema column, one State Summary derived row, one Telemetry bullet, one Step Refinement at the Item-enumeration component, two LAYER 1 failure-mode entries, and one NOT-list exclusion row.

- **One load-bearing principle holds the edit together — "metadata-as-signal-not-verdict."** The principle is stated explicitly in the Step Refinement body at §2.1 Item-enumeration and is cross-referenced from the NOT-list and from the two failure modes. It says: the relevance tag is content-driven (per §2.3 relevance-attribution); the new recency annotation is a *supplementary* signal that never replaces, filters, or down-weights the tag. Stating the principle structurally — at a named location with anchored cross-references — is what makes anti-regression a guarantee rather than a hope.

- **The new per-item field is `recency annotation`**, with the value shape `{source: filesystem | none, value: ISO8601 | null}`. The `source` declaration is mandatory and `source: none` is a first-class value (for candidate-generated items in possibility mode or externally-referenced items without local file). Numeric recency bands (recent / aged / ancient) are deliberately NOT committed at spec time — they would be calibration-dependent rules, which the Phase/Calibration-State perspective rules out for a discipline that hasn't yet accumulated band-calibration evidence. Consumers band as they see fit; the spec emits raw signal.

- **Two new LAYER 1 failure modes** at §4.2 — `Recency-Equates-Idleness` (a consumer treats recency-annotation values as a relevance proxy) and `Recency-Bias-Filter` (mtime is used to filter or down-weight items). Both Correctives anchor explicitly to §4.4's asymmetric-failure principle, which already classifies false-negatives ("information-loss-in-the-dark") as the worse failure. The two regression risks the user named are each guarded by a dedicated failure mode whose Recovery is concrete and observable.

- **Existing behavior is provably preserved.** The relevance-attribution mechanism at §2.3 is untouched (its five per-item steps still produce the tag from content + purpose). The §3.4 default component ordering is untouched (mtime read happens inside the existing Item-enumeration component, not as a new step). The taxonomy slot at `docs/discipline_taxonomy.md` is untouched (no new primitive admitted; surfacing stays Core with the same eight load-bearing primitives). A reader running surfacing while ignoring the new field gets the exact same workspace + thin artifact they got before.

- **No KILL verdicts in critique; seven SURVIVE verdicts (three with minor refinements that this finding incorporates).** The killed alternatives — numeric bands at spec time; ADD-DIMENSION on existing tags; REPAIR of the relevance-attribution mechanism; one-mode failure-mode count; outbound pointers to design-history — were each tested with structural grounds and rejected; their grounds are recorded under Reasoning so the same proposals don't quietly resurface.

- **Two paths deferred with explicit revival triggers.** Numeric recency bands (recent / aged / ancient) revive when 5+ downstream consumers settle on the same band thresholds across invocations; the layered metadata-signal pattern as a template for other metadata channels (file size, git-blame, edit-count) stays as a Research Frontier — not committed at spec time, preserved as an observation.

## Finding

This inquiry began with a designer's observation: surfacing currently treats every item in a bounded territory as equally fresh, regardless of when the underlying file was last touched. The relevance tag is determined purely by content match against the inquiry's purpose. That's correct as far as it goes — the discipline's identity at §1.1 (`cognitive_harness/surfacing/references/surfacing.md`'s verb-meaning section) commits to *purposive* relevance attribution, not metadata-driven judgment. But the recency-blindness misses a real signal: in a codebase with both active work and stale artifacts, when-was-this-last-edited tells the consumer something the content alone doesn't.

The question, then, is how to capture that signal *without* letting it slide into the territory the discipline already correctly excludes — namely, the territory where content-derived relevance gets quietly overruled by metadata-derived judgment. The user articulated the two specific failure shapes: treating "old" as if it meant "idle" (a relevance verdict from a non-relevance source) and silently down-weighting older items (a filter dressed up as an interpretation). Their framing already contained the answer's structural shape: the new signal must be additive, never substitutive.

### 1. The shape of the addition is forced by existing conventions

The first decision a spec-editor faces is *where*. The project has a convention for this. The placement convention at `docs/discipline_rule_placement.md` says: rules that apply to ALL instances of an operation belong at the operation's Component sub-section under §2. Rules that fire only at a specific step belong at that step. Rules that have no positive form (failure-only-form) belong at the Failure Mode prevention sub-section. The more specific scope wins.

mtime capture happens *every time* surfacing's Item-enumeration touches a candidate. It applies to all instances of one operation, not to a specific step. The convention forces the location: the Item-enumeration component at §2.1. The capture rule lives there, in the standard Step Refinement form (italic-prefix visual marker, 4-element shape — Name + Trigger + Action + Anchor-link — per `docs/step_refinement.md`).

The two regression risks have *positive* forms — they're not failure-only — but their detectable signatures are LAYER 1 operational symptoms (downstream observation, recoverable via re-invocation). LAYER 1 entries in `surfacing.md`'s §4.2 are the right home for them.

The per-item schema field exists at §5.4 Traversal Trace (which already carries six per-entry fields including the relevance tag and confidence). Adding the seventh is additive, not disruptive — the existing schema pattern (one row per item with multiple typed annotations) accommodates the new field without restructuring.

The State Summary at §5.5 already derives aggregate views from the Traversal Trace (the coverage map, the confirmed-absent regions, the concept-names list). A new derived row reporting per-region recency distribution fits the same pattern: aggregated, not per-item duplicated.

The vocabulary at §1.4 lists user-facing terms — `item`, `territory`, `purpose`, `workspace`, `artifact`, `relevance tag`, `relevance confidence`. Adding `recency annotation` as the eighth term keeps the vocabulary aligned with the schema.

The NOT-list at §1.3 (eight entries listing what surfacing does NOT produce) is the place where the discipline's identity statement carries its exclusions. A ninth entry — "Verdict-shaped use of metadata signals" — strengthens the identity statement by naming the new orthogonality (metadata is captured; metadata is reported; metadata is never used to produce a relevance verdict).

So the seven surfaces are not invented — they're each forced by an existing convention applied to a different aspect of the addition. The edit happens to span multiple sections, but the spread is structural, not designerial.

### 2. The principle that holds it together

Without one explicit principle, a seven-surface edit would be ambient — each surface could be misread independently, and a future contributor could drift one without noticing the rest. The principle is **metadata-as-signal-not-verdict**:

> The relevance tag (per §2.3 relevance-attribution mechanism) is determined by the content-vs-purpose match. The recency annotation is a *separate channel* — a per-item descriptive signal carrying mtime (or "no mtime available") that supplements the relevance tag. The annotation never replaces the tag, never filters the workspace, never lowers the relevance level, and never serves as the basis for omitting items from the Traversal Trace.

The principle is stated as the body of the Step Refinement at §2.1 — that's its canonical home, because the rule is what *captures* the signal and the principle is what *binds* the capture's downstream use. The principle is also reinforced at §1.3 (the NOT-list addition declares the verdict-shaped use of metadata as excluded) and is cited by the two failure modes' Correctives at §4.2. That gives the principle four anchored mentions across the spec: one canonical (the Step Refinement body), one exclusion-shaped (the NOT-list), two corrective-shaped (the two failure modes). Removing any one weakens the others; together they make the principle structural rather than rhetorical.

### 3. Why metadata is treated as an orthogonal third axis

A reader might ask: why isn't the annotation just part of the relevance tag? Why not give items a richer tag that incorporates recency, or modify the four tag levels (core / sub / side / umbrella) to include recency variants?

The reason is structural. Surfacing already operates on two orthogonal axes that the discipline carefully keeps separate. The first axis is content-vs-purpose match — the relevance tag. The second axis is *deliberately excluded* per §1.3's "Evaluation of items for correctness or quality": correctness and quality are content-conditioned, while relevance is purpose-conditioned, and the discipline does not adjudicate the former. Mixing them would conflate two different judgments.

mtime is a *third* orthogonal axis: time-of-last-edit. It's metadata-conditioned, not content-conditioned and not purpose-conditioned. Treating it as a fourth level of the relevance tag, or as a modifier on the tag, would do to the recency axis what the discipline already correctly refuses to do with the correctness axis: collapse it into a verdict-producing channel. The orthogonality is the point. The annotation is the field that carries the third-axis signal without entangling it with the first axis.

### 4. The exact spec text

This is the spec edit, in the form it should be applied to `cognitive_harness/surfacing/references/surfacing.md`.

**Addition 1 — §1.3 NOT-list (add a ninth row):**

| Excluded | Intrinsic ground |
|---|---|
| Verdict-shaped use of metadata signals (e.g., treating recency, file size, or author as a relevance proxy) | Relevance is purpose-conditioned (per §1.1 verb-meaning); metadata is property-conditioned. The two are orthogonal. The discipline captures metadata as a per-item signal (see §2.1 Recency annotation capture refinement note + §5.4 schema field) but never converts captured metadata into a relevance verdict. |

**Addition 2 — §1.4 Vocabulary (add an eighth row):**

| User-facing term | Structural definition |
|---|---|
| **recency annotation** | A per-item descriptive signal carrying the item's filesystem last-modified time (when available) or `"no mtime available"` (when not). Captured during Item-enumeration; emitted at Output-shaping; reported per-region in the State Summary's recency distribution field. Never used to filter, demote, or otherwise adjudicate the per-item relevance tag. |

**Addition 3 — §2.1 Item-enumeration (insert the Step Refinement note inside the §2.1 body, immediately after the six-component table):**

> *Refinement note (applies at §2.1 Item-enumeration / generation):*
>
> **Recency annotation capture.** When Item-enumeration encounters a candidate item, capture its filesystem last-modified time (mtime) alongside the item identifier; emit it as the `recency annotation` field at Output-shaping. The annotation's value shape is `{source: filesystem | none, value: ISO8601 | null}`. For items without filesystem backing (possibility-mode candidates per §3.1, or externally-referenced items without local file), the annotation is `{source: none, value: null}`; this is a first-class value, mandatory per item, never omitted. The filesystem mtime is emitted as an ISO8601 datetime in UTC; sentinel filesystem values (e.g., epoch) are recorded verbatim, never interpreted as "no mtime available."
>
> **The annotation is a signal, not a verdict.** The relevance tag (§2.3 relevance-attribution mechanism) is content-driven and remains the sole adjudicator of relevance. The recency annotation supplements the tag; it never replaces the tag, never filters the workspace, never lowers the relevance level, and never serves as the basis for omitting items from the Traversal Trace. The annotation enables downstream consumers (sensemaking, decomposition, or the inquiry author) to spot active-task regions or to question idle artifacts, but the annotation alone never determines relevance.
>
> Failing to keep this separation is an instance of `Recency-Equates-Idleness` (§4.2 LAYER 1 failure mode) when relevance is judged from mtime alone, and an instance of `Recency-Bias-Filter` (§4.2 LAYER 1 failure mode) when mtime is used to filter or down-weight items.

**Addition 4 — §4.2 LAYER 1 Operational failure modes (add the eighth and ninth rows):**

| # | Mode | Recognition | Corrective |
|---|---|---|---|
| 8 | **Recency-Equates-Idleness** | A consumer of surfacing's output (or surfacing itself in a hypothetical lapse) treats `recency annotation` values as a proxy for relevance — items with old mtime are inferred to be irrelevant without independent content evidence | Restore the metadata-as-signal-not-verdict separation (per §2.1 Recency annotation capture refinement note): relevance is determined by content-vs-purpose at §2.3, not by mtime. Re-test the items judged irrelevant against the content-driven relevance tag. Anchored to §4.4 asymmetric-failure principle: if relevance was judged from mtime alone, false-negatives may have been introduced — re-include the items at uncertain-relevance level (umbrella tag) and proceed. |
| 9 | **Recency-Bias-Filter** | Surfacing's output (or downstream consumption of it) shows items filtered or down-weighted by mtime — e.g., older items absent from the workspace, omitted from the Traversal Trace, or systematically tagged at a lower level than content-matching would warrant | Re-traverse the affected region with mtime-blindness restored: capture all items per §2.1 Item-enumeration; emit the `recency annotation` field but do not gate or weight on it. Anchored to §4.4 asymmetric-failure principle: mtime-based filtering creates false-negatives (information-loss-in-the-dark), the failure mode that §4.4 explicitly classifies as the worse failure. |

**Addition 5 — §5.4 Traversal Trace schema (add the seventh column after `Per-item confidence`):**

| Field | Content |
|---|---|
| Per-item recency annotation | `{source: filesystem \| none, value: ISO8601 \| null}` per item. Mandatory per item; `source: none, value: null` for items without filesystem backing. Captured at Item-enumeration; emitted at Output-shaping; never used to filter or weight relevance (see §2.1 Recency annotation capture refinement note). |

**Addition 6 — §5.5 State Summary schema (add a derived row, after `Concept-names list`):**

| Field | Content |
|---|---|
| Recency distribution | Per-region aggregation, derived from the Traversal Trace's per-item recency annotation. Format: `{region_id: {newest: <ISO8601>, oldest: <ISO8601>, no-mtime-count: N, total-items: N}}`. The aggregation is descriptive — it never adjudicates the per-region coverage map or the relevance tags within the region. |

**Addition 7 — §5.6 Telemetry (add a bullet, alongside the existing tag-level counts):**

> - `items_with_mtime` / `items_without_mtime` — counts of items where the recency annotation's `source` field is `filesystem` versus `none`. Reported as raw counts; no banding committed at spec time.

### 5. The non-regression argument

The change ENRICHES surfacing's existing behavior in a structurally provable way:

The relevance-attribution mechanism at §2.3 is untouched. Its five per-item steps (Receive / Match / Tag emission / Confidence assignment / Uncertainty handling) still produce the relevance tag from content + purpose. mtime never enters the mechanism. A reader walking through §2.3 today and a reader walking through §2.3 after this edit see the same five steps.

The §3.4 default operational ordering of the six Traversal components is untouched. mtime read fits inside the existing Item-enumeration component as a sub-step (capture metadata alongside identifier). No new component is added; no component count changes; no reordering occurs.

The §2.4 primitive composition is untouched. No new primitive is admitted to surfacing's eight load-bearing primitives. Filesystem-mtime read is performed via the existing Attention-pointer (which selects the item under consideration) and Working Memory (which holds item state); no new cognitive primitive is required. The taxonomy slot per `docs/discipline_taxonomy.md` is preserved.

The convergence criteria at §4.5 are untouched. The stop-rule remains "territory exhaustively traversed at current resolution + no item filtered at uncertain-relevance level + items rejected only on HIGH-confidence rejection." mtime is never the basis for any of these conditions.

A consumer that reads surfacing's output and IGNORES the new `recency annotation` field gets a workspace and thin artifact behaviorally identical to today's output. The new field is additive metadata; absent consumption, absent effect.

The two regression risks the user named — old-as-idle and silent down-weighting — are protected at three layers: at §1.3 (the NOT-list excludes verdict-shaped use), at §2.1 (the Step Refinement body states the principle), and at §4.2 (two failure modes provide observable Recognition + concrete Corrective when the regression fires). Defense-in-depth across three structural surfaces.

## Next Actions

### MUST

- **What:** Apply Additions 1–7 to `cognitive_harness/surfacing/references/surfacing.md` per the exact text in Finding §4 ("The exact spec text").
  **Who:** the user (or a materialization run per `docs/materialization_lifecycle.md`).
  **Gate:** observable — the spec file is edited and the seven additions are present and locatable at their stated section anchors (§1.3, §1.4, §2.1, §4.2 entries 8 and 9, §5.4, §5.5, §5.6).
  **Why:** The finding's value is realized when the spec edit lands; until then, the discipline's runtime behavior is unchanged and the user's question remains conceptually answered but operationally pending.

- **What:** After the spec edit, confirm that no outbound pointer to `docs/discipline_design_history/for_surfacing.md` (or any other design-history file) was introduced into `surfacing.md`. The Self-containedness dimension is load-bearing per the memory feedback "Disciplines self-contained."
  **Who:** the user (or the materialization run's validation phase).
  **Gate:** observable — grep the edited `surfacing.md` for `discipline_design_history` and `for_surfacing`; both should return zero matches.
  **Why:** A discipline that points outward to design-history is no longer self-contained; this is a known regression vector in the project.

- **What:** Update the SKILL.md frontmatter description at `cognitive_harness/surfacing/SKILL.md` if the description currently says "items with their relevance tag" or similar — change to "items with their relevance tag plus a per-item recency annotation."
  **Who:** the user (or the materialization run).
  **Gate:** observable — the SKILL.md description references the new field, OR the description's wording is already general enough not to need updating.
  **Why:** The SKILL.md description is what loaders and downstream consumers read first; keeping it aligned with the schema prevents the failure mode where the spec body and the SKILL.md description drift.

### COULD

- **What:** Create `docs/discipline_design_history/for_surfacing.md` (the institutional-memory file does not yet exist) and record this inquiry's design history there — including the four KILLED alternatives at Critique, the DEFERRED numeric-band candidates with their revival trigger, and the RESEARCH FRONTIER on layered metadata-signal pattern.
  **Who:** the user, or a follow-up MVL+ inquiry on discipline design-history maintenance.
  **Gate:** observable — once the surfacing discipline accumulates a second or third refinement inquiry that benefits from shared institutional memory.
  **Why:** Per memory feedback, "discipline institutional memory lives at `docs/discipline_design_history/for_<discipline>.md`." The file is the canonical home for design history that does not belong in the runtime spec.
  **Depends-on:** MUST item "Apply Additions 1–7." This COULD is GATED — do not act until the MUST resolves; the design-history file's content references the spec edits as they land.

- **What:** Examine whether the layered metadata-signal pattern (capture rule + schema field + State Summary derivation + telemetry + failure modes anchored to §4.4) generalizes to OTHER metadata channels (file size, git-blame age, edit-count per week, author). Propose a template if 2+ such channels become structurally relevant.
  **Who:** a future MVL+ or MVL2+ inquiry on metadata-channel templating.
  **Gate:** condition-bound — when a second metadata channel is proposed for surfacing or when an analogous channel is proposed for another discipline.
  **Why:** The seven-surface pattern is generalizable in principle; templating it would reduce future design cost and prevent inconsistent implementations across channels. Not committed now — single-instance evidence (mtime alone) is insufficient.

### DEFERRED

- **What:** Commit numeric recency bands (e.g., `recent` < 7 days, `aged` 7–90 days, `ancient` > 90 days, `no-mtime-available`) to the spec.
  **Gate:** condition-bound — when 5+ downstream consumers of `recency annotation` settle on the same band thresholds across at least 10 surfacing invocations.
  **Why if revived:** If consumers consistently re-derive the same bands, the bands are calibrated enough to commit at spec time. Until then, committing them would create a calibration-dependent rule with no calibration data behind it — exactly the Phase/Calibration-State perspective failure that the design deliberately avoids.

- **What:** Examine whether `Recency-Equates-Idleness` (failure mode 8) and `Recency-Bias-Filter` (failure mode 9) should also have LAYER 2 (identity-eroding) variants — e.g., `Self-coupling-to-metadata`, a hypothetical identity failure where the discipline's calibration depends entirely on metadata signals over time.
  **Gate:** condition-bound — if surfacing accumulates 2+ observed instances where calibration data shows the discipline drifting toward metadata-driven judgment despite the LAYER 1 modes firing.
  **Why if revived:** LAYER 2 identity modes erode the discipline's intrinsic character and are not recoverable via re-invocation. Adding a LAYER 2 mode without observed instances of the erosion would be speculative; the LAYER 1 modes are sufficient until evidence warrants escalation.

## Reasoning

### Why every KILL was killed

**KILL 1 — Numeric recency bands at spec time** (sensemaking Ambiguity #4, innovation W1b/W2a/W3b, critique Phase 0 Phase/Calibration-State perspective). The proposal was to commit `recent` / `aged` / `ancient` thresholds in the spec. The structural ground for killing: any band threshold is project-specific calibration data — what counts as "recent" varies by project pace. Committing band values without calibration data creates a rule whose correctness is contingent on a phase the project has not yet reached. The deferred-with-revival-trigger disposition preserves the option to commit bands later when 5+ downstream consumers converge on the same values.

**KILL 2 — `mtime annotation` as the field name** (sensemaking Ambiguity #1). The proposal was to name the field after the implementation (`mtime`). Structural ground for killing: the field carries a signal, not a source. For possibility-mode items the value is "no mtime available" — calling the field `mtime annotation` mislabels when no mtime exists. The spec's commitment should be to the signal type (recency), not to the implementation source (filesystem mtime).

**KILL 3 — Combining the two failure modes into one (`Recency-Bias`)** (innovation Inversion at P3). The proposal was a single failure mode covering both regression mechanisms. Structural ground for killing: the two mechanisms (treating mtime as relevance vs filtering by mtime) have different Correctives. FM#8's Corrective is "restore content-driven relevance separation"; FM#9's Corrective is "re-traverse with mtime-blindness restored." These are not the same recovery operation, and the failure-mode list serves the Corrective surface — collapsing the modes would force a generic Corrective that addresses neither mechanism cleanly. Two modes preserve the mechanism distinction the Correctives need.

**KILL 4 — REPAIR of the relevance-attribution mechanism at §2.3** (innovation P2 Inversion-candidate). The proposal was to modify §2.3's five-step per-item mechanism to incorporate mtime as a sixth step. Structural ground for killing: §2.3's identity is content-driven adjudication. Injecting mtime into the mechanism would conflate content-relevance with metadata-recency — the exact orthogonality violation the principle was designed to prevent. The discipline already has the right separation; the addition is at Item-enumeration (where items are first touched), not at Relevance-attribution (where they are tagged).

**KILL 5 — ADD-DIMENSION on existing relevance tags** (innovation P3 Inversion-candidate). The proposal was to extend the four tag levels (core / sub / side / umbrella) with recency variants — `core-recent` / `core-aged` / etc. Structural ground for killing: this would entangle the relevance axis with the recency axis at the tag level, making it impossible for downstream consumers to read either axis cleanly. Two orthogonal channels (tag + annotation) are easier to consume than one entangled channel with sixteen combined values.

**KILL 6 — REORGANIZE existing §2.1 prose** (innovation P2 Inversion-candidate). The proposal was to incorporate the mtime capture rule inline into §2.1's existing six-component prose, rather than as a Step Refinement note. Structural ground for killing: the Step Refinement primitive (per `docs/step_refinement.md`) is the project's standard form for this kind of rule, with the 4-element shape (Name + Trigger + Action + Anchor-link) and italic visual marker. Prose-inline form loses the named-rule property that lets failure-mode Correctives anchor-link to the rule by name; loses the visual marker; loses the standard form readers expect.

**KILL 7 — Outbound pointers from surfacing.md to design-history files** (sensemaking constraint C6, critique Self-containedness dimension). The proposal would have moved the design rationale to `docs/discipline_design_history/for_surfacing.md` and linked outward. Structural ground for killing: per memory feedback, discipline runtime spec files must not contain outbound pointers to design-history. The runtime spec is loaded into LLM context every time the discipline executes; outbound pointers add navigation cost without runtime value. Design history belongs in the design-history file, accessed by future spec-authors offline. The runtime spec is self-contained.

### Why every SURVIVE survived

**`recency annotation` field name (sensemaking Ambiguity #1 at MEDIUM confidence).** Survived because it names the signal rather than the source — forward-compatible if other recency-signal sources appear (git history, edit logs, etc.). The MEDIUM confidence flag preserves the option to revisit if implementation reveals an issue.

**`{source: filesystem | none, value: ISO8601 | null}` value shape (innovation W1a).** Survived three independent mechanisms (Combination from existing schema; Absence Recognition from redesign-level; Domain Transfer from log-row pattern). Critique's specification-gap concerns (epoch handling, timezone) are filled by the refinement that committed ISO8601 UTC + epoch-verbatim semantics. The verbosity concern (vs a flat datetime field) is the cost of correct missingness handling — the asymmetric-failure principle requires missingness to be first-class.

**Per-region State Summary derivation (innovation W2c).** Survived as the natural aggregation form because per-region patterns already exist in §5.5 (coverage map, confirmed-absent regions). Critique's single-item-region noise concern is benign (newest = oldest = the one item's mtime; no incorrectness).

**Raw telemetry counts (innovation W3a).** Survived because Telemetry's role is fast-pulse-check; raw counts are minimum-sufficient. Critique's specification-gap on counting rule is filled in the exact spec text ("items where `source = filesystem`" vs "items where `source = none`").

**Step Refinement at §2.1 (the capture rule).** Survived because the location is forced by the placement convention (operation-level scope → Component sub-section); the form is forced by the Step Refinement primitive; the body is the only structural home for the metadata-as-signal-not-verdict principle. Critique's "future contributor skim risk" is mitigated by the failure modes' anchor-link from §4.2 back to the principle.

**Principle stated at §2.1 + one-line cross-reference at §1.3 NOT-list (sensemaking Ambiguity #2 + innovation W4a + W4c).** Survived because the two placements serve different audiences. §2.1 is operation-facing (the contributor reading how the rule fires); §1.3 is identity-facing (the contributor reading what the discipline structurally does not produce). Cross-reference, not duplication.

**Two failure modes at §4.2** (FM#8 and FM#9). Survived because the two mechanisms have distinct Correctives (per KILL 3's reasoning). Critique's user-perspective concern about the name `Recency-Equates-Idleness` was tested: the X-Equates-Y naming pattern matches existing failure-mode naming convention (e.g., "Workspace-artifact desync" is X-Y-desync) and is readable as "treating recency-as-equivalent-to-idleness."

### How perspectives converged at sensemaking

Seven perspectives applied (Technical/Logical, Human/User, Strategic/Long-term, Risk/Failure, Resource/Feasibility, Definitional/Internal Consistency, Phase/Calibration-State). The Frame-exit Completeness perspective's gating check was performed and correctly did not fire (the inquiry's commitments don't include inherited multi-value terms used across distinct propositions in its own committed structures). The Phase/Calibration-State perspective surfaced the load-bearing decision to not commit numeric bands at spec time — without that perspective, the candidate set might have included band-based candidates as ACTIONABLE.

## Open Questions

### Monitoring

- **Will the `source: none` first-class value carry meaningful information in practice?** Observable after surfacing runs over 5+ inquiries that include possibility-mode items: do consumers actually use the `source: none` annotation, or do they treat it as missing data?

- **Will the per-region State Summary recency distribution serve sensemaking's needs?** Observable after sensemaking runs that consume surfacing output: does the per-region aggregation help sensemaking spot active-task regions, or do consumers need per-item recency access from the Trace?

### Blocked

- **Whether `Recency-Equates-Idleness` (failure mode 8) and `Recency-Bias-Filter` (failure mode 9) need LAYER 2 (identity-eroding) variants.** Cannot be assessed until calibration data accumulates showing whether the LAYER 1 modes are sufficient or whether the discipline drifts toward metadata-driven judgment despite them.

### Research Frontiers

- **Layered metadata-signal pattern as a template for other metadata channels** (file size, git-blame, edit-count per week, author identity). The seven-surface pattern is generalizable; templating it would be valuable, but single-instance evidence (mtime alone) is insufficient to commit a template.

- **Whether the metadata-as-signal-not-verdict principle generalizes to OTHER cognitive disciplines** beyond surfacing. The principle is currently scoped to surfacing's identity (a discipline that *draws from* a bounded territory); whether it applies to disciplines that *construct* or *synthesize* is unexamined.

### Refinement Triggers

- **The MEDIUM-confidence Ambiguity #1 resolution** (field name `recency annotation`) re-opens if implementation reveals that consumers consistently re-coin the field as something else (e.g., `metadata signal`, `freshness annotation`).

- **The decision to NOT commit numeric bands at spec time** re-opens when 5+ downstream consumers settle on the same band thresholds across at least 10 surfacing invocations (Deferred item revival trigger).

- **The decision to use exactly two failure modes (not one, not three)** re-opens if a third recency-axis regression mechanism is observed that is not subsumed by the Correctives of FM#8 or FM#9.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
in cognitive_harness/surfacing/references/surfacing.md we have a surfacing discipline

and it is essential part of MVL2+ loop in cognitive_harness/MVL2+


And i was wondering this. should surfacing discipline also explicitly use metadata (last datetime of edit) of files too? I think this can prevent errors caused by idle artifacts in the codebase, without metadata judgment, they will be considered as refined as recent files , which might not be the case. But just bc a file is old it doesnt mean it is idle as well...  but having this extra data piece is good.

and maybe surfacing discipline should have some section regarding this ?

and also this metadata is good for looking at recently edited files and what is the active task , but it shouldnt mean completely ignore rest of the files..

So, what kind of thing we can add to surfacing discipline to enable this power without limiting it or regressing it?
```

</details>
