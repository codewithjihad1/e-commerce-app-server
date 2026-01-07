const express = require('express');
const wpApi = require('../lib/wpApiConfig');
const router = express.Router();

router.get('/', async (req, res) => {
    const resData = {
        success: false,
        products: [],
    };

    try {
        const { data } = await wpApi.get('products', { per_page: 100 });
        resData.success = true;
        resData.products = data;

        res.status(200).send(resData);
    } catch (error) {
        console.error(error.response?.data || error.message);
        res.status(500).json(error.response?.data || error.message);
    }
});

// get product by id
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const { data } = await wpApi.get(`products/${id}`);
        res.send(data);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
