# Branch: A/B-test inquiry protocol

## Question

Should homegrown have a protocol for creating A/B-test inquiries — a structured way to run the same input through both the current discipline set and an archived (snapshotted) discipline set, with both runs stored under a shared parent folder in `devdocs/inquiries/` for direct comparison — and if so, what should its shape, failure modes, and relationship to existing protocols be?

## Goal

A clear yes/no on whether to introduce the protocol, plus (if yes) the protocol's structural shape: what folder/file layout the parent + two child runs use, how the two runs are kicked off (conversation fork mechanism), how comparison is captured as a durable artifact, what failure modes the protocol must guard against, and how it relates to the existing branch_inquiry / conclude / outcome_review / loop_diagnose / artifact_materialization protocols (which it should compose with vs. which it should specialize). Good answer is one the user can either implement directly into homegrown/protocols/ or knowingly defer with revival triggers.

## Scope Check

Question covers goal. Both ask for the same four things: worth-having verdict, protocol shape, failure modes, relationship to existing protocols.

Specific-vs-pattern check: the user's prompt motivates the question via the bf4ae1f snapshot they just produced, but explicitly frames the protocol as a general pattern ("a previously snapshotted version (e.g., /bf4ae1f-MVL+)" — the example marker shows the bf4ae1f case is illustrative, not the scope). This inquiry addresses the BROADER PATTERN: any A/B test of current homegrown vs any archived snapshot, not a one-off bf4ae1f mechanism.

## Source Input

The user's exploratory message in conversation: proposed mechanism is "user creates an inquiry input, the conversation forks, original session runs current homegrown, forked session runs the snapshotted version, both runs land under one parent folder". Motivation explicitly stated: "self-maintenance and regression testing of homegrown".
