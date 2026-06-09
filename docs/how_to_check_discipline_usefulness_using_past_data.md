# How to Check a Discipline's Usefulness Using Past Inquiry Data

## What this is

A repeatable process for auditing how much a specific cognitive discipline (decompose / innovate / critique / sensemaking / surfacing / etc.) actually contributes to the verdicts of past `devdocs/inquiries/*` inquiries. The output is a contribution-level rating per inquiry plus cross-cutting observations about the discipline's typical contribution shape and the failure modes that cause it to under-contribute.

Use this when:
- You want to know whether a discipline is pulling its weight in the cognitive loop.
- You want to refactor a discipline and need empirical grounding ("what does it actually do well; where does it under-deliver").
- You want to surface what kinds of contributions the discipline tends to make (named models, meta-patterns, Domain Transfers, etc.).
- You want to compare disciplines against each other along contribution distribution.

Do not use this for:
- One-off "did this inquiry use discipline X" yes/no checks — just `grep` the relevant docarchive.
- Validating a single recent inquiry's correctness — that is a Critique re-run, not an audit.

## What you need before starting

1. A target discipline (the one being audited).
2. A scope of inquiries (typically "last N root inquiries by date-stamp descending"; N = 50 is a sensible default for stable conclusions).
3. The directory `devdocs/inquiries/` populated with completed inquiries, each carrying:
   - `_state.md` (history + flow type)
   - `_branch.md` (question + goal + source input)
   - `docarchive/<discipline-name>.md` (the discipline's actual output)
   - `finding.md` (CONCLUDE's compiled verdict)
4. A clear rubric (low / med / big / huge) tailored to the discipline being audited (see "Rubric design" below).

## The process

### Step 1. List the scope

```bash
ls -d /Users/ns/Desktop/projects/native/devdocs/inquiries/<date-pattern>*/ | sort -r | head -<N>
```

This gives a deterministic ordered list. Pin it; do not re-derive mid-audit (folders may be added/renamed between batches).

### Step 2. Design the rubric

The rubric must be specific to the discipline being audited. The four bands are universal; the criteria filling them are discipline-specific.

- **low** — contribution not visibly load-bearing in the finding; not zero, but a reader of the finding alone would not feel its absence.
- **med** — clear unique contribution: standard mechanism coverage / piece-level Inversion satisfied / single-purpose refinement / cross-domain check confirming-but-not-reshaping. The discipline did its job cleanly.
- **big** — multiple unique contributions OR one substantial one: multi-mechanism convergence; **new meta-pattern surfaced and adopted** in finding's "What's new"; **new cognitive concept articulated** and adopted as load-bearing; **load-bearing Domain Transfer** that architecturally organizes the finding; sub-decomposition / cluster taxonomy / cross-cutting guard.
- **huge** — innovate-only signature: **named architectural model** the discipline constructed that organizes the entire finding; **Level 3 root-cause Inversion** producing a reframing the verdict adopts; **Inherited Frame Audit fired and resolved** via this discipline; a global minimum the inquiry would not have reached otherwise. For most disciplines the HUGE band is empty by structural nature (decompose organizes — it rarely course-changes).

Calibrate the rubric language to the discipline's mechanisms. Decompose's BIG criterion is "complex coupling / sub-decomposition / cross-cutting guard separated from constrained pieces"; innovate's is "multi-meta-pattern surfacing / new cognitive concept / load-bearing Domain Transfer"; critique's is "foil KILLs that load-bearingly reshape the verdict / meta-violation catches".

### Step 3. Read each inquiry's `docarchive/<discipline>.md` AND `finding.md`

**This is the load-bearing methodological step.** Do not use `_state.md` history entries as the primary evidence source. They are author-written summaries that systematically under-represent contribution shape (see "Bias direction" below).

For each inquiry, the two reads answer two distinct questions:

- `docarchive/<discipline>.md`: what did the discipline actually produce? (the mechanism work, the foils, the Domain Transfers, the meta-patterns it surfaced)
- `finding.md`: what did the discipline's output appear as in the verdict? Specifically check the "What's new" / "Finding Summary" / "What's changed" sections for adopted concepts, named models, dissolvers, meta-patterns. Trace which of the discipline's outputs became load-bearing in the verdict and which were tested-but-not-adopted.

The rating is at the intersection: the discipline gets credit for what it produced AND what survived into the finding as load-bearing.

For batches, read 4-6 inquiries at a time (2 files each = 8-12 files per batch). A 50-inquiry audit is ~10 batches.

### Step 4. Apply the rubric per inquiry

For each inquiry, record:
- The rating (low / med / big / huge).
- The 1-2 sentence evidence: what specifically the discipline produced that justifies the rating; what the finding adopted.

Cite the load-bearing artifact verbatim where possible — "ONE-ENUMERATOR/TWO-CONTROLLERS named architectural model" / "IS→CAN-BE-USED dissolver line" / "5-cluster taxonomy organizing the foundational process-layer finding" — so the rating is auditable.

### Step 5. Aggregate into distribution counts + cross-cutting observations

Count the distribution: how many huge / big / med / low. Compare against any prior audit of the same discipline; if the distribution shifted, name why.

Then surface cross-cutting patterns:

- **Which inquiries cluster in each band?** (often topical: foundational-design inquiries cluster BIG/HUGE; audit-and-refine inquiries cluster MED.)
- **What is the discipline's typical contribution shape?** (decompose organizes via Q-tree; innovate constructs named models / meta-patterns; critique kills foils.)
- **What signature does the HUGE band require?** (innovate: named architectural model + Level 3 root-cause + Inherited Frame Audit resolution; decompose: typically empty; critique: foil-KILL load-bearingly reshaping verdict.)
- **What is the LOW band's structural floor?** (some disciplines like innovate have piece-level Inversion compliance requirements that prevent LOW by construction.)

### Step 6. Write the report

Standard structure: `devdocs/discipline_contribution_report_<discipline>.md`

Sections:
1. **Scope** (which inquiries, what was verified)
2. **Rubric** (with the discipline-specific criteria)
3. **Distribution change** (if this is v2/v3, show v1 vs current)
4. **All N — verified ratings** (table per band: # / inquiry / one-paragraph adoption evidence)
5. **Cross-cutting observations** (band-cluster patterns; typical contribution shape; HUGE band signature)
6. **Comparison across disciplines** (if multiple disciplines audited)
7. **Methodology note** (what was verified, what bias direction was observed)

## Common pitfalls

### Pitfall 1: Using `_state.md` history summaries as the primary evidence source

This is the dominant failure mode. State.md history entries are author-written one-line summaries of what the discipline did; they systematically under-represent BIG-tier work in three specific ways:

- **Multi-meta-pattern surfacing collapses to "no new meta-pattern"** — when innovate surfaces 3-4 reusable meta-patterns in one inquiry, the state.md proxy typically flattens this to "standard execution; piece-level Inversion satisfied."
- **New cognitive concept articulation is missed entirely** — concepts like render-as-tuple, hypothetical-relational expression mode, anti-FETCHING re-interpretation, ONE-ENUMERATOR/TWO-CONTROLLERS named model rarely appear in the state.md summary.
- **Load-bearing Domain Transfer is acknowledged as "Domain Transfer applied" without specifying its load-bearing role** — the same one-liner appears whether the transfer was confirmatory check or architectural framing.

The bias direction is asymmetric: state.md proxies UNDER-rate, never over-rate. If a v1 audit used state.md proxies and produced rating R, the docarchive-verified rating is ≥ R, never below. The methodology fix is: **always read docarchive + finding; never trust state.md as the rating evidence**.

### Pitfall 2: Skimming docarchive instead of reading

Reading 200-500 lines per inquiry × 50 inquiries is real work. Do not delegate to a subagent — each discipline's contribution shape is contextual and requires holding multiple disciplines' interactions in working memory. The audit's value is in the careful reading; shortcuts produce v1-quality results.

### Pitfall 3: Rating the discipline's output rather than its finding-adoption

A discipline can produce extensive mechanism work that the finding does not adopt as load-bearing. Conversely, one innovate-constructed dissolver line can be the load-bearing element of the entire finding's architecture. The rating is at the intersection: what the discipline produced AND what survived into the verdict. Read the finding's "What's new" / "Finding Summary" specifically for load-bearing adoption signals.

### Pitfall 4: Pre-deciding the distribution before evidence

If you expect "this discipline is under-performing," it is tempting to rate aggressively LOW. If you expect "this discipline is the workhorse," it is tempting to rate aggressively BIG. The rubric is what disciplines the rating; calibrate on the rubric criteria, not the expected distribution.

### Pitfall 5: Not separating verification-mode inquiries from substantive inquiries

Verification-mode inquiries (e.g., "does prior commitment X cover concern Y?") have a different baseline contribution shape than substantive design inquiries. The rubric should not penalize verification inquiries for being structurally smaller; their BIG-tier signature is methodological insight (new verification pattern named) rather than substantive verdict construction.

## What to verify carefully

When upgrading a rating against the prior audit, document specifically:

- Which docarchive lines support the upgrade (cite line numbers or section identifiers).
- Which finding section adopts the upgrade-justifying contribution (e.g., "What's new" / "Finding Summary bullet on X" / "Reasoning section on Y").
- What state.md proxy missed (the bias-direction signature).

When downgrading a rating against the prior audit, document specifically why (the contribution does not appear load-bearing in the finding despite the docarchive evidence).

In a 50-inquiry audit, expect zero downgrades and 5-15 upgrades if the prior audit used state.md proxies. If you see the reverse (many downgrades, few upgrades), suspect a rubric misalignment.

## Output deliverable

A single markdown file: `devdocs/discipline_contribution_report_<discipline>.md`

The deliverable should be auditable in two senses:
1. A reader can trace any rating back to specific docarchive + finding evidence.
2. A future re-audit (after more inquiries accumulate) can re-apply the same rubric and compare distribution shifts.

The report is itself an inquiry artifact — it can be cited, refined, and superseded as the corpus grows.
