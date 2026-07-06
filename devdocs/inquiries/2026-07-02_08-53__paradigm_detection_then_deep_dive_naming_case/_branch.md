# Branch: Paradigm Detection Then Deep-Dive (naming case)

## Source Input

The user's raw request, preserved verbatim (also in `articulate_simple.md`'s `## User Input`):

```text
I realized that with AI, it's really hard to come up with good names. Even when I use, um, innovation skill, you know, a skill, it's really hard. And I was just thinking, what is the reason? Um, because AI doesn't understand, um, but different paradigms of naming exist. For example, if I want to come up with a new name for an app, there are many different ways I can approach this. Um, I can try to come up with, for example, relevant keywords, prelevant keywords, and it will be the name, yes. I can come up with relevant keywords, but different vamp paradigm, but using another language is a different paradigm. So it can be the same world, but it can be in French, for example. Um, or another different paradigm is, Um, When you use 2 words together, and they mean they're like explanatory, they explain the, um, they got ads app does, or we can just explain something else, um, we can explain the, the outcome of this app, instead of what it does, just outcome. This is like another paradigm of, um, which semantic to use in terms of, uh, apps identity, it can be what it does, it can be the outcome, yes. one of the paradigm's identity, for example. Or there are some other paradigms regarding the, like, phonetics, uh, and approximation of, like, another world. For example, instead of saying like April, we can say appeal it to L. It can be a name as well, and it's like related to the apprill, and it is it is acceptable depending on, like, you know, it's it's a bit subjective. Uh, which this paradigms means that it uses different, um, uh, different, uh, It uses a word or the existing word, it alters it in a way, in a, like, grammatically, it's not correct, but then phonetically and as a name, it's good and shorter. It has such advantage. And like we had a situation where we were trying to generate a name for, um, uh, voice chat app for QR menus, in the restaurants, and I spent quite a time to talk with AI and try to come with names. And in the end, a good name for me, it's for me, yeah, good, one of the good options for me was Masajan, in Turkish. Which means table and life. So it's life of the table, and in Turkey, restaurants are, like they have these tables, and it has each table, has a job. each table has a life. Which you can talk and chat about the menu, ask your questions like you're asking to later. So there are different... paradigms and it's extremely... extremely, extremely important to detect the paradigms 1st and then dive deep into each of them, each one of them. Um, and I think this is something that, uh, that's, uh, like one missing part in our framework. I think, uh, detecting the paradigms, And then by doing a dive deep into them is one way of enumeration paradigm. And the other one is detecting the categories, for example, yeah? And then doing the, um, Dive deep. But that version is just the paradigm detection, and then doing dive deep. And I think this can be applied to um, innovation framework we have. This is definitely one thing that's advanced that can advance the innovation. The other... The other thing is it's resembles this MTTP pattern we had. Um, and also, regarding one part of the travel's loop. Like we might have something like that, but it's expensive, you know, like each paradigm, and then you have to go to type in each of them. Maybe not so cool, and maybe main idea was to use traverse loop to detect the detect these paradigms. Maybe this is, uh, this is what, it matters, like, and then for each of them, you'll go and run traverse, to generate more coverage and more enumeration of them in terms of, um, like, I don't know if I should say horizontally or vertically, but, um, and I think this is, like, one important thing can be added. I'm not sure exactly where, but it's really matters.

first read cognitive_harness/innovate/references/innovate.md fully
lets dive deep into this
```

## Articulation Reference

- **File:** `devdocs/inquiries/2026-07-02_08-53__paradigm_detection_then_deep_dive_naming_case/articulate_simple.md`
- **Itemize count:** 1
- **Per-item identifiers:** `I1` — the paradigm-detection-then-deep-dive gap
- **Verdict:** HIGH-PROCEED
- **Flagged conditions (if any):** none

## Question

**(I1, literal restatement):** *"With AI it's really hard to come up with good names, even using the innovation skill. The reason: AI doesn't understand that different paradigms of naming exist — relevant keywords as the name; the same words in another language; two words together explaining what the app does, or explaining the outcome instead (which semantic the identity uses); phonetic alteration of an existing word (grammatically wrong but phonetically good and shorter). Example: Masajan (masa=table + can=life, 'life of the table') for a voice-chat QR-menu app. It is extremely important to detect the paradigms first and then dive deep into each of them. I think this is one missing part in our framework — paradigm detection then dive-deep is one enumeration paradigm; category detection then dive-deep is another. This can be applied to the innovation framework we have; it resembles the MTTP pattern we had; and it relates to one part of the traverse loop — but a traverse per paradigm is expensive; maybe the idea is to use the traverse loop to DETECT the paradigms, then for each of them run traverse to generate more coverage and enumeration (horizontally or vertically — not sure which word). One important thing that can be added; not sure exactly where, but it really matters."*

**What kinds of asks this carries (MQ1 verdict-axis — preserved as open):**
- **diagnose** — why is AI bad at naming? (test the hypothesis: it generates within one implicit paradigm because it doesn't detect that multiple paradigms exist);
- **adjudicate-missing** — is detect-paradigms-then-dive-deep genuinely MISSING, or already present in another form (innovate's coverage strategy / MTTP / routelister's breadth-then-depth / traverse loops)?;
- **design-the-addition** — if missing (fully or partly), design how it works;
- **locate** — "not sure exactly where" — the right home: innovate-internal vs orchestration layer vs reuse of existing machinery;
- **relate** — map against the MTTP pattern and the traverse loop;
- **exemplify** — the naming-paradigm list as the live worked case a good answer must handle.

**What action-endpoints are plausible (MQ3 intent-axis, WHAT — preserved as open):**
- add a paradigm-detection step/refinement to the innovate spec;
- define a two-level orchestration pattern (detect paradigms → per-paradigm coverage runs), cost adjudicated;
- produce a conceptual finding only (name and analyze the pattern; no spec edits this round);
- get a working naming methodology (the concrete pain);
- recognize-and-wire — the pattern already exists in the harness; the missing piece is applying it to generative spaces.

## Goal

**Deliverable shape (Deconstruct):** an **adjudicated design finding** — (a) a diagnosis of the AI-naming difficulty (is paradigm-blindness the mechanism?), (b) a verdict on whether detect-paradigms-then-dive-deep is missing from the framework vs already present in another form, (c) the designed shape + location of the addition (innovate refinement / orchestration pattern / recognized-and-wired existing machinery) — grounded in the actually-read `innovate.md` + the MTTP findings + the traverse/routelister shapes, with the naming case worked as the running example. **Kinds:** conceptual analysis + framework-design recommendation (a spec-refinement PROPOSAL may be included; executing spec edits is not this run's deliverable). **Bounds:** the innovation framework + the orchestration layer (traverse / MTTP / routelister) as the design surface; naming as the motivating case (the answer must handle it, not be limited to it); cost-consciousness as a hard evaluation criterion; grounded in real spec text.

**Motivations a good answer might serve (MultiDepth WHY-axis — preserved as open, not chosen):**
- **fix-the-naming-pain** — make AI actually good at naming (hours were spent; the human found Masajan, not the AI);
- **coverage-completeness** — don't miss the best region of a generative space by sampling only one paradigm (innovate's under-exploration risk, one level above mechanisms);
- **advance-the-framework** — a general capability upgrade to the innovation discipline;
- **unify-the-harness** — recognize the recurring enumerate-then-drill meta-pattern (MTTP / routelister / traverse) and make it explicit and reusable;
- **cost-efficiency** — paradigm-level coverage without a full traverse per paradigm.

**Context the answer needs that isn't in the raw input (MQ2 context-need — preserved as open):**
- **verdict:** the innovate spec's actual content (7 mechanisms — 4 Generators + 3 Framers; coverage strategy min 1G+1F / full 7; methodology modes; Inherited Frame Audit; 5-test cycle; failure modes incl. Single-Mechanism Trap and Early Frame Lock); what MTTP actually committed (`devdocs/inquiries/2026-06-08_13-14__major_thinking_space_traversal_patterns_class/finding.md` + `devdocs/inquiries/2026-06-16_14-57__mttp_to_routelister_staged_route_connection/finding.md`); the traverse loop's shape (one pipeline per inquiry; loop-again-with-refined-focus); routelister's two run modes (project-space breadth / concept-space depth — enumerate-then-drill already exists for territories); the naming-session experience (only as narrated: the Masajan case).
- **kinds:** what a **"paradigm"** IS here (approach-family? solution-region? axis-of-variation? evaluation-frame?); paradigm-detection vs category-detection (the user's two variants — two flavors of one enumeration move?); what **"dive deep"** means operationally; the horizontal-vs-vertical word question (breadth across paradigms vs depth within one).
- **stance:** cost-consciousness ("expensive… maybe not so cool"); placement-openness ("not sure exactly where"); the user's conviction (WHETHER feels settled to the user; WHERE/HOW is open); groundedness (read innovate.md fully first — done).

**Negative spec / what would fail (MQ4 boundary-axis):**
- adopting the **uncritically-heavyweight version** (a full traverse per paradigm) without adjudicating cost — flagged by the user as "expensive… maybe not so cool";
- **answering from memory** — the answer must be grounded in the actually-read innovate.md (done: read in full this session);
- *(extrinsic)* spec-hygiene holds for any proposed spec text (self-contained canon; no inquiry-provenance leakage); the harness's enumerate-vs-decide identity boundaries apply to any new enumeration step.

## Considered Articulations

**Item I1 — the paradigm-detection-then-deep-dive gap:**
1. **Innovate-internal reading:** diagnose the naming difficulty as within-one-paradigm sampling, and design a paradigm-detection step inside the innovate framework (enumerate the generative paradigms first, then generate within each) — new phase vs refinement note vs new-mechanism-like element adjudicated.
2. **Orchestration reading:** design the two-level pattern at the loop layer — one run DETECTS the paradigms of a generative space; per-paradigm runs generate coverage within each — with the cost question answered (when per-paradigm depth is worth it; what the lighter version is).
3. **Recognize-and-wire reading:** test whether this is already the harness's breadth-then-depth pattern (routelister's two run modes; MTTP's staged routes; traverse's loop-again) — if yes, the missing piece is WIRING: applying enumerate-then-drill to GENERATIVE spaces rather than territories, and naming that application.
4. **Naming-case-first reading:** produce the concrete naming methodology — the paradigm axes for names (identity-semantics: what-it-does vs outcome; language; morphology: keyword / compound / portmanteau / phonetic mutation; …) — as the worked deliverable, and generalize the framework lesson from it.
5. **Meaning-first reading:** first settle what a "paradigm" IS in this context and how paradigm-detection differs from category-detection — then let the settled meaning decide the location (innovate-internal vs orchestration vs wiring).

## Scope Check

Question covers goal. The Question's asks (diagnose / adjudicate-missing / design / locate / relate / exemplify) map onto the Goal's deliverable parts (a)(b)(c) plus the grounding bounds; the naming case is both evidence (diagnose) and test case (exemplify). No widening needed.

**Specific-vs-pattern check:** the user argues from ONE specific case (naming) but explicitly asks the **broader pattern** question ("this can be applied to the innovation framework"; "one missing part in our framework"). Address the broader pattern — paradigm-detection-then-deep-dive for generative spaces in general — while requiring the answer to concretely handle the naming case as its worked example. Both readings agree here: the naming case is the running example, not the scope.

## Layer Commitment

**Primary layer: MEANING.** The correctness-determining adjudication is what paradigm-detection **IS** as a cognitive operation — what a "paradigm" is in a generative space, whether detect-then-dive-deep is a genuinely distinct operation or the harness's existing enumerate-then-drill pattern (routelister breadth/depth, MTTP, traverse loops) pointed at a new kind of space, and how it relates to innovate's existing coverage machinery (mechanisms ≠ paradigms?). If that meaning is settled wrong, any spec text or orchestration recipe built on it is incoherent.

**Other layers considered, out of scope for THIS run:**
- **Structural** (the exact spec shape: which section of innovate.md, a refinement note vs a phase, the paradigm-catalog format) — real, but designable only after Meaning fixes what the operation is and where it lives.
- **Process** (the orchestration wiring: how a detect-run hands paradigms to per-paradigm runs; gating; cost control) — the user's own sketch, but it presupposes the Meaning answer (what a paradigm-detection run produces).

**Order:** Meaning first (this inquiry) → Structural (the spec/refinement proposal, likely a follow-up execution) → Process (the orchestration recipe) as needed. If this run's Meaning answer is crisp enough, the finding may carry a structural sketch as its recommendation — proposal, not execution.

## Synthesis Trigger

*(Omitted — this inquiry consumes the two MTTP findings as needed CONTEXT (see MQ2 verdict sub-axis) but does not consolidate or roll up prior findings into a canonical output. No inherited-commitments re-test obligation fires via the synthesis path.)*
