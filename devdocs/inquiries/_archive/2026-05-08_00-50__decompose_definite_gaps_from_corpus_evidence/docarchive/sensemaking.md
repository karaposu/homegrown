# Sensemaking: Decompose Discipline - Definite Gaps From Corpus Evidence

## SV1 — Baseline Understanding

The exploration converged on ONE for-sure-missing rule: a **Determination-Mechanism Piece Inclusion Check at Step 7 / Self-Evaluate (Reassembly dimension)**. Single-chain primary-cause evidence (chain 6 / T2) with explicit before/after contrast passes the for-sure criterion. Speculative additions and propagation-only hypotheses (chains 1 + 2) explicitly rejected per chain findings. Sensemaking-side patches (M1, N2) handle the propagation cases; only T2 is primary-cause Decomposition.

## Phase 1 — Cognitive Anchor Extraction

### Constraints

1. **For-sure criterion** — Rule must have failure-of-absence + success-of-presence evidence. T2 has chain-6 primary-cause + explicit before/after contrast. Single-chain primary-cause + before/after contrast satisfies the criterion (per the prior `2026-05-07_20-35` resolution).
2. **Generic / meta-discipline language** using existing `decompose.md` vocabulary (coupling map / boundaries / pieces / question tree / interfaces / dependency order / self-evaluation dimensions / failure modes).
3. **Placement convention from `enes/discipline_rule_placement.md`** — step-level scope → canonical home is the process-model step at which the rule fires.
4. **Don't embed the convention itself** in `decompose.md` (per `2026-05-07_23-27` decision).
5. **Apply non-ambiguity check** — references to discipline-internal concepts get parenthetical context on first use in the resulting finding.
6. **Reject speculative additions and propagation-only hypotheses** — chains 1 + 2 explicitly say their Decomposition propagation hypotheses do NOT need independent candidates (covered by upstream Sensemaking patches).

### Key Insights

1. **Decomposition is the LEAST-implicated discipline across the corpus.** Only 1 of 7 chains has primary-cause Decomposition findings (chain 6). 2 of 7 have propagation-only hypotheses (chains 1, 2) explicitly rejected as separate candidates. 4 of 7 don't implicate Decomposition. This is the smallest gap-inventory of any thinking discipline analyzed so far (explore.md = 2 rules; sensemaking.md = 2 rules; decompose.md = 1 rule).

2. **Decomposition is downstream of Sensemaking; most cascades flow through it.** The corpus pattern: Sensemaking stabilizes a load-bearing concept incorrectly → Decomposition's Q-tree presupposes the failure → Innovation's candidate set is bounded by the Q-tree → Critique evaluates within bounded candidates. The corrective surface for inherited failures is at Sensemaking, not at Decomposition. Chains 1 + 2 are exactly this pattern.

3. **Chain 6's T2 is structurally distinct from propagation cases.** T2 is a Decomposition-side primary-cause failure: the Reassembly self-evaluation check did NOT flag the missing discovery-mechanism piece even though it was the right surface to catch the gap. The check exists in `decompose.md` (Step 7 / Self-Evaluate / Reassembly dimension), but its current shape is general ("Can the pieces + interfaces reconstruct the whole?"). T2 sharpens it with a specific check for runtime-determined load-bearing concepts.

4. **The single-chain caveat applies but doesn't disqualify.** P11 family (Decomposition completeness) is at 1 chain. Per the for-sure criterion, single-chain primary-cause with explicit before/after contrast passes. Cross-chain reinforcement would be stronger but isn't required.

5. **The placement is unambiguous.** T2 fires at Step 7 / Self-Evaluate's Reassembly dimension (where the check happens). Canonical home: Step 7 / Self-Evaluate. Cross-reference: at Missing Pieces failure mode (the failure the rule prevents). Both are observable in the existing `decompose.md` structure.

### Structural Points

1. **One-rule consolidation:** T2 (chain 6 primary-cause; single-chain).

2. **The rule's structure:**
   - Trigger: the Q-tree (question tree) includes a load-bearing concept whose use depends on a runtime determination (e.g., "does X exist?", "is X applicable?").
   - Action: Reassembly self-evaluation check verifies the Q-tree includes a piece addressing the determination mechanism.
   - Failure when violated: Missing Pieces (existing failure mode #4 in `decompose.md`).

3. **Placement per the convention:**
   - Step-level scope at Step 7 / Self-Evaluate.
   - Canonical home: Step 7 / Self-Evaluate, after the minimum-3-dimension table and before the full-7-dimension table.
   - Cross-reference: at Missing Pieces failure mode's "How to prevent" line.

4. **Sub-aspect handling:** T2's runtime-determination concept covers a specific class of completeness failure. The rule names it explicitly without locking the Reassembly dimension to only this case. Other Reassembly failures still qualify as Missing Pieces but don't trigger T2 specifically.

### Foundational Principles

1. **Sparse corpus evidence is still corpus evidence.** Decomposition's 1-rule inventory reflects the discipline's downstream position in the cascade structure, not a methodological weakness in the for-sure criterion. The same methodology produces 2 rules for explore.md, 2 for sensemaking.md, 1 for decompose.md — this is correct.

2. **Propagation hypotheses don't generate per-stage candidates.** Chains 1 + 2 explicitly rejected adding Decomposition candidates for their propagation hypotheses. Honoring this rejection is a methodology consistency requirement.

3. **Single-chain primary-cause + before/after contrast satisfies the for-sure criterion.** Established in the prior `2026-05-07_20-35` finding for explore.md's Rule 2 (chain 2 N1, single-chain). The same standard applies here.

4. **The discipline spec stays pure.** No embedded placement convention; only runtime-relevant rules.

### Meaning-Nodes

1. **Load-bearing concept whose use depends on a runtime determination** — the central trigger predicate. Inherited from chain 6's T1 + T2.
2. **Determination mechanism** — the specific piece that should exist in the Q-tree to address HOW the runtime check is performed.
3. **Reassembly self-evaluation** — the dimension at Step 7 where the check fires.
4. **Missing Pieces** — the failure mode the rule prevents.
5. **Cross-reference (one-line pointer)** — placement convention's shape for non-canonical surfaces.

## SV2 — Anchor-Informed Understanding

Anchor extraction confirms: ONE consolidated rule. T2's chain-6 wording is mostly generic; small adjustments produce the final wording. Placement at Step 7 / Self-Evaluate / Reassembly + cross-reference at Missing Pieces. Speculative additions and propagation cases filtered.

The shift from SV1: rule structure is anchored, placement is specified, speculative-filter rationale is grounded in chain findings.

## Phase 2 — Perspective Checking

### Technical / Logical Perspective

The rule is mechanically applicable: the runner at Step 7 checks if the Q-tree contains a load-bearing concept whose use depends on a runtime determination; if yes, the runner verifies a determination-mechanism piece exists; if no such piece exists, Reassembly fails. Deterministic.

NEW ANCHOR: The trigger predicate ("load-bearing concept whose use depends on a runtime determination") is observable in the Q-tree. The runner can scan pieces for runtime-check phrasings ("does X exist?", "is X applicable?", "is X discoverable?") and verify a determination-mechanism piece exists.

### Human / User Perspective

The user's "for sure" criterion is satisfied: chain 6 evidence is concrete (the prior loop's Q-tree didn't address discovery; the corrected loop's Q-tree did). The user's purity preference is satisfied: the rule sits in the spec's runtime-relevant Step 7 surface; no embedded meta-content.

NEW ANCHOR: The rule's narrow scope (only fires for runtime-determined load-bearing concepts) prevents over-firing on Q-trees that don't have such concepts.

### Strategic / Long-term Perspective

Long-term: the rule prevents recurrence of chain 6's specific failure pattern (Q-tree presupposes a determination has been made without including a piece addressing HOW the determination is made). Future MVL+ runs producing Q-trees with runtime-determined load-bearing concepts will catch the gap at Step 7.

NEW ANCHOR: One rule is the right size for Decomposition's downstream position. Adding more rules speculatively would over-protect a discipline whose failures are mostly inherited from upstream.

### Risk / Failure Perspective

Risks:
- **Over-firing:** Q-trees where the runtime determination doesn't exist as a piece-relevant concern. Mitigated by the "load-bearing" qualifier (only fires when the concept is referenced in pieces).
- **Single-chain evidence:** P11 family at 1 chain. Future chains may surface more instances OR may surface a different Decomposition failure pattern that requires a separate rule. Per chain 6's caveat: "revival trigger if not effective in 3 runs OR if next LOOP_DIAGNOSE shows another P11 instance."

NEW ANCHOR: Single-chain caveat documented; revival trigger preserves the option to refine.

### Resource / Feasibility Perspective

Implementation cost:
- ~6-10 lines added to `decompose.md` (rule paragraph at Step 7 / Self-Evaluate + one-line cross-reference at Missing Pieces).
- Far smaller than the explore.md (2 rules) or sensemaking.md (2 rules with sub-aspects) additions.

NEW ANCHOR: Smallest implementation cost of any thinking-discipline-spec analysis so far. Proportional to the corpus evidence (1 chain).

### Definitional / Consistency Perspective

Consistency check against existing `decompose.md`:
- Step 7 / Self-Evaluate has minimum-3-dimension table (Independence, Completeness, Reassembly) + full-7-dimension table. Adding a follow-on paragraph between them refines the Reassembly dimension without contradicting it.
- Missing Pieces failure mode (#4) currently says "How to prevent: Completeness check in self-evaluation (Step 7)." Adding a one-line cross-reference for the new T2-class refinement composes naturally.
- The rule extends, doesn't replace, the existing structure.

CHECK: does the rule contradict the existing Step 7 description? No — Step 7 stays general; the rule adds a specific check for runtime-determined load-bearing concepts within the Reassembly dimension.

CHECK: does the rule contradict Missing Pieces? No — Missing Pieces stays the failure mode; the rule's failure-of-violation is an instance of Missing Pieces.

NEW ANCHOR: Rule is an extension, not a replacement. Existing structure preserved.

## SV3 — Multi-Perspective Understanding

Six perspectives reveal:
- **Logical/Technical** confirms the rule is deterministic.
- **Human/User** confirms the rule satisfies for-sure + purity.
- **Strategic** confirms one rule is the right size for Decomposition's downstream position.
- **Risk/Failure** flags single-chain caveat; mitigated by revival trigger.
- **Resource/Feasibility** confirms smallest cost so far (~6-10 lines).
- **Definitional/Consistency** confirms extension-not-replacement.

The shift from SV2: stress-tested across all perspectives. Placement, cost, consistency, and risk-management validated.

## Phase 3 — Ambiguity Collapse

### Ambiguity 1: Sub-option A (extend Reassembly table cell) vs Sub-option B (follow-on paragraph after the minimum-3-dimension table)?

**Strongest counter-interpretation (Sub-option A):** extend the Reassembly row in the minimum-3-dimension table's "Pass if" cell. Keeps the rule co-located with the dimension it refines.

**Why the counter-interpretation fails (structural grounds):** the Reassembly row's "Pass if" cell currently contains a single sentence ("Given all pieces answered + all interfaces satisfied → the original problem is solved"). Adding T2's content (~6 lines including the trigger predicate, action, and failure-mode tie) bloats the table cell to where it no longer fits the table format. Tables are for compact summaries; multi-paragraph rules don't fit.

**Confidence:** HIGH (table format constraint is mechanical).

**Resolution:** Sub-option B — add T2 as a follow-on paragraph after the minimum-3-dimension table and before the full-7-dimension table. The paragraph elaborates Reassembly for the runtime-determined-concept case without bloating the table.

### Ambiguity 2: Should the rule reference Missing Pieces (failure mode #4) inline, or only via the cross-reference?

**Strongest counter-interpretation:** rules should be self-contained; failure-mode references add redundancy.

**Why the counter-interpretation fails:** the rule's failure-mode tie is content (it tells the runner what kind of failure they're preventing). The cross-reference at Missing Pieces is navigation (it tells a reader at the failure mode where to find the rule). They serve different purposes; both should exist.

**Confidence:** HIGH (matches the sensemaking.md sister analysis's resolution).

**Resolution:** rule wording mentions Missing Pieces inline as the failure-mode-it-prevents reference. Cross-reference at Missing Pieces is the separate one-line navigation pointer.

### Ambiguity 3: Single-chain caveat — should the rule explicitly include a revival trigger in its `decompose.md` wording, or document the trigger only in this finding?

**Strongest counter-interpretation:** include the revival trigger in the spec wording so future contributors see it.

**Why the counter-interpretation fails:** revival triggers are maintenance-time concerns (when to re-evaluate / revise the rule). Per the prior `2026-05-07_23-27` decision, maintenance-time concerns live OUTSIDE the runtime-loaded artifact. The revival trigger goes in this finding's documentation, not in `decompose.md`.

**Confidence:** HIGH (consistent with discipline-spec purity principle).

**Resolution:** the rule's `decompose.md` wording is the runtime-relevant content. The single-chain caveat + revival trigger is documented in this finding's Refinement Triggers section, not in `decompose.md`.

## SV4 — Clarified Understanding

After ambiguity collapse:
- Rule placement: Sub-option B (follow-on paragraph after minimum-3-dimension table).
- Failure-mode tie: inline in rule wording (Missing Pieces) + separate one-line cross-reference at Missing Pieces.
- Revival trigger: documented in this finding (not in `decompose.md`).

## Phase 4 — Degrees-of-Freedom Reduction

### Fixed

1. ONE for-sure-missing rule (no more, no fewer).
2. Canonical home: Step 7 / Self-Evaluate, follow-on paragraph after minimum-3-dimension table.
3. Cross-reference: at Missing Pieces failure mode (#4).
4. Failure-mode tie inline in rule wording.
5. Revival trigger documented in this finding only.
6. No embedded placement convention.

### Eliminated

1. Sub-option A (extend table cell) — table format constraint.
2. Propagation-only hypotheses as separate candidates — chain findings explicitly reject.
3. Other speculative Decomposition additions — no primary-cause evidence.
4. Embedding the placement convention.

### Remaining

1. Concrete wording for the rule.
2. Concrete cross-reference text at Missing Pieces.

## SV5 — Constrained Understanding

The constrained answer:

- **Rule** = Determination-Mechanism Piece Inclusion Check at Step 7 / Self-Evaluate's Reassembly dimension. Canonical home: follow-on paragraph after the minimum-3-dimension table. Cross-reference: at Missing Pieces failure mode.

- **Innovation's job:** generate concrete wording for the rule + the cross-reference.

- **Critique's job:** verify against for-sure criterion + corpus evidence; verify generic phrasing; verify placement convention applied; verify spec stays pure; verify single-chain caveat documented in this finding (not in `decompose.md`).

## Phase 5 — Conceptual Stabilization

### Stable Model

```
For-sure missing from homegrown/decompose/references/decompose.md
(the Structural Decomposition discipline spec; loaded by the MVL+ runner during
Decomposition execution): ONE rule.

RULE — Determination-Mechanism Piece Inclusion Check at Step 7 / Self-Evaluate
       (Reassembly dimension)
  Where: Step 7 / Self-Evaluate, follow-on paragraph after the minimum-3-dimension
         table and before the full-7-dimension table
  Trigger: the Q-tree (question tree) includes a load-bearing concept whose use
           depends on a runtime determination — i.e., the concept is referenced
           in one or more pieces, but its applicability is determined at runtime
           by checking "does X exist?", "is X applicable?", or similar
  Action: Reassembly self-evaluation check verifies that the Q-tree includes a
          piece addressing the determination mechanism (HOW the runtime check
          is performed). A Q-tree that presupposes the determination without
          including a piece addressing HOW it is made fails Reassembly:
          reconstructing the whole requires the determination, but no piece
          provides it.
  Failure mode it prevents: Missing Pieces (failure mode #4).
  Evidence: chain 6 (T2) primary cause with explicit before/after contrast.
            Single-chain primary-cause + before/after contrast — passes for-sure
            criterion. P11 family at 1 chain.
  Cross-reference: at Missing Pieces failure mode (one line).
```

### Action Framework

```
Decomposition: partition into pieces (Rule core + cross-reference + verification +
               speculative-filter documentation).

Innovation: generate concrete wording per piece.

Critique: verify against for-sure criterion + corpus evidence; verify generic
          phrasing; verify placement convention applied; verify spec stays pure;
          verify single-chain caveat documented in this finding only (not in
          decompose.md).
```

## SV6 — Stabilized Model

The Structural Decomposition discipline spec at `homegrown/decompose/references/decompose.md` (the spec loaded by the MVL+ runner during Decomposition execution) has ONE for-sure-missing rule per the corpus evidence from the 7 LOOP_DIAGNOSE chain findings: a **Determination-Mechanism Piece Inclusion Check at Step 7 / Self-Evaluate (Reassembly dimension)**.

The rule says: when the Q-tree includes a load-bearing concept whose use depends on a runtime determination (e.g., "does X exist?", "is X applicable?"), the Reassembly self-evaluation check verifies that the Q-tree includes a piece addressing the determination mechanism (HOW the runtime check is performed). A Q-tree that presupposes the determination has been made — without including a piece addressing HOW it is made — fails Reassembly: reconstructing the whole requires the determination, but no piece provides it. Failing this check is an instance of Missing Pieces (failure mode #4).

Evidence: chain 6's T2 (primary cause; single-chain with explicit before/after contrast). The corrected loop's Decomposition explicitly addressed index storage / schema / update ownership / validation; discovery mechanism became a first-class question. The prior loop's Decomposition Q-tree did not include such a piece, and the Reassembly self-evaluation check did not flag the missing piece.

Placement per the convention at `/Users/ns/Desktop/projects/native/enes/discipline_rule_placement.md`: step-level scope → canonical home is Step 7 / Self-Evaluate. The rule sits as a follow-on paragraph after the minimum-3-dimension table and before the full-7-dimension table (Sub-option B per Sensemaking Ambiguity 1). Cross-reference (one-line pointer) at Missing Pieces failure mode.

Speculative additions and propagation-only hypotheses (chains 1 + 2) explicitly REJECTED — chain findings 1 + 2 state the propagation hypotheses do NOT need independent Decomposition candidates because the upstream Sensemaking patches (M1, N2) prevent the cascade.

The single-chain caveat (P11 family at 1 chain) is documented in this finding's Refinement Triggers section, not in `decompose.md` — discipline-spec purity preserved per the prior `2026-05-07_23-27` decision. Revival trigger: revisit if not effective in 3 runs OR if next LOOP_DIAGNOSE shows another P11 instance.

The shift from SV1: rule placement is anchored, single-chain caveat handling is decided (in finding only, not in spec), and the discipline-spec-purity constraint is honored. The result is small (~6-10 lines added to `decompose.md`), evidence-rich, generic, and actionable.
