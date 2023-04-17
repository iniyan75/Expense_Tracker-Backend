const expense=require('../modal/expensemodal')

exports.getallexpense=async(req,res)=>{
    try{
        const expenses=await expense.find()
    
        res.json(expenses)
    }
    catch(error){
        console.log('error sending data')

    }
}
exports.expense=async(req,res)=>{
    const  id=req.params.id;
    try{
        const expenses=await expense.findById(id)
    
        res.send(expenses)
    }
    catch(error){
        console.log('error sending data')

    }
}
exports.deleteexpense=async(req,res)=>{
    const  id=req.params.id;
    try{
        await expense.findByIdAndDelete(id)
    
        res.send('deleted')
    }
    catch(error){
        console.log('error sending data')

    }
}
exports.addexpense=async(req,res)=>{
    
    try{
      const data=await  expense.create(req.body)
        res.send(data)
    }
    catch(err){
        console.log("error")
    }
}
exports.updateexpense=async(req,res)=>{
    try{
        await expense.findByIdAndUpdate(req.params.id,{...req.body})
        res.send('updated')
    }
    catch(err){

    }

}