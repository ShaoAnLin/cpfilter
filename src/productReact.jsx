define('productReact', [
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
            var sideBar = [];
            constant.HOUSING.forEach(function(housing){
                var housingName = "housing-" + housing,
                    housingLink = "?housing=" + housing,
                    numOfItems = this.getGroupNumOfItems(housing);
                sideBar.push(<li id={housingName}>
                        <a href={housingLink} title="">{housing}</a>
                        <span>{numOfItems}</span>
                    </li>);
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
                    <a href={detailUrl} class="cart-thumb">
                        <productImg.MainImg item={item}></productImg.MainImg>
                    </a>
                    <div class="info-cont">
                        <a href={detailUrl} class="item-title">{item.title}</a>
                        <div class="category">{item.housing}</div>
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

    var instance = {};

    instance.init = function(){
        const sideBarListContainer = document.querySelector('#sidebar-cat-list');
        ReactDOM.render(React.createElement(SideBarList), sideBarListContainer);

        const latestProducts = document.querySelector('#latest-products');
        ReactDOM.render(React.createElement(LatestProducts), latestProducts);
    }

    return instance;
});