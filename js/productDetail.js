define('productDetail', ['constant', 'divUtil'],
    function(constant, divUtil){

    var productDetail = {};

    productDetail.getRelatedProducts = function(item){
        var html = '',
            num = 0;
        if (item.series){
            var seriesList = constant.SERIES[item.housing][item.category];
            for (var i = 0; i < seriesList.length && num < 4; ++i){
                if (seriesList[i] != item.series){
                    html += productDetail.getProductGridItemDiv(seriesList[i], constant.ITEMS[seriesList[i]]);
                    ++num;
                }
            }
            if (num < 4){
                constant.CATEGORIES[item.housing].forEach(function(category){
                    if (category != item.category){
                        var seriesList = constant.SERIES[item.housing][category];
                        for (var i = 0; i < seriesList.length && num < 4; ++i){
                            if (seriesList[i] != item.series){
                                html += productDetail.getProductGridItemDiv(seriesList[i], constant.ITEMS[seriesList[i]]);
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
                        html += productDetail.getProductGridItemDiv(cat, constant.ITEMS[cat]);
                    }
                    ++num;
                } else if (num < 4 && seriesList.length > 0){
                    for (var i = 0; i < seriesList.length && num < 4; ++i){
                        if (seriesList[i] != item.series){
                            html += productDetail.getProductGridItemDiv(seriesList[i], constant.ITEMS[seriesList[i]]);
                            ++num;
                        }
                    }
                }
            });
        }
        if (html == ''){
            $('#section-related').hide();
        }
        return html;
    }

    productDetail.getProductGridItemDiv = function(itemId, item){
        var series = item.series ? item["series"] + " Series" : "";
        return '<div class="col-md-3">\
        <div class="tile">\
            <a href="product-detail.html?item={1}">{0}</a>\
    \
            <div class="tile-title">\
            <a href="product-detail.html?item={1}">{2}</a>\
            </div>\
    \
            <div class="tile-meta">\
            <div class="meta-top">\
                <span>{3}</span>\
            </div>\
            <div class="meta-bottom">\
                <span>{4}</span>\
            </div>\
            </div>\
        </div>\
        </div>'.format(divUtil.getMainImage(item), itemId, item["title"], item["subtitle"], series);
    }

    productDetail.init = function(){
        $('#related-products').html(productDetail.getRelatedProducts(item));
    };

    return productDetail;
});