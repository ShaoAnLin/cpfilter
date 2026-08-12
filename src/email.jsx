define('email', [
    'react',
    'reactDOM'],
    function(React, ReactDOM){
    
    'use strict';
    const FORMSPREE_ENDPOINT = 'https://formspree.io/service@cpfilter.com';
    
    class EmailForm extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
            submitState: 'idle',
            message: '',
            invalidFields: {}
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
      }

      handleChange(event) {
        var name = event.target.name;
        if (this.state.invalidFields[name]) {
            var invalidFields = Object.assign({}, this.state.invalidFields);
            delete invalidFields[name];
            this.setState({ invalidFields: invalidFields });
        }
      }

      handleSubmit(event) {
        event.preventDefault();

        var form = event.target;
        if (!form.checkValidity()) {
            var invalidFields = {};
            Array.prototype.forEach.call(form.elements, function(field){
                if (field.name && !field.validity.valid) {
                    invalidFields[field.name] = true;
                }
            });
            form.reportValidity();
            this.setState({
                submitState: 'error',
                message: '請填寫必填欄位。',
                invalidFields: invalidFields
            });
            return;
        }

        this.setState({
            submitState: 'submitting',
            message: '資料送出中，請稍候...',
            invalidFields: {}
        });

        var formData = new FormData(form),
            payload = {
                email: formData.get('email'),
                message:
                    "姓名：" + formData.get('author')
                    + "\n公司：" + (formData.get('company') || '')
                    + "\n職稱：" + (formData.get('title') || '')
                    + "\n電話：" + (formData.get('phone') || '')
                    + "\n分機：" + (formData.get('phone-ext') || '')
                    + "\n信件：" + formData.get('message')
            };

        fetch(FORMSPREE_ENDPOINT, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        }).then(function(response){
            if (!response.ok) {
                return response.json().then(function(result){
                    throw new Error(result && result.error ? result.error : 'submit_failed');
                }, function(){
                    throw new Error('submit_failed');
                });
            }
            return response;
        }).then(function(){
            form.reset();
            this.setState({
                submitState: 'success',
                message: '已成功送出，我們會盡快與您聯繫。',
                invalidFields: {}
            });
        }.bind(this)).catch(function(error){
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
            messageClass = submitState === 'error' ? 'error' : '',
            invalidFields = this.state.invalidFields;

        return (
            <form onSubmit={this.handleSubmit} noValidate>
                <div className="row form">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label htmlFor="client-name">姓名 *</label>
                            <input id="client-name" type="text" className="form-control input-alt" name="author" required autoComplete="name" onChange={this.handleChange} aria-required="true" aria-invalid={invalidFields.author ? "true" : null} aria-describedby="required-note form-status" />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label htmlFor="client-email">Email *</label>
                            <input id="client-email" type="email" className="form-control input-alt" name="email" required autoComplete="email" inputMode="email" onChange={this.handleChange} aria-required="true" aria-invalid={invalidFields.email ? "true" : null} aria-describedby="required-note form-status" />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label htmlFor="client-company">公司名稱</label>
                            <input id="client-company" type="text" className="form-control input-alt" name="company" autoComplete="organization" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label htmlFor="client-title">職稱</label>
                            <input id="client-title" type="text" className="form-control input-alt" name="title" autoComplete="organization-title" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label htmlFor="client-phone">聯絡電話</label>
                            <input id="client-phone" type="tel" className="form-control input-alt" name="phone" autoComplete="tel-national" inputMode="tel" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label htmlFor="client-ext">分機</label>
                            <input id="client-ext" type="text" className="form-control input-alt" name="phone-ext" autoComplete="tel-extension" inputMode="numeric" pattern="[0-9]*" onChange={this.handleChange} />
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="client-message">信件內容 *</label>
                    <textarea name="message" id="client-message" className="form-control input-alt" rows="7" required onChange={this.handleChange} aria-required="true" aria-invalid={invalidFields.message ? "true" : null} aria-describedby="required-note form-status"></textarea>
                    <div id="required-note">*為必填項目</div>
                    <div id="form-status" role={submitState === 'error' ? 'alert' : 'status'} aria-live="polite" className={messageClass}>{this.state.message}</div>
                </div>
                <p className="form-submit text-center">
                    <button id="submit" className="btn" type="submit" disabled={submitState === 'submitting'}>
                        {submitState === 'submitting' ? '送出中...' : '傳送'}
                    </button>
                </p>
            </form>
        );
      }
    }
  
    ReactDOM.render(<EmailForm/>, document.querySelector('#email-form'));
});