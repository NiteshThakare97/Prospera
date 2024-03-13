(function($) {
    "use strict";

    $(window).on("elementor/frontend/init", function() {
        elementorFrontend.hooks.addAction("frontend/element_ready/Testimonials.default", function($scope) {

            $scope.find('.tbt-testimonial-one .tbt-testimonial-item-wrapper').each(function() {
                var element = $(this)[0];
                if (element) {
                    $(element).slick({
                        dots: false,
                        infinite: true,
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: false,
                        autoplay: true,
                        autoplaySpeed: 3500,

                        responsive: [{
                                breakpoint: 1200,
                                settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 1,
                                    infinite: true,
                                    dots: false
                                }
                            },
                            {
                                breakpoint: 992,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1
                                }
                            },
                            {
                                breakpoint: 480,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1
                                }
                            }
                        ]
                    })
                }
            });

            $scope.find('.tbt-testimonial-two .tbt-testimonial-item-wrapper').each(function() {
                var element = $(this)[0];
                if (element) {
                    $(element).slick({
                        dots: false,
                        infinite: true,
                        autoplaySpeed: 3500,
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: false,
                        autoplay: true,

                        responsive: [{
                                breakpoint: 1200,
                                settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 1,
                                    infinite: true,
                                    dots: false
                                }
                            },
                            {
                                breakpoint: 992,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1
                                }
                            },
                            {
                                breakpoint: 480,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1
                                }
                            }
                        ]
                    })
                }
            });

            $scope.find('.tbt-testimonial-three .tbt-testimonial-item-wrapper').each(function() {
                var element = $(this)[0];
                if (element) {
                    $(element).slick({
                        dots: false,
                        infinite: true,
                        autoplaySpeed: 3500,
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: false,
                        autoplay: true,

                        responsive: [{
                                breakpoint: 1200,
                                settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 1,
                                    infinite: true,

                                }
                            },
                            {
                                breakpoint: 992,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                                    infinite: true,
                                }
                            },
                            {
                                breakpoint: 768,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                                    infinite: true,
                                }
                            }
                        ]
                    })
                }
            });

            $scope.find('.tbt-testimonial-four .tbt-testimonial-item-wrapper').each(function() {
                var element = $(this)[0];
                if (element) {
                    $(element).slick({
                        dots: false,
                        infinite: true,
                        autoplaySpeed: 3500,
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: false,
                        autoplay: true,

                        responsive: [{
                                breakpoint: 1200,
                                settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 1,
                                    infinite: true,

                                }
                            },
                            {
                                breakpoint: 992,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                                    infinite: true,
                                    // autoplay: true,

                                }
                            },
                            {
                                breakpoint: 768,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                                    infinite: true,
                                    // autoplay: true,
                                }
                            }
                        ]
                    })
                }
            });

            $scope.find('.tbt-testimonial-five .tbt-testimonial-item-wrapper').each(function() {
                var element = $(this)[0];
                if (element) {
                    $(element).slick({
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: true,
                        autoplaySpeed: 3500,
                        arrows: false,
                        dots: true,
                        infinite: true,
                    })
                }
            });

            $scope.find('.tbt-slide-area').each(function() {
                var element = $(this)[0];
                if (element) {
                    $(element).slick({
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        asNavFor: '.tbt-slide-indicators',
                        autoplay: false,
                        autoplaySpeed: 3000,
                        infinite: true,
                    })
                }
            });

            $scope.find('.tbt-slide-indicators').each(function() {
                var element = $(this)[0];
                if (element) {
                    $(element).slick({

                        slidesToShow: 3,
                        slidesToScroll: 1,
                        asNavFor: '.tbt-slide-area',
                        dots: false,
                        arrows: false,
                        centerMode: true,
                        focusOnSelect: true,
                        infinite: true,
                        centerPadding: 0,
                        responsive: [{
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1,
                                infinite: true,

                            }
                        }]
                    })
                }
            });

            $scope.find('.tbt-testimonial-seven .tbt-testimonial-item-wrapper').each(function() {
                var element = $(this)[0];
                if (element) {
                    $(element).slick({
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: false,
                        autoplaySpeed: 3500,
                        arrows: true,
                        dots: false,
                        vertical: true,
                        prevArrow: '<button class="next-btn"><i class="fas fa-chevron-down"></i></button>',
                        nextArrow: '<button class="prev-btn"><i class="fas fa-chevron-up"></i></button>',
                        verticalSwiping: true,
                        responsive: [{
                                breakpoint: 1200,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                                    infinite: true,

                                }
                            },
                            {
                                breakpoint: 992,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                                    infinite: true,
                                    // autoplay: true,

                                }
                            },
                            {
                                breakpoint: 768,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                                    infinite: true,
                                    arrows: true,
                                    // autoplay: true,
                                }
                            }
                        ]
                    })
                }
            });

            $scope.find('.tbt-testimonial-eight .tbt-testimonial-item-wrapper').each(function() {
                var element = $(this)[0];
                if (element) {
                    $(element).slick({
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: true,
                        autoplaySpeed: 3500,
                        arrows: true,
                        dots: false,
                        prevArrow: '<button class="next-btn"><i class="fas fa-angle-right"></i></button>',
                        nextArrow: '<button class="prev-btn"><i class="fas fa-angle-left"></i></button>',
                        responsive: [{
                                breakpoint: 1200,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                                    infinite: true,

                                }
                            },
                            {
                                breakpoint: 992,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                                    infinite: true,
                                    // autoplay: true,

                                }
                            },
                            {
                                breakpoint: 768,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                                    infinite: true,
                                    arrows: false,
                                    // autoplay: true,
                                }
                            }
                        ]
                    })
                }
            });

            $scope.find('.tbt-testimonial-nine .tbt-testimonial-item-wrapper').each(function() {
                var element = $(this)[0];
                if (element) {
                    $(element).slick({
                        dots: false,
                        infinite: true,
                        autoplaySpeed: 3500,
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: true,
                        autoplay: false,

                        responsive: [{
                                breakpoint: 1100,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                                    infinite: true,
                                    dots: true
                                }
                            },
                            {
                                breakpoint: 600,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1
                                }
                            },
                            {
                                breakpoint: 480,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1
                                }
                            }
                        ]
                    })
                }
            });

            $scope.find('.tbt-testimonial-ten .tbt-testimonial-item-wrapper').each(function() {
                var element = $(this)[0];
                if (element) {
                    $(element).slick({
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: true,
                        autoplaySpeed: 3500,
                        arrows: true,
                        dots: false,
                        prevArrow: '<button class="next-btn"><i class="fas fa-angle-right"></i></button>',
                        nextArrow: '<button class="prev-btn"><i class="fas fa-angle-left"></i></button>',
                        responsive: [{
                                breakpoint: 1200,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                                    infinite: true,
                                }
                            },
                            {
                                breakpoint: 992,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                                    arrows: false,
                                }
                            },
                            {
                                breakpoint: 480,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                                    arrows: false,

                                }
                            }
                        ]
                    })
                }
            });

            $scope.find(".panorama").each(function() {
                var element = $(this)[0];
                if (element) {
                    $(element).slick({
                        repeat: false, // The image will repeat when the user scroll reach the bounding box. The default value is false.
                        direction: "horizontal", // Let you define the direction of the scroll. Acceptable values are "horizontal" and "vertical". The default value is horizontal
                        animationTime: 700, // This allows you to set the easing time when the image is being dragged. Set this to 0 to make it instant. The default value is 700.
                        easing: "ease-out", // You can define the easing options here. This option accepts CSS easing options. Available options are "ease", "linear", "ease-in", "ease-out", "ease-in-out", and "cubic-bezier(...))". The default value is "ease-out".
                        overlay: true // Toggle this to false to hide the initial instruction overlay
                    })
                }
            });

            $scope.find('.tbt-testimonial-eleven .tbt-testimonial-item-wrapper').each(function() {
                var element = $(this)[0];
                if (element) {
                    $(element).slick({
                        dots: false,
                        infinite: true,
                        autoplaySpeed: 3500,
                        autoplay: false,
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: true,

                        responsive: [{
                                breakpoint: 1200,
                                settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 1,
                                    infinite: true,
                                    dots: true
                                }
                            },
                            {
                                breakpoint: 992,
                                settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 1
                                }
                            },
                            {
                                breakpoint: 768,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1
                                }
                            }
                        ]
                    })
                }
            });

            $scope.find('.tbt-testimonial-twelve .tbt-testimonial-item-wrapper').each(function() {
                var element = $(this)[0];
                if (element) {
                    $(element).slick({
                        dots: false,
                        autoplay: true,
                        infinite: true,
                        autoplaySpeed: 3500,
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: false,

                        responsive: [{
                                breakpoint: 1200,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                                    infinite: true,
                                    dots: false
                                }
                            },
                            {
                                breakpoint: 992,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1
                                }
                            }

                        ]
                    })
                }
            });

            $scope.find('.tbt-testimonial-thirteen .tbt-testimonial-item-wrapper').each(function() {
                var element = $(this)[0];
                if (element) {
                    $(element).slick({
                        dots: false,
                        infinite: true,
                        autoplay: true,
                        autoplaySpeed: 3500,

                        slidesToShow: 3,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: true,

                        responsive: [{
                                breakpoint: 1200,
                                settings: {
                                    slidesToShow: 3,
                                    slidesToScroll: 1,
                                    infinite: true,
                                    // dots: true
                                }
                            },
                            {
                                breakpoint: 992,
                                settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 1
                                }
                            },
                            {
                                breakpoint: 768,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1
                                }
                            }
                        ]
                    })
                }
            });

            $scope.find('.tbt-testimonial-fourteen .tbt-testimonial-item-wrapper').each(function() {
                var element = $(this)[0];
                if (element) {
                    $(element).slick({
                        dots: false,
                        infinite: true,
                        autoplaySpeed: 3500,
                        autoplay: true,
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: true,

                        responsive: [{
                                breakpoint: 1200,
                                settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 1,
                                    infinite: true,
                                    dots: true
                                }
                            },
                            {
                                breakpoint: 992,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1
                                }
                            },

                        ]
                    })
                }
            });

            $scope.find('.tbt-testimonial-fifteen .tbt-testimonial-item-wrapper').each(function() {
                var element = $(this)[0];
                if (element) {
                    $(element).slick({
                        dots: false,
                        infinite: true,
                        autoplaySpeed: 3500,
                        autoplay: true,
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        arrows: true,
                        dots: true,
                        prevArrow: '<button class="next-btn"><i class="fas fa-angle-right"></i></button>',
                        nextArrow: '<button class="prev-btn"><i class="fas fa-angle-left"></i></button>',

                        responsive: [{
                                breakpoint: 1200,
                                settings: {
                                    slidesToShow: 3,
                                    slidesToScroll: 1,
                                    infinite: true,
                                    dots: true
                                }
                            },
                            {
                                breakpoint: 992,
                                settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 1
                                }
                            },
                            {
                                breakpoint: 768,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                                    arrows: false,
                                }
                            }
                        ]
                    })
                }
            });
        });
    });

})(jQuery)