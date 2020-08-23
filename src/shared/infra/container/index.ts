import { container } from 'tsyringe';

import IProductsRepository from '@modules/products/repositories/IProductsRepository';
import ProductRepository from '@modules/products/infra/typeorm/repositories/ProductsRepository';

container.registerSingleton<IProductsRepository>(
  'ProductsRepository',
  ProductRepository,
);
