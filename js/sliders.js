$(document).ready(function () {
    $('.slider').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="prev"><img src="img/icons/prev.png" alt=""></button>',
        nextArrow: '<button class="next"><img src="img/icons/next.png" alt=""></button>'

    });
});