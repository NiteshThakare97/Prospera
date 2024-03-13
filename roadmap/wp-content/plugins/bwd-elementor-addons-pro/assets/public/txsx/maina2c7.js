
(function ($, elementor) {
    'use strict';

    var TabifyXpert = function (e, a) {
        var t = e.find(".bwdtxsx-advance-tabs"),
            i = t.data("custom-id-offset");
        
        if (!t.attr("id")) return false;

        var s = "#" + t.attr("id").toString(),
            n = window.location.hash.substr(1);
        
        n = "safari" === n ? "bwdtxsx-safari" : n;

        window.addEventListener("hashchange", function (e) {
            n = window.location.hash.substr(1);
            if (typeof n !== 'undefined' && n) {
                a("#" + n).trigger("click");
            }
        });

        var l = false;

        a(s + " > .bwdtxsx-tabs-nav ul li", e).each(function (i) {
            if (n && a(this).attr("id") == n) {
                a(s + " .bwdtxsx-tabs-nav > ul li", e)
                    .removeClass("active")
                    .addClass("inactive");
                a(this).removeClass("inactive").addClass("active");
                l = true;
            } else if (a(this).hasClass("active-default") && !l) {
                a(s + " .bwdtxsx-tabs-nav > ul li", e)
                    .removeClass("active")
                    .addClass("inactive");
                a(this).removeClass("inactive").addClass("active");
            } else if (i === 0 && t.hasClass("bwdtxsx-tab-auto-active")) {
                a(this).removeClass("inactive").addClass("active");
            }
        });

        a(s + " > .bwdtxsx-tabs-content > div", e).each(function (i) {
            if (n && a(this).attr("id") == n + "-tab") {
                a(s + " > .bwdtxsx-tabs-content > div", e).removeClass("active");
                var l = a(this).closest(".bwdtxsx-tabs-content").closest(".bwdtxsx-tab-content-item");
                if (l.length) {
                    var d = a("#" + l.attr("id")),
                        c = d.data("title-link");
                    d.addClass("active"), a("#" + c).addClass("active");
                }
                a(this).removeClass("inactive").addClass("active");
            } else if (a(this).hasClass("active-default") && !r) {
                a(s + " > .bwdtxsx-tabs-content > div", e).removeClass("active");
                a(this).removeClass("inactive").addClass("active");
            } else if (i === 0 && t.hasClass("bwdtxsx-tab-auto-active")) {
                a(this).removeClass("inactive").addClass("active");
            }
        });

        a(s + " > .bwdtxsx-tabs-nav ul li", e).on("click", function (e) {
            e.preventDefault();
            var t = a(this).index(),
                i = a(this).closest(".bwdtxsx-advance-tabs"),
                n = a(i).children(".bwdtxsx-tabs-nav").children("ul").children("li"),
                l = a(i).children(".bwdtxsx-tabs-content").children("div");

            a(this).parent("li").addClass("active");
            a(n).removeClass("active active-default").addClass("inactive").attr("aria-selected", "false").attr("aria-expanded", "false");
            a(this).addClass("active").removeClass("inactive");
            a(this).attr("aria-selected", "true").attr("aria-expanded", "true");
            a(l).removeClass("active").addClass("inactive");
            a(l).eq(t).addClass("active").removeClass("inactive");

            a(l).each(function (e) {
                a(this).removeClass("active-default");
            });

            setTimeout(function () {
                window.dispatchEvent(new Event("resize"));
            }, 100);
        });

        if (typeof n !== 'undefined' && n && !elementorFrontend.elementStatusCheck("bwdtxsxAdvancedTabScroll")) {
            var o = i ? parseFloat(i) : 0;
            a("html, body").animate({ scrollTop: a("#" + n).offset().top - o }, 300);
        }
    };

    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/bwdtxsx-tabify-xpert-suite.default', TabifyXpert);
    });
})(jQuery, window.elementorFrontend);
