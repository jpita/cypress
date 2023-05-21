import { LoginPage } from "../e2e/page-objects/loginPage.js";
import { BookStorePage } from "../e2e/page-objects/bookStorePage.js";
const loginPage = new LoginPage();
const bookStorePage = new BookStorePage();

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("login", (username, password) => {
  cy.visit("/");
  loginPage.getLoginButton().click();
  loginPage.getUsernameInput().type(username);
  loginPage.getPassportInput().type(password);
  loginPage.getLoginButton().click();
  bookStorePage.getUsernameLabel().should("have.text", username);
});
