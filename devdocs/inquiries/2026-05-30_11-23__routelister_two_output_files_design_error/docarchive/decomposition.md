## User Input

`devdocs/inquiries/2026-05-30_11-23__routelister_two_output_files_design_error/_branch.md` (prior outputs: surfacing.md, sensemaking.md [two-files; standalone-owns-its-state; 3-layer diagnosis; three-memories; name+elevate fix]; workspace in context). Whole: the diagnosis + corrected model + fix — partition for Innovation (articulate + the spec-edit set + foils) + Critique (adjudicate the diagnosis, the no-re-fusion guard, the naming).

---

# Structural Decomposition — Routelister's Two Output Files: Diagnosis & Fix

**Whole (one paragraph):** routelister's core output is two files, both its own, written every run (standalone included) — `routelister.md` (per-run map) + its own persistent concept-map index — because a cumulative, standalone discipline must own its state (the loop is optional; standalone is primary). What went wrong is not a broken design but three downstream layers: the design (00-13) was right but left the second file unnamed; the authored spec under-elevated it (cross-run *behavior*, not core *output*); and a conversational answer dropped it by conflating loop-state with the state file. Reconciliation: three memories, two owners (per-run map + routelister's cross-run index → routelister; the meta-loop's cross-cycle `_meta_state.md` → meta-loop) — no contradiction with the earlier relocation, and no re-fusion. The fix: name the state file (lean `_route.md`), elevate it to a named core always-written output, and state routelister writes it itself. *(Sensemaking COMPLETE — this partitions the verdict-space.)*

---

## 1 — Coupling Map (Steps 1–3)

### Elements

| # | Element | From |
|---|---|---|
| E1 | OT1 — two files, both routelister's, written every run | SV6 / K1, K2 |
| E2 | OT2 — standalone-owns-its-state (routelister is the only always-present writer; the loop is optional) | SV6 / K1, K9 |
| E3 | OT3 — the 3-layer diagnosis (design-right-but-unnamed / spec-under-elevated / comms-error) | SV6 / K3, K4, K5 |
| E4 | OT4 — three memories, two owners (map / routelister index / meta-loop cross-cycle); reconcile w/ 08-14 | SV6 / K6, K11 |
| E5 | no-re-fusion guard (index = within-concept only; never touch the meta-loop's file) | SV6 / K7, K10 |
| E6 | the naming decision (`_route.md` lean vs `_routelist.md` foil) | SV6 / K8 |
| E7 | the fix: name + elevate (§3.5→§5) + ownership in Execute PERSIST | SV6 / S2 |

### Coupling topology

- **E2 grounds E1** (standalone-owns-its-state ⟹ two files both routelister's). Strong coupling.
- **E1+E2 ground E3** (the diagnosis is "the design had this but it was under-specified/mis-described").
- **E4 reconciles** the verdict with 08-14; **E5** is the guard E4 must respect (don't re-merge (3) into (2)). E4+E5 = one cluster (the reconciliation).
- **E6 (naming) + E7 (fix)** = the action cluster; E7 depends on E1 (what to elevate), E5 (the no-re-fusion constraint on the file's content), E6 (the name).

### Boundaries + bottom-up validation

Natural cuts: the verdict+principle (E1+E2), the diagnosis (E3), the reconciliation+guard (E4+E5), the fix+naming (E6+E7). Atoms — two-files; standalone-owns-state; the three diagnosis-layers; the three memories; the re-fusion guard; the name; the spec edits — group cleanly; no atom splits; the guard (E5) is correctly inside the reconciliation cluster (it's what keeps the three memories separate). **Top-down = bottom-up → HIGH confidence.**

---

## 2 — Question Tree (Step 4)

### P1 — Is routelister's core output two files, both its own, always written? (OT1+OT2)
**Question:** Does routelister's core output logic always produce two files (per-run map + its own persistent index), written by routelister itself?
**Verification criteria:**
- [ ] routelister is cumulative (intrinsic cross-run memory) AND standalone (runs without a loop).
- [ ] Therefore routelister is the only always-present writer of its state → it must write it itself (standalone-owns-its-state).
- [ ] Core output = `routelister.md` (map) + its own persistent concept-map index; both written every run.

### P2 — What went wrong, precisely? (OT3)
**Question:** Is it a broken design, an under-specified spec, or a communication error?
**Verification criteria:**
- [ ] Design (00-13) had two artifacts + 08-14 kept the index as routelister's → NOT broken.
- [ ] Layer (a): 00-13 left the second file UNNAMED.
- [ ] Layer (b): the authored spec under-elevated it (cross-run behavior, not core output).
- [ ] Layer (c): the conversational answer dropped it (loop-STATE vs state-FILE conflation).

### P3 — Reconcile with the meta-loop owning cross-cycle memory (OT4) + the no-re-fusion guard
**Question:** Does routelister owning a state file contradict 08-14, and how is re-fusion avoided?
**Verification criteria:**
- [ ] Three memories: (1) per-run map, (2) routelister cross-run index, (3) meta-loop cross-cycle `_meta_state.md`.
- [ ] Two owners: (1)+(2) routelister; (3) meta-loop (loop-only). No contradiction (08-14 kept (2) as routelister's; only relocated (3)).
- [ ] No-re-fusion: routelister's index holds the within-concept concept-map ONLY; never reads/writes the meta-loop's file.

### P4 — The fix + the naming (OT0)
**Question:** What concretely changes in the authored spec, and what is the state file named?
**Verification criteria:**
- [ ] Name the state file: recommend `_route.md` (lineage + user framing); foil `_routelist.md`; low-stakes.
- [ ] Elevate: move the index from §3.5 (cross-run behavior) into §5 (Output) as a named core always-written artifact next to `routelister.md`.
- [ ] Ownership: the Execute PERSIST step states routelister writes the state file itself, every run, standalone included.
- [ ] `## Inherited Commitments Re-test`: 00-13 (two-artifact; refine = name it), 08-14 (cross-cycle→meta-loop; reconcile = three memories), 06-38 (cross-run model), the authored spec (correct), routeman §5.8 (source; bundled-two-states).

---

## 3 — Interface Map (Step 5)

| Source → Target | What flows | Direction | Type |
|---|---|---|---|
| P1 → P2 | "two files, always routelister's" → P2's "so the design had it; what slipped was naming/elevation/description" | one-way | prerequisite |
| P1 → P3 | "routelister owns a state file" → P3's reconciliation (vs the meta-loop's file) | one-way | prerequisite |
| P3 → P4 | "three memories, no-re-fusion" → P4's fix constrains the file's content (within-concept only) | one-way | constraint |
| P2 → P4 | the diagnosis (unnamed/under-elevated) → the fix targets (name + elevate) | one-way | data |
| P1 + P2 + P3 → P4 | the verdict + diagnosis + guard → the spec-edit set + naming | one-way | data |

**Assumptions-not-data check:** P4 assumes P3 fixed the file's content boundary (within-concept only) — if P4 elevates the state file without that constraint, someone could fill it with cross-cycle state and re-fuse. **Mitigation: P3's no-re-fusion criterion is carried on the P3→P4 interface as a content constraint on the named file.**

---

## 4 — Dependency Order (Step 6)

```
P1 (two-files + standalone-owns-state) ──> P2 (diagnosis) ──┐
        └──> P3 (reconcile + no-re-fusion) ─────────────────┴──> P4 (fix + naming) [synthesis — last]
```

- **P1 first** (the verdict + principle ground everything).
- **P2 and P3** depend on P1 (P2 = what-went-wrong; P3 = reconcile); independent of each other → parallel.
- **P4 last** (the fix + naming; depends on P1+P2+P3).

No circular dependency.

---

## 5 — Self-Evaluation (Step 7)

**Minimum 3 dimensions:**

| Dimension | Check | Verdict |
|---|---|---|
| **Independence** | Each piece answerable via interfaces only? | **PASS** — P1 (verdict), P2 (diagnosis), P3 (reconcile+guard), P4 (fix+naming) each self-contained. |
| **Completeness** | Cover the whole? | **PASS** — E1+E2→P1; E3→P2; E4+E5→P3; E6+E7→P4. Nothing falls through. |
| **Reassembly** | Pieces + interfaces = the answer? | **PASS** — P1 (two files, both routelister's) + P2 (what slipped) + P3 (three memories, no re-fusion) + P4 (name + elevate + ownership) = the diagnosis + corrected model + fix the user asked for. |

**Full-evaluation spot-checks:**
- **Determination-mechanism piece check:** the load-bearing determination is "must routelister write its own state?" — mechanism = "is it cumulative AND standalone (→ only always-present writer)?" NOT presupposed; P1 *is* the determination piece. **PASS.**
- **Interface clarity:** all 5 flows explicit + the assumptions-not-data coupling (the no-re-fusion content constraint on P3→P4) surfaced. **PASS.**
- **Balance:** even; P4 (fix) carries the most but is concrete. **PASS.**
- **Confidence:** top-down = bottom-up. **HIGH.**

**Decomposition verdict: SOLID.** Four pieces, clean interfaces, acyclic, reassembly holds. Hand to Innovation (articulate P1–P4 — esp. the standalone-owns-its-state principle + the three-memory model + the spec-edit set — + foils) → Critique (adjudicate P2 diagnosis, P3 no-re-fusion, P4 naming + the fix).
