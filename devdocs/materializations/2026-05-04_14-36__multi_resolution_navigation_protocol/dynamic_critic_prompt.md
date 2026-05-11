# Dynamic Critic Prompt: Multi-Resolution Navigation Protocol

Critique the plan for creating `homegrown/protocols/multi_resolution_navigation.md`.

Focus on these risks:

- Does the plan accidentally describe breadth as the problem rather than untracked expansion execution?
- Does it preserve Navigation's route-space coverage requirement?
- Does `batch_size` mean current-run materialization only?
- Are unrun candidates preserved and runnable later?
- Does AI top-N remain scheduling rather than final selection?
- Does the protocol avoid becoming an implemented runner?
- Is the write-set narrow and safe?
- Is validation sufficient given that `tools/structural_check.sh` is missing?

Return High, Medium, and Low risks with mitigations.
