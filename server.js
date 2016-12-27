var express = require('express');
var app=express();


app.get('/:dateinput',function(req,res){
    var dateinput=req.params.dateinput;
  
 dateinput=Number(dateinput) || dateinput;
   //see if it's natural date
   var parsed=new Date(dateinput);
  
  
   res.json({unix:isNaN(parsed)?null:parsed.getTime(),
   natural:isNaN(parsed)?null:parsed.toDateString()});
    
})

app.listen(8080, function(){
    console.log('listening at 8000');
})