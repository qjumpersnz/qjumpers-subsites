// Use strict mode
'use strict';

var ns = window.ns || {};

// ns.settings and ns.init are all separate because otherwise
// we overwrite the ns.* that are already setup

// Our default settings
ns.settings = {
	
};

// Our main init function
ns.init = function( callback ) {
	$( document ).ready( function() {
		
		//initialise plugins
		ns.plugins.init();
	
		//$('input[type="checkbox"]').iCheck({
          //  cursor: true
        //});

      //  $('input[type="radio"]').iCheck({
        //    cursor: true
        //});

		$('.nav-trigger').on('click',function(e){
			e.preventDefault;
			$('body').toggleClass('nav-open');
			$('.nav-trigger').toggleClass('nav-close')
		});

		$(".desktop-search").on('click','a', function(e){
			e.preventDefault();
			$(".search-wrap").slideToggle(200, function(){

			});
		});

		$(".mobile-search").on('click','a', function(e){
			e.preventDefault();

			$(".search-wrap").slideToggle(200, function(){

			});			
		});

		$('.back-button').on('click',function(e){
			e.preventDefault();			

			var current = $('.current');
			var prevDiv = '#' + current.data('back');
			console.log(prevDiv);

			current.removeClass('current');
			$(prevDiv).addClass('current');		

			
		});

		$('.question').on('click','a.button',function(e){

			e.preventDefault();

			var questionID = $(this).data('id');
			
			// console.log($("#" + questionID));			
			
			if($(this).data('id')){
				
				var that = $('#' + questionID);
					
				
				$(this).parents('.question').removeClass('current');
				that.addClass('current');		
				
			}else{
				
				that.removeClass('current');
			}
			
		});

		$('.question').on('click','a.final',function(e){

			e.preventDefault();

			var selected = $(this).parents('.question').find('input[type="radio"]:checked');
			var href = 'http://' + window.location.host + selected.data('id');

			//reload
			window.location.href = href;

		});

		$('.carousel').each(function (i) {
		    var carousel = $(this);

		    carousel.hide();

		    carousel.css('position', 'relative');
		    carousel.find('img:gt(0)').css({
		        'opacity': '0',
		        'position': 'absolute',
		        'top': '0',
                'left': '0'
		    });

		    carousel.find('img:first').addClass('active').addClass('first');
		    carousel.find('img:last').addClass('last');

		    setInterval(function () {
		        var active = carousel.find('.active');
		        var next = active.next();
		        if (active.hasClass('last')) {
		            next = carousel.find('.first');
		        }

		        active.animate({'opacity': '0'}, 500, function() {
		            active.removeClass('active');
		        });
                
		        next.animate({'opacity': '1'}, 500, function() {
		            next.addClass('active');
		        });

		    }, 5000);

		    carousel.show();
		});
		
	    // help pop up
		var helps = $('img[alt]').filter(function () {
		    return this.alt.toLowerCase() == "need help now?";
		});

		helps.css('cursor', 'pointer');
		helps.on('click', function (e) {
		    $('#help-popup').fadeIn(300);
		});

		$('#help-popup a.close, #help-popup .background').on('click', function (e) {
		    e.preventDefault();

		    $('#help-popup').fadeOut(200);
		});

		$('a.help-button').on('click', function(e){	

		  	$('#help-popup').fadeIn(300);  

		});



	});
};

ns.plugins = {

	init: function(){
		//checkbox plugin
		
		//initialise binds
		ns.binds.init();
	}
};

ns.binds = {
	
	init: function(){	
	
	}
};

ns.init();