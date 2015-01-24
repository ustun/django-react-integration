try {
    var React = require('React');
} catch (e) {

}

var HelloWorld = React.createClass({displayName: "HelloWorld",

    onClick: function () {
        alert('Hello World');
    },

    render: function () {
        return React.createElement("div", {className: "react-component ", onClick: this.onClick}, 
            "Hello World"
        );

    }

});

try {
    module.exports = HelloWorld;
} catch (e) {
}
