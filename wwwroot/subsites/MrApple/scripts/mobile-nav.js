// Mobile Nav

// Insert Before To Build Toggles Before Mobile Nav is Triggered
jQuery('#deskNav .menu > .page_item_has_children > a').append('<span>&#x002B;</span>');
jQuery('<a class="childMenuToggle icon"><span>+</span><span class="minus">-</span></a>').insertBefore('#mobNav .page_item_has_children ul.children');

//Drop Main Nav

jQuery('.navToggle').click(function() { 

  jQuery(this).toggleClass('open');
  jQuery(this).closest('.toggleWrapper').toggleClass('open');

  if( !jQuery(this).hasClass('open') ){

    jQuery('#mobNav ul.menu').slideUp(500);

  }
  else {

    jQuery('#mobNav ul.menu').slideDown(500);

  }

  jQuery("html").animate({ scrollTop: 0 }, "slow");

});

//Drop Main Search

jQuery('.searchToggle').click(function() { 

  jQuery(this).toggleClass('open');
  jQuery(this).closest('.toggleWrapper').toggleClass('open');

  if( !jQuery(this).hasClass('open') ){

    jQuery('#mobNav #search_form_mob').slideUp(100);

  }
  else {

    jQuery('#mobNav #search_form_mob').slideDown(100);

  }

  jQuery("html").animate({ scrollTop: 0 }, "slow");

});

//Internal Nav Accordion

jQuery('#mobNav a.childMenuToggle').click(function() { 

    jQuery(this).toggleClass('open');
    jQuery(this).next().slideToggle();

});
