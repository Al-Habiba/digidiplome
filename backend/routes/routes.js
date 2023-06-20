const express = require('express');
const route =express.Router()

const student=require('../controllers/student.crtl')

route.post('/student', function(req, res){
    student.createStudent
  })
route.get('/student', function(req, res){student.getAllStudents})
route.get('/student/:id',function(req, res){ student.getStudentById})
route.put('/student/:id',function(req, res){ student.updateStudent})
route.post('/student/:id', function(req, res){student.deleteStudent})



module.exports = route
