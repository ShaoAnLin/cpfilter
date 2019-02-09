define('productDetail', [
    'react',
    'reactDOM',
    'constant',
    'productImg',
    'common'],
    function(React, ReactDOM, constant, productImg, common){
    
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
        setTimeout(function(){ common.onLoadEvents(); }, 500);
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
                    <div className="series-name">{constant.getItemIdStr(this.props.item)}</div>
                    <h4 className="item-title">{this.props.item.title}</h4>
                    <div>{this.props.item.subtitle}</div>
                    {this.props.item.range &&
                        <React.Fragment>
                        <div className="row">
                                <div className="col-sm-12"><h5 className="section-title">適用範圍</h5></div>
                        </div>
                        <div className="item-range">{this.props.item.range}</div>
                        </React.Fragment>
                    }
                    {this.props.item.spec && this.props.item.specUpper &&
                        <React.Fragment>
                        <div className="row">
                            <div className="col-sm-12"><h5 className="section-title">規格</h5></div>
                        </div>
                        <ItemSpec item={this.props.item}/>
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
            if (this.props.item.spec){
                $.each(this.props.item.spec, function(key, value){
                    spec.push(<li>{key}: {value}</li>);
                });
            } else if (this.props.item.specImg){
                var src = constant.getImgPath(this.props.item, 'spec') + '.jpg';
                spec.push(<img src={src}></img>);
            }
            return(
                <ul className="list-featured item-spec">{spec}</ul>
            );
        };
    }

    class ItemFeature extends React.Component {
        constructor(props) {
            super(props);
        }
        
        render() {
            var features = [];
            this.props.feature.forEach(function(str){
                features.push(<li>{str}</li>);
            })
            return(
                <ul className="list-featured">{features}</ul>
            );
        };
    }

    var setTabDetail = function(item){
        if ((item.spec && item.specUpper != true) || item.specImg){
            ReactDOM.render(<ItemSpec item={item}/>,
                document.querySelector('#spec-detail'));
            if (item.specImg){
                $('#spec-detail').addClass('text-center');
            }
        } else{
            $('#nav-tab-spec').hide();
        }

        if (item.feature){
            if (item.spec == null){
                $('#nav-tab-feature').addClass('active');
                $('#tab-feature').addClass('in active');
            }
            ReactDOM.render(<ItemFeature feature={item.feature}/>,
                document.querySelector('#feature-detail'));
        } else{
            $('#nav-tab-feature').hide();
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
            $('#size-img').attr("src", constant.getImgPath(item, 'size') + '.jpg');
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
                                    item={constant.ITEMS[seriesList[i]]}/>);
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
                series = this.props.item.series ? this.props.item.series : "";
            return(
                <div className="col-md-3 tile">
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
