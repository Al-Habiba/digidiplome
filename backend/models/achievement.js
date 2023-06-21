const mongoose= require('mongoose');
const achievement= new mongoose.Schema({
    type:String,
    titre:{
        String,
        enum:['diplome','certificat']
    } ,
    CNI:Number,
    domaine:String,
    annee:String,
    signatureNum:String,
    mention :String,
    donneeDeValidation:String,
    statutDaccreditation:String,



},
{timestamps:true})

module.exports = mongoose.model('Achievement',achievement)    
