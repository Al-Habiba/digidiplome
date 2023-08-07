const School = require('../models/school')

module.exports = {

    async getSchools(req, res) {
        await School.find()
            .then(school => {
                res.status(200).json(school)
            })
            .catch(error => {
                res.status(400).json("Error, " + error.message)
            })
    },


    async getSchoolById(req, res) {
        let schoolId = req.params.id
        await School.findById(schoolId)
            .then(school => {
                res.json(school)
            })
            .catch(error => {
                res.json(error, {
                    message: 'School not found'
                })
            })
    },


    async createSchool(req, res) {
        let school = new School(req.body)
        await school.save()
            .then(savedSchool => {
                res.status(200).json(savedSchool)
            })
            .catch(error => {
                res.status(404).json({
                    message: 'Error saving school: ' + error.message
                })
            })
    },

    async updateSchool(req, res) {
        let schoolId = req.params.id
        let updatedData = req.body
        await School.findByIdAndUpdate(schoolId, { $set: updatedData })
            .then(updatedSchool => {
                res.json(updatedSchool, {
                    message: "School updated successfully"
                })
            })
            .catch(error => {
                res.json(error, {
                    message: 'Error updating school'
                })
            })
    },


    async deleteSchool(req, res) {
        let schoolId = req.params.id
        await School.findByIdAndRemove(schoolId)
            .then(deletedSchool => {
                res.json(deletedSchool, {
                    message: "School deleted successfully"
                })
            })
            .catch(error => {
                res.json(error, {
                    message: 'Error deleting school'
                })
            })
    }


}