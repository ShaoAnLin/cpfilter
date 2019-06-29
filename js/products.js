var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

define('products', ['react', 'reactDOM', 'constant', 'productImg'], function (React, ReactDOM, constant, productImg) {

    'use strict';

    var GridImages = function (_React$Component) {
        _inherits(GridImages, _React$Component);

        function GridImages(props) {
            _classCallCheck(this, GridImages);

            var _this = _possibleConstructorReturn(this, (GridImages.__proto__ || Object.getPrototypeOf(GridImages)).call(this, props));

            _this.getHousingGrid = function () {
                var housingGrid = [],
                    rowItems = [],
                    count = 0;
                constant.HOUSING.forEach(function (housing) {
                    count++;
                    var link = "products.html?housing=" + housing,
                        imgSrc = "img/products/category/{0}.jpg".format(housing);
                    rowItems.push(React.createElement(
                        'div',
                        { className: 'col-md-4' },
                        React.createElement(
                            'div',
                            { className: 'tile tile-category' },
                            React.createElement(
                                'a',
                                { href: link, className: 'preview-box' },
                                React.createElement('img', { src: imgSrc })
                            ),
                            React.createElement(
                                'div',
                                { className: 'tile-title' },
                                housing
                            )
                        )
                    ));
                    if (count % 3 == 0) {
                        housingGrid.push(React.createElement(
                            'div',
                            { className: 'row' },
                            rowItems
                        ));
                        rowItems = [];
                    }
                });
                housingGrid.push(React.createElement(
                    'div',
                    { className: 'row' },
                    rowItems
                ));
                return housingGrid;
            };

            _this.getCategoryGrid = function (housing) {
                var categoryGrid = [],
                    rowItems = [],
                    count = 0,
                    categoryList = constant.CATEGORIES[housing];
                categoryList.forEach(function (category) {
                    count++;
                    var link = "products.html?category=" + category,
                        imgSrc = "img/products/category/{0}.jpg".format(category);
                    rowItems.push(React.createElement(
                        'div',
                        { className: 'col-md-4' },
                        React.createElement(
                            'div',
                            { className: 'tile tile-category' },
                            React.createElement(
                                'a',
                                { href: link, className: 'preview-box' },
                                React.createElement('img', { src: imgSrc })
                            ),
                            React.createElement(
                                'div',
                                { className: 'tile-title' },
                                category
                            )
                        )
                    ));
                    if (count % 3 == 0) {
                        categoryGrid.push(React.createElement(
                            'div',
                            { className: 'row' },
                            rowItems
                        ));
                        rowItems = [];
                    }
                });
                categoryGrid.push(React.createElement(
                    'div',
                    { className: 'row' },
                    rowItems
                ));
                return categoryGrid;
            };

            _this.getSubgroupGrid = function (category) {
                var tmp = constant.getHousingAndCategory(category);
                var subgroupGrid = [],
                    rowItems = [],
                    count = 0,
                    subgroupList = constant.SUBGROUPS[tmp.housing][category];
                subgroupList.forEach(function (subgroup) {
                    count++;
                    var link = "products.html?subgroup=" + subgroup,
                        imgSrc = "img/products/category/{0}.jpg".format(subgroup);
                    rowItems.push(React.createElement(
                        'div',
                        { className: 'col-md-4' },
                        React.createElement(
                            'div',
                            { className: 'tile tile-category' },
                            React.createElement(
                                'a',
                                { href: link, className: 'preview-box' },
                                React.createElement('img', { src: imgSrc })
                            ),
                            React.createElement(
                                'div',
                                { className: 'tile-title' },
                                subgroup
                            )
                        )
                    ));
                    if (count % 3 == 0) {
                        subgroupGrid.push(React.createElement(
                            'div',
                            { className: 'row' },
                            rowItems
                        ));
                        rowItems = [];
                    }
                });
                subgroupGrid.push(React.createElement(
                    'div',
                    { className: 'row' },
                    rowItems
                ));
                return subgroupGrid;
            };

            return _this;
        }

        _createClass(GridImages, [{
            key: 'render',
            value: function render() {
                var gridImages = [];
                if (this.props.housing) {
                    gridImages = this.getCategoryGrid(this.props.housing);
                } else if (this.props.category) {
                    gridImages = this.getSubgroupGrid(this.props.category);
                } else {
                    gridImages = this.getHousingGrid();
                }
                return React.createElement(
                    React.Fragment,
                    null,
                    gridImages
                );
            }
        }]);

        return GridImages;
    }(React.Component);

    var SideBarList = function (_React$Component2) {
        _inherits(SideBarList, _React$Component2);

        function SideBarList(props) {
            _classCallCheck(this, SideBarList);

            var _this2 = _possibleConstructorReturn(this, (SideBarList.__proto__ || Object.getPrototypeOf(SideBarList)).call(this, props));

            _this2.getSideBarCatList = function () {
                var sideBar = [],
                    currentHousing = this.props.housing;

                var tmp = constant.getHousingAndCategory(this.props.category, this.props.subgroup);
                var currentHousing = tmp.housing;
                var currentCategory = tmp.category;

                constant.HOUSING.forEach(function (housing) {
                    var housingLink = "?housing=" + housing,
                        numOfItems = this.getGroupNumOfItems(housing),
                        isCurrent = housing == currentHousing && currentCategory == null;
                    sideBar.push(React.createElement(
                        'li',
                        { className: isCurrent && "current" },
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
                    if (housing == currentHousing) {
                        sideBar.push(React.createElement(SideBarSubMenu, { housing: housing,
                            category: currentCategory, subgroup: this.props.subgroup }));
                    }
                }, this);
                return sideBar;
            };

            _this2.getGroupNumOfItems = function (housing) {
                var num = 0;
                $.each(constant.SERIES[housing], function (key, seriesList) {
                    if (seriesList != null) {
                        if (Array.isArray(seriesList)) {
                            num += seriesList.length;
                        } else {
                            $.each(seriesList, function (key, subgroup) {
                                num += subgroup.length;
                            });
                        }
                    } else {
                        // The category does not have any series. Only a single item
                        num += 1;
                    }
                });
                return num;
            };

            return _this2;
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

    var SideBarSubMenu = function (_React$Component3) {
        _inherits(SideBarSubMenu, _React$Component3);

        function SideBarSubMenu(props) {
            _classCallCheck(this, SideBarSubMenu);

            var _this3 = _possibleConstructorReturn(this, (SideBarSubMenu.__proto__ || Object.getPrototypeOf(SideBarSubMenu)).call(this, props));

            _this3.getSubMenuList = function () {
                var subMenu = [],
                    categoryList = constant.CATEGORIES[this.props.housing];

                categoryList.forEach(function (category) {
                    var categoryLink = "?category=" + category,
                        subgroupList = constant.SUBGROUPS[this.props.housing][category];
                    if (subgroupList.length == 0) {
                        var numOfItems = constant.SERIES[this.props.housing][category].length,
                            classes = category == this.props.category ? "current submenu" : "submenu";
                        subMenu.push(React.createElement(
                            'li',
                            { className: classes },
                            React.createElement(
                                'a',
                                { href: categoryLink, title: '' },
                                category
                            ),
                            React.createElement(
                                'span',
                                null,
                                numOfItems
                            )
                        ));
                    } else {
                        var totalItems = 0,
                            series = [];
                        subgroupList.forEach(function (subgroup) {
                            var subgroupLink = "?subgroup=" + subgroup,
                                numOfItems = constant.SERIES[this.props.housing][category][subgroup].length,
                                classes = subgroup == this.props.subgroup ? "current submenu2" : "submenu2";
                            totalItems += numOfItems;
                            if (this.props.category == category) {
                                series.push(React.createElement(
                                    'li',
                                    { className: classes },
                                    React.createElement(
                                        'a',
                                        { href: subgroupLink, title: '' },
                                        subgroup
                                    ),
                                    React.createElement(
                                        'span',
                                        null,
                                        numOfItems
                                    )
                                ));
                            }
                        }, this);

                        var classes = category == this.props.category && !this.props.subgroup ? "current submenu" : "submenu";
                        subMenu.push(React.createElement(
                            'li',
                            { className: classes },
                            React.createElement(
                                'a',
                                { href: categoryLink, title: '' },
                                category
                            ),
                            React.createElement(
                                'span',
                                null,
                                totalItems
                            )
                        ));
                        subMenu.push(series);
                    }
                }, this);

                return subMenu;
            };

            return _this3;
        }

        _createClass(SideBarSubMenu, [{
            key: 'render',
            value: function render() {
                return React.createElement(
                    React.Fragment,
                    null,
                    this.getSubMenuList()
                );
            }
        }]);

        return SideBarSubMenu;
    }(React.Component);

    var LatestProducts = function (_React$Component4) {
        _inherits(LatestProducts, _React$Component4);

        function LatestProducts(props) {
            _classCallCheck(this, LatestProducts);

            var _this4 = _possibleConstructorReturn(this, (LatestProducts.__proto__ || Object.getPrototypeOf(LatestProducts)).call(this, props));

            _this4.getLatestProducts = function () {
                var latestProducts = [];
                constant.POPULAR_PRODUCTS.forEach(function (itemId) {
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
                                item.category
                            )
                        )
                    ));
                });
                return latestProducts;
            };

            return _this4;
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

    var ProductItems = function (_React$Component5) {
        _inherits(ProductItems, _React$Component5);

        function ProductItems(props) {
            _classCallCheck(this, ProductItems);

            var _this5 = _possibleConstructorReturn(this, (ProductItems.__proto__ || Object.getPrototypeOf(ProductItems)).call(this, props));

            _this5.getProducts = function () {
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
                    if (self.props.subgroup && item.subgroup != self.props.subgroup) {
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

            return _this5;
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
                    { className: 'col-md-4 tile' },
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
        var queryHousing = decodeURI(window.location.search).match('housing=.*'),
            queryCategory = decodeURI(window.location.search).match('category=.*'),
            querySubgroup = decodeURI(window.location.search).match('subgroup=.*'),
            housing = null,
            category = null,
            subgroup = null;

        if (queryHousing) {
            housing = queryHousing[0].split('=')[1];
        }
        if (queryCategory) {
            category = queryCategory[0].split('=')[1];
        }
        if (querySubgroup) {
            subgroup = querySubgroup[0].split('=')[1];
        }

        if (category == "濾心") {
            $('#housing-name').html("濾材").attr("href", "products.html?housing=濾材");
            $('#category-name').html(category);
        } else if (housing == "過濾器" || housing == "濾材") {
            $('#housing-name').html(housing);
            $('#category-right-icon').hide();
        } else {
            $('#housing-right-icon').hide();
            $('#category-right-icon').hide();
        }

        if (housing == "過濾器" || housing == "濾材") {
            ReactDOM.render(React.createElement(GridImages, { housing: housing }), document.querySelector('#grid-images'));
            $('#housing-selected').hide();
        } else if (category == "濾心") {
            ReactDOM.render(React.createElement(GridImages, { category: category }), document.querySelector('#grid-images'));
            $('#housing-selected').hide();
        } else if (housing || category || subgroup) {
            ReactDOM.render(React.createElement(SideBarList, { housing: housing, category: category, subgroup: subgroup }), document.querySelector('#sidebar-cat-list'));
            ReactDOM.render(React.createElement(LatestProducts, null), document.querySelector('#latest-products'));
            ReactDOM.render(React.createElement(ProductItems, { housing: housing, category: category, subgroup: subgroup }), document.querySelector('#product-grid-items'));
        } else {
            ReactDOM.render(React.createElement(GridImages, null), document.querySelector('#grid-images'));
            $('#housing-selected').hide();
        }
    };

    return instance;
});