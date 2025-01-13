const mongoose=require('mongoose');
let Schema=mongoose.Schema

const placeSchema=new Schema({
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
    },
    image:{
        type:String,
        set:(v)=> v ==="  "? "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Odisha_districts_map.svg/1200px-Odisha_districts_map.svg.png":v,

        default:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Odisha_districts_map.svg/1200px-Odisha_districts_map.svg.png"
    },
    imagebn:{
        type:String,
        set:(v)=> v ==="  "? "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Odisha_districts_map.svg/1200px-Odisha_districts_map.svg.png":v,

        default:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Odisha_districts_map.svg/1200px-Odisha_districts_map.svg.png" 
    },
   dist:{
        type:String,
    },
    type:{
        type:String,
    },
    location:{
        type:String,
    },
    bio:{
        type:String,
     
    }
});

const Place=mongoose.model("Place",placeSchema);

module.exports=Place;