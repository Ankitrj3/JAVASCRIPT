const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());//this is parsers
app.use(express.urlencoded({extended:true}));//this is parsers
app.use(express.static(path.join(__dirname,'/public')));//this is static file
app.set('view engine','ejs');

app.get("/",function(req,res){
    res.render("index.ejs");
})
app.get('/profile/:username',function(req,res){
    res.send(`welconme , ${req.params.username}`);
});
app.get('/profile/:username/:id',function(req,res){
    res.send(`welcome , ${req.params.username} and your id is ${req.params.id}`);
})
app.listen(3000, function(){
    console.log("server is running");
});