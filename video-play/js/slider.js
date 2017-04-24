$(document).ready(function() {
	var count = 0;
	var move = [];
	var totalSlides = $('.slider li').length;
	var slideWidth = $('.slider ul').width();
	var slideTabCount = 1;


	var slide = $('.slider li');
	slide.children().css('width', slideWidth);

	for (i = 0; i < totalSlides; i++) {
		move[i] = i * slideWidth;
	}

	$(window).resize(function() {
		slideWidth = $('.slider ul').width();

		slide = $('.slider li');
		slide.children().css('width', slideWidth);

		for (i = 0; i < totalSlides; i++) {
			move[i] = i * slideWidth;
		}
	});

	$('.next').click(function() {

		$(".bottom-slider li:nth-child("+(count+1)+")").removeClass('active-slide');
		count++;
		$(".bottom-slider li:nth-child("+(count+1)+")").addClass('active-slide');
		if (count > totalSlides - 1) {

			slide.css('transform', 'translateX(0)');
			count = 0;

			$(".bottom-slider li:nth-child("+(count+1)+")").addClass('active-slide');
		} else {
			slide.css('transform', 'translateX(-' + move[count] + 'px)');
		}

	});

	$('.prev').click(function() {
		$(".bottom-slider li:nth-child("+(count+1)+")").removeClass('active-slide');
		count--;
		$(".bottom-slider li:nth-child("+(count+1)+")").addClass('active-slide');
		if (count < 0) {
			$(".bottom-slider li:nth-child("+(count+1)+")").removeClass('active-slide');
			slide.css('transform', 'translateX(-' + move[totalSlides - 1] + 'px)');
			count = totalSlides - 1;
			$(".bottom-slider li:nth-child("+(count+1)+")").addClass('active-slide');
		} else {
			slide.css('transform', 'translateX(-' + move[count] + 'px)');
		}

	});

	$('.bottom-slider li').click(function() {
		var slideCount = $(this).parent('ul').children().index(this);

		console.log(slideCount);
		$(".bottom-slider li:nth-child("+(count+1)+")").removeClass('active-slide');
		count = slideCount;
		$(".bottom-slider li:nth-child("+(count+1)+")").addClass('active-slide');
		// if (count > totalSlides - 1) {

		// 	slide.css('transform', 'translateX(0)');
		// 	count = 0;

		// 	$(".bottom-slider li:nth-child("+(count+1)+")").addClass('active-slide');
		// } else {
			slide.css('transform', 'translateX(-' + move[count] + 'px)');
		// }

	});

	$(".slider li").click(function(){
		
		var link = $(this).children().children().attr("src");
		console.log(link);
		showBox(link);
		
	});

	$(".light").click(function(){
		hideBox();
	});
	$(".close").click(function(){
		hideBox();
	});

	function showBox(link){
		$(".light").fadeIn("slow");
		$(".light-box").fadeIn("slow");
		$(".image img").show();
		$(".image img").attr('src', link);		
	}

	function hideBox(){
		$(".light-box").fadeOut(100);
		$(".light").fadeOut(100);
	}

});