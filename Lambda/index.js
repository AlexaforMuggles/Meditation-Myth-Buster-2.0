const Alexa = require('ask-sdk'); 

const data = require('./Data/data.js'); 

const LaunchRequestHandler = {
    canHandle(handlerInput) {
      return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
    },
    handle(handlerInput) {
      const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
      const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
  
      const item = requestAttributes.t(getRandomItem(Object.keys(data.FACTS)));
  
      const speakOutput = requestAttributes.t('WELCOME_MESSAGE', requestAttributes.t('SKILL_NAME'), item);
      const repromptOutput = requestAttributes.t('WELCOME_REPROMPT');
  
      handlerInput.attributesManager.setSessionAttributes(sessionAttributes);
  
      return handlerInput.responseBuilder
        .speak(speakOutput)
        .reprompt(repromptOutput)
        .getResponse();
    },
  };

const GetNewFactHandler = {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request; 
    return request.type === 'LaunchRequest'
        || request.type === 'IntentRequest'
        && request.intent.name === 'GetNewFactHandler'    
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes(); 
        const randomFact = requestAttributes.t('FACTS');
        const speakOutput = requestAttributes.t('GET_FACT_MESSAGE') + randomFact; 

        return handlerInput.responseBuilder 
            .speak(speakOutput)
            .withSimpleCard(requestAttributes.t('SKILL_NAME'), randomFact)
            .getResponse(); 
    }
}; 


const GetNewAnswerHandler = {
    canHandle(handlerInput) {
      return handlerInput.requestEnvelope.request.type === 'IntentRequest'
              && handlerInput.requestEnvelope.request.intent.name === 'AnswerIntent';
    },
    handle(handlerInput) {
      const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
      const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
  
      const itemSlot = handlerInput.requestEnvelope.request.intent.slots.Item;
      let itemName;
      if (itemSlot && itemSlot.value) {
        itemName = itemSlot.value.toLowerCase();
      }
  
      const cardTitle = requestAttributes.t('DISPLAY_CARD_TITLE', requestAttributes.t('SKILL_NAME'), itemName);
      const myData = requestAttributes.t('DATA');
      const data = myData[itemName];
      let speakOutput = "";
  
      if (data) {
        sessionAttributes.speakOutput = data;
        sessionAttributes.repromptSpeech = requestAttributes.t('DATA_REPEAT_MESSAGE');
        handlerInput.attributesManager.setSessionAttributes(sessionAttributes);
  
        return handlerInput.responseBuilder
          .speak(sessionAttributes.speakOutput) 
          .reprompt(sessionAttributes.repromptSpeech)
          .withSimpleCard(cardTitle, data)
          .getResponse();
      }
      else{
        speakOutput = requestAttributes.t('DATA_NOT_FOUND_MESSAGE');
        const repromptSpeech = requestAttributes.t('DATA_NOT_FOUND_REPROMPT');
        if (itemName) {
          speakOutput += requestAttributes.t('DATA_NOT_FOUND_WITH_ITEM_NAME', itemName);
        } else {
          speakOutput += requestAttributes.t('DATA_NOT_FOUND_WITHOUT_ITEM_NAME');
        }
        speakOutput += repromptSpeech;
  
        sessionAttributes.speakOutput = speakOutput; 
        sessionAttributes.repromptSpeech = repromptSpeech;
  
        handlerInput.attributesManager.setSessionAttributes(sessionAttributes);
  
        return handlerInput.responseBuilder
          .speak(sessionAttributes.speakOutput)
          .reprompt(sessionAttributes.repromptSpeech)
          .getResponse();
      }
    }
  };

const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type = 'SessionEndedRequest'; 
    },
    handle(handlerInput) {
        console.log(`Session ended with reason: ${handlerInput.requestEnvelope.request.reason}`) 
        return handlerInput.responseBuilder.getResponse(); 
    }
}

const FallbackHandler = {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
        &&  request.intent.name === 'AMAZON.FallbackIntent'; 
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes(); 
        return handlerInput.responseBuilder
            .speak(requestAttributes.t('FALLBACK_MESSAGE'))
            .reprompt(requestAttributes.t('FALLBACK_REPROMPT'))
            .getResponse() 
    }
}; 

const HelpHandler = {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest'
        &&     request.intent.name === 'AMAZON.HelpIntent';    
        
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        return handlerInput.responseBuilder
            .speak(requestAttributes.t('HELP_MESSAGE'))
            .reprompt(requestAttributes.T('HELP_REPROMPT'))
            .getResponse()
    }
}

const ErrorHandler = {
    canHandle() {
        true; 
    },
    handle(handlerInput, error) {
        console.log(`Error message: ${error.message}`); 
        console.log(`Error stack: ${error.stack}`); 

        const requestAttributes = handlerInput.attributesManager.getRequestAttributes(); 
        
        return handlerInput.responseBuilder
            .speak(requestAttributes.t('ERROR_MESSAGE'))
            .reprompt(requestAttributes.t('ERROR_MESSAGE'))
            .getResponse(); 
    }
}

const ExitHandler = {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' 
        &&     (request.intent.name === 'AMAZON.CancelIntent'
        ||      request.intent.name === 'AMAZON.StopIntent')
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder
            .speak(requestAttributes.t('STOP_MESSAGE'))
            .getResponse()
    }
}

function getRandomItem(arrayOfItems) {
    
    let i = 0;
    i = Math.floor(Math.random() * arrayOfItems.length);
    return (arrayOfItems[i]);
  };


const skillBuilder = Alexa.SkillBuilders.custom();

exports.handler = skillBuilder
  .addRequestHandlers(
    LaunchRequestHandler,
    GetNewFactHandler,
    GetNewAnswerHandler,
    HelpHandler,
    ExitHandler,
    FallbackHandler,
    SessionEndedRequestHandler,
  )
 
  .addErrorHandlers(ErrorHandler)
  .lambda();





//Learnings: 
//Localization, internationalization (i18n). Internationalization (i18n) is the process of planning and implementing products and services so that they can easily be adapted to specific local languages and cultures, a process called localization. I don't need this for this skill as it doesn't have translations. 

//to-do
//


