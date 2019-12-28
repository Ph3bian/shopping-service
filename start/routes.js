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
const UserValidator = Route.get('/', () => {
  return { message: 'Welcome to the Shopping Service' }
})
Route.post('auth/login', 'AuthController.login')
Route.post('auth/register', 'AuthController.register')
Route.post('auth/reset-password', 'AuthController.resetPassword')
Route.get('users', 'UserController.index')
Route.get('products', 'ProductController.index')
Route.delete('delete-products', 'ProductController.delete')
