define('sideNav', ['react', 'reactDOM', 'constant'], function (React, ReactDOM, constant) {
  'use strict';

  class SideNav extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      var sideMenu = [];
      constant.HOUSING.forEach(function (housing) {
        var housingLink = "products.html?housing=" + housing;
        sideMenu.push( /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
          href: housingLink
        }, housing)));
      });
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
        className: "side-nav-tools"
      }, /*#__PURE__*/React.createElement("a", {
        href: "#",
        className: "offcanvas-toggle inner-toggle"
      }, /*#__PURE__*/React.createElement("i", {
        className: "material-icons close"
      }))), /*#__PURE__*/React.createElement("nav", {
        className: "offcanvas-navigation",
        role: "navigation",
        "data-back-btn-text": "Back"
      }, /*#__PURE__*/React.createElement("div", {
        className: "menu-site-menu-container"
      }, /*#__PURE__*/React.createElement("ul", {
        className: "menu"
      }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: "index.html"
      }, "\u9996\u9801")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: "aboutus.html"
      }, "\u95DC\u65BC\u65B0\u51F1")), /*#__PURE__*/React.createElement("li", {
        className: "menu-item-has-children"
      }, /*#__PURE__*/React.createElement("a", {
        href: "products.html"
      }, "\u7522\u54C1\u8CC7\u8A0A"), /*#__PURE__*/React.createElement("ul", {
        className: "sub-menu"
      }, sideMenu)), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: "news.html"
      }, "\u6700\u65B0\u6D88\u606F")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: "contact.html"
      }, "\u806F\u7D61\u6211\u5011"))))));
    }
  }
  ReactDOM.render( /*#__PURE__*/React.createElement(SideNav, null), document.querySelector('.off-canvas-cont'));
});