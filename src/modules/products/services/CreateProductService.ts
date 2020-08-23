import { inject, injectable } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import IProductsRepository from '../repositories/IProductsRepository';
import Product from '../infra/typeorm/entities/Product';

interface IRequest {
  name: string;
  color_id: string;
  size_id: string;
  category_id: string;
  price: number;
  quantity: number;
  pricePromotion: number;
  DatePromoStart: Date;
  DatePromoEnd: Date;
  description: string;
  image: string;
}

@injectable()
class CreateProductService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  public async execute(productData: IRequest): Promise<Product> {
    const quantityInformed = productData.quantity === undefined;
    let productInsert = productData;

    if (quantityInformed) {
      productInsert = { ...productData, quantity: 0 };
    }

    const productsWithSameName = await this.productsRepository.findByName(
      productData.name,
    );

    if (productsWithSameName.length > 0) {
      throw new AppError('This product name already exists');
    }

    const product = await this.productsRepository.create(productInsert);

    return product;
  }
}

export default CreateProductService;
