const bList= require('../models/bl.model')
// const jwt = require('jsonwebtoken')
// const SECRET= process.env.SECRET_KEY



module.exports = {
    
    getItems:(req,res)=>{
        bList.find()
        .then((result)=>{
            res.json(result)
        })
        .catch((err)=>{
            res.status(400).json(err);
            console.log(err)
        })
    },
    
    // This is for when we add reg/Log
    // getItems:(req,res)=>{
    //     const {_id} = jwt.verify(req.cookies.userToken, SECRET)
    //     bList.find({createdBy:_id})
    //     .populate("createdBy", "-password")
    //     .sort({"date":-1})
    //     .then((result)=>{
    //         res.json(result)
    //     })
    //     .catch((err)=>{
    //         res.status(400).json(err);
    //         console.log(err)
    //     })
    // },


    // This is for when we add reg/Log - Was used for forum page
    // getItemUsers:(req,res)=>{
    //     const {_id} = jwt.verify(req.cookies.userToken, SECRET)
    //     bList.find({})
    //     .populate("createdBy", "-password")
    //     .sort({"updatedAt":-1})
    //     .then((result)=>{
    //         res.json(result)
    //     })
    //     .catch((err)=>{
    //         res.status(400).json(err);
    //         console.log(err)
    //     })
    // },

    getOneItem: (req,res)=>{
        bList.findById(req.params.id)
        .then((result)=>{
            res.json(result)
        })
        .catch((err)=>{
            res.status(400).json(err);
            console.log(err)
        })
    },

    addItem:(req,res)=>{
        bList.create(req.body)
        .then((result)=>{
            res.json(result)
        }).catch((err)=>{
            res.status(400).json(err);
            console.log(err)
        })
    },

        // This is for when we add reg/Log - Was used for forum page
    // addItem:(req,res)=>{
    //     const bl = new bList(req.body)
    //     const {_id} = jwt.verify(req.cookies.userToken, SECRET)
    //     bl.createdBy = _id
    //     bl.save()
    //     .then((result)=>{
    //         res.json(result)
    //     }).catch((err)=>{
    //         res.status(400).json(err);
    //         console.log(err)
    //     })
    // },



    updateItem: (req,res)=>{
        bList.updateOne({_id:req.params.id}, req.body, {runValidators:true,new:true})
        .then((result)=>{
            res.json(result)
        })
        .catch((err)=>{
            res.status(400).json(err);
            console.log(err)
        })
    },

    deleteItem: (req,res)=>{
        bList.deleteOne({_id:req.params.id})
        .then((result)=>{
            res.json(result)
        })
        .catch((err)=>{
            res.status(400).json(err);
            console.log(err)
        })
    }
}
