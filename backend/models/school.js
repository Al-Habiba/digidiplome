const mongoose = require("mongoose ")
const schoolSchema = new mongoose.Schema
({
    name:String,
    website:String,
    logo:String,
    
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
    teachingDomains: {
        type: [String]
      },
    offeredPrograms: {
        type: [String]
      },
    accreditations: {
        type: [String]
      },
      


    
})
const School = mongoose.model('School', schoolSchema);

module.exports = School;