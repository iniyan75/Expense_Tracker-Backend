const mongoose=require('mongoose')


const expense=new mongoose.Schema({
    title:String,
    amount:Number,
    date:Date
})

module.exports=mongoose.model('expense',expense)