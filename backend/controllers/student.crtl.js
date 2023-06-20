const student= require('../models/student')

module.exports = {

async getStudents  (req, res,next) {
  await  student.find()
    .then(response=>{
        res.json(response)
    })
    .catch(error =>{
        res.json("erreur")    })
},



async getStudentById (req, res,next) {
    let studentId= req.body.id
    await student.findById(studentId)
    .then(response=>{
        res.json(response)
    })
    .catch(error =>{
        res.json({ 
              message:'erreur'
            })
      })
},
async createStudent (req, res,next){
    let studentId= req.body.id
    let studentIdstudent= new Student({
        nom:req.body.nom,
        prenom:req.body.prenom,
        CNI:req.body.CNI
    })
    await  student.findByIdAndUpdate(studentId,{ $set: updatedData})
    .then(response=>{
        res.json({
            message:"Mis a jour  reussi"
        })
    })
    .catch(error =>{
        res.json({ 
              message:'erreur'
            })
      })
},
async updateStudent (req, res,next){
    let studentIdstudent= new Student({
        nom:req.body.nom,
        prenom:req.body.prenom,
        CNI:req.body.CNI
    })
    await student.save()
    .then(response=>{
        res.json({
            message:"Mis a jour  reussi"
        })
    })
    .catch(error =>{
        res.json({ 
              message:'erreur'
            })
      })
},

async deleteStudent (req, res,next) {
    let studentId= req.body.id
    let studentIdstudent= new Student({
        nom:req.body.nom,
        prenom:req.body.prenom,
        CNI:req.body.CNI
    })
    await student.findOneAndRemove(studentId)
    .then(response=>{
        res.json({
            message:"Suppression reussi"
        })
    })
    .catch(error =>{
        res.json({ 
              message:'erreur'
            })
      })
}

}