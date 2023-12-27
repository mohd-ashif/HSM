const mongoose = require("mongoose")

const EmployeeSchema = new mongoose.Schema({
    name:String,
    number:Number,
    description:String,
    age:String,
    image:String,
    selectDepartment:String,
    selectHeads:String

})

const EmployeeModel = mongoose.model("employee", EmployeeSchema)
module.exports = EmployeeModel