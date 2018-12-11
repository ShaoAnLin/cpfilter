requirejs.config({
	paths: {
		app: 'js',
		jquery: 'vendor/jquery-2.1.4.min'
	},
	shim: {
		'vendor/preloader.min': 'jquery',
		'vendor/bootstrap.min': 'jquery',
		'vendor/jquery.themepunch.revolution.min': 'jquery',
		'vendor/gmap3.min': 'jquery',
		'vendor/extensions/revolution.extension.slideanims.min': 'jquery',
		'vendor/extensions/revolution.extension.actions.min': 'jquery',
		'vendor/extensions/revolution.extension.layeranimation.min': 'jquery',
		'vendor/extensions/revolution.extension.kenburn.min': 'jquery',
		'vendor/extensions/revolution.extension.navigation.min': 'jquery',
		'vendor/extensions/revolution.extension.parallax.min': 'jquery',
		'common': [
			'JavascriptStrings',
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