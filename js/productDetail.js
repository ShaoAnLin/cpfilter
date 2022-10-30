define('productDetail', ['react', 'reactDOM', 'constant', 'productImg', 'common'], function (React, ReactDOM, constant, productImg, common) {
  'use strict';

  var getItem = function () {
    var queryItem = decodeURI(window.location.search).match('item=.*'),
      targetItem = null;
    if (queryItem) {
      targetItem = queryItem[0].split('=')[1];
    }
    return constant.ITEMS[targetItem];
  };
  var onLoad = function () {
    setTimeout(function () {
      common.onLoadEvents();
    }, 500);
  };
  class DetailImages extends React.Component {
    constructor(props) {
      super(props);
    }
    componentDidMount = function () {
      onLoad();
    };
    render() {
      var imgUrl = constant.getImgPath(this.props.item, 'main') + ".jpg",
        imgBaseUrl = constant.getImgPath(this.props.item),
        images = [];
      images.push( /*#__PURE__*/React.createElement("img", {
        src: imgUrl,
        alt: "Thumb"
      }));
      for (var i = 0; i < this.props.item.images; ++i) {
        imgUrl = "{0}{1}.jpg".format(imgBaseUrl, i);
        images.push( /*#__PURE__*/React.createElement("img", {
          src: imgUrl,
          alt: "Thumb"
        }));
      }
      return /*#__PURE__*/React.createElement(React.Fragment, null, images);
    }
  }
  class ItemInfo extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      var rangeDiv = null;
      if (Array.isArray(this.props.item.range)) {
        var ranges = [];
        this.props.item.range.forEach(function (str) {
          ranges.push( /*#__PURE__*/React.createElement("li", null, str));
        });
        rangeDiv = /*#__PURE__*/React.createElement("ul", {
          className: "list-featured"
        }, ranges);
      } else {
        rangeDiv = this.props.item.range;
      }
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
        className: "series-name"
      }, constant.getItemIdStr(this.props.item)), /*#__PURE__*/React.createElement("h4", {
        className: "item-title"
      }, this.props.item.title), /*#__PURE__*/React.createElement("div", null, this.props.item.subtitle), this.props.item.range && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
        className: "row"
      }, /*#__PURE__*/React.createElement("div", {
        className: "col-sm-12"
      }, /*#__PURE__*/React.createElement("h5", {
        className: "section-title"
      }, "\u9069\u7528\u7BC4\u570D"))), /*#__PURE__*/React.createElement("div", {
        className: "item-range"
      }, rangeDiv)), this.props.item.spec && this.props.item.specUpper && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
        className: "row"
      }, /*#__PURE__*/React.createElement("div", {
        className: "col-sm-12"
      }, /*#__PURE__*/React.createElement("h5", {
        className: "section-title"
      }, "\u898F\u683C"))), /*#__PURE__*/React.createElement(ItemSpec, {
        item: this.props.item
      })));
    }
  }
  class ItemSpec extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      var spec = [];
      if (this.props.item.spec) {
        $.each(this.props.item.spec, function (key, value) {
          spec.push( /*#__PURE__*/React.createElement("li", null, key, ": ", value));
        });
      } else if (this.props.item.specImgs) {
        var src = constant.getImgPath(this.props.item, 'spec') + '.jpg';
        spec.push( /*#__PURE__*/React.createElement("img", {
          src: src
        }));
        for (var i = 1; i < this.props.item.specImgs; ++i) {
          var src = constant.getImgPath(this.props.item, 'spec' + i) + '.jpg';
          spec.push( /*#__PURE__*/React.createElement("img", {
            src: src
          }));
        }
      }
      return /*#__PURE__*/React.createElement("ul", {
        className: "list-featured item-spec"
      }, spec);
    }
  }
  class ItemFeature extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      var features = [];
      this.props.feature.forEach(function (str) {
        features.push( /*#__PURE__*/React.createElement("li", null, str));
      });
      return /*#__PURE__*/React.createElement("ul", {
        className: "list-featured"
      }, features);
    }
  }
  var setTabDetail = function (item) {
    if (item.spec && item.specUpper != true || item.specImgs) {
      ReactDOM.render( /*#__PURE__*/React.createElement(ItemSpec, {
        item: item
      }), document.querySelector('#spec-detail'));
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
      ReactDOM.render( /*#__PURE__*/React.createElement(ItemFeature, {
        feature: item.feature
      }), document.querySelector('#feature-detail'));
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
  class RelatedProducts extends React.Component {
    constructor(props) {
      super(props);
    }
    getRelatedProducts = function () {
      var products = [],
        item = this.props.item,
        num = 0;
      if (item.series) {
        var seriesList = constant.SERIES[item.housing][item.category];
        for (var i = 0; i < seriesList.length && num < 4; ++i) {
          if (seriesList[i] != item.series) {
            products.push( /*#__PURE__*/React.createElement(ProductGridItem, {
              id: seriesList[i],
              item: constant.ITEMS[seriesList[i]]
            }));
            ++num;
          }
        }
        if (num < 4) {
          constant.CATEGORIES[item.housing].forEach(function (category) {
            if (category != item.category) {
              var seriesList = constant.SERIES[item.housing][category];
              for (var i = 0; i < seriesList.length && num < 4; ++i) {
                if (seriesList[i] != item.series) {
                  products.push( /*#__PURE__*/React.createElement(ProductGridItem, {
                    id: seriesList[i],
                    item: constant.ITEMS[seriesList[i]]
                  }));
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
              products.push( /*#__PURE__*/React.createElement(ProductGridItem, {
                id: cat,
                item: constant.ITEMS[cat]
              }));
            }
            ++num;
          } else if (num < 4 && seriesList.length > 0) {
            for (var i = 0; i < seriesList.length && num < 4; ++i) {
              if (seriesList[i] != item.series) {
                products.push( /*#__PURE__*/React.createElement(ProductGridItem, {
                  id: seriesList[i],
                  item: constant.ITEMS[seriesList[i]]
                }));
                ++num;
              }
            }
          }
        });
      }
      return products;
    };
    render() {
      var products = this.getRelatedProducts();
      if (products.length == 0) {
        $('#section-related').hide();
      }
      return /*#__PURE__*/React.createElement(React.Fragment, null, products);
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
        className: "col-md-3 tile"
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
    var detailImages = /*#__PURE__*/React.createElement(DetailImages, {
      item: item
    });
    ReactDOM.render(detailImages, document.querySelector('#product-img-thumbnail'));
    ReactDOM.render(detailImages, document.querySelector('#product-img-preview'));

    // Details
    ReactDOM.render( /*#__PURE__*/React.createElement(ItemInfo, {
      item: item
    }), document.querySelector('#single-item-info'));
    setTabDetail(item);

    // Related Products
    ReactDOM.render( /*#__PURE__*/React.createElement(RelatedProducts, {
      item: item
    }), document.querySelector('#related-products'));
  };
  return instance;
});