# Surfacing — routeman_input_dependency_question

## User Input

/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-28_15-48__routeman_input_dependency_question/_branch.md

Purpose: surface territory for diagnosing the agent's prior claim about routeman's input contract. 3 observation targets:
(1) input necessity;
(2) inquiries-folder dependency;
(3) prior agent claim re-examination.

---

## Mode + Entry Point + Territory

- **Mode:** ARTIFACT (the spec, the user_stories, the agent's prior conversation claim, and the canon doc are all pre-existing items).
- **Entry point:** SIGNAL-FIRST (the user's challenge is the specific purpose).
- **Territory specification:** EXPLICIT-BOUNDED.

---

## Traversal Trace

### Region R1: Routeman SKILL.md — the input contract authority

| # | Item identifier | Tag | Confidence | Recency | Step note |
|---|---|---|---|---|---|
| 1 | SKILL.md Step 1 verbatim: *"Read the input and consume it. The input **should** supply the **current state** (artifacts and verdicts from prior cognitive work — what has been understood, generated, critiqued; what is settled, open, or blocked) and the **goal or subgoal** (the directional anchor that biases which moves count as 'advancing'). If the input is a folder path, read the relevant files to reconstruct the current state. If the input is raw text, parse it for state + goal. If the goal is implicit, surface it explicitly before proceeding."* | **CORE** | HIGH | filesystem | THE load-bearing item for OT1 + OT2 + OT3. Key observations: (a) "**should** supply" — modal language; not "must"; (b) folder path AND raw text are BOTH first-class input shapes; (c) "**If the goal is implicit, surface it explicitly before proceeding**" — even an IMPLICIT goal is handle-able by the discipline (it gets surfaced as part of operation, not rejected); (d) no mention of "inquiries folder" specifically — just "folder path." |
| 2 | "The input should supply..." — modal word "**should**," not "MUST" or "REQUIRED." | **SUB** | HIGH | filesystem | Indicates input is the NORMAL case, not a hard precondition. The spec doesn't HALT if input is incomplete; it surfaces missing parts (e.g., implicit goal) and proceeds. This contrasts with the agent's prior claim ("the discipline can't operate without those") which was overstated. |
| 3 | "**If the input is a folder path**, read the relevant files to reconstruct the current state." — folder path is generic; not "inquiry folder." | **CORE** | HIGH | filesystem | Direct refutation of any inquiries-folder-specific dependency. A folder path is ANY folder — could be `devdocs/inquiries/<X>/`, `docs/canon/`, project root, a codebase subdirectory, etc. The spec doesn't restrict folder TYPE. |
| 4 | "**If the input is raw text**, parse it for state + goal." — raw text is a fully first-class input shape. | **CORE** | HIGH | filesystem | Direct evidence that NO folder is required at all. Raw text alone can supply state + goal. This means routeman can be invoked entirely without filesystem dependency. |
| 5 | "If the goal is implicit, **surface it explicitly before proceeding**." | **SUB** | HIGH | filesystem | The discipline has a graceful-degrade path for implicit goals. It DOESN'T HALT on missing goal; it surfaces the implicit goal as part of operation. Suggests the input contract is lenient + collaborative, not strict. |

### Region R2: References/routeman.md §3.2 Reception

| # | Item identifier | Tag | Confidence | Recency | Step note |
|---|---|---|---|---|---|
| 6 | §3.2 Reception verbatim: *"Once per invocation. Receives: **Required:** the `current state` (artifacts and verdicts from prior cognitive work); the `goal` or `subgoal` (the directional anchor biasing enumeration). **Optional re-invocation parameters:** cross-invocation context loaded via `_route.md`'s Prior Invocations + Last Invocation sections (per §5.8); optional `refined-sub-goal`..."* | **CORE** | HIGH | filesystem (post-amendment spec) | Key observation: state + goal are labeled **Required**. This SEEMS to support the agent's "needs input" claim. BUT: the "Required" is at the COGNITIVE LEVEL (the discipline needs state + goal to operate), not at the INPUT-SHAPE level. The state + goal can be supplied via folder, raw text, or surfaced from implicit — but they must be RECONSTRUCTABLE for the discipline to enumerate. |
| 7 | §3.2 doesn't restrict the source of state/goal. Optional re-invocation parameters mention `_route.md` (specific to routeman's own prior invocations), but the REQUIRED state + goal are agnostic about source. | **SUB** | HIGH | filesystem | Confirms: state + goal are conceptually required; source is flexible. |

### Region R3: References/routeman.md §1.4 Vocabulary

| # | Item identifier | Tag | Confidence | Recency | Step note |
|---|---|---|---|---|---|
| 8 | §1.4 vocabulary entry for `current state`: *"The result of prior cognitive work that routeman enumerates from. Includes settled understanding, generated candidates, critique verdicts, telemetry, and unresolved openings. **Received as input.**"* | **CORE** | HIGH | filesystem | "Received as input" — confirms exogenous; routeman doesn't generate state itself. But the source-shape of input is unconstrained. |
| 9 | §1.4 vocabulary entry for `goal / subgoal`: *"The directional anchor that biases which moves count as 'advancing.' **Exogenous; received as input.**"* | **CORE** | HIGH | filesystem | Same as above — exogenous; source-shape is unconstrained. |

### Region R4: Canon doc — folder_based.md

| # | Item identifier | Tag | Confidence | Recency | Step note |
|---|---|---|---|---|---|
| 10 | `docs/canon/runtime_environment/folder_based.md`: *"Where Inquiries Live: `devdocs/inquiries/YYYY-MM-DD_HH-MM__slug/`... Root inquiries are created by `/MVL` or `/MVLw` as `devdocs/inquiries/<YYYY-MM-DD_HH-MM__slug>/`."* | **UMBRELLA** | HIGH | filesystem | Defines WHERE inquiries live in the project. This is about /MVL + /MVLw runner conventions, NOT about routeman's input contract. Routeman is invoked AFTER inquiries are created (per Shape A in the 18-09 finding) but is NOT structurally bound to `devdocs/inquiries/`. The canon doc supplies context but doesn't establish a dependency. |
| 11 | Canon doc mentions "standalone /surfacing one-offs" at `devdocs/surfacing/` etc. — standalone-discipline-invocation pattern. | **SIDE** | MEDIUM | filesystem | Suggests the project's pattern allows STANDALONE invocations of any discipline (including routeman) OUTSIDE the inquiry-folder context. This further refutes the "inquiries folder required" reading. |

### Region R5: The agent's prior claim (verbatim)

| # | Item identifier | Tag | Confidence | Recency | Step note |
|---|---|---|---|---|---|
| 12 | Agent's prior claim: *"Without ANY input (just `/routeman` typed alone), routeman has nothing to enumerate FROM. The 'current state' is undefined; the 'goal' is undefined. The discipline can't operate without those."* | **CORE** | HIGH | this conversation | What's CORRECT: "routeman has nothing to enumerate from" if the user supplies literally nothing (no folder, no text, no clarification). What's MISLEADING: the claim was made in response to "what about just invoking routeman in the project, without feeding a folder?" — but the response didn't clearly say "routeman accepts raw text input + can be invoked from project context via raw text describing state + goal." It implied a stricter input contract than the spec actually establishes. |
| 13 | The agent had been describing all 10 user_stories with "the inquiry folder" framing — narrowing routeman's invocation pattern to inquiry-folder input throughout the user_stories file. | **CORE** | HIGH | this conversation + user_stories.md | This narrowing in user_stories likely CREATED the user's reasonable inference that routeman needs an inquiries folder. The framing was illustrative-but-narrow; the spec is broader. |
| 14 | The agent's prior message DID introduce three scopes (inquiry / nav-session / project) — but only after the user asked about "just invoking routeman in the project." The agent's broader framing came late in the conversation. | **SUB** | HIGH | this conversation | Acknowledges that the agent did EVENTUALLY mention project-scope; but the initial framing was inquiry-folder-centric. |

### Region R6: User_stories.md framing

| # | Item identifier | Tag | Confidence | Recency | Step note |
|---|---|---|---|---|---|
| 15 | `devdocs/routeman_user_stories.md` — all 10 stories use phrases like "Invoke `/routeman` pointed at the inquiry folder" / "`/routeman` on the inquiry folder" / "the inquiry folder containing notes." | **CORE** | HIGH | this session | The user_stories file is consistent within itself but presents routeman as INQUIRY-FOLDER-BOUND in its example invocations. This is illustratively useful (the most common invocation pattern in the project) but spec-inconsistent (the spec accepts more shapes). |
| 16 | Story 5 (navigation session) uses "the parent directory containing the three worker folders (or via a list of paths)" — slight broadening to multi-folder input. | **SIDE** | HIGH | this session | One story acknowledges multi-folder input. None of the 10 stories show pure-raw-text input or non-inquiry-folder input. |
| 17 | The user_stories file is in `devdocs/`, not in `cognitive_harness/routeman/`. It's an EXTERNAL illustration document, not a spec. Differences between it and the spec are not necessarily spec violations — but they CAN create reader-impressions that diverge from the spec. | **UMBRELLA** | HIGH | this session | Context-setting: user_stories doesn't constrain routeman; spec does. |

---

## Concept Names List

- **Input contract flexibility** — type: `coined-term`; provenance: trace #1 + #3 + #4; gloss: routeman's spec explicitly accepts folder path OR raw text as input shapes. No specific folder type required.
- **"Required" at cognitive level vs input-shape level** — type: `coined-term`; provenance: trace #6; gloss: state + goal are required for the discipline to enumerate, but the SOURCE of state + goal is flexible. "Required" doesn't mean "must come from a specific input shape."
- **Standalone discipline invocation pattern** — type: `vocabulary`; provenance: trace #11 (canon doc); gloss: the project's pattern allows disciplines (including routeman) to be invoked outside the inquiry-folder context, with outputs landing in `devdocs/<discipline>/` instead.
- **Implicit-goal surfacing** — type: `vocabulary`; provenance: trace #5; gloss: routeman explicitly handles missing/implicit goals by surfacing them as part of operation, not by halting. The input contract is collaborative, not strict.
- **Inquiry-folder framing bias in user_stories** — type: `coined-term`; provenance: traces #15 + #16; gloss: the user_stories file's illustrative narrowing to inquiry-folder invocations created an over-narrow impression in the user's mind about routeman's actual input contract.

---

## State Summary

### Territory + Purpose echo

- **Territory:** routeman SKILL.md + references/routeman.md §3.2 + §1.4 + canon doc folder_based.md + user_stories.md + agent's prior conversation claim.
- **Purpose:** diagnose the agent's prior claim about routeman's input dependency.

### Coverage map

| Region | Coverage | Aggregate relevance |
|---|---|---|
| R1 SKILL.md input contract | CONFIRMED (full Step 1 read) | CORE-dominated (3 CORE + 2 SUB) |
| R2 §3.2 Reception | CONFIRMED (re-read post-amendment) | CORE + SUB |
| R3 §1.4 Vocabulary | CONFIRMED | CORE × 2 |
| R4 Canon doc | CONFIRMED-PARTIAL (relevant sections; canon establishes inquiry-folder convention but not routeman dependency) | UMBRELLA + SIDE |
| R5 Agent's prior claim | CONFIRMED (verbatim preserved) | CORE × 3 |
| R6 user_stories framing | CONFIRMED | CORE + SIDE + UMBRELLA |

### Confirmed-absent regions

- **No spec language requiring `devdocs/inquiries/` specifically.** Grep-equivalent confirmation: SKILL.md says "folder path" not "inquiry folder"; references §1.4 + §3.2 say state + goal are received but don't specify SOURCE folder type.
- **No spec language using "MUST" for input.** The modal is "should supply" — softer than mandatory.
- **No spec language disallowing raw-text-only invocation.** Raw text is explicitly named as a first-class input shape.

### Recency distribution

| Region | Newest | Oldest |
|---|---|---|
| R1-R3 routeman spec | 2026-05-28 (post-amendment) | spec mtime |
| R4 canon doc | filesystem | filesystem |
| R5 agent's prior claim | today's conversation | today's conversation |
| R6 user_stories | 2026-05-27 | 2026-05-27 |

### Frontier flags — open questions for downstream

- **FF-Su1 — The agent's claim was LITERALLY-TRUE-BUT-MISLEADING.** Sensemaking should adjudicate the precise sense in which it was correct (input is genuinely needed) vs misleading (it implied inquiries-folder dependency, which isn't a spec requirement).
- **FF-Su2 — The user's two sub-questions ("why" + "is routeman dependent on inquiries folder?") have DIFFERENT answers.** OT1 (input necessity): YES, in the sense state+goal are required. OT2 (inquiries-folder dependency specifically): NO, the spec accepts any folder or raw text.
- **FF-Su3 — The user_stories file is over-narrow vs the spec.** Decomposition + Innovation should consider whether to recommend adding a story showing non-inquiry-folder invocation (e.g., raw text or project-root folder).
- **FF-Su4 — "What about just invoking routeman in the project" — the original user question — has a real answer per the spec.** Project-scope invocation works via raw text (describing project state + goal) OR via pointing at a project-level folder (project root, canon docs). The agent's prior framing under-emphasized this.
- **FF-Su5 — The corrected framing.** The right answer to "what does routeman need?" is: state + goal, supplied via folder-path OR raw text. The folder type is unconstrained. Inquiry folders are one common but non-mandatory input shape.

### Workspace-populated status

```yaml
populated: true
populated-at: 2026-05-28T16:00:00Z
extent: "Re-verification of routeman SKILL.md Step 1 verbatim text; references/routeman.md §3.2 + §1.4 verified post-amendment; folder_based.md canon doc read; user_stories framing audited; agent's prior conversation claim preserved verbatim."
```

---

## Telemetry

- Mode: `artifact` + entry point: `signal-first`
- Cycles run: 1 (single-pass; territory is small + focused)
- Items enumerated: 17 (R1: 5 + R2: 2 + R3: 2 + R4: 2 + R5: 3 + R6: 3)
- Items tagged: CORE = 10 + SUB = 4 + SIDE = 2 + UMBRELLA = 2 (with overlap; some items multi-tagged within their region tier)
- Sub-phase fired: NO (territory was explicit-bounded)
- Convergence criteria status: MET — territory traversed; key spec text quoted verbatim; agent's prior claim diagnosed.
- Failure modes checked: Missed-relevance (PASS); Surfaced-irrelevance (PASS); Over-coverage (PASS); Territory-mis-binding (PASS — stayed within routeman input contract scope); Recency-Equates-Idleness (PASS); Recency-Bias-Filter (PASS).
- Self-assessment verdict: **PROCEED**

---

## Frontier — open questions for downstream

The 5 frontier flags route to Sensemaking:

1. (Sensemaking) Adjudicate the precise senses in which the agent's claim was correct vs misleading.
2. (Sensemaking) Separate the two sub-questions: input necessity (OT1) vs inquiries-folder dependency (OT2). These have different answers.
3. (Sensemaking) Consider whether the user_stories file should be amended to include non-inquiry-folder invocations (raw text, project root, etc.).
4. (Sensemaking) Articulate the corrected framing the user can use going forward.

---

## Structural check (manual; structural_check.sh absent)

- Required sections present: ✓ Mode/Entry-point/Territory; ✓ Traversal Trace (per-entry tags); ✓ Concept Names List; ✓ State Summary; ✓ Telemetry; ✓ Frontier routing.
- Workspace work-product present: ✓.
- "Thin" artifact criterion: ✓ (no full content reproduced beyond brief verbatim quotes load-bearing for the inquiry's diagnosis).
- No `[FAIL]` lines.

PROCEED to Sensemaking.
