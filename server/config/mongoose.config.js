const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/bucketlist', {
    useNewUrlParser:true,
    useUnifiedTopology:true
})

.then(()=>{
    console.log("Connected to Bucketlist DB")
})
.catch((err)=>{
    console.log(err)
})