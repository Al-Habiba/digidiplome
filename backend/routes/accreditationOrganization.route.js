const accreditationOrganization = require('../controllers/accreditationOrganization.crtl')

module.exports = (app) => {

    app.post('/accreditationOrganization', accreditationOrganization.createAccreditationOrganization)
    app.get('/accreditationOrganization', accreditationOrganization.getAccreditationOrganizations)
    app.get('/:id', accreditationOrganization.getAccreditationOrganizationById)
    app.put('/:id', accreditationOrganization.updateAccreditationOrganization)
    app.delete('/:id', accreditationOrganization.deleteAccreditationOrganization)

}
