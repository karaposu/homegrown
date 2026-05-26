# Decomposition — Sub-Inquiry C

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-19_04-00__innovate_spec_edit_subinquiry_c_mechanism_refinement_telemetry/_branch.md`

Compact 7-step. Q-tree determined by precedent.

---

## Step 1-3 — Coupling Topology + Boundaries

**Elements:** 9 spec items (E1-E9) + application authority (E10) + forward-reference closing of A's Re-test trigger ref (E11).

**Clusters:**
- Cluster A — Phase 3 Test refinements: E1 (Re-test trigger), E2 (per-row trace), E3 (artifact-grounding 6th test), E6 (shared-input detection)
- Cluster B — Mechanism-specific refinements: E4 (Domain Transfer guard), E5 (Inversion multi-axis), E7 (AR bidirectional), E8 (CM both-direction)
- Cluster C — Telemetry: E9 (per-piece + axis-distribution)
- Cluster D — Documentation: E10, E11

**Boundaries:** matches sub-inquiry B's pattern. HIGH confidence.

---

## Step 4 — Question Tree

| Piece | Question | Content | Property (v)? |
|---|---|---|---|
| Q1 | Re-test trigger 4th disposition category text | C1 (Pair 1 V2) | YES |
| Q2 | Per-row mechanism-trace extension to Axis Coverage Check | C2 (Pair 1 V1) | YES |
| Q3 | Artifact-grounding 6th conditional test text | C3 (Pair 1 V3 + Pair 2 W1) | YES |
| Q4 | Domain Transfer source-domain guard text | C4 (Pair 1 V4) | YES |
| Q5 | Inversion multi-axis depth-check extension text | C5 (Pair 2 W2) | YES |
| Q6 | Mechanism Independence shared-input-detection text | C6 (Pair 2 W3) | YES |
| Q7 | AR bidirectional + examples-not-list text (unified B3 + W1) | C7 (Pair 9 B3 + Pair 4 W1) | YES |
| Q8 | CM both-direction explicit framing text | C8 (Pair 9 B2) | YES |
| Q9 | Telemetry per-piece + axis-distribution (unified base + extension) | C9 (Pair 5 Q5 + Pair 7 Q4) | YES |
| Q10 | Application authority + verification approach | PENDING user authorization | NO |
| Q11 | Forward-reference closing (A's last remaining: Re-test trigger) | Closes via Q1 | NO |

---

## Step 5 — Interfaces

- Q1 → Q3 (Q3 references RE-TEST TRIGGER from Q1).
- Sub-inquiry B (upstream) → Q9 (Q9's "Meta-Decision-Piece Criterion + property (v)" references B's committed rules).
- Sub-inquiry A (upstream) → Q5 (Q5's Inversion depth-check extension lives at A's currently-untouched Inversion section).
- 01-00 audit (upstream) → Q1-Q9 (convention application).

**HCR-1:** Q9 commits Pair 5 Q5 BASE for the first time (B did not). Confirm at Innovation that base + extension are clearly demarcated.

**HCR-2:** Q1 patch sequence — must commit before Q3 so cross-reference works. Innovation drafts Q1 before Q3.

**HCR-3:** Q7 unifies two sources (Pair 9 B3 + Pair 4 W1). Innovation drafts faithfully — both-levels-mandatory AND bidirectional + examples-not-list framings preserved.

---

## Step 6 — Dependency Order

Q1 → Q3 (sequence requirement); other Q1-Q9 in any order; Q10 + Q11 last.

Logical sequence for Innovation drafting + patch application:
- Phase 3 Test items grouped: Q1, Q3, Q6, Q2 (in some order — see Innovation).
- Mechanism-specific: Q4, Q5, Q7, Q8 (one per mechanism).
- Telemetry: Q9.
- Documentation: Q10, Q11.

---

## Step 7 — Self-Evaluate

| Dimension | Result |
|---|---|
| Independence | PASS |
| Completeness | PASS (9 items + auth + staging close) |
| Reassembly | PASS |
| Tractability | PASS |
| Interface clarity | PASS with 3 HCRs |
| Balance | PASS — items each ~10-25 lines |
| Confidence | PASS |

Property (v) firing: Q1-Q9 FIRE; Q10-Q11 don't.

0/7 failure modes.

---

## Verdict

**PROCEED to Innovation.** 11 pieces (9 spec + 2 documentation). 3 HCRs for Innovation. Patch sequence: Q1 before Q3.
