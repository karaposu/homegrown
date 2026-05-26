---
status: active
refines: devdocs/inquiries/2026-05-13_06-30__explore_canonical_coverage_via_staged_iteration/finding.md
---
# Finding: Is Mapping the Required Core of /explore?

## Changes from Prior

**Prior path:** `devdocs/inquiries/2026-05-13_06-30__explore_canonical_coverage_via_staged_iteration/finding.md`

**Revision trigger:** A fundamental-level definitional question from the user about what `/explore` IS at the discipline level. The prior finding focused on COVERAGE mechanisms (how `/explore` ensures canonical sources aren't missed, via a two-layer model + a `/staged-explore` runner). This finding sits one level deeper — what `/explore` fundamentally IS as a cognitive discipline.

**What's preserved:** Everything the prior finding committed remains intact — the three-piece Canonical Coverage Stack (the thin `/staged-explore` runner, the canonical-source registry in `_branch.md`, the per-rule × per-run audit); the two-layer coverage model (inquiry-framing upstream + `/explore` mechanics downstream); all four pre-ship refinement targets; all four deferred items with their revival triggers. None of these are touched.

**What's changed:** Only the spec-language framing of `/explore`'s identity section. The current opening — *"To explore is to perform purposive open-mode surfacing of a territory"* — gets refreshed to lead with user-language ("mapping") and add a fine-grain refinement that names the verb (surfacing), the noun output (the map), and the six components together. This is spec-clarity work, not mechanism change.

**What's new:** Three pieces of new spec structure — a granularity note disambiguating noun vs verb senses of "mapping"; a "Kinds of mapping `/explore` covers" section listing seven types observably present in the spec; a "How `/explore` graduates an everyday operation" section explaining the methodology-rigor gradient between colloquial-explore (e.g., AI reading a codebase) and disciplinary `/explore`. Plus a new design vocabulary node — "**Granularity**" — that captures the noun/verb resolution mechanism.

**Migration:** None required. The prior finding's actions remain unchanged and unblocked. This finding's spec-language changes can ship before, during, or after the prior finding's pieces. The granularity-of-mapping clarification is compatible with the canonical-source registry mechanism (the registry doesn't depend on mapping's grain definition).

---

## Question

The user asked, returning to fundamentals at the discipline level: *"What is exploring? It is mapping, correct? And there are different types of mapping. When I ask AI to read my codebase, it does mapping and it calls it explore too maybe. So mapping is required part of explore?"*

The inquiry's goal was a **definitional finding at the discipline level** that either (a) confirms mapping is `/explore`'s required core operation, identifies the types of mapping it covers, and articulates the structural boundary between `/explore` and colloquial-explore operations (AI reading a codebase, etc.); or (b) shows that mapping is one of several operations within `/explore`, naming the others. The user should be able to act on the answer immediately — either update `/explore`'s spec or refine its vocabulary — and the answer should reconcile cleanly with the prior canonical-coverage finding if implications emerge.

(Project context the reader may need: `/explore` is the project's "Structural Exploration" thinking discipline, defined in `homegrown/explore/references/explore.md`. Its current opening says exploration "performs purposive open-mode surfacing of a territory" producing "a confidence-tagged map." The user's question hits a real-but-implicit tension between the spec's "surfacing" verb and the everyday "mapping" verb.)

---

## Finding Summary

- **YES, mapping is the core of `/explore`** — at the level you're asking. The discipline exists for mapping a territory. Your intuition is correct.

- The answer hinges on **granularity** (a new design vocabulary node): at coarse grain (user-language), mapping IS the whole operation. At fine grain (spec-internal precision), `/explore`'s spec distinguishes the verb form ("open-mode surfacing"), the noun output (the confidence-tagged map), and the six mechanism components (Scan, Signal Detection, Probe, Resolution Management, Frontier Tracking, Confidence Mapping). Both grains are correct; neither contradicts the other.

- **When you ask AI to read your codebase, that IS `/explore` — without the disciplinary methodology wrapper.** Same cognitive operation (open-mode surfacing producing a confidence-tagged map). What `/explore` adds beyond colloquial-explore: explicit Step 0 declarations, the NOT-list circumscribing what the discipline doesn't do, structured telemetry, convergence criteria plus jump-scan, frontier-state tracking, and a confidence-level taxonomy. The boundary between the two is a **methodology-rigor gradient**, not a category difference.

- **`/explore` covers seven observable types of mapping** (already present in the spec but scattered): layout, concept, status, coverage/confidence, frontier, possibility, and a partly-excluded relational type (full relational meaning belongs to sense-making per the NOT-list). A typical run produces several types simultaneously.

- **The shippable answer is a small `/explore` spec refresh — the "Identity Refresh v1" — in three small section edits**: refine the opening to lead with "mapping" (recovering "surfacing" as one of the operations); add a brief granularity note disambiguating noun vs verb; add a section listing the seven kinds of mapping; add a section explaining the colloquial-vs-disciplinary methodology gradient. No mechanism changes. Approximately one focused session of spec-edit work.

- **Three pre-ship refinements** apply to the spec text before it ships: (1) reference the six components by cross-reference to the spec's components section rather than re-enumerating them inline (avoids future-staleness if the count changes); (2) keep this finding's Summary section tight enough to read in under three minutes (you're reading it now); (3) add an optional fallback rule to the granularity note for ambiguous-context cases ("when in doubt, both senses apply simultaneously and the distinction is not load-bearing").

- **The prior canonical-coverage finding is preserved unchanged.** This finding REFINES rather than supersedes or corrects. The two findings address different questions at different levels — coverage (how to not miss canonical sources) vs. identity (what `/explore` fundamentally IS) — and are fully compatible.

---

## Finding

The user's question came back to fundamentals because the prior canonical-coverage work had committed to a coverage-mechanism view of `/explore` without first settling what `/explore` IS at the discipline level. The question itself is small ("is mapping the required core?"), but it sits at the foundation of the discipline's identity, and answering it well requires honoring two things at once: the user's everyday vocabulary and the spec's design precision. The answer splits cleanly into four parts.

### 1. Mapping is the core — at the right grain

At everyday/colloquial grain, the word "mapping" encompasses the whole operation `/explore` performs: surfacing what exists in a territory, recording it with annotations, producing a navigable representation. That is mapping in the user's sense. Your "exploring is mapping" intuition is correct at this grain.

At spec-design grain, the existing `/explore` reference at `homegrown/explore/references/explore.md` teases mapping into three distinct things — the verb (which the spec currently calls "open-mode surfacing"), the noun output (the confidence-tagged map), and the six components that produce the map (Scan, Signal Detection, Probe, Resolution Management, Frontier Tracking, Confidence Mapping). At this grain, "mapping" specifically refers to the noun output and to one of the six components (Confidence Mapping). The other five components do work that contributes to producing the map but aren't called "mapping" individually.

These two grains aren't contradictory. They're at different levels of resolution. The user's question reads naturally at the coarse grain; the spec is written mostly at the fine grain. Both readings are valid; the right answer makes both visible and tells the reader how to determine which grain applies in a given context.

The structural pivot is the **granularity** vocabulary node — a new design term this finding contributes. Granularity names the distinction between coarse-grain user-language and fine-grain spec-precision, gives the reader an explicit determination procedure, and unifies the two grains under one model rather than treating them as competitors.

### 2. Colloquial-explore and disciplinary `/explore` are the same operation, different methodology

When you ask an AI to read your codebase, the AI surfaces items (files, modules, concepts), records what it found, and produces a summary. That is the same cognitive operation `/explore` performs. The mechanism — purposive open-mode surfacing producing a confidence-tagged-ish map — is identical.

What differs is methodology rigor. `/explore` adds, beyond what colloquial-explore does:

- Explicit Step 0 declarations at invocation (cognitive-commitment mode, territory-type mode, entry point, expected breadth, depth level). Colloquial-explore makes these implicit.
- A NOT-list that circumscribes the discipline's scope (meaning, mechanism, partition, novelty, route-selection are out — they belong to other disciplines). Colloquial-explore has no NOT-list and tends to drift into interpretation.
- Structured per-run telemetry. Colloquial-explore reports results without metrics.
- Explicit convergence criteria plus a jump-scan rule. Colloquial-explore stops when "feels enough."
- Frontier-state tracking (the boundary between known and unknown, advancing/stable/closed). Colloquial-explore doesn't.
- A five-level confidence-level taxonomy (confirmed, scanned, inferred, unknown, confirmed-absent). Colloquial-explore reports findings without explicit confidence.

The boundary between the two is a **methodology-rigor gradient**, not a category difference. An AI doing a careful codebase scan with explicit confidence statements is doing `/explore`-light; an AI doing a careless `/explore` run that skips jump-scan is doing closer-to-colloquial. The disciplined form graduates the everyday operation by adding the wrapper.

### 3. `/explore` covers seven observable types of mapping

These types are already present in the `/explore` spec at scattered points; this finding unifies them. The list is descriptive — it captures what `/explore` observably does — not prescriptive. A typical run produces several types simultaneously.

- **Layout mapping** — what items exist and where (file paths, folder hierarchy, organizational positions). The default kind for codebase reading.
- **Concept mapping** — what concepts, themes, or categories exist in the territory. The default kind for solution-space exploration.
- **Status mapping** — the state of each item (known/unknown, active/stale, blocked/unblocked). Often layered on top of layout or concept mapping.
- **Coverage / confidence mapping** — what's been scanned, probed, inferred, unknown, or confirmed-absent. The epistemic layer that the spec's confidence map section formalizes. Always produced.
- **Frontier mapping** — where the boundary between known and unknown stands, with state values advancing / stable / closed. Always tracked.
- **Possibility mapping** — what could exist if generated, the candidate landscape in possibility mode. Specific to possibility-mode runs.
- **Relational mapping — partly excluded.** `/explore` records co-location (the spec's adjacency annotation layer). Full relational meaning — what items mean to each other in a conceptual model — belongs to sense-making, not `/explore`, per the NOT-list at the spec's identity section.

### 4. The shippable architecture — `/explore` Identity Refresh v1

The answer materializes as a small `/explore` spec refresh, approximately one focused session of spec-edit work, with no mechanism changes. The refresh has four parts.

**Part one — refine the spec's opening section.** Replace the current opening (*"To explore is to perform purposive open-mode surfacing of a territory"*) with: *"`/explore` performs purposive open-mode mapping of a territory — surfacing items into view, recording them with annotations, and producing a confidence-tagged map."* The user-language verb ("mapping") leads; the design-grain verb ("surfacing") is recovered in the second clause as one of the operations.

Add a tabular fine-grain refinement immediately after the opening: a three-row layout naming the verb form ("open-mode surfacing"), the noun output ("the confidence-tagged map"), and the components (referenced by cross-reference to the spec's components section rather than re-enumerated inline — this avoids future-staleness if the count changes).

Add a brief granularity note that disambiguates noun vs verb senses of "mapping" and tells the reader how to determine which grain applies in their current context. Coarse grain when the spec is discussing what `/explore` does at the user-facing level; fine grain when the spec is detailing mechanism (components, telemetry, failure modes). When in doubt, both senses apply simultaneously and the distinction is not load-bearing.

Run a quick consistency check across the surrounding paragraphs of the opening section — the existing four near-neighbor contrasts (`/explore` is NOT sensemaking / innovation / research / browsing), the upstream-precondition statement, and the NOT-list — to verify they read coherently under the new framing. They should; the changes are small.

**Part two — add a "Kinds of mapping `/explore` covers" section.** A new section listing the seven types above, each with a one-line description and a cross-reference to where in the existing spec the type manifests. Framed as descriptive, not prescriptive. The relational-partly-excluded entry explicitly cross-references the NOT-list.

**Part three — add a "How `/explore` graduates an everyday operation" section.** Explains the methodology-rigor gradient between colloquial-explore and disciplinary `/explore`. Names the wrapper components — Step 0 declarations, the NOT-list, telemetry, convergence + jump-scan, frontier states, confidence-level taxonomy — with an explicit non-exhaustive caveat (the full mechanism is in later sections; this list names the principal wrapper components). The section frames the disciplinary additions positively: `/explore` is the discipline that graduates the everyday operation, not a gatekeeper that excludes it.

**Part four — this finding's reconciliation with the prior canonical-coverage finding.** Already handled in the Changes from Prior section above: REFINES, not supersedes or corrects. The prior finding's three-piece architecture and four pre-ship refinements remain intact and unblocked.

---

## Next Actions

### MUST

- **What:** Refine the `/explore` reference at `homegrown/explore/references/explore.md` per Part one above — new opening sentence; tabular fine-grain refinement (with components row as cross-reference, not inline enumeration); granularity note disambiguating noun vs verb senses with the "both apply when in doubt" fallback rule; consistency check on the existing near-neighbor contrasts and the surrounding paragraphs.
  **Who:** A future inquiry-author with write access to the spec file; one focused session.
  **Gate:** Observable — the spec's identity section reads as a coherent block: opening sentence leads with "mapping," refinement table follows, granularity note closes the section; the four near-neighbor contrasts and the NOT-list remain coherent under the new framing.
  **Why:** Honors the user's everyday vocabulary while preserving the spec's design precision. This is the load-bearing change of the entire refresh.

- **What:** Add the new "Kinds of mapping `/explore` covers" section to the spec, listing the seven types with one-line descriptions and cross-references to where each manifests in the existing spec. Framed as descriptive, not prescriptive. The relational-partly-excluded entry explicitly references the NOT-list.
  **Who:** Same author handling the first MUST item; included in the same session.
  **Gate:** Observable — a new section exists in the spec naming the seven types; each type's description cross-references at least one existing spec section.
  **Why:** Unifies what the spec already scatters. Lets readers see at a glance what kinds of mapping the discipline covers without deriving it from multiple components and annotation-layer descriptions.

- **What:** Add the new "How `/explore` graduates an everyday operation" section explaining the methodology-rigor gradient between colloquial-explore and disciplinary `/explore`. List the wrapper components with an explicit "non-exhaustive" caveat. Frame the disciplinary additions positively.
  **Who:** Same author; included in the same session.
  **Gate:** Observable — the section exists; the methodology-rigor gradient is named; the non-exhaustive caveat appears verbatim or in close paraphrase.
  **Why:** Addresses the user's "AI reads my codebase is also called explore" observation directly. Closes the conceptual gap between everyday and disciplinary uses of the term without dismissing either.

### COULD

- **What:** If preferred, swap in the deferred-form alternatives: minimal-substitution opening (replace just "surfacing" with "mapping" without adding a clause); prose-form fine-grain refinement (a paragraph instead of a table); compact granularity sidebar (a one-liner instead of a paragraph); spec-idiomatic section title (`"Discipline vs. colloquial use"` instead of `"How /explore graduates an everyday operation"`).
  **Who:** The spec maintainer choosing between two valid forms based on the spec's existing rhythm and style.
  **Gate:** Preference-bound — observable in the final spec text.
  **Why:** Each alternative is structurally equivalent to its counterpart; the choice is style-of-writing, not substance.

- **What:** Add an optional cross-reference from the new "How `/explore` graduates an everyday operation" section to the canonical-source registry from the prior canonical-coverage finding. Specifically, note that the registry is one concrete instance of the disciplinary methodology operating at the inquiry-framing layer.
  **Who:** Same spec-edit author; ten extra minutes during the session.
  **Gate:** Condition-bound — only meaningful once the canonical-source registry has shipped per the prior finding. Until then, the cross-reference target doesn't exist.
  **Why:** Bidirectional connection between the two findings. Optional; the finding stands without it.

### DEFERRED

- **What:** A "single-section consolidation" alternative architecture — instead of three new sections (opening refresh + kinds of mapping + colloquial-vs-disciplinary), consolidate all the new content into one new section in the identity area.
  **Gate:** Observable — only revive if the three-section architecture proves to disrupt the spec's section structure in maintenance or if a future spec reorganization makes the single-section approach cleaner.
  **Why (if revived):** Reduces the spec's section count. Trade-off: groups thematically diverse content (identity-rewrite + types-list + colloquial-distinction) under one heading, which may make the section less scannable. Currently judged more disruptive than the three-section architecture.

---

## Reasoning

### Why mapping IS the core (at coarse grain)

The strongest alternative was the spec's current position: *"NO — `/explore`'s core operation is `open-mode surfacing`; mapping is the OUTPUT and one component."* This position is internally consistent within the spec's existing vocabulary. It was tested in sensemaking against three structural grounds and failed on each.

First, user-language alignment. The user used "mapping" three times in their question. The load-bearing concept test (from the sensemaking spec's Phase 3 refinement) requires that when a concept is named in the user's term, the answer must honor that meaning rather than coin around it. To answer "no" requires the user to abandon their own vocabulary; the answer becomes correct at the spec's grain but communicatively wrong at the user's.

Second, granularity is the resolution mechanism. At coarse grain, mapping and surfacing are synonyms — both describe the cognitive act of bringing items into view from a territory. At fine grain, the spec teases them apart for design reasons. The "no" answer collapses to the fine grain only; the user is asking at the coarse grain.

Third, coincidence at coarse grain. The six components of `/explore` are all subordinate to producing the map — that's their unifying purpose. At the right level of abstraction, mapping IS the core because it's what makes the run an `/explore` run. The "no" answer is correct only when "mapping" is read narrowly; the user's reading is broad.

The verdict — YES at coarse grain, with fine-grain refinement — preserves both correctness positions and respects user-language priority.

### Why colloquial-explore is the same operation, not a different one

The alternative was: "colloquial-explore (AI reads codebase) and disciplinary `/explore` are fundamentally different operations; one is undisciplined browsing, the other is rigorous mapping." This was tested in sensemaking on three structural grounds.

First, same cognitive operation underlies both. When an AI reads a codebase, it surfaces items into view, records what it found, and produces a summary. The mechanism is the same as what `/explore` performs.

Second, the differences are in methodology, not in operation. The wrapper components (declarations, NOT-list, telemetry, convergence, frontier, confidence) are additions to the operation, not the operation itself. A `/explore` run with these wrappers stripped is still recognizable as the same operation.

Third, the boundary is a gradient. A careful AI codebase scan with explicit confidence statements is closer to disciplinary; a careless `/explore` run that skips jump-scan is closer to colloquial. Methodology rigor varies continuously.

The verdict — same operation, different methodology — dissolves the "fundamentally different" framing while preserving the legitimate point that the discipline IS more rigorous than the everyday operation.

### Why three small sections, not one consolidated section

The unexplored alternative was: "consolidate all the new content (identity refresh + types of mapping + colloquial-vs-disciplinary) into one new section." This was flagged in critique but not pursued. The three-section approach was preferred because:

- Each new piece has a distinct concern (identity vocabulary; types-of-mapping enumeration; methodology-boundary explanation) that earns its own heading.
- The existing `/explore` spec's section structure is fine-grained; adding a single mega-section would feel out of pattern.
- Future maintenance is easier with three small sections than one large one — a future edit to "types of mapping" doesn't touch the colloquial-vs-disciplinary section.

The single-section consolidation is preserved as DEFERRED with revival trigger (only if the three-section architecture proves disruptive in maintenance).

### Why the prior canonical-coverage finding is preserved unchanged

This was tested explicitly during sensemaking. The prior finding's three-piece architecture (the `/staged-explore` runner, the canonical-source registry, the per-rule audit) addresses how `/explore` avoids missing canonical sources — a coverage-mechanism question. This finding addresses what `/explore` fundamentally IS — a definitional question. The two questions are at different levels; their answers don't conflict.

The relationship is REFINES (compatible extension), not SUPERSEDES (replacing a load-bearing claim) and not CORRECTS (the prior was wrong on a specific point). The prior finding's actions remain valid and unblocked; this finding adds spec-language clarifications that don't affect the canonical-source registry mechanism.

### Significant kills

The only KILLed candidate from the innovation phase was a too-short opening sentence ("/explore is the discipline for mapping a territory") that dropped the load-bearing qualifiers "purposive" and "open-mode." Those qualifiers distinguish `/explore` from browsing per the existing near-neighbor contrasts; removing them loses too much. Seed extracted: there is no useful short-form opening; the opening's job IS to anchor distinguishing qualifiers.

### Refinement targets from critique

Three small pre-ship spec-language refinements emerged from critique and are reflected in the MUST actions above: cross-reference the components by section rather than re-enumerating them inline (avoids future-staleness); keep this finding's Summary section tight enough for under-three-minutes reading (user-perspective satisfaction); add the "both apply when in doubt" fallback rule to the granularity note (handles ambiguous-context cases). None of these are redesign; each is a few minutes of editing.

---

## Open Questions

### Monitoring

- After the spec refresh ships, observe whether spec-internal usage of "mapping" maintains the grain discipline. Specifically, when new sections are added to the spec by future inquiries, do their authors honor the noun/verb distinction the granularity note establishes? If two or more new sections accidentally conflate grains, the granularity note may need strengthening.

- After the "Kinds of mapping" section ships, observe whether downstream consumers (sense-making, decompose) reference specific types when they consume `/explore`'s output. If they do, the typology is doing useful work; if they continue to treat `/explore` output as undifferentiated, the typology may be over-elaborated for its actual consumption.

### Blocked

- An optional cross-reference from the new "How `/explore` graduates an everyday operation" section to the canonical-source registry mechanism from the prior finding is blocked on that registry actually shipping per the prior finding's MUST actions. Until the registry exists as a real artifact in `_branch.md` and the inquiry-framing discipline, there's no target to cross-reference.

### Research Frontiers

- A **single-section consolidation** of all the new content into one identity area is structurally possible but more disruptive to the spec's existing fine-grained section structure than the three-section architecture. Preserved here because the design-space-completeness check noticed the gap; not pursued because the structural argument favors three sections.

- A **first-class taxonomy of mapping types across the project's disciplines** — `/explore` covers seven types per this finding; `/navigation` decomposes into concept-mapping + status-generation + making-explicit per the `enes/nav.md` note; sense-making does anchor-extraction which is a different kind of structure-finding entirely. Is there a project-level mapping taxonomy that unifies these across disciplines? Not pursued here; would require its own inquiry.

### Refinement Triggers

- The **decision to keep the fine-grain refinement in tabular form** (rather than prose form) re-opens if a future spec maintainer reports that the tabular form interrupts the spec's prose continuity awkwardly. The deferred prose-form alternative is preserved for that case.

- The **decision to use "Kinds of mapping" as the section heading** re-opens if a future spec reorganization brings a different organizational vocabulary into the spec (e.g., a unified "Output Anatomy" section that absorbs annotation layers, depth levels, and types together).

- The **decision that the canonical-source registry cross-reference (from this section to the prior finding's mechanism) is optional** re-opens if the registry mechanism becomes load-bearing for understanding `/explore`'s methodology wrapper. Currently both findings are designed to stand independently; if the methodology section starts being consumed alongside the registry, bidirectional linking becomes more valuable.

---

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
lets go back and go to fundamentals... 
to discipline level

what is exploring? it is mapping correct? and there are different types of mapping.  when i ask AI to read my codebase it does mapping and it calls it explore too maybe.  

so mapping is required part of explore?
```

</details>
