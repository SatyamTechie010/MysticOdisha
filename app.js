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

//update
app.get("/place/:id/edit",async(req,res,next)=>{
    let {id}=req.params;
    let result=await Place.findById(id);
    res.render("editDb.ejs",{result})
})
app.put("/mysticOdisha/:id",async(req,res,next)=>{
    let {id}=req.params;
    let {name,description,image,imagebn,dist,type,location,bio}=req.body;
    await Place.findByIdAndUpdate(id,{name:name})
    await Place.findByIdAndUpdate(id,{description:description})
    await Place.findByIdAndUpdate(id,{image:image})
    await Place.findByIdAndUpdate(id,{imagebn:imagebn})
    await Place.findByIdAndUpdate(id,{dist:dist})
    await Place.findByIdAndUpdate(id,{type:type})
    await Place.findByIdAndUpdate(id,{location:location})
    await Place.findByIdAndUpdate(id,{bio:bio})

    console.log("success");
    res.redirect("/")
  
})

//Delete
app.delete("/place/:id",async(req,res,next)=>{
    let {id}=req.params;
    await Place.findByIdAndDelete(id)
    res.redirect("/")
})
app.listen(3030,()=>{
    console.log("app listing on port 3030");
})