(function ($, elementor) {
    'use strict';

    var i = "",
        o = 0,
        r = 0,
        a = 0,
        n = "off",
        s = 0;
    function l(e) {
        var t = jQuery(e).parent().height(),
            i = (s * t) / 100;
        return jQuery(e).parent().offset().top + i;
    }
    function y(e, t, i) {
        "top-left" == e && (jQuery(".bwdsvpx-sticky-video-player2.out").css("top", "40px"), jQuery(".bwdsvpx-sticky-video-player2.out").css("left", "40px")),
            "top-right" == e && (jQuery(".bwdsvpx-sticky-video-player2.out").css("top", "40px"), jQuery(".bwdsvpx-sticky-video-player2.out").css("right", "40px")),
            "bottom-right" == e && (jQuery(".bwdsvpx-sticky-video-player2.out").css("bottom", "40px"), jQuery(".bwdsvpx-sticky-video-player2.out").css("right", "40px")),
            "bottom-left" == e && (jQuery(".bwdsvpx-sticky-video-player2.out").css("bottom", "40px"), jQuery(".bwdsvpx-sticky-video-player2.out").css("left", "40px")),
            jQuery(".bwdsvpx-sticky-video-player2.out").css("width", i + "px"),
            jQuery(".bwdsvpx-sticky-video-player2.out").css("height", t + "px");
    }
    function u(e, t) {
        e.on("play", function (e) {
            (a = l(t)),
                jQuery(".bwdsvpx-sticky-video-player2").removeAttr("id"),
                jQuery(".bwdsvpx-sticky-video-player2:not(.out)").removeClass("out"),
                t.attr("id", "videobox"),
                (n = "on"),
                (i = t.data("position")),
                (r = t.data("sheight")),
                (o = t.data("swidth"));
        });
    }

    var widgetStickyVideoEditMode = function (e, t, i) {
        var o;
        t.attributes.settings.on("change:bwdsvpxsv_sticky_width", function () {
            clearTimeout(o),
                (o = setTimeout(function () {
                    var i = Math.ceil(t.getSetting("bwdsvpxsv_sticky_width") / 1.78);
                    (t.attributes.settings.attributes.bwdsvpxsv_sticky_height = i), (e.el.querySelector('[data-setting="bwdsvpxsv_sticky_height"]').value = i);
                }, 250));
        }),
            t.attributes.settings.on("change:bwdsvpxsv_sticky_height", function () {
                clearTimeout(o),
                    (o = setTimeout(function () {
                        var i = Math.ceil(1.78 * t.getSetting("bwdsvpxsv_sticky_height"));
                        (t.attributes.settings.attributes.bwdsvpxsv_sticky_width = i), (e.el.querySelector('[data-setting="bwdsvpxsv_sticky_width"]').value = i);
                    }, 250));
            });
    }
  
    var widgetStickyVideo = function (e, t) {

        // t(".bwdsvpxsv-sticky-player-close", e).show();
                    var c,
                        d,
                        p,
                        f = e.find(".bwdsvpx-sticky-video-player2");
                    (c = f.data("sticky")), (d = f.data("autoplay")), (i = f.data("position")), (r = f.data("sheight")), (o = f.data("swidth")), (p = f.data("overlay")), (s = f.data("scroll_height")), y(i, r, o);
                    var v = new Plyr("#bwdsvpxsv-player-" + e.data("id"));
                    if (("no" === p && "yes" === c && ((a = l(f)), f.attr("id", "videobox"), (n = "on"), u(v, f)), "yes" === p && "yes" === d)) {
                        var h = f.prev();
                        (n = "off"), t(".bwdsvpx-sticky-video-wrapper > i").hide(), h.css("display", "none"), v.play(), "yes" === c && ((a = l(f)), f.attr("id", "videobox"), (n = "on"), u(v, f));
                    } else if ("yes" === p) {
                        h = f.prev();
                        (n = "off"),
                            t(h).on("click", function () {
                                t(".bwdsvpx-sticky-video-wrapper > i").hide(), t(this).css("display", "none"), v.play(), "yes" === c && ((a = l(f)), f.attr("id", "videobox"), (n = "on"), u(v, f));
                            });
                    }
                    v.on("pause", function (e) {
                        n = "off";
                    }),
                        v.on("play", function (e) {
                            f.closest(".bwdsvpx-sticky-video-player2").find(".plyr__poster").hide(), (n = "on");
                        }),
                        t(".bwdsvpxsv-sticky-player-close").on("click", function () {
                            f.removeClass("out").addClass("in"), t(".bwdsvpx-sticky-video-player2").removeAttr("style"), (n = "off");
                        }),
                        f.parent().css("height", f.height() + "px"),
                        t(window).resize(function () {
                            f.parent().css("height", f.height() + "px");
                        });
    }
  
    $(window).on('elementor/frontend/init', function () { 
        elementorFrontend.isEditMode() && elementorFrontend.hooks.addAction("panel/open_editor/widget/bwdsvpx-sticky-video-prime",widgetStickyVideoEditMode);
        elementorFrontend.hooks.addAction('frontend/element_ready/bwdsvpx-sticky-video-prime.default',widgetStickyVideo);
    });
  })(jQuery, window.elementorFrontend);