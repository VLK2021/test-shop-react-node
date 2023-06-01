import {IProduct} from "../entity";
import {productRepository} from "../repositories";


class ProductService {
    public async getProducts(): Promise<IProduct[]> {
        return productRepository.getProducts();
    }
}

export const productService = new ProductService();