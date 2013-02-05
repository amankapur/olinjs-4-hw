$(function(){
	$("#newtwit").on('click', function(){
		var twit = $("#twit-box").val();
		if (twit.length > 140) {
			$('.error').show();
		}
		else
			$.post("/tweets/", {twit: twit}, function(err, data){});
	});
	$("#loginbutton").on('click', function(){
		window.location = "/users/new";
		
	});
 	
 	// Initially, hide them all
		 hideAllMessages();
		 
		
		 // When message is clicked, hide it
		 $('.message').click(function(){			  
				  $(this).fadeOut('slow', function(){
				  	$('.input').val("");
				  });
				  $('.input').val("");
		  });		 
		 
	setInterval(update, 500);
});



var update = function(){
	//console.log('hi');
	$.get('/alltwits', function(data){
		console.log(data);
		$('#twitlist').html(data);
	});
}

function hideAllMessages()
{
	$(".error").hide();
}
