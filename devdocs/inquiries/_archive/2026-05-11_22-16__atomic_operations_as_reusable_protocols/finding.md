---
status: active
---
# Finding: Atomic Operations as Reusable Protocols?

## Question

A prior inquiry (`devdocs/inquiries/2026-05-11_21-51__explore_navigation_atomic_decomposition/finding.md`, hereafter the "atomic-decomposition finding") established that the Explore and Navigation thinking-disciplines share four atomic operations that play the same structural role in each but carry different content. The four operations are:

1. **Input reading** — consume the content the discipline operates on.
2. **Typed-item production** — produce items tagged by a discipline-specific type schema.
3. **Metadata attachment** — tag each produced item with discipline-specific metadata.
4. **Structured-map assembly** — compose items + metadata into a discipline-specific output map.

The question for this inquiry, in the user's own words: *"i am thinking if we define all these 4 atomic operations (maybe as protocols or sth else idk) and reuse that definition when relevant, instead of duplicating their logic? do you think this would be something useful for us? this way we might understand our discipines in more granular level too?"*

**Goal.** A verdict on whether extracting the four atomic operations into a reusable shared-definition layer is structurally useful at the project's current state, plus the right shape for any extraction, plus the costs and risks.

## Finding Summary

- **Yes, the extraction is useful — at LIGHT intensity, with DIFFERENTIATED framing, using "atomic operation" terminology.** "Light intensity" means small inline labels in two discipline specs plus one new index file, totalling under 100 lines of new content, fully reversible per piece, with no new directory layer. "Differentiated framing" means recognizing that only structured-map assembly is TEM-specific (where TEM = Typed Enumeration Mapping, the cross-discipline pattern the atomic-decomposition finding gave to the Explore/Navigation cluster); the other three operations are universal-discipline-primitives that appear across most thinking-disciplines, though their content differs per discipline.

- **The user's "protocols" framing was set aside.** The project's existing `homegrown/protocols/` directory contains procedural protocols (e.g., LOOP_DIAGNOSE, CONCLUDE, BRANCH_INQUIRY) — they describe HOW TO DO a procedure. Atomic operations are different in kind — they're capability-like components, not procedures. Calling them "protocols" would create a category collision with the existing convention. The replacement term is "atomic operation," already established in the atomic-decomposition finding.

- **Heavy extraction (per-operation capability files in a new `homegrown/atomic-operations/` directory) is deferred.** The rule-of-three heuristic (don't extract a reusable abstraction until you've seen the pattern three times) is currently at 2.5 confirmed instances — Explore and Navigation are confirmed; Sensemaking's Comprehending operation was flagged as partial in the atomic-decomposition finding. Heavy extraction at 2.5 risks over-fitting to the first two cases. Light extraction is below the rule-of-three's typical concern threshold because it is fully reversible and adds no new abstraction layer.

- **The deliverable is three small pieces.** Inline labels added to the two existing discipline specs at the four manifestation points, one new index file at `devdocs/patterns/atomic-operations-index.md`, and one short observation in this finding's Open Questions about when heavier extraction would become justified. Each piece is independently reversible; together they compose forward if heavier extraction ever fires.

- **A new observation surfaced during critique** — the Critique discipline itself may also satisfy the structured-map-assembly criterion (its fitness landscape positions typed candidates with metadata into a structured map). If a focused future inquiry confirms Critique as a third TEM-instance, the rule-of-three is met without waiting on Sensemaking-Comprehending, and heavy extraction may become justified earlier than this finding's main verdict assumes. The observation is preserved as a Research Frontier rather than acted on, because confirming it requires a focused inquiry that this run did not perform.

## Finding

The atomic-decomposition finding stabilized that Explore and Navigation share four atomic operations at medium grain. The user's natural next question was whether those four operations should become first-class reusable definitions in the project, and whether the extraction would deliver a clearer view of how the disciplines work. This finding is the answer to that next question.

### 1. Yes — and the right shape is light + differentiated

The extraction IS useful. The user's two signals — "would this be useful?" and "this way we might understand our disciplines in more granular level too" — both point toward making the shared atomic operations visible somewhere stable, so that a practitioner reading either Explore or Navigation can recognize that what looks like a discipline-specific step is also one instance of a recurring atomic operation.

But the extraction should be LIGHT, not heavy. The reasoning:

- **Cost asymmetry.** A heavy extraction (separate capability files for each atomic operation, with cross-references from each discipline spec) requires roughly 150-250 lines of new content plus a new directory layer plus maintenance coupling between specs and the new layer. A light extraction (small inline labels in each spec plus a single index file) costs under 100 lines, no new layer, no cross-spec coupling, and is reversible by deleting two annotations per spec and one file.
- **Evidence threshold.** The rule-of-three heuristic from software engineering suggests waiting for the third instance before extracting an abstraction, because the third instance often reveals what was truly shared versus what was incidental to the first two cases. Currently, Explore and Navigation are the confirmed instances; Sensemaking's Comprehending operation is flagged as a partial third in the atomic-decomposition finding's Research Frontiers. That leaves the evidence at roughly 2.5 instances. For heavy code-style extraction, 2.5 is below the typical threshold. For documentation-style extraction with full reversibility, the heuristic is much weaker — the cost of being wrong is one file deletion and two annotation removals.
- **Differentiation is structurally required.** When the four atomic operations were probed individually (during this inquiry's exploration phase), only structured-map assembly turned out to be TEM-specific — the assembled output map is what distinguishes Explore and Navigation from sister disciplines like Critique and Sensemaking, which DON'T produce that output shape (Sensemaking produces a stabilized model; Critique produces verdicts on candidates from elsewhere). The other three operations — input reading, typed-item production, metadata attachment — appear across most thinking-disciplines in some form. Treating all four as uniformly "TEM-shared" would mis-categorize three of them. The light extraction explicitly names this distinction; the heavy extraction would risk hiding it inside a uniform interface.

### 2. The three deliverable pieces

**Piece one — inline labels in the two discipline specs.** Each of the four atomic operations gets a single italicized bracket annotation immediately under the section heading where it primarily manifests, following the existing `*Refinement note (applies at ...)*` convention already used in these specs. The labels carry only the operation name; scope information (TEM-specific vs universal-primitive) lives in the index file rather than being duplicated inline. The annotations are minimal — eight in total across both specs, one per atomic operation per spec. Insertion locations:

- In `homegrown/explore/references/explore.md` (the Structural Exploration discipline spec): under `### Scan`, `### Signal Detection`, `### Confidence Mapping`, and `### 4. Final Deliverable — The Structural Map`.
- In `homegrown/navigation/references/navigation.md` (the Structural Navigation discipline spec): under `### Step 1: Read the Cycle's Output`, `### Step 2: Assign Types`, `### Step 4: Assess Priority / Confidence`, and `### Step 6: Format the Map`.

A single additional cross-reference line is added once at the top of each spec — for example, just above the first `##` heading — pointing at the index file at `devdocs/patterns/atomic-operations-index.md`. Without that pointer, a reader who sees the inline annotation has no explicit way to find the cross-discipline view; with it, the annotation becomes navigable.

**Piece two — a new index file at `devdocs/patterns/atomic-operations-index.md`.** Approximately 60 lines. The file opens with a one-paragraph intro stating its purpose, then an overview table listing the four operations and their scopes (universal-primitive for the first three, TEM-specific for structured-map assembly), then four short per-operation entries each naming the operation, restating its scope, and identifying its manifestation in Explore and in Navigation. A standalone scope-classification paragraph then explains explicitly that three of the four operations recur across most disciplines (with the content — what is read, what types apply, what metadata is attached — differing per discipline), while structured-map assembly is the TEM-defining operation. A short caveats paragraph notes that this is light extraction at 2.5 confirmed instances, that heavier extraction at a future `homegrown/atomic-operations/` directory is deferred until at least three confirmed instances, and that the whole arrangement is reversible. A short cross-references block points at the atomic-decomposition finding (as source for the four operations), at the original Explore-vs-Navigation inquiry (`devdocs/inquiries/2026-05-11_13-45__is_explore_and_navigation_one_underlying_operation/finding.md`, which proposed the TEM pattern itself), and at this finding (as source for the extraction verdict).

The index file is a SIBLING to the future TEM pattern document (`devdocs/patterns/typed-enumeration-mapping.md`, to be created when the Explore-vs-Navigation inquiry's MUST is applied), not embedded in it. The pattern document carries the cross-discipline cluster narrative — what TEM is, why these two disciplines share it. The index document carries the per-operation mapping — where each atomic operation manifests, with the scope distinction made explicit. They're complementary; neither replaces the other.

**Piece three — a future-revival observation in this finding's Open Questions / Refinement Triggers.** Five lines stating the condition under which heavy extraction becomes justified (three confirmed TEM-instance disciplines, where "confirmed" means a focused inquiry stabilized a YES verdict on a candidate), naming Sensemaking-Comprehending as the most plausible path to a third instance (it was already flagged in the atomic-decomposition finding's Research Frontiers), and noting that the light artifacts proposed here compose forward with heavy extraction if it later fires — they become navigation aids on top of the capability layer, not deletions.

### 3. Why "atomic operation," not "protocol"

The user's original phrasing was "maybe as protocols or sth else idk." The "or sth else idk" leaves room, and exploration confirmed that "protocol" creates a collision in this project. The directory at `homegrown/protocols/` already holds protocols of a different kind — procedural protocols like LOOP_DIAGNOSE (the diagnostic procedure for stalled inquiries) and CONCLUDE (the protocol this run is currently executing). Those protocols describe HOW TO DO a procedure. Atomic operations as we've identified them aren't procedures — they're capability-like components that appear inside discipline procedures. Calling both kinds "protocol" would conflate two structurally distinct categories.

The term "atomic operation" was already introduced by the atomic-decomposition finding and is now standard project vocabulary. The new pieces use it consistently. The word "protocol" appears nowhere in the new artifacts.

### 4. Total cost and reversibility

The full deliverable is well under 100 lines of new content — about 16 lines added across the two existing specs (eight inline annotations plus one cross-reference line in each spec), about 60 lines for the new index file, and about 5 lines added to this finding's Open Questions section, plus 3 additional lines for the Critique-as-potential-TEM-instance Research Frontier observation. Total roughly 84 lines.

The pieces are independently reversible. Removing the inline annotations is 8 small edits across two files. Removing the index file is one file deletion. Removing the finding observation is a small finding edit. No code is touched. No discipline behavior changes. Practitioners who never look at the new index file see only the small inline annotations, which they can ignore.

## Next Actions

### MUST

- **What:** Apply the inline labels and the cross-reference pointer in `homegrown/explore/references/explore.md` and `homegrown/navigation/references/navigation.md`. Eight italicized bracket annotations total plus one cross-reference line at the top of each spec.
  **Who:** Implementation pass after this finding is committed.
  **Gate:** When the user approves applying the verdict to project artifacts.
  **Why:** Without the inline labels, the index file's cross-discipline view has no anchor in the discipline specs themselves; readers landing on a relevant spec section would have no signal that what they're looking at is one manifestation of a recurring atomic operation.

- **What:** Create `devdocs/patterns/atomic-operations-index.md` with the 60-line content drafted in this inquiry's innovation phase (archived in `docarchive/innovation.md`).
  **Who:** Same implementation pass.
  **Gate:** Same — when the user approves the verdict for application.
  **Why:** The index is the only place the differentiated scope claim (one operation is TEM-specific; three are universal-primitive) is named explicitly. Without it, the inline labels in specs would suggest a uniform "shared cluster" framing that this finding has actively ruled out.

### COULD

- **What:** When the future TEM pattern document (`devdocs/patterns/typed-enumeration-mapping.md`) is created — per the MUST in `devdocs/inquiries/2026-05-11_13-45__is_explore_and_navigation_one_underlying_operation/finding.md` — add a one-line cross-reference to it pointing at the atomic-operations index file as a SIBLING document.
  **Who:** Whoever applies the Explore-vs-Navigation inquiry's MUST.
  **Gate:** Observable — when the pattern document is created.
  **Why:** Bidirectional discoverability between the pattern narrative and the per-operation index improves the cross-discipline view's reachability for practitioners arriving from either direction.

### DEFERRED

- **What:** Heavy extraction — per-operation capability files at a new `homegrown/atomic-operations/` directory.
  **Gate:** Condition-bound. Fires when at least three TEM-instance disciplines are confirmed (where "confirmed" means a focused inquiry has stabilized a YES verdict on the candidate). The two confirmed instances are Explore and Navigation. The two plausible third-instance candidates today are: (a) Sensemaking's Comprehending operation, flagged in the atomic-decomposition finding's Research Frontiers; (b) the Critique discipline itself, surfaced as a new observation by this inquiry's critique phase (see Open Questions / Research Frontiers below).
  **Why (if revived):** With three confirmed instances, the rule-of-three's typical concern about over-fitting to the first two cases is satisfied. Heavy extraction would let discipline specs reference each atomic operation by name with a single canonical definition; would give designers of future TEM-instance disciplines a template; and would make the project's discipline architecture inspectable at the capability level rather than only the discipline level. The light artifacts proposed in this finding would not be deleted; they would become navigation aids over the capability layer.

## Reasoning

### Alternatives considered and rejected

**Heavy extraction now (a new `homegrown/atomic-operations/` capability layer with one file per atomic operation, cross-referenced from each discipline spec).** Rejected at the current state. Cost is roughly 150-250 lines plus a new directory plus cross-spec coupling. Evidence is at 2.5 instances; for code-style abstraction this is below the rule-of-three threshold. For documentation-style abstraction, the heuristic weakens but the cost is still meaningfully larger than the light alternative. Preserved as DEFERRED with an explicit revival trigger.

**Atomic operations as protocols in `homegrown/protocols/`.** Rejected on category grounds. The existing protocols are procedural — they describe HOW TO DO a thing. Atomic operations are capability-like — they're components inside discipline procedures. Putting both kinds in the same directory under the same naming convention would create a category collision that misleads readers.

**No action at all (preserve the atomic-decomposition finding's pattern-document plan as the only artifact).** Rejected because the user explicitly asked an opinion question and named "more granular understanding" as a desired secondary benefit. Indefinite deferral fails the user's expressed want. The 21-51 pattern-document plan (when applied) provides the cross-discipline cluster narrative at medium grain; this finding's light extraction adds the per-operation manifestation map and the scope-differentiation explicitly. Both can coexist.

**Section-template restructuring of the discipline specs themselves** — restructure each spec so that the four atomic operations correspond to four named sections in the spec. Rejected because forcing a section template into existing discipline specs would distort how each spec naturally presents itself; it would also work against the differentiated framing (universal-primitives and TEM-specific operations should not be presented identically inside each spec). The light-extraction approach achieves cross-discipline visibility without imposing structure on the specs themselves.

**Inline labels alone (no index file).** Rejected — labels without an explicit referent are uninterpretable. A reader who sees `*[atomic operation: typed-item production]*` in a discipline spec needs somewhere to look up what that operation is and where else it appears. The index file is the referent.

**Index file alone (no inline labels in specs).** Rejected — without the inline labels, the index is discoverable only via project file traversal. The inline labels are the anchor points that connect the spec content to the cross-discipline view.

**Inline labels with scope baked into the annotation** (for example, `*[atomic operation: structured-map assembly — scope: TEM-specific]*`). Rejected on bloat grounds. Scope already lives in the index file. Duplicating it inline lengthens every annotation without adding navigation value.

**HTML-comment annotations** for machine consumers, instead of (or alongside) human-readable italicized labels. Deferred rather than rejected. Currently the project has no machine consumer parsing specs for atomic-operation lookup. If/when a sub-agent or automation gains that need, the human-readable labels could be supplemented with HTML-comment annotations carrying stable tokens. Until then, adding them would be over-engineering for hypothetical consumers.

### Surviving design tested adversarially

The critique phase ran adversarial testing across 11 evaluation dimensions (four critical, four high-weight, three medium/low) extracted from the sensemaking output and the universal-discipline-clean criterion from the `devdocs/inquiries/2026-05-11_20-13__sensemaking_spec_bloat_audit/` finding. The design survived on all critical dimensions: structural accuracy of the differentiated scope claim, universal-discipline-clean output, terminology coherence, size budget. Three minor refinement directions were folded in: the cross-reference pointer at the top of each spec, a tightened "confirmed" clause in the deferred-extraction gate, and the elevation of the Critique-as-potential-TEM-instance observation to a Research Frontier rather than letting it disappear unspoken.

### One observation that emerged from running critique itself

The Critique discipline (the one this finding's critique phase ran) reads sensemaking and innovation output (an input reading), produces typed verdicts — SURVIVE, REFINE, KILL — (a typed-item production), attaches per-verdict metadata via dimensions, weights, and severity (a metadata attachment), and assembles candidates into a fitness landscape (a structured map of typed items positioned across dimensions). All four atomic operations appear to be present. Whether the fitness landscape qualifies as a TEM-instance output in the same sense as Explore's territory map and Navigation's route map is a structural question that this run did not adjudicate — it's a candidate observation, not a confirmed third instance. But it raises the possibility that the rule-of-three threshold for heavy extraction is closer than the finding's main verdict assumes. The observation is preserved as a Research Frontier so a focused future inquiry can test it explicitly.

## Open Questions

### Research Frontiers

- **Critique as a potential third TEM-instance discipline.** Surfaced by this inquiry's critique phase. The Critique discipline's fitness landscape (positioned candidates with dimension scores and verdict regions) may meet the structured-map-assembly criterion. The Critique discipline was NOT tested as a TEM-instance candidate in the atomic-decomposition finding or in this inquiry. If a focused inquiry confirms Critique as a third TEM-instance, the rule-of-three threshold for heavy extraction is met (N ≥ 3), and the DEFERRED heavy-extraction action above may become justified without waiting for a Sensemaking-Comprehending inquiry.

- **Sensemaking-Comprehending as a partial TEM-instance.** Carried forward from the atomic-decomposition finding's Research Frontier. Sensemaking's Comprehending phase (Phases 1-2 of the Sensemaking discipline spec) may exhibit the four atomic operations. A focused inquiry would confirm or refute.

### Refinement Triggers

- **Heavy-extraction revival.** If three TEM-instance disciplines become confirmed (where "confirmed" means a focused inquiry has stabilized a YES verdict on a TEM-instance candidate), the DEFERRED action above (per-operation capability files at a new `homegrown/atomic-operations/` directory) becomes structurally justified. The two confirmed instances are Explore and Navigation. The two plausible paths to a third confirmation are the two Research Frontier items immediately above. If either confirms, heavy extraction can be planned.

- **Machine-consumer annotation channel.** If the project gains a machine consumer that parses discipline specs for atomic-operation lookup (sub-agent, automation, autonomous loop), the inline labels designed in this finding may need to be supplemented with stable-token annotations (for example, HTML comments carrying machine-readable identifiers). Observable trigger: when such a consumer is introduced.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
TEM is NOT one atomic operation. It is a label for a CLUSTER of 4 shared atomic operations that together produce a shared OUTPUT SHAPE (map-shape, distinguishing TEM-instances from sister disciplines). The 4 are: input reading (consume content); typed-item production (produce items tagged by a discipline-specific type schema); metadata attachment (tag each item with discipline-specific metadata); structured-map assembly (compose items + metadata into a discipline-specific map format).

These 4 atomic operations are ROLE-EQUIVALENT BUT CONTENT-DIFFERENT. Each plays the same structural role in both disciplines, but the IMPLEMENTATION CONTENT differs (different type schemas; different metadata vocabularies; different map formats).


hmm, i am thinking if we define all these 4 atomic operations (maybe as protocols or sth else idk) and reuse that definition when relevant, instead of duplicating their logic?

do you think this would be something useful for us? this way we might understand our discipines in more granular level too ?
```

</details>
