define('home', ['scripts',
    'common',
    'vendor/jquery-2.1.4.min',
    'vendor/extensions/revolution.extension.slideanims.min',
    'vendor/extensions/revolution.extension.actions.min',
    'vendor/extensions/revolution.extension.layeranimation.min',
    'vendor/extensions/revolution.extension.kenburn.min',
    'vendor/extensions/revolution.extension.navigation.min',
    'vendor/extensions/revolution.extension.parallax.min'],
    function(scripts, common){

    var home = {};
    home.init = function(){
        common.renderCommonElements();
    }
    return home;
});