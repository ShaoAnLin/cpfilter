define('Products', [
    'react',
    'reactDOM',
    'constant',
    'ProductImg'],
    function(React, ReactDOM, constant, ProductImg){
    
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
                        <ProductImg.MainImg item={item}/>
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
                        products.push(<div class="row">{images}</div>);
                        images = [];
                    }
                }
            });
            if (images.length > 0){
                products.push(<div class="row">{images}</div>);
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
                <div class="col-md-4">
                    <div class="tile">
                        <div class="preview-box">
                            <ProductImg.MainImg item={this.props.item}/>
                        </div>
                
                        <div class="tile-title">
                        <a href={detailLink}>{this.props.item.title}</a>
                        </div>
                
                        <div class="tile-meta">
                        <div class="meta-top">
                            <span>{this.props.item.subtitle}</span>
                        </div>
                        <div class="meta-bottom">
                            <span>{series}</span>
                        </div>
                        </div>
                    </div>
                </div>
            );
        };
    }

    var setProducts = function(){
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
        setCurrent(housing, category);

        ReactDOM.render(<ProductItems housing={housing} category={category}/>,
            document.querySelector('#product-grid-items'));
    }

    var setCurrent = function(targetHousing, targetCategory){
        if (targetHousing){
            $('#housing-' + targetHousing).addClass('current');
        }

        if (targetCategory){
            $.each(constant.CATEGORIES, function(housing, categories){
                if (categories.indexOf(targetCategory) != -1){
                    $('#housing-' + housing).addClass('current');
                }
            });
        }
    }

    var instance = {};

    instance.init = function(){
        ReactDOM.render(<SideBarList/>,
            document.querySelector('#sidebar-cat-list'));

        ReactDOM.render(<LatestProducts/>,
            document.querySelector('#latest-products'));

        setProducts();
    }

    return instance;
});