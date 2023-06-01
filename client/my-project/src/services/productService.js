import {axiosService} from "./axios.service";
import {urls} from "../constants";


export const productService = {
    getAll: () => axiosService.get(urls.products).then(value => value.data),
}