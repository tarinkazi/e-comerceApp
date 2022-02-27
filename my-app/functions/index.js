const functions = require("firebase-functions");
const express = require("express");
const cors =require("cors");
const { request, response } = require("express");
const stripe = require("stripe")("sk_test_51KEpeQAQJmyoEYMDL6CtfzmeVezA7RO9W31G7W65nIqSrFhxxinW1QNNPB6Eb6KSEoFBNf9GJnClrgjhYcDpzGLv00wV6Hyje3");
//Api

//app config
const app = express();


//MiddleWare
app.use(cors({origin: true}));
app.use(express.json());


//API Routes
app.get('/',(request, response) => response.status(200).send("Hello Worls"));
app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log("Payments request received>>",total);

    const paymentIntent = await stripe.paymentIntent.create({
      amount: total,
      currency: "usd",
    })

    response.status(201).send({
      clientSecret: paymentIntent.client_secret,
    })
})


//Listen Command
//(http://localhost:5001/challenge-e932f/us-central1/api).

exports.api = functions.https.onRequest(app);