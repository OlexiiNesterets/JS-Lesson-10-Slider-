'use strict';

(function ($) {
    $('.carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        slide: ".carousel__item",
        prevArrow: ".carousel__arrow--left",
        nextArrow: ".carousel__arrow--right",
        // fade: true,
        cssEase: 'linear'
    });

    $('.carousel').on('afterChange', function(event, slick, currentSlide){
        console.log(slick);
      });

    

})(jQuery);