var express = require('express');
var app=express();


app.get('/:dateinput',function(req,res){
    var dateinput=req.params.dateinput;
  
 dateinput=Number(dateinput) || dateinput;
   
   var parsed=new Date(dateinput);
  
   res.json({unix:isNaN(parsed.getTime())?null:parsed.getTime(),
   natural:isNaN(parsed.getTime())?null:parsed.toDateString()});
    
})

app.listen(8080, function(){
    console.log('listening at 8000');
})