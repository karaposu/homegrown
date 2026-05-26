# Exploration: Atomic Operations as Reusable Protocols?

## User Input

Source: `/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-11_22-16__atomic_operations_as_reusable_protocols/_branch.md`

Question (restated): is it useful to extract the 4 shared atomic operations (input reading; typed-item production; metadata attachment; structured-map assembly) into reusable shared definitions — and what is the right shape if so, given N=2 confirmed TEM-instances?

---

## 1. Mode and Entry Point

**Mode: mixed.** Artifact mode for surveying what the project currently has (protocols in `homegrown/protocols/`; pattern docs at `devdocs/patterns/`; discipline specs at `homegrown/<discipline>/references/`). Possibility mode for generating candidate extraction shapes.

**Entry point: signal-first.** User's signal: "useful?" + "more granular understanding." Probe the usefulness question via candidate shapes + cost/benefit per shape.

**Surround layer** (scanned before deep probes):
- `homegrown/protocols/` — existing procedural protocols (LOOP_DIAGNOSE, CONCLUDE, BRANCH_INQUIRY) describe HOW TO DO procedures. They're not capability definitions.
- `homegrown/<discipline>/references/` — discipline specs (Sensemaking, Explore, Decompose, Innovate, td-Critique). Each describes its own atomic operations IN ITS OWN LANGUAGE.
- `devdocs/patterns/` — proposed by 13-45's MUST; doesn't yet exist. Would be the cross-discipline pattern observation layer.
- `devdocs/inquiries/2026-05-11_21-51__.../finding.md` — established the 4 shared atomic operations as a CLUSTER label at medium grain; with the role-equivalent-but-content-different framing.
- User's prose: "maybe as protocols or sth else idk" — open shape; "useful for us" — asking for opinion; "understand our disciplines in more granular level too" — explicit secondary benefit.

---

## 2. Cycle 1 — Probe: what "extraction" could structurally MEAN here

The user said "protocols or sth else idk." Enumerate the candidate structural shapes:

| Candidate | Description | Where it would live |
|---|---|---|
| **C1 — Atomic operations as protocols** | Each of the 4 atomic operations as a separate file in `homegrown/protocols/atomic-<op>.md` | `homegrown/protocols/` |
| **C2 — Atomic operations as a new capability layer** | New directory `homegrown/atomic-operations/<op>.md`; one file per op | `homegrown/atomic-operations/` (new) |
| **C3 — Per-operation pattern subsections** | Extend the TEM pattern doc with detailed per-operation subsections | `devdocs/patterns/typed-enumeration-mapping.md` (deeper) |
| **C4 — Inline labels in discipline specs** | Add inline labels in existing specs like "Coarse Scan [Input Reading + Typed-Item Production]" | Existing discipline specs |
| **C5 — Cross-reference index** | A single index file pointing at where each atomic operation manifests in each discipline | `devdocs/patterns/atomic-operations-index.md` (new) |
| **C6 — Combined C4 + C5** | Both inline labels + central index | Existing specs + new index |
| **C7 — Differentiated by distinguishing power** | Recognize: not all 4 atomic operations are TEM-specific — some are universal across all disciplines. Extract per appropriate scope | Mixed (see Cycle 4 below) |
| **C-NULL** | Don't extract; the 21-51 pattern-doc plan is sufficient | (no change) |

---

## 3. Cycle 2 — Probe: what "protocols" currently MEAN in this project

Reading `homegrown/protocols/loop_diagnose.md` and similar:

**Existing protocols are PROCEDURAL.** They describe HOW TO DO something:
- LOOP_DIAGNOSE — how to frame a correction-chain diagnostic inquiry.
- CONCLUDE — how to compile a finding from completed disciplines.
- BRANCH_INQUIRY — how to create a child inquiry.
- RESUME — how to pick up an inquiry from `_state.md`.

These are NOT capability definitions; they're operational procedures. They have INPUT CONTRACTS, STEPS, OUTPUT CONTRACTS.

**Atomic operations are different in nature.** They're not procedures; they're CAPABILITIES or COMPONENTS. "Input reading" isn't a step-by-step procedure — it's a capability disciplines exercise.

**Implication:** if extraction happens, calling them "protocols" would be a category mismatch with the project's existing protocol convention. The user's "or sth else idk" leaves room; "atomic operations" or "capabilities" or "components" would be more accurate.

**Refines C1:** the C1 framing (atomic ops as protocols) actually misfits the project's convention. C2 or C5 are more accurate.

---

## 4. Cycle 3 — Probe: what does each atomic operation actually look like as a definition?

Sketch what each would say if defined as a standalone artifact:

### Op 1: Input Reading

**Role:** Consume external content as the starting material for the discipline's operation.

**Variables (filled per discipline):**
- What COUNTS as input (territory; cycle output; codebase; document; etc.)
- Granularity of reading (line-by-line vs whole-file vs index-level)
- Whether the read is one-shot or iterative

**Why this is shared:** every discipline that produces a map from content does input reading.

### Op 2: Typed-Item Production

**Role:** Produce items tagged by a type schema.

**Variables (filled per discipline):**
- Type schema (e.g., Explore's 5 signal types + artifact/candidate; Navigation's 16-type taxonomy)
- Production mechanism (signal detection; type-assignment from input pattern; etc.)
- Item granularity (one signal vs one route-card vs one anchor)

### Op 3: Metadata Attachment

**Role:** Tag each item with structured metadata.

**Variables (filled per discipline):**
- Metadata vocabulary (Explore: confidence levels + frontier state; Navigation: priority + status + purpose + WHY + guidance)
- Number of metadata fields per item
- Whether metadata is required vs optional per field

### Op 4: Structured-Map Assembly

**Role:** Compose items + metadata into a structured map format.

**Variables (filled per discipline):**
- Map format (territory map; route-card-organized map; etc.)
- Grouping rules (by category; by region; by priority; etc.)
- Whether the map has an index/summary layer

**Each ~10-15 lines if defined. Total ~50-60 lines for all 4 definitions.**

---

## 5. Cycle 4 — Probe (jump-scan-flavored): are all 4 operations actually TEM-specific?

**Critical finding from probing each operation's scope:**

| Operation | Where it appears beyond TEM-instances |
|---|---|
| **S-1 Input reading** | EVERY discipline does input reading. Sensemaking reads ambiguous content; Decomposition reads a whole; Innovation reads a seed; Critique reads candidates. **UNIVERSAL** across disciplines. |
| **S-2 Typed-item production** | Most disciplines produce typed outputs. Sensemaking produces typed anchors. Decomposition produces typed pieces. Innovation produces typed candidates by mechanism. Critique produces typed verdicts. **WIDESPREAD** but the OUTPUT SHAPE differs. |
| **S-3 Metadata attachment** | Wherever items carry metadata. Critique attaches per-verdict metadata. Decomposition attaches per-piece interface metadata. Innovation attaches per-candidate test results. **WIDESPREAD**. |
| **S-4 Structured-map assembly** | This is where TEM-instances DIVERGE from sister disciplines. Sensemaking commits to ONE model; Decomposition produces a PARTITION (mutually exclusive); Critique produces a VERDICT (per-candidate evaluation, not a map). Only TEM-instances assemble MAPS specifically. **TEM-SPECIFIC**. |

**This is a refining insight.** The 4 operations are not uniformly TEM-specific. **S-4 is the load-bearing TEM-identifier**; S-1/S-2/S-3 are universal-or-widespread discipline primitives.

**Implication for extraction:**
- Extracting all 4 as "TEM-shared protocols" would mis-categorize. S-1/S-2/S-3 are NOT TEM-specific; they're universal.
- The honest extraction would treat S-4 as TEM-defining; S-1/S-2/S-3 as universal-discipline primitives.

**This re-frames the entire question.** The user asked about extracting "TEM atomic operations." But only S-4 is genuinely TEM. The other 3 are universal — they'd extract as DISCIPLINE PRIMITIVES, not TEM-protocols.

---

## 6. Cycle 5 — Probe: cost/benefit per candidate (informed by Cycle 4)

### C1 — Atomic operations as protocols at `homegrown/protocols/`

- **Cost:** ~100-150 lines (4 protocol files × ~25-35 lines each); category mismatch with existing protocols (procedural, not capability).
- **Benefit:** explicit shared operations; matches existing project-protocol-directory convention.
- **Risk:** mis-frames atomic operations as procedures; loses the role-equivalent-but-content-different nature.
- **Verdict:** category mismatch makes this LESS preferred.

### C2 — Atomic operations as a new capability layer at `homegrown/atomic-operations/`

- **Cost:** ~100-150 lines (4 files); creates a new project layer.
- **Benefit:** matches what atomic operations actually are; clean separation from procedural protocols.
- **Risk:** new layer adds cognitive load; new layer adds maintenance surface.
- **Verdict:** structurally accurate but layer-creating.

### C3 — Per-operation pattern subsections in the pattern doc

- **Cost:** ~80-120 lines added to `devdocs/patterns/typed-enumeration-mapping.md` (still doesn't exist; would coordinate with 13-45 MUST + 21-51 section).
- **Benefit:** keeps everything in one pattern doc; no new layer.
- **Risk:** pattern doc grows to ~200+ lines; less compact; less discoverable per operation.
- **Verdict:** structurally workable but accumulates into one large doc.

### C4 — Inline labels in discipline specs

- **Cost:** ~4-8 lines added across existing discipline specs (small annotations like "Coarse Scan [Input Reading + Typed-Item Production]").
- **Benefit:** minimal cost; surfaces shared structure WITHIN the specs.
- **Risk:** labels point at... what? If no definition exists for "Input Reading," the labels are uninterpretable. Labels without definitions are noise.
- **Verdict:** UNVIABLE ALONE — labels need referent definitions.

### C5 — Cross-reference index at `devdocs/patterns/atomic-operations-index.md`

- **Cost:** ~50-70 lines for one index file mapping each atomic operation to where it manifests in each discipline.
- **Benefit:** single discoverable map; minimal new content (no per-operation deep definitions).
- **Risk:** index without deeper definitions per operation is shallow; readers can SEE the mapping but can't deeply UNDERSTAND each operation.
- **Verdict:** lightweight but possibly too shallow.

### C6 — Combined C4 + C5 (inline labels + index)

- **Cost:** C4 + C5 combined; ~55-78 lines + small per-spec annotations.
- **Benefit:** labels in specs + central index. Labels point at index; index points back.
- **Risk:** still doesn't have per-operation deep definitions — both labels and index are SHALLOW REFERENCES without anchoring content.
- **Verdict:** improves discoverability over C4-alone or C5-alone, but still lacks depth.

### C7 — Differentiated by distinguishing power (refined per Cycle 4)

- **Cost:** variable; depends on which operations are extracted at what level.
- **Benefit:** honors the structural reality (S-4 is TEM-specific; S-1/S-2/S-3 are universal).
- **Risk:** higher conceptual complexity; multiple extraction-shapes in parallel.
- **Verdict:** structurally most accurate; but more complex than other candidates.

### C-NULL — Don't extract

- **Cost:** zero.
- **Benefit:** zero new abstraction; the 21-51 pattern-doc plan captures the cluster.
- **Risk:** the user's "understand granularly" desire isn't fully served; future TEM-instance design has no template.
- **Verdict:** conservative; defensible at N=2.

---

## 7. Cycle 6 — Probe: the "Rule of Three" question

In software design, "Rule of Three" says: don't extract a reusable abstraction until you've seen the pattern three times. The reasoning: extracting at N=2 risks over-fitting to the first two instances; the third instance often reveals what was actually shared vs incidental.

Where are we?

- **Confirmed TEM-instances: 2** (Explore + Navigation). Verified at medium grain by 21-51 finding.
- **Partial candidate: 1** (Sensemaking's Comprehending operation — Phases 1-2 of Sensemaking). Flagged in 21-51 finding's Research Frontier 3 as "may be a partial TEM instance."

**Status:** N=2 confirmed + 1 partial = 2.5. Approaching N=3 but not there.

**Decision-shaping observation:** if a focused inquiry confirmed Sensemaking-Comprehending as a 3rd TEM-instance, the extraction would be JUSTIFIED at N=3 by rule-of-three. Until then, extraction is PREMATURE by that rule.

**But** rule-of-three is a heuristic, not law. Two factors weaken it here:
- The user is asking ABOUT extraction now. The question itself signals readiness; rule-of-three says "wait for organic third instance," but the user is actively proposing the extraction.
- The cost of extraction is bounded and reversible. The cost of NOT extracting is "deeper understanding stays implicit."

**Verdict on rule-of-three:** STRONG SIGNAL TO WAIT, but not a hard gate. A conservative move would be: defer extraction; first confirm Sensemaking-Comprehending as 3rd instance, then extract. An aggressive move: extract now at N=2, with explicit reversibility.

---

## 8. Cycle 7 — Probe: the "understand granularly" benefit (user's secondary ask)

The user explicitly said: "this way we might understand our disciplines in more granular level too."

What does this benefit actually look like?

**Without extraction:**
- Reading Explore's spec, the practitioner sees the spec's own language ("Coarse Scan," "Signal Detection," "Resolution Management"). The atomic operations are implicit.
- Reading Navigation's spec, the practitioner sees Navigation's own language ("Type assignment," "Reachability detection," "Adaptive guidance"). Again, atomic operations implicit.
- Cross-discipline comparison: the practitioner has to do the atomic decomposition mentally each time.

**With extraction (some form):**
- Each atomic operation has a name and definition.
- Discipline specs can reference operations by name.
- Cross-discipline comparison becomes lookup-and-compare instead of decompose-from-scratch.

**Net benefit:** REAL but BOUNDED.
- For practitioners actively comparing disciplines or designing new ones, extraction is meaningful.
- For practitioners just applying one discipline, extraction adds cognitive overhead without proportional benefit.

The 21-51 finding's pattern doc + medium-grain section already provides cross-discipline comparison at the cluster level. Extraction would deepen that, but the marginal benefit per extraction shape varies (C5 minimal benefit; C2/C3 substantial benefit; C4 alone none).

---

## 9. Cycle 8 — Probe: what disciplines could USE the extraction?

Two practitioner scenarios:

**Scenario A: applying an existing discipline (Explore on a codebase).**
The practitioner reads Explore's spec, runs it. Atomic operations are implicit in the spec's process. Extraction adds: a reference layer the practitioner doesn't need to consult.

**Scenario B: designing a new TEM-instance discipline.**
The practitioner thinks about a new discipline that maps unknown territory with typed items. Without extraction, they reverse-engineer from Explore and Navigation. With extraction, they consult the atomic-operation definitions and instantiate each variable.

**Scenario B is the use case where extraction has highest value.** But it requires that NEW TEM-INSTANCE DESIGN is actually happening — which is speculative ("when we design future disciplines"). At N=2, this future is hypothetical.

**Scenario C: maintaining the existing disciplines.**
If both Explore and Navigation get updates that affect their atomic operations, extraction would let the practitioner update one place. Cross-discipline change-coordination benefit. Bounded by how often these updates happen — historically, infrequently for atomic operations themselves.

**Scenario D: meta-architectural understanding (the user's framing).**
Even without active use, extraction makes the structural relationships visible. Reading the atomic-operations layer is a way of understanding the project's discipline structure at the level of components, not just disciplines. This is value-as-knowledge, not value-as-tool.

**Net:** extraction has substantial value for Scenario D (the user's stated reason) and for hypothetical Scenario B; less for Scenario A and C.

---

## 10. Cycle 9 — Jump scan: counter-direction (don't extract; do something else)

Counter: instead of extracting atomic operations as shared definitions, RESTRUCTURE the discipline specs themselves to use a common SECTION TEMPLATE that highlights the atomic operations within each spec. Then the comparison is OBVIOUS at the spec level; no new layer needed.

E.g., each discipline spec gains sections:
- "Input reading: ..." (per discipline)
- "Typed-item production: ..." (per discipline)
- "Metadata attachment: ..." (per discipline)
- "Structured-map assembly: ..." (per discipline)
- Plus discipline-specific sections as before.

This is structural alignment WITHOUT extraction. Each spec stays self-contained but uses a shared section vocabulary for the shared atomic operations.

**Cost:** restructuring 2 (or more) discipline specs. Non-trivial but bounded.
**Benefit:** the shared structure becomes visible WITHIN each spec; no new extraction layer.
**Risk:** forcing a section template might distort how each discipline naturally presents itself.

**Add to candidate list as C8 — common section template.**

**Verdict on C8:** interesting alternative; preserves spec self-containedness while making shared structure visible.

---

## 11. Cycle 10 — Probe: the meta-question about granularity (refining)

The user said the 4 atomic operations might let us "understand our disciplines in more granular level too." But what's the right granularity?

The 21-51 finding established:
- Coarse grain: TEM is one operation.
- Medium grain: TEM is 4 atomic operations + output-shape.
- Fine grain: each atomic operation decomposes differently per discipline.

Extracting at MEDIUM grain (C1-C7) preserves the 4 atomic operations as shared definitions.

But the user's "more granular" might mean FINER than medium — going even deeper. At fine grain, the 4 operations dissolve into per-discipline specifics. So extraction CAN'T usefully happen at fine grain — there's no shared structure to extract.

**Implication:** the extraction (if done) is bounded to MEDIUM-GRAIN content. Going finer doesn't make sense.

This also bounds the BENEFIT of extraction. It can clarify the medium-grain shared cluster but can't reveal finer-grain structure (because there isn't any shared finer-grain structure).

---

## 12. Cycle 11 — Probe: connection to the 14-00 deferred Layer 2 checks

The 14-00 loop_diagnose finding deferred two refinement notes (Question Premise Check; Cross-Candidate Unity) until ≥3 instances of convergence-recognition failure. The Meta-Inspection section in sensemaking.md (just installed) treats these as future hooks.

**Connection:** if atomic operations get extracted as a shared layer, would they affect the Meta-Inspection hooks? Probably not directly — Meta-Inspection hooks are STRUCTURAL surfaces (candidate set; frame; question framing) within Sensemaking's analysis. Atomic operations are sub-steps WITHIN disciplines. Different scope.

But: there's a STRUCTURAL ANALOGY. Meta-Inspection extracted shared check patterns into a hooks framework. Atomic-operation extraction would similarly extract shared sub-step patterns into a capabilities framework. The PATTERN of "name the shared structural pieces and reference them" is the same.

**Implication:** if the project is moving toward an architecture-by-extracted-components style (Meta-Inspection is one example), then atomic-operation extraction fits that direction. The 21-51 verdict's pattern-doc extraction also fits. The pattern is: surface structural commonalities by naming and indexing them.

---

## 13. Frontier State

**Frontier: STABLE.** Eleven cycles produced:
- 8 candidate extraction shapes (C1-C8 + C-NULL)
- Refined understanding: not all 4 operations are TEM-specific (Cycle 4 — S-4 is TEM-specific; others are universal)
- Rule-of-three analysis (N=2.5; approaching but not at 3)
- 4 practitioner scenarios; extraction value varies by scenario
- Connection to existing project pattern of structural-commonality extraction (Meta-Inspection; TEM pattern doc)
- Counter-direction C8 (section template) as alternative to extraction

Frontier did not push outward in last cycle (refining only).

---

## 14. Confidence Map

| Region | Confidence | Note |
|---|---|---|
| C1-C8 + C-NULL candidate inventory | Confirmed | Each surfaced with cost/benefit |
| Existing protocols-vs-capability distinction | Confirmed | LOOP_DIAGNOSE et al are procedural; atomic ops are capability-like |
| Operations differ in TEM-specificity (S-4 most specific) | Confirmed | Cross-discipline scan |
| Rule-of-three: N=2 confirmed + 1 partial = 2.5 | Confirmed | Established by 21-51 finding |
| Premature extraction is a real risk | Scanned | Multiple cost-benefit probes |
| The "granular understanding" benefit is real but bounded | Scanned | Practitioner scenario analysis |
| The right candidate shape | Unknown — deferred to Sensemaking | C2/C3/C6/C7/C8 are all viable; trade-offs differ |
| Should the decision be linked to Sensemaking-Comprehending inquiry | Inferred | Confirming a 3rd instance would meet rule-of-three |
| Whether the user wants extraction NOW vs AFTER the 3rd instance | Unknown — deferred | User explicitly asked "useful?" suggesting readiness for action |

---

## 15. Gaps and Recommendations

### Known gaps

- Whether the user is bothered by the rule-of-three concern at N=2 vs ready to act now.
- Whether a Sensemaking-Comprehending inquiry would be run soon (which would confirm the 3rd instance).
- The exact text of any extracted definitions (deferred to Innovation if Sensemaking confirms extraction).

### Recommendations for next disciplines

- **Sensemaking** should adjudicate:
  - The "useful?" question: yes, with-care; no; or yes-but-not-yet?
  - If yes: which candidate shape (C1-C8) is most useful?
  - The rule-of-three trade-off: extract at N=2.5 with explicit reversibility, or wait for 3rd?
  - The differentiated extraction question (C7 — S-4 as TEM-specific vs S-1/S-2/S-3 as universal)?
  - Apply Meta-Inspection (now available in sensemaking.md) — what is the analysis treating as fixed?
  - Apply Frame-exit Completeness — does the inquiry's frame exclude relevant referents?

- **Decomposition** partitions the deliverable if Sensemaking confirms action.

- **Innovation** drafts exact text if action is recommended.

- **Critique** verifies any extraction text against the universal-discipline test from the 20-13 audit + the structural insights from 21-51.

---

## 16. Convergence Assessment

- Frontier stability: STABLE.
- Declining discovery rate: YES.
- Bounded gaps: YES — known unknowns are explicitly named (Sensemaking's adjudication, user's rule-of-three preference).

All three convergence criteria met. Jump scan completed (Cycle 9 — C8 section-template counter).

**Premature Evaluation in Possibility Mode guardrail:** I did NOT pre-reject any candidate. C-NULL is on map. Cycle 4 generated a structural insight (not all 4 ops are TEM-specific) that REFINES the framing — that's not rejection; it's deepening. Cycle 9's counter-direction (C8) was tested and ADDED, not rejected.

**Convergence: PASS.** Hand off to Sensemaking.

---

## 17. Key Emergent Observations

1. **The 4 atomic operations are not uniformly TEM-specific.** Only S-4 (structured-map assembly) is TEM-defining. S-1/S-2/S-3 are universal-or-widespread discipline primitives. Any extraction must honor this — naming them all as "TEM-shared" mis-categorizes.

2. **The user's "protocols" framing has a category mismatch.** Existing project protocols are procedural (LOOP_DIAGNOSE, CONCLUDE). Atomic operations are capability-like. If extracted, they're not protocols in the project's existing sense — they're a new layer (capabilities / components).

3. **The rule-of-three is at 2.5 instances.** Sensemaking-Comprehending could be the 3rd if a focused inquiry confirms. Until then, extraction is rule-of-three-premature. But rule-of-three is heuristic, not law.

4. **The "understand granularly" benefit is real but uneven across practitioner scenarios.** Highest value for designing-new-disciplines and meta-architectural-understanding; lower for just-using-existing-disciplines.

5. **C8 (section template) is a counter-direction worth keeping on the table.** Restructure existing specs with shared section names; no new extraction layer. Preserves spec self-containedness.

6. **The decision could be linked to the Sensemaking-Comprehending inquiry.** If that runs soon and confirms a 3rd TEM-instance, extraction becomes more clearly justified. Sensemaking should consider the timing.

---

## 18. Telemetry

- Regions scanned: surround layer (4 areas) + 11 cycles
- Signals: 8 candidate shapes; 4 operation-scope analyses; 4 practitioner scenarios; rule-of-three analysis; 1 counter-direction (C8); 6 emergent observations
- Probes conducted: 11 cycles
- Frontier state: STABLE
- Failure modes observed: None.
  - **Premature Depth** avoided — surround layer scanned (protocols vs patterns vs specs distinction grounded the cost/benefit analysis).
  - **Surface-Only Scanning** avoided — multiple probes per dimension.
  - **False Confidence** prevented — Cycle 4's TEM-specificity insight refined what looked like a uniform shared cluster; Cycle 9's counter-direction tested an alternative.
  - **Premature Termination** prevented — 3 convergence criteria explicitly verified.
  - **Re-Exploration** avoided — frontier tracked across cycles.
  - **Completeness Bias in Possibility Mode** prevented — C-NULL kept on map; C8 surfaced via jump scan; C7 differentiated framing surfaced from refined analysis.
