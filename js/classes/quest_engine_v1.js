var QuestEngine = function() {
    this.cookiee = true;
    this.quests = [];
    this.progress = 0;
    this.initialize = function () {

    };
    this.proceed = function (val) {
    	if(val == this.quests[this.progress]['answer']) {
    		this.progress++;
    		return true;
    	} else {
    		return false;
    	}
    };
}