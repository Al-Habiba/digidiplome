const school = require('../controllers/school.crtl')

module.exports = (app) => {

    app.post('/school', school.createSchool)
    app.get('/school', school.getSchools)
    app.get('/:id', school.getSchoolById)
    app.put('/:id', school.updateSchool)
    app.delete('/:id', school.deleteSchool)

}
