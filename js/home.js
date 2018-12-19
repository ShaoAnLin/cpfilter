define('home', ['scripts', 'common',
    'vendor/jquery-2.1.4.min',
    'vendor/extensions/revolution.extension.slideanims.min',
    'vendor/extensions/revolution.extension.actions.min',
    'vendor/extensions/revolution.extension.layeranimation.min',
    'vendor/extensions/revolution.extension.kenburn.min',
    'vendor/extensions/revolution.extension.navigation.min',
    'vendor/extensions/revolution.extension.parallax.min'],
    function(scripts, common){

    var instance = {}

    instance.init = function(){
        common.init();

        $(document).ready(function() {
            console.log('ready!');
            scripts.init();
            setTimeout(function(){ scripts.onLoadEvents(); }, 1000);
        });
    }

    return instance;
});