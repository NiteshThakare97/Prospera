/**
 * Start post portfolio widget script
 */

(function($, elementor) {
    'use strict';
    var widgetPostPrestigePortfolio = function($scope, $) {

        var postContainer = $scope.find('.bwdpppx-post-for-container');
        var postLoadMore = postContainer.find('.bwdpppx-load-more-button');
        var everyPostItem = postContainer.find('.bwdpppx-post-item');
        var postPerPageAll = postPerPage;

        
        var ctaegoryItems = postContainer.find('.category-filter-item');
        var ctaegoryItemsLoadB = postContainer.find('.category-filter-item.load-btn');
        var ctaegoryItemsLoadBA = postContainer.find('.category-filter-item.load-btn-active');


        $(ctaegoryItems).on('click', function() {

            // Remove the 'active' class from all category filter items
            $(ctaegoryItems).removeClass('active');
            
            // Add the 'active' class to the clicked category filter item
            $(this).addClass('active');
    
            var filter = $(this).data('filter');
    
            if (filter === 'all') {
                $(everyPostItem).show();
            } else {
                $(everyPostItem).hide();
                $( '.bwdpppx-post-item[data-category*="' + filter + '"]').show();
            }
        });


        

    $(ctaegoryItemsLoadB).on('click', function(){
        $(postLoadMore).css("display","none");
    });
    $(ctaegoryItemsLoadBA).on('click', function(){
        $(postLoadMore).css("display","inline-block");
    });

    $(everyPostItem).each(function(postItems, postItemsIndex){
        if( postItems >= postPerPageAll ) {
            $(postItemsIndex).css("display","none");
        }
    });
    $(postLoadMore).click(function(ex){

        $(everyPostItem).each(function(postItems, postItemsIndex){
            if( postItems >= postPerPageAll ) {
                $(postItemsIndex).toggle();
            }
        });
    });
          
       


    };
    $(window).on('elementor/frontend/init', function() {
        elementorFrontend.hooks.addAction('frontend/element_ready/bwdpppx-post-prestige-portfolio.default', widgetPostPrestigePortfolio);
    });
}(jQuery, window.elementorFrontend));

/**
 * End honeycombs widget script
 * 
 * 
 * 
 */



