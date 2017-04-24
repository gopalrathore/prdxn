$(document).ready(function() {
	for(var i=2;i<$(".mySlides").length+1;i++){
		$("#"+i).hide();
	}
	
	$("#1").show();
	var count = 1;
	
	$("#next").click(function() {
		if(count<$(".mySlides").length) {
			$("#"+count).hide("slide");
			count++;
			$("#"+count).show("slide");
			console.log(count);
		}else{
			$("#"+count).hide("slide");
			count = 1;
			$("#"+count).show("slide");
		}
	}); 

	$("#prev").click(function() {
		if(count>1) {
			$("#"+count).hide("slide"); 
			count--;
			$("#"+count).show("slide");     
			console.log(count);
		}else{
			$("#"+count).hide("slide");
			count = $(".mySlides").length;
			$("#"+count).show("slide");
		}

	});
}(jQuery));






















