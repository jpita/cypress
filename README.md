# Downloading the project

`git clone https://github.com/jpita/cypress.git`

then `cd` into the project

`cd cypress`

# Installation

In order to run the tests you need to install all dependencies:

run `npm install` from the root of the project

# How to run the tests

## Run all the tests

`npm test`

Or

`npx run cypress`

## Run only the API test

`npx cypress run --spec "cypress/e2e/specs/api-spec.cy.js"`

Or

`npm run cypress:run:api`

## Run only the E2E test

`npx cypress run --spec "cypress/e2e/specs/e2e-spec.cy.js"`

Or

`npm run cypress:run:e2e`

## Open cypress to see the test running

`npx cypress open --e2e --browser electron`

Or

`npm run cypress:open`

# NOTES

- I used the page object design pattern in order for the code to be more readable and maintainable.
- I chose to make the tests the most atomic as possible by not keeping the cookies and not leaving the page open from the previous test
