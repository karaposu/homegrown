# Sensemaking: Inquiry Datetime Prefix Format

## User Input

```text
$sense-making
okay , since we know devdocs/inquiries folder can be made with datetime prefixes. 

i am thinking 26_04_27__15_40 like prefix  does this makes sense?
```

## SV1 - Baseline Understanding

The user is asking whether inquiry folders should use a compact timestamp prefix like `26_04_27__15_40`.

Initial interpretation: yes, the idea makes sense directionally because the project now treats inquiry folders as provenance records, and provenance benefits from visible time ordering. The open question is the exact timestamp format, not whether timestamps belong in inquiry names at all.

## Phase 1 - Cognitive Anchor Extraction

### Constraints

- Folder names should sort chronologically in normal filesystem listings.
- Folder names should remain readable to humans and AI agents before opening `_state.md`.
- Inquiry folder paths may still be referenced, so the format should be stable once adopted.
- The format should work for many inquiries created on the same day.
- The format should be safe across common filesystems. Avoid characters like `:`.
- Slugs already use underscores, so the timestamp/slug boundary should be visually clear.
- The corrected inquiry storage policy currently recommends `YYYY-MM-DD_slug`, with day precision as the earlier default.

### Key Insights

- Adding time is useful if multiple MVL or sensemaking inquiries can happen on the same day.
- Two-digit year is compact but less durable than four-digit year.
- ISO-like ordering, from largest unit to smallest unit, is the load-bearing property.
- Hyphens inside the date and time improve readability because they visually separate timestamp fields from slug words.
- A double underscore is useful as a boundary between timestamp and slug.

### Structural Points

- The folder name has two parts: timestamp prefix and semantic slug.
- The timestamp should represent inquiry creation time, not finding completion time.
- The slug should remain the main semantic name.
- The timestamp should make recency visible without needing a README or generated index.

### Foundational Principles

- Naming should serve navigation and provenance, not just aesthetics.
- Prefer explicit durable formats over compact ambiguous formats when the object may live for years.
- The timestamp is metadata, but putting it in the path is justified because first-scan visibility is valuable.

### Meaning-Nodes

- Provenance
- Chronological sorting
- Human scanability
- AI scanability
- Timestamp/slug boundary
- Future-proof naming
- Collision prevention

## SV2 - Anchor-Informed Understanding

The proposed `26_04_27__15_40` format is structurally close to the right answer because it is sortable and contains useful time precision. The weak points are the two-digit year and the all-underscore timestamp. Those make the name less explicit and less standard than it needs to be.

The better frame is: use a full, ISO-like timestamp prefix, then a clear delimiter, then the slug.

## Phase 2 - Perspective Checking

### Technical / Logical Perspective

`26_04_27__15_40` sorts correctly only if every component is zero-padded and the project never needs to distinguish centuries. It is filesystem-safe.

However, `YYYY-MM-DD_HH-MM__slug` is more technically stable:

```text
2026-04-27_15-40__inquiry_name
```

It sorts correctly, avoids colon, keeps the timestamp readable, and gives a clean double-underscore boundary before the slug.

New anchor: the timestamp should be parseable by a simple split on `__`.

### Human / User Perspective

`26_04_27__15_40` is short, but it asks the reader to mentally decode the year and field positions. `2026-04-27_15-40__slug` is slightly longer, but it reads immediately as a date and time.

New anchor: extra characters are acceptable if they reduce decoding effort every time the folder is scanned.

### Strategic / Long-Term Perspective

This corpus may become a long-lived archive of reasoning traces. Two-digit years are fine for short local notes but weaker for durable provenance. A future reader should not have to infer that `26` means `2026`.

New anchor: durable provenance favors four-digit years.

### Risk / Failure Perspective

Day-only prefixes can collide conceptually when many related inquiries happen in the same day. Minute-level prefixes reduce this problem and preserve correction-chain order.

Minute precision can still collide if two inquiries are created in the same minute. That does not require seconds by default; the runner can append a suffix like `_2` or use the slug to disambiguate.

New anchor: minute precision is a good default; seconds are probably too noisy unless collisions become common.

### Resource / Feasibility Perspective

The recommended format is easy to generate:

```bash
date +"%Y-%m-%d_%H-%M"
```

That gives low implementation complexity and good readability.

New anchor: the format should map directly to a simple shell date format.

### Definitional / Consistency Perspective

The prior corrected finding recommended `YYYY-MM-DD_slug`. Moving to `YYYY-MM-DD_HH-MM__slug` is a refinement, not a contradiction. The earlier decision established that inquiries can carry date prefixes. This decision decides whether day precision is enough.

New anchor: time precision is justified when high inquiry throughput makes same-day order meaningful.

## SV3 - Multi-Perspective Understanding

The format should not be `26_04_27__15_40` as the canonical convention, even though it is directionally sensible. The stronger convention is:

```text
YYYY-MM-DD_HH-MM__slug
```

Example:

```text
2026-04-27_15-40__inquiry_datetime_prefix_format
```

This preserves the user's core idea: date and time in the folder name. It improves the idea by making the year explicit, making the timestamp more recognizable, and making the timestamp/slug boundary machine- and human-readable.

## Phase 3 - Ambiguity Collapse

### Ambiguity: Should inquiry folder names include time, not only date?

**Strongest counter-interpretation:** Day precision is enough. The corrected policy already recommended `YYYY-MM-DD_slug`, and adding time makes names longer.

**Why the counter-interpretation fails (structural grounds):** This project can create several inquiries in one day, especially during correction chains. Day-only prefixes show the date but not the order of same-day reasoning. The mechanism that timestamps are meant to support is first-scan recency and sequence recognition. Day precision only partially supports that mechanism.

**Confidence:** HIGH.

**Resolution:** Use time precision for new inquiry folders if the runner is being updated now.

**What is now fixed?** Timestamp prefixes should include date and minute-level time.

**What is no longer allowed?** Treating day-only precision as the obvious final format for all future inquiry folders.

**What now depends on this choice?** Runner folder creation and any future path examples.

**What changed in the conceptual model?** The timestamp is not only a date label; it is an ordering signal for high-throughput inquiry work.

### Ambiguity: Should the year be two digits or four digits?

**Strongest counter-interpretation:** `26_04_27` is shorter and visually lighter. Everyone knows the current project is in the 2020s.

**Why the counter-interpretation fails (structural grounds):** Inquiry folders are durable provenance records. A two-digit year forces context-dependent interpretation, while a four-digit year carries the same ordering value with no ambiguity. The additional two characters are a small cost compared with repeated long-term decoding.

**Confidence:** HIGH.

**Resolution:** Use `2026`, not `26`.

**What is now fixed?** Four-digit year is part of the canonical timestamp prefix.

**What is no longer allowed?** Two-digit year as the default durable inquiry naming format.

**What now depends on this choice?** All new date-time examples and runner date formatting.

**What changed in the conceptual model?** The format is optimized for durable provenance, not only local convenience.

### Ambiguity: Should timestamp fields use underscores or hyphens?

**Strongest counter-interpretation:** Underscores are already used in slugs, so `26_04_27__15_40` feels consistent with existing folder names.

**Why the counter-interpretation fails (structural grounds):** Slugs already use underscores for words. If the timestamp also uses underscores internally, the folder name has too many visually similar separators. Hyphens inside the date and time make the timestamp read as a timestamp, while the double underscore can mark the boundary before the slug.

**Confidence:** HIGH.

**Resolution:** Use hyphens inside timestamp fields and double underscore before the slug:

```text
2026-04-27_15-40__slug
```

**What is now fixed?** Separator roles are distinct: hyphen for timestamp subfields, single underscore between date and time, double underscore before slug.

**What is no longer allowed?** All-underscore timestamp as the preferred convention.

**What now depends on this choice?** Human scanability and simple parser assumptions.

**What changed in the conceptual model?** The folder name is not just a string; it has parseable fields.

### Ambiguity: Should the timezone appear in the folder name?

**Strongest counter-interpretation:** A timestamp without timezone is incomplete provenance, especially if agents run in different environments.

**Why the counter-interpretation partially fails (structural grounds):** Adding timezone to every folder name makes the first-scan surface noisier. For this local repository, inquiry order matters more than global time reconstruction. If exact timezone provenance is needed, `_state.md` can record it without making every path heavier.

**Confidence:** LOW.

**Resolution:** Do not include timezone in the folder name by default. Use local creation time, and optionally record timezone inside `_state.md`.

**What is now fixed?** Folder names stay compact enough for scanning.

**What is no longer allowed?** Treating timezone-in-path as required for this workflow.

**What now depends on this choice?** `_state.md` should be the place for exact timestamp metadata if precision beyond local order matters.

**What changed in the conceptual model?** Folder timestamp is a navigation/provenance hint, not the complete temporal record.

## SV4 - Clarified Understanding

The user's proposal makes sense in principle but should be refined before becoming policy.

Use:

```text
2026-04-27_15-40__slug
```

instead of:

```text
26_04_27__15_40_slug
```

The refined format keeps the user's core idea, chronological folder sorting with time precision, but improves durability, readability, and parsing.

## Phase 4 - Degrees-of-Freedom Reduction

### Fixed

- New inquiry folders should have a timestamp prefix.
- The timestamp should use four-digit year.
- The timestamp should include minute-level time if multiple inquiries per day are normal.
- The timestamp should be ordered from largest to smallest unit.
- The folder name should use a clear timestamp/slug delimiter.
- The timestamp should represent inquiry creation time.

### Eliminated

- Two-digit year as the default.
- All-underscore timestamp as the default.
- Colon in time, because it is less portable.
- Seconds by default, because they add noise unless collisions become common.
- Timezone in the folder name by default.

### Still Viable

Preferred:

```text
YYYY-MM-DD_HH-MM__slug
```

Example:

```text
2026-04-27_15-40__inquiry_datetime_prefix_format
```

Acceptable simpler variant if time feels too noisy:

```text
YYYY-MM-DD__slug
```

Compact variant if the project later values short names over readability:

```text
YYYYMMDD-1540__slug
```

## SV5 - Constrained Understanding

The naming problem is now narrowed to one main decision: whether to adopt minute precision by default.

Given the current workflow, minute precision is justified because many inquiries can be created in a single day, and same-day order matters during correction and self-maintenance work.

The stabilized candidate is:

```text
devdocs/inquiries/2026-04-27_15-40__inquiry_slug/
```

If a collision happens in the same minute, add a small suffix or rely on the semantic slug:

```text
devdocs/inquiries/2026-04-27_15-40__inquiry_slug_2/
```

## Phase 5 - Conceptual Stabilization

The prefix should be treated as a provenance timestamp, not just a sorting decoration.

That means the best format is explicit, durable, chronological, and parseable. The user's proposed `26_04_27__15_40` has the right instinct but is too compact and separator-heavy for a long-lived convention.

## SV6 - Stabilized Model

Adopt this convention for new inquiry folders:

```text
YYYY-MM-DD_HH-MM__slug
```

Concrete example:

```text
2026-04-27_15-40__datetime_prefix_format
```

This differs from SV1 in one important way: the question is no longer "does `26_04_27__15_40` make sense?" The stabilized answer is "yes to date-time prefixes, but use a more explicit ISO-like format with full year and a clear slug delimiter."

Practical rule:

```text
timestamp = local inquiry creation time, formatted as %Y-%m-%d_%H-%M
folder = timestamp + "__" + slug
```

If the project later decides minute precision is too noisy, fall back to:

```text
YYYY-MM-DD__slug
```

But for the current high-throughput inquiry workflow, `YYYY-MM-DD_HH-MM__slug` is the better default.
