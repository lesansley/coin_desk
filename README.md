This project is bootstrapped with create-react-app](https://github.com/facebook/create-react-app).

# Getting Started
First, run the development server:

```
npm start
# or
yarn start
```
Runs the app in development mode.
Open http://localhost:3000 to view it in the browser.

# Project specifications

The deployed site can be viewed [here](https://flourishing-paletas-062476.netlify.app).

## Create an application which displays live cryptocurrency prices

You are required to develop an application which fetches live cryptocurrency prices, using the CoinGecko API, and display it
to the user through an intuitive UI. There are no strict design guidelines, or design resource files. You are expected to
create the design yourself. The design can be as simple or as intricate as you want it to be - this is not a UI design role.
However keep in mind that the UX should be intuitive and easy to use. You can refer to the CoinGecko site for a general
guideline, or any other crypto exchange site.

### Requirements

The application should consist of at least two pages:

1. Dashboard
   This is the landing/home page. Here, the user should see a list of the top 10 cryptocurrencies. Ie. the 10 cryptocurrencies
   with the largest market cap value. The list should be arranged from highest to lowest market cap. Additionally, each list
   item should also show some additional information about the cryptocurrency. At the minimum the current price of the
   cryptocurrency should be shown.

1. Cryptocurrency Details Page
   When the user clicks on a cryptocurrency in the list on the home page, the user should be redirected to the cryptocurrency
   details page. This page should show any relevant additional information about the cryptocurrency selected. This can be a
   simple list or grid of items showing the price, market cap, total supply, market rank. Add as much detail as possible, which
   you think is appropriate. Again, you can refer to the CoinGecko site for some guidelines.

### Constraints

Build the app using ReactJS or React Native
Use a Git versioning tool. Ensure clear commit messages and version control standards are used
Your code must compile! Someone from Octoco needs to be able to run your project locally and asses the performance
All prices should be displayed in ZAR

**Bonus Marks**

The following functionality is optional, but highly recommended if you are applying for an intermediate or senior role.
You can choose which functionality you want to add, but the more the better!

- Implement the project using TypeScript
- Add ability to select compared currency (eg. Coin price in ZAR, USD, BTC, etc.)
- Caching with React Redux
- Add historical price data charts. You can choose what datasets you want to chart, for example:
  - Coin price (24hrs, 1 month, 1 year, etc.)
  - Coin market cap (24hrs, 1 month, 1 year, etc.)
  - Trading volume
- Ability to set granularity on historical price charts (24hrs, 1 month, 1 year, etc.)
- Progressive web app (scalable for desktop, tablet and mobile)
- App is deployed to a hosting service (Github Pages, Firebase, AWS Free EC2 tier, etc.)
- Exceptional UI design following industry standards, such as material design guidelines. Use an industry standard UI design tool such as Figma or Adobe XD for extra bonus marks ;)
- Dynamically load and display more currencies on the home page when the user scrolls to the bottom of the list. Start out with the top 100 cryptocurrencies at first, sort as necessary by market cap.
- Integration with MetaMask
  - Access the user’s MetaMask wallet
  - Retrieve the list of coins in their wallet
  - Add a section/page to the app called “My Wallet” which displays a list of the user’s coins in their MetaMask wallet as well as pricing information of each coin

### Resources

- CoinGecko Website
- CoinGecko API
- React Redux

### Criteria

You will be assessed on the following criteria:

- Cleanliness
- Readability
- Optimisation
- Scalability/Reusability
- Design Patterns
