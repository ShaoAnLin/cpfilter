define('common', [
    'scripts',
    'Header',
    'Footer',
    'SideNav',
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
    'vendor/gmap3.min'], function(scripts){

    var setActiveNav = function(){
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

    var common = {};

    common.init = function(){
      scripts.init();
      setActiveNav();
    }
    
    return common;
});