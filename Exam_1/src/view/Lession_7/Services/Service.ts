import axiosInstance from './Axios.ts'

function get(endpoint: string, data: any, config = undefined) {
    return axiosInstance.get(endpoint, {
        data: data,
        ...config
    })
}

function post(endpoint: string, data: any) {
    return axiosInstance.post(endpoint, data)
}

function put(endpoint: string, data: any) {
    return axiosInstance.put(endpoint, data)
}

function del(endpoint: string, data: any) {
    return axiosInstance.delete(endpoint, data)
}

export {get, post, put, del}