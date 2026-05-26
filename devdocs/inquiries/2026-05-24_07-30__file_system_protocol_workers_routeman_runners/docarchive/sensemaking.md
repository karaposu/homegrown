## User Input

(See `_branch.md` Source Input for the full verbatim user input.)

# Sensemaking — File-System Protocol (workers / routeman / runners)

## SV1 — Baseline Understanding

Three roles interact via files: workers write inquiry-folder artifacts; routeman scans those folders and writes its Route Map; runners orchestrate both. The protocol formalizes where + when + how. Seven sub-aspects (SP1-SP7); five of them (FF-1 through FF-5) were explicitly opened by the 2026-05-23 16:31 correction. The ROUTEMAN-OUTPUT side is settled by 24-00; the WORKER-WRITE side + the inter-role choreography is the open work.

A naive reading would treat the 7 sub-aspects as independent design choices. The Surfacing output suggests deep coupling: the folder topology (SP1) constrains the scan-scope economy (SP7); the write-completeness signaling (SP3) constrains the partial-failure handling (SP5); the scan detection mechanism (SP6) is the precondition for the audit's per-mode dispatch (a downstream consumer). The 7 sub-aspects form a tight coupling lattice; the design must be coherent across them.

## Phase 1 — Cognitive Anchor Extraction

### Constraints

- **C1 — Isolated-session + file-scanning architecture is fixed** (per 16-31). Workers and routeman run in separate sessions; communication is via filesystem only. No in-context parameter pass; no callbacks; no shared in-memory state.
- **C2 — ROUTEMAN-OUTPUT side is settled** (per 24-00). `_navig.md` + `routeman.md` naming; hybrid placement by invocation scope; persistent + in-place evolution + append lifecycle. This inquiry does NOT re-litigate these commitments.
- **C3 — The project has no infrastructure beyond filesystem** — no scheduler, no message queue, no distributed lock service, no daemon. The protocol must be filesystem-only.
- **C4 — Existing inquiry-folder structure is canonical** (per the runners + branch_inquiry + CONCLUDE). Root inquiry = `devdocs/inquiries/<YYYY-MM-DD_HH-MM__slug>/`; branch inquiry = `[parent]/branches/[branch_id]/`. Each holds `_branch.md`, `_state.md`, discipline outputs, `docarchive/` post-CONCLUDE, `finding.md`.
- **C5 — Worker disciplines write canonical-named files** (per the discipline SKILL.md commitments). `sensemaking.md`, `innovation.md`, `critique.md`, `decomposition.md`, `surfacing.md`. These conventions are stable across discipline-spec edits.
- **C6 — `_state.md` Status field exists and carries completion semantics** (per CONCLUDE §4). `Status: ACTIVE` during the pipeline; `Status: COMPLETE` after CONCLUDE finishes. This is the existing project anchor for inquiry-level completion.
- **C7 — Discipline outputs carry self-assessment verdicts** (per the discipline reference files + RESUME §2). Each discipline emits `**Overall: PROCEED**` / `FLAG` / `RE-RUN` lines at the end of its output. This is the existing pattern for per-discipline completion semantics.
- **C8 — The audit at 06:00 is a downstream consumer of this protocol's writes** (per item #19 in Surfacing). The audit's per-mode dispatch table reads files written via this protocol's conventions. Backward compatibility constraint: the audit's read patterns must continue to work.
- **C9 — Multi-head future-state must be accommodated** (per items #28-29). The protocol must not preclude N parallel workers writing to N inquiry folders + routeman scanning across them. This is a soft constraint at L0 (multi-head not shipped) but a hard one for L4+.
- **C10 — POSIX rename atomicity is available** (per item #20). Write-to-temp + rename = atomic on POSIX filesystems. This is a primitive the protocol can use without new infrastructure.

### Key Insights

- **KI1 — Most of the WORKER-WRITE side is ALREADY DE-FACTO COMMITTED** by existing project conventions. The runners create inquiry folders at the canonical paths; the discipline disciplines write canonical-named files; CONCLUDE archives them. The protocol's job for SP1 (folder topology), SP2 (filename patterns), and some of SP3 (write-completeness via `_state.md` Status) is to **DOCUMENT THE EXISTING CONVENTIONS** with explicit contracts, not invent new ones. The open design space is much narrower than the 7 sub-aspects suggest.

- **KI2 — The real design pressure concentrates on three sub-aspects.** SP3 write-completeness signaling at the **per-discipline-file** level (not the inquiry level — that's `_state.md` Status); SP6 scan detection (does routeman re-scan all files or use mtime-since-last-scan?); SP7 scan-scope economy (as corpus grows, do we scan all inquiries every time?). The other four (SP1 folder topology, SP2 filename patterns, SP4 completion-emission, SP5 partial-failure handling) are largely "document + extend existing conventions."

- **KI3 — `_state.md` Status field is the canonical completion anchor** but it operates at the inquiry-completion level, not the per-discipline-output level. For per-discipline write-completeness, the natural project signal is the discipline's `**Overall: PROCEED**` line at the end of its output (per RESUME's read pattern). **Reusing the existing verdict-line pattern is the lowest-friction option** for per-discipline write-completeness — no new marker file, no new convention.

- **KI4 — Atomic-write via rename is the right primitive for partial-failure handling.** Worker writes its discipline output to a `.tmp` file, then renames to the canonical name on completion. Routeman scanning a half-written `.tmp` file is impossible (the canonical filename only exists when fully written). This is the standard pattern; no new infrastructure required; eliminates the mid-write read race entirely.

- **KI5 — Scan detection cost is bounded by the inquiry-folder count, not the file count.** At L0 the project has ~20-50 inquiry folders; routeman can scan all of them on every invocation cheaply. At L4+ with N=hundreds, mtime-based filtering becomes valuable. **At first ship, full-scan with mtime annotation is sufficient**; mtime-filtered re-scan is an L2+ extension hook.

- **KI6 — Partial-failure handling decomposes into 3 distinct failure modes** that can be addressed separately:
  - **Worker crash mid-write:** mitigated by atomic-write (KI4) — never see a half-written canonical file.
  - **Worker emits malformed content:** detected when routeman/audit tries to parse the file — 3-tier failure handling from 24-40 applies (INFO if missing, ERROR if malformed).
  - **Routeman scan timing out / interrupted:** mitigated by idempotent reads — re-running routeman should produce the same Route Map for the same input set; partial scan = partial Route Map, but next scan completes.
  Each mode has a clean mitigation; no exotic recovery mechanism needed.

- **KI7 — Routeman's completion-emission shape inherits 24-00's commitments** — `_navig.md` is written + `routeman.md` is written; the existence of both files (atomic-renamed) signals routeman's completion. **No new completion-signal mechanism needed** — file presence + atomic-write IS the completion signal.

### Structural Points

- **SP-S1 — Three role layers** (workers / routeman / runner) interact via filesystem; the protocol governs the choreography.
- **SP-S2 — Two completion granularities** — inquiry-level (`_state.md` Status: COMPLETE) and per-discipline-file-level (discipline's `**Overall: PROCEED**` line + canonical filename present). The protocol uses both at different read-times.
- **SP-S3 — Routeman is a singleton scanner** (per 16-31's architecture) reading from N inquiry folders + writing to its own output location (per 24-00). The protocol's READ side is N-to-1 (N inquiry folders → 1 routeman session); the WRITE side is 1-to-1 (1 routeman session → 1 `_navig.md` + `routeman.md` pair).
- **SP-S4 — File-system protocol composes with existing protocols**, not replacing any. `branch_inquiry.md` creates folders; CONCLUDE archives + writes `finding.md`; RESUME reads discipline verdicts; `multi_resolution_navigation.md` defines routeman's output schema. This protocol slots between them, formalizing the WORKER-WRITE side without redefining anything.

### Foundational Principles

- **FP1 — Document existing conventions explicitly; design only what's missing.** Per the project's pattern (24-00 adopted `multi_resolution_navigation.md`; 24-40 adopted `autonomy_ladder.md` values), the protocol's first-line work is to make the existing implicit conventions explicit, then design the genuinely missing pieces (scan detection cost optimization; partial-failure handling formalization).
- **FP2 — Filesystem-only; no new infrastructure.** The protocol must use only POSIX primitives + existing project artifacts. No daemons; no schedulers; no message queues.
- **FP3 — Idempotent reads + atomic writes.** The protocol's correctness rests on: each scan is reproducible (same inputs → same outputs); writes are atomic (no half-states visible).
- **FP4 — Phase-fit at L0 with L2+ extension hooks.** L0 ships with full-scan + canonical-conventions. L2+ extensions (mtime-filtered scans, parallel-worker locking) are documented but not implemented at first ship.
- **FP5 — Inherit, don't reinvent.** 24-40's 3-tier failure handling; the existing `_state.md` Status semantics; the discipline `**Overall: PROCEED**` verdict-line pattern; the inquiry-folder canonical structure; the atomic-rename POSIX primitive — all inherited.

### Meaning-Nodes

- **MN1 — "File-system protocol" means the operational contract** governing where each role writes/reads + when + how to signal each other via the filesystem alone. NOT a discipline (no cognitive operation); NOT a runner spec (no orchestration); a protocol artifact at `cognitive_harness/protocols/<name>.md`.
- **MN2 — "Worker-write side" vs "routeman-output side"** is the design's natural partition. ROUTEMAN-OUTPUT (24-00 committed): `_navig.md`, `routeman.md`, hybrid placement, persistent lifecycle. WORKER-WRITE (this inquiry): inquiry-folder structure + per-discipline canonical filenames + per-discipline completion signaling + post-CONCLUDE archive semantics.
- **MN3 — "Choreography"** = the inter-role timing: when does routeman fire (per the audit's commitment: at routeman-invocation-end of the runner); what state must exist for it to fire (the worker's discipline output complete per the verdict-line check); what happens after (routeman's `_navig.md` + `routeman.md` written + audit consumes them).

## SV2 — Anchor-Informed Understanding

The protocol design is **largely a documentation exercise** with three genuinely-novel design choices:

1. **Per-discipline write-completeness signal.** Adopt the existing `**Overall: PROCEED**` verdict-line pattern (from RESUME §2) as the explicit signal; the canonical filename's presence + the verdict line = write-complete. No new marker file needed.

2. **Atomic-write via rename.** Workers write to `<name>.tmp` then `mv <name>.tmp <name>` — the canonical file appears atomically. No need for explicit lock files; no in-flight states visible to routeman.

3. **Scan-scope economy at L0 = full-scan; at L2+ = mtime-filtered.** Document both; ship the L0 variant; L2+ becomes the extension hook.

Everything else (folder topology = canonical `devdocs/inquiries/` + branch nesting; filename patterns = `sensemaking.md` etc per discipline conventions; routeman's completion-emission = `_navig.md` + `routeman.md` per 24-00; partial-failure handling = 3-tier from 24-40 + atomic-write mitigation + idempotent reads) is **documenting existing conventions explicitly**.

The protocol's natural artifact location is `cognitive_harness/protocols/file_system_protocol.md` (or a more specific name like `routeman_io_protocol.md`). Spec organization: one section per sub-aspect (SP1-SP7) + a Failure Modes section + an Extension Hooks section for L2+.

## Phase 2 — Perspective Checking

### Technical / Logical perspective

The protocol is a contract specification: it defines invariants that workers + routeman + runners must maintain. Technically:
- Workers maintain: canonical filename + atomic write + verdict-line at end.
- Routeman maintains: scan-from-canonical-locations + read-only on worker outputs + atomic-write own outputs.
- Runners maintain: invoke workers + routeman in proper order; read routeman's output to surface FLAG/RE-RUN/ERROR to user.

The contract is satisfiable by file-system operations alone. No race conditions are introduced by the contract; existing ones (e.g., two workers writing the same file) are not addressed because the architecture doesn't currently have them (single worker per inquiry).

### Human / User perspective

The user benefits from the protocol being explicit because: (a) future SKILL.md authors know what conventions to follow; (b) debugging is easier (a missing `**Overall: PROCEED**` line tells them what went wrong); (c) the audit's verdicts are interpretable in terms of canonical file patterns.

The user does NOT need to know the protocol's internals at L0 — the runners hide them. The protocol's existence is for future-design + debugging consistency.

### Strategic / Long-term perspective

The protocol is a **load-bearing infrastructure artifact** that downstream work depends on: the audit (06:00), Q14 cross-inquiry aggregation, future multi-head architecture, future SKILL.md authoring. Committing it now (even if largely documenting existing conventions) makes all of these downstream items unblocked.

At L4+ multi-head, the protocol's scan-scope economy + partial-failure handling become operationally critical (N concurrent workers + routeman scanning across them). The L2+ extension hooks must be plausible enough that L4+ can build on them without a redesign.

### Risk / Failure perspective

- **R1 — The protocol over-documents and feels redundant.** If 80% is documenting existing conventions, readers may dismiss it as filler. Mitigation: structure the protocol as "this is the contract; here's where the conventions came from" with cross-references, so future inquiries can find the canonical source without re-reading the inherited artifacts.
- **R2 — The protocol under-documents and fails to constrain.** If something is implicit ("workers write canonical filenames"), a future SKILL.md author may violate it by accident. Mitigation: enumerate filename patterns + sections explicitly.
- **R3 — The atomic-write convention isn't followed by workers.** If a worker writes directly (no `.tmp`-then-rename), routeman might read a half-written file. Mitigation: the protocol commits the convention; workers' SKILL.md must adopt; runners can validate (check for `.tmp` files in inquiry folder = sign of crashed worker).
- **R4 — Scan-scope economy fails as corpus grows.** At ~hundreds of inquiry folders, full-scan becomes slow. Mitigation: L2+ extension hook for mtime-based filtering; document the trigger (when full-scan exceeds N seconds).
- **R5 — Worker crash mid-write leaves a `.tmp` file orphaned.** Routeman ignores it (only canonical-named files are scanned), but the orphan accumulates. Mitigation: periodic cleanup (a maintenance task; not the protocol's job per se, but flag for L2+).

### Resource / Feasibility perspective

The protocol's authoring cost is small (it's largely documentation). Implementation cost is zero (existing conventions already work; this just makes them explicit). Workers may need minor SKILL.md updates to commit to atomic-write — small per-discipline change.

### Ethical / Systemic perspective

The protocol enables the audit (06:00) and future cross-discipline coordination. Systemically it raises the bar for future SKILL.md authors (they must follow conventions explicitly), which is a good thing for long-term project coherence.

### Definitional / Internal Consistency perspective

Check:
- Does the protocol contradict any established commitment? **No.** It inherits 24-00, 16-31, 24-40, 06-00, the runner specs, the discipline specs, CONCLUDE, branch_inquiry, RESUME. No conflict.
- Does the protocol enable routeman's enumerate-all identity? **Yes** — observe-only on worker outputs; never modifies them.
- Does the protocol violate the isolated-session + file-scanning architecture? **No** — it formalizes it.

### Definitional / Frame-exit Completeness perspective

**Gating predicate check:** does the inquiry's commitments include terms inherited from prior findings used across ≥2 distinct values/levels WITHIN this inquiry's own committed structures?

- **"Inquiry folder"** — used as one referent (folder at `devdocs/inquiries/...`). Single-value. Does not fire.
- **"Worker"** — used as one referent (session running an MVL pipeline). Single-value at this level (multi-head would make it multi-value but is future-state). Does not fire.
- **"Completion"** — used at TWO levels: inquiry-level (`_state.md` Status: COMPLETE) and per-discipline-file-level (verdict line). **This is multi-value within the inquiry's commitments.** Gating fires.

**Apply Frame-exit Completeness to "Completion":**

1. **Existence Enumeration:** what does "completion" refer to project-wide? (a) Inquiry-level (CONCLUDE-driven `_state.md` Status); (b) per-discipline-file-level (verdict line at end); (c) per-routeman-invocation-level (the audit's PROCEED verdict, per 06-00); (d) per-iteration-level (an MVL iteration completing, possibly with multiple discipline outputs).
2. **Role Assessment:** the protocol's frame includes (a) and (b) explicitly. (c) is referenced (the audit's verdict consumes write-completeness signals from (a)/(b) but is a downstream artifact). (d) is an MVL/MVLw iteration concept that maps onto (a) at iteration-end. All referents identified; protocol's frame includes the load-bearing ones (a) and (b); (c) is a consumer not a referent; (d) reduces to (a).
3. **Verdict Rigor:** the protocol's "completion" is operationally two-level (inquiry + per-discipline-file). The boundary is clean: the per-discipline-file level fires at each discipline output; the inquiry level fires at CONCLUDE. No clean-resolution issue.
4. **Residual / Coverage Justification:** is there a completion-related concern not captured? The protocol's per-discipline-file completion + inquiry completion + (referenced) routeman completion + (mapped) iteration completion together cover all completion semantics the design needs. No residual.

Frame-exit perspective: completion has 2 in-scope levels + 1 downstream reference + 1 reducible. The protocol's framing is coherent.

### Phase / Calibration-State perspective

**Phase / Calibration-State perspective check:** does this rule depend on calibration the current project state has?

**YES** — the scan-scope economy (SP7) depends on the corpus size + invocation rate (both autonomy-phase-dependent). At L0 (small corpus + low rate), full-scan is fine. At L4+ (large corpus + high rate), mtime-filtered or batched scans become necessary.

The Phase / Calibration-State perspective fires. Applied:
- **At L0:** full-scan; canonical conventions; atomic-write; 3-tier failure handling. Ships with the L0 variant.
- **At L1/L2:** continue with L0 variant; monitor scan-scope cost.
- **At L4+:** mtime-filtered scan; possible parallel-worker locking; possible scan-scope sharding. The L0 variant has documented extension hooks for these (not implemented).

This perspective tells the design: ship the L0-appropriate variant with documented extension hooks; don't commit to L4+ behavior at first ship.

## SV3 — Multi-Perspective Understanding

Eight perspectives converge on a specific design shape: the protocol is **80% documentation of existing conventions + 20% genuinely-novel design** (atomic-write convention, scan-scope economy L0/L2+ progression, partial-failure handling explicit). The novel design pieces are small, well-precedented (atomic-write is POSIX standard; 3-tier failure handling is 24-40's pattern; verdict-line is RESUME's pattern), and don't require new infrastructure.

The protocol's natural form: a `cognitive_harness/protocols/<name>.md` file with one section per sub-aspect (SP1-SP7) + a Failure Modes section + an Extension Hooks section. Most sections largely cite + cross-reference existing artifacts; a few (atomic-write, scan-scope economy) commit new conventions.

## Phase 3 — Ambiguity Collapse

### Ambiguity 1: Per-discipline write-completeness — verdict line vs Status field vs marker file?

**Vague term:** "write-completeness signaling" — does the signal live in the discipline's own output file (verdict line) or in the inquiry's `_state.md` (Status field) or as a separate marker file?

**Strongest counter-interpretation:** a separate marker file (e.g., `sensemaking.md.done`) would be the most explicit signal — completely unambiguous; doesn't depend on parsing the discipline's output. The verdict-line approach requires parsing markdown for a specific pattern; that's more fragile.

**Why the counter-interpretation fails (structural grounds):** the marker-file approach introduces a NEW convention (`.done` suffix); a new file per discipline (5× more files); a new state to maintain (the marker file's content vs absence); and a new failure mode (marker file written but discipline file isn't, or vice versa). The verdict-line approach REUSES an existing project convention (RESUME's verdict reading); pattern-precedent exists; no new files. The atomic-write convention solves the "discipline file is fully written" question; the verdict-line confirms the discipline finished its self-assessment.

**Confidence:** HIGH that verdict-line + atomic-write is the right combination; marker-file adds complexity without benefit.

**Resolution:** the write-completeness signal is **two-part**: (a) the canonical filename exists (per atomic-write, this means fully written); (b) the file contains a `**Overall: PROCEED**` / `FLAG` / `RE-RUN` line near the end (RESUME's pattern). Both must be true for the file to be considered write-complete.

**What is now fixed?** Verdict-line + atomic-write is the per-discipline write-completeness signal.

**What is no longer allowed?** Marker files as the primary signal; relying on `_state.md` Status for per-discipline completion (it operates at inquiry level).

**What now depends on this choice?** Routeman + audit's scan logic: check canonical-filename existence + verdict-line presence.

### Ambiguity 2: Scan detection — full scan vs mtime-filtered vs marker-based?

**Vague term:** "scan detection mechanism" — how does routeman decide what to read on each invocation?

**Strongest counter-interpretation:** marker-based (e.g., routeman writes a `last_scan_time` file; on next scan, only read files modified after that) would be more efficient than full-scan and more robust than mtime-only (which depends on filesystem mtime reliability).

**Why the counter-interpretation fails (structural grounds):** at L0 corpus size (~20-50 inquiry folders), full-scan is cheap and avoids the bookkeeping of marker files. Marker-based introduces a new artifact + a new failure mode (marker file lost = full re-scan; marker file stale = miss files). mtime-filtered is a natural intermediate (no new artifact; uses POSIX mtime). The marker-based approach is over-engineering at L0.

**Confidence:** HIGH that L0 full-scan + L2+ mtime-filtered is the right progression; marker-based is L4+ or never.

**Resolution:** at first ship, routeman performs **full scan of all inquiry folders** at each invocation. As the corpus grows (extension trigger: when full-scan time exceeds a calibratable threshold), shift to **mtime-filtered scan** (only read files with mtime > last_scan_time). Marker-based scan is preserved as a research-frontier candidate for L4+ if mtime proves unreliable.

**What is now fixed?** L0 ships full-scan; mtime-filtered is the L2+ extension; marker-based is preserved as research frontier.

**What is no longer allowed?** Marker-based scan at first ship.

**What now depends on this choice?** Performance section of the protocol; the L2+ extension hook is explicit.

### Ambiguity 3: Partial-failure handling — recovery vs detection-only?

**Vague term:** "partial-failure handling" — does the protocol attempt to recover from worker crashes / malformed files / scan interruptions, or just detect them?

**Strongest counter-interpretation:** recovery (e.g., re-invoke the failed worker; quarantine the malformed file) would be more user-friendly than detection-only.

**Why the counter-interpretation fails (structural grounds):** recovery introduces orchestration logic that doesn't belong in a file-system protocol — re-invocation belongs to the runner; quarantine belongs to a maintenance task. The protocol's job is to define what the file-system state means + what the readers (routeman + audit) do when they encounter failures. Recovery is a separate concern.

**Confidence:** HIGH that the protocol is detection-only; recovery is the runner's or human's job.

**Resolution:** the protocol's partial-failure handling is **detection-only via 3-tier failure handling** (INFO / ERROR / ERROR per 24-40's pattern):
- **Worker crash mid-write:** atomic-write prevents the read race; orphan `.tmp` files exist but are ignored (filename mismatch). INFO if missing canonical file.
- **Malformed file content:** routeman/audit parsing fails → ERROR halt + flag to user.
- **Routeman scan timing out:** routeman emits partial Route Map + INFO note "scan incomplete, re-run to refresh." Re-running is idempotent.

Recovery actions (re-invoke worker; clean up `.tmp` files; etc.) are outside the protocol's scope.

**What is now fixed?** Detection-only; 3-tier failure handling inherited from 24-40.

**What is no longer allowed?** Recovery semantics in the protocol; the protocol describes states + detection rules only.

**What now depends on this choice?** The protocol's Failure Modes section; the runners' invocation logic (the runner may CHOOSE to re-invoke on detected failure, but that's runner-side).

### Ambiguity 4: Protocol's artifact name + location

**Vague term:** "the protocol" — what should it be named and where should it live?

**Strongest counter-interpretation:** an embedded section in each runner's SKILL.md is sufficient; no separate protocol file needed.

**Why the counter-interpretation fails (structural grounds):** the protocol is cross-runner (works for /MVL, /MVLw, future runners); embedding it in each runner would duplicate text + create drift. Existing project pattern: cross-cutting protocols live at `cognitive_harness/protocols/<name>.md` (`branch_inquiry.md`, `conclude.md`, `resume.md`, `loop_diagnose.md`, etc.). The protocol belongs there.

**Confidence:** HIGH that a separate protocol file is the right artifact.

**Resolution:** the protocol lives at **`cognitive_harness/protocols/inquiry_filesystem_protocol.md`** (name chosen to emphasize "inquiry folder + file-system protocol" — distinguishable from other protocols + descriptive). The runners + worker disciplines + routeman SKILL.md cross-reference this protocol for their file-system commitments.

**What is now fixed?** Protocol artifact name + location.

**What is no longer allowed?** Embedding the protocol's content in runner SKILL.md or worker discipline specs.

**What now depends on this choice?** The protocol authoring (a follow-up COULD); cross-references from runners + workers + routeman.

*Refinement note — Load-bearing concept test (applies at this Phase 3):*

Test load-bearing concepts:

- **"File-system protocol"** — domain-property-vs-external-default test: is this the project's actual concept? **The Q5 source uses this term directly; the user's gating treats it as the design's deliverable. The project's actual concept. PASS.**
- **"Worker session"** — proxy-vs-structural test: does it represent a real structural distinction? **YES — 16-31's correction commits the isolated-session architecture explicitly. PASS.**
- **"Atomic-write"** — domain-terminology test: is this a project term or external default? **External (POSIX) but well-grounded — the rename(2) atomicity is universal across modern filesystems. PASS as external-default-with-strong-grounding.**
- **"Per-discipline write-completeness"** — coined-term: does it match the user's language and project vocabulary? **The user's gating uses "write-completeness signaling"; the inquiry's resolution clarifies it operates at per-discipline file level (vs inquiry level). The clarification is internal but reads cleanly. PASS.**
- **"Scan-scope economy"** — coined-term from 16-31's FF-5; reused in this inquiry. **PASS (inherited).**

All load-bearing concepts pass.

*Refinement note — Specific-vs-pattern recognition cue (applies at this Phase 3):*

The inquiry's anchors are built from a specific population (the 5 active discipline specs; the 2 runners; the inquiry-folder convention as observed; the 8 routeman-chain findings). **Are these specific examples THE WHOLE PROBLEM, or a few cases of a wider pattern?**

The wider pattern: any cross-role file-mediated protocol in a project with similar isolated-session architecture would face the same design surface. Other potential application: if /reflect were active, /reflect's interaction with workers via files would need the same protocol; if a new "synthesize" boundary discipline shipped, same. The specific examples ARE specific to the current routeman-chain; the protocol's pattern generalizes; the protocol's content is routeman-specific.

This is honest scoping: the protocol is currently single-consumer (routeman) but the pattern is general. Documenting this distinction prevents future inquiries from over-claiming universality.

## SV4 — Clarified Understanding

After ambiguity collapse:

- **Per-discipline write-completeness:** verdict-line + atomic-write (two-part check; reuses existing patterns).
- **Scan detection:** L0 full-scan; L2+ mtime-filtered (extension hook); marker-based as research frontier.
- **Partial-failure handling:** detection-only via 3-tier failure handling (INFO / ERROR / ERROR); recovery is outside scope.
- **Protocol artifact:** `cognitive_harness/protocols/inquiry_filesystem_protocol.md`.

The remaining live design choices:

- Exact text + section organization of the protocol file.
- The mtime-filtered extension hook's threshold (when to trigger transition from L0 to L2+).
- The completion-emission-shape commitment for routeman (file presence + verdict-line in `_navig.md`? a status field?).

## Phase 4 — Degrees-of-Freedom Reduction

### Fixed

- Protocol lives at `cognitive_harness/protocols/inquiry_filesystem_protocol.md`.
- Inherits 24-00's ROUTEMAN-OUTPUT commitments verbatim.
- Inherits 16-31's isolated-session + file-scanning architecture.
- Inherits 24-40's 3-tier failure handling (INFO / ERROR / ERROR).
- Atomic-write via `<name>.tmp` + rename is the worker's write convention.
- Verdict-line `**Overall: PROCEED**` / `FLAG` / `RE-RUN` at end of each discipline output is the per-discipline write-completeness signal.
- `_state.md` Status field is the inquiry-level completion signal (existing convention).
- Routeman performs full scan of `devdocs/inquiries/` + branch nesting at first ship (L0).
- Routeman is a singleton scanner (N inquiry folders → 1 routeman session); the audit + downstream consumers read routeman's outputs separately.
- Detection-only on failures; recovery is runner/human concern.

### Eliminated

- Marker files (`.done` suffix files) for per-discipline completion (verdict-line + atomic-write replaces).
- Recovery semantics in the protocol (not the protocol's job).
- Marker-based scan detection at first ship (over-engineering; mtime-based or full-scan is sufficient).
- Embedding the protocol in runner SKILL.md (separate file; cross-referenced).
- In-context parameter pass options (architecturally eliminated by 16-31).

### Remaining variables

- Protocol file's section organization + exact text.
- The mtime-filtered extension hook's transition trigger (calibratable threshold).
- Routeman's completion-emission shape: file presence + verdict-line in `_navig.md` vs a status field somewhere.
- How explicit to make worker-side commitments in the protocol (one section per discipline? a generic worker-write contract?).

## SV5 — Constrained Understanding

The design space is dominated by structural choices (artifact location, section organization, completion-emission shape). The technical content is largely settled (verdict-line + atomic-write + 3-tier failure handling + full-scan-now + mtime-filtered-later).

The constraint set provides clear Critique criteria:
- Protocol must inherit verbatim from 24-00 (D-Inheritance).
- Protocol must honor 16-31's architecture (D-Architecture).
- Protocol must work at L0 with documented L2+ hooks (D-PhaseFit).
- Protocol must NOT introduce new infrastructure (D-NoNewInfra).
- Protocol must NOT preclude multi-head (D-MultiHead).
- Protocol must support the audit's read patterns (D-AuditCompatibility).

## Phase 5 — Conceptual Stabilization

### Conceptual model

The file-system protocol is a **cross-cutting contract artifact** at `cognitive_harness/protocols/inquiry_filesystem_protocol.md` that formalizes the WORKER-WRITE side of the file-system communication between worker sessions, routeman, and runners. Its content is **largely documentation of existing project conventions** (folder topology, filename patterns, `_state.md` Status semantics) plus **three genuinely-novel design pieces** (atomic-write via rename, verdict-line as per-discipline write-completeness signal, scan-scope economy L0-full-scan / L2+-mtime-filtered progression).

The protocol's structure: one section per sub-aspect (SP1-SP7) — folder topology, filename patterns, write-completeness signaling, completion-emission, partial-failure handling, scan detection, scan-scope economy. Plus a Failure Modes section covering the 3-tier inherited from 24-40, plus an Extension Hooks section documenting L2+ progressions (mtime-filtered scans, marker-based scans as research frontier, parallel-worker locking for multi-head).

The protocol composes with existing artifacts: inherits 24-00's ROUTEMAN-OUTPUT commitments; honors 16-31's architecture; reuses 24-40's failure-handling vocabulary; references 06-00's audit-consumer dependency; cross-references the runners + worker discipline specs as consumers.

### Saturation indicators

- **Perspective saturation:** 8 perspectives (Technical, Human, Strategic, Risk, Resource, Ethical, Definitional/Internal, Definitional/Frame-exit, Phase/Calibration-State) produced shifts in SV2 (largely-documentation insight) + SV3 (8-perspective convergence). Saturation REACHED — additional perspectives unlikely to surface new structural anchors.
- **Ambiguity resolution ratio:** 4 of 4 identified ambiguities resolved with HIGH confidence. 4/4 = 100%.
- **SV delta:** SV6 vs SV1 — large shift. SV1 saw 7 independent design choices; SV6 sees 80% documentation + 20% novel design (3 specific pieces) + 1 artifact name + 4 fixed architectural inheritances.
- **Anchor diversity:** anchors from 5 types (Constraints C1-C10, Key Insights KI1-KI7, Structural Points SP-S1-S4, Foundational Principles FP1-FP5, Meaning-Nodes MN1-MN3). Diverse.

### Accommodation trigger check

Perspectives integrated cleanly; no model misfit detected. Accommodation trigger does NOT fire.

### Meta-Inspection cross-reference

Hooks checked:
- H1 (candidate set): protocol artifact form (separate file vs embedded sections) — converged on separate file.
- H2 (frame scope): the WORKER-WRITE side is the inquiry's frame; ROUTEMAN-OUTPUT is scope-out.
- H3 (question framing): the user's "dive deep" framing supports full pipeline at depth; not pre-biased toward one option.
- H4 (concept names): tested in Load-bearing concept test; all PASS.
- H5 (motivating examples): tested in Specific-vs-pattern; routeman-current-state confirmed; generalization is research frontier.
- H6 (model fit): Accommodation trigger not fired.
- H7 (phase/calibration state): Phase/Calibration-State perspective fired; L0-with-L2+-hooks committed.
- H8 (self-reference): no self-reference concern; the protocol designs file-mediated interactions, not itself.
- H9 (user language alignment): "file-system protocol" + "worker-write side" + "completion-emission" all preserve user vocabulary.

No hook fires a re-stabilization signal.

## SV6 — Stabilized Model

The file-system protocol is a **separate artifact at `cognitive_harness/protocols/inquiry_filesystem_protocol.md`** that:

**Documents existing conventions explicitly:**
- Folder topology: `devdocs/inquiries/<YYYY-MM-DD_HH-MM__slug>/` (root) + `[parent]/branches/[branch_id]/` (branch). Routeman scans these recursively at L0.
- Filename patterns: per-discipline canonical names (`sensemaking.md`, `innovation.md`, `critique.md`, `decomposition.md`, `surfacing.md`); inquiry-level files (`_branch.md`, `_state.md`); post-CONCLUDE (`finding.md`, `docarchive/` with archived discipline outputs).
- Section structures: each discipline emits its 5-test / phase output structure per its SKILL.md commitment; the verdict-line `**Overall: PROCEED**` / `FLAG` / `RE-RUN` near the end is the per-file completion marker.
- `_state.md` Status field: ACTIVE during pipeline; COMPLETE after CONCLUDE.

**Commits three genuinely-novel design pieces:**
- **Atomic-write convention:** workers write `<name>.tmp` then `mv <name>.tmp <name>`. Routeman never reads half-written files because the canonical filename only exists when fully written.
- **Per-discipline write-completeness signal:** two-part check — (a) canonical filename exists + (b) verdict-line present at file end. Both true = write-complete.
- **Scan-scope economy progression:** L0 = full scan of all inquiry folders; L2+ = mtime-filtered scan (extension hook); marker-based research frontier.

**Inherits architectural commitments:**
- 24-00's ROUTEMAN-OUTPUT (`_navig.md` + `routeman.md` + hybrid placement + persistent lifecycle).
- 16-31's isolated-session + file-scanning architecture.
- 24-40's 3-tier failure handling (INFO = absent / ERROR = malformed / ERROR = out-of-range).
- 06-00's audit consumer dependency (the protocol's commitments must support the audit's per-mode dispatch table).
- Runner specs (MVL, MVLw) + worker discipline specs (referenced as consumers).

**Defines partial-failure handling (detection-only):**
- Worker crash mid-write: atomic-write prevents read race; orphan `.tmp` files ignored by scan.
- Malformed file content: parser fails → ERROR halt + flag to user.
- Scan timing out: emit partial Route Map + INFO note; re-running is idempotent.
- Recovery is the runner's / human's job; not the protocol's scope.

**Documents L2+ extension hooks:**
- Mtime-filtered scan (trigger: full-scan time exceeds calibratable threshold).
- Parallel-worker locking (when multi-head ships).
- Marker-based scan (if mtime proves unreliable; research frontier).

**Defers 4 design choices to per-piece adjudication in Decomposition + Innovation + Critique:**
- (P-spec) Protocol file's exact section organization + text.
- (P-trigger) Mtime-filtered extension hook's transition trigger.
- (P-emission) Routeman's completion-emission shape commitment.
- (P-worker-detail) How explicit to make worker-side commitments (per-discipline section vs generic worker contract).

### Difference from SV1

SV1 saw 7 independent design choices with FF-1 through FF-5 as the open frontiers. SV6 sees the protocol as 80% documentation + 20% novel design with 4 specific live choices remaining. The novelty concentrates on 3 small pieces (atomic-write, verdict-line completeness, scan-scope progression); everything else is inherited or documented.

---

## Telemetry

- **Perspectives applied:** 9 (Technical, Human, Strategic, Risk, Resource, Ethical, Definitional/Internal, Definitional/Frame-exit, Phase/Calibration-State).
- **Anchor types produced:** 5 (Constraints, Key Insights, Structural Points, Foundational Principles, Meaning-Nodes).
- **Anchor count:** 29 distinct anchors (10 C + 7 KI + 4 SP-S + 5 FP + 3 MN).
- **Ambiguities identified:** 4; **resolved with HIGH confidence:** 4. Ratio: 4/4 = 100%.
- **SV delta (SV1 → SV6):** large — from "7 independent design choices" to "80% documentation + 20% novel design, 4 specific live choices."
- **Failure modes checked:** all 6 (Status Quo Bias, Premature Stabilization, Anchor Dominance, Perspective Blindness, Clean Resolution Trap, Self-Reference Blindness). None triggered.
- **Meta-Inspection hooks:** 9 checked; none fired re-stabilization.
- **Frontier handoff:** Decomposition receives 4 sub-pieces (P-spec, P-trigger, P-emission, P-worker-detail) + the constraint set (5 architectural inheritances; 3 novel design pieces).

**Overall: PROCEED** (sufficient perspective coverage; ambiguities fully resolved; SV delta substantial; concept-level Load-bearing test passed; Meta-Inspection clean; no failure modes triggered).
