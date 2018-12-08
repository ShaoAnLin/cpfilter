var getItem = function(){
    var queryItem = decodeURI(window.location.search).match('item=.*'),
        targetItem = null;
    if (queryItem){
        targetItem = queryItem[0].split('=')[1];
    }
    return ITEMS[targetItem];
}

var getItemInfo = function(item){
    return '<div class="series-name">{0}</div>\
            <h4 class="item-title">{1}</h4>\
            <div>{2}</div>\
            {3}{4}\
        </div>'.format(getItemIdStr(item), item.title, item.subtitle,
            getItemSpecification(item),
            getItemRange(item));
}

var getItemSpecification = function(item){
    var html = '';
    if (item.specification){
        var listItem = '';
        $.each(item.specification, function(key, value){
            listItem += '<li>{0}: {1}</li>'.format(key, value);
        });
        html = '<div class="row">\
          <div class="col-sm-12"><h5 class="section-title specification-name">規格</h5></div>\
        </div>\
        <ul class="list-featured item-specification">{0}</ul>'.format(listItem);
    }
    return html;
}

var getItemRange = function(item){
    var html = '';
    if (item.range){
        html = '<div class="row">\
            <div class="col-sm-12"><h5 class="section-title range-name">適用範圍</h5></div>\
        </div>\
        <div class="item-range">{0}</div>'.format(item.range);
    }
    return html;
}

var getRelatedProducts = function(item){
    var html = '',
        num = 0;
    if (item.series){
        var seriesList = SERIES[item.housing][item.category];
        for (var i = 0; i < seriesList.length && num < 4; ++i){
            if (seriesList[i] != item.series){
                html += getProductGridItemDiv(seriesList[i], ITEMS[seriesList[i]]);
                ++num;
            }
        }
        if (num < 4){
            CATEGORIES[item.housing].forEach(function(category){
                if (category != item.category){
                    var seriesList = SERIES[item.housing][category];
                    for (var i = 0; i < seriesList.length && num < 4; ++i){
                        if (seriesList[i] != item.series){
                            html += getProductGridItemDiv(seriesList[i], ITEMS[seriesList[i]]);
                            ++num;
                        }
                    }
                }
            });
        }
    }
    else {
        var categoryList = SERIES[item.housing];
        $.each(categoryList, function(cat, seriesList) {
            if (num < 4 && seriesList == null){
                if (cat != item.category){
                    html += getProductGridItemDiv(cat, ITEMS[cat]);
                }
                ++num;
            } else if (num < 4 && seriesList.length > 0){
                for (var i = 0; i < seriesList.length && num < 4; ++i){
                    if (seriesList[i] != item.series){
                        html += getProductGridItemDiv(seriesList[i], ITEMS[seriesList[i]]);
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

var getProductGridItemDiv = function(itemId, item){
    var series = item.series ? item["series"] + " Series" : "";
    return '<div class="col-md-3">\
      <div class="tile">\
        <div class="preview-box">\
          <div class="preview-carousel" data-slick=\'{arrows": true, "dots": false}\'>\
            {0}\
          </div>\
        </div>\
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
    </div>'.format(getImages(item), itemId, item["title"], item["subtitle"], series);
}

var getImages = function(item){
    var housing = item["housing"],
        category = item["category"],
        series = item["series"],
        html = '<img class="preview-img" src="img/products/{0}/{1}/{2}{3}.jpg">'
            .format(housing, category,
                series ? series + "/" : "",
                series ? series : category);
    return html;
}

$(function() {
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

    $('#single-item-info').html(getItemInfo(item));
    $('#related-products').html(getRelatedProducts(item));
});