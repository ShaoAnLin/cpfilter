requirejs.config({
    baseUrl: "js",
	paths: {
		jquery: 'vendor/jquery-2.1.4.min',
		react: 'react.min',
		reactDOM: 'react-dom.min'
	},
	shim: {
		'scripts': 'jqeury',
		'vendor/preloader.min': 'jquery',
		'vendor/bootstrap.min': 'jquery',
		'vendor/gmap3.min': 'jquery',
		'vendor/extensions/revolution.extension.slideanims.min': ['jquery'],
		'vendor/extensions/revolution.extension.actions.min': [
			'jquery',
			'vendor/jquery.themepunch.revolution.min'],
		'vendor/extensions/revolution.extension.layeranimation.min': [
			'jquery',
			'vendor/jquery.themepunch.revolution.min'],
		'vendor/extensions/revolution.extension.kenburn.min': ['jquery'],
		'vendor/extensions/revolution.extension.navigation.min': [
			'jquery',
			'vendor/jquery.themepunch.revolution.min'],
		'vendor/extensions/revolution.extension.parallax.min': [
			'jquery',
			'vendor/jquery.themepunch.revolution.min'],
		'vendor/jquery.themepunch.revolution.min': [
			'jquery',
			'vendor/extensions/revolution.extension.kenburn.min',
			'vendor/extensions/revolution.extension.slideanims.min'],
		'home': [
			'scripts',
			'common',
			'jquery',
			'vendor/extensions/revolution.extension.actions.min',
			'vendor/extensions/revolution.extension.layeranimation.min',
			'vendor/extensions/revolution.extension.navigation.min',
			'vendor/extensions/revolution.extension.parallax.min',
			'vendor/jquery.themepunch.tools.min'],
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
  			//'vendor/jquery.themepunch.tools.min',
			'vendor/gmap3.min']
	}
});