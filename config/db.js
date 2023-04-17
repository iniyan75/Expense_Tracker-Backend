const mongoose=require('mongoose')
const connect=async ()=>{
    try{
     const connection=  await mongoose.connect('mongodb://127.0.0.1:27017/expensetracker')
       console.log('db connected...')
    }
    catch(err){
        console.log('error connecting db')
    }

}
module.exports=connect
