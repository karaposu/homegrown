# Branch: Inquiry Name Format Alternatives

## Question

Is `YYYY-MM-DD_HH-MM__slug` the best inquiry-folder naming convention, or is there a better compact alternative that still exposes recency/order without requiring file-content reads?

## Goal

A good answer should compare date-time prefixes, more compact timestamp encodings, sequence IDs, bucket folders, and non-date alternatives. The user should be able to choose a naming convention for future `devdocs/inquiries/` folders that is compact, readable, sortable, stable, easy for AI agents to scan, and not over-engineered.

## Scope Check

Question covers goal. The question asks whether there is a better alternative to `YYYY-MM-DD_HH-MM__slug`; the goal requires evaluating alternatives against compactness, no-content-read recency/order visibility, scanability, and implementation simplicity.

## Context

- Prior sensemaking: `devdocs/sensemaking/inquiry_datetime_prefix_format.md` stabilized `YYYY-MM-DD_HH-MM__slug` as the best current date-time format.
- Corrected inquiry storage policy: `devdocs/inquiries/_archive/inquiry_storage_policy_correction/finding.md` established that inquiry folders are persistence/provenance records, not canonical fundamentals.
- Current root shape includes `devdocs/inquiries/_archive/` and `devdocs/inquiries/diagnostics/`, so folder names and folder placement are already becoming part of inquiry lifecycle signaling.
