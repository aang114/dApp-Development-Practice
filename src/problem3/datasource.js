// const fetch = require('node-fetch')
// import fetch from 'node-fetch';

class Datasource {
    constructor(url) {
        this.url = url;
    }

    async getPrices(dividePricesBy100=true) {
        const result = await fetch(this.url);
        const json = await result.json();

        const prices = json['data']['prices'];

        const pricesFinal = prices.map(price => {

            if (dividePricesBy100) {
                price.buy /= 100;
                price.sell /= 100;
            }

            const p = {
                pair : price.pair,
                mid : () => (price.buy + price.sell)/2,
                quote : () => price.pair.trim().slice(-3)
            }
            return p
        })

        return pricesFinal;

    }


}


export default Datasource;



// const ds = new Datasource('https://static.ngnrs.io/test/prices');
//
// ds.getPrices()
//     .then(prices => {
//         prices.forEach(price => {
//             console.log(`Mid price for ${ price.pair } is ${ price.mid() } ${ price.quote() }.`);
//         });
//     }).catch(error => {
//     console.error(error);
// });

