/* Scripts for the dynamic block sticking to the bottom of the page and aligned with the sidebar */
$(document).ready(function () {

    function isElementPartiallyInViewport(el) {
        //special bonus for those using jQuery
        if (typeof jQuery !== 'undefined' && el instanceof jQuery) el = el[0];

        var rect = el.getBoundingClientRect();
        var windowHeight = (window.innerHeight || document.documentElement.clientHeight);
        var windowWidth = (window.innerWidth || document.documentElement.clientWidth);

        //http://stackoverflow.com/questions/325933/determine-whether-two-date-ranges-overlap
        var vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
        var horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

        return (vertInView && horInView);
    }

    function getElementVisibleHeight(el) {
        //special bonus for those using jQuery
        if (typeof jQuery !== 'undefined' && el instanceof jQuery) el = el[0];

        var rect = el.getBoundingClientRect();
        var windowHeight = (window.innerHeight || document.documentElement.clientHeight);

        return windowHeight - rect.top;
    }

    function checkIfFixed(el) {
        //special bonus for those using jQuery
        if (typeof jQuery !== 'undefined' && el instanceof jQuery) el = el[0];

        var rect = el.getBoundingClientRect();
        var navRect = $("#sidenav")[0].getBoundingClientRect();
        
        return rect.top <= navRect.bottom;
    }

    $(function () {
        var block = $("#sticky-bottom");
        if (block.length != 0) {
            $(window).on('DOMContentLoaded load resize scroll', function (event) {
                var footer = document.getElementById('footer');

                if (isElementPartiallyInViewport(footer) && !$("body").hasClass("mobile")) {
                    block.css("bottom", 30 + getElementVisibleHeight(footer) + "px");
                } else {
                    block.css("position", $("body").hasClass("mobile") ? "relative" : "fixed");
                    block.css("bottom", $("body").hasClass("mobile") ? "0" : "30px");
                }

                if (checkIfFixed(block)) {
                    block.css("position", "relative");
                    block.css("bottom", "0");
                }
            })
        }
    });
});