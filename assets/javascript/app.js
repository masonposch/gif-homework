$(document).ready(function(){


var topics = ['Happy', ' Yes', 'No', 'Shrug', 'Facepalm', 'Sarcastic', 'Interested', 'Help', 'Crying', 'Ugh', 'Proud', 'Rage', 'Please', 'Hello', 'Goodbye'];

// var queryURL = "http://api.giphy.com/v1/gifs/feqkVgjJpYtjy?api_key=dc6zaTOxFJmzC";

// $.ajax({url: queryURL, method: 'GET'})
// 	 .done(function(response) {
// 	     console.log(response);
// 	});

var displayGIF = function(){

	var emotions = $(this).attr('data-name');
	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + emotions + "&api_key=dc6zaTOxFJmzC";

	$.ajax({url: queryURL, method: 'GET'})
	 .done(function(response) {
	 	console.log(response);

	 	$('#gifSection').empty();

	 	for(var i = 0; i < 15; i++){

		 	var gifDiv = $('<div class="gif col-xs-6 col-sm-6 col-md-3 col-lg-3">');

		 	var gifID = response.data[i].id;
		    
		    var rating = response.data[i].rating;

		    var pRating = $("<p>").text("Rating: " + rating);

		    $(gifDiv).append(pRating);

		    // var theGIF = "http://api.giphy.com/v1/gifs?api_key=dc6zaTOxFJmzC&ids=feqkVgjJpYtjy," + gifID;
		    var theGIF = $('<img>').attr('src', response.data[i].images.fixed_height.url);

		    $(gifDiv).append(theGIF);

		    console.log(rating);

		    console.log(gifID);

		    console.log(theGIF);

		    $('#gifSection').append(gifDiv)

		}

	});

}

var makeButtons = function(){
	$('#theButtons').empty();
	for(var i=0; i < topics.length; i++){
		var a = $('<button>'); 
		a.addClass('emotion');
		a.attr('data-name', topics[i]);
		a.text(topics[i]);
		$('#theButtons').append(a);
	}
}

$('#addButton').on('click', function(){
	var emotions = $('#newButton').val().trim();
	topics.push(emotions);
	makeButtons();
	$('#newButton').val('');
	return false;
});



$(document).on('click', '.emotion', displayGIF);
makeButtons();






















}); //End jQuery











