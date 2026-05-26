# Branch: Surfacing Metadata Recency Signal

## Question

The five meta-aspects (preserved separately because the input is multi-clause):

- **Subject** — the surfacing discipline's runtime spec at `cognitive_harness/surfacing/references/surfacing.md`.
- **Action** — design (decide WHAT to ADD).
- **Level** — discipline (the surfacing runtime spec; not the runner, not a protocol).
- **Observation targets** — all of the following are load-bearing and must be addressed in the answer (preserved as separate items per the LOOP_DIAGNOSE finding MC2 trigger pattern at `devdocs/inquiries/2026-05-22_14-30__loop_diagnose__enumeration_frame_error_in_test_design/finding.md`):
  - a) whether file last-edit-datetime (`mtime`) metadata should become an explicit signal that surfacing uses during territory traversal;
  - b) WHERE in the spec the addition belongs — section / schema field on items / process step / failure mode / reference-data input — the answer must specify the exact location, not handwave;
  - c) how the addition handles the "old ≠ idle" caveat (a file being old does not mean it is irrelevant);
  - d) how the addition uses mtime as a "what is the active task" signal WITHOUT silently down-weighting or filtering older items;
  - e) how regression is explicitly prevented — the change must ENRICH surfacing's existing behavior, not narrow it (the existing recency-blind workspace must remain reachable).
- **Deliverable shape** — design specification: name of the addition, exact location in the spec, exact rule text, with explicit failure-mode protection for the two regression risks (anti-old-equals-idle, anti-silent-down-weighting) and an explicit non-regression argument.

Question stated:

> What addition to the surfacing runtime spec (`cognitive_harness/surfacing/references/surfacing.md`) — at what exact location (section / item schema field / process step / failure mode / reference-data input / new primitive / combination thereof) — would let surfacing use file last-edit-datetime metadata as a signal during territory traversal, while explicitly protecting against the failure modes of treating "old" as "idle" AND of silently down-weighting older-but-still-relevant items, such that the existing recency-blind behavior is enriched rather than regressed?

## Goal

- **Criterion** — a concrete addition with: (i) a stated location in the spec; (ii) exact rule/content text appropriate for a runtime spec edit; (iii) a named anti-regression mechanism that covers BOTH failure modes (recency-equates-idleness AND recency-bias-filter); (iv) a stated non-regression argument (why the existing behavior is preserved, not narrowed).
- **Use case** — the user (or a downstream materialization run) can read the finding and apply the spec edit to `cognitive_harness/surfacing/references/surfacing.md` and (if appropriate) the SKILL.md frontmatter, with no further design work required.
- **Desired outcome** — surfacing becomes recency-aware while staying recency-balanced; the mtime signal is captured and reportable but never replaces content-driven relevance attribution.
- **What would fail** (negative spec — these answers are wrong even if technically responsive):
  - a vague "consider mtime when relevant" suggestion with no integration point in the spec;
  - any addition that lets mtime FILTER items out of the workspace (a "skip if older than N days" gate);
  - any addition that lets mtime monotonically lower the relevance tag (a "demote one level if older than N days" rule);
  - any addition that creates a recency-only mode and silently omits the rest of the territory;
  - any addition that conflates recency with idleness without naming both failure modes.

## Source Input

The user's raw request, preserved verbatim so downstream disciplines can audit transcription fidelity:

```text
in cognitive_harness/surfacing/references/surfacing.md we have a surfacing discipline

and it is essential part of MVL2+ loop in cognitive_harness/MVL2+


And i was wondering this. should surfacing discipline also explicitly use metadata (last datetime of edit) of files too? I think this can prevent errors caused by idle artifacts in the codebase, without metadata judgment, they will be considered as refined as recent files , which might not be the case. But just bc a file is old it doesnt mean it is idle as well...  but having this extra data piece is good.

and maybe surfacing discipline should have some section regarding this ?

and also this metadata is good for looking at recently edited files and what is the active task , but it shouldnt mean completely ignore rest of the files..

So, what kind of thing we can add to surfacing discipline to enable this power without limiting it or regressing it?
```

## Scope Check

Question covers goal.

The question, if answered with a complete addition specification, satisfies all four goal criteria (location + rule text + anti-regression-mechanism + non-regression argument).

Specific-vs-pattern check: the user names a specific addition target (the surfacing discipline spec). The inquiry addresses the specific target (no broader pattern about all disciplines using metadata is implied or requested).

## Layer Commitment

Primary cognitive layer: **process**.

The substantive question is what the surfacing discipline DOES during territory traversal — specifically, whether and how it incorporates file metadata as a signal. The structural form (which section, which schema field, which numbered step) is downstream of settling the process commitment: once we decide WHAT surfacing does with mtime, the structural location and the spec-text form can be derived.

Other-layer alternatives considered and out of scope for this run:

- **Meaning** — out of scope. The user is not questioning what surfacing IS as a cognitive operation; surfacing's identity (draw items from a bounded territory; tag each by relevance to inquiry purpose; produce a workspace + a thin artifact) is accepted. The question is about a refinement of behavior, not a redefinition.
- **Structural** — out of scope at primary. The "what section is this added in" question CAN'T be picked before the process change is committed. Once the process commitment is made, the structural placement follows. Picking structural-first risks defaulting to "add a section" when the actual right move could be "add a schema field" or "add a failure mode" or some combination.

If process leads to a multi-surface addition (e.g., a process step PLUS a failure mode PLUS a schema field), structural placement is reported as part of the deliverable, but the layer commitment for this inquiry stays on process.
