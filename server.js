require('dotenv').config();
const cors = require('cors');
const express = require('express');
const paymentRoute = require('./routes/payment');
const productRoute = require('./routes/products');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/payment', paymentRoute);
app.use('/api/products', productRoute);

app.get('/', (req, res) => {
    res.send('Server is running');
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
