# Sensemaking: Inquiry Name Format Alternatives

## User Input

`devdocs/inquiries/2026-04-27_20-03__inquiry_name_format_alternatives/_branch.md`

## SV1 - Baseline Understanding

The current best format is `YYYY-MM-DD_HH-MM__slug`, but the user is asking whether a better convention exists: something more compact, maybe unusual, maybe not a datetime at all, while still allowing humans and AI agents to understand recency or order from folder names without opening files.

Initial interpretation: the format space should not be limited to "pretty timestamp vs no timestamp." It should compare four families:

1. readable datetime prefixes;
2. compact datetime prefixes;
3. sequential or monotonic IDs;
4. directory topology or metadata alternatives.

## Phase 1 - Cognitive Anchor Extraction

### Constraints

- Folder names must sort in useful chronological or creation order.
- The recency/order signal must be visible from folder names or paths before reading file contents.
- The convention must be easy for AI agents to infer from a directory listing.
- The convention should stay stable once adopted, because inquiry paths may be referenced.
- The convention should not require a manually maintained index.
- The convention should not require a central counter unless the gain is large.
- The convention should be filesystem-safe and shell-friendly.
- The semantic slug should remain visible because timestamps alone do not explain the inquiry topic.

### Key Insights

- If actual calendar recency matters, some form of date/time is hard to beat.
- If only creation order matters, a sequence ID can be more compact than a timestamp.
- Compact encodings become worse when they require decoding or memory of a private convention.
- `YYYYMMDD-HHMM__slug` keeps full date/time meaning while removing four separators from `YYYY-MM-DD_HH-MM__slug`.
- Unusual encodings like epoch seconds, base36 timestamps, ULIDs, or ordinal dates help machines more than humans.
- A bucketed path such as `2026/04/27/1540__slug` makes storage hierarchical, but the user specifically wants root-level scanability.

### Structural Points

- The prefix has three possible jobs: chronological sort, calendar recency, and unique-ish creation identity.
- The slug has one job: semantic recognition.
- A non-date prefix can provide order but not calendar recency.
- A date prefix can provide both order and calendar recency.
- A compact datetime prefix is the only family that preserves both main jobs without a separate index.

### Foundational Principles

- A naming convention should be boring unless a non-boring format creates a clear practical advantage.
- The best prefix is the shortest one that remains self-explaining under a raw folder listing.
- Hidden metadata is weaker than visible metadata for this workflow because the point is to avoid opening files.
- Avoid creating a second maintenance system just to make names shorter.

### Meaning-Nodes

- Compactness
- Recency visibility
- Sortability
- Parseability
- Human scan
- AI scan
- Counter maintenance
- Private encoding
- Semantic slug

## SV2 - Anchor-Informed Understanding

The candidate to beat is no longer only `YYYY-MM-DD_HH-MM__slug`. A better compact variant exists:

```text
YYYYMMDD-HHMM__slug
```

Example:

```text
20260427-2003__inquiry_name_format_alternatives
```

This keeps four-digit year, month, day, hour, and minute. It sorts correctly. It removes four visual separators from the prior format. It is still recognizable as a timestamp to most technical readers and AI agents.

The key question becomes whether that compactness is worth the slight loss in readability compared with `YYYY-MM-DD_HH-MM__slug`.

## Phase 2 - Perspective Checking

### Technical / Logical Perspective

`YYYYMMDD-HHMM__slug` is lexicographically sortable if all fields are zero-padded. It is easy to generate with:

```bash
date +"%Y%m%d-%H%M"
```

It is also easy to parse:

- first 8 chars: date;
- char 9: separator;
- next 4 chars: time;
- `__`: timestamp/slug boundary.

New anchor: compact ISO-basic style gives the same ordering mechanism as the readable format with fewer characters.

### Human / User Perspective

`20260427-2003__slug` is less immediately readable than `2026-04-27_20-03__slug`, but it is still learnable and visually compact. Once the convention is seen twice, the user can read it quickly.

For a folder root with many entries, shorter prefixes reduce horizontal noise and leave more room for the slug.

New anchor: compactness matters more as the number of root entries grows.

### AI-Agent Perspective

AI agents can infer `YYYYMMDD-HHMM` reliably because it is a common timestamp shape. They do not need to open `_state.md` to know chronology. They can sort by folder name and compare recency directly.

Exotic encodings are worse for agents unless the convention is documented in context. A base36 or ULID-like timestamp is sortable, but the agent must know how to decode it.

New anchor: AI scanability favors common timestamp conventions over custom encodings.

### Strategic / Long-Term Perspective

The inquiry corpus is meant to be durable provenance. Four-digit year should stay. Date and time should stay if same-day order matters. The format should not optimize so hard for compactness that future readers need a decoder.

New anchor: "compact but not cryptic" is the strategic target.

### Risk / Failure Perspective

The main risks are:

- a compact format becomes private shorthand;
- sequence IDs require a counter and can desynchronize;
- day-only timestamps hide same-day correction chains;
- overly long timestamps push useful slug text out of view;
- unusual encodings make old paths harder to interpret.

New anchor: the best answer should avoid both extremes: verbose readability and cryptic compactness.

### Resource / Feasibility Perspective

`YYYYMMDD-HHMM__slug` is trivial to implement. It does not require a registry, database, index, or scanning existing folders for a max ID.

Sequence IDs require either a stored counter or a scan of existing names to assign the next number. That is not hard, but it introduces a stateful allocation problem that timestamps avoid.

New anchor: timestamps are stateless; sequence IDs are stateful.

### Definitional / Consistency Perspective

The corrected inquiry policy says inquiry folders are provenance records. Provenance is usually about when, what, and why. The slug supplies what. The finding supplies why. The prefix should supply when.

Non-date IDs can supply order, but they do not supply when. That makes them less aligned with provenance.

New anchor: if inquiry folders are provenance, date/time is not arbitrary metadata; it is part of the record's identity signal.

## SV3 - Multi-Perspective Understanding

The best alternative to `YYYY-MM-DD_HH-MM__slug` is:

```text
YYYYMMDD-HHMM__slug
```

It is more compact while still exposing recency/order without reading content. It keeps the strongest properties of the readable timestamp and drops some visual bulk.

The best non-datetime alternative is a monotonic sequence:

```text
000142__slug
```

That is very compact and sortable, but it only exposes order, not calendar recency. It also requires a counter or folder scan. It is useful only if the project later decides that chronological order matters more than date/time provenance.

Exotic alternatives such as epoch seconds, base36 minute stamps, ULIDs, or ordinal dates are technically possible but weaker for this project because they require decoding or are less self-explaining.

## Phase 3 - Ambiguity Collapse

### Ambiguity: Is there a better compact datetime format than `YYYY-MM-DD_HH-MM__slug`?

**Strongest counter-interpretation:** The prior format is better because it is maximally readable. Compacting it saves only a few characters and makes dates harder to scan.

**Why the counter-interpretation partially fails (structural grounds):** In a large directory, every entry repeats the prefix. Removing four separators from every folder name reduces visual noise and keeps more slug text visible. `YYYYMMDD-HHMM` remains structurally recognizable because it preserves standard largest-to-smallest timestamp order and keeps a hyphen before time.

**Confidence:** HIGH.

**Resolution:** `YYYYMMDD-HHMM__slug` is a legitimate improvement candidate over `YYYY-MM-DD_HH-MM__slug` if compactness matters.

**What is now fixed?** The compact ISO-basic timestamp must be included among serious survivors.

**What is no longer allowed?** Treating the previous readable format as obviously optimal without comparing compact ISO-basic form.

**What now depends on this choice?** Innovation should explore variants around compact timestamp, not only exotic alternatives.

**What changed in the conceptual model?** The problem shifts from "timestamp vs not timestamp" to "how much timestamp readability is worth the repeated prefix length."

### Ambiguity: Can a non-datetime prefix do the job better?

**Strongest counter-interpretation:** A sequence ID such as `000142__slug` is shorter, cleaner, and enough for order. If exact date is needed, `_state.md` can store it.

**Why the counter-interpretation partially fails (structural grounds):** The user explicitly wants no-content-read recency/order. A sequence ID exposes order but not calendar recency. To know whether `000142` is today, last week, or last month, the agent must read an index, state file, or infer from surrounding entries. Also, assigning the next sequence requires state or a scan.

**Confidence:** HIGH.

**Resolution:** Sequence IDs are viable only if the project chooses compact order over visible calendar recency. They are not better for the current goal.

**What is now fixed?** Non-date sequence IDs cannot fully replace datetime prefixes under the current requirement.

**What is no longer allowed?** Calling sequence IDs equivalent to datetime prefixes for provenance.

**What now depends on this choice?** Critique should judge sequence IDs as a fallback or future phase, not the default.

**What changed in the conceptual model?** "Order" and "recency" are separated. Date/time provides both; sequence provides only order.

### Ambiguity: Should the project use an unusual encoded timestamp?

**Strongest counter-interpretation:** A base36 timestamp or ULID-style prefix would be shorter, sortable, and unique. For AI agents, machine-parseability may be enough.

**Why the counter-interpretation fails (structural grounds):** The user's requirement includes not reading folder contents, but it does not imply accepting opaque folder names. A timestamp that needs a decoder fails the human first-scan goal and weakens agent interpretation unless the convention is always in context. The project is not facing enough collision or distribution pressure to justify ULID-style complexity.

**Confidence:** HIGH.

**Resolution:** Reject unusual encoded timestamps as the default.

**What is now fixed?** The default should be a recognizable calendar timestamp, not an opaque encoded ID.

**What is no longer allowed?** Optimizing compactness past immediate interpretability.

**What now depends on this choice?** Innovation can mention exotic encodings but should not promote them as default.

**What changed in the conceptual model?** The format is a reading interface, not only a machine key.

### Ambiguity: Is folder topology better than prefix naming?

**Strongest counter-interpretation:** Use folders like `devdocs/inquiries/2026/04/27/2003__slug/` or `devdocs/inquiries/2026-04/27__slug/`. This reduces repeated prefix text and gives chronological grouping.

**Why the counter-interpretation partially fails (structural grounds):** Nested topology reduces root clutter, but it makes broad inquiry scanning require deeper traversal. The current correction moved cold material into `_archive/`; it did not establish date-bucket nesting as the primary interface. Prefix naming keeps every active inquiry visible at one scan level.

**Confidence:** HIGH.

**Resolution:** Keep date/time in the folder name for active inquiry root. Consider date buckets only if root count grows so large that a flat active root becomes unworkable even with `_archive/`.

**What is now fixed?** Date-bucket topology is not the next default.

**What is no longer allowed?** Solving compactness by hiding active inquiries behind nested date folders.

**What now depends on this choice?** The final recommendation should remain a single-folder naming convention.

**What changed in the conceptual model?** The active inquiry root is treated as a scan surface, not just a storage tree.

## SV4 - Clarified Understanding

There is a better compact alternative to the prior readable timestamp:

```text
YYYYMMDD-HHMM__slug
```

Example:

```text
20260427-2003__inquiry_name_format_alternatives
```

It preserves visible calendar recency, same-day order, lexicographic sorting, stateless creation, and AI/human inferability. It is less pretty than `YYYY-MM-DD_HH-MM__slug`, but it is probably better for a growing folder root because the prefix is shorter and leaves more visual room for the slug.

Non-datetime alternatives are weaker for the current goal. Sequence IDs are compact but hide calendar recency. Encoded timestamps are compact but cryptic. Date-bucket folders are tidy but reduce flat scanability.

## Phase 4 - Degrees-of-Freedom Reduction

### Fixed

- The naming convention should keep timestamp and slug in the same folder name for active inquiries.
- The timestamp should expose actual calendar date, not only sequence order.
- The year should remain four digits.
- Minute precision remains useful for same-day inquiry ordering.
- The slug should remain after a clear delimiter, preferably `__`.
- The format should be parseable without a private decoder.

### Eliminated

- Pure sequence IDs as the default.
- Base36, epoch, ULID, KSUID, or other opaque encoded timestamps as the default.
- Date-bucket nested topology as the next default.
- Two-digit year as the durable convention.
- Seconds by default unless collisions prove common.

### Still Viable

Best compact default:

```text
YYYYMMDD-HHMM__slug
```

Most readable default:

```text
YYYY-MM-DD_HH-MM__slug
```

Minimal date-only fallback:

```text
YYYYMMDD__slug
```

Order-only fallback:

```text
000142__slug
```

## SV5 - Constrained Understanding

The solution space now has two serious candidates:

1. `YYYY-MM-DD_HH-MM__slug` if readability is valued more than compactness.
2. `YYYYMMDD-HHMM__slug` if compactness and scan density are valued more, while still preserving visible date/time.

The project should probably use `YYYYMMDD-HHMM__slug` for future inquiry folders if the user is feeling friction from long prefixes. It gives a real compactness improvement without adopting a weird or opaque format.

## Phase 5 - Conceptual Stabilization

The strongest model is: inquiry folder prefixes should be visible provenance keys. A good provenance key must answer "when was this created?" and "where does it sit in the sequence?" before any file is opened.

Datetime is the simplest way to answer both. The best refinement is not to abandon datetime, but to use a compact ISO-basic timestamp.

## SV6 - Stabilized Model

The better compact alternative is:

```text
YYYYMMDD-HHMM__slug
```

Example:

```text
20260427-2003__inquiry_name_format_alternatives
```

This differs from SV1 in a precise way: the prior readable convention is good, but not necessarily optimal. The stable recommendation is now conditional:

- Use `YYYYMMDD-HHMM__slug` as the default if the project wants compact folder names with visible recency/order.
- Use `YYYY-MM-DD_HH-MM__slug` only if maximum immediate human readability matters more than scan density.
- Do not use sequence IDs, epoch/base36/ULID-style encodings, or nested date buckets as the default unless the project later changes the requirement from visible provenance to compact machine identity.

Saturation telemetry:

- Perspective saturation: high; new perspectives converged on compact ISO-basic datetime.
- Ambiguity resolution: high; the main alternatives are classified.
- SV delta: meaningful; the model moved from readable timestamp default to compact ISO-basic candidate.
- Anchor diversity: sufficient; constraints, risks, user scanability, AI scanability, and implementation cost all shaped the result.
