function main() {

	(function () {
	'use strict';

		//smooth scroll
		$(function() {
          $('.page-scroll').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
              if (target.length) {
                $('html, body').animate({
                  scrollTop: target.offset().top
                }, 1000);

              return false;
              }
            }
          });
        });

	//navigation
	// $(function() {
	// 	var header = $("nav");
	// 		$(window).scroll(function() {
	// 			var scroll = $(window).scrollTop();
	//
	// 			if (scroll >= 500) {
	// 				// $('.navbar-default').addClass('on');
	// 				// $('.dropdown-menu').addClass('dropdown-on');
	// 				// $('#fontlinks').addClass('font-size-toggle-on'); //font toggle
	// 				// $('#fontlinks').addClass('font-size-toggle'); //font toggle
	// 				// $('.navigation-move').addClass('navigation-move-on');
	// 				// $('#navbar-logo').addClass('navbar-logo-on');
	// 				// $('#navbar-logo').removeClass('navbar-logo');
	// 				// $('#menu-ph').fadeOut(300);
	// 			} else {
	// 				$('.navbar-default').removeClass('on');
	// 				$('.dropdown-menu').removeClass('dropdown-on');
	// 				$('#fontlinks').removeClass('font-size-toggle-on'); //font toggle
	// 				$('#fontlinks').addClass('font-size-toggle'); //font toggle
	// 				$('.navigation-move').removeClass('navigation-move-on');
	// 				$('#navbar-logo').removeClass('navbar-logo-on');
	// 				$('#navbar-logo').addClass('navbar-logo');
	// 				$('#menu-ph').fadeIn(500);
	// 			}
	// 		});
	// 	});

	}());
}

main();

//removing transitions from isotope
// if ($(".grid")[0]){
// 	$('.grid').isotope({
// 		itemSelector: '.grid-item',
// 		transitionDuration: 0
// });
// };

//font size toggle
$(document).ready(function() {
	$('#incfont').click(function(){
		var curSize = parseInt($('.content p, .content a, p.content, a.content, .content span, span.content').css('font-size')) + 1;
		if(curSize<=17) {
			$('.content p, .content a, p.content, a.content, .content span, span.content').css('font-size', curSize);
		}
	});

	$('#decfont').click(function(){
		var curSize = parseInt($('.content p, .content a, p.content, a.content, .content span, span.content').css('font-size')) - 1;
		if(curSize>=14) {
			$('.content p, .content a, p.content, a.content, .content span, span.content').css('font-size', curSize);
		}
	});
});

//Form submit for contact page
$(document).ready(function(){
	$('#contact-submit').on('click', function() {
		$("#contact-form").formvalidation();
	});
});

//Form submit Orbiter - homepage
$(document).ready(function(){
	$('#orbiter-submit').on('click', function() {
		$("#homepage-orbiter-form").formvalidation();
	});
});

//Trigger file upload on button click on Careers page
$(document).ready(function(){
	$('button#upload-cv-trigger').on('click', function() {
        alert("clicked!");
		$('input.custom-file-input').trigger("click");
	});
});

$(document).ready(function(){
    $('input[type="file"]').change(function(e){
        var fileName = e.target.files[0].name;
        $('span.jsreplace').html(fileName);
    });
});

//Careers Page - apply for another position
$(document).ready(function(){
	$( "button.add-another-job" ).click(function() {
		$( ".another-job" ).fadeToggle( "slow", "linear" );
		$( "button.add-another-job" ).toggleClass( "add-another-job-red" );
		return false;
	});
});

$(document).ready(function(){
	$('button.add-another-job').click(function(){
		$('.add-another-job').toggleHTML(
		'<i class="fa fa-plus" aria-hidden="true"></i>&nbsp;&nbsp;Apply for another position',
		'<i class="fa fa-times" aria-hidden="true"></i>&nbsp;&nbsp;Remove second position');
	});
});

//Locations Pages, showing whole button on hover

//Hospital
$(document).ready(function(){
	$("#thumbnail-list button.hospital span").mouseover(function() {
		$(this).fadeOut(300, function() {
			$(this).html("Hospital").fadeIn(300);
		});
	});
});

$(document).ready(function(){
	$("#thumbnail-list button.hospital span").mouseout(function() {
		$(this).fadeOut(300, function() {
			$(this).html("Ho").fadeIn(300);
		});
	});
});

//Respite
$(document).ready(function(){
	$("#thumbnail-list button.respite span").mouseover(function() {
		$(this).fadeOut(300, function() {
			$(this).html("Respite").fadeIn(300);
		});
	});
});

$(document).ready(function(){
	$("#thumbnail-list button.respite span").mouseout(function() {
		$(this).fadeOut(300, function() {
			$(this).html("Re").fadeIn(300);
		});
	});
});

//Retirement Village
$(document).ready(function(){
	$("#thumbnail-list button.retirement-village span").mouseover(function() {
		$(this).fadeOut(300, function() {
			$(this).html("Retirement Village").fadeIn(300);
		});
	});
});

$(document).ready(function(){
	$("#thumbnail-list button.retirement-village span").mouseout(function() {
		$(this).fadeOut(300, function() {
			$(this).html("RV").fadeIn(300);
		});
	});
});

//Young Disabled
$(document).ready(function(){
	$("#thumbnail-list button.young-disabled span").mouseover(function() {
		$(this).fadeOut(300, function() {
			$(this).html("Young/Disabled").fadeIn(300);
		});
	});
});

$(document).ready(function(){
	$("#thumbnail-list button.young-disabled span").mouseout(function() {
		$(this).fadeOut(300, function() {
			$(this).html("YD").fadeIn(300);
		});
	});
});

//Palliative
$(document).ready(function(){
	$("#thumbnail-list button.palliative span").mouseover(function() {
		$(this).fadeOut(300, function() {
			$(this).html("Palliative").fadeIn(300);
		});
	});
});

$(document).ready(function(){
	$("#thumbnail-list button.palliative span").mouseout(function() {
		$(this).fadeOut(300, function() {
			$(this).html("Pa").fadeIn(300);
		});
	});
});

//Resthome
$(document).ready(function(){
	$("#thumbnail-list button.rest-home span").mouseover(function() {
		$(this).fadeOut(300, function() {
			$(this).html("Rest Home").fadeIn(300);
		});
	});
});

$(document).ready(function(){
	$("#thumbnail-list button.rest-home span").mouseout(function() {
		$(this).fadeOut(300, function() {
			$(this).html("RH").fadeIn(300);
		});
	});
});

//Dementia
$(document).ready(function(){
	$("#thumbnail-list button.dementia span").mouseover(function() {
		$(this).fadeOut(300, function() {
			$(this).html("Dementia").fadeIn(300);
		});
	});
});

$(document).ready(function(){
  $("#thumbnail-list button.dementia span").mouseout(function() {
    $(this).fadeOut(300, function() {
      $(this).html("De").fadeIn(300);
    });
  });
});

// Changing text increase/decrease position when collapse is called
$(document).ready(function() {
  if ($(window).width() < 800) {
    $('button.navbar-toggle').click(function(){
      var clicks = $(this).data('clicks');
      if (clicks) {
        $('.font-size-toggle').removeClass('font-size-toggle-fixer');
      } else {
        $('.font-size-toggle').addClass('font-size-toggle-fixer');
      }
      $(this).data("clicks", !clicks);
    });
  } else {
    $('.font-size-toggle').removeClass('font-size-toggle-fixer');
  }
});

// Facility Page Image Carousel
$(document).ready(function() {
    $("#facility-carousel").carousel({
			interval: 10000
	});
});

//Facility Scroll to Map and Facility Manager Quote
$("button.view-village").click(function (){
  $('html, body').animate({
    scrollTop: $(".location").offset().top -200 },
  2000);
});

$("button.see-on-map").click(function (){
    $('html, body').animate({
        scrollTop: $(".location").offset().top -200 },
    2000);
});

$("button.find-out-about-staff").click(function (){
    $('html, body').animate({
        scrollTop: $(".facility-staff-quote").offset().top -100 },
    2000);
});

//Facility Back to Top button
$(".to-top button").click(function (){
    $('html, body').animate({
        scrollTop: $("body").offset().top },
    2000);
});

$(document).scroll(function() {
	var scroll = $(this).scrollTop();
	if (scroll >= 200) {
		$( ".to-top button" ).fadeIn( "slow", function() {
			// Animation complete
		});
	} else {
		$( ".to-top button" ).fadeOut( "fast", function() {
			// Animation complete
		});
	}
});

// Hiding/Showing 'No Results Found' in Facility Filter
$("button#ff-young-disabled").click(function(){
	$(".start-hidden-yd").removeClass("start-hidden-yd");
});

$("button#ff-dementia").click(function(){
	$(".start-hidden-d").removeClass("start-hidden-d");
});

// CSS Persist on Filter Buttons
$("button#ff-hospital").click(function(){
	$("button").removeClass("respite-toggle rest-home-toggle palliative-toggle dementia-toggle young-disabled-toggle");
	$(this).addClass("hospital-toggle");
});

$("button#ff-respite").click(function(){
	$("button").removeClass("hospital-toggle rest-home-toggle palliative-toggle dementia-toggle young-disabled-toggle");
	$(this).addClass("respite-toggle");
});

$("button#ff-rest-home").click(function(){
	$("button").removeClass("hospital-toggle respite-toggle palliative-toggle dementia-toggle young-disabled-toggle");
	$(this).addClass("rest-home-toggle");
});

$("button#ff-palliative").click(function(){
	$("button").removeClass("hospital-toggle respite-toggle rest-home-toggle dementia-toggle young-disabled-toggle");
	$(this).addClass("palliative-toggle");
});

$("button#ff-dementia").click(function(){
	$("button").removeClass("hospital-toggle respite-toggle rest-home-toggle palliative-toggle young-disabled-toggle");
	$(this).addClass("dementia-toggle");
});

$("button#ff-young-disabled").click(function(){
	$("button").removeClass("hospital-toggle respite-toggle rest-home-toggle palliative-toggle dementia-toggle");
	$(this).addClass("young-disabled-toggle");
});

// Clear all removing CSS persist and hiding 'no results found'
$("button.ff-clear").click(function(){
	$("button").removeClass("hospital-toggle respite-toggle rest-home-toggle palliative-toggle dementia-toggle young-disabled-toggle");
	$(".no-results-young-disabled").addClass("start-hidden-yd");
	$(".no-results-dementia").addClass("start-hidden-d");
});

// Moving into Aged Care, Read More + Read Less Buttons
$.fn.toggleHTML = function(a, b) {
	return this.html(function(_, html) {
		return $.trim(html) === a ? b : a;
	});
};

$( "a.toggle-one" ).click(function() {
	$( ".toggled-content-one" ).fadeToggle( "slow" );
	$('p.see-more-one').toggleHTML('<i class="fa fa-angle-up" aria-hidden="true"></i> Read less', '<i class="fa fa-angle-down" aria-hidden="true"></i> Read more');
});

$( "a.toggle-two" ).click(function() {
	$( ".toggled-content-two" ).fadeToggle( "slow" );
	$('p.see-more-two').toggleHTML('<i class="fa fa-angle-up" aria-hidden="true"></i> Read less', '<i class="fa fa-angle-down" aria-hidden="true"></i> Read more');
});

$( "a.toggle-three" ).click(function() {
	$( ".toggled-content-three" ).fadeToggle( "slow" );
	$('p.see-more-three').toggleHTML('<i class="fa fa-angle-up" aria-hidden="true"></i> Read less', '<i class="fa fa-angle-down" aria-hidden="true"></i> Read more');
});

$( "a.toggle-four" ).click(function() {
	$( ".toggled-content-four" ).fadeToggle( "slow" );
	$('p.see-more-four').toggleHTML('<i class="fa fa-angle-up" aria-hidden="true"></i> Read less', '<i class="fa fa-angle-down" aria-hidden="true"></i> Read more');
});

$( "a.toggle-five" ).click(function() {
	$( ".toggled-content-five" ).fadeToggle( "slow" );
	$('p.see-more-five').toggleHTML('<i class="fa fa-angle-up" aria-hidden="true"></i> Read less', '<i class="fa fa-angle-down" aria-hidden="true"></i> Read more');
});

$( "a.toggle-six" ).click(function() {
	$( ".toggled-content-six" ).fadeToggle( "slow" );
	$('p.see-more-six').toggleHTML('<i class="fa fa-angle-up" aria-hidden="true"></i> Read less', '<i class="fa fa-angle-down" aria-hidden="true"></i> Read more');
});

//Levels of Care Read More + Read Less Button
$( "a.toggle-dementia" ).click(function() {
	$( ".toggled-content-dementia" ).fadeToggle( "slow" );
	$('p.see-more-dementia').toggleHTML('<i class="fa fa-angle-up" aria-hidden="true"></i> Read less', '<i class="fa fa-angle-down" aria-hidden="true"></i> Read more about Dementia and Alzheimer’s care');
});

//Facility enquiry form - checking checkbox shows address details
$('#infopack-checkbox').change(function() {
	$( "#address-details" ).slideToggle( "slow", function() {
		// Animation complete.
	});
});

//Homepage - Orbiter show signup form
$('button#orbiter-sign-up').click(function() {
	$( ".orbiter-sign-up-form" ).slideToggle( "slow", function() {
	});
});

// Magnific Popup (http://dimsemenov.com/plugins/magnific-popup)
$(function() { // contain everything inside an anonymous function
  var initMagnificNew = function() { // variable that initialises the gallery popup for facilities pages
    'use strict';
    $('.mag-gallery-popup').magnificPopup({ // each image to enlarge needs to be wrapped in a link (a tag) with the 'mag-gallery-popup' class
      type:'image',
      gallery:{
        enabled:true
      }
    });
  };
  var initMagnificOld = function() { // variable that initialises the single popup implemented H1 2017 or earlier
    'use strict';
//    $('.popup')
//      .popup();
    $('.popup-vimeo').magnificPopup({type:'iframe'});
    $('.popup-image').magnificPopup({type:'image'});
  };
  if(typeof magnificPopuprun === 'function') { // check if magnificPopuprun is a defined function (this requires 'var magnificPopuprun = new Function();' to be inserted at the end of the Magnific Popup script library), meaning if the script is not included on the page, the function variables below don't run
    initMagnificNew();
    initMagnificOld();
  }
});

// Unslider (for testimonials)
$(function() { // contain everything inside an anonymous function
  var testimonialSlider = function() { // variable that initialises Unslider for testimonials
    $(function() {
      'use strict';
      $('.testimonials-slider').unslider({
        autoplay: true,
        keys: false,
        arrows: false,
        nav: false,
        infinite: true,
        delay: 10000
      });
    });
  };
  if(typeof initUnslider === 'function') { // check for the main function in the Unslider library before running the function variable (ie. is the script included on the page I'm on now)
    testimonialSlider();
  }
});

//Testimonials slider - old version, throws console error if script not included on page
//$(function() {
//  $('.testimonials-slider').unslider({
//    autoplay: true,
//    keys: false,
//    arrows: false,
//    nav: false,
//    infinite: true,
//    delay: 10000
//    });
//  });

//magnific popup - old single version, throws console error if script not included on page
//$(document).ready(function() {
//    "use strict";
//
//    $('.popup')
//      .popup()
//    ;
//
//    $('.popup-vimeo').magnificPopup({type:'iframe'});
//    $('.popup-image').magnificPopup({type:'image'});
//
//});

// Lozad lazy loader watch init
// $(document).ready(function(){
// 	if ($(".lozad")[0]){
// 		// console.log('lozad exists');
// 		const observer = lozad(); // lazy loads elements with default selector as '.lozad'
// 		observer.observe();
// 	} else {
// 		console.log('lozad not found');
// 	}
// });
