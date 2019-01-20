requirejs.config({
    baseUrl: "js",
	paths: {
		jquery: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min',
		react: 'https://unpkg.com/react@16/umd/react.production.min',
		reactDOM: 'https://unpkg.com/react-dom@16/umd/react-dom.production.min'
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
		'productDetail': ['react', 'reactDOM', 'constant', 'productImg', 'common'],

		'common': [
			'header',
			'footer',
			'sideNav',
			'javascriptStrings',
			'jquery',
			'react',
			'reactDOM',
			'ga',
			'vendor/preloader.min',
			'vendor/bootstrap.min',
			'vendor/slick.min',
			'vendor/velocity.min',
			'vendor/slidebars.min',
			'vendor/jquery.themepunch.revolution.min']
	}
});

require(['common', 'productDetail'], function(common, productDetail) {
    common.init();
    productDetail.init();
});