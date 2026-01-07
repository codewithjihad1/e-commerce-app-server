const WooCommerceRestApi = require('@woocommerce/woocommerce-rest-api').default;

const wpApi = new WooCommerceRestApi({
    url: 'http://e-commerce.local',
    consumerKey: process.env.WP_CONSUMER_KEY,
    consumerSecret: process.env.WP_CONSUMER_SECRET,
    version: 'wc/v3',
});

module.exports = wpApi;
