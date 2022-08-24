



//отримуємо курси від Монобанк
const axios = require('axios').default;
const monoUrl = 'https://api.monobank.ua/bank/currency';
const curCur = (response) => {
const {data} = response;
   };
axios.get(monoUrl).then(curCur);


    


//витягуємо з масиву курс USD, EUR,POL
/*
        for (let i = 0; i < curCur.length; i++)
        {  
        if((curCur[i].currencyCodeA == 840) && (curCur[i].currencyCodeB == 980))
        {
        const usdBuy = curCur[i].rateBuy;
        const usdSell = curCur[i].rateSell;    
        console.log(`USD покупка${usdBuy}`);
        console.log(`USD продаж${usdSell}`);
        }
        if((curCur[i].currencyCodeA == 978) && (curCur[i].currencyCodeB == 980))
        {
        const eurBuy = curCur[i].rateBuy;
        const eurSell = curCur[i].rateSell;    
        console.log(`EUR покупка${eurBuy}`);
        console.log(`EUR продаж${eurSell}`);
        }
        if((curCur[i].currencyCodeA == 985) && (curCur[i].currencyCodeB == 980))
        {
        const polZl = curCur[i].rateCross;  
        console.log(`Курс Злотий${polZl}`);
    
        }
        else
        {
        console.log("нема нічьо")
        }
    
        }
        */
     

    