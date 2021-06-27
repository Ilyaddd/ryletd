import axios from "axios";
import { HOST } from "../store/endpoints";

axios.defaults.baseURL = HOST;

const getInstance = () => {
    return axios.create({
        baseURL: HOST,
    });
};

export const axiosInstance = getInstance();
