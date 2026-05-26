# Branch: Verify — Is "finding-paths" (in general) the same as /explore with different mapping configuration?

## Question

Is the **general cognitive operation of finding paths** — enumerating possible routes from a current state to potential next states — structurally the same as `/explore` with appropriate configuration (paradigm = Navigational + viewpoint = egocentric + purpose = routing + territory = reachable-from-state), independent of how the existing `/navigation` discipline is currently specified?

## Goal

A grounded verdict on the unification at the **conceptual level**:

(a) **What "finding-paths" minimally requires.** Identify the essential operations any finding-paths process must perform, independent of any specific discipline's spec accumulation. These operations are the test target — not the existing `/navigation` spec.

(b) **Whether the minimum operations reduce to `/explore` configuration.** Apply the meta-paradigm framework's 4 primary axes (what-preserved + encoding + operation + purpose) plus per-paradigm labeling extensions. If all minimum operations reduce → unification confirmed at the conceptual level. If any minimum operation is genuinely residual → unification rejected.

(c) **The relationship to the previous verification finding** (`devdocs/inquiries/2026-05-14_00-01__verify_navigation_is_configured_explore/finding.md`). That finding tested against the EXISTING `/navigation` spec and found residuals (adaptive guidance, REVISIT sub-actions, etc.). The user has now clarified that those residuals may be artifacts of the existing spec's accumulation, NOT essential to finding-paths in general. This inquiry tests the cleaner, conceptual-level question that the previous inquiry's framing missed.

(d) **What the verdict implies.** If finding-paths reduces, then the existing `/navigation` discipline's spec includes accumulations (adaptive guidance generation, REVISIT, freshness preflight, etc.) that are NOT essential to the cognitive operation; they are project-specific additions that could be moved elsewhere (runner-level, separate disciplines, optional add-ons). If finding-paths does not reduce, then there is something essential about the operation that /explore cannot accommodate even at minimum.

## Scope Check

Question covers goal. The question asks for the conceptual-level structural verification; the goal articulates the minimum-operations test, the reduction test, the relationship to the prior verification, and the verdict's implications.

**Specific-vs-pattern check:** The user explicitly redirected from "the existing /navigation spec" (a specific instance) to "navigation = finding-paths in general" (the pattern). The inquiry must address the PATTERN of finding-paths as a general cognitive operation, not the specific existing /navigation discipline. The existing spec is excluded as the reference; the general concept is the target.

**Anti-confirmation-bias check (carrying forward the lesson from 2026-05-13_12-45 and the previous verification 2026-05-14_00-01):** The strengthened diagnostic from `2026-05-13_12-45` applies to the new claim being tested. The assistant must NOT bias toward either YES or NO. The diagnostic's 3 questions (claim-truth at claimed level, level-coherence, external-citation survival) apply to the unification claim "finding-paths-in-general = /explore configured." Default-to-residuals-are-real under uncertainty. Burden of proof: the unification claim must positively demonstrate that each minimum-required operation reduces to configuration.

**Specific exclusion (per user instruction):** the existing `/navigation` discipline spec at `homegrown/navigation/references/navigation.md` is NOT the reference for what "finding-paths" minimally requires. Surface what finding-paths minimally requires from first principles (or from generally-recognized treatments of the concept in mathematics, computer science, cognitive science, etc.), then test reduction.

## Relationships

- **CORRECTS the framing of:** `devdocs/inquiries/2026-05-14_00-01__verify_navigation_is_configured_explore/finding.md`. The previous finding's verdict was CORRECT for the question it asked (was the existing /navigation spec equivalent to configured /explore? Answer: no, the spec has residuals). But the question it asked was the WRONG question — it tested spec-fidelity, not concept-equivalence. The user's intended question was the conceptual one. This inquiry corrects the FRAMING, not the prior verdict-content.
- **DEPENDS ON:** `devdocs/inquiries/2026-05-13_12-45__prior_mapping_understanding_was_wrong_redo/finding.md` — the strengthened CORRECTS-vs-REFINES diagnostic applies to the new claim.
- **DEPENDS ON:** `devdocs/inquiries/2026-05-13_12-15__what_is_mapping_meta_paradigms/finding.md` — the meta-paradigm framework's 4 primary axes are the configuration-knobs test.
- **RELATED:** `devdocs/inquiries/2026-05-12_11-40__navigation_factoring_question/finding.md` — that finding identified "adaptive guidance" as a unique contribution. Under THIS finding's question (finding-paths in general, not the existing spec), adaptive guidance is NOT part of minimum finding-paths; it is one of the existing /navigation spec's accumulations.
