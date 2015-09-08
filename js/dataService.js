var app = angular.module('quoteBook');
app.service('myService', function() {
var quotes = [
  ]
	this.getData = function () {
		quotes = JSON.parse(localStorage["quotes"]);
		console.log(quotes)
		return quotes;
	}//getData

	this.addData = function (newObj) {
	/* addData takes in a data object, verifies that data object has the proper keys (just text and author), then adds that object to the end of the quotes array*/
		if((newObj.author)&&(newObj.quote)) {
			quotes.push({'text': newObj.quote, 'author': newObj.author})
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

;


}); //end