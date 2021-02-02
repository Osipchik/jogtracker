import Api from '../api';
import makeRequest from "../api/makeRequest";


describe('api tests', () => {
    beforeEach(() => {
        fetch.resetMocks();
    });

    it('makeRequest failure', async () => {
        fetch.mockReject(() => Promise.reject('error'));

        await expect(makeRequest({})).rejects.not.toThrow();
    })

    describe('authenticate endpoint', () => {
        it('uuidLogin success', async () => {
            const data = { response: { token: 123 } };

            fetch.mockResponseOnce(JSON.stringify(data));

            const token = await Api.auth.uuidLogin();

            expect(token).toEqual(data.response);
            expect(fetch).toHaveBeenCalledTimes(1);
            expect(fetch).toHaveBeenCalledWith(
                'https://jogtracker.herokuapp.com/api/v1/auth/uuidLogin',
                {
                    "body": "uuid=hello",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    "method": "post"
                }
            );
        });

        it('uuidLogin failure', async () => {
            fetch.mockReject(() => Promise.reject('error'));

            const token = await Api.auth.uuidLogin();
            expect(token).toBeUndefined();
        });
    });

    describe('data endpoint', () => {
        it('getData success', async () => {
            const data = { response: { jogs: [1, 2, 3] } };

            fetch.mockResponseOnce(JSON.stringify(data));

            const jogs = await Api.data.getData();

            expect(jogs).toEqual(data.response.jogs);
            expect(fetch).toHaveBeenCalledTimes(1);
            expect(fetch).toHaveBeenCalledWith(
                'https://jogtracker.herokuapp.com/api/v1/data/sync',
                {
                    method: 'get',
                    headers: {
                        Authorization: 'Bearer ',
                        Accept: 'application/json',
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    body: undefined,
                }
            );
        });
    })
})