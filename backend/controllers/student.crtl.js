const Student = require('../models/student')

module.exports = {

    async getStudents(req, res) {
        await Student.find()
            .then(students => {
                res.status(200).json(students)
            })
            .catch(error => {
                res.status(400).json("Error, " + error.message)
            })
    },


    async getStudentById(req, res) {
        let studentId = req.body.id
        await Student.findById(studentId)
            .then(student => {
                res.json(student)
            })
            .catch(error => {
                res.json({
                    message: 'Student not found'
                })
            })
    },


    async createStudent(req, res) {
        let student = new Student(req.body)
        await student.save()
            .then(savedStudent => {
                res.status(200).json(savedStudent,{
                    message: "Student saved successfully"
                })
            })
            .catch(error => {
                res.status(404).json({
                    message: 'Error saving student: ' + error.message
                })
            })
    },

    async updateStudent(req, res) {
        let studentId = req.params
        let updatedData = req.body
        await Student.findByIdAndUpdate(studentId, { $set: updatedData })
            .then(updatedStudent => {
                res.json(updatedStudent,{
                    message: "Student updated successfully"
                })
            })
            .catch(error => {
                res.json({
                    message: 'Error updating student'
                })
            })
    },


    async deleteStudent(req, res) {
        let studentId = req.params
        await Student.findByIdAndRemove(studentId)
            .then(deletedStudent => {
                res.json(deletedStudent,{
                    message: "Student deleted successfully"
                })
            })
            .catch(error => {
                res.json({
                    message: 'Error deleting student'
                })
            })
    }


}