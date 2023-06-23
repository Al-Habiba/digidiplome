const mongoose= require('mongoose');
const achievement= new mongoose.Schema({
    title:{
        String,
        enum:['diplome','certificat']
    } ,
    type:String,
    dateOfCompletion : Date,
    domain : String,
    annee : String,
    digitalSignature : String,
    mention : String,
    validationData : String,
    accreditationStatus : String,
    issuingInstitution: String,

},
{timestamps:true})

module.exports = mongoose.model('Achievement',achievement)    
