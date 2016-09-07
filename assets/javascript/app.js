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
	var queryURL = "http://api.giphy.com/v1/gifs/feqkVgjJpYtjy?api_key=dc6zaTOxFJmzC";

	$.ajax({url: queryURL, method: 'GET'})
	 .done(function(response) {

	 	var gifDiv = $('<div class="gif">')
	    
	    var rating = response.rating;




	







	});

}

displayGIF();






















}); //End jQuery











