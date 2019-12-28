'use strict'
const Product = use('App/Models/Product')
class ProductController {
  /**
   * Show a list of all products.
   * GET products
   */
  async index({ response }) {
    const products = await Users.query()
      .with('products')
      .fetch()
    return response.ok({ data: products, success: true })
  }

  /**
   * Delete a Product with id.
   * DELETE products/:id
   */
  async delete({ params, response }) {
    const product = await Product.findOrFail(params.id)

    await product.delete()
    return response
      .status(200)
      .send({ success: true, message: 'Product deleted successfully' })
  }
}

module.exports = ProductController
