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
    
    // createdBy:{
    //     // type:ObjectId
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref: "User"
        

    // },
    
    
    
    // name:{
    //     type:String,
    //     required: [true, "Name is required!"],
    //     minLength:[3, "Name must be at least 3 characters"],
    // },

    // style:{
    //     type:String,
    //     required: [true, "Style is required!"],
    //     enum:['All-Mountain','FreeStyle', 'Back-Country' ]
    // },

    // height:{
    //     type:String,
    //     required: [true, "Height is required!"],
    //     enum:[4,5,6,]
    // },
    // footSize:{
    //     type:String,
    //     required: [true, "Description is required!"],


    // boardStyle:{
    //     type:String,
        
    // },

    // bindingStyle:{
    //     type:String,
    // },

    // bootStyle:{
    //     type:String,
    // },

    // boardHeight:{
    //     type:String,
    // },


}, 

{timestamps:true} )


const bList = mongoose.model('bList', bucketlistSchema)

module.exports = bList