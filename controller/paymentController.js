const Stripe = require('stripe');
const stripe = new Stripe(process.env.STRIPE_API_SECRET);

const initPayment = async (req, res) => {
    const { user, amount } = req.body;

    if (!user?.email && user?.name && amount) {
        res.status(400).send('Missing request parameters!');
    }

    const customer = await stripe.customers.create({ name: user.name, email: user.email });
    const customerSession = await stripe.customerSessions.create({
        customer: customer.id,
        components: {
            mobile_payment_element: {
                enabled: true,
                features: {
                    payment_method_save: 'enabled',
                    payment_method_redisplay: 'enabled',
                    payment_method_remove: 'enabled',
                },
            },
        },
    });
    const paymentIntent = await stripe.paymentIntents.create({
        amount: Math.round(amount * 100),
        currency: 'USD',
        customer: customer.id,
        automatic_payment_methods: {
            enabled: true,
        },
    });

    res.json({
        paymentIntent: paymentIntent.client_secret,
        customerSessionClientSecret: customerSession.client_secret,
        customer: customer.id,
        publishableKey:
            'pk_test_51Shqoe2YvKhjF80oULyFfh7k65IVcb7gd7clHpqUY3sbyJWp8VxwcVCGjOIwoliQs01UBDee71Eps1TChinxlrs2008n8BCRWa',
    });
};

module.exports = { initPayment };
