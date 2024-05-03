This project is bootstrapped with [create-react-app](https://github.com/facebook/create-react-app).

# Getting Started

```
npm start
# or
yarn start
```
Runs the app in development mode.

Open http://localhost:3000 to view it in the browser.

# Project specifications

The deployed site can be viewed [here](https://flourishing-paletas-062476.netlify.app).

## Remit

This application fetches live cryptocurrency prices, using the CoinGecko API, and displays it to the user through an intuitive UI.
The UX is designed to be intuitive and easy to use.

### Structure

The application consists of two pages:

1. Dashboard
   This is the landing/home page. Here, the user sees a list of the top 10 cryptocurrencies ordered by descending market cap value.
   Each list item shows some additional information about the cryptocurrency.

1. Cryptocurrency Details Page
   When the user clicks on a cryptocurrency in the list on the home page, the user is redirected to the cryptocurrency
   details page. This page displays any relevant additional information about the cryptocurrency selected.

### Features

The app is built using ReactJS with Git as the versioning tool.

- An ability to select compared currency (eg. Coin price in ZAR, USD, BTC, etc.)
- Caching with React Redux
- Historical price data charts.
- Ability to set granularity on historical price charts (24hrs, 1 month, 1 year, etc.)
- App is deployed to a hosting service (Github Pages, Firebase, AWS Free EC2 tier, etc.)
- UI design follows industry standards.
- Integrates with MetaMask
  - Accesses the user’s MetaMask wallet
  - Retrieves the list of coins in their wallet
  - A section at the top of the app (called “My Wallet”) displays a list of the user’s coins in their MetaMask wallet as well as pricing information of each coin

### Resources

- CoinGecko Website
- CoinGecko API
- React Redux
