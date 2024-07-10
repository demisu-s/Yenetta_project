const express=require('express')
const dotenv=require('dotenv')
const userRoutes=require('./routes/userRoute')
//import local variable
dotenv.config()
const app=express()
const port=process.env.PORT

//using routes
app.use('api/users',userRoutes)

app.listen(port,(req,res)=>{
    console.log(`server is running on port ${port}`)
})
