# Exploration: wayfinding_navigation_unification_check

## User Input

`devdocs/inquiries/wayfinding_navigation_unification_check/_branch.md`

Read _branch.md and _state.md. Question: should /wayfinding be deleted in favor of /navigation given end-goal trajectory of merging loops + multi-head loops? Map the territory before sensemaking.

---

## Mode + Entry Point

- **Mode:** hybrid — artifact exploration (concrete files: /wayfinding.md, /navigation.md, prior findings, enes/desc.md) + possibility exploration (candidate verdicts: DELETE / KEEP / REFACTOR / RENAME).
- **Entry point:** signal-first. The user has surfaced a specific challenge (delete /wayfinding given end-goal trajectory). Probe the signal first, then scan outward.

---

## Cycle 1 — Signal probe + concentric scan

### What was scanned

Read `commands/wayfinding.md` (381 lines) in full. Read `commands/navigation.md` (491 lines) in full. Read prior related inquiries' `_branch.md` files. Read enes/desc.md. Checked homegrown/ skill-folder structure. Found `thinking_disciplines/old_meta-search.md`.

### What was found — the critical finding

`commands/navigation.md` line 439-441 explicitly declares:

> **"Navigation REPLACES wayfinding."** Wayfinding produced one direction (the "highest-impact" move). Navigation produces the FULL space of directions. Wayfinding was navigation + implicit selection in one step. Navigation separates them: enumerate first, select separately. The separation is an improvement — you see everything before committing.

**The prior `inquiry_md_remaining_value_audit/finding.md` MISSED this.** The prior audit's verdict ("/navigation does not subsume /wayfinding; different cognitive roles, both stay") directly contradicts /navigation's own shipped spec. The user's challenge is well-grounded — they spotted what the prior audit's exploration phase didn't (the prior audit ran classic /MVL pipeline S→I→C without an exploration phase, which is exactly the failure mode that motivated this inquiry's use of /MVL+).

### Additional ground-level evidence

1. **`homegrown/navigation/SKILL.md`** description (line 7): *"...when /wayfinding's single-direction selection is too narrow..."* — positions /wayfinding as a narrower tool, not a peer.

2. **`homegrown/` skill folder structure:** has `navigation/` but NO `wayfinding/`. The recent agent-skills reorganization gave canonical disciplines their own SKILL.md + references/ pattern. /wayfinding was not given one. This is empirical signal that /navigation is the canonical-positioned discipline at the skill-folder layer.

3. **`commands/navigation.md` line 487-488:** explicit mention of "Between branches (during multi-headed execution) — Branch 1 completed. Branch 2 is still running. Navigation re-reads the state..." — direct evidence multi-head execution is in /navigation's stated use cases.

4. **`thinking_disciplines/old_meta-search.md` line 1:** *"this is now edited and called wayfinding"* — confirms /wayfinding inherited from the older meta-search discipline. /navigation is a NEWER discipline that was designed after /wayfinding.

5. **`enes/desc.md` (the autonomy ladder canonical home):** explicitly names the goal: *"a cognitive system that... runs parallel MVL loops with cross-comparison."* The end-goal trajectory the user surfaced (multi-head loops, merging loops) IS in enes/desc.md.

### Signals detected

- **High-priority signal:** /navigation has shipped a "REPLACES wayfinding" claim. Need to investigate whether that claim was acted on (e.g., is there a deprecation note in /wayfinding.md? Are there cross-references that point /wayfinding readers to /navigation?). Probe needed.
- **High-priority signal:** /wayfinding has unique substance (Three-Layer Awareness Model, RECONSIDER sub-actions, threshold self-adjustment, layer-priority resolution, reachability/gates) that /navigation doesn't have. Need to map what would be lost on deletion.
- **High-priority signal:** prior `wayfinding_fundamental_fix` inquiry diagnosed /wayfinding has a foundational identity contradiction. Need to read its sensemaking output.
- **Medium-priority signal:** prior `sic_navigation_integration/critique.md` already concluded the integration design (navigation in MVL's iteration-complete; selection separate from enumeration). Need to map what was concluded.
- **Medium-priority signal:** prior `navigation_placement/critique.md` concluded the two-tier architecture (Core SIC + Boundary R+N). Need to map.

### Resolution decision

Zoom in on three high-priority signals before scanning further. The user-flagged challenge is the primary signal; probe deepest there.

---

## Cycle 2 — Probe 1: /wayfinding's unique substance vs /navigation

### What's in /wayfinding (canonical) that's NOT in /navigation

A discipline-by-discipline map of wayfinding's substance:

| /wayfinding feature | What it is | In /navigation? |
|---|---|---|
| **Three-Layer Awareness Model** (Present / Trend / Memory) | Temporal integration framework that drives move selection — Present senses position/heading/reachability; Trend senses velocity/acceleration/goal-distance; Memory senses kill conditions / survival conditions / near-misses / dependencies | **NO.** /navigation has no temporal layering. It enumerates types from a flat 15-type taxonomy without layered awareness. |
| **Six steering moves** (NARROW / BROADEN / SHIFT / DIAGNOSE / TERMINATE / RECONSIDER) | Each driven by a specific awareness layer; clear trigger conditions; clear directives | Partial. NARROW ↔ DEEPEN+REFINE; TERMINATE ↔ TERMINATE; RECONSIDER ↔ REVISIT (loosely). DIAGNOSE has no equivalent. BROADEN/SHIFT have messy partial overlaps with WIDEN/DIFFERENT APPROACH. |
| **RECONSIDER sub-actions** (RESURRECT / INVALIDATE / REVERT) | Three directions of past-verdict re-evaluation: dead→viable, alive→dead, refined→pre-refinement | **NO.** /navigation's REVISIT is one-directional ("re-evaluate a prior finding under new conditions") without sub-action structure. |
| **Self-adjusting threshold for RECONSIDER** | Threshold for triggering reconsideration self-adjusts based on loop state (early=low, late=high, no-survivors=minimum, near-convergence=maximum) | **NO.** /navigation's REVISIT has confidence levels (HIGH/MEDIUM/LOW) but no self-adjusting threshold logic. |
| **Layer-priority resolution** | When layers produce conflicting signals, Memory > Trend > Present | **NO.** /navigation has no analog (no layers, no conflict resolution). |
| **Reachability / Gates analysis** | Topology of the landscape: which regions accessible vs blocked-behind-prerequisite-gates; gates have blocked-region + condition + open/closed state | **NO.** /navigation has UNBLOCK as a type ("resolve a dependency preventing progress"), but UNBLOCK acts on a known blocker; reachability is the cognitive operation of seeing the gates BEFORE they're recognized as blockers. |
| **Failure modes for steering** (steering-too-early, steering-too-late, false RECONSIDER, missed RECONSIDER, layer-conflict-paralysis, threshold miscalibration, gate blindness — 7 modes) | Specific steering-related failure patterns with prevention strategies | Different. /navigation has its own 5 failure modes (premature filtering, recency bias, action bias, enumeration without reasoning, scope fixation) — relevant to enumeration not steering. |
| **The core question** (*"what action would change the landscape MOST?"*) | Information-maximizing question that adapts to search state | **NO direct equivalent.** /navigation enumerates without ranking by impact. |

### What's in /navigation that's NOT in /wayfinding

| /navigation feature | What it is | In /wayfinding? |
|---|---|---|
| **15-type taxonomy** (Content / Process / Context categories) | Comprehensive type system for next-directions | Partial — 6 moves overlap with 4 of the 15 types but not the same partitioning |
| **Auto-derivable vs human-judgment split** | Explicit autonomy-ladder boundary: 11 auto-derivable types from C verdicts + telemetry + scope check; 4 human-judgment types (REFRAME, REVISIT, DIFFERENT APPROACH, CONSOLIDATE) | **NO.** /wayfinding is human-driven without a documented autonomy split. |
| **Confidence symbols** (■ HIGH / ○ MEDIUM / · LOW) | Per-item confidence assessment | Partial — /wayfinding has threshold logic for RECONSIDER but not per-move confidence symbols. |
| **Excluded section** | Each type explicitly considered and either included or excluded with reasoning | **NO.** /wayfinding produces ONE move; doesn't enumerate-then-exclude. |
| **Guidelines per item** (3-6 with per-guideline WHY) | Independent guideline pointers per direction | **NO.** /wayfinding produces one directive per move, not multi-guideline output. |
| **Independent invocation outside MVL** | Can run on raw text, project context, between branches | Yes, somewhat — /wayfinding can also run on input outside SIC, but its substance is iteration-boundary-focused. |
| **Multi-head explicit support** | "Between branches (during multi-headed execution): Navigation re-reads the state..." | **NO.** /wayfinding selects ONE direction; multi-head needs many directions in parallel. |

### The structural picture

- **/navigation is the BROADER discipline** — enumeration covers more ground (15 types vs 6 moves), has more output structure (guidelines, confidence, excluded), explicit autonomy-ladder integration, multi-head explicit support.
- **/wayfinding is the DEEPER discipline** — temporal awareness (3 layers), structured re-evaluation (RECONSIDER sub-actions), threshold adaptation, conflict resolution, reachability/gates topology.

If /wayfinding is deleted without migration, the project loses substantial unique substance (especially: Three-Layer Awareness, RECONSIDER's sub-action structure, threshold self-adjustment, layer priority, reachability/gates). The question for sensemaking: are these features load-bearing, or are they workable-without?

---

## Cycle 3 — Probe 2: /wayfinding_fundamental_fix's diagnosis

### What that prior inquiry concluded (sensemaking SV6, no finding.md exists yet)

> **Root cause (foundational):** The definition scopes wayfinding to state awareness ("sense where the search stands") but the core question demands action evaluation ("what action would change the landscape MOST?"). The mechanism can't answer its own question.

> **Three missing capabilities:** Goal awareness (know what we're trying to achieve), Impact assessment (for each action, how much does it advance the goal?), Path enumeration (see ALL reasonable next actions, not just plan items).

### Implication for THIS inquiry

The prior inquiry diagnosed /wayfinding as structurally broken AT ITS CORE — its definition (state awareness) doesn't match its core question (action evaluation). It identified three missing capabilities, two of which (goal awareness, path enumeration) /navigation already has. The third (impact assessment) is partially in /navigation via confidence levels but not as explicit impact-toward-goal scoring.

This is convergent evidence that /navigation may be the structurally-better-grounded discipline for the iteration-boundary cognitive operation — and /wayfinding's "fundamental fix" might be "redirect the operation to /navigation."

But the prior inquiry's recommended fix was different — it proposed expanding /wayfinding's layers (add Goal + Possible Actions to Present layer; add Goal Velocity to Trend layer). That fix has not been applied. /wayfinding remains in its diagnosed-broken state. So three options:

1. Apply the wayfinding_fundamental_fix patch and keep /wayfinding (work the prior inquiry's verdict).
2. Delete /wayfinding and absorb its load-bearing features into /navigation (the user's proposal).
3. Refactor /wayfinding to be a thin selection-layer over /navigation.

Sensemaking will need to evaluate these.

---

## Cycle 4 — Probe 3: prior findings' positions

### Findings + critiques surveyed

| Inquiry | Status | What was concluded |
|---|---|---|
| `navigation_placement` | No finding.md, but critique.md has full assembly verdict | **Two-tier architecture confirmed:** Core (S → I → C) + Boundary (R + N optional). Navigation gets own spec, command, failure modes, telemetry. R feeds N optionally; N works without R, works better with R. |
| `sic_navigation_integration` | No finding.md, critique.md complete with "Complete Design" section | **Design confirmed:** Navigation in MVL's iteration-complete; produces typed questions with confidence + WHY + excluded; map in `_state.md`; branches as sub-folders; enumeration only — selection is separate; use vocabulary manually first, build auto-production when proven. |
| `wayfinding_fundamental_fix` | No finding.md, sensemaking SV6 reached | **/wayfinding has a foundational identity contradiction.** Diagnosed three missing capabilities. Proposed fix (expand layers) not applied. |
| `post_completion_navigation` | finding.md complete | TERMINATE pointer is a lightweight REVISIT shortcut. **"Full navigation remains available when the user wants the complete possibility space."** Navigation positioned as the comprehensive tool. |
| `search_equals_navigation_plus_x` | No finding.md, mid-process | L5: "Navigation enumerates WITHOUT selecting. It maps the space but doesn't choose." "The full loop is: SIC → R → N → Select → next SIC → ... → goal reached." **Selection is a separate operation that consumes navigation's output.** |
| `sic_as_wayfinder` | No finding.md, mid-process | (Question: how can SIC perform wayfinding? Premise: wayfinding is structurally distinct from S/I/C — but this premise pre-dates /navigation's "REPLACES wayfinding" claim.) |

### What the surveys reveal

The project has been progressively positioning /navigation as the canonical boundary discipline:
- /navigation got a spec, a command, a SKILL.md, a references/ folder, an autonomy-ladder split, multi-head explicit support.
- /wayfinding has stayed where it was (post-old-meta-search-split), with one fundamental-fix attempt that didn't ship.

Three of the prior inquiries explicitly say or imply /navigation is the canonical enumeration discipline and selection is a downstream operation:
- `sic_navigation_integration`: "enumeration only — selection is separate."
- `search_equals_navigation_plus_x`: "Navigation enumerates WITHOUT selecting."
- `post_completion_navigation`: "Full navigation remains available when the user wants the complete possibility space."

The prior `inquiry_md_remaining_value_audit` (just completed) concluded "/navigation does not subsume /wayfinding; different cognitive roles, both stay." **This conclusion contradicts /navigation's own shipped spec AND the prior `sic_navigation_integration` and `search_equals_navigation_plus_x` inquiries' positions.** It's an outlier.

The most likely explanation: the prior audit's classic /MVL pipeline (S → I → C, no exploration) didn't surface the territory that an exploration pass surfaces. The user's intuition that the prior audit's verdict needed re-examination is correct — and is exactly why they invoked /MVL+ for this inquiry.

---

## Cycle 5 — Probe 4: end-goal trajectory in enes/desc.md

### What enes/desc.md says

The end-goal definition includes:
- **"runs parallel MVL loops with cross-comparison"** — explicit multi-head loop architecture.
- **"can handle extremely hard problems with year-long execution plans, proposes its own architectural improvements"** — the autonomous-improvement loop.
- **Autonomy ladder Levels 0-4+:** Bootstrap → Reviews all → Reviews uncertain → Strategic → Observer → Optional. Human role monotonically decreases.
- **Baldwin cycles** as the evolutionary mechanism: Predictive RC → Retrospective RC → calibration data → spec changes.

### Implication for THIS inquiry

Multi-head architecture is explicitly the end-goal trajectory the user named. Under multi-head:
- Each head needs its own direction. Heads don't all do the same thing.
- A dispatcher (or each head autonomously) consumes the enumeration of possible directions and picks one for itself.
- Selection per head is downstream of enumeration.
- Enumeration is the substrate.

This is direct support for the user's argument: enumeration (navigation) is more end-goal-aligned than selection (wayfinding).

But also: under multi-head, the OUTCOMES from heads need integration. Cross-comparison happens. RECONSIDER may apply across heads ("Head 2 found something that invalidates Head 1's kill condition"). The temporal awareness in /wayfinding's Memory layer becomes more important under multi-head, not less, because there are more verdicts from more heads to potentially reconsider.

So the trajectory might support BOTH:
- Enumeration as primitive (navigation) — for dispatching heads.
- Layered awareness with explicit RECONSIDER (wayfinding's substance) — for cross-head verdict integration.

The question for sensemaking: do these belong in the SAME discipline (unify into /navigation with layered structure imported) or two disciplines (enumeration discipline + verdict-integration discipline)?

---

## Cycle 6 — Possibility scan: candidate verdicts

### Candidates the user might consider

**Candidate A: DELETE /wayfinding entirely. Migrate ONLY structurally-essential features into /navigation.**
- Sub-A.1: Add DIAGNOSE as 16th /navigation type.
- Sub-A.2: Migrate RECONSIDER sub-actions (RESURRECT/INVALIDATE/REVERT) into /navigation's REVISIT.
- Sub-A.3: Add reachability/gates analysis to /navigation.
- Sub-A.4: Decide whether Three-Layer Awareness Model migrates or is dropped.
- Removed files: `commands/wayfinding.md`. Decommission `thinking_disciplines/old_meta-search.md` (already marked deprecated).

**Candidate B: KEEP both with refined roles** (the prior `inquiry_md_remaining_value_audit` verdict).
- Apply wayfinding_fundamental_fix patches.
- Add explicit cross-references between /wayfinding and /navigation noting their complementary roles.
- /wayfinding for selection at iteration boundary; /navigation for enumeration of the full possibility space.
- Risk: contradicts /navigation.md's own "REPLACES wayfinding" line; two related disciplines diverge.

**Candidate C: REFACTOR /wayfinding into a thin selection-mode wrapper over /navigation.**
- /wayfinding becomes "run /navigation, then apply Three-Layer Awareness to pick ONE move from the enumerated map."
- The 6 moves remain as a smaller curated subset of /navigation's 15 types.
- /wayfinding owns the Three-Layer Awareness Model + RECONSIDER threshold/layer-priority/sub-actions + reachability/gates. /navigation owns enumeration.
- Both files smaller; /wayfinding becomes ~80-150 lines, focused only on selection-from-enumeration.

**Candidate D: RENAME /navigation → /search-or-something AND deprecate /wayfinding.**
- Reframe: there's only one discipline, named more centrally. /wayfinding's content gets folded in. The "selection vs enumeration" distinction becomes operating modes within the unified discipline rather than two separate specs.

**Candidate E: SPLIT differently — selection layer, enumeration layer, awareness layer as three thin specs.**
- /enumerate (the 15-type taxonomy alone)
- /select (single-direction selection logic — Three-Layer Awareness, layer priority)
- /reconsider (RECONSIDER sub-actions + threshold logic)
- All ride on top of a shared substrate. Possibly over-engineering.

**Candidate F: Time-conditional answer.**
- For Level 0-1 (now): keep both, /wayfinding is the daily driver, /navigation is for explicit enumeration.
- For Level 2+ (multi-head era): delete /wayfinding, fold features into /navigation.
- The verdict depends on the project's current autonomy level.

### Initial possibility-space density

Density is highest around candidates A and C. A is the "user's proposal direct application" path. C is the "preserve unique substance via thin wrapper" path. B is the prior audit's verdict, retained for contrast. D and E are radical rename/split options. F is a time-conditional fallback.

Sensemaking will need to collapse these candidates against structural anchors.

---

## Cycle 7 — Jump scan + frontier check

### Jump scan: deliberate search in unrelated direction

Searched `commands/` for any spec that references both /navigation AND /wayfinding to check if cross-reference territory is well-mapped:

- `commands/inquiry.md` references both (the wayfinding-table + the implicit navigation use). The just-completed audit's punch list adds a /navigation cross-reference paragraph noting DIAGNOSE-uncovered.
- `commands/MVL.md` and `commands/MVL+.md` mention `/navigate` (in the iteration-NO branch's "if multiple directions emerged, run /navigate").
- No spec explicitly contrasts the two cognitive roles in canonical text.
- /navigation's explicit "REPLACES wayfinding" claim was made unilaterally in /navigation.md without a corresponding deprecation note in /wayfinding.md.

### Frontier state

- **Where the boundary is now:** what /wayfinding's unique substance does in operational terms (Three-Layer Awareness, RECONSIDER sub-actions, threshold self-adjustment, layer priority, reachability/gates) is mapped at the spec level. What it does in PRACTICE (does the user actually invoke it? do its features actually fire?) is not directly observable from this exploration.
- **What's beyond the frontier:** empirical usage data. How often is /wayfinding invoked? How often does each of its moves fire? When it does fire, does the Three-Layer Awareness add value over /navigation's flat enumeration? This is testable but not from current files.
- **Bounded gaps:** the unmapped region (empirical usage) is bounded — sensemaking can reason about it via the user's stated empirical observation ("/wayfinding is not used so much now") and via the prior `wayfinding_fundamental_fix` which flagged broken behavior.

### Convergence check

- ✓ Frontier stability: the major regions are mapped at sensemaking-ready resolution.
- ✓ Declining discovery rate: cycles 5-7 produced fewer NEW types of anchors than cycles 1-4.
- ✓ Bounded gaps: the unmapped region (empirical usage) is bounded by stated user observations.

**Convergence reached.** Exploration done.

---

## Final Deliverable — The Structural Map

### 1. Territory Overview

The territory has four major regions:

- **Spec content** — what /wayfinding and /navigation contain, how they overlap, what's unique to each.
- **Prior inquiry positions** — what the project has already concluded (or attempted to conclude) about both disciplines.
- **End-goal trajectory** — what enes/desc.md and the user's framing imply for the architectural choice.
- **Candidate verdicts** — possibility space of how to resolve the wayfinding/navigation question.

### 2. Inventory

**Spec content inventory:**
- /wayfinding.md (381 lines): Three-Layer Awareness Model + 6 moves + RECONSIDER sub-actions + threshold logic + layer priority + reachability/gates + 7 failure modes.
- /navigation.md (491 lines): 15-type taxonomy + Content/Process/Context categories + auto-derivable/human-judgment split + confidence symbols + per-item guidelines + excluded section + 5 failure modes + multi-head explicit support + EXPLICIT "REPLACES wayfinding" claim.

**Prior inquiry inventory:**
- `navigation_placement`: confirmed two-tier architecture (Core SIC + Boundary R+N).
- `sic_navigation_integration`: confirmed integration design ("enumeration only — selection is separate").
- `wayfinding_fundamental_fix`: diagnosed /wayfinding's foundational identity contradiction; proposed expansion patch (not applied).
- `post_completion_navigation`: shipped a lightweight REVISIT shortcut (TERMINATE pointer); positions /navigation as comprehensive tool.
- `search_equals_navigation_plus_x`: established "Navigation enumerates WITHOUT selecting."
- `sic_as_wayfinder`: unfinished question pre-dating /navigation's claim.
- `inquiry_md_remaining_value_audit` (just completed): outlier — concluded "different cognitive roles, both stay" without recognizing /navigation's "REPLACES wayfinding" claim. **The verdict this inquiry tests.**

**End-goal inventory:**
- enes/desc.md: parallel MVL loops with cross-comparison; autonomy-ladder Levels 0-4+; Baldwin cycles; year-long execution plans.

**Candidate verdicts inventory:** A (delete with migration), B (keep both, prior audit verdict), C (refactor to thin wrapper), D (rename + fold), E (split into three), F (time-conditional).

### 3. Signal Log

| Signal | Where detected | Probed? | Status |
|---|---|---|---|
| /navigation.md "REPLACES wayfinding" claim | navigation.md line 441 | ✓ | High-priority. Drives the inquiry's core finding direction. |
| Unique substance in /wayfinding | wayfinding.md content | ✓ | High-priority. Determines what would be lost on deletion. |
| /wayfinding's foundational identity contradiction | wayfinding_fundamental_fix sensemaking | ✓ | High-priority. /wayfinding is structurally compromised. |
| Multi-head explicit support in /navigation | navigation.md line 487-488 | ✓ | High-priority. Aligns with end-goal trajectory. |
| Prior inquiries' convergent position | navigation_placement, sic_navigation_integration, search_equals_navigation_plus_x | ✓ | Medium-priority. Establishes precedent. |
| homegrown/ skill folder asymmetry (navigation/ exists, wayfinding/ doesn't) | homegrown/ ls | ✓ | Medium-priority. Empirical signal of canonical positioning. |
| `inquiry_md_remaining_value_audit`'s outlier verdict | the just-completed prior audit | ✓ | Medium-priority. Explains the verdict that motivated this inquiry. |
| Empirical usage frequency (how often /wayfinding fires) | not directly observable from files | DEFERRED | Bounded gap; sensemaking can reason via user statements. |

### 4. Confidence Map

| Region | Confidence | Reasoning |
|---|---|---|
| /wayfinding's unique substance | **Confirmed** | Read full file; mapped feature-by-feature. |
| /navigation's coverage of /wayfinding's moves | **Confirmed** | Read full file; mapped 6-to-15 overlap precisely. |
| /navigation's "REPLACES wayfinding" claim | **Confirmed** | Direct quote from spec. |
| Prior inquiries' positions | **Confirmed** | Read each _branch.md; checked critique.md/sensemaking.md verdicts where finding.md absent. |
| End-goal trajectory (enes/desc.md) | **Confirmed** | Read in full; multi-head architecture explicit. |
| Whether prior fundamental-fix patches were applied | **Inferred** | wayfinding.md content matches pre-fix state per the prior sensemaking SV6 description. |
| Candidate verdict viability | **Scanned** | Six candidates enumerated; structural assessment deferred to sensemaking. |
| Empirical usage of /wayfinding's features in practice | **Unknown (bounded)** | User stated /wayfinding is "not used much"; that's the only available signal. |
| Empirical usage of /navigation's features in practice | **Unknown (bounded)** | Same — user-stated usage signal only. |

### 5. Frontier State

**STABLE.** All major regions mapped at sensemaking-ready resolution. The bounded unknowns (empirical usage) can be reasoned about via user-stated observations and the prior audit's findings.

### 6. Constraints any answer must honor

- **/navigation.md's "REPLACES wayfinding" claim is shipped text** that any answer must engage with — either honor it (delete or refactor /wayfinding), reverse it (keep both, edit /navigation.md to remove the claim), or qualify it (clarify the claim's intended scope).
- **/wayfinding's unique substance** (Three-Layer Awareness, RECONSIDER sub-actions, threshold logic, layer priority, reachability/gates) is real architectural content that any DELETE answer must address — either migrate, accept loss with reasoning, or defer migration with named gates.
- **Prior `inquiry_md_remaining_value_audit`'s recommended Configuration** has Step 4 (D.1 — add /navigation cross-reference paragraph noting DIAGNOSE-uncovered) which directly assumes /wayfinding stays canonical. **If this inquiry concludes /wayfinding should be deleted or refactored, that prior punch list needs revision before being applied.**
- **End-goal trajectory** (multi-head + merging loops, per enes/desc.md) must be honored in the verdict's reasoning.
- **Autonomy-ladder positioning** (per /navigation.md's auto-derivable vs human-judgment split) must be preserved or extended.
- **Empirical observation** (/wayfinding underutilized; daily driver is /MVL with implicit NARROW) is a present-state signal but not a structural argument by itself.
- **The prior `wayfinding_fundamental_fix`'s diagnosis** must be addressed by any answer — either work the fix (Candidate B or C path), supersede it (Candidate A path: delete makes the fix moot), or explicitly defer it.

### 7. Frontier Questions for Sensemaking

1. **Is selection a different cognitive operation, or is it "enumerate-then-pick-one" (a derived operation)?** This is the central structural question. /navigation.md's claim implies "selection is a routine downstream operation"; /wayfinding's Three-Layer Awareness Model implies "selection involves substance enumeration alone doesn't capture."

2. **Does /wayfinding's unique substance (Three-Layer Awareness, RECONSIDER sub-actions, threshold, layer priority, reachability) belong in a SELECTION discipline or in the ENUMERATION discipline?** If it belongs in selection, /wayfinding's substance is unique-to-selection (and Candidate C's thin-wrapper makes sense). If it belongs in enumeration (because enumeration produces the awareness map and selection just reads off it), then migration into /navigation is structurally correct (Candidate A path).

3. **Under multi-head architecture, does selection happen at all? Or do heads dispatch from enumeration directly?** If heads autonomously pick from the enumeration, selection-as-discipline becomes obsolete and /wayfinding's "pick ONE" framing is a single-head artifact. If a dispatcher selects FOR each head, selection is still load-bearing but its locus changes.

4. **What's the migration cost vs deletion cost?** Migrating /wayfinding's substance into /navigation expands /navigation (likely from 491 to ~600+ lines) and changes /navigation's enumeration-purity. Deleting without migration loses the substance. Doing nothing leaves the contradiction with /navigation's "REPLACES wayfinding" claim unresolved.

5. **Should /navigation.md's "REPLACES wayfinding" claim be honored as-shipped, or is it itself an outlier that needs revision?** The claim was made unilaterally in /navigation.md without coordinated changes elsewhere. If the actual project verdict is "different roles, both stay," /navigation.md should be edited. If the actual verdict is "navigation replaces wayfinding," /wayfinding should be deleted. The contradiction can't persist.

6. **Is the prior `inquiry_md_remaining_value_audit`'s verdict simply wrong (verdict reversal needed), or was it correct under a narrower scope (selection-as-distinct-role) that the user's end-goal framing now broadens?** This affects how this inquiry's finding relates to the prior audit.

### 8. Recommendations for Sensemaking

Sensemaking should ground its analysis in:
- The shipped text contradiction (/navigation.md says "REPLACES wayfinding" but /wayfinding still exists with unique substance and is referenced by other specs).
- The prior fundamental-fix diagnosis (/wayfinding has a foundational identity contradiction).
- The end-goal trajectory (multi-head loops; enumeration as primitive).
- The unique-substance map (what would be lost on deletion).

Sensemaking should produce a clear verdict on each frontier question above, then a recommended Configuration that the decomposition-innovation-critique pipeline can develop into a concrete punch list.

---

## Cross-Run Tracking (Telemetry)

* **Mode:** hybrid (artifact + possibility)
* **Cycles run:** 7
* **Convergence criteria:** all three met (frontier stable, declining discovery rate, bounded gaps).
* **Failure modes observed:** None.
  - Premature depth? No — broad scan in cycle 1 before probes in cycles 2-5.
  - Surface-only scanning? No — probed at depth on three high-priority signals.
  - False confidence? Mitigated via jump scan in cycle 7.
  - Premature termination? No — convergence criteria explicitly checked.
  - Re-exploration? No — frontier-tracked across cycles.
  - Completeness bias? Tested — included Candidate B (the prior audit's verdict) explicitly even though the territory disfavored it.
* **Coverage assessment:** Spec content fully mapped; prior findings surveyed; end-goal trajectory grounded; candidate verdicts enumerated. The empirical usage region is bounded-unknown; sensemaking can reason about it via user-stated observations.
* **Discovery rate trend:** high in cycles 1-3 (major findings: REPLACES claim, foundational fix diagnosis, two-tier confirmation), declining in cycles 5-7 (jump scan and possibility scan produced fewer new anchors).
* **Overall: PROCEED to sensemaking.**
