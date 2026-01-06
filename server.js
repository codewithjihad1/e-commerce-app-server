require('dotenv').config();
const cors = require('cors');
const express = require('express');
const paymentRoute = require('./routes/payment');
const oauth = require('./lib/oauth');
const { default: axios } = require('axios');
const productRoute = require('./routes/products');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/payment', paymentRoute);
app.use('/api/products', productRoute);

// app.get('/products', async (req, res) => {
//     try {
//         const requestData = {
//             url: 'http://e-commerce.local/wp-json/wc/v3/products',
//             method: 'GET',
//         };
//         const headers = oauth.toHeader(oauth.authorize(requestData));
//         const response = await axios.get(requestData.url, { headers });
//         res.json(response.data);
//     } catch (error) {
//         console.error(error.response?.data || error.message);
//         res.status(500).json(error.response?.data || error.message);
//     }
// });

app.get('/', (req, res) => {
    res.send('Server is running');
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
