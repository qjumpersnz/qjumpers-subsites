function featureFullHeightOn() {
				var newHeight = 0;
				if($('.feature-area')[0]) {
			    	var offset = $('.feature-area').offset();
			    	var newHeight = $(window).height() - offset.top;
			    }
		    	
		    	$('.feature-slide-content-global, .feature-area, .feature-area-wrap, .feature-slide, .feature-slide-overlay').css('height', newHeight+'px');
		    	$('.feature-slide-content-global').css('margin-top', '-'+newHeight+'px');
		    	
		    		featureVerticalCenter();
		    	}
		    	
		    	function featureFullHeightOff() {
		    		$('.feature-slide-content-global, .feature-area, .feature-area-wrap, .feature-slide, .feature-slide-overlay').css('height', '');
		    		$('.feature-slide-content-global').css('margin-top', '');
		    		featureVerticalCenter();
		    	}
		    	
				function startFeatureResize() {
				   $(window).on('resize.featureResize', function() {
				     featureFullHeightOn();
				   });
				}

				function endFeatureResize() {
				   $(window).off('resize.featureResize');
				}

		    	
		$('.feature-area').on( 'cycle-after', function( event, opts ) {
			if ($('body').hasClass('feature-editor-open')) {
				repositionVposControls($('.feature-slide'));
			}
		});

		$(function(){
			$('.feature-area').cycle();
		});
		if (document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading') {pageCode()} else {document.addEventListener('DOMContentLoaded', pageCode());}function pageCode() {}