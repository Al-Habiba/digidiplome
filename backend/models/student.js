const mongoose= require('mongoose');
const student= new mongoose.Schema({
    nom:String,
    prenom:String ,
    CNI:Number,
    email:String,

},
{timestamps:true})

module.exports = mongoose.model('Student',student )    
