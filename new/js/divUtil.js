var getHeader = function(){
    return '<div class="container">\
        <div class="middle-bar">\
        <div class="column left-side">\
            <!-- Main Logo -->\
            <div class="logo">\
                <span class="brandname">新凱濾材工業股份有限公司</span>\
            </div>\
        </div>\
    \
        <!-- Navbar Section -->\
        <div class="navbar">\
            <!-- Main Navigation -->\
            <ul class="main-nav">\
                <!-- Main Navigation Level -->\
                <li id="nav-home" class="nav-item lvl-1">\
                    <a href="index.html">首頁</a>\
                </li>\
                <li id="nav-aboutus" class="nav-item lvl-1">\
                    <a href="aboutus.html">關於新凱</a>\
                </li>\
                <li id="nav-products" class="nav-item lvl-1">\
                    <a href="products.html">產品資訊</a>\
                </li>\
                <li id="nav-news" class="nav-item lvl-1">\
                    <a href="news.html">最新消息</a>\
                </li>\
                <li id="nav-contact" class="nav-item lvl-1">\
                    <a href="contact.html">聯絡我們</a>\
                </li>\
            </ul><!-- Main Navigation END -->\
        </div><!-- Navbar Section END -->\
        </div>\
    </div><!-- Middle Bar Section -->\
    \
    <!-- Mobile Tools -->\
    <div class="mobile-view">\
        <div class="container">\
        <!-- OffCanvas Toggle -->\
        <a href="#" class="offcanvas-toggle">\
            <i class="material-icons menu"></i>\
        </a>\
    \
        <!-- Mobile View Logo -->\
        <div class="logo">\
            <span class="brandname">新凱濾材工業股份有限公司</span>\
        </div>\
        </div>\
    </div>';
}

var getSideNav = function(){
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
                <a href="#">產品資訊</a>\
                <ul class="sub-menu">\
                    <li><a href="cat-filter.html">過濾器</a></li>\
                    <li><a href="cat-filter-material.html">濾材</a></li>\
                    <li><a href="cat-equipment.html">機械設備</a></li>\
                    <li><a href="cat-magnetic.html">磁力棒</a></li>\
                    <li><a href="cat-air-filter.html">空調濾網</a></li>\
                </ul>\
            </li>\
            <li><a href="news.html">最新消息</a></li>\
            <li><a href="contact.html">聯絡我們</a></li>\
        </ul>\
        </div>\
    </nav>';
}

var getFooter = function(){
    return '<div class="container">\
        <div class="row">\
        <div class="col-md-6">\
            <div class="row">\
            <div class="col-sm-12">\
                <!-- Logo -->\
                <div class="logo">\
                    <span class="brandname">新凱濾材工業股份有限公司</span>\
                    <span class="brandname-en">CP Filter Industrial Co.Ltd.</span>\
                </div><!-- Logo END -->\
    \
                <!-- Callback Widget -->\
                <div class="widget widget-callback">\
                <i class="icon material-icons headset_mic"></i>\
                <div class="info-text">\
                    <div>(02) 2808-1655</div>\
                </div>\
                </div><!-- Callback Widget END -->\
            </div>\
            </div>\
        </div>\
    \
        <div class="mobile-hide col-md-6">\
            <div class="row mobile-top-buffer">\
            <div class="col-sm-4">\
                <!-- Widget Categories -->\
                <div class="widget categories-widget">\
                <div class="widget-title">產品資訊</div>\
    \
                <ul class="cat-list">\
                    <li><a href="cat-filter.html">過濾器</a></li>\
                    <li><a href="cat-filter-material.html">濾材</a></li>\
                    <li><a href="cat-equipment.html">機械設備</a></li>\
                </ul>\
                </div><!-- Widget Categories END -->\
            </div>\
    \
            <div class="col-sm-8">\
                <!-- Widget Categories -->\
                <div class="widget categories-widget">\
                <div class="widget-title">聯絡我們</div>\
    \
                <ul class="cat-list">\
                    <li>\
                        <i class="icon material-icons email"></i>\
                        <div>peter@cpfilter.com.tw</div>\
                    </li>\
                    <li>\
                        <i class="icon material-icons location_city"></i>\
                        <div>新北市淡水區中正東路二段69-4號3樓之一</div>\
                    </li>\
                </ul>\
                </div><!-- Widget Categories END -->\
            </div>\
            </div>\
        </div>\
        </div>\
    </div>\
    \
    <div class="copyright">&copy; 2018 CP Filter. All Rights Reserved.</div>';
}