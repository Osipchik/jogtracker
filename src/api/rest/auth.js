import makeRequest from "../makeRequest";

export const uuidLogin = () => {
    return makeRequest({
        url: 'https://jogtracker.herokuapp.com/api/v1/auth/uuidLogin',
        method: 'post',
        body: { uuid: 'hello' }
    })
}