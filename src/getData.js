/*const getData = function() {
    return new Promise((resolve, reject) => {
        var url = "https://min-api.cryptocompare.com/data/generateAvg?fsym=ETH&tsym=USD&e=Coinbase&api_key=95b514849a7f4a7ccfd570eae8ae950a4fbb00e0ef2daa452e25521282163fc5";

        fetch(url)
            .then(res => res.json())
            .then(data => console.log(data))
            .then(data => resolve(data));

    });
}

export default getData;*/

export function getData() {
    return fetch("https://min-api.cryptocompare.com/data/generateAvg?fsym=ETH&tsym=USD&e=Coinbase&api_key=95b514849a7f4a7ccfd570eae8ae950a4fbb00e0ef2daa452e25521282163fc5")
        .then(data => data.json());
}