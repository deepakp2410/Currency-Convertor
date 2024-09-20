// New API Key and Base URL
const apiKey = '2ba662e688ccf290441083c0';  // Replace with your actual API key
const BASE_URL = `https://v6.exchangerate-api.com/v6/${apiKey}/latest`;

// Elements from the DOM
const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

// Function to populate the currency dropdowns
for (let select of dropdowns) {
  for (let currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }

  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

// Function to fetch and display the exchange rate
const updateExchangeRate = async () => {
  let amount = document.querySelector(".amount input");
  let amtVal = amount.value;

  if (amtVal === "" || amtVal < 1) {
    amtVal = 1;
    amount.value = "1";
  }

  try {
    // Fetch exchange rate data from the new API
    const URL = `${BASE_URL}/${fromCurr.value}`;
    let response = await fetch(URL);

    // Check if the response is okay
    if (!response.ok) {
      msg.innerText = `Error fetching exchange rate for ${fromCurr.value} to ${toCurr.value}.`;
      return;
    }

    let data = await response.json();

    // Check if the toCurr exists in the rates
    let rate = data.conversion_rates[toCurr.value];
    if (!rate) {
      msg.innerText = `Exchange rate not available for ${fromCurr.value} to ${toCurr.value}.`;
      return;
    }

    // Calculate and display the final amount
    let finalAmount = (amtVal * rate).toFixed(2);
    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
  } catch (error) {
    msg.innerText = "Error fetching exchange rate. Please try again later.";
    console.error("Error:", error);
  }
};

// Function to update country flags
const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

// Event listener for the button click
btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  updateExchangeRate();
});

// Auto fetch exchange rate on page load
window.addEventListener("load", () => {
  updateExchangeRate();
});
