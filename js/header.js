define('header', ['react', 'reactDOM', 'constant'], function (React, ReactDOM, constant) {
  'use strict';

  class Header extends React.Component {
    constructor(props) {
      super(props);
    }
    componentDidMount = function () {
      if (this.props.pathname.indexOf('index') >= 0) {
        $('#nav-home').addClass('current');
      } else if (this.props.pathname.indexOf('aboutus') >= 0) {
        $('#nav-aboutus').addClass('current');
      } else if (this.props.pathname.indexOf('product') >= 0) {
        $('#nav-products').addClass('current');
      } else if (this.props.pathname.indexOf('news') >= 0) {
        $('#nav-news').addClass('current');
      } else if (this.props.pathname.indexOf('contact') >= 0) {
        $('#nav-contact').addClass('current');
      }
    };
    render() {
      return /*#__PURE__*/React.createElement("div", {
        id: "header-container"
      }, /*#__PURE__*/React.createElement("div", {
        className: "container"
      }, /*#__PURE__*/React.createElement("div", {
        className: "middle-bar"
      }, /*#__PURE__*/React.createElement("div", {
        className: "column left-side"
      }, /*#__PURE__*/React.createElement("div", {
        className: "logo"
      }, /*#__PURE__*/React.createElement("img", {
        className: "logo-img",
        src: "img/logo.png"
      }), /*#__PURE__*/React.createElement("div", {
        className: "brandname"
      }, "\u65B0\u51F1\u6FFE\u6750\u5DE5\u696D\u6709\u9650\u516C\u53F8"), /*#__PURE__*/React.createElement("div", {
        className: "brandname-en"
      }, "CP FILTER Industrial Co.,Ltd."))), /*#__PURE__*/React.createElement("div", {
        className: "navbar"
      }, /*#__PURE__*/React.createElement("ul", {
        className: "main-nav"
      }, /*#__PURE__*/React.createElement("li", {
        id: "nav-home",
        className: "nav-item lvl-1"
      }, /*#__PURE__*/React.createElement("a", {
        href: "index.html"
      }, "\u9996\u9801")), /*#__PURE__*/React.createElement("li", {
        id: "nav-aboutus",
        className: "nav-item lvl-1"
      }, /*#__PURE__*/React.createElement("a", {
        href: "aboutus.html"
      }, "\u95DC\u65BC\u65B0\u51F1")), /*#__PURE__*/React.createElement("li", {
        id: "nav-products",
        className: "nav-item dropdown lvl-1"
      }, /*#__PURE__*/React.createElement("a", {
        href: "products.html"
      }, "\u7522\u54C1\u8CC7\u8A0A"), /*#__PURE__*/React.createElement(SubNav, null)), /*#__PURE__*/React.createElement("li", {
        id: "nav-news",
        className: "nav-item lvl-1"
      }, /*#__PURE__*/React.createElement("a", {
        href: "news.html"
      }, "\u6700\u65B0\u6D88\u606F")), /*#__PURE__*/React.createElement("li", {
        id: "nav-contact",
        className: "nav-item lvl-1"
      }, /*#__PURE__*/React.createElement("a", {
        href: "contact.html"
      }, "\u806F\u7D61\u6211\u5011")))))), /*#__PURE__*/React.createElement("div", {
        className: "mobile-view"
      }, /*#__PURE__*/React.createElement("div", {
        className: "container"
      }, /*#__PURE__*/React.createElement("a", {
        href: "#",
        className: "offcanvas-toggle"
      }, /*#__PURE__*/React.createElement("i", {
        className: "material-icons menu"
      })), /*#__PURE__*/React.createElement("div", {
        className: "logo"
      }, /*#__PURE__*/React.createElement("img", {
        className: "logo-img",
        src: "img/logo_pure.png"
      }), /*#__PURE__*/React.createElement("span", {
        className: "brandname"
      }, "\u65B0\u51F1\u6FFE\u6750\u5DE5\u696D\u6709\u9650\u516C\u53F8")))));
    }
  }
  class SubNav extends React.Component {
    constructor(props) {
      super(props);
    }
    getMenu = function () {
      var menu = [];
      constant.HOUSING.forEach(function (housing) {
        menu.push( /*#__PURE__*/React.createElement(DropDownItem, {
          housing: housing
        }));
      });
      return menu;
    };
    render() {
      return /*#__PURE__*/React.createElement("ul", {
        className: "sub-menu"
      }, this.getMenu());
    }
  }
  class DropDownItem extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      var housing = this.props.housing,
        hasSubMenu = constant.CATEGORIES[housing].length > 0,
        menuClass = ["nav-item", "lvl-2"],
        housingHref = "products.html?housing=" + housing;
      if (hasSubMenu) {
        menuClass.push("dropdown");
      }
      return /*#__PURE__*/React.createElement("li", {
        className: menuClass.join(' ')
      }, /*#__PURE__*/React.createElement("a", {
        href: housingHref
      }, housing), hasSubMenu && /*#__PURE__*/React.createElement(SubMenuItem, {
        housing: housing
      }));
    }
  }
  class SubMenuItem extends React.Component {
    constructor(props) {
      super(props);
    }
    getSubMenu = function () {
      var subMenu = [];
      constant.CATEGORIES[this.props.housing].forEach(function (category) {
        var categoryLink = "products.html?category=" + category;
        subMenu.push( /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
          href: categoryLink
        }, category)));
      });
      return subMenu;
    };
    render() {
      return /*#__PURE__*/React.createElement("ul", {
        class: "sub-menu"
      }, this.getSubMenu());
    }
  }
  ReactDOM.render( /*#__PURE__*/React.createElement(Header, {
    pathname: window.location.pathname
  }), document.querySelector('.header'));
});