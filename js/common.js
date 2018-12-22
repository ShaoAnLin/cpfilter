define('common', [
    'scripts',
    'header',
    'footer',
    'sideNav',
    'javascriptStrings',
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

    var common = {};

    common.init = function(){
      scripts.init();
    }
    
    return common;
});