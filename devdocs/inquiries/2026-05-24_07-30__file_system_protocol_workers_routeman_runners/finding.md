---
status: active
model: claude-opus-4-7[1m]
effort: max
---
# Finding: File-system protocol between worker sessions, routeman, and runners (Q5 dive-deep)

## Question

(from `_branch.md`)

Routeman (the renamed `/navigation` cycle-consumer designed at `devdocs/inquiries/2026-05-23_14-39__routeman_discipline_design/finding.md`) runs in an isolated session per the 2026-05-23 16:31 architectural correction at `devdocs/inquiries/2026-05-23_16-31__routeman_isolated_session_correction/finding.md` and reads worker-produced inquiry-folder artifacts via file-scanning. Routeman's own write side (the ROUTEMAN-OUTPUT — what filenames routeman writes, where they live, what lifecycle they have) was committed by `devdocs/inquiries/2026-05-24_00-20__routeman_persistence_and_invocation_modes/finding.md` (file names `_navig.md` + `routeman.md` aliased to the persistence protocol's `_frontier.md` + `navigation.md`; hybrid placement by invocation scope; persistent + in-place evolution + append lifecycle).

What remained open at Q5 in the routeman frontier-questions finding at `devdocs/inquiries/2026-05-23_15-20__routeman_implementation_frontier_questions/finding.md` was the WORKER-WRITE side + the inter-role choreography between three roles: (a) worker sessions running MVL pipelines and writing inquiry-folder artifacts; (b) routeman scanning inquiry folders to read those artifacts; (c) runners (`/MVL`, `/MVLw`, future) invoking workers and routeman at appropriate moments. The 16:31 correction explicitly opened 5 sub-frontiers as the design surface: FF-1 (scan detection mechanism), FF-2 (folder topology of the scan target), FF-3 (write-completeness signaling), FF-4 (partial-state read protection), and FF-5 (scan-scope economy).

The user invoked this /MVLw inquiry with the explicit instruction to "dive deep" on Q5. The inquiry covers seven sub-aspects: (1) folder topology routeman scans; (2) filename patterns and section structures workers write; (3) per-discipline write-completeness signaling; (4) routeman's completion-emission shape; (5) partial-failure handling for worker crashes, malformed content, and scan timeouts; (6) scan detection mechanism; (7) scan-scope economy as the inquiry corpus grows. The first five come from the user's gating in the Q5 input; the sixth (FF-1) and seventh (FF-5) are added because the candidate resolution path explicitly states the inquiry "should resolve or document the correction finding's FF-1 through FF-5 sub-questions in the same pass."

The deliverable is a protocol specification SKILL.md authoring + runner-spec updates + worker-pipeline conventions can adopt verbatim, sufficient to graduate Q5 from "PARTIALLY ANSWERED (routeman-output side committed; worker-write side remains open)" to "RESOLVED-WITH-DESIGN" (matching the resolution status of Q1, Q3, Q4, Q10).

The goal: an actionable design that addresses all 7 sub-aspects; preserves routeman's enumerate-all identity and the isolated-session + file-scanning architecture from 16:31; preserves the ROUTEMAN-OUTPUT commitments from 24-00 (no re-litigation); is feasible at L0 (the project's current autonomy level — no schedulers, no message queues, no daemons) with documented L2+ extension hooks; commits options per piece rather than punting to "future work."

## Finding Summary

- **The protocol ships as a new file at `cognitive_harness/protocols/inquiry_filesystem_protocol.md`**, aspect-organized (one section per sub-aspect SP1-SP7 plus cross-cutting Failure Modes + L2+ Extension Hooks + Cross-References sections), following the established pattern of existing protocols (`branch_inquiry.md`, `conclude.md`, `outcome_review.md`, `multi_resolution_navigation.md`). A separate file (rather than embedding the contract in each runner's SKILL.md or each worker's spec) is the project's established pattern for cross-cutting concerns and avoids documentation drift across multiple runners + worker discipline specs. The protocol's content is approximately 80% explicit documentation of existing project conventions (folder topology, canonical filename patterns, `_state.md` Status semantics, post-CONCLUDE structure) plus three genuinely-novel design commitments (atomic-write convention, verdict-line as per-discipline write-completeness signal, scan-scope economy L0-to-L2+ progression). The structure makes the existing implicit contract explicit so future SKILL.md authors and downstream consumers (the LAYER-2 audit at `devdocs/inquiries/2026-05-24_06-00__layer2_audit_mechanism_design/finding.md`; the persistence model at 24-00; cross-inquiry aggregation in the future) can reference one canonical artifact.

- **Folder topology is the existing inquiry-folder convention, formally documented.** Root inquiry folders live at `devdocs/inquiries/<YYYY-MM-DD_HH-MM__slug>/` per the runners' creation logic; branch inquiry folders live at `[parent]/branches/[branch_id]/` per `cognitive_harness/protocols/branch_inquiry.md`. Routeman scans both at L0 — full recursive traversal of `devdocs/inquiries/` including all nested `branches/` subfolders. Project-scoped routeman invocations additionally write to `devdocs/navigation/<run-id>/` per the 24-00 hybrid placement commitment. This sub-aspect is largely documentation: no convention is changed; the protocol makes the scan target explicit. FF-2 from 16:31 is resolved by this section.

- **Filename patterns and section structures are the existing per-discipline canonical names, formally documented.** Each worker discipline writes a canonical-named output file in the inquiry folder: `sensemaking.md` (the /sense-making discipline), `innovation.md` (/innovate), `critique.md` (/td-critique), `decomposition.md` (/decompose), `surfacing.md` (/surfacing). Inquiry-level files (`_branch.md` for question + goal context, `_state.md` for pipeline progress) are written by the runner. Post-CONCLUDE files (`finding.md` in inquiry root; `docarchive/` containing archived discipline outputs) are written by the CONCLUDE protocol. Each discipline output ends with a Telemetry section emitting a verdict line in the format `**Overall: PROCEED**` / `**Overall: FLAG**` / `**Overall: RE-RUN**` (per the existing discipline-spec commitments, consumed by `cognitive_harness/protocols/resume.md` §2). This sub-aspect is also largely documentation: the conventions exist in the discipline specs; the protocol consolidates them at one reference location.

- **The atomic-write convention is committed as a MUST.** Workers writing any inquiry-folder artifact write the content to `<canonical_name>.tmp` first, then atomically rename to `<canonical_name>` (using POSIX `rename(2)` semantics, which guarantees atomicity on all modern filesystems including ext4, APFS, btrfs, ZFS). The canonical filename only exists when fully written; routeman scanning a folder mid-write sees only the `.tmp` file (which it ignores per the canonical-filename-only-is-valid rule) plus whatever canonical files were finalized before the in-progress write started. This eliminates the read-half-written-file race entirely without introducing new infrastructure (no lock files, no daemons, no atomic-write libraries — just the POSIX primitive every project uses already). Worker discipline SKILL.md files commit to this convention per a downstream COULD action; runner can detect orphan `.tmp` files at routeman invocation-end as an optional worker-failure indicator. The MUST is enforced at code-review time at first ship; the substrate for an automated check (orphan `.tmp` detection) is available via the audit at 06-00 as a substrate sub-check. The protocol's atomic-write commitment also serves as the mitigation for FF-4 (partial-state read protection) from 16:31.

- **Per-discipline write-completeness is a two-part check** (resolves FF-3 from 16:31): (a) the canonical filename exists in the inquiry folder (which, given atomic-write, means the file is fully written), AND (b) the file contains a verdict line in the format `**Overall: PROCEED**` / `FLAG` / `RE-RUN` near the end (per the established pattern at `cognitive_harness/protocols/resume.md` §2). Both must be true. The verdict line confirms the discipline finished its self-assessment — atomic-write alone could mean "the file was fully written, but the discipline output is incomplete because the discipline crashed during self-assessment." The verdict line catches that case. Backward-compatibility: if a discipline output lacks the verdict line (e.g., from an older inquiry pre-dating the convention), treat as backward-compat PROCEED with a NOTE — same handling as RESUME §2's existing pattern. This sub-aspect reuses two existing project patterns (atomic-write per POSIX; verdict-line per RESUME §2) rather than inventing a new convention.

- **Routeman's completion-emission shape combines file-presence with an explicit status field.** Routeman's completion is signaled by two facts: (a) both `_navig.md` and `routeman.md` exist in the appropriate folder (per 24-00's hybrid placement — per-inquiry for inquiry-scoped invocations; `devdocs/navigation/<run-id>/` for project-scoped), via atomic-write (per P2); and (b) `_navig.md`'s YAML frontmatter contains a field `routeman_status: COMPLETE` (added by routeman at the end of its run). The file-presence is the architectural-level commitment from 24-00 (inherited unchanged); the status field is a small additive commitment that makes routeman's completion explicit for downstream consumers (the LAYER-2 audit at 06-00 reads the field as part of its per-mode dispatch). Adding the status field is forward-compatible — the audit's existing dispatch table can be augmented to read it; absence of the field is treated as PROCEED-equivalent backward-compat. The status field is the routeman analog of the per-discipline verdict line, adapted to routeman's state-shaped completion (vs the discipline's verdict-shaped completion). A cross-doc impact note on the audit's design at 06-00 documents the new field availability.

- **Scan detection + scan-scope economy progress through L0 + L2+ stages** (resolves FF-1 and FF-5 from 16:31). At L0 — the project's current autonomy level — routeman performs a full scan of all inquiry folders under `devdocs/inquiries/` (including all nested `branches/` subfolders) at each invocation. Full-scan at L0 corpus size (~20-50 inquiry folders observed empirically as of 2026-05-24) is cheap (well under a second) and avoids the bookkeeping overhead of mtime-filtered or marker-based scanning. The L2+ extension hook commits a calibratable transition trigger: when full-scan time exceeds a threshold (default 5 seconds, calibratable per project measurement), shift to mtime-filtered scan (read only files with mtime greater than the last_scan_time saved between invocations). The marker-based scan approach (where routeman maintains an explicit per-file last-seen-marker) is preserved as a research frontier for L4+ if mtime proves unreliable in practice; this is unlikely on the filesystems the project targets but flagged for posterity. The progression is phase-fit at L0 with explicit operational triggers for each transition; first ship does NOT implement the mtime-filtered logic — only documents it as the extension hook.

- **Partial-failure handling is detection-only via the 3-tier vocabulary** (INFO / ERROR / ERROR) inherited from `devdocs/inquiries/2026-05-24_00-40__autonomy_register_and_discipline_read_protocol/finding.md`'s autonomy-register read protocol pattern. The three partial-failure modes are: (a) worker crash mid-write — atomic-write (P2) mitigates the read race; orphan `.tmp` files exist but routeman ignores them via the canonical-filename rule; if the canonical file never appears, INFO-tier (the inquiry pipeline appears incomplete; user investigates). (b) Malformed file content — when routeman or the audit attempts to parse the file and the parse fails (e.g., YAML frontmatter malformed; required sections absent), ERROR-tier halt + flag (per 24-40's pattern). (c) Routeman scan timing out or interrupted — routeman emits a partial Route Map plus an INFO note indicating the scan was incomplete; re-running routeman is idempotent (re-scanning produces the same outputs given the same inputs) so the next invocation completes. Recovery actions (re-invoking workers; cleaning up orphan `.tmp` files; quarantining malformed inquiries) are explicitly OUT of the protocol's scope — they belong to the runner (which may choose to re-invoke on detected failures) or to maintenance tasks (cleanup) or to the human user. Keeping the protocol detection-only preserves separation of concerns and avoids growing the protocol into an orchestration spec.

- **The design preserves all inherited architectural commitments** verbatim. From 24-00: ROUTEMAN-OUTPUT side (`_navig.md` + `routeman.md` naming, hybrid placement by invocation scope, persistent lifecycle) is not re-litigated. From 16:31: isolated-session + file-scanning architecture is the design's foundation; no in-context parameter passing introduced; no callback semantics. From 24-40: 3-tier failure handling vocabulary is reused. From RESUME §2: verdict-line pattern is reused. From CONCLUDE: archive-to-`docarchive/` and update-`_state.md`-to-COMPLETE are preserved. From branch_inquiry: nested folder structure is preserved. The protocol composes with these existing artifacts rather than replacing any; the audit at 06-00 (a downstream consumer) continues to work without modification, with the small additive enhancement of reading the `routeman_status` field.

- **L0/L1/L2+ phase progression is documented.** At L0 — the project's current state per `docs/autonomy_level.md` — the protocol ships with full-scan + canonical conventions + atomic-write + verdict-line + 3-tier failure handling + status field. Each piece is feasible without new infrastructure. At L1 (one transition forward), the runner can begin auto-validating atomic-write compliance (check for orphan `.tmp` files at routeman invocation-end) and surface results to the user. At L2+ — when the autonomy register graduates per the autonomy ladder's evidence gates — the mtime-filtered scan extension hook activates if full-scan time has crossed the calibratable threshold. At L4+ multi-head (when the project's end-goal architecture lands), parallel-worker locking becomes necessary if multiple workers ever write to the same inquiry folder — preserved as L4+ extension hook (the current single-worker-per-inquiry-folder architecture makes this not-yet-needed). Each phase has explicit extension hooks; first ship does not lock in to any specific autonomy point.

## Inherited Commitments Re-test

The `_branch.md`'s Synthesis Trigger declared 12 prior outputs being synthesized. Each prior's load-bearing commitment is re-tested below.

### Prior 1 — `devdocs/inquiries/2026-05-23_14-39__routeman_discipline_design/finding.md` (routeman design memo)

- **Commitment:** routeman's 3-layer identity (paradigm-instantiation Navigational + prescriptive-extension 4 residuals + cycle-consumer process); the discipline-vs-runner boundary.
  - **Re-test status:** RE-TESTED — PRESERVED.
  - **Evidence:** the design honors all 3 identity layers. The cycle-consumer layer is exactly what the protocol formalizes — routeman consumes worker-written cycle artifacts. The paradigm and prescriptive-extension layers are unaffected (the protocol designs the file-system contract; doesn't touch routeman's discipline content).

### Prior 2 — `devdocs/inquiries/2026-05-23_15-20__routeman_implementation_frontier_questions/finding.md` (frontier-questions finding)

- **Commitment 1:** Q5 is Tier-1; the worker-write side + inter-role choreography is open; the candidate resolution path requires resolving or documenting FF-1 through FF-5 in the same pass.
  - **Re-test status:** RE-TESTED — RESOLVED-WITH-DESIGN.
  - **Evidence:** all 5 FFs resolved (FF-1 → P5 scan detection; FF-2 → P1 folder topology section; FF-3 → P3 two-part check; FF-4 → P2 atomic-write + P6 partial-failure; FF-5 → P5 scan-scope progression). Q5 graduates from PARTIALLY ANSWERED to RESOLVED-WITH-DESIGN. CONCLUDE-side cross-doc impact action: update Q5 in the frontier-questions finding.
- **Commitment 2:** the partial answer from 24-00 (ROUTEMAN-OUTPUT committed; worker-write side remains open).
  - **Re-test status:** RE-TESTED — INHERITED AND COMPLEMENTED.
  - **Evidence:** the design treats ROUTEMAN-OUTPUT as scope-out (no re-litigation); designs WORKER-WRITE + inter-role choreography. The two sides compose into a complete protocol.

### Prior 3 — `devdocs/inquiries/2026-05-23_16-31__routeman_isolated_session_correction/finding.md` (architectural correction)

- **Commitment:** isolated-session + file-scanning architecture; no in-context parameter passing; in-context-pass options eliminated.
  - **Re-test status:** RE-TESTED — PRESERVED + APPLIED THROUGHOUT.
  - **Evidence:** D8 in critique was CRITICAL — the design scored HIGH. All file-system communication is via files; no in-context callbacks; no shared in-memory state. The protocol formalizes exactly what the 16:31 correction implied operationally. The 5 FFs from 16:31's Open Questions are all resolved in the design.

### Prior 4 — `devdocs/inquiries/2026-05-23_18-58__routeman_staged_mapping_and_reasoning_field/finding.md` (staged-mapping)

- **Commitment 1:** stage 1 + stage 2 staged mapping; sub-routes have parent-reference field.
  - **Re-test status:** INHERITED-WITHOUT-RE-TEST.
  - **Reason:** the staged-mapping commitments are about routeman's output content (per-route schema, sub-route relations), not about the file-system protocol. The protocol's commitments (atomic-write for `_navig.md` + `routeman.md`; status field) work for both stage-1 and stage-2 outputs. No interaction.
- **Commitment 2:** `why_this_might_be_important` meta-reasoning field.
  - **Re-test status:** INHERITED-WITHOUT-RE-TEST.
  - **Reason:** same — output-content commitment, not file-system protocol commitment.

### Prior 5 — `devdocs/inquiries/2026-05-24_00-20__routeman_persistence_and_invocation_modes/finding.md` (persistence model)

- **Commitment 1:** `_navig.md` + `routeman.md` naming with documented alias to `_frontier.md` + `navigation.md`.
  - **Re-test status:** RE-TESTED — INHERITED VERBATIM.
  - **Evidence:** the protocol's filename conventions section cites 24-00 as the canonical source for the ROUTEMAN-OUTPUT naming. No re-litigation; no modification.
- **Commitment 2:** hybrid placement by invocation scope (per-inquiry for inquiry-scoped invocations; central `devdocs/navigation/<run-id>/` for project-scoped).
  - **Re-test status:** RE-TESTED — INHERITED VERBATIM.
  - **Evidence:** the protocol's folder topology section documents the hybrid placement as a 24-00 commitment; the audit's parallel `_audit.md` (06-00) follows the same hybrid pattern.
- **Commitment 3:** persistent + in-place evolution + append lifecycle.
  - **Re-test status:** RE-TESTED — INHERITED VERBATIM.
  - **Evidence:** the protocol's lifecycle section cites 24-00 verbatim; no modification.

### Prior 6 — `devdocs/inquiries/2026-05-24_00-40__autonomy_register_and_discipline_read_protocol/finding.md` (autonomy register)

- **Commitment:** the 3-tier failure handling vocabulary (INFO / ERROR / ERROR) for file reads.
  - **Re-test status:** RE-TESTED — PATTERN-INHERITED.
  - **Evidence:** the protocol's partial-failure handling section adopts the 3-tier vocabulary verbatim (24-40 originated; the protocol reuses). INFO for absent files; ERROR for malformed; ERROR for out-of-range. The reuse is a coherence point with 24-40.

### Prior 7 — `devdocs/inquiries/2026-05-24_01-00__adaptive_guidance_generation_mechanism/finding.md` (adaptive guidance)

- **Commitment:** the per-movement-type dispatch table pattern; Stage 1 reads cycle-output files (`critique.md`, `sensemaking.md`, etc.).
  - **Re-test status:** RE-TESTED — DOWNSTREAM-CONSUMER COMPATIBILITY VERIFIED.
  - **Evidence:** Stage 1's per-movement-type reads depend on the protocol's filename conventions + section structures. The protocol explicitly preserves the per-discipline canonical filenames Stage 1 reads. The audit's per-mode dispatch table from 06-00 reuses the same pattern. D9 in critique was HIGH — consumer compatibility preserved.

### Prior 8 — `devdocs/inquiries/2026-05-24_06-00__layer2_audit_mechanism_design/finding.md` (LAYER-2 audit)

- **Commitment 1:** the audit's per-mode dispatch table reads `_navig.md`, `routeman.md`, `docs/autonomy_level.md`, and routeman SKILL.md.
  - **Re-test status:** RE-TESTED — COMPATIBILITY PRESERVED.
  - **Evidence:** the protocol's commitments support the audit's reads: `_navig.md` and `routeman.md` per 24-00 (inherited); `docs/autonomy_level.md` per 24-40 (out of this protocol's scope but referenced); routeman SKILL.md for the spec-coherence check (out of scope but supported). The new `routeman_status` field in `_navig.md` (per P4 of this design) is additive — the audit's dispatch table can be extended to read it. Cross-doc impact note recorded in Next Actions.
- **Commitment 2:** the audit's substrate consumption uses the same 3-tier failure handling.
  - **Re-test status:** RE-TESTED — PATTERN-CONSISTENT.
  - **Evidence:** the protocol's partial-failure handling uses the same 3-tier vocabulary as the audit. Cohesion preserved.

### Prior 9 — `cognitive_harness/protocols/multi_resolution_navigation.md`

- **Commitment:** the persistence protocol routeman uses (frontier-candidate-record schema; lifecycle; resume semantics).
  - **Re-test status:** INHERITED-WITHOUT-RE-TEST.
  - **Reason:** 24-00 adopted the protocol; this inquiry inherits 24-00's adoption. The protocol's content is referenced as the structural base for the ROUTEMAN-OUTPUT side.

### Prior 10 — `cognitive_harness/protocols/branch_inquiry.md`

- **Commitment:** branch inquiry folder structure at `[parent]/branches/[branch_id]/`; parent index `_branches.md`.
  - **Re-test status:** RE-TESTED — INHERITED.
  - **Evidence:** the protocol's folder topology section documents that routeman scans nested `branches/` subfolders recursively. No modification to branch_inquiry's commitments.

### Prior 11 — `cognitive_harness/MVL/SKILL.md` and `cognitive_harness/MVLw/SKILL.md`

- **Commitment 1:** the EXECUTE PIPELINE step ordering (Surfacing → Sensemaking → Decomposition → Innovation → Critique for MVLw; S → I → C for MVL).
  - **Re-test status:** INHERITED-WITHOUT-RE-TEST.
  - **Reason:** the protocol's commitments are about file-system interactions, not pipeline ordering. The runners' invocation choreography is a separate concern (the runner invokes workers in order; the protocol governs what each worker writes when invoked).
- **Commitment 2:** the per-discipline workspace invariant (each discipline writes its canonical output file in the inquiry folder).
  - **Re-test status:** RE-TESTED — DOCUMENTED.
  - **Evidence:** the protocol's filename conventions section enumerates the per-discipline canonical filenames the runners' workspace invariant produces. The protocol formalizes the invariant.

### Prior 12 — Worker discipline specs (`cognitive_harness/sense-making/SKILL.md` + `innovate/SKILL.md` + `td-critique/SKILL.md` + `decompose/SKILL.md` + `surfacing/SKILL.md`)

- **Commitment 1:** each discipline writes its canonical-named output file with the canonical structure.
  - **Re-test status:** RE-TESTED — DOCUMENTED.
  - **Evidence:** the protocol's filename + section structures section references each discipline as the canonical source for filename + section conventions. The protocol does not modify the discipline specs; it consolidates their write commitments at one reference location.
- **Commitment 2:** each discipline emits a verdict line at the end of its output (Telemetry section).
  - **Re-test status:** RE-TESTED — REUSED.
  - **Evidence:** the protocol's per-discipline write-completeness signal (P3 two-part check) reuses the verdict line as the second half of the check. RESUME §2 already reads these verdict lines; the protocol formalizes them as write-completeness signals.

## Next Actions

### MUST

- **What:** Update `devdocs/inquiries/2026-05-23_15-20__routeman_implementation_frontier_questions/finding.md` to mark Q5 as RESOLVED-WITH-DESIGN (matching the resolution-status of Q1, Q3, Q4, Q10), citing this finding. The "PARTIALLY ANSWERED (routeman-output side committed; worker-write side remains open)" notice on Q5 is updated to "RESOLVED-WITH-DESIGN" with the resolution block embedded (analogous to how Q1, Q3, Q4, Q10 were updated when their resolutions landed). The 5 FFs from 16:31 are all resolved per the resolution log.
  - **Who:** CONCLUDE-side cross-doc impact action; the user (or follow-up agent invocation).
  - **Gate:** observable — when this finding is committed and the user is reviewing the chain's state.
  - **Why:** the frontier-questions finding is the routeman implementation chain's status spine; readers consult it for current Q-status. Q5 is currently labeled PARTIALLY ANSWERED; with the protocol design committed by this finding, Q5 graduates to RESOLVED-WITH-DESIGN.

- **What:** Write impact note on the LAYER-2 audit design at `devdocs/inquiries/2026-05-24_06-00__layer2_audit_mechanism_design/finding.md` documenting the new `routeman_status: COMPLETE` field availability in `_navig.md` per P4 of this design. The audit's per-mode dispatch table (specifically for Calibration-Drift and any other mode that consumes `_navig.md`) can be augmented to read the status field as part of its substrate. The audit's existing logic continues to work without modification (the field is additive); the impact note flags the new field as an available augmentation.
  - **Who:** CONCLUDE-side cross-doc impact action.
  - **Gate:** observable — when this finding is committed.
  - **Why:** the audit's design at 06-00 was committed before this protocol's `routeman_status` field decision; readers should know the field is available.

### COULD

- **What:** Author the new protocol file at `cognitive_harness/protocols/inquiry_filesystem_protocol.md` per the design committed in this finding. The protocol file follows the established pattern of existing protocols (`branch_inquiry.md`, `outcome_review.md`): a Loading note, a Purpose section, a When-to-Use section, the 7 aspect sections (folder topology, filename patterns and section structures, atomic-write convention, per-discipline write-completeness, routeman completion-emission, scan detection + scan-scope economy, partial-failure handling), an L2+ Extension Hooks section, a Cross-References section, a Failure Modes section, and a Short Version. Normative content uses MUST / SHOULD per RFC-style convention.
  - **Who:** human author (or a follow-up structural-layer inquiry).
  - **Gate:** condition-bound — when the routeman SKILL.md authoring inquiry is queued; the protocol can ship slightly before or with routeman's SKILL.md for clean L0 integration.
  - **Why:** the design memo is structural; the protocol file is the operational artifact future SKILL.md authoring + runner updates + worker discipline updates reference. Without the protocol file, the design cannot ship.

- **What:** Update each worker discipline's SKILL.md (`cognitive_harness/sense-making/SKILL.md`, `innovate/SKILL.md`, `td-critique/SKILL.md`, `decompose/SKILL.md`, `surfacing/SKILL.md`) to commit the atomic-write convention. Each spec adds a small section under "Save the output" or equivalent: "Write the output using the atomic-write pattern: first write to `<canonical_name>.tmp`, then rename `<canonical_name>.tmp` → `<canonical_name>`. See `cognitive_harness/protocols/inquiry_filesystem_protocol.md` for the canonical convention." This is a small per-discipline edit; total scope = 5 disciplines × a few lines each.
  - **Who:** human author.
  - **Gate:** condition-bound — paired with the protocol authoring; ship together.
  - **Why:** the protocol commits MUST atomic-write; the per-discipline commitments propagate the requirement to the actual write sites.
  - **Depends-on:** the protocol authoring COULD above. This COULD is GATED — do not act until the protocol file exists. The discipline specs reference the protocol; the protocol must exist to be referenced.

- **What:** Update the runner specs at `cognitive_harness/MVL/SKILL.md` and `cognitive_harness/MVLw/SKILL.md` to cross-reference the protocol's commitments at the invocation choreography points (the EXECUTE PIPELINE section commits to invoking workers + (in the future) routeman + the LAYER-2 audit; the protocol's cross-references explain what each invocation's file-system contract looks like). Optionally add an L1-extension-hook section noting the runner can validate atomic-write compliance by checking for orphan `.tmp` files at routeman invocation-end.
  - **Who:** human author.
  - **Gate:** condition-bound — paired with the protocol authoring + routeman SKILL.md authoring; ship together.
  - **Why:** the runners host the invocation choreography; pointing to the canonical protocol prevents documentation drift.
  - **Depends-on:** the protocol authoring COULD above. GATED — do not act until the protocol file exists.

- **What:** Update routeman's SKILL.md (when authored per the 06-00 audit COULDs and the broader routeman-implementation chain) to commit the file-presence + `routeman_status` completion-emission shape per P4 of this design. The SKILL.md's output-writing section commits both files (`_navig.md` + `routeman.md`) via atomic-write + the status field in `_navig.md` frontmatter.
  - **Who:** the routeman SKILL.md authoring inquiry / author.
  - **Gate:** condition-bound — when routeman SKILL.md is being authored.
  - **Why:** routeman's SKILL.md must commit the output-shape contract for consumers to anchor on.
  - **Depends-on:** the protocol authoring COULD above. GATED.

- **What:** Calibrate the scan-scope economy transition threshold (default 5 seconds full-scan time) when the project's corpus growth produces a measurable full-scan time. The trigger is observable — when full-scan starts taking >2 seconds, begin measuring; when it crosses 5 seconds, activate the mtime-filtered extension hook.
  - **Who:** human user / follow-up inquiry.
  - **Gate:** observable — full-scan time crosses threshold.
  - **Why:** the L0/L2+ progression depends on empirical measurement; the calibration is a forward-looking action.

### DEFERRED

- **What:** L4+ parallel-worker locking design — for when multi-head ships and multiple workers ever write to the same inquiry folder. The current architecture is single-worker-per-inquiry-folder (the runner ensures this) so concurrent writes within one folder don't occur. When multi-head architecture lands and this changes, locking semantics (file-based locks via `flock()` or marker files) need design.
  - **Gate:** observable — when multi-head architecture ships AND multiple workers can write to the same inquiry folder.
  - **Why (if revived):** at L4+ the current single-worker-per-folder invariant may not hold; locking becomes necessary to prevent within-folder concurrent-write corruption.

- **What:** Marker-based scan detection research frontier — for if filesystem mtime proves unreliable in practice (e.g., on filesystems with poor mtime granularity or with clock-skew issues across machines). The mtime-filtered approach is the planned L2+ extension; if it fails, marker-based (routeman maintains an explicit per-file last-seen-marker file) is the next fallback.
  - **Gate:** observable — when mtime-filtered scan exhibits failures in practice (missed updates; double-reads).
  - **Why (if revived):** mtime is generally reliable on modern filesystems but exotic configurations can break it; the marker-based approach is the next defensive layer.

- **What:** Runner-mediated atomic-write enforcement (the seed from A2-Cand-3 KILL in Innovation). If discipline-spec atomic-write commitments drift in practice (a future spec edit removes the convention; a new discipline author skips it), runner-mediated enforcement (the runner detects orphan `.tmp` files and quarantines or re-invokes) becomes the next defensive layer.
  - **Gate:** observable — when orphan `.tmp` files accumulate AND can be traced to spec drift (rather than user-canceled invocations).
  - **Why (if revived):** worker-side enforcement is the primary commitment; runner-side enforcement is the fallback if propagation fails.

- **What:** File-presence-only routeman completion (the seed from A4-Cand-1 KILL). If the `routeman_status: COMPLETE` field proves to be never-read by consumers in practice (the audit at 06-00 doesn't update its dispatch table; no other consumer emerges that needs the field), simplify the protocol by dropping the status field.
  - **Gate:** observable — after the audit is updated (per the MUST cross-doc impact note) AND 5+ invocations have used the protocol AND the status field is never queried.
  - **Why (if revived):** simplification of the protocol; reduces the schema overhead of `_navig.md` if the field is dead weight.

## Reasoning

This section walks through the major design decisions.

### Why a separate protocol file (P1: A1-Cand-1 aspect-organized) rather than embedded sections in runners or worker specs?

Embedding the protocol in runner SKILL.md and worker discipline specs would duplicate the contract text across multiple artifacts (currently MVL + MVLw + 5 worker disciplines = 7 places). Documentation drift becomes likely as these artifacts evolve independently. The project's established pattern for cross-cutting concerns is a separate protocol file at `cognitive_harness/protocols/` (e.g., `branch_inquiry.md`, `conclude.md`, `outcome_review.md`, `multi_resolution_navigation.md`); the protocol design adopts this pattern. The aspect-organized structure (one section per sub-aspect rather than one section per role) matches existing protocols and serves the downstream consumer pattern — readers (the audit, future SKILL.md authors) typically need to look up "how does routeman scan files?" (aspect) rather than "what does the worker do?" (role).

### Why atomic-write as a MUST (P2: A2-Cand-1) rather than SHOULD?

SHOULD allows non-conforming workers with documented risk; in practice, a single non-conforming worker breaks routeman's scan-invariant (routeman might read a half-written file). The cost of non-conformance is high (corrupt Route Map; user can't tell); the cost of conformance is low (POSIX rename is universal; workers' SKILL.md update is a few lines). MUST is the right enforcement strength. Runner-mediated atomic-write (the Inverted candidate A2-Cand-3) was rejected because the runner doesn't know discipline-specific write semantics — atomic-write commitment belongs at the write boundary, which is the worker discipline.

### Why two-part check (P3: A3-Cand-1) rather than filename-only?

Filename-only (atomic-write means the file is fully written) misses the case where a discipline crashes during self-assessment. The verdict-line catches this case — if the file is fully written but the discipline didn't finish its self-assessment, no verdict line, so the file is treated as not-write-complete (with backward-compat handling per RESUME §2 for older outputs that pre-date the convention). The marker-file approach (A3-Cand-3) was rejected because it introduces a new convention (`.done` suffix files) with no benefit over reusing RESUME's verdict-line pattern.

### Why status field for routeman completion-emission (P4: A4-Cand-2) rather than file-presence-only?

File-presence-only (A4-Cand-1) is the minimum-viable option that exactly matches 24-00's inheritance. The status field is a small additive commitment (one field in `_navig.md` frontmatter) that gives downstream consumers (the audit at 06-00; future cross-inquiry-aggregation work) an explicit completion signal without having to verify atomic-write integrity themselves. The cost is small (schema extension); the benefit is clearer consumer interface. A4-Cand-1 is preserved as KILL-with-seed: if the status field proves to be never-read in practice, simplification to file-presence-only is the fallback.

### Why full-scan at L0 / mtime-filtered at L2+ (P5: A5-Cand-1)?

At L0 corpus size (~20-50 inquiry folders observed empirically), full-scan is cheap (well under a second) and avoids the bookkeeping overhead of mtime-based filtering. Mtime-filtered from L0 (A5-Cand-4) is premature optimization; full-scan-forever (A5-Cand-3) doesn't scale. The L0/L2+ progression with a calibratable transition trigger (full-scan time exceeds 5 seconds) is the natural scaling pattern. Marker-based scan (preserved as research frontier) is a defensive fallback if mtime proves unreliable on the project's filesystems — unlikely on ext4, APFS, btrfs, ZFS, but flagged for posterity.

### Why detection-only failure handling (P6: A6-Cand-1) rather than recovery?

Recovery actions (re-invoke workers; quarantine malformed inquiries; clean up orphan `.tmp` files) belong to the runner (which orchestrates invocations) or to maintenance tasks (cleanup) or to the human user (judgment about whether to retry, abandon, or investigate). Putting recovery in the protocol would grow it into an orchestration spec — out of scope per the cross-cutting protocol pattern. Inheriting 24-40's 3-tier vocabulary (INFO / ERROR / ERROR) gives the user clear signals; the runner can choose how to respond.

### Why is the design 80% documentation + 20% novel?

The project already has de-facto conventions for almost every sub-aspect: the runners create inquiry folders at canonical paths; the disciplines write canonical-named files; CONCLUDE archives + writes findings; RESUME reads verdict lines; the autonomy register has 3-tier failure handling. The protocol's job for most sub-aspects is to make these explicit at one canonical reference location. The genuinely novel commitments are small: atomic-write via rename (POSIX primitive; new commitment that workers adopt); verdict-line as write-completeness signal (reuses RESUME pattern; commits it as a contract); scan-scope progression (L0 full-scan / L2+ mtime-filtered); status field in `_navig.md`. Each novel piece is small + well-precedented + uses no new infrastructure.

### What could be wrong with this design?

The strongest prosecution concerns from Critique:

- **Atomic-write enforcement is propagation-dependent.** The protocol commits MUST; the actual write sites (worker discipline specs) must adopt. If propagation is incomplete or a future spec author skips the convention, the contract breaks silently. The mitigation is code review + the L2+ runner-mediated enforcement fallback (preserved as DEFERRED).

- **Multi-head within-inquiry-folder concurrent writes are an L4+ concern.** The current single-worker-per-inquiry-folder architecture makes this not-yet-needed; L4+ multi-head changes the architecture and parallel-worker locking becomes necessary. The L4+ extension hook is documented but not implemented at first ship.

- **Verdict-line backward-compat is necessary** for older inquiry-folder content. The protocol's backward-compat clause inherits RESUME §2's pattern (treat absence as PROCEED with NOTE). If RESUME's pattern itself drifts in the future, the protocol's backward-compat would need synchronization.

- **The audit's design at 06-00 needs a minor update** to read the new `routeman_status` field. This is the cross-doc impact captured in Next Actions MUST. The audit's existing logic continues to work; the update is additive (extend the dispatch table to read the new field).

## Open Questions

### Monitoring

- **Whether the atomic-write convention's MUST is followed by worker discipline updates in practice.** Observable when the discipline spec updates ship (per the COULD action) and after 5+ routeman invocations have occurred under the new conventions. If orphan `.tmp` files appear frequently in the wild, propagation is failing; runner-mediated enforcement fallback may need to be revived.

- **Whether full-scan time stays under the 5-second threshold at L0.** Observable when the project's corpus crosses ~100+ inquiry folders. If full-scan time crosses the threshold, the mtime-filtered L2+ extension hook activates.

- **Whether the `routeman_status: COMPLETE` field gets read by downstream consumers** (the audit at 06-00 and any other future consumer). Observable after 5+ invocations have produced `_navig.md` files with the field. If no consumer reads it, the file-presence-only simplification fallback is preserved.

- **Whether the verdict-line backward-compat handling is needed often** in practice. Observable when older inquiry-folder content is scanned by routeman or the audit. If backward-compat triggers frequently, the convention may need stronger enforcement at the discipline-spec level.

### Blocked

- **L4+ parallel-worker locking design** — blocked until multi-head architecture ships AND multiple workers can write to the same inquiry folder. The current single-worker-per-folder invariant makes this not-yet-needed.

- **The protocol file's authoring** — blocked on the routeman implementation chain reaching the SKILL.md authoring stage (the protocol is most coherent if shipped with routeman SKILL.md + runner + worker updates together).

### Research Frontiers

- **Marker-based scan detection** as fallback if mtime proves unreliable — preserved as research frontier per A5-Cand-1's documentation. Revival trigger: mtime-filtered scan exhibits failures in practice.

- **Generalization of the protocol pattern to other cross-role file-mediated contracts** in the project. If a future inquiry surfaces another cross-role file-mediated need (e.g., if /reflect becomes active and needs a similar protocol for /reflect ↔ workers ↔ runners), the protocol pattern (aspect-organized + atomic-write + verdict-line + 3-tier failure + L0/L2+ progression) could generalize.

- **Runner-mediated atomic-write enforcement** as L2+ fallback (per A2-Cand-3's KILL-with-seed) — preserved if discipline-spec atomic-write commitments drift.

### Refinement Triggers

- **If atomic-write propagation fails in worker discipline specs** (the worker SKILL.md updates per the COULDs don't ship, or a future spec author skips the convention), the runner-mediated enforcement fallback (DEFERRED) is the next defensive layer.

- **If the `routeman_status` field is never-read in practice**, simplify the protocol to file-presence-only completion (A4-Cand-1 fallback).

- **If mtime-filtered scan fails in practice** (on the project's filesystems or in cross-machine scenarios), the marker-based scan research frontier is revived.

- **If multi-head shipping changes the single-worker-per-inquiry-folder invariant**, parallel-worker locking becomes necessary; the L4+ extension hook is the design home.

- **If the protocol's aspect-organized structure proves hard to navigate** for SKILL.md authors who want to read about their role specifically, the A1-Cand-3 hybrid (aspect + role summary) is the L2+ refinement.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
Question 5 — What is the file-system protocol between worker sessions, routeman, and any invoking runner?
[Partial answer applied 2026-05-24 per devdocs/inquiries/2026-05-24_00-20__routeman_persistence_and_invocation_modes/finding.md: the ROUTEMAN-OUTPUT side of the protocol is committed — file names _navig.md (= protocol's _frontier.md) and routeman.md (= protocol's navigation.md); placement hybrid by invocation scope (per-inquiry-folder when inquiry-scoped; devdocs/navigation/<run-id>/ when project-scoped). The WORKER-WRITE side (folder topology workers write to; filename patterns workers use; write-completeness signaling; routeman's completion-emission shape; partial-failure handling) remains open; Q5's Tier-1 status is unchanged.]

[Tier I substantive re-statement applied 2026-05-23 per correction notice above. The original question framed the contract as "how does the runner pass cycle output to the discipline at invocation"; under the corrected isolated-session architecture, the contract is file-system-protocol (workers write specific filename patterns to specific folders; routeman reads specific folder paths), not in-context invocation. Pre-correction reading preserved below.]

Under the corrected isolated-session architecture, three roles interact via the file system: (a) worker sessions running MVL pipelines and writing inquiry-folder artifacts; (b) routeman scanning inquiry folders to read those artifacts and writing the Route Map; (c) the runner invoking either workers or routeman at appropriate moments. The discipline-vs-runner boundary is canonical, but the file-system protocol joining them has never been formalized.

Why this is a frontier. No current answer: no formal file-system protocol exists. Gating: every routeman invocation across /MVL, /MVLw, and future runners depends on the protocol; every worker pipeline's artifact-writing behavior must conform. Net-new: the runner-discipline boundary was assumed but not specified at the file-system level.

What it gates. The SKILL.md's invocation-contract section + corresponding updates to runner specs + worker-pipeline conventions. The protocol must cover: (i) which folders routeman scans (per new frontier sub-question FF-2 in the correction finding's Open Questions); (ii) which filename patterns + section structures workers write (per FF-3 + FF-4); (iii) how workers signal write-completeness (per FF-3); (iv) what shape routeman emits to signal Route-Map completion (a file written? a state update in _state.md?); (v) what happens on partial failure (worker crash mid-write; routeman scan timing out; malformed file content). The in-context-passing options from the pre-correction framing are eliminated; the protocol is purely file-system-based.

Hardness. Breadth high (every invocation across runners; every worker-pipeline writing). Depth high (canonical does not specify; design needed). Articulation medium.

Candidate resolution path. A new /MVL2+ inquiry framed as "design the file-system protocol between worker sessions, routeman, and runners for the corrected isolated-session architecture." Likely deliverable: a protocol specification with folder topology, filename patterns, write-completeness signaling, completion-emission shape, partial-failure handling, plus updated sections in routeman's SKILL.md and in runner + worker specs. The inquiry should also resolve or document the correction finding's FF-1 through FF-5 sub-questions in the same pass.

Pre-correction reading (preserved for traceability):

Original question framing: "What is the explicit contract between the runner and routeman at invocation time, covering how the runner passes cycle output (one document, multiple references, in-context content, or file paths)..." — The original framing assumed in-context passing was one option among many. The corrected architecture eliminates in-context passing as an option; the protocol is purely file-system-based. The substance of the question (an explicit contract is needed) survives; the object (the protocol's medium) is now committed.

dive deep into this one
```

</details>
