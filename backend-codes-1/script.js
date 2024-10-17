const express = require('express');
const app = express();

app.use(function(req,res,next ){
    console.log("middleware working");
    next();
});
app.use(function(req,res,next ){
    console.log("middleware working2");
    next();
});
app.get('/',function(req,res){
    res.send("your in route 1");
});

app.get('/about',function(req,res){
    res.send("hey u r in about section");
});

app.get('/help',function(req,res,next){
    return next(new Error('error occured'));
})
app.use(function (err, req, res, next) {
    console.error(err.stack);  
    res.status(500).send('Something broke! We don’t know what.');   
  });
  

app.listen(3000);
