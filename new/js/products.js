var HOUSING = ["過濾器", "濾材", "機械設備", "磁力設備", "空調濾網"];
var CATEGORIES = {
    "過濾器": ["不鏽鋼濾心機", "不鏽鋼袋濾機"],
    "濾材": ["陽極帶"]
}
var SERIES = {
    // ========== 過濾器 ========== //
    "不鏽鋼濾心機": ["AH", "ALA"],
    "不鏽鋼袋濾機": ["PL"],

    // ========== 濾材 ========== //
    "陽極帶": null
}
var ITEMS = {
    // ========== 過濾器 ========== //
    // 不鏽鋼濾心機
    "AH": {
        "series": "AH",
        "housing": "過濾器",
        "category": "不鏽鋼濾心機",
        "images": 3,
        "detail1": "濾心式過濾器 - A款",
        "detail2": "單支裝"
    },
    "ALA": {
        "series": "ALA",
        "housing": "過濾器",
        "category": "不鏽鋼濾心機",
        "images": 3,
        "detail1": "濾心式過濾器 - A款",
        "detail2": "單支裝"
    },

    // 不鏽鋼袋濾機
    "PL": {
        "series": "PL",
        "housing": "過濾器",
        "category": "不鏽鋼袋濾機",
        "images": 3,
        "detail1": "濾袋式過濾器",
        "detail2": "單袋式"
    },

    // ========== 濾材 ========== //
    "陽極袋": {
        "series": "陽極袋",
        "housing": "濾材",
        "category": null,
        "images": 0,
        "detail1": "塑膠濾殼",
        "detail2": "標準型/大流量"
    }
}

var getHousing = function(){
    return HOUSING;
}
var getCategories = function(housing){
    return housing ? CATEGORIES[housing] : CATEGORIES;
}
var getSeries = function(category){
    return category ? SERIES[category] : SERIES;
}

var getProduct = function(){
    var html = "",
        imageDivs = "",
        num = 0,
        cols = 3;

    $.each(ITEMS, function(key, item) {
        ++num;
        imageDivs += getProductGridItemDiv(item);
        if (num % cols == 0){
            html += '<div class="row">{0}</div>'.format(imageDivs);
            imageDivs = "";
        }
    });
    if (imageDivs != ""){
        html += '<div class="row">{0}</div>'.format(imageDivs);
    }
    return html;
}

var getProductGridItemDiv = function(item){
    console.log(item);
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
          <a href="product-detail.html">{1}</a>\
        </div>\
\
        <div class="tile-meta">\
          <div class="meta-top">\
            <span>{2}</span>\
          </div>\
          <div class="meta-bottom">\
            <span>{3}</span>\
          </div>\
        </div>\
      </div><!-- Shop Grid Tile END -->\
    </div>'.format(getImages(item), item["series"], item["detail1"], item["detail2"]);
}

var getImages = function(item){
    var housing = item["housing"],
        category = item["category"],
        series = item["series"],
        numImages = item["images"],
        html = '';
    if (numImages == 0){
        html = '<img src="img/products/{0}/{1}{2}/{3}.jpg">'
            .format(housing, category ? category + "/" : "", series, series);
    }
    for (var i = 0; i < numImages; ++i){
        html += '<img src="img/products/{0}/{1}{2}/{3}.jpg">'
        .format(housing, category ? category + "/" : "", series, i);
    }
    return html;
}

$(function() {
    $('#product-grid-items').html(getProduct());
});