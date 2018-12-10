define('productDetail', ['constant', 'common', 'divUtil'],
    function(constant, common, divUtil){

    var productDetail = {};

    productDetail.getItem = function(){
        var queryItem = decodeURI(window.location.search).match('item=.*'),
            targetItem = null;
        if (queryItem){
            targetItem = queryItem[0].split('=')[1];
        }
        return constant.ITEMS[targetItem];
    }

    productDetail.getItemInfo = function(item){
        return '<div class="series-name">{0}</div>\
                <h4 class="item-title">{1}</h4>\
                <div>{2}</div>\
                {3}\
            </div>'.format(constant.getItemIdStr(item), item.title, item.subtitle,
                productDetail.getItemRange(item));
    }

    productDetail.getItemSpecification = function(item){
        var html = '';
        if (item.specification){
            var listItem = '';
            $.each(item.specification, function(key, value){
                listItem += '<li>{0}: {1}</li>'.format(key, value);
            });
            html = '<ul class="list-featured item-specification">{0}</ul>'
                .format(listItem);
        }
        return html;
    }

    productDetail.getItemRange = function(item){
        var html = '';
        if (item.range){
            html = '<div class="row">\
                <div class="col-sm-12"><h5 class="section-title range-name">適用範圍</h5></div>\
            </div>\
            <div class="item-range">{0}</div>'.format(item.range);
        }
        return html;
    }

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

    productDetail.setTabDetail = function(item){
        if (item.specification){
            $('#spec-detail').html(productDetail.getItemSpecification(item));
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

    productDetail.setImages = function(item){
        var html = '<img src="{0}.jpg" alt="Thumb">'.format(constant.getImgPath(item, 'main'));
        for (var i = 0; i < item.images; ++i){
            html += '<img src="{0}{1}.jpg" alt="Thumb">'
                .format(constant.getImgPath(item), i);
        }
        $('#product-img-thumbnail').html(html);
        $('#product-img-preview').html(html);
    }

    productDetail.init = function(){
        common.renderCommonElements();

        var item = productDetail.getItem();
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

        productDetail.setImages(item);
        $('#single-item-info').html(productDetail.getItemInfo(item));
        productDetail.setTabDetail(item);
        $('#related-products').html(productDetail.getRelatedProducts(item));
    };

    return productDetail;
});