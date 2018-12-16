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
      <div class="container">
        <div class="row">
        <div class="col-md-6">
          <div class="row">
          <div class="col-sm-12">
            <div class="logo">
              <div class="brandname">新凱濾材工業股份有限公司</div>
              <div class="brandname-en">CP Filter Industrial Co.,Ltd.</div>
            </div>
      
            <div class="widget widget-callback">
            <i class="icon material-icons headset_mic"></i>
            <div class="info-text">
              <div>(02) 2808-1655</div>
            </div>
            </div>
          </div>
          </div>
        </div>
      
        <div class="mobile-hide col-md-6">
          <div class="row mobile-top-buffer">
          <div class="col-sm-4">
            <div class="widget categories-widget">
            <div class="widget-title">產品資訊</div>
      
            <ul class="cat-list">
              <li><a href="products.html?housing=過濾器">過濾器</a></li>
              <li><a href="products.html?housing=濾材">濾材</a></li>
              <li><a href="products.html?housing=機械設備">機械設備</a></li>
            </ul>
            </div>
          </div>
      
          <div class="col-sm-8">
            <div class="widget categories-widget">
            <div class="widget-title">聯絡我們</div>
      
            <ul class="cat-list">
              <li>
                <i class="icon material-icons email"></i>
                <div>peter@cpfilter.com.tw</div>
              </li>
              <li>
                <i class="icon material-icons location_city address"></i>
                <div>新北市淡水區中正東路二段69-4號3樓之一</div>
              </li>
            </ul>
            </div>
          </div>
          </div>
        </div>
        </div>
      </div>
      
      <div class="copyright">
        <span>&copy; 2018. 新凱濾材工業股份有限公司 </span>
        <span class="brandname-en">CP Filter Industrial Co.,Ltd.</span>
        <span>All Rights Reserved.</span>
      </div>
      </React.Fragment>);
    }
  }
  
  const domContainer = document.querySelector('.footer');
  ReactDOM.render(React.createElement(Footer), domContainer);
});