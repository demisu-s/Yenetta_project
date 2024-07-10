const mongoose=require('mongoose')

const houseSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User",
    },

    title:{
        type:String,
    required:[true,"add title"],
    },
    description:{
        type:String,
        required:[true,"add description"]

    },
    location:{
        type:String,
        required:[true,"add location"]

    },
    price:{
type:String,
required:[true,"add price per month"]
    },
},

{
    timestamps:true,
})

module.exports=mongoose.model("House",houseSchema)