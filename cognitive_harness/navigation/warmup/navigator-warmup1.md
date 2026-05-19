# /navigator-warmup1 - Non-Technical Project Summary

Read the project's first-party source-of-truth artifacts and produce a non-technical summary of what the project is, what exists now, and what the current frontier is.

## Additional Input/Instructions

$ARGUMENTS

---

## Instructions

0. Do not use  the arch-small-summary skill for this. 

1. Start by reading the project tree so you can see the artifact layout before reading files.

2. Read every first-party source-of-truth artifact in full when practical with following exceptions  
   
   - in devdocs folder only read inquiries folder content and inside inquiries folder only read finding.md files.  docarcieve folders are intermediate log files. also dont read arhieve part of it
   - do not read archive folders whereever they are
   - dont read config files and hidden folders like .codex or .github



   Source-of-truth artifacts include:

   - source code and runnable scripts;
   - configuration that controls behavior;
   - protocols, contracts, command files, and methodology files;
   - accepted findings and decision records;
   - project notes that define active direction or constraints.

   Do not treat code as the only source of truth. In Homegrown-style projects, Markdown files can be operative artifacts, not just documentation.

3. Use this authority rule for `devdocs/inquiries/`:

   - each inquiry folder may have its own `finding.md`;
   - each `finding.md` is the canonical record for that inquiry;
   - nested inquiry folders count too;
   - skip files under `docarchive/` unless the user explicitly asks for intermediate discipline outputs;
   - skip other non-canonical inquiry files unless a `finding.md` points to them or the user asks for them.

4. Be skeptical about stale or mismatched artifacts.

   This is likely an actively developed project. Documentation, protocol drafts, code, findings, and notes may be out of sync. When sources conflict, say so plainly and identify which source appears more authoritative for the claim.

5. Based on the whole project context, write a non-technical summary covering:

   - What the project is about in plain language.
   - What it currently does or contains.
   - What it appears to be trying to do, including partially implemented or in-progress work.
   - Who would use this and why.
   - The general shape of the project: web app, structured methodology notes, CLI tool, library, API, research archive, mixed artifact system, or something else.

6. Add a `Recent / Current Frontier` section.

   This section must interpret currentness, not merely list dated files. Cover:

   - recent changes that still matter;
   - active decisions and active artifacts;
   - corrected, superseded, stale, or unsafe assumptions;
   - open gates, blockers, and unfinished handoffs;
   - what Navigation should pay attention to now;
   - what evidence supports this current-frontier read.

   Inquiry folder dates are useful chronology, but dates are not enough. Explain why a recent item matters, whether it is still active, and what it changes for Navigation.

7. Keep it readable by a non-engineer. Avoid jargon. If a technical concept is essential, explain it briefly in parentheses.

8. Be honest about the state of things. If something looks half-built, stale, contradictory, or abandoned, say so.

### Output

By default, save the summary to `devdocs/archaeology/project_summary.md` (create the directory if needed) and print it in the conversation.
If that file already exists, overwrite it completely. Do not append or patch; rewrite the whole thing fresh.

**If `-n` is passed:** print in conversation only, don't write a file.
