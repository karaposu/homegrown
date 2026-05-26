## User Input

(See `_branch.md` Source Input for the full verbatim user input.)

# Decomposition — File-System Protocol

Per the 7-step Structural Decomposition process.

## Step 1 — Perceive Coupling Topology

The whole: a protocol artifact at `cognitive_harness/protocols/inquiry_filesystem_protocol.md` that covers 7 sub-aspects (SP1-SP7) with 80% documentation of existing conventions + 20% novel design (atomic-write, verdict-line completeness, scan-scope progression). Architecture is fixed; ROUTEMAN-OUTPUT side is inherited from 24-00; 5 FFs from 16-31 must be resolved.

### Element inventory

- E1 — **Folder topology documentation** (SP1; resolves FF-2): canonical inquiry-folder paths + branch nesting + project-scoped location.
- E2 — **Filename patterns documentation** (SP2): per-discipline canonical names + inquiry-level files + post-CONCLUDE structure.
- E3 — **Section structure documentation** (SP2 sub): each discipline's output structure + verdict-line convention.
- E4 — **Atomic-write convention** (novel design): workers write `<name>.tmp` then rename.
- E5 — **Per-discipline write-completeness signal** (SP3; resolves FF-3): two-part check (canonical filename + verdict-line).
- E6 — **`_state.md` Status field convention** (existing; documented): inquiry-level completion.
- E7 — **Routeman's completion-emission shape** (SP4): the form by which routeman signals "I'm done" — file presence + verdict-line in `_navig.md` (the design's commitment).
- E8 — **Scan detection mechanism** (SP6; resolves FF-1): L0 full-scan; L2+ mtime-filtered; marker-based research frontier.
- E9 — **Scan-scope economy** (SP7; resolves FF-5): full-scan at L0; mtime-filtered extension hook + transition trigger.
- E10 — **Partial-failure handling: worker crash mid-write** (SP5 part; resolves FF-4 part): atomic-write prevents read race + orphan `.tmp` ignored.
- E11 — **Partial-failure handling: malformed file content** (SP5 part): 3-tier failure handling inherited from 24-40 (parser fails → ERROR halt + flag).
- E12 — **Partial-failure handling: routeman scan timing out / interrupted** (SP5 part): partial Route Map + INFO note + idempotent re-run.
- E13 — **L2+ extension hooks documentation** (cross-cutting): mtime-filtered scan; parallel-worker locking; marker-based scan research frontier.
- E14 — **Cross-references to consumer artifacts** (cross-cutting): runners (MVL, MVLw), worker discipline specs, audit (06:00), persistence model (24-00).
- E15 — **Inheritance cross-references** (cross-cutting): 24-00 ROUTEMAN-OUTPUT; 16-31 architecture; 24-40 3-tier failure handling.

### Coupling map (qualitative)

| Element | Strong coupling | Cluster |
|---|---|---|
| E1 Folder topology | E14 (runners create folders); E15 (branch_inquiry pattern). Moderate with E8 (scan path = topology). | **CLUSTER 1: Topology + Naming (documentation cluster)** |
| E2 Filename patterns | E14 (workers write per-discipline files); E5 (filename + verdict = completeness). Moderate with E8 (scan reads canonical names). | **CLUSTER 1** |
| E3 Section structures | E5 (verdict-line is a section convention); E14 (discipline specs commit section structure). | **CLUSTER 1** |
| E4 Atomic-write | E10 (atomic-write IS the worker-crash mitigation); E2 (write target = canonical filename). | **CLUSTER 2: Write semantics (novel)** |
| E5 Write-completeness signal | E2 (filename); E3 (verdict-line); E4 (atomic-write). All cluster. | **CLUSTER 2** |
| E6 `_state.md` Status convention | E15 (existing CONCLUDE pattern); side-coupled with E14 (CONCLUDE updates it). | **CLUSTER 1** |
| E7 Routeman completion-emission | E2 (filename — `_navig.md` + `routeman.md`); E5 (verdict-line analog); inherits E4 (atomic). Strongly coupled with the routeman-output side from 24-00. | **CLUSTER 2** (extended; routeman-side write semantics) |
| E8 Scan detection mechanism | E1 (scan path); E9 (mtime-filtered is the L2+ version of detection); E10/E12 (scan reads must handle partial states). | **CLUSTER 3: Scan semantics (novel)** |
| E9 Scan-scope economy | E8 (related design axis); E13 (extension hooks). | **CLUSTER 3** |
| E10 Partial-failure: worker crash | E4 (atomic-write mitigates); E11 (parser handles surviving cases). Moderate with E15 (24-40 3-tier pattern inherited). | **CLUSTER 4: Failure handling (inherited + minor design)** |
| E11 Partial-failure: malformed content | E15 (24-40 3-tier pattern). Independent of crash handling. | **CLUSTER 4** |
| E12 Partial-failure: scan timing | E8 (scan semantics); E9 (scope economy informs timeout). Idempotency property = independent of E10/E11. | **CLUSTER 4** |
| E13 L2+ extension hooks | Cross-cutting; each cluster has its own L2+ hook. | **CROSS-CUTTING** |
| E14 Cross-references to consumers | Cross-cutting; protocol cites runners, workers, audit. | **CROSS-CUTTING** |
| E15 Inheritance cross-references | Cross-cutting; protocol cites 24-00, 16-31, 24-40, 06-00. | **CROSS-CUTTING** |

### Coupling map summary (clusters)

- **Cluster 1: Topology + Naming + Existing Conventions** (E1, E2, E3, E6) — largely documentation; minimal novel design.
- **Cluster 2: Write semantics (novel)** (E4, E5, E7) — atomic-write, verdict-line completeness, routeman emission.
- **Cluster 3: Scan semantics (novel)** (E8, E9) — scan detection mechanism + scan-scope economy.
- **Cluster 4: Failure handling (inherited)** (E10, E11, E12) — 3-tier inheritance + atomic-write mitigation + idempotency.
- **Cross-cutting:** E13 (L2+ hooks), E14 (consumer cross-refs), E15 (inheritance cross-refs).

Major boundaries: between Cluster 1 (documentation) and Cluster 2 (novel write); between Cluster 1 and Cluster 3 (novel scan); between Cluster 2 and Cluster 3 (different design axes); between Cluster 4 and Clusters 2/3 (failure handling is mostly inherited + composes with write/scan but is structurally separate).

## Step 2 — Detect Boundaries (Top-Down)

The 4 clusters provide clean cuts:

- **Cut between Cluster 1 (documentation) and Cluster 2 (novel write):** documentation cites existing conventions; novel write commits new conventions. Different design effort levels. **Clean boundary.**
- **Cut between Cluster 2 (write) and Cluster 3 (scan):** writers + scanners interact via files but the design axes are independent. **Clean boundary.**
- **Cut between Cluster 3 (scan) and Cluster 4 (failure):** scan semantics + failure handling compose but failure is mostly inherited from 24-40. **Clean boundary.**

Cross-cutting E13-E15 attach to every cluster but don't have their own pieces.

## Step 3 — Validate Boundaries (Bottom-Up)

Atom checks:
- **"The folder for inquiry X is at devdocs/inquiries/X/"** — clusters with E1 (Folder topology). ✓ Cluster 1.
- **"Workers write `<name>.tmp` then rename"** — clusters with E4 (Atomic-write). ✓ Cluster 2.
- **"Routeman scans all inquiry folders at L0"** — clusters with E8 (Scan detection). ✓ Cluster 3.
- **"If a file fails to parse, halt + flag"** — clusters with E11 (Partial-failure handling). ✓ Cluster 4.
- **"At L2+, mtime-filtered scan becomes available"** — clusters with E13 (L2+ hooks) + E9 (scan-scope economy). ✓ Cross-cutting + Cluster 3.
- **"The routeman SKILL.md cross-references this protocol"** — clusters with E14 (Cross-references). ✓ Cross-cutting.

No atom splits across cluster boundaries; no atom is misclustered. **Boundary confidence: HIGH.**

## Step 4 — Express as Question Tree

Six pieces (mapping the 4 design choices from Sensemaking SV6 + 2 supporting):

### Piece P1 — Protocol file's section organization + exact text (P-spec from Sensemaking)

**Question:** What is the protocol file's section organization + exact text per section? How does the protocol present its 4 clusters (Topology + Write + Scan + Failure) plus cross-cutting concerns (L2+ hooks, cross-references)?

**Verification criteria:**
- [ ] Each of the 7 sub-aspects (SP1-SP7) has a section or sub-section.
- [ ] Each sub-aspect cites the relevant inherited convention (24-00, 16-31, 24-40, RESUME, etc.) and/or commits the novel design.
- [ ] Failure Modes section covers the 3 partial-failure modes (worker crash, malformed content, scan timing out) with the 3-tier inheritance from 24-40.
- [ ] L2+ Extension Hooks section documents mtime-filtered scan, parallel-worker locking, marker-based scan research frontier.
- [ ] Cross-References section names consumers (runners, workers, audit, persistence model).
- [ ] Quality test: readable by a reader who has not read the routeman chain; cross-references give them entry points.

**Includes elements:** E1, E2, E3, E6 (documentation cluster) + structural organization for E4-E15.

### Piece P2 — Atomic-write commitment text + worker integration (covers E4 + part of P-worker-detail)

**Question:** What is the protocol's exact wording on atomic-write convention? Is the commitment a hard contract (workers MUST atomic-write) or a recommendation (workers SHOULD)? Where in the worker discipline SKILL.md files is the atomic-write committed?

**Verification criteria:**
- [ ] Atomic-write commitment is a MUST (hard contract; not optional).
- [ ] Concrete worker-side instruction: `write content to <name>.tmp; mv <name>.tmp <name>` pattern.
- [ ] Survives prosecution against "workers may write differently in practice if not enforced."
- [ ] Cross-reference to E10 (atomic-write IS the worker-crash mitigation).
- [ ] Cross-reference to worker discipline specs (which sections of SKILL.md need updating to commit the convention).

**Includes elements:** E4, plus E10's dependency on E4.

### Piece P3 — Per-discipline write-completeness signal (P-emission for workers + part of P-worker-detail)

**Question:** What is the protocol's exact wording on the per-discipline write-completeness signal? The two-part check (canonical filename + verdict-line) needs explicit specification: what verdict-line pattern, what file-end position, what fallback if absent?

**Verification criteria:**
- [ ] Two-part signal specified: (a) canonical filename exists (via atomic-write); (b) verdict-line `**Overall: PROCEED**` / `FLAG` / `RE-RUN` present near file end (per RESUME §2 pattern).
- [ ] Position of verdict-line specified (per the existing discipline-spec commitments — at end of file in a Telemetry section).
- [ ] Fallback if verdict-line absent: treat as backward-compat PROCEED with NOTE (per RESUME §2 backward-compat handling).
- [ ] Survives prosecution against "what if a discipline spec doesn't emit a verdict line?"
- [ ] Cross-reference to E2 (filename) + E4 (atomic-write).

**Includes elements:** E5, plus E2/E3/E4's contributions.

### Piece P4 — Routeman's completion-emission shape (P-emission for routeman)

**Question:** What is the protocol's wording on routeman's completion-emission shape? Per Sensemaking KI7, the shape inherits 24-00's commitments: `_navig.md` + `routeman.md` both atomic-written = completion signal. Does the protocol need an additional explicit completion-signal artifact, or is file presence sufficient?

**Verification criteria:**
- [ ] Completion-emission shape committed: file presence of both `_navig.md` and `routeman.md` (via atomic-write) = routeman is done with this invocation.
- [ ] Optional addition: a status field in `_navig.md` (e.g., `routeman_status: COMPLETE` at end) for explicit completion reading by downstream consumers.
- [ ] Survives prosecution against "what if routeman crashed mid-write of `_navig.md` but `routeman.md` is fully written?" (atomic-write mitigates per-file but cross-file consistency is a separate concern.)
- [ ] Cross-reference to 24-00's commitments.

**Includes elements:** E7, plus E4's atomic-write dependency.

### Piece P5 — Scan detection + scan-scope economy progression (P-trigger from Sensemaking)

**Question:** What is the protocol's wording on the L0 full-scan + L2+ mtime-filtered progression? What is the transition trigger from L0 to L2+ (when does mtime-filtered become necessary)? Where in the protocol is the marker-based research frontier preserved?

**Verification criteria:**
- [ ] L0 commitment: routeman performs full scan of all inquiry folders + branch nesting at each invocation.
- [ ] L2+ extension hook: mtime-filtered scan; calibratable threshold for transition.
- [ ] Transition trigger specified: when full-scan time exceeds X seconds (per project's empirical measurement) OR inquiry count exceeds N (per autonomy-level scaling).
- [ ] Marker-based scan preserved as research frontier.
- [ ] Survives prosecution against "scan-scope economy is premature optimization at L0."

**Includes elements:** E8, E9, E13's mtime-extension hook portion.

### Piece P6 — Partial-failure handling section (covers E10 + E11 + E12)

**Question:** What is the protocol's wording on the 3 partial-failure modes? Each mode (worker crash, malformed content, scan timing out) needs its 3-tier classification + the inherited 24-40 vocabulary.

**Verification criteria:**
- [ ] Worker-crash mid-write: atomic-write mitigates; orphan `.tmp` ignored (filename mismatch); INFO if canonical missing.
- [ ] Malformed file content: parser fails → ERROR halt + flag (per 24-40 pattern).
- [ ] Scan timing out / interrupted: emit partial Route Map + INFO note; re-running idempotent.
- [ ] All 3 modes explicitly classified per 24-40's 3-tier vocabulary (INFO / ERROR / ERROR).
- [ ] Recovery is explicitly out of scope (runner/human concern).
- [ ] Survives prosecution against "the protocol should handle more failure modes."

**Includes elements:** E10, E11, E12, E15's 24-40 inheritance.

### Notes

- E13 (L2+ extension hooks) is cross-cutting; each piece has its own L2+ hook documentation. P5 carries the major L2+ hook (mtime-filtered scan); other pieces have minor hooks (e.g., per-discipline section in P3 has "if a discipline-spec doesn't emit verdict line, that's an L2+ improvement to the discipline-spec, not this protocol").
- E14 (cross-references to consumers) is cross-cutting; included in P1's spec organization.
- E15 (inheritance cross-references) is cross-cutting; included in P1's spec organization.

## Step 5 — Map Interfaces

### Interface P1 (spec organization) ↔ all other pieces

- **Flow:** P1's spec sections HOLD the content from P2-P6 (each piece's commitment goes into a P1 section).
- **Direction:** P2-P6 → P1 (P1 aggregates).
- **Type:** content-aggregation.

### Interface P2 (atomic-write) ↔ P3 (write-completeness signal)

- **Flow:** P2's atomic-write IS the basis for P3's "canonical filename exists" half of the two-part check.
- **Direction:** P2 → P3.
- **Type:** structural-dependency.

### Interface P2 (atomic-write) ↔ P4 (routeman completion-emission)

- **Flow:** routeman uses atomic-write for `_navig.md` + `routeman.md`; P4 inherits P2's convention.
- **Direction:** P2 → P4.
- **Type:** convention-inheritance.

### Interface P2 (atomic-write) ↔ P6 (partial-failure handling)

- **Flow:** atomic-write IS the worker-crash mitigation (per E10); P6 cites P2.
- **Direction:** P2 → P6.
- **Type:** mitigation-dependency.

### Interface P3 (write-completeness) ↔ P5 (scan detection)

- **Flow:** routeman's scan logic checks for the two-part completeness signal (P3) when deciding whether to read a file (P5).
- **Direction:** P3 → P5 (P5's scan logic consumes P3's signal).
- **Type:** logic-dependency.

### Interface P5 (scan) ↔ P6 (partial-failure: scan timing)

- **Flow:** P5's scan logic must handle the timing-out case in P6.
- **Direction:** P5 ↔ P6 (mutual; the scan logic embeds the timing-handling).
- **Type:** mutual-design-dependency.

### Interface P6 (partial-failure) ↔ P1 (spec organization)

- **Flow:** P6's content goes into P1's Failure Modes section.
- **Direction:** P6 → P1.
- **Type:** content-aggregation (covered by P1's general interface).

### Hidden coupling check (assumptions-not-data)

- P3 assumes the discipline specs commit to emitting verdict lines. **Verified:** all 5 active discipline references commit this (per the Telemetry sections at the end of each).
- P5 assumes mtime is reliable enough at L0 for the L2+ hook to work later. **Verified:** POSIX guarantees mtime monotonic-on-write; filesystems used by the project (ext4, APFS, etc.) all support it.
- P4 assumes `_navig.md` + `routeman.md` are written by routeman itself, not by the runner. **Verified:** per 24-00, routeman's session writes its own output files; the runner doesn't write them.
- No critical hidden coupling.

## Step 6 — Order by Dependency

```
P2 (atomic-write) ──→ P3 (write-completeness)
                  ──→ P4 (routeman completion)
                  ──→ P6 (partial-failure: worker crash)
P3 (write-completeness) ──→ P5 (scan detection)
P5 (scan detection) ←──→ P6 (partial-failure: scan timing) [mutual]
P1 (spec organization) ←── ALL (aggregates content)
```

### Dependency waves

- **Wave 1 (independent):** P2 (atomic-write), P6's malformed-content sub-piece (inherits 24-40).
- **Wave 2 (depends on P2):** P3 (write-completeness), P4 (routeman completion), P6's worker-crash sub-piece.
- **Wave 3 (depends on P3):** P5 (scan detection).
- **Wave 4 (mutual with P5):** P6's scan-timing sub-piece.
- **Wave 5 (aggregates):** P1 (spec organization).

Innovation will generate options in this order: P2 → (P3, P4) → P5 → P6 → P1.

## Step 7 — Self-Evaluate

### Minimum evaluation (3 dimensions)

| Dimension | Result |
|---|---|
| **Independence** | PASS. P2 is independent of all others (an atomic-write convention exists on its own); P3 depends on P2 but is otherwise independent; P4 depends on P2; P5 depends on P3; P6 is partly inherited (malformed content), partly dependent on P2 (worker crash), partly mutual with P5 (scan timing). Dependencies are explicit. |
| **Completeness** | PASS. The 7 sub-aspects (SP1-SP7) are all covered: P1's spec sections include topology, filenames, sections, `_state.md` (Cluster 1 = documentation); P2/P3/P4 cover write semantics (Cluster 2); P5 covers scan semantics (Cluster 3); P6 covers failure handling (Cluster 4). The 5 FFs from 16-31 are resolved: FF-1 (scan detection) = P5; FF-2 (folder topology) = P1; FF-3 (write-completeness) = P3; FF-4 (partial-state read protection) = P2's atomic-write + P6; FF-5 (scan-scope economy) = P5. ROUTEMAN-OUTPUT inheritance = scope-out per Sensemaking, referenced in P4. |
| **Reassembly** | PASS. Assembling P1-P6 produces a complete protocol artifact: spec sections (P1) populated with write semantics (P2-P4), scan semantics (P5), failure handling (P6). The reader gets a single coherent protocol file. |

*Determination-mechanism piece check:*
- "Routeman knows a worker file is complete" — runtime determination = P3 two-part check; P3 specifies it.
- "Routeman knows what to scan" — runtime determination = P5; P5 specifies (L0 full-scan; L2+ mtime).
- "Routeman knows whether to halt on failure" — runtime determination = P6's 3-tier; P6 specifies.
All load-bearing runtime determinations are in the Q-tree. PASS.

### Full evaluation (7 dimensions)

| Dimension | Result |
|---|---|
| Independence | PASS |
| Completeness | PASS |
| Reassembly | PASS |
| Tractability | PASS — each piece is small (most pieces are <1000 words of spec text + cross-references) |
| Interface clarity | PASS — 7 interfaces enumerated; assumptions-not-data check ran (3 verified assumptions surfaced) |
| Balance | PASS — P1 is the largest (spec organization aggregates everything) but it's largely cross-references + structural skeleton; novel design weight is distributed across P2-P6 |
| Confidence | PASS — top-down + bottom-up agree |

All 7 dimensions PASS. Decomposition confidence: HIGH.

### Failure-mode check

- **Premature decomposition:** ruled out — Sensemaking clarified the design as 80% documentation + 20% novel before decomposition.
- **Wrong boundaries:** ruled out — boundaries at coupling valleys.
- **Hidden coupling:** assumptions-not-data check ran; 3 assumptions verified.
- **Missing pieces:** all 7 SP's covered; all 5 FFs resolved; ROUTEMAN-OUTPUT scope-out preserved.
- **Over-decomposition:** ruled out — 6 pieces (smaller than the 7 sub-aspects suggests because P1 aggregates documentation content).
- **Ignoring dependencies:** Step 6 produced 5-wave order.
- **Imbalanced decomposition:** P1 is largest but cross-cutting; novel work distributed across P2-P6.

No failure mode triggers.

---

## Final Deliverable

### Coupling Map

4 clusters + 3 cross-cutting:
- **Cluster 1 (Topology + Naming, documentation):** E1, E2, E3, E6.
- **Cluster 2 (Write semantics, novel):** E4, E5, E7.
- **Cluster 3 (Scan semantics, novel):** E8, E9.
- **Cluster 4 (Failure handling, inherited):** E10, E11, E12.
- **Cross-cutting:** E13 (L2+ hooks), E14 (consumer cross-refs), E15 (inheritance cross-refs).

### Question Tree

| Piece | Question | Cluster | Resolves FF |
|---|---|---|---|
| P1 | Protocol file's section organization + text | aggregates | — |
| P2 | Atomic-write convention | 2 | (mitigates FF-4) |
| P3 | Per-discipline write-completeness signal | 2 | FF-3 |
| P4 | Routeman's completion-emission shape | 2 | — (24-00 inheritance) |
| P5 | Scan detection + scan-scope economy progression | 3 | FF-1 + FF-5 |
| P6 | Partial-failure handling | 4 | FF-4 (partial-state read protection sub-piece) |

(SP1 folder topology and SP2 filename patterns are in P1's documentation cluster, not split into separate pieces; FF-2 is resolved by P1's topology section.)

### Interface Map

7 interfaces (Step 5).

### Dependency Order

5 waves:
- Wave 1: P2 (atomic-write) + P6 malformed-content sub-piece.
- Wave 2: P3 (write-completeness), P4 (routeman completion), P6 worker-crash sub-piece.
- Wave 3: P5 (scan detection).
- Wave 4: P6 scan-timing sub-piece (mutual with P5).
- Wave 5: P1 (spec organization aggregates).

### Self-Evaluation

7/7 dimensions PASS. Determination-mechanism piece check PASS. Failure-mode check clean.

---

## Telemetry

- **Pieces produced:** 6.
- **Cross-cutting responsibilities:** 3 (L2+ hooks, consumer cross-refs, inheritance cross-refs).
- **Deferred research frontiers:** 0 (the L2+ hooks are extension hooks, not deferred designs).
- **Dependency depth:** 5 waves.
- **Self-evaluation:** 7/7 PASS; Determination-mechanism PASS; failure-mode check clean.

**Overall: PROCEED** (boundaries validated; interfaces explicit; assumptions-not-data check ran; self-evaluation clean).
