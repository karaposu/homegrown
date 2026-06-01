## User Input

`devdocs/inquiries/2026-06-01_09-54__inquiry_elaboration_structure_user_design_compare/_branch.md` (priors consumed: surfacing / sensemaking / decomposition)

---

# Innovation — IE Structure: Compare & Reconcile

## Seed
The decomposition pieces (E2 contract / E3 Components / E6 schema / E4 Process / E5 Quality / E7 reference-authority / E1 comparison). Produce the concrete reconciled content + the decided comparison.

**Methodology-mode:** Standard default + piece-level Inversion on the meta-decision pieces (E2 the self-containment contract; E1 the comparison verdict).

## Generate (mechanisms)

**Domain Transfer (Generator) — native, self-contained analogy: the commissioning editor / brief-writer.** Given a rough pitch + the publication's mission (project goal), an editor writes a **brief**: why this piece matters now, a tight version and an ambitious version, a few angle-framings, and — if the pitch is really several pieces — says so and how they relate. The editor does **not** write the article (the answer), does **not** fact-check its sources (reference-authority), does **not** critique drafts. This analogy maps IE exactly **and names no discipline** — it's intrinsically self-contained, and it naturally *excludes* reference-authority (settling E7).

**Combination (Generator).** project_goal + original_query → the **why-it-makes-sense** field (the alignment between the ask and the mission). Neither input alone yields it.

**Absence Recognition (Generator).** *Patch:* the user's sketch omits **optionality** — resolve (H7): why-makes-sense + 3 rephrasings + small/big scope are **always produced** (cheap, and the user asked for them); the multi-request list fires **only when ≥2 distinct asks** are present. *Patch:* name the artifact — **"elaborated inquiry."** *Redesign:* the project-goal must come from somewhere — that source is the **runner's** to supply (a process concern, deferred); IE just receives it.

**Inversion (Framer) — piece-level, system depth.**
- Invert E2 *"name no neighbor"* → the spec names neighbors. System: IE becomes ecosystem-coupled → not a self-contained individual → the exact violation. **Fails; intrinsic confirmed.**
- Invert *"IE only frames, never answers"* → IE answers a little. System: IE starts doing the inquiry's work → it IS the loop → over-reach. **Fails; the over-reach border confirmed** (stated intrinsically, naming no one).
- Invert E1 *"adopt the user's spine"* → keep mine. System: mine named neighbors + pulled in reference-authority → violates self-containment. **Fails; user's spine confirmed.**

**Constraint Manipulation (Framer) — both directions.** ADD *"a reader who never saw the original query must understand the inquiry from IE's output alone"* → forces the rephrasings + why + scope to be self-explanatory (a good intrinsic quality). REMOVE *"always produce all fields"* → conditional fields; partially adopted (multi-request is conditional; the rest are always-on per the user).

**Lens Shifting (Framer).** Under the **alignment** lens (the project's purpose), *why-makes-sense* + the *importance-highlighted* rephrasing are the alignment-critical outputs — they're what keep the loop pointed at the mission.

## Inherited Frame Audit
Central assumption = "adopt the user's self-contained design." Challenged? YES — Inversion tried naming-neighbors and keeping-mine; both failed at system level. **Audit does not fire.**

## Test + Assembly — the reconciled content (the deliverable)

### E1 — The comparison (decided)
| Aspect | User's design | My 01-37 design | Verdict |
|---|---|---|---|
| Core operation | elaborate/rephrase the inquiry with multilayered understanding | comprehend → perceive-structure → verify | **agree on core**; user's framing is cleaner |
| Self-containment | names no other discipline | named neighbors in the NOT-list + "does not invoke the neighbor" + phase names mirrored neighbors | **user corrects mine** (and the flaw is broader than the one phrase) |
| Inputs | **project goal + original query** | original query only | **user corrects mine** (project-goal was missing) |
| Output | why-makes-sense · small/big scope · 3 rephrasings · multi-request+how_connected | the 5 meta-aspects + verdict header | **adopt user's** (richer, user-anchored) |
| Fidelity | implicit in good rephrasing | a separate verify phase (3 axes incl. reference-authority) | **demote**: no-drift faithfulness = an intrinsic quality; **reference-authority dropped from IE** |
| Multi-request | list + `how_connected_with_other_part` | request-structure verdict (single/parallel/sequential) | **adopt user's**; keep seq/parallel as an optional attribute |
| Spec organization | by output | by neighbor-mirrored phases | **adopt user's** (output-organized) |

**Decided:** the user's design is the spine; mine contributes only no-drift faithfulness (demoted to a quality) + the seq/parallel attribute. Everything that named a neighbor is removed.

### E2 — §1 Identity (intrinsic; names no neighbor)
- **Verb-meaning:** *To elaborate an inquiry is to take a raw query together with the project goal and produce a multilayered, aligned re-statement of the inquiry — why it matters, at what scope, in alternative framings, and split into its distinct parts if it holds several.*
- **Intrinsic NOT-list:** IE produces **re-statements and framings of the inquiry**; it does **not** produce the inquiry's **answer**, a **model of the problem**, a **partition into work-pieces**, an **evaluation of candidate solutions**, or an **audit of external artifacts the query cites**. *(Each grounded in IE's own character — it re-states and frames; it does not produce work-products or touch the ecosystem. No discipline is named.)*
- **In/out test (intrinsic):** *Does it re-state or frame the inquiry?* → in. *Does it produce the inquiry's work-product, or reach outside the query into the project's artifacts?* → out.
- **Self-containment:** the spec references only its own inputs (goal, query), its unit (the inquiry), and its output (the elaborated inquiry).

### E3 — §2 Components (output-organized) + E6 — §5 Output schema
Inputs: `{ project_goal, original_query }`. Output = the **elaborated inquiry**:
```
elaborated_inquiry:
  project_goal:        (echo)
  original_query:      (echo)
  why_makes_sense:     why this inquiry makes sense given the project goal (the query↔goal alignment)
  scope_small:         the tight, minimal-scope version of the inquiry
  scope_big:           the ambitious, wide-scope version of the inquiry
  rephrase_simple:     the inquiry restated plainly
  rephrase_scope_highlighted:      restated with its scope made explicit
  rephrase_importance_highlighted: restated with its importance/why made explicit
  requests:            # present only when ≥2 distinct asks are detected
    - request:                       one distinct ask
      how_connected_with_other_part: how it relates to the others (depends-on / shares-context / sequential-after / parallel-with)
      seq_or_parallel:               optional attribute (sequential | parallel)
```
Always produced: `why_makes_sense`, `scope_small`, `scope_big`, the three rephrasings. Conditional: `requests[]` (only when multiple distinct asks).

### E4 — §3 Process Model (internal, neighbor-free verbs)
read the project goal + the original query → grasp the intent at multiple layers → articulate *why it makes sense* (query↔goal) → draw the *small-scope* and *big-scope* versions → write the three *rephrasings* → check whether the query holds several distinct asks; if so, *list* them and note *how each connects* to the others.

### E5 — §4 Quality (intrinsic failure modes; names no neighbor)
- **Drift** — a rephrasing changes the inquiry's meaning. *Corrective:* re-anchor each rephrasing to the original query + goal.
- **Flattening** — only one framing produced; the multilayer is lost. *Corrective:* ensure simple/scope/importance + small/big are genuinely distinct.
- **Goal-detachment** — `why_makes_sense` not actually grounded in the project goal. *Corrective:* state the query↔goal link explicitly.
- **Missed-split** — distinct asks bundled as one. *Corrective:* re-scan for separable deliverables; list + connect.
- **Over-reach** — IE begins *answering or solving* the inquiry instead of *framing* it (the upper bound, intrinsic). *Corrective:* stop at the framing; the answer is not IE's output.
- Headline quality: **no-drift faithfulness** (every framing stays true to the original + goal). Self-assessment: PROCEED / FLAG / RE-RUN.

### E7 — reference-authority disposition (settles H2)
**DROP from IE.** Checking whether a cited reference is current / on-subject requires knowing the project's **artifact ecosystem** (which references exist, their status) — that is *reaching outside the query into the project's artifacts*, which fails IE's intrinsic in/out test, and the editor/brief-writer never fact-checks sources. It is a real concern (it motivated an earlier finding) but it is **not IE's**; its home is whatever layer has ecosystem awareness (runner-side or a separate check), to be placed in the process layer or a separate inquiry. IE keeps only **faithfulness-to-the-original+goal** (no-drift).

## Dispositions
- **ACTIONABLE:** E1 comparison; E2 intrinsic Identity; E3/E6 Components+schema; E4 Process; E5 Quality; E7 drop-reference-authority. (The writable reconciled spec.)
- **DEFERRED → process layer:** where the project-goal input comes from; the home of reference-authority.
- **RE-TEST TRIGGER (for Critique):** scan EVERY produced sentence for a neighbor-name (the self-containment gate must pass with zero hits); confirm the comparison is decided, not mush; confirm E7's drop doesn't silently lose a needed check.

## Frontier
- H7 resolved (optionality: 4 always-on fields + conditional multi-request).
- Open for process layer: project-goal source; reference-authority's new home.
