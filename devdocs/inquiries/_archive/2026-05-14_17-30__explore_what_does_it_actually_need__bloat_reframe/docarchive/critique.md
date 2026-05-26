# Critique — Iteration #10 REPAIR Specification

## User Input

```
/MVL+

 REPAIR the Neighbor-disciplines table to drop project paths (A2)

why Neighbor-disciplines is needed anyway?  why woudl explore need to know this ? 

i think you are not understanding the full bloat for some reason.
```

Plus inquiry's `_branch.md` + `exploration.md` + `sensemaking.md` + `decomposition.md` + `innovation.md`. Candidate: the assembled 5-piece REPAIR specification (P1 `_design_history.md` content; P2 Loading-note edit; P3 9 body-deletion Edits; P4 3 surgical Edits; P5 iteration #10 finding template).

---

## Phase 0 — Dimension Construction

### Extracted from sensemaking + decomposition

- The REPAIR shape is Option (ii) RELOCATE-NOT-DELETE (committed).
- The lean runtime spec must still support `/explore`'s cognitive operation.
- Same-file edits to `homegrown/explore/references/explore.md` require content-addressed Edits.
- Output form must NOT reproduce the bloat patterns (lean form discipline).
- Pattern-level research frontier (generalizable BLOAT-audit) must be preserved for future revival.

### Evaluation dimensions (with weights)

| Dimension | Weight | Asks |
|---|---|---|
| **D1 Completeness** | CRITICAL | Does Innovation cover all the spec edits needed, including dangling cross-references after deletions? |
| **D2 Correctness** | CRITICAL | Are the Edit `old_string`/`new_string` pairs accurate, unambiguous, and free of stale references? |
| **D3 Operation-preservation** | CRITICAL | Does the lean spec (after applying P2+P3+P4) still cover `/explore`'s necessary operation? |
| **D4 Coherence** | HIGH | Does the post-REPAIR spec hang together as a coherent document with consistent vocabulary and cross-references? |
| **D5 Same-file editing safety** | HIGH | Are `old_string`s content-addressed and unambiguous (no accidental matches; no line-number assumptions)? |
| **D6 Scope-fidelity of output** | HIGH | Does the iteration #10 finding template (P5) avoid reproducing the bloat patterns it identifies? |
| **D7 RELOCATE pattern integrity** | MEDIUM | Is the relocate-not-delete pattern fully executed (institutional value preserved at the new file)? |
| **D8 Honest cost-acknowledgment** | MEDIUM | Does the finding correctly characterize iteration #10's pipeline cost-benefit? |
| **D9 Pattern-frontier preservation** | MEDIUM | Is the generalizable BLOAT-audit operation correctly framed for future revival? |

### Project-specific risk dimension check

| Project risk | Mapped to | Coverage |
|---|---|---|
| duplicate-derivable-state | D6 + D9 | ✓ |
| operation-parsimony | D6 | ✓ |
| phase-fit | D3 + D8 | ✓ |
| explicit-culture-fit | D7 + D8 | ✓ |

All 4 project-specific risk axes have at least one mapped dimension. PASS.

### Stakes assessment

**Stake level: HIGH.** Real edits to a load-bearing spec file (`homegrown/explore/references/explore.md`) will result. Errors propagate to every `/explore` invocation. Burden of proof: **guilty until proven innocent on completeness/correctness/operation-preservation (D1, D2, D3)**; innocent-until-guilty for the others.

---

## Phase 1 — Landscape Construction

### Viable region

- D1, D2, D3 must pass without significant issues
- D4–D6 must pass (HIGH weight)
- D7–D9 either pass or have flagged caveats

### Dead region

- D1 failure: missing edits leave the spec broken after REPAIR is applied
- D2 failure: stale references / ambiguous `old_string`s / incorrect content
- D3 failure: the lean spec doesn't support `/explore` operation; something necessary was deleted

### Boundary region

- HIGH-weight (D4–D6) failures that don't compromise critical dimensions → REFINE
- MEDIUM-weight (D7–D9) failures → REFINE if material; SURVIVE-with-caveat otherwise

---

## Phase 2 — Adversarial Evaluation (Probes a–k)

### Probe (a) — §1.5 FULL DELETION genuineness (D1, D2, D4)

**Prosecution:** Innovation deletes §1.5 in full. The intro paragraph defined "stated territory" as a load-bearing concept and the specialization-pattern concept generally. The remaining spec may reference these.

**Empirical check (grep on current spec):**

- "stated territory" appears only in §1.5 itself. ✓ Safe to delete.
- "Specialization" appears only in §1.5 itself + once in the NOT-list "Belongs to" column row for navigation. The §1.5 row of the NOT-list is what Innovation drops in P4's §1.3 column edit. ✓ Safe.
- "transcludes" appears only in §1.5 itself. ✓ Safe.
- §1.3 NOT-list row "navigation" originally has "...see §1.5)" — this row's `Belongs to` column entry is **dropped entirely by P4**, so the §1.5 reference is removed alongside. ✓ Confirmed safe.

**Defense:** §1.5 is genuinely self-contained; nothing depends on it.

**Verdict on D1+D2+D4 for §1.5 deletion: PASS.** Innovation's full-deletion choice is structurally clean.

### Probe (b) — Layered-territories rule relocation (D3, D4)

**Prosecution:** Innovation relocates the "Coarse scan in layered territories" rule from §3.7 into §3.4 canonical-cycle. But the rule's vocabulary uses "Coarse scan" — a term defined in §3.7 (Resolution progression). §3.4's canonical-cycle uses "Scan — breadth-first pass at current resolution," not "Coarse scan." After relocation, the rule references vocabulary from its DELETED origin section.

**Defense:** The §3.4 canonical-cycle Step 1 IS the coarse scan (first scan of a cycle is unweighted breadth-first). Readers can infer. The rule's content is preserved.

**Prosecution-resurges:** Inference is the kind of friction the from-scratch frame is supposed to remove. A clean relocation would either (a) rephrase the rule to use §3.4's vocabulary ("the first breadth-first scan must include surround-layer items") or (b) keep §3.7's name as a local definition inside §3.4 ("the first pass — the Coarse scan — must...").

**Verdict on D4: REFINE.** The rule's vocabulary should match its new location. Specifically: rephrase the rule as: "**Surround-layer inclusion at first scan.** When the territory has an identifiable contextual/structural surround layer (e.g., project-wide protocols, foundational frames), the first breadth-first scan must include items from that surround layer before going deep on inquiry-specific objects. Omitting an identifiable surround layer at the first scan is a Premature Depth instance." Material refinement; not a kill.

### Probe (c) — §3.1 Step 0 declarations deletion + dangling references (D1, D2, D4) — CRITICAL FINDING

**Prosecution:** Innovation deletes §3.1. But other sections reference §3.1 explicitly.

**Empirical check (grep on current spec):**

Stale §3.1 references after deletion:
- Line 109 (§2.3): "The level is declared at Step 0 via the `depth-level` field (see §3.1)."
- Line 200 (§3.5 in current numbering): "exposes the input contract (`expected`, `depth-level`, entry-point, parent-pass-anchor in staging telemetry)" — refers to the fields declared in §3.1 implicitly
- Line 435 (in §7, which IS being deleted but the same content is being RELOCATED to `_design_history.md`): "default depth-by-resolution coupling table (§3.1)"
- Line 497 (**in the EXECUTE INSTRUCTIONS section at bottom of file**): "Declare the Step 0 fields (§3.1): `cognitive-commitment-mode: open`; `territory-type-mode`; `entry-point`; `expected`; `depth-level`."
- Line 511–512 (EXECUTE INSTRUCTIONS): "**Territory Overview** — regions; resolution; Step 0 declarations"
- Line 480 (in §8 Summary table, which IS being deleted): "Step 0 declarations | 5 fields"

**Critical finding:** Innovation **MISSED THE ENTIRE EXECUTE INSTRUCTIONS SECTION** (lines 491–518 in the current spec). This section contains explicit `§3.1`, `§3.4`, `§3.6`, `§3.8`, `§5.5` references. After the deletions, this section will be broken.

Specifically Innovation needs to ALSO edit the EXECUTE INSTRUCTIONS section to either (a) delete the "Declare the Step 0 fields..." instruction entirely, replacing with a simpler "Determine mode (artifact/possibility); choose entry point (frontier-first/signal-first)..." or (b) preserve a brief declaration of the actually-useful fields without the full §3.1 table.

**Defense:** The implementing agent might catch these during the renumbering pass. Innovation noted "small number of internal cross-reference updates" in the renumbering decision.

**Prosecution-resurges:** The EXECUTE INSTRUCTIONS section is at the bottom of the file under a hard rule (`---- NOW SOLID INSTRUCTIONS START ----`); it's structurally distinct from the main spec body. Innovation should have flagged it explicitly as needing edits, not buried it in "small number of cross-reference updates." The instruction `Declare the Step 0 fields (§3.1)...` is NOT a passive cross-reference; it's an active instruction that fires when /explore executes. If left unchanged, /explore will literally try to "declare the Step 0 fields" mid-execution, after those fields were deleted from the spec.

**Verdict on D1+D2: REFINE — CRITICAL.** Innovation incompletely covered the spec. The EXECUTE INSTRUCTIONS section needs its own set of edits, not just renumbering. Specifically:

- DELETE or REPHRASE the "Declare the Step 0 fields (§3.1)..." instruction
- DELETE the `Step 0 declarations` reference in "Territory Overview" output checklist
- UPDATE §3.1 → §3.X cross-refs after renumbering (innovation listed `§3.4 → §3.3`, `§3.8 → §3.5` but missed §3.1)

Additionally, the §2.3 line 109 reference "see §3.1" — Innovation's §2.3 edit only removes the Default-coupling block, not the entire §2.3. So the `(see §3.1)` parenthetical at line 109 remains stale. Needs edit: remove the parenthetical or rephrase ("the level is declared at invocation time" without the §3.1 reference).

### Probe (d) — §3.6 Staged execution deletion + §5.3 staging-aware telemetry (D1, D3, D4) — MATERIAL FINDING

**Prosecution:** Innovation deletes §3.6. But §5.3 Telemetry contains a "Staging-aware telemetry (when invoked under `/staged-explore` or similar)" subsection that assumes `/staged-explore` exists and that staging-execution context is in scope. After §3.6 deletion, §5.3's staging-aware section is orphaned.

**Empirical check:**
- Line 338 (§5.3): "**Staging-aware telemetry (when invoked under `/staged-explore` or similar):**"
- Lines 340–348: actual staging-aware fields (`items_surfaced_count`, `parent_pass_anchor`, `stage_index`, `branching_factor`, `resolution_evidence`)
- Line 271 (§4.3): "Per-staging coverage — when multiple `/explore` invocations contribute to a staged map — is the runner's concern (see `homegrown/runners/staged_explore.md`). The discipline reports staging-aware telemetry (§5.3) that the runner consumes to decide next-pass parameters."
- Line 200 (§3.5): "parent-pass-anchor in staging telemetry"

**Defense:** §5.3 staging-aware telemetry might still be useful: when `/explore` IS invoked under `/staged-explore` (which exists as a separate runner referenced in design-history), the telemetry fields are emitted. The fields don't presuppose `/staged-explore` definition in `/explore`'s own spec; they presuppose the runner exists somewhere.

**Prosecution-resurges:** That defense holds only if the from-scratch frame says "telemetry-for-runners" IS load-bearing for /explore. The exploration noted §5.3 Telemetry as HELPFUL but didn't drill into the staging-aware subsection specifically. Under from-scratch frame, the staging-aware fields exist for an external consumer that may not exist; they are not consulted by /explore at runtime; they may themselves be BLOAT.

**Verdict on D1+D3+D4: REFINE.** Either:
- (i) Delete the staging-aware-telemetry subsection in §5.3 alongside §3.6 (consistent with the bloat-frame; staging is runner's concern; runner reads what it needs from /explore's general output, not from a discipline-spec contract). OR
- (ii) Keep the staging-aware-telemetry but with a parenthetical noting "/staged-explore is a separate runner; see its own spec or `_design_history.md`."

Innovation chose neither; both are real options. The Refine action: surface this choice for the user; default to (i) per from-scratch frame consistency.

Same applies to:
- §4.3 Line 271: "(see `homegrown/runners/staged_explore.md`)" — project-coupling reference; should be either removed or relocated. Per from-scratch frame, /explore doesn't need to reference a runner's spec.
- §3.5 (currently §3.5 Idempotency) Line 200 — "parent-pass-anchor in staging telemetry" — depends on staging-aware fields being kept.

These are all the same coupling thread. The Refine recommendation: pick one consistent stance on /staged-explore references and apply it everywhere.

### Probe (e) — §5.5 Cross-Inquiry Merge Contract deletion + node-identity contract (D1, D3)

**Prosecution:** §5.5 contains the "node-identity contract" specifying sequential IDs (`N1`, `N1.3`, ...) for surfaced items. Other sections may depend on this implicitly (e.g., child maps referencing parents by ID).

**Empirical check:**

Sequential IDs appear ONLY in §5.5. The §5.1 Transform doesn't specify the ID format; the §3.6 Staged execution (being deleted) mentioned "child maps referencing parents by ID" (line 207).

**Defense:** The sequential ID concept is a forward-tied implementation detail (the Cross-Inquiry Merge Contract is itself spec-only / deferred-implementation). Removing §5.5 + §3.6 removes the only places that specified or used the IDs. The §5.1 Transform doesn't require any specific ID format. After deletion, /explore's runtime behavior is unaffected.

**Prosecution-resurges:** Holds. The node-identity contract is preserved in `_design_history.md` (as part of the Cross-Inquiry-Merge-Contract deferred-addition entry).

**Verdict on D1+D3: PASS.** Innovation's §5.5 deletion is safe; the node-identity contract is non-load-bearing for /explore runtime and is preserved in design-history.

### Probe (f) — §6 entire-section deletion + remaining inline cross-references (D1, D4)

**Prosecution:** Deleting §6.1–§6.4 removes all explicit cross-reference machinery. Inline cross-references throughout the spec may still need handling.

**Empirical check:** Inline cross-references in remaining content (after the planned deletions):
- §1.3 NOT-list: the "Belongs to" column with paths is dropped in P4; rows just name disciplines (sense-making, comprehend, decompose, innovate, navigation) without paths. ✓ Clean.
- §1.4 references "§4.4" (the labeling-vs-meaning heuristic). ✓ Internal, no path.
- §4.4 internal references to §1.3 and §2.3. ✓ Internal.
- §5.3 Telemetry's "Staging-aware telemetry" mentions `/staged-explore` — addressed in Probe (d).
- §4.3 Line 271: mentions `homegrown/runners/staged_explore.md` — addressed in Probe (d).

No other inline cross-references to project paths. The §6 deletion is clean assuming Probe (d)'s refinements are also applied.

**Verdict on D1+D4: PASS conditional on Probe (d)'s refinement.**

### Probe (g) — Renumbering correctness (D2, D4)

**Prosecution:** Innovation specifies consecutive renumbering within sections after deletions. Cross-references to specific section numbers will become stale.

**Empirical check (full sweep on current spec for §X.Y references that will be stale after deletions + renumbering):**

After deletions:
- §1.5 → deleted; §1.6 → renumbered to §1.5
- §3.1 → deleted; §3.2 → §3.1; §3.3 → §3.2; §3.4 → §3.3; §3.5 → §3.4; §3.6 → deleted; §3.7 → deleted; §3.8 → §3.5
- §5.5 → deleted
- §6, §7, §8 → deleted entirely

**Stale references after renumbering** (sweep — Innovation flagged some but missed others):

| Line | Stale reference | Innovation flagged? |
|---|---|---|
| Line 109 (§2.3) | `(see §3.1)` for depth-level declaration | NOT flagged; should be removed |
| Line 131 (§2.3) | `(a deferred addition; see §7)` | NOT flagged; §7 deleted; remove parenthetical |
| Line 237 (§4.1 mode 2) | `see §3.8` (type-aware probing) | Innovation noted "→ §3.5" |
| Line 245 (§4.1 mode 6) | `see §3.2` (two operational modes) | Innovation noted "→ §3.1" |
| Line 249 (§4.1 mode 8) | `sub-phase (§3.3) fires` | Innovation noted "(§3.3) keep" — WRONG; §3.3 → §3.2 |
| Line 497 (EXECUTE) | `Step 0 fields (§3.1)` | NOT flagged; §3.1 deleted |
| Line 501 (EXECUTE) | `(§3.4)` canonical cycle; `(§3.8)` type-aware probing | Innovation noted §3.4 → §3.3, §3.8 → §3.5 |
| Line 518 (EXECUTE) | `(§5.3...; staging-aware fields when applicable per §3.6)`; `follow §5.5` | NOT flagged; §3.6 and §5.5 deleted |
| Line 512 (EXECUTE) | `Step 0 declarations` | NOT flagged; deleted |

**Verdict on D2+D4: REFINE.** Innovation's "small number of internal cross-reference fixes" is undercounted. There are at least 6 stale-reference fixes needed (not 2–3 as Innovation suggested), plus the EXECUTE INSTRUCTIONS section needs its own edits.

### Probe (h) — Same-file content-addressed editing safety (D5)

**Prosecution:** Each Edit's `old_string` must be unique. If two Edits target similar `old_string`s, the second Edit will fail or apply to the wrong location.

**Empirical check:**

- **§2.3 Default-coupling block:** appears in §2.3 (lines ~152–159) AND in §3.1 (lines ~150–159; the table is identical). Innovation flagged this. ✓ Acknowledged.
- **`depth-level: D2`** appears multiple times throughout the spec (in tables, in process steps). Could affect `old_string` uniqueness if a small `old_string` is used. ⚠️ Mitigation: ensure each Edit's `old_string` has enough surrounding unique context.
- **`Step 0`** appears multiple times: §3.1 header, §3.1 body, §5.1 Transform table, §8 Summary table, EXECUTE INSTRUCTIONS. ⚠️ Edits targeting "Step 0 ..." need surrounding context.
- **`/staged-explore`** appears in §3.6, §4.3, §5.3, §6.1, §7.2. Deletions targeting `/staged-explore` blocks need to be done section-by-section with surrounding context.

**Defense:** Innovation's actual Edit specifications use full-paragraph `old_string`s with unique headings and content. The risk is mostly in renumbering Edits and small cross-reference fixes.

**Verdict on D5: PASS-with-caveat.** Caveat: the renumbering Edits and stale-reference Edits need careful `old_string` construction; the implementing agent should verify uniqueness before each Edit (or use Read first to confirm exact text).

### Probe (i) — Scope-fidelity self-check on P5 finding template (D6) — CRITICAL FOR CULTURE-FIT

**Prosecution:** The finding template MUST not reproduce the bloat patterns it identifies. Innovation claims PASS; verify directly.

**Empirical check on innovation.md P5 template:**

- ✓ No "Sources" subsection listing project-finding paths. The frontmatter has `related:` listing chain findings, but that's relationship metadata, not "Sources synthesized from."
- ✓ No Step 0 declarations table.
- ✓ No Universal anatomy reference.
- ✓ No Summary table.
- ✓ No 11-mode failure-mode enumeration.
- ✓ The Finding Summary is bullets (not table-recap); lean form.
- ✓ The Reasoning section enumerates "what was killed" by name — appropriate substantive content, not enumerative scaffolding.
- ✓ The Open Questions has Monitoring + Research Frontiers + Refinement Triggers subsections — these are required by the project's finding template (per `homegrown/protocols/conclude.md`); not bloat.
- ✓ Cross-references in the template use the project's standard `devdocs/inquiries/...` paths — these ARE project-coupled but the project's finding template expects them in `related:` frontmatter, and the body references findings without re-listing paths.

**Verdict on D6: PASS.** Innovation's scope-fidelity self-check holds.

### Probe (j) — Iteration #10 cost-benefit consistency (D8)

**Prosecution:** Sensemaking recommended truncating at sensemaking. The user overrode. Innovation produced ~6KB of REPAIR text. Was D + I valuable beyond truncate + direct-edit?

**Defense:** This Critique step is itself catching multiple Innovation MISSES (stale references in §2.3, EXECUTE INSTRUCTIONS section entirely missed, §5.3 staging-aware-telemetry not flagged, layered-territories rule vocabulary mismatch). If Innovation had been replaced by direct-edit, none of these would have been caught before commit. The critique step adds genuine value.

Decomposition's value was more modest — the 5-piece structure was structurally sensible but not load-bearing for execution. Innovation's value was real (generated the concrete Edit specs) and also REAL in that it surfaced gaps that Critique caught.

**Verdict on D8: PIPELINE WAS RETROACTIVELY JUSTIFIED.** The user's continuous-/MVL+ override produced real value via Critique catching Innovation gaps. The finding should record this honestly: "the post-Sensemaking pipeline was over-scoped per Sensemaking's own assessment, BUT Critique's value (catching Innovation gaps) was real."

D8 PASS-with-update: the finding template's cost-acknowledgment language in P5 should be slightly revised to reflect Critique's contribution. Innovation said "D + I produced supporting artifacts but added incrementally less compared to a hypothetical truncate-after-sensemaking + direct-edit alternative" — this is too generous to truncation. Critique caught real issues. REFINE the language.

### Probe (k) — Lean spec preserves the operation (D3) — CRITICAL FOUNDATION

**Prosecution:** The entire REPAIR rests on the assumption that the lean spec still supports /explore's operation.

**Walk through the post-REPAIR spec content:**

After deletions + surgical edits, the spec contains:

| Element | Status | Operation-coverage |
|---|---|---|
| Verb-meaning (definition) | KEPT (§1.1) | ✓ Definition present |
| NOT-list (without paths column) | KEPT (§1.3) | ✓ Scope-anchoring present |
| Vocabulary (labeling/anchor) | KEPT (§1.6 → §1.5) | ✓ Vocabulary present |
| Six core components | KEPT (§2.1) | ✓ Components present |
| Annotation layers | KEPT (§2.2) | ✓ Output annotations defined |
| D0–D4 depth vocabulary | KEPT (§2.3 without coupling-table) | ✓ Depth schema present |
| Two operational modes | KEPT (§3.2 → §3.1) | ✓ Modes present |
| Boundary-discovery sub-phase | KEPT (§3.3 → §3.2) | ✓ Preliminary phase present |
| Canonical cycle (7-step) | KEPT (§3.4 → §3.3) | ✓ Process present |
| Idempotency | KEPT (§3.5 → §3.4) | ✓ Behavior boundary present |
| Type-aware probing | KEPT (§3.8 → §3.5) | ✓ Process rule present |
| 10 Failure modes | KEPT (§4.1) | ✓ Quality controls present |
| Coverage criteria | KEPT (§4.2) | ✓ Convergence test present |
| Per-invocation vs per-staging | KEPT (§4.3) | ✓ Scoping clarification present (but see Probe d) |
| Labeling-vs-meaning heuristic | KEPT (§4.4) | ✓ Boundary heuristic present |
| Self-assessment | KEPT (§4.5) | ✓ Output verdict present |
| Transform | KEPT (§5.1) | ✓ Output structure present |
| Progression | KEPT (§5.2) | ✓ Versioning present |
| Telemetry | KEPT (§5.3, possibly trimmed per Probe d) | ✓ Metrics present |
| Frontier | KEPT (§5.4) | ✓ Open-question handoff present |

All necessary elements present.

**Defense:** Operation is preserved.

**Prosecution-resurges:** Wait — what about Step 0 declarations? If §3.1 Step 0 declarations is deleted AND the EXECUTE INSTRUCTIONS section isn't updated, the spec instructs `/explore` to "Declare the Step 0 fields (§3.1)..." but those fields no longer exist in the spec. The spec becomes self-contradictory.

This is precisely the gap Probe (c) identified. If Innovation's REFINE (update EXECUTE INSTRUCTIONS) is applied, operation is preserved. If not, the lean spec contains a self-contradictory instruction.

**Verdict on D3: PASS conditional on Probe (c) REFINE being applied.** If EXECUTE INSTRUCTIONS is updated to remove the §3.1 reference and simplify the field-declaration instruction, operation is preserved. If not, D3 FAILS.

---

## Phase 3 — Per-Piece Verdicts

### P1 — Create `_design_history.md` content

- D1 Completeness: PASS (Sources, §7 content, §6.4 source findings, plus new deferred-addition entries for items just removed from runtime spec)
- D2 Correctness: PASS (content preserved verbatim)
- D7 RELOCATE pattern integrity: PASS (institutional value preserved at new file)
- D9 Pattern-frontier preservation: PASS (generalizable BLOAT-audit explicitly named as research-frontier in design-history)

**Verdict: SURVIVE.** Clean.

### P2 — Loading-note edits

- D1: PASS (Sources + Anatomy reference both deleted; cross-reference to `_design_history.md` added)
- D2: PASS (one Edit with full `old_string` + `new_string`)
- D7: PASS (cross-reference makes the relocate pattern visible to readers)

**Verdict: SURVIVE.**

### P3 — Spec body bloat-block deletions (9 Edits)

- D1 Completeness: **REFINE.** The 9 deletions are correct, but Innovation missed:
  - The EXECUTE INSTRUCTIONS section at the bottom of the spec references §3.1, §3.6, §5.5, §3.8, §3.4 (multiple stale refs)
  - The §5.3 staging-aware telemetry subsection assumes /staged-explore context (orphaned after §3.6 deletion)
  - The §4.3 Line 271 reference to `homegrown/runners/staged_explore.md` (project-coupling that survives the §3.6 deletion)
- D2 Correctness: PASS for the 9 named deletions; stale-reference fixes need addition
- D3 Operation-preservation: PASS conditional on the EXECUTE INSTRUCTIONS REFINE
- D4 Coherence: REFINE per the layered-territories-rule vocabulary mismatch (Probe b) + stale references (Probe g)
- D5 Editing safety: PASS-with-caveat (renumbering Edits need careful `old_string` construction)
- D7 RELOCATE integrity: PASS

**Verdict: REFINE.** The 9 named deletions are correct; additional edits are needed for completeness:
1. **EXECUTE INSTRUCTIONS section** (lines 491–518): rewrite the "Declare the Step 0 fields (§3.1)..." instruction to remove the §3.1 reference and the explicit field list; remove the `Step 0 declarations` mention in the Territory Overview output checklist; update §3.4 → §3.3, §3.8 → §3.5, and remove `§3.6`, `§5.5` references.
2. **§5.3 Staging-aware telemetry subsection**: either delete (consistent with from-scratch frame) or annotate (with parenthetical noting /staged-explore lives in design-history). DEFAULT: delete.
3. **§4.3 Line 271** `(see homegrown/runners/staged_explore.md)`: delete the parenthetical (project-coupling).
4. **Layered-territories rule** relocated into §3.4: rephrase to use §3.4's "first scan" vocabulary, not §3.7's "Coarse scan" vocabulary.
5. **Inline stale §X.Y references**: line 109 `(see §3.1)`; line 131 `(see §7)`; line 237 (mode 2) `see §3.8` → `see §3.5`; line 245 (mode 6) `see §3.2` → `see §3.1`; line 249 (mode 8) `(§3.3) fires` → `(§3.2) fires`.

### P4 — Spec surgical edits (3 Edits)

- D1: PASS (3 named surgical edits)
- D2: PASS (each Edit has clear `old_string`/`new_string`)
- D3: PASS (kept content preserved)
- D5: PASS-with-caveat (§2.3 Default-coupling block ambiguity flagged by Innovation; use `replace_all: false` + surrounding context to disambiguate from §3.1's identical block)

**Verdict: SURVIVE.** Clean.

### P5 — Iteration #10 finding template

- D6 Scope-fidelity: PASS (verified in Probe i)
- D8 Honest cost-acknowledgment: REFINE-MINOR (Innovation's language was slightly too generous to "truncate-and-direct-edit alternative"; Critique caught real issues, justifying D + I cost)
- D9 Pattern-frontier preservation: PASS (generalizable BLOAT-audit explicitly named in Open Questions Research Frontiers)

**Verdict: SURVIVE-with-caveat.** The cost-acknowledgment language in the finding could be slightly revised to acknowledge Critique's contribution. Specifically, the line "the remaining disciplines produced concrete artifacts but added incrementally less compared to a hypothetical truncate-after-sensemaking + direct-edit alternative" could be revised to: "the remaining disciplines produced concrete artifacts AND surfaced gaps a truncate-after-sensemaking + direct-edit alternative would have committed without catching. The pipeline ran continuously per the user's /MVL+ commitment, and Critique's gap-catching value was real."

---

## Phase 3.5 — Assembly Check

The 5 pieces assemble into a REPAIR specification. Most pieces are SURVIVE; P3 is REFINE for the missed-edits gap; P5 is SURVIVE-with-minor-caveat.

**Critical question: does the assembly hold after the REFINE additions are applied?**

If the REFINE list (5 items above) is applied to P3 + the minor revision to P5, the assembled REPAIR specification is:
- Complete (all spec edits covered including EXECUTE INSTRUCTIONS)
- Correct (no stale references after renumbering)
- Operation-preserving (the spec instructs `/explore` consistently after edits)
- Coherent (vocabulary matches across relocated rules)
- Scope-fidelity preserved (finding template doesn't reproduce bloat)

The REFINE additions are NOT structurally new pieces; they are completions to P3. The decomposition's 5-piece structure holds.

**Assembly verdict: REFINE (apply the 5 REFINE additions to P3 + the minor P5 wording revision; then SURVIVE).**

---

## Phase 4 — Coverage + Convergence + Signal

### Coverage

- 11 probes resolved per Innovation's request: (a) PASS, (b) REFINE, (c) REFINE-CRITICAL, (d) REFINE, (e) PASS, (f) PASS-conditional, (g) REFINE, (h) PASS-with-caveat, (i) PASS, (j) PASS-with-update (D8), (k) PASS-conditional
- 9 dimensions evaluated; project-specific risk axes all addressed
- Per-piece verdicts: 3 SURVIVE (P1, P2, P4), 1 REFINE (P3), 1 SURVIVE-with-minor-caveat (P5)

### Convergence

- Clean SURVIVE present (P1, P2, P4)
- One REFINE with concrete refinement direction (P3 — 5 specific additions enumerated)
- Landscape STABLE — no new candidate shapes emerging

**Convergence criteria check:**
- ✓ At least one SURVIVE — P1, P2, P4 all SURVIVE
- ✓ Landscape stable
- ✓ No unexplored regions topologically likely to contain viable alternatives
- ✓ Accumulator shows decreasing rate of new information per iteration

### Signal

**ITERATE with concrete direction — apply the REFINE additions to P3 and the minor wording revision to P5, then PROCEED to CONCLUDE.**

The REFINE direction is fully specified:

1. **EXECUTE INSTRUCTIONS section** (lines 491–518 in current spec): rewrite to remove §3.1 reference; simplify field-declaration instruction; update §3.4 → §3.3, §3.8 → §3.5; remove §3.6, §5.5 references; remove `Step 0 declarations` from Territory Overview checklist.
2. **§5.3 Staging-aware telemetry subsection**: delete (consistent with from-scratch frame).
3. **§4.3 Line 271**: delete the `(see homegrown/runners/staged_explore.md)` parenthetical.
4. **Layered-territories rule** relocated into §3.4: rephrase to use "first scan" vocabulary.
5. **Inline stale §X.Y references**: 5 specific line-level fixes enumerated.

Plus P5 minor revision: cost-acknowledgment language adjusted to acknowledge Critique's gap-catching value.

The implementing agent (whether the user or an assistant invoked after CONCLUDE) should apply these REFINE additions alongside the original P3 edits during the actual REPAIR application.

---

## Convergence Telemetry

- **Dimension coverage:** 9 dimensions; all 4 project-specific risk axes mapped. PASS.
- **Adversarial strength:** STRONG. Prosecution constructed real critiques on D1+D2+D3 (the critical dimensions); defense conceded where prosecution landed; multiple refinements identified with concrete direction.
- **Landscape stability:** STABLE. The REFINE additions are completions to the existing pieces; no new pieces required.
- **Clean SURVIVE present:** YES (P1, P2, P4). REFINE present (P3). SURVIVE-with-caveat (P5).
- **Failure mode check:**
  - Wrong dimensions? No — dimensions extracted from sensemaking + decomposition + Innovation's claims.
  - Rubber-stamping? No — REFINE-CRITICAL on P3 is a real finding.
  - Nitpicking? No — the REFINE additions are about real broken cross-references and a self-contradictory EXECUTE INSTRUCTIONS section, not about cosmetic style.
  - Dimension blindness? No — all project-specific risk axes mapped.
  - False convergence? No — convergence reached on a real SURVIVE + concrete REFINE direction.
  - Evaluation drift? No — dimensions stable across the 11 probes.
  - Self-reference collapse? No — Probe (i) verified scope-fidelity empirically.

**Overall: PROCEED to CONCLUDE.**

The REFINE additions are concrete enough that they can be applied during CONCLUDE-phase finding compilation, OR as additional Next Action items in the finding's MUST section so the implementing agent applies them alongside the original Edits. Either path produces a complete, correct, operation-preserving REPAIR.
