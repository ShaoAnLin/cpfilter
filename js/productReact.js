var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

define('productReact', ['react', 'reactDOM', 'constant', 'productImg'], function (React, ReactDOM, constant, productImg) {

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
                            { href: detailUrl, 'class': 'cart-thumb' },
                            React.createElement(productImg.MainImg, { item: item })
                        ),
                        React.createElement(
                            'div',
                            { 'class': 'info-cont' },
                            React.createElement(
                                'a',
                                { href: detailUrl, 'class': 'item-title' },
                                item.title
                            ),
                            React.createElement(
                                'div',
                                { 'class': 'category' },
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

    var instance = {};

    instance.init = function () {
        var sideBarListContainer = document.querySelector('#sidebar-cat-list');
        ReactDOM.render(React.createElement(SideBarList), sideBarListContainer);

        var latestProducts = document.querySelector('#latest-products');
        ReactDOM.render(React.createElement(LatestProducts), latestProducts);
    };

    return instance;
});