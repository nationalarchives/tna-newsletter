/*
 * The National Archives
 * Author:  Mihai Diaconita - WEB TEAM
 * Newsletter Back To Origin Jquery plugin
 * */

(function ($) {
    $.fn.newsletterBackToOrigin = function (options) {
        var settings = $.extend({}, $.fn.newsletterBackToOrigin.defaults, options);
        return this.each(function () {
            var thankYouURL = "http://nationalarchives.gov.uk/news/subscribe-confirmation.htm",
                newValue = "?oldurl=" + window.location.href;
            return settings.$element.val(thankYouURL + newValue);
        });
    }

    // Default settings
    $.fn.newsletterBackToOrigin.defaults = {
        $element: $('input[name="ReturnURL"]'),
    }
}(jQuery));

// Make sure the signup newsletter form matches the ID below
// By default target element is $('input[name="ReturnURL"]')
$('#signup').newsletterBackToOrigin();