define('ProductDetail', [
    'react',
    'reactDOM',
    'constant',
    'ProductImg',
    'scripts'],
    function(React, ReactDOM, constant, ProductImg, scripts){
    
    'use strict';

    var getItem = function(){
        var queryItem = decodeURI(window.location.search).match('item=.*'),
            targetItem = null;
        if (queryItem){
            targetItem = queryItem[0].split('=')[1];
        }
        return constant.ITEMS[targetItem];
    }

    var onLoad = function(){
        setTimeout(function(){ scripts.onLoadEvents(); }, 500);
    }

    class DetailImages extends React.Component {
        constructor(props) {
            super(props);
        }

        componentDidMount = function(){
            onLoad();
        }
        
        render() {
            var imgUrl = constant.getImgPath(this.props.item, 'main') + ".jpg",
                imgBaseUrl = constant.getImgPath(this.props.item),
                images = [];
            images.push(<img src={imgUrl} alt="Thumb"/>);
            for (var i = 0; i < this.props.item.images; ++i){
                imgUrl = "{0}{1}.jpg".format(imgBaseUrl, i);
                images.push(<img src={imgUrl} alt="Thumb"/>);
            }
            return (
                <React.Fragment>{images}</React.Fragment>
            );
        };
    }

    class ItemInfo extends React.Component {
        constructor(props) {
            super(props);
        }
        
        render() {
            return(
                <React.Fragment>
                    <div class="series-name">{constant.getItemIdStr(this.props.item)}</div>
                    <h4 class="item-title">{this.props.item.title}</h4>
                    <div>{this.props.item.subtitle}</div>
                    {this.props.item.range &&
                        <React.Fragment>
                        <div class="row">
                                <div class="col-sm-12"><h5 class="section-title range-name">適用範圍</h5></div>
                        </div>
                        <div class="item-range">{this.props.item.range}</div>
                        </React.Fragment>
                    }
                </React.Fragment>
            );
        };
    }

    class ItemSpec extends React.Component {
        constructor(props) {
            super(props);
        }
        
        render() {
            var spec = [];
            if (this.props.item.specification){
                $.each(this.props.item.specification, function(key, value){
                    spec.push(<li>{key}: {value}</li>);
                });
            }
            return(
                <ul class="list-featured item-specification">{spec}</ul>
            );
        };
    }

    var setTabDetail = function(item){
        if (item.specification){
                ReactDOM.render(<ItemSpec item={item}/>,
                        document.querySelector('#spec-detail'));
        } else{
                $('#nav-tab-spec').hide();
        }

        if (item.modelImgs){
                $('#model-img').attr("src", constant.getImgPath(item, 'model') + '.jpg');
        } else{
                $('#nav-tab-model').hide();
        }

        if (item.componentImgs){
                $('#component-img').attr("src", constant.getImgPath(item, 'component') + '.jpg');
        } else{
                $('#nav-tab-component').hide();
        }

        if (item.sizeImgs){
                $('#size0-img').attr("src", constant.getImgPath(item, 'size') + '0.jpg');
                if (item.sizeImgs > 1){
                        $('#size1-img').attr("src", constant.getImgPath(item, 'size') + '1.jpg');
                }
        } else{
                $('#nav-tab-size').hide();
        }
    }

    class RelatedProducts extends React.Component {
        constructor(props) {
            super(props);
        }

        getRelatedProducts = function(){
            var products = [],
                item = this.props.item,
                num = 0;
            if (item.series){
                var seriesList = constant.SERIES[item.housing][item.category];
                for (var i = 0; i < seriesList.length && num < 4; ++i){
                    if (seriesList[i] != item.series){
                        products.push(<ProductGridItem id={seriesList[i]}
                            item={constant.ITEMS[seriesList[i]]}/>);
                        ++num;
                    }
                }
                if (num < 4){
                    constant.CATEGORIES[item.housing].forEach(function(category){
                        if (category != item.category){
                            var seriesList = constant.SERIES[item.housing][category];
                            for (var i = 0; i < seriesList.length && num < 4; ++i){
                                if (seriesList[i] != item.series){
                                    products.push(<ProductGridItem id={seriesList[i]}
                                        item={constant.ITEMS[seriesList[i]]}/>);
                                    ++num;
                                }
                            }
                        }
                    });
                }
            }
            else {
                var categoryList = constant.SERIES[item.housing];
                $.each(categoryList, function(cat, seriesList) {
                    if (num < 4 && seriesList == null){
                        if (cat != item.category){
                            products.push(<ProductGridItem id={cat}
                                item={constant.ITEMS[cat]}/>);
                        }
                        ++num;
                    } else if (num < 4 && seriesList.length > 0){
                        for (var i = 0; i < seriesList.length && num < 4; ++i){
                            if (seriesList[i] != item.series){
                                products.push(<ProductGridItem id={seriesList[i]}
                                    item={constant.ITEMS[constant.ITEMS[seriesList[i]]]}/>);
                                ++num;
                            }
                        }
                    }
                });
            }
            return products;
        }
        
        render() {
            var products = this.getRelatedProducts();
            if (products.length == 0){
                $('#section-related').hide();
            }
            return(
                <React.Fragment>{products}</React.Fragment>
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
                ? this.props.item["series"] + " Series" : "";
            return(
                <div class="col-md-3 tile">
                    <a href={detailLink}>
                        <ProductImg.MainImg item={this.props.item}/>
                    </a>
                    <div class="tile-title">
                        <a href={detailLink}>{this.props.item.title}</a>
                    </div>
                    <div class="tile-meta">
                        <div class="meta-top">
                            <span>{this.props.item.subtitle}</span>
                        </div>
                        <div class="meta-bottom"><span>{series}</span></div>
                    </div>
                </div>
            );
        };
    }

    var instance = {};

    instance.init = function(){
        var item = getItem();
        console.log(item);

        // Housing & Category
        $('#housing-name').html(item.housing)
            .attr("href", "products.html?housing=" + item.housing);
        if (item.category){
            $('#category-name').html(item.category);
            $('#category-name').attr("href", "products.html?category=" + item.category);
        } else{
            $('#category-right-icon').hide();
        }

        // Images
        var detailImages = <DetailImages item={item}/>;
        ReactDOM.render(detailImages,
            document.querySelector('#product-img-thumbnail'));
        ReactDOM.render(detailImages,
            document.querySelector('#product-img-preview'));

        // Details
        ReactDOM.render(<ItemInfo item={item}/>,
            document.querySelector('#single-item-info'));
        setTabDetail(item);

        // Related Products
        ReactDOM.render(<RelatedProducts item={item}/>,
                document.querySelector('#related-products'));
    }

    return instance;
});