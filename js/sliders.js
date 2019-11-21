$(document).ready(function () {
    $('.slider').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="prev"><img src="img/icons/prev.png" alt=""></button>',
        nextArrow: '<button class="next"><img src="img/icons/next.png" alt=""></button>'

    });
// gallery_slider
    $('.images_slider').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="prev_for_gallery"><img src="img/icons/prev.png" alt=""></button>',
        nextArrow: '<button class="next_for_gallery"><img src="img/icons/next.png" alt=""></button>'

    });
});