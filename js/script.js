$(function () {
    $('.search__tab').on('click', function () {
        $('.search__tab')
            .removeClass('search__tab-active');
        $(this)
            .addClass('search__tab-active');
        $('div.search__form')
            .removeClass('search__form-active').eq($(this).index()).addClass('search__form-active');
    });

        if(screen.width<769){
            $('.places__slider').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: false,
                dots: true,
            });
            $('.honeymoon__slider').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                navigator: true,
                autoplay: false,
                dots: true,
            });

        }
        else {
            $('.places__slider').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: false,
                dots: true,
            });
            $('.honeymoon__slider').slick({
                slidesToShow: 2,
                slidesToScroll: 1,
                navigator: true,
                centerMode: true,
                autoplay: false,
                dots: true,

            });
        }
        if (screen.width<768){
            let scrollPos = 0;
            $(window).scroll(function () {
                if ($('.nav__navigation').hasClass('nav__navigation-show'))
                    return false;
                let scroll = $(this).scrollTop();
                if (scroll> scrollPos){
                    $('.nav__row-top').slideUp();
                }
                else {
                    $('.nav__row-top').slideDown();
                }
                scrollPos = scroll;
            });
        }



    $('.popular__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        navigator: true,
        autoplay: false,
        dots: true,

    });

    $('.limited__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        navigator: true,
        adaptiveHeight: true,
        autoplay: false,
        dots: true,

    });
    if (screen.width>769) {
        $('.discount__slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            navigator: true,
        })
    }

    $('.header__burger').click(function () {
        $('.nav__row-top').toggle();
        $('.nav__navigation')
            .toggleClass('nav__navigation-show');

        $('html')
            .toggleClass('fixed')
    });

    jQuery.fn.modalWindow = function () {
        this.click(function () {
            let tripForm = document.querySelector('.trip');
            let name = $(this).attr('data-name');
            if ($(this).attr('data-trip')){
                document.querySelector('.trip-name').value = $(this).attr('data-trip');
                tripForm.removeAttribute('hidden')
            }

            $('body').addClass('modal');
            $('html').addClass('fixed');
            $('.modal__window-'+name).addClass('show');
        });
        $('.modal__window>span').click(function () {
            $('.modal__window').removeClass('show');
            $('body').removeClass('modal');
            $('html').removeClass('fixed');
            document.querySelector('.trip').setAttribute('hidden', 'hidden');
        });
    };

    $('.modal__href').modalWindow();

});
$("a[href^='#']").click(function () {
    let _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"}, 1000);
    return false;
});
