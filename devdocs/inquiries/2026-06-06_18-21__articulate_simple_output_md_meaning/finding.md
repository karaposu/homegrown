---
status: active
model: claude-opus-4-7[1m]
effort: max
---
# Finding: articulate_simple Output md — Meaning Layer

## Question

The `articulate_simple` cognitive discipline — described at `devdocs/how_articulate_simple_should_be.md` — is the discipline that takes a compact task statement and expands it into a defined task before downstream loop disciplines work on it. The discipline-explainer doc at §6 commits to a per-item bundle output but specifies only the abstract contract (which operations must be represented) and explicitly defers structural shape (field names, schema syntax) to a separate spec.

Sibling cognitive disciplines (`/sense-making`, `/surfacing`, `/td-critique`, defined at `cognitive_harness/sense-making/`, `cognitive_harness/surfacing/`, `cognitive_harness/td-critique/`) each produce a canonical md output file that downstream consumers read. `articulate_simple` should produce one too.

**The question**: what should that output md file CONTAIN — and what should it NOT CONTAIN — at the meaning layer (what kinds of content belong in the artifact vs which kinds of content would violate articulate_simple's identity)?

**Goal**: produce a discussable principle-set defining what the artifact is and isn't, at the level of "what kinds of content belong" — grounded in the doc's identity commitments (NOT-list, lightweight stance, substrate-bounded) rather than in stylistic preference. The principle-set should later support a structural-layer spec (field names + section headers + schema) and a process-layer spec (when emission happens) being authored on top of it.

## Finding Summary

- **The output md is a three-layer artifact** — **ANCHOR** (the raw task statement preserved verbatim at top) → **ENVELOPE** (statement-level Itemize count + per-item identifiers + end-of-invocation self-assessment verdict + confidence + brief rationale) → **CORE** (one per-item bundle for each item the Itemize operation emits). Each layer serves distinct reader concerns and earns its place via the load-bearing element test.

- **The CORE per-item bundle contains 10 content kinds per item** — the item's verbatim text, the four base Meta-question answers (MQ1 scope-axis / MQ2 preparation-substrate / MQ3 intent / MQ4 exclusions), Meta-question extensions when they fire, the Meta-question aggregate-resolution verdict, the Deconstruct tuple, the MultiDepth pair, and the Rephrase variants. Each entry traces to a specific commitment in the explainer doc at `devdocs/how_articulate_simple_should_be.md` §6.

- **Empty-rendering is first-class output content, not silent-absence.** A cold-context MQ4 with no extrinsic exclusions to enumerate is emitted as explicit-empty — that empty rendering is itself the signal to the consumer that no exclusions apply. This principle extends to MultiDepth's shallow purpose chains in cold context and to any per-MQ entry whose perception in this instance is "nothing to add."

- **The discrimination principle is the load-bearing element test** — drawn verbatim from the explainer doc's §5 lightweight stance: every output element must be load-bearing for at least one downstream actor's decision. The test is operationalized via the **four-reader test**: each content entry must serve a decision by at least one of the runner (which reads the Substrate-Meta-questions MQ2 + MQ4 to formulate `/surfacing`'s territory), the downstream loop discipline (which consumes the full bundle as framing), the user reading the framing artifact for verification, or the audit reader inspecting cross-session.

- **The output md MUST NOT contain content in any of five identity-violating classes** — substrate-violations (specific project file paths, code references, named project artifacts); adjudications (winner-picking among Meta-questions or Rephrase variants); cross-item relational claims ("item 1 enables item 2"); fidelity verdicts (judging whether output matches input); ecosystem-knowledge references (tool documentation URLs, external knowledge-base content). Each class connects to a specific doc commitment — substrate-bounded identity at §1, the NOT-list at §4, the lightweight stance at §5.

- **Four specific over-elaboration candidates are explicitly excluded** via the load-bearing test — a reader-facing summary at top (the ANCHOR + ENVELOPE already serve reader-navigation), inheritance-trace per-entry (provenance lives in the explainer doc, not duplicated in every output instance), provenance metadata as content field (timestamp + model id are runtime-environment, not output content), and frontier flags as separate content field (the self-assessment FLAG verdict from ENVELOPE already serves this role).

- **One boundary candidate is included** — the Meta-question aggregate-resolution's verdict label (ALIGNED / CONTRADICTION-reconciled / IRREDUCIBLE-TENSION) is required content because the verdict-label drives distinct downstream consumer behavior. When the verdict is IRREDUCIBLE-TENSION, the consumer must surface the tension to the user rather than acting on a single reconciled substrate; this behavioral difference cannot be derived from the reconciliation-content alone.

- **Two reusable meta-patterns surfaced** for future audits on other discipline-output artifacts — **meaning-layer-as-discrimination-principle-set** (a meaning-layer spec for a discipline-output artifact should commit (a) discrimination principles, (b) positive content derived via those principles, (c) negative content derived via those principles, and (d) layer-separation meta-commitment — this finding instantiates the pattern on itself); **empty-as-result-not-as-narration** (a refinement of the empty-as-content principle — empty rendering is a perception's positive result-emission, not a transcript-of-absence; "explicit-empty" parallels scientific papers' "no participants were recruited" requirement).

- **Layer-separation is the governing meta-commitment** — this finding commits content kinds at the meaning layer only. Structural-layer concerns (specific field names, JSON/YAML/markdown rendering format, section headers, ordering choices) are downstream of this commitment and deliberately not pre-decided. Process-layer concerns (when emission happens at runtime, atomic vs streamed, how the LLM writes the file) are covered by the recent process-layer audit at `devdocs/inquiries/2026-06-06_16-27__articulate_simple_doc_process_layer_deepdive/finding.md` and are deliberately not re-litigated here.

## Finding

A small piece of context for the reader: this finding operates on `devdocs/how_articulate_simple_should_be.md`, the explainer doc for the `articulate_simple` cognitive discipline. The discipline takes a compact task statement and expands it into a per-item bundle that downstream loop disciplines (sensemaking, decomposition, innovation, critique) work on. Sister disciplines in `cognitive_harness/` each produce a canonical md output file when invoked, and the discipline-explainer doc commits articulate_simple to producing one too — but at the contract level only, deferring the artifact's structural shape to a future spec.

The user invoked this inquiry asking: now that we understand each cognitive discipline produces an md output file, what should articulate_simple's output md contain, and what should it not contain, at the meaning layer? This finding answers that question by committing a content-kinds spec — what kinds of content belong, what kinds don't, and the discrimination principles that produced those judgments.

### Three layers — what makes them distinct

The output md has three content layers because three distinct reader-concerns exist, and each layer addresses one concern.

**The ANCHOR layer** carries the raw task statement, preserved verbatim, at the top of the artifact. Its content is exactly one thing: the literal text the discipline received as input. The ANCHOR earns its place because every downstream reader needs to know what was articulated — the runner needs the input to interpret Itemize's count signal, the downstream loop discipline needs the input to understand what framing is being passed, the user reading the artifact for verification needs the input to compare against the perceptions, and the audit reader needs the input to reconstruct what the discipline operated on. Without the ANCHOR, downstream cannot ground any of the bundle's perceptions in the original ask.

**The ENVELOPE layer** carries statement-level content — content that's about the articulation as a whole, not about any one item the discipline perceived. Specifically: Itemize's count (whether the task statement contained one task or several), per-item identifiers (so the consumer can address each per-item bundle by name), the end-of-invocation self-assessment verdict (PROCEED if the discipline emitted cleanly, FLAG if one or more close-calls occurred, RE-RUN if structural failure was self-detected), confidence on that verdict (HIGH / MED / LOW per the doc's §7 rubric), and a brief rationale when the verdict is FLAG or RE-RUN. The ENVELOPE earns its place because the runner reads count before processing any per-item bundle (to decide spawn-or-not), and any consumer reads the verdict-and-rationale before consuming bundle content (to decide whether to act, review, or trigger re-invocation).

**The CORE layer** carries the per-item bundles themselves — one bundle per item Itemize emitted. Each bundle is its own structured unit. CORE earns its place because the bundle's perceptions are the discipline's substantive output — the work products downstream loop disciplines consume as framing.

### What goes in each CORE per-item bundle

Each per-item bundle contains ten content kinds, each connecting to a specific commitment in the explainer doc:

1. **Item text** — the per-item slice of the original task statement (when Itemize emits count > 1, each item's slice is preserved verbatim; when count = 1, the item text equals the ANCHOR's task statement). Per §6 D5 contract.
2. **MQ1 (Structural / scope)** — a scope-axis classification of the item along whatever scope dimension actually fits the item's domain (per §2.2.1's commitment to generic application, not the named-axis taxonomy).
3. **MQ2 (Relational / context-need)** — the preparation substrate (verdict + kinds-plural + relational stance + expression-mode) the runner reads to formulate `/surfacing`'s territory. Per §2.2.2 + §2.2.7's Substrate-MQ commitment.
4. **MQ3 (Interpretive / intent)** — the inference about what the user actually wants behind the surface ask. Per §2.2.3.
5. **MQ4 (Boundary / exclusion)** — the enumeration of user-declared exclusions, OR explicit-empty in cold-context cases where no extrinsic declarations are perceivable. Per §2.2.4 + the cold-empty-valid rule from `devdocs/inquiries/2026-06-06_10-37__articulate_scope_boundary_perception/finding.md`.
6. **MQ extensions** — when an extension qualifies under the bounded-extensibility test (§2.2.5 rules a-b-c), its answer appears here; otherwise this position is empty (consistent with empty-rendering principle).
7. **MQ-aggregate-resolution** — verdict label (ALIGNED / CONTRADICTION-reconciled / IRREDUCIBLE-TENSION) plus reconciliation-content. Mandatory even when ALIGNED with "no tension to resolve" — the Example A precedent at §13 confirms this. The verdict label is required-distinct-content because it drives different downstream consumer behavior than the reconciliation-content alone (see B5 verdict below).
8. **Deconstruct tuple** — subject + action + deliverable-shape, with at least these three elements per §2.3; structural-layer spec may add more.
9. **MultiDepth pair** — exactly two outputs per §2.4: the literal task and the literal task wrapped in its perceived purpose chain.
10. **Rephrase variants** — two or more alternative formulations per §2.5, each constrained by MQ1 + MQ2 + MQ3 + MQ4 + MQ-aggregate-resolution + Deconstruct's deliverable-shape commitment.

Per-MQ confidence stamps (HIGH / MED / LOW) appear where confidence is non-trivial — for example, when MQ4 perceives an extrinsic exclusion at HIGH confidence (Example D precedent) or when MQA reaches CONTRADICTION-reconciled at HIGH confidence (Example C precedent). These confidence stamps are not strictly mandatory per the doc's contract but the worked examples at §13 treat them as routinely included where they carry signal.

### Empty-rendering as first-class content

A subtle commitment that earns explicit naming: when a per-MQ entry's perception is "nothing to add" — for example, MQ4 in a cold-context routine task where no extrinsic exclusion declarations are visible — the output md renders that perception as explicit-empty, not as silent-absence. The empty rendering carries the signal: it tells the consumer (specifically the runner, which uses MQ4 to bound `/surfacing`'s territory) that no exclusions apply to this item. Silent-absence would be ambiguous between "the discipline considered MQ4 and found nothing" versus "the discipline failed to consider MQ4." Explicit-empty disambiguates.

The empty-as-content principle generalizes: any content kind whose perception is "nothing to add" gets emitted explicitly as empty. This commitment is structurally backed by four independent grounds — the doc's §2.2.4 cold-empty-valid rule for MQ4 specifically, the Example A worked-example precedent at §13, the scientific-data-output domain transfer pattern (where papers require explicit-no-participants declarations rather than silent omission), and forward-compatibility (when future structural-layer spec adds optional fields, the empty-rendering principle gives backward-compatible behavior — older articulations render the new field as empty rather than failing).

### The discrimination principle — load-bearing element test

The criterion that produced every IN / OUT verdict in this finding is the load-bearing element test, drawn verbatim from the explainer doc's §5 lightweight stance: *"every output element is load-bearing for at least one downstream actor's decision."* The test is operationalized through the four-reader test:

A candidate output entry passes the load-bearing test if, when removed from the bundle, at least one of these four readers' downstream decisions changes:

- **The runner** — which reads Substrate-Meta-questions (MQ2 + MQ4) from the bundle to formulate `/surfacing`'s territory specification, and reads ENVELOPE's Itemize count to decide spawn-or-not.
- **The downstream loop discipline** — which consumes the full CORE bundle as framing for its own work (typically a sense-making or surfacing operation on the project after the framing is set).
- **The user reading the framing artifact** — typically right after articulation to verify the framing isn't accidentally narrow or accidentally wide.
- **The audit reader** — inspecting cross-session, typically reconstructing what the discipline articulated and why specific commitments were made.

Apply the test by asking: "If I remove this candidate entry, does any of the four readers take a different action than they would with the entry present?" If yes, IN. If no, OUT.

The test is a permission-test (every entry must serve ≥1 reader), not a sufficiency-test (entries don't need to serve all four readers to qualify — and most entries serve specific subsets). For example, MQ2's expression-mode field serves the runner (informs how to treat the substrate at /surfacing) but is largely transparent to the downstream loop discipline; MultiDepth's purpose-wrapped output serves the downstream loop discipline (informs the purpose-framing) but isn't read by the runner for /surfacing-formulation. Each entry's load-bearing footprint is the union of readers it serves.

### What the output md MUST NOT contain — five identity-violating classes

The discipline's identity commitments at §1, §4 (NOT-list), and §5 (lightweight stance) collectively exclude five content classes. Any entry that falls into any of these classes is excluded regardless of whether it would pass the load-bearing test on other grounds.

**Substrate-violations.** Specific project file paths (`src/auth/login.ts:42`), code references, named project artifacts. Excluded by §1's substrate-boundary commitment (the discipline does not fetch project files or read specific artifacts) and by §4's NOT-list item 2 (no external-context fetching). The discipline's substrate is the task statement plus the LLM's general cognition; output content cannot exceed that substrate. A worked illustration: MQ2's kinds-plural lists kinds of context that would bear on the task ("current auth implementation," "prior auth-module designs"), not specific project artifacts ("the file at src/auth/v2/login.ts that you committed last Tuesday"). The latter is substrate-violation.

**Adjudications.** Picking a winner among Rephrase variants, choosing the correct MQ interpretation when several are plausible, declaring one Deconstruct interpretation right and others wrong. Excluded by §4 NOT-list item 3 (no adjudication). The discipline emits options or perceptions; downstream consumers decide which to act on. A worked illustration: when Rephrase emits two variants, the output bundle presents both as alternatives; it does not say "use variant 2."

**Cross-item relational claims.** Statements like "item 1 enables item 2" or "items A and B share a common abstraction." Excluded by §4 NOT-list item 4 (no cross-item interpretation). The discipline operates at per-item granularity; relational meaning across items belongs to a different cognitive operation (the next-stage loop discipline can perceive cross-item structure if needed). Itemize's count-perception is not cross-item interpretation; perceiving cardinality is intrinsic to itemization.

**Fidelity verdicts.** Statements like "this articulation faithfully captures the task" or "the output may be missing something the input contained." Excluded by §4 NOT-list item 1 (no fidelity verdict). The discipline produces expansion content; fidelity judgment belongs to the user or a downstream review discipline. Per §7, the discipline DOES emit a self-assessment verdict (PROCEED / FLAG / RE-RUN with HIGH/MED/LOW confidence) — but that verdict reports the discipline's internal observation of close-calls and structural-suspect signals during the invocation, not a fidelity judgment of output-against-input.

**Ecosystem-knowledge references.** Tool documentation URLs, library version notes, external knowledge-base excerpts, links to RFCs or specifications. Excluded by §4 NOT-list item 5 (no ecosystem-knowledge reach) and by §5 lightweight stance (no external-anchor inputs). The discipline works from the LLM's general task-shape knowledge, not from loaded external content. A worked illustration: MQ2 may say "context like 'team conventions for new feature scaffolding' would be load-bearing"; it must not say "see Conventional Commits spec at conventionalcommits.org/v1.0.0."

These five classes are distinct cognitive operations, not overlapping. Substrate-violations are about inputs the discipline didn't reach for; ecosystem-knowledge violations are about pre-loaded external content the discipline must not surface as if it were its own perception. Adjudications are about picking winners; fidelity verdicts are about judging the output. Cross-item is about relational claims spanning bundles. An LLM authoring a structural-layer spec downstream of this finding should treat the five classes as a checklist applied to every candidate field — does this field invite content from any of these classes?

### Four specific over-elaboration candidates explicitly rejected

Beyond the five content classes, four specific candidates that surfaced during the inquiry's surfacing pass were considered and rejected at meaning layer because each fails the load-bearing test. Naming these rejections preserves the rationale for future authors.

**A reader-facing summary at the top of the bundle** was considered (would the user benefit from a 1-2 sentence overview before scanning the bundle?). Rejected. The ANCHOR layer already serves the reader-navigation role by stating exactly what task this bundle is about; the ENVELOPE layer's self-assessment verdict provides the headline outcome (PROCEED clean, or FLAG with rationale). A reader-facing summary would be either a re-statement of the task (redundant with ANCHOR) or a summary of the perceptions (redundant with CORE). Load-bearing test fails — no reader's decision changes if the summary is removed. (A structural-layer spec may choose to render the artifact with a header that reads like a navigational title — that's a structural choice, not meaning-layer content.)

**Inheritance-trace per content entry** was considered (would carrying per-entry provenance — which prior inquiry committed to each piece — help the audit reader?). Rejected. The explainer doc's §11 inheritance map serves the SPEC reader (someone learning the discipline's history). The output md serves a DIFFERENT reader — a consumer of a specific articulation. The provenance of "MQ4 was introduced in inquiry X" is irrelevant to a runner reading MQ4 for /surfacing's territory, irrelevant to the downstream discipline consuming the bundle, irrelevant to the user verifying this specific articulation. The spec doc already carries inheritance; duplicating it in every output instance is over-elaboration.

**Provenance metadata as a content field** was considered (timestamp, LLM model identifier, session identifier — would these help cross-session debugging?). Rejected. Sister discipline outputs (sensemaking.md, surfacing.md, critique.md) don't carry provenance metadata INSIDE the md content; they rely on filesystem mtime plus inquiry folder structure as external provenance. The same pattern applies here. A structural-layer spec may opt for frontmatter fields (`model:`, `effort:`, etc., as the CONCLUDE protocol does for findings) — but that's a structural-rendering choice, not meaning-layer content. No reader's substantive decision depends on these metadata fields.

**Frontier flags as a separate content field** was considered (analogous to surfacing.md's State Summary's Frontier Flags or critique.md's open-questions section). Rejected. The discipline-explainer doc commits at §3 to acyclic single-pass execution and at §9 to runner-initiated re-invocation for recovery (no in-invocation iteration). A "frontier flag" field in the output would either duplicate the ENVELOPE's FLAG verdict + rationale (which already signals "consumer should review") or suggest re-invocation parameters (which §9 explicitly relegates to runner-side specs, not articulate's emission). The FLAG verdict + rationale is sufficient.

### One boundary candidate explicitly included — MQ-aggregate-resolution verdict label

One candidate that initially looked like over-elaboration is included on closer inspection. The Meta-question aggregate-resolution operation (per §2.2.6) emits both a verdict label (ALIGNED / CONTRADICTION-reconciled / IRREDUCIBLE-TENSION) and reconciliation-content (the substantive reconciled view). The question was whether the verdict label is a distinct content kind or whether it could be folded into the reconciliation-content prose.

It must be distinct, and it must be parseable by the consumer without prose-parsing. The reason: the verdict label drives behaviorally-distinct downstream consumer responses. When the verdict is IRREDUCIBLE-TENSION, the consumer (runner or downstream discipline) must surface the tension to the user — let the user adjudicate between the two readings rather than acting on a single reconciled substrate. When the verdict is CONTRADICTION-reconciled at HIGH confidence, the consumer acts on the revised substrate without surfacing. When the verdict is ALIGNED, the consumer acts on the raw MQ outputs without consulting the reconciliation-content at all (which is "no tension to resolve" per Example A precedent). Three different downstream behaviors, each triggered by a different label value. The reconciliation-content alone, without the verdict label, would require the consumer to parse the prose to detect which behavioral branch applies — fragile and prone to divergence across LLMs. The verdict label as parseable distinct content is therefore load-bearing for the runner + downstream-discipline readers' decisions.

### Two reusable meta-patterns surfaced

Two patterns emerged during the inquiry that are general enough to apply to future audits on other discipline-output meaning-layer questions and grounded enough to be ready for reuse.

**Pattern 1: meaning-layer-as-discrimination-principle-set.** Meaning-layer specs for discipline-output artifacts have a recurring structure: they (a) commit one or more discrimination principles, (b) derive positive content via those principles, (c) derive negative content via those principles, and (d) commit a layer-separation meta-commitment that bounds the spec to the meaning layer and defers structural and process concerns to downstream specs. This finding instantiates the pattern on itself — the load-bearing test + multi-reader operationalization are the discrimination principles, the three-layer model + 10 per-item entries are the positive content derived via those principles, the five negative-content classes + four over-elaboration rejections are the negative content derived via those principles, and this paragraph's layer-separation note is the meta-commitment. Future meaning-layer inquiries for other discipline-output specs (the eventual articulate2 spec, or any new discipline that needs an output meaning-layer spec) can use this pattern as scaffolding.

**Pattern 2: empty-as-result-not-as-narration.** A refinement of the empty-as-content principle: when a perceptual operation's output is "nothing to perceive in this instance," the output md should emit the empty rendering as a positive result-emission, not treat it as absence-of-emission. The empty IS the perception's result. Calling it absence-of-emission would be process-narration ("the operation considered but found nothing") rather than result-emission ("the operation perceived nothing-to-include"). The pattern parallels the scientific-data-output domain where papers require explicit "no participants were recruited" or "no funding" declarations rather than silent omission. It generalizes beyond cold-context MQ4 to any per-MQ entry whose perception in a particular instance is "nothing to add" and applies to MultiDepth's shallow purpose chains in cold context.

### Layer-separation meta-commitment

This finding commits content kinds at the meaning layer only. The following layers are deliberately downstream and explicitly not pre-decided here:

**Structural layer** — specific field names (e.g., what to call the MQ2 substrate; whether to nest reconciliation-content inside the MQA verdict or sibling-position it); JSON / YAML / markdown rendering format choices; section header styles; table-vs-bullet rendering for each layer; ordering of fields within a per-item bundle. A structural-layer spec downstream of this finding can choose any rendering shape that preserves the contract committed here — empty-rendering as explicit field-value rather than missing-key; MQA's verdict label as a parseable enum-like value (string with known values, or a dedicated label field); per-item bundles separated by some structural marker. None of those choices changes the meaning-layer commitment.

**Process layer** — when the artifact is written (atomically at end of invocation versus streamed as each operation emits); how the LLM produces the file; how the runner consumes it. The recent process-layer audit at `devdocs/inquiries/2026-06-06_16-27__articulate_simple_doc_process_layer_deepdive/finding.md` covers the discipline's runtime process and committed three MUSTs that have already been applied to the explainer doc — notably, the cross-LLM determinism non-commitment at §5 means that any structural-layer spec must accept that two LLMs producing the same per-item bundle from the same input may diverge at LLM-judgment edges (cold-vs-warm context detection, intrinsic-vs-extrinsic exclusion routing, MQA reconcile-threshold). The meaning-layer commitments in this finding hold regardless of that divergence — the divergence is in HOW the LLM judges, not in WHAT content categories belong.

## Next Actions

### MUST

(None proposed at this finding stage. This finding commits content-kind principles; the structural-layer spec authored downstream is where MUST-level commitments to specific field names and rendering happen. The principle-set this finding produces is itself the action the user requested — a discussable meaning-layer spec — and committing principles to the doc is not part of the inquiry's scope unless the user authorizes a separate apply step.)

### COULD

- **What:** Apply this finding's principles to the explainer doc at `devdocs/how_articulate_simple_should_be.md` §6 — e.g., expand §6 to enumerate the ten per-item content kinds explicitly rather than the current condensed listing, and add the empty-rendering principle as an explicit commitment.
  - **Who:** The user, when ready
  - **Gate:** Observable trigger — user authorizes applying this finding's principles to the explainer doc
  - **Why:** Surfaces the meaning-layer commitments in the place future structural-layer authors will read first; closes a documentation visibility gap.

- **What:** Author a structural-layer spec for the articulate_simple output md at `cognitive_harness/articulate-simple/references/articulate-simple-output.md` (or a similar location once the scaffolding directory exists), building on this finding's meaning-layer commitments.
  - **Who:** The user (or a future authoring session)
  - **Gate:** Condition-bound — when `cognitive_harness/articulate-simple/` is scaffolded with its SKILL.md and references directory
  - **Why:** Closes the implementation gap surfaced in the discussion before this inquiry — the discipline-explainer doc commits to a contract but no actively-maintained structural spec exists for the output. A structural spec inheriting this finding's commitments produces an executable discipline.

### DEFERRED

- **What:** Author a process-layer spec for how the articulate_simple output md is emitted at runtime (atomic vs streamed; how the LLM commits the file; re-invocation parameter contract for runner-initiated late-split recovery).
  - **Gate:** Condition-bound — when `cognitive_harness/articulate-simple/SKILL.md` is authored, OR when downstream usage exposes a process-layer ambiguity not anticipated by the prior process-layer audit.
  - **Why (if revived):** Process-layer commitments build on the meaning-layer commitments here plus the prior process-layer audit's discrimination of intentional-vs-accidental under-specification. The two findings together provide enough surface for process-layer authoring when the time comes.

- **What:** Import the software-spec-authoring under-specification taxonomy (IMPLEMENTATION-DEFINED / UNSPECIFIED / UNDEFINED) as a formal classification for the bundle's optional and conditional fields.
  - **Gate:** Condition-bound — when 3 or more cognitive disciplines reach Mature-state per the doc's §10 calibration trajectory and need the additional precision.
  - **Why (if revived):** Currently premature for Bootstrap state with a single discipline; the empty-rendering principle handles forward-compatibility adequately at this stage.

## Reasoning

### Why a three-layer structure rather than flat or two-layer

A flat-list structure (every output entry at the same level, no layering) was considered and rejected. It loses the load-bearing distinction between statement-level content (Itemize count, end-of-invocation verdict — read by the runner before any per-item content) and per-item content (the per-bundle perceptions read by the downstream loop discipline). Without the layer-separation, future structural-layer authors would have to re-derive which entries are statement-level versus per-item — work that this finding does once at meaning layer.

A two-layer structure (combining ENVELOPE and CORE; treating ANCHOR as just another entry in CORE) was also considered and rejected. The ANCHOR layer has a categorically different content-source than the CORE entries — ANCHOR is verbatim input preservation, while CORE entries are the discipline's perceptions. Conflating them would let future structural-layer authors treat ANCHOR as just another perception-output, losing the auditability commitment that the original input is preserved unedited.

### Why the load-bearing element test, not contract-conformance

An alternative discrimination tool was considered — contract-conformance ("does this candidate entry match the §6 D5 contract"). Rejected. Contract-conformance handles the positive content (entries explicitly listed in §6's contract) but provides no test for boundary candidates that aren't in §6 explicitly — like B1 reader-summary, B2 inheritance-trace, B3 provenance metadata, B6 frontier flags. These boundary candidates need a test that operates beyond the contract — that test is the load-bearing element test, which applies to any candidate regardless of whether the contract names it. The load-bearing test is more general and handles the discriminative work the contract-conformance test cannot.

### Why five negative classes rather than fewer

A contrarian proposal at the innovation stage suggested collapsing the five negative classes to three — combining substrate-violation with ecosystem-knowledge (both about reach-beyond-substrate) and combining adjudication with fidelity-verdict (both about judging-rather-than-perceiving). Rejected on structural grounds. Substrate-bounded is about input-reach (the discipline can't fetch); ecosystem-knowledge is about load-carrying (the discipline must not emit pre-loaded external content as if it were its own perception). These are distinct cognitive operations — an LLM whose context happens to include external knowledge can violate the ecosystem-knowledge class without ever violating the input-reach commitment. Similarly, adjudication is about choice (no winner-picking among options the discipline emits), while fidelity-verdict is about judgment (no output-vs-input matching). Distinct operations. Collapsing the five to three would lose meaningful discrimination and force future readers to re-derive the distinctions case-by-case.

### Why the MQA verdict label is IN despite seeming structural

The MQA verdict label looks like a structural concern at first glance — it has the shape of an enum-like value. The reason it earns inclusion at the meaning layer is that the label drives behaviorally-distinct downstream consumer responses, and the alternative (embedding the label's information in reconciliation-content prose for the consumer to parse) is fragile across cross-LLM divergence (per the prior process-layer audit, LLMs may differ at judgment edges). The meaning-layer commitment is that "the consumer must be able to parse the verdict shape distinctly from reconciliation-content prose"; the structural-layer is free to choose HOW that parseable-distinctness is rendered (sibling field; explicit label prefix in the content; enumeration value in a frontmatter; etc.).

### Why four specific over-elaboration rejections rather than only the negative-class principle

The five negative-content classes provide the principle for excluding identity-violating content. The four over-elaboration rejections (B1-B3, B6) are not class-based exclusions — they're applications of the load-bearing element test to four specific candidates that surfaced during the inquiry. Naming the four rejections explicitly preserves their rationale for future authors who might raise the same candidates again — a structural-layer author tempted to add a reader-facing summary for "user-friendliness" can read the B1 rejection and see why the load-bearing test fails for that candidate. The four are pedagogical anchors that demonstrate how the principle applies, not a fixed list of all possible over-elaboration candidates.

### Why no MUSTs in Next Actions

This finding commits content-kind principles at the meaning layer. The question asked is "what should the output md contain and what shouldn't" — that question's answer IS the principle-set this finding produces. The user did not ask "now apply these principles to the explainer doc" or "now author a structural-layer spec" — those are downstream applications. Per the project pattern in earlier session work, MUST-level actions are reserved for items the user explicitly authorizes for application. The COULD actions surface the natural next steps without committing the user to executing them.

## Open Questions

### Monitoring

- Whether the empty-rendering principle is sufficient for structural-layer rendering choices, or whether specific rendering conventions emerge across LLMs that argue for tightening the principle to a specific rendering form (e.g., "the literal string `(empty)`" versus "explicit `null` field value"). Observable after the structural-layer spec is authored and used across multiple LLM invocations.

- Whether the four-reader operationalization (runner / downstream-discipline / user / audit-reader) captures all the relevant decision-makers, or whether additional reader types surface as the discipline matures. Observable as the discipline accumulates Early-Operation evidence (~10-20 invocations per the explainer doc §10).

### Blocked

- A structural-layer spec for the articulate_simple output md cannot be authored cleanly until `cognitive_harness/articulate-simple/` is scaffolded with its SKILL.md and references directory. The implementation scaffolding gap surfaced in the prior discussion about discipline scaffolding (the gap between the doc's commitments and what actually exists in cognitive_harness/) is blocking.

### Research Frontiers

- Whether the meaning-layer-as-discrimination-principle-set pattern (Pattern 1 above) applies cleanly when the discipline being specified is NOT lightweight-stance — for example, a future discipline that explicitly commits to runtime enforcement code. The pattern's derivation here leaned heavily on the lightweight stance's load-bearing test; non-lightweight disciplines may need a different discrimination principle.

### Refinement Triggers

- If a future inquiry on a sibling discipline (e.g., a meaning-layer spec for sensemaking.md's content) finds the meaning-layer-as-discrimination-principle-set pattern doesn't fit, the pattern needs revision or scoping refinement (e.g., scoped to lightweight-stance disciplines specifically rather than all discipline outputs).

- If empirical evidence shows that LLMs systematically differ on the empty-rendering principle (one emits `(empty)`, another emits omitted-field), the principle may need tightening at the structural-layer spec time — though that's a structural concern, not a meaning-layer concern.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
rearead devdocs/how_articulate_simple_should_be.md fully and lets discuss how the output should be .. as you know all disciplines produces md files . and articualte_simple also should do that. but what this output should contain and what it shouldnt contain (meaning layer)
```

</details>

## Example Output (illustrative rendering)

The rendering below is *illustrative* — specific field names, section headers, ordering choices, and markdown shape are structural-layer concerns that downstream spec authoring will settle. What the example demonstrates is the **meaning-layer commitments** this finding made: three layers (ANCHOR / ENVELOPE / CORE), ten per-item content kinds, empty-rendering as first-class content, the MQA verdict label as distinct parseable content, and the absence of any of the five identity-violating content classes or the four over-elaboration candidates rejected earlier in this finding.

The example shows a **cold-context invocation** — the LLM has no relevant session declarations visible, so MQ4 emits explicit-empty (a load-bearing signal in its own right, not silent absence).

---

### ANCHOR

**Task statement** (verbatim input preserved):

> improve the onboarding flow for new users

### ENVELOPE

- **Itemize count**: 1
- **Per-item identifiers**: `item-1`
- **Self-assessment verdict**: PROCEED
- **Confidence**: HIGH
- **Rationale**: clean run — no LAYER 1 mode boundary approached; each operation's output internally coherent.

### CORE

#### Per-item bundle: `item-1`

**Item text**: improve the onboarding flow for new users

**MQ1 (Structural / scope)**: Feature-level scope — the onboarding flow is a feature subsystem within a larger product surface. Not a time-horizon task (no specific failure to patch); not cross-cutting (bounded to one feature).

**MQ2 (Relational / context-need)**:
- *Verdict*: yes
- *Kinds-plural*:
  - the current onboarding flow's implementation and structure
  - user feedback on onboarding pain points (if available in project artifacts)
  - metrics on first-time-user completion rates
- *Relational stance*: continuation (improving existing work, not greenfield)
- *Expression mode*: hypothetical-relational — *"tasks of this kind typically have these artifacts available; if so, they bear on the improvement direction."*

**MQ3 (Interpretive / intent)**: Intent is reducing drop-off / increasing completion-rate of first-time setup. The surface ask is improvement of UX or flow-structure; it is NOT "redesign the user data model" and NOT "reorganize the post-onboarding experience."

**MQ4 (Boundary / exclusion)**: *(empty — no extrinsic exclusion declarations perceivable in cold-context session)*

**MQ extensions**: *(empty — no qualifying extensions fired under the bounded-extensibility test for this item)*

**MQ-aggregate-resolution**:
- *Verdict label*: **ALIGNED**
- *Confidence*: HIGH
- *Reconciliation-content*: no tension to resolve — all four base meta-question perceptions converge on "improve completion-rate / UX of an existing feature-level subsystem."

**Deconstruct tuple**:
- *Subject*: onboarding flow (for new users)
- *Action*: improve
- *Deliverable-shape*: targeted improvements to the existing flow — could be UX changes, completion-rate-targeted modifications, or both

**MultiDepth**:
- *Literal*: improve the onboarding flow for new users
- *Purpose-wrapped*: improve the onboarding flow for new users to reduce drop-off during first-time setup, so users reach product value faster

**Rephrase** (constrained by MQ1 + MQ2 + MQ3 + MQ4 + MQ-aggregate-resolution + Deconstruct's deliverable-shape commitment):
- Reduce drop-off in the first-time user onboarding flow and lift completion rates
- Enhance the new-user onboarding experience to make first-time setup smoother and faster-to-value

---

### What this example demonstrates

- **Three layers are visibly distinct.** ANCHOR preserves the raw input verbatim. ENVELOPE carries statement-level cardinality + verdict + confidence + rationale. CORE carries the per-item bundle.

- **All ten CORE content kinds appear.** Item text, MQ1, MQ2 (preparation substrate), MQ3, MQ4, MQ extensions, MQ-aggregate-resolution (verdict label + content), Deconstruct, MultiDepth pair, Rephrase variants — every entry from §3's positive spec is present.

- **Empty-rendering as first-class content.** MQ4 and MQ extensions both render *explicit-empty* rather than being silently omitted. The empty IS the signal: it tells the runner that `/surfacing`'s territory has no extrinsic exclusions to apply, and tells the user/audit-reader that the discipline did consider these positions and found nothing to add. Silent omission would be ambiguous between "considered and found nothing" versus "didn't consider"; explicit-empty disambiguates.

- **MQA verdict label as distinct parseable content.** The label `ALIGNED` is structurally separable from the reconciliation-content prose. A consumer can detect "no contradiction to reconcile" by reading the label alone, without parsing prose. If the verdict had been `CONTRADICTION-reconciled`, the consumer would know to read the revised substrate; if `IRREDUCIBLE-TENSION`, the consumer would know to surface the tension to the user.

- **No content from the five identity-violating classes.**
  - *Substrate-bounded*: MQ2's kinds-plural names KINDS of context ("the current onboarding flow's implementation," "user feedback") — not specific project paths or named artifacts.
  - *No adjudication*: Rephrase emits two variants without picking a winner; the consumer chooses.
  - *No cross-item interpretation*: single-item case here; in a multi-item invocation each bundle would still be independent, no "item 1 enables item 2."
  - *No fidelity verdict*: the ENVELOPE's verdict reports the discipline's self-observed run-quality (close-calls approached / structural-suspect signals), NOT a judgment of whether the output faithfully represents the input.
  - *No ecosystem-knowledge*: no tool documentation URLs, no library version notes, no external KB excerpts.

- **No over-elaboration.** No reader-facing summary at the top (ANCHOR + ENVELOPE serve reader-navigation); no inheritance-trace per entry (provenance lives in the explainer doc, not in every output instance); no provenance metadata fields in the content layer (timestamp / model-id / session-id are runtime-environment, not output content); no frontier flags as a separate section (the FLAG verdict + rationale in ENVELOPE serves that role when needed).

### How a warm-context invocation would differ

If the same task statement were articulated in a session where the user had earlier said, for example, *"we're rolling back the onboarding-v2 experiment; ignore that branch"* — the bundle would change at exactly three positions:

- **MQ4** would enumerate `onboarding-v2 experiment branch` as excluded at HIGH confidence, instead of emitting explicit-empty.
- **MQ-aggregate-resolution** would likely fire at `CONTRADICTION-reconciled` (MQ2's default kinds-list would have surfaced onboarding-v2 as continuation context; MQ4's exclusion overrides). The reconciliation-content would explain the revised preparation substrate for the runner.
- **MultiDepth's purpose-wrapped** could carry a deeper chain (more connectives), drawing on whatever session goals are visible.

Everything else — the three-layer structure, the ten content kinds, the discrimination principles — holds identically across cold-context and warm-context invocations.

### How a multi-item invocation would differ

If the task statement triggered Itemize (e.g., *"fix the onboarding bug AND build the email-verification flow"*), CORE would carry **two per-item bundles** — each independent, with no cross-item relational claims between them. The ENVELOPE's Itemize count would be 2 and per-item identifiers would be `[item-1, item-2]`. Otherwise the per-bundle structure inside CORE is identical to the single-item case shown above.
