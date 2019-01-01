const Alexa = require('ask-sdk'); 
const i18n = require('i18next'); //this is used to generate the random bit
const sprintf = require('i18next-sprintf-postprocessor'); 

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

const GetNewQuestionHandler = {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
    return request.type === 'LaunchRequest'
        || request.type ===  'IntentRequest'
        && request.intent.name === 'GetNewQuestionHandler'
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes(); 
        const answer = requestAttributes.t(''); // not sure what to add here, look up sample 
        const speakOutput = requestAttributes.t(''); // not sure what to add here

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .withSimpleCard(requestAttributes.t('SKILL_NAME'), answer)
            .getResponse(); 
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


// add additional code
// look up how-to sample code to merge it
// separate facts into a separate file
// separate language into a separate file



