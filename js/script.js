$(function(){

	var $window = $(window);
	var slide = $('.js-slide');
	var sectionHeight = $(window).height();
	var slideHeight = $(slide).height();


	slide.height(sectionHeight);
	
	var scrollingScreen = false;
	$(".js-slide").mousewheel(function(event, delta) {
	    if ( !scrollingScreen ) {
	        scrollingScreen = true; 
	        // prevent call
	        var top = $("body").scrollTop() || 
	                  $("html").scrollTop(); 
	        // Chrome places overflow at body, Firefox places whacks at html...
	        // Finds slide headers above/below the current scroll top
	        var candidates = $(".js-slide").filter(function() {
	            if ( delta < 0 )
	                return $(this).offset().top > top + 1;
	            else
	                return $(this).offset().top < top - 1;
	        });
	        // one or more slides found? Update top
	        if ( candidates.length > 0 ) {
	            if ( delta < 0 )
	                top = candidates.first().offset().top;
	            else if ( delta > 0 )
	                top = candidates.last().offset().top;
	        }
	        // Perform animated scroll to the right place
	        $("html,body").animate({ scrollTop:top }, "easeInOutQuint", function() {
	        	$('.container h2').fadeIn();
	        	// Release call
	            scrollingScreen = false; 
	        });
	    }
	    return false; 
	});​

	//fluff

	// Create HTML5 elements for IE ('cause it's bad)
	document.createElement("article");
	document.createElement("section");

	//parallax
	$('section[data-type="background"]').each(function(){
		var $parallax = $(this);
		$(window).scroll(function(){
			var yPos = -($window.scrollTop() / $parallax.data('speed'));
			var coords = '20%'+yPos+'px';
			$parallax.css({backgroundPosition: coords});

		});

	});

});