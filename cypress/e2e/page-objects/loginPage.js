export class LoginPage {
  getUsernameInput() {
    return cy.get("#userName");
  }

  getPassportInput() {
    return cy.get("#password");
  }

  getLoginButton() {
    return cy.get("#login");
  }
}
