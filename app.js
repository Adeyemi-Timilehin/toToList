const express=require('express');
const app=express();
const date=require(__dirname+"/date.js")

const bodyParser=require('body-parser')

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("Public"))
const port=3000;
const items=["Buy Food", "Cook Food","Eat Food"];
const workItems=[];
const WebItems=[];
app.get('/',(req,res)=>{
const currentDay=date();
   res.render("list",{listTitle:currentDay, newListItems:items});
})

app.post("/",(req,res)=>{
  const  item=req.body.newItem;
console.log(req.body)
if(req.body.list==="Work"){
  workItems.push(item)
  res.redirect("/work");
}
else if(req.body.list==="Web"){
  WebItems.push(item);
  res.redirect("/Web");
}
else{
  items.push(item)
  res.redirect("/")
}

});
app.get("/work",function(req,res){
  res.render("list",{listTitle:"Work List",newListItems:workItems});
});
app.get("/Web",function(req,res){
  res.render("list",{listTitle:"Web dev",newListItems:WebItems});
})

app.listen(port,()=>{
console.log("Server is running");
})