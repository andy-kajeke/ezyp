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

    fetch('https://vendors-gpaid.akhaninnovates.com/webapi/transaction/deposit', {
        method: 'POST',
        body: JSON.stringify(paymentData),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
    .then(response => {
        console.log(response.message)
    })
})

///////////////////////////////update from pay-leo/////////////////////////////////////////////////////
transactionsRoute.post('/payment/update', (req, res, body) => {

    // Any request with an XML payload will be parsed
    // and a JavaScript object produced on req.body
    // corresponding to the request payload.
    console.log(req.body);
    var response = req.body.request;

    res.status(200).end(); 
}); 


module.exports = transactionsRoute;
