# Critique: Navigator Warm-Up v1/v2/v3 Sufficiency

## User Input

Evaluate the proposed Navigator warm-up routine (`v1`, `v2`, `v3`) and the innovation candidates: current-frontier lens, tiny session handoff, v3 trace-volume constraint, and possible separate recency command.

## Dimensions With Weights

| Dimension | Weight | Success Criteria |
| --- | ---: | --- |
| Navigation readiness | 30 | Gives Navigation usable session context without the user restating project state. |
| Currentness / recency correctness | 25 | Distinguishes recent, active, stale, superseded, corrected, and blocked material. |
| Simplicity / cost | 20 | Avoids unnecessary extra commands, excessive reads, and report bloat. |
| Coherence with Homegrown | 15 | Works for protocols, findings, branches, materializations, corrections, and code. |
| Trace scalability | 5 | Prevents v3 from generating unbounded trace volume. |
| Dogfood feasibility | 5 | Can be applied quickly to a real Navigation session. |

## Fitness Landscape

### Viable Region

Small refinements that make v1/v2/v3 Navigation-ready without turning the routine back into a large parameterized protocol.

### Dead Region

Approaches that either assume dates alone are enough, or add a heavy fourth command before dogfood proves the need.

### Boundary Region

Keeping `navigation_context_intake.md` as a tiny wrapper/index is viable only if it stays small and does not recreate parameter-heavy intake.

### Unexplored Region

Empirical behavior after dogfooding the routine on a full Homegrown Navigation session.

## Candidate Verdicts

### Candidate A - Add `Recent / Current Frontier` To v1 Or v2

#### Prosecution

This could become another vague summary section and fail to change Navigation behavior. If it merely lists recent folders, it adds no value beyond dates.

#### Defense

The concept directly addresses the main missing dimension: chronology does not equal currentness. A required section can force interpretation of active decisions, corrections, blockers, stale artifacts, and next gates.

#### Collision

Defense survives if the section is concrete and not just "recent files." It must require interpreted current state.

#### Verdict

**SURVIVE.**

Constructive requirement:

Add fields like:

```text
Recent changes that still matter
Active decisions/artifacts
Corrected or superseded items
Open gates/blockers
Stale or unsafe assumptions
Navigation implications now
```

### Candidate B - Add Tiny Session Handoff Wrapper

#### Prosecution

This may be unnecessary bureaucracy. The commands themselves could simply be run in order.

#### Defense

The user already identified the failure: warm-up is once per session, not per request. Without a handoff rule, future use can drift back into per-question intake.

#### Collision

Defense wins, but only if the wrapper stays tiny.

#### Verdict

**SURVIVE.**

Constructive requirement:

The wrapper should say only:

```text
Run v1/v2/v3 once per Navigation session.
Reuse outputs until source boundary changes or outputs become stale.
Navigation consumes the outputs as session context.
```

Do not recreate the full `navigation_context_intake.md` parameter set.

### Candidate C - Constrain v3 Trace Volume

#### Prosecution

Trace selection may cause the model to miss important traces because it chooses too few.

#### Defense

Unbounded trace generation is more dangerous for a warm-up routine because it makes the routine too expensive to use. v3 already enumerates all candidate traces first; selection can happen after enumeration.

#### Collision

Defense survives if v3 requires both enumeration and justified selection.

#### Verdict

**SURVIVE.**

Constructive requirement:

v3 should:

1. enumerate candidate traces by category;
2. select the traces most relevant to Navigation based on recency, risk, uncertainty, and current gates;
3. write only selected trace files unless the user asks for full tracing.

### Candidate D - Create A Separate Recency Warm-Up Now

#### Prosecution

This adds another stage before proving the cheaper current-frontier lens is insufficient. It risks duplicating v1/v2 reads and increasing session-start cost.

#### Defense

Recency is vital and may eventually deserve independent execution, especially when the inquiry archive grows.

#### Collision

The defense identifies a future extraction path, not a reason to create the command now.

#### Verdict

**KILL FOR NOW / DEFER AS EXTRACTION.**

Seed extracted:

If dogfood shows current-frontier is repeatedly needed without full v1/v2, create `navigator-warmup-recent.md` later.

### Assembly Candidate - v1/v2/v3 + Current Frontier + Handoff + Trace Selection

#### Prosecution

The assembly still depends on editing rough command files. v1/v2 have codebase residue and v3 has incomplete text. It is not ready as-is.

#### Defense

The assembly preserves the user's core breakthrough: warm-up should be concrete, forgiving, command-shaped, and gradually improvable. It adds only the missing operational properties.

#### Collision

The assembly survives with a refinement requirement: clean the files before treating them as canonical.

#### Verdict

**SURVIVE WITH REFINEMENT.**

Ranked survivor:

1. v1/v2/v3 as the primary Navigator warm-up routine.
2. Add current-frontier/freshness output.
3. Add tiny once-per-session handoff.
4. Add v3 trace selection.
5. Defer separate recency command until dogfood evidence.

## Coverage Map

| Concern | Covered? | Notes |
| --- | --- | --- |
| Are the files good enough as a spine? | Yes | Strong staged shape. |
| Are they operationally final? | Yes | No; needs cleanup/refinement. |
| Is recency missing? | Yes | Dates are insufficient by themselves. |
| Is a separate recency command needed now? | Yes | No; defer extraction. |
| What should be edited first? | Yes | Current frontier, session handoff, v3 scope, non-code wording. |
| Empirical dogfood result | No | Must be tested after edits. |

## Signal

**TERMINATE** this inquiry with a ranked survivor.

The original question is answered. No second MVL+ iteration is needed.

## Convergence Telemetry

- **Dimension coverage:** strong. Dimensions cover Navigation readiness, recency, simplicity, Homegrown coherence, trace scalability, and dogfood feasibility.
- **Adversarial strength:** strong enough for this decision. Candidate D was killed/deferred; survivors carry refinement requirements.
- **Landscape stability:** stable. New candidates converged on a small refinement set.
- **Clean survivor exists:** yes, but as "survive with refinement," not "ready as-is."
- **Failure modes observed:** no rubber-stamping; no nitpicking. Some self-reference risk exists because Homegrown is evaluating its own warm-up routine, but evidence is grounded in direct file reads and user corrections.
- **Overall:** PROCEED.
