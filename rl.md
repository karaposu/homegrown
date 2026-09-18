
Improve RouteLister’s source-reference requirements so its saved outputs remain understandable and inspectable outside the conversation that produced them.

This request concerns source traceability within RouteLister’s existing responsibilities. Preserve its core discipline: enumerate goal-relevant concept-directions without selecting, executing, sequencing or maintaining dependencies between them.

## 1. Read the existing implementation

The currently installed files are:

/Users/nsstorm/.claude/skills/routelister/SKILL.md

/Users/nsstorm/.claude/skills/routelister/references/routelister.md

Read the complete discipline reference and entry point before proposing changes.

Locate the canonical RouteLister source files in this development project. Make the change there and follow the project’s established process for any generated or installed copies.

Pay particular attention to:
- The input contract and preservation of User Input.
- Source pointers and their reasons.
- Route records and their Guidance.
- The persistent concept-map index.
- Cross-run behavior.
- Quality checks.
- RouteLister’s exclusions and independence from surrounding processes.

## 2. Inspect the concrete example that exposed the issue

Read these generated outputs:

/Users/nsstorm/Desktop/projects/model_evaluation/devdocs/routelister/2026-09-17__model_evaluation_operating_summary/routelister.md

/Users/nsstorm/Desktop/projects/model_evaluation/devdocs/routelister/2026-09-17__model_evaluation_operating_summary/_route.md

They were produced by running RouteLister over:
- A task analysis.
- A capability-based decomposition.
- Relevant project documents.
- Instructions and corrections supplied in the surrounding conversation.

The received goal was to prepare a concise, accurate, linked summary for #ai-operations explaining the model-evaluation operating approach, starting workflow family, preparation and recording arrangements, and unfinished work.

The output contains 19 routes. It generally preserves the requested scope and RouteLister’s enumeration boundaries.

The issue appears in references such as:

“Conversation — the user’s recipient correction”

Other references point generally to the user’s orchestrator-context refinement or the task analysis in the conversation.

For example, MEOS-014 records the AI’s interpretation that the communication is a new channel-wide message for management and relevant colleagues, rather than a Bob-only message. However, its conversation reference does not identify the particular user message or preserve its original wording.

Be precise about this example: the saved User Input already names #ai-operations. That part of the requirement is recoverable from the artifact itself. The missing provenance concerns the earlier correction and the additional details attributed to it. Do not describe the entire route as unsupported or the whole map as unusable.

Use these outputs as evidence for the change. Do not modify the underlying model-evaluation project documents.

## 3. The general problem

RouteLister can consume information that is available during generation but is not reliably recoverable from its saved artifacts.

A label such as “Conversation,” “earlier clarification,” or “as discussed” can preserve the fact that the AI consulted something, without preserving a usable route back to the relevant source.

A later reader may be able to establish:

“The route map says the user instructed X.”

But may be unable to establish:

“What exactly did the user say, where did they say it, and how does that support X?”

The map can therefore preserve an interpretation while losing access to the evidence behind it.

This matters when:
- Another AI reads the map in a new session.
- A person returns after forgetting the conversation.
- An interpretation or scope assumption is questioned.
- A later correction needs to be reconciled with an earlier instruction.
- The saved map is used to understand why particular work was proposed.

This is a traceability problem. It does not by itself establish that the original interpretation was wrong.

## 4. Desired outcome

A reader who has the saved RouteLister outputs and their accessible sources should be able to recover the material basis of a route without having participated in the original conversation.

For a material source reference, the reader should be able to determine:
- What source is being referenced.
- Which relevant passage or source state is intended.
- What that source actually says.
- What the route uses it to establish.
- Which part is an interpretation rather than a direct source statement.

Strengthen the existing source-pointer mechanism to support this outcome. Prefer a small, coherent refinement over a separate provenance subsystem.

## 5. Required behavior

### A. Make references sufficiently specific

When a route materially relies on an instruction, correction, observation, definition or factual premise, reference the relevant source at a useful level of precision.

Depending on what is available, this could be:
- A message permalink or message identifier with an accessible location.
- A transcript file and identifiable passage.
- A document path or URL with a section or other sufficiently precise location.
- A reference to the relevant passage already preserved in User Input.

Do not require redundant source capture when the exact material is already recoverable from the output.

### B. Preserve relevant material when a usable pointer is unavailable

When the necessary source exists only in the active conversation or cannot be referenced reliably, preserve the actual relevant excerpt and enough surrounding context to interpret it.

Identify the speaker or source type where available.

Keep the capture proportionate. The requirement is to preserve the material needed to understand the route’s basis; it is not to copy the entire conversation.

Use the existing two-file output structure where practical. Do not introduce another required output file merely for this refinement.

### C. Explain what the source supports

A source reference should make its role clear.

For example:
- Establishes the intended audience.
- Records a scope restriction.
- Corrects an earlier interpretation.
- Defines the object being discussed.
- Supports a particular observation.

RouteLister already requires reasons for Guidance pointers. Integrate this requirement with that existing mechanism rather than duplicating it.

### D. Separate source statements from interpretations

Preserved quotations or excerpts must reflect the actual source text.

Keep the source’s statement distinguishable from the route author’s interpretation of it.

If only an assistant summary or paraphrase is available:
- Identify it as a summary or paraphrase.
- Do not present it as the original user statement.
- Make clear when the original passage has not been recovered.

A source proving that somebody said something does not automatically prove that the statement is factually correct.

### E. Handle changing sources proportionately

When the particular historical state of a source matters, preserve enough information to identify that state—for example, a relevant version, date or excerpt.

A pointer to a changing document may be sufficient for some uses and insufficient for others. Explain the criterion without requiring elaborate version tracking for every reference.

### F. Handle unavailable provenance honestly

Never invent:
- Message links or IDs.
- Timestamps.
- Transcript locations.
- Exact quotations.
- Claims that a source was inspected.

If the relevant original passage cannot be recovered, identify the provenance limitation and the material actually available.

Do not silently discard a useful route solely because its provenance is incomplete. Make the limitation visible and apply an appropriately scoped quality flag where warranted.

### G. Reuse references without losing their meaning

Several routes may rely on the same source. Allow them to reuse a recoverable reference instead of repeating the same excerpt throughout the map.

Keep source references intelligible across the route map and the concept index.

On subsequent runs, avoid leaving an index reference pointing to a source label that has been reassigned to different content. Choose a proportionate approach consistent with RouteLister’s existing persistence model.

Any source information retained in _route.md must remain attached to the relevant identity’s own manifestations. Preserve its prohibition on inter-concept dependency edges and process-control state.

## 6. Preserve RouteLister’s existing boundaries

This change must not introduce:
- Route selection or ranking that chooses a winner.
- Execution sequencing.
- An inter-concept dependency graph.
- Action readiness or execution tracking.
- Orchestration control-flow.
- A new interpretation of Priority, Confidence or Essentiality.

In particular, Confidence must retain its existing meaning of perceived formed-ness. Do not repurpose it as a source-verification score.

Preserve the existing route-type system, concept-identity unit, enumeration method and two-file persistence contract.

## 7. Validate the refinement

Check that the revised instructions handle these situations:

1. A route supported by a precisely identifiable document passage.
2. A route supported by the exact User Input already saved in the artifact.
3. A route relying on a user correction available only in the originating conversation.
4. Several routes relying on the same correction.
5. A historical claim whose source document may later change.
6. A route for which only an assistant paraphrase survives.
7. A later run updating the map while retaining meaningful source references.

The central acceptance question is:

“Can a later reader recover the relevant source material, understand what it supports, and distinguish it from the route author’s interpretation without remembering the original conversation?”

Also check that the change does not unnecessarily inflate simple routes or alter RouteLister’s core operation.

The supplied example can illustrate the problem, but do not invent missing original messages to make that historical output appear repaired.

## 8. Implement and report

Make the smallest coherent update to the canonical RouteLister files, including the relevant output guidance and quality checks.

Explain:
- What changed.
- Where the requirement lives.
- How a future output would differ from the supplied example.
- How you checked the behavior and preserved the discipline’s boundaries.
- Any limitation that remains when original source material is unavailable.

Keep the result project-agnostic. The model-evaluation example is the case that exposed the issue, not the scope of the rule.
Copy agent link
Report this
Terms of Service

