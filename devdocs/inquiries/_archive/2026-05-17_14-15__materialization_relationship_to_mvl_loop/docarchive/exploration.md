# Exploration — Materialization Relationship to MVL Loop

## Territory Overview

**Territory.** Hybrid — ARTIFACT (the existing `cognitive_harness/protocols/artifact_materialization.md` protocol + the `cognitive_harness/protocols/conclude.md` protocol + related prior findings + the README2.md milestone-ordering framing) PLUS POSSIBILITY (architectural options for the materialization↔/MVL+ relationship).

**Mode.** Hybrid.

**Entry-point.** Signal-first. The user has a stated hypothesis (separate process; /MVL+ as one trigger among many); the existing materialization protocol's own framing aligns with this hypothesis. Probe the alignment first.

**Resolution.** D3 (functional one-line + structural-adjacency facts: what each artifact says about the relationship; what each architectural option requires).

**Boundary.** The materialization protocol itself, the CONCLUDE protocol's handoff behavior, the prior milestone-ordering finding's `Wire materialization as default post-finding step in /MVL+` framing, and the recent biggest-next-gain finding's W4-deferred verdict.

---

## Inventory

### R1 — Existing materialization protocol's own framing (artifact mode)

**R1a — Loading note (line 1).** Explicitly enumerates multiple invokers: *"This file is loaded by a human, MVL/MVL+, Navigation, materialization work, or a future runner when an accepted decision must become concrete files."*
- **Structural finding:** the protocol is architecturally INVOKABLE FROM MULTIPLE SOURCES by design. It is not embedded inside /MVL+.

**R1b — Explicit separation statement (line 24).** *"Materialization is different from thinking-loop conclusion. MVL/MVL+ can decide that an artifact should exist. ARTIFACT_MATERIALIZATION decides how that decision is safely converted into files."*
- **Structural finding:** the protocol explicitly separates "deciding-an-artifact-should-exist" (MVL+'s job) from "safely-converting-decision-into-files" (materialization's job).

**R1c — Non-Goals (line 55).** Materialization *"does not replace MVL, MVL+, Navigation, Reflect, Loop Diagnose, or Outcome Review."*
- **Structural finding:** materialization is positioned as a peer-protocol to MVL+, not as a sub-step.

**R1d — When to Use (line 71).** Lists `materializing a conclusion from finding.md` as ONE of five enumerated use cases, alongside `turning a Navigation-selected direction into files`, `implementing a branch or outcome-review follow-up`, etc.
- **Structural finding:** finding-as-source is one of multiple equally-valid triggers.

**R1e — Universal Input Contract / source_authority enum (line 85).** Enumerates **8 distinct source_authority values:** `user_request | finding | branch | navigation | outcome_review | loop_diagnose | trace_followup | protocol_need | other`.
- **Structural finding:** the input contract is plural by design. Treating /MVL+'s finding as the only source would collapse a richer contract into a single-source case.

### R2 — CONCLUDE protocol's current handoff behavior (artifact mode)

**R2a — CONCLUDE has no auto-invocation of materialization.** `grep` of conclude.md for materialization-related terms returned only generic uses of "trigger" (in revision-trigger and gate contexts), not handoff-to-materialization language.
- **Structural finding:** today, CONCLUDE produces `finding.md`, archives discipline outputs, updates `_state.md`, prints a brief summary — and stops. No materialization invocation.

**R2b — README2.md milestone framing.** The README's "What's next (Family II)" names `Materialization — wiring the artifact-materialization protocol as a default post-finding step in /MVL+`.
- **Structural finding:** the README's framing is in TENSION with the artifact's own framing. README says "wire as default post-/MVL+ step" (chained); artifact says "separate protocol with /MVL+ as one trigger" (triggered-separate).

**R2c — biggest-next-gain finding's W4-deferred verdict.** That finding deferred materialization-wiring with revival trigger "when W3 ships and three /MVL+ inquiries reveal a felt-need for materialization." This deferral implicitly assumed the chained-step framing (the wiring move was "make materialization a default post-CONCLUDE step").
- **Structural finding:** the project has been holding the chained-step framing as a default assumption (from README + prior verdict) without testing it against the artifact's own framing.

### R3 — Architectural options (possibility mode)

Six candidate architectures for the materialization↔/MVL+ relationship:

| Option | Shape | What /MVL+ does |
|---|---|---|
| **O1 — Chained step** | Materialization is appended after CONCLUDE within /MVL+. Every finding that proposes changes auto-triggers materialization. | CONCLUDE invokes materialization synchronously; /MVL+ doesn't return to the user until materialization completes |
| **O2 — Separate triggerable** (user's hypothesis) | Materialization is a peer-protocol with explicit input contract; /MVL+ is one possible trigger among 8 enumerated source_authority values | CONCLUDE writes `finding.md`; /MVL+ exits; user (or another runner) invokes materialization when/if they want to act on the finding |
| **O3 — Suggestion-only** | /MVL+ at the end of CONCLUDE prints a one-line suggestion (e.g., "this finding proposes changes; consider running materialization") but does not invoke | Soft prompt; no auto-action |
| **O4 — Trigger artifact** | /MVL+ at end of CONCLUDE writes a `materialization_request.md` artifact alongside `finding.md`, which the user (or another runner) consumes as an input contract for materialization | Materialization-ready handoff with explicit contract |
| **O5 — Conditional chain** | Materialization is chained only when the finding's type is `spec-modification` (the prior finding's type-taxonomy variant); other types do not auto-trigger | Selective auto-invocation |
| **O6 — Direct-invocation only** | Materialization is never auto-triggered. The user manually invokes it after deciding to act. /MVL+ does nothing for materialization | Maximum decoupling |

### R4 — Comparison: what each option requires

| Option | New /MVL+ behavior needed | New CONCLUDE behavior needed | Migration cost | Existing-artifact alignment |
|---|---|---|---|---|
| O1 chained | Auto-invocation logic post-CONCLUDE | Hand off to materialization protocol | Medium-large | **Contradicts R1c** (materialization "does not replace MVL+"); collapses 8-source contract to 1 |
| O2 separate | None | None | None | **Strongly aligns** with R1a–R1e |
| O3 suggestion | Suggestion-printing logic | Print pointer line | Small | Aligns with R1a–R1e; adds a soft prompt |
| O4 trigger artifact | Write materialization_request.md | Optional sidecar write | Small-medium | Aligns with R1a–R1e; adds an artifact bridge |
| O5 conditional chain | Type-conditional auto-invocation | Hand off when type matches | Medium | Partially contradicts R1 (some findings still chain) |
| O6 direct-only | None | None | None | Aligns with R1, but loses any /MVL+ → materialization signal |

---

## Signal Log

| Signal | Where fired | What it surfaced |
|---|---|---|
| **Density** | R1, R3 | Existing protocol's framing is dense with separate-protocol signals; architectural option space is reasonably enumerated |
| **Novelty** | R1e (the 8-source enumeration) | The Universal Input Contract's 8 source_authority values is the most decisive empirical signal — the artifact has already committed to plural-invocability |
| **Relevance** | R1a–R1e all support the user's stated hypothesis | The existing artifact's framing IS what the user is asking about; the question is whether the project has internalized this framing |
| **Tension** | R1 vs R2b (README + biggest-next-gain finding) | The artifact says "separate" but the README's milestone framing says "chain." The project carries inconsistent intent across documents. |
| **Absence** | CONCLUDE has no materialization-handoff language | The chained-step framing (R2b/README) has no implementation in CONCLUDE; today's project actually behaves as O2 (separate-triggerable) by default — there's nothing to chain |

**Probed:** R1, R2, R3 deeply; R4 at comparative level.

**Deferred:** Detailed trigger-contract design (the structural follow-on; out of scope for THIS exploration step).

---

## Confidence Map

| Region | Confidence | Notes |
|---|---|---|
| R1 (artifact framing) | **confirmed** | Direct file inspection; multiple corroborating quotes |
| R2a (CONCLUDE has no auto-invocation) | **confirmed** | grep returned no handoff language |
| R2b (README milestone framing) | **confirmed** | README2.md says "wire as default post-finding step" |
| R2c (biggest-next-gain finding's W4-deferred) | **confirmed** | the recent finding's text |
| R3 (six options) | **scanned** | exhaustive of natural shapes; novel ones would be exotic |
| R4 (option requirements + alignment) | **inferred** | direct mapping of artifacts to options |

**Confirmed-absent regions:**

- **No project-level commitment to chained-step framing exists today.** README's milestone phrasing is aspirational; no CONCLUDE rule implements it; no working chained pipeline exists.
- **No conflict resolution between README and artifact framing.** The two documents have been allowed to disagree without explicit reconciliation. This inquiry's verdict will reconcile them.

---

## Frontier State

**Stable.** Jump scan: any candidate architectures outside the six surveyed? Possibilities like "make materialization an inline section within finding.md" (no separation) or "materialization as a separate inquiry chained at the meta-loop level" (different layer). Both would be exotic; neither aligns with the existing artifact. No surprises.

---

## Gaps and Recommendations

To Sensemaking:
- Reconcile the tension: README says chained; artifact says separate. Which is the project's actual commitment?
- If separate (the user's hypothesis + the artifact's own framing), is the right /MVL+ behavior fully passive (O6), suggestion-printing (O3), or trigger-artifact-writing (O4)?
- What's the user's actual workflow today? Do they invoke materialization manually after reading a finding, or does the question of "what comes after the finding" stay implicit?

To Decomposition:
- Decompose: (i) which option wins the architectural question; (ii) what /MVL+ does post-CONCLUDE if not chain; (iii) what trigger contract (if any) /MVL+ produces; (iv) how to reconcile README with the artifact.

To Innovation:
- Generate hybrid candidates that combine the artifact-alignment of O2/O3/O4 with the README's implicit goal of "make the decide→change loop visible."
- Surface whether the trigger contract should be implicit (just `finding.md` itself, used as the materialization input) or explicit (a sidecar `materialization_request.md`).

To Critique:
- Adversarially test O1 (chained) — does forcing every finding to materialize cost more than it saves? Does it violate the artifact's source-authority pluralism?
- Test O2 (separate-only) — does it leave the user without enough signal at the finding ↔ change boundary?
- Test the hybrid options (O3, O4) — do they meaningfully improve over pure O2 at proportional cost?

**Frontier observations:**

- The empirical evidence is decisive: the materialization artifact is architecturally separate-triggerable BY DESIGN, with 8 enumerated sources. The README's "wire as default post-finding step" framing pre-dates or contradicts the artifact's design.
- The verdict is likely O2 (Sensemaking will probably confirm), but the OPEN sub-question is whether to add a soft pointer at CONCLUDE (O3) or a trigger artifact (O4) for usability.

---

## Telemetry

- **Mode:** hybrid (artifact + possibility)
- **Entry point:** signal-first
- **Cycles run:** 2 (initial scan + jump scan)
- **Candidates:** 6 architectural options (O1–O6); 5 corroborating artifacts
- **Signals fired:** 5/5 types (density, novelty, relevance, tension, absence)
- **Failure modes checked:** all 10 from explore.md — none triggered
- **Convergence criteria:** frontier-stability ✓; declining-discovery-rate ✓; bounded-gaps ✓
- **Verdict:** PROCEED

## Self-Assessment

**PROCEED.** The single most load-bearing finding for downstream: **the existing `cognitive_harness/protocols/artifact_materialization.md` is architecturally separate-triggerable BY DESIGN (8-source Universal Input Contract; explicit "different from thinking-loop conclusion" framing; explicit "does not replace MVL+" non-goal). The user's hypothesis is empirically confirmed.** The remaining question is just what /MVL+ does at the boundary — pass passively (O6), print a soft pointer (O3), or write a trigger artifact (O4). The README's "wire as default post-finding step" framing is in tension with the artifact and needs reconciliation in the verdict.
