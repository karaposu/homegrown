## User Input

(See `_branch.md` Source Input for the full verbatim user input.)

# Innovation — File-System Protocol

Generates options per piece (P1-P6) via the 7 mechanisms, applies the 5-test cycle, runs Inherited Frame Audit + Piece-Level Inversion per discipline refinement notes.

## Phase 1 — Seed

Production-task mode (seed = piece-list from Decomposition).

### Methodology-Mode Consideration (Phase 1 refinement)

- **Inherited mode:** Standard default (4G+3F balanced). Decomposition validated piece boundaries; production task asking for committed options per piece.
- **Alternative considered:** Contrarian-rethink — what if the protocol shouldn't exist as a separate file (embed in runner SKILL.md)? This was already tested in Sensemaking Ambiguity 4 and rejected; re-litigating would discard work.
- **Decision:** default Standard mode.

### Seeds per piece

- **P2:** atomic-write convention's exact wording + MUST/SHOULD strength.
- **P3:** per-discipline write-completeness signal's two-part check.
- **P4:** routeman completion-emission shape.
- **P5:** scan detection + scan-scope economy progression.
- **P6:** partial-failure handling for 3 failure modes.
- **P1:** spec organization + exact text (aggregates).

## Phase 2 — Generate (per piece, in dependency order)

### Piece P2 — Atomic-write convention

#### Mechanisms applied

- **Lens Shifting:** under the lens of "enforcement strength" — MUST vs SHOULD. MUST is a hard contract; SHOULD allows non-conforming workers but with documented downside. Under "enforcement mechanism" lens — runner can detect non-conformance (look for `.tmp` files) but cannot prevent it.
- **Combination:** combine the POSIX rename atomicity + the project's filename convention → workers write `<canonical_name>.tmp`, then `mv <canonical_name>.tmp <canonical_name>`. Crash mid-write leaves only `<canonical_name>.tmp` orphaned; canonical filename absent → routeman doesn't read.
- **Inversion:** "atomic-write is a worker concern" → "atomic-write is a runner concern" — what if the runner does the atomic write (worker writes to a temp area; runner moves to canonical position when worker reports complete)? This would put atomic-write in the runner spec; would centralize the contract but couples worker output to runner intermediation. Component-level. Depth check: "the runner is the boundary point" → "the boundary point is wherever the write to canonical-name happens" — system-level: atomic-write commitment lives wherever the final filename is established. **Most natural location: the worker (the runner doesn't know discipline-specific write semantics).**
- **Constraint Manipulation:** ADD constraint "atomic-write MUST use POSIX rename semantics" — pins the implementation. REMOVE "atomic-write is required" — workers write directly; routeman handles partial reads via re-scan. The REMOVE variant trades worker simplicity for routeman complexity (constant re-scanning to detect changes); not phase-fit. ADD wins.
- **Absence Recognition:** what's missing — a validation step (runner checks for orphan `.tmp` files at routeman invocation-end; emits INFO if found). Bidirectional: what's already present — the audit at 06:00 can include orphan-`.tmp` detection as part of its substrate consumption (not its primary job, but a side observation).
- **Domain Transfer:** version control systems (`git`) use the same pattern (`.git/objects/tmp/` + rename). Transactional databases (write-ahead log + atomic commit). **Pattern is universal in systems with append-only consistency requirements.**
- **Extrapolation:** as worker count grows (multi-head L4+), atomic-write per-worker prevents cross-worker race naturally — each worker writes to its own inquiry folder; canonical filenames don't conflict across folders.

#### Candidate options

- **A2-Cand-1 — MUST atomic-write; workers write `<name>.tmp` then rename.** Standard.
- **A2-Cand-2 — SHOULD atomic-write; documented downside if not.** Allows non-conforming workers with explicit risk warning.
- **A2-Cand-3 — Runner-mediated atomic-write.** Workers write to runner-managed temp area; runner moves on completion.
- **A2-Cand-4 — No atomic-write; routeman handles partial reads via re-scan.** Removes the convention.

#### Inherited Frame Audit (P2)

The central assumption: atomic-write is a WORKER convention. Challenge: could the convention live ELSEWHERE? A2-Cand-3 (runner-mediated) is the Inverted candidate. Audit FIRES.

Orchestration: Cand-3 was tested above (Inversion). It loses on the "runner doesn't know discipline-specific write semantics" structural argument. Audit does not require re-running.

#### Piece-Level Inversion compliance (P2)

- **Property check:** P2 is Property (v) intervention-shape — commits ADD-CONTENT (new atomic-write convention).
- **Inversion-candidate (Property-v Intervention-Shape):** principal shape = ADD-CONTENT (commit new convention). Alternative shape = DO-NOTHING (rely on existing inconsistent practice) OR REORGANIZE-WITHOUT-ADDING (document existing practice without committing). A2-Cand-4 represents DO-NOTHING; A2-Cand-2 represents REORGANIZE (commit SHOULD without enforcement). Both candidates testable.
- **Compliance: SATISFIED.**

### Piece P3 — Per-discipline write-completeness signal

#### Mechanisms applied

- **Combination:** atomic-write (P2) + verdict-line (RESUME §2 pattern) → two-part check. Already in SV4.
- **Inversion:** "completeness = filename exists" → "completeness = explicit marker file." Marker-file approach. Already adjudicated in Sensemaking Ambiguity 1 as inferior.
- **Constraint Manipulation REMOVE:** drop the verdict-line check; rely on atomic-write alone. Risk: a worker that writes the file atomically but fails before emitting the verdict-line would look complete to routeman but actually be incomplete. The verdict-line catches "the discipline didn't finish its self-assessment." Adding it is mandatory.
- **Absence Recognition:** what's missing — a fallback for discipline-spec versions that don't yet emit verdict lines (per RESUME §2's backward-compat handling).
- **Domain Transfer:** HTTP status codes (200 OK = complete + valid; 5xx = present but failed). The verdict-line is the analog ("PROCEED" = complete + valid; "FLAG" = complete but flagged; "RE-RUN" = complete but requires re-running).
- **Extrapolation:** new discipline-spec emerges → it inherits the verdict-line convention naturally because the convention is part of the protocol.

#### Candidate options

- **A3-Cand-1 — Two-part check: filename + verdict-line.** Standard; with backward-compat per RESUME §2.
- **A3-Cand-2 — Filename only.** Atomic-write is the only signal.
- **A3-Cand-3 — Marker file.** Already-rejected.

#### Piece-Level Inversion compliance (P3)

- **Property check:** Property (v) intervention-shape — ADD-CONTENT for the two-part check rule.
- **Inversion-candidate:** REORGANIZE-WITHOUT-ADDING — just document the existing RESUME §2 verdict-line pattern without making it a write-completeness check. Under this, the protocol doesn't define a per-discipline write-completeness check; consumers must invent their own. A3-Cand-2 (filename-only) is closer to this. Tested above.
- **Compliance: SATISFIED.**

### Piece P4 — Routeman's completion-emission shape

#### Mechanisms applied

- **Combination:** 24-00's `_navig.md` + `routeman.md` + atomic-write (P2) → file presence is the natural completion signal. KI7 from Sensemaking.
- **Lens Shifting:** under "explicit-is-better" lens — add a status field in `_navig.md` (e.g., `routeman_status: COMPLETE`); makes the completion explicit for downstream consumers. Under "minimum-is-better" lens — file presence is sufficient; no new field.
- **Inversion:** "routeman emits completion in a file" → "routeman doesn't emit completion; consumers re-read on each tick." Removes the signal entirely; consumers handle staleness. Loses observability.
- **Constraint Manipulation REMOVE:** remove "completion-emission shape is needed at all." Per 24-00, file presence is sufficient. The novel design adds the status field for explicit consumer reading.
- **Absence Recognition:** what's missing — a way for consumers (the audit at 06:00) to know "this is the routeman output I should read" vs "this is stale". Atomic-write + timestamp provides this; explicit status adds belt-and-suspenders.

#### Candidate options

- **A4-Cand-1 — File presence only** (atomic-write of `_navig.md` + `routeman.md` = complete). Minimum.
- **A4-Cand-2 — File presence + explicit status field in `_navig.md`** (e.g., `routeman_status: COMPLETE`). Belt-and-suspenders.
- **A4-Cand-3 — File presence + verdict-line in `_navig.md`** (analog to per-discipline verdict).

#### Piece-Level Inversion compliance (P4)

- **Property check:** Property (v) intervention-shape — A4-Cand-2 + A4-Cand-3 are ADD-CONTENT; A4-Cand-1 is REORGANIZE (just document existing 24-00 commitment).
- **Inversion-candidate (Property-v):** principal = ADD-CONTENT (add explicit signal); Inverted = REORGANIZE (commit only existing). Both testable.
- **Compliance: SATISFIED.**

### Piece P5 — Scan detection + scan-scope economy progression

#### Mechanisms applied

- **Combination:** full-scan (L0) + mtime-filtered (L2+) + marker-based (research frontier) — three-stage progression.
- **Lens Shifting:** under "performance-first" lens — mtime from L0 makes sense (cheap; bookkeeping minimal). Under "simplicity-first" lens — full-scan at L0 is dumb-simple; mtime is L2+ optimization. Under "future-proofing" lens — start with mtime-aware now to avoid migration pain later.
- **Inversion:** "scan detection is routeman's concern" → "scan detection is the runner's concern (runner tells routeman which files are new)." Runner-mediated discovery. But routeman is in an isolated session per 16-31; in-context parameter pass is off the table. Inversion fails the architecture constraint.
- **Constraint Manipulation ADD:** add "scan time must be O(N) in inquiry count, not O(M) in file count." Forces mtime-filtered design at L2+.
- **Constraint Manipulation REMOVE:** remove "scan detection mechanism is needed." Routeman could re-read all files every time without filtering. Loses performance but is simplest. Phase-fit at L0; loses at L4+.
- **Absence Recognition:** what's missing — a transition trigger that's measurable + automatic. Bidirectional: present — autonomy register's `current_level` could trigger the transition; or full-scan time exceeding a threshold; or inquiry count exceeding N.
- **Domain Transfer:** filesystem indexers (Spotlight, mlocate's `updatedb`) use mtime + full scan combinations.
- **Extrapolation:** as corpus grows, full-scan time grows linearly; at some point it crosses user-acceptable threshold; that's the transition trigger.

#### Candidate options

For scan detection mechanism + economy progression:

- **A5-Cand-1 — Full-scan at L0; mtime-filtered at L2+; threshold = full-scan time exceeds 5 seconds.** Standard.
- **A5-Cand-2 — Mtime-aware from L0 (use mtime annotation as bookkeeping; full-scan but tag mtime).** Future-proofing.
- **A5-Cand-3 — Full-scan only; never optimize.** Phase-fit but loses at L4+.
- **A5-Cand-4 — Mtime-filtered from L0.** Optimization before need.
- **A5-Cand-5 — Inquiry-count-keyed (autonomy-level scaling like the audit's threshold table).** Scales with autonomy.
- **A5-Cand-6 — Hybrid: full-scan + mtime annotation; transition to filter at observable threshold.** Combination of 1 + 2.

#### Piece-Level Inversion compliance (P5)

- **Property check:** Property (i) relationship-label — commits the progression structure.
- **Inversion-candidate:** A5-Cand-3 (never optimize) OR A5-Cand-4 (optimize immediately). Both tested.
- **Compliance: SATISFIED.**

### Piece P6 — Partial-failure handling

#### Mechanisms applied

- **Combination:** 24-40's 3-tier (INFO / ERROR / ERROR) + atomic-write (P2 mitigates worker crash) + idempotent scan (P5 implies) → cohesive failure handling.
- **Lens Shifting:** under "user-experience" lens — user gets clear signals (INFO = ok, attend later; ERROR = halt + fix). Under "automation" lens — system can auto-respond to INFO (warn); ERROR halts.
- **Inversion:** "failure handling is detection-only" → "failure handling includes recovery." Already adjudicated in Sensemaking Ambiguity 3 — recovery is runner/human concern; protocol is detection-only.
- **Constraint Manipulation ADD:** add "all failure modes MUST map to a 3-tier classification." Forces uniformity.
- **Absence Recognition:** what's missing — handling for the case where the audit's spec-coherence check (from 06:00) detects routeman SKILL.md edits. Adjacent to failure handling but a different concern (audit-side, not file-system-protocol-side).
- **Domain Transfer:** error-handling patterns in unreliable network code — distinguish transient (retry) from permanent (halt) errors.
- **Extrapolation:** new failure modes emerge → fit into 3-tier via INFO (transient/recoverable) or ERROR (halt/diagnose).

#### Candidate options

- **A6-Cand-1 — 3-tier (INFO / ERROR / ERROR) per 24-40 pattern; recovery out-of-scope.** Standard.
- **A6-Cand-2 — Add WARN tier (4-tier).** Adds nuance; risks confusion vs INFO.
- **A6-Cand-3 — Include recovery semantics (retry on INFO, halt on ERROR).** Already rejected as out-of-scope.

#### Piece-Level Inversion compliance (P6)

- **Property check:** Property (i) relationship-label — commits the failure-handling structure.
- **Inversion-candidate:** include recovery (A6-Cand-3). Already tested.
- **Compliance: SATISFIED.**

### Piece P1 — Protocol file's section organization + exact text

#### Mechanisms applied

- **Combination:** existing protocol patterns (`branch_inquiry.md` + `multi_resolution_navigation.md` + `outcome_review.md`) all use Loading note + Purpose + When-to-use + Input Contract + per-step procedure + Failure Modes + Short Version. Combine with the 7 sub-aspects → one section per sub-aspect + cross-cutting (Failure Modes, Extension Hooks, Cross-References).
- **Lens Shifting:** under "skimming" lens — section headers should announce content clearly; under "deep-reading" lens — sections need full text with rationale.
- **Inversion:** "one section per sub-aspect" → "one section per role (workers / routeman / runners)." Role-organized vs aspect-organized. Role-organized may be more useful for SKILL.md authoring (a worker discipline author reads one section); aspect-organized is more useful for downstream consumers (the audit reads multiple sub-aspects).
- **Constraint Manipulation:** the protocol must be readable + actionable; structure follows project conventions.
- **Absence Recognition:** what's missing — concrete examples per section (e.g., a sample `_navig.md` with atomic-write convention shown). Worked examples aid SKILL.md authoring.
- **Domain Transfer:** RFC document style (sections with formal MUST/SHOULD language; examples in appendices) — adopt for the protocol's normative content.
- **Extrapolation:** future protocols can adopt the same organization pattern.

#### Candidate options

- **A1-Cand-1 — Aspect-organized:** one section per SP (folder topology, filename patterns, write semantics, scan semantics, failure handling), + cross-cutting (extensions, cross-refs).
- **A1-Cand-2 — Role-organized:** one section per role (workers / routeman / runners), each with their commitments.
- **A1-Cand-3 — Hybrid:** aspect-organized for sub-aspects + role-organized summary at the end (each role's commitments summarized).

#### Piece-Level Inversion compliance (P1)

- **Property check:** Property (ii) framing-semantic — commits the organizational frame.
- **Inversion-candidate:** A1-Cand-2 (role-organized vs aspect). Both testable.
- **Compliance: SATISFIED.**

## Phase 3 — Test

### P2 — Atomic-write convention

| Candidate | Novelty | Survival | Fertility | Action | Mech-Ind | Disposition |
|---|---|---|---|---|---|---|
| A2-Cand-1 MUST atomic-write | LOW (well-known) | HIGH (clear contract; routeman scan logic relies on it) | MEDIUM | HIGH | HIGH | **ACTIONABLE** |
| A2-Cand-2 SHOULD atomic-write | LOW | LOW (non-conforming workers break routeman's scan invariant) | LOW | MEDIUM | LOW | KILL |
| A2-Cand-3 Runner-mediated | MEDIUM | LOW (runner doesn't know discipline write semantics; over-coupling) | LOW | LOW | LOW | KILL |
| A2-Cand-4 No atomic-write | LOW | LOW (constant re-scan to detect changes; not phase-fit) | LOW | LOW | LOW | KILL |

Survivor: **A2-Cand-1 ACTIONABLE.**

### P3 — Per-discipline write-completeness signal

| Candidate | Disposition | Reason |
|---|---|---|
| A3-Cand-1 Two-part check (filename + verdict-line) | **ACTIONABLE** | Reuses existing RESUME §2 pattern; atomic-write handles filename; minimal new convention |
| A3-Cand-2 Filename only | KILL | Misses cases where discipline writes file but doesn't finish self-assessment |
| A3-Cand-3 Marker file | KILL | Already adjudicated in Sensemaking Ambiguity 1 |

Survivor: **A3-Cand-1 ACTIONABLE.**

### P4 — Routeman's completion-emission shape

| Candidate | Disposition | Reason |
|---|---|---|
| A4-Cand-1 File presence only | DEFERRED | Minimum-viable; matches 24-00 inheritance exactly; loses explicit signal for downstream |
| **A4-Cand-2 File presence + status field in `_navig.md`** | **ACTIONABLE** | Belt-and-suspenders; explicit signal for the audit + future consumers; minor schema extension to `_navig.md` |
| A4-Cand-3 File presence + verdict-line in `_navig.md` | DEFERRED | Verdict-line analog; verdict-line is per-self-assessment; routeman's completion is more state-shaped; status field is cleaner |

Survivor: **A4-Cand-2 ACTIONABLE.**

### P5 — Scan detection + scan-scope economy progression

| Candidate | Disposition | Reason |
|---|---|---|
| **A5-Cand-1 Full-scan at L0; mtime-filtered at L2+; threshold = full-scan time exceeds N seconds** | **ACTIONABLE** | Phase-fit at L0; well-defined progression; explicit transition trigger |
| A5-Cand-2 Mtime-aware from L0 | DEFERRED | Future-proofs but adds L0 complexity for unclear benefit |
| A5-Cand-3 Full-scan only | KILL | No L2+ path; locks into L0 |
| A5-Cand-4 Mtime-filtered from L0 | KILL | Premature optimization |
| A5-Cand-5 Inquiry-count-keyed | DEFERRED | Inquiry count is one signal; full-scan time is more direct |
| A5-Cand-6 Hybrid (full-scan + mtime annotation) | DEFERRED | More complex than A5-Cand-1; benefit unclear at L0 |

Survivor: **A5-Cand-1 ACTIONABLE.**

### P6 — Partial-failure handling

| Candidate | Disposition | Reason |
|---|---|---|
| **A6-Cand-1 3-tier per 24-40 pattern; recovery out-of-scope** | **ACTIONABLE** | Inherits established project pattern; clean separation of concerns |
| A6-Cand-2 4-tier (add WARN) | KILL | Adds noise; INFO already covers the WARN role |
| A6-Cand-3 Include recovery | KILL | Already rejected in Sensemaking Ambiguity 3; runner/human concern |

Survivor: **A6-Cand-1 ACTIONABLE.**

### P1 — Protocol file's section organization

| Candidate | Disposition | Reason |
|---|---|---|
| **A1-Cand-1 Aspect-organized** | **ACTIONABLE** | Matches existing protocol patterns (`branch_inquiry.md` etc.); consumers (audit + SKILL.md authors) read aspects rather than roles |
| A1-Cand-2 Role-organized | KILL | Workers might benefit but cross-aspect reading (audit's scan) becomes harder |
| A1-Cand-3 Hybrid | DEFERRED | Aspect + role summary; aspect alone is sufficient at first ship; role summary preserved as L2+ extension hook |

Survivor: **A1-Cand-1 ACTIONABLE.**

## Phase 3.5 — Assembly Check

### What architecture emerges when survivors are combined?

Combining the survivors:
- **P1 spec organization:** aspect-organized (A1-Cand-1).
- **P2 atomic-write:** MUST atomic-write via `<name>.tmp` + rename (A2-Cand-1).
- **P3 write-completeness:** two-part check (filename + verdict-line) (A3-Cand-1).
- **P4 routeman completion:** file presence + status field in `_navig.md` (A4-Cand-2).
- **P5 scan + scope:** full-scan at L0; mtime-filtered at L2+ (A5-Cand-1).
- **P6 failure handling:** 3-tier inherited from 24-40 (A6-Cand-1).

### Emergent properties

- **All-novel work goes into worker SKILL.md edits + routeman SKILL.md edit + a new protocol file.** Total worker edits: 5 disciplines × small commitment (atomic-write + verdict-line emission, both already mostly there). Routeman SKILL.md: file presence + status field commitment. New protocol file: 6 sections + cross-cutting. Comparable to 24-40's authoring effort.
- **Backward-compatible with existing inquiries.** The convention is what existing inquiries already approximate; the protocol formalizes + commits the contract.
- **Aligned with multi-head future:** atomic-write naturally serializes per-file; multi-worker concurrency at L4+ is straightforward because each worker writes to its own inquiry folder.

### Assembly-emergent candidate

**A-Cand-Assembly:** P1 = A1-Cand-1 + P2 = A2-Cand-1 + P3 = A3-Cand-1 + P4 = A4-Cand-2 + P5 = A5-Cand-1 + P6 = A6-Cand-1 = coherent first-ship protocol design.

### Axis coverage check

Axes covered:
- Documentation axis: P1 covers (aspect-organized sections cite inherited conventions).
- Write semantics axis: P2 + P3 + P4 cover.
- Scan semantics axis: P5 covers.
- Failure handling axis: P6 covers.
- Cross-cutting concerns: L2+ hooks per piece; cross-references per piece.

All 5 axes covered. No axis with no variant. PASS.

### Mechanism Independence — Shared-input-detection

Survivors emerge from multiple mechanisms each. P2's A2-Cand-1 from Combination + Domain Transfer + Constraint Manipulation; P3's A3-Cand-1 from Combination + Lens + RESUME pattern; etc. No spurious-from-shared-input convergence.

## Phase 4 — Iteration / Output Disposition

| Piece | Survivor | Disposition |
|---|---|---|
| P1 Spec organization | A1-Cand-1 (aspect-organized) | **ACTIONABLE** |
| P2 Atomic-write | A2-Cand-1 (MUST atomic-write) | **ACTIONABLE** |
| P3 Per-discipline write-completeness | A3-Cand-1 (two-part check) | **ACTIONABLE** |
| P4 Routeman completion-emission | A4-Cand-2 (file presence + status field) | **ACTIONABLE** |
| P5 Scan detection + scope economy | A5-Cand-1 (full-scan L0; mtime-filtered L2+) | **ACTIONABLE** |
| P6 Partial-failure handling | A6-Cand-1 (3-tier per 24-40) | **ACTIONABLE** |

### Research frontiers (preserved)

- A5-Cand-6 (mtime-aware from L0 with annotation) as future-proofing if mtime-filtered transition happens often.
- A1-Cand-3 (hybrid aspect + role summary) for L2+ if multi-discipline-author readers find aspect-only insufficient.
- Marker-based scan detection (from Sensemaking Ambiguity 2) as research frontier if mtime proves unreliable.
- Parallel-worker locking (for L4+ multi-head).

## Production-task additional telemetry

### Per-piece mechanism log

| Piece | Mechanisms applied | Axis annotations |
|---|---|---|
| P2 | Lens, Combination, Inversion, Constraint Manip (ADD/REMOVE), Absence (bidir), Domain Transfer, Extrapolation | content + intervention-shape (A2-Cand-4 DO-NOTHING tested) |
| P3 | Combination, Inversion, Constraint REMOVE, Absence, Domain Transfer, Extrapolation | content + intervention-shape (A3-Cand-2 filename-only as REORGANIZE tested) |
| P4 | Combination, Lens, Inversion, Constraint REMOVE, Absence | content + intervention-shape (A4-Cand-1 REORGANIZE vs A4-Cand-2 ADD-CONTENT tested) |
| P5 | Combination, Lens (3 lenses), Inversion, Constraint ADD/REMOVE, Absence, Domain Transfer, Extrapolation | content (multi-axis: full-scan / mtime / hybrid / inquiry-count) |
| P6 | Combination, Lens, Inversion, Constraint ADD, Absence, Domain Transfer, Extrapolation | content |
| P1 | Combination, Lens, Inversion, Constraint Manip, Absence, Domain Transfer (RFC style), Extrapolation | content + framing-semantic (A1-Cand-1 vs A1-Cand-2 framing tested) |

### Meta-decision-piece classification + Inversion compliance

All 6 pieces classified meta-decision; all 6 piece-level Inversions satisfied (Property-v for P2/P3/P4; Property-i for P5/P6; Property-ii for P1).

## Mechanism Coverage Telemetry

- **Generators:** Combination ✓, Absence Recognition ✓, Domain Transfer ✓, Extrapolation ✓ → 4/4.
- **Framers:** Lens Shifting ✓, Constraint Manipulation ✓, Inversion ✓ → 3/3.
- **Convergence:** YES — multiple mechanisms converge on each piece's survivor.
- **Survivors tested:** 6 (one per piece, all 5-test cycled).
- **Failure modes observed:** none of the 6.
- **Inherited Frame Audit:** fired on P2 (atomic-write as worker concern challenged); did not require re-run (alternatives tested explicitly).

**Production-task FLAG / RE-RUN condition check:** all 6 Piece-level Inversions satisfied; no axis-misalignment violations. **Verdict: PROCEED.**

**Overall: PROCEED** (4/4 G + 3/3 F; convergence; 6 survivors tested; no failure modes; Inherited Frame Audit clean; all piece-level Inversions satisfied).
