const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const stripe = require("stripe")(
	// "sk_test_51NyfvVAPX1ijr8gkowNlOZt0PEhAd2BZ6hkQIJz5nFBWiAbC0AtBaG3AEVP8Wen8X30ChUnfjwIcvYUy6tpgsCRg00pwshDGve"
	process.env.KEY
);

// - App config
const app = express();

// - Middlewares

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
	const total = request.query.total;

	console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

	const paymentIntent = await stripe.paymentIntents.create({
		amount: total, // subunits of the currency
		currency: "usd",
	});

	// OK - Created
	response.status(201).send({
		clientSecret: paymentIntent.client_secret,
	});
});

exports.api = functions.https.onRequest(app);
// http://127.0.0.1:5001/clon-8fe2a/us-central1/api
