var getSideBarCatList = function(){
    var html = '';
    HOUSING.forEach(function(housing){
        html += '<li id="housing-{0}">\
            <a href="?housing={0}" title="">{0}</a>\
            <span>{1}</span>\
            </li>'.format(housing, getGroupNumOfItems(housing));
    });
    return html;
}

var getGroupNumOfItems = function(housing){
    var num = 0;
    $.each(SERIES[housing], function(key, seriesList) {
        if (seriesList != null){
            num += seriesList.length;
        } else {
            // The category does not have any series. Only a single item
            num += 1;
        }
    });
    return num;
}

var getProducts = function(){
    var html = "",
        imageDivs = "",
        num = 0,
        cols = 3;
        queryHousing = decodeURI(window.location.search).match('housing=.*'),
        queryCategory = decodeURI(window.location.search).match('category=.*'),
        targetHousing = null,
        targetCategory = null;

    if (queryHousing){
        targetHousing = queryHousing[0].split('=')[1];
        $('#housing-' + targetHousing).addClass('current');
    }

    // TODO: add category list as sub menu in side bar
    //       then highlight the category instead of the housing
    if (queryCategory){
        targetCategory = queryCategory[0].split('=')[1];
        $.each(CATEGORIES, function(housing, categories){
            if (categories.indexOf(targetCategory) != -1){
                $('#housing-' + housing).addClass('current');
            }
        });
    }

    $.each(ITEMS, function(key, item) {
        var select = true;
        if (targetHousing && item.housing != targetHousing){
            select = false;
        }
        if (targetCategory && item.category != targetCategory){
            select = false;
        }

        if (select){
            ++num;
            imageDivs += getProductGridItemDiv(key, item);
            if (num % cols == 0){
                html += '<div class="row">{0}</div>'.format(imageDivs);
                imageDivs = "";
            }
        }
    });
    if (imageDivs != ""){
        html += '<div class="row">{0}</div>'.format(imageDivs);
    }
    return html;
}

var getProductGridItemDiv = function(itemId, item){
    var series = item.series ? item["series"] + " Series" : "";
    return '<div class="col-md-4">\
      <!-- Shop Grid Tile -->\
      <div class="tile">\
        <div class="preview-box">\
          <div class="preview-carousel" data-slick=\'{arrows": true, "dots": false}\'>\
            {0}\
          </div>\
          <div class="preview-meta">\
            <div>\
              <a href="#" data-toggle="modal" data-target="#quickPreview" class="btn btn-iconed btn-gray"><i class="material-icons zoom_out_map"></i></a>\
            </div>\
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
      </div><!-- Shop Grid Tile END -->\
    </div>'.format(getImages(item), itemId, item["title"], item["subtitle"], series);
}

var getMainImage = function(item){
    return '<img class="preview-img" src="{0}.jpg">'.format(getImgPath(item, 'main'));
}

var getImages = function(item){
    var html = getMainImage(item);
    for (var i = 0; i < item.images; ++i){
        html += '<img class="preview-img" src="{0}{1}.jpg">'
            .format(getImgPath(item, 'detail'), i);
    }
    return html;
}

var getLatestProducts = function(){
    var html = '';
    LATEST_PRODUCTS.forEach(function(itemId){
        var item = ITEMS[itemId];
        console.log(item);
        html += '<li>\
          <a href="product-detail.html?item={1}" class="cart-thumb">{0}</a>\
          <div class="info-cont">\
            <a href="product-detail.html?item={1}" class="item-title">{2}</a>\
            <div class="category">{3}</div>\
          </div>\
        </li>'.format(getMainImage(item), itemId, item.title, item.housing);
    });
    return html;
}

$(function() {
    $('#sidebar-cat-list').html(getSideBarCatList());
    $('#product-grid-items').html(getProducts());
    $('#latest-products').html(getLatestProducts());
});