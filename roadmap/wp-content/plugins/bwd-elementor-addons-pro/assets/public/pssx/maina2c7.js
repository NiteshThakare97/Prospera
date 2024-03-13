/* Start Essential Pricing Plan Switcher JS */

jQuery(document).ready(function () {
    "use strict";
    jQuery(document).on('change', '.bwdpssx-plan-switcher input', function(){
        if(jQuery(this).prop('checked') == true){
            jQuery(this).parent().parent().parent().find('.bwdpssx-plan-item-1').css('display', 'none');
            jQuery(this).parent().parent().parent().find('.bwdpssx-plan-item-2').css('display', 'block');

        } else{
            jQuery(this).parent().parent().parent().find('.bwdpssx-plan-item-2').css('display', 'none');
            jQuery(this).parent().parent().parent().find('.bwdpssx-plan-item-1').css('display', 'block');
        }
    });
});

/* End Essential Pricing Plan Switcher JS */