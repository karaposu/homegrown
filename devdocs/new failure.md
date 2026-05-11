 
 AI models has parallelism via subagent tendencies when doing task. But this can have degreeding condequences for MVL loops. 

Thats why 
- make sure u use the skill files fully with their references fully read. DO not use parallelism at all.
  Run this whole skill pipeline sequenatially one after another. 
- DO not read all relevat skills at once. Follow instructions sequentially as create state, load explore, do explore, load sense making, do sense making ... etc
- Do not front-loaded the specs, this violates the execution shape we want
- Correct order is inquiry state first, then load only Exploration execute Exploration, then move to Sensemaking, and so on.
- Dont use paralelism related tools like multi_tool_use.parallel or batch independent reads. 
- It is okay if MVL run takes context. It supposed to be. 