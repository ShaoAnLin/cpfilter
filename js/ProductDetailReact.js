var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

define('ProductDetailReact', ['react', 'reactDOM', 'constant', 'ProductImg'], function (React, ReactDOM, constant, ProductImg) {

    'use strict';

    var getItem = function getItem() {
        var queryItem = decodeURI(window.location.search).match('item=.*'),
            targetItem = null;
        if (queryItem) {
            targetItem = queryItem[0].split('=')[1];
        }
        return constant.ITEMS[targetItem];
    };

    var DetailImages = function (_React$Component) {
        _inherits(DetailImages, _React$Component);

        function DetailImages(props) {
            _classCallCheck(this, DetailImages);

            return _possibleConstructorReturn(this, (DetailImages.__proto__ || Object.getPrototypeOf(DetailImages)).call(this, props));
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
                return React.createElement(
                    React.Fragment,
                    null,
                    React.createElement(
                        'div',
                        { 'class': 'series-name' },
                        constant.getItemIdStr(this.props.item)
                    ),
                    React.createElement(
                        'h4',
                        { 'class': 'item-title' },
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
                            { 'class': 'row' },
                            React.createElement(
                                'div',
                                { 'class': 'col-sm-12' },
                                React.createElement(
                                    'h5',
                                    { 'class': 'section-title range-name' },
                                    '\u9069\u7528\u7BC4\u570D'
                                )
                            )
                        ),
                        React.createElement(
                            'div',
                            { 'class': 'item-range' },
                            this.props.item.range
                        )
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
                if (this.props.item.specification) {
                    $.each(this.props.item.specification, function (key, value) {
                        spec.push(React.createElement(
                            'li',
                            null,
                            key,
                            ': ',
                            value
                        ));
                    });
                }
                return React.createElement(
                    'ul',
                    { 'class': 'list-featured item-specification' },
                    spec
                );
            }
        }]);

        return ItemSpec;
    }(React.Component);

    var setTabDetail = function setTabDetail(item) {
        if (item.specification) {
            ReactDOM.render(React.createElement(ItemSpec, { item: item }), document.querySelector('#spec-detail'));
        } else {
            $('#nav-tab-spec').hide();
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
            $('#size0-img').attr("src", constant.getImgPath(item, 'size') + '0.jpg');
            if (item.sizeImgs > 1) {
                $('#size1-img').attr("src", constant.getImgPath(item, 'size') + '1.jpg');
            }
        } else {
            $('#nav-tab-size').hide();
        }
    };

    var RelatedProducts = function (_React$Component4) {
        _inherits(RelatedProducts, _React$Component4);

        function RelatedProducts(props) {
            _classCallCheck(this, RelatedProducts);

            var _this4 = _possibleConstructorReturn(this, (RelatedProducts.__proto__ || Object.getPrototypeOf(RelatedProducts)).call(this, props));

            _this4.getRelatedProducts = function () {
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
                                        item: constant.ITEMS[constant.ITEMS[seriesList[i]]] }));
                                    ++num;
                                }
                            }
                        }
                    });
                }
                return products;
            };

            return _this4;
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

    var ProductGridItem = function (_React$Component5) {
        _inherits(ProductGridItem, _React$Component5);

        function ProductGridItem(props) {
            _classCallCheck(this, ProductGridItem);

            return _possibleConstructorReturn(this, (ProductGridItem.__proto__ || Object.getPrototypeOf(ProductGridItem)).call(this, props));
        }

        _createClass(ProductGridItem, [{
            key: 'render',
            value: function render() {
                var detailLink = "product-detail.html?item=" + this.props.id,
                    series = this.props.item.series ? this.props.item["series"] + " Series" : "";
                return React.createElement(
                    'div',
                    { 'class': 'col-md-3' },
                    React.createElement(
                        'div',
                        { 'class': 'tile' },
                        React.createElement(
                            'a',
                            { href: detailLink },
                            React.createElement(ProductImg.MainImg, { item: this.props.item })
                        ),
                        React.createElement(
                            'div',
                            { 'class': 'tile-title' },
                            React.createElement(
                                'a',
                                { href: detailLink },
                                this.props.item.title
                            )
                        ),
                        React.createElement(
                            'div',
                            { 'class': 'tile-meta' },
                            React.createElement(
                                'div',
                                { 'class': 'meta-top' },
                                React.createElement(
                                    'span',
                                    null,
                                    this.props.item.subtitle
                                )
                            ),
                            React.createElement(
                                'div',
                                { 'class': 'meta-bottom' },
                                React.createElement(
                                    'span',
                                    null,
                                    series
                                )
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