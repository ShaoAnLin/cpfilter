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
                    var allValid = true,
                        checkIds = ['client-name', 'client-email', 'client-message'];
                    checkIds.forEach(function (id) {
                        if ($('#' + id).val() == '') {
                            $('#' + id).addClass('error');
                            allValid = false;
                        } else {
                            $('#' + id).removeClass('error');
                        }
                    });

                    if (!allValid) {
                        $('#error-msg').text('請填寫必填欄位。');
                    } else {
                        var msg = "姓名：" + $('#client-name').val() + "\n公司：" + $('#client-company').val() + "\n職稱：" + $('#client-title').val() + "\n電話：" + $('#client-phone').val() + "\n分機：" + $('#client-ext').val() + "\n信件：" + $('#client-message').val();
                        $('#fs-email').val($('#client-email').val());
                        $('#fs-message').val(msg);
                        $('#fs-button').click();
                    }
                }

                return React.createElement(
                    React.Fragment,
                    null,
                    React.createElement(
                        'div',
                        { className: 'row form' },
                        React.createElement(
                            'div',
                            { className: 'col-sm-6' },
                            React.createElement(
                                'div',
                                { className: 'form-group' },
                                React.createElement('input', { id: 'client-name', type: 'text', 'class': 'form-control input-alt', name: 'author', placeholder: '\u59D3\u540D*' })
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'col-sm-6' },
                            React.createElement(
                                'div',
                                { className: 'form-group' },
                                React.createElement('input', { id: 'client-email', type: 'email', 'class': 'form-control input-alt', name: 'email', placeholder: 'Email*' })
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'col-sm-6' },
                            React.createElement(
                                'div',
                                { className: 'form-group' },
                                React.createElement('input', { id: 'client-company', type: 'text', 'class': 'form-control input-alt', name: 'company', placeholder: '\u516C\u53F8\u540D\u7A31' })
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'col-sm-6' },
                            React.createElement(
                                'div',
                                { className: 'form-group' },
                                React.createElement('input', { id: 'client-title', type: 'text', 'class': 'form-control input-alt', name: 'title', placeholder: '\u8077\u7A31' })
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'col-sm-6' },
                            React.createElement(
                                'div',
                                { className: 'form-group' },
                                React.createElement('input', { id: 'client-phone', type: 'tel', 'class': 'form-control input-alt', name: 'phone', placeholder: '\u806F\u7D61\u96FB\u8A71' })
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'col-sm-6' },
                            React.createElement(
                                'div',
                                { className: 'form-group' },
                                React.createElement('input', { id: 'client-ext', type: 'text', 'class': 'form-control input-alt', name: 'phone-ext', placeholder: '\u5206\u6A5F' })
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'form-group' },
                        React.createElement('textarea', { name: 'message', id: 'client-message', className: 'form-control input-alt', rows: '7', placeholder: '\u4FE1\u4EF6\u5167\u5BB9*' }),
                        React.createElement(
                            'div',
                            null,
                            '*\u70BA\u5FC5\u586B\u9805\u76EE'
                        ),
                        React.createElement('div', { id: 'error-msg', 'class': 'error' })
                    ),
                    React.createElement(
                        'p',
                        { className: 'form-submit text-center' },
                        React.createElement(
                            'button',
                            { id: 'submit', className: 'btn', type: 'submit', onClick: sendMail },
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