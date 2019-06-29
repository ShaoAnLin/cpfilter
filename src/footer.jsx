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
              <div className="brandname-en">CP FILTER Industrial Co.,Ltd</div>
            </div>

            <div className="widget widget-callback">
              <i className="icon material-icons headset_mic"></i>
              <div className="info-text">
                <div>(02)2808-1655</div>
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
                <div>peter@cpfilter.com</div>
            </div>

            <div className="widget widget-callback">
                <i className="icon material-icons location_city address"></i>
                <div>新北市淡水區中正東路二段69-4號3樓之一</div>
            </div>
            </div>
          </div>
          </div>
        </div>
        </div>
      </div>
      
      <div className="copyright mobile-hide">
        <span>&copy; 2018. 新凱濾材工業有限公司 </span>
        <span className="brandname-en">CP FILTER Industrial Co.,Ltd </span>
        <span>All Rights Reserved.</span>
      </div>
      <div className="copyright mobile-show">
        <span>&copy; 2018. CP FILTER Industrial Co.,Ltd. All Rights Reserved.</span>
      </div>
      </React.Fragment>);
    }
  }

  ReactDOM.render(<Footer/>, document.querySelector('.footer'));
});