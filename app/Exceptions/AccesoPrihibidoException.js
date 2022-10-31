'use strict'

const { LogicalException } = require('@adonisjs/generic-exceptions')

class AccesoPrihibidoException extends LogicalException {
  /**
   * Handle this exception by itself
   */

  handle(error, { response }) {
    // response
    //   .status(500)
    //   .send('Error de conexión a la base de datos !!! ')
    response.status(500).json({
      code: -1,
      message: 'Error de conexión a la base de datos !!! ',
      data: []
    })
  }
}
module.exports = AccesoPrihibidoException
