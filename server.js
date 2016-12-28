var express = require('express');
var app=express();


app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.get('/',function(req,res){
    res.render('index');
});

app.get('/:dateinput',function(req,res){
    var dateinput=req.params.dateinput;
    
    dateinput=Number(dateinput) || dateinput;
    
    var parsed=new Date(dateinput);

   res.json({
       unix:isNaN(parsed.getTime())?null:parsed.getTime(),
       natural:isNaN(parsed.getTime())?null:parsed.toDateString()
   });
})

app.listen(process.env.PORT, function(){
    console.log('listening');
})