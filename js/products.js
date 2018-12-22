var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

define('products', ['react', 'reactDOM', 'constant', 'productImg'], function (React, ReactDOM, constant, productImg) {

    'use strict';

    var SideBarList = function (_React$Component) {
        _inherits(SideBarList, _React$Component);

        function SideBarList(props) {
            _classCallCheck(this, SideBarList);

            var _this = _possibleConstructorReturn(this, (SideBarList.__proto__ || Object.getPrototypeOf(SideBarList)).call(this, props));

            _this.getSideBarCatList = function () {
                var sideBar = [];
                constant.HOUSING.forEach(function (housing) {
                    var housingName = "housing-" + housing,
                        housingLink = "?housing=" + housing,
                        numOfItems = this.getGroupNumOfItems(housing);
                    sideBar.push(React.createElement(
                        'li',
                        { id: housingName },
                        React.createElement(
                            'a',
                            { href: housingLink, title: '' },
                            housing
                        ),
                        React.createElement(
                            'span',
                            null,
                            numOfItems
                        )
                    ));
                }, this);
                return sideBar;
            };

            _this.getGroupNumOfItems = function (housing) {
                var num = 0;
                $.each(constant.SERIES[housing], function (key, seriesList) {
                    if (seriesList != null) {
                        num += seriesList.length;
                    } else {
                        // The category does not have any series. Only a single item
                        num += 1;
                    }
                });
                return num;
            };

            return _this;
        }

        _createClass(SideBarList, [{
            key: 'render',
            value: function render() {
                return React.createElement(
                    React.Fragment,
                    null,
                    this.getSideBarCatList()
                );
            }
        }]);

        return SideBarList;
    }(React.Component);

    var LatestProducts = function (_React$Component2) {
        _inherits(LatestProducts, _React$Component2);

        function LatestProducts(props) {
            _classCallCheck(this, LatestProducts);

            var _this2 = _possibleConstructorReturn(this, (LatestProducts.__proto__ || Object.getPrototypeOf(LatestProducts)).call(this, props));

            _this2.getLatestProducts = function () {
                var latestProducts = [];
                constant.LATEST_PRODUCTS.forEach(function (itemId) {
                    var item = constant.ITEMS[itemId],
                        detailUrl = "product-detail.html?item=" + itemId;
                    latestProducts.push(React.createElement(
                        'li',
                        null,
                        React.createElement(
                            'a',
                            { href: detailUrl, className: 'cart-thumb' },
                            React.createElement(productImg.MainImg, { item: item })
                        ),
                        React.createElement(
                            'div',
                            { className: 'info-cont' },
                            React.createElement(
                                'a',
                                { href: detailUrl, className: 'item-title' },
                                item.title
                            ),
                            React.createElement(
                                'div',
                                { className: 'category' },
                                item.housing
                            )
                        )
                    ));
                    //'.format(divUtil.getMainImage(item), itemId, item.title, item.housing);
                });
                return latestProducts;
            };

            return _this2;
        }

        _createClass(LatestProducts, [{
            key: 'render',
            value: function render() {
                return React.createElement(
                    React.Fragment,
                    null,
                    this.getLatestProducts()
                );
            }
        }]);

        return LatestProducts;
    }(React.Component);

    var ProductItems = function (_React$Component3) {
        _inherits(ProductItems, _React$Component3);

        function ProductItems(props) {
            _classCallCheck(this, ProductItems);

            var _this3 = _possibleConstructorReturn(this, (ProductItems.__proto__ || Object.getPrototypeOf(ProductItems)).call(this, props));

            _this3.getProducts = function () {
                var self = this,
                    products = [],
                    images = [],
                    num = 0,
                    cols = 3;

                $.each(constant.ITEMS, function (key, item) {
                    var select = true;
                    if (self.props.housing && item.housing != self.props.housing) {
                        select = false;
                    }
                    if (self.props.category && item.category != self.props.category) {
                        select = false;
                    }

                    if (select) {
                        ++num;
                        images.push(React.createElement(ProductGridItem, { id: key, item: item }));
                        if (num % cols == 0) {
                            products.push(React.createElement(
                                'div',
                                { className: 'row' },
                                images
                            ));
                            images = [];
                        }
                    }
                });
                if (images.length > 0) {
                    products.push(React.createElement(
                        'div',
                        { className: 'row' },
                        images
                    ));
                }
                return products;
            };

            return _this3;
        }

        _createClass(ProductItems, [{
            key: 'render',
            value: function render() {
                return React.createElement(
                    React.Fragment,
                    null,
                    this.getProducts()
                );
            }
        }]);

        return ProductItems;
    }(React.Component);

    var ProductGridItem = function (_React$Component4) {
        _inherits(ProductGridItem, _React$Component4);

        function ProductGridItem(props) {
            _classCallCheck(this, ProductGridItem);

            return _possibleConstructorReturn(this, (ProductGridItem.__proto__ || Object.getPrototypeOf(ProductGridItem)).call(this, props));
        }

        _createClass(ProductGridItem, [{
            key: 'render',
            value: function render() {
                var detailLink = "product-detail.html?item=" + this.props.id,
                    series = this.props.item.series ? this.props.item.series + " Series" : "";
                return React.createElement(
                    'div',
                    { className: 'col-md-4' },
                    React.createElement(
                        'div',
                        { className: 'tile' },
                        React.createElement(
                            'div',
                            { className: 'preview-box' },
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
                            React.createElement(
                                'div',
                                { className: 'meta-bottom' },
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

    var setProducts = function setProducts() {
        var queryHousing = decodeURI(window.location.search).match('housing=.*'),
            queryCategory = decodeURI(window.location.search).match('category=.*'),
            housing = null,
            category = null;

        if (queryHousing) {
            housing = queryHousing[0].split('=')[1];
        }
        if (queryCategory) {
            category = queryCategory[0].split('=')[1];
        }
        setCurrent(housing, category);

        ReactDOM.render(React.createElement(ProductItems, { housing: housing, category: category }), document.querySelector('#product-grid-items'));
    };

    var setCurrent = function setCurrent(targetHousing, targetCategory) {
        if (targetHousing) {
            $('#housing-' + targetHousing).addClass('current');
        }

        if (targetCategory) {
            $.each(constant.CATEGORIES, function (housing, categories) {
                if (categories.indexOf(targetCategory) != -1) {
                    $('#housing-' + housing).addClass('current');
                }
            });
        }
    };

    var instance = {};

    instance.init = function () {
        ReactDOM.render(React.createElement(SideBarList, null), document.querySelector('#sidebar-cat-list'));

        ReactDOM.render(React.createElement(LatestProducts, null), document.querySelector('#latest-products'));

        setProducts();
    };

    return instance;
});