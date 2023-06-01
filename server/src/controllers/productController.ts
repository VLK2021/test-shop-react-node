import {Request, Response} from 'express';

import {IProduct} from "../entity";
import {productService} from "../services";


class ProductController {
    public async getAll(req: Request, res: Response): Promise<Response<IProduct[]>> {
        const products = await productService.getProducts();
        return res.json(products);
    }
}

export const productController = new ProductController();