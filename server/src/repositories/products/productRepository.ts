import {EntityRepository, getManager, Repository} from "typeorm";
import {Product} from "../../entity";
import {IProductRepository} from "./productRepository.interface";



@EntityRepository(Product)
class ProductRepository extends Repository<Product> implements IProductRepository {
    public async getProducts() {
        return getManager().getRepository(Product).find();
    }
}

export const productRepository = new ProductRepository();












