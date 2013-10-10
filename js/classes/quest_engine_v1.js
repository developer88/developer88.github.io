var QuestEngine = function() {
    this.cookiee = true;
    this.quests = [];
    this.progress = 0;
    this.responces = [];
    this.cookie_name = 'quest_resp';
    this.initialize = function () {
        var progress_arr = $.cookie(this.cookie_name);
        if(progress_arr == undefined) { return true; }
        for(i = 0; i < progress_arr.length; i++) {
            if(progress_arr[i] == this.quests[i]['answer']) {
                this.progress = i;
                this.responces.push(progress_arr[i]);
            }
        }
    };
    this.proceed = function (val) {
    	if(val == this.quests[this.progress]['answer']) {
            this.update_progress(val);
    		this.progress++;
    		return true;
    	} else {
    		return false;
    	}
    };
    this.update_progress = function(val) {
        this.responces.push(val);
        $.cookie(this.cookie_name, this.responces, { expires: 365 });
    }
}