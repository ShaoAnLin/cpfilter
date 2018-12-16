define('productReact', [
    'react.min',
    'react-dom.min',
    'constant'],
    function(React, ReactDOM, constant){
    
    'use strict';
    
    class SideBarList extends React.Component {
        constructor(props) {
        super(props);
        }

        getSideBarCatList = function(){
            var sideBar = [];
            constant.HOUSING.forEach(function(housing){
                var housingName = "housing-" + housing,
                    housingLink = "?housing=" + housing;
                sideBar.push(<li id={housingName}>
                        <a href={housingLink} title="">{housing}</a>
                        <span>{this.getGroupNumOfItems(housing)}</span>
                    </li>);
            });
            return sideBar;
        }

        getGroupNumOfItems = function(housing){
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
        
        render() {
            return this.getSideBarCatList();
        };
    }
});