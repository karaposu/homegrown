# Critique: Loop Diagnose - Project-Level Proxy Route Memory

## User Input

`devdocs/inquiries/2026-05-06_14-48__loop_diagnose__project_level_proxy_route_memory/_branch.md`, with `sensemaking.md`, `decomposition.md`, and `innovation.md` as current loop inputs.

## Phase 0 - Dimensions

| Dimension | Weight | Success Criteria |
| --- | ---: | --- |
| Diagnostic fit | 25 | Explains the actual correction chain without overstating that prior artifacts formally used project-level as the trigger. |
| Navigation coherence | 20 | Preserves one Navigation context-preparation flow while keeping full Route Memory Review conditional. |
| Prevention coverage | 20 | Catches bounded route-memory artifacts and broad/project-level no-source cases. |
| Scope control | 15 | Avoids global MVL+ or file-generation overcorrections not supported by this evidence. |
| Actionability | 15 | Produces concrete doc/protocol changes with evaluation gates. |
| Human clarity | 5 | Uses understandable names and avoids making users reason about "big" versus "bounded" Navigation modes. |

Dimension validation:

- The dimensions come directly from Sensemaking anchors: scale proxy, route-memory dependency, bounded artifacts, unified Navigation flow, status classification, and durable wording risk.
- Scope control is critical because this is a loop diagnosis from one correction chain, not proof of a general MVL+ invariant.
- Human clarity receives a lower weight than diagnostic and operational correctness, but it matters because the original smell was partly an unnatural user-facing model.

## Phase 1 - Fitness Landscape

### Viable Regions

- Source-dependency trigger rules that classify route-memory source presence, relevance, and need for current interpretation.
- Universal route-memory status recording for every Navigation run, paired with conditional full review.
- Regression examples that force bounded route-memory and broad no-source cases.
- Scoped wording/critique guards that prevent examples from becoming accidental routing rules.

### Dead Regions

- Full `route_memory_review.md` files for every skipped/non-review case.
- Global MVL+ invariants inferred from a single Navigation-specific failure.
- Any trigger phrased as "project-level" or "bounded" without a source-dependency test.

### Boundary Regions

- Example discipline and proxy-trigger critique checks are useful, but they must be scoped to routing/trigger policy. Applied everywhere, they become friction.
- Secondary operational claim guard is valuable as a final handoff check, but cannot replace upstream source taxonomy.

### Unexplored Regions

- Exact target file for implementation is not settled here.
- Whether later repeated loop diagnoses justify a global MVL+ proxy-trigger invariant remains open.
- Whether status telemetry alone is auditable enough should be checked after real Navigation runs.

## Phase 2 - Candidate Verdicts

### Candidate A - Source-Dependency Trigger Taxonomy

Prosecution: A taxonomy can become a naming exercise if it only says "old memory matters" again. It must name source type, relevance, and current-interpretation need.

Defense: This is the direct repair. It replaces scale with the real dependency and explains why bounded inputs can still need review.

Collision: Defense wins if the taxonomy is concrete and includes counterexamples. Without that, prosecution would reduce it to restated ambiguity.

Verdict: **SURVIVE**.

Constructive output: Define trigger as `PastNavigationMemoryFile detected + relevant to the current Navigation question + not already consumed/currently resolved`.

### Candidate B - Universal Route-Memory Status Record

Prosecution: This can add noise to every Navigation output if the status becomes verbose or ceremonial.

Defense: It solves the user's "Navigation is Navigation" concern without forcing full review every time. It gives one context-preparation interface across bounded and broad inputs.

Collision: Defense wins with compact status and reason. The file generation remains conditional.

Verdict: **SURVIVE**.

Constructive output: Every Navigation run should record `route_memory_status` and a short reason. Full review runs only for `review_needed`.

### Candidate C - Bounded Route-Memory Regression Matrix

Prosecution: A matrix can look like a test checklist without enforcement.

Defense: The precise prior miss was bounded inputs that are themselves route-memory artifacts. This candidate turns that missed case into a recurring gate.

Collision: Defense wins. The matrix is low-cost and targets the failure directly.

Verdict: **SURVIVE**.

Constructive output: Use at least these cases: bounded + source, bounded + no source, project-level + source, project-level + no relevant source.

### Candidate D - Example Discipline Guard

Prosecution: Too much wording hygiene can slow findings and make every example over-qualified.

Defense: The prior failure was partly durable examples sitting near operational routing guidance. A lightweight guard prevents likelihood hints from becoming rules.

Collision: Defense wins only with a scope limit.

Verdict: **REFINE**.

Constructive output: Apply when examples appear in durable trigger/routing policy. Require structural trigger plus one counterexample; do not require this for ordinary explanatory examples.

### Candidate E - Proxy Trigger Critique Dimension

Prosecution: A generic "proxy" dimension could become a broad critique tax and distract from the domain-specific issue.

Defense: Trigger/routing critiques need exactly this check because observable proxies are attractive and often wrong.

Collision: Boundary candidate. It is strong for trigger policy, weak as a universal critique dimension.

Verdict: **REFINE**.

Constructive output: Use only for routing, trigger, mode-selection, and policy-boundary decisions: "Is an observable proxy replacing the real dependency?"

### Candidate F - Secondary Operational Claim Guard

Prosecution: A final-stage guard can become a patch over weak upstream thinking and may still miss the issue if the finding is already compressed.

Defense: The prior branch asked about file necessity but proposed Navigation routing patches. This guard catches exactly that kind of secondary claim leakage.

Collision: Defense wins as a backstop, not as the main fix.

Verdict: **REFINE**.

Constructive output: In CONCLUDE, if a finding proposes operational routing outside its main question, it must either define the trigger structurally or mark trigger details as deferred.

### Candidate G - No-Op Review Artifact For Every Skip

Prosecution: It confuses explicit status with a full review operation and creates artifacts with no review object.

Defense: It maximizes explicitness and would make every skip auditable.

Collision: Prosecution wins. This codebase values explicit Markdown artifacts for meaningful operations, but a skipped full review is not the operation.

Verdict: **KILL**.

Seed: If status telemetry later fails audit, create a compact Navigation status ledger, not fake review files.

### Candidate H - Broad MVL+ Proxy-Trigger Invariant

Prosecution: One Navigation correction chain does not justify a global MVL+ rule. It risks turning every loop into proxy hunting.

Defense: Proxy substitution may be a recurring cognitive failure and a global invariant could prevent future misses.

Collision: Prosecution wins for now. The evidence supports a scoped Navigation/trigger-policy guard, not a global MVL+ patch.

Verdict: **KILL**.

Seed: Reopen if several independent loop diagnoses show proxy-trigger substitution across unrelated domains.

## Phase 3.5 - Assembly Check

The strongest assembly is:

```text
Source-Dependency Trigger Taxonomy
  + Universal Route-Memory Status Record
  + Bounded Route-Memory Regression Matrix
  + scoped Example Discipline Guard
  + scoped Proxy Trigger Critique Dimension
  + Secondary Operational Claim Guard
```

Assembly prosecution: This bundle can become too procedural if every piece is encoded as mandatory text everywhere.

Assembly defense: The pieces operate at different failure points: taxonomy fixes trigger definition, status fixes unified Navigation flow, regression examples catch bounded-source misses, example discipline protects durable wording, critique checks proxy substitution, and CONCLUDE catches secondary operational leakage.

Assembly verdict: **SURVIVE** with scope constraints.

Required refinement:

- Keep Navigation runtime/output burden compact.
- Keep full `route_memory_review.md` mandatory only for actual full review.
- Do not patch global MVL+ from this single diagnosis.

## Phase 4 - Coverage And Convergence

### Coverage Map

| Requirement | Covered By | Status |
| --- | --- | --- |
| Preserve artifact rule | A, B, assembly | covered |
| Replace scale with dependency | A, C, E | covered |
| Include bounded route-memory artifacts | A, C | covered |
| Keep Navigation unified | B, assembly | covered |
| Avoid fake review artifacts | G killed | covered |
| Avoid unsupported global rule | H killed | covered |
| Catch secondary routing claims | F | covered |
| Keep examples from becoming rules | D | covered |

### Convergence

The landscape is stable enough for CONCLUDE. Multiple candidates independently converge on the same repair:

```text
source-dependency trigger
  + universal route-memory status
  + conditional full review
  + scoped wording/critique guards
```

No additional innovation pass is needed for this diagnosis. The remaining uncertainty is implementation placement, not diagnostic structure.

## Signal

**TERMINATE** with ranked survivors:

1. Source-Dependency Trigger Taxonomy.
2. Universal Route-Memory Status Record.
3. Bounded Route-Memory Regression Matrix.
4. Scoped Example Discipline Guard.
5. Scoped Proxy Trigger Critique Dimension.
6. Secondary Operational Claim Guard.

Killed:

- No-Op Review Artifact For Every Skip.
- Broad MVL+ Proxy-Trigger Invariant.

## Convergence Telemetry

Dimension coverage: complete for current candidate set.

Adversarial strength: STRONG. Each candidate was tested against overcorrection, under-specification, and scope risk.

Landscape stability: STABLE. Survivors cluster around the same source-dependency/status model.

Clean survivor exists: yes. Candidate A survives cleanly; the assembly survives with explicit scope constraints.

Failure modes observed:

- Wrong dimensions: not observed.
- Rubber-stamping: avoided by killing G and H and refining D/E/F.
- Nitpicking: avoided by preserving A/B/C and the assembly.
- Dimension blindness: mitigated by including human clarity and scope control.
- False convergence: low risk; remaining unknowns are implementation placement and future telemetry.
- Evaluation drift: not observed.
- Self-reference collapse: mitigated by grounding in prior/corrected inquiry evidence and the user's correction.

Overall: **PROCEED TO CONCLUDE**.
