define('products', ['constant', 'divUtil', 'common'],
    function(constant, divUtil, common){
    var products = {};

    products.getSideBarCatList = function(){
        var html = '';
        constant.HOUSING.forEach(function(housing){
            html += '<li id="housing-{0}">\
                <a href="?housing={0}" title="">{0}</a>\
                <span>{1}</span>\
                </li>'.format(housing, products.getGroupNumOfItems(housing));
        });
        return html;
    }

    products.getGroupNumOfItems = function(housing){
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

    products.getProducts = function(){
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
            $.each(constant.CATEGORIES, function(housing, categories){
                if (categories.indexOf(targetCategory) != -1){
                    $('#housing-' + housing).addClass('current');
                }
            });
        }

        $.each(constant.ITEMS, function(key, item) {
            var select = true;
            if (targetHousing && item.housing != targetHousing){
                select = false;
            }
            if (targetCategory && item.category != targetCategory){
                select = false;
            }

            if (select){
                ++num;
                imageDivs += products.getProductGridItemDiv(key, item);
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

    products.getProductGridItemDiv = function(itemId, item){
        var series = item.series ? item["series"] + " Series" : "";
        return '<div class="col-md-4">\
        <!-- Shop Grid Tile -->\
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
        </div><!-- Shop Grid Tile END -->\
        </div>'.format(divUtil.getMainImage(item), itemId, item["title"], item["subtitle"], series);
    }

    products.getLatestProducts = function(){
        var html = '';
        constant.LATEST_PRODUCTS.forEach(function(itemId){
            var item = constant.ITEMS[itemId];
            console.log(item);
            html += '<li>\
            <a href="product-detail.html?item={1}" class="cart-thumb">{0}</a>\
            <div class="info-cont">\
                <a href="product-detail.html?item={1}" class="item-title">{2}</a>\
                <div class="category">{3}</div>\
            </div>\
            </li>'.format(divUtil.getMainImage(item), itemId, item.title, item.housing);
        });
        return html;
    }

    products.init = function(){
        common.renderCommonElements();
        $('#sidebar-cat-list').html(products.getSideBarCatList());
        $('#product-grid-items').html(products.getProducts());
        $('#latest-products').html(products.getLatestProducts());
    }

    return products;
});