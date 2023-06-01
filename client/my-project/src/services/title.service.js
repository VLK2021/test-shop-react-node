import {axiosService} from "./axios.service";
import {urls} from "../constants";


export const titleService = {
    getAll: () => axiosService.get(urls.titles).then(value => value.data),
}