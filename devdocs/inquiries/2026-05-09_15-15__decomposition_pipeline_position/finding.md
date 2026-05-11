---
status: active
---
# Finding: Decomposition pipeline position

## Question

From `_branch.md`:

> Is Decomposition's current position (between Sensemaking and Innovation in the MVL+ pipeline E → S → **D** → I → C) the right architectural placement for it — or should it move to the front (decomposing the input query into independent piece-loops), move to after Critique (producing sub-paths for next-run MVL), be removed entirely from this loop (it belongs to a different kind of logic), or be kept where it is (corpus evidence supports current placement)?

**Context for a reader new to this project.** This finding lives inside the homegrown thinking-engine project at `/Users/ns/Desktop/projects/native/`, which defines a five-discipline cognitive loop called MVL+ (Exploration → Sensemaking → **Decomposition** → Innovation → Critique). Each discipline has a spec under `homegrown/<discipline>/references/<discipline>.md`. The discipline taxonomy in `enes/discipline_taxonomy.md` classifies these five as Core (pipeline-sequential). The user's question targets Decomposition's position in that pipeline. This inquiry follows a just-completed audit (`devdocs/inquiries/2026-05-09_11-54__decomposition_value_audit/finding.md` — referred to below as "the prior audit") which found Decomposition graded MEDIUM-typical across 10 inquiries, deferring the pipeline-rule question to a separate inquiry. The user is opening that exact deferred question now.

**Goal of this finding.** Per `_branch.md`, the user should be able to read this and decide: leave the pipeline as E→S→D→I→C, change Decomposition's role within MVL+, or take some other architectural action. This finding produces (1) a verdict on Decomposition's role with the user's four candidate positions disambiguated, (2) concrete options the user can choose between (with a recommendation), and (3) explicit acknowledgments that correct two framing collapses the user's question contained.

---

## Finding Summary

- **The user's question has a framing miss that is itself the most important finding.** "Decomposition" in the user's question names THREE distinct cognitive operations sharing a single folk-vocabulary name. The project's existing architecture has already separated these under different names. Once disambiguated, the user's four candidate positions split cleanly across three architectural layers, and most of the question's apparent open-endedness resolves.

- **The three operations the user collapsed into "decomposition":**
  - *Coupling-perception within a clarified whole* — the operation `/decompose` (the Core discipline at `homegrown/decompose/references/decompose.md`) actually performs. Requires Sensemaking as prerequisite.
  - *Scope-splitting on a raw input query* — what the user named "D-FIRST." This is a different cognitive operation; it operates on raw text, not on clarified structure.
  - *Direction-enumeration from a completed cycle's output* — what the user named "D-AFTER-C." This is `/navigation`'s existing operation (Boundary discipline at `/Users/ns/.claude/skills/navigation/references/navigation.md`).

- **The user's "D-FIRST" is the project's deferred end-goal direction (multi-head meta-loop).** Per `enes/loop_desing_ideas/meta_loop.md` and `enes/what_is_meaningful_traversal.md`, the project's stated end-goal architecture is "many MVL+ loops in parallel" — multi-head meta-loop. The user's intuition matches that direction exactly. It is structurally deferred behind a prerequisite (sequential meta-loop completes 3 useful chains) for a real reason: branch-comparison and merge logic need sequential evidence first. This inquiry confirms the direction without forcing the action.

- **The user's "D-AFTER-C" is `/navigation`'s existing operation, verbatim.** `/navigation` is a Boundary discipline (per `enes/discipline_taxonomy.md`) that "operates between cognitive cycles" and "reads what was produced (survivors, refinements, kill seeds, frontier questions, telemetry signals) and maps the full space of what could come next." The mapping is exact. No new discipline is needed; the existing one fills the role.

- **Within MVL+ (the intra-pipeline question), only two paths remain viable:** KEEP-CURRENT (zero-cost status quo) and D-CONDITIONAL (D-skips-when-not-needed, with a runtime trigger). The third option ("remove D entirely") is killed by the prior audit's 0-NEGATIVE finding (D never harmed in 10 audited inquiries; removing what never harms is unjustified).

- **The recommended action is "Assembly B" (Layer-0-only D-CONDITIONAL).** Add a Form 1 standalone refinement note to `/decompose`'s Step 1 (per the Step Refinement primitive at `enes/step_refinement.md`): when all candidate pieces are Layer-0 with no cross-piece interfaces, write a minimal `decomposition.md` that declares the skip with reason and exits; otherwise proceed normally. The trigger ("Layer-0-only inquiry") is corpus-grounded — the prior audit found 8 of 10 inquiries had Layer-0-only structure with perfunctory machinery — and inherits the prior audit's Q1.2-a-mitigated "explicit declaration when skipped" requirement.

- **Three other paths are also legitimate, presented honestly:**
  - *Path 2 (alternative):* Place the skip rule in the `/MVL+` runner (`/Users/ns/.claude/skills/MVL+/SKILL.md`) instead of `/decompose`'s spec. Aligns with the runner-vs-discipline separation principle in `enes/loop_desing_ideas/loop_design_1.md`.
  - *Path 3 (do-nothing baseline):* Keep the pipeline exactly as-is. The prior audit found 0 NEGATIVE outputs; the verdict was MEDIUM-typical, not failing; "brushing teeth" disposition supports keeping things stable. This is a real choice, not a strawman.
  - *Path 4 (deferred future-state):* "Honest-conditional" — once the prior audit's recommended honest value tag (its `Q1.1-f`) ships and accumulates value-tag history across inquiries, migrate to a value-tag-history-based trigger. Currently blocked by the missing signal infrastructure.

- **Verdict scope.** The verdict is calibrated for the project's current phase (sequential MVL+ exists; meta-loop spec exists; multi-head deferred; the audit corpus is N=10, 8 of which are meta-design inquiries). After multi-head infrastructure is built, after audit-again-with-diversity adds non-meta-design evidence, the verdict should be revisited.

- **A self-application observation worth flagging.** This inquiry's own Decomposition step — running inside the very MVL+ pipeline whose D-position is in question — scored MEDIUM under the prior audit's value framework, consistent with the corpus-typical pattern. One candidate trigger Innovation generated (Q1.2-T4: "skip D when S has already named the partition") would have retroactively skipped this inquiry's D, which surfaced a real specification gap: the trigger needs to mean "named at the level downstream pieces operate on, including sub-pieces" rather than "named at SV6 top-level." Critique resolved this by deferring T4 with a refined specification; the surviving primary trigger is the simpler Layer-0-only one.

---

## Finding

### Why this inquiry ran

The user just finished an audit of Decomposition's value across 10 recent inquiries. That audit found Decomposition graded MEDIUM-typical (5 MEDIUM / 2 LOW-MEDIUM / 3 LOW / 0 HIGH / 0 NEGATIVE) and produced an Assembly A recommendation of within-D-spec refinements. The audit also explicitly DEFERRED a related but distinct question: should the always-E→S→D→I→C pipeline rule itself permit conditional Decomposition? The user opened that question now (rather than waiting for the audit's deferral schedule), expanding it to a broader architectural inquiry: should Decomposition be at a different position, or removed, or kept?

The audit had treated the always-pipeline rule as a hard constraint. This inquiry has explicit user authority to question the rule itself.

### What Exploration mapped

Exploration did a signal-first scan across all four user-named candidate positions plus one surfaced via jump scan:

- **D-FIRST** (decompose input query at the loop's entry; each piece runs its own MVL+ loop). This is a multi-head architecture.
- **D-CURRENT** (status quo; D between S and I in the MVL+ pipeline). The audit's graded slot.
- **D-AFTER-C** (after Critique; produce sub-paths for next-run MVL).
- **D-REMOVED** (D doesn't appear in the cognitive loop at all).
- **D-MULTIPLE** (D at more than one position; possibly different operations sharing a name).
- **D-CONDITIONAL** (added via jump scan; D as Situational, conditional on a partition-need trigger).

The exploration's most important finding was that the candidate positions live at THREE different architectural layers, not one:

- `/decompose` (the Core discipline) operates inside the MVL+ pipeline at one specific layer.
- D-FIRST (decomposing-the-input-query) would operate at the meta-loop layer ABOVE MVL+ — already named in `enes/loop_desing_ideas/meta_loop.md` as the multi-head meta-loop direction.
- D-AFTER-C (next-direction-enumeration) is what `/navigation` already does at the between-cycles boundary layer.

Each layer has its own existing-architecture-fact. Multi-head meta-loop is explicitly DEFERRED in the project's design, with a structural prerequisite (sequential meta-loop matures first; per `enes/loop_desing_ideas/meta_loop.md` "after sequential meta-loop completes 3 useful chains"). `/navigation` already has a 16-type direction taxonomy that does what D-AFTER-C describes. The user's question, examined against this surround layer, was asking about something the project had already partially answered under different names.

### What Sensemaking stabilized

Sensemaking ran a SV1→SV6 progression with seven ambiguity-collapse pairs. Two collapses were load-bearing:

**The operation-shape ambiguity (Sensemaking Ambiguity 1).** Is "decomposition" one operation or several? Sensemaking resolved on structural grounds: the mechanisms differ across positions. `/decompose`'s mechanism (coupling-perception of internal structure within a clarified whole) requires the whole to be understood — it cannot operate on a raw query. "Decompose-input-query"'s mechanism (scope-splitting at the surface form) doesn't require coupling-perception. `/navigation`'s mechanism (set-enumeration over a typed direction taxonomy) is neither coupling-perception nor scope-splitting. Inputs differ (raw query / clarified whole / cycle output). Outputs differ (sub-seeds / question-tree-with-verification / typed-direction-list). These are three different cognitive operations; the user's framing collapsed them under a folk-vocabulary name.

This collapse is the most important finding because once it's resolved, the user's four candidate positions disambiguate cleanly:

- D-FIRST is at the meta-loop layer (the multi-head direction; deferred).
- D-AFTER-C is `/navigation` (already exists).
- D-CURRENT and D-CONDITIONAL are the only intra-MVL+ options that meaningfully apply to `/decompose` itself.

**The audit-evidence weighting ambiguity (Sensemaking Ambiguity 4).** The prior audit found 0 NEGATIVE Decomposition outputs (favoring KEEP) and 0 HIGH outputs (favoring REMOVE/CONDITIONAL). Sensemaking resolved that BOTH readings are true on structural grounds: 0-NEGATIVE is real evidence-against-removal; 0-HIGH is real evidence-against-uncritical-keeping. Neither dominates the other; the verdict logic must weight them per option. D-CONDITIONAL is the option that respects both readings (keep when D earns; skip when ceremony). KEEP-CURRENT respects only the 0-NEGATIVE leg. REMOVE is killed by 0-NEGATIVE.

Five other ambiguities were collapsed: scope (intra-MVL+ vs full architecture; resolved into three sub-questions); deferral respect (HIGH-confidence respect — multi-head's prerequisite is structural, not convention); always-pipeline rule's status (it's a runner-level choice that can flex; the discipline taxonomy's "pipeline-sequential" admission criterion can be read as "runs sequentially WHEN it runs," which preserves Core admission for D-CONDITIONAL); sample-bias scope (verdict applies to meta-design pattern with caveat); self-reference scope (this inquiry's own D is one more data point, doesn't dominate).

Sensemaking SV6 concluded with a graded verdict structured as three sub-question answers, plus three actionable options for innovation to develop, plus a phase-tag noting the verdict is calibrated for the current project phase.

### What Decomposition partitioned

Decomposition partitioned the post-Sensemaking actionable space into four pieces:

- **Q1 (Intra-MVL+ design proposal):** What's the proposed shape for `/decompose`'s role inside MVL+ — KEEP-CURRENT variants (Q1.1) or D-CONDITIONAL design with three sub-axes (Q1.2: trigger / spec form / maintenance side)?
- **Q2 (Architectural-acknowledgment language):** How does the finding state (a) D-FIRST as the project's deferred end-goal direction and (b) `/navigation` already covers D-AFTER-C — without proposing new architectural moves?
- **Q3 (Meta-action option):** Should a separate inquiry on the discipline taxonomy's "pipeline-sequential" reading be opened? When? With what seed?
- **Q4 (Verdict communication artifact):** What does the user read to decide?

This decomposition's own honest value tag (per the prior audit's framework) was MEDIUM. The Q1.2 sub-axis split (trigger / spec form / maintenance) was the genuine partitioning work — those three independent design axes weren't named in Sensemaking SV6, which had Q1.2 as a single option. The other pieces (Q1.1, Q2, Q3, Q4) were mostly formalization of structure already implicit in SV6. The MEDIUM tag is consistent with the corpus-typical Decomposition value, exemplifying the audit's verdict it sits downstream of.

### What Innovation generated

Innovation applied all seven mechanisms (4 generators + 3 framers) and produced 24 candidate proposals plus 5 inversions across the 4 pieces. Four cross-piece convergences emerged:

- *Honest-signal-source thread:* The prior audit's Q1.1-f (honest value tag) is the natural signal source for a value-tag-history-based skip trigger; multiple pieces converge on this future-state path.
- *Runner-vs-discipline separation thread:* If skip logic lives in the runner (`/MVL+`) rather than `/decompose`'s spec, the discipline stays clean; aligns with `enes/loop_desing_ideas/loop_design_1.md`'s explicit separation principle.
- *Conservative do-nothing thread:* Four inversions across pieces converge on the legitimate baseline of no spec changes — the audit's verdict stands as a corpus-internal observation, no immediate action required.
- *Framing-correction thread:* The user's framing collapse can be corrected explicitly in the finding's acknowledgment language plus a comparison table.

Innovation tested four coherent assemblies combining surviving candidates (A=Honest-conditional with chained dependency on prior audit; B=Layer-0-only conditional, corpus-grounded and independent; C=Conservative status quo as baseline; D=Runner-level conditional with phase-tag).

The most concrete self-application finding from Innovation: candidate trigger Q1.2-T4 (skip D when S has already named the partition) would have retroactively skipped THIS inquiry's Decomposition. Innovation flagged this for Critique to evaluate.

### What Critique evaluated and recommended

Critique constructed 10 dimensions (6 default — Correctness, Coherence, Feasibility, Completeness, Robustness, Elegance — plus 4 project-specific: Phase-fit, Discipline taxonomy stability, Audit-evidence weighting, Self-reference scope). Multi-head deferral served as a VETO dimension: any candidate proposing D-FIRST as immediate action was auto-killed.

After per-candidate adversarial testing (prosecution + defense + collision; multi-axis prosecution depth applied especially for Q1.2-T4), Critique produced 6 KILLs (with seeds), 7 REFINEs (with merge targets), 13 SURVIVEs, and 5 DEFERREDs (with revival triggers).

The Q1.2-T4 self-application case received the most rigorous treatment. Critique constructed three concurrent prosecution attacks: a user-perspective objection (the user wants to understand D's value; T4 systematically skips cases where D's sub-axis split could earn HIGH), a specific failure-case scenario (THIS inquiry's own D would have been skipped under T4, eliminating the Q1.2 sub-axis partitioning that made the verdict actionable), and a specification-gap probe ("named partition" is ambiguous between "named at SV6 top-level" and "named at the level downstream pieces operate on, including sub-pieces"). Critique resolved that T4 has a SPECIFICATION problem, not a structural one: the refined T4 specifies "named at the level D would operate, including sub-pieces" and would NOT have skipped THIS inquiry's D. The first-pass T4 specification is falsified; the underlying corpus pattern (S surfaces what D reformats — when applicable) is validated. Both are true. T4 was deferred with the refined specification as the revival target.

Critique's assembly-level verdicts:

- **Assembly A (Honest-conditional):** DEFERRED with revival trigger. Has a triple chained dependency (the prior audit's Q1.1-f must ship; signal must accumulate; inquiry-shape vocabulary must exist). It's a future-state assembly, not immediate-action.
- **Assembly B (Layer-0-only conditional):** SURVIVE as primary recommendation. Corpus-grounded (8/10 audit pattern); independent of the prior audit's Assembly A; phase-fit `desc-machinery` (low risk); preserves Workspace Invariant; preserves Core admission rule under the flexible reading.
- **Assembly C (Conservative status quo):** SURVIVE as legitimate baseline. The audit's MEDIUM-typical verdict doesn't force action; do-nothing is real choice.
- **Assembly D (Runner-level conditional + phase-tag):** SURVIVE as alternative. Same outcome as Assembly B but trades cleaner /decompose-spec for expanded /MVL+ runner responsibility.

### Why Assembly B is the recommended primary action

Assembly B is the cheapest and most-corpus-grounded path that addresses the audit's findings without taking on chained dependencies or precedent-setting risks. Its components:

- **The skip trigger is corpus-grounded.** The prior audit found 8 of 10 inquiries had Layer-0-only structure (no cross-piece interfaces, read-only flows) where Decomposition's full Steps 5-6 machinery was perfunctory. The Layer-0-only trigger captures exactly this pattern.
- **The mitigation prevents silent under-decomposition.** When the trigger fires, Decomposition writes a minimal `decomposition.md` declaring "Skipped: Layer-0-only inquiry; Innovation should consume S's SV6 directly." This inherits the prior audit's Q1.2-a-mitigated "explicit declaration when skipped" rule, preserving the Workspace Invariant (each discipline produces its canonical output file) and preventing Decomposition's failure mode #4 (Missing Pieces) from sneaking in via silent skip.
- **The spec form is a Form 1 standalone refinement note** at `/decompose`'s Step 1 (per the Step Refinement primitive at `enes/step_refinement.md`). This is the canonical form for the kind of conditional rule Assembly B implements; matches the visual marker convention from the recent `discipline_corpus_tidying_application` inquiry.
- **The discipline taxonomy stays stable.** Decomposition remains a Core discipline; "pipeline-sequential" is read as "runs sequentially WHEN it runs," which preserves Core admission. The flexibility of the runner-level always-rule does not break the taxonomy's structural commitment.
- **Phase-fit is `desc-machinery`** — low risk per the Step Refinement primitive's phase-fit precision rule (descriptive at machinery file; not active enforcement).

Optional add-on: pair with `Q1.1-c` (add the prior audit's Q1.1-f honest value tag without the rest of Assembly A). This is the lightest possible signal-source addition; it costs little and creates the infrastructure that future migration to Assembly A's value-tag-history trigger would need.

### Why not Path 2 (runner-level conditional) as primary

Path 2 / Assembly D is a real alternative, not a worse version of Path 1. The trade-off is `/decompose`'s spec stays cleaner under Path 2 (no edit there), but `/MVL+`'s runner spec grows. Path 1 keeps the conditional-rule co-located with the discipline whose behavior it modifies, which makes the rule discoverable when reading `/decompose`. Path 2 keeps it co-located with the runner that actually controls invocation, which matches the `disciplines do the thinking; runner does the plumbing` separation principle. Either is defensible. Critique recommended Path 1 because the rule's specification (what "Layer-0-only" means; what "explicit declaration" means) is closer to Decomposition's cognitive territory than to runner orchestration territory; co-locating with `/decompose`'s spec keeps the cognitive specification in one place.

If the user prefers `/decompose`'s spec to stay completely untouched, swap Path 1's Q1.2-F1 (in-discipline) for Q1.2-F3 (runner-level), keep everything else the same.

### Why not Path 3 (do-nothing) as primary

Path 3 is a legitimate option, not a strawman. The audit's verdict was MEDIUM-typical, not failing; 0 NEGATIVE Decomposition outputs across 10 inquiries is real counter-evidence against urgent action; "brushing teeth" disposition supports keeping things stable when no urgent failure exists. The case against Path 3 is that the audit's 8/10 Layer-0-only finding is a concrete observable pattern that Assembly B addresses at very low cost — choosing Path 3 leaves observable ceremony in place when a cheap fix is available.

If the user weights "no urgent failure" more heavily than "cheap fix is available," Path 3 is the right answer. This is a values judgment, not a structural one.

### Why not Path 4 (Honest-conditional / Assembly A) as primary

Path 4 is more evidence-respecting than Path 1 in the long run because it grounds the skip decision in actual per-inquiry value-tag history rather than a structural proxy. But it has a triple chained dependency: the prior audit's Q1.1-f must ship; value-tag history must accumulate across enough inquiries; inquiry-shape vocabulary must exist. None of those are in place yet. Treating Path 4 as primary ships nothing actionable now; it's the right future-state direction, deferred with an explicit revival trigger.

---

## Next Actions

### MUST

- **What:** Add a Form 1 standalone refinement note at Step 1 of `homegrown/decompose/references/decompose.md`. Phrasing: "*Refinement note (applies at Step 1 Perceive Coupling Topology):* Skip-trigger check — if this inquiry's pieces will all be Layer-0 with no cross-piece interfaces (Step 5's Interface Map would have zero entries; Step 6's Dependency Order would be parallel-only), output a minimal decomposition.md (`Skipped: Layer-0-only inquiry; Innovation should consume Sensemaking's SV6 directly`) and exit; else proceed to Step 2." Inherit the `Q1.2-a-mitigated` explicit-declaration-when-skipped requirement from the prior audit's Assembly A.
  - **Who:** A small edit to `/decompose`'s discipline spec; ships as a coordinated edit referencing both this inquiry and the prior audit.
  - **Gate:** Condition-bound — ships when the user accepts Path 1 (Assembly B) as the recommended action.
  - **Why:** Addresses the prior audit's 8-of-10 Layer-0-only observation; reduces perfunctory machinery; preserves Workspace Invariant via the minimal-output-file requirement; corpus-grounded, low-cost, low-risk (phase-fit `desc-machinery`).

### COULD

- **What:** Add Q1.1-c — the prior audit's `Q1.1-f` honest value tag at Step 7 — as a companion edit. (The prior audit's Assembly A recommended this; it is independent of Decomposition's position and helps wherever Decomposition sits.)
  - **Who:** Same coordinated edit to `/decompose`'s spec.
  - **Gate:** Same condition-bound trigger as the MUST item above.
  - **Why:** Creates the signal infrastructure that future migration to Path 4 (Assembly A's value-tag-history trigger) would need; lightweight precondition.

- **What:** Add a small phase-tag note in `/decompose`'s spec (or in this finding's footer) acknowledging that Decomposition's role may evolve as project phase advances (multi-head meta-loop infrastructure; audit-again-with-diversity providing non-meta-design evidence).
  - **Who:** Either inside `/decompose`'s spec as a phase-context note, or in this finding only.
  - **Gate:** Optional add-on; does not gate the MUST item.
  - **Why:** Future readers should know the verdict is phase-calibrated, not universal.

- **What:** Add the corrective-tone Q2 acknowledgments to this finding (already done above in the Finding Summary and Finding sections — keeping this as an explicit MUST/COULD entry for the audit trail).
  - **Who:** This finding.
  - **Gate:** Already in this finding.
  - **Why:** Makes the "decomposition is three operations" framing explicit so future inquiries don't recur to the same collapse.

### DEFERRED

- **What:** Migrate from Path 1 (Layer-0-only trigger) to Path 4 (Honest-conditional / Assembly A — value-tag-history-based trigger).
  - **Gate:** Observable trigger — the prior audit's `Q1.1-f` honest value tag ships AND ≥3 similar-shape inquiries (where shape is a coarse classifier from any emerging inquiry-shape vocabulary; meta-design / application / LOOP_DIAGNOSE / etc.) accumulate value tags.
  - **Why (if revived):** Path 4's trigger is more evidence-respecting in the long run (per-inquiry value-tag history is direct evidence of D's earnedness); the structural Layer-0-only trigger is a proxy that may over-skip or under-skip in non-meta-design corpus.

- **What:** Refine the `Q1.2-T4` candidate trigger ("skip D when S has already named the partition") and consider adopting it alongside Layer-0-only.
  - **Gate:** Observable trigger — Path 1's Layer-0-only trigger ships AND ≥5 inquiries with non-Layer-0 structure but with explicit S-named partition accumulate, allowing comparison of D's value-tag distribution between "S named partition fully (including sub-pieces)" and "S named only top-level partition." If the data supports T4-refined, adopt it as a complement to Layer-0-only.
  - **Why (if revived):** T4 captures a different corpus pattern than Layer-0-only; combined trigger may reduce false-skips and false-runs.

- **What:** Open a separate inquiry on the discipline taxonomy's "pipeline-sequential" reading (strict vs flexible) — the meta-action option that this inquiry's Q3 considered.
  - **Gate:** Observable trigger — only open if 2+ Core disciplines (not just Decomposition) show conditional-skip benefit in their own audits, OR if the user explicitly wants a formal taxonomy validation step beyond empirical evidence from Path 1's run.
  - **Why (if revived):** A taxonomy-level inquiry would validate the flexible reading formally rather than empirically; useful when more disciplines need conditional treatment.

- **What:** Bring multi-head meta-loop forward (the user's "D-FIRST" direction).
  - **Gate:** Observable trigger — sequential meta-loop completes 3 useful chains with explicit stop/continue rationale (per `enes/loop_desing_ideas/meta_loop.md`'s existing deferred-revival gate).
  - **Why (if revived):** Multi-head meta-loop is the project's stated end-goal direction; bringing it forward unlocks the user's D-FIRST framing as a real architectural option.

- **What:** Consider adding a Pre-flight Step 0 to `/decompose` (and possibly to other Core disciplines) that absorbs the conditional check more cleanly than a Step 1 refinement note.
  - **Gate:** Observable trigger — if 2+ Core disciplines develop similar conditional-skip patterns, conduct a cross-discipline review to decide whether Pre-flight Step 0 should be a shared pattern.
  - **Why (if revived):** Pre-flight Step 0 is structurally cleaner than scattered refinement notes; precedent-setting requires cross-discipline review.

---

## Reasoning

### What was killed and why

- **D-FIRST as immediate action (multi-head meta-loop now)** was killed by the multi-head deferral VETO dimension. The deferral gate (sequential meta-loop completes 3 useful chains) is structural, not convention — branch-comparison and merge logic genuinely need sequential-traversal evidence first. Bringing multi-head forward without prerequisite is building before the foundation. The DIRECTION was AFFIRMED (correct end-goal trajectory); the immediate ACTION was killed.

- **D-AFTER-C as a new discipline** was killed by direct duplication of `/navigation`. The mechanism Innovation imagined (read C's output; produce typed sub-paths) is verbatim what `/navigation`'s spec describes. Adding D-AFTER-C would create a cross-cutting overlap where the discipline taxonomy already has Boundary discipline coverage. The user's framing was corrected to acknowledge `/navigation` as the answer.

- **D-REMOVED entirely** was killed by the prior audit's 0-NEGATIVE counter-evidence. Removing what never harms is unjustified; the discipline taxonomy's conservation principle (don't disaggregate working bundles) reinforces this. Some inquiry shapes (the audit's N=2 LOOP_DIAGNOSE and application inquiries) earned MEDIUM with qualitatively different value-shapes — removing Decomposition would lose that coverage.

- **Default-conditional D with override** (the Q1.2-INV inversion) was killed by HIGH stakes plus sample-bias. Inverting the always-rule is an architectural change; the audit's evidence base (10 inquiries, 8 meta-design) is too thin to ground that inversion. The seed extracted: default-conditional is the long-horizon direction if multi-head meta-loop matures and per-shape value-tag data accumulates.

- **Form 2 scattered guidance** (Q1.2-F4) was killed as Step Refinement primitive's anti-pattern. Per `enes/step_refinement.md`'s Three Forms section, Form 2 (scattered) is the pattern to LIFT FROM into Form 1 (standalone), not the pattern to ship. The seed: anchor-link cross-references from Form 1 to other steps achieve the same outcome without scattering.

- **Pre-flight Step 0** (Q1.2-F2) was deferred (not killed outright) as precedent-setting. No other Core discipline has a Pre-flight Step 0; adding one to `/decompose` unilaterally would set a cross-discipline pattern without review. Revival when 2+ Cores need it.

- **Broad-scope meta-action inquiry** (Q3-b — full taxonomy review) was killed as over-scope. Sample bias is too persistent; the cost-benefit is poor; a broad review is appropriate after multiple disciplines show conditional-need pattern, not now.

- **No-acknowledgment inversion** (Q2-INV) was killed because the framing-correction is the inquiry's deliverable. The user's question contained a folk-vocabulary collapse; this finding's job is to correct it. Skipping the acknowledgment loses the inquiry's primary user-facing value.

- **No-artifact inversion** (Q4-INV) was killed because finding.md IS the artifact under the CONCLUDE protocol. Interpreting "no separate artifact" as "no finding" violates the protocol; interpreting it as "no graded-verdict subsection" loses the four required properties (three-sub-question structure, graded verdict, phase-tag, do-nothing baseline).

- **The Q1.2-M3 hybrid maintenance** (both runner notes AND minimal file) was killed as redundant — Q1.2-M2 alone provides the same outcome; M3's belt-and-suspenders adds nothing M2 doesn't already provide.

### What survived and why

- **Path 1 (Assembly B)** survived as primary recommendation. It is corpus-grounded (Layer-0-only is the audit's strongest pattern with 8/10 occurrence); independent of the prior audit's Assembly A (no chained dependencies); phase-fit `desc-machinery` (low risk per Step Refinement primitive's phase-fit precision); preserves Workspace Invariant (discipline writes its canonical output file even when skipping); preserves Core admission rule under the flexible "pipeline-sequential" reading sensemaking adopted.

- **Path 3 (Assembly C, Conservative status quo)** survived as legitimate baseline. The prior audit's MEDIUM-typical verdict (with 0 NEGATIVE) does not force action; the user has a real choice between addressing the audit's findings (Path 1) and accepting them as observation without spec changes (Path 3).

- **Path 2 (Assembly D, Runner-level conditional)** survived as alternative to Path 1. Same skip outcome; trades cleaner `/decompose`-spec for expanded `/MVL+`-runner-spec. Either is defensible.

- **Path 4 (Assembly A, Honest-conditional)** survived as deferred future-state. The triple chained dependency (Q1.1-f ships; signal accumulates; inquiry-shape vocabulary exists) puts it out of immediate reach but its direction is right; revival trigger is explicit.

- **Q2 acknowledgments (both pure and corrective tones)** survived. Tone is user-preference; the substance (D-FIRST is deferred direction; D-AFTER-C is `/navigation`) is constant across tones.

- **Q3-INV (don't open meta-action)** survived because the taxonomy's flexible reading can be validated empirically (if Path 1 ships and works, that's evidence) without a separate inquiry; the formal validation step is optional, not required.

### Contradictions reconciled across the pipeline

- **Exploration found 6 candidate positions; Sensemaking collapsed them into a 3-sub-question structure.** The reconciliation came from the operation-shape ambiguity collapse: positions that named different operations sat at different layers and weren't truly competing alternatives.

- **The audit's verdict (D-CURRENT graded MEDIUM) and the user's question (should D be elsewhere?) had a tension** — the audit said "D earns marginal value where it sits" and the user said "maybe it should sit elsewhere." Sensemaking's three-sub-question split resolved the tension: the audit's verdict applies only to one of the three sub-questions (the intra-MVL+ one); the other two are separate questions with their own answers.

- **Innovation's Q1.2-T4 candidate trigger contradicted itself under self-application** (it would have skipped THIS inquiry's D, eliminating the very partitioning that made the inquiry actionable). Critique resolved this by treating the contradiction as a specification problem: T4's first-pass spec was too coarse; the refined spec ("named at the level downstream pieces operate on, including sub-pieces") doesn't have the contradiction. Both the corpus pattern (S surfaces; D reformats) and the inquiry's actionable output (Q1.2 sub-axes were genuine partitioning beyond what S named) survived; T4 was deferred with the refined spec.

---

## Open Questions

### Monitoring

- **Will Path 1's Layer-0-only trigger fire correctly across future inquiries?** Specifically: across the next 10 inquiries with Path 1 in effect, does the trigger correctly distinguish Layer-0-only inquiries from Layer-1 inquiries, and does the explicit-declaration-when-skipped requirement prevent silent under-decomposition? Observable as the trigger fires (or doesn't) and as Innovation's downstream consumption proceeds without surprises.

- **Will the corpus-typical Decomposition value tag (MEDIUM-typical) shift as Path 1 ships?** If Path 1 reduces ceremony in the 8/10 Layer-0-only cases by skipping D, the remaining D-runs should be the cases where D earns more. Expected effect: the value-tag distribution in remaining D-runs should shift toward MEDIUM-leaning-HIGH. Observable after ≥10 future D-runs with Path 1 in effect.

- **Will Q1.2-T4-refined accumulate enough data to validate or falsify it?** Specifically: among future inquiries that pass Layer-0-only (D runs), how many of them have S's SV6 fully partitioned including sub-pieces? Of those, what's D's value-tag distribution? If T4-refined would over-skip (D earned MEDIUM+ in those cases despite S naming sub-pieces), it stays deferred; if T4-refined would correctly skip (D earned LOW in those cases), it becomes a candidate for adoption.

### Blocked

- **Whether the multi-head meta-loop should be brought forward.** Cannot be answered until sequential meta-loop matures (per `enes/loop_desing_ideas/meta_loop.md`'s prerequisite gate). This finding affirms the direction without forcing the action; the deferred separate inquiry on bringing-forward fires when the prerequisite is met.

- **Whether the always-pipeline rule itself should be loosened across all five Core disciplines (not just Decomposition).** Cannot be answered until 2+ Core disciplines show conditional-need pattern in their own audits; only Decomposition has been audited so far.

### Research Frontiers

- **Inquiry-shape vocabulary as a cross-cutting primitive.** The prior audit and this inquiry both relied implicitly on a coarse inquiry-shape classifier (meta-design / LOOP_DIAGNOSE / application / etc.) that doesn't yet exist as a settled primitive. Multiple pieces of future architectural work would benefit from a shared vocabulary. No known forced path; emerges organically as Path 1 ships and inquiry-shape signals accumulate. Listed in this finding's Research Frontiers because the path is currently exploration territory.

- **Per-inquiry-shape Decomposition value-shape variance.** The prior audit's N=2 non-meta-design inquiries (LOOP_DIAGNOSE; application) showed qualitatively different value-shapes from the 8 meta-design inquiries. Whether this variance is real (different shapes give different D-earnings) or sample noise is currently open. Resolution requires audit-again-with-diversity, which is itself in the prior audit's DEFERRED list.

### Refinement Triggers

- **Path 1's Layer-0-only trigger** re-opens to T4-refined (or hybrid Layer-0-only OR T4-refined) if T4-refined accumulates enough data to validate (≥5 inquiries with non-Layer-0 structure and S-named-full-partition show D earned LOW-typical).

- **Path 1's "Layer-0-only" specification** re-opens to a graded coupling-density threshold (Q1.2-T1 / Q1.2-d-from-prior-audit) if Path 1 produces ≥3 ambiguous Layer-0-vs-Layer-1 cases where the binary trigger felt too coarse.

- **The "pipeline-sequential = runs sequentially when it runs" reading** of the discipline taxonomy's Core admission rule re-opens (via the deferred Q3-a meta-action inquiry) if 2+ Core disciplines show conditional-skip benefit, OR if the user explicitly wants a formal taxonomy validation beyond empirical evidence.

- **The verdict's "MEDIUM-typical" claim about Decomposition's value** re-opens if audit-again-with-diversity (deferred in the prior audit's recommendations) produces a value-tag distribution that shifts by ≥20 percentage points on any tag bucket OR introduces a NEGATIVE D-output, which the current corpus has 0 of.

- **The verdict scope (corpus-internal, calibrated for current project phase)** re-opens after multi-head meta-loop infrastructure ships. The right answer for D's position may shift once multi-head exists; this finding's verdict is explicitly phase-tagged.

---

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
Maybe decomposition shouldnt the after sensemaking? maybe decomposition should be done at the very beginnign in order to decompose the input query into pieces? so each piece can have their own loop?

Or maybe it shuld run after critique to produce subpaths of what can be run next with MVL ?

My point is this , we included decomposition to mvl+ but maybe that was wrong decision? and it belongs to somewhere else or different kind of logic?

Or this is wrong? and actually decomposition helped a lot of inquiries samples to be better?
```

</details>
