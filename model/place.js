const mongoose=require('mongoose');
let Schema=mongoose.Schema

const placeSchema=new Schema({
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
        set:(v)=> v ==="  "? "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Odisha_districts_map.svg/1200px-Odisha_districts_map.svg.png":v,

        default:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Odisha_districts_map.svg/1200px-Odisha_districts_map.svg.png"
    },
    imagebn:{
        type:String,
        required:true,
        set:(v)=> v ==="  "? "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Odisha_districts_map.svg/1200px-Odisha_districts_map.svg.png":v,

        default:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Odisha_districts_map.svg/1200px-Odisha_districts_map.svg.png" 
    },
   dist:{
        type:String,
        required:true,
    },
    type:{
        type:String,
        required:true,
    },
    location:{
        type:String,
        required:true,
    },
    bio:{
        type:String,
        required:true,
     
    }
});

const Place=mongoose.model("Place",placeSchema);

module.exports=Place;