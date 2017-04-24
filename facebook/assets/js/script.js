$(document).ready(function(){
	
	$('button').click(function(){
		var postContent = $(this).parent().children();
		var picture = $(this).parent().children('img').attr('src');
		var title = postContent[0].innerHTML;
		var description = postContent[2].innerHTML;
		var link = $(this).parent().attr('id');

		// object ot pass for sharing
		var fbPostData = {
			link: 'http://192.168.1.169/gopal/facebook/#'+link,
			picture: picture,
			name: title,
			description: description
		}

		// call sharePost to share data to facebook
		sharePost(fbPostData);
	});

	// function to share the data
	function sharePost(fbPostData){
		FB.ui({
			method: 'feed',
			link: fbPostData.link,
			picture: fbPostData.picture,
			name: fbPostData.name,
			description: fbPostData.description,
		}, function(response){});
	}
});

