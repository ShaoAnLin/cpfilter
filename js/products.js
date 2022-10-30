define('products', ['react', 'reactDOM', 'constant', 'productImg'], function (React, ReactDOM, constant, productImg) {
  'use strict';

  class GridImages extends React.Component {
    constructor(props) {
      super(props);
    }
    getHousingGrid = function () {
      var housingGrid = [],
        rowItems = [],
        count = 0;
      constant.HOUSING.forEach(function (housing) {
        count++;
        var link = "products.html?housing=" + housing,
          imgSrc = "img/products/category/{0}.jpg".format(housing);
        rowItems.push( /*#__PURE__*/React.createElement("div", {
          className: "col-md-4"
        }, /*#__PURE__*/React.createElement("div", {
          className: "tile tile-category"
        }, /*#__PURE__*/React.createElement("a", {
          href: link,
          className: "preview-box"
        }, /*#__PURE__*/React.createElement("img", {
          src: imgSrc
        })), /*#__PURE__*/React.createElement("div", {
          className: "tile-title"
        }, housing))));
        if (count % 3 == 0) {
          housingGrid.push( /*#__PURE__*/React.createElement("div", {
            className: "row"
          }, rowItems));
          rowItems = [];
        }
      });
      housingGrid.push( /*#__PURE__*/React.createElement("div", {
        className: "row"
      }, rowItems));
      return housingGrid;
    };
    getCategoryGrid = function (housing) {
      var categoryGrid = [],
        rowItems = [],
        count = 0,
        categoryList = constant.CATEGORIES[housing];
      categoryList.forEach(function (category) {
        count++;
        var link = "products.html?category=" + category,
          imgSrc = "img/products/category/{0}.jpg".format(category);
        rowItems.push( /*#__PURE__*/React.createElement("div", {
          className: "col-md-4"
        }, /*#__PURE__*/React.createElement("div", {
          className: "tile tile-category"
        }, /*#__PURE__*/React.createElement("a", {
          href: link,
          className: "preview-box"
        }, /*#__PURE__*/React.createElement("img", {
          src: imgSrc
        })), /*#__PURE__*/React.createElement("div", {
          className: "tile-title"
        }, category))));
        if (count % 3 == 0) {
          categoryGrid.push( /*#__PURE__*/React.createElement("div", {
            className: "row"
          }, rowItems));
          rowItems = [];
        }
      });
      categoryGrid.push( /*#__PURE__*/React.createElement("div", {
        className: "row"
      }, rowItems));
      return categoryGrid;
    };
    getSubgroupGrid = function (category) {
      var tmp = constant.getHousingAndCategory(category);
      var subgroupGrid = [],
        rowItems = [],
        count = 0,
        subgroupList = constant.SUBGROUPS[tmp.housing][category];
      subgroupList.forEach(function (subgroup) {
        count++;
        var link = "products.html?subgroup=" + subgroup,
          imgSrc = "img/products/category/{0}.jpg".format(subgroup);
        rowItems.push( /*#__PURE__*/React.createElement("div", {
          className: "col-md-4"
        }, /*#__PURE__*/React.createElement("div", {
          className: "tile tile-category"
        }, /*#__PURE__*/React.createElement("a", {
          href: link,
          className: "preview-box"
        }, /*#__PURE__*/React.createElement("img", {
          src: imgSrc
        })), /*#__PURE__*/React.createElement("div", {
          className: "tile-title"
        }, subgroup))));
        if (count % 3 == 0) {
          subgroupGrid.push( /*#__PURE__*/React.createElement("div", {
            className: "row"
          }, rowItems));
          rowItems = [];
        }
      });
      subgroupGrid.push( /*#__PURE__*/React.createElement("div", {
        className: "row"
      }, rowItems));
      return subgroupGrid;
    };
    render() {
      var gridImages = [];
      if (this.props.housing) {
        gridImages = this.getCategoryGrid(this.props.housing);
      } else if (this.props.category) {
        gridImages = this.getSubgroupGrid(this.props.category);
      } else {
        gridImages = this.getHousingGrid();
      }
      return /*#__PURE__*/React.createElement(React.Fragment, null, gridImages);
    }
  }
  class SideBarList extends React.Component {
    constructor(props) {
      super(props);
    }
    getSideBarCatList = function () {
      var sideBar = [];
      var tmp = constant.getHousingAndCategory(this.props.category, this.props.subgroup);
      var currentHousing = tmp.housing;
      var currentCategory = tmp.category;
      constant.HOUSING.forEach(function (housing) {
        var housingLink = "?housing=" + housing,
          numOfItems = this.getGroupNumOfItems(housing),
          isCurrent = housing == this.props.housing && currentCategory == null;
        sideBar.push( /*#__PURE__*/React.createElement("li", {
          className: isCurrent && "current"
        }, /*#__PURE__*/React.createElement("a", {
          href: housingLink,
          title: ""
        }, housing), /*#__PURE__*/React.createElement("span", {
          className: "count"
        }, "(", numOfItems, ")")));
        if (housing == currentHousing) {
          sideBar.push( /*#__PURE__*/React.createElement(SideBarSubMenu, {
            housing: housing,
            category: currentCategory,
            subgroup: this.props.subgroup
          }));
        }
      }, this);
      return sideBar;
    };
    getGroupNumOfItems = function (housing) {
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
    render() {
      return /*#__PURE__*/React.createElement(React.Fragment, null, this.getSideBarCatList());
    }
  }
  class SideBarSubMenu extends React.Component {
    constructor(props) {
      super(props);
    }
    getSubMenuList = function () {
      var subMenu = [],
        categoryList = constant.CATEGORIES[this.props.housing];
      categoryList.forEach(function (category) {
        var categoryLink = "?category=" + category,
          subgroupList = constant.SUBGROUPS[this.props.housing][category];
        if (subgroupList.length == 0) {
          var numOfItems = constant.SERIES[this.props.housing][category].length,
            classes = category == this.props.category ? "current submenu" : "submenu";
          subMenu.push( /*#__PURE__*/React.createElement("li", {
            className: classes
          }, /*#__PURE__*/React.createElement("a", {
            href: categoryLink,
            title: ""
          }, category), /*#__PURE__*/React.createElement("span", {
            className: "count"
          }, "(", numOfItems, ")")));
        } else {
          var totalItems = 0,
            series = [];
          subgroupList.forEach(function (subgroup) {
            var subgroupLink = "?subgroup=" + subgroup,
              numOfItems = constant.SERIES[this.props.housing][category][subgroup].length,
              classes = subgroup == this.props.subgroup ? "current submenu2" : "submenu2";
            totalItems += numOfItems;
            if (this.props.category == category) {
              series.push( /*#__PURE__*/React.createElement("li", {
                className: classes
              }, /*#__PURE__*/React.createElement("a", {
                href: subgroupLink,
                title: ""
              }, subgroup), /*#__PURE__*/React.createElement("span", {
                className: "count"
              }, "(", numOfItems, ")")));
            }
          }, this);
          var classes = category == this.props.category && !this.props.subgroup ? "current submenu" : "submenu";
          subMenu.push( /*#__PURE__*/React.createElement("li", {
            className: classes
          }, /*#__PURE__*/React.createElement("a", {
            href: categoryLink,
            title: ""
          }, category), /*#__PURE__*/React.createElement("span", {
            className: "count"
          }, "(", totalItems, ")")));
          subMenu.push(series);
        }
      }, this);
      return subMenu;
    };
    render() {
      return /*#__PURE__*/React.createElement(React.Fragment, null, this.getSubMenuList());
    }
  }
  class LatestProducts extends React.Component {
    constructor(props) {
      super(props);
    }
    getLatestProducts = function () {
      var latestProducts = [];
      constant.POPULAR_PRODUCTS.forEach(function (itemId) {
        var item = constant.ITEMS[itemId],
          detailUrl = "product-detail.html?item=" + itemId;
        latestProducts.push( /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
          href: detailUrl,
          className: "cart-thumb"
        }, /*#__PURE__*/React.createElement(productImg.MainImg, {
          item: item
        })), /*#__PURE__*/React.createElement("div", {
          className: "info-cont"
        }, /*#__PURE__*/React.createElement("a", {
          href: detailUrl,
          className: "item-title"
        }, item.title), /*#__PURE__*/React.createElement("div", {
          className: "category"
        }, item.category))));
      });
      return latestProducts;
    };
    render() {
      return /*#__PURE__*/React.createElement(React.Fragment, null, this.getLatestProducts());
    }
  }
  class ProductItems extends React.Component {
    constructor(props) {
      super(props);
    }
    getProducts = function () {
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
          images.push( /*#__PURE__*/React.createElement(ProductGridItem, {
            id: key,
            item: item
          }));
          if (num % cols == 0) {
            products.push( /*#__PURE__*/React.createElement("div", {
              className: "row"
            }, images));
            images = [];
          }
        }
      });
      if (images.length > 0) {
        products.push( /*#__PURE__*/React.createElement("div", {
          className: "row"
        }, images));
      }
      return products;
    };
    render() {
      return /*#__PURE__*/React.createElement(React.Fragment, null, this.getProducts());
    }
  }
  class ProductGridItem extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      var detailLink = "product-detail.html?item=" + this.props.id,
        series = this.props.item.series ? this.props.item.series : "";
      return /*#__PURE__*/React.createElement("div", {
        className: "col-md-4 tile"
      }, /*#__PURE__*/React.createElement("a", {
        href: detailLink
      }, /*#__PURE__*/React.createElement(productImg.MainImg, {
        item: this.props.item
      })), /*#__PURE__*/React.createElement("div", {
        className: "tile-title"
      }, /*#__PURE__*/React.createElement("a", {
        href: detailLink
      }, this.props.item.title)), /*#__PURE__*/React.createElement("div", {
        className: "tile-meta"
      }, /*#__PURE__*/React.createElement("div", {
        className: "meta-top"
      }, /*#__PURE__*/React.createElement("span", null, this.props.item.subtitle)), !this.props.item.hideSeries && /*#__PURE__*/React.createElement("div", {
        className: "meta-bottom"
      }, /*#__PURE__*/React.createElement("span", null, series))));
    }
  }
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
      ReactDOM.render( /*#__PURE__*/React.createElement(GridImages, {
        housing: housing
      }), document.querySelector('#grid-images'));
      $('#housing-selected').hide();
    } else if (category == "濾心") {
      ReactDOM.render( /*#__PURE__*/React.createElement(GridImages, {
        category: category
      }), document.querySelector('#grid-images'));
      $('#housing-selected').hide();
    } else if (housing || category || subgroup) {
      ReactDOM.render( /*#__PURE__*/React.createElement(SideBarList, {
        housing: housing,
        category: category,
        subgroup: subgroup
      }), document.querySelector('#sidebar-cat-list'));
      ReactDOM.render( /*#__PURE__*/React.createElement(LatestProducts, null), document.querySelector('#latest-products'));
      ReactDOM.render( /*#__PURE__*/React.createElement(ProductItems, {
        housing: housing,
        category: category,
        subgroup: subgroup
      }), document.querySelector('#product-grid-items'));
    } else {
      ReactDOM.render( /*#__PURE__*/React.createElement(GridImages, null), document.querySelector('#grid-images'));
      $('#housing-selected').hide();
    }
  };
  return instance;
});