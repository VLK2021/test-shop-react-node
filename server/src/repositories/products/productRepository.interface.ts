import {IProduct} from "../../entity";


export interface IProductRepository {
    getProducts(): Promise<IProduct[]>;
}