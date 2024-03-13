

/**
 * Start honeycombs widget script
 */

(function($, elementor) {
    'use strict';
    var widgetContentswitchX = function(e, t, $scope, $) {

        var r = e[0];
        r.querySelector(".bwdcspx-primary-toggle-label").classList.add("active"),
            (r.querySelector(".bwdcspx-toggle-switch").onclick = function (e) {
                e.preventDefault(),
                    "primary" == (r.querySelector(".bwdcspx-toggle-content-wrap").classList.contains("primary") ? "primary" : "secondary")
                        ? (r.querySelector(".bwdcspx-toggle-content-wrap").classList.remove("primary"),
                          r.querySelector(".bwdcspx-toggle-content-wrap").classList.add("secondary"),
                          r.querySelector(".bwdcspx-toggle-switch-container").classList.add("bwdcspx-toggle-switch-on"),
                          r.querySelector(".bwdcspx-primary-toggle-label").classList.remove("active"),
                          r.querySelector(".bwdcspx-secondary-toggle-label").classList.add("active"))
                        : (r.querySelector(".bwdcspx-toggle-content-wrap").classList.add("primary"),
                          r.querySelector(".bwdcspx-toggle-content-wrap").classList.remove("secondary"),
                          r.querySelector(".bwdcspx-toggle-switch-container").classList.remove("bwdcspx-toggle-switch-on"),
                          r.querySelector(".bwdcspx-primary-toggle-label").classList.add("active"),
                          r.querySelector(".bwdcspx-secondary-toggle-label").classList.remove("active"));
                    
            });
    };
    $(window).on('elementor/frontend/init', function() {
        elementorFrontend.hooks.addAction('frontend/element_ready/bwdcspx-content-switch-plus.default', widgetContentswitchX);
    });
}(jQuery, window.elementorFrontend));

/**
 * End honeycombs widget script
 * 
 * 
 * 
 */