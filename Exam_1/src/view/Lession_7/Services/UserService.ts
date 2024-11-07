import {get, post} from "./Service.ts";

function login(payload) {
    return post('/login', payload)
}

function getLoggedUser() {
    return get('/user')
}

export const userService = {
    login,
    getLoggedUser,
}
