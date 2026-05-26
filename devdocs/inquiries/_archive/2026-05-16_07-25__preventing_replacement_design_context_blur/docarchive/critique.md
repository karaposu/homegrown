# Critique: Preventing Replacement-Design Context Blur

## User Input

Inquiry `_branch.md`. Input: innovation.md (6 ACTIONABLE pieces; D11 compound with concrete content) + decomposition.md + sensemaking.md (3 core commits + cross-cutting) + exploration.md (mechanisms + 10 solution dimensions + matrix). Phase 0 dimensions: 3 core commits + 3 cross-cutting + substrate-honest + forward-applicability + user-flag respect + maintenance-burden. Multi-axis prosecution: dimension + specific-failure-case + spec-gap + substrate-honesty. Recommended verdict shape: compound evaluated as one candidate with sub-evaluations. Honest tests on P5 agent-instruction enforcement, P4 uniformity, decompose-flag necessity, slot-reuse new-vector risk.

---

## Phase 0 — Dimension Construction

Extracted from sensemaking + cross-cutting + project-specific risk axes. Default content dimensions (Correctness, Coherence, Feasibility, Completeness, Robustness, Elegance) are absorbed into problem-specific dimensions below.

| # | Dimension | Weight | What it asks | Source |
|---|---|---|---|---|
| **D1** | **M1+M2 dual-vector mitigation** | **CRITICAL** | Does the solution mitigate BOTH M1 (registry-list priming) and M2 (reflexive Read)? | Sensemaking commit 1 (bi-folder action) |
| **D2** | **3-profile differentiation** | HIGH | Does the solution differentiate active SKILL / dormant SKILL / non-SKILL artifact, or treat them uniformly? | Sensemaking commit 2 |
| **D3** | **Convention doc deliverable** | HIGH | Does the solution include a forward-looking convention doc? | Sensemaking commit 3 |
| **D4** | Honor precedent | MEDIUM | Does the solution use `_archive/` at top-level matching the existing `protocols/_archive/` convention? | Cross-cutting + Exploration precedent |
| **D5** | Reversibility | HIGH | Can an archive operation be reversed in 1 step? | Cross-cutting + Sensemaking foundational principle |
| **D6** | Dev-phase-appropriate | MEDIUM | Is the solution low-overhead, doc-based, no aspirational tooling? | Phase/Calibration-State perspective |
| **D7** | **Substrate-honest** | **CRITICAL** | Does the solution rely only on mechanisms Claude Code actually has? | Foundational principle |
| **D8** | Forward-applicability | HIGH | Does the convention cover future experimental skills without re-deliberation? | Frame-exit residual coverage |
| **D9** | User-flag respect | HIGH | Is the decompose risk surfaced (not silently archived)? | Sensemaking Ambiguity 3 + Risk perspective |
| **D10** | Maintenance-burden | LOW-MED | Is ongoing cost low? | Resource/Feasibility perspective |

### Dimension Validation

- **Cross-reference with sensemaking perspectives:** all 9 perspectives have ≥1 corresponding critique dimension (Technical/Logical → D1, Internal Consistency → D2, Frame-exit Completeness → D8, Phase/Calibration → D6, Risk → D9, Resource → D10, Strategic → D5+D8, Human/User → D4, Definitional → D2). ✓
- **Project-specific risk dimension check:** candidates involve project artifacts and operations. Project-specific risks captured: silent partial-mitigation (D1+D9), slot-clobber in reverse (D5), decompose-flag drift (D9), aspirational tooling (D7). ✓
- **No irrelevant dimensions:** every dimension produces signal (PASS/FAIL discriminates between viable D11 and dead single-mechanism alternatives).

10 dimensions; weighted Critical (D1, D7) / High (D2, D3, D5, D8, D9) / Medium (D4, D6) / Low-Medium (D10).

---

## Phase 1 — Fitness Landscape

### Viable region

A candidate lands in the viable region iff:
- D1 PASS (bi-folder action that mitigates both M1 and M2)
- D7 PASS (no aspirational tooling)
- D2-D5, D8-D10 PASS (differentiation, doc, precedent, reversibility, forward-applicability, user-flag, low-burden)
- D6 PASS (dev-phase-appropriate)

The viable region is narrow because D1 and D7 are CRITICAL — failing either is fatal regardless of other dimensions.

### Dead region

Any solution that:
- Mitigates only M1 OR only M2, not both (D1 FAIL)
- Requires `.claudeignore`, skill-discovery settings, or other tooling Claude Code doesn't have (D7 FAIL)
- Silently archives `decompose` and breaks /MVL+ (D9 FAIL)
- Is one-way / cannot be reversed (D5 FAIL)

Known dead-region inhabitants (from exploration's 10 dimensions):
- D1 (frontmatter status alone), D2 (top-of-file marker alone), D9 (sentinel alone) — fail D1
- D3 (folder move without registry) — fails D1 (registry priming continues)
- D5 (registry remove without folder move) — fails D1 (file content still readable via M2 if user mentions name)
- D6 (prefix rename, e.g., `_old_navigation/`) — fails D1 + D10 (high churn)
- D4 (sibling folder out of cognitive_harness/) — fails D4 (breaks precedent)

### Boundary region

Solutions that pass D1+D7 but score weakly on other dimensions:
- D10 alone (= D3 + frontmatter + convention doc, WITHOUT registry unregister) — would land in boundary if it added registry; without it, dead.
- Tier-1-only variant (skip the convention doc) — passes D1, fails D8 (forward-applicability).

### Unexplored region

- **Tooling-level enforcement** (settings.json exclusions, hooks, .claudeignore-style files). Confirmed-absent in current Claude Code calibration. Not a viable region in current state, but could become viable in a future calibration if Claude Code adds the mechanism. Future-research region, not actionable now.

---

## Phase 2 — Adversarial Evaluation

### Candidate: **D11 compound** (P1 + P2 + P3 + P4 + P5 + P6)

#### Prosecution

**P-1 (D1 — M1+M2 mitigation):** "P5's agent-instruction is doc-only. The doc says 'agent must not read _archive/<skill>/SKILL.md reflexively' — but compliance depends on the agent reading the doc and honoring it. If the agent doesn't proactively load _archive/ contents (the whole point), how would it read the convention doc?"

**P-2 (D2 — differentiation):** "P4 says 'leave non-SKILL artifacts in place by default.' This breaks the 3-profile uniformity — Profile A and B move, Profile C stays. The convention is inconsistent."

**P-3 (D3 — convention doc):** "P5's doc is 45 lines. The user wanted minimal-overhead solutions. Is 45 lines really dev-phase-appropriate?"

**P-4 (D7 — substrate-honest):** "Audit every step for aspirational mechanism. Folder move, registry rm, README, bash functions, agent-instruction-by-doc. Does anything require a feature Claude Code doesn't have?"

**P-5 (D9 — decompose-flag necessity):** "The inquiry could have decided via usage check: grep -r 'decompose' across cannon files; if invoked, treat as cannon. Asking the user is over-cautious."

**P-6 (specific failure: v1+v2 mixed):** "What if the user has v1+v2 mixed in cognitive_harness/navigation/? P2's mv command would archive v2 along with v1."

**P-7 (specific failure: future auto-sync):** "What if Claude Code starts auto-syncing cognitive_harness/ to ~/.claude/skills/ in a future release? The unregister gets reverted."

**P-8 (specific failure: slot-reuse new vector):** "Does the slot-reuse pattern create a NEW context-blur vector? User remembers the slot used to have the old skill; agent senses the name pattern."

**P-9 (spec-gap: P6 reverse fidelity):** "Does `cp -r` actually restore the registry copy correctly? Edge cases: symlinks, perms?"

**P-10 (spec-gap: agent-instruction enforcement):** "The doc says 'agent MUST NOT read _archive/<skill>/.' But agents are stochastic. What's the enforcement model?"

**P-11 (user-perspective objection):** "User wanted minimal action. The solution is 4 mv + 4 rm + 1 README + 1 user-question. Is this minimal?"

#### Defense

**D-1 (against P-1):** M1+M2 mitigation is STRUCTURAL, not doc-honor-based. M2 is mitigated by PATH — the folder is at `_archive/<skill>/`, so when the agent reflexively looks up `cognitive_harness/<skill>/`, the path doesn't exist; the Read fails before honor is invoked. M1 is mitigated by REGISTRY — the available-skills system reminder doesn't surface descriptions for unregistered skills. The doc is supplementary policy for user/agent communication, not the load-bearing enforcement.

**D-2 (against P-2):** Differentiation MEANS different actions per profile. Profile C has no M1 exposure (not a registered skill). Treating it the same as Profile A would be over-engineering (move when no benefit). The 3-profile commit is DIFFERENTIATION, not uniform-action. P4's "leave in place" is the correct differentiated response.

**D-3 (against P-3):** 45 lines is one-shot cost (~5 min to write). Forward-applicability saves re-deliberation per future experimental skill (~30+ min each). Net positive even at 1 future use. The doc is the highest-leverage piece because it scales over time.

**D-4 (against P-4):** Audit:
- mv — POSIX, exists
- rm — POSIX, exists
- README — text file, no mechanism dependency
- bash verify/reverse — standard utility
- Agent-instruction-by-doc — relies on agent's existing READ + INSTRUCTION-FOLLOWING capabilities

No claim of `.claudeignore`, no claim of skill-discovery settings, no claim of hook-based exclusion. Substrate-honest. ✓

**D-5 (against P-5):** Innovation's P3 actually DID the usage grep (Absence-Recognition). The grep confirms decompose is invoked by /MVL+. But the user-flag isn't asking 'is it used?' — it's asking 'do you want the current decompose to remain the registered Decomposition skill, or do you have a replacement planned?' That's a USER-INTENT question, distinct from current-usage. Auto-deciding usurps user authority. The cost of asking is 30 seconds; the cost of wrongly auto-deciding is breaking /MVL+. Asymmetric — ask wins.

**D-6 (against P-6):** P2 explicitly addresses with pre-move check: "If the user has already started v2 work inside cognitive_harness/navigation/ ... Confirm the folder contains only v1 before moving. If unsure: git status to see uncommitted changes; consider stashing or committing first." Edge case captured.

**D-7 (against P-7):** Speculative future change. Current calibration: manual sync (per user memory). If auto-sync arrives, convention adapts (add a sync-exclusion mechanism, OR move _archive/ to a different path Claude Code wouldn't auto-sync from). Phase/Calibration-State commit explicitly bounds the solution to current calibration. Acknowledge as Open Question, don't kill present-correct design for speculative future.

**D-8 (against P-8):** Two cases:
1. *Old-version contamination via path/registry* — mitigated by archive (folder moved + registry unregistered). The "old slot" path is empty.
2. *Memory-of-name-having-been-there* — a property of conversation history, not folder state. Cannot be affected by any folder-move. If the user wants full decoupling from the old name, they choose a NEW name for v2 (e.g., `navigation_v2/` or `route-mapping/`).

The mitigation addresses (1) — the inquiry's load-bearing pain. (2) is user-choice territory.

**D-9 (against P-9):** `cp -r` preserves directory structure + contents + standard perms on macOS/Linux. Verified by ls/inspection: no symlinks in the cannon skills; no special perms required (settings.json grants Read permission on the whole `~/.claude/skills/` tree). For edge cases (future symlinks etc.), the user can adjust the procedure. Adequate for current state.

**D-10 (against P-10):** Two-tier enforcement:
- **Tier 1 (structural):** registry unregister. The agent doesn't *see* unregistered skills in available-skills. M1 is gone regardless of agent compliance. Folder-move: the path doesn't exist. M2 reflex hits empty path.
- **Tier 2 (behavioral):** the doc's agent-instruction. Covers cases where the agent might proactively Glob/Grep/find through _archive/ on its own initiative.

Tier 1 is structural and load-bearing. Tier 2 is behavioral and imperfect but supplementary. The doc earns its place as Tier 2 even if Tier 2 is honor-based.

**D-11 (against P-11):** Minimum-required to satisfy the user's actual constraint (mitigate context-blur without removing). Alternatives reviewed: in-place annotation alone (D1-style) fails D1; renaming (D6-style) is higher churn; sibling folder breaks D4; tooling doesn't exist (D7). The bi-folder action IS the minimum that mitigates both vectors. The user-question for decompose is unavoidable (the inquiry surfaced a risk the user must adjudicate). The README is the smallest forward-looking artifact possible. Minimum-required ≠ minimum-irrespective-of-constraint.

#### Collision Results

| Prosecution | Defense | Verdict on this prosecution |
|---|---|---|
| P-1 (M1+M2 doc-only) | Structural via path + registry; doc supplementary | **Defense survives** |
| P-2 (Profile C breaks uniformity) | Differentiation ≠ uniform-action | **Defense survives** |
| P-3 (doc length over-engineered) | Forward-applicability earns the length | **Defense survives** |
| P-4 (aspirational tooling audit) | Audit clean | **Defense survives** |
| P-5 (decompose-flag unnecessary) | Intent ≠ usage; asymmetric risk | **Defense survives** |
| P-6 (v1+v2 mixed) | Pre-move check captured | **Defense survives** |
| P-7 (future auto-sync) | Bounded to current calibration; Open Question | **Defense survives with caveat** |
| P-8 (slot-reuse new vector) | Conflates path-state with conversation-history | **Defense survives** |
| P-9 (cp -r fidelity) | Adequate for current state | **Defense survives** |
| P-10 (agent-instruction enforcement) | Tier-1 structural + Tier-2 supplementary | **Defense survives with caveat** |
| P-11 (not minimal) | Minimum-required given constraints | **Defense survives** |

11 prosecution lines; defense survives 11/11. Two caveats noted (P-7 future-vulnerability; P-10 Tier-2 imperfection — both for the finding's Open Questions).

---

## Phase 3 — Verdicts

### Primary candidate

#### **D11 compound (P1+P2+P3+P4+P5+P6) → SURVIVE**

**Position:** Center of viable region. All 10 dimensions PASS.

**Dimension-by-dimension scoring:**

| Dimension | Weight | Score | Notes |
|---|---|---|---|
| D1 M1+M2 mitigation | CRITICAL | PASS | Bi-folder action mitigates both structurally |
| D2 3-profile differentiation | HIGH | PASS | Profile-specific actions per Sensemaking commit |
| D3 Convention doc | HIGH | PASS | P5 doc covers all 6 verification criteria |
| D4 Honor precedent | MEDIUM | PASS | `_archive/` at top-level extends `protocols/_archive/` |
| D5 Reversibility | HIGH | PASS | P6 reverse_archive 1-step; slot-occupied safety check |
| D6 Dev-phase-appropriate | MEDIUM | PASS | Doc-based, no aspirational tooling, ~15 min total effort |
| D7 Substrate-honest | CRITICAL | PASS | Every step uses existing Claude Code primitives |
| D8 Forward-applicability | HIGH | PASS | Convention doc covers future experimental skills |
| D9 User-flag respect | HIGH | PASS | Decompose risk surfaced explicitly with default + override |
| D10 Maintenance-burden | LOW-MED | PASS | One-shot move; no ongoing tool maintenance |

**Caveats (carried to finding's Open Questions):**
1. **P-7 future-vulnerability:** If Claude Code adds auto-sync between `cognitive_harness/` and `~/.claude/skills/`, the unregister gets reverted. Re-evaluate at that point.
2. **P-10 Tier-2 enforcement imperfect:** Agent-instruction in P5 doc is honored when in conversation context but not guaranteed. Tier-1 (registry unregister + folder relocation) carries the structural enforcement; the doc is supplementary.

**Sub-piece verdicts:**

| Piece | Verdict | Notes |
|---|---|---|
| P1 Cannon-set verification | SURVIVE | Question wording explicit; default + override clear |
| P2 Active SKILL disposition | SURVIVE | Pre-move v1+v2 check is the load-bearing safety |
| P3 Dormant SKILL disposition | SURVIVE | Dep-grep adds defense |
| P4 Non-SKILL artifacts | SURVIVE | Leave-in-place correct for M1-absent profile |
| P5 Convention doc | SURVIVE | Tier-2 enforcement caveat noted |
| P6 Verify + reverse procedure | SURVIVE | Edge cases captured |

### Killed alternatives (correctly placed in dead region)

| Alternative | Killing dimension | Seed extracted |
|---|---|---|
| D1 frontmatter alone | D1 (M1 not mitigated) | "What would mitigate M1 without touching registry?" → no answer; M1 requires registry action |
| D2 top-of-file marker alone | D1 | Same |
| D3 alone (folder move w/o registry) | D1 (M1 still active) | "Add registry action" → leads to D7 |
| D5 alone (registry remove w/o folder move) | D1 (file content readable via M2 if path mentioned) | "Add folder move" → leads to D7 |
| D6 prefix rename | D1 + D10 (high churn) | "Prefix doesn't help if registry still active" |
| D4 sibling folder | D4 (breaks precedent) | "Use top-level _archive/" → leads to D3 |
| D9 sentinel file alone | D1 | "Sentinel doesn't disable registry" |
| Pure D10 (doc + frontmatter, no registry unreg) | D1 | "Adding doc isn't enough; need registry action" |

All dead-region alternatives correctly positioned. No misclassified candidates.

---

## Phase 3.5 — Assembly Check

Across surviving candidates (only D11 compound survives at the primary level), test for emergent assemblies from prosecution discoveries:

**Emergent candidate 1: Tier-1-only variant** (skip P5 doc; just do P1+P2+P3+P4+P6)

Adversarial test:
- Prosecution: "Without the convention doc, future experimental skills don't follow the same pattern — each one re-deliberates."
- Defense: "The procedure is documented in P6; future use can derive the pattern from precedent."
- Collision: P6 documents COMMANDS, not POLICY. The user (or a future agent in conversation) needs the WHY in addition to the WHAT. Without P5, forward-applicability is reduced to "copy what was done last time" which is brittle.

Verdict: **REFINE → not viable as-is**. Drops D8 (forward-applicability) from PASS to FAIL. Compound is dominant.

**Emergent candidate 2: Defense-in-depth with sentinel file**

Adversarial test:
- Prosecution: "Add a `.archived` zero-byte sentinel file inside each archived folder for triple-redundancy. M1 (registry), folder location, and sentinel = belt + suspenders + parachute."
- Defense: "M1 is already mitigated structurally via registry unregister. M2 is mitigated by path relocation. The sentinel adds nothing — there's no mechanism that checks `.archived` to decide whether to load."

Verdict: **KILL**. Redundant overhead with no mechanism uplift. Seed: "Defense-in-depth only adds value if each layer mitigates a DISTINCT vector. Stacking layers on already-mitigated vectors is overhead."

**Emergent candidate 3: Slot-rename variant** (P2's slot-reuse uses NEW name)

Adversarial test:
- Prosecution: "If the user wants full decoupling, use a new name for v2 (`navigation_v2/`) rather than reusing `navigation/`. This addresses P-8's slot-reuse residual concern."
- Defense: "True for users who want it; not all do. The compound permits this as a style choice (P2 says: 'If preferred, the replacement may use a new name'). Forcing new-name is over-prescription."

Verdict: **NOT A SEPARATE CANDIDATE** — already permitted as a style choice within P2. No new compound emerges.

**Conclusion:** No alternative assembly emerges that beats D11. D11 is the local optimum.

---

## Phase 4 — Coverage + Convergence Assessment

### Coverage Map

**Per-candidate coverage (D11 compound):**
- All 10 dimensions evaluated. ✓
- 11 prosecution lines: 4 dimension-level (D1, D2, D3, D7, D9 covered across them) + 3 specific-failure-case (v1+v2 mixed, auto-sync future, slot-reuse vector) + 2 spec-gap probes (cp -r fidelity, agent-instruction enforcement) + 1 user-perspective + 1 user-perspective minimality. ✓
- Defense applied per prosecution. ✓

**Per-solution-space coverage:**
- Viable region: D11 + Tier-1-only variant (REFINE). Mapped.
- Dead region: 8 single-mechanism / wrong-axis alternatives. Mapped.
- Boundary region: Tier-1-only is the sole boundary inhabitant (drops D8). Mapped.
- Unexplored region: tooling-level enforcement. Confirmed-absent for current calibration; not actionable.

**Coverage rating:** FULL.

### Convergence Assessment

**Convergence criteria:**

| Criterion | Status |
|---|---|
| At least one candidate has SURVIVE verdict with no caveats on critical dimensions | ✓ D11 SURVIVES; caveats are on non-critical dimensions (future + Tier-2 imperfect) |
| Two consecutive iterations have not produced candidates that land in new regions | ✓ This is iteration 1; assembly check + emergent variants explored; no new regions emerged |
| No unexplored regions remain that are topologically likely to contain viable candidates | ✓ Tooling-level region confirmed-absent for current calibration |
| The accumulator shows a decreasing rate of new information per iteration | ✓ Emergent candidates produced no new viable architecture |

**All four convergence criteria met.**

### Failure-Mode Self-Check

| Failure mode | Status | Note |
|---|---|---|
| 1. Wrong Dimensions | ✗ avoided | Dimensions extracted from sensemaking + cross-cutting + project-specific risk axes |
| 2. Rubber-stamping | ✗ avoided | 11 prosecution lines; multi-axis depth (dimension + specific-failure + spec-gap + user-perspective) |
| 3. Nitpicking | ✗ avoided | Defense applied per prosecution; severity-weighted dimensions |
| 4. Dimension Blindness | ✗ avoided | Project-specific risk dimensions added (D7 substrate-honest, D9 user-flag) |
| 5. False Convergence | ✗ avoided | All 4 convergence criteria met; clean SURVIVE exists |
| 6. Evaluation Drift | ✗ avoided | Single iteration; dimensions fixed in Phase 0 |
| 7. Self-Reference Collapse | ✗ avoided | External grounding via observable Claude Code mechanisms (M1+M2), file timestamps, settings.json |

---

## Signal

**TERMINATE with ranked survivors.**

**Primary survivor:** D11 compound (P1+P2+P3+P4+P5+P6) — all dimensions PASS; two non-critical caveats noted.

**Alternate survivors:** None. The compound is the local optimum; Tier-1-only variant REFINEs to D11 by adding the convention doc.

### Constructive Outputs for the Finding

**To carry forward:**
- D11 compound is the recommended primary path.
- The 6 pieces compose into one solution; do not split or merge.
- Two caveats become Open Questions:
  - **OQ-1 Future auto-sync vulnerability:** If Claude Code adds auto-sync between `cognitive_harness/` and `~/.claude/skills/` in a future release, the unregister gets reverted. Solution: re-evaluate the convention doc at that point — possibly add a sync-exclusion mechanism or relocate `_archive/` to a path Claude Code wouldn't auto-sync.
  - **OQ-2 Tier-2 enforcement imperfection:** The agent-instruction in P5's convention doc is honored when the doc is in conversation context but not structurally guaranteed. Mitigation: Tier-1 (registry unregister + folder relocation) carries the load-bearing enforcement; the doc is supplementary policy.

**Seeds extracted from dead-region alternatives:**
- "Defense-in-depth only adds value if each layer mitigates a DISTINCT vector" — a useful principle for future convention design.
- "When a mitigation is honor-based, pair it with a structural mitigation that doesn't require honor" — Tier-1 + Tier-2 pattern.

### Convergence Telemetry

- Dimension coverage: 10/10
- Adversarial strength: STRONG (11 multi-axis prosecution lines; defense survives all)
- Landscape stability: STABLE (no new regions emerged in assembly check)
- Clean SURVIVE exists: YES (D11 with non-critical caveats only)
- Failure modes observed: NONE
- **Overall: PROCEED**
