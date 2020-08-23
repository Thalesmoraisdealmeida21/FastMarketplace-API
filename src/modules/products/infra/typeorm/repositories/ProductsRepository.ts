import IProductsRepository from '@modules/products/repositories/IProductsRepository';
import { Repository, getRepository } from 'typeorm';
import ICreateProductDTO from '@modules/products/dtos/ICreateProductDTO';
import Product from '../entities/Product';

class ProductsRepository implements IProductsRepository {
  private ormRepository: Repository<Product>;

  constructor() {
    this.ormRepository = getRepository(Product);
  }

  public async create(productData: ICreateProductDTO): Promise<Product> {
    const product = this.ormRepository.create(productData);

    await this.ormRepository.save(product);

    return product;
  }

  public async findByName(name: string): Promise<Product[]> {
    const products = this.ormRepository.find({ where: { name } });

    return products;
  }
}

export default ProductsRepository;
