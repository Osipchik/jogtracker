export const config = {
    token: '',
    scope: '',
    expiresIn: '',
    createdAt: '',
    receivedAt: ''
}

export const setToken = (token) => {
    if (token) {
        config.token = token.access_token;
        config.scope = token.scope;
        config.expiresIn = token.expires_in;
        config.createdAt = token.created_at;
    }
} 