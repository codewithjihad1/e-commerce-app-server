const express = require('express');
const wpApi = require('../lib/wpApiConfig');
const router = express.Router();

router.get('/', async (req, res) => {
    const resData = {
        success: false,
        products: [],
    };

    try {
        const { data } = await wpApi.get('products', { per_page: 10 });
        resData.success = true;
        resData.products = data;

        res.status(200).send(resData);
    } catch (error) {
        console.error(error.response?.data || error.message);
        res.status(500).json(error.response?.data || error.message);
    }
});

module.exports = router;
