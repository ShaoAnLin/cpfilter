define('header', [
  'react',
  'reactDOM'],
  function(React, ReactDOM){

  'use strict';

  class Header extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <div id="header-container">
        <div className="container">
          <div className="middle-bar">
          <div className="column left-side">
            <div className="logo">
              <img className="logo-img" src="img/logo.png"/>
              <span className="brandname">新凱濾材工業股份有限公司</span>
            </div>
          </div>
      
          <div className="navbar">
            <ul className="main-nav">
              <li id="nav-home" className="nav-item lvl-1">
                <a href="index.html">首頁</a>
              </li>
              <li id="nav-aboutus" className="nav-item lvl-1">
                <a href="aboutus.html">關於新凱</a>
              </li>
              <li id="nav-products" className="nav-item dropdown lvl-1">
                <a href="products.html">產品資訊</a>
                <ul className="sub-menu"></ul>
              </li>
              <li id="nav-news" className="nav-item lvl-1">
                <a href="news.html">最新消息</a>
              </li>
              <li id="nav-contact" className="nav-item lvl-1">
                <a href="contact.html">聯絡我們</a>
              </li>
            </ul>
          </div>
          </div>
        </div>
        
        <div className="mobile-view">
          <div className="container">
          <a href="#" className="offcanvas-toggle">
            <i className="material-icons menu"></i>
          </a>
          <div className="logo">
            <img className="logo-img" src="img/logo_pure.png"/>
            <span className="brandname">新凱濾材工業股份有限公司</span>
          </div>
          </div>
        </div>
        </div>
      );
    }
  }

  const domContainer = document.querySelector('.header');
  ReactDOM.render(React.createElement(Header), domContainer);
});