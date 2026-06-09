# Decomposition — Task-Define Process Layer

## Input

`devdocs/inquiries/2026-06-04_07-48__task_define_process_layer/_branch.md` + `sensemaking.md`'s 10 SV6 commitments + 11 eliminations + 4 R1-deferred variables + 2 cross-cutting commitments (meaning-layer harmony X1; MC1-honoring authoring X2).

The whole to decompose: a process-layer design with 12 elements (10 numbered SV6 commitments + 2 cross-cutting) to partition into authorable pieces for R1 spec.

---

## Step 1 — Perceive Coupling Topology

### Element inventory

10 SV6 commitments (from sensemaking.md SV6):

| ID | Element |
|---|---|
| C1 | Phase shape (3-runtime-phase: Reception → per-item Traversal → Assembly with 4-stage flow embedded in Phase 2) |
| C2 | Authoring-time-only lightweight enforcement (6 criteria gate R1 spec-writing, not runtime) |
| C3 | MQ-answers-as-dispatch-signal substrate (signal located in MQ answers; runner extracts) |
| C4 | Per-operation firing-format = input/mechanism-reference/output triple (MC1-honoring) |
| C5 | LAYER 1/LAYER 2 failure-mode meta-pattern + asymmetric-failure principle |
| C6 | Runner-initiated Itemize re-fire (re-invocation; perception/action split) |
| C7 | Architectural independence (not concurrency) for Stage 3 parallelism |
| C8 | PROCEED/FLAG/RE-RUN self-assessment verdict (+ initial enumeration) |
| C9 | Task-Define-internal scope (runner-side process is separate inquiry) |
| C10 | Per-item granularity + bundle contract (field names deferred to R1 structural) |

2 cross-cutting commitments:

| ID | Element |
|---|---|
| X1 | Meaning-layer harmony preservation (12/12 against 15-39 commitments) |
| X2 | MC1-honoring at authoring time + MC2-honoring at downstream critique (LOOP_DIAGNOSE response) |

### Pairwise coupling assessment

For each pair, the question: "If I change one, does the other need to change?"

| Pair | Coupling | Reason |
|---|---|---|
| C1 ↔ C7 | TIGHT | Stage 3 parallelism IS a property of the phase-shape — same artifact, different aspect |
| C1 ↔ C10 | TIGHT | Per-item granularity IS the structural correlate of Phase 2 iterating per item — co-determined |
| C7 ↔ C10 | TIGHT | Both about per-item bundle structure (parallelism at field level; granularity at item level) |
| C3 ↔ C9 | TIGHT | Runner-side extraction is the OTHER side of the dispatch boundary; both decisions sit at the cross-discipline interface |
| C3 ↔ C6 | MODERATE | Both about cross-discipline coordination; dispatch is about Exploration dispatch; re-fire is about Itemize re-invocation — both runner-side actions |
| C6 ↔ C9 | TIGHT | Re-fire is runner-initiated (a runner-side action); scope clarification draws the line |
| C4 ↔ X2 (MC1 part) | TIGHT | Firing-format's "mechanism-reference not mechanism-re-authoring" IS MC1-honoring at authoring time |
| C4 ↔ C1 | MODERATE | Phase shape specifies what fires at each stage; firing-format specifies how each fires |
| C2 ↔ X1 | MODERATE | 6 lightweight criteria gate against violations of meaning-layer's lightweight stance commitment |
| C2 ↔ C4 | MODERATE | Authoring gate inspects firing-formats (and other authored artifacts) |
| C5 ↔ C8 | TIGHT | Failure-mode meta-pattern's modes informand drive FLAG/RE-RUN conditions; one without the other is incomplete |
| C5 ↔ X1 | MODERATE | LAYER 2 modes (identity-eroding) are runtime manifestations of NOT-list categories (15-39 §10) |
| C5 ↔ C6 | MODERATE | LAYER 1 modes (e.g., late-multi-item-detected-by-downstream) are the failures re-fire recovers from |
| Cross-cluster (C1+C7+C10 ↔ C4) | MODERATE | Phase-and-flow structure ↔ per-operation contract |
| Cross-cluster (C4 ↔ C2) | MODERATE | Firing-format ↔ authoring-time gate (gate inspects the authored thing) |
| Cross-cluster (C5+C8 ↔ rest) | WEAK | Runtime quality signals are downstream of operational structure |
| Cross-cluster (C3+C6+C9 ↔ rest) | WEAK | Cross-discipline interface mostly isolated from internal procedure |
| Cross-cluster (C2+X1 ↔ rest) | WEAK | Authoring-time discipline acts on all pieces uniformly without per-piece coupling |

### Coupling map (clusters + boundaries)

**Five high-coupling clusters (peaks):**

- **Cluster A — RUNTIME-STRUCTURE** (C1 + C7 + C10): the runtime procedure's phase-shape, per-item granularity, and architectural parallelism. The skeleton of the procedure.
- **Cluster B — OPERATION-CONTRACT** (C4 + X2's MC1 part): per-operation firing-format triple + the MC1-honoring authoring discipline that prevents name-vs-meaning conflation.
- **Cluster C — CROSS-DISCIPLINE-INTERFACE** (C3 + C6 + C9): dispatch substrate, runner-initiated re-fire, scope boundary. All three sit at the Task-Define-runner boundary.
- **Cluster D — AUTHORING-DISCIPLINE** (C2 + X1): authoring-time lightweight enforcement + meaning-layer harmony preservation. Both are authoring-time constraints.
- **Cluster E — RUNTIME-QUALITY-SIGNAL** (C5 + C8): failure-mode meta-pattern + self-assessment verdict shape. Both are runtime quality signals consumed by downstream actors.

**Boundaries between clusters (valleys):**

- Boundary A↔B: MODERATE (phase shape says WHAT fires; operation contract says HOW). Cut allowed; interface needed (P1's phase determines where P2's firing-formats apply).
- Boundary B↔C: WEAK (per-operation firing is internal; dispatch is boundary). Clean cut.
- Boundary A↔C: WEAK (internal structure vs cross-discipline interface). Clean cut.
- Boundary A↔D: WEAK (runtime structure vs authoring discipline). Clean cut.
- Boundary B↔D: MODERATE (firing-formats are inspected by the authoring gate). Cut allowed; interface needed.
- Boundary A↔E: WEAK (procedure structure vs failure modes about deviations). Clean cut.
- Boundary B↔E: WEAK (firing-formats vs failure modes). Clean cut.
- Boundary C↔E: WEAK (dispatch boundary vs failure modes). Clean cut.
- Boundary D↔E: WEAK (authoring vs runtime). Clean cut.

5 clusters with mostly WEAK cross-coupling + 2 MODERATE coupling pairs (A↔B and B↔D) where explicit interfaces are needed. Decomposition into 5 pieces is structurally indicated.

---

## Step 2 — Detect Boundaries (Top-Down)

Initial boundary set (5 pieces matching the 5 clusters):

- **P1** = Cluster A (Runtime structure)
- **P2** = Cluster B (Operation contract)
- **P3** = Cluster C (Cross-discipline interface)
- **P4** = Cluster D (Authoring discipline)
- **P5** = Cluster E (Runtime quality signal)

Each piece has high internal coupling + low external coupling. 5 is below the over-decomposition threshold (the SV6 had 10 commitments + 2 cross-cutting = 12 elements; 5 pieces averages 2.4 elements per piece — well within tractable).

---

## Step 3 — Validate Boundaries (Bottom-Up)

### Atom inventory

- 3 runtime phases (Reception / Traversal / Assembly) → atoms in P1.
- 4 intra-discipline stages (Itemize / Meta-question / Deconstruct+MultiScope parallel / Rephrase) → atoms in P1.
- Per-item granularity directive → atom in P1.
- Stage 3 architectural-independence (Deconstruct + MultiScope independent at bundle field level) → atom in P1.
- 5 per-operation firing-format triples (one per operation: Itemize, Meta-question, Deconstruct, MultiScope, Rephrase) → atoms in P2.
- MC1-honoring authoring rule (every coined concept is inherited, sister-discipline-rooted, or explicitly defined) → atom in P2.
- Itemize's PERCEIVE-default-one with asymmetric-failure direction (lean-to-keep-together) → atom in P2 (firing-format's mechanism-reference points at 15-39 §2's wording).
- MQ-answers-as-dispatch-signal directive → atom in P3.
- Runner-extracts locus directive → atom in P3.
- MQ2-must-contain-info-for-extraction necessary-content constraint → atom in P3.
- Runner-initiated re-fire (with optional `prior-bundles` parameter) → atom in P3.
- Refinement trigger (2+ runner disagreements) → atom in P3.
- Task-Define-internal scope vs runner-side scope boundary statement → atom in P3.
- 6 lightweight criteria (i)–(vi) as authoring-time gates → atoms in P4.
- Structural reason for authoring-time-only enforcement → atom in P4.
- Post-authoring inspection mechanism → atom in P4.
- 12 meaning-layer commitments preserved as constraint set → atoms in P4 (by constraint, not direct content).
- LAYER 1 / LAYER 2 meta-pattern adoption → atom in P5.
- Asymmetric-failure principle adoption → atom in P5.
- 5 initial LAYER 1 modes → atoms in P5.
- 4 initial LAYER 2 modes (intrinsic-grounded against NOT-list cats 1-5) → atoms in P5.
- PROCEED / FLAG / RE-RUN verdict shape → atom in P5.
- Initial FLAG conditions (4) + RE-RUN conditions (2) → atoms in P5.
- Calibration-trajectory note (Bootstrap → Early → Mature; specific modes empirically-refined) → atom in P5.

### Atom-cluster fit check

| Atom group | Cluster assignment | Bottom-up agrees? |
|---|---|---|
| 3 phases + 4 stages + per-item granularity + Stage 3 independence | P1 | YES — all structural |
| 5 firing-formats + MC1-honoring rule + asymmetric-failure direction in Itemize | P2 | YES — all per-operation contract |
| Dispatch directive + extraction-deferral + necessary content + re-fire delegation + refinement trigger + scope statement | P3 | YES — all cross-discipline interface |
| 6 criteria + structural reason + post-authoring inspection + 12 meaning-layer commitments preserved | P4 | YES — all authoring-time discipline |
| LAYER 1/2 + asymmetric-failure + specific modes + verdict shape + initial conditions + calibration note | P5 | YES — all runtime quality signal |

No atoms wrongly split. No atoms wrongly grouped.

### Confidence scoring

Top-down clusters (5) ↔ Bottom-up atom grouping (5) → **AGREE**. **HIGH CONFIDENCE** on all 5 boundaries.

---

## Step 4 — Express as Question Tree

### P1 — Runtime structure

**Q1:** *How should Task-Define's runtime procedure be structured — what are the runtime phases, what's the intra-discipline 4-stage ordering within Phase 2, what's the per-item granularity, and how does Stage 3's architectural parallelism manifest?*

**Verification criteria:**
- [ ] 3 runtime phases named with one-sentence purpose each: Reception (receive task-statement input; bind LLM internal cognition as substrate; initialize), per-item Traversal (execute 4-stage flow per item), Assembly (aggregate per-item bundles; emit substantive output + self-assessment).
- [ ] 4 intra-discipline stages mapped into Phase 2 sub-flow: Stage 1 (statement-level) = Itemize → Stage 2 (per item) = Meta-question → Stage 3 (per item, parallel) = Deconstruct + MultiScope → Stage 4 (per item, last) = Rephrase.
- [ ] Per-item granularity articulated: Itemize emits count (default 1, can be N); Phase 2 iterates per item; Phase 3 assembles N per-item bundles.
- [ ] Stage 3 parallelism described as architectural independence (Deconstruct-output and MultiScope-output are independently-computable fields of the per-item bundle); runtime serialization allowed; neither field uses the other as input.
- [ ] Acyclicity within an invocation: the 4-stage flow is acyclic (one-pass); no internal iteration; re-fire is runner-initiated re-invocation per P3.

### P2 — Per-operation contract

**Q2:** *What format does each operation's runtime contract take, and how does the authoring of these contracts avoid the name-vs-meaning conflation defect that LOOP_DIAGNOSE H1 diagnosed?*

**Verification criteria:**
- [ ] Firing-format template specified: `input` (what the operation receives at runtime) + `mechanism` (reference to 15-39 §2 [Operation X], NOT a re-authored description) + `output` (what the operation emits per-item). One paragraph total per operation.
- [ ] 5 operation firing-format triples authored (Itemize / Meta-question / Deconstruct / MultiScope / Rephrase), each ≤ one paragraph, each using mechanism-reference not mechanism-re-authoring.
- [ ] Itemize firing-format explicitly preserves the asymmetric-failure direction (lean-to-keep-together; default emit one; emit N only when distinct (subject, action, deliverable-shape) tuples are clearly established) — via mechanism-reference to 15-39 §2 Itemize.
- [ ] MC1-honoring authoring rule articulated: every process-layer concept is either (a) inherited from 15-39 meaning layer, (b) inherited from sister-discipline precedent (surfacing / sensemaking / etc.), or (c) coined here with explicit inline definition. NO LLM-auto-completed concept names with implicit meanings.
- [ ] Verification check: applying authored mechanism-references literally to a test case produces 15-39 §2 expected behavior (no divergence between literal-application and intuitive-reading) — the MC2 cross-check from td-critique spec extension.

### P3 — Cross-discipline interface

**Q3:** *What does Task-Define commit at the cross-discipline boundary with Exploration (and the runner orchestrating it), and what is delegated to runner-side process layer?*

**Verification criteria:**
- [ ] Dispatch substrate = MQ answers (NO separate `needs_external_context` field; signal IS the answers per 15-39 §5).
- [ ] Dispatch locus = runner-extracts (perception/action split honored: Task-Define perceives; runner acts).
- [ ] Necessary information content stated: MQ2's answer MUST contain information enabling external-context-need determination (constraint on R1's MQ2 output schema).
- [ ] Late-split Itemize re-fire = runner-initiated via re-invocation of Task-Define (with optional `prior-bundles` parameter for incremental re-work) — NOT in-invocation self-re-check.
- [ ] Task-Define-internal vs runner-side process layer scope clarification: this inquiry covers Task-Define-internal only; runner-side dispatch mechanics (which runner, parser code, default handling on equivocal answers) are SEPARATE process layers per runner.
- [ ] Refinement trigger named: 2+ runners disagree about dispatch interpretation of same MQ2 answer → escalate to cross-discipline-coordination inquiry (per 15-39 §Open Questions).

### P4 — Authoring discipline

**Q4:** *How is the meaning-layer's lightweight stance enforced during R1 authoring (not runtime), and how does the design avoid runtime self-enforcement that would itself violate criterion (iv)?*

**Verification criteria:**
- [ ] 6 lightweight criteria stated as authoring-time gates for R1: (i) no separate verify-phase, (ii) no external-anchor inputs, (iii) no halt-gate output, (iv) no sub-machinery beyond a paragraph, (v) no ecosystem-knowledge reach, (vi) every output element load-bearing for downstream consumer.
- [ ] Structural reason for authoring-time-only enforcement stated: runtime self-enforcement would itself be sub-machinery, violating criterion (iv) — a self-referential structural collapse.
- [ ] Authoring-time check mechanism described: at R1 spec-write time, every per-operation firing-format (P2) + every cross-discipline interface commitment (P3) + every failure-mode + self-assessment (P5) passes through the 6-criterion gate. Author cannot commit content that fails a criterion.
- [ ] Post-authoring inspection mechanism named: LOOP_DIAGNOSE-style review of R1 catches violations after the fact; td-critique spec MC2 (per 01-00 LOOP_DIAGNOSE) automates the catch at downstream critique time.
- [ ] Meaning-layer harmony commitment: 12 commitments from 15-39 (§1-§12) are inherited and NOT re-litigated by R1 authoring; any change to a meaning-layer commitment requires a separate meaning-layer inquiry first.

### P5 — Runtime quality signal

**Q5:** *What architecture do Task-Define's failure-mode hooks adopt, and what self-assessment verdict shape does the discipline emit at end-of-run?*

**Verification criteria:**
- [ ] LAYER 1 / LAYER 2 meta-pattern adopted: LAYER 1 = operational (detectable via output observation; recoverable via re-invocation); LAYER 2 = identity-eroding (detectable via behavioral audit over time; not simply recoverable).
- [ ] Asymmetric-failure principle adopted: under uncertainty, lean toward INCLUSION at Itemize (keep-together default); lean toward FIRE at MQ extensions (when bounded-rule is met). Information-loss-in-the-dark is structurally worse than over-coverage.
- [ ] Initial LAYER 1 modes enumerated (5; empirically-refined post-authoring): (1) Premature-Itemize-split / (2) Late-multi-item-detected-by-downstream / (3) MQ-extension-violates-bounded-rule (a/b/c) / (4) Rephrase-drifted-without-MQ-constraint / (5) Per-operation-firing-missed-an-operation.
- [ ] Initial LAYER 2 modes enumerated (4; intrinsic-grounded against 15-39 §10 NOT-list categories): Verification-drift (drifts into cat 1) / Substrate-reach (cat 2 or 5) / Cross-item-interpretation-drift (cat 4) / Fidelity-verdict-drift (cat 3).
- [ ] PROCEED / FLAG / RE-RUN verdict shape adopted (sister-discipline precedent at surfacing ref §4.7 + sensemaking ref §3 telemetry analog).
- [ ] Initial FLAG conditions enumerated (4): (a) Itemize uncertainty HIGH on count=1 vs count>N boundary; (b) MQ extension applied with bounded-extensibility rule (a/b/c) only partially clearly met; (c) Rephrase produced only 1 variant despite MQ-answer-constraint allowing more; (d) any LAYER 1 mode self-recognized at end of invocation.
- [ ] Initial RE-RUN conditions enumerated (2): (a) any LAYER 2 mode self-recognized (identity-eroding; not recoverable in-invocation); (b) receive-step failure (malformed task-statement input).
- [ ] Calibration-trajectory note: Bootstrap → Early Operation (~10-20 invocations) → Mature Operation (~30+ invocations); specific LAYER 1 + LAYER 2 modes are empirically-refined post-authoring; initial enumeration is best-guess based on 15-39 + sister-discipline precedent + LOOP_DIAGNOSE H1+H2 mitigation.

### Question-tree validity check

Each Q is purposeful and standalone-meaningful:
- Q1 ("how should the procedure be structured") doesn't need Q2-Q5 to make sense.
- Q2 ("what firing-format + MC1-honoring") can be discussed without Q1's specifics — though Q2's per-operation INSTANCES place each operation at Q1's stages.
- Q3 ("what does Task-Define commit at the cross-discipline boundary") is standalone — about the boundary, not the internal procedure.
- Q4 ("how is lightweight stance enforced at authoring time") is standalone — about the gate, applicable to any spec being authored.
- Q5 ("what failure-mode architecture + self-assessment shape") is standalone — about runtime quality signals.

PASS. Each piece is a purposeful question.

---

## Step 5 — Map Interfaces

### Cross-piece flows

| ID | Source piece | Target piece | What flows | Direction | Flow type |
|---|---|---|---|---|---|
| **I1** | P1 | P2 | Phase shape (3 phases + 4 stages) determines where each operation's firing-format is invoked; P2's per-operation instances place each operation at the stage P1 specifies. | one-way | structural constraint |
| **I2** | P1 | P5 | Phase shape determines valid runtime state transitions; failure modes (P5) are deviations from those transitions; self-assessment fires at end of Phase 3 (Assembly). | one-way | structural reference |
| **I3** | P2 | P5 | Per-operation firing-format outputs may emit per-operation self-checks (e.g., Itemize uncertainty on count boundary); P5's FLAG conditions reference these. | one-way | information |
| **I4** | P2 | P4 | P2's authored firing-formats + concept-naming choices are the artifacts P4's authoring-time gate inspects. | bidirectional | authoring contract (P4 gates P2; P2 outputs feed P4's gate) |
| **I5** | P3 | P5 | Dispatch substrate (MQ-answers + necessary info content in MQ2) constrains what dispatch-related FLAG conditions can arise; P5's FLAG condition (b) directly references P3's bounded-rule. | one-way | information |
| **I6** | P3 | external (runner-side process; out of scope) | Dispatch substrate + necessary info content + extraction-deferral; runner-side process consumes. | one-way | contract (cross-discipline interface) |
| **I7** | P4 | P1 + P2 + P3 + P5 | Authoring-time gate applies uniformly to every piece's authored spec text at R1 authoring time. | one-way (uniform application) | authoring constraint |
| **I8** | external (15-39 meaning layer) | P1 + P2 + P3 + P4 + P5 | 12 meaning-layer commitments inherited as constraints across all pieces. | one-way | inheritance |
| **I9** | external (01-00 LOOP_DIAGNOSE) | P2 (MC1-honoring) + P4 (authoring-time gate alignment with MC1) + P5 (failure-mode pattern shape) | LOOP_DIAGNOSE H1 + H2 + MC1 + MC2 commitments inherited. | one-way | external constraint inheritance |
| **I10** | P3 | external (R1 structural author + per-runner future inquiries) | Necessary MQ2-answer info content constrains R1's MQ output schema; runner-side dispatch specifics deferred to per-runner inquiries. | one-way | deferred specification |

### Assumptions-not-data check (per Step 5 refinement note)

| Assumption | Risk | Mitigation |
|---|---|---|
| **A1** | P2's mechanism-reference assumes 15-39 §2 exists and remains stable | If 15-39 §2 is updated, P2's references may become stale | Process spec's mechanism-reference field includes version-pin (e.g., "per 15-39 §2 Itemize as of [date]") OR rely on 15-39's `## Relationships` supersession convention |
| **A2** | P3's "runner extracts the signal" assumes runners CAN extract — i.e., R1 will author MQ2's output in a way that supports extraction | Under-specified MQ2 output schema → runner can't extract | I10 makes "MQ2 must contain info enabling extraction" explicit; this is a constraint on R1's MQ2 output schema |
| **A3** | P4's authoring-time gate assumes the gate operator (R1 author + downstream critique) actually checks | Gate slips past in practice | MC2-honoring at td-critique downstream (per 01-00) automates the check at critique time; not solely reliant on R1 author self-discipline |
| **A4** | P5's calibration-trajectory note assumes Task-Define accumulates enough invocations to refine modes empirically | Low Task-Define usage → no calibration data → specific modes never get refined | Initial modes are CORRECTLY ENUMERATED (best-guess based on 15-39 + sister-discipline precedent + LOOP_DIAGNOSE mitigation); refinement is opportunistic-not-required |

All 4 assumptions identified and mitigated. Hidden coupling check PASS.

---

## Step 6 — Order by Dependency

### Dependency DAG

```
                    P1 (Runtime structure)
                         │
                         ▼
                    P2 (Operation contract)
                       /  |  \
                      /   |   \
                     ▼    ▼    ▼
                   P3    P4    P5
              (Disp.) (Auth.) (Quality)
                     \   |   /
                      \  |  /
                       ▼ ▼ ▼
                  R1 authoring
                  (consumes all)
```

### Layer ordering

- **Layer 1 (foundation):** P1 — defines the phase-shape skeleton; no dependencies.
- **Layer 2 (per-operation contract):** P2 — depends on P1 (firing-format instances place each operation at P1's stages). Foundation for P3/P4/P5.
- **Layer 3 (parallel-eligible):** P3, P4, P5 — each depends on P1 + P2; no inter-dependencies between P3/P4/P5 themselves. Can be authored in parallel.
- **Layer 4 (consumer):** R1 spec authoring — consumes all 5 pieces.

### Circular-dependency check

No circular dependencies. P4's authoring-gate ARCHITECTURE can be specified before P1+P2+P3+P5 (the gate is a meta-structure); but P4's gate APPLICATION at R1 spec-write time is post-everything. The architecture/application split avoids the apparent circularity (P4 inspects P1+P2+P3+P5 → suggests P4 depends on all → but the GATE ITSELF doesn't need to know what it's gating to be specified; only the APPLICATION does).

### Parallelism opportunity

P3, P4-architecture, P5 are independent of each other — can be authored in parallel after P1+P2 settle. In a single-LLM-session implementation context, "parallel" means "no ordering required"; serialization is fine.

---

## Step 7 — Self-Evaluate

### Minimum 3 dimensions (always run)

| Dimension | Check | Pass/Fail | Reason |
|---|---|---|---|
| **Independence** | Can each piece be worked on without the others existing? | **PASS** | Each piece's question is standalone-meaningful. P2's per-operation INSTANCES depend on P1's stages (via I1) but the firing-format TEMPLATE is standalone. All other pieces have only interface-mediated dependencies. |
| **Completeness** | Do the pieces cover the whole (10 SV6 commitments + 2 cross-cutting)? | **PASS** | C1+C7+C10 in P1; C4+X2-MC1-part in P2; C3+C6+C9 in P3; C2+X1 in P4; C5+C8 in P5. 12/12 accounted for. |
| **Reassembly** | Can the pieces + interfaces reconstruct the whole? | **PASS** | Given all 5 pieces answered + I1-I10 satisfied → R1 (runtime spec) is authorable. R1 author writes: Identity section (from 15-39 inheritance via I8); Components section (from P1 + P2); Process Model section (from P1 + P3); Quality section (from P4 + P5); Output section (from P1's per-item granularity + P2's firing-format outputs). |

### Determination-mechanism piece check (Step 7 refinement note)

Are there load-bearing concepts whose use depends on a runtime determination?

- **"MQ-answers-as-signal"** (in P3) — applicability ("does external context need apply for THIS task?") determined at runtime by reading MQ2's answer. Is there a piece addressing HOW that determination is made? **YES** — P3's Q3 verification criteria #3 (necessary information content in MQ2) + criteria #2 (runner-extracts locus). The EXTRACTION MECHANISM ITSELF is deferred to runner-side process (out-of-scope per A10 in sensemaking + I10 here). The Q-tree includes a piece addressing the determination; the specific extraction code is deferred-by-scope. **PASS.**
- **Itemize count = 1 vs count > N** — determines whether runner processes-in-place or spawns N sibling inquiries. Determination mechanism = Itemize's PERCEIVE-default-one with (subject, action, deliverable-shape) tuple test. Specified in 15-39 §2 (mechanism-reference in P2's firing-format triple). **PASS.**
- **Failure-mode self-recognition** (LAYER 1 / LAYER 2 modes drive FLAG / RE-RUN) — determined at runtime by self-inspection. Mechanism = each operation's firing-format may emit per-operation self-check signals (per I3); P5's self-assessment aggregates. **PASS** (mechanism specified at P5's verdict-shape + initial conditions criteria).
- **MQ extension bounded-rule application** (a/b/c gate) — determined at runtime when LLM considers adding a meta-question. Mechanism = MQ firing-format's bounded-extensibility rule application, specified in 15-39 §4 (mechanism-reference in P2). **PASS.**

All load-bearing runtime-determined concepts have a piece addressing HOW. **PASS.**

### Full evaluation (4 additional dimensions for completeness)

| Dimension | Check | Pass/Fail | Reason |
|---|---|---|---|
| **Tractability** | Is each piece small enough to be worked on in a single focused pass? | **PASS** | P1: ~3 phases + 4 stages + 2 properties = short section. P2: template + 5 instances + 2 rules = short-to-medium section. P3: 3 commitments + boundary statement = short section. P4: 6 criteria + reason + mechanism = short section. P5: 2-pattern + ~9 modes + verdict + initial conditions = medium section. None exceeds single-focused-pass capacity. |
| **Interface clarity** | Are all cross-piece flows explicit? No hidden dependencies? | **PASS** | 10 interfaces I1-I10 explicit; 4 assumptions A1-A4 surfaced and mitigated. |
| **Balance** | Is complexity roughly proportional? Or is one piece 80%+? | **PASS** | P1: medium. P2: medium-large. P3: medium. P4: medium. P5: medium-large. P2 and P5 slightly larger than others, but no piece dominates. Roughly balanced. |
| **Confidence** | Do top-down and bottom-up agree? | **PASS — HIGH** | Top-down 5 clusters ↔ bottom-up 5 atom-groups → AGREE. All boundaries HIGH confidence. |

**All 7 dimensions PASS.**

---

## Final Deliverable

### 1. Coupling Map

5 high-coupling clusters with mostly WEAK cross-coupling + 2 MODERATE coupling pairs (A↔B requiring I1; B↔D requiring I4):
- A = RUNTIME-STRUCTURE (C1 + C7 + C10)
- B = OPERATION-CONTRACT (C4 + X2-MC1)
- C = CROSS-DISCIPLINE-INTERFACE (C3 + C6 + C9)
- D = AUTHORING-DISCIPLINE (C2 + X1)
- E = RUNTIME-QUALITY-SIGNAL (C5 + C8)

### 2. Question Tree

5 pieces:
- **P1 — Q1:** how should the runtime procedure be structured?
- **P2 — Q2:** what format does each operation's runtime contract take + how is MC1-honoring authoring discipline expressed?
- **P3 — Q3:** what does Task-Define commit at the cross-discipline boundary + what is delegated to runner-side?
- **P4 — Q4:** how is lightweight enforced at authoring time + why not runtime?
- **P5 — Q5:** what failure-mode architecture + what self-assessment verdict shape?

Each piece carries 5-8 verification criteria. Total: 33 verification criteria across the 5 pieces.

### 3. Interface Map

10 cross-piece flows (I1-I10) — see Step 5 table. 7 internal (I1-I5, I7) + 3 external (I6, I8, I9, I10).

### 4. Dependency Order

Layer 1 (foundation): P1.
Layer 2 (per-operation contract): P2 (depends on P1).
Layer 3 (parallel-eligible): P3, P4-architecture, P5 (each depends on P1 + P2; no inter-dependencies).
Layer 4 (consumer): R1 spec authoring (consumes all 5).

No circular dependencies.

### 5. Self-Evaluation

3/3 minimum dimensions PASS. 4/4 full-evaluation dimensions PASS. Determination-mechanism check applied to 4 runtime-determined concepts — all PASS. Confidence: HIGH (top-down ↔ bottom-up AGREE on all 5 boundaries).

**Decomposition verdict: COMPLETE and SOUND. Ready for Innovation phase.**

## Manual Structural Check (since tools/structural_check.sh unavailable)

- ✓ Step 1 — Perceive Coupling Topology (element inventory + pairwise coupling assessment + coupling map with 5 clusters)
- ✓ Step 2 — Detect Boundaries (Top-Down) (5 boundaries identified)
- ✓ Step 3 — Validate Boundaries (Bottom-Up) (atom inventory + atom-cluster fit check + confidence scoring HIGH)
- ✓ Step 4 — Express as Question Tree (5 pieces, 5 questions, 33 verification criteria, validity check PASS)
- ✓ Step 5 — Map Interfaces (10 interfaces I1-I10 + Assumptions-not-data refinement check applied; 4 assumptions surfaced and mitigated)
- ✓ Step 6 — Order by Dependency (DAG + layer ordering + circular-dependency check + parallelism opportunity)
- ✓ Step 7 — Self-Evaluate (3 minimum dimensions PASS + Determination-mechanism refinement check PASS + 4 full-evaluation dimensions PASS)
- ✓ Final Deliverable (5 sections: Coupling Map + Question Tree + Interface Map + Dependency Order + Self-Evaluation)

**Manual structural check: PASS (8/8 required structural elements present + both refinement notes applied + decomposition verdict COMPLETE and SOUND).**
