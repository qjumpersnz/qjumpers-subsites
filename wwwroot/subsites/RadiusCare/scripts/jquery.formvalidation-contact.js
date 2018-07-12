(function($){

	$.fn.formvalidation = function(){
		
		return this.each(function(){
						
				var $contactForm = $(this),
				$name = $contactForm.find("#name"),
				$email = $contactForm.find("#email"),
				$phone = $contactForm.find("#phone-number"),
				$message = $contactForm.find("#message"),
				
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
							
								setStatusMessage("Please enter your name(s) then submit again.");
								$name.setFocus();
								
						}else if($email.val()==""){
							
								setStatusMessage("Please enter your email address.");
								$email.setFocus();
							
						}else{
							
								setStatusMessage("Please wait...");
								var formData = $(this).serialize();
															
							$.post("send_mail_contact.php", formData, function(sent){
								
								if(sent=="error"){ 
									 
											setStatusMessage("Oops, something went wrong - message not sent");
										 
										} else if(sent=="success"){
																					
											setStatusMessage("Thanks, someone will be in contact with you regarding your enquiry soon.");
											
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