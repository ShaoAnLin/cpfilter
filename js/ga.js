define('ga',
    ["https://www.googletagmanager.com/gtag/js?id=UA-132312070-1"], function(){
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'UA-132312070-1');
});