try {
    var React = require('React');
    var Comment = require('./Comment');
} catch (e) {

}

var Comments = React.createClass({displayName: "Comments",

    render: function () {
        return React.createElement("ol", null, 
            this.props.comments.map(function (comment) {
                return React.createElement(Comment, {key: comment.id, id: comment.id, name: comment.name, text: comment.text});
            })
            );

    }

});

try {
    module.exports = Comments;
} catch (e) {

}
