const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const transactionsRoute = express.Router();

transactionsRoute.use(cors());

/////////////////////////////////////Payments/////////////////////////////////////////////////////////
transactionsRoute.post('/deposit_payment', (req, res) => {
    var business_code = '74983'; 
    var msisdn = req.body.msisdn;
    var amount = req.body.amount;

    let paymentData = {
        msisdn: msisdn,
        amount: amount,
        business_code: business_code
    };

    fetch('http://vendors-gpaid.akhaninnovates.com:2020/webapi/transaction/deposit', {
        method: 'POST',
        body: JSON.stringify(paymentData),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
    .then(response => {
        console.log(response.message)
    })
})

module.exports = transactionsRoute;
