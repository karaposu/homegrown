# Sensemaking: Pre-MVL+ mapping vs /explore enhancement

## User Input

`devdocs/inquiries/2026-05-12_22-25__pre_mvl_mapping_or_explore_enhancement/_branch.md`

Operating on: `_branch.md` + `exploration.md`. Exploration produced a 3-layer recommendation (inquiry-author / protocol / discipline) grounded in a critical discovery: the project ALREADY has `navigation_context_intake.md` + warmup files as precedent for pre-discipline context-intake. Sensemaking must stabilize the layer ordering, test for clean-resolution-trap (is 3-layer recommendation actually defense-in-depth or spec-bloat?), and commit actionability.

---

## SV1 — Baseline Understanding

Exploration validated the user's intuition that /MVL+ needs some form of context-intake before disciplines run. Three layers of fix were surfaced (inquiry-author template, protocol-level Candidate A + broader future protocol, /explore refinement note). Sensemaking must commit to which layers are MUST adoption now, which are COULD, which are research-frontier; and resolve whether the 3-layer structure is genuinely complementary or is structurally redundant.

---

## Phase 1 — Cognitive Anchor Extraction

### Constraints

- **C1 — Project precedent exists.** `homegrown/protocols/navigation_context_intake.md` + 5 warmup files at `homegrown/navigation/warmup/` show the pre-discipline context-intake pattern.
- **C2 — Candidate A is already recommended.** From LOOP_DIAGNOSE finding; addresses the specific iter-1 case (canonical-spec-loading when analyzing a discipline).
- **C3 — /explore's spec implicitly commits to canonical-anchor surfacing via "purposive" qualifier.** Explicit commitment is bounded refinement.
- **C4 — _branch.md template can include canonical-source listing.** Recent inquiries (19-43, 20-31, 20-51, 22-05) all already include this; making it template-mandatory is small.
- **C5 — Each layer catches at a different stage.** Author (proactive); Protocol (enforcement); Discipline (execution).
- **C6 — Operation-parsimony preference.** Project pattern this session: prefer leanest sufficient fix.

### Key Insights

- **K1 — The 3 layers catch at DIFFERENT structural points.** Author level prevents at inquiry-creation; protocol level enforces at runner-execution; discipline level catches at discipline-execution. They are complementary, not redundant.

- **K2 — Defense-in-depth here is structurally clean, NOT spec-bloat.** Each layer's cost is bounded (small spec edit per layer); each layer can independently catch the failure if the others miss. The test for "defense-in-depth vs bloat": is each layer's cost justified by its independent failure-catching capability? Yes for all three layers.

- **K3 — User's intuition is honored by the 3-layer structure.** User said "explore should have caught it OR we need a mapping step." Both readings are addressed: /explore note clarifies explore's commitment; protocol-level Candidate A is the mapping step.

- **K4 — Adoption sequencing matters.** Candidate A is highest-leverage (already recommended; specific to observed case). /explore note is small refinement. _branch.md template is small. Broader protocol is larger and research-frontier.

- **K5 — The broader protocol (mvl_context_intake.md analogous to navigation_context_intake.md) is research-frontier-to-actionable.** Should be sketched in a SEPARATE inquiry rather than mixed into this finding's MUST. This separates the immediate fix from the broader architectural addition.

- **K6 — Candidate A and _branch.md template are bundle-able.** Candidate A enforces; template suggests. Both are "ensure canonical sources are in the working context before disciplines run." They can be MUST together.

- **K7 — /explore note is bundle-able with Candidate A.** Small refinement; aligns spec with implicit commitment. Adoption alongside Candidate A is natural.

### Structural Points

- **S1 — Three layers + their cost:**
  - Inquiry-author: ~10-15 lines updating _branch.md template OR /MVL+'s "If NEW" section to require canonical-source listing.
  - Protocol level (Candidate A): ~10-15 lines added to /MVL+'s Discipline Workspace Invariant section.
  - Discipline level (/explore note): ~5-10 lines added to /explore's spec §1.1 verb-meaning section.
  - Broader protocol (research-frontier): full new doc (`homegrown/protocols/mvl_context_intake.md`) + warmup file structure. Larger.

- **S2 — Adoption sequence:**
  - **MUST (now):** Candidate A + _branch.md template + /explore note. Bundled — all small; same fix at different layers.
  - **COULD (alongside MUST):** Define the broader protocol's name + skeleton in this finding's Open Questions.
  - **DEFERRED (separate inquiry):** Full sketch of broader `mvl_context_intake.md` protocol; activate when 2+ context-intake-failure cases beyond canonical-spec-loading are observed.

- **S3 — Why each layer is needed:**
  - Author layer: catches if loop-author forgets canonicals. Proactive.
  - Protocol layer: enforces regardless of inquiry-author discipline. Backstop.
  - Discipline layer: catches if first two miss; aligns /explore's implicit commitment.

- **S4 — Three layers are complementary because they fire at different failure points:**
  - If author lists canonical → loaded via _branch.md.
  - If author forgets → Candidate A protocol-level loads.
  - If both miss (e.g., new discipline not yet in canonical-load patterns) → /explore note's purposive-surfacing-includes-canonical-anchor catches at execution.

### Foundational Principles

- **F1 — Each layer's adoption is bounded; combined adoption is layered.**
- **F2 — Project precedent (navigation_context_intake) supports the architectural framing.**
- **F3 — Research-frontier separation between immediate fix and broader architectural addition.**
- **F4 — Three-layer defense-in-depth is structurally clean when each layer catches at different stages.**

### Meaning-Nodes

- **M1 — "Layer"** — distinct structural point where a fix can apply (author / protocol / discipline).
- **M2 — "Defense-in-depth"** — multiple complementary layers; each catches if others miss.
- **M3 — "Bundled MUST adoption"** — three layers adopted together as one coordinated change.
- **M4 — "Broader mvl_context_intake protocol"** — research-frontier; generalizes Candidate A.

---

## SV2 — Anchor-Informed Understanding

The 3-layer recommendation is structurally clean defense-in-depth: each layer catches at a different stage (author / protocol / discipline) with bounded cost. Adoption sequence: bundle Candidate A + _branch.md template + /explore note as MUST (all small; complementary). The broader `mvl_context_intake.md` protocol is research-frontier; activate via separate inquiry when more context-intake-failure cases beyond canonical-spec-loading are observed. User's intuition (both /explore enhancement and pre-mvl mapping step) is preserved by the layered approach.

---

## Phase 2 — Perspective Checking

### Technical / Logical

The 3-layer recommendation is structurally consistent:
- /explore stays faithful to its scope (operates on given territory); refinement note makes implicit commitment explicit without overreach.
- Candidate A operates at runner level; doesn't conflict with /explore's discipline scope.
- _branch.md template operates at inquiry-creation level; doesn't conflict with the other two.

Defense-in-depth test: each layer can catch the iter-1 failure mode independently? Yes:
- If iter-1's _branch.md had listed `homegrown/navigation/references/navigation.md` as required canonical → loaded → contradiction visible.
- If iter-1's Candidate A had been adopted → canonical loaded → contradiction visible.
- If iter-1's /explore note had been adopted → purposive surfacing would have explicitly sought canonical → contradiction visible.

Three independent catches. Defense-in-depth confirmed.

**Surprise:** the layered recommendation is more robust than any single-layer fix because each layer has different failure modes (author forgets vs protocol skipped vs spec implicit).

### Human / User

User's specific framing: "explore should have caught it OR we need a mapping step." The 3-layer recommendation does both: /explore note (explore enhancement) + Candidate A (protocol-level mapping step) + _branch.md template (author-level prep).

User's pattern of preferring leaner structures: each layer's cost is bounded (~10-15 lines per spec edit; new doc deferred). Not bloated.

**Surprise:** user's intuition aligns precisely with the project's existing precedent (navigation_context_intake). The user's question wasn't a novel architectural proposal; it was re-discovery of an existing project pattern, applied to MVL+.

### Strategic / Long-term

If layers adopted:
- Future inquiries less likely to repeat iter-1's failure class.
- Project pattern (per-runner context-intake protocols) is reinforced.
- Path to autonomy levels (L3+): context-intake protocols become the autonomous loop's pre-flight check.

If layers not adopted:
- Failures recur (the iter-1 pattern is already observed once; without fix, likely to recur).
- Loop continues to need user correction per inquiry.

### Risk / Failure

- **Risk if 3-layer adopted with bloat:** spec edits across multiple files; readers must understand the layered approach. Mitigation: each layer is small + cross-references the others.
- **Risk if only Candidate A adopted:** other failure modes (e.g., author forgets to mention discipline name; /explore drifts to ignore purposive-surfacing implications) not caught.
- **Risk if broader protocol not deferred:** scope creep in this inquiry. Mitigation: research-frontier flag is explicit.

### Resource / Feasibility

- Candidate A: ~10-15 lines added to /MVL+ SKILL.
- _branch.md template: ~5-10 lines updated in /MVL+'s "If NEW" section.
- /explore note: ~5-10 lines added to /explore spec §1.1.
- Total: ~25-35 lines across 2 files. Bounded.
- Broader protocol: deferred to separate inquiry.

### Definitional / Internal Consistency

- Is the 3-layer recommendation consistent with the workspace invariant? YES — author level happens before invariant fires; protocol level enforces alongside invariant; discipline level operates within invariant.
- Is the recommendation consistent with /explore's spec? YES — refinement note aligns spec with implicit commitment via "purposive."
- Is the recommendation consistent with /MVL+'s pipeline structure? YES — adds to existing "If NEW" and "Workspace Invariant" sections.

### Definitional / Frame-exit Completeness

Gating: does the inquiry's commitments include multi-value inherited terms? YES — "canonical," "spec," "context," "discipline," "protocol," "layer."

**Existence Enumeration:**
- TYPE axis: "context" can mean (i) canonical-spec content; (ii) prior-finding content; (iii) project-config content; (iv) recent-related-inquiry content. Candidate A handles (i); broader protocol would handle (ii)-(iv). Scope is clear.
- LAYER axis: fix can be at author / protocol / discipline / runner level. All four addressed (runner level subsumed under protocol level here).

**Verdict Rigor:** is the 3-layer recommendation tested against H4 (over-correction)? Tested in cycle 6 of exploration — H4 has spec-bloat cost; here the 3 layers are each small + cross-reference each other; not bloat. DEFENSE HOLDS.

**Residual:** no major residual.

### Phase / Calibration-State

- Current calibration: 7-discipline project; navigation_context_intake exists but no mvl_context_intake equivalent. The 3-layer fix is calibration-state-compatible.
- Future (L3+): autonomous loops apply protocol-level Candidate A automatically; context-intake protocols pre-load for autonomous selection.

---

## SV3 — Multi-Perspective Understanding

All perspectives support the 3-layer recommendation as MUST + broader protocol as DEFERRED to separate inquiry:
- **Technical:** structurally consistent; each layer independent.
- **Human/User:** honors user intuition; matches existing precedent.
- **Strategic:** prevents failure recurrence; supports autonomy path.
- **Risk:** layered approach reduces single-point-of-failure risk; mitigations for spec-bloat in place.
- **Resource:** bounded (~25-35 lines across 2 files).
- **Definitional:** internally consistent across workspace invariant, /explore spec, /MVL+ pipeline.
- **Frame-exit:** scope clear; broader protocol-deferred is honest.
- **Phase/Calibration:** forward-compatible.

The shape: bundle 3 layers (Candidate A + _branch.md template + /explore note) as MUST; broader mvl_context_intake.md protocol as DEFERRED separate inquiry with research-frontier label.

---

## Phase 3 — Ambiguity Collapse

### Ambiguity 1: 3 layers MUST vs 1 layer (Candidate A) MUST + others COULD

**Strongest counter:** if Candidate A catches the iter-1 case, the other 2 layers are redundant in practice. Only Candidate A as MUST.

**Why the counter fails:** the iter-1 case is one of MANY potential failure cases. Each layer catches different cases:
- _branch.md template catches if inquiry-author writes _branch.md without listing canonicals (Candidate A's trigger relies on inquiry mentioning discipline name — what if it doesn't?).
- /explore note catches if both author and protocol miss (e.g., a new discipline not yet in Candidate A's canonical-load patterns).
- Candidate A catches if author lists canonical OR if inquiry mentions discipline name.

Each layer plugs a different hole.

**Confidence:** HIGH on 3 layers MUST.

**Resolution:** all 3 layers MUST.

---

### Ambiguity 2: Broader protocol as MUST or DEFERRED

**Counter:** the broader protocol is the structurally cleanest fix (matches project precedent). Why defer?

**Why the counter PARTIALLY HOLDS:** the broader protocol IS structurally cleanest. But:
- It's larger than the 3-layer immediate fix (~80-150 lines vs ~25-35).
- Sketching it requires careful design (routing categories; warmup file structure).
- The 3-layer fix handles the OBSERVED case (canonical-spec-loading) NOW; the broader protocol handles BROADER cases (cross-finding-inheritance; project-config; etc.) that haven't been observed at scale.

**Resolution:** broader protocol DEFERRED to separate inquiry. Sketch its name + skeleton in this finding's Open Questions. Activate when 2+ additional context-intake-failure cases beyond canonical-spec-loading are observed.

**Confidence:** HIGH.

---

### Ambiguity 3: /explore note: spec edit OR _branch.md template OR Candidate A only

**Counter:** /explore note duplicates Candidate A; both enforce canonical loading.

**Why the counter fails:** they're at different layers. Candidate A enforces BEFORE /explore runs (canonical is in working context). /explore note guides /explore DURING execution (canonical-anchor seeking as part of purposive surfacing). Different stages.

**Confidence:** HIGH.

**Resolution:** /explore note is bounded refinement to spec §1.1; small enough to MUST.

---

### Ambiguity 4 (Load-bearing concept test): "Defense-in-depth"

Is "defense-in-depth" project-native?

**Counter:** loop-coined term.

**Resolution:** "defense-in-depth" is software-engineering precedent (multiple layers of protection). In project terms: "layered fix with bounded per-layer cost." Use both terms.

---

### Specific-vs-pattern

This inquiry's specific case: canonical-spec-loading for iter-1's failure. The wider pattern: pre-MVL+ context-intake systematically. The 3-layer immediate fix addresses the specific; the deferred broader protocol addresses the wider pattern.

---

## SV4 — Clarified Understanding

The 3-layer recommendation is the immediate fix:
1. **Inquiry-author level:** update _branch.md template (or /MVL+'s "If NEW" section) to require listing canonical sources.
2. **Protocol level:** adopt LOOP_DIAGNOSE Candidate A (canonical-spec-loading in /MVL+'s Discipline Workspace Invariant).
3. **Discipline level:** add a refinement note to /explore's spec §1.1 clarifying that purposive surfacing includes canonical-anchor seeking when the territory involves analyzing a discipline.

Each layer is small (~5-15 lines per file); total bounded (~25-35 lines across 2 files). The 3 layers catch at different stages (author / protocol / discipline); they are complementary, not redundant.

The broader `mvl_context_intake.md` protocol (analogous to existing `navigation_context_intake.md`) is RESEARCH-FRONTIER, deferred to a separate inquiry. Activation trigger: 2+ additional context-intake-failure cases beyond canonical-spec-loading observed.

User's question is answered: BOTH /explore enhancement (the spec note) AND a mapping step (Candidate A protocol-level) are adopted, in a layered fashion. The user's H6 architectural insight (MVL+ needs context-intake phase) is structurally confirmed and will be fully realized when the broader protocol is sketched.

---

## Phase 4 — Degrees-of-Freedom Reduction

**Fixed:**
- F1: 3-layer recommendation as MUST.
- F2: Broader protocol DEFERRED to separate inquiry (research-frontier with revival trigger).
- F3: Adoption sequence — all 3 layers bundled together as MUST.
- F4: Each layer's cost bounded.
- F5: User's intuition honored via the layered approach.

**Eliminated:**
- E1: Single-layer MUST (Candidate A only) — misses other failure modes.
- E2: Broader protocol as MUST now — too large for one inquiry; better separate.
- E3: No fix — the iter-1 failure pattern is real; not adopting risks recurrence.
- E4: Spec-bloat alarm — each layer is bounded.

**Viable paths:**
- P1 (Decomposition): partition 3 layers + the broader-protocol-deferred sketch.
- P2 (Innovation): generate concrete spec text per layer.
- P3 (Critique): adversarially test the 3-layer recommendation + the defer-vs-now decision.

---

## SV5 — Constrained Understanding

The finding will:
1. Adopt 3-layer fix as MUST (Candidate A + _branch.md template + /explore note).
2. Defer broader mvl_context_intake.md protocol to separate inquiry.
3. Acknowledge user's intuition + the project precedent.
4. Provide concrete spec text per layer.
5. Note iteration-N risk (this finding might be wrong).

---

## Phase 5 — Conceptual Stabilization

### Accommodation check

No destabilizing anchors. Perspectives converged.

### Self-reference check

External grounding: project precedent (navigation_context_intake); /explore + /MVL+ canonical specs; iter-1 artifact evidence.

---

## SV6 — Stabilized Model

### The stabilized verdict

**Three layers, all MUST, bundled adoption:**

1. **Inquiry-author level** — update `_branch.md` template (in `/MVL+` SKILL's "If NEW" section) to include a "Required canonical-spec loads" section. Inquiry-authors list canonical sources at inquiry-creation time.

2. **Protocol level** — adopt LOOP_DIAGNOSE Candidate A. Add to `/MVL+`'s Discipline Workspace Invariant section: "When the inquiry's `_branch.md` mentions a discipline X by name or otherwise analyzes X's structure, the canonical spec at `homegrown/X/references/X.md` MUST be loaded in full into the working context before the first discipline runs."

3. **Discipline level** — add a refinement note to `/explore`'s spec §1.1 verb-meaning: "Purposive open-mode surfacing INCLUDES canonical-anchor seeking when the territory involves analyzing a discipline. The canonical specs of disciplines referenced in the inquiry stand out as worth bringing into view; /explore should explicitly seek them via the relevance signal type."

### Broader protocol (RESEARCH-FRONTIER, deferred)

`homegrown/protocols/mvl_context_intake.md` — analogous to existing `homegrown/protocols/navigation_context_intake.md`. Would route per inquiry-type:
- discipline-analysis → load canonical specs (Candidate A subset).
- cross-finding-inheritance → load referenced prior findings + check canonical contradictions.
- standalone → minimal context-intake.
- continuation → load thread predecessors.

Plus a `homegrown/MVL+/warmup/` directory with per-route warmup files.

**Activation trigger:** 2+ additional context-intake-failure cases beyond canonical-spec-loading observed (e.g., cross-finding-inheritance authority confusions; missing project-config context; etc.).

**Why deferred:** larger scope; routing design needs careful work; the 3-layer immediate fix handles the OBSERVED case class.

### How SV6 differs from SV1

| | SV1 | SV6 |
|---|---|---|
| Layer count for MUST | Unclear (1, 2, 3, or 4?) | 3 layers MUST, bundled |
| Broader protocol status | Possibly MUST | DEFERRED to separate inquiry |
| User intuition handling | Partially addressed | Fully honored via layered approach |
| Adoption sequencing | Unclear | Bundled MUST + deferred research-frontier |

### Failure modes checked

- Status quo bias: tested — 3 layers add to status quo; not defending unchanged state.
- Premature stabilization: tested — counter-interpretations addressed for each ambiguity.
- Anchor dominance: no single anchor; rests on precedent + structural reasoning + 3 layer independence.
- Perspective blindness: Risk perspective surfaced spec-bloat concern; mitigated.
- Clean resolution trap: tested — the 3-layer feels elegant; tested against H4 (over-correction); each layer's cost bounded; defense-in-depth structurally clean.
- Self-reference blindness: external grounding via precedent + artifact evidence.

---

## Saturation Indicators

- Perspective saturation: APPROACHING.
- Ambiguity resolution: 4/4 resolved (all HIGH confidence).
- SV delta: substantial (layer count fixed; sequencing committed; broader protocol deferred).
- Anchor diversity: DIVERSE.

**Verdict: PROCEED to Decomposition.**
