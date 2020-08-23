import { container } from 'tsyringe';
import { Request, Response } from 'express';
import CreateProductService from '@modules/products/services/CreateProductService';

export default class ProductController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      name,
      color_id,
      size_id,
      category_id,
      price,
      quantity,
      pricePromotion,
      DatePromoStart,
      DatePromoEnd,
      description,
      image,
    } = request.body;

    const createProduct = container.resolve(CreateProductService);

    const product = await createProduct.execute({
      name,
      color_id,
      size_id,
      category_id,
      price,
      quantity,
      pricePromotion,
      DatePromoStart,
      DatePromoEnd,
      description,
      image,
    });

    return response.json(product);
  }
}
