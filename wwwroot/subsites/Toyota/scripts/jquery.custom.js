$(document).ready(function () {
//    $('#main-search input[type="text"]').watermark("Search Website");


//    //SET UP ACCORDION
//    $('.accordion .content').accordion({ collapsible: true });

    //SET UP MOBILE MENU
    $('.menudropdown').before('<span class="arrow">+</span>');

    $('.menu > ul > li .arrow').click(function () {

        var text = $(this).text();

        $('.menudropdown').slideUp('slow');
        $('.arrow').text('+');

        if (text == '+') {
            $(this).text('-');
            //$(this).parent().find('> .menudropdown').show('slow');
            $(this).parent().find('> .menudropdown').slideToggle('slow');
        }
    });

    //SET UP DEALERSHIP POPUP
    $('.open-dealership-popup').click(function () {
        event.preventDefault();
        $('#DealershipOverlay').show();
        $('#DealershipPopup').show();
        $('#DealershipPopup').css('top', $(document).scrollTop() + 30);
    });

    $('#DealershipPopup #ClosingLink').click(function () {
        event.preventDefault();
        $('#DealershipOverlay').hide();
        $('#DealershipPopup').hide();
    });

    $('#DealershipOverlay').click(function () {
        $('#DealershipOverlay').hide();
        $('#DealershipPopup').hide();
    });

    //SET UP POPUP LINKS
    $('#DealershipPopup .regions li').click(function () {
        var short = $(this).attr('data-link');
        $('#DealershipPopup .regions li').removeClass('active');
        $(this).addClass('active');

        $('#DealershipPopup .dealers .region').hide();
        $('#DealershipPopup .dealers .' + short).show();
    });

    //SET UP FIXED HEADER (NOT ON MOBILE)
    $(window).scroll(function () {
        var header = $('#Header'),
            scroll = $(window).scrollTop(),
            height = header.height();
        body = $('body');

        if (scroll >= 100) {
            header.addClass('fixed');
            body.addClass('margin');
            $('body.margin').css('margin-top', height);
        }
        else {
            header.removeClass('fixed');
            $('body.margin').css('margin-top', 0);
            body.removeClass('margin');
        }
    });

    //SET UP SCROLL TO TOP LINK
    $('.scroll-to-top').click(function () {
        $('html, body').stop().animate({
            'scrollTop': 0
        }, 900, 'swing');
    });


    //RSS FEED
    if (!$('#Content .side .module-rssfeed .article').length) {
        $('#Content .side .no-jobs').show();
    }

});

function isEmailAddr(s) {
    var rv = false
    if ((s == null) || (s.length == 0))
        rv = false;
    else {
        var reEmail = /([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        rv = reEmail.test(s)
    }
    if (rv) {
        return rv
    } else {
        return false
    }
}

function validation(theForm) {

    if (theForm.name.value == "") {
        alert("Please enter your full name.");
        theForm.name.focus();
        return (false);
    }

    if (!isEmailAddr(theForm.email_from.value)) {
        alert("Please enter a complete email address in the form: yourname@yourdomain.com");
        theForm.email_from.focus();
        return (false);
    }

    $('.submit_button').val('Sending...');

    return (true)
}




