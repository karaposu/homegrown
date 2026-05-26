---
status: active
model: claude-opus-4-7[1m]
effort: max
---

# Finding: Name for the Navigation Discipline

## Question

The Homegrown project has eleven thinking-disciplines installed as slash commands inside Claude Code or Codex. One of them is currently called `/navigation` — the discipline that, after a `/MVL+` inquiry completes, enumerates typed next directions in thinking-space (16-type taxonomy across content-directed / process-directed / context-directed categories), assesses their reachability and gating conditions, surfaces DIAGNOSE and REVISIT moves, and produces a navigation map (a structured artifact whose unit is a *route-card record* with fields for Direction, Goal, Type, Priority, Status, etc.). The discipline absorbed the previously-separate `/wayfinding` discipline.

The question this inquiry answers: **is `/navigation` a good name for this discipline, and if not, what is a better one?**

Goal: a named verdict (better name OR confirmation of current name) with reasoning concrete enough to either commit to a rename or close the question.

## Finding Summary

- **The recommended rename is `/navigate`** — a one-letter change from the current `/navigation`. It moves the discipline from the noun-form sibling cluster (which contains `/sense-making`, `/td-critique`, `/meta-loop`) into the verb-form sibling cluster (which contains `/innovate`, `/explore`, `/decompose`, `/comprehend`, `/reflect` — five of the eleven disciplines). It also pairs cleanly with the autonomy-ladder's role-noun "Navigator" via the standard English verb→agent-noun derivation (navigate → Navigator, the same pattern as explore → Explorer and innovate → Innovator). Two of the seven Innovation mechanisms converged on this candidate (Absence-Recognition's "the verb form is missing" + Domain-Transfer's Linnaean-verb-form principle). It survived Critique's anti-Status-Quo-Bias test as the only candidate whose multi-dimensional defense is structural rather than inertial.

- **The strongest alternative is `/directions`** — survives Critique with a caveat. It wins decisively on precision-to-essence (it names the discipline's object directly — the route-card record carries a "Direction" field) and project-vocabulary fit. It loses on cross-layer pairing with the autonomy-ladder role-noun "Navigator" because the verb form "to direct" pairs with "Director" rather than "Navigator." Pick this candidate if precision-to-essence outweighs cross-layer consistency.

- **The status quo `/navigation` survives only as a principled-keep verdict** — chosen specifically if the user weights zero switching cost above the verb/noun fix that `/navigate` delivers nearly for free. The structural defense (recognizability + zero cost + noun-cluster sibling fit) exists, but the bar for keeping is high given how cheap `/navigate` is.

- **The user-language candidate `/next-moves` was refined down** — it wins on alignment with the user's `cognitive_harness/next_question_to_ask.md` framing (which uses "next" repeatedly), but introduces "moves" as new project vocabulary (the project uses "directions"). The trade-off is real but loses to `/navigate` on cleaner project-vocab fit + cross-layer pairing.

- **The semantically novel `/orient` was refined down** — it captures "establish position + direction," which is what the navigation map provides. But "orient" semantically overlaps with `/sense-making` (which also orients in conceptual space), weakening sibling-discrimination. Pick this only if the semantic-richness gain outweighs the discrimination cost.

- **The first-step action is concrete and small**: one git rename, one SKILL.md field edit, one grep+sed pass across live source. Total estimated time ~15 minutes. The rename is fully reversible via git.

## Finding

### Why we asked

The discipline does enumeration without selection — the Selector role on the autonomy ladder is separate. The English word "navigation" defaults readers to the executive meaning (steering toward a destination), not the planning meaning (plotting routes). This produces a mild name-vs-essence mismatch: cold readers seeing `/navigation` may expect selection behavior, then discover the discipline only enumerates. The user's question implied this discomfort; the inquiry's first job was to test whether it's real and worth a rename.

It's real. But the answer is subtle because "good name" is multi-dimensional. The Sensemaking step crystallized seven dimensions a discipline name should satisfy: recognizability, precision-to-essence, project-vocabulary fit, user-language fit, role-distinctiveness, sibling-naming consistency, and switching cost. Different candidates dominate different dimensions. No single name wins on all seven.

### What "good name" actually means

The seven dimensions decompose as:

- **Precision-to-essence** — does the name evoke what the discipline does (enumerating typed next directions in thinking-space)?
- **Recognizability** — is it plain English a cold reader will understand without project-internal knowledge?
- **Project-vocabulary fit** — does it align with existing project terminology (the route-card "Direction" field; the autonomy-ladder "Navigator" role)?
- **User-language fit** — does it match the user's own vocabulary (the user's `cognitive_harness/next_question_to_ask.md` uses "next" repeatedly)?
- **Role-distinctiveness from siblings** — does it distinguish this discipline clearly from sibling disciplines (especially `/sense-making`, which works on conceptual content; the navigation discipline works on movement options)?
- **Sibling-naming consistency** — does it fit cleanly into one of the project's two sibling clusters (verb form: `/innovate`, `/explore`, `/decompose`, `/comprehend`, `/reflect`; or noun form: `/sense-making`, `/td-critique`, `/meta-loop`)?
- **Switching cost** — how much rename labor does the change require (folder rename, SKILL.md edits, cross-references)?

The seven dimensions are orthogonal in principle but partially correlate in practice. The verdict's job is to pick a candidate that scores well on the heaviest-weighted dimensions without failing critically on any.

### Why `/navigate` is recommended

The recommendation came from converging signals across Innovation and Critique.

Innovation's Absence-Recognition mechanism noticed an asymmetry: the project uses "navigate" as a VERB in cross-reference text (in the discipline reference's "Navigation absorbed the `/wayfinding` discipline" passages and related places), but the discipline's slash-command-and-folder name is `/navigation` (NOUN). The verb form is implicit in the project's working vocabulary but missing from the discipline's name. Closing that gap by adopting `/navigate` is a minimal, structural change.

Domain-Transfer from biology and software conventions (Linnaean naming after the action / RESTful naming patterns) reinforced the verb-form choice from a separate angle.

Critique then tested `/navigate` adversarially. The strongest prosecution was the "cosmetic rename" objection: `-tion → -e` is one letter; surely that's just decoration. The defense survived structurally on two grounds. First, the change moves the discipline from one sibling cluster to another — `/navigate` joins the verb cluster (`/innovate`, `/explore`, `/decompose`, `/comprehend`, `/reflect` — five of the eleven disciplines), shifting categorical placement, not just spelling. Second, the change fixes the cross-layer terminology pair: the autonomy-ladder names the *role* "Navigator"; the standard English derivation produces this from the verb form (navigate → Navigator, same shape as explore → Explorer, innovate → Innovator). The noun form "navigation" doesn't compose with "Navigator" via standard derivation. Adopting `/navigate` aligns the discipline-name and role-name at the verb→agent-noun derivation layer that English natively provides.

The mild prosecution that survived: "navigate" derives from the same English root as "navigation" — so the discipline still inherits the everyday-English default of "steering toward a destination." But the verb form recasts the operation as ACTIONABLE rather than as an abstract noun, which subtly bias-shifts toward the route-plotting reading (the broader dictionary meaning, which the discipline actually does) and away from the executive-steering reading. The mild semantic inheritance is not eliminated but is partially mitigated by the form change.

### Why `/directions` is the alternative

The strongest competing candidate is `/directions`. Four Innovation mechanisms converged on it (Domain-Transfer-REST + Domain-Transfer-Linnaean + Constraint-Manipulation-focused + Constraint-Manipulation-contrarian), plus the original Sensemaking ranking placed it first by the structural argument.

Its strengths are precision-to-essence (it names the discipline's object directly — the unit of the discipline's output is a route-card with a "Direction" field; the discipline produces a set of directions) and project-vocabulary fit (the word "Direction" is already in the spec, not introduced).

Its weakness is cross-layer pairing. The autonomy-ladder role is "Navigator." If the discipline is `/directions`, the natural agent-noun is "Director" — which doesn't fit the project's terminology. Picking `/directions` requires accepting that the discipline-name and the role-name will not derive from each other; they live at different layers and use different word families. This is acceptable (the project already has some cross-layer terminology asymmetries) but it's a real cost compared to `/navigate`'s clean pair.

Pick `/directions` if the precision win matters more than the cross-layer-pairing win.

### Why the status quo `/navigation` survives as a principled-keep verdict

The defense for keeping `/navigation` is structural in one specific way: zero switching cost plus high recognizability is a real combination. If the user explicitly does not want any rename, the defense is "the verb/noun shift in `/navigate` is real but small; the switching cost is real and non-zero; if the user's weighting puts switching cost above the verb/noun fix, keeping is the structurally-defensible choice."

But the bar is high. `/navigate` costs roughly fifteen minutes to ship. If switching cost is the primary objection, the cost has to be evaluated as "fifteen minutes of attention now" versus "ongoing mild friction from the verb/noun mismatch in every future use of the discipline" — and the ongoing cost likely exceeds the one-time cost over even short project lifespans.

The status quo verdict survives only if the user makes the cost-prioritization explicit and accepts the ongoing-friction trade.

### Why several plausible candidates were refined down

- `/next-moves` wins on user-language alignment (matches the "next" framing in `next_question_to_ask.md`) and recognizability (plain English). But it introduces "moves" as new project vocabulary; the project uses "directions" not "moves" in the route-card record. The new-vocab cost dominates the user-language win when project-vocabulary-consistency is weighted normally.

- `/next-directions` was the Combination-Generator hybrid (next + directions). It combines user-language and project-vocab in one name, but at five syllables it's verbose for a slash command; the sibling two-word names (`/sense-making`, `/td-critique`, `/meta-loop`) are three to four syllables. The verbosity cost makes it lose to either `/directions` (drop "next-") or `/next-moves` (drop "-directions") as singletons.

- `/direction-map` (Combination-Focused, output-artifact framing) was refined down in Innovation already — naming a discipline after its OUTPUT is unusual for the project's convention; reduces to `/directions`.

- `/concept-map` (Combination-Contrarian, using `docs/nav.md`'s framing "everything in navigation is concept") was refined down for sibling-discrimination loss: `/sense-making` also handles concepts; `/concept-map` would semantically overlap.

- `/orient` (Absence-Recognition-Redesign, semantic-richness framing) was refined down for the same sibling-discrimination concern. "To orient" means "to establish position and direction" — which is exactly what the navigation map does, semantically very rich. But the semantic territory overlaps with `/sense-making`, which also establishes position in conceptual space. The discrimination cost is real.

- `/navigator` (Lens-Shifting-Focused, agent-noun framing) was refined down for internal-consistency loss: the discipline name would be an agent noun, while siblings (the verb cluster: `/innovate`, etc.) name actions. This introduces a new inconsistency where there is none today.

### Where the verdict could re-open

The verdict is sensitive to two things. First, if the discipline's role evolves over time — for example, if a future inquiry decides to fold Selector behavior into Navigation, making the discipline both ENUMERATE and PICK — then the executive-meaning of "navigation" would become more accurate, and the original `/navigation` form could be re-defended. Second, if the user explicitly weights one of the seven naming dimensions much more heavily than the inquiry's default weighting assumed (for example, decisively prioritizing user-language fit), the verdict could shift to `/next-moves` or `/orient`.

The default weighting used here is the Sensemaking structural argument (fit-to-essence is primary per FP1, with project-vocab and sibling-naming consistency strong secondary). Under that weighting, `/navigate` wins.

## Next Actions

### MUST

- **What:** Rename the discipline from `/navigation` to `/navigate`.
  **Who:** User.
  **Gate:** Observable — `cognitive_harness/navigate/SKILL.md` exists with `name: navigate` in its frontmatter; `cognitive_harness/navigation/` no longer exists; the slash command `/navigate` works in a Claude Code session.
  **Why:** Fixes the verb/noun cluster placement (joins `/innovate`, `/explore`, `/decompose`, `/comprehend`, `/reflect` in the verb cluster) and pairs cleanly with the autonomy-ladder Navigator role-noun via verb→agent-noun derivation. Minimal switching cost; structural improvement.

  **Concrete first step (a single shell session):**
  ```bash
  # Step 1: rename the folder, preserving git history
  git mv cognitive_harness/navigation cognitive_harness/navigate

  # Step 2: update the SKILL.md frontmatter name field
  perl -i -pe 's{^name: navigation$}{name: navigate}m' cognitive_harness/navigate/SKILL.md

  # Step 3: update cross-references in live source (excluding devdocs and archived_skills per established pattern)
  grep -rl "cognitive_harness/navigation/\|/navigation\b" \
      --include="*.md" --include="*.sh" --include="*.json" 2>/dev/null \
    | grep -v "^archived_skills/" \
    | grep -v "^devdocs/" \
    | xargs perl -i -pe 's{cognitive_harness/navigation/}{cognitive_harness/navigate/}g; s{/navigation\b}{/navigate}g'

  # Step 4: verify the rename landed
  ls cognitive_harness/navigate/SKILL.md && grep -c "^name: navigate$" cognitive_harness/navigate/SKILL.md
  ```

  **Verification check:** the new `/navigate` slash command should be discoverable in Claude Code's command listing on next session start (or after a reload).

### COULD

- **What:** Update the autonomy-ladder documentation (`docs/autonomy_ladder.md`) and other places where the discipline is cross-referenced by its old name, so the cross-layer pair (verb `navigate` → agent-noun `Navigator`) is visibly aligned.
  **Who:** User (small documentation pass).
  **Gate:** Observable — cross-references to the discipline use `/navigate` consistently.
  **Why:** Reinforces the cross-layer terminology pairing the rename enables; small follow-on after the MUST action.

- **What:** Update the auto-memory file `MEMORY.md` (if the user references the discipline by name in their note-to-self or other auto-memory entries).
  **Who:** Future Claude session.
  **Gate:** Condition-bound — when a future session next loads the auto-memory.
  **Why:** Keeps cross-session memory accurate. Not load-bearing for this inquiry.

### DEFERRED

- **What:** Re-evaluate the verdict if the discipline's role evolves (e.g., if future work folds Selector behavior into Navigation, making the discipline both ENUMERATE and PICK).
  **Gate:** Condition-bound — when a future inquiry surfaces a proposal to expand the discipline's scope.
  **Why (if revived):** The executive-meaning of "navigation" (steering toward a destination) would become structurally accurate if the discipline gains selection behavior; the original `/navigation` form could be re-defended at that point.

- **What:** Re-evaluate the verdict if the user explicitly weights one of the seven naming dimensions much more heavily than this inquiry's default weighting assumed.
  **Gate:** Condition-bound — observable if the user's stated priorities shift (for example, an explicit preference for matching user-language above project-vocab consistency).
  **Why (if revived):** Different weightings produce different verdicts; the inquiry's structural-default weighting may not always be the right one.

## Reasoning

### Why a one-letter rename wins over more elaborate alternatives

The natural prosecution against `/navigate` is "this is cosmetic; you're moving one letter and calling it structural." The defense holds because the change crosses a categorical boundary — the discipline moves from the noun-form sibling cluster to the verb-form sibling cluster — and because it enables a cross-layer pairing (the discipline name and the autonomy-ladder role name now derive from each other via standard English verb→agent-noun derivation, instead of sitting at different word-families).

Bigger renames (`/directions`, `/orient`, `/next-moves`) have stronger single-dimension wins (precision, semantic richness, user-language respectively) but each pays a real cost on at least one other dimension (`/directions` loses on cross-layer pair; `/orient` loses on sibling discrimination; `/next-moves` loses on project-vocab consistency). `/navigate` is the multi-dimensional winner — it wins on the dimensions it covers (sibling cluster + cross-layer pair + switching cost) without paying a critical cost on any other dimension.

### Why the historical pattern of breakthroughs in this project doesn't drive the verdict

Past project breakthroughs have come from conceptual reframes produced by inquiry chains. The naming question is a Layer-MEANING question, but the candidates that survived are all small-scope renames or principled status-quo defenses — none of them is a "reframe" in the breakthrough sense. The inquiry's verdict is a refinement, not a reframe; it cleans up cross-layer terminology rather than introducing new conceptual territory.

This is fine. Not every inquiry has to produce a breakthrough; the breakthrough framing applies to questions like "what's the next load-bearing development for the project's end-goal" (today's earlier inquiry) rather than to focused-fix questions like this one.

### Why the Self-Reference Blindness risk was contained

This inquiry used `/sense-making` and `/td-critique` to evaluate a sibling discipline's name. The disciplines share conceptual framework. External grounding applied: (i) the linguistic argument (English dictionary semantics; the executive vs. planning meanings of "navigation") is external to the project; (ii) the cross-layer derivation rule (verb→agent-noun pairing in English) is external to the project; (iii) the user's `cognitive_harness/next_question_to_ask.md` is an independent prior framing; (iv) multi-mechanism convergence in Innovation (two mechanisms converged on `/navigate` independently). The verdict survives the self-reference test.

## Open Questions

### Monitoring

- After the rename ships, watch the first three uses of `/navigate` in real `/MVL+` runs: does the verb-form name feel cleaner in invocation than the noun-form, or does the muscle-memory friction from typing the old name dominate for several sessions? If the muscle-memory friction is high for weeks, the switching cost was underestimated.

- Watch whether the cross-layer pair (the discipline `/navigate` plus the autonomy-ladder role-noun "Navigator") gets used consistently in new cross-references over the next month. If new cross-references continue to drift back to mixed forms, the rename didn't actually fix the inconsistency it claimed to fix, and additional discipline (template updates, etc.) is needed.

### Blocked

- This verdict assumes the discipline's role doesn't change in the near term. If a future inquiry proposes folding Selector behavior into Navigation (making the discipline both ENUMERATE and PICK), the verdict re-opens because the executive-meaning of "navigate" would become accurate rather than mismatched.

### Research Frontiers

- The deeper question of whether the project's discipline-naming convention SHOULD prefer the verb form or the noun form (mixed today: five verbs, three nouns, two acronyms, one compound noun) is out of scope for this inquiry but worth a future inquiry. The mixed pattern is currently tolerated; whether it should be standardized one way is a meta-naming question.

- The cross-layer terminology question — whether discipline names and autonomy-ladder role-names should systematically derive from each other (this verdict assumes "yes" for `/navigate` ↔ Navigator) — is also a future inquiry. The current project doesn't formally commit to this pattern; this verdict treats it as a soft preference rather than a hard rule.

### Refinement Triggers

- If the next three `/navigate` invocations produce muscle-memory friction that the user reports as significant, the rename re-opens for "should we have kept the noun form despite the verb-cluster argument?"

- If a future inquiry surfaces a sibling-discipline rename in the same direction (any noun-form discipline shifting to verb-form), `/navigate` becomes part of a broader pattern; the verdict may need to be re-articulated as part of a multi-discipline rename rather than a one-off.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
what is a good name for anvigation
```

(The input contained a typo — "anvigation" for "navigation" — which the inquiry interpreted as a question about the existing `/navigation` discipline's name.)

</details>
