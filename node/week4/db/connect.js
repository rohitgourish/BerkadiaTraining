const mongoose = require('mongoose');
var Schema = mongoose.Schema
mongoose.connect("mongodb://localhost/college",{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

const StudentModel = new Schema({
    rollNo:Number,
    name:String,
    department:String,
    year:String
});

module.exports.StudentModel = mongoose.model("student",StudentModel);
