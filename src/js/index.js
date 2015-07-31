$(function(){
	$(window).resize(function(){
		var windowHeight=$(window).height();
		
		$('.layout').css({
			height:windowHeight
		});
	}).resize();
});