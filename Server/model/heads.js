const mongoose = require("mongoose");

const DepartmentHeadsSchema = new mongoose.Schema({
    name: String,
    number: Number,
    description: String,
    age: Number,
    image: String,
    select: String
});

const HeadsModel = mongoose.model('heads', DepartmentHeadsSchema); 
module.exports = HeadsModel;
