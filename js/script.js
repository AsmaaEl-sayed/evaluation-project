/*global $ , document */

$(document).ready(function(){
	$(".home").mousemove(function(){
		$(".home-list").show();
	});
	$(".home").mouseout(function(){
		$(".home-list").hide();
	});
	
	$(".pages").mousemove(function(){
		$(".pages-list").show();
		});
	
	$(".pages").mouseout(function(){
		$(".pages-list").hide();
	});
	
	$(".owl-carousel").owlCarousel({ 
		items:1,
	  	loop:true,
	  	autoplay:true,
	  	autoplayTimeout : 2500 
	});
	
	$(window).scroll(function(){
		var scrollW = $(this).scrollTop();
		var page2 = $('.pge2').offset().top;
		
		if(scrollW >= page2) {
			$('.header-top').addClass('fixed');
		} else {
			$('.header-top').removeClass('fixed')
		}
	});
	
	$(window).scroll(function(){
		var scr= $(this).scrollTop();
		if(scr >= 400)
		{
			$("#scroll-button").show();
		}
		else
		{
			$("#scroll-button").hide();
		}
	});
	
	
	$("#scroll-button").click(function(){
		$("html , body").animate({
			scrollTop : 0
		},600)
	})
	
});