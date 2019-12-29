'use strict'
const Product = use('App/Models/Product')
const { validate } = use('Validator')
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
   * Show a list of all products.
   * GET products
   */
  async store({ response, request }) {
    const rules = {
      name: 'required',
      category: 'required',
      price: 'required'
    }

    let validation = await validate(request.all(), rules)

    if (validation.fails()) {
      return response.badRequest(validation.messages())
    }
    const product = await Product.create(
      request.only(['name', 'category', 'price', 'description', 'created_by'])
    )

    return response.created({ data: product, success: true })
  }

  /**
   * Delete a Product with id.
   * DELETE products/:id
   */

  async destroy({ params, response }) {
    try {
      const product = await Product.findOrFail(params.id)
      await product.delete()
      return response.ok({
        success: true,
        message: 'Product deleted successfully'
      })
    } catch (e) {
      return response.badRequest({
        success: false,
        message: 'Error, delete product failed'
      })
    }
  }
}

module.exports = ProductController
