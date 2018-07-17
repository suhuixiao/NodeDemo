const mongoose = require('mongoose')
const Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

//创建UserSchema
const userSchema = new Schema({
    UserId :{type:ObjectId},
    userName : {unique:true,type:String},
    password : String
},{
  collection:'user'  
}) 

userSchema.methods={
    comparePassword:(_password,password)=>{
        return new Promise((resolve,reject)=>{
            console.log(_password,'And', password)
            if(_password == password) {
                resolve(true)
            }else {
                reject(false)
            }
        })
    }
}

//发布模型
mongoose.model('User',userSchema)

