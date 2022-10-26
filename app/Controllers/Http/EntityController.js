'use strict'

const Database = use('Database');
const NbcEntidade = use('App/Models/NbcEntidade');
const validate = use('@adonisjs/validator/providers/ValidatorProvider');
const { scripts } = require('./../../../database/properties')
class EntityController {
    async showEntities(request, response) {
        console.log(scripts.getEntities)
        const entities = await Database
            .raw(scripts.getEntities)

        return entities.rows
    }

    async showListHeadquarterById({ request, response }) {
        const entities = await Database
            .raw(scripts.getListHeadquarterById(request.params.id))
        return entities.rows
    }

    async showParticipantDetailById({ request, response }) {
        
        const entities = await Database
            .raw(scripts.showParticipantDetailById(request.params.id))
        return entities.rows
    }

    async showDetailSedeById({ request, response }) {
        let id = request.params.id
        const entities = await Database
            .raw(scripts.showParticipantDetailById(id))
        return entities.rows
    }
}

module.exports = EntityController
