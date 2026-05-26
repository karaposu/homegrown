# Decomposition — partitioning the B-refined /navigation restructure

## User Input
`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-12_11-40__navigation_factoring_question/_branch.md`

Prior outputs: this inquiry's `exploration.md` + `sensemaking.md`. The whole being decomposed is SV6's commitment: B-refined restructure of /navigation + minor /meta-loop update + migration explanation.

---

## Step 1 — Perceive Coupling Topology

### Elements

| # | Element | Layer |
|---|---|---|
| E1 | /navigation spec — Identity section (verb-meaning + NOT-list + upstream-precondition) | Spec |
| E2 | /navigation spec — Components section (4 components: enumerate, label, guide, select) | Spec |
| E3 | /navigation spec — Process section (invocation flow) | Spec |
| E4 | /navigation spec — Quality section (failure modes) | Spec |
| E5 | /navigation spec — Output section (route-card map + selection result + adaptive guidance) | Spec |
| E6 | "Specialization of /explore" framing (cross-cutting in spec) | Spec |
| E7 | 16-type taxonomy (preserved from iter-1; placed in Components) | Spec |
| E8 | Adaptive guidance per route (preserved unique contribution; placed in Components) | Spec |
| E9 | Select-as-cognitive-step with "no selection" handling | Spec |
| E10 | Movement excluded (in NOT-list) | Spec |
| E11 | /meta-loop spec — 1-sentence phase update | Cross-spec |
| E12 | Changes from Prior section explaining iter-1 → B-refined | Spec metadata |
| E13 | A+D fallback (mentioned in this finding only, not in spec) | Finding metadata |

13 elements.

### Coupling

Strong (within /navigation spec):
- E1 ↔ E6 (specialization framing is in Identity)
- E2 ↔ E7 (16-type taxonomy lives in Components)
- E2 ↔ E8 (adaptive guidance lives in Components)
- E2 ↔ E9 (select lives in Components)
- E1 ↔ E10 (NOT-list includes movement-exclusion)
- E5 ↔ E9 (Output handles "no selection")
- E3 ↔ E2 (Process invokes Components)
- E4 ↔ E2 (Quality references Components for failure-mode targets)

Cross-cluster:
- E1–E10 ↔ E11 (/navigation spec change cascades to /meta-loop spec)
- E1–E10 ↔ E12 (Changes section explains spec change)

Weak:
- E12 ↔ E13 (Changes section may reference A+D fallback but isn't required to)

### Clusters

**α — /navigation restructured spec (E1–E10):** the main artifact. Internally tightly coupled.

**β — /meta-loop minor update (E11):** standalone 1-sentence edit.

**γ — Changes-from-Prior + fallback metadata (E12, E13):** migration explanation + this-finding's documentation of A+D fallback.

3 clusters. α is the bulk; β is small; γ is metadata.

### Inter-cluster coupling

| Boundary | Coupling | Reason |
|---|---|---|
| α ↔ β | strong (cascade) | /navigation restructure forces /meta-loop's phase-list update |
| α ↔ γ | moderate | Changes-from-Prior is inside /navigation spec; explains the restructure |
| β ↔ γ | weak | meta-loop update is small enough that γ's metadata doesn't need to specifically explain it (just notes "meta-loop phase merge") |

---

## Step 2 — Detect Boundaries (Top-Down)

Cutting at the three cluster boundaries:

| Boundary | Crosses | Traffic | Type |
|---|---|---|---|
| B1 (α↔β) | /navigation spec ↔ /meta-loop spec | moderate (cascade) | one-way |
| B2 (α↔γ) | /navigation spec ↔ changes metadata | moderate (embedded) | one-way (γ goes into α) |
| B3 (β↔γ) | /meta-loop ↔ changes metadata | low | one-way (small) |

All boundaries low or asymmetric. **Initial partition: 3 pieces.**

Note on potential sub-decomposition of α: I considered splitting α into 5 sub-pieces (one per section of the /navigation spec). Decision: keep α as one piece because the 5 sections are tightly coupled internally (they all describe one discipline); splitting would create fragments. Innovation can produce per-section content within the unified P-α package.

---

## Step 3 — Validate Boundaries (Bottom-Up Check)

### Atoms

- A1 Verb-meaning of /navigation (specialization of /explore over next-move-space)
- A2 NOT-list (5 entries)
- A3 16-type taxonomy
- A4 Adaptive guidance per route
- A5 Select-as-cognitive-step
- A6 Movement-exclusion
- A7 Route-card map (with selected-route or "no selection")
- A8 /meta-loop phase list
- A9 Changes-from-Prior section content
- A10 A+D fallback note

### Atom-to-cluster check

| Atom | Cluster | Top-down agreement |
|---|---|---|
| A1 Verb-meaning | α (Identity) | ✓ |
| A2 NOT-list | α (Identity) | ✓ |
| A3 16-type taxonomy | α (Components) | ✓ |
| A4 Adaptive guidance | α (Components) | ✓ |
| A5 Select-as-cognitive-step | α (Components) | ✓ |
| A6 Movement-exclusion | α (Identity NOT-list) | ✓ |
| A7 Route-card map output | α (Output) | ✓ |
| A8 /meta-loop phase list | β | ✓ |
| A9 Changes-from-Prior content | γ (placed inside α) | ✓ |
| A10 A+D fallback note | γ (this finding only; not in spec) | ✓ |

All atoms map cleanly. **Boundary confidence: 3/3 HIGH.**

---

## Step 4 — Express as Question Tree

### P-α — /navigation restructured spec

**Question:** *What is the restructured /navigation spec — what's in each of its 5 sections, and how does it embody the specialization-of-/explore framing while preserving its unique contributions?*

**Verification criteria:**

- [ ] **Identity section**: states /navigation as a specialization of /explore over the next-move-space; states the verb-meaning aligned with everyday meaning of navigation (enumerate-and-choose); states the 5-entry NOT-list (no movement-actuation; no meaning-extraction; no mechanism-modeling; no partition; no novelty-generation); states the upstream-precondition relationship (depends on completed SIC cycle or current state as input).

- [ ] **Components section**: names 4 components in order:
  - **Enumerate** — /explore-of-routes in possibility mode; territory is the next-move-space; produces candidate routes
  - **Label** — apply the 16-type taxonomy (preserved from iter-1; content-directed / process-directed / context-directed) to each route
  - **Guide** — generate adaptive per-route guidance + continuation notes (preserved unique contribution from iter-1; what jump-scan surfaced)
  - **Select** — present the labeled-and-guided route map; cognitive selection step; human-mediated at v1; accepts "no selection" as valid output

- [ ] **Process section**: invocation flow (declare input → enumerate → label → guide → present-for-select → output)

- [ ] **Quality section**: failure modes including:
  - **Selection-without-options-shown** — selecting before route enumeration is presented to user
  - **Movement-bleed** — discipline starts actuating chosen route (movement is runner's job; failure mode flags this)
  - **Guide-as-meaning** — adaptive guidance crosses into conceptual-role assignment (sense-making territory)
  - Standard /explore-inherited failure modes (premature depth, surface-only scanning, etc.) adapted to route-space
  - Coverage criteria (route enumeration completeness; guidance per route; explicit selection-or-no-selection)

- [ ] **Output section**: route-card map structure — per-route fields (Direction, Goal, Type, Priority, Status, Blocked-by, Purpose, Movement-description-only-not-actuation, Unlocks, Why-this-route-exists, Guidance-mode, Continuation-note) + Selection result (chosen-route-ID OR "no-selection") + adaptive guidance attached

- [ ] **Cross-cutting**: specialization-of-/explore framing appears in Identity (foundational) and Components (enumerate inherits from /explore-of-routes); other sections operate within /navigation's own spec without runtime cross-discipline calls

### P-β — /meta-loop minor update

**Question:** *What is the 1-sentence update to /meta-loop's spec?*

**Verification criteria:**

- [ ] Locate /meta-loop's phase-list (current: "probe (MVL+) → see (Navigation, perception-only) → select-explicitly → assess")
- [ ] Change to: "probe (MVL+) → navigate (includes select) → assess" — phase merge of "see" and "select-explicitly" into "navigate"
- [ ] Preserve the design-philosophy note: selection is human-mediated at v1; autonomous selection is L3+
- [ ] Note that the boundary between perception and selection now sits INSIDE /navigation rather than between /navigation and meta-loop's next-step

### P-γ — Changes-from-Prior + fallback metadata

**Question:** *What does the Changes-from-Prior section in /navigation's spec contain, and what about the A+D fallback?*

**Verification criteria:**

- [ ] Changes-from-Prior section in /navigation spec (top, as frontmatter or first section) explains:
  - Iter-1 framing (perception-only; no selection; selection deferred to user/meta-loop)
  - B-refined framing (specialization of /explore + label + guide + select)
  - What's preserved (16-type taxonomy; adaptive guidance per route; per-route fields)
  - What's new (select-as-cognitive-step; "no selection" valid output; specialization framing)
  - What's moved (selection moved into /navigation; movement stays with runner)
  - Vocabulary alignment with everyday meaning of "navigation"
- [ ] A+D fallback documented in THIS FINDING's COULD/Next Actions (user-preference; minimum-change path) — NOT in /navigation's spec itself (the spec commits to B-refined)

### Independence check

- P-α standalone — answerable given the SV6 commitments.
- P-β depends on P-α (cascade); 1-sentence update.
- P-γ depends on P-α (Changes-from-Prior is embedded in α's spec); fallback note is in this finding only.

Pieces are independently answerable in focused passes.

---

## Step 5 — Map Interfaces

### Interface table

| From → To | What flows | Direction | Assumptions |
|---|---|---|---|
| **P-α → P-β** | /navigation's restructured definition triggers /meta-loop's phase-list update | One-way (cascade) | β assumes α is stable before β is edited |
| **P-γ → P-α** | Changes-from-Prior content is placed inside α's spec at the top | One-way (γ embeds in α) | α assumes γ's explanation is accurate |
| **P-α → P-γ** | A's structural decisions (specialization, components, etc.) inform γ's explanation | One-way (back-flow into γ's content) | γ assumes α is the source of truth |

### Assumptions-not-data check

- **/meta-loop cascade** (α → β): /meta-loop's phase list is the ONLY thing that needs to change in meta-loop's spec; no other downstream impact. **Mitigation:** verify by reading meta-loop's spec; if other sections reference Navigation's perception-only framing, those need flagging.

- **A+D fallback consistency** (γ): the fallback (minimum-change path) is documented in this finding only, not in /navigation's spec. **Mitigation:** Changes-from-Prior section in /navigation can briefly note the alternative was considered without including it as a spec option.

### Hidden coupling check

- /explore's spec is referenced by /navigation's spec (specialization). If /explore's spec changes in the future, /navigation may need re-validation. This is unavoidable for any specialization pattern. **Mitigation:** cross-references in /navigation's spec point at /explore's spec by absolute path; revalidation is a one-time check on /explore-spec-change.

---

## Step 6 — Order by Dependency

```
P-α (/navigation spec restructure)
    ↓
P-β (/meta-loop 1-sentence update)
    ↓
P-γ (Changes-from-Prior in α; fallback note in finding)
```

**Order:**

1. **P-α** first — the main artifact; everything else cascades from or annotates it.
2. **P-β** — cascade update; depends on α being stable.
3. **P-γ** — finalize Changes-from-Prior content (depends on α) + fallback note (independent).

No circular dependencies.

---

## Step 7 — Self-Evaluate

### Minimum (3 dimensions)

| Dimension | Check | Pass? |
|---|---|---|
| **Independence** | Each piece answerable in focused pass? | **PASS** |
| **Completeness** | 13 elements covered? | **PASS** |
| **Reassembly** | Pieces + interfaces = SV6 design? | **PASS** |

### Full (additional dimensions)

| Dimension | Check | Score |
|---|---|---|
| Tractability | Each piece bounded? | PASS — α is the bulk (5 sections); β is 1 sentence; γ is short |
| Interface clarity | Cross-piece flows explicit? | PASS — 3 interfaces with assumptions check |
| Balance | Complexity proportional? | NO with reason — α is dramatically heavier than β and γ. But this is structurally inevitable (α is the actual spec edit). Acceptable. |
| Confidence | Top-down + bottom-up agree? | PASS — all 3 boundaries HIGH |

### Determination-mechanism check

Two runtime-determined concepts:

- **Selection at v1 vs L3+ autonomy.** Determination: human-mediated at v1 always; autonomous at L3+ (currently not active). **Placement:** P-α's Components section (select component declares "human-mediated at v1; L3+ ready for autonomous").
- **"No selection" handling.** Determination: select-step's output. **Placement:** P-α's Output section.

Both placed; no gap.

### Reassembly check

Given P-α + P-β + P-γ + 3 interfaces, can SV6 be reconstructed? Yes — /navigation spec is restructured (α); /meta-loop spec is updated (β); migration explained (γ); fallback noted (γ in finding).

**Reassembly: PASS.**

### Failure-mode self-check

- Premature decomposition: NO — sensemaking SV6 was stable.
- Wrong boundaries: NO.
- Hidden coupling: 1 risk identified (cross-spec /explore reference); mitigated by absolute-path cross-references.
- Missing pieces: NO.
- Over-decomposition: NO — α kept as one piece (5 sections internal but unified). Splitting would fragment.
- Ignoring dependencies: NO — explicit order produced.
- Imbalanced: YES acknowledged — α is the bulk; β and γ are small. Structurally inevitable; doesn't trigger refactor.

---

## Final Deliverable

### Coupling Map

3 clusters: α (/navigation spec restructure, the main artifact); β (/meta-loop 1-sentence update); γ (Changes-from-Prior + fallback metadata). Inter-cluster coupling moderate (α→β cascade; γ embedded in α).

### Question Tree

- **P-α** — *What is the restructured /navigation spec — sections, components, framing?*
- **P-β** — *What is the 1-sentence update to /meta-loop's spec?*
- **P-γ** — *What does the Changes-from-Prior section contain, and where does the A+D fallback live?*

### Interface Map

3 interfaces; 2 assumption surfaces examined; 1 hidden-coupling risk (cross-spec /explore reference) mitigated.

### Dependency Order

P-α → P-β → P-γ. Acyclic.

### Self-Evaluation

3/3 minimum dimensions PASS. 4/4 full dimensions PASS (with acknowledged imbalance: α heavier; structurally inevitable). 0 failure modes triggered.

---

## Frontier (for /innovate)

- *(P-α)* Generate concrete content for each /navigation spec section. Multiple shape variants per section possible (minimal vs standard vs maximal); recommend a balanced "standard" shape with worked example.
- *(P-α specifically)* Generate phrasing for the 4 components (enumerate, label, guide, select) with examples drawn from a concrete next-move-space scenario.
- *(P-β)* Generate the exact 1-sentence phrase for /meta-loop's phase-list update. Test against meta-loop's existing spec language for consistency.
- *(P-γ)* Generate the Changes-from-Prior section content explaining iter-1 → B-refined cleanly.

---

## Telemetry

- **Elements identified:** 13
- **Atoms:** 10; 10/10 agree with top-down
- **Boundary-confidence scores:** 3/3 HIGH
- **Pieces produced:** 3 (P-α / P-β / P-γ)
- **Interfaces:** 3 with assumptions check
- **Hidden coupling risks:** 1 identified, mitigated
- **Determination-mechanism check:** 2 placed
- **Dependency order:** acyclic
- **Self-evaluation:** 3/3 min PASS; 4/4 full PASS
- **Failure modes triggered:** 0

## Self-Assessment

**Overall: PROCEED**

SV6 partitions cleanly into 3 pieces. P-α is the main artifact (the restructured spec); P-β is the cascade (1-sentence /meta-loop update); P-γ is migration metadata. Innovation should generate concrete content for each section of P-α + the exact phrasing for P-β + the Changes-from-Prior content for P-γ.
