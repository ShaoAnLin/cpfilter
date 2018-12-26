define('products', [
    'react',
    'reactDOM',
    'constant',
    'productImg'],
    function(React, ReactDOM, constant, productImg){
    
    'use strict';
    
    class SideBarList extends React.Component {
        constructor(props) {
            super(props);
        }

        getSideBarCatList = function(){
            var sideBar = [],
                currentHousing = this.props.housing,
                currentCategory = this.props.category;
            if (currentCategory){
                for (var key in constant.CATEGORIES){
                    if (constant.CATEGORIES[key].indexOf(currentCategory) != -1){
                        currentHousing = key;
                    }
                }
            }

            constant.HOUSING.forEach(function(housing){
                var housingLink = "?housing=" + housing,
                    numOfItems = this.getGroupNumOfItems(housing),
                    isCurrent = housing == currentHousing && currentCategory == null;
                sideBar.push(
                    <li className={isCurrent && "current"}>
                        <a href={housingLink} title="">{housing}</a>
                        <span>{numOfItems}</span>
                    </li>);
                if (housing == currentHousing){
                    sideBar.push(<SideBarSubMenu housing={housing}
                        category={currentCategory}/>);
                }
            }, this);
            return sideBar;
        }

        getGroupNumOfItems = function(housing){
            var num = 0;
            $.each(constant.SERIES[housing], function(key, seriesList) {
                if (seriesList != null){
                    num += seriesList.length;
                } else {
                    // The category does not have any series. Only a single item
                    num += 1;
                }
            });
            return num;
        }
        
        render() {
            return (
                <React.Fragment>{this.getSideBarCatList()}</React.Fragment>
            );
        };
    }

    class SideBarSubMenu extends React.Component {
        constructor(props) {
            super(props);
        }

        getSubMenuList = function(){
            var subMenu = [],
                categoryList = constant.CATEGORIES[this.props.housing];

            categoryList.forEach(function(category){
                var categoryLink = "?category=" + category,
                    seriesList = constant.SERIES[this.props.housing][category];
                if (seriesList){
                    var numOfItems = seriesList.length,
                        classes = category == this.props.category ? "current submenu"
                            : "submenu";
                    subMenu.push(
                        <li className={classes}>
                            <a href={categoryLink} title="">{category}</a>
                            <span>{numOfItems}</span>
                        </li>
                    );
                }
            }, this);

            return subMenu;
        }

        render() {
            return (
                <React.Fragment>{this.getSubMenuList()}</React.Fragment>
            );
        };
    }

    class LatestProducts extends React.Component {
        constructor(props) {
            super(props);
        }

        getLatestProducts = function(){
            var latestProducts = [];
            constant.LATEST_PRODUCTS.forEach(function(itemId){
                var item = constant.ITEMS[itemId],
                    detailUrl = "product-detail.html?item=" + itemId;
                latestProducts.push(<li>
                    <a href={detailUrl} className="cart-thumb">
                        <productImg.MainImg item={item}/>
                    </a>
                    <div className="info-cont">
                        <a href={detailUrl} className="item-title">{item.title}</a>
                        <div className="category">{item.housing}</div>
                    </div>
                </li>);
                //'.format(divUtil.getMainImage(item), itemId, item.title, item.housing);
            });
            return latestProducts;
        }
        
        render() {
            return (
                <React.Fragment>{this.getLatestProducts()}</React.Fragment>
            );
        };
    }

    class ProductItems extends React.Component {
        constructor(props) {
            super(props);
        }

        getProducts = function(){
            var self = this,
                products = [],
                images = [],
                num = 0,
                cols = 3;

            $.each(constant.ITEMS, function(key, item) {
                var select = true;
                if (self.props.housing && item.housing != self.props.housing){
                    select = false;
                }
                if (self.props.category && item.category != self.props.category){
                    select = false;
                }

                if (select){
                    ++num;
                    images.push(<ProductGridItem id={key} item={item}/>);
                    if (num % cols == 0){
                        products.push(<div className="row">{images}</div>);
                        images = [];
                    }
                }
            });
            if (images.length > 0){
                products.push(<div className="row">{images}</div>);
            }
            return products;
        }
        
        render() {
            return (
                <React.Fragment>{this.getProducts()}</React.Fragment>
            );
        };
    }

    class ProductGridItem extends React.Component {
        constructor(props) {
            super(props);
        }
        
        render() {
            var detailLink = "product-detail.html?item=" + this.props.id,
                series = this.props.item.series
                    ? this.props.item.series + " Series" : "";
            return (
                <div className="col-md-4">
                    <div className="tile">
                        <a href={detailLink}><productImg.MainImg item={this.props.item}/></a>

                        <div className="tile-title">
                        <a href={detailLink}>{this.props.item.title}</a>
                        </div>

                        <div className="tile-meta">
                        <div className="meta-top">
                            <span>{this.props.item.subtitle}</span>
                        </div>
                        <div className="meta-bottom">
                            <span>{series}</span>
                        </div>
                        </div>
                    </div>
                </div>
            );
        };
    }

    var instance = {};

    instance.init = function(){
        var queryHousing = decodeURI(window.location.search).match('housing=.*'),
            queryCategory = decodeURI(window.location.search).match('category=.*'),
            housing = null,
            category = null;

        if (queryHousing){
            housing = queryHousing[0].split('=')[1];
        }
        if (queryCategory){
            category = queryCategory[0].split('=')[1];
        }

        ReactDOM.render(<SideBarList housing={housing} category={category}/>,
            document.querySelector('#sidebar-cat-list'));

        ReactDOM.render(<LatestProducts/>,
            document.querySelector('#latest-products'));

        ReactDOM.render(<ProductItems housing={housing} category={category}/>,
            document.querySelector('#product-grid-items'));
    }

    return instance;
});
