import axios from "axios";

import baseURL from "../constants/baseUrl";


export const axiosService = axios.create({
    baseURL
});


