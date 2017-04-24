$(document).ready(function() {

	var videos = ["wFn5nel3j6w", "FLk9677fSYc", "XKu_SEDAykw", "6rxWc-TNIJI", "WPvGqX-TXP0"];

	$('li').click(function() {
		//toggleVideo('close');
		$('li').removeClass('active');
		$(this).addClass('active');
		var index = $(this).parent().children().index(this);
		console.log(index);
		var link = 'https://www.youtube.com/embed/' + videos[index] + '?enablejsapi=1&autoplay=1';
		console.log(link);
		$('iframe').attr('src', link);
	});

	// function toggleVideo(state) {
	// 	var iframe = $('iframe')[0].contentWindow;
	// 	func = state == 'close' ? 'pauseVideo' : 'playVideo';
	// 	iframe.postMessage('{"event":"command","func":"' + func + '","args":""}','*');
	// }


});