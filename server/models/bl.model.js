const mongoose = require('mongoose')

const bucketlistSchema = new mongoose.Schema({
    
    name:{
    type:String,
    required: [true, "Name is required!"],
    minLength:[3, "Name must be at least 3 characters"],
    },

    activity:{
        type:String,
        required: [true, "Activity is required!"],
        minLength:[3, "Name must be at least 3 characters"],
    },
    
    date:{
        type:String,
        required: [true, "Date to be completed by is required!"],
        minLength:[3, "Name must be at least 3 characters"],
    },

    description:{
        type:String,
        required: [true, "Description is required!"],
        minLength:[3, "Name must be at least 3 characters"],
    },
    
    createdBy:{
        // type:ObjectId
        type:mongoose.Schema.Types.ObjectId,
        ref: "User"
        

    },
    
    



}, 

{timestamps:true} )


const bList = mongoose.model('bList', bucketlistSchema)

module.exports = bList