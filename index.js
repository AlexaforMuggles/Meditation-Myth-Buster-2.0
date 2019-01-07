const Alexa = require('ask-sdk-core'); 
const i18n = require('i18next');
const sprintf = require('i18next-sprintf-postprocessor');

const data = require('./Data/data.js'); 
const {languageStrings} = require('./Data/data.js'); 

const LaunchRequestHandler = {
     canHandle(handlerInput) {
        console.log('LINE 7' + JSON.stringify(this.event));
        return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
       
     },
     handle(handlerInput) {
       const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
       const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
  
       const item = requestAttributes.t(getRandomItem(Object.keys(data.FACTS)));
  
       const speakOutput = requestAttributes.t('WELCOME_MESSAGE', requestAttributes.t('SKILL_NAME'), item);
       const repromptOutput = requestAttributes.t('WELCOME_REPROMPT');
  
       handlerInput.attributesManager.setSessionAttributes(sessionAttributes);
       console.log('LINE 21' + JSON.stringify(this.event));

  
       return handlerInput.responseBuilder
         .speak(speakOutput)
         .reprompt(repromptOutput)
         .getResponse();
     },
   };

const GetNewFactIntent = {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request; 
        console.log("LINE 34 " + JSON.stringify(this.event));
    return request.type === 'IntentRequest'
        && request.intent.name === 'GetNewFactIntent'   
    
 
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes(); 
        const randomFact = requestAttributes.t('FACTS');
        const speakOutput = requestAttributes.t('GET_FACT_MESSAGE') + randomFact; 
        console.log("LINE 45 " + JSON.stringify(this.event));

        return handlerInput.responseBuilder 
            .speak(speakOutput)
            .withSimpleCard(requestAttributes.t('SKILL_NAME'), randomFact)
            .getResponse(); 
    }
}; 


const GetNewAnswerIntent = {
     canHandle(handlerInput) {
        console.log("THIS.EVENT = " + JSON.stringify(this.event));
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
               && handlerInput.requestEnvelope.request.intent.name === 'GetNewAnswerIntent';
     },
     handle(handlerInput) {
       const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
       const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
       console.log("THIS.EVENT = " + JSON.stringify(this.event));
  
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
         console.log("THIS.EVENT = " + JSON.stringify(this.event));  
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
        console.log("THIS.EVENT = " + JSON.stringify(this.event));
         const repromptSpeech = requestAttributes.t('DATA_NOT_FOUND_REPROMPT');
         if (itemName) {
           speakOutput += requestAttributes.t('DATA_NOT_FOUND_WITH_ITEM_NAME', itemName);
           console.log("THIS.EVENT = " + JSON.stringify(this.event));
         } else {
           speakOutput += requestAttributes.t('DATA_NOT_FOUND_WITHOUT_ITEM_NAME');
           console.log("THIS.EVENT = " + JSON.stringify(this.event));
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
        console.log("THIS.EVENT = " + JSON.stringify(this.event));
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
        console.log("THIS.EVENT = " + JSON.stringify(this.event));
    return request.type === 'IntentRequest'
        &&  request.intent.name === 'AMAZON.FallbackIntent'; 
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes(); 
        console.log("THIS.EVENT = " + JSON.stringify(this.event));
        return handlerInput.responseBuilder
            .speak(requestAttributes.t('FALLBACK_MESSAGE'))
            .reprompt(requestAttributes.t('FALLBACK_REPROMPT'))
            .getResponse() 
    }
}; 

const HelpHandler = {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        console.log("THIS.EVENT = " + JSON.stringify(this.event));
        return request.type === 'IntentRequest'
        &&     request.intent.name === 'AMAZON.HelpIntent';    
        
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        console.log("THIS.EVENT = " + JSON.stringify(this.event));
        return handlerInput.responseBuilder
            .speak(requestAttributes.t('HELP_MESSAGE'))
            .reprompt(requestAttributes.T('HELP_REPROMPT'))
            .getResponse()
    }
}

const ErrorHandler = {
    canHandle() {
        true; 
        console.log("THIS.EVENT = " + JSON.stringify(this.event));
    },
    handle(handlerInput, error) {
        console.log(`Error message: ${error.message}`); 
        console.log(`Error stack: ${error.stack}`); 

        const requestAttributes = handlerInput.attributesManager.getRequestAttributes(); 
        console.log("THIS.EVENT = " + JSON.stringify(this.event));
        
        return handlerInput.responseBuilder
            .speak(requestAttributes.t('ERROR_MESSAGE'))
            .reprompt(requestAttributes.t('ERROR_MESSAGE'))
            .getResponse(); 
    }
}

const ExitHandler = {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        console.log("THIS.EVENT = " + JSON.stringify(this.event));
        return request.type === 'IntentRequest' 
        &&     (request.intent.name === 'AMAZON.CancelIntent'
        ||      request.intent.name === 'AMAZON.StopIntent')
    },
    handle(handlerInput) {
        console.log("THIS.EVENT = " + JSON.stringify(this.event));
        return handlerInput.responseBuilder
            .speak(requestAttributes.t('STOP_MESSAGE'))
            .getResponse()
    }
}

const LocalizationInterceptor = {
    process(handlerInput) {
      const localizationClient = i18n.use(sprintf).init({
        lng: handlerInput.requestEnvelope.request.locale,
        overloadTranslationOptionHandler: sprintf.overloadTranslationOptionHandler,
        resources: languageStrings,
        returnObjects: true
      });
  
      const attributes = handlerInput.attributesManager.getRequestAttributes();
      attributes.t = function (...args) {
        return localizationClient.t(...args);
      };
    },
  };

function getRandomItem(arrayOfItems) {
    console.log("THIS.EVENT = " + JSON.stringify(this.event));
     let i = 0;
     i = Math.floor(Math.random() * arrayOfItems.length);
     return (arrayOfItems[i]);
   };


const skillBuilder = Alexa.SkillBuilders.custom();

exports.handler = skillBuilder
  .addRequestHandlers(
    LaunchRequestHandler,  
    GetNewFactIntent,
    GetNewAnswerIntent,
    HelpHandler,
    ExitHandler,
    FallbackHandler,
    SessionEndedRequestHandler,
  )
 
  .addRequestInterceptors(LocalizationInterceptor)
  .addErrorHandlers(ErrorHandler)
  .lambda();

  //Debugging to do: 
  // 1. remove the question handler (comment out) and check if it works --> remember to re-insert the exports.handler later
  // 2. If it doesn't comment out the launch handler and check if it works --> rememember to activate the randomItem function later
  // 3. Insert console.log("THIS.EVENT = " + JSON.stringify(this.event)) in every handler

  // removed this from line 34 35 request.type === 'LaunchRequest'|| 


  


