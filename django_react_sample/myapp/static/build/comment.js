try {
    var React = require('React');
} catch (e) {
    // client side, no require
}

var Comment = React.createClass({displayName: "Comment",

    onClick: function () {
        alert('hello there, ' + this.props.name + '!');
    },

    render: function () {
        return React.createElement("li", {onClick: this.onClick}, 
            React.createElement("dl", null, 
            React.createElement("dt", null, "Id"), React.createElement("dd", null, this.props.id), 
            React.createElement("dt", null, "Name"), React.createElement("dd", null, this.props.name), 
            React.createElement("dt", null, "Comment"), React.createElement("dd", null, this.props.text)
            )
            );

    }

});

try {
    module.exports = Comment;
} catch (e) {
    ;
}
