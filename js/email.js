var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

define('email', ['react', 'reactDOM'], function (React, ReactDOM) {

    'use strict';

    var EmailForm = function (_React$Component) {
        _inherits(EmailForm, _React$Component);

        function EmailForm(props) {
            _classCallCheck(this, EmailForm);

            return _possibleConstructorReturn(this, (EmailForm.__proto__ || Object.getPrototypeOf(EmailForm)).call(this, props));
        }

        _createClass(EmailForm, [{
            key: 'render',
            value: function render() {
                function sendMail() {
                    var name = $('#client-name').val();
                    $('#fs-email').val($('#client-email').val());
                    $('#fs-message').val("姓名：{0}\n訊息：{1}".format(name, $('#client-message').val()));
                    $('#fs-button').click();
                }

                return React.createElement(
                    React.Fragment,
                    null,
                    React.createElement(
                        'div',
                        { className: 'row' },
                        React.createElement(
                            'div',
                            { className: 'col-sm-6' },
                            React.createElement(
                                'div',
                                { className: 'form-group' },
                                React.createElement('input', { id: 'client-name', type: 'text', 'class': 'form-control input-alt', name: 'author', placeholder: '\u59D3\u540D' })
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'col-sm-6' },
                            React.createElement(
                                'div',
                                { className: 'form-group' },
                                React.createElement('input', { id: 'client-email', type: 'email', 'class': 'form-control input-alt', name: 'email', placeholder: 'Email' })
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'form-group' },
                        React.createElement('textarea', { name: 'message', id: 'client-message', className: 'form-control input-alt', rows: '7', placeholder: '\u4FE1\u4EF6\u5167\u5BB9' })
                    ),
                    React.createElement(
                        'p',
                        { className: 'form-submit text-center' },
                        React.createElement(
                            'button',
                            { id: 'submit', className: 'btn', onClick: sendMail },
                            '\u50B3\u9001'
                        )
                    ),
                    React.createElement(
                        'form',
                        { method: 'POST', action: 'https://formspree.io/service@cpfilter.com', hidden: true },
                        React.createElement('input', { id: 'fs-email', type: 'email', name: 'email' }),
                        React.createElement('textarea', { id: 'fs-message', name: 'message' }),
                        React.createElement('button', { id: 'fs-button', type: 'submit' })
                    )
                );
            }
        }]);

        return EmailForm;
    }(React.Component);

    ReactDOM.render(React.createElement(EmailForm, null), document.querySelector('#email-form'));
});