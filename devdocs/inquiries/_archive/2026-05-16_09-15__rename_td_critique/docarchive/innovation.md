# Innovation: Rename td-critique

## User Input

Inquiry `_branch.md`. Input: decomposition.md (6 pieces with verification criteria + interface map + dependency order) + sensemaking.md (3 commits + 5 finalists) + exploration.md. Mode: elaboration. Apply Combination (P4 packet), Absence-Recognition (P2 missed candidates), Domain-Transfer (P2 per-domain), Lens Shifting (P4 conditional recommendation), Constraint Manipulation (P3 5-word explainability), Inversion (P2 opposite-name test).

---

## Seed and Direction

**Seed:** Sensemaking ranked finalists and committed operation-fit as dominant criterion. Decomposition partitioned the work. Innovation produces concrete per-piece content the user can read directly.

**Direction (intuition):** Adjudicate is the recommended primary, but the recommendation packet must give the user the CONDITIONS under which each finalist is the right choice — not just a ranking. The user adjudicates; the inquiry surfaces the trade-off shape.

---

## P1 — Name Criteria Specification

The 6 dimensions a winning name must score on, with weights:

| # | Dimension | Weight | Success criterion | Source |
|---|---|---|---|---|
| **C1** | **Operation-fit** | **CRITICAL** | Name evokes adversarial-evaluation + verdict-rendering + candidate-set reduction (the discipline's actual mechanism, per the canonical reference) | Sensemaking commit 1; exploration's identity section |
| **C2** | Bare-verb form | HIGH | Name is a single bare verb in present-tense (matching `explore`, `innovate`, `decompose` — the modal cannon pattern); compound forms require sense-making-level justification | Sensemaking commit 2; exploration sibling-pattern map |
| **C3** | Baggage-avoidance | HIGH | Name does NOT carry the 5 readings the spec explicitly rejects (nitpicking / judgment / validation / reviewing / pessimism) | The reference's "Critique is NOT" section (5 items) |
| **C4** | Intelligibility for new users | MEDIUM | A new user can guess the discipline's purpose within 5 words of operation-context (e.g., "X competing candidates with verdicts") | Sensemaking U1; user-language alignment |
| **C5** | No-collision with spec-internal terms | HIGH | Name does NOT reuse `Evaluation` (the spec's secondary operation), `Verdict` (the output type), or any other already-claimed term | Sensemaking R1; exploration Dimension A tensions |
| **C6** | Migration cost | LOW | Project-wide rename effort is bounded; ~20 active files plus folder + registry; can be done in ~30 minutes | Sensemaking F1; exploration footprint count |

Note: weights inverted-rank (CRITICAL > HIGH > MEDIUM > LOW); a finalist failing on a CRITICAL dimension is disqualified regardless of other scores. A finalist scoring strongly on HIGH/MEDIUM but failing on LOW is still viable (LOW dimensions are tiebreakers).

---

## P2 — Finalist Short-List

### Sensemaking-committed finalists

1. **adjudicate** — primary candidate; legal etymology.
2. **critique** (drop prefix only) — secondary; status-quo fallback.
3. **vet** — tertiary; fitness-testing.
4. **assess** — tertiary; neutral evaluation.
5. **sift** — tertiary; contraction metaphor.

### Innovation-emergent additions

Applied Domain-Transfer across legal / biology / editorial / quality-assurance / hiring / philosophy / tournament-elimination vocabularies for missed candidates:

| Candidate | Source domain | Why surfaced | Verdict on inclusion |
|---|---|---|---|
| **weigh** | Legal (scales of justice) + everyday evaluation | Captures multi-dimensional weighing on the fitness landscape | **INCLUDED as 6th finalist** |
| arbitrate | Legal | Resolves disputes between parties — but the discipline doesn't have "two parties"; it has candidates being evaluated. Doesn't fit. | Not added |
| examine | Philosophy (Socratic) | Test-and-question structure | Considered but less direct than adjudicate; partial overlap |
| select | Evolutionary biology | Survival-by-fitness | Captures one aspect; not full operation. Sensemaking already covered as tertiary-disqualified |
| screen | QA / hiring | Initial filter | Implies pre-selection; the discipline does more |
| qualify | QA | Pass-fail | Misses verdict-spread (SURVIVE/REFINE/KILL is not pass-fail) |
| shortlist | Hiring | Ranks-from-set | Captures ranking but misses adversarial structure |
| curate | Editorial | Selective inclusion | Editorial connotation; less adversarial |
| eliminate / bracket | Tournament | Iterative reduction | Captures contraction; misses verdict reasoning |

### Inversion test: what would be the OPPOSITE name?

A name that does NOT capture the discipline's operation:

- **approve** — single-direction positive; ignores adversarial structure
- **accept** — same problem
- **praise** — extreme positive; opposite of evaluation
- **endorse** — affirmative-only

Inversion result: a name that just affirms (approve / accept / endorse / praise) is clearly wrong because it misses contraction-and-rejection. This confirms the right name should evoke RANKING / TESTING / SELECTING / JUDGING — which adjudicate, vet, weigh, sift all do (in different proportions). Critique scores here too but with baggage.

### Final finalist short-list (6 candidates)

1. **adjudicate**
2. **vet**
3. **weigh** (Innovation-emergent)
4. **critique** (drop prefix only)
5. **assess**
6. **sift**

### Disqualifications (and reasons)

| Disqualified | Reason |
|---|---|
| Anything `td-X` prefixed | No documented rationale; outlier in sibling pattern (criterion C2) |
| `evaluate` | Collides with spec's "Evaluation" secondary-operation name (criterion C5) |
| `validate`, `verify` | Spec NOT-list rejects ("Critique is NOT validation") (criterion C3) |
| `review` | Spec NOT-list rejects ("Critique is NOT reviewing") (criterion C3) |
| `judge` (verb) | Personal-judgment baggage; spec rejects ("Critique is NOT judgment") (criterion C3) |
| `nitpick`, `criticize` | Spec NOT-list rejects (criterion C3) |
| `approve`, `accept`, `praise`, `endorse` | Single-direction positive; miss adversarial structure entirely (criterion C1) |
| Hyphenated compounds (e.g., `adversarial-evaluation`, `fitness-mapping`) | Lack sense-making-level justification (criterion C2) |
| Pure-noun forms (`verdict`, `evaluation`) | Wrong shape for cannon discipline pattern (criterion C2) + collision (criterion C5) |
| `select` | Captures one aspect; partial-fit on C1 — kept in tertiary if sift/assess fail |

---

## P3 — Per-Finalist Evaluation

Score matrix. Each cell: PASS / PARTIAL / FAIL with one-line reason.

| Finalist | C1 operation-fit (CRIT) | C2 bare-verb (HIGH) | C3 baggage (HIGH) | C4 intelligibility (MED) | C5 no-collision (HIGH) | C6 migration (LOW) |
|---|---|---|---|---|---|---|
| **adjudicate** | **PASS** — legal etymology (prosecution + defense + verdict) matches spec verbatim | PASS — bare verb, present | PASS — no NOT-list collision | PARTIAL — formal/legal connotation; operation-context disambiguates | PASS — not reused in spec | MED — ~20 files updated |
| **vet** | PARTIAL — captures fitness-testing; misses verdict-rendering at name level | PASS | PASS | PASS — "vet candidates" common phrasing | PASS | MED — same |
| **weigh** | PARTIAL — captures multi-dimensional weighing; misses explicit verdict | PASS | PASS | PASS — "weigh the options" universal | PASS | MED — same |
| **critique** (no prefix) | PARTIAL — captures evaluation; everyday-English baggage persists | PASS | **FAIL** — the spec's 5 NOT-list items remain in force; the word does negative work | PARTIAL — widely understood in the negative everyday sense | PASS | LOW — minimal (only prefix drops; most refs already say `critique`) |
| **assess** | PARTIAL — captures evaluation neutrally; misses adversarial + verdict | PASS | PASS — neutral | PASS — broad | PASS | MED — same |
| **sift** | PARTIAL — captures contraction-force; misses verdict + adversarial structure | PASS | PASS | PARTIAL — agricultural/sieve metaphor; less direct for "evaluation" | PASS | MED — same |

### Per-finalist reasoning

**adjudicate.** Strongest operation-fit. The legal etymology — judge weighing arguments, prosecution presenting case, defense responding, verdict rendered — IS the discipline's mechanism. Calling it adjudication isn't poetic license; the spec's adversarial-evaluation structure is literally legal-procedure-shaped. The one PARTIAL is on intelligibility (formal/legal connotation), but operation-context disambiguates ("adjudicate the candidates" reads cleanly).

- *Prosecution:* "Adjudicate is too formal for a daily discipline name."
- *Defense:* "The discipline produces formal verdicts (SURVIVE / REFINE / KILL) with structured reasoning. Formality matches operation."

**vet.** Short, active, common. Captures fitness-testing aspect well. Loses to adjudicate on operation-fit precision — "vet" doesn't directly evoke verdict-rendering or the adversarial structure. The user gets less identity-information from the name.

- *Prosecution:* "Vet is associated with background-checks or security clearance; the discipline does more than that."
- *Defense:* "Common English usage extends vet to general fitness-testing; precision can live in the spec body."

**weigh.** Innovation-emergent. The scales-of-justice metaphor captures multi-dimensional weighing on the fitness landscape. Less specific than adjudicate but evocative.

- *Prosecution:* "Weighing is a sub-step of adjudication, not the whole operation."
- *Defense:* "The fitness-landscape construction is multi-dimensional weighing; weigh names what the discipline literally does on the dimension axes."

**critique** (drop prefix). Status-quo-preserving. Familiar; lowest migration cost. Fails on baggage-avoidance — the spec's 5 NOT-list items remain in force regardless of the prefix. The spec has to spend prose distancing from connotations the name itself imports.

- *Prosecution:* "The spec spends 5 NOT-list bullets distancing from this word; that's permanent evidence the word doesn't fit."
- *Defense:* "Familiarity has real value; the NOT-list is a reasonable boundary mechanism that other names also need."

**assess.** Neutral; broad. Loses on operation-fit specificity. The discipline does MORE than assess — it adjudicates. "Assess" undersells.

- *Prosecution:* "Every step in the loop assesses something; the discipline name should be more specific to the contraction-and-verdict operation."
- *Defense:* "Plain language; broad applicability; no negative connotations."

**sift.** Captures the contraction-force aspect (the spec's own metaphor). Misses verdict-rendering. The agricultural/sieve image is intuitive but doesn't evoke adjudication.

- *Prosecution:* "Sift implies passive filtering, not active adjudication."
- *Defense:* "Sift evokes the discipline's role as a filter between innovation's expansion and the next step."

---

## P4 — Recommendation Packet (User-Facing)

### Top-3 ranked

**Rank 1 — `adjudicate` (recommended primary)**

- **Operation-fit:** Highest. Legal etymology matches the spec's adversarial structure (prosecution + defense + collision + verdict) verbatim.
- **Right pick when:** Operation-fit is the dominant criterion; the user wants the name to encode the discipline's mechanism precisely; comfort with the formal/legal connotation as identity alignment.
- **Tradeoff vs alternatives:** More formal than `vet`; more accurate than `critique`; more specific than `weigh`.
- **Migration impact:** ~20 active files; ~30 min effort.

**Rank 2 — `vet` (alt-1: daily-language pick)**

- **Operation-fit:** Partial — captures fitness-testing; misses verdict-rendering explicitly at the name level.
- **Right pick when:** The user prefers short, daily-language naming and is willing to let the spec body carry the verdict-rendering nuance; less formal feel than adjudicate.
- **Tradeoff vs alternatives:** Less precise on operation than adjudicate; cleaner-feeling than critique; more common in daily speech.
- **Migration impact:** Same as adjudicate (~20 files).

**Rank 3 — `critique` (alt-2: minimal-migration pick)**

- **Operation-fit:** Partial — current word with baggage; the spec's 5 NOT-list items remain in force.
- **Right pick when:** Migration cost is the dominant criterion AND the user accepts the spec's existing distancing work as a necessary tax.
- **Tradeoff vs alternatives:** Lowest migration (just prefix drops; "critique" string already present in many refs); but the baggage persists.
- **Migration impact:** Lowest. Just remove `td-` from folder name + registry + cross-spec references. Many docs/inquiries that already say "critique" don't need updating beyond the prefix-bearing instances.

### Honorable mentions (not in top-3 but valid)

- **`weigh`** — multi-dimensional weighing capture; emerged via Innovation. Worth considering if the user wants something more evocative than `vet` but less formal than `adjudicate`.
- **`assess`** / **`sift`** — partial-fit on operation; lower priority than the top-3.

### Explicit user-decision question

**Which name do you commit to?**

- [ ] **`adjudicate`** (primary — best operation-fit; accept formal connotation)
- [ ] **`vet`** (alt-1 — daily-language; accept partial operation-fit)
- [ ] **`critique`** (alt-2 — minimal migration; accept the spec's NOT-list baggage as permanent tax)
- [ ] **`weigh`** (honorable mention)
- [ ] Other (please specify; we'll evaluate against the same 6 criteria)

Until you commit, the inquiry produces the ranked list above; the migration plan (P5) is parameterized on your choice via the `<new>` placeholder.

---

## P5 — Migration Plan

### Tiered file list

**Tier 1 — folder + registry rename (MUST):**
```
cognitive_harness/td-critique/                  → cognitive_harness/<new>/
cognitive_harness/td-critique/references/td-critique.md  → cognitive_harness/<new>/references/<new>.md
~/.claude/skills/td-critique/                   → ~/.claude/skills/<new>/
~/.claude/skills/td-critique/references/td-critique.md   → ~/.claude/skills/<new>/references/<new>.md  (if exists; may differ; verify)
```

**Tier 2 — runtime spec references (MUST; cannon loop integrity depends on these):**
- `cognitive_harness/MVL/SKILL.md` — references `/td-critique` in the pipeline
- `cognitive_harness/MVL+/SKILL.md` — references `/td-critique` in the pipeline
- `cognitive_harness/sense-making/SKILL.md` — "before /td-critique" cross-reference
- `cognitive_harness/innovate/SKILL.md` — "before /td-critique" cross-reference
- `cognitive_harness/decompose/SKILL.md` — "before /td-critique" cross-reference
- `cognitive_harness/<new>/SKILL.md` — internal references to the discipline name + reference path
- `cognitive_harness/<new>/references/<new>.md` — internal references

**Tier 3 — docs/ theory references (SHOULD; for coherence):**
- `docs/stability_preservation_via_git.md`
- `docs/thinking_space_dynamics.md`
- `docs/intuit.md`
- `docs/discipline_taxonomy.md`
- `docs/discipline_rule_placement.md`
- `docs/self_improvement_rate.md`
- `docs/step_refinement.md`
- `docs/loop_desing_ideas/loop_design_1.md`
- `docs/loop_desing_ideas/loop_design_3.md`
- `docs/runtime_environment/folder_based.md`
- `docs/what_is_meaningful_traversal.md`

**Tier 4 — frozen inquiry artifacts (DO NOT TOUCH; historical record):**
- `devdocs/inquiries/*/` — preserves the audit trail showing the old name was in use at the time. Renaming these blurs the historical record.

### Procedure

Assuming the user picks `<new>` (e.g., `adjudicate`):

```bash
# Step 0: commit current state for clean rollback path
git add -A && git commit -m "pre-rename: td-critique"

# Step 1: folder rename in cognitive_harness/
NEW=adjudicate   # adjust per user choice
mv cognitive_harness/td-critique cognitive_harness/$NEW
mv cognitive_harness/$NEW/references/td-critique.md cognitive_harness/$NEW/references/$NEW.md

# Step 2: registry rename (~/.claude/skills/)
mv ~/.claude/skills/td-critique ~/.claude/skills/$NEW
# Verify reference file exists in registry copy:
if [ -f ~/.claude/skills/$NEW/references/td-critique.md ]; then
  mv ~/.claude/skills/$NEW/references/td-critique.md ~/.claude/skills/$NEW/references/$NEW.md
fi

# Step 3: update Tier 2 (runtime specs)
find cognitive_harness/MVL cognitive_harness/MVL+ cognitive_harness/sense-making cognitive_harness/innovate cognitive_harness/decompose cognitive_harness/$NEW -type f -name "*.md" \
  -exec sed -i '' "s|td-critique|$NEW|g" {} \;

# Step 4: update Tier 3 (docs)
find docs -type f -name "*.md" \
  -exec sed -i '' "s|td-critique|$NEW|g" {} \;

# Step 5: also update the frontmatter `name:` field if not caught by string replace
# (the SKILL.md frontmatter says `name: td-critique` → should be `name: <new>`)
# Verify with: grep -r "^name:" cognitive_harness/$NEW ~/.claude/skills/$NEW

# Step 6: commit
git add -A && git commit -m "rename: td-critique → $NEW"
```

### Reversibility

- Pre-rename commit (Step 0) is the rollback point: `git reset --hard <pre-rename-commit>` (caution: discards anything uncommitted).
- Or undo manually: reverse the mv operations + run the sed in reverse.
- For the runtime registry (outside git): the folder rename is reversible via `mv ~/.claude/skills/$NEW ~/.claude/skills/td-critique`.

### Notes on `sed -i ''` (macOS form)

The above commands use macOS-flavored `sed -i ''` (empty backup suffix). On GNU/Linux replace with `sed -i`. The user's environment is macOS per platform info, so the form above applies.

---

## P6 — Optional Residual

**Side observation (OPTIONAL — not blocking the rename):**

The auto-memory entry "Discipline design-history location" (in `MEMORY.md`) currently states "discipline institutional memory lives at `enes/discipline_design_history/for_<discipline>.md`." The folder has been renamed to `docs/discipline_design_history/`. The memory entry is stale and would mislead future agents looking for design-history files. The user may want to update the memory entry when convenient — small one-line edit:

```
- [Discipline design-history location](project_discipline_design_history_location.md) — discipline institutional memory lives at `docs/discipline_design_history/for_<discipline>.md`, not co-located with the runtime spec.
```

This is OUT OF SCOPE for the rename inquiry; surfaced here only because it was observed during exploration.

---

## Assembly Check

The 6 pieces compose into one user-facing deliverable:

1. **P1 criteria** — the dimensions the user (or downstream agent) can use to re-evaluate any candidate
2. **P2 finalists** — the candidate pool, including Innovation-emergent `weigh`
3. **P3 per-finalist evaluation** — concrete scoring with reasoning
4. **P4 recommendation packet** — ranked top-3 with conditional reasoning for user adjudication
5. **P5 migration plan** — concrete bash commands parameterized on the user's choice
6. **P6 residual** — side observation, marked OPTIONAL

**Emergent property:** the packet serves as both a recommendation AND a template — if the user wants to evaluate `weigh` against additional candidates (or revisit the choice later), the criteria + evaluation structure transfers.

### Axis coverage check

| Axis | Coverage |
|---|---|
| Operation-fit (critical) | ✓ — primary scoring dimension |
| Sibling-pattern fit | ✓ — bare-verb form in C2 |
| Baggage-avoidance | ✓ — C3 explicitly tests NOT-list overlap |
| Migration | ✓ — P5 tiered plan |
| User-decision | ✓ — P4 explicit user-question with override path |
| Daily-language vs formal | ✓ — Lens Shifting in P4 surfaces this tradeoff (vet vs adjudicate) |

All axes have at least one candidate variant.

### Mechanism Coverage (Telemetry)

| Mechanism | Applied to | Output |
|---|---|---|
| **Combination** (G) | P4 packet | Sensemaking ranking + exploration criteria + decomposition structure → unified packet |
| **Absence Recognition** (G) | P2 | Inversion test for opposite-name + cross-domain check; surfaced `weigh` as 6th finalist |
| **Domain Transfer** (G) | P2 | Legal / biology / editorial / QA / hiring / philosophy / tournament vocabularies systematically checked; `weigh` emerged from legal+everyday |
| Extrapolation (G) | (not directly applicable for naming) | — |
| **Lens Shifting** (F) | P4 | Conditional recommendation ("right pick when...") for each top-3 candidate |
| **Constraint Manipulation** (F) | P3 + C4 | "5-word user explainability" constraint applied as intelligibility criterion |
| **Inversion** (F) | P2 | "approve / accept / praise / endorse" as opposite-of-right-name confirmed adversarial-structure essential |

**Generators applied:** 3/4 (Extrapolation didn't directly apply to naming) ✓
**Framers applied:** 3/3 ✓
Minimum coverage (1G + 1F) easily exceeded.

### Convergence

STRONG. Multiple mechanisms converge on adjudicate as primary:
- Domain Transfer (legal) → adjudicate
- Combination (operation-mechanism + bare-verb form) → adjudicate
- Lens Shifting (under what conditions?) → adjudicate when operation-fit dominates
- Inversion (what's the opposite?) → confirmed adversarial-evaluation is essential, which adjudicate captures

### Failure-mode Self-Check

| Mode | Status |
|---|---|
| 1. Premature Evaluation | ✗ avoided — each finalist tested via 5-test cycle after generation |
| 2. Single-Mechanism Trap | ✗ avoided — 3G + 3F applied |
| 3. Early Frame Lock | ✗ avoided — Sensemaking's primary candidate (adjudicate) tested against 5 others including Innovation-emergent `weigh` |
| 4. Innovation Without Grounding | ✗ avoided — each finalist scored against 6 criteria with prosecution+defense |
| 5. Mechanism Exhaustion | ✗ avoided — all applicable mechanisms produced; Extrapolation N/A for naming |
| 6. Survival Bias | ✗ avoided — uncomfortable finalist `critique` (status-quo) retained in top-3 because its trade-off profile (low migration) is genuinely different |

### Self-Assessment

**PROCEED.** 6 finalists scored on 6 criteria; ranked top-3 with conditional reasoning; user-decision question explicit; migration plan parameterized on user choice; convergence STRONG on adjudicate. Ready for Critique to adversarially test the recommendation packet against the 3 sensemaking commits + cross-cutting + the user-perspective axis.
