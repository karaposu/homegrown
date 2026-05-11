# Sensemaking: synthesize_vs_finding_split

## User Input

`devdocs/inquiries/synthesize_vs_finding_split/_branch.md`

The trichotomy: are SYNTHESIZE (per `commands/inquiry.md`) and `finding.md` (per `/MVL` and `/MVL+`) (a) one protocol currently underspecified, (b) two distinct protocols currently conflated, or (c) one protocol with two valid implementations? The user wants a defensible architectural verdict, not vague middle ground.

The previous `synthesize_protocol_check` sensemaking said "narrowed not superseded," but the user pushed back that SYNTHESIZE-as-currently-specified doesn't actually do anything extra than summarizing. The user explicitly hypothesized two protocols.

---

## SV1 — Baseline Understanding

The previous sensemaking's "narrowed not superseded" answer was defending the protocol's intent rather than its actual shape. Looking at this fresh: SYNTHESIZE-as-currently-written has 4 generic steps (read + compile + resolve + save) and lists deliverable types but doesn't describe HOW to construct any of them. `finding.md` does the same 4 generic steps with a fixed template and fixed location. So at the level of the operations actually specified, they're roughly the same. The question is whether there's a hidden distinct operation (artifact construction in the project's native format) that SYNTHESIZE is *trying to name* but currently fails to *actually specify*.

(SV2 onward will reveal: yes, there's a hidden distinct operation; the current spec conflates two genuinely different roles. The right answer is split into two protocols.)

---

## Phase 1 — Cognitive Anchor Extraction

### Constraints

- **`/MVL`'s `finding.md` mechanism** has a fixed template (frontmatter + Question + Finding Summary + Finding + Next Actions + Reasoning + Open Questions), three style rules, an explicit completion test, and saves INSIDE the inquiry folder. Always produced at iteration completion. The agent constructs it directly inline — no separate command invocation.
- **`commands/inquiry.md`'s SYNTHESIZE section** (lines 252-285) describes 4 generic steps (read surviving ideas → compile top-down → resolve inconsistencies → save to project location) and lists deliverable types (spec / plan / report / RCA / decision document) without specifying HOW to construct any of them. Self-described as "transforming PRESENTATION."
- **`thinking_disciplines/protocols/desc.md`** lists SYNTHESIZE as a Transfer Protocol with the description "Take scattered discipline outputs and produce a coherent deliverable for someone who wasn't in the thinking process" — note that this description fits BOTH `finding.md` production AND artifact construction. The protocols-doc itself isn't distinguishing them.
- **`enes/desc.md`** autonomy ladder Level 2-3+ requires the system to autonomously produce project artifacts (new specs, code, plans, ADRs) from completed inquiries. This is a stated trajectory commitment.
- **The previous `synthesize_protocol_check` sensemaking** concluded "narrowed not superseded" but the user pushed back; that conclusion was defending intent over actual current shape and didn't formally split the conflated operation.

### Key Insights

- **The OPERATION level is different even when the procedural-step level looks the same.** Both `finding.md` and SYNTHESIZE involve "read + compile + output." But the relationship between input and output differs:
  - **`finding.md`**: input is SIC outputs; output ANSWERS the inquiry's question. The finding's content IS the inquiry's answer. The transformation is **compile-into-verdict**.
  - **SYNTHESIZE (intended)**: input is a finding (already containing the answer) plus the project's format requirements; output IS THE THING the answer specifies — a spec.md, a plan.md, an ADR.md. The output is NOT a restatement of the answer; it's the *artifact the answer was about*. The transformation is **construct-from-verdict**.

- **Concrete example.** Consider an inquiry whose answer is "we should build the `/scope` protocol with properties P1-P5." 
  - `finding.md` records: "We should build `/scope` with P1-P5. Here's why. Here's what to do next."
  - The eventual `commands/scope.md` spec contains: YAML frontmatter (name, description with triggers), activation pattern, `$ARGUMENTS` handling, numbered instructions, output format, failure modes, examples.
  - These are different artifacts. The spec is NOT a copy or rewrite of the finding. The spec is the *implementation* of what the finding decided. Producing the spec from the finding requires constructing new content (the frontmatter, the activation patterns, the examples) that doesn't exist in the finding — it has to be derived.
  - So the spec-production step does meaningfully more than "rewrite for a different reader." It does **artifact construction** — building the actual deliverable using the finding as input but adding the artifact-specific content the finding doesn't contain.

- **The user's "summary_taking" framing is too narrow.** `finding.md` does more than summarize — it applies a fixed template (Question / Finding Summary / Finding / Next Actions / Reasoning / Open Questions) with style rules, captures reasoning across iterations, and produces a self-contained verdict. "Summary" undersells it. Better name: **FINDING-COMPILE** or just **FINDING**.

- **The conflation is structural, not cosmetic.** SYNTHESIZE-as-currently-specified in `inquiry.md` claims to do BOTH compile-into-verdict AND construct-from-verdict but specifies neither in detail. It uses the language of compile-into-verdict ("compile into a single, top-down document") but lists deliverables of construct-from-verdict (spec / plan / report / RCA). The intent is artifact-construction; the procedure described is finding-compile. That's why it looks like duplication when compared to `finding.md` — the *described procedure* is finding-compile; the *named role* is artifact-construction; the gap between them is unfilled.

- **The two roles map cleanly to autonomy-ladder levels.** Level 0-1 (current): humans run `/MVL`, get findings, manually construct project artifacts when needed. The artifact-construction step is happening as a human cognitive operation, not as a system protocol. Level 2-3+ (target): the system autonomously runs inquiries AND autonomously produces resulting artifacts. The artifact-construction operation needs to be a real protocol with real steps for the system to autonomously execute.

### Structural Points

- **Two distinct cognitive roles in the post-iteration phase:**
  - **FINDING-COMPILE** (filled, well-specified): produce the inquiry-verdict artifact (`finding.md`) inside the inquiry folder using a fixed template. Audience: inquiry-tree-traversers (someone reading findings to understand decisions). Currently implemented inline by `/MVL` and `/MVL+`.
  - **SYNTHESIZE / ARTIFACTIZE** (named slot, currently empty): construct a project-level artifact (spec / plan / report / RCA / decision document) from a finding (or directly from inquiry artifacts), in the format the project's audience requires. Audience: project consumers (humans, agents, install scripts that read specs). Saved OUTSIDE the inquiry folder. Currently a named-but-underspecified protocol.

- **The current SYNTHESIZE spec in `inquiry.md` is doing impedance mismatch:** it borrows finding-compile's procedure ("compile into top-down document") but borrows artifactize's output catalog (spec / plan / report). The result describes one operation while claiming to be a different one.

- **The protocols/desc.md SYNTHESIZE entry has the same problem:** "Take scattered outputs and produce a coherent deliverable" describes finding-compile; "audience-aware restructuring" hints at artifactize but doesn't formalize. One entry trying to cover two roles.

### Foundational Principles

- **Operations that differ in input/output relationship are structurally distinct, even when the procedural steps look superficially similar.** Compile-into-verdict (input is SIC outputs; output IS the verdict) vs construct-from-verdict (input is a verdict; output is the artifact the verdict specified) differ at this level. The procedural steps both involve "read and write," but what's read and what's written differ in role.

- **Named slots without procedures are still architecturally valuable** if they correspond to a real future capability and the project has named the role honestly. The `protocols_relevance_check` finding established this: protocols can be alive-as-named-vocabulary even when they're alive-as-implementation only partially. SYNTHESIZE-as-artifact-construction qualifies.

- **The capability-based consciousness criterion** (per `enes/desc.md`) requires the system to autonomously produce capabilities at higher autonomy levels. Artifact construction is one such capability. Naming the slot now is architectural prep for that future, even if the implementation comes later.

- **Honesty about current shape vs intent** is preferred to defending the current shape as if it already implements the intent. The previous `synthesize_protocol_check` sensemaking failed this — defended SYNTHESIZE's intent ("non-routine artifact construction") without acknowledging that the current spec doesn't implement it.

### Meaning-Nodes

- **FINDING-COMPILE** — the operation of producing the inquiry-verdict artifact (`finding.md`).
- **SYNTHESIZE / ARTIFACTIZE** — the operation of constructing a project-level artifact from a finding.
- **Verdict** vs **Artifact** — what the finding contains (the answer) vs what the project needs (the implementation of the answer).
- **Inquiry-traverser audience** vs **project-consumer audience** — different readers, different artifact shapes.
- **Filled slot** vs **named slot** — a protocol that's been implemented as a procedure vs one that's been named as architectural vocabulary but not yet specified.

---

## SV2 — Anchor-Informed Understanding

There are two structurally distinct operations that the current architecture conflates under one name:

1. **FINDING-COMPILE** (filled): produce an inquiry-verdict artifact (`finding.md`) inside the inquiry folder using `/MVL`/`/MVL+`'s template. Currently implemented and routinely used.

2. **SYNTHESIZE / ARTIFACTIZE** (named slot, unfilled): construct a project-level artifact (spec / plan / report / RCA) from a finding, in the format the project's audience requires, saved outside the inquiry folder. Currently described in `inquiry.md` but the description is finding-compile's procedure with artifact-construction's output catalog — the mismatch is the conflation.

The previous "narrowed not superseded" framing protected the current spec's surface; the honest reading is "two roles, one currently spec'd procedure, one currently empty slot." The user's intuition is structurally correct.

---

## Phase 2 — Perspective Checking

### Technical / Logical

- The two operations are **input-output asymmetric** in a way that goes beyond template/location/audience differences. Finding-compile takes SIC artifacts → produces the verdict-as-output. Artifact-construction takes a verdict-as-input → produces the artifact-the-verdict-was-about-as-output. This is an extra link in the chain, not the same link with different decoration.
- A spec.md construction needs CONTENT the finding doesn't have: frontmatter (name, description with trigger phrases), invocation pattern, parameter handling, runnable examples, format-specific failure modes. These have to be derived from the finding's design decisions, not copy-pasted.
- A plan construction (e.g., implementation plan) needs: time estimates, dependency ordering, resource allocation, milestone gates. These have to be added to the finding's Next Actions.
- A report construction needs: executive summary in the report's house style, structured findings in the report format, embedded charts/data, citations to sources. Different from a finding's Reasoning section.
- The translate-from-finding-to-artifact step is meaningful work, not a renaming trick.

### Human / User

- For routine inquiries today (audits, evaluations, design questions): the user runs `/MVL`, reads `finding.md`, acts on Next Actions. No artifact construction is involved because the deliverable IS the verdict (or the verdict IS the deliverable). FINDING-COMPILE is the only operation invoked.
- For non-routine inquiries (design a new command, produce a new spec, write a project document): the user runs `/MVL`, reads `finding.md`, then *manually constructs the project artifact* by reading the finding and writing the new file. The user is performing the artifact-construction operation cognitively. It just isn't named or formalized.
- The user's experienced friction (asking "is SYNTHESIZE redundant?") comes precisely from the conflation: when they read SYNTHESIZE in inquiry.md, the procedure described is what /MVL already does (compile-into-doc), but the deliverable types listed are what they manually construct after the finding. The mismatch is what makes it look "redundant."

### Strategic / Long-term

- `enes/desc.md`'s autonomy ladder requires the system to autonomously produce project artifacts at Level 2-3+:
  - **Level 2 (system handles uncertain reviews):** when the system reviews and proposes spec changes, those proposals need to be artifact-constructed (the proposed spec must exist as a coherent artifact, not just a description).
  - **Level 3 (system proposes own architectural improvements):** the system identifies gaps, runs inquiries, and produces new specs/protocols. Artifact construction is the closing step.
  - **Level 3+ (parallel MVL loops with cross-comparison):** combining findings from parallel loops into higher-order artifacts (synthesis specs, ADRs) is artifact construction at scale.
- If SYNTHESIZE-as-artifact-construction is the named slot for these capabilities, the architecture has a place to grow into. If it's not named, every Level 2-3 capability needs to invent the role from scratch.
- The protocols dimension's stated purpose (per `thinking_disciplines/protocols/desc.md` and `protocols/what_is_protocol.md`) is exactly this: provide named-but-deferred slots for capabilities that the autonomy ladder will need. Splitting SYNTHESIZE serves that purpose.

### Risk / Failure

- **Risk of consolidation (option a or c):** lose the named slot for artifact construction. When Level 2-3 capability is built, it has to invent the role from scratch with no architectural prep. The conflation also continues confusing future readers, who will keep asking "is SYNTHESIZE redundant?"
- **Risk of split (option b):** introduce two protocol names where there was one. Slightly more vocabulary to maintain. Risk of the ARTIFACTIZE/SYNTHESIZE slot remaining empty for a long time (which is a known risk pattern for any named-but-deferred slot).
- **Risk of doing nothing:** the user-experienced friction continues. The next person to read inquiry.md asks the same question. The architecture remains structurally muddled.

The split's risks are smaller than the consolidation's risks. Consolidation forecloses architectural prep for stated long-term capabilities; split costs only documentation churn.

### Resource / Feasibility

- Splitting requires:
  - Update `commands/inquiry.md`'s SYNTHESIZE section (~10-20 line rewrite to clearly say "this is artifact construction; for the finding-compile operation see /MVL and /MVL+").
  - Update `thinking_disciplines/protocols/desc.md` to list both protocols separately (~10 lines).
  - Optionally: update `/MVL` and `/MVL+` specs to mention the FINDING-COMPILE protocol name (~3 lines each).
  - Total: ~30-50 line edit across 4 files. Cheap.
- Building actual artifact-construction (formal procedure for spec / plan / report / RCA generation) is hours-to-days per artifact type. **Out of scope for this audit.** Naming the slot doesn't require building it.
- Doing nothing is "free" in the short term but pays a continuing friction cost.

### Definitional / Consistency

- Does the split contradict the protocols/desc.md definition of "protocol"? No. Both finding-compile and artifact-construction are "formalized operational procedures" (well, finding-compile is; artifact-construction is named-and-underspecified, which the protocols doc explicitly allows). Both transfer outputs to deliverables. Both qualify as Transfer Protocols.
- Does the split contradict the prior `protocols_relevance_check` finding? Sort of — that finding listed SYNTHESIZE as ALIVE in two places with different shapes ("/inquiry SYNTHESIZE step + /MVL finding template"). The split makes that "two places with different shapes" claim formal: the two shapes are two distinct protocols. This is a refinement, not a contradiction.
- Does the split contradict the user's "summary_taking" framing? Slightly — "summary_taking" is too narrow for what finding.md does. Better names exist (FINDING-COMPILE, FINDING, VERDICT-COMPILE). But the *split itself* is what the user proposed; the naming is refinement.
- Internal-consistency check on inquiry.md's current SYNTHESIZE section: does the procedure described match the deliverable types listed? **No.** The procedure ("compile into a top-down document") is finding-compile-shaped; the deliverable types (spec / plan / report / RCA) are artifact-construction. This is the conflation, observable in the doc itself.

### Most uncomfortable perspective

The most uncomfortable angle: maybe the split is premature. Today, every inquiry's deliverable IS the finding (in routine practice). The user isn't actually invoking artifact-construction as a separate step. Naming a slot for a capability that nobody is actively using risks vocabulary bloat for an operation that may never get formalized in detail.

Honest engagement: this is the strongest argument against the split. The split's value depends on the autonomy-ladder trajectory actually playing out — at Level 2-3+, the system needs autonomous artifact-construction. If the project plateaus at Level 0-1, the SYNTHESIZE slot stays empty forever and the split was over-engineering.

But: the project's stated trajectory is explicit (`enes/desc.md` autonomy ladder). The split honors that trajectory. The cost of carrying named-but-deferred vocabulary is small (per `protocols_relevance_check`'s analysis). The cost of NOT having the named slot when Level 2-3 capability is built is higher (rebuild from scratch, no prior architectural prep). Net: split.

This is the same trajectory-based justification that the protocols dimension itself rests on. Consistency requires applying it here.

---

## SV3 — Multi-Perspective Understanding

After perspective checking, the verdict is firm: **option (b), two distinct protocols, currently conflated.** The split:

- Honors a genuine structural distinction (input/output asymmetry between finding-compile and artifact-construction).
- Aligns with the project's stated long-term trajectory (autonomy ladder Level 2-3+ requires autonomous artifact-construction).
- Resolves observed user friction (the conflation IS what makes it look redundant).
- Costs little (~30-50 line documentation edit across 4 files).
- Risks little (named-but-deferred slot is a known acceptable pattern in this project).

Naming proposal:
- **FINDING** (or FINDING-COMPILE) — the operation of producing `finding.md` as the inquiry-verdict artifact. Already implemented inline by `/MVL` and `/MVL+`.
- **SYNTHESIZE** — the operation of constructing a project-level artifact (spec / plan / report / RCA / decision document) from a finding, in the format the project's audience requires. Currently a named slot; specifying the artifact-type-specific procedures is future work.

The user's "summary_taking" framing was directionally right; the cleaner name for the finding-compile operation is just FINDING.

---

## Phase 3 — Ambiguity Collapse

### Ambiguity 1: Are these structurally one operation or two?

**Counter-interpretation A (one operation):** Both finding.md and SYNTHESIZE follow "read + compile + write." The differences (location, format, audience) are output-template-level differences, not operation-level differences. This is one protocol with two implementations.

**Counter-interpretation B (two operations):** The input/output relationship differs structurally. Finding-compile produces the verdict-AS-output. Artifact-construction takes the verdict-AS-input and produces the artifact-the-verdict-was-about. The "translate from finding to artifact" step is meaningful work, not a renaming trick.

**Why A fails on structural grounds:** A claims the differences are "template-level only." But producing a command spec from a finding requires CONSTRUCTING content the finding doesn't have (frontmatter with trigger-phrase descriptions, invocation patterns, runnable examples). That's not "applying a different template to the same content"; it's "deriving NEW content from the finding's decisions and packaging it for a different consumer." The translate-from-verdict step is a real operation.

**Why B holds:** The input changes (SIC artifacts vs a finding), the output relationship to the input changes (output IS the verdict vs output IS the thing the verdict specified), the consumer changes (inquiry-traverser vs install script / spec-reading agent). Three changes that align consistently distinguishes two operations, not template variation of one.

**Resolution:** Two operations.

**What is now fixed:** SYNTHESIZE-as-artifact-construction and finding-compile are structurally distinct operations.

**What is no longer allowed:** Treating them as "one operation with two output templates" or "one protocol with two valid implementations."

**Confidence:** HIGH. The input/output asymmetry is observable concretely (a finding ABOUT building /scope ≠ /scope's actual spec.md).

### Ambiguity 2: Should the split be formalized in the architecture?

**Counter-interpretation A (formalize the split):** Two protocols, two names, two entries in protocols/desc.md, clear boundaries in inquiry.md.

**Counter-interpretation B (don't formalize; just clarify):** Keep one name (SYNTHESIZE) but rewrite inquiry.md to clarify it's specifically about artifact-construction (not finding-compile). The finding-compile operation is implicit in /MVL and doesn't need a protocol name.

**Why B has some force:** Naming something that nobody ever explicitly invokes (FINDING-COMPILE happens inline; nobody calls it by name) might be over-vocabulary. The user-facing user need is "stop conflating in inquiry.md," which B satisfies without adding a new name.

**Why A wins:** The protocols dimension's purpose is to provide named architectural slots. If finding-compile is a real operation that's currently implemented inline by /MVL/MVL+, it has a name structurally — calling that name out (in protocols/desc.md and possibly in MVL's spec) makes the operation visible and editable as a protocol unit. This matches the pattern of CONFIGURE / STEER / RESUME / TERMINATE — all of which are "implemented inline by /inquiry" but are also named protocols. Finding-compile fits the same pattern.

Also: at Level 2-3+ autonomy, the system might want to invoke finding-compile separately (e.g., re-run finding-compile on an existing inquiry's archived outputs without re-running SIC). A named protocol slot supports that future flexibility.

**Resolution:** A. Formalize both protocol names.

**What is now fixed:** Two protocol names will exist: FINDING (or FINDING-COMPILE) and SYNTHESIZE.

**What is no longer allowed:** Single-name "SYNTHESIZE" covering both roles.

**Confidence:** HIGH. Consistency with the protocols dimension's existing pattern (named protocols implemented inline by commands).

### Ambiguity 3: What are the right names?

**For finding-compile:**
- `summary_taking` (user's proposal) — too narrow; finding.md does more than summarize.
- `FINDING-COMPILE` — explicit, matches verb-noun pattern.
- `FINDING` — short, matches the artifact name. Risk: "finding" is also the artifact, so the protocol name might feel like a noun rather than a procedure.
- `VERDICT-COMPILE` — explicit; "verdict" emphasizes the answer-to-the-inquiry aspect.
- `COMPILE-FINDING` — verb-first.

**For artifact-construction:**
- `SYNTHESIZE` — already named in `protocols/desc.md` and `inquiry.md`. Established. "Synthesize" literally means "combine elements into a new whole" — captures both the combining (taking finding + project context + format requirements) and the production.
- `ARTIFACTIZE` — awkward neologism.
- `DELIVER` — focuses on output but doesn't capture the construction effort.
- `PRODUCE` / `CONSTRUCT` — too generic.

**Counter-interpretation:** keep both as compound names (`FINDING-COMPILE` and `ARTIFACT-COMPILE` for symmetry).

**Why this counter is partially right:** symmetry has aesthetic value; the verb-noun pattern is consistent.

**Why it doesn't win:** SYNTHESIZE is already established in the protocols vocabulary. Renaming it to ARTIFACT-COMPILE breaks continuity with `protocols/desc.md` and the prior audit. The minimum-disruption naming is: keep SYNTHESIZE for what it was always trying to mean (artifact-construction), and name the implicit finding-compile operation with a fresh term that doesn't disrupt existing names.

**Resolution:** Use **FINDING-COMPILE** for the finding.md production operation, **SYNTHESIZE** for the artifact construction operation. FINDING-COMPILE is verb-explicit; SYNTHESIZE is preserved from existing vocabulary.

If the user prefers shorter, **FINDING** alone is acceptable but slightly noun-confusing. **FINDING-COMPILE** is the cleaner choice.

**Confidence:** MEDIUM-HIGH on the names. The naming has some judgment-call freedom; what matters most is the split, not the exact words.

### Ambiguity 4: What does the artifact-construction protocol's "underspecification" mean for now?

**Counter-interpretation:** if SYNTHESIZE-as-artifact-construction has no actual procedure (the HOW for spec/plan/report construction is missing), maybe it shouldn't be named yet. Premature naming.

**Why this counter has some force:** named-but-empty protocols can give false confidence that the architecture is more complete than it is.

**Why it doesn't win:** the precedent is established. `protocols/desc.md` lists multiple "named but underspecified — needs full formalization" protocols (HANDOFF, BRIEF, SCOPE, BRANCH, MERGE, VERSION). The project's pattern is to NAME the slot first, formalize the procedure when needed. SYNTHESIZE-as-artifact-construction fits this pattern.

**Resolution:** SYNTHESIZE stays named; its current spec in `inquiry.md` should explicitly say "artifact construction is currently performed manually by the user; the formal procedure (HOW to construct spec / plan / report / RCA from a finding) is named slot for autonomy-ladder Level 2-3+ implementation."

**Confidence:** HIGH on this. Matches existing project pattern.

---

## SV4 — Clarified Understanding

The four ambiguities collapse to a stable shape:

- Two operations, structurally distinct (input/output asymmetry).
- Both should be formalized with names.
- Names: **FINDING-COMPILE** for `finding.md` production; **SYNTHESIZE** for project-artifact construction.
- SYNTHESIZE remains named-but-procedurally-underspecified; explicit acknowledgment that the formal artifact-construction procedure is future work.

What's now no longer viable:
- Treating SYNTHESIZE and finding.md as one operation with two implementations (Option c).
- Calling SYNTHESIZE "redundant with finding.md" or "superseded" (the previous false framing).
- Leaving inquiry.md's SYNTHESIZE section conflated.
- Single-name coverage of both roles.

---

## Phase 4 — Degrees-of-Freedom Reduction

### Variables now fixed

- The architecture recognizes **two distinct protocols**: FINDING-COMPILE and SYNTHESIZE.
- **FINDING-COMPILE** is filled (implemented inline by /MVL and /MVL+).
- **SYNTHESIZE** is named-but-underspecified (slot for artifact-construction at Level 2-3+ autonomy).
- The current `inquiry.md` SYNTHESIZE section needs rewriting to explicitly say "artifact construction (not finding compilation)" and acknowledge the underspecification.
- `protocols/desc.md` needs splitting the SYNTHESIZE entry into two (FINDING-COMPILE + SYNTHESIZE).
- `/MVL` and `/MVL+` specs may want to mention "the finding-writing step IS the FINDING-COMPILE protocol" for cross-reference.

### Options eliminated

- "One protocol with two valid implementations" — fails on input/output asymmetry.
- "Don't name FINDING-COMPILE; just leave it implicit" — breaks the protocols-dimension pattern (named slots even when implemented inline).
- "Don't formalize SYNTHESIZE; let artifact-construction emerge organically" — loses architectural prep for autonomy-ladder Level 2-3+.
- "Treat the two operations as identical with template variation" — same as the first elimination, restated.

### Paths remaining

- Apply the split:
  - Rewrite `commands/inquiry.md`'s SYNTHESIZE section to scope it specifically to artifact-construction; acknowledge underspecification; mention that finding-compile is /MVL's territory.
  - Update `thinking_disciplines/protocols/desc.md` to list two protocols (FINDING-COMPILE in alive-absorbed; SYNTHESIZE in alive-with-gap or in missing).
  - Optional: add a note in `/MVL`'s and `/MVL+`'s "ITERATION COMPLETE → YES" section that the finding-writing step IS the FINDING-COMPILE protocol.

- For naming: FINDING-COMPILE is the recommended name, but the user can also choose FINDING or COMPILE-FINDING. The split itself is what's load-bearing; the exact name is a judgment call.

---

## SV5 — Constrained Understanding

The solution space has converged. The verdict is option (b): two distinct protocols, currently conflated. The split is structurally justified (input/output asymmetry), strategically aligned (autonomy-ladder trajectory), cheap to apply (~30-50 line documentation edit), and consistent with existing project patterns (named-but-deferred protocol slots).

Remaining decisions are naming refinements (FINDING-COMPILE vs FINDING vs COMPILE-FINDING) and exact wording — judgment calls within the agreed split.

---

## Phase 5 — Conceptual Stabilization

### SV6 — Stabilized Model

**The verdict is option (b): two distinct protocols, currently conflated.**

#### The two protocols

**1. FINDING-COMPILE** (filled / alive-absorbed)
- **What it does:** Read a completed inquiry's SIC artifacts (`_branch.md`, `sensemaking.md`, `innovation.md`, `critique.md`); compile into the standardized `finding.md` artifact (frontmatter + Question + Finding Summary + Finding + Next Actions + Reasoning + Open Questions); apply the three style rules (hedging specificity, cross-reference format, gate specificity); save inside the inquiry folder.
- **Audience:** inquiry-tree-traversers — someone reading findings to understand decisions, refining, superseding, or acting on Next Actions.
- **Implementation:** inline in `/MVL` and `/MVL+` at the "ITERATION COMPLETE → YES" branch.
- **Status:** alive, implemented, routinely invoked.

**2. SYNTHESIZE** (named slot / alive-but-underspecified)
- **What it does:** Take a completed finding (and possibly other inquiry artifacts) and construct a project-level artifact (spec / plan / report / RCA / decision document) in the format the project's audience requires; save outside the inquiry folder, in the project location. The "construction" requires deriving content the finding doesn't contain (e.g., spec frontmatter, invocation patterns, examples) from the finding's design decisions.
- **Audience:** project consumers — install scripts, spec-reading agents, project documentation readers.
- **Implementation:** currently performed manually by the human (read finding → write the project artifact). The formal procedure for HOW to construct each artifact type is named slot for Level 2-3+ autonomy.
- **Status:** named, procedurally-underspecified — matches the project's pattern of named-but-deferred protocol slots (HANDOFF, BRIEF, SCOPE, etc.).

#### Why they're distinct (not just template variation)

- **Input asymmetry:** FINDING-COMPILE inputs are SIC artifacts (the inquiry's reasoning trail). SYNTHESIZE input is a finding (already-compiled answer) plus the target artifact's format requirements.
- **Output relationship asymmetry:** FINDING-COMPILE's output IS the verdict (the answer to the inquiry's question). SYNTHESIZE's output IS the thing the verdict specified — a different artifact than the verdict itself. A finding ABOUT how to build `/scope` is not the same as `/scope`'s spec.md.
- **Construction work asymmetry:** FINDING-COMPILE applies a known template to known input. SYNTHESIZE constructs new content (spec frontmatter, invocation patterns, runnable examples, etc.) that doesn't exist in the input — derived from the finding's design decisions but not contained in them.

These three asymmetries together make the operations structurally distinct, not template variations of one.

#### What changes practically

For the user, the split changes documentation, not behavior:
- `commands/inquiry.md`'s SYNTHESIZE section gets rewritten to scope it to artifact-construction explicitly; acknowledge the procedural underspecification; cross-reference `/MVL`/`/MVL+` for the finding-compile operation.
- `thinking_disciplines/protocols/desc.md`'s SYNTHESIZE entry gets split into two: FINDING-COMPILE (alive-absorbed in /MVL & /MVL+) and SYNTHESIZE (alive-but-underspecified, slot for Level 2-3+).
- Optional: `/MVL` and `/MVL+` specs cross-reference the FINDING-COMPILE protocol name in the iteration-complete-yes branch.

The user's daily practice is unchanged — they keep running `/MVL` and getting `finding.md`. The change is architectural clarity: the system now has named slots that correctly describe what's happening (and what could happen at higher autonomy).

#### Why the user's intuition was right

The user proposed two protocols ("summary_taking" + SYNTHESIZE) and was correct on the split. The naming refinement is: "summary_taking" is too narrow for what `finding.md` does (which is more than summarization — it applies a structured template, captures cross-iteration reasoning, produces a self-contained verdict with Next Actions and Open Questions). The cleaner name is **FINDING-COMPILE** or **FINDING**.

The user's suggestion that "currently SYNTHESIZE also works as summary taking" was the conflation diagnosis, and it's correct: the current `inquiry.md` SYNTHESIZE section borrows finding-compile's procedure while claiming artifact-construction's role.

#### Connection to end-goal

`enes/desc.md`'s autonomy ladder requires autonomous artifact-construction at Level 2-3+:
- Level 2 (system handles uncertain reviews): proposed spec changes are artifact construction.
- Level 3 (system proposes own architectural improvements): new specs/protocols are artifact construction.
- Level 3+ (parallel MVL loops with cross-comparison): higher-order synthesis specs are artifact construction at scale.

Naming SYNTHESIZE as the architectural slot for these capabilities is exactly the kind of "named-but-deferred" preparation that the protocols dimension is designed to provide (per `protocols/what_is_protocol.md`'s discussion of the protocols dimension as "architectural prep for a future where embedded operational machinery stops scaling").

### How SV6 differs from SV1

SV1 was tentative: "the previous answer was probably defending intent over current shape; need to check whether two protocols is right." SV6 is structured: yes, two protocols (FINDING-COMPILE + SYNTHESIZE); structurally distinct on three asymmetries (input, output relationship, construction work); the previous "narrowed not superseded" framing was incorrect; the user's intuition was right with naming refinement; concrete documentation changes follow.

The verdict is firm. Confidence is HIGH on the split, MEDIUM-HIGH on the naming.

---

## Saturation Indicators (Telemetry)

- **Perspective saturation:** 7 perspectives produced new types of anchors. The most uncomfortable angle ("split is premature") was tested explicitly and resolved via the established named-but-deferred pattern in the protocols dimension.
- **Ambiguity resolution:** 4 of 4 ambiguities resolved with HIGH confidence on three (one-vs-two operations; formalize-the-split; underspecified-status); MEDIUM-HIGH on naming (judgment call within the agreed split).
- **SV delta:** Significant. SV1 expected to refine the previous "narrowed not superseded" answer; SV6 produced a structured two-protocol split with three structural asymmetries, named slots, and concrete documentation changes. Major shift from SV1.
- **Anchor diversity:** Constraints (current spec content, autonomy-ladder requirements), key insights (input/output asymmetry, construction-work asymmetry), structural points (the two protocols), foundational principles (named-but-deferred slots, capability-based criterion), meaning-nodes (FINDING-COMPILE, SYNTHESIZE, verdict-vs-artifact). All five types produced; multiple perspectives contributed.

## Failure-mode self-check

- **Status quo bias?** No — the audit explicitly overrides the previous `synthesize_protocol_check` sensemaking's "narrowed not superseded" framing. Willing to change a recently-stated position when the evidence demands it.
- **Premature stabilization?** No — multiple perspectives surfaced the artifact-construction-vs-finding-compile asymmetry; the verdict emerged through ambiguity collapse, not at SV1.
- **Anchor dominance?** No — verdict rests on multiple anchors (input/output asymmetry observable in concrete examples; autonomy-ladder requirements; protocols-dimension's existing named-but-deferred pattern; the actual conflation visible in `inquiry.md`'s current SYNTHESIZE section).
- **Perspective blindness?** Tested the most uncomfortable perspective ("split is premature; vocabulary bloat") explicitly. Resolved via project-pattern consistency (named-but-deferred is established).
- **Clean resolution trap?** The split survives the strongest counter-interpretation (one operation with template variation). Counter fails on input/output asymmetry — observable, structural, not aesthetic.
- **Self-reference blindness?** Grounded externally in the actual content of `commands/inquiry.md`, `commands/MVL.md`, `protocols/desc.md`, `enes/desc.md` autonomy ladder. The verdict refines the prior `protocols_relevance_check` finding rather than reinforcing it from inside the same conceptual framework.
