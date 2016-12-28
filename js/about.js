/*** Variable ***/
 var navigationItems = $('.learn-more a');

$(document).ready(function() {
	
	/*** Logo and menu effects handlers ***/
	logoHandler();
	menuHandler();
	toggleConnectOverlay();
	
	$('#design-selector').on('click', function() {
		document.cookie = "selector=design";
	});
	
	$('#code-selector').on('click', function() {
		document.cookie = "selector=code";
	});


	//smooth scroll to the section
	navigationItems.on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });	 
});

/*** Helper Functions ***/
				
// Update navigation dots and labels
function updateNavigation() {
	contentSections.each(function(){
		$this = $(this);
		var activeSection = $('.sidenav-item a[href="#'+$this.attr('id')+'"]').data('number') - 1 ;
		if ( ( $this.offset().top - $(window).height()/2 < $(window).scrollTop() ) && ( $this.offset().top + $this.height() - $(window).height()/2 > $(window).scrollTop() ) ) {
			navigationItems.eq(activeSection).addClass('is-selected');
		}else {
			navigationItems.eq(activeSection).removeClass('is-selected');
		}
	});
}

// Smooth scroll actions
function smoothScroll(target) {
    $('body,html').animate(
    	{'scrollTop':target.offset().top},
    	400
    );
}

// Check if element is in the viewport
function isElementInViewport(elem) {
    var $elem = $(elem);

    // Get the scroll position of the page.
    var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
    var viewportTop = $(scrollElem).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    // Get the position of the element on the page.
    var elemTop = Math.round( $elem.offset().top );
    var elemBottom = elemTop + $elem.height();

    return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
}