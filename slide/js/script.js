$(document).ready(function(){

	$(".list li").click(function(){

		
		var link = $(this).children().children().attr("src");

		if($(this).children().children().is("img")){
			showBox(link,1);
		}else{
			showBox(link,0);
		}
		
	});
	$(".light").click(function(){
		hideBox();
	});
	$(".close").click(function(){
		hideBox();
	});

	function showBox(link,what){
		console.log(what);
		$(".light").fadeIn("slow");
		$(".light-box").fadeIn("slow");
		if(what==1){
			$(".image iframe").hide();
			$(".image img").show();
			$(".image img").attr('src', link);
		}else if(what==0){
			$(".image img").hide();
			$(".image iframe").show();
			$(".image iframe").attr('src', link+"&autoplay=1");
		}
		
		$(".container").addClass('no-scroll');
	}

	function hideBox(){
		$(".light-box").fadeOut(100);
		$(".light").fadeOut(100);
		$(".container").removeClass('no-scroll');
	}
})