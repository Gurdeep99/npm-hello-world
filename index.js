import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi();
 
export default async function convertCurrencies(from, to, amount){

 const responce = await freecurrencyapi.latest({
    base_currency: from,
    currencies: to,
});
    // const amount_currency = responce.data[to] * amount;
  return "hello World" ;

}
