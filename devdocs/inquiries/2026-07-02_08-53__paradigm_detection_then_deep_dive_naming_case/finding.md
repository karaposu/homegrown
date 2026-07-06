---
status: active
model: claude-fable-5
effort: max
---
# Finding: Paradigm Detection Then Deep-Dive — the Missing Enumerate-Before-Generate Operation (naming as the worked case)

## Question

From `_branch.md`: the user observed that AI is bad at coming up with good names even with the innovation skill in play, and hypothesized why — the AI doesn't recognize that *different paradigms of naming exist* (relevant keywords; the same words in another language; two-word compounds explaining what the app does, or its outcome instead; phonetic alterations of real words). In their own naming sessions for a voice-chat QR-menu app, the AI's suggestions stayed same-y for hours; the winning candidate — **Masajan** (Turkish *masa* = table + *can* = life/soul, "the table's life") — was found by the human, not the AI. Their thesis: *it is extremely important to detect the paradigms FIRST, then dive deep into each* — and this detect-then-dive move is a missing piece of the framework, applicable to the innovation discipline, resembling the MTTP pattern, and related to the traverse loop (maybe: one loop detects the paradigms, then per-paradigm loops generate coverage — though that's expensive). "One important thing that can be added; not sure exactly where."

**Goal:** an adjudicated design finding — (a) a diagnosis of the AI-naming difficulty, (b) a verdict on whether detect-paradigms-then-dive-deep is genuinely missing vs already present in another form, (c) the designed shape and location of the addition — grounded in the actually-read innovate spec and the MTTP findings, with naming as the worked example and cost-consciousness as a hard criterion.

## Finding Summary

- **The user's thesis is upheld.** "Detect the paradigms first, then dive deep into each" is a genuinely missing *named operation* in the framework — while, satisfyingly, most of the *machinery* to run it already exists. The word "paradigm" appears in zero active discipline specs (grep-verified).

- **The diagnosis (hypothesis-grade, honestly bounded):** the innovation discipline's coverage machinery counts *mechanisms* — the seven ways of transforming a seed (Combination, Inversion, etc.). Nothing anywhere carries a parameter for *where in the candidate-space* generation lands. A generator without an explicit map samples its most-probable region (for names: the default "startuppy English compound" style) and iterates *within* it — the spec's own "Early Frame Lock" failure mode, operating at the paradigm level. The naming sessions instantiate this: the AI circled the default region; the human crossed regions and found Masajan. Because the original chat transcript doesn't exist as an artifact, this ships as a *hypothesis with a spec-visible mechanism*, not a measured result — and the fix targets the coverage component only (taste and final selection remain human).

- **The structural license:** every generation act has TWO independent coordinates — the *mechanism* applied (HOW the seed is transformed) and the *paradigm* it lands in (WHERE in the candidate-space). Applying all seven mechanisms does not guarantee visiting more than one paradigm; the innovate spec's own worked example (seven mechanisms on one seed) produces seven outputs in one frame-region, and its own Axis Coverage Check exists because "single-axis candidate sets often arise from a frame inherited from upstream." The spec *promises* "the innovation space is explored rather than sampled by accident" — but its machinery only counts mechanism-coverage. The addition completes the spec's own promise.

- **What a paradigm IS (the settled meaning):** an inhabitable **generative approach-family** — a coherent region of the candidate-space fixed by a combination of generative choices. Axes (identity-semantics, source-language, morphology, transparency) are the map's *coordinates*; families are its *places*. You can generate within a family; you cannot generate "within an axis." A paradigm is where you generate FROM; a lens (the evaluation frame, from the innovate spec's Lens Shifting) is how you *evaluate* — different things.

- **The operation, named:** **paradigm-detection → per-paradigm dive → cross-paradigm selection.** It works *like stratified sampling — a coverage discipline, not a coverage proof.* It is the harness's own enumerate-before-engage principle (the routelister enumerates / the runner chooses; surfacing draws before sensemaking stabilizes) pointed at generative candidate-spaces for the first time.

- **ONE operation at consumer-dialed scales — not two features:** **S1** in-run (the map is one section at seed-time; dives are per-family passes — minutes), **S2** one enumeration run (the map becomes a persistent artifact — a possibility-case surfacing run or a routelister run on a passage describing the space, both already legal), **S3** the full **Paradigm-Sweep** (detection run + N per-paradigm loops + selection — stakes-gated). The user's cost worry is honored as the dial's design principle, not treated as an objection.

- **Two small named additions carry it:** (1) a **conditional hook in the innovate spec** — gated by three conjuncts (divergent generative seed + real family structure + no existing partition vocabulary already covering the space), adding a seed-time map, region-targeted mechanism application, and a pre-emptive *flag-and-decide* mode for the existing Axis Coverage Check, with an ADD-TEST-only fallback floor; (2) a **minimal Paradigm-Sweep entry in the MTTP catalog** at *research-frontier-with-sketch* tier — registration alone is known-inert (the meta-loop is the wire), which is exactly why the artifact-level surface is the hook.

- **The worked naming map is delivered** (Finding §6): four axes, six families, the user's five paradigms typed, Masajan located at the *translingual-metaphor* family — a **composed** region (non-default language × non-default semantics), which is precisely the kind of place a families-only list misses and the axes catch. Plus five domain-agnostic probes for building such a map for ANY divergent generative task.

- **The designated next move (cheap, triple-duty):** re-run the user's own naming task WITH the map. It serves the user's live want (names), produces the pattern's first deliberate instance (its promotion evidence), and tests the one downgraded claim (whether an enumeration discipline really runs well on a pure generative-space territory). Every outcome is informative — including a loss, which would strengthen the standing null hypothesis ("better prompting alone might suffice") that this finding keeps honestly alive.

## Finding

### 1. Why this inquiry exists

The user spent hours in AI naming sessions and came away with a precise observation: the AI's candidates clustered stylistically, and the eventual winner came from a region the AI never visited. Their proposed cure — detect the paradigms of the space first, then dive into each — felt to them like a missing framework piece but with an unclear home ("not sure exactly where"). This inquiry adjudicates that thesis against the real specs: the innovation discipline's reference (`cognitive_harness/innovate/references/innovate.md`, read in full at the user's instruction), the two prior MTTP findings (MTTP = "Major Thinking-space Traversal Patterns," the open catalog of multi-loop composition shapes a future meta-loop draws from, defined at `devdocs/inquiries/2026-06-08_13-14__major_thinking_space_traversal_patterns_class/finding.md`), the routelister and surfacing discipline contracts, and the narrated naming case itself.

### 2. The diagnosis — paradigm-blindness as a coverage failure

The innovate spec organizes generation around seven *mechanisms* — four Generators (Combination, Absence Recognition, Domain Transfer, Extrapolation) and three Framers (Lens Shifting, Constraint Manipulation, Inversion). Its coverage strategy counts mechanisms: minimum one Generator + one Framer; full coverage is all seven. Each mechanism is a *kind of transformation applied to the seed*.

Here is the gap: **no mechanism, and no coverage rule, carries any parameter for the region of the candidate-space where outputs land.** For a naming task, the candidate-space has visible region structure — English-keyword names, translingual names, outcome-compounds, phonetic mutations — and a generation pass can apply all seven mechanisms while every single output stays in one region. The spec's own Phase-2 worked example shows exactly this shape: seven mechanisms applied to one seed produce seven outputs that all inhabit the seed's inherited frame.

An LLM generator without an explicit map does what any high-probability sampler does: it draws from the modal region of its distribution — for app names, the familiar "startuppy compound" style — and iterating on feedback refines *within* that region. The innovate spec names this failure at the mechanism level as **Early Frame Lock** ("a better version exists in an unexplored region"); the naming experience is the same failure one level down, at the *domain* level. The human escaped it by manually jumping regions (Turkish, table-culture, metaphor); the AI never did.

**Honest bounds on this diagnosis.** The original naming transcript does not exist as an artifact, so the clustering claim is narration-grade — a hypothesis whose *mechanism* is spec-visible, not a measured result. Two alternatives were kept alive rather than buried: (a) the **null hypothesis** — a sufficiently well-prompted LLM might span regions without any framework change (this cannot be excluded on narration evidence; the economical answer is that the light hook costs roughly one section even if the null is true, and still yields a useful map); (b) the **selection-component** — part of the difficulty is taste and cultural recognition (only the user's Turkish context could *recognize* Masajan's quality), which this design deliberately does not target. The fix addresses generation-coverage; the final call stays with the human chooser.

### 3. The structural license — mechanism × paradigm are two axes

The claim that paradigm coverage needs its own step (rather than "just apply more mechanisms") rests on an orthogonality argument, and it held under adversarial testing:

- The same mechanism lands in different regions when pointed differently ("Combination, within Turkish table-culture" vs "Combination, within English keywords") — so region is not a function of mechanism.
- Different mechanisms land in the same region by default — because each transforms the *seed*, and the seed carries an inherited frame-region. Domain Transfer's "deliberately different fields" are SOURCE domains for imported *patterns*; importing "manufacturing maturity" into a strategy seed moves the argument, not the language-region a *name* lands in.
- The spec corroborates in its own words: the Combination mechanism's *scope-fidelity caveat* warns against letting the nearby context "become the scope-defining source"; the Axis Coverage Check's rationale states that "single-axis candidate sets often arise from a frame inherited from upstream stages."

The Axis Coverage Check deserves special mention: it is the closest existing kin to the user's idea — a check that the candidate set varies along the problem's orthogonal axes — but it runs **post-hoc**, at test time, reconstructing the axes after generation. When it fires, the remedy is regeneration: you pay for the map anyway, after paying for a wasted pass, while anchored on the candidates you already saw. The user's proposal is that check's **pre-emptive inverse**: make the map first, generate deliberately. And the spec's opening line — innovation has "a coverage strategy that ensures the innovation space is explored rather than sampled by accident" — promises space-coverage that mechanism-counting alone cannot deliver for divergent tasks. The addition completes an existing promise rather than importing a foreign idea.

### 4. What a paradigm is — and what it is not

The user's own examples mix two grains: "what-it-does vs the-outcome" is an *axis* (a dimension of variation); "use another language" names an axis too; but "Masajan-style naming" is a *family* — a place you can actually generate from. The settled meaning:

> **A paradigm is an inhabitable generative approach-family: a coherent region of the candidate-space fixed by a committed combination of generative choices. Axes are the map's coordinates; families are its places.**

The "inhabitable" test is what forces this meaning: the user's operation is "dive deep INTO each paradigm," and you can generate ten candidates *within a family*, but not "within an axis" (a dimension isn't a region until values are committed). Detection can therefore run **axis-first** (find the dimensions, compose candidate regions) or **family-first** (directly name recognizable schools/styles) — two routes to one kind of map. The map should carry BOTH the axes and the named families when practical: axes multiply into *composed* families (non-default language × non-default semantics), and those composed regions are exactly what flat family-lists miss — Masajan lives in one.

Two boundary stakes: a paradigm is **not a lens** (Lens Shifting re-evaluates an existing idea under different conditions; a paradigm locates where generation happens — conflating them would mislocate the fix), and paradigm-detection is **not category-detection of an existing collection** (the user's second variant) — though the two are plausibly one unit-parameterized enumeration move; that sibling was deliberately left open rather than designed here.

The operation inherits the harness's identity discipline wholesale: the map **enumerates and never decides** — an empty region is a flag prompting a deliberate fill-or-skip-with-reason, never a must-fill quota; the map is challengeable and extendable; one partition level per run (deeper structure = re-run within a region, the staging move the harness already has).

### 5. The design — one operation, two named realizations, a scale dial

**The operation:** *paradigm-detection → per-paradigm dive → cross-paradigm selection.* Enumerate-before-generate. Its mechanism gloss: it works **like stratified sampling — a coverage discipline, not a coverage proof** (the analogy is explanatory; no statistical guarantee is claimed, since the map may be imperfect and within-family generation isn't random sampling).

**The scale dial (the user's cost worry, turned into architecture):**

| Scale | What runs | Cost | When |
|---|---|---|---|
| **S1 — in-run** | the map is one seed-time section; dives are per-family passes in the same session | minutes | the default whenever the gate fires (naming included) |
| **S2 — one enumeration run** | a possibility-case surfacing run, or a routelister run on "a passage describing the space," emits the map as a persistent artifact; dives are focused follow-ups | one run | opaque or contested spaces; maps worth reusing |
| **S3 — Paradigm-Sweep** | a detection run + N per-paradigm loops (innovate or full traverse) + cross-paradigm selection | N loops | stakes-gated: deep coverage genuinely needed |

The chooser is the consumer — today the human acting as the meta-loop. S1 and S3 are the SAME operation (map → dive → select); only the executor changes. This is what makes the two realizations below one design rather than two features.

**Realization 1 — the conditional innovate hook (sketch; the spec edit is a follow-up action, not performed here).** Three moves, all behind a three-conjunct gate — *the seed is a divergent generative task* (many valid candidates) AND *real approach-family structure exists* (kind-not-degree differences) AND *no existing partition vocabulary already covers the space* (maintenance seeds are already partitioned by the spec's intervention-shape vocabulary; run-stance by its methodology modes — firing there would double-map):

1. *Seed-time:* elicit the paradigm map (axes + named families, ~5–9 entries, one line each) before mechanisms run — mirroring the spec's existing seed-time rule shape (the Methodology-Mode Consideration), so the slot-pattern is precedented and the two rules compose rather than collide.
2. *Generation:* region-targeted mechanism application — mechanisms pointed AT families, or a pass per priority-family.
3. *Test:* the existing Axis Coverage Check gains a pre-emptive mode — candidates are checked against the DECLARED map, with zero-candidate regions flagged for a deliberate fill-or-skip-with-reason decision (never must-fill).

The hook's named floor: if the full form proves noisy in practice, fall back to the ADD-TEST-only variant (just the pre-emptive check, no seed-time step) — cheaper, later, still better than nothing.

**Realization 2 — Paradigm-Sweep as an MTTP entry (minimal).** Shape: detect → N per-paradigm verticals → cross-paradigm selection. It is a **sibling** of the admitted Horizontal Dive + Vertical Refinement + Synthesis pattern, not an instance of it — that pattern detects the AXES of one composite artifact and *composes* a configuration; Paradigm-Sweep detects the FAMILIES of a candidate-space and *selects* among generated candidates. Both specialize the candidate-tier "Branch-and-Synthesize (generic)" superclass. Tier: **research-frontier-with-sketch** — by the MTTP class's own admission criteria a meaning-layer sketch is thinner than an operational spec, and its class-bloat resistance says "speculation stays at the research-frontier tier"; the promotion path is: catalog entry with mechanism detail → candidate; first deliberate instance → admitted-bootstrap. The entry carries the wire-lesson from the prior MTTP-connection finding (`devdocs/inquiries/2026-06-16_14-57__mttp_to_routelister_staged_route_connection/finding.md`): registration alone changes no artifact — the meta-loop is the wire — which is exactly why the artifact-level surface of this design is the innovate hook, not the catalog line. The staging substrate at S2/S3 is the existing re-run loop (each dive enriches the territory; re-detection is an index-extending re-run); no new staging machinery.

One honest downgrade from adversarial testing: the claim that routelister can serve as the S2 detector is **contract-true but practice-untested** — its territory contract literally admits "a passage describing a space" (spec lines verified), but every real route-map to date ran on project/inquiry territories. The claim ships at MED confidence with a named test: the first S2 run.

### 6. The worked naming map (the user's concrete deliverable)

**The axes (coordinates of naming-space):**
- **A1 identity-semantics** — what the name speaks about: what-it-does / the-outcome / a-metaphor / the-origin-story
- **A2 source-language** — market-native (here: Turkish) / English-default / borrowed-third / constructed
- **A3 morphology** — single keyword / two-word compound / portmanteau blend / phonetic mutation of a real word / coined-from-scratch
- **A4 semantic transparency** — descriptive ↔ suggestive ↔ arbitrary (the classic trademark-strength spectrum)

**The families (inhabitable regions), with the user's five paradigms typed and one composed family added:**

| Family | Axis-signature | Example for the QR-menu voice app |
|---|---|---|
| F1 keyword-direct | what-it-does · English · keyword · descriptive | "MenuVoice" |
| F2 translingual-keyword | F1 with another language | "Carte" |
| F3 compound-functional | what-it-does · compound · descriptive | "TalkMenu" |
| F4 compound-outcome | outcome · compound · suggestive | "TableTalk" |
| F5 phonetic-mutation | mutation · suggestive | "Menyu" (the user's "Aprill" move) |
| **F6 translingual-metaphor** | **metaphor/outcome · market-native · compound/blend · suggestive** | **Masajan — "the table's life"** |

The map makes the diagnosis visible: F1/F3 is the modal region where unscaffolded generation clusters; F6 — where the human's winner lives — is a *composed* family (non-default language × non-default semantics) that a flat family-list misses and the axes generate. Honesty note: this specific map was drawn with the Masajan case known; what the probes below can claim is that composed families are *reachable without hindsight* (independent exemplars exist in the wild — market-native names like Getir, constructed-foreign names like Häagen-Dazs, blends like Duolingo), not that this exact map would certainly have been produced blind.

**The five domain-agnostic detection probes (for ANY divergent generative task):**
1. *Family-first:* "What are the fundamentally different WAYS one could approach making this — different enough that a practitioner would call them different schools?"
2. *Axis-first:* "Along which dimensions do candidates differ in KIND, not degree?"
3. *Modal-exposure:* "For each axis — what default does everyone assume, and what are the non-default values?"
4. *Composition:* "Which combinations of non-default values form a coherent approach with recognizable real-world exemplars?" (the F6-catcher)
5. *Prior-loosening:* "Which regions are conventionally strong for this KIND of task — and which unfashionable regions might fit THIS case?"

Bounds: 5–9 map entries, one line each; stop when fresh candidates keep re-landing in existing families. The map is a steering wheel, not a cage: the human points ("dive F6"), the machine covers — which realizes, at the domain level, the intuition-vs-mechanism complementarity the innovate spec already commits to ("the human provides direction; the AI provides coverage").

### 7. What was deliberately NOT built

- **A new standalone paradigm-detection discipline** — the enumeration machinery exists (surfacing's possibility case; routelister's passage-territory; innovate's own seed-time rule slot); a tenth discipline would duplicate it.
- **A mandatory innovate phase** — the gate keeps the hook conditional; convergent/repair seeds never pay it.
- **Paradigm-as-axis as the meaning** — rejected on the inhabitability test, but its kernel survives (axes ride the map as coordinates).
- **Registration-only** — adding a catalog entry without the hook repeats the exact inertness the prior MTTP-connection finding was corrected for.
- **A guarantee-grade "stratified sampling" claim** — demoted to analogy after prosecution: coverage discipline, not coverage proof.

## Next Actions

### MUST

- **What:** Run the **first deliberate paradigm-guided naming run** — the user's own naming task WITH the map of Finding §6 (S1 in-session; or S2 if the map should persist as an artifact: a routelister/possibility-surfacing pass over a passage describing the naming space). Generate a fixed small batch per family before judging any (anchoring guard), then select across families.
  **Who:** the user + AI session (human-as-meta-loop chooses the dial).
  **Gate:** observable — the next naming session for the QR-menu app (or any live naming need).
  **Why:** triple-duty — serves the user's original want (names), produces Paradigm-Sweep's first instance (its promotion evidence per the MTTP tier ladder), and tests the MED-confidence detector-reuse claim. Every outcome is informative; a loss strengthens the null hypothesis honestly.

- **What:** Write the **conditional paradigm hook into the innovate spec** (`cognitive_harness/innovate/references/innovate.md` + the `~/.claude/skills` sync copy): the 3-conjunct gate, the seed-time axes+families map (ceiling-not-floor), region-targeted application, the Axis Coverage Check's pre-emptive flag-and-decide mode, the ADD-TEST floor — hygiene-clean (self-contained; no inquiry provenance), mirroring the Methodology-Mode Consideration's slot shape.
  **Who:** a routelister-style spec edit (AI, on user go-ahead — consistent with this project's spec-edit pattern).
  **Gate:** condition-bound — the user's explicit go (spec edits in this project execute on request).
  **Why:** the design's principal artifact — without it the operation exists only in this finding, invisible at the artifact level (the wire-lesson).

### COULD

- **What:** Register the **minimal Paradigm-Sweep entry** in the MTTP catalog (the class findings' member list): name · shape · gate · tier (research-frontier-with-sketch) · promotion trigger (the first instance) · the wire-note.
  **Who:** one additive edit, following the prior MTTP-connection finding's one-edit registration precedent.
  **Gate:** observable — next MTTP-touching edit session.
  **Why:** recognition without re-derivation — what the open catalog exists for; deliberately minimal per the class's own per-member-findings-wait-for-instances pattern.

- **What:** Extract the naming map + probes into a **standalone reusable reference** once used beyond this inquiry.
  **Who:** small copy-and-shape edit.
  **Gate:** condition-bound — the map is reused a second time (innovation's revival trigger).
  **Why:** reuse economy for a recurring task; premature at first use.

### DEFERRED

- **What:** The **category-detection sibling** (the same detect-then-drill move with item-categories over an existing collection as the unit).
  **Gate:** condition-bound — when a real categorization task next needs it.
  **Why (if revived):** either one general operation with two units (one spec voice) or a documented divergence; sensemaking left the unity at MED deliberately.

- **What:** The **innovate spec's accreted-weight consolidation** (the 753-line spec's many layered refinement notes read as sediment; surfaced honestly during critique, out of this inquiry's scope).
  **Gate:** condition-bound — when the next innovate-spec edit makes the weight a practical obstacle; run as its own Structural-layer inquiry.
  **Why (if revived):** the hook's home stays legible; casual consolidation would erode canon.

- **What:** **Process-layer dial-selection logic** (how a matured meta-loop picks S1/S2/S3 automatically).
  **Gate:** condition-bound — meta-loop substantiation (the MTTP class's own precondition).
  **Why (if revived):** today the human chooses fine; automation is a meta-loop capability, not a naming-era need.

## Reasoning

**Why the thesis was upheld rather than deflected.** Three independent groundings converged: the two-axis structure (mechanism vs landing-region — verified against the spec's own worked example and both of its self-observations: the Combination scope-fidelity caveat and the Axis Coverage Check rationale); the spec's promise-vs-machinery gap ("explored, not sampled by accident" vs mechanism-counting); and the harness-pattern fit (enumerate-before-engage applied to a new kind of space). The convergence was checked for shared-input spuriousness — the three groundings come from spec text, from design logic, and from statistics respectively.

**Significant kills and rejections.**
- *"More mechanisms fixes it"* — killed by the orthogonality argument: no mechanism carries a region parameter; the spec's own example shows full mechanism spread inside one region.
- *Paradigm = axis (the HDVRS-style reading)* — killed by the inhabitability test (you generate within a family, not within a dimension); its kernel retained as the map's coordinate layer.
- *The mandatory hook ("a map is always useful")* — killed on bloat: convergent/repair seeds have no family structure to map; the gate keeps the lightweight identity intact. The prosecution also surfaced that maintenance seeds are ALREADY partitioned by the spec's intervention-shape vocabulary — hence the gate's third conjunct (no double-mapping).
- *DO-NOTHING (a documented play only)* — killed by the wire-lesson: plays that live only in memory don't reach artifacts; the prior MTTP-connection finding was corrected for exactly this.
- *ADD-TEST-only (extend the check, skip the seed-time map)* — not killed: demoted to the named FLOOR (post-hoc detection wastes a pass and anchors on seen candidates, but it is the right fallback if the full hook proves noisy).
- *"Don't register in MTTP"* — killed against the class's stated purpose (without the catalog the meta-loop re-derives compositions every time); the entry stays minimal.
- *A fat MTTP entry / immediate candidate tier* — killed by the class's own bloat resistance; research-frontier is the tier built for sketches, and the tier table was quoted, not paraphrased.
- *A standalone naming reference doc now* — deferred (trigger: second reuse), not killed.
- *"The failure was selection, not coverage"* — not killed: carried as an acknowledged component (the design targets coverage; taste stays human).
- *The null hypothesis ("better prompting alone suffices")* — deliberately NOT killed: narration-grade evidence can't exclude it. It is answered economically (the hook costs ~one section even under the null and still yields a useful map) and empirically (the first instance is the test).

**What survived and why.** The operation's definition (multi-mechanism convergent; user-language-aligned — "paradigm" kept as the term); the two-scale unity (verified: S1/S2/S3 each instantiate map → dive → select; the same test that dissolved the "two different things" objection); the dial (S2 proved real — it is the scale where the map itself must outlive the session, which is the user's own recurring-naming case); the worked map (axes textbook-grounded; composed-family reachability shown via independent exemplars; hindsight honestly disclaimed); the claim-ceiling discipline (one confidence leak — the stratified-sampling gloss — caught and demoted to analogy).

## Open Questions

### Monitoring
- **Does the 3-conjunct gate fire correctly in practice?** Observable across the next few gated innovate runs — false fires (double-mapping; mapping convergent seeds) or missed fires both signal calibration work on the gate's one-glance questions.
- **Does the flag-and-decide convention hold, or does the map drift into a must-fill quota?** Observable in the first S1 uses.

### Blocked
- **Automated dial-selection** — blocked on meta-loop substantiation (the same precondition the MTTP class itself names).

### Research Frontiers
- **The null-hypothesis discrimination** — a real A/B (unscaffolded vs mapped generation on matched naming tasks) would upgrade the diagnosis from hypothesis-grade; no such instrumented comparison exists yet.
- **The category-detection sibling** — whether enumerate-then-drill is one unit-parameterized operation across generative spaces and existing collections.

### Refinement Triggers
- **After the first deliberate instance (the MUST):** win → promote Paradigm-Sweep per the tier ladder + consider upgrading the diagnosis; loss → strengthen the null in this finding's record and reconsider the hook's default-on gate.
- **If the full hook proves noisy within its first few gated runs** → drop to the ADD-TEST floor (the pre-emptive check only).
- **If the naming map is reused a second time** → extract it to a standalone reference (the COULD's gate).

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
I realized that with AI, it's really hard to come up with good names. Even when I use, um, innovation skill, you know, a skill, it's really hard. And I was just thinking, what is the reason? Um, because AI doesn't understand, um, but different paradigms of naming exist. For example, if I want to come up with a new name for an app, there are many different ways I can approach this. Um, I can try to come up with, for example, relevant keywords, prelevant keywords, and it will be the name, yes. I can come up with relevant keywords, but different vamp paradigm, but using another language is a different paradigm. So it can be the same world, but it can be in French, for example. Um, or another different paradigm is, Um, When you use 2 words together, and they mean they're like explanatory, they explain the, um, they got ads app does, or we can just explain something else, um, we can explain the, the outcome of this app, instead of what it does, just outcome. This is like another paradigm of, um, which semantic to use in terms of, uh, apps identity, it can be what it does, it can be the outcome, yes. one of the paradigm's identity, for example. Or there are some other paradigms regarding the, like, phonetics, uh, and approximation of, like, another world. For example, instead of saying like April, we can say appeal it to L. It can be a name as well, and it's like related to the apprill, and it is it is acceptable depending on, like, you know, it's it's a bit subjective. Uh, which this paradigms means that it uses different, um, uh, different, uh, It uses a word or the existing word, it alters it in a way, in a, like, grammatically, it's not correct, but then phonetically and as a name, it's good and shorter. It has such advantage. And like we had a situation where we were trying to generate a name for, um, uh, voice chat app for QR menus, in the restaurants, and I spent quite a time to talk with AI and try to come with names. And in the end, a good name for me, it's for me, yeah, good, one of the good options for me was Masajan, in Turkish. Which means table and life. So it's life of the table, and in Turkey, restaurants are, like they have these tables, and it has each table, has a job. each table has a life. Which you can talk and chat about the menu, ask your questions like you're asking to later. So there are different... paradigms and it's extremely... extremely, extremely important to detect the paradigms 1st and then dive deep into each of them, each one of them. Um, and I think this is something that, uh, that's, uh, like one missing part in our framework. I think, uh, detecting the paradigms, And then by doing a dive deep into them is one way of enumeration paradigm. And the other one is detecting the categories, for example, yeah? And then doing the, um, Dive deep. But that version is just the paradigm detection, and then doing dive deep. And I think this can be applied to um, innovation framework we have. This is definitely one thing that's advanced that can advance the innovation. The other... The other thing is it's resembles this MTTP pattern we had. Um, and also, regarding one part of the travel's loop. Like we might have something like that, but it's expensive, you know, like each paradigm, and then you have to go to type in each of them. Maybe not so cool, and maybe main idea was to use traverse loop to detect the detect these paradigms. Maybe this is, uh, this is what, it matters, like, and then for each of them, you'll go and run traverse, to generate more coverage and more enumeration of them in terms of, um, like, I don't know if I should say horizontally or vertically, but, um, and I think this is, like, one important thing can be added. I'm not sure exactly where, but it's really matters.

first read cognitive_harness/innovate/references/innovate.md fully
lets dive deep into this
```

</details>
