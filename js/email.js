define('email', ['react', 'reactDOM'], function (React, ReactDOM) {
  'use strict';

  const FORMSPREE_ENDPOINT = 'https://formspree.io/service@cpfilter.com';
  class EmailForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        submitState: 'idle',
        message: ''
      };
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
      event.preventDefault();
      var form = event.target;
      if (!form.checkValidity()) {
        form.reportValidity();
        this.setState({
          submitState: 'error',
          message: '請填寫必填欄位。'
        });
        return;
      }
      this.setState({
        submitState: 'submitting',
        message: '資料送出中，請稍候...'
      });
      var formData = new FormData(form),
        payload = {
          email: formData.get('email'),
          message: "姓名：" + formData.get('author') + "\n公司：" + (formData.get('company') || '') + "\n職稱：" + (formData.get('title') || '') + "\n電話：" + (formData.get('phone') || '') + "\n分機：" + (formData.get('phone-ext') || '') + "\n信件：" + formData.get('message')
        };
      fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      }).then(function (response) {
        if (!response.ok) {
          return response.json().then(function (result) {
            throw new Error(result && result.error ? result.error : 'submit_failed');
          }, function () {
            throw new Error('submit_failed');
          });
        }
        return response;
      }).then(function () {
        form.reset();
        this.setState({
          submitState: 'success',
          message: '已成功送出，我們會盡快與您聯繫。'
        });
      }.bind(this)).catch(function (error) {
        var failureMessage = '送出失敗，請稍後再試，或直接來電與我們聯繫。';
        if (error && error.message && error.message !== 'submit_failed') {
          failureMessage = '送出失敗：' + error.message;
        }
        this.setState({
          submitState: 'error',
          message: failureMessage
        });
      }.bind(this));
    }
    render() {
      var submitState = this.state.submitState,
        messageClass = submitState === 'error' ? 'error' : '';
      return /*#__PURE__*/React.createElement("form", {
        onSubmit: this.handleSubmit,
        noValidate: true
      }, /*#__PURE__*/React.createElement("div", {
        className: "row form"
      }, /*#__PURE__*/React.createElement("div", {
        className: "col-sm-6"
      }, /*#__PURE__*/React.createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/React.createElement("label", {
        htmlFor: "client-name"
      }, "\u59D3\u540D *"), /*#__PURE__*/React.createElement("input", {
        id: "client-name",
        type: "text",
        className: "form-control input-alt",
        name: "author",
        required: true
      }))), /*#__PURE__*/React.createElement("div", {
        className: "col-sm-6"
      }, /*#__PURE__*/React.createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/React.createElement("label", {
        htmlFor: "client-email"
      }, "Email *"), /*#__PURE__*/React.createElement("input", {
        id: "client-email",
        type: "email",
        className: "form-control input-alt",
        name: "email",
        required: true
      }))), /*#__PURE__*/React.createElement("div", {
        className: "col-sm-6"
      }, /*#__PURE__*/React.createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/React.createElement("label", {
        htmlFor: "client-company"
      }, "\u516C\u53F8\u540D\u7A31"), /*#__PURE__*/React.createElement("input", {
        id: "client-company",
        type: "text",
        className: "form-control input-alt",
        name: "company"
      }))), /*#__PURE__*/React.createElement("div", {
        className: "col-sm-6"
      }, /*#__PURE__*/React.createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/React.createElement("label", {
        htmlFor: "client-title"
      }, "\u8077\u7A31"), /*#__PURE__*/React.createElement("input", {
        id: "client-title",
        type: "text",
        className: "form-control input-alt",
        name: "title"
      }))), /*#__PURE__*/React.createElement("div", {
        className: "col-sm-6"
      }, /*#__PURE__*/React.createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/React.createElement("label", {
        htmlFor: "client-phone"
      }, "\u806F\u7D61\u96FB\u8A71"), /*#__PURE__*/React.createElement("input", {
        id: "client-phone",
        type: "tel",
        className: "form-control input-alt",
        name: "phone"
      }))), /*#__PURE__*/React.createElement("div", {
        className: "col-sm-6"
      }, /*#__PURE__*/React.createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/React.createElement("label", {
        htmlFor: "client-ext"
      }, "\u5206\u6A5F"), /*#__PURE__*/React.createElement("input", {
        id: "client-ext",
        type: "text",
        className: "form-control input-alt",
        name: "phone-ext"
      })))), /*#__PURE__*/React.createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/React.createElement("label", {
        htmlFor: "client-message"
      }, "\u4FE1\u4EF6\u5167\u5BB9 *"), /*#__PURE__*/React.createElement("textarea", {
        name: "message",
        id: "client-message",
        className: "form-control input-alt",
        rows: "7",
        required: true
      }), /*#__PURE__*/React.createElement("div", null, "*\u70BA\u5FC5\u586B\u9805\u76EE"), /*#__PURE__*/React.createElement("div", {
        "aria-live": "polite",
        className: messageClass
      }, this.state.message)), /*#__PURE__*/React.createElement("p", {
        className: "form-submit text-center"
      }, /*#__PURE__*/React.createElement("button", {
        id: "submit",
        className: "btn",
        type: "submit",
        disabled: submitState === 'submitting'
      }, submitState === 'submitting' ? '送出中...' : '傳送')));
    }
  }
  ReactDOM.render(/*#__PURE__*/React.createElement(EmailForm, null), document.querySelector('#email-form'));
});