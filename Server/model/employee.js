const mongoose = require("mongoose")

const EmployeeSchema = new mongoose.Schema({
    name:String,
    number: { type: String, required: true },
    description:String,
    age:String,
    image:String,
    selectDepartment:String,
    selectHead:String

})

const EmployeeModel = mongoose.model("employee", EmployeeSchema)
module.exports = EmployeeModel