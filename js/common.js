define('common', [
    'divUtil',
    'header',
    'JavascriptStrings',
    'vendor/jquery-2.1.4.min',
    'vendor/preloader.min',
    'vendor/bootstrap.min',
    'vendor/nouislider.min',
    'vendor/jquery.magnific-popup.min',
    'vendor/slick.min',
    'vendor/isotope.pkgd.min',
    'vendor/wNumb',
    'vendor/velocity.min',
    'vendor/slidebars.min',
    'vendor/jquery.themepunch.revolution.min',
    'vendor/gmap3.min'], function(divUtil){

    var common = {};

    common.renderCommonElements = function(){
		// Common Elements Loading
		// (Such as header and footer)
		// ----------------------------------------
		common.setActiveNav();

		$('.off-canvas-cont').html(divUtil.getSideNav());

		$('.footer').html(divUtil.getFooter());
    }

    common.setActiveNav = function(){
		var pathname = window.location.pathname;
		if (pathname.indexOf('index') >= 0){
				$('#nav-home').addClass('current');
		} else if (pathname.indexOf('aboutus') >= 0){
				$('#nav-aboutus').addClass('current');
		} else if (pathname.indexOf('products') >= 0){
				$('#nav-products').addClass('current');
		} else if (pathname.indexOf('news') >= 0){
				$('#nav-news').addClass('current');
		} else if (pathname.indexOf('contact') >= 0){
				$('#nav-contact').addClass('current');
		}
    }
    
    return common;
});