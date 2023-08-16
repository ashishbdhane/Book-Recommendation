const mongoose  = require('mongoose')

const Bookshchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    user:{
        type:String,
        required:true
    },
    reviews:[
        {
            review_auth:{
                type:String,
                required:true
            },
            review:{
                type:String,
                required:true
            }
        }
    ]
})

module.exports  = mongoose.model("Book",Bookshchema)