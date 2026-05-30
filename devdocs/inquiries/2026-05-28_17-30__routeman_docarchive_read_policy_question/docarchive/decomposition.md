# Decomposition — routeman_docarchive_read_policy_question

## User Input

/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-28_17-30__routeman_docarchive_read_policy_question/_branch.md

Read in this order: _branch.md → surfacing.md → sensemaking.md. Decomposition partitions the two-layer corrective deliverable into pieces Innovation can refine. Confirmation-shape (verdict settled).

---

## Step 1 — Coupling Topology

### Elements in the whole

The two-layer corrective deliverable contains 8 candidate sub-pieces (per Sensemaking SV6 + frontier flag routing):

- **E1** — Implicit-policy table (4-tier per-file assignments for the generic-mode case)
- **E2** — Per-OT verdict (OT1 spec accuracy + Story 1 over-claim; OT2 cost is real; OT3 alternative-policy spec-aligned; OT4 rationale-against is weak)
- **E3** — Story 1 corrective text (drop OR re-tier; Innovation generates both)
- **E4** — Spec amendment recommendation (the §3.2 new sub-section text)
- **E5** — Joint justification statement (spec accuracy + cost rationale; CONCLUDE self-sufficiency design as the load-bearing link)
- **E6** — Pattern-attribution tone (substantive acknowledgment connecting to 15-48 Q7 frontier)
- **E7** — 15-48 Q7 frontier flag update (second-instance observation; strengthens but doesn't resolve)
- **E8** — Finding deliverable shape spec (CONCLUDE template; no Inherited Commitments Re-test)

### Pairwise coupling propagation

| Pair | Propagation question: "if A changes, does B need to change?" | Coupling |
|---|---|---|
| E1 ↔ E2 | If implicit-policy table changes, per-OT verdicts' articulation changes. STRONG. | STRONG |
| E1 ↔ E3 | If implicit-policy changes (e.g., docarchive promoted to SHOULD), Story 1 corrective text changes. STRONG. | STRONG |
| E1 ↔ E4 | Spec amendment IS the explicit form of E1. STRONG (same content). | STRONG |
| E2 ↔ E3 | If OT1 verdict changes (Story 1 not over-claimed), the corrective evaporates. STRONG. | STRONG |
| E2 ↔ E4 | If OT2/OT4 verdict changes (cost weak; rationale strong), spec amendment shape changes. STRONG. | STRONG |
| E2 ↔ E5 | Verdicts ARE the content of the justification claims. STRONG. | STRONG |
| E2 ↔ E6 | If over-claim verdict changes, attribution tone has nothing to attribute. STRONG. | STRONG |
| E2 ↔ E7 | If over-claim verdict changes, frontier update changes (no second instance). STRONG. | STRONG |
| E3 ↔ E4 | Story 1 corrective + spec amendment are PARALLEL outputs of the same implicit policy. MODERATE (parallel but independent shapes). | MODERATE |
| E3 ↔ E5 | Joint justification is cited IN Story 1's corrective prose (light reference). WEAK. | WEAK |
| E3 ↔ E6 | Story 1's tonal attribution is at the corrective layer. WEAK. | WEAK |
| E4 ↔ E5 | Joint justification is cited in the spec amendment's prologue. WEAK. | WEAK |
| E5 ↔ E6 | Justification + tone are at the same prose layer of the deliverable. WEAK (both stylistic). | WEAK |
| E5 ↔ E7 | Cost-justification is independent of the Q7 frontier update. WEAK. | WEAK |
| E6 ↔ E7 | Pattern-attribution tone (acknowledging this session's over-claim) and Q7 frontier update (recording the second instance) are TWO FACETS of the same observation. STRONG. | STRONG |
| E3 ↔ E8 | Story 1 corrective lands in the finding's Next Actions. STRONG. | STRONG |
| E4 ↔ E8 | Spec amendment lands in the finding's Next Actions. STRONG. | STRONG |
| E5 ↔ E8 | Justification lands in the finding's Reasoning. STRONG. | STRONG |
| E6 ↔ E8 | Tone permeates the finding's prose. STRONG. | STRONG |
| E7 ↔ E8 | Frontier update lands in the finding's Open Questions / Research Frontiers. STRONG. | STRONG |

### Coupling map (clusters and boundaries)

**Cluster ALPHA — Foundational structural claim**
- E1 (implicit-policy table) — single-element cluster; load-bearing for everything downstream.

**Cluster BETA — Diagnostic application + parallel correctives**
- E2 (per-OT verdict) — applies E1 to the four observation targets
- E3 (Story 1 corrective text) — applies E1 to user_stories
- E4 (spec amendment) — encodes E1 as explicit spec text
- High internal coupling; all three depend on E1 + E2.

**Cluster GAMMA — Justification**
- E5 (joint justification: spec accuracy + cost) — depends on E2's verdicts but produces a distinct prose component (the WHY).

**Cluster DELTA-EPSILON — Pattern observation (paired)**
- E6 (pattern-attribution tone) — acknowledges this session's over-claim as evidence
- E7 (15-48 Q7 frontier update) — records the second-instance observation

E6 and E7 are STRONGLY coupled (same observation, two facets); cluster them together but partition into separate pieces because they land in different finding sections (E6 in prose/tone; E7 in Open Questions / Research Frontiers).

**Cluster ZETA — Finding assembly**
- E8 — meta-level; depends on all others.

### Boundary detection

Major boundaries:

- **B1 (ALPHA | BETA)** — E1 is the structural claim; BETA applies it. Clean one-way interface.
- **B2 (BETA | GAMMA)** — E5's prose role (justification) is distinct from BETA's content roles (verdict + correctives).
- **B3 (BETA, GAMMA | DELTA-EPSILON)** — E6 + E7's pattern observation is distinct from corrective content; they document the meta-observation.
- **B4 (all | ZETA)** — E8 assembles; structurally distinct.

---

## Step 2 — Detect Boundaries (Top-Down)

Resulting pieces (top-down):

- **P-A (ALPHA)** — Implicit-policy table.
- **P-B (BETA, sub-partitioned)** — Per-OT verdict (P-B1); Story 1 corrective (P-B2); Spec amendment (P-B3).
- **P-C (GAMMA)** — Joint justification.
- **P-D (DELTA-EPSILON, sub-partitioned)** — Pattern-attribution tone (P-D1); Frontier-update text (P-D2).
- **P-E (ZETA)** — Finding assembly.

Sub-partitioning rationale for P-B: each sub-element answers a distinct question (verdict per OT vs Story 1 fix vs spec amendment); each has distinct verification criteria; the sub-partition aids Innovation's refinement without imposing meaningful coordination cost.

Sub-partitioning rationale for P-D: E6 (tone) lives in prose; E7 (frontier flag) lives in a structural section. They share the observation but the artifact-location differs; partitioning lets Innovation refine the tone separately from the frontier-flag text.

Final piece set:

- Q1 — Implicit-policy table
- Q2 — Per-OT verdict (4 verdicts with spec citations)
- Q3 — Story 1 corrective text (drop OR re-tier)
- Q4 — Spec amendment recommendation
- Q5 — Joint justification
- Q6 — Pattern-attribution tone
- Q7 — Frontier-update text (15-48 Q7 second instance)
- Q8 — Finding assembly

---

## Step 3 — Validate Boundaries (Bottom-Up Check)

Atoms (irreducible deliverable elements):

- a1 — The 4-tier vocabulary citation (MANDATORY / MANDATORY-WHEN-AVAILABLE / SHOULD / MAY) from 14-49
- a2 — Per-file tier assignment for `_branch.md`
- a3 — Per-file tier assignment for `finding.md`
- a4 — Per-file tier assignment for `_route.md`
- a5 — Per-file tier assignment for `docarchive/`
- a6 — OT1 verdict statement (spec-silent + Story 1 over-claimed)
- a7 — OT2 verdict statement (cost is real + maps to Workspace-overload)
- a8 — OT3 verdict statement (alternative-policy spec-aligned with MAY caveat)
- a9 — OT4 verdict statement (rationale-against is weak per CONCLUDE design)
- a10 — Story 1 corrective candidate A (drop the docarchive line)
- a11 — Story 1 corrective candidate B (re-tier the input list)
- a12 — Spec amendment prologue (motivation; cite 14-49 gap)
- a13 — Spec amendment table or prose (the 4 file-tier assignments)
- a14 — Spec amendment integration note (where in §3.2 to land it)
- a15 — Joint justification: spec accuracy half
- a16 — Joint justification: cost rationale half
- a17 — Joint justification: the linkage statement (CONCLUDE self-sufficiency design IS the cost-bound)
- a18 — Pattern-attribution tone: acknowledgment statement
- a19 — Pattern-attribution tone: connection to 15-48 Q7
- a20 — Frontier-update text: "second observed instance" framing
- a21 — Frontier-update text: scope-disclaimer (still flagged, not resolved)
- a22 — Finding template fill (CONCLUDE assembly)

Atom-to-piece grouping (bottom-up):

| Atom | Naturally groups into |
|---|---|
| a1, a2, a3, a4, a5 | Q1 (implicit-policy table) |
| a6, a7, a8, a9 | Q2 (per-OT verdict) |
| a10, a11 | Q3 (Story 1 corrective text — two candidates) |
| a12, a13, a14 | Q4 (spec amendment) |
| a15, a16, a17 | Q5 (joint justification) |
| a18, a19 | Q6 (pattern-attribution tone) |
| a20, a21 | Q7 (frontier-update text) |
| a22 | Q8 (finding assembly) |

**Bottom-up validates top-down.** No atom split across pieces; no atom grouped against the top-down clustering. All boundaries pass.

**Confidence:** HIGH on B1, B2, B4. MEDIUM-HIGH on B3 (E6 and E7 are tightly coupled; the partition is justified by different artifact locations but could be merged if Innovation prefers one piece).

---

## Step 4 — Express as Question Tree

### Q1 — Implicit-policy table

**Question:** What is the implicit policy for routeman's generic-mode read-policy on a concluded `/MVLw` inquiry folder, derived from spec silence + CONCLUDE design + canon doc reader workflow?

**Verification criteria:**
- [ ] Table with 4 rows (one per file/folder: `_branch.md`, `finding.md`, `_route.md`, `docarchive/`)
- [ ] Each row's tier assignment uses the 14-49 4-tier vocabulary (MANDATORY / MANDATORY-WHEN-AVAILABLE / SHOULD / MAY)
- [ ] Each row's source-of-rule cited (e.g., "CONCLUDE quality test"; "canon doc reader workflow"; "14-49 finding directional rule extended to generic")
- [ ] The table's load-bearing role explicit (it grounds Q2's verdicts, Q3's Story 1 fix, Q4's spec amendment)

---

### Q2 — Per-OT verdict

**Question:** What is the structural verdict on each of the four observation targets?

**Verification criteria:**
- [ ] OT1 (spec accuracy of Story 1's claim) verdict: Story 1 OVER-CLAIMED + spec is silent + canonical implicit policy contradicts the flat enumeration
- [ ] OT2 (cost-of-bloat) verdict: cost is REAL + LOAD-BEARING + maps to Workspace-overload failure mode in surfacing spec
- [ ] OT3 (alternative-policy "finding.md only") verdict: SPEC-ALIGNED + small refinement (docarchive MAY preserves opt-in path)
- [ ] OT4 (structural rationale for/against docarchive read) verdict: rationale-AGAINST is STRONG (three independent sources); rationale-FOR is WEAK (no spec authorization; contradicts CONCLUDE)
- [ ] Each verdict references Q1's implicit-policy table as the disambiguating frame

---

### Q3 — Story 1 corrective text

**Question:** How should Story 1's input list in `devdocs/routeman_user_stories.md` be corrected to match the implicit policy?

**Verification criteria:**
- [ ] Two candidate shapes generated: Candidate A (drop the docarchive line); Candidate B (re-tier the input list with explicit tiers)
- [ ] Each candidate's verification criterion: (a) does NOT claim default-read of docarchive; (b) is consistent with Q1's implicit policy; (c) is light-touch (preserves the rest of Story 1)
- [ ] Recommendation: one preferred candidate with reasoning; user picks
- [ ] Exact replacement text drafted so the user can apply directly

---

### Q4 — Spec amendment recommendation

**Question:** What spec amendment to `cognitive_harness/routeman/references/routeman.md` §3.2 would explicitly close the 14-49 generic-mode read-policy gap?

**Verification criteria:**
- [ ] A new sub-section drafted (e.g., §3.2.6 "Reading discipline outputs in generic mode")
- [ ] Per-file tiers explicit (`_branch.md` SHOULD; `finding.md` MANDATORY-WHEN-AVAILABLE; `_route.md` SHOULD; `docarchive/` MAY)
- [ ] Cross-reference to the 14-49 vocabulary section (no duplication)
- [ ] Cross-reference to CONCLUDE quality test + canon doc reader workflow as the rationale anchors
- [ ] Marked as SHOULD (user-decidable), not MUST — the user picks whether to apply

---

### Q5 — Joint justification

**Question:** How is the corrective's joint justification (spec accuracy + cost rationale) articulated?

**Verification criteria:**
- [ ] Spec-accuracy half: cites Q1's implicit-policy table + Story 1's contradiction
- [ ] Cost half: cites the navigation-session bloat multiplier + maps to Workspace-overload failure mode
- [ ] Linkage statement: CONCLUDE's self-sufficiency design exists PRECISELY because of the cost; the design intent and the cost are mechanistically linked, not separate axes
- [ ] Prose is integrated, not bullet-list

---

### Q6 — Pattern-attribution tone

**Question:** How should the corrective acknowledge that Story 1 was authored in this session by the agent, without over-apologizing?

**Verification criteria:**
- [ ] Substantive acknowledgment: names the over-claim's origin (this session's agent authoring)
- [ ] Pattern connection: connects to the 15-48 Q7 frontier as evidence for the systematic-narrowing pattern (second observed instance)
- [ ] Tone: pattern-attribution as evidence, not apology; substance over sycophancy
- [ ] Concise: 2-3 sentences max

---

### Q7 — Frontier-update text

**Question:** How should the finding's Open Questions / Research Frontiers section record this inquiry's second-instance observation without re-litigating the 15-48 Q7 verdict?

**Verification criteria:**
- [ ] Names the wider question (does the agent's mental model systematically narrow routeman?)
- [ ] Records the second observed instance (Story 1 docarchive over-claim)
- [ ] Scope disclaimer: still flagged, not resolved; this finding strengthens the supporting evidence base but doesn't pre-commit to the wider verdict
- [ ] Links to the 15-48 Q7 frontier explicitly (cross-reference to the prior finding)

---

### Q8 — Finding assembly

**Question:** How is the finding assembled per the CONCLUDE template?

**Verification criteria:**
- [ ] Standard CONCLUDE sections present (Title / Frontmatter / Question / Finding Summary / Finding body / Next Actions / Reasoning / Open Questions / Source Input)
- [ ] No Inherited Commitments Re-test section (diagnostic inquiry; no Synthesis Trigger)
- [ ] Q1's implicit-policy table preserved as a structural commitment
- [ ] Q3's Story 1 corrective in Next Actions MUST
- [ ] Q4's spec amendment in Next Actions COULD (user-decidable)
- [ ] Q5's joint justification in Reasoning
- [ ] Q6's tonal acknowledgment integrated into the Finding body's prose
- [ ] Q7's frontier-update in Open Questions / Research Frontiers
- [ ] Frontmatter has `refines:` linkage to the 15-48 finding if the wider Q7 frontier is materially advanced; otherwise omit

---

## Step 5 — Interface Map

| Source | Target | What flows | Direction | Type |
|---|---|---|---|---|
| Q1 | Q2 | Implicit-policy table provides the frame for per-OT verdicts | One-way | Structural lemma → applied verdict |
| Q1 | Q3 | Implicit policy provides the basis for the Story 1 corrective | One-way | Structural lemma → applied corrective |
| Q1 | Q4 | Implicit policy IS the spec amendment's content | One-way (identity) | Structural lemma → explicit spec text |
| Q2 | Q3 | OT1 verdict (Story 1 over-claimed) is the corrective's necessity-claim | One-way | Verdict → corrective |
| Q2 | Q4 | OT2 + OT4 verdicts justify the spec amendment | One-way | Verdict → amendment rationale |
| Q2 | Q5 | Verdicts ARE the joint justification's content | One-way | Verdict → justification prose |
| Q2 | Q6 | OT1 over-claim verdict is the tonal acknowledgment's subject | One-way | Verdict → tonal subject |
| Q2 | Q7 | OT1 over-claim verdict is the second-instance evidence for Q7 | One-way | Verdict → frontier observation |
| Q3 | Q8 | Story 1 corrective lands in Next Actions MUST | One-way | Content → assembly slot |
| Q4 | Q8 | Spec amendment lands in Next Actions COULD | One-way | Content → assembly slot |
| Q5 | Q8 | Joint justification lands in Reasoning | One-way | Content → assembly slot |
| Q6 | Q8 | Tonal acknowledgment permeates Finding body prose | One-way | Content → assembly prose |
| Q7 | Q8 | Frontier-update lands in Open Questions / Research Frontiers | One-way | Content → assembly slot |
| Q6 | Q7 | Tone (acknowledging this session's over-claim) and frontier-update (second-instance evidence) share the observation | Bidirectional (light) | Two facets of same observation |

### Assumptions-not-data check

- Q1 → Q2: Q2 assumes the implicit-policy table is stable + load-bearing. STATED.
- Q1 → Q3: Q3 assumes Story 1 corrective must respect the table. STATED.
- Q1 → Q4: Q4 assumes the spec amendment encodes the table EXPLICITLY (no new policy axes added). STATED.
- Q2 → Q3: Q3 assumes the over-claim verdict is settled; not re-litigated. STATED.
- Q3 → Q8: Q8 assumes the Story 1 corrective is a Next Action MUST (not OPTIONAL). STATED.
- Q4 → Q8: Q8 assumes the spec amendment is a Next Action COULD (user-decidable). STATED.
- Q6 → Q7: Q7's frontier-update assumes the tone is already established by Q6; the frontier section doesn't re-explain the pattern. STATED.

No hidden assumptions; all explicit.

---

## Step 6 — Dependency Order

```
                Q1 (foundational)
              /  |  \
             /   |   \
            v    v    v
           Q2  (depends on Q1)
          /| \ \
         / |  \ \
        /  |   \ \
       v   v    v v
      Q3  Q4  Q5  Q6 + Q7 (paired)
       |   |   |    |
       v   v   v    v
        \  |  /     /
         \ | /     /
          v v     v
            Q8 (assembly)
```

### Dependency levels

- **Level 1:** Q1 — foundational; no predecessors.
- **Level 2:** Q2 — depends on Q1.
- **Level 3 (parallel):** Q3, Q4, Q5, Q6, Q7 — each depends on Q2 (and Q1 transitively).
  - Q3 + Q4 are PARALLEL corrective outputs.
  - Q5 + Q6 are PARALLEL prose/tone components.
  - Q7 has a soft dependency on Q6 (frontier-update assumes tone established); manageable via parallel-but-Q6-completes-first.
- **Level 4:** Q8 — assembly; depends on all.

### Parallelism

- Q3 + Q4 + Q5 + Q6 can run in parallel after Q2.
- Q7 can run after Q6 (soft dependency) or in parallel with Q6 if Q6's tonal framing is passed as a stated input.

### No circular dependencies

DAG. Q8 collects; no upstream depends on Q8.

---

## Step 7 — Self-Evaluation

### Minimum 3 dimensions

| Dimension | Check | Result |
|---|---|---|
| **Independence** | Can each piece be worked on without the others existing? | PASS. Q1 stands alone (foundational structural claim). Q2 needs Q1 but doesn't need Q3-Q7. Q3 and Q4 are parallel corrective outputs; independent of each other. Q5, Q6, Q7 each depend on Q2 but are mutually independent (with Q6→Q7 soft coupling manageable). Q8 assembles. Within defined interface dependencies, each is independently workable. |
| **Completeness** | Do the pieces cover the whole? | PASS. The two-layer corrective + the justification + the tonal + the frontier-update + the assembly = the full deliverable. Q1 (structural claim) + Q2 (verdicts) + Q3 (Story 1) + Q4 (spec) + Q5 (joint why) + Q6 (tone) + Q7 (frontier) + Q8 (assembly). No aspect falls through gaps. |
| **Reassembly** | Can the pieces + interfaces reconstruct the whole? | PASS. All 8 Qs answered + all interfaces satisfied → the inquiry's deliverable (implicit-policy table + per-OT verdicts + two-layer corrective + joint justification + tonal acknowledgment + frontier-update, assembled into finding.md) is fully reconstructed. |

### Full 7-dimension check

| Dimension | Result |
|---|---|
| Independence | PASS |
| Completeness | PASS |
| Reassembly | PASS |
| **Tractability** | PASS. Each Q is small enough for Innovation's single focused pass. Q1 is a 4-row table; Q2 is a 4-verdict block; Q3 is 2 candidate texts + recommendation; Q4 is a ~15-line spec sub-section draft; Q5 is a paragraph; Q6 is 2-3 sentences; Q7 is a frontier-section entry; Q8 is the finding template fill. |
| **Interface clarity** | PASS. All cross-piece interfaces explicit (Step 5 table); assumptions-not-data check passes (no hidden assumptions). |
| **Balance** | PASS with note. Q1 + Q4 carry slightly more structural-text weight than the lighter pieces; Q4 in particular is a meaningful spec edit. Imbalance is intrinsic to the deliverable shape (spec amendments are heavier than tonal touches). No single piece dominates. |
| **Confidence** | PASS. Top-down + bottom-up agree on B1, B2, B4 at HIGH confidence; B3 at MEDIUM-HIGH (Q6/Q7 partition justified but could merge). |

### Determination-mechanism piece check

Does the Q-tree include a load-bearing concept whose use depends on a runtime determination? Candidate: Q3's Story 1 corrective has two candidate shapes (drop vs re-tier); the choice between them is a design decision made at Innovation time, not at runtime. NOT a runtime determination. Q4's spec amendment is user-decidable but the decision is at finding-publication time, not runtime. No missing determination-mechanism piece. PASS.

### Failure modes check

- **Premature decomposition:** Sensemaking SV6 clarified the whole before this. PASS.
- **Wrong boundaries:** Bottom-up agreed with top-down on all 4 boundaries. PASS.
- **Hidden coupling:** Assumptions-not-data check ran; no hidden assumptions. PASS.
- **Missing pieces:** Reassembly check ran; determination-mechanism check ran; nothing missing. PASS.
- **Over-decomposition:** 8 pieces for a two-layer corrective is moderate. Could Q6 + Q7 merge into one piece? Yes — they share the observation. But the partition is justified by artifact location (tone in prose; frontier in structured section) and enables Innovation to refine the tone separately. PASS with note (partition is judgment-call; merge is acceptable alternative).
- **Ignoring dependencies:** Dependency order explicit; no circular. PASS.
- **Imbalanced decomposition:** Q1 + Q4 carry more weight; intrinsic to deliverable. PASS.

---

## Final Deliverable

### Coupling map (summary)

Six clusters identified — ALPHA (foundational), BETA (diagnostic application; 3 sub-pieces: verdict + Story 1 + spec amendment), GAMMA (justification), DELTA-EPSILON (pattern observation; 2 sub-pieces: tone + frontier), ZETA (assembly). Four major boundaries; all at LOW coupling regions.

### Question tree (summary)

| # | Piece | Question | Cluster |
|---|---|---|---|
| Q1 | Implicit-policy table | What does the spec implicitly say about generic-mode reads? | ALPHA |
| Q2 | Per-OT verdict | What is the verdict per observation target? | BETA |
| Q3 | Story 1 corrective | How is Story 1's input list corrected? | BETA |
| Q4 | Spec amendment | How is §3.2 amended to close the gap? | BETA |
| Q5 | Joint justification | How are spec-accuracy + cost articulated together? | GAMMA |
| Q6 | Pattern-attribution tone | How is the over-claim's origin acknowledged? | DELTA-EPSILON |
| Q7 | Frontier-update text | How is the 15-48 Q7 second-instance recorded? | DELTA-EPSILON |
| Q8 | Finding assembly | How is the finding assembled per CONCLUDE? | ZETA |

### Interface map (summary)

14 interfaces; 13 one-way + 1 bidirectional (light Q6↔Q7). No hidden assumptions.

### Dependency order (summary)

- Level 1: Q1
- Level 2: Q2
- Level 3 parallel: Q3, Q4, Q5, Q6, Q7 (Q7 soft-after Q6)
- Level 4: Q8

### Self-evaluation (summary)

7/7 dimensions PASS. All 7 failure modes PASS. Determination-mechanism check PASS. Boundaries at HIGH confidence (3 of 4) + MEDIUM-HIGH (1 of 4).

---

## Frontier flags routed to Innovation

- **FF-D1** — Q3 has TWO candidate shapes (drop vs re-tier). Innovation generates both with concrete text and recommends one.
- **FF-D2** — Q4's spec amendment text follows the 14-49 sub-section pattern. Innovation drafts the precise §3.2.6 (or similar) sub-section text with 4 file-rows.
- **FF-D3** — Q5's joint justification should integrate spec-accuracy + cost as a single prose argument, not two separate bullets. Innovation calibrates the prose.
- **FF-D4** — Q6's tonal calibration: substantive, not sycophantic. Apply the lesson from the prior inquiry's Q5 (substance over apology).
- **FF-D5** — Q7's frontier-update text must firmly scope-disclaim ("strengthens evidence; does not resolve the wider Q7 verdict") to avoid the partial-diagnosis trap.

---

## Structural check (manual)

- Required sections present: ✓ Coupling map; ✓ Question tree; ✓ Interface map; ✓ Dependency order; ✓ Self-evaluation
- Steps 1-7 executed in sequence: ✓
- Bottom-up validation performed: ✓
- Interfaces explicit + assumptions checked: ✓
- Failure modes checked: ✓ all 7
- Determination-mechanism check: ✓
- No `[FAIL]` lines.

PROCEED to Innovation.
