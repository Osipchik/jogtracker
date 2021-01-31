import { config } from "./config";
import qs from 'qs';


const makeRequest = async ({ url, method, body, authorization = false}) => {
    let headers = {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
    };
    
    if (authorization) {
        headers.Authorization = `Bearer ${config.token}`;
    }


    let res = await fetch(url, {
        method,
        headers,
        body: body && qs.stringify(body)
    })

    console.log(res)

    return await res.json();
}

export default makeRequest;


