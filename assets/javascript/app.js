$(document).ready(function(){


var topics = ['happy', ' yes', 'no', 'shrug', 'facepalm', 'sarcastic', 'interested', 'help', 'crying', 'ugh', 'proud', 'rage', 'please', 'hello', 'goodbye'];


window.onload = function(){
	for(var i=0; i < topics.length; i++){
		$('#theButtons').append('<button>'+topics[i]+'</button>')
	}
}
























}); //End jQuery











