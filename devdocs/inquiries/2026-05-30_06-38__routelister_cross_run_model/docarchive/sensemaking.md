## User Input

`devdocs/inquiries/2026-05-30_06-38__routelister_cross_run_model/_branch.md` (prior output: surfacing.md; workspace — 21-01 sketch + 22-40 individuation + 00-13 index + routeman §3.5/§3.6/§5.8). Operationalize the cross-run model: OT1 three operations, OT2 discovery, OT3 scopes/convergence/staleness, OT4 where it sits in the pipeline.

---

# Structural Sensemaking — Routelister's Cross-Run Model

## SV1 — Baseline Understanding

Initial read: the cross-run model isn't a new phase — it's that the listing's *running identity-set* (which `22-40` already maintains and `00-13` already persists as the index) is **loaded at the start of a run and saved at the end**. That single reframe operationalizes everything: read-prior = LOAD the index (scoped), integrate = the listing pipeline on a *pre-seeded* set, persist = SAVE back. Discovery dissolves (the index IS the registry). Idempotency = re-run loads the prior fixpoint and re-confirms. The work: make the three operations concrete, resolve discovery + staleness, and verify the `21-01` trace passes — without re-importing routeman's loop machinery or breaching the within-concept boundary.

---

## Phase 1 — Cognitive Anchor Extraction

**Constraints:**
- C1 — Process layer (the operations + their place in the pipeline). Structural (the index/record, `00-13`) + meaning (`22-40`) settled; this run designs the operations *on* them.
- C2 — Operationalize `21-01`'s sketch (make it concrete), don't re-sketch. Re-derive routeman's re-invocation (don't carry REVISIT/same-map). Preserve the within-concept + enrich-not-dump + idempotency guards.
- C3 — The `21-01` worked trace (root → A → B → root) is the acceptance test.

**Key Insights:**
- K1 — **The integrating insight (OT4): the cross-run model = the persistent running-identity-set.** The listing (`22-40`) maintains a running identity-set during a run (online clustering); the output schema (`00-13`) persists it as the index. So the cross-run model is just: **LOAD the index as the run's starting running-identity-set (before the sweep); the listing operates on that pre-seeded set; SAVE it back (after framing).** It is NOT a separate phase bolted onto sweep→individuate→frame — it is the running-identity-set being *persistent* rather than per-run. This unifies cross-run + listing + output into ONE object: the project's persistent, accumulating concept-map.
- K2 — **The three operations (OT1), concrete:**
  - **LOAD (read-prior):** read the identity-set/index from its known location → the run's starting running-identity-set. Scoped (K4).
  - **INTEGRATE:** = the listing pipeline on the pre-seeded set. For each swept candidate item, individuate against the loaded set (`22-40` online clustering): *match a loaded identity* → re-confirm it + attach/refresh its depth-signal (if drilled); *no match* → new identity (lean-to-split). Loaded identities the current sweep does NOT re-confirm → flag STALE. Apply any re-individuation (a depth run since last load revealed split/merge). Enrich-not-dump: a drilled identity's route carries a compact depth-*signal*, never a manifestation dump.
  - **PERSIST (add-new):** save the updated identity-set back to the index (new identities, refreshed depth-signals, re-individuations, stale flags) + append an invocation-log entry (mode/scope + added/confirmed/stale counts).
- K3 — **Discovery (OT2) dissolves: the index IS the registry.** `21-01` flagged "how does a root run find prior concept-target runs?" Answer: it doesn't scan folders — it reads the index, whose entries already carry depth-pointers (`00-13`). A concept-target run PERSISTS its depth result into the identity's entry, so the next root run finds it by LOADING the index. Discovery = reading the index's depth-pointers. (The index lives at a known per-project routelister-workspace path, since identities are project-scoped.) The open item is resolved by the artifact `00-13` already created.
- K4 — **The two scopes (OT3) = what's loaded/saved.** A **root run** LOADS the whole index, INTEGRATES breadth (sweep the territory at identity-resolution, enriched by loaded depth-signals), PERSISTS the whole. A **concept-target run** LOADS one identity's entry, INTEGRATES depth (drill its manifestations + divergences), PERSISTS that entry (with the depth result). Same three operations, parameterized by scope.
- K5 — **Idempotency-at-fixpoint via re-confirm (OT3).** A re-run LOADS the prior fixpoint; the sweep RE-CONFIRMS each loaded identity against the *current* territory. Unchanged territory+goal → re-confirms the same set, adds nothing → SAVES the same set → converged (idempotent). Changed territory → re-confirms what remains, adds new, flags missing → the output *updates* (correct: the input changed). So the model **converges, it does not drift** — changes propagate as updates relative to a fixpoint.
- K6 — **Staleness (OT3) = flag-not-delete.** Loaded identities the current sweep doesn't re-confirm are flagged STALE (kept in the index with a stale flag + last-confirmed timestamp), never silently deleted — preserving recoverability + history (visible-with-reason). A prune-policy for very-stale entries is a later option; the default is flag-not-delete.
- K7 — **The op-triple is routeman re-derived (not carried).** routeman's read-prior / recalibrate / add-new (§3.5/§5.8) → routelister's LOAD / INTEGRATE / PERSIST; routeman's *same-map* (one inquiry's evolving map) → routelister's *cross-target* (the index spans all targets); REVISIT (a loop-control type) is stripped. This is the `18-17` loop-bound test applied to the re-invocation machinery.
- K8 — **The within-concept boundary is preserved by the operations.** INTEGRATE's individuation matches an *item to an identity* (membership), never an *identity to an identity* (relation); the index entries are identity→own-depth. So LOAD/INTEGRATE/PERSIST never create inter-concept edges — the `00-13`/`18-17` boundary holds at the operation level.

**Structural Points:**
- S1 — The cross-run model = LOAD (bookend-start) + INTEGRATE (the listing on a seeded set) + PERSIST (bookend-end); the listing pipeline is unchanged, just seeded + saved.
- S2 — Discovery, scopes, convergence, staleness all fall out of "the running-identity-set is the persistent index."

**Foundational Principles:**
- P1 — Make the per-run working state persistent → cross-run memory (load/save the running-identity-set). [the insight]
- P2 — Converge, don't drift (idempotency-at-fixpoint via re-confirm); enrich, don't dump; within-concept only. [carried guards]

**Meaning-Nodes:**
- M1 — *persistent-running-identity-set (the unification)*; M2 — *LOAD/INTEGRATE/PERSIST*; M3 — *index-as-registry (discovery)*; M4 — *re-confirm → idempotency + staleness*; M5 — *scope = what's loaded/saved*; M6 — *routeman re-derived (same-map→cross-target, REVISIT stripped)*.

### SV2 — Anchor-Informed Understanding

The cross-run model is the listing's running identity-set made persistent: LOAD the index (scoped) at the start, INTEGRATE (the `22-40` listing on the pre-seeded set, with enrich-not-dump + re-individuation), PERSIST back at the end. Discovery dissolves (the index is the registry — `00-13` already created it); scopes are what's loaded/saved (root=whole, concept-target=one); idempotency holds via re-confirm (converge-not-drift); staleness is flag-not-delete. The op-triple re-derives routeman's read/recalibrate/add-new (same-map→cross-target, REVISIT stripped); the within-concept boundary is preserved (membership not relation). It is not a separate phase — it unifies cross-run + listing + output into the project's persistent concept-map.

*Meta-Inspection (H8 self-reference): operationalizing this session's own 21-01 sketch; anchored on routeman's actual §3.5/§5.8 + the loop-bound test + the acceptance-test (the trace must pass — an external check).*

---

## Phase 2 — Perspective Checking

**Technical / Logical:** the model is a load-modify-save loop over a persistent store, with the "modify" being the existing listing pipeline. That's a standard, well-understood shape (a stateful accumulator), and idempotency-at-fixpoint is the load-modify-save invariant (re-applying to a converged state is a no-op). New anchor → **K9: the model is a load-modify-save accumulator; its idempotency is the standard fixpoint property.**

**Human / User:** the user called this "#4, the last design piece." The deliverable must be concrete enough to be the LAST piece — the three operations + discovery + scope + staleness, operationalized, with the trace passing — so the next step is consolidation, not another cross-run inquiry.

**Strategic / Long-term:** the persistent-running-identity-set IS the cumulative concept-map the navigation endgoal wants — each run grows it. So this isn't just plumbing; it's the mechanism that makes routelister cumulative. Forward-aligned.

**Risk / Failure (the re-import + the drift):** two dangers — re-importing routeman's loop machinery (REVISIT/same-map) and an idempotency story that drifts. Guards: K7 (re-derive, strip REVISIT, same-map→cross-target) + K5 (re-confirm → converge-not-drift). Both explicit.

**Resource / Feasibility:** cheap — the model adds load + save bookends to the existing listing; no new pipeline. The artifact (`00-13`) and the matching (`22-40`) already exist.

**Definitional / Internal Consistency:** does "LOAD seeds the running-identity-set" contradict perceive-by-enumerate (the sweep should perceive the territory fresh)? No — the sweep still perceives the *current* territory; LOAD provides prior identities to *match against* (and re-confirm), it doesn't replace perception. A loaded identity not in the current territory is flagged stale (perception governs); the sweep can also add identities the prior didn't have. So perception leads, the loaded set assists. New anchor → **K10: LOAD assists perception (matching + enrichment); it does not replace the fresh sweep (perception still governs; stale-flagging proves it).**

**Phase / Calibration-State:** N/A.

**Self-Reference (failure mode #6):** operationalizing my own `21-01` sketch. External anchors: routeman's actual §3.5/§5.8 (the op-triple substrate); the `18-17` loop-bound test (the re-derivation lens); and crucially the **acceptance test** — the `21-01` root→A→B→root trace must produce the intended behavior (root #2 = root #1 + A/B depth-signals), an external check the design must pass (verified in Phase 3). The willingness to re-derive (strip REVISIT) rather than carry routeman is the guard against rubber-stamping. Check passed.

### SV3 — Multi-Perspective Understanding

The cross-run model is a load-modify-save accumulator over the persistent identity-set/index: LOAD (scoped) → INTEGRATE (the listing on the pre-seeded set; individuation matches, enrich-not-dump signals, re-individuation updates, unconfirmed→stale) → PERSIST (save + log). Discovery is the index-as-registry; scopes are what's loaded/saved; idempotency-at-fixpoint holds via re-confirm (LOAD assists perception, doesn't replace it); staleness is flag-not-delete. It re-derives routeman (same-map→cross-target, REVISIT stripped), preserves within-concept, and unifies cross-run + listing + output into the cumulative concept-map.

---

## Phase 3 — Ambiguity Collapse

### Ambiguity 1 — Is the cross-run model a separate phase, or the persistent running-identity-set? (OT4, the integrating crux)

**Strongest counter-interpretation:** "It must be a distinct cross-run phase — a step that explicitly goes and reads other runs and merges them. Folding it into 'the running-identity-set is persistent' hides the real cross-run work."

**Why the counter fails (structural grounds):** the listing pipeline ALREADY maintains a running identity-set (the online clustering of `22-40`), and the output schema ALREADY persists it as the index (`00-13`). A separate cross-run phase would have to build a *second* identity-set and reconcile it with the listing's — duplication with no purpose. The economical and correct design is that the listing's running-identity-set is the *same* object as the persisted index: LOAD it at start (so the sweep clusters onto a pre-seeded set), SAVE it at end. The "real cross-run work" (matching prior identities, enriching with depth-signals, re-individuating) happens *inside* the existing INTEGRATE step via the existing individuation — no separate phase needed. **Confidence:** HIGH. **Resolution:** the cross-run model is the persistent running-identity-set (LOAD/INTEGRATE/PERSIST bookending the unchanged listing), not a separate phase. This unifies cross-run + listing + output.

### Ambiguity 2 — Is discovery a folder-scan, or the index-as-registry? (OT2)

**Counter-interpretation:** "A root run must scan the workspace to find prior concept-target runs — and the first run has no index, and the index could be stale."

**Why it fails:** the index (`00-13`) records, per identity, a depth-pointer — so "which identities were drilled" is read directly from the index, no scan. A concept-target run PERSISTS its depth into the identity's entry, so the next root run finds it by LOADING. The first run simply finds an empty index and creates it on PERSIST (bootstrapping, not a special case). Staleness is handled by re-confirm (Ambiguity 3), not by avoiding the index. **Confidence:** HIGH. **Resolution:** the index IS the registry — discovery = reading the index's depth-pointers; no folder-scan; first-run bootstraps.

### Ambiguity 3 — Does idempotency-at-fixpoint hold, and does staleness break it? (OT3)

**Strongest counter-interpretation:** "If runs load the prior index and add to it, the index only grows — that's drift/accumulation, not idempotency. And if the territory changed, loaded entries are wrong."

**Why the counter fails (structural grounds):** load-modify-save is idempotent at a fixpoint by construction — re-running on *unchanged* input re-confirms the same identities, adds nothing new, and saves the same set (a no-op at the fixpoint). "Growth" happens only when the *input* changes (a new depth run, or a changed territory) — and that's not drift, it's a correct update to new input. For the changed-territory case: the sweep RE-CONFIRMS each loaded identity against the current territory; unconfirmed entries are flagged STALE (kept, not silently trusted-or-deleted). So perception governs (the current sweep decides what's real), the loaded set assists (matching + enrichment), and staleness is explicit. **Confidence:** HIGH. **Resolution:** idempotency-at-fixpoint holds (load-modify-save; re-confirm); staleness is handled by flag-not-delete; the model converges, it doesn't drift.

### Ambiguity 4 — Does this re-import routeman's loop machinery? (the re-derivation, F5)

**Counter-interpretation:** "LOAD/INTEGRATE/PERSIST is just routeman's read-prior/recalibrate/add-new renamed — you've carried the loop-built re-invocation."

**Why it fails:** the op-triple is structurally re-derived, not renamed: routeman's re-invocation is *same-map* (re-invoke ONE inquiry's evolving map via a per-folder `_route.md`) and *REVISIT-built* (resurrect/invalidate/revert prior-cycle verdicts — a loop-control type). routelister's is *cross-target* (the index spans all the project's identities/targets, not one inquiry) and REVISIT-free (the integrate step uses individuation + re-confirm, not cycle-verdict revisitation). The shape is the same (load/modify/save — a general pattern) but the *content* (what's loaded, how it's modified) is re-derived through the loop-bound test. **Confidence:** HIGH. **Resolution:** re-derived (same-map→cross-target; REVISIT stripped; the general load-modify-save shape is not loop-specific).

### Ambiguity 5 — Self-reference: does the design pass the acceptance test, or is it a comfortable operationalization of my own sketch?

**Counter:** "this just dresses up 21-01's sketch."

**Why it fails:** the design must pass the `21-01` trace (an external check): root #1 (empty index → plain breadth map, persist) → target-A (load A, drill, persist A's depth-signal) → target-B (load B, drill, persist) → root #2 (LOAD the whole index *now carrying A's + B's depth* → INTEGRATE: re-confirm identities + attach A's and B's depth-signals to their routes → PERSIST). Result: root #2 = root #1 with A and B carrying depth-signals (enrich-not-dump), idempotent at the fixpoint (had A/B not run, root #2 = root #1). The trace produces exactly the intended behavior — so the operationalization is verified, not assumed. **Confidence:** HIGH. **Resolution:** the design passes the acceptance test; the operationalization is concrete and verified.

---

### SV4 — Disambiguated Understanding

All five ambiguities resolve at HIGH confidence. The cross-run model is the persistent running-identity-set (LOAD/INTEGRATE/PERSIST bookending the unchanged listing — not a separate phase); discovery is the index-as-registry (no folder-scan; first-run bootstraps); idempotency-at-fixpoint holds via re-confirm (perception governs, the loaded set assists, staleness is flag-not-delete, converge-not-drift); it re-derives routeman (same-map→cross-target, REVISIT stripped); and it passes the `21-01` acceptance test. It unifies cross-run + listing + output into the project's cumulative concept-map.

---

## Phase 4 — Degrees-of-Freedom Reduction

**Fixed:**
- The cross-run model = the persistent running-identity-set: LOAD (scoped) → INTEGRATE (the `22-40` listing on the pre-seeded set: individuation-match / enrich-not-dump signals / re-individuation / unconfirmed→stale) → PERSIST (save + log). Not a separate phase.
- Discovery = the index IS the registry (no folder-scan; first-run bootstraps).
- Scopes = what's loaded/saved (root=whole index/breadth; concept-target=one entry/depth).
- Idempotency-at-fixpoint via re-confirm (perception governs; LOAD assists); staleness = flag-not-delete; converge-not-drift.
- Re-derives routeman (same-map→cross-target; REVISIT stripped); within-concept boundary preserved (membership not relation).
- Passes the `21-01` trace.

**Eliminated:**
- "A separate cross-run phase" — KILLED (the running-identity-set is already maintained + persisted; a second one is duplication).
- "Folder-scan discovery" — KILLED (the index is the registry).
- "Load-and-add = drift" — KILLED (load-modify-save is idempotent at the fixpoint; growth = input change, not drift).
- "It's routeman renamed" — KILLED (re-derived: cross-target, REVISIT-free).
- "LOAD replaces perception" — KILLED (LOAD assists; the sweep perceives fresh; unconfirmed→stale).

**Remaining viable (downstream; out of scope):**
- The exact index file format / path convention (structural detail; `00-13` settled the schema).
- A prune-policy for very-stale entries (a later option; default is flag-not-delete).
- The cross-run concurrency case (two runs writing the index at once — an implementation/runner concern).

### SV5 — Constrained Understanding

routelister's cross-run model is the listing's running-identity-set made persistent: **LOAD** the index (scoped — whole for root, one entry for concept-target) as the run's starting running-identity-set; **INTEGRATE** by running the `22-40` listing on that pre-seeded set (individuation matches loaded identities → re-confirm + enrich with depth-signals; no match → new identity; unconfirmed loaded → stale; depth-revealed split/merge → re-individuate); **PERSIST** the updated index + an invocation log. Discovery is the index-as-registry; idempotency-at-fixpoint holds via re-confirm (converge-not-drift; staleness flagged-not-deleted; perception governs while the loaded set assists). It re-derives routeman's re-invocation (same-map→cross-target, REVISIT stripped), preserves the within-concept boundary, passes the `21-01` trace, and unifies cross-run + listing + output into the project's cumulative concept-map.

---

## Phase 5 — Conceptual Stabilization

*Accommodation check: the perspectives converged on the load-modify-save / persistent-running-identity-set model; none destabilized. Stable.*

### SV6 — Stabilized Model — Routelister's Cross-Run Model

**The cross-run model is not a new phase — it is the listing's running identity-set made persistent. A run LOADS the index, runs the ordinary listing on that pre-seeded set, and SAVES the index back. That single reframe operationalizes the whole thing and unifies the cross-run model with the listing mechanism and the output schema into one object: the project's cumulative concept-map.**

**(OT4) Where it sits — the integrating insight.** The listing mechanism (`22-40`) already maintains a *running identity-set* during a run (online clustering); the output schema (`00-13`) already persists that set as the *index*. The cross-run model is simply that this running-identity-set is *persistent* — loaded at the start of a run, saved at the end. There is no separate cross-run phase; the cross-run work (matching prior identities, enriching with depth-signals, re-individuating) happens inside the existing INTEGRATE step. A separate phase would build a second identity-set and have to reconcile it — pointless duplication.

**(OT1) The three operations, concretely:**
- **LOAD (read-prior):** read the identity-set/index → the run's starting running-identity-set.
- **INTEGRATE:** run the ordinary listing (sweep → individuate → frame) on the *pre-seeded* set. For each swept item, individuate against the loaded set: a *match* re-confirms a loaded identity and attaches/refreshes its depth-signal (if it has been drilled); *no match* starts a new identity (lean-to-split). Loaded identities the current sweep does NOT re-confirm are flagged **stale**. Any split/merge a depth run revealed since the last load is applied (**re-individuation**). Enrichment is signals-only (**enrich-not-dump**): a drilled identity's route carries a compact depth-signal, never its manifestations.
- **PERSIST (add-new):** save the updated index (new identities, refreshed signals, re-individuations, stale flags) and append an invocation-log entry.

**(OT2) Discovery — the index IS the registry.** `21-01` left open "how does a root run find the prior concept-target runs?" It doesn't scan folders: the index (`00-13`) records each identity's depth-pointer, so a root run finds what's been drilled by LOADING the index. A concept-target run PERSISTS its depth into the identity's entry, so the next root run discovers it on LOAD. The first run finds an empty index and creates it on PERSIST (bootstrapping). Discovery dissolves into the artifact the prior inquiry already built.

**(OT3) Scopes, convergence, staleness.**
- *Scopes:* a **root** run LOADS the whole index, INTEGRATES breadth (sweeps the territory at identity-resolution, enriched by the loaded depth-signals), PERSISTS the whole. A **concept-target** run LOADS one identity's entry, INTEGRATES depth (drills its manifestations + divergences), PERSISTS that entry. Same operations, parameterized by what's loaded and saved.
- *Idempotency-at-fixpoint:* a re-run LOADS the prior fixpoint; the sweep RE-CONFIRMS each loaded identity against the current territory. Unchanged input → the same set, nothing added → saved unchanged (converged — a no-op at the fixpoint). It is load-modify-save, which is idempotent at a fixpoint by construction. Growth happens only when the input changes (a new depth run, a changed territory) — that is a correct update, not drift.
- *Staleness:* when the territory changed, loaded identities the current sweep doesn't re-confirm are flagged **stale** (kept with a last-confirmed timestamp, not silently deleted — visible-with-reason, recoverable). Perception governs (the current sweep decides what's real); the loaded set only assists (matching + enrichment). A prune-policy for very-stale entries is a later option.

**The guards (carried + preserved at the operation level):** *within-concept* — INTEGRATE's individuation matches an item to an identity (membership), never an identity to an identity (relation); the index entries are identity→own-depth; so the operations never create inter-concept edges. *enrich-not-dump* — depth-signals on identity-routes, never manifestation dumps. *re-derive-not-carry* — the op-triple re-derives routeman's read-prior/recalibrate/add-new (§3.5/§5.8): *same-map → cross-target* (the index spans all the project's identities, not one inquiry's map), and REVISIT (a loop-control type) is stripped; only the general load-modify-save shape carries.

**The acceptance test (the `21-01` trace), passed:** root #1 (empty index → plain breadth map → persist) → target-A (load A → drill → persist A's depth-signal "unresolved divergence") → target-B (load B → drill → persist) → root #2 (LOAD the whole index now carrying A's and B's depth → INTEGRATE: re-confirm the identities and attach A's and B's depth-signals to their routes → PERSIST). Result: root #2 = root #1 with A and B now carrying depth-signals (enrich-not-dump); idempotent at the fixpoint (had A and B not run, root #2 would equal root #1). Exactly the behavior the user specified.

**This is the last design piece.** With the cross-run model operationalized, routelister's full design — meaning, listing mechanism, route-type, input contract, output schema, and cross-run behavior — is settled, and the natural next step is to consolidate it into the structural spec.

**How SV6 differs from SV1:** SV1 expected "the cross-run model is the persistent running-identity-set." SV6 operationalizes it — the three concrete operations, discovery-as-the-index, the scope-parameterization, idempotency-via-re-confirm + staleness-flag-not-delete, the routeman re-derivation, the preserved guards — and *verifies* it against the `21-01` acceptance trace.

---

## Saturation / Telemetry

- **Perspective saturation:** saturating (the load-modify-save model absorbed each perspective; none destabilized).
- **Ambiguity resolution ratio:** 5/5 HIGH; 0 OPEN.
- **SV delta:** moderate-large (SV1 "persistent running-identity-set" → SV6 the operationalized three-operations + discovery + scopes + idempotency/staleness + the verified trace + the unification).
- **Anchor diversity:** multi-pillar (the persistent-running-identity-set unification, the load-modify-save idempotency, the index-as-registry, the re-confirm staleness, the routeman re-derivation, the LOAD-assists-perception consistency).
- **Failure modes checked:** Status Quo Bias (didn't carry routeman's re-invocation — re-derived); **Self-Reference — guarded (operationalizing own 21-01; anchored on routeman §3.5/§5.8 + the loop-bound test + the acceptance-test the design must pass)**; Clean Resolution Trap (the "separate phase" + "it's routeman renamed" easy resolutions tested + rejected); Premature Stabilization (the "load-and-add = drift" + "LOAD replaces perception" counters genuinely tested); Perspective Blindness (the uncomfortable "must be a distinct phase" / "drift" / "renamed" readings checked); Frame-exit (N/A — single-artifact operations).

**Handoff to Decomposition:** structure to partition — (1) the integrating insight (persistent running-identity-set; not a separate phase); (2) the three operations (LOAD/INTEGRATE/PERSIST, concrete); (3) discovery (index-as-registry); (4) scopes + idempotency-via-re-confirm + staleness; (5) the guards + the routeman re-derivation + the acceptance-test; (6) synthesis + re-test + the last-design-piece status. Candidate sub-questions for /decompose.
