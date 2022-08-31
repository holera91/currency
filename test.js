const request = require('request');
const TELEGRAM_API_TOKEN = '1046333396:AAFIOoW3cC0itGbKBzXsIusoss2mSNj7SGA';
const TELEGRAM_URI = `https://api.telegram.org/bot${process.env.TELEGRAM_API_TOKEN}/sendMessage`;

const monoUrl = 'https://api.monobank.ua/bank/currency';
const privatUrl = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';

let currency;
console.log(newFunction());
function newFunction() {
    const request = require('request');
    let currency;
    request(privatUrl, function (error, response, body) {
        //console.error('error:', error); // Print the error if one occurred
        //console.log('statusCode:', response && response.statusCode); 
        // Print the response status code if a response was received
        //console.log('body:', body);

        // if ()
        currency = body;
    });
    return currency;
}

