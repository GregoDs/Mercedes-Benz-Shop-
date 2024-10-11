require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');

// Use the JSON middleware for parsing requests
app.use(express.json());

// Serve static files from the "client" directory
app.use(express.static(path.join(__dirname, '..', 'client')));

// Use the Stripe secret key
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);

// Setup items...


// Replace with your product details
const products = [
    {   
        id:"001",
        name: "Mercedes Benz c63",
        price: 5000000, // in cents
        image: "https://media.istockphoto.com/id/586086492/photo/red-car-mercedes-benz-c63-stay-on-asphalt-road-in-city.jpg?s=612x612&w=0&k=20&c=sqKTl_lrL1NwB-GdOYm0Hpg9DhFUaBtaFc8EXJUiCbM="
    },
    {
        id:"002",
        name: "Mercedes Benz Amg-gt",
        price: 6000000, // in cents
        image: "https://media.istockphoto.com/id/1077921262/photo/mercedes-benz-amg-gt.jpg?s=612x612&w=0&k=20&c=z1Zxp0l8-y9UX7NS5C9jKI9ny80lL1YTVezlYbizqvY="
    },
    {
        id:"003",
        name: "Mercedes Benz Amg-gt-r-coupe",
        price: 5000000, // in cents
        image: "https://media.istockphoto.com/id/1306113934/photo/mercedes-benz-amg-gt-r-coupe-luxury-sport-car.jpg?s=612x612&w=0&k=20&c=R10VW3A_JSR1XquBaLvsInXhMRSzL7Y3TJ3zjutc5Rg="
    },
    {
        id:"004",
        name: "Mercedes Amg Petronas Formula 1-car",
        price: 6000000, // in cents
        image: "https://media.istockphoto.com/id/520492004/photo/mercedes-f1-w06-hybrid-formula-1-race-car.jpg?s=612x612&w=0&k=20&c=vKx2puOwKNFEVL9lrBW3iCeWhpGn0UtR-IM-LXZAgsY="
    },
    {
        id:"005",
        name: "Mercedes gran-Canaria",
        price: 9000000, // in cents
        image: "https://media.istockphoto.com/id/1156894496/photo/gran-canaria-spain-may-12-2018.jpg?s=612x612&w=0&k=20&c=uqjjewh0hJyZXHj3QnUxqgyV4c2z9lyNcfOMg3daxmQ="
    },
    {
        id:"006",
        name: "Mercedes green amg-gt-r",
        price: 4500000, // in cents
        image: "https://media.istockphoto.com/id/1041380024/photo/the-sports-car-mercedes-amg-gt-r-in-green.jpg?s=612x612&w=0&k=20&c=wxnzEzp7kimnpXR7SWQGSqn8MVZLmO1bffitTwacwfU="
    },
    {
        id:"007",
        name: "Mercedes Benz gle 53 AMG ",
        price: 3400000, // in cents
        image: "https://media.istockphoto.com/id/1489985926/photo/black-mercedes-benz-gle-53-amg-parked-in-a-desolate-street-at-night.jpg?s=612x612&w=0&k=20&c=gSfgoNhsAzOTjWg2jUXKblvpkoQeIhnHD3686kxM7yQ="
    },
    {
        id:"008",
        name: "Mercedes SUV  C63",
        price: 4455000, // in cents
        image: "https://media.istockphoto.com/id/948387066/photo/mercedes-benz-c63-amg.jpg?s=612x612&w=0&k=20&c=oMxtZMMzq8j7kdQr2ve3aAgNT2LHtR--04TiTb7ym1s="
    },
    {
        id:"009",
        name: "Mercedes AMG coupe-gt",
        price: 5047000, // in cents
        image: "https://media.istockphoto.com/id/537791997/photo/mercedes-amg-gt-coupe-sports-car.jpg?s=612x612&w=0&k=20&c=9sBSFuBR57Ogmv_SQ6SFLy_8gdFTpWQT7O4-rXXS48U="
    },
    {
        id:"010",
        name: "Mercedes sls AMG coupe",
        price: 45000000, // in cents
        image: "https://media.istockphoto.com/id/459005633/photo/mercedes-benz-sls-amg-coupe.jpg?s=612x612&w=0&k=20&c=LdPhbhd7GddJJlkVCAVTZgxaBAGPBkKGxFgI8euVGt4="
    },
    {
        id:"011",
        name: "Mercedes Benz e63 AMG",
        price: 35000000, // in cents
        image: "https://media.istockphoto.com/id/470688309/photo/mercedes-benz-e63-amg.jpg?s=612x612&w=0&k=20&c=2gHT1HdWE_9EMYStTA0eJcXj3Zsu7Wmc1uoysaN_9xs="
    },
    {
        id:"012",
        name: "Mercedes ML63-AMG ",
        price: 5000000, // in cents
        image: "https://media.istockphoto.com/id/504920104/photo/mercedes-benz-w166-ml63-amg.jpg?s=612x612&w=0&k=20&c=wVy6e-3yftzu21uL4nO94CEklxvdQ1JZ_oloPzxyLXE="
    },
    {
        id:"",
        name:"",
        price:"",
        image:""
    }
];


app.post('/create-checkout-session', async (req, res) => {
    console.log('Received request to create checkout session');

    const productId = req.body.productId;
    console.log('Received productId:', productId);

    // Find the product details based on productId
    const product = products.find(p => p.id === productId);

    if (!product) {
        console.error('Product not found for productId:', productId);
        return res.status(404).json({ error: 'Product not found' });
    }
    // Create a Checkout Session using the Stripe API
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
            {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: product.name,
                    },
                    unit_amount: product.price,
                },
                quantity: 1,
            },
        ],
        mode: 'payment',
        success_url: 'http://localhost:3000/#successPage',
        cancel_url: 'http://localhost:3000/#cancelPage',
    });

    res.json({ id: session.id });
});






app.get('/', (req, res) => {
    const filePath = path.join(clientPath, 'index.html');
    console.log('Sending file:', filePath);
    res.sendFile(filePath);
});


// Additional routes for other pages or API endpoints...

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});