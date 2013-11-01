

// var width_percent = (window_width)/20;


$(function(){

	//****SETTING CONTAINER WIDTH
	var window_width = $(window).width();
	$(".container").css("width", (window_width * 5));

		//****ANIMATE HOME TEXT

	// $('#name-text').animate({ width: '631px' }, 2000);


	//*****NAV LINKS 

	$("#about-link").on('click', function(){
		$('html, body').animate({
				scrollLeft: ($('#section2').offset().left)
			}, 1000);
	});

	$("#home-link").on('click', function(){
		$('html, body').animate({
				scrollLeft: ($('#section1').offset().left)
			}, 1000);
	});

	$("#projects-link").on('click', function(){
		$('html, body').animate({
				scrollLeft: ($('#section4').offset().left)
			}, 1000);
	});

	$("#contact-link").on('click', function(){
		$('html, body').animate({
				scrollLeft: ($('#section5').offset().left)
			}, 1000);
	});







	// $(".section4").css("width", (width_percent));
	// $(".section5").css("width", (width_percent));

	// $(window).scroll(function(e){
 //      parallax();
 //    });
 //    function parallax() {
 //      var scrolled = $(window).scrollLeft();
 //      $('#section2').css('left', -(scrolled * 0.15) + 'px');
 //    }

	// $window = $(window);
	                
	//    $('#section2').css(function(){
	//      var $section2 = $(this);          
	//       $(window).scroll(function() {
	                    
	// 		// Scroll the background at var speed
	// 		// the xPos is a negative value because we're scrolling it UP!								
	// 		var xPos = -($window.scrollLeft() / $section2.data('speed')); 
			
	// 		// Put together our final background position
	// 		var coords = xPos + 'px 50% ';
	// 		console.log(coords);
	// 		console.log($section2);
	// 		// Move the background
	// 		$section2.css({ backgroundPosition: coords });
			
	// 		}); // window scroll Ends

	//  });



});