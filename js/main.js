requirejs.config({
    baseUrl: "js",
	paths: {
		jquery: 'vendor/jquery-2.1.4.min',
		react: 'react.min',
		reactDOM: 'react-dom.min'
	},
	shim: {
		// Libraries
		'react': 'jquery',
		'reactDOM': ['jquery', 'react'],
		'vendor/preloader.min': 'jquery',
		'vendor/bootstrap.min': 'jquery',
		'vendor/gmap3.min': 'jquery',
		'vendor/jquery.themepunch.revolution.min': ['jquery'],

		// JSX
		'header': ['react', 'reactDOM', 'constant'],
		'footer': ['react', 'reactDOM'],
		'sideNav': ['react', 'reactDOM', 'constant'],
		'productImg': ['react', 'reactDOM', 'constant'],
		'products': ['react', 'reactDOM', 'constant', 'productImg'],
		'productDetail': ['react', 'reactDOM', 'constant', 'productImg', 'common'],

		// Mine
		'home': ['jquery', 'vendor/TweenMax.min'],
		'common': [
			'header',
			'footer',
			'sideNav',
			'javascriptStrings',
			'jquery',
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
			'vendor/gmap3.min']
	}
});

define(['vendor/jquery-2.1.4.min'], function(){

});