try {
    var React = require('React');
    var Comment = require('./Comment');
} catch (e) {

}

var Comments = React.createClass({

    render: function () {
        return <ol>
            {this.props.comments.map(function (comment) {
                return <Comment key={comment.id} id={comment.id} name={comment.name} text={comment.text}/>;
            })}
            </ol>;

    }

});

try {
    module.exports = Comments;
} catch (e) {

}
