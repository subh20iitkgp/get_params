var exp = require("express");
var app = exp();

var port = process.env.PORT || 4000;
app.listen(port, function(){
    console.log(" server is listening on port" + port);
});

app.get('/players/:lang/:name', function(req, res){
    res.write("lang=" + req.params.lang);
    res.end("name=" + req.params.name);
});