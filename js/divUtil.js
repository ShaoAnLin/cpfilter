define('divUtil', ['constant'], function(constant){
    var divUtil = {};

    divUtil.getMainImage = function(item){
        return '<img class="preview-img" src="{0}.jpg">'.format(constant.getImgPath(item, 'main'));
    }

    return divUtil;
});