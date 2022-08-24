//перевірка курсів Монобанк
const axios = require('axios').default;axios.get('https://api.monobank.ua/bank/currency')
.then(function (response) {
  // handle success
  console.log(response);
})
.catch(function (error) {
  // handle error
  console.log(error);
})
.then(function () {
  // always executed
});