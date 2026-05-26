# Decomposition: Atomic Operations as Reusable Protocols?

## User Input

Source: `/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-11_22-16__atomic_operations_as_reusable_protocols/_branch.md`

Whole to decompose: produce Innovation's deliverable per Sensemaking SV6 — LIGHT + DIFFERENTIATED extraction = inline labels in 2 discipline specs + 1 new index file at `devdocs/patterns/atomic-operations-index.md` + future-revival observation. Total <100 lines new content. Universal-discipline-clean. Reversible.

---

## Step 1 — Perceive Coupling Topology

### Elements

1. **E1.** Inline labels for `homegrown/explore/references/explore.md` — small `[atomic operation: <name>]` annotations near sections that manifest each operation.
2. **E2.** Inline labels for `homegrown/navigation/references/navigation.md` — same pattern.
3. **E3.** Index file structure: heading + intro stating purpose.
4. **E4.** Index file body: per-operation entry × 4 (input reading; typed-item production; metadata attachment; structured-map assembly), each with scope classification + Explore manifestation + Navigation manifestation.
5. **E5.** Index file's scope-classification statement — S-4 is TEM-specific; S-1/S-2/S-3 are universal-discipline-primitive.
6. **E6.** Index file caveats: light extraction at N=2.5; heavier extraction deferred to ≥3-instance evidence; reversibility note.
7. **E7.** Index file cross-references: to `devdocs/patterns/typed-enumeration-mapping.md` (when created via 13-45 MUST); to this 22-16 inquiry (as source); to 21-51 finding (for atomic decomposition reasoning).
8. **E8.** Future-revival observation: heavy extraction (per-operation capability files at e.g. `homegrown/atomic-operations/`) becomes justified when 3rd TEM-instance is confirmed.

### Coupling

- **E1 and E2** are PATTERN-coupled (same annotation pattern applied to different specs). Operationally similar but textually independent.
- **E3-E7** are tightly coupled — they form the index file's content. Internally cohesive.
- **E8** is loosely coupled — observation about future state; doesn't depend on E1-E7's specific content.

### Clusters

- **Cluster A — Inline labels** {E1, E2}: spec annotations.
- **Cluster B — Index file** {E3, E4, E5, E6, E7}: the new pattern-doc artifact.
- **Cluster C — Future observation** {E8}: revival trigger note.

Over-decomposition risk (decompose failure mode #5): the deliverable is small (~80 lines total). Splitting further (e.g., per-atomic-operation sub-pieces of E4) would fragment what should be drafted together. 3 pieces is the right granularity.

---

## Step 2 — Detect Boundaries

Three pieces:

- **P1 — Inline labels for both specs** {E1, E2}: small annotations in Explore + Navigation spec files (one piece since they share the pattern; drafted as a unit).
- **P2 — Index file** {E3-E7}: the new sibling pattern-doc artifact at `devdocs/patterns/atomic-operations-index.md`.
- **P3 — Future-revival observation** {E8}: brief flag for heavy-extraction conditional on ≥3-instance evidence.

### Boundary qualities

- P1 ↔ P2: P2's index references P1's labels (via the file paths + section locations). One-way Read.
- P1 ↔ P3: independent.
- P2 ↔ P3: P3 references P2's "light" framing as the current state. One-way Read.

All boundaries one-way Reads.

---

## Step 3 — Validate Boundaries (Bottom-Up)

### Atoms

| Atom | Description |
|---|---|
| A1 | Explore spec inline label set (~4-8 small annotations near relevant sections) |
| A2 | Navigation spec inline label set (~4-8 small annotations) |
| A3 | Index file heading + intro |
| A4 | Index file's 4 per-operation entries (input reading; typed-item production; metadata attachment; structured-map assembly) |
| A5 | Index file's scope-classification statement (TEM-specific vs universal-primitive) |
| A6 | Index file's caveats (light extraction; reversibility; pending evidence) |
| A7 | Index file's cross-references |
| A8 | Future-revival observation text |

### Atom grouping vs Step-2 boundaries

| Atom | Assigned to | Correct? |
|---|---|---|
| A1, A2 | P1 | ✓ |
| A3, A4, A5, A6, A7 | P2 | ✓ |
| A8 | P3 | ✓ |

All atoms group cleanly. **Confidence: HIGH.**

---

## Step 4 — Express as Question Tree

### P1 — Inline labels for both specs

**Question:** What are the exact inline labels and their insertion locations in `homegrown/explore/references/explore.md` and `homegrown/navigation/references/navigation.md`?

**Verification criteria:**
- [ ] For each of the 4 atomic operations, identified where it manifests in Explore spec
- [ ] For each of the 4 atomic operations, identified where it manifests in Navigation spec
- [ ] Annotation wording specified (e.g., `[atomic operation: <name>]` or similar consistent format)
- [ ] Insertion-line specifications precise (which line; before/after which heading)
- [ ] Annotations are small (one phrase each); no bloat
- [ ] Universal-discipline-clean (no Step 5 references; no project-governance bloat)
- [ ] Total annotations: ~4-8 per spec; ~8-16 total

### P2 — Index file

**Question:** What is the exact ~50-70 line text of `devdocs/patterns/atomic-operations-index.md`?

**Verification criteria:**
- [ ] File heading + intro stating purpose
- [ ] 4 per-operation entries each with: name + role + scope classification + Explore manifestation + Navigation manifestation
- [ ] Scope-classification block stating S-4 TEM-specific vs S-1/S-2/S-3 universal-discipline-primitive
- [ ] Caveats block: light extraction at N=2.5; heavier deferred; reversibility
- [ ] Cross-references: to `devdocs/patterns/typed-enumeration-mapping.md` (sibling); to this 22-16 inquiry (source); optionally to 21-51 finding (atomic decomposition source)
- [ ] Total length ≤70 lines
- [ ] Universal-discipline-clean
- [ ] "Atomic operation" terminology used; "protocol" avoided

### P3 — Future-revival observation

**Question:** What text flags the heavy-extraction revival trigger (≥3 TEM-instance evidence) as a future state?

**Verification criteria:**
- [ ] Brief observation (~3-5 lines) in finding's Open Questions / Refinement Triggers section
- [ ] States that per-operation capability files at a new `homegrown/atomic-operations/` layer become justified at ≥3 confirmed TEM-instances
- [ ] References the Sensemaking-Comprehending inquiry as a plausible source of the 3rd instance (from 21-51 finding's Research Frontier)
- [ ] Marked as conditional / not currently active

---

## Step 5 — Map Interfaces

### Internal interfaces

| # | Source | Target | What flows | Direction |
|---|---|---|---|---|
| I1 | P1 (inline labels) | P2 (index file) | Index references labels' locations | One-way Read |
| I2 | P2 (index file) | P3 (future observation) | P3 references P2's "light" framing as current state | One-way Read |

### External interfaces

| # | Source | Target | What flows | Direction |
|---|---|---|---|---|
| I3 | (External — Sensemaking SV6) | P1, P2, P3 | Stabilized verdict: light, differentiated, atomic-operation terminology, lightweight placement | One-way Read |
| I4 | (External — Exploration) | P1, P2 | Atomic decomposition data; 4 operations + manifestations | One-way Read |
| I5 | (External — 21-51 finding) | P2 | Atomic operations source; cross-discipline cluster framing | One-way Read |
| I6 | (External — `homegrown/explore/references/explore.md`) | P1 | Current spec content (the artifact being annotated) | One-way Read |
| I7 | (External — `homegrown/navigation/references/navigation.md`) | P1 | Current spec content | One-way Read |

All one-way Reads.

---

## Step 6 — Order by Dependency

```
P1 (inline labels) ───┐
                      ├──→ P2 (index file)
                      └──→ P3 (future observation; via P2)
```

**Order:**
1. P1 first (the labels exist in specs; index file references them).
2. P2 next (depends on P1 for label-location references).
3. P3 last (depends on P2's framing).

In practice, Innovation can draft all three together since they're small. Decomposition just makes the dependency explicit.

---

## Step 7 — Self-Evaluate

### Minimum (3 dimensions)

| # | Dimension | Result |
|---|---|---|
| 1 | Independence | **PASS.** P1, P2, P3 each workable given Sensemaking SV6 as input. P2 references P1's labels but doesn't need them to draft (can draft labels and index in parallel). P3 is brief observation. |
| 2 | Completeness | **PASS.** P1+P2+P3 covers Sensemaking SV6's full handoff (inline labels; index; future-revival observation). |
| 3 | Reassembly | **PASS.** Pieces compose into the complete Innovation deliverable. |

### Determination-mechanism piece check

Load-bearing concept: "S-4 is TEM-specific; S-1/S-2/S-3 are universal-discipline-primitive." Runtime determination: practitioners reading the index file see the scope classification per operation. P2's verification criterion includes "Scope-classification block." **PASS.**

### Full (7 dimensions)

| # | Dimension | Result |
|---|---|---|
| 4 | Tractability | **PASS.** P1 ~10-20 lines across 2 specs; P2 ~50-70 lines; P3 ~3-5 lines. All small. |
| 5 | Interface clarity | **PASS.** 2 internal one-way Reads; 5 external one-way Reads. Zero bidirectional. |
| 6 | Balance | **PASS** with caveat. P2 is the largest (~50-70 lines); P1 (~10-20); P3 (~3-5). Roughly proportional to scope; balance acceptable. |
| 7 | Confidence | **HIGH.** Top-down (Step 2 clusters) and bottom-up (Step 3 atoms) agree. |

### Over-decomposition check

Could P1 be split into two pieces (Explore labels + Navigation labels separately)? **NO.** They share the annotation pattern; drafting them together preserves consistency. Splitting would force duplicate decisions about wording, format, etc.

Could P2 be split into per-operation sub-pieces? **NO.** The index is internally cohesive; splitting per-operation would fragment the scope-classification framing.

**7/7 PASS.**

---

## Final Deliverable Summary

### Coupling Map

- **Cluster A — Inline labels** {E1, E2}: 2 elements (spec annotations).
- **Cluster B — Index file** {E3-E7}: 5 elements (heading + per-op entries + scope-classification + caveats + cross-references).
- **Cluster C — Future observation** {E8}: 1 element (revival trigger flag).

### Question Tree

| # | Question | Tractable? |
|---|---|---|
| P1 | Exact inline labels + insertion locations for both specs | Yes |
| P2 | Exact ~50-70 line text of the new index file | Yes |
| P3 | Future-revival observation text | Yes |

### Interface Map

- 2 internal one-way Reads (P1 → P2; P2 → P3)
- 5 external one-way Reads (Sensemaking SV6; Exploration; 21-51 finding; Explore spec; Navigation spec)
- Zero bidirectional flows

### Dependency Order

1. P1 first (inline labels).
2. P2 next (index file references P1's labels).
3. P3 last (future observation references P2's current-state framing).

### Self-Evaluation: 7/7 PASS

**Decomposition ready for Innovation.**
