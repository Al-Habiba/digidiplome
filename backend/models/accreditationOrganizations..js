const mongoose= require('mongoose');
const accreditationOrganizationSchema= new mongoose.Schema
({
    name: String,
    accreditationDomain: String,
    accreditedDiplomas:String,
    comments:  String,
    accreditationDate: Date,
    expirationDate: Date,
    address:{
        country:String,
        city : String,
        state: String,
    },
    contact: {
        email: {
          type: String,
          required: true
        },
        phone: {
          type: String,
          required: true
        }
      },
        
      
})
const AccreditationOrganization = mongoose.model('AccreditationOrganization', accreditationOrganizationSchema);

module.exports = AccreditationOrganization;