define('productReact', [
    'react',
    'reactDOM',
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
                    housingLink = "?housing=" + housing,
                    numOfItems = this.getGroupNumOfItems(housing);
                sideBar.push(<li id={housingName}>
                        <a href={housingLink} title="">{housing}</a>
                        <span>{numOfItems}</span>
                    </li>);
            }, this);
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
            return (
                <React.Fragment>{this.getSideBarCatList()}</React.Fragment>
            );
        };
    }

    var instance = {};

    instance.init = function(){
        const sideBarListContainer = document.querySelector('#sidebar-cat-list');
        ReactDOM.render(React.createElement(SideBarList), sideBarListContainer);
    }

    return instance;
});