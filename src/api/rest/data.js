import makeRequest from "../makeRequest";


export const addJog = async (data) => {
    let json = await makeRequest({
        url: '/data/jog',
        method: 'post',
        authorization: true,
        body: data
    })

    return json.response;
}


export const editJog = async (data) => {
    let json = await makeRequest({
        url: '/data/jog',
        method: 'put',
        authorization: true,
        body: data
    });

    return json.response;
}


export const getData = async () => {
    let json = await makeRequest({
        url: '/data/sync',
        method: 'get',
        authorization: true,
    });

    return json.response.jogs;
}
