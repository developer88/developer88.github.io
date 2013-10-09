var quest_experiment = new function() {
    this.quest = undefined;
    this.name = undefined;
    this.quests = [
    	{ number: 1, question: "Проверка 1?", text: "Проверка текста", answer: 42, start_date: undefined },
    	{ number: 2, question: "Проверка 2?", text: "Проверка текста", answer: 43, start_date: "13.10.2013 15:43:12" }
   	];
    this.initialize = function () {
    	// initialize quest engine
    	this.quest = new QuestEngine();
		this.quest.quests = this.quests;
		this.quest.initialize();

		// initialize page
		//this.bind_something();
		// choose current step
		this.load_quest(this.quest.progress);
    };
    this.bind_something = function () {
    	var self = this;
    	$('#quest-submit-button').click(function(){
    		self.error_message(null, false);
    		var result = self.quest.proceed($('#quest-answer-field').val());
    		if(result == true) {
    			self.load_quest(self.quest.progress);
    		} else {
    			self.error_message("Упс. Что-то где-то как-то!", true);
    		}
    	});
    };
    this.clear_step = function() {
    	$('#quest-answer-field').val();
    	$('#quest-submit-button').val();
    	$('.quest-content').html('');
    	$('.quest-title').html('');
    	$('.quest-user-block').removeClass('hidden');
    	$('.quest-user-block').addClass('hidden');
    };
    this.load_quest = function (id) {
    	this.clear_step();
    	this.error_message(null, false);
    	//
    	var current = this.quests[this.quest.progress];
    	// 
    	if(this.can_start(current['start_date']) == true) {
    		$('.quest-title').html(current['question']);
    		$('.quest-content').html(current['text']);
    		$('.quest-user-block').removeClass('hidden');
    		this.bind_something();
    	} else {
    		$('.quest-user-block').addClass('hidden');
    		var d = this.what_date(current['start_date']);
    		var date_str = current['start_date'] == undefined ? '' : (d.getDate()+"."+(d.getMonth()+1)+"."+d.getFullYear());
    		this.error_message("Пока для тебя ничего нет! Приходи "+date_str, true)
    	}
    };
    this.error_message = function (data, show) {
    	if(show == true) {
    		$('.error-message').removeClass('hidden');
    	} else {
    		$('.error-message').addClass('hidden');
    	}
    	$('.error-message').html(data);
    }
    this.what_date = function (date_str) {
    	var d = new Date();
    	d.setTime(Date.parse(date_str));
    	return d;
    };
    this.can_start = function (date_str) {
    	if(date_str == undefined) { return true; }
    	var quest_date = this.what_date(date_str);
    	var current_date = new Date();
    	if(current_date > quest_date) {
    		return true;
    	} else {
    		return false;
    	}

    }
}

$(function(){
	quest_experiment.initialize();
});