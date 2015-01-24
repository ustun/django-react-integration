var express = require('express');
var app = express();
var React = require('React');

var Comment = React.createFactory(require('../build/comment'));
var Comments = React.createFactory(require('../build/comments'));
var HelloWorld = React.createFactory(require('../build/hello_world'));


var Components = {
    Comment: Comment,
    Comments: Comments,
    HelloWorld: HelloWorld
};

app.get('/', function (req, res) {
    var data = JSON.parse(req.query.data);
    var component = Components[req.query.component_name];
    res.send(React.renderToString(component(data)));
});

var server = app.listen(3000, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('react app listening at http://%s:%s', host, port);

});
