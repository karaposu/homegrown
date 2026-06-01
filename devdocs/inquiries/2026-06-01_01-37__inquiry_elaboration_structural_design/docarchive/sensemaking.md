## User Input

`devdocs/inquiries/2026-06-01_01-37__inquiry_elaboration_structural_design/_branch.md` (prior consumed: `surfacing.md`; controlling input: the 01-17 scope finding)

---

# Sensemaking — Inquiry Elaboration Structural Design

## SV1 — Baseline understanding
"Write IE's spec like the other discipline specs, putting the settled scope into the right sections, and define what its output file looks like."

## Phase 1 — Cognitive Anchor Extraction

**Constraints**
- **C1 — Match the sibling 5-section family.** The anatomy canon and every shipped sibling (surfacing/routelister/routeman) use: §1 Identity (verb-meaning + NOT-list + vocabulary + taxonomy placement) · §2 Components (+ primitive composition) · §3 Process Model · §4 Quality (LAYER-1/LAYER-2 failure modes + asymmetric-failure + coverage + self-assessment) · §5 Output (+ Telemetry + Frontier). IE adopts this; don't invent a bespoke shape.
- **C2 — Self-containment.** Per project memory + routelister §1.4: the spec has NO outbound pointers to design-history/theory; it defines its own vocabulary and grounds each NOT-list entry intrinsically.
- **C3 — Carry the settled scope verbatim, don't re-decide it.** The structure ENCODES the 01-17 payload: achieve → §1 verb-meaning + §5 output; cover (3 phases) → §2 Components + §3 Process; not-cover (7 borders) → §1 NOT-list; decision rule → §1; upper bound → §2 + §4; verify 3 axes → one §2 Component; R1–R4 → specific section slots.
- **C4 — Two-file packaging.** Ships as `SKILL.md` (operational wrapper with the Step-0 mandatory pre-read) + `references/<name>.md` (the framework). Matches the family.
- **C5 — Stay structural.** Design the spec shape + output schema; do NOT design the runner pipeline wiring or spawn (process layer, next).

**Key insights**
- **K1 — mostly instantiation, not invention.** IE's spec is a near-isomorph of the sibling specs; the structural work is *filling the template with settled content*, which keeps structural risk low and consistency high.
- **K2 (resolves G1) — output is SUBSTANTIVE + a thin verdict header.** Surfacing's output is *thin* because item content lives in the workspace; IE has no separate territory whose content stays elsewhere — **the framing content IS the payload.** So IE's output = a **substantive transform** (the elaborated-inquiry spec, like sensemaking's SV6) **plus a thin verdict header** the runner reads to act (request-structure verdict + fidelity verdict). Not surfacing's thin-artifact pattern.
- **K3 (resolves G4) — the upper bound is encoded structurally, making the spec self-policing.** Two placements: (a) §2 Components describe each phase as a *tailored internal operation that does not invoke the neighbor discipline*; (b) §4 names **"wrapper-fusion / mini-runner"** as a LAYER-2 identity failure. The spec then guards its own boundary.
- **K4 (G3) — the migration table is a structural deliverable.** A per-`branch.md`-element verdict: {becomes an IE Component/output field | stays runner-side}. Handed to decomposition/innovation to produce exactly.
- **K5 (resolves G2) — verify = one Component, three fixed sub-checks** (internal-consistency / user-faithfulness / external-validity), per R3 a *fixed-criteria gate*, not a fitness landscape.

**Structural points**
- §1 Identity carries the decision rule (object: request-vs-problem; mode: perceive-vs-act) as the discipline's organizing principle, plus the 7-border NOT-list (each grounded in object-or-mode).
- §5 Output needs a **field schema** (à la routeman's per-route table): the elaborated-inquiry spec fields + the verdict header fields.
- The **migration table** maps the 6 `branch.md` Step-3 elements + Step 3.5 + Step 3.6 to homes.

**Foundational principles**
- **P1 — structure follows settled meaning.** The spec encodes 01-17/22-30; it does not re-open them.
- **P2 — a discipline spec is a self-contained individual** (C2).

**Meaning-nodes:** *spec skeleton (5 sections)*; *output schema (substantive + verdict header)*; *migration table*; *self-policing upper bound*.

### SV2 — Anchor-informed understanding
The structural job is **instantiate the sibling 5-section template with IE's settled content**, decide the **output schema** (substantive framing + thin verdict header), and produce the **migration table** — with the upper bound encoded as tailored Components + a LAYER-2 failure so the spec polices its own boundary. *Meta-inspection (H4 concept-names): "process" and "output" are overloaded here and must be split (see frame-exit below).*

## Phase 2 — Perspective Checking

- **Technical/logical** — every scope element has a clean home section (no orphans, no overlaps). New anchor: the **request-structure verdict needs a small typed vocabulary** — `single` / `parallel-set{...}` / `sequential-chain[...]` (+ order) — an §2/§5 element. The framing content reuses the existing 5 meta-aspects (subject/action/level/observation-targets/deliverable-shape) — already a de-facto schema in branch.md.
- **Human/user** — "discuss how it should be structurally" = the user wants to *see a concrete skeleton + where each piece goes*, not abstract theory. Deliverable anchor: a **section-by-section skeleton + the output schema + the migration table**, concrete enough to react to.
- **Risk/failure** — three structural failure poles: (a) **bespoke divergence** from the sibling shape (reader + maintenance cost) → rejected by C1; (b) **boundary leak** (no LAYER-2 guard → wrapper-fusion slips in) → rejected by K3; (c) **process-bleed** (designing the spawn / pipeline) → rejected by C5. The design must avoid all three.
- **Definitional/internal-consistency** — Does "substantive output" contradict "perceive-not-act"? No: producing a framing artifact is *perceiving/emitting*; *acting* = the runner encoding+spawning. Does having a "§3 Process Model" contradict "process layer is out of scope"? No — see frame-exit: the spec's internal phase-sequence (§3) is structural and IN; the runner's pipeline wiring is the process layer and OUT.
- **Definitional / Frame-exit Completeness** *(gating FIRES — "process"/"output"/"phase" inherited and used at ≥2 levels):*
  - **"process"** → {(a) the spec's §3 **Process Model** = IE's internal phase order [structural, IN]; (b) the **process layer** = runner pipeline placement + spawn + gates [OUT, next layer]}. Keep strictly separate; §3 describes IE's *own* phases only.
  - **"output"** → {(a) the **substantive** elaborated-inquiry spec [the Transform]; (b) the **thin verdict header** the runner consumes [request-structure + fidelity verdicts]}. Both ship; different roles.
  - **"phase / component"** → {IE's *tailored* phase (comprehend-the-request) vs the *neighbor discipline* it resembles (sense-making's Comprehending)}. The spec names the tailored phase and explicitly does NOT invoke the neighbor (the upper bound).
- **Phase/Calibration-State** — the spec shape is stable across project phases; only G5 (Progression depth) is mildly open, and it resolves light (single-pass with at most one verify-bounce), not a 6-version ladder. Not phase-gated.

### SV3 — Multi-perspective understanding
The structural model is **the sibling template, instantiated**, with three deliberate decisions resolved: output = substantive + verdict-header (K2); verify = one Component/3 axes (K5); upper bound = tailored-Components + LAYER-2 failure (K3). The frame-exit split (process-section vs process-layer; substantive vs header output) keeps the structural run from bleeding into the process layer.

## Phase 3 — Ambiguity Collapse

**A1 — Full 5-section shape, or a reduced one (IE is "just a front door")?**
- *Counter:* IE is simpler than its siblings; maybe fewer sections.
- *Why reduced fails (structural):* the anatomy + all three siblings carry the full set; dropping §4 Quality (failure modes/coverage) or Telemetry removes exactly the self-policing the upper bound needs. Simplicity = shorter sections, not fewer.
- *Confidence:* HIGH. *Resolution:* full 5-section shape; sections are concise but all present.

**A2 (G1) — Output thin (surfacing-style) or substantive (sensemaking-style)?**
- *Counter:* the most recent sibling (surfacing) emits a thin artifact; match it.
- *Why thin-only fails:* surfacing is thin because item content stays in the workspace; IE has no external territory — the framing IS its content. A thin-only IE output would carry no framing, defeating the achieve.
- *Confidence:* HIGH. *Resolution:* **substantive transform (the elaborated-inquiry spec) + a thin verdict header** (request-structure verdict + fidelity verdict) for the runner. *Now fixed:* IE's §5 Output has two parts — payload + header.

**A3 (G2) — verify = one Component (3 axes) or three Components?**
- *Resolution:* one Component, three fixed sub-checks; a fixed-criteria gate (R3), explicitly not a fitness landscape (that would be `/td-critique`). *Confidence:* HIGH.

**A4 (G4) — how is the upper bound encoded so the spec self-polices?**
- *Resolution:* (a) §2 Components phrase each phase as tailored + "does not invoke the neighbor discipline"; (b) §4 LAYER-2 failure mode "wrapper-fusion (becomes mini-runner)." *Confidence:* HIGH.

**A5 (G5) — does IE need a Progression (SV-like versions)?**
- *Counter:* sensemaking has SV1→SV6; maybe IE needs a ladder.
- *Resolution:* **light** — a 2–3 snapshot progression {comprehended-intent → drafted-framing → verified-framing}, with at most one verify→comprehend bounce; not a 6-version ladder (IE is mostly single-pass). *Confidence:* MED (decomposition/innovation may refine the exact snapshot names).

**A6 — §3 Process Model (internal) vs the out-of-scope process layer.**
- *Resolution:* §3 describes IE's *own* three-phase order + the one bounce + the depth-limit stop-rule (R1); it does NOT describe runner pipeline placement or spawn. *Confidence:* HIGH. (Frame-exit made this explicit.)

### SV4 — Clarified understanding
Six ambiguities collapse to a concrete skeleton: full 5-section sibling shape; §5 output = substantive framing + thin verdict header; verify = one 3-axis gate; upper bound self-policed via tailored Components + a LAYER-2 failure; a light progression; §3 = internal phases only.

## Phase 4 — Degrees-of-Freedom Reduction

**Fixed:** the 5-section sibling shape; two-file packaging; output = substantive + verdict-header; verify = one Component/3 axes; upper bound = tailored-Components + LAYER-2 "wrapper-fusion"; §3 = internal phases only; self-contained.

**Eliminated:** reduced/bespoke spec shape (A1); thin-only output (A2); 3-component verify (A3); 6-version progression (A5); process-layer design (C5/A6).

**Remaining viable (to decomposition/innovation):** the per-section content draft; the exact §5 field schema; the **migration table** (G3 — every branch.md element → home); the progression snapshot names (A5); the §2 **primitive profile** (which load-bearing primitives per phase).

### SV5 — Constrained understanding
The structural solution space is closed to: instantiate-the-template with the resolved decisions; the only open variables are the concrete per-section *text* and the two tables (output schema; migration) — all genuinely structural, none meaning or process.

## Phase 5 — Conceptual Stabilization
*Accommodation check:* the model stabilized after the frame-exit split (process-section vs process-layer); later perspectives confirm. Stable.

### SV6 — Stabilized model

**IE's structure is the sibling 5-section discipline-spec template, instantiated with the settled scope, plus a two-part output and a migration table — with the upper bound encoded so the spec polices its own boundary.**

- **§1 Identity** — verb-meaning (comprehend a raw request and shape it into a loop-ready, fidelity-verified inquiry); the **decision rule** (object: request-not-problem; mode: perceive-not-act) as the organizing principle; the **7-border NOT-list** (each grounded in object-or-mode); vocabulary (request / framing / elaborated-inquiry spec / request-structure verdict / fidelity verdict); taxonomy placement (Upstream/front-of-loop); **self-containment** statement.
- **§2 Components** — the three **tailored** phases as components (each: "tailored; does not invoke the neighbor discipline"): (1) comprehend-&-articulate, (2) perceive-request-structure, (3) verify-framing-fidelity (3 axes); the **request-structure verdict** typed vocabulary (single / parallel-set / sequential-chain + order); the **depth-limit** (R1) as a component property of (1); a **primitive profile** per phase.
- **§3 Process Model** — the internal order: comprehend → perceive-structure → verify, with one optional verify→comprehend bounce; the depth-limit stop-rule (R1); the request-signal basis for (2) (R2). *Internal phases only — not runner wiring.*
- **§4 Quality** — LAYER-1 operational failures (e.g., missed-bundle, over/under-framing, weak-fidelity) + **LAYER-2 identity failures**: *problem-modeling* (becomes sense-making), *wrapper-fusion* (becomes mini-runner — the upper-bound guard), *acting* (becomes runner); asymmetric-failure stance (a misframing reaching the loop is worse than an over-careful framing); coverage + self-assessment (PROCEED/FLAG/RE-RUN).
- **§5 Output** — **(a) substantive:** the elaborated-inquiry spec (the framing: 5 meta-aspects + goal + scope) — a field schema; **(b) thin verdict header:** request-structure verdict + fidelity verdict (what the runner acts on); a light **Progression** {intent → draft → verified}; **Telemetry**; **Frontier**.
- **Migration table** (structural deliverable): each `branch.md` element → home — comprehension/fidelity elements INTO IE; orchestration STAYS runner.
- **Packaging:** `SKILL.md` wrapper (Step-0 pre-read) + `references/<name>.md` framework; self-contained.

**How it differs from SV1:** SV1 said "write it like the others + define the output." SV6 fixes the *exact* template, resolves the four open structural choices (output shape, verify-as-one-gate, upper-bound-encoding, progression-depth), splits the overloaded "process"/"output" so the run doesn't bleed into the process layer, and names the two tables (output schema, migration) as the remaining concrete work.

## Saturation Indicators
- Perspective saturation: frame-exit produced the last new distinctions (process-section vs layer; substantive vs header); subsequent confirmed.
- Ambiguity resolution: 6/6 (5 HIGH, 1 MED with the progression-naming flagged OPEN).
- SV delta: moderate-large (SV1 vague "write it like the others" → SV6 fixed skeleton + resolved choices + two named tables).
- Anchor diversity: constraints/insights/structural-points/principles across technical/human/risk/definitional/frame-exit/phase.

## Frontier (to Decomposition / Innovation / Critique)
- **G3** — the exact migration table (every branch.md element → home).
- **G5** — progression snapshot names + whether the verify-bounce is one or bounded-N.
- **G6 (new)** — the §5 output field schema (exact fields for the elaborated-inquiry spec + verdict header).
- **G7 (new)** — the §2 primitive profile per phase (consistency with the taxonomy primitive table).
