# Decomposition: protocol_human_analog_accuracy

## User Input
devdocs/inquiries/protocol_human_analog_accuracy/_branch.md

Decompose the user's actual decisions/actions following from sensemaking's two-level verdict (functional analog = autonomic between-operations machinery; implementation analog = external cognition; both accurate at different levels).

---

## The Whole Being Decomposed

After sensemaking, the user faces five questions/actions that derive from the verdict:

- Whether to accept the two-level verdict at all (gate)
- How to revise the prior `thinking_disciplines/protocols/what_is_protocol.md` doc (which called external cognition "the cleanest analog" — implementation-honest but functionally misleading)
- What to do with the substrate-evolution open question surfaced by sensemaking (will protocols internalize if substrate evolves?)
- Whether the verdict implies design changes for the protocols dimension (specifically: does it change anything about the protocol-build sequencing recommended in the prior `protocols_relevance_check` finding?)
- Whether other docs touching the same conceptual ground (`protocols/desc.md`, `loop_design_1.md`, etc.) should be updated to reference the substrate-honest two-level framing

---

## Step 1 — Coupling Topology

### Atomic decisions/actions

| Atom | Description |
|---|---|
| a1 | Accept / reject / refine the two-level verdict |
| a2 | Decide scope of revision for `what_is_protocol.md` (targeted line edit / section addition / full rewrite) |
| a3 | Apply the chosen revision to `what_is_protocol.md` |
| a4 | Decide disposition of substrate-evolution open question (Open Question in finding / separate follow-up inquiry / de-prioritize) |
| a5 | Decide whether the verdict implies design changes for protocols specifically (e.g., changes to `protocols_relevance_check`'s Configuration β recommendation) |
| a6 | Decide whether other docs (`protocols/desc.md`, `loop_design_1.md`, possibly `enes/desc.md`) need updating to reference the substrate-honest framing |

### Coupling graph

For each pair, "if I change A, does B need to change?":

- **a1** is a gate. If the user rejects the verdict, a2-a6 don't apply (sensemaking would need another iteration). Strong coupling: a1 → everything.
- **a2 + a3** edit the same artifact (`what_is_protocol.md`); a3 is the execution of a2's decision. Strong coupling within the pair.
- **a4** is conceptually independent of a2/a3 — it's about WHERE the open question lives, not about the doc's content. Loose coupling.
- **a5** is conceptually independent of a2/a3/a4 — it's a yes/no question about design impact, separate from doc maintenance. Loose coupling.
- **a6** edits other artifacts (different files); flows partly from a2/a3 (a revised `what_is_protocol.md` becomes referencable from other docs) and partly from a5 (if design changes, other docs may need updating). Loose coupling to several.

### Coupling map

```
                          ┌─────────────────────┐
                          │ a1: VERDICT GATE    │
                          │ accept / reject /   │
                          │ refine              │
                          └──────────┬──────────┘
                                     │ (gates everything)
                ┌────────────────────┼─────────────────────┬────────────────────┐
                │                    │                     │                    │
        ┌───────┴───────┐    ┌───────┴────────┐    ┌──────┴───────┐    ┌────────┴────────┐
        │ what_is_       │    │ Open question  │    │ Design       │    │ Cross-doc       │
        │ protocol.md    │    │ disposition    │    │ implications │    │ updates         │
        │ revision       │    │ (a4)           │    │ (a5)         │    │ (a6)            │
        │ (a2 + a3)      │    │ standalone     │    │ standalone   │    │                 │
        │ STRONG cluster │    │                │    │              │    │ Receives flows  │
        └───────┬────────┘    └───────┬────────┘    └──────┬───────┘    │ from a2, a4, a5 │
                │                     │                    │            └─────────────────┘
                │                     │                    │
                └─────────────────────┴────────────────────┴──────────────────►
                                  (all may inform cross-doc updates)
```

One gate, three independent pieces, one downstream piece that receives flows from the others.

---

## Step 2 — Boundary Detection (Top-Down)

Natural cut points based on coupling valleys:

- **Boundary 1:** Between a1 (verdict gate) and everything else. a1 is a precondition.
- **Boundary 2:** Between (a2+a3) — the artifact-specific revision — and a4/a5 — separate concerns. Different topics, no shared state.
- **Boundary 3:** Between a4 (open question disposition) and a5 (design impact). One is about a research-frontier question; the other is about whether the verdict touches code/architecture. Different concerns.
- **Boundary 4:** Between a6 (cross-doc updates) and everything else. Different artifacts; downstream of decisions made in a2/a4/a5.

Initial pieces:

- **P1 — Verdict acceptance** (a1)
- **P2 — `what_is_protocol.md` revision** (a2 + a3)
- **P3 — Substrate-evolution open question disposition** (a4)
- **P4 — Design implications for protocols** (a5)
- **P5 — Cross-doc updates** (a6)

---

## Step 3 — Boundary Validation (Bottom-Up Sanity Check)

Atoms re-grouped from the bottom up:

- a1 is a precondition gate — clearly its own piece. ✓ matches P1.
- a2 (scope) and a3 (apply) are sequentially coupled on the same file — together form one tractable unit. ✓ matches P2.
- a4 is about disposition of a single open question — small and standalone. ✓ matches P3.
- a5 is a yes/no decision with reasoning — small and standalone. ✓ matches P4.
- a6 is multiple per-doc edit decisions, each small but together forming a coherent piece (cross-doc consistency). ✓ matches P5.

Top-down and bottom-up agree on all 5 pieces. **High confidence on boundaries.**

---

## Step 4 — Question Tree

### P1 — Does the user accept the two-level verdict (functional analog = autonomic between-operations machinery; implementation analog = external cognition; both accurate at different levels)?

**Verification criteria:**
- [ ] User states accept / reject / refine
- [ ] If reject: identify which level's verdict is unacceptable; trigger another sensemaking iteration with the rejection reason as new seed
- [ ] If refine: identify what specifically needs adjustment; trigger another iteration
- [ ] If accept: P2-P5 proceed

### P2 — How should `thinking_disciplines/protocols/what_is_protocol.md` be revised to reflect the two-level verdict?

**Verification criteria:**
- [ ] Revision scope decided: targeted line edit / section addition / full rewrite
- [ ] Specific lines/sections to change identified
- [ ] Proposed new wording drafted (especially for the previously-misleading "cleanest analog: external cognition" line)
- [ ] Edit applied to the file

### P3 — How should the substrate-evolution open question (will protocols internalize if substrate evolves to support continuous internal state?) be handled?

**Verification criteria:**
- [ ] Disposition decided: Open Question in this finding's "Research Frontiers" subsection / spawn separate follow-up inquiry / de-prioritize without tracking
- [ ] If Open Question: revival trigger named (e.g., "if a substrate with persistent internal state ships and is adopted")
- [ ] If separate inquiry: brief stated; revival trigger named
- [ ] If de-prioritize: explicit reasoning

### P4 — Does the two-level verdict imply design changes for the protocols dimension specifically?

**Verification criteria:**
- [ ] Yes / No decision with reasoning
- [ ] Specifically: does the verdict change anything in the prior `protocols_relevance_check` finding's recommended Configuration β (status table updates + cross-references + autonomy-ladder mapping + VERSION deferral)?
- [ ] Specifically: does the verdict imply changes to the recommended build sequencing for the 6 missing protocols?
- [ ] If Yes: specific changes identified
- [ ] If No: explicit acknowledgment that the verdict is conceptual-only (the doc revision in P2 is the only concrete action)

### P5 — Should other docs touching the same conceptual ground be updated to reference or honor the substrate-honest two-level framing?

**Verification criteria:**
- [ ] Per-doc decision: `protocols/desc.md`, `loop_design_1.md`, possibly `enes/desc.md` — each gets a yes/no
- [ ] If yes for any: specific edit and proposed wording identified
- [ ] If no: explicit reasoning (e.g., the doc already encodes the substrate-honest position; no addition needed)
- [ ] Specifically: does the autonomy-ladder mapping section that `protocols_relevance_check` recommended adding to `protocols/desc.md` need a one-liner about substrate-forced externalization?

---

## Step 5 — Interface Map

| Source | Target | What flows | Direction |
|---|---|---|---|
| **P1** | P2, P3, P4, P5 | Verdict-acceptance gate. If rejected, downstream pieces don't run. | One-way (gate) |
| **P2** | P5 | Revised `what_is_protocol.md` becomes the canonical document the substrate-honest framing lives in. P5 may reference it from other docs. | One-way |
| **P3** | P5 | If the open question gets a finding home (this inquiry's finding) or a follow-up inquiry, that location may be referenced from other docs. | One-way, light |
| **P4** | P5 | If the verdict implies design changes (P4 = Yes), those changes likely manifest as cross-doc updates. If P4 = No, P5 has fewer reasons to fire. | One-way, conditional |
| **P2** | P3 | None | No flow |
| **P2** | P4 | None | No flow |
| **P3** | P4 | None | No flow |

### Hidden coupling check

- Does P2 share unstated assumptions with P5? P2 establishes the canonical wording; P5 may need to keep its references aligned with that wording. If P2's wording changes after P5 ships, P5's references could go stale. Surface: when applying P2's edit, fix the wording in a way that's reasonably stable; document the wording so P5 can quote it.
- Does P3 (substrate-evolution disposition) share unstated assumptions with P4 (design implications)? Possibly: if P3 chooses "spawn separate follow-up inquiry" then P4's "no design changes" answer might be conditional on the follow-up. Surface: P4 should answer "no design changes for current substrate, with substrate-evolution as caveat" rather than unconditional "no."
- Does P5 have hidden coupling to the prior `protocols_relevance_check` finding? Yes — `protocols_relevance_check` already recommended Configuration β edits to `protocols/desc.md`. If those edits are still pending (the user may not have applied them), P5's recommendations need to coordinate with that pending work, not edit independently.

---

## Step 6 — Dependency Order

```
   P1 ────► P2 ────────► P5
    │       
    ├────► P3 ─────────► (P5)
    │       
    └────► P4 ─────────► (P5)
```

- **P1 first.** Gate. ≤5 min user decision.
- **P2, P3, P4 in parallel** (after P1 accepts). They're independent of each other.
- **P5 last.** Receives flows from P2, P3, P4 and may need their outputs to know what to reference.

### Parallel-able

- P2, P3, P4 can be answered in parallel after P1 (no inter-dependencies).
- P5 cannot start until P2 (at least) is done.

### Critical path

P1 → P2 → P5. P3 and P4 are off the critical path (they inform P5 lightly but P5 can proceed with just P2's output if P3/P4 are deferred).

### If user wants minimum

If the user wants the absolute minimum, the path is: P1 (accept) → P2 (revise the doc) → done. P3, P4, P5 can all be deferred. The doc revision is the only "must" if the verdict is accepted; everything else is "could" or "consider."

---

## Step 7 — Self-Evaluation

### Minimum 3 dimensions (always)

| Dimension | Check | Verdict |
|---|---|---|
| **Independence** | Each piece answerable without reading sibling pieces (except via defined interfaces) | **PASS.** P1 answerable from sensemaking output. P2 answerable from `what_is_protocol.md` content + verdict. P3 answerable from disposition options. P4 answerable from `protocols_relevance_check` finding + verdict. P5 answerable per-doc with reference to revised `what_is_protocol.md`. |
| **Completeness** | Pieces cover the whole; nothing falls through gaps | **PASS.** The whole = "what does the user need to do given the verdict?" P1 (verdict acceptance), P2 (revise the doc that triggered the inquiry), P3 (substrate-evolution open question), P4 (design implications), P5 (cross-doc updates). All decisions covered. |
| **Reassembly** | Pieces + interfaces solve original problem | **PASS.** P1=Accept + P2=done + P3=disposition + P4=decision + P5=cross-doc edits done → user has clear verdict, revised primary doc, disposed open question, made design-impact decision, updated cross-references. The original question (which analog is fundamental + implications) is fully answered with concrete next steps. |

### Full 7 dimensions (worth checking)

| Dimension | Verdict | Notes |
|---|---|---|
| Independence | PASS | (above) |
| Completeness | PASS | (above) |
| Reassembly | PASS | (above) |
| **Tractability** | PASS | P1 ≤5 min; P2 small-medium (~10-30 min depending on scope); P3 ≤10 min; P4 ≤15 min; P5 small-medium (~10-30 min). Each fits one focused pass. |
| **Interface clarity** | PASS | All flows explicit (table above). Hidden-coupling check ran — surfaced two real items (wording-stability between P2 and P5; substrate-evolution caveat in P4) and made them explicit. |
| **Balance** | PASS | P2 is largest (artifact revision) but not dominant. P1, P3, P4 are small. P5 is medium. Roughly proportional; no 80/20 imbalance. |
| **Confidence** | HIGH | Top-down (5 clusters from coupling) and bottom-up (atoms grouping) agreed on all 5 pieces. |

All 7 dimensions PASS.

---

## Final Deliverable

### Coupling Map
1 gate (P1) + 3 independent post-gate pieces (P2, P3, P4) + 1 downstream piece (P5).

### Question Tree (5 pieces)

| # | Question | Type | Cost |
|---|---|---|---|
| **P1** | Accept / reject / refine the two-level verdict? | Gate | ≤5 min |
| **P2** | How should `what_is_protocol.md` be revised? | Doc maintenance | ~10-30 min |
| **P3** | Disposition of substrate-evolution open question? | Decision | ≤10 min |
| **P4** | Design implications for protocols? | Decision | ≤15 min |
| **P5** | Cross-doc updates needed? | Per-doc decisions | ~10-30 min |

### Interface Map
- P1 → all (gate)
- P2 → P5 (revised wording becomes referenceable)
- P3, P4 → P5 (light, conditional flows)

### Dependency Order
1. **P1 first** (gate)
2. **P2, P3, P4 in parallel** (after P1=Accept)
3. **P5 last** (after at least P2)

### Self-Evaluation
All 7 dimensions PASS. High confidence on partition.

### Notes for Innovation

- **P2 is the most concrete piece** — innovation should produce 3 variations of revision scope (targeted line edit / section addition / full rewrite) with proposed wording for each.
- **P3 and P4 are short decisions** — innovation can produce 2-3 disposition candidates each, with reasoning for which is the recommended default.
- **P5 needs per-doc treatment** — innovation should consider each candidate doc (`protocols/desc.md`, `loop_design_1.md`, possibly `enes/desc.md`) separately and recommend yes/no per doc.
- **P1 is binary** — innovation doesn't generate options for P1; the user just decides.
- **Coordination with prior `protocols_relevance_check` Configuration β:** P5's recommendation for `protocols/desc.md` should explicitly note whether it adds to or modifies Configuration β's pending edits, since the user may not have applied Configuration β yet.
