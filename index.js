const express=require('express')
const app=new express()
const cors=require('cors')
const mongoose=require('mongoose')
const bodyparser=require('body-parser')
app.use(bodyparser.json())
app.use(cors({origin:'*'}))
const  connect=require('./config/db')
const { getallexpense,addexpense,expense,deleteexpense ,updateexpense} = require('./controller/expensecontoller')
connect();


app.get('/', getallexpense)
app.get('/expense/:id', expense)
app.post('/add',addexpense)
app.delete('/delete/:id',deleteexpense)
app.put('/update/:id',updateexpense)
app.listen(3000,()=>{
    console.log("server connected...")
})