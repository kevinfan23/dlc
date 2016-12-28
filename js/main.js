$(document).ready(function() {

	$(window).bind('load', function() {
		$('.home .page-container').addClass('fadeInScale');
	});
	
	$('.grid-item').bind('touchstart mousedown', function(e){
	});
		
	/*** Logo and menu effects handlers ***/
	logoHandler();
	menuHandler();	
	toggleConnectOverlay();
	
	/*** Project page hover effects ***/
	$('.grid-item').mouseover(function() {
		$('.grid-overlay').css('opacity', 1);
		$('.cover-type').css('opacity', 1);
		$(this).addClass('active-item');
	});
	
	$('.grid-item').mouseleave(function() {
		$('.grid-overlay').css('opacity', 0);
		$('.cover-type').css('opacity', 0);
		$(this).removeClass('active-item');
	});	
});

/*
function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

*/