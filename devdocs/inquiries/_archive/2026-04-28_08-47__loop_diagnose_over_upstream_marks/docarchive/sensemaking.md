# Sensemaking: Loop Diagnose Over Upstream Marks

## User Input

The user challenged the prior finding's "Critique Should Produce Upstream Marks" section. The user's point is that MVL/MVL+ already archives Critique and other discipline outputs in `docarchive/`; those artifacts can be analyzed later. A separate protocol like `homegrown/protocols/loop_diagnose.md` may be the right mechanism for inner-loop diagnosis.

## SV1 - Baseline Understanding

The initial interpretation is: the previous finding got the anti-self-verdict principle right, but overcorrected by assigning too much diagnostic responsibility to routine Critique output. The likely better model is retrospective diagnosis over existing artifacts.

## Phase 1 - Cognitive Anchor Extraction

### Constraints

- Routine MVL+ already produces and archives discipline outputs.
- `docarchive/` preserves Exploration, Sensemaking, Decomposition, Innovation, and Critique artifacts after CONCLUDE.
- `LOOP_DIAGNOSE` explicitly says diagnosis should read these archived artifacts, not just `finding.md`.
- The system should avoid unnecessary per-run processing and schema bloat.
- Attribution should not be forced into a discipline if the failure is framing, orchestration, context elicitation, or CONCLUDE.
- Hard routing from uncalibrated marks remains unsafe.

### Key Insights

- The archived outputs are not merely records; they are the diagnostic substrate.
- Adding upstream marks to every Critique output duplicates what a later diagnostic inquiry can infer from the archive.
- Critique's normal job is candidate evaluation; correction-chain diagnosis is a different task shape.
- The previous finding collapsed "Critique observes failure reasons" with "Critique should emit upstream discipline marks."
- `LOOP_DIAGNOSE` has a stronger evidence model because it compares a weak prior inquiry, human correction, and a later improved inquiry.

### Structural Points

- Routine loop artifact production and retrospective loop diagnosis are separate operations.
- `docarchive/` is a preserved evidence layer.
- `LOOP_DIAGNOSE` is a protocol wrapper around MVL+, not a new cognitive discipline.
- Diagnostic outputs should be hypotheses with confidence and evaluation gates, not authoritative labels.

### Foundational Principles

- Diagnose from evidence, not from labels when richer artifacts are available.
- Do not add a protocol burden to every run for a task that is only occasionally needed.
- Separate observation, diagnosis, and routing.
- Avoid premature formalization until repeated cases prove the pattern.

### Meaning-Nodes

- Existing artifacts.
- Retrospective diagnosis.
- Optional local refinement guidance.
- Correction-chain analysis.
- Attribution humility.
- Maintenance candidates.

## SV2 - Anchor-Informed Understanding

The issue is not whether upstream failures can be diagnosed. They can. The issue is where that diagnosis belongs. The stronger interpretation is that upstream diagnosis should usually be a retrospective, on-demand MVL+ diagnostic run over existing artifacts, while routine Critique may preserve local clues but should not be burdened with standardized upstream marks.

## Phase 2 - Perspective Checking

### Technical / Logical Perspective

If `docarchive/` already contains the discipline outputs, then mandatory upstream marks in Critique are derivative metadata. They compress evidence before the need for diagnosis is known. A later protocol can inspect the full evidence instead of relying on a precomputed label.

**New anchor:** diagnosis should be computed when needed from full artifacts, not precomputed as lossy labels by default.

### Human / User Perspective

The user is reacting to a real practical cost: adding marks everywhere creates process weight and can mislead future agents into thinking a label is the evidence. The user wants the system to use the existing archive intelligently.

**New anchor:** the correction is partly ergonomic: avoid making the loop heavier for every run.

### Strategic / Long-Term Perspective

`LOOP_DIAGNOSE` is a better long-term shape because it can accumulate real diagnostic cases before becoming a formal hook or skill. It supports maintenance without prematurely changing the base loop.

**New anchor:** keep diagnosis as an explicit protocol until repeated use proves stable trigger language and stable outputs.

### Risk / Failure Perspective

Mandatory upstream marks risk over-attribution. A Critique pass may blame Innovation or Sensemaking when the real problem is the user's prompt, branch framing, CONCLUDE compression, or orchestration. `LOOP_DIAGNOSE` explicitly includes those non-discipline failure surfaces.

**New anchor:** diagnostic scope must include loop framing and orchestration, not only upstream disciplines.

### Resource / Feasibility Perspective

Adding a required `Upstream Diagnosis` block to every Critique output increases cost and noise. Running a separate diagnostic inquiry only when a correction chain exists is cheaper and more focused.

**New anchor:** on-demand diagnosis has better cost placement than default mark production.

### Definitional / Consistency Perspective

Critique is defined as evaluating candidates against dimensions. Correction-chain diagnosis is not just candidate evaluation; it is comparative analysis across loop artifacts and human correction. Treating it as routine Critique output stretches Critique beyond its core role.

**New anchor:** `LOOP_DIAGNOSE` should frame diagnostic MVL+; Critique can participate inside that loop, but routine Critique should not own the whole diagnostic task.

## SV3 - Multi-Perspective Understanding

The model shifts from "Critique should produce upstream discipline marks" to "Critique already produces evidence, `docarchive/` preserves the evidence, and `LOOP_DIAGNOSE` should analyze it when diagnosis is the task." This avoids per-run mark inflation and handles non-discipline failure causes more honestly.

## Phase 3 - Ambiguity Collapse

### Ambiguity: Does "Critique should produce upstream marks" mean optional notes or required schema?

**Strongest counter-interpretation:** The phrase could mean only that Critique should include upstream diagnosis when useful, not that every Critique output must have a mandatory mark block.

**Why the counter-interpretation fails on structural grounds:** The prior finding's final recommendation says "Let Critique produce upstream discipline marks from kill/refine patterns." That makes the diagnosis mechanism sound like Critique-owned output, not an optional later diagnostic run. It also names marks, which invites routing and schema expectations.

**Confidence:** HIGH.

**Resolution:** Reframe routine Critique as preserving local evaluation evidence and refinement clues, not producing standardized upstream marks.

**What is now fixed?** Mandatory or expected upstream mark production in routine Critique is not the preferred design.

**What is no longer allowed?** Treating `Critique Upstream Diagnosis` as the default place where loop failure attribution happens.

**What now depends on this choice?** The corrected finding and any future MVL+ hook should point to `LOOP_DIAGNOSE` for explicit diagnostic tasks.

**What changed in the conceptual model?** Diagnosis moves from embedded Critique metadata to explicit retrospective inquiry over archived evidence.

### Ambiguity: Are `docarchive/` files enough for diagnosis?

**Strongest counter-interpretation:** Precomputed marks are easier for Resume, Navigation, and meta-loop tools than rereading multiple archived outputs.

**Why the counter-interpretation fails on structural grounds:** Diagnosis is not the same as routing. When diagnosing failure, the rich artifact trail matters more than speed. `LOOP_DIAGNOSE` explicitly reads archived artifacts and produces structured hypotheses, which can later become routable if needed.

**Confidence:** HIGH.

**Resolution:** `docarchive/` files are the primary evidence substrate for diagnosis. Marks, if produced later, are outputs of the diagnostic inquiry, not required inputs to it.

**What is now fixed?** The existence of archived artifacts reduces the need for default upstream marks.

**What is no longer allowed?** Claiming upstream diagnosis requires new marks inside each original Critique output.

**What now depends on this choice?** Future diagnostic protocols should require artifact reads, not label reads.

**What changed in the conceptual model?** The archive becomes an active diagnostic source, not passive storage.

### Ambiguity: What is "inner loop diagnose"?

**Strongest counter-interpretation:** Inner-loop diagnosis means diagnosing inside the same loop before CONCLUDE, so Critique must emit marks immediately.

**Why the counter-interpretation fails on structural grounds:** The user's proposed `loop_diagnose.md` frames diagnosis as a special MVL+ run over correction-chain artifacts. That is still internal to the improvement system, but it is not embedded in every base loop. It uses the loop recursively, not as a mandatory Critique subsection.

**Confidence:** MEDIUM-HIGH.

**Resolution:** Inner-loop diagnosis should mean an explicit diagnostic MVL+ inquiry when a correction chain exists.

**What is now fixed?** Diagnosis can be "inside the system" without being "inside every Critique output."

**What is no longer allowed?** Equating system self-maintenance with always-on mark emission.

**What now depends on this choice?** Future workflow design can keep MVL+ unchanged and add an explicit diagnostic wrapper.

**What changed in the conceptual model?** Self-maintenance becomes recursive use of MVL+ on artifacts, not extra responsibilities added to each discipline.

### Ambiguity: Should `LOOP_DIAGNOSE` be formally adopted now?

**Strongest counter-interpretation:** Since the protocol exists and fits the need, MVL+ should immediately add a hook.

**Why the counter-interpretation fails on structural grounds:** The protocol itself says not to add silent automatic diagnosis-mode inference and not to promote it until repeated runs show stable internal method and trigger language. One or two cases are not enough evidence for broad protocol change.

**Confidence:** HIGH.

**Resolution:** Use `LOOP_DIAGNOSE` explicitly when the user asks for correction-chain diagnosis; do not silently add it as a default behavior yet.

**What is now fixed?** The current answer can recommend the protocol, not require base MVL+ rewrites.

**What is no longer allowed?** Broad adoption from one correction chain.

**What now depends on this choice?** Maintenance candidate should be low-risk wording correction, not protocol overhaul.

**What changed in the conceptual model?** The innovation is staged: use, observe, then formalize if stable.

## SV4 - Clarified Understanding

The previous finding should be corrected. "Critique should produce upstream marks" is too strong and locates diagnosis in the wrong default place. Routine Critique should preserve evaluation evidence and may include local refinement clues. Actual upstream or loop-failure diagnosis should be performed by an explicit `LOOP_DIAGNOSE`-style MVL+ run that reads `docarchive/` and compares the correction chain.

## Phase 4 - Degrees-of-Freedom Reduction

### Fixed

- No authoritative discipline self-verdicts.
- No mandatory upstream mark block in every Critique output.
- `docarchive/` is the evidence substrate for diagnosis.
- `LOOP_DIAGNOSE` is the preferred framing for correction-chain diagnosis.
- Diagnostic conclusions must be hypotheses with confidence, not exact root-cause declarations unless evidence isolates cause.

### Eliminated

- Treating Critique as the always-on upstream attribution engine.
- Adding routable upstream marks before they are needed.
- Diagnosing loop failures from `finding.md` alone when archived discipline outputs exist.
- Forcing all failures into discipline names.

### Still Viable

- Optional Critique refinement notes when candidate failures reveal immediate next-iteration guidance.
- Explicit `LOOP_DIAGNOSE` runs when the user gives a weak prior result, correction signal, and improved result.
- Future MVL+ hook after enough explicit diagnostic runs prove the pattern.

## SV5 - Constrained Understanding

The corrected architecture is:

1. Base MVL+ runs normally and archives discipline artifacts.
2. Routine Critique evaluates current candidates and records kill/refine/survive reasoning.
3. CONCLUDE archives the evidence trail.
4. When a correction chain exists, `LOOP_DIAGNOSE` frames a new MVL+ inquiry over the weak prior inquiry, human correction, and corrected inquiry.
5. That diagnostic inquiry produces failure hypotheses, confidence, maintenance candidates, and evaluation gates.

This keeps the base loop lighter and makes diagnosis more evidence-backed.

## Phase 5 - Conceptual Stabilization

## SV6 - Stabilized Model

The stable model is: **archive first, diagnose on demand.**

The prior finding should preserve its rejection of discipline self-verdicts but replace the "Critique Should Produce Upstream Marks" idea with a sharper distinction:

- Critique produces candidate evaluation evidence.
- `docarchive/` stores full discipline evidence.
- `LOOP_DIAGNOSE` performs upstream or loop-level failure attribution from those artifacts when the user explicitly asks for correction-chain diagnosis.
- Any marks produced by diagnosis belong to the diagnostic finding, not to the original loop's routine Critique output.

Compared to SV1, the final model is more precise: the issue is not just "use a separate protocol." The deeper point is that diagnosis should be derived from complete archived evidence at the time diagnosis is needed, because precomputed upstream marks are both lossy and risk over-attribution.

## Sensemaking Telemetry

- **Perspective saturation:** reached; technical, user, strategic, risk, resource, and definitional perspectives converged.
- **Ambiguities resolved:** 4.
- **SV delta:** high; model shifted from simple correction to explicit archive-first/on-demand diagnosis architecture.
- **Anchor diversity:** constraints, key insights, structural points, principles, and meaning-nodes all represented.
- **Overall:** sufficient for Decomposition.
