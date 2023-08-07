const express = require('express')
const route = express.Router()
const student = require('../controllers/student.crtl')

    route.post('/', student.createStudent)
    route.get('/', student.getStudents)
    route.get('/:id', student.getStudentById)
    route.put('/:id', student.updateStudent)
    route.delete('/:id', student.deleteStudent)

module.exports = route