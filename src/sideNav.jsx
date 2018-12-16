define('sideNav', [
  'react',
  'reactDOM',
  'constant'],
  function(React, ReactDOM, constant){
  
  'use strict';
  
  class SideNav extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      var sideMenu = [];
      constant.HOUSING.forEach(function(housing){
        var housingLink = "products.html?housing=" + housing;
        sideMenu.push(<li><a href={housingLink}>{housing}</a></li>);
      });
      return (
        <React.Fragment>
        <div className="side-nav-tools">
          <a href="#" className="offcanvas-toggle inner-toggle">
            <i className="material-icons close"></i>
          </a>
        </div>
        
        <nav className="offcanvas-navigation" role="navigation" data-back-btn-text="Back">
          <div className="menu-site-menu-container">
            <ul className="menu">
              <li><a href="index.html">首頁</a></li>
              <li><a href="aboutus.html">關於新凱</a></li>
              <li className="menu-item-has-children">
                <a href="products.html">產品資訊</a>
                <ul className="sub-menu">{sideMenu}</ul>
              </li>
              <li><a href="news.html">最新消息</a></li>
              <li><a href="contact.html">聯絡我們</a></li>
            </ul>
          </div>
        </nav>
        </React.Fragment>
      );
    }
  }
  
  const domContainer = document.querySelector('.off-canvas-cont');
  ReactDOM.render(React.createElement(SideNav), domContainer);
});