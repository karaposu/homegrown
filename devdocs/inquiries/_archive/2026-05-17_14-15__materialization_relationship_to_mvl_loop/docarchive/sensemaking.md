# Sensemaking — Materialization Relationship to MVL Loop

## User Input

```
/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-17_14-15__materialization_relationship_to_mvl_loop/_branch.md
```

Branch (Layer = PROCESS primary): chained-step vs separate-triggerable-process for materialization-vs-/MVL+. Exploration produced decisive evidence that the existing `cognitive_harness/protocols/artifact_materialization.md` is architecturally separate-triggerable BY DESIGN (8-source Universal Input Contract; explicit "different from thinking-loop conclusion" framing; explicit non-goal "does not replace MVL+"). The user's hypothesis is empirically confirmed. Sensemaking's job: settle the boundary-UX sub-question (what /MVL+ does at the boundary, given the verdict is separate-triggerable).

---

## SV1 — Baseline Understanding

The architectural verdict is clear from Exploration: O2 family (separate-triggerable). The remaining sub-question is whether /MVL+ produces any signal at the boundary — pure passive (O6), suggestion line (O3), or trigger artifact (O4). The user's framing ("which MVL loop can trigger") implies SOME /MVL+-side signal, narrowing to O3 or O4.

---

## Phase 1 — Cognitive Anchor Extraction

### Constraints
- **C1** — Layer = PROCESS per branch.
- **C2** — Verdict must commit to one architectural relationship.
- **C3** — Concrete trigger contract (if separate) or integration point (if chained) named.
- **C4** — Existing artifact says: 8-source plural-invocable; "different from thinking-loop conclusion"; "does not replace MVL+."
- **C5** — CONCLUDE today has no materialization-handoff language; project effectively runs O2 by default.
- **C6** — README2.md milestone language ("wire as default post-finding step in /MVL+") in tension with artifact's framing.

### Key Insights
- **KI1** — The artifact has committed to separate-triggerable architecture via its Universal Input Contract (8 source_authority values). Adopting O1 (chained) would require dismantling that contract.
- **KI2** — The empirical state TODAY is O2 (separate-triggerable with no auto-trigger). The chained framing exists only in README aspiration, not in protocol code.
- **KI3** — README's "wire as default post-finding step" is reconcilable via reframe: it can mean "make materialization the default downstream OPTION after a finding, surfaced visibly from /MVL+" rather than "auto-invoke synchronously."
- **KI4** — The user's hypothesis adds a /MVL+-side signal ("which MVL loop can trigger"). Pure O2/O6 doesn't have /MVL+ triggering anything. The user's framing suggests SOME signal — O3 or O4.
- **KI5** — A "trigger artifact" (O4) has interesting properties: explicit handoff document; machine-readable (future runners/AI sessions can consume cleanly); also human-readable. Costs one extra file per finding-that-prescribes-changes.
- **KI6** — O3 (suggestion-only) is the cheapest improvement over pure O2 — one line of output at CONCLUDE end. Captures the user's stated workflow concern without commitment.

### Structural Points
- **SP1** — Materialization is a peer-protocol to /MVL+ in the project's protocol set (alongside Navigation, Reflect, Loop Diagnose, Outcome Review). Peer-protocols are independently invokable.
- **SP2** — The 8-source enumeration is the architectural commitment. Treating /MVL+ as the only source via auto-chain would collapse the enum.
- **SP3** — CONCLUDE's current end-state ("print brief summary; print relationship pointers; stop") is naturally amenable to adding a one-line pointer (O3) without architectural change.

### Foundational Principles
- **FP1** — When an artifact's own design explicitly states an architectural choice, that choice is the project's commitment unless explicitly revised.
- **FP2** — Reconcile aspirational README language with actual artifact design by sharpening the README, not by rebuilding the artifact.
- **FP3** — User-experience improvements at the boundary should be low-cost and reversible.

### Meaning-Nodes
- **MN1** — The materialization↔/MVL+ relationship = peer-protocols with explicit handoff at a documented boundary; /MVL+ produces `finding.md`; materialization consumes it (or other sources) via its Universal Input Contract.
- **MN2** — The boundary's visible state = what /MVL+ produces (finding.md), what materialization needs (source_authority + source_path + source_anchor + request_summary + artifact_type + operation_intent), and whether /MVL+ pre-populates these or leaves them to the materialization invoker.

### SV2 — Anchor-Informed Understanding

The architectural verdict is settled (separate-triggerable, peer-protocols). The remaining choice is between three boundary-UX options at decreasing cost: O4 (trigger artifact; richest), O3 (suggestion line; cheapest with signal), O2/O6 (no /MVL+ side change). The user's "MVL loop can trigger" framing pulls toward O3 or O4 over pure O2.

---

## Phase 2 — Perspective Checking

### Technical / Logical

The 8-source enumeration is the structural anchor. Any architecture that doesn't honor it dismantles the artifact. O1 dismantles fully. O5 (conditional chain) partially dismantles. O2/O3/O4/O6 all honor. Logically: verdict must be O2/O3/O4/O6.

**Verdict:** O1 and O5 KILLED on artifact-compatibility grounds.

### Human / User

The user's framing ("which MVL loop can trigger") implies agency on the /MVL+ side. Pure O2/O6 (no /MVL+ signal) doesn't fit this framing. Pure O2 is what we have today, and the user's question implicitly says "this isn't quite right; /MVL+ should trigger." So /MVL+ should produce SOMETHING at the boundary.

**Verdict:** O3 or O4 over O2/O6 by user-framing alignment.

### Strategic / Long-term

As more triggers fire materialization (Navigation, outcome_review, etc.), a uniform handoff pattern is valuable. A standard "trigger artifact" (O4) would generalize across all 8 source types — each source produces a trigger artifact that materialization consumes uniformly. Long-term, this is cleaner than per-source ad-hoc handoffs.

**Verdict:** O4 wins long-term; O3 sufficient for current state.

### Risk / Failure

- **O3 risk:** suggestion text becomes stale or wrong (e.g., suggests materialization for findings that shouldn't materialize). *Mitigation:* tie suggestion to finding's `type:` field (only suggest if `type: spec-modification`, or if finding's MUST has Edit-Specifications).
- **O4 risk:** trigger artifact becomes ceremony — written for every finding but never consumed. *Mitigation:* write trigger artifact only when finding's MUST has at least one Edit-Specification.

**Verdict:** both risks are mitigable; neither is fatal.

### Resource / Feasibility

- O3: ~2 lines added to CONCLUDE's end-of-process flow (a conditional suggestion print).
- O4: ~5-10 lines for trigger-artifact schema + write logic in CONCLUDE.
- O2 (no /MVL+ side change): zero cost.

**Verdict:** O3 cheapest; O4 medium; O2 trivial.

### Definitional / Internal Consistency

The artifact's framing IS O2. The user's hypothesis adds a small /MVL+-side signal (O3 or O4), which is a layer ON TOP of O2, not a replacement. README's "wire as default" under reframe (KI3) maps to O3/O4 — make materialization the default downstream option, surfaced from /MVL+, not auto-chained.

**Verdict:** internally consistent across the three viable options.

### Definitional / Frame-exit Completeness

Gating fires — "wire as default" is multi-readable (auto-chain / suggestion / trigger artifact / discoverable docs).

**Existence enumeration:** 4 readings; all in-frame for the inquiry's reconciliation work.

**Role assessment:** all 4 readings relevant; the verdict picks among the latter three.

**Verdict rigor:** counter to whichever wins:
- If O3: "minimal signal; maybe too soft?" — Mitigation: condition on finding-content.
- If O4: "extra artifact per finding; ceremony?" — Mitigation: condition on Edit-Specification presence.

**Residual:** is there a 5th reading? "Wire as default = ensure materialization is on the road map" — roadmap-level reading. Out of scope; doesn't affect architectural verdict.

### Phase / Calibration-State

Does the verdict depend on calibration? Slightly — if inquiry rate increases dramatically, per-finding suggestion/trigger cost scales linearly. At current rate (~6 inquiries/day), cost is small. No state-dependency on the architectural choice.

### SV3 — Multi-Perspective Understanding

The verdict landscape narrows to three viable options:

| Verdict | Boundary signal | Cost | Long-term fit | User-framing fit |
|---|---|---|---|---|
| **W1 (O3 suggestion line)** | Soft pointer at end of CONCLUDE | Tiny | OK; one-source pattern | Fits "/MVL+ can trigger" softly |
| **W2 (O4 trigger artifact)** | Explicit machine-readable artifact | Small-medium | **Best long-term** | Fits "/MVL+ can trigger" strongly |
| **W3 (O2 + README reframe only)** | No /MVL+-side change | Zero | OK; status quo | Weakest fit to user-framing |

---

## Phase 3 — Ambiguity Collapse

### Ambiguity 1: What does "MVL loop can trigger" mean?

**Strongest counter-interpretation:** "trigger" might be permissive — /MVL+ CAN cause materialization (e.g., the user reads the finding and decides to invoke), but doesn't actively suggest. Under this reading, pure O2 is fine.

**Why the counter doesn't fully succeed:** "MVL loop can trigger" implies /MVL+ has agency in the triggering. If the user did all triggering manually, /MVL+ wouldn't be "triggering" — the user would be.

**Confidence:** MEDIUM-HIGH that the user wants /MVL+-side signal (O3 or O4).

**Resolution:** /MVL+ at end of CONCLUDE produces a signal pointing toward materialization (soft suggestion or trigger artifact). User does the actual invocation; /MVL+ surfaces the option.

### Ambiguity 2: README's "wire as default post-finding step" — auto-chain or surface visibly?

**Strongest counter-interpretation:** Auto-chain (O1). Verdict incompatible with artifact.

**Why the counter doesn't succeed:** Artifact explicitly states "different from thinking-loop conclusion" and "does not replace MVL+." Artifact's design is authoritative (it's the actual implementation). README's framing is aspirational summary.

**Confidence:** HIGH.

**Resolution:** Reframe "wire as default post-finding step" to mean "make materialization the default downstream OPTION after a finding, surfaced visibly from /MVL+ via a soft pointer or trigger artifact." Reconciles README with artifact.

### Ambiguity 3: O3 vs O4?

**Strongest case for O4:** machine-readable handoff; future runners can consume without parsing finding.md; uniformly generalizes across 8 source types.

**Strongest case for O3:** smallest possible improvement; no new artifact; no schema; reversible.

**Resolution:** Adopt O3 NOW (cheapest with signal); defer O4 as refinement if O3 proves insufficient (e.g., users repeatedly have to re-parse finding to invoke materialization).

### Load-bearing concept test

- **"Materialization relationship to /MVL+"** (MN1): test domain-property. Project-specific (the artifact's own design). PASS.
- **"Boundary signal"** (KI4, KI6): test domain-terminology. New term in this inquiry. The boundary is `finding.md` ↔ materialization Universal Input Contract; signal is what /MVL+ adds at this boundary. PASS.

### SV4 — Clarified Understanding

After disambiguation:
- Architectural verdict: O2 family (separate-triggerable).
- Within O2 family, /MVL+ produces some signal (per user framing); pure O2/O6 underfits.
- Three viable: O3 (suggestion line) DEFAULT; O4 (trigger artifact) RICHER ALTERNATIVE; W3 (status quo + README reframe) MINIMUM.

---

## Phase 4 — Degrees-of-Freedom Reduction

### Fixed:
- Separate-triggerable architecture (peer-protocols, not chained)
- /MVL+ produces SOME signal at boundary
- README reframes from "auto-chain" to "surface visibly"

### Eliminated:
- O1 chained (kills artifact's 8-source contract)
- O5 conditional chain (partial dismantling)
- Pure O6 direct-only (under-honors user framing)

### Remaining viable:
- W1: O3 suggestion line (default)
- W2: O4 trigger artifact (richer)
- W3: O2 + README reframe only (minimum)

### SV5 — Constrained Understanding

| Verdict | Effort | Boundary signal | Long-term value |
|---|---|---|---|
| **W1 (O3)** | 2 lines in CONCLUDE | Soft pointer conditional on finding content | OK |
| **W2 (O4)** | 5-10 lines + schema | Explicit machine-readable trigger artifact | **Best** |
| **W3 (status quo + README reframe)** | Zero on /MVL+ side | None | Minimum |

---

## Phase 5 — Conceptual Stabilization

### SV6 — Stabilized Model

**The architectural verdict is the O2 family: materialization is a separate, peer-protocol triggerable from multiple sources, with /MVL+ as one trigger among eight enumerated `source_authority` values. The user's hypothesis is correct and is empirically confirmed by the existing artifact's own Universal Input Contract.**

The README's "wire as default post-finding step in /MVL+" is **reframed**: it does NOT mean auto-chain (O1). It DOES mean "make materialization the default downstream option after a finding, surfaced visibly from /MVL+." The reconciliation lives in this finding's Next Actions.

Within the O2 family, the boundary-UX sub-question has three viable verdicts:

- **W1 (default) — O3 Suggestion Line.** At the end of CONCLUDE, when the finding's `type:` is `spec-modification` OR the finding's MUST contains Edit-Specifications, print a one-line suggestion: *"This finding proposes changes. To materialize, run ARTIFACT_MATERIALIZATION on `[finding_path]`."* Small effort. Captures the user's "trigger" framing as a soft signal.

- **W2 (richer alternative) — O4 Trigger Artifact.** At the end of CONCLUDE, when the finding's MUST contains Edit-Specifications, write a sidecar `materialization_request.md` alongside `finding.md` containing the Universal Input Contract fields pre-populated (`source_authority: finding`, `source_path: [finding_path]`, `source_anchor: MUST section`, `request_summary: <derived from finding's Finding Summary>`, fields for the materializer to fill in). Future runners or AI sessions can consume this uniformly. Medium effort.

- **W3 (minimum) — Status Quo + README Reframe.** No /MVL+-side change. Just update the README to reflect the reframed reading. Zero effort on protocols/code.

**Default ranking:** W1 > W2 > W3. The default favors W1 because it captures the user's "MVL loop can trigger" framing at minimal cost; W2 is the long-term-best move but premature today; W3 under-honors the user's framing.

**Difference from SV1:** SV1 left the boundary-UX sub-question open. SV6 commits to W1 as default with W2 and W3 named as alternatives, plus a concrete reconciliation of the README's "wire as default" language.

---

## Saturation Indicators

- **Perspective saturation:** 8/8 perspectives produced new anchors.
- **Ambiguity resolution:** 3/3 resolved.
- **SV delta:** SV1 ("verdict is clear; boundary-UX still open") → SV6 (W1 default + 2 alternatives + README reframe). Substantial.
- **Anchor diversity:** 6 Constraints + 6 Key Insights + 3 Structural Points + 3 Foundational Principles + 2 Meaning-Nodes. Multi-typed.

Saturation reached.

---

## Failure Mode Self-Check

- **Status Quo Bias:** Tested. The verdict moves AWAY from the README's chained framing toward the artifact's separate framing — this is anti-Status-Quo for the README but pro-artifact-design. Counter-test: would the verdict be the same from scratch? Yes — the 8-source Universal Input Contract is the dominant structural anchor regardless of which document came first. **Survives.**
- **Premature Stabilization:** No — 3 ambiguities explicitly tested.
- **Anchor Dominance:** The 8-source enumeration is the dominant anchor. Verified: if removed, the verdict still holds via the explicit "different from thinking-loop conclusion" and "does not replace MVL+" statements. Not single-anchor.
- **Perspective Blindness:** No — Strategic (long-term O4) and Risk (mitigations) produced friction.
- **Clean Resolution Trap:** No — W1's default is clean but not elegant-only; the boundary-UX trade-off is genuinely between W1/W2/W3 cost-benefit.
- **Self-Reference Blindness:** Flag — using `/sense-making` to evaluate a protocol-vs-runner architecture. External grounding: (i) the artifact's own design is independent of this inquiry; (ii) the README and prior finding are independent observable; (iii) the 8-source enumeration is a structural fact about the artifact, not project-jargon. **Survives.**
