const express=require ('express');
const path=require('path');
const mongoose=require('mongoose');
var methodOverride = require('method-override')
const Place =require("./model/place.js");
let app=express();

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"))
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname,"/public")));
// app.engine("ejs",ejsMate);   

// Databases mysticplace
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/mysticplace');
     
  }
  main().then(res=>{console.log("connection to db")}).catch(err => console.log(err));

app.get("/",async(req,res,next)=>{
    
    let results=await Place.find({});
    res.render("index.ejs",{results})


})


app.get("/addDb",(req,res,next)=>{ 
    res.render("placeDb.ejs")
})
app.post("/mysticOdisha",async(req,res,next)=>{
    let{name,description,image,imagebn,dist,type,location,bio}=req.body;
    let s1=new Place({
        name:name,
        description:description,
        image:image,
        imagebn:imagebn,
        dist:dist,
        location:location, 
        bio:bio,
    })
   await s1.save()
    res.redirect("/addDb")
})

app.listen(3030,()=>{
    console.log("app listing on port 3030");
})