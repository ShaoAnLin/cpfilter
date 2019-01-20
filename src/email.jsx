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
            var name = $('#client-name').val();
            $('#fs-email').val($('#client-email').val());
            $('#fs-message').val("姓名：{0}\n訊息：{1}"
                .format(name, $('#client-message').val()));
            $('#fs-button').click();
        }

        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <input id="client-name" type="text" class="form-control input-alt" name="author" placeholder="姓名"/>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <input id="client-email" type="email" class="form-control input-alt" name="email" placeholder="Email"/>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <textarea name="message" id="client-message" className="form-control input-alt" rows="7" placeholder="信件內容"></textarea>
                </div>
                <p className="form-submit text-center">
                    <button id="submit" className="btn" onClick={sendMail}>傳送</button>
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