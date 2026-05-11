# Branch: Inquiry Storage Policy Correction

## Question

Was the prior `inquiry_folder_tidy_strategy` finding wrong to treat inquiry folders as canonical stable artifacts, and should Homegrown instead use datetime-prefixed inquiry folders plus an archive folder because inquiries are a persistence/provenance layer rather than the canonical fundamentals?

## Goal

A good answer should honestly correct the previous finding if its premise was wrong. It should distinguish canonical fundamentals from inquiry persistence, reassess datetime prefixes, reassess archive folders, explain when broken or rewritten inquiry references are acceptable, and decide what to do with the previously created `devdocs/inquiries/README.md`.

## Scope Check

Question covers goal. The user challenges the core premise of the prior finding and asks whether the proposed datetime-prefix/archive approach was better. Answering that directly requires re-evaluating storage identity, recency visibility, archival benefits, reference-breakage cost, and README maintenance.

## Context

- Prior finding: `devdocs/inquiries/inquiry_folder_tidy_strategy/finding.md`.
- Prior finding claimed `devdocs/inquiries/` should remain a flat canonical store and recommended a manual `devdocs/inquiries/README.md`.
- User correction: Homegrown fundamentals/protocols are canonical; inquiries are a persistence/provenance layer that helps develop fundamentals.
- User correction: archive folders have concrete benefits and the prior finding did not make the case against them clearly.
- User correction: datetime prefixes expose recency to humans and AI without reading each folder.
- User correction: reference breakage or reference rewriting may be acceptable because old inquiries are not canonical.
- User correction: `devdocs/inquiries/README.md` adds maintenance burden without enough benefit.
- Evidence from `devdocs/archaeology/intro2codebase.md`: `homegrown/` is the source tree; `devdocs/inquiries/<name>/` is runtime storage; inquiry folders are file-backed job records and Markdown persistence.
- Evidence from `devdocs/maintaining_devdocs_in_a_feasible_way.md`: the existing devdocs maintenance principle is "Archive, Never Delete"; each top-level devdocs folder can have an `_archive/` subfolder; archived folders keep original structure.

## Relationships

- CORRECTS: inquiry_folder_tidy_strategy (the previous finding over-weighted inquiry path stability and under-weighted archive/date-prefix benefits)
- RELATED: finding_lineage_metadata (uses prior path, revision trigger, and raw source-input appendix)
