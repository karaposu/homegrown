# Decomposition: MVL Self-Maintenance Failure Prioritization

## Input

`_branch.md`, `exploration.md`, and `sensemaking.md` from this inquiry.

## Step 1 - Perceive Coupling Topology

The whole problem is:

```text
Rank MVL self-maintenance fixes from the diagnostic corpus,
without letting Navigation evidence become the implementation target.
```

### Elements

- Diagnostic findings and stage attributions.
- Latest target-substitution failure.
- MVL discipline surfaces: Exploration, Sensemaking, Decomposition, Innovation, Critique, CONCLUDE.
- Ranking axes: urgency, reliability, ease, breadth.
- Candidate maintenance gates.
- Scope control: avoid broad core rewrite without evidence.
- User need: know which self-maintenance fixes to target next.

### Coupling Gradients

Strong coupling:

- Target-layer alignment and the corrected inquiry scope. If the answer target is wrong, every later ranking is wrong.
- Critique decisive-dimension pack and reliability/breadth rankings. It is both broad and reliability-heavy.
- Archive-use and correction-chain framing. These belong together because both are specific to diagnosing prior loop failures from artifacts.

Moderate coupling:

- Sensemaking boundary checks and Critique dimension checks. Sensemaking prevents bad frames; Critique catches them later.
- Innovation strongest-alternative checks and Critique dimensions. Critique can only evaluate candidates that Innovation makes visible.
- CONCLUDE backstops and answer-target validation. CONCLUDE can catch final drift but cannot replace upstream work.

Weak coupling:

- Navigation implementation fixes and MVL self-maintenance fixes. Navigation examples inform MVL gates but should not be implemented by this finding.
- Broad MVL rewrite and scoped gate recommendations. Broad rewrite is a deferred possibility, not required for the current answer.

## Step 2 - Detect Boundaries Top-Down

Natural pieces:

1. **Target-Layer Alignment**
   - Prevent the exact latest failure: answering the evidence topic instead of the self-maintenance target.

2. **Critique Reliability Pack**
   - Repair the repeated missed-catch stage.

3. **Quick Wins**
   - Identify low-blast-radius checks with immediate usefulness.

4. **Companion Discipline Fixes**
   - Preserve root-cause repairs for Sensemaking, Innovation, Decomposition, and CONCLUDE without making them top category winners too early.

5. **Deferred / Killed Options**
   - Avoid broad rewrites and Navigation implementation patches as this inquiry's answer.

These boundaries separate what the user explicitly asked for from what the diagnostic corpus merely mentions.

## Step 3 - Validate Boundaries Bottom-Up

### Atoms

- The previous prioritization answer drifted into Navigation operational fixes.
- Critique missed decisive dimensions in many diagnostics.
- Sensemaking stabilized wrong anchors in many diagnostics.
- Innovation missed strongest alternatives in many diagnostics.
- Decomposition left load-bearing interfaces shallow in several diagnostics.
- CONCLUDE hardened weak, secondary, or overstrong claims.
- `LOOP_DIAGNOSE` archive-use is narrow and easy.
- Broad MVL rewrite is repeatedly deferred in source findings.

### Validation

The atoms group naturally:

- target drift atom -> Target-Layer Alignment;
- Critique repeated misses -> Critique Reliability Pack;
- archive-use and answer-target checks -> Quick Wins;
- Sensemaking/Innovation/Decomposition/CONCLUDE atoms -> Companion Discipline Fixes;
- broad rewrite and Navigation implementation atoms -> Deferred / Killed Options.

Confidence: high. The boundaries align with the user's corrected scope and with source evidence.

## Step 4 - Question Tree

### Q1. What are the most urgent two MVL self-maintenance fixes?

Verification criteria:

- [ ] Names fixes for MVL, not Navigation.
- [ ] Includes the latest target-substitution failure.
- [ ] Includes the highest-density repeated missed-catch failure.
- [ ] Explains why urgency is not frequency alone.

### Q2. What is the most meaningful reliability fix?

Verification criteria:

- [ ] Identifies the fix that prevents wrong survivors across many failure origins.
- [ ] Explains why Critique can be the reliability winner even when Sensemaking is often root-cause.
- [ ] Gives the concrete shape of the reliability pack.
- [ ] Keeps the pack scoped by problem type.

### Q3. What are the easiest two high-effect fixes?

Verification criteria:

- [ ] Selects narrow checks with clear activation conditions.
- [ ] Includes `LOOP_DIAGNOSE` archive-use/correction-chain framing.
- [ ] Includes answer-target validation.
- [ ] Does not pretend these quick wins solve the whole reliability problem.

### Q4. Which fix touches the most and has the most effect?

Verification criteria:

- [ ] Compares Critique pack, Sensemaking pack, CONCLUDE backstops, and broad MVL rewrite.
- [ ] Chooses one broadest-effect fix.
- [ ] Names companion surfaces that should feed or support it.
- [ ] Avoids unscoped checklist bloat.

### Q5. What stage attribution should the answer preserve?

Verification criteria:

- [ ] Separates root-cause disciplines from missed-catch and hardening stages.
- [ ] Identifies Critique as broad missed-catch surface.
- [ ] Identifies Sensemaking as root-frame surface.
- [ ] Identifies Innovation, Decomposition, and CONCLUDE roles accurately.

### Q6. What should be deferred or killed?

Verification criteria:

- [ ] Defers broad MVL rewrite.
- [ ] Defers direct Navigation implementation patches from this inquiry.
- [ ] Rejects single-discipline blame.
- [ ] Gives revival gates for broad changes.

## Step 5 - Interface Map

| Source Piece | Target Piece | What Flows | Direction |
| --- | --- | --- | --- |
| Target-Layer Alignment | All ranking questions | Defines evidence domain versus maintenance target | one-way |
| Critique Reliability Pack | Reliability and breadth rankings | Main survivor and scope rules | one-way |
| Quick Wins | Implementation sequence | Low-cost first actions | one-way |
| Companion Discipline Fixes | Critique pack and future source edits | Supporting dimensions and upstream checks | one-way |
| Stage Attribution | Reasoning and final explanation | Why fixes map to disciplines | one-way |
| Deferred / Killed Options | Next actions and reasoning | Scope control and revival gates | one-way |

Hidden coupling to avoid:

- Letting Navigation examples re-enter as final implementation targets.
- Letting Critique pack absorb all other discipline fixes and become too broad.
- Letting quick wins be presented as full system reliability.
- Letting CONCLUDE backstops imply upstream discipline fixes are unnecessary.

## Step 6 - Dependency Order

1. **Target-Layer Alignment first.**
   - Without this, later rankings can aim at the wrong system.

2. **Critique Reliability Pack second.**
   - It is the main broad reliability fix and needs target alignment to avoid wrong dimensions.

3. **Quick Wins can be applied immediately.**
   - Archive-use/correction-chain framing and answer-target validation have low coupling and clear triggers.

4. **Companion Discipline Fixes after the top ranking is stable.**
   - Sensemaking, Innovation, Decomposition, and CONCLUDE checks should be added carefully where they are triggered.

5. **Deferred options last.**
   - Broad MVL rewrite needs post-fix evidence. Navigation implementation patches belong to separate Navigation materialization tasks.

## Step 7 - Self-Evaluation

### Independence

Pass. Each question can be answered independently once the target-layer distinction is fixed.

### Completeness

Pass. The decomposition covers the user's categories, stage attribution, and scope-control needs.

### Reassembly

Pass. Answering Q1-Q6 reconstructs a complete final finding: category winners, reasons, stage roles, quick wins, and deferrals.

### Tractability

Pass. Each piece is focused enough for Innovation and Critique.

### Interface Clarity

Pass. The main interface is target-layer alignment flowing into all rankings.

### Balance

Pass. Q2 and Q4 are naturally heavier because the Critique pack is both reliability and breadth candidate.

### Confidence

High. Top-down boundaries and bottom-up atoms agree.

## Final Deliverable

### Coupling Map

```text
Target-Layer Alignment
  strongly gates -> all rankings

Critique Reliability Pack
  strongly couples -> reliability + breadth + stage attribution

Quick Wins
  weakly couple -> implementation order

Companion Discipline Fixes
  moderately couple -> future source placement

Deferred Options
  weakly couple -> scope control
```

### Question Tree

1. What are the most urgent two MVL self-maintenance fixes?
2. What is the most meaningful reliability fix?
3. What are the easiest two high-effect fixes?
4. Which fix touches the most and has the most effect?
5. What stage attribution should the answer preserve?
6. What should be deferred or killed?

### Interface Map

Primary interface:

```text
target_layer = evidence_domain | diagnosis_target | maintenance_target | implementation_target
```

Secondary interface:

```text
ranking_axis = urgency | reliability | ease | breadth
```

Stage interface:

```text
stage_role = root_cause | contributor | missed_catch | hardening_amplifier | quick_workflow_fix
```

### Dependency Order

```text
target-layer distinction
  -> urgent/reliability/ease/breadth rankings
  -> stage attribution
  -> implementation sequence and deferrals
```

### Self-Evaluation Summary

Independence: pass.
Completeness: pass.
Reassembly: pass.
Tractability: pass.
Interface clarity: pass.
Balance: pass.
Confidence: pass.
