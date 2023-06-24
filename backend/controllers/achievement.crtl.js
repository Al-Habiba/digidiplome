const Achievement = require('../models/achievement')

module.exports = {

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