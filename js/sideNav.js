var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

define('sideNav', ['react', 'reactDOM', 'constant'], function (React, ReactDOM, constant) {

  'use strict';

  var SideNav = function (_React$Component) {
    _inherits(SideNav, _React$Component);

    function SideNav(props) {
      _classCallCheck(this, SideNav);

      return _possibleConstructorReturn(this, (SideNav.__proto__ || Object.getPrototypeOf(SideNav)).call(this, props));
    }

    _createClass(SideNav, [{
      key: 'render',
      value: function render() {
        var sideMenu = [];
        constant.HOUSING.forEach(function (housing) {
          var housingLink = "products.html?housing=" + housing;
          sideMenu.push(React.createElement(
            'li',
            null,
            React.createElement(
              'a',
              { href: housingLink },
              housing
            )
          ));
        });
        return React.createElement(
          React.Fragment,
          null,
          React.createElement(
            'div',
            { className: 'side-nav-tools' },
            React.createElement(
              'a',
              { href: '#', className: 'offcanvas-toggle inner-toggle' },
              React.createElement('i', { className: 'material-icons close' })
            )
          ),
          React.createElement(
            'nav',
            { className: 'offcanvas-navigation', role: 'navigation', 'data-back-btn-text': 'Back' },
            React.createElement(
              'div',
              { className: 'menu-site-menu-container' },
              React.createElement(
                'ul',
                { className: 'menu' },
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    'a',
                    { href: 'index.html' },
                    '\u9996\u9801'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    'a',
                    { href: 'aboutus.html' },
                    '\u95DC\u65BC\u65B0\u51F1'
                  )
                ),
                React.createElement(
                  'li',
                  { className: 'menu-item-has-children' },
                  React.createElement(
                    'a',
                    { href: 'products.html' },
                    '\u7522\u54C1\u8CC7\u8A0A'
                  ),
                  React.createElement(
                    'ul',
                    { className: 'sub-menu' },
                    sideMenu
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    'a',
                    { href: 'news.html' },
                    '\u6700\u65B0\u6D88\u606F'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    'a',
                    { href: 'contact.html' },
                    '\u806F\u7D61\u6211\u5011'
                  )
                )
              )
            )
          )
        );
      }
    }]);

    return SideNav;
  }(React.Component);

  var domContainer = document.querySelector('.off-canvas-cont');
  ReactDOM.render(React.createElement(SideNav), domContainer);
});