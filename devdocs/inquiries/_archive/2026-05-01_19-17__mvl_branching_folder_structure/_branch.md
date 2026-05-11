# Branch: MVL Branching Folder Structure

## Question

How should MVL and MVL+ support real branch inquiries from interesting findings so child questions can be stored, resumed, and reviewed as branches instead of only as flat sibling folders under `devdocs/inquiries/`?

## Goal

A good answer should define the minimal manual branch mode that can work now, explain what should stay out of the first version, and preserve compatibility with existing flat inquiries, `RESUME`, `CONCLUDE`, `loop_diagnose`, and future branch automation.

## Scope Check

The question covers the goal. The user is asking for an operational folder and invocation design, not a full implementation patch yet.

## Context

- Current MVL/MVL+ runs create inquiry folders directly under `devdocs/inquiries/`.
- Interesting findings often spawn follow-up questions that semantically belong under the parent inquiry.
- Existing `RESUME` and `CONCLUDE` behavior is path-oriented, so nested inquiry folders should be possible if the path is explicit.
- Prior protocol audits already identified `BRANCH` and `MERGE` as missing long-term protocols.
- Meta-loop vocabulary already mentions branch and multi-head traversal, but there is no concrete inquiry-folder contract.
