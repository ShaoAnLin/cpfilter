define('products', ['constant', 'divUtil', 'react', 'reactDOM'],
    function(constant, divUtil, React, ReactDOM){
    var products = {};

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
                {0}\
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

    products.init = function(){
        console.log('products init');
        $('#product-grid-items').html(products.getProducts());
    }

    return products;
});