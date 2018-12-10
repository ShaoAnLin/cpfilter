requirejs.config({
	paths: {
		app: 'js',
		jquery: 'vendor/jquery-2.1.4.min'
	},
	shim: {
		'vendor/preloader.min': 'vendor/jquery-2.1.4.min',
		'vendor/bootstrap.min': 'vendor/jquery-2.1.4.min',
		'vendor/jquery.themepunch.revolution.min': 'vendor/jquery-2.1.4.min',
		'vendor/gmap3.min': 'vendor/jquery-2.1.4.min',
		'common': [
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
			'vendor/gmap3.min']
	}
});

define(['products'], function(products){
	//products.init();
})