---
status: active
model: claude-opus-4-7[1m]
effort: max
---

# Finding: Materialization Is a Separate Peer-Protocol That /MVL+ Can Trigger

## Question

The Homegrown project has a thinking-loop runner called `/MVL+` (Extended Cognitive Loop — Exploration → Sensemaking → Decomposition → Innovation → Critique) which produces a `finding.md` at the end of each inquiry. The project also has a separate protocol called `ARTIFACT_MATERIALIZATION` (at `cognitive_harness/protocols/artifact_materialization.md`) — an 8-phase governed lifecycle that turns an authorized decision into concrete files under explicit contract.

The user's question, restated: **what is the right architectural relationship between materialization and `/MVL+`** — is materialization a step appended *after* CONCLUDE (chained into `/MVL+`'s lifecycle), or is it a separate process that `/MVL+` can *trigger* (with the trigger being one of multiple possible invocation paths)? The user's stated hypothesis is the latter.

Goal: a verdict that commits to one architectural relationship with structural reasoning, plus a concrete shape for the boundary between the two (the trigger contract, if separate; the integration point, if chained).

## Finding Summary

- **Materialization is a separate peer-protocol that `/MVL+` can trigger** — not a chained step inside `/MVL+`'s lifecycle. The user's hypothesis is empirically confirmed by the existing materialization protocol's own design. Its Universal Input Contract enumerates eight possible source authorities (`user_request | finding | branch | navigation | outcome_review | loop_diagnose | trace_followup | protocol_need | other`); its preamble explicitly states *"Materialization is different from thinking-loop conclusion. MVL/MVL+ can decide that an artifact should exist. ARTIFACT_MATERIALIZATION decides how that decision is safely converted into files;"* its non-goals state it *"does not replace MVL, MVL+, Navigation, Reflect, Loop Diagnose, or Outcome Review."* The artifact is architecturally plural-invocable BY DESIGN. Treating `/MVL+` as the sole or default chained source would collapse the eight-source contract to one.

- **The README2.md milestone phrasing — *"Materialization — wiring the artifact-materialization protocol as a default post-finding step in /MVL+"* — is reframed by this finding**, not adopted as architectural commitment. The reframe: *"make ARTIFACT_MATERIALIZATION the default downstream OPTION after a /MVL+ finding — surfaced visibly from CONCLUDE via a suggestion line — without auto-chaining; materialization remains a separate peer-protocol with multiple possible source_authority values."* This honors the artifact's design while preserving the README's intent (make materialization the obvious next move when a finding prescribes changes).

- **What `/MVL+` does at the boundary is a small, conditional suggestion**: at the end of CONCLUDE, when the finding's `type:` is `spec-modification` OR the finding's MUST section contains an Edit-Specification (per the prior format-redesign finding's "concrete-edit-form" rule), CONCLUDE prints one suggestion line: *"This finding proposes changes. To materialize, invoke ARTIFACT_MATERIALIZATION on `[finding_path]`."* That is the entirety of `/MVL+`'s contribution at the boundary. The user (or another runner, or a future AI session) decides whether to invoke materialization. The signal is soft (a suggestion), not active (auto-invocation).

- **A small reciprocal signal flows back from materialization to the finding**: when materialization completes for a finding, ARTIFACT_MATERIALIZATION writes a `materialized: <timestamp>` field into the source finding's frontmatter (or a sibling `_materialization.md` if frontmatter editing is too invasive). This produces traceability — future outcome-review queries can identify which findings materialized when. The signal closes the loop without creating a chain.

- **Richer signal options exist but are deferred**: a "trigger artifact" approach (CONCLUDE writes a `materialization_request.md` sidecar containing pre-populated Universal Input Contract fields) would generalize uniformly across all eight source authorities and is the long-term-best move. It is deferred until the project has more than one non-`/MVL+` source actively producing materialization triggers OR until the lighter suggestion-line signal proves insufficient for cross-runner consumption.

- **One Innovation candidate was killed for frame-incompatibility**: the "human-gated only" verdict (no `/MVL+`-side signal at all) was rejected because the user's framing — "MVL loop can trigger" — implies some agency on the `/MVL+` side. Pure decoupling does not capture that framing. The suggestion line is the smallest signal that honors the user's framing while respecting the artifact's design.

## Finding

### Why the question matters

The user is working through how the project's protocols connect to each other. `/MVL+` produces findings. The materialization protocol turns findings (or other authorized sources) into changed files. The relationship between these two protocols has been ambiguous in the project's documents: the README's milestone language has implied *"wire materialization as a default post-finding step in /MVL+"* — which sounds like a chain — while the materialization protocol's own opening lines have stated *"Materialization is different from thinking-loop conclusion"* — which says they are not the same thing. The inquiry's job was to reconcile this and to commit to one architectural shape.

The user's hypothesis at the start was that materialization should be a separate process that `/MVL+` can trigger, not a chained step inside `/MVL+`. This finding confirms that hypothesis empirically and structurally, and then resolves a smaller sub-question that follows from it: given that materialization is separate, what does `/MVL+` do at the boundary?

### Why the architectural verdict is decisive

The inquiry's Exploration step opened the existing `cognitive_harness/protocols/artifact_materialization.md` and found three load-bearing pieces of evidence, each of which independently rules out a chained architecture.

First, the protocol's own preamble states explicitly that materialization "is different from thinking-loop conclusion" and that "MVL/MVL+ can decide that an artifact should exist; ARTIFACT_MATERIALIZATION decides how that decision is safely converted into files." This is a separation-of-concerns statement at the protocol level — `/MVL+` decides what; materialization decides how to safely create.

Second, the protocol's Non-Goals section lists "does not replace MVL, MVL+, Navigation, Reflect, Loop Diagnose, or Outcome Review." Materialization positions itself as a peer of these other protocols, not as a sub-step of any one of them.

Third — and most structurally decisive — the protocol's Universal Input Contract enumerates eight `source_authority` values: `user_request | finding | branch | navigation | outcome_review | loop_diagnose | trace_followup | protocol_need | other`. The `finding` source (which is `/MVL+`'s output) is one entry among eight. A chained architecture (where `/MVL+` auto-invokes materialization after CONCLUDE) would collapse this eight-source contract to a single-source case — every materialization originating from `/MVL+`, the other seven sources withering or requiring a parallel implementation. The plural source contract IS the architectural commitment; chaining contradicts it.

### What the boundary looks like

The architectural verdict still leaves a smaller question: does `/MVL+` produce *any* signal at the boundary, or does it produce `finding.md` and stop, leaving materialization invocation entirely to the user's manual choice? Sensemaking surfaced that the user's framing (*"MVL loop can trigger"*) implies some agency on `/MVL+`'s side — pure decoupling underfits that framing. So `/MVL+` should produce *something* at the boundary, but that something should be small and respect the artifact's design.

Three options for the boundary signal were evaluated. A pure trigger artifact (a sidecar `materialization_request.md` written by CONCLUDE alongside `finding.md`, containing the Universal Input Contract fields pre-populated) is the richest and the most generalizable across the eight source authorities — and is the long-term-best move. A pure suggestion line (one conditional line at the end of CONCLUDE's output, naming the materialization invocation path) is the cheapest signal that honors the user's framing. A status-quo-plus-README-reframe (no change to any protocol; only the README updated) is the minimum.

The recommended verdict is the suggestion line — small, conditional on the finding's content (only fires when the finding proposes changes), no new artifact created, easily reversible. The richer trigger artifact is preserved as a deferred option with a clear revival trigger.

### Why a reciprocal completion marker is worth adding

A small additional move makes the loop traceable. When ARTIFACT_MATERIALIZATION completes for a finding, it can write a `materialized: <timestamp>` field into the source finding's frontmatter (or a sibling file if frontmatter editing is too invasive). This is a tiny write — one line of metadata — but it enables outcome-review queries to identify which findings materialized when, and to surface findings whose Edit-Specifications never materialized despite the suggestion being shown. The traceability is useful for the project's long-term self-improvement work.

This marker is a small materialization-side change. The artifact's design (its Universal Input Contract, its lifecycle phases) is preserved; only an output-write step is added.

### Why the README needs reframing

The README2.md milestone language carries a chained reading. The artifact's own design rules out chaining. The two documents have been allowed to disagree silently; this finding reconciles them explicitly. The reframe replaces *"wire the artifact-materialization protocol as a default post-finding step in /MVL+"* with *"make ARTIFACT_MATERIALIZATION the default downstream OPTION after a /MVL+ finding — surfaced visibly from CONCLUDE via a suggestion line — without auto-chaining; materialization remains a separate peer-protocol with multiple possible source_authority values."* The intent (make materialization the obvious next move) is preserved; the architectural commitment (separate peer-protocol) is now consistent across documents.

### Why some plausible alternatives lost

Several candidates surfaced during Innovation and did not survive Critique. The strongest two are worth naming explicitly.

The trigger-artifact-now move (a sidecar `materialization_request.md` per finding, pre-populated with Universal Input Contract fields) lost on premature-scale grounds. At current corpus rate and current usage, the rich artifact is heavier than needed; the suggestion line produces the same handoff behavior at much lower cost. The trigger artifact is deferred with a specific revival trigger — when ≥2 non-`/MVL+` source authorities (e.g., Navigation, outcome_review) start producing materialization triggers regularly, the uniform handoff pattern becomes worth its cost.

The human-gated-only move (no `/MVL+`-side signal at all; materialization only ever invoked by explicit user action) was killed on frame-incompatibility grounds. The user's framing — "MVL loop can trigger" — implies some `/MVL+`-side agency. Pure human-gating removes that agency entirely. The suggestion line is the smallest signal that honors the user's framing without crossing into auto-invocation.

A read-finding.md-directly move (materialization parses `finding.md` itself, no trigger contract needed) was placed out-of-scope per this inquiry's stated boundary (the artifact's design stands). Deferred to a future inquiry on the materialization protocol's input contract if that question opens.

### How this connects to prior project work

The biggest-next-gain finding (`devdocs/inquiries/2026-05-16_09-04__biggest_next_gain_toward_breakthrough/finding.md`) deferred a candidate labeled "wire materialization as default post-`/MVL+` invocation" with a condition-bound revival trigger — when `W3` (Navigator L1 + outcome ledger) ships AND three `/MVL+`-equipped inquiries reveal a felt-need for materialization. That deferral implicitly assumed the chained framing. This finding **revises that assumption**: the right move when the trigger fires is NOT the chained-step move; it is **Assembly X** (the suggestion line + completion marker + README reframe). The biggest-next-gain finding's W4 deferred item retains its revival trigger, but its content updates to the Assembly X form rather than the chained-step form.

## Next Actions

### MUST

- **What:** Edit `cognitive_harness/protocols/conclude.md` to add a conditional suggestion-line step at the end of CONCLUDE's Step 5 (Print the brief summary). The conditional: print the suggestion line when the finding's `type:` is `spec-modification` (per the format-redesign finding's variant taxonomy, pending settlement) OR when the finding's MUST section contains at least one Edit-Specification (per the format-redesign finding's "concrete-edit-form" rule).
  **Who:** User (single edit; ~10 minutes including phrasing review).
  **Gate:** Observable — the next `/MVL+` inquiry that produces a `spec-modification`-typed finding (or a finding with Edit-Specifications in MUST) prints the suggestion line at CONCLUDE end.
  **Why:** Captures the user's "MVL loop can trigger" framing at the smallest possible cost. Honors the artifact's peer-protocol architecture (the signal is a suggestion, not an invocation).

  **Suggested wording for the suggestion line:**
  ```
  This finding proposes changes. To materialize the proposed changes
  into files under contract, invoke ARTIFACT_MATERIALIZATION on this
  inquiry's finding: cognitive_harness/protocols/artifact_materialization.md
  with source_authority: finding, source_path: [inquiry_path]/finding.md.
  ```

- **What:** Edit `README2.md`'s Family II milestone language to reflect the verdict. Replace the current phrasing (which implies chained) with the reframed version (which implies surfaced visibly but separate).
  **Who:** User (small documentation edit).
  **Gate:** Observable — the README's Family II section uses the reframed language.
  **Why:** Reconciles the README with the artifact's own framing. Removes the silent inter-document disagreement.

  **Replacement text:** *"Make `ARTIFACT_MATERIALIZATION` the default downstream option after a `/MVL+` finding — surfaced visibly from CONCLUDE via a suggestion line — without auto-chaining. Materialization remains a separate peer-protocol with multiple possible source authorities (user request, finding, branch, navigation, outcome review, loop diagnose, trace follow-up, protocol need, other)."*

### COULD

- **What:** Edit `cognitive_harness/protocols/artifact_materialization.md` to add a small step at materialization completion: write a `materialized: <ISO-8601 timestamp>` field into the source finding's frontmatter (when the source is a finding). For non-finding sources (other source_authority values), write the marker to a sibling location appropriate to the source type.
  **Who:** User (small materialization-protocol edit; ~30 minutes including verification).
  **Gate:** Observable — three consecutive materializations write the completion marker to their source's frontmatter (or sibling location).
  **Why:** Provides traceability — outcome-review queries can identify which findings materialized when. Closes the materialization loop without creating a chain. Separable from the MUST actions; ship if traceability matters; skip otherwise.

### DEFERRED

- **What:** Adopt the richer trigger artifact (a `materialization_request.md` sidecar written by CONCLUDE alongside `finding.md`, pre-populated with Universal Input Contract fields).
  **Gate:** Condition-bound — revival fires when EITHER (a) at least two non-`/MVL+` source authorities (e.g., Navigation, outcome_review, loop_diagnose) are actively producing materialization triggers in the project, requiring a uniform handoff pattern; OR (b) the suggestion-line signal proves insufficient for cross-runner consumption (e.g., a future runner needs to consume materialization triggers programmatically and parsing `finding.md` is impractical).
  **Why (if revived):** Generalizes uniformly across all eight source authorities; produces machine-readable handoff; reduces the marginal cost of adding new trigger sources. The deferral preserves the option; the revival triggers make the timing observable.

- **What:** Run an inquiry on the materialization protocol's input contract design — specifically whether materialization should read `finding.md` directly (eliminating a trigger artifact) or whether the Universal Input Contract should be revised in any other way.
  **Gate:** Condition-bound — revival fires when the materialization protocol's contract becomes a felt friction point (e.g., a future invocation source struggles to populate the contract).
  **Why (if revived):** This inquiry's branch explicitly placed the materialization protocol's design "stands" — meaning revisions to the contract were out of scope. A future inquiry can re-open that scope when evidence demands it.

- **What:** Specify a `materialize: skip | defer | auto` frontmatter field on findings for cases where the author wants to explicitly gate materialization (e.g., for analytical findings that should never materialize regardless of MUST content).
  **Gate:** Condition-bound — revival fires when ≥3 findings exhibit a need for explicit skip-or-defer gating that the conditional logic in the MUST suggestion-line can't handle.
  **Why (if revived):** Explicit gating for edge cases. Premature until edge cases appear.

- **What:** Build a materialization queue (a project-level append-only list of pending materialization requests, consumed by ARTIFACT_MATERIALIZATION in batch or on-demand).
  **Gate:** Condition-bound — revival fires when the corpus exceeds ~200 findings AND multiple non-`/MVL+` trigger sources are active simultaneously. The queue centralizes the pending-materialization state.
  **Why (if revived):** Long-term natural pattern for multi-source aggregation. Premature for current scale.

## Reasoning

### Why the empirical evidence is the right anchor

The verdict rests primarily on the materialization protocol's own design: the eight-source Universal Input Contract; the "different from thinking-loop conclusion" preamble; the "does not replace MVL+" non-goal. These are not interpretations of the project's intent; they are explicit structural commitments in the protocol artifact. When an artifact's own design and a separate document (the README) disagree, the artifact's design is authoritative because it is the implementation; the README is a roll-up that can be wrong.

This is a general project principle: structural commitments in protocol artifacts dominate aspirational summaries in roll-up documents. Reconciliation goes by updating the roll-up to match the artifact, not by revising the artifact to match the roll-up — unless the artifact's commitment itself is being questioned, which this inquiry did not do.

### Why the suggestion line wins over the trigger artifact for now

Both options honor the artifact's design. The difference is in signal richness and effort. The suggestion line is one conditional line of output at CONCLUDE's end. The trigger artifact is a new sidecar file per finding with a defined schema. At the project's current usage pattern (one primary runner, `/MVL+`; other source authorities mostly latent), the suggestion line carries enough signal to capture the user's "MVL loop can trigger" framing. The trigger artifact's marginal value — uniform handoff across eight sources, machine-readable contract for cross-runner consumption — is real but not yet load-bearing. The right move is the smaller one now, with the richer one preserved as a deferred option with explicit revival triggers.

### Why the README reframe is required, not optional

The README's chained phrasing has been allowed to coexist with the artifact's separate framing because no one explicitly tested the inconsistency. This inquiry's existence is partly a consequence of that inconsistency — a reader (the user) noticed it. Leaving the inconsistency in place after this inquiry produces a verdict would invite future readers to hit the same gap. The reframe is small and unambiguous: replace the chained phrasing with the surfaced-visibly phrasing in the same paragraph. One edit closes a tension that, left in place, would re-surface as future inquiry friction.

### Why human-gated-only was killed

The Innovation step generated a candidate that argued materialization should be triggered ONLY by humans — no `/MVL+`-side signal at all. The argument's appeal was that it maximizes explicit human choice, which aligns with the project's autonomy ladder's emphasis on human-in-the-loop decision-making at the current level. The argument's failure is that it doesn't fit the user's framing in the branch. The user said *"MVL loop can trigger"* — explicitly attributing some agency to `/MVL+`. The human-gated-only verdict eliminates that agency entirely. If the user had said *"materialization should only ever be a human action with no signal from any runner,"* this candidate would have survived. They didn't say that; they said `/MVL+` can trigger. The frame-incompatibility was the kill grounds.

### Why this verdict doesn't lock the future

The verdict is conservative in its current commitments and explicit about its revival triggers. The suggestion line is the smallest possible move; if it proves insufficient, the trigger artifact ships. The completion marker is optional; if traceability matters, ship it; if not, skip. The materialization queue is research-frontier; the project's scale will tell when it becomes relevant. The verdict commits to today's right shape without foreclosing tomorrow's evolution.

## Open Questions

### Monitoring

- After the suggestion line ships, watch the first ten `/MVL+` inquiries that produce findings with Edit-Specifications. Does the user actually invoke materialization for those findings, or does the suggestion-line text get ignored? If repeatedly ignored, the suggestion's wording or its trigger condition may be wrong.

- Watch whether the completion-marker (if shipped) gets consumed by any outcome-review work. If marker entries accumulate but no review process consumes them, the marker is producing data with no reader. That would be a sign to either ship a consumer or defer the marker.

### Blocked

- The trigger artifact's revival depends on observable usage of non-`/MVL+` source authorities. Today the corpus shows materialization triggers primarily from findings; the other seven sources are latent. Blocked on those sources becoming active.

- The materialization queue's revival depends on corpus scale and multi-source activity. Blocked on both reaching their thresholds.

### Research Frontiers

- The materialization protocol's input contract could be revised to accept `finding.md` directly without a separate trigger artifact (the IV-Level-2 inversion from Innovation). This would simplify the boundary at the cost of complicating the materialization protocol's parsing logic. Preserved for a future inquiry on the contract's design.

- The relationship between materialization completion markers and the project's planned Retrospective RC outcome-tracking ledger (per the biggest-next-gain finding) is unexplored. Both record downstream effects; both inform future calibration. Whether they should be the same artifact or distinct artifacts is a future question.

### Refinement Triggers

- If at least two non-`/MVL+` source authorities start producing materialization triggers regularly, the trigger-artifact revival fires.

- If the suggestion-line's condition (`type: spec-modification` OR MUST has Edit-Specification) misclassifies findings (e.g., suggests materialization for a finding that shouldn't materialize, or fails to suggest for one that should), the condition needs revision. Observable: track the per-suggestion outcome (was materialization actually invoked? was the suggestion accurate?) for the first 10–20 firings.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
lets talk about how materilization should work, is it sth after than conclude? i think it should be seperate process than MVL loop
which MVL loop can trigger
```

</details>
