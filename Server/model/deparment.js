const mongoose = require('mongoose')

const DepartmentSchema = new mongoose.Schema({
        name:String,
        year:Number,
        description:String,
        image:String
})
const  DepartmentModel = mongoose.model('department', DepartmentSchema)
module.exports = DepartmentModel;   