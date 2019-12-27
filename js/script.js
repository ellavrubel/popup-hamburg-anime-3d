$(document).ready(function () {

// кнопка наверх

    var btn = $('#button');

    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
    });

//    меню Hamburger

    if( $(window).width() < 768) {

        $('.menu__toggle').click(function (e) {
            e.preventDefault();
            $('li.header__menu').toggleClass('hamb');
        });
        $('ul.header__nav li a').click(function (e) {
            e.preventDefault();
            $('li.header__menu').toggleClass('hamb');
        });
    }

//    плавная прокрутка

    $("a.scrollto").click(function() {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination }, 800);
        return false;
    });

//    Pop-up window

    $('a.modal-btn').click(function (e) {
        e.preventDefault();
        var destinationPopup = $(this).attr('href');
        $(destinationPopup).addClass('window');

        $('.popup__close, .popup__overlay').click(function () {
        $(destinationPopup).removeClass('window');
        });
    });

//    slider

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        rtl: true,
        // smartSpeed : 900,
        // center: true,
        dotsEach: 3,
        dotsSpeed: 1500,
        itemsScaleUp:true,
        autoHeight:true,

        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })

// 3D effects





});