$(function () {

    $('.intro__slider').slick({
        autoplay: true,
        dots: true,
        nextArrow: '<button type="button" class="slick-next"><img class="slick__img" src="images/next.svg" alt="back"></button>',
        prevArrow: '<button type="button" class="slick-prev"><img class="slick__img" src="images/back.svg" alt="back"></button>',
    })

    let burger = $(".burger");
    let burger_menu = $(".burger__menu");
    let line1 = $(".line1");
    let line2 = $(".line2");
    let line3 = $(".line3");
    burger.click(function(){
        burger_menu.toggleClass("active");
        burger.toggleClass("active");
        line1.toggleClass("active");
        line2.toggleClass("active");
        line3.toggleClass("active");
    })

})