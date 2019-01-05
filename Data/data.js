module.exports = {
    SKILL_NAME: 'Meditation Myth Buster',
    GET_FACT_MESSAGE: 'Here\'s your myth: ',
    WELCOME_MESSAGE: 'Welcome to %s. You can ask a question like, what\'s the answer for a %s? ... Now, what can I help you with?', 
    WELCOME_REPROMPT: 'For instructions on what you can say, please say help me.', 
    HELP_MESSAGE: 'You can say tell me a meditation myth, or, you can ask about a specific issue by saying tell me more about... What can I help you with?',
    HELP_REPROMPT: 'What can I help you with?',
    FALLBACK_MESSAGE: 'The Meditation Myth Buster skill can\'t help you with that.  It can help you discover myths about meditation if you say tell me a myth. What can I help you with?',
    FALLBACK_REPROMPT: 'What can I help you with?',
    ERROR_MESSAGE: 'Sorry, an error occurred.',
    STOP_MESSAGE: 'Enjoy your meditation session.',
    DATA_NOT_FOUND_MESSAGE: 'I\'m sorry, I currently do not know',
    DATA_NOT_FOUND_REPROMPT: 'What else can I help with?',
    DATA_NOT_FOUND_WITH_ITEM_NAME: ' the answer for %s. ',
    DATA_NOT_FOUND_WITHOUT_ITEM_NAME: 'that answer. ',
    DATA_REPEAT_MESSAGE: 'Could you repeat that please?',
    DISPLAY_CARD_TITLE: '%s  - Answer for %s.',
    
      FACTS:
        [
          '<audio src="https://s3.amazonaws.com/meditation-myth-buster-mp3/MMB_10+min+enough_181220.mp3"/>',
          '<audio src="https://s3.amazonaws.com/meditation-myth-buster-mp3/MMB_10+min_181219.mp3"/>',
          '<audio src="https://s3.amazonaws.com/meditation-myth-buster-mp3/MMB_ADHD_181219.mp3"/>',
          '<audio src="https://s3.amazonaws.com/meditation-myth-buster-mp3/MMB_Bazaar_181219.mp3"/>',
          '<audio src="https://s3.amazonaws.com/meditation-myth-buster-mp3/MMB_Concentration_181220.mp3"/>',
          '<audio src="https://s3.amazonaws.com/meditation-myth-buster-mp3/MMB_Fad_181220.mp3"/>',
          '<audio src="https://s3.amazonaws.com/meditation-myth-buster-mp3/MMB_Guru+or+no+guru_181219.mp3"/>',
          '<audio src="https://s3.amazonaws.com/meditation-myth-buster-mp3/MMB_Lifestyle_181220.mp3"/>',
          '<audio src="https://s3.amazonaws.com/meditation-myth-buster-mp3/MMB_Loosing+your+religion_181219.mp3"/>',
          '<audio src="https://s3.amazonaws.com/meditation-myth-buster-mp3/MMB_Nirvana_181219.mp3"/>', 
          '<audio src="https://s3.amazonaws.com/meditation-myth-buster-mp3/MMB_Panacea_181220.mp3"/>',
          '<audio src="https://s3.amazonaws.com/meditation-myth-buster-mp3/MMB_Progress_181219.mp3"/>',
          '<audio src="https://s3.amazonaws.com/meditation-myth-buster-mp3/MMB_Zen_181220.mp3"/>',
          '<audio src="https://s3.amazonaws.com/meditation-myth-buster-mp3/MMB_alternatives_181219.mp3"/>',
          '<audio src="https://s3.amazonaws.com/meditation-myth-buster-mp3/MMB_ants_181219.mp3"/>',
          '<audio src="https://s3.amazonaws.com/meditation-myth-buster-mp3/MMB_boredom_181219.mp3"/>',
          '<audio src="https://s3.amazonaws.com/meditation-myth-buster-mp3/MMB_conflate_181219.mp3"/>',
          '<audio src="https://s3.amazonaws.com/meditation-myth-buster-mp3/MMB_cushion_181219.mp3"/>',
          '<audio src="https://s3.amazonaws.com/meditation-myth-buster-mp3/MMB_eyes+open_181219.mp3"/>',
          '<audio src="https://s3.amazonaws.com/meditation-myth-buster-mp3/MMB_hard_181219.mp3"/>',
          '<audio src="https://s3.amazonaws.com/meditation-myth-buster-mp3/MMB_meditation+police_181219.mp3"/>',
          '<audio src="https://s3.amazonaws.com/meditation-myth-buster-mp3/MMB_no+time_181219.mp3"/>',
          '<audio src="https://s3.amazonaws.com/meditation-myth-buster-mp3/MMB_noise_181219.mp3"/>',
          '<audio src="https://s3.amazonaws.com/meditation-myth-buster-mp3/MMB_ok+with+what+is_181219.mp3"/>',
          '<audio src="https://s3.amazonaws.com/meditation-myth-buster-mp3/MMB_religion_181219.mp3"/>',
          '<audio src="https://s3.amazonaws.com/meditation-myth-buster-mp3/MMB_selfish_181219.mp3"/>',
          '<audio src="https://s3.amazonaws.com/meditation-myth-buster-mp3/MMB_start+when+things+are+good_181219.mp3"/>',
          '<audio src="https://s3.amazonaws.com/meditation-myth-buster-mp3/MMB_still+flawed_181220.mp3"/>',
          '<audio src="https://s3.amazonaws.com/meditation-myth-buster-mp3/MMB_think+nothing_181219.mp3"/>',
          '<audio src="https://s3.amazonaws.com/meditation-myth-buster-mp3/MMB_thinking_181219.mp3"/>'
        ],
  };

  //to-do
  // change the welcome message
  // figure out how to hook up a specific fact with a specific slot 

  // Challenge: 
  //  How do I give the data a slot name without making the whole file invalid? 

