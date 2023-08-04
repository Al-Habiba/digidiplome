const Achievement = require('../models/achievement')
const crypto = require('crypto');
const { uploadFileMiddleware,uploadPDFToFS} = require('./upload.ctrl');
const fs = require('fs');


let pdfFilename
module.exports = {

    async uploadPDF (req, res) {
        
        try{
            await uploadFileMiddleware(req,res);
           
            if (req.file == undefined) {
                return res.status(400).send({ message: "Please upload a file!" });
              }
              const pdfFilePath = fs.readFileSync(req.file.path);
              const hash = crypto.createHash('sha256').update(pdfFilePath).digest('hex');
              console.log("hash "+hash )
             /* fs.unlink(req.file.path,(err)=>{
                console.log(err)
              })*/
              res.status(200).send({
                message: "Uploaded the file successfully: " + req.file.originalname,
                hash:hash
              });
              pdfFilename=req.file.originalname
        }

        catch (err) {
            console.log(err)
              res.status(500).send({
                message: `Could not upload the file: ${req.file.originalname}. ${err}`,
              });
      }},

    async compareHash(req,res) {
        try {
           
        digitalSignature=req.body.hash
        console.log("digitalSignature= "+ digitalSignature)
        const achievement = await Achievement.findOne({ digitalSignature });
       

        if (achievement) {
            console.log("Hash exists in the database");
            const pdfFilePath='../uploads/'+pdfFilename

            //storing the pdf in fire store
            const downloadUrl = await uploadPDFToFS(pdfFilePath, pdfFilename+Date.now());
            achievement.filePath=downloadUrl
            await achievement.save()
            //delete the file in local 
            fs.unlink(pdfFilePath,(err)=>{
                console.log(err)
              })
            res.json({ isAuthentic: true }); 
          } else {
            console.log("Hash does not exist in the database");
            res.json({ isAuthentic: false }); 
          }
    } catch (error) {
        console.error('Error comparing hash with database:', error.message);
        res.json({ isAuthentic: false });
  }
},

    async getAchievements(req, res) {
        await Achievement.find()
            .then(achievement => {
                res.status(200).json(achievement) 
            })
            .catch(error => {
                res.status(400).json("Error, " + error.message)
            })
    },


    async getAchievementById(req, res) {
        let achievementId = req.params.id
        await Achievement.findById(achievementId)
            .then(achievement => {
                res.json(achievement)
            })
            .catch(error => {
                res.json(error, {
                    message: 'Achievement not found'
                })
            })
    },


    async createAchievement(req, res) {
        let achievement = new Achievement(req.body)
        await achievement.save()
            .then(achievement => {
                res.status(200).json(achievement)
            })
            .catch(error => {
                res.status(404).json({
                    message: 'Error saving achievement: ' + error.message
                })
            })
    },

    async updateAchievement(req, res) {
        let achievementId = req.params.id
        let updatedData = req.body
        await Achievement.findByIdAndUpdate(achievementId, { $set: updatedData })
            .then(achievement => {
                res.json(achievement, {
                    message: "Achievement updated successfully"
                })
            })
            .catch(error => {
                res.json(error, {
                    message: 'Error updating achievement'
                })
            })
    },


    async deleteAchievement(req, res) {
        let achievementId = req.params.id
        await Achievement.findOneAndRemove(achievementId)
            .then(achievement => {
                res.json(achievement, {
                    message: "Achievement deleted successfully"
                })
            })
            .catch(error => {
                res.json({
                    message: 'Error deleting achievement'
                })
            })
    }


}