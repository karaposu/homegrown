---
status: active
refines: devdocs/sensemaking/inquiry_datetime_prefix_format.md
---
# Finding: Inquiry Name Format Alternatives

## Changes from Prior

**What's preserved:** The prior sensemaking note was right that inquiry folders should expose creation time in the folder name, and that the slug should remain visible after a clear delimiter.

**What's changed:** The best default is no longer the fully separated `YYYY-MM-DD_HH-MM__slug`. A more compact ISO-basic variant gives almost the same readability with less repeated visual noise.

**What's new:** The recommended default is `YYYYMMDD-HHMM__slug`. A daily sequence variant, `YYYYMMDD-NN__slug`, is worth preserving as a future option if inquiry creation becomes fully runner-controlled.

**Migration:** Do not rename current or archived inquiry folders just to apply this refinement. Use the compact format for new inquiry folders after the MVL/MVL+ runner convention is updated.

## Question

Is `YYYY-MM-DD_HH-MM__slug` the best inquiry-folder naming convention, or is there a better compact alternative that still exposes recency/order without requiring file-content reads?

The goal is to compare date-time prefixes, compact timestamp encodings, sequence IDs, bucket folders, and non-date alternatives so the project can choose a future `devdocs/inquiries/` folder convention that is compact, readable, sortable, stable, easy for AI agents to scan, and not over-engineered.

## Finding Summary

- **Use `YYYYMMDD-HHMM__slug` as the new default candidate.** Example: `20260427-2003__inquiry_name_format_alternatives`.

- **This is better than `YYYY-MM-DD_HH-MM__slug` if compactness matters.** It keeps full year, month, day, hour, and minute, but removes extra separators.

- **Keep `YYYY-MM-DD_HH-MM__slug` as the readable fallback.** It is still good when immediate human readability matters more than scan density.

- **Do not use unusual encoded timestamps by default.** Epoch seconds, base36, ULID, or KSUID-style IDs are compact, but they are too opaque for a folder name that should be understood from a raw listing.

- **Do not use pure sequence IDs as the default.** A name like `000142__slug` gives order but not calendar recency, and it requires a counter.

- **Keep `YYYYMMDD-NN__slug` as a future runner-owned option.** Example: `20260427-03__slug`. It is shorter and clean, but it needs reliable daily sequence allocation.

## Finding

### 1. The Best Compact Alternative

The best compact alternative is:

```text
YYYYMMDD-HHMM__slug
```

Example:

```text
20260427-2003__inquiry_name_format_alternatives
```

This format preserves the important properties of `YYYY-MM-DD_HH-MM__slug`:

- it sorts chronologically in normal folder listings;
- it exposes calendar recency before opening any files;
- it preserves same-day order at minute precision;
- it keeps the year as four digits;
- it has a clear timestamp/slug boundary through `__`;
- it is easy for humans and AI agents to infer;
- it is stateless to create.

The implementation command is simple:

```bash
date +"%Y%m%d-%H%M"
```

### 2. Why This Beats The Fully Separated Timestamp

The fully separated format is:

```text
YYYY-MM-DD_HH-MM__slug
```

Example:

```text
2026-04-27_20-03__inquiry_name_format_alternatives
```

That format is clearer at first glance, but it is longer. In a directory with many inquiries, every repeated separator consumes scan width and pushes the semantic slug further right.

The compact format:

```text
YYYYMMDD-HHMM__slug
```

keeps the timestamp recognizable while making the prefix shorter. It is not exotic. It is a compact ISO-like timestamp, which is a familiar pattern in logs, migrations, and generated filenames.

### 3. Why Not A Non-Datetime ID

A pure sequence ID is tempting:

```text
000142__inquiry_name_format_alternatives
```

It is shorter than any timestamp and sorts cleanly. But it does not show calendar recency. An AI agent or human can see that `000142` came after `000141`, but not whether it was created today, last week, or months ago.

It also requires allocation. The system must know the next number, which means a counter file, a registry, or a folder scan.

That is not worth it for the default. Inquiry folders are provenance records. Provenance needs a visible "when," not only an order number.

### 4. The Serious Future Challenger

The strongest non-time-like challenger is:

```text
YYYYMMDD-NN__slug
```

Example:

```text
20260427-03__inquiry_name_format_alternatives
```

This format gives the date plus the nth inquiry created that day. It is shorter than `YYYYMMDD-HHMM__slug` and arguably cleaner.

The problem is state. The runner must assign `03` correctly. That requires either scanning existing folders for the current date or maintaining a counter.

This can be revisited if MVL/MVL+ owns all inquiry creation. Until then, stateless timestamp creation is safer.

### 5. What To Reject

Do not use two-digit years such as:

```text
260427-2003__slug
```

Two-digit years save two characters but weaken durable provenance. These inquiry folders may be read years later.

Do not use dense timestamps such as:

```text
202604272003_slug
```

The compactness gain is small, and the date/time boundary becomes harder to see.

Do not use opaque sortable IDs such as epoch seconds, base36 timestamps, ULIDs, or KSUIDs. They solve a harder distributed-identity problem than this project currently has, while making folder names less self-explaining.

Do not put status in the folder name. Status changes. Folder identity should not churn because an inquiry moved from active to complete.

Do not move to nested date buckets now. A path like `devdocs/inquiries/2026/04/27/2003__slug/` can reduce root clutter, but it weakens the flat active inquiry scan surface. Use `_archive/` for lifecycle separation first.

## Next Actions

### MUST

- **What:** Treat `YYYYMMDD-HHMM__slug` as the preferred new inquiry folder format.
  **Who:** MVL/MVL+ runner convention.
  **Gate:** Before changing automatic inquiry folder creation.
  **Why:** It gives visible recency/order without the visual bulk of the fully separated timestamp.

- **What:** Keep the double underscore delimiter before the slug.
  **Who:** Folder naming convention.
  **Gate:** For every new timestamped inquiry folder.
  **Why:** It makes the timestamp and semantic slug easy to split for both humans and scripts.

### COULD

- **What:** Keep `YYYY-MM-DD_HH-MM__slug` as an allowed readable fallback.
  **Who:** Human-created inquiry folders.
  **Gate:** When a folder is created manually and readability is preferred over compactness.
  **Why:** The readable format is still valid; it is only less compact.

- **What:** Test `YYYYMMDD-NN__slug` in a controlled runner-only experiment.
  **Who:** Future MVL/MVL+ runner implementation.
  **Gate:** After the runner owns inquiry folder creation reliably for at least 20 consecutive new inquiries.
  **Why:** Daily sequence may become better if allocation is reliable.

### DEFERRED

- **What:** Date bucket folders such as `devdocs/inquiries/2026-04/YYYYMMDD-HHMM__slug/`.
  **Gate:** Revisit if the active inquiry root exceeds 150 non-archived folders even after `_archive/` use.
  **Why (if revived):** Buckets can reduce root clutter, but they should not be introduced before flat timestamped names are tested.

- **What:** Opaque sortable IDs such as ULID or base36 timestamp prefixes.
  **Gate:** Revisit only if multiple agents create inquiry folders concurrently and timestamp collisions become a real problem.
  **Why (if revived):** They solve distributed uniqueness better than human-readable timestamps, but that is not the current problem.

## Reasoning

`YYYYMMDD-HHMM__slug` survived because it passes the critical dimensions: visible calendar recency, chronological sorting, same-day order, durable four-digit year, AI scanability, human scanability, and stateless creation.

`YYYY-MM-DD_HH-MM__slug` was refined rather than killed. It remains the clearest readable form, but the user's new question specifically asked for a more compact alternative.

`YYYYMMDD-NN__slug` was refined as a future option. It is compact and expressive, but the daily sequence number requires reliable allocation. That makes it premature as the default.

`YYYYMMDD__slug` was refined away from default because it hides same-day order. This project often creates several inquiries in one day, especially during correction chains.

`YYYYMMDDHHMM_slug` was killed because it is too dense. The small compactness gain does not justify losing visible field boundaries and the double-underscore slug delimiter.

`YYMMDD-HHMM__slug` was killed because two-digit years are weak durable provenance.

Pure sequence IDs such as `000142__slug` were killed as defaults because they show order but not calendar recency.

Epoch, base36, ULID, and KSUID-style IDs were killed as defaults because they are too opaque and solve a distributed uniqueness problem that the project does not currently have.

Date bucket folders were deferred because they reduce flat scanability. The project should first use `_archive/` plus compact timestamped active folders.

Status-in-path formats were killed because status changes, while folder identity should stay stable.

## Open Questions

### Monitoring

- After 20 new timestamped inquiries, check whether `YYYYMMDD-HHMM__slug` is still easy to scan or whether the readable fallback feels better.

- After 20 new timestamped inquiries, check whether same-minute collisions actually happen.

### Refinement Triggers

- Reopen the daily sequence option if MVL/MVL+ creates all inquiry folders automatically and can assign daily sequence numbers without manual coordination.

- Reopen date buckets if the active non-archived inquiry root grows beyond 150 folders and flat timestamped names are no longer enough.
