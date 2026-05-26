## User Input

```
devdocs/inquiries/2026-05-10_03-50__navigation_established_audit/_branch.md

Save the output to devdocs/inquiries/2026-05-10_03-50__navigation_established_audit/decomposition.md

Read _branch.md, exploration.md, AND sensemaking.md.

Context primer: Sensemaking SV6 produced a stable model with the output shape NAMED:
- Foreground (~10 HEURISTIC × HIGH challenge candidates)
- Background (~30 CANONICAL × LOW foundational reference)
- DEFERRED (~9 P-category items)
- Plus brief framing + closing self-reference note

Anti-bloat constraint (load-bearing). This decomposition is expected to be LOW-MEDIUM value.

[Pieces named per sensemaking; decomposition is confirming + adding interface details rather than discovering new structure.]
```

---

# Decomposition: Navigation — What's Established So Far

## Honest Pre-Note

Sensemaking SV6 named the partition. This decomposition is **ceremonial-with-substance**: the 7-step process runs, but the substantive work is interface detail + dependency order + self-eval, not piece discovery. Honest value tag is declared upfront and refined at end.

---

## Step 1 — Perceive Coupling Topology

### Elements in the whole (the verdict-communication artifact)

The verdict (eventual `finding.md`) must convey:
- E1: A framing for the user (anti-bloat acknowledged; how to read).
- E2: ~10 challenge candidates (HEURISTIC × HIGH items + their sharpened reasoning + flag bits).
- E3: ~30 foundational items (CANONICAL × LOW; compressed reference).
- E4: ~9 DEFERRED items (acknowledged-roadmap; separated).
- E5: Closing note (self-reference acknowledgment + how user uses this).
- E6: The two classification axes (Strength sub-tag + Vulnerability) as readable conventions.
- E7: Citations to canonical sources.

### Pairwise coupling (high-level only; not exhaustive)

| Pair | Coupling | Why |
|---|---|---|
| E1 ↔ E2 | WEAK | Framing introduces; doesn't depend on E2's specific contents |
| E1 ↔ E3 | WEAK | Same |
| E1 ↔ E4 | WEAK | Same |
| E1 ↔ E5 | WEAK | Distant; framing and closing don't share content |
| E2 ↔ E3 | WEAK | Both tag-classified items, but content non-overlapping by Vulnerability tag |
| E2 ↔ E4 | NONE | Different classes (challenge vs deferred-roadmap) |
| E3 ↔ E4 | NONE | Different classes |
| E2 ↔ E6 | STRONG | Foreground rows depend on the classification axes being defined |
| E3 ↔ E6 | STRONG | Background entries also use the classification |
| E4 ↔ E6 | MODERATE | DEFERRED uses Strength=DEFERRED only, no sub-tag needed |
| E5 ↔ self-reference | MEDIUM | Closing note is the home for the project-internal-conditional acknowledgment |
| E6 ↔ E7 | NONE | Convention vs citations; orthogonal |
| All ↔ E7 | WEAK | Citations live with each item, not as a separate piece |

### Coupling clusters

- **Cluster α (classification spine):** E6 (axes/conventions). Every content piece consumes it. Pulling it into one piece (the framing) is natural.
- **Cluster β (foreground content):** E2. High internal coherence (each row uses same shape).
- **Cluster γ (background content):** E3. High internal coherence; grouped by exploration category.
- **Cluster δ (deferred content):** E4. High internal coherence.
- **Cluster ε (framing + closing):** E1 + E5. Both are user-orientation pieces; could merge or split. Sensemaking already named them as separate, but the coupling between them is moderate (both reference anti-bloat / how-to-read).

### Major boundaries (low-coupling valleys)

- Between Foreground (β) and Background (γ): clean — different Vulnerability tags, different consumption pattern (challenge vs reference).
- Between Background (γ) and DEFERRED (δ): clean — different Strength (CONFIRMED vs DEFERRED), different role (reference vs roadmap).
- Between Framing (ε-open) and Closing (ε-close): moderate — both user-orientation; coupling is lower than within-content but higher than across-content boundaries.

The classification spine (α) is **diffuse coupling** — it touches every content piece. It's correctly placed in the framing piece (E1), making the framing not just orientation but also convention-establishment.

---

## Step 2 — Detect Boundaries (Top-Down)

From the coupling map, the natural pieces are:

- **P1 — Framing + classification convention** (E1 + E6): orient reader; declare how Strength and Vulnerability work in this finding.
- **P2 — Foreground: Challenge Candidates** (E2): the ~10 items the user is most likely to challenge, with sharpened reasoning + flag bits.
- **P3 — Background: Foundational Reference** (E3): the ~30 CANONICAL × LOW items, compressed.
- **P4 — DEFERRED Items** (E4): the ~9 P-category items, listed.
- **P5 — Closing Note** (E5): self-reference acknowledgment + how user uses this.

Citations (E7) are inline within each piece, not a separate piece. (Promoting them to a piece would be over-decomposition.)

This matches sensemaking SV6's named partition exactly. Confidence: HIGH.

---

## Step 3 — Validate Boundaries (Bottom-Up Check)

### Atoms (irreducible elements)

- A single foreground row (item ID + summary + tag + reason + flag).
- A single background row (item ID + summary + tag).
- A single DEFERRED row (item ID + 1-line + source).
- The framing paragraph itself.
- The closing paragraph itself.
- The Strength legend.
- The Vulnerability legend.

### Atom grouping check

- Foreground rows cluster cleanly into P2.
- Background rows cluster cleanly into P3.
- DEFERRED rows cluster cleanly into P4.
- Framing paragraph + Strength legend + Vulnerability legend all belong in P1 (they're all orientation/convention; one focused pass produces them together).
- Closing paragraph belongs in P5.

### Atoms split apart by Step 2's boundaries?

No. Each atom maps to exactly one piece.

### Atoms grouped together that are independent?

The framing paragraph and the legends are different surface forms but have the same purpose (orient + declare convention). Keeping them in one piece is fine.

The closing paragraph carries the self-reference acknowledgment. Could be merged into framing, but separation matches user reading flow (orient → walk list → close).

### Confidence

Top-down (Step 2) and bottom-up (Step 3) **agree**. Confidence: **HIGH** on all boundaries.

---

## Step 4 — Express as Question Tree

### P1 — Framing + Convention

**Question:** What is this audit, what convention does it use, and how should the user read it?

**Verification criteria:**
- [ ] States that the audit is a list of established navigation items + strength + reasoning.
- [ ] Acknowledges anti-bloat constraint explicitly.
- [ ] Names the success criterion (user picks 3-5 items in <2 min reading).
- [ ] Defines Strength sub-tags: CONFIRMED-CANONICAL / CONFIRMED-INTERPRETIVE / CONFIRMED-HEURISTIC / SCANNED / DEFERRED.
- [ ] Defines Vulnerability levels: HIGH / MEDIUM / LOW with sharpened criterion.
- [ ] Defines flag bits: (iterated) and project-internal-conditional.
- [ ] States how the foreground/background/deferred sections are organized.
- [ ] Length budget: ≤ 1 paragraph + 1 small legend. Anti-bloat compliant.

### P2 — Foreground: Challenge Candidates

**Question:** Which ~10 navigation items are HEURISTIC × HIGH (or HEURISTIC × MEDIUM-HIGH lower-tier) and most worth challenging during restructuring?

**Verification criteria:**
- [ ] Includes the top-tier HIGH candidates: D2, E1, E7, I2, O2.
- [ ] Includes lower-tier MEDIUM-HIGH candidates: E2-E5 (taxonomy overlaps), E5-E6 (REVISIT/threshold), N1, O1.
- [ ] Each row has: item ID, 1-line summary, Strength sub-tag (HEURISTIC), Vulnerability (HIGH or MEDIUM-HIGH), 1-line "why challenge this," (iterated) marker where corpus topic-overlap exists.
- [ ] Order: HIGH first, then MEDIUM-HIGH; within tier, by likely user-impact.
- [ ] Each "why challenge this" reasoning is concrete (not generic), naming the specific epistemic weakness or bloat-source potential.
- [ ] Citations to canonical source for each item.
- [ ] Length budget: ≤ ~12 rows × 1 line each.

### P3 — Background: Foundational Reference

**Question:** Which ~30 navigation items are CANONICAL × LOW (foundational; would-cascade-if-challenged) and how should they be presented for compressed reference?

**Verification criteria:**
- [ ] Includes the foundational items: A1-A3, B1-B5, C1-C3, F1-F4, H1-H2, I1, J1-J8, K1, K3, K4, M1, N2-N5, O3.
- [ ] Grouped by exploration category (A-Q minus P).
- [ ] Each row: item ID, 1-line summary, Strength sub-tag (CANONICAL or INTERPRETIVE).
- [ ] Category C items carry the project-internal-conditional flag.
- [ ] No reasoning column (compressed; the items are foundational and don't need per-row "why").
- [ ] Length budget: ≤ ~30 rows × 1 line; grouped headers add minimal overhead.

### P4 — DEFERRED Items

**Question:** Which ~9 items are named in canonical sources but not operationally specified, and what does each acknowledge as deferred?

**Verification criteria:**
- [ ] Includes P1-P9 from exploration.
- [ ] Each row: item ID, 1-line summary, source acknowledgment ("named in [doc] §[section]").
- [ ] Clearly distinguished from challenge candidates — these are roadmap, not bloat.
- [ ] No Vulnerability tag (DEFERRED is its own status).
- [ ] Length budget: ≤ ~9 rows × 1 line.

### P5 — Closing Note

**Question:** What does the user need to know about self-reference, and how do they use this finding?

**Verification criteria:**
- [ ] Acknowledges global self-reference (audit runs inside MVL+).
- [ ] States that Category C items have a project-internal-conditional dependency.
- [ ] Names how the user uses this: pick from foreground; foundational items resist; DEFERRED items are roadmap.
- [ ] Length budget: ≤ 2-3 sentences.

---

## Step 5 — Map Interfaces

### Interface Map

| Source | Target | What flows | Direction |
|---|---|---|---|
| P1 (Framing) | P2 (Foreground) | Convention: Strength sub-tags, Vulnerability criterion, (iterated) marker definition | One-way |
| P1 (Framing) | P3 (Background) | Convention: Strength sub-tags, project-internal-conditional flag | One-way |
| P1 (Framing) | P4 (DEFERRED) | Convention: Strength=DEFERRED definition | One-way |
| P1 (Framing) | P5 (Closing) | Convention: self-reference framing | One-way |
| P2 (Foreground) | P5 (Closing) | None directly; the closing's "how to use" implicitly references the foreground | Conceptual only |
| Exploration items | P2, P3, P4 | Item content (ID, summary, source citation, original tags) | One-way (source → consumers) |
| Sensemaking SV6 | P1, P2, P3 | Classification axes, sharpened criteria, success criterion | One-way (source → consumers) |

### Hidden coupling check

- **Tag consistency:** if P2 tags an item HEURISTIC × HIGH, P3 must NOT have that item also listed (would double-count). Mitigation: each item appears in exactly one of P2/P3/P4. Explicit interface: the foreground/background partition is determined by Vulnerability + Strength sub-tag, computed once and applied consistently.
- **Citation consistency:** each item's citation should be the same across pieces (if cited at all). Mitigation: citations come from exploration's canonical-source list; pieces reference exploration's tagging directly.
- **Flag-bit consistency:** (iterated) marker only appears on P2 rows; project-internal-conditional only on P3 Category C rows. No item in P4 carries flags. Mitigation: P1 declares which flags apply where.

No hidden coupling detected after this check.

### Note on diffuse coupling

P1 → all-other-pieces is correct (P1 is the convention spine). This is not a hidden coupling problem; it's the documented design. The convention is centralized in P1 and consumed everywhere.

---

## Step 6 — Order by Dependency

### Dependency order

1. **P1 (Framing + Convention)** — must come first. Establishes the classification convention that all content pieces use.
2. **P2 (Foreground)** ‖ **P3 (Background)** ‖ **P4 (DEFERRED)** — parallel after P1. No mutual dependencies.
3. **P5 (Closing Note)** — last. References "the foreground" and "the deferred" conceptually.

### Working order vs reading order

- **Working order:** P1 → {P2, P3, P4 in parallel} → P5.
- **Reading order (in finding):** P1 → P2 → P3 → P4 → P5. Foreground before Background because the user's primary attention is the challenge list.

### Circular dependency check

None. The dependency graph is a strict DAG with one source (P1) and one sink (P5).

---

## Step 7 — Self-Evaluate

### Minimum 3-dimension evaluation

| Dimension | Check | Verdict |
|---|---|---|
| **Independence** | Each piece answerable without sibling pieces | **PASS.** P1 establishes convention (no sibling needed). P2/P3/P4 use convention from P1; their content is sibling-independent. P5 references conceptually but doesn't require P2/P3/P4 content to make sense. |
| **Completeness** | Pieces cover the whole | **PASS.** P1 covers framing+convention; P2 covers HEURISTIC items; P3 covers CANONICAL/INTERPRETIVE items; P4 covers DEFERRED items; P5 covers self-reference + use guidance. The whole (the verdict artifact) is fully partitioned. |
| **Reassembly** | Pieces + interfaces reconstruct the whole | **PASS.** P1+P2+P3+P4+P5 in reading order, with P1's convention applied consistently across P2/P3/P4 via the documented interface, reconstructs the full verdict. The user can pick from P2 (challenge candidates), reference P3 (foundational), see P4 (deferred), and read P5 (close). The original problem (challenge-readiness) is solved. |

### Determination-mechanism check

The Q-tree references runtime determinations: which items are HEURISTIC vs CANONICAL; which are HIGH vs LOW. **Are these determinations addressed by a piece?**

YES — P1 (Framing + Convention) declares the classification convention AND sensemaking SV6 already executed the determinations item-by-item (the foreground/background lists are pre-computed). The determination mechanism is "apply sensemaking's classification" and the determinations are already made. No missing piece.

### Full 7-dimension evaluation (for honesty)

| Dimension | Check | Verdict |
|---|---|---|
| Independence | (above) | PASS |
| Completeness | (above) | PASS |
| Reassembly | (above) | PASS |
| **Tractability** | Each piece small enough for one focused pass? | **PASS.** P1 ≤ 1 paragraph + legend; P2 ≤ ~12 rows; P3 ≤ ~30 rows in compressed form; P4 ≤ ~9 rows; P5 ≤ 2-3 sentences. Each piece is a single focused write. |
| **Interface clarity** | All cross-piece flows explicit | **PASS.** Interface map shows P1 → all as the convention spine; no other cross-piece flows. Hidden coupling check passed. |
| **Balance** | Complexity proportional? | **MEDIUM.** P3 (background) is the largest piece by row count (~30) but lowest per-row complexity (compressed reference). P2 (foreground) has ~12 rows but higher per-row complexity (sharpened reasoning + flag bits). Total complexity is balanced enough; no single piece is 80% of the work. |
| **Confidence** | Top-down + bottom-up agree | **HIGH.** Step 2 and Step 3 produced identical boundary sets. |

All 7 dimensions PASS or have only minor variance (Balance is MEDIUM not LOW; acceptable).

### Failure mode check

- **Premature decomposition** — Sensemaking ran first and named the partition. NOT detected.
- **Wrong boundaries** — Cuts at low-coupling valleys (Foreground/Background/DEFERRED divisions). NOT detected.
- **Hidden coupling** — Interface map + Step 5 hidden-coupling check explicitly addressed. NOT detected.
- **Missing pieces** — Determination mechanism check passed. NOT detected.
- **Over-decomposition** — Considered citation as separate piece; rejected as inline. P1+convention merged appropriately. NOT detected.
- **Ignoring dependencies** — Dependency order produced explicitly. NOT detected.
- **Imbalanced decomposition** — Balance check is MEDIUM (acceptable). NOT detected.

**No failure modes observed.**

---

## Final Deliverable

### Coupling Map (summary)

- 5 clusters identified (α convention spine, β foreground, γ background, δ deferred, ε framing/closing).
- Major boundaries clean (β/γ, γ/δ).
- α is diffuse coupling correctly centralized in P1.

### Question Tree

| Piece | Question | Approx. Size |
|---|---|---|
| P1 | What is this audit, what convention does it use, how to read? | 1 paragraph + 1 legend |
| P2 | Which ~10 navigation items are HEURISTIC × HIGH and most worth challenging? | ~12 rows |
| P3 | Which ~30 items are CANONICAL × LOW and how to compress for reference? | ~30 rows compressed |
| P4 | Which ~9 items are DEFERRED in canonical sources? | ~9 rows |
| P5 | What does the user need to know about self-reference + how to use this? | 2-3 sentences |

### Interface Map

P1 → P2/P3/P4/P5 (convention: classification axes, flag bits, success criterion). Pieces P2/P3/P4 do not communicate with each other directly. P5 references concepts established by all prior pieces but does not consume their content.

### Dependency Order

P1 first → {P2, P3, P4 in parallel} → P5 last.

### Self-Evaluation

Minimum 3 dimensions: PASS / PASS / PASS. Full 7 dimensions: 6 PASS + 1 MEDIUM (Balance) — acceptable. No failure modes.

---

## Honest Value Tag

**LOW-MEDIUM.** Sensemaking SV6 named the partition, the classification axes, the success criterion, and the foreground/background/deferred output structure. Decomposition's substantive contribution:

- Confirmed sensemaking's partition matches coupling topology (top-down + bottom-up agreement; HIGH confidence).
- Mapped the convention-spine (P1) → all-pieces interface explicitly, preventing hidden coupling on tag consistency, citation consistency, and flag-bit consistency.
- Produced explicit verification criteria per piece + dependency order + working-vs-reading-order distinction.
- Named the determination-mechanism check as PASSED (sensemaking pre-computed the determinations).

What decomposition did NOT need to do (and didn't):
- Re-derive the partition from scratch.
- Add new pieces beyond what sensemaking named.
- Generate content (innovation's job).

This is the **6th-or-7th LOW-MEDIUM D in a row** when S did substantial structural work. Consistent corpus pattern — when sensemaking does heavy lifting on partition, decomposition's value is interface clarity + dependency order + self-eval, not piece discovery. The pattern itself is informative for the project's protocol-design discussions.

The Q1.2-T4 SKIP trigger from the audit framework (S has named the partition fully) would arguably trigger here. Surface for project memory: **decomposition's value-tag is consistently LOW-MEDIUM after a strong S; consider whether MVL+ should formalize a SKIP path**. (This is a project-protocol observation, not a finding-content concern.)
