var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

define('footer', ['react', 'reactDOM'], function (React, ReactDOM) {

  'use strict';

  var Footer = function (_React$Component) {
    _inherits(Footer, _React$Component);

    function Footer(props) {
      _classCallCheck(this, Footer);

      return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this, props));
    }

    _createClass(Footer, [{
      key: 'render',
      value: function render() {
        return React.createElement(
          React.Fragment,
          null,
          React.createElement(
            'div',
            { className: 'container' },
            React.createElement(
              'div',
              { className: 'row' },
              React.createElement(
                'div',
                { className: 'col-md-6' },
                React.createElement(
                  'div',
                  { className: 'row' },
                  React.createElement(
                    'div',
                    { className: 'col-sm-12' },
                    React.createElement(
                      'div',
                      { className: 'logo' },
                      React.createElement(
                        'div',
                        { className: 'brandname' },
                        '\u65B0\u51F1\u6FFE\u6750\u5DE5\u696D\u80A1\u4EFD\u6709\u9650\u516C\u53F8'
                      ),
                      React.createElement(
                        'div',
                        { className: 'brandname-en' },
                        'CP Filter Industrial Co.,Ltd.'
                      )
                    ),
                    React.createElement(
                      'div',
                      { className: 'widget widget-callback' },
                      React.createElement('i', { className: 'icon material-icons headset_mic' }),
                      React.createElement(
                        'div',
                        { className: 'info-text' },
                        React.createElement(
                          'div',
                          null,
                          '(02) 2808-1655'
                        )
                      )
                    )
                  )
                )
              ),
              React.createElement(
                'div',
                { className: 'mobile-hide col-md-6' },
                React.createElement(
                  'div',
                  { className: 'row mobile-top-buffer' },
                  React.createElement(
                    'div',
                    { className: 'col-sm-4' },
                    React.createElement(
                      'div',
                      { className: 'widget categories-widget' },
                      React.createElement(
                        'div',
                        { className: 'widget-title' },
                        '\u7522\u54C1\u8CC7\u8A0A'
                      ),
                      React.createElement(
                        'ul',
                        { className: 'cat-list' },
                        React.createElement(
                          'li',
                          null,
                          React.createElement(
                            'a',
                            { href: 'products.html?housing=\u904E\u6FFE\u5668' },
                            '\u904E\u6FFE\u5668'
                          )
                        ),
                        React.createElement(
                          'li',
                          null,
                          React.createElement(
                            'a',
                            { href: 'products.html?housing=\u6FFE\u6750' },
                            '\u6FFE\u6750'
                          )
                        )
                      )
                    )
                  ),
                  React.createElement(
                    'div',
                    { className: 'col-sm-8' },
                    React.createElement(
                      'div',
                      { className: 'widget categories-widget' },
                      React.createElement(
                        'div',
                        { className: 'widget-title' },
                        '\u806F\u7D61\u6211\u5011'
                      ),
                      React.createElement(
                        'ul',
                        { className: 'cat-list' },
                        React.createElement(
                          'li',
                          null,
                          React.createElement('i', { className: 'icon material-icons email' }),
                          React.createElement(
                            'div',
                            null,
                            'peter@cpfilter.com.tw'
                          )
                        ),
                        React.createElement(
                          'li',
                          null,
                          React.createElement('i', { className: 'icon material-icons location_city address' }),
                          React.createElement(
                            'div',
                            null,
                            '\u65B0\u5317\u5E02\u6DE1\u6C34\u5340\u4E2D\u6B63\u6771\u8DEF\u4E8C\u6BB569-4\u865F3\u6A13\u4E4B\u4E00'
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'copyright' },
            React.createElement(
              'span',
              null,
              '\xA9 2018. \u65B0\u51F1\u6FFE\u6750\u5DE5\u696D\u80A1\u4EFD\u6709\u9650\u516C\u53F8 '
            ),
            React.createElement(
              'span',
              { className: 'brandname-en' },
              'CP Filter Industrial Co.,Ltd.'
            ),
            React.createElement(
              'span',
              null,
              'All Rights Reserved.'
            )
          )
        );
      }
    }]);

    return Footer;
  }(React.Component);

  ReactDOM.render(React.createElement(Footer, null), document.querySelector('.footer'));
});