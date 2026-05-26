## User Input

(See `_branch.md` Source Input for the full verbatim user input.)

# Critique — File-System Protocol

Adversarial evaluation. Phases 0 → 4.

## Phase 0 — Dimension Construction

### Default dimensions (modified per problem)

| Dimension | Asks | Weight | Source |
|---|---|---|---|
| **D1 Correctness** | Does the protocol correctly specify the file-system contract? | **CRITICAL** | The protocol's primary deliverable |
| **D2 Coherence** | Does the design fit with architecture + inherited commitments (24-00 ROUTEMAN-OUTPUT; 16-31 isolated-session + file-scanning; 24-40 3-tier failure handling)? | **CRITICAL** | Sensemaking C1-C10; multiple inheritances |
| **D3 Feasibility at L0** | Can the design ship at L0 (no new infrastructure)? | HIGH | Sensemaking C3, FP2; FP4 |
| **D4 Completeness** | Are all 7 sub-aspects (SP1-SP7) + all 5 FFs from 16-31 covered? | HIGH | _branch.md observation targets + FF coverage |
| **D5 Robustness** | Does the design survive edge cases (worker crashes; malformed content; concurrent writes; multi-head)? | HIGH | Sensemaking R1-R5 + FP3 idempotent reads + atomic writes |
| **D6 Elegance** | Is the design the simplest sufficient solution? Over-engineering at L0 is a defect. | MEDIUM | Sensemaking FP1 |

### Project-specific risk dimensions

| Dimension | Asks | Weight |
|---|---|---|
| **D7 Inheritance integrity** | Does the design honor 24-00's ROUTEMAN-OUTPUT commitments verbatim (no re-litigation)? | **CRITICAL** |
| **D8 Architecture compliance** | Does the design preserve 16-31's isolated-session + file-scanning? No in-context passing? | **CRITICAL** |
| **D9 Consumer compatibility** | Does the design support the audit's (06-00) per-mode dispatch reads? Persistence model's (24-00) write patterns? | HIGH |
| **D10 Multi-head accommodation** | Does the design preclude or enable multi-head at L4+? | HIGH |
| **D11 Phase-fit at L0** | Does the design work at L0 with L2+ extension hooks documented? | HIGH |
| **D12 Document-over-design ratio** | Does the design correctly distinguish documentation of existing conventions from novel commitments? | MEDIUM |

### Burden of proof

Stakes: MEDIUM-HIGH (the protocol ships as foundational infrastructure; affects every routeman invocation + every worker pipeline + every runner). Burden of proof: assembly must demonstrate viability on D1, D2, D7, D8 (CRITICAL); REFINE if non-critical dimensions fail; KILL only on CRITICAL failure with no mitigation.

## Phase 1 — Landscape Construction

### Viable region

A design is viable when: D1 correct + D2 coherent + D7 inheritance honored + D8 architecture preserved. Viable region = "designs that formalize the WORKER-WRITE side, inherit ROUTEMAN-OUTPUT verbatim, honor isolated-session + file-scanning."

### Dead region

Designs that fail any CRITICAL: in-context pass options (D8 fail); recovery semantics inside the protocol (D2 fail per Sensemaking Ambiguity 3); re-litigate 24-00 commitments (D7 fail).

### Boundary region

Designs that pass CRITICALs but fail HIGH: weak on robustness; weak on multi-head accommodation; phase-mismatched.

### Unexplored region

Innovation's mechanisms covered: per-piece option spaces (P1-P6) + Inherited Frame Audit + Piece-level Inversions for all 6 pieces. No structural alternative remains unexplored.

## Phase 2 — Adversarial Evaluation

### Candidate 1: A-Cand-Assembly (P1+P2+P3+P4+P5+P6 survivors)

#### Prosecution

- **Killer objection 1 (D6 elegance / D12 document-over-design ratio):** "The protocol is mostly documentation (80%). Why have a separate protocol file rather than embed in routeman SKILL.md + worker discipline specs?"
  - **Worst outcome:** the protocol file is read-once-and-forgotten; SKILL.md authors don't cross-reference it; documentation drift.
- **Killer objection 2 (D5 robustness — atomic-write enforcement):** "MUST atomic-write is unenforced — a worker could write directly. Routeman's scan logic then reads a half-written file."
  - **Worst outcome:** rare but real race condition; corrupt Route Map; user can't tell.
- **Killer objection 3 (D10 multi-head accommodation — concurrent writes):** "At L4+ multi-head, N workers write to N inquiry folders. The protocol commits per-file atomic-write, but what about concurrent reads-and-writes within one inquiry folder (e.g., a worker writes `sensemaking.md` while routeman is scanning the same folder)?"
  - **Worst outcome:** routeman scans the folder mid-write; sees `sensemaking.md.tmp` (which it ignores per atomic-write rule) AND finds canonical `_state.md` Status: ACTIVE; routeman correctly waits — but what if multiple workers are mid-write?
- **Killer objection 4 (D9 consumer compatibility — audit dependency):** "The audit at 06-00 reads `routeman.md` + `_navig.md`. P4 adds a `routeman_status: COMPLETE` status field; the audit must update its dispatch table to read this. Cross-coupling not documented."
  - **Worst outcome:** the audit's design at 06-00 is stale; needs minor refinement to consume the new status field.
- **Killer objection 5 (D5 robustness — verdict-line absence backward-compat):** "P3's two-part check (filename + verdict-line) requires worker disciplines to emit verdict lines. Older discipline outputs that pre-date this convention won't have them. RESUME §2 handles this with backward-compat PROCEED + NOTE; does this protocol document the same?"
  - **Worst outcome:** old inquiry-folder content fails the write-completeness check; routeman + audit treat them as incomplete; legitimate inquiries marked incomplete.
- **Strongest assumption-if-wrong:** "discipline specs reliably emit verdict lines." If a future discipline-spec edit removes the verdict line, the entire write-completeness signal breaks.

#### Defense

- **Core strength:** the assembly INHERITS heavily from existing project artifacts (24-00, 16-31, 24-40, RESUME, CONCLUDE, branch_inquiry) — minimum novel design weight. The novel pieces (atomic-write, verdict-line two-part check, scan-scope progression, status field) are small and well-precedented.
- **Defense vs objection 1 (separate file vs embed):** documented in Sensemaking Ambiguity 4. Embedded approach duplicates text across runners + workers; drift risk higher. Separate file with cross-references is the project's established pattern (branch_inquiry, conclude, resume, outcome_review, etc.). The "80% documentation" framing actually makes the case FOR a separate file — having the canonical reference at one location avoids the duplication-drift problem.
- **Defense vs objection 2 (atomic-write enforcement):** the protocol commits MUST; enforcement is at code-review time + by checking for orphan `.tmp` files. The audit at 06-00 can include orphan-`.tmp` detection as a substrate check (mentioned in Innovation P2's Absence Recognition). Workers' SKILL.md sections need a per-discipline commitment to atomic-write — propagation is a downstream COULD action.
- **Defense vs objection 3 (multi-head concurrent reads-and-writes within one inquiry folder):** in the current single-worker-per-inquiry-folder architecture, this race doesn't exist (one worker writes; routeman scans separately; sequential). For multi-head at L4+ — if multiple workers ever write to the SAME inquiry folder, additional locking is needed; this is preserved as L2+/L4+ extension hook ("parallel-worker locking"). At L0/L1, the race is not possible because the runners + branch_inquiry ensure one-worker-per-folder.
- **Defense vs objection 4 (audit cross-coupling):** the audit's design at 06-00 reads `routeman.md` + `_navig.md` per the per-mode dispatch table; reading a NEW field in `_navig.md` (the `routeman_status` field) is additive — the audit can be updated to read it but is not BROKEN by its presence. The cross-coupling is forward-compatible. **Add to Next Actions: cross-doc impact note on 06-00's audit design noting the `routeman_status` field availability.**
- **Defense vs objection 5 (verdict-line backward-compat):** the protocol explicitly inherits RESUME §2's backward-compat handling — if a discipline output lacks the verdict line, treat as backward-compat PROCEED with NOTE. **This should be explicit in P3's commitment text.** Refinement: add explicit "backward-compat" mention in P3.

#### Collision

- **Objection 1 vs defense:** defense holds. Separate file is the right pattern; documentation-over-design framing actually argues FOR centralization.
- **Objection 2 vs defense:** defense holds with caveat — atomic-write enforcement requires worker SKILL.md updates (downstream COULD). At first ship the protocol commits the MUST but enforcement propagation is staged.
- **Objection 3 vs defense:** defense holds for L0/L1 (single-worker-per-folder architecture); the L2+/L4+ extension hook is the right place to address concurrent writes.
- **Objection 4 vs defense:** defense holds; **refinement R1**: add cross-doc impact note on 06-00's audit design.
- **Objection 5 vs defense:** defense holds; **refinement R2**: add explicit backward-compat mention in P3's commitment text.

#### Position on landscape

Assembly passes all CRITICAL dimensions (D1, D2, D7, D8). HIGH dimensions: D3 ✓, D4 ✓ (all 7 SPs + 5 FFs), D5 with R1+R2 refinements ✓, D9 with R1 refinement ✓, D10 with L2+ extension hook ✓, D11 ✓. MEDIUM dimensions: D6 ✓, D12 ✓.

**Verdict: REFINE → SURVIVE after R1 + R2.**

Refinements:
- **R1: Add to Next Actions (cross-doc): impact note on 06-00's audit design noting the new `routeman_status` field availability in `_navig.md`.**
- **R2: Explicit backward-compat clause in P3's commitment text — if a discipline output lacks the verdict line, treat as backward-compat PROCEED with NOTE (per RESUME §2).**

After R1 + R2, assembly is **SURVIVE**.

### Candidate 2: A2-Cand-3 Runner-mediated atomic-write (Inverted from P2)

#### Prosecution

- "A2-Cand-3 puts atomic-write in the runner. Routes around per-discipline-spec edits. Easier to enforce centrally."

#### Defense

- "Runner doesn't know discipline-specific write semantics (where the discipline writes; what intermediate state). Per-discipline spec is the natural home. Centralization in runner is an architectural inversion."

#### Collision

- Defense holds. The runner orchestrates; the discipline writes; atomic-write commitment belongs at the write boundary (discipline).

#### Position

**KILL with seed.** Seed: if discipline-spec atomic-write commitments drift or aren't followed, runner-mediated atomic-write could be an L2+ enforcement fallback (the runner detects orphan `.tmp` files and quarantines them; complementary to the worker-side MUST).

### Candidate 3: A4-Cand-1 File presence only (deferred from P4)

#### Prosecution

- "Minimum-viable: file presence (via atomic-write) is sufficient. Why add a status field?"

#### Defense

- "Status field is explicit; downstream consumers (audit) can read it without having to verify atomic-write integrity themselves. Belt-and-suspenders has a small cost (one field in `_navig.md`) and a clear benefit (consumer signaling)."

#### Collision

- Both hold at small different effort levels. A4-Cand-2 (status field) is slightly more work for slightly clearer consumer interface. At L0 either works; at L2+ status field becomes more useful (more consumers).

#### Position

**A4-Cand-2 SURVIVE; A4-Cand-1 KILL with seed.** Seed: if status field proves to be never-read by consumers in practice, the protocol can simplify to file-presence-only.

## Phase 3 — Verdict + Constructive Output

### Per-candidate verdicts

| Candidate | Verdict | Constructive output |
|---|---|---|
| **Assembly (P1=A1-1, P2=A2-1, P3=A3-1, P4=A4-2, P5=A5-1, P6=A6-1)** | **SURVIVE** (after R1 + R2) | Ship the design with the refinements |
| A2-Cand-3 Runner-mediated atomic-write | KILL with seed | Seed: L2+ enforcement fallback if discipline atomic-write commitments drift |
| A4-Cand-1 File-presence-only completion | KILL with seed | Seed: simplification if status field never-read |
| A3-Cand-3 Marker file | KILL (already adjudicated) | — |
| A5-Cand-3 Full-scan only forever | KILL | No L2+ path |
| A1-Cand-2 Role-organized spec | KILL | Aspect-organized is the right pattern; role summary as L2+ hook |

### Refinements

- **R1:** add cross-doc impact note on 06-00's audit design noting the new `routeman_status` field availability in `_navig.md`.
- **R2:** explicit backward-compat clause in P3's commitment text per RESUME §2.

### Refined survivor (the final design)

The file-system protocol at `cognitive_harness/protocols/inquiry_filesystem_protocol.md`:

- **Spec organization (P1):** aspect-organized; one section per sub-aspect (SP1-SP7) + Failure Modes + L2+ Extension Hooks + Cross-References. RFC-style normative language (MUST / SHOULD).
- **Atomic-write (P2):** MUST. Workers write `<name>.tmp` then `mv <name>.tmp <name>`. Crash mid-write leaves orphan `.tmp` only; canonical filename absent until fully written. Runner can detect orphan `.tmp` at routeman invocation-end as a worker-failure indicator (optional check).
- **Per-discipline write-completeness (P3):** two-part check — (a) canonical filename exists (via atomic-write); (b) verdict-line `**Overall: PROCEED**` / `FLAG` / `RE-RUN` near file end (per RESUME §2 pattern). Backward-compat per RESUME §2 — if verdict-line absent, treat as PROCEED with NOTE.
- **Routeman completion-emission (P4):** file presence of both `_navig.md` and `routeman.md` (atomic-written) + explicit `routeman_status: COMPLETE` field in `_navig.md` frontmatter. Downstream consumers (audit) read the status field.
- **Scan detection + scope economy (P5):** L0 ships full-scan of `devdocs/inquiries/` + branch nesting at each routeman invocation. L2+ extension hook: mtime-filtered scan (trigger: full-scan time exceeds calibratable threshold, e.g., 5 seconds). Marker-based scan preserved as research frontier.
- **Partial-failure handling (P6):** 3-tier vocabulary per 24-40 — INFO (absent file), ERROR (malformed parse), ERROR (out-of-range / invalid content). Worker crash mid-write: atomic-write mitigates; orphan `.tmp` ignored. Scan timing out: partial Route Map + INFO note; re-running idempotent. Recovery is runner/human concern.

### Architecture-level commitment

The protocol:
1. **Inherits** 24-00 (ROUTEMAN-OUTPUT), 16-31 (architecture), 24-40 (failure handling).
2. **Commits** 3 novel pieces (atomic-write convention; verdict-line two-part check; scan-scope progression).
3. **Documents** existing conventions (folder topology, filename patterns, `_state.md` Status, section structures).
4. **Cross-references** consumers (runners, worker disciplines, audit at 06-00, persistence model at 24-00).
5. **Documents** L2+ extension hooks (mtime-filtered scan; parallel-worker locking; marker-based scan research frontier).
6. **Defines** detection-only failure handling (recovery out of scope).

## Phase 3.5 — Assembly Check (refined)

| Dimension | Refined assembly score | Notes |
|---|---|---|
| D1 Correctness | HIGH | Specifies the contract precisely |
| D2 Coherence | HIGH | All inheritances honored verbatim |
| D3 Feasibility at L0 | HIGH | No new infrastructure |
| D4 Completeness | HIGH | All 7 SPs + 5 FFs covered |
| D5 Robustness | HIGH (after R2 backward-compat) | Atomic-write + 3-tier failure + idempotent reads |
| D6 Elegance | HIGH | 80% documentation + 20% small novel pieces |
| D7 Inheritance integrity | HIGH | 24-00 scope-out preserved |
| D8 Architecture compliance | HIGH | File-mediated only; no in-context |
| D9 Consumer compatibility | HIGH (after R1) | Audit can consume new status field additively |
| D10 Multi-head accommodation | HIGH (L2+ extension hook for parallel-worker locking) | Architecture doesn't preclude N>1 workers |
| D11 Phase-fit at L0 | HIGH | L0 ships with documented L2+ progressions |
| D12 Document-over-design ratio | HIGH | Distinction clearly made + structurally honest |

**All dimensions HIGH after refinements.** Assembly is robust.

### Emergent properties

- **Minimal new infrastructure:** atomic-write uses POSIX primitives; verdict-line reuses RESUME pattern; 3-tier failure handling reuses 24-40 pattern; scan-scope uses filesystem mtime. Zero new files beyond the protocol artifact itself.
- **Backward-compatible:** existing inquiries that follow the de-facto conventions don't need migration; the protocol formalizes what's already practiced.
- **Forward-compatible:** L2+ extension hooks (mtime-filtered scan, parallel-worker locking) allow scaling without redesign.
- **Cross-cuts cleanly:** the protocol is the canonical reference; runners + workers + audit + persistence model all cross-reference it; no duplication.

## Phase 4 — Coverage + Convergence

### Accumulator

| Field | Content |
|---|---|
| Evaluation log | Assembly + 5 alternative candidates evaluated against 12 dimensions |
| Kill record | A2-Cand-3 (runner-mediated atomic-write; seed: L2+ enforcement fallback); A4-Cand-1 (file-presence-only; seed: simplification if status field unread); A3-Cand-3 (marker file); A5-Cand-3 (full-scan forever); A1-Cand-2 (role-organized); plus Innovation's prior kills (A2-Cand-2, A2-Cand-4, A3-Cand-2, A5-Cand-2/4/5/6, A6-Cand-2/3, A1-Cand-3 deferred) |
| Refinement record | R1 (cross-doc impact note on 06-00 audit); R2 (backward-compat clause in P3) |
| Coverage map | All 12 dimensions covered; all CRITICAL HIGH; all HIGH (post-refinement) |
| Convergence trend | Single iteration; landscape stable; assembly converges |

### Coverage assessment

All 6 pieces' option spaces fully explored. All 5 FFs from 16-31 resolved. ROUTEMAN-OUTPUT scope-out preserved. Inherited Frame Audit clean (P2 challenged; alternatives tested).

### Convergence criteria

- At least one SURVIVE on critical dimensions: YES (assembly after R1+R2).
- Two consecutive iterations without new regions: N/A (first iteration).
- No unexplored region: YES.

**Convergence: TERMINATE.**

## Convergence Telemetry

- **Dimension coverage:** 12 dimensions (6 default + 6 project-specific).
- **Adversarial strength:** STRONG (5 killer objections; 5 defense responses; 2 refinements committed).
- **Landscape stability:** STABLE (no candidate disrupted critical-dimension positions).
- **Clean SURVIVE:** YES.
- **Failure modes observed:** none of the 7 (Wrong Dimensions, Rubber-stamping, Nitpicking, Dimension Blindness, False Convergence, Evaluation Drift, Self-Reference Collapse).

**Overall: PROCEED** (sufficient coverage; strong adversarial; stable landscape; clean SURVIVE; no failure modes; convergence reached).
