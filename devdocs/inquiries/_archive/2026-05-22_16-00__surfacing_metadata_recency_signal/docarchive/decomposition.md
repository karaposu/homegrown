# Decomposition — Metadata-Recency Addition to /surfacing

## User Input

(from `_branch.md`) What addition to surfacing.md — at what exact location — would let surfacing use mtime as a signal, while protecting against (a) old-as-idle AND (b) silent down-weighting, such that existing behavior is enriched not regressed?

The whole to decompose (from SV6): a multi-surface spec edit to `cognitive_harness/surfacing/references/surfacing.md` that adds:

- a vocabulary entry for the new field (§1.4)
- a capture-rule Step Refinement at the Item-enumeration component (§2.1)
- two LAYER 1 failure-mode entries (§4.2)
- a per-entry schema field on Traversal Trace (§5.4)
- a derived field on State Summary (§5.5)
- aggregate counts on Telemetry (§5.6)

… with the principle "metadata-as-signal-not-verdict" stated explicitly in the §2.1 capture-rule body and inherited by the two failure modes via anchor-links.

## Step 1 — Perceive Coupling Topology

Coupling matrix across the six surfaces + the principle:

|  | vocab | §2.1 rule | FM#1 | FM#2 | Trace field | State Summary | Telemetry | Principle |
|---|---|---|---|---|---|---|---|---|
| **vocab §1.4** | — | weak | weak | weak | TIGHT (name) | moderate | moderate | weak |
| **§2.1 rule** | weak | — | TIGHT (anchor) | TIGHT (anchor) | moderate (value) | weak | weak | TIGHT (host) |
| **FM#1 (Equates-Idleness)** | weak | TIGHT (anchor) | — | weak (sibling) | weak | weak | weak | TIGHT (inherits) |
| **FM#2 (Bias-Filter)** | weak | TIGHT (anchor) | weak (sibling) | — | weak | weak | weak | TIGHT (inherits) |
| **Trace field §5.4** | TIGHT (name) | moderate | weak | weak | — | TIGHT (derivation) | TIGHT (aggregation) | weak |
| **State Summary §5.5** | moderate | weak | weak | weak | TIGHT (derivation) | — | moderate | weak |
| **Telemetry §5.6** | moderate | weak | weak | weak | TIGHT (aggregation) | moderate | — | weak |
| **Principle (metadata-as-signal-not-verdict)** | weak | TIGHT (host) | TIGHT (inherits) | TIGHT (inherits) | weak | weak | weak | — |

Three high-coupling clusters emerge:

- **Cluster A — Schema-and-reporting:** vocabulary entry + Trace field + State Summary derived field + Telemetry aggregates. All revolve around the field name and its derivations.
- **Cluster B — Operational rule + Principle:** §2.1 Item-enumeration capture rule + the metadata-as-signal-not-verdict principle. The principle's host is the rule's body.
- **Cluster C — Failure modes:** FM#1 (Recency-Equates-Idleness) + FM#2 (Recency-Bias-Filter). Both anchor to Cluster B's principle and inherit from §4.4's asymmetric-failure principle.

Low-coupling valleys between clusters:

- **A↔B valley:** moderate (capture rule emits values matching the schema; once field name is committed by sensemaking's Ambiguity #1 resolution, the two sides decouple).
- **A↔C valley:** weak (failure modes don't add to the schema; they reference the field name only as needed in their Corrective).
- **B↔C valley:** moderate (cross-references via principle inheritance + anchor-link sentences; once the principle is stated and the failure-mode names are committed, the two sides decouple).

## Step 2 — Detect Boundaries (Top-Down)

The three clusters identified above ARE the three pieces. Boundaries:

- **P1 / Cluster A** — Schema + Reporting additions (vocab §1.4, Trace field §5.4, State Summary derived field §5.5, Telemetry aggregates §5.6).
- **P2 / Cluster B** — Capture rule + Principle (Step Refinement at §2.1 Item-enumeration; metadata-as-signal-not-verdict principle stated in the rule body).
- **P3 / Cluster C** — Failure modes (FM#1 Recency-Equates-Idleness, FM#2 Recency-Bias-Filter, both at §4.2 LAYER 1).

## Step 3 — Validate Boundaries (Bottom-Up Check)

Irreducible atoms across the addition:

- The field name `recency annotation` — single atom.
- The value space `{<mtime>, "no-mtime-available"}` — single atom.
- The Step Refinement entry (Name + Trigger + Action + Anchor-link with italic prefix) — single composite atom.
- The principle text — single atom.
- Each failure mode (Mode name + Recognition + Corrective) — single composite atom each.
- The derived State Summary field's aggregation rule — single atom.
- The telemetry counts — single atom.

Group atoms by P1/P2/P3:

- P1: field-name atom + value-space atom + Trace-field atom + State-Summary derived atom + Telemetry atom + vocabulary atom. 6 atoms. ✅ Coherent cluster.
- P2: Step Refinement atom + principle atom. 2 atoms. ✅ Coherent cluster.
- P3: FM#1 atom + FM#2 atom. 2 atoms. ✅ Coherent cluster.

Boundaries match the atom grouping. **Confidence: HIGH (top-down and bottom-up agree across all three boundaries).**

## Step 4 — Express as Question Tree

### P1 — Schema and reporting additions

**Question:** What exact schema additions go in surfacing.md's §1.4 vocabulary, §5.4 Traversal Trace, §5.5 State Summary, and §5.6 Telemetry sections — committing the field name `recency annotation`, the value space, the per-entry presence rule, the State Summary derivation, and the telemetry aggregation form?

**Verification criteria:**
- [ ] Vocabulary entry written (one-row table addition matching the §1.4 shape).
- [ ] Trace field added as a new schema column with field-name + value-content description.
- [ ] State Summary derived field specified (what aggregation, e.g., counts at recency bands vs raw distribution vs both).
- [ ] Telemetry counts specified (what aggregate to report).
- [ ] Field is mandatory per item; `no-mtime-available` is a first-class value.
- [ ] No outbound pointer from these sections to design-history files.

### P2 — Capture-rule Step Refinement at §2.1 Item-enumeration

**Question:** What Step Refinement entry (Name + Trigger + Action + Anchor-link, with italic-prefix visual marker) goes at the §2.1 Item-enumeration / generation component, capturing the metadata-as-signal-not-verdict principle as part of its body?

**Verification criteria:**
- [ ] Step Refinement entry uses the italic-prefix visual marker per `docs/step_refinement.md`.
- [ ] 4-element shape present: Name (bold prefix) + Trigger condition + Required action + Typed anchor-link.
- [ ] Failure-anchored subtype: anchor-link sentence cites Recency-Equates-Idleness AND Recency-Bias-Filter by full name.
- [ ] Principle "metadata-as-signal-not-verdict" stated in the body.
- [ ] Capture rule is "capture mtime alongside identifier during Item-enumeration; emit as recency annotation at Output-shaping" — does not modify the relevance-attribution mechanism §2.3.
- [ ] No new primitive introduced.

### P3 — Two LAYER 1 failure-mode entries at §4.2

**Question:** What are the two new failure-mode entries (FM#1 Recency-Equates-Idleness, FM#2 Recency-Bias-Filter) — what is each one's Recognition column and Corrective column, and how does each anchor to §4.4's asymmetric-failure principle?

**Verification criteria:**
- [ ] FM#1 written: Mode name = `Recency-Equates-Idleness`, Recognition specifies the detectable signature, Corrective specifies the corrective action.
- [ ] FM#2 written: Mode name = `Recency-Bias-Filter`, Recognition specifies the detectable signature, Corrective specifies the corrective action.
- [ ] Both entries cite §4.4 asymmetric-failure (the new modes are instances of that principle applied to the recency axis).
- [ ] Recognition for FM#1 is detectable from output observation (consumer down-weights or filters by mtime).
- [ ] Recognition for FM#2 is detectable from output observation (workspace or trace shows mtime gating items out).
- [ ] Both are LAYER 1 (operational), not LAYER 2 (identity) — they're recoverable via re-invocation.

## Step 5 — Map Interfaces

| From | To | What flows | Direction |
|---|---|---|---|
| P1 | P2 | The field name `recency annotation` and its value space — the capture rule emits values that match the schema | one-way (P1 settles name; P2 emits values matching) |
| P2 | P1 | None directly (the rule produces values, which P1's schema consumes; this is the same interface as above) | (subsumed) |
| P2 | P3 | The metadata-as-signal-not-verdict principle — failure modes inherit it; the failure-anchored Step Refinement at P2 names FM#1 and FM#2 in its anchor-link | bidirectional (P2 cites FM names; P3 inherits principle) |
| P3 | P2 | The failure mode names — the Step Refinement's anchor-link sentence cites them | (one direction of the bidirectional above) |
| P1 | P3 | The field name — failure-mode Corrective columns may reference it ("the field MUST remain populated; ...") | one-way (P1 → P3) |

### Assumptions-not-data check (refinement note)

Beyond the data interfaces above, do the pieces share unstated assumptions?

- **A1 (P1→P2):** The Step Refinement assumes the schema field exists at §5.4. If P1 isn't written or the field is omitted, the rule has nothing to emit into. **Made explicit:** P2's verification depends on P1's schema-field criterion.
- **A2 (P2→P3):** Failure-mode Recognition assumes the rule from P2 has fired (or should have fired). If the rule isn't in place, the failure modes have nothing to recognize divergence from. **Made explicit:** P3's verification cites P2's rule.
- **A3 (P1→P3):** The State Summary derived field assumes recency-distribution computability across the surfaced inventory. If items have heterogeneous "no-mtime-available" rates that aren't reported, downstream consumers might misread the distribution. **Made explicit:** P1's State Summary derivation MUST report the "no-mtime-available" count separately from dated counts.

All three assumptions are now in the verification criteria above. No hidden coupling remains.

## Step 6 — Order by Dependency

- **P1 (Schema)** can be developed first; its name commitment unblocks P2 and P3.
- **P2 (Rule + Principle)** can be developed alongside P1 since the field name is committed by sensemaking's Ambiguity #1 resolution.
- **P3 (Failure modes)** can be developed alongside P2 since the failure-mode names are committed by sensemaking's Ambiguity #2 resolution AND the principle is implicitly committed by SV6's stable model.

In practice: **parallel-feasible.** All three pieces can be developed simultaneously by Innovation since the sensemaking commitments removed the inter-piece blockers. Critique evaluates all three together.

Final order: parallel P1 ‖ P2 ‖ P3 → assemble.

## Step 7 — Self-Evaluate

### Minimum evaluation (3 dimensions)

| Dimension | Check | Verdict |
|---|---|---|
| **Independence** | Each piece's question is answerable without reading sibling pieces (except through defined interfaces) | PASS — each piece references the others only via the committed names + principle (interfaces explicit) |
| **Completeness** | Pieces cover the whole | PASS — all six surfaces (vocab + capture rule + 2 failure modes + Trace field + State Summary derived + Telemetry) accounted for; principle hosted in P2 |
| **Reassembly** | Pieces + interfaces = the whole | PASS — P1 + P2 + P3 assembled = the multi-surface edit; cross-references close (P2 cites P3 names; P3 inherits P2 principle; P1 hosts the field both reference) |

### Determination-mechanism piece check (refinement note)

Is there a load-bearing concept whose use depends on a runtime determination that no piece addresses?

- The recency annotation's value depends on a runtime determination: "does the item have filesystem backing?" If YES, capture mtime; if NO, emit `no-mtime-available`. **Determination-mechanism piece:** this is addressed in P2's capture-rule body (the rule states the conditional). P1's verification criterion "Field is mandatory per item; `no-mtime-available` is a first-class value" forces P1 to host the value-space description. **The determination is covered.**
- The two failure modes' Recognition column is a runtime determination: HOW the consumer of the spec recognizes the failure. **Determination-mechanism piece:** this IS P3's content; the Recognition column IS the determination mechanism. **The determination is covered.**

No missing piece.

### Full evaluation (7 dimensions)

| Dimension | Verdict |
|---|---|
| Independence | PASS |
| Completeness | PASS |
| Reassembly | PASS |
| **Tractability** | PASS — P1 is ~6 small additions across 4 sections; P2 is one Step Refinement (~10–15 lines); P3 is two table rows (~6–10 lines each). Each piece fits in a single focused Innovation pass. |
| **Interface clarity** | PASS — three cross-piece interfaces explicit (field name P1→P2; principle + names P2↔P3; field name P1→P3); three assumptions made explicit per refinement note |
| **Balance** | PASS — sizes roughly proportional; P1 has the most surface-count but each surface is small; P2 is the smallest piece-count but the largest single-entry; P3 is two equally-sized entries. No piece is 80% of the work. |
| **Confidence** | HIGH — top-down clustering and bottom-up atom grouping fully agreed; all three boundaries are high-confidence |

## Frontier / Open Questions

Nothing structurally open at the decomposition level. Each piece's internal wording is the Innovation phase's job. The four wording sub-choices flagged in Sensemaking SV5 ("Remaining viable choices") map cleanly into Innovation candidate-generation points within the pieces:

- "Specific WORDING of the new spec text" → all three pieces.
- "Whether the derived State Summary field is a count distribution vs unique-list vs other" → P1.
- "Whether telemetry reports raw counts vs banded counts" → P1.
- "Whether the metadata-as-signal-not-verdict principle is stated once or repeated" → P2 ↔ P3 cross-reference style choice.

## Self-Assessment

PROCEED to Innovation. Three coherent independent pieces with explicit interfaces and parallel dependency ordering. All seven self-evaluation dimensions pass at HIGH confidence. The four still-open wording sub-choices are localized inside pieces and don't disturb the boundaries.
