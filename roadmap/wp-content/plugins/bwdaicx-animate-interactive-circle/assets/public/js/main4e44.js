/**
 * Start Animate Interactive Circle widget script
 */

(function($, elementor) {
    'use strict';
    var widgetAnimateInteractiveCircle = function(e, t, $scope, $) {

        var n = e.find(".bwdaicx-circle-wrapper"),
        i = "mouseenter",
        a = n.data("animation"),
        r = n.data("autoplay"),
        o = parseInt(n.data("autoplay-interval")),
        c = 0;
        // if ("bwdaicx-interactive-circle-animation-0" != a) {
        //     var l = e.find(".bwdaicx-circle-content");
        //     t(l).waypoint(
        //         function () {
        //             n.addClass(a);
        //         },
        //         { offset: "80%", triggerOnce: !0 }
        //     );
        // }
        n.hasClass("bwdaicx-interactive-circle-event-click") && (i = "click");
        var u = n.find(".bwdaicx-circle-btn"),
            s = n.find(".bwdaicx-circle-btn-content");
        function f() {
            var e = 0;
            u.each(function (n) {
                t(this).hasClass("active") && (e = (e = n + 1) >= u.length ? 0 : e);
            }),
                setTimeout(function () {
                    t(u[e]).trigger(i);
                }, 300);
        }
        u.each(function (e) {
            t(this).on(i, function (e) {
                var n = t(this);
                0 == t(this).hasClass("active") &&
                    (u.each(function (e) {
                        t(this).removeClass("active");
                    }),
                    n.addClass("active"),
                    s.each(function (e) {
                        t(this).removeClass("active"), t(this).hasClass(n.attr("id")) && t(this).addClass("active");
                    })),
                    (c = e.originalEvent ? 1 : 0);
            });
        }),
        r &&
        setInterval(function () {
            c
                ? setTimeout(function () {
                        f();
                    }, 5e3)
                : f();
        }, o);
    };
    jQuery(window).on('elementor/frontend/init', function() {
        elementorFrontend.hooks.addAction('frontend/element_ready/bwdaicx-animate-interactive-circle.default', widgetAnimateInteractiveCircle);
    });
}(jQuery, window.elementorFrontend));

/**
 * End Animate Interactive Circle widget script
 */

