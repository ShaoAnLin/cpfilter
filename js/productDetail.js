define('productDetail', ['react', 'reactDOM', 'constant', 'productImg', 'common'], function (React, ReactDOM, constant, productImg, common) {
  'use strict';

  var getItem = function () {
    var params = new URLSearchParams(window.location.search),
      targetItem = params.get('item');
    if (targetItem && Object.prototype.hasOwnProperty.call(constant.ITEMS, targetItem)) {
      return constant.ITEMS[targetItem];
    }
    return null;
  };
  var setProductMetadata = function (item) {
    var title = item.title + "｜新凱濾材工業有限公司",
      description = item.subtitle || "新凱濾材工業有限公司的" + item.title + "產品資訊。",
      itemId = new URLSearchParams(window.location.search).get('item'),
      url = "https://cpfilter.com/product-detail.html" + (itemId ? "?item=" + encodeURIComponent(itemId) : "");
    document.title = title;
    document.querySelector('meta[name="description"]').setAttribute('content', description);
    document.querySelector('link[rel="canonical"]').setAttribute('href', url);
    document.querySelector('meta[property="og:title"]').setAttribute('content', title);
    document.querySelector('meta[property="og:description"]').setAttribute('content', description);
    document.querySelector('meta[property="og:url"]').setAttribute('content', url);
    document.querySelector('meta[name="twitter:title"]').setAttribute('content', title);
    document.querySelector('meta[name="twitter:description"]').setAttribute('content', description);
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
      images.push(/*#__PURE__*/React.createElement("img", {
        src: imgUrl,
        alt: this.props.item.title + "主圖",
        loading: this.props.isPrimary ? "eager" : "lazy",
        decoding: "async",
        width: "1658",
        height: "1658"
      }));
      for (var i = 0; i < this.props.item.images; ++i) {
        imgUrl = "{0}{1}.jpg".format(imgBaseUrl, i);
        images.push(/*#__PURE__*/React.createElement("img", {
          src: imgUrl,
          alt: this.props.item.title + "產品圖片 " + (i + 1),
          loading: "lazy",
          decoding: "async"
        }));
      }
      return /*#__PURE__*/React.createElement(React.Fragment, null, images);
    }
  }
  class ProductNotFound extends React.Component {
    render() {
      return /*#__PURE__*/React.createElement("div", {
        className: "text-center"
      }, /*#__PURE__*/React.createElement("h2", null, "\u627E\u4E0D\u5230\u7522\u54C1"), /*#__PURE__*/React.createElement("p", null, "\u60A8\u5C0B\u627E\u7684\u7522\u54C1\u4E0D\u5B58\u5728\u6216\u9023\u7D50\u5DF2\u5931\u6548\u3002"), /*#__PURE__*/React.createElement("a", {
        className: "btn btn-primary",
        href: "products.html"
      }, "\u8FD4\u56DE\u7522\u54C1\u8CC7\u8A0A"));
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
          ranges.push(/*#__PURE__*/React.createElement("li", null, str));
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
      }, this.props.item.title), /*#__PURE__*/React.createElement("div", null, this.props.item.subtitle), this.props.item.range && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h5", {
        className: "section-title"
      }, "\u9069\u7528\u7BC4\u570D"), /*#__PURE__*/React.createElement("div", {
        className: "item-range"
      }, rangeDiv)), this.props.item.spec && this.props.item.specUpper && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h5", {
        className: "section-title"
      }, "\u898F\u683C"), /*#__PURE__*/React.createElement(ItemSpec, {
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
          spec.push(/*#__PURE__*/React.createElement("li", null, key, ": ", value));
        });
      } else if (this.props.item.specImgs) {
        var src = constant.getImgPath(this.props.item, 'spec') + '.jpg';
        spec.push(/*#__PURE__*/React.createElement("img", {
          src: src,
          alt: this.props.item.title + "規格圖",
          loading: "lazy",
          decoding: "async"
        }));
        for (var i = 1; i < this.props.item.specImgs; ++i) {
          var src = constant.getImgPath(this.props.item, 'spec' + i) + '.jpg';
          spec.push(/*#__PURE__*/React.createElement("img", {
            src: src,
            alt: this.props.item.title + "規格圖 " + (i + 1),
            loading: "lazy",
            decoding: "async"
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
        features.push(/*#__PURE__*/React.createElement("li", null, str));
      });
      return /*#__PURE__*/React.createElement("ul", {
        className: "list-featured"
      }, features);
    }
  }
  class ItemImages extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      var images = [];
      if (this.props.imagesCount) {
        var src = constant.getImgPath(this.props.item, this.props.tabName) + '.jpg';
        images.push(/*#__PURE__*/React.createElement("img", {
          src: src,
          alt: this.props.item.title + this.props.tabLabel + "圖",
          loading: "lazy",
          decoding: "async"
        }));
        for (var i = 1; i < this.props.imagesCount; ++i) {
          var src = constant.getImgPath(this.props.item, this.props.tabName + i) + '.jpg';
          images.push(/*#__PURE__*/React.createElement("img", {
            src: src,
            alt: this.props.item.title + this.props.tabLabel + "圖 " + (i + 1),
            loading: "lazy",
            decoding: "async"
          }));
        }
      }
      return /*#__PURE__*/React.createElement("ul", {
        className: "list-featured item-image"
      }, images);
    }
  }
  var setTabDetail = function (item) {
    if (item.spec && item.specUpper != true || item.specImgs) {
      ReactDOM.render(/*#__PURE__*/React.createElement(ItemSpec, {
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
        $('#nav-tab-spec').removeClass('active');
        $('#tab-spec').removeClass('in active');
        $('#nav-tab-feature').addClass('active');
        $('#tab-feature').addClass('in active');
        $('#tab-link-spec').attr('aria-selected', 'false');
        $('#tab-link-feature').attr('aria-selected', 'true');
      }
      ReactDOM.render(/*#__PURE__*/React.createElement(ItemFeature, {
        feature: item.feature
      }), document.querySelector('#feature-detail'));
    } else {
      $('#nav-tab-feature').hide();
    }
    if (item.modelImgs) {
      ReactDOM.render(/*#__PURE__*/React.createElement(ItemImages, {
        item: item,
        tabName: "model",
        tabLabel: "\u578B\u865F\u9078\u8CFC",
        imagesCount: item.modelImgs
      }), document.querySelector('#model-detail'));
    } else {
      $('#nav-tab-model').hide();
    }
    if (item.componentImgs) {
      ReactDOM.render(/*#__PURE__*/React.createElement(ItemImages, {
        item: item,
        tabName: "component",
        tabLabel: "\u5404\u90E8\u96F6\u4EF6",
        imagesCount: item.componentImgs
      }), document.querySelector('#component-detail'));
    } else {
      $('#nav-tab-component').hide();
    }
    if (item.sizeImgs) {
      ReactDOM.render(/*#__PURE__*/React.createElement(ItemImages, {
        item: item,
        tabName: "size",
        tabLabel: "\u5C3A\u5BF8\u898F\u683C",
        imagesCount: item.sizeImgs
      }), document.querySelector('#size-detail'));
    } else {
      $('#nav-tab-size').hide();
    }
    if (item.conditionImgs) {
      $('#condition-img').attr("src", constant.getImgPath(item, 'condition') + '.jpg').attr("alt", item.title + "操作條件圖").attr("loading", "lazy").attr("decoding", "async").removeAttr("aria-hidden");
    } else {
      $('#nav-tab-condition').hide();
    }
    if (item.dataImgs) {
      $('#data-img').attr("src", constant.getImgPath(item, 'data') + '.jpg').attr("alt", item.title + "數據圖表").attr("loading", "lazy").attr("decoding", "async").removeAttr("aria-hidden");
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
            products.push(/*#__PURE__*/React.createElement(ProductGridItem, {
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
                  products.push(/*#__PURE__*/React.createElement(ProductGridItem, {
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
              products.push(/*#__PURE__*/React.createElement(ProductGridItem, {
                id: cat,
                item: constant.ITEMS[cat]
              }));
            }
            ++num;
          } else if (num < 4 && seriesList.length > 0) {
            for (var i = 0; i < seriesList.length && num < 4; ++i) {
              if (seriesList[i] != item.series) {
                products.push(/*#__PURE__*/React.createElement(ProductGridItem, {
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
    if (!item) {
      $('#housing-name, #category-name, #category-right-icon').hide();
      $('.single-slider').hide();
      $('#item-tab-container').closest('section').hide();
      $('#section-related').hide();
      ReactDOM.render(/*#__PURE__*/React.createElement(ProductNotFound, null), document.querySelector('#single-item-info'));
      return;
    }
    setProductMetadata(item);

    // Housing & Category
    $('#housing-name').html(item.housing).attr("href", "products.html?housing=" + item.housing);
    if (item.category) {
      $('#category-name').html(item.category);
      $('#category-name').attr("href", "products.html?category=" + item.category);
    } else {
      $('#category-right-icon').hide();
    }

    // Images
    ReactDOM.render(/*#__PURE__*/React.createElement(DetailImages, {
      item: item,
      isPrimary: true
    }), document.querySelector('#product-img-thumbnail'));
    ReactDOM.render(/*#__PURE__*/React.createElement(DetailImages, {
      item: item,
      isPrimary: true
    }), document.querySelector('#product-img-preview'));

    // Details
    ReactDOM.render(/*#__PURE__*/React.createElement(ItemInfo, {
      item: item
    }), document.querySelector('#single-item-info'));
    setTabDetail(item);

    // Related Products
    ReactDOM.render(/*#__PURE__*/React.createElement(RelatedProducts, {
      item: item
    }), document.querySelector('#related-products'));
  };
  return instance;
});