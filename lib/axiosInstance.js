const { default: axios } = require('axios');
const oauth = require('./oauth');

const headers = oauth.toHeader(oauth.authorize({ url: 'http://e-commerce.local/wp-json/wc/v3', method: 'GET' }));

const axiosInstance = axios.create({
    baseURL: 'http://e-commerce.local/wp-json/wc/v3',
    headers: headers,
});

module.exports = axiosInstance;
