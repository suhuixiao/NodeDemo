const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySchema = new Schema({
    id:{unique:true,type:String},
    name:{type:String}, 
    image:{type:String},
    price:{type:Number},
})
mongoose.model('Category',categorySchema)