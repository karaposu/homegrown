# Branch: why seed-generation under-performs — protocol vs skill, richness, and expansion

## Source Input

```text
okay now lets get back to our previous issue of seed protocol failing to  generating things in quantiy and quality both,
i want you to dive deep into this by inspecting

both devdocs/inquiries/2026-07-08_15-46__SEED_HARVEST__spider_web_traversal_RICH_source_canon_grounded and devdocs/inquiries/2026-07-08_13-46__SEED_HARVEST__paper_29_spider_web_thinking_space_traversal

inspect them both with their docarchive files as well and then understand why our seed protocol missed so great seeds from spider related source.

my suspicion is seeding requires an extra surfacing of core files of the project so they are in fresh context of LLM,   and current seed protocol is too limited and not rich and since it is a protocol and not standalone skill we are having this problem.

maybe generate_seeds can be a skill? multiple surfacing and decompose  and multiple innovations stacked to actaully generate idea coverage ?

and also as far as i understand seed generation needs some expanding logic which can take sth simple and expand it into it's enriched version and look for seeds there, this was also missing with spieder web source.

lets dive deep in
```

## Articulation Reference

- **File:** `devdocs/inquiries/2026-07-08_19-14__why_seed_generation_underperforms__protocol_vs_skill_richness_and_expansion/articulate_simple.md`
- **Itemize count:** 1
- **Per-item identifiers:** A1 (the coupled diagnose-and-design item)
- **Verdict:** HIGH-PROCEED
- **Flagged conditions:** none structural — one routing flag: Layer-Commitment trigger present (see the Layer Commitment section below)

## Question

**Literal (A1):** Get back to the seed protocol's failure to generate in **quantity and quality**; inspect the two spider dives — the thin `…13-46…paper_29…` dive and the rich `…15-46…RICH…` re-harvest — **with their `docarchive/` files** to understand *why the protocol missed the great seeds the rich dive later found from the same source*; and consider four fixes: (1) an extra surfacing of the project's **core files** into fresh context, (2) whether being a **protocol rather than a standalone skill** is limiting, (3) whether **`generate_seeds` should be its own skill** built from multiple stacked surfacings + decompose + multiple innovations for idea-coverage, and (4) whether a missing **expansion-logic** (take something simple → enrich it → look for seeds in the enriched version) explains the spider miss.

**What kinds of ask this carries (MQ1, preserved as open):**
- diagnose-the-mechanism — root-cause the thin dive's miss from the archived discipline outputs (a mechanical trace, not a restatement of "1 vs 7").
- evaluate-the-four-hypotheses — confirm / refute / re-size each of the user's four proposed causes-and-fixes against the diagnosed cause.
- design-the-fix — a concrete design for richer generation (new skill? enriched protocol? added step?).
- decide-the-FORM — skill vs enriched-protocol vs added-step (competing structural options, not settled).

**What action-endpoint is intended (MQ3, preserved as open):**
- fix generation-richness **generally** vs explain the **spider case** specifically.
- produce a **buildable artifact** (skill spec / protocol edit) vs a **diagnosis-with-recommendations** (build deferred).
- endpoint shape: a new `generate_seeds` skill file · an edit to `seed_harvester.md` · a single added expansion+core-surfacing step · or a design finding.

## Goal

**Deliverable shape (Deconstruct):** a DIAGNOSIS-and-DESIGN finding — a causal explanation of the under-generation + an evaluation of the four hypotheses + a (possibly deferred) design for the fix and its form. Kinds: mechanical analysis of the two dives' archived outputs · four-hypothesis adjudication · design evaluation (skill vs protocol vs step) · possibly a buildable artifact. Bounds: the seed-generation machinery (`cognitive_harness/protocols/seed_harvester.md` + its composition onto `/traverse`), grounded in the two spider dives + their docarchives + the core project files + the prior one-seed diagnosis; **not** a re-harvest; metric = **gated yield (quantity+quality)**, never a raw count quota.

**What motivations a good answer might serve (WHY-axis, preserved as open):**
- reliability — make seed-generation *reliably* rich so no future source is silently under-harvested the way the thin spider dive was.
- autonomy — a richer standalone skill for the coming autonomous / multi-dive pipeline, where no user is present to catch under-generation (the user was the error-signal this time).
- capability — the project's value is seed-yield; systematic under-generation caps the ceiling.
- correctness — get the *diagnosis* right so the fix targets the true cause, not a plausible-but-wrong surface symptom.

**Context downstream consumers need (MQ2):**
- verdict: read the two dive folders **including `docarchive/`**; `seed_harvester.md`; the prior one-seed diagnosis (`…07-20…`, a *different* symptom); `devdocs/seeds/_seed.md`; the "core files" hypothesis-1 names (which files count as "core" is open).
- kinds: the *mechanical trace* of what each dive's disciplines DID (surfacing breadth · the anchor axis each innovation used · coverage-table cell counts · kill-rates); the protocol's load-bearing sections (§2 coverage table · §6 composition rows · §9 pre-gate narrowing); a working definition of the "expansion/enrichment" hypothesis 4 means.
- stance: current human-composed harness vs future autonomous pipeline? · quantity vs quantity+quality? · spider-specific vs general fix?

**Explicit exclusions (MQ4):**
- NOT re-running the spider harvest — the 1-vs-7 datum is in hand; this is about the **machinery**.
- NOT (mostly) the one-seed-per-dive symptom of the 07-20 diagnosis — this is the **distinct** richness / quantity+quality symptom (soft boundary; flag if the two share a cause).
- NOT (likely) immediate implementation — the form is still open, so building a specific artifact now may be premature (open — the user may want a build).

## Considered Articulations

**Item A1 — diagnose-the-miss-and-shape-the-fix:**
1. **Diagnosis-first, build-deferred:** trace both dives' docarchived outputs to isolate the mechanical cause of the 1-vs-7 gap, adjudicate the four hypotheses against it, deliver a diagnosis-with-recommendations — form scoped, building deferred.
2. **Design the standalone skill:** specify `generate_seeds` as a stacked skill (multiple surfacings + decompose + multiple innovations + core-file refresh + an expansion step), justified by the diagnosis of why the composed-protocol form under-generated.
3. **Decide the form:** weigh new-standalone-skill vs enriched-`seed_harvester`-protocol vs a single added expansion+core-surfacing step against the diagnosed cause and each form's cost, and recommend one.
4. **Isolate the single lever:** find the highest-leverage cause of the gap (anchor-axis breadth vs core-file freshness vs missing expansion vs protocol-thinness — the rich dive already implicates anchor-axis breadth) and specify the minimal change that closes it.
5. **General theory of generative richness:** produce a theory of what makes seed-*generation* coverage-forcing vs thin, using the spider 1-vs-7 as the worked case, and map each of the four hypotheses onto it.

## Scope Check

**Question covers goal: YES** — the question (diagnose + evaluate + shape-the-fix) spans the goal's deliverable (a diagnosis-and-design finding). One openness to carry forward, not a gap: the DEPTH endpoint (diagnose-only → design → build) is deliberately unfixed; the pipeline should produce at least the diagnosis + hypothesis-adjudication + form-recommendation, and treat a full buildable spec as an upside the Critique/scope decides.

**Specific-vs-pattern check:** the question points at two specific dives, but the four hypotheses are all about the **general seed-generation machinery**. **Reading: the BROADER PATTERN** (what makes seed-generation rich vs thin) is the target, with the two spider dives as the *worked evidence case* (a near-controlled 1-vs-7 comparison). The specific dives are inspected as evidence, not as the scope-boundary. *(Default-to-broader applied; flagged here so the user can narrow to "spider only" if they disagree.)*

## Layer Commitment

The inquiry targets a protocol/skill artifact for restructure and possible from-scratch design → Layer Commitment required. The four hypotheses split across layers, so the layer is declared with a sequenced plan.

- **PRIMARY layer — Process.** The diagnostic heart is "*what generation STEPS ran, and why they under-covered*," and three of four hypotheses are step-changes (H1 surface core files · H4 expand-then-seed · the "stacked multiple innovations" half of H3). This dive adjudicates the **steps** seed-generation should run.
- **SECOND layer (sequenced after) — Structural.** The FORM question (H2 protocol-vs-skill · H3 as a new `generate_seeds` skill) is the container, and it partly *follows from* the Process answer (if generation needs many stacked steps + core-file refresh, that may force the skill form). Declared as the explicit next-layer decision once the steps are known — not adjudicated primarily this run, but the run must produce enough to inform it (hence "shape the form," not "leave it untouched").
- **ADJACENT, out of scope for primary adjudication — Meaning.** H4 flirts with a Meaning claim (seed-generation IS fundamentally *expand-then-harvest*, not *surface-then-gate*). The dive may touch this framing but does not primarily adjudicate "what seed-generation IS" — if the diagnosis forces a Meaning-level reframe, that is a flagged escalation, not the default.

Order rationale: diagnose the steps (Process) → then choose the container (Structural), because the container question is under-determined until the required step-set is known. A Meaning reframe is only triggered if the Process diagnosis cannot be stated without it.

## Synthesis Trigger

This inquiry inspects and may inherit/challenge commitments from prior outputs (it does not roll them into a canonical artifact, but it must not silently contradict them — CONCLUDE will require an `## Inherited Commitments Re-test`):

- `devdocs/inquiries/2026-07-08_07-20__one_seed_per_dive_diagnosis_protocol_or_execution/finding.md` — diagnosed the *one-seed-per-dive* symptom as a five-link execution chain + four protocol gaps, and its fix package was **applied** to `seed_harvester.md` (the §2 coverage table, §3 fold-reopen, §6 GENERATE/GATE rows, §7 granularity, §9 #8 pre-gate-narrowing, §10 telemetry). This inquiry must re-test whether those applied fixes address generative *richness* (quantity+quality) or only the one-seed count symptom — they may be necessary-but-insufficient.
- `cognitive_harness/protocols/seed_harvester.md` — the current protocol design (coverage table + two-door gate + anchor-grounding + traverse-composition). Its commitment that "coverage-table + anchor-grounding is enough for rich generation" is exactly what the thin-vs-rich spider gap puts in question.
- `devdocs/inquiries/2026-07-08_15-46…RICH…/finding.md` + `…13-46…paper_29…/finding.md` — the two dives whose 1-vs-7 outcome is the evidence; their finding-level claim (anchor-axis breadth caused the gap) is the leading hypothesis this inquiry tests mechanically against the docarchives, not inherits wholesale.
