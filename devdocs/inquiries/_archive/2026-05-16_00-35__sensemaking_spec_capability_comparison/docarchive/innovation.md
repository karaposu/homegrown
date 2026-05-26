# Innovation — Sensemaking Spec Capability Comparison

## User Input

```
/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-16_00-35__sensemaking_spec_capability_comparison/_branch.md
```

## Seed

Sensemaking stabilized the verdict-space to V1/V2/V3 (full promote / selective promote / keep workshop). Decomposition's Q10 asked "what promotion strategy fits the user's context?" Innovation's job: **expand the verdict candidate space beyond V1/V2/V3 by applying the 7 mechanisms**, then test each survivor.

## Direction (Intuition Signals)

- **Context.** The project's safety substrate, regression-detection gap, archived_skills/ snapshot mechanism, and `_problem.md` suffix convention are all in cognitive proximity (per the user's auto-memory and the README2.md material). These adjacent concepts shape which combinations and absences are visible.
- **Valuation.** The user's recent work has emphasized self-contained discipline specs and clean separation between live runtime and meta-layer concerns. This shapes the "what feels important" signal toward verdicts that respect the live/workshop distinction rather than collapsing them naively.
- **Motivation.** The user invoked /MVL+ explicitly, signaling they want a structured answer beyond their initial sense that the draft might be better. They want the search space surveyed, not just the obvious answer confirmed.

---

## Phase 2 — Generate (apply all 7 mechanisms)

### 1. Lens Shifting (Framer)

Current evaluation frame: "spec capability comparison; the question is promote/archive/merge for these two files."

**LS-Generic.** Reframe under "spec evolution as a project capability." The live+workshop pair *is itself* the capability — the workshop is where capability develops; the live is where it stabilizes. The decision then isn't promote-or-archive; it's **codify the workshop pattern as a spec-evolution protocol**. The two-file structure becomes the answer rather than the problem.

**LS-Focused.** Reframe under "current-run capability only" — strip out spec-meta concerns. Under this lens, only operational additions matter (firing schedule + Pattern A/B/C + Phase cross-refs); the 4 spec-meta subsections (Scope, Self-applicability, Step 5 conformance, Hooks extensibility) become deferrable.

**LS-Contrarian.** Reframe under "what does NOT promoting teach the project?" The draft contains an instructive example of how meta-inspection can over-elaborate. Keeping both files unchanged becomes a *teaching artifact* — a visible cautionary case about spec growth. Don't promote; reference both.

### 2. Combination (Generator)

Concepts in immediate context (per scope-fidelity: narrow inquiry scope = local-context-as-primary):

- the two spec files
- the project's `archived_skills/<sha>-hg/` snapshot mechanism
- git tags
- the Layer Commitment trigger (meaning / structural / process)
- the "dead-code-index" skill in the codebase
- the user's safety-substrate concerns

**CB-Generic.** *(Promotion) + (git tag)* = **V1 + create a tagged release at the swap point**. This makes V1's reversibility one git command (`git checkout <tag>`) instead of a multi-step revert.

**CB-Focused.** *(Firing schedule) + (Phase cross-refs)* = **operationalization patch**. Promote only the two structural elements that fire at runtime; leave the Pattern taxonomy as well as the 4 spec-meta subsections in the workshop. This is a stricter V2.

**CB-Contrarian.** *(Workshop draft) + (dead-code-index)* = treat the workshop additions as **"dead capability"** — capability that exists in source but never runs at runtime. Index it in `devdocs/dead_code/` or similar so the project tracks its unconnected-capability surface.

### 3. Inversion (Framer)

Current belief: "Promotion adds capability."

**IV-Level-1 (Generic component-level).** Inverted: "Promotion subtracts capability" — adding 64 spec lines costs context that may exceed the capability gain in tight-context sessions. **Implication**: maintain workshop; do not promote; document the operational additions as practitioner notes outside the spec.

**IV-Level-2 (System-level — invert again).** Inverted: "The two-file workshop pattern IS the capability." Promoting collapses two files into one and *destroys the parallel-maintenance surface* that enables continuous spec evolution. The capability under threat is evolvability itself. **Implication**: codify the pattern (converges with LS-Generic and V4 below).

**IV-Contrarian.** Invert the file relationship: "Delete the live, rename draft to live." No file-swap, no merge — just rename `sensemaking_problem.md` → `sensemaking.md` (after deleting the old one) and let git history preserve the previous live. The cleanest single-file end state.

### 4. Constraint Manipulation (Framer)

Current constraints: (a) file-level promotion only; (b) preserve git history; (c) preserve runtime stability across promotion; (d) human-driven decision.

**CM-Generic.** *Remove* constraint (a) — allow section-level cherry-picking. This is what enables V2 (selective promote).

**CM-Focused.** *Add* constraint: "any promotion must be reversible via a single git command." This biases toward V1 (file swap, atomic) over V2 (multi-section merge, requires multi-step diff). It rules out V2 in its current form unless the merge ships as a single commit.

**CM-Contrarian.** *Add* constraint: "any runtime-cognition-level new claim must ship with at least one canary test case demonstrating the new behavior." Per the project's safety substrate philosophy (per the user's auto-memory: regression detection is a known gap). Under this constraint, **V1 is blocked until canary tests exist** for the firing schedule's behavior. This sequences spec capability against safety substrate.

### 5. Absence Recognition (Generator)

What should exist that doesn't?

**AR-Gap-level (Generic).** Missing: **a regression check** that runs `/sense-making` on a saved-good input before and after the spec change and compares output. Today, promotion is a leap of faith — there's no automated drift detection. The project's auto-memory explicitly names this as Family II buildable now.

**AR-Gap-level (Focused).** Missing: **a single-source-of-truth indicator for which file is live.** Both `sensemaking.md` and `sensemaking_problem.md` claim "loaded by SKILL.md at Step 0" in their loading notes; only one is true. A practitioner reading the draft would believe it's live. The indicator could be: a `// LIVE` or `// WORKSHOP` marker at top of each file, or a `discipline.json` registry.

**AR-Gap-level (Contrarian).** Missing: **an archive policy.** When a workshop is promoted (or abandoned), the prior version should be snapshotted to `archived_skills/<sha>-hg/` per the project's existing safety substrate. The Sensemaking V1/V2/V3 verdicts don't mention this step.

**AR-Redesign-level.** Missing: **a `discipline.json` config** that names the active reference file (decoupling SKILL.md from the hardcoded path). With this, promotion becomes a config bump rather than a file rename. The current design hardcodes the path in SKILL.md, which means promotion requires editing two files (the rename + any path references). A config layer cleans this up.

### 6. Domain Transfer (Generator)

Where else has the live-vs-workshop coexistence problem been solved?

**DT-Software (feature flags).** Production deploy + experimental flag. The new code ships but is gated; the flag flips after evidence accumulates. **Transfer**: ship the draft's firing schedule behind a flag in `_branch.md` (e.g., `meta_inspection_firing: enabled`); off by default; collect telemetry over N runs; promote (= flip default) once evidence accumulates.

**DT-Science (preprint vs published).** Preprint coexists with peer-reviewed; both are readable but only one is canonical. **Transfer**: formalize the `_problem.md` suffix as "preprint status" — explicitly readable, explicitly non-canonical, explicitly inviting iteration. Promotion = a "publication" event with versioning.

**DT-Compilers (experimental optimization flags).** Optimizations land behind `-fexperimental-X` flags; promoted to default after N+ confirmed beneficial benchmarks. **Transfer**: same pattern as DT-Software but applied to disciplines — a `--experimental-firing-schedule` flag in the inquiry's `_branch.md` or the runner.

**DT-Wikipedia (talk pages vs articles).** Article is the canonical surface; talk page is the workshop. Talk-page edits are visible; article changes require consensus. **Transfer**: split each discipline into `references/<name>.md` (canonical, like the article) + `references/<name>_workshop.md` (preprint/talk-page, like the talk page). Promotion is a merge-with-discussion event.

### 7. Extrapolation (Generator)

Current trend: the draft has 4 follow-up edits in ~3 weeks; the live has 0 since its initial commit.

**EX-1-year.** If this rate continues: the draft accumulates ~70 edits while the live stays untouched. The workshop effectively becomes the canonical thinking surface even without promotion. **Implication**: at some point, declining to promote becomes equivalent to letting the workshop drift away from the runtime — a hidden divergence.

**EX-5-years.** The workshop pattern proliferates across all 11 disciplines (each acquires a workshop variant during its own evolution). Maintenance becomes a meta-problem: which workshop is ready for promotion? How do they relate? The project formalizes a spec-evolution protocol or collapses to a single-file convention with git-branch-based drafts. **Implication**: this verdict is a **precedent-setter** — the choice today shapes the convention.

**EX-10-years.** Either: (a) the workshop pattern becomes the project's spec-evolution convention with explicit lifecycle states (workshop → preprint → live → archive), or (b) the project moves to a single-file-with-branches model where workshop work happens on a feature branch. The 11-discipline scale forces one or the other. **Implication**: today's decision should be made knowing it sets a precedent for the other 10 disciplines.

---

## Phase 3 — Test (apply 5 tests per survivor + assembly + axis coverage)

### Verdict candidate consolidation

Mechanisms produced 18 raw outputs. Many converge. Consolidated into 8 distinct verdict candidates:

| Verdict | Description | Originating mechanisms |
|---|---|---|
| **V1** | Full promote (file swap) | Sensemaking default; CB-Generic adds git tag; IV-Contrarian provides "delete + rename" tactic; converges in 3 |
| **V2** | Selective promote (3 substantive elements: firing schedule + Pattern A/B/C + Phase cross-refs) | Sensemaking option; CB-Focused refines to operationalization-only subset; CM-Generic enables; converges in 3 |
| **V3** | Keep workshop (no action) | Sensemaking option; LS-Contrarian provides "teaching artifact" framing; converges in 2 |
| **V4** | Codify the workshop pattern as a spec-evolution protocol | LS-Generic; IV-Level-2 (system-level inversion); EX-5-years; DT-Science (preprint); DT-Wikipedia; **converges in 5 mechanisms — strongest convergence signal in this run** |
| **V5** | Promote with canary precondition (block until regression tests exist) | CM-Contrarian; AR-Gap (regression check); converges in 2 |
| **V6** | Promote with archival step (snapshot the live before swap) | AR-Contrarian (archive policy); compatible with V1/V2 |
| **V7** | Configurability via feature-flag (firing schedule opt-in) | DT-Software; DT-Compilers; AR-Redesign (`discipline.json`); converges in 3 |
| **V8** | Add a LIVE/WORKSHOP indicator to each spec file (decouples decision from format) | AR-Gap-Focused; small standalone improvement; compatible with all above |

### Tests per survivor

| Verdict | Novelty | Scrutiny survival | Fertility | Actionability | Mechanism independence | Disposition |
|---|---|---|---|---|---|---|
| **V1** | Low (Sensemaking default) | Survives — additive, no regressions; strongest counter (context cost) is small | Medium — closes this case but doesn't open new territory | HIGH (one git operation) | HIGH (Sensemaking + CB-Generic + IV-Contrarian) | **ACTIONABLE** |
| **V2** | Low (Sensemaking option) | Survives — but multi-section merge has its own complexity | Medium | MEDIUM (multi-step merge) | MEDIUM (Sensemaking + CB-Focused + CM-Generic) | **ACTIONABLE** |
| **V3** | Low (Sensemaking option) | Survives if context budget is tight or evidence is insufficient; counter: "you've decided the draft is more capable; why not act?" | Low (defers the question) | LOW (no action) | LOW–MEDIUM (Sensemaking + LS-Contrarian only) | **ACTIONABLE-as-deferral** |
| **V4** | MEDIUM-HIGH — reframes the question from "what to do with these files" to "what spec-evolution pattern does the project want" | Survives initial scrutiny. Counter: "no other discipline currently has a workshop file — this is a one-off; you're over-generalizing from N=1." Partial mitigation: extrapolation suggests other workshops are coming. Need to verify | HIGH — opens spec-evolution-protocol design; sets precedent | MEDIUM — requires a follow-up inquiry on the protocol | **HIGH (5 mechanisms converge)** | **DEFERRED with revival trigger: when a second discipline acquires a workshop variant, OR when the user explicitly initiates a spec-evolution-protocol inquiry** |
| **V5** | MEDIUM — sequences spec capability against safety substrate | Survives — aligned with project's auto-memory (safety substrate is a Family II priority). Counter: "canary tests don't exist yet; this blocks indefinitely; the actual capability gain is real now." | HIGH — couples this verdict to the canary-test infrastructure work | LOW (requires upstream infra) | MEDIUM (CM-Contrarian + AR-Gap) | **DEFERRED with revival trigger: when canary infrastructure ships** |
| **V6** | LOW — small operational refinement | Survives | Low | HIGH (one `cp` command + git commit) | Single mechanism (AR-Contrarian) | **ACTIONABLE as modifier to V1/V2** (not a standalone verdict) |
| **V7** | HIGH — opt-in / gradual rollout is novel for this project's discipline specs | Survives initial scrutiny. Counter: "introduces complexity to SKILL.md and `_branch.md` that doesn't pay back at current scale." | HIGH — opens "discipline configurability" as a category, applicable beyond this case | LOW (requires non-trivial SKILL.md or runner changes) | HIGH (DT-Software + DT-Compilers + AR-Redesign) | **RESEARCH FRONTIER** |
| **V8** | LOW — small operational improvement | Survives | Medium — applies to every discipline | HIGH (add one header line per spec file) | Single mechanism (AR-Gap-Focused) | **ACTIONABLE as parallel small improvement, independent of V1-V7** |

### Assembly check

Examining survivors together, what architecture emerges?

The 8 candidates partition into three layers:

```
Layer 1 (immediate action for THIS case):
   V1, V2, V3 — pick one and act on the two files now.

Layer 2 (pattern-level — applies to spec evolution across the project):
   V4 — codify the workshop pattern as a spec-evolution protocol.

Layer 3 (infrastructure — buildable independently):
   V5 — canary regression tests
   V7 — feature-flag / discipline configurability
   V8 — LIVE/WORKSHOP indicator
   V6 — archival step (small, modifier to V1/V2)
```

**Emergent assembly:** **V1 + V6 + V8 + V4-deferred + V5-deferred** — act now on this case (V1 with archival V6 and a LIVE indicator V8 to prevent confusion); defer V4 (codify pattern) until a second discipline triggers it; defer V5 (canary) to the safety-substrate infrastructure track. V7 stays at research frontier.

This assembly is more valuable than V1 alone because it (a) ships the current-case capability, (b) sets up the conditions under which the pattern-level question can be resolved later, and (c) doesn't block on infrastructure that isn't built yet.

### Axis coverage check

Orthogonal axes in the problem space:

| Axis | Variants represented |
|---|---|
| **ACTION** (promote / merge / archive / nothing) | V1 (promote), V2 (merge), V3 (nothing), V6 (archive) — ✓ covered |
| **SCOPE OF ACTION** (file / section / per-element) | V1 (file), V2 (section), V6 (subset implied) — ✓ covered |
| **TIMING** (now / conditional / deferred) | V1/V2/V6 (now), V5 (conditional), V3/V4 (deferred) — ✓ covered |
| **META-LEVEL ENGAGEMENT** (this case / codify pattern / build infrastructure) | V1/V2/V3 (case), V4 (codify), V5/V7/V8 (infra) — ✓ covered |
| **REVERSIBILITY** (atomic / multi-step) | V1 (atomic, especially with CB-Generic tagging), V2 (multi-step) — ✓ covered |
| **INFRASTRUCTURE PRECONDITION** (none / canary / feature-flag / indicator) | V1/V2/V3 (none), V5 (canary), V7 (flag), V8 (indicator) — ✓ covered |

All 6 axes have ≥1 variant. **Axis coverage: complete.**

### Failure-mode self-check

- **Premature evaluation:** No — generation came before testing; tests applied after all mechanisms produced.
- **Single-mechanism trap:** No — all 7 mechanisms applied.
- **Early frame lock:** No — V4 reframed the question (workshop pattern); V7 reframed again (configurability).
- **Innovation without grounding:** No — all 8 survivors tested against 5 tests; dispositions assigned.
- **Mechanism exhaustion:** No — all mechanisms produced at least one survivor.
- **Survival bias:** Partial flag — V1 (the comfortable, default) survived easily; tested deliberately whether V7 (the uncomfortable, novel) was being rejected for novelty vs. infeasibility. V7's RESEARCH FRONTIER disposition reflects genuine infeasibility at current project scale, not discomfort.

---

## Telemetry

- **Generators applied:** 4 / 4 (Combination, Absence Recognition, Domain Transfer, Extrapolation)
- **Framers applied:** 3 / 3 (Lens Shifting, Constraint Manipulation, Inversion)
- **Mechanism coverage:** **FULL** (7/7)
- **Convergence:** **YES** — 5 mechanisms (LS-Generic + IV-Level-2 + EX-5-years + DT-Science + DT-Wikipedia) converge on V4 (codify workshop pattern); 3 mechanisms (DT-Software + DT-Compilers + AR-Redesign) converge on V7 (configurability)
- **Survivors tested:** 8 / 8
- **Dispositions:** ACTIONABLE (V1, V2, V3, V8), ACTIONABLE-modifier (V6), DEFERRED with revival trigger (V4, V5), RESEARCH FRONTIER (V7)
- **Failure modes observed:** None (Survival Bias was flag-checked and resolved)
- **Overall:** **PROCEED** — coverage full, convergence strong (5- and 3-mechanism), all survivors tested

## Hand-off to Critique

Critique should subject the 8 candidates to adversarial testing on a multi-dimensional fitness landscape. The decisive comparisons to surface:

1. **V1 vs V2** — does the merge complexity in V2 actually exceed the context savings? Critique should price the merge labor.
2. **V1 vs V3** — does deferring lose more than it saves? Critique should test whether "keep workshop" survives the question "you've decided draft is more capable; why not act?"
3. **V4's "one-off vs precedent" tension** — Critique should stress-test whether N=1 (this case) is enough evidence to start codifying a pattern, OR whether codification should wait for a second discipline to acquire a workshop.
4. **V5's blocking risk** — Critique should test whether deferring to canary infrastructure is principled sequencing or hiding behind unbuilt prerequisites.
5. **V6 + V8 as compatible modifiers** — Critique should verify these don't conflict with V1/V2.
6. **The emergent assembly (V1+V6+V8 + V4-deferred + V5-deferred)** — Critique should test whether this assembly is genuinely emergent value or a kitchen-sink superset.
