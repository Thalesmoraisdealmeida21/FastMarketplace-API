import { Router } from 'express';
import ProductController from '../controllers/ProductController';

const productsController = new ProductController();
const productsRouter = Router();

productsRouter.post('/', productsController.create);

export default productsRouter;
