const achievement = require('../controllers/achievement.crtl')

module.exports = (app) => {

    app.post('/achievement', achievement.createAchievement)
    app.get('/achievement', achievement.getAchievements)
    app.get('/:id', achievement.getAchievementById)
    app.put('/:id', achievement.updateAchievement)
    app.delete('/:id', achievement.deleteAchievement)

}
