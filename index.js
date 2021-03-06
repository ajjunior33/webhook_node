require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

const Model = require('./model');
const PaymentReceivedOpenPixService = require('./services/PaymentReceivedOpenPixService');

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.get("/webhook", async (request, response) => {
    return response.status(200).json({
        "message": "Api UP"
    })
})
app.post('/webhook/webhook-client', async (req, res) => {
    console.log('Inside Callback hook', req.body)
    const { data } = req.body
    return res.status(200).end();
});

app.post("/webhook/webhook-request", async (request, response) => {
    console.log('Inside Callback hook', request.body)
})

app.post("/webhook/webhook-replace", async (request, response) => {
    console.log('Inside Callback hook', request.body)

    return response.status(200).json(request.body)
});

app.post("/webhook/webhook-openpix-received", async (request, response) => {
    try {
        console.log("Novo pagamento recebido");
        await PaymentReceivedOpenPixService(request.body);
        return response.status(200).json(request.body);
    } catch (err) {
	console.log(err);
        console.log("Houve um erro ao processar o pagamento.");
    }
});

const port = process.env.PORT
const api = process.env.API_URL;
app.listen(port, () => {
    console.log(`Client has been stated at: ${port} - api url ${api}`);
})
