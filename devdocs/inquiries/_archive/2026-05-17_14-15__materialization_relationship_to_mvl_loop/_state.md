# State: materialization_relationship_to_mvl_loop

## Flow-type
extended

## Pipeline
E → S → D → I → C (always)

## Progress
- [x] Exploration
- [x] Sensemaking
- [x] Decomposition
- [x] Innovation
- [x] Critique

## Iteration
1

## Status
COMPLETE

## Next Discipline
—

## Relationships

- RELATED: devdocs/inquiries/2026-05-16_09-04__biggest_next_gain_toward_breakthrough/finding.md — the biggest-next-gain finding's W4-deferred verdict mentions "Wire materialization protocol as default post-CONCLUDE invocation in /MVL+" as a candidate that was deferred until W3 ships and the inquiry→change gap is felt. THIS inquiry tests whether "wire as default post-CONCLUDE" is even the right framing.

## History
- 2026-05-17: Created. Question: chained-step vs separate-triggerable-process for materialization-vs-/MVL+ architecture.
- 2026-05-17: Exploration complete. Hybrid mode (artifact + possibility); signal-first. Decisive empirical finding: the existing `cognitive_harness/protocols/artifact_materialization.md` is architecturally separate-triggerable BY DESIGN — its Universal Input Contract enumerates 8 source_authority values (`user_request | finding | branch | navigation | outcome_review | loop_diagnose | trace_followup | protocol_need | other`); its non-goals explicitly state it "does not replace MVL+"; its preamble states "Materialization is different from thinking-loop conclusion. MVL/MVL+ can decide that an artifact should exist. ARTIFACT_MATERIALIZATION decides how that decision is safely converted into files." 6 architectural options surveyed: O1 chained / O2 separate triggerable (user's hypothesis + artifact's own framing) / O3 suggestion-only / O4 trigger artifact / O5 conditional chain / O6 direct-invocation-only. README2.md's "wire as default post-finding step in /MVL+" framing in TENSION with the artifact's own framing; needs reconciliation. CONCLUDE today has no materialization-handoff language; project effectively runs O2 already. 5/5 signal types fired. Convergence reached. Verdict: PROCEED.
- 2026-05-17: Sensemaking complete. SV1→SV6 produced. Architectural verdict CONFIRMED: O2 family (separate-triggerable, peer-protocols). O1 (chained) and O5 (conditional chain) KILLED on artifact-compatibility grounds (would dismantle 8-source Universal Input Contract). Within O2 family, three viable verdicts on boundary-UX sub-question: W1 O3 suggestion line at CONCLUDE end (DEFAULT — small effort, captures user's "trigger" framing); W2 O4 trigger artifact written by CONCLUDE alongside finding.md (RICHER — medium effort, best long-term, generalizes across 8 sources); W3 status quo + README reframe only (MINIMUM — under-honors user framing). README's "wire as default post-finding step" REFRAMED to mean "surface materialization visibly from /MVL+," not "auto-chain." 3 ambiguities resolved. Saturation reached. Failure modes: Status Quo Bias tested + survived; Self-Reference Blindness flagged + grounded. Structural check passed (manual).
- 2026-05-17: Decomposition complete. 5 elements → 3 clusters: C1 Per-verdict profiles (Q1 W1, Q2 W2, Q3 W3 — low pairwise coupling), C2 Cross-cutting README reconciliation (Q4 — independent), C3 Refinement diff (Q5 — consumes chosen verdict + Q4). 5-piece question tree; 2-phase dependency (Phase 1 parallel: Q1–Q4 / Phase 2: Q5). 4 shared assumptions (SA1–SA4). Self-evaluation 7/7 PASS. Structural check passed (manual).
- 2026-05-17: Innovation complete. Coverage: FULL (7/7 mechanisms). 11 candidates surveyed (W1, W2, W3, N1 hybrid, N2 type-conditional, N3 relationships-embedded, N4 read-finding-directly, N5 human-gated-only, N6 completion-marker, N7 materialize-frontmatter-field, N8 materialization-queue). Convergence: 2 mech → W1; 3 mech → W2. Dispositions: 7 ACTIONABLE (W1, W2, W3, N1, N3, N2-refinement, N6-modifier); 3 REFINE (N4 out-of-scope, N5 incompatible-with-frame, N7 defer); 1 RESEARCH FRONTIER (N8 queue). Emergent assemblies: X = W1+N6+README; Y = W2+N6+README (long-term-best); Z = N1+N6+README (maximum). Failure modes: Survival Bias tested + resolved on multi-mech grounds. Structural check passed (manual).
- 2026-05-17: Critique complete. 8 dimensions (incl. project-specific D7 anti-ceremony). 14 candidates evaluated. Verdicts: 1 SURVIVE-clean (Assembly X = W1 + N6 + README reframe), 2 SURVIVE (W1, N6-as-COULD), 6 REFINE-deferred (W2 / W3 / N1 / N2 / N3 / N7 / Assemblies Y/Z), 1 KILL (N5 frame-incompatible), 1 OUT-OF-SCOPE (N4 SA4), 1 RESEARCH FRONTIER (N8 queue). 3-tier ranked: T1 W3 minimum / T2 Assembly X DEFAULT / T3 Assembly Y long-term. All 4 convergence criteria met. Failure-mode check: 6/7 not observed; SRC flagged + grounded. Signal: TERMINATE.
- 2026-05-17: CONCLUDE complete. finding.md written; 5 discipline outputs archived to docarchive/. Status COMPLETE. One-sentence answer: materialization is a separate peer-protocol that /MVL+ can trigger (user's hypothesis empirically confirmed by the artifact's own 8-source Universal Input Contract); recommended action = Assembly X (suggestion line at CONCLUDE end + materialization-completion frontmatter marker + README reframe); trigger artifact (richer) and materialization queue (long-term) deferred with explicit revival triggers; the biggest-next-gain finding's W4-deferred materialization-wiring item retains its revival trigger but its content updates from "chained step" to Assembly X's "surfaced visibly" form.
