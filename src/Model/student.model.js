
const mongoose = require('mongoose')


const StudentNameSchema = mongoose.Schema({

    
    name: {type:String, required:true},
   
    
   

},{
    versionKey:false,
    //timestamps:true,
})


const AddStudent = mongoose.model('studentsingle',StudentNameSchema)

module.exports = AddStudent;




