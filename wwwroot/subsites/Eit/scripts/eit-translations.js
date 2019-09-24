jQuery(document).ready(function($){

	if($.cookie('language')) {
		$('.language-toggle a').text('English');

		//Do translation replacements

		doTranslate();

	}


	$('.language-toggle').on('click','a',function(){

		if($.cookie('language')) { //Maori > English
			
			$('.language-toggle a').text('Māori');
			$.removeCookie('language',{ path : '/' });
			console.log($.cookie('language'))

			console.log('maori > english')
			doTranslate(true);

		}
		else { //English > Maori

			$('.language-toggle a').text('English');
			$.cookie('language', '1', { path: '/'} );
			console.log('english > maori')
			doTranslate();

		}

	});


	function doTranslate(reverse) {
		

		if(reverse !== true) {
			reverse = false;
		}

		if(translations.length) {

			$('h2, h3, h4, h5, h6').each(function(){

				$element = $(this);

				if($(this).children().length > 1) { //this heading has too many child elements which we will ruin if we try to translate text inside, so gtfo
					return true;
				}

				if($(this).children().length == 1) { //this heading has an element inside, probably a link. We shall translate that instead.
					$element = $(this).children().first();
				}

				var text = $element.text();

				$.each(translations, function(){

					var english = this.english;
					var te_reo = this.te_reo;

					if(reverse) {
						text = text.replace(te_reo,english);
					}
					else {
						text = text.replace(english,te_reo);
					}
					
				});				

				$element.text(text);

			});

		}


	}


});//jQuery
