(function($) {
    'use strict';
    jQuery(document).ready(function() {

        var num = 50; //number of pixels before modifying styles

        //Navbar header sticky
        $(window).bind('scroll', function () {
            if ($(window).scrollTop() > num) {
                $('.navbar').addClass('fixed-nav');


            } else {
                $('.navbar').removeClass('fixed-nav');

            }
        });

        $('.user .toggler').on('click',function () {


                $('.close span.slice').addClass('open');
                $('.search-overlay-container').addClass('open');


        });

        $('.search-overlay-container .close').on('click',function () {


                $('.close').removeClass('open');
                $('.close span.slice').removeClass('open');
                $('.search-overlay-container').removeClass('open');

        })

    });


}(jQuery));