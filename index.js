require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

const Model = require('./model');

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/webhookjs-client', { useNewUrlParser: true, useUnifiedTopology: true });

app.post('/webhook-client', async(req, res) => {
    console.log('Inside Callback hook', req.body)
    const { data } = req.body
    await Model.create(data)
    return res.status(200).end();
});

app.post("/webhook-request", async(request,response) => {
    console.log('Inside Callback hook', request.body)
})

app.post("/webhook-replace", async(request,response) => {
    console.log('Inside Callback hook', request.body)
});
const port = process.env.PORT
app.listen(port, () => {
    console.log(`Client has been stated at: http://localhost:${port}`);
})
