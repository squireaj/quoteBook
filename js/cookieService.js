var app = angular.module('quoteBook');
app.service('cookieService', function() {

	var createCookie = function(name, value, days) {
    var expires;
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    else {
        expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) {
                c_end = document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
}
var quotes = [
    
  ]
	this.getData = function () {
		var json_str = getCookie('myCookie');
		quotes = JSON.parse(json_str);
		return quotes
	}//getData

	this.addData = function (newObj) {
	/* addData takes in a data object, verifies that data object has the proper keys (just text and author), then adds that object to the end of the quotes array*/
		if((newObj.author)&&(newObj.quote)) {
			quotes.unshift({'text': newObj.quote, 'author': newObj.author})
		}
	//Save to cookie
			var cookieString = JSON.stringify(quotes);
			createCookie('myCookie', cookieString)
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