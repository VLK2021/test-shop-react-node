import {axiosService} from "./axios.service";
import {urls} from "../constants";


export const cartService = {
    postOrder: (order) => axiosService.post(urls.cart, order),
}