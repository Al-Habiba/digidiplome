const AccreditationOrganization = require('../models/accreditationOrganization')

module.exports = {

    async getAccreditationOrganizations(req, res) {
        await AccreditationOrganization.find()
            .then(accreditationOrganization => {
                res.status(200).json(accreditationOrganization)
            })
            .catch(error => {
                res.status(400).json("Error, " + error.message)
            })
    },


    async getAccreditationOrganizationById(req, res) {
        let accreditationOrganizationId = req.body.id
        await AccreditationOrganization.findById(accreditationOrganizationId)
            .then(accreditationOrganization => {
                res.json(accreditationOrganization)
            })
            .catch(error => {
                res.json({
                    message: 'AccreditationOrganization not found'
                })
            })
    },


    async createAccreditationOrganization(req, res) {
        let accreditationOrganization = new AccreditationOrganization(req.body)
        await accreditationOrganization.save()
            .then(savedAccreditationOrganization => {
                res.status(200).json()
            })
            .catch(error => {
                res.status(404).json({
                    message: 'Error saving accreditationOrganization: ' + error.message
                })
            })
    },

    async updateAccreditationOrganization(req, res) {
        let accreditationOrganizationId = req.params
        let updatedData = req.body
        await AccreditationOrganization.findByIdAndUpdate(accreditationOrganizationId, { $set: updatedData })
            .then(updatedAccreditationOrganization => {
                res.json(updatedAccreditationOrganization,{
                    message: "AccreditationOrganization updated successfully"
                })
            })
            .catch(error => {
                res.json({
                    message: 'Error updating accreditationOrganization'
                })
            })
    },


    async deleteAccreditationOrganization(req, res) {
        let accreditationOrganizationId = req.params
        await AccreditationOrganization.findByIdAndRemove(accreditationOrganizationId)
            .then(deletedAccreditationOrganization => {
                res.json(deletedAccreditationOrganization,{
                    message: "AccreditationOrganization deleted successfully"
                })
            })
            .catch(error => {
                res.json({
                    message: 'Error deleting accreditationOrganization'
                })
            })
    }


}