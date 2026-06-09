---
status: active
corrects: devdocs/inquiries/diagnostics/2026-05-06_20-17__diagnostics_fix_prioritization/finding.md
source_set: devdocs/inquiries/diagnostics/
---
# Finding: MVL Self-Maintenance Failure Prioritization

## Changes from Prior

**Prior path:** `devdocs/inquiries/diagnostics/2026-05-06_20-17__diagnostics_fix_prioritization/finding.md`

**Revision trigger:** The user corrected the prior inquiry because it answered as if Navigation route-memory fixes were the target. The intended target was MVL self-maintenance: what the diagnostic findings reveal about why MVL failed, which discipline or stage was at fault, and what loop-maintenance fixes should be prioritized.

**What's preserved:** The prior inquiry correctly read the diagnostic corpus and noticed that many findings use Navigation route-memory discussions as evidence. It also preserved useful concepts such as target-specific Critique dimensions, archive-use, and registry-vs-derivation checks.

**What's changed:** Navigation is no longer the repair target. Navigation discussions are evidence-rich examples of MVL failure modes. The prioritized fixes now target MVL framing, discipline checks, candidate generation, Critique dimensions, and conclusion hardening.

**What's new:** This finding adds the Target-Layer Alignment Gate as the most urgent fix. It also preserves stage attribution so the failures are not flattened into "Navigation needs patches" or "Critique alone failed."

**Migration:** Use this finding, not the prior one, when deciding MVL self-maintenance priorities. The prior finding may still be useful as historical evidence of target-substitution failure and as possible input for a separate Navigation implementation task.

## Question

Across the diagnostic findings under `devdocs/inquiries/diagnostics/`, what are the highest-priority self-maintenance fixes for MVL itself, focusing on why MVL failed and which discipline or stage was at fault, while treating the Navigation discussions as evidence rather than as the target system?

The goal is to let the user choose the top MVL maintenance work to target next. A good answer must rank fixes by urgency, reliability impact, ease, and breadth, but the ranking must be about MVL loop quality and self-maintenance mechanisms, not Navigation feature policy.

## Finding Summary

- **Most urgent fix 1: Target-Layer Alignment Gate.** Self-maintenance and meta inquiries must explicitly separate the evidence domain, diagnosis target, maintenance target, implementation target, and out-of-scope target. The previous prioritization failure happened because Navigation was the evidence domain, but the answer treated Navigation as the implementation target.

- **Most urgent fix 2: Scoped Critique Decisive-Dimension Pack.** Many diagnostics identify Critique as the missed-catch stage. Critique needs a problem-triggered set of dimensions that can catch wrong targets, wrong premises, missing alternatives, proxy triggers, phase blindness, artifact misuse, and name-implied behavior before CONCLUDE hardens the result.

- **Most meaningful reliability fix: Scoped Critique Decisive-Dimension Pack.** Sensemaking often creates the wrong frame, Innovation often misses the strongest alternative, and Decomposition sometimes leaves a load-bearing interface shallow. Critique is the shared reliability gate that can catch those failures before they become durable findings.

- **Easiest high-effect fix 1: `LOOP_DIAGNOSE` Archive-Use and Correction-Chain Framing Check.** Correction-chain diagnosis should use `homegrown/protocols/loop_diagnose.md` and inspect existing `_branch.md`, `_state.md`, root outputs, and `docarchive/*` before proposing new marks, registries, or fields.

- **Easiest high-effect fix 2: Answer-Target Finalization Check.** Before Critique terminates or CONCLUDE writes `finding.md`, the loop should check whether the survivor answers `_branch.md`'s question, advances `_branch.md`'s goal, and targets the requested system rather than the most salient evidence domain.

- **Fix that touches most and has the most effect: Scoped Critique Decisive-Dimension Pack.** It touches the repeated missed-catch point across storage policy, diagnostics, artifact policy, registry/search, trigger policy, phase policy, durable naming, operational interfaces, and meta-target drift.

## Finding

MVL+ is Homegrown's extended loop: Exploration maps the territory, Sensemaking stabilizes meaning, Decomposition partitions the problem, Innovation generates candidates, Critique evaluates those candidates, and CONCLUDE writes the durable `finding.md`.

This inquiry is about maintaining that loop. It is not about implementing Navigation route-memory policy. Navigation appears often in the diagnostic corpus because recent correction chains used Navigation route memory as the topic where MVL failures became visible.

The previous prioritization inquiry failed the target distinction. It looked at Navigation-heavy diagnostic evidence and produced Navigation-heavy repair priorities. That answer may contain useful Navigation ideas, but it did not answer the self-maintenance question.

The first urgent fix is therefore the **Target-Layer Alignment Gate**. In every self-maintenance, diagnostic, or meta inquiry where the evidence topic can differ from the repair target, the loop should record:

```yaml
evidence_domain:
diagnosis_target:
maintenance_target:
implementation_target:
out_of_scope_target:
```

For this inquiry, the evidence domain was Navigation route-memory discussions and diagnostic findings. The maintenance target was MVL. The implementation target should have been MVL self-maintenance guidance, not Navigation.

The second urgent fix is the **Scoped Critique Decisive-Dimension Pack**. The diagnostic corpus repeatedly shows that Critique was not always the original source of failure, but it often failed to catch the failure before conclusion. That makes it the broadest reliability gate.

The pack should not be a global checklist. It should be selected by problem type. For self-maintenance, protocol, trigger, routing, artifact, naming, index/registry, phase-policy, or operational-patch critiques, Critique should select relevant dimensions from:

- target fit and branch-goal coverage;
- real dependency versus observable proxy;
- premise and layer validity;
- canonical layer versus provenance layer;
- base-loop burden and artifact reuse;
- fallback as possible primary mechanism;
- operation boundary and operation proliferation;
- phase, calibration, and breakthrough preservation;
- name-implied behavior;
- load-bearing interface defined or deferred;
- strongest alternative visible before candidate death.

This pack is also the most meaningful reliability fix. The reason is not that Critique is always the root cause. It is not. Sensemaking often stabilizes a wrong anchor. Innovation often misses the stronger alternative. Decomposition sometimes leaves an interface shallow. CONCLUDE often amplifies the survivor.

Critique wins reliability because it is the shared missed-catch point. It can catch failures that originate in several earlier stages before CONCLUDE turns them into durable guidance.

The easiest high-effect fix is **`LOOP_DIAGNOSE` Archive-Use and Correction-Chain Framing**. Some diagnostics already showed that existing archived outputs had the evidence needed for stage attribution. Before adding embedded marks or new routine fields, a correction-chain diagnosis should read the artifacts that already exist.

The second easiest high-effect fix is **Answer-Target Finalization Check**. This is the cheap enforcement point for the Target-Layer Alignment Gate. It asks:

```text
Does the survivor answer _branch.md's question?
Does it advance _branch.md's goal?
Does it target the requested system, not only the salient evidence domain?
```

This check would have caught the prior prioritization failure before CONCLUDE wrote the Navigation-focused finding.

Stage attribution should stay explicit. The corpus does not support blaming one discipline alone.

The common stage pattern is:

| Stage | Common role in diagnostics | Maintenance meaning |
| --- | --- | --- |
| Branch framing / runner | wrong design axis or missing target-layer distinction | add correction-chain framing and target-layer alignment |
| Exploration | false confidence or treating fallback/search as secondary | improve confidence and primary-alternative probes as companion work |
| Sensemaking | wrong anchor or boundary stabilization | add boundary and assumption checks as companion work |
| Decomposition | wrong topology or shallow load-bearing interfaces | add interface materialization checks for trigger/routing/operational findings |
| Innovation | strongest alternative omitted or underweighted | add strongest-alternative checks as companion work |
| Critique | decisive dimension missed | prioritize the scoped decisive-dimension pack |
| CONCLUDE | wrong or incomplete survivor hardened | add handoff and answer-target backstops |

The final practical model is:

```text
Fix target-layer alignment first.
Then harden Critique as the main reliability gate.
Use archive-use and answer-target checks as immediate quick wins.
Add Sensemaking, Innovation, Decomposition, and CONCLUDE companion checks after the top gates are shaped.
Do not make a broad MVL rewrite the first move.
```

## Next Actions

### MUST

- **What:** Add a Target-Layer Alignment Gate for self-maintenance, diagnostic, and meta inquiries.
  **Who:** MVL+/self-maintenance guidance or the loop runner surface that creates `_branch.md`.
  **Gate:** Before the next inquiry that uses one topic as evidence to decide changes to MVL, LOOP_DIAGNOSE, Critique, CONCLUDE, or another maintenance mechanism.
  **Why:** Prevents evidence-domain salience from becoming the implementation target.

- **What:** Add Answer-Target Finalization Check before Critique termination or CONCLUDE.
  **Who:** Critique and/or CONCLUDE guidance.
  **Gate:** Before the next self-maintenance or diagnostic prioritization finding is finalized.
  **Why:** Catches coherent answers that do not answer the branch question or goal.

- **What:** Materialize the Scoped Critique Decisive-Dimension Pack as a problem-triggered dimension selector.
  **Who:** Critique guidance or MVL+ peripheral maintenance guidance.
  **Gate:** Before the next protocol, artifact-policy, trigger/routing, naming, registry/search, phase-policy, or self-maintenance critique.
  **Why:** Makes Critique attack the actual failure axis instead of evaluating plausible candidates on safe but irrelevant dimensions.

- **What:** Add or enforce `LOOP_DIAGNOSE` archive-use and correction-chain framing.
  **Who:** `homegrown/protocols/loop_diagnose.md` or the diagnostic runner guidance that invokes it.
  **Gate:** Before the next correction-chain inquiry that asks which discipline or stage failed.
  **Why:** Uses existing archived evidence before inventing new marks, registries, or routine fields.

### COULD

- **What:** Add the Sensemaking Boundary and Assumption Pack.
  **Who:** Sensemaking guidance or a local self-maintenance wrapper.
  **Gate:** When the next maintenance inquiry turns on canonical/provenance, explicitness form, operation output, phase assumption, user-felt messiness, or durable term meaning.
  **Why:** Prevents wrong frames from becoming stable too early.

- **What:** Add the Innovation Strongest Alternative Pack.
  **Who:** Innovation guidance for protocol and artifact decisions.
  **Gate:** When a candidate is being killed because it is costly, broad, inconvenient, or represented only in weak form.
  **Why:** Prevents archive-first, search-primary, temporary-mode, or status-field alternatives from being killed before their strongest form is tested.

- **What:** Add Decomposition Load-Bearing Interface Check.
  **Who:** Decomposition guidance for trigger/routing and operational patch findings.
  **Gate:** When a finding proposes behavior that depends on a source, artifact, status, trigger, authority boundary, or output contract.
  **Why:** Prevents hidden interfaces from being left implicit.

- **What:** Add CONCLUDE Handoff Integrity Backstops.
  **Who:** CONCLUDE guidance.
  **Gate:** When a finding creates durable operational guidance, durable terms, examples near trigger rules, or caveated survivors.
  **Why:** Prevents weak side claims, examples, and names from hardening into future rules.

### DEFERRED

- **What:** Broad MVL core rewrite.
  **Gate:** Revive only after the scoped target-layer, Critique, archive-use, and finalization checks fail across multiple unrelated domains.
  **Why if revived:** A core rewrite may become justified if scoped gates prove insufficient.

- **What:** Navigation implementation patches as the answer to this inquiry.
  **Gate:** Revive only as a separate Navigation materialization task.
  **Why if revived:** Navigation route-memory policy may need implementation work, but that is not the self-maintenance answer here.

- **What:** A maintained global diagnostic index.
  **Gate:** Revive after at least ten diagnostic findings or after deterministic search/read becomes too slow or unreliable for self-maintenance reviews.
  **Why if revived:** An index may help at scale, but the current question was answerable by reading the diagnostic findings directly.

## Reasoning

The Target-Layer Alignment Gate survived because it directly repairs the latest failure. The prior prioritization finding answered the visible Navigation topic instead of the MVL maintenance target. Earlier diagnostics also support this kind of guard because several failures came from wrong branch framing or wrong design-axis selection.

The Scoped Critique Decisive-Dimension Pack survived as the main reliability and breadth winner because Critique repeatedly appears as the missed-catch stage. It is not the sole root cause. Its value is that it can catch bad frames, bad candidates, bad boundaries, bad examples, and bad target selection before CONCLUDE writes a durable finding.

The `LOOP_DIAGNOSE` Archive-Use and Correction-Chain Framing Check survived as an easy high-effect fix because the evidence is concrete and the trigger is narrow. It applies when the user asks to diagnose prior and corrected loops, not every ordinary inquiry.

The Answer-Target Finalization Check survived as an easy high-effect fix because it is small and directly catches the current failure mode. It is also the final enforcement point for the broader Target-Layer Alignment Gate.

The Sensemaking Boundary and Assumption Pack survived as a companion, not as the top reliability winner. Sensemaking often stabilizes the wrong root model, but it is broader and harder to scope than the Critique pack. It should be materialized after the top target and Critique fixes are shaped.

The Innovation Strongest Alternative Pack survived as a companion because several diagnostics show the stronger answer existed as a better-framed alternative: archive-first diagnosis, search as primary, temporary robust mode, or status field instead of named routine. It should trigger when the loop is about to kill a weak version of an alternative.

The Decomposition Load-Bearing Interface Check survived as a companion because it matters when a finding proposes operational behavior. It is not universal, but it prevents real failures around source discovery, status states, authority boundaries, and output contracts.

The CONCLUDE Handoff Integrity Backstops survived as downstream guards. CONCLUDE often amplified the wrong survivor, but downstream checks cannot replace Sensemaking, Innovation, Decomposition, or Critique. They should catch side claims, vague examples, undefined interfaces, overstatement, and durable terms.

The broad MVL core rewrite was killed as a current action. The diagnostic corpus shows repeated weakness, but it also repeatedly recommends scoped gates and evaluation triggers before broad source rewrites. A broad rewrite now would risk checklist bloat.

Navigation implementation patches were killed as this inquiry's answer. They may be valid in a separate Navigation task, but ranking them here repeats the target-substitution failure that caused this rerun.

Single-discipline blame was killed. The diagnostics show chains: branch framing can set the wrong axis, Exploration can over-trust a signal, Sensemaking can stabilize a wrong model, Decomposition can encode bad topology, Innovation can miss the best candidate, Critique can miss the decisive dimension, and CONCLUDE can harden the result.

## Open Questions

### Monitoring

After the next three self-maintenance or diagnostic prioritization inquiries, check whether each one explicitly separates evidence domain, diagnosis target, maintenance target, and implementation target.

After the next five critiques involving protocol, artifact, trigger, naming, registry/search, phase-policy, or self-maintenance decisions, check whether the selected Critique dimensions included the actual failure axis later discussed by the user.

After the next three correction-chain diagnoses, check whether archived discipline outputs were read before proposing new marks, registries, or routine fields.

### Blocked

Exact source-file placement is blocked until a materialization pass reads the live files that would be edited, such as `homegrown/MVL+/SKILL.md`, `homegrown/protocols/loop_diagnose.md`, `homegrown/protocols/conclude.md`, and any local Critique guidance.

### Refinement Triggers

Reopen the Target-Layer Alignment Gate if it becomes ceremonial and does not prevent another evidence-domain versus maintenance-target confusion.

Reopen the Critique Decisive-Dimension Pack if it starts appearing in unrelated critiques and creating checklist bloat.

Reopen broad MVL core rewrite only if scoped fixes fail across multiple unrelated domains after they have been applied.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
$MVL+ 


i read devdocs/inquiries/diagnostics/2026-05-06_20-17__diagnostics_fix_prioritization and it is about navigation. but original question was different , it was about top fixes we need to target based on diagnossis documents, diagnosis of why MVL failed what dicipiline was at fault etc


lets run new MVL loop with correct focus, it is not about navigation at all, it is about self maintaince using navigation discussions to understand where MVL has errors
```

</details>
