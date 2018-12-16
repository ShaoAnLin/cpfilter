var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

define('header', ['react', 'reactDOM'], function (React, ReactDOM) {

  'use strict';

  var Header = function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header(props) {
      _classCallCheck(this, Header);

      return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));
    }

    _createClass(Header, [{
      key: 'render',
      value: function render() {
        return React.createElement(
          'div',
          { id: 'header-container' },
          React.createElement(
            'div',
            { className: 'container' },
            React.createElement(
              'div',
              { className: 'middle-bar' },
              React.createElement(
                'div',
                { className: 'column left-side' },
                React.createElement(
                  'div',
                  { className: 'logo' },
                  React.createElement('img', { className: 'logo-img', src: 'img/logo.png' }),
                  React.createElement(
                    'span',
                    { className: 'brandname' },
                    '\u65B0\u51F1\u6FFE\u6750\u5DE5\u696D\u80A1\u4EFD\u6709\u9650\u516C\u53F8'
                  )
                )
              ),
              React.createElement(
                'div',
                { className: 'navbar' },
                React.createElement(
                  'ul',
                  { className: 'main-nav' },
                  React.createElement(
                    'li',
                    { id: 'nav-home', className: 'nav-item lvl-1' },
                    React.createElement(
                      'a',
                      { href: 'index.html' },
                      '\u9996\u9801'
                    )
                  ),
                  React.createElement(
                    'li',
                    { id: 'nav-aboutus', className: 'nav-item lvl-1' },
                    React.createElement(
                      'a',
                      { href: 'aboutus.html' },
                      '\u95DC\u65BC\u65B0\u51F1'
                    )
                  ),
                  React.createElement(
                    'li',
                    { id: 'nav-products', className: 'nav-item dropdown lvl-1' },
                    React.createElement(
                      'a',
                      { href: 'products.html' },
                      '\u7522\u54C1\u8CC7\u8A0A'
                    ),
                    React.createElement('ul', { className: 'sub-menu' })
                  ),
                  React.createElement(
                    'li',
                    { id: 'nav-news', className: 'nav-item lvl-1' },
                    React.createElement(
                      'a',
                      { href: 'news.html' },
                      '\u6700\u65B0\u6D88\u606F'
                    )
                  ),
                  React.createElement(
                    'li',
                    { id: 'nav-contact', className: 'nav-item lvl-1' },
                    React.createElement(
                      'a',
                      { href: 'contact.html' },
                      '\u806F\u7D61\u6211\u5011'
                    )
                  )
                )
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'mobile-view' },
            React.createElement(
              'div',
              { className: 'container' },
              React.createElement(
                'a',
                { href: '#', className: 'offcanvas-toggle' },
                React.createElement('i', { className: 'material-icons menu' })
              ),
              React.createElement(
                'div',
                { className: 'logo' },
                React.createElement('img', { className: 'logo-img', src: 'img/logo_pure.png' }),
                React.createElement(
                  'span',
                  { className: 'brandname' },
                  '\u65B0\u51F1\u6FFE\u6750\u5DE5\u696D\u80A1\u4EFD\u6709\u9650\u516C\u53F8'
                )
              )
            )
          )
        );
      }
    }]);

    return Header;
  }(React.Component);

  var domContainer = document.querySelector('.header');
  ReactDOM.render(React.createElement(Header), domContainer);
});