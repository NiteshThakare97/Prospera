jQuery(document).ready(function($) {
    // For popup notify button
    $('#openFormButton').on('click', function() {
        $('#ssnfyPopup').fadeIn();
    });

    // Hide the popup when the close button is clicked
    $('#ssnfyPopup button.closePopup').on('click', function() {
        $('#ssnfyPopup').fadeOut();
    });
    // For overlay
    $('#openFormButton').on('click', function() {
        $('#ssnfyOverlay, #ssnfyPopup').fadeIn();
    });

    // Hide the overlay and popup when the close button is clicked
    $('#ssnfyPopup button.closePopup, #ssnfyOverlay').on('click', function() {
        $('#ssnfyOverlay, #ssnfyPopup').fadeOut();
    });

    // For success message
    setTimeout(function() {
        $('.custom-stock-notification-success').fadeOut('slow');
    }, 3000);
});
