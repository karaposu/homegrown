# Critique — Cheap Coverage Boost for /explore (Ship-Now)

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-13_07-39__cheap_coverage_boost_for_explore_now/_branch.md`

Input: `_branch.md` + `exploration.md` + `sensemaking.md` + `decomposition.md` + `innovation.md`. Candidate set: the "Filesystem Pre-Scan Mandate v1" assembly. Apply Phase 0 Dimension Construction with project-specific risks. Apply Multi-axis prosecution depth check at Phase 2: (a) user-perspective — does MUST actually force the bash call?; (b) specification-gap — what determines "success" in the fallback chain?; (c) failure-case scenario — what if all 4 invocations fail?

---

## Phase 0 — Dimension Construction

| # | Dimension | What it asks | Weight |
|---|---|---|---|
| **D1** | **Correctness** | Does the assembly boost coverage as promised? | **CRITICAL** |
| **D2** | **Coherence** | Preserves /explore mechanism; compatible with prior findings? | **CRITICAL** |
| D3 | Feasibility | Shippable in one session? | Moderate |
| **D4** | **Completeness** | Covers all aspects sensemaking surfaced? | **CRITICAL** |
| **D5** | **Robustness** | Survives edge cases (all-tools-fail, empty territory, weird success conditions)? | **CRITICAL** (flagged by failure-case prosecution) |
| D6 | Elegance | Minimum sufficient spec change? | Moderate |
| D7 | Duplicate-derivable-state | Avoids duplication? | Moderate |
| D8 | Operation-parsimony | Smallest set of new mechanisms? | Moderate |
| **D9** | **Phase-fit** | L0-L1 calibration appropriate? | **CRITICAL** |
| **D10** | **Explicit-culture-fit** | MUST/SHOULD/MAY consistent with project? | **CRITICAL** |
| **D11** | **User-perspective satisfaction** | "For sure" demand actually met? | **CRITICAL** |
| **D12** | **Specification completeness** | Are success criteria + all-fail behavior + audit-check fully specified? | **CRITICAL** (flagged by prosecution) |

8 critical, 4 moderate. **Project-specific risk dimensions check:** D7, D8 included; user-perspective D11 explicit. PASS.

---

## Phase 1 — Fitness Landscape

### Viable region

Candidates scoring HIGH on all 8 critical + at least passing on 4 moderate.

### Dead regions

- **D11-fail:** designs the user perceives as "soft" rather than "for sure"
- **D5-fail:** designs that don't handle edge cases (all-fail, empty, ambiguous success)
- **D12-fail:** designs with unspecified success criteria

### Boundary regions

- The current assembly sits on the boundary — passes all CRITICAL on the design level, but three specification gaps put it at the edge of D5, D11, D12

---

## Phase 2 — Adversarial Evaluation

### Multi-axis prosecution depth check (as requested)

#### (a) User-perspective objection on D11: Does MUST actually FORCE the bash call?

**Prosecution:** The spec says MUST. The runtime executor (the LLM running /explore) reads the spec and complies. If the LLM "decides" the listing isn't needed, it has violated the spec. **But:** how is the violation caught?

- Spec-text MUST is normative, not enforced at runtime.
- The telemetry field (`boundary_listing_invocation`) makes violation observable AFTER the run, not preventive.
- An LLM could output an exploration.md with `boundary_listing_invocation: skipped` and no reason, claiming the listing wasn't useful — passing spec text while violating spec intent.

**Strongest counter:** Spec text + telemetry + audit gives a 3-layer defense:
1. Spec text (MUST) — instructs the LLM
2. Telemetry (boundary_listing_invocation present) — records what happened
3. Audit (someone or something checks the telemetry) — catches violations

The third layer is the missing piece in the current assembly. Without an audit check, MUST is honor-system.

**Mitigation needed:** Add a structural check (extend `tools/structural_check.sh` for the `exploration` discipline) that verifies `boundary_listing_invocation` field is present and is one of the valid values OR `skip_listing_reason` is non-empty when `skipped`. If absent, the structural check FAILS, and /MVL+ would force a re-run of /explore. THIS is what makes the MUST hard.

**Confidence:** HIGH that the prosecution's concern is real. **REFINE target:** add the structural check to the assembly.

---

#### (b) Specification-gap probe on D12: What determines "success" in the fallback chain?

**Prosecution:** P1.2 says "first successful invocation wins" — but success is undefined.

Cases requiring definition:
- `tree -L 3` returns exit code 0 but empty stdout (empty directory) — success or failure?
- `tree` not installed — exit code is non-zero; is that "failure" (try next) or "fatal"?
- `git ls-files` outside a git repo — exit code non-zero (fatal? try next?)
- `find` returns 0 results — exit 0 with empty stdout; same as empty tree case
- `ls -R` succeeds even on `/` (would dump too much) — should we cap output?

**Strongest counter:** Reasonable defaults exist:
- Exit code 0 AND non-empty stdout → success
- Exit code != 0 → failure (try next entry in chain)
- Exit code 0 + empty stdout → "empty territory"; record `items_count: 0` and stop the chain (the territory IS empty; trying ls -R won't help)
- Output exceeds N lines → cap with `| head -200` already in the chain definitions for find and git ls-files; add same cap to ls -R

**Confidence:** HIGH that the gap is real. **REFINE target:** add explicit success criteria to P1.2.

---

#### (c) Failure-case scenario on D5: What if ALL 4 invocations fail?

**Prosecution:** What happens in environments where bash access is restricted, no filesystem is reachable, or permissions prevent any of the 4 invocations? The assembly currently has no answer.

Possible scenarios:
- Sandboxed environment with no bash
- Read-restricted directories
- Network-only territory (e.g., remote URLs as territory)

If none of `tree`, `git ls-files`, `find`, `ls -R` work, the mandate cannot be satisfied. What should /explore do?

**Strongest counter:** Three plausible behaviors, ranked best-to-worst:

1. **Fallback to Claude Code's Read tool on the directory**: Claude Code's Read tool (when given a directory path) provides a listing. This is ALWAYS available in any environment where /explore can run (since /explore is invoked from Claude Code). Adding this as the 5th fallback eliminates the all-fail case for almost all real environments.

2. **Record failure and proceed without listing**: log `boundary_listing_invocation: failed` + the failure reason; print a warning; the run proceeds but its self-assessment downgrades to FLAG (since coverage isn't guaranteed). The user sees the failure explicitly.

3. **HALT the run**: the strictest reading of MUST — if the mandate can't be satisfied, the run is invalid. Likely too aggressive.

**Recommended:** Add Claude Code's Read tool on the directory as a 5th fallback entry; if THAT also fails, log failure and proceed with FLAG self-assessment.

**Confidence:** HIGH that the failure case is real and unaddressed. **REFINE target:** add 5th fallback + all-fail behavior to P1.2.

---

### Dimension-level prosecution + defense per major dimension

| Dimension | Prosecution finds | Defense holds | Net |
|---|---|---|---|
| D1 Correctness | MUST is normative not enforced (until audit added) | Telemetry + audit = enforceable | PASS-with-REFINE |
| D2 Coherence | None significant | §3.3 extension is clean; respects discipline-runner separation; both prior findings preserved | PASS |
| D4 Completeness | Three spec gaps (success criteria, all-fail, audit check) | All major aspects covered at design level | PASS-with-3-REFINEs |
| D5 Robustness | All-fail case unaddressed | 5th fallback + FLAG-on-fail closes it | PASS-with-REFINE |
| D9 Phase-fit | None | L0-L1 appropriate; manual-v1 doctrine respected | PASS |
| D10 Explicit-culture-fit | None | MUST/SHOULD/MAY consistent | PASS |
| D11 User-perspective | MUST alone may feel "for sure" but isn't structurally enforced until audit ships | Audit-check addition closes the gap | PASS-with-REFINE |
| D12 Specification completeness | Success criteria undefined; all-fail undefined | Both REFINE targets resolve | PASS-with-2-REFINEs |
| D3, D6, D7, D8 (moderate) | None significant | Standard pass | PASS |

---

## Phase 3 — Verdicts + Constructive Output

### SURVIVE: "Filesystem Pre-Scan Mandate v1" Assembly with 4 REFINE targets

The full assembly survives adversarial testing on all 8 critical dimensions. Four pre-ship REFINE targets are spec-text additions, not redesign — each ~3-10 minutes:

**REFINE target 1 — Add audit/structural check.** Extend `tools/structural_check.sh` (or define an equivalent check in /MVL+'s spec) to verify that `exploration.md` outputs in artifact mode contain a `boundary_listing_invocation` field with a valid value. If absent OR `boundary_listing_invocation: skipped` without `skip_listing_reason` populated, the structural check FAILS. This converts MUST from honor-system to enforced.

**REFINE target 2 — Specify success criteria for the fallback chain.** Add to P1.2:

> *"Success criteria per chain entry: exit code 0 AND non-empty stdout = success (use this invocation's output). Exit code != 0 = failure (try next entry). Exit code 0 + empty stdout = empty territory; record `boundary_listing_items_count: 0`, log `boundary_listing_invocation` as the successful entry, and stop the chain (the territory IS empty; later entries can't recover content that doesn't exist). Output > 200 lines: cap with `| head -200` (already in find and git ls-files; add to ls -R if shipped)."*

**REFINE target 3 — Add 5th fallback entry and all-fail behavior.** Add to P1.2:

> *"5. **Claude Code's Read tool on the directory path** — always available when /explore runs inside Claude Code; returns a directory listing. Use this as the universal fallback when shell access fails.*
> 
> *If all 5 entries fail (rare; sandbox-restricted environments), log `boundary_listing_invocation: failed` and a one-line `boundary_listing_failure_reason`. Proceed with the run but downgrade the self-assessment (§4.5) from PROCEED to FLAG. The output explicitly notes that coverage cannot be guaranteed."*

**REFINE target 4 — Make the worked example reflect all-fail handling.** Add a second short paragraph to P1.6 showing what the telemetry looks like when listing fails (audit-trail clarity).

### Individual sub-piece verdicts (within the assembly)

| Piece | Verdict | Notes |
|---|---|---|
| P1.1-B (mandate) | SURVIVE | MUST + audit check makes it enforceable |
| P1.2 (fallback chain) | SURVIVE with 2 REFINEs | Add success criteria + 5th fallback + all-fail behavior |
| P1.3 (trigger) | SURVIVE | Clean |
| P1.4 (opt-out) | SURVIVE | Required-reason + warning is appropriate |
| P1.5 (telemetry) | SURVIVE with minor REFINE | Telemetry must include `boundary_listing_failure_reason` field for the all-fail case (not just `skip_listing_reason`) |
| P1.6 (worked example) | SURVIVE with minor REFINE | Add a second mini-example showing all-fail telemetry |
| P2 (B1 optional) | SURVIVE | Optional; no critical issues |
| P3 (placement) | SURVIVE | §3.3 + §5.3 + §2.1 are correct sections |
| P4 (deferred list) | SURVIVE | Revival triggers all PASS gate-specificity |
| P5 (relationships) | SURVIVE | Standard RELATED declarations |

### Deferred items revival-trigger evaluation

All 6 deferred items (C1, C5, C6, E1-from-exploration, F1, B1-if-not-shipped) have observable, condition-bound, or time-bound revival triggers. PASS.

### KILLed candidates from this critique

None new. P1.1-C (soft-default SHOULD) remains killed from innovation.

### Seeds from prosecution objections

- **Seed (audit/structural check):** Future structural_check.sh entries for all discipline outputs may want a similar mandate-enforcement layer. Project-corpus-level question.
- **Seed (5th fallback recognition):** Claude Code's Read tool on a directory IS a listing mechanism. Should the spec acknowledge this more broadly (e.g., for other tool-mandates)?

---

## Phase 3.5 — Assembly Check

The "Filesystem Pre-Scan Mandate v1" with 4 REFINE targets resolves all critique objections without changing the architecture. The 4 REFINEs are pre-ship spec-text additions; total additional work ~15-20 minutes on top of the ~30 minutes for the base assembly. Still well under one session.

**Project-specific risk dimensions** (already checked in innovation, re-validated here):
- Duplicate-derivable-state: LOW (no duplication)
- Operation-parsimony: STRONG (A1 alone is minimum-sufficient; the REFINEs add specification, not new mechanisms)
- Phase-fit: PASS
- Explicit-culture-fit: PASS

---

## Phase 4 — Coverage + Convergence

| Criterion | Met? | Reasoning |
|---|---|---|
| Clean SURVIVE with no critical-dimension caveats | YES with REFINEs | All 8 critical pass; 4 REFINEs are spec-text additions, not redesign |
| Two consecutive iterations no new regions | N/A | Single iteration |
| No unexplored regions likely viable | PASS | None flagged |
| Decreasing rate of new info | N/A | Single iteration |

**Signal: TERMINATE with ranked survivors + 4 REFINEs**

---

## Final Deliverable

### (a) Dimensions with weights

12 dimensions: 8 CRITICAL (Correctness, Coherence, Completeness, Robustness, Phase-fit, Explicit-culture-fit, User-perspective, Specification completeness) + 4 moderate.

### (b) Fitness Landscape

```
              VIABLE
                ▲ Pre-Scan Mandate v1 (with 4 REFINE targets)
                  P1.1-B + P1.2 + P1.3 + P1.4 + P1.5 + P1.6 + P3 + P4 + P5
                ◆ P2 (B1 optional adjunct)
                
              BOUNDARY
                None; all REFINEs are pre-ship spec work, not redesign
              
              DEAD
                ✗ P1.1-C (soft SHOULD; KILLed in innovation)
              
              UNEXPLORED
                ? Whether to introduce a more general "tool-mandate" framework for /explore (beyond just filesystem listing). Out of scope for this finding; preserved as research-frontier-possibility.
```

### (c) Candidate Verdicts (summary)

| Candidate | Verdict | Refine targets |
|---|---|---|
| Pre-Scan Mandate v1 Assembly | **SURVIVE** | (1) Audit/structural check; (2) Success criteria; (3) 5th fallback + all-fail behavior; (4) Worked example for all-fail telemetry |
| Individual pieces | All SURVIVE | Refinements distributed across P1.2 (2), P1.5 (1), P1.6 (1) |
| P2 (B1 optional) | SURVIVE | No refinements |
| Deferred items | SURVIVE | Revival triggers all PASS |

### (d) Coverage Map

- Viable region: mapped; full assembly + all individual pieces
- Boundary: empty (REFINEs are pre-ship)
- Dead: P1.1-C (killed in innovation)
- Unexplored: more general tool-mandate framework — out of scope

### (e) Signal: **TERMINATE** with ranked survivors

Primary: full assembly with 4 REFINE targets. The user can ship in one focused session (~45-60 minutes including refinements).

---

## Convergence Telemetry

- **Dimension coverage:** 12 dimensions (8 critical, 4 moderate). Project-specific risk axis: PASS. User-perspective: explicit.
- **Adversarial strength:** STRONG. Three multi-axis prosecution depth checks surfaced three real specification gaps (audit-check missing; success criteria undefined; all-fail behavior unspecified). All converted to pre-ship REFINEs.
- **Landscape stability:** STABLE (single iteration; clear viable region; boundary is empty).
- **Clean SURVIVE exists:** YES with 4 REFINEs (pre-ship spec work).
- **Failure modes observed:** None firing.
  - Wrong dimensions: PASS (12 dimensions; project-specific + user-perspective included)
  - Rubber-stamping: PASS (three significant prosecution wins resulted in REFINEs)
  - Nitpicking: PASS (4 REFINEs are all severity-weighted; no KILLs on minor issues)
  - Dimension blindness: PASS (D12 added during prosecution; user-perspective + project-specific covered)
  - False convergence: PASS (clean SURVIVE on substantive grounds with significant upstream constraint)
  - Evaluation drift: N/A (single iteration)
  - Self-reference collapse: PASS (external grounding via user's "for sure" demand + observable telemetry behavior)

---

## **Overall: PROCEED** (sufficient coverage + STRONG adversarial + STABLE landscape + clean SURVIVE on Pre-Scan Mandate v1 + 4 pre-ship REFINE targets + no failure modes observed).

Downstream (CONCLUDE) should compile a finding that:
1. Presents the Pre-Scan Mandate v1 as the actionable answer.
2. Lists the 4 REFINE targets as pre-ship work items (audit-check, success criteria, 5th-fallback + all-fail behavior, expanded worked example).
3. Names the 6 DEFERRED items with revival triggers.
4. Declares RELATED relationships to both prior findings.
5. Keeps the Summary section tight (per the user's "simple" constraint).
