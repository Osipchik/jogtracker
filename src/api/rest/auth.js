import makeRequest from "../makeRequest";

export const uuidLogin = async () => {
    try {
        let json = await makeRequest({
            url: '/auth/uuidLogin',
            method: 'post',
            body: { uuid: 'hello' }
        });

        return json.response;
    }
    catch (e) {

    }
}