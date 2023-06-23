const student = require('../controllers/student.crtl')

module.exports = (app) => {

    app.post('/student', student.createStudent)
    app.get('/student', student.getStudents)
    app.get('/:id', student.getStudentById)
    app.put('/:id', student.updateStudent)
    app.delete('/:id', student.deleteStudent)

}
