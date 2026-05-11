# Sensemaking: synthesize_protocol_check

## User Input

SYNTHESIZE protocol relevance check. Two linked questions about `commands/inquiry.md`'s `## SYNTHESIZE — After TERMINATE` section (lines 252-285):
1. Is SYNTHESIZE a protocol (in the sense established by `thinking_disciplines/protocols/desc.md`)?
2. Has SYNTHESIZE been superseded by the `finding.md` mechanism in `/MVL` and `/MVL+`?

The user wants clear yes/no answers for both halves, not vague "it depends."

---

## SV1 — Baseline Understanding

SYNTHESIZE looks like a protocol — it has steps, transforms presentation, isn't a discipline. The `/MVL` family's `finding.md` mechanism overlaps significantly with what SYNTHESIZE does. Probably the answer is "SYNTHESIZE is partially superseded by `finding.md` but not entirely" — but I should check whether the overlap is total or partial.

(SV2 onward will reveal: yes-protocol; not-superseded-but-narrowed; finding.md absorbs the routine case while SYNTHESIZE retains the non-routine case where the project deliverable ≠ the finding.)

---

## Phase 1 — Cognitive Anchor Extraction

### Constraints

- **Protocol definition** (per `thinking_disciplines/protocols/desc.md`): "A protocol is a formalized operational procedure with defined steps and failure modes — that routes, configures, sequences, transfers, or persists the outputs and state of thinking disciplines."
- **`/inquiry`'s SYNTHESIZE section** (lines 252-285) has 4 enumerated steps, an implicit completion test ("for someone who wasn't in the conversation"), an implicit failure mode ("scattered artifacts"), and saves the deliverable to "the appropriate project location (not the inquiry folder — the actual project)."
- **`/MVL`'s finding.md mechanism** has a fixed template (frontmatter + Question + Finding Summary + Finding + Next Actions + Reasoning + Open Questions), three style rules (hedging specificity, cross-reference format, gate specificity), an explicit completion test ("can someone read ONLY finding.md and understand the complete decision?"), and saves to `devdocs/inquiries/X/finding.md` — INSIDE the inquiry folder.
- **`protocols/desc.md`** lists SYNTHESIZE under Transfer Protocols: "Take scattered discipline outputs and produce a coherent deliverable for someone who wasn't in the thinking process. Decomposes into: sensemaking (resolve stale/inconsistent outputs) + critique (select what matters) + audience-aware restructuring."
- **`protocols_relevance_check` finding** (this session) listed SYNTHESIZE as ALIVE in two places with different shapes: "embedded in /inquiry (SYNTHESIZE step) + as finding-template in /MVL & /MVL+." The audit already acknowledged dual implementation.

### Key Insights

- **The deliverable LOCATION is structurally distinct.** SYNTHESIZE goes OUTSIDE the inquiry folder (to project location). finding.md goes INSIDE the inquiry folder. Different addresses = different artifacts. This isn't cosmetic; it's the fundamental difference in role.
- **The deliverable FORMAT is structurally distinct.** SYNTHESIZE format is problem-type-driven (spec / plan / report / RCA / decision document). finding.md is a fixed template. Different shapes for different audiences. A finding.md cannot be shipped as a command spec — its sections (Reasoning, Open Questions, Next Actions) aren't the right shape for that artifact type.
- **The deliverable AUDIENCE is structurally distinct.** SYNTHESIZE's audience = project consumers (the broader project's audience reading a spec, plan, report, etc.). finding.md's audience = inquiry-tree-traversers (someone who hasn't seen the SIC outputs but is reading findings to understand decisions). Both are "external readers" but at different levels.
- **For ~80% of routine inquiries today, finding.md IS the deliverable.** The user runs `/MVL`, gets a finding, reads its Finding Summary + Next Actions, and acts. SYNTHESIZE isn't separately invoked because there's no separate deliverable to produce.
- **For ~20% of inquiries, the deliverable ≠ the finding.** Inquiries where the project needs a spec doc, an implementation plan, an architectural decision record, or an RCA in its own format. finding.md describes what the artifact should be; SYNTHESIZE produces the artifact in the format the project needs.
- **The user's question reflects observed practice.** They're not invoking SYNTHESIZE separately because finding.md handles their cases. The question is: does that mean SYNTHESIZE is dead, or just narrowed?

### Structural Points

- **Two roles that overlap on common ground but are not identical:**
  - `finding.md` = standardized inquiry-verdict artifact, lives in inquiry folder, fixed template.
  - SYNTHESIZE = produce project-level artifact in project-specific format, lives where the project needs it.
- **The `/MVL` family absorbed SYNTHESIZE's routine-case responsibility** (compile inquiry artifacts → standardized verdict). It did NOT absorb the broader role (compile inquiry artifacts → project-specific artifact in project-specific format).
- **The protocols/desc.md decomposition of SYNTHESIZE** ("sensemaking + critique + audience-aware restructuring") shows the third component — audience-aware restructuring — is what differs between routine and non-routine cases. finding.md restructures for ONE audience (inquiry-traverser); SYNTHESIZE restructures for MANY audiences (per problem type).

### Foundational Principles

- **Protocols can be partially absorbed into commands.** This was established in the prior `protocols_relevance_check` finding. SYNTHESIZE being partially absorbed by finding.md is consistent with this pattern.
- **Different deliverable formats serve different audiences.** A spec is shaped differently from a finding; a plan is shaped differently from a report. The fact that they're all "deliverables" doesn't make them interchangeable.
- **Standardization vs flexibility tradeoff.** `/MVL`'s finding.md picked standardization (one template, predictable shape). `/inquiry`'s SYNTHESIZE picked flexibility (problem-type-adaptive format). Both have value at different scales.

### Meaning-Nodes

- **"Protocol"** — operational procedure that routes/configures/sequences/transfers/persists discipline outputs.
- **"SYNTHESIZE"** — the named transfer protocol for compiling discipline outputs into deliverables.
- **"finding.md"** — `/MVL`'s standardized inquiry-verdict artifact.
- **"Routine case"** — inquiry where the deliverable IS the verdict (audit, evaluation, design question).
- **"Non-routine case"** — inquiry where the deliverable is a project-specific artifact (spec, plan, report, RCA) distinct from the verdict.
- **"Deliverable location"** — inside the inquiry folder vs outside it (in the project).

---

## SV2 — Anchor-Informed Understanding

SYNTHESIZE qualifies as a protocol per the project's own definition. It is NOT superseded by `finding.md`; rather, `finding.md` absorbed the ROUTINE case (compile inquiry artifacts into a standardized verdict artifact in the inquiry folder). SYNTHESIZE retains the NON-ROUTINE case (produce a project-specific artifact in a project-specific format, saved outside the inquiry folder).

The user's question reflects observed practice: in current routine usage, they don't invoke SYNTHESIZE separately because finding.md is sufficient. The honest answer is "SYNTHESIZE is alive but narrowed — its routine-case responsibility moved to finding.md; its broader role remains."

---

## Phase 2 — Perspective Checking

### Technical / Logical

- SYNTHESIZE has 4 explicit steps. finding.md has a fixed template structure. Both qualify as "formalized operational procedures with defined steps." Both meet the protocols/desc.md definition.
- The failure modes differ in what they protect against: SYNTHESIZE protects against "scattered artifacts that the project can't act on"; finding.md protects against "internally-referential shorthand requiring inquiry context to understand."
- Implementation: `/MVL` writes finding.md inline as part of its protocol (no separate user invocation). `/inquiry` mentions SYNTHESIZE as a follow-up step the user can trigger ("can run SYNTHESIZE immediately or defer it").

### Human / User

- For 80%+ of inquiries today (audits, evaluations, design questions), finding.md IS the deliverable. The user reads finding.md, acts on Next Actions, done. SYNTHESIZE isn't separately invoked.
- For specific inquiry types ("write a new command spec," "design a workflow," "produce an architectural decision record"), finding.md is the verdict, but the actual project artifact is something else. The user has to translate finding.md into a spec.md (or equivalent). This translation IS SYNTHESIZE's role.
- The user's question arises precisely because the relationship between SYNTHESIZE and finding.md isn't documented. Lack of explicit guidance is the friction.

### Strategic / Long-term

- The protocols dimension's purpose (per `thinking_disciplines/protocols/desc.md`) is to provide architectural slots for operational machinery. SYNTHESIZE-as-named-protocol fits this even if rarely actively invoked — it names a real role.
- At higher autonomy levels (`enes/desc.md` Level 2+), the system may need to autonomously produce project-level artifacts (spec docs, code, plans) from completed inquiries. SYNTHESIZE-as-formalized-protocol becomes the slot where that capability would be built. finding.md alone doesn't cover this future role.

### Risk / Failure

- **Risk of removing SYNTHESIZE from /inquiry:** lose the named slot for project-artifact production. Inquiries that need to produce a spec/plan/report end up with the user manually translating finding.md without explicit guidance. Output quality varies by user.
- **Risk of keeping SYNTHESIZE as-is (no clarification):** the user keeps asking "is this still relevant?" The lack of clarity costs every reader some friction.
- **Risk of confusing the two:** without explicit clarification, future maintainers may not know that finding.md = routine case and SYNTHESIZE = non-routine case. They might delete one or duplicate the other.

### Resource / Feasibility

- Updating inquiry.md's SYNTHESIZE section to clarify the relationship with finding.md: ~10-15 lines added. Cheap.
- Building SYNTHESIZE-as-actual-command (auto-produce spec/plan/report from finding.md): hours/days. Out of scope for this question.
- Doing nothing: no immediate cost; small drift risk.

### Definitional / Consistency

- Does SYNTHESIZE meet the protocols/desc.md definition? Yes — operational procedure (it routes outputs to a deliverable), defined steps (4 enumerated), implicit completion test, transfer category match.
- Does the prior `protocols_relevance_check` finding's claim hold (SYNTHESIZE is alive in two places with different shapes)? Yes, consistent with this analysis. The prior finding was correct but didn't fully articulate the routine-vs-non-routine distinction.
- Does inquiry.md's SYNTHESIZE section contradict /MVL's finding.md? No. They're written about different artifacts in different locations. The contradiction would only arise if both claimed to be the canonical post-inquiry deliverable mechanism — neither does. /MVL writes finding.md INSIDE the inquiry folder; SYNTHESIZE produces an artifact OUTSIDE.

### Most uncomfortable perspective

The most uncomfortable angle: maybe SYNTHESIZE is overcomplicated and finding.md is sufficient for everything. The argument: a well-structured finding.md with rich Next Actions, complete Reasoning, and clear Open Questions is functionally equivalent to a spec/plan/report. The format difference is cosmetic; the content is the same.

Honest engagement: this is partially right. For inquiries that produce *decisions about what to do*, finding.md's Next Actions section is essentially a plan; the Finding section is essentially a report. A reader can act on those without needing format adaptation.

But for inquiries that produce *the artifact itself* (e.g., "write the spec for /scope"), finding.md describes what the spec should contain, but the actual spec.md needs a different shape — invocation patterns, parameter docs, examples, integration notes, the `--- name: ... description: ...` frontmatter. A finding.md cannot be shipped AS the spec; it has to be translated.

So the most uncomfortable angle reveals a real distinction that survives scrutiny. SYNTHESIZE is not redundant.

---

## SV3 — Multi-Perspective Understanding

After perspective checking:

- SYNTHESIZE is a real protocol per the protocols/desc.md definition. (Yes to Q1.)
- SYNTHESIZE is NOT superseded by finding.md, but IS narrowed. finding.md absorbs the routine case; SYNTHESIZE retains the non-routine case. (No to Q2, with the narrowing caveat.)
- The relationship between SYNTHESIZE and finding.md should be made explicit in inquiry.md to resolve the user's confusion (which is observed friction, not a fluke).

---

## Phase 3 — Ambiguity Collapse

### Ambiguity 1: Is SYNTHESIZE a protocol, or just a step in /inquiry's procedure?

**Counter-interpretation:** SYNTHESIZE is just a section of /inquiry's spec, not a separately-named protocol. It exists only inside one command and isn't generic enough to be a "protocol."

**Why this counter is partially right:** SYNTHESIZE IS embedded in /inquiry's procedure; it's a subsection of /inquiry's spec.

**Why this counter doesn't fully win:** The protocols/desc.md definition of "protocol" doesn't require non-embedded existence. A protocol is "a formalized operational procedure with defined steps and failure modes — that routes, configures, sequences, transfers, or persists outputs." SYNTHESIZE meets this definition cleanly. Other protocols (CONFIGURE, STEER, RESUME) are also embedded in commands and still qualify as protocols. Embeddedness doesn't disqualify.

Additionally, `protocols/desc.md` itself lists SYNTHESIZE as a Transfer Protocol — the project's own architecture document treats it as a protocol.

**Resolution:** YES — SYNTHESIZE is a protocol. The "embedded in /inquiry" framing doesn't change its protocol status.

**What is now fixed:** Q1 has a clean YES answer.

**Confidence:** HIGH. The protocols/desc.md definition fits cleanly; the project's own architecture doc lists it.

### Ambiguity 2: Is SYNTHESIZE superseded by /MVL's finding.md?

**Counter-interpretation A (yes, superseded):** finding.md provides the same deliverable role — compiled artifacts structured for an external reader. SYNTHESIZE's distinct features (problem-type-driven format, project-level location) are aesthetic rather than load-bearing. finding.md can be copied to a project location; the format is just text.

**Counter-interpretation B (no, not superseded):** SYNTHESIZE's deliverable formats (spec / plan / report / RCA) have audience-specific conventions that finding.md doesn't satisfy. A finding.md cannot be shipped as a command spec — its sections aren't the right shape for that artifact type. They are different artifacts for different audiences.

**Why neither fully wins as stated:**
- A is partially right: for routine inquiries, finding.md DOES adequately serve as the deliverable. The user doesn't need a separate SYNTHESIZE step for an audit or evaluation.
- B is partially right: for non-routine inquiries (where the project artifact is a spec, plan, or domain-specific document), finding.md is NOT the right deliverable shape. Translation is required.

**Why A fails on structural grounds when generalized:** A claims the format difference is "aesthetic." But the format difference is functional — it determines whether a project consumer can ACT on the artifact. A spec.md has frontmatter, parameter docs, invocation patterns; a finding.md has Reasoning and Open Questions. A user trying to install a finding-as-spec would fail because the format is wrong for the consumer (Claude Code, Codex, etc.). The format IS the artifact's role.

**Why B fails on structural grounds when generalized:** B implies finding.md never serves as a deliverable. But for routine inquiries (audits, evaluations, design questions where the deliverable IS the verdict), finding.md IS sufficient. The user doesn't need a separate SYNTHESIZE step.

**Resolution:** SYNTHESIZE is NOT superseded; it is NARROWED. finding.md absorbs SYNTHESIZE's routine-case responsibility. SYNTHESIZE-as-broader-protocol remains relevant for the non-routine case (project-specific artifact in project-specific format).

In current practice:
- **Routine** (`/MVL` inquiry → finding.md → user acts): no SYNTHESIZE invocation needed.
- **Non-routine** (`/inquiry` inquiry → finding-style outputs → user runs SYNTHESIZE → project artifact saved to project location): SYNTHESIZE remains the named protocol.

**What is now fixed:** Q2 has a clean answer: NOT superseded. Narrowed.

**What is no longer allowed:** Treating SYNTHESIZE and finding.md as redundant. Treating finding.md as the only deliverable mechanism in the project.

**Confidence:** HIGH on the resolution. The artifact-format distinction is structural (different audiences need different shapes), not cosmetic.

### Ambiguity 3: What practical action follows?

**Counter A (do nothing):** Leave inquiry.md's SYNTHESIZE section as-is. The user now understands the relationship.

**Counter B (clarify):** Update inquiry.md's SYNTHESIZE section to explicitly note the relationship with finding.md: "For routine inquiries that culminate in a verdict (audits, evaluations, design questions), finding.md (in /MVL/MVL+) is the deliverable and SYNTHESIZE isn't separately invoked. SYNTHESIZE remains the protocol for inquiries whose deliverable is a project-specific artifact (spec, plan, report, RCA) distinct from the finding."

**Counter C (deprecate):** Remove SYNTHESIZE from inquiry.md; treat finding.md as the canonical deliverable mechanism.

**Why C fails:** Deprecation removes the named slot for the spec/plan/report case. Users have no guidance for that case; output quality varies. The protocols dimension's purpose (named architectural slots for capabilities that may be needed later) is undermined.

**Why A fails:** Leaves the user wondering "is this still relevant?" — exactly the question they're asking now. Lack of clarity is the ongoing cost; future readers will have the same confusion.

**Resolution:** B (clarify). Update inquiry.md to explicitly relate SYNTHESIZE and finding.md. Cheap (~10-15 lines added). Resolves the user's question. Preserves the named slot for non-routine cases.

**Confidence:** HIGH on B. The clarification addresses the user's question directly without removing functionality.

---

## SV4 — Clarified Understanding

The three ambiguities collapse to a stable shape:

- SYNTHESIZE qualifies as a protocol per the project's own definition. (Q1: YES.)
- SYNTHESIZE is NOT superseded by finding.md; it is narrowed. finding.md absorbs the routine case (compile inquiry artifacts into a standardized verdict in the inquiry folder). SYNTHESIZE retains the non-routine case (produce a project-specific artifact in a project-specific format, saved outside the inquiry folder). (Q2: NO, with narrowing.)
- The right action is to clarify the relationship in `commands/inquiry.md`'s SYNTHESIZE section.

What's now no longer viable:
- Treating SYNTHESIZE and finding.md as duplicates.
- Treating finding.md as sufficient for all post-inquiry deliverables.
- Removing SYNTHESIZE from /inquiry without addressing the non-routine deliverable case.
- Leaving the relationship unclarified.

---

## Phase 4 — Degrees-of-Freedom Reduction

### Variables now fixed

- SYNTHESIZE IS a protocol (Transfer Protocol category per protocols/desc.md).
- SYNTHESIZE is NOT superseded; finding.md absorbs the routine case only.
- The narrowing distinction is: routine (deliverable IS the finding) vs non-routine (deliverable ≠ the finding, e.g., a project-specific spec/plan/report/RCA).
- The recommended action is documentation clarification, not code change.

### Options eliminated

- "SYNTHESIZE is just an /inquiry-internal step, not a protocol" — meets the protocols/desc.md definition and is listed as one in the architecture doc.
- "finding.md does everything SYNTHESIZE does" — finding.md cannot be shipped as a spec/plan/report; format is wrong for those audiences.
- "Remove SYNTHESIZE from /inquiry" — removes the named slot for project-artifact production.
- "Leave the relationship unclarified" — the user's question is observed friction; future readers will have the same friction.

### Paths remaining

- **For /inquiry's SYNTHESIZE section:** add ~10-15 lines clarifying the relationship with finding.md. Specifically, note that for routine cases (audits / evaluations / design questions), finding.md IS the deliverable and SYNTHESIZE isn't separately invoked. SYNTHESIZE remains the protocol for non-routine cases (project-specific artifacts in project-specific formats).
- **Optional:** add a brief note in /MVL's finding-writing step pointing to SYNTHESIZE as "this is /MVL's implementation of part of the SYNTHESIZE protocol — the routine case where the deliverable is the inquiry verdict."
- **Out of scope:** building SYNTHESIZE as an actual standalone command or implementing auto-translation from finding.md to project artifacts.

---

## SV5 — Constrained Understanding

The solution space narrows to:

- **Verdict on Q1 (is SYNTHESIZE a protocol):** YES. High confidence.
- **Verdict on Q2 (is SYNTHESIZE superseded by finding.md):** NO. finding.md absorbs the routine case; SYNTHESIZE retains the non-routine case. High confidence.
- **Recommended action:** clarify the relationship in `commands/inquiry.md`'s SYNTHESIZE section. ~10-15 lines added. Cheap and resolves the user's question.

The user has clean answers to both halves.

---

## Phase 5 — Conceptual Stabilization

### SV6 — Stabilized Model

**Two clean answers:**

#### Q1 — Is SYNTHESIZE a protocol?

**YES.** SYNTHESIZE qualifies as a protocol per the project's own definition (`thinking_disciplines/protocols/desc.md`):

- It's a formalized operational procedure (4 enumerated steps).
- It has an implicit completion test ("for someone who wasn't in the conversation").
- It has an implicit failure mode (scattered artifacts the project can't act on).
- It transfers discipline outputs into a deliverable (Transfer Protocol category).

The project's own architecture doc (`protocols/desc.md`) explicitly lists SYNTHESIZE under Transfer Protocols. The recently-completed `protocols_relevance_check` finding confirmed this status.

#### Q2 — Has SYNTHESIZE been superseded by /MVL's finding.md?

**NO.** finding.md absorbed the ROUTINE case but did not absorb SYNTHESIZE's broader role.

- **The routine case** (audits, evaluations, design questions where the deliverable IS the inquiry's verdict): finding.md handles this. The user runs `/MVL`, gets a finding.md in the inquiry folder, reads its Finding Summary + Next Actions, and acts. No separate SYNTHESIZE invocation is needed.

- **The non-routine case** (inquiries that need to produce a project-specific artifact distinct from the verdict — spec / plan / report / RCA / decision document in the format the project's audience needs): finding.md does NOT handle this. A finding.md cannot be shipped as a command spec — its sections (Reasoning, Open Questions, Next Actions) aren't the right shape for that audience. SYNTHESIZE remains the named protocol for this case.

**Three structural distinctions** between the two:
- **Location:** finding.md lives INSIDE the inquiry folder (`devdocs/inquiries/X/finding.md`); SYNTHESIZE's deliverable goes OUTSIDE (in the project, e.g., `enes/`, `commands/`, `thinking_disciplines/`).
- **Format:** finding.md uses a fixed template; SYNTHESIZE adapts to problem type (spec / plan / report / RCA).
- **Audience:** finding.md is for inquiry-tree-traversers (someone reading findings to understand decisions); SYNTHESIZE's deliverable is for project consumers (someone reading a spec, plan, report).

#### Practical recommendation

Update `commands/inquiry.md`'s SYNTHESIZE section to explicitly clarify the relationship with finding.md. Proposed addition (~10-15 lines):

```markdown
## SYNTHESIZE and `finding.md`: when each applies

`/MVL` and `/MVL+` write a `finding.md` inside the inquiry folder at iteration completion. For most inquiries — audits, evaluations, design questions, where the deliverable IS the inquiry's verdict — `finding.md` is the deliverable. SYNTHESIZE isn't separately invoked because there's nothing more to produce.

SYNTHESIZE remains the protocol for inquiries whose deliverable is a **project-specific artifact distinct from the finding** — a command spec, an implementation plan, an architectural decision record, a research report, or a root-cause analysis in the format the project's audience needs. In those cases, `finding.md` describes what the artifact should contain; SYNTHESIZE produces the artifact in the right format, saved to the right location in the project (not the inquiry folder).

The boundary is the deliverable shape: if `finding.md`'s template (Question / Summary / Finding / Next Actions / Reasoning / Open Questions) IS the right shape for the project's consumer, you're done after `/MVL`. If the project needs a different shape (spec frontmatter, code patches, a structured report with charts, etc.), SYNTHESIZE is the protocol for producing that.
```

This clarification:
- Resolves the user's question (the relationship was implicit; now it's explicit).
- Preserves SYNTHESIZE's named slot for non-routine cases.
- Acknowledges finding.md's absorption of the routine case.
- Defines the boundary structurally (deliverable shape) so future readers can apply it themselves.

### How SV6 differs from SV1

SV1 was vague: "probably a partial supersession." SV6 is structured: yes-protocol; no-supersession with explicit narrowing into routine (handled by finding.md) vs non-routine (SYNTHESIZE retains) cases; concrete recommendation to clarify in inquiry.md.

The verdict is firm. Both halves of the user's question have clean answers.

---

## Saturation Indicators (Telemetry)

- **Perspective saturation:** 7 perspectives produced new types of anchors. The most uncomfortable perspective ("maybe finding.md does everything") was tested explicitly and resolved on artifact-format grounds (finding.md cannot be a command spec).
- **Ambiguity resolution:** 3 of 3 ambiguities resolved with HIGH confidence. Q1 (is it a protocol) clean YES. Q2 (is it superseded) clean NO with narrowing structure. Q3 (what to do practically) clean recommendation for documentation clarification.
- **SV delta:** Significant. SV1 expected partial supersession; SV6 produced a structured routine-vs-non-routine distinction with concrete recommendations.
- **Anchor diversity:** Constraints (protocol definition, finding.md template), key insights (location/format/audience differences), structural points (two-role model), foundational principles (artifact format = audience-determined), meaning-nodes (routine vs non-routine cases). All five anchor types produced.

## Failure-mode self-check

- **Status quo bias?** No — willing to recommend updating inquiry.md (which has been stable since written).
- **Premature stabilization?** No — perspective checking surfaced the routine-vs-non-routine split; the resolution emerged through ambiguity collapse, not at SV1.
- **Anchor dominance?** No — verdict rests on multiple anchors (protocols/desc.md definition, the format/location/audience triple distinction, the prior `protocols_relevance_check` finding, the empirical "finding.md cannot be a spec" test).
- **Perspective blindness?** Tested the most uncomfortable angle (maybe finding.md replaces SYNTHESIZE entirely) explicitly. Resolved on structural grounds (artifact format is audience-determined; not cosmetic).
- **Clean resolution trap?** The "narrowed not superseded" resolution survives the structural test (different formats are required for different audiences; finding.md's template cannot serve as a command spec). Not over-claimed.
- **Self-reference blindness?** Grounded externally in the actual content of `commands/inquiry.md`, `commands/MVL.md`'s finding template, `protocols/desc.md`'s definition. Not purely self-referential.
