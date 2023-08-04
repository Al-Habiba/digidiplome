const achievement = require('../controllers/achievement.crtl')
const express = require('express')
const route = express.Router()

    route.post('/', achievement.createAchievement)
    route.get('/', achievement.getAchievements)
    route.get('/:id', achievement.getAchievementById)
    route.put('/:id', achievement.updateAchievement)
    route.delete('/:id', achievement.deleteAchievement)
    route.post('/hashContract',achievement.uploadPDF)
    route.post('/compareHash',achievement.compareHash)
    

module.exports = route