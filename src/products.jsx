define('products', [
    'react',
    'reactDOM',
    'constant',
    'productImg'],
    function(React, ReactDOM, constant, productImg){
    
    'use strict';

    class GridImages extends React.Component {
        constructor(props) {
            super(props);
        }

        getHousingGrid = function(){
            var housingGrid = [],
                rowItems = [],
                count = 0;
            constant.HOUSING.forEach(function(housing){
                count++;
                var link = "products.html?housing=" + housing,
                    imgSrc = "img/products/category/{0}.jpg".format(housing);
                rowItems.push(
                    <div className="col-md-4">
                      <div className="tile tile-category">
                        <a href={link} className="preview-box">
                          <img src={imgSrc}/>
                        </a>
                        <div className="tile-title">{housing}</div>
                      </div>
                    </div>);
                if (count % 3 == 0){
                    housingGrid.push(<div className="row">{rowItems}</div>);
                    rowItems = [];
                }
            });
            housingGrid.push(<div className="row">{rowItems}</div>);
            return housingGrid;
        }

        getCategoryGrid = function(housing){
            var categoryGrid = [],
                rowItems = [],
                count = 0,
                categoryList = constant.CATEGORIES[housing];
            categoryList.forEach(function(category){
                count++;
                var link = "products.html?category=" + category,
                    imgSrc = "img/products/category/{0}.jpg".format(category);
                rowItems.push(
                    <div className="col-md-4">
                      <div className="tile tile-category">
                        <a href={link} className="preview-box">
                          <img src={imgSrc}/>
                        </a>
                        <div className="tile-title">{category}</div>
                      </div>
                    </div>);
                if (count % 3 == 0){
                    categoryGrid.push(<div className="row">{rowItems}</div>);
                    rowItems = [];
                }
            });
            categoryGrid.push(<div className="row">{rowItems}</div>);
            return categoryGrid;
        }
        
        render() {
            var gridImages = this.props.housing ? this.getCategoryGrid(this.props.housing)
                : this.getHousingGrid();
            return (
                <React.Fragment>{gridImages}</React.Fragment>
            );
        };
    }

    class SideBarList extends React.Component {
        constructor(props) {
            super(props);
        }

        getSideBarCatList = function(){
            var sideBar = [],
                currentHousing = this.props.housing,
                currentCategory = this.props.category,
                currentSubgroup = this.props.subgroup;

            if (currentSubgroup){
                for (var housing in constant.SUBGROUPS){
                    var found = false;
                    for (var category in constant.SUBGROUPS[housing]){
                        if (constant.SUBGROUPS[housing][category].indexOf(currentSubgroup) != -1){
                            currentCategory = category;
                            currentHousing = housing;
                            found = true;
                            break;
                        }
                    }
                    if (found) break;
                }
            }
            if (currentCategory){
                for (var key in constant.CATEGORIES){
                    if (constant.CATEGORIES[key].indexOf(currentCategory) != -1){
                        currentHousing = key;
                        break;
                    }
                }
            }

            console.log(currentHousing);
            console.log(currentCategory);
            console.log(currentSubgroup);

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
                        category={currentCategory} subgroup={currentSubgroup}/>);
                }
            }, this);
            return sideBar;
        }

        getGroupNumOfItems = function(housing){
            var num = 0;
            $.each(constant.SERIES[housing], function(key, seriesList) {
                if (seriesList != null){
                    if (Array.isArray(seriesList)){
                        num += seriesList.length;
                    } else {
                        $.each(seriesList, function(key, subgroup) {
                            num += subgroup.length;
                        });
                    }
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
                    subgroupList = constant.SUBGROUPS[this.props.housing][category];
                if (subgroupList.length == 0){
                    var numOfItems = constant.SERIES[this.props.housing][category].length,
                        classes = category == this.props.category
                            ? "current submenu" : "submenu";
                    subMenu.push(
                        <li className={classes}>
                            <a href={categoryLink} title="">{category}</a>
                            <span>{numOfItems}</span>
                        </li>
                    );
                } else{
                    console.log(subgroupList);
                    var totalItems = 0,
                        series = [];
                    subgroupList.forEach(function(subgroup){
                        console.log(subgroup);
                        var subgroupLink = "?subgroup=" + subgroup,
                            numOfItems = constant.SERIES[this.props.housing][category][subgroup].length,
                            classes = subgroup == this.props.subgroup
                                ? "current submenu2" : "submenu2";
                        totalItems += numOfItems;
                        if (this.props.category == category){
                            series.push(
                                <li className={classes}>
                                    <a href={subgroupLink} title="">{subgroup}</a>
                                    <span>{numOfItems}</span>
                                </li>
                            );
                        }
                    }, this);

                    var classes = (category == this.props.category && !this.props.subgroup)
                        ? "current submenu" : "submenu";
                    subMenu.push(
                        <li className={classes}>
                            <a href={categoryLink} title="">{category}</a>
                            <span>{totalItems}</span>
                        </li>
                    );
                    subMenu.push(series);
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
            constant.POPULAR_PRODUCTS.forEach(function(itemId){
                var item = constant.ITEMS[itemId],
                    detailUrl = "product-detail.html?item=" + itemId;
                latestProducts.push(<li>
                    <a href={detailUrl} className="cart-thumb">
                        <productImg.MainImg item={item}/>
                    </a>
                    <div className="info-cont">
                        <a href={detailUrl} className="item-title">{item.title}</a>
                        <div className="category">{item.category}</div>
                    </div>
                </li>);
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
                if (self.props.subgroup && item.subgroup != self.props.subgroup){
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
                series = this.props.item.series ? this.props.item.series : "";
            return (
                <div className="col-md-4 tile">
                    <a href={detailLink}>
                        <productImg.MainImg item={this.props.item}/>
                    </a>
                    <div className="tile-title">
                        <a href={detailLink}>{this.props.item.title}</a>
                    </div>
                    <div className="tile-meta">
                        <div className="meta-top">
                            <span>{this.props.item.subtitle}</span>
                        </div>
                        {!this.props.item.hideSeries &&
                            <div className="meta-bottom"><span>{series}</span></div>
                        }
                    </div>
                </div>
            );
        };
    }

    var instance = {};

    instance.init = function(){
        var queryHousing = decodeURI(window.location.search).match('housing=.*'),
            queryCategory = decodeURI(window.location.search).match('category=.*'),
            querySubgroup = decodeURI(window.location.search).match('subgroup=.*'),
            housing = null,
            category = null,
            subgroup = null;

        if (queryHousing){
            housing = queryHousing[0].split('=')[1];
        }
        if (queryCategory){
            category = queryCategory[0].split('=')[1];
        }
        if (querySubgroup){
            subgroup = querySubgroup[0].split('=')[1];
        }

        if (housing == "過濾器"){
            $('#category-name').html(housing);
        } else{
            $('#category-right-icon').hide();
        }

        if (housing == "過濾器"){
            ReactDOM.render(<GridImages housing={housing}/>, document.querySelector('#grid-images'));
            $('#housing-selected').hide();
        } else if (housing || category || subgroup){
            ReactDOM.render(<SideBarList housing={housing} category={category} subgroup={subgroup}/>,
                document.querySelector('#sidebar-cat-list'));
            ReactDOM.render(<LatestProducts/>,
                document.querySelector('#latest-products'));
            ReactDOM.render(<ProductItems housing={housing} category={category} subgroup={subgroup}/>,
                document.querySelector('#product-grid-items'));
        } else {
            ReactDOM.render(<GridImages/>, document.querySelector('#grid-images'));
            $('#housing-selected').hide();
        }
    }

    return instance;
});
