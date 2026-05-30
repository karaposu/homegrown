# Innovation — routeman_comprehensive_structural_fix

## User Input

/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-27_16-45__routeman_comprehensive_structural_fix/_branch.md

Read in this order:
1. _branch.md (STRUCTURAL Layer Commitment; 2 observation targets)
2. surfacing.md (41 items / 10 frontier flags; live spec older than priors; β-layer ABSENT from live spec; 4-axis table ABSENT)
3. sensemaking.md (SV6 stabilized: section-keyed flat delta-list with 4 row-types; 3-pass landing-order CUT→ADD→REPAIR)
4. decomposition.md (8 pieces; full 7/7 self-eval PASS)

Innovation purpose: per-piece content production for the consolidated amendment plan deliverable.

Per piece: P1 Substrate / P2 ACTIVE rows / P3 NO-OP CONFIRM rows / P4 SUPERSEDED-NO-OP row / P5 RESIDUE rows / P6 Coverage map / P7 Open Questions / P8 Finding deliverable shape spec.

No meta-decision pieces — Sensemaking did adjudications.

---

## Seed / Preamble — Methodology-Mode Consideration

**Inherited methodology mode:** Standard default. The seed framing says "concrete content production per piece" and "no meta-decision pieces — Sensemaking did adjudications." Text signals: "produce concrete-enough-to-apply edit text"; "elaborate the committed direction." Maps to Standard default per the Methodology-Mode Vocabulary.

**Alternative mode:** Minimum-mechanism mode (1G + 1F only).

**What follows under the alternative:** Under Minimum-mechanism, each piece would receive only 1 Generator + 1 Framer of mechanism work, producing parsimonious content with bare-minimum coverage. The risk: per-piece outputs would be content-correct but potentially under-exploring the production space — e.g., RESIDUE rows might miss a subtle cross-section dependency if Combination + Absence Recognition aren't both applied. The benefit: faster per-piece production with reduced cognitive load.

**Decision:** Stay with **Standard default** (inherited). Reason: the consolidated delta is the inquiry's MUST deliverable and feeds CONCLUDE binding. Each piece's output is downstream-critical; Standard default's balanced 4G+3F coverage at the seed-level + per-piece mechanism selection gives the necessary rigor. Minimum-mechanism would be appropriate for a low-stakes seed; this is high-stakes (the consolidated delta applies to a live discipline spec).

**Compliance criterion (artifact-observable):** This preamble names (a) inherited mode: Standard default; (b) alternative mode: Minimum-mechanism; (c) what follows: parsimonious-but-potentially-under-exploring; (d) decision: default (stay with Standard default) — no override needed.

---

## Per-Piece Production

### P1 — Substrate

**Mechanism coverage:** Domain Transfer (RFC 2119 vocabulary, amendment-delta-list conventions) + Constraint Manipulation (the 3-pass landing-order adds the temporal-order constraint to prevent intermediate incoherence).

#### P1.1 — Row-Type Vocabulary (4 tiers)

| Row-type | Operational meaning | Audit role | When applied |
|---|---|---|---|
| **ACTIVE** | The row prescribes an edit that CHANGES the live spec. Application must produce the edit. | Operational — the patch applicator acts on these. | When a prior's delta commitment is NOT YET represented in the live spec, OR when this inquiry identifies a coherence ripple needing an edit. |
| **NO-OP CONFIRM** | The row records that the prior's commitment is ALREADY satisfied by the live spec. No edit needed. Evidence is cited (specific spec line / specific absence verified via grep). | Audit-completeness — future audits can verify the commitment landed without re-discovery. | When a prior's delta commitment is already represented in the live spec (independently verified). |
| **RESIDUE** | The row prescribes an edit fixing an inter-section coherence ripple NOT in any prior's delta list. Has explicit cross-section dependency annotation (which other section's edit triggers this ripple). | Operational + inquiry-distinctive — these are the edits the inquiry surfaces beyond consolidation. | When a section references a field/parameter/concept that another section's ACTIVE edit cuts/adds/modifies. |
| **SUPERSEDED-NO-OP** | The row records that the prior's commitment targets an artifact NEVER PRESENT in the live spec. The commitment is structurally inapplicable to the current spec state; no edit possible. | Audit-completeness — explains why the prior's commitment cannot apply. | When a prior's delta targets a specific construct (e.g., a table, a section, a vocabulary entry) and verification confirms the construct is absent from the live spec. |

**Why these 4 tiers and not 3 or 5:** Three tiers (ACTIVE / NO-OP / RESIDUE) collapses NO-OP CONFIRM and SUPERSEDED-NO-OP — but they have different audit semantics (one says "already there"; the other says "never was"). Five tiers introduces a SUPERSEDED-ACTIVE possibility but there is no current case where a prior's commitment targets something to be done that another prior already superseded — out of scope for this delta.

#### P1.2 — Landing-Order (3 passes)

| Pass | Name | Purpose | Row-type-and-action combos belonging to this pass |
|---|---|---|---|
| **Pass 1** | **CUT** | Remove fields, vocab entries, table rows, and stale references first. Prevents intermediate state where new content references about-to-be-removed fields. | ACTIVE rows with Action=REMOVE; RESIDUE rows fixing ripples caused by CUTs (e.g., §1.4 vocab entry drop). ALSO: ACTIVE rows with Action=REPAIR that REDUCE content (e.g., §5.6 telemetry trim removing 5 metrics). |
| **Pass 2** | **ADD** | Add new sections, sub-sections, fields, vocabulary, and rules. After CUTs in pass 1, the new ADDs do not reference removed fields. | ACTIVE rows with Action=ADD-CONTENT. RESIDUE rows fixing ripples caused by ADDs (e.g., §5 prologue dual-file framing once §5.8 is added). |
| **Pass 3** | **REPAIR** | Fix inter-section coherence, mirror updates, prose-numeric updates ("6 purpose-groups" → "5 purpose-groups"), and cross-reference additions. Repair the spec's internal consistency after CUTs + ADDs. | ACTIVE rows with Action=REPAIR (not the reduce-only kind from pass 1; the actual mirror/numeric-update kind); RESIDUE rows fixing ripples requiring narrative repair (e.g., NOW SOLID INSTRUCTIONS section parameter-name mirror updates). |

**Why CUT before ADD:** Without this order, ADD pass 2 might add content that references fields the CUT pass would later remove — creating an intermediate state where the spec is internally inconsistent. CUT first ensures the post-CUT spec is the substrate ADD operates on.

**Why REPAIR last:** REPAIR depends on both CUT + ADD being complete. Repairing §5 prologue to acknowledge `_route.md` as a second file (RESIDUE FF-Su9) requires the §5.8 `_route.md` description to already exist (added in pass 2).

**Within-pass ordering:** Within each pass, row order is by §-numeric section (§1.4 → §2.4 → §3.x → §4.x → §5.x → NOW SOLID INSTRUCTIONS). Within-section, order is by line number ascending. Conflicting edits within the same section are explicitly noted in each row's edit description.

#### P1.3 — Delta-Table Schema (8 columns)

| Column | Semantics | Example value |
|---|---|---|
| **#** | Row ordinal in the consolidated delta. Stable across application order (just an identifier). | 1, 2, 3, ... |
| **Spec section** | Section identifier in `cognitive_harness/routeman/references/routeman.md`. Use §-prefix + section-number or descriptive name. | §5.4, §3.2, "NOW SOLID INSTRUCTIONS START" |
| **Action** | The edit operation. One of: ADD-CONTENT / REMOVE / REPAIR / REPLACE / NO-OP / SUPERSEDED. | ADD-CONTENT |
| **Status** | The row-type tag. One of: ACTIVE / NO-OP CONFIRM / RESIDUE / SUPERSEDED-NO-OP. | ACTIVE |
| **Provenance** | Which prior's commitment this row implements. Format: `<prior-inquiry-name> <prior-row-id>` or `this-inquiry-residue`. | "13-23 NEW-1", "00-51 row 8", "this-inquiry-residue FF-Su7a" |
| **Edit description** | Concrete-enough-to-apply edit text. NOT just "edit §X" but the specific content: lines to delete, lines to add, lines to modify. For ADD, the actual prose to insert. For REMOVE, the lines to remove. | "REMOVE row in §5.4 schema table where Group=Route Meaning + Field=Purpose" |
| **Cross-section dependency** (RESIDUE only) | The other section's ACTIVE edit that triggers this RESIDUE. Empty for ACTIVE/NO-OP/SUPERSEDED rows. | "Depends on §5.4 ACTIVE row #X cutting Continuation Note" |
| **Landing-pass** | One of: 1 (CUT) / 2 (ADD) / 3 (REPAIR). | 1, 2, 3 |

---

### P2 — ACTIVE Rows

**Mechanism coverage:** Combination (combining 4 priors' active subsets into one section-keyed list) + Constraint Manipulation (landing-pass assignment adds temporal-order constraint per row).

**Production approach:** For each prior, extract the ACTIVE subset (excluding NO-OP and SUPERSEDED), assign to spec sections, write the concrete edit text per row.

#### From 13-23 amendment-delta (active subset: 4 rows)

**P2.13-23-a.** Cut per-Route `Purpose` field from §5.4 schema.
- Spec section: §5.4
- Action: REMOVE
- Status: ACTIVE
- Provenance: 13-23 NEW-1
- Edit description: In §5.4 per-Route entry schema table, REMOVE the row whose Group=Route Meaning, Field=Purpose, Content="What this route would serve, reveal, or unlock." This leaves Route Meaning group with the to-be-restored-but-already-present Movement + Unlocks fields.
- Landing-pass: **1 (CUT)**

**P2.13-23-b.** Cut per-Route `Continuation Note` field from §5.4 schema.
- Spec section: §5.4
- Action: REMOVE
- Status: ACTIVE
- Provenance: 13-23 NEW-2
- Edit description: In §5.4 per-Route entry schema table, REMOVE the row whose Group=Continuation Memory, Field=Continuation Note, Content="What a future agent resuming this route should remember about it." This leaves the Continuation Memory group empty (group-header cut in next row).
- Landing-pass: **1 (CUT)**

**P2.13-23-c.** Cut Continuation Memory group-header from §5.4 schema.
- Spec section: §5.4
- Action: REMOVE
- Status: ACTIVE
- Provenance: 13-23 NEW-3
- Edit description: In §5.4 per-Route entry schema table, REMOVE the group-header row "Continuation Memory" (now empty after P2.13-23-b). The schema becomes a 5-group structure: Route Identity + Route Meaning + Route State + Reasoning + Adaptive Guidance.
- Landing-pass: **1 (CUT)**

**P2.13-23-d.** Update §5.4 prose to reflect "5 purpose-groups" (was 6).
- Spec section: §5.4 (prose immediately preceding the schema table; or schema introductory line if present)
- Action: REPAIR
- Status: ACTIVE
- Provenance: 13-23 NEW-4
- Edit description: In §5.4's introductory prose, locate any reference to the schema's purpose-group count and REPAIR to "5 purpose-groups" (was implicit 6 via the table's 6 group rows). If no explicit purpose-group-count prose exists (review §5.4 to confirm), the §5.4 schema table's structure already conveys the count via the 5 remaining groups — no prose edit needed. (Verification step: read §5.4 after pass 1 cuts; if no explicit count remains, this row becomes NO-OP at application time.)
- Landing-pass: **3 (REPAIR)**

#### From 00-51 amendment-delta (active subset: 7 rows)

**P2.00-51-a.** Simplify §3.1 three-phase shape diagram parameters.
- Spec section: §3.1 (the ASCII diagram, currently line 191: "Receive current state + goal/subgoal + optional prior route map + optional refined-sub-goal")
- Action: REPAIR
- Status: ACTIVE
- Provenance: 00-51 row 7 (parameter cleanup, diagram-form)
- Edit description: In §3.1's three-phase shape diagram (lines 190-203), REPLACE the Reception input list "Receive current state + goal/subgoal + optional prior route map + optional refined-sub-goal" with: "Receive current state + goal/subgoal + optional reference to `_route.md` for prior invocation state." This aligns the diagram with the simplified parameter set.
- Landing-pass: **3 (REPAIR)** — depends on §3.2 + §5.8 already being in their post-amendment state for the diagram to reference cleanly.

**P2.00-51-b.** Simplify §3.2 Reception's optional re-invocation parameters.
- Spec section: §3.2 (Reception, currently lines 205-212)
- Action: REPAIR
- Status: ACTIVE
- Provenance: 00-51 row 7 (parameter cleanup, prose-form)
- Edit description: In §3.2 Reception's "Optional re-invocation parameters" bullet, REPLACE the protocol-derived params "`prior route map` (always available across invocations when persisted); `refined-sub-goal` (a narrower goal for this re-invocation)" with: "Cross-invocation context loaded via `_route.md`'s Prior Invocations + Last Invocation sections (per §5.8); optional `refined-sub-goal` (a narrower goal for this re-invocation, when re-invoking under a stage-2 directional context per §3.3)." Update the prose "Reception initializes the workspace (loading state + goal + prior map if present)" → "Reception initializes the workspace (loading state + goal + the prior invocation's `_route.md` state if present per §5.8)."
- Landing-pass: **3 (REPAIR)** — depends on §5.8 being added in pass 2.

**P2.00-51-c.** Simplify §3.5 Re-invocation's parameter descriptions.
- Spec section: §3.5 (Re-invocation, currently lines 243-248)
- Action: REPAIR
- Status: ACTIVE
- Provenance: 00-51 row 7 (parameter cleanup, §3.5 form)
- Edit description: In §3.5 Re-invocation, REPLACE the bullet describing `prior route map` ("when available across invocations, the prior map is incorporated at Reception. Enumeration may resurrect / invalidate / revert prior routes via the REVISIT sub-actions; routes whose state-condition hasn't changed may be carried forward unchanged.") with: "When `_route.md` records prior invocations (per §5.8), Reception loads the prior `routeman.md` content per the read-policy in §3.2. Enumeration may resurrect / invalidate / revert prior routes via the REVISIT sub-actions (per §2.2 Coordination Family); routes whose state-condition hasn't changed may be carried forward unchanged." The `refined-sub-goal` bullet stays.
- Landing-pass: **3 (REPAIR)** — depends on §3.2 + §5.8.

**P2.00-51-d.** Update §2.4 Adaptive Guidance Stage 1 chain reference.
- Spec section: §2.4 (Adaptive-guidance mechanism, Stage 1 prose around line 147)
- Action: REPAIR
- Status: ACTIVE
- Provenance: 00-51 row 9
- Edit description: In §2.4 Stage 1's per-movement-type chain description, REPAIR the "REVISIT draws from prior-cycle verdicts" clause to: "REVISIT draws from prior-cycle verdicts captured in `_route.md`'s History section (per §5.8) AND the prior `routeman.md`'s per-Route Status updates." Other movement-type chain entries are unchanged.
- Landing-pass: **3 (REPAIR)** — depends on §5.8 being added.

**P2.00-51-e.** Trim §5.6 Telemetry from ~10 metrics to 5-6 essential metrics.
- Spec section: §5.6 (Telemetry, currently lines 396-406)
- Action: REPAIR (reduce-content variant)
- Status: ACTIVE
- Provenance: 00-51 row 8
- Edit description: In §5.6 Telemetry bullet list, REMOVE the following 5 bullets:
  - "Cycles run; routes enumerated; per-type distribution; per-Family balance" → keep "per-Family balance" and "per-type distribution"; cut "Cycles run; routes enumerated" (operational; lives in `_route.md`'s Last Invocation per §5.8).
  - "Cross-cycle revisitations (per sub-action: RESURRECT / INVALIDATE / REVERT counts)" → CUT entirely (collapsed into per-Route Status updates in routeman.md).
  - "Autonomy partition (auto-derivable count vs judgment-required count)" → CUT entirely (delegated to inquiry's autonomy register, not routeman output).
  - "Excluded type count + reasoning-non-trivial check" → CUT entirely (count is redundant with Excluded Section count by inspection).
  - "Convergence trigger fired (yes/no; which signal)" → CUT entirely (operational detail; lives in `_route.md`).
  
  KEEP the 6 essential metrics: Entry mode + goal-type / Per-Family balance / Per-type distribution / Reachability distribution (per-status counts) / Guidance mode allocation / Failure modes checked / Self-assessment verdict. (Note: actual final count is 7 metrics in the keep-list including entry-mode; "5-6 essential" was 00-51's framing — count is ~6 after the trim.)
- Landing-pass: **1 (CUT)** — this is a content-reducing edit.

**P2.00-51-f.** Add new §5.8 `_route.md` invocation-state file description.
- Spec section: §5 — add new sub-section §5.8 after §5.7
- Action: ADD-CONTENT
- Status: ACTIVE
- Provenance: 00-51 row 6
- Edit description: After §5.7 Frontier, ADD a new sub-section:
  
  > ### 5.8 The `_route.md` invocation-state file
  > 
  > Routeman's secondary persistent artifact is `_route.md`, saved alongside `routeman.md` in the inquiry folder. The file captures invocation state — distinct from the route-content in `routeman.md`. The artifact has three sections:
  > 
  > | Section | Content |
  > |---|---|
  > | **Last Invocation** | Timestamp (ISO8601 UTC) + inquiry path + invocation mode (`fresh-state` / `prior-map-extending`). One block per file, overwritten on each new invocation. |
  > | **Prior Invocations** | Chronological list, one entry per prior run: timestamp + brief summary (1-2 lines: mode used, routes-added-count, routes-status-updated-count, key cross-cycle revisitations). Append-only across invocations. |
  > | **History** | Chronological event log; append-only. Records cross-invocation events (a Status update on a Route; a REVISIT sub-action firing; a frontier flag resolution). Each entry: timestamp + event-type + brief context. |
  > 
  > Read-policy for `_route.md` in directional mode is **SHOULD** per §3.2.
  > 
  > The file's purpose is cross-invocation continuity: it enables (a) read-prior (Reception reads `_route.md` to acquire prior invocation context), (b) recalibrate (Enumeration cross-references `routeman.md`'s per-Route Status field against `_route.md`'s History entries to detect staleness), and (c) add-new (Assembly appends new Prior Invocation + History entries before saving).
- Landing-pass: **2 (ADD)**

**P2.00-51-g.** Add γ-field REPAIR writing-rule + LAYER-2 audit-substrate mode.
- Spec section: §5.4 (Reasoning group entry for `why-this-might-be-important`) + §4.3 (LAYER-2 failure modes)
- Action: ADD-CONTENT (writing constraint to existing field + new failure-mode entry)
- Status: ACTIVE
- Provenance: 00-51 row 9 (γ-field REPAIR rule)
- Edit description: Two coupled edits:
  
  (a) In §5.4, after the existing `why-this-might-be-important` field row, ADD a writing-rule note:
  
  > **Writing rule for `why-this-might-be-important`:** the field is constrained by REPAIR-shape rules. (i) 1-sentence cap; (ii) MUST anchor in specific cycle-content (e.g., "critique's KILL seed on X explicitly asks 'what conditions would make this work?'"; "decomposition's piece-3 unresolved interface to Z"); generic filler ("this seems important"; "this might be useful") FAILS THE SPEC RULE; (iii) when no cycle-content anchor exists, the field is OMITTED for that route (the field is contingent per §5.4 — not all routes carry it).
  
  (b) In §4.3 LAYER-2 failure modes, ADD a 4th entry:
  
  > | **4** | **Filler-meta-reasoning** | The `why-this-might-be-important` field is populated across routes but the content is generic filler not anchored in specific cycle content; the field's audit-substrate value collapses | Violates the writing rule (§5.4 REPAIR constraint). Drives empirical-evidence-gated revival of the cut alternative (per the 00-51 finding's Candidate #2 DEFERRED path). |
- Landing-pass: **2 (ADD)**

#### From 14-49 amendment-delta (active subset: 6 rows)

**P2.14-49-a.** Add 4-tier Read-Policy Vocabulary sub-section to §3.2 (or §3 prologue).
- Spec section: §3.2 (Reception) — add new sub-section immediately after §3.2's current content; or alternatively §3 prologue before §3.1 if more discoverable
- Action: ADD-CONTENT
- Status: ACTIVE
- Provenance: 14-49 row 1
- Edit description: After §3.2's current Reception description, ADD a new sub-section:
  
  > **Read-Policy Vocabulary.** Routeman uses a 4-tier vocabulary for grading input-read commitments at Reception. The vocabulary is RFC 2119-adjacent (MUST/SHOULD/MAY) with one project-coined refinement (MANDATORY-WHEN-AVAILABLE).
  > 
  > - **MANDATORY** — the input MUST be successfully read. If absent or unreadable, HALT with `MissingRequiredInput`. Equivalent to RFC 2119 MUST.
  > - **MANDATORY-WHEN-AVAILABLE** *(project-coined)* — the input MUST be read when the file exists. FLAG and proceed when the file is absent (first-time invocation, expected case). HALT when present-but-malformed-AND-needed; FLAG and proceed when present-but-malformed-but-not-needed. Captures the structural reality of inputs that are required-when-they-exist but optional-when-they-don't.
  > - **SHOULD** — routeman attempts to read by default. Any read failure FLAGs telemetry and proceeds without. Equivalent to RFC 2119 SHOULD.
  > - **MAY** — the caller supplies the input as an explicit parameter (or not). Routeman does not autonomously seek the input. Equivalent to RFC 2119 MAY.
- Landing-pass: **2 (ADD)**

**P2.14-49-b.** Add Read-Failure Default (graceful-degrade) sub-section.
- Spec section: §3.2 (Reception) — add adjacent to the Read-Policy Vocabulary sub-section
- Action: ADD-CONTENT
- Status: ACTIVE
- Provenance: 14-49 row 2
- Edit description: Adjacent to Read-Policy Vocabulary (immediately after), ADD:
  
  > **Read-Failure Default.** Across all tiers above MANDATORY, the default failure mode is **FLAG + proceed-without**. HALT fires only when strictly-required structural content is missing (MANDATORY at any state; MANDATORY-WHEN-AVAILABLE when present-but-malformed-AND-needed). This default preserves discipline operability across (a) fresh inquiries where prior files don't exist yet, (b) schema-version drift where older files may not parse, (c) inaccessible files (e.g., permission errors that aren't routeman's concern to resolve).
- Landing-pass: **2 (ADD)**

**P2.14-49-c.** Add "Reading prior `routeman.md` in directional mode" sub-section (MANDATORY-WHEN-AVAILABLE).
- Spec section: §3.2 (Reception) — adjacent to vocab + failure-default
- Action: ADD-CONTENT
- Status: ACTIVE
- Provenance: 14-49 row 3
- Edit description: ADD:
  
  > **Reading prior `routeman.md` in directional mode.** Policy: **MANDATORY-WHEN-AVAILABLE**. When `/routeman` is invoked toward a direction (stage-2 sub-route expansion per §3.3), the directional-mode invocation must acquire the parent-route entry from the parent inquiry's `routeman.md`. Failure handling per state:
  > 
  > - **Absent** (first directional invocation on a parent route not enumerated elsewhere): FLAG `MissingParentRouteFile` in telemetry. If the caller supplies parent route info inline (Direction + Goal + Movement Type at minimum), proceed with the caller's input. Otherwise HALT with `MissingRequiredInput`.
  > - **Present-but-malformed AND parent-route entry is needed:** HALT with `MalformedRequiredInput`.
  > - **Present-but-malformed but parent-route entry is intact:** FLAG and proceed.
  > - **Present-and-stale** (parent route was enumerated some time ago, parent inquiry has progressed): proceed with FLAG noting staleness; the directional invocation snapshots the parent at Reception.
- Landing-pass: **2 (ADD)**

**P2.14-49-d.** Add "Reading prior `_route.md` in directional mode" sub-section (SHOULD).
- Spec section: §3.2 (Reception)
- Action: ADD-CONTENT
- Status: ACTIVE
- Provenance: 14-49 row 4
- Edit description: ADD:
  
  > **Reading prior `_route.md` in directional mode.** Policy: **SHOULD**. Reading the parent inquiry's `_route.md` provides three value-additions: (a) orchestration awareness (which prior directional-mode invocations have expanded sub-routes under the same parent); (b) staleness detection (how recently the parent route was enumerated or recalibrated); (c) Baldwin-substrate feed (Predictive RC at T0 + Retrospective RC at T2+ per `docs/canon/evolving_quality_assetment_component.md`). All three are value-adding; none is operationally required — sub-route enumeration can complete from `routeman.md` alone. Failure handling: FLAG and proceed-without on absence, malformation, or inaccessibility. Staleness is itself a Baldwin signal.
- Landing-pass: **2 (ADD)**

**P2.14-49-e.** Add stage-2 input-acquisition note to §3.3.
- Spec section: §3.3 (Enumeration-attributed Traversal — or wherever stage-2 invocation contract is described conceptually)
- Action: ADD-CONTENT
- Status: ACTIVE
- Provenance: 14-49 row 5
- Edit description: In §3.3 (or appended after the components-list), ADD a clarifying note:
  
  > **Note on stage-2 input acquisition.** When routeman is invoked toward a direction (stage-2 sub-route expansion), the stage-2 input contract names `parent-route-id` + `file-paths-in-scope` + optional `refined-sub-purpose`. The operational mechanic for acquiring `parent-route-id`: the caller indicates WHICH route in WHICH parent inquiry is being expanded; routeman reads the parent inquiry's `routeman.md` per the **MANDATORY-WHEN-AVAILABLE** policy in §3.2 to extract the parent route's full entry. The 18-58 stage-2 input contract is preserved; this note makes the implicit acquisition mechanic explicit.
- Landing-pass: **2 (ADD)**

**P2.14-49-f.** Add one-line cross-reference from §3.5 to §3.2 read-policy.
- Spec section: §3.5 (Re-invocation as parameterized variation)
- Action: ADD-CONTENT (one-line)
- Status: ACTIVE
- Provenance: 14-49 row 6
- Edit description: In §3.5, after the `prior route map` / `refined-sub-goal` bullets (which have been REPAIRed per P2.00-51-c above), ADD a one-line cross-reference:
  
  > For input-read policy on prior `routeman.md` + `_route.md` files during re-invocation, see §3.2 (Read-Policy Vocabulary + per-file rules).
- Landing-pass: **3 (REPAIR)** — depends on §3.2 being populated in pass 2.

**ACTIVE row total: 4 (13-23) + 7 (00-51) + 6 (14-49) = 17 ACTIVE rows.**

---

### P3 — NO-OP CONFIRM Rows

**Mechanism coverage:** Domain Transfer (audit-checklist conventions from spec-version-control practices) + Lens Shifting (each row reframes "what edit is needed" to "no edit is needed, here is why").

**Production approach:** For each prior commitment already satisfied by the live spec, cite the specific live-spec evidence.

**P3.a.** NO-OP CONFIRM for 00-51 row 3 (Status enum reduce 10 → 7).
- Spec section: §1.4 (vocabulary entry "reachability")
- Action: NO-OP
- Status: NO-OP CONFIRM
- Provenance: 00-51 row 3
- Edit description: VERIFIED — §1.4 line 55 already lists 7 reachability values: "open / blocked / deferred / active / done / stale / superseded." The 3 protocol-derived statuses (queued / scheduled / expanded) from `multi_resolution_navigation.md` are ABSENT. The 00-51 trim commitment is satisfied.
- Cross-section dependency: n/a
- Landing-pass: n/a (no edit)

**P3.b.** NO-OP CONFIRM for 00-51 row 4 (Drop protocol-alias commitment `_navig.md`/`_frontier.md` ↔ routeman names).
- Spec section: §1.4 vocabulary + general spec body
- Action: NO-OP
- Status: NO-OP CONFIRM
- Provenance: 00-51 row 4
- Edit description: VERIFIED via grep over `cognitive_harness/routeman/references/routeman.md` for tokens `_navig`, `_frontier`, `navig.md`. Result: NONE present. The 00-51 alias-drop commitment is already satisfied — the live spec uses routeman-native names throughout.
- Cross-section dependency: n/a
- Landing-pass: n/a

**P3.c.** NO-OP CONFIRM for 00-51 row 5 (Route Map wrapper REPAIR — no protocol heavy-machinery).
- Spec section: §5.5 (Route Map wrapper)
- Action: NO-OP
- Status: NO-OP CONFIRM
- Provenance: 00-51 row 5
- Edit description: VERIFIED — §5.5 (lines 384-391) lists exactly the 4 wrapper fields the 00-51 recommendation calls for: Map Header / Route Index / Excluded Section / Telemetry Block. No protocol-internal control fields (frontier-candidate-record, coverage modes, batch_size, expansion_policy, scheduling_policy) are present in the live §5.5. The 00-51 wrapper-REPAIR commitment is satisfied.
- Cross-section dependency: n/a
- Landing-pass: n/a

**P3.d.** NO-OP CONFIRM for 13-23 REVISED-1 (Restore per-Route `Movement` field).
- Spec section: §5.4 (Route Meaning group)
- Action: NO-OP
- Status: NO-OP CONFIRM
- Provenance: 13-23 REVISED-1
- Edit description: VERIFIED — §5.4 line 372 has the Movement field row with Group=Route Meaning, Content="Descriptive transition: current state → target state." The field is present; the 13-23 RESTORE verdict is satisfied by the live spec's pre-existing inclusion (the field was never actually cut in the live spec; the 00-51 cut commitment that 13-23 reversed never landed in the spec).
- Cross-section dependency: n/a
- Landing-pass: n/a

**P3.e.** NO-OP CONFIRM for 13-23 REVISED-2 (Restore per-Route `Unlocks` field).
- Spec section: §5.4 (Route Meaning group)
- Action: NO-OP
- Status: NO-OP CONFIRM
- Provenance: 13-23 REVISED-2
- Edit description: VERIFIED — §5.4 line 373 has the Unlocks field row with Group=Route Meaning, Content="Downstream routes / checks / decisions / artifacts; `unknown` when unclear." The field is present; the 13-23 RESTORE verdict is satisfied. **Note for application:** the live spec's Content for Unlocks is the simpler form ("Downstream routes / checks / decisions / artifacts"); 13-23 amended the content axis to: "Downstream routes / checks / decisions / artifacts that this route's completion makes available, broader than hard-blocking. Includes graduated-beneficiary relationships as well as binary-blocking-removal. Use `unknown` when downstream effects are unclear." → THIS CONTENT-AXIS AMENDMENT IS AN ACTIVE EDIT, not pure NO-OP. CLASSIFICATION CORRECTION: re-classify as ACTIVE-with-NO-OP-base (the field's presence is NO-OP; its content-axis description is ACTIVE-REPAIR). Spawning a sub-row:
  
  **P3.e (corrected) → P2.13-23-rev2-amend.** Spec section: §5.4 Unlocks field Content. Action: REPAIR. Status: ACTIVE. Provenance: 13-23 REVISED-2 (content-axis amendment). Edit description: In §5.4 Unlocks row, REPAIR Content from "Downstream routes / checks / decisions / artifacts; `unknown` when unclear" to: "Downstream routes / checks / decisions / artifacts that this route's completion makes available; broader than hard-blocking — includes graduated-beneficiary relationships as well as binary-blocking-removal. Use `unknown` when downstream effects are unclear." Landing-pass: **3 (REPAIR)**.
  
  Original P3.e becomes: NO-OP CONFIRM for "Unlocks field is present in §5.4" (still valid as a sub-claim). The amendment of content-axis is the active edit.

**NO-OP CONFIRM row total: 4 pure NO-OPs (P3.a / P3.b / P3.c / P3.d) + 1 NO-OP-with-active-amendment (P3.e split).** Net P2 active count: 17 + 1 (the P3.e amendment) = **18 ACTIVE rows**.

---

### P4 — SUPERSEDED-NO-OP Row

**Mechanism coverage:** Absence Recognition (the 4-axis table that 13-23 NEW-5 targets is ABSENT from the live spec; the absence makes the commitment structurally inapplicable) + Lens Shifting (frames the row as "the prior's commitment targets an artifact never present here").

**P4.a.** SUPERSEDED-NO-OP for 13-23 NEW-5 (4-axis content distinction → 2-axis prose note).
- Spec section: §5.4 (or wherever the 4-axis table from 18-58 §4 would have lived)
- Action: SUPERSEDED-NO-OP
- Status: SUPERSEDED-NO-OP
- Provenance: 13-23 NEW-5
- Edit description: VERIFIED via grep over `cognitive_harness/routeman/references/routeman.md` for "4-axis", "four-axis", and the field-list "Purpose / WHY / Continuation Note / why_this_might_be_important". Result: NONE present. The 18-58 inquiry's §4 four-axis content distinction TABLE was committed by THAT finding's commitments but never landed in the live spec text. The 13-23 NEW-5 reduction-to-2-axis prose note has NO TARGET ARTIFACT to reduce. The commitment is structurally inapplicable; the row is recorded for audit-completeness.
  
  **Forward consideration:** if a future inquiry restores any of the fields cut by 13-23 (Purpose / Continuation Note) AND introduces the 4-axis table in the process, the 13-23 NEW-5 reduction-to-2-axis prose note would re-activate. The DEFERRED revival path is preserved per the 13-23 finding's State D candidate.
- Cross-section dependency: n/a
- Landing-pass: n/a

**SUPERSEDED-NO-OP row total: 1 row.**

---

### P5 — RESIDUE Rows

**Mechanism coverage:** Absence Recognition redesign-level (each RESIDUE row identifies an inter-section coherence ripple that priors didn't surface — "what should exist consistently across sections but doesn't after CUT/ADD") + Combination (cross-section dependency annotation combines target-section + trigger-section into one annotation).

**Production approach:** For each cross-section coherence ripple surfaced in Surfacing FF-Su7 + FF-Su8 + FF-Su9, produce a RESIDUE row with cross-section dependency.

**P5.a.** RESIDUE — §1.4 vocab entry "continuation note" cleanup.
- Spec section: §1.4 (Vocabulary)
- Action: REMOVE
- Status: RESIDUE
- Provenance: this-inquiry-residue (surfacing FF-Su7)
- Edit description: In §1.4 Vocabulary table, REMOVE the row "continuation note | Per-route memory hint — what a future agent resuming this route should remember about it." (line 60). The vocabulary entry references a field that no longer exists in the schema after pass 1.
- Cross-section dependency: Depends on P2.13-23-b (cut `Continuation Note` field from §5.4). Without that ACTIVE edit, the vocab entry remains valid. With it, this entry must be removed to prevent internal contradiction.
- Landing-pass: **1 (CUT)**

**P5.b.** RESIDUE — §2.4 Adaptive Guidance `none`-mode description cleanup.
- Spec section: §2.4 (Adaptive-guidance mechanism, Guidance Mode allocation)
- Action: REPAIR
- Status: RESIDUE
- Provenance: this-inquiry-residue (surfacing FF-Su7)
- Edit description: In §2.4's Guidance Mode allocation list (around line 153), REPAIR the description of mode `none` from "zero pointers. WHY field + Continuation Note sufficient. Used for LOW-priority routes or deferred routes preserved for memory." to: "zero pointers. WHY field alone is sufficient. Used for LOW-priority routes or deferred routes preserved for memory." (Remove the "+ Continuation Note" reference.)
- Cross-section dependency: Depends on P2.13-23-b (cut `Continuation Note` field). Without that CUT, this prose remains accurate. With it, the prose references a non-existent field.
- Landing-pass: **3 (REPAIR)** — depends on pass 1's CUT being complete; the REPAIR here is a prose-mirror update.

**P5.c.** RESIDUE — §3.4 Assembly bullet group-list update.
- Spec section: §3.4 (Assembly, line 235)
- Action: REPAIR
- Status: RESIDUE
- Provenance: this-inquiry-residue (surfacing FF-Su7)
- Edit description: In §3.4 Assembly description, REPAIR the bullet "Per-route entries finalized (Route Identity + Route State + Route Meaning + Reasoning + Adaptive Guidance + Continuation Memory)." to: "Per-route entries finalized (Route Identity + Route Meaning + Route State + Reasoning + Adaptive Guidance)." (Remove "+ Continuation Memory"; the 5 remaining groups are ordered consistent with §5.4's table ordering: Route Identity → Route Meaning → Route State → Reasoning → Adaptive Guidance.)
- Cross-section dependency: Depends on P2.13-23-c (cut Continuation Memory group-header).
- Landing-pass: **3 (REPAIR)**

**P5.d.** RESIDUE — §4.2 LAYER 1 failure mode #5 field-list update.
- Spec section: §4.2 (LAYER 1 — Operational failure modes, mode #5 "Route State Omission")
- Action: REPAIR
- Status: RESIDUE
- Provenance: this-inquiry-residue (surfacing FF-Su7)
- Edit description: In §4.2 failure mode #5 "Route State Omission" Recognition column (line 273), REPAIR the field list "Routes listed without Direction, Goal, Movement Type, Priority, Status, Blocked-By, or Continuation Note" to: "Routes listed without Direction, Goal, Movement Type, Priority, Status, or Blocked By." (Remove "or Continuation Note"; alternative: ADD "Movement" and "Unlocks" since those are now required fields in the post-13-23 schema. Recommended: include both Movement and Unlocks in the canonical missing-field check.)
  
  Final phrasing: "Routes listed without Direction, Goal, Movement Type, Movement, Unlocks, Priority, Status, or Blocked By."
- Cross-section dependency: Depends on P2.13-23-b (cut `Continuation Note`); aligned with P3.d + P3.e (Movement + Unlocks confirmed present per 13-23 REVISED-1 + REVISED-2).
- Landing-pass: **3 (REPAIR)**

**P5.e.** RESIDUE — §5 Output prologue dual-file framing acknowledgment.
- Spec section: §5 (Output) — the prologue at lines 338-344
- Action: REPAIR
- Status: RESIDUE
- Provenance: this-inquiry-residue (surfacing FF-Su9)
- Edit description: In §5.1's "TWO work-products" description, REPAIR the framing to acknowledge `_route.md` as part of the artifact set. Current text (lines 340-343):
  
  > (a) The workspace work-product (§5.2) — the substantive product; session-local; the routes read into present attention plus full per-route metadata.
  > (b) The Route Map artifact (§5.3) — the navigation/handoff product; persistent; per-route entries with metadata + wrapper fields. Carries the per-route content needed for downstream selection.
  
  REPAIR to:
  
  > (a) The workspace work-product (§5.2) — the substantive product; session-local; the routes read into present attention plus full per-route metadata.
  > (b) The Route Map artifact (§5.3) — the navigation/handoff product; persistent; per-route entries with metadata + wrapper fields. Carries the per-route content needed for downstream selection. Saved as `routeman.md`.
  > (c) The invocation-state artifact (§5.8) — `_route.md`; persistent; records cross-invocation state (Last Invocation + Prior Invocations + History). Saved alongside `routeman.md` in the inquiry folder.
  
  The framing now acknowledges THREE work-products (workspace + Route Map + invocation-state). Update the §5.1 introductory line "Routeman produces TWO work-products" → "Routeman produces TWO PERSISTENT ARTIFACTS plus the workspace work-product."
- Cross-section dependency: Depends on P2.00-51-f (ADD §5.8 `_route.md` description).
- Landing-pass: **3 (REPAIR)**

**P5.f.** RESIDUE — NOW SOLID INSTRUCTIONS section parameter-name mirror updates.
- Spec section: "---- NOW SOLID INSTRUCTIONS START ----" section (starts line 421, Steps 1-5 lines 425-464)
- Action: REPAIR
- Status: RESIDUE
- Provenance: this-inquiry-residue (surfacing FF-Su8)
- Edit description: The operational instructions still reference `prior route map` parameter at lines 427, 429, 433. After P2.00-51-a + P2.00-51-b + P2.00-51-c land the parameter cleanup in §3.1 + §3.2 + §3.5, the operational instructions are out of sync. REPAIR each occurrence:
  
  - Line 427: "Determine the entry-point (`fresh-state` if no prior route map exists for this state+goal; `prior-map-extending` if a prior route map is available and the operation should incorporate it)." → REPAIR to: "Determine the entry-point (`fresh-state` if no prior `_route.md` exists for this inquiry; `prior-map-extending` if `_route.md` exists with Prior Invocations entries per §5.8 and the operation should incorporate them)."
  
  - Line 429: "Receive: the `current state` (required; artifacts and verdicts from prior cognitive work); the `goal` or `subgoal` (required; the directional anchor); optional `prior route map` (when available across invocations); optional `refined-sub-goal` (when re-invoking with a narrower focus)." → REPAIR to: "Receive: the `current state` (required; artifacts and verdicts from prior cognitive work); the `goal` or `subgoal` (required; the directional anchor); cross-invocation context loaded via `_route.md` per §5.8 when present (read-policy per §3.2); optional `refined-sub-goal` (when re-invoking with a narrower focus)."
  
  - Line 433: "**Reception** (once): initialize workspace with `current state` + `goal` + optional `prior route map`. Prepare for Enumeration." → REPAIR to: "**Reception** (once): initialize workspace with `current state` + `goal` + the prior invocation's `_route.md` state if present (per §5.8 and §3.2 read-policy). Prepare for Enumeration."

- Cross-section dependency: Depends on P2.00-51-a + P2.00-51-b + P2.00-51-c (§3.1 + §3.2 + §3.5 parameter cleanups) + P2.00-51-f (§5.8 ADD) + P2.14-49-a-d (§3.2 read-policy additions).
- Landing-pass: **3 (REPAIR)**

**RESIDUE row total: 6 rows.**

---

### P6 — Coverage Map

**Mechanism coverage:** Combination (combining the 4 priors' delta inventories into one audit table) + Extrapolation (the table is set up to extend if future priors add commitments).

**Production approach:** Per-prior row mapping: prior-row-id → consolidated-delta-row(s) → status.

#### Coverage map table

| Prior | Prior row ID | Description | Maps to consolidated row(s) | Coverage status |
|---|---|---|---|---|
| **00-51** | row 1 | Cut per-Route `Movement` field | P3.d (NO-OP CONFIRM — reversed by 13-23 REVISED-1; field still present in live spec) | REVERSED-COVERED |
| **00-51** | row 2 | Cut per-Route `Unlocks` field | P3.e (NO-OP CONFIRM base) + P2.13-23-rev2-amend (ACTIVE content-axis amendment) | REVERSED-COVERED |
| **00-51** | row 3 | Reduce Status enum 10 → 7 | P3.a (NO-OP CONFIRM — already at 7) | COVERED-VIA-NO-OP |
| **00-51** | row 4 | Drop protocol-alias commitment (`_frontier.md` ↔ `_navig.md`) | P3.b (NO-OP CONFIRM — no aliases in live spec) | COVERED-VIA-NO-OP |
| **00-51** | row 5 | Replace §5.5 Route Map wrapper protocol heavy-machinery | P3.c (NO-OP CONFIRM — wrapper already matches recommendation) | COVERED-VIA-NO-OP |
| **00-51** | row 6 | Add `_route.md` description as §5.8 | P2.00-51-f (ACTIVE ADD) | COVERED-ACTIVE |
| **00-51** | row 7 | Replace §3.6 / §3.2 / §3.5 protocol-derived parameters with `_route.md` reference | P2.00-51-a (§3.1 diagram) + P2.00-51-b (§3.2 prose) + P2.00-51-c (§3.5 prose) — three REPAIRs | COVERED-ACTIVE (fanned to 3 rows) |
| **00-51** | row 8 | Trim §5.6 Telemetry from ~10 to 5-6 metrics | P2.00-51-e (ACTIVE REPAIR-reduce) | COVERED-ACTIVE |
| **00-51** | row 9 | (a) γ-field REPAIR writing-rule + LAYER-2 mode (b) §2.4 chain reference update | P2.00-51-g (ACTIVE ADD for γ-field rule + LAYER-2 mode) + P2.00-51-d (ACTIVE REPAIR for §2.4) — two-clause row fanned to 2 rows | COVERED-ACTIVE (fanned to 2 rows) |
| **13-23** | REVISED-1 | RESTORE `Movement` field | P3.d (NO-OP CONFIRM — field present) | COVERED-VIA-NO-OP |
| **13-23** | REVISED-2 | RESTORE `Unlocks` field + content-axis amendment | P3.e (NO-OP CONFIRM base) + P2.13-23-rev2-amend (ACTIVE REPAIR for content axis) | COVERED-VIA-NO-OP-AND-ACTIVE |
| **13-23** | NEW-1 | Cut per-Route `Purpose` field | P2.13-23-a (ACTIVE REMOVE) | COVERED-ACTIVE |
| **13-23** | NEW-2 | Cut per-Route `Continuation Note` field | P2.13-23-b (ACTIVE REMOVE) | COVERED-ACTIVE |
| **13-23** | NEW-3 | Cut Continuation Memory group-header | P2.13-23-c (ACTIVE REMOVE) | COVERED-ACTIVE |
| **13-23** | NEW-4 | Update §5.4 schema description "5 purpose-groups" | P2.13-23-d (ACTIVE REPAIR) | COVERED-ACTIVE |
| **13-23** | NEW-5 | Reduce 4-axis content distinction table to 2-axis prose note | P4.a (SUPERSEDED-NO-OP — 4-axis table never present) | COVERED-VIA-SUPERSEDED-NO-OP |
| **14-03** | (no MUST rows; compatibility verdict) | n/a | n/a (0 priors→0 mappings) | n/a |
| **14-49** | row 1 | Add Read-Policy Vocabulary sub-section | P2.14-49-a (ACTIVE ADD) | COVERED-ACTIVE |
| **14-49** | row 2 | Add Read-Failure Default sub-section | P2.14-49-b (ACTIVE ADD) | COVERED-ACTIVE |
| **14-49** | row 3 | Add "Reading prior `routeman.md` in directional mode" sub-section (MWA rule) | P2.14-49-c (ACTIVE ADD) | COVERED-ACTIVE |
| **14-49** | row 4 | Add "Reading prior `_route.md` in directional mode" sub-section (SHOULD rule) | P2.14-49-d (ACTIVE ADD) | COVERED-ACTIVE |
| **14-49** | row 5 | Add "Note on stage-2 input acquisition" to §3.3 | P2.14-49-e (ACTIVE ADD) | COVERED-ACTIVE |
| **14-49** | row 6 | Add one-line cross-reference §3.5 → §3.2 read-policy | P2.14-49-f (ACTIVE ADD one-line) | COVERED-ACTIVE |
| **this-inquiry** | RESIDUE FF-Su7a | §1.4 vocab entry cleanup | P5.a (RESIDUE REMOVE) | RESIDUE-COVERED |
| **this-inquiry** | RESIDUE FF-Su7b | §2.4 prose cleanup | P5.b (RESIDUE REPAIR) | RESIDUE-COVERED |
| **this-inquiry** | RESIDUE FF-Su7c | §3.4 Assembly bullet update | P5.c (RESIDUE REPAIR) | RESIDUE-COVERED |
| **this-inquiry** | RESIDUE FF-Su7d | §4.2 failure mode #5 field-list update | P5.d (RESIDUE REPAIR) | RESIDUE-COVERED |
| **this-inquiry** | RESIDUE FF-Su9 | §5 prologue dual-file framing | P5.e (RESIDUE REPAIR) | RESIDUE-COVERED |
| **this-inquiry** | RESIDUE FF-Su8 | NOW SOLID INSTRUCTIONS parameter mirror | P5.f (RESIDUE REPAIR — 3 sub-edits) | RESIDUE-COVERED |

#### Per-prior coverage summary

| Prior | Rows in prior's delta-list | Rows mapped in consolidated delta | Drop count |
|---|---|---|---|
| **00-51** | 9 | 9 (with fan-out: row 7 → 3 sub-rows; row 9 → 2 sub-rows; total 12 consolidated rows from 9 prior rows) | 0 |
| **13-23** | 7 | 7 (with fan-out: REVISED-2 → 2 sub-rows: NO-OP base + ACTIVE amendment) | 0 |
| **14-03** | 0 (compatibility verdict; no MUST) | 0 | 0 |
| **14-49** | 6 | 6 | 0 |
| **this-inquiry RESIDUE** | n/a | 6 | n/a |
| **TOTAL** | 22 prior MUST rows | 31 consolidated-delta rows (18 ACTIVE + 5 NO-OP CONFIRM + 1 SUPERSEDED-NO-OP + 6 RESIDUE + 1 NO-OP-base-of-fan-out for P3.e) | 0 drops |

**Drop count: 0.** All 22 prior MUST rows are mapped to consolidated-delta rows with explicit status. No commitment is dropped.

---

### P7 — Open Questions / Gaps

**Mechanism coverage:** Extrapolation (post-application monitoring + future-inquiry triggers) + Lens Shifting (each Open Question reframes a related concern as a future scope).

#### MONITORING

- **OQ1 — Filler-meta-reasoning post-application audit.** Per 00-51's empirical-evidence-gated revival path: observe whether the γ-field (`why_this_might_be_important`) consistently produces cycle-anchored content or generic filler. Manual review of next ~5 routeman invocations post-application; promote 00-51 Candidate #2 (cut γ-field) with empirical evidence if filler-rate exceeds threshold.
- **OQ2 — Two-vocabulary friction after alias drop.** Per 00-51's Monitoring item: watch for any cross-document reference accidentally re-introducing `_navig.md` / `_frontier.md` aliases. The consolidated delta drops the aliases at source (already absent in live spec); monitor for re-introduction.
- **OQ3 — Functional-role-distinction post-amendment.** Per 13-23's Monitoring item: observe whether functional-role distinction across routes survives in WHY + why_important after Purpose cut. If functional-role distinction drifts toward operational-detail content over time, the 13-23 Purpose-CUT verdict re-opens; revival paths (Candidates D/C) are preserved.
- **OQ4 — Warmup-memory recoverability from `_route.md` History.** Per 13-23's Monitoring: when a future agent resumes a routeman context, does `_route.md`'s History section provide enough warmup signal, or does per-route inline content (Continuation Note) prove necessary?
- **OQ5 — HALT edge-case operational frequency.** Per 14-49's Monitoring: observe whether MANDATORY-WHEN-AVAILABLE's HALT edge cases (MissingRequiredInput when caller-info also absent; MalformedRequiredInput) fire in practice. Frequency informs whether the graceful-degrade thresholds need adjustment.
- **OQ6 — Post-application spec audit checkpoint.** After the consolidated delta is applied, manually re-read the routeman.md spec end-to-end. Verify internal consistency: no orphaned field references; no contradictions between sections; no broken cross-references. Especially verify the §3.2 + §3.5 + §5.8 + NOW SOLID INSTRUCTIONS section coherence (the convergence point of the most amendments).

#### BLOCKED

- **OQ7 — Bounded follow-up #1: Nav-session aggregation output design.** Per 14-03. Blocked on multi-head capability being designed or operationally needed. Scope: design the aggregation artifact a navigation session writes after reading N workers' `routeman.md` outputs.
- **OQ8 — Bounded follow-up #2: Meta-loop runtime design.** Per 14-03. Blocked on Follow-up #1 + L2-3 readiness. Scope: design the meta-loop's read-pattern + commit-mechanism + `_meta_state.md` schema.
- **OQ9 — LAYER-2 audit protocol authoring.** Per 00-51-deferred. Blocked on the routeman frontier-questions inquiry Q4 being addressed. The audit converts post-amendment operational data into a structural decision signal for the γ-field contingent decision.
- **OQ10 — Baldwin cycle activation against routeman substrate.** Blocked on `/intuit` shipping + operational-data accumulation. When operational, the Baldwin cycle's Predictive-RC (T0: per-Route Priority + Reasoning + why_important) → Retrospective-RC (T2+: Status updates + `_route.md` History) delta computation becomes possible.

#### RESEARCH FRONTIERS

- **OQ11 — Cross-discipline read-policy vocabulary unification.** Per 14-49: the 4-tier MANDATORY / MANDATORY-WHEN-AVAILABLE / SHOULD / MAY vocabulary is currently routeman-only. When `/reflect` is revived or another discipline spec is authored that uses input-read policies, observe whether the same 4-tier vocabulary fits. If yes at N=2+, promote to project-canonical pattern.
- **OQ12 — Cross-discipline "consolidated amendment plan" pattern.** This inquiry surfaces a generalizable pattern: "given N prior inquiries with delta-lists targeting one live artifact, produce one section-keyed consolidated delta with row-type classification + landing-order + residue identification." If other disciplines accumulate multiple prior commitments needing consolidation, the pattern applies. Currently N=1 (routeman); promote at N≥3.
- **OQ13 — Empirical-grounding requirement for structural convergence (per 13-23 meta-observation).** N=1 instance surfaced in this corpus (the 00-51 Innovation's confidently-wrong convergence on Movement+Unlocks cuts, refuted by 13-23's empirical inspection). At N≥3 instances across the corpus, formalize as a `/innovate` spec refinement: "structural mechanisms converging on a derivability claim must include at least one empirical anchor among the converging mechanisms."

#### REFINEMENT TRIGGERS

- **OQ14 — If MANDATORY-WHEN-AVAILABLE tier proves operationally confusing** (spec readers misinterpret the absence case), simplify by collapsing back to 3-tier RFC 2119 with prose qualification. Trigger: ≥2 instances of mis-application observed in routeman invocations.
- **OQ15 — If generic-mode read policy proves to require a different vocabulary**, this inquiry's 4-tier vocabulary's universality is contested. Likely refinement: keep 4-tier; have different per-tier verdicts for generic vs directional modes.
- **OQ16 — If multi-head concurrency on directional invocation surfaces race conditions in practice**, this inquiry's single-worker assumption re-opens. Promote a follow-up inquiry on cross-worker coordination for directional mode.

#### OUT-OF-SCOPE FLAGS

- **OQ17 — Session-context poison.** Per Sensemaking A7. The LLM session-context priming concern (loading `cognitive_harness/non-active/multi_resolution_navigation.md` at session start could bias routeman invocations) is OUT OF SCOPE for this inquiry's spec-amendment delta. The amendment edits the spec file; session-management is a separate concern. Recommendation: flag for future session-management work; do not address via spec amendment.
- **OQ18 — Naming-collision monitoring.** Per Sensemaking Frame-exit Completeness Verdict Rigor #2. No current name collisions detected; monitor for re-introduction.

#### COULD ACTIONS

- **OQ19 — Institutional memory `docs/discipline_design_history/for_routeman.md` authoring.** Per Sensemaking A5. The canonical institutional-memory location currently doesn't exist (`ls` confirms). Authoring it is a separate artifact concern, NOT part of the consolidated spec-edit delta. Recommendation: COULD action; gated on user decision to author institutional memory for routeman's design history.

---

### P8 — Finding Deliverable Shape Spec

**Mechanism coverage:** Combination (combining CONCLUDE template + Synthesis Trigger's Inherited Commitments Re-test enforcement + all 8 upstream pieces) + Domain Transfer (the finding's shape borrows from /MVLw pipeline's archive of finding.md files at neighboring inquiries).

#### Finding section structure (in order)

```markdown
---
status: active
model: claude-opus-4-7[1m]
effort: max
synthesizes: 
  - devdocs/inquiries/2026-05-27_00-51__routeman_output_simplification/finding.md
  - devdocs/inquiries/2026-05-27_13-23__routeman_per_route_schema_refinement/finding.md
  - devdocs/inquiries/2026-05-27_14-03__routeman_simplification_endgoal_compatibility/finding.md
  - devdocs/inquiries/2026-05-27_14-49__routeman_directional_input_read_policy/finding.md
---
# Finding: Consolidated structural amendment plan for `cognitive_harness/routeman/references/routeman.md` — landing the 4 prior routeman inquiries' commitments + 6 cross-section coherence residue rows in one section-keyed delta with 3-pass landing-order

## Question
(from `_branch.md`)
[State the user's question; note the 2 observation targets; note the STRUCTURAL Layer Commitment + Synthesis Trigger.]

## Finding Summary
[6-10 bullet points covering:
- The consolidated delta's shape (section-keyed flat list; 4 row-types; 3-pass landing-order; ~30 rows across ~13 sections).
- The KEY ASYMMETRY surprise (live spec is older than priors; β-layer protocol-DNA never landed in spec; 4-axis table never landed).
- Honest reframing of context-poison observation target (most poison was arrested at finding-stage by the priors; spec-text-level poison is small; residue is field-level remnants + cross-section ripples).
- The 6 RESIDUE rows + their cross-section dependencies (this inquiry's distinctive value-add).
- The 4 ACTIVE row-categories from priors (13-23 cuts + 00-51 output additions + 00-51 telemetry trim + 14-49 read-policy additions).
- The 5 NO-OP CONFIRM rows (00-51 7-status / alias drop / wrapper REPAIR + 13-23 Movement/Unlocks restore).
- The 1 SUPERSEDED-NO-OP row (13-23 NEW-5 — 4-axis table never present).
- The bounded out-of-scope items (nav-session aggregation, meta-loop runtime, institutional memory, session-context poison).
- The deliverable is application-ready: each row has concrete-enough-to-apply edit text + section identifier + landing-pass assignment.
]

## Finding

### Surrounding context
[2-3 paragraphs: routeman is the project's only shipped Boundary discipline. 4 prior inquiries on 2026-05-27 produced amendment-deltas that were never applied to the live spec. The user invoked /MVLw to consolidate them into one coordinated application patch + identify context-poison residue. This inquiry's consolidation effort vs naive concatenation is the distinctive value-add.]

### The honest reframing of "context poison"
[Per Sensemaking A7. The user's observation target framing implies heavy poison; the actual finding is more modest at spec-text layer because the priors' own analyses (especially 00-51's β-layer minimization) arrested most poison BEFORE it landed in the live spec. The remaining cleanup is: (a) field-level remnants (Purpose + Continuation Note still in live §5.4); (b) cross-section coherence ripples (the 6 RESIDUE rows); (c) the unapplied prior commitments themselves (the 17+ ACTIVE rows).]

### The consolidated amendment delta (the deliverable proper)

[Embed the full delta-table here. Render as 8-column markdown table with all 31 rows in the order:
- ACTIVE rows by spec section (§1.4 → §2.4 → §3.x → §4.x → §5.x → NOW SOLID INSTRUCTIONS)
- NO-OP CONFIRM rows grouped
- SUPERSEDED-NO-OP row
- RESIDUE rows by spec section
Or alternatively, render in 3-pass order (Pass 1 CUT rows first, then Pass 2 ADD rows, then Pass 3 REPAIR rows). Both renderings valid; pick the application-most-useful — which is the 3-pass order.]

### The 3-pass landing-order
[Pass 1 / Pass 2 / Pass 3 narrative summary. What lands first / second / third. Why the order matters (intermediate-coherence preservation).]

### Cross-amendment merge coherence at §3.2 and §3.5
[Per Sensemaking A2 + A3. The 00-51 + 14-49 amendments at §3.2 + §3.5 are ADDITIVE, not in conflict. The merged §3.2 has: (a) simplified parameter set (00-51); (b) read-policy vocabulary (14-49); (c) graceful-degrade default (14-49); (d) routeman.md MWA rule (14-49); (e) _route.md SHOULD rule (14-49). The merged §3.5 has: (a) simplified parameters (00-51); (b) one-line cross-reference to §3.2 (14-49). No adjudication required — both amendments compose.]

### Coverage map
[Embed the full coverage table from P6. Per-prior coverage summary at bottom: 22 prior MUST rows → 31 consolidated rows; 0 drops.]

## Inherited Commitments Re-test

### From 00-51 (output simplification)
[Per-commitment re-test table with status: STANDS / RE-TESTED-STANDS / REVERSED-BY-LATER-PRIOR / NO-OP-CONFIRMED.]

### From 13-23 (per-Route schema refinement)
[Per-commitment re-test table.]

### From 14-03 (compatibility verdict)
[Per-commitment re-test table. Most commitments are INHERITED-WITHOUT-RE-TEST (out of consolidation scope); the integration-positive Movement+Unlocks restoration is RE-TESTED-STANDS.]

### From 14-49 (directional read policy)
[Per-commitment re-test table.]

### Cross-cutting commitments (across multiple priors)
[Specifically address: file structure (00-51) — STANDS; per-Route schema (00-51 + 13-23) — STANDS WITH AMENDMENTS LANDED; β-layer minimization (00-51) — STANDS (with NO-OP confirmation that β-layer was already absent from live spec); read-policy commitments (14-49) — STANDS (NEW landed); end-goal compatibility (14-03) — STANDS.]

## Next Actions

### MUST
- **Apply the consolidated delta** (31 rows; 3-pass landing-order) to `cognitive_harness/routeman/references/routeman.md`.
  - Who: the user (or a follow-up materialization task).
  - Gate: condition-bound — when the user decides to materialize.
  - Why: 4 prior inquiries' commitments + 6 cross-section coherence residue rows would land. Without application, the priors remain unapplied.
  - Application steps: Pass 1 (CUT) → Pass 2 (ADD) → Pass 3 (REPAIR).
  - Post-application verification: re-read the spec end-to-end (per OQ6); verify internal consistency.

### COULD
- **Institutional memory `docs/discipline_design_history/for_routeman.md` authoring** (per OQ19). Records the design-history of routeman's evolution through these 4+1 inquiries.
  - Who: any inquiry runner.
  - Gate: user decision.
  - Why: routeman is the only shipped Boundary discipline; institutional memory aids future Boundary disciplines' design.

- **Update `cognitive_harness/non-active/multi_resolution_navigation.md`** to record that routeman is no longer a consumer (per 00-51's COULD item that referenced 24-00's alias note). The protocol remains available for other consumers.
  - Who: whoever applies the MUST.
  - Gate: condition-bound — after MUST application.
  - Why: cross-document coherence; prevents future readers from following stale cross-references.

- **Author the LAYER-2 audit protocol** (per 00-51-deferred Q4). Converts post-application operational data into structural decision signals for the γ-field contingent.
  - Who: any inquiry runner.
  - Gate: condition-bound — when 5-10 post-application routeman invocations accumulate.
  - Why: enables the empirical-evidence-gated revival path for the 00-51 γ-field cut (Candidate #2 DEFERRED).

### DEFERRED
- **Bounded follow-up #1: Nav-session aggregation output design** (per 14-03). Gate: multi-head capability designed or operationally needed.
- **Bounded follow-up #2: Meta-loop runtime design** (per 14-03). Gate: Follow-up #1 + L2-3 readiness.
- **γ-field cut promotion (00-51 Candidate #2)**. Gate: LAYER-2 audit reveals filler-rate above threshold.
- **Cross-discipline read-policy vocabulary unification** (per OQ11). Gate: N≥2 disciplines use the 4-tier vocabulary.
- **Empirical-grounding requirement for structural convergence as a `/innovate` refinement** (per OQ13). Gate: N≥3 corpus instances of confidently-wrong-structural-convergence.
- **Cross-discipline "consolidated amendment plan" pattern** (per OQ12). Gate: N≥3 disciplines need this consolidation pattern.

## Reasoning
[Substantive prose covering:
- Why section-keyed flat list beats grouped-by-provenance (Sensemaking A6).
- Why NO-OP CONFIRM rows are included with explicit row-type tag (Sensemaking A1).
- Why RESIDUE rows are coherence-load-bearing not scope-creep (Sensemaking A4).
- Why context-poison reframes honestly to spec-text-small + finding-level-arrested + residue-real (Sensemaking A7).
- Why §3.2 + §3.5 cross-amendments are additive composition not conflict (Sensemaking A2 + A3).
- Why institutional memory is COULD not MUST (Sensemaking A5; user-memory feedback `Disciplines self-contained`).
- Why landing-order is CUT → ADD → REPAIR (intermediate-coherence preservation).
- Strongest prosecution against this consolidation (the alternative shape considered + why rejected).
]

## Open Questions
[Render full OQ list from P7: Monitoring (6) + Blocked (4) + Research Frontiers (3) + Refinement Triggers (3) + Out-of-Scope (2) + COULD (1).]

## Source Input
<details>
<summary>Raw user input for this finding</summary>

```text
To understand what structural changes are needed to fix the current routeman discipline so that we will clean context poison effect and fix how output is handled?
```

</details>
```

#### Compliance criterion for P8 deliverable

- [ ] All sections present in canonical order.
- [ ] Finding Summary has 6-10 bullets covering shape + asymmetry + reframing + residue + categories + bounded-out-of-scope + application-readiness.
- [ ] Finding section includes the consolidated delta TABLE rendered in 3-pass landing-order (the application-useful rendering).
- [ ] Inherited Commitments Re-test covers all 4 priors + cross-cutting commitments.
- [ ] Next Actions has 1 MUST (apply the delta) + 3 COULD + 6 DEFERRED.
- [ ] Reasoning explicitly addresses the 7 Sensemaking adjudications.
- [ ] Open Questions populates all 4 categories (Monitoring + Blocked + Research Frontiers + Refinement Triggers) + Out-of-Scope + COULD.
- [ ] Source Input preserves user's verbatim invocation.
- [ ] Frontmatter has `synthesizes:` listing all 4 priors (consistent with Synthesis Trigger pattern).

---

## Inherited Frame Audit (between Phase 2 and Phase 3)

### Step (i) — Seed-level central assumption

The seed framing's central assumption: **"Context poison exists in the live spec and needs cleanup."** Load-bearing because the user named context-poison as the primary observation target.

### Step (ii) — Piece-level commitments

None of the 8 pieces are meta-decision pieces (per the Meta-Decision-Piece Criterion). Sensemaking did the adjudications upstream:
- A1 NO-OP rows INCLUDED → committed at Sensemaking (vocabulary choice).
- A2 §3.2 ADDITIVE → committed at Sensemaking (frame).
- A3 §3.5 ADDITIVE → committed at Sensemaking.
- A4 RESIDUE coherence-load-bearing → committed at Sensemaking.
- A5 institutional memory EXCLUDED → committed at Sensemaking.
- A6 section-keyed flat list → committed at Sensemaking.
- A7 context-poison reframing → committed at Sensemaking.

The pieces are content-production, not meta-decision. The Piece-Level Inversion Rule does NOT apply.

### Step (iii) — Challenge scan

Does any candidate in the set explicitly challenge the seed-level central assumption "context poison exists in the live spec and needs cleanup"?

**YES.** Sensemaking A7 produced the candidate that REVERSES the assumption: "Most context poison was arrested at the finding-stage by the priors' own analyses; the spec-text-layer cleanup is smaller than expected; the real residue is field-level remnants + cross-section ripples + unapplied prior commitments themselves." This is a frame-rejection candidate that operates in the consolidated finding's Reasoning section + the honest reframing prose throughout.

The challenge is structural (not surface): it doesn't just say "less poison than expected" — it identifies WHICH layers have/don't have poison (TYPE-layer enumeration in Sensemaking Phase 2 Frame-exit Completeness perspective) AND which priors already arrested it AND why the remaining residue is the real cleanup.

### Step (iv) — Firing condition

The audit does NOT fire. The seed-level central assumption HAS an explicit challenge in the candidate set (Sensemaking A7's reframing).

For piece-level commitments: none are meta-decision pieces (Sensemaking adjudicated upstream); audit applies trivially.

**Verdict: Audit does NOT fire. Proceed to Phase 3 Test.**

---

## Phase 3 — Test

Each piece's output is tested via the 5-test cycle:

### P1 Substrate

- **Novelty:** Genuinely new substrate vocabulary (4-tier row-types is project-coined; 3-pass landing-order is structurally derived).
- **Scrutiny survival:** Strongest objection: "3 tiers (ACTIVE / NO-OP / RESIDUE) would suffice; SUPERSEDED-NO-OP is needless granularity." Survives: SUPERSEDED-NO-OP has distinct audit semantics (says "never was" vs "already there"). HIGH confidence.
- **Fertility:** Substrate is reusable for future "consolidated amendment plan" inquiries on other disciplines (OQ12 frontier).
- **Actionability:** Each substrate component (vocab + landing-order + schema) is concrete-enough-to-apply.
- **Mechanism independence:** Both Domain Transfer (RFC 2119 + amendment-table conventions) and Constraint Manipulation (the 3-pass order's constraint) converge on the same substrate. INDEPENDENT.

**Verdict: PASS. ACTIONABLE.**

### P2 ACTIVE rows

- **Novelty:** Each ACTIVE row's edit description is concrete-enough-to-apply (specific spec line + specific edit text). Combination of priors' commitments into one section-keyed list is the inquiry's distinctive product.
- **Scrutiny survival:** Strongest objection: "P2.13-23-d ('5 purpose-groups' prose update) may be NO-OP if no explicit count prose exists in §5.4." Survives: verification step explicitly included ("if no explicit count prose remains, this row becomes NO-OP at application time"). Pre-flagged as conditional. HIGH confidence.
- **Fertility:** ACTIVE rows produce a clean post-application spec ready for cross-discipline reference and bounded-follow-up consumption.
- **Actionability:** Each row is concrete-enough; the patch applicator can act on each without further design.
- **Mechanism independence:** Both Combination (4-priors → 1 list) and Constraint Manipulation (landing-pass assignment) converge on the same set of rows.

**Verdict: PASS. ACTIONABLE.**

### P3 NO-OP CONFIRM rows

- **Novelty:** Audit-completeness rows are a structurally distinct category (project-coined for this consolidation). Each row cites specific live-spec evidence.
- **Scrutiny survival:** Strongest objection: "NO-OP rows clutter the delta and risk misreading." Survives: explicit row-type tag + visual distinction (Status column "NO-OP CONFIRM") prevents misreading. P3.e split was recognized + corrected to surface the active sub-amendment. HIGH confidence.
- **Fertility:** NO-OP CONFIRM rows enable future audits to verify commitments without re-discovery.
- **Actionability:** Each row's evidence is verifiable.
- **Mechanism independence:** Both Domain Transfer (audit-checklist conventions) and Lens Shifting (reframe "needs edit" → "no edit, here is why") converge.

**Verdict: PASS. ACTIONABLE.**

### P4 SUPERSEDED-NO-OP row

- **Novelty:** The category itself is novel (handles the case where prior commitment targets an absent artifact).
- **Scrutiny survival:** Strongest objection: "Could 13-23 NEW-5 ever land in future?" Survives: forward-consideration explicitly addresses revival ("if a future inquiry restores Purpose/Continuation Note AND introduces the 4-axis table, NEW-5 re-activates"). HIGH confidence.
- **Fertility:** Demonstrates the value of SUPERSEDED-NO-OP as a distinct category for future consolidations.
- **Actionability:** Audit-completeness; no edit needed; preserved as record.
- **Mechanism independence:** Both Absence Recognition (4-axis table is absent) and Lens Shifting (frame: structurally-inapplicable-commitment) converge.

**Verdict: PASS. ACTIONABLE.**

### P5 RESIDUE rows

- **Novelty:** Inter-section coherence ripple identification is this inquiry's distinctive value-add. Not in any prior's delta list. 6 specific ripples surfaced from FF-Su7 + FF-Su8 + FF-Su9.
- **Scrutiny survival:** Strongest objection: "Could the residue rows be wrong (the rippling change isn't actually necessary)?" Survives: each RESIDUE row has explicit cross-section dependency annotation (target section + trigger section + nature of dependency). If the trigger ACTIVE edit doesn't land, the residue is moot; the dependency is structural, not speculative. HIGH confidence.
- **Fertility:** The cross-section-coherence pattern is reusable for future consolidations (OQ12).
- **Actionability:** Each residue row has concrete edit text + dependency annotation.
- **Mechanism independence:** Both Absence Recognition redesign-level (cross-section consistency surfaces as absent coherence) and Combination (target + trigger section combined into annotation) converge.

**Verdict: PASS. ACTIONABLE.**

### P6 Coverage map

- **Novelty:** Per-prior coverage audit is project-coined for this consolidation. 22 prior MUST rows → 31 consolidated rows with 0 drops.
- **Scrutiny survival:** Strongest objection: "Could a prior delta-row be mis-counted, causing a missed mapping?" Survives: per-prior count verified by re-reading each finding.md's MUST/amendment list; the count matrix (9 + 7 + 0 + 6 = 22 prior; mapped to 31 consolidated with fan-out for row 7 + row 9 in 00-51 and REVISED-2 in 13-23) is explicit. HIGH confidence.
- **Fertility:** Coverage map enables future audits + serves as the consolidation's audit trail.
- **Actionability:** Auditable per-row.
- **Mechanism independence:** Both Combination (combining 4 priors' delta inventories) and Extrapolation (the table is set up to extend to future priors) converge.

**Verdict: PASS. ACTIONABLE.**

### P7 Open Questions

- **Novelty:** OQ12 (cross-discipline consolidation pattern) + OQ13 (empirical-grounding requirement for structural convergence) are this-inquiry-novel; others are inherited from priors.
- **Scrutiny survival:** Strongest objection: "Too many Open Questions; may dilute action focus." Survives: clear partitioning into Monitoring + Blocked + Research Frontiers + Refinement Triggers + Out-of-Scope + COULD makes each item's category obvious; not all are action-required. HIGH confidence.
- **Fertility:** OQ12 + OQ13 are corpus-pattern observations that may promote to project-canonical principles at N≥3.
- **Actionability:** Each OQ has an explicit gate (when it activates).
- **Mechanism independence:** Both Extrapolation (post-application monitoring + future-inquiry triggers) and Lens Shifting (each reframes a concern as future scope) converge.

**Verdict: PASS. ACTIONABLE.**

### P8 Finding deliverable shape spec

- **Novelty:** The shape borrows from CONCLUDE template + Synthesis Trigger's Inherited Commitments Re-test pattern; the specific section composition for this consolidated synthesis is novel.
- **Scrutiny survival:** Strongest objection: "The finding may be too long or have redundant sections." Survives: the compliance criterion has 9 specific checks; each section has a stated purpose; the consolidated delta table is the load-bearing content; surrounding sections are scaffolding. HIGH confidence.
- **Fertility:** The finding shape is reusable for future consolidated amendment plans.
- **Actionability:** CONCLUDE can write to the shape directly using the template.
- **Mechanism independence:** Both Combination (CONCLUDE + Synthesis Trigger + upstream pieces) and Domain Transfer (neighboring inquiries' finding.md archive as template source) converge.

**Verdict: PASS. ACTIONABLE.**

---

## Assembly Check

The 8 pieces' outputs combine into one consolidated deliverable: the consolidated amendment plan finding for routeman. Emergent properties of the assembly:

- **P1 substrate + P2/P3/P4/P5 row outputs = one section-keyed delta table** with 31 rows across 4 row-types.
- **P2/P3/P4/P5 outputs + P6 coverage map = the audit trail** ensuring no prior commitment is dropped.
- **P1+P6+P7+P8 = the finding's scaffolding** that contextualizes the delta for application.
- **Per-row provenance + landing-pass + cross-section dependency = the application protocol** that allows the patch applicator to apply rows in correct order without intermediate incoherence.

The assembly produces the consolidated amendment plan as a self-contained deliverable: a reader unfamiliar with the 4 priors can read the consolidated finding + apply the delta + verify post-application coherence (via OQ6's audit checkpoint).

### Axis coverage check

The underlying problem has multiple orthogonal axes:
- **Axis 1 (intervention type):** ADD / REMOVE / REPAIR / NO-OP / SUPERSEDED. Coverage: all 5 types appear across the 31 rows. PASS.
- **Axis 2 (provenance):** 00-51 / 13-23 / 14-03 / 14-49 / this-inquiry-residue. Coverage: all 5 sources have rows (14-03 has 0 MUST rows but contributes "no need to extend scope" justification; this is honest). PASS.
- **Axis 3 (landing-pass):** Pass 1 / Pass 2 / Pass 3. Coverage: all 3 passes have rows. PASS.
- **Axis 4 (spec section):** ~13 sections touched. Coverage: §1.4 / §2.4 / §3.1 / §3.2 / §3.3 / §3.4 / §3.5 / §4.2 / §4.3 (γ-field LAYER-2 mode) / §5 prologue / §5.4 / §5.5 (NO-OP) / §5.6 / §5.8 (new) / NOW SOLID INSTRUCTIONS. PASS.

Single-axis candidate sets bias check: NO. Multi-axis coverage achieved.

### Per-row mechanism-trace check

For the consolidated delta table's 31 rows, verify each row received active mechanism work:
- ACTIVE rows (18): each row references a specific prior delta-row + has concrete edit text; mechanism = Combination (priors' commitments + section assignment) + Constraint Manipulation (landing-pass). PASS.
- NO-OP CONFIRM rows (5): each row cites specific live-spec evidence; mechanism = Domain Transfer (audit conventions) + Lens Shifting (no-edit framing). PASS.
- SUPERSEDED-NO-OP row (1): cites absence evidence + forward-consideration; mechanism = Absence Recognition (table absent) + Lens Shifting. PASS.
- RESIDUE rows (6): each row has cross-section dependency annotation; mechanism = Absence Recognition redesign-level + Combination. PASS.

No row appears in the final output without mechanism trace.

---

## Mechanism Coverage Telemetry

- **Generators applied:** 3 / 4 (Combination + Absence Recognition + Domain Transfer; Extrapolation light — only used in P7 Open Questions for post-application monitoring + revival triggers, not as primary mechanism per piece).
- **Framers applied:** 2 / 3 (Lens Shifting + Constraint Manipulation; Inversion not directly used — but Sensemaking A7's honest reframing is a frame-rejection-style move analogous to Inversion at the inquiry-level, applied upstream).
- **Convergence:** YES — Combination + Constraint Manipulation converge on the section-keyed delta with landing-pass shape (P1+P2). Absence Recognition + Combination converge on the RESIDUE rows + cross-section dependency annotations (P5). Multi-mechanism convergence at HIGH confidence.
- **Survivors tested:** 8 / 8 pieces tested via the 5-test cycle. All PASS.
- **Failure modes observed:** None.
  - Premature Evaluation: NO (each output was tested only after generation).
  - Single-Mechanism Trap: NO (per-piece mechanism log shows 2+ mechanisms per piece).
  - Early Frame Lock: NO (Sensemaking did the frame work upstream; Innovation produced content within the stabilized frame).
  - Innovation Without Grounding: NO (every output is grounded in specific live-spec evidence + specific prior delta-rows).
  - Mechanism Exhaustion: NO (3G + 2F = 5/7 mechanism coverage; survivors found).
  - Survival Bias: NO (the honest-reframing candidate for "context poison" — which is uncomfortable to surface, because it suggests the user's framing was overshot — IS surfaced and load-bearing in the finding).

### Per-piece mechanism log (Production-Task mode telemetry)

| Piece | Mechanisms applied | Classification | Piece-level Inversion compliance |
|---|---|---|---|
| P1 | Domain Transfer, Constraint Manipulation | content-production | n/a (not meta-decision) |
| P2 | Combination, Constraint Manipulation | content-production | n/a |
| P3 | Domain Transfer, Lens Shifting | content-production | n/a |
| P4 | Absence Recognition, Lens Shifting | content-production | n/a |
| P5 | Absence Recognition redesign-level, Combination | content-production | n/a |
| P6 | Combination, Extrapolation | content-production | n/a |
| P7 | Extrapolation, Lens Shifting | content-production | n/a |
| P8 | Combination, Domain Transfer | content-production | n/a |

No meta-decision pieces (Sensemaking did adjudications). Piece-Level Inversion Rule does not apply. No inversion-axis violations.

**Overall: PROCEED.** Sufficient coverage (3G + 2F, minimum-met) + multi-mechanism convergence + all survivors tested + no failure modes observed.

Next: Critique.
