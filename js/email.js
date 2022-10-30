define('email', ['react', 'reactDOM'], function (React, ReactDOM) {
  'use strict';

  class EmailForm extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
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
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
        className: "row form"
      }, /*#__PURE__*/React.createElement("div", {
        className: "col-sm-6"
      }, /*#__PURE__*/React.createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/React.createElement("input", {
        id: "client-name",
        type: "text",
        class: "form-control input-alt",
        name: "author",
        placeholder: "\u59D3\u540D*"
      }))), /*#__PURE__*/React.createElement("div", {
        className: "col-sm-6"
      }, /*#__PURE__*/React.createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/React.createElement("input", {
        id: "client-email",
        type: "email",
        class: "form-control input-alt",
        name: "email",
        placeholder: "Email*"
      }))), /*#__PURE__*/React.createElement("div", {
        className: "col-sm-6"
      }, /*#__PURE__*/React.createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/React.createElement("input", {
        id: "client-company",
        type: "text",
        class: "form-control input-alt",
        name: "company",
        placeholder: "\u516C\u53F8\u540D\u7A31"
      }))), /*#__PURE__*/React.createElement("div", {
        className: "col-sm-6"
      }, /*#__PURE__*/React.createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/React.createElement("input", {
        id: "client-title",
        type: "text",
        class: "form-control input-alt",
        name: "title",
        placeholder: "\u8077\u7A31"
      }))), /*#__PURE__*/React.createElement("div", {
        className: "col-sm-6"
      }, /*#__PURE__*/React.createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/React.createElement("input", {
        id: "client-phone",
        type: "tel",
        class: "form-control input-alt",
        name: "phone",
        placeholder: "\u806F\u7D61\u96FB\u8A71"
      }))), /*#__PURE__*/React.createElement("div", {
        className: "col-sm-6"
      }, /*#__PURE__*/React.createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/React.createElement("input", {
        id: "client-ext",
        type: "text",
        class: "form-control input-alt",
        name: "phone-ext",
        placeholder: "\u5206\u6A5F"
      })))), /*#__PURE__*/React.createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/React.createElement("textarea", {
        name: "message",
        id: "client-message",
        className: "form-control input-alt",
        rows: "7",
        placeholder: "\u4FE1\u4EF6\u5167\u5BB9*"
      }), /*#__PURE__*/React.createElement("div", null, "*\u70BA\u5FC5\u586B\u9805\u76EE"), /*#__PURE__*/React.createElement("div", {
        id: "error-msg",
        class: "error"
      })), /*#__PURE__*/React.createElement("p", {
        className: "form-submit text-center"
      }, /*#__PURE__*/React.createElement("button", {
        id: "submit",
        className: "btn",
        type: "submit",
        onClick: sendMail
      }, "\u50B3\u9001")), /*#__PURE__*/React.createElement("form", {
        method: "POST",
        action: "https://formspree.io/service@cpfilter.com",
        hidden: true
      }, /*#__PURE__*/React.createElement("input", {
        id: "fs-email",
        type: "email",
        name: "email"
      }), /*#__PURE__*/React.createElement("textarea", {
        id: "fs-message",
        name: "message"
      }), /*#__PURE__*/React.createElement("button", {
        id: "fs-button",
        type: "submit"
      })));
    }
  }
  ReactDOM.render( /*#__PURE__*/React.createElement(EmailForm, null), document.querySelector('#email-form'));
});