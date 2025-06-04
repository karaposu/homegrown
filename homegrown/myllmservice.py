# here is myllmservice.py


import logging


# logger = logging.getLogger(__name__)
import asyncio
from llmservice.base_service import BaseLLMService
from llmservice.generation_engine import GenerationRequest, GenerationResult
from typing import Optional, Union
import json


class MyLLMService(BaseLLMService):
    def __init__(self, logger=None, max_concurrent_requests=5):
        super().__init__(
            # logger=logger,
            logger=logging.getLogger(__name__),
            default_model_name="gpt-4o-mini",
            yaml_file_path=None,
            max_rpm=60,
            max_concurrent_requests=max_concurrent_requests,
        )
        # No need for a semaphore here, it's handled in BaseLLMService
    
    
    
    def calculate_user_intent(self, user_input,  history,  request_id: Optional[Union[str, int]] = None) -> GenerationResult:
        
        # dumped_payload =json.dumps(obs_payload, indent=2)
        
        data_for_placeholders = {
            'system_history': history,
            'user_input': user_input,  
        }


        unformatted_prompt =  """ 
             You are an assistant whose job is to understand the user intent based on provided input and system history
             user input: {user_input}
             system history : {system_history}

             your task is to understand user's intent in terms of 

             goal, constraints, and success criteria

             give the output in json format containing only these keys and nothing else


             
            """
        
        # focused_intent: what user wants to achieve with given user input
        #      overall_intent: what user wants to achieve with given user input and given history 
             
        #      what he wants to do 
        #      In one concise sentence, explain what this means in the context of the task.
        
        generation_request = GenerationRequest(
            data_for_placeholders=data_for_placeholders,
            unformatted_prompt=unformatted_prompt,
            model="gpt-4o",
            output_type="str",
            operation_name="step_progress_interpretor",
            request_id=request_id
        )
        
        generation_result = self.execute_generation(generation_request)

        
        return generation_result

    
    def step_progress_interpretor(self,
                               obs_origin: str,
                               obs_payload,
                               request_id: Optional[Union[str, int]] = None) -> GenerationResult:
        

      
        dumped_payload =json.dumps(obs_payload, indent=2)

        data_for_placeholders = {
            'dumped_payload': dumped_payload,
            'obs_origin': obs_origin,  
        }


        unformatted_prompt =  """ 
             You are an assistant whose job is to summarize observations
             Observation origin: {obs_origin}
             Observation payload: {dumped_payload}
             In one concise sentence, explain what this means in the context of the task.
            """
        
        generation_request = GenerationRequest(
            data_for_placeholders=data_for_placeholders,
            unformatted_prompt=unformatted_prompt,
            model="gpt-4o",
            output_type="str",
            operation_name="step_progress_interpretor",
            request_id=request_id
        )
        
        generation_result = self.execute_generation(generation_request)

        
        return generation_result

    

def main():
    """
    Main function to test the categorize_simple method of MyLLMService.
    """
    # Initialize the service
    my_llm_service = MyLLMService()

    my_llm_service.categorize_simple

    # Sample data for testing
    sample_record = "The company reported a significant increase in revenue this quarter."
    sample_classes = ["Finance", "Marketing", "Operations", "Human Resources"]
    request_id = 1
    
    try:
        # Perform categorization
        result = my_llm_service.categorize_simple(
            record=sample_record,
            list_of_classes=sample_classes,
            request_id=request_id
        )

        # Print the result
        print("Generation Result:", result)
        if result.success:
            print("Categorized Content:", result.content)
        else:
            print("Error:", result.error_message)
    except Exception as e:
        print(f"An exception occurred: {e}")


if __name__ == "__main__":
    main()
