# Decomposition — autonomy register and discipline-read protocol

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-24_00-40__autonomy_register_and_discipline_read_protocol/_branch.md`

---

## Step 1 — Coupling Topology

### Elements of the whole

Sensemaking's stabilized model (SV6) produces these elements:

- **E1** — File location (`docs/autonomy_level.md`)
- **E2** — File format (markdown + YAML frontmatter)
- **E3** — Schema (6 fields: current_level + ladder + set_at + set_by + rationale + transition_history)
- **E4** — Lifecycle (persistent + in-place for current; append for history)
- **E5** — Read protocol (routeman reads on each invocation; convention documentable)
- **E6** — Write protocol (human-only first ship + system-warning hook + L2+ deferred)
- **E7** — Failure-handling (absent → L0+warn; malformed/out-of-range → halt+flag)
- **E8** — Ladder choice (meta-loop ladder per `autonomy_ladder.md` L0-L5)
- **E9** — Sidecar-boundary statement (project-wide in `docs/`; distinct from per-inquiry sidecars)
- **E10-E15** — 6 residual FFs (frontmatter field names; convention placement; L2+ system-set; generalization; per-discipline overrides; two-ladders reconciliation)
- **E16** — Inherited commitments re-test (Synthesis Trigger obligation: 6 priors + 2 docs)
- **E17** — Cross-document impact notes (CONCLUDE-handled; out of scope for decomposition)

### Pairwise coupling

| Pair | Coupling | Reason |
|---|---|---|
| E1 ↔ E2 | **STRONG** | Location + format together define the artifact. |
| E1 ↔ E3 | **STRONG** | Schema is what's IN the file at that location. |
| E2 ↔ E3 | **STRONG** | Format constrains schema shape (YAML frontmatter implies specific field layout). |
| E3 ↔ E4 | **STRONG** | Schema includes transition_history; lifecycle defines how it accumulates. |
| E3 ↔ E8 | **STRONG** | Ladder choice lives in the schema's `ladder` field. |
| E5 ↔ E1 | **MODERATE** | Read protocol points TO file at E1's location (defined interface). |
| E5 ↔ E3 | **MODERATE** | Read parses schema's fields (defined interface). |
| E5 ↔ E7 | **STRONG** | Failure-handling fires during read. |
| E6 ↔ E3 | **STRONG** | Write protocol writes the schema's fields. |
| E6 ↔ E4 | **STRONG** | Write protocol's behavior IS the lifecycle (in-place + append). |
| E9 ↔ E1 | **STRONG** | Sidecar-boundary statement says WHERE the file lives. |
| E9 ↔ E5+E6 | **MODERATE** | Boundary clarifies that read/write apply to project-wide register, not per-inquiry sidecars. |
| E10-E15 ↔ (E1-E9) | **WEAK** | FFs are open follow-ups; informational pointers, not load-bearing for this inquiry's deliverable. |
| E16 ↔ (E1-E9) | **STRONG** | Re-test validates that priors' commitments survive these commitments. |
| E17 ↔ everything | **WEAK** | CONCLUDE-handled; out of scope. |

### Cluster identification

- **Cluster A — FILE ARTIFACT SPEC:** E1 + E2 + E3 + E4 + E8 (ladder choice lives in schema). Tightly coupled.
- **Cluster B — READ PROTOCOL:** E5 + E7 (failure-handling fires during read). Tightly coupled.
- **Cluster C — WRITE PROTOCOL:** E6. Stands alone.
- **Satellite — SIDECAR-BOUNDARY:** E9. Stands alone as cross-cutting structural note.
- **Satellite — RE-TEST:** E16. Stands alone as synthesis-trigger obligation.
- **Satellite — FF LIST:** E10-E15. Informational; not load-bearing for assembly.
- **Out-of-scope:** E17 (CONCLUDE-handled).

### Coupling-map summary

```
       [Cluster A: FILE ARTIFACT SPEC]
       E1 — E2 — E3 — E4
                  |    
                  E8 (ladder choice in schema)
              
                  | (MODERATE: read points to file + parses schema)
                  v
       [Cluster B: READ PROTOCOL]
              E5 — E7
       
                  | (STRONG: write modifies schema fields + lifecycle)
                  v (from Cluster A's E3 + E4)
       [Cluster C: WRITE PROTOCOL]
              E6
       
       [Satellite: SIDECAR-BOUNDARY]
              E9 (cross-cuts A's location + B/C's scope)
       
       [Satellite: RE-TEST]
              E16 (validates A + B + C against priors)
       
       [Satellite: FF LIST]
              E10-E15 (open follow-ups; informational)
       
       [Out-of-scope: CONCLUDE]
              E17
```

---

## Step 2 — Detect Boundaries (Top-Down)

Five natural boundaries emerge:

- **B1** — Between Cluster A (FILE ARTIFACT) and Cluster B (READ PROTOCOL). Low-crossing: read references file path + parses schema fields (defined interface).
- **B2** — Between Cluster A (FILE ARTIFACT) and Cluster C (WRITE PROTOCOL). Low-crossing: write conforms to schema + executes lifecycle behavior (defined interface).
- **B3** — Between Cluster B (READ) and Cluster C (WRITE). Low-crossing: failure-handling in READ references the schema WRITE enforces.
- **B4** — Between (A + B + C) and the SIDECAR-BOUNDARY satellite. The boundary statement is a cross-cutting structural commitment; lives ALONGSIDE the artifact spec but doesn't restructure it.
- **B5** — Between everything and the FF LIST + RE-TEST satellites. The follow-ups and re-test are downstream consumers of the committed artifact, not part of the artifact's design.

Each boundary creates internally cohesive, externally sparse pieces.

---

## Step 3 — Validate Boundaries (Bottom-Up)

Irreducible atoms:

- **Atom-a** — A single file-spec attribute (e.g., "location: `docs/autonomy_level.md`").
- **Atom-b** — A single read-protocol step (e.g., "parse YAML frontmatter").
- **Atom-c** — A single write-protocol rule (e.g., "human-only at first ship").
- **Atom-d** — A single sidecar-boundary distinction (e.g., "project-wide ≠ per-inquiry").
- **Atom-e** — A single FF entry.
- **Atom-f** — A single prior-commitment verdict.

Clustering check:
- Atoms-a (file-spec attributes) cluster naturally into Cluster A. ✓
- Atoms-b (read-protocol steps) cluster into Cluster B. ✓
- Atoms-c (write-protocol rules) cluster into Cluster C. ✓
- Atoms-d cluster into the SIDECAR-BOUNDARY satellite. ✓
- Atoms-e cluster into the FF LIST satellite. ✓
- Atoms-f cluster into the RE-TEST satellite. ✓

**No atoms split across boundaries; no atoms forcibly grouped. Boundaries CONFIRMED.**

**Confidence:** HIGH — top-down + bottom-up agree.

---

## Step 4 — Question Tree

### P1 — FILE ARTIFACT SPEC

**Question:** "What is the complete specification for the `docs/autonomy_level.md` register file — its location, format, schema (6 fields including the ladder choice), and lifecycle (persistent + in-place for current_level + append for transition_history)?"

**Verification criteria:**
- [ ] Location committed: `docs/autonomy_level.md` (sibling to `docs/autonomy_ladder.md`).
- [ ] Format committed: markdown with YAML frontmatter.
- [ ] Schema's 6 fields named with types and constraints:
  - `current_level` (enum: `L0` | `L1` | `L2` | `L3` | `L4` | `L5`).
  - `ladder` (enum: `meta_loop`; default `meta_loop`; schema-extensible).
  - `set_at` (ISO 8601 timestamp).
  - `set_by` (`human` | `system`; `human` only at first ship).
  - `rationale` (string, 1-3 sentences; cites the evidence-gate or decision).
  - `transition_history` (list of prior `{from, to, set_at, set_by, rationale}` records; appended on each level change).
- [ ] Ladder choice explicit in schema (`ladder: meta_loop` per `docs/autonomy_ladder.md`).
- [ ] Lifecycle behavior specified: persistent across all sessions; `current_level` + `set_at` + `set_by` + `rationale` updated in-place on each transition; `transition_history` appended (the prior values are preserved as a new history entry).
- [ ] An example file content shown (sample frontmatter + body).

### P2 — READ PROTOCOL SPEC

**Question:** "What is the read protocol for routeman (and as documentable convention for other autonomy-aware disciplines): when does the read fire, how does it locate + parse the register, how does it handle failures (absent / malformed / out-of-range), and where does the convention live (in routeman SKILL.md vs new protocol doc — FF-2)?"

**Verification criteria:**
- [ ] Read trigger named: routeman reads on each invocation as part of file-scan (per `devdocs/inquiries/2026-05-23_16-31__routeman_isolated_session_correction/finding.md`'s file-scanning architecture).
- [ ] Locate-and-parse mechanism specified: file at known path; YAML frontmatter parsed; `current_level` extracted.
- [ ] Failure-handling specified:
  - **Absent register** → default to `L0` + emit warning ("autonomy register absent at `docs/autonomy_level.md`; defaulting to L0; consider creating the register").
  - **Malformed register** (YAML parse failure; missing required fields) → halt + flag (don't silently degrade).
  - **Out-of-range value** (e.g., `current_level: L7`) → halt + flag.
- [ ] Warning emission shape sketched: where the warning lands (routeman's output telemetry block or a designated warning channel).
- [ ] Convention-placement decision FLAGGED as FF-2 (routeman SKILL.md vs `cognitive_harness/protocols/autonomy_register_read.md` — deferred to SKILL.md authoring).
- [ ] Read-scope note: the convention is DOCUMENTABLE as reusable but committed only for routeman; other autonomy-aware disciplines may adopt at their own SKILL.md authoring time.

### P3 — WRITE PROTOCOL SPEC

**Question:** "What is the write protocol — who can write at first ship (L0/L1), what triggers a write, what record is left (transition_history append), what system-warning hook capability is defined, and what is deferred to L2+ (FF-3)?"

**Verification criteria:**
- [ ] Write authority at first ship: HUMAN-EDIT ONLY. The user edits `docs/autonomy_level.md` directly when ready to graduate.
- [ ] Trigger named: human decides when graduation criteria are met (per `docs/autonomy_ladder.md`'s evidence-gates: e.g., L1→L2 needs ≥10 navigation maps with selection rationale + `navigation_memory.md` schema).
- [ ] Record-left specified: when the user updates `current_level` + `set_at` + `set_by` + `rationale`, they also append the PRIOR state to `transition_history` (or the convention specifies that the write must be atomic across these fields).
- [ ] System-warning hook capability defined: routeman (or any consumer of the register) MAY observe that an L_N → L_{N+1} evidence-gate per `docs/autonomy_ladder.md` Section 6 is met, and emit a warning ("L1→L2 gate may be met: ≥10 navigation maps observed; consider editing `docs/autonomy_level.md`"). The warning is READ-ONLY signal; it does NOT auto-write.
- [ ] System-set writes (G-3+ from Surfacing) DEFERRED to L2+ follow-up inquiry. Revival trigger: when L1→L2 calibration data is available and the system-Selector graduation is being designed.

### P4 — SIDECAR-BOUNDARY STATEMENT

**Question:** "What is the boundary statement that distinguishes the autonomy register from `_navig.md` / `_state.md` / `_branch.md` / `_meta_state.md` / `navigation_memory.md` to prevent sidecar proliferation and reader confusion?"

**Verification criteria:**
- [ ] Project-wide vs per-inquiry distinction stated: register is PROJECT-WIDE (`docs/`); the other sidecars are per-inquiry (`_navig.md` / `_state.md` / `_branch.md`) or per-meta-loop-session (`_meta_state.md` / `navigation_memory.md`).
- [ ] Distinct purpose vs each adjacent sidecar named:
  - vs `_state.md`: `_state.md` tracks inquiry-pipeline status (which discipline ran); register tracks project-wide autonomy level.
  - vs `_branch.md`: `_branch.md` tracks inquiry question/goal context; register is unrelated.
  - vs `_navig.md`: `_navig.md` tracks routeman's per-invocation persistence (frontier ledger); register tracks project-wide autonomy level (single value, project-level).
  - vs `_meta_state.md`: `_meta_state.md` tracks cross-inquiry traversal state (visited paths, selections); register tracks autonomy level. They are PEERS at the project-wide layer (when `_meta_state.md` exists at L1+).
  - vs `navigation_memory.md`: `navigation_memory.md` tracks Navigator-side selection memory (L2+ artifact); register tracks autonomy level. Peers.
- [ ] No cross-references between the register and other sidecars at first ship; if future use-cases force cross-reference, that's a follow-up.

### P5 — TWO-LADDERS DISAMBIGUATION NOTE

**Question:** "What disambiguation note resolves the two-ladders question for register readers — naming the meta-loop ladder (`autonomy_ladder.md` L0-L5) as the register's primary content, with optional extension to `docs/desc.md`'s Level 0-4+ human-role trajectory if a future discipline needs it?"

**Verification criteria:**
- [ ] Two ladders enumerated: (1) meta-loop ladder per `docs/autonomy_ladder.md` (L0-L5; operational role allocation); (2) human-role trajectory per `docs/desc.md` (Level 0-4+; human's review responsibility decreasing).
- [ ] Register's ladder choice stated explicitly: the register's `ladder` field defaults to `meta_loop`; the value space is L0-L5.
- [ ] Routeman's specific reason for reading meta-loop ladder cited: routeman's auto-vs-judgment partition correlates with `autonomy_ladder.md` Section 5's per-level Selector subset.
- [ ] Extension hook documented: if a future discipline needs desc.md's Level 0-4+ (e.g., `/reflect` tracking human-review-trajectory), the schema can add a second field (e.g., `human_role_level`) without breaking existing readers.
- [ ] Note where the disambiguation lives: in the register file's body (a header comment + a one-paragraph statement) AND in the read-convention documentation.

### P6 — RESIDUAL OPEN QUESTIONS (FF LIST)

**Question:** "Which 6 residual open questions remain after the 8 commitments are made, and what is each FF's scope + downstream consumer + revival trigger?"

**Verification criteria:**
- [ ] FF-1 (frontmatter field names + types finalization) — downstream consumer: SKILL.md authoring; revival trigger: when SKILL.md is being written.
- [ ] FF-2 (convention placement: routeman SKILL.md vs new protocol doc) — downstream consumer: SKILL.md authoring; revival trigger: same.
- [ ] FF-3 (system-set L2+ follow-up inquiry) — downstream consumer: L2 graduation inquiry; revival trigger: when L1→L2 calibration data is available.
- [ ] FF-4 (generalization to other autonomy-aware disciplines) — research frontier; revival trigger: when 2+ disciplines other than routeman are observed wanting the register.
- [ ] FF-5 (per-discipline overrides) — research frontier; revival trigger: when a discipline emerges that needs autonomy independent of project-wide level.
- [ ] FF-6 (two-ladders reconciliation when they diverge in practice) — research frontier; revival trigger: when project is at meta-loop L2 but desc.md Level 1 (or analogous divergence).

### P7 — INHERITED COMMITMENTS RE-TEST

**Question:** "Does each commitment from the 6 prior outputs + `docs/autonomy_ladder.md` + `docs/desc.md` survive this inquiry's adoption of the autonomy register, and what surgical-correction is needed where they don't?"

**Verification criteria:**
- [ ] Each prior enumerated with its load-bearing commitments.
- [ ] Each commitment marked PRESERVED / EXTENDED / CORRECTED / FLAGGED-WITHOUT-RE-TEST with reason.
- [ ] `docs/autonomy_ladder.md`'s commitments (L0-L5 ladder; 9-axis frame; evidence-gates) are PRESERVED — this inquiry adopts the value space, doesn't redefine.
- [ ] `docs/desc.md`'s commitments (Level 0-4+ trajectory; consciousness-gradient framing) are PRESERVED — this inquiry explicitly distinguishes from desc.md's ladder.
- [ ] Routeman design memo's "graduated-autonomy classification" feature becomes IMPLEMENTABLE post-this-inquiry (the register provides the runtime substrate it needed).
- [ ] Routeman LAYER-2 Calibration-Drift mode becomes DETECTABLE — the register provides the declared level for the audit to compare against actual.
- [ ] No prior commitment silently dropped.

### Question-tree stopping criteria check

- P1: tractable (4 sub-commitments × short paragraph each + 1 example).
- P2: tractable (read + failure-handling + warning + placement note).
- P3: tractable (write + trigger + record + warning hook + defer note).
- P4: tractable (5 boundary distinctions + no-cross-reference rule).
- P5: tractable (2 ladders + ladder choice + reason + extension + placement).
- P6: tractable (6 FFs × short entry).
- P7: tractable (6 priors + 2 docs × verdicts).

No piece requires sub-decomposition. **Stopping criteria met: TRACTABLE for all seven.**

---

## Step 5 — Interfaces

| From | To | What flows | Direction | Notes |
|---|---|---|---|---|
| P1 (file spec) | P2 (read) | File path + schema field definitions | one-way | Read references P1's commitments. |
| P1 (file spec) | P3 (write) | Schema + lifecycle behavior | one-way | Write conforms to P1's schema + executes P1's lifecycle. |
| P2 (read) | P3 (write) | Failure-handling references schema P3 enforces | one-way (read-only) | If write generates malformed register, read's failure-handling catches it. |
| P5 (two-ladders) | P1 (file spec) | Ladder choice flows INTO schema's `ladder` field | one-way | P5's choice is recorded in P1's schema. |
| P5 (two-ladders) | P2 (read) | Disambiguation informs read's ladder-awareness | one-way | Read knows which ladder it's reading. |
| P4 (sidecar boundary) | P1 (file spec) | Boundary statement clarifies P1's project-wide scope | one-way | P4 lives alongside P1 (or in P1's documentation). |
| P7 (re-test) | P1 + P2 + P3 + P4 + P5 | Validation against priors | one-way (read-only) | Re-test reads all priors + this inquiry's commitments; produces verdicts. |
| Sensemaking SV6 | P1 + P2 + P3 + P4 + P5 + P6 + P7 | Stabilized model | one-way | All pieces build on SV6. |
| External: 6 priors + 2 docs | P7 | Prior commitments to be re-tested | one-way (read-only) | Inputs to re-test. |

### Assumptions-not-data check

- **P1 → P2/P3 interfaces:** P1's schema field names assumed stable. Hidden coupling: if P1's schema field names shift (e.g., `current_level` renamed to `level`), P2 + P3 must update. Mitigation: name fields explicitly in P1's verification criteria; the names are commitments.
- **P5 → P1 interface:** P5 assumes P1's schema has a `ladder` field. Hidden coupling: if P1 drops the `ladder` field, P5's extension hook is broken. Mitigation: P1 commits to the `ladder` field as required.
- **P2 → P3 indirect interface:** P2's failure-handling assumes write protocol produces well-formed registers. If P3's lifecycle changes (e.g., schema versioning is added later), P2's failure-handling may need to evolve. Mitigation: schema versioning is a candidate extension; if added, P2 must handle.
- **P4 → adjacent sidecars assumption:** P4 assumes the existing sidecars' purposes (per their own design). If a sidecar's purpose later shifts (e.g., `_state.md` gains a project-wide field), P4's distinction may need to evolve. Mitigation: P4 cites each sidecar's CURRENT purpose with link to source.

---

## Step 6 — Dependency Order

```
┌─────────────────────────────────────────┐
│  Sensemaking SV6 (input to all pieces)  │
└────────────────┬────────────────────────┘
                 │
        ┌────────┴───────────┐
        v                    v
┌──────────────┐      ┌──────────────────┐
│  P5 (two-    │      │  P1 (FILE SPEC)  │   ← P1 + P5 can be drafted concurrently
│   ladders)   │─────→│  (location +     │     (P5 feeds into P1's schema)
└──────────────┘      │   format +       │
                      │   schema +       │
                      │   lifecycle)     │
                      └────┬─────────────┘
                           │
              ┌────────────┼─────────────┐
              v            v             v
       ┌──────────┐  ┌──────────┐  ┌──────────────┐
       │ P2 (READ │  │ P3 (WRITE│  │ P4 (SIDECAR  │  ← P2 + P3 + P4 drafted
       │  PROTO.) │  │  PROTO.) │  │  BOUNDARY)   │     in parallel after P1
       └──────────┘  └──────────┘  └──────────────┘
                                   
       ┌──────────┐                
       │ P6 (FF   │  ← Independent throughout
       │  LIST)   │
       └──────────┘
                                   
       After P1+P2+P3+P4+P5+P6 committed:
                                   
       ┌──────────────────────────┐
       │ P7 (RE-TEST)             │  ← Validates all the above
       └──────────────────────────┘
```

- **P5 (two-ladders) + P1 (file spec):** can be drafted CONCURRENTLY; P5's ladder choice feeds into P1's schema's `ladder` field. The two interleave but neither blocks.
- **P2 (read) + P3 (write) + P4 (sidecar boundary):** PARALLEL after P1. They reference P1's commitments but don't depend on each other (except for P2-P3's read/write failure-handling cross-reference).
- **P6 (FF LIST):** INDEPENDENT throughout. Can be drafted any time.
- **P7 (RE-TEST):** LAST. Consumes all of P1-P6 + the prior commitments.

---

## Step 7 — Self-Evaluation

### Minimum (3 dimensions)

| Dimension | Check | Verdict |
|---|---|---|
| **Independence** | Can each piece be worked on without the others existing? | PASS-WITH-NOTE — Each piece has a coherent question. P2, P3, P4 cite P1 (defined interfaces); P5 cites P1 (defined interface); P7 cites all. The citations are interfaces, not hidden coupling. |
| **Completeness** | Do the pieces cover the inquiry's whole? | PASS — 8 commitments from Sensemaking covered (P1: location+format+schema+lifecycle; P2: read+failure; P3: write; P4: sidecar boundary; P5: ladder choice — overlap with P1's `ladder` field is intentional). 6 FFs covered (P6). Re-test (P7). Cross-doc impact (E17) explicitly out-of-scope-for-decomposition (CONCLUDE handles). |
| **Reassembly** | Pieces + interfaces = whole? | PASS — given P1-P7 + the defined interfaces, the finding assembles: P1 + P5 → register specification; P2 + P3 + P7 → operational protocols + re-test; P4 → boundary statement; P6 → open questions. |

### Determination-mechanism piece check (refinement)

The Q-tree includes a load-bearing concept whose use depends on runtime determination: the **default-to-L0 rule** depends on the runtime check "does the register file exist?" Where in the Q-tree is the determination mechanism addressed?

- **P2 (READ PROTOCOL SPEC)** explicitly commits the absent-register handling (default to L0 + emit warning). The determination mechanism (file-existence check) is part of the read protocol's specification.
- **PASS** — the runtime determination is addressed in P2.

Additionally, the "human-set vs system-set" write authority depends on the runtime check "is the project at L0/L1?" Where in the Q-tree is THIS determination addressed?

- **P3 (WRITE PROTOCOL SPEC)** commits human-only at first ship + defers system-set to L2+. The determination ("project is at L0/L1 NOW") is COMMITTED — current state is L0 per `autonomy_ladder.md` — not runtime-determined per write. The phase-fit is calibrated at design time, not at each write.
- **PASS** — phase-fit is a design-time commitment, not a runtime determination.

### Full (additional 4 dimensions)

| Dimension | Check | Verdict |
|---|---|---|
| **Tractability** | Each piece small enough for single focused pass? | PASS — All seven pieces are tractable; no sub-decomposition needed. |
| **Interface clarity** | All cross-piece flows explicit? Hidden dependencies absent? | PASS — 9 interfaces explicit; assumptions-not-data check applied at 4 internal interfaces. |
| **Balance** | Complexity roughly proportional? | PASS-WITH-NOTE — P1 is slightly larger (4 sub-commitments) than P4/P5/P6 (smaller pieces). But no piece is 80% of work; the distribution is appropriate. |
| **Confidence** | Top-down + bottom-up agree? | HIGH — both passes identified the same five boundaries; no atoms split or forcibly grouped. |

### Failure-modes review

- **Premature decomposition:** No — Sensemaking SV6 is stable; the model accommodates the territory.
- **Wrong boundaries:** No — boundaries cut at moderate-or-weak coupling regions.
- **Hidden coupling:** Checked via assumptions-not-data; 4 identified + mitigated.
- **Missing pieces:** Determination-mechanism check PASS via P2 (file-existence) + P3 (phase-fit committed at design time).
- **Over-decomposition:** No — 7 pieces for 8 commitments + 6 FFs + re-test is appropriate.
- **Ignoring dependencies:** No — dependency order specified (P5+P1 || → P2 || P3 || P4 → P7).
- **Imbalanced decomposition:** No — balance check passed.

---

## Handoff to Innovation

Innovation's task: generate candidate variations for each piece's deliverable shape.

For **P1 (FILE ARTIFACT SPEC):**
- Vary schema (minimum-D2 vs full-D3-with-history vs full-D6-with-evidence-pointers).
- Vary frontmatter key names (terse vs verbose).
- Vary lifecycle (in-place + append vs append-only-log vs full revision-history).

For **P2 (READ PROTOCOL SPEC):**
- Vary failure-handling shape (default+warn vs halt+flag vs hybrid).
- Vary convention placement (in routeman SKILL.md vs new protocol doc).
- Vary read trigger (every invocation vs cached with mtime-invalidation).

For **P3 (WRITE PROTOCOL SPEC):**
- Vary write-trigger formulation (explicit human edit vs system-suggest-with-human-approval workflow).
- Vary system-warning hook specification (compact vs detailed).
- Vary L2+ deferral framing (revival trigger specifics).

For **P4 (SIDECAR-BOUNDARY STATEMENT):**
- Vary placement (in register's body vs in routeman SKILL.md vs in a separate doc).
- Vary distinction-shape (table vs prose).

For **P5 (TWO-LADDERS DISAMBIGUATION NOTE):**
- Vary placement (frontmatter only vs body header vs both).
- Vary extension-hook (named field now vs schema-extensible only).

For **P6 (FF LIST):** mostly compositional; vary grouping (by type vs by downstream consumer).

For **P7 (RE-TEST):** vary verdict taxonomy granularity; vary depth per prior.

Innovation should aim for at least one variation per piece across (generic / focused / contrarian) and run Assembly Check across surviving candidates for cross-piece coherence.
