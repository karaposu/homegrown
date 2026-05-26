# Critique — Materialization Relationship to MVL Loop

## User Input

```
/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-17_14-15__materialization_relationship_to_mvl_loop/_branch.md
```

## Phase 0 — Dimension Construction

### Dimensions with weights

| # | Dimension | What it asks | Weight |
|---|---|---|---|
| **D1** | Artifact-design alignment | Honors the existing artifact's 8-source Universal Input Contract + "different from thinking-loop conclusion" framing | **HIGH** |
| **D2** | User-framing fit | Captures "MVL loop can trigger" (some /MVL+-side signal at boundary) | **HIGH** |
| **D3** | Actionability | Concrete first step nameable | **HIGH** |
| **D4** | Effort | (Lower = better) | MEDIUM |
| **D5** | Forward-flexibility | Generalizes across the 8 source_authority values | MEDIUM-HIGH |
| **D6** | Conditional-logic correctness | Fires signal only when appropriate (finding proposes changes) | MEDIUM |
| **D7** | **Anti-ceremony** *(project-specific)* | Doesn't add signals/artifacts that aren't load-bearing | MEDIUM-HIGH |
| **D8** | README reconciliation | Captures the README's tension-resolution work | MEDIUM |

**Validation:** if a candidate passed all 8 — aligned + user-framing-fit + actionable + low-effort + generalizes + correctly-conditional + anti-ceremony + README-reconciled — it would be unambiguous. Right axes.

---

## Phase 1 — Landscape

### Viable
HIGH D1 + D2 + D3; acceptable on others.

### Dead
- LOW D1 (violates 8-source contract) → dead.
- LOW D3 (unactionable) → dead.
- LOW D7 (excessive ceremony) → dead.

### Boundary
- HIGH D5 + medium D4 → boundary (forward-flex worth medium cost?).
- HIGH D2 + LOW D5 → boundary (signal but doesn't generalize).

---

## Phase 2 — Adversarial Evaluation

### W1 — O3 suggestion line at CONCLUDE end

**Prosecution:**
- *D5 medium:* one-source pattern; doesn't directly generalize to the other 7 source_authority values.
- *Specification-gap:* the suggestion-line text wording isn't yet specified.

**Defense:**
- *D1 HIGH:* honors peer-protocol architecture.
- *D2 HIGH:* signals at boundary per user framing.
- *D3 HIGH:* small edit at CONCLUDE end.
- *D4 small.*
- *D6 OK:* conditional on finding's `type: spec-modification` OR finding's MUST having Edit-Specifications.
- *D7 HIGH:* lowest ceremony among signal-producing options.

**Collision:** Defense dominates. D5 concern is real but doesn't sink W1 — generalization can be a separate later move.

**Verdict: SURVIVE.**

### W2 — O4 trigger artifact

**Prosecution:**
- *D4 medium:* schema design + write logic + new artifact per finding.
- *D7 risk:* ceremony if trigger artifacts are written but never consumed.
- *Premature for current scale:* the corpus rate doesn't yet demand the richer signal.

**Defense:**
- *D5 HIGH:* generalizes uniformly across all 8 source_authority values.
- *D1 HIGH:* peer-protocol architecture.
- *D2 HIGH:* explicit signal.

**Collision:** Defense's D5 win is real but loses to D4+D7 in current state. W2 is long-term-right but premature.

**Verdict: REFINE → defer-with-revival-trigger** (= when ≥2 sources besides /MVL+ start producing materialization triggers, OR when W1's suggestion-line proves insufficient).

### W3 — Status quo + README reframe only

**Prosecution:**
- *D2 LOW:* under-honors user framing ("MVL loop can trigger").
- *D3 low on /MVL+ side:* no actionable change at the protocol layer.

**Defense:**
- *D4 zero.*
- *D7 HIGH:* maximum anti-ceremony.
- *D8 captures README work.*

**Collision:** D2 is critical-weight; W3 fails it. Survives only if user does NOT want a /MVL+-side signal.

**Verdict: REFINE → minimum fallback only.**

### N1 — W1 + W2 hybrid (both signals)

**Prosecution:**
- *D4 medium-large* (combined effort).
- *D7 risk:* double signaling when one would do.

**Defense:**
- *D5 high (via W2 component).*
- *D2 very high (both audiences served).*

**Collision:** D4+D7 dominate at current scale. Defense's "both audiences" is real but premature.

**Verdict: REFINE → defer; W1 first, add W2 when needed.**

### N2 — W2 narrowed by `type: spec-modification`

**Prosecution:**
- *Depends on `type:` schema:* the prior finding's `type:` field is itself under refinement (from today's earlier inquiries); coupling to an unsettled schema is fragile.

**Defense:**
- Reduces W2's ceremony footprint.

**Collision:** Prosecution wins via dependency on unsettled schema.

**Verdict: REFINE → defer until `type:` schema settles.**

### N3 — Suggestion in `## Relationships` pointers

**Prosecution:**
- *Semantic mismatch:* materialization isn't a relationship in the existing sense (CONTINUES FROM / SUPERSEDED BY / RELATED). It's a downstream-action, not a finding-to-finding relationship.

**Defense:**
- *Reuses existing infra; no new field.*

**Collision:** Semantic mismatch is real. Reuse benefit is real. Trade-off close.

**Verdict: REFINE → keep as a future option if W1's separate suggestion line proves heavyweight.**

### N6 — Completion-marker modifier (on finding frontmatter after materialization)

**Prosecution:**
- *Requires materialization protocol round-trip:* materialization must write back to the finding's frontmatter (or a sidecar) — technically a small change to the materialization protocol.
- *Out of inquiry's stated SA4* ("artifact's design stands").

**Defense:**
- *D7 high* (small marker; useful traceability).
- *D6 enables outcome-review queries* ("which findings materialized?").

**Collision:** SA4 says artifact's design stands. N6 IS a small materialization-side change. But it's a write-output addition, not a contract-design change. Acceptable on a narrow reading of SA4.

**Verdict: SURVIVE-as-COULD** (separable modifier; ship if user wants traceability; skip otherwise).

### N7 — `materialize:` frontmatter field on finding (skip/defer/auto)

**Prosecution:**
- *Solves rare case:* most findings don't need explicit skip; the conditional logic in W1 already handles "don't suggest when finding doesn't propose changes."

**Defense:**
- *Explicit gating for edge cases.*

**Collision:** Prosecution wins; rare-case solution at small cost is still cost without clear value.

**Verdict: REFINE → defer until skip-cases appear.**

### N4 — Read finding.md directly (no trigger artifact)

**Out-of-scope per SA4** (would change the artifact's Universal Input Contract). **REFINE → defer to future artifact-revision inquiry.**

### N5 — Human-gated only

**Frame-incompatible** with user's "MVL loop can trigger" framing. **KILL.**

### N8 — Materialization queue

**Research frontier** — premature for current scale. **DEFERRED with revival trigger** = corpus ≥200 findings AND multi-source triggers active.

### Assembly X — W1 + N6 + README reframe

**Prosecution:**
- *N6 component out of stated SA4 (narrow reading).*

**Defense:**
- Three small moves; each independently justified.
- Multi-axis coverage: signal (W1) + traceability (N6) + reconciliation (README).
- Each is small effort.

**Collision:** SA4 concern is small on the narrow reading. Defense's multi-axis coverage at low total cost wins.

**Verdict: SURVIVE — top recommended assembly.**

### Assembly Y — W2 + N6 + README reframe

**Long-term-best but premature.** Same verdict as W2: **REFINE → defer-with-revival-trigger.**

### Assembly Z — N1 + N6 + README reframe

**Over-scoped.** **REFINE → split into smaller assemblies.**

---

## Phase 3.5 — Assembly Check

Three viability tiers along effort axis:

| Tier | Composition | Profile |
|---|---|---|
| **T1 — Minimum** | W3 (README reframe only) | Zero protocol-side change; honors artifact but under-honors user framing |
| **T2 — Default** | Assembly X (W1 + N6 + README reframe) | Small suggestion + traceability marker + reconciliation; honors artifact AND user framing |
| **T3 — Long-term** | Assembly Y (W2 + N6 + README reframe) | Trigger artifact + traceability + reconciliation; best long-term, premature for current scale |

User picks tier by effort budget. T2 (Assembly X) is the recommended default.

---

## Phase 4 — Coverage + Convergence

### Accumulator

- **Candidates evaluated:** 14 (W1, W2, W3, N1, N2, N3, N4, N5, N6, N7, N8, Assemblies X/Y/Z)
- **Verdicts:**
  - **SURVIVE-clean** (1): Assembly X
  - **SURVIVE** (2): W1, N6-as-COULD
  - **REFINE-deferred** (6): W2, W3, N1, N2, N3, N7, Assembly Y, Assembly Z
  - **KILL** (1): N5 (frame-incompatible)
  - **OUT-OF-SCOPE** (1): N4 (SA4)
  - **RESEARCH FRONTIER** (1): N8

### Convergence

| Criterion | Met? |
|---|---|
| ≥1 SURVIVE no critical-dim caveats | ✓ Assembly X |
| Landscape stable | ✓ |
| No likely-viable unexplored | ✓ |
| Decreasing rate | ✓ |

**All convergence criteria met.**

### Failure-mode check

- Wrong dimensions: No
- Rubber-stamping: No (N5 killed; multiple refined)
- Nitpicking: No
- Dimension blindness: D7 (anti-ceremony) added per project-specific
- False convergence: No
- Evaluation drift: No
- Self-Reference Collapse: **FLAG** — using `/td-critique` to critique a protocol architecture. External grounding: (i) artifact's own design independent of this inquiry; (ii) 8-source Universal Input Contract is structural fact; (iii) prior inquiries (biggest-next-gain, format-redesign) are independent observables. Survives.

---

## Signal — TERMINATE

Ranked survivors:

### Rank 1 — Assembly X (recommended)

**W1 (O3 suggestion line at CONCLUDE end) + N6 (completion-marker on finding frontmatter post-materialization) + README reframe.**

*Operationally:*

1. Edit `cognitive_harness/protocols/conclude.md` to add a conditional suggestion-line step at the end of CONCLUDE's flow. Condition: finding's `type:` is `spec-modification` (per the prior finding's format-redesign; pending settlement) OR finding's MUST section contains an Edit-Specification. Text: `"This finding proposes changes. To materialize, invoke ARTIFACT_MATERIALIZATION on \`[finding_path]\`."`

2. Edit `cognitive_harness/protocols/artifact_materialization.md` to add a small step after materialization-completion: write a `materialized: <timestamp>` field to the source finding's frontmatter (or to a sibling `_materialization.md` if frontmatter editing is too invasive). This provides traceability — outcome-review queries can identify which findings materialized when.

3. Edit `README2.md`'s Family II milestone language: replace "wire the artifact-materialization protocol as a default post-finding step in `/MVL+`" with "make `ARTIFACT_MATERIALIZATION` the default downstream OPTION after a `/MVL+` finding — surfaced visibly from CONCLUDE via a suggestion line — without auto-chaining; materialization remains a separate peer-protocol with multiple possible source_authority values."

### Rank 2 — W3 (minimum)

**README reframe only; no protocol-side change.**

Use only if the user wants zero protocol-side change.

### Rank 3 — Assembly Y (long-term-best, deferred)

**W2 (O4 trigger artifact) + N6 + README reframe.**

Revival trigger: when ≥2 non-/MVL+ source_authority values start producing materialization triggers AND/OR W1's suggestion-line proves insufficient for cross-runner consumption.

### Killed / Refined / Deferred

- **N5** (human-gated only): KILLED — frame-incompatible.
- **W2, N1, N2, N3, N7, Assembly Y, Z**: REFINED to deferred with explicit revival triggers.
- **N4** (read finding.md directly): out of inquiry scope (SA4); defer to future artifact-revision inquiry.
- **N8** (materialization queue): RESEARCH FRONTIER.

---

## Convergence Telemetry

- **Dimensions:** 8/8 applied; D7 anti-ceremony added per project-specific refinement.
- **Adversarial strength:** **STRONG** — N5 KILLed; multiple candidates REFINED with specific revival triggers.
- **Landscape stability:** **STABLE** — tier structure confirmed in Phase 3.5.
- **Clean SURVIVE:** **YES** — Assembly X.
- **Failure modes:** None observed; Self-Reference Collapse flagged with external grounding.
- **Overall:** **PROCEED.**
