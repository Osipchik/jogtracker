import makeRequest from "../makeRequest";

export const uuidLogin = () => {
    return makeRequest({
        url: '/auth/uuidLogin',
        method: 'post',
        body: { uuid: 'hello' }
    })
}