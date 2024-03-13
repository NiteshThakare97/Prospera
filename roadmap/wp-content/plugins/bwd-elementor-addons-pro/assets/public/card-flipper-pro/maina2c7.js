(function (n) {
    "use strict";
    window.interactiveCards = function (t) {
        var e = { container: t.containerId, frontAnimation: t.frontAnimation, rearAnimation: t.rearAnimation, contentAnimation: t.contentAnimation, revealTime: t.revealTime },
            i = (n("#" + e.container), n("#" + e.container + " .bwdcfpx-front-content")),
            a = n("#" + e.container + " .bwdcfpx-front-content .bwdcfpx-image-screen"),
            o = (a.data("bg"), n("#" + e.container + " .content")),
            r = n("#" + e.container + " .close-me");
        a.on("click", function () {
            n(this).removeClass(e.frontAnimation.end).addClass(e.frontAnimation.start),
                setTimeout(function () {
                    i.removeClass(e.rearAnimation.end).addClass(e.rearAnimation.start),
                        setTimeout(function () {
                            o.addClass(e.contentAnimation);
                        }, 2 * t.revealTime);
                }, t.revealTime);
            var a,
                r = n(this).closest(".interactive-card").not(".eaNiceScrollActivated");
            r.length &&
                ((a = r),
                /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || n(".bwdcfpx-content-overflow", a).niceScroll({ cursorcolor: "#424242", cursorwidth: "5px", cursorborder: "1px solid #fff", cursorborderradius: "5px", zindex: 1e3 }),
                r.addClass("eaNiceScrollActivated"));
        }),
            r.on("click", function () {
                o.removeClass(e.contentAnimation),
                    setTimeout(function () {
                        i.removeClass(e.rearAnimation.start).addClass(e.rearAnimation.end),
                            setTimeout(function () {
                                a.removeClass(e.frontAnimation.start).addClass(e.frontAnimation.end);
                            }, 2 * t.revealTime);
                    }, t.revealTime);
            });
        var c = n("#" + t.containerId + " .carousel-container"),
            s = c.find("ul"),
            d = s.find("li"),
            l = c.width(),
            m = d.first().children("img").width(),
            f = s.children("li").length,
            v = m * f,
            u = 1;
        function A(n, t) {
            var e = -(n - 1) * t;
            s.animate({ left: e });
        }
        s.css("width", v + "px"),
            d.css("width", l + "px"),
            n("#" + t.containerId + " a.nav").on("click", function (t) {
                t.preventDefault();
                var e = n(this).data("nav");
                "next" === e ? A(u === f ? (u = 1) : ++u, m) : "prev" === e && A(1 == u ? (u = f) : --u, m);
            });
    };
})(jQuery);

(function($, elementor) {
    'use strict';
    var widgetCardFlipper = function (e, t, $scope, $) {
        var n = e.find(".interactive-card").eq(0),
                r = void 0 !== n.data("interactive-card-id") ? n.data("interactive-card-id") : "",
                i = void 0 !== n.data("animation") ? n.data("animation") : "",
                o = void 0 !== n.data("animation-time") ? n.data("animation-time") : "",
                a = {
                    containerId: "interactive-card-" + r,
                    frontAnimation: { start: "fade-out", end: "fade-in" },
                    rearAnimation: { start: "zoom-out", end: "zoom-in" },
                    contentAnimation: i.toString(),
                    revealTime: o
                };
            interactiveCards(a);
            var d = "#interactive-card-" + r;
            jQuery(document).on("click", d + " .close.close-me", function () {
                var e = jQuery(d + " iframe");
                e.attr("src", e.attr("src"));
            });
    };
    jQuery(window).on('elementor/frontend/init', function() {
        elementorFrontend.hooks.addAction('frontend/element_ready/bwdcfpx-card-flipper-pro.default', widgetCardFlipper);
    });
}(jQuery, window.elementorFrontend));