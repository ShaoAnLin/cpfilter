define('email', [
    'react',
    'reactDOM'],
    function(React, ReactDOM){
    
    'use strict';
    
    class EmailForm extends React.Component {
      constructor(props) {
        super(props);
      }
    
      render() {
        function sendMail(){
            var allValid = true,
                checkIds = ['client-name', 'client-email', 'client-message'];
            checkIds.forEach(function(id){
                if ($('#' + id).val() == ''){
                    $('#' + id).addClass('error');
                    allValid = false;
                } else {
                    $('#' + id).removeClass('error');
                }
            });
            
            if (!allValid){
                $('#error-msg').text('請填寫必填欄位。');
            } else {
                var msg = "姓名：" + $('#client-name').val()
                    + "\n公司：" + $('#client-company').val()
                    + "\n職稱：" + $('#client-title').val()
                    + "\n電話：" + $('#client-phone').val()
                    + "\n分機：" + $('#client-ext').val()
                    + "\n信件：" + $('#client-message').val();
                $('#fs-email').val($('#client-email').val());
                $('#fs-message').val(msg);
                $('#fs-button').click();
            }
        }

        return (
            <React.Fragment>
                <div className="row form">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <input id="client-name" type="text" class="form-control input-alt" name="author" placeholder="姓名*"/>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <input id="client-email" type="email" class="form-control input-alt" name="email" placeholder="Email*"/>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <input id="client-company" type="text" class="form-control input-alt" name="company" placeholder="公司名稱"/>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <input id="client-title" type="text" class="form-control input-alt" name="title" placeholder="職稱"/>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <input id="client-phone" type="tel" class="form-control input-alt" name="phone" placeholder="聯絡電話"/>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <input id="client-ext" type="text" class="form-control input-alt" name="phone-ext" placeholder="分機"/>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <textarea name="message" id="client-message" className="form-control input-alt" rows="7" placeholder="信件內容*"></textarea>
                    <div>*為必填項目</div>
                    <div id="error-msg" class="error"></div>
                </div>
                <p className="form-submit text-center">
                    <button id="submit" className="btn" type="submit" onClick={sendMail}>傳送</button>
                </p>
                
                <form method="POST" action="https://formspree.io/service@cpfilter.com" hidden>
                    <input id="fs-email" type="email" name="email"/>
                    <textarea id="fs-message" name="message"></textarea>
                    <button id="fs-button" type="submit"></button>
                </form>
            </React.Fragment>
        );
      }
    }
  
    ReactDOM.render(<EmailForm/>, document.querySelector('#email-form'));
});