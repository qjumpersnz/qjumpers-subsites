// Custom Modals ----------------------------------- //

jQuery(document).ready(function(){ // Document Ready

  // Open
  jQuery('.open-modal').click(function(event){

    //Must Use attr:data-href to avoid trouble with Firefox
    event.preventDefault();

    var id = jQuery(this).attr('data-href').replace('#', '');

    // If Video
    if( jQuery(this).attr('data-video') )
    {
        //var youTube = jQuery('#modal #' + id).attr('data-href'); //Autoplay set by default
        var youTube = jQuery(this).attr('data-video'); //Autoplay set by default
        
        var link ='<iframe id="ytplayer" type="text/html" width="1280" height="720" src="https://www.youtube.com/embed/' + youTube + '?rel=0&wmode=transparent&autoplay=1" frameborder="0" allowfullscreen/>';
        jQuery('#modal #'+id).html(link);
    
    }
    // If Form
    else if( jQuery('#modal #' + id).hasClass('form') )
    {
        //window.location.hash = id;
    }

    //Open Modal + Add body class
    jQuery('body').addClass('modal-is-open');
    jQuery('#modal #'+id).fadeIn(0).addClass('selected');

    // Show Modal
    jQuery('#modal').fadeIn(400).addClass('open');

  });

  function closeModal(){

    jQuery('html,body').removeClass('modal-is-open');
    jQuery('#modal').fadeOut(400).removeClass('open');

    // Empty video html
    jQuery('#modal .modal-item.selected.video').html('');
    jQuery('#modal .modal-item.selected').fadeOut(600).removeClass('selected');

  }

  // Close
  jQuery('#modal .close-overlay, #modal .close').click(function(event){    event.preventDefault(); closeModal();       });
  jQuery(document).keydown(function(event) { if (event.keyCode == 27) {    event.preventDefault(); closeModal();   }   });

  // Ipad Keyboard Issue Overide
  jQuery('#modal input, #modal textarea, #modal select').focus(function(){       jQuery('#modal').addClass('keyboard-open');      });
  jQuery('#modal input, #modal textarea, #modal select').focusout(function(){    jQuery('#modal').removeClass('keyboard-open');   });

  // On Load  
  var location = window.location.hash;
  //if ( location.toLowerCase().indexOf("modal-") >= 0 ){

  if( jQuery('#modal .ninja-forms-response-msg').hasClass('ninja-forms-success-msg') || jQuery('#modal .ninja-forms-response-msg').hasClass('ninja-forms-error-msg') ){

    //Open Modal + Add body class
    jQuery('html,body').addClass('modal-is-open');
    
    //Ninja Specific Show Success if aplicable
    if( jQuery('.ninja-forms-response-msg').hasClass('ninja-forms-success-msg') ){

      var html = jQuery(this).find('.ninja-forms-response-msg.ninja-forms-success-msg p').text();
      jQuery('#modal-success').text(html);
      jQuery('#modal #modal-success').fadeIn(0).addClass('selected');

    }
    else{

      //jQuery('#modal ' + location).fadeIn(0).addClass('selected');
      jQuery('#modal .ninja-forms-response-msg').closest('.modal-item').fadeIn(0).addClass('selected');

    }

    // Show Modal
    jQuery('#modal').fadeIn(200).addClass('open');

  }


}); // end. Document Ready
