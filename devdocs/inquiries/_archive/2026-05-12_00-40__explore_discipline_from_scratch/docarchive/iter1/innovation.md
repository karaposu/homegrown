# Innovation — skeleton shapes for `/explore`

## User Input
`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-12_00-40__explore_discipline_from_scratch/_branch.md`

Prior outputs consumed: `exploration.md`, `sensemaking.md`, `decomposition.md`. Decomposition partitioned the SV6 skeleton into 5 pieces (P1 Identity, P2 Components, P3 Process, P4 Quality, P5 Output) and flagged shape variants per piece as the innovation seed.

---

## Seed

> A redefined `/explore` discipline whose unit is the *existence claim*, that produces a *confidence-tagged map* with optional low-commitment *relevance + adjacency* annotation, has a 5-entry NOT-list, supports two modes + a boundary-discovery sub-phase, and is *logically upstream* of all neighbors. **What concrete SKELETON SHAPES could realize this, and which survives scrutiny?**

**Seed type:** Question + Gap. The user explicitly asked for a skeleton; the decomposition explicitly named multiple variant axes.

**Direction (intuition):** the user wants a skeleton that is (a) **cognitively clear** — formalizes ONE cognitive operation, not a procedure mash-up; (b) **operationally usable** — runnable in MVL+ without subagent magic; (c) **clearly bounded against neighbors** — NOT-list is enforced, not aspirational. The "from scratch" framing licenses departure from the existing 6-component shape if a better one emerges.

---

## Phase 2 — Generate (Seven Mechanisms × 3 Variations Each)

### 1. Lens Shifting (Framer)

- **Generic:** Under what conditions is a *minimal* skeleton right? Conditions = many cheap inquiries where speed matters and territories are pre-bounded. → Yields **SK-MIN candidate** (scan + probe + frontier only).
- **Focused:** Under what conditions does the existence-claim framing collapse? If "existence claim" cannot be distinguished from sense-making's anchor extraction, `/explore` reduces to sense-making's Phase 0. → Yields **SK-FOLD candidate** (no separate `/explore`).
- **Contrarian:** Under conditions where territory boundaries are *never* pre-specified, boundary-discovery becomes primary and scan-signal-probe becomes secondary. → Yields **SK-BD-FIRST candidate** (boundary-discovery as primary phase).

### 2. Combination (Generator)

- **Generic:** Combine *existence claim* + *anatomy's Telemetry layer* → existence claims emitted as streamed events; map is a projection over the event log. → Yields **SK-OBS candidate**.
- **Focused:** Combine *F-weak anti-drift* + *anatomy's Frontier output* → **drift signals become Frontier output, not failures to suppress.** Drift is escalation to sense-making, not silent suppression. This is a NEW operational primitive.
- **Contrarian:** Combine `/explore` + `comprehend's CV1 Structural` → "explore = comprehend stopped at depth = structural." → Yields **SK-FOLD-2 candidate** (replaces /explore with `/comprehend --depth=structural`).

### 3. Inversion (Framer)

- **Level 1 (component-level):** Assumption: `/explore` PRODUCES the map. Invert: `/explore` CONSUMES a pre-existing map and EXTENDS it. Cross-invocation re-explore as default.
- **Level 2 (system-level):** Assumption: `/explore` is a discrete-invocation cognitive operation. Invert: `/explore` is a state-machine running continuously across the inquiry's lifetime. → Yields **SK-PERSISTENT candidate**.
- **Level 3 (root-cause-level):** Assumption: items pre-exist before being claimed. Invert: items come into existence *by being claimed*. The act of mapping CREATES inquiry-relevant entities. → Yields the philosophical reframing: `/explore` = world-construction at the inquiry's edge. *(Useful as framing, not as an alternative skeleton — it underwrites the upstream-precondition claim already in SV6.)*

### 4. Constraint Manipulation (Framer)

- **Generic (add constraint "one-shot components"):** Each component must be one-shot (no internal iteration). Resolution management becomes the iteration controller; other components become pure functions. Skeleton becomes operationally clean for orchestration. → Refinement to any candidate shape.
- **Focused (remove constraint "annotations are optional"):** Force every existence claim to carry relevance + adjacency tags. → Yields a more rigorous **SK-FORCED-TAGS variant** — pushes operational discipline at the cost of token weight.
- **Contrarian (add constraint "machine-readable output"):** Output is JSON-shaped typed records, not free-form markdown. → Yields part of **SK-OBS**.

### 5. Absence Recognition (Generator)

- **Generic gap:** The decomposition specifies how mode/entry/sub-phase are *detected from input* but never formalizes the INPUT CONTRACT itself. **Missing piece:** typed input contract (territory specification, purpose, prior map if any, depth target). → Yields **SK-STD+ Input Contract addition**.
- **Focused gap:** The "first scan" has special obligations (unweighted, must cover surround layer in layered territories) but isn't named as a distinct primitive. **Missing piece:** "first scan" as a typed phase. → Refinement to any shape that includes scan.
- **Redesign-level gap:** If `/explore` were built from scratch today, would it include a TYPED EXISTENCE-CLAIM SCHEMA at the data level (not just at the markdown-section level)? **Missing piece:** existence-claim as a typed record `{territory, region, item, confidence, claim_type ∈ {present, absent, inferred}, relevance?, adjacent_items?}`. → Yields **SK-STD+ Schema addition**.

### 6. Domain Transfer (Generator)

- **Generic (Cartography):** Maps have *legend + scale + projection + accuracy*. Transfer: `/explore`'s output should include legend (annotation semantics), scale (resolution level), projection (region organization), accuracy (confidence per region). → Adds 4 output sections.
- **Focused (Library / archive science):** Cataloging uses *controlled vocabularies + classification + access metadata*. Transfer: typed claim categories + region classification + source confidence. → Reinforces the Existence-Claim Schema from absence recognition.
- **Contrarian (Reconnaissance):** Military recce distinguishes *initial-recce (low-commitment broad) + pre-contact (signal-driven) + post-iteration assessment (after consumers act, re-survey)*. Transfer: three named operational phases per mode, including a post-iteration update mode where `/explore` re-confirms absences after downstream disciplines have used the map. → Yields **SK-LAYERED candidate**.

### 7. Extrapolation (Generator)

- **Generic (1-year horizon):** Cross-invocation memory becomes common. `/explore` must support delta-update semantics. → Reinforces SK-STD+ + a delta-update interface.
- **Focused (Level 3+ autonomy per `enes/desc.md`):** `/explore` must distinguish DISCOVERIES (new items) from REVISITS (re-confirmations). Telemetry must track discovery-to-revisit ratio as a quality indicator. → Adds discovery-vs-revisit telemetry.
- **Contrarian (meta-loop with parallel inquiries):** When sibling inquiries overlap territories, `/explore` must expose a TERRITORY-MERGE contract. → Yields **SK-MERGE-CONTRACT addition** to SK-STD+ for future meta-loop integration.

---

## Phase 3 — Test

### Candidate consolidation (post-generation)

| Tag | Shape | Source mechanisms |
|---|---|---|
| **SK-MIN** | 3 components (scan, probe, frontier), 2 annotations (existence + confidence), 1 mode (artifact), no sub-phase | Lens Shifting (generic) + Constraint Manipulation (focused) |
| **SK-STD** | 6 components, 5 annotations, 2 modes + boundary-discovery sub-phase as preflight check, 9 failure modes (6 baseline + 3 drift-related), 3 convergence criteria + jump scan + anti-drift | Direct from SV6 (default baseline) |
| **SK-STD+** | SK-STD + typed Input Contract section + typed Existence-Claim Schema + Drift-as-Escalation (drift → Frontier output, not suppression) | Combination (focused) + Absence (generic + redesign-level) + Domain Transfer (focused) + Extrapolation (generic) |
| **SK-LAYERED** | SK-STD with three named operational phases per mode (initial-recce / pre-contact / post-iteration assessment) | Domain Transfer (contrarian — reconnaissance) |
| **SK-MAX** | SK-STD+ everything: cartography legend/scale/accuracy + library controlled vocabulary + recce phases + forced-tags + merge contract + discovery-vs-revisit telemetry | Combination of multiple absence + domain-transfer + extrapolation outputs |
| **SK-3MODE** | SK-STD but boundary-discovery elevated from sub-phase to a third mode | Sensemaking ambiguity 4 carry-forward + Inversion level 2 |
| **SK-OBS** | SK-STD with streamed event-log output; map is a projection | Combination (generic) + Constraint Manipulation (contrarian) |
| **SK-PERSISTENT** | `/explore` as continuous state-machine, not discrete invocation | Inversion level 2 |
| **SK-FOLD / SK-FOLD-2** | `/explore` folded into sense-making Phase 0 or comprehend CV1 | Lens Shifting (focused) + Combination (contrarian) |
| **SK-BD-FIRST** | Boundary-discovery as PRIMARY phase, scan-signal-probe as secondary | Lens Shifting (contrarian) |

### Five-test cycle on each candidate

| Candidate | Novelty | Scrutiny | Fertility | Actionability | Mechanism Indep. | Disposition |
|---|---|---|---|---|---|---|
| **SK-MIN** | LOW (close to existing minimal) | MEDIUM (fails for possibility + boundary-undetermined cases) | LOW | HIGH (cheap to implement) | MEDIUM | **KILL** — doesn't honor F-weak or boundary-discovery; doesn't handle conceptual territories. Drops named pieces P2's relevance/adjacency layers and P3's possibility mode. |
| **SK-STD** | MEDIUM (refinement of existing with new anti-drift, sub-phase, NOT-list) | HIGH (matches SV6; covers all decomp pieces) | MEDIUM | HIGH | HIGH (lens + constraint + extrapolation all support it) | **SURVIVE** — ACTIONABLE. The default winner. |
| **SK-STD+** | MEDIUM-HIGH (Input Contract + Schema + Drift-as-Escalation are new) | HIGH | HIGH (typed schema opens automation; drift-as-escalation closes a real feedback loop) | MEDIUM (requires schema commitment; needs calibration) | HIGH (3 mechanisms converge) | **SURVIVE** — DEFERRED with revival trigger: revival when project calibration enables typed-schema commitment AND a downstream consumer exists for drift-as-escalation. |
| **SK-LAYERED** | MEDIUM (recce-phases framing is novel) | MEDIUM (third phase = post-iteration update conflates with cross-invocation re-explore) | MEDIUM | MEDIUM | LOW (only one mechanism produces it) | **REFINE** — keep the post-iteration assessment idea as an OPTIONAL mode within SK-STD or SK-STD+; do not promote whole shape. |
| **SK-MAX** | HIGH (many novel elements) | MEDIUM (over-engineered for current usage; many elements have no current consumer) | HIGH | LOW (too heavy for MVL+ invocation) | MEDIUM | **RESEARCH FRONTIER** — preserve as future direction; not actionable now. |
| **SK-3MODE** | LOW (refactor of SK-STD's sub-phase) | MEDIUM (depends on frequency of boundary-undetermined inquiries) | LOW | HIGH | LOW (only sensemaking carry-forward) | **DEFERRED with revival trigger** — sensemaking flagged this MEDIUM-confidence; revival if 3+ future inquiries have territory-undetermined at invocation time. |
| **SK-OBS** | HIGH (event-stream framing is new in this project) | MEDIUM (departs from homegrown's markdown norm) | MEDIUM | LOW (no current runner consumes streamed events) | LOW (only combination produces it) | **KILL** — incompatible with MVL+'s file-output contract. |
| **SK-PERSISTENT** | HIGH (continuous state-machine) | LOW (breaks MVL+'s discrete-invocation contract; not compatible with `_state.md` per-discipline handoff) | HIGH (if architecture changes) | LOW (no current architecture) | LOW | **KILL** — structural mismatch with runner contract. (Survival bias check: was this killed because uncomfortable or because incompatible? Verified incompatible: MVL+ requires discrete output files per discipline; persistent state breaks that contract.) |
| **SK-FOLD / SK-FOLD-2** | HIGH (eliminates a discipline) | LOW (conflates surfacing-into-view with modeling-once-named; breaks upstream-precondition property) | LOW | LOW | LOW | **KILL** — structural boundary collapse. (Survival bias check: verified structural; sense-making operates on already-surfaced material per its own definition.) |
| **SK-BD-FIRST** | HIGH (inverts primary/secondary) | LOW (boundary-undetermined inquiries are not the common case; making them primary mis-shapes the discipline) | LOW | LOW | LOW | **KILL** — wrong frequency assumption; should remain a sub-phase. |

### Assembly check

Survivors after individual testing: **SK-STD** (ACTIONABLE), **SK-STD+** (DEFERRED). Plus REFINE notes for SK-LAYERED and DEFERRED for SK-3MODE.

What emerges from combining SK-STD survivors + SK-STD+ additions + SK-LAYERED's post-iteration-update?

**Emergent assembly: "SK-STD as default + tiered upgrade path."**

SK-STD is the default skeleton that ships now. SK-STD+'s typed Input Contract + Existence-Claim Schema + Drift-as-Escalation are *promotable additions* that activate when project calibration reaches the right state. SK-LAYERED's post-iteration-update is *one additional optional mode* that activates when a downstream discipline (sensemaking, comprehend) hints at regions that warrant absence re-confirmation. SK-3MODE is a *carry-forward variant* that critique should re-test.

This isn't a fourth candidate; it's the **roadmap** for evolving SK-STD into SK-STD+ as the project matures. The emergent value: a skeleton that ships now without overcommitting, with a clear evolution path that doesn't require re-architecture.

### Axis coverage check

Orthogonal axes in the candidate space:

| Axis | Variants generated | Status |
|---|---|---|
| **A1: Component scope** | minimal (SK-MIN) / standard (SK-STD) / maximal (SK-MAX) / inverted (SK-BD-FIRST) | Covered |
| **A2: Output form** | markdown (SK-STD) / streamed events (SK-OBS) / typed records (SK-STD+) | Covered |
| **A3: Invocation mode** | one-shot (SK-STD, SK-STD+) / persistent state (SK-PERSISTENT) | Covered; persistent KILLED structurally |
| **A4: Sub-phase exposure** | preflight check (SK-STD) / first sub-step (SK-LAYERED) / separate mode (SK-3MODE) / nonexistent (SK-MIN) | Covered |
| **A5: Boundary against neighbors** | strict NOT-list with anti-drift (SK-STD) / folded with neighbor (SK-FOLD) | Covered; fold KILLED structurally |

All five axes have at least one variant. Axes 2, 3 have killed variants — but the kills were on structural-mismatch grounds, not on inadequate testing. Axis coverage is adequate.

### Convergence signal

- **SK-STD**: convergent from 3+ mechanisms (lens-shifting general case + constraint-manipulation runnability + extrapolation maturity gate). HIGH convergence.
- **SK-STD+ Input Contract addition**: convergent from absence (gap) + combination (Telemetry framing) + extrapolation (delta-update). MEDIUM-HIGH convergence.
- **SK-STD+ Existence-Claim Schema**: convergent from absence (redesign-level) + domain-transfer (library science) + combination (typed records). MEDIUM-HIGH convergence.
- **SK-STD+ Drift-as-Escalation**: convergent from combination (focused) + absence (alignment with anatomy's Frontier layer) + extrapolation (Level 3+ autonomy needs explicit escalation). MEDIUM-HIGH convergence.

**Verdict: SK-STD is the SURVIVOR with HIGH convergence. SK-STD+ is a SURVIVING EXTENSION with three sub-additions, each MEDIUM-HIGH converged.**

---

## Failure Mode Self-Check

| Failure mode | Observed? | Note |
|---|---|---|
| Premature evaluation | No | All 7 mechanisms applied before testing |
| Single-mechanism trap | No | 4 Generators + 3 Framers applied |
| Early frame lock | No | After SK-STD emerged as plausible, continued through SK-STD+, SK-LAYERED, SK-MAX, SK-3MODE, SK-OBS, SK-PERSISTENT, SK-FOLD, SK-BD-FIRST |
| Innovation without grounding | No | Every candidate tested with 5-test cycle |
| Mechanism exhaustion | No | Survivors produced |
| Survival bias | Checked explicitly for SK-INV / SK-FOLD — both kills verified as structural-mismatch grounds, not discomfort grounds |

---

## Final Deliverable

### ACTIONABLE survivor

- **SK-STD** — the default skeleton that ships from this inquiry. 6 components (scan / signal detection / probe / resolution management / frontier tracking / confidence mapping), 5 annotation layers (existence / confidence / relevance / adjacency / confirmed-absent), 2 modes (artifact / possibility) + boundary-discovery sub-phase as preflight check, 9 failure modes (6 baseline + F-strong drift / silent boundary-discovery / negative-space silent drop), 3 convergence criteria + jump-scan rule + F-weak anti-drift, explicit NOT-list against 5 neighbors, idempotent within invocation.

### DEFERRED-with-revival survivors

- **SK-STD+ Input Contract addition** — typed input contract from inquiry (territory specification, purpose, prior map, depth target). **Revival trigger:** project introduces typed `_branch.md` schema OR meta-loop introduces cross-invocation map handoff.
- **SK-STD+ Existence-Claim Schema** — typed record `{territory, region, item, confidence, claim_type ∈ {present, absent, inferred}, relevance?, adjacent_items?}`. **Revival trigger:** automation downstream consumer exists OR project adopts machine-readable inquiry artifacts.
- **SK-STD+ Drift-as-Escalation** — when relevance/adjacency annotation begins claiming relational meaning, route detection to Frontier output as escalation to sense-making rather than suppress as failure. **Revival trigger:** 3+ runs observe relevance/adjacency drift; or sense-making is willing to consume escalations.
- **SK-LAYERED Post-Iteration Update** — optional mode where `/explore` re-confirms absences after downstream disciplines hint at regions worth re-surveying. **Revival trigger:** any downstream discipline produces a "deferred absence" frontier question.
- **SK-3MODE** — boundary-discovery as third separate mode instead of sub-phase. **Revival trigger:** 3+ future inquiries have territory-undetermined at invocation time AND the sub-phase framing produces operational friction.

### RESEARCH FRONTIER

- **SK-MAX** — fully maximal skeleton with cartography legend / library controlled vocabulary / recce phases / forced tags / merge contract / discovery-vs-revisit telemetry. Preserved as a future direction; not actionable now. Surface in finding's Open Questions if it persists.

### KILLED

- **SK-MIN** — too thin (doesn't honor F-weak or boundary-discovery)
- **SK-OBS** — incompatible with MVL+'s file-output contract
- **SK-PERSISTENT** — breaks discrete-invocation contract structurally
- **SK-FOLD / SK-FOLD-2** — collapses cognitive-operation boundary
- **SK-BD-FIRST** — wrong frequency assumption

---

## Frontier (for /td-critique)

1. *Stress-test SK-STD's F-weak commitment.* Construct the strongest prosecution argument that the relevance + adjacency annotations DO leak into sense-making in practice. Does SK-STD's anti-drift defense (post-scan tagging + low-commitment language + drift as failure mode) actually hold? Or does it depend on operator discipline that the project cannot yet guarantee?
2. *Stress-test SK-STD's NOT-list against the discipline-vs-procedure dichotomy.* After excluding sense-making, comprehend, decompose, innovate, navigate territory, does SK-STD have enough work left to qualify as a cognitive operation? Or has it become a procedure?
3. *Re-test the sensemaking-ambiguity-4 carry-forward.* SK-3MODE (separate boundary-discovery mode) vs SK-STD's sub-phase framing — does adversarial pressure shift the MEDIUM confidence?
4. *Re-test the survival-bias-checked kills.* SK-PERSISTENT and SK-FOLD were killed on structural grounds. Construct the strongest defense of each. Do the kills hold under maximum prosecution effort?
5. *Test SK-STD+'s deferral logic.* The three SK-STD+ additions are deferred with revival triggers. Are those revival triggers themselves coherent, or are they "we'll know it when we see it" placeholders?

---

## Telemetry

- **Generators applied:** 4 / 4 (Combination, Absence Recognition, Domain Transfer, Extrapolation)
- **Framers applied:** 3 / 3 (Lens Shifting, Constraint Manipulation, Inversion)
- **Mechanism coverage:** 7 / 7 (full coverage)
- **Variations per mechanism:** 3 (generic / focused / contrarian)
- **Candidates generated:** 10 (SK-MIN, SK-STD, SK-STD+, SK-LAYERED, SK-MAX, SK-3MODE, SK-OBS, SK-PERSISTENT, SK-FOLD, SK-BD-FIRST)
- **Convergence:** YES — 3+ mechanisms converge on SK-STD as the survivor; 3+ mechanisms converge on each SK-STD+ sub-addition
- **Survivors tested:** 10 / 10
- **Dispositions:** 1 ACTIONABLE (SK-STD), 5 DEFERRED-with-revival (SK-STD+ × 3, SK-LAYERED, SK-3MODE), 1 RESEARCH FRONTIER (SK-MAX), 5 KILL (SK-MIN, SK-OBS, SK-PERSISTENT, SK-FOLD/SK-FOLD-2, SK-BD-FIRST)
- **Assembly check:** YES — emergent "default + tiered upgrade path" assembly
- **Axis coverage check:** YES — 5 axes identified; all covered (some via killed structural-mismatch variants)
- **Failure modes observed:** none

## Self-Assessment

**Overall: PROCEED**

The skeleton has a clear default (SK-STD) and a clear evolution path (SK-STD+ additions, each with a revival trigger). Five candidates were killed on structural grounds with explicit survival-bias re-check. Critique should now stress-test SK-STD's F-weak commitment and NOT-list, re-test the survival-bias-checked kills, and re-test the SK-3MODE carry-forward.
