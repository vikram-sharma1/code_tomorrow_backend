

const express = require('express')

const AddStudent = require('../Model/student.model')


const router = express.Router()


router.post("/addname",async(req,res) => {
    try {
        
        const user = await AddStudent.create(req.body)

        return res.send(user)


    } catch (error) {
        return res.send(error.message)
    }
})

router.get("/getname",async(req,res) => {
    try {
      
        const  user = await AddStudent.find().lean().exec()
        return res.send(user)

    } catch (error) {
        return res.send(error.message)
    }
})


module.exports = router




