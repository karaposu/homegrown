## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-06-16_17-45__container_choice_field_vs_guidance_text/_branch.md`

(Prior outputs consumed: surfacing.md, sensemaking.md, decomposition.md, innovation.md. Adversarially test, grounded in the actual routelister schema (§5.2 Guidance = Mode + Pointers-each-with-WHY; §3.5 enrich-not-dump/persistence; §1.2 compactness; depth-signal/Frontier as text): (1) the recommendation / field-now steelman; (2) the grounds, esp. "Guidance already fits"; (3) the convention format / rot-risk; (4) the sharpened trigger / LLM-reads-prose; (5) the contract-strictness frame + name; (6) worth-it / over-thinking; (7) reversibility / hidden lock-in.)

---

# Structural Critique — The Container Recommendation

## Phase 0 — Dimension Construction

**Inherited-frame premises (the candidate rests on routelister's schema + economy → frame-premise test fires), each prosecuted independently:**

- **FP1 — "routelister values compactness such that a sparse typed field is bad."** If wrong (the schema tolerates optional fields freely), the sparse-field ground collapses. **Evidence:** §1.2 (concept-identity over manifestations, one-route-per-identity), §3.5 (enrich-not-dump; depth-signals, not dumps), the NOT-list's resistance to growth. The stated economy is real → **holds.**
- **FP2 — "the project's automation is LLM-based, so the trigger may never fire."** If wrong (a deterministic consumer is likely/planned), field-now is safer. **Evidence:** the disciplines are all LLM specs; the meta-loop is an orchestrator (currently human); no deterministic consumer is on any roadmap in context. **Holds**, but load-bearing → hammered at C4.
- **FP3 — "text→field is reversible/cheap."** Tested at C7.

**Dimensions (weighted by purpose-fitness):**

| # | Dimension | Weight | Success criterion |
|---|---|---|---|
| D1 | **Recommendation-correctness** | critical | text-now is right given routelister's actual schema/economy |
| D2 | **Grounds-soundness** (substance) | **critical** | the 4 grounds are structurally sound, not weak analogies; "Guidance fits" tested literally |
| D3 | **Format-robustness / rot-risk** (project-specific risk axis) | high | the convention is durable enough; the "one-LLM-writer" defense holds |
| D4 | **Trigger-correctness** | **critical (load-bearing)** | "reader's nature, not automation" is the right gate; LLM-reads-prose isn't overclaimed |
| D5 | **Frame/name validity** | medium | contract-strictness is a genuine principle (predicts other cases), not a re-description |
| D6 | **Worth-it / right-sized** (over-engineering axis) | critical | the rule+frame earns its weight over "just text, done" |
| D7 | **Reversibility-actual** | high | text→field is genuinely cheap, no hidden lock-in |

*External-anchor requirement (D1,D2,D3,D4):* claims about routelister's schema — cited below. *Validation:* "if a candidate passed all 7, would the container choice be right?" — yes.

---

## Phase 1 — Fitness Landscape

- **Viable region:** text-now correct (D1) ∧ grounds sound (D2) ∧ format robust (D3) ∧ trigger correct (D4) ∧ frame genuine (D5) ∧ right-sized (D6) ∧ reversible (D7).
- **Dead regions:** a ground is a weak analogy (D2 fails); the convention rots where a field wouldn't (D3); the trigger mis-gates AND a deterministic consumer is imminent (D4); hidden migration lock-in (D7).
- **Boundary regions:** the frame/name (D5 — could be cute); worth-it (D6 — could be over-thought); "Guidance fits" (D2 — gaps vs how-to-pointers).
- **Unexplored / un-anchorable:** the actual future consumer (can't observe) — but the trigger is designed to handle it.

---

## Phase 2 — Adversarial Evaluation + Phase 3 Verdicts

### C1 — The recommendation (field-now steelman)
**Prosecution:** a dedicated lightweight field is cleaner — self-documenting (its name declares intent), consistent location, and optional-null-on-most-records is totally normal (nullable columns are everywhere). The "sparse-field smell" is aesthetics, not cost.
**Defense:** routelister isn't a general DB — it has a *stated* compactness identity (§1.2 one-route-per-identity; §3.5 enrich-not-dump; the map is meant to stay scannable). Within *that* economy every soft signal is text (depth-signal, Frontier); a typed field for soft content would be the first exception. "Optional null fields are normal" holds for general schemas but routelister's design resists exactly that growth; self-documentation is matched by a labeled block.
**Collision (purpose-fitness):** "if [text-not-field] were left in, would the container still hold the gaps for the reader?" — yes, fitting the schema's economy. The field-now case is real-in-general but loses to routelister's *specific* parsimony. **SURVIVE** — caveat: state the call is **schema-specific** (grounded in routelister's compactness; it would flip for a parser-first schema), not a universal "text beats fields."

### C2 — The grounds, esp. "Guidance already fits"
**Prosecution:** "Guidance already fits" may be forced. Guidance Pointers are *guidance on how to engage the route* ("start from the token-issuance path") — a meaning-gap ("the data-model aspect is underspecified") is a *different kind* of content. Putting gaps in Guidance is **category-mixing** — stuffing readiness-gaps into a how-to-engage field.
**Defense:** sharpest objection, real merit. But structurally a Pointer is "an item + a WHY"; a gap is "an item + a vitality + a WHY" — same shape. And semantically a gap IS guidance-adjacent: "before developing, note these under-understood facets" guides the meta-loop's develop-vs-deepen choice. It's not mixing — it's a *labeled sub-block* (`Meaning-gaps:`), demarcated from the how-to pointers.
**Substance-axis prosecution (literal):** are gaps and how-to-pointers the same kind? No — distinct kinds; an *undemarcated* dump WOULD be category-mixing. The defense holds ONLY because of the **label**.
**Collision:** the prosecution lands a real partial hit → the "fits" ground is sound *conditional on* the labeled demarcation. The other grounds: text-form precedent (depth-signal/Frontier are text) — sound, directly evidenced; sparse-field smell — sound given FP1; reversibility — see C7. **SURVIVE** — caveat (REFINE-grade): state "Guidance fits **as a labeled `Meaning-gaps:` sub-block**," not "gaps are guidance pointers" — the label is load-bearing against category-mixing.

### C3 — The convention format / rot-risk
**Prosecution:** a convention in a free-text field WILL rot — the `[vitality]` tag gets written `(high)`, `High`, or omitted; no enforcement. A typed enum field prevents this by construction. "One disciplined LLM writer" is optimistic — LLMs vary run-to-run and across sessions/models.
**Defense:** rot is bounded by two things — (a) the convention is **documented in the spec**, and routelister **re-reads its own spec every run** (Step 0 mandatory pre-read), so the format is re-loaded each time (unlike a human who forgets); (b) today's reader is an LLM that tolerates `[high]`/`high`/`High` alike. A field would prevent drift, but at schema cost — and the drift only *matters* when a strict reader needs it, which is exactly the trigger.
**Collision:** rot and the trigger are the *same axis* — drift is tolerable exactly while the reader tolerates it; when a strict reader arrives, you promote (which also fixes the drift). **SURVIVE** — caveat: state that minor drift is acceptable while the reader is an LLM (don't over-police), promotion-to-field is also the rot-fix, and the spec **must document the convention** (the re-loaded-each-run durability mechanism).

### C4 — The sharpened trigger (LOAD-BEARING)
**Prosecution:** "LLM-reads-prose" does enormous work. Two attacks: **(a)** a deterministic consumer could arrive *sooner* than assumed — a cheap script counting high-vitality gaps for a dashboard is a non-LLM consumer that could appear next week, making field-now safer. **(b)** Is "reader's nature" even the right gate, vs "is the data *aggregated across routes*"? An LLM consumer aggregating vitality across 100 routes would rather have a field (parsing 100 prose blocks is flaky even for an LLM).
**Defense:** **(a)** is fair, but the rule *handles* it — if the consumer arrives, the trigger fires and you promote; the cost of being wrong is one cheap migration (C7), not a disaster. Building the field now to hedge a maybe-next-week script is the premature growth YAGNI warns against. **(b)** is the stronger attack and it **refines** the trigger: the real gate isn't purely "non-LLM reader" — it's "a reader needing **reliable structured extraction** (deterministic parsing OR cross-route aggregation) that a per-route prose block can't serve reliably."
**Collision:** prosecution (b) lands a real hit — "reader's nature (LLM vs not)" is *slightly too narrow*; LLM-reads-prose is solid for *per-route* reading but weak for *cross-route aggregation*. **REFINE** — broaden the trigger to: *"promote when a consumer needs reliable structured or cross-route-aggregate extraction — which a deterministic parser always needs, and a heavy aggregator may need even if LLM-based."* This is the critique's most substantive constructive output.

### C5 — The contract-strictness frame + name
**Prosecution:** "match container strictness to reader strictness" may just RE-DESCRIBE the answer (text=loose, field=strict, reader=loose→text) — circular, a post-hoc rationalization dressed as a principle.
**Defense:** test generalization. It predicts other cases: a config read by a human → loose (YAML comments); by a strict parser → strict (typed schema). Crucially, it predicts routelister's OWN mix — **grain / kind / engagement-type ARE typed fields** because the route-typing is consumed *strictly* (a fixed nine-verb enum the discipline enforces), while Guidance and the depth-signal are *loose* (LLM-read). So the frame explains why some routelister fields are typed and others aren't — external explanatory power, not re-description.
**Collision:** the "circular" charge fails — the frame predicts the existing schema's strict/loose split. **SURVIVE** — caveat: present the frame WITH its cross-schema prediction (why grain/kind are typed but Guidance isn't), so it reads as a principle, not a rationalization. ("Convention before schema" = the crisp handle.)

### C6 — Worth-it / over-thinking
**Prosecution:** this is a tiny storage choice. "Put it in Guidance as text, done" is right-sized. A trigger-keyed rule + a contract frame + a name is ceremony around a one-line decision — over-engineering the *meta* level (ironic for an inquiry about avoiding over-engineering).
**Defense:** the DECISION is one line ("text in Guidance"). The machinery earns its place only for what the user asked to "dive deep" on: the **trigger** (without it, "default text until a machine reads it" stays fuzzy and someone builds the field at the first whiff of "automation" — the exact error the sharpening prevents) and the **rule** (so it isn't re-litigated). The frame is the lightest justification; the name is an optional memory handle.
**Collision (elegance/purpose-fitness):** "if the rule/trigger were dropped, would the answer still serve the 'dive deep' ask?" — partly no: the trigger-sharpening IS the value the user asked for. But the frame/name could be trimmed without loss. **SURVIVE** — caveat: keep the trigger + rule (load-bearing); **right-size the presentation** — present the frame/name as a light handle, not as required machinery; don't let the finding read as over-built.

### C7 — Reversibility-actual (hidden lock-in?)
**Prosecution:** text→field is claimed cheap, but once N routes across many `_route.md` indexes and `routelister.md` files accumulate text-convention gaps, migrating ALL of them to a typed field is a bulk reformat across many files — NOT cheap. The reversibility ground may be false at scale.
**Defense:** three mitigations — (a) the migration is **mechanical and the migrator is an LLM**; reformatting `- <gap> — [high] — <why>` into a typed field is exactly the structured reformat an LLM does reliably (the `[vitality]` tag is **regex-extractable** — which is *why* the inline tag was chosen); (b) routelister **re-perceives each run** (§3.5 idempotency-at-fixpoint, perception governs), so migration can happen *incrementally* as routes re-run, not big-bang; (c) volume is bounded (only DEVELOP+CONSOLIDATE routes carry gaps).
**Collision:** the prosecution lands a partial hit — "cheap" is true BECAUSE the inline tag is regex-extractable; a free-PROSE convention (no tag) WOULD lock in. **SURVIVE** — caveat: reversibility is real but **conditional on the inline structured tag** (free prose would be expensive to migrate) — another reason the `[vitality]` tag is load-bearing, not optional.

---

## Phase 3.5 — Assembly Check

The survivors assemble into the recommendation. The caveats converge on **finding-instructions:**

1. State the recommendation as **schema-specific** (grounded in routelister's compactness; would flip for a parser-first schema) [C1].
2. State "Guidance fits" as "fits **as a labeled `Meaning-gaps:` sub-block**" — the label prevents category-mixing with how-to pointers [C2].
3. **Broaden the trigger** from "non-LLM consumer" to "a consumer needing **reliable structured OR cross-route-aggregate extraction**" (deterministic parser always; heavy aggregator maybe, even if LLM) [C4 — the key output].
4. Minor format drift is acceptable while the reader is an LLM; promotion-to-field is also the rot-fix; **document the convention in the spec** (re-loaded each run = durability) [C3].
5. Present the contract-strictness frame WITH its cross-schema prediction (why grain/kind ARE typed but Guidance isn't) [C5].
6. Keep the trigger + rule (load-bearing); **right-size the frame/name** as a light handle, not required machinery [C6].
7. The inline `[vitality]` tag is **load-bearing** (keeps the migration cheap + serves any regex reader) — not optional [C7].

With these the assembly lands solidly **viable**.

---

## Phase 4 — Coverage + Convergence

- **(c) Candidate verdicts:** C1 SURVIVE · **C2 REFINE** (labeled-block) · C3 SURVIVE · **C4 REFINE** (broadened trigger) · C5 SURVIVE · C6 SURVIVE · C7 SURVIVE — all survive; C2 + C4 are the two REFINEs, the rest carry caveats that collapse into the seven finding-instructions.
- **(d) Coverage map:** all 7 dimensions; the load-bearing axes (D2 grounds, D4 trigger) got the hardest prosecutions and landed real hits → constructive refinements, not rubber-stamps.
- **Adversarial strength:** STRONG (C2 category-mixing, C4 aggregation-gate, C7 lock-in-conditional all landed genuine partial hits; defenses survived via the labeled-block / the broadened-trigger / the regex-tag, not hand-wave).
- **Landscape stability:** STABLE.
- **External grounding:** cited the actual schema (§5.2 Guidance, §3.5 persistence/idempotency, §1.2 compactness, depth-signal/Frontier as text). Anchored. The one unobservable (future consumer) is handled by the trigger by design.
- **Failure modes checked:** Wrong-dimensions (no), Rubber-stamping (no — real hits), Nitpicking (no — C2/C4 are substantive REFINEs on load-bearing axes), Dimension-blindness (no — rot/reversibility/worth-it present), Self-Reference-Collapse (guarded — grounded in schema text, not the disciplines' authority), External-Grounding-Absence (no — schema cited).

### (e) Signal — **TERMINATE with ranked survivors**

1. **C4 broadened trigger + C2 labeled-block** — the two REFINEs; their fixes are the finding's load-bearing instructions.
2. **The assembled recommendation (C1+C3+C5+C7)** — SURVIVE, conditioned on the seven finding-instructions.
3. **C6 worth-it** — SURVIVE; right-size the frame/name in presentation.

**Constructive output for the finding:** the seven finding-instructions above — especially the **broadened trigger** ("reliable structured or cross-route-aggregate extraction," not merely "non-LLM"), the **labeled-sub-block** framing of "Guidance fits," and the **load-bearing inline tag** (durability + cheap migration).

---

## Convergence Telemetry

- **Dimension coverage:** 7/7 (critical axes + 1 substance + 1 project-specific risk axis [rot-durability]).
- **Adversarial strength:** **STRONG** (C2 + C4 + C7 landed genuine partial hits producing constructive refinements).
- **Landscape stability:** **STABLE.**
- **Clean SURVIVE exists:** **YES** (the recommendation SURVIVES with the seven instructions; C2 + C4 are REFINEs, not kills).
- **Failure modes observed:** none uncontrolled.
- **Overall: PROCEED** — the recommendation is sound; the constructive output is the seven finding-instructions, with the broadened trigger as the load-bearing refinement.
