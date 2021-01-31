import makeRequest from "../makeRequest";


export const addJog = (data) => {

    return makeRequest({
        url: 'https://jogtracker.herokuapp.com/api/v1/data/jog',
        method: 'post',
        authorization: true,
        body: data
    })
}


export const editJog = (data) => {

    return makeRequest({
        url: 'https://jogtracker.herokuapp.com/api/v1/data/jog',
        method: 'put',
        authorization: true,
        body: data
    })
}


export const getData = () => {
    return makeRequest({
        url: 'https://jogtracker.herokuapp.com/api/v1/data/sync',
        method: 'get',
        authorization: true,
    })
}
