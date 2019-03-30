var exp = require("express");
var app = exp();

var port = process.env.PORT || 4000;
app.listen(port, function(){
    console.log(" server is listening on port" + port);
});

app.get('/players', function(req, res){
    var query = req.query;
    console.log("query value" + JSON.stringify(query))
    res.end(JSON.stringify(query))
});