---
status: active
model: claude-opus-4-7[1m]
effort: max
---
# Finding: surfacing file-metadata awareness design

## Question

**Question:** What addition(s) to the surfacing discipline spec at `cognitive_harness/surfacing/references/surfacing.md` would enable file-metadata-awareness (last-edit datetime of files in the territory) as one input signal to surfacing's relevance judgment — including whether the addition lives in an existing component or warrants its own section, and what mechanism the addition introduces — without limiting or regressing the discipline by making "old file = idle/irrelevant" a default judgment that silently excludes relevant-but-idle items from being surfaced?

**Goal:** a concrete proposal naming (i) the target location in surfacing's spec, (ii) the mechanism, (iii) explicit non-regression treatment showing how relevant-but-idle items are still surfaced, with reasoning that compares at least one alternative on each axis. A successful proposal addresses BOTH failure modes the user named:

- **Failure mode A** (without metadata): old-and-idle items are treated as "refined as recent files" — surfaced as actively-maintained when they are not. The user calls these "errors caused by idle artifacts."
- **Failure mode B** (with naive metadata): old-but-non-idle items are dropped — the metadata becomes a hard filter that silently excludes relevant-but-idle material. The user's explicit guard: *"just bc a file is old it doesnt mean it is idle as well."*

## Finding Summary

- **Yes, add the metadata signal — as a *per-item annotation*, not as a filter.** Surfacing should capture the file's last-edit time at the moment the file is enumerated in artifact case (codebases, literature, corpora) and emit it alongside the existing per-item fields (the relevance tag and confidence). The annotation is a label — an observable fact about the item — not a judgment about the item's quality, freshness, or relevance.

- **Name the signal `last-edit-time`** — an observable-fact label, NOT `freshness` / `staleness` / `idleness` / `currency` / `activity`. Those judgment-adjacent names would cross the surfacing-spec boundary in `cognitive_harness/surfacing/references/surfacing.md` §1.3, entry 5 of its NOT-list (surfacing does not evaluate items for correctness or quality). The user's own phrasing ("metadata (last datetime of edit)") points at the observable fact; the spec follows the user's language.

- **Place the addition at three spec locations, with §2.1 as the canonical home.** Per `docs/discipline_rule_placement.md` (the project's placement convention for refinement rules in discipline specs):
  - **§2.1 Item-enumeration component** — extended with a sub-paragraph that describes the capture mechanism + an explicit non-filtering reaffirmation + the named-category framing + possibility-case scoping.
  - **§5.4 Traversal Trace per-entry table** — one new row for the `last-edit-time` field, with a short cross-reference note immediately after the table.
  - **§1.3 NOT-list** — a one-paragraph clarification note declaring that observable-fact metadata annotations are NOT instances of NOT-list entry 5 (quality evaluation) and NOT entry 6 (interpretive meaning).
  - A new top-level section (e.g., a hypothetical "§2.5 Metadata Annotations") would have violated the placement convention; rejected.

- **The non-regression guarantee uses defense-in-depth across two surfaces.** Layer 1: surfacing's existing **asymmetric-failure principle** at §4.4 (the discipline's rule that "missing a relevant item is structurally worse than surfacing an irrelevant item — lean toward INCLUSION under uncertainty") is upstream of any annotation; it forbids filtering on metadata as a general principle. Layer 2: an explicit non-filtering reaffirmation written at §2.1 (the new annotation's location) restates the guarantee at the addition's reading surface. Future readers reaching either layer encounter the constraint.

- **Introduce a named category, "observable-fact metadata annotations," to host future additions.** The category lets future kinds of observable file metadata (file-size, line-count, git-tracked-state) extend the spec under the same constraints — labeling-level, non-filtering, downstream-consumable — without restructuring the discipline's process. The category framing lives inside the §2.1 extension's body; the NOT-list note and the schema row reference it without duplicating.

- **Stay minimal at first ship — M1 (raw timestamp only).** Two richer alternatives — adding a per-item freshness-confidence dimension (alternative M2), and adding a per-region edit-time-distribution summary in §5.5 (alternative M3) — are **deferred with concrete revival triggers**, not adopted at this addition. Rationale: no precedent for file-metadata exists in any of the project's other discipline specs (`/explore`, `/sense-making`, `/decompose`, `/comprehend`, `/reflect`, `/navigation`); the first addition should establish the minimal pattern; richer forms should be empirically driven, not pre-committed.

- **Scope: artifact case only.** In possibility case (where the territory is conceptual and items are candidate-generated, not enumerated from a pre-existing source), no file `last-edit-time` exists; the field is absent or N/A in per-item records for possibility-case invocations. The spec declares this scope explicitly to prevent future readers from applying the mechanism in possibility case.

- **Surfacing emits the raw timestamp; downstream interprets.** Whether to weight items by recency, infer staleness, or treat the timestamp as a quality signal is each downstream discipline's call (sensemaking, decomposition, innovation, critique). Surfacing's responsibility ends at making the observable fact available. The complementary question — "should `/sense-making` weight anchors by `last-edit-time`?" or "should `/innovate` prefer recently-edited material for Combination?" — is a separate frontier preserved with an observable revival trigger (see Open Questions → Research Frontiers).

## Finding

### Background — why this question matters

Surfacing (the discipline specified at `cognitive_harness/surfacing/references/surfacing.md`) is the upstream cognitive operation in the project's MVL2+ inquiry pipeline (the variant of the Extended Cognitive Loop runner specified at `cognitive_harness/MVL2+/SKILL.md`). It "draws items from a bounded territory into the inquiry's present attention" — surveying a codebase, a literature corpus, or a candidate-generated possibility space, and tagging each item with how it bears on the inquiry's purpose.

Today, when surfacing operates on a real codebase (the artifact case), it reads the files and tags them with relevance — but it does NOT capture WHEN each file was last edited. Two consequences follow:

- A file edited yesterday and a file untouched for three years are surfaced with the same kind of label. If both are tagged "core-relevant," downstream cognition treats them as equally current, even if one is clearly under active maintenance and the other is dormant.
- The user's stated concern is precisely this: idle artifacts in a codebase can be treated as "refined as recent files" by downstream disciplines, producing errors that no one in the pipeline can attribute to staleness — because the staleness was never observed.

But the user also explicitly guarded against the opposite mistake: "just bc a file is old it doesnt mean it is idle as well." A stable library that hasn't needed editing in two years is not idle — it is finished. The fix must not turn into an inclusion gate that silently drops old-but-still-relevant items.

The question is therefore double-sided: how does surfacing gain the signal that ENABLES recognition of idle artifacts (Failure mode A) without REINTRODUCING the failure mode where old files get dropped wholesale (Failure mode B)?

### 1. The mechanism — observable-fact annotation at Item-enumeration

The addition introduces a new per-item annotation called **`last-edit-time`**: the file's last-modified timestamp as observed at the moment the file is enumerated.

The annotation is captured at the existing **Item-enumeration component** of surfacing's Traversal phase (§2.1, component 2 of the six-component table). When surfacing operates on an artifact territory, it already lists the items in the territory (e.g., walks a directory tree); the same operation that lists the files can read each file's metadata at the same time. This is one file-system access, not two — the addition does not introduce an extra traversal step.

The annotation is **emitted as labeling content**, not interpretation. The spec says nothing about what the timestamp MEANS for any given item — only that the timestamp WAS observed. The interpretation ("this file is stale," "this file is part of active work," "this file is the canonical implementation") is reserved for downstream disciplines. Surfacing's role ends at making the observable fact available.

The annotation is **non-filtering**. It plays no part in deciding whether the item is surfaced at all. Surfacing's existing inclusion gate — driven by the asymmetric-failure principle (§4.4) and the Inhibition primitive (§2.4) — remains unchanged: items are included by default under uncertainty; only items that fail relevance-attribution at HIGH confidence are suppressed; metadata is not part of that decision. A file with an old `last-edit-time` is surfaced just like a file with a new `last-edit-time`; the timestamp rides alongside the item, not in front of it.

### 2. Where in the spec the addition lives

Per the project's placement convention at `docs/discipline_rule_placement.md` (a project-level document that says refinement rules belong at their canonical step or component, with one-line cross-references at other surfaces), the addition has three locations. None of them is a new top-level section; that alternative was considered and rejected for violating the placement convention.

**Location 1 — `cognitive_harness/surfacing/references/surfacing.md` §2.1 Item-enumeration component (canonical home).** Add the following sub-text immediately after the six-component table:

> **Observable-fact metadata at Item-enumeration (artifact case).**
>
> In artifact case, the Item-enumeration component additionally captures observable file-system metadata for each enumerated item, emitting it as per-item annotation alongside the item identifier. The first observable-fact metadata annotation is **`last-edit-time`** — the file's last-modified timestamp as observed at the moment of enumeration. The annotation is emitted as labeling content per §1.1 (observable fact about the item, not interpretation of meaning).
>
> The annotation is **non-filtering.** It does not participate in Relevance-attribution (§2.3), Inhibition's high-confidence-rejection decision (§2.4 primitive composition), or any inclusion gate. Surfacing's inclusion decision remains governed by the asymmetric-failure principle (§4.4): items are included by default under uncertainty; metadata annotations carry observable facts forward to downstream consumers without affecting whether items pass surfacing's gate.
>
> This addition introduces the category of **observable-fact metadata annotations** — content-conditioned per-item annotations capturing observable item-state facts at enumeration. `last-edit-time` is the first specific annotation in the category. Future metadata kinds (e.g., `file-size`, `line-count`, `git-tracked-state`) may extend the category under the same constraints (labeling-level, non-filtering, downstream-consumable) without structural change to the discipline's process. Future additions follow the same multi-surface placement pattern as `last-edit-time`: a §2.1 sub-paragraph + a §5.4 schema row + a §1.3 NOT-list note reference. Downstream disciplines may interpret these annotations (e.g., infer staleness from old `last-edit-time`); such interpretation is downstream territory, not surfacing's.
>
> In **possibility case**, this sub-text does not apply. Candidates are generated, not enumerated from a pre-existing territory; no observable file-system metadata exists for them. The annotation field is absent or N/A in per-item records for possibility-case invocations.

**Location 2 — `cognitive_harness/surfacing/references/surfacing.md` §5.4 Traversal Trace schema (the per-entry table that records what was traversed).** Add one row to the per-entry field table:

| Field | Content |
|---|---|
| **`last-edit-time`** | Observable file last-modified timestamp at the moment of enumeration. Format: ISO 8601 timestamp string recommended (e.g., `2026-05-22T20:35:00Z`); per-inquiry-consistent alternative formats acceptable. Artifact case only; absent or N/A in possibility-case records. |

Followed immediately by a one-line note after the schema table:

> *Note on `last-edit-time`*: this field is the first instance of the **observable-fact metadata annotations** category (see §2.1's metadata-capture sub-text). The annotation is **non-filtering** per §4.4 (asymmetric-failure principle) and §2.1's reaffirmation.

The cross-references live in the note rather than inside the row's content cell, keeping the row stylistically consistent with surfacing's existing one-line row content.

**Location 3 — `cognitive_harness/surfacing/references/surfacing.md` §1.3 NOT-list (the table listing things surfacing does NOT produce).** Immediately after the NOT-list table (before §1.4 Vocabulary), add the following paragraph:

> **Note on observable-fact metadata annotations.** Per-item annotations that capture observable file-system or item-state facts (e.g., `last-edit-time`; see the category description at §2.1 component 2's metadata-capture sub-text) are NOT instances of NOT-list entry 5 (evaluation of items for correctness or quality) and NOT instances of entry 6 (interpretive meaning of items). They are factual labeling content — observable properties of the item itself, not value claims and not meaning interpretations. Downstream disciplines may interpret these annotations (e.g., infer staleness from old `last-edit-time`); such interpretation belongs to downstream consumers, not surfacing.

The three locations together form the addition. None of them duplicates content the others have; each carries a distinct role (mechanism / record-schema / identity-anchor) and references the others by short pointer.

### 3. How the addition handles the two failure modes

**Failure mode A — idle-treated-as-refined.** The user's positive concern: surfacing today produces no signal that lets downstream disciplines distinguish a file edited yesterday from one untouched for three years. After the addition, surfacing produces exactly that signal — a per-item timestamp on every surfaced file. Whether downstream uses the signal is downstream's choice, but surfacing has fulfilled its role: it has made the observable fact available. The signal-value of A-avoidance is now in the pipeline.

**Failure mode B — relevant-but-idle dropped.** The user's guard: "just bc a file is old it doesnt mean it is idle as well." The addition protects this with two layers:

- *Layer 1 — upstream principle.* Surfacing's existing asymmetric-failure principle (§4.4) commits the discipline to inclusion-under-uncertainty. The principle is identity-layer; any future spec edit that filters on metadata violates it. This layer protects Failure mode B by structural commitment, regardless of which specific annotations exist.
- *Layer 2 — mechanism-layer reaffirmation.* The §2.1 sub-text explicitly states that the annotation does NOT participate in Relevance-attribution, Inhibition's high-confidence-rejection, or any inclusion gate. A future reader reaching §2.1 to understand the metadata mechanism sees the non-filtering constraint at the addition's location, without needing to navigate to §4.4 first.

Either layer alone would protect against Failure mode B. Both layers together provide defense-in-depth — a future spec edit that accidentally removes one is still caught by the other.

### 4. Why the naming matters

The naming choice is structurally load-bearing, not aesthetic. Surfacing's §1.3 NOT-list specifically excludes "evaluation of items for correctness or quality" (entry 5) and "interpretive meaning of items" (entry 6). Naming the annotation `freshness`, `staleness`, `currency`, `activity`, or `idleness` would put a judgment-adjacent label on what is, mechanically, just a timestamp. Future readers of the spec would be invited to read the annotation as a quality assessment — drifting into the territory the NOT-list excludes.

`last-edit-time` is observable fact at the same level as a file size or a line count. It carries no implicit value, no recency tier, no "this is stale" interpretation. The user's own language ("metadata (last datetime of edit) of files") matches the observable-fact level; the spec follows the user's framing.

The choice to commit `last-edit-time` over `freshness` was tested against the strongest counter — that "freshness" is the natural English word and is already used elsewhere in the project (e.g., the regression catalog at `docs/regression/desc.md` uses "freshness" in maintenance-mode framing). The counter is precedent-only; the project's NOT-list constraint is structural; structural arguments override precedent.

### 5. Why M1 (minimal) and not M2 / M3

Three paths were considered for the addition's richness:

- **M1 (minimal):** raw `last-edit-time` annotation only. Selected.
- **M2:** M1 + a per-item freshness-confidence dimension that tells downstream how reliable the timestamp is (e.g., the file was being concurrently edited at read time → LOW confidence). Deferred.
- **M3:** M1 + a per-region edit-time-distribution summary in §5.5 (the State Summary schema), giving downstream a per-region recency aggregate. Deferred.

M1 was selected on five criteria, of which the asymmetric-failure-principle preservation is fatal-weighted (failing it kills any path; criteria (i)-(iii) and (v) below are convergent-weighted):

- *(i) Complexity-vs-marginal-value:* M1 is lowest-complexity (just emit a timestamp). M2 adds a confidence dimension whose semantics haven't been validated against any observed metadata-reliability failure case; M3 adds a derivable summary with no demonstrated cross-region recency-comparison need.
- *(ii) Load-bearing-quantifiable-claim avoidance:* /explore's spec at `cognitive_harness/explore/references/explore.md` §3.5 requires empirical probing for any load-bearing quantifiable claim before it can be committed (e.g., a threshold of the form "old = mtime older than N days"). M1 emits raw timestamps and commits no thresholds. M3, if it categorizes regions into recency tiers, would commit such a threshold; the threshold would need empirical probing.
- *(iii) Project precedent:* no precedent for file-metadata in any of the project's discipline specs (verified by a scan of `/explore`, `/sense-making`, `/comprehend`, `/decompose`, `/reflect`, `/navigation`, and the project's protocols and contracts at `cognitive_harness/`). Establishing a minimal pattern first is structurally appropriate when no prior pattern exists.
- *(iv) Asymmetric-failure-principle preservation (FATAL-WEIGHTED):* all three paths are non-filtering by construction. Tied on this criterion.
- *(v) User intent fit:* the user asked specifically about "metadata (last datetime of edit)" — a singular signal, a singular kind. M1 directly matches this; M2 and M3 add dimensions the user did not ask for.

M2 and M3 are not killed — they are deferred with concrete revival triggers (see Next Actions → DEFERRED). Each will be reconsidered as a follow-up inquiry when the corresponding empirical signal accumulates.

### 6. The named category — pattern for future additions

The category **observable-fact metadata annotations** is introduced in the §2.1 extension's body. Its defining properties act as a gateway test for future metadata kinds:

- **Content-conditioned.** The annotation is a property of the item itself, observable from the item's existence, not derived from external reasoning. (`last-edit-time` is the file's mtime; `file-size` would be the file's byte count; `git-tracked-state` would be whether the file appears in the git index.)
- **Labeling-level.** The annotation is observable fact at the level a "naive scanner" (in the sense of the labeling-vs-meaning heuristic in `/explore`'s reference at `cognitive_harness/explore/references/explore.md` §4.4) would produce. No interpretation, no judgment, no conceptual-structure model required.
- **Non-filtering.** The annotation does not participate in surfacing's inclusion decision.
- **Downstream-consumable.** Downstream disciplines may interpret the annotation if they want to.

A future kind that fits these properties (e.g., `file-size`) extends the category by adding a single sub-paragraph to §2.1 + a single row to §5.4 + an extension of the §1.3 NOT-list note's category mention. A future kind that doesn't fit (e.g., a hypothetical "is-likely-canonical" classification that requires LLM judgment) does not qualify — judgment-required kinds belong to downstream disciplines, not to surfacing.

The category enables forward-extension without restructuring. This is one of three emergent properties that surfaced when the seven pieces of the addition (the M1 verdict, the §2.1 extension, the §5.4 schema row, the §1.3 NOT-list note, the category framing, the out-of-scope verdict on downstream-consumer rules, and the selection criteria) are taken together rather than evaluated individually; the other two are the defense-in-depth on Failure mode B (already described above) and the calibration trajectory (the design's deferred M2/M3 + the downstream-consumer Research Frontier together form a self-calibrating evolution scaffolding, where each subsequent extension waits for empirical signal rather than being pre-committed).

### 7. Out-of-scope: downstream-consumer rules

A natural follow-up question is: "Should downstream disciplines (sensemaking, decomposition, innovation, critique) have explicit rules for consuming `last-edit-time`?" For example: should `/sense-making`'s anchor-extraction weight items by recency? Should `/innovate`'s Combination mechanism prefer recently-edited material? Should `/td-critique` flag candidates that rest on stale references?

This finding does NOT specify those rules, deliberately. The user's question was scoped to the surfacing discipline specifically. Specifying downstream-consumer rules here would unilaterally commit content to other discipline specs without each spec's own adjudication. The question is preserved as a Research Frontier (see Open Questions) with a concrete revival trigger: after ≥2 MVL2+ inquiries produce Traces with `last-edit-time` populated, run a follow-up inquiry to design downstream-consumer rules.

This is a known limitation: the value-delivery of the surfacing-side addition is contingent on downstream behavior the spec does not direct. If downstream disciplines never interpret the timestamp, the addition lands as a captured signal with no consumer. The Research Frontier exists to prevent that outcome by surfacing the follow-up question on a measurable trigger.

## Next Actions

### MUST

- **What:** Apply the three spec edits described in §2 of the Finding to `cognitive_harness/surfacing/references/surfacing.md`: the §2.1 Item-enumeration sub-paragraph (canonical home, including the non-filtering reaffirmation and the named-category framing and the possibility-case scoping); the §5.4 Traversal Trace per-entry row plus the one-line note after the schema table; and the §1.3 NOT-list paragraph immediately after the NOT-list table.
  - **Who:** the spec author (the user, or whoever next edits the surfacing spec).
  - **Gate:** observable — the spec file shows the three edits at the three locations after the edit lands.
  - **Why:** these are the concrete spec changes the inquiry produced. Until they land, the surfacing discipline has no mechanism for capturing file-edit metadata, and Failure mode A (idle-treated-as-refined) remains unaddressed at the surfacing level.

### COULD

- **What:** Add an explicit weighting note to the §2.1 sub-text's category framing — specifically, that the asymmetric-failure-principle preservation criterion is fatal-weighted (failing it kills any path) and the other selection criteria (complexity-vs-marginal-value, load-bearing-quantifiable-claim avoidance, project-precedent, user intent fit) are convergent-weighted. The note would be one short sentence within the category framing.
  - **Who:** the spec author when applying the MUST edits.
  - **Gate:** observable — if the spec author chooses to include the note.
  - **Why:** if M2 or M3's revival triggers fire later and the same selection criteria need to be re-applied, the explicit weighting prevents evaluation drift across future evaluators. Without the note, the spec is silent on which criterion wins under tie conditions.

### DEFERRED

- **What:** Reconsider adding the per-item freshness-confidence dimension (alternative M2 — adds a per-item dual-confidence field alongside `last-edit-time`, indicating how reliable the timestamp is for the specific item).
  - **Gate:** condition-bound — when ≥2 inquiries report metadata-reliability concerns. A "metadata-reliability concern" is observable in (a) a LOOP_DIAGNOSE finding (per the diagnostic protocol at `cognitive_harness/protocols/loop_diagnose.md`) where the diagnosis identifies metadata read reliability as a load-bearing failure factor, or (b) a REFLECT observation (per the reflect discipline at `cognitive_harness/reflect/SKILL.md`) flagging the same.
  - **Why if revived:** M2 adds a confidence dimension that lets downstream consumers assess metadata reliability per item. The dimension was deferred because no metadata-reliability failure case has yet been observed; revival when failures accumulate gives the addition empirical grounding.

- **What:** Reconsider adding the per-region edit-time-distribution summary in §5.5 (alternative M3 — adds a per-region recency aggregate in the State Summary schema, derivable from the Traversal Trace's per-item timestamps).
  - **Gate:** condition-bound — when ≥3 inquiries report cross-region recency-comparison needs that the per-item Trace doesn't directly support (e.g., an inquiry where the downstream consumer needs to compare two regions' recency distributions and finds the per-item Trace too granular).
  - **Why if revived:** M3 gives downstream a per-region summary without requiring downstream to aggregate the Trace itself. Deferred because the aggregation is derivable from M1's Trace, and no cross-region comparison need has yet been observed.

## Reasoning

The structural shape of this inquiry's answer was determined by a sequence of forced choices, each tested against the strongest counter the inquiry could construct.

**Choice 1 — Does file-metadata belong on the surfacing side at all, or should it be pushed downstream?** The strongest counter to adding it to surfacing was: leave surfacing as-is; let downstream disciplines read file metadata when they want it. The counter was tested by considering the alternative path — a downstream discipline (sensemaking, innovate, or a new step) reads mtime separately. The alternative produces the same need elsewhere: every downstream consumer would need to access the file system independently, duplicating the enumeration work surfacing already does. Surfacing is the natural enumeration-time capture point because it already touches the file system; no other discipline has a structural reason to. The choice to add at surfacing was made.

**Choice 2 — Is the addition a filter or an annotation?** The strongest counter to "annotation" was: a filter is simpler — drop files older than some threshold and downstream sees fewer items. The counter fails on structural grounds: surfacing's asymmetric-failure principle (§4.4) explicitly forbids exclusion-under-uncertainty. The user's "but" clause ("just bc a file is old it doesnt mean it is idle as well") directly names the failure mode a filter would introduce. A filter approach was killed; annotation survived.

**Choice 3 — What is the annotation called?** The strongest counter to "last-edit-time" was: "freshness" is more natural in casual English and is already used elsewhere in the project (the regression catalog at `docs/regression/desc.md` uses "freshness" in maintenance-mode framing). The counter is precedent-only. Surfacing's §1.3 NOT-list excludes "evaluation of items for correctness or quality"; "freshness" is judgment-adjacent (it implies fresh-vs-stale, which is a quality dimension); using it would invite future readers to misread the annotation as a quality assessment. Structural arguments override precedent. "last-edit-time" was committed.

**Choice 4 — Where in the spec does the addition live?** The strongest counter to multi-surface placement was: a new dedicated section (e.g., "§2.5 Metadata Annotations") would give the addition prominence and one canonical location. The counter fails on the project's placement convention at `docs/discipline_rule_placement.md` (Operation-or-Step-First with Scope-Of-Application), which determines placement by the rule's scope. The new mechanism is step-level (it fires at Item-enumeration); its canonical home is §2.1. Other surfaces receive one-line cross-references, not duplicated content. Multi-surface placement won.

**Choice 5 — Does the spec need an explicit non-filtering reaffirmation, or is §4.4 sufficient?** The strongest counter to explicit reaffirmation was: §4.4 is upstream of any annotation; the principle's commitment is already in the spec; an explicit reaffirmation at §2.1 is redundant. The counter has structural merit but is outweighed by future-reader robustness. A future spec edit that adds a tier structure (e.g., the deferred M3) or a discriminating affordance to the annotation could plausibly drift toward filtering before the change-author re-reads §4.4. The explicit reaffirmation at the addition's location is small-cost (one paragraph), high-robustness defense-in-depth. The reaffirmation was committed.

**Choice 6 — Does the addition include richer alternatives (M2 confidence-tier or M3 region-aggregation), or stay minimal at first ship?** The strongest counter to M1 was: rich-first lowers total spec-edit cost across the project's lifecycle — users would discover the rich form is needed but only after migrating consumers to the minimal form. The counter assumes existing consumers; no project precedent for file-metadata exists in any other discipline spec (verified empirically by scanning the corpus); there are no existing consumers to migrate. The richer forms commit semantics (confidence-tier semantics for M2; threshold semantics for M3 if it categorizes regions) that haven't been validated. M1 preserves the option to extend later without breaking anything (because there's nothing to break). M1 was committed; M2 and M3 deferred with concrete triggers.

**Choice 7 — Should downstream-consumer rules be in scope here?** The strongest counter to "out-of-scope" was: without consumer rules, the addition's value-delivery is contingent on each downstream discipline's ad-hoc handling — the addition could land and be silently ignored. The counter is real but is not a critique of the surfacing-side spec edit; it identifies a separate piece of work (downstream-consumer rules in adjacent discipline specs). The user's question was scoped to the surfacing discipline; specifying cross-discipline rules in this inquiry would unilaterally commit content to other specs without each spec's own adjudication. The out-of-scope verdict was committed; the downstream-rules question was preserved as a Research Frontier with a concrete trigger (≥2 MVL2+ inquiries producing populated Traces).

No candidate was killed; two received minor refinements (the schema row's cross-references moved to a note after the table; the Research Frontier's trigger made concrete). No failure mode (wrong dimensions, rubber-stamping, nitpicking, dimension blindness, false convergence, evaluation drift, self-reference collapse) was observed in the critique pass.

## Open Questions

### Monitoring

- **Does the addition actually produce downstream change once it lands?** Observable after ≥1 MVL2+ inquiry runs with the spec edit applied and the Trace populated. If downstream disciplines silently ignore the annotation (no anchor-weighting in sensemaking, no Combination-preference in innovation, no stale-reference flagging in critique), the addition is information-overhead-without-benefit and the downstream-consumer-rules Research Frontier (below) becomes load-bearing for value-realization.
- **Does the named category's gateway test (content-conditioned, observable-fact, labeling-level, non-filtering, downstream-consumable) hold up for future kinds?** Observable when a future inquiry proposes a second observable-fact metadata kind (e.g., `file-size`, `line-count`, `git-tracked-state`). If a proposed kind passes the gateway test cleanly, the forward-extension property is confirmed; if a kind sits on the boundary (e.g., a kind that requires LLM judgment to extract), the category's defining properties are exercised.

### Blocked

- **The downstream-consumer rules for `last-edit-time`** — cannot be specified until ≥2 MVL2+ inquiries have produced Traces with the annotation populated. Concrete revival trigger preserved at Research Frontiers below.

### Research Frontiers

- **Downstream-consumer rules for observable-fact metadata annotations.** Should `/sense-making` (anchor extraction) weight items by `last-edit-time`? Should `/innovate` (Combination mechanism) prefer recently-edited material? Should `/td-critique` flag candidates resting on stale references? Should `/decompose` notice recency clustering in its coupling perception? Each per-discipline rule is itself a sub-inquiry surface. **Trigger:** after ≥2 MVL2+ inquiries produce Traces with `last-edit-time` populated.
- **Project-wide pattern application of observable-fact metadata annotations.** This inquiry is scoped to surfacing. The multi-surface placement pattern (§2.1 canonical + §5.4 + §1.3) is reusable for additions in other discipline specs; future discipline-design inquiries adding new per-item annotations to `/explore`, `/comprehend`, etc. may follow the same template. **Trigger:** when a future inquiry adds a per-item observable-fact annotation to a different discipline, evaluate whether the pattern applies.

### Refinement Triggers

- **The deferred M2 (per-item freshness-confidence dimension) re-opens** when ≥2 inquiries report metadata-reliability concerns (LOOP_DIAGNOSE diagnosis identifies metadata read reliability as a load-bearing failure factor, OR REFLECT observation flags the same).
- **The deferred M3 (per-region edit-time-distribution in §5.5) re-opens** when ≥3 inquiries report cross-region recency-comparison needs that the per-item Trace doesn't directly support.
- **The category name "observable-fact metadata annotations" re-opens** if empirical observation reveals frequent confusion among readers (e.g., 2+ recorded instances where readers ask "why is this called X instead of Y?"). The name was committed for structural disambiguation; if the disambiguation cost (verbose name) outweighs the value (clarity), revisit naming.
- **The "out-of-scope for downstream-consumer rules" verdict re-opens** when ≥2 MVL2+ inquiries produce populated Traces (same trigger as the Research Frontier above).

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
