'use strict'


/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})
Route.group(() => {
  Route.get('list/entities', 'EntityController.showEntities')
  Route.get('list/entities/:id/headquarters', 'EntityController.showListHeadquarterById')
  Route.get('detail/headquarters/:id/participants', 'EntityController.showParticipantDetailById')
  Route.get('detail/headquarters/:id', 'EntityController.showDetailHeadquarterById')
})
  .prefix('/api/v1')