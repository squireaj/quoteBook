var app = angular.module('quoteBook');
app.service('localHostService', function() {
var quotes = []
	this.getData = function () {
		quotes = JSON.parse(localStorage["quotes"])
		return quotes;
	}//getData

	this.addData = function (newObj) {

		if((newObj.author)&&(newObj.quote)) {
			quotes.unshift({'text': newObj.quote, 'author': newObj.author})
		}
			localStorage["quotes"] = JSON.stringify(quotes);
			console.log(newObj);

	} //addData

	this.removeData = function (prop) {
		for(var i = 0; i < quotes.length; i++){
			if(prop === quotes[i].text){
				quotes.splice(i, 1);
			}
			console.log("We are Bound!!")
		}
	} //removeData

	this.changeMyShow = function (thing) {
		thing = false;
		thing = !thing
	}
}); //end