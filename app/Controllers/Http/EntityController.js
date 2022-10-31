'use strict'

const Database = use('Database');
const NbcEntidade = use('App/Models/NbcEntidade');
const validate = use('@adonisjs/validator/providers/ValidatorProvider');
const AccesoPrihibidoException = use('App/Exceptions/AccesoPrihibidoException')
const { scripts } = require('./../../../database/properties')

class EntityController {
    async showEntities({  response }) {

        try {
            const entities = await Database.raw(scripts.getEntities)
            response.status(200).json({
                code: 0,
                message: 'ok',
                data: entities.rows
            })
        } catch (error) {
            throw new AccesoPrihibidoException();
        }
    }


    async showListHeadquarterById({ request, response }) {
        try {
            const entities = await Database.raw(scripts.getListHeadquarterById(request.params.id))
            response.status(200).json({
                code: 0,
                message: 'ok',
                data: entities.rows
            })
        } catch (error) {
            throw new AccesoPrihibidoException();
        }
    }

    async showParticipantDetailById({ request, response }) {
        try {
            const entities = await Database.raw(scripts.showParticipantDetailById(request.params.id))
            response.status(200).json({
                code: 0,
                message: 'ok',
                data: entities.rows
            })
        } catch (error) {
            throw new AccesoPrihibidoException();
        }
    }

    async showDetailHeadquarterById({ request, response }) {
        try {
            const entities = await Database.raw(scripts.showDetailHeadquarterById(request.params.id))
            response.status(200).json({
                code: 0,
                message: 'ok',
                data: entities.rows
            })
        } catch (error) {
            throw new AccesoPrihibidoException();
        }
    }
}

module.exports = EntityController
