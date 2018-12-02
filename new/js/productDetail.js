var getItem = function(){
    var queryItem = decodeURI(window.location.search).match('item=.*'),
        targetItem = null;
    if (queryItem){
        targetItem = queryItem[0].split('=')[1];
    }
    return ITEMS[targetItem];
}

$(function() {
    var item = getItem();
    console.log(item);
    $('#housing-name').html(item.housing)
        .attr("href", "products.html?housing=" + item.housing);
    if (item.category){
        $('#category-name').html(item.category);
        $('#category-name').attr("href", "products.html?category=" + item.category);
    } else{
        $('#category-right-icon').hide();
    }
});