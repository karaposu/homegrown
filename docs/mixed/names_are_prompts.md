# Names Are Prompts

> **Every name an LLM will read or write is part of its prompt. Name things as specifications, not labels — and spend the explicitness on load-bearing names first.**

A project-agnostic principle, extracted from measured results (evidence below). Applies to projects where LLMs consume or produce the artifacts — schemas, prompts, tool definitions, and (because AI also works ON projects) code and documentation vocabulary.

---

## The mechanism (why this is literal, not a slogan)

In structured output, field names and their descriptions are not documentation — they are **injected into the request** as the schema the model must fill, and the field name is the exact key the model **types back** in its answer. A name is the one text the model can never skim: it reads it and then writes it.

The consequence cuts both ways: an ambiguous name doesn't merely fail to help — it **licenses wrong content**. A field named `address` licenses city and region details ("address" contains them, conceptually). A field named `type` licenses any of several type-like things. A description that contradicts a sibling's description doesn't produce randomness — it produces the model faithfully following conflicting instructions.

The same mechanism covers AI working on a project: an assistant reading `district` in code inherits exactly the ambiguity a parser does — and it also *writes* code through those names, compounding the effect. (Evidence grade for this extension: observational, not experimental — see the table.)

## The two channels

A naming contract has two channels, and measurement shows each carrying in different situations:

- **The NAME** — short, unavoidable, typed back. It carries when instructions compete or get skimmed: embedding a constraint in the name itself measurably reduced wrong-field placements even with descriptions held constant.
- **The DESCRIPTION** — where multi-clause licenses live: positive examples, NOT-clauses, rarity notes ("usually None"). It carries the guards: with a strong NOT-clause attached, three different candidate names all behaved identically well.

Prefer **prior-aligned names first**: use tokens the model's training data already binds correctly (`city`, `street`, `landmark`) and spend NOT-clauses on the deltas. A long name must buy *instruction*, not decoration — `subcountry_region_but_cant_be_a_city` earns its length because it IS an instruction. *(Grade: inference from the evidence, probe-checkable — not directly measured head-to-head.)*

## The load-bearing triage (three glance questions)

A name is **load-bearing** if ANY of these is yes:

1. **Confusability** — could this name's plausible values also fit a *sibling* concept?
2. **Decision-point** — does an AI branch on it (fill it, route on it, filter by it)?
3. **Propagation** — does a misreading here corrupt downstream artifacts?

Any yes → apply the tests below. All no → name it normally and move on. **No uniform verbosity** — that is the cargo-cult failure this rule exists to prevent.

(The triage doubles as a code-review question for any change that introduces new names.)

## The four tests

1. **Poison-word check** — the name must not contain a word that licenses broader content than intended ("address" invites whole addresses; "type" invites any type).
2. **NOT-clause audit** — any field whose values could fit a sibling gets a negative clause naming that sibling ("NOT a street, NOT a city, NOT an administrative district").
3. **Name-family consistency** — names in a set follow one grammar (e.g., bare level-names `country/city/street` + prefixed relatives `subcity_*, substreet`); grammar itself is a clarity device.
4. **The probe gate** — any change to a load-bearing name or description is re-verified by a quick probe before it ships (recipe below). *Per-scope note: the probe applies to LLM-call surfaces. For code and doc names, verification is the cross-copy agreement test (when the same name/license lives in 2+ places, a test asserts they match) plus the review question.*

## The two limits (part of the same mechanism, not caveats)

- **Explicitness has a DOSE.** Because names and descriptions are prompt material, they can *over-instruct*: our harshest clauses fixed a junk problem and simultaneously scrambled a previously-perfect record (correct runs fell 6/6 → 2/6 — the model got scared of a legitimate field and started misplacing values). Proven wording is immutable-by-default; targeted hardening only where a measured problem lives; every change through the probe gate.
- **Some behaviors no wording fixes.** The model filled in an unstated country 15/24 times *straight through* an explicit "NEVER infer" clause — the instruction changed the format of the guess, not the behavior. Where words lose to model priors, **deterministic structure backs them**: post-hoc checks (was the value literally in the input?), never-lose-stated guards, provenance computed by comparison.

## A specimen (before/after, one glance)

**Before** — the schema that scored **0/9** fully-correct runs (it contradicts itself: neighborhoods are the examples in one field and the description in the other):

```python
region:   "Region/area if stated, e.g. Mahmutlar, Oba, Kestel."      # ← neighborhood examples
district: "District/neighbourhood if stated, e.g. Konyaaltı, Kepez." # ← says "neighbourhood" too
```

**After** — the naming that scored **9/9**, including correctly splitting a composite value the old schema never split:

```python
subcity_district: "An official administrative district INSIDE the city, e.g. Konyaaltı, Kepez.
                   NOT a street, NOT a city, NOT a small neighborhood."
subcity_region:   "A small neighborhood/mahalle INSIDE a district, e.g. Hurma, Liman, Sarısu.
                   NOT a street, NOT a city, NOT an administrative district."
```

## The evidence (grades and conditions attached — direction, not rates)

All experimental rows: gpt-5.4-nano, low reasoning effort, real informal listing texts (RU/TR), N as stated. Small samples — decisive on direction, not on exact rates.

| # | Result | Numbers | Grade |
|---|---|---|---|
| 1 | Renaming `type` → `listing_type` (+ explicit description) fixed a live classification drift | 1 record, reproduced | measured |
| 2 | Meaning-carrying names + NOT-clauses vs the self-contradicting schema | **9/9 vs 0/9** fully-correct runs (3 texts × 3 runs) | measured (names+descriptions as a package) |
| 3 | Three street-field names (`street`, `street_identifier_or_name`, `street_address`), all WITH the NOT-clause | all clean, **30/30** street-bearing runs — the description carried | measured |
| 4 | NOT-clause embedded IN the name (`…_but_cant_be_a_city`), descriptions held constant, adversarial wording | promotions **0/6 vs 1/6**; no suppression of legitimate values (3/3) | measured |
| 5 | A broad-sounding name (`address_helper_landmark`) vs a narrow one (`helper`/`landmark`) | the broad name attracted a junk phrase once in 12; the narrow ones never did | measured |
| 6 | The dose effect: harsher clauses fixed junk but scrambled correct fields | junk 3/9 → 1/6; correct rungs **6/6 → 2/6** | measured |
| 7 | The country magnet: inference through a "NEVER infer" clause | unstated country filled **15/24** | measured |
| 8 | AI-as-developer reads/writes project names the same way | this project's sessions | observational |

Confirmed-absent (honest note): no measured case of a *longer name hurting* exists in this record — absence of evidence, stated as such; the dose effect concerns clause strength, not name length.

## How to verify on YOUR model (the portable probe recipe)

The rule ships with its falsifier. Before trusting any claim here on a different model, domain, or wording:

1. Pick 3–6 **real** texts, including your known-hard cases (composites, junk-bearing, lone-name).
2. Define the variants: change ONLY the name, or ONLY a clause — never both at once.
3. Run each text × each variant × 3+ times on your production settings.
4. Grade assignments against expected values; separate hard errors from world-knowledge cases no schema can decide.
5. Minutes of wall-clock, cents of spend. Wording changes that fail the probe don't ship.

## Lineage

"Use self-describing names" is old advice (Domain-Driven Design's *ubiquitous language*; prompt-engineering's self-describing schemas). What this rule adds: **AI has joined the parties sharing the language** — the vocabulary is now machine-consumed at generation time and typed back into outputs, which upgrades naming from communication hygiene to output-correctness engineering, and makes the discipline *measurable* (the probe).

## Minimum seed (adopt in one minute)

Paste into any project's README or system prompt:

> Every name an LLM will read or write is part of its prompt — name things as specifications, not labels. Before shipping a name, ask: could its values fit a sibling concept? does an AI branch on it? does a misreading propagate? Any yes → add the NOT-clauses, check for poison words, and probe the wording before it ships.

---

*Extracted 2026-07-22 from the PropertyBot naming experiments. Inquiry record: `devdocs/inquiries/2026-07-22_15-49__naming-as-the-biggest-lever-for-llm-accuracy/`. The full probe data lives in the findings cited there.*
