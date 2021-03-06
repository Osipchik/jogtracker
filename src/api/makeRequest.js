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


    try{
        let res = await fetch('https://jogtracker.herokuapp.com/api/v1' + url, {
            method,
            headers,
            body: body && qs.stringify(body)
        })

        return await res.json();
    }
    catch (e) {
        console.log('fetch failure');
        throw e;
    }
}

export default makeRequest;


