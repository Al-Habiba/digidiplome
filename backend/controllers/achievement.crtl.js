const Achievement= require('../models/Achievement')

module.exports = {

        async getAchievements  (req, res,next) {
        await  Achievement.find()
            .then(response=>{
                res.json(response)
            })
            .catch(error =>{
                res.json("erreur")    })
        },



        async getAchievementById (req, res,next) {
            let achievementId= req.body.id
            await Achievement.findById(achievementId)
            .then(response=>{
                res.json(response)
            })
            .catch(error =>{
                res.json({ 
                    message:'erreur'
                    })
            })
        },


        async createAchievement (req, res,next){
            let achievement= new Achievement({
                nom:req.body.nom,
                prenom:req.body.prenom,
                CNI:req.body.CNI
            })
            await achievement.save()
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

        async updateAchievement (req, res,next){
            let achievementId= req.body.id
            let updatedData= {
                nom:req.body.nom,
                prenom:req.body.prenom,
                CNI:req.body.CNI
            }
            await  Achievement.findByIdAndUpdate(achievementId,{ $set: updatedData})
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


        async deleteAchievement (req, res,next) {
            let achievementId= req.body.id
            await Achievement.findOneAndRemove(achievementId)
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