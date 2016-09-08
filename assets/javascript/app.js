$(document).ready(function(){


var topics = ['Happy', ' Yes', 'No', 'Shrug', 'Facepalm', 'Sarcastic', 'Interested', 'Help', 'Crying', 'Ugh', 'Proud', 'Rage', 'Please', 'Hello', 'Goodbye'];

// var queryURL = "http://api.giphy.com/v1/gifs/feqkVgjJpYtjy?api_key=dc6zaTOxFJmzC";

// $.ajax({url: queryURL, method: 'GET'})
// 	 .done(function(response) {
// 	     console.log(response);
// 	});


window.onload = function(){
	for(var i=0; i < topics.length; i++){
		$('#theButtons').append('<button>'+topics[i]+'</button>')
		var a = $('<button>'); 
		a.attr('data-name', topics[i]); // Added a data-attribute
	}
}

function displayGIF(){

	var emotions = $(this).attr('data-name');
	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + emotions + "&api_key=dc6zaTOxFJmzC";

	$.ajax({url: queryURL, method: 'GET'})
	 .done(function(response) {
	 	console.log(response);

	 	var gifDiv = $('<div class="gif col-xs-6 col-sm-6 col-md-3 col-lg-3">');

	 	var gifID = response.id;
	    
	    var rating = response.rating;

	    var pRating = $("<p>").text("Rating: " + rating);

	    gifDiv.append(pRating);

	    var theGIF = "http://api.giphy.com/v1/gifs?api_key=dc6zaTOxFJmzC&ids=feqkVgjJpYtjy," + gifID;

	    gifDiv.append(theGIF);

	});

}

displayGIF();






















}); //End jQuery











