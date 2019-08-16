/* Author:
*/
jQuery(document).ready(function(){
    if(!Modernizr.input.placeholder){
        jQuery('[placeholder]').focus(function() {
                var input = jQuery(this);
                if (input.val() == input.attr('placeholder')) {
                    input.val('');
                    input.removeClass('placeholder');
                }
        }).blur(function() {
                var input = jQuery(this);
                if (input.val() == '' || input.val() == input.attr('placeholder')) {
                    input.addClass('placeholder');
                    input.val(input.attr('placeholder'));
                }
        }).blur();
            
        jQuery('[placeholder]').parents('form').submit(function() {
                jQuery(this).find('[placeholder]').each(function() {
                    var input = jQuery(this);
                    if (input.val() == input.attr('placeholder')) {
                        input.val('');
                    }
                });
        });
    }

	if(jQuery('.section-intro iframe').length){
		jQuery( '.section-intro iframe' ).each(function() {
			jQuery(this).wrap( '<div class="videoWrapper"></div>' );
		});
	}

});
