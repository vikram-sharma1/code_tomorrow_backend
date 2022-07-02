

const express = require('express')

const connect = require("./config/db")

const StudentController = require("./Controller/user.controller")
const AddStudent = require('./Controller/student.controller')


 
const app = express()
app.use(express.json())




app.use("",StudentController)
app.use("",AddStudent)




const port = process.env.PORT || 3001

app.listen(port,async()=>{
    try{
        await connect()
        console.log("listening on 3002")
    }
    catch(err){
        console.log(err.message)
    }
})