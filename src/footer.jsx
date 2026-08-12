define('footer', [
  'react',
  'reactDOM'],
  function(React, ReactDOM){
  
  'use strict';
  
  class Footer extends React.Component {
    constructor(props) {
    super(props);
    }
  
    render() {
    return (
      <React.Fragment>
      <div className="container">
        <div className="row">
        <div className="col-md-6">
          <div className="row">
          <div className="col-sm-12">
            <div className="logo">
              <div className="brandname">新凱濾材工業有限公司</div>
              <div className="brandname-en">CP FILTER Industrial Co.,Ltd.</div>
            </div>

            <div className="widget widget-callback">
              <i className="icon material-icons headset_mic"></i>
              <div className="info-text">
                <div><a href="tel:+886228081655">(02)2808-1655</a></div>
              </div>
            </div>
            <div className="widget widget-callback">
              <i className="icon material-icons print"></i>
              <div className="info-text">
                <div>(02)2808-1557</div>
              </div>
            </div>
          </div>
          </div>
        </div>
      
        <div className="mobile-hide col-md-6">
          <div className="row mobile-top-buffer">
          <div className="col-sm-12">
            <div className="widget categories-widget">
            <div className="widget-title">聯絡我們</div>

            <div className="widget widget-callback">
                <i className="icon material-icons email"></i>
                <div><a href="mailto:service@cpfilter.com">service@cpfilter.com</a></div>
            </div>

            <div className="widget widget-callback">
                <i className="icon material-icons location_city address"></i>
                <div><a href="https://maps.google.com/?q=淡水區中正東路二段69-4號3F-1" target="_blank" rel="noopener noreferrer">新北市淡水區中正東路二段69-4號3樓之一</a></div>
            </div>
            </div>
          </div>
          </div>
        </div>
        </div>
      </div>
      
      <div className="copyright mobile-hide">
        <span>&copy; {new Date().getFullYear()}. 新凱濾材工業有限公司 </span>
        <span className="brandname-en">CP FILTER Industrial Co.,Ltd.</span>
        <span>All Rights Reserved.</span>
      </div>
      <div className="copyright mobile-show">
        <span>&copy; {new Date().getFullYear()}. CP FILTER Industrial Co.,Ltd. All Rights Reserved.</span>
      </div>
      </React.Fragment>);
    }
  }

  ReactDOM.render(<Footer/>, document.querySelector('.footer'));
});