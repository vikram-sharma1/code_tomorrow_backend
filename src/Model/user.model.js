
const mongoose = require('mongoose')


const StudentSchema = mongoose.Schema({

    
   name: {type:String, required:true},
   rollno:{type:Number, required:true,unique:true},
    date: { type: Date, default: Date.now },
    attend:{type:Boolean, required:false}
   

},{
    versionKey:false,
    //timestamps:true,
})


const Student = mongoose.model('student',StudentSchema)

module.exports = Student;





// const mongoose = require('mongoose')


// const StudentSchema =  mongoose.Schema({

//     //id:{type: Number, required: true},
//     taskName:{type:String, required:true}
//     //userName:{type:String, required:true}

// },{
//     versionKey:false,
//     timestamps:true,
// })


// const Student = mongoose.model('student',StudentSchema)

// module.exports = Student;

