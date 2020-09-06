This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Zebra Developer Test
Author: Thomas Standing

## General Approach

* Use the provided carrier_cards.json as the payload from a mock API request to populate the page with insurance carrier cards. 
* Each carrier card should expand and contract smoothly when clicked to display additional information from the detail_body and features_html nodes in carrier_cards.json. (In the mockup, Liberty Mutual is expanded, the others are not.) 
* Cards with type 0 or 1 should have a blue button, cards with type 3 should have an orange button, cards with type 2 should have no button. Clicking the button should open a new tab with the address being the action.link of the card in carrier_cards.json. 
* Feature icons below the carrier name (next to the stars) are listed in the features node with the name of the icon. (The features list in the details section is from the features_html node.) 
* Carrier logos are not included, just use logo-carrier-sm-default.png from the assets folder as a placeholder. 
* Thoroughly unit test one of your components. (We’d rather see full coverage of one component than partial coverage of multiple.) 
* You will not use all the fields in carrier_cards.json. 
* Optional: Implement a sorter: by price, rating (stars), and alphabetical. (note: sorting of cards does not need to be animated) 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Credits 

Thanks to the react inline svg team https://github.com/gilbarbara/react-inlinesvg. This was the first time working with a large amount of svg, and this package made it possible.

