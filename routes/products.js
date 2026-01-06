const express = require('express');
const axiosInstance = require('../lib/axiosInstance');
const oauth = require('../lib/oauth');
const { default: axios } = require('axios');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const requestData = {
            url: 'http://e-commerce.local/wp-json/wc/v3/products',
            method: 'GET',
        };
        const headers = oauth.toHeader(oauth.authorize(requestData));
        const response = await axios.get(requestData.url, { headers });
        res.json(response.data);
    } catch (error) {
        console.error(error.response?.data || error.message);
        res.status(500).json(error.response?.data || error.message);
    }
});

module.exports = router;
