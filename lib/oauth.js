const OAuth = require('oauth-1.0a');
const CryptoJS = require('crypto-js');

const consumerKey = process.env.WP_CONSUMER_KEY;
const consumerSecret = process.env.WP_CONSUMER_SECRET;

const oauth = OAuth({
    consumer: { key: consumerKey, secret: consumerSecret },
    signature_method: 'HMAC-SHA1',
    hash_function(base_string, key) {
        return CryptoJS.HmacSHA1(base_string, key).toString(CryptoJS.enc.Base64);
    },
});

module.exports = oauth;
