const express=require('express');
const app=express();
app.set('view engine','ejs');
const port=3000;
app.get('/',(req,res)=>{
   var today=new Date();
   var day=today.getDay();
   var option={
       weekday:"long",
       day:"numeric",
       month:"long",
     
   };
   var currentDay=today.toLocaleDateString("en-UK",option)
   

   res.render("list",{kindfDay:currentDay});
})
app.listen(port,()=>{
console.log("Server is running");
})