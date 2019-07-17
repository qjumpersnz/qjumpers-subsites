// @codekit-prepend 'libs/jquery.mobile.min.js', 'libs/matchMedia.js', 'libs/enquire.js', 'libs/jquery.transit.min.js', 'libs/cycle.min.js', 'libs/select2.min.js'

$(document).ready(function () {
	'use strict';

	var $body = $('body');

/*
 *	Open external links in a new tab/window
 */
	$body.on(EVENT_METHOD, 'a.external, a[rel=external]', function () {
		var self = $(this);

		window.open(self.attr('href'));
		return false;
	});
/* @group end */

/*
 *	Function used for selectbox hackery
 */
	$.fn.selectOverlay = function () {
		this.on('change', function () {
			var option = $(this).find('option:selected'),
				prev = $(this).prev(),
				text = option.text();
	
			prev.text(text);
		});
	
		var self = this,
			label = self.prev(),
			text = self.find('option:selected').text();
	
		if (text !== '') label.text(text);
	};

	$('.overlay + select').selectOverlay();
/* @group end */

/*
 *	Function used for height hackery
 */
	$.fn.cHeight = function() {
		var colHeight = 0;
		this.each(function(i){
	        var h = $(this).outerHeight();
			if (h > colHeight) colHeight = h;
		});
		return this.css('height', colHeight + 'px');
	};
/* @group end */

/*
 *	Sub nav menu
 */
	/*$('.sub-nav .has-subnav a').on(EVENT_METHOD, function (e) {
        e.preventDefault();

		var self = $(this),
            nav = self.next('ol'),
            li = nav.find('li'),
            height = 0,
            i;

        if (self.parent().hasClass('is-active')) {
            self.parent().removeClass('is-active');

            nav.stop(true).transition({
                height : 0
            }, 500, 'ease', function () {

            });

            return false;
        }

        self.parent().addClass('is-active');

        for (i = 0; i < li.length; i++) {
            height = $(li[i]).outerHeight() + height;
        }

        nav.stop(true).transition({
            height : height
        }, 500, 'ease', function () {
            
        });

		return false;
	});*/
/* @group end */


/*
 *	Mobile menu
 */
	$('.mobile-icon').off(EVENT_METHOD).on(EVENT_METHOD, function () {
		var self = $(this);

		if (self.hasClass('is-active')) {
			self.removeClass('is-active');

			$('body').stop(true).transition({
				x : '0'
			}, 500, 'ease', function () {
				$('body').removeAttr('style');
			});

			return false;
		}

		self.addClass('is-active');

		$('body').stop(true).transition({
			x : '-77%'
		}, 500, 'ease');

		return false;
	});
/* @group end */

/*
 *	Mobile sub nav menu
 */
	$('.mobile-sub-nav').on('change', 'select', function () {
		var self = $(this),
			val = self.val();

		if (val === '') return false;

		window.location = val;

		return false;
	});
/* @group end */

/*
 *	bg cycle
 */
	(function () {
		if (!$('.home-page').length) return false;

		$('.bg').cycle({
			fx		: 'fade',
			speed	: 'fast',
			timeout : 8000,
		});
	})();
/* @group end */

/*
 *	Responsive - These functions will be called when the breakpoint exists
 */
	// if media queries are supported
	if (matchMedia('only screen').matches) {
		var responsive = {
			desktop: function (event) {
				$('body').data('mq', event.type);
			},
			lteTablet: function (event) {
				$('body').data('mq', event.type);
			},
			tablet: function (event) {
				$('body').data('mq', event.type);
			},
			mobile: function (event) {
				$('body').data('mq', event.type);

				// scalability while maintaining usability (http://webdesignerwall.com/tutorials/iphone-safari-viewport-scaling-bug
				(function (doc) {
					var addEvent = 'addEventListener',
						type = 'gesturestart',
						qsa = 'querySelectorAll',
						scales = [1, 1],
						meta = qsa in doc ? doc[qsa]('meta[name=viewport]') : [];

					function fix() {
						meta.content = 'width=device-width,minimum-scale=' + scales[0] + ',maximum-scale=' + scales[1];
						doc.removeEventListener(type, fix, true);
					}

					if ((meta = meta[meta.length - 1]) && addEvent in doc) {
						fix();
						scales = [0.25, 1.6];
						doc[addEvent](type, fix, true);
					}
				}(document));
			}
		};

		$body
			.on('desktop', responsive.desktop)
			.on('lte-tablet', responsive.lteTablet)
			.on('tablet', responsive.tablet)
			.on('mobile', responsive.mobile);

		enquire
			// More than 1025px
			.register('(min-width: 1025px)', {
				match: function () { $body.trigger('desktop'); }
			}, true)
			// Anything less than or equal to a tablet (1024px or lower)
			.register('(max-width: 1024px)', {
				match: function () { $body.trigger('lte-tablet'); }
			})
			// 701 to 1024px
			.register('(min-width: 761px) and (max-width: 1024px)', {
				match: function () { $body.trigger('tablet'); }
			})
			// 0 - 600px OR 0 - 799px in landscape orientation
			.register('(max-width: 760px), (max-width: 799px) and (orientation: landscape)', {
				match: function () { $body.trigger('mobile'); }
			});
	}
	// fallbacks when media queries are not supported
	else {
		
	}
/* @group end */

$('#termscheck').click(function(){
if(this.checked){
 $('#map-details').show(400);
 $('#map-details').html('<p><a href="http://arcg.is/22teJT2" target="_blank">View Aurora map</a></p>');
 } else {$('#map-details').hide(400); }
});

/* JQuery UI Accordion */
$( function() {
		var icons = {
		  header: "ui-icon-plus",
		  activeHeader: "ui-icon-minus"
		};
		$( ".accordion" ).accordion({
			active: false,
			collapsible: true,
			icons: icons,
			animate: {
				duration: 150
			}
		});
		$( "#toggle" ).button().on( "click", function() {
      if ( $( ".accordion" ).accordion( "option", "icons" ) ) {
        $( ".accordion" ).accordion( "option", "icons", null );
      } else {
        $( ".accordion" ).accordion( "option", "icons", icons );
      }
    });
});

/* JQuery UI Tab */
$( function() {
	$( ".tabs" ).tabs();
	$('.tabs').css('display', 'block');
 });

});