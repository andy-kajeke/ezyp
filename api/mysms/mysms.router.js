const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const mysmsRoute = express.Router();

mysmsRoute.use(cors());

/////////////////////////////////////Payments/////////////////////////////////////////////////////////
mysmsRoute.post('/send', (req, res) => {
    var msisdn = req.body.msisdn;
    var message = req.body.message;
    const username = 'akhan';
    const password = 'Akh4n.com@';

    let smsData = {
        msisdn: msisdn,
        message: message,
        username: username,
        password: password
    }

    fetch('https://mysms.trueafrican.com/v1/api/esme/send', {
        method: 'POST',
        body: JSON.stringify(smsData),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
    .then(response => {
        console.log(response.message)
    })
})

module.exports = mysmsRoute;
