const Student= require('../models/student')

module.exports = {

        async getStudents  (req, res,next) {
        await  Student.find()
            .then(response=>{
                res.json(response)
            })
            .catch(error =>{
                res.json("erreur")    })
        },



        async getStudentById (req, res,next) {
            let studentId= req.body.id
            await Student.findById(studentId)
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
            let student= new Student({
                nom:req.body.nom,
                prenom:req.body.prenom,
                CNI:req.body.CNI
            })
            await student.save()
            .then(response=>{
                res.json({
                    message:"Creation reussi"
                })
            })
            .catch(error =>{
                res.json({ 
                    message:'erreur'
                    })
            })
        },

        async updateStudent (req, res,next){
            let studentId= req.body.id
            let updatedData= {
                nom:req.body.nom,
                prenom:req.body.prenom,
                CNI:req.body.CNI
            }
            await  Student.findByIdAndUpdate(studentId,{ $set: updatedData})
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
            await Student.findOneAndRemove(studentId)
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