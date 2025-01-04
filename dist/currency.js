
const API_URL = "https://v6.exchangerate-api.com/v6/f6616cf99077cc0e3252c9b8/latest";

document.addEventListener("DOMContentLoaded", async () => {
  const fromCurrency = document.getElementById("from-currency");
  const toCurrency = document.getElementById("to-currency");
  const resultDiv = document.getElementById("result");

  // Fetch currency list and populate dropdowns
  const response = await fetch(API_URL + "/USD");
  const data = await response.json();

  if (data.result !== "success") {
    resultDiv.innerText = "Failed to load currencies. Please try again.";
    return;
  }

  const currencies = Object.keys(data.conversion_rates);
  currencies.forEach(currency => {
    const optionFrom = document.createElement("option");
    optionFrom.value = currency;
    optionFrom.innerText = currency;
    fromCurrency.appendChild(optionFrom);

    const optionTo = document.createElement("option");
    optionTo.value = currency;
    optionTo.innerText = currency;
    toCurrency.appendChild(optionTo);
  });

  fromCurrency.value = "USD";
  toCurrency.value = "EUR";

  // Convert currency on form submission
  document.getElementById("converter-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const amount = parseFloat(document.getElementById("amount").value);
    const from = fromCurrency.value;
    const to = toCurrency.value;

    const conversionResponse = await fetch(`${API_URL}/${from}`);
    const conversionData = await conversionResponse.json();

    if (conversionData.result === "success") {
      const rate = conversionData.conversion_rates[to];
      const convertedAmount = (amount * rate).toFixed(2);
      resultDiv.innerText = `${amount} ${from} = ${convertedAmount} ${to}`;
    } else {
      resultDiv.innerText = "Failed to fetch exchange rate. Please try again.";
    }
  });
});
