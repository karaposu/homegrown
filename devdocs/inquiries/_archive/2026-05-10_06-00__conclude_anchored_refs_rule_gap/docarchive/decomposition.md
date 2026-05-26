# Decomposition: CONCLUDE Anchored-References Rule Gap

## Honest Pre-Note

Sensemaking SV6 named the pieces. This decomposition is **ceremonial-with-substance**: 7 steps run, but the substantive work is interface clarity + dependency order + self-eval. Q1.2-T4 SKIP trigger (S has named partition fully) would arguably apply — surfaced honestly.

---

## Step 1 — Perceive Coupling Topology

### Elements in the whole (the verdict-communication artifact)

The verdict (eventual `finding.md`) must convey:
- **E1:** A diagnostic framing — why the rule failed (the introduction-gap concept, the two failures: scope + drift).
- **E2:** Concrete rule-text rewrite for conclude.md L222-223.
- **E3:** Concrete compile-step text for CONCLUDE Step 2 (either new step or quality-test tighten).
- **E4:** A short Reasoning section (why these fixes, what was rejected from the F1-F6 fix space).
- **E5:** A short closing — how to apply (e.g., the user can edit conclude.md directly with the proposed text).

### Pairwise coupling

| Pair | Coupling | Why |
|---|---|---|
| E1 ↔ E2 | MODERATE | The framing's "Failure-1 (scope)" maps to E2; framing introduces the concept E2 operationalizes |
| E1 ↔ E3 | MODERATE | The framing's "Failure-2 (drift)" maps to E3; same kind of relationship |
| E2 ↔ E3 | WEAK | Both are fix text but at different conclude.md locations; can be authored independently |
| E4 ↔ E1/E2/E3 | MODERATE | Reasoning references each fix; couples through the diagnosis but not through fix internals |
| E5 ↔ E2/E3 | WEAK | Application guidance points at the fixes but doesn't depend on their internals |

### Coupling clusters

- **Cluster α (diagnostic):** E1 + E4 — diagnosis + reasoning live together.
- **Cluster β (Fix-A content):** E2 — rule-text rewrite.
- **Cluster γ (Fix-B content):** E3 — compile-step text.
- **Cluster δ (application):** E5 — closing / how-to-apply.

### Major boundaries

- Between Fix-A (β) and Fix-B (γ): clean — different conclude.md locations; independent text.
- Between diagnostic (α) and fixes (β + γ): clean — diagnostic is conceptual; fixes are textual artifacts.
- Between fixes (β + γ) and application (δ): clean — application doesn't engage fix internals.

---

## Step 2 — Detect Boundaries (Top-Down)

Natural pieces:

- **P1 — Diagnostic framing** (E1): why did the rule fail; what's the introduction-gap; what are the two failures.
- **P2 — Fix-A rule-text rewrite** (E2): concrete text for conclude.md L222-223.
- **P3 — Fix-B compile-step text** (E3): concrete text for CONCLUDE Step 2 (or quality-test tighten).
- **P4 — Reasoning** (E4): why these fixes; what F1-F6 alternatives were considered/rejected.
- **P5 — Closing / application note** (E5): how the user applies this; verifiability.

Matches sensemaking SV6 + adds Reasoning + Closing as natural finding-template pieces. Confidence: HIGH.

---

## Step 3 — Validate Boundaries (Bottom-Up)

### Atoms

- A single rule-text rewrite (Fix-A's actual replacement text).
- A single compile-step (Fix-B's actual replacement text).
- The introduction-gap concept (single named idea).
- The two-failures named distinction (scope vs drift).
- One sentence per F1-F6 alternative rejection.
- A single application-guidance sentence.

### Atom grouping

- Introduction-gap concept + two-failures named distinction → P1 cleanly.
- Fix-A text → P2.
- Fix-B text → P3.
- F1-F6 rejection sentences → P4 cleanly.
- Application sentence → P5.

### Atoms split apart? Atoms grouped that should be independent?

No splits or wrong-groupings detected. Top-down + bottom-up agree. Confidence: **HIGH** on all boundaries.

---

## Step 4 — Express as Question Tree

### P1 — Diagnostic framing

**Question:** Why did the Anchored references rule fail to prevent D2/E1/E7 from leaking into the navigation-audit finding?

**Verification criteria:**
- [ ] Names the gap "introduction-gap" (with brief expansion: "labels indexing into a system the reader has not been introduced to").
- [ ] States the two failures explicitly: Failure-1 (rule SCOPE — example covers positional labels in introduced structures; doesn't cover scaffolding-IDs); Failure-2 (rule APPLICATION drift — bare IDs on subsequent references even where the rule applies).
- [ ] References specific lines (conclude.md L64-67 for principle; L222-223 for rule; navigation finding lines 51, 160, 174, 198 as evidence).
- [ ] Length: ≤ 1 paragraph (~150 words).

### P2 — Fix-A rule-text rewrite

**Question:** What's the concrete rewrite of the Anchored references rule (conclude.md L222-223) that closes the scope gap without overcorrecting?

**Verification criteria:**
- [ ] Provides exact replacement text for L222-223.
- [ ] Covers BOTH the original case (positional labels) AND scaffolding-IDs (D-letter, P, SV, etc.).
- [ ] Doesn't ban useful intra-finding cross-references (e.g., numbered MUST lists where each item is referenced later).
- [ ] Includes a tightened example (preserves "Item 3 (the continuous-loop runner)" + adds a scaffolding-ID example showing the rule's stronger form).
- [ ] Length: ≤ ~150 words.

### P3 — Fix-B compile-step text

**Question:** What's the concrete compile-step text for CONCLUDE that strips workspace scaffolding-IDs before saving the finding?

**Verification criteria:**
- [ ] Provides exact text for the new step (or modification to existing quality-test).
- [ ] Names which patterns to scan for (e.g., single-uppercase-letter+digit; P+digit; SV+digit; variant labels like P1-A).
- [ ] States the action (strip and replace with descriptive name; or introduce the system).
- [ ] Self-enforcing — the writer doesn't rely on memory; the step is listed as part of CONCLUDE.
- [ ] Length: ≤ ~100 words.

### P4 — Reasoning

**Question:** Why these fixes over the other alternatives in the F1-F6 fix space?

**Verification criteria:**
- [ ] References each F-candidate (F1 surgical example / F2 compile-step / F3 quality-test tighten / F4 discipline-convention change / F5 strict prohibition / F6 generalized rewrite).
- [ ] States 1 sentence per rejection (concise; not bloating).
- [ ] States why the chosen pair (F2-style step + F6-style generalization) wins.
- [ ] Length: ≤ ~200 words.

### P5 — Closing

**Question:** How does the user apply this fix?

**Verification criteria:**
- [ ] States the user can edit conclude.md directly with the proposed text.
- [ ] States how to verify the fix (re-run CONCLUDE on a new inquiry; check the resulting finding has no bare scaffolding-IDs).
- [ ] Length: ≤ 2-3 sentences.

---

## Step 5 — Map Interfaces

| Source | Target | What flows | Direction |
|---|---|---|---|
| P1 (Diagnosis) | P2, P3 | The introduction-gap concept; Failure-1 maps to P2; Failure-2 maps to P3 | One-way (concept → fix-text) |
| P1 (Diagnosis) | P4 (Reasoning) | The diagnostic frame referenced in why-these-fixes | One-way |
| P2 (Fix-A) | P4 (Reasoning) | Fix-A's text is what P4 explains | One-way |
| P3 (Fix-B) | P4 (Reasoning) | Same | One-way |
| P2, P3 | P5 (Closing) | The fix texts are what P5 says how to apply | One-way (referential) |

### Hidden coupling check

- **Tag/concept consistency:** "introduction-gap" must be named the same way across P1, P4 (and consistently in P2/P3 if used). Mitigation: P1 introduces; P4 references with the same name.
- **Failure naming consistency:** "Failure-1 (scope)" / "Failure-2 (drift)" used in P1; should appear in P4 Reasoning with same labels. Mitigation: explicit naming in P1.
- **Fix-A and Fix-B can be authored independently** as long as the diagnostic frame is stable. This is why P1 must come first.

No hidden coupling.

---

## Step 6 — Order by Dependency

**Working order:**
1. P1 (Diagnostic framing) — establishes the frame everything else uses.
2. P2 ‖ P3 — parallel after P1; independent text artifacts at different conclude.md locations.
3. P4 (Reasoning) — references P1, P2, P3.
4. P5 (Closing) — last; references the fix texts.

**Reading order in finding:** P1 → P2 → P3 → P4 → P5. Same as working order.

**Circular check:** None. Strict DAG.

---

## Step 7 — Self-Evaluate

### Minimum 3-dimension

| Dimension | Verdict |
|---|---|
| Independence | **PASS.** Each piece's question is answerable without sibling-piece content (except via the documented interface — P1's concept names). |
| Completeness | **PASS.** P1+P2+P3+P4+P5 covers diagnosis + both fixes + reasoning + application. The whole (the verdict artifact) is fully partitioned. |
| Reassembly | **PASS.** Reading P1→P2→P3→P4→P5 in order, with P1's frame consumed by P2/P3/P4, reconstructs the verdict. The question (why did the rule fail + what's the fix) is answered. |

### Determination-mechanism check

The Q-tree references "introduction-gap" and "Failure-1/Failure-2" as concepts. **Are these determinations addressed by a piece?** YES — P1 (Diagnostic framing) is precisely that piece. The runtime determination (which lines in finding.md are scaffolding-ID violations) is addressed structurally by Fix-B's pattern-match guidance in P3.

### Full 7-dimension

| Dimension | Verdict |
|---|---|
| Independence | PASS |
| Completeness | PASS |
| Reassembly | PASS |
| **Tractability** | PASS — each piece is short (P1 ~1 paragraph; P2 ~150 words; P3 ~100 words; P4 ~200 words; P5 ~50 words) |
| **Interface clarity** | PASS — P1 → all is the concept spine; no other cross-piece flows |
| **Balance** | MEDIUM-PASS — P4 (Reasoning) is the longest; P5 the shortest. Not extreme imbalance |
| **Confidence** | HIGH — top-down and bottom-up agree |

### Failure mode check

- Premature decomposition: NO (sensemaking ran first).
- Wrong boundaries: NO (cuts at low-coupling).
- Hidden coupling: NO (interface map covers concept + naming consistency).
- Missing pieces: NO (determination-mechanism covered).
- Over-decomposition: NO (5 pieces; no atom-sized fragments).
- Ignoring dependencies: NO (order produced).
- Imbalanced: NO (sizes proportional).

**No failure modes.**

---

## Final Deliverable

### Coupling Map (summary)

5 clusters; major boundaries clean; concept spine (P1) correctly centralized.

### Question Tree

| Piece | Question | Approx. Size |
|---|---|---|
| P1 | Why did the Anchored references rule fail? | ~1 paragraph |
| P2 | What's the concrete rewrite of the rule? | ~150 words |
| P3 | What's the concrete compile-step text? | ~100 words |
| P4 | Why these fixes over alternatives? | ~200 words |
| P5 | How does the user apply this? | ~2-3 sentences |

### Interface Map

P1 → P2/P3/P4 (concept spine: introduction-gap, Failure-1/Failure-2 naming). P2/P3/P4 → P5 (referential only). No mutual cross-piece dependencies among P2/P3/P4.

### Dependency Order

P1 → {P2 ‖ P3} → P4 → P5.

### Self-Evaluation

3-dim: PASS/PASS/PASS. 7-dim: 6 PASS + 1 MEDIUM-PASS (Balance). No failure modes.

---

## Honest Value Tag

**LOW-MEDIUM.** Sensemaking SV6 named the pieces; decomposition's substantive contribution:

- Confirmed sensemaking's partition matches coupling topology (HIGH confidence agreement).
- Mapped the concept-spine interface (P1 → P2/P3/P4) and the referential flows (→ P5).
- Identified the naming-consistency hidden-coupling check ("introduction-gap" + "Failure-1/Failure-2" must propagate identically).
- Determination-mechanism check PASSED.

What decomposition did NOT need to do:
- Re-derive the partition (sensemaking did).
- Generate fix content (innovation's job).

Q1.2-T4 SKIP trigger: sensemaking named the partition fully. The trigger would arguably fire here. Per consistent pattern across this corpus (8th LOW-MEDIUM D when S did substantial work), this reinforces the project-protocol observation that MVL+ may benefit from formalizing a SKIP path for D when S has named the partition. Surfaced for project memory; not a finding-content concern.
