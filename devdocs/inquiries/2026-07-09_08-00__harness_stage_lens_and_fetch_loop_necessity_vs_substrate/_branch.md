# Branch: harness stage-lens + fetch_loop necessity vs. the substrate

## Source Input

```text
i feel like 

 Form — "a fetch_loop skill like traverse" is a category mismatch. traverse runs each discipline once in a line (and can re-run the whole line). A fetch loop re-runs one pair until a signal converges — a different scale of composition. The natural form is a small runner-owned capability (a "re-run U until the need settles" routine), not a skill, not a discipline.

part is a preprocessing stage in geenral, and it can be still a skill since our whole system is built upon skills thats the only way preprocessing stage can be integrated to the rest afterall 

sensemaking decompose and innovation are processing stage

critique and routelister are postprocessing stage

i think this kind of rephrasing really makes things clear, it doesnt mean we have to apply this naming to already existing and assembled under traverse skill  skills,  but it is a better look at our desgin


lets dive deep into this and also lets talk partially if other than preprocessing , do we need fetch loop? for example with sensemaking , while sensemaking is it highly possible that anohter surfacing would help ? or with critique? 

but since we are not developing a harness but cognitive harness which is attached on top of claude code etc, they already handle fetch loop internally so we dont need it maybe?
```

## Articulation Reference

- **File:** `devdocs/inquiries/2026-07-09_08-00__harness_stage_lens_and_fetch_loop_necessity_vs_substrate/articulate_simple.md`
- **Itemize count:** 3
- **Per-item identifiers:** Item A (the pre/processing/post stage lens + the skill-packaging correction) · Item B (do we need fetch_loop beyond preprocessing — sensemaking? critique?) · Item C (is an explicit fetch loop redundant with the Claude Code substrate?)
- **Verdict:** HIGH-PROCEED
- **Flagged conditions:** none

## Question

**Item A — the stage lens + the skill-packaging correction.**
Literal: *"The fetch_loop / articulate+surfacing part is a **preprocessing** stage; sensemaking+decompose+innovation are **processing**; critique+routelister are **postprocessing**. This is a clarifying view of our design (not a mandate to rename the existing traverse-assembled skills). And fetch_loop can **still be a skill**, because skills are the only way anything integrates in this system — so the prior finding's 'capability, not skill' may be too strong."*
- Kinds of ask (MQ1): `evaluate-the-lens` · `re-test-the-form-verdict` (does the skill-packaging point correct 23-46's "capability not skill"?) · `reconcile` (lens + skill-point vs the prior verdict).
- Action-endpoints (MQ3): `affirm-or-qualify-the-lens` vs `revise-the-prior-verdict` vs `both`.

**Item B — do we need fetch_loop beyond preprocessing?**
Literal: *"Other than preprocessing, do we need the fetch loop? With sensemaking — while sensemaking runs, is it highly possible that another surfacing would help? Or with critique?"*
- Kinds of ask (MQ1): `assess-sensemaking-site` · `assess-critique-site` · `differentiate` (do they differ, and why?).
- Action-endpoints (MQ3): `map-the-genuine-sites` vs `explain-the-difference` vs `both`.

**Item C — is an explicit fetch loop redundant with the substrate?**
Literal: *"Since we're not building a bare harness but a **cognitive** harness attached on top of Claude Code etc., and they already handle a fetch loop internally — maybe we don't need it?"*
- Kinds of ask (MQ1): `assess-redundancy` · `find-the-boundary` (where does explicit fetch add value over the substrate's implicit one?) · `check-proves-too-much` (does "the substrate already does it" dissolve more than fetch_loop?).
- Action-endpoints (MQ3): `necessity-verdict` vs `draw-the-line` vs `both`.

## Goal

**Item A.** Deliverable: a lens-verdict + a revised form-statement (evaluation + verdict-revision). Bounds: the harness design + the 23-46 finding; NOT a rename of existing skills; NOT an implementation.
- WHY (MultiDepth, held open): `architectural-legibility` vs `correcting-my-verdict` vs `integration-realism` (in a skills system the reuse unit IS a skill/protocol — the deepest WHY).
- Context needed (MQ2): the 23-46 finding; how skills/protocols actually integrate here (conclude.md / branch_inquiry.md / seed_harvester.md are loaded-and-run protocols — the real reuse unit); the traverse composition model.
- Would fail (MQ4): a rename mandate; caving (dropping the prior verdict's real content — not a linear-pipeline runner; the timing gate); over-defending (rigidly re-asserting "capability not skill" if the integration point is right).

**Item B.** Deliverable: a differentiated reuse-map for the two named sites + the discriminating rule (analysis). Bounds: sensemaking + critique specifically, grounded in the 23-46 survey.
- WHY (held open): `capability-completeness` vs `validate-the-2nd-site` vs `find-the-rule` (what makes a site genuinely need it — couples to Item C).
- Context needed (MQ2): the 23-46 survey (sensemaking latent, critique partial); sensemaking's Accommodation trigger (wrong-model, re-extract from existing); critique's backstop + the traverse OUTER loop ("if not answered after R, loop again"); fixpt-S1.
- Would fail (MQ4): re-surveying the whole harness (already done); counting any "re-fetch happens" as automatically a fetch-loop site (the genuineness test still gates).

**Item C.** Deliverable: a conditional necessity-verdict + the disciplined-judgment-vs-data-gathering criterion (evaluation + boundary-drawing). Bounds: the harness-on-substrate relationship, grounded in the project's own value proposition.
- WHY (held open): `avoid-rebuilding-the-platform` vs `locate-the-real-value-add` (where explicit discipline beats implicit smartness — the kernel-bet's core) vs `sanity-check-the-whole-idea`.
- Context needed (MQ2): the project's raison d'être (kernel-bet + north-star — explicit discipline + recorded artifacts + reliability as the value-add); what Claude Code natively does (agentic re-read / re-grep / re-search); the fetch-loop mechanics.
- Would fail (MQ4): an absolute "never need it" (proves too much — dissolves the whole harness); an absolute "always need it" (ignores the substrate's real competence). The honest output is a CONDITIONAL with a criterion.

## Considered Articulations

**Item A — stage lens + skill correction:**
1. **Lens-plus-correction (dominant).** Affirm the stage lens as a valid feedforward view; concede the skill/protocol-packaging point while preserving the prior verdict's real content (not a linear-pipeline runner like traverse; convergence shape; N=2 timing).
2. **Lens-only.** Evaluate the taxonomy's fit + leakiness.
3. **Verdict-revision-only.** Focus on whether "capability not skill" survives the integration-realism point.
4. **Feedback-edge reading.** The stage lens is feedforward; the fetch loops (+ critique's iteration-trigger) are the FEEDBACK EDGES crossing stages — lens and fetch-loop illuminate each other.

**Item B — beyond preprocessing:**
1. **Differentiated map + rule (dominant).** Sensemaking = genuine latent site (another surfacing helps *when the model won't stabilize for lack of material*); critique = re-fetch already served at pipeline grain (the traverse outer loop) → no distinct pair-grain loop. Extract the discriminating rule.
2. **Site-by-site verdicts** without foregrounding the rule.
3. **Couple-to-C reading.** Answer B through C's criterion (a site needs explicit fetch only where the fetch-decision is a disciplined judgment the substrate shouldn't own).

**Item C — substrate redundancy:**
1. **Conditional verdict + criterion (dominant).** Not redundant in general; the substrate-point NARROWS the criterion — explicit fetch earns its place only where the fetch-DECISION is a disciplined cognitive judgment worth recording (re-anchoring), not mere data-gathering (substrate handles). Partial deflation of over-broad application.
2. **Proves-too-much rebuttal.** "The substrate already does it" applied absolutely also dissolves sensemaking/critique (the substrate "thinks" too) → it's a GRADIENT argument, not an absolute one.
3. **Record-and-reliability reading.** The substrate's fetch is implicit/unrecorded; the harness's is explicit/criterion-bound/artifact-producing — the kernel-bet's "verifiable commitment practice." Value-add = discipline + record, not raw capability.

## Scope Check

Question covers goal. The three items span the lens-evaluation (A), the reuse-placement (B), and the necessity-challenge (C); the deliverable (a coupled re-test of the 23-46 finding — lens-verdict + reuse-map + necessity-criterion) is covered.

**Specific-vs-pattern check:** Item B names two specific sites (sensemaking, critique). The dive addresses those two *plus the discriminating rule* they illustrate (what makes any site genuinely need an explicit fetch loop) — because the rule is the reusable output and it couples to Item C's criterion. The whole-harness survey is NOT re-run (23-46 did it); the two named sites are treated as the test cases for the rule.

## Layer Commitment

The question re-tests a discipline/framework verdict (fetch_loop's form + necessity), so the section is required.

- **PRIMARY — Meaning.** The core across all three items is what the fetch_loop/preprocessing part IS (skill vs capability — A), whether it is a genuine distinct necessity given the substrate (C), and where it genuinely lives (B). This adjudicates essence/necessity and gates the rest.
- **Out of scope — Structural** (the fetch_loop spec's shape) and **Process** (the loop's steps) — both inherited from the 23-46 finding; this dive does not re-derive them.

Primary layer picked cleanly (Meaning); no layer ambiguity requiring user input.

## Synthesis Trigger

**Required** — the inquiry consumes and re-tests one prior finding:

- `devdocs/inquiries/2026-07-08_23-46__fetch_loop_as_reusable_discipline_extract_and_generalize/finding.md` — commits: (i) "capability, not skill" + the category-mismatch (fetch_loop is not a traverse-like linear runner); (ii) the reuse survey (sensemaking = genuine-but-latent 2nd site; critique = partial); (iii) the N=2 timing gate (extract at the 2nd wired instance). This dive re-tests all three: Item A challenges (i), Item B tests (ii), and Item C adds a NEW necessity-criterion that neither confirms nor denies (iii) but sharpens what a "genuine site" is. CONCLUDE must carry an `## Inherited Commitments Re-test` naming each commitment with re-tested evidence.

## Layer / Grade note for downstream

An **evaluation with a Meaning-layer core**, guard-both-ways throughout: Item A is a user *correction* of my prior verdict (check for caving AND over-defending); Item C is a genuine *necessity challenge* (check for deflation AND over-defense — it may prove too much). The likely landing (held open): the 23-46 verdict is UPHELD but REFINED — skill/protocol packaging conceded (A), a disciplined-judgment-vs-data-gathering necessity-criterion added (C), and the reuse-map differentiated (B: sensemaking genuine, critique pipeline-grain). The stage lens is affirmed as a feedforward view whose feedback edges are exactly the fetch loops.
