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

    $('.menu__toggle').click(function (e) {
        e.preventDefault();
        $('li.header__menu').toggleClass('hamb');

    })

});