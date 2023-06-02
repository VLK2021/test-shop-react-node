import {axiosService} from "./axios.service";
import {urls} from "../constants";


export const productService = {
    postOrder: (order) => axiosService.post(urls.cart, order),
}