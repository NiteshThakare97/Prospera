



/**
 * Start honeycombs widget script
 */

(function($, elementor) {
    'use strict';
    var widgetHoneycombs = function($scope, $) {
        var $honeycombsArea = $scope.find('.bwdadt_common'),
        $honeycombs = $honeycombsArea.find('#table-id');
        if (!$honeycombsArea.length) {
            return;
        }

        var $settings = $honeycombs.data('settings');
        
		$.fn.dataTable.ext.errMode = 'none';
		$($honeycombs).DataTable({
            "responsive": $settings.trespon || false,
            "paging": $settings.paging || false,
            "searching": $settings.search || false,
            "info": $settings.finfo || false,
            "lengthMenu": $settings.lmenu,
        });


    };
    jQuery(window).on('elementor/frontend/init', function() {
        elementorFrontend.hooks.addAction('frontend/element_ready/bwdadt-creative-table.default', widgetHoneycombs);
    });
}(jQuery, window.elementorFrontend));







