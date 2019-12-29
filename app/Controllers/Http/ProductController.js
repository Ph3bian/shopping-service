'use strict'
const Product = use('App/Models/Product')
class ProductController {
  /**
   * Show a list of all products.
   * GET products
   */
  async index({ response }) {
    const products = await Product.query()
      .with('products')
      .fetch()
    return response.ok({ data: products, success: true })
  }

  /**
   * Delete a Product with id.
   * DELETE products/:id
   */

  async destroy({ params, response }) {
    try {
      const product = await Product.findOrFail(params.id)
      await product.delete()
      return { success: true, message: 'Product deleted successfully' }
    } catch (e) {
      return response.badRequest({
        success: false,
        message: 'Error, delete product failed'
      })
    }
  }
}

module.exports = ProductController
