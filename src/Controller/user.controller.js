

const express = require('express')

const Student = require('../Model/user.model')


const router = express.Router()


router.post("",async(req,res) => {
    try {
        
        const user = await Student.create(req.body)

        return res.send(user)


    } catch (error) {
        return res.send(error.message)
    }
})

router.post("/date",async(req,res) => {
    try {
        const chk = req.body
       // console.log('chk:', chk)
        

        const user = await Student.find({$and: [{date:{$gte:chk.startD}},{date:{$lte:chk.endD}}]}).lean().exec()
      
        res.send(user)

    } catch (error) {
        return res.send(error.message)
    }
})

router.get("",async(req,res) => {
    try {
      
        const  user = await Student.find().lean().exec()
        return res.send(user)

    } catch (error) {
        return res.send(error.message)
    }
})



module.exports = router