!function(n){n.fn.honeycombs=function(t){var i=n.extend({combWidth:250,margin:0,threshold:3,widthTablet:250,widthMobile:300},t);function d(t){n(t).addClass("bwdhcx-honeycombs-wrapper");var d=0,e=0,r=0,o=null;function a(a){var b;b="",b=window.outerWidth>i.viewportLg?i.combWidth:window.outerWidth>i.viewportMd?i.widthTablet:i.widthMobile,r=e=b,n(t).find(".bwdhcx-comb").width(e).height(r),n(t).find(".bwdhcx-icon-hex-lg").css("font-size",e),d=n(t).width();var c=n(t).parent().width();c<d&&(d=c),o.width(c);var h=0,s=0,p=0,f=1,l=0,m=function(n){return(n+1)%2},w=function(){return s*(.5*r*Math.sqrt(3)+i.margin)};function u(r,o){n(t).find(".bwdhcx-comb").filter(":not(.placeholder.hide)").each((function(t){l=o(l),!0===a?(n(this).stop(!0,!1),n(this).animate({left:f,top:l})):n(this).css("left",f).css("top",l),(f+=e+i.margin)>h&&(h=f),0===s&&1,f+e>d&&(s+=1,p=r(p),f=p/2*(e+i.margin))}))}c<1.5*(e+i.margin)?(n(".bwdhcx-comb.placeholder").addClass("hide"),u((function(n){return n}),(function(){return s*(r+i.margin+.1*r)}))):c<i.threshold*(e+i.margin)?(n(".bwdhcx-comb.placeholder").addClass("hide"),u(m,w)):(n(".bwdhcx-comb.placeholder").removeClass("hide"),u(m,w)),o.height(l+r).width(h-i.margin)}n(window).resize((function(){a(!0)})),n(t).find(".bwdhcx-comb").wrapAll('<div class="bwdhcx-honeycombs-inner-wrapper"></div>'),o=n(t).find(".bwdhcx-honeycombs-inner-wrapper"),n(t).find(".bwdhcx-comb").append('<div class="bwdhcx-comb-inner-wrapper"></div>'),n(t).find(".bwdhcx-comb-inner-wrapper").append('<div class="bwdhcx-inner front"></div>'),n(t).find(".bwdhcx-comb-inner-wrapper").append('<div class="bwdhcx-inner back"></div>'),n(t).find(".bwdhcx-inner").append('<div class="bwdhcx-wrapper"></div>'),n(t).find(".bwdhcx-comb-inner-wrapper").append('<span class="bwdhcx-icon-hex-lg"></span>'),n(t).find(".bwdhcx-comb").each((function(){1,n(this).find(".bwdhcx-inner").length>0?(n(this).find(".bwdhcx-inner.front .bwdhcx-wrapper").html(n(this).find(".bwdhcx-front-content").html()),n(this).find(".bwdhcx-inner.back .bwdhcx-wrapper").html(n(this).find(".bwdhcx-back-content").html()),n(this).find(".bwdhcx-front-content").remove(),n(this).find(".bwdhcx-back-content").remove()):n(this).find(".bwdhcx-inner").remove()})),a(!1)}return this.each((function(){d(this)}))}}(jQuery);