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
Route.get('products', 'ProductController.index').middleware(['auth', 'admin'])
Route.post('products', 'ProductController.store').middleware(['auth', 'admin'])
Route.delete('delete-product/:id', 'ProductController.destroy').middleware([
  'auth',
  'admin'
])
Route.get('users', 'UserController.index').middleware(['auth', 'superAdmin'])
