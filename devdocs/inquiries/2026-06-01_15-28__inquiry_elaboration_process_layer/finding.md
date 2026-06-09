---
status: active
model: claude-opus-4-8
effort: fast-mode
---

# Finding: Inquiry Elaboration — Process Layer (How IE Wires Into MVLw, and Into Any Other Runner That Adopts It)

## Question

From `_branch.md`:

**Question.** Given that **Inquiry Elaboration** (IE — the new discipline being designed across this session's arc; its job is to take a user's raw inquiry plus available context anchors and produce a multilayered, fidelity-verified framing the runner can act on) has settled meaning (it is a discipline; its operation is sensemaking's Comprehending, generalized; perception-vs-action is split) and settled structure (output-organized self-contained spec; three temporal anchors; intrinsic NOT-list; substantive output + thin verdict header), what is the **process-layer design** that wires IE into **MVLw** (the extended cognitive-loop runner that ships with this project, at `cognitive_harness/MVLw/SKILL.md`; the variant that uses Surfacing as its upstream discipline)? Specifically: the runtime call-site (where IE runs in MVLw's pipeline, plus a cross-runner abstract call-site contract); the input-supply mechanism for each of the three inputs (`project_goal`, `original_query`, `recent_context`); the spawn mechanics that consume IE's `request-structure verdict`; the runtime gates triggered by IE's `fidelity-verdict`; the exact `_branch.md` template rewrite as comprehension-and-fidelity work migrates into IE; the settled home for the dropped reference-authority audit; and the cross-runner generalization so any runner adopting IE follows the same abstract contract.

**Goal.** Concrete enough that a spec author can edit `cognitive_harness/MVLw/SKILL.md` and write the two new protocol files without re-deciding the design; consistent with IE's settled meaning (perception-vs-action split; object-vs-mode rule) and settled structure (the substantive output schema; the intrinsic NOT-list); preservation of IE's self-containment (the process layer wires IE *from outside*; IE's own spec does not gain runner-knowledge); complete across all seven observation targets; honest naming where the design has genuine alternatives.

**What would fail:** re-litigating IE's meaning or structure (out of scope); violating IE's self-containment by pulling runner-specifics into IE's spec; coupling IE to MVLw specifically (so any other adopting runner would have to re-design); leaving reference-authority's new home unnamed; designing a gate that bypasses the asymmetric-failure stance (a passed misframing is the costly failure); over-fitting today's MVLw without naming the cross-runner abstraction.

## Finding Summary

- **The design is small and surgical: two runner-spec edits + two new small protocol files. NOTHING in `cognitive_harness/inquiry-elaboration/` is touched by this process design.** That last clause is the load-bearing invariant — the wiring is one-way (runner-spec → invokes IE; IE-spec doesn't name the runner). It preserves the entire arc's earlier correction work (the 09-54 + 11-46 self-containment lesson).

- **The call-site is a new pre-pipeline stage** in MVLw: a "Step 0 — Elaborate the inquiry" inserted *before* the current step 3 (the `_branch.md` write). IE runs once per ROOT-NEW inquiry creation; after it returns (and after the gates pass), step 3 becomes "encode IE's output into `_branch.md`" rather than "write `_branch.md` from raw user input."

- **Input supply uses routeman's existing Read-Policy vocabulary** (routeman is this project's input-policy discipline at `cognitive_harness/routeman/`; its MANDATORY / MANDATORY-WHEN-AVAILABLE / SHOULD / MAY tier-system already handles the same problem). Per IE input: `original_query` is **MANDATORY** (absent → HALT); `project_goal` is **MANDATORY-WHEN-AVAILABLE** (absent → FLAG-and-proceed); `recent_context` is **SHOULD** (absent → FLAG-and-proceed). Missing anchors degrade gracefully — IE emits `(anchor not supplied)` in the affected rephrasing rather than failing.

- **Spawn mechanics are a runner-side wrapper, NOT a new primitive.** The existing `cognitive_harness/protocols/branch_inquiry.md` already supports `branch_mode: set-member` + `branch_set_id` — the per-child machinery is built. The new behavior is a runner-side `spawn_set` wrapper (one paragraph in MVLw's spec) that batches `branch_inquiry` calls based on IE's request-structure verdict: `single` → no spawn; `parallel-set{children}` → N siblings sharing a `branch_set_id`; `sequential-chain[children, order]` → first child immediately + the rest queued with `depends-on` pointers (the detailed sequential-chain mechanics are deferred — see DEFERRED below — and the simple two cases ship first).

- **The runtime gate is halt-with-one-bounce** on IE's fidelity-verdict. PASS proceeds; FLAG-on-first-try re-invokes IE once with the flagged-gap surfaced as additional context; FLAG-after-bounce halts before the loop runs and surfaces the framing + FLAGs to the user. This matches the **asymmetric-failure stance** (a passed misframing reaching the loop costs a full pipeline pass; over-careful framing costs nothing structural; bias toward halt; one cheap bounce is the second-chance, not a loop-of-bounces). The user can explicitly override the halt as an escape hatch.

- **The `_branch.md` template thins per a concrete migration table** — 4 elements stay runner-side; 5 elements migrate INTO IE; 1 element moves to its own separate runner-side protocol; 2 new sections appear (`## Elaborated Inquiry` and `## IE Verdicts`).

- **Reference-authority's new home is its own runner-side pre-flight protocol** at `cognitive_harness/protocols/reference_authority_check.md` (NEW file). It is invoked AFTER IE emits the elaborated_inquiry and BEFORE the loop runs. Its FLAG is a **separate halt-tier** from IE's fidelity FLAG — it does NOT count toward IE's one-bounce budget. (Rationale: framing-fidelity is a comprehension property; reference-currency is an ecosystem property; conflating their gates would let an ecosystem issue burn IE's comprehension second-chance.)

- **The cross-runner generalization is its own adoption-contract protocol** at `cognitive_harness/protocols/inquiry_elaboration_adoption.md` (NEW file). It captures three runner-agnostic interfaces (Input / Output / Spawn), the runtime ordering, the migration pattern, and includes a worked MVLw example. Any runner adopting IE references this protocol and instantiates each interface concretely.

## Finding

Inquiry Elaboration was built up across roughly the last day of work, in three distinct layers — first its *meaning* (it's a discipline; it perceives the request and its anchors but the runner is what spawns and encodes); then its *structure* (the substantive output schema, the intrinsic NOT-list, the three temporal anchors); now its *process* — the runtime wiring that connects the settled discipline to the runners that actually invoke it. This finding settles the last of the three layers.

The reason the process layer needed its own design pass is non-obvious: in a less careful project, "where does IE run?" would just be a one-sentence answer ("Step 0 before the loop"). But IE's earlier design corrections taught a load-bearing lesson — that IE must remain **self-contained**: its spec must not gain knowledge of the runner that invokes it, must not name its neighboring disciplines, must not encode any orchestration logic. That lesson cuts straight across "process design" — because process design IS orchestration, and orchestration knowledge has to live somewhere. The answer this finding commits to: it lives in the runner's spec (legitimately — a runner's job is orchestration) and in two new runner-side protocols (legitimately — a protocol that operates on IE's output legitimately names IE, the same way CONCLUDE legitimately names the disciplines it compiles). It does NOT live in IE.

That commitment shapes everything else.

### 1. The IE runtime contract (the shared anchor every other piece cites)

Before any specific edit, there's a contract — a one-paragraph statement of what IE consumes and what it produces. Every downstream piece references this contract rather than restating it, which prevents drift between the runner-spec edits, the new protocols, and IE's eventual spec.

**Inquiry Elaboration's runtime contract.** IE is invoked as a discipline that receives three inputs and emits three outputs.

- **Inputs:** `original_query` (the user's raw request); `project_goal` (the long-term anchor); `recent_context` (the short-term anchor).
- **Outputs:**
  - (a) the **elaborated_inquiry** — a substantive framing containing the five meta-aspects (subject / action / level / observation-targets / deliverable-shape) + goal + scope + the rephrasings (simple / project-goal-grounded / recent-context-grounded / scope-highlighted / importance-highlighted; plus scope_small and scope_big as scope versions) + an optional `requests:[]` list when the original_query bundles two or more distinct asks;
  - (b) the **request-structure verdict** — one of `{single | parallel-set{children} | sequential-chain[children, order]}`;
  - (c) the **fidelity verdict** — `{PASS | FLAG{axis, note}}` where `axis` is one of internal-consistency / user-faithfulness / external-validity.
- **Consumption (runner-side):** the runner consumes (a) by encoding it into its framing artifact; (b) by deciding spawn behavior; (c) by deciding whether to halt or proceed. **IE itself never spawns, encodes, or acts on its own verdicts** — those are the runner's responsibilities. This is the perception-versus-action split settled in `devdocs/inquiries/2026-05-31_22-30__inquiry_elaboration_discipline_or_not/finding.md`.

**Wiring direction (the load-bearing invariant).** This contract is referenced by runner-specs and runner-side protocols only. **IE's own spec does NOT reference this contract.** The wiring is one-way: runner-spec → invokes IE; IE-spec doesn't name the runner. (This is critique's R-1, made explicit at the anchor where downstream pieces read it.)

### 2. The call-site — a new "Step 0" in MVLw before the existing step 3

In MVLw's current spec (the file at `cognitive_harness/MVLw/SKILL.md`, which is the project's surfacing-variant extended loop runner — Su → S → D → I → C), step 3 is where the runner writes `_branch.md` directly from the user's raw request, with all the comprehension and fidelity work (the five meta-aspects of the question, the Goal, the Source Input, the Scope Check, the Step 3.5 transcription-audit, the Step 3.6 reference-authority-audit) inline in the runner. After the process-layer change, that work moves: most of it INTO IE, one piece into a separate runner-side protocol. The runner gains a new pre-pipeline stage that invokes IE; step 3 becomes a thin "encode IE's output into `_branch.md`" step.

The exact new step inserted before existing step 3:

```markdown
3.0. **Step 0 — Elaborate the inquiry (invoke /inquiry-elaboration).**

   Before writing `_branch.md`, the inquiry is elaborated by /inquiry-elaboration
   into a multilayered, fidelity-verified framing. This stage runs once per ROOT
   NEW inquiry creation, before step 3.

   **Input supply (read-policy per input):**
   - `original_query` — **MANDATORY.** The user's raw request as received.
     Absent → HALT with `MissingRequiredInput`.
   - `project_goal` — **MANDATORY-WHEN-AVAILABLE.** If the project supplies a
     goal source, read it; if absent, FLAG `project_goal_absent` and proceed
     (the long-term anchor's rephrasing in IE's output will carry the
     `(anchor not supplied)` marker).
   - `recent_context` — **SHOULD.** Supply when available; on absence or
     read-failure, FLAG `recent_context_absent` and proceed-without (same
     graceful-degradation marker downstream).

   **Invocation:**
   ```
   Skill(skill: "inquiry-elaboration", args: {
     original_query: <raw user input>,
     project_goal: <project-goal content or null>,
     recent_context: <recent-context content or null>
   })
   ```
   If the Skill tool fails → fall back to `Read` on
   `cognitive_harness/inquiry-elaboration/SKILL.md`, then execute. If Read also
   fails → HALT with `IECouldNotBeLoaded`.

   **Outputs consumed** (per the IE runtime contract):
   - `elaborated_inquiry` — encoded into `_branch.md` in step 3 below
   - `request_structure_verdict` — drives spawn behavior (see step 8 — spawn_set wrapper)
   - `fidelity_verdict` — drives the gate behavior (see step 5 — fidelity gate)

   **Apply the fidelity gate immediately** per step 5 below. **Apply the
   reference-authority pre-flight** per
   `cognitive_harness/protocols/reference_authority_check.md`. Only proceed
   to step 3 (the `_branch.md` write) once both gates pass (or after user
   override).
```

### 3. The runtime gates — halt-with-one-bounce for fidelity; separate halt-tier for reference-authority

Two distinct gates, in order, between Step 0 and the framing-encode:

**Gate A — Fidelity gate (halt-with-one-bounce):**

```
if fidelity_verdict == PASS:
    proceed to gate B
elif fidelity_verdict == FLAG and bounce_count == 0:
    re-invoke /inquiry-elaboration with the flagged_gap surfaced
    increment bounce_count to 1
    re-apply this gate on the new fidelity_verdict
elif fidelity_verdict == FLAG and bounce_count >= 1:
    HALT before loop
    surface `## Elaborated Inquiry` + `## IE Verdicts` to user
    await user override or termination
```

The bias is toward halt: a misframing that reaches the loop costs a full pipeline pass; over-careful framing costs nothing structural. The one cheap bounce is the second-chance, not a loop-of-bounces. The user may explicitly approve proceeding despite FLAG ("yes, run it anyway") — this is the escape hatch, not the default.

**Gate B — Reference-authority pre-flight:**

After fidelity passes, the runner invokes `cognitive_harness/protocols/reference_authority_check.md` (the new protocol described in §6 below) on the elaborated_inquiry. If that protocol returns `FLAG`, the runner **halts before the loop**. The reference-authority FLAG is a **separate halt-tier** from IE's fidelity FLAG — it does NOT count toward IE's one-bounce budget. The reason: framing-fidelity is a comprehension property (something IE can re-comprehend); reference-currency is an ecosystem property (a deprecated cited spec doesn't get fixed by IE re-running). Conflating their budgets would let an ecosystem issue burn IE's comprehension second-chance.

### 4. The spawn mechanics — a runner-side wrapper, not a new primitive

The existing `cognitive_harness/protocols/branch_inquiry.md` already supports `branch_mode: set-member` + `branch_set_id` — the machinery for spawning sibling inquiries within one set is built. What was missing was the runner-side LOGIC that batches `branch_inquiry` calls based on IE's request-structure verdict. The design adds that logic as a wrapper inside MVLw's EXECUTE PIPELINE section (and in any other adopting runner's equivalent), NOT as a separate new primitive file.

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
                branch_from: <current inquiry_path>
                branch_mode: set-member
                branch_set_id: <branch_set_id>
                question: <child's framing from IE's per-child output>
        proceed to step 9 (begin pipeline for each child in parallel)
    case sequential-chain[children, order]:
        # spawn the first child immediately; queue the rest
        first_child = children[order[0]]
        call branch_inquiry with: ... + depends-on: null
        for each subsequent child in order[1:]:
            queue branch_inquiry call with depends-on: <previous-child-inquiry_path>
        # detailed sequential-chain mechanics are deferred (see DEFERRED below);
        # ship `single` + `parallel-set` first
```

The runner is the spawn actor. IE *perceives* the request-structure and *emits the verdict*; the runner is what *calls* `branch_inquiry`. This honors the perception-versus-action split.

### 5. The `_branch.md` rewrite — concrete migration table

The current MVLw step 3 template is heavy: Question (with five meta-aspects), Goal, Source Input, Scope Check, Step 3.5 transcription-audit fail-safe, Step 3.6 reference-authority-audit, plus the runner-meta sections (Layer Commitment, Synthesis Trigger, Relationships, History). The post-IE-wiring template thins substantially.

The exact migration:

| `_branch.md` element | Old (current MVLw step 3) | New (post-IE-wiring) |
|---|---|---|
| Question (5 meta-aspects) | Runner writes directly | IE produces; runner copies into `## Elaborated Inquiry` |
| Goal | Runner writes directly | IE produces; runner copies into `## Elaborated Inquiry` |
| Source Input | Runner preserves raw | IE preserves inside its faithfulness verify-axis; runner does NOT duplicate |
| Scope Check | Runner writes | IE's verify axis (i); recorded in `## IE Verdicts` |
| Step 3.5 Transcription-audit | Runner runs | IE's verify axis (ii) |
| Step 3.6 Reference-authority-audit | Runner runs | **MOVED OUT** — new runner-side pre-flight protocol (see §6) |
| Layer Commitment | Runner-meta | **STAYS** runner-side |
| Synthesis Trigger | Runner-meta | **STAYS** runner-side |
| Relationships | Runner-orchestration | **STAYS** runner-side |
| History | Runner state-tracking | **STAYS** runner-side |
| `## Elaborated Inquiry` *(NEW)* | — | IE's framing-content |
| `## IE Verdicts` *(NEW)* | — | IE's two verdicts (for traceability) |

The new thinned step 3 template (showing both new sections in their authored form, and the runner-meta that stays):

```markdown
3. For ROOT NEW only, write `[inquiry_path]/_branch.md` from IE's output (per step 0 above):

   ```markdown
   # Branch: [name from elaborated_inquiry]

   ## Elaborated Inquiry
   [Encoded from IE's elaborated_inquiry output.]

   ### Inputs (echo)
   - **project_goal:** [echo of supplied content, or `(anchor not supplied)`]
   - **original_query:** [verbatim echo of the user's raw input]
   - **recent_context:** [echo of supplied content, or `(anchor not supplied)`]

   ### Question
   [Question with all five meta-aspects (subject / action / level /
   observation-targets / deliverable-shape) per IE's output]

   ### Goal
   [Goal per IE's output]

   ### Scope
   [Scope with scope_small + scope_big per IE's output]

   ### Rephrasings
   - **rephrase_simple:** [plain restatement]
   - **rephrase_in_project_goal:** [restated in light of project goal — or `(anchor not supplied)`]
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
   - **layer_hint:** (IE's perception of which cognitive layer the inquiry targets;
     the runner commits Layer Commitment below)

   ## Layer Commitment
   [Per existing logic — REQUIRED when the question targets a discipline / protocol /
   framework artifact; otherwise omit. The runner commits the Layer based on IE's
   layer_hint + the runner's own judgment.]

   ## Synthesis Trigger
   [Per existing logic — REQUIRED when consolidating ≥2 priors; otherwise omit.]

   ## Relationships
   [Per existing logic.]

   ## History
   - [date]: Created. Question: [one-line summary from elaborated_inquiry]
   ```

   **What's gone — split by destination:**
   - **Migrated INTO /inquiry-elaboration (now done inside IE):** Question (five meta-aspects), Goal, Source Input, Scope Check, Step 3.5 transcription-audit.
   - **Moved to a separate runner-side protocol:** Step 3.6 reference-authority-audit → `cognitive_harness/protocols/reference_authority_check.md` (see §6 of this finding).

   **Note on the Inputs (echo) sub-section.** The three input echoes are the canonical preservation of what the runner supplied to IE — `original_query` echoed verbatim, the two anchors echoed (or marked `(anchor not supplied)`). Downstream consumers (the loop disciplines that read `_branch.md` for the framing) read this as the source-of-truth for what the inquiry's inputs were. The `## IE Verdicts` section does NOT separately preserve `original_query` — the echo above is the canonical record; IE's user-faithfulness verify-axis CHECKS faithfulness against this echo rather than separately preserving it. (This avoids the field-duplication the critique caught at R-5.)

   **Step 3.5 (transcription-audit fail-safe) is REMOVED entirely** from the runner spec — migrated into IE as the user-faithfulness verify-axis. The runner no longer runs this audit.
```

### 6. Reference-authority's new home — `cognitive_harness/protocols/reference_authority_check.md`

The 09-54 finding committed to dropping reference-authority from IE (because reference-currency is an ecosystem property, not something IE — which is supposed to be self-contained — can have knowledge about); it deferred the question of where to re-home it. The process layer is the natural place to close that deferral. The chosen home is a **new small runner-side pre-flight protocol** invoked after IE emits the elaborated_inquiry and before the loop runs.

Three placement candidates were considered:

- (a) **Runner-side pre-IE pre-flight** — fails because the runner doesn't yet know what's a "cited reference" before IE comprehends the inquiry;
- (b) **Runner-side post-IE pre-flight** — **chosen**; references are concrete at this point (they appear in IE's elaborated_inquiry) and catching failures here prevents commitment to a broken framing;
- (c) **Absorbed into surfacing** — rejected because it conflates discipline scopes (surfacing's job is enumeration, not currency-checking).

The protocol's full content:

```markdown
> **Loading note.** This protocol is loaded by a runner after /inquiry-elaboration emits the elaborated_inquiry and before the loop runs. Read in full before invocation.

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

### 7. The cross-runner generalization — `cognitive_harness/protocols/inquiry_elaboration_adoption.md`

The goal is that any future runner adopting IE follows the same abstract contract — without IE's spec gaining knowledge of any specific runner. The mechanism is a separate adoption-contract protocol that captures three runner-agnostic interfaces (Input / Output / Spawn), the runtime ordering, the migration pattern, and a worked MVLw example. Adopting runners reference this protocol and instantiate each interface in their own SKILL.md.

The protocol's full content (where the worked example clarifies that MVLw's step-numbering is its own renumbering, not part of the contract — this is critique's R-2):

```markdown
> **Loading note.** This protocol is loaded by a runner-spec author who wants their runner to adopt /inquiry-elaboration. Read in full before editing the runner's SKILL.md.

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

After IE returns its outputs, the runner applies gates in this **ordering**, before any framing artifact is encoded or any spawn happens:

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

**Moves to a separate runner-side protocol** (gone from the runner's framing template):
- Any reference-authority audit (moves to `cognitive_harness/protocols/reference_authority_check.md` per §4)

**STAYS runner-side** (in the framing artifact):
- Layer Commitment (a runner-meta routing decision)
- Synthesis Trigger (drives CONCLUDE)
- Relationships (orchestration state)
- History (state-tracking)

**NEW in the framing artifact** (encoded from IE's output):
- An `## Elaborated Inquiry` section containing IE's framing-content (including an `### Inputs (echo)` sub-section preserving the three IE inputs verbatim or with the `(anchor not supplied)` marker)
- An `## IE Verdicts` section containing the two verdicts (for traceability)

## §6 — Worked Example: MVLw Instantiation

For MVLw specifically:

- **Input interface:** `original_query` = the user's raw `/MVLw <args>` payload; `project_goal` = TBD source (runner-specific; documented when MVLw's process layer is authored); `recent_context` = TBD source (same).
- **Output interface:** `elaborated_inquiry` encoded into `_branch.md`'s new `## Elaborated Inquiry` section; verdicts encoded into the new `## IE Verdicts` section.
- **Spawn interface:** `parallel-set` → spawn N siblings via `branch_inquiry` with shared `branch_set_id`; each gets its own `_branch.md` populated from IE's per-child framing.
- **Runtime ordering — the contract is the ORDERING, not the specific step-numbers.** The cross-runner contract is: IE invoke → fidelity gate → reference-authority pre-flight → encode → spawn → loop. MVLw's renumbering happens to place these at Step 0 (IE invoke) → Step 5 (fidelity gate) → Step 6 (reference-authority pre-flight) → Step 7 (encode) → Step 8 (spawn_set wrapper) → Step 9 (begin Su→S→D→I→C loop). Another runner with a different existing pipeline would integrate at different step-numbers but preserve the ordering.
- **Migration:** the MVLw step 3 template loses the heavy comprehension+fidelity content (Question 5 meta-aspects, Goal, Source Input, Scope Check, step 3.5 audit); gains `## Elaborated Inquiry` (with the inputs-echo sub-section) + `## IE Verdicts`; keeps Layer Commitment + Synthesis Trigger + Relationships + History. The step 3.6 reference-authority audit moves to the separate pre-flight protocol per §4.

## §7 — Adoption Note for Other Runners

For any runner adopting IE (e.g., classic MVL, or a future runner):

1. Edit your runner's SKILL.md to add a pre-pipeline stage that invokes /inquiry-elaboration per the Input Interface (§1).
2. Apply the gate-with-one-bounce + reference-authority pre-flight in the order specified in §4, between the IE invocation and the runner's existing framing-encode step.
3. Thin your runner's framing template per the Migration Pattern (§5): remove the migrated sections; add `## Elaborated Inquiry` (with `### Inputs (echo)`) + `## IE Verdicts`.
4. Apply the spawn_set wrapper (§3) at the point where your runner currently writes the framing artifact, dispatching by IE's request_structure_verdict.

The changes are mechanical given §1–§5; the specifics of each runner's existing pipeline determine where the new code lives.

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

### 8. The whole, in one image — request-gateway middleware

Innovation's Domain Transfer offered a unifying frame: IE is the request-gateway middleware in front of the reasoning service. The user's raw query is the inbound request; Step 0 IE is the middleware ingress that normalizes and validates it; the fidelity gate is "400 with reasoning" when validation fails; the reference-authority pre-flight is the upstream-dependency check; the spawn_set wrapper is routing; the encoded `_branch.md` is the normalized request handed to the service; the discipline loop is the service. Every NOT-list entry of IE corresponds to "business logic the gateway doesn't run." Every interface decision (input read-policy, output consumption, halt-tier separation) is a familiar gateway-middleware decision. The frame doesn't add new mechanism; it makes the existing design memorable and makes each design choice non-arbitrary.

## Inherited Commitments Re-test

This inquiry's `_branch.md` declared a Synthesis Trigger naming five priors. Each prior carries commitments this finding must either re-test against the new design, or explicitly flag as inherited without re-test.

### Prior 1 — `devdocs/inquiries/2026-06-01_11-27__inquiry_elaboration_structure_with_recent_context/finding.md` (controlling structural prior)

- **Commitment:** the three inputs `{project_goal, original_query, recent_context}`; the substantive output schema (anchor-grounded family + emphasis variants + scope versions + multi-request `requests:[]` with `how_connected_with_other_part`); the temporal-layering frame (long-term / short-term / inquiry-itself); the §4 failure modes (drift / flattening / anchor-detachment / anchor-imbalance / missed-split / over-reach); the editor-brief image extended to three sources.
  - **Source:** the 11-27 finding (`§5 Output schema` for the three inputs and substantive output; `§4 Failure modes`).
  - **Re-test status:** RE-TESTED.
  - **Evidence:** the runtime contract in §1 of this finding directly inherits the three inputs and the substantive output. The new `## Elaborated Inquiry` section template (§5) reproduces the schema field-by-field: Question with five meta-aspects → present; Goal → present; Scope with scope_small + scope_big → present; rephrase_simple, rephrase_in_project_goal, rephrase_in_recent_context, rephrase_scope_highlighted, rephrase_importance_highlighted → all five present; Requests with `how_connected_with_other_part` → present (conditional on `request_structure_verdict ≠ single`). The `### Inputs (echo)` sub-section (added per critique's R-4) preserves the three input echoes per the 11-27 schema exactly. The `(anchor not supplied)` graceful-degradation marker is honored at both the input read-policy (§2) and the rephrasing-emit (§7 §1 of the adoption protocol). The §4 failure modes from 11-27 live in IE's spec (not this finding's concern, since IE's spec is untouched), and the process design does not contradict any of them.

- **Commitment:** the process layer must be designed without re-litigating the structure.
  - **Source:** 11-27's CONCLUDE-time scope.
  - **Re-test status:** RE-TESTED.
  - **Evidence:** the Layer Commitment section of this inquiry's `_branch.md` named PROCESS as the primary layer; meaning + structural were declared explicitly out of scope. Every design decision in this finding instantiates the 11-27 structure rather than amending it.

### Prior 2 — `devdocs/inquiries/2026-06-01_09-54__inquiry_elaboration_structure_user_design_compare/finding.md`

- **Commitment:** self-containment (zero neighbor-naming anywhere in IE's spec); output-organized `§2 Components`; intrinsic NOT-list grounded in IE's own character; reference-authority dropped from IE and re-homed (re-home unresolved).
  - **Source:** the 09-54 finding (the entire correction's load-bearing lesson; the deferred re-home of reference-authority).
  - **Re-test status:** RE-TESTED.
  - **Evidence:** the K8 invariant — "ALL edits runner-side; IE's spec untouched" — is the load-bearing commitment of the entire process design. Every piece of this finding's design (D0/DE1/DE2/DE3/DE4) was adversarially tested for K8 violation in the Critique phase; all five survived. The R-1 refinement made the K8 invariant explicit at the D0 anchor (the wiring direction is one-way: runner-spec → invokes IE; IE-spec doesn't name the runner). The reference-authority re-home is closed at §6 of this finding — `cognitive_harness/protocols/reference_authority_check.md`, post-IE pre-loop pre-flight; three placement candidates considered, chosen one named, alternatives explicitly rejected with reasons.

- **Commitment:** the surrounding orchestration layer supplies inputs (per the 09-54 R-x phrasing).
  - **Source:** 09-54 R-x.
  - **Re-test status:** RE-TESTED.
  - **Evidence:** the adoption protocol's §1 (Input Interface) explicitly says "Where each input comes from is the runner's responsibility. This protocol does not specify the supplier." This matches the 09-54 commitment that IE doesn't know where its inputs come from; the runner-side knows.

### Prior 3 — `devdocs/inquiries/2026-06-01_01-17__inquiry_elaboration_scope_and_coverage/finding.md`

- **Commitment:** the object-vs-mode decision rule (operates on the request, perceives not acts); the 7-border NOT-list including spawn = runner; the migration principle (comprehension + fidelity migrate INTO IE; orchestration STAYS runner-side); the upper bound (tailored phases, not wrapper-fusion).
  - **Source:** the 01-17 finding (the meaning-layer's scope settlement).
  - **Re-test status:** RE-TESTED.
  - **Evidence:** the perception-vs-action split is the load-bearing principle named at the close of §1 of this finding ("IE itself never spawns, encodes, or acts on its own verdicts"); the design honors it at every interface (§3 gates: IE perceives the fidelity verdict, runner acts; §4 spawn: IE perceives the request-structure verdict, runner calls `branch_inquiry`; §5 encode: IE produces the elaborated_inquiry content, runner copies into `_branch.md`). The migration principle is exactly what §5's migration table operationalizes — comprehension+fidelity moves INTO IE (5 elements), orchestration STAYS runner-side (4 elements), with one element (reference-authority) moving to its own runner-side protocol.

### Prior 4 — `devdocs/inquiries/2026-05-31_22-30__inquiry_elaboration_discipline_or_not/finding.md`

- **Commitment:** IE is a discipline (verdict) AND the surviving piece from 20-08 — the spawn = runner's action (the perception/action split).
  - **Source:** the 22-30 finding (the meaning-layer's identity verdict).
  - **Re-test status:** RE-TESTED.
  - **Evidence:** the entire process design treats IE as a discipline invoked via the Skill tool (`Skill(skill: "inquiry-elaboration", args: {...})` at §2's Step 0 wording) — not as a runner-side helper, not as a protocol. The perception-vs-action split is re-tested directly in §3 of the Critique (with the verdict SURVIVE). The spawn-is-the-runner's-action commitment is the load-bearing reason §4 places the spawn_set wrapper in runner-spec rather than in IE.

### Prior 5 — `devdocs/inquiries/2026-06-01_11-46__loop_diagnose__inquiry_elaboration_self_containment_failure_chain/finding.md`

- **Commitment:** the LOOP_DIAGNOSE MCs — especially MC-A (when an inquiry's target is discipline-design, surfacing's territory must include adjudicating memories + self-contained exemplars at core priority with the load-bearing property in the gloss) and MC-D (CONCLUDE's Inherited-Commitments-Re-test must include the broader-reading test).
  - **Source:** the 11-46 LOOP_DIAGNOSE finding (the diagnostic on the self-containment failure chain that drove the 09-54 correction).
  - **Re-test status:** RE-TESTED for the MCs that bind on the process design's own work; INHERITED-WITHOUT-RE-TEST for the others.
  - **Evidence (RE-TESTED):** the process design itself does not invoke MC-A (the inquiry's target is process design for the IE-MVLw wiring, not a fresh discipline-design), but the K8 invariant that drove the MC-A creation is honored throughout (no neighbor-naming inside IE's spec — verified by the K8 critique check). MC-D's broader-reading test IS what this Inherited-Commitments-Re-test section is performing.
  - **Reason (INHERITED-WITHOUT-RE-TEST for MC-B, MC-C):** MC-B (sensemaking's exemplar-comparison check) and MC-C (critique's scan-for-neighbor-names) were verified at the discipline-skill level by sensemaking and critique respectively during this inquiry's pipeline (sensemaking ran the frame-exit completeness check; critique ran the K8 spec-gap scan). The MCs themselves are not load-bearing for the process-design's own claims; they're load-bearing for future discipline-design inquiries that adopt them, which is the next-action work, not this inquiry's verdict.

## Next Actions

### MUST

- **What:** Author `cognitive_harness/inquiry-elaboration/` spec from the settled IE design (meaning + structure + this process layer's contract).
  - **Who:** human + AI; the IE spec author.
  - **Gate:** condition-bound — before any runner can actually invoke IE via the Skill tool, the spec file must exist (the Step 0 invocation `Skill(skill: "inquiry-elaboration", ...)` will otherwise fail at the fallback `Read` step). This is Route 1 of the IE-trajectory route-map at `devdocs/routelister/_route.md`.
  - **Why:** unblocks the entire IE rollout. Until this spec exists, this finding's process-layer design is paper — the Step 0 invocation has nothing to load.

- **What:** Apply the MVLw template edits (the Step 0 insertion + the thinned step 3 + the new `## Elaborated Inquiry` / `## IE Verdicts` / `### Inputs (echo)` sections) to `cognitive_harness/MVLw/SKILL.md`. Apply the MVLw runtime edits (the fidelity gate + the reference-authority pre-flight + the spawn_set wrapper) to the same file's EXECUTE PIPELINE section.
  - **Who:** AI / spec author.
  - **Gate:** condition-bound — after the IE spec exists (the previous MUST).
  - **Why:** makes MVLw actually invoke IE. Without this edit, the process design is theory — MVLw still runs its current step 3 directly from raw user input.

- **What:** Create `cognitive_harness/protocols/reference_authority_check.md` (full content per §6 of this finding).
  - **Who:** AI / spec author.
  - **Gate:** time-bound to land together with the MVLw runtime edits (the runtime edits invoke this protocol — if it doesn't exist, the invocation falls back to error).
  - **Why:** re-homes the dropped reference-authority audit. Without this protocol, the 09-54 deferral remains open and the runtime edits' Gate B has nothing to invoke.

- **What:** Create `cognitive_harness/protocols/inquiry_elaboration_adoption.md` (full content per §7 of this finding).
  - **Who:** AI / spec author.
  - **Gate:** time-bound to land together with the MVLw edits (gives any future adopting runner the contract to reference).
  - **Why:** captures the cross-runner generalization. Without this protocol, the design is MVLw-only by default — the moment a second runner adopts IE, the design's cross-runner intent is lost.

### COULD

- **What:** Apply the same set of edits (Step 0 invocation + thinned framing template + post-IE gates + spawn wrapper) to classic MVL at `cognitive_harness/MVL/SKILL.md` so the classic runner also adopts IE.
  - **Who:** AI / spec author.
  - **Gate:** condition-bound — after MVLw's edits are stable (i.e., the design has been validated in practice on MVLw inquiries) AND someone wants to run classic MVL with IE.
  - **Why:** brings MVL classic into the IE world. Demonstrates the cross-runner contract by use, not just by spec.
  - **Depends-on:** MUST items "Author IE spec" + "Apply MVLw template edits" + "Create adoption-contract protocol". This COULD is GATED — do not act until the MUSTs resolve (MVL-classic adoption uses the same contract; the contract has to exist first).

- **What:** Empirically test the wired-up MVLw on a real bundled-request inquiry (one that should trigger `parallel-set`) and confirm the spawn_set wrapper fires correctly.
  - **Who:** human + AI together.
  - **Gate:** condition-bound — after MVLw's edits are stable.
  - **Why:** validates the spawn-mechanics design empirically. Paper design can hide off-by-one issues (e.g., the `single` case's branch_set_id handling).
  - **Depends-on:** MUST item "Apply MVLw template edits". GATED.

- **What:** Add the `routeman` discipline to the install scripts (`install_for_claude.sh` and `install_for_codex.sh`) — currently a deferred routelister-flagged hygiene fix.
  - **Who:** AI.
  - **Gate:** time-bound — same install-script editing session as the next install run.
  - **Why:** keeps the install scripts in sync with the disciplines actually in `cognitive_harness/`. Orthogonal to this finding's design but flagged by an adjacent route.

### DEFERRED

- **What:** Author the detailed `sequential-chain` spawn mechanics (the queueing semantics, depends-on resolution, partial-completion handling) inside MVLw's EXECUTE PIPELINE section.
  - **Gate:** condition-bound — when the first real inquiry actually emits `sequential-chain` as IE's request-structure verdict, OR when a separate structural-layer inquiry takes the sequential-chain mechanics as its target.
  - **Why (if revived):** completes the spawn-mechanics design. Until then, MVLw ships with `single` + `parallel-set` working; `sequential-chain` cases halt cleanly with a "deferred" message instead of attempting and failing silently.

## Reasoning

### Why "Step 0 before existing step 3" rather than "in-pipeline core discipline"

The strongest counter-design was IE as a core discipline like sensemaking — both operate on something (sensemaking on the problem; IE on the request), both perceive and emit, both could in principle sit inside the discipline loop. The reason that design fails: IE's output IS the inquiry's framing — what the runner uses to WRITE `_branch.md` and DECIDE spawn. If IE ran inside the loop, the loop would already be running with some prior framing; IE's output would have nothing to encode into. IE must run BEFORE the framing is written. The canon-taxonomy work earlier in this arc had already independently committed this position ("Upstream FIRST, even before surfacing — because it shapes the request that surfacing's purpose comes from"). The convergence is independent: structural call-site test plus pre-committed taxonomy plus the perception-vs-action split (the actor that emits the framing is upstream of the actor that consumes it).

### Why "runner-side wrapper around existing branch_inquiry" rather than "new spawn_set primitive file"

The strongest counter-design was a new `spawn_set` primitive at `cognitive_harness/protocols/spawn_set.md`. The reason that design fails: `branch_inquiry` already supports `branch_mode: set-member` + `branch_set_id` — the per-child machinery is built. A new primitive duplicates that machinery for no semantic gain. The only thing missing was the BATCHING logic (one user-request → N branch_inquiry calls), and batching logic is runner behavior, not a primitive. The wrapper is one paragraph in the runner-spec; it cites the existing primitive; no new file. This avoids spec sprawl while honoring the perception-vs-action split (IE perceives the request-structure verdict; the runner is what calls `branch_inquiry` N times).

### Why "halt-with-one-bounce" rather than "halt-on-first-FLAG" or "auto-proceed"

Auto-proceed on FLAG was killed by the asymmetric-failure stance: a misframing that reaches the loop costs a full pipeline pass (5+ disciplines run on a broken framing, producing a finding whose conclusions inherit the broken frame); over-careful framing costs nothing structural. The cost gradient is steep and one-directional; the gate should reflect it. Halt-on-first-FLAG was rejected because it offers no second-chance — a FLAG that's actually addressable by re-running IE with the flagged-gap surfaced would halt unnecessarily, requiring user intervention for every borderline case. The middle ground — one cheap bounce, then halt if still FLAGged — gives the system one chance to self-correct without inviting a loop-of-bounces, and matches the structural commitment in the 11-27 finding ("one verify→comprehend bounce; if it still FLAGs, emit FLAG/RE-RUN rather than loop") made operational at the runner level.

### Why "separate halt-tier for reference-authority" rather than "shared bounce-budget"

The strongest counter-design was a shared bounce-budget — one bounce total across both gates, so reference-authority FLAGs would consume IE's second-chance. The reason that design fails: framing-fidelity is a comprehension property (something IE can re-comprehend by re-running with the gap surfaced); reference-currency is an ecosystem property (a deprecated cited spec does not get fixed by IE re-running — the resolution is to update the framing's references, which is a user-level decision). Conflating their budgets would let an ecosystem issue burn IE's comprehension second-chance for no benefit (the bounce wouldn't fix the deprecated reference anyway). The independent halt-tiers reflect the independent failure surfaces. Three independent statements in the design's text (DE2 gate description, DE3 protocol Step 4, DE4 §4 + §9) make the separation robust against future drift.

### Why "reference-authority as new protocol" rather than "absorbed into surfacing"

Absorbing reference-authority into surfacing was a candidate (surfacing already sweeps territory; cited-reference checking is a kind of sweep). The reason that design fails: it conflates discipline scopes. Surfacing's job is enumeration (draw items from a bounded territory tagged with relevance to a purpose); reference-authority checking is currency-validation (is this cited reference still authoritative). They share "scan some space" but the operations are different (enumerate-with-tags vs validate-per-reference-with-3-sub-checks), and the outputs are different (relevance-tagged workspace + thin artifact vs PASS/FLAG verdict). Folding currency-validation into surfacing would either widen surfacing's job (loss of focus) or hide currency-validation under surfacing's name (loss of legibility). A separate small protocol is the cleanest cut.

### Why "cross-runner contract as its own protocol" rather than "inside IE's spec" or "inside MVLw's spec"

Inside IE's spec was killed by K8 — IE must remain neighbor-free, and a section that says "here's how runners adopt me" would name runners. Inside MVLw's spec was killed by the cross-runner intent — the contract has to be neutral across runners; baking it into MVLw's spec would make every other adopting runner reference MVLw-specific text. A separate adoption-contract protocol at `cognitive_harness/protocols/` is the cleanest home: protocols/ is where this project keeps runtime contracts (alongside `branch_inquiry.md`, `conclude.md`, `loop_diagnose.md`); the file's existence doesn't taint any runner's spec; future runners reference it from their own SKILL.md and instantiate the interfaces.

### Why the critique's REFINEs were applied at compile-time rather than pushed to a follow-up

R-1 through R-5 were authoring-level refinements that affect what an author transcribes from this finding into actual spec files. R-3 (split migration list) and R-4 (missing input echoes) were real textual bugs (innovation's content conflated two destinations in the "What's gone" list, and omitted the three input echoes the 11-27 schema requires); applying them at compile-time means the finding is self-consistent and ready to transcribe. R-1 (D0 wiring-direction sentence), R-2 (DE4 step-number generality), R-5 (drop redundant source_input_preserved field) were one-line clarifications. Holding any of these for a follow-up inquiry would just create a follow-up inquiry to fix wording in this one.

## Open Questions

### Monitoring

- **Observable after MVLw's edits ship and the first real IE invocation runs.** Does the spawn_set wrapper handle the `single` case cleanly (no orphan `branch_set_id`, no spurious branch_inquiry call)? The Critique flagged this as a re-test trigger (item d).
- **Observable after the first FLAG-then-PASS bounce occurs.** Does the bounce mechanism actually surface the flagged-gap as effective additional context for IE, or does the second invocation just rerun the same analysis? Empirical signal.
- **Observable after a second runner (likely MVL classic) adopts the contract.** Does the adoption protocol's §7 ("Adoption Note for Other Runners") prove sufficient mechanical guidance, or does the second adopter discover gaps the worked MVLw example didn't reveal?

### Refinement Triggers

- **If the spawn_set wrapper's `single` case turns out to need explicit short-circuit logic** (e.g., to avoid generating an unused `branch_set_id`) — re-open §4 of this finding and refine the wrapper. Trigger: the first observed bug in the wrapper post-deployment.
- **If any adopting runner discovers that the contract names something MVLw-specific by accident** (the Critique R-2 was the first cut at this; future adopters may catch additional bake-ins) — refine §6 of the adoption protocol; potentially add a §6b "Worked Example: <other-runner> Instantiation". Trigger: an adoption attempt that hits an unexpected MVLw-specific assumption.
- **If `sequential-chain` cases start arising in real inquiries** before the structural-layer detail is authored — re-open the DEFERRED item in Next Actions and design the queueing semantics. Trigger: the first inquiry whose IE invocation emits `sequential-chain` as the request-structure verdict.

### Research Frontiers

- **The multi-head / merging-loop future** (per the `project_end_goal_loop_architecture` memory) eventually generalizes spawn beyond `single` / `parallel-set` / `sequential-chain` to merge-back operations across siblings. The current design accommodates spawn forward; merge-back is open. No known path; this finding's design is forward-compatible (doesn't constrain merge-back) but doesn't yet specify it.
- **The `layer_hint` IE emits** (mentioned in `## IE Verdicts`) was named by the 09-54 R5 refinement but has not been authored in IE's spec yet. Whether the field stays or drops depends on the IE spec authoring (Route 1). If it drops, this finding's `## IE Verdicts` template should drop it too — but the dependency is one-way (the spec authoring decides; this finding adapts).
