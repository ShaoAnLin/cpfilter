define('header', [
  'react',
  'reactDOM',
  'constant'],
  function(React, ReactDOM, constant){

  'use strict';
  
  class Header extends React.Component {
    constructor(props) {
      super(props);
    }

    componentDidMount = function(){
      if (this.props.pathname.indexOf('index') >= 0){
          $('#nav-home').addClass('current');
      } else if (this.props.pathname.indexOf('aboutus') >= 0){
          $('#nav-aboutus').addClass('current');
      } else if (this.props.pathname.indexOf('product') >= 0){
          $('#nav-products').addClass('current');
      } else if (this.props.pathname.indexOf('contact') >= 0){
          $('#nav-contact').addClass('current');
      }
    }

    render() {
      return (
        <div id="header-container">
        <div className="container">
          <div className="middle-bar">
          <div className="column left-side">
            <div className="logo">
              <img className="logo-img" src="img/logo.png" alt="新凱濾材工業有限公司"/>
              <div className="brandname">新凱濾材工業有限公司</div>
              <div className="brandname-en">CP FILTER Industrial Co.,Ltd.</div>
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
                <a href="products.html" aria-haspopup="true" aria-expanded="false">產品資訊</a>
                <SubNav/>
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
          <button type="button" className="offcanvas-toggle" aria-controls="mobile-navigation" aria-expanded="false" aria-label="開啟選單">
            <i className="material-icons menu" aria-hidden="true"></i>
          </button>
          <div className="logo">
            <img className="logo-img" src="img/logo_pure.png" alt="新凱濾材工業有限公司"/>
            <span className="brandname">新凱濾材工業有限公司</span>
          </div>
          </div>
        </div>
        </div>
      );
    }
  }

  class SubNav extends React.Component {
    constructor(props) {
      super(props);
    }
    getMenu = function(){
      var menu = [];
      constant.HOUSING.forEach(function(housing){
        menu.push(<DropDownItem housing={housing}></DropDownItem>);
      });
      return menu;
    }
    render (){
      return (
        <ul className="sub-menu" aria-label="產品分類">
          {this.getMenu()}
        </ul>
      );
    };
  }

  class DropDownItem extends React.Component {
    constructor(props) {
      super(props);
    }
    render (){
      var housing = this.props.housing,
          hasSubMenu = constant.CATEGORIES[housing].length > 0,
          menuClass = ["nav-item", "lvl-2"],
          housingHref = "products.html?housing=" + housing;
      if (hasSubMenu){
        menuClass.push("dropdown");
      }
      return (
        <li className={menuClass.join(' ')}>
          <a href={housingHref} aria-haspopup={hasSubMenu ? "true" : null} aria-expanded={hasSubMenu ? "false" : null}>{housing}</a>
          {hasSubMenu && <SubMenuItem housing={housing}></SubMenuItem>}
        </li>);
    }
  }

  class SubMenuItem extends React.Component {
    constructor(props) {
      super(props);
    }
    getSubMenu = function(){
      var subMenu = [];
      constant.CATEGORIES[this.props.housing].forEach(function(category){
        var categoryLink = "products.html?category=" + category;
        subMenu.push(<li><a href={categoryLink}>{category}</a></li>);
      });
      return subMenu;
    }
    render (){
      return (
        <ul className="sub-menu" aria-label={this.props.housing + "分類"}>
          {this.getSubMenu()}
        </ul>);
    }
  }

  ReactDOM.render(<Header pathname={window.location.pathname}/>, document.querySelector('.header'));
});