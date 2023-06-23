const mongoose= require('mongoose');

const studentSchema = new mongoose.Schema({
    nom:String,
    prenom:String ,
    CNI:Number,
    email:String,

},
{timestamps:true})

const Student = mongoose.model('Student', studentSchema);

// Student.createCollection();

module.exports = Student
