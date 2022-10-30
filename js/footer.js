define('footer', ['react', 'reactDOM'], function (React, ReactDOM) {
  'use strict';

  class Footer extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
        className: "container"
      }, /*#__PURE__*/React.createElement("div", {
        className: "row"
      }, /*#__PURE__*/React.createElement("div", {
        className: "col-md-6"
      }, /*#__PURE__*/React.createElement("div", {
        className: "row"
      }, /*#__PURE__*/React.createElement("div", {
        className: "col-sm-12"
      }, /*#__PURE__*/React.createElement("div", {
        className: "logo"
      }, /*#__PURE__*/React.createElement("div", {
        className: "brandname"
      }, "\u65B0\u51F1\u6FFE\u6750\u5DE5\u696D\u6709\u9650\u516C\u53F8"), /*#__PURE__*/React.createElement("div", {
        className: "brandname-en"
      }, "CP FILTER Industrial Co.,Ltd.")), /*#__PURE__*/React.createElement("div", {
        className: "widget widget-callback"
      }, /*#__PURE__*/React.createElement("i", {
        className: "icon material-icons headset_mic"
      }), /*#__PURE__*/React.createElement("div", {
        className: "info-text"
      }, /*#__PURE__*/React.createElement("div", null, "(02)2808-1655"))), /*#__PURE__*/React.createElement("div", {
        className: "widget widget-callback"
      }, /*#__PURE__*/React.createElement("i", {
        className: "icon material-icons print"
      }), /*#__PURE__*/React.createElement("div", {
        className: "info-text"
      }, /*#__PURE__*/React.createElement("div", null, "(02)2808-1557")))))), /*#__PURE__*/React.createElement("div", {
        className: "mobile-hide col-md-6"
      }, /*#__PURE__*/React.createElement("div", {
        className: "row mobile-top-buffer"
      }, /*#__PURE__*/React.createElement("div", {
        className: "col-sm-12"
      }, /*#__PURE__*/React.createElement("div", {
        className: "widget categories-widget"
      }, /*#__PURE__*/React.createElement("div", {
        className: "widget-title"
      }, "\u806F\u7D61\u6211\u5011"), /*#__PURE__*/React.createElement("div", {
        className: "widget widget-callback"
      }, /*#__PURE__*/React.createElement("i", {
        className: "icon material-icons email"
      }), /*#__PURE__*/React.createElement("div", null, "service@cpfilter.com")), /*#__PURE__*/React.createElement("div", {
        className: "widget widget-callback"
      }, /*#__PURE__*/React.createElement("i", {
        className: "icon material-icons location_city address"
      }), /*#__PURE__*/React.createElement("div", null, "\u65B0\u5317\u5E02\u6DE1\u6C34\u5340\u4E2D\u6B63\u6771\u8DEF\u4E8C\u6BB569-4\u865F3\u6A13\u4E4B\u4E00")))))))), /*#__PURE__*/React.createElement("div", {
        className: "copyright mobile-hide"
      }, /*#__PURE__*/React.createElement("span", null, "\xA9 2022. \u65B0\u51F1\u6FFE\u6750\u5DE5\u696D\u6709\u9650\u516C\u53F8 "), /*#__PURE__*/React.createElement("span", {
        className: "brandname-en"
      }, "CP FILTER Industrial Co.,Ltd."), /*#__PURE__*/React.createElement("span", null, "All Rights Reserved.")), /*#__PURE__*/React.createElement("div", {
        className: "copyright mobile-show"
      }, /*#__PURE__*/React.createElement("span", null, "\xA9 2022. CP FILTER Industrial Co.,Ltd. All Rights Reserved.")));
    }
  }
  ReactDOM.render( /*#__PURE__*/React.createElement(Footer, null), document.querySelector('.footer'));
});