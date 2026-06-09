## User Input

`devdocs/inquiries/2026-06-01_15-28__inquiry_elaboration_process_layer/_branch.md` (priors consumed: surfacing / sensemaking / decomposition)

---

# Innovation — IE Process Layer (production mode)

## Seed
Decomposition's piece-list: D0 (IE-contract anchor) + DE1 (MVLw template edits) + DE2 (MVLw runtime behavior) + DE3 (reference_authority_check.md content) + DE4 (inquiry_elaboration_adoption.md content). Goal: produce the concrete authorable content per piece.

**Methodology-mode:** Standard default (instantiate the committed pieces). Alternative = Contrarian-rethink (re-open the design). Decision: **Standard default + piece-level Inversion on the meta-decision pieces** (D0 contract framing, DE2 gate-tier separation, DE4 adoption contract scope). Contrarian-rethink marked inapplicable — sensemaking + decomposition committed the design; this run instantiates.

## Generate (mechanisms applied; brief)

**Domain Transfer — native: API gateway middleware.** Request → middleware pre-processes (normalize, validate, route) → handler runs. Maps 1:1: Step 0 IE = middleware; request-structure verdict = routing decision; the loop = handler. The bounce-on-validation-fail = "400 with reasoning"; user-confirm = "manual approval before retry." Reinforces the design.

**Combination.** routeman's read-policy vocabulary + IE's 3 inputs → the per-input read-policy table at DE1's Step 0 preamble.

**Inversion (piece-level, system depth):**
- Invert *"gate halts by default"* → auto-proceed on FLAG. System: defeats asymmetric-failure stance; misframings reach loop. **Fails; halt-by-default confirmed.**
- Invert *"all edits runner-side"* (K8 invariant) → some edits in IE-spec. System: unwinds the entire 09-54 + 11-46 correction arc; IE re-acquires neighbor-knowledge. **Fails; K8 confirmed.**
- Invert *"reference-authority FLAG is separate halt-tier"* → shared bounce budget with IE's framing-fidelity FLAG. System: an ecosystem-level failure (deprecated reference) consumes a comprehension-bounce-budget; two distinct failure surfaces conflated. **Fails; separate-tier confirmed.**

**Constraint Manipulation (both directions).**
- ADD *"DE4 must include a 'what's NOT in the contract' section"* (prevents runners adopting too much) → **adopted** as DE4 §8.
- REMOVE *"MVLw worked example from DE4"* → rejected; the worked example IS the cross-runner value.

**Lens Shifting.** Spec-author lens: each piece's content must be copy-writable. Future-runner-author lens: DE4's contract must be readable cold by someone who doesn't know MVLw. Both applied.

**Extrapolation.** As more runners adopt IE (the project's multi-head future), DE4's contract becomes load-bearing — it's what keeps all instances consistent. Noted in DE4's preamble.

## Inherited Frame Audit
Central seed assumption = "the design from sensemaking SV6 is correct; this run produces authorable text." Was it challenged? **Yes** — three Inversions tested the meta-decisions (halt-by-default; runner-side-only; separate gate-tier); all failed at system level. **Audit does not fire.**

---

## Concrete content per piece

### D0 — The IE contract (anchor; cited by every piece below)

> **Inquiry Elaboration's runtime contract.** IE is invoked as a discipline that receives three inputs and emits three outputs. **Inputs:** `original_query` (the user's raw request), `project_goal` (the long-term anchor), `recent_context` (the short-term anchor). **Outputs:** (a) the **elaborated_inquiry** — a substantive framing containing the 5 meta-aspects (subject / action / level / observation-targets / deliverable-shape) + goal + scope + the rephrasings (simple / project-goal-grounded / recent-context-grounded + scope-highlighted / importance-highlighted + scope_small / scope_big) + an optional `requests:[]` list when the original_query bundles ≥2 distinct asks; (b) the **request-structure verdict** ∈ `{single | parallel-set{children} | sequential-chain[children, order]}`; (c) the **fidelity verdict** ∈ `{PASS | FLAG{axis, note}}` where `axis` is one of internal-consistency / user-faithfulness / external-validity. The runner consumes (a) by encoding into its framing artifact, (b) by deciding spawn behavior, (c) by deciding whether to halt or proceed. IE itself never spawns, encodes, or acts on its own verdicts — those are the runner's responsibilities (the perception/action split).

### DE1 — MVLw template edits (concrete diff against current `cognitive_harness/MVLw/SKILL.md`)

#### DE1.a — New Step 0 inserted before existing step 3

```markdown
3.0. **Step 0 — Elaborate the inquiry (invoke /inquiry-elaboration).**

   Before writing `_branch.md`, the inquiry is elaborated by /inquiry-elaboration into a multilayered, fidelity-verified framing. This stage runs once per ROOT NEW inquiry creation, before step 3.

   **Input supply (read-policy per input):**
   - `original_query` — **MANDATORY.** The user's raw request as received. Absent → HALT with `MissingRequiredInput`.
   - `project_goal` — **MANDATORY-WHEN-AVAILABLE.** If the project supplies a goal source, read it; if absent, FLAG `project_goal_absent` and proceed (the long-term anchor's rephrasing in IE's output will carry the `(anchor not supplied)` marker).
   - `recent_context` — **SHOULD.** Supply when available; on absence or read-failure, FLAG `recent_context_absent` and proceed-without (same graceful-degradation marker downstream).

   **Invocation:**
   ```
   Skill(skill: "inquiry-elaboration", args: {
     original_query: <raw user input>,
     project_goal: <project-goal content or null>,
     recent_context: <recent-context content or null>
   })
   ```
   If the Skill tool fails → fall back to `Read` on `cognitive_harness/inquiry-elaboration/SKILL.md`, then execute. If Read also fails → HALT with `IECouldNotBeLoaded`.

   **Outputs consumed** (per the IE runtime contract):
   - `elaborated_inquiry` (the framing content) — encoded into `_branch.md` in step 3 below (see the new `## Elaborated Inquiry` section)
   - `request_structure_verdict` — drives spawn behavior (see step 6 — spawn_set wrapper, EXECUTE PIPELINE section)
   - `fidelity_verdict` — drives the gate behavior (see step 5 — fidelity gate, EXECUTE PIPELINE section)

   **Apply the fidelity gate immediately** per step 5 below. Apply the **reference-authority pre-flight** per `cognitive_harness/protocols/reference_authority_check.md`. Only proceed to step 3 (the `_branch.md` write) once both gates pass (or after user override).
```

#### DE1.b — Step 3 thinned template (replaces current heavy template)

```markdown
3. For ROOT NEW only, write `[inquiry_path]/_branch.md` from IE's output (per step 0 above):

   ```markdown
   # Branch: [name from elaborated_inquiry]

   ## Elaborated Inquiry
   [Encoded from IE's elaborated_inquiry output. Contains:]

   ### Question
   [Question with all five meta-aspects (subject / action / level / observation-targets / deliverable-shape) per IE's output]

   ### Goal
   [Goal per IE's output]

   ### Scope
   [Scope with scope_small + scope_big per IE's output]

   ### Rephrasings
   - **rephrase_simple:** [plain restatement]
   - **rephrase_in_project_goal:** [restated in light of project goal — or `(anchor not supplied)` if input was absent]
   - **rephrase_in_recent_context:** [restated in light of recent context — or `(anchor not supplied)`]
   - **rephrase_scope_highlighted:** [scope-emphasized]
   - **rephrase_importance_highlighted:** [importance-emphasized]

   ### Requests
   [Present only when IE's request_structure_verdict ≠ `single`. One entry per distinct ask:]
   - request: ...
     how_connected_with_other_part: ...
     seq_or_parallel: ... (optional)

   ## IE Verdicts
   - **request_structure_verdict:** single | parallel-set{N children} | sequential-chain[N children, order]
   - **fidelity_verdict:** PASS | FLAG{axis, note}
   - **source_input_preserved:** (verbatim raw user input — preserved by IE's verify axis ii)
   - **layer_hint:** (IE's perception of which cognitive layer the inquiry targets; the runner commits Layer Commitment below)

   ## Layer Commitment
   [Per existing logic — REQUIRED when the question targets a discipline/protocol/framework artifact; otherwise omit. The runner commits the Layer based on IE's layer_hint + the runner's own judgment.]

   ## Synthesis Trigger
   [Per existing logic — REQUIRED when consolidating ≥2 priors; otherwise omit.]
   ```

   **What's gone (migrated INTO /inquiry-elaboration):** the previous Question (5 meta-aspects), Goal, Source Input, Scope Check, Step 3.5 transcription-audit, Step 3.6 reference-authority-audit. These are no longer the runner's responsibility; the runner copies IE's output and adds only the runner-meta sections (Layer Commitment + Synthesis Trigger).

   **Note on Source Input:** previously the runner preserved the raw user input directly in `_branch.md`. Now IE preserves it inside its user-faithfulness verify-axis and re-surfaces it as `source_input_preserved` in `## IE Verdicts`. The raw content is still present in `_branch.md`; the responsibility-for-preservation moved.
```

#### DE1.c — Step 3.5 transcription-audit fail-safe (REMOVED entirely)

```markdown
3.5. ~~Transcription-audit fail-safe~~ — REMOVED. Migrated INTO /inquiry-elaboration as the verify-phase's user-faithfulness axis (axis ii). The runner no longer runs this audit; IE does.
```

(Or simpler: delete step 3.5 entirely from the runner spec; the migration is complete.)

### DE2 — MVLw runtime behavior (new sections in EXECUTE PIPELINE)

```markdown
### EXECUTE PIPELINE (revised)

**For each inquiry, the runner's pipeline is:**

**Step 5 — Fidelity gate** (after Step 0 returns IE's outputs, before step 3 encode):

Apply the **halt-with-one-bounce** gate on `fidelity_verdict`:

```
if fidelity_verdict == PASS:
    proceed to step 6 (reference-authority pre-flight)
elif fidelity_verdict == FLAG and bounce_count == 0:
    re-invoke /inquiry-elaboration with the flagged_gap surfaced as additional context
    increment bounce_count to 1
    re-apply this gate on the new fidelity_verdict
elif fidelity_verdict == FLAG and bounce_count >= 1:
    HALT before loop
    surface `## Elaborated Inquiry` + `## IE Verdicts` to user
    await user override or termination
```

Rationale (asymmetric-failure stance): a misframing that reaches the loop costs a full pipeline pass; over-careful framing costs nothing structural. Bias toward halt; one cheap bounce is the second-chance.

**User override path:** the user may explicitly approve proceeding despite FLAG (e.g., "yes, I know the framing is rough — run it anyway"). This is the escape hatch; not the default.

**Step 6 — Reference-authority pre-flight** (after fidelity gate passes, before step 3 encode):

Invoke `cognitive_harness/protocols/reference_authority_check.md` on IE's `elaborated_inquiry`. If the protocol returns `FLAG{reference, sub-check, reason}`, **HALT before loop** and surface to user. The reference-authority FLAG is a **separate halt-tier** from IE's fidelity FLAG — it does NOT count toward IE's one-bounce budget. Rationale: framing-fidelity (an IE-internal property) and reference-currency (an ecosystem property) are different failure surfaces; conflating their budgets would let an ecosystem issue burn IE's comprehension second-chance.

**Step 7 — Encode the framing** (step 3 of the original numbering — write `_branch.md`):

Apply the new step 3 template (DE1.b) — encode IE's `elaborated_inquiry` into `## Elaborated Inquiry` + `## IE Verdicts` sections; add runner-meta (`## Layer Commitment` + `## Synthesis Trigger` + `## Relationships` + `## History`).

**Step 8 — Spawn (spawn_set wrapper)** (after step 7 encode):

Consume `request_structure_verdict` and dispatch:

```
match request_structure_verdict:
    case single:
        # no spawn; the current inquiry IS the inquiry
        proceed to step 9 (write _state.md + begin discipline pipeline)
    case parallel-set{children}:
        # spawn N siblings via branch_inquiry
        branch_set_id = <generate>
        for each child in children:
            call branch_inquiry with:
                branch_from: <current inquiry_path>  (or parent if this IS a sub-spawn)
                branch_mode: set-member
                branch_set_id: <branch_set_id>
                question: <child's framing from IE's per-child output>
        # the original inquiry's _branch.md records that the spawn happened
        proceed to step 9 (begin pipeline for each child in parallel)
    case sequential-chain[children, order]:
        # spawn the first child immediately; queue the rest
        first_child = children[order[0]]
        call branch_inquiry with: ... (as above) ... + depends-on: null
        for each subsequent child in order[1:]:
            queue branch_inquiry call with depends-on: <previous-child-inquiry_path>
        # detailed sequential-chain mechanics are a structural-layer detail
        # (deferred per sensemaking D4 frontier); ship `single` + `parallel-set` first
```

**Step 9 — Begin the discipline pipeline** (Su → S → D → I → C per existing MVLw flow). Unchanged from current MVLw.
```

### DE3 — `cognitive_harness/protocols/reference_authority_check.md` content (new file)

```markdown
> **Loading note.** This protocol is loaded by a runner after /inquiry-elaboration emits the elaborated_inquiry and before the loop runs. Read in full before invocation; the trigger detection rules + sub-checks + integration semantics are referenced by the procedure.

---

# REFERENCE_AUTHORITY_CHECK — The Cited-Reference Currency Pre-flight Protocol

REFERENCE_AUTHORITY_CHECK is the operational protocol that audits cited references (spec paths, prior-inquiry citations, named protocols, overloaded terms) in an inquiry's framing before the loop runs. It exists because cited references can drift from the project's current state — deprecated specs cited as authoritative, subject-misaligned references treated as relevant, overloaded terms used unqualifiedly — and that drift, if it reaches the loop, contaminates the loop's reasoning.

This protocol is invoked **after** an inquiry's framing has been articulated (e.g., by /inquiry-elaboration's elaborated_inquiry) and **before** the loop's first discipline runs. It is a pre-flight check, not a loop step.

## When to use

Invoke when an inquiry's framing contains cited references to other artifacts in the project (spec files, prior inquiries, named protocols, overloaded terms). For frameworks where /inquiry-elaboration produces the framing, invoke immediately after the fidelity gate passes.

Do not use for: ordinary loop steps; inquiries whose framing cites no external references (no-op cases — protocol returns PASS trivially).

## Step 1 — Input contract

Input: the inquiry's elaborated framing (any structured artifact that may contain cited references — typically the elaborated_inquiry output of /inquiry-elaboration). Scan for:

- **Spec file paths** (e.g., `cognitive_harness/<X>/references/<X>.md`)
- **Prior inquiry citations** (e.g., `devdocs/inquiries/<inquiry-id>/<file>.md`)
- **Named protocols** (e.g., `cognitive_harness/protocols/<protocol>.md`)
- **Overloaded terms** used WITHOUT explicit subject qualification — "canonical", "primary", "the protocol", "the discipline", "the spec", "the framework"

## Step 2 — Per-reference sub-checks

For each cited reference, perform three sub-checks:

| Sub-check | Asks | Output |
|---|---|---|
| **(a) Status** | Is the cited reference current for the project's state? | `active` / `in-development` / `deprecated` / `archived` / `unknown-to-verify` |
| **(b) Subject-alignment** | Does the cited reference's subject align with this inquiry's subject? | `subject-aligned` / `subject-misaligned` |
| **(c) Disambiguation** | When the cited term is overloaded, is the intended referent disambiguated? | `disambiguated` / `ambiguous` |

## Step 3 — Output

Emit one of:

- **PASS** — all references resolve to `active` + `subject-aligned` + `disambiguated`.
- **FLAG** — one or more references fail one or more sub-checks. The FLAG output contains:
  ```
  reference: <cited path or term>
  sub-check: status | subject-alignment | disambiguation
  reason: <one-line specific reason>
  ```
  Multiple FLAGs may be emitted (one per failing reference).

## Step 4 — Integration with the surrounding orchestration layer

A `FLAG` halts before the loop runs. The surrounding orchestration layer surfaces the FLAG(s) to the user; the framing's cited references may need to be corrected, the framing rewritten, or the inquiry abandoned. **The reference-authority FLAG is a separate halt-tier from any framing-fidelity FLAG produced upstream** — a reference-authority FLAG does NOT count toward any bounce-budget held by the framing-producer. Rationale: framing-fidelity (a comprehension property) and reference-currency (an ecosystem property) are distinct failure surfaces; conflating their gates would let an ecosystem issue burn a comprehension second-chance.

## Step 5 — Trigger-then-verify pattern

This protocol follows the trigger-then-verify pattern: the **structural trigger** (Step 1) fires on pattern-detected reference shapes — deterministic, independent of subject matter. The **semantic verification** (Step 2) at trigger-fire performs the 3 sub-checks per reference. The split is intentional: the trigger doesn't depend on knowing which references are right or wrong; the verification forces the agent to articulate the answer explicitly per reference.

## Self-containment note

This protocol legitimately names the kinds of references it operates on (spec paths, prior inquiries, protocol names) because operating on them IS its job — analogous to how CONCLUDE legitimately names the disciplines it compiles. The protocol's existence does not require the framing-producer (e.g., /inquiry-elaboration) to know about this protocol; the surrounding orchestration layer invokes both.

## Failure modes

- **Missing-cited-reference-not-flagged** — the protocol scanned but missed a cited reference (the trigger detection was incomplete). Corrective: widen the Step-1 trigger patterns.
- **Spurious-flag** — the protocol flagged a reference that was actually current/aligned/disambiguated. Corrective: tighten the sub-check criteria.
- **Bounce-budget-leak** — the runner accidentally counts the reference-authority FLAG toward IE's framing-fidelity bounce budget. Corrective: the runner spec must enforce the separate-tier semantics in Step 4.
```

### DE4 — `cognitive_harness/protocols/inquiry_elaboration_adoption.md` content (new file)

```markdown
> **Loading note.** This protocol is loaded by a runner-spec author who wants their runner to adopt /inquiry-elaboration. Read in full before editing the runner's SKILL.md; the three interfaces + the runtime ordering + the migration pattern + the MVLw worked example are referenced by the adoption process.

---

# INQUIRY_ELABORATION_ADOPTION — How a Runner Adopts /inquiry-elaboration

This protocol specifies how any runner adopts /inquiry-elaboration as a pre-pipeline stage that elaborates the user's raw request into a multilayered, fidelity-verified framing before the runner's own discipline loop begins.

The protocol exists because IE itself is self-contained — its spec names no runner — and the runner-side wiring is what makes IE invocable. Adoption is the runner-side commitment to instantiate the three interfaces below.

## §1 — Input Interface

The runner supplies three inputs to IE per the read-policy:

| Input | Read-Policy | On Absence |
|---|---|---|
| `original_query` | **MANDATORY** | HALT with `MissingRequiredInput` |
| `project_goal` | **MANDATORY-WHEN-AVAILABLE** | FLAG and proceed; IE emits `(anchor not supplied)` for the long-term-anchor rephrasing |
| `recent_context` | **SHOULD** | FLAG and proceed; IE emits `(anchor not supplied)` for the short-term-anchor rephrasing |

**Where each input comes from is the runner's responsibility.** This protocol does not specify the supplier — different runners may have different sources. For example: `original_query` is typically the user's raw request received by the runner; `project_goal` may come from a project-level goal file (where the file lives is runner-specific); `recent_context` may come from a session-state file, a recent-findings index, or the runner's own short-term memory.

## §2 — Output Interface

The runner receives three outputs from IE:

| Output | Shape | Runner's Responsibility |
|---|---|---|
| `elaborated_inquiry` | Substantive framing (5 meta-aspects + Goal + Scope + rephrasings + optional `requests:[]`) | Encode into the runner's framing artifact (e.g., MVLw's `_branch.md`) |
| `request_structure_verdict` | `{single | parallel-set{children} | sequential-chain[children, order]}` | Drive spawn behavior (see §3) |
| `fidelity_verdict` | `{PASS | FLAG{axis, note}}` | Drive the gate (see §4 ordering) |

**Encoding the framing is the runner's responsibility.** Different runners use different framing artifacts; the protocol doesn't prescribe the artifact's shape, only that the encoding must preserve IE's elaborated_inquiry faithfully (no lossy compression).

## §3 — Spawn Interface

The runner consumes `request_structure_verdict` and dispatches via `cognitive_harness/protocols/branch_inquiry.md`:

- `single` → no spawn; the runner continues with the current inquiry (encodes the framing in-place).
- `parallel-set{children}` → call `branch_inquiry` per child with `branch_mode: set-member` + shared `branch_set_id` (generated by the runner).
- `sequential-chain[children, order]` → call `branch_inquiry` for the first child immediately; subsequent children queued with `depends-on` pointers. (The exact sequential-chain machinery is a structural-layer detail of the runner; ship `single` + `parallel-set` first.)

The runner is the spawn actor. IE perceives the request-structure and emits the verdict; it does not itself spawn — the perception/action split.

## §4 — Runtime Ordering (the gate-with-one-bounce + reference-authority pre-flight)

After IE returns its outputs, the runner applies gates in this order, before any framing artifact is encoded or any spawn happens:

1. **Fidelity gate (halt-with-one-bounce):**
   - `fidelity_verdict == PASS` → proceed to gate 2
   - `fidelity_verdict == FLAG && bounce_count == 0` → re-invoke IE once with the flagged-gap surfaced; increment bounce_count; re-apply gate
   - `fidelity_verdict == FLAG && bounce_count >= 1` → **halt-before-loop**; surface the framing + FLAGs to user
2. **Reference-authority pre-flight** (`cognitive_harness/protocols/reference_authority_check.md`) on IE's elaborated_inquiry:
   - `PASS` → proceed to §3 spawn + framing-encode
   - `FLAG` → **halt-before-loop** (separate halt-tier; does NOT count toward IE's bounce budget)

User override: the user may explicitly approve proceeding despite either FLAG. This is the escape hatch; not the default.

## §5 — Migration Pattern (what the runner's framing template loses)

When a runner adopts IE, its existing framing template (the thing the runner used to write directly from raw user input) **thins**. Specifically:

**Migrates INTO IE** (gone from the runner's framing template):
- The question's structural shaping (e.g., the 5 meta-aspects)
- The goal articulation
- The source-input preservation (IE preserves it inside its faithfulness verify-axis)
- The scope check
- Any transcription-audit fail-safe
- Any reference-authority audit (moves to the separate pre-flight protocol per §4)

**STAYS runner-side** (in the framing artifact):
- Layer Commitment (a runner-meta routing decision)
- Synthesis Trigger (drives CONCLUDE)
- Relationships (orchestration state)
- History (state-tracking)

**NEW in the framing artifact** (encoded from IE's output):
- An `## Elaborated Inquiry` section containing IE's framing-content
- An `## IE Verdicts` section containing the two verdicts (for traceability)

## §6 — Worked Example: MVLw Instantiation

For MVLw specifically:
- **Input interface:** `original_query` = the user's raw `/MVLw <args>` payload; `project_goal` = TBD source (runner-specific; documented when MVLw's process layer is authored); `recent_context` = TBD source (same).
- **Output interface:** `elaborated_inquiry` encoded into `_branch.md`'s new `## Elaborated Inquiry` section; verdicts encoded into the new `## IE Verdicts` section.
- **Spawn interface:** `parallel-set` → spawn N siblings via `branch_inquiry` with shared `branch_set_id`; each gets its own `_branch.md` populated from IE's per-child framing.
- **Runtime ordering:** Step 0 (IE invoke) → Step 5 fidelity gate → Step 6 reference-authority pre-flight → Step 7 encode → Step 8 spawn_set wrapper → Step 9 begin Su→S→D→I→C loop.
- **Migration:** the MVLw step 3 template loses the heavy comprehension+fidelity content (Question 5 meta-aspects, Goal, Source Input, Scope Check, step 3.5 audit, step 3.6 audit); gains `## Elaborated Inquiry` + `## IE Verdicts`; keeps Layer Commitment + Synthesis Trigger + Relationships + History.

## §7 — Adoption Note for Other Runners

For any runner adopting IE (e.g., classic MVL, or a future runner):

1. Edit your runner's SKILL.md to add a Step 0 that invokes /inquiry-elaboration per the Input Interface (§1).
2. Apply the gate-with-one-bounce + reference-authority pre-flight in the order specified in §4, between Step 0 and the runner's existing framing-encode step.
3. Thin your runner's framing template per the Migration Pattern (§5): remove the migrated sections; add `## Elaborated Inquiry` + `## IE Verdicts`.
4. Apply the spawn_set wrapper (§3) at the point where your runner currently writes the framing artifact, dispatching by IE's request_structure_verdict.

The changes are mechanical given §1-§5; the specifics of each runner's existing pipeline determine where the new code lives.

## §8 — What's NOT in the Contract

To prevent runners from adopting too much:

- **IE's spec does not name the runner.** The wiring is one-way: this protocol (and the runner's SKILL.md) names IE; IE's spec doesn't name the runner.
- **The runner does not modify IE's spec to wire it in.** All wiring lives in runner-spec + this protocol. If a runner discovers it needs IE-spec changes to wire IE in, the design has drifted — re-read this protocol.
- **Reference-authority is NOT IE's concern.** IE does not check cited-reference currency; that's the pre-flight protocol's job per `cognitive_harness/protocols/reference_authority_check.md`.
- **Layer-Commitment and Synthesis-Trigger are NOT IE's concern.** They stay runner-side. IE may emit a `layer_hint` as perception; the runner commits the Layer-Commitment.

## §9 — Failure Modes

- **Runner-wired-into-IE-spec.** The adopting runner edits IE's spec to "make IE know about" the runner. Corrective: revert; all wiring lives in runner-spec + this protocol.
- **Gate-tier-conflation.** The runner counts the reference-authority FLAG toward IE's one-bounce budget. Corrective: re-read §4; separate halt-tier.
- **Framing-template-not-thinned.** The runner keeps the old heavy framing template AND adds the new `## Elaborated Inquiry` section. Result: duplicated comprehension+fidelity content. Corrective: complete the migration per §5; remove the duplicates.
- **No bounce-budget.** The runner halts on the first FLAG without offering the bounce. Corrective: implement the bounce per §4; one cheap second-chance before halt.
```

---

## Test (5-test survival per piece)

| Piece | Novelty | Scrutiny-survival | Fertility | Actionability | Mechanism-independence | Disposition |
|---|---|---|---|---|---|---|
| D0 contract anchor | low (synthesis of settled commitments) | survives | yes — cited by 4 pieces | yes | Combination + Domain-Transfer converge | **ACTIONABLE** |
| DE1 template edits | medium (concrete diff against current MVLw) | survives K8 self-containment check (no IE-spec touched) | yes — author can transcribe | yes | Inversion (K8) + Lens-shift (spec-author) converge | **ACTIONABLE** |
| DE2 runtime behavior | medium (the gate + spawn algorithms named precisely) | survives Inversions (halt-by-default; separate-tier) | yes — directly authorable | yes | Inversion + Domain-Transfer (gateway middleware) converge | **ACTIONABLE** |
| DE3 reference_authority_check protocol | medium (re-homes the 04-00 audit's content into protocol form) | survives — separate-tier confirmed | yes | yes | Inversion (separate-tier) + Domain-Transfer (validation middleware) converge | **ACTIONABLE** |
| DE4 adoption protocol | higher (the cross-runner contract is new) | survives — the §8 "what's NOT in the contract" + §9 failure modes add adversarial robustness | yes — the §7 adoption note generalizes | yes | Constraint-ADD (§8) + Lens-shift (future-runner-author) + Extrapolation (multi-head future) converge | **ACTIONABLE** |

## Assembly Check — the IE process layer (emergent whole)

The five pieces compose into a coherent process-layer design that:
- preserves K8 (ALL edits runner-side; IE's spec untouched);
- honors the perception/action split (22-30) at every interface;
- enforces asymmetric-failure stance (halt-by-default with one-bounce second-chance);
- generalizes cross-runner via the adoption protocol;
- handles reference-authority's re-home cleanly (separate halt-tier, post-IE pre-loop);
- thins the runner's framing template per the concrete migration table.

The unifying image (Domain Transfer): IE is the request-gateway middleware in front of the reasoning service. Step 0 = middleware ingress; the gate + reference-authority pre-flight = middleware validation; the spawn_set wrapper = routing; the encoded `_branch.md` = the normalized request handed to the service; the discipline loop = the service. Every piece has a clear analog.

The assembly **SURVIVES** and is ready for Critique.

## Dispositions
- **ACTIONABLE NOW:** D0 + DE1 + DE2 + DE3 + DE4 — all five pieces have concrete authorable content; a spec author can transcribe them into the respective files.
- **DEFERRED → structural-layer detail (D4 from sensemaking):** sequential-chain spawn mechanics. Ship `single` + `parallel-set` first.
- **RE-TEST TRIGGER for Critique:**
  - (a) Does any piece contain a sentence that would have to be removed if it were transcribed into IE's spec instead of a runner-spec? (the K8 invariant check)
  - (b) Does the gate-tier separation (reference-authority FLAG ≠ IE-fidelity FLAG bounce budget) survive prosecution?
  - (c) Does DE4 §6 (MVLw worked example) accidentally bake-in MVLw specifics that would block another runner from adopting?
  - (d) Does the spawn_set wrapper's `single` case actually short-circuit cleanly (no orphan branch_set_id, no spurious spawn)?

## Frontier
- The IE-spec field names referenced in D0 (and used in DE1+DE4) must match the names that get written in IE's actual spec (Route 1 of the IE-trajectory route-map). If Route 1's authoring introduces name drift, D0 needs an update; the dependency is one-way (Route 1 authors first; this design transcribes second OR they're authored together with shared field-name source-of-truth).
- The `layer_hint` field IE emits is mentioned in DE1.b's `## IE Verdicts` section spec — confirm with Route 1's authoring that IE actually produces this hint (it was the 09-54 R5 refinement). If not, drop the field from `## IE Verdicts`.
