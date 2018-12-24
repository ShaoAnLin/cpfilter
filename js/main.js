requirejs.config({
    baseUrl: "js",
	paths: {
		react: 'react.min',
		reactDOM: 'react-dom.min'
	},
	shim: {
		// Libraries
		'vendor/preloader.min': 'jquery',
		'vendor/bootstrap.min': 'jquery',
		'react': 'jquery',
		'reactDOM': ['jquery', 'react'],
		'vendor/jquery.themepunch.revolution.min': ['jquery'],

		// JSX
		'header': ['react', 'reactDOM', 'constant'],
		'footer': ['react', 'reactDOM'],
		'sideNav': ['react', 'reactDOM', 'constant'],
		'productImg': ['react', 'reactDOM', 'constant'],
		'products': ['react', 'reactDOM', 'constant', 'productImg'],
		'productDetail': ['react', 'reactDOM', 'constant', 'productImg', 'common'],

		'home': ['jquery', 'vendor/TweenMax.min'],
		'common': [
			'header',
			'footer',
			'sideNav',
			'javascriptStrings',
			'jquery',
			'vendor/preloader.min',
			'vendor/bootstrap.min',
			'vendor/slick.min',
			'vendor/velocity.min',
			'vendor/slidebars.min',
			'vendor/jquery.themepunch.revolution.min']
	}
});

define(['jquery'], function(){

});