# Sensemaking: what this project needs most

## User Input

> tell me what this project needs most

(Invoked via /sense-making slash command on the homegrown / native thinking-disciplines project.)

---

## SV1 — Baseline Understanding

The user is asking which bottleneck to address first across a project that has done substantial architectural iteration but uneven implementation. The honest first read: the project has generated more findings than applied punch lists. The thinking has outpaced the doing.

(SV2-SV6 will sharpen: this is structurally correct AND incomplete. The deeper need is external validation — the project has been refined entirely against its own doctrine, never tested against problems outside its own development. Closing open loops is necessary; external testing is what determines whether the architecture is actually right.)

---

## Phase 1 — Cognitive Anchor Extraction

### Constraints

- **/inquiry deletion is decided but not applied.** Per `inquiry_md_post_navigation_update_value_check`: verdict to delete `commands/inquiry.md`, migrate telemetry-routing. The verdict was made; the deletion hasn't happened. `commands/` folder was renamed to `deprecated/` (which moves /inquiry to deprecated, but doesn't formally close the inquiry-deletion loop with the related stalled inquiries marked SUPERSEDED).
- **/wayfinding deletion was applied, but Phase 1 of the telemetry-routing migration was NOT applied.** 5 of 7 disciplines (sense-making, td-critique, explore, decompose, comprehend) lack standardized `Overall: PROCEED / FLAG / RE-RUN` self-assessment lines. Only `/innovate` has the format.
- **`homegrown/protocols/resume.md` exists but is NOT invoked by anything.** The earlier integration into `/MVL`/`/MVL+` was reverted because it conflicted with their auto-chain "no waits between disciplines" rule. resume.md sits orphaned.
- **Multiple stalled inquiries** (`wayfinding_fundamental_fix`, `sic_as_wayfinder`, `navigation_placement` partial, `sic_navigation_integration` partial, `search_equals_navigation_plus_x` partial) have SIC outputs but no finding.md. Not formally marked SUPERSEDED despite their premises being null post-recent-decisions.
- **Project install just succeeded via curl end-to-end** (this turn). Installable by anyone with the URL.
- **Zero external testing.** The project has been refined entirely against its own doctrine. No real-world problem outside the project's own architecture has been used to test whether the disciplines actually produce good outputs in foreign domains.
- **End-goal trajectory** (per `enes/desc.md`): multi-head loops, parallel MVL with cross-comparison, autonomy-ladder Levels 0-4+. Currently at Level 0 (human bootstraps everything). Distance to end-goal is large.
- **User-finite resource:** single user, intense session activity. The pattern: many findings produced; partial applications; punch lists accumulate.

### Key Insights

- **Generation is outpacing application.** This session alone produced ~6-8 inquiry findings, applied portions of 2-3 of them. Backlog is growing.
- **The project is dogfooding-recursive.** It uses its own disciplines to develop its disciplines. This produces fast architectural iteration but creates a self-reference loop where doctrine validates itself.
- **Self-reference blindness is the structurally biggest risk.** Per failure-mode #6 — using a framework to evaluate something that shares assumptions with the framework. The project's findings have been tested against doctrine, not against external reality.
- **The "needs most" question has multiple defensible answers** depending on time horizon and lens: immediate (close open loops), short-term (external validation), medium-term (capability building like BRANCH/MERGE/diagnose), long-term (autonomy ladder progression). Without prioritization, all four feel equally pressing.
- **Closing open loops is prerequisite to other work, not optional.** Inconsistent state (orphan resume.md, undeleted /inquiry, unstandardized disciplines, unmarked stalled inquiries) creates ambiguity for any subsequent inquiry. New findings reference inconsistent state and inherit the inconsistency.
- **External validation is the only way to falsify architectural decisions.** Internal sensemaking can produce coherent architecture that doesn't actually work in practice. The project has never been tested in this way.

### Structural Points

- **10 disciplines installed** (sense-making, innovate, td-critique, explore, decompose, comprehend, reflect, navigation) + 2 runners (MVL, MVL+). Installed today via curl. Functional at the file-system level.
- **2 protocols extracted to homegrown/protocols/:** CONCLUDE (actively used by /MVL, /MVL+) and RESUME (orphan, not invoked).
- **devdocs/inquiries/ contains substantial accumulated wisdom** — multiple findings, several with detailed punch lists, all source-of-truth for past decisions.
- **deprecated/ folder represents a recent organizational cleanup** — old commands/ files moved, signals the project is consolidating.
- **Pending punch lists:**
  - `inquiry_md_post_navigation_update_value_check` — /inquiry deletion + telemetry-routing migration (~6 pieces).
  - `telemetry_routing_protocol_classification` — discipline standardization on PROCEED/FLAG/RE-RUN (~5 pieces, not yet applied).
  - `wayfinding_navigation_unification_check` — additional cleanup (~7 pieces, partially applied).
  - Multiple stalled inquiries to be marked SUPERSEDED.
- **End-goal capabilities not yet built:** BRANCH (multi-branch dispatch), MERGE (combine parallel branch outputs), HANDOFF (cross-agent context transfer), BRIEF (cold-start context package), VERSION (history-preserving iteration), /diagnose (the rejected-Broken pipeline).

### Foundational Principles

- **Build the system to think; think to build the system.** The project's recursive nature is intentional but creates measurement asymmetry — internal coherence is easy to test; external utility is not.
- **Source-of-truth integrity.** Single canonical home per content. Recent inquiries enforce this principle; pending applications would complete it.
- **Doctrine alignment.** `protocols/desc.md` and `enes/desc.md` are canonical. Findings ground in them. But doctrine self-validates without external check.
- **Empirical low-utilization is not structural supersession.** Established earlier; means observed-unused features may still be load-bearing for end-goal trajectory. But the inverse also applies: established-but-untested features may not work even though they pass internal coherence checks.

### Meaning-Nodes

- **"Needs most"** — request for prioritization across multiple defensible directions.
- **Open loops** — pending punch lists, orphan files (resume.md), unmarked stalled inquiries, undeleted /inquiry.
- **External validation** — the missing input to falsify architectural decisions.
- **Generation vs application asymmetry** — backlog growing; thinking outpacing doing.
- **Self-reference blindness** — the project evaluates itself with its own tools; no external reference point.
- **Capability gap** — distance between current state and stated end-goal (multi-head, autonomy Levels 2-4+).

---

## SV2 — Anchor-Informed Understanding

After anchor extraction, the picture sharpens:

The project has accumulated **more architectural decisions than applied implementations**. Multiple findings exist with concrete punch lists; few have been fully applied. The project's recursive nature (using its disciplines to refine its disciplines) means findings about itself are easy to generate; verifying whether those findings are correct in external contexts has not happened.

The "needs most" question therefore decomposes into two competing structural answers:

1. **Internal consolidation** — close the open loops, apply the pending punch lists, mark superseded inquiries, decide what to do with orphan resume.md. Until this is done, the project has inconsistent state and new findings inherit the inconsistency.

2. **External validation** — apply the disciplines to a real problem outside the project's own development. This is the missing input that would falsify architectural decisions. Without it, all coherence is internal.

These are not in conflict, but they are sequenced: consolidation creates a stable baseline; validation tests whether that baseline produces good outcomes in foreign domains.

What's now clearer than SV1: the bottleneck is not "more thinking" — it's the gap between thinking and proving. Both consolidation (proving via stable internal state) and external validation (proving via real-world output quality) close that gap from different sides.

---

## Phase 2 — Perspective Checking

### Technical / Logical

- The codebase has more "decided but not applied" entries than "applied" entries in the recent inquiry stream. This is a measurable backlog. Backlog metrics: ~3 punch lists pending application; ~4 stalled inquiries unmarked; 1 orphan protocol file.
- The system is functional today (curl install works, /sense-making executes — this very invocation proves it). But the architecture has known inconsistencies that any future inquiry will surface again.

### Human / User

- The user has been working intensely. Across this session, the pattern is: invoke a discipline → produce a finding → partial application → next inquiry. Each finding is high-quality but the application work is slower than the generation work.
- Implicit signal: the user is tireless about asking "is this right?" but less explicit about "is this enough?" or "should we ship and watch?"
- The user hasn't volunteered a personal need (rest, focus shift, external feedback), but the work pattern suggests one would be useful.

### Strategic / Long-term

- End-goal is autonomy-ladder Levels 2-4+ with multi-head loops and self-improvement. Current state is Level 0. The gap is enormous.
- Closing it requires (a) the existing system to work reliably, and (b) new capabilities (BRANCH, MERGE, /diagnose, autonomous routing). Building capabilities on an inconsistent base is harder than building on a stable base.
- Strategic priority: stabilize first, then build, then validate. But validation should ideally happen at every stage to avoid building wrong things.

### Risk / Failure

- **Highest risk: thinking-without-shipping.** A pattern where architectural refinement consumes resources without producing externally-verified value. The project is not at this point yet but trends toward it.
- **Second risk: self-reference blindness materializing.** The project's findings consistently support each other, the doctrine, and the end-goal. This consistency could indicate genuine coherence OR it could indicate the framework is closed against external evidence. Without external testing, you can't tell which.
- **Third risk: scope creep at end-goal.** Each new finding tends to introduce new architectural concerns. Multi-head architecture in `enes/desc.md` is far from current capability; chasing it without intermediate validation is risky.

### Resource / Feasibility

- Single user, finite hours. The project is one human's iterative work.
- Applying 3 pending punch lists ≈ 3-4 hours focused editing.
- External validation (run the disciplines on a real, foreign problem) ≈ 1-3 days depending on problem size.
- Building new capabilities ≈ weeks/months depending on scope.
- Sustainability matters. Burnout would terminate the project.

### Ethical / Systemic

- Is this project useful to anyone outside the user right now? Installable: yes. Used by anyone else: unknown. Validated by external use: no.
- The methodology is defensible academically but unproven empirically.
- Publishing findings without external validation risks propagating untested patterns to other agents/users.

### Definitional / Consistency

Does "what this project needs most" have a stable definition? The user has not specified time horizon. "Most" is the dominant constraint:
- If "most" means "biggest blocker" → consolidation (without it, future work compounds inconsistency).
- If "most" means "highest leverage for end-goal" → external validation (without it, all architecture is unfalsified).
- If "most" means "most urgent for sustainability" → user-wellbeing / shipping (without it, the project terminates regardless of its quality).

The strongest anchor is the project's own stated purpose (`enes/desc.md`): a self-improving cognitive system. Self-improvement requires both internal consistency (so improvement is real, not noise) AND external grounding (so improvement is measured against reality, not internal doctrine). Both are needed.

### Most Uncomfortable Perspective

The most uncomfortable perspective for a project that uses its own disciplines on itself is **external validation**. Specifically:

> *Does the system produce GOOD output when applied to a problem the system did not generate, in a domain outside the system's development?*

This is uncomfortable because:
- It bypasses internal doctrine entirely.
- It exposes the project to falsification — outputs may be obviously bad.
- It requires user time on a foreign problem with no architectural payoff (if it works) or significant rework (if it doesn't).
- It's the test the project has been deferring.

The temptation is to keep refining the architecture before testing — "we'll test once it's stable." But stability without testing is local-coherence, not real-coherence. Self-reference blindness IS this failure mode.

---

## SV3 — Multi-Perspective Understanding

After perspective checking, the picture is multi-faceted:

- **Internal consolidation** is the prerequisite — close open loops to remove inconsistency.
- **External validation** is the load-bearing test — without it, all architectural decisions are unfalsified.
- **User sustainability** is the meta-constraint — none of this matters if the user burns out.
- **Capability building** (BRANCH, MERGE, /diagnose, multi-head) is premature until validation tells us what capabilities are actually needed.
- **Self-reference blindness** is the highest structural risk; only external testing can cure it.

The verdict shifts from "consolidate vs validate" to "consolidate to a stable baseline, then validate, then build." Three sequenced needs, not one.

What's now much clearer than SV1: the project doesn't need MORE THINKING. It needs **the existing thinking to land** (apply punch lists) AND **the existing thinking to be tested against reality** (run on a foreign problem).

---

## Phase 3 — Ambiguity Collapse

### Ambiguity 1: What does "needs most" mean — short-term blocker, long-term leverage, or sustainability?

**Strongest counter-interpretation:** "Most" means "longest-term leverage" — if the end-goal is autonomy at multi-head Level 4+, then the things that need most attention are capability gaps (BRANCH, MERGE, /diagnose, autonomous routing), not punch list application or external testing.

**Why the counter-interpretation fails (structural grounds):** Capability building on top of inconsistent state compounds error. If /inquiry should be deleted but isn't, future findings reference it inconsistently. If 5 disciplines lack PROCEED/FLAG/RE-RUN, autonomous routing can't gate on signals that don't exist. Consolidation is the foundation; capabilities go on top. The counter-interpretation skips foundation.

Additionally, capability building without external validation builds for a hypothesized end-goal that may turn out to need different capabilities than anticipated. /diagnose was named years ago; whether it's the actual right capability versus, say, /experiment, is untested.

**Confidence:** HIGH on structural grounds. Foundation precedes superstructure; testing precedes building wrong things.

**Resolution:** "Needs most" means **the bottleneck blocking forward progress** — which is currently consolidation (foundation) and validation (proof).

**What is now fixed:** Capability building is deferred until consolidation + validation are done. The project does NOT need more architectural decisions or new capabilities right now.

**What is no longer allowed:** Treating "build BRANCH" or "design /diagnose" as the answer to "what does the project need most." Those are real needs but not the most-urgent ones.

**What now depends on this choice:** The recommendation order. Apply pending punch lists → externally validate → then prioritize new capabilities based on validation findings.

**What changed in the conceptual model:** Time horizon collapsed to "this month" rather than "in the long run." Long-run needs (capabilities) require shorter-run needs (consolidation, validation) to be done first.

### Ambiguity 2: Is internal consolidation actually doing more thinking, just disguised as application?

**Strongest counter-interpretation:** Applying punch lists is itself a form of thinking — each punch list step requires judgment, sometimes raises new questions, occasionally produces a follow-up inquiry. So consolidation is not really different from generation; it's just labeled differently.

**Why the counter-interpretation fails (structural grounds):** The punch lists from recent findings are largely mechanical — specific edits, specific files, specific verification steps. The thinking already happened in the inquiry; the application is execution. The exception (where application surfaces a new question) is rare and explicitly captured by "open questions" sections in findings. Calling application "more thinking" is conflating the labor types.

**Confidence:** MEDIUM-HIGH. There's some truth in the counter — application does involve judgment — but the bulk of the work is mechanical.

**Resolution:** Application is application. New inquiries arising from application are tracked separately and don't become an excuse to defer the application itself.

**What is now fixed:** "Apply punch lists" means execute the concrete edits from existing findings. Don't generate new inquiries unless the application surfaces a genuine blocker.

### Ambiguity 3: Is external validation the same as "shipping and getting users"?

**Strongest counter-interpretation:** "External validation" means publish, evangelize, get external users, observe how they use it. The user (single human, finite resource) doesn't have time for evangelism.

**Why the counter-interpretation fails (structural grounds):** External validation doesn't require external users — it requires external problems. The user can take a real problem from a different domain (a programming project unrelated to homegrown, a business decision, a research question) and run the disciplines on it. The output's quality, as judged against the foreign-domain expert (the user themselves, in a domain where they have separate ground truth), validates or invalidates the architecture.

This is much cheaper than acquiring external users. It's a few days of focused use, not weeks of marketing.

**Confidence:** HIGH. The counter conflates two senses of "external" (external users vs external problems). External-problems is sufficient and feasible.

**Resolution:** External validation means **applying the disciplines to a real problem outside the project's own development** — using the user's own expertise in another domain to judge output quality.

**What is now fixed:** Validation is a 1-3 day exercise, not a months-long marketing project.

### Ambiguity 4: Is user sustainability a separate need or part of "consolidation"?

**Strongest counter-interpretation:** Sustainability is just a resource constraint; it's not a "need" the project has in the same sense.

**Why the counter-interpretation partially holds:** Resource constraints aren't typically counted as architectural needs. But user burnout would terminate the project regardless of architecture.

**Why the counter-interpretation fails (structural grounds):** This project specifically depends on the single user's continued engagement. Other open-source projects survive contributor turnover; this one is one person's iteration. User sustainability is a system-level property, not just a resource constraint.

**Confidence:** MEDIUM. User-wellbeing matters for the project's existence but is harder to architect for than consolidation or validation.

**Resolution:** User sustainability is a meta-need that should be considered alongside but not at the expense of consolidation. Specifically: don't pile all 3 pending punch lists into one frantic session. Pace.

---

## SV4 — Clarified Understanding

After ambiguity collapse:

- **"Needs most"** = the current bottleneck blocking forward progress = consolidation + validation, in that order.
- **Capability building** (BRANCH, MERGE, /diagnose, multi-head) is deferred until consolidation and validation are done.
- **External validation** = applying disciplines to a real problem outside the project's own development; uses user's own foreign-domain expertise as ground truth; 1-3 days of focused work.
- **User sustainability** is a meta-constraint; pace the work, don't cram.

What's now no longer viable:
- Treating "what to build next" as the most-urgent question. Building precedes consolidation only at increased risk.
- Conflating application with generation. Punch list application is execution; it's not the same labor type as inquiry generation.
- Confusing external-users with external-problems. Validation needs the latter, not the former.

---

## Phase 4 — Degrees-of-Freedom Reduction

### Variables now fixed

- **The project does NOT need more architectural inquiries right now.** The thinking has outpaced the doing.
- **The project DOES need application of pending punch lists** to close open loops:
  - `inquiry_md_post_navigation_update_value_check` — /inquiry deletion + stalled-inquiry marking.
  - `telemetry_routing_protocol_classification` — Phase 1 discipline standardization (or explicit acceptance of asymmetry).
  - `protocol_path_generalization` — already applied this session ✓.
  - Decide RESUME's fate (delete or wire up).
- **The project DOES need external validation** — apply the disciplines to a real foreign problem, use user's own domain expertise as ground truth.
- **Capability building is DEFERRED** until consolidation + validation are done.
- **User sustainability** — pace the work. Don't cram all consolidation into one session.

### Options eliminated

- "Build /diagnose now" — premature; depends on validation telling us /diagnose is the right capability.
- "Build BRANCH/MERGE now" — premature; multi-head architecture is end-goal, not next step.
- "Run another /MVL+ on architectural questions" — generation; project needs application.
- "Acquire external users" — wrong sense of external; user time better spent on external-problems.
- "Defer everything until perfect" — ships nothing; sustainability cost.

### Paths remaining

- **Phase A (Consolidation):** apply pending punch lists across 1-2 focused sessions. Mark stalled inquiries SUPERSEDED. Decide RESUME's fate. Net: ~3-4 hours of focused editing.
- **Phase B (External validation):** select a real problem outside homegrown's own development (could be: a software architecture decision in another project, a business question, a research question). Run /MVL or /MVL+ on it. Judge output quality against the user's foreign-domain expertise. Net: 1-3 days.
- **Phase C (Build, only if validation indicates priority):** the next capability the validation surfaced as needed.

---

## SV5 — Constrained Understanding

The solution space converges to a sequenced answer:

**Phase A — Consolidate** (close open loops; apply pending punch lists; mark stalled inquiries; decide RESUME). Net ~3-4 hours.

**Phase B — Externally validate** (run disciplines on a real foreign problem; use the user's domain expertise as ground truth). Net 1-3 days.

**Phase C — Build, informed by Phase B** (the capability validation says is needed, not the capability the architecture says should exist).

**Pace these across days/weeks**, not into one session. User sustainability is the meta-constraint.

What's eliminated:
- Building before consolidating.
- Inquiring before applying.
- Validating before stabilizing.
- All-or-nothing one-session sprint.

---

## Phase 5 — Conceptual Stabilization

### SV6 — Stabilized Model

**The project needs CONSOLIDATION followed by EXTERNAL VALIDATION.**

The architecture has been refined faster than it has been applied. Multiple findings have produced punch lists that aren't fully implemented. Stalled inquiries aren't marked superseded. Orphan files (resume.md) sit unintegrated. /inquiry is decided-deleted but still exists in the deprecated/ folder rather than formally removed-with-superseded-marks.

This inconsistent state is the immediate bottleneck — every new finding inherits the inconsistency, and every new inquiry references state that doesn't match the architectural decisions.

After consolidation, the project's biggest unaddressed risk is **self-reference blindness** — it has been refined entirely against its own doctrine, never tested against problems outside its own development. The disciplines may produce internally-coherent output that doesn't actually help in foreign domains. Without external testing, you cannot tell. The cure is cheap: 1-3 days running the disciplines on a real problem from a domain where the user has independent ground truth.

Capability building (BRANCH, MERGE, /diagnose, multi-head, autonomous routing) is **deferred** until consolidation and validation are done. Building new capabilities on inconsistent state compounds error; building capabilities the architecture says are needed (without empirical verification) builds for a hypothesized end-goal that may turn out wrong.

**User sustainability** is the meta-constraint — pace the consolidation across multiple shorter sessions rather than cramming. The project is one person's iteration; burnout would terminate it.

### Concrete recommendation (the "needs most" answer)

In rough priority order:

1. **Apply pending punch lists.** Close open loops. ~3-4 hours, paced across 2 sessions.
   - Apply `inquiry_md_post_navigation_update_value_check`'s /inquiry deletion (formal, with stalled-inquiry SUPERSEDED markers, not just folder rename to deprecated/).
   - Apply `telemetry_routing_protocol_classification`'s Phase 1 (5 disciplines get PROCEED/FLAG/RE-RUN) OR explicitly drop it and accept the asymmetry.
   - Decide RESUME's fate (wire up or delete; orphan state is the worst option).

2. **Run external validation.** 1-3 days. Pick a real problem outside homegrown's development (a software architecture question, a business decision, a research question). Run `/MVL` or `/MVL+` on it. Judge the output against the user's foreign-domain expertise. Specifically test: does the output actually help, or is it internally-coherent-but-useless?

3. **Defer capability building** (BRANCH, MERGE, /diagnose, multi-head) until 1 and 2 are done. Phase 3's priorities should be informed by Phase 2's findings, not by speculation.

4. **Pace.** Don't try to do steps 1-3 in one continuous push. Sustainability is the meta-constraint.

### How SV6 differs from SV1

SV1 was a guess: the project has more findings than applications. SV6 is structured: the project specifically needs consolidation to a stable baseline AND external validation against real problems, in that order, with capability building deferred until validation indicates priorities. The framing shifted from "what to do next" to "what's blocking forward progress" — and the blocker turns out to be the application/validation gap, not a missing capability.

**Confidence:** HIGH on the structural argument (consolidation precedes capability building; external validation cures self-reference blindness; capability priorities should be informed by validation). MEDIUM-HIGH on the specific punch lists to apply (depends on user's own assessment of which findings they consider committed). MEDIUM on user-wellbeing pacing (depends on user's own assessment of capacity).

---

## Saturation Indicators (Telemetry)

- **Perspectives with new anchors:** 7 (Technical, Human, Strategic, Risk, Resource, Ethical/Systemic, Definitional). All produced new anchors. The most uncomfortable one (self-reference blindness) shifted the verdict significantly.
- **Ambiguity resolution ratio:** 4 of 4 ambiguities resolved at HIGH or MEDIUM-HIGH confidence.
- **SV delta:** Significant. SV1 was "thinking outpaces doing." SV6 is "consolidate + validate, in that order, before building, with sustainability as meta-constraint." Structural reorganization.
- **Anchor diversity:** All 5 anchor types produced (Constraints — many; Key Insights — generation/application asymmetry; Structural Points — installed disciplines, pending punch lists, stalled inquiries; Foundational Principles — build the system to think; Meaning-Nodes — open loops, external validation, self-reference blindness).

## Failure-mode self-check

- **Status quo bias?** No — the recommendation explicitly asks the user to STOP doing what they've been doing (more inquiries) and START doing something different (apply + validate).
- **Premature stabilization?** No — perspective checking included the most uncomfortable angle (self-reference blindness via external validation gap).
- **Anchor dominance?** Slight risk — "consolidation" appears as the dominant anchor across the analysis. Mitigated by Phase 2's strategic and ethical perspectives, which surfaced external validation as a distinct co-equal need.
- **Perspective blindness?** No — most-uncomfortable check produced a structural shift (external validation rose to co-equal status with consolidation).
- **Clean resolution trap?** Mitigated — the resolution acknowledges three needs (consolidate / validate / pace) rather than one tidy answer. Real complexity preserved.
- **Self-reference blindness?** **THIS IS THE SUBJECT OF THE FINDING.** The sensemaking discipline used to evaluate a project that produced the sensemaking discipline is itself self-referential. This finding's recommendation (external validation) directly addresses the failure mode it's at risk of exhibiting. The recommendation can only be validated externally — testing the disciplines on a foreign problem.

---

## Recommendation (one-sentence)

**The project's bottleneck is the gap between architectural thinking and application + validation: apply pending punch lists to close open loops (~3-4h), then run the disciplines on a real foreign problem to falsify or confirm the architecture (1-3 days), then build new capabilities only as validation indicates — paced across multiple sessions to preserve user sustainability.**
