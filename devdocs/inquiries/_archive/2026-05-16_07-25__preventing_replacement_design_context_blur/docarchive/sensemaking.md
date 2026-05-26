# Sensemaking: Preventing Replacement-Design Context Blur

## User Input

Inquiry `_branch.md`. Input: exploration.md (3-region territory; 7 cannon + 6 experimental + 1 loose; 3+3 active/dormant split; 5 mechanisms M1-M5 with M1+M2 load-bearing; 10 solution dimensions D1-D10; precedent protocols/_archive/ + cross-inquiry Hybrid A+D; 7 signals; confidence-tagged map; M5 confirmed-absent). Job: anchor extraction + ambiguity collapse + commit model. Apply 9 perspectives including Frame-exit Completeness (gating fires) + Phase/Calibration-State (required); test Status Quo Bias both directions; resolve decompose-ambiguity.

---

## SV1 — Baseline Understanding

The user has 13 sub-folders in `cognitive_harness/`: 7 cannon (the user's official skill set) and 6 experimental (residue of past iterations + active replacement work). When designing a replacement for an experimental skill (named example: `navigation`), the existing version's content reaches the agent's context and contaminates the design conversation. The user wants to preserve the experimental skills (not delete) but isolate them from the design flow. They suggest two levers — moving to a different folder, or annotating the existing files — and ask which makes sense.

This is a workspace-organization design question with two technical levers (folder layout + annotation) and an implicit third lever (the bi-folder split: `cognitive_harness/` source-of-truth vs `~/.claude/skills/` runtime registry).

---

## Phase 1 — Cognitive Anchor Extraction

### Constraints
- **C1** Don't delete experimental skills (user-explicit: "i dont want to remove them"). Reversibility is mandatory.
- **C2** Compose with existing user conventions (`protocols/_archive/` already exists as an internal precedent).
- **C3** Mitigate the *load-bearing* mechanisms of context-blur — not just the visible/easy one.
- **C4** Minimal maintenance churn in the cannon workflow (per user's `structural_check_tool_remove_or_keep` finding pattern: "structure is ever changing, bloat at this point").
- **C5** Address the bi-folder split (cognitive_harness/ + ~/.claude/skills/) coherently; either lever alone leaves a vector active.
- **C6** Solution must work in **development phase** (active edits visible, not steady-state).

### Key Insights
- **K1** Context-blur has **two load-bearing vectors, not one**: M1 (registry-list priming via available-skills frontmatter) and M2 (reflexive Read on name mention). Each operates at a different bandwidth (M2 full-file; M1 description-line). Solutions addressing only one are structurally incomplete.
- **K2** The user has **already adopted the `_archive` convention internally** (`cognitive_harness/protocols/_archive/`). Extending this to top-level is convention-composition with existing habit, not invention.
- **K3** The 6 "experimental" entries split into **three structural profiles**, not one — and the user-level labels obscure this:
  - 3 SKILL-shaped + currently being replaced (navigation, meta-loop, contracts/) — but wait, contracts/ has no SKILL.md
  - Re-partitioning: 2 SKILL-shaped active (navigation, meta-loop); 3 SKILL-shaped dormant (comprehend, decompose, reflect); 1 non-SKILL artifact (contracts/alignment_control.md). Plus 1 loose file (next_question_to_ask.md).
- **K4** **D7 (D3 + D5 hybrid)** is the only candidate that directly mitigates M1; everything else leaves the registry-priming vector active. M1 mitigation requires touching `~/.claude/skills/`.
- **K5** The recently-completed `structural_check_tool_remove_or_keep` inquiry resolved a structurally-similar question with **Hybrid A+D**. The user's resolution pattern for "is this bloat" questions is multi-mechanism hybrid, not pure remove or pure keep.
- **K6** **Decompose is functionally cannon-by-runtime** — /MVL+'s D step invokes it via `~/.claude/skills/decompose/`. The user's omission from the cannon-list is most likely just an omission, not a deliberate exclusion. Silently archiving `cognitive_harness/decompose/` carries risk (drift; future-sync confusion).

### Structural Points
- **SP1** Three regions: project workspace (`cognitive_harness/`), runtime registry (`~/.claude/skills/`), mechanism-of-blur space (M1–M5).
- **SP2** Bi-folder coupling: `cognitive_harness/<skill>/` is source-of-truth; `~/.claude/skills/<skill>/` is what Claude Code loads. Drift confirmed (navigation/SKILL.md differs by 8 bytes). Sync is manual.
- **SP3** 5 mechanisms (M1+M2 load-bearing; M3-M4 secondary; M5 confirmed-absent).
- **SP4** 10 solution dimensions (D1–D10).

### Foundational Principles
- **P1** Reversibility: any "experimental → cannon" promotion must be 1-step revertible (i.e., copy back from `_archive/` and re-register to `~/.claude/skills/`).
- **P2** Composability: a new convention should compose with existing user habits.
- **P3** Optionality preserved: "they might be useful or not" — files stay readable on demand, just not auto-loaded.
- **P4** Substrate-honest: the solution must rely on mechanisms that Claude Code actually has, not aspirational ones (no `.claudeignore` exists — confirmed absent).
- **P5** Differentiate by use-profile, not by inertia.
- **P6** Forward-looking: future experimental skills should follow the same pattern; convention must be documented.

### Meaning-Nodes
- **MN1** "Context blur" — the central phenomenon: prior version's content/behavioral-cue entering the design conversation.
- **MN2** "Experimental" — the input label; partitions structurally into three profiles.
- **MN3** "Cannon" — the implicit complement; must include functional cannon-by-runtime even if user-listing missed it.
- **MN4** "Replacement design" — the workflow being protected.
- **MN5** "_archive convention" — the existing pattern being extended.

---

## SV2 — Anchor-Informed Understanding

The question reframes as a **three-axis design problem**:
1. **WHICH skills go where** — the cannon/experimental partition, with the decompose-ambiguity to resolve.
2. **WHERE to put archived skills** — folder location dimension.
3. **HOW to handle the runtime side** — registry unregistration is a real lever, not optional.

The four sub-questions (WHICH / WHERE / HOW MARK / WHETHER REGISTRY) are not independent — they're coupled. A solution must address them coherently. The existing `protocols/_archive/` precedent points strongly toward extending `_archive` to top-level.

---

## Phase 2 — Perspective Checking

### Technical / Logical

**New anchor T1:** M1 cannot be mitigated by in-place annotation because the description text is in the *registry frontmatter*, which the system surfaces to the agent regardless of in-file annotations. Therefore, ANY in-place-only solution (D1/D2/D9 alone) fails on M1. The registry side MUST be touched if M1 is to be addressed. **Bi-folder action is required, not optional.**

### Human / User

**New anchor U1:** The user already uses `_archive/` (in `protocols/`); extending the same word to top-level is cognitively cheaper than coining a new word. Renaming folders (D6 prefix) breaks muscle memory and path references in inquiries / memory entries. Convention extension > novel naming.

### Strategic / Long-term

**New anchor S1:** The user's workflow involves bidirectional flow — promotions experimental→cannon and demotions cannon→experimental. The solution must support BOTH. `_archive/<skill>/` (shallow, one level deep, preserves skill-folder shape) supports promotion = move-back-up-one-level. Deeply-nested or prefix-renamed layouts impose friction on this flow.

### Risk / Failure

**New anchor R1:** The strongest failure-mode is **silent partial-mitigation**: folders moved but registry unchanged → solution LOOKS done but M1 still active → user still experiences context-blur and concludes the inquiry was wrong. Mitigation: the solution must ASSERT both folder-move AND registry-unregister as required steps, with explicit verification.

**New anchor R2:** Archiving `cognitive_harness/decompose/` without confirming the decompose-cannon-by-runtime status risks breaking /MVL+'s D step downstream (if the user later syncs `_archive/decompose/` → `~/.claude/skills/decompose/` thinking it's the spec, they'll archive a working skill). User-flag required.

### Resource / Feasibility

**New anchor F1:** Moving 5 folders + removing 5 registry entries + writing a convention doc is a one-shot low-cost operation. The ongoing cost is keeping the convention applied to future experimental skills (negligible if the convention doc is clear). Total effort: ~15 minutes.

### Ethical / Systemic

N/A. No ethical dimension; systemic dimension is captured under Strategic.

### Definitional / Internal Consistency

**New anchor D1:** Internal-consistency test on "treat all 6 experimental folders uniformly" against the active/dormant 3-3 split:
- Active skills (navigation, meta-loop, plus contracts/ which is non-SKILL): their pain profile IS replacement-design — heavy M1+M2 exposure.
- Dormant skills (comprehend, decompose, reflect): not being touched — M1 exposure only.
- contracts/alignment_control.md: no SKILL.md → no M1 at all → only M2 if Read.

Uniform treatment over-treats the dormant set's M2 and under-mitigates the active set. Internal consistency FAILS on uniform treatment. **Differentiation is required.**

### Definitional / Frame-exit Completeness

**Gating predicate check:**
- (i) Inherited multi-value terms? — partial. "Cognitive harness" inherits framing from project-identity inquiry. "Cannon" / "experimental" are user-introduced this conversation but used as taxonomic labels.
- (ii) Used across ≥2 distinct values/levels within inquiry's own committed structures? — **YES.** Exploration's Inventory tables have multi-row structures where "experimental" labels distinct skills with distinct propositions per row.

**Gating fires.** Applying the 4 meta-categories:

**1. Existence Enumeration** — what does "experimental" refer to project-wide?
- **TYPE axis:** SKILL-shaped (SKILL.md + references/) vs stub-skill (SKILL.md only, no references/, like meta-loop) vs non-SKILL artifact (contracts/alignment_control.md) vs loose file (next_question_to_ask.md). **Four type-values, not one.**
- **LAYER axis:** project-side (`cognitive_harness/X`) vs runtime-side (`~/.claude/skills/X`). **Two layers.** A solution touching only one layer is incomplete.
- **PHASE axis:** active-being-replaced vs dormant-residue. **Two phase-values.**
- **STRUCTURAL ROLE axis:** registered-as-skill (visible in available-skills via frontmatter) vs unregistered-file. **Two role-values.**

Inquiry's frame focuses on SKILL-shaped experimental folders. Non-SKILL artifacts (contracts/, next_question_to_ask.md) are within the inventory but not centered. Frame must include them as a separate sub-category.

**2. Role Assessment** — for each excluded-or-marginal referent:
- contracts/alignment_control.md plays role: a standalone idea-artifact (alignment_control.md ~13K). Not registered. M1 doesn't apply. Operation's coherence WOULD be preserved if it's handled separately (it's not part of the SKILL-replacement pattern). Re-locate to its correct layer: **handle as non-SKILL-artifact category, not as SKILL-experimental.**
- next_question_to_ask.md plays role: a user scratchpad. Not part of the skill pattern at all. Coherence preserved if ignored. Re-locate to: **out-of-scope (or handled as part of the broader misc cleanup).**
- meta-loop's stub-shape (SKILL.md, no references/) plays role: actively-being-developed-from-scratch. Coherence preserved by treating it the same as active SKILL-shaped (it's a SKILL.md being authored; M1 applies via frontmatter). **Treat as active SKILL.**

**3. Verdict Rigor** — test the "treat all uniformly" verdict:
Counter-argument: uniform is simpler. If M1 and M2 affected all 6 equally, uniform would be fine.
Counter fails on structural grounds: M1 exposure is registry-tied (all SKILL-shaped registered have M1; non-SKILL like contracts have no M1). M2 exposure is read-frequency-tied (active being-replaced has high M2; dormant low M2). The exposure-profile difference is structural, not stylistic. **Uniform verdict LOW CONFIDENCE.**

**4. Residual / Coverage Justification** — what frame-exit concerns aren't captured?
- Future experimental skills (the forward-looking dimension): as user creates new experimental skills, the same pattern needs to apply. A solution handling only current state is incomplete. **Forward-looking convention doc is required.**
- The bi-folder drift question: when archiving, the runtime registry copy gets deleted. But the user might also want to track the runtime copy's history (for diff-with-old purposes). This is over-engineering for current state and ignorable.

**Frame-exit new anchors:**
- **FE1** Three-profile partition (active SKILL / dormant SKILL / non-SKILL artifact) replaces the two-profile (cannon/experimental) frame for design purposes.
- **FE2** Bi-folder action required (both lever sides).
- **FE3** Forward-looking convention doc required.
- **FE4** "meta-loop" stub belongs in active SKILL profile.
- **FE5** contracts/, next_question_to_ask.md belong in a separate non-SKILL category — may not need archive, may just need explicit non-skill labeling.

### Phase / Calibration-State Perspective (REQUIRED)

The project is in **active development phase** (Apr 26 – May 16 edits visible on multiple folders). The convention being designed must work during ongoing iteration, not just steady-state.

**Calibration the project state has:**
- Bi-folder workflow with manual sync.
- Active editing across multiple skills concurrently.
- Frequent reshuffling of what counts as cannon (per recent inquiries flagging things for inclusion / exclusion).
- No automated tooling for skill state-tracking (no `.claudeignore`, no settings-level exclusion).

**Calibration the project state does NOT have:**
- Automated sync between cognitive_harness/ and ~/.claude/skills/.
- A formal "graduation" ceremony for skills moving experimental → cannon.
- An existing top-level convention doc explaining skill status.

**Early-stage default:** **Low-overhead, transition-friendly.** A convention that's expensive to apply or hard to reverse will degrade in the dev phase. A simple doc + a flat `_archive/` folder + manual bi-folder action is appropriate to current calibration. Heavier solutions (D10's multi-layer with all of frontmatter + folder + doc) may be over-engineered for current state but become appropriate as the project matures.

**New anchor PC1:** Dev-phase-appropriate solution = low procedural overhead, easy to apply per-skill, easy to reverse, doc-based rather than tool-based.

---

## SV3 — Multi-Perspective Understanding

Major shifts from SV2:

1. **Uniform vs differentiated collapses to DIFFERENTIATED.** Frame-exit Completeness + Internal Consistency converge — uniform treatment fails on structural grounds.
2. **The category set expands from 2 to 4** (active SKILL / dormant SKILL / non-SKILL artifact / cannon). meta-loop, with no `references/`, joins active SKILL profile by Role Assessment.
3. **Bi-folder action is required.** In-place-only solutions fail M1; registry-only fails M2 (file still readable). Combined D3 + D5 is the load-bearing architectural minimum.
4. **Forward-looking convention doc** is required, not optional, per Frame-exit residual coverage.
5. **Dev-phase appropriateness** rules out heavy-procedure solutions for current state.
6. **decompose-status** must be flagged for user confirmation; cannot be silently included in archive list.
7. **contracts/ and next_question_to_ask.md** are different category from SKILL-experimental — separate handling.

---

## Phase 3 — Ambiguity Collapse

### Ambiguity 1: What does "context blur" operationally mean?

**Strongest counter-interpretation:** Context blur is purely visibility-based priming (M1 alone). The agent's reasoning gets colored by *seeing* the experimental skill in the available-skills list, even without ever Reading the SKILL.md. The user's report "being read into context" is loose phrasing.

**Why the counter fails (structural grounds):** Both M1 and M2 are demonstrably real. M1's available-skills system reminder is observable in this conversation's own system reminders. M2's Read mechanism is observable in every Read tool call. User testimony — "already existing one being read into context" — explicitly describes M2 (full-content reaching context). Both are load-bearing. Reducing to M1 alone is empirically incomplete.

**Confidence:** HIGH.

**Resolution:** Context blur = the prior version's content (full file via M2) AND/OR behavioral cue (frontmatter description via M1) entering the design conversation, biasing reasoning toward continuing the prior version rather than designing afresh.

**What is now fixed:** Dual-vector phenomenon; both mechanisms must be mitigated.
**What is no longer allowed:** Solutions addressing only one vector.
**What now depends:** Any candidate must mitigate BOTH M1 and M2.
**What changed:** "Successful blur prevention" = both-vector mitigation, not either.

### Ambiguity 2: What is "experimental" operationally?

**Strongest counter-interpretation:** Experimental = anything the user labeled experimental. Don't impose structural sub-typing the user didn't ask for.

**Why the counter fails (structural grounds):** The 6 user-labeled items have empirically different structural shapes (presence/absence of SKILL.md; presence/absence of registration; active vs dormant). Their M1/M2 exposure differs accordingly. Uniform treatment over-treats some and under-mitigates others — internal-consistency failure. Operational labeling adds rigor without changing the user's intent.

**Confidence:** HIGH (empirical evidence: ls + file inspection).

**Resolution:** "Experimental" = user's input label, partitioned operationally into three structural profiles for design purposes:
- **Profile A (active SKILL-shaped):** SKILL.md present + recently-edited + registered. Exposure: full M1 + full M2. Members: `navigation`, `meta-loop`.
- **Profile B (dormant SKILL-shaped):** SKILL.md present + dormant + registered. Exposure: full M1 + low M2. Members: `comprehend`, `reflect`.
- **Profile C (non-SKILL artifact):** No SKILL.md. Exposure: no M1 + low M2. Members: `contracts/alignment_control.md`, `next_question_to_ask.md` (loose file).

(Note: `decompose` is excluded pending Ambiguity 3 resolution.)

**What is now fixed:** Three-profile partition for design treatment.
**What is no longer allowed:** Uniform treatment across all 6.
**What now depends:** Decomposition produces per-profile pieces; Innovation produces per-profile concrete moves.
**What changed:** Experimental is a 1-input-label / 3-output-profile structure.

### Ambiguity 3: Is `decompose` cannon or experimental?

**Strongest counter-interpretation:** User listed cannon as `explore, innovate, MVL, MVL+, Protocols, sensemaking, td-critique`. Decompose is not on the list. Therefore decompose is experimental.

**Why the counter fails (structural grounds):** /MVL+'s pipeline is E → S → **D** → I → C. The D step invokes the Decomposition discipline. The runtime resolves `/decompose` via `~/.claude/skills/decompose/` which is in sync with `cognitive_harness/decompose/`. If `cognitive_harness/decompose/` is treated as "experimental" and archived (and the registry copy is removed as part of standard archive procedure), /MVL+'s D step breaks. The mechanism (runtime registration → invocation) is independent of the user's labeling.

Empirical confirmation: this very inquiry's /MVL+ run has already invoked decompose (in prior inquiries). The skill is functional.

**Confidence:** HIGH on functional cannon-by-runtime; MEDIUM on whether user's omission was intentional or accidental.

**Resolution:** Decompose is **functionally cannon-by-runtime**. The user's listing omission is most likely accidental (the user enumerated 7 skills quickly; D in /MVL+ wasn't separately surfaced). Treat decompose as cannon, but **explicitly flag this for user confirmation in the finding** — the user must be given the chance to correct (if they meant to keep decompose as cannon) or override (if they truly want it archived, accepting the /MVL+ consequence).

**What is now fixed:** `cognitive_harness/decompose/` is excluded from the initial archive list pending user confirmation.
**What is no longer allowed:** Silently archiving decompose.
**What now depends:** Convention doc must address "what to do when the cannon list seems inconsistent — flag the user, don't auto-decide."
**What changed:** Cannon = (user-listed cannon) ∪ (runtime-invoked-by-MVL+). Effective experimental list shrinks from 6 to 5 confirmed + 1 flagged.

### Ambiguity 4: What does "without removing them" mean operationally?

**Strongest counter-interpretation:** "Don't remove" = don't delete files AND don't unregister from runtime. Keep everything functional, just add markers.

**Why the counter fails (structural grounds):** The user said "placing them another folder is possible too, or adding some note to the skill md files maybe. i am not sure." Physical relocation is on the table. Unregistration is reversible (re-copy from `_archive/` to `~/.claude/skills/`); no information is destroyed. The constraint is "don't lose the artifact," not "don't unregister." Unregistration preserves the artifact (in cognitive_harness/_archive/) while removing M1 exposure.

**Confidence:** HIGH.

**Resolution:** "Without removing them" = the artifact must be preserved in some accessible location (cognitive_harness/_archive/<skill>/). Unregistration from `~/.claude/skills/` is a permitted operation because the artifact remains in cognitive_harness/_archive/ and unregistration is 1-step reversible.

**What is now fixed:** Unregistration is a permitted lever.
**What is no longer allowed:** Reading "without removing" as "don't touch the registry."
**What now depends:** D5 is a viable solution component.
**What changed:** Reversibility constraint is satisfied by `_archive/` preservation, not by registry preservation.

### Ambiguity 5: Specific-vs-pattern — design for navigation specifically, or for the pattern?

**Strongest counter-interpretation:** User named `navigation`. Address navigation specifically. Other experimental skills can be handled when they become a problem.

**Why the counter fails (structural grounds):** User's phrasing — "everytime i try to develop what should replace it" — and "such things" (plural) signal a recurring pattern. A navigation-specific solution would handle 1 of 6 cases; convention only adds value if scoped to the broader pattern. Per `_branch.md` Scope Check: default is to address the broader pattern.

**Confidence:** HIGH.

**Resolution:** Design scope = pattern (any non-cannon skill in cognitive_harness/). navigation is the load-bearing concrete instance used to validate the design. All 5 confirmed experimental items + the flagged decompose are addressed.

**What is now fixed:** Pattern-scope.
**What is no longer allowed:** navigation-only point-solutions.
**What now depends:** Convention doc must cover future experimental skills, not just current.
**What changed:** Deliverable is CONVENTION + per-skill DISPOSITION, not just a per-skill move.

### Ambiguity 6: `_archive` at top-level vs novel naming?

**Strongest counter-interpretation:** `_archive/` inside `protocols/` was for protocols specifically. The top-level might warrant a different name — `_experimental/` is more precise; `_drafts/` if some are unfinished.

**Why the counter fails (structural grounds):** Convention uniformity has value: one word to remember > multiple words to remember. The user uses `_archive/` in `protocols/`; reusing it at top-level is cognitively cheaper. `_experimental/` is technically more precise BUT the inquiry covers both actively-experimental and dormant residue — "experimental" is also somewhat lossy. `_drafts/` implies in-progress, which doesn't fit the dormant set.

The counter has SOME merit: `_archive/` semantically implies "finished and shelved," which is mildly lossy for active iteration. But the alternative names have their own losses. Convention uniformity outweighs.

**Confidence:** MEDIUM (counter has structural merit; resolution preferred not forced).

**Resolution:** Top-level `cognitive_harness/_archive/` is the chosen convention. Within `_archive/`, no sub-categorization by status (active/dormant) — flat structure for simplicity. The convention doc explains that `_archive/` contains "non-cannon skills" without further granularity.

**What is now fixed:** Top-level `_archive/` folder.
**What is no longer allowed:** Coining a new top-level convention word.
**What now depends:** All archived items go under `cognitive_harness/_archive/<name>/`.
**What changed:** Convention extension over novel naming.

### Ambiguity 7 — Load-bearing concept test on "context blur"

**Test predicate:** Is context-blur the project's actual property, or an external default the loop adopted?

**Strongest counter-interpretation:** Context blur might be a mis-attribution. The user is experiencing design difficulty and naming it "context blur" but the actual cause might be something else (e.g., the design problem itself is hard regardless of context).

**Why the counter fails (structural grounds):** The dual-mechanism explanation (M1+M2) is grounded in observable system behavior — not just user testimony. The available-skills system reminder is observable in this conversation's reminders. The Read tool calls are observable. The user-reported phenomenon has a mechanism behind it; it's not just an experiential label without referent.

**User-language alignment:** "Context blur" is the user's own term. No loop-coined neologism.

**Confidence:** HIGH.

**Resolution:** Context blur is a real phenomenon grounded in observable system mechanisms; the term matches user language.

---

## SV4 — Clarified Understanding

After 7 ambiguity collapses, the structure stabilizes:

- **Context blur** = dual-vector (M1 registry-priming + M2 reflexive Read); both must be mitigated.
- **Experimental** = 3 profiles (active SKILL / dormant SKILL / non-SKILL artifact).
- **decompose** = functionally cannon-by-runtime; flag for user confirmation, exclude from initial archive.
- **Without removing** = preserve in `_archive/`; unregistration permitted because reversible.
- **Scope** = pattern (any non-cannon skill).
- **Folder convention** = top-level `cognitive_harness/_archive/<skill>/`.
- **Context-blur** is grounded in observable system mechanisms (not loop-coined).

What is now clear: WHERE (cognitive_harness/_archive/), WHAT mitigation criterion (both M1 and M2), HOW many profiles (3), WHICH skills are experimental (5 + decompose-flag), CONVENTION direction (low-overhead, forward-looking, doc-based).

What is no longer viable: uniform treatment; navigation-only point-solutions; in-place-only annotation; novel naming; registry-untouching solutions; silently archiving decompose.

---

## Phase 4 — Degrees-of-Freedom Reduction

### Fixed

- F1: `_archive/` at top-level (Ambiguity 6).
- F2: Both M1 and M2 mitigated (Ambiguity 1).
- F3: Three-profile differentiated treatment (Ambiguity 2).
- F4: decompose flagged for user; excluded from initial archive (Ambiguity 3).
- F5: Unregistration from `~/.claude/skills/` permitted (Ambiguity 4).
- F6: Pattern-scoped, not navigation-specific (Ambiguity 5).
- F7: Convention doc required as a deliverable (Frame-exit residual + P6).

### Eliminated

- D1 (frontmatter status alone), D2 (top-of-file marker alone), D9 (sentinel file alone) — fail M1.
- D6 (prefix rename) — fails to address M1; high muscle-memory churn.
- D4 (sibling folder out of cognitive_harness/) — breaks the user's existing `_archive` precedent in cognitive_harness/protocols/_archive/.
- Pure D10 (D3 + frontmatter + convention doc, NO registry action) — INCOMPLETE on M1.
- Treating contracts/ and next_question_to_ask.md the same as SKILL-experimental — wrong profile.

### Remaining Viable (compositions)

- **D3 (relocate to `_archive/`)** — Profile A and B applicable. Partial alone; needs D5.
- **D5 (unregister from `~/.claude/skills/`)** — Profile A and B applicable. Partial alone; needs D3.
- **D7 = D3 + D5** — Profile A and B viable; load-bearing minimum for both vectors.
- **D8 (twin pattern for active, bulk-archive for dormant)** — addresses active/dormant differentiation. In SV4 frame this collapses: the "twin" pattern's new-design folder is just `cognitive_harness/<original_name>/` re-used freshly after the old version is archived. No special twin folder needed.
- **Convention doc** (a piece of D10) — required.
- **Per-profile differentiation** — the over-arching commitment.

### Synthesis: D11 — Differentiated _archive with bi-folder action + convention doc

The remaining solution is a composition:

- **For Profile A (active SKILL-shaped: navigation, meta-loop):**
  - `mv cognitive_harness/<skill>/ cognitive_harness/_archive/<skill>/`
  - `rm -rf ~/.claude/skills/<skill>/`
  - Replacement design uses `cognitive_harness/<skill>/` slot freshly (the old version is now at `_archive/<skill>/`, accessible if explicitly Read).
- **For Profile B (dormant SKILL-shaped: comprehend, reflect):**
  - Same as Profile A move + unregister; no replacement work pending.
- **For Profile C (non-SKILL artifact: contracts/alignment_control.md, next_question_to_ask.md):**
  - Per-artifact judgment. Default option: move to `cognitive_harness/_archive/_misc/<file>` OR leave in place. Decomposition decides.
- **decompose:** flag user; default keep as cannon.
- **Convention doc:** `cognitive_harness/_archive/README.md` describing what goes in _archive/, the bi-folder action, promotion-back-to-cannon procedure, and the agent-instruction ("do not auto-load anything in _archive/ unless explicitly requested").

---

## SV5 — Constrained Understanding

Solution space collapsed from 10 dimensions to one coherent compound: **D11**.

```
D11 = D3 (relocate to _archive/) + D5 (unregister from runtime)
       + per-profile differentiation
       + convention doc (README in _archive/)
       + decompose-user-flag
```

Remaining design freedom is at FINE GRAIN:
- The convention doc's exact wording.
- Disposition of contracts/ and next_question_to_ask.md (move to _misc/, leave in place, or delete loose file).
- Whether to also annotate moved SKILL.md files with a `status: archived` frontmatter line (defense-in-depth, light cost).

---

## Phase 5 — Conceptual Stabilization

### Three Core Commits

- **COMMIT 1 — Bi-folder action required.** Both M1 and M2 must be mitigated; the registry side is non-optional. Any solution that doesn't touch `~/.claude/skills/` is structurally incomplete.

- **COMMIT 2 — Three-profile partition.** Active SKILL (navigation, meta-loop) / dormant SKILL (comprehend, reflect) / non-SKILL artifact (contracts/, next_question_to_ask.md). Decompose is cannon-by-runtime; user-flag for confirmation.

- **COMMIT 3 — Convention doc deliverable.** The mechanism alone isn't enough — a forward-looking convention doc must be written so future experimental skills follow the same pattern.

### Inherited Cross-Cutting (from exploration's matrix and the patterns)

- **X1 — Honor the existing precedent.** Use `_archive/` at top-level, matching the protocols/_archive/ pattern.
- **X2 — Reversibility.** Promotion experimental → cannon is 1-step (move folder back + re-copy to runtime).
- **X3 — Dev-phase-appropriate.** Low overhead, doc-based, no tooling dependencies. As the project matures, the convention can grow.

### Architecture

```
cognitive_harness/
├── _archive/                      (NEW — extends protocols/_archive/ pattern)
│   ├── README.md                  (convention doc)
│   ├── navigation/                (was Profile A; moved here)
│   ├── meta-loop/                 (was Profile A; moved here)
│   ├── comprehend/                (was Profile B; moved here)
│   ├── reflect/                   (was Profile B; moved here)
│   └── _misc/                     (optional, for non-SKILL artifacts)
│       └── alignment_control.md   (if user chooses to move contracts/'s file)
├── explore/                       (cannon, unchanged)
├── innovate/                      (cannon, unchanged)
├── MVL/                           (cannon, unchanged)
├── MVL+/                          (cannon, unchanged)
├── protocols/                     (cannon, unchanged; already has its own _archive/)
├── sense-making/                  (cannon, unchanged)
├── td-critique/                   (cannon, unchanged)
├── decompose/                     (FLAGGED — cannon by runtime; user confirm)
└── (next_question_to_ask.md — handled per-artifact decision)

~/.claude/skills/
├── (navigation, meta-loop, comprehend, reflect REMOVED)
├── (decompose RETAINED — cannon by runtime)
└── (cannon skills retained)
```

### Decomposition Handoff: Pieces Recommended

The conceptual model partitions naturally into these pieces:
- **P1** Cannon-set verification (decompose-flag resolution + sanity check of other cannon).
- **P2** Profile A disposition (active SKILL: navigation + meta-loop): per-skill move + unregister actions.
- **P3** Profile B disposition (dormant SKILL: comprehend + reflect): per-skill move + unregister actions.
- **P4** Profile C disposition (non-SKILL artifacts): per-artifact judgment.
- **P5** Convention doc (`_archive/README.md`): content, sections, agent-instruction text.
- **P6** Verification + reversibility procedure: how to confirm the moves worked + how to undo a single archive operation.

Six pieces; tractable. Decomposition will partition further or compose them as it sees fit.

---

## SV6 — Stabilized Model

**The committed conceptual model:**

Context blur is a **dual-vector phenomenon** (M1 registry-priming + M2 reflexive Read). Effectively preventing it requires a **bi-folder action** (move within `cognitive_harness/` + unregister from `~/.claude/skills/`).

The skills the user calls "experimental" partition into **three structural profiles** (active SKILL / dormant SKILL / non-SKILL artifact); each profile gets differentiated handling but all use the same top-level `_archive/` convention to compose with the existing `protocols/_archive/` precedent.

**Decompose is functionally cannon-by-runtime** (the user's listing-omission is most likely accidental); it is flagged for user confirmation rather than silently archived.

The deliverable is **a CONVENTION (cognitive_harness/_archive/README.md) plus per-skill DISPOSITION (5 moves + 1 flag + per-artifact judgment for 2 non-SKILL items)**. The convention doc is forward-looking so future experimental skills follow the same pattern without re-deliberation.

The architecture is **low-overhead, dev-phase-appropriate, fully reversible** (any archived skill can be promoted back to cannon by moving + re-copying to runtime).

### Difference from SV1

| Axis | SV1 | SV6 |
|---|---|---|
| Problem framing | "Where to put + what to mark" | "Convention + Disposition across 3 profiles + cannon verification + bi-folder action" |
| Mechanism understanding | "Context-blur happens somehow" | "Dual-vector: M1 registry + M2 reflexive Read" |
| Experimental partition | 1 category (6 items) | 3 profiles (2 + 2 + 2 + flag for decompose) |
| Folder lever | "Move somewhere" | "Top-level `_archive/` extending protocols precedent" |
| Annotation lever | "Status marker maybe" | "Convention doc, not in-file" |
| Registry treatment | Implicit | Explicit, mandatory |
| Deliverable | "Pick an approach" | "Convention doc + per-skill action manifest" |
| decompose handling | Not surfaced | Functionally cannon-by-runtime; user-flag |

---

## Telemetry — Saturation Check

| Indicator | Status |
|---|---|
| Perspective saturation | ✓ — 9 perspectives applied; Frame-exit Completeness produced the largest new-anchor set (3-profile partition); new types stopped emerging after that |
| Ambiguity resolution ratio | 7/7 resolved; 0 OPEN |
| SV delta | SV1 → SV6 shows clear structural shift (1-axis → 4-axis: convention + disposition + profile-differentiation + cannon-verification) |
| Anchor diversity | All 5 anchor types represented (constraints C1-C6 / insights K1-K6 / structural points SP1-SP4 / principles P1-P6 / meaning-nodes MN1-MN5); from 9 perspectives |

### Failure-mode Self-Check

| Failure mode | Status | Note |
|---|---|---|
| Status Quo Bias | tested both directions | Status quo = keep in place. Counter = move. Evidence favors moving (M1+M2 mitigation requires it). Reverse-direction test: would NOT moving be valid if M1 isn't load-bearing? — but M1 IS load-bearing (observable). Avoided. |
| Premature Stabilization | ✗ premature | 5 perspectives produced NEW anchor sets (Internal Consistency, Frame-exit, Phase/Calibration, Risk, Strategic). Not premature. |
| Anchor Dominance | ✗ dominant | Removing any single anchor (M1, 3-profile, _archive-precedent, convention-doc) doesn't collapse the model. Multi-anchored. |
| Perspective Blindness | ✗ blind | Frame-exit + Risk both produced uncomfortable findings (3-profile + decompose-flag). Discomfort observed. |
| Clean Resolution Trap | ✗ trapped | Counter-arguments stated and rebutted on structural grounds for each ambiguity. |
| Self-Reference Blindness | ✗ blind | External grounding via observable system mechanisms (M1+M2), file timestamps (active/dormant), file shapes (SKILL.md presence). Not purely conceptual. |

### Self-Assessment

**PROCEED.** Conceptual model committed; ready for Decomposition to partition into actionable pieces. Frame-exit Completeness applied with all 4 meta-categories; Phase/Calibration-State applied as required (dev-phase appropriate). Load-bearing concept test on "context blur" passed (HIGH confidence). Three core commits + cross-cutting commitments + 6-piece decomposition handoff prepared.
