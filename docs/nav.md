navigation is next traget of this codebase


we trid to define it many times and now it is refined enough


Navigation is about enumerating next directions with possible type of movemenets in thinking space. 

LLM limitations make LLM enumarations bounded to output context lenght.  To over come this we use staged generation. Where first we generate big directions and on a second pass of each big direction we generate middle directions and third pass generates small ones.  This way output context lenght limitations is expelled. 

There are 2 types of expansions, firts one is what we descripbed above, second one is about filling missing concepts and not expanding really. 

Navigation requires certain level of comprehending. Without that navigation cant give us meaningful enumerations. 

Navigation works in isolated AI session. 


every direction in Navigation is a concept. what navigation does is 2 things. 
concept-mapping and concept-map status generation and make the directions explicit. 


regenerate concept-map per /navigation invocation is bad call. Project-maintained concept-map artifact, regenerated episodically, referenced by warming is cost-affordable and is the right default.


everything in navigation is concept.  



