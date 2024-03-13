

(function ($) {


	var BWDexclusiveChart = function( $scope, $ ) {	

		var exadChartWrapper = $scope.find( '.bwdexad-chart-wrapper' ).eq(0),
		exadChartType        = exadChartWrapper.data( 'type' ),
		exadChartLabels      = exadChartWrapper.data( 'labels' ),
		exadChartsettings    = exadChartWrapper.data('settings'),
		
		exadChart            = $scope.find( '.exad-chart-widget' ).eq( 0 ),
		exadChartId          = exadChart.attr( 'id' ),
		ctx                  = document.getElementById( exadChartId ).getContext( '2d' ),
		myChart              = new Chart( ctx, exadChartsettings );	
	}






	$(window).on('elementor/frontend/init', function () {
		if( elementorFrontend.isEditMode() ) {
			editMode = true;
		}
		
		elementorFrontend.hooks.addAction( 'frontend/element_ready/bwdpcb-bar-piechart.default', BWDexclusiveChart );
		
		
	} );

}(jQuery))