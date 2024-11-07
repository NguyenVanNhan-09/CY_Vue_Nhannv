import axios from "axios"

export const axiosInstance = axios.create({
    baseURL: "http://api.example.com",
    timeout: 5000,
})

axios.interceptors.request.use(function (config) {
        NProgress.start();
        return config;
    }, function (error) {
        return Promise.reject(error);
    }
)

axios.interceptors.response.use(function (response) {
    NProgress.done()
    return response;
}, function (error) {
    return Promise.reject(error);
})