(function($){

	$.fn.formvalidation = function(){
		
		return this.each(function(){
						
				var $contactForm = $(this),
				$name = $contactForm.find("#name"),
				$phone = $contactForm.find("#phone"),
				$address = $contactForm.find("#address"),
				$suburb = $contactForm.find("#suburb"),
				$city = $contactForm.find("#city"),
				$postcode = $contactForm.find("#postcode"),
				
				$formFields = $contactForm.find('input[type="text"], input[type="radio"], input[type="checkbox"]'),
				
				$status = $contactForm.find(".status");
				
				//initialise
				$status.hide();
				
				//submit
				$contactForm.submit(function(e) {	
						
						e.preventDefault();
						$formFields.removeClass("error-focus");
						
						//check required fields are not empty
						if($name.val()==""){
							
								setStatusMessage("Please enter your full name.");
								$name.setFocus();
								
						}else if($address.val()==""){
							
								setStatusMessage("Please enter your address.");
								$address.setFocus();
							
						}else if($suburb.val()==""){
							
								setStatusMessage("Please enter your suburb.");
								$suburb.setFocus();
							
						}else if($city.val()==""){
							
								setStatusMessage("Please enter your city.");
								$city.setFocus();
							
						}else if($postcode.val()==""){
							
								setStatusMessage("Please enter your post code.");
								$postcode.setFocus();
							
						}else{
							
								setStatusMessage("Please wait...");
								var formData = $(this).serialize();
															
							$.post("send_mail_orbiter.php", formData, function(sent){
								
								if(sent=="error"){ 
									 
											setStatusMessage("Oops, something went wrong - message not sent");
										 
										} else if(sent=="success"){
																					
											setStatusMessage("Thanks for signing up to receive the Radius Orbiter.");
											
											//clear form fields
											$formFields.val("");
											
										}//end if else
								 
								},"html");
							
						}//end else
			
				 });//end submit
				
				//helper functions				
				
				function setStatusMessage(message){
					$status.html(message).slideDown("fast");
				}
				
				$.fn.setFocus = function(){
					return this.focus().addClass("error-focus");
				}
				
				function isValidEmail(email) {
					var emailRx = /^[\w\.-]+@[\w\.-]+\.\w+$/;
					return  emailRx.test(email);
				}
				
			});//end each
															 
	};//end $.fn.formvalidation 

})(jQuery);