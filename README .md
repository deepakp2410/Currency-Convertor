# Currency Converter

This is a web-based application that allows users to convert currency values from one currency to another based on real-time exchange rates.

## Features

- Convert amounts from one currency to another.
- Automatically fetches the latest exchange rates using the Exchange Rate API.
- Supports a wide range of global currencies.
- Display of country flags corresponding to the selected currencies.
- Real-time error handling for API failures.

## Technologies Used

- HTML5 for the structure of the webpage.
- CSS3 for styling the webpage.
- JavaScript for handling the currency conversion logic.
- [ExchangeRate-API](https://www.exchangerate-api.com/) for fetching real-time exchange rates.
- FontAwesome for icons.
- FlagsAPI for displaying country flags.

## Setup and Usage

1. Clone the repository to your local machine.
   
2. In the root folder of the project, create the following files:
   - `index.html`
   - `style.css`
   - `codes.js`
   - `app.js`

3. Include the following HTML, CSS, and JavaScript files in the corresponding files you've created:
   - Copy the HTML code into `index.html`.
   - Copy the CSS code into `style.css`.
   - Copy the country list and API-related JavaScript into `codes.js`.
   - Copy the exchange rate functionality into `app.js`.

4. Open `index.html` in a web browser.

5. The default setup converts USD to INR, but you can change the currencies using the dropdown menus.

## API Key

This application uses the ExchangeRate-API. Make sure to replace the placeholder API key in the `app.js` file with your own valid API key. You can obtain one by signing up at the [ExchangeRate-API website](https://www.exchangerate-api.com/).

## How to Use

- Input the amount of currency you want to convert.
- Choose the currencies from the "From" and "To" dropdown lists.
- Click on the "Get Exchange Rate" button to fetch and display the conversion result.

## Showcase

To view a picture or video of this project, please visit my [LinkedIn profile](https://www.linkedin.com/feed/update/urn:li:activity:7242868855667093506/) where I've shared a demo showcasing its features.

## Known Issues

- Make sure you have a working internet connection, as the app fetches live exchange rates from the API.
- The API key may have a limit on the number of requests, so use it within the allowed limits.
