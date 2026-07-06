# Articulate-Simple — Generate-Concept-View Protocol

## User Input

```text
u said

"What you gain. The missing cross-inquiry layer: ten lines that tell a returning reader where the project has been. Faster session warm-up (read the summary lines before anything else). And a counting surface: the Allocation Rule's 'consult every ~5 inquiries' trigger never fired because nothing counted inquiries — a file that gains one line per inquiry IS the count."

but i think we already have finding summary sections which can be used for exact this purpose, we just need an custom instruction so that AI will read inquiry folders with regex to read only Finding Summary section.

u said

"What F4 says. Keep one thread per THING (per route, per concept), and extend that thread every time the thing is touched. The usual way to do this is a registry: a database, a wiki, one page per entity."

but codebase is complex, recoming to a topic usually requires multiple updates to the base of that inquiry, which is not feasible at all bc many many things can be changed, history should stay as history. keeping track of each thing individually is hugee burden, since our atomic operation is traverse loop this can be done by reading relevant inquiry folders and generating a view yes but this view would also be a traverse loop output, maybe we should create this. a generate concept view protocol that can be used for this purpose. I think this is really good idea.
```

*(Substrate: warm — the four-assessments finding is hours old; the user is reacting to its F6 and F4 sections. Both reactions share one design move — replace WRITES with DERIVED READS — and each amends one assessment.)*

---

## Itemize

- **count:** 2
- **items:**
  - `I1` — the **Finding-Summary digest instruction**: the cross-inquiry read-surface needs NO new writes — every finding already carries a `## Finding Summary` section; what's missing is only a custom instruction telling the AI to read inquiry folders and regex-extract ONLY those sections. (Amends the F6 assessment.)
  - `I2` — the **Generate-Concept-View protocol**: per-thing threads must not be maintained stores (history stays history; per-thing bookkeeping is a huge burden) — instead, when a concept's view is needed, READ the relevant inquiry folders and GENERATE the view; and since the traverse loop is the atomic operation, the view is itself a traverse-loop-output-shaped artifact. Create this as a reusable protocol. (Amends the F4 assessment; the user's endorsement: "I think this is really good idea.")

*(Coupling: both items use one shared mechanism — targeted section-extraction across inquiry folders — with two different products: I1 = the project-trajectory digest; I2 = the per-concept view.)*

---

## Item I1 — the Finding-Summary digest instruction

### MQ1 (verdict-axis)

**A — identified-ambiguities-list:**
- **amend-F6** — the epoch-line WRITE is unnecessary: the per-inquiry distilled layer already exists as `## Finding Summary` sections; the missing piece is a READ instruction, not a write habit
- **specify-the-instruction** — the custom instruction's text: read inquiry folders, extract only the Finding Summary section (regex/sed-grade)
- **home-the-instruction** — where it lives: the warming doctrine? a protocols/ recipe? the project's standing instructions (CLAUDE.md-grade)?

### MQ2 (context-need axis)

**A — identified-ambiguities-list:**
- **verdict sub-axis:** the finding template's uniformity (every finding carries `## Finding Summary` — the CONCLUDE protocol mandates it; extraction is mechanical: section-start to next `## `); the F6 assessment's three claimed gains re-checked against a read-derived digest (read-surface: REPLACED by the read; warm-up: served; **the counting surface: a folder count serves it even more simply** — counting inquiry folders needs no file at all); the corpus scale (~350+ findings — the instruction needs a bound: last-N by date, or topic-filtered).
- **kinds sub-axis:** this is an INSTRUCTION (a read-recipe), not an artifact; its parameters (how many, which order, full-summary vs first-bullet).
- **stance sub-axis:** simplification-driven — don't write what you can derive; zero new maintenance.

### MQ3 (intent-axis, WHAT)

**A — identified-ambiguities-list:** the instruction text drafted; its home decided; the F6 assessment amended (read-derived surface; no epoch-line writes); the count question re-answered (folder-count).

### MQ4 (boundary-axis)

**A — identified-ambiguities-list:** NO new write-artifact for the digest (the whole point); history untouched; the instruction must stay cheap (a regex read, not a synthesis pass).

### MQA
**reconcile** — MQ1's amend-F6 and specify-the-instruction: one act (the instruction IS the amendment realized). **surface** — the home question spans I1 and I2 (the shared mechanism may live once, in I2's protocol, with I1 as its project-wide mode) — irreducible here.

### Deconstruct
- **deliverable:** the digest instruction (text + parameters + home) + the F6 amendment stated.
- **kinds:** read-recipe design.
- **bounds:** no writes; cheap; bounded reads.

### MultiDepth
**literal-statement:** "We already have Finding Summary sections which can serve exactly the cross-inquiry read-surface purpose; we just need a custom instruction so the AI reads inquiry folders with a regex extracting only the Finding Summary sections."
**WHY-axis:** simplification (writes→reads); zero-maintenance memory; warm-up speed.

### Considered Articulations (I1)
1. **Warming-clause reading:** the instruction is one clause in the warming doctrine (read the last N Finding Summaries first).
2. **Standalone-recipe reading:** a small protocols/ recipe callable any time (catch-up on demand).
3. **Standing-instruction reading:** a project-level custom instruction (always-on behavior for any session).

---

## Item I2 — the Generate-Concept-View protocol

### MQ1 (verdict-axis)

**A — identified-ambiguities-list:**
- **design-the-protocol** — given a concept/topic, read the RELEVANT inquiry folders and generate a VIEW of that concept (its history, decisions, current state)
- **settle-its-class** — a protocol (like CONCLUDE/BRANCH_INQUIRY), a skill, or a traverse-recipe? The user's own words: "this view would also be a traverse loop output" — full-loop generation vs light read-assemble vs dialed-both (preserved open)
- **amend-F4** — the store is rejected definitively (per-thing bookkeeping infeasible; "history should stay as history"); views-generated-on-demand confirmed as the direction; the protocol makes the view-generation REPEATABLE
- **relate-to-existing** — the four-assessments' F4-views verdict (this extends it: the view becomes a generated ARTIFACT, not just an ephemeral read); the audit's registry deferral; the sweep-map precedent (a generated, dated, static analysis-artifact)

### MQ2 (context-need axis)

**A — identified-ambiguities-list:**
- **verdict sub-axis:** the four-assessments finding's F4 section (the baseline being amended); the **relevant-folder discovery question** (how the protocol finds the concept's inquiries: name-grep across findings? `_route.md` identity-sets? the I1 digest as the index?); the **view's lifecycle** (generated when needed; DATED and STATIC once generated — "history should stay as history" applies to views too: regenerate, never update — the F8 constitution extending naturally); the house protocol form (protocols/*.md are runner-loaded procedures; a user-invocable generator may fit the skill form better — the sweeper precedent); **warming's relation** (a concept-view is warming-material for concept-targeted sessions).
- **kinds sub-axis:** what a concept-view CONTAINS (candidate: the concept's Finding-Summary excerpts + route-map rows + ✓ states + choice-lines-if-any, ordered as first-seen → decisions → outcomes → open ends); the generation DEPTH (light assemble in minutes vs a full traverse producing a finding-grade view); where views live (devdocs/views/<concept>/<dated>.md?).
- **stance sub-axis:** burden-elimination (no per-thing maintenance ever); history-sacred; the traverse loop as the atomic operation (heavyweight views deserve loop treatment); build-encouraged ("I think this is really good idea").

### MQ3 (intent-axis, WHAT)

**A — identified-ambiguities-list:** the protocol designed (meaning + mechanism + lifecycle + home); possibly authored this inquiry vs on-go; the F4 assessment amended; **possibly the memory-design selection FORMING** — the user is converging on views-over-writes across both reactions; whether this pair constitutes (part of) the R1 selection from the four-assessments map is preserved as open.

### MQ4 (boundary-axis)

**A — identified-ambiguities-list:** NOT a registry/store; NOT updates to old inquiries (history stays history); NOT per-thing bookkeeping; views are regenerable outputs, never maintained; *(standing)* no first memory-traces (the pre-registration window — a concept-view derived from findings is NOT a traversal-memory trace, but the design must not smuggle one); artifact-creation on go by convention (the endorsement noted).

### MQA
**reconcile** — MQ1's design + amend-F4: the protocol is the amendment made runnable (F4's views-not-stores, upgraded from a reading pattern to a generated artifact with a repeatable generator). **surface** — the DEPTH ambiguity (light-assemble vs traverse-output vs dialed) and the SELECTION question (is views-over-writes the user's memory-design direction forming?) — both irreducible at articulation; sensemaking adjudicates.

### Deconstruct
- **deliverable:** the Generate-Concept-View protocol's design — what a view is (contents, lifecycle: dated/static/regenerable), inputs (concept + optional goal), relevant-folder discovery, generation depth (the light/loop question settled or dialed), the artifact's home, the protocol's own home (protocols/ vs skill) — plus the I1-mechanism relation and build staging.
- **kinds:** protocol design (meaning-first, structural sketched).
- **bounds:** no stores; no history edits; views regenerable; the four-assessments finding as the amended baseline.

### MultiDepth
**literal-statement:** "Per-thing registries aren't feasible — the codebase is complex, returning to a topic would require many updates, history should stay as history, and tracking each thing individually is a huge burden. Since our atomic operation is the traverse loop, the per-concept view can be produced by reading the relevant inquiry folders and generating a view — and that view would itself be a traverse-loop output. We should create this: a generate-concept-view protocol. I think this is a really good idea."
**WHY-axis:** burden-elimination; history-preservation; leveraging the atomic operation; reusable capability (the protocol usable for any concept, any time).

### Considered Articulations (I2)
1. **Light-protocol reading:** a read-assemble recipe (minutes): discover folders → extract targeted sections → order → emit the view.
2. **Traverse-output reading:** the view IS a full traverse run's finding on the concept's territory (loop-grade synthesis, critique included).
3. **Dialed reading:** one protocol, two depths — light assemble for quick views; full traverse when the view matters (mirrors the sweeper's dial).
4. **Skill reading:** a ninth skill (`concept-view`) rather than a protocols/ file — user-invocable with its own artifact contract.
5. **Selection-forming reading:** together with I1, this IS the user's memory-design direction emerging — views-over-writes everywhere; the inquiry should name that honestly.

---

## Self-assessment

**LAYER 1 self-check (single LIGHT pass):** Mode 1 — no (the split is real: two products, two amended assessments; coupling carried in MQA). Mode 2 — no. Mode 3 — no. Mode 4 — all fields present both items. Mode 5/6 — MQ2 carries verdict/kinds/stance both. Mode 7 — 2-shape held. Mode 8 — WHAT/WHY separated. Mode 9 — 3+5 variants in bounds. Zero fires.

**Verdict: HIGH-PROCEED**
