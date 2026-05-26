# Exploration: Pre-MVL+ mapping vs /explore enhancement

## User Input

`devdocs/inquiries/2026-05-12_22-25__pre_mvl_mapping_or_explore_enhancement/_branch.md`

Territory: where does canonical-anchor-surfacing responsibility belong in the project's /MVL+ + /explore architecture? Probes the user's deep observation that iter-1's missed canonical content was highly-relevant-and-obvious; tests 6 hypotheses (H1–H6).

**Canonical specs loaded:**
- `/explore` canonical at `homegrown/explore/references/explore.md` — particularly §1.1 verb-meaning (purposive open-mode surfacing); §2.1 signal types (density, novelty, relevance, tension, absence); §3.1 Step 0 declarations; §3.3 boundary-discovery sub-phase; §4.1 failure modes.
- `/MVL+` SKILL at `homegrown/MVL+/SKILL.md` — Discipline Workspace Invariant; pipeline structure; "If NEW" + "If RESUME" sections.
- LOOP_DIAGNOSE Candidate A from prior finding.

**Existing project precedent discovered during boundary-discovery:**
- `homegrown/protocols/navigation_context_intake.md` — a Navigation Context Router protocol that decides how a session should prepare context BEFORE project-level Navigation. Routes to warm-up files under `homegrown/navigation/warmup/` (navigator-warmup1/2/3.md; navigator-prior-map-overlay.md; navigator-refresh.md). **This is the pattern the user is intuiting** — pre-discipline context-intake protocol + warmup files. Already exists for /navigation; could be analogized to /MVL+.

---

## Step 0 — Declarations

| Field | Value | Why |
|---|---|---|
| `cognitive-commitment-mode` | open | testing multiple hypotheses with structural-grounds analysis |
| `territory-type-mode` | possibility | architectural-decision space |
| `entry-point` | signal-first | 6 hypotheses in _branch.md |
| `expected` | ~18 items | options + structural grounds + precedents + cost/benefit per option |
| `depth-level` | D2-D3 | functional one-line + structural-adjacency citations |

**Boundary-discovery FIRED** and surfaced critical context: the project ALREADY has a context-intake protocol pattern (`navigation_context_intake.md` + warmup files). This is precedent for the user's H2 (pre-MVL+ context-mapping step).

---

## Cycle log

### Cycle 1 — Probe whether iter-1 was /explore's failure

**Signal:** user claims /explore should have surfaced the canonical /navigate spec.

**Probe — examine /explore's verb-meaning:**

/explore's spec at §1.1: "purposive open-mode surfacing of a territory's contents. Attention is biased by the inquiry's purpose toward what stands out as worth bringing into view."

For iter-1's inquiry "is /navigate a specialization of /explore," the canonical /navigate spec at `homegrown/navigation/references/navigation.md` is OBVIOUSLY worth bringing into view. /explore SHOULD have surfaced its identity-defining content.

**Why /explore didn't (per cycle-by-cycle examination of iter-1's exploration.md):**

- Iter-1 exploration cycle 6: examined the 11-40 finding's 4-component model (Enumerate + Label + Guide + Select). Inherited from the FINDING, not from the canonical spec.
- The TERRITORY iter-1 implicitly framed: "the structural-claim space for /navigate's identity, as informed by the prior 11-40 factoring finding."
- The canonical /navigate spec WAS implicitly in scope (any /navigate discussion has the canonical as a reference) but /explore didn't probe its identity-defining lines.

**Two interpretations:**

- **Interpretation A:** /explore is faithful — it operates on the given territory. If the territory wasn't framed to include the canonical spec's identity content, /explore can't surface it. Not a /explore failure.

- **Interpretation B:** /explore's "purposive" qualifier IMPLIES that highly-relevant-and-obvious sources should be sought. The canonical spec is HIGHLY-RELEVANT-AND-OBVIOUS for any "/navigate structural identity" inquiry. /explore's signal detection should have caught this.

**Which is right?**

Both are partially right. /explore's spec doesn't EXPLICITLY name "canonical anchor for the inquiry's named subject" as a signal type — the 5 signal types are density, novelty, relevance, tension, absence. "Relevance" is the closest match: purpose-biased attention SHOULD make the canonical spec stand out.

So /explore's spec implicitly commits to canonical-anchor-surfacing via the "relevance signal." But the commitment isn't explicit, and iter-1 didn't apply it.

**Confidence:** /explore's spec implicitly covers canonical-anchor-surfacing via relevance, but explicit commitment is needed.

### Cycle 2 — Probe whether context-intake is /explore's job or runner's job

**Signal:** the user asks "do we still need some kind of mapping made by explore?"

**Probe — examine /explore's scope:**

/explore is a discipline INSIDE the MVL+ loop. Disciplines operate on their given workspace (per /MVL+'s Discipline Workspace Invariant). Disciplines don't independently load external files into the working context; that's a runner/inquiry-author responsibility.

But: /explore CAN read external files when surfacing — it's the surfacing discipline. /explore COULD have a "canonical anchor seeking" sub-phase that reads `homegrown/<discipline>/references/<discipline>.md` when the inquiry mentions discipline names.

**Counter — would this overreach /explore's scope?**

/explore's boundary-discovery sub-phase already does scope-extension: it probes outward when the territory isn't pre-specified. Adding a "canonical-anchor seeking" sub-phase would be similar — extending /explore's scope to include canonical sources.

**Distinction surfaced:** /explore CAN do canonical-anchor-surfacing (precedent: boundary-discovery sub-phase). But it doesn't currently HAVE an explicit commitment to do so.

**Confidence:** /explore could be enhanced, but the question is whether enhancement is the BEST fix or whether the runner level (Candidate A) is better.

### Cycle 3 — Discover and probe the navigation_context_intake precedent

**Signal:** boundary-discovery surfaced `homegrown/protocols/navigation_context_intake.md`.

**Probe — examine this protocol:**

navigation_context_intake.md is a Navigation Context Router that "decides how a session should prepare context BEFORE project-level Navigation." It routes to warmup files at `homegrown/navigation/warmup/`:
- navigator-warmup1.md
- navigator-warmup2.md
- navigator-warmup3.md
- navigator-prior-map-overlay.md
- navigator-refresh.md

The protocol explicitly addresses the question: "Before disciplines run, what context needs to be loaded?"

**Analogy check:** /MVL+ currently doesn't have a context-intake protocol. The user's intuition ("we need some kind of mapping") aligns with this missing protocol. Analogous protocol would be `mvl_context_intake.md` (or similar) that runs BEFORE /MVL+'s Exploration discipline.

**What would mvl_context_intake do?**
- Read _branch.md.
- Classify the inquiry: discipline-analysis / cross-finding-inheritance / standalone question / etc.
- For discipline-analysis: load canonical specs of analyzed disciplines (Candidate A).
- For cross-finding-inheritance: load referenced findings + check for canonical contradictions.
- For other types: appropriate context-loading.
- Then proceed to Exploration with the working context primed.

**Distinction surfaced:** the project ALREADY has the precedent pattern (navigation_context_intake + warmup files). Analogizing to /MVL+ is a SHORT-CAR for the user's H2 hypothesis.

**Confidence:** HIGH — the precedent exists; the proposal is structurally clean.

### Cycle 4 — Compare H1 (/explore enhancement) vs H2 (pre-MVL+ context-intake)

**Signal:** which option is structurally better?

**Probe:**

**H1 (/explore enhancement):**
- Pros: keeps the fix within /explore (the surfacing discipline); leverages /explore's existing boundary-discovery pattern.
- Cons: extends /explore's scope; /explore must know HOW to identify "the inquiry's named subject" (parsing _branch.md text); risk of overreach into runner territory.

**H2 (pre-MVL+ context-intake protocol):**
- Pros: clean separation of concerns (context-intake is a protocol; /explore is a discipline); matches existing project precedent (navigation_context_intake); explicitly addresses what to load BEFORE disciplines run.
- Cons: adds a new protocol; learning curve for project users; another layer.

**Which has better precedent + structural fit?**

H2 directly matches an existing project pattern (`navigation_context_intake.md` + warmup files). The precedent is unambiguous. H1 would extend /explore in a less-precedented way.

**Distinction surfaced:** H2 has stronger structural fit due to existing precedent.

**Confidence:** HIGH — H2 is structurally cleaner.

### Cycle 5 — Compare H3 (Candidate A alone) vs H2 (broader context-intake protocol)

**Signal:** Candidate A from LOOP_DIAGNOSE is already recommended. Is H2 (broader) needed beyond it?

**Probe:**

**Candidate A scope:** "When the inquiry's _branch.md mentions a discipline X, load the canonical spec at homegrown/X/references/X.md."

**What Candidate A handles:**
- The iter-1 case (canonical /navigate spec).
- Future inquiries analyzing /sense-making, /comprehend, etc.

**What Candidate A doesn't handle:**
- Cross-finding-inheritance authority confusion (Family B from 22-05 inquiry). When an inquiry inherits a claim from a prior finding, Candidate A doesn't load the prior finding's canonical context.
- Project-wide context (e.g., enes/desc.md, README.md) — relevant for inquiries that touch project end-goals.
- Recent-related-inquiries (within the inquiry-thread) — relevant for continuation inquiries.

**Distinction surfaced:** Candidate A handles ONE specific case (discipline-analysis); a broader context-intake protocol (H2) handles multiple cases. H2 is generalization of Candidate A.

**The question:** generalize NOW or wait?

The /navigation context-intake protocol generalizes — it has multiple routing branches (bounded local context; cold project-level session; etc.). A /MVL+ context-intake protocol could do similarly:
- For discipline-analysis inquiries: load canonical specs (= Candidate A).
- For cross-finding inquiries: load prior findings + check canonical contradictions.
- For standalone inquiries: minimal context-intake.

**Confidence:** generalizing now via H2 is structurally appealing but has more migration cost. Candidate A alone is the minimum viable; H2 is the future generalization.

### Cycle 6 — Probe H4 (combination /explore enhancement + Candidate A)

**Signal:** does defense-in-depth help?

**Probe:**

If /explore is enhanced (H1) AND Candidate A is adopted (H3):
- /explore's signal-detection explicitly seeks canonical anchors.
- The /MVL+ protocol mandates canonical-spec-loading at the workspace level.

This is two checks at different stages — redundant but defense-in-depth.

**Cost:** spec edits in /explore + protocol edits in /MVL+. Bloat risk.

**Distinction surfaced:** defense-in-depth has value but adds cost. Not the minimum viable fix.

**Confidence:** H4 viable but unnecessary as primary recommendation.

### Cycle 7 — Probe H5 (inquiry-author level fix)

**Signal:** maybe the fix is in _branch.md authoring — the inquiry-author should list canonical sources.

**Probe:**

If _branch.md template includes "Required canonical-spec loads" section (which iter-2 of 19-43, 20-31, 20-51 all explicitly added), the inquiry-author lists canonicals; the loop loads them.

**This is what's been happening in recent inquiries.** _branch.md in these inquiries explicitly lists canonical specs to load.

**Question:** is this enough? Is _branch.md authoring discipline reliable?

**Counter:** _branch.md is written by the loop OR the user. If the loop writes _branch.md without listing canonicals (as iter-1 of 19-43 did), the listing is missing. The fix requires PROTOCOL ENFORCEMENT, not just template discipline.

**Distinction surfaced:** H5 (inquiry-author level) is a partial fix — relies on discipline that might not hold. Needs protocol-level backstop (= Candidate A or H2).

**Confidence:** H5 alone is insufficient; combined with H2 or Candidate A, it's strong.

### Cycle 8 — Probe H6 (categorical insight: MVL+ needs context-mapping phase)

**Signal:** is the user's intuition that "MVL+ needs mapping" a structural insight?

**Probe:**

Look at /MVL+'s current pipeline: it goes directly from _branch.md creation → EXECUTE PIPELINE → Exploration. There's NO context-intake phase.

The project DOES have a context-intake protocol for /navigation. The asymmetry is notable.

**Hypothesis:** /MVL+ might benefit from analogous context-intake. The user's intuition is right at the architectural level.

**Distinction surfaced:** /MVL+ has a structural gap — no context-intake phase. Adding one would parallel /navigation's existing pattern.

**Confidence:** HIGH — the asymmetry is real; the structural gap is real.

### Cycle 9 — Synthesize: what should be done?

**Probe:**

The verdicts so far:
- /explore is faithful to its spec; the failure isn't its fault per its current scope.
- /explore's purposive surfacing IMPLIES canonical-anchor-relevance but isn't explicit.
- Candidate A handles one specific case (discipline-analysis canonical-spec-loading).
- The broader context-intake protocol (H2) handles multiple cases + matches project precedent.
- The inquiry-author level (H5) is partial; needs protocol backstop.

**The structurally cleanest path:**

1. **Adopt Candidate A NOW** (specific fix for the observed failure class).
2. **Begin sketching a broader `mvl_context_intake.md` protocol** as a RESEARCH-FRONTIER → ACTIONABLE item. The sketch can be informed by `navigation_context_intake.md`'s pattern.
3. **Add an EXPLICIT note to /explore's spec** clarifying that purposive surfacing INCLUDES canonical-anchor seeking when the territory involves analyzing a discipline. This is a small refinement that aligns the spec with the implicit commitment.
4. **Update _branch.md template** to include "Required canonical-spec loads" as a standard section.

This is a LAYERED approach:
- Inquiry-author level: _branch.md template enhancement.
- Protocol level: Candidate A (now) → broader context-intake protocol (next inquiry).
- Discipline level: /explore's purposive-surfacing explicit canonical-anchor commitment.

**Confidence:** HIGH — the layered approach respects each level's responsibility while providing defense-in-depth.

### Cycle 10 — Jump-scan: what's the relationship to navigation_context_intake?

**Jump-scan:** the project has navigation_context_intake. Should mvl_context_intake be a parallel protocol OR should they be unified?

**Probe:**

Unifying would create a more general "discipline-context-intake" protocol that routes per discipline. But /navigation's intake is specific to navigation needs; /MVL+'s would be specific to MVL+ needs. Unification might over-couple.

Parallel protocols (one per runner that needs context-intake) match the existing pattern (each runner has its own protocols).

**Distinction surfaced:** parallel protocols better; future generalization possible if patterns converge.

**Confidence:** HIGH — parallel protocols match the project's existing layering.

### Cycle 11 — Final jump-scan: convergence

**Three criteria:**
1. Frontier stability: cycles 7-10 surfaced no new structural axes. STABLE.
2. Declining discovery: cycles 1-5 surfaced ~12 items; cycles 6-10 surfaced ~5; cycle 11 surfaces 0 new. DECLINING.
3. Bounded gaps: remaining unknowns are about prioritization, not options. BOUNDED.

**Jump-scan:** is there an unconsidered option?

- *What if /MVL+'s "If NEW" section is modified to include a context-intake step within itself* (no separate protocol file)? Possible — Candidate A IS this. The separate protocol file is generalization.
- *What if context-intake is delegated to /staged-explore?* /staged-explore is for territory-scanning at progressive resolutions; not context-intake. Different scope. KILL.

No new options. Convergence holds.

---

## Inventory

### Axis 1 — Where does canonical-anchor responsibility belong?

| Layer | Responsibility | Mechanism |
|---|---|---|
| **Inquiry-author / _branch.md** | List required canonical sources | _branch.md template "Required canonical-spec loads" section |
| **Protocol level (/MVL+)** | Mandate canonical loading before disciplines run | Candidate A (NOW) → broader mvl_context_intake.md (FUTURE) |
| **Discipline level (/explore)** | Surface canonical anchors when territory involves discipline analysis | /explore spec refinement note: purposive surfacing explicitly includes canonical-anchor seeking |

Three layers, three complementary fixes. Defense-in-depth without redundancy (each layer addresses different failure cases).

### Axis 2 — Option verdicts

| Option | Verdict | Reasoning |
|---|---|---|
| H1 (/explore enhancement) | **PARTIAL** | /explore's spec implicitly commits via purposive surfacing; explicit commitment in spec note is bounded refinement. NOT the primary fix; secondary. |
| H2 (pre-MVL+ context-mapping protocol) | **FUTURE / research-frontier→actionable** | Matches existing project precedent (navigation_context_intake); generalizes Candidate A; structurally clean. Sketch NOW as a separate inquiry; activate when broader cases are observed. |
| H3 (Candidate A alone) | **PRIMARY RECOMMENDATION** | Specific, bounded, addresses the observed case class. From LOOP_DIAGNOSE. |
| H4 (combination /explore + Candidate A) | **PARTIAL — combination of H1 + H3** | Defense-in-depth; can be adopted incrementally. |
| H5 (inquiry-author level) | **NECESSARY but INSUFFICIENT alone** | Add to _branch.md template; needs protocol-level backstop. |
| H6 (architectural — MVL+ needs context-intake phase) | **CONFIRMED at the architectural level** | The /MVL+ structural gap (no context-intake phase) is real; navigation_context_intake precedent shows the pattern. H6 is the structural framing for adopting H2. |

### Axis 3 — Project precedent: navigation_context_intake

| Element | Notes |
|---|---|
| Existing protocol | `homegrown/protocols/navigation_context_intake.md` |
| Existing warmup files | `homegrown/navigation/warmup/` (5 files: navigator-warmup1-3.md; navigator-prior-map-overlay.md; navigator-refresh.md) |
| Pattern | Routing protocol + per-route warmup files |
| Analogy for /MVL+ | `homegrown/protocols/mvl_context_intake.md` (proposed) + `homegrown/MVL+/warmup/` (potential) |

### Axis 4 — Three-layer recommendation

| Layer | Action | Adoption gate |
|---|---|---|
| Inquiry-author | _branch.md template updated to include "Required canonical-spec loads" section | Adopt NOW — bounded template change |
| Protocol level | Adopt LOOP_DIAGNOSE Candidate A (canonical-spec-loading in /MVL+'s Discipline Workspace Invariant) | Adopt NOW — already recommended |
| Protocol level (broader) | Sketch `homegrown/protocols/mvl_context_intake.md` analogous to navigation_context_intake | Sketch NOW as a SEPARATE inquiry; activate when broader context-loading needs are observed (cross-finding-inheritance; project-context; etc.) |
| Discipline level | Refinement note in /explore spec: purposive surfacing INCLUDES canonical-anchor seeking when territory involves analyzing a discipline | Adopt NOW — small bounded refinement to /explore's verb-meaning section |

### Axis 5 — Existing failure mode integration

| Existing mode | Relation |
|---|---|
| /explore's open→closed drift (#7) | Catches annotation-drift; doesn't catch missed-canonicals |
| /sense-making's Status Quo Bias (#1) | Catches defending-existing; doesn't catch missed-canonicals |
| /sense-making's NEW #7 Operation-Status Drift (from 22-05 inquiry) | Catches the consequence (operation-status elevation) but not the cause (missed canonical) |
| LOOP_DIAGNOSE Candidate A | Addresses the cause directly (canonical-spec-loading) |

---

## Signal log

| Signal | Source | Priority | Probed |
|---|---|---|---|
| /explore's purposive surfacing implies canonical-anchor relevance | cycle 1 | HIGH | yes |
| /explore vs runner responsibility for context-intake | cycle 2 | HIGH | yes |
| navigation_context_intake precedent | cycle 3 | CRITICAL | yes |
| H2 has stronger precedent than H1 | cycle 4 | HIGH | yes |
| Candidate A handles subset; H2 generalizes | cycle 5 | HIGH | yes |
| H5 alone insufficient; needs protocol backstop | cycle 7 | MEDIUM | yes |
| /MVL+ has structural gap (no context-intake phase); user's intuition correct | cycle 8 | HIGH | yes |
| Three-layer recommendation | cycle 9 | CRITICAL | yes |
| Parallel context-intake protocols (one per runner) match project layering | cycle 10 | MEDIUM | yes |

---

## Confidence map

| Region | Confidence |
|---|---|
| /explore is faithful to spec; iter-1 failure is layered (context-elicitation + drift) | **confirmed HIGH** |
| navigation_context_intake precedent shows the project's pre-discipline-mapping pattern | **confirmed HIGH** |
| User's H6 (architectural — MVL+ needs context-intake phase) is structurally correct | **confirmed HIGH** |
| Three-layer recommendation (author + protocol + discipline) is structurally cleanest | **confirmed HIGH** |
| H3 (Candidate A) is the primary actionable item NOW | **confirmed HIGH** |
| H2 (broader mvl_context_intake protocol) is the future generalization | **confirmed MEDIUM-HIGH** (worth a separate inquiry) |
| H1 (/explore enhancement) as a small refinement note | **confirmed MEDIUM** (bounded; complements H3) |

---

## Frontier state

**Closed within scope.** Options enumerated; user's intuition validated; project precedent (navigation_context_intake) surfaced as the structural model; three-layer recommendation structured.

Open at the implementation level: which layer goes first; what's the broader context-intake protocol's spec text; how to phase the adoption.

---

## Gaps and Recommendations

### Gaps remaining (for downstream)

**FQ1 — Adoption sequencing (sensemaking).** Which layer's fix lands first? Candidate A is already recommended; should /explore's note and _branch.md template land alongside, or after?

**FQ2 — Broader context-intake protocol scope (sensemaking + innovation).** What does `mvl_context_intake.md` look like? What routing categories should it have (discipline-analysis; cross-finding-inheritance; standalone; continuation)?

**FQ3 — Migration from Candidate A to broader protocol (decomposition + innovation).** When the broader protocol is adopted, how does Candidate A integrate or get superseded?

**FQ4 — Adversarial test (critique).** Is the three-layer recommendation actually structurally clean, or is it spec-bloat dressed up as defense-in-depth?

### Recommendations for downstream

- **Sensemaking** should: stabilize the three-layer recommendation; commit to adoption sequencing; resolve whether the broader protocol is sketched in this inquiry or in a separate follow-up.

- **Decomposition** should partition: per-layer adoption packages (author / protocol / discipline) + the broader-protocol future-inquiry sketch.

- **Innovation** should generate: concrete text for each layer's fix; variations on the broader protocol's routing categories.

- **Critique** should adversarially test: the three-layer recommendation against H4 (defense-in-depth could be over-correction); the assumption that navigation_context_intake's pattern transfers cleanly to /MVL+.

---

## Telemetry

- Mode: possibility
- Entry-point: signal-first (6 hypotheses)
- Cycles run: 11
- Candidates: ~20 evidence points
- Signals: 9; probed: 9
- Resolution: hypothesis probes (cycles 1-7) → precedent discovery (cycle 3) → synthesis (cycle 9) → convergence (cycles 10-11)
- Frontier: closed within scope
- Discovery rate: HIGH cycles 1-5; medium 6-9; low 10-11; zero terminal. DECLINING.
- Convergence: 3/3 criteria met
- Jump-scan performed: cycles 10, 11

**Canonical-spec-loading verification (per LOOP_DIAGNOSE Candidate A):**
- `/explore` canonical: §1.1 verb-meaning, §2.1 signals, §3.3 boundary-discovery cited. ✓
- `/MVL+` SKILL: Discipline Workspace Invariant + pipeline structure consulted. ✓
- `navigation_context_intake.md` discovered + analyzed as precedent. ✓

---

## Self-assessment

**Verdict: PROCEED.**

The exploration validated the user's intuition (MVL+ needs context-intake) AND surfaced a strong project precedent (navigation_context_intake.md). The three-layer recommendation (inquiry-author + protocol + discipline) provides defense-in-depth without redundancy. Each layer addresses different failure cases:
- Inquiry-author: relies on _branch.md authoring discipline.
- Protocol: enforces canonical-spec-loading regardless of inquiry-author discipline.
- Discipline: aligns /explore's spec with its implicit commitment.

The primary actionable item NOW is H3 (Candidate A); the broader mvl_context_intake protocol (H2) is a research-frontier-to-actionable for a separate inquiry. /explore's refinement note (H1) is a bounded complement.

Sensemaking has well-formed input: option verdicts, three-layer structure, project precedent.

No failure modes fired.
