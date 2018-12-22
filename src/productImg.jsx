define('productImg', [
    'react',
    'reactDOM',
    'constant'],
    function(React, ReactDOM, constant){
    
    'use strict';

    var instance = {};

    instance.MainImg = class MainImg extends React.Component {
        constructor(props) {
            super(props);
        }
        
        render() {
            var imgSrc = constant.getImgPath(this.props.item, 'main') + ".jpg";
            return (
                <img className="preview-img" src={imgSrc}/>
            );
        };
    }

    return instance;
});