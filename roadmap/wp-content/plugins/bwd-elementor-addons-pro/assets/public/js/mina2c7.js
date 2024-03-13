(function ($) {
    "use strict";
    $(window).on("elementor/frontend/init", function() {
        elementorFrontend.hooks.addAction("frontend/element_ready/MeetTheTeamCarousel.default", function($scope) {
  
    $('.team-style-32-active').slick({
        dots: false,
        infinite: true,
		autoplay: false,
		speed: 900,
        nextArrow: '<div class="slick-next"><i class="fas fa-chevron-right"></i></div>',
		prevArrow: '<div class="slick-prev"><i class="fas fa-chevron-left"></i></div>',
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: true,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
            
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
              
                }
            },
        ]
    });
    
    $('.team-style-33-active').slick({
        dots: true,
        infinite: true,
		autoplay: true,
        arrows: false,
		speed: 800,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                }
            },
        ]
    });

    $('.team-style-34-active').slick({
        dots: true,
        infinite: true,
		autoplay: false,
        arrows: false,
		speed: 900,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    arrows: false,
                }
            },
        ]
    });
    // gellary-image-animation

    $(".snake").snakeify({
        speed: 200
    });
    /* isotop */
    $('.mtt-team-active').imagesLoaded(function () {
        // init Isotope
        var $grid = $('.mtt-team-active').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                columnWidth: '.grid-sizer',
            }
        });
        // filter items on button click
        $('.mtt-team-menu').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });
    });
    //for menu active class
    $('.mtt-team-menu button').on('click', function (event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });
    $('.mtt-team-36-active').imagesLoaded(function () {
        // init Isotope
        var $grid = $('.mtt-team-36-active').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                columnWidth: '.grid-sizer',
            }
        });
        // filter items on button click
        $('.mtt-team-36-menu').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });
    });
    //for menu active class
    $('.mtt-team-36-menu button').on('click', function (event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });
    });
    });
})(jQuery);