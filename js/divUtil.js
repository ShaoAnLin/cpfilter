define('divUtil', ['constant'], function(constant){
    var divUtil = {};
    
    // TODO: should add to header
    divUtil.getProductsSubMenu = function(){
        var html = '';
        constant.HOUSING.forEach(function(housing){
            var hasSubMenu = constant.CATEGORIES[housing].length > 0,
                subMenu = hasSubMenu ? divUtil.getCategoriesDiv(housing) : '';
            html += '<li class="nav-item {0} lvl-2">\
                    <a href="products.html?housing={1}">{1}</a>{2}\
                </li>'.format(hasSubMenu ?  'dropdown' : '', housing, subMenu);
        });
        return html;
    }

    divUtil.getCategoriesDiv = function(housing){
        var categoryList = '';
        constant.CATEGORIES[housing].forEach(function(category){
            categoryList += '<li><a href="products.html?category={0}">{0}</a></li>'
                .format(category);
        });
        return '<ul class="sub-menu">{0}</ul>'.format(categoryList);
    }

    divUtil.getSideNav = function(){
        return '<div class="side-nav-tools">\
            <a href="#" class="offcanvas-toggle inner-toggle">\
            <i class="material-icons close"></i>\
            </a>\
        </div>\
        \
        <nav class="offcanvas-navigation" role="navigation" data-back-btn-text="Back">\
            <div class="menu-site-menu-container">\
            <ul class="menu">\
                <li><a href="index.html">首頁</a></li>\
                <li><a href="aboutus.html">關於新凱</a></li>\
                <li class="menu-item-has-children">\
                    <a href="products.html">產品資訊</a>\
                    <ul class="sub-menu">{0}</ul>\
                </li>\
                <li><a href="news.html">最新消息</a></li>\
                <li><a href="contact.html">聯絡我們</a></li>\
            </ul>\
            </div>\
        </nav>'.format(divUtil.getSideNavProductsSubMenu());
    }

    divUtil.getSideNavProductsSubMenu = function(){
        var html = '';
        constant.HOUSING.forEach(function(housing){
            html += '<li><a href="products.html?housing={0}">{0}</a></li>'.format(housing);
        });
        return html;
    }

    divUtil.getMainImage = function(item){
        return '<img class="preview-img" src="{0}.jpg">'.format(constant.getImgPath(item, 'main'));
    }

    return divUtil;
});