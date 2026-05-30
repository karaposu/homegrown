# Innovation — routeman_directional_input_read_policy

## User Input

```text
Innovation purpose: per-piece production. Production-Task mode STANDARD DEFAULT (confirmation-shape; Sensemaking adjudicated). Produce concrete spec text + delta + follow-up scope for 7 pieces. Save to innovation.md.
```

---

## Phase 1 — Seed + Methodology-Mode Consideration

### Seed
The 7-piece partition from decomposition.md. Production-Task mode confirmation-shape (Sensemaking adjudicated verdicts; Innovation produces concrete text).

### Methodology-Mode
- **Inherited:** STANDARD DEFAULT.
- **Alternative considered:** Minimum-mechanism. Rejected — Combination + Lens Shifting are needed across pieces.
- **Decision:** STANDARD DEFAULT confirmed.

No meta-decision pieces fire intervention-shape commitments.

---

## Phase 2 — Generate

### P1 — Common substrate: three-tier vocabulary + read-failure handling

**Mechanism: Domain Transfer (from RFC 2119) + Combination (project's MUST/COULD/DEFERRED vocab).**

**P1 output — spec text for §3 prologue (substrate sub-section):**

```markdown
### Read-Policy Vocabulary

This discipline uses a four-tier vocabulary to grade input-read commitments
at Reception. Each tier defines a specific runtime behavior:

- **MANDATORY** — The input MUST be successfully read. If the file is
  absent or unreadable, routeman HALTs with a named error
  (`MissingRequiredInput`) and emits a diagnostic identifying the missing
  file and the invocation mode.

- **MANDATORY-WHEN-AVAILABLE** — The input MUST be read when the file
  exists. If the file is absent (e.g., first-time invocation on a fresh
  inquiry), routeman FLAGs the missing input in telemetry and proceeds
  without prior state. If the file is present-but-malformed AND its
  content is structurally required for the current invocation,
  routeman HALTs with `MalformedRequiredInput`. If the file is
  present-but-malformed but its content is NOT structurally required,
  routeman FLAGs and proceeds.

- **SHOULD** — Routeman attempts to read the input by default. Any
  read failure (absent, malformed, inaccessible) routes to FLAG +
  proceed-without. The discipline's output completes without the
  input; telemetry notes the degraded run.

- **MAY** — The caller supplies the input as an explicit parameter
  or not. Routeman does not autonomously seek the input. Same FLAG +
  proceed-without behavior on failure when supplied.

### Read-Failure Default

Across all tiers above MANDATORY, the default failure mode is
**graceful-degrade**: FLAG telemetry + proceed without the input. HALT
fires only when the strictly-required input is structurally needed for
the current invocation (MANDATORY at any state; MANDATORY-WHEN-AVAILABLE
when present-but-malformed-AND-needed).

This default preserves discipline operability on fresh inquiries +
across schema-version drift while preventing silent execution against
known-broken inputs.
```

### P2 — routeman.md read policy prose

**Mechanism: Combination (P1 vocabulary × routeman.md content axis) + Constraint Manipulation ADD (the directional-mode-structural-requirement constraint).**

**P2 output — spec text for §3.2 Reception:**

```markdown
### Reading prior `routeman.md` in directional mode

Read policy: **MANDATORY-WHEN-AVAILABLE.**

When routeman is invoked in directional mode (stage-2 sub-route expansion
under a selected parent route per §3.3), routeman MUST read the parent
inquiry's `routeman.md` if it exists. The parent's `routeman.md` carries
the per-Route entry for the parent route — the entry whose
sub-route-expansion is the operation's substantive product.

Operational mechanic: directional mode's stage-2 input contract (per
the 2026-05-23_18-58 staging-mapping finding) names parent-route-id and
file-paths-in-scope as inputs. Acquiring the parent-route-id requires
reading the file that contains the parent route entry — i.e., the
parent's `routeman.md`. This read is the operational mechanic by which
the contract's parent-route-id input becomes available; it is not a new
input parameter, but the explicit naming of an implicit operational
requirement.

Failure handling:
- **Absent** (first directional invocation on a route not yet expanded
  elsewhere; valid case): FLAG in telemetry. Proceed only if the caller
  supplies the parent-route-id and route content inline; otherwise HALT
  with `MissingRequiredInput`.
- **Present-but-malformed**: HALT with `MalformedRequiredInput`. The
  parent route entry is structurally needed for sub-route enumeration
  and cannot be inferred from elsewhere.
- **Present-and-stale** (parent route has changed since the directional
  invocation started; rare race): proceed with FLAG noting staleness;
  the produced sub-routes reflect the snapshot read at Reception.
```

### P3 — _route.md read policy prose

**Mechanism: Combination (P1 vocabulary × _route.md content axis) + Lens Shifting (orchestration-awareness + Baldwin-substrate value lens).**

**P3 output — spec text for §3.2 Reception:**

```markdown
### Reading prior `_route.md` in directional mode

Read policy: **SHOULD.**

When routeman is invoked in directional mode, routeman should read the
parent inquiry's `_route.md` if it exists. The `_route.md` carries
invocation state (Last Invocation, Prior Invocations, History) per the
2026-05-27_00-51 simplification finding. Reading it provides:

- Orchestration awareness: which directional-mode invocations have
  previously expanded sub-routes under the same parent (avoid redundant
  work).
- Staleness detection: how recently the parent route was enumerated or
  recalibrated; informs whether sub-routes should treat the parent
  context as fresh or aged.
- Baldwin-substrate feed (per `docs/canon/evolving_quality_assetment_component.md`):
  per-Route Status updates across the History section are the
  Retrospective-RC signals that, in combination with the Predictive-RC
  signals at enumeration time, enable cross-invocation calibration.

The read is value-adding but not operationally required for sub-route
enumeration to succeed.

Failure handling:
- **Absent** (first invocation on the parent inquiry; common at L0/L1):
  FLAG (informational). Proceed without prior invocation state.
- **Present-but-malformed**: FLAG. Proceed without the malformed file's
  content. Sub-route enumeration completes from `routeman.md` content
  alone.
- **Present-and-stale**: read normally; staleness is itself a Baldwin
  signal (long-stale Status values suggest the parent route's pursuit
  has paused).
```

### P4 — 18-58 contract clarification

**Mechanism: Combination (18-58 stage-2 contract × P2's parent-route-id-acquisition mechanic).**

**P4 output — spec text for §3.3 or §3.5 (where directional/stage-2 mode is currently described):**

```markdown
### Note on stage-2 input acquisition

The stage-2 input contract (per the 2026-05-23_18-58 staging-mapping
finding) names parent-route-id, file-paths-in-scope, and optional
refined-sub-purpose as the directional-mode invocation inputs. This
contract is unchanged.

The operational mechanic by which parent-route-id becomes available at
Reception is reading the parent inquiry's `routeman.md` — see §3.2
"Reading prior `routeman.md` in directional mode" for the MANDATORY-
WHEN-AVAILABLE policy on that read. The 18-58 contract's parent-route-id
input is therefore acquired-not-supplied: the caller indicates which
route in which parent inquiry; routeman reads the parent's `routeman.md`
to extract the route's full entry as input to stage-2 enumeration.
```

### P5 — Spec-edit delta-list

**Mechanism: Combination (all upstream pieces) + Constraint Manipulation (each row matches the prior findings' MUST-list format).**

**P5 output — delta-list rows:**

| Delta | Where (in `cognitive_harness/routeman/references/routeman.md`) | Action |
|---|---|---|
| Add Read-Policy Vocabulary sub-section | §3 prologue (before §3.1) OR §3.2 prologue | ADD-CONTENT (paste P1 substrate text) |
| Add Read-Failure Default sub-section | Adjacent to Read-Policy Vocabulary | ADD-CONTENT (part of P1) |
| Add "Reading prior `routeman.md` in directional mode" sub-section | §3.2 Reception | ADD-CONTENT (paste P2 prose) |
| Add "Reading prior `_route.md` in directional mode" sub-section | §3.2 Reception | ADD-CONTENT (paste P3 prose) |
| Add "Note on stage-2 input acquisition" sub-section | §3.3 (or wherever stage-2 invocation contract currently lives) | ADD-CONTENT (paste P4 prose) |
| Cross-reference from §3.5 Re-invocation to §3.2 read-policy | §3.5 | REPAIR (one-line pointer note: "Re-invocation input acquisition follows the read-policy in §3.2.") |

Six delta rows. All are ADD-CONTENT or REPAIR (cross-reference only); no field removals or schema changes. Surgical addition to §3.2 + §3.3 + §3.5 cross-reference.

### P6 — Generic-mode follow-up scope statement

**Mechanism: Constraint Manipulation ADD (scope-bounded follow-up).**

**P6 output:**

**Follow-up Inquiry Scope: `routeman_generic_mode_read_policy`**

- **Question:** Apply the three-tier read-policy vocabulary defined by this inquiry to routeman's GENERIC-mode invocation. Specifically: what is the read policy for prior `routeman.md` and `_route.md` files when routeman is invoked WITHOUT a parent-route-id (i.e., whole-codebase / fresh-state mode per 24-00 Q1)?
- **Layer Commitment:** PROCESS (same as parent inquiry).
- **Inputs:** This inquiry's vocabulary (P1 + 3-tier definitions) + 24-00's generic-mode invocation definition + the live spec's §3.2 post-amendment state.
- **Outputs:** A parallel set of per-file verdicts for generic mode + spec-edit delta for §3.2's generic-mode sub-section.
- **Predicted asymmetries from directional mode:**
  - Generic mode's `routeman.md` read is different — it's reading the previous-invocation's-own-routeman.md (same file routeman is about to write), not a parent's. The "in-place evolution" mechanic from the protocol's resume mechanism applies.
  - Generic mode's `_route.md` read is similar in role to directional mode (orchestration + Baldwin) but the History is the routeman's-own-prior-invocations rather than the parent's.
- **Gate:** condition-bound — when generic-mode operation is being designed for L2+ readiness OR when at least one generic-mode invocation has surfaced ambiguity about prior-state reading.
- **Why:** consistency. The 3-tier vocabulary is project-canonical after this inquiry; applying it to generic mode is a small follow-up that closes the cross-mode consistency story.

### P7 — Finding.md deliverable shape spec

**Mechanism: synthesis from P1-P6.**

**P7 output — finding structure:**

1. Restated question + scope.
2. Per-file verdict table:
   - routeman.md in directional mode: MANDATORY-WHEN-AVAILABLE
   - _route.md in directional mode: SHOULD
3. Three-tier vocabulary (definition) — body content from P1.
4. Per-file policy prose — body content from P2 + P3.
5. 18-58 contract clarification — body content from P4.
6. Concrete spec-edit delta-list — body content from P5 (6 rows).
7. Generic-mode follow-up scope — body content from P6.
8. Inherited Commitments Re-test (per Synthesis Trigger).
9. Open Questions / Monitoring.

---

## Phase 3 — Test

5-test cycle per output:

| Test | Result |
|---|---|
| Novelty | LOW (confirmation-shape; producing committed verdicts as spec text). NOT a failure. |
| Scrutiny survival | HIGH (each piece grounded in Sensemaking SV6 + canon-doc references). |
| Fertility | HIGH (delta-list is concrete spec-edit-actionable). |
| Actionability | HIGH (user can apply delta to live spec directly). |
| Mechanism independence | MEDIUM (Combination + Constraint Manipulation + Domain Transfer used; minimum coverage met). |

All Innovation outputs survive.

**Disposition:** ACTIONABLE for all 7 pieces.

---

## Phase 3.5 — Assembly Check

Outputs combine cleanly: P1 substrate is referenced by P2 + P3; P4 clarifies upstream commitment without conflict; P5 integrates P1-P4 + P6 into the deliverable; P7 specifies the finding shape.

No assembly emergent — confirmation-shape inquiry doesn't generate emergent novelty.

---

## Mechanism Coverage Telemetry

- **Generators applied:** 2/4 (Combination, Domain Transfer). Absence Recognition + Extrapolation NOT applied — not needed for confirmation-shape production.
- **Framers applied:** 2/3 (Lens Shifting, Constraint Manipulation). Inversion NOT applied — Sensemaking already did the contrarian work; no further inversion warranted.
- **Coverage:** 4/7. Justified for confirmation-shape inquiry.
- **Convergence:** YES — pieces all converge on Sensemaking SV6's verdicts.
- **Failure modes observed:** none.

---

## Overall: **PROCEED**

7 pieces produced; all spec-edit-actionable. Sensemaking's verdicts (routeman.md = MANDATORY-WHEN-AVAILABLE; _route.md = SHOULD; 3-tier vocabulary; graceful-degrade default) materialized as concrete prose + delta-rows. Ready for Critique.
