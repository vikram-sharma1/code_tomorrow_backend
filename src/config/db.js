

const mongoose = require('mongoose')


module.exports = () => {
  return mongoose.connect("mongodb+srv://code:code@cluster0.qgwgpgf.mongodb.net/?retryWrites=true&w=majority")
}