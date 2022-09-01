const request = require('request');

const monoUrl = 'https://api.monobank.ua/bank/currency';
const privatUrl = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';
let currency;
let rateBuy;
let rateSell;
console.log(getCur(monoUrl));
function getCur(curResource, val) {
    if (curResource === privatUrl) {
        const request = require('request');

        request(privatUrl, function (error, response, body) {
            //console.error('error:', error); // Print the error if one occurred
            //console.log('statusCode:', response && response.statusCode); 
            // Print the response status code if a response was received
            //console.log('body:', body);

            // if ()
            rateBuy = body;
            console.log(rateBuy);
        });

    }
    if (curResource === monoUrl) {
        const request = require('request');

        request(monoUrl, function (error, response, body) {
            //console.error('error:', error); // Print the error if one occurred
            //console.log('statusCode:', response && response.statusCode); 
            // Print the response status code if a response was received
            //console.log('body:', body);

            // if ()
            rateBuy = body;
            console.log(rateBuy);
        });

    }
    return rateBuy, rateSell;
}

