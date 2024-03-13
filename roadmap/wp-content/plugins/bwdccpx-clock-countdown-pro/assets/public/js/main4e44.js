(function ($) {
    'use strict';

    var Countdown = function ($scope) {
        $scope.each(function () {
            var $countdownWrapper = $(this).find('.bwdccpx-countdown-wrapper');
            var $countdownElement = $(this).find('.bwdccpx-countdown-items');
            var countdownDateTime = $countdownElement.data('date');
            var countdownExpireType = $countdownWrapper.data('expire-type');
            var redirectUrl = $countdownElement.data('redirect-url');
            var targetDate = new Date(countdownDateTime).getTime();
            var expiredMessageElement = $(this).find('.bwdccpx-countdown-expiry-template');

            function updateCountdown() {
                var now = new Date().getTime();
                var distance = targetDate - now;

                var daysElement = $(this).find('[data-days]');
                var hoursElement = $(this).find('[data-hours]');
                var minutesElement = $(this).find('[data-minutes]');
                var secondsElement = $(this).find('[data-seconds]');

                if (daysElement.length && hoursElement.length && minutesElement.length && secondsElement.length) {
                    if (distance > 0) {
                        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

                        daysElement.text(days < 10 ? '0' + days : days);
                        hoursElement.text(hours < 10 ? '0' + hours : hours);
                        minutesElement.text(minutes < 10 ? '0' + minutes : minutes);
                        secondsElement.text(seconds < 10 ? '0' + seconds : seconds);
                    } else {
                        clearInterval(countdownInterval);
                        $countdownElement.hide(); // Hide the countdown timer

                        if (countdownExpireType === 'template') {
                            expiredMessageElement.show(); // Show the expiration message
                        } else if (countdownExpireType === 'url' && redirectUrl) {
                            window.location.href = redirectUrl; // Redirect to the specified URL
                        }
                    }
                }
            }

            var countdownInterval = setInterval(updateCountdown.bind(this), 1000);
            updateCountdown.call(this);
        });
    };

    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/bwdccpx-clock-pro-countdown.default', Countdown);
    });

})(jQuery, window.elementorFrontend);
