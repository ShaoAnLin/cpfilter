var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

define('productDetail', ['react', 'reactDOM', 'constant', 'productImg', 'common'], function (React, ReactDOM, constant, productImg, common) {

    'use strict';

    var getItem = function getItem() {
        var queryItem = decodeURI(window.location.search).match('item=.*'),
            targetItem = null;
        if (queryItem) {
            targetItem = queryItem[0].split('=')[1];
        }
        return constant.ITEMS[targetItem];
    };

    var onLoad = function onLoad() {
        setTimeout(function () {
            common.onLoadEvents();
        }, 500);
    };

    var DetailImages = function (_React$Component) {
        _inherits(DetailImages, _React$Component);

        function DetailImages(props) {
            _classCallCheck(this, DetailImages);

            var _this = _possibleConstructorReturn(this, (DetailImages.__proto__ || Object.getPrototypeOf(DetailImages)).call(this, props));

            _this.componentDidMount = function () {
                onLoad();
            };

            return _this;
        }

        _createClass(DetailImages, [{
            key: 'render',
            value: function render() {
                var imgUrl = constant.getImgPath(this.props.item, 'main') + ".jpg",
                    imgBaseUrl = constant.getImgPath(this.props.item),
                    images = [];
                images.push(React.createElement('img', { src: imgUrl, alt: 'Thumb' }));
                for (var i = 0; i < this.props.item.images; ++i) {
                    imgUrl = "{0}{1}.jpg".format(imgBaseUrl, i);
                    images.push(React.createElement('img', { src: imgUrl, alt: 'Thumb' }));
                }
                return React.createElement(
                    React.Fragment,
                    null,
                    images
                );
            }
        }]);

        return DetailImages;
    }(React.Component);

    var ItemInfo = function (_React$Component2) {
        _inherits(ItemInfo, _React$Component2);

        function ItemInfo(props) {
            _classCallCheck(this, ItemInfo);

            return _possibleConstructorReturn(this, (ItemInfo.__proto__ || Object.getPrototypeOf(ItemInfo)).call(this, props));
        }

        _createClass(ItemInfo, [{
            key: 'render',
            value: function render() {
                var rangeDiv = null;
                if (Array.isArray(this.props.item.range)) {
                    var ranges = [];
                    this.props.item.range.forEach(function (str) {
                        ranges.push(React.createElement(
                            'li',
                            null,
                            str
                        ));
                    });
                    rangeDiv = React.createElement(
                        'ul',
                        { className: 'list-featured' },
                        ranges
                    );
                } else {
                    rangeDiv = this.props.item.range;
                }

                return React.createElement(
                    React.Fragment,
                    null,
                    React.createElement(
                        'div',
                        { className: 'series-name' },
                        constant.getItemIdStr(this.props.item)
                    ),
                    React.createElement(
                        'h4',
                        { className: 'item-title' },
                        this.props.item.title
                    ),
                    React.createElement(
                        'div',
                        null,
                        this.props.item.subtitle
                    ),
                    this.props.item.range && React.createElement(
                        React.Fragment,
                        null,
                        React.createElement(
                            'div',
                            { className: 'row' },
                            React.createElement(
                                'div',
                                { className: 'col-sm-12' },
                                React.createElement(
                                    'h5',
                                    { className: 'section-title' },
                                    '\u9069\u7528\u7BC4\u570D'
                                )
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'item-range' },
                            rangeDiv
                        )
                    ),
                    this.props.item.spec && this.props.item.specUpper && React.createElement(
                        React.Fragment,
                        null,
                        React.createElement(
                            'div',
                            { className: 'row' },
                            React.createElement(
                                'div',
                                { className: 'col-sm-12' },
                                React.createElement(
                                    'h5',
                                    { className: 'section-title' },
                                    '\u898F\u683C'
                                )
                            )
                        ),
                        React.createElement(ItemSpec, { item: this.props.item })
                    )
                );
            }
        }]);

        return ItemInfo;
    }(React.Component);

    var ItemSpec = function (_React$Component3) {
        _inherits(ItemSpec, _React$Component3);

        function ItemSpec(props) {
            _classCallCheck(this, ItemSpec);

            return _possibleConstructorReturn(this, (ItemSpec.__proto__ || Object.getPrototypeOf(ItemSpec)).call(this, props));
        }

        _createClass(ItemSpec, [{
            key: 'render',
            value: function render() {
                var spec = [];
                if (this.props.item.spec) {
                    $.each(this.props.item.spec, function (key, value) {
                        spec.push(React.createElement(
                            'li',
                            null,
                            key,
                            ': ',
                            value
                        ));
                    });
                } else if (this.props.item.specImgs) {
                    var src = constant.getImgPath(this.props.item, 'spec') + '.jpg';
                    spec.push(React.createElement('img', { src: src }));
                    for (var i = 1; i < this.props.item.specImgs; ++i) {
                        var src = constant.getImgPath(this.props.item, 'spec' + i) + '.jpg';
                        spec.push(React.createElement('img', { src: src }));
                    }
                }
                return React.createElement(
                    'ul',
                    { className: 'list-featured item-spec' },
                    spec
                );
            }
        }]);

        return ItemSpec;
    }(React.Component);

    var ItemFeature = function (_React$Component4) {
        _inherits(ItemFeature, _React$Component4);

        function ItemFeature(props) {
            _classCallCheck(this, ItemFeature);

            return _possibleConstructorReturn(this, (ItemFeature.__proto__ || Object.getPrototypeOf(ItemFeature)).call(this, props));
        }

        _createClass(ItemFeature, [{
            key: 'render',
            value: function render() {
                var features = [];
                this.props.feature.forEach(function (str) {
                    features.push(React.createElement(
                        'li',
                        null,
                        str
                    ));
                });
                return React.createElement(
                    'ul',
                    { className: 'list-featured' },
                    features
                );
            }
        }]);

        return ItemFeature;
    }(React.Component);

    var setTabDetail = function setTabDetail(item) {
        if (item.spec && item.specUpper != true || item.specImgs) {
            ReactDOM.render(React.createElement(ItemSpec, { item: item }), document.querySelector('#spec-detail'));
            if (item.specImgs) {
                $('#spec-detail').addClass('text-center');
            }
        } else {
            $('#nav-tab-spec').hide();
        }

        if (item.feature) {
            if (item.spec == null && item.specImgs == null) {
                $('#nav-tab-feature').addClass('active');
                $('#tab-feature').addClass('in active');
            }
            ReactDOM.render(React.createElement(ItemFeature, { feature: item.feature }), document.querySelector('#feature-detail'));
        } else {
            $('#nav-tab-feature').hide();
        }

        if (item.modelImgs) {
            $('#model-img').attr("src", constant.getImgPath(item, 'model') + '.jpg');
        } else {
            $('#nav-tab-model').hide();
        }

        if (item.componentImgs) {
            $('#component-img').attr("src", constant.getImgPath(item, 'component') + '.jpg');
        } else {
            $('#nav-tab-component').hide();
        }

        if (item.sizeImgs) {
            $('#size-img').attr("src", constant.getImgPath(item, 'size') + '.jpg');
        } else {
            $('#nav-tab-size').hide();
        }

        if (item.conditionImgs) {
            $('#condition-img').attr("src", constant.getImgPath(item, 'condition') + '.jpg');
        } else {
            $('#nav-tab-condition').hide();
        }

        if (item.dataImgs) {
            $('#data-img').attr("src", constant.getImgPath(item, 'data') + '.jpg');
        } else {
            $('#nav-tab-data').hide();
        }
    };

    var RelatedProducts = function (_React$Component5) {
        _inherits(RelatedProducts, _React$Component5);

        function RelatedProducts(props) {
            _classCallCheck(this, RelatedProducts);

            var _this5 = _possibleConstructorReturn(this, (RelatedProducts.__proto__ || Object.getPrototypeOf(RelatedProducts)).call(this, props));

            _this5.getRelatedProducts = function () {
                var products = [],
                    item = this.props.item,
                    num = 0;
                if (item.series) {
                    var seriesList = constant.SERIES[item.housing][item.category];
                    for (var i = 0; i < seriesList.length && num < 4; ++i) {
                        if (seriesList[i] != item.series) {
                            products.push(React.createElement(ProductGridItem, { id: seriesList[i],
                                item: constant.ITEMS[seriesList[i]] }));
                            ++num;
                        }
                    }
                    if (num < 4) {
                        constant.CATEGORIES[item.housing].forEach(function (category) {
                            if (category != item.category) {
                                var seriesList = constant.SERIES[item.housing][category];
                                for (var i = 0; i < seriesList.length && num < 4; ++i) {
                                    if (seriesList[i] != item.series) {
                                        products.push(React.createElement(ProductGridItem, { id: seriesList[i],
                                            item: constant.ITEMS[seriesList[i]] }));
                                        ++num;
                                    }
                                }
                            }
                        });
                    }
                } else {
                    var categoryList = constant.SERIES[item.housing];
                    $.each(categoryList, function (cat, seriesList) {
                        if (num < 4 && seriesList == null) {
                            if (cat != item.category) {
                                products.push(React.createElement(ProductGridItem, { id: cat,
                                    item: constant.ITEMS[cat] }));
                            }
                            ++num;
                        } else if (num < 4 && seriesList.length > 0) {
                            for (var i = 0; i < seriesList.length && num < 4; ++i) {
                                if (seriesList[i] != item.series) {
                                    products.push(React.createElement(ProductGridItem, { id: seriesList[i],
                                        item: constant.ITEMS[seriesList[i]] }));
                                    ++num;
                                }
                            }
                        }
                    });
                }
                return products;
            };

            return _this5;
        }

        _createClass(RelatedProducts, [{
            key: 'render',
            value: function render() {
                var products = this.getRelatedProducts();
                if (products.length == 0) {
                    $('#section-related').hide();
                }
                return React.createElement(
                    React.Fragment,
                    null,
                    products
                );
            }
        }]);

        return RelatedProducts;
    }(React.Component);

    var ProductGridItem = function (_React$Component6) {
        _inherits(ProductGridItem, _React$Component6);

        function ProductGridItem(props) {
            _classCallCheck(this, ProductGridItem);

            return _possibleConstructorReturn(this, (ProductGridItem.__proto__ || Object.getPrototypeOf(ProductGridItem)).call(this, props));
        }

        _createClass(ProductGridItem, [{
            key: 'render',
            value: function render() {
                var detailLink = "product-detail.html?item=" + this.props.id,
                    series = this.props.item.series ? this.props.item.series : "";
                return React.createElement(
                    'div',
                    { className: 'col-md-3 tile' },
                    React.createElement(
                        'a',
                        { href: detailLink },
                        React.createElement(productImg.MainImg, { item: this.props.item })
                    ),
                    React.createElement(
                        'div',
                        { className: 'tile-title' },
                        React.createElement(
                            'a',
                            { href: detailLink },
                            this.props.item.title
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'tile-meta' },
                        React.createElement(
                            'div',
                            { className: 'meta-top' },
                            React.createElement(
                                'span',
                                null,
                                this.props.item.subtitle
                            )
                        ),
                        !this.props.item.hideSeries && React.createElement(
                            'div',
                            { className: 'meta-bottom' },
                            React.createElement(
                                'span',
                                null,
                                series
                            )
                        )
                    )
                );
            }
        }]);

        return ProductGridItem;
    }(React.Component);

    var instance = {};

    instance.init = function () {
        var item = getItem();
        console.log(item);

        // Housing & Category
        $('#housing-name').html(item.housing).attr("href", "products.html?housing=" + item.housing);
        if (item.category) {
            $('#category-name').html(item.category);
            $('#category-name').attr("href", "products.html?category=" + item.category);
        } else {
            $('#category-right-icon').hide();
        }

        // Images
        var detailImages = React.createElement(DetailImages, { item: item });
        ReactDOM.render(detailImages, document.querySelector('#product-img-thumbnail'));
        ReactDOM.render(detailImages, document.querySelector('#product-img-preview'));

        // Details
        ReactDOM.render(React.createElement(ItemInfo, { item: item }), document.querySelector('#single-item-info'));
        setTabDetail(item);

        // Related Products
        ReactDOM.render(React.createElement(RelatedProducts, { item: item }), document.querySelector('#related-products'));
    };

    return instance;
});