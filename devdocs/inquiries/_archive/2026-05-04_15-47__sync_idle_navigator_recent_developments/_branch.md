# Branch: sync_idle_navigator_recent_developments
## Question
How should Homegrown sync an idle, previously warmed Navigator session with recent project developments so Navigation sees new directions without rerunning the full warm-up routine?
## Goal
A good answer should identify what is still missing from the Navigation implementation, decide whether the missing piece is fresh context load logic, and define a practical sync shape that can be used now while scaling later.
## Scope Check
Question covers goal. The question asks directly about the stale-session problem and the mechanism needed to make Navigation consume recent developments before producing a new map.

