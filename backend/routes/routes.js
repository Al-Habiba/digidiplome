const express = require('express');
const route =express.Router()

const student=require('../controllers/student.crtl')
const achievement=require('../controllers/achievement.crtl')


route.post('/student', function(req, res){student.createStudent })
route.get('/student', function(req, res){student.getStudents})
route.get('/student/:id',function(req, res){ student.getStudentById})
route.put('/student/:id',function(req, res){ student.updateStudent})
route.post('/student/:id', function(req, res){student.deleteStudent})


route.post('/achievement', function(req, res){achievement.createAchievement })
route.get('/achievement', function(req, res){achievement.getAchievements})
route.get('/achievement/:id',function(req, res){ achievement.getAchievementById})
route.put('/achievement/:id',function(req, res){ achievement.updateAchievement})
route.post('/achievement/:id', function(req, res){achievement.deleteAchievement})




module.exports = route
