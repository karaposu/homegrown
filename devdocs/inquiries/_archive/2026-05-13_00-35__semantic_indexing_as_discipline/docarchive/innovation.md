# Innovation: Semantic indexing — discipline, runner, artifact, or unnecessary?

## User Input

`devdocs/inquiries/2026-05-13_00-35__semantic_indexing_as_discipline/_branch.md`

Operating on: exploration + sensemaking + decomposition. Sensemaking committed 3-phase path + H1 rejection + claim test. Innovation refines activation-trigger wording + considers edge cases.

---

## Seed

Land the 3-phase recommendation with concrete activation triggers + claim-test framing that doesn't dismiss the user's intuition.

---

## Phase 2 — Generate (compact)

### M1 — Lens Shifting

**Generic — Evolutionary-software-architecture lens.** Software systems evolve through phases (artifact → tool → automated pipeline). The 3-phase path matches this.
→ Frame as "evolutionary phases" not "delayed implementation."

### M2 — Combination

**Generic — Combine with nav_north_star.md vision.** The 3-phase path is the realization of that vision.
→ Cross-reference + acknowledgment that user's intuition aligns with project's pre-existing vision.

### M3 — Inversion

**Generic — "User's claim is overreach" → invert:** "Maybe lookup IS most of the project's failure surface." Tested: exploration's Axis 2 showed mixed coverage; not "most." Inversion fails.

### M4 — Constraint Manipulation

**Generic — Add minimum-immediate-commitment constraint.** ADD: "Phase A's recommendation should be ZERO immediate spec edits."
→ The recommendation is research-frontier only; no immediate MUST.

### M5 — Absence Recognition

**Generic — Activation trigger detail.** The triggers need to be concrete + observable:
- Phase B trigger: "3+ inquiries observe need for whole-codebase lookup beyond 22-25's canonical-source-loading."
- Phase C trigger: "5+ index-refresh cycles per month" OR "L3+ autonomy reached."

**Focused — How would the trigger be observed?**
- Monitor per-inquiry behaviors: does the inquiry need to look up something that's neither a canonical spec nor a recent finding?
- Track refresh cadence: how often does Phase B's artifact get updated?

→ "Add a Monitoring section detailing how triggers are observed."

### M6 — Domain Transfer

**Generic — From release management:** ALPHA → BETA → GA pattern. Phase B = alpha (lightweight + manual); Phase C = beta/GA (automated).
→ Frame phases as alpha/beta/GA-style maturity.

### M7 — Extrapolation

**Generic — Project autonomy ladder L0–L4+:** index becomes mandatory at L3+; before that, optional. Activation trigger naturally aligns with autonomy progression.
→ Phase C activation = L3+ autonomy reached.

---

## Mechanism telemetry

7/7 mechanisms; converge on:
- Phase A: zero immediate commitment.
- Phase B activation trigger: 3+ inquiries observe whole-codebase lookup need.
- Phase C activation trigger: maintenance bottleneck (5+ refreshes/month) OR L3+ autonomy.
- Alignment with nav_north_star.md acknowledged.
- Claim-test framed respectfully ("partial coverage" not "wrong").

---

## Disposition

### ACTIONABLE
- 3-phase recommendation finalized per sensemaking SV6.
- Activation triggers concrete + observable.
- H1 rejection on Operation-Status Drift grounds.
- Claim-test framed as "partial coverage" (respectful + accurate).
- nav_north_star alignment noted.

### DEFERRED
- Phase B's actual implementation (when triggered): a separate inquiry to design the artifact format.
- Phase C's actual implementation (when triggered): a separate inquiry to design /staged-index runner.

### KILLED
- H1 (new /index discipline).
- Immediate Phase B adoption (premature).

---

## Telemetry

7/7 mechanisms; no failure modes.

**PROCEED to Critique.**
