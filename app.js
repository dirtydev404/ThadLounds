// initial setup
var express = require("express");
var app = express();
bodyParser  = require("body-parser"),

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.set("view engine", "ejs");

//Home Page Route

app.get("/", function(req, res){
    res.render("index")
});

//server setup
var port = 3000;
app.listen(3000, () => {
    console.log("App is running on port: " + " " + port);
})