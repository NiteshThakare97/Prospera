// For toltip
jQuery(document).ready(function($) {
    $('[data-entext-wrapper-tippy]').each(function() {
        var wrapperLinkData = $(this).data('entext-wrapper-tippy');
        var tooltipText = wrapperLinkData.tooltip_text;

        $(this).attr('title', tooltipText);
    });
});
