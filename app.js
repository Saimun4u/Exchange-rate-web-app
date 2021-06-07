//DOM Element Selection

const currencyEl_one = document.getElementById("currency-one");
const amountEl_one = document.getElementById("amount-one");
const currencyEl_two = document.getElementById("currency-two");
const amountEl_two = document.getElementById("amount-two");

const rateEl = document.getElementById("rate");
const swap = document.getElementById("swap")

//Get exchange rates and update the DOM

function calculate(){

    const currency_one = currencyEl_one.value;
    const currency_two = currencyEl_two.value;

    console.log(currency_one, currency_two);

    fetch(`https://v6.exchangerate-api.com/v6/4f1fb9c0dc61d665f9dd0fec/latest/${currency_one}`)
    .then(res => res.json())
    .then(data => {
        const rate = data.conversion_rates[currency_two];

        rateEl.innerText = `1 ${currency_one} = ${currency_two} ${rate.toFixed(2)}`;

        const amount_two = data.conversion_rates[currency_two]

        amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
    })
}

//Event Listeners

currencyEl_one.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_two.addEventListener('input', calculate);

calculate();

