# Exploration — Explore Canonical Coverage via Staged Iteration

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-13_06-30__explore_canonical_coverage_via_staged_iteration/_branch.md`

Territory: the design space of how `/explore` guarantees thorough coverage — combining (a) staging structure (inside `/explore` vs `/staged-explore` runner) and (b) coverage-guarantee mechanisms that prevent canonical-source-miss.

Mode: possibility. Entry: signal-first (seed = staged for-loop with map-then-drill). Expected: ~12-15 items. Depth: D2.

---

## Territory Overview

The design space partitions into seven regions. The inquiry's purpose biases attention toward Regions A (staging architecture) and D (new coverage guarantees), because the user's question is BOTH "where does staging live?" AND "how do we prevent canonical-source miss?". Regions C (existing coverage mechanisms in spec) and E (merge contract) describe what already exists; Regions B, F, G describe shape, diagnostics, and shipping status.

**Surround layer included at coarse scan (per §3.7).** The contextual surround for this design space is: the project's already-committed thinking-engine architecture (idempotent disciplines + runner-orchestrated loops; `/MVL+`, `/meta-loop`; nav_north_star.md's manual-v1 doctrine). Any candidate that violates this surround layer (e.g., "make /explore stateful across calls") is structurally costly even if locally appealing.

**Step 0 declarations:** mode=possibility; entry=signal-first; expected=~14 items; depth=D2.

---

## Inventory

### Region A — Staging architecture (WHERE staging lives)

**A1. Staging inside `/explore` itself** [Priority: HIGH | Confidence: scanned]
Bake the for-loop into one /explore invocation; /explore makes multiple internal passes before returning a single map. Functional one-line: collapses the runner role into the discipline; appealing UX (one call → full map) but breaks idempotency invariant (one invocation = one Transform) per §3.5; harder to resume mid-staging; loses per-pass auditability. Adjacency: surround layer says "disciplines stay atomic; orchestration lives in runners." Tension flag.

**A2. `/staged-explore` as a separate invokable runner** [Priority: HIGH | Confidence: confirmed]
The current spec's choice (§3.6, §6.1, §7.2). A thin runner orchestrates multiple `/explore` calls at progressive resolutions, consuming staging-aware telemetry (§5.3). Functional one-line: preserves /explore idempotency; matches surround-layer convention; requires shipping the runner (currently doc-only per §7.2 deferred). Adjacency: directly analogous to /MVL+ (runner over disciplines) and /meta-loop (runner over inquiries).

**A3. Hybrid: /explore exposes staging telemetry; user invokes manually** [Priority: MEDIUM | Confidence: confirmed]
The status quo. /explore reports `items_surfaced_count`, `parent_pass_anchor`, `stage_index`, `branching_factor` (§5.3); the user manually picks next-pass parents and re-invokes. nav_north_star.md explicitly calls this "acceptable for v1." Functional one-line: works today; tedious at scale; no automatic frontier ledger; the user is the runner.

### Region B — For-loop shape (HOW each pass relates to the next)

**B1. Coarse-to-fine drill** [Priority: HIGH | Confidence: confirmed]
The user's proposed pattern (and nav_north_star.md's §"Staged iteration"): pass-1 surfaces ~10 big concepts; pass-2 drills each one into ~5–10 sub-concepts; pass-3 deepens further. Functional one-line: the canonical shape; matches §3.6 already; resolution increases monotonically per pass.

**B2. Concentric layered scan (surround layer first)** [Priority: MEDIUM | Confidence: scanned]
A variant where pass-1 maps the surround layer (project-wide protocols/contracts/fundamentals), pass-2 maps the inquiry-specific objects, pass-3 maps the frontier. Already enforced by §3.7's "Coarse-scan in layered territories" rule but as an in-invocation requirement, not a staging shape. Functional one-line: makes the surround layer explicit as a staging axis, not just a step.

### Region C — Existing canonical-source coverage mechanisms (already in spec)

**C1. Boundary-discovery sub-phase (§3.3)** [Priority: HIGH | Confidence: confirmed]
When `boundary: unknown` is declared, /explore probes outward to surface territory edges before normal scanning. Functional one-line: prevents the explorer from missing the territory's outer perimeter; addresses canonical-source-miss when the inquiry hasn't pre-specified the boundary.

**C2. Coarse-scan-includes-surround-layer rule (§3.7)** [Priority: HIGH | Confidence: confirmed]
First-pass scan must include items from the contextual/structural surround layer before going deep on inquiry-specific objects. Functional one-line: ensures project-wide canonical sources (protocols, contracts, foundational frames) are surfaced before niche items steal attention.

**C3. Confirmed-absent as mandatory annotation (§2.2)** [Priority: HIGH | Confidence: confirmed]
Confirmed absences are productive output, not silent gaps. Functional one-line: forces the explorer to record "this region was scanned and contains nothing"; turns invisible misses into visible records.

**C4. Jump-scan before convergence (§4.2)** [Priority: HIGH | Confidence: confirmed]
Before declaring convergence, a deliberate scan in a previously-unscanned direction; surprises invalidate convergence. Functional one-line: anti-False-Confidence mechanism; catches the case where "I stopped finding things because I stopped looking in new places."

### Region D — New coverage-guarantee mechanisms NOT yet in spec (candidates that could exist)

**D1. Canonical-source pre-registry in `_branch.md`** [Priority: HIGH | Confidence: scanned]
The inquiry framer declares an explicit "must-touch" list (files, concepts, sources the inquiry depends on) as part of `_branch.md`. /explore reports per-item whether each registry entry was surfaced or marked confirmed-absent. Functional one-line: shifts canonical-source coverage from a hope to a contract; the registry becomes auditable.

**D2. Negative-space audit pass** [Priority: MEDIUM | Confidence: scanned]
After convergence, a final pass that asks "what KINDS of items have zero representation in this map?" against a category taxonomy. Functional one-line: complements C3 by checking category-level absence, not just region-level; catches "I forgot to look at protocols" misses.

**D3. Deterministic pre-scan (filesystem/index listing)** [Priority: MEDIUM | Confidence: scanned]
In artifact mode, run a deterministic listing (e.g., `find`, `ls -R`, project index) BEFORE the LLM-based exploration; pass the listing as boundary input. Functional one-line: removes "LLM forgets a file exists" as a failure source; the LLM cannot miss what it was forced to see at boundary-discovery time.

**D4. Cross-witness independent run** [Priority: LOW | Confidence: scanned]
A second /explore invocation in a fresh session against the same territory, compared via Merge Contract (§5.5). Functional one-line: catches model-specific or session-specific blindspots; expensive (2× cost) but strong defense for high-stakes inquiries.

### Region E — Merge & cross-invocation accumulation

**E1. Cross-Inquiry Merge Contract (§5.5)** [Priority: HIGH | Confidence: confirmed]
Spec-only contract for merging two /explore maps (parent + child, or sibling overlapping territories) using sequential IDs and LLM-assisted label similarity. Functional one-line: the missing piece between a single /explore call and a coherent multi-pass map; manual today, code-deferred. Direct dependency of any /staged-explore runner.

### Region F — Loop diagnostics

**F1. Staging-boundary regression detection (§4.1 mode 10)** [Priority: MEDIUM | Confidence: confirmed]
When next-pass /explore on a prior-pass item surfaces <2 items, flag it as atomic-at-this-resolution; do not retry at the same resolution. Functional one-line: detects when drilling has hit bedrock; prevents infinite-recursion waste. Currently the runner's job (per spec); /explore reports the telemetry only.

### Region G — Skill-ification status (what's invokable vs documented)

**G1. `/staged-explore` is doc-only, deferred (§7.2)** [Priority: HIGH | Confidence: confirmed]
The canonical runner described in the spec does not exist as an invokable skill. Revival trigger: "manual orchestration becomes unsustainable OR autonomous mode-selection ships at Level 3+." Functional one-line: the gap between the spec's design and the user's daily experience; until shipped, every staged run is hand-orchestrated.

### Region H (jump-scan) — Inquiry-framing as the upstream coverage control

**H1. Canonical-source coverage as an inquiry-framing concern, not an /explore mechanic** [Priority: HIGH | Confidence: scanned]
Reframing: if the inquiry's `_branch.md` doesn't make canonical-source coverage explicit (which sources matter, why), no mechanism inside /explore can compensate. The lever may live UPSTREAM of /explore in `runtime_environment/inquiry_framing_discipline.md`. Functional one-line: the coverage problem may be partly mis-located; D1 (pre-registry) is one expression of this reframing.

---

## Signal Log

| Signal | Type | Probed? | Reasoning |
|---|---|---|---|
| User's proposed for-loop matches existing §3.6 | density (high agreement) | YES | Probed via B1; confirms the proposal is already in spec, not new |
| `/staged-explore` is deferred-not-built | absence | YES | Probed via G1; central gap |
| Coverage rules (C1-C4) exist but firing is unverified | tension (spec says one thing; observed behavior unknown) | DEFERRED | Frontier question — needs audit of recent /explore runs |
| Merge Contract is spec-only | absence | YES | Probed via E1; staging cannot accumulate without it |
| Inquiry-framing-as-upstream-control | novelty (reframes the problem) | YES (jump-scan) | Probed via H1; lifts the question's locus |
| Deterministic pre-scan as boundary input | novelty | YES | Probed via D3; addresses canonical-source-miss in artifact mode |
| Negative-space audit (category-level absence) | absence | YES | Probed via D2; complements C3 |
| Per-pass parent-anchor telemetry | density | DEFERRED | Already in §5.3; not load-bearing for the design decision |
| Cross-witness independent run | novelty | YES (briefly) | Probed via D4; expensive but real option |

**Jump scan performed:** Yes — Region H (inquiry-framing as upstream control) is in a direction the user's seed did NOT point at. It produced one surface (H1) which reframes the problem rather than confirming the seed. Sensemaking should adjudicate.

---

## Confidence Map

| Region | Confidence | Notes |
|---|---|---|
| Region A (staging architecture) | scanned + confirmed | Both A1, A2, A3 are well-mapped from the existing spec |
| Region B (for-loop shape) | confirmed (B1) + scanned (B2) | B1 is canonical; B2 is named-but-not-developed |
| Region C (existing coverage) | confirmed | All four mechanisms are in the spec; firing behavior in practice is unknown |
| Region D (novel coverage) | scanned | All four are candidate designs; none are spec'd; relative priority unclear at this resolution |
| Region E (merge contract) | confirmed | Spec defines the contract; implementation deferred |
| Region F (diagnostics) | confirmed (F1) | Other diagnostics deferred per §7.2 |
| Region G (skill-ification) | confirmed | /staged-explore status is explicit in §7.2 |
| Region H (jump-scan) | scanned | Reframing-level signal; needs sensemaking to adjudicate |
| Confirmed-absent | n/a (no scanned-and-empty regions emerged at this resolution) |

---

## Frontier State

**Stable at coarse resolution.** All seven regions plus the jump-scan surface are mapped at D2; the design space's major directions are visible. Frontier remains open at the next-resolution layer:
- Within Region D, the relative ordering of D1/D2/D3 is undetermined (which gives the best canonical-source-coverage guarantee per unit of cost?).
- Within Region A, the A1-vs-A2 architectural decision is named but not adjudicated (sensemaking's job).
- Region H opens a meta-question that may relocate the problem entirely.

---

## Gaps and Recommendations

**Frontier questions handed to downstream disciplines:**

1. **For sense-making:** Is "canonical-source not missed" primarily a coverage-mechanism question (Region C + D) or primarily an inquiry-framing question (Region H)? The two readings imply different load-bearing changes. (Sensemaking ambiguity-collapse target.)

2. **For sense-making:** Where does staging logically belong — inside the discipline (A1) or in a runner (A2)? The surround layer ("disciplines stay atomic") strongly suggests A2, but the question deserves explicit adjudication, not assumption. (Sensemaking degrees-of-freedom reduction.)

3. **For decompose:** The design space contains at least three independently coherent sub-pieces: (i) "ship /staged-explore as a skill," (ii) "add canonical-source pre-registry to _branch.md," (iii) "verify existing coverage rules C1-C4 fire in practice." These may have different priority, different dependency order, and different audiences. Partition before innovation.

4. **For innovate:** What combinations of A/B/C/D/E candidates would form a coherent end-to-end coverage architecture? E.g., A2 + B1 + D1 + E1 is one assembly. D3 + C1 + C2 is another. The assembly-check step (innovate Phase 3.5) should surface the strongest combined design.

5. **For td-critique:** Among the assembled candidates, the load-bearing risk axes are: (i) does this actually prevent canonical-source miss? (ii) does it preserve /explore's idempotency invariant? (iii) is the cost proportional to the inquiry's stakes? (iv) is the user-facing complexity acceptable? Project-specific risk dimension check applies.

**Deferred signals (not probed at this resolution):**
- Branching-factor telemetry (§5.3 optional field) — useful for staging diagnostics but not load-bearing for the architecture choice
- Discovery-vs-Revisit telemetry (§7.2 deferred) — relevant only after multi-pass runs accumulate
- Cross-witness independent run (D4) — surfaced but low-priority at current cost/stake balance

---

## Telemetry

**Base metrics:**
- Mode: possibility
- Entry point: signal-first
- Cycles run: 4 (coarse-scan-with-surround → signal probe on seed → adjacent-region scan → jump-scan)
- Candidates generated: 14 (across regions A–H)
- Signals detected: 9; probed: 7; deferred: 2 (with reasoning)
- Resolution progression evidence: coarse-only (D2); fine-resolution drill deferred to staging if needed
- Frontier state: stable at coarse resolution; open at next resolution
- Discovery rate: declining (cycle 4's jump-scan produced 1 new surface, not a region)
- Convergence criteria: frontier stability ✓; declining discovery rate ✓; bounded gaps ✓
- Jump-scan performed: ✓ (Region H surfaced)
- Failure modes checked: Premature depth, Surface-only scanning, False confidence, Completeness bias in possibility mode, Open→closed drift, Silent boundary-discovery, Negative-space silent drop — none observed firing

**Staging-aware telemetry:** Not applicable (this is a first-pass possibility-mode scan, no parent_pass_anchor).

**Completeness-before-novelty check (possibility mode):** Standard/obvious approaches (A1, A2, A3, C1-C4, E1) surfaced BEFORE novel candidates (D1-D4, H1). ✓

---

## Self-Assessment

**Overall: PROCEED** (sufficient coverage at coarse resolution; convergence criteria met with jump-scan; surround layer included; possibility-mode completeness rule honored; no failure modes fired).

Downstream consumers (sense-making, decompose, innovate, critique) should treat this map as a complete inventory of the design space at D2. Specific candidates may need further drilling — particularly within Region D and Region H — but that drilling is the runner's job (or a future /staged-explore call), not this invocation's.
