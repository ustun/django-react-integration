try {
    var React = require('React');
} catch (e) {

}

var HelloWorld = React.createClass({

    onClick: function () {
        alert('Hello World');
    },

    render: function () {
        return <div className="react-component " onClick={this.onClick}>
            Hello World
        </div>;

    }

});

try {
    module.exports = HelloWorld;
} catch (e) {
}
