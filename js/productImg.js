define('productImg', ['react', 'reactDOM', 'constant'], function (React, ReactDOM, constant) {
  'use strict';

  var instance = {};
  instance.MainImg = class MainImg extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      var imgSrc = constant.getImgPath(this.props.item, 'main') + ".jpg";
      return /*#__PURE__*/React.createElement("img", {
        className: "preview-img",
        src: imgSrc,
        alt: this.props.item.title,
        loading: this.props.loading || "lazy",
        decoding: "async",
        width: "1658",
        height: "1658"
      });
    }
  };
  return instance;
});