
//************************************************************************
//THIS WILL CONTAIN COMMON FUNCTIONS
//************************************************************************

function confirmKeepLogin(element) {
    var confirmText = "If you tick this box then you will no longer need to log in\n" +
		                "when visiting this site from this computer.\n\n" +
		                "You can disable this feature at any time by logging out.\n\n" +
		                "Don't use this option unless you are the only person\nwho has access to this computer.";

    if (element.checked)
        if (!confirm(confirmText))
        element.checked = false;
}


function jsShowModalWindow(url,destinationControl, dialogWidth, dialogHeight)
{
	//open the popup screen
	var retval = window.showModalDialog(url, null,'dialogWidth:' + dialogWidth +'px;dialogHeight:'+ dialogHeight +'px;resizable=1;');

	//check if not null
	if(retval == 0 || (retval !="" && retval !=null))
	{
		document.getElementById(destinationControl).value = retval;
	}
		
}
function jsOpenWindow(url,windowName,settings) {
	var newwindow = window.open(url,windowName,settings);
	newwindow.focus()
}

function JSOpenWindow(url)
{
	window.open(url);
}

function jsEmail(Mail, SiteName)
{
	location.href ="mailto:?subject="+SiteName+"&body="+Mail;
}
var CBModalWindow
function showCBModalWindow(url,destinationControl, dialogWidth, dialogHeight) {
	//open the popup screen
	var CBModalWindow = window.open(url, null,'dialogWidth:' + dialogWidth +'px;dialogHeight:'+ dialogHeight +'px;resizable=1;');

	//check if not null
	if(CBModalWindow == 0 || (CBModalWindow !="" && CBModalWindow !=null))
	{
		document.getElementById(destinationControl).value = CBModalWindow;
	}
}
function checkForModal() {
	if (CBModalWindow!='undefined' && CBModalWindow.closed == false) {
		CBModalWindow.focus();
	}
}

var popupLoginForm = function (formWrapperId) {

    var form = prototypeJs(formWrapperId);

    if (form == null && $$('.RadAjaxPanel .ForgetLoginBorder').length > 0) {
        form = $$('.RadAjaxPanel .ForgetLoginBorder')[0];
    }

    Modalbox.show(form, { width: 500, title: 'Login', aspnet: true, slideDownDuration: 0.1, slideUpDuration: 0.1 });
}


function InLineTextBoxFocus(textbox, inlineTextbox) {
    var element = prototypeJs(textbox);
    var inlineElement = prototypeJs(inlineTextbox);
    if (element != null && inlineElement != null) {
        if (inlineElement.hasClassName('inLinePlaceHolder')) {
            inlineElement.removeClassName('inLinePlaceHolder');
            element.show();
            element.focus();
            inlineElement.hide();
        }
    }
}

function InLineTextBoxBlur(textbox, inlineTextbox) {
    var element = prototypeJs(textbox);
    var inlineElement = prototypeJs(inlineTextbox);
    if (element != null && inlineElement != null) {
        if (element.value === '') {
            inlineElement.addClassName('inLinePlaceHolder');
            inlineElement.show();
            element.hide();
        }
    }
}

function FacebookLogout(appId) {
	if(ContegroReadCookie('fbsr_' + appId)!=undefined) {

		FB.getLoginStatus(function(response) {
			if (response.status === 'connected') {
				FB.logout(function(response) {
					AjaxLogOutAndRefresh();
				});
			} else if (response.status === 'not_authorized') {
				AjaxLogOutAndRefresh();
			} else {
				AjaxLogOutAndRefresh();
			}
		});

		return false;
	} else {
		return true;
	}
}

function AjaxLogOutAndRefresh() {
	jQuery.ajax({
		url: "/Modules/UserLogin/LoginWithFacebook.aspx?action=logout"
	}).done(function ( data ) {
	    window.location.reload(true);
	});
}

function CheckFacebookLogin() {
	FB.getLoginStatus(function(response) {
		if (response.status === 'connected') {
			FacebookLogin(window.location, false);
		}
	});
}

function CheckFacebookLoginAndRedirect(redirectUrl) {
	FB.getLoginStatus(function(response) {
		if (response.status === 'connected') {
			FacebookLogin(redirectUrl, true);
		}
	});
}


function FacebookAuthorizeAndLogin(sourceAnchor, redirectUrl) {
	FB.getLoginStatus(function(response) {
		if (response.status === 'connected') {
			FacebookLogin(redirectUrl, true);
		} else {
		    FB.login(function(response) {
		        if (response.authResponse) {
		        	FacebookLogin(redirectUrl, true);
		        }
		    }, {
		        scope: 'email,user_website'
		    });
		}
	});
}

function FacebookLogin(redirectUrl, isFromClick) {
    ContegroSetCookie("FacebookLoginPage", window.location.href, 1);

	jQuery('.FacebookLoginButton img').each( function() {
	    jQuery(this).attr('src', jQuery(this).attr('src').replace('button_login_with_facebook.gif', 'button_login_with_facebook_loading.gif') )
	    jQuery(this).attr('src', jQuery(this).attr('src').replace('button_register_with_facebook.gif', 'button_register_with_facebook_loading.gif') )
	} );

	jQuery.ajax({
		url: "/Modules/UserLogin/LoginWithFacebook.aspx"
	}).done(function ( xml ) {
		if ( jQuery(xml).find('LoginOk').text() == 'true') {
			if (redirectUrl!='') {
				window.location = redirectUrl;
			} else {
				if (jQuery(xml).find('RedirectUrl').length > 0) {
					window.location = jQuery(xml).find('RedirectUrl').text();
				} else {
	        		window.location.reload(true);
	        	}
	        }
		} else {

			var IsRegistrationFormOnPage = (typeof window.registrationFormOnPage != 'undefined' || window.registrationFormOnPage==true);

			if (jQuery(xml).find('RedirectUrl').length > 0 && IsRegistrationFormOnPage) {
				if (typeof window.facebookLoginRefresh == 'undefined' || window.facebookLoginRefresh==true) {
					window.location.reload(true);		
				} else {
					jQuery('.FacebookLoginForm, .RegistrationFormFacebookLoginContainer').addClass('LoggedIntoFacebook');
					jQuery('.FacebookLoginButton img').hide();
				}
			} else {

				if (isFromClick && jQuery(xml).find('RedirectUrl').length > 0) {
					window.location = jQuery(xml).find('RedirectUrl').text();
				} else {
					jQuery('.RegistrationFormFacebookLoginContainer').hide();

			    	jQuery('.FacebookLoginButton img').each( function() {
			    		jQuery(this).attr('src', jQuery(this).attr('src').replace('button_login_with_facebook_loading.gif', 'button_login_with_facebook.gif') )
			    		jQuery(this).attr('src', jQuery(this).attr('src').replace('button_register_with_facebook_loading.gif', 'button_register_with_facebook.gif') )
			    	} );

			    	if (isFromClick) {
						// TODO: do something with this error message
						alert(jQuery(xml).find('Message').text());
					}
				}
			}
		}
	});
}
          
function InitialiseAjaxPagination() {

	jQuery(document).ready(function() {

		jQuery('div.Pagination').each(function() {

			if (jQuery(this).attr('ajaxupdatediv')!=undefined) {
				
				jQuery(this).find('a').click( function() {
					
					var rawLinkUrl = jQuery(this).attr('href');
					var linkUrl = rawLinkUrl;
					var updateDivId = jQuery(this).closest('.Pagination').attr('ajaxupdatediv');
					var ajaxUpdateHandler = jQuery(this).closest('.Pagination').attr('divajaxupdatehandler');
					if (typeof (ajaxUpdateHandler) != "undefined" && ajaxUpdateHandler)
					    ajaxUpdateHandler = eval('(' + ajaxUpdateHandler + ')');

					if ( linkUrl.indexOf('is-ajax-call')==-1 ) {
						if ( linkUrl.indexOf('?')>-1 ) {
							linkUrl+='&is-ajax-call=true'
						} else {
							linkUrl+='?is-ajax-call=true'
						}
					}

					rawLinkUrl = rawLinkUrl.replace('?is-ajax-call=true','?');
					rawLinkUrl = rawLinkUrl.replace('&is-ajax-call=true','');

					jQuery('#' + updateDivId).addClass('loading');

					jQuery('#' + updateDivId).load(linkUrl + ' #' + updateDivId, function(response, status, xhr) {
						jQuery(this).children().unwrap();
						InitialiseAjaxPagination(ajaxUpdateHandler);
						if (typeof (ajaxUpdateHandler) != "undefined" && ajaxUpdateHandler) {
						    ajaxUpdateHandler();
						}

						jQuery(this).removeClass('loading');
					});

					return false;

				});

			}

		});

	});
}


(function(){
    var ContegroCookies;

    function ContegroReadCookie(name,c,C,i){
        if(ContegroCookies){ return ContegroCookies[name]; }

        c = document.cookie.split('; ');
        ContegroCookies = {};

        for(i=c.length-1; i>=0; i--){
           C = c[i].split('=');
           ContegroCookies[C[0]] = C[1];
        }

        return ContegroCookies[name];
    }

    window.ContegroReadCookie = ContegroReadCookie;
})();

function ContegroSetCookie(c_name, value, exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = c_name + "=" + c_value;
}


var ContegroPasswordValidation = {
    initialise: function (data) {
        if (document.getElementById(data.textboxId)) {
            ContegroPasswordValidation.addValidationToTextbox(data);
        } else {
            setTimeout(function () {
                ContegroPasswordValidation.initialise(data);
            }, 200);
        }

        jQuery(document).ajaxError(function (event, jqxhr, settings, thrownError) {
            console.log(thrownError);
        });
    }
    ,
    addValidationToTextbox: function (data) {

        var textbox = jQuery('#' + data.textboxId);

        textbox.data('loginName', data.loginName)
        textbox.data('emailAddress', data.emailAddress)

        if (textbox.siblings('.PasswordValidationIcon').length == 0) {
            textbox.after('<span class="PasswordValidationIcon hidden"></span>');
        }

        textbox.on("keyup", function () {
            var textbox = $(this);

            clearTimeout(textbox.data('timeout'));

            textbox.data('timeout', setTimeout(function (textbox) {
                ContegroPasswordValidation.validate(textbox);
            }, 200, textbox));
        });
    }
    ,
    validate: function (textbox) {
        textbox = jQuery(textbox);

        var enteredText = textbox.val();

        if (enteredText.length == 0) {
            textbox.removeClass('PasswordValid').removeClass('PasswordInvalid');
            textbox.siblings('.PasswordValidationIcon').addClass('hidden').removeClass('PasswordValid').removeClass('PasswordInvalid');
            textbox.data('checking', 'false');
        } else {

            if (textbox.data('checking') == 'true') {
                textbox.data('queueCheck', 'true');
            } else {
                textbox.data('checking', 'true');

                var url = '/Modules/ClientAccess/IsPasswordValid.ashx?password=' + encodeURIComponent(enteredText) + '&loginName=' + encodeURIComponent(textbox.data('loginName')) + '&emailAddress=' + encodeURIComponent(textbox.data('emailAddress'));

                textbox.addClass('checking');
                textbox.siblings('.PasswordValidationIcon').addClass('checking');

                jQuery.ajax({
                    url: url
                }).done(function (data) {
                    ContegroPasswordValidation.updateTextbox(textbox, data);
                    textbox.data('checking', 'false');
                    if (textbox.data('queueCheck') == 'true') {
                        textbox.data('queueCheck', 'false');
                        ContegroPasswordValidation.validate(textbox);
                    }
                }).fail(function () {
                    textbox.data('checking', 'false');
                    console.log('ajax error!')
                });
            }
        }

    }
    ,
    updateTextbox: function (textbox, validationResult) {
        var validationIcon = textbox.siblings('.PasswordValidationIcon');
        validationIcon.unbind('click');

        textbox.removeClass('checking');
        validationIcon.removeClass('checking');

        if (validationResult.isValid) {
            textbox.addClass('PasswordValid').removeClass('PasswordInvalid');
            validationIcon.removeClass('hidden').addClass('PasswordValid').removeClass('PasswordInvalid');
        } else {
            textbox.addClass('PasswordInvalid').removeClass('PasswordValid');
            validationIcon.removeClass('hidden').addClass('PasswordInvalid').removeClass('PasswordValid');
            validationIcon.click(function () { alert(validationResult.message); });
        }

    }
}
