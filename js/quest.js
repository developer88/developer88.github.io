var quest_experiment = new function() {
    this.quest = undefined;
    this.name = undefined;
    this.quests = [
    	{ number: 1, question: "Проверка 1?", text: "Проверка текста", answer: 42  }
   	];
    this.initialize = function () {
    	// initialize quest engine
    	this.quest = new QuestEngine();
		this.quest.quests = this.quests;
		this.quest.initialize();

		// initialize page
		this.bind_something();
		// choose current step
		this.load_quest(this.quest.progress);
    };
    this.bind_something = function () {
    	var self = this;
    	$('#quest-submit-button').click(function(){
    		self.error_message(null, false);
    		var result = self.quest.proceed($(this).val());
    		if(result['status'] == true) {
    			self.load_quest(this.quest.progress);
    		} else {
    			self.error_message(result, true);
    		}
    	});
    };
    this.clear_step = function() {
    	$('#quest-answer-field').val();
    	$('#quest-submit-button').val();
    	$('.quest-content').html('');
    	$('.quest-title').html('');
    };
    this.load_quest = function (id) {
    	this.error_message(null, false);
    	//
    	var current = this.quests[this.quest.progress];
    	// 
    	$('.quest-title').html(current['question']);
    	$('.quest-content').html(current['text']);
    };
    this.error_message = function (data, show) {
    	
    }
}

$(function(){
	quest_experiment.initialize();
});