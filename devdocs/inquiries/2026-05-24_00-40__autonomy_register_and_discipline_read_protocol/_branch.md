# Branch: autonomy_register_and_discipline_read_protocol

## Question

**Subject** — the project-level autonomy register (a file artifact + discipline-facing convention) that enables routeman (and any future autonomy-aware discipline) to detect the project's current autonomy level at invocation time under the corrected isolated-session + file-scanning architecture.

**Action** — design (from scratch) the artifact + the read convention + the write convention, then evaluate the design.

**Level** — discipline-level reach (routeman's graduated-autonomy classification depends on it) with cross-cutting protocol-level extent (the read convention is shared infrastructure for any discipline that needs to know the autonomy level).

**Observation targets** — preserve as separate items because the user's framing names two distinct artifacts joined by "and":

1. **The register file** — its location, format, contents, and content-shape constraints (what fields; what value types; what validation rules; whether human-readable / machine-readable / both; whether the register is a single file or a directory; whether the file carries history or is point-in-time only).
2. **The discipline-read protocol** — the convention by which disciplines read the register at invocation time (where in the discipline's file-scan path it appears; how disciplines handle the register-absent case; how disciplines handle a malformed register; whether the read is mandatory or optional per discipline).
3. **The write protocol** — the convention for human-set or system-set updates to the register (who has write authority; what triggers a write; what record is left of changes; whether writes are versioned).

Additionally, the inquiry must observe these interactions:

4. **Interaction with the cycle-consumer correction (16-31)** — the design is bounded to file-read mechanisms (in-context-parameter is off the table); the register lives in the file-system and is read by the same scanning mechanism that reads inquiry artifacts.
5. **Interaction with the persistence model (24-00)** — the register is structurally adjacent to `_navig.md` (both are sidecar files routeman reads); their relationship (orthogonal? layered? cross-referencing?) should be articulated.
6. **Interaction with the autonomy ladder definition (`docs/desc.md`)** — the register's value space (L0, L1, L2, L3, L4) is inherited from the ladder; any value-space changes belong to a separate inquiry on the ladder, not here.

**Deliverable shape** — a design memo with: (a) the register file's specification (location, format, contents, lifecycle), (b) the read protocol specification (when, how, what to do on failure), (c) the write protocol specification (who, when, what record), (d) a rationale section showing why this design over alternatives, (e) explicit boundary statements with adjacent artifacts (`_navig.md`, `_state.md`, `docs/desc.md`).

**Stated question:** What is the structural design of the project-level autonomy register file (its location, format, contents, lifecycle) AND the discipline-read protocol (when disciplines read it; how they handle absent / malformed / out-of-range values) AND the write protocol (who has write authority; what triggers writes; what record is left), such that routeman's graduated-autonomy classification feature becomes implementable under the corrected isolated-session + file-scanning architecture, and such that the register integrates cleanly with the adjacent `_navig.md` and `_state.md` sidecar conventions?

## Goal

- **Criterion** — a good answer (i) specifies the register file concretely enough that a follow-up inquiry can author the actual file + the routeman SKILL.md section that reads it without re-running this design; (ii) specifies the read protocol concretely enough that any future autonomy-aware discipline can adopt the same convention; (iii) specifies the write protocol concretely enough that humans + future system-update mechanisms know who writes when; (iv) explicitly articulates the relationship with `_navig.md` (24-00 persistence) and `_state.md` (inquiry pipeline status) to avoid sidecar proliferation; (v) provides defer-options for any sub-decision genuinely premature (e.g., system-set write triggers may not be calibratable until L3+ autonomy is reached).

- **Use case** — the SKILL.md authoring inquiry inherits this design and writes (a) the actual register file (or a template + placeholder); (b) the read protocol section in routeman's SKILL.md; (c) any cross-discipline guidance for adopting the read protocol.

- **Desired outcome** — a settled enough design that (a) routeman's graduated-autonomy feature becomes implementable; (b) Question 1 from the frontier-questions finding is resolved (closed or DEFERRED-WITH-DESIGN); (c) the LAYER-2 calibration-drift detection mode has a runtime substrate (the register provides the current autonomy level to compare against the 12/4 partition's calibration).

- **What would fail** — (i) producing a design so abstract that the SKILL.md authoring inquiry still has to design the register from scratch; (ii) silently ignoring the relationship with `_navig.md` and `_state.md` (sidecar-proliferation risk per persistence-inquiry's D12 dimension); (iii) committing the in-context-parameter option (off the table per 16-31 correction); (iv) over-specifying write triggers that depend on autonomy levels the project hasn't reached (premature commitment to L3+ system-set semantics); (v) under-specifying the register's lifecycle (what happens when the autonomy level transitions — is the prior value preserved? is there an audit trail?); (vi) failing to engage the user's explicit framing that the resolution path is "the register file AND the discipline-read protocol AND the write protocol" — collapsing the three into one undifferentiated artifact.

## Source Input

```text
Question 1 — How does routeman detect the project's current autonomy level at invocation time?
[Tier II minor re-statement applied 2026-05-23 per correction notice above. The question's substance is unchanged; the resolution path narrows to a file-mediated register under the corrected isolated-session + file-scanning architecture.]

The routeman identity sentence references "the project's current autonomy level" as a load-bearing input to the graduated-autonomy classification feature, but the corpus has no mechanism by which a discipline reads the project's autonomy level at runtime. docs/desc.md describes the autonomy ladder as a trajectory across five levels without specifying a runtime-readable register, an inference protocol, or an invocation-time parameter.

Why this is a frontier. No current answer: the mechanism does not exist. Gating for implementation: the graduated-autonomy classification feature cannot operate without it; the entire auto-vs-judgment split (the second endgame function from the design memo) becomes unimplementable. Net-new: the design memo names "the project's current autonomy level" as a load-bearing input but does not name this gap.

What it gates. The SKILL.md must specify how the autonomy level is observed at invocation time. [Post-correction:] under the corrected isolated-session + file-scanning architecture, the natural mechanism is a project-level autonomy register file that routeman reads during its scan (e.g., docs/autonomy_level.md or similar). The "parameter passed by the runner at invocation" option is eliminated by the correction (routeman is not invoked with in-context parameters from a runner; it scans). "Inference from operating context" and "hard-coding L0 with a documented limitation" remain as defer-options.

Hardness. Breadth high (affects the auto-vs-judgment feature, the LAYER-2 calibration-drift detection, the second endgame function, and any future feature that depends on autonomy context). Depth high (no mechanism exists today; the design is from scratch — though the corrected architecture narrows the design space to file-read options). Articulation medium.

design the project-level autonomy register file and the discipline-read protocol." Expected scope: one to two weeks of inquiry work covering the register-file format + location, a read convention for discipline specs, and a write protocol for human-set or system-set updates. Post-correction, the design is bounded to file-read mechanisms; the in-context-parameter option is off the table.

do this, dive deeper
```

## Scope Check

**Question covers goal: YES** with one specific-vs-pattern note + one widening consideration the inquiry should explicitly address.

The question covers (i) register file design, (ii) read protocol, (iii) write protocol, (iv) interactions with adjacent artifacts — matching the Goal's criteria.

**Specific-vs-pattern check:** the question targets routeman's specific need but the read protocol is potentially pattern-shaped (any future autonomy-aware discipline can use it). The inquiry should design for routeman specifically AND flag generalization to other disciplines as a research frontier (similar to FF-strat-pattern from the persistence inquiry). Default: address routeman-specifically; note generalization as research frontier.

**Widening consideration:** the question is bounded to file-read mechanisms (per 16-31 correction). The Goal's "what would fail" item (iii) explicitly confirms this boundary. The inquiry will NOT design an in-context-parameter alternative; the "inference from operating context" defer-option will be acknowledged but not designed.

## Layer Commitment

**Primary layer: STRUCTURAL.** The inquiry is dominantly about designing a file artifact (the register) plus a convention (the read/write protocol). The file's shape + content + organization + location are the central commitments. Both the read protocol and the write protocol are conventions specified in or alongside the register's spec — they are structural in nature (specifying what the file IS and how it's accessed) rather than process in nature (no multi-step discipline procedure is being designed; the read is a single file-scan step within routeman's existing scan).

**Other-layer alternatives considered and explicitly out of scope for THIS run:**

- **Meaning** — would mean re-defining what "autonomy level" IS as a concept. Out of scope: the autonomy ladder is already defined in `docs/desc.md` (5 levels: L0-L4); this inquiry inherits the value space and designs the register that holds the current value. If the ladder itself needs rethinking, that's a separate inquiry.
- **Process (as primary)** — would mean redesigning routeman's scan procedure. Out of scope: the scan procedure is committed by 16-31; this inquiry adds one file to what gets scanned, but doesn't restructure the scan. If a multi-step read/validate/cache procedure is needed beyond a single scan step, that's a sequential follow-up.

**Sequential multi-layer plan (declared, not executed in this run):**

1. THIS run — STRUCTURAL: specify the register file's shape + the read convention + the write convention.
2. Follow-up (likely the SKILL.md authoring inquiry) — STRUCTURAL: integrate the register read into routeman SKILL.md; author the actual register file from the template.
3. Follow-up (if needed) — PROCESS: specify any multi-step read/validate/cache procedure if the single-scan model proves insufficient.
4. Follow-up (if generalization warranted) — PROCESS+STRUCTURAL: generalize the read convention to other autonomy-aware disciplines if a second discipline emerges that needs the register.

## Synthesis Trigger

This inquiry consumes prior inquiry outputs as inputs and inherits commitments from them. The finding MUST include an `## Inherited Commitments Re-test` section per CONCLUDE's enforcement.

**Prior outputs synthesized:**

- `devdocs/inquiries/2026-05-23_14-39__routeman_discipline_design/finding.md` — the routeman design memo (with subsequent additions notices through 24-00). Commits to: 3-layer identity (the prescriptive-extension layer's auto-vs-judgment residual depends on autonomy-level detection); the graduated-autonomy classification feature; the 12-auto / 4-human-judgment partition; the second endgame function (auto-vs-judgment provides L0-L4 positioning); the LAYER-2 Calibration-Drift mode (recognition signal: "12/4 split is no longer calibrated to project's autonomy level").

- `devdocs/inquiries/2026-05-23_16-31__routeman_isolated_session_correction/finding.md` — the cycle-consumer process-layer correction. Commits to: isolated-routeman + file-scanning + parallel-workers + singleton-navigator architecture. The register design is bounded to this architecture; in-context-parameter is OFF the table.

- `devdocs/inquiries/2026-05-23_15-20__routeman_implementation_frontier_questions/finding.md` — the frontier-questions finding (Question 1 is the source of this inquiry). Commits to: Q1's Tier-1 status; the file-mediated register as the natural mechanism; the candidate resolution path ("design the register + the read protocol").

- `devdocs/inquiries/2026-05-24_00-20__routeman_persistence_and_invocation_modes/finding.md` — the persistence-and-invocation model. Commits to: `_navig.md` as routeman's persistence sidecar in inquiry folders (or `devdocs/navigation/<run-id>/` for project-scope); the LLM-operational-design principle (user-language alignment) now at N=2 evidence; the hybrid placement-by-scope rule. The autonomy register is structurally adjacent — the placement decision for the register should be coordinated with the persistence inquiry's placement decisions to avoid sidecar proliferation.

- `devdocs/inquiries/2026-05-23_18-58__routeman_staged_mapping_and_reasoning_field/finding.md` — the staged-mapping + meta-reasoning adoptions. Commits to: per-Route meta-reasoning field; LLM-operational-characteristics-as-design-input principle. The register's "current autonomy level" value may need similar meta-reasoning (why is the project at this level? what observation triggered the most recent change?) — interaction to consider.

- `devdocs/inquiries/2026-05-23_11-30__navigation_surfacing_territory_dependency_recheck/finding.md` — the input-dependency anchor. Commits to: routeman is a cycle-consumer; depending on someone's output ≠ being a configuration of them. The register's read is another input-dependency (routeman depends on the register's value); the same structural argument applies — reading the register doesn't make routeman a configuration of whoever writes it.

- `docs/desc.md` — the autonomy ladder definition (L0-L4 trajectory across five levels). Commits to: the 5-level value space; the description of each level. This inquiry INHERITS the value space and does NOT redefine it.

**Each commitment will be re-tested in CONCLUDE's `## Inherited Commitments Re-test` section.** Sensemaking and Critique do the actual re-test work; CONCLUDE enforces the section. The surgical-correction principle applies (per 16-31's surgical principle, recently surfaced as the abstraction-level-conflation meta-pattern now at N=3 instances per the 11-30 update): each prior is re-tested per-commitment; commitments that survive at their level are preserved; commitments affected by the register's adoption (if any) are explicitly flagged.
